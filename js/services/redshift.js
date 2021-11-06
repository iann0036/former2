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
        },
        'Endpoint Accesses': {
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
                        title: 'Endpoint Name',
                        field: 'endpointname',
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
                        field: 'clusteridentifier',
                        title: 'Cluster Identifier',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Endpoint Authorizations': {
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
                        title: 'Cluster Identifier',
                        field: 'clusteridentifier',
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
                        field: 'grantor',
                        title: 'Grantor',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'grantee',
                        title: 'Grantee',
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
                        field: 'account',
                        title: 'Account',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'topic',
                        title: 'Topic',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Scheduled Actions': {
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
                        field: 'schedule',
                        title: 'Schedule',
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
    blockUI('#section-database-redshift-endpointaccesses-datatable');
    blockUI('#section-database-redshift-endpointauthorizations-datatable');
    blockUI('#section-database-redshift-eventsubscriptions-datatable');
    blockUI('#section-database-redshift-scheduledactions-datatable');

    await sdkcall("Redshift", "describeClusters", {
        // no params
    }, true).then((data) => {
        $('#section-database-redshift-clusters-datatable').deferredBootstrapTable('removeAll');

        data.Clusters.forEach(cluster => {
            $('#section-database-redshift-clusters-datatable').deferredBootstrapTable('append', [{
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
        $('#section-database-redshift-subnetgroups-datatable').deferredBootstrapTable('removeAll');

        data.ClusterSubnetGroups.forEach(subnetGroup => {
            $('#section-database-redshift-subnetgroups-datatable').deferredBootstrapTable('append', [{
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
        $('#section-database-redshift-parametergroups-datatable').deferredBootstrapTable('removeAll');

        data.ParameterGroups.forEach(parameterGroup => {
            $('#section-database-redshift-parametergroups-datatable').deferredBootstrapTable('append', [{
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
        $('#section-database-redshift-securitygroups-datatable').deferredBootstrapTable('removeAll');

        data.ClusterSecurityGroups.forEach(securityGroup => {
            $('#section-database-redshift-securitygroups-datatable').deferredBootstrapTable('append', [{
                f2id: securityGroup.ClusterSecurityGroupName,
                f2type: 'redshift.securitygroup',
                f2data: securityGroup,
                f2region: region,
                name: securityGroup.ClusterSecurityGroupName,
                description: securityGroup.Description
            }]);
        });
    }).catch(() => { });

    await sdkcall("Redshift", "describeEndpointAccess", {
        // no params
    }, false).then((data) => {
        $('#section-database-redshift-endpointaccesses-datatable').deferredBootstrapTable('removeAll');

        data.EndpointAccessList.forEach(endpointAccess => {
            $('#section-database-redshift-endpointaccesses-datatable').deferredBootstrapTable('append', [{
                f2id: endpointAccess.ClusterIdentifier + " " + endpointAccess.EndpointName + " Endpoint Access",
                f2type: 'redshift.endpointaccess',
                f2data: endpointAccess,
                f2region: region,
                endpointname: endpointAccess.EndpointName,
                clusteridentifier: endpointAccess.ClusterIdentifier
            }]);
        });
    }).catch(() => { });

    await sdkcall("Redshift", "describeEndpointAuthorization", {
        // no params
    }, false).then((data) => {
        $('#section-database-redshift-endpointauthorizations-datatable').deferredBootstrapTable('removeAll');

        data.EndpointAuthorizationList.forEach(endpointauthorization => {
            $('#section-database-redshift-endpointauthorizations-datatable').deferredBootstrapTable('append', [{
                f2id: endpointauthorization.ClusterIdentifier + " Endpoint Authorization " + endpointauthorization.Grantor + " " + endpointauthorization.Grantee,
                f2type: 'redshift.endpointauthorization',
                f2data: endpointauthorization,
                f2region: region,
                grantor: endpointauthorization.Grantor,
                grantee: endpointauthorization.Grantee,
                clusteridentifier: endpointauthorization.ClusterIdentifier
            }]);
        });
    }).catch(() => { });

    await sdkcall("Redshift", "describeEventSubscriptions", {
        // no params
    }, false).then((data) => {
        $('#section-database-redshift-eventsubscriptions-datatable').deferredBootstrapTable('removeAll');

        data.EventSubscriptionsList.forEach(eventsubscription => {
            $('#section-database-redshift-eventsubscriptions-datatable').deferredBootstrapTable('append', [{
                f2id: eventsubscription.CustSubscriptionId + " Event Subscription",
                f2type: 'redshift.eventsubscription',
                f2data: eventsubscription,
                f2region: region,
                name: eventsubscription.CustSubscriptionId,
                account: eventsubscription.CustomerAwsId,
                topic: eventsubscription.SnsTopicArn
            }]);
        });
    }).catch(() => { });

    await sdkcall("Redshift", "describeScheduledActions", {
        // no params
    }, false).then((data) => {
        $('#section-database-redshift-scheduledactions-datatable').deferredBootstrapTable('removeAll');

        data.ScheduledActions.forEach(scheduledaction => {
            $('#section-database-redshift-scheduledactions-datatable').deferredBootstrapTable('append', [{
                f2id: scheduledaction.ScheduledActionName + " Scheduled Action",
                f2type: 'redshift.scheduledaction',
                f2data: scheduledaction,
                f2region: region,
                name: scheduledaction.ScheduledActionName,
                schedule: scheduledaction.Schedule
            }]);
        });
    }).catch(() => { });

    unblockUI('#section-database-redshift-securitygroups-datatable');
    unblockUI('#section-database-redshift-endpointaccesses-datatable');
    unblockUI('#section-database-redshift-endpointauthorizations-datatable');
    unblockUI('#section-database-redshift-eventsubscriptions-datatable');
    unblockUI('#section-database-redshift-scheduledactions-datatable');
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
    } else if (obj.type == "redshift.endpointaccess") {
        reqParams.cfn['EndpointName'] = obj.data.EndpointName;
        reqParams.cfn['ClusterIdentifier'] = obj.data.ClusterIdentifier;
        reqParams.cfn['SubnetGroupName'] = obj.data.SubnetGroupName;
        reqParams.cfn['ResourceOwner'] = obj.data.ResourceOwner;
        if (obj.data.VpcSecurityGroups) {
            reqParams.cfn['VpcSecurityGroupIds'] = [];
            obj.data.VpcSecurityGroups.forEach(vpcsecuritygroup => {
                reqParams.cfn['VpcSecurityGroupIds'].push(vpcsecuritygroup['VpcSecurityGroupId']);
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('redshift', obj.id, 'AWS::Redshift::EndpointAccess'),
            'region': obj.region,
            'service': 'redshift',
            'type': 'AWS::Redshift::EndpointAccess',
            'options': reqParams
        });
    } else if (obj.type == "redshift.endpointauthorization") {
        reqParams.cfn['Account'] = obj.data.Grantor || obj.data.Grantee;
        reqParams.cfn['ClusterIdentifier'] = obj.data.ClusterIdentifier;
        reqParams.cfn['VpcIds'] = obj.data.AllowedVPCs;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('redshift', obj.id, 'AWS::Redshift::EndpointAuthorization'),
            'region': obj.region,
            'service': 'redshift',
            'type': 'AWS::Redshift::EndpointAuthorization',
            'options': reqParams
        });
    } else if (obj.type == "redshift.eventsubscription") {
        reqParams.cfn['SubscriptionName'] = obj.data.CustSubscriptionId;
        reqParams.cfn['SourceType'] = obj.data.SourceType;
        reqParams.cfn['Enabled'] = obj.data.Enabled;
        reqParams.cfn['Severity'] = obj.data.Severity;
        reqParams.cfn['SourceIds'] = obj.data.SourceIdsList;
        reqParams.cfn['SnsTopicArn'] = obj.data.SnsTopicArn;
        reqParams.cfn['EventCategories'] = obj.data.EventCategoriesList;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('redshift', obj.id, 'AWS::Redshift::EventSubscription'),
            'region': obj.region,
            'service': 'redshift',
            'type': 'AWS::Redshift::EventSubscription',
            'options': reqParams
        });
    } else if (obj.type == "redshift.scheduledaction") {
        reqParams.cfn['ScheduledActionName'] = obj.data.ScheduledActionName;
        reqParams.cfn['ScheduledActionDescription'] = obj.data.ScheduledActionDescription;
        reqParams.cfn['Enabled'] = (obj.data.State == "ACTIVE");
        reqParams.cfn['Schedule'] = obj.data.Schedule;
        reqParams.cfn['StartTime'] = obj.data.StartTime;
        reqParams.cfn['EndTime'] = obj.data.EndTime;
        reqParams.cfn['IamRole'] = obj.data.IamRole;
        reqParams.cfn['TargetAction'] = obj.data.TargetAction;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('redshift', obj.id, 'AWS::Redshift::ScheduledAction'),
            'region': obj.region,
            'service': 'redshift',
            'type': 'AWS::Redshift::ScheduledAction',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
