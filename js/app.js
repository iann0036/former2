var extension_available = false;
var region = 'us-east-1';
var output_objects = [];
var _AWS = AWS;
var visited_sections = [];
var ping_extension_interval = null;
var stack_parameters = [];
var MAX_DT_SCANS = 10;

$(document).ready(function(){
    /* ========================================================================== */
    // Section Templating
    /* ========================================================================== */

    function nav(str) {
        return str.replace(/\s/g, "").replace(/\,/g, "").replace(/\-/g, "").replace(/\&amp\;/g, "And");
    }

    function navlower(str) {
        return str.toLowerCase().replace(/\s/g, "").replace(/\,/g, "").replace(/\-/g, "").replace(/\&amp\;/g, "and");
    }

    sections.forEach(section => {
        var html = `
            <div id="section-${navlower(section.category)}-${navlower(section.service)}" class="former2-section" data-section-breadcrumb1-title="${section.category}" data-section-breadcrumb1-link="#section-${navlower(section.category)}-${navlower(section.service)}" data-section-title="${section.service}" style="display: none;">
            <section class="tabs-section">
                <div class="tabs-section-nav tabs-section-nav-inline">
                    <ul class="nav" role="tablist">
                    ${Object.keys(section.resourcetypes).map((resourcetype, i) => `
                        <li class="nav-item">
                            <a class="nav-link${i==0 ? " active" : ""}" href="#section-${navlower(section.category)}-${navlower(section.service)}-tab-${i}" role="tab" data-toggle="tab">
                                ${resourcetype}
                            </a>
                        </li>
                    `).join('\n')}
                    </ul>
                </div>

                <div class="tab-content">
                ${Object.keys(section.resourcetypes).map((resourcetype, i) => `
                    <div role="tabpanel" class="tab-pane fade${i==0 ? " in active show" : ""}" id="section-${navlower(section.category)}-${navlower(section.service)}-tab-${i}">
                        <div id="section-${navlower(section.category)}-${navlower(section.service)}-${navlower(resourcetype)}-toolbar" class="f2toolbar">
                            <button class="additems btn btn-primary" data-datatable="section-${navlower(section.category)}-${navlower(section.service)}-${navlower(resourcetype)}-datatable" disabled>
                                <i class="font-icon font-icon-plus"></i> Add Selected
                            </button>
                            ${section.resourcetypes[resourcetype].terraformonly ? `<span style="margin-left: 16px; display: inline-block; vertical-align: middle; line-height: 16px; color: #6c7a86; font-weight: 600;"><i class="fa fa-info-circle"></i> Terraform only</span>` : ""}
                        </div>
                        <div class="table-responsive">
                            <table id="section-${navlower(section.category)}-${navlower(section.service)}-${navlower(resourcetype)}-datatable"
                                class="table table-striped f2datatable"
                                data-toolbar="#section-${navlower(section.category)}-${navlower(section.service)}-${navlower(resourcetype)}-toolbar"
                                data-search="true"
                                data-show-refresh="true"
                                data-show-toggle="true"
                                data-show-columns="true"
                                data-show-export="true"
                                data-detail-view="true"
                                data-detail-formatter="detailFormatter"
                                data-minimum-count-columns="2"
                                data-show-pagination-switch="true"
                                data-pagination="true"
                                data-id-field="id"
                                data-page-size="All"
                                data-page-list="[10, 25, 50, 100, ALL]"
                                data-show-footer="false"
                                data-response-handler="responseHandler">
                            </table>
                        </div>
                    </div>
                `).join('\n')}
                </div>
            </section>
            </div>
        `;

        $('#templated-section-container').append(html);
        
        Object.keys(section.resourcetypes).forEach(resourcetype => {
            $(`#section-${navlower(section.category)}-${navlower(section.service)}-${navlower(resourcetype)}-datatable`).on('refresh.bs.table', window[`updateDatatable${nav(section.category)}${nav(section.service)}`]);
        });
    });


    /* ========================================================================== */
    // DataTable Pre-Config
    /* ========================================================================== */

    output_objects = [];

    window.operateEvents = {
        'click .like': function (e, value, row, index) {
            ;
        } // just an example, use later
    };

    function addAllTableRowsToTemplate(selector) {
        var ids = $.map($(selector).bootstrapTable('getData'), function (row) {
            output_objects.push({
                'id': row.f2id,
                'type': row.f2type,
                'data': row.f2data,
                'region': row.f2region
            });

            return row.f2id;
        });

        $('#generate-outputs').text("Generate (" + output_objects.length + ")");
        $('#generate-outputs').removeAttr('disabled');

        return ids;
    }

    function checkRelatedResources(rows) {
        var check_objects = [];
        var related_resources = {};
        var related_resources_post = {};
        $('.f2datatable').each(function() {
            var datatableid = this.id;
            var ids = $.map($("#" + this.id).bootstrapTable('getData'), function (checkobjectrow) {
                check_objects.push({
                    'id': checkobjectrow.f2id,
                    'type': checkobjectrow.f2type,
                    'data': checkobjectrow.f2data,
                    'region': checkobjectrow.f2region,
                    'datatableid': datatableid
                });
    
                return checkobjectrow.f2id;
            });
        });
        mapped_check_objects = performF2Mappings(check_objects);
        mapped_check_objects.forEach(obj => {
            rows.forEach(row => {
                // looks for relationships from the row to the check objects
                if (obj.obj.id == row.f2id && obj.type && RELATIONSHIP_TYPE_MAP[obj.type] && RELATIONSHIP_TYPE_MAP[obj.type]['Relationships']) {
                    var relationships = RELATIONSHIP_TYPE_MAP[obj.type]['Relationships'];
                    Object.keys(relationships).forEach(relationshiptype => {
                        var readable_relationship_type = relationshiptype;

                        if (relationshiptype == "IsContainedInside") {
                            readable_relationship_type = "Is Contained Inside";
                        } else if (relationshiptype == "Uses") {
                            readable_relationship_type = "Uses";
                        } else if (relationshiptype == "IsAssociatedWith") {
                            readable_relationship_type = "Is Associated With";
                        } else if (relationshiptype == "References") {
                            readable_relationship_type = "References";
                        } else {
                            f2log("Unknown relationship type");
                            readable_relationship_type = "Related To";
                        }

                        Object.keys(relationships[relationshiptype]).forEach(relatedresourcetype => {
                            if (!Array.isArray(relationships[relationshiptype][relatedresourcetype])) {
                                relationships[relationshiptype][relatedresourcetype] = [
                                    relationships[relationshiptype][relatedresourcetype]
                                ]; // always in array
                            }
                            relationships[relationshiptype][relatedresourcetype].forEach(relation => {
                                var propertyname = relation['PropertyName'];
                                if (propertyname && obj.options.cfn[propertyname]) {
                                    if (relation['Arity'] == "Many" && Array.isArray(obj.options.cfn[propertyname])) {
                                        obj.options.cfn[propertyname].forEach(propertyvalue => {
                                            if (relation['EmbeddedPropertyName'] && typeof propertyvalue == "object") {
                                                propertyvalue = propertyvalue[relation['EmbeddedPropertyName']];
                                            }
                                            mapped_check_objects.forEach(child_obj => {
                                                if (child_obj.obj.id != obj.obj.id && child_obj.type == relatedresourcetype && JSON.stringify(child_obj.obj.data).includes(propertyvalue)) {
                                                    var is_duplicate = false;
                                                    if (!Array.isArray(related_resources[readable_relationship_type])) {
                                                        related_resources[readable_relationship_type] = [];
                                                    }
                                                    for (var related_resource in related_resources[readable_relationship_type]) { // check if already added
                                                        if (related_resources[readable_relationship_type][related_resource].obj.id == child_obj.obj.id) {
                                                            is_duplicate = true;
                                                        }
                                                    };
                                                    if (!is_duplicate) {
                                                        related_resources[readable_relationship_type].push(child_obj);
                                                    }
                                                }
                                            });
                                        });
                                    } else {
                                        var propertyvalue = obj.options.cfn[propertyname];
                                        mapped_check_objects.forEach(child_obj => {
                                            if (child_obj.obj.id != obj.obj.id && child_obj.type == relatedresourcetype && JSON.stringify(child_obj.obj.data).includes(propertyvalue)) {
                                                var is_duplicate = false;
                                                if (!Array.isArray(related_resources[readable_relationship_type])) {
                                                    related_resources[readable_relationship_type] = [];
                                                }
                                                for (var related_resource in related_resources[readable_relationship_type]) { // check if already added
                                                    if (related_resources[readable_relationship_type][related_resource].obj.id == child_obj.obj.id) {
                                                        is_duplicate = true;
                                                    }
                                                };
                                                if (!is_duplicate) {
                                                    related_resources[readable_relationship_type].push(child_obj);
                                                }
                                            }
                                        });
                                    }
                                }
                            });
                        });
                    });
                }
            });

            // looks for relationships from the check objects to the row
            if (obj.type && RELATIONSHIP_TYPE_MAP[obj.type] && RELATIONSHIP_TYPE_MAP[obj.type]['Relationships']) {
                var relationships = RELATIONSHIP_TYPE_MAP[obj.type]['Relationships'];
                Object.keys(relationships).forEach(relationshiptype => {
                    var readable_relationship_type = relationshiptype;

                    // inverted
                    if (relationshiptype == "IsContainedInside") {
                        readable_relationship_type = "Contains";
                    } else if (relationshiptype == "Uses") {
                        readable_relationship_type = "Is Used By";
                    } else if (relationshiptype == "IsAssociatedWith") {
                        readable_relationship_type = "Is Associated With";
                    } else if (relationshiptype == "References") {
                        readable_relationship_type = "Is Referenced By";
                    } else {
                        f2log("Unknown relationship type");
                        readable_relationship_type = "Related To";
                    }

                    Object.keys(relationships[relationshiptype]).forEach(relatedresourcetype => {
                        if (!Array.isArray(relationships[relationshiptype][relatedresourcetype])) {
                            relationships[relationshiptype][relatedresourcetype] = [
                                relationships[relationshiptype][relatedresourcetype]
                            ]; // always in array
                        }
                        relationships[relationshiptype][relatedresourcetype].forEach(relation => {
                            var propertyname = relation['PropertyName'];
                            if (propertyname && obj.options.cfn[propertyname]) {
                                if (relation['Arity'] == "Many" && Array.isArray(obj.options.cfn[propertyname])) {
                                    obj.options.cfn[propertyname].forEach(propertyvalue => {
                                        if (relation['EmbeddedPropertyName'] && typeof propertyvalue == "object") {
                                            propertyvalue = propertyvalue[relation['EmbeddedPropertyName']];
                                        }
                                        rows.forEach(row => {
                                            var row_check_object = null;
                                            mapped_check_objects.forEach(child_obj => {
                                                if (child_obj.obj.id == row.f2id) {
                                                    row_check_object = child_obj;
                                                }
                                            });
                                            if (row.f2id != obj.obj.id && row_check_object.type == relatedresourcetype && JSON.stringify(row_check_object.obj.data).includes(propertyvalue)) {
                                                var is_duplicate = false;
                                                if (!Array.isArray(related_resources_post[readable_relationship_type])) {
                                                    related_resources_post[readable_relationship_type] = [];
                                                }
                                                for (var related_resource in related_resources_post[readable_relationship_type]) { // check if already added
                                                    if (related_resources_post[readable_relationship_type][related_resource].obj.id == obj.obj.id) {
                                                        is_duplicate = true;
                                                    }
                                                };
                                                if (!is_duplicate) {
                                                    related_resources_post[readable_relationship_type].push(obj);
                                                }
                                            }
                                        });
                                    });
                                } else {
                                    var propertyvalue = obj.options.cfn[propertyname];
                                    rows.forEach(row => {
                                        var row_check_object = null;
                                        mapped_check_objects.forEach(child_obj => {
                                            if (child_obj.obj.id == row.f2id) {
                                                row_check_object = child_obj;
                                            }
                                        });
                                        if (row.f2id != obj.obj.id && row_check_object.type == relatedresourcetype && JSON.stringify(row_check_object.obj.data).includes(propertyvalue)) {
                                            var is_duplicate = false;
                                            if (!Array.isArray(related_resources_post[readable_relationship_type])) {
                                                related_resources_post[readable_relationship_type] = [];
                                            }
                                            for (var related_resource in related_resources_post[readable_relationship_type]) { // check if already added
                                                if (related_resources_post[readable_relationship_type][related_resource].obj.id == obj.obj.id) {
                                                    is_duplicate = true;
                                                }
                                            };
                                            if (!is_duplicate) {
                                                related_resources_post[readable_relationship_type].push(obj);
                                            }
                                        }
                                    });
                                }
                            }
                        });
                    });
                });
            }
        });

        // check for related row overlaps
        rows.forEach(row => {
            Object.keys(related_resources).forEach(restype => {
                for (var i=0; i<related_resources[restype].length; i++) {
                    if (related_resources[restype][i].obj.id == row.f2id) {
                        related_resources[restype].splice(i, 1);
                        i--;
                    }
                };
                if (related_resources[restype].length < 1) {
                    delete related_resources[restype];
                }
            });
            Object.keys(related_resources_post).forEach(restype => {
                for (var i=0; i<related_resources_post[restype].length; i++) {
                    if (related_resources_post[restype][i].obj.id == row.f2id) {
                        related_resources_post[restype].splice(i, 1);
                        i--;
                    }
                };
                if (related_resources_post[restype].length < 1) {
                    delete related_resources_post[restype];
                }
            });
        });

        // create modal if related resources exist
        if (Object.keys(related_resources).length || Object.keys(related_resources_post).length) {
            var html = '';
            var i = 1;
            Object.keys(related_resources).forEach(restype => {
                html += `<h5>${restype}</h5>
                <p>
                ${related_resources[restype].map(res => `
                    <div class="checkbox">
                        <input type="checkbox" id="related-check-${i}" class="related-check" data-f2id="${res.obj.id}" data-dt="${res.obj.datatableid}" data-splicelocation="${res.splicelocation}" data-post="false" checked="">
                        <label for="related-check-${i++}">${res.obj.id} (${res.type})</label>
                    </div>
                `).join('')}
                </p>`;
            });
            Object.keys(related_resources_post).forEach(restype => {
                html += `<h5>${restype}</h5>
                <p>
                ${related_resources_post[restype].map(res => `
                    <div class="checkbox">
                        <input type="checkbox" id="related-check-${i}" class="related-check" data-f2id="${res.obj.id}" data-dt="${res.obj.datatableid}" data-splicelocation="${res.splicelocation}" data-post="true" checked="">
                        <label for="related-check-${i++}">${res.obj.id} (${res.type})</label>
                    </div>
                `).join('')}
                </p>`;
            });
            $('#relatedresources').html(html);
            $('#add-related-selectall').prop('checked', true);
            $('#relatedmodal').modal('show');
        }

        $("#add-related-selectall").off('click').on('click', function(){
            $(".related-check").prop("checked",$("#add-related-selectall").is(":checked"));
        });
        
        $('#related-add-selected-button').off('click').on('click', function(){
            $('.related-check').each(function(i){
                var check_element = $(this);
                if (check_element.is(':checked')) {
                    $.map($("#" + check_element.attr('data-dt')).bootstrapTable('getData'), function (row) {
                        if (row.f2id == check_element.attr('data-f2id')) {
                            var exists = false;
                            output_objects.forEach(output_object => { // check if already added
                                if (output_object.id == row.f2id && output_object.region == row.f2region && output_object.type == row.f2type) {
                                    exists = true;
                                }
                            });
                            if (exists) return null;

                            if (check_element.attr('data-post') == "true") {
                                output_objects.push({
                                    'id': row.f2id,
                                    'type': row.f2type,
                                    'data': row.f2data,
                                    'region': row.f2region
                                });
                            } else {
                                output_objects.unshift({
                                    'id': row.f2id,
                                    'type': row.f2type,
                                    'data': row.f2data,
                                    'region': row.f2region
                                });
                            }
                        }
                    });
                }
            });
        
            $('#relatedmodal').modal('hide');
        
            $('#generate-outputs').text("Generate (" + output_objects.length + ")");
            $('#generate-outputs').removeAttr('disabled');
        });
    }

    function addSelectedRowsToTemplate(selector) {
        var ids = $.map($(selector).bootstrapTable('getSelections'), function (row) {
            var exists = false;
            output_objects.forEach(output_object => { // check if already added
                if (output_object.id == row.f2id && output_object.region == row.f2region && output_object.type == row.f2type) {
                    exists = true;
                }
            });
            if (exists) return null;
            
            output_objects.push({
                'id': row.f2id,
                'type': row.f2type,
                'data': row.f2data,
                'region': row.f2region
            });

            //$(selector).bootstrapTable('refresh');

            return row.f2id;
        });

        $('#generate-outputs').text("Generate (" + output_objects.length + ")");
        $('#generate-outputs').removeAttr('disabled');

        // Check for associated resources
        if (window.localStorage.getItem('relatedresourcessetting') == "true") {
            checkRelatedResources($(selector).bootstrapTable('getSelections'));
        }

        return ids;
    }

    function initDatatableWithColumns(selector, columndata) {
        $(selector).bootstrapTable({
            iconsPrefix: 'font-icon',
            icons: {
                paginationSwitchDown:'font-icon-arrow-square-down',
                paginationSwitchUp: 'font-icon-arrow-square-down up',
                refresh: 'font-icon-refresh',
                toggleOn: 'font-icon-list-square',
                toggleOff: 'font-icon-list-square',
                columns: 'font-icon-list-rotate',
                export: 'font-icon-download',
                detailOpen: 'font-icon-plus',
                detailClose: 'font-icon-minus-1'
            },
            paginationPreText: '<i class="font-icon font-icon-arrow-left"></i>',
            paginationNextText: '<i class="font-icon font-icon-arrow-right"></i>',
            columns: columndata
        });
    }

    /* ========================================================================== */
    // DataTable Initializations
    /* ========================================================================== */

    sections.forEach(section => {
        Object.keys(section.resourcetypes).forEach(resourcetype => {
            var selector = "#section-" + navlower(section.category) + "-" + navlower(section.service) + "-" + navlower(resourcetype) + "-datatable";

            initDatatableWithColumns(selector, section.resourcetypes[resourcetype].columns);
        });
    });

    initDatatableWithColumns('#section-search-datatable', [
        [
            {
                field: 'state',
                checkbox: true,
                rowspan: 2,
                align: 'center',
                valign: 'middle'
            },
            {
                title: 'Primary ID',
                field: 'f2id',
                rowspan: 2,
                align: 'center',
                valign: 'middle',
                sortable: true,
                footerFormatter: textFormatter
            },
            {
                title: 'Type',
                field: 'f2type',
                sortable: true,
                footerFormatter: textFormatter,
                align: 'center'
            }
        ],
        []
    ]);

    /* ========================================================================== */
    // DataTable Post-Config
    /* ========================================================================== */

    $('.f2datatable').on('check.bs.table uncheck.bs.table ' +
        'check-all.bs.table uncheck-all.bs.table', function () {
            $('.additems').each(function(index) {
                $(this).prop('disabled', !$("#" + $(this).attr('data-datatable')).bootstrapTable('getSelections').length);
            });
    });

    // Custom checkboxes
    $('.f2datatable').on('post-body.bs.table', function () {
        var dtid = $(this).attr('id');
        $('#' + dtid + ' :checkbox').each(function () {
            if (!$(this).parent().hasClass('checkbox')) {
                if ($(this).attr('data-index')) {
                    var rowid = dtid + "-row-" + $(this).attr('data-index');
                    $(this).attr('id', rowid);
                    $(this).wrap('<div class="checkbox checkbox-only"></div>').after('<label for="' + rowid + '"></label>');
                }
            }
        });

        // Select All checkboxes
        $('input[name="btSelectAll"]').each(function () {
            if (!$(this).parent().hasClass('checkbox')) {
                var selectallid = $(this).closest(".f2datatable").attr("id") + "-selectallcheck";
                $(this).attr('id', selectallid);
                $(this).wrap('<div class="checkbox checkbox-only"></div>').after('<label for="' + selectallid + '"></label>');
            }
        });
    });

    $('.additems').click(function () {
        var ids = addSelectedRowsToTemplate("#" + $(this).attr('data-datatable'));

        $(this).closest(".table-responsive").find(".f2datatable").bootstrapTable('uncheckAll');
        $(this).closest(".table-responsive").find(".f2datatable tr.selected").removeClass('selected');
        
        $(this).prop('disabled', true);
    });

    $('.f2toolbar').find('select').change(function () { // unused
        $(this).bootstrapTable('refreshOptions', {
            exportDataType: $(this).val()
        });
    });

    /* ========================================================================== */
    // Search
    /* ========================================================================== */

    $('#minisearch-form').on('submit', function () {
        window.location.href = "#section-search";

        $('#search-input').val($('#minisearch-input').val());

        $('#search-form').submit();

        return false;
    });

    $('#search-form').on('submit', function () {
        $('#section-search-datatable').bootstrapTable('removeAll');

        $('.f2datatable').each(function(index) {
            if (this.id != "section-search-datatable") {
                var rows = $(this).bootstrapTable('getData');
                rows.forEach(row => {
                    var searchterm = $('#search-input').val();
                    if (JSON.stringify(row).includes(searchterm)) {
                        $('#section-search-datatable').deferredBootstrapTable('append', [row]);
                    }
                });
            }
        });

        $('#search-results').attr('style', '');
        $('#search-form').attr('style', 'background: #1873d2;');

        return false;
    });

    /* ========================================================================== */
    // Credentials
    /* ========================================================================== */

    var accesskey = window.localStorage.getItem('credentials-accesskey');
    if (accesskey) {
        $('#credentials-accesskey').val(accesskey);
    }
    var secretkey = window.localStorage.getItem('credentials-secretkey');
    if (secretkey) {
        $('#credentials-secretkey').val(secretkey);
    }
    var sessiontoken = window.localStorage.getItem('credentials-sessiontoken');
    if (sessiontoken) {
        $('#credentials-sessiontoken').val(sessiontoken);
    }
    var assumerole = window.localStorage.getItem('credentials-assumerole');
    if (assumerole) {
        $('#credentials-assumerole').val(assumerole);
    }

    $('#credentials-accesskey').on('change', () => {
        var val = $('#credentials-accesskey').val().trim();
        if (val == "") {
            window.localStorage.removeItem('credentials-accesskey');
        } else {
            window.localStorage.setItem('credentials-accesskey', val);
        }
        updateIdentity();
    });
    $('#credentials-secretkey').on('change', () => {
        var val = $('#credentials-secretkey').val().trim();
        if (val == "") {
            window.localStorage.removeItem('credentials-secretkey');
            $('.scan-account').attr('disabled', 'disabled');
        } else {
            window.localStorage.setItem('credentials-secretkey', val);
            $('.scan-account').removeAttr('disabled');
        }
        updateIdentity();
    });
    $('#credentials-sessiontoken').on('change', () => {
        var val = $('#credentials-sessiontoken').val().trim();
        if (val == "") {
            window.localStorage.removeItem('credentials-sessiontoken');
        } else {
            window.localStorage.setItem('credentials-sessiontoken', val);
        }
        updateIdentity();
    });
    $('#credentials-assumerole').on('change', () => {
        var val = $('#credentials-assumerole').val().trim();
        if (val == "") {
            window.localStorage.removeItem('credentials-assumerole');
        } else {
            window.localStorage.setItem('credentials-assumerole', val);
        }
        updateIdentity();
    });

    /* ========================================================================== */
    // Navigation
    /* ========================================================================== */

    function refreshDatatableFirstVisit(urlpart) {
        sections.forEach(section => {
            if (urlpart == navlower(section.category) + "-" + navlower(section.service)) {
                if (!visited_sections.includes("all") && !visited_sections.includes(urlpart)) {
                    visited_sections.push(urlpart);
                    window[`updateDatatable${nav(section.category)}${nav(section.service)}`]();
                }
            }
        });
    }

    function doNavigation() {
        $('#header-button-copy-cfn').attr('style', 'display: none;');
        $('#header-button-import-cfn').attr('style', 'margin-left: 16px; display: none;');
        $('#header-button-copy-tf').attr('style', 'display: none;');
        $('#header-button-copy-troposphere').attr('style', 'display: none;');
        $('#header-button-copy-cdkts').attr('style', 'display: none;');
        $('#header-button-copy-raw').attr('style', 'display: none;');

        if ($(location.hash).length) {
            if (location.hash == "#section-dashboard" || location.hash == "#section-search") {
                $('.section-header').attr('style', 'display: none;');
            } else {
                $('.section-header').removeAttr('style');
            }

            $('li.opened').removeClass('opened');
            $('li[data-category=\'' + location.hash.split("-")[1] + '\']').addClass('opened');

            $('.former2-section').attr('style', 'display: none;');
            $(location.hash).attr('style', 'display: block;');

            $('#header-title').html(
                $(location.hash).attr('data-section-title')
            );
            $('#header-breadcrumb1').text(
                $(location.hash).attr('data-section-breadcrumb1-title')
            );
            $('#header-breadcrumb1').attr(
                'href',
                $(location.hash).attr('data-section-breadcrumb1-link')
            );
            $('#header-breadcrumb2').text(
                $(location.hash).attr('data-section-title')
            );

            $('#header-breadcrumb').attr('style', '');

            window.scrollTo({ top: 0 });
            
            $('#header-button-clear-outputs').attr('style', 'margin-left: 16px; display: none;');
            if (location.hash == "#section-outputs-cloudformation") {
                $('#header-button-copy-cfn').attr('style', '');
                $('#header-button-import-cfn').attr('style', 'margin-left: 16px;');
                $('#header-button-clear-outputs').attr('style', 'margin-left: 16px;');
                
                setTimeout(function(){
                    cfn_editor.refresh();
                    tippy('.f2replacementmarker', {
                        content: "Value requires replacement",
                        placement: "right",
                        theme: "material"
                    });
                }, 1);
            } else if (location.hash == "#section-outputs-tf") {
                $('#header-button-copy-tf').attr('style', '');
                $('#header-button-clear-outputs').attr('style', 'margin-left: 16px;');

                setTimeout(function(){
                    tf_editor.refresh();
                    tippy('.f2replacementmarker', {
                        content: "Value requires replacement",
                        placement: "right",
                        theme: "material"
                    });
                }, 1);
            } else if (location.hash == "#section-outputs-troposphere") {
                $('#header-button-copy-troposphere').attr('style', '');
                $('#header-button-clear-outputs').attr('style', 'margin-left: 16px;');

                setTimeout(function(){
                    troposphere_editor.refresh();
                    tippy('.f2replacementmarker', {
                        content: "Value requires replacement",
                        placement: "right",
                        theme: "material"
                    });
                }, 1);
            } else if (location.hash == "#section-outputs-cdkts") {
                $('#header-button-copy-cdkts').attr('style', '');
                $('#header-button-clear-outputs').attr('style', 'margin-left: 16px;');

                setTimeout(function(){
                    cdkts_editor.refresh();
                    tippy('.f2replacementmarker', {
                        content: "Value requires replacement",
                        placement: "right",
                        theme: "material"
                    });
                }, 1);
            } else if (location.hash == "#section-outputs-raw") {
                $('#header-button-copy-raw').attr('style', '');
                $('#header-button-clear-outputs').attr('style', 'margin-left: 16px;');

                setTimeout(function(){
                    raw_editor.refresh();
                }, 1);
            } else if (location.hash.startsWith("#section-")) {
                refreshDatatableFirstVisit(location.hash.substring(9));
            }
        } else if (location.hash != "" && location.hash != "#") {
            $.notify({
                icon: 'font-icon font-icon-warning',
                title: '<strong>Not Yet Implemented</strong>',
                message: 'This action is not available at this time.'
            },{
                type: 'warning'
            });
        } else {
            $('li.opened').removeClass('opened');

            if (window.localStorage.getItem('credentials-accesskey')) { // load dashboard
                $('li[data-category=\'dashboard\']').addClass('opened');

                $('.former2-section').attr('style', 'display: none;');
                $('#section-dashboard').attr('style', 'display: block;');

                $('.section-header').attr('style', 'display: none;');
            } else { // load setup
                $('li[data-category=\'setup\']').addClass('opened');
                $('#section-setup-introduction').attr('style', 'display: block;');

                $('#header-title').html(
                    $('#section-setup-introduction').attr('data-section-title')
                );
                $('#header-breadcrumb1').text(
                    $('#section-setup-introduction').attr('data-section-breadcrumb1-title')
                );
                $('#header-breadcrumb1').attr(
                    'href',
                    $('#section-setup-introduction').attr('data-section-breadcrumb1-link')
                );
                $('#header-breadcrumb2').text(
                    $('#section-setup-introduction').attr('data-section-title')
                );

                $('#header-breadcrumb').attr('style', '');
            }

            window.scrollTo({ top: 0 });
        }
    }

    window.addEventListener("hashchange", () => {
       doNavigation();
    }, false);

    /* ========================================================================== */
    // Outputs
    /* ========================================================================== */

    $("#generate-outputs").on('click', () => {
        regenerateOutputs().then(() => {
            window.location.href = "#section-outputs-cloudformation";
        });
    });

    function regenerateOutputs() {
        return new Promise(function(resolve, reject) {
            tracked_resources = performF2Mappings(output_objects);
            var mapped_outputs = compileOutputs(tracked_resources, null);

            cfn_editor.getDoc().setValue(mapped_outputs['cfn']);
            tf_editor.getDoc().setValue(mapped_outputs['tf']);
            troposphere_editor.getDoc().setValue(mapped_outputs['troposphere']);
            cdkts_editor.getDoc().setValue(mapped_outputs['cdkts']);
            raw_editor.getDoc().setValue(JSON.stringify(output_objects, null, 4));

            // Gutters
            [
                {key: 'cfn', editor: cfn_editor},
                {key: 'tf', editor: tf_editor}, 
                {key: 'troposphere', editor: troposphere_editor},
                {key: 'cdkts', editor: cdkts_editor}
            ].forEach(language => {
                var lines = mapped_outputs[language.key].split("\n");
                for (var i=0; i<lines.length; i++) {
                    if (lines[i].includes("REPLACEME")) {
                        language.editor.setGutterMarker(i, "f2gutter", makeReplacementMarker());
                    }
                }
            });

            setTimeout(function(){
                cfn_editor.refresh();
                tf_editor.refresh();
                troposphere_editor.refresh();
                cdkts_editor.refresh();
                raw_editor.refresh();
                tippy('.f2replacementmarker', {
                    content: "Value requires replacement",
                    placement: "right",
                    theme: "material"
                });
            }, 1);

            resolve();
        });
    }

    /* ========================================================================== */
    // Region Selector
    /* ========================================================================== */

    var region_map = {
        "us-east-1": "US East (N. Virginia)",
        "us-east-2": "US East (Ohio)",
        "us-west-1": "US West (N. California)",
        "us-west-2": "US West (Oregon)",
        "ap-east-1": "Asia Pacific (Hong Kong)",
        "ap-south-1": "Asia Pacific (Mumbai)",
        "ap-northeast-3": "Asia Pacific (Osaka-Local)",
        "ap-northeast-2": "Asia Pacific (Seoul)",
        "ap-southeast-1": "Asia Pacific (Singapore)",
        "ap-southeast-2": "Asia Pacific (Sydney)",
        "ap-northeast-1": "Asia Pacific (Tokyo)",
        "ca-central-1": "Canada (Central)",
        "eu-central-1": "EU (Frankfurt)",
        "eu-west-1": "EU (Ireland)",
        "eu-west-2": "EU (London)",
        "eu-west-3": "EU (Paris)",
        "eu-north-1": "EU (Stockholm)",
        "me-south-1": "Middle East (Bahrain)",
        "sa-east-1": "South America (S&#227;o Paulo)",
        "us-gov-east-1": "AWS GovCloud (US-Gov-East)",
        "us-gov-west-1": "AWS GovCloud (US-Gov-West)"
    };

    $('.region-item').on('click', el => {
        region = $(el.target).attr('data-region');

        $('#selected-region').html(region_map[region]);
        $('.region-item').removeAttr('style');
        $('.region-item[data-region=\'' + region + '\']').attr('style', 'font-weight: bold;')

        window.localStorage.setItem('region', region);

        for (var sp_index in stack_parameters) {
            if (stack_parameters[sp_index].name == "AWS::Region") {
                stack_parameters[sp_index].default_value = region;
            }
        }
    });
    
    var storedregion = window.localStorage.getItem('region');
    if (storedregion) {
        region = storedregion;
    } else {
        region = 'us-east-1';
    }
    $('#selected-region').html(region_map[region]);
    $('.region-item[data-region=\'' + region + '\']').attr('style', 'font-weight: bold;');
    stack_parameters.push({
        'name': 'AWS::Region',
        'default_value': region,
        'type': 'String'
    });

    /* ========================================================================== */
    // CodeMirror Init
    /* ========================================================================== */

    function copyStringToClipboard(str) {
        var el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
    }

    function setCopyEvent(selector, editor) {
        $(selector).bind('click', () => {
            $(selector).attr('disabled', 'disabled');
            copyStringToClipboard(editor.getDoc().getValue());
            $(selector).html("<i class=\"fa fa-files-o\"></i>&nbsp;&nbsp;Copied");
            setTimeout(() => {
                $(selector).removeAttr('disabled');
                $(selector).html("<i class=\"fa fa-files-o\"></i>&nbsp;&nbsp;Copy");
            }, 4000);
        });
    }

    cfn_editor = CodeMirror.fromTextArea(document.getElementById('cfn'), {
        lineNumbers: true,
        gutters: ["f2gutter", "CodeMirror-linenumbers"],
        lineWrapping: true,
        mode: "yaml",
        theme: "material",
        indentUnit: 4,
        height: "auto",
        viewportMargin: Infinity,
        scrollbarStyle: "null"
    });
    setCopyEvent('#header-button-copy-cfn', cfn_editor);

    tf_editor = CodeMirror.fromTextArea(document.getElementById('tf'), {
        lineNumbers: true,
        gutters: ["f2gutter", "CodeMirror-linenumbers"],
        lineWrapping: true,
        mode: "ruby",
        theme: "material",
        indentUnit: 4,
        height: "auto",
        viewportMargin: Infinity,
        scrollbarStyle: "null"
    });
    setCopyEvent('#header-button-copy-tf', tf_editor);

    troposphere_editor = CodeMirror.fromTextArea(document.getElementById('troposphere'), {
        lineNumbers: true,
        gutters: ["f2gutter", "CodeMirror-linenumbers"],
        lineWrapping: true,
        mode: "python",
        theme: "material",
        indentUnit: 4,
        height: "auto",
        viewportMargin: Infinity,
        scrollbarStyle: "null"
    });
    setCopyEvent('#header-button-copy-troposphere', troposphere_editor);

    cdkts_editor = CodeMirror.fromTextArea(document.getElementById('cdkts'), {
        lineNumbers: true,
        gutters: ["f2gutter", "CodeMirror-linenumbers"],
        lineWrapping: true,
        mode: "javascript",
        theme: "material",
        indentUnit: 4,
        height: "auto",
        viewportMargin: Infinity,
        scrollbarStyle: "null"
    });
    setCopyEvent('#header-button-copy-cdkts', cdkts_editor);

    raw_editor = CodeMirror.fromTextArea(document.getElementById('raw'), {
        lineNumbers: true,
        gutters: ["f2gutter", "CodeMirror-linenumbers"],
        lineWrapping: true,
        mode: "javascript",
        theme: "material",
        indentUnit: 4,
        height: "auto",
        viewportMargin: Infinity,
        scrollbarStyle: "null"
    });
    setCopyEvent('#header-button-copy-raw', raw_editor);

    $('#header-button-clear-outputs').click(function() {
        output_objects = [];
        regenerateOutputs();
        $('#generate-outputs').text("Generate");
        $('#generate-outputs').attr('disabled', 'disabled');
    });

    regenerateOutputs();

    /* ========================================================================== */
    // Account Scan
    /* ========================================================================== */

    $('.scan-account').on('click', () => {
        var completeddatatablecalls = 0;
        var datatablefuncs = [];

        $('.scan-account').attr('disabled', 'disabled');
        $('#search-no-scan-warning').attr('style', 'display: none;');

        Object.getOwnPropertyNames(window).forEach(prop => {
            if (prop.startsWith("updateDatatable")) {
                datatablefuncs.push(prop);
            }
        });

        var totaldatatables = datatablefuncs.length;

        $('.scan-account').html('Scanning... (0/' + totaldatatables + ')');

        function processDatatable(dt) {
            // var starttime = new Date();

            window[dt]().catch(err => {}).finally(() => {
                completeddatatablecalls += 1;
                $('.scan-account').html('Scanning... (' + completeddatatablecalls + '/' + totaldatatables + ')');
                if (completeddatatablecalls == totaldatatables) {
                    visited_sections.push("all");
                    $('.scan-account').removeAttr('disabled');
                    $('.scan-account').html('Scan Again');
                }

                // console.log("Finished " + dt + " - " + Math.ceil((new Date() - starttime)/1000)); // for performance testing

                var nextdt = datatablefuncs.shift();
                if (nextdt) {
                    processDatatable(nextdt);
                }
            });
        }

        for (var i=0; i<MAX_DT_SCANS; i++) {
            processDatatable(datatablefuncs.shift());
        }
    });

    $('#add-all-resources').on('click', () => {
        output_objects = [];
        $('.f2datatable').each(function() {
            addAllTableRowsToTemplate("#" + this.id);
        });
    });

    /* ========================================================================== */
    // AWS SDK Proxy for Extension (must be before Account Scan)
    /* ========================================================================== */

    class AWSConfigClass {
        static update(obj) {
            extensionSendMessage({
                action: 'configUpdate',
                obj: obj
            }, function(){});
        }
    }

    class AWSCredentialsClass {
        constructor(...args) {
            this.credentials = args;

            return args;
        }
    }

    function pingExtension() {
        return new Promise(function(resolve, reject) {
            extensionSendMessage(
                {
                    action: 'ping'
                },
                function(response) {
                    if (response) {
                        extension_available = true;

                        AWS = new Proxy({}, {
                            get: function(obj, prop) {
                                if (prop == "config") {
                                    return AWSConfigClass;
                                } else if (prop == "Credentials") {
                                    return AWSCredentialsClass;
                                }
                                
                                return function (service_params) {
                                    return new Proxy({
                                        'name': prop,
                                        'properties': service_params
                                    }, {
                                        get: function(service, service_action) {
                                            return (params, callback) => {
                                                extensionSendMessage(
                                                    {
                                                        action: 'serviceAction',
                                                        args: this.serviceArgs,
                                                        service: service,
                                                        service_action: service_action,
                                                        params: params
                                                    },
                                                    function(response) {
                                                        if (!response) {
                                                            callback("No response from extension", null);
                                                        } else if (!response.success) {
                                                            callback(response.error, response.data);
                                                        } else {
                                                            callback(null, response.data);
                                                        }
                                                    }
                                                );
                                            }
                                        }
                                    });
                                };
                            }
                        });

                        resolve();
                    } else {
                        reject();
                    }
                }
            );
        });
    };

    pingExtension().catch(() => {
        ping_extension_interval = setInterval(function(){ // continuously check for extension being present after 
            pingExtension().then(() => {
                clearInterval(ping_extension_interval);
                updateIdentity();
                $.notify({
                    icon: 'font-icon font-icon-success',
                    title: '<strong>Helper Available</strong>',
                    message: 'The Former2 helper is now active for all actions.'
                },{
                    type: 'success'
                });
            }).catch(() => {});
        }, 3000);
    }).finally(() => {
        updateIdentity().finally(doNavigation);
    });

    /* ========================================================================== */
    // Import
    /* ========================================================================== */

    $('#header-button-import-cfn').click(function(){
        $('#import-warnings').html("");
        $('#import-stackname').val("");

        var non_importable_resources = getNonImportableResources();
        non_importable_resources.forEach(res => {
            $('#import-warnings').append(`<div class="alert alert-warning" role="alert">
    <strong><i class="fa fa-warning"></i> Non-compatible Resource: </strong>${res.obj.id} (${res.type}). This resource will not be imported.
</div>`);
        });

        $('#import-button').attr('disabled','disabled');
        $('#import-button').text("Create Change Set");

        $('#import-button').off('click').on('click', function() {
            $('#import-button').attr('disabled', 'disabled');
            $('#import-button').text("Creating change set...");
            
            importResources($('#import-stackname').val(), $('#import-deletionpolicy').val());
        });

        $('#importmodal').modal('show');
    });

    $('#import-stackname').on('input', function() {
        if ($('#import-stackname').val() == "") {
            $('#import-button').attr("disabled", "disabled");
        } else {
            $('#import-button').removeAttr("disabled");
        }
    });

    $('#import-download-template').off('click').on('click', function() {
        downloadImportTemplate($('#import-stackname').val(), $('#import-deletionpolicy').val());
    });

    /* ========================================================================== */
    // Misc
    /* ========================================================================== */

    tippy('[data-tippy-content]', {
        theme: 'material'
    });

    $('.select2-no-search-arrow').select2({ // Selectors for settings
        minimumResultsForSearch: "Infinity",
        theme: "arrow"
    });

    $('.tags-field').tagEditor();

    $('#add-parameter-expand-link').click(function(){
        if ($("#add-parameter-expand-section").is(":hidden")) {
            $('#add-parameter-expand-link').html("[&ndash;] Advanced Settings");
        } else {
            $('#add-parameter-expand-link').html("[+] Advanced Settings");
        }
        $('#add-parameter-expand-section').slideToggle('fast');
    });

    $('#add-parameter-form').submit(function(e){
        e.preventDefault();

        if (!$('#add-parameter-name').val() || $('#add-parameter-name').val().length < 1) return;

        var allowed_values = $('#add-parameter-allowed-values').val();
        if (allowed_values && allowed_values.length) {
            allowed_values = allowed_values.split(",");
        }

        stack_parameters.unshift({
            'name': $('#add-parameter-name').val(),
            'description': $('#add-parameter-description').val(),
            'constraint_description': $('#add-parameter-constraint-description').val(),
            'default_value': $('#add-parameter-default-value').val(),
            'allowed_pattern': $('#add-parameter-allowed-pattern').val(),
            'allowed_values': allowed_values,
            'minimum_length': $('#add-parameter-minimum-length').val(),
            'maximum_length': $('#add-parameter-maximum-length').val(),
            'minimum_value': $('#add-parameter-minimum-value').val(),
            'maximum_value': $('#add-parameter-maximum-value').val(),
            'no_echo': $('#add-parameter-noecho').prop('checked'),
            'type': $('#add-parameter-type').val()
        });

        $('#add-parameter-name').val("");
        $('#add-parameter-default-value').val("");
        $('#add-parameter-description').val("");
        $('#add-parameter-constraint-description').val("");
        $('#add-parameter-allowed-pattern').val("");
        $('#add-parameter-allowed-values').val("");
        $('#add-parameter-minimum-length').val("");
        $('#add-parameter-maximum-length').val("");
        $('#add-parameter-minimum-value').val("");
        $('#add-parameter-maximum-value').val("");
        $('#add-parameter-noecho').prop('checked', false);
        $('#add-parameter-type').val("String");

        $('#add-parameter-name').focus();

        generateParameterTable();
    });
    
    var spacingamount = window.localStorage.getItem('cfnspacing');
    if (spacingamount && spacingamount == 2) {
        cfnspacing = "  ";
        $('#cfnspacing').val("2").trigger('change');
    } else {
        cfnspacing = "    ";
    }
    $('#cfnspacing').change(function() {
        window.localStorage.setItem('cfnspacing', $(this).val());
        if ($(this).val() == "2") {
            cfnspacing = "  ";
        } else if ($(this).val() == "4") {
            cfnspacing = "    ";
        }
    });

    logicalidstrategy = window.localStorage.getItem('logicalidstrategy') || 'longtypeprefixoptionalindexsuffix';
    $('#logicalidstrategy').val(logicalidstrategy).trigger('change');
    $('#logicalidstrategy').change(function() {
        window.localStorage.setItem('logicalidstrategy', $(this).val());
        logicalidstrategy = $(this).val();

        // Clear resource state
        output_objects = [];
        regenerateOutputs();
        $('#generate-outputs').text("Generate");
        $('#generate-outputs').attr('disabled', 'disabled');
    });

    if (window.localStorage.getItem('relatedresourcessetting') == "true") {
        $('#relatedresourcessetting').prop('checked', true);
    }
    $('#relatedresourcessetting').change(function() {
        window.localStorage.setItem('relatedresourcessetting', $(this).is(':checked').toString());
    });

    if (window.localStorage.getItem('credentials-secretkey')) {
        $('.scan-account').removeAttr('disabled');
    }

}); // <-- End of documentReady

/* ========================================================================== */
// Extension Request/Response
/* ========================================================================== */

var HELPER_EXTENSION_ID = "fhejmeojlbhfhjndnkkleooeejklmigi"; // Chrome
var active_firefoxaddon_requests = {};

document.addEventListener('f2response', msg => {
    var detail = JSON.parse(msg.detail);

    if (active_firefoxaddon_requests[detail.id]) {
        active_firefoxaddon_requests[detail.id](detail.data);
        delete active_firefoxaddon_requests[msg.id];
    } else {
        f2log("No callback found for request: " + detail.id);
    }
});

function extensionSendMessage(data, callback) {
    if (navigator.userAgent.search("Firefox") > -1) { // Firefox
        var uid = Math.random().toString(36);
        var event = new CustomEvent('f2request', {
            detail: JSON.stringify({
                id: uid,
                data: data
            })
        });
        active_firefoxaddon_requests[uid] = callback;
        document.dispatchEvent(event);
        if (data.action == "ping") { // quick timeout for ping
            setTimeout(function(callback){
                callback(null);
            }, 200, callback);
        }
    } else { // Chrome
        if (window.chrome && window.chrome.runtime) {
            chrome.runtime.sendMessage(HELPER_EXTENSION_ID, data, callback);
        } else {
            callback(null);
        }
    }
}

/* ========================================================================== */
// BlockUI
/* ========================================================================== */

function blockUI(selector) {
    $(selector).block({
        message: '<div class="blockui-default-message"><i class="fa fa-circle-o-notch fa-spin"></i><h6>Loading...</h6></div>',
        overlayCSS:  {
            background: 'rgba(142, 159, 167, 0.8)',
            opacity: 1,
            cursor: 'wait'
        },
        css: {
            width: '50%'
        },
        blockMsgClass: 'block-msg-default'
    });
}

function unblockUI(selector) {
    setTimeout(function(selector){
        $(selector).unblock();
    }, 200, selector);
}

/* ========================================================================== */

function makeReplacementMarker() {
    var marker = document.createElement("div");
    marker.classList.add("f2replacementmarker");
    marker.innerHTML = "<i style=\"color: #ffd301; font-size: .8em; padding-left: 6px;\" class=\"fa fa-warning\"></i>";
    return marker;
}

function generateParameterTable() {
    if (stack_parameters.length > 2) {
        var parameter_html = "";
        var p_index = 0;
        stack_parameters.forEach(stack_parameter => {
            if (!stack_parameter.name.startsWith("AWS::")) {
                parameter_html += "<tr><td>" + stack_parameter.name +
                    "</td><td>" + stack_parameter.type +
                    "</td><td>" + (stack_parameter.default_value ? stack_parameter.default_value : "") +
                    "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;<button onclick='removeParameter(" + p_index + ")' type='button' class='param-del'><i class='font-icon font-icon-trash'></i></button></td></tr>";
            }
            p_index += 1;
        });

        $('#parameter-list').html(parameter_html);

        $('#parameter-table').attr('style', '');
    } else {
        $('#parameter-table').attr('style', 'display: none;');
    }
}

function removeParameter(index) {
    stack_parameters.splice(index, 1);

    generateParameterTable();
}

function updateIdentity() {
    return new Promise(function(resolve, reject) {
        $('#user-id').html("...");

        AWS.config.update({
            credentials: new AWS.Credentials(
                window.localStorage.getItem('credentials-accesskey'),
                window.localStorage.getItem('credentials-secretkey'),
                window.localStorage.getItem('credentials-sessiontoken')
            ),
            region: region,
            httpOptions: {
                timeout: 60000
            }
        });

        if (window.localStorage.getItem('credentials-assumerole')) {
            sdkcall("STS", "assumeRole", {
                RoleArn: window.localStorage.getItem('credentials-assumerole'),
                RoleSessionName: "former2-session-" + window.localStorage.getItem('credentials-assumerole').split("/").pop()
            }, false).then((data) => {
                AWS.config.update({
                    credentials: new AWS.Credentials(
                        data.Credentials.AccessKeyId,
                        data.Credentials.SecretAccessKey,
                        data.Credentials.SessionToken
                    ),
                    region: region,
                    httpOptions: {
                        timeout: 60000
                    }
                });

                account = data.AssumedRoleUser.Arn.split(":")[4];

                var account_param_exists = false;
                for (var sp_index in stack_parameters) {
                    if (stack_parameters[sp_index].name == "AWS::AccountId") {
                        stack_parameters[sp_index].default_value = account;
                        account_param_exists = true;
                    }
                }
                if (!account_param_exists) {
                    stack_parameters.push({
                        'name': 'AWS::AccountId',
                        'default_value': account,
                        'type': 'String'
                    });
                }

                user = data.AssumedRoleUser.Arn.split("/").pop();
                sdkcall("IAM", "listAccountAliases", {
                    // no params
                }, false).then((accountAliases) => {
                    if (accountAliases.AccountAliases && accountAliases.AccountAliases.length) {
                        account = accountAliases.AccountAliases[0];
                    }
                    $('#user-id').html(user + " @ " + account);
                }).catch(err => {
                    $('#user-id').html(user + " @ " + account);
                });

                resolve();
            }).catch(err => {
                $('#user-id').html("");
                reject();
            });
        } else if (window.localStorage.getItem('credentials-accesskey')) {
            var account = "unknown-account";
            var user = "unknown-user";
            sdkcall("STS", "getCallerIdentity", {
                // no params
            }, false).then((callerid) => {
                account = callerid.Account;

                var account_param_exists = false;
                for (var sp_index in stack_parameters) {
                    if (stack_parameters[sp_index].name == "AWS::AccountId") {
                        stack_parameters[sp_index].default_value = account;
                        account_param_exists = true;
                    }
                }
                if (!account_param_exists) {
                    stack_parameters.push({
                        'name': 'AWS::AccountId',
                        'default_value': account,
                        'type': 'String'
                    });
                }

                user = callerid.Arn.split("/").pop();
                sdkcall("IAM", "listAccountAliases", {
                    // no params
                }, false).then((accountAliases) => {
                    if (accountAliases.AccountAliases && accountAliases.AccountAliases.length) {
                        account = accountAliases.AccountAliases[0];
                    }
                    $('#user-id').html(user + " @ " + account);
                }).catch(err => {
                    $('#user-id').html(user + " @ " + account);
                });
            }).catch(err => {
                $('#user-id').html("");
            });

            resolve();
        } else {
            $('#user-id').html("");
            reject();
        }
    });
}

/* 
    Detect resource stack association
*/

async function getResourceStackAssociation() {
    templates = {};

    await sdkcall("CloudFormation", "listStacks", {
        StackStatusFilter: ["CREATE_COMPLETE", "ROLLBACK_IN_PROGRESS", "ROLLBACK_FAILED", "ROLLBACK_COMPLETE", "DELETE_FAILED", "UPDATE_IN_PROGRESS", "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS", "UPDATE_COMPLETE", "UPDATE_ROLLBACK_IN_PROGRESS", "UPDATE_ROLLBACK_FAILED", "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS", "UPDATE_ROLLBACK_COMPLETE"]
    }, true).then(async (data) => {
        await Promise.all(data.StackSummaries.map(async (stack) => {
            await sdkcall("CloudFormation", "getTemplate", {
                StackName: stack.StackId,
                TemplateStage: "Processed"
            }, true).then((data) => {
                template = null;
                try {
                    template = JSON.parse(data.TemplateBody);
                    templates[stack.StackName] = template;
                } catch(err) {
                    console.log("Couldn't parse"); // TODO: yaml 2 json
                }
            });
        }));
    });

    console.log(templates);
}

// Import

eligibleImportResources = {
    'AWS::ApiGateway::Authorizer': {'importProperties': ['RestApiId', 'AuthorizerId']},
    'AWS::ApiGateway::Deployment': {'importProperties': ['RestApiId', 'DeploymentId']},
    'AWS::ApiGateway::Method': {'importProperties': ['RestApiId', 'ResourceId', 'HttpMethod']},
    'AWS::ApiGateway::Model': {'importProperties': ['RestApiId', 'Name']},
    'AWS::ApiGateway::RestApi': {'importProperties': ['RestApiId']},
    'AWS::AutoScaling::LaunchConfiguration': {'importProperties': ['LaunchConfigurationName']},
    'AWS::EC2::InternetGateway': {'importProperties': ['InternetGatewayId']},
    'AWS::EC2::Instance': {'importProperties': ['InstanceId']},
    'AWS::EC2::NatGateway': {'importProperties': ['NatGatewayId']},
    'AWS::EC2::RouteTable': {'importProperties': ['RouteTableId']},
    'AWS::ElasticLoadBalancingV2::LoadBalancer': {'importProperties': ['LoadBalancerArn']},
    'AWS::Events::Rule': {'importProperties': ['Name']},
    'AWS::ApiGateway::Stage': {'importProperties': ['RestApiId', 'StageName']},
    'AWS::ApiGateway::Resource': {'importProperties': ['RestApiId', 'ResourceId']},
    'AWS::ApiGateway::RequestValidator': {'importProperties': ['RestApiId', 'RequestValidatorId']},
    'AWS::AutoScaling::LifecycleHook': {'importProperties': ['AutoScalingGroupName', 'LifecycleHookName']},
    'AWS::AutoScaling::ScheduledAction': {'importProperties': ['ScheduledActionName']},
    'AWS::CloudTrail::Trail': {'importProperties': ['TrailName']},
    'AWS::EC2::Subnet': {'importProperties': ['SubnetId']},
    'AWS::EC2::SecurityGroup': {'importProperties': ['GroupId']},
    'AWS::EC2::VPC': {'importProperties': ['VpcId']},
    'AWS::ElasticLoadBalancing::LoadBalancer': {'importProperties': ['LoadBalancerName']},
    'AWS::ElasticLoadBalancingV2::Listener': {'importProperties': ['ListenerArn']},
    'AWS::ElasticLoadBalancingV2::ListenerRule': {'importProperties': ['RuleArn']},
    'AWS::Logs::MetricFilter': {'importProperties': ['FilterName']},
    'AWS::Lambda::Alias': {'importProperties': ['AliasArn']},
    'AWS::AutoScaling::AutoScalingGroup': {'importProperties': ['AutoScalingGroupName']},
    'AWS::CloudWatch::Alarm': {'importProperties': ['AlarmName']},
    'AWS::AutoScaling::ScalingPolicy': {'importProperties': ['PolicyName']},
    'AWS::CloudFormation::Stack': {'importProperties': ['StackId'], 'capabilities': ['CAPABILITY_NAMED_IAM']}, // interesting...
    'AWS::DynamoDB::Table': {'importProperties': ['TableName']},
    'AWS::EC2::EIP': {'importProperties': ['PublicIp']},
    'AWS::EC2::NetworkAcl': {'importProperties': ['NetworkAclId']},
    'AWS::ECS::TaskDefinition': {'importProperties': ['TaskDefinitionArn']},
    'AWS::Lambda::Version': {'importProperties': ['FunctionArn']}, // just FunctionArn?
    'AWS::RDS::DBCluster': {'importProperties': ['DBClusterIdentifier']},
    'AWS::Route53::HostedZone': {'importProperties': ['HostedZoneId']},
    'AWS::ECS::Cluster': {'importProperties': ['ClusterName']},
    'AWS::ECS::Service': {'importProperties': ['ServiceArn', 'Cluster']}, // ClusterArn ?
    'AWS::EC2::Volume': {'importProperties': ['VolumeId']},
    'AWS::IoT::Thing': {'importProperties': ['ThingName']},
    'AWS::Logs::LogGroup': {'importProperties': ['LogGroupName']},
    'AWS::RDS::DBInstance': {'importProperties': ['DBInstanceIdentifier']},
    'AWS::SNS::Topic': {'importProperties': ['TopicArn']},
    'AWS::EC2::NetworkInterface': {'importProperties': ['NetworkInterfaceId']},
    'AWS::Lambda::Function': {'importProperties': ['FunctionName']},
    'AWS::Logs::SubscriptionFilter': {'importProperties': ['LogGroupName', 'FilterName']},
    'AWS::SQS::Queue': {'importProperties': ['QueueUrl']},
    'AWS::S3::Bucket': {'importProperties': ['BucketName']},
    'AWS::IAM::Group': {'importProperties': ['GroupName'], 'capabilities': ['CAPABILITY_NAMED_IAM']},
    'AWS::IAM::InstanceProfile': {'importProperties': ['InstanceProfileName'], 'capabilities': ['CAPABILITY_NAMED_IAM']},
    'AWS::IAM::Role': {'importProperties': ['RoleName'], 'capabilities': ['CAPABILITY_NAMED_IAM']},
    'AWS::IAM::User': {'importProperties': ['UserName'], 'capabilities': ['CAPABILITY_NAMED_IAM']},
    'AWS::IAM::ManagedPolicy': {'importProperties': ['PolicyArn'], 'capabilities': ['CAPABILITY_NAMED_IAM']}
};

async function downloadImportTemplate(stack_name, deletion_policy) {
    var importable_resources = [];
    var resources_to_import = [];
    tracked_resources.forEach(res => {
        if ('type' in res && res['type'] in eligibleImportResources) {
            importable_resources.push(res);
            var resource_identifier = {};
            eligibleImportResources[res.type].importProperties.forEach(prop => {
                resource_identifier[prop] = res.returnValues.Import[prop];
            });
            resources_to_import.push({
                'LogicalResourceId': res.logicalId,
                'ResourceIdentifier': resource_identifier,
                'ResourceType': res.type
            });
        }
    });

    if (stack_name == "") {
        stack_name = "template";
    }

    var mapped_cfn_output = compileOutputs(importable_resources, deletion_policy)['cfn'];
    
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(mapped_cfn_output));
    element.setAttribute('download', stack_name + ".yaml");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

async function importResources(stack_name, deletion_policy) {
    var importable_resources = [];
    var resources_to_import = [];
    var capabilities = [];
    tracked_resources.forEach(res => {
        if ('type' in res && res['type'] in eligibleImportResources) {
            importable_resources.push(res);
            var resource_identifier = {};
            eligibleImportResources[res.type].importProperties.forEach(prop => {
                resource_identifier[prop] = res.returnValues.Import[prop];
            });
            resources_to_import.push({
                'LogicalResourceId': res.logicalId,
                'ResourceIdentifier': resource_identifier,
                'ResourceType': res.type
            });
            if ('capabilities' in eligibleImportResources[res.type]) {
                capabilities = eligibleImportResources[res.type].capabilities; // TODO: Make aggregate
            }
        }
    });

    var mapped_cfn_output = compileOutputs(importable_resources, deletion_policy)['cfn'];
    
    if (mapped_cfn_output.length > 51200) {
        $('#import-button').removeAttr('disabled');
        $('#import-button').text("Create Change Set");
        $('#import-warnings').append(`<div class="alert alert-danger" role="alert">
            <strong><i class="fa fa-exclamation-circle"></i></strong> Cannot create a change set as the total length of the template would exceed 50kb
        </div>`);
        return;
    }

    var changeSetName = 'Import' + Math.round((new Date()).getTime() / 1000);

    await sdkcall("CloudFormation", "createChangeSet", {
        ChangeSetName: changeSetName,
        StackName: stack_name,
        ChangeSetType: "IMPORT",
        ResourcesToImport: resources_to_import,
        TemplateBody: mapped_cfn_output,
        Capabilities: capabilities
    }, true).then(async (data) => {
        status = "CREATE_PENDING";
        while (['CREATE_PENDING', 'CREATE_IN_PROGRESS'].includes(status)) {
            await new Promise(resolve => setTimeout(resolve, 2000));
            await sdkcall("CloudFormation", "describeChangeSet", {
                ChangeSetName: changeSetName,
                StackName: stack_name
            }, false).then(async (data) => {
                status = data.Status;
            }).catch(() => { status = "ERROR"; });
        }

        var stack_url = "https://console.aws.amazon.com/cloudformation/home?region=" + region + "#/stacks/stackinfo?stackId=" + encodeURIComponent(data.StackId);
        var change_set_url = "https://console.aws.amazon.com/cloudformation/home?region=" + region + "#/stacks/changesets/changes?stackId=" + encodeURIComponent(data.StackId) + "&changeSetId=" + encodeURIComponent(data.Id);
        $('#import-warnings').append(`<div class="alert alert-info" role="alert">
            <strong><i class="fa fa-info-circle"></i></strong> Created change set <a target="_blank" href="${change_set_url}">${changeSetName}</a> in stack <a target="_blank" href="${stack_url}">${stack_name}</i>
        </div>`);
        if (status != "CREATE_COMPLETE") {
            throw "Bad change set status: " + status;
        }
        $('#import-button').removeAttr('disabled');
        $('#import-button').text("Execute Change Set");

        $('#import-button').off('click').on('click', function() {
            $('#import-button').attr('disabled', 'disabled');
            $('#import-button').text("Executing change set...");
            var crt = (new Date()).getTime().toString();
            
            sdkcall("CloudFormation", "executeChangeSet", {
                ChangeSetName: changeSetName,
                StackName: stack_name,
                ClientRequestToken: crt
            }, true).then(async (data) => {
                await new Promise(resolve => setTimeout(resolve, 4000)); // eventual consistency weirdness
                await sdkcallwaiter("CloudFormation", "waitFor", "stackImportComplete", {
                    StackName: stack_name
                });

                $('#import-button').removeAttr('disabled');
                $('#import-button').text("Close");
                $('#import-warnings').append(`<div class="alert alert-info" role="alert">
                    <strong><i class="fa fa-info-circle"></i></strong> Successfully deployed stack <a target="_blank" href="${stack_url}">${stack_name}</i>
                </div>`);

                $('#import-button').off('click').on('click', function() {
                    $('#importmodal').modal('hide');
                });
            }).catch(e => {
                console.log(e);
                $('#import-button').removeAttr('disabled');
                $('#import-button').text("Execute Change Set");
                $('#import-warnings').append(`<div class="alert alert-danger" role="alert">
                    <strong><i class="fa fa-exclamation-circle"></i></strong> An error occurred executing the change set.
                </div>`);
            });
        });
    }).catch(e => {
        console.log(e);
        $('#import-button').removeAttr('disabled');
        $('#import-button').text("Create Change Set");
        $('#import-warnings').append(`<div class="alert alert-danger" role="alert">
            <strong><i class="fa fa-exclamation-circle"></i></strong> An error occurred creating the change set.
        </div>`);
        console.log(mapped_cfn_output);
    });
}

function getNonImportableResources() {
    var non_importable_resources = [];
    tracked_resources.forEach(res => {
        if ('type' in res && !(res['type'] in eligibleImportResources)) {
            non_importable_resources.push(res);
        }
    });

    return non_importable_resources;
}
