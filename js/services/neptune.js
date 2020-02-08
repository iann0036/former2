/* ========================================================================== */
// Neptune
/* ========================================================================== */

sections.push({
    'category': 'Database',
    'service': 'Neptune',
    'resourcetypes': {
        'Clusters': {
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
                        field: 'databasename',
                        title: 'Database Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'endpoint',
                        title: 'Endpoint',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'port',
                        title: 'Port',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Instances': {
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
                        field: 'instanceclass',
                        title: 'Instance Class',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'availabilityzone',
                        title: 'Availability Zone',
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
        'Cluster Parameter Groups': {
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
                        field: 'family',
                        title: 'Family',
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
        'Parameter Groups': {
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
                        field: 'family',
                        title: 'Family',
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
        'Subnet Groups': {
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
        }
    }
});

async function updateDatatableDatabaseNeptune() {
    blockUI('#section-database-neptune-clusters-datatable');
    blockUI('#section-database-neptune-instances-datatable');
    blockUI('#section-database-neptune-clusterparametergroups-datatable');
    blockUI('#section-database-neptune-parametergroups-datatable');
    blockUI('#section-database-neptune-subnetgroups-datatable');

    await sdkcall("Neptune", "describeDBClusters", {
        // no params
    }, true).then((data) => {
        $('#section-database-neptune-clusters-datatable').bootstrapTable('removeAll');

        data.DBClusters.forEach(cluster => {
            $('#section-database-neptune-clusters-datatable').bootstrapTable('append', [{
                f2id: cluster.DBClusterIdentifier,
                f2type: 'neptune.cluster',
                f2data: cluster,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/neptune/home#cluster:ids=' + cluster.DBClusterIdentifier,
                id: cluster.DBClusterIdentifier,
                databasename: cluster.DatabaseName,
                endpoint: cluster.Endpoint,
                port: cluster.Port
            }]);
        });

        unblockUI('#section-database-neptune-clusters-datatable');
    });

    await sdkcall("Neptune", "describeDBInstances", {
        // no params
    }, true).then((data) => {
        $('#section-database-neptune-instances-datatable').bootstrapTable('removeAll');

        data.DBInstances.forEach(instance => {
            $('#section-database-neptune-instances-datatable').bootstrapTable('append', [{
                f2id: instance.DBInstanceIdentifier,
                f2type: 'neptune.instance',
                f2data: instance,
                f2region: region,
                id: instance.DBInstanceIdentifier,
                instanceclass: instance.DBInstanceClass,
                creationtime: instance.InstanceCreateTime,
                availabilityzone: instance.AvailabilityZone
            }]);
        });

        unblockUI('#section-database-neptune-instances-datatable');
    });

    await sdkcall("Neptune", "describeDBClusterParameterGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-neptune-clusterparametergroups-datatable').bootstrapTable('removeAll');

        data.DBClusterParameterGroups.forEach(clusterParameterGroup => {
            $('#section-database-neptune-clusterparametergroups-datatable').bootstrapTable('append', [{
                f2id: clusterParameterGroup.DBClusterParameterGroupArn,
                f2type: 'neptune.clusterparametergroup',
                f2data: clusterParameterGroup,
                f2region: region,
                name: clusterParameterGroup.DBClusterParameterGroupName,
                family: clusterParameterGroup.DBParameterGroupFamily,
                description: clusterParameterGroup.Description
            }]);
        });

        unblockUI('#section-database-neptune-clusterparametergroups-datatable');
    });

    await sdkcall("Neptune", "describeDBParameterGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-neptune-parametergroups-datatable').bootstrapTable('removeAll');

        data.DBParameterGroups.forEach(parameterGroup => {
            $('#section-database-neptune-parametergroups-datatable').bootstrapTable('append', [{
                f2id: parameterGroup.DBParameterGroupArn,
                f2type: 'neptune.parametergroup',
                f2data: parameterGroup,
                f2region: region,
                name: parameterGroup.DBParameterGroupName,
                family: parameterGroup.DBParameterGroupFamily,
                description: parameterGroup.Description
            }]);
        });

        unblockUI('#section-database-neptune-parametergroups-datatable');
    });

    await sdkcall("Neptune", "describeDBSubnetGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-neptune-subnetgroups-datatable').bootstrapTable('removeAll');

        data.DBSubnetGroups.forEach(subnetGroup => {
            $('#section-database-neptune-subnetgroups-datatable').bootstrapTable('append', [{
                f2id: subnetGroup.DBSubnetGroupArn,
                f2type: 'neptune.subnetgroup',
                f2data: subnetGroup,
                f2region: region,
                name: subnetGroup.DBSubnetGroupName,
                description: subnetGroup.DBSubnetGroupDescription,
                vpcid: subnetGroup.VpcId
            }]);
        });

        unblockUI('#section-database-neptune-subnetgroups-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
