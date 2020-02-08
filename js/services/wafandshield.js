/* ========================================================================== */
// WAF & Shield
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity &amp; Compliance',
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

    $('#section-securityidentityandcompliance-wafandshield-v2webacls-datatable').bootstrapTable('removeAll');
    $('#section-securityidentityandcompliance-wafandshield-v2rulegroups-datatable').bootstrapTable('removeAll');
    $('#section-securityidentityandcompliance-wafandshield-v2ipsets-datatable').bootstrapTable('removeAll');
    $('#section-securityidentityandcompliance-wafandshield-v2regexpatternsets-datatable').bootstrapTable('removeAll');
    $('#section-securityidentityandcompliance-wafandshield-v2webaclassociations-datatable').bootstrapTable('removeAll');

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

                    $('#section-securityidentityandcompliance-wafandshield-v2webacls-datatable').bootstrapTable('append', [{
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
                    $('#section-securityidentityandcompliance-wafandshield-v2webaclassociations-datatable').bootstrapTable('append', [{
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
                    $('#section-securityidentityandcompliance-wafandshield-v2webaclassociations-datatable').bootstrapTable('append', [{
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

            return sdkcall("WAFV2", "getWebACL", {
                Scope: "REGIONAL",
                Id: webAcl.Id,
                Name: webAcl.Name
            }, true).then((data) => {
                data.WebACL['Scope'] = "REGIONAL";

                $('#section-securityidentityandcompliance-wafandshield-v2webacls-datatable').bootstrapTable('append', [{
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

                    $('#section-securityidentityandcompliance-wafandshield-v2rulegroups-datatable').bootstrapTable('append', [{
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

                $('#section-securityidentityandcompliance-wafandshield-v2rulegroups-datatable').bootstrapTable('append', [{
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

                    $('#section-securityidentityandcompliance-wafandshield-v2ipsets-datatable').bootstrapTable('append', [{
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

                $('#section-securityidentityandcompliance-wafandshield-v2ipsets-datatable').bootstrapTable('append', [{
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

                    $('#section-securityidentityandcompliance-wafandshield-v2regexpatternsets-datatable').bootstrapTable('append', [{
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

                $('#section-securityidentityandcompliance-wafandshield-v2regexpatternsets-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-wafandshield-webacls-datatable').bootstrapTable('removeAll');

        await Promise.all(data.WebACLs.map(webAcl => {
            return sdkcall("WAF", "getWebACL", {
                WebACLId: webAcl.WebACLId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-webacls-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-wafandshield-rules-datatable').bootstrapTable('removeAll');

        if (data.Rules) {
            await Promise.all(data.Rules.map(rule => {
                return sdkcall("WAF", "getRule", {
                    RuleId: rule.RuleId
                }, true).then((data) => {
                    $('#section-securityidentityandcompliance-wafandshield-rules-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-wafandshield-xssmatchsets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.XssMatchSets.map(xssMatchSet => {
            return sdkcall("WAF", "getXssMatchSet", {
                XssMatchSetId: xssMatchSet.XssMatchSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-xssmatchsets-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-wafandshield-ipsets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.IPSets.map(ipSet => {
            return sdkcall("WAF", "getIPSet", {
                IPSetId: ipSet.IPSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-ipsets-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-wafandshield-sizeconstraintsets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.SizeConstraintSets.map(sizeConstraintSet => {
            return sdkcall("WAF", "getSizeConstraintSet", {
                SizeConstraintSetId: sizeConstraintSet.SizeConstraintSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-sizeconstraintsets-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-wafandshield-sqlinjectionmatchsets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.SqlInjectionMatchSets.map(sqlInjectionMatchSet => {
            return sdkcall("WAF", "getSqlInjectionMatchSet", {
                SqlInjectionMatchSetId: sqlInjectionMatchSet.SqlInjectionMatchSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-sqlinjectionmatchsets-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-wafandshield-bytematchsets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ByteMatchSets.map(byteMatchSet => {
            return sdkcall("WAF", "getByteMatchSet", {
                ByteMatchSetId: byteMatchSet.ByteMatchSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-bytematchsets-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-wafandshield-regionalwebacls-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-wafandshield-regionalwebaclassociations-datatable').bootstrapTable('removeAll');

        await Promise.all(data.WebACLs.map(webAcl => {
            return Promise.all([
                sdkcall("WAFRegional", "getWebACL", {
                    WebACLId: webAcl.WebACLId
                }, true).then((data) => {
                    $('#section-securityidentityandcompliance-wafandshield-regionalwebacls-datatable').bootstrapTable('append', [{
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
                        $('#section-securityidentityandcompliance-wafandshield-regionalwebaclassociations-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-wafandshield-regionalrules-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Rules.map(rule => {
            return sdkcall("WAFRegional", "getRule", {
                RuleId: rule.RuleId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalrules-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-wafandshield-regionalxssmatchsets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.XssMatchSets.map(xssMatchSet => {
            return sdkcall("WAFRegional", "getXssMatchSet", {
                XssMatchSetId: xssMatchSet.XssMatchSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalxssmatchsets-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-wafandshield-regionalipsets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.IPSets.map(ipSet => {
            return sdkcall("WAFRegional", "getIPSet", {
                IPSetId: ipSet.IPSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalipsets-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-wafandshield-regionalsizeconstraintsets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.SizeConstraintSets.map(sizeConstraintSet => {
            return sdkcall("WAFRegional", "getSizeConstraintSet", {
                SizeConstraintSetId: sizeConstraintSet.SizeConstraintSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalsizeconstraintsets-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-wafandshield-regionalsqlinjectionmatchsets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.SqlInjectionMatchSets.map(sqlInjectionMatchSet => {
            return sdkcall("WAFRegional", "getSqlInjectionMatchSet", {
                SqlInjectionMatchSetId: sqlInjectionMatchSet.SqlInjectionMatchSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalsqlinjectionmatchsets-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-wafandshield-regionalbytematchsets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ByteMatchSets.map(byteMatchSet => {
            return sdkcall("WAFRegional", "getByteMatchSet", {
                ByteMatchSetId: byteMatchSet.ByteMatchSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalbytematchsets-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-wafandshield-regionalgeomatchsets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.GeoMatchSets.map(geoMatchSet => {
            return sdkcall("WAFRegional", "getGeoMatchSet", {
                GeoMatchSetId: geoMatchSet.GeoMatchSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalgeomatchsets-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-wafandshield-regionalregexpatternsets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.RegexPatternSets.map(regexPatternSet => {
            return sdkcall("WAFRegional", "getRegexPatternSet", {
                RegexPatternSetId: regexPatternSet.RegexPatternSetId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalregexpatternsets-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-wafandshield-regionalratebasedrules-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Rules.map(rule => {
            return sdkcall("WAFRegional", "getRateBasedRule", {
                RuleId: rule.RuleId
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-wafandshield-regionalratebasedrules-datatable').bootstrapTable('append', [{
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

    unblockUI('#section-securityidentityandcompliance-wafandshield-v2webacls-datatable');
    unblockUI('#section-securityidentityandcompliance-wafandshield-v2rulegroups-datatable');
    unblockUI('#section-securityidentityandcompliance-wafandshield-v2ipsets-datatable');
    unblockUI('#section-securityidentityandcompliance-wafandshield-v2regexpatternsets-datatable');
    unblockUI('#section-securityidentityandcompliance-wafandshield-v2webaclassociations-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
