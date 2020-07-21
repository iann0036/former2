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
        $('#section-analytics-msk-clusters-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ClusterInfoList.map(cluster => {
            return sdkcall("Kafka", "describeCluster", {
                ClusterArn: cluster.ClusterArn
            }, true).then(async (data) => {
                $('#section-analytics-msk-clusters-datatable').deferredBootstrapTable('append', [{
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
    if (obj.type == "msk.cluster") {
        reqParams.cfn['ClusterName'] = obj.data.ClusterName;
        reqParams.cfn['NumberOfBrokerNodes'] = obj.data.NumberOfBrokerNodes;
        reqParams.cfn['Tags'] = obj.data.Tags;
        reqParams.cfn['EnhancedMonitoring'] = obj.data.EnhancedMonitoring;
        reqParams.cfn['EncryptionInfo'] = obj.data.EncryptionInfo;
        if (obj.data.CurrentBrokerSoftwareInfo) {
            reqParams.cfn['KafkaVersion'] = obj.data.CurrentBrokerSoftwareInfo.KafkaVersion;
            reqParams.cfn['ConfigurationInfo'] = {
                'Arn': obj.data.CurrentBrokerSoftwareInfo.ConfigurationArn,
                'Revision': obj.data.CurrentBrokerSoftwareInfo.ConfigurationRevision
            };
        }
        reqParams.cfn['ClientAuthentication'] = obj.data.ClientAuthentication;
        if (obj.data.BrokerNodeGroupInfo) {
            var storageinfo = null;
            if (obj.data.BrokerNodeGroupInfo.StorageInfo) {
                storageinfo = {
                    'EBSStorageInfo': obj.data.BrokerNodeGroupInfo.StorageInfo.EbsStorageInfo
                };
            }
            reqParams.cfn['BrokerNodeGroupInfo'] = {
                'BrokerAZDistribution': obj.data.BrokerNodeGroupInfo.BrokerAZDistribution,
                'ClientSubnets': obj.data.BrokerNodeGroupInfo.ClientSubnets,
                'InstanceType': obj.data.BrokerNodeGroupInfo.InstanceType,
                'SecurityGroups': obj.data.BrokerNodeGroupInfo.SecurityGroups,
                'StorageInfo': storageinfo,
            };
        }
        reqParams.cfn['OpenMonitoring'] = obj.data.OpenMonitoring;
        reqParams.cfn['LoggingInfo'] = obj.data.LoggingInfo;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('msk', obj.id, 'AWS::MSK::Cluster'),
            'region': obj.region,
            'service': 'msk',
            'type': 'AWS::MSK::Cluster',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ClusterArn
            }
        });
    } else {
        return false;
    }

    return true;
});
