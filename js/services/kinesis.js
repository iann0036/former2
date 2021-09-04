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
        $('#section-analytics-kinesis-streams-datatable').deferredBootstrapTable('removeAll');
        $('#section-analytics-kinesis-streamconsumers-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.StreamNames.map(streamName => {
            return sdkcall("Kinesis", "describeStream", {
                StreamName: streamName
            }, true).then(async (data) => {
                data.StreamDescription['Tags'] = await getResourceTags(data.StreamDescription.StreamARN);

                $('#section-analytics-kinesis-streams-datatable').deferredBootstrapTable('append', [{
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
                            $('#section-analytics-kinesis-streamconsumers-datatable').deferredBootstrapTable('append', [{
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
        $('#section-analytics-kinesis-firehosedeliverystreams-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DeliveryStreamNames.map(deliveryStreamName => {
            return sdkcall("Firehose", "describeDeliveryStream", {
                DeliveryStreamName: deliveryStreamName
            }, true).then((data) => {
                $('#section-analytics-kinesis-firehosedeliverystreams-datatable').deferredBootstrapTable('append', [{
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
        $('#section-analytics-kinesis-analyticsapplications-datatable').deferredBootstrapTable('removeAll');
        $('#section-analytics-kinesis-analyticsapplicationoutputs-datatable').deferredBootstrapTable('removeAll');
        $('#section-analytics-kinesis-analyticsapplicationreferencedatasources-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ApplicationSummaries.map(applicationSummary => {
            return sdkcall("KinesisAnalytics", "describeApplication", {
                ApplicationName: applicationSummary.ApplicationName
            }, true).then((data) => {
                $('#section-analytics-kinesis-analyticsapplications-datatable').deferredBootstrapTable('append', [{
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
                        $('#section-analytics-kinesis-analyticsapplicationoutputs-datatable').deferredBootstrapTable('append', [{
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
                        $('#section-analytics-kinesis-analyticsapplicationreferencedatasources-datatable').deferredBootstrapTable('append', [{
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
        $('#section-analytics-kinesis-analyticsv2applications-datatable').deferredBootstrapTable('removeAll');
        $('#section-analytics-kinesis-analyticsv2applicationoutputs-datatable').deferredBootstrapTable('removeAll');
        $('#section-analytics-kinesis-analyticsv2applicationreferencedatasources-datatable').deferredBootstrapTable('removeAll');
        $('#section-analytics-kinesis-analyticsv2applicationcloudwatchloggingoptions-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ApplicationSummaries.map(applicationSummary => {
            return sdkcall("KinesisAnalyticsV2", "describeApplication", {
                ApplicationName: applicationSummary.ApplicationName
            }, true).then((data) => {
                $('#section-analytics-kinesis-analyticsv2applications-datatable').deferredBootstrapTable('append', [{
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
                            $('#section-analytics-kinesis-analyticsv2applicationoutputs-datatable').deferredBootstrapTable('append', [{
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
                            $('#section-analytics-kinesis-analyticsv2applicationreferencedatasources-datatable').deferredBootstrapTable('append', [{
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
                        $('#section-analytics-kinesis-analyticsv2applicationcloudwatchloggingoptions-datatable').deferredBootstrapTable('append', [{
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

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "kinesis.stream") {
        reqParams.cfn['Name'] = obj.data.StreamName;
        reqParams.tf['name'] = obj.data.StreamName;
        reqParams.cfn['RetentionPeriodHours'] = obj.data.RetentionPeriodHours;
        reqParams.tf['retention_period'] = obj.data.RetentionPeriodHours;
        reqParams.cfn['StreamEncryption'] = {
            'EncryptionType': obj.data.EncryptionType,
            'KeyId': obj.data.KeyId
        };
        reqParams.tf['encryption_type'] = obj.data.EncryptionType;
        reqParams.tf['kms_key_id'] = obj.data.KeyId;
        reqParams.cfn['ShardCount'] = obj.data.Shards.length;
        reqParams.tf['shard_count'] = obj.data.Shards.length;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('kinesis', obj.id, 'AWS::Kinesis::Stream'),
            'region': obj.region,
            'service': 'kinesis',
            'type': 'AWS::Kinesis::Stream',
            'terraformType': 'aws_kinesis_stream',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.StreamName,
                'GetAtt': {
                    'Arn': obj.data.StreamARN
                }
            }
        });
    } else if (obj.type == "kinesis.streamconsumer") {
        reqParams.cfn['ConsumerName'] = obj.data.ConsumerName;
        reqParams.cfn['StreamARN'] = obj.data.StreamARN;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('kinesis', obj.id, 'AWS::Kinesis::StreamConsumer'),
            'region': obj.region,
            'service': 'kinesis',
            'type': 'AWS::Kinesis::StreamConsumer',
            'options': reqParams
        });
    } else if (obj.type == "kinesis.analyticsapplication") {
        reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
        reqParams.cfn['ApplicationDescription'] = obj.data.ApplicationDescription;
        reqParams.cfn['ApplicationCode'] = obj.data.ApplicationCode;
        if (obj.data.InputDescriptions) {
            reqParams.cfn['Inputs'] = [];
            obj.data.InputDescriptions.forEach(input => {
                var inputProcessingConfiguration = null;
                if (input.InputProcessingConfigurationDescription && input.InputProcessingConfigurationDescription.InputLambdaProcessorDescription) {
                    inputProcessingConfiguration = {
                        'InputLambdaProcessor': {
                            'ResourceARN': input.InputProcessingConfigurationDescription.InputLambdaProcessorDescription.ResourceARN,
                            'RoleARN': input.InputProcessingConfigurationDescription.InputLambdaProcessorDescription.RoleARN
                        }
                    };
                }
                reqParams.cfn['Inputs'].push({
                    'NamePrefix': input.NamePrefix,
                    'InputParallelism': input.InputParallelism,
                    'InputSchema': input.InputSchema,
                    'KinesisFirehoseInput': input.KinesisFirehoseInputDescription,
                    'KinesisStreamsInput': input.KinesisStreamsInputDescription,
                    'InputProcessingConfiguration': inputProcessingConfiguration
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('kinesis', obj.id, 'AWS::KinesisAnalytics::Application'),
            'region': obj.region,
            'service': 'kinesis',
            'type': 'AWS::KinesisAnalytics::Application',
            'options': reqParams
        });
    } else if (obj.type == "kinesis.analyticsapplicationoutput") {
        reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
        reqParams.cfn['Output'] = {
            'Name': obj.data.Name,
            'KinesisStreamsOutput': obj.data.KinesisStreamsOutputDescription,
            'KinesisFirehoseOutput': obj.data.KinesisFirehoseOutputDescription,
            'LambdaOutput': obj.data.LambdaOutputDescription,
            'DestinationSchema': obj.data.DestinationSchema
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('kinesis', obj.id, 'AWS::KinesisAnalytics::ApplicationOutput'),
            'region': obj.region,
            'service': 'kinesis',
            'type': 'AWS::KinesisAnalytics::ApplicationOutput',
            'options': reqParams
        });
    } else if (obj.type == "kinesis.analyticsapplicationreferencedatasource") {
        reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
        reqParams.cfn['ReferenceDataSource'] = {
            'TableName': obj.data.TableName,
            'S3ReferenceDataSource': obj.data.S3ReferenceDataSourceDescription,
            'ReferenceSchema': obj.data.ReferenceSchema
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('kinesis', obj.id, 'AWS::KinesisAnalytics::ApplicationReferenceDataSource'),
            'region': obj.region,
            'service': 'kinesis',
            'type': 'AWS::KinesisAnalytics::ApplicationReferenceDataSource',
            'options': reqParams
        });
    } else if (obj.type == "kinesis.analyticsv2application") {
        reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
        reqParams.cfn['ApplicationDescription'] = obj.data.ApplicationDescription;
        reqParams.cfn['ServiceExecutionRole'] = obj.data.ServiceExecutionRole;
        reqParams.cfn['RuntimeEnvironment'] = obj.data.RuntimeEnvironment;
        if (obj.data.ApplicationConfigurationDescription) {
            var sqlApplicationConfiguration = null;
            if (obj.data.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription && obj.data.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions) {
                var inputs = [];
                obj.data.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions.forEach(input => {
                    var inputProcessingConfiguration = null;
                    if (input.InputProcessingConfigurationDescription && input.InputProcessingConfigurationDescription.InputLambdaProcessorDescription) {
                        inputProcessingConfiguration = {
                            'InputLambdaProcessor': {
                                'ResourceARN': input.InputProcessingConfigurationDescription.InputLambdaProcessorDescription.ResourceARN
                            }
                        };
                    }
                    var kinesisStreamsInput = null;
                    if (input.KinesisStreamsInputDescription) {
                        kinesisStreamsInput = {
                            'ResourceARN': input.KinesisStreamsInputDescription.ResourceARN
                        };
                    }
                    var kinesisFirehoseInput = null;
                    if (input.KinesisFirehoseInputDescription) {
                        kinesisFirehoseInput = {
                            'ResourceARN': input.KinesisFirehoseInputDescription.ResourceARN
                        };
                    }
                    inputs.push({
                        'NamePrefix': input.NamePrefix,
                        'InputSchema': input.InputSchema,
                        'KinesisStreamsInput': kinesisStreamsInput,
                        'KinesisFirehoseInput': kinesisFirehoseInput,
                        'InputProcessingConfiguration': inputProcessingConfiguration,
                        'InputParallelism': input.InputParallelism
                    });
                });
                sqlApplicationConfiguration = {
                    'Inputs': inputs
                };
            }
            var applicationCodeConfiguration = null;
            if (obj.data.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription) {
                var codeContent = null;
                if (obj.data.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription) {
                    /*
                    SKIPPED:
                    ZipFileContent
                    */
                    codeContent = {
                        'TextContent': obj.data.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.TextContent,
                        'S3ContentLocation': obj.data.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription
                    };
                }
                applicationCodeConfiguration = {
                    'CodeContentType': obj.data.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType,
                    'CodeContent': codeContent
                };
            }
            var flinkApplicationConfiguration = null;
            if (obj.data.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription) {
                var parallelismConfiguration = null;
                if (obj.data.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription) {
                    parallelismConfiguration = {
                        'ConfigurationType': obj.data.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ConfigurationType,
                        'ParallelismPerKPU': obj.data.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ParallelismPerKPU,
                        'AutoScalingEnabled': obj.data.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled,
                        'Parallelism': obj.data.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.Parallelism
                    };
                }
                flinkApplicationConfiguration = {
                    'CheckpointConfiguration': obj.data.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription,
                    'ParallelismConfiguration': parallelismConfiguration,
                    'MonitoringConfiguration': obj.data.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription
                };
            }
            var environmentProperties = null;
            if (obj.data.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions && obj.data.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions) {
                environmentProperties = {
                    'PropertyGroups': []
                };
                obj.data.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions.forEach(propertyGroup => {
                    environmentProperties.PropertyGroups.push({
                        'PropertyMap': propertyGroup.PropertyMap,
                        'PropertyGroupId': propertyGroup.PropertyGroupId
                    });
                });
            }
            reqParams.cfn['ApplicationConfiguration'] = {
                'ApplicationCodeConfiguration': applicationCodeConfiguration,
                'EnvironmentProperties': environmentProperties,
                'FlinkApplicationConfiguration': flinkApplicationConfiguration,
                'SqlApplicationConfiguration': sqlApplicationConfiguration,
                'ApplicationSnapshotConfiguration': obj.data.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('kinesis', obj.id, 'AWS::KinesisAnalyticsV2::Application'),
            'region': obj.region,
            'service': 'kinesis',
            'type': 'AWS::KinesisAnalyticsV2::Application',
            'options': reqParams
        });
    } else if (obj.type == "kinesis.analyticsv2applicationoutput") {
        reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
        reqParams.cfn['Output'] = {
            'Name': obj.data.Name,
            'KinesisStreamsOutput': obj.data.KinesisStreamsOutputDescription,
            'KinesisFirehoseOutput': obj.data.KinesisFirehoseOutputDescription,
            'LambdaOutput': obj.data.LambdaOutputDescription,
            'DestinationSchema': obj.data.DestinationSchema
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('kinesis', obj.id, 'AWS::KinesisAnalyticsV2::ApplicationOutput'),
            'region': obj.region,
            'service': 'kinesis',
            'type': 'AWS::KinesisAnalyticsV2::ApplicationOutput',
            'options': reqParams
        });
    } else if (obj.type == "kinesis.analyticsv2applicationreferencedatasource") {
        reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
        reqParams.cfn['ReferenceDataSource'] = {
            'TableName': obj.data.TableName,
            'S3ReferenceDataSource': obj.data.S3ReferenceDataSourceDescription,
            'ReferenceSchema': obj.data.ReferenceSchema
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('kinesis', obj.id, 'AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource'),
            'region': obj.region,
            'service': 'kinesis',
            'type': 'AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource',
            'options': reqParams
        });
    } else if (obj.type == "kinesis.analyticsv2applicationcloudwatchloggingoption") {
        reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
        reqParams.cfn['CloudWatchLoggingOption'] = {
            'LogStreamARN': obj.data.LogStreamARN
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('kinesis', obj.id, 'AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption'),
            'region': obj.region,
            'service': 'kinesis',
            'type': 'AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption',
            'options': reqParams
        });
    } else if (obj.type == "kinesis.firehosedeliverystream") {
        reqParams.cfn['DeliveryStreamName'] = obj.data.DeliveryStreamName;
        reqParams.cfn['DeliveryStreamType'] = obj.data.DeliveryStreamType;
        if (obj.data.Source && obj.data.Source.KinesisStreamSourceDescription) {
            reqParams.cfn['KinesisStreamSourceConfiguration'] = {
                'KinesisStreamARN': obj.data.Source.KinesisStreamSourceDescription.KinesisStreamARN,
                'RoleARN': obj.data.Source.KinesisStreamSourceDescription.RoleARN
            };
        }
        if (obj.data.DeliveryStreamEncryptionConfiguration) {
            reqParams.cfn['DeliveryStreamEncryptionConfigurationInput'] = {
                'KeyARN': obj.data.DeliveryStreamEncryptionConfiguration.KeyARN,
                'KeyType': obj.data.DeliveryStreamEncryptionConfiguration.KeyType
            };
        }
        obj.data.Destinations.forEach(destination => {
            if (destination.S3DestinationDescription) {
                reqParams.cfn['S3DestinationConfiguration'] = {
                    'BucketARN': destination.S3DestinationDescription.BucketARN,
                    'BufferingHints': destination.S3DestinationDescription.BufferingHints,
                    'CloudWatchLoggingOptions': destination.S3DestinationDescription.CloudWatchLoggingOptions,
                    'CompressionFormat': destination.S3DestinationDescription.CompressionFormat,
                    'EncryptionConfiguration': destination.S3DestinationDescription.EncryptionConfiguration,
                    'Prefix': destination.S3DestinationDescription.Prefix,
                    'RoleARN': destination.S3DestinationDescription.RoleARN
                };
            }
            if (destination.ExtendedS3DestinationDescription) {
                reqParams.cfn['ExtendedS3DestinationConfiguration'] = {
                    'BucketARN': destination.ExtendedS3DestinationDescription.BucketARN,
                    'BufferingHints': destination.ExtendedS3DestinationDescription.BufferingHints,
                    'CloudWatchLoggingOptions': destination.ExtendedS3DestinationDescription.CloudWatchLoggingOptions,
                    'CompressionFormat': destination.ExtendedS3DestinationDescription.CompressionFormat,
                    'DataFormatConversionConfiguration': destination.ExtendedS3DestinationDescription.DataFormatConversionConfiguration,
                    'DynamicPartitioningConfiguration': destination.ExtendedS3DestinationDescription.DynamicPartitioningConfiguration,
                    'EncryptionConfiguration': destination.ExtendedS3DestinationDescription.EncryptionConfiguration,
                    'Prefix': destination.ExtendedS3DestinationDescription.Prefix,
                    'RoleARN': destination.ExtendedS3DestinationDescription.RoleARN,
                    'ProcessingConfiguration': destination.ExtendedS3DestinationDescription.ProcessingConfiguration,
                    'S3BackupConfiguration': destination.ExtendedS3DestinationDescription.S3BackupDescription,
                    'S3BackupMode': destination.ExtendedS3DestinationDescription.S3BackupMode
                };
            }
            if (destination.RedshiftDestinationDescription) {
                var s3Configuration = null;
                if (destination.RedshiftDestinationDescription.S3DestinationDescription) {
                    s3Configuration = {
                        'BucketARN': destination.RedshiftDestinationDescription.S3DestinationDescription.BucketARN,
                        'BufferingHints': destination.RedshiftDestinationDescription.S3DestinationDescription.BufferingHints,
                        'CloudWatchLoggingOptions': destination.RedshiftDestinationDescription.S3DestinationDescription.CloudWatchLoggingOptions,
                        'CompressionFormat': destination.RedshiftDestinationDescription.S3DestinationDescription.CompressionFormat,
                        'EncryptionConfiguration': destination.RedshiftDestinationDescription.S3DestinationDescription.EncryptionConfiguration,
                        'Prefix': destination.RedshiftDestinationDescription.S3DestinationDescription.Prefix,
                        'RoleARN': destination.RedshiftDestinationDescription.S3DestinationDescription.RoleARN
                    };
                }
                reqParams.cfn['RedshiftDestinationConfiguration'] = {
                    'CloudWatchLoggingOptions': destination.RedshiftDestinationDescription.CloudWatchLoggingOptions,
                    'ClusterJDBCURL': destination.RedshiftDestinationDescription.ClusterJDBCURL,
                    'CopyCommand': destination.RedshiftDestinationDescription.CopyCommand,
                    'Password': destination.RedshiftDestinationDescription.Password,
                    'ProcessingConfiguration': destination.RedshiftDestinationDescription.ProcessingConfiguration,
                    'RoleARN': destination.RedshiftDestinationDescription.RoleARN,
                    'S3Configuration': s3Configuration,
                    'Username': destination.RedshiftDestinationDescription.Username
                };
            }
            if (destination.ElasticsearchDestinationDescription) {
                var s3Configuration = null;
                if (destination.ElasticsearchDestinationDescription.S3DestinationDescription) {
                    s3Configuration = {
                        'BucketARN': destination.ElasticsearchDestinationDescription.S3DestinationDescription.BucketARN,
                        'BufferingHints': destination.ElasticsearchDestinationDescription.S3DestinationDescription.BufferingHints,
                        'CloudWatchLoggingOptions': destination.ElasticsearchDestinationDescription.S3DestinationDescription.CloudWatchLoggingOptions,
                        'CompressionFormat': destination.ElasticsearchDestinationDescription.S3DestinationDescription.CompressionFormat,
                        'EncryptionConfiguration': destination.ElasticsearchDestinationDescription.S3DestinationDescription.EncryptionConfiguration,
                        'Prefix': destination.ElasticsearchDestinationDescription.S3DestinationDescription.Prefix,
                        'RoleARN': destination.ElasticsearchDestinationDescription.S3DestinationDescription.RoleARN
                    };
                }
                reqParams.cfn['ElasticsearchDestinationConfiguration'] = {
                    'BufferingHints': destination.ElasticsearchDestinationDescription.BufferingHints,
                    'CloudWatchLoggingOptions': destination.ElasticsearchDestinationDescription.CloudWatchLoggingOptions,
                    'DomainARN': destination.ElasticsearchDestinationDescription.DomainARN,
                    'IndexName': destination.ElasticsearchDestinationDescription.IndexName,
                    'IndexRotationPeriod': destination.ElasticsearchDestinationDescription.IndexRotationPeriod,
                    'ProcessingConfiguration': destination.ElasticsearchDestinationDescription.ProcessingConfiguration,
                    'RetryOptions': destination.ElasticsearchDestinationDescription.RetryOptions,
                    'RoleARN': destination.ElasticsearchDestinationDescription.RoleARN,
                    'S3BackupMode': destination.ElasticsearchDestinationDescription.S3BackupMode,
                    'S3Configuration': s3Configuration,
                    'TypeName': destination.ElasticsearchDestinationDescription.TypeName,
                    'VpcConfiguration': destination.ElasticsearchDestinationDescription.VpcConfigurationDescription
                };
            }
            if (destination.ElasticsearchDestinationDescription) {
                var s3Configuration = null;
                if (destination.SplunkDestinationDescription.S3DestinationDescription) {
                    s3Configuration = {
                        'BucketARN': destination.SplunkDestinationDescription.S3DestinationDescription.BucketARN,
                        'BufferingHints': destination.SplunkDestinationDescription.S3DestinationDescription.BufferingHints,
                        'CloudWatchLoggingOptions': destination.SplunkDestinationDescription.S3DestinationDescription.CloudWatchLoggingOptions,
                        'CompressionFormat': destination.SplunkDestinationDescription.S3DestinationDescription.CompressionFormat,
                        'EncryptionConfiguration': destination.SplunkDestinationDescription.S3DestinationDescription.EncryptionConfiguration,
                        'Prefix': destination.SplunkDestinationDescription.S3DestinationDescription.Prefix,
                        'RoleARN': destination.SplunkDestinationDescription.S3DestinationDescription.RoleARN
                    };
                }
                reqParams.cfn['SplunkDestinationConfiguration'] = {
                    'CloudWatchLoggingOptions': destination.SplunkDestinationDescription.CloudWatchLoggingOptions,
                    'HECAcknowledgmentTimeoutInSeconds': destination.SplunkDestinationDescription.HECAcknowledgmentTimeoutInSeconds,
                    'HECEndpoint': destination.SplunkDestinationDescription.HECEndpoint,
                    'HECEndpointType': destination.SplunkDestinationDescription.HECEndpointType,
                    'HECToken': destination.SplunkDestinationDescription.HECToken,
                    'ProcessingConfiguration': destination.SplunkDestinationDescription.ProcessingConfiguration,
                    'RetryOptions': destination.SplunkDestinationDescription.RetryOptions,
                    'S3BackupMode': destination.SplunkDestinationDescription.S3BackupMode,
                    'S3Configuration': s3Configuration
                };
            }
        });

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('kinesis', obj.id, 'AWS::KinesisFirehose::DeliveryStream'),
            'region': obj.region,
            'service': 'kinesis',
            'type': 'AWS::KinesisFirehose::DeliveryStream',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
