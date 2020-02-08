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
        $('#section-managementandgovernance-opsworks-stacks-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-opsworks-layers-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-opsworks-apps-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-opsworks-elbattachments-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-opsworks-instances-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-opsworks-volumes-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Stacks.map(stack => {
            $('#section-managementandgovernance-opsworks-stacks-datatable').bootstrapTable('append', [{
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
                        $('#section-managementandgovernance-opsworks-layers-datatable').bootstrapTable('append', [{
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
                        $('#section-managementandgovernance-opsworks-apps-datatable').bootstrapTable('append', [{
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
                        $('#section-managementandgovernance-opsworks-elbattachments-datatable').bootstrapTable('append', [{
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
                        $('#section-managementandgovernance-opsworks-instances-datatable').bootstrapTable('append', [{
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
                                $('#section-managementandgovernance-opsworks-volumes-datatable').bootstrapTable('append', [{
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
        $('#section-managementandgovernance-opsworks-userprofiles-datatable').bootstrapTable('removeAll');

        data.UserProfiles.forEach(userProfile => {
            $('#section-managementandgovernance-opsworks-userprofiles-datatable').bootstrapTable('append', [{
                f2id: userProfile.IamUserArn,
                f2type: 'opsworks.userprofile',
                f2data: userProfile,
                f2region: region,
                iamuserarn: userProfile.IamUserArn,
                name: userProfile.Name,
                sshusername: userProfile.SshUsername
            }]);
        });

        unblockUI('#section-managementandgovernance-opsworks-userprofiles-datatable');
    });

    await sdkcall("OpsWorksCM", "describeServers", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-opsworks-configurationmanagementservers-datatable').bootstrapTable('removeAll');

        data.Servers.forEach(server => {
            $('#section-managementandgovernance-opsworks-configurationmanagementservers-datatable').bootstrapTable('append', [{
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
