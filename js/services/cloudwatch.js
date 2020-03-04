/* ========================================================================== */
// CloudWatch
/* ========================================================================== */

sections.push({
    'category': 'Management &amp; Governance',
    'service': 'CloudWatch',
    'resourcetypes': {
        'Alarms': {
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
                        field: 'metric',
                        title: 'Metric',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'threshold',
                        title: 'Threshold',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'unit',
                        title: 'Unit',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Composite Alarms': {
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
        'Dashboards': {
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
                    }
                ],
                [
                    // nothing
                ]
            ]
        },
        'Destinations': {
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
                        field: 'targetarn',
                        title: 'Target ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Log Groups': {
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
                        field: 'retention',
                        title: 'Retention',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'amountstored',
                        title: 'Amount Stored',
                        sortable: true,
                        editable: true,
                        formatter: byteSizeFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Log Streams': {
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
                        field: 'amountstored',
                        title: 'Amount Stored',
                        sortable: true,
                        editable: true,
                        formatter: byteSizeFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Metric Filters': {
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
                        field: 'loggroupname',
                        title: 'Log Group Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'filterpattern',
                        title: 'Filter Pattern',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Subscription Filters': {
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
                        field: 'loggroupname',
                        title: 'Log Group Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'filterpattern',
                        title: 'Filter Pattern',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'distribution',
                        title: 'Distribution',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Anomaly Detectors': {
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
                        title: 'Metric Name',
                        field: 'metricname',
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
                        field: 'namespace',
                        title: 'Namespace',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'stat',
                        title: 'Stat',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Insight Rules': {
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
                        field: 'xstate',
                        title: 'State',
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

async function updateDatatableManagementAndGovernanceCloudWatch() {
    blockUI('#section-managementandgovernance-cloudwatch-alarms-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-compositealarms-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-dashboards-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-destinations-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-loggroups-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-logstreams-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-metricfilters-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-subscriptionfilters-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-anomalydetectors-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-insightrules-datatable');

    await sdkcall("CloudWatch", "describeAlarms", {
        AlarmTypes: ["MetricAlarm"]
    }, true).then((data) => {
        $('#section-managementandgovernance-cloudwatch-alarms-datatable').bootstrapTable('removeAll');

        data.MetricAlarms.forEach(metricAlarm => {
            $('#section-managementandgovernance-cloudwatch-alarms-datatable').deferredBootstrapTable('append', [{
                f2id: metricAlarm.AlarmArn,
                f2type: 'cloudwatch.alarm',
                f2data: metricAlarm,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/cloudwatch/home?region=' + region + '#alarm:alarm:alarmFilter=ANY;name=' + metricAlarm.AlarmName,
                name: metricAlarm.AlarmName,
                description: metricAlarm.AlarmDescription,
                metric: metricAlarm.Statistic + " for " + metricAlarm.Namespace + "/" + metricAlarm.MetricName,
                threshold: metricAlarm.Threshold,
                unit: metricAlarm.Unit
            }]);
        });

        unblockUI('#section-managementandgovernance-cloudwatch-alarms-datatable');
    });

    await sdkcall("CloudWatch", "describeAlarms", {
        AlarmTypes: ["CompositeAlarm"]
    }, true).then((data) => {
        $('#section-managementandgovernance-cloudwatch-compositealarms-datatable').bootstrapTable('removeAll');

        data.CompositeAlarms.forEach(compositeAlarm => {
            $('#section-managementandgovernance-cloudwatch-compositealarms-datatable').deferredBootstrapTable('append', [{
                f2id: compositeAlarm.AlarmArn,
                f2type: 'cloudwatch.compositealarm',
                f2data: compositeAlarm,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/cloudwatch/home?region=' + region + '#alarm:alarm:alarmFilter=ANY;name=' + compositeAlarm.AlarmName,
                name: compositeAlarm.AlarmName,
                description: compositeAlarm.AlarmDescription
            }]);
        });

        unblockUI('#section-managementandgovernance-cloudwatch-compositealarms-datatable');
    });

    await sdkcall("CloudWatch", "listDashboards", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-cloudwatch-dashboards-datatable').bootstrapTable('removeAll');

        if (data.DashboardEntries) {
            await Promise.all(data.DashboardEntries.map(dashboard => {
                return sdkcall("CloudWatch", "getDashboard", {
                    DashboardName: dashboard.DashboardName
                }, true).then((data) => {
                    $('#section-managementandgovernance-cloudwatch-dashboards-datatable').deferredBootstrapTable('append', [{
                        f2id: dashboard.DashboardArn,
                        f2type: 'cloudwatch.dashboard',
                        f2data: data,
                        f2region: region,
                        name: dashboard.DashboardName
                    }]);
                });
            }));
        }

        unblockUI('#section-managementandgovernance-cloudwatch-dashboards-datatable');
    });

    await sdkcall("CloudWatchLogs", "describeDestinations", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-cloudwatch-destinations-datatable').bootstrapTable('removeAll');

        data.destinations.forEach(destination => {
            $('#section-managementandgovernance-cloudwatch-destinations-datatable').deferredBootstrapTable('append', [{
                f2id: destination.destinationName,
                f2type: 'cloudwatch.destination',
                f2data: destination,
                f2region: region,
                name: destination.destinationName,
                targetarn: destination.targetArn
            }]);
        });

        unblockUI('#section-managementandgovernance-cloudwatch-destinations-datatable');
    });
    
    await sdkcall("CloudWatchLogs", "describeLogGroups", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-cloudwatch-loggroups-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-cloudwatch-logstreams-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-cloudwatch-subscriptionfilters-datatable').bootstrapTable('removeAll');

        await Promise.all(data.logGroups.map(logGroup => {
            $('#section-managementandgovernance-cloudwatch-loggroups-datatable').deferredBootstrapTable('append', [{
                f2id: logGroup.logGroupName,
                f2type: 'cloudwatch.loggroup',
                f2data: logGroup,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/cloudwatch/home?region=' + region + '#logStream:group=' + logGroup.logGroupName,
                name: logGroup.logGroupName,
                retention: logGroup.retentionInDays + " days",
                amountstored: logGroup.storedBytes
            }]);

            return Promise.all([
                sdkcall("CloudWatchLogs", "describeLogStreams", {
                    logGroupName: logGroup.logGroupName
                }, true).then((data) => {
                    data.logStreams.forEach(logStream => {
                        logStream['logGroupName'] = logGroup.logGroupName;
                        $('#section-managementandgovernance-cloudwatch-logstreams-datatable').deferredBootstrapTable('append', [{
                            f2id: logStream.logStreamName,
                            f2type: 'cloudwatch.logstream',
                            f2data: logStream,
                            f2region: region,
                            name: logStream.logStreamName,
                            amountstored: logGroup.storedBytes
                        }]);
                    });
                }),
                sdkcall("CloudWatchLogs", "describeSubscriptionFilters", {
                    logGroupName: logGroup.logGroupName
                }, true).then((data) => {
                    data.subscriptionFilters.forEach(subscriptionFilter => {
                        subscriptionFilter['logGroupName'] = logGroup.logGroupName;
                        $('#section-managementandgovernance-cloudwatch-subscriptionfilters-datatable').deferredBootstrapTable('append', [{
                            f2id: subscriptionFilter.filterName,
                            f2type: 'cloudwatch.subscriptionfilter',
                            f2data: subscriptionFilter,
                            f2region: region,
                            name: subscriptionFilter.filterName,
                            loggroupname: logGroup.logGroupName,
                            filterpattern: subscriptionFilter.filterPattern,
                            distribution: subscriptionFilter.distribution
                        }]);
                    });
                })
            ]);
        }));
    });

    await sdkcall("CloudWatchLogs", "describeMetricFilters", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-cloudwatch-metricfilters-datatable').bootstrapTable('removeAll');

        data.metricFilters.forEach(metricFilter => {
            $('#section-managementandgovernance-cloudwatch-metricfilters-datatable').deferredBootstrapTable('append', [{
                f2id: metricFilter.filterName,
                f2type: 'cloudwatch.metricfilter',
                f2data: metricFilter,
                f2region: region,
                name: metricFilter.filterName,
                loggroupname: metricFilter.logGroupName,
                filterpattern: metricFilter.filterPattern
            }]);
        });

        unblockUI('#section-managementandgovernance-cloudwatch-metricfilters-datatable');
    });

    await sdkcall("CloudWatch", "describeAnomalyDetectors", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-cloudwatch-anomalydetectors-datatable').bootstrapTable('removeAll');

        data.AnomalyDetectors.forEach(anomalyDetector => {
            $('#section-managementandgovernance-cloudwatch-anomalydetectors-datatable').deferredBootstrapTable('append', [{
                f2id: anomalyDetector.MetricName + " " + anomalyDetector.Namespace + " " + anomalyDetector.Stat,
                f2type: 'cloudwatch.anomalydetector',
                f2data: anomalyDetector,
                f2region: region,
                metricname: anomalyDetector.MetricName,
                namespace: anomalyDetector.Namespace,
                stat: anomalyDetector.Stat
            }]);
        });
    });

    await sdkcall("CloudWatch", "describeInsightRules", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-cloudwatch-insightrules-datatable').bootstrapTable('removeAll');

        data.InsightRules.forEach(insightRule => {
            $('#section-managementandgovernance-cloudwatch-insightrules-datatable').deferredBootstrapTable('append', [{
                f2id: insightRule.Name,
                f2type: 'cloudwatch.insightrule',
                f2data: insightRule,
                f2region: region,
                name: insightRule.Name,
                xstate: insightRule.State
            }]);
        });
    });

    unblockUI('#section-managementandgovernance-cloudwatch-loggroups-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-logstreams-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-subscriptionfilters-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-anomalydetectors-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-insightrules-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "cloudwatch.alarm") {
        reqParams.cfn['AlarmName'] = obj.data.AlarmName;
        reqParams.tf['alarm_name'] = obj.data.AlarmName;
        reqParams.cfn['AlarmDescription'] = obj.data.AlarmDescription;
        reqParams.tf['alarm_description'] = obj.data.AlarmDescription;
        reqParams.cfn['ActionsEnabled'] = obj.data.ActionsEnabled;
        reqParams.tf['actions_enabled'] = obj.data.ActionsEnabled;
        reqParams.cfn['OKActions'] = obj.data.OKActions;
        reqParams.tf['ok_actions'] = obj.data.OKActions;
        reqParams.cfn['AlarmActions'] = obj.data.AlarmActions;
        reqParams.tf['alarm_actions'] = obj.data.AlarmActions;
        reqParams.cfn['InsufficientDataActions'] = obj.data.InsufficientDataActions;
        reqParams.tf['insufficient_data_actions'] = obj.data.InsufficientDataActions;
        reqParams.cfn['MetricName'] = obj.data.MetricName;
        reqParams.tf['metric_name'] = obj.data.MetricName;
        reqParams.cfn['Namespace'] = obj.data.Namespace;
        reqParams.tf['namespace'] = obj.data.Namespace;
        reqParams.cfn['Statistic'] = obj.data.Statistic;
        reqParams.tf['statistic'] = obj.data.Statistic;
        reqParams.cfn['ExtendedStatistic'] = obj.data.ExtendedStatistic;
        reqParams.tf['extended_statistic'] = obj.data.ExtendedStatistic;
        reqParams.cfn['Dimensions'] = obj.data.Dimensions;
        if (obj.data.Dimensions) {
            reqParams.tf['dimensions'] = {};
            obj.data.Dimensions.forEach(dimension => {
                reqParams.tf['dimensions'][dimension.Name] = dimension.Value;
            });
        }
        reqParams.cfn['Period'] = obj.data.Period;
        reqParams.tf['period'] = obj.data.Period;
        reqParams.cfn['Unit'] = obj.data.Unit;
        reqParams.tf['unit'] = obj.data.Unit;
        reqParams.cfn['EvaluationPeriods'] = obj.data.EvaluationPeriods;
        reqParams.tf['evaluation_periods'] = obj.data.EvaluationPeriods;
        reqParams.cfn['DatapointsToAlarm'] = obj.data.DatapointsToAlarm;
        reqParams.tf['datapoints_to_alarm'] = obj.data.DatapointsToAlarm;
        reqParams.cfn['Threshold'] = obj.data.Threshold;
        reqParams.tf['threshold'] = obj.data.Threshold;
        reqParams.cfn['ComparisonOperator'] = obj.data.ComparisonOperator;
        reqParams.tf['comparison_operator'] = obj.data.ComparisonOperator;
        reqParams.cfn['TreatMissingData'] = obj.data.TreatMissingData;
        reqParams.tf['treat_missing_data'] = obj.data.TreatMissingData;
        reqParams.cfn['EvaluateLowSampleCountPercentile'] = obj.data.EvaluateLowSampleCountPercentile;
        reqParams.tf['evaluate_low_sample_count_percentiles'] = obj.data.EvaluateLowSampleCountPercentile;
        reqParams.cfn['Metrics'] = obj.data.Metrics;
        if (obj.data.Metrics) {
            reqParams.tf['metric_query'] = [];
            obj.data.Metrics.forEach(metric => {
                metricstat = null;
                if (metric.MetricStat) {
                    metricstat = {
                        'metric_name': metric.MetricStat.Metric.MetricName,
                        'namespace': metric.MetricStat.Metric.Namespace,
                        'dimensions': metric.MetricStat.Metric.Dimensions,
                        'period': metric.MetricStat.Period,
                        'stat': metric.MetricStat.Stat,
                        'unit': metric.MetricStat.Unit
                    };
                }
                reqParams.tf['metric_query'].push({
                    'expression': metric.Expression,
                    'id': metric.Id,
                    'label': metric.Label,
                    'metric': metric.MetricStat,
                    'return_data': metric.ReturnData
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::CloudWatch::Alarm'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::CloudWatch::Alarm',
            'terraformType': 'aws_cloudwatch_metric_alarm',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.AlarmName,
                'GetAtt': {
                    'Arn': obj.data.AlarmArn
                },
                'Import': {
                    'AlarmName': obj.data.AlarmName
                }
            }
        });
    } else if (obj.type == "cloudwatch.compositealarm") {
        reqParams.cfn['AlarmName'] = obj.data.AlarmName;
        reqParams.cfn['AlarmDescription'] = obj.data.AlarmDescription;
        reqParams.cfn['ActionsEnabled'] = obj.data.ActionsEnabled;
        reqParams.cfn['OKActions'] = obj.data.OKActions;
        reqParams.cfn['AlarmActions'] = obj.data.AlarmActions;
        reqParams.cfn['InsufficientDataActions'] = obj.data.InsufficientDataActions;
        reqParams.cfn['AlarmRule'] = obj.data.AlarmRule;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::CloudWatch::CompositeAlarm'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::CloudWatch::CompositeAlarm',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.AlarmName,
                'GetAtt': {
                    'Arn': obj.data.AlarmArn
                }
            }
        });
    } else if (obj.type == "cloudwatch.destination") {
        reqParams.cfn['DestinationName'] = obj.data.destinationName;
        reqParams.tf['name'] = obj.data.destinationName;
        reqParams.cfn['RoleArn'] = obj.data.roleArn;
        reqParams.tf['role_arn'] = obj.data.roleArn;
        reqParams.cfn['TargetArn'] = obj.data.targetArn;
        reqParams.tf['target_arn'] = obj.data.targetArn;
        reqParams.cfn['DestinationPolicy'] = obj.data.accessPolicy;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::Logs::Destination'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::Logs::Destination',
            'terraformType': 'aws_cloudwatch_log_destination',
            'options': reqParams
        });
    } else if (obj.type == "cloudwatch.logstream") {
        reqParams.cfn['LogGroupName'] = obj.data.logGroupName;
        reqParams.tf['log_group_name'] = obj.data.logGroupName;
        reqParams.cfn['LogStreamName'] = obj.data.logStreamName;
        reqParams.tf['name'] = obj.data.logStreamName;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::Logs::LogStream'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::Logs::LogStream',
            'terraformType': 'aws_cloudwatch_log_stream',
            'options': reqParams
        });
    } else if (obj.type == "cloudwatch.subscriptionfilter") {
        reqParams.cfn['LogGroupName'] = obj.data.logGroupName;
        reqParams.tf['log_group_name'] = obj.data.logGroupName;
        reqParams.cfn['FilterPattern'] = obj.data.filterPattern;
        reqParams.tf['filter_pattern'] = obj.data.filterPattern;
        reqParams.cfn['DestinationArn'] = obj.data.destinationArn;
        reqParams.tf['destination_arn'] = obj.data.destinationArn;
        reqParams.cfn['RoleArn'] = obj.data.roleArn;
        reqParams.tf['role_arn'] = obj.data.roleArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::Logs::SubscriptionFilter'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::Logs::SubscriptionFilter',
            'terraformType': 'aws_cloudwatch_log_subscription_filter',
            'options': reqParams,
            'returnValues': {
                'Import': {
                    'LogGroupName': obj.data.logGroupName,
                    'FilterName': obj.data.filterName
                }
            }
        });
    } else if (obj.type == "cloudwatch.loggroup") {
        reqParams.cfn['LogGroupName'] = obj.data.logGroupName;
        reqParams.tf['name'] = obj.data.logGroupName;
        reqParams.cfn['RetentionInDays'] = obj.data.retentionInDays;
        reqParams.tf['retention_in_days'] = obj.data.retentionInDays;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::Logs::LogGroup'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::Logs::LogGroup',
            'terraformType': 'aws_cloudwatch_log_group',
            'options': reqParams,
            'returnValues': {
                'Import': {
                    'LogGroupName': obj.data.logGroupName
                }
            }
        });
    } else if (obj.type == "cloudwatch.metricfilter") {
        reqParams.cfn['FilterPattern'] = obj.data.filterPattern;
        reqParams.tf['pattern'] = obj.data.filterPattern;
        reqParams.cfn['LogGroupName'] = obj.data.logGroupName;
        reqParams.tf['log_group_name'] = obj.data.logGroupName;
        if (obj.data.metricTransformations) {
            reqParams.cfn['MetricTransformations'] = [];
            reqParams.tf['metric_transformation'] = [];
            obj.data.metricTransformations.forEach(metricTransformation => {
                reqParams.cfn['MetricTransformations'].push({
                    'MetricName': metricTransformation.metricName,
                    'MetricNamespace': metricTransformation.metricNamespace,
                    'MetricValue': metricTransformation.metricValue,
                    'DefaultValue': metricTransformation.defaultValue,
                });
                reqParams.tf['metric_transformation'].push({
                    'name': metricTransformation.metricName,
                    'namespace': metricTransformation.metricNamespace,
                    'value': metricTransformation.metricValue,
                    'default_value': metricTransformation.defaultValue,
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::Logs::MetricFilter'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::Logs::MetricFilter',
            'terraformType': 'aws_cloudwatch_log_metric_filter',
            'options': reqParams,
            'returnValues': {
                'Import': {
                    'FilterName': obj.data.filterName
                }
            }
        });
    } else if (obj.type == "cloudwatch.dashboard") {
        reqParams.cfn['DashboardName'] = obj.data.DashboardName;
        reqParams.tf['dashboard_name'] = obj.data.DashboardName;
        reqParams.cfn['DashboardBody'] = obj.data.DashboardBody;
        reqParams.tf['dashboard_body'] = obj.data.DashboardBody;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::CloudWatch::Dashboard'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::CloudWatch::Dashboard',
            'terraformType': 'aws_cloudwatch_dashboard',
            'options': reqParams
        });
    } else if (obj.type == "cloudwatch.anomalydetector") {
        reqParams.cfn['MetricName'] = obj.data.MetricName;
        reqParams.cfn['Namespace'] = obj.data.Namespace;
        reqParams.cfn['Stat'] = obj.data.Stat;
        if (obj.data.Configuration) {
            reqParams.cfn['Configuration'] = {
                'ExcludedTimeRanges': obj.data.Configuration.ExcludedTimeRanges,
                'MetricTimeZone': obj.data.Configuration.MetricTimezone
            };
        }
        reqParams.cfn['Dimensions'] = obj.data.Dimensions;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::CloudWatch::AnomalyDetector'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::CloudWatch::AnomalyDetector',
            'options': reqParams
        });
    } else if (obj.type == "cloudwatch.insightrule") {
        reqParams.cfn['RuleBody'] = obj.data.Definition;
        reqParams.cfn['RuleName'] = obj.data.Name;
        reqParams.cfn['RuleState'] = obj.data.State;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::CloudWatch::InsightRule'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::CloudWatch::InsightRule',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
