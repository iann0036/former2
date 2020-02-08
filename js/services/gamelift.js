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

    await sdkcall("GameLift", "listFleets", {
        // no params
    }, true).then(async (data) => {
        $('#section-gamedevelopment-gamelift-fleets-datatable').bootstrapTable('removeAll');

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

                $('#section-gamedevelopment-gamelift-fleets-datatable').bootstrapTable('append', [{
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
        $('#section-gamedevelopment-gamelift-builds-datatable').bootstrapTable('removeAll');

        data.Builds.forEach(async (build) => {
            await sdkcall("GameLift", "requestUploadCredentials", {
                BuildId: build.BuildId
            }, false).then((data) => {
                build['StorageLocation'] = data['StorageLocation'];
            }).catch(() => { });

            $('#section-gamedevelopment-gamelift-builds-datatable').bootstrapTable('append', [{
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
        $('#section-gamedevelopment-gamelift-aliases-datatable').bootstrapTable('removeAll');

        data.Aliases.forEach(alias => {
            $('#section-gamedevelopment-gamelift-aliases-datatable').bootstrapTable('append', [{
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
        $('#section-gamedevelopment-gamelift-scripts-datatable').bootstrapTable('removeAll');

        data.Scripts.forEach(script => {
            $('#section-gamedevelopment-gamelift-scripts-datatable').bootstrapTable('append', [{
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
        $('#section-gamedevelopment-gamelift-queues-datatable').bootstrapTable('removeAll');

        data.GameSessionQueues.forEach(queue => {
            $('#section-gamedevelopment-gamelift-queues-datatable').bootstrapTable('append', [{
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
        $('#section-gamedevelopment-gamelift-matchmakingconfigurations-datatable').bootstrapTable('removeAll');

        data.Configurations.forEach(configuration => {
            $('#section-gamedevelopment-gamelift-matchmakingconfigurations-datatable').bootstrapTable('append', [{
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
        $('#section-gamedevelopment-gamelift-matchmakingrulesets-datatable').bootstrapTable('removeAll');

        data.RuleSets.forEach(ruleset => {
            $('#section-gamedevelopment-gamelift-matchmakingrulesets-datatable').bootstrapTable('append', [{
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
}
