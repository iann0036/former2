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
        $('#section-internetofthings-analytics-channels-datatable').bootstrapTable('removeAll');

        await Promise.all(data.channelSummaries.map(channel => {
            return sdkcall("IoTAnalytics", "describeChannel", {
                channelName: channel.channelName
            }, true).then((data) => {
                $('#section-internetofthings-analytics-channels-datatable').bootstrapTable('append', [{
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
        $('#section-internetofthings-analytics-pipelines-datatable').bootstrapTable('removeAll');

        await Promise.all(data.pipelineSummaries.map(pipeline => {
            return sdkcall("IoTAnalytics", "describePipeline", {
                pipelineName: pipeline.pipelineName
            }, true).then((data) => {
                $('#section-internetofthings-analytics-pipelines-datatable').bootstrapTable('append', [{
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
        $('#section-internetofthings-analytics-datastores-datatable').bootstrapTable('removeAll');

        await Promise.all(data.datastoreSummaries.map(pipeline => {
            return sdkcall("IoTAnalytics", "describeDatastore", {
                datastoreName: pipeline.datastoreName
            }, true).then((data) => {
                $('#section-internetofthings-analytics-datastores-datatable').bootstrapTable('append', [{
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
        $('#section-internetofthings-analytics-datasets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.datasetSummaries.map(dataset => {
            return sdkcall("IoTAnalytics", "describeDataset", {
                datasetName: dataset.datasetName
            }, true).then((data) => {
                $('#section-internetofthings-analytics-datasets-datatable').bootstrapTable('append', [{
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
    
    } else {
        return false;
    }

    return true;
});
