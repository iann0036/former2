/* ========================================================================== */
// IoT Core
/* ========================================================================== */

sections.push({
    'category': 'Internet of Things',
    'service': 'Core',
    'resourcetypes': {
        'Things': {
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
                    },
                    {
                        field: 'typename',
                        title: 'Type Name',
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
        'Thing Principal Attachments': {
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
                        title: 'Thing Name',
                        field: 'thingname',
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
                        field: 'principal',
                        title: 'Principal',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Policies': {
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
                        field: 'defaultversionid',
                        title: 'Default Version ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'generationid',
                        title: 'Generation ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Policy Principal Attachments': {
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
                        title: 'Principal',
                        field: 'principal',
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
                        field: 'policyname',
                        title: 'Policy Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Certificates': {
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
                        field: 'cacertificateid',
                        title: 'CA Certificate ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'customerversion',
                        title: 'Customer Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Topic Rules': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Provisioning Templates': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Authorizers': {
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
                        field: 'functionarn',
                        title: 'Function ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Domain Configurations': {
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
                        field: 'servicetype',
                        title: 'Service Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Topic Rule Destinations': {
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
                        title: 'Confirmation URL',
                        field: 'confirmationurl',
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
                    // none
                ]
            ]
        },
        'Wireless Destinations': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Wireless Devices': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Wireless Gateways': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Wireless Device Profiles': {
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
                    // none
                ]
            ]
        },
        'Wireless Service Profiles': {
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
                    // none
                ]
            ]
        },
        'Audit Account Configuration': {
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
                        title: 'Account ID',
                        field: 'accountid',
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
                        field: 'rolearn',
                        title: 'Role ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Custom Metrics': {
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
                        field: 'displayname',
                        title: 'Display Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
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
        'Dimensions': {
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
        'Mitigation Actions': {
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
                        field: 'rolearn',
                        title: 'Role ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Scheduled Audits': {
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
                        field: 'frequency',
                        title: 'Frequency',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Security Profiles': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Wireless Partner Accounts': {
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
                        title: 'Partner Account ID',
                        field: 'partneraccountid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                [
                    // none
                ]
            ]
        },
        'Wireless Task Definitions': {
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
        'Device Advisor Suite Definitions': {
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
        'Fleet Metrics': {
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
                        title: 'Metric Name',
                        field: 'metricname',
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'indexname',
                        title: 'Index Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Job Templates': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Logging': {
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
                        title: 'Default Log Level',
                        field: 'defaultloglevel',
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
                        field: 'rolearn',
                        title: 'Role ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Resource Specific Logging': {
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
                        title: 'Target Name',
                        field: 'targetname',
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
                        field: 'targettype',
                        title: 'Target Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'loglevel',
                        title: 'Log Level',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableInternetofThingsCore() {
    blockUI('#section-internetofthings-core-things-datatable');
    blockUI('#section-internetofthings-core-thingprincipalattachments-datatable');
    blockUI('#section-internetofthings-core-policies-datatable');
    blockUI('#section-internetofthings-core-policyprincipalattachments-datatable');
    blockUI('#section-internetofthings-core-certificates-datatable');
    blockUI('#section-internetofthings-core-topicrules-datatable');
    blockUI('#section-internetofthings-core-provisioningtemplates-datatable');
    blockUI('#section-internetofthings-core-authorizers-datatable');
    blockUI('#section-internetofthings-core-domainconfigurations-datatable');
    blockUI('#section-internetofthings-core-topicruledestinations-datatable');
    blockUI('#section-internetofthings-core-wirelessdestinations-datatable');
    blockUI('#section-internetofthings-core-wirelessdevices-datatable');
    blockUI('#section-internetofthings-core-wirelessgateways-datatable');
    blockUI('#section-internetofthings-core-wirelessdeviceprofiles-datatable');
    blockUI('#section-internetofthings-core-wirelessserviceprofiles-datatable');
    blockUI('#section-internetofthings-core-accountauditconfiguration-datatable');
    blockUI('#section-internetofthings-core-custommetrics-datatable');
    blockUI('#section-internetofthings-core-dimensions-datatable');
    blockUI('#section-internetofthings-core-mitigationactions-datatable');
    blockUI('#section-internetofthings-core-scheduledaudits-datatable');
    blockUI('#section-internetofthings-core-securityprofiles-datatable');
    blockUI('#section-internetofthings-core-wirelesspartneraccounts-datatable');
    blockUI('#section-internetofthings-core-wirelesstaskdefinitions-datatable');
    blockUI('#section-internetofthings-core-deviceadvisorsuitedefinitions-datatable');
    blockUI('#section-internetofthings-core-fleetmetrics-datatable');
    blockUI('#section-internetofthings-core-jobtemplates-datatable');
    blockUI('#section-internetofthings-core-logging-datatable');
    blockUI('#section-internetofthings-core-resourcespecificlogging-datatable');

    await sdkcall("Iot", "listThings", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-core-things-datatable').deferredBootstrapTable('removeAll');
        $('#section-internetofthings-core-thingprincipalattachments-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.things.map(thing => {
            if (thing.thingName) {
                return Promise.all([
                    sdkcall("Iot", "listThingPrincipals", {
                        thingName: thing.thingName
                    }, true).then((data) => {
                        data.principals.forEach(principal => {
                            $('#section-internetofthings-core-thingprincipalattachments-datatable').deferredBootstrapTable('append', [{
                                f2id: principal,
                                f2type: 'iot.thingprincipalattachment',
                                f2data: {
                                    'thing': thing,
                                    'principal': principal
                                },
                                f2region: region,
                                principal: principal,
                                thingname: thing.thingName
                            }]);
                        });
                    }),
                    sdkcall("Iot", "describeThing", {
                        thingName: thing.thingName
                    }, true).then((data) => {
                        $('#section-internetofthings-core-things-datatable').deferredBootstrapTable('append', [{
                            f2id: data.thingArn,
                            f2type: 'iot.thing',
                            f2data: data,
                            f2region: region,
                            name: data.thingName,
                            id: data.thingId,
                            typename: data.thingTypeName,
                            version: data.version
                        }]);
                    })
                ]);
            } else {
                return Promise.resolve();
            }
        }));

        unblockUI('#section-internetofthings-core-things-datatable');
        unblockUI('#section-internetofthings-core-thingprincipalattachments-datatable');
    });

    await sdkcall("Iot", "listPolicies", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-core-policies-datatable').deferredBootstrapTable('removeAll');
        $('#section-internetofthings-core-policyprincipalattachments-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.policies.map(policy => {
            return Promise.all([
                sdkcall("Iot", "listPolicyPrincipals", {
                    policyName: policy.policyName
                }, true).then((data) => {
                    data.principals.forEach(principal => {
                        $('#section-internetofthings-core-policyprincipalattachments-datatable').deferredBootstrapTable('append', [{
                            f2id: principal,
                            f2type: 'iot.policyprincipalattachment',
                            f2data: {
                                'policy': policy,
                                'principal': principal
                            },
                            f2region: region,
                            principal: principal,
                            policyname: policy.policyName
                        }]);
                    });
                }),
                sdkcall("Iot", "getPolicy", {
                    policyName: policy.policyName
                }, true).then((data) => {
                    $('#section-internetofthings-core-policies-datatable').deferredBootstrapTable('append', [{
                        f2id: data.policyArn,
                        f2type: 'iot.policy',
                        f2data: data,
                        f2region: region,
                        name: data.policyName,
                        defaultversionid: data.defaultVersionId,
                        generationid: data.generationId
                    }]);
                })
            ]);
        }));

        unblockUI('#section-internetofthings-core-policies-datatable');
        unblockUI('#section-internetofthings-core-policyprincipalattachments-datatable');
    });

    await sdkcall("Iot", "listCertificates", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-core-certificates-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.certificates.map(certificate => {
            return sdkcall("Iot", "describeCertificate", {
                certificateId: certificate.certificateId
            }, true).then((data) => {
                $('#section-internetofthings-core-certificates-datatable').deferredBootstrapTable('append', [{
                    f2id: data.certificateDescription.certificateArn,
                    f2type: 'iot.certificate',
                    f2data: data.certificateDescription,
                    f2region: region,
                    id: data.certificateDescription.certificateId,
                    cacertificateid: data.certificateDescription.caCertificateId,
                    customerversion: data.certificateDescription.customerVersion
                }]);
            });
        }));

        unblockUI('#section-internetofthings-core-certificates-datatable');
    });

    await sdkcall("Iot", "listTopicRules", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-core-topicrules-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.rules.map(rule => {
            return sdkcall("Iot", "getTopicRule", {
                ruleName: rule.ruleName
            }, true).then((data) => {
                $('#section-internetofthings-core-topicrules-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ruleArn,
                    f2type: 'iot.topicrule',
                    f2data: data,
                    f2region: region,
                    name: data.rule.ruleName,
                    description: data.rule.description
                }]);
            });
        }));

        unblockUI('#section-internetofthings-core-topicrules-datatable');
    });

    await sdkcall("Iot", "listProvisioningTemplates", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-core-provisioningtemplates-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.templates.map(template => {
            return sdkcall("Iot", "describeProvisioningTemplate", {
                templateName: template.templateName
            }, true).then((data) => {
                $('#section-internetofthings-core-provisioningtemplates-datatable').deferredBootstrapTable('append', [{
                    f2id: data.templateArn,
                    f2type: 'iot.provisioningtemplate',
                    f2data: data,
                    f2region: region,
                    name: data.templateName,
                    description: data.description
                }]);
            });
        }));

        unblockUI('#section-internetofthings-core-provisioningtemplates-datatable');
    }).catch(err => { });

    await sdkcall("Iot", "listAuthorizers", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-core-authorizers-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.authorizers.map(authorizer => {
            return sdkcall("Iot", "describeAuthorizer", {
                authorizerName: authorizer.authorizerName
            }, true).then((data) => {
                $('#section-internetofthings-core-authorizers-datatable').deferredBootstrapTable('append', [{
                    f2id: data.authorizerDescription.authorizerArn,
                    f2type: 'iot.authorizer',
                    f2data: data.authorizerDescription,
                    f2region: region,
                    name: data.authorizerDescription.authorizerName,
                    functionarn: data.authorizerDescription.authorizerFunctionArn
                }]);
            });
        }));

        unblockUI('#section-internetofthings-core-authorizers-datatable');
    }).catch(err => { });

    await sdkcall("Iot", "listDomainConfigurations", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-domainconfigurations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.domainConfigurations.map(async (domainConfiguration) => {
            return sdkcall("Iot", "describeDomainConfiguration", {
                domainConfigurationName: domainConfiguration.domainConfigurationName
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.Configuration.FunctionArn);

                $('#section-internetofthings-core-domainconfigurations-datatable').deferredBootstrapTable('append', [{
                    f2id: data.domainConfigurationArn,
                    f2type: 'iot.domainconfiguration',
                    f2data: data,
                    f2region: region,
                    name: data.domainConfigurationName,
                    servicetype: data.serviceType
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("Iot", "listTopicRuleDestinations", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-topicruledestinations-datatable').deferredBootstrapTable('removeAll');

        data.destinationSummaries.forEach(destination => {
            if (destination && destination.httpUrlSummary) {
                $('#section-internetofthings-core-topicruledestinations-datatable').deferredBootstrapTable('append', [{
                    f2id: "Topic Rule Destination " + destination.httpUrlSummary.confirmationUrl,
                    f2type: 'iot.topicruledestination',
                    f2data: destination,
                    f2region: region,
                    name: destination.httpUrlSummary.confirmationUrl
                }]);
            }
        });
    }).catch(err => { });

    await sdkcall("IoTWireless", "listDestinations", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-wirelessdestinations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DestinationList.map(async (destination) => {
            return sdkcall("IoTWireless", "getDestination", {
                Name: destination.Name
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.Arn);

                $('#section-internetofthings-core-wirelessdestinations-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'iot.wirelessdestination',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    description: data.Description
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("IoTWireless", "listWirelessDevices", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-wirelessdevices-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.WirelessDeviceList.map(async (device) => {
            return sdkcall("IoTWireless", "getWirelessDevice", {
                Identifier: device.Id,
                IdentifierType: "WirelessDeviceId"
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.Arn);

                $('#section-internetofthings-core-wirelessdevices-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'iot.wirelessdevice',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    description: data.Description
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("IoTWireless", "listWirelessGateways", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-wirelessgateways-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.WirelessGatewayList.map(async (gateway) => {
            return sdkcall("IoTWireless", "getWirelessGateway", {
                Identifier: gateway.Id,
                IdentifierType: "WirelessGatewayId"
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.Arn);

                $('#section-internetofthings-core-wirelessgateways-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'iot.wirelessgateway',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    description: data.Description
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("IoTWireless", "listDeviceProfiles", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-wirelessdeviceprofiles-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DeviceProfileList.map(async (profile) => {
            return sdkcall("IoTWireless", "getDeviceProfile", {
                Id: profile.Id
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.Arn);

                $('#section-internetofthings-core-wirelessdeviceprofiles-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'iot.wirelessdeviceprofile',
                    f2data: data,
                    f2region: region,
                    name: data.Name
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("IoTWireless", "listServiceProfiles", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-wirelessserviceprofiles-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ServiceProfileList.map(async (profile) => {
            return sdkcall("IoTWireless", "getServiceProfile", {
                Id: profile.Id
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.Arn);

                $('#section-internetofthings-core-wirelessserviceprofiles-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'iot.wirelessserviceprofile',
                    f2data: data,
                    f2region: region,
                    name: data.Name
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("Iot", "describeAccountAuditConfiguration", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-accountauditconfiguration-datatable').deferredBootstrapTable('removeAll');

        if (data.roleArn) {
            await sdkcall("STS", "getCallerIdentity", {
                // no params
            }, true).then(async (data) => {
                data['accountId'] = data.Account;

                $('#section-internetofthings-core-accountauditconfiguration-datatable').deferredBootstrapTable('append', [{
                    f2id: "IoT Account Audit Configuration",
                    f2type: 'iot.accountauditconfiguration',
                    f2data: data,
                    f2region: region,
                    accountid: data.accountId,
                    rolearn: data.roleArn
                }]);
            });
        }
    }).catch(err => { });

    await sdkcall("Iot", "listCustomMetrics", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-custommetrics-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.metricNames.map(async (metricname) => {
            return sdkcall("Iot", "describeCustomMetric", {
                metricName: metricname
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.metricArn);

                $('#section-internetofthings-core-custommetrics-datatable').deferredBootstrapTable('append', [{
                    f2id: data.metricArn,
                    f2type: 'iot.custommetric',
                    f2data: data,
                    f2region: region,
                    name: data.metricName,
                    type: data.metricType,
                    displayname: data.displayName
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("Iot", "listDimensions", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-dimensions-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.dimensionNames.map(async (dimensionname) => {
            return sdkcall("Iot", "describeDimension", {
                name: dimensionname
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.arn);

                $('#section-internetofthings-core-dimensions-datatable').deferredBootstrapTable('append', [{
                    f2id: data.arn,
                    f2type: 'iot.dimension',
                    f2data: data,
                    f2region: region,
                    name: data.name,
                    type: data.type
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("Iot", "listMitigationActions", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-mitigationactions-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.actionIdentifiers.map(async (action) => {
            return sdkcall("Iot", "describeMitigationAction", {
                actionName: action.actionName
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.actionArn);

                $('#section-internetofthings-core-mitigationactions-datatable').deferredBootstrapTable('append', [{
                    f2id: data.actionArn,
                    f2type: 'iot.mitigationaction',
                    f2data: data,
                    f2region: region,
                    name: data.actionName,
                    rolearn: data.roleArn
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("Iot", "listScheduledAudits", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-scheduledaudits-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.scheduledAudits.map(async (scheduledaudit) => {
            return sdkcall("Iot", "describeScheduledAudit", {
                scheduledAuditName: scheduledaudit.scheduledAuditName
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.scheduledAuditArn);

                $('#section-internetofthings-core-scheduledaudits-datatable').deferredBootstrapTable('append', [{
                    f2id: data.scheduledAuditArn,
                    f2type: 'iot.scheduledaudit',
                    f2data: data,
                    f2region: region,
                    name: data.scheduledAuditName,
                    frequency: data.frequency
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("Iot", "listSecurityProfiles", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-securityprofiles-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.securityProfileIdentifiers.map(async (securityprofile) => {
            return sdkcall("Iot", "describeSecurityProfile", {
                securityProfileName: securityprofile.name
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.securityProfileArn);

                await sdkcall("Iot", "listTargetsForSecurityProfile", {
                    securityProfileName: securityprofile.name
                }, false).then(async (targets) => {
                    data['securityProfileTargets'] = targets.securityProfileTargets;
                }).catch(() => { });

                $('#section-internetofthings-core-securityprofiles-datatable').deferredBootstrapTable('append', [{
                    f2id: data.securityProfileArn,
                    f2type: 'iot.securityprofile',
                    f2data: data,
                    f2region: region,
                    name: data.securityProfileName,
                    description: data.securityProfileDescription
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("IoTWireless", "listPartnerAccounts", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-wirelesspartneraccounts-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Sidewalk.map(async (sidewalk) => {
            return sdkcall("IoTWireless", "getPartnerAccount", {
                PartnerAccountId: sidewalk.AmazonId,
                PartnerType: 'Sidewalk'
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.Sidewalk.Arn);

                $('#section-internetofthings-core-wirelesspartneraccounts-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Sidewalk.Arn,
                    f2type: 'iot.wirelesspartneraccount',
                    f2data: data.Sidewalk,
                    f2region: region,
                    partneraccountid: data.Sidewalk.AmazonId
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("IoTWireless", "listWirelessGatewayTaskDefinitions", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-wirelesstaskdefinitions-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.TaskDefinitions.map(async (taskdefinition) => {
            return sdkcall("IoTWireless", "getWirelessGatewayTaskDefinition", {
                Id: taskdefinition.Id
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.Arn);

                $('#section-internetofthings-core-wirelesstaskdefinitions-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'iot.wirelesstaskdefinition',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    id: data.Arn
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("IotDeviceAdvisor", "listSuiteDefinitions", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-deviceadvisorsuitedefinitions-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.suiteDefinitionInformationList.map(async (suitedefinition) => {
            return sdkcall("IotDeviceAdvisor", "getSuiteDefinition", {
                suiteDefinitionId: suitedefinition.suiteDefinitionId
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.suiteDefinitionArn);
                
                $('#section-internetofthings-core-deviceadvisorsuitedefinitions-datatable').deferredBootstrapTable('append', [{
                    f2id: data.suiteDefinitionArn,
                    f2type: 'iot.deviceadvisorsuitedefinition',
                    f2data: data,
                    f2region: region,
                    name: data.suiteDefinitionConfiguration.suiteDefinitionName,
                    id: data.suiteDefinitionId
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("Iot", "listFleetMetrics", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-fleetmetrics-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.fleetMetrics.map(async (fleetmetric) => {
            return sdkcall("Iot", "describeFleetMetric", {
                metricName: fleetmetric.metricName
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.metricArn);
                
                $('#section-internetofthings-core-fleetmetrics-datatable').deferredBootstrapTable('append', [{
                    f2id: data.metricArn,
                    f2type: 'iot.fleetmetric',
                    f2data: data,
                    f2region: region,
                    metricname: data.metricName,
                    indexname: data.indexName,
                    description: data.description
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("Iot", "listJobTemplates", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-jobtemplates-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.jobTemplates.map(async (jobtemplate) => {
            return sdkcall("Iot", "describeJobTemplate", {
                jobTemplateId: jobtemplate.jobTemplateId
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.jobTemplateArn);
                
                $('#section-internetofthings-core-jobtemplates-datatable').deferredBootstrapTable('append', [{
                    f2id: data.jobTemplateArn,
                    f2type: 'iot.jobtemplate',
                    f2data: data,
                    f2region: region,
                    id: data.jobTemplateId,
                    description: data.description
                }]);
            });
        }));
    }).catch(err => { });
    
    await sdkcall("STS", "getCallerIdentity", {
        // no params
    }, true).then(async (data) => {
        var accountId = data.Account;

        await sdkcall("Iot", "getV2LoggingOptions", {
            // no params
        }, false).then(async (data) => {
            $('#section-internetofthings-core-logging-datatable').deferredBootstrapTable('removeAll');

            data['accountId'] = accountId;
                    
            $('#section-internetofthings-core-logging-datatable').deferredBootstrapTable('append', [{
                f2id: "IoT Logging Options",
                f2type: 'iot.logging',
                f2data: data,
                f2region: region,
                defaultloglevel: data.defaultLogLevel,
                rolearn: data.roleArn
            }]);
        }).catch(err => { });
    });

    await sdkcall("Iot", "listV2LoggingLevels", {
        targetType: "THING_GROUP"
    }, false).then(async (data) => {
        $('#section-internetofthings-core-resourcespecificlogging-datatable').deferredBootstrapTable('removeAll');
        
        data.logTargetConfigurations.forEach(logTargetConfiguration => {
            $('#section-internetofthings-core-resourcespecificlogging-datatable').deferredBootstrapTable('append', [{
                f2id: logTargetConfiguration.logTarget.targetType + " " + logTargetConfiguration.logTarget.targetName,
                f2type: 'iot.resourcespecificlogging',
                f2data: logTargetConfiguration,
                f2region: region,
                targetname: logTargetConfiguration.logTarget.targetName,
                targettype: logTargetConfiguration.logTarget.targetType,
                loglevel: logTargetConfiguration.logLevel
            }]);
        });
    }).catch(err => { });

    unblockUI('#section-internetofthings-core-domainconfigurations-datatable');
    unblockUI('#section-internetofthings-core-topicruledestinations-datatable');
    unblockUI('#section-internetofthings-core-wirelessdestinations-datatable');
    unblockUI('#section-internetofthings-core-wirelessdevices-datatable');
    unblockUI('#section-internetofthings-core-wirelessgateways-datatable');
    unblockUI('#section-internetofthings-core-wirelessdeviceprofiles-datatable');
    unblockUI('#section-internetofthings-core-wirelessserviceprofiles-datatable');
    unblockUI('#section-internetofthings-core-accountauditconfiguration-datatable');
    unblockUI('#section-internetofthings-core-custommetrics-datatable');
    unblockUI('#section-internetofthings-core-dimensions-datatable');
    unblockUI('#section-internetofthings-core-mitigationactions-datatable');
    unblockUI('#section-internetofthings-core-scheduledaudits-datatable');
    unblockUI('#section-internetofthings-core-securityprofiles-datatable');
    unblockUI('#section-internetofthings-core-wirelesspartneraccounts-datatable');
    unblockUI('#section-internetofthings-core-wirelesstaskdefinitions-datatable');
    unblockUI('#section-internetofthings-core-deviceadvisorsuitedefinitions-datatable');
    unblockUI('#section-internetofthings-core-fleetmetrics-datatable');
    unblockUI('#section-internetofthings-core-jobtemplates-datatable');
    unblockUI('#section-internetofthings-core-logging-datatable');
    unblockUI('#section-internetofthings-core-resourcespecificlogging-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "iot.thing") {
        reqParams.cfn['ThingName'] = obj.data.thingName;
        reqParams.tf['name'] = obj.data.thingName;
        reqParams.cfn['AttributePayload'] = {
            'Attributes': obj.data.attributes
        };
        reqParams.tf['attributes'] = obj.data.attributes;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::Thing'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::Thing',
            'terraformType': 'aws_iot_thing',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.thingName,
                'Import': {
                    'ThingName': obj.data.thingName
                }
            }
        });
    } else if (obj.type == "iot.thingprincipalattachment") {
        reqParams.cfn['ThingName'] = obj.data.thing.thingName;
        reqParams.tf['thing'] = obj.data.thing.thingName;
        reqParams.cfn['Principal'] = obj.data.principal;
        reqParams.tf['principal'] = obj.data.principal;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::ThingPrincipalAttachment'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::ThingPrincipalAttachment',
            'terraformType': 'aws_iot_thing_principal_attachment',
            'options': reqParams
        });
    } else if (obj.type == "iot.policy") {
        reqParams.cfn['PolicyName'] = obj.data.policyName;
        reqParams.tf['name'] = obj.data.policyName;
        reqParams.cfn['PolicyDocument'] = obj.data.policyDocument;
        reqParams.tf['policy'] = obj.data.policyDocument;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::Policy'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::Policy',
            'terraformType': 'aws_iot_policy',
            'options': reqParams
        });
    } else if (obj.type == "iot.policyprincipalattachment") {
        reqParams.cfn['PolicyName'] = obj.data.policy.policyName;
        reqParams.tf['policy'] = obj.data.policy.policyName;
        reqParams.cfn['Principal'] = obj.data.principal;
        reqParams.tf['target'] = obj.data.principal;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::PolicyPrincipalAttachment'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::PolicyPrincipalAttachment',
            'terraformType': 'aws_iot_policy_attachment',
            'options': reqParams
        });
    } else if (obj.type == "iot.certificate") {
        reqParams.cfn['Status'] = obj.data.status;
        reqParams.tf['active'] = (obj.data.status.toLowerCase() == "active");
        reqParams.cfn['CertificateSigningRequest'] = "REPLACEME";
        reqParams.tf['csr'] = "REPLACEME";

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::Certificate'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::Certificate',
            'terraformType': 'aws_iot_certificate',
            'options': reqParams
        });
    } else if (obj.type == "iot.topicrule") {
        var actions = null;
        var errorAction = null;

        if (obj.rule.actions) {
            actions = [];
            obj.rule.actions.forEach(action => {
                var actionitem = {};

                if (action.dynamoDB) {
                    actionitem['DynamoDB'] = {
                        'HashKeyField': action.dynamoDB.hashKeyField,
                        'HashKeyType': action.dynamoDB.hashKeyType,
                        'HashKeyValue': action.dynamoDB.hashKeyValue,
                        'PayloadField': action.dynamoDB.payloadField,
                        'RangeKeyField': action.dynamoDB.rangeKeyField,
                        'RangeKeyType': action.dynamoDB.rangeKeyType,
                        'RangeKeyValue': action.dynamoDB.rangeKeyValue,
                        'RoleArn': action.dynamoDB.roleArn,
                        'TableName': action.dynamoDB.tableName
                    };
                }
                if (action.dynamoDBv2) {
                    actionitem['DynamoDBv2'] = {
                        'PutItem': {
                            'TableName': action.dynamoDBv2.putItem.tableName
                        },
                        'RoleArn': action.dynamoDBv2.roleArn
                    };
                }
                if (action.lambda) {
                    actionitem['Lambda'] = {
                        'FunctionArn': action.lambda.functionArn
                    };
                }
                if (action.sns) {
                    actionitem['Sns'] = {
                        'MessageFormat': action.sns.messageFormat,
                        'RoleArn': action.sns.roleArn,
                        'TargetArn': action.sns.targetArn
                    };
                }
                if (action.sqs) {
                    actionitem['Sqs'] = {
                        'QueueUrl': action.sqs.queueUrl,
                        'RoleArn': action.sqs.roleArn,
                        'UseBase64': action.sqs.useBase64
                    };
                }
                if (action.kinesis) {
                    actionitem['Kinesis'] = {
                        'PartitionKey': action.kinesis.partitionKey,
                        'RoleArn': action.kinesis.roleArn,
                        'StreamName': action.kinesis.streamName
                    };
                }
                if (action.republish) {
                    actionitem['Republish'] = {
                        'RoleArn': action.republish.roleArn,
                        'Topic': action.republish.topic,
                        'Qos': action.republish.qos
                    };
                }
                if (action.s3) {
                    actionitem['S3'] = {
                        'BucketName': action.s3.bucketName,
                        'Key': action.s3.key,
                        'RoleArn': action.s3.roleArn
                    };
                }
                if (action.firehose) {
                    actionitem['Firehose'] = {
                        'DeliveryStreamName': action.firehose.deliveryStreamName,
                        'RoleArn': action.firehose.roleArn,
                        'Separator': action.firehose.separator
                    };
                }
                if (action.cloudwatchMetric) {
                    actionitem['CloudwatchMetric'] = {
                        'MetricName': action.cloudwatchMetric.metricName,
                        'MetricNamespace': action.cloudwatchMetric.metricNamespace,
                        'MetricTimestamp': action.cloudwatchMetric.metricTimestamp,
                        'MetricUnit': action.cloudwatchMetric.metricUnit,
                        'MetricValue': action.cloudwatchMetric.metricValue,
                        'RoleArn': action.cloudwatchMetric.roleArn
                    };
                }
                if (action.cloudwatchAlarm) {
                    actionitem['CloudwatchAlarm'] = {
                        'AlarmName': action.cloudwatchAlarm.alarmName,
                        'RoleArn': action.cloudwatchAlarm.roleArn,
                        'StateReason': action.cloudwatchAlarm.stateReason,
                        'StateValue': action.cloudwatchAlarm.stateValue
                    };
                }
                if (action.elasticsearch) {
                    actionitem['Elasticsearch'] = {
                        'Endpoint': action.elasticsearch.endpoint,
                        'Id': action.elasticsearch.id,
                        'Index': action.elasticsearch.index,
                        'RoleArn': action.elasticsearch.roleArn,
                        'Type': action.elasticsearch.type
                    };
                }
                if (action.iotAnalytics) {
                    actionitem['IotAnalytics'] = {
                        'ChannelName': action.iotAnalytics.channelName,
                        'RoleArn': action.iotAnalytics.roleArn
                    };
                }
                if (action.stepFunctions) {
                    actionitem['StepFunctions'] = {
                        'ExecutionNamePrefix': action.stepFunctions.executionNamePrefix,
                        'RoleArn': action.stepFunctions.roleArn,
                        'StateMachineName': action.stepFunctions.stateMachineName
                    };
                }
                if (action.http) {
                    var headers = null;
                    if (action.http.headers) {
                        headers = [];
                        action.http.headers.forEach(header => {
                            headers.push({
                                'Key': header.key,
                                'Value': header.value
                            });
                        });
                    }
                    var auth = null;
                    if (action.http.auth) {
                        auth = {};
                        if (action.http.auth.sigv4) {
                            auth['Sigv4'] = {
                                'RoleArn': action.http.auth.sigv4.roleArn,
                                'ServiceName': action.http.auth.sigv4.serviceName,
                                'SigningRegion': action.http.auth.sigv4.signingRegion
                            };
                        }
                    }
                    actionitem['Http'] = {
                        'Auth': auth,
                        'ConfirmationUrl': action.http.confirmationUrl,
                        'Headers': headers,
                        'Url': action.http.url
                    };
                }

                actions.push(actionitem);
            });
        }

        if (obj.data.rule.errorAction) {
            errorAction = {};
            if (obj.data.rule.errorAction.dynamoDB) {
                errorAction['DynamoDB'] = {
                    'HashKeyField': obj.data.rule.errorAction.dynamoDB.hashKeyField,
                    'HashKeyType': obj.data.rule.errorAction.dynamoDB.hashKeyType,
                    'HashKeyValue': obj.data.rule.errorAction.dynamoDB.hashKeyValue,
                    'PayloadField': obj.data.rule.errorAction.dynamoDB.payloadField,
                    'RangeKeyField': obj.data.rule.errorAction.dynamoDB.rangeKeyField,
                    'RangeKeyType': obj.data.rule.errorAction.dynamoDB.rangeKeyType,
                    'RangeKeyValue': obj.data.rule.errorAction.dynamoDB.rangeKeyValue,
                    'RoleArn': obj.data.rule.errorAction.dynamoDB.roleArn,
                    'TableName': obj.data.rule.errorAction.dynamoDB.tableName
                };
            }
            if (obj.data.rule.errorAction.dynamoDBv2) {
                errorAction['DynamoDBv2'] = {
                    'PutItem': {
                        'TableName': obj.data.rule.errorAction.dynamoDBv2.putItem.tableName
                    },
                    'RoleArn': obj.data.rule.errorAction.dynamoDBv2.roleArn
                };
            }
            if (obj.data.rule.errorAction.lambda) {
                errorAction['Lambda'] = {
                    'FunctionArn': obj.data.rule.errorAction.lambda.functionArn
                };
            }
            if (obj.data.rule.errorAction.sns) {
                errorAction['Sns'] = {
                    'MessageFormat': obj.data.rule.errorAction.sns.messageFormat,
                    'RoleArn': obj.data.rule.errorAction.sns.roleArn,
                    'TargetArn': obj.data.rule.errorAction.sns.targetArn
                };
            }
            if (obj.data.rule.errorAction.sqs) {
                errorAction['Sqs'] = {
                    'QueueUrl': obj.data.rule.errorAction.sqs.queueUrl,
                    'RoleArn': obj.data.rule.errorAction.sqs.roleArn,
                    'UseBase64': obj.data.rule.errorAction.sqs.useBase64
                };
            }
            if (obj.data.rule.errorAction.kinesis) {
                errorAction['Kinesis'] = {
                    'PartitionKey': obj.data.rule.errorAction.kinesis.partitionKey,
                    'RoleArn': obj.data.rule.errorAction.kinesis.roleArn,
                    'StreamName': obj.data.rule.errorAction.kinesis.streamName
                };
            }
            if (obj.data.rule.errorAction.republish) {
                errorAction['Republish'] = {
                    'RoleArn': obj.data.rule.errorAction.republish.roleArn,
                    'Topic': obj.data.rule.errorAction.republish.topic
                };
            }
            if (obj.data.rule.errorAction.s3) {
                errorAction['S3'] = {
                    'BucketName': obj.data.rule.errorAction.s3.bucketName,
                    'Key': obj.data.rule.errorAction.s3.key,
                    'RoleArn': obj.data.rule.errorAction.s3.roleArn
                };
            }
            if (obj.data.rule.errorAction.firehose) {
                errorAction['Firehose'] = {
                    'DeliveryStreamName': obj.data.rule.errorAction.firehose.deliveryStreamName,
                    'RoleArn': obj.data.rule.errorAction.firehose.roleArn,
                    'Separator': obj.data.rule.errorAction.firehose.separator
                };
            }
            if (obj.data.rule.errorAction.cloudwatchMetric) {
                errorAction['CloudwatchMetric'] = {
                    'MetricName': obj.data.rule.errorAction.cloudwatchMetric.metricName,
                    'MetricNamespace': obj.data.rule.errorAction.cloudwatchMetric.metricNamespace,
                    'MetricTimestamp': obj.data.rule.errorAction.cloudwatchMetric.metricTimestamp,
                    'MetricUnit': obj.data.rule.errorAction.cloudwatchMetric.metricUnit,
                    'MetricValue': obj.data.rule.errorAction.cloudwatchMetric.metricValue,
                    'RoleArn': obj.data.rule.errorAction.cloudwatchMetric.roleArn
                };
            }
            if (obj.data.rule.errorAction.cloudwatchAlarm) {
                errorAction['CloudwatchAlarm'] = {
                    'AlarmName': obj.data.rule.errorAction.cloudwatchAlarm.alarmName,
                    'RoleArn': obj.data.rule.errorAction.cloudwatchAlarm.roleArn,
                    'StateReason': obj.data.rule.errorAction.cloudwatchAlarm.stateReason,
                    'StateValue': obj.data.rule.errorAction.cloudwatchAlarm.stateValue
                };
            }
            if (obj.data.rule.errorAction.elasticsearch) {
                errorAction['Elasticsearch'] = {
                    'Endpoint': obj.data.rule.errorAction.elasticsearch.endpoint,
                    'Id': obj.data.rule.errorAction.elasticsearch.id,
                    'Index': obj.data.rule.errorAction.elasticsearch.index,
                    'RoleArn': obj.data.rule.errorAction.elasticsearch.roleArn,
                    'Type': obj.data.rule.errorAction.elasticsearch.type
                };
            }
            if (obj.data.rule.errorAction.iotAnalytics) {
                errorAction['IotAnalytics'] = {
                    'ChannelName': obj.data.rule.errorAction.iotAnalytics.channelName,
                    'RoleArn': obj.data.rule.errorAction.iotAnalytics.roleArn
                };
            }
            if (obj.data.rule.errorAction.stepFunctions) {
                errorAction['StepFunctions'] = {
                    'ExecutionNamePrefix': obj.data.rule.errorAction.stepFunctions.executionNamePrefix,
                    'RoleArn': obj.data.rule.errorAction.stepFunctions.roleArn,
                    'StateMachineName': obj.data.rule.errorAction.stepFunctions.stateMachineName
                };
            }
        }

        reqParams.cfn['RuleName'] = obj.data.rule.ruleName;
        reqParams.cfn['TopicRulePayload'] = {
            'Actions': actions,
            'AwsIotSqlVersion': obj.data.rule.awsIotSqlVersion,
            'Description': obj.data.rule.description,
            'ErrorAction': errorAction,
            'RuleDisabled': obj.data.rule.ruleDisabled,
            'Sql': obj.data.rule.sql
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::TopicRule'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::TopicRule',
            'options': reqParams
        });
    } else if (obj.type == "iot.provisioningtemplate") {
        reqParams.cfn['TemplateName'] = obj.data.templateName;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['TemplateBody'] = obj.data.templateBody;
        reqParams.cfn['Enabled'] = obj.data.enabled;
        reqParams.cfn['ProvisioningRoleArn'] = obj.data.provisioningRoleArn;
        if (obj.data.preProvisioningHook) {
            reqParams.cfn['PreProvisioningHook'] = {
                'PayloadVersion': obj.data.preProvisioningHook.payloadVersion,
                'TargetArn': obj.data.preProvisioningHook.targetArn
            };
        }

        /*
        TODO
        Tags: 
         - Json
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::ProvisioningTemplate'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::ProvisioningTemplate',
            'options': reqParams
        });
    } else if (obj.type == "iot.authorizer") {
        reqParams.cfn['AuthorizerName'] = obj.data.authorizerName;
        reqParams.cfn['AuthorizerFunctionArn'] = obj.data.authorizerFunctionArn;
        reqParams.cfn['TokenKeyName'] = obj.data.tokenKeyName;
        reqParams.cfn['TokenSigningPublicKeys'] = obj.data.tokenSigningPublicKeys;
        reqParams.cfn['Status'] = obj.data.status;
        reqParams.cfn['SigningDisabled'] = obj.data.signingDisabled;

        /*
        TODO
        Tags: 
            Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::Authorizer'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::Authorizer',
            'options': reqParams
        });
    } else if (obj.type == "iot.domainconfiguration") {
        reqParams.cfn['DomainConfigurationName'] = obj.data.domainConfigurationName;
        reqParams.cfn['DomainName'] = obj.data.domainName;
        if (obj.data.serverCertificates) {
            reqParams.cfn['ServerCertificateArns'] = [];
            obj.data.serverCertificates.forEach(servercertificate => {
                reqParams.cfn['ServerCertificateArns'].push(servercertificate.serverCertificateArn);
            });
        }
        if (obj.data.authorizerConfig) {
            reqParams.cfn['DomainConfigurationName'] = {
                'DefaultAuthorizerName': obj.data.authorizerConfig.defaultAuthorizerName,
                'AllowAuthorizerOverride': obj.data.authorizerConfig.allowAuthorizerOverride
            };
        }
        reqParams.cfn['DomainConfigurationStatus'] = obj.data.domainConfigurationStatus;
        reqParams.cfn['ServiceType'] = obj.data.serviceType;
        reqParams.cfn['DomainConfigurationName'] = obj.data.domainConfigurationName;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::DomainConfiguration'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::DomainConfiguration',
            'options': reqParams
        });
    } else if (obj.type == "iot.topicruledestination") {
        reqParams.cfn['HttpUrlProperties'] = {
            'ConfirmationUrl': obj.data.httpUrlSummary.confirmationUrl
        };
        if (obj.data.vpcProperties && obj.data.vpcProperties.vpcId) {
            reqParams.cfn['VpcProperties'] = {
                'SubnetIds': obj.data.vpcProperties.subnetIds,
                'SecurityGroups': obj.data.vpcProperties.securityGroups,
                'VpcId': obj.data.vpcProperties.vpcId,
                'RoleArn': obj.data.vpcProperties.roleArn
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::TopicRuleDestination'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::TopicRuleDestination',
            'options': reqParams
        });
    } else if (obj.type == "iot.wirelessdestination") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Expression'] = obj.data.Expression;
        reqParams.cfn['ExpressionType'] = obj.data.ExpressionType;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoTWireless::Destination'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoTWireless::Destination',
            'options': reqParams
        });
    } else if (obj.type == "iot.wirelessdevice") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['DestinationName'] = obj.data.DestinationName;
        reqParams.cfn['Type'] = obj.data.Type;
        if (obj.data.LoRaWAN) {
            reqParams.cfn['LoRaWAN'] = {
                'DevEui': obj.data.LoRaWAN.DevEui,
                'DeviceProfileId': obj.data.LoRaWAN.DeviceProfileId,
                'ServiceProfileId': obj.data.LoRaWAN.ServiceProfileId,
                'OtaaV11': obj.data.LoRaWAN.OtaaV1_1,
                'OtaaV10X': obj.data.LoRaWAN.OtaaV1_0_x,
                'AbpV11': obj.data.LoRaWAN.AbpV1_1,
                'AbpV10X': obj.data.LoRaWAN.AbpV1_0_x
            };
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoTWireless::WirelessDevice'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoTWireless::WirelessDevice',
            'options': reqParams
        });
    } else if (obj.type == "iot.wirelessgateway") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['ThingName'] = obj.data.ThingName;
        reqParams.cfn['LoRaWAN'] = obj.data.LoRaWAN;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoTWireless::WirelessGateway'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoTWireless::WirelessGateway',
            'options': reqParams
        });
    } else if (obj.type == "iot.wirelessdeviceprofile") {
        reqParams.cfn['Name'] = obj.data.Name;
        if (obj.data.LoRaWAN) {
            reqParams.cfn['LoRaWAN'] = {
                'ClassBTimeout': obj.data.LoRaWAN.ClassBTimeout,
                'ClassCTimeout': obj.data.LoRaWAN.ClassCTimeout,
                'MacVersion': obj.data.LoRaWAN.MacVersion,
                'MaxDutyCycle': obj.data.LoRaWAN.MaxDutyCycle,
                'MaxEirp': obj.data.LoRaWAN.MaxEirp,
                'PingSlotDr': obj.data.LoRaWAN.PingSlotDr,
                'PingSlotFreq': obj.data.LoRaWAN.PingSlotFreq,
                'PingSlotPeriod': obj.data.LoRaWAN.PingSlotPeriod,
                'RegParamsRevision': obj.data.LoRaWAN.RegParamsRevision,
                'RfRegion': obj.data.LoRaWAN.RfRegion,
                'Supports32BitFCnt': obj.data.LoRaWAN.Supports32BitFCnt,
                'SupportsClassB': obj.data.LoRaWAN.SupportsClassB,
                'SupportsClassC': obj.data.LoRaWAN.SupportsClassC,
                'SupportsJoin': obj.data.LoRaWAN.SupportsJoin
            };
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoTWireless::DeviceProfile'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoTWireless::DeviceProfile',
            'options': reqParams
        });
    } else if (obj.type == "iot.wirelessserviceprofile") {
        reqParams.cfn['Name'] = obj.data.Name;
        if (obj.data.LoRaWAN) {
            reqParams.cfn['LoRaWAN'] = {
                'AddGwMetadata': obj.data.LoRaWAN.AddGwMetadata
            };
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoTWireless::ServiceProfile'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoTWireless::ServiceProfile',
            'options': reqParams
        });
    } else if (obj.type == "iot.accountauditconfiguration") {
        reqParams.cfn['AccountId'] = obj.data.accountId;
        if (obj.data.auditCheckConfigurations) {
            reqParams.cfn['AuditCheckConfigurations'] = {};
            for (var k of Object.keys(obj.data.auditCheckConfigurations)) {
                reqParams.cfn['AuditCheckConfigurations'][k.substr(0,1).toUpperCase() + k.substr(1)] = {
                    'Enabled': obj.data.auditCheckConfigurations[k]['enabled']
                };
            }
        }
        if (obj.data.auditNotificationTargetConfigurations) {
            for (var audit of Object.values(obj.data.auditNotificationTargetConfigurations)) {
                reqParams.cfn['AuditNotificationTargetConfigurations'] = {
                    'Sns': {
                        'Enabled': audit.enabled,
                        'RoleArn': audit.roleArn,
                        'TargetArn': audit.targetArn
                    }
                };
            }
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::AccountAuditConfiguration'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::AccountAuditConfiguration',
            'options': reqParams
        });
    } else if (obj.type == "iot.custommetric") {
        reqParams.cfn['MetricName'] = obj.data.metricName;
        reqParams.cfn['DisplayName'] = obj.data.displayName;
        reqParams.cfn['MetricType'] = obj.data.metricType;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::CustomMetric'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::CustomMetric',
            'options': reqParams
        });
    } else if (obj.type == "iot.dimension") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Type'] = obj.data.type;
        reqParams.cfn['StringValues'] = obj.data.stringValues;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::Dimension'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::Dimension',
            'options': reqParams
        });
    } else if (obj.type == "iot.mitigationaction") {
        reqParams.cfn['ActionName'] = obj.data.actionName;
        if (obj.data.actionParams) {
            reqParams.cfn['ActionParams'] = {};
            if (obj.data.actionParams.updateDeviceCertificateParams) {
                reqParams.cfn['ActionParams']['UpdateDeviceCertificateParams'] = {
                    'Action': obj.data.actionParams.updateDeviceCertificateParams.action
                };
            }
            if (obj.data.actionParams.updateCACertificateParams) {
                reqParams.cfn['ActionParams']['UpdateCACertificateParams'] = {
                    'Action': obj.data.actionParams.updateCACertificateParams.action
                };
            }
            if (obj.data.actionParams.addThingsToThingGroupParams) {
                reqParams.cfn['ActionParams']['AddThingsToThingGroupParams'] = {
                    'ThingGroupNames': obj.data.actionParams.addThingsToThingGroupParams.thingGroupNames,
                    'OverrideDynamicGroups': obj.data.actionParams.addThingsToThingGroupParams.overrideDynamicGroups
                };
            }
            if (obj.data.actionParams.replaceDefaultPolicyVersionParams) {
                reqParams.cfn['ActionParams']['ReplaceDefaultPolicyVersionParams'] = {
                    'TemplateName': obj.data.actionParams.replaceDefaultPolicyVersionParams.templateName
                };
            }
            if (obj.data.actionParams.enableIoTLoggingParams) {
                reqParams.cfn['ActionParams']['EnableIoTLoggingParams'] = {
                    'RoleArnForLogging': obj.data.actionParams.enableIoTLoggingParams.roleArnForLogging,
                    'LogLevel': obj.data.actionParams.enableIoTLoggingParams.logLevel
                };
            }
            if (obj.data.actionParams.publishFindingToSnsParams) {
                reqParams.cfn['ActionParams']['PublishFindingToSnsParams'] = {
                    'TopicArn': obj.data.actionParams.publishFindingToSnsParams.topicArn
                };
            }
        }
        reqParams.cfn['RoleArn'] = obj.data.roleArn;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::MitigationAction'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::MitigationAction',
            'options': reqParams
        });
    } else if (obj.type == "iot.scheduledaudit") {
        reqParams.cfn['ScheduledAuditName'] = obj.data.scheduledAuditName;
        reqParams.cfn['Frequency'] = obj.data.frequency;
        reqParams.cfn['DayOfWeek'] = obj.data.dayOfWeek;
        reqParams.cfn['DayOfMonth'] = obj.data.dayOfMonth;
        reqParams.cfn['TargetCheckNames'] = obj.data.targetCheckNames;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::ScheduledAudit'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::ScheduledAudit',
            'options': reqParams
        });
    } else if (obj.type == "iot.securityprofile") {
        reqParams.cfn['SecurityProfileName'] = obj.data.securityProfileName;
        reqParams.cfn['SecurityProfileDescription'] = obj.data.securityProfileDescription;
        if (obj.data.securityProfileTargets) {
            reqParams.cfn['TargetArns'] = [];
            obj.data.securityProfileTargets.forEach(target => {
                reqParams.cfn['TargetArns'].push(target.arn);
            });
        }
        if (obj.data.behaviors) {
            reqParams.cfn['Behaviors'] = [];
            obj.data.behaviors.forEach(behaviour => {
                var metricDimension = null;
                if (behaviour.metricDimension) {
                    metricDimension = {
                        'DimensionName': behaviour.metricDimension.dimensionName,
                        'Operator': behaviour.metricDimension.operator
                    };
                }
                var criteria = null;
                if (behaviour.criteria) {
                    var value = null;
                    if (behaviour.criteria.value) {
                        value = {
                            'Count': behaviour.criteria.value.count,
                            'Cidrs': behaviour.criteria.value.cidrs,
                            'Ports': behaviour.criteria.value.ports,
                            'Number': behaviour.criteria.value.number,
                            'Numbers': behaviour.criteria.value.numbers,
                            'Strings': behaviour.criteria.value.strings
                        };
                    }
                    var statisticalThreshold = null;
                    if (behaviour.criteria.statisticalThreshold) {
                        statisticalThreshold = {
                            'Statistic': behaviour.criteria.statisticalThreshold.statistic
                        };
                    }
                    criteria = {
                        'ComparisonOperator': behaviour.criteria.comparisonOperator,
                        'ConsecutiveDatapointsToAlarm': behaviour.criteria.consecutiveDatapointsToAlarm,
                        'ConsecutiveDatapointsToClear': behaviour.criteria.consecutiveDatapointsToClear,
                        'DurationSeconds': behaviour.criteria.durationSeconds,
                        'StatisticalThreshold': statisticalThreshold,
                        'Value': value
                    };
                }
                reqParams.cfn['Behaviors'].push({
                    'Name': behaviour.name,
                    'Metric': behaviour.metric,
                    'MetricDimension': metricDimension,
                    'Criteria': criteria
                });
            });
        }
        reqParams.cfn['AlertTargets'] = obj.data.alertTargets;
        if (obj.data.additionalMetricsToRetainV2) {
            reqParams.cfn['AdditionalMetricsToRetainV2'] = [];
            obj.data.additionalMetricsToRetainV2.forEach(metric => {
                var metricDimension = null;
                if (metric.metricDimension) {
                    metricDimension = {
                        'DimensionName': metric.metricDimension.dimensionName,
                        'Operator': metric.metricDimension.operator,
                    };
                }
                reqParams.cfn['AdditionalMetricsToRetainV2'].push({
                    'Metric': metric.metric,
                    'MetricDimension': metricDimension,
                });
            });
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::SecurityProfile'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::SecurityProfile',
            'options': reqParams
        });
    } else if (obj.type == "iot.wirelesspartneraccount") {
        reqParams.cfn['PartnerAccountId'] = obj.data.AmazonId;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoTWireless::PartnerAccount'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoTWireless::PartnerAccount',
            'options': reqParams,
            'returnValues': {
                'Arn': obj.data.Arn
            }
        });
    } else if (obj.type == "iot.wirelesspartneraccount") {
        reqParams.cfn['PartnerAccountId'] = obj.data.AmazonId;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoTWireless::PartnerAccount'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoTWireless::PartnerAccount',
            'options': reqParams,
            'returnValues': {
                'Arn': obj.data.Arn
            }
        });
    } else if (obj.type == "iot.wirelesstaskdefinition") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['AutoCreateTasks'] = obj.data.AutoCreateTasks;
        reqParams.cfn['Update'] = obj.data.Update;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoTWireless::TaskDefinition'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoTWireless::TaskDefinition',
            'options': reqParams,
            'returnValues': {
                'Arn': obj.data.Arn
            }
        });
    } else if (obj.type == "iot.deviceadvisorsuitedefinition") {
        reqParams.cfn['SuiteDefinitionConfiguration'] = obj.data.suiteDefinitionConfiguration;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoTCoreDeviceAdvisor::SuiteDefinition'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoTCoreDeviceAdvisor::SuiteDefinition',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.suiteDefinitionConfiguration.suiteDefinitionName,
                'GetAtt': {
                    'SuiteDefinitionArn': obj.data.suiteDefinitionArn,
                    'SuiteDefinitionId': obj.data.suiteDefinitionId,
                    'SuiteDefinitionVersion': obj.data.suiteDefinitionVersion
                }
            }
        });
    } else if (obj.type == "iot.fleetmetric") {
        reqParams.cfn['MetricName'] = obj.data.metricName;
        reqParams.cfn['IndexName'] = obj.data.indexName;
        reqParams.cfn['QueryString'] = obj.data.queryString;
        if (obj.data.aggregationType) {
            reqParams.cfn['AggregationType'] = {
                'Name': obj.data.aggregationType.name,
                'Values': obj.data.aggregationType.values
            };
        }
        reqParams.cfn['Period'] = obj.data.period;
        reqParams.cfn['AggregationField'] = obj.data.aggregationField;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['QueryVersion'] = obj.data.queryVersion;
        reqParams.cfn['Unit'] = obj.data.unit;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::FleetMetric'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::FleetMetric',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.metricName,
                'GetAtt': {
                    'MetricArn': obj.data.metricArn
                }
            }
        });
    } else if (obj.type == "iot.jobtemplate") {
        reqParams.cfn['JobTemplateId'] = obj.data.jobTemplateId;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['Document'] = obj.data.document;
        reqParams.cfn['DocumentSource'] = obj.data.documentSource;
        reqParams.cfn['PresignedUrlConfig'] = obj.data.presignedUrlConfig;
        reqParams.cfn['JobExecutionsRolloutConfig'] = obj.data.jobExecutionsRolloutConfig;
        reqParams.cfn['AbortConfig'] = obj.data.abortConfig;
        reqParams.cfn['TimeoutConfig'] = obj.data.timeoutConfig;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::JobTemplate'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::JobTemplate',
            'options': reqParams,
            'returnValues': {
                'Arn': obj.data.jobTemplateArn
            }
        });
    } else if (obj.type == "iot.logging") {
        reqParams.cfn['AccountId'] = obj.data.accountId;
        reqParams.cfn['DefaultLogLevel'] = obj.data.defaultLogLevel;
        reqParams.cfn['RoleArn'] = obj.data.roleArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::Logging'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::Logging',
            'options': reqParams
        });
    } else if (obj.type == "iot.resourcespecificlogging") {
        reqParams.cfn['TargetName'] = obj.data.logTarget.targetName;
        reqParams.cfn['TargetType'] = obj.data.logTarget.targetType;
        reqParams.cfn['LogLevel'] = obj.data.logLevel;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::ResourceSpecificLogging'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::ResourceSpecificLogging',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
