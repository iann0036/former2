/* ========================================================================== */
// EMR
/* ========================================================================== */

sections.push({
    'category': 'Analytics',
    'service': 'EMR',
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
                        field: 'amiversion',
                        title: 'AMI Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'instancecollectiontype',
                        title: 'Instance Collection Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'releaselabel',
                        title: 'Release Label',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Instance Fleet Configs': {
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'instancefleettype',
                        title: 'Instance Fleet Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Instance Group Configs': {
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'market',
                        title: 'Market',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'instancegrouptype',
                        title: 'Instance Group Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'instancetype',
                        title: 'Instance Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Security Configurations': {
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
        'Steps': {
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'actiononfailure',
                        title: 'Action On Failure',
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
        },
        'Containers Virtual Clusters': {
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Studios': {
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
        'Studio Session Mappings': {
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
                        title: 'Studio ID',
                        field: 'studioid',
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
                        field: 'identityname',
                        title: 'Identity Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'identitytype',
                        title: 'Identity Type',
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

async function updateDatatableAnalyticsEMR() {
    blockUI('#section-analytics-emr-clusters-datatable');
    blockUI('#section-analytics-emr-instancefleetconfigs-datatable');
    blockUI('#section-analytics-emr-instancegroupconfigs-datatable');
    blockUI('#section-analytics-emr-securityconfigurations-datatable');
    blockUI('#section-analytics-emr-steps-datatable');
    blockUI('#section-analytics-emr-applicationautoscalingscalabletargets-datatable');
    blockUI('#section-analytics-emr-applicationautoscalingscalingpolicies-datatable');
    blockUI('#section-analytics-emr-containersvirtualclusters-datatable');
    blockUI('#section-analytics-emr-studios-datatable');
    blockUI('#section-analytics-emr-studiosessionmappings-datatable');

    await sdkcall("EMR", "listClusters", {
        // no params
    }, true).then(async (data) => {
        $('#section-analytics-emr-clusters-datatable').deferredBootstrapTable('removeAll');
        $('#section-analytics-emr-instancefleetconfigs-datatable').deferredBootstrapTable('removeAll');
        $('#section-analytics-emr-instancegroupconfigs-datatable').deferredBootstrapTable('removeAll');
        $('#section-analytics-emr-steps-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Clusters.map(cluster => {
            return Promise.all([
                sdkcall("EMR", "listSteps", {
                    ClusterId: cluster.Id
                }, true).then((data) => {
                    data.Steps.forEach(step => {
                        step['ClusterId'] = cluster.Id;
                        $('#section-analytics-emr-steps-datatable').deferredBootstrapTable('append', [{
                            f2id: step.Id,
                            f2type: 'emr.step',
                            f2data: step,
                            f2region: region,
                            name: step.Name,
                            id: step.Id,
                            actiononfailure: step.ActionOnFailure
                        }]);
                    });
                }),
                sdkcall("EMR", "listInstanceFleets", {
                    ClusterId: cluster.Id
                }, false).then((data) => {
                    data.InstanceFleets.forEach(instanceFleet => {
                        step['ClusterId'] = cluster.Id;
                        $('#section-analytics-emr-instancefleetconfigs-datatable').deferredBootstrapTable('append', [{
                            f2id: instanceFleet.Id,
                            f2type: 'emr.instancefleetconfig',
                            f2data: instanceFleet,
                            f2region: region,
                            name: instanceFleet.Name,
                            id: instanceFleet.Id,
                            instancefleettype: instanceFleet.InstanceFleetType
                        }]);
                    });
                }).catch(() => { }),
                sdkcall("EMR", "listInstanceGroups", {
                    ClusterId: cluster.Id
                }, false).then((data) => {
                    data.InstanceGroups.forEach(instanceGroup => {
                        step['ClusterId'] = cluster.Id;
                        $('#section-analytics-emr-instancegroupconfigs-datatable').deferredBootstrapTable('append', [{
                            f2id: instanceGroup.Id,
                            f2type: 'emr.instancegroupconfig',
                            f2data: instanceGroup,
                            f2region: region,
                            name: instanceGroup.Name,
                            id: instanceGroup.Id,
                            market: instanceGroup.Market,
                            instancegrouptype: instanceGroup.InstanceGroupType,
                            instancetype: instanceGroup.InstanceType
                        }]);
                    });
                }).catch(() => { }),
                sdkcall("EMR", "describeCluster", {
                    ClusterId: cluster.Id
                }, true).then((data) => {
                    $('#section-analytics-emr-clusters-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Cluster.Id,
                        f2type: 'emr.cluster',
                        f2data: data.Cluster,
                        f2region: region,
                        name: data.Cluster.Name,
                        amiversion: data.Cluster.RequestedAmiVersion,
                        instancecollectiontype: data.Cluster.InstanceCollectionType,
                        releaselabel: data.Cluster.ReleaseLabel
                    }]);
                })
            ]);
        }));

        unblockUI('#section-analytics-emr-clusters-datatable');
        unblockUI('#section-analytics-emr-instancefleetconfigs-datatable');
        unblockUI('#section-analytics-emr-instancegroupconfigs-datatable');
        unblockUI('#section-analytics-emr-steps-datatable');
    });

    await sdkcall("EMR", "listSecurityConfigurations", {
        // no params
    }, true).then(async (data) => {
        $('#section-analytics-emr-securityconfigurations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.SecurityConfigurations.map(securityConfiguration => {
            return sdkcall("EMR", "describeSecurityConfiguration", {
                Name: securityConfiguration.Name
            }, true).then((data) => {
                $('#section-analytics-emr-securityconfigurations-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Name,
                    f2type: 'emr.securityconfiguration',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    creationtime: data.CreationDateTime
                }]);
            });
        }));

        unblockUI('#section-analytics-emr-securityconfigurations-datatable');
    });

    await sdkcall("ApplicationAutoScaling", "describeScalableTargets", {
        ServiceNamespace: "elasticmapreduce"
    }, true).then(async (data) => {
        $('#section-analytics-emr-applicationautoscalingscalabletargets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ScalableTargets.map(target => {
            return sdkcall("ApplicationAutoScaling", "describeScheduledActions", {
                ServiceNamespace: "elasticmapreduce",
                ResourceId: target.ResourceId,
                ScalableDimension: target.ScalableDimension
            }, true).then((actions) => {
                target['ScheduledActions'] = actions.ScheduledActions;

                $('#section-analytics-emr-applicationautoscalingscalabletargets-datatable').deferredBootstrapTable('append', [{
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

        unblockUI('#section-analytics-emr-applicationautoscalingscalabletargets-datatable');
    });

    await sdkcall("ApplicationAutoScaling", "describeScalingPolicies", {
        ServiceNamespace: "elasticmapreduce"
    }, true).then(async (data) => {
        $('#section-analytics-emr-applicationautoscalingscalingpolicies-datatable').deferredBootstrapTable('removeAll');

        if (data.ScalableTargets) {
            data.ScalableTargets.forEach(target => {
                $('#section-analytics-emr-applicationautoscalingscalingpolicies-datatable').deferredBootstrapTable('append', [{
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

        unblockUI('#section-analytics-emr-applicationautoscalingscalingpolicies-datatable');
    });

    await sdkcall("EMRcontainers", "listVirtualClusters", {
        states: ["RUNNING"]
    }, false).then(async (data) => {
        $('#section-analytics-emr-containersvirtualclusters-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.virtualClusters.map(async (virtualCluster) => {
            return sdkcall("EMRcontainers", "describeVirtualCluster", {
                id: virtualCluster.id
            }, true).then((data) => {
                $('#section-analytics-emr-containersvirtualclusters-datatable').deferredBootstrapTable('append', [{
                    f2id: data.virtualCluster.arn,
                    f2type: 'emr.containersvirtualcluster',
                    f2data: data.virtualCluster,
                    f2region: region,
                    id: data.virtualCluster.id,
                    name: data.virtualCluster.name
                }]);
            });
        }));

        unblockUI('#section-analytics-emr-containersvirtualclusters-datatable');
    }).catch(() => { });

    await sdkcall("EMR", "listStudios", {
        // no params
    }, false).then(async (data) => {
        $('#section-analytics-emr-studios-datatable').deferredBootstrapTable('removeAll');
        $('#section-analytics-emr-studiosessionmappings-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Studios.map(async (studio) => {
            await sdkcall("EMR", "describeStudio", {
                StudioId: studio.StudioId
            }, true).then((data) => {
                $('#section-analytics-emr-studios-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Studio.StudioArn,
                    f2type: 'emr.studio',
                    f2data: data.Studio,
                    f2region: region,
                    name: data.Studio.Name,
                    description: data.Studio.Description
                }]);
            });

            return sdkcall("EMR", "listStudioSessionMappings", {
                StudioId: studio.StudioId
            }, true).then((data) => {
                data.SessionMappings.forEach(mapping => {
                    $('#section-analytics-emr-studiosessionmappings-datatable').deferredBootstrapTable('append', [{
                        f2id: mapping.StudioId + " Session Mapping " + mapping.IdentityId,
                        f2type: 'emr.studiosessionmapping',
                        f2data: mapping,
                        f2region: region,
                        studioid: mapping.StudioId,
                        identityname: mapping.IdentityName,
                        identitytype: mapping.IdentityType
                    }]);
                });
            });
        }));

        unblockUI('#section-analytics-emr-studios-datatable');
        unblockUI('#section-analytics-emr-studiosessionmappings-datatable');
    }).catch(() => { });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "emr.cluster") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['LogUri'] = obj.data.LogUri;
        reqParams.cfn['ReleaseLabel'] = obj.data.ReleaseLabel;
        reqParams.cfn['VisibleToAllUsers'] = obj.data.VisibleToAllUsers;
        reqParams.cfn['Applications'] = obj.data.Applications;
        reqParams.cfn['Tags'] = obj.data.Tags;
        reqParams.cfn['ServiceRole'] = obj.data.ServiceRole;
        if (obj.data.Configurations) {
            reqParams.cfn['Configurations'] = [];
            obj.data.Configurations.forEach(configuration => {
                reqParams.cfn['Configurations'].push({
                    'Classification': configuration.Classification,
                    'ConfigurationProperties': configuration.Properties
                });
            });
        }
        reqParams.cfn['SecurityConfiguration'] = obj.data.SecurityConfiguration;
        reqParams.cfn['AutoScalingRole'] = obj.data.AutoScalingRole;
        reqParams.cfn['ScaleDownBehavior'] = obj.data.ScaleDownBehavior;
        reqParams.cfn['CustomAmiId'] = obj.data.CustomAmiId;
        reqParams.cfn['EbsRootVolumeSize'] = obj.data.EbsRootVolumeSize;
        reqParams.cfn['KerberosAttributes'] = obj.data.KerberosAttributes;
        reqParams.cfn['LogEncryptionKmsKeyId'] = obj.data.LogEncryptionKmsKeyId;
        reqParams.cfn['StepConcurrencyLevel'] = obj.data.StepConcurrencyLevel;

        /*
        TODO:
        AdditionalInfo: JSON object
        BootstrapActions:
            - Bootstrap Actions   
        Instances:
            JobFlowInstancesConfig
        JobFlowRole: String
        ManagedScalingPolicy
        Steps:
            - StepConfig
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('emr', obj.id, 'AWS::EMR::Cluster'),
            'region': obj.region,
            'service': 'emr',
            'type': 'AWS::EMR::Cluster',
            'options': reqParams
        });
    } else if (obj.type == "emr.step") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['ActionOnFailure'] = obj.data.ActionOnFailure;
        reqParams.cfn['JobFlowId'] = obj.data.ClusterId;
        if (obj.data.Config) {
            reqParams.cfn['HadoopJarStep'] = {
                'Jar': obj.data.Config.Jar,
                'StepProperties': obj.data.Config.Properties,
                'MainClass': obj.data.Config.MainClass,
                'Args': obj.data.Config.Args
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('emr', obj.id, 'AWS::EMR::Step'),
            'region': obj.region,
            'service': 'emr',
            'type': 'AWS::EMR::Step',
            'options': reqParams
        });
    } else if (obj.type == "emr.instancefleetconfig") {
        reqParams.cfn['ClusterId'] = obj.data.ClusterId;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['InstanceFleetType'] = obj.data.InstanceFleetType;
        reqParams.cfn['TargetOnDemandCapacity'] = obj.data.TargetOnDemandCapacity;
        reqParams.cfn['TargetSpotCapacity'] = obj.data.TargetSpotCapacity;
        if (obj.data.InstanceTypeSpecifications) {
            reqParams.cfn['InstanceTypeConfigs'] = [];
            obj.data.InstanceTypeSpecifications.forEach(instanceTypeSpecification => {
                var configurations = null;
                var ebsConfiguration = null;
                if (obj.data.InstanceTypeSpecifications.Configurations) {
                    configurations = [];
                    obj.data.InstanceTypeSpecifications.Configurations.forEach(configuration => {
                        configurations.push({
                            'Classification': configuration.Classification,
                            'ConfigurationProperties': configuration.Properties
                        });
                    });
                }
                if (obj.data.InstanceTypeSpecifications.EbsBlockDevices) {
                    var ebsBlockDeviceConfigs = [];
                    obj.data.InstanceTypeSpecifications.EbsBlockDevices.forEach(ebsBlockDevice => {
                        ebsBlockDeviceConfigs.push({
                            'VolumeSpecification': ebsBlockDevice.VolumeSpecification
                        });
                    });
                    ebsConfiguration = {
                        'EbsBlockDeviceConfigs': ebsBlockDeviceConfigs,
                        'EbsOptimized': obj.data.InstanceTypeSpecifications.EbsOptimized
                    };
                }
                reqParams.cfn['InstanceTypeConfigs'].push({
                    'BidPrice': obj.data.InstanceTypeSpecifications.BidPrice,
                    'BidPriceAsPercentageOfOnDemandPrice': obj.data.InstanceTypeSpecifications.BidPriceAsPercentageOfOnDemandPrice,
                    'Configurations': configurations,
                    'EbsConfiguration': ebsConfiguration,
                    'InstanceType': obj.data.InstanceTypeSpecifications.InstanceType,
                    'WeightedCapacity': obj.data.InstanceTypeSpecifications.WeightedCapacity
                });
            });
        }
        reqParams.cfn['LaunchSpecifications'] = obj.data.LaunchSpecifications;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('emr', obj.id, 'AWS::EMR::InstanceFleetConfig'),
            'region': obj.region,
            'service': 'emr',
            'type': 'AWS::EMR::InstanceFleetConfig',
            'options': reqParams
        });
    } else if (obj.type == "emr.instancegroupconfig") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['JobFlowId'] = obj.data.ClusterId;
        reqParams.cfn['Market'] = obj.data.Market;
        reqParams.cfn['BidPrice'] = obj.data.BidPrice;
        reqParams.cfn['InstanceType'] = obj.data.InstanceType;
        reqParams.cfn['InstanceCount'] = obj.data.RequestedInstanceCount;
        if (obj.data.Configurations) {
            reqParams.cfn['Configurations'] = [];
            obj.data.Configurations.forEach(configuration => {
                reqParams.cfn['Configurations'].push({
                    'Classification': configuration.Classification,
                    'ConfigurationProperties': configuration.Properties
                });
            });
        }
        reqParams.cfn['EbsConfiguration'] = null;
        if (obj.data.EbsBlockDevices) {
            var ebsBlockDeviceConfigs = [];
            obj.data.EbsBlockDevices.forEach(ebsBlockDevice => {
                ebsBlockDeviceConfigs.push({
                    'VolumeSpecification': ebsBlockDevice.VolumeSpecification
                });
            });
            reqParams.cfn['EbsConfiguration'] = {
                'EbsBlockDeviceConfigs': ebsBlockDeviceConfigs,
                'EbsOptimized': obj.data.EbsOptimized
            };
        }
        if (obj.data.AutoScalingPolicy) {
            reqParams.cfn['AutoScalingPolicy'] = {
                'Constraints': obj.data.AutoScalingPolicy.Constraints,
                'Rules': obj.data.AutoScalingPolicy.Rules
            };
        }

        /*
        TODO:
        InstanceRole: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('emr', obj.id, 'AWS::EMR::InstanceGroupConfig'),
            'region': obj.region,
            'service': 'emr',
            'type': 'AWS::EMR::InstanceGroupConfig',
            'options': reqParams
        });
    } else if (obj.type == "emr.securityconfiguration") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['SecurityConfiguration'] = obj.data.SecurityConfiguration;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('emr', obj.id, 'AWS::EMR::SecurityConfiguration'),
            'region': obj.region,
            'service': 'emr',
            'type': 'AWS::EMR::SecurityConfiguration',
            'options': reqParams
        });
    } else if (obj.type == "emr.containersvirtualcluster") {
        reqParams.cfn['Name'] = obj.data.name;
        if (obj.data.containerProvider) {
            var info = null;
            if (obj.data.containerProvider.info && obj.data.containerProvider.info.eksInfo && obj.data.containerProvider.info.eksInfo.namespace) {
                info = {
                    'EksInfo': {
                        'Namespace': obj.data.containerProvider.info.eksInfo.namespace
                    }
                };
            }
            reqParams.cfn['ContainerProvider'] = {
                'Type': obj.data.containerProvider.type,
                'Id': obj.data.containerProvider.id,
                'Info': info,
            };
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('emr', obj.id, 'AWS::EMRContainers::VirtualCluster'),
            'region': obj.region,
            'service': 'emr',
            'type': 'AWS::EMRContainers::VirtualCluster',
            'options': reqParams
        });
    } else if (obj.type == "emr.studio") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['AuthMode'] = obj.data.AuthMode;
        reqParams.cfn['EngineSecurityGroupId'] = obj.data.EngineSecurityGroupId;
        reqParams.cfn['DefaultS3Location'] = obj.data.DefaultS3Location;
        reqParams.cfn['WorkspaceSecurityGroupId'] = obj.data.WorkspaceSecurityGroupId;
        reqParams.cfn['ServiceRole'] = obj.data.ServiceRole;
        reqParams.cfn['UserRole'] = obj.data.UserRole;
        reqParams.cfn['SubnetIds'] = obj.data.SubnetIds;
        reqParams.cfn['VpcId'] = obj.data.VpcId;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('emr', obj.id, 'AWS::EMR::Studio'),
            'region': obj.region,
            'service': 'emr',
            'type': 'AWS::EMR::Studio',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.StudioId,
                'GetAtt': {
                    'Arn': obj.data.StudioArn,
                    'Url': obj.data.Url
                }
            }
        });
    } else if (obj.type == "emr.studiosessionmapping") {
        reqParams.cfn['StudioId'] = obj.data.StudioId;
        reqParams.cfn['IdentityName'] = obj.data.IdentityName;
        reqParams.cfn['IdentityType'] = obj.data.IdentityType;
        reqParams.cfn['SessionPolicyArn'] = obj.data.SessionPolicyArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('emr', obj.id, 'AWS::EMR::StudioSessionMapping'),
            'region': obj.region,
            'service': 'emr',
            'type': 'AWS::EMR::StudioSessionMapping',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
