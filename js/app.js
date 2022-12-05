var CHROME_HELPER_EXTENSION_ID = "fhejmeojlbhfhjndnkkleooeejklmigi"; // Chrome
var EDGE_HELPER_EXTENSION_ID = "okkjnfohglnomdbpimkcdkiojbeiedof"; // Edge
var extension_available = false;
var region = 'us-east-1';
var output_objects = [];
var _AWS = AWS;
var visited_sections = [];
var ping_extension_interval = null;
var stack_parameters = [];
var MAX_DT_SCANS = 50;
var defaultoutput = 'cloudformation';
var iaclangselect = 'typescript';
var check_objects = [];
var CLI = false;
var CONCURRENT_SDKCALLS = 0;
var latestConfig = null;

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
                            ${section.resourcetypes[resourcetype].terraformonly ? `<span style="margin-left: 16px; display: inline-block; vertical-align: middle; line-height: 16px; color: #6c7a86; font-weight: 600;"><i class="fa fa-info-circle"></i> Terraform / Pulumi only</span>` : ""}
                            ${section.resourcetypes[resourcetype].limitedresults ? `<span style="margin-left: 16px; display: inline-block; vertical-align: middle; line-height: 16px; color: #6c7a86; font-weight: 600;"><i class="fa fa-info-circle"></i> Limited results</span>` : ""}
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
        var ids = $.map($(selector).deferredBootstrapTable('getData'), function (row) {
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

    function getRelationshipPropertyValues(relation, obj, propertyname) {
        var propertyvalues = [];

        if (relation['Arity'] == "Many") {
            if (Array.isArray(obj.options.cfn[propertyname])) {
                obj.options.cfn[propertyname].forEach(propertyvalue => {
                    if (relation['EmbeddedPropertyName'] && typeof propertyvalue == "object") {
                        propertyvalue = propertyvalue[relation['EmbeddedPropertyName']];
                    }
    
                    if (Array.isArray(propertyvalue)) {
                        propertyvalue.forEach(propertyvalueitem => {
                            propertyvalues.push(propertyvalueitem);
                        });
                    } else {
                        propertyvalues.push(propertyvalue);
                    }
                });
            } else {
                var propertyvalue = obj.options.cfn[propertyname];

                if (relation['EmbeddedPropertyName'] && typeof propertyvalue == "object") {
                    propertyvalue = propertyvalue[relation['EmbeddedPropertyName']];
                }

                if (Array.isArray(propertyvalue)) {
                    propertyvalue.forEach(propertyvalueitem => {
                        propertyvalues.push(propertyvalueitem);
                    });
                } else {
                    propertyvalues.push(propertyvalue);
                }
            }
        } else {
            var propertyvalue = obj.options.cfn[propertyname];

            if (relation['EmbeddedPropertyName'] && typeof propertyvalue == "object") {
                propertyvalue = propertyvalue[relation['EmbeddedPropertyName']];
            }
            propertyvalues.push(propertyvalue);
        }

        return propertyvalues;
    }

    function checkRelatedResources(rows) { // TODO: make this function more generic (too much duplication)
        check_objects = [];
        var related_resources = {};
        var related_resources_post = {};
        $('.f2datatable').each(function() {
            var datatableid = this.id;
            var ids = $.map($("#" + this.id).deferredBootstrapTable('getData'), function (checkobjectrow) {
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
        check_objects = [];
        
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
                                    var propertyvalues = getRelationshipPropertyValues(relation, obj, propertyname);

                                    propertyvalues.forEach(propertyvalue => {
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
                                var propertyvalues = getRelationshipPropertyValues(relation, obj, propertyname);

                                propertyvalues.forEach(propertyvalue => {
                                    rows.forEach(row => {
                                        var row_check_object = null;
                                        for (var child_obj of mapped_check_objects) {
                                            if (child_obj.obj.id == row.f2id) {
                                                row_check_object = child_obj;
                                                break;
                                            }
                                        };
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
                            }
                        });
                    });
                });
            }
        });

        // check for related row overlaps
        // TODO: include added resources here to rows?
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
                    $.map($("#" + check_element.attr('data-dt')).deferredBootstrapTable('getData'), function (row) {
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
        $('#section-search-datatable').deferredBootstrapTable('setActive', true);

        $('#section-search-datatable').deferredBootstrapTable('removeAll');

        $('.f2datatable').each(function(index) {
            if (this.id != "section-search-datatable") {
                var rows = $(this).deferredBootstrapTable('getData');
                rows.forEach(row => {
                    var searchterm = $('#search-input').val();
                    var jsonrow = JSON.stringify(row);
                    
                    if (searchterm.includes(",")) {
                        searchterm.split(",").forEach(searchterminst => {
                            if (jsonrow.includes(searchterminst)) {
                                $('#section-search-datatable').deferredBootstrapTable('append', [row]);
                            }
                        });
                    } else {
                        if (jsonrow.includes(searchterm)) {
                            $('#section-search-datatable').deferredBootstrapTable('append', [row]);
                        }
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
    var sourceidentity = window.localStorage.getItem('credentials-sourceidentity');
    if (sourceidentity) {
        $('#credentials-sourceidentity').val(sourceidentity);
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
    $('#credentials-sourceidentity').on('change', () => {
        var val = $('#credentials-sourceidentity').val().trim();
        if (val == "") {
            window.localStorage.removeItem('credentials-sourceidentity');
        } else {
            window.localStorage.setItem('credentials-sourceidentity', val);
        }
        updateIdentity();
    });

    /* ========================================================================== */
    // Navigation
    /* ========================================================================== */

    function refreshDatatableFirstVisit(urlpart) {
        sections.forEach(section => {
            if (urlpart == navlower(section.category) + "-" + navlower(section.service)) {
                if (!visited_sections.includes(urlpart)) {
                    visited_sections.push(urlpart);
                    $('.f2datatable').each(function() {
                        if (this.id.startsWith("section-" + urlpart + "-")) {
                            $('#' + this.id).deferredBootstrapTable('setActive', true);
                        }
                    });
                    if (!visited_sections.includes("all")) {
                        window[`updateDatatable${nav(section.category)}${nav(section.service)}`]();
                    }
                }
            }
        });
    }

    function doNavigation() {
        $('#header-button-copy-cfn').attr('style', 'display: none;');
        $('#header-button-import-cfn').attr('style', 'margin-left: 16px; display: none;');
        $('#header-button-download-diagram').attr('style', 'display: none;');
        $('#header-button-copy-tf').attr('style', 'display: none;');
        $('#header-button-copy-troposphere').attr('style', 'display: none;');
        $('#header-button-copy-cdk').attr('style', 'display: none;');
        $('#header-button-copy-cdkv2').attr('style', 'display: none;');
        $('#header-button-copy-cdktf').attr('style', 'display: none;');
        $('#header-button-copy-pulumi').attr('style', 'display: none;');
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
            if ($(location.hash).attr('data-section-label')) {
                $('#header-title').append(
                    `&nbsp;<h5 style="display: inline;"><span style="vertical-align: super;" class="label label-info">${$(location.hash).attr('data-section-label')}</span></h5>`
                );
            }
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
            } else if (location.hash == "#section-outputs-cdk") {
                $('#header-button-copy-cdk').attr('style', '');
                $('#header-button-clear-outputs').attr('style', 'margin-left: 16px;');

                setTimeout(function(){
                    cdk_editor.refresh();
                    tippy('.f2replacementmarker', {
                        content: "Value requires replacement",
                        placement: "right",
                        theme: "material"
                    });
                }, 1);
            } else if (location.hash == "#section-outputs-cdkv2") {
                $('#header-button-copy-cdkv2').attr('style', '');
                $('#header-button-clear-outputs').attr('style', 'margin-left: 16px;');

                setTimeout(function(){
                    cdkv2_editor.refresh();
                    tippy('.f2replacementmarker', {
                        content: "Value requires replacement",
                        placement: "right",
                        theme: "material"
                    });
                }, 1);
            } else if (location.hash == "#section-outputs-cdktf") {
                $('#header-button-copy-cdktf').attr('style', '');
                $('#header-button-clear-outputs').attr('style', 'margin-left: 16px;');

                setTimeout(function(){
                    cdktf_editor.refresh();
                    tippy('.f2replacementmarker', {
                        content: "Value requires replacement",
                        placement: "right",
                        theme: "material"
                    });
                }, 1);
            } else if (location.hash == "#section-outputs-pulumi") {
                $('#header-button-copy-pulumi').attr('style', '');
                $('#header-button-clear-outputs').attr('style', 'margin-left: 16px;');

                setTimeout(function(){
                    pulumi_editor.refresh();
                    tippy('.f2replacementmarker', {
                        content: "Value requires replacement",
                        placement: "right",
                        theme: "material"
                    });
                }, 1);
            } else if (location.hash == "#section-outputs-diagram") {
                $('#header-button-download-diagram').attr('style', '');
                $('#header-button-clear-outputs').attr('style', 'margin-left: 16px;');
            } else if (location.hash == "#section-outputs-raw") {
                $('#header-button-copy-raw').attr('style', '');
                $('#header-button-clear-outputs').attr('style', 'margin-left: 16px;');

                setTimeout(function(){
                    raw_editor.refresh();
                }, 1);
            } else if (location.hash.startsWith("#section-")) {
                // TODO: unset isactive in deferred
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
            window.location.href = "#section-outputs-" + defaultoutput;
        });
    });

    function regenerateOutputs() {
        return new Promise(function(resolve, reject) {
            tracked_resources = performF2Mappings(output_objects);
            var mapped_outputs = compileOutputs(tracked_resources, null);

            cfn_editor.getDoc().setValue(mapped_outputs['cfn']);
            tf_editor.getDoc().setValue(mapped_outputs['tf']);
            troposphere_editor.getDoc().setValue(mapped_outputs['troposphere']);
            cdk_editor.getDoc().setValue(mapped_outputs['cdk']);
            cdkv2_editor.getDoc().setValue(mapped_outputs['cdkv2']);
            cdktf_editor.getDoc().setValue(mapped_outputs['cdktf']);
            pulumi_editor.getDoc().setValue(mapped_outputs['pulumi']);
            raw_editor.getDoc().setValue(JSON.stringify(output_objects, null, 4));

            // Gutters
            [
                {key: 'cfn', editor: cfn_editor},
                {key: 'tf', editor: tf_editor}, 
                {key: 'troposphere', editor: troposphere_editor},
                {key: 'cdk', editor: cdk_editor},
                {key: 'cdkv2', editor: cdkv2_editor},
                {key: 'cdktf', editor: cdktf_editor},
                {key: 'pulumi', editor: pulumi_editor}
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
                cdk_editor.refresh();
                cdkv2_editor.refresh();
                cdktf_editor.refresh();
                pulumi_editor.refresh();
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
        "af-south-1": "Africa (Cape Town)",
        "ap-east-1": "Asia Pacific (Hong Kong)",
        "ap-south-1": "Asia Pacific (Mumbai)",
        "ap-northeast-3": "Asia Pacific (Osaka)",
        "ap-northeast-2": "Asia Pacific (Seoul)",
        "ap-southeast-1": "Asia Pacific (Singapore)",
        "ap-southeast-2": "Asia Pacific (Sydney)",
        "ap-southeast-3": "Asia Pacific (Jakarta)",
        "ap-northeast-1": "Asia Pacific (Tokyo)",
        "ca-central-1": "Canada (Central)",
        "eu-central-1": "EU (Frankfurt)",
        "eu-central-2": "EU (Zurich)",
        "eu-west-1": "EU (Ireland)",
        "eu-west-2": "EU (London)",
        "eu-west-3": "EU (Paris)",
        "eu-north-1": "EU (Stockholm)",
        "eu-south-1": "EU (Milan)",
        "me-south-1": "Middle East (Bahrain)",
        "sa-east-1": "South America (S&#227;o Paulo)",
        "us-gov-east-1": "AWS GovCloud (US-Gov-East)",
        "us-gov-west-1": "AWS GovCloud (US-Gov-West)",
        "cn-north-1": "China (Beijing)",
        "cn-northwest-1": "China (Ningxia)"
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

    cdk_editor = CodeMirror.fromTextArea(document.getElementById('cdk'), {
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
    setCopyEvent('#header-button-copy-cdk', cdk_editor);

    cdkv2_editor = CodeMirror.fromTextArea(document.getElementById('cdkv2'), {
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
    setCopyEvent('#header-button-copy-cdkv2', cdkv2_editor);

    cdktf_editor = CodeMirror.fromTextArea(document.getElementById('cdktf'), {
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
    setCopyEvent('#header-button-copy-cdktf', cdktf_editor);

    pulumi_editor = CodeMirror.fromTextArea(document.getElementById('pulumi'), {
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
    setCopyEvent('#header-button-copy-pulumi', pulumi_editor);

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
                                            return async (params, callback) => {
                                                while (CONCURRENT_SDKCALLS > 500) {
                                                    await new Promise(resolve => setTimeout(resolve, 100)); // sleep 100ms
                                                }
                                                CONCURRENT_SDKCALLS++;
                                                extensionSendMessage(
                                                    {
                                                        action: 'serviceAction',
                                                        args: this.serviceArgs,
                                                        service: service,
                                                        service_action: service_action,
                                                        params: params,
                                                        config: latestConfig
                                                    },
                                                    function(response) {
                                                        CONCURRENT_SDKCALLS--;
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
    // Diagram
    /* ========================================================================== */
    
    var sectionHeader = $('.section-header');
    var sectionHeaderHeight = 0;
    if (sectionHeader.length) {
        sectionHeaderHeight = parseInt(sectionHeader.height()) + parseInt(sectionHeader.css('padding-bottom'));
    }
    $('#diagram_container').attr('style', 'min-height: ' +
        ($(window).height() -
        parseInt($('.page-content').css('padding-top')) -
        parseInt($('.page-content').css('padding-bottom')) -
        sectionHeaderHeight - 40) + 'px;'
    );
    $('#diagramframe').attr('style', 'width: 100%; border: 0; min-height: ' +
        ($(window).height() -
        parseInt($('.page-content').css('padding-top')) -
        parseInt($('.page-content').css('padding-bottom')) -
        sectionHeaderHeight - 40) + 'px;'
    );

    $('#diagramframe').attr('src', '/lib/drawio/src/main/webapp/index.html?embed=1&libraries=1&proto=json&local=1&sync=none&browser=0&gapi=0&db=0&od=0&tr=0&gh=0&gl=0&stealth=1&math=0&picker=0&libs=aws4&spin=1&p=page&saveAndExit=0&noSaveBtn=1&noExitBtn=1'); // &configure=1

    $('#header-button-download-diagram').click(function(){
        var message = JSON.stringify({
            action: 'export',
            format: 'png'
        });
    
        var iframe = document.getElementById('diagramframe');  
        iframe.contentWindow.postMessage(message, '*');    
    });

    window.addEventListener('message', (message) => {
        var evt = JSON.parse(message.data);
        if (evt['event'] == "init") {
            clearDiagram();
        } else if (evt['event'] == "export") {
            var element = document.createElement('a');
            element.setAttribute('href', evt.data);
            element.setAttribute('download', "graph.png");
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        } else if (evt['event'] == "toggleFullscreen") {
            $('#diagramframe').toggleClass('fullscreen');
        }
    });

    /* ========================================================================== */
    // Misc
    /* ========================================================================== */

    tippy('[data-tippy-content]', {
        theme: 'material'
    });

    $("#credentials-secretkey").focus(function() {
        $(this).attr('type', 'text');
    });
    $("#credentials-secretkey").blur(function() {
        $(this).attr('type', 'password');
    });
    $("#credentials-sessiontoken").focus(function() {
        $(this).attr('type', 'text');
    });
    $("#credentials-sessiontoken").blur(function() {
        $(this).attr('type', 'password');
    });

    $('.select2-no-search-arrow').select2({ // Selectors for settings
        minimumResultsForSearch: "Infinity",
        theme: "arrow"
    });

    $('.tags-field').tagEditor();

    $('#load-settings').click(function(){$('#load-settings-picker').click();});
    $('#save-settings').click(function(){saveSettings()});
    $('#load-settings-picker').change(loadSettings);

    $('#add-parameter-expand-link').click(function(){
        if ($("#add-parameter-expand-section").is(":hidden")) {
            $('#add-parameter-expand-link').html("[&ndash;] Advanced Settings");
        } else {
            $('#add-parameter-expand-link').html("[+] Advanced Settings");
        }
        $('#add-parameter-expand-section').slideToggle('fast');
    });

    $('#add-parameter-name').mask("B", {translation: {'B': {pattern: /[a-zA-Z0-9]/, recursive: true}}});

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

    defaultoutput = window.localStorage.getItem('defaultoutput') || 'cloudformation';
    if (defaultoutput == "cdkts") { defaultoutput = "cdk"; } // breaking change
    if (defaultoutput == "pulumits") { defaultoutput = "pulumi"; } // breaking change

    $('#defaultoutput').val(defaultoutput).trigger('change');
    $('#defaultoutput').change(function() {
        window.localStorage.setItem('defaultoutput', $(this).val());
        defaultoutput = $(this).val();
    });

    iaclangselect = window.localStorage.getItem('iaclangselect') || 'typescript';
    $('#iaclangselect').change(function() {
        window.localStorage.setItem('iaclangselect', $(this).val());
        iaclangselect = $(this).val();

        if ($(this).val() == "typescript") {
            cdk_editor.setOption("mode", "javascript");
            cdkv2_editor.setOption("mode", "javascript");
            cdktf_editor.setOption("mode", "javascript");
        } else if ($(this).val() == "java") {
            cdk_editor.setOption("mode", "text/x-java");
            cdkv2_editor.setOption("mode", "text/x-java");
            cdktf_editor.setOption("mode", "text/x-java");
        } else if ($(this).val() == "dotnet") {
            cdk_editor.setOption("mode", "text/x-csrc");
            cdkv2_editor.setOption("mode", "text/x-csrc");
            cdktf_editor.setOption("mode", "text/x-csrc");
        } else {
            cdk_editor.setOption("mode", $(this).val());
            cdkv2_editor.setOption("mode", $(this).val());
            cdktf_editor.setOption("mode", $(this).val());
        }
    });
    $('#iaclangselect').val(iaclangselect).trigger('change');

    if (window.localStorage.getItem('relatedresourcessetting') == "true") {
        $('#relatedresourcessetting').prop('checked', true);
    }
    $('#relatedresourcessetting').change(function() {
        window.localStorage.setItem('relatedresourcessetting', $(this).is(':checked').toString());
    });

    if (window.localStorage.getItem('skipirrelevantresources') == "true") {
        $('#skipirrelevantresources').prop('checked', true);
    }
    $('#skipirrelevantresources').change(function() {
        window.localStorage.setItem('skipirrelevantresources', $(this).is(':checked').toString());
    });

    if (window.localStorage.getItem('includedefaultresources') == "true") {
        $('#includedefaultresources').prop('checked', true);
        include_default_resources = true;
    }
    $('#includedefaultresources').change(function() {
        window.localStorage.setItem('includedefaultresources', $(this).is(':checked').toString());
        if ($(this).is(':checked')) {
            include_default_resources = true;
        } else {
            include_default_resources = false;
        }
    });

    if (window.localStorage.getItem('credentials-secretkey')) {
        $('.scan-account').removeAttr('disabled');
    }

}); // <-- End of documentReady

/* ========================================================================== */
// Extension Request/Response
/* ========================================================================== */

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
    } else if (navigator.userAgent.search("Edg/") > -1) { // Edge (Chromium)
        if (window.chrome && window.chrome.runtime) {
            chrome.runtime.sendMessage(EDGE_HELPER_EXTENSION_ID, data, callback);
        } else {
            callback(null);
        }
    } else { // Chrome
        if (window.chrome && window.chrome.runtime) {
            chrome.runtime.sendMessage(CHROME_HELPER_EXTENSION_ID, data, callback);
        } else {
            callback(null);
        }
    }
}

/* ========================================================================== */
// BlockUI
/* ========================================================================== */

function blockUI(selector) {
    if (selector.startsWith(window.location.hash)) {
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
}

function unblockUI(selector) {
    setTimeout(function(selector){
        $(selector).unblock();
    }, 200, selector);
}

/* ========================================================================== */

var resource_tag_cache = {};

async function getResourceTags(arn) {
    if (!arn) {
        return null;
    }

    if (arn.split(":").length < 7 && !arn.split(":")[5].includes("/")) {
        return null;
    }

    var service = arn.split(":")[2];
    var type = arn.split(":")[5].split("/")[0];

    if (!resource_tag_cache[ service/*+ "." + type*/ ]) {
        resource_tag_cache[service] = "PENDING";
        
        await sdkcall("ResourceGroupsTaggingAPI", "getResources", {
            ResourceTypeFilters: [ service/* + "." + type*/ ]
        }, false).then((data) => {
            resource_tag_cache[ service/* + "." + type*/ ] = data.ResourceTagMappingList;
        }).catch(() => { });
        setTimeout((k) => {
            delete resource_tag_cache[k];
        }, 20000, service/* + "." + type*/); // 20s cache
    }

    while (resource_tag_cache[service] == "PENDING") {
        await new Promise(r => setTimeout(r, 2000));
    }

    for (var res of resource_tag_cache[ service/* + "." + type*/ ]) {
        var resarnparts = res['ResourceARN'].split(":");
        resarnparts[3] = "";
        resarnparts[4] = "";
        var arnparts = arn.split(":");
        arnparts[3] = "";
        arnparts[4] = "";

        if (resarnparts.join(":") == arnparts.join(":")) {
            return res['Tags'].filter(tag => !tag['Key'].startsWith("aws:"));
        }
    }

    return null;
}

function stripAWSTags(tags) {
    if (tags) {
        if (Array.isArray(tags)) {
            tags = tags.filter(function (value, index, array) {
                return (!value['Key'].startsWith("aws:"));
            });
        } else {
            var i = Object.keys(tags).length;
            while (i--) {
                var k = Object.keys(tags)[i];
                if (k.startsWith("aws:")) {
                    delete tags[k];
                }
            }
        }
    }

    return tags;
}

function saveSettings() {
    var jsondoc = {
        'parameters': stack_parameters.filter(function(p){ return !p.name.startsWith("AWS::"); }),
        'settings': {
            'cfnspacing': window.localStorage.getItem('cfnspacing'),
            'logicalidstrategy': window.localStorage.getItem('logicalidstrategy') || 'longtypeprefixoptionalindexsuffix',
            'defaultoutput': window.localStorage.getItem('defaultoutput') || 'cloudformation',
            'iaclangselect': window.localStorage.getItem('iaclangselect') || 'typescript',
            'relatedresourcessetting': window.localStorage.getItem('relatedresourcessetting'),
            'skipirrelevantresources': window.localStorage.getItem('skipirrelevantresources'),
            'includedefaultresources': window.localStorage.getItem('includedefaultresources')
        }
    };

    var element = document.createElement('a');
    element.setAttribute('href', 'data:application/json,' + encodeURIComponent(JSON.stringify(jsondoc, null, 2)));
    element.setAttribute('download', "Former2Settings.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function loadSettings() {
    if (this.files && this.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e){
            loaded_settings = JSON.parse(e.target.result);

            stack_parameters = loaded_settings.parameters.concat(stack_parameters.filter(function(p){ return p.name.startsWith("AWS::"); }));
            generateParameterTable();

            if ('cfnspacing' in loaded_settings.settings) {
                $('#cfnspacing').val(loaded_settings.settings.cfnspacing).trigger('change');
            }
            if ('logicalidstrategy' in loaded_settings.settings) {
                $('#logicalidstrategy').val(loaded_settings.settings.logicalidstrategy).trigger('change');
            }
            if ('defaultoutput' in loaded_settings.settings) {
                $('#defaultoutput').val(loaded_settings.settings.defaultoutput).trigger('change');
            }
            if ('iaclangselect' in loaded_settings.settings) {
                $('#iaclangselect').val(loaded_settings.settings.iaclangselect).trigger('change');
            }
            if ('relatedresourcessetting' in loaded_settings.settings) {
                if (loaded_settings.settings.relatedresourcessetting == "true") {
                    $('#relatedresourcessetting').prop('checked', true);
                } else {
                    $('#relatedresourcessetting').prop('checked', false);
                }
            }
            if ('skipirrelevantresources' in loaded_settings.settings) {
                if (loaded_settings.settings.skipirrelevantresources == "true") {
                    $('#skipirrelevantresources').prop('checked', true);
                } else {
                    $('#skipirrelevantresources').prop('checked', false);
                }
            }
            if ('includedefaultresources' in loaded_settings.settings) {
                if (loaded_settings.settings.includedefaultresources == "true") {
                    $('#includedefaultresources').prop('checked', true);
                    include_default_resources = true;
                } else {
                    $('#includedefaultresources').prop('checked', false);
                    include_default_resources = false;
                }
            }
        }

        reader.readAsText(this.files[0]);
    }
}

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

        latestConfig = {
            credentials: new AWS.Credentials(
                window.localStorage.getItem('credentials-accesskey'),
                window.localStorage.getItem('credentials-secretkey'),
                window.localStorage.getItem('credentials-sessiontoken')
            ),
            region: region,
            httpOptions: {
                timeout: 60000
            }
        };
        AWS.config.update(latestConfig);

        if (window.localStorage.getItem('credentials-assumerole')) {
            sdkcall("STS", "assumeRole", {
                RoleArn: window.localStorage.getItem('credentials-assumerole'),
                RoleSessionName: "former2-session-" + window.localStorage.getItem('credentials-assumerole').split("/").pop(),
                SourceIdentity: window.localStorage.getItem('credentials-sourceidentity')
            }, true).then((data) => {
                latestConfig = {
                    credentials: new AWS.Credentials(
                        data.Credentials.AccessKeyId,
                        data.Credentials.SecretAccessKey,
                        data.Credentials.SessionToken
                    ),
                    region: region,
                    httpOptions: {
                        timeout: 60000
                    }
                };
                AWS.config.update(latestConfig);

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
                resolve();
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

// Import (util/findImportAttributes.py)

eligibleImportResources = {
    "AWS::ACMPCA::Certificate": {
        "importProperties": [
            "Arn",
            "CertificateAuthorityArn"
        ]
    },
    "AWS::ACMPCA::CertificateAuthority": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::ACMPCA::CertificateAuthorityActivation": {
        "importProperties": [
            "CertificateAuthorityArn"
        ]
    },
    "AWS::ACMPCA::Permission": {
        "importProperties": [
            "CertificateAuthorityArn",
            "Principal"
        ]
    },
    "AWS::APS::RuleGroupsNamespace": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::APS::Workspace": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::AccessAnalyzer::Analyzer": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Amplify::App": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Amplify::Branch": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Amplify::Domain": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::AmplifyUIBuilder::Component": {
        "importProperties": [
            "AppId",
            "EnvironmentName",
            "Id"
        ]
    },
    "AWS::AmplifyUIBuilder::Theme": {
        "importProperties": [
            "AppId",
            "EnvironmentName",
            "Id"
        ]
    },
    "AWS::ApiGateway::Account": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::ApiGateway::ApiKey": {
        "importProperties": [
            "APIKeyId"
        ]
    },
    "AWS::ApiGateway::Authorizer": {
        "importProperties": [
            "RestApiId",
            "AuthorizerId"
        ]
    },
    "AWS::ApiGateway::BasePathMapping": {
        "importProperties": [
            "DomainName",
            "BasePath"
        ]
    },
    "AWS::ApiGateway::ClientCertificate": {
        "importProperties": [
            "ClientCertificateId"
        ]
    },
    "AWS::ApiGateway::Deployment": {
        "importProperties": [
            "DeploymentId",
            "RestApiId"
        ]
    },
    "AWS::ApiGateway::DocumentationVersion": {
        "importProperties": [
            "DocumentationVersion",
            "RestApiId"
        ]
    },
    "AWS::ApiGateway::DomainName": {
        "importProperties": [
            "DomainName"
        ]
    },
    "AWS::ApiGateway::Method": {
        "importProperties": [
            "RestApiId",
            "ResourceId",
            "HttpMethod"
        ]
    },
    "AWS::ApiGateway::Model": {
        "importProperties": [
            "RestApiId",
            "Name"
        ]
    },
    "AWS::ApiGateway::RequestValidator": {
        "importProperties": [
            "RestApiId",
            "RequestValidatorId"
        ]
    },
    "AWS::ApiGateway::Resource": {
        "importProperties": [
            "RestApiId",
            "ResourceId"
        ]
    },
    "AWS::ApiGateway::RestApi": {
        "importProperties": [
            "RestApiId"
        ]
    },
    "AWS::ApiGateway::Stage": {
        "importProperties": [
            "RestApiId",
            "StageName"
        ]
    },
    "AWS::ApiGateway::UsagePlan": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::ApiGateway::UsagePlanKey": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::AppFlow::ConnectorProfile": {
        "importProperties": [
            "ConnectorProfileName"
        ]
    },
    "AWS::AppFlow::Flow": {
        "importProperties": [
            "FlowName"
        ]
    },
    "AWS::AppIntegrations::DataIntegration": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::AppIntegrations::EventIntegration": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::AppRunner::Service": {
        "importProperties": [
            "ServiceArn"
        ]
    },
    "AWS::AppRunner::VpcConnector": {
        "importProperties": [
            "VpcConnectorArn"
        ]
    },
    "AWS::AppStream::AppBlock": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::AppStream::Application": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::AppStream::ApplicationEntitlementAssociation": {
        "importProperties": [
            "StackName",
            "EntitlementName",
            "ApplicationIdentifier"
        ]
    },
    "AWS::AppStream::ApplicationFleetAssociation": {
        "importProperties": [
            "FleetName",
            "ApplicationArn"
        ]
    },
    "AWS::AppStream::Entitlement": {
        "importProperties": [
            "StackName",
            "Name"
        ]
    },
    "AWS::AppSync::DomainName": {
        "importProperties": [
            "DomainName"
        ]
    },
    "AWS::AppSync::DomainNameApiAssociation": {
        "importProperties": [
            "ApiAssociationIdentifier"
        ]
    },
    "AWS::ApplicationInsights::Application": {
        "importProperties": [
            "ApplicationARN"
        ]
    },
    "AWS::Athena::DataCatalog": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::Athena::NamedQuery": {
        "importProperties": [
            "NamedQueryId"
        ]
    },
    "AWS::Athena::PreparedStatement": {
        "importProperties": [
            "StatementName",
            "WorkGroup"
        ]
    },
    "AWS::Athena::WorkGroup": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::AuditManager::Assessment": {
        "importProperties": [
            "AssessmentId"
        ]
    },
    "AWS::AutoScaling::AutoScalingGroup": {
        "importProperties": [
            "AutoScalingGroupName"
        ]
    },
    "AWS::AutoScaling::LaunchConfiguration": {
        "importProperties": [
            "LaunchConfigurationName"
        ]
    },
    "AWS::AutoScaling::LifecycleHook": {
        "importProperties": [
            "AutoScalingGroupName",
            "LifecycleHookName"
        ]
    },
    "AWS::AutoScaling::ScalingPolicy": {
        "importProperties": [
            "PolicyName"
        ]
    },
    "AWS::AutoScaling::ScheduledAction": {
        "importProperties": [
            "ScheduledActionName"
        ]
    },
    "AWS::AutoScaling::WarmPool": {
        "importProperties": [
            "AutoScalingGroupName"
        ]
    },
    "AWS::Backup::BackupPlan": {
        "importProperties": [
            "BackupPlanId"
        ]
    },
    "AWS::Backup::BackupSelection": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::Backup::BackupVault": {
        "importProperties": [
            "BackupVaultName"
        ]
    },
    "AWS::Backup::Framework": {
        "importProperties": [
            "FrameworkArn"
        ]
    },
    "AWS::Backup::ReportPlan": {
        "importProperties": [
            "ReportPlanArn"
        ]
    },
    "AWS::Batch::ComputeEnvironment": {
        "importProperties": [
            "ComputeEnvironmentArn"
        ]
    },
    "AWS::Batch::JobQueue": {
        "importProperties": [
            "JobQueueArn"
        ]
    },
    "AWS::Batch::SchedulingPolicy": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Budgets::BudgetsAction": {
        "importProperties": [
            "ActionId",
            "BudgetName"
        ]
    },
    "AWS::CE::AnomalyMonitor": {
        "importProperties": [
            "MonitorArn"
        ]
    },
    "AWS::CE::AnomalySubscription": {
        "importProperties": [
            "SubscriptionArn"
        ]
    },
    "AWS::CE::CostCategory": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::CUR::ReportDefinition": {
        "importProperties": [
            "ReportName"
        ]
    },
    "AWS::Cassandra::Keyspace": {
        "importProperties": [
            "KeyspaceName"
        ]
    },
    "AWS::Cassandra::Table": {
        "importProperties": [
            "KeyspaceName",
            "TableName"
        ]
    },
    "AWS::CertificateManager::Account": {
        "importProperties": [
            "AccountId"
        ]
    },
    "AWS::Chatbot::SlackChannelConfiguration": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::CloudFormation::HookDefaultVersion": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::CloudFormation::HookTypeConfig": {
        "importProperties": [
            "TypeArn"
        ]
    },
    "AWS::CloudFormation::HookVersion": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::CloudFormation::ModuleDefaultVersion": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::CloudFormation::ModuleVersion": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::CloudFormation::PublicTypeVersion": {
        "importProperties": [
            "PublicTypeArn"
        ]
    },
    "AWS::CloudFormation::Publisher": {
        "importProperties": [
            "PublisherId"
        ]
    },
    "AWS::CloudFormation::ResourceDefaultVersion": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::CloudFormation::ResourceVersion": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::CloudFormation::TypeActivation": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::CloudFront::CachePolicy": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::CloudFront::CloudFrontOriginAccessIdentity": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::CloudFront::Distribution": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::CloudFront::Function": {
        "importProperties": [
            "FunctionARN"
        ]
    },
    "AWS::CloudFront::KeyGroup": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::CloudFront::OriginRequestPolicy": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::CloudFront::PublicKey": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::CloudFront::RealtimeLogConfig": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::CloudFront::ResponseHeadersPolicy": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::CloudTrail::Trail": {
        "importProperties": [
            "TrailName"
        ]
    },
    "AWS::CloudWatch::Alarm": {
        "importProperties": [
            "AlarmName"
        ]
    },
    "AWS::CloudWatch::CompositeAlarm": {
        "importProperties": [
            "AlarmName"
        ]
    },
    "AWS::CloudWatch::MetricStream": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::CodeArtifact::Domain": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::CodeArtifact::Repository": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::CodeGuruProfiler::ProfilingGroup": {
        "importProperties": [
            "ProfilingGroupName"
        ]
    },
    "AWS::CodeGuruReviewer::RepositoryAssociation": {
        "importProperties": [
            "AssociationArn"
        ]
    },
    "AWS::CodeStarConnections::Connection": {
        "importProperties": [
            "ConnectionArn"
        ]
    },
    "AWS::CodeStarNotifications::NotificationRule": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Config::AggregationAuthorization": {
        "importProperties": [
            "AggregationAuthorizationArn"
        ]
    },
    "AWS::Config::ConfigurationAggregator": {
        "importProperties": [
            "ConfigurationAggregatorName"
        ]
    },
    "AWS::Config::ConformancePack": {
        "importProperties": [
            "ConformancePackName"
        ]
    },
    "AWS::Config::OrganizationConformancePack": {
        "importProperties": [
            "OrganizationConformancePackName"
        ]
    },
    "AWS::Config::StoredQuery": {
        "importProperties": [
            "QueryName"
        ]
    },
    "AWS::Connect::ContactFlow": {
        "importProperties": [
            "ContactFlowArn"
        ]
    },
    "AWS::Connect::ContactFlowModule": {
        "importProperties": [
            "ContactFlowModuleArn"
        ]
    },
    "AWS::Connect::HoursOfOperation": {
        "importProperties": [
            "HoursOfOperationArn"
        ]
    },
    "AWS::Connect::QuickConnect": {
        "importProperties": [
            "QuickConnectArn"
        ]
    },
    "AWS::Connect::User": {
        "importProperties": [
            "UserArn"
        ]
    },
    "AWS::Connect::UserHierarchyGroup": {
        "importProperties": [
            "UserHierarchyGroupArn"
        ]
    },
    "AWS::CustomerProfiles::Domain": {
        "importProperties": [
            "DomainName"
        ]
    },
    "AWS::CustomerProfiles::Integration": {
        "importProperties": [
            "DomainName",
            "Uri"
        ]
    },
    "AWS::CustomerProfiles::ObjectType": {
        "importProperties": [
            "DomainName",
            "ObjectTypeName"
        ]
    },
    "AWS::DataBrew::Dataset": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::DataBrew::Job": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::DataBrew::Project": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::DataBrew::Recipe": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::DataBrew::Ruleset": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::DataBrew::Schedule": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::DataSync::Agent": {
        "importProperties": [
            "AgentArn"
        ]
    },
    "AWS::DataSync::LocationEFS": {
        "importProperties": [
            "LocationArn"
        ]
    },
    "AWS::DataSync::LocationFSxWindows": {
        "importProperties": [
            "LocationArn"
        ]
    },
    "AWS::DataSync::LocationHDFS": {
        "importProperties": [
            "LocationArn"
        ]
    },
    "AWS::DataSync::LocationNFS": {
        "importProperties": [
            "LocationArn"
        ]
    },
    "AWS::DataSync::LocationObjectStorage": {
        "importProperties": [
            "LocationArn"
        ]
    },
    "AWS::DataSync::LocationS3": {
        "importProperties": [
            "LocationArn"
        ]
    },
    "AWS::DataSync::LocationSMB": {
        "importProperties": [
            "LocationArn"
        ]
    },
    "AWS::DataSync::Task": {
        "importProperties": [
            "TaskArn"
        ]
    },
    "AWS::Detective::Graph": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Detective::MemberInvitation": {
        "importProperties": [
            "GraphArn",
            "MemberId"
        ]
    },
    "AWS::DevOpsGuru::NotificationChannel": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::DevOpsGuru::ResourceCollection": {
        "importProperties": [
            "ResourceCollectionType"
        ]
    },
    "AWS::DynamoDB::GlobalTable": {
        "importProperties": [
            "TableName"
        ]
    },
    "AWS::DynamoDB::Table": {
        "importProperties": [
            "TableName"
        ]
    },
    "AWS::EC2::CapacityReservationFleet": {
        "importProperties": [
            "CapacityReservationFleetId"
        ]
    },
    "AWS::EC2::CarrierGateway": {
        "importProperties": [
            "CarrierGatewayId"
        ]
    },
    "AWS::EC2::DHCPOptions": {
        "importProperties": [
            "DhcpOptionsId"
        ]
    },
    "AWS::EC2::EC2Fleet": {
        "importProperties": [
            "FleetId"
        ]
    },
    "AWS::EC2::EIP": {
        "importProperties": [
            "PublicIp"
        ]
    },
    "AWS::EC2::EgressOnlyInternetGateway": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::EC2::EnclaveCertificateIamRoleAssociation": {
        "importProperties": [
            "CertificateArn",
            "RoleArn"
        ]
    },
    "AWS::EC2::FlowLog": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::EC2::GatewayRouteTableAssociation": {
        "importProperties": [
            "GatewayId"
        ]
    },
    "AWS::EC2::Host": {
        "importProperties": [
            "HostId"
        ]
    },
    "AWS::EC2::IPAM": {
        "importProperties": [
            "IpamId"
        ]
    },
    "AWS::EC2::IPAMAllocation": {
        "importProperties": [
            "IpamPoolId",
            "IpamPoolAllocationId",
            "Cidr"
        ]
    },
    "AWS::EC2::IPAMPool": {
        "importProperties": [
            "IpamPoolId"
        ]
    },
    "AWS::EC2::IPAMScope": {
        "importProperties": [
            "IpamScopeId"
        ]
    },
    "AWS::EC2::Instance": {
        "importProperties": [
            "InstanceId"
        ]
    },
    "AWS::EC2::InternetGateway": {
        "importProperties": [
            "InternetGatewayId"
        ]
    },
    "AWS::EC2::LocalGatewayRoute": {
        "importProperties": [
            "DestinationCidrBlock",
            "LocalGatewayRouteTableId"
        ]
    },
    "AWS::EC2::LocalGatewayRouteTableVPCAssociation": {
        "importProperties": [
            "LocalGatewayRouteTableVpcAssociationId"
        ]
    },
    "AWS::EC2::NatGateway": {
        "importProperties": [
            "NatGatewayId"
        ]
    },
    "AWS::EC2::NetworkAcl": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::EC2::NetworkInsightsAccessScope": {
        "importProperties": [
            "NetworkInsightsAccessScopeId"
        ]
    },
    "AWS::EC2::NetworkInsightsAccessScopeAnalysis": {
        "importProperties": [
            "NetworkInsightsAccessScopeAnalysisId"
        ]
    },
    "AWS::EC2::NetworkInsightsAnalysis": {
        "importProperties": [
            "NetworkInsightsAnalysisId"
        ]
    },
    "AWS::EC2::NetworkInsightsPath": {
        "importProperties": [
            "NetworkInsightsPathId"
        ]
    },
    "AWS::EC2::NetworkInterface": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::EC2::PrefixList": {
        "importProperties": [
            "PrefixListId"
        ]
    },
    "AWS::EC2::RouteTable": {
        "importProperties": [
            "RouteTableId"
        ]
    },
    "AWS::EC2::SecurityGroup": {
        "importProperties": [
            "GroupId"
        ]
    },
    "AWS::EC2::SpotFleet": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::EC2::Subnet": {
        "importProperties": [
            "SubnetId"
        ]
    },
    "AWS::EC2::SubnetRouteTableAssociation": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::EC2::TransitGateway": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::EC2::TransitGatewayConnect": {
        "importProperties": [
            "TransitGatewayAttachmentId"
        ]
    },
    "AWS::EC2::TransitGatewayMulticastDomain": {
        "importProperties": [
            "TransitGatewayMulticastDomainId"
        ]
    },
    "AWS::EC2::TransitGatewayMulticastDomainAssociation": {
        "importProperties": [
            "TransitGatewayMulticastDomainId",
            "TransitGatewayAttachmentId",
            "SubnetId"
        ]
    },
    "AWS::EC2::TransitGatewayMulticastGroupMember": {
        "importProperties": [
            "TransitGatewayMulticastDomainId",
            "GroupIpAddress",
            "NetworkInterfaceId"
        ]
    },
    "AWS::EC2::TransitGatewayMulticastGroupSource": {
        "importProperties": [
            "TransitGatewayMulticastDomainId",
            "GroupIpAddress",
            "NetworkInterfaceId"
        ]
    },
    "AWS::EC2::TransitGatewayPeeringAttachment": {
        "importProperties": [
            "TransitGatewayAttachmentId"
        ]
    },
    "AWS::EC2::TransitGatewayVpcAttachment": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::EC2::VPC": {
        "importProperties": [
            "VpcId"
        ]
    },
    "AWS::EC2::VPCDHCPOptionsAssociation": {
        "importProperties": [
            "DhcpOptionsId",
            "VpcId"
        ]
    },
    "AWS::EC2::Volume": {
        "importProperties": [
            "VolumeId"
        ]
    },
    "AWS::ECR::PublicRepository": {
        "importProperties": [
            "RepositoryName"
        ]
    },
    "AWS::ECR::RegistryPolicy": {
        "importProperties": [
            "RegistryId"
        ]
    },
    "AWS::ECR::ReplicationConfiguration": {
        "importProperties": [
            "RegistryId"
        ]
    },
    "AWS::ECR::Repository": {
        "importProperties": [
            "RepositoryName"
        ]
    },
    "AWS::ECS::CapacityProvider": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::ECS::Cluster": {
        "importProperties": [
            "ClusterName"
        ]
    },
    "AWS::ECS::ClusterCapacityProviderAssociations": {
        "importProperties": [
            "Cluster"
        ]
    },
    "AWS::ECS::PrimaryTaskSet": {
        "importProperties": [
            "Cluster",
            "Service"
        ]
    },
    "AWS::ECS::Service": {
        "importProperties": [
            "ServiceArn",
            "Cluster"
        ]
    },
    "AWS::ECS::TaskDefinition": {
        "importProperties": [
            "TaskDefinitionArn"
        ]
    },
    "AWS::ECS::TaskSet": {
        "importProperties": [
            "Cluster",
            "Service",
            "Id"
        ]
    },
    "AWS::EFS::AccessPoint": {
        "importProperties": [
            "AccessPointId"
        ]
    },
    "AWS::EFS::FileSystem": {
        "importProperties": [
            "FileSystemId"
        ]
    },
    "AWS::EFS::MountTarget": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::EKS::Addon": {
        "importProperties": [
            "ClusterName",
            "AddonName"
        ]
    },
    "AWS::EKS::Cluster": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::EKS::FargateProfile": {
        "importProperties": [
            "ClusterName",
            "FargateProfileName"
        ]
    },
    "AWS::EKS::Nodegroup": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::EMR::Studio": {
        "importProperties": [
            "StudioId"
        ]
    },
    "AWS::EMR::StudioSessionMapping": {
        "importProperties": [
            "StudioId",
            "IdentityType",
            "IdentityName"
        ]
    },
    "AWS::EMRContainers::VirtualCluster": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::ElastiCache::GlobalReplicationGroup": {
        "importProperties": [
            "GlobalReplicationGroupId"
        ]
    },
    "AWS::ElastiCache::User": {
        "importProperties": [
            "UserId"
        ]
    },
    "AWS::ElastiCache::UserGroup": {
        "importProperties": [
            "UserGroupId"
        ]
    },
    "AWS::ElasticLoadBalancing::LoadBalancer": {
        "importProperties": [
            "LoadBalancerName"
        ]
    },
    "AWS::ElasticLoadBalancingV2::Listener": {
        "importProperties": [
            "ListenerArn"
        ]
    },
    "AWS::ElasticLoadBalancingV2::ListenerRule": {
        "importProperties": [
            "RuleArn"
        ]
    },
    "AWS::ElasticLoadBalancingV2::LoadBalancer": {
        "importProperties": [
            "LoadBalancerArn"
        ]
    },
    "AWS::EventSchemas::RegistryPolicy": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::Events::ApiDestination": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::Events::Archive": {
        "importProperties": [
            "ArchiveName"
        ]
    },
    "AWS::Events::Connection": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::Events::Rule": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Evidently::Experiment": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Evidently::Feature": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Evidently::Launch": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Evidently::Project": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::FIS::ExperimentTemplate": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::FMS::NotificationChannel": {
        "importProperties": [
            "SnsTopicArn"
        ]
    },
    "AWS::FMS::Policy": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::FinSpace::Environment": {
        "importProperties": [
            "EnvironmentId"
        ]
    },
    "AWS::Forecast::Dataset": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Forecast::DatasetGroup": {
        "importProperties": [
            "DatasetGroupArn"
        ]
    },
    "AWS::FraudDetector::Detector": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::FraudDetector::EntityType": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::FraudDetector::EventType": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::FraudDetector::Label": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::FraudDetector::Outcome": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::FraudDetector::Variable": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::GameLift::Alias": {
        "importProperties": [
            "AliasId"
        ]
    },
    "AWS::GameLift::Fleet": {
        "importProperties": [
            "FleetId"
        ]
    },
    "AWS::GameLift::GameServerGroup": {
        "importProperties": [
            "GameServerGroupArn"
        ]
    },
    "AWS::GlobalAccelerator::Accelerator": {
        "importProperties": [
            "AcceleratorArn"
        ]
    },
    "AWS::GlobalAccelerator::EndpointGroup": {
        "importProperties": [
            "EndpointGroupArn"
        ]
    },
    "AWS::GlobalAccelerator::Listener": {
        "importProperties": [
            "ListenerArn"
        ]
    },
    "AWS::Glue::Registry": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Glue::Schema": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Glue::SchemaVersion": {
        "importProperties": [
            "VersionId"
        ]
    },
    "AWS::Glue::SchemaVersionMetadata": {
        "importProperties": [
            "SchemaVersionId",
            "Key",
            "Value"
        ]
    },
    "AWS::GreengrassV2::ComponentVersion": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::GroundStation::Config": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::GroundStation::DataflowEndpointGroup": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::GroundStation::MissionProfile": {
        "importProperties": [
            "Id",
            "Arn"
        ]
    },
    "AWS::HealthLake::FHIRDatastore": {
        "importProperties": [
            "DatastoreId"
        ]
    },
    "AWS::IAM::OIDCProvider": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::IAM::SAMLProvider": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::IAM::ServerCertificate": {
        "importProperties": [
            "ServerCertificateName"
        ]
    },
    "AWS::IAM::VirtualMFADevice": {
        "importProperties": [
            "SerialNumber"
        ]
    },
    "AWS::IVS::Channel": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::IVS::PlaybackKeyPair": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::IVS::RecordingConfiguration": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::IVS::StreamKey": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::ImageBuilder::Component": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::ImageBuilder::ContainerRecipe": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::ImageBuilder::DistributionConfiguration": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::ImageBuilder::Image": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::ImageBuilder::ImagePipeline": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::ImageBuilder::ImageRecipe": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::ImageBuilder::InfrastructureConfiguration": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Inspector::AssessmentTarget": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Inspector::AssessmentTemplate": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Inspector::ResourceGroup": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::InspectorV2::Filter": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::IoT::AccountAuditConfiguration": {
        "importProperties": [
            "AccountId"
        ]
    },
    "AWS::IoT::Authorizer": {
        "importProperties": [
            "AuthorizerName"
        ]
    },
    "AWS::IoT::Certificate": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::IoT::CustomMetric": {
        "importProperties": [
            "MetricName"
        ]
    },
    "AWS::IoT::Dimension": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::IoT::DomainConfiguration": {
        "importProperties": [
            "DomainConfigurationName"
        ]
    },
    "AWS::IoT::FleetMetric": {
        "importProperties": [
            "MetricName"
        ]
    },
    "AWS::IoT::JobTemplate": {
        "importProperties": [
            "JobTemplateId"
        ]
    },
    "AWS::IoT::Logging": {
        "importProperties": [
            "AccountId"
        ]
    },
    "AWS::IoT::MitigationAction": {
        "importProperties": [
            "ActionName"
        ]
    },
    "AWS::IoT::ProvisioningTemplate": {
        "importProperties": [
            "TemplateName"
        ]
    },
    "AWS::IoT::ResourceSpecificLogging": {
        "importProperties": [
            "TargetId"
        ]
    },
    "AWS::IoT::ScheduledAudit": {
        "importProperties": [
            "ScheduledAuditName"
        ]
    },
    "AWS::IoT::SecurityProfile": {
        "importProperties": [
            "SecurityProfileName"
        ]
    },
    "AWS::IoT::Thing": {
        "importProperties": [
            "ThingName"
        ]
    },
    "AWS::IoT::TopicRule": {
        "importProperties": [
            "RuleName"
        ]
    },
    "AWS::IoT::TopicRuleDestination": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::IoTAnalytics::Channel": {
        "importProperties": [
            "ChannelName"
        ]
    },
    "AWS::IoTAnalytics::Dataset": {
        "importProperties": [
            "DatasetName"
        ]
    },
    "AWS::IoTAnalytics::Datastore": {
        "importProperties": [
            "DatastoreName"
        ]
    },
    "AWS::IoTAnalytics::Pipeline": {
        "importProperties": [
            "PipelineName"
        ]
    },
    "AWS::IoTCoreDeviceAdvisor::SuiteDefinition": {
        "importProperties": [
            "SuiteDefinitionId"
        ]
    },
    "AWS::IoTEvents::DetectorModel": {
        "importProperties": [
            "DetectorModelName"
        ]
    },
    "AWS::IoTEvents::Input": {
        "importProperties": [
            "InputName"
        ]
    },
    "AWS::IoTFleetHub::Application": {
        "importProperties": [
            "ApplicationId"
        ]
    },
    "AWS::IoTSiteWise::AccessPolicy": {
        "importProperties": [
            "AccessPolicyId"
        ]
    },
    "AWS::IoTSiteWise::Asset": {
        "importProperties": [
            "AssetId"
        ]
    },
    "AWS::IoTSiteWise::AssetModel": {
        "importProperties": [
            "AssetModelId"
        ]
    },
    "AWS::IoTSiteWise::Dashboard": {
        "importProperties": [
            "DashboardId"
        ]
    },
    "AWS::IoTSiteWise::Gateway": {
        "importProperties": [
            "GatewayId"
        ]
    },
    "AWS::IoTSiteWise::Portal": {
        "importProperties": [
            "PortalId"
        ]
    },
    "AWS::IoTSiteWise::Project": {
        "importProperties": [
            "ProjectId"
        ]
    },
    "AWS::IoTWireless::Destination": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::IoTWireless::DeviceProfile": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::IoTWireless::FuotaTask": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::IoTWireless::MulticastGroup": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::IoTWireless::PartnerAccount": {
        "importProperties": [
            "PartnerAccountId"
        ]
    },
    "AWS::IoTWireless::ServiceProfile": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::IoTWireless::TaskDefinition": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::IoTWireless::WirelessDevice": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::IoTWireless::WirelessGateway": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::KMS::Alias": {
        "importProperties": [
            "AliasName"
        ]
    },
    "AWS::KMS::Key": {
        "importProperties": [
            "KeyId"
        ]
    },
    "AWS::KMS::ReplicaKey": {
        "importProperties": [
            "KeyId"
        ]
    },
    "AWS::KafkaConnect::Connector": {
        "importProperties": [
            "ConnectorArn"
        ]
    },
    "AWS::Kendra::DataSource": {
        "importProperties": [
            "Id",
            "IndexId"
        ]
    },
    "AWS::Kendra::Faq": {
        "importProperties": [
            "Id",
            "IndexId"
        ]
    },
    "AWS::Kendra::Index": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::Kinesis::Stream": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::KinesisFirehose::DeliveryStream": {
        "importProperties": [
            "DeliveryStreamName"
        ]
    },
    "AWS::KinesisVideo::SignalingChannel": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::KinesisVideo::Stream": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::Lambda::Alias": {
        "importProperties": [
            "AliasArn"
        ]
    },
    "AWS::Lambda::CodeSigningConfig": {
        "importProperties": [
            "CodeSigningConfigArn"
        ]
    },
    "AWS::Lambda::EventSourceMapping": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::Lambda::Function": {
        "importProperties": [
            "FunctionName"
        ]
    },
    "AWS::Lambda::Version": {
        "importProperties": [
            "FunctionArn"
        ]
    },
    "AWS::Lex::Bot": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::Lex::BotAlias": {
        "importProperties": [
            "BotAliasId",
            "BotId"
        ]
    },
    "AWS::Lex::BotVersion": {
        "importProperties": [
            "BotId",
            "BotVersion"
        ]
    },
    "AWS::Lex::ResourcePolicy": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::LicenseManager::Grant": {
        "importProperties": [
            "GrantArn"
        ]
    },
    "AWS::LicenseManager::License": {
        "importProperties": [
            "LicenseArn"
        ]
    },
    "AWS::Lightsail::Alarm": {
        "importProperties": [
            "AlarmName"
        ]
    },
    "AWS::Lightsail::Bucket": {
        "importProperties": [
            "BucketName"
        ]
    },
    "AWS::Lightsail::Certificate": {
        "importProperties": [
            "CertificateName"
        ]
    },
    "AWS::Lightsail::Container": {
        "importProperties": [
            "ServiceName"
        ]
    },
    "AWS::Lightsail::Database": {
        "importProperties": [
            "RelationalDatabaseName"
        ]
    },
    "AWS::Lightsail::Disk": {
        "importProperties": [
            "DiskName"
        ]
    },
    "AWS::Lightsail::Distribution": {
        "importProperties": [
            "DistributionName"
        ]
    },
    "AWS::Lightsail::Instance": {
        "importProperties": [
            "InstanceName"
        ]
    },
    "AWS::Lightsail::LoadBalancer": {
        "importProperties": [
            "LoadBalancerName"
        ]
    },
    "AWS::Lightsail::LoadBalancerTlsCertificate": {
        "importProperties": [
            "CertificateName",
            "LoadBalancerName"
        ]
    },
    "AWS::Lightsail::StaticIp": {
        "importProperties": [
            "StaticIpName"
        ]
    },
    "AWS::Location::GeofenceCollection": {
        "importProperties": [
            "CollectionName"
        ]
    },
    "AWS::Location::Map": {
        "importProperties": [
            "MapName"
        ]
    },
    "AWS::Location::PlaceIndex": {
        "importProperties": [
            "IndexName"
        ]
    },
    "AWS::Location::RouteCalculator": {
        "importProperties": [
            "CalculatorName"
        ]
    },
    "AWS::Location::Tracker": {
        "importProperties": [
            "TrackerName"
        ]
    },
    "AWS::Location::TrackerConsumer": {
        "importProperties": [
            "TrackerName",
            "ConsumerArn"
        ]
    },
    "AWS::Logs::LogGroup": {
        "importProperties": [
            "LogGroupName"
        ]
    },
    "AWS::Logs::MetricFilter": {
        "importProperties": [
            "FilterName"
        ]
    },
    "AWS::Logs::QueryDefinition": {
        "importProperties": [
            "QueryDefinitionId"
        ]
    },
    "AWS::Logs::ResourcePolicy": {
        "importProperties": [
            "PolicyName"
        ]
    },
    "AWS::Logs::SubscriptionFilter": {
        "importProperties": [
            "LogGroupName",
            "FilterName"
        ]
    },
    "AWS::LookoutEquipment::InferenceScheduler": {
        "importProperties": [
            "InferenceSchedulerName"
        ]
    },
    "AWS::LookoutMetrics::Alert": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::LookoutMetrics::AnomalyDetector": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::LookoutVision::Project": {
        "importProperties": [
            "ProjectName"
        ]
    },
    "AWS::MSK::Cluster": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::MWAA::Environment": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::Macie::CustomDataIdentifier": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::Macie::FindingsFilter": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::Macie::Session": {
        "importProperties": [
            "AwsAccountId"
        ]
    },
    "AWS::MediaConnect::Flow": {
        "importProperties": [
            "FlowArn"
        ]
    },
    "AWS::MediaConnect::FlowEntitlement": {
        "importProperties": [
            "EntitlementArn"
        ]
    },
    "AWS::MediaConnect::FlowOutput": {
        "importProperties": [
            "OutputArn"
        ]
    },
    "AWS::MediaConnect::FlowSource": {
        "importProperties": [
            "SourceArn"
        ]
    },
    "AWS::MediaConnect::FlowVpcInterface": {
        "importProperties": [
            "FlowArn",
            "Name"
        ]
    },
    "AWS::MediaPackage::Asset": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::MediaPackage::Channel": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::MediaPackage::OriginEndpoint": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::MediaPackage::PackagingConfiguration": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::MediaPackage::PackagingGroup": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::MemoryDB::ACL": {
        "importProperties": [
            "ACLName"
        ]
    },
    "AWS::MemoryDB::Cluster": {
        "importProperties": [
            "ClusterName"
        ]
    },
    "AWS::MemoryDB::ParameterGroup": {
        "importProperties": [
            "ParameterGroupName"
        ]
    },
    "AWS::MemoryDB::SubnetGroup": {
        "importProperties": [
            "SubnetGroupName"
        ]
    },
    "AWS::MemoryDB::User": {
        "importProperties": [
            "UserName"
        ]
    },
    "AWS::NetworkFirewall::Firewall": {
        "importProperties": [
            "FirewallArn"
        ]
    },
    "AWS::NetworkFirewall::FirewallPolicy": {
        "importProperties": [
            "FirewallPolicyArn"
        ]
    },
    "AWS::NetworkFirewall::LoggingConfiguration": {
        "importProperties": [
            "FirewallArn"
        ]
    },
    "AWS::NetworkFirewall::RuleGroup": {
        "importProperties": [
            "RuleGroupArn"
        ]
    },
    "AWS::NetworkManager::CustomerGatewayAssociation": {
        "importProperties": [
            "GlobalNetworkId",
            "CustomerGatewayArn"
        ]
    },
    "AWS::NetworkManager::Device": {
        "importProperties": [
            "GlobalNetworkId",
            "DeviceId"
        ]
    },
    "AWS::NetworkManager::GlobalNetwork": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::NetworkManager::Link": {
        "importProperties": [
            "GlobalNetworkId",
            "LinkId"
        ]
    },
    "AWS::NetworkManager::LinkAssociation": {
        "importProperties": [
            "GlobalNetworkId",
            "DeviceId",
            "LinkId"
        ]
    },
    "AWS::NetworkManager::Site": {
        "importProperties": [
            "GlobalNetworkId",
            "SiteId"
        ]
    },
    "AWS::NetworkManager::TransitGatewayRegistration": {
        "importProperties": [
            "GlobalNetworkId",
            "TransitGatewayArn"
        ]
    },
    "AWS::NimbleStudio::LaunchProfile": {
        "importProperties": [
            "LaunchProfileId",
            "StudioId"
        ]
    },
    "AWS::NimbleStudio::StreamingImage": {
        "importProperties": [
            "StudioId",
            "StreamingImageId"
        ]
    },
    "AWS::NimbleStudio::Studio": {
        "importProperties": [
            "StudioId"
        ]
    },
    "AWS::NimbleStudio::StudioComponent": {
        "importProperties": [
            "StudioComponentId",
            "StudioId"
        ]
    },
    "AWS::OpenSearchService::Domain": {
        "importProperties": [
            "DomainName"
        ]
    },
    "AWS::OpsWorksCM::Server": {
        "importProperties": [
            "ServerName"
        ]
    },
    "AWS::Panorama::ApplicationInstance": {
        "importProperties": [
            "ApplicationInstanceId"
        ]
    },
    "AWS::Panorama::Package": {
        "importProperties": [
            "PackageId"
        ]
    },
    "AWS::Panorama::PackageVersion": {
        "importProperties": [
            "PackageId",
            "PackageVersion",
            "PatchVersion"
        ]
    },
    "AWS::Pinpoint::InAppTemplate": {
        "importProperties": [
            "TemplateName"
        ]
    },
    "AWS::QLDB::Stream": {
        "importProperties": [
            "LedgerName",
            "Id"
        ]
    },
    "AWS::QuickSight::Analysis": {
        "importProperties": [
            "AnalysisId",
            "AwsAccountId"
        ]
    },
    "AWS::QuickSight::Dashboard": {
        "importProperties": [
            "AwsAccountId",
            "DashboardId"
        ]
    },
    "AWS::QuickSight::DataSet": {
        "importProperties": [
            "AwsAccountId",
            "DataSetId"
        ]
    },
    "AWS::QuickSight::DataSource": {
        "importProperties": [
            "AwsAccountId",
            "DataSourceId"
        ]
    },
    "AWS::QuickSight::Template": {
        "importProperties": [
            "AwsAccountId",
            "TemplateId"
        ]
    },
    "AWS::QuickSight::Theme": {
        "importProperties": [
            "ThemeId",
            "AwsAccountId"
        ]
    },
    "AWS::RDS::DBCluster": {
        "importProperties": [
            "DBClusterIdentifier"
        ]
    },
    "AWS::RDS::DBInstance": {
        "importProperties": [
            "DBInstanceIdentifier"
        ]
    },
    "AWS::RDS::DBProxy": {
        "importProperties": [
            "DBProxyName"
        ]
    },
    "AWS::RDS::DBProxyEndpoint": {
        "importProperties": [
            "DBProxyEndpointName"
        ]
    },
    "AWS::RDS::DBProxyTargetGroup": {
        "importProperties": [
            "TargetGroupArn"
        ]
    },
    "AWS::RDS::GlobalCluster": {
        "importProperties": [
            "GlobalClusterIdentifier"
        ]
    },
    "AWS::RUM::AppMonitor": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::Redshift::Cluster": {
        "importProperties": [
            "ClusterIdentifier"
        ]
    },
    "AWS::Redshift::EndpointAccess": {
        "importProperties": [
            "EndpointName"
        ]
    },
    "AWS::Redshift::EndpointAuthorization": {
        "importProperties": [
            "ClusterIdentifier",
            "Account"
        ]
    },
    "AWS::Redshift::EventSubscription": {
        "importProperties": [
            "SubscriptionName"
        ]
    },
    "AWS::Redshift::ScheduledAction": {
        "importProperties": [
            "ScheduledActionName"
        ]
    },
    "AWS::RefactorSpaces::Application": {
        "importProperties": [
            "EnvironmentIdentifier",
            "ApplicationIdentifier"
        ]
    },
    "AWS::RefactorSpaces::Environment": {
        "importProperties": [
            "EnvironmentIdentifier"
        ]
    },
    "AWS::RefactorSpaces::Route": {
        "importProperties": [
            "EnvironmentIdentifier",
            "ApplicationIdentifier",
            "RouteIdentifier"
        ]
    },
    "AWS::RefactorSpaces::Service": {
        "importProperties": [
            "EnvironmentIdentifier",
            "ApplicationIdentifier",
            "ServiceIdentifier"
        ]
    },
    "AWS::Rekognition::Collection": {
        "importProperties": [
            "CollectionId"
        ]
    },
    "AWS::Rekognition::Project": {
        "importProperties": [
            "ProjectName"
        ]
    },
    "AWS::ResilienceHub::App": {
        "importProperties": [
            "AppArn"
        ]
    },
    "AWS::ResilienceHub::ResiliencyPolicy": {
        "importProperties": [
            "PolicyArn"
        ]
    },
    "AWS::ResourceGroups::Group": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::RoboMaker::Fleet": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::RoboMaker::Robot": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::RoboMaker::RobotApplication": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::RoboMaker::RobotApplicationVersion": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::RoboMaker::SimulationApplication": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::RoboMaker::SimulationApplicationVersion": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Route53::DNSSEC": {
        "importProperties": [
            "HostedZoneId"
        ]
    },
    "AWS::Route53::HealthCheck": {
        "importProperties": [
            "HealthCheckId"
        ]
    },
    "AWS::Route53::HostedZone": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::Route53::KeySigningKey": {
        "importProperties": [
            "HostedZoneId",
            "Name"
        ]
    },
    "AWS::Route53RecoveryControl::Cluster": {
        "importProperties": [
            "ClusterArn"
        ]
    },
    "AWS::Route53RecoveryControl::ControlPanel": {
        "importProperties": [
            "ControlPanelArn"
        ]
    },
    "AWS::Route53RecoveryControl::RoutingControl": {
        "importProperties": [
            "RoutingControlArn"
        ]
    },
    "AWS::Route53RecoveryControl::SafetyRule": {
        "importProperties": [
            "SafetyRuleArn"
        ]
    },
    "AWS::Route53RecoveryReadiness::Cell": {
        "importProperties": [
            "CellName"
        ]
    },
    "AWS::Route53RecoveryReadiness::ReadinessCheck": {
        "importProperties": [
            "ReadinessCheckName"
        ]
    },
    "AWS::Route53RecoveryReadiness::RecoveryGroup": {
        "importProperties": [
            "RecoveryGroupName"
        ]
    },
    "AWS::Route53RecoveryReadiness::ResourceSet": {
        "importProperties": [
            "ResourceSetName"
        ]
    },
    "AWS::Route53Resolver::FirewallDomainList": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::Route53Resolver::FirewallRuleGroup": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::Route53Resolver::FirewallRuleGroupAssociation": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::Route53Resolver::ResolverConfig": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::Route53Resolver::ResolverDNSSECConfig": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::Route53Resolver::ResolverQueryLoggingConfig": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::Route53Resolver::ResolverRule": {
        "importProperties": [
            "ResolverRuleId"
        ]
    },
    "AWS::Route53Resolver::ResolverRuleAssociation": {
        "importProperties": [
            "ResolverRuleAssociationId"
        ]
    },
    "AWS::S3::AccessPoint": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::S3::Bucket": {
        "importProperties": [
            "BucketName"
        ]
    },
    "AWS::S3::MultiRegionAccessPoint": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::S3::MultiRegionAccessPointPolicy": {
        "importProperties": [
            "MrapName"
        ]
    },
    "AWS::S3ObjectLambda::AccessPoint": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::S3ObjectLambda::AccessPointPolicy": {
        "importProperties": [
            "ObjectLambdaAccessPoint"
        ]
    },
    "AWS::S3Outposts::AccessPoint": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::S3Outposts::Bucket": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::S3Outposts::BucketPolicy": {
        "importProperties": [
            "Bucket"
        ]
    },
    "AWS::S3Outposts::Endpoint": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::SES::ConfigurationSet": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::SES::ConfigurationSetEventDestination": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::SES::ContactList": {
        "importProperties": [
            "ContactListName"
        ]
    },
    "AWS::SES::Template": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::SNS::Topic": {
        "importProperties": [
            "TopicArn"
        ]
    },
    "AWS::SQS::Queue": {
        "importProperties": [
            "QueueUrl"
        ]
    },
    "AWS::SSM::Association": {
        "importProperties": [
            "AssociationId"
        ]
    },
    "AWS::SSM::Document": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::SSM::ResourceDataSync": {
        "importProperties": [
            "SyncName"
        ]
    },
    "AWS::SSMContacts::Contact": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::SSMContacts::ContactChannel": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::SSMIncidents::ReplicationSet": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::SSMIncidents::ResponsePlan": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::SSO::InstanceAccessControlAttributeConfiguration": {
        "importProperties": [
            "InstanceArn"
        ]
    },
    "AWS::SSO::PermissionSet": {
        "importProperties": [
            "InstanceArn",
            "PermissionSetArn"
        ]
    },
    "AWS::SageMaker::App": {
        "importProperties": [
            "AppName",
            "AppType",
            "DomainId",
            "UserProfileName"
        ]
    },
    "AWS::SageMaker::AppImageConfig": {
        "importProperties": [
            "AppImageConfigName"
        ]
    },
    "AWS::SageMaker::DataQualityJobDefinition": {
        "importProperties": [
            "JobDefinitionArn"
        ]
    },
    "AWS::SageMaker::Device": {
        "importProperties": [
            "DeviceFleetName"
        ]
    },
    "AWS::SageMaker::DeviceFleet": {
        "importProperties": [
            "DeviceFleetName"
        ]
    },
    "AWS::SageMaker::Domain": {
        "importProperties": [
            "DomainId"
        ]
    },
    "AWS::SageMaker::FeatureGroup": {
        "importProperties": [
            "FeatureGroupName"
        ]
    },
    "AWS::SageMaker::Image": {
        "importProperties": [
            "ImageArn"
        ]
    },
    "AWS::SageMaker::ImageVersion": {
        "importProperties": [
            "ImageVersionArn"
        ]
    },
    "AWS::SageMaker::ModelBiasJobDefinition": {
        "importProperties": [
            "JobDefinitionArn"
        ]
    },
    "AWS::SageMaker::ModelExplainabilityJobDefinition": {
        "importProperties": [
            "JobDefinitionArn"
        ]
    },
    "AWS::SageMaker::ModelPackageGroup": {
        "importProperties": [
            "ModelPackageGroupArn"
        ]
    },
    "AWS::SageMaker::ModelQualityJobDefinition": {
        "importProperties": [
            "JobDefinitionArn"
        ]
    },
    "AWS::SageMaker::MonitoringSchedule": {
        "importProperties": [
            "MonitoringScheduleArn"
        ]
    },
    "AWS::SageMaker::Pipeline": {
        "importProperties": [
            "PipelineName"
        ]
    },
    "AWS::SageMaker::Project": {
        "importProperties": [
            "ProjectArn"
        ]
    },
    "AWS::SageMaker::UserProfile": {
        "importProperties": [
            "UserProfileName",
            "DomainId"
        ]
    },
    "AWS::ServiceCatalog::CloudFormationProvisionedProduct": {
        "importProperties": [
            "ProvisionedProductId"
        ]
    },
    "AWS::ServiceCatalog::ServiceAction": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::ServiceCatalog::ServiceActionAssociation": {
        "importProperties": [
            "ProductId",
            "ProvisioningArtifactId",
            "ServiceActionId"
        ]
    },
    "AWS::ServiceCatalogAppRegistry::Application": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::ServiceCatalogAppRegistry::AttributeGroup": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::ServiceCatalogAppRegistry::ResourceAssociation": {
        "importProperties": [
            "Id"
        ]
    },
    "AWS::Signer::ProfilePermission": {
        "importProperties": [
            "StatementId",
            "ProfileName"
        ]
    },
    "AWS::Signer::SigningProfile": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::StepFunctions::Activity": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::StepFunctions::StateMachine": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Synthetics::Canary": {
        "importProperties": [
            "Name"
        ]
    },
    "AWS::Timestream::Database": {
        "importProperties": [
            "DatabaseName"
        ]
    },
    "AWS::Timestream::ScheduledQuery": {
        "importProperties": [
            "Arn"
        ]
    },
    "AWS::Timestream::Table": {
        "importProperties": [
            "DatabaseName",
            "TableName"
        ]
    },
    "AWS::Transfer::Workflow": {
        "importProperties": [
            "WorkflowId"
        ]
    },
    "AWS::WAFv2::IPSet": {
        "importProperties": [
            "Name",
            "Id",
            "Scope"
        ]
    },
    "AWS::WAFv2::LoggingConfiguration": {
        "importProperties": [
            "ResourceArn"
        ]
    },
    "AWS::WAFv2::RegexPatternSet": {
        "importProperties": [
            "Name",
            "Id",
            "Scope"
        ]
    },
    "AWS::WAFv2::RuleGroup": {
        "importProperties": [
            "Name",
            "Id",
            "Scope"
        ]
    },
    "AWS::WAFv2::WebACL": {
        "importProperties": [
            "Name",
            "Id",
            "Scope"
        ]
    },
    "AWS::WAFv2::WebACLAssociation": {
        "importProperties": [
            "ResourceArn",
            "WebACLArn"
        ]
    },
    "AWS::Wisdom::Assistant": {
        "importProperties": [
            "AssistantId"
        ]
    },
    "AWS::Wisdom::AssistantAssociation": {
        "importProperties": [
            "AssistantAssociationId",
            "AssistantId"
        ]
    },
    "AWS::Wisdom::KnowledgeBase": {
        "importProperties": [
            "KnowledgeBaseId"
        ]
    },
    "AWS::WorkSpaces::ConnectionAlias": {
        "importProperties": [
            "AliasId"
        ]
    },
    "AWS::XRay::Group": {
        "importProperties": [
            "GroupARN"
        ]
    },
    "AWS::XRay::SamplingRule": {
        "importProperties": [
            "RuleARN"
        ]
    },
    /*****/
    "AWS::CloudFormation::Stack": {
        "importProperties": [
            "StackId"
        ],
        "capabilities": [
            "CAPABILITY_NAMED_IAM"
        ]
    },
    "AWS::CloudFormation::StackSet": {
        "importProperties": [
            "StackSetId"
        ],
        "capabilities": [
            "CAPABILITY_NAMED_IAM"
        ]
    },
    "AWS::IAM::Group": {
        "importProperties": [
            "GroupName"
        ],
        "capabilities": [
            "CAPABILITY_NAMED_IAM"
        ]
    },
    "AWS::IAM::InstanceProfile": {
        "importProperties": [
            "InstanceProfileName"
        ],
        "capabilities": [
            "CAPABILITY_NAMED_IAM"
        ]
    },
    "AWS::IAM::Role": {
        "importProperties": [
            "RoleName"
        ],
        "capabilities": [
            "CAPABILITY_NAMED_IAM"
        ]
    },
    "AWS::IAM::User": {
        "importProperties": [
            "UserName"
        ],
        "capabilities": [
            "CAPABILITY_NAMED_IAM"
        ]
    },
    "AWS::IAM::ManagedPolicy": {
        "importProperties": [
            "PolicyArn"
        ],
        "capabilities": [
            "CAPABILITY_NAMED_IAM"
        ]
    }
};

async function downloadImportTemplate(stack_name, deletion_policy) {
    var importable_resources = [];
    var resources_to_import = [];
    tracked_resources.forEach(res => {
        if ('type' in res && res['type'] in eligibleImportResources && res.returnValues && res.returnValues.Import) {
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

    var mapped_cfn_output = "";

    resources_to_import.forEach(res => {
        mapped_cfn_output += "# Import properties for " + res['LogicalResourceId'] + " (" + res['ResourceType'] + ")\n# \n";
        Object.keys(res['ResourceIdentifier']).forEach(k => {
            mapped_cfn_output += "#     " + k + ": " + res['ResourceIdentifier'][k] + "\n";
        });
        mapped_cfn_output += "# \n";
    });

    mapped_cfn_output += compileOutputs(importable_resources, deletion_policy)['cfn'];
    
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
        if ('type' in res && res['type'] in eligibleImportResources && res.returnValues && res.returnValues.Import) {
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
