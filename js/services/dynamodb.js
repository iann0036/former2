/* ========================================================================== */
// DynamoDB
/* ========================================================================== */

sections.push({
    'category': 'Database',
    'service': 'DynamoDB',
    'resourcetypes': {
        'Tables': {
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
                        field: 'size',
                        title: 'Size',
                        sortable: true,
                        editable: true,
                        formatter: byteSizeFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'itemcount',
                        title: 'Item Count',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
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
        'Global Tables': {
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
                        field: 'size',
                        title: 'Size',
                        sortable: true,
                        editable: true,
                        formatter: byteSizeFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'itemcount',
                        title: 'Item Count',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
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
        'Accelerator Clusters': {
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
                        field: 'totalnodes',
                        title: 'Total Nodes',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'nodetype',
                        title: 'Node Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'subnetgroup',
                        title: 'Subnet Group',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Accelerator Parameter Groups': {
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
        'Accelerator Subnet Groups': {
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
                        field: 'vpcid',
                        title: 'VPC ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Application Auto Scaling Scalable Targets': {
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
                        title: 'Resource ID',
                        field: 'resourceid',
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
                        field: 'scalabledimension',
                        title: 'Scalable Dimension',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'mincapacity',
                        title: 'Min Capacity',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'maxcapacity',
                        title: 'Max Capacity',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Application Auto Scaling Scaling Policies': {
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
                        title: 'Resource ID',
                        field: 'resourceid',
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
                        field: 'policyname',
                        title: 'Policy Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'scalabledimension',
                        title: 'Scalable Dimension',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'policytype',
                        title: 'Policy Type',
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

async function updateDatatableDatabaseDynamoDB() {
    blockUI('#section-database-dynamodb-tables-datatable');
    blockUI('#section-database-dynamodb-globaltables-datatable');
    blockUI('#section-database-dynamodb-acceleratorclusters-datatable');
    blockUI('#section-database-dynamodb-acceleratorparametergroups-datatable');
    blockUI('#section-database-dynamodb-acceleratorsubnetgroups-datatable');
    blockUI('#section-database-dynamodb-applicationautoscalingscalabletargets-datatable');
    blockUI('#section-database-dynamodb-applicationautoscalingscalingpolicies-datatable');

    await sdkcall("DynamoDB", "listTables", {
        // no params
    }, true).then(async (data) => {
        $('#section-database-dynamodb-tables-datatable').deferredBootstrapTable('removeAll');
        $('#section-database-dynamodb-globaltables-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.TableNames.map(async (tableName) => {
            return sdkcall("DynamoDB", "describeTable", {
                TableName: tableName
            }, true).then(async (data) => {
                await sdkcall("DynamoDB", "listTagsOfResource", {
                    ResourceArn: data.Table.TableArn
                }, false).then(async (tagdata) => {
                    if (tagdata.Tags && tagdata.Tags.length) {
                        data.Table['Tags'] = tagdata.Tags;
                    }

                    await sdkcall("DynamoDB", "describeTimeToLive", {
                        TableName: data.Table.TableName
                    }, false).then(async (ttldata) => {
                        data.Table['TimeToLiveDescription'] = ttldata['TimeToLiveDescription'];
                    }).catch(() => { });

                    if (data.Table.Replicas && data.Table.Replicas.length > 0) {
                        $('#section-database-dynamodb-globaltables-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Table.TableArn,
                            f2type: 'dynamodb.globaltable',
                            f2data: data.Table,
                            f2region: region,
                            f2link: 'https://console.aws.amazon.com/dynamodb/home?region=' + region + '#tables:selected=' + data.Table.TableName,
                            name: data.Table.TableName,
                            creationtime: data.Table.CreationDateTime,
                            size: data.Table.TableSizeBytes,
                            itemcount: data.Table.ItemCount
                        }]);
                    } else {
                        $('#section-database-dynamodb-tables-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Table.TableArn,
                            f2type: 'dynamodb.table',
                            f2data: data.Table,
                            f2region: region,
                            f2link: 'https://console.aws.amazon.com/dynamodb/home?region=' + region + '#tables:selected=' + data.Table.TableName,
                            name: data.Table.TableName,
                            creationtime: data.Table.CreationDateTime,
                            size: data.Table.TableSizeBytes,
                            itemcount: data.Table.ItemCount
                        }]);
                    }
                }).catch(() => { });
            });
        }));

        unblockUI('#section-database-dynamodb-tables-datatable');
        unblockUI('#section-database-dynamodb-globaltables-datatable');
    });

    await sdkcall("DAX", "describeClusters", {
        // no params
    }, true).then((data) => {
        $('#section-database-dynamodb-acceleratorclusters-datatable').deferredBootstrapTable('removeAll');

        data.Clusters.forEach(cluster => {
            $('#section-database-dynamodb-acceleratorclusters-datatable').deferredBootstrapTable('append', [{
                f2id: cluster.ClusterArn,
                f2type: 'dynamodb.acceleratorcluster',
                f2data: cluster,
                f2region: region,
                name: cluster.ClusterName,
                description: cluster.Description,
                totalnodes: cluster.TotalNodes,
                nodetype: cluster.NodeType,
                subnetgroup: cluster.SubnetGroup
            }]);
        });

        unblockUI('#section-database-dynamodb-acceleratorclusters-datatable');
    });

    await sdkcall("DAX", "describeParameterGroups", {
        // no params
    }, true).then(async (data) => {
        $('#section-database-dynamodb-acceleratorparametergroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ParameterGroups.map(parameterGroup => {
            return sdkcall("DAX", "describeParameters", {
                ParameterGroupName: parameterGroup.ParameterGroupName
            }, true).then((data) => {
                parameterGroup['Parameters'] = data.Parameters;

                if (!parameterGroup.ParameterGroupName.startsWith("default.")) {
                    $('#section-database-dynamodb-acceleratorparametergroups-datatable').deferredBootstrapTable('append', [{
                        f2id: parameterGroup.ParameterGroupName,
                        f2type: 'dynamodb.acceleratorparametergroup',
                        f2data: parameterGroup,
                        f2region: region,
                        name: parameterGroup.ParameterGroupName,
                        description: parameterGroup.Description
                    }]);
                }
            });
        }));

        unblockUI('#section-database-dynamodb-acceleratorparametergroups-datatable');
    });

    await sdkcall("DAX", "describeSubnetGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-dynamodb-acceleratorsubnetgroups-datatable').deferredBootstrapTable('removeAll');

        data.SubnetGroups.forEach(subnetGroup => {
            $('#section-database-dynamodb-acceleratorsubnetgroups-datatable').deferredBootstrapTable('append', [{
                f2id: subnetGroup.SubnetGroupName,
                f2type: 'dynamodb.acceleratorsubnetgroup',
                f2data: subnetGroup,
                f2region: region,
                name: subnetGroup.SubnetGroupName,
                description: subnetGroup.Description,
                vpcid: subnetGroup.VpcId
            }]);
        });

        unblockUI('#section-database-dynamodb-acceleratorsubnetgroups-datatable');
    });

    await sdkcall("ApplicationAutoScaling", "describeScalableTargets", {
        ServiceNamespace: "dynamodb"
    }, true).then(async (data) => {
        $('#section-database-dynamodb-applicationautoscalingscalabletargets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ScalableTargets.map(target => {
            return sdkcall("ApplicationAutoScaling", "describeScheduledActions", {
                ServiceNamespace: "dynamodb",
                ResourceId: target.ResourceId,
                ScalableDimension: target.ScalableDimension
            }, true).then((actions) => {
                target['ScheduledActions'] = actions.ScheduledActions;

                $('#section-database-dynamodb-applicationautoscalingscalabletargets-datatable').deferredBootstrapTable('append', [{
                    f2id: target.ResourceId,
                    f2type: 'applicationautoscaling.scalabletarget',
                    f2data: target,
                    f2region: region,
                    resourceid: target.ResourceId,
                    scalabledimension: target.ScalableDimension,
                    mincapacity: target.MinCapacity,
                    maxcapacity: target.MaxCapacity
                }]);
            });
        }));

        unblockUI('#section-database-dynamodb-applicationautoscalingscalabletargets-datatable');
    });

    await sdkcall("ApplicationAutoScaling", "describeScalingPolicies", {
        ServiceNamespace: "dynamodb"
    }, true).then(async (data) => {
        $('#section-database-dynamodb-applicationautoscalingscalingpolicies-datatable').deferredBootstrapTable('removeAll');

        if (data.ScalableTargets) {
            data.ScalableTargets.forEach(target => {
                $('#section-database-dynamodb-applicationautoscalingscalingpolicies-datatable').deferredBootstrapTable('append', [{
                    f2id: target.PolicyARN,
                    f2type: 'applicationautoscaling.scalingpolicy',
                    f2data: target,
                    f2region: region,
                    resourceid: target.ResourceId,
                    scalabledimension: target.ScalableDimension,
                    policyname: target.PolicyName,
                    policytype: target.PolicyType
                }]);
            });
        }

        unblockUI('#section-database-dynamodb-applicationautoscalingscalingpolicies-datatable');
    });
    
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "dynamodb.table") {
        reqParams.cfn['AttributeDefinitions'] = obj.data.AttributeDefinitions;
        if (obj.data.AttributeDefinitions) {
            reqParams.tf['attribute'] = [];
            obj.data.AttributeDefinitions.forEach(attributedefinition => {
                reqParams.tf['attribute'].push({
                    'name': attributedefinition.AttributeName,
                    'type': attributedefinition.AttributeType
                });
            });
        }
        if (obj.data.BillingModeSummary) {
            reqParams.cfn['BillingMode'] = obj.data.BillingModeSummary.BillingMode;
            reqParams.tf['billing_mode'] = obj.data.BillingModeSummary.BillingMode;
        }
        reqParams.cfn['TableName'] = obj.data.TableName;
        reqParams.tf['name'] = obj.data.TableName;
        reqParams.cfn['Tags'] = obj.data.Tags;
        reqParams.cfn['KeySchema'] = obj.data.KeySchema;
        if (obj.data.KeySchema) {
            obj.data.KeySchema.forEach(keyschema => {
                if (keyschema.KeyType == "HASH") {
                    reqParams.tf['hash_key'] = keyschema.AttributeName;
                } else if (keyschema.KeyType == "RANGE") {
                    reqParams.tf['range_key'] = keyschema.AttributeName;
                }
            });
        }
        if (obj.data.ProvisionedThroughput && obj.data.ProvisionedThroughput.ReadCapacityUnits > 0) {
            reqParams.cfn['ProvisionedThroughput'] = {
                'ReadCapacityUnits': obj.data.ProvisionedThroughput.ReadCapacityUnits,
                'WriteCapacityUnits': obj.data.ProvisionedThroughput.WriteCapacityUnits
            };
            reqParams.tf['read_capacity'] = obj.data.ProvisionedThroughput.ReadCapacityUnits;
            reqParams.tf['write_capacity'] = obj.data.ProvisionedThroughput.WriteCapacityUnits;
        }
        if (obj.data.LocalSecondaryIndexes) {
            reqParams.cfn['LocalSecondaryIndexes'] = [];
            reqParams.tf['local_secondary_index'] = [];
            obj.data.LocalSecondaryIndexes.forEach(index => {
                reqParams.cfn['LocalSecondaryIndexes'].push({
                    'IndexName': index.IndexName,
                    'KeySchema': index.KeySchema,
                    'Projection': index.Projection
                });
                var rangekey = null;
                index.KeySchema.forEach(keyschema => {
                    if (keyschema.KeyType == "RANGE") {
                        rangekey = keyschema.AttributeName;
                    }
                });
                reqParams.tf['local_secondary_index'].push({
                    'name': index.IndexName,
                    'range_key': rangekey,
                    'projection_type': index.Projection.ProjectionType,
                    'non_key_attributes': index.Projection.NonKeyAttributes
                });
            });
        }
        if (obj.data.GlobalSecondaryIndexes) {
            reqParams.cfn['GlobalSecondaryIndexes'] = [];
            reqParams.tf['global_secondary_index'] = [];
            obj.data.GlobalSecondaryIndexes.forEach(index => {
                reqParams.cfn['GlobalSecondaryIndexes'].push({
                    'IndexName': index.IndexName,
                    'KeySchema': index.KeySchema,
                    'Projection': index.Projection,
                    'ProvisionedThroughput': {
                        'ReadCapacityUnits': index.ProvisionedThroughput.ReadCapacityUnits,
                        'WriteCapacityUnits': index.ProvisionedThroughput.WriteCapacityUnits
                    }
                });
                var hashkey = null;
                var rangekey = null;
                index.KeySchema.forEach(keyschema => {
                    if (keyschema.KeyType == "HASH") {
                        hashkey = keyschema.AttributeName;
                    } else if (keyschema.KeyType == "RANGE") {
                        rangekey = keyschema.AttributeName;
                    }
                });
                reqParams.tf['global_secondary_index'].push({
                    'name': index.IndexName,
                    'hash_key': hashkey,
                    'range_key': rangekey,
                    'projection_type': index.Projection.ProjectionType,
                    'non_key_attributes': index.Projection.NonKeyAttributes,
                    'read_capacity': index.ProvisionedThroughput.ReadCapacityUnits,
                    'write_capacity': index.ProvisionedThroughput.WriteCapacityUnits
                });
            });
        }
        if (obj.data.StreamSpecification) {
            reqParams.cfn['StreamSpecification'] = {
                'StreamViewType': obj.data.StreamSpecification.StreamViewType
            };
            reqParams.tf['stream_enabled'] = true;
            reqParams.tf['stream_view_type'] = obj.data.StreamSpecification.StreamViewType;
        }
        if (obj.data.SSEDescription) {
            reqParams.cfn['SSESpecification'] = {
                'SSEEnabled': (obj.data.SSEDescription.Status[0] == "E"),
                'SSEType': obj.data.SSEDescription.SSEType,
                'KMSMasterKeyId': obj.data.SSEDescription.KMSMasterKeyArn
            };
            reqParams.tf['server_side_encryption'] = {
                'enabled': (obj.data.SSEDescription.Status[0] == "E")
            };
        }
        if (obj.data.TimeToLiveDescription) {
            reqParams.cfn['TimeToLiveSpecification'] = {
                'AttributeName': obj.data.TimeToLiveDescription.AttributeName,
                'Enabled': (obj.data.TimeToLiveDescription.TimeToLiveStatus == "ENABLED")
            };
            reqParams.tf['ttl'] = {
                'attribute_name': obj.data.TimeToLiveDescription.AttributeName,
                'enabled': (obj.data.TimeToLiveDescription.TimeToLiveStatus == "ENABLED")
            };
        }

        /*
        TODO:
        PointInTimeRecoverySpecification: 
            PointInTimeRecoverySpecification
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('dynamodb', obj.id, 'AWS::DynamoDB::Table'),
            'region': obj.region,
            'service': 'dynamodb',
            'type': 'AWS::DynamoDB::Table',
            'terraformType': 'aws_dynamodb_table',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.TableName,
                'GetAtt': {
                    'Arn': obj.data.TableArn,
                    'StreamArn': obj.data.LatestStreamArn
                },
                'Import': {
                    'TableName': obj.data.TableName
                }
            }
        });
    } else if (obj.type == "dynamodb.globaltable") {
        reqParams.cfn['AttributeDefinitions'] = obj.data.AttributeDefinitions;
        if (obj.data.AttributeDefinitions) {
            reqParams.tf['attribute'] = [];
            obj.data.AttributeDefinitions.forEach(attributedefinition => {
                reqParams.tf['attribute'].push({
                    'name': attributedefinition.AttributeName,
                    'type': attributedefinition.AttributeType
                });
            });
        }
        if (obj.data.BillingModeSummary) {
            reqParams.cfn['BillingMode'] = obj.data.BillingModeSummary.BillingMode;
            reqParams.tf['billing_mode'] = obj.data.BillingModeSummary.BillingMode;
        }
        reqParams.cfn['TableName'] = obj.data.TableName;
        reqParams.tf['name'] = obj.data.TableName;
        reqParams.cfn['Tags'] = obj.data.Tags;
        reqParams.cfn['KeySchema'] = obj.data.KeySchema;
        if (obj.data.KeySchema) {
            obj.data.KeySchema.forEach(keyschema => {
                if (keyschema.KeyType == "HASH") {
                    reqParams.tf['hash_key'] = keyschema.AttributeName;
                } else if (keyschema.KeyType == "RANGE") {
                    reqParams.tf['range_key'] = keyschema.AttributeName;
                }
            });
        }
        if (obj.data.ProvisionedThroughput && obj.data.ProvisionedThroughput.ReadCapacityUnits > 0) {
            reqParams.cfn['ProvisionedThroughput'] = {
                'ReadCapacityUnits': obj.data.ProvisionedThroughput.ReadCapacityUnits,
                'WriteCapacityUnits': obj.data.ProvisionedThroughput.WriteCapacityUnits
            };
            reqParams.tf['read_capacity'] = obj.data.ProvisionedThroughput.ReadCapacityUnits;
            reqParams.tf['write_capacity'] = obj.data.ProvisionedThroughput.WriteCapacityUnits;
        }
        if (obj.data.LocalSecondaryIndexes) {
            reqParams.cfn['LocalSecondaryIndexes'] = [];
            reqParams.tf['local_secondary_index'] = [];
            obj.data.LocalSecondaryIndexes.forEach(index => {
                reqParams.cfn['LocalSecondaryIndexes'].push({
                    'IndexName': index.IndexName,
                    'KeySchema': index.KeySchema,
                    'Projection': index.Projection
                });
                var rangekey = null;
                index.KeySchema.forEach(keyschema => {
                    if (keyschema.KeyType == "RANGE") {
                        rangekey = keyschema.AttributeName;
                    }
                });
                reqParams.tf['local_secondary_index'].push({
                    'name': index.IndexName,
                    'range_key': rangekey,
                    'projection_type': index.Projection.ProjectionType,
                    'non_key_attributes': index.Projection.NonKeyAttributes
                });
            });
        }
        if (obj.data.GlobalSecondaryIndexes) {
            reqParams.cfn['GlobalSecondaryIndexes'] = [];
            reqParams.tf['global_secondary_index'] = [];
            obj.data.GlobalSecondaryIndexes.forEach(index => {
                reqParams.cfn['GlobalSecondaryIndexes'].push({
                    'IndexName': index.IndexName,
                    'KeySchema': index.KeySchema,
                    'Projection': index.Projection,
                    'ProvisionedThroughput': {
                        'ReadCapacityUnits': index.ProvisionedThroughput.ReadCapacityUnits,
                        'WriteCapacityUnits': index.ProvisionedThroughput.WriteCapacityUnits
                    }
                });
                var hashkey = null;
                var rangekey = null;
                index.KeySchema.forEach(keyschema => {
                    if (keyschema.KeyType == "HASH") {
                        hashkey = keyschema.AttributeName;
                    } else if (keyschema.KeyType == "RANGE") {
                        rangekey = keyschema.AttributeName;
                    }
                });
                reqParams.tf['global_secondary_index'].push({
                    'name': index.IndexName,
                    'hash_key': hashkey,
                    'range_key': rangekey,
                    'projection_type': index.Projection.ProjectionType,
                    'non_key_attributes': index.Projection.NonKeyAttributes,
                    'read_capacity': index.ProvisionedThroughput.ReadCapacityUnits,
                    'write_capacity': index.ProvisionedThroughput.WriteCapacityUnits
                });
            });
        }
        if (obj.data.StreamSpecification) {
            reqParams.cfn['StreamSpecification'] = {
                'StreamViewType': obj.data.StreamSpecification.StreamViewType
            };
            reqParams.tf['stream_enabled'] = true;
            reqParams.tf['stream_view_type'] = obj.data.StreamSpecification.StreamViewType;
        }
        if (obj.data.SSEDescription) {
            reqParams.cfn['SSESpecification'] = {
                'SSEEnabled': (obj.data.SSEDescription.Status[0] == "E"),
                'SSEType': obj.data.SSEDescription.SSEType,
                'KMSMasterKeyId': obj.data.SSEDescription.KMSMasterKeyArn
            };
            reqParams.tf['server_side_encryption'] = {
                'enabled': (obj.data.SSEDescription.Status[0] == "E")
            };
        }
        if (obj.data.TimeToLiveDescription) {
            reqParams.cfn['TimeToLiveSpecification'] = {
                'AttributeName': obj.data.TimeToLiveDescription.AttributeName,
                'Enabled': (obj.data.TimeToLiveDescription.TimeToLiveStatus == "ENABLED")
            };
            reqParams.tf['ttl'] = {
                'attribute_name': obj.data.TimeToLiveDescription.AttributeName,
                'enabled': (obj.data.TimeToLiveDescription.TimeToLiveStatus == "ENABLED")
            };
        }
        if (obj.data.Replicas) {
            reqParams.cfn['Replicas'] = [];
            reqParams.tf['replicas'] = [];
            obj.data.Replicas.forEach(replica => {
                reqParams.tf['replicas'].push({
                    'region_name': replica.RegionName,
                    'kms_key_arn': replica.KMSMasterKeyId
                });
                var ssespecification = null;
                if (replica.KMSMasterKeyId) {
                    ssespecification = {
                        'KMSMasterKeyId': replica.KMSMasterKeyId
                    }
                }
                var gsis = null;
                if (replica.GlobalSecondaryIndexes) {
                    gsis = [];
                    replica.GlobalSecondaryIndexes.forEach(gsi => {
                        gsis.push({
                            'IndexName': gsi.IndexName,
                            'ReadProvisionedThroughputSettings': gsi.ProvisionedThroughputOverride
                        });
                    });
                }
                reqParams.cfn['Replicas'].push({
                    'Region': replica.RegionName,
                    'SSESpecification': ssespecification,
                    'ReadProvisionedThroughputSettings': replica.ProvisionedThroughputOverride,
                    'GlobalSecondaryIndexes': gsis
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('dynamodb', obj.id, 'AWS::DynamoDB::GlobalTable'),
            'region': obj.region,
            'service': 'dynamodb',
            'type': 'AWS::DynamoDB::GlobalTable',
            'terraformType': 'aws_dynamodb_table',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.TableName,
                'GetAtt': {
                    'Arn': obj.data.TableArn,
                    'StreamArn': obj.data.LatestStreamArn
                }
            }
        });
    } else if (obj.type == "dynamodb.acceleratorcluster") {
        reqParams.cfn['ClusterName'] = obj.data.ClusterName;
        reqParams.tf['cluster_name'] = obj.data.ClusterName;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['NodeType'] = obj.data.NodeType;
        reqParams.tf['node_type'] = obj.data.NodeType;
        reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
        reqParams.tf['maintenance_window'] = obj.data.PreferredMaintenanceWindow;
        if (obj.data.NotificationConfiguration) {
            reqParams.cfn['NotificationTopicARN'] = obj.data.NotificationConfiguration.TopicArn;
            reqParams.tf['notification_topic_arn'] = obj.data.NotificationConfiguration.TopicArn;
        }
        reqParams.cfn['SubnetGroupName'] = obj.data.SubnetGroup;
        reqParams.tf['subnet_group_name'] = obj.data.SubnetGroup;
        if (obj.data.SecurityGroups) {
            reqParams.cfn['SecurityGroupIds'] = [];
            reqParams.tf['security_group_ids'] = [];
            obj.data.SecurityGroups.forEach(securityGroup => {
                reqParams.cfn['SecurityGroupIds'].push(securityGroup.SecurityGroupIdentifier);
                reqParams.tf['security_group_ids'].push(securityGroup.SecurityGroupIdentifier);
            });
        }
        reqParams.cfn['IAMRoleARN'] = obj.data.IamRoleArn;
        reqParams.tf['iam_role_arn'] = obj.data.IamRoleArn;
        if (obj.data.ParameterGroup) {
            reqParams.cfn['ParameterGroupName'] = obj.data.ParameterGroup.ParameterGroupName;
            reqParams.tf['parameter_group_name'] = obj.data.ParameterGroup.ParameterGroupName;
        }
        if (obj.data.SSEDescription) {
            reqParams.cfn['SSESpecification'] = {
                'SSEEnabled': (obj.data.SSEDescription.Status == "ENABLED")
            };
            reqParams.tf['server_side_encryption'] = {
                'enabled': (obj.data.SSEDescription.Status == "ENABLED")
            };
        }
        if (obj.data.Nodes) {
            reqParams.cfn['AvailabilityZones'] = [];
            reqParams.tf['availability_zones '] = [];
            obj.data.Nodes.forEach(node => {
                if (!reqParams.cfn['AvailabilityZones'].includes(node.AvailabilityZone)) {
                    reqParams.cfn['AvailabilityZones'].push(node.AvailabilityZone);
                    reqParams.tf['availability_zones '].push(node.AvailabilityZone);
                }
            });
        }

        /*
        TODO:
        ReplicationFactor: Integer
        Tags: { String:String, ... }
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('dynamodb', obj.id, 'AWS::DAX::Cluster'),
            'region': obj.region,
            'service': 'dynamodb',
            'type': 'AWS::DAX::Cluster',
            'terraformType': 'aws_dax_cluster',
            'options': reqParams
        });
    } else if (obj.type == "dynamodb.acceleratorparametergroup") {
        reqParams.cfn['ParameterGroupName'] = obj.data.ParameterGroupName;
        reqParams.tf['name'] = obj.data.ParameterGroupName;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        if (obj.data.Parameters) {
            reqParams.cfn['ParameterNameValues'] = {};
            reqParams.tf['parameters'] = [];
            obj.data.Parameters.forEach(parameter => {
                reqParams.cfn['ParameterNameValues'][parameter.ParameterName] = parameter.ParameterValue;
                reqParams.tf['parameters'].push({
                    'name': parameter.ParameterName,
                    'value': parameter.ParameterValue
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('dynamodb', obj.id, 'AWS::DAX::ParameterGroup'),
            'region': obj.region,
            'service': 'dynamodb',
            'type': 'AWS::DAX::ParameterGroup',
            'terraformType': 'aws_dax_parameter_group',
            'options': reqParams
        });
    } else if (obj.type == "dynamodb.acceleratorsubnetgroup") {
        reqParams.cfn['SubnetGroupName'] = obj.data.SubnetGroupName;
        reqParams.tf['name'] = obj.data.SubnetGroupName;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        if (obj.data.Subnets) {
            reqParams.cfn['SubnetIds'] = [];
            reqParams.tf['subnet_ids'] = [];
            obj.data.Subnets.forEach(subnet => {
                reqParams.cfn['SubnetIds'].push(subnet.SubnetIdentifier);
                reqParams.tf['subnet_ids'].push(subnet.SubnetIdentifier);
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('dynamodb', obj.id, 'AWS::DAX::SubnetGroup'),
            'region': obj.region,
            'service': 'dynamodb',
            'type': 'AWS::DAX::SubnetGroup',
            'terraformType': 'aws_dax_subnet_group',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
