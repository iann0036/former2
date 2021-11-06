/* ========================================================================== */
// Pinpoint
/* ========================================================================== */

sections.push({
    'category': 'Business Applications',
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
        },
        'In App Templates': {
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

async function updateDatatableBusinessApplicationsPinpoint() {
    blockUI('#section-businessapplications-pinpoint-apps-datatable');
    blockUI('#section-businessapplications-pinpoint-applicationsettings-datatable');
    blockUI('#section-businessapplications-pinpoint-campaigns-datatable');
    blockUI('#section-businessapplications-pinpoint-segments-datatable');
    blockUI('#section-businessapplications-pinpoint-eventstreams-datatable');
    blockUI('#section-businessapplications-pinpoint-admchannels-datatable');
    blockUI('#section-businessapplications-pinpoint-apnschannels-datatable');
    blockUI('#section-businessapplications-pinpoint-apnssandboxchannels-datatable');
    blockUI('#section-businessapplications-pinpoint-apnsvoipchannels-datatable');
    blockUI('#section-businessapplications-pinpoint-apnsvoipsandboxchannels-datatable');
    blockUI('#section-businessapplications-pinpoint-baiduchannels-datatable');
    blockUI('#section-businessapplications-pinpoint-emailchannels-datatable');
    blockUI('#section-businessapplications-pinpoint-gcmchannels-datatable');
    blockUI('#section-businessapplications-pinpoint-smschannels-datatable');
    blockUI('#section-businessapplications-pinpoint-voicechannels-datatable');
    blockUI('#section-businessapplications-pinpoint-emailconfigurationsets-datatable');
    blockUI('#section-businessapplications-pinpoint-emailconfigurationseteventdestinations-datatable');
    blockUI('#section-businessapplications-pinpoint-emaildedicatedippools-datatable');
    blockUI('#section-businessapplications-pinpoint-emailidentities-datatable');
    blockUI('#section-businessapplications-pinpoint-emailtemplates-datatable');
    blockUI('#section-businessapplications-pinpoint-smstemplates-datatable');
    blockUI('#section-businessapplications-pinpoint-pushtemplates-datatable');
    blockUI('#section-businessapplications-pinpoint-inapptemplates-datatable');

    await sdkcall("Pinpoint", "getApps", {
        // no params
    }, true).then(async (data) => {
        $('#section-businessapplications-pinpoint-apps-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-applicationsettings-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-campaigns-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-segments-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-eventstreams-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-admchannels-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-apnschannels-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-apnssandboxchannels-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-apnsvoipchannels-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-apnsvoipsandboxchannels-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-baiduchannels-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-emailchannels-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-gcmchannels-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-smschannels-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-voicechannels-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ApplicationsResponse.Item.map(app => {
            $('#section-businessapplications-pinpoint-apps-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-businessapplications-pinpoint-applicationsettings-datatable').deferredBootstrapTable('append', [{
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
                            $('#section-businessapplications-pinpoint-campaigns-datatable').deferredBootstrapTable('append', [{
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
                            $('#section-businessapplications-pinpoint-segments-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-businessapplications-pinpoint-eventstreams-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-businessapplications-pinpoint-admchannels-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-businessapplications-pinpoint-apnschannels-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-businessapplications-pinpoint-apnssandboxchannels-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-businessapplications-pinpoint-apnsvoipchannels-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-businessapplications-pinpoint-apnsvoipsandboxchannels-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-businessapplications-pinpoint-baiduchannels-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-businessapplications-pinpoint-emailchannels-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-businessapplications-pinpoint-gcmchannels-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-businessapplications-pinpoint-smschannels-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-businessapplications-pinpoint-voicechannels-datatable').deferredBootstrapTable('append', [{
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

        unblockUI('#section-businessapplications-pinpoint-apps-datatable');
        unblockUI('#section-businessapplications-pinpoint-applicationsettings-datatable');
        unblockUI('#section-businessapplications-pinpoint-campaigns-datatable');
        unblockUI('#section-businessapplications-pinpoint-segments-datatable');
        unblockUI('#section-businessapplications-pinpoint-eventstreams-datatable');
        unblockUI('#section-businessapplications-pinpoint-admchannels-datatable');
        unblockUI('#section-businessapplications-pinpoint-apnschannels-datatable');
        unblockUI('#section-businessapplications-pinpoint-apnssandboxchannels-datatable');
        unblockUI('#section-businessapplications-pinpoint-apnsvoipchannels-datatable');
        unblockUI('#section-businessapplications-pinpoint-apnsvoipsandboxchannels-datatable');
        unblockUI('#section-businessapplications-pinpoint-baiduchannels-datatable');
        unblockUI('#section-businessapplications-pinpoint-emailchannels-datatable');
        unblockUI('#section-businessapplications-pinpoint-gcmchannels-datatable');
        unblockUI('#section-businessapplications-pinpoint-smschannels-datatable');
        unblockUI('#section-businessapplications-pinpoint-voicechannels-datatable');
    });

    await sdkcall("PinpointEmail", "listConfigurationSets", {
        // no params
    }, true).then(async (data) => {
        $('#section-businessapplications-pinpoint-emailconfigurationsets-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-emailconfigurationseteventdestinations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ConfigurationSets.map(configurationset => {
            return sdkcall("PinpointEmail", "getConfigurationSet", {
                ConfigurationSetName: configurationset
            }, true).then(async (data) => {
                $('#section-businessapplications-pinpoint-emailconfigurationsets-datatable').deferredBootstrapTable('append', [{
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

                        $('#section-businessapplications-pinpoint-emailconfigurationseteventdestinations-datatable').deferredBootstrapTable('append', [{
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

        unblockUI('#section-businessapplications-pinpoint-emailconfigurationsets-datatable');
        unblockUI('#section-businessapplications-pinpoint-emailconfigurationseteventdestinations-datatable');
    });

    await sdkcall("PinpointEmail", "listDedicatedIpPools", {
        // no params
    }, true).then(async (data) => {
        $('#section-businessapplications-pinpoint-emaildedicatedippools-datatable').deferredBootstrapTable('removeAll');

        data.DedicatedIpPools.forEach(dedicatedippool => {
            $('#section-businessapplications-pinpoint-emaildedicatedippools-datatable').deferredBootstrapTable('append', [{
                f2id: dedicatedippool,
                f2type: 'pinpoint.emaildedicatedippool',
                f2data: {
                    'PoolName': dedicatedippool
                },
                f2region: region,
                name: dedicatedippool
            }]);
        });

        unblockUI('#section-businessapplications-pinpoint-emaildedicatedippools-datatable');
    });

    await sdkcall("PinpointEmail", "listEmailIdentities", {
        // no params
    }, true).then(async (data) => {
        $('#section-businessapplications-pinpoint-emailidentities-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.EmailIdentities.map(emailidentity => {
            return sdkcall("PinpointEmail", "getEmailIdentity", {
                EmailIdentity: emailidentity.IdentityName
            }, true).then(async (data) => {
                data['Name'] = emailidentity.IdentityName;

                $('#section-businessapplications-pinpoint-emailidentities-datatable').deferredBootstrapTable('append', [{
                    f2id: emailidentity.IdentityName,
                    f2type: 'pinpoint.emailidentity',
                    f2data: data,
                    f2region: region,
                    name: emailidentity.IdentityName,
                    type: data.IdentityType
                }]);
            });
        }));

        unblockUI('#section-businessapplications-pinpoint-emailidentities-datatable');
    });

    await sdkcall("Pinpoint", "listTemplates", {
        // no params
    }, true).then(async (data) => {
        $('#section-businessapplications-pinpoint-emailtemplates-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-smstemplates-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-pushtemplates-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-pinpoint-inapptemplates-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.TemplatesResponse.Item.map(template => {
            if (template.TemplateType == "EMAIL") {
                return sdkcall("Pinpoint", "getEmailTemplate", {
                    TemplateName: template.TemplateName
                }, true).then(async (data) => {
                    $('#section-businessapplications-pinpoint-emailtemplates-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-businessapplications-pinpoint-smstemplates-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-businessapplications-pinpoint-pushtemplates-datatable').deferredBootstrapTable('append', [{
                        f2id: data.PushNotificationTemplateResponse.Arn,
                        f2type: 'pinpoint.pushtemplate',
                        f2data: data.PushNotificationTemplateResponse,
                        f2region: region,
                        name: data.PushNotificationTemplateResponse.TemplateName,
                        creationtime: data.PushNotificationTemplateResponse.CreationDate
                    }]);
                });
            } else if (template.TemplateType == "INAPP") {
                return sdkcall("Pinpoint", "getInAppTemplate", {
                    TemplateName: template.TemplateName
                }, true).then(async (data) => {
                    $('#section-businessapplications-pinpoint-inapptemplates-datatable').deferredBootstrapTable('append', [{
                        f2id: data.InAppTemplateResponse.Arn,
                        f2type: 'pinpoint.inapptemplate',
                        f2data: data.InAppTemplateResponse,
                        f2region: region,
                        name: data.InAppTemplateResponse.TemplateName,
                        creationtime: data.InAppTemplateResponse.CreationDate
                    }]);
                });
            }
        }));

        unblockUI('#section-businessapplications-pinpoint-emailtemplates-datatable');
        unblockUI('#section-businessapplications-pinpoint-smstemplates-datatable');
        unblockUI('#section-businessapplications-pinpoint-pushtemplates-datatable');
        unblockUI('#section-businessapplications-pinpoint-inapptemplates-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "pinpoint.emailconfigurationset") {
        reqParams.cfn['Name'] = obj.data.ConfigurationSetName;
        if (obj.data.TrackingOptions) {
            reqParams.cfn['TrackingOptions'] = {
                'CustomRedirectDomain': obj.data.TrackingOptions.CustomRedirectDomain
            };
        }
        if (obj.data.DeliveryOptions) {
            reqParams.cfn['DeliveryOptions'] = {
                'SendingPoolName': obj.data.DeliveryOptions.SendingPoolName
            };
        }
        if (obj.data.ReputationOptions) {
            reqParams.cfn['ReputationOptions'] = {
                'ReputationMetricsEnabled': obj.data.ReputationOptions.ReputationMetricsEnabled
            };
        }
        if (obj.data.SendingOptions) {
            reqParams.cfn['SendingOptions'] = {
                'SendingEnabled': obj.data.SendingOptions.SendingEnabled
            };
        }

        /*
        TODO:
        Tags: 
            - Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::PinpointEmail::ConfigurationSet'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::PinpointEmail::ConfigurationSet',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.emailconfigurationseteventdestination") {
        reqParams.cfn['ConfigurationSetName'] = obj.data.ConfigurationSetName;
        reqParams.cfn['EventDestinationName'] = obj.data.Name;
        if (obj.data.MatchingEventTypes && obj.data.MatchingEventTypes.length > 0) {
            var cloudwatchdestination = null;
            if (obj.data.CloudWatchDestination) {
                var dimensionconfigurations = [];
                obj.data.CloudWatchDestination.DimensionConfigurations.forEach(dimensionconfiguration => {
                    dimensionconfigurations.push({
                        'DimensionName': dimensionconfiguration.DimensionName,
                        'DimensionValueSource': dimensionconfiguration.DimensionValueSource,
                        'DefaultDimensionValue': dimensionconfiguration.DefaultDimensionValue
                    });
                });
                cloudwatchdestination = {
                    'DimensionConfigurations': dimensionconfigurations
                };
            }
            var kinesisfirehosedestination = null;
            if (obj.data.KinesisFirehoseDestination) {
                kinesisfirehosedestination = {
                    'IamRoleArn': obj.data.KinesisFirehoseDestination.IamRoleArn,
                    'DeliveryStreamArn': obj.data.KinesisFirehoseDestination.DeliveryStreamArn
                };
            }
            var pinpointdestination = null;
            if (obj.data.PinpointDestination) {
                pinpointdestination = {
                    'ApplicationArn': obj.data.PinpointDestination.ApplicationArn
                };
            }
            var snsdestination = null;
            if (obj.data.SnsDestination) {
                snsdestination = {
                    'TopicArn': obj.data.SnsDestination.TopicArn
                };
            }
            reqParams.cfn['EventDestination'] = {
                'CloudWatchDestination': cloudwatchdestination,
                'Enabled': obj.data.Enabled,
                'KinesisFirehoseDestination': kinesisfirehosedestination,
                'MatchingEventTypes': obj.data.MatchingEventTypes,
                'PinpointDestination': pinpointdestination,
                'SnsDestination': snsdestination
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::PinpointEmail::ConfigurationSetEventDestination'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::PinpointEmail::ConfigurationSetEventDestination',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.emaildedicatedippool") {
        reqParams.cfn['PoolName'] = obj.data.PoolName;

        /*
        TODO:
        Tags: 
            - Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::PinpointEmail::DedicatedIpPool'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::PinpointEmail::DedicatedIpPool',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.emailidentity") {
        reqParams.cfn['Name'] = obj.data.Name;
        if (obj.data.DkimAttributes) {
            reqParams.cfn['DkimSigningEnabled'] = obj.data.DkimAttributes.SigningEnabled;
        }
        reqParams.cfn['FeedbackForwardingEnabled'] = obj.data.FeedbackForwardingStatus;
        if (obj.data.MailFromAttributes) {
            reqParams.cfn['MailFromAttributes'] = {
                'BehaviorOnMxFailure': obj.data.MailFromAttributes.BehaviorOnMxFailure,
                'MailFromDomain': obj.data.MailFromAttributes.MailFromDomain
            };
        }

        /*
        TODO:
        Tags: 
            - Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::PinpointEmail::Identity'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::PinpointEmail::Identity',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.app") {
        reqParams.cfn['Name'] = obj.data.Name;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::App'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::App',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.admchannel") {
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        reqParams.cfn['Enabled'] = obj.data.Enabled;
        reqParams.cfn['ClientSecret'] = 'REPLACEME';

        /*
        TODO:
        ClientId
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::ADMChannel'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::ADMChannel',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.apnschannel") {
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        reqParams.cfn['Enabled'] = obj.data.Enabled;
        reqParams.cfn['DefaultAuthenticationMethod'] = obj.data.DefaultAuthenticationMethod;

        /*
        TODO:
        BundleId: String
        Certificate: String
        PrivateKey: String
        TeamId: String
        TokenKey: String
        TokenKeyId: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::APNSChannel'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::APNSChannel',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.apnssandboxchannel") {
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        reqParams.cfn['Enabled'] = obj.data.Enabled;
        reqParams.cfn['DefaultAuthenticationMethod'] = obj.data.DefaultAuthenticationMethod;

        /*
        TODO:
        BundleId: String
        Certificate: String
        PrivateKey: String
        TeamId: String
        TokenKey: String
        TokenKeyId: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::APNSSandboxChannel'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::APNSSandboxChannel',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.apnsvoipchannel") {
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        reqParams.cfn['Enabled'] = obj.data.Enabled;
        reqParams.cfn['DefaultAuthenticationMethod'] = obj.data.DefaultAuthenticationMethod;

        /*
        TODO:
        BundleId: String
        Certificate: String
        PrivateKey: String
        TeamId: String
        TokenKey: String
        TokenKeyId: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::APNSVoipChannel'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::APNSVoipChannel',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.apnsvoipsandboxchannel") {
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        reqParams.cfn['Enabled'] = obj.data.Enabled;
        reqParams.cfn['DefaultAuthenticationMethod'] = obj.data.DefaultAuthenticationMethod;

        /*
        TODO:
        BundleId: String
        Certificate: String
        PrivateKey: String
        TeamId: String
        TokenKey: String
        TokenKeyId: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::APNSVoipSandboxChannel'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::APNSVoipSandboxChannel',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.baiduchannel") {
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        reqParams.cfn['Enabled'] = obj.data.Enabled;
        reqParams.cfn['ApiKey'] = 'REPLACEME';
        reqParams.cfn['SecretKey'] = 'REPLACEME';

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::BaiduChannel'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::BaiduChannel',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.emailchannel") {
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        reqParams.tf['application_id'] = obj.data.ApplicationId;
        reqParams.cfn['Enabled'] = obj.data.Enabled;
        reqParams.tf['enabled'] = obj.data.Enabled;
        reqParams.cfn['FromAddress'] = obj.data.FromAddress;
        reqParams.tf['from_address'] = obj.data.FromAddress;
        reqParams.cfn['Identity'] = obj.data.Identity;
        reqParams.tf['identity'] = obj.data.Identity;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.tf['role_arn'] = obj.data.RoleArn;
        reqParams.cfn['ConfigurationSet'] = obj.data.ConfigurationSet;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::EmailChannel'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::EmailChannel',
            'terraformType': 'aws_pinpoint_email_channel',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.gcmchannel") {
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        reqParams.cfn['Enabled'] = obj.data.Enabled;

        /*
        TODO:
        ApiKey: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::GCMChannel'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::GCMChannel',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.smschannel") {
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        reqParams.tf['application_id'] = obj.data.ApplicationId;
        reqParams.cfn['Enabled'] = obj.data.Enabled;
        reqParams.tf['enabled'] = obj.data.Enabled;
        reqParams.cfn['SenderId'] = obj.data.SenderId;
        reqParams.tf['sender_id'] = obj.data.SenderId;
        reqParams.cfn['ShortCode'] = obj.data.ShortCode;
        reqParams.tf['short_code'] = obj.data.ShortCode;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::SMSChannel'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::SMSChannel',
            'terraformType': 'aws_pinpoint_sms_channel',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.voicechannel") {
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        reqParams.cfn['Enabled'] = obj.data.Enabled;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::VoiceChannel'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::VoiceChannel',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.eventstream") {
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        reqParams.tf['application_id'] = obj.data.ApplicationId;
        reqParams.cfn['DestinationStreamArn'] = obj.data.DestinationStreamArn;
        reqParams.tf['destination_stream_arn'] = obj.data.DestinationStreamArn;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.tf['role_arn'] = obj.data.RoleArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::EventStream'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::EventStream',
            'terraformType': 'aws_pinpoint_event_stream',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.applicationsettings") {
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        if (obj.data.CampaignHook) {
            reqParams.cfn['CampaignHook'] = {
                'LambdaFunctionName': obj.data.CampaignHook.LambdaFunctionName,
                'Mode': obj.data.CampaignHook.Mode,
                'WebUrl': obj.data.CampaignHook.WebUrl
            };
        }
        if (obj.data.Limits) {
            reqParams.cfn['Limits'] = {
                'Daily': obj.data.Limits.Daily,
                'MaximumDuration': obj.data.Limits.MaximumDuration,
                'MessagesPerSecond': obj.data.Limits.MessagesPerSecond,
                'Total': obj.data.Limits.Total
            };
        }
        if (obj.data.QuietTime) {
            reqParams.cfn['QuietTime'] = {
                'Start': obj.data.QuietTime.Start,
                'End': obj.data.QuietTime.End
            };
        }

        /*
        TODO:
        CloudWatchMetricsEnabled: Boolean
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::ApplicationSettings'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::ApplicationSettings',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.campaign") {
        if (obj.data.AdditionalTreatments) {
            reqParams.cfn['AdditionalTreatments'] = [];
            obj.data.AdditionalTreatments.forEach(additionaltreatment => {
                reqParams.cfn['AdditionalTreatments'].push({
                    'MessageConfiguration': additionaltreatment.MessageConfiguration,
                    'Schedule': additionaltreatment.Schedule,
                    'TreatmentDescription': additionaltreatment.TreatmentDescription,
                    'TreatmentName': additionaltreatment.TreatmentName,
                    'SizePercent': additionaltreatment.SizePercent
                });
            });
        }
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['HoldoutPercent'] = obj.data.HoldoutPercent;
        reqParams.cfn['MessageConfiguration'] = obj.data.MessageConfiguration;
        reqParams.cfn['Schedule'] = obj.data.Schedule;
        reqParams.cfn['TreatmentDescription'] = obj.data.TreatmentDescription;
        reqParams.cfn['TreatmentName'] = obj.data.TreatmentName;
        reqParams.cfn['CampaignHook'] = obj.data.Hook;
        reqParams.cfn['IsPaused'] = obj.data.IsPaused;
        reqParams.cfn['Limits'] = obj.data.Limits;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['SegmentId'] = obj.data.SegmentId;
        reqParams.cfn['SegmentVersion'] = obj.data.SegmentVersion;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::Campaign'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::Campaign',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.segment") {
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Dimensions'] = obj.data.Dimensions;
        reqParams.cfn['SegmentGroups'] = obj.data.SegmentGroups;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::Segment'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::Segment',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.emailtemplate") {
        reqParams.cfn['HtmlPart'] = obj.data.HtmlPart;
        reqParams.cfn['Subject'] = obj.data.Subject;
        reqParams.cfn['Tags'] = obj.data.tags;
        reqParams.cfn['TemplateName'] = obj.data.TemplateName;
        reqParams.cfn['TextPart'] = obj.data.TextPart;
        reqParams.cfn['TemplateDescription'] = obj.data.TemplateDescription;
        reqParams.cfn['DefaultSubstitutions'] = obj.data.DefaultSubstitutions;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::EmailTemplate'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::EmailTemplate',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.smstemplate") {
        reqParams.cfn['Body'] = obj.data.Body;
        reqParams.cfn['Tags'] = obj.data.tags;
        reqParams.cfn['TemplateName'] = obj.data.TemplateName;
        reqParams.cfn['TemplateDescription'] = obj.data.TemplateDescription;
        reqParams.cfn['DefaultSubstitutions'] = obj.data.DefaultSubstitutions;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::SmsTemplate'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::SmsTemplate',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.pushtemplate") {
        reqParams.cfn['Tags'] = obj.data.tags; // wtf?
        reqParams.cfn['ADM'] = obj.data.ADM;
        reqParams.cfn['APNS'] = obj.data.APNS;
        reqParams.cfn['Baidu'] = obj.data.Baidu;
        reqParams.cfn['Default'] = obj.data.Default;
        reqParams.cfn['GCM'] = obj.data.GCM;
        reqParams.cfn['TemplateName'] = obj.data.TemplateName;
        reqParams.cfn['TemplateDescription'] = obj.data.TemplateDescription;
        reqParams.cfn['DefaultSubstitutions'] = obj.data.DefaultSubstitutions;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::PushTemplate'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::PushTemplate',
            'options': reqParams
        });
    } else if (obj.type == "pinpoint.inapptemplate") {
        reqParams.cfn['Tags'] = obj.data.tags; // wtf?
        reqParams.cfn['TemplateName'] = obj.data.TemplateName;
        reqParams.cfn['TemplateDescription'] = obj.data.TemplateDescription;
        reqParams.cfn['Content'] = obj.data.Content;
        reqParams.cfn['CustomConfig'] = obj.data.CustomConfig;
        reqParams.cfn['Layout'] = obj.data.Layout;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('pinpoint', obj.id, 'AWS::Pinpoint::InAppTemplate'),
            'region': obj.region,
            'service': 'pinpoint',
            'type': 'AWS::Pinpoint::InAppTemplate',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
