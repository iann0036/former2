var sections = [];

/* ========================================================================== */
// Formatters
/* ========================================================================== */

function textFormatter(data) {
    return data;
}

function byteSizeFormatter(data) {
    var bytes = parseInt(data);

    if (bytes < 1024) {
        return bytes + " bytes";
    } else if (bytes < 1024*1024) {
        return (bytes/1024).toFixed(1) + " kB";
    } else if (bytes < 1024*1024*1024) {
        return (bytes/1024/1024).toFixed(1) + " MB";
    }

    return data;
}

function timeAgoFormatter(data) {
    const NOW = new Date();
    const times = [["second", 1], ["minute", 60], ["hour", 3600], ["day", 86400], ["week", 604800], ["month", 2592000], ["year", 31536000], ["", Infinity]]

    var date = Date.parse(data);

    var diff = Math.round((NOW - date) / 1000)
    for (var t = 0; t < times.length; t++) {
        if (diff < times[t][1]) {
            if (t == 0) {
                return "Just now"
            } else {
                diff = Math.round(diff / times[t - 1][1])
                return diff + " " + times[t - 1][0] + (diff == 1?" ago":"s ago")
            }
        }
    }
}

function lambdaRuntimeFormatter(data) {
    var runtimeMappings = {
        'nodejs8.10': 'Node.js 8.10',
        'nodejs6.10': 'Node.js 6.10',
        'python3.6': 'Python 3.6',
        'python3.7': 'Python 3.7',
        'python2.7': 'Python 2.7',
        'ruby2.5': 'Ruby 2.5',
        'java8': 'Java 8',
        'go1.x': 'Go 1.x',
        'dotnetcore2.1': '.NET Core 2.1',
        'dotnetcore2.0': '.NET Core 2.0',
        'dotnetcore1.0': '.NET Core 1.0'
    }

    if (runtimeMappings[data]) {
        return runtimeMappings[data];
    }

    return data;
}

/* ========================================================================== */
// SDK Helpers
/* ========================================================================== */

function sdkcall(method, params, alert_on_errors) { // TODO: Add auto NextToken, NextMarker etc. detection
    return new Promise(function(resolve, reject) {
        method.call(null, params, function(err, data) {
            if (err) {
                if (alert_on_errors) {
                    console.log(err, err.stack);
                    $.notify({
                        icon: 'font-icon font-icon-warning',
                        title: '<strong>Error</strong>',
                        message: err
                    },{
                        type: 'danger'
                    });
                }
                
                reject(data);
            } else {
                resolve(data);
            }
        });
    });
}

/* ========================================================================== */
// Lambda
/* ========================================================================== */

sections.push({
    'category': 'Compute',
    'service': 'Lambda',
    'resourcetypes': {
        'Functions': {
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
                        title: 'Function Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'runtime',
                        title: 'Runtime',
                        sortable: true,
                        align: 'center',
                        formatter: lambdaRuntimeFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        field: 'codesize',
                        title: 'Code Size',
                        sortable: true,
                        align: 'center',
                        formatter: byteSizeFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        field: 'lastmodified',
                        title: 'Last Modified',
                        sortable: true,
                        align: 'center',
                        formatter: timeAgoFormatter,
                        footerFormatter: textFormatter
                    }
                ]
            ]
        },
        'Aliases': {
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
                        title: 'Alias Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'functionname',
                        title: 'Function Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'functionversion',
                        title: 'Function Version',
                        sortable: true,
                        align: 'center',
                        footerFormatter: textFormatter
                    },
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        align: 'center',
                        footerFormatter: textFormatter
                    }
                ]
            ]
        }
    }
});

function updateDatatableComputeLambda() {
    var svc_lambda = new AWS.Lambda({region: region});

    blockUI('#section-compute-lambda-functions-datatable');
    blockUI('#section-compute-lambda-aliases-datatable');

    sdkcall(svc_lambda.listFunctions, {
        MaxItems: 100
    }, true).then((data) => {
        $('#section-compute-lambda-functions-datatable').bootstrapTable('removeAll');
        $('#section-compute-lambda-aliases-datatable').bootstrapTable('removeAll');

        data.Functions.forEach(lambdaFunction => {
            sdkcall(svc_lambda.getFunction, {
                FunctionName: lambdaFunction.FunctionArn
            }, true).then((data) => {
                $('#section-compute-lambda-functions-datatable').bootstrapTable('append', [{
                    f2id: data.Configuration.FunctionArn,
                    f2type: 'lambda.function',
                    f2data: data,
                    f2region: region,
                    name: data.Configuration.FunctionName,
                    description: data.Configuration.Description,
                    lastmodified: data.Configuration.LastModified,
                    runtime: data.Configuration.Runtime,
                    codesize: data.Configuration.CodeSize
                }]);
            });

            sdkcall(svc_lambda.listAliasess, {
                FunctionName: lambdaFunction.FunctionArn
            }, true).then((data) => {
                data.Aliases.forEach(alias => {
                    $('#section-compute-lambda-aliases-datatable').bootstrapTable('append', [{
                        f2id: alias.AliasArn,
                        f2type: 'lambda.alias',
                        f2data: alias,
                        f2region: region,
                        name: alias.Name,
                        functionname: lambdaFunction.FunctionName,
                        functionversion: alias.FunctionVersion,
                        description: data.Description
                    }]);
                });
            });
        });

        unblockUI('#section-compute-lambda-functions-datatable');
        unblockUI('#section-compute-lambda-aliases-datatable');
    });
}

/* ========================================================================== */
// S3
/* ========================================================================== */

sections.push({
    'category': 'Storage',
    'service': 'S3',
    'resourcetypes': {
        'Buckets': {
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
                        title: 'Bucket Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'creationdate',
                        title: 'Creation Date',
                        sortable: true,
                        editable: true,
                        formatter: timeAgoFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Bucket Policies': {
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
                        title: 'Bucket Name',
                        field: 'bucketname',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'policylength',
                        title: 'Policy Length',
                        sortable: true,
                        editable: true,
                        formatter: byteSizeFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

function updateDatatableStorageS3() {
    var svc_s3 = new AWS.S3({region: region});

    blockUI('#section-storage-s3-buckets-datatable');
    blockUI('#section-storage-s3-bucketpolicies-datatable');

    sdkcall(svc_s3.listBuckets, {
        // no params
    }, true).then((data) => {
        $('#section-storage-s3-buckets-datatable').bootstrapTable('removeAll');
        $('#section-storage-s3-bucketpolicies-datatable').bootstrapTable('removeAll');

        data.Buckets.forEach(bucket => {
            $('#section-storage-s3-buckets-datatable').bootstrapTable('append', [{
                f2id: bucket.Name,
                f2type: 's3.bucket',
                f2data: bucket,
                f2region: region,
                name: bucket.Name,
                creationdate: bucket.CreationDate
            }]);

            sdkcall(svc_s3.getBucketPolicy, {
                Bucket: bucket.Name
            }, false).then((data) => {
                data['Bucket'] = bucket.Name;
                $('#section-storage-s3-bucketpolicies-datatable').bootstrapTable('append', [{
                    f2id: bucket.Name + "_Policy",
                    f2type: 's3.bucketpolicy',
                    f2data: data,
                    f2region: region,
                    bucketname: bucket.Name,
                    policy: data.Policy,
                    policylength: data.Policy.length
                }]);
            });
        });

        unblockUI('#section-storage-s3-buckets-datatable');
        unblockUI('#section-storage-s3-bucketpolicies-datatable');
    });
}

/* ========================================================================== */
// EC2
/* ========================================================================== */

sections.push({
    'category': 'Compute',
    'service': 'EC2',
    'resourcetypes': {
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
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'instanceid',
                        title: 'Instance ID',
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
                        field: 'availabilityzone',
                        title: 'Availability Zone',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'instancestate',
                        title: 'Instance State',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Hosts': {
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
                        field: 'instanceid',
                        title: 'Instance ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Load Balancers': {
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
                        field: 'instanceid',
                        title: 'Instance ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Auto Scaling Groups': {
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
                        field: 'instanceid',
                        title: 'Instance ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Launch Configurations': {
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
                        field: 'instanceid',
                        title: 'Instance ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Launch Templates': {
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
                        field: 'instanceid',
                        title: 'Instance ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Target Groups': {
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
                        field: 'instanceid',
                        title: 'Instance ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Volumes': {
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
                        title: 'Volume ID',
                        field: 'volumeid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'instanceid',
                        title: 'Instance ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Spot Requests': {
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
                        title: 'Request ID',
                        field: 'requestid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'instanceid',
                        title: 'Instance ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Placement Groups': {
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
                        field: 'groupstate',
                        title: 'State',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'strategy',
                        title: 'Strategy',
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

function updateDatatableComputeEC2() {
    var svc_ec2 = new AWS.EC2({region: region});
    var svc_elb = new AWS.ELB({region: region});
    var svc_elbv2 = new AWS.ELBv2({region: region});
    var svc_autoscaling = new AWS.AutoScaling({region: region});

    blockUI('#section-compute-ec2-instances-datatable');
    blockUI('#section-compute-ec2-hosts-datatable');

    sdkcall(svc_ec2.describeInstances, {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-instances-datatable').bootstrapTable('removeAll');

        data.Reservations.forEach(reservation => {
            reservation.Instances.forEach(instance => {
                var name = "";

                instance.Tags.forEach(tag => {
                    if (tag.Key == "Name") {
                        name = tag.Value;
                    }
                });

                $('#section-compute-ec2-instances-datatable').bootstrapTable('append', [{
                    f2id: instance.InstanceId,
                    f2type: 'ec2.instance',
                    f2data: instance,
                    f2region: region,
                    name: name,
                    instanceid: instance.InstanceId,
                    instancetype: instance.InstanceType,
                    availabilityzone: instance.Placement.AvailabilityZone,
                    instancestate: instance.State.Name
                }]);
            });
        });

        unblockUI('#section-compute-ec2-instances-datatable');
    });

    sdkcall(svc_ec2.describeHosts, {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-hosts-datatable').bootstrapTable('removeAll');

        console.log(data);return;
        data.Reservations.forEach(reservation => {
            reservation.Hosts.forEach(instance => {
                var name = "";

                instance.Tags.forEach(tag => {
                    if (tag.Key == "Name") {
                        name = tag.Value;
                    }
                });

                $('#section-compute-ec2-hosts-datatable').bootstrapTable('append', [{
                    f2id: instance.InstanceId,
                    f2type: 'ec2.hosts',
                    f2data: instance,
                    f2region: region,
                    name: name,
                    instanceid: instance.InstanceId,
                    instancetype: instance.InstanceType,
                    availabilityzone: instance.Placement.AvailabilityZone,
                    instancestate: instance.State.Name
                }]);
            });
        });

        unblockUI('#section-compute-ec2-hosts-datatable');
    });

    sdkcall(svc_elb.describeLoadBalancers, {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-loadbalancers-datatable').bootstrapTable('removeAll');

        data.LoadBalancerDescriptions.forEach(loadBalancer => {
            $('#section-compute-ec2-hosts-datatable').bootstrapTable('append', [{
                f2id: loadBalancer.LoadBalancerName,
                f2type: 'elb.loadbalancer',
                f2data: loadBalancer,
                f2region: region,
                name: loadBalancer.LoadBalancerName
            }]);
        });

        unblockUI('#section-compute-ec2-loadbalancers-datatable');
    });

    sdkcall(svc_autoscaling.describeAutoScalingGroups, {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-autoscalinggroups-datatable').bootstrapTable('removeAll');

        data.AutoScalingGroups.forEach(autoScalingGroup => {
            $('#section-compute-ec2-autoscalinggroups-datatable').bootstrapTable('append', [{
                f2id: autoScalingGroup.AutoScalingGroupName,
                f2type: 'autoscaling.autoscalinggroup',
                f2data: autoScalingGroup,
                f2region: region,
                name: autoScalingGroup.AutoScalingGroupName
            }]);
        });

        unblockUI('#section-compute-ec2-autoscalinggroups-datatable');
    });

    sdkcall(svc_autoscaling.describeLaunchConfigurations, {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-launchconfigurations-datatable').bootstrapTable('removeAll');

        data.LaunchConfigurations.forEach(launchConfiguration => {
            $('#section-compute-ec2-launchconfigurations-datatable').bootstrapTable('append', [{
                f2id: launchConfiguration.LaunchConfigurationName,
                f2type: 'autoscaling.launchconfiguration',
                f2data: launchConfiguration,
                f2region: region,
                name: launchConfiguration.LaunchConfigurationName
            }]);
        });

        unblockUI('#section-compute-ec2-launchconfigurations-datatable');
    });

    sdkcall(svc_ec2.describeLaunchTemplates, {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-launchtemplates-datatable').bootstrapTable('removeAll');

        data.LaunchTemplates.forEach(launchTemplate => {
            $('#section-compute-ec2-launchtemplates-datatable').bootstrapTable('append', [{
                f2id: launchTemplate.LaunchTemplateName,
                f2type: 'ec2.launchtemplate',
                f2data: launchTemplate,
                f2region: region,
                name: launchTemplate.LaunchTemplateName
            }]);
        });

        unblockUI('#section-compute-ec2-launchtemplates-datatable');
    });

    sdkcall(svc_elbv2.describeTargetGroups, {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-targetgroups-datatable').bootstrapTable('removeAll');

        data.TargetGroups.forEach(targetGroup => {
            $('#section-compute-ec2-targetgroups-datatable').bootstrapTable('append', [{
                f2id: targetGroup.TargetGroupName,
                f2type: 'elbv2.targetgroup',
                f2data: targetGroup,
                f2region: region,
                name: targetGroup.TargetGroupName
            }]);
        });

        unblockUI('#section-compute-ec2-targetgroups-datatable');
    });

    sdkcall(svc_ec2.describeVolumes, {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-volumes-datatable').bootstrapTable('removeAll');

        data.Volumes.forEach(volume => {
            $('#section-compute-ec2-volumes-datatable').bootstrapTable('append', [{
                f2id: volume.VolumeId,
                f2type: 'ec2.volume',
                f2data: volume,
                f2region: region,
                volumeid: volume.VolumeId
            }]);
        });

        unblockUI('#section-compute-ec2-volumes-datatable');
    });

    sdkcall(svc_ec2.describeSpotFleetRequests, {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-spotrequests-datatable').bootstrapTable('removeAll');

        data.SpotFleetRequestConfigs.forEach(spotFleetRequestConfig => {
            $('#section-compute-ec2-spotrequests-datatable').bootstrapTable('append', [{
                f2id: spotFleetRequestConfig.SpotFleetRequestId,
                f2type: 'ec2.spotrequest',
                f2data: spotFleetRequestConfig,
                f2region: region,
                requestid: spotFleetRequestConfig.SpotFleetRequestId
            }]);
        });

        unblockUI('#section-compute-ec2-spotrequests-datatable');
    });

    sdkcall(svc_ec2.describePlacementGroups, {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-placementgroups-datatable').bootstrapTable('removeAll');
        console.dir(data);

        data.PlacementGroups.forEach(placementGroup => {
            $('#section-compute-ec2-placementgroups-datatable').bootstrapTable('append', [{
                f2id: placementGroup.GroupName,
                f2type: 'ec2.placementgroup',
                f2data: placementGroup,
                f2region: region,
                name: placementGroup.GroupName,
                strategy: placementGroup.Strategy,
                groupstate: placementGroup.State
            }]);
        });

        unblockUI('#section-compute-ec2-placementgroups-datatable');
    });
}

/* ========================================================================== */
// VPC
/* ========================================================================== */

sections.push({
    'category': 'Networking &amp; Content Delivery',
    'service': 'VPC',
    'resourcetypes': {
        'VPCs': {
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
                        title: 'VPC ID',
                        field: 'vpcid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'creationdate',
                        title: 'Creation Date',
                        sortable: true,
                        editable: true,
                        formatter: timeAgoFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Subnets': {
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
                        title: 'Subnet ID',
                        field: 'subnetid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'xxx',
                        title: 'XXX',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Internet Gateways': {
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
                        title: 'Gateway ID',
                        field: 'gatewayid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'xxx',
                        title: 'XXX',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Customer Gateways': {
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
                        title: 'Gateway ID',
                        field: 'gatewayid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'xxx',
                        title: 'XXX',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Virtual Private Gateways': {
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
                        title: 'Gateway ID',
                        field: 'gatewayid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'xxx',
                        title: 'XXX',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'DHCP Options': {
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
                        title: 'DHCP Options ID',
                        field: 'dhcpoptionsid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'xxx',
                        title: 'XXX',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'VPN Connections': {
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
                        title: 'Connection ID',
                        field: 'connectionid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'xxx',
                        title: 'XXX',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Peering Connections': {
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
                        title: 'Connection ID',
                        field: 'connectionid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'xxx',
                        title: 'XXX',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Network ACLs': {
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
                        title: 'Network ACL ID',
                        field: 'networkaclid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'xxx',
                        title: 'XXX',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Route Tables': {
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
                        title: 'Route Table ID',
                        field: 'routetableid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'xxx',
                        title: 'XXX',
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

function updateDatatableNetworkingAndContentDeliveryVPC() {
    var svc_ec2 = new AWS.EC2({region: region});

    blockUI('#section-networkingandcontentdelivery-vpc-vpcs-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-subnets-datatable');

    sdkcall(svc_ec2.describeVpcs, {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-vpcs-datatable').bootstrapTable('removeAll');

        data.Vpcs.forEach(vpc => {
            $('#section-networkingandcontentdelivery-vpc-vpcs-datatable').bootstrapTable('append', [{
                f2id: vpc.VpcId,
                f2type: 'ec2.vpc',
                f2data: vpc,
                f2region: region,
                vpcid: vpc.VpcId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-vpcs-datatable');
    });

    sdkcall(svc_ec2.describeSubnets, {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-subnets-datatable').bootstrapTable('removeAll');

        data.Subnets.forEach(subnet => {
            $('#section-networkingandcontentdelivery-vpc-subnets-datatable').bootstrapTable('append', [{
                f2id: subnet.SubnetId,
                f2type: 'ec2.subnet',
                f2data: subnet,
                f2region: region,
                subnetid: subnet.SubnetId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-subnets-datatable');
    });

    sdkcall(svc_ec2.describeInternetGateways, {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-internetgateways-datatable').bootstrapTable('removeAll');

        data.InternetGateways.forEach(internetGateway => {
            $('#section-networkingandcontentdelivery-vpc-internetgateways-datatable').bootstrapTable('append', [{
                f2id: internetGateway.InternetGatewayId,
                f2type: 'ec2.internetgateway',
                f2data: internetGateway,
                f2region: region,
                gatewayid: internetGateway.InternetGatewayId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-internetgateways-datatable');
    });

    sdkcall(svc_ec2.describeCustomerGateways, {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-customergateways-datatable').bootstrapTable('removeAll');

        data.CustomerGateways.forEach(customerGateway => {
            $('#section-networkingandcontentdelivery-vpc-customergateways-datatable').bootstrapTable('append', [{
                f2id: customerGateway.CustomerGatewayId,
                f2type: 'ec2.customergateway',
                f2data: customerGateway,
                f2region: region,
                gatewayid: customerGateway.CustomerGatewayId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-customergateways-datatable');
    });

    sdkcall(svc_ec2.describeVpnGateways, {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-virtualprivategateways-datatable').bootstrapTable('removeAll');

        data.VpnGateways.forEach(vpnGateway => {
            $('#section-networkingandcontentdelivery-vpc-virtualprivategateways-datatable').bootstrapTable('append', [{
                f2id: vpnGateway.VpnGatewayId,
                f2type: 'ec2.virtualprivategateway',
                f2data: vpnGateway,
                f2region: region,
                gatewayid: vpnGateway.VpnGatewayId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-virtualprivategateways-datatable');
    });

    sdkcall(svc_ec2.describeDhcpOptions, {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-dhcpoptions-datatable').bootstrapTable('removeAll');

        data.DhcpOptions.forEach(dhcpOptions => {
            $('#section-networkingandcontentdelivery-vpc-dhcpoptions-datatable').bootstrapTable('append', [{
                f2id: dhcpOptions.DhcpOptionsId,
                f2type: 'ec2.dhcpoptions',
                f2data: dhcpOptions,
                f2region: region,
                dhcpoptionsid: dhcpOptions.DhcpOptionsId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-dhcpoptions-datatable');
    });

    sdkcall(svc_ec2.describeVpnConnections, {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-vpnconnections-datatable').bootstrapTable('removeAll');

        data.VpnConnections.forEach(vpnConnection => {
            $('#section-networkingandcontentdelivery-vpc-vpnconnections-datatable').bootstrapTable('append', [{
                f2id: vpnConnection.VpnConnectionId,
                f2type: 'ec2.vpnconnection',
                f2data: vpnConnection,
                f2region: region,
                connectionid: vpnConnection.VpnConnectionId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-vpnconnections-datatable');
    });

    sdkcall(svc_ec2.describeVpcPeeringConnections, {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-peeringconnections-datatable').bootstrapTable('removeAll');

        data.PeeringConnections.forEach(peeringConnection => {
            $('#section-networkingandcontentdelivery-vpc-peeringconnections-datatable').bootstrapTable('append', [{
                f2id: peeringConnection.PeeringConnectionId,
                f2type: 'ec2.peeringconnection',
                f2data: peeringConnection,
                f2region: region,
                connectionid: peeringConnection.PeeringConnectionId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-peeringconnections-datatable');
    });

    sdkcall(svc_ec2.describeNetworkAcls, {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-networkacls-datatable').bootstrapTable('removeAll');

        data.NetworkAcls.forEach(networkAcl => {
            $('#section-networkingandcontentdelivery-vpc-networkacls-datatable').bootstrapTable('append', [{
                f2id: networkAcl.NetworkAclId,
                f2type: 'ec2.networkacl',
                f2data: networkAcl,
                f2region: region,
                networkaclid: networkAcl.NetworkAclId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-networkacls-datatable');
    });

    sdkcall(svc_ec2.describeRouteTables, {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-routetables-datatable').bootstrapTable('removeAll');

        data.RouteTables.forEach(routeTable => {
            $('#section-networkingandcontentdelivery-vpc-routetables-datatable').bootstrapTable('append', [{
                f2id: routeTable.RouteTableId,
                f2type: 'ec2.routetable',
                f2data: routeTable,
                f2region: region,
                routetableid: routeTable.RouteTableId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-routetables-datatable');
    });
}

/* ========================================================================== */
// RDS
/* ========================================================================== */

sections.push({
    'category': 'Database',
    'service': 'RDS',
    'resourcetypes': {
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
                        field: 'xxx',
                        title: 'XXX',
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

function updateDatatableDatabaseRDS() {
    var svc_rds = new AWS.RDS({region: region});

    blockUI('#section-database-rds-instances-datatable');

    sdkcall(svc_rds.describeDBInstances, {
        // no params
    }, true).then((data) => {
        $('#section-database-rds-instances-datatable').bootstrapTable('removeAll');

        data.DBInstances.forEach(dbInstance => {
            $('#section-database-rds-instances-datatable').bootstrapTable('append', [{
                f2id: dbInstance.DBInstanceIdentifier,
                f2type: 'rds.instance',
                f2data: dbInstance,
                f2region: region,
                instanceid: dbInstance.DBInstanceIdentifier
            }]);
        });

        unblockUI('#section-database-rds-instances-datatable');
    });
}
