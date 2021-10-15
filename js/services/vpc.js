/* ========================================================================== */
// VPC
/* ========================================================================== */

sections.push({
    'category': 'Networking &amp; Content Delivery',
    'service': 'VPC',
    'resourcetypes': {
        'VPCs': {
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
                        title: 'VPC ID',
                        field: 'vpcid',
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
                        field: 'cidrblock',
                        title: 'Primary CIDR Block',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'instancetenancy',
                        title: 'Instance Tenancy',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'VPC CIDR Blocks': {
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
                        title: 'VPC ID',
                        field: 'vpcid',
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
                        field: 'cidrblock',
                        title: 'CIDR Block',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'associationid',
                        title: 'Association ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Subnets': {
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
                        title: 'Subnet ID',
                        field: 'subnetid',
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
                        field: 'availabilityzone',
                        title: 'Availability Zone',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'cidrblock',
                        title: 'CIDR Block',
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
                        field: 'availableipaddresscount',
                        title: 'Available IPv4 Addresses',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Internet Gateways': {
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
                        title: 'Gateway ID',
                        field: 'gatewayid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                [
                    // nothing
                ]
            ]
        },
        'Egress Only Internet Gateways': {
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
                        title: 'Gateway ID',
                        field: 'gatewayid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                [
                    // nothing
                ]
            ]
        },
        'Customer Gateways': {
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
                        title: 'Gateway ID',
                        field: 'gatewayid',
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
                        field: 'ipaddress',
                        title: 'IP Address',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'bgpasn',
                        title: 'BGP ASN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Virtual Private Gateways': {
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
                        title: 'Gateway ID',
                        field: 'gatewayid',
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
                        field: 'availabilityzone',
                        title: 'Availability Zone',
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
        'Virtual Private Gateway Route Propogations': {
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
                        title: 'VPN Gateway ID',
                        field: 'vpngatewayid',
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
                        field: 'routetable',
                        title: 'Route Table',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Elastic IPs': {
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
                        title: 'Public IP Address',
                        field: 'ip',
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
                        field: 'privateipaddress',
                        title: 'Private IP Address',
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
                        field: 'allocationid',
                        title: 'Allocation ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'networkinterfaceid',
                        title: 'Network Interface ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Elastic IP Associations': {
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
                        title: 'IP',
                        field: 'ip',
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
                        field: 'associationid',
                        title: 'Association ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'DHCP Options': {
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
                        title: 'DHCP Options ID',
                        field: 'dhcpoptionsid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                [
                    // nothing
                ]
            ]
        },
        'DHCP Options Associations': {
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
                        title: 'DHCP Options ID',
                        field: 'dhcpoptionsid',
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
                        field: 'vpcid',
                        title: 'VPC ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'VPN Connections': {
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
                        field: 'customergatewayid',
                        title: 'Customer Gateway ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'vpngatewayid',
                        title: 'VPN Gateway ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'transitgatewayid',
                        title: 'Transit Gateway ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'VPN Connection Routes': {
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
                        field: 'destinationcidrblock',
                        title: 'Destination CIDR Block',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Peering Connections': {
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
                    }
                ],
                [
                    // nothing
                ]
            ]
        },
        'Network ACLs': {
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
                        title: 'Network ACL ID',
                        field: 'networkaclid',
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
                        field: 'vpcid',
                        title: 'VPC ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Network ACL Entries': {
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
                        title: 'Network ACL ID',
                        field: 'networkaclid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 5,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'cidrblocks',
                        title: 'CIDR Blocks',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'egress',
                        title: 'Egress',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'protocol',
                        title: 'Protocol',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'range',
                        title: 'Range',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'action',
                        title: 'Action',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Route Tables': {
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
                        title: 'Route Table ID',
                        field: 'routetableid',
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
                        field: 'vpcid',
                        title: 'VPC ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Routes': {
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
                        title: 'Destination',
                        field: 'destination',
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
                        field: 'routetableid',
                        title: 'Route Table ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'resource',
                        title: 'Resource',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'NAT Gateways': {
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
                        field: 'subnetid',
                        title: 'Subnet ID',
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
        'Transit Gateways': {
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
                        field: 'description',
                        title: 'Description',
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
        'Transit Gateway Routes': {
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
                        title: 'Destination',
                        field: 'destination',
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
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'blackhole',
                        title: 'Blackhole',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Transit Gateway Route Tables': {
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
                        field: 'transitgatewayid',
                        title: 'Transit Gateway ID',
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
        'Transit Gateway Route Table Associations': {
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
                        title: 'Attachment ID',
                        field: 'attachmentid',
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
                        field: 'resourceid',
                        title: 'Resource ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'resourcetype',
                        title: 'Resource Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Transit Gateway Route Table Propogations': {
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
                        title: 'Attachment ID',
                        field: 'attachmentid',
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
                        field: 'resourceid',
                        title: 'Resource ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'resourcetype',
                        title: 'Resource Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Transit Gateway Attachments': {
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
                        title: 'Attachment ID',
                        field: 'attachmentid',
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
                        field: 'transitgatewayid',
                        title: 'Transit Gateway ID',
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
                    }
                ]
            ]
        },
        'VPC Endpoints': {
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
                        field: 'endpointtype',
                        title: 'Endpoint Type',
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
                        field: 'servicename',
                        title: 'Service Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'VPC Endpoint Connection Notifications': {
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
                        field: 'serviceid',
                        title: 'Service ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'vpcendpointid',
                        title: 'VPC Endpoint ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'topicarn',
                        title: 'Topic ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'VPC Endpoint Services': {
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
                        field: 'privatednsname',
                        title: 'Private DNS Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'acceptancerequired',
                        title: 'Acceptance Required',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'VPC Endpoint Service Permissions': {
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
                        title: 'Service Name',
                        field: 'servicename',
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
                        field: 'allowedprincipals',
                        title: 'Allowed Principals',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Gateway Attachments': {
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
                        title: 'VPC ID',
                        field: 'vpcid',
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
                        field: 'gatewayid',
                        title: 'Gateway ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Subnet Network ACL Associations': {
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
                        title: 'Network ACL Association ID',
                        field: 'networkaclassociationid',
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
                        field: 'networkaclid',
                        title: 'Network ACL ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'subnetid',
                        title: 'Subnet ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Subnet Route Table Associations': {
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
                        title: 'Route Table Association ID',
                        field: 'routetableassociationid',
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
                        field: 'routetableid',
                        title: 'Route Table ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'subnetid',
                        title: 'Subnet ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Gateway Route Table Associations': {
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
                        title: 'Route Table Association ID',
                        field: 'routetableassociationid',
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
                        field: 'routetableid',
                        title: 'Route Table ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'gatewayid',
                        title: 'Gateway ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Subnet IPv6 CIDR Blocks': {
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
                        title: 'IPv6 CIDR Block',
                        field: 'ipv6cidrblock',
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
                        field: 'subnetid',
                        title: 'Subnet ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'associationid',
                        title: 'Association ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Client VPN Endpoints': {
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
                        field: 'description',
                        title: 'Description',
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
        'Client VPN Routes': {
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
                        title: 'Client VPN Endpoint ID',
                        field: 'clientvpnendpointid',
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
                        field: 'destinationcidr',
                        title: 'Destination CIDR',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'targetsubnet',
                        title: 'Target Subnet',
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
        'Client VPN Target Network Associations': {
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
                        title: 'Association ID',
                        field: 'associationid',
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
                        field: 'vpcid',
                        title: 'VPC ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'targetnetworkid',
                        title: 'Target Network ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'clientvpnendpointid',
                        title: 'Client VPN Endpoint ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Client VPN Authorization Rules': {
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
                        title: 'Client VPN Endpoint ID',
                        field: 'clientvpnendpointid',
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
                        field: 'destinationcidr',
                        title: 'Destination CIDR',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'groupid',
                        title: 'Group ID',
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
        'Traffic Mirror Filters': {
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
        'Traffic Mirror Filter Rules': {
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
                        field: 'filterid',
                        title: 'Filter ID',
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
                    },
                    {
                        field: 'direction',
                        title: 'Direction',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'rulenumber',
                        title: 'Rule Number',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Traffic Mirror Sessions': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'targetid',
                        title: 'Target ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'filterid',
                        title: 'Filter ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Traffic Mirror Targets': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'target',
                        title: 'Target',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Local Gateway Routes': {
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
                        title: 'Destination CIDR Block',
                        field: 'destinationcidrblock',
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
                        field: 'routetableid',
                        title: 'Route Table ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'virtualinterfacegroupid',
                        title: 'Virtual Interface Group ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Local Gateway Route Table VPC Associations': {
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
                        title: 'VPC ID',
                        field: 'vpcid',
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
                        field: 'routetableid',
                        title: 'Route Table ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Network Manager Global Networks': {
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
        'Network Manager Sites': {
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
                        field: 'globalnetworkid',
                        title: 'Global Network ID',
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
        'Network Manager Devices': {
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
                        field: 'globalnetworkid',
                        title: 'Global Network ID',
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
                    },
                    {
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Network Manager Links': {
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
                        field: 'globalnetworkid',
                        title: 'Global Network ID',
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
                    },
                    {
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Network Manager Link Associations': {
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
                        title: 'Link ID',
                        field: 'linkid',
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
                        field: 'globalnetworkid',
                        title: 'Global Network ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'deviceid',
                        title: 'Device ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Network Manager Customer Gateway Associations': {
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
                        title: 'Customer Gateway ARN',
                        field: 'customergatewayarn',
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
                        field: 'globalnetworkid',
                        title: 'Global Network ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'deviceid',
                        title: 'Device ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'linkid',
                        title: 'Link ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Network Manager Transit Gateway Registrations': {
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
                        title: 'Global Network ID',
                        field: 'globalnetworkid',
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
                        field: 'transitgatewayarn',
                        title: 'Transit Gateway ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Prefix Lists': {
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
                        field: 'addressfamily',
                        title: 'Address Family',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Carrier Gateways': {
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
                        field: 'vpcid',
                        title: 'VPC ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Network Firewalls': {
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
                    },
                    {
                        field: 'vpcid',
                        title: 'VPC ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Network Firewall Policies': {
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
        },
        'Network Firewall Logging Configurations': {
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
                        title: 'Firewall ARN',
                        field: 'firewallarn',
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
                    // nothing
                ]
            ]
        },
        'Network Firewall Rule Groups': {
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
                    },
                    {
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Network Insights Paths': {
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
                        field: 'source',
                        title: 'Source',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'destination',
                        title: 'Destination',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Network Insights Analyses': {
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
                        field: 'pathid',
                        title: 'Path ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Transit Gateway Multicast Domains': {
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
                    }
                ],
                [
                    // nothing
                ]
            ]
        },
        'Transit Gateway Multicast Domain Associations': {
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
                        title: 'Attachment ID',
                        field: 'attachmentid',
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
                        field: 'domainid',
                        title: 'Domain ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'subnetid',
                        title: 'Subnet ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Transit Gateway Multicast Group Members': {
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
                        title: 'Attachment ID',
                        field: 'attachmentid',
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
                        field: 'domainid',
                        title: 'Domain ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'networkinterfaceid',
                        title: 'Network Interface ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'groupipaddress',
                        title: 'Group IP Address',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Transit Gateway Multicast Group Sources': {
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
                        title: 'Attachment ID',
                        field: 'attachmentid',
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
                        field: 'domainid',
                        title: 'Domain ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'networkinterfaceid',
                        title: 'Network Interface ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'groupipaddress',
                        title: 'Group IP Address',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Transit Gateway Connects': {
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
                        title: 'Attachment ID',
                        field: 'attachmentid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                [
                    // none
                ]
            ]
        },
        'Transit Gateway Peering Attachments': {
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
                        title: 'Attachment ID',
                        field: 'attachmentid',
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
                        field: 'requesteraccount',
                        title: 'Requester Account',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'accepteraccount',
                        title: 'Accepter Account',
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

async function updateDatatableNetworkingAndContentDeliveryVPC() {
    blockUI('#section-networkingandcontentdelivery-vpc-vpcs-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-vpccidrblocks-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-subnets-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-internetgateways-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-egressonlyinternetgateways-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-customergateways-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-virtualprivategateways-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-virtualprivategatewayroutepropagations-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-elasticips-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-elasticipassociations-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-dhcpoptions-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-dhcpoptionassociations-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-vpnconnections-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-vpnconnectionroutes-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-peeringconnections-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-networkacls-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-networkaclentries-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-routetables-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-routes-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-transitgateways-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-transitgatewayroutes-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-transitgatewayroutetables-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-transitgatewayroutetableassociations-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-transitgatewayroutetablepropogations-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-transitgatewayattachments-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-vpcendpoints-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-vpcendpointconnectionnotifications-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-vpcendpointservices-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-vpcendpointservicepermissions-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-natgateways-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-gatewayattachments-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-subnetnetworkaclassociations-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-subnetroutetableassociations-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-gatewayroutetableassociations-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-subnetipv6cidrblocks-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-clientvpnendpoints-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-clientvpnroutes-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-clientvpntargetnetworkassociations-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-clientvpnauthorizationrules-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-trafficmirrorfilters-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-trafficmirrorfilterrules-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-trafficmirrorsessions-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-trafficmirrortargets-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-localgatewayroutes-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-localgatewayroutetablevpcassociations-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-networkmanagerglobalnetworks-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-networkmanagersites-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-networkmanagerdevices-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-networkmanagerlinks-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-networkmanagerlinkassociations-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-networkmanagercustomergatewayassociations-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-networkmanagertransitgatewayregistrations-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-prefixlists-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-carriergateways-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-networkfirewalls-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-networkfirewallpolicies-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-networkfirewallloggingconfigurations-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-networkfirewallrulegroups-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-networkinsightspaths-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-networkinsightsanalyses-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-transitgatewaymulticastdomains-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-transitgatewaymulticastdomainassociations-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-transitgatewaymulticastgroupmembers-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-transitgatewaymulticastgroupsources-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-transitgatewayconnects-datatable');
    blockUI('#section-networkingandcontentdelivery-vpc-transitgatewaypeeringattachments-datatable');

    var defaultVPC = "unset";

    await sdkcall("EC2", "describeVpcs", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-vpcs-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-vpccidrblocks-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-dhcpoptionsassociations-datatable').deferredBootstrapTable('removeAll');

        return Promise.all(data.Vpcs.map(vpc => {
            if (vpc.IsDefault && !include_default_resources) {
                defaultVPC = vpc.VpcId;
            } else {
                if (vpc.DhcpOptionsId) {
                    $('#section-networkingandcontentdelivery-vpc-dhcpoptionsassociations-datatable').deferredBootstrapTable('append', [{
                        f2id: vpc.DhcpOptionsId,
                        f2type: 'ec2.dhcpoptionsassociation',
                        f2data: {
                            'VpcId': vpc.VpcId,
                            'DhcpOptionsId': vpc.DhcpOptionsId
                        },
                        f2region: region,
                        vpcid: vpc.VpcId,
                        dhcpoptionsid: vpc.DhcpOptionsId
                    }]);
                }

                if (vpc.CidrBlockAssociationSet) {
                    vpc.CidrBlockAssociationSet.forEach(cidrBlock => {
                        if (cidrBlock.CidrBlock != vpc.CidrBlock) { // exclude primary block
                            cidrBlock['VpcId'] = vpc.VpcId;
                            $('#section-networkingandcontentdelivery-vpc-vpccidrblocks-datatable').deferredBootstrapTable('append', [{
                                f2id: cidrBlock.AssociationId,
                                f2type: 'ec2.vpccidrblock',
                                f2data: cidrBlock,
                                f2region: region,
                                vpcid: vpc.VpcId,
                                cidrblock: cidrBlock.CidrBlock,
                                associationid: cidrBlock.AssociationId
                            }]);
                        }
                    });
                }

                if (vpc.Ipv6CidrBlockAssociationSet) {
                    vpc.Ipv6CidrBlockAssociationSet.forEach(ipv6cidrBlock => {
                        ipv6cidrBlock['VpcId'] = vpc.VpcId;
                        $('#section-networkingandcontentdelivery-vpc-vpccidrblocks-datatable').deferredBootstrapTable('append', [{
                            f2id: ipv6cidrBlock.AssociationId,
                            f2type: 'ec2.vpccidrblock',
                            f2data: ipv6cidrBlock,
                            f2region: region,
                            vpcid: vpc.VpcId,
                            cidrblock: ipv6cidrBlock.Ipv6CidrBlock,
                            associationid: ipv6cidrBlock.AssociationId
                        }]);
                    });
                }

                return sdkcall("EC2", "describeVpcAttribute", {
                    Attribute: "enableDnsSupport",
                    VpcId: vpc.VpcId
                }, true).then(async (dnsSupport) => {
                    await sdkcall("EC2", "describeVpcAttribute", {
                        Attribute: "enableDnsHostnames",
                        VpcId: vpc.VpcId
                    }, true).then((dnsHostnames) => {
                        vpc.EnableDnsSupport = dnsSupport.EnableDnsSupport.Value;
                        vpc.EnableDnsHostnames = dnsHostnames.EnableDnsHostnames.Value;

                        $('#section-networkingandcontentdelivery-vpc-vpcs-datatable').deferredBootstrapTable('append', [{
                            f2id: vpc.VpcId,
                            f2type: 'ec2.vpc',
                            f2data: vpc,
                            f2region: region,
                            f2link: 'https://console.aws.amazon.com/vpc/home?region=' + region + '#vpcs:filter=' + vpc.VpcId,
                            vpcid: vpc.VpcId,
                            instancetenancy: vpc.InstanceTenancy,
                            cidrblock: vpc.CidrBlock
                        }]);
                    });
                });
            }
        }));
    });

    await sdkcall("EC2", "describeSubnets", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpc-subnets-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-subnetipv6cidrblocks-datatable').deferredBootstrapTable('removeAll');

        data.Subnets.forEach(async (subnet) => {
            if (subnet.VpcId != defaultVPC) {
                if (subnet.Ipv6CidrBlockAssociationSet) {
                    subnet.Ipv6CidrBlockAssociationSet.forEach(ipv6CidrBlockAssociation => {
                        ipv6CidrBlockAssociation['SubnetId'] = subnet.SubnetId;
                        $('#section-networkingandcontentdelivery-vpc-subnetipv6cidrblocks-datatable').deferredBootstrapTable('append', [{
                            f2id: ipv6CidrBlockAssociation.AssociationId,
                            f2type: 'ec2.subnetipv6cidrblock',
                            f2data: ipv6CidrBlockAssociation,
                            f2region: region,
                            subnetid: subnet.SubnetId,
                            ipv6cidrblock: subnet.Ipv6CidrBlock,
                            associationid: subnet.AssociationId
                        }]);
                    });
                }

                subnet['Tags'] = await getResourceTags(subnet.SubnetArn);

                $('#section-networkingandcontentdelivery-vpc-subnets-datatable').deferredBootstrapTable('append', [{
                    f2id: subnet.SubnetId,
                    f2type: 'ec2.subnet',
                    f2data: subnet,
                    f2region: region,
                    f2link: 'https://console.aws.amazon.com/vpc/home?region=' + region + '#subnets:filter=' + subnet.SubnetId,
                    subnetid: subnet.SubnetId,
                    availabilityzone: subnet.AvailabilityZone,
                    cidrblock: subnet.CidrBlock,
                    vpcid: subnet.VpcId,
                    availableipaddresscount: subnet.AvailableIpAddressCount
                }]);
            }
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-subnets-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-subnetipv6cidrblocks-datatable');
    });

    await sdkcall("EC2", "describeEgressOnlyInternetGateways", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-egressonlyinternetgateways-datatable').deferredBootstrapTable('removeAll');

        data.EgressOnlyInternetGateways.forEach(egressOnlyInternetGateway => {
            $('#section-networkingandcontentdelivery-vpc-egressonlyinternetgateways-datatable').deferredBootstrapTable('append', [{
                f2id: egressOnlyInternetGateway.EgressOnlyInternetGatewayId,
                f2type: 'ec2.egressonlyinternetgateway',
                f2data: egressOnlyInternetGateway,
                f2region: region,
                gatewayid: egressOnlyInternetGateway.EgressOnlyInternetGatewayId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-egressonlyinternetgateways-datatable');
    });

    await sdkcall("EC2", "describeCustomerGateways", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-customergateways-datatable').deferredBootstrapTable('removeAll');

        data.CustomerGateways.forEach(customerGateway => {
            $('#section-networkingandcontentdelivery-vpc-customergateways-datatable').deferredBootstrapTable('append', [{
                f2id: customerGateway.CustomerGatewayId,
                f2type: 'ec2.customergateway',
                f2data: customerGateway,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/vpc/home#CustomerGateways:CustomerGatewayId=' + customerGateway.CustomerGatewayId,
                gatewayid: customerGateway.CustomerGatewayId,
                bgpasn: customerGateway.BgpAsn,
                ipaddress: customerGateway.IpAddress
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-customergateways-datatable');
    });

    await sdkcall("EC2", "describeVpnGateways", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpc-virtualprivategateways-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-internetgateways-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-gatewayattachments-datatable').deferredBootstrapTable('removeAll');

        data.VpnGateways.forEach(vpnGateway => {
            if (vpnGateway.VpcAttachments) {
                vpnGateway.VpcAttachments.forEach(attachment => {
                    $('#section-networkingandcontentdelivery-vpc-gatewayattachments-datatable').deferredBootstrapTable('append', [{
                        f2id: attachment.VpcId + " " + vpnGateway.VpnGatewayId,
                        f2type: 'ec2.gatewayattachment',
                        f2data: {
                            'VpcId': attachment.VpcId,
                            'VpnGatewayId': vpnGateway.VpnGatewayId
                        },
                        f2region: region,
                        vpcid: attachment.VpcId,
                        gatewayid: vpnGateway.VpnGatewayId
                    }]);
                });
            }

            $('#section-networkingandcontentdelivery-vpc-virtualprivategateways-datatable').deferredBootstrapTable('append', [{
                f2id: vpnGateway.VpnGatewayId,
                f2type: 'ec2.vpngateway',
                f2data: vpnGateway,
                f2region: region,
                gatewayid: vpnGateway.VpnGatewayId,
                availabilityzone: vpnGateway.AvailabilityZone,
                amazonsideasn: vpnGateway.AmazonSideAsn
            }]);
        });

        await sdkcall("EC2", "describeInternetGateways", {
            // no params
        }, true).then((data) => {
            data.InternetGateways.forEach(internetGateway => {
                var skipIG = false;

                if (internetGateway.Attachments) {
                    internetGateway.Attachments.forEach(attachment => {
                        if (attachment.VpcId == defaultVPC) {
                            skipIG = true;
                        } else {
                            $('#section-networkingandcontentdelivery-vpc-gatewayattachments-datatable').deferredBootstrapTable('append', [{
                                f2id: attachment.VpcId + " " + internetGateway.InternetGatewayId,
                                f2type: 'ec2.gatewayattachment',
                                f2data: {
                                    'VpcId': attachment.VpcId,
                                    'InternetGatewayId': internetGateway.InternetGatewayId
                                },
                                f2region: region,
                                vpcid: attachment.VpcId,
                                gatewayid: attachment.InternetGatewayId
                            }]);
                        }
                    });
                }

                if (!skipIG) {
                    $('#section-networkingandcontentdelivery-vpc-internetgateways-datatable').deferredBootstrapTable('append', [{
                        f2id: internetGateway.InternetGatewayId,
                        f2type: 'ec2.internetgateway',
                        f2data: internetGateway,
                        f2region: region,
                        f2link: 'https://console.aws.amazon.com/vpc/home?region=' + region + '#igws:filter=' + internetGateway.InternetGatewayId,
                        gatewayid: internetGateway.InternetGatewayId
                    }]);
                }
            });
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-virtualprivategateways-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-internetgateways-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-gatewayattachments-datatable');
    });

    await sdkcall("EC2", "describeAddresses", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-elasticips-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-elasticipassociations-datatable').deferredBootstrapTable('removeAll');

        data.Addresses.forEach(address => {
            $('#section-networkingandcontentdelivery-vpc-elasticips-datatable').deferredBootstrapTable('append', [{
                f2id: address.AllocationId,
                f2type: 'ec2.elasticip',
                f2data: address,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/vpc/home?region=' + region + '#eips:filter=' + address.PublicIp,
                ip: address.PublicIp,
                instanceid: address.InstanceId,
                allocationid: address.AllocationId,
                privateipaddress: address.PrivateIpAddress,
                networkinterfaceid: address.NetworkInterfaceId
            }]);

            if (address.AssociationId) {
                $('#section-networkingandcontentdelivery-vpc-elasticips-datatable').deferredBootstrapTable('append', [{
                    f2id: address.AssociationId,
                    f2type: 'ec2.elasticipassociation',
                    f2data: address,
                    f2region: region,
                    ip: address.PublicIp,
                    associationid: address.AssociationId
                }]);
            }
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-elasticips-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-elasticipassociations-datatable');
    });

    await sdkcall("EC2", "describeDhcpOptions", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-dhcpoptions-datatable').deferredBootstrapTable('removeAll');

        data.DhcpOptions.forEach(dhcpOptions => {
            if (
                dhcpOptions.DhcpConfigurations.length != 2 ||
                dhcpOptions.DhcpConfigurations[0].Key != "domain-name" ||
                dhcpOptions.DhcpConfigurations[0].Values.length != 1 ||
                dhcpOptions.DhcpConfigurations[0].Values[0].Value != "ec2.internal" ||
                include_default_resources
            ) {
                $('#section-networkingandcontentdelivery-vpc-dhcpoptions-datatable').deferredBootstrapTable('append', [{
                    f2id: dhcpOptions.DhcpOptionsId,
                    f2type: 'ec2.dhcpoptions',
                    f2data: dhcpOptions,
                    f2region: region,
                    dhcpoptionsid: dhcpOptions.DhcpOptionsId
                }]);
            }
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-dhcpoptions-datatable');
    });

    await sdkcall("EC2", "describeVpnConnections", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-vpnconnections-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-vpnconnectionroutes-datatable').deferredBootstrapTable('removeAll');

        data.VpnConnections.forEach(vpnConnection => {
            $('#section-networkingandcontentdelivery-vpc-vpnconnections-datatable').deferredBootstrapTable('append', [{
                f2id: vpnConnection.VpnConnectionId,
                f2type: 'ec2.vpnconnection',
                f2data: vpnConnection,
                f2region: region,
                connectionid: vpnConnection.VpnConnectionId,
                customergatewayid: vpnConnection.CustomerGatewayId,
                vpngatewayid: vpnConnection.VpnGatewayId,
                transitgatewayid: vpnConnection.TransitGatewayId
            }]);

            if (vpnConnection.Routes) {
                vpnConnection.Routes.forEach(route => {
                    route['VpnConnectionId'] = vpnConnection.VpnConnectionId;
                    $('#section-networkingandcontentdelivery-vpc-vpnconnectionroutes-datatable').deferredBootstrapTable('append', [{
                        f2id: route.VpnConnectionId + " " + route.DestinationCidrBlock,
                        f2type: 'ec2.vpnconnectionroute',
                        f2data: route,
                        f2region: region,
                        connectionid: route.VpnConnectionId,
                        destinationcidrblock: route.DestinationCidrBlock
                    }]);
                });
            }
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-vpnconnections-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-vpnconnectionroutes-datatable');
    });

    await sdkcall("EC2", "describeVpcPeeringConnections", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-peeringconnections-datatable').deferredBootstrapTable('removeAll');

        data.VpcPeeringConnections.forEach(peeringConnection => {
            $('#section-networkingandcontentdelivery-vpc-peeringconnections-datatable').deferredBootstrapTable('append', [{
                f2id: peeringConnection.VpcPeeringConnectionId,
                f2type: 'ec2.peeringconnection',
                f2data: peeringConnection,
                f2region: region,
                connectionid: peeringConnection.VpcPeeringConnectionId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-peeringconnections-datatable');
    });

    await sdkcall("EC2", "describeNetworkAcls", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-networkacls-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-networkaclentries-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-subnetnetworkaclassociations-datatable').deferredBootstrapTable('removeAll');

        data.NetworkAcls.forEach(networkAcl => {
            if (!networkAcl.IsDefault || include_default_resources) {
                if (networkAcl.Associations) {
                    networkAcl.Associations.forEach(association => {
                        $('#section-networkingandcontentdelivery-vpc-subnetnetworkaclassociations-datatable').deferredBootstrapTable('append', [{
                            f2id: association.NetworkAclAssociationId,
                            f2type: 'ec2.subnetnetworkaclassociation',
                            f2data: association,
                            f2region: region,
                            networkaclassociationid: association.NetworkAclAssociationId,
                            networkaclid: association.NetworkAclId,
                            subnetid: association.SubnetId
                        }]);
                    });
                }

                if (networkAcl.Entries) {
                    networkAcl.Entries.forEach(entry => {
                        if (entry.RuleNumber < 32767) {
                            entry['NetworkAclId'] = networkAcl.NetworkAclId;
                            var range = "";
                            if (entry.PortRange) {
                                range = entry.PortRange.From;
                                if (entry.PortRange.From != entry.PortRange.To) {
                                    range = entry.PortRange.From + "-" + entry.PortRange.To;
                                }
                            }
                            $('#section-networkingandcontentdelivery-vpc-networkaclentries-datatable').deferredBootstrapTable('append', [{
                                f2id: entry.NetworkAclId + " " + (entry.CidrBlock || "") + " " + (entry.Ipv6CidrBlock || "") + " " + entry.Egress + " " + entry.Protocol + " " + entry.RuleAction + " " + range,
                                f2type: 'ec2.networkaclentry',
                                f2data: entry,
                                f2region: region,
                                networkaclid: entry.NetworkAclId,
                                cidrblocks: (entry.CidrBlock || "") + " " + (entry.Ipv6CidrBlock || ""),
                                egress: entry.Egress,
                                protocol: entry.Protocol,
                                action: entry.RuleAction,
                                range: range
                            }]);
                        }
                    });
                }

                $('#section-networkingandcontentdelivery-vpc-networkacls-datatable').deferredBootstrapTable('append', [{
                    f2id: networkAcl.NetworkAclId,
                    f2type: 'ec2.networkacl',
                    f2data: networkAcl,
                    f2region: region,
                    f2link: 'https://console.aws.amazon.com/vpc/home?region=' + region + '#acls:filter=' + networkAcl.NetworkAclId,
                    networkaclid: networkAcl.NetworkAclId,
                    vpcid: networkAcl.VpcId
                }]);
            }
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-networkacls-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-networkaclentries-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-subnetnetworkaclassociations-datatable');
    });

    await sdkcall("EC2", "describeRouteTables", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-routetables-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-routes-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-virtualprivategatewayroutepropagations-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-subnetroutetableassociations-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-gatewayroutetableassociations-datatable').deferredBootstrapTable('removeAll');

        data.RouteTables.forEach(routeTable => {
            if (routeTable.VpcId != defaultVPC) {
                routeTable.Routes.forEach(route => {
                    if (route.Origin == "CreateRoute") {
                        route['RouteTableId'] = routeTable.RouteTableId;
                        $('#section-networkingandcontentdelivery-vpc-routes-datatable').deferredBootstrapTable('append', [{
                            f2id: (route.DestinationCidrBlock || route.DestinationIpv6CidrBlock || route.DestinationPrefixListId) + " to " + (route.EgressOnlyInternetGatewayId || route.GatewayId || route.InstanceId || route.NatGatewayId || route.TransitGatewayId || route.NetworkInterfaceId || route.VpcPeeringConnectionId),
                            f2type: 'ec2.route',
                            f2data: route,
                            f2region: region,
                            destination: route.DestinationCidrBlock || route.DestinationIpv6CidrBlock || route.DestinationPrefixListId,
                            routetableid: routeTable.RouteTableId,
                            resource: route.EgressOnlyInternetGatewayId || route.GatewayId || route.InstanceId || route.NatGatewayId || route.TransitGatewayId || route.NetworkInterfaceId || route.VpcPeeringConnectionId
                        }]);
                    }
                });
            }

            if (routeTable.Associations) {
                routeTable.Associations.forEach(association => {
                    if (association.SubnetId) {
                        $('#section-networkingandcontentdelivery-vpc-subnetroutetableassociations-datatable').deferredBootstrapTable('append', [{
                            f2id: association.RouteTableAssociationId,
                            f2type: 'ec2.subnetroutetableassociation',
                            f2data: association,
                            f2region: region,
                            routetableassociationid: association.RouteTableAssociationId,
                            routetableid: association.RouteTableId,
                            subnetid: association.SubnetId
                        }]);
                    } else if (association.GatewayId) {
                        $('#section-networkingandcontentdelivery-vpc-gatewayroutetableassociations-datatable').deferredBootstrapTable('append', [{
                            f2id: association.RouteTableAssociationId,
                            f2type: 'ec2.gatewayroutetableassociation',
                            f2data: association,
                            f2region: region,
                            routetableassociationid: association.RouteTableAssociationId,
                            routetableid: association.RouteTableId,
                            gatewayid: association.GatewayId
                        }]);
                    }
                });
            }

            if (routeTable.PropagatingVgws) {
                routeTable.PropagatingVgws.forEach(propagatingVgw => {
                    $('#section-networkingandcontentdelivery-vpc-virtualprivategatewayroutepropagations-datatable').deferredBootstrapTable('append', [{
                        f2id: routeTable.RouteTableId + " " + propagatingVgw.GatewayId,
                        f2type: 'ec2.virtualprivategatewayroutepropagation',
                        f2data: {
                            'VpnGatewayId': propagatingVgw.GatewayId,
                            'RouteTableId': routeTable.RouteTableId
                        },
                        f2region: region,
                        routetable: routeTable.RouteTableId,
                        vpngatewayid: propagatingVgw.GatewayId
                    }]);
                });
            }

            if (routeTable.VpcId != defaultVPC) {
                $('#section-networkingandcontentdelivery-vpc-routetables-datatable').deferredBootstrapTable('append', [{
                    f2id: routeTable.RouteTableId,
                    f2type: 'ec2.routetable',
                    f2data: routeTable,
                    f2region: region,
                    routetableid: routeTable.RouteTableId,
                    vpcid: routeTable.VpcId
                }]);
            }
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-routetables-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-routes-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-virtualprivategatewayroutepropagations-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-subnetroutetableassociations-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-gatewayroutetableassociations-datatable');
    });

    await sdkcall("EC2", "describeTransitGateways", {
        // no params
    }, false).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-transitgateways-datatable').deferredBootstrapTable('removeAll');

        data.TransitGateways.forEach(transitGateway => {
            $('#section-networkingandcontentdelivery-vpc-transitgateways-datatable').deferredBootstrapTable('append', [{
                f2id: transitGateway.TransitGatewayId,
                f2type: 'ec2.transitgateway',
                f2data: transitGateway,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/vpc/home#TransitGateways:transitGatewayId=' + transitGateway.TransitGatewayId,
                id: transitGateway.TransitGatewayId,
                description: transitGateway.Description,
                creationtime: transitGateway.CreationTime
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-transitgateways-datatable');
    }).catch(() => { });

    await sdkcall("EC2", "describeTransitGatewayRouteTables", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpc-transitgatewayroutetables-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-transitgatewayroutes-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-transitgatewayroutetableassociations-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-transitgatewayroutetablepropogations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.TransitGatewayRouteTables.map(transitGatewayRouteTable => {
            $('#section-networkingandcontentdelivery-vpc-transitgatewayroutetables-datatable').deferredBootstrapTable('append', [{
                f2id: transitGatewayRouteTable.TransitGatewayRouteTableId,
                f2type: 'ec2.transitgatewayroutetable',
                f2data: transitGatewayRouteTable,
                f2region: region,
                id: transitGatewayRouteTable.TransitGatewayRouteTableId,
                transitgatewayid: transitGatewayRouteTable.TransitGatewayId,
                creationtime: transitGatewayRouteTable.CreationTime
            }]);

            return Promise.all([
                sdkcall("EC2", "searchTransitGatewayRoutes", {
                    TransitGatewayRouteTableId: transitGatewayRouteTable.TransitGatewayRouteTableId,
                    Filters: [{
                        Name: 'state',
                        Values: ['active', 'blackhole']
                    }]
                }, true).then((data) => {
                    data.Routes.forEach(route => {
                        route['TransitGatewayRouteTableId'] = transitGatewayRouteTable.TransitGatewayRouteTableId;
                        $('#section-networkingandcontentdelivery-vpc-transitgatewayroutes-datatable').deferredBootstrapTable('append', [{
                            f2id: route.DestinationCidrBlock,
                            f2type: 'ec2.transitgatewayroute',
                            f2data: route,
                            f2region: region,
                            destination: route.DestinationCidrBlock,
                            type: route.Type,
                            blackhole: (route.State == "blackhole")
                        }]);
                    });
                }),
                sdkcall("EC2", "getTransitGatewayRouteTableAssociations", {
                    TransitGatewayRouteTableId: transitGatewayRouteTable.TransitGatewayRouteTableId
                }, true).then((data) => {
                    data.Associations.forEach(association => {
                        association['TransitGatewayRouteTableId'] = transitGatewayRouteTable.TransitGatewayRouteTableId;
                        $('#section-networkingandcontentdelivery-vpc-transitgatewayroutetableassociations-datatable').deferredBootstrapTable('append', [{
                            f2id: association.TransitGatewayAttachmentId,
                            f2type: 'ec2.transitgatewayroutetableassociation',
                            f2data: association,
                            f2region: region,
                            attachmentid: association.TransitGatewayAttachmentId,
                            resourceid: association.ResourceId,
                            resourcetype: association.ResourceType
                        }]);
                    });
                }),
                sdkcall("EC2", "getTransitGatewayRouteTablePropagations", {
                    TransitGatewayRouteTableId: transitGatewayRouteTable.TransitGatewayRouteTableId
                }, true).then((data) => {
                    data.TransitGatewayRouteTablePropagations.forEach(transitGatewayRouteTablePropagation => {
                        transitGatewayRouteTablePropagation['TransitGatewayRouteTableId'] = transitGatewayRouteTable.TransitGatewayRouteTableId;
                        $('#section-networkingandcontentdelivery-vpc-transitgatewayroutetablepropogations-datatable').deferredBootstrapTable('append', [{
                            f2id: transitGatewayRouteTablePropagation.TransitGatewayAttachmentId,
                            f2type: 'ec2.transitgatewayroutetablepropogation',
                            f2data: transitGatewayRouteTablePropagation,
                            f2region: region,
                            attachmentid: transitGatewayRouteTablePropagation.TransitGatewayAttachmentId,
                            resourceid: transitGatewayRouteTablePropagation.ResourceId,
                            resourcetype: transitGatewayRouteTablePropagation.ResourceType
                        }]);
                    });
                })
            ]);
        }));

        unblockUI('#section-networkingandcontentdelivery-vpc-transitgatewayroutetables-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-transitgatewayroutes-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-transitgatewayroutetableassociations-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-transitgatewayroutetablepropogations-datatable');
    }).catch(() => { });

    await sdkcall("EC2", "describeTransitGatewayVpcAttachments", {
        // no params
    }, false).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-transitgatewayattachments-datatable').deferredBootstrapTable('removeAll');

        data.TransitGatewayVpcAttachments.forEach(transitGatewayVpcAttachment => {
            $('#section-networkingandcontentdelivery-vpc-transitgatewayattachments-datatable').deferredBootstrapTable('append', [{
                f2id: transitGatewayVpcAttachment.TransitGatewayAttachmentId,
                f2type: 'ec2.transitgatewayattachment',
                f2data: transitGatewayVpcAttachment,
                f2region: region,
                attachmentid: transitGatewayVpcAttachment.TransitGatewayAttachmentId,
                transitgatewayid: transitGatewayVpcAttachment.TransitGatewayId,
                vpcid: transitGatewayVpcAttachment.VpcId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-transitgatewayattachments-datatable');
    }).catch(() => { });

    await sdkcall("EC2", "describeVpcEndpoints", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-vpcendpoints-datatable').deferredBootstrapTable('removeAll');

        data.VpcEndpoints.forEach(vpcEndpoint => {
            $('#section-networkingandcontentdelivery-vpc-vpcendpoints-datatable').deferredBootstrapTable('append', [{
                f2id: vpcEndpoint.VpcEndpointId,
                f2type: 'ec2.vpcendpoint',
                f2data: vpcEndpoint,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/vpc/home#Endpoints:vpcEndpointId=' + vpcEndpoint.VpcEndpointId,
                id: vpcEndpoint.VpcEndpointId,
                endpointtype: vpcEndpoint.VpcEndpointType,
                vpcid: vpcEndpoint.VpcId,
                servicename: vpcEndpoint.ServiceName
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-vpcendpoints-datatable');
    });

    await sdkcall("EC2", "describeVpcEndpointConnectionNotifications", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-vpcendpointconnectionnotifications-datatable').deferredBootstrapTable('removeAll');

        data.ConnectionNotificationSet.forEach(connectionNotification => {
            $('#section-networkingandcontentdelivery-vpc-vpcendpointconnectionnotifications-datatable').deferredBootstrapTable('append', [{
                f2id: connectionNotification.ConnectionNotificationId,
                f2type: 'ec2.vpcendpointconnectionnotification',
                f2data: connectionNotification,
                f2region: region,
                id: connectionNotification.ConnectionNotificationId,
                serviceid: connectionNotification.ServiceId,
                vpcendpointid: connectionNotification.VpcEndpointId,
                topicarn: connectionNotification.ConnectionNotificationArn
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-vpcendpointconnectionnotifications-datatable');
    });

    await sdkcall("EC2", "describeVpcEndpointServices", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpc-vpcendpointservices-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-vpcendpointservicepermissions-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ServiceDetails.map(serviceDetail => {
            if (serviceDetail.ServiceName.startsWith("vpce-svc-")) {
                $('#section-networkingandcontentdelivery-vpc-vpcendpointservices-datatable').deferredBootstrapTable('append', [{
                    f2id: serviceDetail.ServiceName,
                    f2type: 'ec2.vpcendpointservice',
                    f2data: serviceDetail,
                    f2region: region,
                    f2link: 'https://console.aws.amazon.com/vpc/home#EndpointServices:service-id=' + serviceDetail.ServiceName,
                    name: serviceDetail.ServiceName,
                    privatednsname: serviceDetail.PrivateDnsName,
                    acceptancerequired: serviceDetail.AcceptanceRequired
                }]);

                return sdkcall("EC2", "describeVpcEndpointServicePermissions", {
                    ServiceId: serviceDetail.ServiceName
                }, true).then((data) => {
                    $('#section-networkingandcontentdelivery-vpc-vpcendpointservicepermissions-datatable').deferredBootstrapTable('append', [{
                        f2id: serviceDetail.ServiceName,
                        f2type: 'ec2.vpcendpointservicepermission',
                        f2data: {
                            'ServiceId': serviceDetail.ServiceName,
                            'AllowedPrincipals': data.AllowedPrincipals
                        },
                        f2region: region,
                        servicename: serviceDetail.ServiceName,
                        allowedprincipals: data.AllowedPrincipals.join(",")
                    }]);
                });
            }

            return Promise.resolve();
        }));

        unblockUI('#section-networkingandcontentdelivery-vpc-vpcendpointservices-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-vpcendpointservicepermissions-datatable');
    });

    await sdkcall("EC2", "describeNatGateways", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-natgateways-datatable').deferredBootstrapTable('removeAll');

        data.NatGateways.forEach(natGateway => {
            $('#section-networkingandcontentdelivery-vpc-natgateways-datatable').deferredBootstrapTable('append', [{
                f2id: natGateway.NatGatewayId,
                f2type: 'ec2.natgateway',
                f2data: natGateway,
                f2region: region,
                id: natGateway.NatGatewayId,
                creationtime: natGateway.CreateTime,
                subnetid: natGateway.SubnetId,
                vpcid: natGateway.VpcId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-natgateways-datatable');
    });

    await sdkcall("EC2", "describeClientVpnEndpoints", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpc-clientvpnendpoints-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-clientvpnroutes-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-clientvpntargetnetworkassociations-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-clientvpnauthorizationrules-datatable').deferredBootstrapTable('removeAll');

        if (data.ClientVpnEndpoints) {
            await Promise.all(data.ClientVpnEndpoints.map(async (endpoint) => {
                $('#section-networkingandcontentdelivery-vpc-clientvpnendpoints-datatable').deferredBootstrapTable('append', [{
                    f2id: endpoint.ClientVpnEndpointId,
                    f2type: 'ec2.clientvpnendpoint',
                    f2data: endpoint,
                    f2region: region,
                    id: endpoint.ClientVpnEndpointId,
                    description: endpoint.Description,
                    creationtime: endpoint.CreationTime,
                    dnsname: endpoint.DnsName
                }]);

                return Promise.all([
                    sdkcall("EC2", "describeClientVpnRoutes", {
                        ClientVpnEndpointId: endpoint.ClientVpnEndpointId
                    }, true).then((data) => {
                        if (data.Routes) {
                            data.Routes.forEach(route => {
                                $('#section-networkingandcontentdelivery-vpc-clientvpnroutes-datatable').deferredBootstrapTable('append', [{
                                    f2id: route.ClientVpnEndpointId + " Route " + route.DestinationCidr + " " + route.TargetSubnet,
                                    f2type: 'ec2.clientvpnroute',
                                    f2data: route,
                                    f2region: region,
                                    clientvpnendpointid: route.ClientVpnEndpointId,
                                    destinationcidr: route.DestinationCidr,
                                    targetsubnet: route.TargetSubnet,
                                    type: route.Type,
                                    description: route.Description
                                }]);
                            });
                        }
                    }),
                    sdkcall("EC2", "describeClientVpnTargetNetworks", {
                        ClientVpnEndpointId: endpoint.ClientVpnEndpointId
                    }, true).then((data) => {
                        if (data.ClientVpnTargetNetworks) {
                            data.ClientVpnTargetNetworks.forEach(network => {
                                $('#section-networkingandcontentdelivery-vpc-clientvpntargetnetworkassociations-datatable').deferredBootstrapTable('append', [{
                                    f2id: network.AssociationId,
                                    f2type: 'ec2.clientvpntargetnetworkassociation',
                                    f2data: network,
                                    f2region: region,
                                    associationid: network.AssociationId,
                                    vpcid: network.VpcId,
                                    targetnetworkid: network.TargetNetworkId,
                                    clientvpnendpointid: network.ClientVpnEndpointId
                                }]);
                            });
                        }
                    }),
                    sdkcall("EC2", "describeClientVpnAuthorizationRules", {
                        ClientVpnEndpointId: endpoint.ClientVpnEndpointId
                    }, true).then((data) => {
                        if (data.AuthorizationRules) {
                            data.AuthorizationRules.forEach(rule => {
                                $('#section-networkingandcontentdelivery-vpc-clientvpnauthorizationrules-datatable').deferredBootstrapTable('append', [{
                                    f2id: rule.ClientVpnEndpointId + " Rule " + rule.DestinationCidr + " " + rule.GroupId,
                                    f2type: 'ec2.clientvpnauthorizationrule',
                                    f2data: rule,
                                    f2region: region,
                                    clientvpnendpointid: rule.ClientVpnEndpointId,
                                    destinationcidr: rule.DestinationCidr,
                                    groupid: rule.GroupId,
                                    description: rule.Description
                                }]);
                            });
                        }
                    })
                ]);
            }));
        }

        unblockUI('#section-networkingandcontentdelivery-vpc-clientvpnendpoints-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-clientvpnroutes-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-clientvpntargetnetworkassociations-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-clientvpnauthorizationrules-datatable');
    }).catch(() => { });

    await sdkcall("EC2", "describeTrafficMirrorFilters", {
        // no params
    }, false).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-trafficmirrorfilters-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-trafficmirrorfilterrules-datatable').deferredBootstrapTable('removeAll');

        data.TrafficMirrorFilters.forEach(trafficMirrorFilter => {
            $('#section-networkingandcontentdelivery-vpc-trafficmirrorfilters-datatable').deferredBootstrapTable('append', [{
                f2id: trafficMirrorFilter.TrafficMirrorFilterId,
                f2type: 'ec2.trafficmirrorfilter',
                f2data: trafficMirrorFilter,
                f2region: region,
                id: trafficMirrorFilter.TrafficMirrorFilterId,
                description: trafficMirrorFilter.Description
            }]);

            trafficMirrorFilter.IngressFilterRules.forEach(filterRule => {
                filterRule['TrafficDirection'] = "ingress";

                $('#section-networkingandcontentdelivery-vpc-trafficmirrorfilterrules-datatable').deferredBootstrapTable('append', [{
                    f2id: filterRule.TrafficMirrorFilterRuleId,
                    f2type: 'ec2.trafficmirrorfilterrule',
                    f2data: filterRule,
                    f2region: region,
                    id: filterRule.TrafficMirrorFilterRuleId,
                    filterid: trafficMirrorFilter.TrafficMirrorFilterId,
                    description: filterRule.Description,
                    direction: "ingress",
                    rulenumber: filterRule.RuleNumber
                }]);
            });

            trafficMirrorFilter.EgressFilterRules.forEach(filterRule => {
                filterRule['TrafficDirection'] = "egress";

                $('#section-networkingandcontentdelivery-vpc-trafficmirrorfilterrules-datatable').deferredBootstrapTable('append', [{
                    f2id: filterRule.TrafficMirrorFilterRuleId,
                    f2type: 'ec2.trafficmirrorfilterrule',
                    f2data: filterRule,
                    f2region: region,
                    id: filterRule.TrafficMirrorFilterRuleId,
                    filterid: trafficMirrorFilter.TrafficMirrorFilterId,
                    description: filterRule.Description,
                    direction: "egress",
                    rulenumber: filterRule.RuleNumber
                }]);
            });
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-trafficmirrorfilters-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-trafficmirrorfilterrules-datatable');
    }).catch(() => { });

    await sdkcall("EC2", "describeTrafficMirrorSessions", {
        // no params
    }, false).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-trafficmirrorsessions-datatable').deferredBootstrapTable('removeAll');

        data.TrafficMirrorSessions.forEach(trafficMirrorSession => {
            $('#section-networkingandcontentdelivery-vpc-trafficmirrorsessions-datatable').deferredBootstrapTable('append', [{
                f2id: trafficMirrorSession.TrafficMirrorSessionId,
                f2type: 'ec2.trafficmirrorsession',
                f2data: trafficMirrorSession,
                f2region: region,
                id: trafficMirrorSession.TrafficMirrorSessionId,
                description: trafficMirrorSession.Description,
                targetid: trafficMirrorSession.TrafficMirrorTargetId,
                filterid: trafficMirrorSession.TrafficMirrorFilterId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-trafficmirrorsessions-datatable');
    }).catch(() => { });

    await sdkcall("EC2", "describeTrafficMirrorTargets", {
        // no params
    }, false).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-trafficmirrortargets-datatable').deferredBootstrapTable('removeAll');

        data.TrafficMirrorTargets.forEach(trafficMirrorTarget => {
            $('#section-networkingandcontentdelivery-vpc-trafficmirrortargets-datatable').deferredBootstrapTable('append', [{
                f2id: trafficMirrorTarget.TrafficMirrorSessionId,
                f2type: 'ec2.trafficmirrortarget',
                f2data: trafficMirrorTarget,
                f2region: region,
                id: trafficMirrorTarget.TrafficMirrorSessionId,
                description: trafficMirrorTarget.Description,
                target: trafficMirrorTarget.NetworkInterfaceId || trafficMirrorTarget.NetworkLoadBalancerArn
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-trafficmirrortargets-datatable');
    }).catch(() => { });

    await sdkcall("EC2", "describeLocalGatewayRouteTables", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpc-localgatewayroutes-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.LocalGatewayRouteTables.map(async (localgatewayroutetable) => {
            await sdkcall("EC2", "searchLocalGatewayRoutes", {
                LocalGatewayRouteTableId: localgatewayroutetable.LocalGatewayRouteTableId,
                Filters: []
            }, false).then((data) => {
                data.Routes.forEach(route => {
                    $('#section-networkingandcontentdelivery-vpc-localgatewayroutes-datatable').deferredBootstrapTable('append', [{
                        f2id: route.DestinationCidrBlock + " " + route.LocalGatewayVirtualInterfaceGroupId + " " + route.LocalGatewayRouteTableId,
                        f2type: 'ec2.localgatewayroute',
                        f2data: route,
                        f2region: region,
                        destinationcidrblock: route.DestinationCidrBlock,
                        virtualinterfacegroupid: route.LocalGatewayVirtualInterfaceGroupId,
                        routetableid: route.LocalGatewayRouteTableId
                    }]);
                });
            });
        }));

        unblockUI('#section-networkingandcontentdelivery-vpc-localgatewayroutes-datatable');
    }).catch(() => { });
            
    await sdkcall("EC2", "describeLocalGatewayRouteTableVpcAssociations", {
        // no params
    }, false).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-localgatewayroutetablevpcassociations-datatable').deferredBootstrapTable('removeAll');

        data.LocalGatewayRouteTableVpcAssociations.forEach(association => {
            $('#section-networkingandcontentdelivery-vpc-localgatewayroutetablevpcassociations-datatable').deferredBootstrapTable('append', [{
                f2id: association.LocalGatewayRouteTableVpcAssociationId,
                f2type: 'ec2.localgatewayroutetablevpcassociation',
                f2data: association,
                f2region: region,
                vpcid: association.VpcId,
                routetableid: association.LocalGatewayRouteTableId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-localgatewayroutetablevpcassociations-datatable');
    }).catch(() => { });
            
    await sdkcall("NetworkManager", "describeGlobalNetworks", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpc-networkmanagerglobalnetworks-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-networkmanagersites-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-networkmanagerdevices-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-networkmanagerlinks-datatable').deferredBootstrapTable('removeAll');

        data.GlobalNetworks.forEach(async (globalnetwork) => {
            $('#section-networkingandcontentdelivery-vpc-networkmanagerglobalnetworks-datatable').deferredBootstrapTable('append', [{
                f2id: globalnetwork.GlobalNetworkArn,
                f2type: 'ec2.networkmanagerglobalnetwork',
                f2data: globalnetwork,
                f2region: region,
                id: globalnetwork.GlobalNetworkId,
                description: globalnetwork.Description
            }]);
            
            await Promise.all([
                sdkcall("NetworkManager", "getSites", {
                    GlobalNetworkId: globalnetwork.GlobalNetworkId
                }, false).then((data) => {
                    data.Sites.forEach(site => {
                        $('#section-networkingandcontentdelivery-vpc-networkmanagersites-datatable').deferredBootstrapTable('append', [{
                            f2id: site.SiteArn,
                            f2type: 'ec2.networkmanagersite',
                            f2data: site,
                            f2region: region,
                            id: site.SiteId,
                            globalnetworkid: site.GlobalNetworkId,
                            description: site.Description
                        }]);
                    });
                }).catch(() => { }),
                sdkcall("NetworkManager", "getDevices", {
                    GlobalNetworkId: globalnetwork.GlobalNetworkId
                }, false).then((data) => {
                    data.Devices.forEach(device => {
                        $('#section-networkingandcontentdelivery-vpc-networkmanagerdevices-datatable').deferredBootstrapTable('append', [{
                            f2id: device.DeviceArn,
                            f2type: 'ec2.networkmanagerdevice',
                            f2data: device,
                            f2region: region,
                            id: device.DeviceId,
                            globalnetworkid: device.GlobalNetworkId,
                            description: device.Description,
                            type: device.Type
                        }]);
                    });
                }).catch(() => { }),
                sdkcall("NetworkManager", "getLinks", {
                    GlobalNetworkId: globalnetwork.GlobalNetworkId
                }, false).then((data) => {
                    data.Links.forEach(link => {
                        $('#section-networkingandcontentdelivery-vpc-networkmanagerlinks-datatable').deferredBootstrapTable('append', [{
                            f2id: link.LinkArn,
                            f2type: 'ec2.networkmanagerlink',
                            f2data: link,
                            f2region: region,
                            id: link.LinkId,
                            globalnetworkid: link.GlobalNetworkId,
                            description: link.Description,
                            type: link.Type
                        }]);
                    });
                }).catch(() => { }),
                sdkcall("NetworkManager", "getLinkAssociations", {
                    GlobalNetworkId: globalnetwork.GlobalNetworkId
                }, false).then((data) => {
                    data.LinkAssociations.forEach(linkassociation => {
                        $('#section-networkingandcontentdelivery-vpc-networkmanagerlinkassociations-datatable').deferredBootstrapTable('append', [{
                            f2id: "Network Manager Link Association " + linkassociation.LinkId + " " + linkassociation.DeviceId + " " + linkassociation.GlobalNetworkId,
                            f2type: 'ec2.networkmanagerlinkassociation',
                            f2data: linkassociation,
                            f2region: region,
                            linkid: linkassociation.LinkId,
                            globalnetworkid: linkassociation.GlobalNetworkId,
                            deviceid: linkassociation.DeviceId
                        }]);
                    });
                }).catch(() => { }),
                sdkcall("NetworkManager", "getCustomerGatewayAssociations", {
                    GlobalNetworkId: globalnetwork.GlobalNetworkId
                }, false).then((data) => {
                    data.CustomerGatewayAssociations.forEach(customergatewayassociation => {
                        $('#section-networkingandcontentdelivery-vpc-networkmanagercustomergatewayassociations-datatable').deferredBootstrapTable('append', [{
                            f2id: "Network Manager Customer Gateway Association " + customergatewayassociation.CustomerGatewayArn + " " + customergatewayassociation.LinkId + " " + customergatewayassociation.DeviceId + " " + customergatewayassociation.GlobalNetworkId,
                            f2type: 'ec2.networkmanagercustomergatewayassociation',
                            f2data: customergatewayassociation,
                            f2region: region,
                            customergatewayarn: customergatewayassociation.CustomerGatewayArn,
                            linkid: customergatewayassociation.LinkId,
                            globalnetworkid: customergatewayassociation.GlobalNetworkId,
                            deviceid: customergatewayassociation.DeviceId
                        }]);
                    });
                }).catch(() => { }),
                sdkcall("NetworkManager", "getTransitGatewayRegistrations", {
                    GlobalNetworkId: globalnetwork.GlobalNetworkId
                }, false).then((data) => {
                    data.TransitGatewayRegistrations.forEach(transitgatewayregistration => {
                        $('#section-networkingandcontentdelivery-vpc-networkmanagertransitgatewayregistrations-datatable').deferredBootstrapTable('append', [{
                            f2id: "Network Manager Transit Gateway Registration " + transitgatewayregistration.GlobalNetworkId + " " + transitgatewayregistration.TransitGatewayArn,
                            f2type: 'ec2.networkmanagertransitgatewayregistration',
                            f2data: transitgatewayregistration,
                            f2region: region,
                            transitgatewayarn: transitgatewayregistration.TransitGatewayArn,
                            globalnetworkid: transitgatewayregistration.GlobalNetworkId
                        }]);
                    });
                }).catch(() => { })
            ]);
        });
    }).catch(() => { });
            
    await sdkcall("EC2", "describeManagedPrefixLists", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpc-prefixlists-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.PrefixLists.map(prefixlist => {
            return sdkcall("EC2", "getManagedPrefixListEntries", {
                PrefixListId: prefixlist.PrefixListId
            }, false).then((prefixentries) => {
                prefixlist['Entries'] = prefixentries['Entries'];

                if (!prefixlist.PrefixListName.startsWith("com.amazonaws.")) {
                    $('#section-networkingandcontentdelivery-vpc-prefixlists-datatable').deferredBootstrapTable('append', [{
                        f2id: prefixlist.PrefixListArn,
                        f2type: 'ec2.prefixlist',
                        f2data: prefixlist,
                        f2region: region,
                        id: prefixlist.PrefixListId,
                        name: prefixlist.PrefixListName,
                        addressfamily: prefixlist.AddressFamily
                    }]);
                }
            });
        }));

        unblockUI('#section-networkingandcontentdelivery-vpc-prefixlists-datatable');
    }).catch(() => { });
            
    await sdkcall("EC2", "describeCarrierGateways", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpc-carriergateways-datatable').deferredBootstrapTable('removeAll');

        data.CarrierGateways.forEach(carrierGateway => {
            $('#section-networkingandcontentdelivery-vpc-carriergateways-datatable').deferredBootstrapTable('append', [{
                f2id: carrierGateway.CarrierGatewayId,
                f2type: 'ec2.carriergateway',
                f2data: carrierGateway,
                f2region: region,
                id: carrierGateway.CarrierGatewayId,
                vpcid: carrierGateway.VpcId
            }]);
        });
    }).catch(() => { });
            
    await sdkcall("NetworkFirewall", "listFirewalls", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpc-networkfirewalls-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-networkfirewallloggingconfigurations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Firewalls.map(async (firewall) => {
            await sdkcall("NetworkFirewall", "describeFirewall", {
                FirewallName: firewall.FirewallName
            }, false).then((data) => {
                $('#section-networkingandcontentdelivery-vpc-networkfirewalls-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Firewall.FirewallArn,
                    f2type: 'ec2.networkfirewall',
                    f2data: data,
                    f2region: region,
                    name: data.Firewall.FirewallName,
                    description: data.Firewall.Description,
                    vpcid: data.Firewall.VpcId
                }]);
            });

            return sdkcall("NetworkFirewall", "describeLoggingConfiguration", {
                FirewallName: firewall.FirewallName
            }, false).then((data) => {
                $('#section-networkingandcontentdelivery-vpc-networkfirewallloggingconfigurations-datatable').deferredBootstrapTable('append', [{
                    f2id: data.FirewallArn + " Logging Config",
                    f2type: 'ec2.networkfirewallloggingconfiguration',
                    f2data: data,
                    f2region: region,
                    firewallarn: data.FirewallArn
                }]);
            });
        }));
    }).catch(() => { });
            
    await sdkcall("NetworkFirewall", "listFirewallPolicies", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpc-networkfirewallpolicies-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.FirewallPolicies.map(firewallpolicy => {
            return sdkcall("NetworkFirewall", "describeFirewallPolicy", {
                FirewallPolicyName: firewallpolicy.Name
            }, false).then((data) => {
                $('#section-networkingandcontentdelivery-vpc-networkfirewallpolicies-datatable').deferredBootstrapTable('append', [{
                    f2id: data.FirewallPolicyResponse.FirewallPolicyArn,
                    f2type: 'ec2.networkfirewallpolicy',
                    f2data: data,
                    f2region: region,
                    name: data.FirewallPolicyResponse.FirewallPolicyName,
                    description: data.FirewallPolicyResponse.Description
                }]);
            });
        }));
    }).catch(() => { });
            
    await sdkcall("NetworkFirewall", "listRuleGroups", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpc-networkfirewallrulegroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.RuleGroups.map(rulegroup => {
            return sdkcall("NetworkFirewall", "describeRuleGroup", {
                RuleGroupArn: rulegroup.Arn
            }, false).then((data) => {
                $('#section-networkingandcontentdelivery-vpc-networkfirewallrulegroups-datatable').deferredBootstrapTable('append', [{
                    f2id: data.RuleGroupResponse.RuleGroupArn,
                    f2type: 'ec2.networkfirewallrulegroup',
                    f2data: data,
                    f2region: region,
                    name: data.RuleGroupResponse.RuleGroupName,
                    description: data.RuleGroupResponse.Description,
                    type: data.RuleGroupResponse.Type
                }]);
            });
        }));
    }).catch(() => { });
            
    await sdkcall("EC2", "describeNetworkInsightsPaths", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpc-networkinsightspaths-datatable').deferredBootstrapTable('removeAll');

        data.NetworkInsightsPaths.forEach(networkinsightspath => {
            $('#section-networkingandcontentdelivery-vpc-networkinsightspaths-datatable').deferredBootstrapTable('append', [{
                f2id: networkinsightspath.NetworkInsightsPathArn,
                f2type: 'ec2.networkinsightspath',
                f2data: networkinsightspath,
                f2region: region,
                id: networkinsightspath.NetworkInsightsPathId,
                source: networkinsightspath.Source || networkinsightspath.SourceIp,
                destination: networkinsightspath.Destination || networkinsightspath.DestinationIp
            }]);
        });
    }).catch(() => { });
            
    await sdkcall("EC2", "describeNetworkInsightsAnalyses", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpc-networkinsightsanalyses-datatable').deferredBootstrapTable('removeAll');

        data.NetworkInsightsAnalyses.forEach(networkinsightsanalysis => {
            $('#section-networkingandcontentdelivery-vpc-networkinsightsanalyses-datatable').deferredBootstrapTable('append', [{
                f2id: networkinsightsanalysis.NetworkInsightsAnalysisArn,
                f2type: 'ec2.networkinsightsanalysis',
                f2data: networkinsightsanalysis,
                f2region: region,
                id: networkinsightsanalysis.NetworkInsightsAnalysisId,
                pathid: networkinsightsanalysis.NetworkInsightsPathId
            }]);
        });
    }).catch(() => { });
            
    await sdkcall("EC2", "describeTransitGatewayMulticastDomains", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpc-transitgatewaymulticastdomains-datatable').deferredBootstrapTable('removeAll');

        data.TransitGatewayMulticastDomainIds.forEach(async (id) => {
            $('#section-networkingandcontentdelivery-vpc-transitgatewaymulticastdomains-datatable').deferredBootstrapTable('append', [{
                f2id: id,
                f2type: 'ec2.transitgatewaymulticastdomain',
                f2data: {
                    'TransitGatewayId': id
                },
                f2region: region,
                id: id
            }]);
            
            await sdkcall("EC2", "getTransitGatewayMulticastDomainAssociations", {
                TransitGatewayMulticastDomainId: id
            }, false).then(async (data) => {
                $('#section-networkingandcontentdelivery-vpc-transitgatewaymulticastdomainassociations-datatable').deferredBootstrapTable('removeAll');
        
                data.MulticastDomainAssociations.forEach(association => {
                    association['TransitGatewayMulticastDomainId'] = id;

                    $('#section-networkingandcontentdelivery-vpc-transitgatewaymulticastdomainassociations-datatable').deferredBootstrapTable('append', [{
                        f2id: association.TransitGatewayAttachmentId,
                        f2type: 'ec2.transitgatewaymulticastdomainassociation',
                        f2data: association,
                        f2region: region,
                        attachmentid: association.TransitGatewayAttachmentId,
                        domainid: id,
                        subnetid: (association.Subnet ? association.Subnet.SubnetId : null)
                    }]);
                });
            }).catch(() => { });

            await sdkcall("EC2", "searchTransitGatewayMulticastGroups", {
                TransitGatewayMulticastDomainId: id
            }, false).then(async (data) => {
                $('#section-networkingandcontentdelivery-vpc-transitgatewaymulticastgroupmembers-datatable').deferredBootstrapTable('removeAll');
                $('#section-networkingandcontentdelivery-vpc-transitgatewaymulticastgroupsources-datatable').deferredBootstrapTable('removeAll');
        
                data.MulticastGroups.forEach(multicastgroup => {
                    multicastgroup['TransitGatewayMulticastDomainId'] = id;

                    if (multicastgroup.GroupSource) {
                        $('#section-networkingandcontentdelivery-vpc-transitgatewaymulticastgroupsources-datatable').deferredBootstrapTable('append', [{
                            f2id: multicastgroup.TransitGatewayAttachmentId + " " + multicastgroup.ResourceId,
                            f2type: 'ec2.transitgatewaymulticastgroupsource',
                            f2data: multicastgroup,
                            f2region: region,
                            attachmentid: multicastgroup.TransitGatewayAttachmentId,
                            domainid: id,
                            networkinterfaceid: multicastgroup.NetworkInterfaceId,
                            groupipaddress: multicastgroup.GroupIpAddress
                        }]);
                    }

                    if (multicastgroup.GroupMember) {
                        $('#section-networkingandcontentdelivery-vpc-transitgatewaymulticastgroupmembers-datatable').deferredBootstrapTable('append', [{
                            f2id: multicastgroup.TransitGatewayAttachmentId + " " + multicastgroup.ResourceId,
                            f2type: 'ec2.transitgatewaymulticastgroupmember',
                            f2data: multicastgroup,
                            f2region: region,
                            attachmentid: multicastgroup.TransitGatewayAttachmentId,
                            domainid: id,
                            networkinterfaceid: multicastgroup.NetworkInterfaceId,
                            groupipaddress: multicastgroup.GroupIpAddress
                        }]);
                    }
                });
            }).catch(() => { });
        });
    }).catch(() => { });
            
    await sdkcall("EC2", "describeTransitGatewayConnects", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpc-transitgatewayconnects-datatable').deferredBootstrapTable('removeAll');

        data.TransitGatewayConnects.forEach(connect => {
            $('#section-networkingandcontentdelivery-vpc-transitgatewayconnects-datatable').deferredBootstrapTable('append', [{
                f2id: connect.TransitGatewayAttachmentId + " Connect " + connect.TransportTransitGatewayAttachmentId,
                f2type: 'ec2.transitgatewayconnect',
                f2data: connect,
                f2region: region,
                attachmentid: connect.TransitGatewayAttachmentId
            }]);
        });
    }).catch(() => { });
            
    await sdkcall("EC2", "describeTransitGatewayPeeringAttachments", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpc-transitgatewaypeeringattachments-datatable').deferredBootstrapTable('removeAll');

        data.TransitGatewayPeeringAttachments.forEach(peeringattachment => {
            $('#section-networkingandcontentdelivery-vpc-transitgatewaypeeringattachments-datatable').deferredBootstrapTable('append', [{
                f2id: peeringattachment.TransitGatewayAttachmentId + " Peering Attachment " + peeringattachment.RequesterTgwInfo.OwnerId + " to " + peeringattachment.AccepterTgwInfo.OwnerId,
                f2type: 'ec2.transitgatewaypeeringattachment',
                f2data: peeringattachment,
                f2region: region,
                attachmentid: peeringattachment.TransitGatewayAttachmentId,
                requesteraccount: peeringattachment.RequesterTgwInfo.OwnerId,
                accepteraccount: peeringattachment.AccepterTgwInfo.OwnerId
            }]);
        });
    }).catch(() => { });

    unblockUI('#section-networkingandcontentdelivery-vpc-vpcs-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-vpccidrblocks-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-dhcpoptionsassociations-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-localgatewayroutes-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-localgatewayroutetablevpcassociations-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-networkmanagerglobalnetworks-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-networkmanagersites-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-networkmanagerdevices-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-networkmanagerlinks-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-networkmanagerlinkassociations-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-networkmanagercustomergatewayassociations-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-networkmanagertransitgatewayregistrations-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-prefixlists-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-carriergateways-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-networkfirewalls-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-networkfirewallpolicies-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-networkfirewallloggingconfigurations-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-networkfirewallrulegroups-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-networkinsightspaths-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-networkinsightsanalyses-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-transitgatewaymulticastdomains-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-transitgatewaymulticastdomainassociations-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-transitgatewaymulticastgroupmembers-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-transitgatewaymulticastgroupsources-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-transitgatewayconnects-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-transitgatewaypeeringattachments-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "ec2.vpc") {
        reqParams.cfn['CidrBlock'] = obj.data.CidrBlock;
        reqParams.tf['cidr_block'] = obj.data.CidrBlock;
        reqParams.cfn['EnableDnsSupport'] = obj.data.EnableDnsSupport;
        reqParams.tf['enable_dns_support'] = obj.data.EnableDnsSupport;
        reqParams.cfn['EnableDnsHostnames'] = obj.data.EnableDnsHostnames;
        reqParams.tf['enable_dns_hostnames'] = obj.data.EnableDnsHostnames;
        reqParams.cfn['InstanceTenancy'] = obj.data.InstanceTenancy;
        reqParams.tf['instance_tenancy'] = obj.data.InstanceTenancy;
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }

        var attrCidrBlockAssociations = null;
        var attrIpv6CidrBlockAssociations = null;
        /*
        var attrCidrBlockAssociations = [];
        obj.data.CidrBlockAssociationSet.forEach(cidrBlockAssociation => {
            if (obj.data.CidrBlock != cidrBlockAssociation.CidrBlock) {
                attrCidrBlockAssociations.push(cidrBlockAssociation.AssociationId);
            }
        });

        var attrIpv6CidrBlockAssociations = [];
        obj.data.Ipv6CidrBlockAssociationSet.forEach(ipv6CidrBlockAssociation => {
            attrIpv6CidrBlockAssociations.push(ipv6CidrBlockAssociation.Ipv6CidrBlock);
        });
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::VPC'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::VPC',
            'terraformType': 'aws_vpc',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.VpcId,
                'GetAtt': {
                    'CidrBlock': obj.data.CidrBlock
                    //'CidrBlockAssociations': attrCidrBlockAssociations,
                    //'Ipv6CidrBlocks': attrIpv6CidrBlockAssociations
                    /*
                    TODO:
                    DefaultNetworkAcl
                    DefaultSecurityGroup
                    */
                },
                'Terraform': {
                    'id': obj.data.VpcId,
                    'cidr_block': obj.data.CidrBlock
                },
                'Import': {
                    'VpcId': obj.data.VpcId
                }
            }
        });
    } else if (obj.type == "ec2.vpccidrblock") {
        reqParams.cfn['CidrBlock'] = obj.data.CidrBlock;
        reqParams.tf['cidr_block'] = obj.data.CidrBlock;
        reqParams.cfn['VpcId'] = obj.data.VpcId;
        reqParams.tf['vpc_id'] = obj.data.VpcId;
        reqParams.cfn['Ipv6CidrBlock'] = obj.data.Ipv6CidrBlock;
        reqParams.cfn['Ipv6Pool'] = obj.data.Ipv6Pool;

        /*
        TODO:
        AmazonProvidedIpv6CidrBlock: Boolean
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::VPCCidrBlock'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::VPCCidrBlock',
            'terraformType': 'aws_vpc_ipv4_cidr_block_association',
            'options': reqParams
        });
    } else if (obj.type == "ec2.dhcpoptionsassociation") {
        reqParams.cfn['DhcpOptionsId'] = obj.data.DhcpOptionsId;
        reqParams.tf['dhcp_options_id'] = obj.data.DhcpOptionsId;
        reqParams.cfn['VpcId'] = obj.data.VpcId;
        reqParams.tf['vpc_id'] = obj.data.VpcId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::VPCDHCPOptionsAssociation'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::VPCDHCPOptionsAssociation',
            'terraformType': 'aws_vpc_dhcp_options_association',
            'options': reqParams
        });
    } else if (obj.type == "ec2.egressonlyinternetgateway") {
        if (obj.data.Attachments) {
            reqParams.cfn['VpcId'] = obj.data.Attachments[0].VpcId;
            reqParams.tf['vpc_id'] = obj.data.Attachments[0].VpcId;
        }

        // TODO: Check for multiple

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::EgressOnlyInternetGateway'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::EgressOnlyInternetGateway',
            'terraformType': 'aws_egress_only_internet_gateway',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.EgressOnlyInternetGatewayId
            }
        });
    } else if (obj.type == "ec2.internetgateway") {
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }
        if (obj.data.Attachments) {
            reqParams.tf['vpc_id'] = obj.data.Attachments[0].VpcId;
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::InternetGateway'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::InternetGateway',
            'terraformType': 'aws_internet_gateway',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.InternetGatewayId,
                'Import': {
                    'InternetGatewayId': obj.data.InternetGatewayId
                }
            }
        });
    } else if (obj.type == "ec2.gatewayattachment") {
        if (obj.data.InternetGatewayId) {
            reqParams.cfn['InternetGatewayId'] = obj.data.InternetGatewayId;
            reqParams.cfn['VpcId'] = obj.data.VpcId;

            tracked_resources.push({
                'obj': obj,
                'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::VPCGatewayAttachment'),
                'region': obj.region,
                'service': 'ec2',
                'type': 'AWS::EC2::VPCGatewayAttachment',
                'options': reqParams
            });
        } else {
            reqParams.cfn['VpnGatewayId'] = obj.data.VpnGatewayId;
            reqParams.tf['vpn_gateway_id'] = obj.data.VpnGatewayId;
            reqParams.cfn['VpcId'] = obj.data.VpcId;
            reqParams.tf['vpc_id'] = obj.data.VpcId;

            tracked_resources.push({
                'obj': obj,
                'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::VPCGatewayAttachment'),
                'region': obj.region,
                'service': 'ec2',
                'type': 'AWS::EC2::VPCGatewayAttachment',
                'terraformType': 'aws_vpn_gateway_attachment',
                'options': reqParams
            });
        }
    } else if (obj.type == "ec2.dhcpoptions") {
        obj.data.DhcpConfigurations.forEach(dhcpConfiguration => {
            if (dhcpConfiguration.Key == "domain-name") {
                reqParams.cfn['DomainName'] = dhcpConfiguration.Values[0].Value;
                reqParams.tf['domain_name'] = dhcpConfiguration.Values[0].Value;
            } else if (dhcpConfiguration.Key == "domain-name-servers") {
                reqParams.cfn['DomainNameServers'] = [];
                reqParams.tf['domain_name_servers'] = [];
                if (dhcpConfiguration.Values[0].Value != "AmazonProvidedDNS") {
                    dhcpConfiguration.Values.forEach(dhcpConfigurationValue => {
                        reqParams.cfn['DomainNameServers'].push(dhcpConfigurationValue['Value']);
                        reqParams.tf['domain_name_servers'].push(dhcpConfigurationValue['Value']);
                    });
                }
            }
        });
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }

        /*
        TODO:
        NetbiosNameServers:
            - String
        NetbiosNodeType: Number
        NtpServers:
            - String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::DHCPOptions'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::DHCPOptions',
            'terraformType': 'aws_vpc_dhcp_options',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.DhcpOptionsId
            }
        });
    } else if (obj.type == "ec2.vpnconnection") {
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.tf['type'] = obj.data.Type;
        if (obj.data.Options) {
            reqParams.cfn['StaticRoutesOnly'] = obj.data.Options.StaticRoutesOnly;
            reqParams.tf['static_routes_only'] = obj.data.Options.StaticRoutesOnly;
        }
        reqParams.cfn['CustomerGatewayId'] = obj.data.CustomerGatewayId;
        reqParams.tf['customer_gateway_id'] = obj.data.CustomerGatewayId;
        reqParams.cfn['VpnGatewayId'] = obj.data.VpnGatewayId;
        reqParams.tf['vpn_gateway_id'] = obj.data.VpnGatewayId;
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }

        /*
        TODO:
        VpnTunnelOptionsSpecifications: 
            - VpnTunnelOptionsSpecification
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::VPNConnection'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::VPNConnection',
            'terraformType': 'aws_vpn_connection',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.VpnConnectionId
            }
        });
    } else if (obj.type == "ec2.vpnconnectionroute") {
        reqParams.cfn['VpnConnectionId'] = obj.data.VpnConnectionId;
        reqParams.tf['vpn_connection_id'] = obj.data.VpnConnectionId;
        reqParams.cfn['DestinationCidrBlock'] = obj.data.DestinationCidrBlock;
        reqParams.tf['destination_cidr_block'] = obj.data.DestinationCidrBlock;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::VPNConnectionRoute'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::VPNConnectionRoute',
            'terraformType': 'aws_vpn_connection_route',
            'options': reqParams
        });
    } else if (obj.type == "ec2.virtualprivategatewayroutepropagation") {
        reqParams.cfn['VpnGatewayId'] = obj.data.VpnGatewayId;
        reqParams.tf['vpn_gateway_id'] = obj.data.VpnGatewayId;
        reqParams.cfn['RouteTableIds'] = [obj.data.RouteTableId];
        reqParams.tf['route_table_id'] = obj.data.RouteTableId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::VPNGatewayRoutePropagation'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::VPNGatewayRoutePropagation',
            'terraformType': 'aws_vpn_gateway_route_propagation',
            'options': reqParams
        });
    } else if (obj.type == "ec2.peeringconnection") {
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }
        reqParams.cfn['PeerVpcId'] = obj.data.AccepterVpcInfo.VpcId;
        reqParams.tf['peer_vpc_id'] = obj.data.AccepterVpcInfo.VpcId;
        reqParams.cfn['PeerOwnerId'] = obj.data.AccepterVpcInfo.OwnerId;
        reqParams.tf['peer_owner_id'] = obj.data.AccepterVpcInfo.OwnerId;
        reqParams.cfn['PeerRegion'] = obj.data.AccepterVpcInfo.Region;
        reqParams.tf['peer_region'] = obj.data.AccepterVpcInfo.Region;
        reqParams.cfn['VpcId'] = obj.data.RequesterVpcInfo.VpcId;
        reqParams.tf['vpc_id'] = obj.data.RequesterVpcInfo.VpcId;

        /*
        TODO:
        PeerRoleArn:  String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::VPCPeeringConnection'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::VPCPeeringConnection',
            'terraformType': 'aws_vpc_peering_connection',
            'options': reqParams
        });
    } else if (obj.type == "ec2.routetable") {
        reqParams.cfn['VpcId'] = obj.data.VpcId;
        reqParams.tf['vpc_id'] = obj.data.VpcId;
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::RouteTable'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::RouteTable',
            'terraformType': 'aws_route_table',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.RouteTableId,
                'Import': {
                    'RouteTableId': obj.data.RouteTableId
                }
            }
        });
    } else if (obj.type == "ec2.networkacl") {
        reqParams.cfn['VpcId'] = obj.data.VpcId;
        reqParams.tf['vpc_id'] = obj.data.VpcId;
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::NetworkAcl'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::NetworkAcl',
            'terraformType': 'aws_network_acl',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.NetworkAclId,
                'Import': {
                    'NetworkAclId': obj.data.NetworkAclId
                }
            }
        });
    } else if (obj.type == "ec2.networkaclentry") {
        reqParams.cfn['CidrBlock'] = obj.data.CidrBlock;
        reqParams.tf['cidr_block'] = obj.data.CidrBlock;
        reqParams.cfn['Egress'] = obj.data.Egress;
        reqParams.tf['egress'] = obj.data.Egress;
        reqParams.cfn['Icmp'] = obj.data.IcmpTypeCode;
        reqParams.tf['icmp_type'] = obj.data.IcmpTypeCode;
        reqParams.tf['icmp_code'] = obj.data.IcmpTypeCode;
        reqParams.cfn['Ipv6CidrBlock'] = obj.data.Ipv6CidrBlock;
        reqParams.tf['ipv6_cidr_block'] = obj.data.Ipv6CidrBlock;
        reqParams.cfn['NetworkAclId'] = obj.data.NetworkAclId;
        reqParams.tf['network_acl_id'] = obj.data.NetworkAclId;
        reqParams.cfn['PortRange'] = obj.data.PortRange;
        if (obj.data.PortRange) {
            reqParams.tf['from_port'] = obj.data.PortRange.FromPort;
            reqParams.tf['to_port'] = obj.data.PortRange.ToPort;
        }
        if (obj.data.Protocol) {
            reqParams.cfn['Protocol'] = parseInt(obj.data.Protocol);
            reqParams.tf['protocol'] = parseInt(obj.data.Protocol);
        }
        reqParams.cfn['RuleAction'] = obj.data.RuleAction;
        reqParams.tf['rule_action'] = obj.data.RuleAction;
        reqParams.cfn['RuleNumber'] = obj.data.RuleNumber;
        reqParams.tf['rule_number'] = obj.data.RuleNumber;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::NetworkAclEntry'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::NetworkAclEntry',
            'terraformType': 'aws_network_acl_rule',
            'options': reqParams
        });
    } else if (obj.type == "ec2.vpngateway") {
        reqParams.cfn['AmazonSideAsn'] = obj.data.AmazonSideAsn;
        reqParams.tf['amazon_side_asn'] = obj.data.AmazonSideAsn;
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }
        if (obj.data.VpcAttachments && obj.data.VpcAttachments[0]) {
            reqParams.tf['vpc_id'] = obj.data.VpcAttachments[0].VpcId
        }
        reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::VPNGateway'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::VPNGateway',
            'terraformType': 'aws_vpn_gateway',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.VpnGatewayId
            }
        });
    } else if (obj.type == "ec2.customergateway") {
        if (obj.data.BgpAsn) {
            reqParams.cfn['BgpAsn'] = parseInt(obj.data.BgpAsn);
            reqParams.tf['bgp_asn'] = parseInt(obj.data.BgpAsn);
        }
        reqParams.cfn['IpAddress'] = obj.data.IpAddress;
        reqParams.tf['ip_address'] = obj.data.IpAddress;
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.tf['type'] = obj.data.Type;
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::CustomerGateway'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::CustomerGateway',
            'terraformType': 'aws_customer_gateway',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.CustomerGatewayId
            }
        });
    } else if (obj.type == "ec2.subnet") {
        reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
        reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;
        reqParams.cfn['CidrBlock'] = obj.data.CidrBlock;
        reqParams.tf['cidr_block'] = obj.data.CidrBlock;
        reqParams.cfn['VpcId'] = obj.data.VpcId;
        reqParams.tf['vpc_id'] = obj.data.VpcId;
        reqParams.cfn['MapPublicIpOnLaunch'] = obj.data.MapPublicIpOnLaunch;
        reqParams.tf['map_public_ip_on_launch'] = obj.data.MapPublicIpOnLaunch;
        if (obj.data.AssignIpv6AddressOnCreation) {
            reqParams.cfn['AssignIpv6AddressOnCreation'] = obj.data.AssignIpv6AddressOnCreation;
            reqParams.tf['assign_ipv6_address_on_creation'] = obj.data.AssignIpv6AddressOnCreation;
            if (obj.data.Ipv6CidrBlockAssociationSet) {
                reqParams.cfn['Ipv6CidrBlock'] = obj.data.Ipv6CidrBlockAssociationSet[0].Ipv6CidrBlock;
                reqParams.tf['ipv6_cidr_block'] = obj.data.Ipv6CidrBlockAssociationSet[0].Ipv6CidrBlock;
            }
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::Subnet'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::Subnet',
            'terraformType': 'aws_subnet',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.SubnetId,
                'GetAtt': {
                    'AvailabilityZone': obj.data.AvailabilityZone,
                    'VpcId': obj.data.VpcId
                },
                'Import': {
                    'SubnetId': obj.data.SubnetId
                }
            }
        });
    } else if (obj.type == "ec2.elasticip") {
        reqParams.cfn['Domain'] = obj.data.Domain;
        reqParams.tf['vpc'] = (obj.data.Domain == "vpc");
        reqParams.cfn['InstanceId'] = obj.data.InstanceId;
        reqParams.tf['instance'] = obj.data.InstanceId;
        reqParams.cfn['PublicIpv4Pool'] = (obj.data.PublicIpv4Pool != "amazon") ? obj.data.PublicIpv4Pool : null;
        reqParams.tf['public_ipv4_pool'] = (obj.data.PublicIpv4Pool != "amazon") ? obj.data.PublicIpv4Pool : null;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::EIP'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::EIP',
            'terraformType': 'aws_eip',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.PublicIp,
                'GetAtt': {
                    'AllocationId': obj.data.AllocationId
                },
                'Import': {
                    'PublicIp': obj.data.PublicIp
                }
            }
        });
    } else if (obj.type == "ec2.elasticipassociation") {
        reqParams.cfn['AllocationId'] = obj.data.AllocationId;
        reqParams.tf['allocation_id'] = obj.data.AllocationId;
        reqParams.cfn['InstanceId'] = obj.data.InstanceId;
        reqParams.tf['instance_id'] = obj.data.InstanceId;
        reqParams.cfn['NetworkInterfaceId'] = obj.data.NetworkInterfaceId;
        reqParams.tf['network_interface_id'] = obj.data.NetworkInterfaceId;
        reqParams.cfn['PrivateIpAddress'] = obj.data.PrivateIpAddress;
        reqParams.tf['private_ip_address'] = obj.data.PrivateIpAddress;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::EIPAssociation'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::EIPAssociation',
            'terraformType': 'aws_eip_association',
            'options': reqParams
        });
    } else if (obj.type == "ec2.networkinterface") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['Ipv6Addresses'] = obj.data.Ipv6Addresses;
        reqParams.cfn['PrivateIpAddress'] = obj.data.PrivateIpAddress;
        reqParams.tf['private_ips'] = [obj.data.PrivateIpAddress];
        if (obj.data.PrivateIpAddresses) {
            reqParams.cfn['PrivateIpAddresses'] = [];
            reqParams.tf['private_ips'] = [];
            obj.data.PrivateIpAddresses.forEach(privateIpAddresses => {
                reqParams.cfn['PrivateIpAddresses'].push({
                    'PrivateIpAddress': privateIpAddresses.PrivateIpAddress,
                    'Primary': privateIpAddresses.Primary
                });
                reqParams.tf['private_ips'].push(privateIpAddresses.PrivateIpAddress);
            });
        }
        reqParams.cfn['SubnetId'] = obj.data.SubnetId;
        reqParams.tf['subnet_id'] = obj.data.SubnetId;
        reqParams.cfn['SourceDestCheck'] = obj.data.SourceDestCheck;
        reqParams.tf['source_dest_check'] = obj.data.SourceDestCheck;
        reqParams.cfn['Tags'] = obj.data.TagSet;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }
        if (obj.data.Groups) {
            reqParams.cfn['GroupSet'] = [];
            reqParams.tf['security_groups'] = [];
            obj.data.Groups.forEach(group => {
                reqParams.cfn['GroupSet'].push(group.GroupId);
                reqParams.tf['security_groups'].push(group.GroupId);
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::NetworkInterface'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::NetworkInterface',
            'terraformType': 'aws_network_interface',
            'options': reqParams,
            'returnValues': {
                'Import': {
                    'NetworkInterfaceId': obj.data.NetworkInterfaceId
                }
            }
        });
    } else if (obj.type == "ec2.route") {
        reqParams.cfn['DestinationCidrBlock'] = obj.data.DestinationCidrBlock;
        reqParams.tf['destination_cidr_block'] = obj.data.DestinationCidrBlock;
        reqParams.cfn['DestinationIpv6CidrBlock'] = obj.data.DestinationIpv6CidrBlock;
        reqParams.tf['destination_ipv6_cidr_block'] = obj.data.DestinationIpv6CidrBlock;
        reqParams.cfn['EgressOnlyInternetGatewayId'] = obj.data.EgressOnlyInternetGatewayId;
        reqParams.tf['egress_only_gateway_id'] = obj.data.EgressOnlyInternetGatewayId;
        reqParams.cfn['GatewayId'] = obj.data.GatewayId;
        reqParams.tf['gateway_id'] = obj.data.GatewayId;
        reqParams.cfn['InstanceId'] = obj.data.InstanceId;
        reqParams.tf['instance_id'] = obj.data.InstanceId;
        reqParams.cfn['NatGatewayId'] = obj.data.NatGatewayId;
        reqParams.tf['nat_gateway_id'] = obj.data.NatGatewayId;
        reqParams.cfn['NetworkInterfaceId'] = obj.data.NetworkInterfaceId;
        reqParams.tf['network_interface_id'] = obj.data.NetworkInterfaceId;
        reqParams.cfn['VpcPeeringConnectionId'] = obj.data.VpcPeeringConnectionId;
        reqParams.tf['vpc_peering_connection_id'] = obj.data.VpcPeeringConnectionId;
        reqParams.cfn['RouteTableId'] = obj.data.RouteTableId;
        reqParams.tf['route_table_id'] = obj.data.RouteTableId;
        reqParams.cfn['CarrierGatewayId'] = obj.data.CarrierGatewayId;
        reqParams.cfn['VpcEndpointId'] = obj.data.VpcEndpointId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::Route'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::Route',
            'terraformType': 'aws_route',
            'options': reqParams
        });
    } else if (obj.type == "ec2.transitgateway") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        if (obj.data.Options) {
            reqParams.cfn['AmazonSideAsn'] = obj.data.Options.AmazonSideAsn;
            reqParams.tf['amazon_side_asn'] = obj.data.Options.AmazonSideAsn;
            reqParams.cfn['AutoAcceptSharedAttachments'] = obj.data.Options.AutoAcceptSharedAttachments;
            reqParams.tf['auto_accept_shared_attachments'] = obj.data.Options.AutoAcceptSharedAttachments;
            reqParams.cfn['DefaultRouteTableAssociation'] = obj.data.Options.DefaultRouteTableAssociation;
            reqParams.tf['default_route_table_association'] = obj.data.Options.DefaultRouteTableAssociation;
            reqParams.cfn['DefaultRouteTablePropagation'] = obj.data.Options.DefaultRouteTablePropagation;
            reqParams.tf['default_route_table_propagation'] = obj.data.Options.DefaultRouteTablePropagation;
            reqParams.cfn['DnsSupport'] = obj.data.Options.DnsSupport;
            reqParams.tf['dns_support'] = obj.data.Options.DnsSupport;
            reqParams.cfn['VpnEcmpSupport'] = obj.data.Options.VpnEcmpSupport;
            reqParams.tf['vpn_ecmp_support'] = obj.data.Options.VpnEcmpSupport;
        }
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::TransitGateway'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::TransitGateway',
            'terraformType': 'aws_ec2_transit_gateway',
            'options': reqParams
        });
    } else if (obj.type == "ec2.transitgatewayroute") {
        reqParams.cfn['DestinationCidrBlock'] = obj.data.DestinationCidrBlock;
        reqParams.tf['destination_cidr_block'] = obj.data.DestinationCidrBlock;
        reqParams.cfn['TransitGatewayRouteTableId'] = obj.data.TransitGatewayRouteTableId;
        reqParams.tf['transit_gateway_route_table_id'] = obj.data.TransitGatewayRouteTableId;
        if (obj.data.State == "blackhole") {
            reqParams.cfn['Blackhole'] = true;
            reqParams.tf['blackhole'] = true;
        }
        if (obj.data.TransitGatewayAttachments && obj.data.TransitGatewayAttachments.length == 1) {
            reqParams.cfn['TransitGatewayAttachmentId'] = obj.data.TransitGatewayAttachments[0].TransitGatewayAttachmentId;
            reqParams.tf['transit_gateway_attachment_id'] = obj.data.TransitGatewayAttachments[0].TransitGatewayAttachmentId;
        }

        /*
        TODO:
        TransitGatewayAttachmentId: String // multiple?
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::TransitGatewayRoute'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::TransitGatewayRoute',
            'terraformType': 'aws_ec2_transit_gateway_route',
            'options': reqParams
        });
    } else if (obj.type == "ec2.transitgatewayroutetableassociation") {
        reqParams.cfn['TransitGatewayAttachmentId'] = obj.data.TransitGatewayAttachmentId;
        reqParams.tf['transit_gateway_attachment_id'] = obj.data.TransitGatewayAttachmentId;
        reqParams.cfn['TransitGatewayRouteTableId'] = obj.data.TransitGatewayRouteTableId;
        reqParams.tf['transit_gateway_route_table_id'] = obj.data.TransitGatewayRouteTableId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::TransitGatewayRouteTableAssociation'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::TransitGatewayRouteTableAssociation',
            'terraformType': 'aws_ec2_transit_gateway_route_table_association',
            'options': reqParams
        });
    } else if (obj.type == "ec2.transitgatewayroutetablepropogation") {
        reqParams.cfn['TransitGatewayAttachmentId'] = obj.data.TransitGatewayAttachmentId;
        reqParams.tf['transit_gateway_attachment_id'] = obj.data.TransitGatewayAttachmentId;
        reqParams.cfn['TransitGatewayRouteTableId'] = obj.data.TransitGatewayRouteTableId;
        reqParams.tf['transit_gateway_route_table_id'] = obj.data.TransitGatewayRouteTableId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::TransitGatewayRouteTablePropagation'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::TransitGatewayRouteTablePropagation',
            'terraformType': 'aws_ec2_transit_gateway_route_table_propagation',
            'options': reqParams
        });
    } else if (obj.type == "ec2.transitgatewayroutetable") {
        reqParams.cfn['TransitGatewayId'] = obj.data.TransitGatewayId;
        reqParams.tf['transit_gateway_id'] = obj.data.TransitGatewayId;
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::TransitGatewayRouteTable'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::TransitGatewayRouteTable',
            'terraformType': 'aws_ec2_transit_gateway_route_table',
            'options': reqParams
        });
    } else if (obj.type == "ec2.transitgatewayattachment") {
        reqParams.cfn['TransitGatewayId'] = obj.data.TransitGatewayId;
        reqParams.tf['transit_gateway_id'] = obj.data.TransitGatewayId;
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }
        reqParams.cfn['VpcId'] = obj.data.VpcId;
        reqParams.tf['vpc_id'] = obj.data.VpcId;
        reqParams.cfn['SubnetIds'] = obj.data.SubnetIds;
        reqParams.tf['subnet_ids'] = obj.data.SubnetIds;

        /*
        TODO:
        TF
        dns_support
        ipv6_support
        transit_gateway_default_route_table_association
        transit_gateway_default_route_table_propagation
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::TransitGatewayAttachment'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::TransitGatewayAttachment',
            'terraformType': 'aws_ec2_transit_gateway_vpc_attachment',
            'options': reqParams
        });
    } else if (obj.type == "ec2.vpcendpoint") {
        reqParams.cfn['VpcEndpointType'] = obj.data.VpcEndpointType;
        reqParams.tf['vpc_endpoint_type'] = obj.data.VpcEndpointType;
        reqParams.cfn['VpcId'] = obj.data.VpcId;
        reqParams.tf['vpc_id'] = obj.data.VpcId;
        reqParams.cfn['ServiceName'] = obj.data.ServiceName;
        reqParams.tf['service_name'] = obj.data.ServiceName;
        reqParams.cfn['PolicyDocument'] = obj.data.PolicyDocument;
        reqParams.tf['policy'] = obj.data.PolicyDocument;
        reqParams.cfn['RouteTableIds'] = obj.data.RouteTableIds;
        reqParams.tf['route_table_ids'] = obj.data.RouteTableIds;
        reqParams.cfn['SubnetIds'] = obj.data.SubnetIds;
        reqParams.tf['subnet_ids'] = obj.data.SubnetIds;
        reqParams.cfn['PrivateDnsEnabled'] = obj.data.PrivateDnsEnabled;
        reqParams.tf['private_dns_enabled'] = obj.data.PrivateDnsEnabled;
        if (obj.data.Groups) {
            reqParams.cfn['SecurityGroupIds'] = [];
            reqParams.tf['security_group_ids'] = [];
            obj.data.Groups.forEach(group => {
                reqParams.cfn['SecurityGroupIds'].push(group.GroupId);
                reqParams.tf['security_group_ids'].push(group.GroupId);
            });
            reqParams.cfn['SecurityGroupIds'] = [...new Set(reqParams.cfn['SecurityGroupIds'])]; // unique list
            reqParams.tf['security_group_ids'] = [...new Set(reqParams.tf['security_group_ids'])]; // unique list
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::VPCEndpoint'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::VPCEndpoint',
            'terraformType': 'aws_vpc_endpoint',
            'options': reqParams
        });
    } else if (obj.type == "ec2.vpcendpointconnectionnotification") {
        reqParams.cfn['ServiceId'] = obj.data.ServiceId;
        reqParams.cfn['VPCEndpointId'] = obj.data.VpcEndpointId;
        reqParams.cfn['ConnectionNotificationArn'] = obj.data.ConnectionNotificationArn;
        reqParams.cfn['ConnectionEvents'] = obj.data.ConnectionEvents;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::VPCEndpointConnectionNotification'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::VPCEndpointConnectionNotification',
            'options': reqParams
        });
    } else if (obj.type == "ec2.vpcendpointservicepermission") {
        reqParams.cfn['AllowedPrincipals'] = [];
        obj.data.AllowedPrincipals.forEach(allowedPrincipal => {
            reqParams.cfn['AllowedPrincipals'].push(allowedPrincipal.Principal);
        });
        reqParams.cfn['ServiceId'] = obj.data.ServiceId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::VPCEndpointServicePermissions'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::VPCEndpointServicePermissions',
            'options': reqParams
        });

        obj.data.AllowedPrincipals.forEach(allowedPrincipal => {
            reqParams = {
                'boto3': {},
                'go': {},
                'cfn': {},
                'cli': {},
                'tf': {},
                'iam': {}
            };

            reqParams.tf['vpc_endpoint_service_id'] = obj.data.ServiceId;
            reqParams.tf['principal_arn'] = allowedPrincipal.Principal;

            tracked_resources.push({
                'obj': obj,
                'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::EndpointServiceAllowedPrincipal'), // not real resource type
                'region': obj.region,
                'service': 'ec2',
                'terraformType': 'aws_vpc_endpoint_service_allowed_principal',
                'options': reqParams
            });
        });
    } else if (obj.type == "ec2.vpcendpointservice") {
        if (obj.data.ServiceType.ServiceType == "Interface" || obj.data.ServiceType.ServiceType == "GatewayLoadBalancer") {
            reqParams.cfn['NetworkLoadBalancerArns'] = obj.data.NetworkLoadBalancerArns;
            reqParams.tf['network_load_balancer_arns'] = obj.data.AcceptanceRequired;
            reqParams.cfn['AcceptanceRequired'] = obj.data.AcceptanceRequired;
            reqParams.tf['acceptance_required'] = obj.data.AcceptanceRequired;
            reqParams.cfn['GatewayLoadBalancerArns'] = obj.data.GatewayLoadBalancerArns;

            tracked_resources.push({
                'obj': obj,
                'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::VPCEndpointService'),
                'region': obj.region,
                'service': 'ec2',
                'type': 'AWS::EC2::VPCEndpointService',
                'terraformType': 'aws_vpc_endpoint_service',
                'options': reqParams
            });
        }
    } else if (obj.type == "ec2.natgateway") {
        reqParams.cfn['SubnetId'] = obj.data.SubnetId;
        reqParams.tf['subnet_id'] = obj.data.SubnetId;
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }
        if (obj.data.NatGatewayAddresses && obj.data.NatGatewayAddresses.length == 1) {
            reqParams.cfn['AllocationId'] = obj.data.NatGatewayAddresses[0].AllocationId;
            reqParams.tf['allocation_id'] = obj.data.NatGatewayAddresses[0].AllocationId;
        }

        /*
        TODO:
        AllocationId // multiple
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::NatGateway'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::NatGateway',
            'terraformType': 'aws_nat_gateway',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.NatGatewayId,
                'Import': {
                    'NatGatewayId': obj.data.NatGatewayId
                }
            }
        });
    } else if (obj.type == "ec2.networkinterfacepermission") {
        reqParams.cfn['AwsAccountId'] = obj.data.AwsAccountId;
        reqParams.cfn['NetworkInterfaceId'] = obj.data.NetworkInterfaceId;
        reqParams.cfn['Permission'] = obj.data.Permission;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::NetworkInterfacePermission'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::NetworkInterfacePermission',
            'options': reqParams
        });
    } else if (obj.type == "ec2.subnetnetworkaclassociation") {
        reqParams.cfn['SubnetId'] = obj.data.SubnetId;
        reqParams.cfn['NetworkAclId'] = obj.data.NetworkAclId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::SubnetNetworkAclAssociation'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::SubnetNetworkAclAssociation',
            'options': reqParams
        });
    } else if (obj.type == "ec2.subnetroutetableassociation") {
        reqParams.cfn['RouteTableId'] = obj.data.RouteTableId;
        reqParams.tf['route_table_id'] = obj.data.RouteTableId;
        reqParams.cfn['SubnetId'] = obj.data.SubnetId;
        reqParams.tf['subnet_id'] = obj.data.SubnetId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::SubnetRouteTableAssociation'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::SubnetRouteTableAssociation',
            'terraformType': 'aws_route_table_association',
            'options': reqParams
        });
    } else if (obj.type == "ec2.subnetipv6cidrblock") {
        reqParams.cfn['Ipv6CidrBlock'] = obj.data.Ipv6CidrBlock;
        reqParams.cfn['SubnetId'] = obj.data.SubnetId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::SubnetCidrBlock'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::SubnetCidrBlock',
            'options': reqParams
        });
    } else if (obj.type == "ec2.networkinterfaceattachment") {
        reqParams.cfn['NetworkInterfaceId'] = obj.data.NetworkInterfaceId;
        reqParams.tf['network_interface_id'] = obj.data.NetworkInterfaceId;
        reqParams.cfn['DeviceIndex'] = obj.data.DeviceIndex;
        reqParams.tf['device_index'] = obj.data.DeviceIndex;
        reqParams.cfn['InstanceId'] = obj.data.InstanceId;
        reqParams.tf['instance_id'] = obj.data.InstanceId;
        reqParams.cfn['DeleteOnTermination'] = obj.data.DeleteOnTermination;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::NetworkInterfaceAttachment'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::NetworkInterfaceAttachment',
            'terraformType': 'aws_network_interface_attachment',
            'options': reqParams
        });
    } else if (obj.type == "ec2.clientvpnendpoint") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['ClientCidrBlock'] = obj.data.ClientCidrBlock;
        reqParams.cfn['DnsServers'] = obj.data.DnsServers;
        reqParams.cfn['TransportProtocol'] = obj.data.TransportProtocol;
        reqParams.cfn['ServerCertificateArn'] = obj.data.ServerCertificateArn;
        if (obj.data.AuthenticationOptions) {
            reqParams.cfn['AuthenticationOptions'] = [];
            obj.data.AuthenticationOptions.forEach(authenticationoptions => {
                var mutualauthentication = null;
                if (authenticationoptions.MutualAuthentication) {
                    mutualauthentication = {
                        'ClientRootCertificateChainArn': authenticationoptions.MutualAuthentication.ClientRootCertificateChain
                    }
                }
                var federatedauthentication = null;
                if (authenticationoptions.FederatedAuthentication) {
                    federatedauthentication = {
                        'SAMLProviderArn': authenticationoptions.FederatedAuthentication.SamlProviderArn
                    }
                }
                reqParams.cfn['AuthenticationOptions'].push({
                    'Type': authenticationoptions.Type,
                    'ActiveDirectory': authenticationoptions.ActiveDirectory,
                    'FederatedAuthentication': federatedauthentication,
                    'MutualAuthentication': mutualauthentication,
                });
            });
        }
        reqParams.cfn['ConnectionLogOptions'] = obj.data.ConnectionLogOptions;
        if (obj.data.Tags) {
            reqParams.cfn['TagSpecifications'] = [{
                'ResourceType': 'client-vpn-endpoint',
                'Tags': obj.data.Tags
            }];
        }
        reqParams.cfn['VpnPort'] = obj.data.VpnPort;
        reqParams.cfn['SecurityGroupIds'] = obj.data.SecurityGroupIds;
        reqParams.cfn['VpcId'] = obj.data.VpcId;
        reqParams.cfn['SplitTunnel'] = obj.data.SplitTunnel;
        if (obj.data.ClientConnectOptions) {
            reqParams.cfn['ClientConnectOptions'] = {
                'Enabled': obj.data.ClientConnectOptions.Enabled,
                'LambdaFunctionArn': obj.data.ClientConnectOptions.LambdaFunctionArn
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::ClientVpnEndpoint'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::ClientVpnEndpoint',
            'options': reqParams
        });
    } else if (obj.type == "ec2.clientvpnroute") {
        reqParams.cfn['ClientVpnEndpointId'] = obj.data.ClientVpnEndpointId;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['DestinationCidrBlock'] = obj.data.DestinationCidr;
        reqParams.cfn['TargetVpcSubnetId'] = obj.data.TargetSubnet;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::ClientVpnRoute'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::ClientVpnRoute',
            'options': reqParams
        });
    } else if (obj.type == "ec2.clientvpntargetnetworkassociation") {
        reqParams.cfn['ClientVpnEndpointId'] = obj.data.ClientVpnEndpointId;
        reqParams.cfn['SubnetId'] = obj.data.TargetNetworkId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::ClientVpnTargetNetworkAssociation'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::ClientVpnTargetNetworkAssociation',
            'options': reqParams
        });
    } else if (obj.type == "ec2.clientvpnauthorizationrule") {
        reqParams.cfn['ClientVpnEndpointId'] = obj.data.ClientVpnEndpointId;
        reqParams.cfn['AccessGroupId'] = obj.data.AccessGroupId;
        reqParams.cfn['AuthorizeAllGroups'] = obj.data.AuthorizeAllGroups;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['TargetNetworkCidr'] = obj.data.TargetNetworkCidr;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::ClientVpnAuthorizationRule'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::ClientVpnAuthorizationRule',
            'options': reqParams
        });
    } else if (obj.type == "ec2.trafficmirrorfilter") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['NetworkServices'] = obj.data.NetworkServices;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::TrafficMirrorFilter'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::TrafficMirrorFilter',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.TrafficMirrorFilterId
            }
        });
    } else if (obj.type == "ec2.trafficmirrorfilterrule") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['DestinationCidrBlock'] = obj.data.DestinationCidrBlock;
        reqParams.cfn['DestinationPortRange'] = obj.data.DestinationPortRange;
        reqParams.cfn['Protocol'] = obj.data.Protocol;
        reqParams.cfn['RuleAction'] = obj.data.RuleAction;
        reqParams.cfn['RuleNumber'] = obj.data.RuleNumber;
        reqParams.cfn['SourceCidrBlock'] = obj.data.SourceCidrBlock;
        reqParams.cfn['SourcePortRange'] = obj.data.SourcePortRange;
        reqParams.cfn['TrafficDirection'] = obj.data.TrafficDirection;
        reqParams.cfn['TrafficMirrorFilterId'] = obj.data.TrafficMirrorFilterId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::TrafficMirrorFilterRule'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::TrafficMirrorFilterRule',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.TrafficMirrorFilterRuleId
            }
        });
    } else if (obj.type == "ec2.trafficmirrorsession") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['NetworkInterfaceId'] = obj.data.NetworkInterfaceId;
        reqParams.cfn['PacketLength'] = obj.data.PacketLength;
        reqParams.cfn['SessionNumber'] = obj.data.SessionNumber;
        reqParams.cfn['Tags'] = obj.data.Tags;
        reqParams.cfn['TrafficMirrorFilterId'] = obj.data.TrafficMirrorFilterId;
        reqParams.cfn['TrafficMirrorTargetId'] = obj.data.TrafficMirrorTargetId;
        reqParams.cfn['VirtualNetworkId'] = obj.data.VirtualNetworkId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::TrafficMirrorSession'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::TrafficMirrorSession',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.TrafficMirrorSessionId
            }
        });
    } else if (obj.type == "ec2.trafficmirrortarget") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['NetworkInterfaceId'] = obj.data.NetworkInterfaceId;
        reqParams.cfn['NetworkLoadBalancerArn'] = obj.data.NetworkLoadBalancerArn;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::TrafficMirrorTarget'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::TrafficMirrorTarget',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.TrafficMirrorTargetId
            }
        });
    } else if (obj.type == "ec2.gatewayroutetableassociation") {
        reqParams.cfn['RouteTableId'] = obj.data.RouteTableId;
        reqParams.tf['route_table_id'] = obj.data.RouteTableId;
        reqParams.cfn['GatewayId'] = obj.data.GatewayId;
        reqParams.tf['gateway_id'] = obj.data.GatewayId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::GatewayRouteTableAssociation'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::GatewayRouteTableAssociation',
            'terraformType': 'aws_route_table_association',
            'options': reqParams,
            'returnValues': {
                'Import': {
                    'GatewayId': obj.data.GatewayId
                }
            }
        });
    } else if (obj.type == "ec2.localgatewayroute") {
        reqParams.cfn['DestinationCidrBlock'] = obj.data.DestinationCidrBlock;
        reqParams.cfn['LocalGatewayRouteTableId'] = obj.data.LocalGatewayRouteTableId;
        reqParams.cfn['LocalGatewayVirtualInterfaceGroupId'] = obj.data.LocalGatewayVirtualInterfaceGroupId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::LocalGatewayRoute'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::LocalGatewayRoute',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'State': obj.data.State,
                    'Type': obj.data.Type
                },
                'Import': {
                    'DestinationCidrBlock': obj.data.DestinationCidrBlock,
                    'LocalGatewayRouteTableId': obj.data.LocalGatewayRouteTableId
                }
            }
        });
    } else if (obj.type == "ec2.localgatewayroutetablevpcassociation") {
        reqParams.cfn['LocalGatewayRouteTableId'] = obj.data.LocalGatewayRouteTableId;
        reqParams.cfn['Tags'] = obj.data.Tags;
        reqParams.cfn['VpcId'] = obj.data.VpcId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::LocalGatewayRouteTableVPCAssociation'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::LocalGatewayRouteTableVPCAssociation',
            'options': reqParams,
            'returnValues': {
                'Import': {
                    'LocalGatewayRouteTableVpcAssociationId': obj.data.LocalGatewayRouteTableVpcAssociationId
                }
            }
        });
    } else if (obj.type == "ec2.networkmanagerglobalnetwork") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::NetworkManager::GlobalNetwork'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::NetworkManager::GlobalNetwork',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.GlobalNetworkId,
                'GetAtt': {
                    'Id': obj.data.GlobalNetworkId,
                    'Arn': obj.data.GlobalNetworkArn
                },
                'Import': {
                    'Id': obj.data.GlobalNetworkId
                }
            }
        });
    } else if (obj.type == "ec2.networkmanagersite") {
        reqParams.cfn['GlobalNetworkId'] = obj.data.GlobalNetworkId;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Location'] = obj.data.Location;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::NetworkManager::Site'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::NetworkManager::Site',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.SiteId,
                'GetAtt': {
                    'SiteId': obj.data.SiteId,
                    'SiteArn': obj.data.SiteArn
                },
                'Import': {
                    'GlobalNetworkId': obj.data.GlobalNetworkId,
                    'SiteId': obj.data.SiteId
                }
            }
        });
    } else if (obj.type == "ec2.networkmanagerdevice") {
        reqParams.cfn['GlobalNetworkId'] = obj.data.GlobalNetworkId;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Model'] = obj.data.Model;
        reqParams.cfn['Vendor'] = obj.data.Vendor;
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.cfn['SerialNumber'] = obj.data.SerialNumber;
        reqParams.cfn['SiteId'] = obj.data.SiteId;
        reqParams.cfn['Location'] = obj.data.Location;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::NetworkManager::Device'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::NetworkManager::Device',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.DeviceArn,
                'GetAtt': {
                    'DeviceId': obj.data.DeviceId,
                    'DeviceArn': obj.data.DeviceArn
                },
                'Import': {
                    'GlobalNetworkId': obj.data.GlobalNetworkId,
                    'DeviceId': obj.data.DeviceId
                }
            }
        });
    } else if (obj.type == "ec2.networkmanagerlink") {
        reqParams.cfn['GlobalNetworkId'] = obj.data.GlobalNetworkId;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['SiteId'] = obj.data.SiteId;
        reqParams.cfn['Bandwidth'] = obj.data.Bandwidth;
        reqParams.cfn['Provider'] = obj.data.Provider;
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::NetworkManager::Link'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::NetworkManager::Link',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.LinkArn,
                'GetAtt': {
                    'LinkId': obj.data.LinkId,
                    'LinkArn': obj.data.LinkArn
                },
                'Import': {
                    'GlobalNetworkId': obj.data.GlobalNetworkId,
                    'LinkId': obj.data.LinkId
                }
            }
        });
    } else if (obj.type == "ec2.networkmanagerlinkassociation") {
        reqParams.cfn['GlobalNetworkId'] = obj.data.GlobalNetworkId;
        reqParams.cfn['DeviceId'] = obj.data.DeviceId;
        reqParams.cfn['LinkId'] = obj.data.LinkId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::NetworkManager::LinkAssociation'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::NetworkManager::LinkAssociation',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.GlobalNetworkId + "|" + obj.data.DeviceId + "|" + obj.data.LinkId,
                'Import': {
                    'GlobalNetworkId': obj.data.GlobalNetworkId,
                    'DeviceId': obj.data.DeviceId,
                    'LinkId': obj.data.LinkId
                }
            }
        });
    } else if (obj.type == "ec2.networkmanagercustomergatewayassociation") {
        reqParams.cfn['CustomerGatewayArn'] = obj.data.CustomerGatewayArn;
        reqParams.cfn['GlobalNetworkId'] = obj.data.GlobalNetworkId;
        reqParams.cfn['DeviceId'] = obj.data.DeviceId;
        reqParams.cfn['LinkId'] = obj.data.LinkId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::NetworkManager::CustomerGatewayAssociation'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::NetworkManager::CustomerGatewayAssociation',
            'options': reqParams,
            'returnValues': {
                'Import': {
                    'GlobalNetworkId': obj.data.GlobalNetworkId,
                    'CustomerGatewayArn': obj.data.CustomerGatewayArn
                }
            }
        });
    } else if (obj.type == "ec2.networkmanagertransitgatewayregistration") {
        reqParams.cfn['TransitGatewayArn'] = obj.data.TransitGatewayArn;
        reqParams.cfn['GlobalNetworkId'] = obj.data.GlobalNetworkId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::NetworkManager::TransitGatewayRegistration'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::NetworkManager::TransitGatewayRegistration',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.GlobalNetworkId + "|" + obj.data.TransitGatewayArn,
                'Import': {
                    'GlobalNetworkId': obj.data.GlobalNetworkId,
                    'TransitGatewayArn': obj.data.TransitGatewayArn
                }
            }
        });
    } else if (obj.type == "ec2.prefixlist") {
        reqParams.cfn['AddressFamily'] = obj.data.AddressFamily;
        reqParams.cfn['PrefixListName'] = obj.data.PrefixListName;
        reqParams.cfn['MaxEntries'] = obj.data.MaxEntries;
        reqParams.cfn['Tags'] = obj.data.Tags;
        reqParams.cfn['Entries'] = obj.data.Entries;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::PrefixList'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::PrefixList',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.PrefixListId,
                'GetAtt': {
                    'Arn': obj.data.PrefixListArn,
                    'OwnerId': obj.data.OwnerId,
                    'PrefixListId': obj.data.PrefixListId,
                    'Version': obj.data.Version
                },
                'Import': {
                    'PrefixListId': obj.data.PrefixListId
                }
            }
        });
    } else if (obj.type == "ec2.carriergateway") {
        reqParams.cfn['VpcId'] = obj.data.VpcId;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::CarrierGateway'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::CarrierGateway',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.CarrierGatewayId,
                'GetAtt': {
                    'OwnerId': obj.data.OwnerId,
                    'State': obj.data.State
                }
            }
        });
    } else if (obj.type == "ec2.networkfirewall") {
        reqParams.cfn['FirewallName'] = obj.data.Firewall.FirewallName;
        reqParams.cfn['FirewallPolicyArn'] = obj.data.Firewall.FirewallPolicyArn;
        reqParams.cfn['VpcId'] = obj.data.Firewall.VpcId;
        reqParams.cfn['SubnetMappings'] = obj.data.Firewall.SubnetMappings;
        reqParams.cfn['DeleteProtection'] = obj.data.Firewall.DeleteProtection;
        reqParams.cfn['SubnetChangeProtection'] = obj.data.Firewall.SubnetChangeProtection;
        reqParams.cfn['FirewallPolicyChangeProtection'] = obj.data.Firewall.FirewallPolicyChangeProtection;
        reqParams.cfn['Description'] = obj.data.Firewall.Description;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::NetworkFirewall::Firewall'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::NetworkFirewall::Firewall',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Firewall.FirewallArn,
                'GetAtt': {
                    'FirewallId': obj.data.Firewall.FirewallId
                }
            }
        });
    } else if (obj.type == "ec2.networkfirewallpolicy") {
        reqParams.cfn['FirewallPolicy'] = obj.data.FirewallPolicy;
        reqParams.cfn['FirewallPolicyName'] = obj.data.FirewallPolicyResponse.FirewallPolicyName;
        reqParams.cfn['Description'] = obj.data.FirewallPolicyResponse.Description;
        reqParams.cfn['Tags'] = obj.data.FirewallPolicyResponse.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::NetworkFirewall::FirewallPolicy'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::NetworkFirewall::FirewallPolicy',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.FirewallPolicyResponse.FirewallPolicyArn,
                'GetAtt': {
                    'FirewallId': obj.data.FirewallPolicyResponse.FirewallPolicyId
                }
            }
        });
    } else if (obj.type == "ec2.networkfirewallloggingconfiguration") {
        reqParams.cfn['FirewallArn'] = obj.data.FirewallArn;
        reqParams.cfn['LoggingConfiguration'] = obj.data.LoggingConfiguration;

        /*
        SKIPPED:
        'FirewallName'
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::NetworkFirewall::LoggingConfiguration'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::NetworkFirewall::LoggingConfiguration',
            'options': reqParams
        });
    } else if (obj.type == "ec2.networkfirewallrulegroup") {
        reqParams.cfn['RuleGroupName'] = obj.data.RuleGroupResponse.RuleGroupName;
        reqParams.cfn['Description'] = obj.data.RuleGroupResponse.Description;
        reqParams.cfn['Type'] = obj.data.RuleGroupResponse.Type;
        reqParams.cfn['Capacity'] = obj.data.RuleGroupResponse.Capacity;
        reqParams.cfn['RuleGroup'] = obj.data.RuleGroup;
        reqParams.cfn['Tags'] = obj.data.RuleGroupResponse.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::NetworkFirewall::RuleGroup'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::NetworkFirewall::RuleGroup',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.RuleGroupResponse.RuleGroupArn,
                'GetAtt': {
                    'RuleGroupId': obj.data.RuleGroupResponse.RuleGroupId
                }
            }
        });
    } else if (obj.type == "ec2.networkinsightspath") {
        reqParams.cfn['Destination'] = obj.data.Destination;
        reqParams.cfn['DestinationIp'] = obj.data.DestinationIp;
        reqParams.cfn['DestinationPort'] = obj.data.DestinationPort;
        reqParams.cfn['Protocol'] = obj.data.Protocol;
        reqParams.cfn['Source'] = obj.data.Source;
        reqParams.cfn['SourceIp'] = obj.data.SourceIp;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::NetworkInsightsPath'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::NetworkInsightsPath',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.NetworkInsightsPathId,
                'GetAtt': {
                    'NetworkInsightsPathArn': obj.data.NetworkInsightsPathArn
                }
            }
        });
    } else if (obj.type == "ec2.networkinsightsanalysis") {
        reqParams.cfn['NetworkInsightsPathId'] = obj.data.NetworkInsightsPathId;
        reqParams.cfn['FilterInArns'] = obj.data.FilterInArns;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::NetworkInsightsAnalysis'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::NetworkInsightsAnalysis',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.NetworkInsightsAnalysisId,
                'GetAtt': {
                    'NetworkInsightsAnalysisArn': obj.data.NetworkInsightsAnalysisArn
                }
            }
        });
    } else if (obj.type == "ec2.transitgatewaymulticastdomain") {
        reqParams.cfn['TransitGatewayId'] = obj.data.TransitGatewayId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::TransitGatewayMulticastDomain'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::TransitGatewayMulticastDomain',
            'options': reqParams,
            'returnValues': {
                'Import': {
                    'TransitGatewayMulticastDomainId': obj.data.TransitGatewayMulticastDomainId
                }
            }
        });
    } else if (obj.type == "ec2.transitgatewaymulticastdomainassociation") {
        reqParams.cfn['TransitGatewayAttachmentId'] = obj.data.TransitGatewayAttachmentId;
        reqParams.cfn['TransitGatewayMulticastDomainId'] = obj.data.TransitGatewayMulticastDomainId;
        if (obj.data.Subnet) {
            reqParams.cfn['SubnetId'] = obj.data.Subnet.SubnetId;
        }
        reqParams.cfn['State'] = obj.data.State;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::TransitGatewayMulticastDomainAssociation'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::TransitGatewayMulticastDomainAssociation',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'ResourceId': obj.data.ResourceId
                },
                'Import': {
                    'TransitGatewayMulticastDomainId': obj.data.TransitGatewayMulticastDomainId,
                    'TransitGatewayAttachmentId': obj.data.TransitGatewayAttachmentId,
                    'SubnetId': obj.data.Subnet.SubnetId
                }
            }
        });
    } else if (obj.type == "ec2.transitgatewaymulticastgroupsource") {
        reqParams.cfn['TransitGatewayAttachmentId'] = obj.data.TransitGatewayAttachmentId;
        reqParams.cfn['TransitGatewayMulticastDomainId'] = obj.data.TransitGatewayMulticastDomainId;
        reqParams.cfn['NetworkInterfaceId'] = obj.data.NetworkInterfaceId;
        reqParams.cfn['GroupIpAddress'] = obj.data.GroupIpAddress;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::TransitGatewayMulticastGroupSource'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::TransitGatewayMulticastGroupSource',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'ResourceId': obj.data.ResourceId,
                    'ResourceType': obj.data.ResourceType,
                    'SubnetId': obj.data.SubnetId
                },
                'Import': {
                    'TransitGatewayMulticastDomainId': TransitGatewayMulticastDomainId,
                    'GroupIpAddress': obj.data.GroupIpAddress,
                    'NetworkInterfaceId': obj.data.NetworkInterfaceId
                }
            }
        });
    } else if (obj.type == "ec2.transitgatewaymulticastgroupmember") {
        reqParams.cfn['TransitGatewayAttachmentId'] = obj.data.TransitGatewayAttachmentId;
        reqParams.cfn['TransitGatewayMulticastDomainId'] = obj.data.TransitGatewayMulticastDomainId;
        reqParams.cfn['NetworkInterfaceId'] = obj.data.NetworkInterfaceId;
        reqParams.cfn['GroupIpAddress'] = obj.data.GroupIpAddress;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::TransitGatewayMulticastGroupMember'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::TransitGatewayMulticastGroupMember',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'ResourceId': obj.data.ResourceId,
                    'ResourceType': obj.data.ResourceType,
                    'SubnetId': obj.data.SubnetId
                },
                'Import': {
                    'TransitGatewayMulticastDomainId': TransitGatewayMulticastDomainId,
                    'GroupIpAddress': obj.data.GroupIpAddress,
                    'NetworkInterfaceId': obj.data.NetworkInterfaceId
                }
            }
        });
    } else if (obj.type == "ec2.transitgatewayconnect") {
        reqParams.cfn['TransportTransitGatewayAttachmentId'] = obj.data.TransportTransitGatewayAttachmentId;
        reqParams.cfn['Options'] = obj.data.Options;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::TransitGatewayConnect'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::TransitGatewayConnect',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.TransitGatewayAttachmentId,
                'GetAtt': {
                    'TransitGatewayId': obj.data.TransitGatewayId
                }
            }
        });
    } else if (obj.type == "ec2.transitgatewaypeeringattachment") {
        reqParams.cfn['PeerAccountId'] = obj.data.AccepterTgwInfo.OwnerId;
        reqParams.cfn['PeerRegion'] = obj.data.AccepterTgwInfo.Region;
        reqParams.cfn['PeerTransitGatewayId'] = obj.data.AccepterTgwInfo.TransitGatewayId;
        reqParams.cfn['TransitGatewayId'] = obj.data.RequesterTgwInfo.TransitGatewayId;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::TransitGatewayPeeringAttachment'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::TransitGatewayPeeringAttachment',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.TransitGatewayAttachmentId
            }
        });
    } else {
        return false;
    }

    return true;
});
