/* ========================================================================== */
// Batch
/* ========================================================================== */

sections.push({
    'category': 'Compute',
    'service': 'Batch',
    'resourcetypes': {
        'Compute Environments': {
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
                        field: 'ecsclusterarn',
                        title: 'ECS Cluster ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Job Definitions': {
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
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'revision',
                        title: 'Revision',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Job Queues': {
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
                        field: 'priority',
                        title: 'Priority',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Scheduling Policies': {
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
                        field: 'arn',
                        title: 'ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableComputeBatch() {
    blockUI('#section-compute-batch-computeenvironments-datatable');
    blockUI('#section-compute-batch-jobdefinitions-datatable');
    blockUI('#section-compute-batch-jobqueues-datatable');
    blockUI('#section-compute-batch-schedulingpolicies-datatable');

    await sdkcall("Batch", "describeComputeEnvironments", {
        // no params
    }, true).then((data) => {
        $('#section-compute-batch-computeenvironments-datatable').deferredBootstrapTable('removeAll');

        data.computeEnvironments.forEach(computeEnvironment => {
            $('#section-compute-batch-computeenvironments-datatable').deferredBootstrapTable('append', [{
                f2id: computeEnvironment.computeEnvironmentArn,
                f2type: 'batch.computeenvironment',
                f2data: computeEnvironment,
                f2region: region,
                name: computeEnvironment.computeEnvironmentName,
                ecsclusterarn: computeEnvironment.ecsClusterArn,
                type: computeEnvironment.type
            }]);
        });

        unblockUI('#section-compute-batch-computeenvironments-datatable');
    });

    await sdkcall("Batch", "describeJobDefinitions", {
        // no params
    }, true).then((data) => {
        $('#section-compute-batch-jobdefinitions-datatable').deferredBootstrapTable('removeAll');

        data.jobDefinitions.forEach(jobDefinition => {
            $('#section-compute-batch-jobdefinitions-datatable').deferredBootstrapTable('append', [{
                f2id: jobDefinition.jobDefinitionArn,
                f2type: 'batch.jobdefinition',
                f2data: jobDefinition,
                f2region: region,
                name: jobDefinition.jobDefinitionName,
                type: jobDefinition.type,
                revision: jobDefinition.revision
            }]);
        });

        unblockUI('#section-compute-batch-jobdefinitions-datatable');
    });

    await sdkcall("Batch", "describeJobQueues", {
        // no params
    }, true).then((data) => {
        $('#section-compute-batch-jobqueues-datatable').deferredBootstrapTable('removeAll');

        data.jobQueues.forEach(jobQueue => {
            $('#section-compute-batch-jobqueues-datatable').deferredBootstrapTable('append', [{
                f2id: jobQueue.jobQueueArn,
                f2type: 'batch.jobqueue',
                f2data: jobQueue,
                f2region: region,
                name: jobQueue.jobQueueName,
                enabled: (jobQueue.state == "ENABLED"),
                priority: jobQueue.priority
            }]);
        });

        unblockUI('#section-compute-batch-jobqueues-datatable');
    });

    await sdkcall("Batch", "listSchedulingPolicies", {
        // no params
    }, true).then(async (data) => {
        $('#section-compute-batch-schedulingpolicies-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.schedulingPolicies.map(async (schedulingPolicy) => {
            await sdkcall("Batch", "describeSchedulingPolicies", {
                arns: [schedulingPolicy.arn]
            }, true).then(async (data) => {
                $('#section-compute-batch-schedulingpolicies-datatable').deferredBootstrapTable('append', [{
                    f2id: data.schedulingPolicies[0].arn,
                    f2type: 'batch.schedulingpolicy',
                    f2data: data.schedulingPolicies[0],
                    f2region: region,
                    name: data.schedulingPolicies[0].name,
                    arn: data.schedulingPolicies[0].arn
                }]);
            });
        }));
    });

    unblockUI('#section-compute-batch-schedulingpolicies-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "batch.computeenvironment") {
        reqParams.cfn['ComputeEnvironmentName'] = obj.data.computeEnvironmentName;
        reqParams.tf['compute_environment_name'] = obj.data.computeEnvironmentName;
        reqParams.cfn['Type'] = obj.data.type;
        reqParams.tf['type'] = obj.data.type;
        reqParams.cfn['State'] = obj.data.state;
        reqParams.tf['state'] = obj.data.state;
        reqParams.cfn['ServiceRole'] = obj.data.serviceRole;
        reqParams.tf['service_role'] = obj.data.serviceRole;
        if (obj.data.computeResources) {
            var launchTemplate = null;
            var tfLaunchTemplate = null;
            if (obj.data.computeResources.launchTemplate) {
                launchTemplate = {
                    'LaunchTemplateId': obj.data.computeResources.launchTemplate.launchTemplateId,
                    'LaunchTemplateName': obj.data.computeResources.launchTemplate.launchTemplateName,
                    'Version': obj.data.computeResources.launchTemplate.version
                };
                tfLaunchTemplate = {
                    'launch_template_id': obj.data.computeResources.launchTemplate.launchTemplateId,
                    'launch_template_name': obj.data.computeResources.launchTemplate.launchTemplateName,
                    'version': obj.data.computeResources.launchTemplate.version
                };
            }

            reqParams.cfn['ComputeResources'] = {
                'Type': obj.data.computeResources.type,
                'MinvCpus': obj.data.computeResources.minvCpus,
                'MaxvCpus': obj.data.computeResources.maxvCpus,
                'DesiredvCpus': obj.data.computeResources.desiredvCpus,
                'InstanceTypes': obj.data.computeResources.instanceTypes,
                'ImageId': obj.data.computeResources.imageId,
                'Subnets': obj.data.computeResources.subnets,
                'SecurityGroupIds': obj.data.computeResources.securityGroupIds,
                'Ec2KeyPair': obj.data.computeResources.ec2KeyPair,
                'InstanceRole': obj.data.computeResources.instanceRole,
                'Tags': obj.data.computeResources.tags,
                'PlacementGroup': obj.data.computeResources.placementGroup,
                'BidPercentage': obj.data.computeResources.bidPercentage,
                'SpotIamFleetRole': obj.data.computeResources.spotIamFleetRole,
                'LaunchTemplate': launchTemplate,
                'AllocationStrategy': obj.data.computeResources.allocationStrategy
            };
            reqParams.tf['compute_resources'] = {
                'type': obj.data.computeResources.type,
                'min_vcpus': obj.data.computeResources.minvCpus,
                'max_vcpus': obj.data.computeResources.maxvCpus,
                'desired_vcpus': obj.data.computeResources.desiredvCpus,
                'instance_type': obj.data.computeResources.instanceTypes,
                'image_id': obj.data.computeResources.imageId,
                'subnets': obj.data.computeResources.subnets,
                'security_group_ids': obj.data.computeResources.securityGroupIds,
                'ec2_key_pair': obj.data.computeResources.ec2KeyPair,
                'instance_role': obj.data.computeResources.instanceRole,
                'tags': obj.data.computeResources.tags,
                'bid_percentage': obj.data.computeResources.bidPercentage,
                'spot_iam_fleet_role': obj.data.computeResources.spotIamFleetRole,
                'launch_template': tfLaunchTemplate
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('batch', obj.id, 'AWS::Batch::ComputeEnvironment'),
            'region': obj.region,
            'service': 'batch',
            'type': 'AWS::Batch::ComputeEnvironment',
            'terraformType': 'aws_batch_compute_environment',
            'options': reqParams
        });
    } else if (obj.type == "batch.jobqueue") {
        reqParams.cfn['ComputeEnvironmentOrder'] = [];
        reqParams.tf['compute_environments'] = [];
        obj.data.computeEnvironmentOrder.forEach(computeEnvironmentOrder => {
            reqParams.cfn['ComputeEnvironmentOrder'].push({
                'ComputeEnvironment': computeEnvironmentOrder.computeEnvironment,
                'Order': computeEnvironmentOrder.order
            });
            reqParams.tf['compute_environments'].push(computeEnvironmentOrder.computeEnvironment);
        });
        reqParams.cfn['Priority'] = obj.data.priority;
        reqParams.tf['priority'] = obj.data.priority;
        reqParams.cfn['State'] = obj.data.state;
        reqParams.tf['state'] = obj.data.state;
        reqParams.cfn['JobQueueName'] = obj.data.jobQueueName;
        reqParams.tf['name'] = obj.data.jobQueueName;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('batch', obj.id, 'AWS::Batch::JobQueue'),
            'region': obj.region,
            'service': 'batch',
            'type': 'AWS::Batch::JobQueue',
            'terraformType': 'aws_batch_job_queue',
            'options': reqParams
        });
    } else if (obj.type == "batch.jobdefinition") {
        reqParams.cfn['JobDefinitionName'] = obj.data.jobDefinitionName;
        reqParams.tf['name'] = obj.data.jobDefinitionName;
        reqParams.cfn['Type'] = obj.data.type;
        reqParams.tf['type'] = obj.data.type;
        reqParams.cfn['Parameters'] = obj.data.parameters;
        reqParams.tf['parameters'] = obj.data.parameters;
        if (obj.data.retryStrategy) {
            reqParams.cfn['RetryStrategy'] = {
                'Attempts': obj.data.retryStrategy.attempts
            };
            reqParams.tf['retry_strategy'] = {
                'attempts': obj.data.retryStrategy.attempts
            };
        }
        if (obj.data.timeout) {
            reqParams.cfn['Timeout'] = {
                'AttemptDurationSeconds': obj.data.timeout.attemptDurationSeconds
            };
            reqParams.tf['timeout'] = {
                'attempt_duration_seconds': obj.data.timeout.attemptDurationSeconds
            };
        }
        if (obj.data.containerProperties) {
            var volumes = null;
            if (obj.data.containerProperties.volumes) {
                volumes = [];
                obj.data.containerProperties.volumes.forEach(volume => {
                    var host = null;
                    if (volume.host) {
                        host = {
                            'SourcePath': volume.host.sourcePath
                        };
                    }
                    volumes.push({
                        'Host': host,
                        'Name': volume.name
                    });
                });
            }

            var environment = null;
            if (obj.data.containerProperties.environment) {
                environment = [];
                obj.data.containerProperties.environment.forEach(environmentItem => {
                    environment.push({
                        'Name': environmentItem.name,
                        'Value': environmentItem.value
                    });
                });
            }

            var mountPoints = null;
            if (obj.data.containerProperties.mountPoints) {
                mountPoints = [];
                obj.data.containerProperties.mountPoints.forEach(mountPoint => {
                    mountPoints.push({
                        'ReadOnly': mountPoint.readOnly,
                        'SourceVolume': mountPoint.sourceVolume,
                        'ContainerPath': mountPoint.containerPath
                    });
                });
            }

            var ulimits = null;
            if (obj.data.containerProperties.ulimits) {
                ulimits = [];
                obj.data.containerProperties.ulimits.forEach(ulimit => {
                    ulimit.push({
                        'SoftLimit': ulimit.softLimit,
                        'HardLimit': ulimit.hardLimit,
                        'Name': ulimit.name
                    });
                });
            }

            var linuxParameters = null;
            if (obj.data.containerProperties.linuxParameters) {
                var devices = null;
                if (obj.data.containerProperties.linuxParameters.devices) {
                    devices = {
                        'HostPath': obj.data.containerProperties.linuxParameters.devices.hostPath,
                        'ContainerPath': obj.data.containerProperties.linuxParameters.devices.containerPath,
                        'Permissions': obj.data.containerProperties.linuxParameters.devices.permissions
                    };
                }
                var tmpfs = null;
                if (obj.data.containerProperties.linuxParameters.tmpfs) {
                    tmpfs = [];
                    obj.data.containerProperties.linuxParameters.tmpfs.forEach(tmpfse => {
                        tmpfs.push({
                            'ContainerPath': tmpfse.containerPath,
                            'Size': tmpfse.size,
                            'MountOptions': tmpfse.mountOptions
                        })
                    });
                }
                linuxParameters = {
                    'Devices': devices,
                    'InitProcessEnabled': obj.data.containerProperties.linuxParameters.initProcessEnabled,
                    'MaxSwap': obj.data.containerProperties.linuxParameters.maxSwap,
                    'SharedMemorySize': obj.data.containerProperties.linuxParameters.sharedMemorySize,
                    'Swappiness': obj.data.containerProperties.linuxParameters.swappiness,
                    'Tmpfs': tmpfs
                };
            }

            var logConfiguration = null;
            if (obj.data.containerProperties.logConfiguration) {
                var secretOptions = null;
                if (obj.data.containerProperties.logConfiguration.secretOptions) {
                    secretOptions = [];
                    obj.data.containerProperties.logConfiguration.secretOptions.forEach(secretOption => {
                        secretOptions.push({
                            'Name': secretOption.name,
                            'ValueFrom': secretOption.valueFrom
                        });
                    });
                }
                logConfiguration = {
                    'LogDriver': obj.data.containerProperties.logConfiguration.logDriver,
                    'Options': obj.data.containerProperties.logConfiguration.options,
                    'SecretOptions': secretOptions
                };
            }

            var secrets = null;
            if (obj.data.containerProperties.secrets) {
                secrets = [];
                obj.data.containerProperties.secrets.forEach(secret => {
                    secrets.push({
                        'Name': secret.name,
                        'ValueFrom': secret.valueFrom
                    });
                });
            }

            reqParams.cfn['ContainerProperties'] = {
                'MountPoints': mountPoints,
                'User': obj.data.containerProperties.user,
                'Volumes': volumes,
                'Command': obj.data.containerProperties.command,
                'Memory': obj.data.containerProperties.memory,
                'Privileged': obj.data.containerProperties.privileged,
                'Environment': environment,
                'JobRoleArn': obj.data.containerProperties.jobRoleArn,
                'ReadonlyRootFilesystem': obj.data.containerProperties.readonlyRootFilesystem,
                'Ulimits': ulimits,
                'Vcpus': obj.data.containerProperties.vcpus,
                'Image': obj.data.containerProperties.image,
                'ExecutionRoleArn': obj.data.containerProperties.executionRoleArn,
                'LinuxParameters': linuxParameters,
                'LogConfiguration': logConfiguration,
                'Secrets': secrets
            };
            reqParams.tf['container_properties'] = obj.data.containerProperties;
        }
        if (obj.data.nodeProperties) {
            var nodeRangeProperties = [];
            obj.data.nodeProperties.nodeRangeProperties.forEach(nodeRangeProperty => {
                var container = null;
                if (nodeRangeProperty.container) {
                    var volumes = null;
                    if (nodeRangeProperty.container.volumes) {
                        volumes = [];
                        nodeRangeProperty.container.volumes.forEach(volume => {
                            var host = null;
                            if (volume.host) {
                                host = {
                                    'SourcePath': volume.host.sourcePath
                                };
                            }
                            volumes.push({
                                'Host': host,
                                'Name': volume.name
                            });
                        });
                    }

                    var environment = null;
                    if (nodeRangeProperty.container.environment) {
                        environment = [];
                        nodeRangeProperty.container.environment.forEach(environmentItem => {
                            environment.push({
                                'Name': environmentItem.name,
                                'Value': environmentItem.value
                            });
                        });
                    }

                    var mountPoints = null;
                    if (nodeRangeProperty.container.mountPoints) {
                        mountPoints = [];
                        nodeRangeProperty.container.mountPoints.forEach(mountPoint => {
                            mountPoints.push({
                                'ReadOnly': mountPoint.readOnly,
                                'SourceVolume': mountPoint.sourceVolume,
                                'ContainerPath': mountPoint.containerPath
                            });
                        });
                    }

                    var ulimits = null;
                    if (nodeRangeProperty.container.ulimits) {
                        ulimits = [];
                        nodeRangeProperty.container.ulimits.forEach(ulimit => {
                            ulimit.push({
                                'SoftLimit': ulimit.softLimit,
                                'HardLimit': ulimit.hardLimit,
                                'Name': ulimit.name
                            });
                        });
                    }

                    container = {
                        'MountPoints': mountPoints,
                        'User': nodeRangeProperty.container.user,
                        'Volumes': volumes,
                        'Command': nodeRangeProperty.container.command,
                        'Memory': nodeRangeProperty.container.memory,
                        'Privileged': nodeRangeProperty.container.privileged,
                        'Environment': environment,
                        'JobRoleArn': nodeRangeProperty.container.jobRoleArn,
                        'ReadonlyRootFilesystem': nodeRangeProperty.container.readonlyRootFilesystem,
                        'Ulimits': ulimits,
                        'Vcpus': nodeRangeProperty.container.vcpus,
                        'Image': nodeRangeProperty.container.image
                    };
                }
                nodeRangeProperties.push({
                    'Container': container,
                    'TargetNodes': nodeRangeProperty.targetNodes
                });
            });
            reqParams.cfn['NodeProperties'] = {
                'MainNode': obj.data.nodeProperties.mainNode,
                'NumNodes': obj.data.nodeProperties.numNodes,
                'NodeRangeProperties': nodeRangeProperties
            };
        }
        if (obj.data.retryStrategy) {
            var evaluateOnExit = null;
            if (obj.data.retryStrategy.evaluateOnExit) {
                evaluateOnExit = [];
                obj.data.retryStrategy.evaluateOnExit.forEach(evaluateOnExitItem => {
                    evaluateOnExit.push({
                        'Action': evaluateOnExitItem.action,
                        'OnExitCode': evaluateOnExitItem.onExitCode,
                        'OnReason': evaluateOnExitItem.onReason,
                        'OnStatusReason': evaluateOnExitItem.onStatusReason,
                    })
                });
            }
            reqParams.cfn['RetryStrategy'] = {
                'Attempts': obj.data.retryStrategy.attempts,
                'EvaluateOnExit': evaluateOnExit,
            };
        }

        /*
        TODO:
        ResourceRequirement
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('batch', obj.id, 'AWS::Batch::JobDefinition'),
            'region': obj.region,
            'service': 'batch',
            'type': 'AWS::Batch::JobDefinition',
            'terraformType': 'aws_batch_job_definition',
            'options': reqParams
        });
    } else if (obj.type == "batch.schedulingpolicy") {
        reqParams.cfn['Name'] = obj.data.name;
        if (obj.data.fairsharePolicy) {
            var sharedistribution = null;
            if (obj.data.fairsharePolicy.shareDistribution) {
                sharedistribution = [];
                obj.data.fairsharePolicy.shareDistribution.forEach(sharedistributionitem => {
                    sharedistribution.push({
                        'ShareIdentifier': sharedistributionitem.shareIdentifier,
                        'WeightFactor': sharedistributionitem.weightFactor
                    });
                });
            }
            reqParams.cfn['FairsharePolicy'] = {
                'ComputeReservation': obj.data.fairsharePolicy.computeReservation,
                'ShareDecaySeconds': obj.data.fairsharePolicy.shareDecaySeconds,
                'ShareDistribution': sharedistribution
            };
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.tags) {
                reqParams.cfn['Tags'].push({
                    'Key': k,
                    'Value': obj.data.tags[k]
                });
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('batch', obj.id, 'AWS::Batch::SchedulingPolicy'),
            'region': obj.region,
            'service': 'batch',
            'type': 'AWS::Batch::SchedulingPolicy',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
