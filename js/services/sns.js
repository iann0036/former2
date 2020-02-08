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
        $('#section-applicationintegration-sns-topics-datatable').bootstrapTable('removeAll');
        $('#section-applicationintegration-sns-topicpolicies-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Topics.map(topic => {
            return Promise.all([
                sdkcall("SNS", "getTopicAttributes", {
                    TopicArn: topic.TopicArn
                }, true).then((data) => {
                    data['TopicArn'] = topic.TopicArn;
                    $('#section-applicationintegration-sns-topics-datatable').bootstrapTable('append', [{
                        f2id: topic.TopicArn,
                        f2type: 'sns.topic',
                        f2data: data,
                        f2region: region,
                        topicarn: topic.TopicArn,
                        displayname: topic.DisplayName
                    }]);

                    $('#section-applicationintegration-sns-topicpolicies-datatable').bootstrapTable('append', [{
                        f2id: topic.TopicArn,
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
                            $('#section-applicationintegration-sns-subscriptions-datatable').bootstrapTable('append', [{
                                f2id: subscription.SubscriptionArn,
                                f2type: 'sns.subscription',
                                f2data: subscription,
                                f2region: region,
                                subscriptionarn: topic.SubscriptionArn,
                                topicarn: topic.TopicArn
                            }]);
                        });
                    });
                })
            ]);
        }));

        unblockUI('#section-applicationintegration-sns-topics-datatable');
        unblockUI('#section-applicationintegration-sns-topicpolicies-datatable');
        unblockUI('#section-applicationintegration-sns-subscriptions-datatable');
    });
}
