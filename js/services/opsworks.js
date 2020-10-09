/* ========================================================================== */
// OpsWorks
/* ========================================================================== */

sections.push({
    'category': 'Management &amp; Governance',
    'service': 'OpsWorks',
    'resourcetypes': {
        'Stacks': {
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
                        title: 'ID',
                        field: 'id',
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
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'vpcid',
                        title: 'VPC ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'region',
                        title: 'Region',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Apps': {
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
                        field: 'stackid',
                        title: 'Stack ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'name',
                        title: 'Name',
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
        'Layers': {
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
                        title: 'Layer ID',
                        field: 'layerid',
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
                        field: 'stackid',
                        title: 'Stack ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'shortname',
                        title: 'Short Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'ELB Attachments': {
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
                        field: 'stackid',
                        title: 'Stack ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'layerid',
                        title: 'Layer ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'vpcid',
                        title: 'VPC ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'dnsname',
                        title: 'DNS Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Instances': {
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
                        title: 'Instance ID',
                        field: 'instanceid',
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
                        field: 'stackid',
                        title: 'Stack ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'availabilityzone',
                        title: 'Availability Zone',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'ec2instanceid',
                        title: 'EC2 Instance ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'hostname',
                        title: 'Hostname',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Volumes': {
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
                        title: 'ID',
                        field: 'id',
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
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'stackid',
                        title: 'Stack ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'instanceid',
                        title: 'Instance ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'size',
                        title: 'Size',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'User Profiles': {
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
                        field: 'iamuserarn',
                        title: 'IAM User ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'sshusername',
                        title: 'SSH Username',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Configuration Management Servers': {
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
                        title: 'ARN',
                        field: 'arn',
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
                        field: 'servername',
                        title: 'Server Name',
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
                        field: 'engine',
                        title: 'Engine',
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
        }
    }
});

async function updateDatatableManagementAndGovernanceOpsWorks() {
    blockUI('#section-managementandgovernance-opsworks-stacks-datatable');
    blockUI('#section-managementandgovernance-opsworks-apps-datatable');
    blockUI('#section-managementandgovernance-opsworks-layers-datatable');
    blockUI('#section-managementandgovernance-opsworks-elbattachments-datatable');
    blockUI('#section-managementandgovernance-opsworks-instances-datatable');
    blockUI('#section-managementandgovernance-opsworks-volumes-datatable');
    blockUI('#section-managementandgovernance-opsworks-userprofiles-datatable');
    blockUI('#section-managementandgovernance-opsworks-configurationmanagementservers-datatable');

    await sdkcall("OpsWorks", "describeStacks", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-opsworks-stacks-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-opsworks-layers-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-opsworks-apps-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-opsworks-elbattachments-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-opsworks-instances-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-opsworks-volumes-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Stacks.map(stack => {
            $('#section-managementandgovernance-opsworks-stacks-datatable').deferredBootstrapTable('append', [{
                f2id: stack.Arn,
                f2type: 'opsworks.stack',
                f2data: stack,
                f2region: region,
                id: stack.StackId,
                name: stack.Name,
                vpcid: stack.VpcId,
                region: stack.Region
            }]);

            return Promise.all([
                sdkcall("OpsWorks", "describeLayers", {
                    StackId: stack.StackId
                }, true).then((data) => {
                    data.Layers.forEach(layer => {
                        $('#section-managementandgovernance-opsworks-layers-datatable').deferredBootstrapTable('append', [{
                            f2id: layer.Arn,
                            f2type: 'opsworks.layer',
                            f2data: layer,
                            f2region: region,
                            layerid: layer.LayerId,
                            stackid: stack.StackId,
                            type: layer.Type,
                            name: layer.Name,
                            shortname: layer.Shortname
                        }]);
                    });
                }),
                sdkcall("OpsWorks", "describeApps", {
                    StackId: stack.StackId
                }, true).then((data) => {
                    data.Apps.forEach(app => {
                        $('#section-managementandgovernance-opsworks-apps-datatable').deferredBootstrapTable('append', [{
                            f2id: app.AppId,
                            f2type: 'opsworks.app',
                            f2data: app,
                            f2region: region,
                            name: app.Name,
                            stackid: stack.StackId,
                            type: app.Type,
                            name: app.Name,
                            description: app.Description
                        }]);
                    });
                }),
                sdkcall("OpsWorks", "describeElasticLoadBalancers", {
                    StackId: stack.StackId
                }, true).then((data) => {
                    data.ElasticLoadBalancers.forEach(elbAttachment => {
                        $('#section-managementandgovernance-opsworks-elbattachments-datatable').deferredBootstrapTable('append', [{
                            f2id: elbAttachment.ElasticLoadBalancerName,
                            f2type: 'opsworks.elbattachment',
                            f2data: elbAttachment,
                            f2region: region,
                            name: elbAttachment.ElasticLoadBalancerName,
                            stackid: stack.StackId,
                            layerid: stack.LayerId,
                            vpcid: stack.VpcId,
                            dnsname: stack.DnsName
                        }]);
                    });
                }),
                sdkcall("OpsWorks", "describeInstances", {
                    StackId: stack.StackId
                }, true).then(async (data) => {
                    await Promise.all(data.Instances.map(instance => {
                        $('#section-managementandgovernance-opsworks-instances-datatable').deferredBootstrapTable('append', [{
                            f2id: instance.Arn,
                            f2type: 'opsworks.instance',
                            f2data: instance,
                            f2region: region,
                            instanceid: instance.InstanceId,
                            stackid: stack.StackId,
                            availabilityzone: stack.AvailabilityZone,
                            ec2instanceid: stack.Ec2InstanceId,
                            hostname: stack.Hostname
                        }]);

                        return sdkcall("OpsWorks", "describeVolumes", {
                            StackId: stack.StackId,
                            InstanceId: instance.InstanceId
                        }, true).then((data) => {
                            data.Volumes.forEach(volume => {
                                volume['StackId'] = stack.StackId;
                                $('#section-managementandgovernance-opsworks-volumes-datatable').deferredBootstrapTable('append', [{
                                    f2id: volume.VolumeId,
                                    f2type: 'opsworks.volume',
                                    f2data: volume,
                                    f2region: region,
                                    id: volume.VolumeId,
                                    stackid: stack.StackId,
                                    instanceid: instance.InstanceId,
                                    name: instance.Name,
                                    size: instance.Size
                                }]);
                            });
                        });
                    }));
                })
            ]);
        }));

        unblockUI('#section-managementandgovernance-opsworks-stacks-datatable');
        unblockUI('#section-managementandgovernance-opsworks-layers-datatable');
        unblockUI('#section-managementandgovernance-opsworks-apps-datatable');
        unblockUI('#section-managementandgovernance-opsworks-elbattachments-datatable');
        unblockUI('#section-managementandgovernance-opsworks-instances-datatable');
        unblockUI('#section-managementandgovernance-opsworks-volumes-datatable');
    });

    await sdkcall("OpsWorks", "describeUserProfiles", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-opsworks-userprofiles-datatable').deferredBootstrapTable('removeAll');

        data.UserProfiles.forEach(userProfile => {
            if (userProfile.Name != "root" || !userProfile.IamUserArn.endsWith(":root")) {
                $('#section-managementandgovernance-opsworks-userprofiles-datatable').deferredBootstrapTable('append', [{
                    f2id: userProfile.IamUserArn,
                    f2type: 'opsworks.userprofile',
                    f2data: userProfile,
                    f2region: region,
                    iamuserarn: userProfile.IamUserArn,
                    name: userProfile.Name,
                    sshusername: userProfile.SshUsername
                }]);
            }
        });

        unblockUI('#section-managementandgovernance-opsworks-userprofiles-datatable');
    });

    await sdkcall("OpsWorksCM", "describeServers", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-opsworks-configurationmanagementservers-datatable').deferredBootstrapTable('removeAll');

        data.Servers.forEach(server => {
            $('#section-managementandgovernance-opsworks-configurationmanagementservers-datatable').deferredBootstrapTable('append', [{
                f2id: server.ServerArn,
                f2type: 'opsworks.configurationmanagementserver',
                f2data: server,
                f2region: region,
                arn: server.ServerArn,
                servername: server.ServerName,
                endpoint: server.Endpoint,
                engine: server.Engine,
                instancetype: server.InstanceType
            }]);
        });

        unblockUI('#section-managementandgovernance-opsworks-configurationmanagementservers-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "opsworks.stack") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.tf['region'] = obj.data.Region;
        reqParams.cfn['VpcId'] = obj.data.VpcId;
        reqParams.tf['vpc_id'] = obj.data.VpcId;
        reqParams.cfn['ServiceRoleArn'] = obj.data.ServiceRoleArn;
        reqParams.tf['service_role_arn'] = obj.data.ServiceRoleArn;
        reqParams.cfn['DefaultInstanceProfileArn'] = obj.data.DefaultInstanceProfileArn;
        reqParams.tf['default_instance_profile_arn'] = obj.data.DefaultInstanceProfileArn;
        reqParams.cfn['DefaultOs'] = obj.data.DefaultOs;
        reqParams.tf['default_os'] = obj.data.DefaultOs;
        reqParams.cfn['HostnameTheme'] = obj.data.HostnameTheme;
        reqParams.tf['hostname_theme'] = obj.data.HostnameTheme;
        reqParams.cfn['DefaultAvailabilityZone'] = obj.data.DefaultAvailabilityZone;
        reqParams.tf['default_availability_zone'] = obj.data.DefaultAvailabilityZone;
        reqParams.cfn['DefaultSubnetId'] = obj.data.DefaultSubnetId;
        reqParams.tf['default_subnet_id'] = obj.data.DefaultSubnetId;
        reqParams.cfn['CustomJson'] = obj.data.CustomJson;
        reqParams.tf['custom_json'] = obj.data.CustomJson;
        reqParams.cfn['ConfigurationManager'] = obj.data.ConfigurationManager;
        if (obj.data.ConfigurationManager) {
            reqParams.tf['configuration_manager_name'] = obj.data.ConfigurationManager.Name;
            reqParams.tf['configuration_manager_version'] = obj.data.ConfigurationManager.Version;
        }
        reqParams.cfn['ChefConfiguration'] = obj.data.ChefConfiguration;
        if (obj.data.ChefConfiguration) {
            reqParams.tf['berkshelf_version'] = obj.data.ChefConfiguration.BerkshelfVersion;
            reqParams.tf['manage_berkshelf'] = obj.data.ChefConfiguration.ManageBerkshelf;
        }
        reqParams.cfn['UseCustomCookbooks'] = obj.data.UseCustomCookbooks;
        reqParams.tf['use_custom_cookbooks'] = obj.data.UseCustomCookbooks;
        reqParams.cfn['UseOpsworksSecurityGroups'] = obj.data.UseOpsworksSecurityGroups;
        reqParams.tf['use_opsworks_security_groups'] = obj.data.UseOpsworksSecurityGroups;
        reqParams.cfn['CustomCookbooksSource'] = obj.data.CustomCookbooksSource;
        if (obj.data.CustomCookbooksSource) {
            reqParams.tf['custom_cookbooks_source'] = {
                'type': obj.data.CustomCookbooksSource.Type,
                'url': obj.data.CustomCookbooksSource.Url,
                'username': obj.data.CustomCookbooksSource.Username,
                'password': obj.data.CustomCookbooksSource.Password,
                'ssh_key': obj.data.CustomCookbooksSource.SshKey,
                'revision': obj.data.CustomCookbooksSource.Revision
            };
        }
        reqParams.cfn['DefaultSshKeyName'] = obj.data.DefaultSshKeyName;
        reqParams.tf['default_ssh_key_name'] = obj.data.DefaultSshKeyName;
        reqParams.cfn['DefaultRootDeviceType'] = obj.data.DefaultRootDeviceType;
        reqParams.tf['default_root_device_type'] = obj.data.DefaultRootDeviceType;
        reqParams.cfn['AgentVersion'] = obj.data.AgentVersion;
        reqParams.tf['agent_version'] = obj.data.AgentVersion;
        reqParams.cfn['Attributes'] = obj.data.Attributes;

        /*
        TODO:
        CloneAppIds: 
        - String
        ClonePermissions: Boolean
        EcsClusterArn: String
        ElasticIps: 
        - ElasticIp
        RdsDbInstances: 
        - RdsDbInstance
        SourceStackId: String
        Tags: 
        - Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('opsworks', obj.id, 'AWS::OpsWorks::Stack'),
            'region': obj.region,
            'service': 'opsworks',
            'type': 'AWS::OpsWorks::Stack',
            'terraformType': 'aws_opsworks_stack',
            'options': reqParams
        });
    } else if (obj.type == "opsworks.app") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['Shortname'] = obj.data.Shortname;
        reqParams.tf['short_name'] = obj.data.Shortname;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['DataSources'] = obj.data.DataSources;
        if (obj.data.DataSources) { // TODO: more than one?
            reqParams.tf['data_source_type'] = obj.data.DataSources[0].Type;
            reqParams.tf['data_source_arn'] = obj.data.DataSources[0].Arn;
            reqParams.tf['data_source_database_name'] = obj.data.DataSources[0].DatabaseName;
        }
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.tf['type'] = obj.data.Type;
        reqParams.cfn['StackId'] = obj.data.StackId;
        reqParams.tf['stack_id'] = obj.data.StackId;
        reqParams.cfn['AppSource'] = obj.data.AppSource;
        if (obj.data.AppSource) {
            reqParams.tf['app_source'] = {
                'type': obj.data.AppSource.Type,
                'url': obj.data.AppSource.Url,
                'username': obj.data.AppSource.Username,
                'password': obj.data.AppSource.Password,
                'ssh_key': obj.data.AppSource.SshKey,
                'revision': obj.data.AppSource.Revision
            };
        }
        reqParams.cfn['Domains'] = obj.data.Domains;
        reqParams.tf['domains'] = obj.data.Domains;
        reqParams.cfn['EnableSsl'] = obj.data.EnableSsl;
        reqParams.tf['enable_ssl'] = obj.data.EnableSsl;
        reqParams.cfn['SslConfiguration'] = obj.data.SslConfiguration;
        if (obj.data.SslConfiguration) {
            reqParams.tf['ssl_configuration'] = {
                'private_key': obj.data.SslConfiguration.PrivateKey,
                'certificate': obj.data.SslConfiguration.Certificate,
                'chain': obj.data.SslConfiguration.Chain
            };
        }
        reqParams.cfn['Attributes'] = obj.data.Attributes;
        reqParams.cfn['Environment'] = obj.data.Environment;
        if (obj.data.Environment) {
            reqParams.tf['environment'] = [];
            obj.data.Environment.forEach(environment => {
                reqParams.tf['environment'].push({
                    'key': environment.Key,
                    'value': environment.Value,
                    'secure': environment.Secure
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('opsworks', obj.id, 'AWS::OpsWorks::App'),
            'region': obj.region,
            'service': 'opsworks',
            'type': 'AWS::OpsWorks::App',
            'terraformType': 'aws_opsworks_application',
            'options': reqParams
        });
    } else if (obj.type == "opsworks.layer") {
        reqParams.cfn['StackId'] = obj.data.StackId;
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Shortname'] = obj.data.Shortname;
        reqParams.cfn['Attributes'] = obj.data.Attributes;
        reqParams.cfn['CustomInstanceProfileArn'] = obj.data.CustomInstanceProfileArn;
        reqParams.cfn['CustomJson'] = obj.data.CustomJson;
        reqParams.cfn['CustomSecurityGroupIds'] = obj.data.CustomSecurityGroupIds;
        reqParams.cfn['Packages'] = obj.data.Packages;
        reqParams.cfn['VolumeConfigurations'] = obj.data.VolumeConfigurations;
        reqParams.cfn['EnableAutoHealing'] = obj.data.EnableAutoHealing;
        reqParams.cfn['AutoAssignElasticIps'] = obj.data.AutoAssignElasticIps;
        reqParams.cfn['AutoAssignPublicIps'] = obj.data.AutoAssignPublicIps;
        reqParams.cfn['CustomRecipes'] = obj.data.CustomRecipes;
        reqParams.cfn['InstallUpdatesOnBoot'] = obj.data.InstallUpdatesOnBoot;
        if (obj.data.LifecycleEventConfiguration && obj.data.LifecycleEventConfiguration.Shutdown) {
            reqParams.cfn['LifecycleEventConfiguration'] = {
                'ShutdownEventConfiguration': obj.data.LifecycleEventConfiguration.Shutdown
            };
        }

        /*
        TODO:
        LifecycleEventConfiguration:
            LifeCycleEventConfiguration
        LoadBasedAutoScaling:
            LoadBasedAutoScaling
        Tags: 
        - Tags 
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('opsworks', obj.id, 'AWS::OpsWorks::Layer'),
            'region': obj.region,
            'service': 'opsworks',
            'type': 'AWS::OpsWorks::Layer',
            'options': reqParams
        });
    } else if (obj.type == "opsworks.elbattachment") {
        reqParams.cfn['ElasticLoadBalancerName'] = obj.data.ElasticLoadBalancerName;
        reqParams.cfn['LayerId'] = obj.data.LayerId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('opsworks', obj.id, 'AWS::OpsWorks::ElasticLoadBalancerAttachment'),
            'region': obj.region,
            'service': 'opsworks',
            'type': 'AWS::OpsWorks::ElasticLoadBalancerAttachment',
            'options': reqParams
        });
    } else if (obj.type == "opsworks.instance") {
        reqParams.cfn['AgentVersion'] = obj.data.AgentVersion;
        reqParams.tf['agent_version'] = obj.data.AgentVersion;
        reqParams.cfn['AmiId'] = obj.data.AmiId;
        reqParams.tf['ami_id'] = obj.data.AmiId;
        reqParams.cfn['Architecture'] = obj.data.Architecture;
        reqParams.tf['architecture'] = obj.data.Architecture;
        reqParams.cfn['AutoScalingType'] = obj.data.AutoScalingType;
        reqParams.tf['auto_scaling_type'] = obj.data.AutoScalingType;
        reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
        reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;
        reqParams.cfn['BlockDeviceMappings'] = obj.data.BlockDeviceMappings;
        //reqParams.tf[''] = obj.data.BlockDeviceMappings; TODO
        reqParams.cfn['EbsOptimized'] = obj.data.EbsOptimized;
        reqParams.tf['ebs_optimized'] = obj.data.EbsOptimized;
        if (obj.data.ElasticIp) {
            reqParams.cfn['ElasticIps'] = [obj.data.ElasticIp];
            reqParams.tf['ElasticIps'] = [obj.data.ElasticIp];
        }
        reqParams.cfn['Hostname'] = obj.data.Hostname;
        reqParams.tf['hostname'] = obj.data.Hostname;
        reqParams.cfn['InstallUpdatesOnBoot'] = obj.data.InstallUpdatesOnBoot;
        reqParams.tf['install_updates_on_boot'] = obj.data.InstallUpdatesOnBoot;
        reqParams.cfn['InstanceType'] = obj.data.InstanceType;
        reqParams.tf['instance_type'] = obj.data.InstanceType;
        reqParams.cfn['LayerIds'] = obj.data.LayerIds;
        reqParams.tf['layer_ids'] = obj.data.LayerIds;
        reqParams.cfn['Os'] = obj.data.Os;
        reqParams.tf['os'] = obj.data.Os;
        reqParams.cfn['RootDeviceType'] = obj.data.RootDeviceType;
        reqParams.tf['root_device_type'] = obj.data.RootDeviceType;
        reqParams.cfn['SshKeyName'] = obj.data.SshKeyName;
        reqParams.tf['ssh_key_name'] = obj.data.SshKeyName;
        reqParams.cfn['StackId'] = obj.data.StackId;
        reqParams.tf['stack_id'] = obj.data.StackId;
        reqParams.cfn['SubnetId'] = obj.data.SubnetId;
        reqParams.tf['subnet_id'] = obj.data.SubnetId;
        reqParams.cfn['Tenancy'] = obj.data.Tenancy;
        reqParams.tf['tenancy'] = obj.data.Tenancy;
        reqParams.cfn['VirtualizationType'] = obj.data.VirtualizationType;
        reqParams.tf['virtualization_type'] = obj.data.VirtualizationType;

        /*
        TODO:
        TimeBasedAutoScaling:
            TimeBasedAutoScaling
        Volumes: 
        - String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('opsworks', obj.id, 'AWS::OpsWorks::Instance'),
            'region': obj.region,
            'service': 'opsworks',
            'type': 'AWS::OpsWorks::Instance',
            'terraformType': 'aws_opsworks_instance',
            'options': reqParams
        });
    } else if (obj.type == "opsworks.volume") {
        reqParams.cfn['Ec2VolumeId'] = obj.data.Ec2VolumeId;
        reqParams.cfn['MountPoint'] = obj.data.MountPoint;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['StackId'] = obj.data.StackId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('opsworks', obj.id, 'AWS::OpsWorks::Volume'),
            'region': obj.region,
            'service': 'opsworks',
            'type': 'AWS::OpsWorks::Volume',
            'options': reqParams
        });
    } else if (obj.type == "opsworks.userprofile") {
        reqParams.cfn['AllowSelfManagement'] = obj.data.AllowSelfManagement;
        reqParams.tf['allow_self_management'] = obj.data.AllowSelfManagement;
        reqParams.cfn['IamUserArn'] = obj.data.IamUserArn;
        reqParams.tf['user_arn'] = obj.data.IamUserArn;
        reqParams.cfn['SshPublicKey'] = obj.data.SshPublicKey;
        reqParams.tf['ssh_public_key'] = obj.data.SshPublicKey;
        reqParams.cfn['SshUsername'] = obj.data.SshUsername;
        reqParams.tf['ssh_username'] = obj.data.SshUsername;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('opsworks', obj.id, 'AWS::OpsWorks::UserProfile'),
            'region': obj.region,
            'service': 'opsworks',
            'type': 'AWS::OpsWorks::UserProfile',
            'terraformType': 'aws_opsworks_user_profile',
            'options': reqParams
        });
    } else if (obj.type == "opsworks.configurationmanagementserver") {
        reqParams.cfn['AssociatePublicIpAddress'] = obj.data.AssociatePublicIpAddress;
        reqParams.cfn['BackupRetentionCount'] = obj.data.BackupRetentionCount;
        reqParams.cfn['ServerName'] = obj.data.ServerName;
        reqParams.cfn['DisableAutomatedBackup'] = obj.data.DisableAutomatedBackup;
        reqParams.cfn['Engine'] = obj.data.Engine;
        reqParams.cfn['EngineModel'] = obj.data.EngineModel;
        reqParams.cfn['EngineAttributes'] = obj.data.EngineAttributes;
        reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
        reqParams.cfn['InstanceProfileArn'] = obj.data.InstanceProfileArn;
        reqParams.cfn['InstanceType'] = obj.data.InstanceType;
        reqParams.cfn['KeyPair'] = obj.data.KeyPair;
        reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
        reqParams.cfn['PreferredBackupWindow'] = obj.data.PreferredBackupWindow;
        reqParams.cfn['SecurityGroupIds'] = obj.data.SecurityGroupIds;
        reqParams.cfn['ServiceRoleArn'] = obj.data.ServiceRoleArn;
        reqParams.cfn['SubnetIds'] = obj.data.SubnetIds;
        reqParams.cfn['CustomDomain'] = obj.data.CustomDomain;
        reqParams.cfn['ServerName'] = obj.data.ServerName;

        /*
        TODO:
        BackupId: String
        CustomCertificate: String
        CustomPrivateKey: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('opsworks', obj.id, 'AWS::OpsWorksCM::Server'),
            'region': obj.region,
            'service': 'opsworks',
            'type': 'AWS::OpsWorksCM::Server',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
