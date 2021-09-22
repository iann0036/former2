/* ========================================================================== */
// WAF & Shield
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity, &amp; Compliance',
    'service': 'WAF &amp; Shield',
    'resourcetypes': {
        'V2 Web ACLs': {
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
        'V2 Rule Groups': {
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
        'V2 IP Sets': {
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
        'V2 Regex Pattern Sets': {
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
        'V2 Web ACL Associations': {
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
                        title: 'Web ACL',
                        field: 'webacl',
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
                        field: 'resourcearn',
                        title: 'Resource ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Web ACLs': {
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
                        field: 'metricname',
                        title: 'Metric Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Rules': {
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
                        field: 'metricname',
                        title: 'Metric Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'XSS Match Sets': {
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
        'IP Sets': {
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
        'Size Constraint Sets': {
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
        'SQL Injection Match Sets': {
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
        'Byte Match Sets': {
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
        'Regional Web ACLs': {
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
                        field: 'metricname',
                        title: 'Metric Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Regional Web ACL Associations': {
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
                        title: 'Resource ARN',
                        field: 'resourcearn',
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
                        field: 'webaclid',
                        title: 'Web ACL ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Regional Rules': {
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
                        field: 'metricname',
                        title: 'Metric Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Regional Rate Based Rules': {
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
                        field: 'metricname',
                        title: 'Metric Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'ratelimit',
                        title: 'Rate Limit',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Regional XSS Match Sets': {
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
        'Regional IP Sets': {
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
        'Regional Size Constraint Sets': {
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
        'Regional SQL Injection Match Sets': {
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
        'Regional Byte Match Sets': {
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
        'Regional Geo Match Sets': {
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
        'Regional Regex Pattern Sets': {
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
        'Firewall Manager Policies': {
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
                        field: 'resourcetype',
                        title: 'Resource Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'servicesecuritytype',
                        title: 'Service Security Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Firewall Manager Notification Channel': {
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
                        title: 'Topic ARN',
                        field: 'topicarn',
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
                        field: 'rolename',
                        title: 'Role Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Logging Configurations': {
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
                        title: 'Web ACL',
                        field: 'webacl',
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
        }
    }
});

async function updateDatatableSecurityIdentityAndComplianceWAFAndShield() {
    blockUI('#section-securityidentityandcompliance-wafandshield-v2webacls-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-v2rulegroups-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-v2ipsets-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-v2regexpatternsets-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-webacls-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-rules-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-xssmatchsets-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-ipsets-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-sizeconstraintsets-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-sqlinjectionmatchsets-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-bytematchsets-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-regionalwebacls-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-regionalwebaclassociations-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-regionalrules-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-regionalxssmatchsets-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-regionalipsets-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-regionalsizeconstraintsets-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-regionalsqlinjectionmatchsets-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-regionalbytematchsets-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-regionalratebasedrules-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-regionalgeomatchsets-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-regionalregexpatternsets-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-firewallmanagerpolicies-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-firewallmanagernotificationchannel-datatable');
    blockUI('#section-securityidentityandcompliance-wafandshield-loggingconfigurations-datatable');

    $('#section-securityidentityandcompliance-wafandshield-v2webacls-datatable').deferredBootstrapTable('removeAll');
    $('#section-securityidentityandcompliance-wafandshield-loggingconfigurations-datatable').deferredBootstrapTable('removeAll');
    $('#section-securityidentityandcompliance-wafandshield-v2rulegroups-datatable').deferredBootstrapTable('removeAll');
    $('#section-securityidentityandcompliance-wafandshield-v2ipsets-datatable').deferredBootstrapTable('removeAll');
    $('#section-securityidentityandcompliance-wafandshield-v2regexpatternsets-datatable').deferredBootstrapTable('removeAll');
    $('#section-securityidentityandcompliance-wafandshield-v2webaclassociations-datatable').deferredBootstrapTable('removeAll');
    $('#section-securityidentityandcompliance-wafandshield-firewallmanagerpolicies-datatable').deferredBootstrapTable('removeAll');
    $('#section-securityidentityandcompliance-wafandshield-firewallmanagernotifcationchannel-datatable').deferredBootstrapTable('removeAll');

    if (region == "us-east-1") {
        await sdkcall("WAFV2", "listWebACLs", {
            Scope: "CLOUDFRONT"
        }, true).then(async (data) => {
            await Promise.all(data.WebACLs.map(webAcl => {
                return sdkcall("WAFV2", "getWebACL", {
                    Scope: "CLOUDFRONT",
                    Id: webAcl.Id,
                    Name: webAcl.Name
                }, true).then((data) => {
                    data.WebACL['Scope'] = "CLOUDFRONT";

                    $('#section-securityidentityandcompliance-wafandshield-v2webacls-datatable').deferredBootstrapTable('append', [{
                        f2id: data.WebACL.ARN,
                        f2type: 'waf.v2webacl',
                        f2data: data.WebACL,
                        f2region: region,
                        name: data.WebACL.Name,
                        id: data.WebACL.Id,
                        description: data.WebACL.Description
                    }]);
                });
            }));
        });
    }

    await sdkcall("WAFV2", "listWebACLs", {
        Scope: "REGIONAL"
    }, false).then(async (data) => {
        await Promise.all(data.WebACLs.map(async (webAcl) => {
            await sdkcall("WAFV2", "listResourcesForWebACL", {
                WebACLArn: webAcl.ARN,
                ResourceType: 'APPLICATION_LOAD_BALANCER'
            }, true).then((data) => {
                data.ResourceArns.forEach(resourceArn => {
                    $('#section-securityidentityandcompliance-wafandshield-v2webaclassociations-datatable').deferredBootstrapTable('append', [{
                        f2id: webAcl.ARN + ' ' + resourceArn,
                        f2type: 'waf.v2webaclassociation',
                        f2data: {
                            'WebACLArn': data.WebACL,
                            'ResourceArn': resourceArn
                        },
                        f2region: region,
                        webacl: webAcl.ARN,
                        resourcearn: resourceArn
                    }]);
                });
            }).catch(() => { });

            await sdkcall("WAFV2", "listResourcesForWebACL", {
                WebACLArn: webAcl.ARN,
                ResourceType: 'API_GATEWAY'
            }, true).then((data) => {
                data.ResourceArns.forEach(resourceArn => {
                    $('#section-securityidentityandcompliance-wafandshield-v2webaclassociations-datatable').deferredBootstrapTable('append', [{
                        f2id: webAcl.ARN + ' ' + resourceArn,
                        f2type: 'waf.v2webaclassociation',
                        f2data: {
                            'WebACLArn': data.WebACL,
                            'ResourceArn': resourceArn
                        },
                        f2region: region,
                        webacl: webAcl.ARN,
                        resourcearn: resourceArn
                    }]);
                });
            }).catch(() => { });

            await sdkcall("WAFV2", "getWebACL", {
                Scope: "REGIONAL",
                Id: webAcl.Id,
                Name: webAcl.Name
            }, true).then((data) => {
                data.WebACL['Scope'] = "REGIONAL";

                $('#section-securityidentityandcompliance-wafandshield-v2webacls-datatable').deferredBootstrapTable('append', [{
                    f2id: data.WebACL.ARN,
                    f2type: 'waf.v2webacl',
                    f2data: data.WebACL,
                    f2region: region,
                    name: data.WebACL.Name,
                    id: data.WebACL.Id,
                    description: data.WebACL.Description
                }]);
            });

            return sdkcall("WAFV2", "getLoggingConfiguration", {
                ResourceArn: webAcl.ARN
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-loggingconfigurations-datatable').deferredBootstrapTable('append', [{
                    f2id: data.LoggingConfiguration.ResourceArn + " Logging Configuration",
                    f2type: 'waf.loggingconfiguration',
                    f2data: data.LoggingConfiguration,
                    f2region: region,
                    webacl: data.LoggingConfiguration.ResourceArn
                }]);
            });
        }));
    }).catch(() => { });

    if (region == "us-east-1") {
        await sdkcall("WAFV2", "listRuleGroups", {
            Scope: "CLOUDFRONT"
        }, true).then(async (data) => {
            await Promise.all(data.RuleGroups.map(ruleGroup => {
                return sdkcall("WAFV2", "getRuleGroup", {
                    Scope: "CLOUDFRONT",
                    Id: ruleGroup.Id,
                    Name: ruleGroup.Name
                }, true).then((data) => {
                    data.RuleGroup['Scope'] = "CLOUDFRONT";

                    $('#section-securityidentityandcompliance-wafandshield-v2rulegroups-datatable').deferredBootstrapTable('append', [{
                        f2id: data.RuleGroup.ARN,
                        f2type: 'waf.v2rulegroup',
                        f2data: data.RuleGroup,
                        f2region: region,
                        name: data.RuleGroup.Name,
                        id: data.RuleGroup.Id,
                        description: data.RuleGroup.Description
                    }]);
                });
            }));
        });
    }

    await sdkcall("WAFV2", "listRuleGroups", {
        Scope: "REGIONAL"
    }, false).then(async (data) => {
        await Promise.all(data.RuleGroups.map(ruleGroup => {
            return sdkcall("WAFV2", "getRuleGroup", {
                Scope: "REGIONAL",
                Id: ruleGroup.Id,
                Name: ruleGroup.Name
            }, true).then((data) => {
                data.RuleGroup['Scope'] = "REGIONAL";

                $('#section-securityidentityandcompliance-wafandshield-v2rulegroups-datatable').deferredBootstrapTable('append', [{
                    f2id: data.RuleGroup.ARN,
                    f2type: 'waf.v2rulegroup',
                    f2data: data.RuleGroup,
                    f2region: region,
                    name: data.RuleGroup.Name,
                    id: data.RuleGroup.Id,
                    description: data.RuleGroup.Description
                }]);
            });
        }));
    }).catch(() => { });

    if (region == "us-east-1") {
        await sdkcall("WAFV2", "listIPSets", {
            Scope: "CLOUDFRONT"
        }, true).then(async (data) => {
            await Promise.all(data.IPSets.map(ipSet => {
                return sdkcall("WAFV2", "getIPSet", {
                    Scope: "CLOUDFRONT",
                    Id: ipSet.Id,
                    Name: ipSet.Name
                }, true).then((data) => {
                    data.IPSet['Scope'] = "CLOUDFRONT";

                    $('#section-securityidentityandcompliance-wafandshield-v2ipsets-datatable').deferredBootstrapTable('append', [{
                        f2id: data.IPSet.ARN,
                        f2type: 'waf.v2ipset',
                        f2data: data.IPSet,
                        f2region: region,
                        name: data.IPSet.Name,
                        id: data.IPSet.Id,
                        description: data.IPSet.Description
                    }]);
                });
            }));
        });
    }

    await sdkcall("WAFV2", "listIPSets", {
        Scope: "REGIONAL"
    }, false).then(async (data) => {
        await Promise.all(data.IPSets.map(ipSet => {
            return sdkcall("WAFV2", "getIPSet", {
                Scope: "REGIONAL",
                Id: ipSet.Id,
                Name: ipSet.Name
            }, true).then((data) => {
                data.IPSet['Scope'] = "REGIONAL";

                $('#section-securityidentityandcompliance-wafandshield-v2ipsets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.IPSet.ARN,
                    f2type: 'waf.v2ipset',
                    f2data: data.IPSet,
                    f2region: region,
                    name: data.IPSet.Name,
                    id: data.IPSet.Id,
                    description: data.IPSet.Description
                }]);
            });
        }));
    }).catch(() => { });

    if (region == "us-east-1") {
        await sdkcall("WAFV2", "listRegexPatternSets", {
            Scope: "CLOUDFRONT"
        }, true).then(async (data) => {
            await Promise.all(data.RegexPatternSets.map(regexPatternSet => {
                return sdkcall("WAFV2", "getRegexPatternSet", {
                    Scope: "CLOUDFRONT",
                    Id: regexPatternSet.Id,
                    Name: regexPatternSet.Name
                }, true).then((data) => {
                    data.RegexPatternSet['Scope'] = "CLOUDFRONT";

                    $('#section-securityidentityandcompliance-wafandshield-v2regexpatternsets-datatable').deferredBootstrapTable('append', [{
                        f2id: data.RegexPatternSet.ARN,
                        f2type: 'waf.v2regexpatternset',
                        f2data: data.RegexPatternSet,
                        f2region: region,
                        name: data.RegexPatternSet.Name,
                        id: data.RegexPatternSet.Id,
                        description: data.RegexPatternSet.Description
                    }]);
                });
            }));
        });
    }

    await sdkcall("WAFV2", "listRegexPatternSets", {
        Scope: "REGIONAL"
    }, false).then(async (data) => {
        await Promise.all(data.RegexPatternSets.map(regexPatternSet => {
            return sdkcall("WAFV2", "getRegexPatternSet", {
                Scope: "REGIONAL",
                Id: regexPatternSet.Id,
                Name: regexPatternSet.Name
            }, true).then((data) => {
                data.RegexPatternSet['Scope'] = "REGIONAL";

                $('#section-securityidentityandcompliance-wafandshield-v2regexpatternsets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.RegexPatternSet.ARN,
                    f2type: 'waf.v2regexpatternset',
                    f2data: data.RegexPatternSet,
                    f2region: region,
                    name: data.RegexPatternSet.Name,
                    id: data.RegexPatternSet.Id,
                    description: data.RegexPatternSet.Description
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("WAF", "listWebACLs", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-webacls-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.WebACLs.map(webAcl => {
            return sdkcall("WAF", "getWebACL", {
                WebACLId: webAcl.WebACLId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-webacls-datatable').deferredBootstrapTable('append', [{
                    f2id: data.WebACL.WebACLId,
                    f2type: 'waf.webacl',
                    f2data: data.WebACL,
                    f2region: region,
                    name: data.WebACL.Name,
                    id: data.WebACL.WebACLId,
                    metricname: data.WebACL.MetricName
                }]);
            });
        }));

        unblockUI('#section-securityidentityandcompliance-wafandshield-webacls-datatable');
    }).catch(() => { });

    await sdkcall("WAF", "listRules", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-rules-datatable').deferredBootstrapTable('removeAll');

        if (data.Rules) {
            await Promise.all(data.Rules.map(rule => {
                return sdkcall("WAF", "getRule", {
                    RuleId: rule.RuleId
                }, true).then((data) => {
                    $('#section-securityidentityandcompliance-wafandshield-rules-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Rule.RuleId,
                        f2type: 'waf.rule',
                        f2data: data.Rule,
                        f2region: region,
                        name: data.Rule.Name,
                        id: data.Rule.RuleId,
                        metricname: data.Rule.MetricName
                    }]);
                });
            }));
        }

        unblockUI('#section-securityidentityandcompliance-wafandshield-rules-datatable');
    }).catch(() => { });

    await sdkcall("WAF", "listXssMatchSets", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-xssmatchsets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.XssMatchSets.map(xssMatchSet => {
            return sdkcall("WAF", "getXssMatchSet", {
                XssMatchSetId: xssMatchSet.XssMatchSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-xssmatchsets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.XssMatchSet.XssMatchSetId,
                    f2type: 'waf.xssmatchset',
                    f2data: data.XssMatchSet,
                    f2region: region,
                    name: data.XssMatchSet.Name,
                    id: data.XssMatchSet.XssMatchSetId
                }]);
            });
        }));

        unblockUI('#section-securityidentityandcompliance-wafandshield-xssmatchsets-datatable');
    }).catch(() => { });

    await sdkcall("WAF", "listIPSets", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-ipsets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.IPSets.map(ipSet => {
            return sdkcall("WAF", "getIPSet", {
                IPSetId: ipSet.IPSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-ipsets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.IPSet.IPSetId,
                    f2type: 'waf.ipset',
                    f2data: data.IPSet,
                    f2region: region,
                    name: data.IPSet.Name,
                    id: data.IPSet.IPSetId
                }]);
            });
        }));

        unblockUI('#section-securityidentityandcompliance-wafandshield-ipsets-datatable');
    }).catch(() => { });

    await sdkcall("WAF", "listSizeConstraintSets", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-sizeconstraintsets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.SizeConstraintSets.map(sizeConstraintSet => {
            return sdkcall("WAF", "getSizeConstraintSet", {
                SizeConstraintSetId: sizeConstraintSet.SizeConstraintSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-sizeconstraintsets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.SizeConstraintSet.SizeConstraintSetId,
                    f2type: 'waf.sizeconstraintset',
                    f2data: data.SizeConstraintSet,
                    f2region: region,
                    name: data.SizeConstraintSet.Name,
                    id: data.SizeConstraintSet.SizeConstraintSetId
                }]);
            });
        }));

        unblockUI('#section-securityidentityandcompliance-wafandshield-sizeconstraintsets-datatable');
    }).catch(() => { });

    await sdkcall("WAF", "listSqlInjectionMatchSets", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-sqlinjectionmatchsets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.SqlInjectionMatchSets.map(sqlInjectionMatchSet => {
            return sdkcall("WAF", "getSqlInjectionMatchSet", {
                SqlInjectionMatchSetId: sqlInjectionMatchSet.SqlInjectionMatchSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-sqlinjectionmatchsets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.SqlInjectionMatchSet.SqlInjectionMatchSetId,
                    f2type: 'waf.sqlinjectionmatchset',
                    f2data: data.SqlInjectionMatchSet,
                    f2region: region,
                    name: data.SqlInjectionMatchSet.Name,
                    id: data.SqlInjectionMatchSet.SqlInjectionMatchSetId
                }]);
            });
        }));

        unblockUI('#section-securityidentityandcompliance-wafandshield-sqlinjectionmatchsets-datatable');
    }).catch(() => { });

    await sdkcall("WAF", "listByteMatchSets", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-bytematchsets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ByteMatchSets.map(byteMatchSet => {
            return sdkcall("WAF", "getByteMatchSet", {
                ByteMatchSetId: byteMatchSet.ByteMatchSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-bytematchsets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ByteMatchSet.ByteMatchSetId,
                    f2type: 'waf.bytematchset',
                    f2data: data.ByteMatchSet,
                    f2region: region,
                    name: data.ByteMatchSet.Name,
                    id: data.ByteMatchSet.ByteMatchSetId
                }]);
            });
        }));

        unblockUI('#section-securityidentityandcompliance-wafandshield-bytematchsets-datatable');
    }).catch(() => { });

    // Regional

    await sdkcall("WAFRegional", "listWebACLs", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-regionalwebacls-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-wafandshield-regionalwebaclassociations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.WebACLs.map(webAcl => {
            return Promise.all([
                sdkcall("WAFRegional", "getWebACL", {
                    WebACLId: webAcl.WebACLId
                }, true).then((data) => {
                    $('#section-securityidentityandcompliance-wafandshield-regionalwebacls-datatable').deferredBootstrapTable('append', [{
                        f2id: data.WebACL.WebACLId,
                        f2type: 'wafregional.webacl',
                        f2data: data.WebACL,
                        f2region: region,
                        name: data.WebACL.Name,
                        id: data.WebACL.WebACLId,
                        metricname: data.WebACL.MetricName
                    }]);
                }),
                sdkcall("WAFRegional", "listResourcesForWebACL", {
                    WebACLId: webAcl.WebACLId
                }, true).then((data) => {
                    data.ResourceArns.forEach(resourceArn => {
                        $('#section-securityidentityandcompliance-wafandshield-regionalwebaclassociations-datatable').deferredBootstrapTable('append', [{
                            f2id: resourceArn,
                            f2type: 'wafregional.webaclassociation',
                            f2data: {
                                'ResourceArn': resourceArn,
                                'WebACLId': webAcl.WebACLId
                            },
                            f2region: region,
                            resourcearn: resourceArn,
                            webaclid: webAcl.WebACLId
                        }]);
                    });
                })
            ]);
        }));

        unblockUI('#section-securityidentityandcompliance-wafandshield-regionalwebacls-datatable');
        unblockUI('#section-securityidentityandcompliance-wafandshield-regionalwebaclassociations-datatable');
    }).catch(() => { });

    await sdkcall("WAFRegional", "listRules", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-regionalrules-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Rules.map(rule => {
            return sdkcall("WAFRegional", "getRule", {
                RuleId: rule.RuleId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalrules-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Rule.RuleId,
                    f2type: 'wafregional.rule',
                    f2data: data.Rule,
                    f2region: region,
                    name: data.Rule.Name,
                    id: data.Rule.RuleId,
                    metricname: data.Rule.MetricName
                }]);
            });
        }));

        unblockUI('#section-securityidentityandcompliance-wafandshield-regionalrules-datatable');
    }).catch(() => { });

    await sdkcall("WAFRegional", "listXssMatchSets", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-regionalxssmatchsets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.XssMatchSets.map(xssMatchSet => {
            return sdkcall("WAFRegional", "getXssMatchSet", {
                XssMatchSetId: xssMatchSet.XssMatchSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalxssmatchsets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.XssMatchSet.XssMatchSetId,
                    f2type: 'wafregional.xssmatchset',
                    f2data: data.XssMatchSet,
                    f2region: region,
                    name: data.XssMatchSet.Name,
                    id: data.XssMatchSet.XssMatchSetId
                }]);
            });
        }));

        unblockUI('#section-securityidentityandcompliance-wafandshield-regionalxssmatchsets-datatable');
    }).catch(() => { });

    await sdkcall("WAFRegional", "listIPSets", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-regionalipsets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.IPSets.map(ipSet => {
            return sdkcall("WAFRegional", "getIPSet", {
                IPSetId: ipSet.IPSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalipsets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.IPSet.IPSetId,
                    f2type: 'wafregional.ipset',
                    f2data: data.IPSet,
                    f2region: region,
                    name: data.IPSet.Name,
                    id: data.IPSet.IPSetId
                }]);
            });
        }));

        unblockUI('#section-securityidentityandcompliance-wafandshield-regionalipsets-datatable');
    }).catch(() => { });

    await sdkcall("WAFRegional", "listSizeConstraintSets", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-regionalsizeconstraintsets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.SizeConstraintSets.map(sizeConstraintSet => {
            return sdkcall("WAFRegional", "getSizeConstraintSet", {
                SizeConstraintSetId: sizeConstraintSet.SizeConstraintSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalsizeconstraintsets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.SizeConstraintSet.SizeConstraintSetId,
                    f2type: 'wafregional.sizeconstraintset',
                    f2data: data.SizeConstraintSet,
                    f2region: region,
                    name: data.SizeConstraintSet.Name,
                    id: data.SizeConstraintSet.SizeConstraintSetId
                }]);
            });
        }));

        unblockUI('#section-securityidentityandcompliance-wafandshield-regionalsizeconstraintsets-datatable');
    }).catch(() => { });

    await sdkcall("WAFRegional", "listSqlInjectionMatchSets", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-regionalsqlinjectionmatchsets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.SqlInjectionMatchSets.map(sqlInjectionMatchSet => {
            return sdkcall("WAFRegional", "getSqlInjectionMatchSet", {
                SqlInjectionMatchSetId: sqlInjectionMatchSet.SqlInjectionMatchSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalsqlinjectionmatchsets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.SqlInjectionMatchSet.SqlInjectionMatchSetId,
                    f2type: 'wafregional.sqlinjectionmatchset',
                    f2data: data.SqlInjectionMatchSet,
                    f2region: region,
                    name: data.SqlInjectionMatchSet.Name
                }]);
            });
        }));

        unblockUI('#section-securityidentityandcompliance-wafandshield-regionalsqlinjectionmatchsets-datatable');
    }).catch(() => { });

    await sdkcall("WAFRegional", "listByteMatchSets", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-regionalbytematchsets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ByteMatchSets.map(byteMatchSet => {
            return sdkcall("WAFRegional", "getByteMatchSet", {
                ByteMatchSetId: byteMatchSet.ByteMatchSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalbytematchsets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ByteMatchSet.ByteMatchSetId,
                    f2type: 'wafregional.bytematchset',
                    f2data: data.ByteMatchSet,
                    f2region: region,
                    name: data.BytenMatchSet.Name,
                    id: data.ByteMatchSet.ByteMatchSetId
                }]);
            });
        }));

        unblockUI('#section-securityidentityandcompliance-wafandshield-regionalbytematchsets-datatable');
    }).catch(() => { });

    await sdkcall("WAFRegional", "listGeoMatchSets", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-regionalgeomatchsets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.GeoMatchSets.map(geoMatchSet => {
            return sdkcall("WAFRegional", "getGeoMatchSet", {
                GeoMatchSetId: geoMatchSet.GeoMatchSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalgeomatchsets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.GeoMatchSet.GeoMatchSetId,
                    f2type: 'wafregional.geomatchset',
                    f2data: data.GeoMatchSet,
                    f2region: region,
                    name: data.GeoMatchSet.Name,
                    id: data.GeoMatchSet.GeoMatchSetId
                }]);
            });
        }));

        unblockUI('#section-securityidentityandcompliance-wafandshield-regionalgeomatchsets-datatable');
    }).catch(() => { });

    await sdkcall("WAFRegional", "listRegexPatternSets", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-regionalregexpatternsets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.RegexPatternSets.map(regexPatternSet => {
            return sdkcall("WAFRegional", "getRegexPatternSet", {
                RegexPatternSetId: regexPatternSet.RegexPatternSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalregexpatternsets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.RegexPatternSet.RegexPatternSetId,
                    f2type: 'wafregional.regexpatternset',
                    f2data: data.RegexPatternSet,
                    f2region: region,
                    name: data.RegexPatternSet.Name,
                    id: data.RegexPatternSet.RegexPatternSetId
                }]);
            });
        }));

        unblockUI('#section-securityidentityandcompliance-wafandshield-regionalregexpatternsets-datatable');
    }).catch(() => { });

    await sdkcall("WAFRegional", "listRateBasedRules", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-regionalratebasedrules-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Rules.map(rule => {
            return sdkcall("WAFRegional", "getRateBasedRule", {
                RuleId: rule.RuleId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalratebasedrules-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Rule.RegexPatternSetId,
                    f2type: 'wafregional.ratebasedrule',
                    f2data: data.Rule,
                    f2region: region,
                    name: data.Rule.Name,
                    id: data.Rule.RuleId,
                    metricname: data.Rule.MetricName,
                    ratelimit: data.Rule.RateLimit
                }]);
            });
        }));

        unblockUI('#section-securityidentityandcompliance-wafandshield-regionalratebasedrules-datatable');
    }).catch(() => { });

    await sdkcall("FMS", "listPolicies", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-firewallmanagerpolicies-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.PolicyList.map(policy => {
            return sdkcall("FMS", "getPolicy", {
                PolicyId: policy.PolicyId
            }, true).then((data) => {
                data.Policy['PolicyArn'] = data.PolicyArn;

                $('#section-securityidentityandcompliance-wafandshield-firewallmanagerpolicies-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Policy.PolicyId,
                    f2type: 'fms.policy',
                    f2data: data.Policy,
                    f2region: region,
                    name: data.Policy.PolicyName,
                    resourcetype: data.Policy.ResourceType,
                    servicesecuritytype: data.Policy.SecurityServicePolicyData.Type
                }]);
            });
        }));

        unblockUI('#section-securityidentityandcompliance-wafandshield-firewallmanagerpolicies-datatable');
    }).catch(() => { });

    await sdkcall("FMS", "getNotificationChannel", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-wafandshield-firewallmanagernotifcationchannel-datatable').deferredBootstrapTable('removeAll');
        
        $('#section-securityidentityandcompliance-wafandshield-firewallmanagernotifcationchannel-datatable').deferredBootstrapTable('append', [{
            f2id: 'FMSNotificationChannel',
            f2type: 'fms.notificationchannel',
            f2data: {
                'SnsTopicArn': data.SnsTopicArn,
                'SnsRoleName': data.SnsRoleName
            },
            f2region: region,
            topicarn: data.SnsTopicArn,
            rolename: data.SnsRoleName
        }]);

        unblockUI('#section-securityidentityandcompliance-wafandshield-firewallmanagernotifcationchannel-datatable');
    }).catch(() => { });

    unblockUI('#section-securityidentityandcompliance-wafandshield-v2webacls-datatable');
    unblockUI('#section-securityidentityandcompliance-wafandshield-loggingconfigurations-datatable');
    unblockUI('#section-securityidentityandcompliance-wafandshield-v2rulegroups-datatable');
    unblockUI('#section-securityidentityandcompliance-wafandshield-v2ipsets-datatable');
    unblockUI('#section-securityidentityandcompliance-wafandshield-v2regexpatternsets-datatable');
    unblockUI('#section-securityidentityandcompliance-wafandshield-v2webaclassociations-datatable');
    unblockUI('#section-securityidentityandcompliance-wafandshield-firewallmanagerpolicies-datatable');
    unblockUI('#section-securityidentityandcompliance-wafandshield-firewallmanagernotifcationchannel-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "waf.webacl") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['MetricName'] = obj.data.MetricName;
        reqParams.tf['metric_name'] = obj.data.MetricName;
        reqParams.cfn['DefaultAction'] = obj.data.DefaultAction;
        if (obj.data.DefaultAction) {
            reqParams.tf['default_action'] = {
                'type': obj.data.DefaultAction.Type
            };
        }
        if (obj.data.Rules) {
            reqParams.cfn['Rules'] = [];
            reqParams.tf['rules'] = [];
            obj.data.Rules.forEach(rule => {
                var tfaction = null;
                if (rule.Action) {
                    tfaction = {
                        'type': rule.Action.Type
                    };
                }
                reqParams.cfn['Rules'].push({
                    'Priority': rule.Priority,
                    'RuleId': rule.RuleId,
                    'Action': rule.Action
                });
                reqParams.tf['rules'].push({
                    'priority': rule.Priority,
                    'rule_id': rule.RuleId,
                    'action': tfaction
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('waf', obj.id, 'AWS::WAF::WebACL'),
            'region': obj.region,
            'service': 'waf',
            'type': 'AWS::WAF::WebACL',
            'terraformType': 'aws_waf_web_acl',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.WebACLId
            }
        });
    } else if (obj.type == "waf.rule") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['MetricName'] = obj.data.MetricName;
        reqParams.tf['metric_name'] = obj.data.MetricName;
        reqParams.cfn['Predicates'] = obj.data.Predicates;
        if (obj.data.Predicates) {
            reqParams.tf['predicates'] = [];
            obj.data.Predicates.forEach(predicate => {
                reqParams.tf['predicates'].push({
                    'data_id': predicate.DataId,
                    'negated': predicate.Negated,
                    'type': predicate.Type
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('waf', obj.id, 'AWS::WAF::Rule'),
            'region': obj.region,
            'service': 'waf',
            'type': 'AWS::WAF::Rule',
            'terraformType': 'aws_waf_rule',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.RuleId
            }
        });
    } else if (obj.type == "waf.xssmatchset") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['XssMatchTuples'] = obj.data.XssMatchTuples;
        if (obj.data.XssMatchTuples) {
            reqParams.tf['xss_match_tuples'] = [];
            obj.data.XssMatchTuples.forEach(xssmatchtuple => {
                reqParams.tf['xss_match_tuples'].push({
                    'field_to_match': {
                        'data': xssmatchtuple.FieldToMatch.Data,
                        'type': xssmatchtuple.FieldToMatch.Type
                    },
                    'text_transformation': xssmatchtuple.TextTransformation
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('waf', obj.id, 'AWS::WAF::XssMatchSet'),
            'region': obj.region,
            'service': 'waf',
            'type': 'AWS::WAF::XssMatchSet',
            'terraformType': 'aws_waf_xss_match_set',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.XssMatchSetId
            }
        });
    } else if (obj.type == "waf.ipset") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['IPSetDescriptors'] = obj.data.IPSetDescriptors;
        if (obj.data.IPSetDescriptors) {
            reqParams.tf['ip_set_descriptors'] = [];
            obj.data.IPSetDescriptors.forEach(ipsetdescriptor => {
                reqParams.tf['ip_set_descriptors'].push({
                    'type': ipsetdescriptor.Type,
                    'value': ipsetdescriptor.Value
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('waf', obj.id, 'AWS::WAF::IPSet'),
            'region': obj.region,
            'service': 'waf',
            'type': 'AWS::WAF::IPSet',
            'terraformType': 'aws_waf_ipset',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.IPSetId
            }
        });
    } else if (obj.type == "waf.sizeconstraintset") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['SizeConstraints'] = obj.data.SizeConstraints;
        if (obj.data.SizeConstraints) {
            reqParams.tf['size_constraints'] = [];
            obj.data.SizeConstraints.forEach(sizeconstraints => {
                reqParams.tf['size_constraints'].push({
                    'text_transformation': sizeconstraints.TextTransformation,
                    'comparison_operator': sizeconstraints.ComparisonOperator,
                    'size': sizeconstraints.Size,
                    'field_to_match': {
                        'data': sizeconstraints.FieldToMatch.Data,
                        'type': sizeconstraints.FieldToMatch.Type
                    }
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('waf', obj.id, 'AWS::WAF::SizeConstraintSet'),
            'region': obj.region,
            'service': 'waf',
            'type': 'AWS::WAF::SizeConstraintSet',
            'terraformType': 'aws_waf_size_constraint_set',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.SizeConstraintSetId
            }
        });
    } else if (obj.type == "waf.sqlinjectionmatchset") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['SqlInjectionMatchTuples'] = obj.data.SqlInjectionMatchTuples;
        if (obj.data.SqlInjectionMatchTuples) {
            reqParams.tf['sql_injection_match_tuples'] = [];
            obj.data.SqlInjectionMatchTuples.forEach(sqlinjectionmatchtuples => {
                reqParams.tf['sql_injection_match_tuples'] = {
                    'text_transformation': sqlinjectionmatchtuples.TextTransformation,
                    'field_to_match': {
                        'data': sqlinjectionmatchtuples.FieldToMatch.Data,
                        'type': sqlinjectionmatchtuples.FieldToMatch.Type,
                    }
                }
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('waf', obj.id, 'AWS::WAF::SqlInjectionMatchSet'),
            'region': obj.region,
            'service': 'waf',
            'type': 'AWS::WAF::SqlInjectionMatchSet',
            'terraformType': 'aws_waf_sql_injection_match_set',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.SqlInjectionMatchSetId
            }
        });
    } else if (obj.type == "waf.bytematchset") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['ByteMatchTuples'] = obj.data.ByteMatchTuples;
        if (obj.data.ByteMatchTuples) {
            reqParams.tf['byte_match_tuples'] = [];
            obj.data.ByteMatchTuples.forEach(bytematchtuples => {
                reqParams.tf['byte_match_tuples'].push({
                    'text_transformation': bytematchtuples.TextTransformation,
                    'target_string': bytematchtuples.TargetString.toString(),
                    'positional_constraint': bytematchtuples.PositionalConstraint,
                    'field_to_match': {
                        'type': bytematchtuples.FieldToMatch.Type,
                        'data': bytematchtuples.FieldToMatch.Data
                    }
                });
            });
        }

        /*
        SKIPPED: TargetStringBase64
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('waf', obj.id, 'AWS::WAF::ByteMatchSet'),
            'region': obj.region,
            'service': 'waf',
            'type': 'AWS::WAF::ByteMatchSet',
            'terraformType': 'aws_waf_byte_match_set',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ByteMatchSetId
            }
        });
    } else if (obj.type == "wafregional.webacl") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['MetricName'] = obj.data.MetricName;
        reqParams.tf['metric_name'] = obj.data.MetricName;
        reqParams.cfn['DefaultAction'] = obj.data.DefaultAction;
        if (obj.data.DefaultAction) {
            reqParams.tf['default_action'] = {
                'type': obj.data.DefaultAction.Type
            };
        }
        if (obj.data.Rules) {
            reqParams.cfn['Rules'] = [];
            reqParams.tf['rules'] = [];
            obj.data.Rules.forEach(rule => {
                var tfaction = null;
                if (rule.Action) {
                    tfaction = {
                        'type': rule.Action.Type
                    };
                }
                reqParams.cfn['Rules'].push({
                    'Priority': rule.Priority,
                    'RuleId': rule.RuleId,
                    'Action': rule.Action
                });
                reqParams.tf['rules'].push({
                    'priority': rule.Priority,
                    'rule_id': rule.RuleId,
                    'action': tfaction
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('wafregional', obj.id, 'AWS::WAFRegional::WebACL'),
            'region': obj.region,
            'service': 'wafregional',
            'type': 'AWS::WAFRegional::WebACL',
            'terraformType': 'aws_wafregional_web_acl',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.WebACLId
            }
        });
    } else if (obj.type == "wafregional.webaclassociation") {
        reqParams.cfn['ResourceArn'] = obj.data.ResourceArn;
        reqParams.tf['resource_arn'] = obj.data.ResourceArn;
        reqParams.cfn['WebACLId'] = obj.data.WebACLId;
        reqParams.tf['web_acl_id'] = obj.data.WebACLId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('wafregional', obj.id, 'AWS::WAFRegional::WebACLAssociation'),
            'region': obj.region,
            'service': 'wafregional',
            'type': 'AWS::WAFRegional::WebACLAssociation',
            'terraformType': 'aws_wafregional_web_acl_association',
            'options': reqParams
        });
    } else if (obj.type == "wafregional.rule") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['MetricName'] = obj.data.MetricName;
        reqParams.tf['metric_name'] = obj.data.MetricName;
        reqParams.cfn['Predicates'] = obj.data.Predicates;
        if (obj.data.Predicates) {
            reqParams.tf['predicates'] = [];
            obj.data.Predicates.forEach(predicate => {
                reqParams.tf['predicates'].push({
                    'data_id': predicate.DataId,
                    'negated': predicate.Negated,
                    'type': predicate.Type
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('wafregional', obj.id, 'AWS::WAFRegional::Rule'),
            'region': obj.region,
            'service': 'wafregional',
            'type': 'AWS::WAFRegional::Rule',
            'terraformType': 'aws_wafregional_rule',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.RuleId
            }
        });
    } else if (obj.type == "wafregional.xssmatchset") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['XssMatchTuples'] = obj.data.XssMatchTuples;
        if (obj.data.XssMatchTuples) {
            reqParams.tf['xss_match_tuples'] = [];
            obj.data.XssMatchTuples.forEach(xssmatchtuple => {
                reqParams.tf['xss_match_tuples'].push({
                    'field_to_match': {
                        'data': xssmatchtuple.FieldToMatch.Data,
                        'type': xssmatchtuple.FieldToMatch.Type
                    },
                    'text_transformation': xssmatchtuple.TextTransformation
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('wafregional', obj.id, 'AWS::WAFRegional::XssMatchSet'),
            'region': obj.region,
            'service': 'wafregional',
            'type': 'AWS::WAFRegional::XssMatchSet',
            'terraformType': 'aws_wafregional_xss_match_set',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.XssMatchSetId
            }
        });
    } else if (obj.type == "wafregional.ipset") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['IPSetDescriptors'] = obj.data.IPSetDescriptors;
        if (obj.data.IPSetDescriptors) {
            reqParams.tf['ip_set_descriptors'] = [];
            obj.data.IPSetDescriptors.forEach(ipsetdescriptor => {
                reqParams.tf['ip_set_descriptors'].push({
                    'type': ipsetdescriptor.Type,
                    'value': ipsetdescriptor.Value
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('wafregional', obj.id, 'AWS::WAFRegional::IPSet'),
            'region': obj.region,
            'service': 'wafregional',
            'type': 'AWS::WAFRegional::IPSet',
            'terraformType': 'aws_wafregional_ipset',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.IPSetId
            }
        });
    } else if (obj.type == "wafregional.sizeconstraintset") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['SizeConstraints'] = obj.data.SizeConstraints;
        if (obj.data.SizeConstraints) {
            reqParams.tf['size_constraints'] = [];
            obj.data.SizeConstraints.forEach(sizeconstraints => {
                reqParams.tf['size_constraints'].push({
                    'text_transformation': sizeconstraints.TextTransformation,
                    'comparison_operator': sizeconstraints.ComparisonOperator,
                    'size': sizeconstraints.Size,
                    'field_to_match': {
                        'data': sizeconstraints.FieldToMatch.Data,
                        'type': sizeconstraints.FieldToMatch.Type
                    }
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('wafregional', obj.id, 'AWS::WAFRegional::SizeConstraintSet'),
            'region': obj.region,
            'service': 'wafregional',
            'type': 'AWS::WAFRegional::SizeConstraintSet',
            'terraformType': 'aws_wafregional_size_constraint_set',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.SizeConstraintSetId
            }
        });
    } else if (obj.type == "wafregional.sqlinjectionmatchset") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['SqlInjectionMatchTuples'] = obj.data.SqlInjectionMatchTuples;
        if (obj.data.SqlInjectionMatchTuples) {
            reqParams.tf['sql_injection_match_tuples'] = [];
            obj.data.SqlInjectionMatchTuples.forEach(sqlinjectionmatchtuples => {
                reqParams.tf['sql_injection_match_tuples'] = {
                    'text_transformation': sqlinjectionmatchtuples.TextTransformation,
                    'field_to_match': {
                        'data': sqlinjectionmatchtuples.FieldToMatch.Data,
                        'type': sqlinjectionmatchtuples.FieldToMatch.Type,
                    }
                }
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('wafregional', obj.id, 'AWS::WAFRegional::SqlInjectionMatchSet'),
            'region': obj.region,
            'service': 'wafregional',
            'type': 'AWS::WAFRegional::SqlInjectionMatchSet',
            'terraformType': 'aws_wafregional_sql_injection_match_set',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.SqlInjectionMatchSetId
            }
        });
    } else if (obj.type == "wafregional.bytematchset") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['ByteMatchTuples'] = obj.data.ByteMatchTuples;
        if (obj.data.ByteMatchTuples) {
            reqParams.tf['byte_match_tuples'] = [];
            obj.data.ByteMatchTuples.forEach(bytematchtuples => {
                reqParams.tf['byte_match_tuples'].push({
                    'text_transformation': bytematchtuples.TextTransformation,
                    'target_string': bytematchtuples.TargetString.toString(),
                    'positional_constraint': bytematchtuples.PositionalConstraint,
                    'field_to_match': {
                        'type': bytematchtuples.FieldToMatch.Type,
                        'data': bytematchtuples.FieldToMatch.Data
                    }
                });
            });
        }

        /*
        SKIPPED: TargetStringBase64
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('wafregional', obj.id, 'AWS::WAFRegional::ByteMatchSet'),
            'region': obj.region,
            'service': 'wafregional',
            'type': 'AWS::WAFRegional::ByteMatchSet',
            'terraformType': 'aws_wafregional_byte_match_set',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ByteMatchSetId
            }
        });
    } else if (obj.type == "wafregional.geomatchset") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['GeoMatchConstraints'] = obj.data.GeoMatchConstraints;
        if (obj.data.GeoMatchConstraints) {
            reqParams.tf['geo_match_constraint'] = [];
            obj.data.GeoMatchConstraints.forEach(geomatchconstraint => {
                reqParams.tf['geo_match_constraint'].push({
                    'type': geomatchconstraint.Type,
                    'value': geomatchconstraint.Value
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('wafregional', obj.id, 'AWS::WAFRegional::GeoMatchSet'),
            'region': obj.region,
            'service': 'wafregional',
            'type': 'AWS::WAFRegional::GeoMatchSet',
            'terraformType': 'aws_wafregional_geo_match_set',
            'options': reqParams
        });
    } else if (obj.type == "wafregional.regexpatternset") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['RegexPatternStrings'] = obj.data.RegexPatternStrings;
        reqParams.tf['regex_pattern_strings'] = obj.data.RegexPatternStrings;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('wafregional', obj.id, 'AWS::WAFRegional::RegexPatternSet'),
            'region': obj.region,
            'service': 'wafregional',
            'type': 'AWS::WAFRegional::RegexPatternSet',
            'terraformType': 'aws_wafregional_regex_pattern_set',
            'options': reqParams
        });
    } else if (obj.type == "wafregional.ratebasedrule") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['MetricName'] = obj.data.MetricName;
        reqParams.tf['metric_name'] = obj.data.MetricName;
        reqParams.cfn['RateKey'] = obj.data.RateKey;
        reqParams.tf['rate_key'] = obj.data.RateKey;
        reqParams.cfn['RateLimit'] = obj.data.RateLimit;
        reqParams.tf['rate_limit'] = obj.data.RateLimit;
        reqParams.cfn['MatchPredicates'] = [];
        reqParams.tf['predicate'] = [];
        obj.data.MatchPredicates.forEach(matchpredicate => {
            reqParams.cfn['MatchPredicates'].push({
                'Negated': matchpredicate.Negated,
                'Type': matchpredicate.Type,
                'DataId': matchpredicate.DataId
            });
            reqParams.tf['predicate'].push({
                'negated': matchpredicate.Negated,
                'type': matchpredicate.Type,
                'data_id': matchpredicate.DataId
            });
        });

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('wafregional', obj.id, 'AWS::WAFRegional::RateBasedRule'),
            'region': obj.region,
            'service': 'wafregional',
            'type': 'AWS::WAFRegional::RateBasedRule',
            'terraformType': 'aws_wafregional_rate_based_rule',
            'options': reqParams
        });
    } else if (obj.type == "waf.v2ipset") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['IPAddressVersion'] = obj.data.IPAddressVersion;
        reqParams.cfn['Addresses'] = obj.data.Addresses;
        reqParams.cfn['Scope'] = obj.data.Scope;

        /*
        TODO:
        Tags: 
            TagList
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('waf', obj.id, 'AWS::WAFv2::IPSet'),
            'region': obj.region,
            'service': 'waf',
            'type': 'AWS::WAFv2::IPSet',
            'options': reqParams,
            'returnValues':  {
                'Ref': obj.data.Name + "|" + obj.data.Id + "|" + obj.data.Scope,
                'GetAtt': {
                    'Id': obj.data.Id,
                    'Arn': obj.data.ARN
                },
                'Import': {
                    'Name': obj.data.Name,
                    'Id': obj.data.Id,
                    'Scope': obj.data.Scope
                }
            }
        });
    } else if (obj.type == "waf.v2regexpatternset") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['RegularExpressionList'] = obj.data.RegularExpressionList;
        reqParams.cfn['Scope'] = obj.data.Scope;

        /*
        TODO:
        Tags: 
            TagList
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('waf', obj.id, 'AWS::WAFv2::RegexPatternSet'),
            'region': obj.region,
            'service': 'waf',
            'type': 'AWS::WAFv2::RegexPatternSet',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Arn': obj.data.ARN,
                    'Id': obj.data.Id
                },
                'Import': {
                    'Name': obj.data.Name,
                    'Id': obj.data.Id,
                    'Scope': obj.data.Scope
                }
            }
        });
    } else if (obj.type == "waf.v2webacl") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['DefaultAction'] = obj.data.DefaultAction;
        reqParams.cfn['VisibilityConfig'] = obj.data.VisibilityConfig;
        reqParams.cfn['Scope'] = obj.data.Scope;
        if (obj.data.Rules) {
            reqParams.cfn['Rules'] = [];
            obj.data.Rules.forEach(rule => {
                var regexpatternsetreferencestatement = null;
                var rulegroupreferencestatement = null;
                if (rule.Statement.RegexPatternSetReferenceStatement) {
                    regexpatternsetreferencestatement = {
                        'Arn': rule.Statement.RegexPatternSetReferenceStatement.ARN,
                        'FieldToMatch': rule.Statement.RegexPatternSetReferenceStatement.FieldToMatch,
                        'TextTransformations': rule.Statement.RegexPatternSetReferenceStatement.TextTransformations
                    };
                }
                if (rule.Statement.RuleGroupReferenceStatement) {
                    rulegroupreferencestatement = {
                        'Arn': rule.Statement.RuleGroupReferenceStatement.ARN,
                        'ExcludedRules': rule.Statement.RuleGroupReferenceStatement.ExcludedRules
                    };
                }

                var statement = {
                    'AndStatement': rule.Statement.AndStatement,
                    'ByteMatchStatement': rule.Statement.ByteMatchStatement,
                    'GeoMatchStatement': rule.Statement.GeoMatchStatement,
                    'IPSetReferenceStatement': rule.Statement.IPSetReferenceStatement,
                    'ManagedRuleGroupStatement': rule.Statement.ManagedRuleGroupStatement,
                    'NotStatement': rule.Statement.NotStatement,
                    'OrStatement': rule.Statement.OrStatement,
                    'RateBasedStatement': rule.Statement.RateBasedStatement,
                    'RegexPatternSetReferenceStatement': regexpatternsetreferencestatement,
                    'RuleGroupReferenceStatement': rulegroupreferencestatement,
                    'SizeConstraintStatement': rule.Statement.SizeConstraintStatement,
                    'SqliMatchStatement': rule.Statement.SqliMatchStatement,
                    'XssMatchStatement': rule.Statement.XssMatchStatement
                };

                reqParams.cfn['Rules'].push({
                    'Name': rule.Name,
                    'Priority': rule.Priority,
                    'Action': rule.Action,
                    'OverrideAction': rule.OverrideAction,
                    'Statement': statement,
                    'VisibilityConfig': rule.VisibilityConfig
                });
            });
        }

        /*
        TODO:
        Tags: 
            TagList
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('waf', obj.id, 'AWS::WAFv2::WebACL'),
            'region': obj.region,
            'service': 'waf',
            'type': 'AWS::WAFv2::WebACL',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Arn': obj.data.ARN,
                    'Capacity': obj.data.Capacity,
                    'Id': obj.data.Id
                },
                'Import': {
                    'Name': obj.data.Name,
                    'Id': obj.data.Id,
                    'Scope': obj.data.Scope
                }
            }
        });
    } else if (obj.type == "waf.v2rulegroup") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Capacity'] = obj.data.Capacity;
        reqParams.cfn['VisibilityConfig'] = obj.data.VisibilityConfig;
        reqParams.cfn['Scope'] = obj.data.Scope;
        if (obj.data.Rules) {
            reqParams.cfn['Rules'] = [];
            obj.data.Rules.forEach(rule => {
                var regexpatternsetreferencestatement = null;
                if (rule.Statement.RegexPatternSetReferenceStatement) {
                    regexpatternsetreferencestatement = {
                        'Arn': rule.Statement.RegexPatternSetReferenceStatement.ARN,
                        'FieldToMatch': rule.Statement.RegexPatternSetReferenceStatement.FieldToMatch,
                        'TextTransformations': rule.Statement.RegexPatternSetReferenceStatement.TextTransformations
                    };
                }

                var statement = {
                    'AndStatement': rule.Statement.AndStatement,
                    'ByteMatchStatement': rule.Statement.ByteMatchStatement,
                    'GeoMatchStatement': rule.Statement.GeoMatchStatement,
                    'IPSetReferenceStatement': rule.Statement.IPSetReferenceStatement,
                    'NotStatement': rule.Statement.NotStatement,
                    'OrStatement': rule.Statement.OrStatement,
                    'RateBasedStatement': rule.Statement.RateBasedStatement,
                    'RegexPatternSetReferenceStatement': regexpatternsetreferencestatement,
                    'SizeConstraintStatement': rule.Statement.SizeConstraintStatement,
                    'SqliMatchStatement': rule.Statement.SqliMatchStatement,
                    'XssMatchStatement': rule.Statement.XssMatchStatement
                };

                reqParams.cfn['Rules'].push({
                    'Name': rule.Name,
                    'Priority': rule.Priority,
                    'Action': rule.Action,
                    'Statement': statement,
                    'VisibilityConfig': rule.VisibilityConfig
                });
            });
        }

        /*
        TODO:
        Rules: 
            Rules
        Tags: 
            TagList
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('waf', obj.id, 'AWS::WAFv2::RuleGroup'),
            'region': obj.region,
            'service': 'waf',
            'type': 'AWS::WAFv2::RuleGroup',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Arn': obj.data.ARN,
                    'Id': obj.data.Id
                },
                'Import': {
                    'Name': obj.data.Name,
                    'Id': obj.data.Id,
                    'Scope': obj.data.Scope
                }
            }
        });
    } else if (obj.type == "waf.v2webaclassociation") {
        reqParams.cfn['ResourceArn'] = obj.data.ResourceArn;
        reqParams.cfn['WebACLArn'] = obj.data.WebACLArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('waf', obj.id, 'AWS::WAFv2::WebACLAssociation'),
            'region': obj.region,
            'service': 'waf',
            'type': 'AWS::WAFv2::WebACLAssociation',
            'options': reqParams,
            'returnValues': {
                'Import': {
                    'ResourceArn': obj.data.ResourceArn,
                    'WebACLArn': obj.data.WebACLArn
                }
            }
        });
    } else if (obj.type == "fms.policy") {
        reqParams.cfn['PolicyName'] = obj.data.PolicyName;
        reqParams.cfn['SecurityServicePolicyData'] = obj.data.SecurityServicePolicyData;
        reqParams.cfn['ResourceType'] = obj.data.ResourceType;
        reqParams.cfn['ResourceTypeList'] = obj.data.ResourceTypeList;
        reqParams.cfn['ResourceTags'] = obj.data.ResourceTags;
        reqParams.cfn['ExcludeResourceTags'] = obj.data.ExcludeResourceTags;
        reqParams.cfn['RemediationEnabled'] = obj.data.RemediationEnabled;
        reqParams.cfn['IncludeMap'] = obj.data.IncludeMap;
        reqParams.cfn['ExcludeMap'] = obj.data.ExcludeMap;
        reqParams.cfn['PolicyName'] = obj.data.PolicyName;

        /*
        TODO:
        DeleteAllPolicyResources: Boolean
        Tags: 
            - PolicyTag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('fms', obj.id, 'AWS::FMS::Policy'),
            'region': obj.region,
            'service': 'fms',
            'type': 'AWS::FMS::Policy',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.PolicyId,
                'GetAtt': {
                    'Id': obj.data.PolicyId,
                    'Arn': obj.data.PolicyArn
                },
                'Import': {
                    'Id': obj.data.PolicyId
                }
            }
        });
    } else if (obj.type == "fms.notificationchannel") {
        reqParams.cfn['SnsRoleName'] = obj.data.SnsRoleName;
        reqParams.cfn['SnsTopicArn'] = obj.data.SnsTopicArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('fms', obj.id, 'AWS::FMS::NotificationChannel'),
            'region': obj.region,
            'service': 'fms',
            'type': 'AWS::FMS::NotificationChannel',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.SnsTopicArn,
                'Import': {
                    'SnsTopicArn': obj.data.SnsTopicArn
                }
            }
        });
    } else if (obj.type == "waf.loggingconfiguration") {
        reqParams.cfn['ResourceArn'] = obj.data.ResourceArn;
        reqParams.cfn['LogDestinationConfigs'] = obj.data.LogDestinationConfigs;
        reqParams.cfn['RedactedFields'] = obj.data.RedactedFields;
        reqParams.cfn['LoggingFilter'] = obj.data.LoggingFilter;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('waf', obj.id, 'AWS::WAFv2::LoggingConfiguration'),
            'region': obj.region,
            'service': 'waf',
            'type': 'AWS::WAFv2::LoggingConfiguration',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
