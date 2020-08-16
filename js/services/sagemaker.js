/* ========================================================================== */
// SageMaker
/* ========================================================================== */

sections.push({
    'category': 'Machine Learning',
    'service': 'SageMaker',
    'resourcetypes': {
        'Models': {
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
        'Endpoints': {
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
                        field: 'endpointconfigname',
                        title: 'Endpoint Config Name',
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
        'Endpoint Configs': {
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
                        field: 'kmskeyid',
                        title: 'KMS Key ID',
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
        'Notebook Instances': {
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
                        field: 'url',
                        title: 'URL',
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
                    },
                    {
                        field: 'subnetid',
                        title: 'Subnet ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'volumesize',
                        title: 'Volume Size',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Notebook Instance Lifecycle Configs': {
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
        'Code Repositories': {
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
        'Work Teams': {
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
        'Monitoring Schedules': {
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
                    }
                ]
            ]
        }
    }
});

async function updateDatatableMachineLearningSageMaker() {
    blockUI('#section-machinelearning-sagemaker-models-datatable');
    blockUI('#section-machinelearning-sagemaker-endpoints-datatable');
    blockUI('#section-machinelearning-sagemaker-endpointconfigs-datatable');
    blockUI('#section-machinelearning-sagemaker-notebookinstances-datatable');
    blockUI('#section-machinelearning-sagemaker-notebookinstancelifecycleconfigs-datatable');
    blockUI('#section-machinelearning-sagemaker-applicationautoscalingscalabletargets-datatable');
    blockUI('#section-machinelearning-sagemaker-applicationautoscalingscalingpolicies-datatable');
    blockUI('#section-machinelearning-sagemaker-coderepositories-datatable');
    blockUI('#section-machinelearning-sagemaker-workteams-datatable');
    blockUI('#section-machinelearning-sagemaker-monitoringschedules-datatable');

    await sdkcall("SageMaker", "listCodeRepositories", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-sagemaker-coderepositories-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.CodeRepositorySummaryList.map(coderepository => {
            return sdkcall("SageMaker", "describeCodeRepository", {
                CodeRepositoryName: coderepository.CodeRepositoryName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-coderepositories-datatable').deferredBootstrapTable('append', [{
                    f2id: data.CodeRepositoryName,
                    f2type: 'sagemaker.coderepository',
                    f2data: data,
                    f2region: region,
                    name: data.CodeRepositoryName,
                    creationtime: data.CreationTime
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-coderepositories-datatable');
    });

    await sdkcall("SageMaker", "listModels", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-sagemaker-models-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Models.map(model => {
            return sdkcall("SageMaker", "describeModel", {
                ModelName: model.ModelName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-models-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ModelName,
                    f2type: 'sagemaker.model',
                    f2data: data,
                    f2region: region,
                    name: data.ModelName,
                    creationtime: data.CreationTime
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-models-datatable');
    });

    await sdkcall("SageMaker", "listEndpoints", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-sagemaker-endpoints-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Endpoints.map(endpoint => {
            return sdkcall("SageMaker", "describeEndpoint", {
                EndpointName: endpoint.EndpointName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-endpoints-datatable').deferredBootstrapTable('append', [{
                    f2id: data.EndpointArn,
                    f2type: 'sagemaker.endpoint',
                    f2data: data,
                    f2region: region,
                    name: data.EndpointName,
                    endpointconfigname: data.EndpointConfigName,
                    creationtime: data.CreationTime
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-endpoints-datatable');
    });

    await sdkcall("SageMaker", "listEndpointConfigs", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-sagemaker-endpointconfigs-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.EndpointConfigs.map(endpointConfig => {
            return sdkcall("SageMaker", "describeEndpointConfig", {
                EndpointConfigName: endpointConfig.EndpointConfigName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-endpointconfigs-datatable').deferredBootstrapTable('append', [{
                    f2id: data.EndpointConfigArn,
                    f2type: 'sagemaker.endpointconfig',
                    f2data: data,
                    f2region: region,
                    name: data.EndpointConfigName,
                    kmskeyid: data.KmsKeyId,
                    creationtime: data.CreationTime
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-endpointconfigs-datatable');
    });

    await sdkcall("SageMaker", "listNotebookInstances", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-sagemaker-notebookinstances-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.NotebookInstances.map(notebookInstance => {
            return sdkcall("SageMaker", "describeNotebookInstance", {
                NotebookInstanceName: notebookInstance.NotebookInstanceName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-notebookinstances-datatable').deferredBootstrapTable('append', [{
                    f2id: data.NotebookInstanceArn,
                    f2type: 'sagemaker.notebookinstance',
                    f2data: data,
                    f2region: region,
                    name: data.NotebookInstanceName,
                    url: data.Url,
                    instancetype: data.InstanceType,
                    subnetid: data.SubnetId,
                    volumesize: data.VolumeSizeInGB + " GB"
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-notebookinstances-datatable');
    });

    await sdkcall("SageMaker", "listNotebookInstanceLifecycleConfigs", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-sagemaker-notebookinstancelifecycleconfigs-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.NotebookInstanceLifecycleConfigs.map(notebookInstanceLifecycleConfig => {
            return sdkcall("SageMaker", "describeNotebookInstanceLifecycleConfig", {
                NotebookInstanceLifecycleConfigName: notebookInstanceLifecycleConfig.NotebookInstanceLifecycleConfigName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-notebookinstancelifecycleconfigs-datatable').deferredBootstrapTable('append', [{
                    f2id: data.NotebookInstanceLifecycleConfigArn,
                    f2type: 'sagemaker.notebookinstancelifecycleconfig',
                    f2data: data,
                    f2region: region,
                    name: data.NotebookInstanceLifecycleConfigName,
                    creationtime: data.CreationTime
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-notebookinstancelifecycleconfigs-datatable');
    });

    await sdkcall("ApplicationAutoScaling", "describeScalableTargets", {
        ServiceNamespace: "ecs"
    }, true).then(async (data) => {
        $('#section-machinelearning-sagemaker-applicationautoscalingscalabletargets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ScalableTargets.map(target => {
            return sdkcall("ApplicationAutoScaling", "describeScheduledActions", {
                ServiceNamespace: "ecs",
                ResourceId: target.ResourceId,
                ScalableDimension: target.ScalableDimension
            }, true).then((actions) => {
                target['ScheduledActions'] = actions.ScheduledActions;

                $('#section-machinelearning-sagemaker-applicationautoscalingscalabletargets-datatable').deferredBootstrapTable('append', [{
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

        unblockUI('#section-machinelearning-sagemaker-applicationautoscalingscalabletargets-datatable');
    });

    await sdkcall("ApplicationAutoScaling", "describeScalingPolicies", {
        ServiceNamespace: "ecs"
    }, true).then(async (data) => {
        $('#section-machinelearning-sagemaker-applicationautoscalingscalingpolicies-datatable').deferredBootstrapTable('removeAll');

        if (data.ScalableTargets) {
            data.ScalableTargets.forEach(target => {
                $('#section-machinelearning-sagemaker-applicationautoscalingscalingpolicies-datatable').deferredBootstrapTable('append', [{
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

        unblockUI('#section-machinelearning-sagemaker-applicationautoscalingscalingpolicies-datatable');
    });

    await sdkcall("SageMaker", "listWorkteams", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-workteams-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Workteams.map(workteam => {
            return sdkcall("SageMaker", "describeWorkteam", {
                WorkteamName: workteam.WorkteamName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-workteams-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Workteam.WorkteamArn,
                    f2type: 'sagemaker.workteam',
                    f2data: data,
                    f2region: region,
                    name: data.Workteam.WorkteamName,
                    description: data.Workteam.Description,
                    creationtime: data.Workteam.CreateDate
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-workteams-datatable');
    }).catch(() => { });

    await sdkcall("SageMaker", "listMonitoringSchedules", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-monitoringschedules-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.MonitoringScheduleSummaries.map(async (monitoringSchedule) => {
            return sdkcall("SageMaker", "describeMonitoringSchedule", {
                MonitoringScheduleName: monitoringSchedule.MonitoringScheduleName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-monitoringschedules-datatable').deferredBootstrapTable('append', [{
                    f2id: data.MonitoringScheduleArn,
                    f2type: 'sagemaker.monitoringschedule',
                    f2data: data,
                    f2region: region,
                    name: data.Workteam.MonitoringScheduleName,
                    arn: data.MonitoringScheduleArn
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-monitoringschedules-datatable');
    }).catch(() => { });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "sagemaker.model") {
        reqParams.cfn['ModelName'] = obj.data.ModelName;
        if (obj.data.PrimaryContainer) {
            reqParams.cfn['PrimaryContainer'] = {
                'ContainerHostname': obj.data.PrimaryContainer.ContainerHostname,
                'Environment': obj.data.PrimaryContainer.Environment,
                'ModelDataUrl': obj.data.PrimaryContainer.ModelDataUrl,
                'Image': obj.data.PrimaryContainer.Image
            };
        }
        if (obj.data.Containers) {
            reqParams.cfn['Containers'] = [];
            obj.data.Containers.forEach(container => {
                reqParams.cfn['Containers'] = {
                    'ContainerHostname': container.ContainerHostname,
                    'Environment': container.Environment,
                    'ModelDataUrl': container.ModelDataUrl,
                    'Image': container.Image
                };
            });
        }
        reqParams.cfn['ExecutionRoleArn'] = obj.data.ExecutionRoleArn;
        reqParams.cfn['VpcConfig'] = obj.data.VpcConfig;

        /*
        TODO:
        Tags: 
            - Tag 
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::Model'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::Model',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.endpoint") {
        reqParams.cfn['EndpointName'] = obj.data.EndpointName;
        reqParams.cfn['EndpointConfigName'] = obj.data.EndpointConfigName;

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::Endpoint'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::Endpoint',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.endpointconfig") {
        reqParams.cfn['EndpointConfigName'] = obj.data.EndpointConfigName;
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        if (obj.data.ProductionVariants) {
            reqParams.cfn['ProductionVariants'] = [];
            obj.data.ProductionVariants.forEach(productionVariant => {
                reqParams.cfn['ProductionVariants'].push({
                    'VariantName': productionVariant.VariantName,
                    'ModelName': productionVariant.ModelName,
                    'InitialInstanceCount': productionVariant.InitialInstanceCount,
                    'InstanceType': productionVariant.InstanceType,
                    'InitialVariantWeight': productionVariant.InitialVariantWeight
                });
            });
        }
        reqParams.cfn['DataCaptureConfig'] = obj.data.DataCaptureConfig;

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::EndpointConfig'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::EndpointConfig',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.notebookinstance") {
        reqParams.cfn['NotebookInstanceName'] = obj.data.NotebookInstanceName;
        reqParams.cfn['InstanceType'] = obj.data.InstanceType;
        reqParams.cfn['SubnetId'] = obj.data.SubnetId;
        reqParams.cfn['SecurityGroupIds'] = obj.data.SecurityGroups;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        reqParams.cfn['LifecycleConfigName'] = obj.data.NotebookInstanceLifecycleConfigName;
        reqParams.cfn['DirectInternetAccess'] = obj.data.DirectInternetAccess;
        reqParams.cfn['VolumeSizeInGB'] = obj.data.VolumeSizeInGB;
        reqParams.cfn['RootAccess'] = obj.data.RootAccess;

        /*
        TODO:
        Tags: 
            - Tag 
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::NotebookInstance'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::NotebookInstance',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.notebookinstancelifecycleconfig") {
        reqParams.cfn['NotebookInstanceLifecycleConfigName'] = obj.data.NotebookInstanceLifecycleConfigName;
        reqParams.cfn['OnCreate'] = obj.data.OnCreate;
        reqParams.cfn['OnStart'] = obj.data.OnStart;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::NotebookInstanceLifecycleConfig'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::NotebookInstanceLifecycleConfig',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.coderepository") {
        reqParams.cfn['CodeRepositoryName'] = obj.data.CodeRepositoryName;
        reqParams.cfn['Definition'] = {
            'RepositoryUrl': obj.data.GitConfig.RepositoryUrl,
            'Branch': obj.data.GitConfig.Branch,
            'SecretArn': obj.data.GitConfig.SecretArn
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::CodeRepository'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::CodeRepository',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.workteam") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['WorkteamName'] = obj.data.WorkteamName;
        if (obj.data.MemberDefinitions) {
            reqParams.cfn['MemberDefinitions'] = [];
            obj.data.MemberDefinitions.forEach(memberdefinition => {
                reqParams.cfn['MemberDefinitions'].push({
                    'CognitoMemberDefinition': {
                        'CognitoClientId': memberdefinition.CognitoMemberDefinition.ClientId,
                        'CognitoUserGroup': memberdefinition.CognitoMemberDefinition.UserGroup,
                        'CognitoUserPool': memberdefinition.CognitoMemberDefinition.UserPool
                    }
                });
            });
        }
        reqParams.cfn['NotificationConfiguration'] = obj.data.NotificationConfiguration;

        /*
        TODO
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::Workteam'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::Workteam',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.monitoringschedule") {
        reqParams.cfn['MonitoringScheduleName'] = obj.data.MonitoringScheduleName;
        reqParams.cfn['MonitoringScheduleConfig'] = obj.data.MonitoringScheduleConfig;

        /*
        TODO
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::MonitoringSchedule'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::MonitoringSchedule',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
