/* ========================================================================== */
// ECS
/* ========================================================================== */

sections.push({
    'category': 'Compute',
    'service': 'ECS',
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
                        field: 'pendingtaskcount',
                        title: 'Pending Task Count',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'runningtaskcount',
                        title: 'Running Task Count',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'containerinstancecount',
                        title: 'Container Instance Count',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Services': {
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
                        field: 'clusterarn',
                        title: 'Cluster ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'desiredpendingrunning',
                        title: 'Desired / Pending / Running',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'launchtype',
                        title: 'Launch Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'schedulingstrategy',
                        title: 'Scheduling Strategy',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Task Definitions': {
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
                        title: 'Name / Family',
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
                        field: 'networkmode',
                        title: 'Network Mode',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'cpu',
                        title: 'CPU',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'memory',
                        title: 'Memory',
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
        'Task Sets': {
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
                        title: 'Task Set ID',
                        field: 'tasksetid',
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
                        field: 'cluster',
                        title: 'Cluster',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'service',
                        title: 'Service',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Primary Task Sets': {
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
                        title: 'Task Set ID',
                        field: 'tasksetid',
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
                        field: 'cluster',
                        title: 'Cluster',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'service',
                        title: 'Service',
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

async function updateDatatableComputeECS() {
    blockUI('#section-compute-ecs-clusters-datatable');
    blockUI('#section-compute-ecs-services-datatable');
    blockUI('#section-compute-ecs-taskdefinitions-datatable');
    blockUI('#section-compute-ecs-applicationautoscalingscalabletargets-datatable');
    blockUI('#section-compute-ecs-applicationautoscalingscalingpolicies-datatable');
    blockUI('#section-compute-ecs-primarytasksets-datatable');
    blockUI('#section-compute-ecs-tasksets-datatable');

    await sdkcall("ECS", "listTaskDefinitions", {
        sort: "DESC"
    }, true).then(async (data) => {
        $('#section-compute-ecs-taskdefinitions-datatable').bootstrapTable('removeAll');

        var baseTaskDefinitions = [];
        var taskDefinitionArns = [];
        data.taskDefinitionArns.forEach(taskDefinitionArn => {
            var baseTaskDefinition = taskDefinitionArn.split(":");
            baseTaskDefinition.pop();
            baseTaskDefinition = baseTaskDefinition.join(":");
            if (!baseTaskDefinitions.includes(baseTaskDefinition)) {
                baseTaskDefinitions.push(baseTaskDefinition);
                taskDefinitionArns.push(taskDefinitionArn);
            }
        });

        await Promise.all(taskDefinitionArns.map(taskDefinitionArn => {
            return sdkcall("ECS", "describeTaskDefinition", {
                taskDefinition: taskDefinitionArn
            }, true).then((data) => {
                $('#section-compute-ecs-taskdefinitions-datatable').deferredBootstrapTable('append', [{
                    f2id: data.taskDefinition.taskDefinitionArn,
                    f2type: 'ecs.taskdefinition',
                    f2data: data.taskDefinition,
                    f2region: region,
                    name: data.taskDefinition.family,
                    networkmode: data.taskDefinition.networkMode,
                    cpu: data.taskDefinition.cpu,
                    memory: data.taskDefinition.memory
                }]);
            });
        }));

        unblockUI('#section-compute-ecs-taskdefinitions-datatable');
    });

    await sdkcall("ECS", "listClusters", {
        // no params
    }, true).then(async (data) => {
        $('#section-compute-ecs-clusters-datatable').bootstrapTable('removeAll');
        $('#section-compute-ecs-services-datatable').bootstrapTable('removeAll');

        await Promise.all(data.clusterArns.map(clusterArn => {
            return Promise.all([
                sdkcall("ECS", "describeClusters", {
                    clusters: [clusterArn]
                }, true).then((data) => {
                    $('#section-compute-ecs-clusters-datatable').deferredBootstrapTable('append', [{
                        f2id: data.clusters[0].clusterArn,
                        f2type: 'ecs.cluster',
                        f2data: data.clusters[0],
                        f2region: region,
                        name: data.clusters[0].clusterName,
                        pendingtaskcount: data.clusters[0].pendingTasksCount,
                        runningtaskcount: data.clusters[0].runningTasksCount,
                        containerinstancecount: data.clusters[0].registeredContainerInstancesCount
                    }]);
                }),
                sdkcall("ECS", "listServices", {
                    cluster: clusterArn
                }, true).then(async (data) => {
                    await Promise.all(data.serviceArns.map(serviceArn => {
                        return sdkcall("ECS", "describeServices", {
                            services: [serviceArn],
                            cluster: clusterArn,
                            include: ["TAGS"]
                        }, true).then(async (data) => {
                            if (data.services[0]) {
                                $('#section-compute-ecs-services-datatable').deferredBootstrapTable('append', [{
                                    f2id: data.services[0].serviceArn,
                                    f2type: 'ecs.service',
                                    f2data: data.services[0],
                                    f2region: region,
                                    name: data.services[0].serviceName,
                                    clusterarn: data.services[0].clusterArn,
                                    desiredpendingrunning: data.services[0].desiredCount + "/" + data.services[0].pendingCount + "/" + data.services[0].runningCount,
                                    launchtype: data.services[0].launchType,
                                    schedulingstrategy: data.services[0].schedulingStrategy
                                }]);

                                if (data.services[0].taskSets && data.services[0].taskSets.length) {
                                    await sdkcall("ECS", "describeTaskSets", {
                                        cluster: clusterArn,
                                        service: serviceArn,
                                        taskSets: data.services[0].taskSets.map((taskset) => taskset.taskSetArn)
                                    }, true).then((data) => {
                                        data.taskSets.forEach(taskset => {
                                            $('#section-compute-ecs-tasksets-datatable').deferredBootstrapTable('append', [{
                                                f2id: taskset.taskSetArn,
                                                f2type: 'ecs.taskset',
                                                f2data: taskset,
                                                f2region: region,
                                                tasksetid: taskset.id,
                                                service: taskset.serviceArn,
                                                cluster: taskset.clusterArn
                                            }]);
                                            if (taskset.status == "PRIMARY") {
                                                $('#section-compute-ecs-primarytasksets-datatable').deferredBootstrapTable('append', [{
                                                    f2id: taskset.taskSetArn,
                                                    f2type: 'ecs.primarytaskset',
                                                    f2data: taskset,
                                                    f2region: region,
                                                    tasksetid: taskset.id,
                                                    service: taskset.serviceArn,
                                                    cluster: taskset.clusterArn
                                                }]);
                                            }
                                        });
                                    });
                                }
                            }
                        });
                    }));
                })
            ]);
        }));

        unblockUI('#section-compute-ecs-clusters-datatable');
        unblockUI('#section-compute-ecs-services-datatable');
        unblockUI('#section-compute-ecs-primarytasksets-datatable');
        unblockUI('#section-compute-ecs-tasksets-datatable');
    });

    await sdkcall("ApplicationAutoScaling", "describeScalableTargets", {
        ServiceNamespace: "ecs"
    }, true).then(async (data) => {
        $('#section-compute-ecs-applicationautoscalingscalabletargets-datatable').bootstrapTable('removeAll');

        if (data.ScalableTargets) {
            await Promise.all(data.ScalableTargets.map(target => {
                return sdkcall("ApplicationAutoScaling", "describeScheduledActions", {
                    ServiceNamespace: "ecs",
                    ResourceId: target.ResourceId,
                    ScalableDimension: target.ScalableDimension
                }, true).then((actions) => {
                    target['ScheduledActions'] = actions.ScheduledActions;

                    $('#section-compute-ecs-applicationautoscalingscalabletargets-datatable').deferredBootstrapTable('append', [{
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
        }

        unblockUI('#section-compute-ecs-applicationautoscalingscalabletargets-datatable');
    });

    await sdkcall("ApplicationAutoScaling", "describeScalingPolicies", {
        ServiceNamespace: "ecs"
    }, true).then(async (data) => {
        $('#section-compute-ecs-applicationautoscalingscalingpolicies-datatable').bootstrapTable('removeAll');

        if (data.ScalingPolicies) {
            data.ScalingPolicies.forEach(policy => {
                $('#section-compute-ecs-applicationautoscalingscalingpolicies-datatable').deferredBootstrapTable('append', [{
                    f2id: policy.PolicyARN,
                    f2type: 'applicationautoscaling.scalingpolicy',
                    f2data: policy,
                    f2region: region,
                    resourceid: policy.ResourceId,
                    scalabledimension: policy.ScalableDimension,
                    policyname: policy.PolicyName,
                    policytype: policy.PolicyType
                }]);
            });
        }

        unblockUI('#section-compute-ecs-applicationautoscalingscalingpolicies-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "ecs.cluster") {
        reqParams.cfn['ClusterName'] = obj.data.clusterName;
        reqParams.tf['name'] = obj.data.clusterName;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            obj.data.tags.forEach(tag => {
                reqParams.cfn['Tags'].push({
                    'Name': tag.name,
                    'Value': tag.value
                });
            });
        }
        if (obj.data.settings) {
            reqParams.cfn['ClusterSettings'] = [];
            obj.data.settings.forEach(setting => {
                reqParams.cfn['ClusterSettings'].push({
                    'Name': setting.name,
                    'Value': setting.value
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ecs', obj.id, 'AWS::ECS::Cluster'),
            'region': obj.region,
            'service': 'ecs',
            'type': 'AWS::ECS::Cluster',
            'terraformType': 'aws_ecs_cluster',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.clusterName,
                'GetAtt': {
                    'Arn': obj.data.clusterArn
                },
                'Import': {
                    'ClusterName': obj.data.clusterName
                }
            }
        });
    } else if (obj.type == "ecs.service") {
        reqParams.cfn['ServiceName'] = obj.data.serviceName;
        reqParams.tf['name'] = obj.data.serviceName;
        reqParams.cfn['Cluster'] = obj.data.clusterArn;
        reqParams.tf['cluster'] = obj.data.clusterArn;
        if (obj.data.loadBalancers) {
            reqParams.cfn['LoadBalancers'] = [];
            reqParams.tf['load_balancer'] = [];
            obj.data.loadBalancers.forEach(loadBalancer => {
                reqParams.cfn['LoadBalancers'].push({
                    'TargetGroupArn': loadBalancer.targetGroupArn,
                    'LoadBalancerName': loadBalancer.loadBalancerName,
                    'ContainerName': loadBalancer.containerName,
                    'ContainerPort': loadBalancer.containerPort
                });
                reqParams.tf['load_balancer'].push({
                    'target_group_arn': loadBalancer.targetGroupArn,
                    'elb_name': loadBalancer.loadBalancerName,
                    'container_name': loadBalancer.containerName,
                    'container_port': loadBalancer.containerPort
                });
            });
        }
        if (obj.data.serviceRegistries) {
            reqParams.cfn['ServiceRegistries'] = [];
            reqParams.tf['service_registries'] = [];
            obj.data.serviceRegistries.forEach(serviceRegistry => {
                reqParams.cfn['ServiceRegistries'].push({
                    'RegistryArn': serviceRegistry.registryArn,
                    'Port': serviceRegistry.port,
                    'ContainerName': serviceRegistry.containerName,
                    'ContainerPort': serviceRegistry.containerPort
                });
                reqParams.tf['service_registries'].push({
                    'registry_arn': serviceRegistry.registryArn,
                    'port': serviceRegistry.port,
                    'container_name': serviceRegistry.containerName,
                    'container_port': serviceRegistry.containerPort
                });
            });
        }
        reqParams.cfn['DesiredCount'] = obj.data.desiredCount;
        reqParams.tf['desired_count'] = obj.data.desiredCount;
        reqParams.cfn['LaunchType'] = obj.data.launchType;
        reqParams.tf['launch_type'] = obj.data.launchType;
        reqParams.cfn['PlatformVersion'] = obj.data.platformVersion;
        reqParams.tf['platform_version'] = obj.data.platformVersion;
        reqParams.cfn['TaskDefinition'] = obj.data.taskDefinition;
        reqParams.tf['task_definition'] = obj.data.taskDefinition;
        if (obj.data.deploymentConfiguration) {
            reqParams.cfn['DeploymentConfiguration'] = {
                'MaximumPercent': obj.data.deploymentConfiguration.maximumPercent,
                'MinimumHealthyPercent': obj.data.deploymentConfiguration.minimumHealthyPercent
            };
            reqParams.tf['deployment_maximum_percent'] = obj.data.deploymentConfiguration.maximumPercent;
            reqParams.tf['deployment_minimum_healthy_percent'] = obj.data.deploymentConfiguration.minimumHealthyPercent;
        }
        reqParams.cfn['Role'] = obj.data.roleArn;
        reqParams.tf['iam_role'] = obj.data.roleArn;
        if (obj.data.placementConstraints) {
            reqParams.cfn['PlacementConstraints'] = [];
            reqParams.tf['placement_constraints'] = [];
            obj.data.placementConstraints.forEach(placementConstraint => {
                reqParams.cfn['PlacementConstraints'].push({
                    'Type': placementConstraint.type,
                    'Expression': placementConstraint.expression
                });
                reqParams.tf['placement_constraints'].push({
                    'type': placementConstraint.type,
                    'expression': placementConstraint.expression
                });
            });
        }
        if (obj.data.placementStrategy) {
            reqParams.cfn['PlacementStrategies'] = [];
            reqParams.tf['ordered_placement_strategy'] = [];
            obj.data.placementStrategy.forEach(placementStrategy => {
                reqParams.cfn['PlacementStrategies'].push({
                    'Type': placementStrategy.type,
                    'Field': placementStrategy.field
                });
                reqParams.tf['ordered_placement_strategy'].push({
                    'type': placementStrategy.type,
                    'field': placementStrategy.field
                });
            });
        }
        if (obj.data.networkConfiguration && obj.data.networkConfiguration.awsvpcConfiguration) {
            reqParams.cfn['NetworkConfiguration'] = {
                'AwsvpcConfiguration': {
                    'AssignPublicIp': obj.data.networkConfiguration.awsvpcConfiguration.assignPublicIp,
                    'SecurityGroups': obj.data.networkConfiguration.awsvpcConfiguration.securityGroups,
                    'Subnets': obj.data.networkConfiguration.awsvpcConfiguration.subnets
                }
            };
            reqParams.tf['network_configuration'] = {
                'assign_public_ip': obj.data.networkConfiguration.awsvpcConfiguration.assignPublicIp,
                'security_groups': obj.data.networkConfiguration.awsvpcConfiguration.securityGroups,
                'subnets': obj.data.networkConfiguration.awsvpcConfiguration.subnets
            };
        }
        reqParams.cfn['HealthCheckGracePeriodSeconds'] = obj.data.healthCheckGracePeriodSeconds;
        reqParams.tf['health_check_grace_period_seconds'] = obj.data.healthCheckGracePeriodSeconds;
        reqParams.cfn['SchedulingStrategy'] = obj.data.schedulingStrategy;
        reqParams.tf['scheduling_strategy'] = obj.data.schedulingStrategy;
        if (obj.data.deploymentController) {
            reqParams.cfn['DeploymentController'] = {
                'Type': obj.data.deploymentController.type
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ecs', obj.id, 'AWS::ECS::Service'),
            'region': obj.region,
            'service': 'ecs',
            'type': 'AWS::ECS::Service',
            'terraformType': 'aws_ecs_service',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.serviceArn,
                'GetAtt': {
                    'Name': obj.data.serviceName
                },
                'Import': {
                    'ServiceArn': obj.data.serviceArn,
                    'Cluster': obj.data.clusterArn
                }
            }
        });
    } else if (obj.type == "ecs.taskdefinition") {
        if (obj.data.containerDefinitions) {
            reqParams.cfn['ContainerDefinitions'] = [];
            obj.data.containerDefinitions.forEach(containerDefinition => {
                var repositoryCredentials = null;
                if (containerDefinition.repositoryCredentials) {
                    repositoryCredentials = {
                        'CredentialsParameter': containerDefinition.repositoryCredentials.credentialsParameter
                    };
                }
                var portMappings = null;
                if (containerDefinition.portMappings) {
                    portMappings = [];
                    containerDefinition.portMappings.forEach(portmapping => {
                        portMappings.push({
                            'ContainerPort': portmapping.containerPort,
                            'HostPort': portmapping.hostPort,
                            'Protocol': portmapping.protocol
                        });
                    });
                }
                var environment = null;
                if (containerDefinition.environment) {
                    environment = [];
                    containerDefinition.environment.forEach(env => {
                        environment.push({
                            'Name': env.name,
                            'Value': env.value
                        });
                    });
                }
                var mountPoints = null;
                if (containerDefinition.mountPoints) {
                    mountPoints = [];
                    containerDefinition.mountPoints.forEach(mountpoint => {
                        mountPoints.push({
                            'SourceVolume': mountpoint.sourceVolume,
                            'ContainerPath': mountpoint.containerPath,
                            'ReadOnly': mountpoint.readOnly
                        });
                    });
                }
                var volumesFrom = null;
                if (containerDefinition.volumesFrom) {
                    volumesFrom = [];
                    containerDefinition.volumesFrom.forEach(vf => {
                        volumesFrom.push({
                            'SourceContainer': vf.sourceContainer,
                            'ReadOnly': vf.readOnly
                        });
                    });
                }
                var linuxParameters = null;
                if (containerDefinition.linuxParameters) {
                    var capabilities = null;
                    if (containerDefinition.linuxParameters.capabilities) {
                        capabilities = {
                            'Add': containerDefinition.linuxParameters.capabilities.add,
                            'Drop': containerDefinition.linuxParameters.capabilities.drop
                        };
                    }
                    var devices = null;
                    if (containerDefinition.linuxParameters.devices) {
                        devices = [];
                        containerDefinition.linuxParameters.devices.forEach(device => {
                            devices.push({
                                'HostPath': device.hostPath,
                                'ContainerPath': device.containerPath,
                                'Permissions': device.permissions
                            });
                        });
                    }
                    var tmpfs = null;
                    if (containerDefinition.linuxParameters.tmpfs) {
                        tmpfs = [];
                        containerDefinition.linuxParameters.tmpfs.forEach(fs => {
                            tmpfs.push({
                                'ContainerPath': fs.containerPath,
                                'Size': fs.size,
                                'MountOptions': fs.mountOptions
                            });
                        });
                    }
                    linuxParameters = {
                        'Capabilities': capabilities,
                        'Devices': devices,
                        'InitProcessEnabled': containerDefinition.linuxParameters.initProcessEnabled,
                        'SharedMemorySize': containerDefinition.linuxParameters.sharedMemorySize,
                        'MaxSwap': containerDefinition.linuxParameters.maxSwap,
                        'Swappiness': containerDefinition.linuxParameters.swappiness,
                        'Tmpfs': tmpfs
                    }
                }
                var secrets = null;
                if (containerDefinition.secrets) {
                    secrets = [];
                    containerDefinition.secrets.forEach(secret => {
                        secrets.push({
                            'Name': secret.name,
                            'ValueFrom': secret.valueFrom
                        });
                    });
                }
                var dependsOn = null;
                if (containerDefinition.dependsOn) {
                    dependsOn = [];
                    containerDefinition.dependsOn.forEach(depends => {
                        dependsOn.push({
                            'ContainerName': depends.containerName,
                            'Condition': depends.condition
                        });
                    });
                }
                var extraHosts = null;
                if (containerDefinition.extraHosts) {
                    extraHosts = [];
                    containerDefinition.extraHosts.forEach(extrahost => {
                        extraHosts.push({
                            'Hostname': extrahost.hostname,
                            'IpAddress': extrahost.ipAddress
                        });
                    });
                }
                var ulimits = null;
                if (containerDefinition.ulimits) {
                    ulimits = [];
                    containerDefinition.ulimits.forEach(ulimit => {
                        ulimits.push({
                            'Name': ulimit.name,
                            'SoftLimit': ulimit.softLimit,
                            'HardLimit': ulimit.hardLimit
                        });
                    });
                }
                var logConfiguration = null;
                if (containerDefinition.logConfiguration) {
                    logConfiguration = {
                        'LogDriver': containerDefinition.logConfiguration.logDriver,
                        'Options': containerDefinition.logConfiguration.options
                    };
                }
                var healthCheck = null;
                if (containerDefinition.healthCheck) {
                    healthCheck = {
                        'Command': containerDefinition.healthCheck.command,
                        'Interval': containerDefinition.healthCheck.interval,
                        'Timeout': containerDefinition.healthCheck.timeout,
                        'Retries': containerDefinition.healthCheck.retries,
                        'StartPeriod': containerDefinition.healthCheck.startPeriod
                    };
                }
                var firelensConfiguration = null;
                if (containerDefinition.firelensConfiguration) {
                    firelensConfiguration = {
                        'Type': obj.data.firelensConfiguration.type,
                        'Options': obj.data.firelensConfiguration.options
                    };
                }
                reqParams.cfn['ContainerDefinitions'].push({
                    'Command': containerDefinition.command,
                    'Cpu': (containerDefinition.cpu == 0) ? null : containerDefinition.cpu,
                    'DisableNetworking': containerDefinition.disableNetworking,
                    'DnsSearchDomains': containerDefinition.dnsSearchDomains,
                    'DnsServers': containerDefinition.dnsServers,
                    'DockerLabels': containerDefinition.dockerLabels,
                    'DockerSecurityOptions': containerDefinition.dockerSecurityOptions,
                    'EntryPoint': containerDefinition.entryPoint,
                    'Environment': environment,
                    'Essential': containerDefinition.essential,
                    'ExtraHosts': extraHosts,
                    'FirelensConfiguration': firelensConfiguration,
                    'HealthCheck': healthCheck,
                    'Hostname': containerDefinition.hostname,
                    'Image': containerDefinition.image,
                    'Links': containerDefinition.links,
                    'LinuxParameters': linuxParameters,
                    'LogConfiguration': logConfiguration,
                    'Memory': containerDefinition.memory,
                    'MemoryReservation': containerDefinition.memoryReservation,
                    'MountPoints': mountPoints,
                    'Name': containerDefinition.name,
                    'PortMappings': portMappings,
                    'Privileged': containerDefinition.privileged,
                    'ReadonlyRootFilesystem': containerDefinition.readonlyRootFilesystem,
                    'RepositoryCredentials': repositoryCredentials,
                    'Secrets': secrets,
                    'Ulimits': ulimits,
                    'User': containerDefinition.user,
                    'VolumesFrom': volumesFrom,
                    'WorkingDirectory': containerDefinition.workingDirectory
                });
            });
            reqParams.tf['container_definitions'] = JSON.stringify(obj.data.containerDefinitions);
        }
        reqParams.cfn['Family'] = obj.data.family;
        reqParams.tf['family'] = obj.data.family;
        reqParams.cfn['TaskRoleArn'] = obj.data.taskRoleArn;
        reqParams.tf['task_role_arn'] = obj.data.taskRoleArn;
        reqParams.cfn['ExecutionRoleArn'] = obj.data.executionRoleArn;
        reqParams.tf['execution_role_arn'] = obj.data.executionRoleArn;
        reqParams.cfn['NetworkMode'] = obj.data.networkMode;
        reqParams.tf['network_mode'] = obj.data.networkMode;
        if (obj.data.volumes) {
            reqParams.cfn['Volumes'] = [];
            reqParams.tf['volume'] = [];
            obj.data.volumes.forEach(volume => {
                var host = null;
                var host_path = null;
                if (volume.host) {
                    host = {
                        'SourcePath': volume.host.sourcePath
                    };
                    host_path = volume.host.sourcePath;
                }
                var dockerVolumeConfiguration = null;
                var tfDockerVolumeConfiguration = null;
                if (volume.dockerVolumeConfiguration) {
                    dockerVolumeConfiguration = {
                        'Scope': volume.dockerVolumeConfiguration.scope,
                        'Autoprovision': volume.dockerVolumeConfiguration.autoprovision,
                        'Driver': volume.dockerVolumeConfiguration.driver,
                        'DriverOpts': volume.dockerVolumeConfiguration.driverOpts,
                        'Labels': volume.dockerVolumeConfiguration.labels
                    };
                    tfDockerVolumeConfiguration = {
                        'scope': volume.dockerVolumeConfiguration.scope,
                        'autoprovision': volume.dockerVolumeConfiguration.autoprovision,
                        'driver': volume.dockerVolumeConfiguration.driver,
                        'driver_opts': volume.dockerVolumeConfiguration.driverOpts,
                        'labels': volume.dockerVolumeConfiguration.labels
                    };
                }
                reqParams.cfn['Volumes'].push({
                    'Name': volume.name,
                    'Host': host,
                    'DockerVolumeConfiguration': dockerVolumeConfiguration
                });
                reqParams.tf['volume'].push({
                    'name': volume.name,
                    'host_path': host_path,
                    'docker_volume_configuration': tfDockerVolumeConfiguration
                });
            });
        }
        reqParams.cfn['RequiresCompatibilities'] = obj.data.requiresCompatibilities;
        reqParams.tf['requires_compatibilities'] = obj.data.requiresCompatibilities;
        reqParams.cfn['Cpu'] = obj.data.cpu;
        reqParams.tf['cpu'] = obj.data.cpu;
        reqParams.cfn['Memory'] = obj.data.memory;
        reqParams.tf['memory'] = obj.data.memory;
        if (obj.data.placementConstraints) {
            reqParams.cfn['PlacementConstraints'] = [];
            reqParams.tf['placement_constraints'] = [];
            obj.data.placementConstraints.forEach(placementConstraint => {
                reqParams.cfn['PlacementConstraints'].push({
                    'Type': placementConstraint.type,
                    'Expression': placementConstraint.expression
                });
                reqParams.tf['placement_constraints'].push({
                    'type': placementConstraint.type,
                    'expression': placementConstraint.expression
                });
            });
        }
        if (obj.data.inferenceAccelerators) {
            reqParams.cfn['InferenceAccelerators'] = [];
            obj.data.inferenceAccelerators.forEach(inferenceAccelerator => {
                reqParams.cfn['InferenceAccelerators'].push({
                    'DeviceName': inferenceAccelerator.deviceName,
                    'DeviceType': inferenceAccelerator.deviceType
                })
            });
        }

        /*
        TODO:
        ProxyConfiguration
        ContainerDefinition:
            DependsOn
            StartTimeout
            StopTimeout

        ipc_mode
        pid_mode
        proxy_configuration
        tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ecs', obj.id, 'AWS::ECS::TaskDefinition'),
            'region': obj.region,
            'service': 'ecs',
            'type': 'AWS::ECS::TaskDefinition',
            'terraformType': 'aws_ecs_task_definition',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.taskDefinitionArn,
                'Terraform': {
                    'arn': obj.data.taskDefinitionArn
                },
                'Import': {
                    'TaskDefinitionArn': obj.data.taskDefinitionArn
                }
            }
        });
    } else if (obj.type == "ecs.primarytaskset") {
        reqParams.cfn['Cluster'] = obj.data.clusterArn;
        reqParams.cfn['Service'] = obj.data.serviceArn;
        reqParams.cfn['TaskSetId'] = obj.data.id;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ecs', obj.id, 'AWS::ECS::PrimaryTaskSet'),
            'region': obj.region,
            'service': 'ecs',
            'type': 'AWS::ECS::PrimaryTaskSet',
            'options': reqParams
        });
    } else if (obj.type == "ecs.taskset") {
        reqParams.cfn['Cluster'] = obj.data.clusterArn;
        reqParams.cfn['Service'] = obj.data.serviceArn;
        reqParams.cfn['ExternalId'] = obj.data.externalId;
        reqParams.cfn['TaskDefinition'] = obj.data.taskDefinition;
        reqParams.cfn['LaunchType'] = obj.data.launchType;
        reqParams.cfn['PlatformVersion'] = obj.data.platformVersion;
        if (obj.data.networkConfiguration && obj.data.networkConfiguration.awsvpcConfiguration) {
            reqParams.cfn['NetworkConfiguration'] = {
                'AwsVpcConfiguration': {
                    'AssignPublicIp': obj.data.networkConfiguration.awsvpcConfiguration.assignPublicIp,
                    'SecurityGroups': obj.data.networkConfiguration.awsvpcConfiguration.securityGroups,
                    'Subnets': obj.data.networkConfiguration.awsvpcConfiguration.subnets
                }
            };
        }
        if (obj.data.loadBalancers && obj.data.loadBalancers.length) {
            reqParams.cfn['LoadBalancers'] = [];
            obj.data.loadBalancers.forEach(loadbalancer => {
                reqParams.cfn['LoadBalancers'].push({
                    'TargetGroupArn': loadbalancer.targetGroupArn,
                    'LoadBalancerName': loadbalancer.loadBalancerName,
                    'ContainerName': loadbalancer.containerName,
                    'ContainerPort': loadbalancer.containerPort
                });
            });
        }
        if (obj.data.serviceRegistries && obj.data.serviceRegistries.length) {
            reqParams.cfn['ServiceRegistries'] = [];
            obj.data.serviceRegistries.forEach(serviceregistry => {
                reqParams.cfn['ServiceRegistries'].push({
                    'RegistryArn': loadbalancer.registryArn,
                    'Port': loadbalancer.port,
                    'ContainerName': loadbalancer.containerName,
                    'ContainerPort': loadbalancer.containerPort
                });
            });
        }
        if (obj.data.scale) {
            reqParams.cfn['Scale'] = {
                'Value': obj.data.scale.value,
                'Unit': obj.data.scale.unit
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ecs', obj.id, 'AWS::ECS::TaskSet'),
            'region': obj.region,
            'service': 'ecs',
            'type': 'AWS::ECS::TaskSet',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.id,
                'GetAtt': {
                    'Id': obj.data.id
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
