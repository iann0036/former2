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
        $('#section-analytics-elasticsearch-domains-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DomainNames.map(async (domainName) => {
            return sdkcall("ES", "describeElasticsearchDomains", {
                DomainNames: [domainName.DomainName]
            }, true).then(async (data) => {
                data.DomainStatusList[0]['Tags'] = await getResourceTags(data.DomainStatusList[0].ARN);

                $('#section-analytics-elasticsearch-domains-datatable').deferredBootstrapTable('append', [{
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
    if (obj.type == "elasticsearch.domain") {
        reqParams.cfn['DomainName'] = obj.data.DomainName;
        reqParams.tf['domain_name'] = obj.data.DomainName;
        reqParams.cfn['ElasticsearchVersion'] = obj.data.ElasticsearchVersion;
        reqParams.tf['elasticsearch_version'] = obj.data.ElasticsearchVersion;
        if (obj.data.ElasticsearchClusterConfig) {
            reqParams.cfn['ElasticsearchClusterConfig'] = {
                'DedicatedMasterCount': obj.data.ElasticsearchClusterConfig.DedicatedMasterCount,
                'DedicatedMasterEnabled': obj.data.ElasticsearchClusterConfig.DedicatedMasterEnabled,
                'DedicatedMasterType': obj.data.ElasticsearchClusterConfig.DedicatedMasterType,
                'InstanceCount': obj.data.ElasticsearchClusterConfig.InstanceCount,
                'InstanceType': obj.data.ElasticsearchClusterConfig.InstanceType,
                'ZoneAwarenessEnabled': obj.data.ElasticsearchClusterConfig.ZoneAwarenessEnabled,
                'ZoneAwarenessConfig': obj.data.ElasticsearchClusterConfig.ZoneAwarenessConfig,
                'WarmEnabled': obj.data.ElasticsearchClusterConfig.WarmEnabled,
                'WarmType': obj.data.ElasticsearchClusterConfig.WarmType,
                'WarmCount': obj.data.ElasticsearchClusterConfig.WarmCount
            };
            reqParams.tf['cluster_config'] = {
                'dedicated_master_count': obj.data.ElasticsearchClusterConfig.DedicatedMasterCount,
                'dedicated_master_enabled': obj.data.ElasticsearchClusterConfig.DedicatedMasterEnabled,
                'dedicated_master_type': obj.data.ElasticsearchClusterConfig.DedicatedMasterType,
                'instance_count': obj.data.ElasticsearchClusterConfig.InstanceCount,
                'instance_type': obj.data.ElasticsearchClusterConfig.InstanceType,
                'zone_awareness_enabled': obj.data.ElasticsearchClusterConfig.ZoneAwarenessEnabled
            };
        }
        reqParams.cfn['AccessPolicies'] = obj.data.AccessPolicies;
        reqParams.tf['access_policies '] = obj.data.AccessPolicies;
        reqParams.cfn['SnapshotOptions'] = obj.data.SnapshotOptions;
        if (obj.data.SnapshotOptions) {
            reqParams.cfn['snapshot_options'] = {
                'automated_snapshot_start_hour': obj.data.SnapshotOptions.AutomatedSnapshotStartHour
            };
        }
        if (obj.data.VPCOptions) {
            reqParams.cfn['VPCOptions'] = {
                'SecurityGroupIds': obj.data.VPCOptions.SecurityGroupIds,
                'SubnetIds': obj.data.VPCOptions.SubnetIds
            };
            reqParams.tf['vpc_options'] = {
                'security_group_ids': obj.data.VPCOptions.SecurityGroupIds,
                'subnet_ids': obj.data.VPCOptions.SubnetIds
            };
        }
        reqParams.cfn['EncryptionAtRestOptions'] = obj.data.EncryptionAtRestOptions;
        if (obj.data.EncryptionAtRestOptions) {
            reqParams.tf['encrypt_at_rest'] = {
                'enabled': obj.data.EncryptionAtRestOptions.Enabled,
                'kms_key_id': obj.data.EncryptionAtRestOptions.KmsKeyId
            };
        }
        reqParams.cfn['NodeToNodeEncryptionOptions'] = obj.data.NodeToNodeEncryptionOptions;
        if (obj.data.NodeToNodeEncryptionOptions) {
            reqParams.tf['node_to_node_encryption'] = {
                'enabled': obj.data.NodeToNodeEncryptionOptions.Enabled
            };
        }
        reqParams.cfn['AdvancedOptions'] = obj.data.AdvancedOptions;
        reqParams.tf['advanced_options'] = obj.data.AdvancedOptions;
        reqParams.cfn['EBSOptions'] = obj.data.EBSOptions;
        if (obj.data.EBSOptions) {
            reqParams.tf['ebs_options'] = {
                'ebs_enabled': obj.data.EBSOptions.EBSEnabled,
                'volume_type': obj.data.EBSOptions.VolumeType,
                'volume_size': obj.data.EBSOptions.VolumeSize,
                'iops': obj.data.EBSOptions.Iops
            };
        }
        reqParams.cfn['CognitoOptions'] = obj.data.CognitoOptions;
        reqParams.cfn['LogPublishingOptions'] = obj.data.LogPublishingOptions;
        reqParams.cfn['DomainEndpointOptions'] = obj.data.DomainEndpointOptions;
        reqParams.cfn['AdvancedSecurityOptions'] = obj.data.AdvancedSecurityOptions;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elasticsearch', obj.id, 'AWS::Elasticsearch::Domain'),
            'region': obj.region,
            'service': 'elasticsearch',
            'type': 'AWS::Elasticsearch::Domain',
            'terraformType': 'aws_elasticsearch_domain',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.DomainName,
                'GetAtt': {
                    'Arn': obj.data.ARN,
                    'DomainArn': obj.data.ARN,
                    'DomainEndpoint': obj.data.Endpoint
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
