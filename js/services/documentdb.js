/* ========================================================================== */
// DocumentDB
/* ========================================================================== */

sections.push({
    'category': 'Database',
    'service': 'DocumentDB',
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
                        field: 'engineversion',
                        title: 'Engine Version',
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
                        field: 'engineversion',
                        title: 'Engine Version',
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

async function updateDatatableDatabaseDocumentDB() {
    blockUI('#section-database-documentdb-clusters-datatable');
    blockUI('#section-database-documentdb-instances-datatable');
    blockUI('#section-database-documentdb-clusterparametergroups-datatable');
    blockUI('#section-database-documentdb-parametergroups-datatable');
    blockUI('#section-database-documentdb-subnetgroups-datatable');

    await sdkcall("DocDB", "describeDBClusters", {
        Filters: [{
            Name: 'engine',
            Values: ['docdb']
        }]
    }, true).then((data) => {
        $('#section-database-documentdb-clusters-datatable').deferredBootstrapTable('removeAll');

        data.DBClusters.forEach(cluster => {
            $('#section-database-documentdb-clusters-datatable').deferredBootstrapTable('append', [{
                f2id: cluster.DBClusterIdentifier,
                f2type: 'documentdb.cluster',
                f2data: cluster,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/docdb/home#cluster-details/' + cluster.DBClusterIdentifier,
                id: cluster.DBClusterIdentifier,
                engineversion: cluster.EngineVersion,
                endpoint: cluster.Endpoint,
                creationtime: cluster.ClusterCreateTime
            }]);
        });

        unblockUI('#section-database-documentdb-clusters-datatable');
    });

    await sdkcall("DocDB", "describeDBInstances", {
        Filters: [{
            Name: 'engine',
            Values: ['docdb']
        }]
    }, true).then((data) => {
        $('#section-database-documentdb-instances-datatable').deferredBootstrapTable('removeAll');

        data.DBInstances.forEach(instance => {
            $('#section-database-documentdb-instances-datatable').deferredBootstrapTable('append', [{
                f2id: instance.DBInstanceIdentifier,
                f2type: 'documentdb.instance',
                f2data: instance,
                f2region: region,
                id: instance.DBInstanceIdentifier,
                instanceclass: instance.DBInstanceClass,
                creationtime: instance.InstanceCreateTime,
                availabilityzone: instance.AvailabilityZone,
                engineversion: instance.EngineVersion
            }]);
        });

        unblockUI('#section-database-documentdb-instances-datatable');
    });

    await sdkcall("DocDB", "describeDBClusterParameterGroups", {
        Filters: [{
            Name: 'engine',
            Values: ['docdb']
        }]
    }, true).then(async (data) => {
        $('#section-database-documentdb-clusterparametergroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DBClusterParameterGroups.map(parameterGroup => {
            return sdkcall("DocDB", "describeDBClusterParameters", {
                DBClusterParameterGroupName: parameterGroup.DBClusterParameterGroupName,
                Source: 'user'
            }, true).then((paramdata) => {
                parameterGroup['Parameters'] = paramdata.Parameters;

                if (paramdata.Parameters.length) {
                    $('#section-database-documentdb-clusterparametergroups-datatable').deferredBootstrapTable('append', [{
                        f2id: parameterGroup.DBClusterParameterGroupArn,
                        f2type: 'documentdb.clusterparametergroup',
                        f2data: parameterGroup,
                        f2region: region,
                        name: parameterGroup.DBClusterParameterGroupName,
                        family: parameterGroup.DBParameterGroupFamily,
                        description: parameterGroup.Description
                    }]);
                }
            });
        }));

        unblockUI('#section-database-documentdb-clusterparametergroups-datatable');
    });

    await sdkcall("DocDB", "describeDBSubnetGroups", {
        Filters: [{
            Name: 'engine',
            Values: ['docdb']
        }]
    }, true).then((data) => {
        $('#section-database-documentdb-subnetgroups-datatable').deferredBootstrapTable('removeAll');

        data.DBSubnetGroups.forEach(subnetGroup => {
            $('#section-database-documentdb-subnetgroups-datatable').deferredBootstrapTable('append', [{
                f2id: subnetGroup.DBSubnetGroupArn,
                f2type: 'documentdb.subnetgroup',
                f2data: subnetGroup,
                f2region: region,
                name: subnetGroup.DBSubnetGroupName,
                description: subnetGroup.DBSubnetGroupDescription,
                vpcid: subnetGroup.VpcId
            }]);
        });

        unblockUI('#section-database-documentdb-subnetgroups-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "documentdb.cluster") {
        reqParams.cfn['AvailabilityZones'] = obj.data.AvailabilityZones;
        reqParams.tf['availability_zones'] = obj.data.AvailabilityZones;
        reqParams.cfn['BackupRetentionPeriod'] = obj.data.BackupRetentionPeriod;
        reqParams.tf['backup_retention_period'] = obj.data.BackupRetentionPeriod;
        reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;
        reqParams.tf['cluster_identifier'] = obj.data.DBClusterIdentifier;
        reqParams.cfn['DBClusterParameterGroupName'] = obj.data.DBClusterParameterGroup;
        reqParams.tf['db_cluster_parameter_group_name'] = obj.data.DBClusterParameterGroup;
        reqParams.cfn['DBSubnetGroupName'] = obj.data.DBClusterParameterGroupName;
        reqParams.tf['db_subnet_group_name'] = obj.data.DBClusterParameterGroupName;
        reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
        reqParams.tf['engine_version'] = obj.data.EngineVersion;
        reqParams.cfn['Port'] = obj.data.Port;
        reqParams.tf['port'] = obj.data.Port;
        reqParams.cfn['MasterUsername'] = obj.data.MasterUsername;
        reqParams.tf['master_username'] = obj.data.MasterUsername;
        reqParams.cfn['MasterUserPassword'] = 'REPLACEME';
        reqParams.tf['master_password'] = 'REPLACEME';
        reqParams.cfn['PreferredBackupWindow'] = obj.data.PreferredBackupWindow;
        reqParams.tf['preferred_backup_window'] = obj.data.PreferredBackupWindow;
        reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
        reqParams.tf['preferred_maintenance_window'] = obj.data.PreferredMaintenanceWindow;
        if (obj.data.VpcSecurityGroups) {
            reqParams.cfn['VpcSecurityGroupIds'] = [];
            reqParams.tf['vpc_security_group_ids'] = [];
            obj.data.VpcSecurityGroups.forEach(vpcSecurityGroup => {
                reqParams.cfn['VpcSecurityGroupIds'].push(vpcSecurityGroup['VpcSecurityGroupId']);
                reqParams.tf['vpc_security_group_ids'].push(vpcSecurityGroup['VpcSecurityGroupId']);
            });
        }
        reqParams.cfn['StorageEncrypted'] = obj.data.StorageEncrypted;
        reqParams.tf['storage_encrypted'] = obj.data.StorageEncrypted;
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        reqParams.tf['kms_key_id'] = obj.data.KmsKeyId;
        reqParams.cfn['EnableCloudwatchLogsExports'] = obj.data.EnabledCloudwatchLogsExports;

        /*
        TODO:
        SnapshotIdentifier: String
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('docdb', obj.id, 'AWS::DocDB::DBCluster'),
            'region': obj.region,
            'service': 'docdb',
            'type': 'AWS::DocDB::DBCluster',
            'terraformType': 'aws_docdb_cluster',
            'options': reqParams
        });
    } else if (obj.type == "documentdb.instance") {
        reqParams.cfn['DBInstanceIdentifier'] = obj.data.DBInstanceIdentifier;
        reqParams.tf['identifier'] = obj.data.DBInstanceIdentifier;
        reqParams.cfn['DBInstanceClass'] = obj.data.DBInstanceClass;
        reqParams.tf['instance_class'] = obj.data.DBInstanceClass;
        reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
        reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;
        reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
        reqParams.tf['preferred_maintenance_window'] = obj.data.PreferredMaintenanceWindow;
        reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
        reqParams.tf['auto_minor_version_upgrade'] = obj.data.AutoMinorVersionUpgrade;
        reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;
        reqParams.tf['cluster_identifier'] = obj.data.DBClusterIdentifier;

        /*
        TODO:
        Tags:
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('docdb', obj.id, 'AWS::DocDB::DBInstance'),
            'region': obj.region,
            'service': 'docdb',
            'type': 'AWS::DocDB::DBInstance',
            'terraformType': 'aws_docdb_cluster_instance',
            'options': reqParams
        });
    } else if (obj.type == "documentdb.clusterparametergroup") {
        reqParams.cfn['Name'] = obj.data.DBClusterParameterGroupName;
        reqParams.tf['name'] = obj.data.DBClusterParameterGroupName;
        reqParams.cfn['Family'] = obj.data.DBParameterGroupFamily;
        reqParams.tf['family'] = obj.data.DBParameterGroupFamily;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['Parameters'] = {};
        reqParams.tf['parameters'] = [];
        obj.data.Parameters.forEach(parameter => {
            reqParams.cfn['Parameters'][parameter.ParameterName] = parameter.ParameterValue;
            reqParams.tf['parameters'].push({
                'name': parameter.ParameterName,
                'value': parameter.ParameterValue
            });
        });

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('docdb', obj.id, 'AWS::DocDB::DBClusterParameterGroup'),
            'region': obj.region,
            'service': 'docdb',
            'type': 'AWS::DocDB::DBClusterParameterGroup',
            'terraformType': 'aws_docdb_cluster_parameter_group',
            'options': reqParams
        });
    } else if (obj.type == "documentdb.subnetgroup") {
        reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroupName;
        reqParams.tf['name'] = obj.data.DBSubnetGroupName;
        reqParams.cfn['DBSubnetGroupDescription'] = obj.data.DBSubnetGroupDescription;
        reqParams.tf['description'] = obj.data.DBSubnetGroupDescription;
        if (obj.data.Subnets) {
            reqParams.cfn['SubnetIds'] = [];
            reqParams.tf['subnet_ids'] = [];
            obj.data.Subnets.forEach(subnet => {
                reqParams.cfn['SubnetIds'].push(subnet.SubnetIdentifier);
                reqParams.tf['subnet_ids'].push(subnet.SubnetIdentifier);
            });
        }

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('docdb', obj.id, 'AWS::DocDB::DBSubnetGroup'),
            'region': obj.region,
            'service': 'docdb',
            'type': 'AWS::DocDB::DBSubnetGroup',
            'terraformType': 'aws_docdb_subnet_group',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
