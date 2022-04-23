/* ========================================================================== */
// IoT TwinMaker
/* ========================================================================== */

sections.push({
    'category': 'Internet of Things',
    'service': 'TwinMaker',
    'resourcetypes': {
        'Workspaces': {
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
        'Scenes': {
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
                        field: 'workspaceid',
                        title: 'Workspace ID',
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
        'Entities': {
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
                        field: 'workspaceid',
                        title: 'Workspace ID',
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
        'Component Types': {
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
                        field: 'workspaceid',
                        title: 'Workspace ID',
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
        }
    }
});

async function updateDatatableInternetofThingsTwinMaker() {
    blockUI('#section-internetofthings-twinmaker-workspaces-datatable');
    blockUI('#section-internetofthings-twinmaker-scenes-datatable');
    blockUI('#section-internetofthings-twinmaker-entities-datatable');
    blockUI('#section-internetofthings-twinmaker-componenttypes-datatable');

    await sdkcall("IoTTwinMaker", "listWorkspaces", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-twinmaker-workspaces-datatable').deferredBootstrapTable('removeAll');
        $('#section-internetofthings-twinmaker-scenes-datatable').deferredBootstrapTable('removeAll');
        $('#section-internetofthings-twinmaker-entities-datatable').deferredBootstrapTable('removeAll');
        $('#section-internetofthings-twinmaker-componenttypes-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.workspaceSummaries.map(async (workspace) => {
            await sdkcall("IoTTwinMaker", "getWorkspace", {
                workspaceId: workspace.workspaceId
            }, true).then(async (data) => {
                $('#section-internetofthings-twinmaker-workspaces-datatable').deferredBootstrapTable('append', [{
                    f2id: data.arn,
                    f2type: 'iottwinmaker.workspace',
                    f2data: data,
                    f2region: region,
                    id: data.workspaceId,
                    description: data.description
                }]);
            });

            await sdkcall("IoTTwinMaker", "listScenes", {
                workspaceId: workspace.workspaceId
            }, false).then(async (data) => {
                await Promise.all(data.sceneSummaries.map(async (scene) => {
                    return sdkcall("IoTTwinMaker", "getScene", {
                        sceneId: scene.sceneId,
                        workspaceId: workspace.workspaceId
                    }, true).then(async (data) => {
                        $('#section-internetofthings-twinmaker-scenes-datatable').deferredBootstrapTable('append', [{
                            f2id: data.arn,
                            f2type: 'iottwinmaker.scene',
                            f2data: data,
                            f2region: region,
                            id: data.sceneId,
                            workspaceid: data.workspaceId,
                            description: data.description
                        }]);
                    });
                }));
            }).catch(err => { });

            await sdkcall("IoTTwinMaker", "listEntities", {
                workspaceId: workspace.workspaceId
            }, false).then(async (data) => {
                await Promise.all(data.entitySummaries.map(async (entity) => {
                    return sdkcall("IoTTwinMaker", "getEntity", {
                        entityId: entity.entityId,
                        workspaceId: workspace.workspaceId
                    }, true).then(async (data) => {
                        $('#section-internetofthings-twinmaker-entities-datatable').deferredBootstrapTable('append', [{
                            f2id: data.arn,
                            f2type: 'iottwinmaker.entity',
                            f2data: data,
                            f2region: region,
                            id: data.entityId,
                            workspaceid: data.workspaceId,
                            description: data.description
                        }]);
                    });
                }));
            }).catch(err => { });

            return sdkcall("IoTTwinMaker", "listComponentTypes", {
                workspaceId: workspace.workspaceId
            }, false).then(async (data) => {
                await Promise.all(data.componentTypeSummaries.map(async (componenttype) => {
                    return sdkcall("IoTTwinMaker", "getComponentType", {
                        componentTypeId: componenttype.componentTypeId,
                        workspaceId: workspace.workspaceId
                    }, true).then(async (data) => {
                        $('#section-internetofthings-twinmaker-componenttypes-datatable').deferredBootstrapTable('append', [{
                            f2id: data.arn,
                            f2type: 'iottwinmaker.componenttype',
                            f2data: data,
                            f2region: region,
                            id: data.componentTypeId,
                            workspaceid: data.workspaceId,
                            description: data.description
                        }]);
                    });
                }));
            }).catch(err => { });
        }));
    }).catch(err => { });

    unblockUI('#section-internetofthings-twinmaker-workspaces-datatable');
    unblockUI('#section-internetofthings-twinmaker-scenes-datatable');
    unblockUI('#section-internetofthings-twinmaker-entities-datatable');
    unblockUI('#section-internetofthings-twinmaker-componenttypes-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "iottwinmaker.workspace") {
        reqParams.cfn['WorkspaceId'] = obj.data.workspaceId;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['Role'] = obj.data.role;
        reqParams.cfn['S3Location'] = obj.data.s3Location;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iottwinmaker', obj.id, 'AWS::IoTTwinMaker::Workspace'),
            'region': obj.region,
            'service': 'iottwinmaker',
            'type': 'AWS::IoTTwinMaker::Workspace',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.workspaceId,
                'GetAtt': {
                    'Arn': obj.data.arn
                }
            }
        });
    } else if (obj.type == "iottwinmaker.scene") {
        reqParams.cfn['SceneId'] = obj.data.sceneId;
        reqParams.cfn['WorkspaceId'] = obj.data.workspaceId;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['Capabilities'] = obj.data.capabilities;
        reqParams.cfn['ContentLocation'] = obj.data.contentLocation;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iottwinmaker', obj.id, 'AWS::IoTTwinMaker::Scene'),
            'region': obj.region,
            'service': 'iottwinmaker',
            'type': 'AWS::IoTTwinMaker::Scene',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.sceneId,
                'GetAtt': {
                    'Arn': obj.data.arn
                }
            }
        });
    } else if (obj.type == "iottwinmaker.entity") {
        reqParams.cfn['EntityId'] = obj.data.entityId;
        reqParams.cfn['WorkspaceId'] = obj.data.workspaceId;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['EntityName'] = obj.data.entityName;
        reqParams.cfn['ParentEntityId'] = obj.data.parentEntityId;
        reqParams.cfn['Components'] = obj.data.components;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iottwinmaker', obj.id, 'AWS::IoTTwinMaker::Entity'),
            'region': obj.region,
            'service': 'iottwinmaker',
            'type': 'AWS::IoTTwinMaker::Entity',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.entityId,
                'GetAtt': {
                    'Arn': obj.data.arn
                }
            }
        });
    } else if (obj.type == "iottwinmaker.componenttype") {
        reqParams.cfn['ComponentTypeId'] = obj.data.componentTypeId;
        reqParams.cfn['WorkspaceId'] = obj.data.workspaceId;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['ExtendsFrom'] = obj.data.extendsFrom;
        reqParams.cfn['Functions'] = obj.data.functions;
        reqParams.cfn['IsSingleton'] = obj.data.isSingleton;
        reqParams.cfn['PropertyDefinitions'] = obj.data.propertyDefinitions;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iottwinmaker', obj.id, 'AWS::IoTTwinMaker::ComponentType'),
            'region': obj.region,
            'service': 'iottwinmaker',
            'type': 'AWS::IoTTwinMaker::ComponentType',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.componentTypeId,
                'GetAtt': {
                    'Arn': obj.data.arn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
