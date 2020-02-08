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

    await sdkcall("EC2", "describeVpcs", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-vpcs-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-vpccidrblocks-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-dhcpoptionsassociations-datatable').bootstrapTable('removeAll');

        return Promise.all(data.Vpcs.map(vpc => {
            if (vpc.DhcpOptionsId) {
                $('#section-networkingandcontentdelivery-vpc-dhcpoptionsassociations-datatable').bootstrapTable('append', [{
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

            vpc.CidrBlockAssociationSet.forEach(cidrBlock => {
                if (cidrBlock.CidrBlock != vpc.CidrBlock) { // exclude primary block
                    cidrBlock['VpcId'] = vpc.VpcId;
                    $('#section-networkingandcontentdelivery-vpc-vpccidrblocks-datatable').bootstrapTable('append', [{
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

                    $('#section-networkingandcontentdelivery-vpc-vpcs-datatable').bootstrapTable('append', [{
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
        }));
    });

    await sdkcall("EC2", "describeSubnets", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-subnets-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-subnetipv6cidrblocks-datatable').bootstrapTable('removeAll');

        data.Subnets.forEach(subnet => {
            if (subnet.Ipv6CidrBlockAssociationSet) {
                subnet.Ipv6CidrBlockAssociationSet.forEach(ipv6CidrBlockAssociation => {
                    ipv6CidrBlockAssociation['SubnetId'] = subnet.SubnetId;
                    $('#section-networkingandcontentdelivery-vpc-subnetipv6cidrblocks-datatable').bootstrapTable('append', [{
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

            $('#section-networkingandcontentdelivery-vpc-subnets-datatable').bootstrapTable('append', [{
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
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-subnets-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-subnetipv6cidrblocks-datatable');
    });

    await sdkcall("EC2", "describeEgressOnlyInternetGateways", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-egressonlyinternetgateways-datatable').bootstrapTable('removeAll');

        data.EgressOnlyInternetGateways.forEach(egressOnlyInternetGateway => {
            $('#section-networkingandcontentdelivery-vpc-egressonlyinternetgateways-datatable').bootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-vpc-customergateways-datatable').bootstrapTable('removeAll');

        data.CustomerGateways.forEach(customerGateway => {
            $('#section-networkingandcontentdelivery-vpc-customergateways-datatable').bootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-vpc-virtualprivategateways-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-internetgateways-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-gatewayattachments-datatable').bootstrapTable('removeAll');

        data.VpnGateways.forEach(vpnGateway => {
            if (vpnGateway.VpcAttachments) {
                vpnGateway.VpcAttachments.forEach(attachment => {
                    $('#section-networkingandcontentdelivery-vpc-gatewayattachments-datatable').bootstrapTable('append', [{
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

            $('#section-networkingandcontentdelivery-vpc-virtualprivategateways-datatable').bootstrapTable('append', [{
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
                if (internetGateway.Attachments) {
                    internetGateway.Attachments.forEach(attachment => {
                        $('#section-networkingandcontentdelivery-vpc-gatewayattachments-datatable').bootstrapTable('append', [{
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
                    });
                }

                $('#section-networkingandcontentdelivery-vpc-internetgateways-datatable').bootstrapTable('append', [{
                    f2id: internetGateway.InternetGatewayId,
                    f2type: 'ec2.internetgateway',
                    f2data: internetGateway,
                    f2region: region,
                    f2link: 'https://console.aws.amazon.com/vpc/home?region=' + region + '#igws:filter=' + internetGateway.InternetGatewayId,
                    gatewayid: internetGateway.InternetGatewayId
                }]);
            });
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-virtualprivategateways-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-internetgateways-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-gatewayattachments-datatable');
    });

    await sdkcall("EC2", "describeAddresses", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-elasticips-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-elasticipassociations-datatable').bootstrapTable('removeAll');

        data.Addresses.forEach(address => {
            $('#section-networkingandcontentdelivery-vpc-elasticips-datatable').bootstrapTable('append', [{
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
                $('#section-networkingandcontentdelivery-vpc-elasticips-datatable').bootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-vpc-dhcpoptions-datatable').bootstrapTable('removeAll');

        data.DhcpOptions.forEach(dhcpOptions => {
            $('#section-networkingandcontentdelivery-vpc-dhcpoptions-datatable').bootstrapTable('append', [{
                f2id: dhcpOptions.DhcpOptionsId,
                f2type: 'ec2.dhcpoptions',
                f2data: dhcpOptions,
                f2region: region,
                dhcpoptionsid: dhcpOptions.DhcpOptionsId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-dhcpoptions-datatable');
    });

    await sdkcall("EC2", "describeVpnConnections", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-vpnconnections-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-vpnconnectionroutes-datatable').bootstrapTable('removeAll');

        data.VpnConnections.forEach(vpnConnection => {
            $('#section-networkingandcontentdelivery-vpc-vpnconnections-datatable').bootstrapTable('append', [{
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
                    $('#section-networkingandcontentdelivery-vpc-vpnconnectionroutes-datatable').bootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-vpc-peeringconnections-datatable').bootstrapTable('removeAll');

        data.VpcPeeringConnections.forEach(peeringConnection => {
            $('#section-networkingandcontentdelivery-vpc-peeringconnections-datatable').bootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-vpc-networkacls-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-networkaclentries-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-subnetnetworkaclassociations-datatable').bootstrapTable('removeAll');

        data.NetworkAcls.forEach(networkAcl => {
            if (networkAcl.Associations) {
                networkAcl.Associations.forEach(association => {
                    $('#section-networkingandcontentdelivery-vpc-subnetnetworkaclassociations-datatable').bootstrapTable('append', [{
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
                    entry['NetworkAclId'] = networkAcl.NetworkAclId;
                    var range = "";
                    if (entry.PortRange) {
                        range = entry.PortRange.From;
                        if (entry.PortRange.From != entry.PortRange.To) {
                            range = entry.PortRange.From + "-" + entry.PortRange.To;
                        }
                    }
                    $('#section-networkingandcontentdelivery-vpc-networkaclentries-datatable').bootstrapTable('append', [{
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
                });
            }

            $('#section-networkingandcontentdelivery-vpc-networkacls-datatable').bootstrapTable('append', [{
                f2id: networkAcl.NetworkAclId,
                f2type: 'ec2.networkacl',
                f2data: networkAcl,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/vpc/home?region=' + region + '#acls:filter=' + networkAcl.NetworkAclId,
                networkaclid: networkAcl.NetworkAclId,
                vpcid: networkAcl.VpcId
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-vpc-networkacls-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-networkaclentries-datatable');
        unblockUI('#section-networkingandcontentdelivery-vpc-subnetnetworkaclassociations-datatable');
    });

    await sdkcall("EC2", "describeRouteTables", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-vpc-routetables-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-routes-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-virtualprivategatewayroutepropagations-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-subnetroutetableassociations-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-gatewayroutetableassociations-datatable').bootstrapTable('removeAll');

        data.RouteTables.forEach(routeTable => {
            routeTable.Routes.forEach(route => {
                if (route.Origin == "CreateRoute") {
                    route['RouteTableId'] = routeTable.RouteTableId;
                    $('#section-networkingandcontentdelivery-vpc-routes-datatable').bootstrapTable('append', [{
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

            if (routeTable.Associations) {
                routeTable.Associations.forEach(association => {
                    if (association.SubnetId) {
                        $('#section-networkingandcontentdelivery-vpc-subnetroutetableassociations-datatable').bootstrapTable('append', [{
                            f2id: association.RouteTableAssociationId,
                            f2type: 'ec2.subnetroutetableassociation',
                            f2data: association,
                            f2region: region,
                            routetableassociationid: association.RouteTableAssociationId,
                            routetableid: association.RouteTableId,
                            subnetid: association.SubnetId
                        }]);
                    } else if (association.GatewayId) {
                        $('#section-networkingandcontentdelivery-vpc-gatewayroutetableassociations-datatable').bootstrapTable('append', [{
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
                    $('#section-networkingandcontentdelivery-vpc-virtualprivategatewayroutepropagations-datatable').bootstrapTable('append', [{
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

            $('#section-networkingandcontentdelivery-vpc-routetables-datatable').bootstrapTable('append', [{
                f2id: routeTable.RouteTableId,
                f2type: 'ec2.routetable',
                f2data: routeTable,
                f2region: region,
                routetableid: routeTable.RouteTableId,
                vpcid: routeTable.VpcId
            }]);
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
        $('#section-networkingandcontentdelivery-vpc-transitgateways-datatable').bootstrapTable('removeAll');

        data.TransitGateways.forEach(transitGateway => {
            $('#section-networkingandcontentdelivery-vpc-transitgateways-datatable').bootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-vpc-transitgatewayroutetables-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-transitgatewayroutes-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-transitgatewayroutetableassociations-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-transitgatewayroutetablepropogations-datatable').bootstrapTable('removeAll');

        await Promise.all(data.TransitGatewayRouteTables.map(transitGatewayRouteTable => {
            $('#section-networkingandcontentdelivery-vpc-transitgatewayroutetables-datatable').bootstrapTable('append', [{
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
                        $('#section-networkingandcontentdelivery-vpc-transitgatewayroutes-datatable').bootstrapTable('append', [{
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
                        $('#section-networkingandcontentdelivery-vpc-transitgatewayroutetableassociations-datatable').bootstrapTable('append', [{
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
                        $('#section-networkingandcontentdelivery-vpc-transitgatewayroutetablepropogations-datatable').bootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-vpc-transitgatewayattachments-datatable').bootstrapTable('removeAll');

        data.TransitGatewayVpcAttachments.forEach(transitGatewayVpcAttachment => {
            $('#section-networkingandcontentdelivery-vpc-transitgatewayattachments-datatable').bootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-vpc-vpcendpoints-datatable').bootstrapTable('removeAll');

        data.VpcEndpoints.forEach(vpcEndpoint => {
            $('#section-networkingandcontentdelivery-vpc-vpcendpoints-datatable').bootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-vpc-vpcendpointconnectionnotifications-datatable').bootstrapTable('removeAll');

        data.ConnectionNotificationSet.forEach(connectionNotification => {
            $('#section-networkingandcontentdelivery-vpc-vpcendpointconnectionnotifications-datatable').bootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-vpc-vpcendpointservices-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-vpcendpointservicepermissions-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ServiceDetails.map(serviceDetail => {
            if (serviceDetail.ServiceName.startsWith("vpce-svc-")) {
                $('#section-networkingandcontentdelivery-vpc-vpcendpointservices-datatable').bootstrapTable('append', [{
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
                    $('#section-networkingandcontentdelivery-vpc-vpcendpointservicepermissions-datatable').bootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-vpc-natgateways-datatable').bootstrapTable('removeAll');

        data.NatGateways.forEach(natGateway => {
            $('#section-networkingandcontentdelivery-vpc-natgateways-datatable').bootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-vpc-clientvpnendpoints-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-clientvpnroutes-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-clientvpntargetnetworkassociations-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-clientvpnauthorizationrules-datatable').bootstrapTable('removeAll');

        if (data.ClientVpnEndpoints) {
            await Promise.all(data.ClientVpnEndpoints.map(async (endpoint) => {
                $('#section-networkingandcontentdelivery-vpc-clientvpnendpoints-datatable').bootstrapTable('append', [{
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
                                $('#section-networkingandcontentdelivery-vpc-clientvpnroutes-datatable').bootstrapTable('append', [{
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
                                $('#section-networkingandcontentdelivery-vpc-clientvpntargetnetworkassociations-datatable').bootstrapTable('append', [{
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
                                $('#section-networkingandcontentdelivery-vpc-clientvpnauthorizationrules-datatable').bootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-vpc-trafficmirrorfilters-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpc-trafficmirrorfilterrules-datatable').bootstrapTable('removeAll');

        data.TrafficMirrorFilters.forEach(trafficMirrorFilter => {
            $('#section-networkingandcontentdelivery-vpc-trafficmirrorfilters-datatable').bootstrapTable('append', [{
                f2id: trafficMirrorFilter.TrafficMirrorFilterId,
                f2type: 'ec2.trafficmirrorfilter',
                f2data: trafficMirrorFilter,
                f2region: region,
                id: trafficMirrorFilter.TrafficMirrorFilterId,
                description: trafficMirrorFilter.Description
            }]);

            trafficMirrorFilter.IngressFilterRules.forEach(filterRule => {
                filterRule['TrafficDirection'] = "ingress";

                $('#section-networkingandcontentdelivery-vpc-trafficmirrorfilterrules-datatable').bootstrapTable('append', [{
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

                $('#section-networkingandcontentdelivery-vpc-trafficmirrorfilterrules-datatable').bootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-vpc-trafficmirrorsessions-datatable').bootstrapTable('removeAll');

        data.TrafficMirrorSessions.forEach(trafficMirrorSession => {
            $('#section-networkingandcontentdelivery-vpc-trafficmirrorsessions-datatable').bootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-vpc-trafficmirrortargets-datatable').bootstrapTable('removeAll');

        data.TrafficMirrorTargets.forEach(trafficMirrorTarget => {
            $('#section-networkingandcontentdelivery-vpc-trafficmirrortargets-datatable').bootstrapTable('append', [{
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

    unblockUI('#section-networkingandcontentdelivery-vpc-vpcs-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-vpccidrblocks-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpc-dhcpoptionsassociations-datatable');
}
