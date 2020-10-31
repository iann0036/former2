/* ========================================================================== */
// IoT SiteWise
/* ========================================================================== */

sections.push({
    'category': 'Internet of Things',
    'service': 'SiteWise',
    'resourcetypes': {
        'Gateways': {
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
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Assets': {
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
                        field: 'modelid',
                        title: 'Model ID',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Asset Models': {
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
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'description',
                        title: 'Description',
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

async function updateDatatableInternetofThingsSiteWise() {
    blockUI('#section-internetofthings-sitewise-gateways-datatable');
    blockUI('#section-internetofthings-sitewise-assets-datatable');
    blockUI('#section-internetofthings-sitewise-assetmodels-datatable');

    await sdkcall("IoTSiteWise", "listGateways", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-sitewise-gateways-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.gatewaySummaries.map(async (gateway) => {
            return sdkcall("IoTSiteWise", "describeGateway", {
                gatewayId: gateway.gatewayId
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.gatewayArn);

                $('#section-internetofthings-sitewise-gateways-datatable').deferredBootstrapTable('append', [{
                    f2id: data.gatewayArn,
                    f2type: 'iotsitewise.gateway',
                    f2data: data,
                    f2region: region,
                    id: data.gatewayId,
                    name: data.gatewayName
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("IoTSiteWise", "listAssets", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-sitewise-assets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.assetSummaries.map(async (asset) => {
            return sdkcall("IoTSiteWise", "describeAsset", {
                assetId: asset.id
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.assetArn);

                $('#section-internetofthings-sitewise-assets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.assetArn,
                    f2type: 'iotsitewise.asset',
                    f2data: data,
                    f2region: region,
                    id: data.assetId,
                    name: data.assetName,
                    modelid: data.assetModelId
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("IoTSiteWise", "listAssetModels", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-sitewise-assetmodels-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.assetModelSummaries.map(async (assetmodel) => {
            return sdkcall("IoTSiteWise", "describeAssetModel", {
                assetModelId: assetmodel.id
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.assetModelArn);

                $('#section-internetofthings-sitewise-assetmodels-datatable').deferredBootstrapTable('append', [{
                    f2id: data.assetModelArn,
                    f2type: 'iotsitewise.assetmodel',
                    f2data: data,
                    f2region: region,
                    id: data.assetModelId,
                    name: data.assetModelName,
                    description: data.assetModelDescription
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-internetofthings-sitewise-gateways-datatable');
    unblockUI('#section-internetofthings-sitewise-assets-datatable');
    unblockUI('#section-internetofthings-sitewise-assetmodels-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "iotsitewise.gateway") {
        reqParams.cfn['GatewayName'] = obj.data.gatewayName;
        if (obj.data.gatewayPlatform && obj.data.gatewayPlatform.obj.data.greengrass) {
            reqParams.cfn['GatewayPlatform'] = {
                'Greengrass': {
                    'GroupArn': obj.data.gatewayPlatform.greengrass.groupArn
                }
            };
        }
        if (obj.data.gatewayCapabilitySummaries) {
            reqParams.cfn['GatewayCapabilitySummaries'] = [];
            obj.data.gatewayCapabilitySummaries.forEach(gatewayCapabilitySummary => {
                reqParams.cfn['GatewayCapabilitySummaries'].push({
                    'CapabilityConfiguration': gatewayCapabilitySummary.capabilitySyncStatus,
                    'CapabilityNamespace': gatewayCapabilitySummary.capabilityNamespace
                });
            });
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iotsitewise', obj.id, 'AWS::IoTSiteWise::Gateway'),
            'region': obj.region,
            'service': 'iotsitewise',
            'type': 'AWS::IoTSiteWise::Gateway',
            'options': reqParams
        });
    } else if (obj.type == "iotsitewise.asset") {
        reqParams.cfn['AssetName'] = obj.data.assetName;
        if (obj.data.assetProperties) {
            reqParams.cfn['AssetProperties'] = [];
            obj.data.assetProperties.forEach(assetproperty => {
                var notificationstate = null;
                if (assetproperty.notification) {
                    notificationstate = assetproperty.notification.state;
                }
                reqParams.cfn['AssetProperties'].push({
                    'Alias': assetproperty.alias,
                    'LogicalId': assetproperty.id,
                    'NotificationState': notificationstate,
                });
            });
        }
        reqParams.cfn['AssetModelId'] = obj.data.assetModelId;
        if (obj.data.assetHierarchies) {
            reqParams.cfn['AssetHierarchies'] = [];
            obj.data.assetHierarchies.forEach(assethierarchy => {
                reqParams.cfn['AssetHierarchies'].push({
                    'ChildAssetId': assethierarchy.name,
                    'LogicalId': assethierarchy.id
                });
            });
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iotsitewise', obj.id, 'AWS::IoTSiteWise::Asset'),
            'region': obj.region,
            'service': 'iotsitewise',
            'type': 'AWS::IoTSiteWise::Asset',
            'options': reqParams
        });
    } else if (obj.type == "iotsitewise.assetmodel") {
        reqParams.cfn['AssetModelName'] = obj.data.assetModelName;
        reqParams.cfn['AssetModelDescription'] = obj.data.assetModelDescription;
        if (obj.data.assetModelProperties) {
            reqParams.cfn['AssetModelProperties'] = [];
            obj.data.assetModelProperties.forEach(assetmodelproperty => {
                var type = null;
                var typename = null;
                var attribute = null;
                if (assetmodelproperty.type.attribute) {
                    typename = 'Attribute';
                    attribute = {
                        'DefaultValue': assetmodelproperty.type.attribute.defaultValue,
                    };
                }
                if (assetmodelproperty.type.measurement) {
                    typename = 'Measurement';
                }
                var metric = null;
                if (assetmodelproperty.type.metric) {
                    typename = 'Metric';
                    var variables = null;
                    if (assetmodelproperty.type.metric.variables) {
                        variables = [];
                        assetmodelproperty.type.metric.variables.forEach(variable => {
                            var value = null;
                            if (variables.value) {
                                value = {
                                    'PropertyLogicalId': variables.value.propertyId,
                                    'HierarchyLogicalId': variables.value.hierarchyId
                                };
                            }
                            variables.push({
                                'Name': variables.name,
                                'Value': value
                            });
                        });
                    }
                    var window = null;
                    if (assetmodelproperty.type.metric.window && assetmodelproperty.type.metric.window.tumbling) {
                        window = {
                            'Tumbling': {
                                'Interval': assetmodelproperty.type.metric.window.tumbling.interval
                            }
                        };
                    }
                    metric = {
                        'Expression': assetmodelproperty.type.metric.expression,
                        'Variables': variables,
                        'Window': window,
                    };
                }
                var transform = null;
                if (assetmodelproperty.type.transform) {
                    typename = 'Transform';
                    var variables = null;
                    if (assetmodelproperty.type.transform.variables) {
                        variables = [];
                        assetmodelproperty.type.transform.variables.forEach(variable => {
                            var value = null;
                            if (variables.value) {
                                value = {
                                    'PropertyLogicalId': variables.value.propertyId,
                                    'HierarchyLogicalId': variables.value.hierarchyId
                                };
                            }
                            variables.push({
                                'Name': variables.name,
                                'Value': value
                            });
                        });
                    }
                    metric = {
                        'Expression': assetmodelproperty.type.transform.expression,
                        'Variables': variables
                    };
                }
                if (assetmodelproperty.type) {
                    type = {
                        'Attribute': attribute,
                        'Metric': metric,
                        'Transform': transform,
                        'TypeName': typename,
                    };
                }
                reqParams.cfn['AssetModelProperties'].push({
                    'DataType': assetmodelproperty.dataType,
                    'LogicalId': assetmodelproperty.id,
                    'Name': assetmodelproperty.name,
                    'Type': type,
                    'Unit': assetmodelproperty.unit,
                });
            });
        }
        if (obj.data.assetModelHierarchies) {
            reqParams.cfn['AssetModelHierarchies'] = [];
            obj.data.assetModelHierarchies.forEach(assetmodelhierarchy => {
                reqParams.cfn['AssetModelHierarchies'].push({
                    'Name': assetmodelhierarchy.name,
                    'ChildAssetModelId': assetmodelhierarchy.childAssetModelId,
                    'LogicalId': assetmodelhierarchy.id
                });
            });
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iotsitewise', obj.id, 'AWS::IoTSiteWise::AssetModel'),
            'region': obj.region,
            'service': 'iotsitewise',
            'type': 'AWS::IoTSiteWise::AssetModel',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
