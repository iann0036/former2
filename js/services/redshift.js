/* ========================================================================== */
// Redshift
/* ========================================================================== */

sections.push({
    'category': 'Database',
    'service': 'Redshift',
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
                        field: 'nodetype',
                        title: 'Node Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'databasename',
                        title: 'Database Name',
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
        }
    }
});

async function updateDatatableDatabaseRedshift() {
    blockUI('#section-database-redshift-clusters-datatable');
    blockUI('#section-database-redshift-subnetgroups-datatable');
    blockUI('#section-database-redshift-parametergroups-datatable');
    blockUI('#section-database-redshift-securitygroups-datatable');

    await sdkcall("Redshift", "describeClusters", {
        // no params
    }, true).then((data) => {
        $('#section-database-redshift-clusters-datatable').bootstrapTable('removeAll');

        data.Clusters.forEach(cluster => {
            $('#section-database-redshift-clusters-datatable').bootstrapTable('append', [{
                f2id: cluster.ClusterIdentifier,
                f2type: 'redshift.cluster',
                f2data: cluster,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/redshift/home?region=' + region + '#cluster-details:cluster=' + cluster.ClusterIdentifier,
                clusterid: cluster.ClusterIdentifier,
                nodetype: cluster.NodeType,
                databasename: cluster.DBName,
                availabilityzone: cluster.AvailabilityZone,
                vpcid: cluster.VpcId
            }]);
        });

        unblockUI('#section-database-redshift-clusters-datatable');
    });

    await sdkcall("Redshift", "describeClusterSubnetGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-redshift-subnetgroups-datatable').bootstrapTable('removeAll');

        data.ClusterSubnetGroups.forEach(subnetGroup => {
            $('#section-database-redshift-subnetgroups-datatable').bootstrapTable('append', [{
                f2id: subnetGroup.ClusterSubnetGroupName,
                f2type: 'redshift.subnetgroup',
                f2data: subnetGroup,
                f2region: region,
                name: subnetGroup.ClusterSubnetGroupName,
                description: subnetGroup.Description,
                vpcid: subnetGroup.VpcId
            }]);
        });

        unblockUI('#section-database-redshift-subnetgroups-datatable');
    });

    await sdkcall("Redshift", "describeClusterParameterGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-redshift-parametergroups-datatable').bootstrapTable('removeAll');

        data.ParameterGroups.forEach(parameterGroup => {
            $('#section-database-redshift-parametergroups-datatable').bootstrapTable('append', [{
                f2id: parameterGroup.ParameterGroupName,
                f2type: 'redshift.parametergroup',
                f2data: parameterGroup,
                f2region: region,
                name: parameterGroup.ParameterGroupName,
                family: parameterGroup.ParameterGroupFamily,
                description: parameterGroup.Description
            }]);
        });

        unblockUI('#section-database-redshift-parametergroups-datatable');
    });

    await sdkcall("Redshift", "describeClusterSecurityGroups", {
        // no params
    }, false).then((data) => {
        $('#section-database-redshift-securitygroups-datatable').bootstrapTable('removeAll');

        data.ClusterSecurityGroups.forEach(securityGroup => {
            $('#section-database-redshift-securitygroups-datatable').bootstrapTable('append', [{
                f2id: securityGroup.ClusterSecurityGroupName,
                f2type: 'redshift.securitygroup',
                f2data: securityGroup,
                f2region: region,
                name: securityGroup.ClusterSecurityGroupName,
                description: securityGroup.Description
            }]);
        });
    }).catch(() => { });

    unblockUI('#section-database-redshift-securitygroups-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "redshift.cluster") {
        reqParams.cfn['ClusterIdentifier'] = obj.data.ClusterIdentifier;
        reqParams.tf['cluster_identifier'] = obj.data.ClusterIdentifier;
        reqParams.cfn['NodeType'] = obj.data.NodeType;
        reqParams.tf['node_type'] = obj.data.NodeType;
        reqParams.cfn['MasterUsername'] = obj.data.MasterUsername;
        reqParams.tf['master_username'] = obj.data.MasterUsername;
        reqParams.cfn['MasterUserPassword'] = 'REPLACEME';
        reqParams.tf['master_password'] = 'REPLACEME';
        reqParams.cfn['DBName'] = obj.data.DBName;
        reqParams.tf['database_name'] = obj.data.DBName;
        reqParams.cfn['Port'] = obj.data.Endpoint.Port;
        reqParams.tf['port'] = obj.data.Endpoint.Port;
        reqParams.cfn['AutomatedSnapshotRetentionPeriod'] = obj.data.AutomatedSnapshotRetentionPeriod;
        reqParams.tf['automated_snapshot_retention_period'] = obj.data.AutomatedSnapshotRetentionPeriod;
        if (obj.data.ClusterSecurityGroups) {
            reqParams.cfn['ClusterSecurityGroups'] = [];
            reqParams.tf['cluster_security_groups'] = [];
            obj.data.ClusterSecurityGroups.forEach(clusterSecurityGroup => {
                reqParams.cfn['ClusterSecurityGroups'].push(clusterSecurityGroup['ClusterSecurityGroupName']);
                reqParams.tf['cluster_security_groups'].push(clusterSecurityGroup['ClusterSecurityGroupName']);
            });
        }
        if (obj.data.VpcSecurityGroups) {
            reqParams.cfn['VpcSecurityGroupIds'] = [];
            reqParams.tf['vpc_security_group_ids'] = [];
            obj.data.VpcSecurityGroups.forEach(vpcSecurityGroup => {
                reqParams.cfn['VpcSecurityGroupIds'].push(vpcSecurityGroup['VpcSecurityGroupId']);
                reqParams.tf['vpc_security_group_ids'].push(vpcSecurityGroup['VpcSecurityGroupId']);
            });
        }
        reqParams.cfn['ClusterSubnetGroupName'] = obj.data.ClusterSubnetGroupName;
        reqParams.tf['cluster_subnet_group_name'] = obj.data.ClusterSubnetGroupName;
        reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
        reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;
        reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
        reqParams.tf['preferred_maintenance_window'] = obj.data.PreferredMaintenanceWindow;
        reqParams.cfn['ClusterVersion'] = obj.data.ClusterVersion;
        reqParams.tf['cluster_version'] = obj.data.ClusterVersion;
        reqParams.cfn['AllowVersionUpgrade'] = obj.data.AllowVersionUpgrade;
        reqParams.tf['allow_version_upgrade'] = obj.data.AllowVersionUpgrade;
        reqParams.cfn['NumberOfNodes'] = obj.data.NumberOfNodes;
        reqParams.tf['number_of_nodes'] = obj.data.NumberOfNodes;
        reqParams.tf['cluster_type'] = obj.data.NumberOfNodes > 1 ? 'multi-node' : 'single-node';
        reqParams.cfn['PubliclyAccessible'] = obj.data.PubliclyAccessible;
        reqParams.tf['publicly_accessible'] = obj.data.PubliclyAccessible;
        reqParams.cfn['Encrypted'] = obj.data.Encrypted;
        reqParams.tf['encrypted'] = obj.data.Encrypted;
        if (obj.data.HsmStatus) {
            reqParams.cfn['HsmClientCertificateIdentifier'] = obj.data.HsmStatus.HsmClientCertificateIdentifier;
            reqParams.cfn['HsmConfigurationIdentifier'] = obj.data.HsmStatus.HsmConfigurationIdentifier;
        }
        reqParams.cfn['ElasticIp'] = obj.data.ElasticIpStatus.ElasticIp;
        reqParams.tf['elastic_ip'] = obj.data.ElasticIpStatus.ElasticIp;
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        reqParams.tf['kms_key_id'] = obj.data.KmsKeyId;
        if (obj.data.IamRoles) {
            reqParams.cfn['IamRoles'] = [];
            reqParams.tf['iam_roles'] = [];
            obj.data.IamRoles.forEach(iamRole => {
                reqParams.cfn['IamRoles'].push(iamRole['IamRoleArn']);
                reqParams.tf['iam_roles'].push(iamRole['IamRoleArn']);
            });
        }

        /*
        TODO:
        ClusterParameterGroupName: String
        ClusterType: String
        LoggingProperties: 
            LoggingProperties
        MasterUserPassword: String
        OwnerAccount: String
        SnapshotClusterIdentifier: String
        SnapshotIdentifier: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('redshift', obj.id, 'AWS::Redshift::Cluster'),
            'region': obj.region,
            'service': 'redshift',
            'type': 'AWS::Redshift::Cluster',
            'terraformType': 'aws_redshift_cluster',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ClusterIdentifier,
                'GetAtt': {
                    'Endpoint.Address': obj.data.Endpoint.Address,
                    'Endpoint.Port': obj.data.Endpoint.Port
                }
            }
        });
    } else if (obj.type == "redshift.subnetgroup") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
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
            'logicalId': getResourceName('redshift', obj.id, 'AWS::Redshift::ClusterSubnetGroup'),
            'region': obj.region,
            'service': 'redshift',
            'type': 'AWS::Redshift::ClusterSubnetGroup',
            'terraformType': 'aws_redshift_subnet_group',
            'options': reqParams
        });
    } else if (obj.type == "redshift.parametergroup") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['ParameterGroupFamily'] = obj.data.ParameterGroupFamily;
        reqParams.tf['family'] = obj.data.ParameterGroupFamily;
        reqParams.cfn['Tags'] = obj.data.Tags;

        /*
        TODO:
        Parameters:
        - Parameter
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('redshift', obj.id, 'AWS::Redshift::ClusterParameterGroup'),
            'region': obj.region,
            'service': 'redshift',
            'type': 'AWS::Redshift::ClusterParameterGroup',
            'terraformType': 'aws_redshift_parameter_group',
            'options': reqParams
        });
    } else if (obj.type == "redshift.securitygroup") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('redshift', obj.id, 'AWS::Redshift::ClusterSecurityGroup'),
            'region': obj.region,
            'service': 'redshift',
            'type': 'AWS::Redshift::ClusterSecurityGroup',
            'terraformType': 'aws_redshift_security_group',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
