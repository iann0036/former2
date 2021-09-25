/* ========================================================================== */
// MemoryDB
/* ========================================================================== */

sections.push({
    'category': 'Database',
    'service': 'MemoryDB',
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
                        title: 'Username',
                        field: 'username',
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
                        field: 'authenticationtype',
                        title: 'Authentication Type',
                        sortable: true,
                        editable: true,
                        formatter: timeAgoFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'ACLs': {
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
                    }
                ],
                [
                    // nothing
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
                        formatter: timeAgoFormatter,
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
                        formatter: timeAgoFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        formatter: timeAgoFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableDatabaseMemoryDB() {
    blockUI('#section-database-memorydb-clusters-datatable');
    blockUI('#section-database-memorydb-users-datatable');
    blockUI('#section-database-memorydb-acls-datatable');
    blockUI('#section-database-memorydb-subnetgroups-datatable');
    blockUI('#section-database-memorydb-parametergroups-datatable');

    await sdkcall("MemoryDB", "describeClusters", {
        // no params
    }, false).then(async (data) => {
        $('#section-database-memorydb-clusters-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Clusters.map(async (cluster) => {
            $('#section-database-memorydb-clusters-datatable').deferredBootstrapTable('append', [{
                f2id: cluster.ARN,
                f2type: 'memorydb.cluster',
                f2data: cluster,
                f2region: region,
                name: cluster.Name,
                description: cluster.Description
            }]);

            return Promise.resolve();
        }));
    }).catch(() => { });

    await sdkcall("MemoryDB", "describeUsers", {
        // no params
    }, false).then(async (data) => {
        $('#section-database-memorydb-users-datatable').deferredBootstrapTable('removeAll');

        data.Users.forEach(user => {
            $('#section-database-memorydb-users-datatable').deferredBootstrapTable('append', [{
                f2id: user.ARN,
                f2type: 'memorydb.user',
                f2data: user,
                f2region: region,
                username: user.Name,
                authenticationtype: user.Authentication.Type || ""
            }]);
        });
    }).catch(() => { });

    await sdkcall("MemoryDB", "describeACLs", {
        // no params
    }, false).then(async (data) => {
        $('#section-database-memorydb-acls-datatable').deferredBootstrapTable('removeAll');

        data.ACLs.forEach(acl => {
            $('#section-database-memorydb-acls-datatable').deferredBootstrapTable('append', [{
                f2id: acl.ARN,
                f2type: 'memorydb.acl',
                f2data: acl,
                f2region: region,
                name: acl.Name
            }]);
        });
    }).catch(() => { });

    await sdkcall("MemoryDB", "describeSubnetGroups", {
        // no params
    }, false).then(async (data) => {
        $('#section-database-memorydb-subnetgroups-datatable').deferredBootstrapTable('removeAll');

        data.SubnetGroups.forEach(subnetgroup => {
            $('#section-database-memorydb-subnetgroups-datatable').deferredBootstrapTable('append', [{
                f2id: subnetgroup.ARN,
                f2type: 'memorydb.subnetgroup',
                f2data: subnetgroup,
                f2region: region,
                name: subnetgroup.Name,
                description: subnetgroup.Description
            }]);
        });
    }).catch(() => { });

    await sdkcall("MemoryDB", "describeParameterGroups", {
        // no params
    }, false).then(async (data) => {
        $('#section-database-memorydb-parametergroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ParameterGroups.map(async (parametergroup) => {
            return sdkcall("MemoryDB", "describeParameters", {
                ParameterGroupName: parametergroup.Name
            }, false).then(async (data) => {
                parametergroup['Parameters'] = data['Parameters'];

                $('#section-database-memorydb-parametergroups-datatable').deferredBootstrapTable('append', [{
                    f2id: parametergroup.ARN,
                    f2type: 'memorydb.parametergroup',
                    f2data: parametergroup,
                    f2region: region,
                    name: parametergroup.Name,
                    family: parametergroup.Family,
                    description: parametergroup.Description
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-database-memorydb-clusters-datatable');
    unblockUI('#section-database-memorydb-users-datatable');
    unblockUI('#section-database-memorydb-acls-datatable');
    unblockUI('#section-database-memorydb-subnetgroups-datatable');
    unblockUI('#section-database-memorydb-parametergroups-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "memorydb.cluster") {
        reqParams.cfn['ClusterName'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['NumShards'] = obj.data.NumberOfShards;
        reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
        reqParams.cfn['ParameterGroupName'] = obj.data.ParameterGroupName;
        if (obj.data.SecurityGroups) {
            reqParams.cfn['SecurityGroupIds'] = [];
            obj.data.SecurityGroups.forEach(securitygroup => {
                reqParams.cfn['SecurityGroupIds'].push(securitygroup['SecurityGroupId']);
            });
        }
        if (obj.data.ClusterEndpoint) {
            reqParams.cfn['Port'] = obj.data.ClusterEndpoint.Port;
        }
        reqParams.cfn['NodeType'] = obj.data.NodeType;
        reqParams.cfn['SubnetGroupName'] = obj.data.SubnetGroupName;
        reqParams.cfn['TLSEnabled'] = obj.data.TLSEnabled;
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        reqParams.cfn['SnsTopicArn'] = obj.data.SnsTopicArn;
        reqParams.cfn['SnapshotRetentionLimit'] = obj.data.SnapshotRetentionLimit;
        reqParams.cfn['MaintenanceWindow'] = obj.data.MaintenanceWindow;
        reqParams.cfn['SnapshotWindow'] = obj.data.SnapshotWindow;
        reqParams.cfn['ACLName'] = obj.data.ACLName;
        reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
        if (obj.data.Shards && obj.data.Shards[0]) {
            reqParams.cfn['NumReplicasPerShard'] = obj.data.Shards[0].NumberOfNodes;
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('memorydb', obj.id, 'AWS::MemoryDB::Cluster'),
            'region': obj.region,
            'service': 'memorydb',
            'type': 'AWS::MemoryDB::Cluster',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'ARN': obj.data.ARN,
                    'ClusterEndpoint.Address': obj.data.ClusterEndpoint.Address,
                    'ClusterEndpoint.Port': obj.data.ClusterEndpoint.Port
                }
            }
        });
    } else if (obj.type == "memorydb.user") {
        reqParams.cfn['UserName'] = obj.data.Name;
        reqParams.cfn['AccessString'] = obj.data.AccessString;
        if (obj.data.Authentication) {
            reqParams.cfn['AuthenticationMode'] = obj.data.Authentication.Type;
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('memorydb', obj.id, 'AWS::MemoryDB::User'),
            'region': obj.region,
            'service': 'memorydb',
            'type': 'AWS::MemoryDB::User',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'ARN': obj.data.ARN
                }
            }
        });
    } else if (obj.type == "memorydb.acl") {
        reqParams.cfn['ACLName'] = obj.data.Name;
        reqParams.cfn['UserNames'] = obj.data.UserNames;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('memorydb', obj.id, 'AWS::MemoryDB::ACL'),
            'region': obj.region,
            'service': 'memorydb',
            'type': 'AWS::MemoryDB::ACL',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'ARN': obj.data.ARN
                }
            }
        });
    } else if (obj.type == "memorydb.subnetgroup") {
        reqParams.cfn['SubnetGroupName'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        if (obj.data.Subnets) {
            reqParams.cfn['SubnetIds'] = [];
            obj.data.Subnets.forEach(subnet => {
                reqParams.cfn['SubnetIds'].push(subnet['Identifier']);
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('memorydb', obj.id, 'AWS::MemoryDB::SubnetGroup'),
            'region': obj.region,
            'service': 'memorydb',
            'type': 'AWS::MemoryDB::SubnetGroup',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'ARN': obj.data.ARN
                }
            }
        });
    } else if (obj.type == "memorydb.parametergroup") {
        reqParams.cfn['ParameterGroupName'] = obj.data.ParameterGroupName;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Family'] = obj.data.Family;
        reqParams.cfn['Parameters'] = obj.data.Parameters;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('memorydb', obj.id, 'AWS::MemoryDB::ParameterGroup'),
            'region': obj.region,
            'service': 'memorydb',
            'type': 'AWS::MemoryDB::ParameterGroup',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'ARN': obj.data.ARN
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
