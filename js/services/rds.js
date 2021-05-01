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
        'Global Clusters': {
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
                        title: 'Global Cluster ID',
                        field: 'globalclusterid',
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
        },
        'Proxies': {
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
                        field: 'enginename',
                        title: 'Engine Name',
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
                    }
                ]
            ]
        },
        'Proxy Target Groups': {
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
                        field: 'proxyname',
                        title: 'Proxy Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Proxy Endpoints': {
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
                        field: 'proxyname',
                        title: 'Proxy Name',
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
    blockUI('#section-database-rds-globalclusters-datatable');
    blockUI('#section-database-rds-subnetgroups-datatable');
    blockUI('#section-database-rds-clusterparametergroups-datatable');
    blockUI('#section-database-rds-parametergroups-datatable');
    blockUI('#section-database-rds-optiongroups-datatable');
    blockUI('#section-database-rds-securitygroups-datatable');
    blockUI('#section-database-rds-eventsubscriptions-datatable');
    blockUI('#section-database-rds-applicationautoscalingscalabletargets-datatable');
    blockUI('#section-database-rds-applicationautoscalingscalingpolicies-datatable');
    blockUI('#section-database-rds-proxies-datatable');
    blockUI('#section-database-rds-proxytargetgroups-datatable');
    blockUI('#section-database-rds-proxyendpoints-datatable');

    await sdkcall("RDS", "describeDBClusters", {
        Filters: [{
            Name: 'engine',
            Values: ['aurora', 'aurora-mysql', 'aurora-postgresql']
        }]
    }, true).then(async (data) => {
        $('#section-database-rds-clusters-datatable').deferredBootstrapTable('removeAll');

        data.DBClusters.forEach(async (dbCluster) => {
            dbCluster['Tags'] = await getResourceTags(dbCluster.DBClusterArn);

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
    }, true).then(async (data) => {
        $('#section-database-rds-instances-datatable').deferredBootstrapTable('removeAll');

        data.DBInstances.forEach(async (dbInstance) => {
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

    await sdkcall("RDS", "describeGlobalClusters", {
        // no params
    }, true).then(async (data) => {
        $('#section-database-rds-globalclusters-datatable').deferredBootstrapTable('removeAll');

        data.GlobalClusters.forEach(async (globalcluster) => {
            $('#section-database-rds-globalclusters-datatable').deferredBootstrapTable('append', [{
                f2id: globalcluster.GlobalClusterArn,
                f2type: 'rds.globalcluster',
                f2data: globalcluster,
                f2region: region,
                globallclusterid: globalcluster.GlobalClusterIdentifier,
                engine: globalcluster.Engine
            }]);
        });
    });

    await sdkcall("RDS", "describeDBSubnetGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-rds-subnetgroups-datatable').deferredBootstrapTable('removeAll');

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
        Filters: [{
            Name: 'engine',
            Values: ['aurora', 'aurora-mysql', 'aurora-postgresql']
        }]
    }, true).then(async (data) => {
        $('#section-database-rds-parametergroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DBParameterGroups.map(parameterGroup => {
            return sdkcall("RDS", "describeDBParameters", {
                DBParameterGroupName: parameterGroup.DBParameterGroupName,
                Source: 'user'
            }, true).then((paramdata) => {
                parameterGroup['Parameters'] = paramdata.Parameters;

                if (paramdata.Parameters.length) {
                    $('#section-database-rds-parametergroups-datatable').deferredBootstrapTable('append', [{
                        f2id: parameterGroup.DBParameterGroupArn,
                        f2type: 'rds.parametergroup',
                        f2data: parameterGroup,
                        f2region: region,
                        name: parameterGroup.DBParameterGroupName,
                        family: parameterGroup.DBParameterGroupFamily,
                        description: parameterGroup.Description
                    }]);
                }
            });
        }));

        unblockUI('#section-database-rds-parametergroups-datatable');
    });

    await sdkcall("RDS", "describeDBClusterParameterGroups", {
        Filters: [{
            Name: 'engine',
            Values: ['aurora', 'aurora-mysql', 'aurora-postgresql']
        }]
    }, true).then(async (data) => {
        $('#section-database-rds-clusterparametergroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DBClusterParameterGroups.map(parameterGroup => {
            return sdkcall("RDS", "describeDBClusterParameters", {
                DBClusterParameterGroupName: parameterGroup.DBClusterParameterGroupName,
                Source: 'user'
            }, true).then((paramdata) => {
                parameterGroup['Parameters'] = paramdata.Parameters;

                if (paramdata.Parameters.length) {
                    $('#section-database-rds-clusterparametergroups-datatable').deferredBootstrapTable('append', [{
                        f2id: parameterGroup.DBClusterParameterGroupName,
                        f2type: 'rds.clusterparametergroup',
                        f2data: parameterGroup,
                        f2region: region,
                        name: parameterGroup.DBClusterParameterGroupName,
                        family: parameterGroup.DBParameterGroupFamily,
                        description: parameterGroup.Description
                    }]);
                }
            });
        }));

        unblockUI('#section-database-rds-clusterparametergroups-datatable');
    });

    await sdkcall("RDS", "describeOptionGroups", {
        Filters: [{
            Name: 'engine',
            Values: ['aurora', 'aurora-mysql', 'aurora-postgresql']
        }]
    }, true).then((data) => {
        $('#section-database-rds-optiongroups-datatable').deferredBootstrapTable('removeAll');

        data.OptionGroupsList.forEach(optionGroup => {
            if (optionGroup.Options && optionGroup.Options.length) {
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
            }
        });

        unblockUI('#section-database-rds-optiongroups-datatable');
    });

    await sdkcall("RDS", "describeDBSecurityGroups", {
        // no params
    }, true).then((data) => {
        $('#section-database-rds-securitygroups-datatable').deferredBootstrapTable('removeAll');

        data.DBSecurityGroups.forEach(securityGroup => {
            if ((securityGroup.EC2SecurityGroups && securityGroup.EC2SecurityGroups.length) || (securityGroup.IPRanges && securityGroup.IPRanges.length)) {
                $('#section-database-rds-securitygroups-datatable').deferredBootstrapTable('append', [{
                    f2id: securityGroup.DBSecurityGroupName,
                    f2type: 'rds.securitygroup',
                    f2data: securityGroup,
                    f2region: region,
                    name: securityGroup.DBSecurityGroupName,
                    description: securityGroup.DBSecurityGroupDescription,
                    vpcid: securityGroup.VpcId
                }]);
            }
        });

        unblockUI('#section-database-rds-securitygroups-datatable');
    });

    await sdkcall("RDS", "describeEventSubscriptions", {
        // no params
    }, true).then((data) => {
        $('#section-database-rds-eventsubscriptions-datatable').deferredBootstrapTable('removeAll');

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
        $('#section-database-rds-applicationautoscalingscalabletargets-datatable').deferredBootstrapTable('removeAll');

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
        $('#section-database-rds-applicationautoscalingscalingpolicies-datatable').deferredBootstrapTable('removeAll');

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

    await sdkcall("RDS", "describeDBProxies", {
        // no params
    }, true).then(async (data) => {
        $('#section-database-rds-proxies-datatable').deferredBootstrapTable('removeAll');
        $('#section-database-rds-proxytargetgroups-datatable').deferredBootstrapTable('removeAll');

        if (data.DBProxies) {
            await Promise.all(data.DBProxies.map(async (proxy) => {
                $('#section-database-rds-proxies-datatable').deferredBootstrapTable('append', [{
                    f2id: proxy.DBProxyArn,
                    f2type: 'rds.proxy',
                    f2data: proxy,
                    f2region: region,
                    name: proxy.DBProxyName,
                    enginefamily: proxy.EngineFamily,
                    endpoint: proxy.Endpoint
                }]);

                return sdkcall("RDS", "describeDBProxyTargetGroups", {
                    DBProxyName: proxy.DBProxyName
                }, true).then(async (targetgroups) => {
                    targetgroups.TargetGroups.forEach(async (tg) => {
                        await sdkcall("RDS", "describeDBProxyTargets", {
                            DBProxyName: proxy.DBProxyName,
                            TargetGroupName: tg.TargetGroupName
                        }, true).then((targetsdata) => {
                            tg['Targets'] = targetsdata['Targets'];
                        });

                        $('#section-database-rds-proxytargetgroups-datatable').deferredBootstrapTable('append', [{
                            f2id: tg.TargetGroupArn,
                            f2type: 'rds.proxytargetgroup',
                            f2data: tg,
                            f2region: region,
                            name: tg.TargetGroupName,
                            proxyname: tg.DBProxyName
                        }]);
                    });
                });
            }));
        }

        unblockUI('#section-database-rds-proxies-datatable');
        unblockUI('#section-database-rds-proxytargetgroups-datatable');
    }).catch(err => { });

    await sdkcall("RDS", "describeDBProxyEndpoints", {
        // no params
    }, false).then(async (data) => {
        $('#section-database-rds-proxyendpoints-datatable').deferredBootstrapTable('removeAll');

        data.DBProxyEndpoints.forEach(endpoint => {
            $('#section-database-rds-proxyendpoints-datatable').deferredBootstrapTable('append', [{
                f2id: endpoint.DBProxyEndpointArn,
                f2type: 'rds.proxyendpoint',
                f2data: endpoint,
                f2region: region,
                endpointname: endpoint.DBProxyEndpointName,
                proxyname: endpoint.DBProxyName
            }]);
        });
    }).catch(err => { });

    unblockUI('#section-database-rds-globalclusters-datatable');
    unblockUI('#section-database-rds-proxyendpoints-datatable');
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
        reqParams.cfn['DBClusterParameterGroupName'] = obj.data.DBClusterParameterGroup;
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
        reqParams.tf['preferred_maintenance_window'] = obj.data.PreferredMaintenanceWindow;
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
        reqParams.cfn['Tags'] = obj.data.Tags;
        

        /*
        TODO:
        RestoreType: String
        SnapshotIdentifier: String
        SourceDBClusterIdentifier: String
        SourceRegion: String
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
        if (!obj.data.Engine.startsWith("aurora")) {
            reqParams.cfn['AllocatedStorage'] = obj.data.AllocatedStorage;
            reqParams.tf['allocated_storage'] = obj.data.AllocatedStorage;
        }
        reqParams.cfn['DBInstanceClass'] = obj.data.DBInstanceClass;
        reqParams.tf['instance_class'] = obj.data.DBInstanceClass;
        reqParams.cfn['Engine'] = obj.data.Engine;
        reqParams.tf['engine'] = obj.data.Engine;
        if (!obj.data.Engine.startsWith("aurora")) {
            reqParams.cfn['MasterUsername'] = obj.data.MasterUsername;
            reqParams.tf['username'] = obj.data.MasterUsername;
            reqParams.cfn['MasterUserPassword'] = 'REPLACEME';
            reqParams.tf['password'] = 'REPLACEME';
        }
        reqParams.cfn['DBName'] = obj.data.DBName;
        reqParams.tf['name'] = obj.data.DBName;
        reqParams.cfn['PreferredBackupWindow'] = obj.data.PreferredBackupWindow;
        if (obj.data.DBClusterIdentifier && obj.data.DBClusterIdentifier != "") {
            reqParams.tf['preferred_backup_window'] = obj.data.PreferredBackupWindow;
        } else {
            reqParams.tf['backup_window'] = obj.data.PreferredBackupWindow;
        }
        if (!obj.data.Engine.startsWith("aurora")) {
            reqParams.cfn['BackupRetentionPeriod'] = obj.data.BackupRetentionPeriod;
            reqParams.tf['backup_retention_period'] = obj.data.BackupRetentionPeriod;
        }
        reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
        reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;
        reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
        if (obj.data.DBClusterIdentifier && obj.data.DBClusterIdentifier != "") {
            reqParams.tf['preferred_maintenance_window'] = obj.data.PreferredMaintenanceWindow;
        } else {
            reqParams.tf['maintenance_window'] = obj.data.PreferredMaintenanceWindow;
        }
        reqParams.cfn['MultiAZ'] = obj.data.MultiAZ;
        if (!obj.data.DBClusterIdentifier || obj.data.DBClusterIdentifier == "") {
            reqParams.tf['multi_az'] = obj.data.MultiAZ;
        }
        reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
        reqParams.tf['engine_version'] = obj.data.EngineVersion;
        reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
        reqParams.tf['auto_minor_version_upgrade'] = obj.data.AutoMinorVersionUpgrade;
        reqParams.cfn['LicenseModel'] = obj.data.LicenseModel;
        if (!obj.data.DBClusterIdentifier || obj.data.DBClusterIdentifier == "") {
            reqParams.tf['license_model'] = obj.data.LicenseModel;
        }
        reqParams.cfn['Iops'] = obj.data.Iops;
        reqParams.tf['iops'] = obj.data.Iops;
        reqParams.cfn['CharacterSetName'] = obj.data.CharacterSetName;
        reqParams.tf['character_set_name'] = obj.data.CharacterSetName;
        reqParams.cfn['PubliclyAccessible'] = obj.data.PubliclyAccessible;
        reqParams.tf['publicly_accessible'] = obj.data.PubliclyAccessible;
        reqParams.cfn['StorageType'] = obj.data.StorageType;
        if (!obj.data.DBClusterIdentifier || obj.data.DBClusterIdentifier == "") {
            reqParams.tf['storage_type'] = obj.data.StorageType;
        }
        reqParams.cfn['Port'] = obj.data.Endpoint.Port;
        reqParams.tf['port'] = obj.data.Endpoint.Port;
        reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;
        reqParams.tf['cluster_identifier'] = obj.data.DBClusterIdentifier;
        if (!obj.data.DBClusterIdentifier) {
            reqParams.cfn['StorageEncrypted'] = obj.data.StorageEncrypted;
            reqParams.tf['storage_encrypted'] = obj.data.StorageEncrypted;
        }
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        reqParams.tf['kms_key_id'] = obj.data.KmsKeyId;
        if (!obj.data.Engine.startsWith("aurora")) {
            reqParams.cfn['CopyTagsToSnapshot'] = obj.data.CopyTagsToSnapshot;
            reqParams.tf['copy_tags_to_snapshot'] = obj.data.CopyTagsToSnapshot;
        }
        reqParams.cfn['MonitoringInterval'] = obj.data.MonitoringInterval;
        reqParams.tf['monitoring_interval'] = obj.data.MonitoringInterval;
        reqParams.cfn['PromotionTier'] = obj.data.PromotionTier;
        reqParams.cfn['Timezone'] = obj.data.Timezone;
        reqParams.tf['timezone'] = obj.data.Timezone;
        if (!obj.data.Engine.startsWith("aurora")) {
            reqParams.cfn['EnableIAMDatabaseAuthentication'] = obj.data.IAMDatabaseAuthenticationEnabled;
            reqParams.tf['iam_database_authentication_enabled'] = obj.data.IAMDatabaseAuthenticationEnabled;
        }
        reqParams.cfn['EnablePerformanceInsights'] = obj.data.PerformanceInsightsEnabled;
        reqParams.cfn['PerformanceInsightsKMSKeyId'] = obj.data.PerformanceInsightsKMSKeyId;
        reqParams.cfn['PerformanceInsightsRetentionPeriod'] = obj.data.PerformanceInsightsRetentionPeriod;
        if (!obj.data.Engine.startsWith("aurora")) {
            reqParams.cfn['DeletionProtection'] = obj.data.DeletionProtection;
            reqParams.tf['deletion_protection'] = obj.data.DeletionProtection;
        }
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
            if (!obj.data.DBClusterIdentifier || obj.data.DBClusterIdentifier == "") {
                reqParams.tf['vpc_security_group_ids'] = [];
            }
            obj.data.VpcSecurityGroups.forEach(vpcSecurityGroup => {
                reqParams.cfn['VPCSecurityGroups'].push(vpcSecurityGroup.VpcSecurityGroupId);
                if (!obj.data.DBClusterIdentifier || obj.data.DBClusterIdentifier == "") {
                    reqParams.tf['vpc_security_group_ids'].push(vpcSecurityGroup.VpcSecurityGroupId);
                }
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
        reqParams.cfn['Tags'] = obj.data.TagList;

        /*
        TODO:
        AllowMajorVersionUpgrade: Boolean
        DBSnapshotIdentifier: String
        DeleteAutomatedBackups: Boolean
        SourceDBInstanceIdentifier: String
        SourceRegion: String
        UseDefaultProcessorFeatures: Boolean
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('rds', obj.id, 'AWS::RDS::DBInstance'),
            'region': obj.region,
            'service': 'rds',
            'type': 'AWS::RDS::DBInstance',
            'terraformType': (obj.data.DBClusterIdentifier && obj.data.DBClusterIdentifier != "") ? 'aws_rds_cluster_instance' : 'aws_db_instance',
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
    } else if (obj.type == "rds.globalcluster") {
        reqParams.cfn['DeletionProtection'] = obj.data.DeletionProtection;
        reqParams.cfn['Engine'] = obj.data.Engine;
        reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
        reqParams.cfn['GlobalClusterIdentifier'] = obj.data.GlobalClusterIdentifier;
        reqParams.cfn['StorageEncrypted'] = obj.data.StorageEncrypted;
        if (obj.data.GlobalClusterMembers) {
            reqParams.cfn['SourceDBClusterIdentifier'] = obj.data.GlobalClusterMembers[0].DBClusterArn;
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('rds', obj.id, 'AWS::RDS::GlobalCluster'),
            'region': obj.region,
            'service': 'rds',
            'type': 'AWS::RDS::GlobalCluster',
            'options': reqParams
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
        reqParams.cfn['OptionConfigurations'] = [];
        reqParams.tf['option'] = [];
        obj.data.Options.forEach(option => {
            var optionSettings = null;
            var tfOptionSettings = null;
            if (option.OptionSettings) {
                optionSettings = [];
                tfOptionSettings = [];
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
        reqParams.cfn['DBSecurityGroupIngress'] = [];
        if (obj.data.EC2SecurityGroups) {
            obj.data.EC2SecurityGroups.forEach(group => {
                if (group.Status == "authorized") {
                    reqParams.cfn['DBSecurityGroupIngress'].push({
                        'EC2SecurityGroupName': group.EC2SecurityGroupName,
                        'EC2SecurityGroupId': group.EC2SecurityGroupId,
                        'EC2SecurityGroupOwnerId': group.EC2SecurityGroupOwnerId
                    });
                }
            });
        }
        if (obj.data.IPRanges) {
            obj.data.IPRanges.forEach(range => {
                if (range.Status == "authorized") {
                    reqParams.cfn['DBSecurityGroupIngress'].push({
                        'CIDRIP': range.CIDRIP
                    });
                }
            });
        }

        /*
        TODO:
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
    } else if (obj.type == "rds.proxy") {
        reqParams.cfn['DBProxyName'] = obj.data.DBProxyName;
        reqParams.cfn['EngineFamily'] = obj.data.EngineFamily;
        reqParams.cfn['VpcSecurityGroupIds'] = obj.data.VpcSecurityGroupIds;
        reqParams.cfn['VpcSubnetIds'] = obj.data.VpcSubnetIds;
        reqParams.cfn['Auth'] = obj.data.Auth;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['RequireTLS'] = obj.data.RequireTLS;
        reqParams.cfn['IdleClientTimeout'] = obj.data.IdleClientTimeout;
        reqParams.cfn['DebugLogging'] = obj.data.DebugLogging;

        /*
        TODO
        Tags: 
            - TagFormat
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('rds', obj.id, 'AWS::RDS::DBProxy'),
            'region': obj.region,
            'service': 'rds',
            'type': 'AWS::RDS::DBProxy',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Endpoint': obj.data.Endpoint,
                    'DBProxyArn': obj.data.DBProxyArn
                }
            }
        });
    } else if (obj.type == "rds.proxytargetgroup") {
        reqParams.cfn['DBProxyName'] = obj.data.DBProxyName;
        reqParams.cfn['TargetGroupName'] = obj.data.TargetGroupName;
        reqParams.cfn['ConnectionPoolConfigurationInfo'] = obj.data.ConnectionPoolConfig;
        reqParams.cfn['DBClusterIdentifiers'] = [];
        reqParams.cfn['DBInstanceIdentifiers'] = [];

        obj.data.Targets.forEach(target => {
            if (target.TrackedClusterId && target.TrackedClusterId != "") {
                reqParams.cfn['DBClusterIdentifiers'].push(target.TrackedClusterId);
            } else if (target.RdsResourceId && target.RdsResourceId != "") {
                reqParams.cfn['DBInstanceIdentifiers'].push(target.RdsResourceId);
            }
        });

        if (reqParams.cfn['DBClusterIdentifiers'].length == 0) {
            reqParams.cfn['DBClusterIdentifiers'] = null;
        }
        if (reqParams.cfn['DBInstanceIdentifiers'].length == 0) {
            reqParams.cfn['DBInstanceIdentifiers'] = null;
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('rds', obj.id, 'AWS::RDS::DBProxyTargetGroup'),
            'region': obj.region,
            'service': 'rds',
            'type': 'AWS::RDS::DBProxyTargetGroup',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'TargetGroupArn': obj.data.TargetGroupArn
                }
            }
        });
    } else if (obj.type == "rds.proxyendpoint") {
        reqParams.cfn['DBProxyEndpointName'] = obj.data.DBProxyEndpointName;
        reqParams.cfn['DBProxyName'] = obj.data.DBProxyName;
        reqParams.cfn['TargetRole'] = obj.data.TargetRole;
        reqParams.cfn['VpcSecurityGroupIds'] = obj.data.VpcSecurityGroupIds;
        reqParams.cfn['VpcSubnetIds'] = obj.data.VpcSubnetIds;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('rds', obj.id, 'AWS::RDS::DBProxyEndpoint'),
            'region': obj.region,
            'service': 'rds',
            'type': 'AWS::RDS::DBProxyEndpoint',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.DBProxyEndpointName,
                'GetAtt': {
                    'Endpoint': obj.data.Endpoint,
                    'DBProxyEndpointArn': obj.data.DBProxyEndpointArn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
