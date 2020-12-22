/* ========================================================================== */
// DevOps Guru
/* ========================================================================== */

sections.push({
    'category': 'Machine Learning',
    'service': 'DevOps Guru',
    'resourcetypes': {
        'Resource Collections': {
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
                        title: 'Stack Names',
                        field: 'stacknames',
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
        'Notification Channels': {
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
                        field: 'topicarn',
                        title: 'Topic ARN',
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

async function updateDatatableMachineLearningDevOpsGuru() {
    blockUI('#section-machinelearning-devopsguru-resourcecollections-datatable');
    blockUI('#section-machinelearning-devopsguru-notificationchannels-datatable');

    await sdkcall("DevOpsGuru", "getResourceCollection", {
        ResourceCollectionType: "AWS_CLOUD_FORMATION"
    }, false).then(async (data) => {
        $('#section-machinelearning-devopsguru-resourcecollections-datatable').deferredBootstrapTable('removeAll');

        $('#section-machinelearning-devopsguru-resourcecollections-datatable').deferredBootstrapTable('append', [{
            f2id: data.ResourceCollection.CloudFormation.StackNames.join(", ") + " (Resource Collection)",
            f2type: 'devopsguru.resourcecollection',
            f2data: data,
            f2region: region,
            stacknames: data.ResourceCollection.CloudFormation.StackNames.join(", ")
        }]);
        
    }).catch(() => { });

    await sdkcall("DevOpsGuru", "listNotificationChannels", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-devopsguru-notificationchannels-datatable').deferredBootstrapTable('removeAll');

        data.Channels.forEach(channel => {
            $('#section-machinelearning-devopsguru-notificationchannels-datatable').deferredBootstrapTable('append', [{
                f2id: channel.Id,
                f2type: 'devopsguru.notificationchannel',
                f2data: channel,
                f2region: region,
                name: channel.Id,
                topicarn: channel.Config.Sns.TopicArn
            }]);
        });
        
    }).catch(() => { });

    unblockUI('#section-machinelearning-devopsguru-resourcecollections-datatable');
    unblockUI('#section-machinelearning-devopsguru-notificationchannels-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "devopsguru.resourcecollection") {
        reqParams.cfn['ResourceCollectionFilter'] = obj.data.ResourceCollection;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('devopsguru', obj.id, 'AWS::DevOpsGuru::ResourceCollection'),
            'region': obj.region,
            'service': 'devopsguru',
            'type': 'AWS::DevOpsGuru::ResourceCollection',
            'options': reqParams
        });
    } else if (obj.type == "devopsguru.notificationchannel") {
        reqParams.cfn['Config'] = obj.data.Config;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('devopsguru', obj.id, 'AWS::DevOpsGuru::NotificationChannel'),
            'region': obj.region,
            'service': 'devopsguru',
            'type': 'AWS::DevOpsGuru::NotificationChannel',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Id': obj.data.Id
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
