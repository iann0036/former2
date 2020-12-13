/* ========================================================================== */
// GameLift
/* ========================================================================== */

sections.push({
    'category': 'Game Development',
    'service': 'GameLift',
    'resourcetypes': {
        'Fleets': {
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
                        field: 'fleettype',
                        title: 'Fleet Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'instancetype',
                        title: 'Instance Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Builds': {
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
                        field: 'version',
                        title: 'Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'size',
                        title: 'Size',
                        sortable: true,
                        editable: true,
                        formatter: byteSizeFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'os',
                        title: 'OS',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Aliases': {
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
                        field: 'aliasid',
                        title: 'Alias ID',
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
        'Scripts': {
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
                        field: 'scriptid',
                        title: 'Script ID',
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
        'Queues': {
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
                        field: 'timeout',
                        title: 'Timeout',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Matchmaking Configurations': {
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
                        field: 'rulesetname',
                        title: 'Rule Set Name',
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
        'Matchmaking Rule Sets': {
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
        'Game Server Groups': {
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
                        field: 'rolearn',
                        title: 'Role ARN',
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

async function updateDatatableGameDevelopmentGameLift() {
    blockUI('#section-gamedevelopment-gamelift-fleets-datatable');
    blockUI('#section-gamedevelopment-gamelift-builds-datatable');
    blockUI('#section-gamedevelopment-gamelift-aliases-datatable');
    blockUI('#section-gamedevelopment-gamelift-scripts-datatable');
    blockUI('#section-gamedevelopment-gamelift-queues-datatable');
    blockUI('#section-gamedevelopment-gamelift-matchmakingconfigurations-datatable');
    blockUI('#section-gamedevelopment-gamelift-matchmakingrulesets-datatable');
    blockUI('#section-gamedevelopment-gamelift-gameservergroups-datatable');

    await sdkcall("GameLift", "listFleets", {
        // no params
    }, true).then(async (data) => {
        $('#section-gamedevelopment-gamelift-fleets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.FleetIds.map(async (fleetId) => {
            await sdkcall("GameLift", "describeFleetAttributes", {
                FleetIds: [fleetId]
            }, true).then(async (data) => {
                var fleet = data.FleetAttributes[0];

                await sdkcall("GameLift", "listFleets", {
                    FleetId: fleet.FleetId
                }, false).then(data => {
                    fleet['RuntimeConfiguration'] = data.RuntimeConfiguration;
                }).catch(() => { });

                await sdkcall("GameLift", "describeFleetCapacity", {
                    FleetIds: [fleet.FleetId]
                }, false).then(data => {
                    if (data.FleetCapacity && data.FleetCapacity.length == 1) {
                        fleet['InstanceCounts'] = data.FleetCapacity[0].InstanceCounts;
                    }
                }).catch(() => { });

                await sdkcall("GameLift", "describeFleetPortSettings", {
                    FleetId: fleet.FleetId
                }, false).then(data => {
                    fleet['EC2InboundPermissions'] = data.InboundPermissions;
                }).catch(() => { });

                $('#section-gamedevelopment-gamelift-fleets-datatable').deferredBootstrapTable('append', [{
                    f2id: fleet.FleetArn,
                    f2type: 'gamelift.fleet',
                    f2data: fleet,
                    f2region: region,
                    id: fleet.FleetId,
                    fleettype: fleet.FleetType,
                    instancetype: fleet.InstanceType,
                    name: fleet.Name
                }]);
            });
        }));

        unblockUI('#section-gamedevelopment-gamelift-fleets-datatable');
    });

    await sdkcall("GameLift", "listBuilds", {
        // no params
    }, true).then(async (data) => {
        $('#section-gamedevelopment-gamelift-builds-datatable').deferredBootstrapTable('removeAll');

        data.Builds.forEach(async (build) => {
            await sdkcall("GameLift", "requestUploadCredentials", {
                BuildId: build.BuildId
            }, false).then((data) => {
                build['StorageLocation'] = data['StorageLocation'];
            }).catch(() => { });

            $('#section-gamedevelopment-gamelift-builds-datatable').deferredBootstrapTable('append', [{
                f2id: build.BuildId,
                f2type: 'gamelift.build',
                f2data: build,
                f2region: region,
                name: build.Name,
                id: build.BuildId,
                version: build.Version,
                size: build.SizeOnDisk,
                os: build.OperatingSystem
            }]);
        });

        unblockUI('#section-gamedevelopment-gamelift-builds-datatable');
    });

    await sdkcall("GameLift", "listAliases", {
        // no params
    }, true).then((data) => {
        $('#section-gamedevelopment-gamelift-aliases-datatable').deferredBootstrapTable('removeAll');

        data.Aliases.forEach(alias => {
            $('#section-gamedevelopment-gamelift-aliases-datatable').deferredBootstrapTable('append', [{
                f2id: alias.AliasArn,
                f2type: 'gamelift.alias',
                f2data: alias,
                f2region: region,
                name: alias.Name,
                aliasid: alias.AliasId,
                description: alias.Description
            }]);
        });

        unblockUI('#section-gamedevelopment-gamelift-aliases-datatable');
    });

    await sdkcall("GameLift", "listScripts", {
        // no params
    }, true).then((data) => {
        $('#section-gamedevelopment-gamelift-scripts-datatable').deferredBootstrapTable('removeAll');

        data.Scripts.forEach(script => {
            $('#section-gamedevelopment-gamelift-scripts-datatable').deferredBootstrapTable('append', [{
                f2id: script.ScriptId,
                f2type: 'gamelift.script',
                f2data: script,
                f2region: region,
                name: script.Name,
                scriptid: script.ScriptId,
                version: script.Version
            }]);
        });

        unblockUI('#section-gamedevelopment-gamelift-scripts-datatable');
    });

    await sdkcall("GameLift", "describeGameSessionQueues", {
        // no params
    }, true).then((data) => {
        $('#section-gamedevelopment-gamelift-queues-datatable').deferredBootstrapTable('removeAll');

        data.GameSessionQueues.forEach(queue => {
            $('#section-gamedevelopment-gamelift-queues-datatable').deferredBootstrapTable('append', [{
                f2id: queue.GameSessionQueueArn,
                f2type: 'gamelift.queue',
                f2data: queue,
                f2region: region,
                name: queue.Name,
                timeout: queue.TimeoutInSeconds + " seconds"
            }]);
        });

        unblockUI('#section-gamedevelopment-gamelift-queues-datatable');
    });

    await sdkcall("GameLift", "describeMatchmakingConfigurations", {
        // no params
    }, false).then((data) => {
        $('#section-gamedevelopment-gamelift-matchmakingconfigurations-datatable').deferredBootstrapTable('removeAll');

        data.Configurations.forEach(configuration => {
            $('#section-gamedevelopment-gamelift-matchmakingconfigurations-datatable').deferredBootstrapTable('append', [{
                f2id: configuration.Name,
                f2type: 'gamelift.matchmakingconfiguration',
                f2data: configuration,
                f2region: region,
                name: configuration.Name,
                description: configuration.Description,
                rulesetname: configuration.RuleSetName
            }]);
        });

        unblockUI('#section-gamedevelopment-gamelift-matchmakingconfigurations-datatable');
    }).catch(() => { });

    await sdkcall("GameLift", "describeMatchmakingRuleSets", {
        // no params
    }, false).then((data) => {
        $('#section-gamedevelopment-gamelift-matchmakingrulesets-datatable').deferredBootstrapTable('removeAll');

        data.RuleSets.forEach(ruleset => {
            $('#section-gamedevelopment-gamelift-matchmakingrulesets-datatable').deferredBootstrapTable('append', [{
                f2id: ruleset.RuleSetName,
                f2type: 'gamelift.matchmakingruleset',
                f2data: ruleset,
                f2region: region,
                name: ruleset.RuleSetName,
                creationtime: ruleset.CreationTime
            }]);
        });

        unblockUI('#section-gamedevelopment-gamelift-matchmakingrulesets-datatable');
    }).catch(() => { });

    await sdkcall("GameLift", "listGameServerGroups", {
        // no params
    }, false).then(async (data) => {
        $('#section-gamedevelopment-gamelift-gameservergroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.GameServerGroups.map(async (gameServerGroup) => {
            return sdkcall("GameLift", "describeGameServerGroup", {
                GameServerGroupName: gameServerGroup.GameServerGroupName
            }, false).then((data) => {
                $('#section-gamedevelopment-gamelift-gameservergroups-datatable').deferredBootstrapTable('append', [{
                    f2id: data.GameServerGroup.GameServerGroupArn,
                    f2type: 'gamelift.gameservergroup',
                    f2data: data.GameServerGroup,
                    f2region: region,
                    name: data.GameServerGroup.GameServerGroupName,
                    rolearn: data.GameServerGroup.RoleArn
                }]);
            });
        }));

        unblockUI('#section-gamedevelopment-gamelift-gameservergroups-datatable');
    }).catch(() => { });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "gamelift.fleet") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['BuildId'] = obj.data.BuildId;
        reqParams.tf['build_id'] = obj.data.BuildId;
        reqParams.cfn['ServerLaunchPath'] = obj.data.ServerLaunchPath;
        reqParams.cfn['ServerLaunchParameters'] = obj.data.ServerLaunchParameters;
        reqParams.cfn['LogPaths'] = obj.data.LogPaths;
        reqParams.cfn['EC2InstanceType'] = obj.data.InstanceType;
        reqParams.tf['ec2_instance_type'] = obj.data.InstanceType;
        reqParams.cfn['FleetType'] = obj.data.FleetType;
        reqParams.cfn['ScriptId'] = obj.data.ScriptId;
        reqParams.cfn['NewGameSessionProtectionPolicy'] = obj.data.NewGameSessionProtectionPolicy;
        reqParams.cfn['ResourceCreationLimitPolicy'] = obj.data.ResourceCreationLimitPolicy;
        reqParams.cfn['MetricGroups'] = obj.data.MetricGroups;
        reqParams.cfn['InstanceRoleARN'] = obj.data.InstanceRoleArn;
        reqParams.cfn['CertificateConfiguration'] = obj.data.CertificateConfiguration;
        reqParams.cfn['RuntimeConfiguration'] = obj.data.RuntimeConfiguration;
        if (obj.data.InstanceCounts) {
            reqParams.cfn['DesiredEC2Instances'] = obj.data.InstanceCounts.DESIRED;
            reqParams.cfn['MaxSize'] = obj.data.InstanceCounts.MAXIMUM;
            reqParams.cfn['MinSize'] = obj.data.InstanceCounts.MINIMUM;
        }
        reqParams.cfn['EC2InboundPermissions'] = obj.data.EC2InboundPermissions;

        /*
        TODO:
        PeerVpcAwsAccountId: String
        PeerVpcId: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('gamelift', obj.id, 'AWS::GameLift::Fleet'),
            'region': obj.region,
            'service': 'gamelift',
            'type': 'AWS::GameLift::Fleet',
            'terraformType': 'aws_gamelift_fleet',
            'options': reqParams
        });
    } else if (obj.type == "gamelift.build") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['Version'] = obj.data.Version;
        reqParams.tf['version'] = obj.data.Version;
        reqParams.cfn['OperatingSystem'] = obj.data.OperatingSystem;
        reqParams.cfn['StorageLocation'] = obj.data.StorageLocation;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('gamelift', obj.id, 'AWS::GameLift::Build'),
            'region': obj.region,
            'service': 'gamelift',
            'type': 'AWS::GameLift::Build',
            'terraformType': 'aws_gamelift_build',
            'options': reqParams
        });
    } else if (obj.type == "gamelift.alias") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['RoutingStrategy'] = obj.data.RoutingStrategy;
        reqParams.tf['routing_strategy'] = {
            'message': obj.data.RoutingStrategy.Message,
            'type': obj.data.RoutingStrategy.Type
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('gamelift', obj.id, 'AWS::GameLift::Alias'),
            'region': obj.region,
            'service': 'gamelift',
            'type': 'AWS::GameLift::Alias',
            'terraformType': 'aws_gamelift_alias',
            'options': reqParams
        });
    } else if (obj.type == "gamelift.script") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Version'] = obj.data.Version;
        reqParams.cfn['StorageLocation'] = obj.data.StorageLocation;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('gamelift', obj.id, 'AWS::GameLift::Script'),
            'region': obj.region,
            'service': 'gamelift',
            'type': 'AWS::GameLift::Script',
            'options': reqParams
        });
    } else if (obj.type == "gamelift.queue") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['TimeoutInSeconds'] = obj.data.TimeoutInSeconds;
        reqParams.cfn['Destinations'] = obj.data.Destinations;
        reqParams.cfn['PlayerLatencyPolicies'] = obj.data.PlayerLatencyPolicies;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('gamelift', obj.id, 'AWS::GameLift::GameSessionQueue'),
            'region': obj.region,
            'service': 'gamelift',
            'type': 'AWS::GameLift::GameSessionQueue',
            'options': reqParams
        });
    } else if (obj.type == "gamelift.matchmakingconfiguration") {
        reqParams.cfn['AcceptanceRequired'] = obj.data.AcceptanceRequired;
        reqParams.cfn['AcceptanceTimeoutSeconds'] = obj.data.AcceptanceTimeoutSeconds;
        reqParams.cfn['AdditionalPlayerCount'] = obj.data.AdditionalPlayerCount;
        reqParams.cfn['BackfillMode'] = obj.data.BackfillMode;
        reqParams.cfn['CustomEventData'] = obj.data.CustomEventData;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['GameProperties'] = obj.data.GameProperties;
        reqParams.cfn['GameSessionData'] = obj.data.GameSessionData;
        reqParams.cfn['GameSessionQueueArns'] = obj.data.GameSessionQueueArns;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['NotificationTarget'] = obj.data.NotificationTarget;
        reqParams.cfn['RequestTimeoutSeconds'] = obj.data.RequestTimeoutSeconds;
        reqParams.cfn['RuleSetName'] = obj.data.RuleSetName;
        reqParams.cfn['FlexMatchMode'] = obj.data.FlexMatchMode;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('gamelift', obj.id, 'AWS::GameLift::MatchmakingConfiguration'),
            'region': obj.region,
            'service': 'gamelift',
            'type': 'AWS::GameLift::MatchmakingConfiguration',
            'options': reqParams
        });
    } else if (obj.type == "gamelift.matchmakingruleset") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['RuleSetBody'] = obj.data.RuleSetBody;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('gamelift', obj.id, 'AWS::GameLift::MatchmakingRuleSet'),
            'region': obj.region,
            'service': 'gamelift',
            'type': 'AWS::GameLift::MatchmakingRuleSet',
            'options': reqParams
        });
    } else if (obj.type == "gamelift.gameservergroup") {
        reqParams.cfn['GameServerGroupName'] = obj.data.GameServerGroupName;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['InstanceDefinitions'] = obj.data.InstanceDefinitions;
        reqParams.cfn['BalancingStrategy'] = obj.data.BalancingStrategy;
        reqParams.cfn['GameServerProtectionPolicy'] = obj.data.GameServerProtectionPolicy;

        /*
        TODO:
        AutoScalingPolicy: 
            AutoScalingPolicy
        DeleteOption: String
        LaunchTemplate: 
            LaunchTemplate
        MaxSize: Double
        MinSize: Double
        Tags: 
            Tags
        VpcSubnets: 
            VpcSubnets
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('gamelift', obj.id, 'AWS::GameLift::GameServerGroup'),
            'region': obj.region,
            'service': 'gamelift',
            'type': 'AWS::GameLift::GameServerGroup',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
