/* ========================================================================== */
// API Gateway
/* ========================================================================== */

sections.push({
    'category': 'Networking &amp; Content Delivery',
    'service': 'API Gateway',
    'resourcetypes': {
        'REST APIs': {
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
                        field: 'name',
                        title: 'Name',
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
        'V2 APIs': {
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
                        field: 'name',
                        title: 'Name',
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
        'Stages': {
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
                        field: 'apiid',
                        title: 'API ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'deploymentid',
                        title: 'Deployment ID',
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
        'Deployments': {
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
                        field: 'apiid',
                        title: 'API ID',
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
        'Resources': {
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
                        field: 'apiid',
                        title: 'API ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'parentid',
                        title: 'Parent ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'path',
                        title: 'Path',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Methods': {
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
                        title: 'HTTP Method',
                        field: 'httpmethod',
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
                        field: 'apiid',
                        title: 'API ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'resourceid',
                        title: 'Resource ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'httpmethod',
                        title: 'HTTP Method',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Routes': {
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
                        field: 'key',
                        title: 'Route Key',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'apiid',
                        title: 'API ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'target',
                        title: 'Target',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Route Responses': {
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
                        field: 'apiid',
                        title: 'API ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'routeid',
                        title: 'Route ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'key',
                        title: 'Key',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Integrations': {
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
                        colspan: 5,
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
                        field: 'key',
                        title: 'Key',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'method',
                        title: 'Method',
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
                    },
                    {
                        field: 'apiid',
                        title: 'API ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Integration Responses': {
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
                        field: 'apiid',
                        title: 'API ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'integrationid',
                        title: 'Integration ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'key',
                        title: 'Key',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'API Mappings': {
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
                        field: 'apiid',
                        title: 'API ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'stage',
                        title: 'Stage',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'domainname',
                        title: 'Domain Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Account': {
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
                        title: 'CloudWatch Role ARN',
                        field: 'rolearn',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                []
            ]
        },
        'API Keys': {
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
                        field: 'name',
                        title: 'Name',
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
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
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
                        field: 'apiid',
                        title: 'API ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'name',
                        title: 'Name',
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
        'Base Path Mappings': {
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
                        title: 'Base Path',
                        field: 'basepath',
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
                        field: 'restapiid',
                        title: 'REST API ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'stage',
                        title: 'Stage',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Client Certificates': {
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
        'Documentation Parts': {
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
                        field: 'apiid',
                        title: 'API ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Documentation Versions': {
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
                        title: 'REST API ID',
                        field: 'restapiid',
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
                        field: 'version',
                        title: 'Version',
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
                    }
                ]
            ]
        },
        'Domain Names': {
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
                        title: 'Domain Name',
                        field: 'domainname',
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
                        field: 'certificatename',
                        title: 'Certificate Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'regionaldomainname',
                        title: 'Regional Domain Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'regionalcertificatename',
                        title: 'Regional Certificate Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Gateway Responses': {
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
                        field: 'apiid',
                        title: 'API ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'statuscode',
                        title: 'Status Code',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Models': {
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
                        field: 'name',
                        title: 'Name',
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
                        field: 'contenttype',
                        title: 'Content Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Request Validators': {
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
                        field: 'apiid',
                        title: 'API ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'validaterequestbody',
                        title: 'Validate Request Body',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'validaterequestparameters',
                        title: 'Validate Request Parameters',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Usage Plans': {
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
                        field: 'name',
                        title: 'Name',
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
                    }
                ]
            ]
        },
        'Usage Plan Keys': {
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
                        field: 'name',
                        title: 'Name',
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
        'VPC Links': {
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
                        field: 'name',
                        title: 'Name',
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
                    }
                ]
            ]
        }
    }
});

async function updateDatatableNetworkingAndContentDeliveryAPIGateway() {
    blockUI('#section-networkingandcontentdelivery-apigateway-restapis-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-stages-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-deployments-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-resources-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-methods-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-models-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-authorizers-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-v2apis-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-routes-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-routeresponses-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-integrations-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-integrationresponses-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-apimappings-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-domainnames-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-clientcertificates-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-apikeys-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-vpclinks-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-usageplans-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-usageplankeys-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-basepathmappings-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-gatewayresponses-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-documentationparts-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-documentationversions-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-requestvalidators-datatable');
    blockUI('#section-networkingandcontentdelivery-apigateway-account-datatable');

    $('#section-networkingandcontentdelivery-apigateway-restapis-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-v2apis-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-stages-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-deployments-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-resources-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-methods-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-models-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-authorizers-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-v2apis-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-routes-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-routeresponses-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-integrations-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-integrationresponses-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-apimappings-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-domainnames-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-clientcertificates-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-apikeys-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-vpclinks-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-usageplans-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-usageplankeys-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-basepathmappings-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-gatewayresponses-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-documentationparts-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-documentationversions-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-requestvalidators-datatable').deferredBootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-account-datatable').deferredBootstrapTable('removeAll');

    // V1
    await sdkcall("APIGateway", "getAccount", {
        // no params
    }, true).then((data) => {
        if (
            (data.throttleSettings && data.throttleSettings.burstLimit != 5000) ||
            (data.throttleSettings && data.throttleSettings.rateLimit != 10000) ||
            (data.features && data.features.length != 1) ||
            (data.features && data.features[0] != "UsagePlans")
        ) {
            $('#section-networkingandcontentdelivery-apigateway-account-datatable').deferredBootstrapTable('append', [{
                f2id: data.cloudwatchRoleArn || (region + "-account"),
                f2type: 'apigateway.account',
                f2data: data,
                f2region: region,
                cloudwatchrolearn: data.cloudwatchRoleArn
            }]);
        }

        unblockUI('#section-networkingandcontentdelivery-apigateway-account-datatable');
    });

    await sdkcall("APIGateway", "getClientCertificates", {
        // no params
    }, true).then((data) => {
        data.items.forEach(clientCertificate => {
            $('#section-networkingandcontentdelivery-apigateway-clientcertificates-datatable').deferredBootstrapTable('append', [{
                f2id: clientCertificate.clientCertificateId,
                f2type: 'apigateway.clientcertificate',
                f2data: clientCertificate,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/apigateway/home?region=' + region + '#/client-certificates/' + clientCertificate.clientCertificateId,
                id: clientCertificate.clientCertificateId,
                description: clientCertificate.description
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-apigateway-clientcertificates-datatable');
    });

    await sdkcall("APIGateway", "getApiKeys", {
        // no params
    }, true).then((data) => {
        data.items.forEach(apiKey => {
            $('#section-networkingandcontentdelivery-apigateway-apikeys-datatable').deferredBootstrapTable('append', [{
                f2id: apiKey.id,
                f2type: 'apigateway.apikey',
                f2data: apiKey,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/apigateway/home?region=' + region + '#/api-keys/' + apiKey.id,
                name: apiKey.name,
                id: apiKey.id,
                description: apiKey.description,
                enabled: apiKey.enabled
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-apigateway-apikeys-datatable');
    });

    // V1
    await sdkcall("APIGateway", "getVpcLinks", {
        // no params
    }, true).then((data) => {
        data.items.forEach(vpcLink => {
            $('#section-networkingandcontentdelivery-apigateway-vpclinks-datatable').deferredBootstrapTable('append', [{
                f2id: vpcLink.id,
                f2type: 'apigateway.vpclink',
                f2data: vpcLink,
                f2region: region,
                name: vpcLink.name,
                id: vpcLink.id,
                description: vpcLink.description
            }]);
        });
    });

    // V2
    await sdkcall("ApiGatewayV2", "getVpcLinks", {
        // no params
    }, false).then((data) => {
        data.Items.forEach(vpcLink => {
            $('#section-networkingandcontentdelivery-apigateway-vpclinks-datatable').deferredBootstrapTable('append', [{
                f2id: vpcLink.VpcLinkId,
                f2type: 'apigatewayv2.vpclink',
                f2data: vpcLink,
                f2region: region,
                name: vpcLink.Name,
                id: vpcLink.VpcLinkId,
                description: ''
            }]);
        });
    }).catch(() => { });

    // V1
    await sdkcall("APIGateway", "getUsagePlans", {
        // no params
    }, true).then(async (data) => {
        await Promise.all(data.items.map(usagePlan => {
            $('#section-networkingandcontentdelivery-apigateway-usageplans-datatable').deferredBootstrapTable('append', [{
                f2id: usagePlan.id,
                f2type: 'apigateway.usageplan',
                f2data: usagePlan,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/apigateway/home?region=' + region + '#/usage-plans/' + usagePlan.id,
                name: usagePlan.name,
                id: usagePlan.id,
                description: usagePlan.description
            }]);

            return sdkcall("APIGateway", "getUsagePlanKeys", {
                usagePlanId: usagePlan.id
            }, true).then((data) => {
                data.items.forEach(usagePlanKey => {
                    $('#section-networkingandcontentdelivery-apigateway-usageplankeys-datatable').deferredBootstrapTable('append', [{
                        f2id: usagePlanKey.id,
                        f2type: 'apigateway.usageplankey',
                        f2data: usagePlanKey,
                        f2region: region,
                        name: usagePlanKey.name,
                        id: usagePlanKey.id,
                        type: usagePlanKey.type
                    }]);
                });
            });
        }));

        unblockUI('#section-networkingandcontentdelivery-apigateway-usageplans-datatable');
        unblockUI('#section-networkingandcontentdelivery-apigateway-usageplankeys-datatable');
    });

    await sdkcall("APIGateway", "getRestApis", {
        // no params
    }, true).then(async (restapis) => {
        await sdkcall("APIGateway", "getDomainNames", {
            // no params
        }, true).then(async (data) => {
            await Promise.all(data.items.map(domainName => {
                $('#section-networkingandcontentdelivery-apigateway-domainnames-datatable').deferredBootstrapTable('append', [{
                    f2id: domainName.domainName,
                    f2type: 'apigateway.domainname',
                    f2data: domainName,
                    f2region: region,
                    domainname: domainName.domainName,
                    certificatename: domainName.certificateName,
                    regionaldomainname: domainName.regionalDomainName,
                    regionalcertificatename: domainName.regionalCertificateName
                }]);
    
                return sdkcall("APIGateway", "getBasePathMappings", {
                    domainName: domainName.domainName
                }, true).then((data) => {
                    data.items.forEach(basePathMapping => {
                        basePathMapping['domainName'] = domainName.domainName;

                        restapis.items.forEach(restapi => {
                            if (restapi.id == basePathMapping.restApiId) {
                                $('#section-networkingandcontentdelivery-apigateway-basepathmappings-datatable').deferredBootstrapTable('append', [{
                                    f2id: basePathMapping.basePath,
                                    f2type: 'apigateway.basepathmapping',
                                    f2data: basePathMapping,
                                    f2region: region,
                                    basepath: basePathMapping.basePath,
                                    restapiid: basePathMapping.restApiId,
                                    stage: basePathMapping.stage
                                }]);
                            }
                        });
                    });
                });
            }));
    
            unblockUI('#section-networkingandcontentdelivery-apigateway-basepathmappings-datatable');
        });

        await Promise.all(restapis.items.map(async (api) => {
            var rootResourceId = null;

            await Promise.all([
                sdkcall("APIGateway", "getRequestValidators", {
                    restApiId: api.id
                }, true).then((data) => {
                    if (data.item) {
                        data.item.forEach(requestValidator => {
                            requestValidator['restApiId'] = api.id;
                            $('#section-networkingandcontentdelivery-apigateway-requestvalidators-datatable').deferredBootstrapTable('append', [{
                                f2id: requestValidator.id,
                                f2type: 'apigateway.requestvalidator',
                                f2data: requestValidator,
                                f2region: region,
                                apiid: api.apiId,
                                id: requestValidator.id,
                                name: requestValidator.name,
                                validaterequestbody: requestValidator.validateRequestBody,
                                validaterequestparameters: requestValidator.validateRequestParameters
                            }]);
                        });
                    }

                    unblockUI('#section-networkingandcontentdelivery-apigateway-requestvalidators-datatable');
                }),
                sdkcall("APIGateway", "getDocumentationParts", {
                    restApiId: api.id
                }, true).then((data) => {
                    if (data.item) {
                        data.item.forEach(documentationPart => {
                            documentationPart['restApiId'] = api.id;
                            $('#section-networkingandcontentdelivery-apigateway-documentationparts-datatable').deferredBootstrapTable('append', [{
                                f2id: documentationPart.id,
                                f2type: 'apigateway.documentationpart',
                                f2data: documentationPart,
                                f2region: region,
                                apiid: api.id,
                                id: documentationPart.id
                            }]);
                        });
                    }

                    unblockUI('#section-networkingandcontentdelivery-apigateway-documentationparts-datatable');
                }),
                sdkcall("APIGateway", "getDocumentationVersions", {
                    restApiId: api.id
                }, true).then((data) => {
                    if (data.item) {
                        data.item.forEach(documentationVersion => {
                            documentationVersion['restApiId'] = api.id;
                            $('#section-networkingandcontentdelivery-apigateway-documentationversions-datatable').deferredBootstrapTable('append', [{
                                f2id: documentationVersion.version,
                                f2type: 'apigateway.documentationversion',
                                f2data: documentationVersion,
                                f2region: region,
                                restapiid: api.id,
                                version: documentationVersion.version,
                                description: documentationVersion.description
                            }]);
                        });
                    }

                    unblockUI('#section-networkingandcontentdelivery-apigateway-documentationversions-datatable');
                }),
                sdkcall("APIGateway", "getGatewayResponses", {
                    restApiId: api.id
                }, true).then((data) => {
                    if (data.item) {
                        data.item.forEach(gatewayResponse => {
                            gatewayResponse['restApiId'] = api.id;
                            $('#section-networkingandcontentdelivery-apigateway-gatewayresponses-datatable').deferredBootstrapTable('append', [{
                                f2id: gatewayResponse.responseType,
                                f2type: 'apigateway.gatewayresponse',
                                f2data: gatewayResponse,
                                f2region: region,
                                apiid: api.id,
                                responsetype: gatewayResponse.responseType,
                                statuscode: gatewayResponse.statusCode
                            }]);
                        });
                    }

                    unblockUI('#section-networkingandcontentdelivery-apigateway-gatewayresponses-datatable');
                }),
                sdkcall("APIGateway", "getStages", {
                    restApiId: api.id
                }, true).then((data) => {
                    data.item.forEach(stage => {
                        stage['restApiId'] = api.id;
                        $('#section-networkingandcontentdelivery-apigateway-stages-datatable').deferredBootstrapTable('append', [{
                            f2id: stage.stageName,
                            f2type: 'apigateway.stage',
                            f2data: stage,
                            f2region: region,
                            name: stage.stageName,
                            apiid: api.id,
                            deploymentid: stage.deploymentId,
                            description: stage.description,
                            tracingenabled: stage.tracingEnabled,
                            creationtime: stage.createdDate
                        }]);
                    });
                }),
                sdkcall("APIGateway", "getDeployments", {
                    restApiId: api.id
                }, true).then((data) => {
                    data.items.forEach(deployment => {
                        deployment['restApiId'] = api.id;
                        $('#section-networkingandcontentdelivery-apigateway-deployments-datatable').deferredBootstrapTable('append', [{
                            f2id: deployment.id,
                            f2type: 'apigateway.deployment',
                            f2data: deployment,
                            f2region: region,
                            id: deployment.id,
                            apiid: api.id,
                            description: deployment.description,
                            creationtime: deployment.createdDate
                        }]);
                    });
                }),
                sdkcall("APIGateway", "getResources", {
                    restApiId: api.id,
                    limit: 500
                }, true).then((data) => {
                    if (data.items) {
                        data.items.forEach(async (resource) => {
                            if (resource.resourceMethods) {
                                await Promise.all(Object.keys(resource.resourceMethods).map(resourceMethod => {
                                    return sdkcall("APIGateway", "getMethod", {
                                        httpMethod: resourceMethod,
                                        resourceId: resource.id,
                                        restApiId: api.id
                                    }, true).then((data) => {
                                        data['restApiId'] = api.id;
                                        data['resourceId'] = resource.id;
                                        $('#section-networkingandcontentdelivery-apigateway-methods-datatable').deferredBootstrapTable('append', [{
                                            f2id: resource.id + "-" + data.httpMethod,
                                            f2type: 'apigateway.method',
                                            f2data: data,
                                            f2region: region,
                                            apiid: api.id,
                                            resourceid: resource.id,
                                            httpmethod: data.httpMethod
                                        }]);
                                    });
                                }));
                            }

                            resource['restApiId'] = api.id;

                            if (resource.path != "/") {
                                $('#section-networkingandcontentdelivery-apigateway-resources-datatable').deferredBootstrapTable('append', [{
                                    f2id: resource.id,
                                    f2type: 'apigateway.resource',
                                    f2data: resource,
                                    f2region: region,
                                    apiid: api.id,
                                    id: resource.id,
                                    parentid: resource.parentId,
                                    path: resource.path
                                }]);
                            } else {
                                rootResourceId = resource.id;
                            }
                        });
                    }

                    unblockUI('#section-networkingandcontentdelivery-apigateway-methods-datatable');
                    unblockUI('#section-networkingandcontentdelivery-apigateway-resources-datatable');
                }),
                sdkcall("APIGateway", "getModels", {
                    restApiId: api.id
                }, true).then((data) => {
                    data.items.forEach(model => {
                        model['restApiId'] = api.id;
                        $('#section-networkingandcontentdelivery-apigateway-models-datatable').deferredBootstrapTable('append', [{
                            f2id: model.id,
                            f2type: 'apigateway.model',
                            f2data: model,
                            f2region: region,
                            id: model.id,
                            apiid: api.id,
                            name: model.name,
                            description: model.description,
                            contenttype: model.contentType
                        }]);
                    });
                }),
                sdkcall("APIGateway", "getAuthorizers", {
                    restApiId: api.id
                }, true).then((data) => {
                    data.items.forEach(authorizer => {
                        authorizer['restApiId'] = api.id;
                        $('#section-networkingandcontentdelivery-apigateway-authorizers-datatable').deferredBootstrapTable('append', [{
                            f2id: authorizer.id,
                            f2type: 'apigateway.authorizer',
                            f2data: authorizer,
                            f2region: region,
                            name: authorizer.name,
                            id: authorizer.id,
                            apiid: api.id,
                            type: authorizer.type
                        }]);
                    });
                })
            ]);

            api['rootResourceId'] = rootResourceId;

            $('#section-networkingandcontentdelivery-apigateway-restapis-datatable').deferredBootstrapTable('append', [{
                f2id: api.id,
                f2type: 'apigateway.restapi',
                f2data: api,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/apigateway/home?region=' + region + '#/apis/' + api.id,
                name: api.name,
                id: api.id,
                description: api.description,
                version: api.version
            }]);

            return Promise.resolve();
        }));

        unblockUI('#section-networkingandcontentdelivery-apigateway-restapis-datatable');
    });

    // V2
    await sdkcall("ApiGatewayV2", "getApis", {
        // no params
    }, true).then(async (data) => {
        await Promise.all(data.Items.map(api => {
            $('#section-networkingandcontentdelivery-apigateway-v2apis-datatable').deferredBootstrapTable('append', [{
                f2id: api.ApiId,
                f2type: 'apigatewayv2.api',
                f2data: api,
                f2region: region,
                name: api.Name,
                id: api.ApiId,
                description: api.Description,
                version: api.Version
            }]);

            return Promise.all([
                sdkcall("ApiGatewayV2", "getStages", {
                    ApiId: api.ApiId
                }, true).then((data) => {
                    data.Items.forEach(stage => {
                        stage['ApiId'] = api.ApiId;
                        $('#section-networkingandcontentdelivery-apigateway-stages-datatable').deferredBootstrapTable('append', [{
                            f2id: stage.StageName,
                            f2type: 'apigatewayv2.stage',
                            f2data: stage,
                            f2region: region,
                            name: stage.StageName,
                            apiid: api.ApiId,
                            deploymentid: api.DeploymentId,
                            description: api.Description,
                            creationtime: api.CreatedDate
                        }]);
                    });
                }),
                sdkcall("ApiGatewayV2", "getDeployments", {
                    ApiId: api.ApiId
                }, true).then((data) => {
                    data.Items.forEach(deployment => {
                        deployment['ApiId'] = api.ApiId;
                        $('#section-networkingandcontentdelivery-apigateway-deployments-datatable').deferredBootstrapTable('append', [{
                            f2id: deployment.DeploymentId,
                            f2type: 'apigatewayv2.deployment',
                            f2data: deployment,
                            f2region: region,
                            id: deployment.DeploymentId,
                            apiid: api.ApiId,
                            description: deployment.Description,
                            creationtime: deployment.CreatedDate
                        }]);
                    });
                }),
                sdkcall("ApiGatewayV2", "getModels", {
                    ApiId: api.ApiId
                }, true).then((data) => {
                    data.Items.forEach(model => {
                        model['ApiId'] = api.ApiId;
                        $('#section-networkingandcontentdelivery-apigateway-models-datatable').deferredBootstrapTable('append', [{
                            f2id: model.ModelId,
                            f2type: 'apigatewayv2.model',
                            f2data: model,
                            f2region: region,
                            name: model.Name,
                            id: model.ModelId,
                            description: model.Description,
                            contenttype: model.ContentType
                        }]);
                    });
                }),
                sdkcall("ApiGatewayV2", "getAuthorizers", {
                    ApiId: api.ApiId
                }, true).then((data) => {
                    data.Items.forEach(authorizer => {
                        authorizer['ApiId'] = api.ApiId;
                        $('#section-networkingandcontentdelivery-apigateway-authorizers-datatable').deferredBootstrapTable('append', [{
                            f2id: authorizer.AuthorizerId,
                            f2type: 'apigatewayv2.authorizer',
                            f2data: authorizer,
                            f2region: region,
                            name: authorizer.Name,
                            apiid: api.ApiId,
                            id: authorizer.AuthorizerId,
                            type: authorizer.AuthorizerType
                        }]);
                    });
                }),
                sdkcall("ApiGatewayV2", "getRoutes", {
                    ApiId: api.ApiId
                }, true).then(async (data) => {
                    await Promise.all(data.Items.map(route => {
                        route['ApiId'] = api.ApiId;
                        $('#section-networkingandcontentdelivery-apigateway-routes-datatable').deferredBootstrapTable('append', [{
                            f2id: route.RouteId,
                            f2type: 'apigatewayv2.route',
                            f2data: route,
                            f2region: region,
                            key: route.RouteKey,
                            id: route.RouteId,
                            apiid: api.ApiId,
                            target: route.Target
                        }]);

                        return sdkcall("ApiGatewayV2", "getRouteResponses", {
                            ApiId: api.ApiId,
                            RouteId: route.RouteId
                        }, true).then((data) => {
                            data.Items.forEach(routeResponse => {
                                routeResponse['ApiId'] = api.ApiId;
                                routeResponse['RouteId'] = route.RouteId;
                                $('#section-networkingandcontentdelivery-apigateway-routes-datatable').deferredBootstrapTable('append', [{
                                    f2id: routeResponse.RouteResponseId,
                                    f2type: 'apigatewayv2.routeresponse',
                                    f2data: routeResponse,
                                    f2region: region,
                                    key: routeResponse.RouteResponseKey,
                                    id: routeResponse.RouteResponseId,
                                    apiid: api.ApiId,
                                    routeid: route.RouteId
                                }]);
                            });
                        });
                    }));
                }),
                sdkcall("ApiGatewayV2", "getIntegrations", {
                    ApiId: api.ApiId
                }, true).then(async (data) => {
                    await Promise.all(data.Items.map(integration => {
                        integration['ApiId'] = api.ApiId;
                        $('#section-networkingandcontentdelivery-apigateway-integrations-datatable').deferredBootstrapTable('append', [{
                            f2id: integration.IntegrationId,
                            f2type: 'apigatewayv2.integration',
                            f2data: integration,
                            f2region: region,
                            key: integration.IntegrationKey,
                            apiid: api.ApiId,
                            description: integration.Description,
                            id: integration.IntegrationId,
                            method: integration.IntegrationMethod,
                            type: integration.IntegrationType
                        }]);

                        return sdkcall("ApiGatewayV2", "getIntegrationResponses", {
                            ApiId: api.ApiId,
                            IntegrationId: integration.IntegrationId
                        }, true).then((data) => {
                            data.Items.forEach(integrationResponse => {
                                integrationResponse['ApiId'] = api.ApiId;
                                integrationResponse['IntegrationId'] = integration.IntegrationId;
                                $('#section-networkingandcontentdelivery-apigateway-integrations-datatable').deferredBootstrapTable('append', [{
                                    f2id: integrationResponse.IntegrationResponseId,
                                    f2type: 'apigatewayv2.integrationresponse',
                                    f2data: integrationResponse,
                                    f2region: region,
                                    id: integrationResponse.IntegrationResponseId,
                                    apiid: api.ApiId,
                                    integrationid: integration.IntegrationId,
                                    key: integrationResponse.IntegrationResponseKey
                                }]);
                            });
                        });
                    }));
                })
            ]);
        }));

        await sdkcall("ApiGatewayV2", "getDomainNames", {
            // no params
        }, true).then(async (data) => {
            await Promise.all(data.Items.map(domainName => {
                var certificatename = null;
                if (domainName.DomainNameConfigurations && domainName.DomainNameConfigurations.length) {
                    certificatename = domainName.DomainNameConfigurations[0].CertificateName;
                }

                $('#section-networkingandcontentdelivery-apigateway-domainnames-datatable').deferredBootstrapTable('append', [{
                    f2id: domainName.DomainName,
                    f2type: 'apigatewayv2.domainname',
                    f2data: domainName,
                    f2region: region,
                    domainname: domainName.DomainName,
                    certificatename: certificatename,
                    regionaldomainname: null,
                    regionalcertificatename: null
                }]);

                return sdkcall("ApiGatewayV2", "getApiMappings", {
                    DomainName: domainName.DomainName
                }, true).then((data) => {
                    data.Items.forEach(apimapping => {
                        apimapping['DomainName'] = domainName.DomainName;

                        $('#section-networkingandcontentdelivery-apigateway-apimappings-datatable').deferredBootstrapTable('append', [{
                            f2id: apimapping.ApiMappingId,
                            f2type: 'apigatewayv2.apimapping',
                            f2data: apimapping,
                            f2region: region,
                            id: apimapping.ApiMappingId,
                            apiid: apimapping.ApiId,
                            stage: apimapping.Stage,
                            domainname: domainName.DomainName
                        }]);
                    });
                });
            }));
        });
    });

    unblockUI('#section-networkingandcontentdelivery-apigateway-stages-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-deployments-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-v2apis-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-integrations-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-integrationresponses-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-apimappings-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-routes-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-routeresponses-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-models-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-authorizers-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-domainnames-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-vpclinks-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "apigateway.restapi") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.tf['name'] = obj.data.name;
        reqParams.cfn['MinimumCompressionSize'] = obj.data.minimumCompressionSize;
        reqParams.tf['minimum_compression_size'] = obj.data.minimumCompressionSize;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.tf['description'] = obj.data.description;
        reqParams.cfn['ApiKeySourceType'] = obj.data.apiKeySource;
        reqParams.tf['api_key_source'] = obj.data.apiKeySource;
        reqParams.cfn['Policy'] = obj.data.policy;
        reqParams.tf['policy'] = obj.data.policy;
        reqParams.cfn['BinaryMediaTypes'] = obj.data.binaryMediaTypes;
        reqParams.tf['binary_media_types'] = obj.data.binaryMediaTypes;
        if (obj.data.endpointConfiguration) {
            reqParams.cfn['EndpointConfiguration'] = {
                'Types': obj.data.endpointConfiguration.types,
                'VpcEndpointIds': obj.data.endpointConfiguration.vpcEndpointIds
            };
            reqParams.tf['endpoint_configuration'] = {
                'types': obj.data.endpointConfiguration.types
            };
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            reqParams.tf['Tags'] = {};
            Object.keys(obj.data.tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.tags[tagKey]
                });
            });
        }

        /*
        SKIPPED: Body
        SKIPPED: BodyS3Location
        SKIPPED: CloneFrom
        SKIPPED: FailOnWarnings
        SKIPPED: Parameters
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::RestApi'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::RestApi',
            'terraformType': 'aws_api_gateway_rest_api',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.id,
                'GetAtt': {
                    'RootResourceId': obj.data.rootResourceId
                },
                'Import': {
                    'RestApiId': obj.data.id
                }
            }
        });
    } else if (obj.type == "apigateway.stage") {
        reqParams.cfn['StageName'] = obj.data.stageName;
        reqParams.tf['stage_name'] = obj.data.stageName;
        reqParams.cfn['DeploymentId'] = obj.data.deploymentId;
        reqParams.tf['deployment_id'] = obj.data.deploymentId;
        reqParams.cfn['RestApiId'] = obj.data.restApiId;
        reqParams.tf['rest_api_id'] = obj.data.restApiId;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.tf['description'] = obj.data.description;
        reqParams.cfn['CacheClusterEnabled'] = obj.data.cacheClusterEnabled;
        reqParams.tf['cache_cluster_enabled'] = obj.data.cacheClusterEnabled;
        reqParams.cfn['CacheClusterSize'] = obj.data.cacheClusterSize;
        reqParams.tf['cache_cluster_size'] = obj.data.cacheClusterSize;
        if (obj.data.methodSettings) {
            reqParams.cfn['MethodSettings'] = [];
            Object.keys(obj.data.methodSettings).forEach(fullpath => {
                var methodSetting = obj.data.methodSettings[fullpath];
                var httpMethod = fullpath.split("/").pop();
                var resourcePath = "/" + fullpath.split("/").slice(0, -1).join("/");

                reqParams.cfn['MethodSettings'].push({
                    'CacheDataEncrypted': methodSetting.cacheDataEncrypted,
                    'CacheTtlInSeconds': methodSetting.cacheTtlInSeconds,
                    'CachingEnabled': methodSetting.cachingEnabled,
                    'DataTraceEnabled': methodSetting.dataTraceEnabled,
                    'HttpMethod': httpMethod,
                    'LoggingLevel': methodSetting.loggingLevel,
                    'MetricsEnabled': methodSetting.metricsEnabled,
                    'ResourcePath': resourcePath,
                    'ThrottlingBurstLimit': methodSetting.throttlingBurstLimit,
                    'ThrottlingRateLimit': methodSetting.throttlingRateLimit
                });
            });
        }
        reqParams.cfn['Variables'] = obj.data.variables;
        reqParams.tf['variables'] = obj.data.variables;
        reqParams.cfn['DocumentationVersion'] = obj.data.documentationVersion;
        reqParams.tf['documentation_version'] = obj.data.documentationVersion;
        if (obj.data.accessLogSettings) {
            reqParams.cfn['AccessLogSetting'] = {
                'Format': obj.data.format,
                'DestinationArn': obj.data.destinationArn
            };
            reqParams.tf['access_log_settings'] = {
                'format': obj.data.format,
                'destination_arn': obj.data.destinationArn
            };
        }
        if (obj.data.canarySettings) {
            reqParams.cfn['CanarySetting'] = {
                'DeploymentId': obj.data.canarySettings.deploymentId,
                'PercentTraffic': obj.data.canarySettings.percentTraffic,
                'StageVariableOverrides': obj.data.canarySettings.stageVariableOverrides,
                'UseStageCache': obj.data.canarySettings.useStageCache
            };
        }
        reqParams.cfn['TracingEnabled'] = obj.data.tracingEnabled;
        reqParams.tf['xray_tracing_enabled'] = obj.data.tracingEnabled;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            reqParams.tf['Tags'] = {};
            Object.keys(obj.data.tags).forEach(tagKey => {
                if (!tagKey.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': tagKey,
                        'Value': obj.data.tags[tagKey]
                    });
                }
            });
        }
        reqParams.cfn['ClientCertificateId'] = obj.data.clientCertificateId;
        reqParams.tf['client_certificate_id'] = obj.data.clientCertificateId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::Stage'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::Stage',
            'terraformType': 'aws_api_gateway_stage',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.stageName,
                'Import': {
                    'RestApiId': obj.data.restApiId,
                    'StageName': obj.data.stageName
                }
            }
        });
    } else if (obj.type == "apigateway.deployment") {
        reqParams.cfn['RestApiId'] = obj.data.restApiId;
        reqParams.tf['rest_api_id'] = obj.data.restApiId;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.tf['description'] = obj.data.description;

        /*
        TODO:
        DeploymentCanarySettings: DeploymentCanarySettings
        StageDescription: StageDescription
        StageName: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::Deployment'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::Deployment',
            'terraformType': 'aws_api_gateway_deployment',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.id,
                'Import': {
                    'RestApiId': obj.data.restApiId,
                    'DeploymentId': obj.data.id
                }
            }
        });
    } else if (obj.type == "apigateway.resource") {
        reqParams.cfn['RestApiId'] = obj.data.restApiId;
        reqParams.tf['rest_api_id'] = obj.data.restApiId;
        reqParams.cfn['PathPart'] = obj.data.pathPart;
        reqParams.tf['path_part'] = obj.data.pathPart;
        if (obj.data.parentId) {
            reqParams.cfn['ParentId'] = obj.data.parentId;
            reqParams.tf['parent_id'] = obj.data.parentId;
        } else {
            reqParams.cfn['ParentId'] = obj.data.rootResourceId;
            reqParams.tf['parent_id'] = obj.data.rootResourceId;
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::Resource'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::Resource',
            'terraformType': 'aws_api_gateway_resource',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.id,
                'Import': {
                    'RestApiId': obj.data.restApiId,
                    'ResourceId': obj.data.id
                }
            }
        });
    } else if (obj.type == "apigateway.model") {
        reqParams.cfn['RestApiId'] = obj.data.restApiId;
        reqParams.tf['rest_api_id'] = obj.data.restApiId;
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.tf['name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.tf['description'] = obj.data.description;
        reqParams.cfn['Schema'] = obj.data.schema;
        reqParams.tf['schema'] = obj.data.schema;
        reqParams.cfn['ContentType'] = obj.data.contentType;
        reqParams.tf['content_type'] = obj.data.contentType;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::Model'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::Model',
            'terraformType': 'aws_api_gateway_model',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.name,
                'Import': {
                    'RestApiId': obj.data.restApiId,
                    'Name': obj.data.name
                }
            }
        });
    } else if (obj.type == "apigateway.authorizer") {
        reqParams.cfn['RestApiId'] = obj.data.restApiId;
        reqParams.tf['rest_api_id'] = obj.data.restApiId;
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.tf['name'] = obj.data.name;
        reqParams.cfn['Type'] = obj.data.type;
        reqParams.tf['type'] = obj.data.type;
        reqParams.cfn['ProviderARNs'] = obj.data.providerARNs;
        reqParams.tf['provider_arns'] = obj.data.providerARNs;
        reqParams.cfn['AuthType'] = obj.data.authType;
        reqParams.tf['AuthType'] = obj.data.authType;
        reqParams.cfn['AuthorizerUri'] = obj.data.authorizerUri;
        reqParams.tf['authorizer_uri'] = obj.data.authorizerUri;
        reqParams.cfn['AuthorizerCredentials'] = obj.data.authorizerCredentials;
        reqParams.tf['authorizer_credentials'] = obj.data.authorizerCredentials;
        reqParams.cfn['IdentitySource'] = obj.data.identitySource;
        reqParams.tf['identity_source'] = obj.data.identitySource;
        if (obj.data.identityValidationExpression) {
            reqParams.cfn['IdentityValidationExpression'] = obj.data.identityValidationExpression.replace(/\\/g, `\\\\`);
            reqParams.tf['identity_validation_expression'] = obj.data.identityValidationExpression.replace(/\\/g, `\\\\`);
        }
        reqParams.cfn['AuthorizerResultTtlInSeconds'] = obj.data.authorizerResultTtlInSeconds;
        reqParams.tf['authorizer_result_ttl_in_seconds'] = obj.data.authorizerResultTtlInSeconds;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::Authorizer'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::Authorizer',
            'terraformType': 'aws_api_gateway_authorizer',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.id,
                'Import': {
                    'RestApiId': obj.data.restApiId,
                    'AuthorizerId': obj.data.id
                }
            }
        });
    } else if (obj.type == "apigateway.method") {
        reqParams.cfn['RestApiId'] = obj.data.restApiId;
        reqParams.tf['rest_api_id'] = obj.data.restApiId;
        reqParams.cfn['ResourceId'] = obj.data.resourceId;
        reqParams.tf['resource_id'] = obj.data.resourceId;
        reqParams.cfn['HttpMethod'] = obj.data.httpMethod;
        reqParams.tf['http_method'] = obj.data.httpMethod;
        reqParams.cfn['AuthorizationType'] = obj.data.authorizationType;
        reqParams.tf['authorization'] = obj.data.authorizationType;
        reqParams.cfn['AuthorizerId'] = obj.data.authorizerId;
        reqParams.tf['authorizer_id'] = obj.data.authorizerId;
        reqParams.cfn['ApiKeyRequired'] = obj.data.apiKeyRequired;
        reqParams.tf['api_key_required'] = obj.data.apiKeyRequired;
        reqParams.cfn['RequestValidatorId'] = obj.data.requestValidatorId;
        reqParams.tf['request_validator_id'] = obj.data.requestValidatorId;
        reqParams.cfn['OperationName'] = obj.data.operationName;
        reqParams.cfn['RequestParameters'] = obj.data.requestParameters;
        reqParams.tf['request_parameters'] = obj.data.requestParameters;
        reqParams.cfn['RequestModels'] = obj.data.requestModels;
        reqParams.tf['request_models'] = obj.data.requestModels;
        if (obj.data.methodResponses) {
            reqParams.cfn['MethodResponses'] = [];
            Object.values(obj.data.methodResponses).forEach(methodResponse => {
                reqParams.cfn['MethodResponses'].push({
                    'ResponseModels': methodResponse.responseModels,
                    'ResponseParameters': methodResponse.responseParameters,
                    'StatusCode': methodResponse.statusCode
                });
            });
        }
        if (obj.data.methodIntegration) {
            var integrationResponses = null;
            if (obj.data.methodIntegration.integrationResponses) {
                integrationResponses = [];
                Object.values(obj.data.methodIntegration.integrationResponses).forEach(integrationResponse => {
                    integrationResponses.push({
                        'ContentHandling': integrationResponse.contentHandling,
                        'ResponseParameters': integrationResponse.responseParameters,
                        'ResponseTemplates': integrationResponse.responseTemplates,
                        'SelectionPattern': integrationResponse.selectionPattern,
                        'StatusCode': integrationResponse.statusCode
                    });
                });
            }
            reqParams.cfn['Integration'] = {
                'CacheKeyParameters': obj.data.methodIntegration.cacheKeyParameters,
                'CacheNamespace': obj.data.methodIntegration.cacheNamespace,
                'ConnectionId': obj.data.methodIntegration.connectionId,
                'ConnectionType': obj.data.methodIntegration.connectionType,
                'ContentHandling': obj.data.methodIntegration.contentHandling,
                'Credentials': obj.data.methodIntegration.credentials,
                'IntegrationHttpMethod': obj.data.methodIntegration.httpMethod,
                'IntegrationResponses': integrationResponses,
                'PassthroughBehavior': obj.data.methodIntegration.passthroughBehavior,
                'RequestParameters': obj.data.methodIntegration.requestParameters,
                'RequestTemplates': obj.data.methodIntegration.requestTemplates,
                'TimeoutInMillis': obj.data.methodIntegration.timeoutInMillis,
                'Type': obj.data.methodIntegration.type,
                'Uri': obj.data.methodIntegration.uri
            }
        }
        reqParams.cfn['AuthorizationScopes'] = obj.data.authorizationScopes;
        reqParams.tf['authorization_scopes'] = obj.data.authorizationScopes;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::Method'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::Method',
            'terraformType': 'aws_api_gateway_method',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.id,
                'Import': {
                    'RestApiId': obj.data.restApiId,
                    'ResourceId': obj.data.resourceId,
                    'HttpMethod': obj.data.httpMethod
                }
            }
        });
    } else if (obj.type == "apigateway.gatewayresponse") {
        reqParams.cfn['RestApiId'] = obj.data.restApiId;
        reqParams.tf['rest_api_id'] = obj.data.restApiId;
        reqParams.cfn['ResponseType'] = obj.data.responseType;
        reqParams.tf['response_type'] = obj.data.responseType;
        reqParams.cfn['StatusCode'] = obj.data.statusCode;
        reqParams.tf['status_code'] = obj.data.statusCode;
        reqParams.cfn['ResponseParameters'] = obj.data.responseParameters;
        reqParams.tf['response_parameters'] = obj.data.responseParameters;
        reqParams.cfn['ResponseTemplates'] = obj.data.responseTemplates;
        reqParams.tf['response_templates'] = obj.data.responseTemplates;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::GatewayResponse'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::GatewayResponse',
            'terraformType': 'aws_api_gateway_gateway_response',
            'options': reqParams
            //'returnValues': {}
        });
    } else if (obj.type == "apigateway.documentationversion") {
        reqParams.cfn['RestApiId'] = obj.data.restApiId;
        reqParams.tf['rest_api_id'] = obj.data.restApiId;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.tf['description'] = obj.data.description;
        reqParams.cfn['DocumentationVersion'] = obj.data.version;
        reqParams.tf['version'] = obj.data.version;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::DocumentationVersion'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::DocumentationVersion',
            'terraformType': 'aws_api_gateway_documentation_version',
            'options': reqParams
        });
    } else if (obj.type == "apigateway.documentationpart") {
        reqParams.cfn['RestApiId'] = obj.data.restApiId;
        reqParams.tf['rest_api_id'] = obj.data.restApiId;
        if (obj.data.location) {
            reqParams.cfn['Location'] = {
                'method': obj.data.location.method,
                'name': obj.data.location.name,
                'path': obj.data.location.path,
                'status_code': obj.data.location.statusCode,
                'type': obj.data.location.type
            };
            reqParams.tf['location'] = {
                'Method': obj.data.location.method,
                'Name': obj.data.location.name,
                'Path': obj.data.location.path,
                'StatusCode': obj.data.location.statusCode,
                'Type': obj.data.location.type
            };
        }
        reqParams.cfn['Properties'] = obj.data.properties;
        reqParams.tf['properties'] = obj.data.properties;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::DocumentationPart'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::DocumentationPart',
            'terraformType': 'aws_api_gateway_documentation_part',
            'options': reqParams
        });
    } else if (obj.type == "apigateway.requestvalidator") {
        reqParams.cfn['RestApiId'] = obj.data.restApiId;
        reqParams.tf['rest_api_id'] = obj.data.restApiId;
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.tf['name'] = obj.data.name;
        reqParams.cfn['ValidateRequestBody'] = obj.data.validateRequestBody;
        reqParams.tf['validate_request_body'] = obj.data.validateRequestBody;
        reqParams.cfn['ValidateRequestParameters'] = obj.data.validateRequestParameters;
        reqParams.tf['validate_request_parameters'] = obj.data.validateRequestParameters;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::RequestValidator'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::RequestValidator',
            'terraformType': 'aws_api_gateway_request_validator',
            'options': reqParams,
            'returnValues': {
                'Import': {
                    'RestApiId': obj.data.restApiId,
                    'RequestValidatorId': obj.data.id
                }
            }
        });
    } else if (obj.type == "apigateway.account") {
        reqParams.cfn['CloudWatchRoleArn'] = obj.data.cloudwatchRoleArn;
        reqParams.tf['cloudwatch_role_arn'] = obj.data.cloudwatchRoleArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::Account'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::Account',
            'terraformType': 'aws_api_gateway_account',
            'options': reqParams
        });
    } else if (obj.type == "apigateway.apikey") {
        reqParams.cfn['CustomerId'] = obj.data.customerId;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['Enabled'] = obj.data.enabled;
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Value'] = obj.data.value;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.tags[tagKey]
                });
            });
        }

        /*
        SKIPPED: GenerateDistinctId
        SKIPPED: StageKeys
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::ApiKey'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::ApiKey',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'APIKeyId': obj.data.id
                },
                'Import': {
                    'APIKeyId': obj.data.id
                }
            }
        });
    } else if (obj.type == "apigateway.clientcertificate") {
        reqParams.cfn['Description'] = obj.data.description;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::ClientCertificate'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::ClientCertificate',
            'options': reqParams
        });
    } else if (obj.type == "apigateway.domainname") {
        reqParams.cfn['CertificateArn'] = obj.data.certificateArn;
        reqParams.tf['certificate_arn'] = obj.data.certificateArn;
        reqParams.cfn['DomainName'] = obj.data.domainName;
        reqParams.tf['domain_name'] = obj.data.domainName;
        if (obj.data.endpointConfiguration) {
            reqParams.cfn['EndpointConfiguration'] = {
                'Types': obj.data.endpointConfiguration.types
            };
            reqParams.tf['endpoint_configuration'] = {
                'types': obj.data.endpointConfiguration.types
            };
        }
        reqParams.cfn['RegionalCertificateArn'] = obj.data.regionalCertificateArn;
        reqParams.tf['regional_certificate_arn'] = obj.data.regionalCertificateArn;
        reqParams.cfn['SecurityPolicy'] = obj.data.securityPolicy;
        if (obj.data.mutualTlsAuthentication) {
            reqParams.cfn['SecurityPolicy'] = {
                'TruststoreUri': obj.data.mutualTlsAuthentication.truststoreUri,
                'TruststoreVersion': obj.data.mutualTlsAuthentication.truststoreVersion
            };
        }
        reqParams.cfn['OwnershipVerificationCertificateArn'] = obj.data.ownershipVerificationCertificateArn;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            reqParams.tf['Tags'] = {};
            Object.keys(obj.data.tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::DomainName'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::DomainName',
            'terraformType': 'aws_api_gateway_domain_name',
            'options': reqParams
        });
    } else if (obj.type == "apigateway.basepathmapping") {
        reqParams.cfn['BasePath'] = obj.data.basePath;
        reqParams.tf['base_path'] = obj.data.basePath;
        reqParams.cfn['DomainName'] = obj.data.domainName;
        reqParams.tf['domain_name'] = obj.data.domainName;
        reqParams.cfn['RestApiId'] = obj.data.restApiId;
        reqParams.tf['api_id'] = obj.data.restApiId;
        reqParams.cfn['Stage'] = obj.data.stage;
        reqParams.tf['stage_name'] = obj.data.stage;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::BasePathMapping'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::BasePathMapping',
            'terraformType': 'aws_api_gateway_base_path_mapping',
            'options': reqParams
        });
    } else if (obj.type == "apigateway.usageplan") {
        reqParams.cfn['UsagePlanName'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        if (obj.data.apiStages) {
            reqParams.cfn['ApiStages'] = [];
            obj.data.apiStages.forEach(apistage => {
                var throttle = null;

                if (apistage.throttle) {
                    throttle = {};
                    Object.keys(apistage.throttle).forEach(key => {
                        throttle[key] = {
                            'BurstLimit': apistage.throttle[key].burstLimit,
                            'RateLimit': apistage.throttle[key].rateLimit
                        };
                    });
                }

                reqParams.cfn['ApiStages'].push({
                    'ApiId': apistage.apiId,
                    'Stage': apistage.stage,
                    'Throttle': throttle
                });
            });
        }
        if (obj.data.throttle) {
            reqParams.cfn['Throttle'] = {
                'BurstLimit': obj.data.throttle.burstLimit,
                'RateLimit': obj.data.throttle.rateLimit
            };
        }
        if (obj.data.quota) {
            reqParams.cfn['Quota'] = {
                'Limit': obj.data.quota.limit,
                'Offset': obj.data.quota.offset,
                'Period': obj.data.quota.period
            };
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::UsagePlan'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::UsagePlan',
            'options': reqParams
        });
    } else if (obj.type == "apigateway.usageplankey") {
        reqParams.cfn['KeyId'] = obj.data.id;
        reqParams.tf['key_id'] = obj.data.id;
        reqParams.cfn['KeyType'] = obj.data.type;
        reqParams.tf['key_type'] = obj.data.type;
        reqParams.cfn['UsagePlanId'] = obj.data.value; // TODO: ???
        reqParams.tf['usage_plan_id'] = obj.data.value;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::UsagePlanKey'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::UsagePlanKey',
            'terraformType': 'aws_api_gateway_usage_plan_key',
            'options': reqParams
        });
    } else if (obj.type == "apigateway.vpclink") {
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.tf['description'] = obj.data.description;
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.tf['name'] = obj.data.name;
        reqParams.cfn['TargetArns'] = obj.data.targetArns;
        reqParams.tf['target_arns'] = obj.data.targetArns;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigateway', obj.id, 'AWS::ApiGateway::VpcLink'),
            'region': obj.region,
            'service': 'apigateway',
            'type': 'AWS::ApiGateway::VpcLink',
            'terraformType': 'aws_api_gateway_vpc_link',
            'options': reqParams
        });
    } else if (obj.type == "apigatewayv2.api") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.tf['name'] = obj.data.name;
        reqParams.cfn['ApiKeySelectionExpression'] = obj.data.ApiKeySelectionExpression;
        reqParams.tf['api_key_selection_expression'] = obj.data.ApiKeySelectionExpression;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['DisableSchemaValidation'] = obj.data.DisableSchemaValidation;
        reqParams.cfn['ProtocolType'] = obj.data.ProtocolType;
        reqParams.tf['protocol_type'] = obj.data.ProtocolType;
        reqParams.cfn['RouteSelectionExpression'] = obj.data.RouteSelectionExpression;
        reqParams.tf['route_selection_expression'] = obj.data.RouteSelectionExpression;
        reqParams.cfn['Version'] = obj.data.Version;
        reqParams.tf['version'] = obj.data.Version;
        if (obj.data.CorsConfiguration) {
            reqParams.cfn['CorsConfiguration'] = obj.data.CorsConfiguration;
            reqParams.tf['cors_configuration'] = {
                'allow_credentials': obj.data.CorsConfiguration.AllowCredentials,
                'allow_headers': obj.data.CorsConfiguration.AllowHeaders,
                'allow_methods': obj.data.CorsConfiguration.AllowMethods,
                'allow_origins': obj.data.CorsConfiguration.AllowOrigins,
                'expose_headers': obj.data.CorsConfiguration.ExposeHeaders,
                'max_age': obj.data.CorsConfiguration.MaxAge
            };
        }
        reqParams.cfn['DisableExecuteApiEndpoint'] = obj.data.DisableExecuteApiEndpoint;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            reqParams.tf['Tags'] = {};
            Object.keys(obj.data.Tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.Tags[tagKey]
                });
            });
        }
        
        /*
        SKIPPED: FailOnWarnings
        SKIPPED: Body
        SKIPPED: BodyS3Location
        SKIPPED: BasePath

        TODO:
        CredentialsArn: String
        RouteKey: String
        Target: String

        credentials_arn
        route_key
        target
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigatewayv2', obj.id, 'AWS::ApiGatewayV2::Api'),
            'region': obj.region,
            'service': 'apigatewayv2',
            'type': 'AWS::ApiGatewayV2::Api',
            'terraformType': 'aws_apigatewayv2_api',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ApiId,
                'Terraform': {
                    'id': obj.data.ApiId,
                    'api_endpoint': obj.data.ApiEndpoint
                }
            }
        });
    } else if (obj.type == "apigatewayv2.stage") {
        reqParams.cfn['StageName'] = obj.data.StageName;
        reqParams.tf['name'] = obj.data.StageName;
        reqParams.cfn['StageVariables'] = obj.data.StageVariables;
        reqParams.tf['stage_variables'] = obj.data.StageVariables;
        reqParams.cfn['ApiId'] = obj.data.ApiId;
        reqParams.tf['api_id'] = obj.data.ApiId;
        reqParams.cfn['ClientCertificateId'] = obj.data.ClientCertificateId;
        reqParams.tf['client_certificate_id'] = obj.data.ClientCertificateId;
        reqParams.cfn['DeploymentId'] = obj.data.DeploymentId;
        reqParams.tf['deployment_id'] = obj.data.DeploymentId;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        if (obj.data.RouteSettings) {
            reqParams.cfn['RouteSettings'] = obj.data.RouteSettings;
            reqParams.tf['route_settings'] = [];
            Object.keys(obj.data.RouteSettings).forEach(routekey => {
                reqParams.tf['route_settings'].push({
                    'route_key': routekey,
                    'data_trace_enabled': obj.data.RouteSettings[routekey].DataTraceEnabled,
                    'detailed_metrics_enabled': obj.data.RouteSettings[routekey].DetailedMetricsEnabled,
                    'logging_level': obj.data.RouteSettings[routekey].LoggingLevel,
                    'throttling_burst_limit': obj.data.RouteSettings[routekey].ThrottlingBurstLimit,
                    'throttling_rate_limit': obj.data.RouteSettings[routekey].ThrottlingRateLimit
                });
            });
        }
        if (obj.data.DefaultRouteSettings) {
            reqParams.cfn['DefaultRouteSettings'] = obj.data.DefaultRouteSettings;
            reqParams.tf['default_route_settings'] = {
                'data_trace_enabled': obj.data.DefaultRouteSettings.DataTraceEnabled,
                'detailed_metrics_enabled': obj.data.DefaultRouteSettings.DetailedMetricsEnabled,
                'logging_level': obj.data.DefaultRouteSettings.LoggingLevel,
                'throttling_burst_limit': obj.data.DefaultRouteSettings.ThrottlingBurstLimit,
                'throttling_rate_limit': obj.data.DefaultRouteSettings.ThrottlingRateLimit
            };
        }
        if (obj.data.AccessLogSettings) {
            reqParams.cfn['AccessLogSettings'] = obj.data.AccessLogSettings;
            reqParams.tf['access_log_settings'] = {
                'destination_arn': obj.data.AccessLogSettings.DestinationArn,
                'format': obj.data.AccessLogSettings.Format
            };
        }
        reqParams.cfn['AutoDeploy'] = obj.data.AutoDeploy;
        reqParams.tf['auto_deploy'] = obj.data.AutoDeploy;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            reqParams.tf['Tags'] = {};
            Object.keys(obj.data.Tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.Tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigatewayv2', obj.id, 'AWS::ApiGatewayV2::Stage'),
            'region': obj.region,
            'service': 'apigatewayv2',
            'type': 'AWS::ApiGatewayV2::Stage',
            'terraformType': 'aws_apigatewayv2_stage',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.StageName
            }
        });
    } else if (obj.type == "apigatewayv2.deployment") {
        reqParams.cfn['ApiId'] = obj.data.ApiId;
        reqParams.tf['api_id'] = obj.data.ApiId;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;

        /*
        TODO:
        StageName: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigatewayv2', obj.id, 'AWS::ApiGatewayV2::Deployment'),
            'region': obj.region,
            'service': 'apigatewayv2',
            'type': 'AWS::ApiGatewayV2::Deployment',
            'terraformType': 'aws_apigatewayv2_deployment',
            'options': reqParams
        });
    } else if (obj.type == "apigatewayv2.model") {
        reqParams.cfn['ApiId'] = obj.data.ApiId;
        reqParams.tf['api_id'] = obj.data.ApiId;
        reqParams.cfn['ContentType'] = obj.data.ContentType;
        reqParams.tf['content_type'] = obj.data.ContentType;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['Schema'] = obj.data.Schema;
        reqParams.tf['schema'] = obj.data.Schema;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigatewayv2', obj.id, 'AWS::ApiGatewayV2::Model'),
            'region': obj.region,
            'service': 'apigatewayv2',
            'type': 'AWS::ApiGatewayV2::Model',
            'terraformType': 'aws_apigatewayv2_model',
            'options': reqParams
        });
    } else if (obj.type == "apigatewayv2.authorizer") {
        reqParams.cfn['ApiId'] = obj.data.ApiId;
        reqParams.tf['api_id'] = obj.data.ApiId;
        reqParams.cfn['AuthorizerCredentialsArn'] = obj.data.AuthorizerCredentialsArn;
        reqParams.tf['authorizer_credentials_arn'] = obj.data.AuthorizerCredentialsArn;
        reqParams.cfn['AuthorizerResultTtlInSeconds'] = obj.data.AuthorizerResultTtlInSeconds;
        reqParams.cfn['AuthorizerType'] = obj.data.AuthorizerType;
        reqParams.tf['authorizer_type'] = obj.data.AuthorizerType;
        reqParams.cfn['AuthorizerUri'] = obj.data.AuthorizerUri;
        reqParams.tf['authorizer_credentials_arn'] = obj.data.AuthorizerUri;
        reqParams.cfn['IdentitySource'] = obj.data.IdentitySource;
        reqParams.tf['identity_sources'] = obj.data.IdentitySource;
        reqParams.cfn['IdentityValidationExpression'] = obj.data.IdentityValidationExpression;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        if (obj.data.JwtConfiguration) {
            reqParams.cfn['JwtConfiguration'] = obj.data.JwtConfiguration;
            reqParams.tf['JwtConfiguration'] = {
                'audience': obj.data.JwtConfiguration.Audience,
                'issuer': obj.data.JwtConfiguration.Issuer
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigatewayv2', obj.id, 'AWS::ApiGatewayV2::Authorizer'),
            'region': obj.region,
            'service': 'apigatewayv2',
            'type': 'AWS::ApiGatewayV2::Authorizer',
            'terraformType': 'aws_apigatewayv2_authorizer',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.AuthorizerId,
                'Terraform': {
                    'id': obj.data.AuthorizerId
                }
            }
        });
    } else if (obj.type == "apigatewayv2.routeresponse") {
        reqParams.cfn['ApiId'] = obj.data.ApiId;
        reqParams.tf['api_id'] = obj.data.ApiId;
        reqParams.cfn['ModelSelectionExpression'] = obj.data.ModelSelectionExpression;
        reqParams.tf['model_selection_expression'] = obj.data.ModelSelectionExpression;
        reqParams.cfn['ResponseModels'] = obj.data.ResponseModels;
        reqParams.tf['response_models'] = obj.data.ResponseModels;
        reqParams.cfn['ResponseParameters'] = obj.data.ResponseParameters;
        reqParams.cfn['RouteResponseKey'] = obj.data.RouteResponseKey;
        reqParams.tf['route_response_key'] = obj.data.RouteResponseKey;
        reqParams.cfn['RouteId'] = obj.data.RouteId;
        reqParams.tf['route_id'] = obj.data.RouteId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigatewayv2', obj.id, 'AWS::ApiGatewayV2::RouteResponse'),
            'region': obj.region,
            'service': 'apigatewayv2',
            'type': 'AWS::ApiGatewayV2::RouteResponse',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.RouteResponseId,
                'Terraform': {
                    'id': obj.data.RouteResponseId
                }
            }
        });
    } else if (obj.type == "apigatewayv2.route") {
        reqParams.cfn['ApiId'] = obj.data.ApiId;
        reqParams.tf['api_id'] = obj.data.ApiId;
        reqParams.cfn['ApiKeyRequired'] = obj.data.ApiKeyRequired;
        reqParams.tf['api_key_required'] = obj.data.ApiKeyRequired;
        reqParams.cfn['AuthorizationScopes'] = obj.data.AuthorizationScopes;
        reqParams.tf['authorization_scopes'] = obj.data.AuthorizationScopes;
        reqParams.cfn['AuthorizationType'] = obj.data.AuthorizationType;
        reqParams.tf['authorization_type'] = obj.data.AuthorizationType;
        reqParams.cfn['AuthorizerId'] = obj.data.AuthorizerId;
        reqParams.tf['authorizer_id'] = obj.data.AuthorizerId;
        reqParams.cfn['ModelSelectionExpression'] = obj.data.ModelSelectionExpression;
        reqParams.tf['model_selection_expression'] = obj.data.ModelSelectionExpression;
        reqParams.cfn['OperationName'] = obj.data.OperationName;
        reqParams.tf['operation_name'] = obj.data.OperationName;
        reqParams.cfn['RequestModels'] = obj.data.RequestModels;
        reqParams.tf['request_models'] = obj.data.RequestModels;
        reqParams.cfn['RequestParameters'] = obj.data.RequestParameters;
        reqParams.cfn['RouteKey'] = obj.data.RouteKey;
        reqParams.tf['route_key'] = obj.data.RouteKey;
        reqParams.cfn['RouteResponseSelectionExpression'] = obj.data.RouteResponseSelectionExpression;
        reqParams.tf['route_response_selection_expression'] = obj.data.RouteResponseSelectionExpression;
        reqParams.cfn['Target'] = obj.data.Target;
        reqParams.tf['target'] = obj.data.Target;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigatewayv2', obj.id, 'AWS::ApiGatewayV2::Route'),
            'region': obj.region,
            'service': 'apigatewayv2',
            'type': 'AWS::ApiGatewayV2::Route',
            'terraformType': 'aws_apigatewayv2_route',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.RouteId,
                'Terraform': {
                    'id': obj.data.RouteId
                }
            }
        });
    } else if (obj.type == "apigatewayv2.integrationresponse") {
        reqParams.cfn['ApiId'] = obj.data.ApiId;
        reqParams.tf['api_id'] = obj.data.ApiId;
        reqParams.cfn['IntegrationId'] = obj.data.IntegrationId;
        reqParams.tf['integration_id'] = obj.data.IntegrationId;
        reqParams.cfn['ContentHandlingStrategy'] = obj.data.ContentHandlingStrategy;
        reqParams.tf['content_handling_strategy'] = obj.data.ContentHandlingStrategy;
        reqParams.cfn['IntegrationResponseKey'] = obj.data.IntegrationResponseKey;
        reqParams.tf['integration_response_key'] = obj.data.IntegrationResponseKey;
        reqParams.cfn['ResponseParameters'] = obj.data.ResponseParameters;
        reqParams.cfn['ResponseTemplates'] = obj.data.ResponseTemplates;
        reqParams.tf['response_templates'] = obj.data.ResponseTemplates;
        reqParams.cfn['TemplateSelectionExpression'] = obj.data.TemplateSelectionExpression;
        reqParams.tf['template_selection_expression'] = obj.data.TemplateSelectionExpression;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigatewayv2', obj.id, 'AWS::ApiGatewayV2::IntegrationResponse'),
            'region': obj.region,
            'service': 'apigatewayv2',
            'type': 'AWS::ApiGatewayV2::IntegrationResponse',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.IntegrationResponseId,
                'Terraform': {
                    'id': obj.data.IntegrationResponseId
                }
            }
        });
    } else if (obj.type == "apigatewayv2.integration") {
        reqParams.cfn['ApiId'] = obj.data.ApiId;
        reqParams.tf['api_id'] = obj.data.ApiId;
        reqParams.cfn['ConnectionType'] = obj.data.ConnectionType;
        reqParams.tf['connection_type'] = obj.data.ConnectionType;
        reqParams.cfn['ContentHandlingStrategy'] = obj.data.ContentHandlingStrategy;
        reqParams.tf['content_handling_strategy'] = obj.data.ContentHandlingStrategy;
        reqParams.cfn['CredentialsArn'] = obj.data.CredentialsArn;
        reqParams.tf['credentials_arn'] = obj.data.CredentialsArn;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['IntegrationMethod'] = obj.data.IntegrationMethod;
        reqParams.tf['integration_method'] = obj.data.IntegrationMethod;
        reqParams.cfn['IntegrationType'] = obj.data.IntegrationType;
        reqParams.tf['integration_type'] = obj.data.IntegrationType;
        reqParams.cfn['IntegrationUri'] = obj.data.IntegrationUri;
        reqParams.tf['integration_uri'] = obj.data.IntegrationUri;
        reqParams.cfn['PassthroughBehavior'] = obj.data.PassthroughBehavior;
        reqParams.tf['passthrough_behavior'] = obj.data.PassthroughBehavior;
        reqParams.cfn['RequestParameters'] = obj.data.RequestParameters;
        reqParams.cfn['RequestTemplates'] = obj.data.RequestTemplates;
        reqParams.tf['request_templates'] = obj.data.RequestTemplates;
        reqParams.cfn['TemplateSelectionExpression'] = obj.data.TemplateSelectionExpression;
        reqParams.tf['template_selection_expression'] = obj.data.TemplateSelectionExpression;
        reqParams.cfn['TimeoutInMillis'] = obj.data.TimeoutInMillis;
        reqParams.tf['timeout_milliseconds'] = obj.data.TimeoutInMillis;
        reqParams.cfn['PayloadFormatVersion'] = obj.data.PayloadFormatVersion;
        reqParams.tf['payload_format_version'] = obj.data.PayloadFormatVersion;
        reqParams.cfn['TlsConfig'] = obj.data.TlsConfig;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigatewayv2', obj.id, 'AWS::ApiGatewayV2::Integration'),
            'region': obj.region,
            'service': 'apigatewayv2',
            'type': 'AWS::ApiGatewayV2::Integration',
            'terraformType': 'aws_apigatewayv2_integration',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.IntegrationId,
                'Terraform': {
                    'id': obj.data.IntegrationId,
                    'integration_response_selection_expression': obj.data.IntegrationResponseSelectionExpression
                }
            }
        });
    } else if (obj.type == "apigatewayv2.domainname") {
        reqParams.cfn['DomainName'] = obj.data.DomainName;
        reqParams.tf['domain_name'] = obj.data.DomainName;
        if (obj.data.DomainNameConfigurations) {
            reqParams.cfn['DomainNameConfigurations'] = [];
            reqParams.tf['domain_name_configuration'] = [];
            obj.data.DomainNameConfigurations.forEach(domainnameconfiguration => {
                reqParams.cfn['DomainNameConfigurations'].push({
                    'CertificateArn': domainnameconfiguration.CertificateArn,
                    'CertificateName': domainnameconfiguration.CertificateName,
                    'EndpointType': domainnameconfiguration.EndpointType,
                    'OwnershipVerificationCertificateArn': domainnameconfiguration.OwnershipVerificationCertificateArn
                });
                reqParams.tf['domain_name_configuration'].push({
                    'certificate_arn': domainnameconfiguration.CertificateArn,
                    'endpoint_type': domainnameconfiguration.EndpointType,
                    'security_policy': domainnameconfiguration.SecurityPolicy
                });
            });
        }

        /*
        TODO:
        tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigatewayv2', obj.id, 'AWS::ApiGatewayV2::DomainName'),
            'region': obj.region,
            'service': 'apigatewayv2',
            'type': 'AWS::ApiGatewayV2::DomainName',
            'terraformType': 'aws_apigatewayv2_domain_name',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.DomainName,
                'Terraform': {
                    'id': obj.data.DomainName,
                    'api_mapping_selection_expression': obj.data.ApiMappingSelectionExpression
                }
            }
        });
    } else if (obj.type == "apigatewayv2.apimapping") {
        reqParams.cfn['ApiId'] = obj.data.ApiId;
        reqParams.tf['api_id'] = obj.data.ApiId;
        reqParams.cfn['DomainName'] = obj.data.DomainName;
        reqParams.tf['domain_name'] = obj.data.DomainName;
        reqParams.cfn['Stage'] = obj.data.Stage;
        reqParams.tf['stage'] = obj.data.Stage;
        reqParams.cfn['ApiMappingKey'] = obj.data.ApiMappingKey;
        reqParams.tf['api_mapping_key'] = obj.data.ApiMappingKey;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigatewayv2', obj.id, 'AWS::ApiGatewayV2::ApiMapping'),
            'region': obj.region,
            'service': 'apigatewayv2',
            'type': 'AWS::ApiGatewayV2::ApiMapping',
            'terraformType': 'aws_apigatewayv2_api_mapping',
            'options': reqParams
        });
    } else if (obj.type == "apigatewayv2.vpclink") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['SecurityGroupIds'] = obj.data.SecurityGroupIds;
        reqParams.tf['security_group_ids'] = obj.data.SecurityGroupIds;
        reqParams.cfn['SubnetIds'] = obj.data.SubnetIds;
        reqParams.tf['subnet_ids'] = obj.data.SubnetIds;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            reqParams.tf['Tags'] = {};
            Object.keys(obj.data.tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apigatewayv2', obj.id, 'AWS::ApiGatewayV2::VpcLink'),
            'region': obj.region,
            'service': 'apigatewayv2',
            'type': 'AWS::ApiGatewayV2::VpcLink',
            'terraformType': 'aws_apigatewayv2_vpc_link',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.VpcLinkId,
                'Terraform': {
                    'id': obj.data.VpcLinkId
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
