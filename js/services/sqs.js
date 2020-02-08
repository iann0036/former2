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
        $('#section-applicationintegration-sqs-queues-datatable').bootstrapTable('removeAll');
        $('#section-applicationintegration-sqs-queuepolicies-datatable').bootstrapTable('removeAll');

        if (data.QueueUrls) {
            await Promise.all(data.QueueUrls.map(queueUrl => {
                return sdkcall("SQS", "getQueueAttributes", {
                    QueueUrl: queueUrl,
                    AttributeNames: ['All']
                }, true).then((data) => {
                    data['QueueUrl'] = queueUrl;
                    $('#section-applicationintegration-sqs-queues-datatable').bootstrapTable('append', [{
                        f2id: queueUrl,
                        f2type: 'sqs.queue',
                        f2data: data,
                        f2region: region,
                        queueurl: queueUrl
                    }]);

                    $('#section-applicationintegration-sqs-queuepolicies-datatable').bootstrapTable('append', [{
                        f2id: queueUrl,
                        f2type: 'sqs.queuepolicy',
                        f2data: {
                            'Policy': data.Attributes.Policy,
                            'Queue': queueUrl
                        },
                        f2region: region,
                        policy: data.Attributes.Policy,
                        queueurl: queueUrl
                    }]);
                }).catch(() => { });
            }));
        }
    });

    unblockUI('#section-applicationintegration-sqs-queues-datatable');
    unblockUI('#section-applicationintegration-sqs-queuepolicies-datatable');
}
