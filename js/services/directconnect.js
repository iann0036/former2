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
        $('#section-networkingandcontentdelivery-directconnect-connections-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.connections.map(connection => {
            $('#section-networkingandcontentdelivery-directconnect-connections-datatable').deferredBootstrapTable('append', [{
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
                $('#section-networkingandcontentdelivery-directconnect-publicvirtualinterfaces-datatable').deferredBootstrapTable('removeAll');
                $('#section-networkingandcontentdelivery-directconnect-privatevirtualinterfaces-datatable').deferredBootstrapTable('removeAll');
                $('#section-networkingandcontentdelivery-directconnect-bgppeers-datatable').deferredBootstrapTable('removeAll');

                data.virtualInterfaces.forEach(virtualinterface => {
                    if (virtualinterface.virtualInterfaceType == "public") {
                        $('#section-networkingandcontentdelivery-directconnect-publicvirtualinterfaces-datatable').deferredBootstrapTable('append', [{
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
                        $('#section-networkingandcontentdelivery-directconnect-privatevirtualinterfaces-datatable').deferredBootstrapTable('append', [{
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
                            $('#section-networkingandcontentdelivery-directconnect-bgppeers-datatable').deferredBootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-directconnect-lags-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-directconnect-connectionassociations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.lags.map(lag => {
            $('#section-networkingandcontentdelivery-directconnect-lags-datatable').deferredBootstrapTable('append', [{
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
                $('#section-networkingandcontentdelivery-directconnect-connectionassociations-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-networkingandcontentdelivery-directconnect-publicvirtualinterfaces-datatable').deferredBootstrapTable('removeAll');
                    $('#section-networkingandcontentdelivery-directconnect-privatevirtualinterfaces-datatable').deferredBootstrapTable('removeAll');
                    $('#section-networkingandcontentdelivery-directconnect-bgppeers-datatable').deferredBootstrapTable('removeAll');

                    data.virtualInterfaces.forEach(virtualinterface => {
                        if (virtualinterface.virtualInterfaceType == "public") {
                            $('#section-networkingandcontentdelivery-directconnect-hostedpublicvirtualinterfaces-datatable').deferredBootstrapTable('append', [{
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
                            $('#section-networkingandcontentdelivery-directconnect-hostedprivatevirtualinterfaces-datatable').deferredBootstrapTable('append', [{
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
                                $('#section-networkingandcontentdelivery-directconnect-bgppeers-datatable').deferredBootstrapTable('append', [{
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
    }).catch(() => { });

    await sdkcall("DirectConnect", "describeDirectConnectGateways", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-directconnect-gateways-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-directconnect-gatewayassociations-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-directconnect-gatewayassociationproposals-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.directConnectGateways.map(gateway => {
            $('#section-networkingandcontentdelivery-directconnect-gateways-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-networkingandcontentdelivery-directconnect-gatewayassociations-datatable').deferredBootstrapTable('append', [{
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
                            $('#section-networkingandcontentdelivery-directconnect-gatewayassociationproposals-datatable').deferredBootstrapTable('append', [{
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
    if (obj.type == "directconnect.connection") {
        reqParams.tf['name'] = obj.data.connectionName;
        reqParams.tf['bandwidth'] = obj.data.bandwidth;
        reqParams.tf['location'] = obj.data.location;

        /*
        TODO:
        tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('directconnect', obj.id, 'AWS::DirectConnect::Connection'), // not real resource type
            'region': obj.region,
            'service': 'directconnect',
            'terraformType': 'aws_dx_connection',
            'options': reqParams
        });
    } else if (obj.type == "directconnect.connectionassociation") {
        reqParams.tf['connection_id'] = obj.data.connectionId;
        reqParams.tf['lag_id'] = obj.data.lagId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('directconnect', obj.id, 'AWS::DirectConnect::Association'), // not real resource type
            'region': obj.region,
            'service': 'directconnect',
            'terraformType': 'aws_dx_connection_association',
            'options': reqParams
        });
    } else if (obj.type == "directconnect.publicvirtualinterface") {
        reqParams.tf['address_family'] = obj.data.addressFamily;
        reqParams.tf['bgp_asn'] = obj.data.asn;
        reqParams.tf['connection_id'] = obj.data.connectionId;
        reqParams.tf['name'] = obj.data.virtualInterfaceName;
        reqParams.tf['vlan'] = obj.data.vlan;
        reqParams.tf['amazon_address'] = obj.data.amazonAddress;
        reqParams.tf['bgp_auth_key'] = obj.data.authKey;
        reqParams.tf['customer_address'] = obj.data.customerAddress;
        if (obj.data.routeFilterPrefixes) {
            reqParams.tf['route_filter_prefixes'] = [];
            obj.data.routeFilterPrefixes.forEach(prefix => {
                reqParams.tf['route_filter_prefixes'].push(prefix.cidr);
            });
        }

        /*
        TODO:
        tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('directconnect', obj.id, 'AWS::DirectConnect::PublicVirtualInterface'), // not real resource type
            'region': obj.region,
            'service': 'directconnect',
            'terraformType': 'aws_dx_public_virtual_interface',
            'options': reqParams
        });
    } else if (obj.type == "directconnect.privatevirtualinterface") {
        reqParams.tf['address_family'] = obj.data.addressFamily;
        reqParams.tf['bgp_asn'] = obj.data.asn;
        reqParams.tf['connection_id'] = obj.data.connectionId;
        reqParams.tf['name'] = obj.data.virtualInterfaceName;
        reqParams.tf['vlan'] = obj.data.vlan;
        reqParams.tf['amazon_address'] = obj.data.amazonAddress;
        reqParams.tf['bgp_auth_key'] = obj.data.authKey;
        reqParams.tf['customer_address'] = obj.data.customerAddress;
        reqParams.tf['mtu'] = obj.data.mtu;
        reqParams.tf['dx_gateway_id'] = obj.data.directConnectGatewayId;
        reqParams.tf['vpn_gateway_id'] = obj.data.virtualGatewayId;

        /*
        TODO:
        tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('directconnect', obj.id, 'AWS::DirectConnect::PrivateVirtualInterface'), // not real resource type
            'region': obj.region,
            'service': 'directconnect',
            'terraformType': 'aws_dx_private_virtual_interface',
            'options': reqParams
        });
    } else if (obj.type == "directconnect.hostedpublicvirtualinterface") {
        reqParams.tf['address_family'] = obj.data.addressFamily;
        reqParams.tf['bgp_asn'] = obj.data.asn;
        reqParams.tf['connection_id'] = obj.data.connectionId;
        reqParams.tf['name'] = obj.data.virtualInterfaceName;
        reqParams.tf['vlan'] = obj.data.vlan;
        reqParams.tf['amazon_address'] = obj.data.amazonAddress;
        reqParams.tf['bgp_auth_key'] = obj.data.authKey;
        reqParams.tf['customer_address'] = obj.data.customerAddress;
        if (obj.data.routeFilterPrefixes) {
            reqParams.tf['route_filter_prefixes'] = [];
            obj.data.routeFilterPrefixes.forEach(prefix => {
                reqParams.tf['route_filter_prefixes'].push(prefix.cidr);
            });
        }
        reqParams.tf['owner_account_id'] = obj.data.ownerAccount;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('directconnect', obj.id, 'AWS::DirectConnect::HostedPublicVirtualInterface'), // not real resource type
            'region': obj.region,
            'service': 'directconnect',
            'terraformType': 'aws_dx_hosted_public_virtual_interface',
            'options': reqParams
        });
    } else if (obj.type == "directconnect.hostedprivatevirtualinterface") {
        reqParams.tf['address_family'] = obj.data.addressFamily;
        reqParams.tf['bgp_asn'] = obj.data.asn;
        reqParams.tf['connection_id'] = obj.data.connectionId;
        reqParams.tf['name'] = obj.data.virtualInterfaceName;
        reqParams.tf['vlan'] = obj.data.vlan;
        reqParams.tf['amazon_address'] = obj.data.amazonAddress;
        reqParams.tf['bgp_auth_key'] = obj.data.authKey;
        reqParams.tf['customer_address'] = obj.data.customerAddress;
        reqParams.tf['mtu'] = obj.data.mtu;
        reqParams.tf['owner_account_id'] = obj.data.ownerAccount;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('directconnect', obj.id, 'AWS::DirectConnect::HostedPrivateVirtualInterface'), // not real resource type
            'region': obj.region,
            'service': 'directconnect',
            'terraformType': 'aws_dx_hosted_private_virtual_interface',
            'options': reqParams
        });
    } else if (obj.type == "directconnect.bgppeer") {
        reqParams.tf['address_family'] = obj.data.addressFamily;
        reqParams.tf['bgp_asn'] = obj.data.asn;
        reqParams.tf['virtual_interface_id'] = obj.data.virtualInterfaceId;
        reqParams.tf['amazon_address'] = obj.data.amazonAddress;
        reqParams.tf['bgp_auth_key'] = obj.data.authKey;
        reqParams.tf['customer_address'] = obj.data.customerAddress;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('directconnect', obj.id, 'AWS::DirectConnect::BGPPeer'), // not real resource type
            'region': obj.region,
            'service': 'directconnect',
            'terraformType': 'aws_dx_bgp_peer',
            'options': reqParams
        });
    } else if (obj.type == "directconnect.lag") {
        reqParams.tf['name'] = obj.data.lagName;
        reqParams.tf['connections_bandwidth'] = obj.data.connectionsBandwidth;
        reqParams.tf['location'] = obj.data.location;

        /*
        TODO:
        force_destroy
        tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('directconnect', obj.id, 'AWS::DirectConnect::LAG'), // not real resource type
            'region': obj.region,
            'service': 'directconnect',
            'terraformType': 'aws_dx_lag',
            'options': reqParams
        });
    } else if (obj.type == "directconnect.gateway") {
        reqParams.tf['name'] = obj.data.directConnectGatewayName;
        reqParams.tf['amazon_side_asn'] = obj.data.amazonSideAsn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('directconnect', obj.id, 'AWS::DirectConnect::Gateway'), // not real resource type
            'region': obj.region,
            'service': 'directconnect',
            'terraformType': 'aws_dx_gateway',
            'options': reqParams
        });
    } else if (obj.type == "directconnect.gatewayassociation") {
        if (obj.data.associatedGateway.type == "virtualPrivateGateway") {
            reqParams.tf['dx_gateway_id'] = obj.data.directConnectGatewayId;
            reqParams.tf['vpn_gateway_id'] = obj.data.virtualGatewayId;
            if (obj.data.allowedPrefixesToDirectConnectGateway) {
                reqParams.tf['allowed_prefixes'] = [];
                obj.data.allowedPrefixesToDirectConnectGateway.forEach(prefix => {
                    reqParams.tf['allowed_prefixes'].push(prefix.cidr);
                });
            }

            tracked_resources.push({
                'obj': obj,
                'logicalId': getResourceName('directconnect', obj.id, 'AWS::DirectConnect::GatewayAssociation'), // not real resource type
                'region': obj.region,
                'service': 'directconnect',
                'terraformType': 'aws_dx_gateway_association',
                'options': reqParams
            });
        }
    } else if (obj.type == "directconnect.gatewayassociationproposal") {
        if (obj.data.associatedGateway.type == "virtualPrivateGateway") {
            reqParams.tf['dx_gateway_id'] = obj.data.directConnectGatewayId;
            reqParams.tf['vpn_gateway_id'] = obj.data.associatedGateway.id;
            if (obj.data.requestedAllowedPrefixesToDirectConnectGateway) {
                reqParams.tf['allowed_prefixes'] = [];
                obj.data.requestedAllowedPrefixesToDirectConnectGateway.forEach(prefix => {
                    reqParams.tf['allowed_prefixes'].push(prefix.cidr);
                });
            }
            reqParams.tf['dx_gateway_owner_account_id'] = obj.data.associatedGateway.ownerAccount;

            tracked_resources.push({
                'obj': obj,
                'logicalId': getResourceName('directconnect', obj.id, 'AWS::DirectConnect::AssociationProposal'), // not real resource type
                'region': obj.region,
                'service': 'directconnect',
                'terraformType': 'aws_dx_gateway_association_proposal',
                'options': reqParams
            });
        }
    } else {
        return false;
    }

    return true;
});
