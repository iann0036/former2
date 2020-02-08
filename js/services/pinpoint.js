/* ========================================================================== */
// Pinpoint
/* ========================================================================== */

sections.push({
    'category': 'Customer Engagement',
    'service': 'Pinpoint',
    'resourcetypes': {
        'Apps': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Application Settings': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Campaigns': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'appid',
                        title: 'Application ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'version',
                        title: 'Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Segments': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'appid',
                        title: 'Application ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'version',
                        title: 'Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'segmenttype',
                        title: 'Segment Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Event Streams': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Application ID',
                        field: 'appid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'destinationstreamarn',
                        title: 'Destination Stream ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'ADM Channels': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'appid',
                        title: 'Application ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'APNs Channels': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'appid',
                        title: 'Application ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'APNs Sandbox Channels': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'appid',
                        title: 'Application ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'APNs VoIP Channels': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'appid',
                        title: 'Application ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'APNs VoIP Sandbox Channels': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'appid',
                        title: 'Application ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Baidu Channels': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'appid',
                        title: 'Application ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Email Channels': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'appid',
                        title: 'Application ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'GCM Channels': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'appid',
                        title: 'Application ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'SMS Channels': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'appid',
                        title: 'Application ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Voice Channels': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'appid',
                        title: 'Application ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Email Configuration Sets': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                [
                    // nothing
                ]
            ]
        },
        'Email Configuration Set Event Destinations': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'matchingeventtypes',
                        title: 'Matching Event Types',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Email Dedicated IP Pools': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                [
                    // nothing
                ]
            ]
        },
        'Email Identities': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Email Templates': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'SMS Templates': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Push Templates': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
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
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableCustomerEngagementPinpoint() {
    blockUI('#section-customerengagement-pinpoint-apps-datatable');
    blockUI('#section-customerengagement-pinpoint-applicationsettings-datatable');
    blockUI('#section-customerengagement-pinpoint-campaigns-datatable');
    blockUI('#section-customerengagement-pinpoint-segments-datatable');
    blockUI('#section-customerengagement-pinpoint-eventstreams-datatable');
    blockUI('#section-customerengagement-pinpoint-admchannels-datatable');
    blockUI('#section-customerengagement-pinpoint-apnschannels-datatable');
    blockUI('#section-customerengagement-pinpoint-apnssandboxchannels-datatable');
    blockUI('#section-customerengagement-pinpoint-apnsvoipchannels-datatable');
    blockUI('#section-customerengagement-pinpoint-apnsvoipsandboxchannels-datatable');
    blockUI('#section-customerengagement-pinpoint-baiduchannels-datatable');
    blockUI('#section-customerengagement-pinpoint-emailchannels-datatable');
    blockUI('#section-customerengagement-pinpoint-gcmchannels-datatable');
    blockUI('#section-customerengagement-pinpoint-smschannels-datatable');
    blockUI('#section-customerengagement-pinpoint-voicechannels-datatable');
    blockUI('#section-customerengagement-pinpoint-emailconfigurationsets-datatable');
    blockUI('#section-customerengagement-pinpoint-emailconfigurationseteventdestinations-datatable');
    blockUI('#section-customerengagement-pinpoint-emaildedicatedippools-datatable');
    blockUI('#section-customerengagement-pinpoint-emailidentities-datatable');
    blockUI('#section-customerengagement-pinpoint-emailtemplates-datatable');
    blockUI('#section-customerengagement-pinpoint-smstemplates-datatable');
    blockUI('#section-customerengagement-pinpoint-pushtemplates-datatable');

    await sdkcall("Pinpoint", "getApps", {
        // no params
    }, true).then(async (data) => {
        $('#section-customerengagement-pinpoint-apps-datatable').bootstrapTable('removeAll');
        $('#section-customerengagement-pinpoint-applicationsettings-datatable').bootstrapTable('removeAll');
        $('#section-customerengagement-pinpoint-campaigns-datatable').bootstrapTable('removeAll');
        $('#section-customerengagement-pinpoint-segments-datatable').bootstrapTable('removeAll');
        $('#section-customerengagement-pinpoint-eventstreams-datatable').bootstrapTable('removeAll');
        $('#section-customerengagement-pinpoint-admchannels-datatable').bootstrapTable('removeAll');
        $('#section-customerengagement-pinpoint-apnschannels-datatable').bootstrapTable('removeAll');
        $('#section-customerengagement-pinpoint-apnssandboxchannels-datatable').bootstrapTable('removeAll');
        $('#section-customerengagement-pinpoint-apnsvoipchannels-datatable').bootstrapTable('removeAll');
        $('#section-customerengagement-pinpoint-apnsvoipsandboxchannels-datatable').bootstrapTable('removeAll');
        $('#section-customerengagement-pinpoint-baiduchannels-datatable').bootstrapTable('removeAll');
        $('#section-customerengagement-pinpoint-emailchannels-datatable').bootstrapTable('removeAll');
        $('#section-customerengagement-pinpoint-gcmchannels-datatable').bootstrapTable('removeAll');
        $('#section-customerengagement-pinpoint-smschannels-datatable').bootstrapTable('removeAll');
        $('#section-customerengagement-pinpoint-voicechannels-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ApplicationsResponse.Item.map(app => {
            $('#section-customerengagement-pinpoint-apps-datatable').bootstrapTable('append', [{
                f2id: app.Arn,
                f2type: 'pinpoint.app',
                f2data: app,
                f2region: region,
                name: app.Name,
                id: app.Id
            }]);

            return Promise.all([
                sdkcall("Pinpoint", "getConfigurationSet", {
                    ApplicationId: app.Id
                }, false).then(async (data) => {
                    $('#section-customerengagement-pinpoint-applicationsettings-datatable').bootstrapTable('append', [{
                        f2id: app.Arn + " Settings",
                        f2type: 'pinpoint.applicationsettings',
                        f2data: data.ApplicationSettingsResource,
                        f2region: region,
                        name: app.Name,
                        id: app.Id
                    }]);
                }).catch(() => { }),
                sdkcall("Pinpoint", "getCampaigns", {
                    ApplicationId: app.Id
                }, false).then(async (data) => {
                    if (data.CampaignsResponse && data.CampaignsResponse.Item) {
                        data.CampaignsResponse.Item.forEach(campaign => {
                            $('#section-customerengagement-pinpoint-campaigns-datatable').bootstrapTable('append', [{
                                f2id: campaign.Arn,
                                f2type: 'pinpoint.campaign',
                                f2data: campaign,
                                f2region: region,
                                name: campaign.Name,
                                appid: app.Id,
                                description: campaign.Description,
                                id: campaign.Id,
                                version: campaign.Version
                            }]);
                        });
                    }
                }).catch(() => { }),
                sdkcall("Pinpoint", "getSegments", {
                    ApplicationId: app.Id
                }, false).then(async (data) => {
                    if (data.SegmentsResponse && data.SegmentsResponse.Item) {
                        data.SegmentsResponse.Item.forEach(segment => {
                            $('#section-customerengagement-pinpoint-segments-datatable').bootstrapTable('append', [{
                                f2id: segment.Arn,
                                f2type: 'pinpoint.segment',
                                f2data: segment,
                                f2region: region,
                                name: segment.Name,
                                appid: app.Id,
                                id: segment.Id,
                                version: segment.Version,
                                segmenttype: segment.SegmentType
                            }]);
                        });
                    }
                }).catch(() => { }),
                sdkcall("Pinpoint", "getEventStream", {
                    ApplicationId: app.Id
                }, false).then(async (data) => {
                    $('#section-customerengagement-pinpoint-eventstreams-datatable').bootstrapTable('append', [{
                        f2id: data.EventStream.ApplicationId + " Event Stream",
                        f2type: 'pinpoint.eventstream',
                        f2data: data.EventStream,
                        f2region: region,
                        appid: data.EventStream.ApplicationId,
                        destinationstreamarn: data.EventStream.DestinationStreamArn
                    }]);
                }).catch(() => { }),
                sdkcall("Pinpoint", "getAdmChannel", {
                    ApplicationId: app.Id
                }, false).then(async (data) => {
                    $('#section-customerengagement-pinpoint-admchannels-datatable').bootstrapTable('append', [{
                        f2id: data.ADMChannelResponse.ApplicationId + " ADM Channel",
                        f2type: 'pinpoint.admchannel',
                        f2data: data.ADMChannelResponse,
                        f2region: region,
                        appid: data.ADMChannelResponse.ApplicationId,
                        id: data.ADMChannelResponse.Id,
                        enabled: data.ADMChannelResponse.Enabled,
                        creationtime: data.ADMChannelResponse.CreationDate
                    }]);
                }).catch(() => { }),
                sdkcall("Pinpoint", "getApnsChannel", {
                    ApplicationId: app.Id
                }, false).then(async (data) => {
                    $('#section-customerengagement-pinpoint-apnschannels-datatable').bootstrapTable('append', [{
                        f2id: data.APNSChannelResponse.ApplicationId + " APNs Channel",
                        f2type: 'pinpoint.apnschannel',
                        f2data: data.APNSChannelResponse,
                        f2region: region,
                        appid: data.APNSChannelResponse.ApplicationId,
                        id: data.APNSChannelResponse.Id,
                        enabled: data.APNSChannelResponse.Enabled,
                        creationtime: data.APNSChannelResponse.CreationDate
                    }]);
                }).catch(() => { }),
                sdkcall("Pinpoint", "getApnsSandboxChannel", {
                    ApplicationId: app.Id
                }, false).then(async (data) => {
                    $('#section-customerengagement-pinpoint-apnssandboxchannels-datatable').bootstrapTable('append', [{
                        f2id: data.APNSSandboxChannelResponse.ApplicationId + " APNs Sandbox Channel",
                        f2type: 'pinpoint.apnssandboxchannel',
                        f2data: data.APNSSandboxChannelResponse,
                        f2region: region,
                        appid: data.APNSSandboxChannelResponse.ApplicationId,
                        id: data.APNSSandboxChannelResponse.Id,
                        enabled: data.APNSSandboxChannelResponse.Enabled,
                        creationtime: data.APNSSandboxChannelResponse.CreationDate
                    }]);
                }).catch(() => { }),
                sdkcall("Pinpoint", "getApnsVoipChannel", {
                    ApplicationId: app.Id
                }, false).then(async (data) => {
                    $('#section-customerengagement-pinpoint-apnsvoipchannels-datatable').bootstrapTable('append', [{
                        f2id: data.APNSVoipChannelResponse.ApplicationId + " APNs VoIP Channel",
                        f2type: 'pinpoint.apnsvoipchannel',
                        f2data: data.APNSVoipChannelResponse,
                        f2region: region,
                        appid: data.APNSVoipChannelResponse.ApplicationId,
                        id: data.APNSVoipChannelResponse.Id,
                        enabled: data.APNSVoipChannelResponse.Enabled,
                        creationtime: data.APNSVoipChannelResponse.CreationDate
                    }]);
                }).catch(() => { }),
                sdkcall("Pinpoint", "getApnsVoipSandboxChannel", {
                    ApplicationId: app.Id
                }, false).then(async (data) => {
                    $('#section-customerengagement-pinpoint-apnsvoipsandboxchannels-datatable').bootstrapTable('append', [{
                        f2id: data.APNSVoipSandboxChannelResponse.ApplicationId + " APNs VoIP Sandbox Channel",
                        f2type: 'pinpoint.apnsvoipsandboxchannel',
                        f2data: data.APNSVoipSandboxChannelResponse,
                        f2region: region,
                        appid: data.APNSVoipSandboxChannelResponse.ApplicationId,
                        id: data.APNSVoipSandboxChannelResponse.Id,
                        enabled: data.APNSVoipSandboxChannelResponse.Enabled,
                        creationtime: data.APNSVoipSandboxChannelResponse.CreationDate
                    }]);
                }).catch(() => { }),
                sdkcall("Pinpoint", "getBaiduChannel", {
                    ApplicationId: app.Id
                }, false).then(async (data) => {
                    $('#section-customerengagement-pinpoint-baiduchannels-datatable').bootstrapTable('append', [{
                        f2id: data.BaiduChannelResponse.ApplicationId + " Baidu Channel",
                        f2type: 'pinpoint.baiduchannel',
                        f2data: data.BaiduChannelResponse,
                        f2region: region,
                        appid: data.BaiduChannelResponse.ApplicationId,
                        id: data.BaiduChannelResponse.Id,
                        enabled: data.BaiduChannelResponse.Enabled,
                        creationtime: data.BaiduChannelResponse.CreationDate
                    }]);
                }).catch(() => { }),
                sdkcall("Pinpoint", "getEmailChannel", {
                    ApplicationId: app.Id
                }, false).then(async (data) => {
                    $('#section-customerengagement-pinpoint-emailchannels-datatable').bootstrapTable('append', [{
                        f2id: data.EmailChannelResponse.ApplicationId + " Email Channel",
                        f2type: 'pinpoint.emailchannel',
                        f2data: data.EmailChannelResponse,
                        f2region: region,
                        appid: data.EmailChannelResponse.ApplicationId,
                        id: data.EmailChannelResponse.Id,
                        enabled: data.EmailChannelResponse.Enabled,
                        creationtime: data.EmailChannelResponse.CreationDate
                    }]);
                }).catch(() => { }),
                sdkcall("Pinpoint", "getGcmChannel", {
                    ApplicationId: app.Id
                }, false).then(async (data) => {
                    $('#section-customerengagement-pinpoint-gcmchannels-datatable').bootstrapTable('append', [{
                        f2id: data.GCMChannelResponse.ApplicationId + " GCM Channel",
                        f2type: 'pinpoint.gcmchannel',
                        f2data: data.GCMChannelResponse,
                        f2region: region,
                        appid: data.GCMChannelResponse.ApplicationId,
                        id: data.GCMChannelResponse.Id,
                        enabled: data.GCMChannelResponse.Enabled,
                        creationtime: data.GCMChannelResponse.CreationDate
                    }]);
                }).catch(() => { }),
                sdkcall("Pinpoint", "getSmsChannel", {
                    ApplicationId: app.Id
                }, false).then(async (data) => {
                    $('#section-customerengagement-pinpoint-smschannels-datatable').bootstrapTable('append', [{
                        f2id: data.SMSChannelResponse.ApplicationId + " SMS Channel",
                        f2type: 'pinpoint.smschannel',
                        f2data: data.SMSChannelResponse,
                        f2region: region,
                        appid: data.SMSChannelResponse.ApplicationId,
                        id: data.SMSChannelResponse.Id,
                        enabled: data.SMSChannelResponse.Enabled,
                        creationtime: data.SMSChannelResponse.CreationDate
                    }]);
                }).catch(() => { }),
                sdkcall("Pinpoint", "getVoiceChannel", {
                    ApplicationId: app.Id
                }, false).then(async (data) => {
                    $('#section-customerengagement-pinpoint-voicechannels-datatable').bootstrapTable('append', [{
                        f2id: data.VoiceChannelResponse.ApplicationId + " Voice Channel",
                        f2type: 'pinpoint.voicechannel',
                        f2data: data.VoiceChannelResponse,
                        f2region: region,
                        appid: data.VoiceChannelResponse.ApplicationId,
                        id: data.VoiceChannelResponse.Id,
                        enabled: data.VoiceChannelResponse.Enabled,
                        creationtime: data.VoiceChannelResponse.CreationDate
                    }]);
                }).catch(() => { })
            ]);
        }));

        unblockUI('#section-customerengagement-pinpoint-apps-datatable');
        unblockUI('#section-customerengagement-pinpoint-applicationsettings-datatable');
        unblockUI('#section-customerengagement-pinpoint-campaigns-datatable');
        unblockUI('#section-customerengagement-pinpoint-segments-datatable');
        unblockUI('#section-customerengagement-pinpoint-eventstreams-datatable');
        unblockUI('#section-customerengagement-pinpoint-admchannels-datatable');
        unblockUI('#section-customerengagement-pinpoint-apnschannels-datatable');
        unblockUI('#section-customerengagement-pinpoint-apnssandboxchannels-datatable');
        unblockUI('#section-customerengagement-pinpoint-apnsvoipchannels-datatable');
        unblockUI('#section-customerengagement-pinpoint-apnsvoipsandboxchannels-datatable');
        unblockUI('#section-customerengagement-pinpoint-baiduchannels-datatable');
        unblockUI('#section-customerengagement-pinpoint-emailchannels-datatable');
        unblockUI('#section-customerengagement-pinpoint-gcmchannels-datatable');
        unblockUI('#section-customerengagement-pinpoint-smschannels-datatable');
        unblockUI('#section-customerengagement-pinpoint-voicechannels-datatable');
    });

    await sdkcall("PinpointEmail", "listConfigurationSets", {
        // no params
    }, true).then(async (data) => {
        $('#section-customerengagement-pinpoint-emailconfigurationsets-datatable').bootstrapTable('removeAll');
        $('#section-customerengagement-pinpoint-emailconfigurationseteventdestinations-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ConfigurationSets.map(configurationset => {
            return sdkcall("PinpointEmail", "getConfigurationSet", {
                ConfigurationSetName: configurationset
            }, true).then(async (data) => {
                $('#section-customerengagement-pinpoint-emailconfigurationsets-datatable').bootstrapTable('append', [{
                    f2id: data.ConfigurationSetName,
                    f2type: 'pinpoint.emailconfigurationset',
                    f2data: data,
                    f2region: region,
                    name: data.ConfigurationSetName
                }]);

                await sdkcall("PinpointEmail", "getConfigurationSetEventDestinations", {
                    ConfigurationSetName: data.ConfigurationSetName
                }, true).then((data) => {
                    data.EventDestinations.forEach(eventdestination => {
                        eventdestination['ConfigurationSetName'] = configurationset;

                        $('#section-customerengagement-pinpoint-emailconfigurationseteventdestinations-datatable').bootstrapTable('append', [{
                            f2id: eventdestination.Name,
                            f2type: 'pinpoint.emailconfigurationseteventdestination',
                            f2data: eventdestination,
                            f2region: region,
                            name: eventdestination.Name,
                            enabled: eventdestination.Enabled,
                            matchingeventtypes: eventdestination.MatchingEventTypes.join(", ")
                        }]);
                    });
                });
            });
        }));

        unblockUI('#section-customerengagement-pinpoint-emailconfigurationsets-datatable');
        unblockUI('#section-customerengagement-pinpoint-emailconfigurationseteventdestinations-datatable');
    });

    await sdkcall("PinpointEmail", "listDedicatedIpPools", {
        // no params
    }, true).then(async (data) => {
        $('#section-customerengagement-pinpoint-emaildedicatedippools-datatable').bootstrapTable('removeAll');

        data.DedicatedIpPools.forEach(dedicatedippool => {
            $('#section-customerengagement-pinpoint-emaildedicatedippools-datatable').bootstrapTable('append', [{
                f2id: dedicatedippool,
                f2type: 'pinpoint.emaildedicatedippool',
                f2data: {
                    'PoolName': dedicatedippool
                },
                f2region: region,
                name: dedicatedippool
            }]);
        });

        unblockUI('#section-customerengagement-pinpoint-emaildedicatedippools-datatable');
    });

    await sdkcall("PinpointEmail", "listEmailIdentities", {
        // no params
    }, true).then(async (data) => {
        $('#section-customerengagement-pinpoint-emailidentities-datatable').bootstrapTable('removeAll');

        await Promise.all(data.EmailIdentities.map(emailidentity => {
            return sdkcall("PinpointEmail", "getEmailIdentity", {
                EmailIdentity: emailidentity.IdentityName
            }, true).then(async (data) => {
                data['Name'] = emailidentity.IdentityName;

                $('#section-customerengagement-pinpoint-emailidentities-datatable').bootstrapTable('append', [{
                    f2id: emailidentity.IdentityName,
                    f2type: 'pinpoint.emailidentity',
                    f2data: data,
                    f2region: region,
                    name: emailidentity.IdentityName,
                    type: data.IdentityType
                }]);
            });
        }));

        unblockUI('#section-customerengagement-pinpoint-emailidentities-datatable');
    });

    await sdkcall("Pinpoint", "listTemplates", {
        // no params
    }, true).then(async (data) => {
        $('#section-customerengagement-pinpoint-emailtemplates-datatable').bootstrapTable('removeAll');
        $('#section-customerengagement-pinpoint-smstemplates-datatable').bootstrapTable('removeAll');
        $('#section-customerengagement-pinpoint-pushtemplates-datatable').bootstrapTable('removeAll');

        await Promise.all(data.TemplatesResponse.Item.map(template => {
            if (template.TemplateType == "EMAIL") {
                return sdkcall("Pinpoint", "getEmailTemplate", {
                    TemplateName: template.TemplateName
                }, true).then(async (data) => {
                    $('#section-customerengagement-pinpoint-emailtemplates-datatable').bootstrapTable('append', [{
                        f2id: data.EmailTemplateResponse.Arn,
                        f2type: 'pinpoint.emailtemplate',
                        f2data: data.EmailTemplateResponse,
                        f2region: region,
                        name: data.EmailTemplateResponse.TemplateName,
                        creationtime: data.EmailTemplateResponse.CreationDate
                    }]);
                });
            } else if (template.TemplateType == "SMS") {
                return sdkcall("Pinpoint", "getSmsTemplate", {
                    TemplateName: template.TemplateName
                }, true).then(async (data) => {
                    $('#section-customerengagement-pinpoint-smstemplates-datatable').bootstrapTable('append', [{
                        f2id: data.SMSTemplateResponse.Arn,
                        f2type: 'pinpoint.smstemplate',
                        f2data: data.SMSTemplateResponse,
                        f2region: region,
                        name: data.SMSTemplateResponse.TemplateName,
                        creationtime: data.SMSTemplateResponse.CreationDate
                    }]);
                });
            } else if (template.TemplateType == "PUSH") {
                return sdkcall("Pinpoint", "getPushTemplate", {
                    TemplateName: template.TemplateName
                }, true).then(async (data) => {
                    $('#section-customerengagement-pinpoint-pushtemplates-datatable').bootstrapTable('append', [{
                        f2id: data.PushNotificationTemplateResponse.Arn,
                        f2type: 'pinpoint.pushtemplate',
                        f2data: data.PushNotificationTemplateResponse,
                        f2region: region,
                        name: data.PushNotificationTemplateResponse.TemplateName,
                        creationtime: data.PushNotificationTemplateResponse.CreationDate
                    }]);
                });
            }
        }));

        unblockUI('#section-customerengagement-pinpoint-emailtemplates-datatable');
        unblockUI('#section-customerengagement-pinpoint-smstemplates-datatable');
        unblockUI('#section-customerengagement-pinpoint-pushtemplates-datatable');
    });
}
