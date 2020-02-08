/* ========================================================================== */
// Elasticsearch
/* ========================================================================== */

sections.push({
    'category': 'Analytics',
    'service': 'Elasticsearch',
    'resourcetypes': {
        'Domains': {
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
                        field: 'endpoint',
                        title: 'Endpoint',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'elasticsearchversion',
                        title: 'Elasticsearch Version',
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

async function updateDatatableAnalyticsElasticsearch() {
    blockUI('#section-analytics-elasticsearch-domains-datatable');

    await sdkcall("ES", "listDomainNames", {
        // no params
    }, true).then(async (data) => {
        $('#section-analytics-elasticsearch-domains-datatable').bootstrapTable('removeAll');

        await Promise.all(data.DomainNames.map(domainName => {
            return sdkcall("ES", "describeElasticsearchDomains", {
                DomainNames: [domainName.DomainName]
            }, true).then((data) => {
                $('#section-analytics-elasticsearch-domains-datatable').bootstrapTable('append', [{
                    f2id: data.DomainStatusList[0].ARN,
                    f2type: 'elasticsearch.domain',
                    f2data: data.DomainStatusList[0],
                    f2region: region,
                    f2link: 'https://console.aws.amazon.com/es/home#domain:resource=' + data.DomainStatusList[0].DomainId,
                    name: data.DomainStatusList[0].DomainName,
                    id: data.DomainStatusList[0].DomainId,
                    endpoint: data.DomainStatusList[0].Endpoint,
                    elasticsearchversion: data.DomainStatusList[0].ElasticsearchVersion
                }]);
            });
        }));

        unblockUI('#section-analytics-elasticsearch-domains-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
