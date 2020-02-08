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
                        field: 'state',
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
    blockUI('#section-managementandgovernance-cloudwatch-dashboards-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-destinations-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-loggroups-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-logstreams-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-metricfilters-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-subscriptionfilters-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-anomalydetectors-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-insightrules-datatable');

    await sdkcall("CloudWatch", "describeAlarms", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-cloudwatch-alarms-datatable').bootstrapTable('removeAll');

        data.MetricAlarms.forEach(metricAlarm => {
            $('#section-managementandgovernance-cloudwatch-alarms-datatable').bootstrapTable('append', [{
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

    await sdkcall("CloudWatch", "listDashboards", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-cloudwatch-dashboards-datatable').bootstrapTable('removeAll');

        if (data.DashboardEntries) {
            await Promise.all(data.DashboardEntries.map(dashboard => {
                return sdkcall("CloudWatch", "getDashboard", {
                    DashboardName: dashboard.DashboardName
                }, true).then((data) => {
                    $('#section-managementandgovernance-cloudwatch-dashboards-datatable').bootstrapTable('append', [{
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
            $('#section-managementandgovernance-cloudwatch-destinations-datatable').bootstrapTable('append', [{
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

    /*
    TODO: Make a setting to enable this

    await sdkcall("CloudWatchLogs", "describeLogGroups", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-cloudwatch-loggroups-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-cloudwatch-logstreams-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-cloudwatch-subscriptionfilters-datatable').bootstrapTable('removeAll');

        await Promise.all(data.logGroups.map(logGroup => {
            $('#section-managementandgovernance-cloudwatch-loggroups-datatable').bootstrapTable('append', [{
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
                        $('#section-managementandgovernance-cloudwatch-logstreams-datatable').bootstrapTable('append', [{
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
                        $('#section-managementandgovernance-cloudwatch-subscriptionfilters-datatable').bootstrapTable('append', [{
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
    */

    await sdkcall("CloudWatchLogs", "describeMetricFilters", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-cloudwatch-metricfilters-datatable').bootstrapTable('removeAll');

        data.metricFilters.forEach(metricFilter => {
            $('#section-managementandgovernance-cloudwatch-metricfilters-datatable').bootstrapTable('append', [{
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
            $('#section-managementandgovernance-cloudwatch-anomalydetectors-datatable').bootstrapTable('append', [{
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
            $('#section-managementandgovernance-cloudwatch-insightrules-datatable').bootstrapTable('append', [{
                f2id: insightRule.Name,
                f2type: 'cloudwatch.insightrule',
                f2data: insightRule,
                f2region: region,
                name: insightRule.Name,
                state: insightRule.State
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
    
    } else {
        return false;
    }

    return true;
});
