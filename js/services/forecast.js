/* ========================================================================== */
// Forecast
/* ========================================================================== */

sections.push({
    'category': 'Machine Learning',
    'service': 'Forecast',
    'resourcetypes': {
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
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
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
        },
        'Dataset Groups': {
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

async function updateDatatableMachineLearningForecast() {
    blockUI('#section-machinelearning-forecast-datasets-datatable');
    blockUI('#section-machinelearning-forecast-datasetgroups-datatable');

    await sdkcall("ForecastService", "listDatasets", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-forecast-datasets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Datasets.map(async (dataset) => {
            return sdkcall("ForecastService", "describeDataset", {
                DatasetArn: dataset.DatasetArn
            }, false).then(async (data) => {
                $('#section-machinelearning-forecast-datasets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.DatasetArn,
                    f2type: 'forecast.dataset',
                    f2data: data,
                    f2region: region,
                    name: data.DatasetName,
                    type: data.DatasetType,
                    domain: data.Domain
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("ForecastService", "listDatasetGroups", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-forecast-datasetgroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DatasetGroups.map(async (datasetgroup) => {
            return sdkcall("ForecastService", "describeDatasetGroup", {
                DatasetGroupArn: datasetgroup.DatasetGroupArn
            }, false).then(async (data) => {
                $('#section-machinelearning-forecast-datasetgroups-datatable').deferredBootstrapTable('append', [{
                    f2id: data.DatasetArn,
                    f2type: 'forecast.datasetgroup',
                    f2data: data,
                    f2region: region,
                    name: data.DatasetGroupName,
                    domain: data.Domain
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-machinelearning-forecast-datasets-datatable');
    unblockUI('#section-machinelearning-forecast-datasetgroups-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "forecast.dataset") {
        reqParams.cfn['DatasetName'] = obj.data.DatasetName;
        reqParams.cfn['DatasetType'] = obj.data.DatasetType;
        reqParams.cfn['Domain'] = obj.data.Domain;
        reqParams.cfn['DataFrequency'] = obj.data.DataFrequency;
        reqParams.cfn['Schema'] = obj.data.Schema;
        reqParams.cfn['EncryptionConfig'] = obj.data.EncryptionConfig;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('forecast', obj.id, 'AWS::Forecast::Dataset'),
            'region': obj.region,
            'service': 'forecast',
            'type': 'AWS::Forecast::Dataset',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Arn': obj.data.DatasetArn
                }
            }
        });
    } else if (obj.type == "forecast.datasetgroup") {
        reqParams.cfn['DatasetGroupName'] = obj.data.DatasetGroupName;
        reqParams.cfn['Domain'] = obj.data.Domain;
        reqParams.cfn['DatasetArns'] = obj.data.DatasetArns;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('forecast', obj.id, 'AWS::Forecast::DatasetGroup'),
            'region': obj.region,
            'service': 'forecast',
            'type': 'AWS::Forecast::DatasetGroup',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
