/* ========================================================================== */
// IoT Greengrass
/* ========================================================================== */

sections.push({
    'category': 'Internet of Things',
    'service': 'Greengrass',
    'resourcetypes': {
        'Groups': {
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
                        field: 'latestversion',
                        title: 'Latest Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Group Versions': {
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
                        title: 'ID',
                        field: 'id',
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
                    },
                    {
                        field: 'groupid',
                        title: 'Group ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Connector Definitions': {
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
                        field: 'latestversion',
                        title: 'Latest Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Connector Definition Versions': {
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
                        title: 'ID',
                        field: 'id',
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
                    },
                    {
                        field: 'definitionid',
                        title: 'Definition ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Core Definitions': {
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
                        field: 'latestversion',
                        title: 'Latest Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Core Definition Versions': {
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
                        title: 'ID',
                        field: 'id',
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
                    },
                    {
                        field: 'definitionid',
                        title: 'Definition ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Device Definitions': {
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
                        field: 'latestversion',
                        title: 'Latest Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Device Definition Versions': {
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
                        title: 'ID',
                        field: 'id',
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
                    },
                    {
                        field: 'definitionid',
                        title: 'Definition ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Function Definitions': {
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
                        field: 'latestversion',
                        title: 'Latest Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Function Definition Versions': {
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
                        title: 'ID',
                        field: 'id',
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
                    },
                    {
                        field: 'definitionid',
                        title: 'Definition ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Logger Definitions': {
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
                        field: 'latestversion',
                        title: 'Latest Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Logger Definition Versions': {
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
                        title: 'ID',
                        field: 'id',
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
                    },
                    {
                        field: 'definitionid',
                        title: 'Definition ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Resource Definitions': {
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
                        field: 'latestversion',
                        title: 'Latest Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Resource Definition Versions': {
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
                        title: 'ID',
                        field: 'id',
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
                    },
                    {
                        field: 'definitionid',
                        title: 'Definition ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Subscription Definitions': {
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
                        field: 'latestversion',
                        title: 'Latest Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Subscription Definition Versions': {
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
                        title: 'ID',
                        field: 'id',
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
                    },
                    {
                        field: 'definitionid',
                        title: 'Definition ID',
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

async function updateDatatableInternetofThingsGreengrass() {
    blockUI('#section-internetofthings-greengrass-connectordefinitions-datatable');
    blockUI('#section-internetofthings-greengrass-connectordefinitionversions-datatable');
    blockUI('#section-internetofthings-greengrass-coredefinitions-datatable');
    blockUI('#section-internetofthings-greengrass-coredefinitionversions-datatable');
    blockUI('#section-internetofthings-greengrass-devicedefinitions-datatable');
    blockUI('#section-internetofthings-greengrass-devicedefinitionversions-datatable');
    blockUI('#section-internetofthings-greengrass-functiondefinitions-datatable');
    blockUI('#section-internetofthings-greengrass-functiondefinitionversions-datatable');
    blockUI('#section-internetofthings-greengrass-groups-datatable');
    blockUI('#section-internetofthings-greengrass-groupversions-datatable');
    blockUI('#section-internetofthings-greengrass-loggerdefinitions-datatable');
    blockUI('#section-internetofthings-greengrass-loggerdefinitionversions-datatable');
    blockUI('#section-internetofthings-greengrass-resourcedefinitions-datatable');
    blockUI('#section-internetofthings-greengrass-resourcedefinitionversions-datatable');
    blockUI('#section-internetofthings-greengrass-subscriptiondefinitions-datatable');
    blockUI('#section-internetofthings-greengrass-subscriptiondefinitionversions-datatable');

    await sdkcall("Greengrass", "listConnectorDefinitions", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-greengrass-connectordefinitions-datatable').bootstrapTable('removeAll');
        $('#section-internetofthings-greengrass-connectordefinitionversions-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Definitions.map(definition => {
            return Promise.all([
                sdkcall("Greengrass", "listConnectorDefinitionVersions", {
                    ConnectorDefinitionId: definition.Id
                }, true).then((data) => {
                    data.Versions.forEach(version => {
                        sdkcall("Greengrass", "getConnectorDefinitionVersion", {
                            ConnectorDefinitionId: definition.Id,
                            ConnectorDefinitionVersionId: version.Id
                        }, true).then((data) => {
                            data['ConnectorDefinitionId'] = definition.Id;
                            $('#section-internetofthings-greengrass-connectordefinitionversions-datatable').bootstrapTable('append', [{
                                f2id: data.Arn,
                                f2type: 'greengrass.connectordefinitionversion',
                                f2data: data,
                                f2region: region,
                                id: data.Id,
                                version: data.Version,
                                definitionid: definition.Id
                            }]);
                        });
                    });
                }),
                sdkcall("Greengrass", "getConnectorDefinition", {
                    ConnectorDefinitionId: definition.Id
                }, true).then((data) => {
                    $('#section-internetofthings-greengrass-connectordefinitions-datatable').bootstrapTable('append', [{
                        f2id: definition.Arn,
                        f2type: 'greengrass.connectordefinition',
                        f2data: definition,
                        f2region: region,
                        id: definition.Id,
                        name: definition.Name,
                        latestversion: definition.LatestVersion
                    }]);
                })
            ]);
        }));

        unblockUI('#section-internetofthings-greengrass-connectordefinitions-datatable');
        unblockUI('#section-internetofthings-greengrass-connectordefinitionversions-datatable');
    });

    await sdkcall("Greengrass", "listCoreDefinitions", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-greengrass-coredefinitions-datatable').bootstrapTable('removeAll');
        $('#section-internetofthings-greengrass-coredefinitionversions-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Definitions.map(definition => {
            return Promise.all([
                sdkcall("Greengrass", "listCoreDefinitionVersions", {
                    CoreDefinitionId: definition.Id
                }, true).then(async (data) => {
                    await Promise.all(data.Versions.map(version => {
                        return sdkcall("Greengrass", "getCoreDefinitionVersion", {
                            CoreDefinitionId: definition.Id,
                            CoreDefinitionVersionId: version.Id
                        }, false).then((data) => {
                            data['CoreDefinitionId'] = definition.Id;
                            $('#section-internetofthings-greengrass-coredefinitionversions-datatable').bootstrapTable('append', [{
                                f2id: data.Arn,
                                f2type: 'greengrass.coredefinitionversion',
                                f2data: data,
                                f2region: region,
                                id: data.Id,
                                version: data.Version,
                                definitionid: definition.Id
                            }]);
                        }).catch(() => { });
                    }));
                }),
                sdkcall("Greengrass", "getCoreDefinition", {
                    CoreDefinitionId: definition.Id
                }, true).then((data) => {
                    $('#section-internetofthings-greengrass-coredefinitions-datatable').bootstrapTable('append', [{
                        f2id: definition.Arn,
                        f2type: 'greengrass.coredefinition',
                        f2data: definition,
                        f2region: region,
                        id: definition.Id,
                        name: definition.Name,
                        latestversion: definition.LatestVersion
                    }]);
                })
            ]);
        }));

        unblockUI('#section-internetofthings-greengrass-coredefinitions-datatable');
        unblockUI('#section-internetofthings-greengrass-coredefinitionversions-datatable');
    });

    await sdkcall("Greengrass", "listDeviceDefinitions", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-greengrass-devicedefinitions-datatable').bootstrapTable('removeAll');
        $('#section-internetofthings-greengrass-devicedefinitionversions-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Definitions.map(definition => {
            return Promise.all([
                sdkcall("Greengrass", "listDeviceDefinitionVersions", {
                    DeviceDefinitionId: definition.Id
                }, true).then(async (data) => {
                    await Promise.all(data.Versions.map(version => {
                        return sdkcall("Greengrass", "getDeviceDefinitionVersion", {
                            DeviceDefinitionId: definition.Id,
                            DeviceDefinitionVersionId: version.Id
                        }, false).then((data) => {
                            data['DeviceDefinitionId'] = definition.Id;
                            $('#section-internetofthings-greengrass-devicedefinitionversions-datatable').bootstrapTable('append', [{
                                f2id: data.Arn,
                                f2type: 'greengrass.devicedefinitionversion',
                                f2data: data,
                                f2region: region,
                                id: data.Id,
                                version: data.Version,
                                definitionid: definition.Id
                            }]);
                        }).catch(() => { });
                    }));
                }),
                sdkcall("Greengrass", "getDeviceDefinition", {
                    DeviceDefinitionId: definition.Id
                }, true).then((data) => {
                    $('#section-internetofthings-greengrass-devicedefinitions-datatable').bootstrapTable('append', [{
                        f2id: definition.Arn,
                        f2type: 'greengrass.devicedefinition',
                        f2data: definition,
                        f2region: region,
                        id: definition.Id,
                        name: definition.Name,
                        latestversion: definition.LatestVersion
                    }]);
                })
            ]);
        }));

        unblockUI('#section-internetofthings-greengrass-devicedefinitions-datatable');
        unblockUI('#section-internetofthings-greengrass-devicedefinitionversions-datatable');
    });

    await sdkcall("Greengrass", "listFunctionDefinitions", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-greengrass-functiondefinitions-datatable').bootstrapTable('removeAll');
        $('#section-internetofthings-greengrass-functiondefinitionversions-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Definitions.map(definition => {
            return Promise.all([
                sdkcall("Greengrass", "listFunctionDefinitionVersions", {
                    FunctionDefinitionId: definition.Id
                }, true).then(async (data) => {
                    await Promise.all(data.Versions.map(version => {
                        return sdkcall("Greengrass", "getFunctionDefinitionVersion", {
                            FunctionDefinitionId: definition.Id,
                            FunctionDefinitionVersionId: version.Id
                        }, false).then((data) => {
                            data['FunctionDefinitionId'] = definition.Id;
                            $('#section-internetofthings-greengrass-functiondefinitionversions-datatable').bootstrapTable('append', [{
                                f2id: data.Arn,
                                f2type: 'greengrass.functiondefinitionversion',
                                f2data: data,
                                f2region: region,
                                id: data.Id,
                                version: data.Version,
                                definitionid: definition.Id
                            }]);
                        }).catch(() => { });
                    }));
                }),
                sdkcall("Greengrass", "getFunctionDefinition", {
                    FunctionDefinitionId: definition.Id
                }, true).then((data) => {
                    $('#section-internetofthings-greengrass-functiondefinitions-datatable').bootstrapTable('append', [{
                        f2id: definition.Arn,
                        f2type: 'greengrass.functiondefinition',
                        f2data: definition,
                        f2region: region,
                        id: definition.Id,
                        name: definition.Name,
                        latestversion: definition.LatestVersion
                    }]);
                })
            ]);
        }));

        unblockUI('#section-internetofthings-greengrass-functiondefinitions-datatable');
        unblockUI('#section-internetofthings-greengrass-functiondefinitionversions-datatable');
    });

    await sdkcall("Greengrass", "listGroups", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-greengrass-groups-datatable').bootstrapTable('removeAll');
        $('#section-internetofthings-greengrass-groupversions-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Groups.map(group => {
            return Promise.all([
                sdkcall("Greengrass", "listGroupVersions", {
                    GroupId: group.Id
                }, true).then(async (data) => {
                    await Promise.all(data.Versions.map(version => {
                        return sdkcall("Greengrass", "getGroupVersion", {
                            GroupId: group.Id,
                            GroupVersionId: version.Id
                        }, false).then((data) => {
                            data['GroupId'] = group.Id;
                            $('#section-internetofthings-greengrass-groupversions-datatable').bootstrapTable('append', [{
                                f2id: data.Arn,
                                f2type: 'greengrass.groupversion',
                                f2data: data,
                                f2region: region,
                                id: data.Id,
                                version: data.Version,
                                groupid: group.Id
                            }]);
                        }).catch(() => { });
                    }));
                }),
                sdkcall("Greengrass", "getGroup", {
                    GroupId: group.Id
                }, true).then((data) => {
                    $('#section-internetofthings-greengrass-groups-datatable').bootstrapTable('append', [{
                        f2id: group.Arn,
                        f2type: 'greengrass.group',
                        f2data: group,
                        f2region: region,
                        id: group.Id,
                        name: group.Name,
                        latestversion: group.LatestVersion
                    }]);
                })
            ]);
        }));

        unblockUI('#section-internetofthings-greengrass-groups-datatable');
        unblockUI('#section-internetofthings-greengrass-groupversions-datatable');
    });

    await sdkcall("Greengrass", "listLoggerDefinitions", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-greengrass-loggerdefinitions-datatable').bootstrapTable('removeAll');
        $('#section-internetofthings-greengrass-loggerdefinitionversions-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Definitions.map(definition => {
            return Promise.all([
                sdkcall("Greengrass", "listLoggerDefinitionVersions", {
                    LoggerDefinitionId: definition.Id
                }, true).then(async (data) => {
                    await Promise.all(data.Versions.map(version => {
                        return sdkcall("Greengrass", "getLoggerDefinitionVersion", {
                            LoggerDefinitionId: definition.Id,
                            LoggerDefinitionVersionId: version.Id
                        }, true).then((data) => {
                            data['LoggerDefinitionId'] = definition.Id;
                            $('#section-internetofthings-greengrass-loggerdefinitionversions-datatable').bootstrapTable('append', [{
                                f2id: data.Arn,
                                f2type: 'greengrass.loggerdefinitionversion',
                                f2data: data,
                                f2region: region,
                                id: data.Id,
                                version: data.Version,
                                definitionid: definition.Id
                            }]);
                        });
                    }));
                }),
                sdkcall("Greengrass", "getLoggerDefinition", {
                    LoggerDefinitionId: definition.Id
                }, true).then((data) => {
                    $('#section-internetofthings-greengrass-loggerdefinitions-datatable').bootstrapTable('append', [{
                        f2id: definition.Arn,
                        f2type: 'greengrass.loggerdefinition',
                        f2data: definition,
                        f2region: region,
                        id: definition.Id,
                        name: definition.Name,
                        latestversion: definition.LatestVersion
                    }]);
                })
            ]);
        }));

        unblockUI('#section-internetofthings-greengrass-loggerdefinitions-datatable');
        unblockUI('#section-internetofthings-greengrass-loggerdefinitionversions-datatable');
    });

    await sdkcall("Greengrass", "listResourceDefinitions", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-greengrass-resourcedefinitions-datatable').bootstrapTable('removeAll');
        $('#section-internetofthings-greengrass-resourcedefinitionversions-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Definitions.map(definition => {
            return Promise.all([
                sdkcall("Greengrass", "listResourceDefinitionVersions", {
                    ResourceDefinitionId: definition.Id
                }, true).then(async (data) => {
                    await Promise.all(data.Versions.map(version => {
                        return sdkcall("Greengrass", "getResourceDefinitionVersion", {
                            ResourceDefinitionId: definition.Id,
                            ResourceDefinitionVersionId: version.Version
                        }, true).then((data) => {
                            data['ResourceDefinitionId'] = definition.Id;
                            $('#section-internetofthings-greengrass-resourcedefinitionversions-datatable').bootstrapTable('append', [{
                                f2id: data.Arn,
                                f2type: 'greengrass.resourcedefinitionversion',
                                f2data: data,
                                f2region: region,
                                id: data.Id,
                                version: data.Version,
                                definitionid: definition.Id
                            }]);
                        });
                    }));
                }),
                sdkcall("Greengrass", "getResourceDefinition", {
                    ResourceDefinitionId: definition.Id
                }, true).then((data) => {
                    $('#section-internetofthings-greengrass-resourcedefinitions-datatable').bootstrapTable('append', [{
                        f2id: definition.Arn,
                        f2type: 'greengrass.resourcedefinition',
                        f2data: definition,
                        f2region: region,
                        id: definition.Id,
                        name: definition.Name,
                        latestversion: definition.LatestVersion
                    }]);
                })
            ]);
        }));

        unblockUI('#section-internetofthings-greengrass-resourcedefinitions-datatable');
        unblockUI('#section-internetofthings-greengrass-resourcedefinitionversions-datatable');
    });

    await sdkcall("Greengrass", "listSubscriptionDefinitions", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-greengrass-subscriptiondefinitions-datatable').bootstrapTable('removeAll');
        $('#section-internetofthings-greengrass-subscriptiondefinitionversions-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Definitions.map(definition => {
            return Promise.all([
                sdkcall("Greengrass", "listSubscriptionDefinitionVersions", {
                    SubscriptionDefinitionId: definition.Id
                }, true).then(async (data) => {
                    await Promise.all(data.Versions.map(version => {
                        return sdkcall("Greengrass", "getSubscriptionDefinitionVersion", {
                            SubscriptionDefinitionId: definition.Id,
                            SubscriptionDefinitionVersionId: version.Version
                        }, true).then((data) => {
                            data['SubscriptionDefinitionId'] = definition.Id;
                            $('#section-internetofthings-greengrass-subscriptiondefinitionversions-datatable').bootstrapTable('append', [{
                                f2id: data.Arn,
                                f2type: 'greengrass.subscriptiondefinitionversion',
                                f2data: data,
                                f2region: region,
                                id: data.Id,
                                version: data.Version,
                                definitionid: definition.Id
                            }]);
                        });
                    }));
                }),
                sdkcall("Greengrass", "getSubscriptionDefinition", {
                    SubscriptionDefinitionId: definition.Id
                }, true).then((data) => {
                    $('#section-internetofthings-greengrass-subscriptiondefinitions-datatable').bootstrapTable('append', [{
                        f2id: definition.Arn,
                        f2type: 'greengrass.subscriptiondefinition',
                        f2data: definition,
                        f2region: region,
                        id: definition.Id,
                        name: definition.Name,
                        latestversion: definition.LatestVersion
                    }]);
                })
            ]);
        }));

        unblockUI('#section-internetofthings-greengrass-subscriptiondefinitions-datatable');
        unblockUI('#section-internetofthings-greengrass-subscriptiondefinitionversions-datatable');
    });
}
