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
            'limitedresults': true,
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
        },
        'Canaries': {
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
                        field: 'runtimeversion',
                        title: 'Runtime Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Synthetics Groups': {
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
        'Application Insights Applications': {
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
                        title: 'Resource Group Name',
                        field: 'resourcegroupname',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                [
                    // none
                ]
            ]
        },
        'Metric Streams': {
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
                        field: 'outputformat',
                        title: 'Output Format',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Query Definitions': {
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
                        field: 'querystring',
                        title: 'Query String',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Logs Resource Policies': {
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
        'Evidently Projects': {
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
        'Evidently Experiments': {
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
                        field: 'project',
                        title: 'Project',
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
        'Evidently Features': {
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
                        field: 'project',
                        title: 'Project',
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
        'Evidently Launches': {
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
                        field: 'project',
                        title: 'Project',
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
        'Evidently Segments': {
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
        'RUM App Monitors': {
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
                        field: 'domain',
                        title: 'Domain',
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
    blockUI('#section-managementandgovernance-cloudwatch-canaries-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-syntheticsgroups-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-applicationinsightsapplications-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-metricstreams-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-querydefinitions-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-logsresourcepolicies-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-evidentlyprojects-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-evidentlyexperiments-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-evidentlyfeatures-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-evidentlylaunches-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-evidentlysegments-datatable');
    blockUI('#section-managementandgovernance-cloudwatch-rumappmonitors-datatable');

    await sdkcall("CloudWatch", "describeAlarms", {
        AlarmTypes: ["MetricAlarm"]
    }, true).then((data) => {
        $('#section-managementandgovernance-cloudwatch-alarms-datatable').deferredBootstrapTable('removeAll');

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
        $('#section-managementandgovernance-cloudwatch-compositealarms-datatable').deferredBootstrapTable('removeAll');

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
        $('#section-managementandgovernance-cloudwatch-dashboards-datatable').deferredBootstrapTable('removeAll');

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
        $('#section-managementandgovernance-cloudwatch-destinations-datatable').deferredBootstrapTable('removeAll');

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
        $('#section-managementandgovernance-cloudwatch-loggroups-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-cloudwatch-logstreams-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-cloudwatch-subscriptionfilters-datatable').deferredBootstrapTable('removeAll');

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
                (window && window.localStorage.getItem('skipirrelevantresources') != "true") ? // potentially skip
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
                }) : Promise.resolve(),
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
        $('#section-managementandgovernance-cloudwatch-metricfilters-datatable').deferredBootstrapTable('removeAll');

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
        $('#section-managementandgovernance-cloudwatch-anomalydetectors-datatable').deferredBootstrapTable('removeAll');

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
        $('#section-managementandgovernance-cloudwatch-insightrules-datatable').deferredBootstrapTable('removeAll');

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

    await sdkcall("Synthetics", "describeCanaries", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-cloudwatch-canaries-datatable').deferredBootstrapTable('removeAll');

        data.Canaries.forEach(canary => {
            $('#section-managementandgovernance-cloudwatch-canaries-datatable').deferredBootstrapTable('append', [{
                f2id: canary.Name,
                f2type: 'cloudwatch.canary',
                f2data: canary,
                f2region: region,
                name: canary.Name,
                id: canary.Id,
                runtimeversion: canary.RuntimeVersion
            }]);
        });
    }).catch(() => { });

    await sdkcall("Synthetics", "listGroups", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-cloudwatch-syntheticsgroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Groups.map(async (group) => {
            return sdkcall("Synthetics", "listGroupResources", {
                GroupIdentifier: group.Id
            }, true).then((data) => {
                group['Resources'] = data.Resources;

                $('#section-managementandgovernance-cloudwatch-syntheticsgroups-datatable').deferredBootstrapTable('append', [{
                    f2id: group.Arn,
                    f2type: 'cloudwatch.syntheticsgroup',
                    f2data: group,
                    f2region: region,
                    name: group.Name,
                    id: group.Id
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("ApplicationInsights", "listApplications", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-cloudwatch-applicationinsightsapplications-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ApplicationInfoList.map(async (app) => {
            return sdkcall("ApplicationInsights", "describeApplication", {
                ResourceGroupName: app.ResourceGroupName
            }, true).then((data) => {
                $('#section-managementandgovernance-cloudwatch-applicationinsightsapplications-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ApplicationInfo.Name + " Application Insight",
                    f2type: 'applicationinsights.application',
                    f2data: data.ApplicationInfo,
                    f2region: region,
                    resourcegroupname: data.ApplicationInfo.ResourceGroupName
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("CloudWatch", "listMetricStreams", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-cloudwatch-metricstreams-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Entries.map(async (entry) => {
            return sdkcall("CloudWatch", "getMetricStream", {
                Name: entry.Name
            }, true).then((data) => {
                $('#section-managementandgovernance-cloudwatch-metricstreams-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'cloudwatch.metricstream',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    outputformat: data.OutputFormat
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("CloudWatchLogs", "describeQueryDefinitions", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-cloudwatch-querydefinitions-datatable').deferredBootstrapTable('removeAll');

        data.queryDefinitions.forEach(querydefinition => {
            $('#section-managementandgovernance-cloudwatch-querydefinitions-datatable').deferredBootstrapTable('append', [{
                f2id: querydefinition.name + " Query Definition",
                f2type: 'cloudwatch.querydefinition',
                f2data: querydefinition,
                f2region: region,
                name: querydefinition.name,
                querystring: querydefinition.queryString
            }]);
            
        });
    }).catch(() => { });

    await sdkcall("CloudWatchLogs", "describeResourcePolicies", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-cloudwatch-logsresourcepolicies-datatable').deferredBootstrapTable('removeAll');

        data.resourcePolicies.forEach(resourcepolicy => {
            $('#section-managementandgovernance-cloudwatch-logsresourcepolicies-datatable').deferredBootstrapTable('append', [{
                f2id: resourcepolicy.policyName + " Logs Resource Policy",
                f2type: 'cloudwatch.logsresourcepolicy',
                f2data: resourcepolicy,
                f2region: region,
                name: resourcepolicy.policyName
            }]);
            
        });
    }).catch(() => { });

    await sdkcall("Evidently", "listProjects", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-cloudwatch-evidentlyprojects-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-cloudwatch-evidentlyexperiments-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-cloudwatch-evidentlyfeatures-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-cloudwatch-evidentlylaunches-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.projects.map(async (project) => {
            await sdkcall("Evidently", "getProject", {
                project: project.arn
            }, true).then((data) => {
                $('#section-managementandgovernance-cloudwatch-evidentlyprojects-datatable').deferredBootstrapTable('append', [{
                    f2id: data.project.arn,
                    f2type: 'cloudwatch.evidentlyproject',
                    f2data: data.project,
                    f2region: region,
                    name: data.project.name,
                    description: data.project.description
                }]);
            });

            await sdkcall("Evidently", "listExperiments", {
                project: project.arn
            }, true).then(async (data) => {
                await Promise.all(data.experiments.map(async (experiment) => {
                    return sdkcall("Evidently", "getExperiment", {
                        project: project.arn,
                        experiment: experiment.arn
                    }, true).then((data) => {
                        $('#section-managementandgovernance-cloudwatch-evidentlyexperiments-datatable').deferredBootstrapTable('append', [{
                            f2id: data.experiment.arn,
                            f2type: 'cloudwatch.evidentlyexperiment',
                            f2data: data.experiment,
                            f2region: region,
                            name: data.experiment.name,
                            project: data.experiment.project,
                            description: data.experiment.description
                        }]);
                    });
                }));
            }).catch(() => { });

            await sdkcall("Evidently", "listFeatures", {
                project: project.arn
            }, true).then(async (data) => {
                await Promise.all(data.features.map(async (feature) => {
                    return sdkcall("Evidently", "getFeature", {
                        project: project.arn,
                        feature: feature.arn
                    }, true).then((data) => {
                        $('#section-managementandgovernance-cloudwatch-evidentlyfeatures-datatable').deferredBootstrapTable('append', [{
                            f2id: data.feature.arn,
                            f2type: 'cloudwatch.evidentlyfeature',
                            f2data: data.feature,
                            f2region: region,
                            name: data.feature.name,
                            project: data.feature.project,
                            description: data.feature.description
                        }]);
                    });
                }));
            }).catch(() => { });

            return sdkcall("Evidently", "listLaunches", {
                project: project.arn
            }, true).then(async (data) => {
                await Promise.all(data.launches.map(async (launch) => {
                    return sdkcall("Evidently", "getExperiment", {
                        project: project.arn,
                        launch: launch.arn
                    }, true).then((data) => {
                        $('#section-managementandgovernance-cloudwatch-evidentlylaunches-datatable').deferredBootstrapTable('append', [{
                            f2id: data.launch.arn,
                            f2type: 'cloudwatch.evidentlylaunch',
                            f2data: data.launch,
                            f2region: region,
                            name: data.launch.name,
                            project: data.launch.project,
                            description: data.launch.description
                        }]);
                    });
                }));
            }).catch(() => { });
        }));
    }).catch(() => { });

    await sdkcall("Evidently", "listSegments", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-cloudwatch-evidentlysegments-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.segments.map(async (segment) => {
            return sdkcall("Evidently", "getSegment", {
                segment: segment.arn
            }, true).then((data) => {
                $('#section-managementandgovernance-cloudwatch-evidentlysegments-datatable').deferredBootstrapTable('append', [{
                    f2id: data.segment.arn,
                    f2type: 'cloudwatch.evidentlysegment',
                    f2data: data.segment,
                    f2region: region,
                    name: data.segment.name,
                    description: data.segment.description
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("RUM", "listAppMonitors", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-cloudwatch-rumappmonitors-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.AppMonitorSummaries.map(async (appmonitor) => {
            return sdkcall("RUM", "getAppMonitor", {
                Name: appmonitor.Name
            }, true).then((data) => {
                $('#section-managementandgovernance-cloudwatch-rumappmonitors-datatable').deferredBootstrapTable('append', [{
                    f2id: data.AppMonitor.Id,
                    f2type: 'cloudwatch.rumappmonitor',
                    f2data: data.AppMonitor,
                    f2region: region,
                    name: data.AppMonitor.Name,
                    domain: data.AppMonitor.Domain
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-managementandgovernance-cloudwatch-loggroups-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-logstreams-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-subscriptionfilters-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-anomalydetectors-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-insightrules-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-canaries-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-syntheticsgroups-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-applicationinsightsapplications-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-metricstreams-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-querydefinitions-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-logsresourcepolicies-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-evidentlyprojects-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-evidentlyexperiments-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-evidentlyfeatures-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-evidentlylaunches-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-evidentlysegments-datatable');
    unblockUI('#section-managementandgovernance-cloudwatch-rumappmonitors-datatable');
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
        reqParams.cfn['ThresholdMetricId'] = obj.data.ThresholdMetricId;

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
                },
                'Import': {
                    'AlarmName': obj.data.AlarmName
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
    } else if (obj.type == "cloudwatch.canary") {
        reqParams.cfn['Name'] = obj.data.Name;
        if (obj.data.Code) {
            reqParams.cfn['Code'] = {
                'Handler': obj.data.Code.Handler,
                'S3Bucket': 'REPLACEME',
                'S3Key': 'REPLACEME',
                'S3ObjectVersion': 'REPLACEME',
                'Script': 'REPLACEME',
            };
        }
        reqParams.cfn['ExecutionRoleArn'] = obj.data.ExecutionRoleArn;
        reqParams.cfn['Schedule'] = obj.data.Schedule;
        reqParams.cfn['RunConfig'] = obj.data.RunConfig;
        reqParams.cfn['SuccessRetentionPeriod'] = obj.data.SuccessRetentionPeriodInDays;
        reqParams.cfn['FailureRetentionPeriod'] = obj.data.FailureRetentionPeriodInDays;
        reqParams.cfn['ArtifactS3Location'] = obj.data.ArtifactS3Location;
        reqParams.cfn['RuntimeVersion'] = obj.data.RuntimeVersion;
        reqParams.cfn['VPCConfig'] = obj.data.VpcConfig;
        reqParams.cfn['StartCanaryAfterCreation'] = true;
        reqParams.cfn['Tags'] = stripAWSTags(obj.data.Tags);

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::Synthetics::Canary'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::Synthetics::Canary',
            'options': reqParams,
            'returnValues': {
                'Import': {
                    'Name': obj.data.Name,
                    'Id': obj.data.Id
                }
            }
        });
    } else if (obj.type == "cloudwatch.syntheticsgroup") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['ResourceArns'] = obj.data.Resources;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::Synthetics::Group'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::Synthetics::Group',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'GetAtt': {
                    'Id': obj.data.Id
                }
            }
        });
    } else if (obj.type == "applicationinsights.application") {
        reqParams.cfn['ResourceGroupName'] = obj.data.ResourceGroupName;
        reqParams.cfn['OpsItemSNSTopicArn'] = obj.data.OpsItemSNSTopicArn;
        reqParams.cfn['OpsCenterEnabled'] = obj.data.OpsCenterEnabled;
        reqParams.cfn['CWEMonitorEnabled'] = obj.data.CWEMonitorEnabled;

        /*
        TODO:
        AutoConfigurationEnabled: Boolean
        ComponentMonitoringSettings: 
            - ComponentMonitoringSetting
        CustomComponents: 
            - CustomComponent
        LogPatternSets: 
            - LogPatternSet
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('applicationinsights', obj.id, 'AWS::ApplicationInsights::Application'),
            'region': obj.region,
            'service': 'applicationinsights',
            'type': 'AWS::ApplicationInsights::Application',
            'options': reqParams
        });
    } else if (obj.type == "cloudwatch.metricstream") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['OutputFormat'] = obj.data.OutputFormat;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['FirehoseArn'] = obj.data.FirehoseArn;
        reqParams.cfn['IncludeFilters'] = obj.data.IncludeFilters;
        reqParams.cfn['ExcludeFilters'] = obj.data.ExcludeFilters;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::CloudWatch::MetricStream'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::CloudWatch::MetricStream',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'GetAtt': {
                    'Arn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "cloudwatch.querydefinition") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['QueryString'] = obj.data.queryString;
        reqParams.cfn['LogGroupNames'] = obj.data.logGroupNames;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('logs', obj.id, 'AWS::Logs::QueryDefinition'),
            'region': obj.region,
            'service': 'logs',
            'type': 'AWS::Logs::QueryDefinition',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.queryDefinitionId
            }
        });
    } else if (obj.type == "cloudwatch.logsresourcepolicy") {
        reqParams.cfn['PolicyName'] = obj.data.policyName;
        reqParams.cfn['PolicyDocument'] = obj.data.policyDocument;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('logs', obj.id, 'AWS::Logs::ResourcePolicy'),
            'region': obj.region,
            'service': 'logs',
            'type': 'AWS::Logs::ResourcePolicy',
            'options': reqParams
        });
    } else if (obj.type == "cloudwatch.evidentlyproject") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        if (obj.data.dataDelivery) {
            var cloudWatchLogs = null;
            if (obj.data.dataDelivery.cloudWatchLogs) {
                cloudWatchLogs = obj.data.dataDelivery.cloudWatchLogs.logGroup;
            }
            var s3Destination = null;
            if (obj.data.dataDelivery.s3Destination) {
                s3Destination = {
                    'BucketName': obj.data.dataDelivery.s3Destination.bucket,
                    'Prefix': obj.data.dataDelivery.s3Destination.prefix
                };
            }
            reqParams.cfn['DataDelivery'] = {
                'LogGroup': cloudWatchLogs,
                'S3': s3Destination
            };
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.tags) {
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.tags[k]
                    });
                }
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::Evidently::Project'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::Evidently::Project',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.arn
            }
        });
    } else if (obj.type == "cloudwatch.evidentlyexperiment") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        if (obj.data.metricGoals) {
            reqParams.cfn['MetricGoals'] = [];
            obj.data.metricGoals.forEach(metricgoal => {
                reqParams.cfn['MetricGoals'].push({
                    'DesiredChange': metricgoal.desiredChange,
                    'EntityIdKey': metricgoal.metricDefinition.entityIdKey,
                    'EventPattern': metricgoal.metricDefinition.eventPattern,
                    'MetricName': metricgoal.metricDefinition.name,
                    'UnitLabel': metricgoal.metricDefinition.unitLabel,
                    'ValueKey': metricgoal.metricDefinition.valueKey
                });
            });
        }
        reqParams.cfn['Project'] = obj.data.project;
        reqParams.cfn['RandomizationSalt'] = obj.data.randomizationSalt;
        reqParams.cfn['SamplingRate'] = obj.data.samplingRate;
        if (obj.data.treatments) {
            reqParams.cfn['Treatments'] = [];
            obj.data.treatments.forEach(treatment => {
                var feature = null;
                var variation = null;
                if (Object.keys(treatment.featureVariations).length > 0) {
                    feature = Object.keys(treatment.featureVariations)[0];
                    variation = Object.values(treatment.featureVariations)[0];
                }
                reqParams.cfn['Treatments'].push({
                    'Description': treatment.description,
                    'Feature': feature,
                    'TreatmentName': treatment.name,
                    'Variation': variation
                });
            });
        }
        if (obj.data.onlineAbDefinition) {
            var weights = [];
            for (var k of obj.data.onlineAbDefinition.treatmentWeights) {
                weights.push({
                    'Treatment': k,
                    'SplitWeight': obj.data.onlineAbDefinition.treatmentWeights[k]
                });
            }
            reqParams.cfn['OnlineAbConfig'] = {
                'ControlTreatmentName': obj.data.onlineAbDefinition.controlTreatmentName,
                'TreatmentWeights': weights
            };
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.tags) {
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.tags[k]
                    });
                }
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::Evidently::Experiment'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::Evidently::Experiment',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.arn
            }
        });
    } else if (obj.type == "cloudwatch.evidentlyfeature") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['Project'] = obj.data.project;
        reqParams.cfn['DefaultVariation'] = obj.data.defaultVariation;
        if (obj.data.entityOverrides) {
            reqParams.cfn['EntityOverrides'] = [];
            for (var k of obj.data.entityOverrides) {
                reqParams.cfn['EntityOverrides'].push({
                    'EntityId': k,
                    'Variation': obj.data.entityOverrides[k]
                });
            }
        }
        reqParams.cfn['EvaluationStrategy'] = obj.data.evaluationStrategy;
        if (obj.data.variations) {
            reqParams.cfn['Variations'] = [];
            obj.data.variations.forEach(variation => {
                reqParams.cfn['Variations'].push({
                    'BooleanValue': variation.value.boolValue,
                    'DoubleValue': variation.value.doubleValue,
                    'LongValue': variation.value.longValue,
                    'StringValue': variation.value.stringValue,
                    'VariationName': variation.name
                });
            });
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.tags) {
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.tags[k]
                    });
                }
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::Evidently::Feature'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::Evidently::Feature',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.arn
            }
        });
    } else if (obj.type == "cloudwatch.evidentlylaunch") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        if (obj.data.metricMonitors) {
            reqParams.cfn['MetricMonitors'] = [];
            obj.data.metricMonitors.forEach(metricmonitor => {
                reqParams.cfn['MetricMonitors'].push({
                    'EntityIdKey': metricmonitor.metricDefinition.entityIdKey,
                    'EventPattern': metricmonitor.metricDefinition.eventPattern,
                    'MetricName': metricmonitor.metricDefinition.name,
                    'UnitLabel': metricmonitor.metricDefinition.unitLabel,
                    'ValueKey': metricmonitor.metricDefinition.valueKey
                });
            });
        }
        reqParams.cfn['Project'] = obj.data.project;
        reqParams.cfn['RandomizationSalt'] = obj.data.randomizationSalt;
        if (obj.data.scheduledSplitsDefinition && obj.data.scheduledSplitsDefinition.steps) {
            reqParams.cfn['ScheduledSplitsConfig'] = [];
            obj.data.scheduledSplitsDefinition.steps.forEach(step => {
                var groupWeights = [];
                Object.keys(step.groupWeights).forEach(k => {
                    groupWeights.push({
                        'GroupName': k,
                        'SplitWeight': step.groupWeights[k],
                    });
                });
                reqParams.cfn['ScheduledSplitsConfig'].push({
                    'GroupWeights': groupWeights,
                    'StartTime': step.startTime
                });
            });
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.tags) {
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.tags[k]
                    });
                }
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::Evidently::Launch'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::Evidently::Launch',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.arn
            }
        });
    } else if (obj.type == "cloudwatch.evidentlysegment") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['Pattern'] = obj.data.pattern;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.tags) {
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.tags[k]
                    });
                }
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::Evidently::Segment'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::Evidently::Segment',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.arn
            }
        });
    } else if (obj.type == "cloudwatch.rumappmonitor") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Domain'] = obj.data.Domain;
        if (obj.data.DataStorage && obj.data.DataStorage.CwLog) {
            reqParams.cfn['CwLogEnabled'] = obj.data.DataStorage.CwLog.CwLogEnabled;
        }
        reqParams.cfn['AppMonitorConfiguration'] = obj.data.AppMonitorConfiguration;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.Tags) {
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.Tags[k]
                    });
                }
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudwatch', obj.id, 'AWS::RUM::AppMonitor'),
            'region': obj.region,
            'service': 'cloudwatch',
            'type': 'AWS::RUM::AppMonitor',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
