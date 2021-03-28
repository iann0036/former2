/* ========================================================================== */
// Lookout For Metrics
/* ========================================================================== */

sections.push({
    'category': 'Machine Learning',
    'service': 'Lookout For Metrics',
    'resourcetypes': {
        'Alerts': {
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
        }
    }
});

async function updateDatatableMachineLearningLookoutForMetrics() {
    blockUI('#section-machinelearning-lookoutformetrics-alerts-datatable');
    blockUI('#section-machinelearning-lookoutformetrics-anomalydetectors-datatable');


    await sdkcall("LookoutMetrics", "listAnomalyDetectors", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-lookoutformetrics-alerts-datatable').deferredBootstrapTable('removeAll');
        $('#section-machinelearning-lookoutformetrics-anomalydetectors-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.AnomalyDetectorSummaryList.map(async (anomalydetector) => {
            var metricsetlist = [];

            await sdkcall("LookoutMetrics", "listMetricSets", {
                AnomalyDetectorArn: anomalydetector.AnomalyDetectorArn
            }, false).then(async (data) => {
                await Promise.all(data.MetricSetSummaryList.map(async (metricset) => {
                    return sdkcall("LookoutMetrics", "describeMetricSet", {
                        MetricSetArn: metricset.MetricSetArn
                    }, true).then(async (data) => {
                        metricsetlist.push(data);
                    });
                }));
            }).catch(() => { });

            await sdkcall("LookoutMetrics", "describeAnomalyDetector", {
                AnomalyDetectorArn: anomalydetector.AnomalyDetectorArn
            }, true).then(async (data) => {
                data['MetricSetList'] = metricsetlist;

                $('#section-machinelearning-lookoutformetrics-anomalydetectors-datatable').deferredBootstrapTable('append', [{
                    f2id: data.AnomalyDetectorArn,
                    f2type: 'lookoutformetrics.anomalydetector',
                    f2data: data,
                    f2region: region,
                    name: data.AnomalyDetectorName,
                    description: data.AnomalyDetectorDescription
                }]);
            });

            return sdkcall("LookoutMetrics", "listAlerts", {
                AnomalyDetectorArn: anomalydetector.AnomalyDetectorArn
            }, false).then(async (data) => {
                await Promise.all(data.AlertSummaryList.map(async (alert) => {
                    return sdkcall("LookoutMetrics", "describeAlert", {
                        AlertArn: alert.AlertArn
                    }, true).then(async (data) => {
                        $('#section-machinelearning-lookoutformetrics-alerts-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Alert.AlertArn,
                            f2type: 'lookoutformetrics.anomalydetector',
                            f2data: data.Alert,
                            f2region: region,
                            name: data.Alert.AlertName,
                            description: data.Alert.AlertDescription
                        }]);
                    });
                }));
            }).catch(() => { });
        }));
    }).catch(() => { });

    unblockUI('#section-machinelearning-lookoutformetrics-alerts-datatable');
    unblockUI('#section-machinelearning-lookoutformetrics-anomalydetectors-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "lookoutformetrics.anomalydetector") {
        reqParams.cfn['AnomalyDetectorName'] = obj.data.AnomalyDetectorName;
        reqParams.cfn['AnomalyDetectorDescription'] = obj.data.AnomalyDetectorDescription;
        reqParams.cfn['AnomalyDetectorConfig'] = obj.data.AnomalyDetectorConfig;
        reqParams.cfn['KmsKeyArn'] = obj.data.KmsKeyArn;
        reqParams.cfn['MetricSetList'] = [];
        obj.data.MetricSetList.forEach(metricsetlistitem => {
            reqParams.cfn['MetricSetList'].push({
                'MetricSetName': metricsetlistitem.MetricSetName,
                'MetricSetDescription': metricsetlistitem.MetricSetDescription,
                'Offset': metricsetlistitem.Offset,
                'MetricList': metricsetlistitem.MetricList,
                'TimestampColumn': metricsetlistitem.TimestampColumn,
                'DimensionList': metricsetlistitem.DimensionList,
                'MetricSetFrequency': metricsetlistitem.MetricSetFrequency,
                'Timezone': metricsetlistitem.Timezone,
                'MetricSource': metricsetlistitem.MetricSource
            });
        });

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lookoutformetrics', obj.id, 'AWS::LookoutMetrics::AnomalyDetector'),
            'region': obj.region,
            'service': 'lookoutformetrics',
            'type': 'AWS::LookoutMetrics::AnomalyDetector',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.AnomalyDetectorName,
                'GetAtt': {
                    'Arn': obj.data.AnomalyDetectorArn
                }
            }
        });
    } else if (obj.type == "lookoutformetrics.alert") {
        reqParams.cfn['AlertName'] = obj.data.AlertName;
        reqParams.cfn['AlertDescription'] = obj.data.AlertDescription;
        reqParams.cfn['AnomalyDetectorArn'] = obj.data.AnomalyDetectorArn;
        reqParams.cfn['Action'] = obj.data.Action;
        reqParams.cfn['AlertSensitivityThreshold'] = obj.data.AlertSensitivityThreshold;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lookoutformetrics', obj.id, 'AWS::LookoutMetrics::Alert'),
            'region': obj.region,
            'service': 'lookoutformetrics',
            'type': 'AWS::LookoutMetrics::Alert',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.AlertName,
                'GetAtt': {
                    'Arn': obj.data.AlertArn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
