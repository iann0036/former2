$(document).ready(function(){
    /* ========================================================================== */
    // DataTables
    /* ========================================================================== */

    var output_objects = [];

    function textFormatter(data) {
        return data;
    }

    function byteSizeFormatter(data) {
        var bytes = parseInt(data);

        if (bytes < 1024) {
            return bytes + " bytes";
        } else if (bytes < 1024*1024) {
            return (bytes/1024).toFixed(1) + " kB";
        } else if (bytes < 1024*1024*1024) {
            return (bytes/1024/1024).toFixed(1) + " MB";
        }

        return data;
    }

    function timeFormatter(data) {
        const NOW = new Date();
        const times = [["second", 1], ["minute", 60], ["hour", 3600], ["day", 86400], ["week", 604800], ["month", 2592000], ["year", 31536000], ["", Infinity]]

        var date = Date.parse(data);

        var diff = Math.round((NOW - date) / 1000)
        for (var t = 0; t < times.length; t++) {
            if (diff < times[t][1]) {
                if (t == 0) {
                    return "Just now"
                } else {
                    diff = Math.round(diff / times[t - 1][1])
                    return diff + " " + times[t - 1][0] + (diff == 1?" ago":"s ago")
                }
            }
        }
    }

    function lambdaRuntimeFormatter(data) {
        var runtimeMappings = {
            'nodejs8.10': 'Node.js 8.10',
            'nodejs6.10': 'Node.js 6.10',
            'python3.6': 'Python 3.6',
            'python3.7': 'Python 3.7',
            'python2.7': 'Python 2.7',
            'ruby2.5': 'Ruby 2.5',
            'java8': 'Java 8',
            'go1.x': 'Go 1.x',
            'dotnetcore2.1': '.NET Core 2.1',
            'dotnetcore2.0': '.NET Core 2.0',
            'dotnetcore1.0': '.NET Core 1.0'
        }

        if (runtimeMappings[data]) {
            return runtimeMappings[data];
        }

        return data;
    }

    window.operateEvents = {
        'click .like': function (e, value, row, index) {
            alert('You click like action, row: ' + JSON.stringify(row));
        }
    };

    function operateFormatter(value, row, index) {
        return [
            '<a class="like" href="javascript:void(0)" title="Like">',
            '<i class="glyphicon glyphicon-heart"></i>',
            '</a>  ',
            '<a class="remove" href="javascript:void(0)" title="Remove">',
            '<i class="glyphicon glyphicon-remove"></i>',
            '</a>'
        ].join('');
    }

    function addSelectedRowsToTemplate(selector) {
        var ids = $.map($(selector).bootstrapTable('getSelections'), function (row) {
            output_objects.push({
                'id': row.f2id,
                'type': row.f2type,
                'data': row.f2data,
                'region': row.f2region
            });

            return row.f2id;
        });

        return ids;
    }

    $('#section-compute-lambda-functions-datatable').bootstrapTable({
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
        columns: [
            [
                {
                    field: 'state',
                    checkbox: true,
                    rowspan: 2,
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: 'Function Name',
                    field: 'name',
                    rowspan: 2,
                    align: 'center',
                    valign: 'middle',
                    sortable: true,
                    footerFormatter: textFormatter
                },
                {
                    title: 'Properties',
                    colspan: 4,
                    align: 'center'
                }
            ],
            [
                {
                    field: 'description',
                    title: 'Description',
                    sortable: true,
                    editable: true,
                    footerFormatter: textFormatter,
                    align: 'center'
                },
                {
                    field: 'runtime',
                    title: 'Runtime',
                    sortable: true,
                    align: 'center',
                    formatter: lambdaRuntimeFormatter,
                    footerFormatter: textFormatter
                },
                {
                    field: 'codesize',
                    title: 'Code Size',
                    sortable: true,
                    align: 'center',
                    formatter: byteSizeFormatter,
                    footerFormatter: textFormatter
                },
                {
                    field: 'lastmodified',
                    title: 'Last Modified',
                    sortable: true,
                    align: 'center',
                    formatter: timeFormatter,
                    footerFormatter: textFormatter
                }
            ]
        ]
    });

    $('#section-compute-lambda-aliases-datatable').bootstrapTable({
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
        columns: [
            [
                {
                    field: 'state',
                    checkbox: true,
                    rowspan: 2,
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: 'Alias Name',
                    field: 'name',
                    rowspan: 2,
                    align: 'center',
                    valign: 'middle',
                    sortable: true,
                    footerFormatter: textFormatter
                },
                {
                    title: 'Properties',
                    colspan: 4,
                    align: 'center'
                }
            ],
            [
                {
                    field: 'functionname',
                    title: 'Function Name',
                    sortable: true,
                    editable: true,
                    footerFormatter: textFormatter,
                    align: 'center'
                },
                {
                    field: 'functionversion',
                    title: 'Function Version',
                    sortable: true,
                    align: 'center',
                    footerFormatter: textFormatter
                },
                {
                    field: 'description',
                    title: 'Description',
                    sortable: true,
                    align: 'center',
                    footerFormatter: textFormatter
                }
            ]
        ]
    });

    $('#section-storage-s3-buckets-datatable').bootstrapTable({
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
        columns: [
            [
                {
                    field: 'state',
                    checkbox: true,
                    rowspan: 2,
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: 'Bucket Name',
                    field: 'name',
                    rowspan: 2,
                    align: 'center',
                    valign: 'middle',
                    sortable: true,
                    footerFormatter: textFormatter
                },
                {
                    title: 'Properties',
                    colspan: 4,
                    align: 'center'
                }
            ],
            [
                {
                    field: 'creationdate',
                    title: 'Creation Date',
                    sortable: true,
                    editable: true,
                    //formatter: statusFormatter,
                    footerFormatter: textFormatter,
                    align: 'center'
                }
            ]
        ]
    });

    $('.f2datatable').on('check.bs.table uncheck.bs.table ' +
        'check-all.bs.table uncheck-all.bs.table', function () {
            $('.additems').prop('disabled', !$(this).bootstrapTable('getSelections').length);
    });

    $('.additems').click(function () {
        var ids = addSelectedRowsToTemplate("#" + $(this).attr('data-datatable'));
        
        $('.additems').prop('disabled', true);
    });

    $('.f2toolbar').find('select').change(function () {
        $('.f2datatable').bootstrapTable('refreshOptions', {
            exportDataType: $(this).val()
        });
    });

    /* ========================================================================== */
    // Credentials
    /* ========================================================================== */

    $('#credentials-accesskey').on('change', () => {
        window.localStorage.setItem('credentials-accesskey', $('#credentials-accesskey').val().trim());
    });
    $('#credentials-secretkey').on('change', () => {
        window.localStorage.setItem('credentials-secretkey', $('#credentials-secretkey').val().trim());
    });
    $('#credentials-sessiontoken').on('change', () => {
        window.localStorage.setItem('credentials-sessiontoken', $('#credentials-sessiontoken').val().trim());
    });

    /* ========================================================================== */
    // Navigation
    /* ========================================================================== */

    function doNavigation() {
        if ($(location.hash).length) {
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

            window.scrollTo({ top: 0 });
        } else if (location.hash != "") {
            $.notify({
                icon: 'font-icon font-icon-warning',
                title: '<strong>Not Yet Implemented</strong>',
                message: 'This action is not available at this time.'
            },{
                type: 'warning'
            });
        }
    }

    window.addEventListener("hashchange", () => {
       doNavigation();
    }, false);

    doNavigation();

    /* ========================================================================== */
    // Outputs
    /* ========================================================================== */

    $("#generate-outputs").on('click', () => {
        regenerateOutputs();
        window.location.href = "#section-outputs-cloudformation";
    });

    function regenerateOutputs() {
        var mapped_outputs = performF2Mappings(output_objects);

        cfn_editor.getDoc().setValue(mapped_outputs['cfn']);
        setTimeout(function(){
            cfn_editor.refresh();
        }, 1);
    }

    /* ========================================================================== */
    // CodeMirror Init
    /* ========================================================================== */

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
    cfn_editor.getDoc().setValue("");
    setTimeout(function(){
        cfn_editor.refresh();
    }, 1);

    /* ========================================================================== */
    // AWS SDK Proxy for Extension (must be before Account Scan)
    /* ========================================================================== */

    var HELPER_EXTENSION_ID = "lmjgdikkekfmlhjaohllgnklmmmdpiad";

    class AWSConfigClass {
        static update(obj) {
            chrome.runtime.sendMessage(
                HELPER_EXTENSION_ID,
                {
                    action: 'configUpdate',
                    obj: obj
                }
            );
        }
    }

    class AWSCredentialsClass {
        constructor(...args) {
            this.credentials = args;

            return args;
        }
    }

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
                            chrome.runtime.sendMessage(
                                HELPER_EXTENSION_ID,
                                {
                                    action: 'serviceAction',
                                    args: this.serviceArgs,
                                    service: service,
                                    service_action: service_action,
                                    params: params
                                },
                                function(response) {
                                    if (!response.success) {
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

    /* ========================================================================== */
    // AWS Base Config (must be before Account Scan and after SDK Proxy)
    /* ========================================================================== */

    AWS.config.update({
        credentials: new AWS.Credentials(
            window.localStorage.getItem('credentials-accesskey'),
            window.localStorage.getItem('credentials-secretkey'),
            window.localStorage.getItem('credentials-sessiontoken')
        ),
        region: 'us-east-1'
    });

    /* ========================================================================== */
    // Account Scan
    /* ========================================================================== */

    $('#scan-account').on('click', () => {
        updateDatatableComputeLambda();
        updateDatatableStorageS3();
    });

    updateDatatableComputeLambda();
    updateDatatableStorageS3();

    /* ========================================================================== */
});
