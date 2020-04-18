/* ========================================================================== */
// RDS
/* ========================================================================== */

sections.push({
    'category': 'Database',
    'service': 'RDS',
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
                        title: 'Cluster ID',
                        field: 'clusterid',
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
                        field: 'engine',
                        title: 'Engine',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'enginemode',
                        title: 'Engine Mode',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'allocatedstorage',
                        title: 'Allocated Storage',
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
                        title: 'Instance ID',
                        field: 'instanceid',
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
                        field: 'engine',
                        title: 'Engine',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'instanceclass',
                        title: 'Instance Class',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'dbname',
                        title: 'Database Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'allocatedstorage',
                        title: 'Allocated Storage',
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
        'Option Groups': {
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
                        field: 'enginename',
                        title: 'Engine Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'majorengineversion',
                        title: 'Major Engine Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Security Groups': {
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
        'Event Subscriptions': {
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
                        title: 'ARN',
                        field: 'arn',
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
                        field: 'snstopicarn',
                        title: 'SNS Topic ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'sourcetype',
                        title: 'Source Type',
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

async function updateDatatableDatabaseRDS() {
    blockUI('#section-database-rds-clusters-datatable');
    blockUI('#section-database-rds-instances-datatable');
    blockUI('#section-database-rds-subnetgroups-datatable');
    blockUI('#section-database-rds-clusterparametergroups-datatable');
    blockUI('#section-database-rds-parametergroups-datatable');
    blockUI('#section-database-rds-optiongroups-datatable');
    blockUI('#section-database-rds-securitygroups-datatable');
    blockUI('#section-database-rds-eventsubscriptions-datatable');
    blockUI('#section-database-rds-applicationautoscalingscalabletargets-datatable');
    blockUI('#section-database-rds-applicationautoscalingscalingpolicies-datatable');

    await sdkcall("RDS", "describeDBClusters", {
        // no params
    }, true).then((data) => {
        $('#section-database-rds-clusters-datatable').bootstrapTable('removeAll');

        data.DBClusters.forEach(dbCluster => {
            $('#section-database-rds-clusters-datatable').deferredBootstrapTable('append', [{
                f2id: dbCluster.DBClusterIdentifier,
                f2type: 'rds.cluster',
                f2data: dbCluster,
                f2region: region,
                clusterid: dbCluster.DBClusterIdentifier,
                databasename: dbCluster.DatabaseName,
                engine: dbCluster.Engine,
                enginemode: dbCluster.EngineMode,
                allocatedstorage: (dbCluster.AllocatedStorage == 1) ? "&infin;" : dbCluster.AllocatedStorage + " GB"
            }]);
        });

        unblockUI('#section-database-rds-clusters-datatable');
    });

    await sdkcall("RDS", "describeDBInstances", {
        // no params
    }, true).then((data) => {
        $('#section-database-rds-instances-datatable').bootstrapTable('removeAll');

        data.DBInstances.forEach(dbInstance => {
            $('#section-database-rds-instances-datatable').deferredBootstrapTable('append', [{
                f2id: dbInstance.DBInstanceIdentifier,
                f2type: 'rds.instance',
                f2data: dbInstance,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/rds/home?region=' + region + '#dbinstance:id=' + dbInstance.DBInstanceIdentifier,
                instanceid: dbInstance.DBInstanceIdentifier,
                engine: dbInstance.Engine,
                instanceclass: dbInstance.DBInstanceClass,
                dbname: dbInstance.DBName,
                allocatedstorage: (dbInstance.AllocatedStorage == 1) ? "&infin;" : dbInstance.AllocatedStorage + " GB"
            }]);
        });

        unblockUI('#section-database-rds-instances-datatable');
    });

    await sdkcall("RDS", "describeDBSubnetGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-rds-subnetgroups-datatable').bootstrapTable('removeAll');

        data.DBSubnetGroups.forEach(subnetGroup => {
            $('#section-database-rds-subnetgroups-datatable').deferredBootstrapTable('append', [{
                f2id: subnetGroup.DBSubnetGroupArn,
                f2type: 'rds.subnetgroup',
                f2data: subnetGroup,
                f2region: region,
                name: subnetGroup.DBSubnetGroupName,
                description: subnetGroup.DBSubnetGroupDescription,
                vpcid: subnetGroup.VpcId
            }]);
        });

        unblockUI('#section-database-rds-subnetgroups-datatable');
    });

    await sdkcall("RDS", "describeDBParameterGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-rds-parametergroups-datatable').bootstrapTable('removeAll');

        data.DBParameterGroups.forEach(parameterGroup => {
            $('#section-database-rds-parametergroups-datatable').deferredBootstrapTable('append', [{
                f2id: parameterGroup.DBParameterGroupArn,
                f2type: 'rds.parametergroup',
                f2data: parameterGroup,
                f2region: region,
                name: parameterGroup.DBParameterGroupName,
                family: parameterGroup.DBParameterGroupFamily,
                description: parameterGroup.Description
            }]);
        });

        unblockUI('#section-database-rds-parametergroups-datatable');
    });

    await sdkcall("RDS", "describeDBClusterParameterGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-rds-clusterparametergroups-datatable').bootstrapTable('removeAll');

        data.DBClusterParameterGroups.forEach(parameterGroup => {
            $('#section-database-rds-clusterparametergroups-datatable').deferredBootstrapTable('append', [{
                f2id: parameterGroup.DBClusterParameterGroupName,
                f2type: 'rds.clusterparametergroup',
                f2data: parameterGroup,
                f2region: region,
                name: parameterGroup.DBClusterParameterGroupName,
                family: parameterGroup.DBParameterGroupFamily,
                description: parameterGroup.Description
            }]);
        });

        unblockUI('#section-database-rds-clusterparametergroups-datatable');
    });

    await sdkcall("RDS", "describeOptionGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-rds-optiongroups-datatable').bootstrapTable('removeAll');

        data.OptionGroupsList.forEach(optionGroup => {
            $('#section-database-rds-optiongroups-datatable').deferredBootstrapTable('append', [{
                f2id: optionGroup.OptionGroupName,
                f2type: 'rds.optiongroup',
                f2data: optionGroup,
                f2region: region,
                name: optionGroup.OptionGroupName,
                description: optionGroup.OptionGroupDescription,
                enginename: optionGroup.EngineName,
                majorengineversion: optionGroup.MajorEngineVersion
            }]);
        });

        unblockUI('#section-database-rds-optiongroups-datatable');
    });

    await sdkcall("RDS", "describeDBSecurityGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-rds-securitygroups-datatable').bootstrapTable('removeAll');

        data.DBSecurityGroups.forEach(securityGroup => {
            $('#section-database-rds-securitygroups-datatable').deferredBootstrapTable('append', [{
                f2id: securityGroup.DBSecurityGroupName,
                f2type: 'rds.securitygroup',
                f2data: securityGroup,
                f2region: region,
                name: securityGroup.DBSecurityGroupName,
                description: securityGroup.DBSecurityGroupDescription,
                vpcid: securityGroup.VpcId
            }]);
        });

        unblockUI('#section-database-rds-securitygroups-datatable');
    });

    await sdkcall("RDS", "describeEventSubscriptions", {
        // no params
    }, true).then((data) => {
        $('#section-database-rds-eventsubscriptions-datatable').bootstrapTable('removeAll');

        data.EventSubscriptionsList.forEach(eventSubscriptions => {
            $('#section-database-rds-eventsubscriptions-datatable').deferredBootstrapTable('append', [{
                f2id: eventSubscriptions.EventSubscriptionArn,
                f2type: 'rds.eventsubscription',
                f2data: eventSubscriptions,
                f2region: region,
                arn: eventSubscriptions.EventSubscriptionArn,
                snstopicarn: eventSubscriptions.SnsTopicArn,
                sourcetype: eventSubscriptions.SourceType,
                creationtime: eventSubscriptions.SubscriptionCreationTime
            }]);
        });

        unblockUI('#section-database-rds-eventsubscriptions-datatable');
    });

    await sdkcall("ApplicationAutoScaling", "describeScalableTargets", {
        ServiceNamespace: "rds"
    }, true).then(async (data) => {
        $('#section-database-rds-applicationautoscalingscalabletargets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ScalableTargets.map(target => {
            return sdkcall("ApplicationAutoScaling", "describeScheduledActions", {
                ServiceNamespace: "rds",
                ResourceId: target.ResourceId,
                ScalableDimension: target.ScalableDimension
            }, true).then((actions) => {
                target['ScheduledActions'] = actions.ScheduledActions;

                $('#section-database-rds-applicationautoscalingscalabletargets-datatable').deferredBootstrapTable('append', [{
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

        unblockUI('#section-database-rds-applicationautoscalingscalabletargets-datatable');
    });

    await sdkcall("ApplicationAutoScaling", "describeScalingPolicies", {
        ServiceNamespace: "rds"
    }, true).then(async (data) => {
        $('#section-database-rds-applicationautoscalingscalingpolicies-datatable').bootstrapTable('removeAll');

        if (data.ScalableTargets) {
            data.ScalableTargets.forEach(target => {
                $('#section-database-rds-applicationautoscalingscalingpolicies-datatable').deferredBootstrapTable('append', [{
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

        unblockUI('#section-database-rds-applicationautoscalingscalingpolicies-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "rds.cluster") {
        reqParams.cfn['AvailabilityZones'] = obj.data.AvailabilityZones;
        reqParams.tf['availability_zones'] = obj.data.AvailabilityZones;
        reqParams.cfn['BackupRetentionPeriod'] = obj.data.BackupRetentionPeriod;
        reqParams.tf['backup_retention_period'] = obj.data.BackupRetentionPeriod;
        reqParams.cfn['DatabaseName'] = obj.data.DatabaseName;
        reqParams.tf['database_name'] = obj.data.DatabaseName;
        reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;
        reqParams.tf['cluster_identifier'] = obj.data.DBClusterIdentifier;
        reqParams.cfn['DBClusterParameterGroup'] = obj.data.DBClusterParameterGroup;
        reqParams.tf['db_cluster_parameter_group_name'] = obj.data.DBClusterParameterGroup;
        reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroup;
        reqParams.tf['db_subnet_group_name'] = obj.data.DBSubnetGroup;
        reqParams.cfn['Engine'] = obj.data.Engine;
        reqParams.tf['engine'] = obj.data.Engine;
        reqParams.cfn['Port'] = obj.data.Port;
        reqParams.tf['port'] = obj.data.Port;
        reqParams.cfn['MasterUsername'] = obj.data.MasterUsername;
        reqParams.tf['master_username'] = obj.data.MasterUsername;
        reqParams.cfn['MasterUserPassword'] = "REPLACEME";
        reqParams.tf['master_password'] = "REPLACEME";
        reqParams.cfn['PreferredBackupWindow'] = obj.data.PreferredBackupWindow;
        reqParams.tf['preferred_backup_window'] = obj.data.PreferredBackupWindow;
        reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
        reqParams.tf['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
        reqParams.cfn['ReplicationSourceIdentifier'] = obj.data.ReplicationSourceIdentifier;
        reqParams.tf['replication_source_identifier'] = obj.data.ReplicationSourceIdentifier;
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
        reqParams.tf['kms_key_id'] = obj.data.KmsKeyId;
        reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
        reqParams.tf['engine_version'] = obj.data.EngineVersion;
        reqParams.cfn['EnableIAMDatabaseAuthentication'] = obj.data.IAMDatabaseAuthenticationEnabled;
        reqParams.tf['iam_database_authentication_enabled'] = obj.data.IAMDatabaseAuthenticationEnabled;
        reqParams.cfn['BacktrackWindow'] = obj.data.BacktrackWindow;
        reqParams.tf['backtrack_window'] = obj.data.BacktrackWindow;
        reqParams.cfn['EnableCloudwatchLogsExports'] = obj.data.EnabledCloudwatchLogsExports; // TODO: WTF? Lol.
        reqParams.tf['enabled_cloudwatch_logs_exports'] = obj.data.EnabledCloudwatchLogsExports;
        reqParams.cfn['EngineMode'] = obj.data.EngineMode;
        reqParams.tf['engine_mode'] = obj.data.EngineMode;
        if (obj.data.ScalingConfigurationInfo) {
            reqParams.cfn['ScalingConfiguration'] = {
                'MinCapacity': obj.data.ScalingConfigurationInfo.MinCapacity,
                'MaxCapacity': obj.data.ScalingConfigurationInfo.MaxCapacity,
                'AutoPause': obj.data.ScalingConfigurationInfo.AutoPause,
                'SecondsUntilAutoPause': obj.data.ScalingConfigurationInfo.SecondsUntilAutoPause
            };
            reqParams.tf['scaling_configuration'] = {
                'min_capacity': obj.data.ScalingConfigurationInfo.MinCapacity,
                'max_capacity': obj.data.ScalingConfigurationInfo.MaxCapacity,
                'auto_pause': obj.data.ScalingConfigurationInfo.AutoPause,
                'seconds_until_auto_pause': obj.data.ScalingConfigurationInfo.SecondsUntilAutoPause
            };
        }
        reqParams.cfn['DeletionProtection'] = obj.data.DeletionProtection;
        reqParams.tf['deletion_protection'] = obj.data.DeletionProtection;
        if (obj.data.AssociatedRoles) {
            reqParams.cfn['AssociatedRoles'] = [];
            obj.data.AssociatedRoles.forEach(associatedRole => {
                reqParams.cfn['AssociatedRoles'].push({
                    'RoleArn': associatedRole.RoleArn,
                    'FeatureName': associatedRole.FeatureName
                });
            });
        }
        reqParams.cfn['EnableHttpEndpoint'] = obj.data.HttpEndpointEnabled;
        if (obj.data.AssociatedRoles) {
            reqParams.cfn['AssociatedRoles'] = [];
            obj.data.AssociatedRoles.forEach(associatedRole => {
                reqParams.cfn['AssociatedRoles'].push({
                    'FeatureName': associatedRole.FeatureName,
                    'RoleArn': associatedRole.RoleArn
                });
            });
        }
        

        /*
        TODO:
        RestoreType: String
        SnapshotIdentifier: String
        SourceDBClusterIdentifier: String
        SourceRegion: String
        Tags: 
            - Tag
        UseLatestRestorableTime: Boolean
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('rds', obj.id, 'AWS::RDS::DBCluster'),
            'region': obj.region,
            'service': 'rds',
            'type': 'AWS::RDS::DBCluster',
            'terraformType': 'aws_rds_cluster',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.DBClusterIdentifier,
                'GetAtt': {
                    'Endpoint.Address': obj.data.Endpoint,
                    'Endpoint.Port': obj.data.Port,
                    'ReadEndpoint.Address': obj.data.ReaderEndpoint
                },
                'Import': {
                    'DBClusterIdentifier': obj.data.DBClusterIdentifier
                }
            }
        });
    } else if (obj.type == "rds.instance") {
        reqParams.cfn['DBInstanceIdentifier'] = obj.data.DBInstanceIdentifier;
        reqParams.tf['identifier'] = obj.data.DBInstanceIdentifier;
        reqParams.cfn['AllocatedStorage'] = obj.data.AllocatedStorage;
        reqParams.tf['allocated_storage'] = obj.data.AllocatedStorage;
        reqParams.cfn['DBInstanceClass'] = obj.data.DBInstanceClass;
        reqParams.tf['instance_class'] = obj.data.DBInstanceClass;
        reqParams.cfn['Engine'] = obj.data.Engine;
        reqParams.tf['engine'] = obj.data.Engine;
        reqParams.cfn['MasterUsername'] = obj.data.MasterUsername;
        reqParams.tf['username'] = obj.data.MasterUsername;
        reqParams.cfn['MasterUserPassword'] = 'REPLACEME';
        reqParams.tf['password'] = 'REPLACEME';
        reqParams.cfn['DBName'] = obj.data.DBName;
        reqParams.tf['name'] = obj.data.DBName;
        reqParams.cfn['PreferredBackupWindow'] = obj.data.PreferredBackupWindow;
        reqParams.tf['backup_window'] = obj.data.PreferredBackupWindow;
        reqParams.cfn['BackupRetentionPeriod'] = obj.data.BackupRetentionPeriod;
        reqParams.tf['backup_retention_period'] = obj.data.BackupRetentionPeriod;
        reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
        reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;
        reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
        reqParams.tf['maintenance_window'] = obj.data.PreferredMaintenanceWindow;
        reqParams.cfn['MultiAZ'] = obj.data.MultiAZ;
        reqParams.tf['multi_az'] = obj.data.MultiAZ;
        reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
        reqParams.tf['engine_version'] = obj.data.EngineVersion;
        reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
        reqParams.tf['auto_minor_version_upgrade'] = obj.data.AutoMinorVersionUpgrade;
        reqParams.cfn['LicenseModel'] = obj.data.LicenseModel;
        reqParams.tf['license_model'] = obj.data.LicenseModel;
        reqParams.cfn['Iops'] = obj.data.Iops;
        reqParams.tf['iops'] = obj.data.Iops;
        reqParams.cfn['CharacterSetName'] = obj.data.CharacterSetName;
        reqParams.tf['character_set_name'] = obj.data.CharacterSetName;
        reqParams.cfn['PubliclyAccessible'] = obj.data.PubliclyAccessible;
        reqParams.tf['publicly_accessible'] = obj.data.PubliclyAccessible;
        reqParams.cfn['StorageType'] = obj.data.StorageType;
        reqParams.tf['storage_type'] = obj.data.StorageType;
        reqParams.cfn['Port'] = obj.data.Endpoint.Port;
        reqParams.tf['port'] = obj.data.Endpoint.Port;
        reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;
        reqParams.tf['cluster_identifier'] = obj.data.DBClusterIdentifier;
        reqParams.cfn['StorageEncrypted'] = obj.data.StorageEncrypted;
        reqParams.tf['storage_encrypted'] = obj.data.StorageEncrypted;
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        reqParams.tf['kms_key_id'] = obj.data.KmsKeyId;
        reqParams.cfn['CopyTagsToSnapshot'] = obj.data.CopyTagsToSnapshot;
        reqParams.tf['copy_tags_to_snapshot'] = obj.data.CopyTagsToSnapshot;
        reqParams.cfn['MonitoringInterval'] = obj.data.MonitoringInterval;
        reqParams.tf['monitoring_interval'] = obj.data.MonitoringInterval;
        reqParams.cfn['PromotionTier'] = obj.data.PromotionTier;
        reqParams.cfn['Timezone'] = obj.data.Timezone;
        reqParams.tf['timezone'] = obj.data.Timezone;
        reqParams.cfn['EnableIAMDatabaseAuthentication'] = obj.data.IAMDatabaseAuthenticationEnabled;
        reqParams.tf['iam_database_authentication_enabled'] = obj.data.IAMDatabaseAuthenticationEnabled;
        reqParams.cfn['EnablePerformanceInsights'] = obj.data.PerformanceInsightsEnabled;
        reqParams.cfn['PerformanceInsightsKMSKeyId'] = obj.data.PerformanceInsightsKMSKeyId;
        reqParams.cfn['PerformanceInsightsRetentionPeriod'] = obj.data.PerformanceInsightsRetentionPeriod;
        reqParams.cfn['DeletionProtection'] = obj.data.DeletionProtection;
        reqParams.tf['deletion_protection'] = obj.data.DeletionProtection;
        reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroup.DBSubnetGroupName;
        reqParams.tf['db_subnet_group_name'] = obj.data.DBSubnetGroup.DBSubnetGroupName;
        reqParams.cfn['ProcessorFeatures'] = obj.data.ProcessorFeatures;
        if (obj.data.DBSecurityGroups) {
            reqParams.cfn['DBSecurityGroups'] = [];
            reqParams.tf['security_group_names'] = [];
            obj.data.DBSecurityGroups.forEach(dbSecurityGroup => {
                reqParams.cfn['DBSecurityGroups'].push(dbSecurityGroup.DBSecurityGroupName);
                reqParams.tf['security_group_names'].push(dbSecurityGroup.DBSecurityGroupName);
            });
        }
        if (obj.data.VpcSecurityGroups) {
            reqParams.cfn['VPCSecurityGroups'] = [];
            reqParams.tf['vpc_security_group_ids'] = [];
            obj.data.VpcSecurityGroups.forEach(vpcSecurityGroup => {
                reqParams.cfn['VPCSecurityGroups'].push(vpcSecurityGroup.VpcSecurityGroupId);
                reqParams.tf['vpc_security_group_ids'].push(vpcSecurityGroup.VpcSecurityGroupId);
            });
        }
        reqParams.cfn['MaxAllocatedStorage'] = obj.data.MaxAllocatedStorage;
        reqParams.tf['max_allocated_storage'] = obj.data.MaxAllocatedStorage;
        if (obj.data.DBParameterGroups && obj.data.DBParameterGroups.length > 0) {
            reqParams.cfn['DBParameterGroupName'] = obj.data.DBParameterGroups[0].DBParameterGroupName;
        }
        if (obj.data.OptionGroupMemberships && obj.data.OptionGroupMemberships.length > 0) {
            reqParams.cfn['OptionGroupName'] = obj.data.OptionGroupMemberships[0].OptionGroupName;
        }
        if (obj.data.DomainMemberships && obj.data.DomainMemberships.length > 0) {
            reqParams.cfn['Domain'] = obj.data.DomainMemberships[0].Domain;
            reqParams.cfn['DomainIAMRoleName'] = obj.data.DomainMemberships[0].IAMRoleName;
        }
        reqParams.cfn['MonitoringRoleArn'] = obj.data.MonitoringRoleArn;
        reqParams.cfn['EnableCloudwatchLogsExports'] = obj.data.EnabledCloudwatchLogsExports;
        if (obj.data.AssociatedRoles) {
            reqParams.cfn['AssociatedRoles'] = [];
            obj.data.AssociatedRoles.forEach(associatedRole => {
                reqParams.cfn['AssociatedRoles'].push({
                    'RoleArn': associatedRole.RoleArn,
                    'FeatureName': associatedRole.FeatureName
                });
            });
        }
        reqParams.cfn['CACertificateIdentifier'] = obj.data.CACertificateIdentifier;
        if (obj.data.AssociatedRoles) {
            reqParams.cfn['AssociatedRoles'] = [];
            obj.data.AssociatedRoles.forEach(associatedRole => {
                reqParams.cfn['AssociatedRoles'].push({
                    'FeatureName': associatedRole.FeatureName,
                    'RoleArn': associatedRole.RoleArn
                });
            });
        }

        /*
        TODO:
        AllowMajorVersionUpgrade: Boolean
        DBSnapshotIdentifier: String
        DeleteAutomatedBackups: Boolean
        SourceDBInstanceIdentifier: String
        SourceRegion: String
        Tags: 
            - Tag
        UseDefaultProcessorFeatures: Boolean
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('rds', obj.id, 'AWS::RDS::DBInstance'),
            'region': obj.region,
            'service': 'rds',
            'type': 'AWS::RDS::DBInstance',
            'terraformType': (obj.data.DBClusterIdentifier && obj.data.DBClusterIdentifier != "") ? 'aws_db_instance' : 'aws_rds_cluster_instance',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.DBInstanceIdentifier,
                'GetAtt': {
                    'Endpoint.Address': obj.data.Endpoint.Address,
                    'Endpoint.Port': obj.data.Endpoint.Port
                },
                'Import': {
                    'DBInstanceIdentifier': obj.data.DBInstanceIdentifier
                }
            }
        });
    } else if (obj.type == "rds.eventsubscription") {
        reqParams.cfn['SourceType'] = obj.data.SourceType;
        reqParams.tf['source_type'] = obj.data.SourceType;
        reqParams.cfn['SnsTopicArn'] = obj.data.SnsTopicArn;
        reqParams.tf['sns_topic'] = obj.data.SnsTopicArn;
        reqParams.cfn['SourceIds'] = obj.data.SourceIdsList;
        reqParams.tf['source_ids'] = obj.data.SourceIdsList;
        reqParams.cfn['EventCategories'] = obj.data.EventCategoriesList;
        reqParams.tf['event_categories'] = obj.data.EventCategoriesList;
        reqParams.cfn['Enabled'] = obj.data.Enabled;
        reqParams.tf['enabled'] = obj.data.Enabled;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('rds', obj.id, 'AWS::RDS::EventSubscription'),
            'region': obj.region,
            'service': 'rds',
            'type': 'AWS::RDS::EventSubscription',
            'terraformType': 'aws_db_event_subscription',
            'options': reqParams
        });
    } else if (obj.type == "rds.subnetgroup") {
        reqParams.cfn['DBSubnetGroupDescription'] = obj.data.DBSubnetGroupDescription;
        reqParams.tf['description'] = obj.data.DBSubnetGroupDescription;
        reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroupName;
        reqParams.tf['name'] = obj.data.DBSubnetGroupName;
        reqParams.cfn['SubnetIds'] = [];
        reqParams.tf['subnet_ids'] = [];
        obj.data.Subnets.forEach(subnet => {
            reqParams.cfn['SubnetIds'].push(subnet.SubnetIdentifier);
            reqParams.tf['subnet_ids'].push(subnet.SubnetIdentifier);
        });
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('rds', obj.id, 'AWS::RDS::DBSubnetGroup'),
            'region': obj.region,
            'service': 'rds',
            'type': 'AWS::RDS::DBSubnetGroup',
            'terraformType': 'aws_db_subnet_group',
            'options': reqParams
        });
    } else if (obj.type == "rds.clusterparametergroup") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['Family'] = obj.data.DBParameterGroupFamily;
        reqParams.tf['family'] = obj.data.DBParameterGroupFamily;

        /*
        TODO:
        Parameters:
        - Parameter
        Tags:
        - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('rds', obj.id, 'AWS::RDS::DBClusterParameterGroup'),
            'region': obj.region,
            'service': 'rds',
            'type': 'AWS::RDS::DBClusterParameterGroup',
            'terraformType': 'aws_rds_cluster_parameter_group',
            'options': reqParams
        });
    } else if (obj.type == "rds.parametergroup") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['Family'] = obj.data.DBParameterGroupFamily;
        reqParams.tf['family'] = obj.data.DBParameterGroupFamily;

        /*
        TODO:
        Parameters:
        - Parameter
        Tags:
        - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('rds', obj.id, 'AWS::RDS::DBParameterGroup'),
            'region': obj.region,
            'service': 'rds',
            'type': 'AWS::RDS::DBParameterGroup',
            'terraformType': 'aws_db_parameter_group',
            'options': reqParams
        });
    } else if (obj.type == "rds.optiongroup") {
        reqParams.cfn['EngineName'] = obj.data.EngineName;
        reqParams.tf['engine_name'] = obj.data.EngineName;
        reqParams.cfn['MajorEngineVersion'] = obj.data.MajorEngineVersion;
        reqParams.tf['major_engine_version'] = obj.data.MajorEngineVersion;
        reqParams.cfn['OptionGroupDescription'] = obj.data.OptionGroupDescription;
        reqParams.tf['option_group_description'] = obj.data.OptionGroupDescription;
        if (obj.data.Options) {
            reqParams.cfn['OptionConfigurations'] = [];
            reqParams.tf['option'] = [];
            obj.data.Options.forEach(option => {
                var optionSettings = null;
                var tfOptionSettings = null;
                if (option.OptionSettings) {
                    optionSettings = [];
                    tfOptionSettings = {};
                    option.OptionSettings.forEach(optionSetting => {
                        optionSettings.push({
                            'Name': optionSetting.Name,
                            'Value': optionSetting.Value
                        });
                        tfOptionSettings.push({
                            'name': optionSetting.Name,
                            'value': optionSetting.Value
                        });
                    });
                }
                var dbSecurityGroupMemberships = null;
                if (option.DBSecurityGroupMemberships) {
                    dbSecurityGroupMemberships = [];
                    option.DBSecurityGroupMemberships.forEach(dbSecurityGroupMembership => {
                        dbSecurityGroupMemberships.push(dbSecurityGroupMembership.DBSecurityGroupName);
                    });
                }
                var vpcSecurityGroupMemberships = null;
                if (option.VpcSecurityGroupMemberships) {
                    vpcSecurityGroupMemberships = [];
                    option.VpcSecurityGroupMemberships.forEach(vpcSecurityGroupMembership => {
                        vpcSecurityGroupMemberships.push(vpcSecurityGroupMembership.VpcSecurityGroupId);
                    });
                }
                reqParams.cfn['OptionConfigurations'].push({
                    'DBSecurityGroupMemberships': dbSecurityGroupMemberships,
                    'OptionName': option.OptionName,
                    'OptionSettings': optionSettings,
                    'OptionVersion': option.OptionVersion,
                    'Port': option.Port,
                    'VpcSecurityGroupMemberships': vpcSecurityGroupMemberships
                });
                reqParams.tf['option'].push({
                    'db_security_group_memberships': dbSecurityGroupMemberships,
                    'option_name': option.OptionName,
                    'option_settings': optionSettings,
                    'version': option.OptionVersion,
                    'port': option.Port,
                    'vpc_security_group_memberships': vpcSecurityGroupMemberships
                });
            });
        }

        /*
        TODO:
        Tags:
            - Resource Tag 
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('rds', obj.id, 'AWS::RDS::OptionGroup'),
            'region': obj.region,
            'service': 'rds',
            'type': 'AWS::RDS::OptionGroup',
            'terraformType': 'aws_db_option_group',
            'options': reqParams
        });
    } else if (obj.type == "rds.securitygroup") {
        reqParams.cfn['GroupDescription'] = obj.data.DBSecurityGroupDescription;
        reqParams.tf['description'] = obj.data.DBSecurityGroupDescription;
        reqParams.cfn['EC2VpcId'] = obj.data.VpcId;

        /*
        TODO:
        DBSecurityGroupIngress:
            - RDS Security Group Rule
        Tags:
            - Resource Tag 
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('rds', obj.id, 'AWS::RDS::DBSecurityGroup'),
            'region': obj.region,
            'service': 'rds',
            'type': 'AWS::RDS::DBSecurityGroup',
            'terraformType': 'aws_db_security_group',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
