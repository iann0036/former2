/* ========================================================================== */
// Managed Blockchain
/* ========================================================================== */

sections.push({
    'category': 'Blockchain',
    'service': 'Managed Blockchain',
    'resourcetypes': {
        'Members': {
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
                        field: 'networkid',
                        title: 'Network ID',
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
        'Nodes': {
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
                        field: 'memberid',
                        title: 'Member ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'networkid',
                        title: 'Network ID',
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
                    },
                    {
                        field: 'availabilityzone',
                        title: 'Availability Zone',
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

async function updateDatatableBlockchainManagedBlockchain() {
    blockUI('#section-blockchain-managedblockchain-members-datatable');
    blockUI('#section-blockchain-managedblockchain-nodes-datatable');

    await sdkcall("ManagedBlockchain", "listNetworks", {
        // no params
    }, false).then(async (data) => {
        $('#section-blockchain-managedblockchain-members-datatable').deferredBootstrapTable('removeAll');
        $('#section-blockchain-managedblockchain-nodes-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Networks.map(async (network) => {
            return sdkcall("ManagedBlockchain", "getNetwork", {
                NetworkId: network.Id
            }, false).then(async (networkdetails) => {
                await sdkcall("ManagedBlockchain", "listMembers", {
                    NetworkId: network.Id
                }, false).then(async (data) => {
                    await Promise.all(data.Members.map(async (member) => {
                        return Promise.all([
                            sdkcall("ManagedBlockchain", "getMember", {
                                NetworkId: network.Id,
                                MemberId: member.Id
                            }, false).then(async (data) => {
                                data.Member['NetworkDetails'] = networkdetails.Network;

                                $('#section-blockchain-managedblockchain-members-datatable').deferredBootstrapTable('append', [{
                                    f2id: data.Member.Id,
                                    f2type: 'managedblockchain.member',
                                    f2data: data.Member,
                                    f2region: region,
                                    id: data.Member.Id,
                                    name: data.Member.Name,
                                    networkid: data.Member.NetworkId,
                                    description: data.Member.Description
                                }]);
                            }),
                            sdkcall("ManagedBlockchain", "listNodes", {
                                NetworkId: network.Id,
                                MemberId: member.Id
                            }, false).then(async (data) => {
                                await Promise.all(data.Nodes.map(async (node) => {
                                    return sdkcall("ManagedBlockchain", "getNode", {
                                        NetworkId: network.Id,
                                        MemberId: member.Id,
                                        NodeId: node.Id
                                    }, false).then(async (data) => {
                                        $('#section-blockchain-managedblockchain-nodes-datatable').deferredBootstrapTable('append', [{
                                            f2id: data.Node.Id,
                                            f2type: 'managedblockchain.node',
                                            f2data: data.Node,
                                            f2region: region,
                                            id: data.Node.Id,
                                            memberid: data.Node.MemberId,
                                            networkid: data.Node.NetworkId,
                                            instancetype: data.Node.InstanceType,
                                            availabilityzone: data.Node.AvailabilityZone
                                        }]);
                                    });
                                }));
                            })
                        ]);
                    }));
                });
            });
        }));

    }).catch(() => { });

    unblockUI('#section-blockchain-managedblockchain-members-datatable');
    unblockUI('#section-blockchain-managedblockchain-nodes-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "managedblockchain.node") {
        reqParams.cfn['MemberId'] = obj.data.MemberId;
        reqParams.cfn['NetworkId'] = obj.data.NetworkId;
        reqParams.cfn['NodeConfiguration'] = {
            'AvailabilityZone': obj.data.AvailabilityZone,
            'InstanceType': obj.data.InstanceType
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('managedblockchain', obj.id, 'AWS::ManagedBlockchain::Node'),
            'region': obj.region,
            'service': 'managedblockchain',
            'type': 'AWS::ManagedBlockchain::Node',
            'options': reqParams
        });
    } else if (obj.type == "managedblockchain.member") {
        reqParams.cfn['NetworkId'] = obj.data.NetworkId;
        var adminusername = 'REPLACEME';
        if (obj.data.FrameworkAttributes && obj.data.FrameworkAttributes.Fabric) {
            adminusername = obj.data.FrameworkAttributes.Fabric.AdminUsername;
        }
        reqParams.cfn['MemberConfiguration'] = {
            'Description': obj.data.Description,
            'MemberFrameworkConfiguration': {
                'MemberFabricConfiguration': {
                    'AdminUsername': adminusername,
                    'AdminPassword': 'REPLACEME'
                }
            },
            'Name': obj.data.Name
        };
        var networkframeworkconfiguration = null;
        if (obj.data.NetworkDetails.FrameworkAttributes && obj.data.NetworkDetails.FrameworkAttributes.Fabric) {
            networkframeworkconfiguration = {
                'NetworkFabricConfiguration': {
                    'Edition': obj.data.NetworkDetails.FrameworkAttributes.Fabric.Edition
                }
            };
        }
        reqParams.cfn['NetworkConfiguration'] = {
            'Description': obj.data.NetworkDetails.Description,
            'Framework': obj.data.NetworkDetails.Framework,
            'FrameworkVersion': obj.data.NetworkDetails.FrameworkVersion,
            'Name': obj.data.NetworkDetails.Name,
            'NetworkFrameworkConfiguration': networkframeworkconfiguration,
            'VotingPolicy': obj.data.NetworkDetails.VotingPolicy
        };

        /*
        TODO
        InvitationId: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('managedblockchain', obj.id, 'AWS::ManagedBlockchain::Member'),
            'region': obj.region,
            'service': 'managedblockchain',
            'type': 'AWS::ManagedBlockchain::Member',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
