/* ========================================================================== */
// CodePipeline
/* ========================================================================== */

sections.push({
    'category': 'Developer Tools',
    'service': 'CodePipeline',
    'resourcetypes': {
        'Pipelines': {
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
        'Webhooks': {
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
                        field: 'targetpipeline',
                        title: 'Target Pipeline',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'targetaction',
                        title: 'Target Action',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'authentication',
                        title: 'Authentication',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Custom Action Types': {
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
                        title: 'Category',
                        field: 'category',
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
                        field: 'provider',
                        title: 'Provider',
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
        'Notification Rules': {
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
                        field: 'resource',
                        title: 'Resource',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'detailtype',
                        title: 'Detail Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Connections': {
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
                        field: 'providertype',
                        title: 'Provider Type',
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

async function updateDatatableDeveloperToolsCodePipeline() {
    blockUI('#section-developertools-codepipeline-pipelines-datatable');
    blockUI('#section-developertools-codepipeline-webhooks-datatable');
    blockUI('#section-developertools-codepipeline-customactiontypes-datatable');
    blockUI('#section-developertools-codepipeline-notificationrules-datatable');
    blockUI('#section-developertools-codepipeline-connections-datatable');

    await sdkcall("CodePipeline", "listPipelines", {
        // no params
    }, true).then(async (data) => {
        $('#section-developertools-codepipeline-pipelines-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.pipelines.map(pipeline => {
            return sdkcall("CodePipeline", "getPipeline", {
                name: pipeline.name
            }, true).then((data) => {
                $('#section-developertools-codepipeline-pipelines-datatable').deferredBootstrapTable('append', [{
                    f2id: data.pipeline.name,
                    f2type: 'codepipeline.pipeline',
                    f2data: data.pipeline,
                    f2region: region,
                    name: data.pipeline.name,
                    version: data.pipeline.version
                }]);
            });
        }));

        unblockUI('#section-developertools-codepipeline-pipelines-datatable');
    });

    await sdkcall("CodePipeline", "listWebhooks", {
        // no params
    }, true).then((data) => {
        $('#section-developertools-codepipeline-webhooks-datatable').deferredBootstrapTable('removeAll');

        data.webhooks.forEach(webhook => {
            $('#section-developertools-codepipeline-webhooks-datatable').deferredBootstrapTable('append', [{
                f2id: webhook.arn,
                f2type: 'codepipeline.webhook',
                f2data: webhook,
                f2region: region,
                name: webhook.definition.name,
                targetpipeline: webhook.definition.targetPipeline,
                targetaction: webhook.definition.targetAction,
                authentication: webhook.definition.authentication
            }]);
        });

        unblockUI('#section-developertools-codepipeline-webhooks-datatable');
    });

    await sdkcall("CodePipeline", "listActionTypes", {
        actionOwnerFilter: "Custom"
    }, true).then((data) => {
        $('#section-developertools-codepipeline-customactiontypes-datatable').deferredBootstrapTable('removeAll');

        data.actionTypes.forEach(actionType => {
            $('#section-developertools-codepipeline-customactiontypes-datatable').deferredBootstrapTable('append', [{
                f2id: MD5(JSON.stringify(actionType)),
                f2type: 'codepipeline.customactiontype',
                f2data: actionType,
                f2region: region,
                category: actionType.id.category,
                provider: actionType.id.provider,
                version: actionType.id.version
            }]);
        });

        unblockUI('#section-developertools-codepipeline-customactiontypes-datatable');
    });

    await sdkcall("CodeStarNotifications", "listNotificationRules", {
        // no params
    }, false).then(async (data) => {
        $('#section-developertools-codepipeline-notificationrules-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.NotificationRules.map(notificationRule => {
            return sdkcall("CodeStarNotifications", "describeNotificationRule", {
                Arn: notificationRule.Arn
            }, false).then(async (data) => {
                if (data.Resource.split(":")[2] == "codepipeline") {
                    $('#section-developertools-codepipeline-notificationrules-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Arn,
                        f2type: 'codestarnotifications.notificationrule',
                        f2data: data,
                        f2region: region,
                        name: data.Name,
                        resource: data.Resource,
                        detailtype: data.DetailType
                    }]);
                }
            });
        }));
    }).catch(() => { });

    await sdkcall("CodeStarconnections", "listConnections", {
        ProviderTypeFilter: "Bitbucket"
    }, false).then(async (data) => {
        $('#section-developertools-codepipeline-connections-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Connections.map(connection => {
            return sdkcall("CodeStarconnections", "getConnection", {
                ConnectionArn: connection.ConnectionArn
            }, false).then(async (data) => {
                $('#section-developertools-codepipeline-connections-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Connection.ConnectionArn,
                    f2type: 'codestarconnections.connection',
                    f2data: data.Connection,
                    f2region: region,
                    name: data.Connection.ConnectionName,
                    providertype: data.Connection.ProviderType
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-developertools-codepipeline-notificationrules-datatable');
    unblockUI('#section-developertools-codepipeline-connections-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "codepipeline.pipeline") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.tf['name'] = obj.data.name;
        reqParams.cfn['RoleArn'] = obj.data.roleArn;
        reqParams.tf['role_arn'] = obj.data.roleArn;
        if (obj.data.artifactStore) {
            var encryptionKey = null;
            var tfEncryptionKey = null;
            if (obj.data.artifactStore.encryptionKey) {
                encryptionKey = {
                    'Id': obj.data.artifactStore.encryptionKey.id,
                    'Type': obj.data.artifactStore.encryptionKey.type
                };
                tfEncryptionKey = {
                    'id': obj.data.artifactStore.encryptionKey.id,
                    'type': obj.data.artifactStore.encryptionKey.type
                };
            }
            reqParams.cfn['ArtifactStore'] = {
                'EncryptionKey': encryptionKey,
                'Location': obj.data.artifactStore.location,
                'Type': obj.data.artifactStore.type
            };
            reqParams.tf['artifact_store'] = {
                'encryption_key': tfEncryptionKey,
                'location': obj.data.artifactStore.location,
                'type': obj.data.artifactStore.type
            };
        }
        if (obj.data.artifactStores) {
            reqParams.cfn['ArtifactStores'] = [];
            obj.data.artifactStores.forEach(artifactStore => {
                var encryptionKey = null;
                if (artifactStore.encryptionKey) {
                    encryptionKey = {
                        'Id': artifactStore.encryptionKey.id,
                        'Type': artifactStore.encryptionKey.type
                    };
                }
                reqParams.cfn['ArtifactStores'].push({
                    'ArtifactStore': {
                        'EncryptionKey': encryptionKey,
                        'Location': artifactStore.location,
                        'Type': artifactStore.type
                    },
                    'Region': region // May not be accurate
                });
            });
        }
        if (obj.data.stages) {
            reqParams.cfn['Stages'] = [];
            reqParams.tf['stages'] = [];
            obj.data.stages.forEach(stage => {
                var blockers = null;
                if (stage.blockers) {
                    blockers = [];
                    stage.blockers.forEach(blocker => {
                        blockets.push({
                            'Name': blocker.name,
                            'Type': blocker.type
                        });
                    });
                }
                var actions = null;
                var tfActions = null;
                if (stage.actions) {
                    actions = [];
                    tfActions = [];
                    stage.actions.forEach(action => {
                        var actionTypeId = null;
                        if (action.actionTypeId) {
                            actionTypeId = {
                                'Category': action.actionTypeId.category,
                                'Owner': action.actionTypeId.owner,
                                'Provider': action.actionTypeId.provider,
                                'Version': action.actionTypeId.version
                            };
                        }
                        var outputArtifacts = null;
                        var tfOutputArtifacts = null;
                        if (action.outputArtifacts) {
                            outputArtifacts = [];
                            tfOutputArtifacts = [];
                            action.outputArtifacts.forEach(outputartifact => {
                                outputArtifacts.push({
                                    'Name': outputartifact.name
                                });
                                tfOutputArtifacts.push(outputartifact.name);
                            });
                        }
                        var inputArtifacts = null;
                        var tfInputArtifacts = null;
                        if (action.inputArtifacts) {
                            inputArtifacts = [];
                            tfInputArtifacts = [];
                            action.inputArtifacts.forEach(inputartifact => {
                                inputArtifacts.push({
                                    'Name': inputartifact.name
                                });
                                tfInputArtifacts.push(inputartifact.name);
                            });
                        }
                        actions.push({
                            'Name': action.name,
                            'ActionTypeId': actionTypeId,
                            'Configuration': action.configuration,
                            'InputArtifacts': inputArtifacts,
                            'OutputArtifacts': outputArtifacts,
                            'Region': action.region,
                            'Namespace': action.namespace,
                            'RoleArn': action.roleArn,
                            'RunOrder': action.runOrder
                        });
                        tfActions.push({
                            'name': action.name,
                            'category': action.actionTypeId.category,
                            'owner': action.actionTypeId.owner,
                            'configuration': action.configuration,
                            'input_artifacts': tfInputArtifacts,
                            'provider': action.actionTypeId.provider,
                            'version': action.actionTypeId.version,
                            'output_artifacts': tfOutputArtifacts,
                            'role_arn': action.roleArn,
                            'run_order': action.runOrder
                        });
                    });
                }
                reqParams.cfn['Stages'].push({
                    'Name': stage.name,
                    'Actions': actions,
                    'Blockers': blockers
                });
                reqParams.tf['stages'].push({
                    'name': stage.name,
                    'action': tfActions
                });
            });
        }

        /*
        TODO:
        ArtifactStores:
            - Region
        DisableInboundStageTransitions:
            - DisableInboundStageTransitions
        RestartExecutionOnUpdate: Boolean
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codepipeline', obj.id, 'AWS::CodePipeline::Pipeline'),
            'region': obj.region,
            'service': 'codepipeline',
            'type': 'AWS::CodePipeline::Pipeline',
            'terraformType': 'aws_codepipeline',
            'options': reqParams
        });
    } else if (obj.type == "codepipeline.webhook") {
        var filters = null;
        var tfFilters = null;
        if (obj.data.filters) {
            filters = [];
            tfFilters = [];
            obj.data.filters.forEach(filter => {
                filters.push({
                    'JsonPath': filter.jsonPath,
                    'MatchEquals': filter.matchEquals
                });
                tfFilters.push({
                    'json_path': filter.jsonPath,
                    'match_equals': filter.matchEquals
                });
            });
        }
        var authenticationConfiguration = null;
        if (obj.data.authenticationConfiguration) {
            authenticationConfiguration = {
                'AllowedIPRange': obj.data.authenticationConfiguration.AllowedIPRange,
                'SecretToken': obj.data.authenticationConfiguration.SecretToken
            };
        }
        reqParams.cfn['Name'] = obj.data.definition.name;
        reqParams.tf['name'] = obj.data.definition.name;
        reqParams.cfn['TargetPipeline'] = obj.data.definition.targetPipeline;
        reqParams.tf['target_pipeline'] = obj.data.definition.targetPipeline;
        reqParams.cfn['TargetAction'] = obj.data.definition.targetAction;
        reqParams.tf['target_action'] = obj.data.definition.targetAction;
        reqParams.cfn['Filters'] = filters;
        reqParams.tf['filter'] = tfFilters;
        reqParams.cfn['Authentication'] = obj.data.definition.authentication;
        reqParams.tf['authentication'] = obj.data.definition.authentication;
        reqParams.cfn['AuthenticationConfiguration'] = obj.data.definition.authenticationConfiguration;
        reqParams.tf['authentication_configuration'] = {
            'allowed_ip_range': obj.data.definition.authenticationConfiguration.AllowedIPRange,
            'secret_token': obj.data.definition.authenticationConfiguration.SecretToken
        };

        /*
        TODO:
        TargetPipelineVersion: Integer
        RegisterWithThirdParty: Boolean
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codepipeline', obj.id, 'AWS::CodePipeline::Webhook'),
            'region': obj.region,
            'service': 'codepipeline',
            'type': 'AWS::CodePipeline::Webhook',
            'terraformType': 'aws_codepipeline_webhook',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.definition.name,
                'GetAtt': {
                    'Url': obj.data.url
                }
            }
        });
    } else if (obj.type == "codepipeline.customactiontype") {
        reqParams.cfn['Category'] = obj.data.id.category;
        reqParams.cfn['Provider'] = obj.data.id.provider;
        reqParams.cfn['Version'] = obj.data.id.version;
        if (obj.data.settings) {
            reqParams.cfn['Settings'] = {
                'EntityUrlTemplate': obj.data.settings.entityUrlTemplate,
                'ExecutionUrlTemplate': obj.data.settings.executionUrlTemplate,
                'RevisionUrlTemplate': obj.data.settings.revisionUrlTemplate,
                'ThirdPartyConfigurationUrl': obj.data.settings.thirdPartyConfigurationUrl
            };
        }
        if (obj.data.actionConfigurationProperties) {
            reqParams.cfn['ConfigurationProperties'] = [];
            obj.data.actionConfigurationProperties.forEach(actionConfigurationProperty => {
                reqParams.cfn['ConfigurationProperties'].push({
                    'Description': actionConfigurationProperty.description,
                    'Key': actionConfigurationProperty.key,
                    'Name': actionConfigurationProperty.name,
                    'Queryable': actionConfigurationProperty.queryable,
                    'Required': actionConfigurationProperty.required,
                    'Secret': actionConfigurationProperty.secret,
                    'Type': actionConfigurationProperty.type
                });
            });
        }
        if (obj.data.inputArtifactDetails) {
            reqParams.cfn['InputArtifactDetails'] = {
                'MinimumCount': obj.data.inputArtifactDetails.minimumCount,
                'MaximumCount': obj.data.inputArtifactDetails.maximumCount
            };
        }
        if (obj.data.outputArtifactDetails) {
            reqParams.cfn['OutputArtifactDetails'] = {
                'MinimumCount': obj.data.outputArtifactDetails.minimumCount,
                'MaximumCount': obj.data.outputArtifactDetails.maximumCount
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codepipeline', obj.id, 'AWS::CodePipeline::CustomActionType'),
            'region': obj.region,
            'service': 'codepipeline',
            'type': 'AWS::CodePipeline::CustomActionType',
            'options': reqParams
        });
    } else if (obj.type == "codestarconnections.connection") {
        reqParams.cfn['ConnectionName'] = obj.data.ConnectionName;
        reqParams.cfn['ProviderType'] = obj.data.ProviderType;
        reqParams.cfn['HostArn'] = obj.data.HostArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codestarconnections', obj.id, 'AWS::CodeStarConnections::Connection'),
            'region': obj.region,
            'service': 'codestarconnections',
            'type': 'AWS::CodeStarConnections::Connection',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ConnectionArn,
                'GetAtt': {
                    'ConnectionArn': obj.data.ConnectionArn,
                    'OwnerAccountId': obj.data.OwnerAccountId,
                    'ConnectionStatus': obj.data.ConnectionStatus
                },
                'Import': {
                    'ConnectionArn': obj.data.ConnectionArn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
