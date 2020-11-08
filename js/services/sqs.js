/* ========================================================================== */
// SQS
/* ========================================================================== */

sections.push({
    'category': 'Application Integration',
    'service': 'SQS',
    'resourcetypes': {
        'Queues': {
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
                        title: 'Queue URL',
                        field: 'queueurl',
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
        'Queue Policies': {
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
                        title: 'Queue URL',
                        field: 'queueurl',
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
        }
    }
});

async function updateDatatableApplicationIntegrationSQS() {
    blockUI('#section-applicationintegration-sqs-queues-datatable');
    blockUI('#section-applicationintegration-sqs-queuepolicies-datatable');

    await sdkcall("SQS", "listQueues", {
        // no params
    }, true).then(async (data) => {
        $('#section-applicationintegration-sqs-queues-datatable').deferredBootstrapTable('removeAll');
        $('#section-applicationintegration-sqs-queuepolicies-datatable').deferredBootstrapTable('removeAll');

        if (data.QueueUrls) {
            await Promise.all(data.QueueUrls.map(async (queueUrl) => {
                return sdkcall("SQS", "getQueueAttributes", {
                    QueueUrl: queueUrl,
                    AttributeNames: ['All']
                }, true).then(async (data) => {
                    data['QueueUrl'] = queueUrl;

                    data['Tags'] = await getResourceTags(data.Attributes.QueueArn);

                    $('#section-applicationintegration-sqs-queues-datatable').deferredBootstrapTable('append', [{
                        f2id: queueUrl,
                        f2type: 'sqs.queue',
                        f2data: data,
                        f2region: region,
                        queueurl: queueUrl
                    }]);

                    if (data.Attributes.Policy) {
                        $('#section-applicationintegration-sqs-queuepolicies-datatable').deferredBootstrapTable('append', [{
                            f2id: queueUrl + " Policy",
                            f2type: 'sqs.queuepolicy',
                            f2data: {
                                'Policy': data.Attributes.Policy,
                                'Queue': queueUrl
                            },
                            f2region: region,
                            policy: data.Attributes.Policy,
                            queueurl: queueUrl
                        }]);
                    }
                }).catch(() => { });
            }));
        }
    });

    unblockUI('#section-applicationintegration-sqs-queues-datatable');
    unblockUI('#section-applicationintegration-sqs-queuepolicies-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "sqs.queue") {
        reqParams.cfn['ContentBasedDeduplication'] = obj.data.Attributes.ContentBasedDeduplication;
        reqParams.tf['content_based_deduplication'] = obj.data.Attributes.ContentBasedDeduplication;
        reqParams.cfn['DelaySeconds'] = obj.data.Attributes.DelaySeconds;
        reqParams.tf['delay_seconds'] = obj.data.Attributes.DelaySeconds;
        reqParams.cfn['FifoQueue'] = obj.data.Attributes.FifoQueue;
        reqParams.tf['fifo_queue'] = obj.data.Attributes.FifoQueue;
        reqParams.cfn['KmsMasterKeyId'] = obj.data.Attributes.KmsMasterKeyId;
        reqParams.tf['kms_master_key_id'] = obj.data.Attributes.KmsMasterKeyId;
        reqParams.cfn['KmsDataKeyReusePeriodSeconds'] = obj.data.Attributes.KmsDataKeyReusePeriodSeconds;
        reqParams.tf['kms_data_key_reuse_period_seconds'] = obj.data.Attributes.KmsDataKeyReusePeriodSeconds;
        reqParams.cfn['MaximumMessageSize'] = obj.data.Attributes.MaximumMessageSize;
        reqParams.tf['max_message_size'] = obj.data.Attributes.MaximumMessageSize;
        reqParams.cfn['MessageRetentionPeriod'] = obj.data.Attributes.MessageRetentionPeriod;
        reqParams.tf['message_retention_seconds'] = obj.data.Attributes.MessageRetentionPeriod;
        reqParams.cfn['ReceiveMessageWaitTimeSeconds'] = obj.data.Attributes.ReceiveMessageWaitTimeSeconds;
        reqParams.tf['receive_wait_time_seconds'] = obj.data.Attributes.ReceiveMessageWaitTimeSeconds;
        reqParams.cfn['VisibilityTimeout'] = obj.data.Attributes.VisibilityTimeout;
        reqParams.tf['visibility_timeout_seconds'] = obj.data.Attributes.VisibilityTimeout;
        reqParams.cfn['QueueName'] = obj.data.Attributes.QueueArn.split(":").pop();
        reqParams.tf['name'] = obj.data.Attributes.QueueArn.split(":").pop();
        reqParams.cfn['RedrivePolicy'] = obj.data.Attributes.RedrivePolicy;
        reqParams.tf['redrive_policy'] = obj.data.Attributes.RedrivePolicy;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sqs', obj.id, 'AWS::SQS::Queue'),
            'region': obj.region,
            'service': 'sqs',
            'type': 'AWS::SQS::Queue',
            'terraformType': 'aws_sqs_queue',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Attributes.QueueArn,
                'GetAtt': {
                    'QueueName': obj.data.Attributes.QueueArn.split(":").pop()
                },
                'Import': {
                    'QueueUrl': obj.data.QueueUrl
                }
            }
        });
    } else if (obj.type == "sqs.queuepolicy") {
        reqParams.cfn['PolicyDocument'] = obj.data.Policy;
        reqParams.tf['policy'] = obj.data.Policy;
        reqParams.cfn['Queues'] = [obj.data.Queue];
        reqParams.tf['queue_url'] = obj.data.Queue;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sqs', obj.id, 'AWS::SQS::QueuePolicy'),
            'region': obj.region,
            'service': 'sqs',
            'type': 'AWS::SQS::QueuePolicy',
            'terraformType': 'aws_sqs_queue_policy',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
