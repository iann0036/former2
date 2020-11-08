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
        Filters: [{
            Name: 'engine',
            Values: ['neptune']
        }]
    }, true).then((data) => {
        $('#section-database-neptune-clusters-datatable').deferredBootstrapTable('removeAll');

        data.DBClusters.forEach(cluster => {
            $('#section-database-neptune-clusters-datatable').deferredBootstrapTable('append', [{
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
        Filters: [{
            Name: 'engine',
            Values: ['neptune']
        }]
    }, true).then((data) => {
        $('#section-database-neptune-instances-datatable').deferredBootstrapTable('removeAll');

        data.DBInstances.forEach(instance => {
            $('#section-database-neptune-instances-datatable').deferredBootstrapTable('append', [{
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
        Filters: [{
            Name: 'engine',
            Values: ['neptune']
        }]
    }, true).then(async (data) => {
        $('#section-database-neptune-clusterparametergroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DBClusterParameterGroups.map(parameterGroup => {
            return sdkcall("Neptune", "describeDBClusterParameters", {
                DBClusterParameterGroupName: parameterGroup.DBClusterParameterGroupName,
                Source: 'user'
            }, true).then((paramdata) => {
                parameterGroup['Parameters'] = paramdata.Parameters;

                if (paramdata.Parameters.length) {
                    $('#section-database-neptune-clusterparametergroups-datatable').deferredBootstrapTable('append', [{
                        f2id: parameterGroup.DBClusterParameterGroupArn,
                        f2type: 'neptune.clusterparametergroup',
                        f2data: parameterGroup,
                        f2region: region,
                        name: parameterGroup.DBClusterParameterGroupName,
                        family: parameterGroup.DBParameterGroupFamily,
                        description: parameterGroup.Description
                    }]);
                }
            });
        }));

        unblockUI('#section-database-neptune-clusterparametergroups-datatable');
    });

    await sdkcall("Neptune", "describeDBParameterGroups", {
        Filters: [{
            Name: 'engine',
            Values: ['neptune']
        }]
    }, true).then(async (data) => {
        $('#section-database-neptune-parametergroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DBParameterGroups.map(parameterGroup => {
            return sdkcall("Neptune", "describeDBParameters", {
                DBParameterGroupName: parameterGroup.DBParameterGroupName,
                Source: 'user'
            }, true).then((paramdata) => {
                parameterGroup['Parameters'] = paramdata.Parameters;

                if (paramdata.Parameters.length) {
                    $('#section-database-neptune-parametergroups-datatable').deferredBootstrapTable('append', [{
                        f2id: parameterGroup.DBParameterGroupArn,
                        f2type: 'neptune.parametergroup',
                        f2data: parameterGroup,
                        f2region: region,
                        name: parameterGroup.DBParameterGroupName,
                        family: parameterGroup.DBParameterGroupFamily,
                        description: parameterGroup.Description
                    }]);
                }
            });
        }));

        unblockUI('#section-database-neptune-parametergroups-datatable');
    });

    await sdkcall("Neptune", "describeDBSubnetGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-neptune-subnetgroups-datatable').deferredBootstrapTable('removeAll');

        data.DBSubnetGroups.forEach(subnetGroup => {
            $('#section-database-neptune-subnetgroups-datatable').deferredBootstrapTable('append', [{
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
    if (obj.type == "neptune.cluster") {
        reqParams.cfn['AvailabilityZones'] = obj.data.AvailabilityZones;
        reqParams.tf['availability_zones'] = obj.data.AvailabilityZones;
        reqParams.cfn['BackupRetentionPeriod'] = obj.data.BackupRetentionPeriod;
        reqParams.tf['backup_retention_period'] = obj.data.BackupRetentionPeriod;
        reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;
        reqParams.tf['cluster_identifier'] = obj.data.DBClusterIdentifier;
        reqParams.cfn['DBClusterParameterGroupName'] = obj.data.DBClusterParameterGroup;
        reqParams.tf['neptune_cluster_parameter_group_name'] = obj.data.DBClusterParameterGroup;
        reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroup;
        reqParams.tf['neptune_subnet_group_name'] = obj.data.DBSubnetGroup;
        reqParams.cfn['Port'] = obj.data.Port;
        reqParams.tf['port'] = obj.data.Port;
        reqParams.cfn['PreferredBackupWindow'] = obj.data.PreferredBackupWindow;
        reqParams.tf['preferred_backup_window'] = obj.data.PreferredBackupWindow;
        reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
        reqParams.tf['preferred_maintenance_window'] = obj.data.PreferredMaintenanceWindow;
        if (obj.data.VpcSecurityGroups) {
            reqParams.cfn['VpcSecurityGroupIds'] = [];
            reqParams.tf['vpc_security_group_ids'] = [];
            obj.data.VpcSecurityGroups.forEach(vpcSecurityGroup => {
                reqParams.cfn['VpcSecurityGroupIds'].push(vpcSecurityGroup.VpcSecurityGroupId);
                reqParams.tf['vpc_security_group_ids'].push(vpcSecurityGroup.VpcSecurityGroupId);
            });
        }
        reqParams.cfn['StorageEncrypted'] = obj.data.StorageEncrypted;
        reqParams.tf['storage_encrypted'] = obj.data.StorageEncrypted;
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        reqParams.tf['kms_key_arn'] = obj.data.KmsKeyId;
        reqParams.cfn['IamAuthEnabled'] = obj.data.IAMDatabaseAuthenticationEnabled;
        reqParams.tf['iam_database_authentication_enabled'] = obj.data.IAMDatabaseAuthenticationEnabled;
        reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
        reqParams.cfn['DeletionProtection'] = obj.data.DeletionProtection;
        reqParams.cfn['EnableCloudwatchLogsExports'] = obj.data.EnabledCloudwatchLogsExports;

        /*
        TODO:
        SnapshotIdentifier: String
        Tags:
            - Resource Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('neptune', obj.id, 'AWS::Neptune::DBCluster'),
            'region': obj.region,
            'service': 'neptune',
            'type': 'AWS::Neptune::DBCluster',
            'terraformType': 'aws_neptune_cluster',
            'options': reqParams
        });
    } else if (obj.type == "neptune.instance") {
        reqParams.cfn['DBInstanceIdentifier'] = obj.data.DBInstanceIdentifier;
        reqParams.tf['identifier'] = obj.data.DBInstanceIdentifier;
        reqParams.cfn['DBInstanceClass'] = obj.data.DBInstanceClass;
        reqParams.tf['instance_class'] = obj.data.DBInstanceClass;
        reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
        reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;
        if (obj.data.DBSubnetGroup) {
            reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroup.DBSubnetGroupName;
            reqParams.tf['neptune_subnet_group_name'] = obj.data.DBSubnetGroup.DBSubnetGroupName;
        }
        reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
        reqParams.tf['preferred_maintenance_window'] = obj.data.PreferredMaintenanceWindow;
        reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
        reqParams.tf['auto_minor_version_upgrade'] = obj.data.AutoMinorVersionUpgrade;
        reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;
        reqParams.tf['cluster_identifier'] = obj.data.DBClusterIdentifier;

        /*
        TODO:
        AllowMajorVersionUpgrade: Boolean
        DBParameterGroupName: String
        DBSnapshotIdentifier: String
        Tags:
            Resource Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('neptune', obj.id, 'AWS::Neptune::DBInstance'),
            'region': obj.region,
            'service': 'neptune',
            'type': 'AWS::Neptune::DBInstance',
            'terraformType': 'aws_neptune_cluster_instance',
            'options': reqParams
        });
    } else if (obj.type == "neptune.clusterparametergroup") {
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
            Resource Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('neptune', obj.id, 'AWS::Neptune::DBClusterParameterGroup'),
            'region': obj.region,
            'service': 'neptune',
            'type': 'AWS::Neptune::DBClusterParameterGroup',
            'terraformType': 'aws_neptune_cluster_parameter_group',
            'options': reqParams
        });
    } else if (obj.type == "neptune.parametergroup") {
        reqParams.cfn['Name'] = obj.data.DBParameterGroupName;
        reqParams.tf['name'] = obj.data.DBParameterGroupName;
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
            Resource Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('neptune', obj.id, 'AWS::Neptune::DBParameterGroup'),
            'region': obj.region,
            'service': 'neptune',
            'type': 'AWS::Neptune::DBParameterGroup',
            'terraformType': 'aws_neptune_parameter_group',
            'options': reqParams
        });
    } else if (obj.type == "neptune.subnetgroup") {
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
            - Resource Tag 
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('neptune', obj.id, 'AWS::Neptune::DBSubnetGroup'),
            'region': obj.region,
            'service': 'neptune',
            'type': 'AWS::Neptune::DBSubnetGroup',
            'terraformType': 'aws_neptune_subnet_group',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
