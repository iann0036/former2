/* ========================================================================== */
// AppFlow
/* ========================================================================== */

sections.push({
    'category': 'Application Integration',
    'service': 'AppFlow',
    'resourcetypes': {
        'Flows': {
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
        'Connector Profiles': {
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
                        field: 'connectortype',
                        title: 'Connector Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'connectionmode',
                        title: 'Connection Mode',
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

async function updateDatatableApplicationIntegrationAppFlow() {
    blockUI('#section-applicationintegration-appflow-flows-datatable');
    blockUI('#section-applicationintegration-appflow-connectorprofiles-datatable');

    await sdkcall("Appflow", "listFlows", {
        // no params
    }, true).then(async (data) => {
        $('#section-applicationintegration-appflow-flows-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.flows.map(flow => {
            return sdkcall("Appflow", "describeFlow", {
                flowName: flow.flowName
            }, true).then((data) => {
                $('#section-applicationintegration-appflow-flows-datatable').deferredBootstrapTable('append', [{
                    f2id: data.flowArn,
                    f2type: 'appflow.flow',
                    f2data: data,
                    f2region: region,
                    name: data.flowName,
                    description: data.description
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("Appflow", "describeConnectorProfiles", {
        // no params
    }, true).then(async (data) => {
        $('#section-applicationintegration-appflow-connectorprofiles-datatable').deferredBootstrapTable('removeAll');

        data.connectorProfileDetails.forEach(connectorProfile => {
            $('#section-applicationintegration-appflow-connectorprofiles-datatable').deferredBootstrapTable('append', [{
                f2id: connectorProfile.connectorProfileArn,
                f2type: 'appflow.connectorprofile',
                f2data: connectorProfile,
                f2region: region,
                name: connectorProfile.connectorProfileName,
                connectortype: connectorProfile.connectorType,
                connectionmode: connectorProfile.connectionMode
            }]);
        });
    }).catch(() => { });

    unblockUI('#section-applicationintegration-appflow-flows-datatable');
    unblockUI('#section-applicationintegration-appflow-connectorprofiles-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "appflow.flow") {
        reqParams.cfn['FlowName'] = obj.data.flowName;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['KMSArn'] = obj.data.kmsArn;
        if (obj.data.sourceFlowConfig) {
            reqParams.cfn['SourceFlowConfig'] = {
                'ConnectorType': obj.data.sourceFlowConfig.connectorType,
                'ConnectorProfileName': obj.data.sourceFlowConfig.connectorProfileName,
                'SourceConnectorProperties': {}
            };
            if (obj.data.sourceFlowConfig.sourceConnectorProperties.Amplitude) {
                reqParams.cfn['SourceFlowConfig']['SourceConnectorProperties']['Amplitude'] = {
                    'Object': obj.data.sourceFlowConfig.sourceConnectorProperties.Amplitude.object
                }
            }
            if (obj.data.sourceFlowConfig.sourceConnectorProperties.Datadog) {
                reqParams.cfn['SourceFlowConfig']['SourceConnectorProperties']['Datadog'] = {
                    'Object': obj.data.sourceFlowConfig.sourceConnectorProperties.Datadog.object
                }
            }
            if (obj.data.sourceFlowConfig.sourceConnectorProperties.Dynatrace) {
                reqParams.cfn['SourceFlowConfig']['SourceConnectorProperties']['Dynatrace'] = {
                    'Object': obj.data.sourceFlowConfig.sourceConnectorProperties.Dynatrace.object
                }
            }
            if (obj.data.sourceFlowConfig.sourceConnectorProperties.GoogleAnalytics) {
                reqParams.cfn['SourceFlowConfig']['SourceConnectorProperties']['GoogleAnalytics'] = {
                    'Object': obj.data.sourceFlowConfig.sourceConnectorProperties.GoogleAnalytics.object
                }
            }
            if (obj.data.sourceFlowConfig.sourceConnectorProperties.InforNexus) {
                reqParams.cfn['SourceFlowConfig']['SourceConnectorProperties']['InforNexus'] = {
                    'Object': obj.data.sourceFlowConfig.sourceConnectorProperties.InforNexus.object
                }
            }
            if (obj.data.sourceFlowConfig.sourceConnectorProperties.Marketo) {
                reqParams.cfn['SourceFlowConfig']['SourceConnectorProperties']['Marketo'] = {
                    'Object': obj.data.sourceFlowConfig.sourceConnectorProperties.Marketo.object
                }
            }
            if (obj.data.sourceFlowConfig.sourceConnectorProperties.Amplitude) {
                reqParams.cfn['SourceFlowConfig']['SourceConnectorProperties']['Amplitude'] = {
                    'Object': obj.data.sourceFlowConfig.sourceConnectorProperties.Amplitude.object
                }
            }
            if (obj.data.sourceFlowConfig.sourceConnectorProperties.S3) {
                reqParams.cfn['SourceFlowConfig']['SourceConnectorProperties']['S3'] = {
                    'BucketName': obj.data.sourceFlowConfig.sourceConnectorProperties.S3.bucketName,
                    'BucketPrefix': obj.data.sourceFlowConfig.sourceConnectorProperties.S3.bucketPrefix
                }
            }
            if (obj.data.sourceFlowConfig.sourceConnectorProperties.Salesforce) {
                reqParams.cfn['SourceFlowConfig']['SourceConnectorProperties']['Salesforce'] = {
                    'Object': obj.data.sourceFlowConfig.sourceConnectorProperties.Salesforce.object,
                    'EnableDynamicFieldUpdate': obj.data.sourceFlowConfig.sourceConnectorProperties.Salesforce.enableDynamicFieldUpdate,
                    'IncludeDeletedRecords': obj.data.sourceFlowConfig.sourceConnectorProperties.Salesforce.includeDeletedRecords
                }
            }
            if (obj.data.sourceFlowConfig.sourceConnectorProperties.ServiceNow) {
                reqParams.cfn['SourceFlowConfig']['SourceConnectorProperties']['ServiceNow'] = {
                    'Object': obj.data.sourceFlowConfig.sourceConnectorProperties.ServiceNow.object
                }
            }
            if (obj.data.sourceFlowConfig.sourceConnectorProperties.Singular) {
                reqParams.cfn['SourceFlowConfig']['SourceConnectorProperties']['Singular'] = {
                    'Object': obj.data.sourceFlowConfig.sourceConnectorProperties.Singular.object
                }
            }
            if (obj.data.sourceFlowConfig.sourceConnectorProperties.Slack) {
                reqParams.cfn['SourceFlowConfig']['SourceConnectorProperties']['Slack'] = {
                    'Object': obj.data.sourceFlowConfig.sourceConnectorProperties.Slack.object
                }
            }
            if (obj.data.sourceFlowConfig.sourceConnectorProperties.Trendmicro) {
                reqParams.cfn['SourceFlowConfig']['SourceConnectorProperties']['Trendmicro'] = {
                    'Object': obj.data.sourceFlowConfig.sourceConnectorProperties.Trendmicro.object
                }
            }
            if (obj.data.sourceFlowConfig.sourceConnectorProperties.Veeva) {
                reqParams.cfn['SourceFlowConfig']['SourceConnectorProperties']['Veeva'] = {
                    'Object': obj.data.sourceFlowConfig.sourceConnectorProperties.Veeva.object
                }
            }
            if (obj.data.sourceFlowConfig.sourceConnectorProperties.Zendesk) {
                reqParams.cfn['SourceFlowConfig']['SourceConnectorProperties']['Zendesk'] = {
                    'Object': obj.data.sourceFlowConfig.sourceConnectorProperties.Zendesk.object
                }
            }
        }
        if (obj.data.destinationFlowConfigList) {
            reqParams.cfn['DestinationFlowConfigList'] = [];
            obj.data.destinationFlowConfigList.forEach(destinationFlowConfig => {
                var flowConfig = {
                    'ConnectorProfileName': destinationFlowConfig.connectorProfileName,
                    'ConnectorType': destinationFlowConfig.connectorType,
                    'DestinationConnectorProperties': {}
                };
                if (destinationFlowConfig.destinationConnectorProperties.Redshift) {
                    var errorHandlingConfig = null;
                    if (destinationFlowConfig.destinationConnectorProperties.Redshift.errorHandlingConfig) {
                        errorHandlingConfig = {
                            'FailOnFirstError': destinationFlowConfig.destinationConnectorProperties.Redshift.errorHandlingConfig.failOnFirstDestinationError,
                            'BucketPrefix': destinationFlowConfig.destinationConnectorProperties.Redshift.errorHandlingConfig.bucketPrefix,
                            'BucketName': destinationFlowConfig.destinationConnectorProperties.Redshift.errorHandlingConfig.bucketName,
                        };
                    }
                    flowConfig['DestinationConnectorProperties']['Redshift'] = {
                        'Object': destinationFlowConfig.destinationConnectorProperties.Redshift.object,
                        'IntermediateBucketName': destinationFlowConfig.destinationConnectorProperties.Redshift.intermediateBucketName,
                        'BucketPrefix': destinationFlowConfig.destinationConnectorProperties.Redshift.bucketPrefix,
                        'ErrorHandlingConfig': errorHandlingConfig,
                    };
                }
                if (destinationFlowConfig.destinationConnectorProperties.S3) {
                    var s3OutputFormatConfig = null;
                    if (destinationFlowConfig.destinationConnectorProperties.S3.s3OutputFormatConfig) {
                        var prefixConfig = null;
                        if (destinationFlowConfig.destinationConnectorProperties.S3.s3OutputFormatConfig.prefixConfig) {
                            prefixConfig = {
                                'PrefixType': destinationFlowConfig.destinationConnectorProperties.S3.s3OutputFormatConfig.prefixConfig.prefixType,
                                'PrefixFormat': destinationFlowConfig.destinationConnectorProperties.S3.s3OutputFormatConfig.prefixConfig.prefixFormat
                            };
                        }
                        var aggregationConfig = null;
                        if (destinationFlowConfig.destinationConnectorProperties.S3.s3OutputFormatConfig.aggregationConfig) {
                            aggregationConfig = {
                                'AggregationType': destinationFlowConfig.destinationConnectorProperties.S3.s3OutputFormatConfig.aggregationConfig.aggregationType
                            };
                        }
                        s3OutputFormatConfig = {
                            'FileType': destinationFlowConfig.destinationConnectorProperties.S3.s3OutputFormatConfig.fileType,
                            'PrefixConfig': prefixConfig,
                            'AggregationConfig': aggregationConfig,
                        }
                    }
                    flowConfig['DestinationConnectorProperties']['S3'] = {
                        'BucketName': destinationFlowConfig.destinationConnectorProperties.S3.bucketName,
                        'BucketPrefix': destinationFlowConfig.destinationConnectorProperties.S3.bucketPrefix,
                        'S3OutputFormatConfig': s3OutputFormatConfig
                    };
                }
                if (destinationFlowConfig.destinationConnectorProperties.Salesforce) {
                    var errorHandlingConfig = null;
                    if (destinationFlowConfig.destinationConnectorProperties.Salesforce.errorHandlingConfig) {
                        errorHandlingConfig = {
                            'FailOnFirstError': destinationFlowConfig.destinationConnectorProperties.Salesforce.errorHandlingConfig.failOnFirstDestinationError,
                            'BucketPrefix': destinationFlowConfig.destinationConnectorProperties.Salesforce.errorHandlingConfig.bucketPrefix,
                            'BucketName': destinationFlowConfig.destinationConnectorProperties.Salesforce.errorHandlingConfig.bucketName,
                        };
                    }
                    flowConfig['DestinationConnectorProperties']['Salesforce'] = {
                        'Object': destinationFlowConfig.destinationConnectorProperties.Salesforce.object,
                        'ErrorHandlingConfig': errorHandlingConfig,
                    };
                }
                if (destinationFlowConfig.destinationConnectorProperties.Snowflake) {
                    var errorHandlingConfig = null;
                    if (destinationFlowConfig.destinationConnectorProperties.Snowflake.errorHandlingConfig) {
                        errorHandlingConfig = {
                            'FailOnFirstError': destinationFlowConfig.destinationConnectorProperties.Snowflake.errorHandlingConfig.failOnFirstDestinationError,
                            'BucketPrefix': destinationFlowConfig.destinationConnectorProperties.Snowflake.errorHandlingConfig.bucketPrefix,
                            'BucketName': destinationFlowConfig.destinationConnectorProperties.Snowflake.errorHandlingConfig.bucketName,
                        };
                    }
                    flowConfig['DestinationConnectorProperties']['Snowflake'] = {
                        'Object': destinationFlowConfig.destinationConnectorProperties.Snowflake.object,
                        'IntermediateBucketName': destinationFlowConfig.destinationConnectorProperties.Snowflake.intermediateBucketName,
                        'BucketPrefix': destinationFlowConfig.destinationConnectorProperties.Snowflake.bucketPrefix,
                        'ErrorHandlingConfig': errorHandlingConfig,
                    };
                }
                if (destinationFlowConfig.destinationConnectorProperties.EventBridge) {
                    var errorHandlingConfig = null;
                    if (destinationFlowConfig.destinationConnectorProperties.EventBridge.errorHandlingConfig) {
                        errorHandlingConfig = {
                            'FailOnFirstError': destinationFlowConfig.destinationConnectorProperties.EventBridge.errorHandlingConfig.failOnFirstDestinationError,
                            'BucketPrefix': destinationFlowConfig.destinationConnectorProperties.EventBridge.errorHandlingConfig.bucketPrefix,
                            'BucketName': destinationFlowConfig.destinationConnectorProperties.EventBridge.errorHandlingConfig.bucketName,
                        };
                    }
                    flowConfig['DestinationConnectorProperties']['EventBridge'] = {
                        'Object': destinationFlowConfig.destinationConnectorProperties.EventBridge.object,
                        'ErrorHandlingConfig': errorHandlingConfig,
                    };
                }
                reqParams.cfn['DestinationFlowConfigList'].push(flowConfig);
            });
        }
        if (obj.data.triggerConfig) {
            var triggerProperties = null;
            if (obj.data.triggerConfig.triggerProperties && obj.data.triggerConfig.triggerType == 'Scheduled') {
                triggerProperties = {
                    'DataPullMode': obj.data.triggerConfig.triggerProperties.Scheduled.dataPullMode,
                    'ScheduleEndTime': obj.data.triggerConfig.triggerProperties.Scheduled.scheduleEndTime,
                    'ScheduleExpression': obj.data.triggerConfig.triggerProperties.Scheduled.scheduleExpression,
                    'ScheduleStartTime': obj.data.triggerConfig.triggerProperties.Scheduled.scheduleStartTime,
                    'TimeZone': obj.data.triggerConfig.triggerProperties.Scheduled.timezone
                };
            }
            reqParams.cfn['TriggerConfig'] = {
                'TriggerType': obj.data.triggerConfig.triggerType,
                'TriggerProperties': triggerProperties
            };
        }
        if (obj.data.tasks) {
            reqParams.cfn['Tasks'] = [];
            obj.data.tasks.forEach(task => {
                var taskProperties = null;
                if (task.taskProperties) {
                    taskProperties = [];
                    Object.keys(task.taskProperties).forEach(k => {
                        taskProperties.push({
                            'Key': k,
                            'Value': task.taskProperties[k]
                        });
                    });
                }
                reqParams.cfn['Tasks'].push({
                    'SourceFields': task.sourceFields,
                    'ConnectorOperator': task.connectorOperator,
                    'DestinationField': task.destinationField,
                    'TaskType': task.taskType,
                    'TaskProperties': taskProperties
                })
            });
        }
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.Tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.Tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appflow', obj.id, 'AWS::AppFlow::Flow'),
            'region': obj.region,
            'service': 'appflow',
            'type': 'AWS::AppFlow::Flow',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.flowName,
                'GetAtt': {
                    'FlowArn': obj.data.flowArn
                }
            }
        });
    } else if (obj.type == "appflow.connectorprofile") {
        reqParams.cfn['ConnectorProfileName'] = obj.data.connectorProfileName;
        reqParams.cfn['ConnectorType'] = obj.data.connectorType;
        reqParams.cfn['ConnectionMode'] = obj.data.connectionMode;
        reqParams.cfn['KMSArn'] = obj.data.credentialsArn;
        if (obj.data.connectorProfileProperties) {
            reqParams.cfn['ConnectorProfileConfig'] = {
                'ConnectorProfileCredentials': {},
                'ConnectorProfileProperties': {}
            };
            
            if (obj.data.connectorProfileProperties.Amplitude && Object.keys(obj.data.connectorProfileProperties.Amplitude).length) {
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileCredentials']['Amplitude'] = {
                    'ApiKey': 'REPLACEME',
                    'SecretKey': 'REPLACEME'
                };
            }
            if (obj.data.connectorProfileProperties.Datadog && Object.keys(obj.data.connectorProfileProperties.Datadog).length) {
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileCredentials']['Datadog'] = {
                    'ApiKey': 'REPLACEME',
                    'ApplicationKey': 'REPLACEME'
                };
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileProperties']['Datadog'] = {
                    'InstanceUrl': obj.data.connectorProfileProperties.Datadog.instanceUrl
                };
            }
            if (obj.data.connectorProfileProperties.Dynatrace && Object.keys(obj.data.connectorProfileProperties.Dynatrace).length) {
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileCredentials']['Dynatrace'] = {
                    'ApiToken': 'REPLACEME'
                };
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileProperties']['Dynatrace'] = {
                    'InstanceUrl': obj.data.connectorProfileProperties.Dynatrace.instanceUrl
                };
            }
            if (obj.data.connectorProfileProperties.GoogleAnalytics && Object.keys(obj.data.connectorProfileProperties.GoogleAnalytics).length) {
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileCredentials']['GoogleAnalytics'] = {
                    'AccessToken': 'REPLACEME',
                    'ClientId': 'REPLACEME',
                    'ClientSecret': 'REPLACEME',
                    'ConnectorOAuthRequest': 'REPLACEME',
                    'RefreshToken': 'REPLACEME'
                };
            }
            if (obj.data.connectorProfileProperties.InforNexus && Object.keys(obj.data.connectorProfileProperties.InforNexus).length) {
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileCredentials']['InforNexus'] = {
                    'AccessKeyId': 'REPLACEME',
                    'Datakey': 'REPLACEME',
                    'SecretAccessKey': 'REPLACEME',
                    'UserId': 'REPLACEME'
                };
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileProperties']['InforNexus'] = {
                    'InstanceUrl': obj.data.connectorProfileProperties.InforNexus.instanceUrl
                };
            }
            if (obj.data.connectorProfileProperties.Marketo && Object.keys(obj.data.connectorProfileProperties.Marketo).length) {
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileCredentials']['Marketo'] = {
                    'AccessToken': 'REPLACEME',
                    'ClientId': 'REPLACEME',
                    'ClientSecret': 'REPLACEME',
                    'ConnectorOAuthRequest': 'REPLACEME'
                };
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileProperties']['Marketo'] = {
                    'InstanceUrl': obj.data.connectorProfileProperties.Marketo.instanceUrl
                };
            }
            if (obj.data.connectorProfileProperties.Redshift && Object.keys(obj.data.connectorProfileProperties.Redshift).length) {
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileCredentials']['Redshift'] = {
                    'Username': 'REPLACEME',
                    'Password': 'REPLACEME'
                };
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileProperties']['Redshift'] = {
                    'BucketName': obj.data.connectorProfileProperties.Redshift.bucketName,
                    'BucketPrefix': obj.data.connectorProfileProperties.Redshift.bucketPrefix,
                    'DatabaseUrl': obj.data.connectorProfileProperties.Redshift.databaseUrl,
                    'RoleArn': obj.data.connectorProfileProperties.Redshift.roleArn
                };
            }
            if (obj.data.connectorProfileProperties.Salesforce && Object.keys(obj.data.connectorProfileProperties.Salesforce).length) {
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileCredentials']['Salesforce'] = {
                    'AccessToken': 'REPLACEME',
                    'ConnectorOAuthRequest': 'REPLACEME',
                    'RefreshToken': 'REPLACEME'
                };
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileProperties']['Salesforce'] = {
                    'InstanceUrl': obj.data.connectorProfileProperties.Salesforce.instanceUrl,
                    'isSandboxEnvironment': obj.data.connectorProfileProperties.Salesforce.isSandboxEnvironment
                };
            }
            if (obj.data.connectorProfileProperties.ServiceNow && Object.keys(obj.data.connectorProfileProperties.ServiceNow).length) {
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileCredentials']['ServiceNow'] = {
                    'Username': 'REPLACEME',
                    'Password': 'REPLACEME'
                };
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileProperties']['ServiceNow'] = {
                    'InstanceUrl': obj.data.connectorProfileProperties.ServiceNow.instanceUrl
                };
            }
            if (obj.data.connectorProfileProperties.Singular && Object.keys(obj.data.connectorProfileProperties.Singular).length) {
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileCredentials']['Singular'] = {
                    'ApiKey': 'REPLACEME'
                };
            }
            if (obj.data.connectorProfileProperties.Slack && Object.keys(obj.data.connectorProfileProperties.Slack).length) {
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileCredentials']['Slack'] = {
                    'AccessToken': 'REPLACEME',
                    'ClientId': 'REPLACEME',
                    'ClientSecret': 'REPLACEME',
                    'ConnectorOAuthRequest': 'REPLACEME'
                };
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileProperties']['Slack'] = {
                    'InstanceUrl': obj.data.connectorProfileProperties.Slack.instanceUrl
                };
            }
            if (obj.data.connectorProfileProperties.Snowflake && Object.keys(obj.data.connectorProfileProperties.Snowflake).length) {
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileCredentials']['Snowflake'] = {
                    'Username': 'REPLACEME',
                    'Password': 'REPLACEME'
                };
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileProperties']['Snowflake'] = {
                    'AccountName': obj.data.connectorProfileProperties.Snowflake.accountName,
                    'BucketName': obj.data.connectorProfileProperties.Snowflake.bucketName,
                    'BucketPrefix': obj.data.connectorProfileProperties.Snowflake.bucketPrefix,
                    'PrivateLinkServiceName': obj.data.connectorProfileProperties.Snowflake.privateLinkServiceName,
                    'Region': obj.data.connectorProfileProperties.Snowflake.region,
                    'Stage': obj.data.connectorProfileProperties.Snowflake.stage,
                    'Warehouse': obj.data.connectorProfileProperties.Snowflake.warehouse
                };
            }
            if (obj.data.connectorProfileProperties.Trendmicro && Object.keys(obj.data.connectorProfileProperties.Trendmicro).length) {
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileCredentials']['Trendmicro'] = {
                    'ApiSecretKey': 'REPLACEME'
                };
            }
            if (obj.data.connectorProfileProperties.Veeva && Object.keys(obj.data.connectorProfileProperties.Veeva).length) {
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileCredentials']['Veeva'] = {
                    'Username': 'REPLACEME',
                    'Password': 'REPLACEME'
                };
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileProperties']['Veeva'] = {
                    'InstanceUrl': obj.data.connectorProfileProperties.Veeva.instanceUrl
                };
            }
            if (obj.data.connectorProfileProperties.Zendesk && Object.keys(obj.data.connectorProfileProperties.Zendesk).length) {
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileCredentials']['Zendesk'] = {
                    'AccessToken': 'REPLACEME',
                    'ClientId': 'REPLACEME',
                    'ClientSecret': 'REPLACEME',
                    'ConnectorOAuthRequest': 'REPLACEME'
                };
                reqParams.cfn['ConnectorProfileConfig']['ConnectorProfileProperties']['Zendesk'] = {
                    'InstanceUrl': obj.data.connectorProfileProperties.Zendesk.instanceUrl
                };
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appflow', obj.id, 'AWS::AppFlow::ConnectorProfile'),
            'region': obj.region,
            'service': 'appflow',
            'type': 'AWS::AppFlow::ConnectorProfile',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.connectorProfileName,
                'GetAtt': {
                    'ConnectorProfileArn': obj.data.connectorProfileArn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
