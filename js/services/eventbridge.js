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

    await sdkcall("EventBridge", "listRules", {
        // no params
    }, true).then(async (data) => {
        $('#section-applicationintegration-eventbridge-rules-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Rules.map(rule => {
            return sdkcall("EventBridge", "describeRule", {
                Name: rule.Name
            }, true).then(async (data) => {
                await sdkcall("EventBridge", "listTargetsByRule", {
                    Rule: data.Name
                }, true).then((targets) => {
                    data['Targets'] = targets.Targets;
                    $('#section-applicationintegration-eventbridge-rules-datatable').bootstrapTable('append', [{
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
        $('#section-applicationintegration-eventbridge-eventbuses-datatable').bootstrapTable('removeAll');
        $('#section-applicationintegration-eventbridge-eventbuspolicies-datatable').bootstrapTable('removeAll');

        await Promise.all(data.EventBuses.map(async (eventBus) => {
            return sdkcall("EventBridge", "describeEventBus", {
                Name: eventBus.Name
            }, true).then(async (data) => {
                if (data.Name != "default") {
                    $('#section-applicationintegration-eventbridge-eventbuses-datatable').bootstrapTable('append', [{
                        f2id: data.Arn,
                        f2type: 'eventbridge.eventbus',
                        f2data: data,
                        f2region: region,
                        f2link: 'https://console.aws.amazon.com/events/home?region=' + region + '#/eventbus/' + data.Name,
                        name: data.Name
                    }]);
                }

                var policyobj = JSON.parse(data.Policy);

                policyobj.Statement.forEach(statement => {
                    if (data.Name != "default") {
                        statement["EventBusName"] = data.Name;
                    }

                    $('#section-applicationintegration-eventbridge-eventbuspolicies-datatable').bootstrapTable('append', [{
                        f2id: data.Arn,
                        f2type: 'eventbridge.eventbuspolicy',
                        f2data: statement,
                        f2region: region,
                        name: data.Name // TODO: much better datatable keys
                    }]);
                });
            });
        }));
    });

    await sdkcall("Schemas", "listRegistries", {
        // no params
    }, false).then(async (data) => {
        $('#section-applicationintegration-eventbridge-schemas-datatable').bootstrapTable('removeAll');
        $('#section-applicationintegration-eventbridge-schemaregistries-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Registries.map(async (registry) => {
            if (registry.RegistryName.startsWith("aws.")) {
                return Promise.resolve();
            }

            return Promise.all([
                sdkcall("Schemas", "describeRegistry", {
                    RegistryName: registry.RegistryName
                }, true).then(async (data) => {
                    $('#section-applicationintegration-eventbridge-schemaregistries-datatable').bootstrapTable('append', [{
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
                    $('#section-applicationintegration-eventbridge-schemas-datatable').bootstrapTable('removeAll');

                    await Promise.all(data.Schemas.map(async (schema) => {
                        return sdkcall("Schemas", "describeSchema", {
                            RegistryName: registry.RegistryName,
                            SchemaName: schema.SchemaName
                        }, true).then(async (data) => {
                            data['RegistryName'] = registry.RegistryName;

                            $('#section-applicationintegration-eventbridge-schemas-datatable').bootstrapTable('append', [{
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
                })
            ]);
        }));
    }).catch(() => { });

    await sdkcall("Schemas", "listDiscoverers", {
        // no params
    }, false).then(async (data) => {
        $('#section-applicationintegration-eventbridge-schemadiscoverers-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Discoverers.map(async (discoverer) => {
            return sdkcall("Schemas", "describeDiscoverer", {
                DiscovererId: discoverer.DiscovererId
            }, true).then(async (data) => {
                $('#section-applicationintegration-eventbridge-schemadiscoverers-datatable').bootstrapTable('append', [{
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

    unblockUI('#section-applicationintegration-eventbridge-rules-datatable');
    unblockUI('#section-applicationintegration-eventbridge-eventbuses-datatable');
    unblockUI('#section-applicationintegration-eventbridge-eventbuspolicies-datatable');
    unblockUI('#section-applicationintegration-eventbridge-schemas-datatable');
    unblockUI('#section-applicationintegration-eventbridge-schemaregistries-datatable');
    unblockUI('#section-applicationintegration-eventbridge-schemadiscoverers-datatable');
}
