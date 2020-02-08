/* ========================================================================== */
// Config
/* ========================================================================== */

sections.push({
    'category': 'Management &amp; Governance',
    'service': 'Config',
    'resourcetypes': {
        'Config Rules': {
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
                    },
                    {
                        field: 'maximumexecutionfrequency',
                        title: 'Maximum Execution Frequency',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Organization Config Rules': {
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
                    },
                    {
                        field: 'maximumexecutionfrequency',
                        title: 'Maximum Execution Frequency',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Remediation Configurations': {
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
                        title: 'Config Rule Name',
                        field: 'configrulename',
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
                        field: 'targetid',
                        title: 'Target ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'targetversion',
                        title: 'Target Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'resourcetype',
                        title: 'Resource Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Configuration Recorder': {
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
        'Configuration Aggregators': {
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
        'Aggregation Authorizations': {
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
                        title: 'Authorized Account ID',
                        field: 'authorizedaccountid',
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
                        field: 'Authorized AWS Region',
                        title: 'authorizedawsregion',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'Creation Time',
                        title: 'creationtime',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Delivery Channels': {
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
                        field: 'bucketname',
                        title: 'Bucket Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'keyprefix',
                        title: 'Key Prefix',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'snstopicarn',
                        title: 'SNS Topic ARN',
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

async function updateDatatableManagementAndGovernanceConfig() {
    blockUI('#section-managementandgovernance-config-configrules-datatable');
    blockUI('#section-managementandgovernance-config-organizationconfigrules-datatable');
    blockUI('#section-managementandgovernance-config-remediationconfiguraions-datatable');
    blockUI('#section-managementandgovernance-config-configurationaggregators-datatable');
    blockUI('#section-managementandgovernance-config-configurationrecorder-datatable');
    blockUI('#section-managementandgovernance-config-aggregationauthorizations-datatable');
    blockUI('#section-managementandgovernance-config-deliverychannels-datatable');

    await sdkcall("ConfigService", "describeConfigRules", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-config-configrules-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ConfigRules.map(configRule => {
            $('#section-managementandgovernance-config-configrules-datatable').bootstrapTable('append', [{
                f2id: configRule.ConfigRuleArn,
                f2type: 'config.configrule',
                f2data: configRule,
                f2region: region,
                name: configRule.ConfigRuleName,
                id: configRule.ConfigRuleId,
                description: configRule.Description,
                maximumexecutionfrequency: configRule.MaximumExecutionFrequency
            }]);

            return sdkcall("ConfigService", "describeRemediationConfigurations", {
                ConfigRuleNames: [configRule.ConfigRuleName]
            }, true).then((data) => {
                $('#section-managementandgovernance-config-remediationconfiguraions-datatable').bootstrapTable('removeAll');

                data.RemediationConfigurations.forEach(remediationConfiguration => {
                    $('#section-managementandgovernance-config-remediationconfiguraions-datatable').bootstrapTable('append', [{
                        f2id: remediationConfiguration.ConfigRuleName + " " + remediationConfiguration.TargetId + " Remediation Configuration",
                        f2type: 'config.remediationconfiguration',
                        f2data: remediationConfiguration,
                        f2region: region,
                        configrulename: remediationConfiguration.ConfigRuleName,
                        targetid: remediationConfiguration.TargetId,
                        targetversion: remediationConfiguration.TargetVersion,
                        resourcetype: remediationConfiguration.ResourceType
                    }]);
                });

                unblockUI('#section-managementandgovernance-config-remediationconfiguraions-datatable');
            });
        }));

        unblockUI('#section-managementandgovernance-config-configrules-datatable');
    });

    await sdkcall("ConfigService", "describeConfigurationAggregators", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-config-configurationaggregators-datatable').bootstrapTable('removeAll');

        data.ConfigurationAggregators.forEach(configurationAggregator => {
            $('#section-managementandgovernance-config-configurationaggregators-datatable').bootstrapTable('append', [{
                f2id: configurationAggregator.ConfigurationAggregatorArn,
                f2type: 'config.configurationaggregator',
                f2data: configurationAggregator,
                f2region: region,
                name: configurationAggregator.ConfigurationAggregatorName,
                creationtime: configurationAggregator.CreationTime
            }]);
        });

        unblockUI('#section-managementandgovernance-config-configurationaggregators-datatable');
    });

    await sdkcall("ConfigService", "describeOrganizationConfigRules", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-config-organizationconfigrules-datatable').bootstrapTable('removeAll');

        data.OrganizationConfigRules.forEach(organizationConfigRule => {
            $('#section-managementandgovernance-config-organizationconfigrules-datatable').bootstrapTable('append', [{
                f2id: organizationConfigRule.OrganizationConfigRuleArn,
                f2type: 'config.organizationconfigrule',
                f2data: organizationConfigRule,
                f2region: region,
                name: organizationConfigRule.OrganizationConfigRuleName,
                description: organizationConfigRule.OrganizationManagedRuleMetadata.Description,
                maximumexecutionfrequency: organizationConfigRule.OrganizationManagedRuleMetadata.MaximumExecutionFrequency
            }]);
        });

        unblockUI('#section-managementandgovernance-config-organizationconfigrules-datatable');
    });

    await sdkcall("ConfigService", "describeConfigurationRecorders", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-config-configurationrecorder-datatable').bootstrapTable('removeAll');

        data.ConfigurationRecorders.forEach(configurationRecorder => {
            $('#section-managementandgovernance-config-configurationrecorder-datatable').bootstrapTable('append', [{
                f2id: configurationRecorder.name,
                f2type: 'config.configurationrecorder',
                f2data: configurationRecorder,
                f2region: region,
                name: configurationRecorder.name
            }]);
        });

        unblockUI('#section-managementandgovernance-config-configurationrecorder-datatable');
    });

    await sdkcall("ConfigService", "describeAggregationAuthorizations", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-config-aggregationauthorizations-datatable').bootstrapTable('removeAll');

        data.AggregationAuthorizations.forEach(aggregationAuthorization => {
            $('#section-managementandgovernance-config-aggregationauthorizations-datatable').bootstrapTable('append', [{
                f2id: aggregationAuthorization.AggregationAuthorizationArn,
                f2type: 'config.aggregationauthorization',
                f2data: aggregationAuthorization,
                f2region: region,
                authorizedaccountid: aggregationAuthorization.AuthorizedAccountId,
                authorizedawsregion: aggregationAuthorization.AuthorizedAwsRegion,
                creationtime: aggregationAuthorization.CreationTime
            }]);
        });

        unblockUI('#section-managementandgovernance-config-aggregationauthorizations-datatable');
    });

    await sdkcall("ConfigService", "describeDeliveryChannels", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-config-deliverychannels-datatable').bootstrapTable('removeAll');

        data.DeliveryChannels.forEach(deliveryChannel => {
            $('#section-managementandgovernance-config-deliverychannels-datatable').bootstrapTable('append', [{
                f2id: deliveryChannel.name,
                f2type: 'config.deliverychannel',
                f2data: deliveryChannel,
                f2region: region,
                name: deliveryChannel.name,
                bucketname: deliveryChannel.s3BucketName,
                keyprefix: deliveryChannel.s3KeyPrefix,
                snstopicarn: deliveryChannel.snsTopicARN
            }]);
        });

        unblockUI('#section-managementandgovernance-config-deliverychannels-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
