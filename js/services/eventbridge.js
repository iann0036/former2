/* ========================================================================== */
// EventBridge
/* ========================================================================== */

sections.push({
    'category': 'Application Integration',
    'service': 'EventBridge',
    'resourcetypes': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'eventpattern',
                        title: 'Event Pattern',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'scheduleexpression',
                        title: 'Schedule Expression',
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
        'Event Buses': {
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
                        field: 'eventsourcename',
                        title: 'Event Source Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Event Bus Policies': {
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
        'Schema Registries': {
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
        'Schema Discoverers': {
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
                        title: 'Discoverer ID',
                        field: 'discovererid',
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
        'Schemas': {
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
        'Registry Policies': {
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
                        title: 'Registry Name',
                        field: 'registryname',
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
                        field: 'revisionid',
                        title: 'Revision ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Archives': {
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
        'API Destinations': {
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
        'Event Integrations': {
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

async function updateDatatableApplicationIntegrationEventBridge() {
    blockUI('#section-applicationintegration-eventbridge-rules-datatable');
    blockUI('#section-applicationintegration-eventbridge-eventbuses-datatable');
    blockUI('#section-applicationintegration-eventbridge-eventbuspolicies-datatable');
    blockUI('#section-applicationintegration-eventbridge-schemas-datatable');
    blockUI('#section-applicationintegration-eventbridge-schemaregistries-datatable');
    blockUI('#section-applicationintegration-eventbridge-schemadiscoverers-datatable');
    blockUI('#section-applicationintegration-eventbridge-registrypolicies-datatable');
    blockUI('#section-applicationintegration-eventbridge-archives-datatable');
    blockUI('#section-applicationintegration-eventbridge-apidestinations-datatable');
    blockUI('#section-applicationintegration-eventbridge-connections-datatable');
    blockUI('#section-applicationintegration-eventbridge-eventintegrations-datatable');

    await sdkcall("EventBridge", "listRules", {
        // no params
    }, true).then(async (data) => {
        $('#section-applicationintegration-eventbridge-rules-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Rules.map(rule => {
            return sdkcall("EventBridge", "describeRule", {
                Name: rule.Name
            }, true).then(async (data) => {
                await sdkcall("EventBridge", "listTargetsByRule", {
                    Rule: data.Name
                }, true).then((targets) => {
                    data['Targets'] = targets.Targets;
                    $('#section-applicationintegration-eventbridge-rules-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Arn,
                        f2type: 'eventbridge.rule',
                        f2data: data,
                        f2region: region,
                        f2link: 'https://console.aws.amazon.com/events/home?region=' + region + '#/rules/' + data.Name,
                        name: data.Name,
                        description: data.Description,
                        eventpattern: data.EventPattern,
                        scheduleexpression: data.ScheduleExpression,
                        enabled: (data.State == "ENABLED")
                    }]);
                });
            });
        }));
    });

    await sdkcall("EventBridge", "listEventBuses", {
        // no params
    }, true).then(async (data) => {
        $('#section-applicationintegration-eventbridge-eventbuses-datatable').deferredBootstrapTable('removeAll');
        $('#section-applicationintegration-eventbridge-eventbuspolicies-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.EventBuses.map(async (eventBus) => {
            if (eventBus.Name == "default") {
                return Promise.resolve();
            }

            await sdkcall("EventBridge", "listRules", {
                EventBusName: eventBus.Name
            }, true).then(async (data) => {
                await Promise.all(data.Rules.map(rule => {
                    return sdkcall("EventBridge", "describeRule", {
                        EventBusName: eventBus.Name,
                        Name: rule.Name
                    }, true).then(async (data) => {
                        await sdkcall("EventBridge", "listTargetsByRule", {
                            EventBusName: eventBus.Name,
                            Rule: data.Name
                        }, true).then((targets) => {
                            data['Targets'] = targets.Targets;
                            $('#section-applicationintegration-eventbridge-rules-datatable').deferredBootstrapTable('append', [{
                                f2id: data.Arn,
                                f2type: 'eventbridge.rule',
                                f2data: data,
                                f2region: region,
                                f2link: 'https://console.aws.amazon.com/events/home?region=' + region + '#/rules/' + data.Name,
                                name: data.Name,
                                description: data.Description,
                                eventpattern: data.EventPattern,
                                scheduleexpression: data.ScheduleExpression,
                                enabled: (data.State == "ENABLED")
                            }]);
                        });
                    });
                }));
            });

            return sdkcall("EventBridge", "describeEventBus", {
                Name: eventBus.Name
            }, true).then(async (data) => {
                if (data.Name != "default") {
                    $('#section-applicationintegration-eventbridge-eventbuses-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Arn,
                        f2type: 'eventbridge.eventbus',
                        f2data: data,
                        f2region: region,
                        f2link: 'https://console.aws.amazon.com/events/home?region=' + region + '#/eventbus/' + data.Name,
                        name: data.Name
                    }]);
                }

                try {
                    var policyobj = JSON.parse(data.Policy);

                    policyobj.Statement.forEach(statement => {
                        if (data.Name != "default") {
                            statement["EventBusName"] = data.Name;
                        }

                        $('#section-applicationintegration-eventbridge-eventbuspolicies-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Arn,
                            f2type: 'eventbridge.eventbuspolicy',
                            f2data: statement,
                            f2region: region,
                            name: data.Name // TODO: much better datatable keys
                        }]);
                    });
                } catch (err) { }
            });
        }));
    });

    await sdkcall("Schemas", "listRegistries", {
        // no params
    }, false).then(async (data) => {
        $('#section-applicationintegration-eventbridge-schemas-datatable').deferredBootstrapTable('removeAll');
        $('#section-applicationintegration-eventbridge-schemaregistries-datatable').deferredBootstrapTable('removeAll');
        $('#section-applicationintegration-eventbridge-registrypolicies-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Registries.map(async (registry) => {
            if (registry.RegistryName.startsWith("aws.")) {
                return Promise.resolve();
            }

            return Promise.all([
                sdkcall("Schemas", "describeRegistry", {
                    RegistryName: registry.RegistryName
                }, true).then(async (data) => {
                    $('#section-applicationintegration-eventbridge-schemaregistries-datatable').deferredBootstrapTable('append', [{
                        f2id: data.RegistryArn,
                        f2type: 'eventbridge.schemaregistry',
                        f2data: data,
                        f2region: region,
                        name: data.RegistryName,
                        description: data.Description
                    }]);
                }),
                sdkcall("Schemas", "listSchemas", {
                    RegistryName: registry.RegistryName
                }, true).then(async (data) => {
                    $('#section-applicationintegration-eventbridge-schemas-datatable').deferredBootstrapTable('removeAll');

                    await Promise.all(data.Schemas.map(async (schema) => {
                        return sdkcall("Schemas", "describeSchema", {
                            RegistryName: registry.RegistryName,
                            SchemaName: schema.SchemaName
                        }, true).then(async (data) => {
                            data['RegistryName'] = registry.RegistryName;

                            $('#section-applicationintegration-eventbridge-schemas-datatable').deferredBootstrapTable('append', [{
                                f2id: data.SchemaArn,
                                f2type: 'eventbridge.schema',
                                f2data: data,
                                f2region: region,
                                name: data.SchemaName,
                                description: data.Description,
                                type: data.Type
                            }]);
                        });
                    }));
                }),
                sdkcall("Schemas", "getResourcePolicy", {
                    RegistryName: registry.RegistryName
                }, true).then(async (data) => {
                    data['RegistryName'] = registry.RegistryName;

                    $('#section-applicationintegration-eventbridge-registrypolicies-datatable').deferredBootstrapTable('append', [{
                        f2id: registry.RegistryName + " Resource Policy",
                        f2type: 'eventbridge.registrypolicy',
                        f2data: data,
                        f2region: region,
                        registryname: data.RegistryName,
                        revisionid: data.RevisionId
                    }]);
                }).catch(() => { })
            ]);
        }));
    }).catch(() => { });

    await sdkcall("Schemas", "listDiscoverers", {
        // no params
    }, false).then(async (data) => {
        $('#section-applicationintegration-eventbridge-schemadiscoverers-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Discoverers.map(async (discoverer) => {
            return sdkcall("Schemas", "describeDiscoverer", {
                DiscovererId: discoverer.DiscovererId
            }, true).then(async (data) => {
                $('#section-applicationintegration-eventbridge-schemadiscoverers-datatable').deferredBootstrapTable('append', [{
                    f2id: data.DiscovererArn,
                    f2type: 'eventbridge.schemadiscoverer',
                    f2data: data,
                    f2region: region,
                    discovererid: data.DiscovererId,
                    description: data.Description
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("EventBridge", "listArchives", {
        // no params
    }, false).then(async (data) => {
        $('#section-applicationintegration-eventbridge-archives-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Archives.map(async (archive) => {
            return sdkcall("EventBridge", "describeArchive", {
                ArchiveName: archive.ArchiveName
            }, true).then(async (data) => {
                $('#section-applicationintegration-eventbridge-archives-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ArchiveArn,
                    f2type: 'eventbridge.archive',
                    f2data: data,
                    f2region: region,
                    name: data.ArchiveName,
                    description: data.Description
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("EventBridge", "listApiDestinations", {
        // no params
    }, false).then(async (data) => {
        $('#section-applicationintegration-eventbridge-apidestinations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ApiDestinations.map(async (apidestination) => {
            return sdkcall("EventBridge", "describeApiDestination", {
                Name: apidestination.Name
            }, true).then(async (data) => {
                $('#section-applicationintegration-eventbridge-apidestinations-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ApiDestinationArn,
                    f2type: 'eventbridge.apidestination',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    description: data.Description
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("EventBridge", "listConnections", {
        // no params
    }, false).then(async (data) => {
        $('#section-applicationintegration-eventbridge-connections-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Connections.map(async (connection) => {
            return sdkcall("EventBridge", "describeConnection", {
                Name: connection.Name
            }, true).then(async (data) => {
                $('#section-applicationintegration-eventbridge-connections-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ConnectionArn,
                    f2type: 'eventbridge.connection',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    description: data.Description
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("AppIntegrations", "listEventIntegrations", {
        // no params
    }, false).then(async (data) => {
        $('#section-applicationintegration-eventbridge-eventintegrations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.EventIntegrations.map(async (eventintegration) => {
            return sdkcall("AppIntegrations", "getEventIntegration", {
                Name: eventintegration.Name
            }, true).then(async (data) => {
                $('#section-applicationintegration-eventbridge-eventintegrations-datatable').deferredBootstrapTable('append', [{
                    f2id: data.EventIntegrationArn,
                    f2type: 'eventbridge.eventintegration',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    description: data.Description
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-applicationintegration-eventbridge-rules-datatable');
    unblockUI('#section-applicationintegration-eventbridge-eventbuses-datatable');
    unblockUI('#section-applicationintegration-eventbridge-eventbuspolicies-datatable');
    unblockUI('#section-applicationintegration-eventbridge-schemas-datatable');
    unblockUI('#section-applicationintegration-eventbridge-schemaregistries-datatable');
    unblockUI('#section-applicationintegration-eventbridge-schemadiscoverers-datatable');
    unblockUI('#section-applicationintegration-eventbridge-registrypolicies-datatable');
    unblockUI('#section-applicationintegration-eventbridge-archives-datatable');
    unblockUI('#section-applicationintegration-eventbridge-apidestinations-datatable');
    unblockUI('#section-applicationintegration-eventbridge-connections-datatable');
    unblockUI('#section-applicationintegration-eventbridge-eventintegrations-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "eventbridge.rule") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['EventPattern'] = obj.data.EventPattern;
        reqParams.tf['event_pattern'] = obj.data.EventPattern;
        reqParams.cfn['ScheduleExpression'] = obj.data.ScheduleExpression;
        reqParams.tf['schedule_expression'] = obj.data.ScheduleExpression;
        reqParams.cfn['State'] = obj.data.State;
        if (obj.data.Targets) {
            reqParams.cfn['Targets'] = [];
            obj.data.Targets.forEach(target => {
                var ecsParameters = null;
                if (target.EcsParameters) {
                    var networkConfiguration = null;
                    if (target.EcsParameters.NetworkConfiguration) {
                        networkConfiguration = {
                            'AwsVpcConfiguration': target.EcsParameters.NetworkConfiguration.awsvpcConfiguration
                        };
                    }
                    ecsParameters = {
                        'TaskDefinitionArn': target.EcsParameters.TaskDefinitionArn,
                        'TaskCount': target.EcsParameters.TaskCount,
                        'LaunchType': target.EcsParameters.LaunchType,
                        'Group': target.EcsParameters.Group,
                        'PlatformVersion': target.EcsParameters.PlatformVersion,
                        'NetworkConfiguration': networkConfiguration
                    };
                }
                reqParams.cfn['Targets'].push({
                    'Arn': target.Arn,
                    'BatchParameters': target.BatchParameters,
                    'EcsParameters': ecsParameters,
                    'HttpParameters': target.HttpParameters,
                    'Id': target.Id,
                    'Input': target.Input,
                    'InputPath': target.InputPath,
                    'InputTransformer': target.InputTransformer,
                    'KinesisParameters': target.KinesisParameters,
                    'RoleArn': target.RoleArn,
                    'RunCommandParameters': target.RunCommandParameters,
                    'SqsParameters': target.SqsParameters,
                    'DeadLetterConfig': target.DeadLetterConfig,
                    'RetryPolicy': target.RetryPolicy
                });
            });
        }
        reqParams.cfn['EventBusName'] = obj.data.EventBusName;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('events', obj.id, 'AWS::Events::Rule'),
            'region': obj.region,
            'service': 'events',
            'type': 'AWS::Events::Rule',
            'terraformType': 'aws_cloudwatch_event_rule',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'GetAtt': {
                    'Arn': obj.data.Arn
                },
                'Import': {
                    'Name': obj.data.Name
                }
            }
        });

        if (obj.data.Targets) {
            obj.data.Targets.forEach(target => {
                reqParams = {
                    'boto3': {},
                    'go': {},
                    'cfn': {},
                    'cli': {},
                    'tf': {},
                    'iam': {}
                };

                reqParams.tf['rule'] = obj.data.Name;
                reqParams.tf['target_id'] = obj.data.Id;
                reqParams.tf['arn'] = obj.data.Arn;
                reqParams.tf['input'] = obj.data.Input;
                reqParams.tf['input_path'] = obj.data.InputPath;
                reqParams.tf['role_arn'] = obj.data.RoleArn;
                if (target.InputTransformer) {
                    reqParams.tf['input_transformer'] = {
                        'input_paths': target.InputTransformer.InputPathsMap,
                        'input_template': target.InputTransformer.InputTemplate
                    };
                }
                if (target.EcsParameters) {
                    var networkconfiguration = null;
                    if (target.EcsParameters.NetworkConfiguration && target.EcsParameters.NetworkConfiguration.awsvpcConfiguration) {
                        networkconfiguration = {
                            'subnets': target.EcsParameters.NetworkConfiguration.awsvpcConfiguration.Subnets,
                            'security_groups': target.EcsParameters.NetworkConfiguration.awsvpcConfiguration.SecurityGroups,
                            'assign_public_ip': target.EcsParameters.NetworkConfiguration.awsvpcConfiguration.AssignPublicIp
                        };
                    }
                    reqParams.tf['ecs_target'] = {
                        'task_definition_arn': target.EcsParameters.TaskDefinitionArn,
                        'task_count': target.EcsParameters.TaskCount,
                        'network_configuration': networkconfiguration,
                        'platform_version': target.EcsParameters.PlatformVersion,
                        'task_count': target.EcsParameters.Group
                    };
                }
                if (target.KinesisParameters) {
                    reqParams.tf['kinesis_target'] = {
                        'partition_key_path': target.KinesisParameters.PartitionKeyPath
                    };
                }
                if (target.RunCommandParameters) {
                    reqParams.tf['run_command_targets'] = [];
                    target.RunCommandParameters.RunCommandTargets.forEach(runcommandtarget => {
                        reqParams.tf['run_command_targets'].push({
                            'key': runcommandtarget.Key,
                            'values': runcommandtarget.Values
                        });
                    });
                }
                if (target.EcsParameters) {
                    reqParams.tf['ecs_target'] = {
                        'task_definition_arn': target.EcsParameters.TaskDefinitionArn,
                        'task_count': target.EcsParameters.TaskCount
                    };
                }
                if (target.BatchParameters) {
                    var arraysize = null;
                    if (target.BatchParameters.ArrayProperties) {
                        arraysize = target.BatchParameters.ArrayProperties.Size;
                    }
                    var attempts = null;
                    if (target.BatchParameters.RetryStrategy) {
                        attempts = target.BatchParameters.RetryStrategy.Attempts;
                    }
                    reqParams.tf['batch_target'] = {
                        'job_definition': target.BatchParameters.JobDefinition,
                        'job_name': target.BatchParameters.JobName,
                        'array_size': arraysize,
                        'job_attempts': attempts
                    };
                }
                if (target.SqsParameters) {
                    reqParams.tf['sqs_target'] = {
                        'message_group_id': target.SqsParameters.MessageGroupId
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::CloudWatch::EventTarget'), // not real resource type
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'terraformType': 'aws_cloudwatch_event_target',
                    'options': reqParams
                });
            });
        }
    } else if (obj.type == "eventbridge.eventbuspolicy") {
        reqParams.cfn['Action'] = obj.data.Action;
        if (obj.data.Condition && obj.data.Condition.StringEquals && obj.data.Condition.StringEquals['aws:PrincipalOrgID']) {
            reqParams.cfn['Condition'] = {
                'Key': 'aws:PrincipalOrgID',
                'Type': 'StringEquals',
                'Value': obj.data.Condition.StringEquals['aws:PrincipalOrgID']
            };
        }
        reqParams.cfn['Principal'] = "*";
        if (obj.data.Principal && obj.data.Principal.AWS) {
            reqParams.cfn['Principal'] = obj.data.Principal.AWS;
        }
        reqParams.cfn['Statement'] = obj.data.Statement;
        reqParams.cfn['StatementId'] = obj.data.Sid;
        reqParams.cfn['EventBusName'] = obj.data.EventBusName;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('eventbridge', obj.id, 'AWS::Events::EventBusPolicy'),
            'region': obj.region,
            'service': 'eventbridge',
            'type': 'AWS::Events::EventBusPolicy',
            'options': reqParams
        });
    } else if (obj.type == "eventbridge.eventbus") {
        reqParams.cfn['Name'] = obj.data.Name;
        if (obj.data.Name.startsWith('aws.partner/')) {
            reqParams.cfn['EventSourceName'] = obj.data.Name;
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('eventbridge', obj.id, 'AWS::Events::EventBus'),
            'region': obj.region,
            'service': 'eventbridge',
            'type': 'AWS::Events::EventBus',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'GetAtt': {
                    'Arn': obj.data.Arn,
                    'Name': obj.data.Name,
                    'Policy': obj.data.Policy
                }
            }
        });
    } else if (obj.type == "eventbridge.schemaregistry") {
        reqParams.cfn['RegistryName'] = obj.data.RegistryName;
        reqParams.cfn['Description'] = obj.data.Description;
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
            'logicalId': getResourceName('eventbridge', obj.id, 'AWS::EventSchemas::Registry'),
            'region': obj.region,
            'service': 'eventbridge',
            'type': 'AWS::EventSchemas::Registry',
            'options': reqParams
        });
    } else if (obj.type == "eventbridge.schemadiscoverer") {
        reqParams.cfn['SourceArn'] = obj.data.SourceArn;
        reqParams.cfn['Description'] = obj.data.Description;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.tags[tagKey]
                });
            });
        }
        reqParams.cfn['CrossAccount'] = obj.data.CrossAccount;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('eventbridge', obj.id, 'AWS::EventSchemas::Discoverer'),
            'region': obj.region,
            'service': 'eventbridge',
            'type': 'AWS::EventSchemas::Discoverer',
            'options': reqParams
        });
    } else if (obj.type == "eventbridge.schema") {
        reqParams.cfn['Content'] = obj.data.Content;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.cfn['RegistryName'] = obj.data.RegistryName;
        reqParams.cfn['SchemaName'] = obj.data.SchemaName;
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
            'logicalId': getResourceName('eventbridge', obj.id, 'AWS::EventSchemas::Schema'),
            'region': obj.region,
            'service': 'eventbridge',
            'type': 'AWS::EventSchemas::Schema',
            'options': reqParams
        });
    } else if (obj.type == "eventbridge.registrypolicy") {
        reqParams.cfn['RegistryName'] = obj.data.RegistryName;
        reqParams.cfn['RevisionId'] = obj.data.RevisionId;
        reqParams.cfn['Policy'] = obj.data.Policy;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('eventbridge', obj.id, 'AWS::EventSchemas::RegistryPolicy'),
            'region': obj.region,
            'service': 'eventbridge',
            'type': 'AWS::EventSchemas::RegistryPolicy',
            'options': reqParams
        });
    } else if (obj.type == "eventbridge.archive") {
        reqParams.cfn['ArchiveName'] = obj.data.ArchiveName;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['EventPattern'] = obj.data.EventPattern;
        reqParams.cfn['RetentionDays'] = obj.data.RetentionDays;
        reqParams.cfn['SourceArn'] = obj.data.EventSourceArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('eventbridge', obj.id, 'AWS::Events::Archive'),
            'region': obj.region,
            'service': 'eventbridge',
            'type': 'AWS::Events::Archive',
            'options': reqParams
        });
    } else if (obj.type == "eventbridge.apidestination") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['ConnectionArn'] = obj.data.ConnectionArn;
        reqParams.cfn['InvocationEndpoint'] = obj.data.InvocationEndpoint;
        reqParams.cfn['HttpMethod'] = obj.data.HttpMethod;
        reqParams.cfn['InvocationRateLimitPerSecond'] = obj.data.InvocationRateLimitPerSecond;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('eventbridge', obj.id, 'AWS::Events::ApiDestination'),
            'region': obj.region,
            'service': 'eventbridge',
            'type': 'AWS::Events::ApiDestination',
            'options': reqParams
        });
    } else if (obj.type == "eventbridge.connection") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['AuthorizationType'] = obj.data.AuthorizationType;
        reqParams.cfn['AuthParameters'] = obj.data.AuthParameters;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('eventbridge', obj.id, 'AWS::Events::Connection'),
            'region': obj.region,
            'service': 'eventbridge',
            'type': 'AWS::Events::Connection',
            'options': reqParams
        });
    } else if (obj.type == "eventbridge.eventintegration") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['EventBridgeBus'] = obj.data.EventBridgeBus;
        reqParams.cfn['EventFilter'] = obj.data.EventFilter;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.Tags) {
                reqParams.cfn['Tags'].push({
                    'Key': k,
                    'Value': obj.data.Tags[k]
                });
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('eventbridge', obj.id, 'AWS::AppIntegrations::EventIntegration'),
            'region': obj.region,
            'service': 'eventbridge',
            'type': 'AWS::AppIntegrations::EventIntegration',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'GetAtt': {
                    'EventIntegrationArn': obj.data.EventIntegrationArn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
