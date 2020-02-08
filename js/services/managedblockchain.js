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
        $('#section-blockchain-managedblockchain-members-datatable').bootstrapTable('removeAll');
        $('#section-blockchain-managedblockchain-nodes-datatable').bootstrapTable('removeAll');

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

                                $('#section-blockchain-managedblockchain-members-datatable').bootstrapTable('append', [{
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
                                        $('#section-blockchain-managedblockchain-nodes-datatable').bootstrapTable('append', [{
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
    
    } else {
        return false;
    }

    return true;
});
