/* ========================================================================== */
// IoT Analytics
/* ========================================================================== */

sections.push({
    'category': 'Internet of Things',
    'service': 'Analytics',
    'resourcetypes': {
        'Channels': {
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
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Pipelines': {
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
        'Datastores': {
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
        'Datasets': {
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
        }
    }
});

async function updateDatatableInternetofThingsAnalytics() {
    blockUI('#section-internetofthings-analytics-channels-datatable');
    blockUI('#section-internetofthings-analytics-pipelines-datatable');
    blockUI('#section-internetofthings-analytics-datastores-datatable');
    blockUI('#section-internetofthings-analytics-datasets-datatable');

    await sdkcall("IoTAnalytics", "listChannels", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-analytics-channels-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.channelSummaries.map(channel => {
            return sdkcall("IoTAnalytics", "describeChannel", {
                channelName: channel.channelName
            }, true).then((data) => {
                $('#section-internetofthings-analytics-channels-datatable').deferredBootstrapTable('append', [{
                    f2id: data.channel.arn,
                    f2type: 'iotanalytics.channel',
                    f2data: data.channel,
                    f2region: region,
                    name: data.channel.name,
                    creationtime: data.channel.creationTime
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-internetofthings-analytics-channels-datatable');

    await sdkcall("IoTAnalytics", "listPipelines", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-analytics-pipelines-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.pipelineSummaries.map(pipeline => {
            return sdkcall("IoTAnalytics", "describePipeline", {
                pipelineName: pipeline.pipelineName
            }, true).then((data) => {
                $('#section-internetofthings-analytics-pipelines-datatable').deferredBootstrapTable('append', [{
                    f2id: data.pipeline.arn,
                    f2type: 'iotanalytics.pipeline',
                    f2data: data.pipeline,
                    f2region: region,
                    name: data.pipeline.name,
                    creationtime: data.pipeline.creationTime
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-internetofthings-analytics-pipelines-datatable');

    await sdkcall("IoTAnalytics", "listDatastores", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-analytics-datastores-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.datastoreSummaries.map(pipeline => {
            return sdkcall("IoTAnalytics", "describeDatastore", {
                datastoreName: pipeline.datastoreName
            }, true).then((data) => {
                $('#section-internetofthings-analytics-datastores-datatable').deferredBootstrapTable('append', [{
                    f2id: data.datastore.arn,
                    f2type: 'iotanalytics.datastore',
                    f2data: data.datastore,
                    f2region: region,
                    name: data.datastore.name,
                    creationtime: data.datastore.creationTime
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-internetofthings-analytics-datastores-datatable');

    await sdkcall("IoTAnalytics", "listDatasets", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-analytics-datasets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.datasetSummaries.map(dataset => {
            return sdkcall("IoTAnalytics", "describeDataset", {
                datasetName: dataset.datasetName
            }, true).then((data) => {
                $('#section-internetofthings-analytics-datasets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.dataset.arn,
                    f2type: 'iotanalytics.dataset',
                    f2data: data.dataset,
                    f2region: region,
                    name: data.dataset.name,
                    creationtime: data.dataset.creationTime
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-internetofthings-analytics-datasets-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "iotanalytics.channel") {
        reqParams.cfn['ChannelName'] = obj.data.name;
        if (obj.data.retentionPeriod) {
            reqParams.cfn['RetentionPeriod'] = {
                'Unlimited': obj.data.retentionPeriod.unlimited,
                'NumberOfDays': obj.data.retentionPeriod.numberOfDays
            };
        }
        if (obj.data.storage) {
            var customerManagedS3 = null;
            if (obj.data.storage.customerManagedS3) {
                customerManagedS3 = {
                    'Bucket': obj.data.storage.customerManagedS3.bucket,
                    'KeyPrefix': obj.data.storage.customerManagedS3.keyPrefix,
                    'RoleArn': obj.data.storage.customerManagedS3.roleArn
                };
            }
            reqParams.cfn['ChannelStorage'] = {
                'ServiceManagedS3': obj.data.storage.serviceManagedS3,
                'CustomerManagedS3': customerManagedS3
            };
        }

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iotanalytics', obj.id, 'AWS::IoTAnalytics::Channel'),
            'region': obj.region,
            'service': 'iotanalytics',
            'type': 'AWS::IoTAnalytics::Channel',
            'options': reqParams
        });
    } else if (obj.type == "iotanalytics.pipeline") {
        reqParams.cfn['PipelineName'] = obj.data.name;
        if (obj.data.activities) {
            reqParams.cfn['PipelineActivities'] = [];
            obj.data.activities.forEach(activity => {
                var pipelineActivity = {};

                if (activity.channel) {
                    pipelineActivity['Channel'] = {
                        'Name': activity.channel.name,
                        'ChannelName': activity.channel.channelName,
                        'Next': activity.channel.next
                    };
                }
                if (activity.lambda) {
                    pipelineActivity['Lambda'] = {
                        'Name': activity.lambda.name,
                        'LambdaName': activity.lambda.lambdaName,
                        'BatchSize': activity.lambda.batchSize,
                        'Next': activity.lambda.next
                    };
                }
                if (activity.datastore) {
                    pipelineActivity['Datastore'] = {
                        'Name': activity.datastore.name,
                        'DatastoreName': activity.datastore.datastoreName
                    };
                }
                if (activity.addAttributes) {
                    pipelineActivity['AddAttributes'] = {
                        'Name': activity.addAttributes.name,
                        'Attributes': activity.addAttributes.attributes,
                        'Next': activity.addAttributes.next
                    };
                }
                if (activity.removeAttributes) {
                    pipelineActivity['RemoveAttributes'] = {
                        'Name': activity.removeAttributes.name,
                        'Attributes': activity.removeAttributes.attributes,
                        'Next': activity.removeAttributes.next
                    };
                }
                if (activity.selectAttributes) {
                    pipelineActivity['SelectAttributes'] = {
                        'Name': activity.selectAttributes.name,
                        'Attributes': activity.selectAttributes.attributes,
                        'Next': activity.selectAttributes.next
                    };
                }
                if (activity.filter) {
                    pipelineActivity['Filter'] = {
                        'Name': activity.filter.name,
                        'Filter': activity.filter.filter,
                        'Next': activity.filter.next
                    };
                }
                if (activity.math) {
                    pipelineActivity['Math'] = {
                        'Name': activity.math.name,
                        'Attribute': activity.math.attribute,
                        'Math': activity.math.math,
                        'Next': activity.math.next
                    };
                }
                if (activity.deviceRegistryEnrich) {
                    pipelineActivity['DeviceRegistryEnrich'] = {
                        'Name': activity.deviceRegistryEnrich.name,
                        'Attribute': activity.deviceRegistryEnrich.attribute,
                        'ThingName': activity.deviceRegistryEnrich.thingName,
                        'RoleArn': activity.deviceRegistryEnrich.roleArn,
                        'Next': activity.deviceRegistryEnrich.next
                    };
                }
                if (activity.deviceShadowEnrich) {
                    pipelineActivity['DeviceShadowEnrich'] = {
                        'Name': activity.deviceShadowEnrich.name,
                        'Attribute': activity.deviceShadowEnrich.attribute,
                        'ThingName': activity.deviceShadowEnrich.thingName,
                        'RoleArn': activity.deviceShadowEnrich.roleArn,
                        'Next': activity.deviceShadowEnrich.next
                    };
                }

                reqParams.cfn['PipelineActivities'].push(pipelineActivity);
            });
        }

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iotanalytics', obj.id, 'AWS::IoTAnalytics::Pipeline'),
            'region': obj.region,
            'service': 'iotanalytics',
            'type': 'AWS::IoTAnalytics::Pipeline',
            'options': reqParams
        });
    } else if (obj.type == "iotanalytics.dataset") {
        reqParams.cfn['DatasetName'] = obj.data.name;
        reqParams.cfn['Actions'] = [];
        obj.data.actions.forEach(action => {
            var action_obj = {
                'ActionName': action.actionName
            };

            if (action.queryAction) {
                var filters = null;
                if (action.queryAction.filters) {
                    filters = [];
                    action.queryAction.filters.forEach(filter => {
                        var filter = {};
                        if (filter.deltaTime) {
                            filter['DeltaTime'] = {
                                'TimeExpression': filter.deltaTime.timeExpression,
                                'OffsetSeconds': filter.deltaTime.offsetSeconds
                            };
                        }
                        filters.push(filter);
                    });
                }
                action_obj['QueryAction'] = {
                    'Filters': filters,
                    'SqlQuery': action.queryAction.sqlQuery
                }
            }

            if (action.containerAction) {
                var variables = null;
                if (action.containerAction.variables) {
                    variables = [];
                    action.containerAction.variables.forEach(variable => {
                        var datasetContentVersionValue = null;
                        if (variable.datasetContentVersionValue) {
                            datasetContentVersionValue = {
                                'DatasetName': variable.datasetContentVersionValue.datasetName
                            };
                        }
                        var outputFileUriValue = null;
                        if (variable.outputFileUriValue) {
                            outputFileUriValue = {
                                'FileName': variable.outputFileUriValue.fileName
                            };
                        }
                        variables.push({
                            'DatasetContentVersionValue': datasetContentVersionValue,
                            'DoubleValue': variable.doubleValue,
                            'OutputFileUriValue': outputFileUriValue,
                            'StringValue': variable.stringValue,
                            'VariableName': variable.name
                        });
                    });
                }
                action_obj['ContainerAction'] = {
                    'ExecutionRoleArn': action.containerAction.executionRoleArn,
                    'Image': action.containerAction.image,
                    'ResourceConfiguration': {
                        'ComputeType': action.containerAction.resourceConfiguration.computeType,
                        'VolumeSizeInGB': action.containerAction.resourceConfiguration.volumeSizeInGB
                    },
                    'Variables': variables
                }
            }

            reqParams.cfn['Actions'].push(action_obj);
        });
        if (obj.data.triggers) {
            reqParams.cfn['Triggers'] = [];
            obj.data.triggers.forEach(trigger => {
                var schedule = null;
                if (trigger.schedule) {
                    schedule = {
                        'ScheduleExpression': trigger.schedule.expression
                    };
                }
                var dataset = null;
                if (trigger.dataset) {
                    dataset = {
                        'DatasetName': trigger.dataset.name
                    };
                }
                reqParams.cfn['Triggers'].push({
                    'Schedule': schedule,
                    'TriggeringDataset': dataset
                });
            });
        }
        if (obj.data.retentionPeriod) {
            reqParams.cfn['RetentionPeriod'] = {
                'Unlimited': obj.data.retentionPeriod.unlimited,
                'NumberOfDays': obj.data.retentionPeriod.numberOfDays
            };
        }

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iotanalytics', obj.id, 'AWS::IoTAnalytics::Dataset'),
            'region': obj.region,
            'service': 'iotanalytics',
            'type': 'AWS::IoTAnalytics::Dataset',
            'options': reqParams
        });
    } else if (obj.type == "iotanalytics.datastore") {
        reqParams.cfn['DatastoreName'] = obj.data.name;
        if (obj.data.retentionPeriod) {
            reqParams.cfn['RetentionPeriod'] = {
                'Unlimited': obj.data.retentionPeriod.unlimited,
                'NumberOfDays': obj.data.retentionPeriod.numberOfDays
            };
        }
        if (obj.data.storage) {
            var customerManagedS3 = null;
            if (obj.data.storage.customerManagedS3) {
                customerManagedS3 = {
                    'Bucket': obj.data.storage.customerManagedS3.bucket,
                    'KeyPrefix': obj.data.storage.customerManagedS3.keyPrefix,
                    'RoleArn': obj.data.storage.customerManagedS3.roleArn
                };
            }
            reqParams.cfn['DatastoreStorage'] = {
                'ServiceManagedS3': obj.data.storage.serviceManagedS3,
                'CustomerManagedS3': customerManagedS3
            };
        }

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iotanalytics', obj.id, 'AWS::IoTAnalytics::Datastore'),
            'region': obj.region,
            'service': 'iotanalytics',
            'type': 'AWS::IoTAnalytics::Datastore',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
