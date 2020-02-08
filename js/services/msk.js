/* ========================================================================== */
// MSK
/* ========================================================================== */

sections.push({
    'category': 'Analytics',
    'service': 'MSK',
    'resourcetypes': {
        'Clusters': {
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
                        field: 'numberofbrokernodes',
                        title: 'Number of Broker Nodes',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
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

async function updateDatatableAnalyticsMSK() {
    blockUI('#section-analytics-msk-clusters-datatable');

    await sdkcall("Kafka", "listClusters", {
        // no params
    }, false).then(async (data) => {
        $('#section-analytics-msk-clusters-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ClusterInfoList.map(cluster => {
            return sdkcall("Kafka", "describeCluster", {
                ClusterArn: cluster.ClusterArn
            }, true).then(async (data) => {
                $('#section-analytics-msk-clusters-datatable').bootstrapTable('append', [{
                    f2id: data.ClusterInfo.ClusterArn,
                    f2type: 'msk.cluster',
                    f2data: data.ClusterInfo,
                    f2region: region,
                    name: data.ClusterInfo.ClusterName,
                    numberofbrokernodes: data.ClusterInfo.NumberOfBrokerNodes,
                    creationtime: data.ClusterInfo.CreationTime
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-analytics-msk-clusters-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
