/* ========================================================================== */
// Amazon MQ
/* ========================================================================== */

sections.push({
    'category': 'Application Integration',
    'service': 'Amazon MQ',
    'resourcetypes': {
        'Brokers': {
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'deploymentmode',
                        title: 'Deployment Mode',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'engineversion',
                        title: 'Engine Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'instancetype',
                        title: 'Instance Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Configurations': {
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'engineversion',
                        title: 'Engine Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
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
        'Configuration Associations': {
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
                        title: 'Configuration ID',
                        field: 'configurationid',
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
                        field: 'brokerid',
                        title: 'Broker ID',
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

async function updateDatatableApplicationIntegrationAmazonMQ() {
    blockUI('#section-applicationintegration-amazonmq-brokers-datatable');
    blockUI('#section-applicationintegration-amazonmq-configurations-datatable');
    blockUI('#section-applicationintegration-amazonmq-configurationassociations-datatable');

    await sdkcall("MQ", "listBrokers", {
        // no params
    }, true).then(async (data) => {
        $('#section-applicationintegration-amazonmq-brokers-datatable').bootstrapTable('removeAll');
        $('#section-applicationintegration-amazonmq-configurationassociations-datatable').bootstrapTable('removeAll');

        await Promise.all(data.BrokerSummaries.map(brokerSummary => {
            return sdkcall("MQ", "describeBroker", {
                BrokerId: brokerSummary.BrokerId
            }, true).then((data) => {
                if (data.Configurations && data.Configurations.Current) {
                    $('#section-applicationintegration-amazonmq-brokers-datatable').bootstrapTable('append', [{
                        f2id: data.Configurations.Current.Id,
                        f2type: 'amazonmq.configurationassociation',
                        f2data: {
                            'Broker': brokerSummary.BrokerId,
                            'Configuration': data.Configurations.Current
                        },
                        f2region: region,
                        brokerid: brokerSummary.BrokerId,
                        configurationid: data.Configurations.Current.Id
                    }]);
                }

                $('#section-applicationintegration-amazonmq-brokers-datatable').bootstrapTable('append', [{
                    f2id: data.BrokerArn,
                    f2type: 'amazonmq.broker',
                    f2data: data,
                    f2region: region,
                    name: data.BrokerName,
                    id: data.BrokerId,
                    deploymentmode: data.DeploymentMode,
                    engineversion: data.EngineVersion,
                    instancetype: data.HostInstanceType
                }]);
            });
        }));

        unblockUI('#section-applicationintegration-amazonmq-brokers-datatable');
        unblockUI('#section-applicationintegration-amazonmq-configurationassociations-datatable');
    });

    await sdkcall("MQ", "listConfigurations", {
        // no params
    }, true).then(async (data) => {
        $('#section-applicationintegration-amazonmq-configurations-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Configurations.map(configuration => {
            return sdkcall("MQ", "describeConfiguration", {
                ConfigurationId: configuration.Id
            }, true).then(async (data) => {
                await sdkcall("MQ", "describeConfigurationRevision", {
                    ConfigurationId: configuration.Id,
                    ConfigurationRevision: configuration.LatestRevision.Revision
                }, false).then((revisiondata) => {
                    data['Data'] = revisiondata.Data;

                    $('#section-applicationintegration-amazonmq-configurations-datatable').bootstrapTable('append', [{
                        f2id: data.Arn,
                        f2type: 'amazonmq.configuration',
                        f2data: data,
                        f2region: region,
                        name: data.Name,
                        id: data.Id,
                        engineversion: data.EngineVersion,
                        description: data.Description
                    }]);
                }).catch(() => { });
            });
        }));

        unblockUI('#section-applicationintegration-amazonmq-configurations-datatable');
    });
}
