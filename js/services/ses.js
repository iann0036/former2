/* ========================================================================== */
// SES
/* ========================================================================== */

sections.push({
    'category': 'Customer Engagement',
    'service': 'SES',
    'resourcetypes': {
        'Configuration Sets': {
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
        'Event Destinations': {
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
                        field: 'matchingeventtypes',
                        title: 'Matching Event Types',
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
        'Receipt Filters': {
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
                        field: 'ipfilterpolicy',
                        title: 'IP Filter Policy',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'ipfiltercidr',
                        title: 'IP Filter CIDR',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Receipt Rules': {
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
                        field: 'recipients',
                        title: 'Recipients',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'tlspolicy',
                        title: 'TLS Policy',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'scanenabled',
                        title: 'Spam/Virus Scan Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
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
        'Receipt Rule Sets': {
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
        'Templates': {
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

async function updateDatatableCustomerEngagementSES() {
    if (["us-east-1", "us-west-2", "eu-west-1"].includes(region)) { // has to be whitelisted otherwise it hangs on the API call
        blockUI('#section-customerengagement-ses-configurationsets-datatable');
        blockUI('#section-customerengagement-ses-eventdestinations-datatable');
        blockUI('#section-customerengagement-ses-receiptfilters-datatable');
        blockUI('#section-customerengagement-ses-receiptrules-datatable');
        blockUI('#section-customerengagement-ses-receiptrulesets-datatable');
        blockUI('#section-customerengagement-ses-templates-datatable');

        await sdkcall("SES", "listConfigurationSets", {
            // no params
        }, true).then(async (data) => {
            $('#section-customerengagement-ses-configurationsets-datatable').bootstrapTable('removeAll');
            $('#section-customerengagement-ses-eventdestinations-datatable').bootstrapTable('removeAll');

            await Promise.all(data.ConfigurationSets.map(configurationSet => {
                return sdkcall("SES", "describeConfigurationSet", {
                    ConfigurationSetName: configurationSet.Name
                }, true).then((data) => {
                    data.EventDestinations.forEach(eventDestination => {
                        eventDestination['ConfigurationSetName'] = configurationSet.Name;
                        $('#section-customerengagement-ses-eventdestinations-datatable').bootstrapTable('append', [{
                            f2id: eventDestination.Name,
                            f2type: 'ses.eventdestination',
                            f2data: eventDestination,
                            f2region: region,
                            name: eventDestination.Name,
                            enabled: eventDestination.Enabled,
                            matchingeventtypes: eventDestination.MatchingEventTypes.join(", ")
                        }]);
                    });

                    $('#section-customerengagement-ses-configurationsets-datatable').bootstrapTable('append', [{
                        f2id: data.ConfigurationSet.Name,
                        f2type: 'ses.configurationset',
                        f2data: data,
                        f2region: region,
                        name: data.ConfigurationSet.Name
                    }]);
                });
            }));

            unblockUI('#section-customerengagement-ses-configurationsets-datatable');
            unblockUI('#section-customerengagement-ses-eventdestinations-datatable');
        });

        await sdkcall("SES", "listReceiptFilters", {
            // no params
        }, true).then((data) => {
            $('#section-customerengagement-ses-receiptfilters-datatable').bootstrapTable('removeAll');

            data.Filters.forEach(filter => {
                $('#section-customerengagement-ses-receiptfilters-datatable').bootstrapTable('append', [{
                    f2id: filter.Name,
                    f2type: 'ses.receiptfilter',
                    f2data: filter,
                    f2region: region,
                    name: filter.Name,
                    ipfilterpolicy: filter.IpFilter.Policy,
                    ipfiltercidr: filter.IpFilter.Cidr
                }]);
            });

            unblockUI('#section-customerengagement-ses-receiptfilters-datatable');
        });

        await sdkcall("SES", "listReceiptRuleSets", {
            // no params
        }, true).then(async (data) => {
            $('#section-customerengagement-ses-receiptrulesets-datatable').bootstrapTable('removeAll');

            await Promise.all(data.RuleSets.map(ruleSet => {
                $('#section-customerengagement-ses-receiptrulesets-datatable').bootstrapTable('append', [{
                    f2id: ruleSet.Name,
                    f2type: 'ses.receiptruleset',
                    f2data: ruleSet,
                    f2region: region,
                    name: ruleSet.Name,
                    creationtime: ruleSet.CreatedTimestamp
                }]);

                return sdkcall("SES", "describeReceiptRuleSet", {
                    RuleSetName: ruleSet.Name
                }, true).then((data) => {
                    var previousRuleName = null;
                    data.Rules.forEach(rule => {
                        rule['After'] = previousRuleName;
                        previousRuleName = rule.Name;
                        rule['RuleSetName'] = ruleSet.Name;
                        $('#section-customerengagement-ses-receiptrules-datatable').bootstrapTable('append', [{
                            f2id: rule.Name,
                            f2type: 'ses.receiptrule',
                            f2data: rule,
                            f2region: region,
                            name: rule.Name,
                            enabled: rule.Enabled,
                            tlspolicy: rule.TlsPolicy,
                            recipients: rule.Recipients.join(", "),
                            scanenabled: rule.ScanEnabled
                        }]);
                    });
                });
            }));

            unblockUI('#section-customerengagement-ses-receiptrules-datatable');
            unblockUI('#section-customerengagement-ses-receiptrulesets-datatable');
        });

        await sdkcall("SES", "listTemplates", {
            // no params
        }, true).then(async (data) => {
            $('#section-customerengagement-ses-templates-datatable').bootstrapTable('removeAll');

            await Promise.all(data.TemplatesMetadata.map(template => {
                return sdkcall("SES", "getTemplate", {
                    TemplateName: template.Name
                }, true).then((data) => {
                    $('#section-customerengagement-ses-templates-datatable').bootstrapTable('append', [{
                        f2id: data.Template.TemplateName,
                        f2type: 'ses.template',
                        f2data: data,
                        f2region: region,
                        name: data.Template.TemplateName,
                        creationtime: data.Template.CreatedTimestamp
                    }]);
                });
            }));

            unblockUI('#section-customerengagement-ses-templates-datatable');
        });
    }
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
