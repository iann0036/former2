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
        $('#section-applicationintegration-amazonmq-brokers-datatable').deferredBootstrapTable('removeAll');
        $('#section-applicationintegration-amazonmq-configurationassociations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.BrokerSummaries.map(async (brokerSummary) => {
            return sdkcall("MQ", "describeBroker", {
                BrokerId: brokerSummary.BrokerId
            }, true).then(async (data) => {
                if (data.Configurations && data.Configurations.Current) {
                    $('#section-applicationintegration-amazonmq-brokers-datatable').deferredBootstrapTable('append', [{
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

                if (data.Users) {
                    var users = [];
                    await Promise.all(data.Users.map(async (user) => {
                        return sdkcall("MQ", "describeUser", {
                            BrokerId: data.BrokerId,
                            Username: user.Username
                        }, true).then(async (data) => {
                            users.push(data);
                        });
                    }));
                    data.Users = users;
                }

                $('#section-applicationintegration-amazonmq-brokers-datatable').deferredBootstrapTable('append', [{
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
        $('#section-applicationintegration-amazonmq-configurations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Configurations.map(configuration => {
            return sdkcall("MQ", "describeConfiguration", {
                ConfigurationId: configuration.Id
            }, true).then(async (data) => {
                await sdkcall("MQ", "describeConfigurationRevision", {
                    ConfigurationId: configuration.Id,
                    ConfigurationRevision: configuration.LatestRevision.Revision
                }, false).then((revisiondata) => {
                    data['Data'] = revisiondata.Data;

                    $('#section-applicationintegration-amazonmq-configurations-datatable').deferredBootstrapTable('append', [{
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

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "amazonmq.broker") {
        reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
        reqParams.cfn['BrokerName'] = obj.data.BrokerName;
        reqParams.cfn['DeploymentMode'] = obj.data.DeploymentMode;
        reqParams.cfn['EngineType'] = obj.data.EngineType;
        reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
        reqParams.cfn['HostInstanceType'] = obj.data.HostInstanceType;
        reqParams.cfn['PubliclyAccessible'] = obj.data.PubliclyAccessible;
        reqParams.cfn['StorageType'] = obj.data.StorageType;
        reqParams.cfn['AuthenticationStrategy'] = obj.data.AuthenticationStrategy;
        if (obj.data.Configurations && obj.data.Configurations.Current) {
            reqParams.cfn['Configuration'] = {
                'Id': obj.data.Configurations.Current.Id,
                'Revision': obj.data.Configurations.Current.Revision
            };
        }
        reqParams.cfn['MaintenanceWindowStartTime'] = obj.data.MaintenanceWindowStartTime;
        if (obj.data.Logs) {
            reqParams.cfn['Logs'] = {
                'Audit': obj.data.Logs.Audit,
                'General': obj.data.Logs.General
            };
        }
        reqParams.cfn['SecurityGroups'] = obj.data.SecurityGroups;
        reqParams.cfn['SubnetIds'] = obj.data.SubnetIds;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.Tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.Tags[tagKey]
                });
            });
        }
        if (obj.data.Users) {
            reqParams.cfn['Users'] = [];
            obj.data.Users.forEach(user => {
                reqParams.cfn['Users'].push({
                    'Username': user.Username,
                    'Password': 'REPLACEME',
                    'ConsoleAccess': user.ConsoleAccess,
                    'Groups': user.Groups
                });
            });
        }
        reqParams.cfn['EncryptionOptions'] = obj.data.EncryptionOptions;
        if (obj.data.LdapServerMetadata) {
            reqParams.cfn['LdapServerMetadata'] = {
                'Hosts': obj.data.LdapServerMetadata.Hosts,
                'RoleBase': obj.data.LdapServerMetadata.RoleBase,
                'RoleName': obj.data.LdapServerMetadata.RoleName,
                'RoleSearchMatching': obj.data.LdapServerMetadata.RoleSearchMatching,
                'RoleSearchSubtree': obj.data.LdapServerMetadata.RoleSearchSubtree,
                'ServiceAccountPassword': 'REPLACEME',
                'ServiceAccountUsername': obj.data.LdapServerMetadata.ServiceAccountUsername,
                'UserBase': obj.data.LdapServerMetadata.UserBase,
                'UserRoleName': obj.data.LdapServerMetadata.UserRoleName,
                'UserSearchMatching': obj.data.LdapServerMetadata.UserSearchMatching,
                'UserSearchSubtree': obj.data.LdapServerMetadata.UserSearchSubtree
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('amazonmq', obj.id, 'AWS::AmazonMQ::Broker'),
            'region': obj.region,
            'service': 'amazonmq',
            'type': 'AWS::AmazonMQ::Broker',
            'options': reqParams
        });
    } else if (obj.type == "amazonmq.configuration") {
        reqParams.cfn['Data'] = obj.data.Data;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['EngineType'] = obj.data.EngineType;
        reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
        reqParams.cfn['Name'] = obj.data.Name;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.Tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.Tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('amazonmq', obj.id, 'AWS::AmazonMQ::Configuration'),
            'region': obj.region,
            'service': 'amazonmq',
            'type': 'AWS::AmazonMQ::Configuration',
            'options': reqParams
        });
    } else if (obj.type == "amazonmq.configurationassociation") {
        reqParams.cfn['Broker'] = obj.data.Broker;
        reqParams.cfn['Configuration'] = {
            'Id': obj.data.Configuration.Id,
            'Revision': obj.data.Configuration.Revision
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('amazonmq', obj.id, 'AWS::AmazonMQ::ConfigurationAssociation'),
            'region': obj.region,
            'service': 'amazonmq',
            'type': 'AWS::AmazonMQ::ConfigurationAssociation',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
