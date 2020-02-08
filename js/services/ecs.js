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
                $('#section-compute-ecs-taskdefinitions-datatable').bootstrapTable('append', [{
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
                    $('#section-compute-ecs-clusters-datatable').bootstrapTable('append', [{
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
                                $('#section-compute-ecs-services-datatable').bootstrapTable('append', [{
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
                                            $('#section-compute-ecs-tasksets-datatable').bootstrapTable('append', [{
                                                f2id: taskset.taskSetArn,
                                                f2type: 'ecs.taskset',
                                                f2data: taskset,
                                                f2region: region,
                                                tasksetid: taskset.id,
                                                service: taskset.serviceArn,
                                                cluster: taskset.clusterArn
                                            }]);
                                            if (taskset.status == "PRIMARY") {
                                                $('#section-compute-ecs-primarytasksets-datatable').bootstrapTable('append', [{
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

                    $('#section-compute-ecs-applicationautoscalingscalabletargets-datatable').bootstrapTable('append', [{
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
                $('#section-compute-ecs-applicationautoscalingscalingpolicies-datatable').bootstrapTable('append', [{
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
