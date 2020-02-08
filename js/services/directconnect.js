/* ========================================================================== */
// Direct Connect
/* ========================================================================== */

sections.push({
    'category': 'Networking &amp; Content Delivery',
    'service': 'Direct Connect',
    'resourcetypes': {
        'Connections': {
            'terraformonly': true,
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
                        field: 'location',
                        title: 'Location',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'vlan',
                        title: 'VLAN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Connection Associations': {
            'terraformonly': true,
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
                        title: 'Connection ID',
                        field: 'connectionid',
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
                        field: 'lagid',
                        title: 'LAG ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Public Virtual Interfaces': {
            'terraformonly': true,
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
                        field: 'location',
                        title: 'Location',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'vlan',
                        title: 'VLAN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'asn',
                        title: 'ASN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Private Virtual Interfaces': {
            'terraformonly': true,
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
                        field: 'location',
                        title: 'Location',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'vlan',
                        title: 'VLAN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'asn',
                        title: 'ASN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'LAGs': {
            'terraformonly': true,
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
                        field: 'location',
                        title: 'Location',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'bandwidth',
                        title: 'Bandwidth',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Gateways': {
            'terraformonly': true,
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
                        field: 'amazonsideasn',
                        title: 'Amazon Side ASN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Gateway Associations': {
            'terraformonly': true,
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
                        field: 'directconnectgatewayid',
                        title: 'Direct Connect Gateway ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'associatedgatewayid',
                        title: 'Associated Gateway ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'associatedgatewaytype',
                        title: 'Associated Gateway Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Gateway Association Proposals': {
            'terraformonly': true,
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
                        field: 'directconnectgatewayid',
                        title: 'Direct Connect Gateway ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'associatedgatewayid',
                        title: 'Associated Gateway ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'associatedgatewaytype',
                        title: 'Associated Gateway Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'BGP Peers': {
            'terraformonly': true,
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
                        field: 'virtualinterfaceid',
                        title: 'Virtual Interface ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'asn',
                        title: 'ASN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'customeraddress',
                        title: 'Customer Address',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'amazonaddress',
                        title: 'Amazon Address',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Hosted Public VIFs': {
            'terraformonly': true,
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
                        field: 'location',
                        title: 'Location',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'vlan',
                        title: 'VLAN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'asn',
                        title: 'ASN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Hosted Private VIFs': {
            'terraformonly': true,
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
                        field: 'location',
                        title: 'Location',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'vlan',
                        title: 'VLAN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'asn',
                        title: 'ASN',
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

async function updateDatatableNetworkingAndContentDeliveryDirectConnect() {
    blockUI('#section-networkingandcontentdelivery-directconnect-connections-datatable');
    blockUI('#section-networkingandcontentdelivery-directconnect-connectionassociations-datatable');
    blockUI('#section-networkingandcontentdelivery-directconnect-publicvirtualinterfaces-datatable');
    blockUI('#section-networkingandcontentdelivery-directconnect-privatevirtualinterfaces-datatable');
    blockUI('#section-networkingandcontentdelivery-directconnect-lags-datatable');
    blockUI('#section-networkingandcontentdelivery-directconnect-gateways-datatable');
    blockUI('#section-networkingandcontentdelivery-directconnect-gatewayassociations-datatable');
    blockUI('#section-networkingandcontentdelivery-directconnect-gatewayassociationproposals-datatable');
    blockUI('#section-networkingandcontentdelivery-directconnect-bgppeers-datatable');
    blockUI('#section-networkingandcontentdelivery-directconnect-hostedpublicvifs-datatable');
    blockUI('#section-networkingandcontentdelivery-directconnect-hostedprivatevifs-datatable');

    await sdkcall("DirectConnect", "describeConnections", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-directconnect-connections-datatable').bootstrapTable('removeAll');

        await Promise.all(data.connections.map(connection => {
            $('#section-networkingandcontentdelivery-directconnect-connections-datatable').bootstrapTable('append', [{
                f2id: connection.connectionId,
                f2type: 'directconnect.connection',
                f2data: connection,
                f2region: region,
                id: connection.connectionId,
                name: connection.connectionName,
                location: connection.location,
                vlan: connection.vlan
            }]);

            return sdkcall("DirectConnect", "describeVirtualInterfaces", {
                connectionId: connection.connectionId
            }, true).then(async (data) => {
                $('#section-networkingandcontentdelivery-directconnect-publicvirtualinterfaces-datatable').bootstrapTable('removeAll');
                $('#section-networkingandcontentdelivery-directconnect-privatevirtualinterfaces-datatable').bootstrapTable('removeAll');
                $('#section-networkingandcontentdelivery-directconnect-bgppeers-datatable').bootstrapTable('removeAll');

                data.virtualInterfaces.forEach(virtualinterface => {
                    if (virtualinterface.virtualInterfaceType == "public") {
                        $('#section-networkingandcontentdelivery-directconnect-publicvirtualinterfaces-datatable').bootstrapTable('append', [{
                            f2id: virtualinterface.virtualInterfaceId,
                            f2type: 'directconnect.publicvirtualinterface',
                            f2data: virtualinterface,
                            f2region: region,
                            id: virtualinterface.virtualInterfaceId,
                            name: virtualinterface.virtualInterfaceName,
                            location: virtualinterface.location,
                            vlan: virtualinterface.vlan,
                            asn: virtualinterface.asn
                        }]);
                    } else {
                        $('#section-networkingandcontentdelivery-directconnect-privatevirtualinterfaces-datatable').bootstrapTable('append', [{
                            f2id: virtualinterface.virtualInterfaceId,
                            f2type: 'directconnect.privatevirtualinterface',
                            f2data: virtualinterface,
                            f2region: region,
                            id: virtualinterface.virtualInterfaceId,
                            name: virtualinterface.virtualInterfaceName,
                            location: virtualinterface.location,
                            vlan: virtualinterface.vlan,
                            asn: virtualinterface.asn
                        }]);
                    }
                    if (virtualinterface.bgpPeers) {
                        virtualinterface.bgpPeers.forEach(bgppeer => {
                            bgppeer['virtualInterfaceId'] = virtualinterface.virtualInterfaceId;
                            $('#section-networkingandcontentdelivery-directconnect-bgppeers-datatable').bootstrapTable('append', [{
                                f2id: bgppeer.bgpPeerId,
                                f2type: 'directconnect.bgppeer',
                                f2data: bgppeer,
                                f2region: region,
                                id: bgppeer.bgpPeerId,
                                virtualinterfaceid: virtualinterface.virtualInterfaceId,
                                asn: bgppeer.asn,
                                customeraddress: bgppeer.customerAddress,
                                amazonaddress: bgppeer.amazonAddress
                            }]);
                        });
                    }
                });
            });
        }));
    });

    await sdkcall("DirectConnect", "describeLags", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-directconnect-lags-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-directconnect-connectionassociations-datatable').bootstrapTable('removeAll');

        await Promise.all(data.lags.map(lag => {
            $('#section-networkingandcontentdelivery-directconnect-lags-datatable').bootstrapTable('append', [{
                f2id: lag.lagId,
                f2type: 'directconnect.lag',
                f2data: lag,
                f2region: region,
                id: lag.lagId,
                name: lag.lagName,
                location: lag.location,
                bandwidth: lag.connectionsBandwidth
            }]);

            return Promise.all(lag.connections.map(connection => {
                $('#section-networkingandcontentdelivery-directconnect-connectionassociations-datatable').bootstrapTable('append', [{
                    f2id: connection.connectionId + " " + lag.lagId + " association",
                    f2type: 'directconnect.connectionassociation',
                    f2data: {
                        'lagId': lag.lagId,
                        'connectionId': connection.connectionId
                    },
                    f2region: region,
                    connectionid: connection.connectionId,
                    lagid: lag.lagId
                }]);

                return sdkcall("DirectConnect", "describeVirtualInterfaces", {
                    connectionId: connection.connectionId
                }, true).then(async (data) => {
                    $('#section-networkingandcontentdelivery-directconnect-publicvirtualinterfaces-datatable').bootstrapTable('removeAll');
                    $('#section-networkingandcontentdelivery-directconnect-privatevirtualinterfaces-datatable').bootstrapTable('removeAll');
                    $('#section-networkingandcontentdelivery-directconnect-bgppeers-datatable').bootstrapTable('removeAll');

                    data.virtualInterfaces.forEach(virtualinterface => {
                        if (virtualinterface.virtualInterfaceType == "public") {
                            $('#section-networkingandcontentdelivery-directconnect-hostedpublicvirtualinterfaces-datatable').bootstrapTable('append', [{
                                f2id: virtualinterface.virtualInterfaceId,
                                f2type: 'directconnect.hostedpublicvirtualinterface',
                                f2data: virtualinterface,
                                f2region: region,
                                id: virtualinterface.virtualInterfaceId,
                                name: virtualinterface.virtualInterfaceName,
                                location: virtualinterface.location,
                                vlan: virtualinterface.vlan,
                                asn: virtualinterface.asn
                            }]);
                        } else {
                            $('#section-networkingandcontentdelivery-directconnect-hostedprivatevirtualinterfaces-datatable').bootstrapTable('append', [{
                                f2id: virtualinterface.virtualInterfaceId,
                                f2type: 'directconnect.hostedprivatevirtualinterface',
                                f2data: virtualinterface,
                                f2region: region,
                                id: virtualinterface.virtualInterfaceId,
                                name: virtualinterface.virtualInterfaceName,
                                location: virtualinterface.location,
                                vlan: virtualinterface.vlan,
                                asn: virtualinterface.asn
                            }]);
                        }

                        if (virtualinterface.bgpPeers) {
                            virtualinterface.bgpPeers.forEach(bgppeer => {
                                bgppeer['virtualInterfaceId'] = virtualinterface.virtualInterfaceId;
                                $('#section-networkingandcontentdelivery-directconnect-bgppeers-datatable').bootstrapTable('append', [{
                                    f2id: bgppeer.bgpPeerId,
                                    f2type: 'directconnect.bgppeer',
                                    f2data: bgppeer,
                                    f2region: region,
                                    id: bgppeer.bgpPeerId,
                                    virtualinterfaceid: virtualinterface.virtualInterfaceId,
                                    asn: bgppeer.asn,
                                    customeraddress: bgppeer.customerAddress,
                                    amazonaddress: bgppeer.amazonAddress
                                }]);
                            });
                        }
                    });
                });
            }));
        }));
    });

    await sdkcall("DirectConnect", "describeDirectConnectGateways", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-directconnect-gateways-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-directconnect-gatewayassociations-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-directconnect-gatewayassociationproposals-datatable').bootstrapTable('removeAll');

        await Promise.all(data.directConnectGateways.map(gateway => {
            $('#section-networkingandcontentdelivery-directconnect-gateways-datatable').bootstrapTable('append', [{
                f2id: gateway.directConnectGatewayId,
                f2type: 'directconnect.gateway',
                f2data: gateway,
                f2region: region,
                id: gateway.directConnectGatewayId,
                name: gateway.directConnectGatewayName,
                amazonsideasn: gateway.amazonSideAsn
            }]);

            return sdkcall("DirectConnect", "describeDirectConnectGatewayAssociations", {
                directConnectGatewayId: gateway.directConnectGatewayId
            }, true).then(async (data) => {
                await Promise.all(data.directConnectGatewayAssociations.map(association => {
                    $('#section-networkingandcontentdelivery-directconnect-gatewayassociations-datatable').bootstrapTable('append', [{
                        f2id: association.associationId,
                        f2type: 'directconnect.gatewayassociation',
                        f2data: association,
                        f2region: region,
                        id: association.associationId,
                        directconnectgatewayid: association.directConnectGatewayId,
                        associatedgatewayid: association.associatedGateway.id,
                        associatedgatewaytype: association.associatedGateway.type
                    }]);

                    return sdkcall("DirectConnect", "describeDirectConnectGatewayAssociationProposals", {
                        directConnectGatewayId: gateway.directConnectGatewayId,
                        associatedGatewayId: association.associatedGateway.id
                    }, true).then(async (data) => {
                        data.directConnectGatewayAssociationProposals.forEach(proposal => {
                            $('#section-networkingandcontentdelivery-directconnect-gatewayassociationproposals-datatable').bootstrapTable('append', [{
                                f2id: proposal.proposalId,
                                f2type: 'directconnect.gatewayassociationproposal',
                                f2data: proposal,
                                f2region: region,
                                id: proposal.proposalId,
                                directconnectgatewayid: proposal.directConnectGatewayId,
                                associatedgatewayid: proposal.associatedGateway.id,
                                associatedgatewaytype: proposal.associatedGateway.type
                            }]);
                        });
                    });
                }));
            });
        }));
    });

    unblockUI('#section-networkingandcontentdelivery-directconnect-connections-datatable');
    unblockUI('#section-networkingandcontentdelivery-directconnect-connectionassociations-datatable');
    unblockUI('#section-networkingandcontentdelivery-directconnect-publicvirtualinterfaces-datatable');
    unblockUI('#section-networkingandcontentdelivery-directconnect-privatevirtualinterfaces-datatable');
    unblockUI('#section-networkingandcontentdelivery-directconnect-lags-datatable');
    unblockUI('#section-networkingandcontentdelivery-directconnect-gateways-datatable');
    unblockUI('#section-networkingandcontentdelivery-directconnect-gatewayassociations-datatable');
    unblockUI('#section-networkingandcontentdelivery-directconnect-gatewayassociationproposals-datatable');
    unblockUI('#section-networkingandcontentdelivery-directconnect-bgppeers-datatable');
    unblockUI('#section-networkingandcontentdelivery-directconnect-hostedpublicvifs-datatable');
    unblockUI('#section-networkingandcontentdelivery-directconnect-hostedprivatevifs-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
