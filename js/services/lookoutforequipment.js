/* ========================================================================== */
// Lookout For Equipment
/* ========================================================================== */

sections.push({
    'category': 'Machine Learning',
    'service': 'Lookout For Equipment',
    'resourcetypes': {
        'Inference Schedulers': {
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
                        field: 'modelname',
                        title: 'Model Name',
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

async function updateDatatableMachineLearningLookoutForEquipment() {
    blockUI('#section-machinelearning-lookoutforequipment-inferenceschedulers-datatable');

    await sdkcall("LookoutEquipment", "listInferenceSchedulers", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-lookoutforequipment-inferenceschedulers-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.InferenceSchedulerSummaries.map(inferencescheduler => {
            return sdkcall("LookoutEquipment", "describeInferenceScheduler", {
                InferenceSchedulerName: inferencescheduler.InferenceSchedulerName
            }, true).then(async (data) => {
                $('#section-machinelearning-lookoutforequipment-inferenceschedulers-datatable').deferredBootstrapTable('append', [{
                    f2id: data.InferenceSchedulerArn,
                    f2type: 'lookoutforequipment.inferencescheduler',
                    f2data: data,
                    f2region: region,
                    name: data.InferenceSchedulerName,
                    modelname: data.ModelName
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-machinelearning-lookoutforequipment-inferenceschedulers-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "lookoutforequipment.inferencescheduler") {
        reqParams.cfn['InferenceSchedulerName'] = obj.data.InferenceSchedulerName;
        reqParams.cfn['ModelName'] = obj.data.ModelName;
        reqParams.cfn['DataDelayOffsetInMinutes'] = obj.data.DataDelayOffsetInMinutes;
        reqParams.cfn['DataUploadFrequency'] = obj.data.DataUploadFrequency;
        reqParams.cfn['DataInputConfiguration'] = obj.data.DataInputConfiguration;
        reqParams.cfn['DataOutputConfiguration'] = obj.data.DataOutputConfiguration;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['ServerSideKmsKeyId'] = obj.data.ServerSideKmsKeyId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lookoutforequipment', obj.id, 'AWS::LookoutEquipment::InferenceScheduler'),
            'region': obj.region,
            'service': 'lookoutforequipment',
            'type': 'AWS::LookoutEquipment::InferenceScheduler',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Arn': obj.data.InferenceSchedulerArn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
