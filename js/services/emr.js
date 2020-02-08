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

    await sdkcall("EMR", "listClusters", {
        // no params
    }, true).then(async (data) => {
        $('#section-analytics-emr-clusters-datatable').bootstrapTable('removeAll');
        $('#section-analytics-emr-instancefleetconfigs-datatable').bootstrapTable('removeAll');
        $('#section-analytics-emr-instancegroupconfigs-datatable').bootstrapTable('removeAll');
        $('#section-analytics-emr-steps-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Clusters.map(cluster => {
            return Promise.all([
                sdkcall("EMR", "listSteps", {
                    ClusterId: cluster.Id
                }, true).then((data) => {
                    data.Steps.forEach(step => {
                        step['ClusterId'] = cluster.Id;
                        $('#section-analytics-emr-steps-datatable').bootstrapTable('append', [{
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
                        $('#section-analytics-emr-instancefleetconfigs-datatable').bootstrapTable('append', [{
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
                        $('#section-analytics-emr-instancegroupconfigs-datatable').bootstrapTable('append', [{
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
                    $('#section-analytics-emr-clusters-datatable').bootstrapTable('append', [{
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
        $('#section-analytics-emr-securityconfigurations-datatable').bootstrapTable('removeAll');

        await Promise.all(data.SecurityConfigurations.map(securityConfiguration => {
            return sdkcall("EMR", "describeSecurityConfiguration", {
                Name: securityConfiguration.Name
            }, true).then((data) => {
                $('#section-analytics-emr-securityconfigurations-datatable').bootstrapTable('append', [{
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
        $('#section-analytics-emr-applicationautoscalingscalabletargets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ScalableTargets.map(target => {
            return sdkcall("ApplicationAutoScaling", "describeScheduledActions", {
                ServiceNamespace: "elasticmapreduce",
                ResourceId: target.ResourceId,
                ScalableDimension: target.ScalableDimension
            }, true).then((actions) => {
                target['ScheduledActions'] = actions.ScheduledActions;

                $('#section-analytics-emr-applicationautoscalingscalabletargets-datatable').bootstrapTable('append', [{
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
        $('#section-analytics-emr-applicationautoscalingscalingpolicies-datatable').bootstrapTable('removeAll');

        if (data.ScalableTargets) {
            data.ScalableTargets.forEach(target => {
                $('#section-analytics-emr-applicationautoscalingscalingpolicies-datatable').bootstrapTable('append', [{
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
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
