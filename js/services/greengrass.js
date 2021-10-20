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
        },
        'V2 Component Versions': {
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
    blockUI('#section-internetofthings-greengrass-v2componentversions-datatable');

    if (["us-east-1", "us-east-2", "us-west-2", "ap-south-1", "ap-northeast-2", "ap-southeast-1", "ap-southeast-2", "ap-northeast-1", "eu-central-1", "eu-west-1", "eu-west-2", "us-gov-east-1", "us-gov-west-1"].includes(region)) { // has to be whitelisted otherwise it hangs on the API call
        await sdkcall("Greengrass", "listConnectorDefinitions", {
            // no params
        }, true).then(async (data) => {
            $('#section-internetofthings-greengrass-connectordefinitions-datatable').deferredBootstrapTable('removeAll');
            $('#section-internetofthings-greengrass-connectordefinitionversions-datatable').deferredBootstrapTable('removeAll');

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
                                $('#section-internetofthings-greengrass-connectordefinitionversions-datatable').deferredBootstrapTable('append', [{
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
                        $('#section-internetofthings-greengrass-connectordefinitions-datatable').deferredBootstrapTable('append', [{
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
            $('#section-internetofthings-greengrass-coredefinitions-datatable').deferredBootstrapTable('removeAll');
            $('#section-internetofthings-greengrass-coredefinitionversions-datatable').deferredBootstrapTable('removeAll');

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
                                $('#section-internetofthings-greengrass-coredefinitionversions-datatable').deferredBootstrapTable('append', [{
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
                        $('#section-internetofthings-greengrass-coredefinitions-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Arn,
                            f2type: 'greengrass.coredefinition',
                            f2data: data,
                            f2region: region,
                            id: data.Id,
                            name: data.Name,
                            latestversion: data.LatestVersion
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
            $('#section-internetofthings-greengrass-devicedefinitions-datatable').deferredBootstrapTable('removeAll');
            $('#section-internetofthings-greengrass-devicedefinitionversions-datatable').deferredBootstrapTable('removeAll');

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
                                $('#section-internetofthings-greengrass-devicedefinitionversions-datatable').deferredBootstrapTable('append', [{
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
                        $('#section-internetofthings-greengrass-devicedefinitions-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Arn,
                            f2type: 'greengrass.devicedefinition',
                            f2data: data,
                            f2region: region,
                            id: data.Id,
                            name: data.Name,
                            latestversion: data.LatestVersion
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
            $('#section-internetofthings-greengrass-functiondefinitions-datatable').deferredBootstrapTable('removeAll');
            $('#section-internetofthings-greengrass-functiondefinitionversions-datatable').deferredBootstrapTable('removeAll');

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
                                $('#section-internetofthings-greengrass-functiondefinitionversions-datatable').deferredBootstrapTable('append', [{
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
                        $('#section-internetofthings-greengrass-functiondefinitions-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Arn,
                            f2type: 'greengrass.functiondefinition',
                            f2data: data,
                            f2region: region,
                            id: data.Id,
                            name: data.Name,
                            latestversion: data.LatestVersion
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
            $('#section-internetofthings-greengrass-groups-datatable').deferredBootstrapTable('removeAll');
            $('#section-internetofthings-greengrass-groupversions-datatable').deferredBootstrapTable('removeAll');

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
                                $('#section-internetofthings-greengrass-groupversions-datatable').deferredBootstrapTable('append', [{
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
                        $('#section-internetofthings-greengrass-groups-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Arn,
                            f2type: 'greengrass.group',
                            f2data: data,
                            f2region: region,
                            id: data.Id,
                            name: data.Name,
                            latestversion: data.LatestVersion
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
            $('#section-internetofthings-greengrass-loggerdefinitions-datatable').deferredBootstrapTable('removeAll');
            $('#section-internetofthings-greengrass-loggerdefinitionversions-datatable').deferredBootstrapTable('removeAll');

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
                                $('#section-internetofthings-greengrass-loggerdefinitionversions-datatable').deferredBootstrapTable('append', [{
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
                        $('#section-internetofthings-greengrass-loggerdefinitions-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Arn,
                            f2type: 'greengrass.loggerdefinition',
                            f2data: data,
                            f2region: region,
                            id: data.Id,
                            name: data.Name,
                            latestversion: data.LatestVersion
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
            $('#section-internetofthings-greengrass-resourcedefinitions-datatable').deferredBootstrapTable('removeAll');
            $('#section-internetofthings-greengrass-resourcedefinitionversions-datatable').deferredBootstrapTable('removeAll');

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
                                $('#section-internetofthings-greengrass-resourcedefinitionversions-datatable').deferredBootstrapTable('append', [{
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
                    }, true).then(async (data) => {
                        await sdkcall("Greengrass", "getResourceDefinitionVersion", {
                            ResourceDefinitionId: definition.Id,
                            ResourceDefinitionVersionId: definition.LatestVersion
                        }, true).then(async (versiondata) => {
                            data['Definition'] = versiondata['Definition'];

                            $('#section-internetofthings-greengrass-resourcedefinitions-datatable').deferredBootstrapTable('append', [{
                                f2id: data.Arn,
                                f2type: 'greengrass.resourcedefinition',
                                f2data: data,
                                f2region: region,
                                id: data.Id,
                                name: data.Name,
                                latestversion: data.LatestVersion
                            }]);
                        });
                    })
                ]);
            }));

            unblockUI('#section-internetofthings-greengrass-resourcedefinitions-datatable');
            unblockUI('#section-internetofthings-greengrass-resourcedefinitionversions-datatable');
        });

        await sdkcall("Greengrass", "listSubscriptionDefinitions", {
            // no params
        }, true).then(async (data) => {
            $('#section-internetofthings-greengrass-subscriptiondefinitions-datatable').deferredBootstrapTable('removeAll');
            $('#section-internetofthings-greengrass-subscriptiondefinitionversions-datatable').deferredBootstrapTable('removeAll');

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
                                $('#section-internetofthings-greengrass-subscriptiondefinitionversions-datatable').deferredBootstrapTable('append', [{
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
                        $('#section-internetofthings-greengrass-subscriptiondefinitions-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Arn,
                            f2type: 'greengrass.subscriptiondefinition',
                            f2data: data,
                            f2region: region,
                            id: data.Id,
                            name: data.Name,
                            latestversion: data.LatestVersion
                        }]);
                    })
                ]);
            }));

            unblockUI('#section-internetofthings-greengrass-subscriptiondefinitions-datatable');
            unblockUI('#section-internetofthings-greengrass-subscriptiondefinitionversions-datatable');
        });

        await sdkcall("GreengrassV2", "listComponents", {
            scope: "PRIVATE"
        }, true).then(async (data) => {
            $('#section-internetofthings-greengrass-v2componentversions-datatable').deferredBootstrapTable('removeAll');

            await Promise.all(data.components.map(component => {
                return sdkcall("GreengrassV2", "listComponentVersions", {
                    arn: component.arn
                }, true).then(async (data) => {
                    await Promise.all(data.componentVersions.map(componentVersion => {
                        return sdkcall("GreengrassV2", "getComponent", {
                            arn: componentVersion.arn,
                            recipeOutputFormat: "YAML"
                        }, true).then((data) => {
                            data['componentName'] = componentVersion.componentName;
                            data['componentVersion'] = componentVersion.componentVersion;
                            data['arn'] = componentVersion.arn;

                            $('#section-internetofthings-greengrass-v2componentversions-datatable').deferredBootstrapTable('append', [{
                                f2id: componentVersion.arn,
                                f2type: 'greengrass.v2componentversion',
                                f2data: data,
                                f2region: region,
                                name: componentVersion.componentName,
                                version: componentVersion.componentVersion
                            }]);
                        });
                    }));
                });
            }));

            unblockUI('#section-internetofthings-greengrass-v2componentversions-datatable');
        }).catch(() => { });
    }
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "greengrass.connectordefinition") {
        reqParams.cfn['Name'] = obj.data.Name;

        /*
        TODO:
        InitialVersion
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('greengrass', obj.id, 'AWS::Greengrass::ConnectorDefinition'),
            'region': obj.region,
            'service': 'greengrass',
            'type': 'AWS::Greengrass::ConnectorDefinition',
            'options': reqParams
        });
    } else if (obj.type == "greengrass.connectordefinitionversion") {
        reqParams.cfn['ConnectorDefinitionId'] = obj.data.ConnectorDefinitionId;
        reqParams.cfn['Connectors'] = obj.data.Definition.Connectors;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('greengrass', obj.id, 'AWS::Greengrass::ConnectorDefinitionVersion'),
            'region': obj.region,
            'service': 'greengrass',
            'type': 'AWS::Greengrass::ConnectorDefinitionVersion',
            'options': reqParams
        });
    } else if (obj.type == "greengrass.coredefinition") {
        reqParams.cfn['Name'] = obj.data.Name;

        /*
        TODO:
        InitialVersion
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('greengrass', obj.id, 'AWS::Greengrass::CoreDefinition'),
            'region': obj.region,
            'service': 'greengrass',
            'type': 'AWS::Greengrass::CoreDefinition',
            'options': reqParams
        });
    } else if (obj.type == "greengrass.coredefinitionversion") {
        reqParams.cfn['CoreDefinitionId'] = obj.data.CoreDefinitionId;
        reqParams.cfn['Cores'] = obj.data.Definition.Cores;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('greengrass', obj.id, 'AWS::Greengrass::CoreDefinitionVersion'),
            'region': obj.region,
            'service': 'greengrass',
            'type': 'AWS::Greengrass::CoreDefinitionVersion',
            'options': reqParams
        });
    } else if (obj.type == "greengrass.devicedefinition") {
        reqParams.cfn['Name'] = obj.data.Name;

        /*
        TODO:
        InitialVersion
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('greengrass', obj.id, 'AWS::Greengrass::DeviceDefinition'),
            'region': obj.region,
            'service': 'greengrass',
            'type': 'AWS::Greengrass::DeviceDefinition',
            'options': reqParams
        });
    } else if (obj.type == "greengrass.devicedefinitionversion") {
        reqParams.cfn['DeviceDefinitionId'] = obj.data.DeviceDefinitionId;
        reqParams.cfn['Devices'] = obj.data.Definition.Devices;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('greengrass', obj.id, 'AWS::Greengrass::DeviceDefinitionVersion'),
            'region': obj.region,
            'service': 'greengrass',
            'type': 'AWS::Greengrass::DeviceDefinitionVersion',
            'options': reqParams
        });
    } else if (obj.type == "greengrass.functiondefinition") {
        reqParams.cfn['Name'] = obj.data.Name;

        /*
        TODO:
        InitialVersion
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('greengrass', obj.id, 'AWS::Greengrass::FunctionDefinition'),
            'region': obj.region,
            'service': 'greengrass',
            'type': 'AWS::Greengrass::FunctionDefinition',
            'options': reqParams
        });
    } else if (obj.type == "greengrass.functiondefinitionversion") {
        reqParams.cfn['DefaultConfig'] = obj.data.DefaultConfig;
        reqParams.cfn['FunctionDefinitionId'] = obj.data.FunctionDefinitionId;
        reqParams.cfn['Functions'] = obj.data.Definition.Functions;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('greengrass', obj.id, 'AWS::Greengrass::FunctionDefinitionVersion'),
            'region': obj.region,
            'service': 'greengrass',
            'type': 'AWS::Greengrass::FunctionDefinitionVersion',
            'options': reqParams
        });
    } else if (obj.type == "greengrass.group") {
        reqParams.cfn['Name'] = obj.data.Name;

        /*
        TODO:
        RoleArn
        InitialVersion
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('greengrass', obj.id, 'AWS::Greengrass::Group'),
            'region': obj.region,
            'service': 'greengrass',
            'type': 'AWS::Greengrass::Group',
            'options': reqParams
        });
    } else if (obj.type == "greengrass.groupversion") {
        reqParams.cfn['GroupId'] = obj.data.Id;
        reqParams.cfn['LoggerDefinitionVersionArn'] = obj.data.Definition.LoggerDefinitionVersionArn;
        reqParams.cfn['DeviceDefinitionVersionArn'] = obj.data.Definition.DeviceDefinitionVersionArn;
        reqParams.cfn['FunctionDefinitionVersionArn'] = obj.data.Definition.FunctionDefinitionVersionArn;
        reqParams.cfn['CoreDefinitionVersionArn'] = obj.data.Definition.CoreDefinitionVersionArn;
        reqParams.cfn['ResourceDefinitionVersionArn'] = obj.data.Definition.ResourceDefinitionVersionArn;
        reqParams.cfn['ConnectorDefinitionVersionArn'] = obj.data.Definition.ConnectorDefinitionVersionArn;
        reqParams.cfn['SubscriptionDefinitionVersionArn'] = obj.data.Definition.SubscriptionDefinitionVersionArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('greengrass', obj.id, 'AWS::Greengrass::GroupVersion'),
            'region': obj.region,
            'service': 'greengrass',
            'type': 'AWS::Greengrass::GroupVersion',
            'options': reqParams
        });
    } else if (obj.type == "greengrass.loggerdefinition") {
        reqParams.cfn['Name'] = obj.data.Name;

        /*
        TODO:
        InitialVersion
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('greengrass', obj.id, 'AWS::Greengrass::LoggerDefinition'),
            'region': obj.region,
            'service': 'greengrass',
            'type': 'AWS::Greengrass::LoggerDefinition',
            'options': reqParams
        });
    } else if (obj.type == "greengrass.loggerdefinitionversion") {
        reqParams.cfn['LoggerDefinitionId'] = obj.data.LoggerDefinitionId;
        reqParams.cfn['Loggers'] = obj.data.Definition.Loggers;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('greengrass', obj.id, 'AWS::Greengrass::LoggerDefinitionVersion'),
            'region': obj.region,
            'service': 'greengrass',
            'type': 'AWS::Greengrass::LoggerDefinitionVersion',
            'options': reqParams
        });
    } else if (obj.type == "greengrass.resourcedefinition") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['InitialVersion'] = obj.data.Definition;

        /*
        TODO:
        Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('greengrass', obj.id, 'AWS::Greengrass::ResourceDefinition'),
            'region': obj.region,
            'service': 'greengrass',
            'type': 'AWS::Greengrass::ResourceDefinition',
            'options': reqParams
        });
    } else if (obj.type == "greengrass.resourcedefinitionversion") {
        reqParams.cfn['ResourceDefinitionId'] = obj.data.ResourceDefinitionId;
        reqParams.cfn['Resources'] = obj.data.Definition.Resources;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('greengrass', obj.id, 'AWS::Greengrass::ResourceDefinitionVersion'),
            'region': obj.region,
            'service': 'greengrass',
            'type': 'AWS::Greengrass::ResourceDefinitionVersion',
            'options': reqParams
        });
    } else if (obj.type == "greengrass.subscriptiondefinition") {
        reqParams.cfn['Name'] = obj.data.Name;

        /*
        TODO:
        InitialVersion
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('greengrass', obj.id, 'AWS::Greengrass::SubscriptionDefinition'),
            'region': obj.region,
            'service': 'greengrass',
            'type': 'AWS::Greengrass::SubscriptionDefinition',
            'options': reqParams
        });
    } else if (obj.type == "greengrass.subscriptiondefinitionversion") {
        reqParams.cfn['SubscriptionDefinitionId'] = obj.data.SubscriptionDefinitionId;
        reqParams.cfn['Subscriptions'] = obj.data.Definition.Subscriptions;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('greengrass', obj.id, 'AWS::Greengrass::SubscriptionDefinitionVersion'),
            'region': obj.region,
            'service': 'greengrass',
            'type': 'AWS::Greengrass::SubscriptionDefinitionVersion',
            'options': reqParams
        });
    } else if (obj.type == "greengrass.v2componentversion") {
        reqParams.cfn['InlineRecipe'] = obj.data.recipe.toString();
        reqParams.cfn['Tags'] = obj.data.tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('greengrass', obj.id, 'AWS::GreengrassV2::ComponentVersion'),
            'region': obj.region,
            'service': 'greengrass',
            'type': 'AWS::GreengrassV2::ComponentVersion',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.arn,
                'GetAtt': {
                    'ComponentName': obj.data.componentName,
                    'ComponentVersion': obj.data.componentVersion
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
