/* ========================================================================== */
// Kinesis
/* ========================================================================== */

sections.push({
    'category': 'Analytics',
    'service': 'Kinesis',
    'resourcetypes': {
        'Streams': {
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
                        field: 'retentionperiod',
                        title: 'Retention Period',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'encryption',
                        title: 'Encryption',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Stream Consumers': {
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
                        field: 'streamarn',
                        title: 'Stream ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Firehose Delivery Streams': {
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
                        field: 'versionid',
                        title: 'Version ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Analytics Applications': {
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
                        field: 'applicationcode',
                        title: 'Application Code',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'versionid',
                        title: 'Version ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Analytics Application Outputs': {
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
                        field: 'applicationname',
                        title: 'Application Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Analytics Application Reference Data Sources': {
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
                        field: 'applicationname',
                        title: 'Application Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Analytics V2 Applications': {
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
                        field: 'runtimeenvironment',
                        title: 'Runtime Environment',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'versionid',
                        title: 'Version ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Analytics V2 Application Outputs': {
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
                        field: 'applicationname',
                        title: 'Application Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Analytics V2 Application Reference Data Sources': {
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
                        title: 'ID',
                        field: 'id',
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
                        field: 'tablename',
                        title: 'Table Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'applicationname',
                        title: 'Application Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Analytics V2 Application CloudWatch Logging Options': {
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
                        title: 'ID',
                        field: 'id',
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
                        field: 'logstreamarn',
                        title: 'Log Stream ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'applicationname',
                        title: 'Application Name',
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

async function updateDatatableAnalyticsKinesis() {
    blockUI('#section-analytics-kinesis-streams-datatable');
    blockUI('#section-analytics-kinesis-streamconsumers-datatable');
    blockUI('#section-analytics-kinesis-firehosedeliverystreams-datatable');
    blockUI('#section-analytics-kinesis-analyticsapplications-datatable');
    blockUI('#section-analytics-kinesis-analyticsapplicationoutputs-datatable');
    blockUI('#section-analytics-kinesis-analyticsapplicationreferencedatasources-datatable');
    blockUI('#section-analytics-kinesis-analyticsv2applications-datatable');
    blockUI('#section-analytics-kinesis-analyticsv2applicationoutputs-datatable');
    blockUI('#section-analytics-kinesis-analyticsv2applicationreferencedatasources-datatable');
    blockUI('#section-analytics-kinesis-analyticsv2applicationcloudwatchloggingoptions-datatable');

    await sdkcall("Kinesis", "listStreams", {
        // no params
    }, true).then(async (data) => {
        $('#section-analytics-kinesis-streams-datatable').bootstrapTable('removeAll');
        $('#section-analytics-kinesis-streamconsumers-datatable').bootstrapTable('removeAll');

        await Promise.all(data.StreamNames.map(streamName => {
            return sdkcall("Kinesis", "describeStream", {
                StreamName: streamName
            }, true).then(async (data) => {
                $('#section-analytics-kinesis-streams-datatable').bootstrapTable('append', [{
                    f2id: data.StreamDescription.StreamARN,
                    f2type: 'kinesis.stream',
                    f2data: data.StreamDescription,
                    f2region: region,
                    f2link: 'https://console.aws.amazon.com/kinesis/home#/streams/details?streamName=' + data.StreamDescription.StreamName,
                    name: data.StreamDescription.StreamName,
                    retentionperiod: data.StreamDescription.RetentionPeriodHours + " hours",
                    encryption: data.StreamDescription.EncryptionType
                }]);

                await sdkcall("Kinesis", "listStreamConsumers", {
                    StreamARN: data.StreamDescription.StreamARN
                }, true).then(async (data) => {
                    await Promise.all(data.Consumers.map(consumer => {
                        return sdkcall("Kinesis", "describeStreamConsumer", {
                            StreamARN: data.StreamDescription.StreamARN,
                            ConsumerARN: consumer.ConsumerARN,
                            ConsumerName: consumer.ConsumerName
                        }, true).then((data) => {
                            $('#section-analytics-kinesis-streamconsumers-datatable').bootstrapTable('append', [{
                                f2id: data.ConsumerDescription.ConsumerARN,
                                f2type: 'kinesis.streamconsumer',
                                f2data: data.ConsumerDescription,
                                f2region: region,
                                name: data.ConsumerDescription.ConsumerName,
                                streamarn: data.ConsumerDescription.StreamARN
                            }]);
                        });
                    }));
                });
            });
        }));

        unblockUI('#section-analytics-kinesis-streams-datatable');
        unblockUI('#section-analytics-kinesis-streamconsumers-datatable');
    });

    await sdkcall("Firehose", "listDeliveryStreams", {
        // no params
    }, true).then(async (data) => {
        $('#section-analytics-kinesis-firehosedeliverystreams-datatable').bootstrapTable('removeAll');

        await Promise.all(data.DeliveryStreamNames.map(deliveryStreamName => {
            return sdkcall("Firehose", "describeDeliveryStream", {
                DeliveryStreamName: deliveryStreamName
            }, true).then((data) => {
                $('#section-analytics-kinesis-firehosedeliverystreams-datatable').bootstrapTable('append', [{
                    f2id: data.DeliveryStreamDescription.DeliveryStreamARN,
                    f2type: 'kinesis.firehosedeliverystream',
                    f2data: data.DeliveryStreamDescription,
                    f2region: region,
                    name: data.DeliveryStreamDescription.DeliveryStreamName,
                    type: data.DeliveryStreamDescription.DeliveryStreamType,
                    versionid: data.DeliveryStreamDescription.VersionId
                }]);
            });
        }));

        unblockUI('#section-analytics-kinesis-firehosedeliverystreams-datatable');
    });

    await sdkcall("KinesisAnalytics", "listApplications", {
        // no params
    }, true).then(async (data) => {
        $('#section-analytics-kinesis-analyticsapplications-datatable').bootstrapTable('removeAll');
        $('#section-analytics-kinesis-analyticsapplicationoutputs-datatable').bootstrapTable('removeAll');
        $('#section-analytics-kinesis-analyticsapplicationreferencedatasources-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ApplicationSummaries.map(applicationSummary => {
            return sdkcall("KinesisAnalytics", "describeApplication", {
                ApplicationName: applicationSummary.ApplicationName
            }, true).then((data) => {
                $('#section-analytics-kinesis-analyticsapplications-datatable').bootstrapTable('append', [{
                    f2id: data.ApplicationDetail.ApplicationARN,
                    f2type: 'kinesis.analyticsapplication',
                    f2data: data.ApplicationDetail,
                    f2region: region,
                    name: data.ApplicationDetail.ApplicationName,
                    applicationcode: data.ApplicationDetail.ApplicationCode,
                    versionid: data.ApplicationDetail.ApplicationVersionId
                }]);

                if (data.ApplicationDetail.OutputDescriptions) {
                    data.ApplicationDetail.OutputDescriptions.forEach(output => {
                        output['ApplicationName'] = data.ApplicationDetail.ApplicationName;
                        $('#section-analytics-kinesis-analyticsapplicationoutputs-datatable').bootstrapTable('append', [{
                            f2id: output.OutputId,
                            f2type: 'kinesis.analyticsapplicationoutput',
                            f2data: output,
                            f2region: region,
                            name: output.Name,
                            id: output.OutputId,
                            applicationname: data.ApplicationDetail.ApplicationName
                        }]);
                    });
                }

                if (data.ApplicationDetail.ReferenceDataSourceDescriptions) {
                    data.ApplicationDetail.ReferenceDataSourceDescriptions.forEach(referenceDataSource => {
                        output['ApplicationName'] = data.ApplicationDetail.ApplicationName;
                        $('#section-analytics-kinesis-analyticsapplicationreferencedatasources-datatable').bootstrapTable('append', [{
                            f2id: referenceDataSource.ReferenceId,
                            f2type: 'kinesis.analyticsapplicationreferencedatasource',
                            f2data: referenceDataSource,
                            f2region: region,
                            tablename: referenceDataSource.TableName,
                            id: referenceDataSource.ReferenceId,
                            applicationname: data.ApplicationDetail.ApplicationName
                        }]);
                    });
                }
            });
        }));
    }).catch(() => { });

    unblockUI('#section-analytics-kinesis-analyticsapplications-datatable');
    unblockUI('#section-analytics-kinesis-analyticsapplicationoutputs-datatable');
    unblockUI('#section-analytics-kinesis-analyticsapplicationreferencedatasources-datatable');

    await sdkcall("KinesisAnalyticsV2", "listApplications", {
        // no params
    }, true).then(async (data) => {
        $('#section-analytics-kinesis-analyticsv2applications-datatable').bootstrapTable('removeAll');
        $('#section-analytics-kinesis-analyticsv2applicationoutputs-datatable').bootstrapTable('removeAll');
        $('#section-analytics-kinesis-analyticsv2applicationreferencedatasources-datatable').bootstrapTable('removeAll');
        $('#section-analytics-kinesis-analyticsv2applicationcloudwatchloggingoptions-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ApplicationSummaries.map(applicationSummary => {
            return sdkcall("KinesisAnalyticsV2", "describeApplication", {
                ApplicationName: applicationSummary.ApplicationName
            }, true).then((data) => {
                $('#section-analytics-kinesis-analyticsv2applications-datatable').bootstrapTable('append', [{
                    f2id: data.ApplicationDetail.ApplicationARN,
                    f2type: 'kinesis.analyticsv2application',
                    f2data: data.ApplicationDetail,
                    f2region: region,
                    name: data.ApplicationDetail.ApplicationName,
                    description: data.ApplicationDetail.ApplicationDescription,
                    runtimeenvironment: data.ApplicationDetail.RuntimeEnvironment,
                    versionid: data.ApplicationDetail.ApplicationVersionId
                }]);

                if (data.ApplicationDetail.ApplicationConfigurationDescription && data.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription) {
                    if (data.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.OutputDescriptions) {
                        data.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.OutputDescriptions.forEach(output => {
                            output['ApplicationName'] = data.ApplicationDetail.ApplicationName;
                            $('#section-analytics-kinesis-analyticsv2applicationoutputs-datatable').bootstrapTable('append', [{
                                f2id: output.OutputId,
                                f2type: 'kinesis.analyticsv2applicationoutput',
                                f2data: output,
                                f2region: region,
                                name: output.Name,
                                id: output.OutputId,
                                applicationname: data.ApplicationDetail.ApplicationName
                            }]);
                        });
                    }

                    if (data.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions) {
                        data.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions.forEach(referenceDataSource => {
                            output['ApplicationName'] = data.ApplicationDetail.ApplicationName;
                            $('#section-analytics-kinesis-analyticsv2applicationreferencedatasources-datatable').bootstrapTable('append', [{
                                f2id: referenceDataSource.ReferenceId,
                                f2type: 'kinesis.analyticsv2applicationreferencedatasource',
                                f2data: referenceDataSource,
                                f2region: region,
                                id: referenceDataSource.ReferenceId,
                                tablename: referenceDataSource.TableName,
                                applicationname: data.ApplicationDetail.ApplicationName
                            }]);
                        });
                    }
                }

                if (data.ApplicationDetail.CloudWatchLoggingOptionDescriptions) {
                    data.ApplicationDetail.CloudWatchLoggingOptionDescriptions.forEach(cloudWatchLoggingOption => {
                        cloudWatchLoggingOption['ApplicationName'] = data.ApplicationDetail.ApplicationName;
                        $('#section-analytics-kinesis-analyticsv2applicationcloudwatchloggingoptions-datatable').bootstrapTable('append', [{
                            f2id: cloudWatchLoggingOption.CloudWatchLoggingOptionId,
                            f2type: 'kinesis.analyticsv2applicationcloudwatchloggingoption',
                            f2data: cloudWatchLoggingOption,
                            f2region: region,
                            id: cloudWatchLoggingOption.CloudWatchLoggingOptionId,
                            applicationname: data.ApplicationDetail.ApplicationName,
                            logstreamarn: data.ApplicationDetail.LogStreamARN
                        }]);
                    });
                }
            });
        }));
    }).catch(() => { });

    unblockUI('#section-analytics-kinesis-analyticsv2applications-datatable');
    unblockUI('#section-analytics-kinesis-analyticsv2applicationoutputs-datatable');
    unblockUI('#section-analytics-kinesis-analyticsv2applicationreferencedatasources-datatable');
    unblockUI('#section-analytics-kinesis-analyticsv2applicationcloudwatchloggingoptions-datatable');
}
