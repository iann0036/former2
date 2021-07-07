/* ========================================================================== */
// SNS
/* ========================================================================== */

sections.push({
    'category': 'Application Integration',
    'service': 'SNS',
    'resourcetypes': {
        'Topics': {
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
                        title: 'Topic ARN',
                        field: 'topicarn',
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
                        field: 'displayname',
                        title: 'Display Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Topic Policies': {
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
                        title: 'Topic ARN',
                        field: 'topicarn',
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
        'Subscriptions': {
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
                        title: 'Subscription ARN',
                        field: 'subscriptionarn',
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
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableApplicationIntegrationSNS() {
    blockUI('#section-applicationintegration-sns-topics-datatable');
    blockUI('#section-applicationintegration-sns-topicpolicies-datatable');
    blockUI('#section-applicationintegration-sns-subscriptions-datatable');

    await sdkcall("SNS", "listTopics", {
        // no params
    }, true).then(async (data) => {
        $('#section-applicationintegration-sns-topics-datatable').deferredBootstrapTable('removeAll');
        $('#section-applicationintegration-sns-topicpolicies-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Topics.map(topic => {
            return Promise.all([
                sdkcall("SNS", "getTopicAttributes", {
                    TopicArn: topic.TopicArn
                }, true).then(async (data) => {
                    data['TopicArn'] = topic.TopicArn;
                    await sdkcall("SNS", "listTagsForResource", {
                        ResourceArn: topic.TopicArn
                    }, false).then(tagdata => {
                        if (tagdata.Tags && tagdata.Tags.length) {
                            data.Tags = tagdata.Tags;
                        }
                        $('#section-applicationintegration-sns-topics-datatable').deferredBootstrapTable('append', [{
                            f2id: topic.TopicArn,
                            f2type: 'sns.topic',
                            f2data: data,
                            f2region: region,
                            topicarn: topic.TopicArn,
                            displayname: topic.DisplayName
                        }]);
                    }).catch((error) => { });

                    $('#section-applicationintegration-sns-topicpolicies-datatable').deferredBootstrapTable('append', [{
                        f2id: topic.TopicArn + " Policy",
                        f2type: 'sns.topicpolicy',
                        f2data: {
                            'Policy': data.Attributes.Policy,
                            'Topic': topic.TopicArn
                        },
                        f2region: region,
                        topicarn: topic.TopicArn,
                        policy: data.Attributes.Policy,
                        topicarn: topic.TopicArn
                    }]);
                }),
                sdkcall("SNS", "listSubscriptionsByTopic", {
                    TopicArn: topic.TopicArn
                }, true).then((data) => {
                    data.Subscriptions.forEach(subscription => {
                        sdkcall("SNS", "getSubscriptionAttributes", {
                            SubscriptionArn: subscription.SubscriptionArn
                        }, true).then((data) => {
                            subscription['Attributes'] = data.Attributes;
                            $('#section-applicationintegration-sns-subscriptions-datatable').deferredBootstrapTable('append', [{
                                f2id: subscription.SubscriptionArn,
                                f2type: 'sns.subscription',
                                f2data: subscription,
                                f2region: region,
                                subscriptionarn: topic.SubscriptionArn,
                                topicarn: topic.TopicArn
                            }]);
                        }).catch((error) => { });
                    });
                })
            ]);
        }));

        unblockUI('#section-applicationintegration-sns-topics-datatable');
        unblockUI('#section-applicationintegration-sns-topicpolicies-datatable');
        unblockUI('#section-applicationintegration-sns-subscriptions-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "sns.topic") {
        reqParams.cfn['DisplayName'] = obj.data.Attributes.DisplayName;
        reqParams.tf['display_name'] = obj.data.Attributes.DisplayName;
        reqParams.cfn['TopicName'] = obj.data.Attributes.TopicArn.split(':').pop();
        reqParams.tf['name'] = obj.data.Attributes.TopicArn.split(':').pop();
        reqParams.cfn['Tags'] = obj.data.Tags;
        reqParams.cfn['KmsMasterKeyId'] = obj.data.Attributes.KmsMasterKeyId;
        if (obj.data.Attributes.TopicArn.endsWith(".fifo")) {
            reqParams.cfn['FifoTopic'] = true;
        }
        reqParams.cfn['ContentBasedDeduplication'] = obj.data.Attributes.ContentBasedDeduplication;

        /*
        TODO:
        SKIPPED: Subscription
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sns', obj.id, 'AWS::SNS::Topic'),
            'region': obj.region,
            'service': 'sns',
            'type': 'AWS::SNS::Topic',
            'terraformType': 'aws_sns_topic',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.TopicArn,
                'GetAtt': {
                    'TopicName': obj.data.Attributes.TopicArn.split(':').pop()
                },
                'Import': {
                    'TopicArn': obj.data.TopicArn
                }
            }
        });
    } else if (obj.type == "sns.topicpolicy") {
        reqParams.cfn['PolicyDocument'] = obj.data.Policy;
        reqParams.tf['policy'] = obj.data.Policy;
        reqParams.cfn['Topics'] = [obj.data.Topic];
        reqParams.tf['arn'] = obj.data.Topic;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sns', obj.id, 'AWS::SNS::TopicPolicy'),
            'region': obj.region,
            'service': 'sns',
            'type': 'AWS::SNS::TopicPolicy',
            'terraformType': 'aws_sns_topic_policy',
            'options': reqParams
        });
    } else if (obj.type == "sns.subscription") {
        reqParams.cfn['TopicArn'] = obj.data.TopicArn;
        reqParams.tf['topic_arn'] = obj.data.TopicArn;
        reqParams.cfn['DeliveryPolicy'] = obj.data.Attributes.DeliveryPolicy;
        reqParams.tf['delivery_policy'] = obj.data.Attributes.DeliveryPolicy;
        reqParams.cfn['FilterPolicy'] = obj.data.Attributes.FilterPolicy;
        reqParams.tf['filter_policy'] = obj.data.Attributes.FilterPolicy;
        reqParams.cfn['Endpoint'] = obj.data.Endpoint;
        reqParams.tf['endpoint'] = obj.data.Endpoint;
        reqParams.cfn['Protocol'] = obj.data.Protocol;
        reqParams.tf['protocol'] = obj.data.Protocol;
        if (['http', 'https', 'sqs'].includes(obj.data.Protocol)) {
            reqParams.cfn['RawMessageDelivery'] = obj.data.Attributes.RawMessageDelivery;
            reqParams.tf['raw_message_delivery'] = obj.data.Attributes.RawMessageDelivery;
        }
        reqParams.cfn['Region'] = obj.data.TopicArn.split(":")[3];
        reqParams.cfn['RedrivePolicy'] = obj.data.Attributes.RedrivePolicy;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sns', obj.id, 'AWS::SNS::Subscription'),
            'region': obj.region,
            'service': 'sns',
            'type': 'AWS::SNS::Subscription',
            'terraformType': 'aws_sns_topic_subscription',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
