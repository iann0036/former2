var extension_available = false;
var region = 'us-east-1';
var output_objects = [];
var _AWS = AWS;
var visited_sections = [];
var ping_extension_interval = null;

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
                                                    for (var i=0; i<output_objects.length; i++) { // check if already added
                                                        if (output_objects[i].id == child_obj.obj.id) {
                                                            return;
                                                        }
                                                    };
                                                    if (!Array.isArray(related_resources[readable_relationship_type])) {
                                                        related_resources[readable_relationship_type] = [];
                                                    }
                                                    related_resources[readable_relationship_type].push(child_obj);
                                                }
                                            });
                                        });
                                    } else {
                                        var propertyvalue = obj.options.cfn[propertyname];
                                        mapped_check_objects.forEach(child_obj => {
                                            if (child_obj.obj.id != obj.obj.id && child_obj.type == relatedresourcetype && JSON.stringify(child_obj.obj.data).includes(propertyvalue)) {
                                                for (var i=0; i<output_objects.length; i++) { // check if already added
                                                    if (output_objects[i].id == child_obj.obj.id) {
                                                        return;
                                                    }
                                                };
                                                if (!Array.isArray(related_resources[readable_relationship_type])) {
                                                    related_resources[readable_relationship_type] = [];
                                                }
                                                related_resources[readable_relationship_type].push(child_obj);
                                            }
                                        });
                                    }
                                }
                            });
                        });
                    });
                }
            });
        });

        if (Object.keys(related_resources).length) {
            var html = '';
            var i = 1;
            Object.keys(related_resources).forEach(restype => {
                html += `<h5>${restype}</h5>
                <p>
                ${related_resources[restype].map(res => `
                    <div class="checkbox">
                        <input type="checkbox" id="related-check-${i}" class="related-check" data-f2id="${res.obj.id}" data-dt="${res.obj.datatableid}" data-splicelocation="${res.splicelocation}" checked="">
                        <label for="related-check-${i++}">${res.obj.id} (${res.type})</label>
                    </div>
                `).join('')}
                </p>`;
            });
            $('#relatedresources').html(html);
            $('#relatedmodal').modal('show');
        }
        
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
        
                            output_objects.splice(-1 * rows.length, 0, {
                                'id': row.f2id,
                                'type': row.f2type,
                                'data': row.f2data,
                                'region': row.f2region
                            });
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

    $('.additems').click(function () {
        var ids = addSelectedRowsToTemplate("#" + $(this).attr('data-datatable'));
        
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
                        $('#section-search-datatable').bootstrapTable('append', [row]);
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

    $('#credentials-accesskey').on('change', () => {
        window.localStorage.setItem('credentials-accesskey', $('#credentials-accesskey').val().trim());
        updateIdentity();
    });
    $('#credentials-secretkey').on('change', () => {
        window.localStorage.setItem('credentials-secretkey', $('#credentials-secretkey').val().trim());
        updateIdentity();
    });
    $('#credentials-sessiontoken').on('change', () => {
        window.localStorage.setItem('credentials-sessiontoken', $('#credentials-sessiontoken').val().trim());
        updateIdentity();
    });
    $('#credentials-assumerole').on('change', () => {
        window.localStorage.setItem('credentials-assumerole', $('#credentials-assumerole').val().trim());
        updateIdentity();
    });

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
                $('#header-button-clear-outputs').attr('style', 'margin-left: 16px;');
                
                setTimeout(function(){
                    cfn_editor.refresh();
                }, 1);
            } else if (location.hash == "#section-outputs-tf") {
                $('#header-button-copy-tf').attr('style', '');
                $('#header-button-clear-outputs').attr('style', 'margin-left: 16px;');

                setTimeout(function(){
                    tf_editor.refresh();
                }, 1);
            } else if (location.hash == "#section-outputs-troposphere") {
                $('#header-button-copy-troposphere').attr('style', '');
                $('#header-button-clear-outputs').attr('style', 'margin-left: 16px;');

                setTimeout(function(){
                    troposphere_editor.refresh();
                }, 1);
            } else if (location.hash == "#section-outputs-cdkts") {
                $('#header-button-copy-cdkts').attr('style', '');
                $('#header-button-clear-outputs').attr('style', 'margin-left: 16px;');

                setTimeout(function(){
                    cdkts_editor.refresh();
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
            var mapped_outputs = compileOutputs(tracked_resources);

            cfn_editor.getDoc().setValue(mapped_outputs['cfn']);
            setTimeout(function(){
                cfn_editor.refresh();
            }, 1);

            tf_editor.getDoc().setValue(mapped_outputs['tf']);
            setTimeout(function(){
                tf_editor.refresh();
            }, 1);

            troposphere_editor.getDoc().setValue(mapped_outputs['troposphere']);
            setTimeout(function(){
                troposphere_editor.refresh();
            }, 1);

            cdkts_editor.getDoc().setValue(mapped_outputs['cdkts']);
            setTimeout(function(){
                cdkts_editor.refresh();
            }, 1);

            raw_editor.getDoc().setValue(JSON.stringify(output_objects, null, 4));
            setTimeout(function(){
                raw_editor.refresh();
            }, 1);

            resolve();
        });
    }

    /* ========================================================================== */
    // Region Selector
    /* ========================================================================== */

    $('.region-item').on('click', el => {
        region = $(el.target).attr('data-region');

        $('#selected-region').html(region_map[region]);
        $('.region-item').removeAttr('style');
        $('.region-item[data-region=\'' + region + '\']').attr('style', 'font-weight: bold;')

        window.localStorage.setItem('region', region);
    });
    
    var storedregion = window.localStorage.getItem('region');
    if (storedregion) {
        region = storedregion;
    } else {
        region = 'us-east-1';
    }
    $('#selected-region').html(region_map[region]);
    $('.region-item[data-region=\'' + region + '\']').attr('style', 'font-weight: bold;')

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

    $('#scan-account').on('click', () => {
        var completeddatatablecalls = 0;
        var datatablefuncs = [];

        $('#scan-account').attr('disabled', 'disabled');
        $('#search-no-scan-warning').attr('style', 'display: none;');

        Object.getOwnPropertyNames(window).forEach(prop => {
            if (prop.startsWith("updateDatatable")) {
                datatablefuncs.push(prop);
            }
        });

        $('#scan-account').html('Scanning... (0/' + datatablefuncs.length + ')');

        datatablefuncs.forEach(async func => {
            await window[func]().catch(err => {});
            completeddatatablecalls += 1;
            $('#scan-account').html('Scanning... (' + completeddatatablecalls + '/' + datatablefuncs.length + ')');
            if (completeddatatablecalls == datatablefuncs.length) {
                visited_sections.push("all");
                $('#scan-account').removeAttr('disabled');
                $('#scan-account').html('Scan Again');
            }
        });
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
    // Misc
    /* ========================================================================== */

    $('.select2-no-search-arrow').select2({ // Selectors for settings
        minimumResultsForSearch: "Infinity",
        theme: "arrow"
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
    if (window.localStorage.getItem('relatedresourcessetting') == "true") {
        $('#relatedresourcessetting').prop('checked', true);
    }
    $('#relatedresourcessetting').change(function() {
        window.localStorage.setItem('relatedresourcessetting', $(this).is(':checked').toString());
    });

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
        console.warn("No callback found for request: " + detail.id);
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
    $(selector).unblock();
}

/* ========================================================================== */

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
