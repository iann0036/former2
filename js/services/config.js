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
        },
        'Conformance Packs': {
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
                        field: 'deliverybucket',
                        title: 'Delivery Bucket',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'deliverykeyprefix',
                        title: 'Delivery Key Prefix',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Organization Conformance Packs': {
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
                        field: 'deliverybucket',
                        title: 'Delivery Bucket',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'deliverykeyprefix',
                        title: 'Delivery Key Prefix',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Stored Queries': {
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
        }
    }
});

async function updateDatatableManagementAndGovernanceConfig() {
    blockUI('#section-managementandgovernance-config-configrules-datatable');
    blockUI('#section-managementandgovernance-config-organizationconfigrules-datatable');
    blockUI('#section-managementandgovernance-config-remediationconfigurations-datatable');
    blockUI('#section-managementandgovernance-config-configurationaggregators-datatable');
    blockUI('#section-managementandgovernance-config-configurationrecorder-datatable');
    blockUI('#section-managementandgovernance-config-aggregationauthorizations-datatable');
    blockUI('#section-managementandgovernance-config-deliverychannels-datatable');
    blockUI('#section-managementandgovernance-config-conformancepacks-datatable');
    blockUI('#section-managementandgovernance-config-storedqueries-datatable');

    await sdkcall("ConfigService", "describeConfigRules", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-config-configrules-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-config-remediationconfigurations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ConfigRules.map(configRule => {
            $('#section-managementandgovernance-config-configrules-datatable').deferredBootstrapTable('append', [{
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
                data.RemediationConfigurations.forEach(remediationConfiguration => {
                    $('#section-managementandgovernance-config-remediationconfigurations-datatable').deferredBootstrapTable('append', [{
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

                unblockUI('#section-managementandgovernance-config-remediationconfigurations-datatable');
            });
        }));

        unblockUI('#section-managementandgovernance-config-configrules-datatable');
    });

    await sdkcall("ConfigService", "describeConfigurationAggregators", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-config-configurationaggregators-datatable').deferredBootstrapTable('removeAll');

        data.ConfigurationAggregators.forEach(configurationAggregator => {
            $('#section-managementandgovernance-config-configurationaggregators-datatable').deferredBootstrapTable('append', [{
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
    }, false).then((data) => {
        $('#section-managementandgovernance-config-organizationconfigrules-datatable').deferredBootstrapTable('removeAll');

        data.OrganizationConfigRules.forEach(organizationConfigRule => {
            $('#section-managementandgovernance-config-organizationconfigrules-datatable').deferredBootstrapTable('append', [{
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
    }).catch(() => { });

    await sdkcall("ConfigService", "describeConfigurationRecorders", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-config-configurationrecorder-datatable').deferredBootstrapTable('removeAll');

        data.ConfigurationRecorders.forEach(configurationRecorder => {
            $('#section-managementandgovernance-config-configurationrecorder-datatable').deferredBootstrapTable('append', [{
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
        $('#section-managementandgovernance-config-aggregationauthorizations-datatable').deferredBootstrapTable('removeAll');

        data.AggregationAuthorizations.forEach(aggregationAuthorization => {
            $('#section-managementandgovernance-config-aggregationauthorizations-datatable').deferredBootstrapTable('append', [{
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
        $('#section-managementandgovernance-config-deliverychannels-datatable').deferredBootstrapTable('removeAll');

        data.DeliveryChannels.forEach(deliveryChannel => {
            $('#section-managementandgovernance-config-deliverychannels-datatable').deferredBootstrapTable('append', [{
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

    await sdkcall("ConfigService", "describeConformancePacks", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-config-conformancepacks-datatable').deferredBootstrapTable('removeAll');

        data.ConformancePackDetails.forEach(conformancepack => {
            $('#section-managementandgovernance-config-conformancepacks-datatable').deferredBootstrapTable('append', [{
                f2id: conformancepack.ConformancePackArn,
                f2type: 'config.conformancepack',
                f2data: conformancepack,
                f2region: region,
                name: conformancepack.ConformancePackName,
                deliverybucket: conformancepack.DeliveryS3Bucket,
                deliverykeyprefix: conformancepack.DeliveryS3KeyPrefix
            }]);
        });

        unblockUI('#section-managementandgovernance-config-conformancepacks-datatable');
    });

    await sdkcall("ConfigService", "describeOrganizationConformancePacks", {
        // no params
    }, false).then((data) => {
        $('#section-managementandgovernance-config-organizationconformancepacks-datatable').deferredBootstrapTable('removeAll');

        data.OrganizationConformancePacks.forEach(conformancepack => {
            $('#section-managementandgovernance-config-organizationconformancepacks-datatable').deferredBootstrapTable('append', [{
                f2id: conformancepack.OrganizationConformancePackArn,
                f2type: 'config.organizationconformancepack',
                f2data: conformancepack,
                f2region: region,
                name: conformancepack.OrganizationConformancePackName,
                deliverybucket: conformancepack.DeliveryS3Bucket,
                deliverykeyprefix: conformancepack.DeliveryS3KeyPrefix
            }]);
        });

        unblockUI('#section-managementandgovernance-config-organizationconformancepacks-datatable');
    }).catch(() => { });

    await sdkcall("ConfigService", "listStoredQueries", {
        // no params
    }, false).then(async (data) => {
        $('#section-managementandgovernance-config-storedqueries-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.StoredQueryMetadata.map(storedquery => {
            return sdkcall("ConfigService", "getStoredQuery", {
                QueryName: storedquery.QueryName
            }, true).then((data) => {
                $('#section-managementandgovernance-config-storedqueries-datatable').deferredBootstrapTable('append', [{
                    f2id: data.StoredQuery.QueryArn,
                    f2type: 'config.storedquery',
                    f2data: data.StoredQuery,
                    f2region: region,
                    name: data.StoredQuery.QueryName,
                    description: data.StoredQuery.Description
                }]);
            });
        }));

        unblockUI('#section-managementandgovernance-config-storedqueries-datatable');
    }).catch(() => { });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "config.configrule") {
        reqParams.cfn['ConfigRuleName'] = obj.data.ConfigRuleName;
        reqParams.tf['name'] = obj.data.ConfigRuleName;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['Scope'] = obj.data.Scope;
        if (obj.data.Scope) {
            reqParams.tf['scope'] = {
                'compliance_resource_id': obj.data.Scope.ComplianceResourceId,
                'compliance_resource_types': obj.data.Scope.ComplianceResourceTypes,
                'tag_key': obj.data.Scope.TagKey,
                'tag_value': obj.data.Scope.TagValue
            };
        }
        reqParams.cfn['Source'] = obj.data.Source;
        if (obj.data.Source) {
            var sourcedetail = null;
            if (obj.data.Source.SourceDetails) {
                sourcedetail = {
                    'event_source': obj.data.Source.SourceDetails.EventSource,
                    'maximum_execution_frequency': obj.data.Source.SourceDetails.MaximumExecutionFrequency,
                    'message_type': obj.data.Source.SourceDetails.MessageType
                };
            }
            reqParams.tf['source'] = {
                'owner': obj.data.Source.Owner,
                'source_identifier': obj.data.Source.SourceIdentifier,
                'source_detail': sourcedetail
            };
        }
        reqParams.cfn['InputParameters'] = obj.data.InputParameters;
        reqParams.tf['input_parameters'] = obj.data.InputParameters;
        reqParams.cfn['MaximumExecutionFrequency'] = obj.data.MaximumExecutionFrequency;
        reqParams.tf['maximum_execution_frequency'] = obj.data.MaximumExecutionFrequency;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('config', obj.id, 'AWS::Config::ConfigRule'),
            'region': obj.region,
            'service': 'config',
            'type': 'AWS::Config::ConfigRule',
            'terraformType': 'aws_config_config_rule',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ConfigRuleName,
                'GetAtt': {
                    'Arn': obj.data.ConfigRuleArn,
                    //'Compliance.Type': obj.data.,
                    'ConfigRuleId': obj.data.ConfigRuleId
                }
            }
        });
    } else if (obj.type == "config.configurationaggregator") {
        reqParams.cfn['ConfigurationAggregatorName'] = obj.data.ConfigurationAggregatorName;
        reqParams.tf['name'] = obj.data.ConfigurationAggregatorName;
        if (obj.data.AccountAggregationSources) {
            reqParams.cfn['AccountAggregationSources'] = [];
            reqParams.tf['account_aggregation_source'] = [];
            obj.data.AccountAggregationSources.forEach(accountAggregationSource => {
                reqParams.cfn['AccountAggregationSources'].push({
                    'AllAwsRegions': accountAggregationSource.AllAwsRegions,
                    'AwsRegions': accountAggregationSource.AwsRegions,
                    'AccountIds': accountAggregationSource.AccountIds
                });
                reqParams.tf['account_aggregation_source'].push({
                    'all_regions': accountAggregationSource.AllAwsRegions,
                    'regions': accountAggregationSource.AwsRegions,
                    'account_ids': accountAggregationSource.AccountIds
                });
            });
        }
        if (obj.data.OrganizationAggregationSource) {
            reqParams.cfn['OrganizationAggregationSource'] = {
                'AllAwsRegions': obj.data.OrganizationAggregationSource.AllAwsRegions,
                'AwsRegions': obj.data.OrganizationAggregationSource.AwsRegions,
                'RoleArn': obj.data.OrganizationAggregationSource.RoleArn
            };
            reqParams.tf['organization_aggregation_source'] = {
                'all_regions': obj.data.OrganizationAggregationSource.AllAwsRegions,
                'regions': obj.data.OrganizationAggregationSource.AwsRegions,
                'role_arn': obj.data.OrganizationAggregationSource.RoleArn
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('config', obj.id, 'AWS::Config::ConfigurationAggregator'),
            'region': obj.region,
            'service': 'config',
            'type': 'AWS::Config::ConfigurationAggregator',
            'terraformType': 'aws_config_configuration_aggregator',
            'options': reqParams
        });
    } else if (obj.type == "config.configurationrecorder") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.tf['name'] = obj.data.name;
        if (obj.data.recordingGroup) {
            reqParams.cfn['RecordingGroup'] = {
                'AllSupported': obj.data.recordingGroup.allSupported,
                'IncludeGlobalResourceTypes': obj.data.recordingGroup.includeGlobalResourceTypes,
                'ResourceTypes': obj.data.recordingGroup.resourceTypes
            };
            reqParams.tf['recording_group'] = {
                'all_supported': obj.data.recordingGroup.allSupported,
                'include_global_resource_types': obj.data.recordingGroup.includeGlobalResourceTypes,
                'resource_types': obj.data.recordingGroup.resourceTypes
            };
        }
        reqParams.cfn['RoleARN'] = obj.data.roleARN;
        reqParams.tf['role_arn'] = obj.data.roleARN;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('config', obj.id, 'AWS::Config::ConfigurationRecorder'),
            'region': obj.region,
            'service': 'config',
            'type': 'AWS::Config::ConfigurationRecorder',
            'terraformType': 'aws_config_configuration_recorder',
            'options': reqParams
        });
    } else if (obj.type == "config.aggregationauthorization") {
        reqParams.cfn['AuthorizedAccountId'] = obj.data.AuthorizedAccountId;
        reqParams.tf['account_id'] = obj.data.AuthorizedAccountId;
        reqParams.cfn['AuthorizedAwsRegion'] = obj.data.AuthorizedAwsRegion;
        reqParams.tf['region'] = obj.data.AuthorizedAwsRegion;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('config', obj.id, 'AWS::Config::AggregationAuthorization'),
            'region': obj.region,
            'service': 'config',
            'type': 'AWS::Config::AggregationAuthorization',
            'terraformType': 'aws_config_aggregate_authorization',
            'options': reqParams
        });
    } else if (obj.type == "config.deliverychannel") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.tf['name'] = obj.data.name;
        reqParams.cfn['S3BucketName'] = obj.data.s3BucketName;
        reqParams.tf['s3_bucket_name'] = obj.data.s3BucketName;
        reqParams.cfn['S3KeyPrefix'] = obj.data.s3KeyPrefix;
        reqParams.tf['s3_key_prefix'] = obj.data.s3KeyPrefix;
        reqParams.cfn['SnsTopicARN'] = obj.data.snsTopicARN;
        reqParams.tf['sns_topic_arn'] = obj.data.snsTopicARN;
        if (obj.data.configSnapshotDeliveryProperties) {
            reqParams.cfn['ConfigSnapshotDeliveryProperties'] = {
                'DeliveryFrequency': obj.data.configSnapshotDeliveryProperties.deliveryFrequency
            };
            reqParams.tf['snapshot_delivery_properties'] = {
                'delivery_frequency': obj.data.configSnapshotDeliveryProperties.deliveryFrequency
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('config', obj.id, 'AWS::Config::DeliveryChannel'),
            'region': obj.region,
            'service': 'config',
            'type': 'AWS::Config::DeliveryChannel',
            'terraformType': 'aws_config_delivery_channel',
            'options': reqParams
        });
    } else if (obj.type == "config.remediationconfiguration") {
        reqParams.cfn['ConfigRuleName'] = obj.data.ConfigRuleName;
        reqParams.cfn['Parameters'] = obj.data.Parameters;
        reqParams.cfn['ResourceType'] = obj.data.ResourceType;
        reqParams.cfn['TargetId'] = obj.data.TargetId;
        reqParams.cfn['TargetType'] = obj.data.TargetType;
        reqParams.cfn['TargetVersion'] = obj.data.TargetVersion;
        reqParams.cfn['ExecutionControls'] = obj.data.ExecutionControls;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('config', obj.id, 'AWS::Config::RemediationConfiguration'),
            'region': obj.region,
            'service': 'config',
            'type': 'AWS::Config::RemediationConfiguration',
            'options': reqParams
        });
    } else if (obj.type == "config.organizationconfigrule") {
        reqParams.cfn['ExcludedAccounts'] = obj.data.ExcludedAccounts;
        reqParams.cfn['OrganizationConfigRuleName'] = obj.data.OrganizationConfigRuleName;
        reqParams.cfn['OrganizationManagedRuleMetadata'] = obj.data.OrganizationManagedRuleMetadata;
        reqParams.cfn['OrganizationCustomRuleMetadata'] = obj.data.OrganizationCustomRuleMetadata;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('config', obj.id, 'AWS::Config::OrganizationConfigRule'),
            'region': obj.region,
            'service': 'config',
            'type': 'AWS::Config::OrganizationConfigRule',
            'options': reqParams
        });
    } else if (obj.type == "config.conformancepack") {
        reqParams.cfn['ConformancePackName'] = obj.data.ConformancePackName;
        reqParams.cfn['DeliveryS3Bucket'] = obj.data.DeliveryS3Bucket;
        reqParams.cfn['DeliveryS3KeyPrefix'] = obj.data.DeliveryS3KeyPrefix;
        reqParams.cfn['ConformancePackInputParameters'] = obj.data.ConformancePackInputParameters;

        /*
        TODO:
        TemplateBody: String
        TemplateS3Uri: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('config', obj.id, 'AWS::Config::ConformancePack'),
            'region': obj.region,
            'service': 'config',
            'type': 'AWS::Config::ConformancePack',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ConformancePackName,
                'Import': {
                    'ConformancePackName': obj.data.ConformancePackName
                }
            }
        });
    } else if (obj.type == "config.organizationnconformancepack") {
        reqParams.cfn['OrganizationConformancePackName'] = obj.data.OrganizationConformancePackName;
        reqParams.cfn['DeliveryS3Bucket'] = obj.data.DeliveryS3Bucket;
        reqParams.cfn['DeliveryS3KeyPrefix'] = obj.data.DeliveryS3KeyPrefix;
        reqParams.cfn['ConformancePackInputParameters'] = obj.data.ConformancePackInputParameters;
        reqParams.cfn['ExcludedAccounts'] = obj.data.ExcludedAccounts;

        /*
        TODO:
        TemplateBody: String
        TemplateS3Uri: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('config', obj.id, 'AWS::Config::OrganizationConformancePack'),
            'region': obj.region,
            'service': 'config',
            'type': 'AWS::Config::OrganizationConformancePack',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.OrganizationConformancePackName,
                'Import': {
                    'OrganizationConformancePackName': obj.data.OrganizationConformancePackName
                }
            }
        });
    } else if (obj.type == "config.storedquery") {
        reqParams.cfn['QueryName'] = obj.data.QueryName;
        reqParams.cfn['QueryDescription'] = obj.data.Description;
        reqParams.cfn['QueryExpression'] = obj.data.Expression;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('config', obj.id, 'AWS::Config::StoredQuery'),
            'region': obj.region,
            'service': 'config',
            'type': 'AWS::Config::StoredQuery',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.QueryName,
                'GetAtt': {
                    'QueryArn': obj.data.QueryArn,
                    'QueryId': obj.data.QueryId
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
