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
        },
        'Access Policies': {
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
                        field: 'permission',
                        title: 'Permission',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Portals': {
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
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Projects': {
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
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Dashboards': {
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
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'projectid',
                        title: 'Project ID',
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
    blockUI('#section-internetofthings-sitewise-accesspolicies-datatable');
    blockUI('#section-internetofthings-sitewise-dashboards-datatable');
    blockUI('#section-internetofthings-sitewise-portals-datatable');
    blockUI('#section-internetofthings-sitewise-projects-datatable');

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

    await sdkcall("IoTSiteWise", "listPortals", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-sitewise-portals-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.portalSummaries.map(async (portal) => {
            await sdkcall("IoTSiteWise", "describePortal", {
                portalId: portal.id
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.portalArn);

                $('#section-internetofthings-sitewise-portals-datatable').deferredBootstrapTable('append', [{
                    f2id: data.portalArn,
                    f2type: 'iotsitewise.portal',
                    f2data: data,
                    f2region: region,
                    id: data.assetModelId,
                    name: data.portalName,
                    description: data.portalDescription
                }]);
            });

            return sdkcall("IoTSiteWise", "listProjects", {
                portalId: portal.id
            }, false).then(async (data) => {
                $('#section-internetofthings-sitewise-projects-datatable').deferredBootstrapTable('removeAll');
        
                await Promise.all(data.projectSummaries.map(async (project) => {
                    await sdkcall("IoTSiteWise", "describeProject", {
                        projectId: project.id
                    }, true).then(async (data) => {
                        data['Tags'] = await getResourceTags(data.projectArn);
        
                        $('#section-internetofthings-sitewise-projects-datatable').deferredBootstrapTable('append', [{
                            f2id: data.projectArn,
                            f2type: 'iotsitewise.project',
                            f2data: data,
                            f2region: region,
                            id: data.projectId,
                            name: data.projectName,
                            description: data.projectDescription
                        }]);
                    });

                    return sdkcall("IoTSiteWise", "listDashboards", {
                        projectId: project.id
                    }, false).then(async (data) => {
                        $('#section-internetofthings-sitewise-dashboards-datatable').deferredBootstrapTable('removeAll');
                
                        await Promise.all(data.dashboardSummaries.map(async (dashboard) => {
                            return sdkcall("IoTSiteWise", "describeDashboard", {
                                dashboardId: dashboard.id
                            }, true).then(async (data) => {
                                data['Tags'] = await getResourceTags(data.dashboardArn);
                
                                $('#section-internetofthings-sitewise-dashboards-datatable').deferredBootstrapTable('append', [{
                                    f2id: data.dashboardArn,
                                    f2type: 'iotsitewise.dashboard',
                                    f2data: data,
                                    f2region: region,
                                    id: data.dashboardId,
                                    name: data.dashboardName,
                                    description: data.dashboardDescription,
                                    projectid: data.projectId
                                }]);
                            });
                        }));
                    }).catch(() => { });
                }));
            }).catch(() => { });
        }));
    }).catch(() => { });

    await sdkcall("IoTSiteWise", "listAccessPolicies", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-sitewise-accesspolicies-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.accessPolicySummaries.map(async (accesspolicy) => {
            return sdkcall("IoTSiteWise", "describeAccessPolicy", {
                accessPolicyId: accesspolicy.id
            }, true).then(async (data) => {
                $('#section-internetofthings-sitewise-accesspolicies-datatable').deferredBootstrapTable('append', [{
                    f2id: data.accessPolicyArn,
                    f2type: 'iotsitewise.accesspolicy',
                    f2data: data,
                    f2region: region,
                    id: data.accessPolicyId,
                    permission: data.accessPolicyPermission
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-internetofthings-sitewise-gateways-datatable');
    unblockUI('#section-internetofthings-sitewise-assets-datatable');
    unblockUI('#section-internetofthings-sitewise-assetmodels-datatable');
    unblockUI('#section-internetofthings-sitewise-accesspolicies-datatable');
    unblockUI('#section-internetofthings-sitewise-dashboards-datatable');
    unblockUI('#section-internetofthings-sitewise-portals-datatable');
    unblockUI('#section-internetofthings-sitewise-projects-datatable');
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
    } else if (obj.type == "iotsitewise.accesspolicy") {
        if (obj.data.accessPolicyIdentity && obj.data.accessPolicyIdentity.user && obj.data.accessPolicyIdentity.user.id) {
            reqParams.cfn['AccessPolicyIdentity'] = {
                'User': {
                    'id': obj.data.accessPolicyIdentity.user.id
                }
            }
        }
        reqParams.cfn['AccessPolicyPermission'] = obj.data.accessPolicyPermission;
        reqParams.cfn['AccessPolicyResource'] = {};
        if (obj.data.accessPolicyResource && obj.data.accessPolicyResource.portal && obj.data.accessPolicyResource.portal.id) {
            reqParams.cfn['AccessPolicyResource']['Portal'] = {
                'id': obj.data.accessPolicyResource.portal.id
            };
        }
        if (obj.data.accessPolicyResource && obj.data.accessPolicyResource.project && obj.data.accessPolicyResource.project.id) {
            reqParams.cfn['AccessPolicyResource']['Project'] = {
                'id': obj.data.accessPolicyResource.project.id
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iotsitewise', obj.id, 'AWS::IoTSiteWise::AccessPolicy'),
            'region': obj.region,
            'service': 'iotsitewise',
            'type': 'AWS::IoTSiteWise::AccessPolicy',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.accessPolicyId,
                'GetAtt': {
                    'AccessPolicyArn': obj.data.accessPolicyArn
                }
            }
        });
    } else if (obj.type == "iotsitewise.portal") {
        reqParams.cfn['PortalContactEmail'] = obj.data.portalContactEmail;
        reqParams.cfn['PortalDescription'] = obj.data.portalDescription;
        reqParams.cfn['PortalName'] = obj.data.portalName;
        reqParams.cfn['RoleArn'] = obj.data.roleArn;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iotsitewise', obj.id, 'AWS::IoTSiteWise::Portal'),
            'region': obj.region,
            'service': 'iotsitewise',
            'type': 'AWS::IoTSiteWise::Portal',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.portalId,
                'GetAtt': {
                    'PortalArn': obj.data.portalArn,
                    'PortalClientId': obj.data.portalClientId,
                    'PortalStartUrl': obj.data.portalStartUrl
                }
            }
        });
    } else if (obj.type == "iotsitewise.project") {
        reqParams.cfn['PortalId'] = obj.data.portalId;
        reqParams.cfn['ProjectDescription'] = obj.data.projectDescription;
        reqParams.cfn['ProjectName'] = obj.data.projectName;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iotsitewise', obj.id, 'AWS::IoTSiteWise::Project'),
            'region': obj.region,
            'service': 'iotsitewise',
            'type': 'AWS::IoTSiteWise::Project',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.projectId,
                'GetAtt': {
                    'ProjectArn': obj.data.projectArn
                }
            }
        });
    } else if (obj.type == "iotsitewise.dashboard") {
        reqParams.cfn['DashboardDefinition'] = obj.data.dashboardDefinition;
        reqParams.cfn['DashboardDescription'] = obj.data.dashboardDescription;
        reqParams.cfn['DashboardName'] = obj.data.dashboardName;
        reqParams.cfn['ProjectId'] = obj.data.projectId;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iotsitewise', obj.id, 'AWS::IoTSiteWise::Dashboard'),
            'region': obj.region,
            'service': 'iotsitewise',
            'type': 'AWS::IoTSiteWise::Dashboard',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.dashboardId,
                'GetAtt': {
                    'DashboardArn': obj.data.dashboardArn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
