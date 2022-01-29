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
        },
        'Connectors': {
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
                        field: 'description',
                        title: 'Description',
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

async function updateDatatableAnalyticsMSK() {
    blockUI('#section-analytics-msk-clusters-datatable');
    blockUI('#section-analytics-msk-connectors-datatable');

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

    await sdkcall("KafkaConnect", "listConnectors", {
        // no params
    }, false).then(async (data) => {
        $('#section-analytics-msk-connectors-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.connectors.map(connector => {
            return sdkcall("KafkaConnect", "describeConnector", {
                connectorArn: connector.connectorArn
            }, true).then(async (data) => {
                $('#section-analytics-msk-connectors-datatable').deferredBootstrapTable('append', [{
                    f2id: data.connectorArn,
                    f2type: 'msk.connector',
                    f2data: data,
                    f2region: region,
                    name: data.connectorName,
                    description: data.connectorDescription
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-analytics-msk-clusters-datatable');
    unblockUI('#section-analytics-msk-connectors-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "msk.cluster") {
        reqParams.cfn['ClusterName'] = obj.data.ClusterName;
        reqParams.cfn['NumberOfBrokerNodes'] = obj.data.NumberOfBrokerNodes;
        reqParams.cfn['Tags'] = stripAWSTags(obj.data.Tags);
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
    } else if (obj.type == "msk.connector") {
        if (obj.data.capacity) {
            var autoscaling = null;
            if (obj.data.capacity.autoScaling) {
                var scaleinpolicy = null;
                if (obj.data.capacity.autoScaling.scaleInPolicy) {
                    scaleinpolicy = {
                        'CpuUtilizationPercentage': obj.data.capacity.autoScaling.scaleInPolicy.cpuUtilizationPercentage
                    };
                }
                var scaleoutpolicy = null;
                if (obj.data.capacity.autoScaling.scaleOutPolicy) {
                    scaleoutpolicy = {
                        'CpuUtilizationPercentage': obj.data.capacity.autoScaling.scaleOutPolicy.cpuUtilizationPercentage
                    };
                }
                autoscaling = {
                    'MaxWorkerCount': obj.data.capacity.autoScaling.maxWorkerCount,
                    'McuCount': obj.data.capacity.autoScaling.mcuCount,
                    'MinWorkerCount': obj.data.capacity.autoScaling.minWorkerCount,
                    'ScaleInPolicy': scaleinpolicy,
                    'ScaleOutPolicy': scaleoutpolicy
                };
            }
            var provisionedcapacity = null;
            if (obj.data.capacity.provisionedCapacity) {
                provisionedcapacity = {
                    'McuCount': obj.data.capacity.provisionedCapacity.mcuCount,
                    'WorkerCount': obj.data.capacity.provisionedCapacity.workerCount
                };
            }
            reqParams.cfn['Capacity'] = {
                'AutoScaling': autoscaling,
                'ProvisionedCapacity': provisionedcapacity
            };
        }
        reqParams.cfn['ConnectorConfiguration'] = obj.data.connectorConfiguration;
        reqParams.cfn['ConnectorDescription'] = obj.data.connectorDescription;
        reqParams.cfn['ConnectorName'] = obj.data.connectorName;
        if (obj.data.kafkaCluster && obj.data.kafkaCluster.apacheKafkaCluster) {
            var vpc = null;
            if (obj.data.kafkaCluster.apacheKafkaCluster.vpc) {
                vpc = {
                    'SecurityGroups': obj.data.kafkaCluster.apacheKafkaCluster.vpc.securityGroups,
                    'Subnets': obj.data.kafkaCluster.apacheKafkaCluster.vpc.subnets
                };
            }
            reqParams.cfn['KafkaCluster'] = {
                'ApacheKafkaCluster': {
                    'BootstrapServers': obj.data.kafkaCluster.apacheKafkaCluster.bootstrapServers,
                    'Vpc': vpc,
                }
            };
        }
        if (obj.data.kafkaClusterClientAuthentication) {
            reqParams.cfn['KafkaClusterClientAuthentication'] = {
                'AuthenticationType': obj.data.kafkaClusterClientAuthentication.authenticationType
            };
        }
        if (obj.data.kafkaClusterEncryptionInTransit) {
            reqParams.cfn['KafkaClusterEncryptionInTransit'] = {
                'EncryptionType': obj.data.kafkaClusterEncryptionInTransit.encryptionType
            };
        }
        reqParams.cfn['KafkaConnectVersion'] = obj.data.kafkaConnectVersion;
        if (obj.data.logDelivery && obj.data.kafkaCluster.workerLogDelivery) {
            var cloudwatchlogs = null;
            if (obj.data.logDelivery.workerLogDelivery.cloudWatchLogs) {
                cloudwatchlogs = {
                    'Enabled': obj.data.logDelivery.workerLogDelivery.cloudWatchLogs.enabled,
                    'LogGroup': obj.data.logDelivery.workerLogDelivery.cloudWatchLogs.logGroup
                };
            }
            var firehose = null;
            if (obj.data.logDelivery.workerLogDelivery.firehose) {
                firehose = {
                    'Enabled': obj.data.logDelivery.workerLogDelivery.firehose.enabled,
                    'DeliveryStream': obj.data.logDelivery.workerLogDelivery.firehose.deliveryStream
                };
            }
            var s3 = null;
            if (obj.data.logDelivery.workerLogDelivery.s3) {
                s3 = {
                    'Enabled': obj.data.logDelivery.workerLogDelivery.s3.enabled,
                    'Bucket': obj.data.logDelivery.workerLogDelivery.s3.bucket,
                    'Prefix': obj.data.logDelivery.workerLogDelivery.s3.prefix
                };
            }
            reqParams.cfn['LogDelivery'] = {
                'WorkerLogDelivery': {
                    'CloudWatchLogs': cloudwatchlogs,
                    'Firehose': firehose,
                    'S3': s3
                }
            };
        }
        if (obj.data.plugins) {
            reqParams.cfn['Plugins'] = [];
            obj.data.plugins.forEach(plugin => {
                if (plugin.customPlugin) {
                    reqParams.cfn['Plugins'].push({
                        'CustomPlugin': {
                            'CustomPluginArn': plugin.customPlugin.customPluginArn,
                            'Revision': plugin.customPlugin.revision
                        }
                    });
                }
            });
        }
        reqParams.cfn['ServiceExecutionRoleArn'] = obj.data.serviceExecutionRoleArn;
        if (obj.data.workerConfiguration) {
            reqParams.cfn['WorkerConfiguration'] = {
                'WorkerConfigurationArn': obj.data.workerConfiguration.workerConfigurationArn,
                'Revision': obj.data.workerConfiguration.revision
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('msk', obj.id, 'AWS::KafkaConnect::Connector'),
            'region': obj.region,
            'service': 'msk',
            'type': 'AWS::KafkaConnect::Connector',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'ConnectorArn': obj.data.connectorArn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
