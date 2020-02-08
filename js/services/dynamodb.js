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
    blockUI('#section-database-dynamodb-acceleratorclusters-datatable');
    blockUI('#section-database-dynamodb-acceleratorparametergroups-datatable');
    blockUI('#section-database-dynamodb-acceleratorsubnetgroups-datatable');
    blockUI('#section-database-dynamodb-applicationautoscalingscalabletargets-datatable');
    blockUI('#section-database-dynamodb-applicationautoscalingscalingpolicies-datatable');

    await sdkcall("DynamoDB", "listTables", {
        // no params
    }, true).then(async (data) => {
        $('#section-database-dynamodb-tables-datatable').bootstrapTable('removeAll');

        await Promise.all(data.TableNames.map(tableName => {
            return sdkcall("DynamoDB", "describeTable", {
                TableName: tableName
            }, true).then((data) => {
                $('#section-database-dynamodb-tables-datatable').bootstrapTable('append', [{
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
            });
        }));

        unblockUI('#section-database-dynamodb-tables-datatable');
    });

    await sdkcall("DAX", "describeClusters", {
        // no params
    }, true).then((data) => {
        $('#section-database-dynamodb-acceleratorclusters-datatable').bootstrapTable('removeAll');

        data.Clusters.forEach(cluster => {
            $('#section-database-dynamodb-acceleratorclusters-datatable').bootstrapTable('append', [{
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
        $('#section-database-dynamodb-acceleratorparametergroups-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ParameterGroups.map(parameterGroup => {
            return sdkcall("DAX", "describeParameters", {
                ParameterGroupName: parameterGroup.ParameterGroupName
            }, true).then((data) => {
                parameterGroup['Parameters'] = data.Parameters;
                $('#section-database-dynamodb-acceleratorparametergroups-datatable').bootstrapTable('append', [{
                    f2id: parameterGroup.ParameterGroupName,
                    f2type: 'dynamodb.acceleratorparametergroup',
                    f2data: parameterGroup,
                    f2region: region,
                    name: parameterGroup.ParameterGroupName,
                    description: parameterGroup.Description
                }]);
            });
        }));

        unblockUI('#section-database-dynamodb-acceleratorparametergroups-datatable');
    });

    await sdkcall("DAX", "describeSubnetGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-dynamodb-acceleratorsubnetgroups-datatable').bootstrapTable('removeAll');

        data.SubnetGroups.forEach(subnetGroup => {
            $('#section-database-dynamodb-acceleratorsubnetgroups-datatable').bootstrapTable('append', [{
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
        $('#section-database-dynamodb-applicationautoscalingscalabletargets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ScalableTargets.map(target => {
            return sdkcall("ApplicationAutoScaling", "describeScheduledActions", {
                ServiceNamespace: "dynamodb",
                ResourceId: target.ResourceId,
                ScalableDimension: target.ScalableDimension
            }, true).then((actions) => {
                target['ScheduledActions'] = actions.ScheduledActions;

                $('#section-database-dynamodb-applicationautoscalingscalabletargets-datatable').bootstrapTable('append', [{
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
        $('#section-database-dynamodb-applicationautoscalingscalingpolicies-datatable').bootstrapTable('removeAll');

        if (data.ScalableTargets) {
            data.ScalableTargets.forEach(target => {
                $('#section-database-dynamodb-applicationautoscalingscalingpolicies-datatable').bootstrapTable('append', [{
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
