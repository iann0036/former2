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
        'WebSocket APIs': {
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
    blockUI('#section-networkingandcontentdelivery-apigateway-websocketapis-datatable');
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

    $('#section-networkingandcontentdelivery-apigateway-restapis-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-stages-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-deployments-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-resources-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-methods-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-models-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-authorizers-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-websocketapis-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-routes-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-routeresponses-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-integrations-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-integrationresponses-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-apimappings-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-domainnames-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-clientcertificates-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-apikeys-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-vpclinks-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-usageplans-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-usageplankeys-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-basepathmappings-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-gatewayresponses-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-documentationparts-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-documentationversions-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-requestvalidators-datatable').bootstrapTable('removeAll');
    $('#section-networkingandcontentdelivery-apigateway-account-datatable').bootstrapTable('removeAll');

    // V1
    await sdkcall("APIGateway", "getAccount", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-apigateway-account-datatable').bootstrapTable('append', [{
            f2id: data.cloudwatchRoleArn || (region + "-account"),
            f2type: 'apigateway.account',
            f2data: data,
            f2region: region,
            cloudwatchrolearn: data.cloudwatchRoleArn
        }]);

        unblockUI('#section-networkingandcontentdelivery-apigateway-account-datatable');
    });

    await sdkcall("APIGateway", "getDomainNames", {
        // no params
    }, true).then(async (data) => {
        await Promise.all(data.items.map(domainName => {
            $('#section-networkingandcontentdelivery-apigateway-domainnames-datatable').bootstrapTable('append', [{
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

                    $('#section-networkingandcontentdelivery-apigateway-basepathmappings-datatable').bootstrapTable('append', [{
                        f2id: basePathMapping.basePath,
                        f2type: 'apigateway.basepathmapping',
                        f2data: basePathMapping,
                        f2region: region,
                        basepath: basePathMapping.basePath,
                        restapiid: basePathMapping.restApiId,
                        stage: basePathMapping.stage
                    }]);
                });
            });
        }));

        unblockUI('#section-networkingandcontentdelivery-apigateway-basepathmappings-datatable');
    });

    await sdkcall("APIGateway", "getClientCertificates", {
        // no params
    }, true).then((data) => {
        data.items.forEach(clientCertificate => {
            $('#section-networkingandcontentdelivery-apigateway-clientcertificates-datatable').bootstrapTable('append', [{
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
            $('#section-networkingandcontentdelivery-apigateway-apikeys-datatable').bootstrapTable('append', [{
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

    await sdkcall("APIGateway", "getVpcLinks", {
        // no params
    }, true).then((data) => {
        data.items.forEach(vpcLink => {
            $('#section-networkingandcontentdelivery-apigateway-vpclinks-datatable').bootstrapTable('append', [{
                f2id: vpcLink.id,
                f2type: 'apigateway.vpclink',
                f2data: vpcLink,
                f2region: region,
                name: vpcLink.name,
                id: vpcLink.id,
                description: vpcLink.description
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-apigateway-vpclinks-datatable');
    });

    await sdkcall("APIGateway", "getUsagePlans", {
        // no params
    }, true).then(async (data) => {
        await Promise.all(data.items.map(usagePlan => {
            $('#section-networkingandcontentdelivery-apigateway-usageplans-datatable').bootstrapTable('append', [{
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
                    $('#section-networkingandcontentdelivery-apigateway-usageplankeys-datatable').bootstrapTable('append', [{
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
    }, true).then(async (data) => {
        await Promise.all(data.items.map(api => {
            $('#section-networkingandcontentdelivery-apigateway-restapis-datatable').bootstrapTable('append', [{
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

            return Promise.all([
                sdkcall("APIGateway", "getRequestValidators", {
                    restApiId: api.id
                }, true).then((data) => {
                    if (data.item) {
                        data.item.forEach(requestValidator => {
                            requestValidator['restApiId'] = api.id;
                            $('#section-networkingandcontentdelivery-apigateway-requestvalidators-datatable').bootstrapTable('append', [{
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
                            $('#section-networkingandcontentdelivery-apigateway-documentationparts-datatable').bootstrapTable('append', [{
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
                            $('#section-networkingandcontentdelivery-apigateway-documentationversions-datatable').bootstrapTable('append', [{
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
                            $('#section-networkingandcontentdelivery-apigateway-gatewayresponses-datatable').bootstrapTable('append', [{
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
                        $('#section-networkingandcontentdelivery-apigateway-stages-datatable').bootstrapTable('append', [{
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
                        $('#section-networkingandcontentdelivery-apigateway-deployments-datatable').bootstrapTable('append', [{
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
                                    $('#section-networkingandcontentdelivery-apigateway-methods-datatable').bootstrapTable('append', [{
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
                        $('#section-networkingandcontentdelivery-apigateway-resources-datatable').bootstrapTable('append', [{
                            f2id: resource.id,
                            f2type: 'apigateway.resource',
                            f2data: resource,
                            f2region: region,
                            apiid: api.id,
                            id: resource.id,
                            parentid: resource.parentId,
                            path: resource.path
                        }]);
                    });

                    unblockUI('#section-networkingandcontentdelivery-apigateway-methods-datatable');
                    unblockUI('#section-networkingandcontentdelivery-apigateway-resources-datatable');
                }),
                sdkcall("APIGateway", "getModels", {
                    restApiId: api.id
                }, true).then((data) => {
                    data.items.forEach(model => {
                        model['restApiId'] = api.id;
                        $('#section-networkingandcontentdelivery-apigateway-models-datatable').bootstrapTable('append', [{
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
                        $('#section-networkingandcontentdelivery-apigateway-authorizers-datatable').bootstrapTable('append', [{
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
        }));

        unblockUI('#section-networkingandcontentdelivery-apigateway-restapis-datatable');
    });

    // V2
    await sdkcall("ApiGatewayV2", "getApis", {
        // no params
    }, true).then(async (data) => {
        await Promise.all(data.Items.map(api => {
            $('#section-networkingandcontentdelivery-apigateway-websocketapis-datatable').bootstrapTable('append', [{
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
                        $('#section-networkingandcontentdelivery-apigateway-stages-datatable').bootstrapTable('append', [{
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
                        $('#section-networkingandcontentdelivery-apigateway-deployments-datatable').bootstrapTable('append', [{
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
                        $('#section-networkingandcontentdelivery-apigateway-models-datatable').bootstrapTable('append', [{
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
                        $('#section-networkingandcontentdelivery-apigateway-authorizers-datatable').bootstrapTable('append', [{
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
                        $('#section-networkingandcontentdelivery-apigateway-routes-datatable').bootstrapTable('append', [{
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
                                $('#section-networkingandcontentdelivery-apigateway-routes-datatable').bootstrapTable('append', [{
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
                        $('#section-networkingandcontentdelivery-apigateway-integrations-datatable').bootstrapTable('append', [{
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
                                $('#section-networkingandcontentdelivery-apigateway-integrations-datatable').bootstrapTable('append', [{
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

                $('#section-networkingandcontentdelivery-apigateway-domainnames-datatable').bootstrapTable('append', [{
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

                        $('#section-networkingandcontentdelivery-apigateway-apimappings-datatable').bootstrapTable('append', [{
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
    unblockUI('#section-networkingandcontentdelivery-apigateway-websocketapis-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-integrations-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-integrationresponses-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-apimappings-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-routes-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-routeresponses-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-models-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-authorizers-datatable');
    unblockUI('#section-networkingandcontentdelivery-apigateway-domainnames-datatable');
}
