/* ========================================================================== */
// ElastiCache
/* ========================================================================== */

sections.push({
    'category': 'Database',
    'service': 'ElastiCache',
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
                        field: 'cachenodetype',
                        title: 'Cache Node Type',
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
                        field: 'engineversion',
                        title: 'Engine Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'cachenodecount',
                        title: 'Cache Node Count',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Replication Groups': {
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
                    },
                    {
                        field: 'snapshottingclusterid',
                        title: 'Snapshotting Cluster ID',
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
                    }
                ]
            ]
        },
        'Global Replication Groups': {
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
        'Users': {
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
                        field: 'username',
                        title: 'User Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'User Groups': {
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
                        field: 'engine',
                        title: 'Engine',
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

async function updateDatatableDatabaseElastiCache() {
    blockUI('#section-database-elasticache-clusters-datatable');
    blockUI('#section-database-elasticache-replicationgroups-datatable');
    blockUI('#section-database-elasticache-subnetgroups-datatable');
    blockUI('#section-database-elasticache-parametergroups-datatable');
    blockUI('#section-database-elasticache-securitygroups-datatable');
    blockUI('#section-database-elasticache-globalreplicationgroups-datatable');
    blockUI('#section-database-elasticache-users-datatable');
    blockUI('#section-database-elasticache-usergroups-datatable');

    await sdkcall("ElastiCache", "describeCacheClusters", {
        // no params
    }, true).then((data) => {
        $('#section-database-elasticache-clusters-datatable').deferredBootstrapTable('removeAll');

        if (data.CacheClusters) {
            data.CacheClusters.forEach(cluster => {
                $('#section-database-elasticache-clusters-datatable').deferredBootstrapTable('append', [{
                    f2id: cluster.CacheClusterId,
                    f2type: 'elasticache.cluster',
                    f2data: cluster,
                    f2region: region,
                    id: cluster.CacheClusterId,
                    cachenodetype: cluster.CacheNodeType,
                    engine: cluster.Engine,
                    engineversion: cluster.EngineVersion,
                    cachenodecount: cluster.NumCacheNodes
                }]);
            });
        }

        unblockUI('#section-database-elasticache-clusters-datatable');
    });

    await sdkcall("ElastiCache", "describeReplicationGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-elasticache-replicationgroups-datatable').deferredBootstrapTable('removeAll');

        if (data.ReplicationGroups) {
            data.ReplicationGroups.forEach(replicationGroup => {
                $('#section-database-elasticache-replicationgroups-datatable').deferredBootstrapTable('append', [{
                    f2id: replicationGroup.ReplicationGroupId,
                    f2type: 'elasticache.replicationgroup',
                    f2data: replicationGroup,
                    f2region: region,
                    id: replicationGroup.ReplicationGroupId,
                    description: replicationGroup.Description,
                    snapshottingclusterid: replicationGroup.SnapshottingClusterId
                }]);
            });
        }

        unblockUI('#section-database-elasticache-replicationgroups-datatable');
    });

    await sdkcall("ElastiCache", "describeCacheSubnetGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-elasticache-subnetgroups-datatable').deferredBootstrapTable('removeAll');

        data.CacheSubnetGroups.forEach(subnetGroup => {
            $('#section-database-elasticache-subnetgroups-datatable').deferredBootstrapTable('append', [{
                f2id: subnetGroup.CacheSubnetGroupName,
                f2type: 'elasticache.subnetgroup',
                f2data: subnetGroup,
                f2region: region,
                name: subnetGroup.CacheSubnetGroupName,
                description: subnetGroup.CacheSubnetGroupDescription,
                vpcid: subnetGroup.VpcId
            }]);
        });

        unblockUI('#section-database-elasticache-subnetgroups-datatable');
    });

    await sdkcall("ElastiCache", "describeCacheParameterGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-elasticache-parametergroups-datatable').deferredBootstrapTable('removeAll');

        data.CacheParameterGroups.forEach(parameterGroup => {
            if (!parameterGroup.CacheParameterGroupName.startsWith("default.")) {
                $('#section-database-elasticache-parametergroups-datatable').deferredBootstrapTable('append', [{
                    f2id: parameterGroup.CacheParameterGroupName,
                    f2type: 'elasticache.parametergroup',
                    f2data: parameterGroup,
                    f2region: region,
                    name: parameterGroup.CacheParameterGroupName,
                    family: parameterGroup.CacheParameterGroupFamily,
                    description: parameterGroup.Description
                }]);
            }
        });

        unblockUI('#section-database-elasticache-parametergroups-datatable');
    });

    await sdkcall("ElastiCache", "describeCacheSecurityGroups", {
        // no params
    }, false).then((data) => {
        $('#section-database-elasticache-securitygroups-datatable').deferredBootstrapTable('removeAll');

        data.CacheSecurityGroups.forEach(securityGroup => {
            $('#section-database-elasticache-securitygroups-datatable').deferredBootstrapTable('append', [{
                f2id: securityGroup.CacheSecurityGroupName,
                f2type: 'elasticache.securitygroup',
                f2data: securityGroup,
                f2region: region,
                name: securityGroup.CacheSecurityGroupName,
                description: securityGroup.Description
            }]);
        });
    }).catch(() => { });

    await sdkcall("ElastiCache", "describeGlobalReplicationGroups", {
        // no params
    }, false).then((data) => {
        $('#section-database-elasticache-globalreplicationgroups-datatable').deferredBootstrapTable('removeAll');

        data.describeGlobalReplicationGroups.forEach(globalreplicationgroup => {
            $('#section-database-elasticache-globalreplicationgroups-datatable').deferredBootstrapTable('append', [{
                f2id: globalreplicationgroup.GlobalReplicationGroupId,
                f2type: 'elasticache.globalreplicationgroup',
                f2data: globalreplicationgroup,
                f2region: region,
                id: globalreplicationgroup.GlobalReplicationGroupId,
                description: globalreplicationgroup.GlobalReplicationGroupDescription
            }]);
        });
    }).catch(() => { });

    await sdkcall("ElastiCache", "describeUsers", {
        // no params
    }, false).then((data) => {
        $('#section-database-elasticache-users-datatable').deferredBootstrapTable('removeAll');

        data.Users.forEach(user => {
            $('#section-database-elasticache-users-datatable').deferredBootstrapTable('append', [{
                f2id: user.UserId,
                f2type: 'elasticache.user',
                f2data: user,
                f2region: region,
                id: user.UserId,
                username: user.UserName
            }]);
        });
    }).catch(() => { });

    await sdkcall("ElastiCache", "describeUserGroups", {
        // no params
    }, false).then((data) => {
        $('#section-database-elasticache-usergroups-datatable').deferredBootstrapTable('removeAll');

        data.UserGroups.forEach(usergroup => {
            $('#section-database-elasticache-usergroups-datatable').deferredBootstrapTable('append', [{
                f2id: usergroup.UserGroupId,
                f2type: 'elasticache.usergroup',
                f2data: usergroup,
                f2region: region,
                id: usergroup.UserGroupId,
                engine: usergroup.Engine
            }]);
        });
    }).catch(() => { });

    unblockUI('#section-database-elasticache-securitygroups-datatable');
    unblockUI('#section-database-elasticache-globalreplicationgroups-datatable');
    unblockUI('#section-database-elasticache-users-datatable');
    unblockUI('#section-database-elasticache-usergroups-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "elasticache.subnetgroup") {
        reqParams.cfn['Description'] = obj.data.CacheSubnetGroupDescription;
        reqParams.tf['description'] = obj.data.CacheSubnetGroupDescription;
        reqParams.cfn['CacheSubnetGroupName'] = obj.data.CacheSubnetGroupName;
        reqParams.tf['name'] = obj.data.CacheSubnetGroupName;
        reqParams.cfn['SubnetIds'] = [];
        reqParams.tf['subnet_ids'] = [];
        obj.data.Subnets.forEach(subnet => {
            reqParams.cfn['SubnetIds'].push(subnet.SubnetIdentifier);
            reqParams.tf['subnet_ids'].push(subnet.SubnetIdentifier);
        });

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elasticache', obj.id, 'AWS::ElastiCache::SubnetGroup'),
            'region': obj.region,
            'service': 'elasticache',
            'type': 'AWS::ElastiCache::SubnetGroup',
            'terraformType': 'aws_elasticache_subnet_group',
            'options': reqParams
        });
    } else if (obj.type == "elasticache.parametergroup") {
        reqParams.cfn['CacheParameterGroupFamily'] = obj.data.CacheParameterGroupFamily;
        reqParams.tf['family'] = obj.data.CacheParameterGroupFamily;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;

        /*
        TODO:
        Properties
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elasticache', obj.id, 'AWS::ElastiCache::ParameterGroup'),
            'region': obj.region,
            'service': 'elasticache',
            'type': 'AWS::ElastiCache::ParameterGroup',
            'terraformType': 'aws_elasticache_parameter_group',
            'options': reqParams
        });
    } else if (obj.type == "elasticache.securitygroup") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['name'] = obj.data.CacheSecurityGroupName;
        reqParams.tf['description'] = obj.data.Description;
        if (obj.data.EC2SecurityGroups) {
            reqParams.tf['security_group_names'] = [];
            obj.data.EC2SecurityGroups.forEach(securitygroup => {
                reqParams.tf['security_group_names'].push(securitygroup.EC2SecurityGroupName);
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elasticache', obj.id, 'AWS::ElastiCache::SecurityGroup'),
            'region': obj.region,
            'service': 'elasticache',
            'type': 'AWS::ElastiCache::SecurityGroup',
            'terraformType': 'aws_elasticache_security_group',
            'options': reqParams
        });
    } else if (obj.type == "elasticache.cluster") {
        reqParams.cfn['CacheNodeType'] = obj.data.CacheNodeType;
        reqParams.tf['node_type'] = obj.data.CacheNodeType;
        reqParams.cfn['Engine'] = obj.data.Engine;
        reqParams.tf['engine'] = obj.data.Engine;
        reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
        reqParams.tf['engine_version'] = obj.data.EngineVersion;
        reqParams.cfn['NumCacheNodes'] = obj.data.NumCacheNodes;
        reqParams.tf['num_cache_nodes'] = obj.data.NumCacheNodes;
        reqParams.cfn['PreferredAvailabilityZone'] = obj.data.PreferredAvailabilityZone;
        reqParams.tf['availability_zone'] = obj.data.PreferredAvailabilityZone;
        reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
        reqParams.tf['maintenance_window'] = obj.data.PreferredMaintenanceWindow;
        if (obj.data.NotificationConfiguration) {
            reqParams.cfn['NotificationTopicArn'] = obj.data.NotificationConfiguration.TopicArn;
            reqParams.tf['notification_topic_arn'] = obj.data.NotificationConfiguration.TopicArn;
        }
        if (obj.data.CacheSecurityGroups) {
            reqParams.cfn['CacheSecurityGroupNames'] = [];
            reqParams.tf['security_group_names'] = [];
            obj.data.CacheSecurityGroups.forEach(securityGroup => {
                reqParams.cfn['CacheSecurityGroupNames'].push(securityGroup.CacheSecurityGroupName);
                reqParams.tf['security_group_names'].push(securityGroup.CacheSecurityGroupName);
            });
        }
        reqParams.cfn['CacheParameterGroupName'] = obj.data.CacheParameterGroup.CacheParameterGroupName;
        reqParams.tf['parameter_group_name'] = obj.data.CacheParameterGroup.CacheParameterGroupName;
        reqParams.cfn['CacheSubnetGroupName'] = obj.data.CacheSubnetGroupName;
        reqParams.tf['subnet_group_name'] = obj.data.CacheSubnetGroupName;
        if (obj.data.CacheNodes && obj.data.CacheNodes[0] && obj.data.CacheNodes[0].Endpoint) {
            reqParams.cfn['Port'] = obj.data.CacheNodes[0].Endpoint.Port;
            reqParams.tf['port'] = obj.data.CacheNodes[0].Endpoint.Port;
        }
        reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
        if (obj.data.SecurityGroups) {
            reqParams.cfn['VpcSecurityGroupIds'] = [];
            reqParams.tf['security_group_ids'] = [];
            obj.data.SecurityGroups.forEach(securityGroup => {
                reqParams.cfn['VpcSecurityGroupIds'].push(securityGroup.SecurityGroupId);
                reqParams.tf['security_group_ids'].push(securityGroup.SecurityGroupId);
            });
        }
        reqParams.cfn['SnapshotRetentionLimit'] = obj.data.SnapshotRetentionLimit;
        reqParams.tf['snapshot_retention_limit'] = obj.data.SnapshotRetentionLimit;
        reqParams.cfn['SnapshotWindow'] = obj.data.SnapshotWindow;
        reqParams.tf['snapshot_window'] = obj.data.SnapshotWindow;
        reqParams.cfn['ClusterName'] = obj.data.CacheClusterId;
        reqParams.tf['cluster_id'] = obj.data.CacheClusterId;

        /*
        TODO:
        AZMode: String
        PreferredAvailabilityZones:
            - String
        SnapshotArns:
            - String
        SnapshotName: String
        Tags:
            - Resource Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elasticache', obj.id, 'AWS::ElastiCache::CacheCluster'),
            'region': obj.region,
            'service': 'elasticache',
            'type': 'AWS::ElastiCache::CacheCluster',
            'terraformType': 'aws_elasticache_cluster',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.CacheClusterId,
                'GetAtt': {
                    'ConfigurationEndpoint.Address': (obj.data.ConfigurationEndpoint ? obj.data.ConfigurationEndpoint.Address : null),
                    'ConfigurationEndpoint.Port': (obj.data.ConfigurationEndpoint ? obj.data.ConfigurationEndpoint.Port : null)
                }
            }
        });
    } else if (obj.type == "elasticache.replicationgroup") {
        reqParams.cfn['ReplicationGroupId'] = obj.data.ReplicationGroupId;
        reqParams.tf['replication_group_id'] = obj.data.ReplicationGroupId;
        reqParams.cfn['ReplicationGroupDescription'] = obj.data.Description;
        reqParams.tf['replication_group_description'] = obj.data.Description;
        if (obj.data.NodeGroups) {
            reqParams.cfn['NumNodeGroups'] = obj.data.NodeGroups.length;
            reqParams.tf['cluster_mode'] = {
                'num_node_groups': obj.data.NodeGroups.length
            };
        }
        reqParams.cfn['SnapshottingClusterId'] = obj.data.SnapshottingClusterId;
        reqParams.tf['snapshot_arns'] = [obj.data.SnapshottingClusterId];
        reqParams.cfn['AutomaticFailoverEnabled'] = (obj.data.AutomaticFailover == "enabled");
        reqParams.tf['automatic_failover_enabled'] = (obj.data.AutomaticFailover == "enabled");
        if (obj.data.ConfigurationEndpoint) {
            reqParams.cfn['Port'] = obj.data.ConfigurationEndpoint.Port;
            reqParams.tf['port'] = obj.data.ConfigurationEndpoint.Port;
        }
        reqParams.cfn['SnapshotRetentionLimit'] = obj.data.SnapshotRetentionLimit;
        reqParams.tf['snapshot_retention_limit'] = obj.data.SnapshotRetentionLimit;
        reqParams.cfn['SnapshotWindow'] = obj.data.SnapshotWindow;
        reqParams.tf['snapshot_window'] = obj.data.SnapshotWindow;
        reqParams.cfn['CacheNodeType'] = obj.data.CacheNodeType;
        reqParams.tf['node_type'] = obj.data.CacheNodeType;
        reqParams.cfn['TransitEncryptionEnabled'] = obj.data.TransitEncryptionEnabled;
        reqParams.tf['transit_encryption_enabled'] = obj.data.TransitEncryptionEnabled;
        reqParams.cfn['AtRestEncryptionEnabled'] = obj.data.AtRestEncryptionEnabled;
        reqParams.tf['at_rest_encryption_enabled'] = obj.data.AtRestEncryptionEnabled;
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        reqParams.cfn['MultiAZ'] = (obj.data.MultiAZ == "enabled");

        /*
        TODO:
        AuthToken: String
        AutoMinorVersionUpgrade: Boolean
        CacheParameterGroupName: String
        CacheSecurityGroupNames:
            - String
        CacheSubnetGroupName: String
        Engine: String
        EngineVersion: String
        NodeGroupConfiguration:
            - NodeGroupConfiguration
        NotificationTopicArn: String
        NumCacheClusters: Integer
        PreferredCacheClusterAZs:
            - String
        PreferredMaintenanceWindow: String
        PrimaryClusterId: String
        ReplicasPerNodeGroup: Integer
        SecurityGroupIds:
            - String
        SnapshotArns:
            - String
        SnapshotName: String
        Tags:
            - Resource Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elasticache', obj.id, 'AWS::ElastiCache::ReplicationGroup'),
            'region': obj.region,
            'service': 'elasticache',
            'type': 'AWS::ElastiCache::ReplicationGroup',
            'terraformType': 'aws_elasticache_replication_group',
            'options': reqParams
        });
    } else if (obj.type == "elasticache.globalreplicationgroup") {
        reqParams.cfn['GlobalReplicationGroupDescription'] = obj.data.GlobalReplicationGroupDescription;
        reqParams.cfn['CacheNodeType'] = obj.data.CacheNodeType;
        reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
        if (obj.data.Members) {
            reqParams.cfn['Members'] = [];
            obj.data.Members.forEach(member => {
                reqParams.cfn['Members'].push({
                    'ReplicationGroupId': member.ReplicationGroupId,
                    'ReplicationGroupRegion': member.ReplicationGroupRegion,
                    'Role': member.Role
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elasticache', obj.id, 'AWS::ElastiCache::GlobalReplicationGroup'),
            'region': obj.region,
            'service': 'elasticache',
            'type': 'AWS::ElastiCache::GlobalReplicationGroup',
            'options': reqParams,
            'returnValues': {
                'Import': {
                    'GlobalReplicationGroupId': obj.data.GlobalReplicationGroupId
                }
            }
        });
    } else if (obj.type == "elasticache.user") {
        reqParams.cfn['UserId'] = obj.data.UserId;
        reqParams.cfn['UserName'] = obj.data.UserName;
        reqParams.cfn['Engine'] = obj.data.Engine;
        reqParams.cfn['AccessString'] = obj.data.AccessString;
        if (obj.data.Authentication) {
            reqParams.cfn['NoPasswordRequired'] = (obj.data.Authentication.Type == "no-password");
            if (obj.data.Authentication.Type != "no-password") {
                reqParams.cfn['Passwords'] = [
                    "REPLACEME"
                ];
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elasticache', obj.id, 'AWS::ElastiCache::User'),
            'region': obj.region,
            'service': 'elasticache',
            'type': 'AWS::ElastiCache::User',
            'options': reqParams
        });
    } else if (obj.type == "elasticache.usergroup") {
        reqParams.cfn['UserGroupId'] = obj.data.UserGroupId;
        reqParams.cfn['Engine'] = obj.data.Engine;
        reqParams.cfn['UserIds'] = obj.data.UserIds;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elasticache', obj.id, 'AWS::ElastiCache::UserGroup'),
            'region': obj.region,
            'service': 'elasticache',
            'type': 'AWS::ElastiCache::UserGroup',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
