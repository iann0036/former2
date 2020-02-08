/* ========================================================================== */
// EC2
/* ========================================================================== */

sections.push({
    'category': 'Compute',
    'service': 'EC2',
    'resourcetypes': {
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
                        field: 'instanceid',
                        title: 'Instance ID',
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
                    },
                    {
                        field: 'instancestate',
                        title: 'Instance State',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Hosts': {
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
                        field: 'hostid',
                        title: 'Host ID',
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
                        field: 'state',
                        title: 'State',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Load Balancers': {
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
                        field: 'vpcid',
                        title: 'VPC ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'scheme',
                        title: 'Scheme',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'V2 Load Balancers': {
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
                        field: 'lbtype',
                        title: 'Type',
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
                        field: 'scheme',
                        title: 'Scheme',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'V2 Load Balancer Listeners': {
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
                        field: 'lbarn',
                        title: 'Load Balancer ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'port',
                        title: 'Port',
                        sortable: true,
                        editable: true,
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
                    }
                ]
            ]
        },
        'V2 Load Balancer Listener Rules': {
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
                        field: 'priority',
                        title: 'Priority',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'isdefault',
                        title: 'Default',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'V2 Load Balancer Listener Certificates': {
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
                        field: 'isdefault',
                        title: 'Default',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Auto Scaling Groups': {
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
                        field: 'lcname',
                        title: 'Launch Configuration Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'sizes',
                        title: 'Min / Max / Desired',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'hctype',
                        title: 'Health Check Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Auto Scaling Policies': {
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
                        field: 'asgname',
                        title: 'Auto Scaling Group Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'policytype',
                        title: 'Policy Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'metrigaggtype',
                        title: 'Metric Aggregation Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'scalingadjustment',
                        title: 'Scaling Adjustment',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Auto Scaling Scheduled Actions': {
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
                        field: 'asgname',
                        title: 'Auto Scaling Group Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'actionarn',
                        title: 'Action ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'minmaxdesired',
                        title: 'Min / Max / Desired',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Auto Scaling Lifecycle Hooks': {
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
                        field: 'asgname',
                        title: 'Auto Scaling Group Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'transition',
                        title: 'Transition',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'notificationtargetarn',
                        title: 'Notification Target ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Security Groups': {
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
        'Launch Configurations': {
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
                        field: 'imageid',
                        title: 'Image ID',
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
                        field: 'tenancy',
                        title: 'Tenancy',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Launch Templates': {
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
                        field: 'ltid',
                        title: 'Launch Template ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'latestversion',
                        title: 'Latest Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'V2 Target Groups': {
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
                        field: 'targettype',
                        title: 'Target Type',
                        sortable: true,
                        editable: true,
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
                        field: 'port',
                        title: 'Port',
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
        'Capacity Reservations': {
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
                    },
                    {
                        field: 'instancecount',
                        title: 'Instance Count',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'tenancy',
                        title: 'Tenancy',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Fleets': {
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
                        title: 'Volume ID',
                        field: 'volumeid',
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
                        field: 'volumetype',
                        title: 'Volume Type',
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
                        field: 'size',
                        title: 'Size',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'iops',
                        title: 'IOPS',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Volume Attachments': {
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
                        title: 'Volume ID',
                        field: 'volumeid',
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
                        field: 'instanceid',
                        title: 'Instance ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'device',
                        title: 'Device',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'state',
                        title: 'State',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Network Interfaces': {
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
                        title: 'Interface ID',
                        field: 'interfaceid',
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
                        field: 'availabilityzone',
                        title: 'Availability Zone',
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
                        field: 'privateip',
                        title: 'Private IP Address',
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
        'Network Interface Attachments': {
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
                        field: 'interfaceid',
                        title: 'Network Interface ID',
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
                        field: 'deviceindex',
                        title: 'Device Index',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Network Interface Permissions': {
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
                        title: 'Permission ID',
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
                        field: 'interfaceid',
                        title: 'Interface ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'accountid',
                        title: 'Account ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'service',
                        title: 'Service',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'permission',
                        title: 'Permission',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Spot Requests': {
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
                        title: 'Request ID',
                        field: 'requestid',
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
                        field: 'spotprice',
                        title: 'Spot Price',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'srtype',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'targetcapacity',
                        title: 'Target Capacity',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'ondemandtargetcapacity',
                        title: 'On-Demand Target Capacity',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Placement Groups': {
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
                        field: 'groupstate',
                        title: 'State',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'strategy',
                        title: 'Strategy',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Flow Logs': {
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
                        field: 'logdestination',
                        title: 'Log Destination',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'resourceid',
                        title: 'Resource ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'traffictype',
                        title: 'Traffic Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Snapshot Lifecycle Policies': {
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
                        field: 'datecreated',
                        title: 'Date Created',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Application Auto Scaling Scalable Targets': {
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
                        title: 'Resource ID',
                        field: 'resourceid',
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
                        field: 'scalabledimension',
                        title: 'Scalable Dimension',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'mincapacity',
                        title: 'Min Capacity',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'maxcapacity',
                        title: 'Max Capacity',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Application Auto Scaling Scaling Policies': {
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
                        title: 'Resource ID',
                        field: 'resourceid',
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
                        field: 'policyname',
                        title: 'Policy Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'scalabledimension',
                        title: 'Scalable Dimension',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'policytype',
                        title: 'Policy Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Key Pairs': {
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
                        field: 'fingerprint',
                        title: 'Fingerprint',
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

async function updateDatatableComputeEC2() {
    blockUI('#section-compute-ec2-instances-datatable');
    blockUI('#section-compute-ec2-hosts-datatable');
    blockUI('#section-compute-ec2-loadbalancers-datatable');
    blockUI('#section-compute-ec2-v2loadbalancers-datatable');
    blockUI('#section-compute-ec2-v2loadbalancerlisteners-datatable');
    blockUI('#section-compute-ec2-v2loadbalancerlistenerrules-datatable');
    blockUI('#section-compute-ec2-v2loadbalancerlistenercertificates-datatable');
    blockUI('#section-compute-ec2-autoscalinggroups-datatable');
    blockUI('#section-compute-ec2-autoscalingpolicies-datatable');
    blockUI('#section-compute-ec2-autoscalingscheduledactions-datatable');
    blockUI('#section-compute-ec2-autoscalinglifecyclehooks-datatable');
    blockUI('#section-compute-ec2-securitygroups-datatable');
    blockUI('#section-compute-ec2-launchconfigurations-datatable');
    blockUI('#section-compute-ec2-launchtemplates-datatable');
    blockUI('#section-compute-ec2-targetgroups-datatable');
    blockUI('#section-compute-ec2-v2targetgroups-datatable');
    blockUI('#section-compute-ec2-capacityreservations-datatable');
    blockUI('#section-compute-ec2-fleets-datatable');
    blockUI('#section-compute-ec2-volumes-datatable');
    blockUI('#section-compute-ec2-volumeattachments-datatable');
    blockUI('#section-compute-ec2-networkinterfaces-datatable');
    blockUI('#section-compute-ec2-networkinterfaceattachments-datatable');
    blockUI('#section-compute-ec2-networkinterfacepermissions-datatable');
    blockUI('#section-compute-ec2-spotrequests-datatable');
    blockUI('#section-compute-ec2-placementgroups-datatable');
    blockUI('#section-compute-ec2-flowlogs-datatable');
    blockUI('#section-compute-ec2-snapshotlifecyclepolicies-datatable');
    blockUI('#section-compute-ec2-applicationautoscalingscalabletargets-datatable');
    blockUI('#section-compute-ec2-applicationautoscalingscalingpolicies-datatable');
    blockUI('#section-compute-ec2-keypairs-datatable');

    await sdkcall("EC2", "describeInstances", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-instances-datatable').bootstrapTable('removeAll');

        data.Reservations.forEach(reservation => {
            reservation.Instances.forEach(async (instance) => {
                var name = "";

                if (instance.Tags) {
                    instance.Tags.forEach(tag => {
                        if (tag.Key == "Name") {
                            name = tag.Value;
                        }
                    });
                }

                if (instance.BlockDeviceMappings) {
                    for (var i = 0; i < instance.BlockDeviceMappings.length; i++) {
                        if (instance.BlockDeviceMappings[i].Ebs && instance.BlockDeviceMappings[i].Ebs.VolumeId) {
                            await sdkcall("EC2", "describeVolumes", {
                                VolumeIds: [instance.BlockDeviceMappings[i].Ebs.VolumeId]
                            }, true).then((data) => {
                                instance.BlockDeviceMappings[i].Ebs["Encrypted"] = data.Volumes[0].Encrypted;
                                instance.BlockDeviceMappings[i].Ebs["Size"] = data.Volumes[0].Size;
                                instance.BlockDeviceMappings[i].Ebs["SnapshotId"] = data.Volumes[0].SnapshotId;
                                instance.BlockDeviceMappings[i].Ebs["Iops"] = data.Volumes[0].Iops;
                                instance.BlockDeviceMappings[i].Ebs["VolumeType"] = data.Volumes[0].VolumeType;
                            });
                        }
                    }
                }

                await sdkcall("EC2", "describeInstanceAttribute", {
                    InstanceId: instance.InstanceId,
                    Attribute: "userData"
                }, true).then((data) => {
                    if (data.UserData && data.UserData.Value && data.UserData.Value.length) {
                        instance["UserData"] = data.UserData.Value;
                    }
                });

                if (instance.ElasticGpuAssociations && instance.ElasticGpuAssociations.length) {
                    instance['ElasticGpus'] = [];
                    instance.ElasticGpuAssociations.forEach(async (elasticGpuAssociation) => {
                        await sdkcall("EC2", "describeElasticGpus", {
                            ElasticGpuIds: [elasticGpuAssociation.ElasticGpuId]
                        }, true).then((data) => {
                            instance['ElasticGpus'].push(data.ElasticGpuSet[0]);
                        });
                    });
                }

                $('#section-compute-ec2-instances-datatable').bootstrapTable('append', [{
                    f2id: instance.InstanceId,
                    f2type: 'ec2.instance',
                    f2data: instance,
                    f2region: region,
                    f2link: 'https://console.aws.amazon.com/ec2/home?region=' + region + '#Instances:search=' + instance.InstanceId,
                    name: name,
                    instanceid: instance.InstanceId,
                    instancetype: instance.InstanceType,
                    availabilityzone: instance.Placement.AvailabilityZone,
                    instancestate: instance.State.Name
                }]);
            });
        });

        unblockUI('#section-compute-ec2-instances-datatable');
    });

    await sdkcall("EC2", "describeHosts", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-hosts-datatable').bootstrapTable('removeAll');

        data.Hosts.forEach(host => {
            $('#section-compute-ec2-hosts-datatable').bootstrapTable('append', [{
                f2id: host.HostId,
                f2type: 'ec2.host',
                f2data: host,
                f2region: region,
                hostid: host.HostId,
                availabilityzone: host.AvailabilityZone,
                state: host.State
            }]);
        });

        unblockUI('#section-compute-ec2-hosts-datatable');
    });

    await sdkcall("EC2", "describeCapacityReservations", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-capacityreservations-datatable').bootstrapTable('removeAll');

        data.CapacityReservations.forEach(capacityreservation => {
            $('#section-compute-ec2-capacityreservations-datatable').bootstrapTable('append', [{
                f2id: capacityreservation.CapacityReservationId,
                f2type: 'ec2.capacityreservation',
                f2data: capacityreservation,
                f2region: region,
                id: capacityreservation.CapacityReservationId,
                availabilityzone: capacityreservation.AvailabilityZone,
                instancetype: capacityreservation.InstanceType,
                tenancy: capacityreservation.Tenancy,
                instancecount: capacityreservation.TotalInstanceCount
            }]);
        });

        unblockUI('#section-compute-ec2-capacityreservations-datatable');
    });

    await sdkcall("EC2", "describeFleets", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-fleets-datatable').bootstrapTable('removeAll');

        data.Fleets.forEach(fleet => {
            $('#section-compute-ec2-fleets-datatable').bootstrapTable('append', [{
                f2id: fleet.FleetId,
                f2type: 'ec2.fleet',
                f2data: fleet,
                f2region: region,
                id: fleet.FleetId,
                type: fleet.Type
            }]);
        });

        unblockUI('#section-compute-ec2-fleets-datatable');
    });

    await sdkcall("ELB", "describeLoadBalancers", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-loadbalancers-datatable').bootstrapTable('removeAll');

        data.LoadBalancerDescriptions.forEach(loadBalancer => {
            $('#section-compute-ec2-loadbalancers-datatable').bootstrapTable('append', [{
                f2id: loadBalancer.LoadBalancerName,
                f2type: 'elb.loadbalancer',
                f2data: loadBalancer,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/ec2/home?region=' + region + '#LoadBalancers:search=' + loadBalancer.LoadBalancerName,
                name: loadBalancer.LoadBalancerName,
                vpcid: loadBalancer.VPCId,
                scheme: loadBalancer.Scheme
            }]);
        });

        unblockUI('#section-compute-ec2-loadbalancers-datatable');
    });

    await sdkcall("ELBv2", "describeLoadBalancers", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-v2loadbalancers-datatable').bootstrapTable('removeAll');
        $('#section-compute-ec2-v2loadbalancerlisteners-datatable').bootstrapTable('removeAll');
        $('#section-compute-ec2-v2loadbalancerlistenercertificates-datatable').bootstrapTable('removeAll');
        $('#section-compute-ec2-v2loadbalancerlistenerrules-datatable').bootstrapTable('removeAll');

        data.LoadBalancers.forEach(async (loadBalancer) => {
            await sdkcall("ELBv2", "describeLoadBalancerAttributes", {
                LoadBalancerArn: loadBalancer.LoadBalancerArn
            }, true).then((data) => {
                loadBalancer['Attributes'] = data.Attributes;
                $('#section-compute-ec2-v2loadbalancers-datatable').bootstrapTable('append', [{
                    f2id: loadBalancer.LoadBalancerArn,
                    f2type: 'elbv2.loadbalancer',
                    f2data: loadBalancer,
                    f2region: region,
                    name: loadBalancer.LoadBalancerName,
                    vpcid: loadBalancer.VPCId,
                    scheme: loadBalancer.Scheme,
                    lbtype: loadBalancer.Type
                }]);
            });

            await sdkcall("ELBv2", "describeListeners", {
                LoadBalancerArn: loadBalancer.LoadBalancerArn
            }, true).then(async (data) => {
                await Promise.all(data.Listeners.map(listener => {
                    $('#section-compute-ec2-v2loadbalancerlisteners-datatable').bootstrapTable('append', [{
                        f2id: listener.ListenerArn,
                        f2type: 'elbv2.loadbalancerlistener',
                        f2data: listener,
                        f2region: region,
                        arn: listener.ListenerArn,
                        lbarn: listener.LoadBalancerArn,
                        port: listener.Port,
                        protocol: listener.Protocol
                    }]);

                    return Promise.all([
                        listener.Protocol.startsWith("HTTP") ? sdkcall("ELBv2", "describeListenerCertificates", {
                            ListenerArn: listener.ListenerArn
                        }, true).then((data) => {
                            data.Certificates.forEach(certificate => {
                                certificate['ListenerArn'] = listener.ListenerArn;
                                $('#section-compute-ec2-v2loadbalancerlistenercertificates-datatable').bootstrapTable('append', [{
                                    f2id: certificate.CertificateArn,
                                    f2type: 'elbv2.loadbalancerlistenercertificate',
                                    f2data: certificate,
                                    f2region: region,
                                    arn: certificate.CertificateArn,
                                    isdefault: certificate.IsDefault
                                }]);
                            });
                        }) : Promise.resolve(),
                        sdkcall("ELBv2", "describeRules", {
                            ListenerArn: listener.ListenerArn
                        }, true).then((data) => {
                            data.Rules.forEach(rule => {
                                rule['ListenerArn'] = listener.ListenerArn;
                                $('#section-compute-ec2-v2loadbalancerlistenerrules-datatable').bootstrapTable('append', [{
                                    f2id: rule.RuleArn,
                                    f2type: 'elbv2.loadbalancerlistenerrule',
                                    f2data: rule,
                                    f2region: region,
                                    arn: rule.RuleArn,
                                    priority: rule.Priority,
                                    isdefault: rule.IsDefault
                                }]);
                            });
                        })
                    ]);
                }));
            });
        });

        unblockUI('#section-compute-ec2-v2loadbalancers-datatable');
        unblockUI('#section-compute-ec2-v2loadbalancerlisteners-datatable');
        unblockUI('#section-compute-ec2-v2loadbalancerlistenercertificates-datatable');
        unblockUI('#section-compute-ec2-v2loadbalancerlistenerrules-datatable');
    });

    await sdkcall("AutoScaling", "describeAutoScalingGroups", {
        // no params
    }, true).then(async (data) => {
        $('#section-compute-ec2-autoscalinggroups-datatable').bootstrapTable('removeAll');
        $('#section-compute-ec2-autoscalinglifecyclehooks-datatable').bootstrapTable('removeAll');

        await Promise.all(data.AutoScalingGroups.map(autoScalingGroup => {
            $('#section-compute-ec2-autoscalinggroups-datatable').bootstrapTable('append', [{
                f2id: autoScalingGroup.AutoScalingGroupName,
                f2type: 'autoscaling.autoscalinggroup',
                f2data: autoScalingGroup,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/ec2/autoscaling/home?region=' + region + '#AutoScalingGroups:id=' + autoScalingGroup.AutoScalingGroupName + ';filter=' + autoScalingGroup.AutoScalingGroupName,
                name: autoScalingGroup.AutoScalingGroupName,
                lcname: autoScalingGroup.LaunchConfigurationName,
                sizes: autoScalingGroup.MinSize + "/" + autoScalingGroup.MaxSize + "/" + autoScalingGroup.DesiredCapacity,
                hctype: autoScalingGroup.HealthCheckType
            }]);

            return sdkcall("AutoScaling", "describeLifecycleHooks", {
                AutoScalingGroupName: autoScalingGroup.AutoScalingGroupName
            }, true).then((data) => {
                data.LifecycleHooks.forEach(lifecycleHook => {
                    $('#section-compute-ec2-autoscalinglifecyclehooks-datatable').bootstrapTable('append', [{
                        f2id: lifecycleHook.LifecycleHookName,
                        f2type: 'autoscaling.lifecyclehook',
                        f2data: lifecycleHook,
                        f2region: region,
                        name: lifecycleHook.LifecycleHookName,
                        asgname: lifecycleHook.AutoScalingGroupName,
                        transition: lifecycleHook.LifecycleTransition,
                        notificationtargetarn: lifecycleHook.NotificationTargetARN
                    }]);
                });
            });
        }));

        unblockUI('#section-compute-ec2-autoscalinggroups-datatable');
        unblockUI('#section-compute-ec2-autoscalinglifecyclehooks-datatable');
    });

    await sdkcall("AutoScaling", "describeLaunchConfigurations", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-launchconfigurations-datatable').bootstrapTable('removeAll');

        data.LaunchConfigurations.forEach(launchConfiguration => {
            $('#section-compute-ec2-launchconfigurations-datatable').bootstrapTable('append', [{
                f2id: launchConfiguration.LaunchConfigurationName,
                f2type: 'autoscaling.launchconfiguration',
                f2data: launchConfiguration,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/ec2/autoscaling/home?region=' + region + '#LaunchConfigurations:id=' + launchConfiguration.LaunchConfigurationName + ';filter=' + launchConfiguration.LaunchConfigurationName,
                name: launchConfiguration.LaunchConfigurationName,
                imageid: launchConfiguration.ImageId,
                instancetype: launchConfiguration.InstanceType,
                tenancy: launchConfiguration.PlacementTenancy
            }]);
        });

        unblockUI('#section-compute-ec2-launchconfigurations-datatable');
    });

    await sdkcall("EC2", "describeLaunchTemplates", {
        // no params
    }, true).then(async (data) => {
        $('#section-compute-ec2-launchtemplates-datatable').bootstrapTable('removeAll');

        if (data.LaunchTemplates) {
            await Promise.all(data.LaunchTemplates.map(launchTemplate => {
                return sdkcall("EC2", "describeLaunchTemplateVersions", {
                    LaunchTemplateId: launchTemplate.LaunchTemplateId,
                    Versions: [launchTemplate.LatestVersionNumber.toString()]
                }, true).then((data) => {
                    launchTemplate = data.LaunchTemplateVersions[0];
                    $('#section-compute-ec2-launchtemplates-datatable').bootstrapTable('append', [{
                        f2id: launchTemplate.LaunchTemplateName,
                        f2type: 'ec2.launchtemplate',
                        f2data: launchTemplate,
                        f2region: region,
                        f2link: 'https://console.aws.amazon.com/ec2/v2/home#LaunchTemplates:launchTemplateId=' + launchTemplate.LaunchTemplateId,
                        name: launchTemplate.LaunchTemplateName,
                        latestversion: launchTemplate.LatestVersionNumber,
                        ltid: launchTemplate.LaunchTemplateId
                    }]);
                });
            }));
        }

        unblockUI('#section-compute-ec2-launchtemplates-datatable');
    });

    await sdkcall("ELBv2", "describeTargetGroups", {
        // no params
    }, true).then(async (data) => {
        $('#section-compute-ec2-v2targetgroups-datatable').bootstrapTable('removeAll');

        await Promise.all(data.TargetGroups.map(async (targetGroup) => {
            await sdkcall("ELBv2", "describeTargetHealth", {
                TargetGroupArn: targetGroup.TargetGroupArn
            }, true).then((data) => {
                targetGroup["Targets"] = data.TargetHealthDescriptions;
            });

            return sdkcall("ELBv2", "describeTargetGroupAttributes", {
                TargetGroupArn: targetGroup.TargetGroupArn
            }, true).then((data) => {
                targetGroup["TargetGroupAttributes"] = data.Attributes;

                $('#section-compute-ec2-v2targetgroups-datatable').bootstrapTable('append', [{
                    f2id: targetGroup.TargetGroupArn,
                    f2type: 'elbv2.targetgroup',
                    f2data: targetGroup,
                    f2region: region,
                    name: targetGroup.TargetGroupName,
                    protocol: targetGroup.Protocol,
                    port: targetGroup.Port,
                    vpcid: targetGroup.VpcId,
                    targettype: targetGroup.targettype
                }]);
            });
        }));

        unblockUI('#section-compute-ec2-v2targetgroups-datatable');
    });

    await sdkcall("EC2", "describeVolumes", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-volumes-datatable').bootstrapTable('removeAll');
        $('#section-compute-ec2-volumeattachments-datatable').bootstrapTable('removeAll');

        data.Volumes.forEach(volume => {
            $('#section-compute-ec2-volumes-datatable').bootstrapTable('append', [{
                f2id: volume.VolumeId,
                f2type: 'ec2.volume',
                f2data: volume,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/ec2/home?region=' + region + '#Volumes:search=' + volume.VolumeId,
                volumeid: volume.VolumeId,
                volumetype: volume.VolumeType,
                availabilityzone: volume.AvailabilityZone,
                size: volume.Size + " GB",
                iops: volume.Iops
            }]);

            if (volume.Attachments) {
                volume.Attachments.forEach(attachment => {
                    $('#section-compute-ec2-volumeattachments-datatable').bootstrapTable('append', [{
                        f2id: attachment.VolumeId + " " + attachment.InstanceId,
                        f2type: 'ec2.volumeattachment',
                        f2data: attachment,
                        f2region: region,
                        volumeid: attachment.VolumeId,
                        device: attachment.Device,
                        instanceid: attachment.InstanceId,
                        state: attachment.State
                    }]);
                });
            }
        });

        unblockUI('#section-compute-ec2-volumes-datatable');
        unblockUI('#section-compute-ec2-volumeattachments-datatable');
    });

    await sdkcall("EC2", "describeNetworkInterfaces", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-networkinterfaces-datatable').bootstrapTable('removeAll');
        $('#section-compute-ec2-networkinterfaceattachments-datatable').bootstrapTable('removeAll');

        data.NetworkInterfaces.forEach(networkInterface => {
            $('#section-compute-ec2-networkinterfaces-datatable').bootstrapTable('append', [{
                f2id: networkInterface.NetworkInterfaceId,
                f2type: 'ec2.networkinterface',
                f2data: networkInterface,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/ec2/home?region=' + region + '#NIC:search=' + networkInterface.NetworkInterfaceId,
                interfaceid: networkInterface.NetworkInterfaceId,
                availabilityzone: networkInterface.AvailabilityZone,
                description: networkInterface.Description,
                privateip: networkInterface.PrivateIpAddress,
                subnetid: networkInterface.SubnetId,
                vpcid: networkInterface.VpcId
            }]);

            if (networkInterface.Attachment) {
                networkInterface.Attachment['NetworkInterfaceId'] = networkInterface.NetworkInterfaceId;
                $('#section-compute-ec2-networkinterfaceattachments-datatable').bootstrapTable('append', [{
                    f2id: networkInterface.Attachment.AttachmentId,
                    f2type: 'ec2.networkinterfaceattachment',
                    f2data: networkInterface.Attachment,
                    f2region: region,
                    interfaceid: networkInterface.NetworkInterfaceId,
                    instanceid: networkInterface.Attachment.InstanceId,
                    attachmentid: networkInterface.Attachment.AttachmentId,
                    deviceindex: networkInterface.Attachment.DeviceIndex
                }]);
            }
        });

        unblockUI('#section-compute-ec2-networkinterfaces-datatable');
        unblockUI('#section-compute-ec2-networkinterfaceattachments-datatable');
    });

    sdkcall("EC2", "describeNetworkInterfacePermissions", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-networkinterfacepermissions-datatable').bootstrapTable('removeAll');

        data.NetworkInterfacePermissions.forEach(networkInterfacePermission => {
            $('#section-compute-ec2-networkinterfacepermissions-datatable').bootstrapTable('append', [{
                f2id: networkInterfacePermission.NetworkInterfacePermissionId,
                f2type: 'ec2.networkinterfacepermission',
                f2data: networkInterfacePermission,
                f2region: region,
                id: networkInterfacePermission.NetworkInterfacePermissionId,
                interfaceid: networkInterfacePermission.NetworkInterfaceId,
                accountid: networkInterfacePermission.AwsAccountId,
                service: networkInterfacePermission.AwsService,
                permission: networkInterfacePermission.Permission
            }]);
        });

        unblockUI('#section-compute-ec2-networkinterfacepermissions-datatable');
    });

    await sdkcall("EC2", "describeSpotFleetRequests", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-spotrequests-datatable').bootstrapTable('removeAll');

        data.SpotFleetRequestConfigs.forEach(spotFleetRequestConfig => {
            $('#section-compute-ec2-spotrequests-datatable').bootstrapTable('append', [{
                f2id: spotFleetRequestConfig.SpotFleetRequestId,
                f2type: 'ec2.spotrequest',
                f2data: spotFleetRequestConfig,
                f2region: region,
                requestid: spotFleetRequestConfig.SpotFleetRequestId,
                spotprice: spotFleetRequestConfig.SpotFleetRequestConfig.SpotPrice,
                targetcapacity: spotFleetRequestConfig.SpotFleetRequestConfig.TargetCapacity,
                srtype: spotFleetRequestConfig.SpotFleetRequestConfig.Type,
                ondemandtargetcapacity: spotFleetRequestConfig.SpotFleetRequestConfig.OnDemandTargetCapacity
            }]);
        });

        unblockUI('#section-compute-ec2-spotrequests-datatable');
    });

    await sdkcall("EC2", "describePlacementGroups", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-placementgroups-datatable').bootstrapTable('removeAll');

        data.PlacementGroups.forEach(placementGroup => {
            $('#section-compute-ec2-placementgroups-datatable').bootstrapTable('append', [{
                f2id: placementGroup.GroupName,
                f2type: 'ec2.placementgroup',
                f2data: placementGroup,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/ec2/v2/home#PlacementGroups:groupName=' + placementGroup.GroupName,
                name: placementGroup.GroupName,
                strategy: placementGroup.Strategy,
                groupstate: placementGroup.State
            }]);
        });

        unblockUI('#section-compute-ec2-placementgroups-datatable');
    });

    await sdkcall("AutoScaling", "describePolicies", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-autoscalingpolicies-datatable').bootstrapTable('removeAll');

        data.ScalingPolicies.forEach(scalingPolicy => {
            $('#section-compute-ec2-autoscalingpolicies-datatable').bootstrapTable('append', [{
                f2id: scalingPolicy.PolicyARN,
                f2type: 'autoscaling.policy',
                f2data: scalingPolicy,
                f2region: region,
                name: scalingPolicy.PolicyName,
                asgname: scalingPolicy.AutoScalingGroupName,
                policytype: scalingPolicy.PolicyType,
                metrigaggtype: scalingPolicy.MetricAggregationType,
                scalingadjustment: scalingPolicy.ScalingAdjustment
            }]);
        });

        unblockUI('#section-compute-ec2-autoscalingpolicies-datatable');
    });

    await sdkcall("AutoScaling", "describeScheduledActions", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-autoscalingscheduledactions-datatable').bootstrapTable('removeAll');

        data.ScheduledUpdateGroupActions.forEach(scheduledAction => {
            $('#section-compute-ec2-autoscalingscheduledactions-datatable').bootstrapTable('append', [{
                f2id: scheduledAction.ScheduledActionARN,
                f2type: 'autoscaling.scheduledaction',
                f2data: scheduledAction,
                f2region: region,
                name: scheduledAction.ScheduledActionName,
                asgname: scheduledAction.AutoScalingGroupName,
                actionarn: scheduledAction.ScheduledActionARN,
                minmaxdesired: scheduledAction.MinSize + "/" + scheduledAction.MaxSize + "/" + scheduledAction.DesiredCapacity
            }]);
        });

        unblockUI('#section-compute-ec2-autoscalingscheduledactions-datatable');
    });

    await sdkcall("EC2", "describeSecurityGroups", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-securitygroups-datatable').bootstrapTable('removeAll');

        data.SecurityGroups.forEach(securityGroup => {
            $('#section-compute-ec2-securitygroups-datatable').bootstrapTable('append', [{
                f2id: securityGroup.GroupId,
                f2type: 'ec2.securitygroup',
                f2data: securityGroup,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/ec2/home?region=' + region + '#SecurityGroups:search=' + securityGroup.GroupId,
                id: securityGroup.GroupId,
                description: securityGroup.Description,
                vpcid: securityGroup.VpcId
            }]);
        });

        unblockUI('#section-compute-ec2-securitygroups-datatable');
    });

    await sdkcall("EC2", "describeFlowLogs", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-flowlogs-datatable').bootstrapTable('removeAll');

        if (data.FlowLogs) {
            data.FlowLogs.forEach(flowLog => {
                $('#section-compute-ec2-flowlogs-datatable').bootstrapTable('append', [{
                    f2id: flowLog.FlowLogId,
                    f2type: 'ec2.flowlog',
                    f2data: flowLog,
                    f2region: region,
                    id: flowLog.FlowLogId,
                    logdestination: flowLog.LogDestination,
                    resourceid: flowLog.ResourceId,
                    traffictype: flowLog.TrafficType
                }]);
            });
        }

        unblockUI('#section-compute-ec2-flowlogs-datatable');
    });

    await sdkcall("DLM", "getLifecyclePolicies", {
        // no params
    }, true).then(async (data) => {
        $('#section-compute-ec2-snapshotlifecyclepolicies-datatable').bootstrapTable('removeAll');

        if (data.Policies) {
            await Promise.all(data.Policies.map(policy => {
                return sdkcall("DLM", "getLifecyclePolicy", {
                    PolicyId: policy.PolicyId
                }, true).then((data) => {
                    $('#section-compute-ec2-snapshotlifecyclepolicies-datatable').bootstrapTable('append', [{
                        f2id: policy.Policy.PolicyId,
                        f2type: 'ec2.snapshotlifecyclepolicy',
                        f2data: policy.Policy,
                        f2region: region,
                        f2link: 'https://console.aws.amazon.com/ec2/v2/home?region=' + region + '#Lifecycle:search=' + policy.Policy.PolicyId + ';sort=PolicyId',
                        id: policy.Policy.PolicyId,
                        description: policy.Policy.Description,
                        datecreated: policy.Policy.DateCreated
                    }]);
                });
            }));
        }

        unblockUI('#section-compute-ec2-snapshotlifecyclepolicies-datatable');
    });

    await sdkcall("ApplicationAutoScaling", "describeScalableTargets", {
        ServiceNamespace: "ec2"
    }, true).then(async (data) => {
        $('#section-compute-ec2-applicationautoscalingscalabletargets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ScalableTargets.map(target => {
            return sdkcall("ApplicationAutoScaling", "describeScheduledActions", {
                ServiceNamespace: "ec2",
                ResourceId: target.ResourceId,
                ScalableDimension: target.ScalableDimension
            }, true).then((actions) => {
                target['ScheduledActions'] = actions.ScheduledActions;

                $('#section-compute-ec2-applicationautoscalingscalabletargets-datatable').bootstrapTable('append', [{
                    f2id: target.ResourceId,
                    f2type: 'applicationautoscaling.scalabletarget',
                    f2data: target,
                    f2region: region,
                    resourceid: target.ResourceId,
                    scalabledimension: target.ScalableDimension,
                    mincapacity: target.MinCapacity,
                    maxcapacity: target.MaxCapacity
                }]);
            });
        }));

        unblockUI('#section-compute-ec2-applicationautoscalingscalabletargets-datatable');
    });

    await sdkcall("ApplicationAutoScaling", "describeScalingPolicies", {
        ServiceNamespace: "ec2"
    }, true).then(async (data) => {
        $('#section-compute-ec2-applicationautoscalingscalingpolicies-datatable').bootstrapTable('removeAll');

        if (data.ScalableTargets) {
            data.ScalableTargets.forEach(target => {
                $('#section-compute-ec2-applicationautoscalingscalingpolicies-datatable').bootstrapTable('append', [{
                    f2id: target.PolicyARN,
                    f2type: 'applicationautoscaling.scalingpolicy',
                    f2data: target,
                    f2region: region,
                    resourceid: target.ResourceId,
                    scalabledimension: target.ScalableDimension,
                    policyname: target.PolicyName,
                    policytype: target.PolicyType
                }]);
            });
        }

        unblockUI('#section-compute-ec2-applicationautoscalingscalingpolicies-datatable');
    });

    await sdkcall("EC2", "describeKeyPairs", {
        // no params
    }, true).then(async (data) => {
        $('#section-compute-ec2-keypairs-datatable').bootstrapTable('removeAll');

        if (data.KeyPairs) {
            data.KeyPairs.forEach(keypair => {
                $('#section-compute-ec2-keypairs-datatable').bootstrapTable('append', [{
                    f2id: keypair.KeyName,
                    f2type: 'ec2.keypair',
                    f2data: keypair,
                    f2region: region,
                    name: keypair.KeyName,
                    fingerprint: keypair.KeyFingerprint
                }]);
            });
        }

        unblockUI('#section-compute-ec2-keypairs-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "ec2.placementgroup") {
        reqParams.cfn['Strategy'] = obj.data.Strategy;
        reqParams.tf['strategy'] = obj.data.Strategy;
        reqParams.tf['name'] = obj.data.GroupName;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::PlacementGroup',
            'terraformType': 'aws_placement_group',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.GroupName
            }
        });
    } else if (obj.type == "elbv2.targetgroup") {
        var matcherHttpCode = null;
        if (obj.data.Matcher) {
            matcherHttpCode = obj.data.Matcher.HttpCode;
        }
        reqParams.tf['health_check'] = {
            'interval': obj.data.HealthCheckIntervalSeconds,
            'path': obj.data.HealthCheckPath,
            'port': obj.data.HealthCheckPort,
            'protocol': obj.data.HealthCheckProtocol,
            'timeout': obj.data.HealthCheckTimeoutSeconds,
            'unhealthy_threshold': obj.data.UnhealthyThresholdCount,
            'healthy_threshold': obj.data.HealthyThresholdCount,
            'matcher': matcherHttpCode
        };
        reqParams.cfn['HealthCheckIntervalSeconds'] = obj.data.HealthCheckIntervalSeconds;
        reqParams.cfn['HealthCheckPath'] = obj.data.HealthCheckPath;
        reqParams.cfn['Port'] = obj.data.Port;
        reqParams.tf['port'] = obj.data.Port;
        reqParams.cfn['Protocol'] = obj.data.Protocol;
        reqParams.tf['protocol'] = obj.data.Protocol;
        reqParams.cfn['HealthCheckPort'] = obj.data.HealthCheckPort;
        reqParams.cfn['HealthCheckProtocol'] = obj.data.HealthCheckProtocol;
        reqParams.cfn['HealthCheckTimeoutSeconds'] = obj.data.HealthCheckTimeoutSeconds;
        reqParams.cfn['UnhealthyThresholdCount'] = obj.data.UnhealthyThresholdCount;
        reqParams.cfn['TargetType'] = obj.data.TargetType;
        reqParams.tf['target_type'] = obj.data.TargetType;
        reqParams.cfn['Matcher'] = obj.data.Matcher;
        reqParams.cfn['HealthyThresholdCount'] = obj.data.HealthyThresholdCount;
        reqParams.cfn['VpcId'] = obj.data.VpcId;
        reqParams.tf['vpc_id'] = obj.data.VpcId;
        reqParams.cfn['Name'] = obj.data.TargetGroupName;
        reqParams.tf['name'] = obj.data.TargetGroupName;
        reqParams.cfn['HealthCheckEnabled'] = obj.data.HealthCheckEnabled;
        reqParams.cfn['TargetGroupAttributes'] = obj.data.TargetGroupAttributes;
        if (obj.data.Targets) {
            reqParams.cfn['Targets'] = [];
            obj.data.Targets.forEach(target => {
                if (target.Target) {
                    reqParams.cfn['Targets'].push(target.Target);
                }
            });
        }

        /*
        TODO:
        Tags:
            - Resource Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elbv2', obj.id),
            'region': obj.region,
            'service': 'elbv2',
            'type': 'AWS::ElasticLoadBalancingV2::TargetGroup',
            'terraformType': 'aws_lb_target_group',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.TargetGroupArn,
                'GetAtt': {
                    'TargetGroupName': obj.data.TargetGroupName
                }
            }
        });
    } else if (obj.type == "ec2.volume") {
        reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
        reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;
        reqParams.cfn['Encrypted'] = obj.data.Encrypted;
        reqParams.tf['encrypted'] = obj.data.Encrypted;
        reqParams.cfn['Iops'] = (obj.data.VolumeType == "io1") ? obj.data.Iops : null;
        reqParams.tf['iops'] = (obj.data.VolumeType == "io1") ? obj.data.Iops : null;
        reqParams.cfn['Size'] = obj.data.Size;
        reqParams.tf['size'] = obj.data.Size;
        reqParams.cfn['VolumeType'] = obj.data.VolumeType;
        reqParams.tf['type'] = obj.data.VolumeType;
        reqParams.cfn['SnapshotId'] = (obj.data.SnapshotId == "") ? null : obj.data.SnapshotId;
        reqParams.tf['snapshot_id'] = (obj.data.SnapshotId == "") ? null : obj.data.SnapshotId;
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        reqParams.tf['kms_key_id'] = obj.data.KmsKeyId;
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }

        /*
        TODO:
        AutoEnableIO: Boolean
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::Volume',
            'terraformType': 'aws_ebs_volume',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.VolumeId,
                'Import': {
                    'VolumeId': obj.data.VolumeId
                }
            }
        });
    } else if (obj.type == "ec2.volumeattachment") {
        reqParams.cfn['VolumeId'] = obj.data.VolumeId;
        reqParams.tf['volume_id'] = obj.data.VolumeId;
        reqParams.cfn['InstanceId'] = obj.data.InstanceId;
        reqParams.tf['instance_id'] = obj.data.InstanceId;
        reqParams.cfn['Device'] = obj.data.Device;
        reqParams.tf['device_name'] = obj.data.Device;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::VolumeAttachment',
            'terraformType': 'aws_volume_attachment',
            'options': reqParams
        });
    } else if (obj.type == "ec2.securitygroup") {
        reqParams.cfn['GroupDescription'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['GroupName'] = obj.data.GroupName;
        reqParams.tf['name'] = obj.data.GroupName;
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }
        reqParams.cfn['VpcId'] = obj.data.VpcId;
        reqParams.tf['vpc_id'] = obj.data.VpcId;
        if (obj.data.IpPermissions) {
            reqParams.cfn['SecurityGroupIngress'] = [];
            reqParams.tf['ingress'] = [];
            obj.data.IpPermissions.forEach(ipPermission => {
                if (ipPermission.IpRanges) {
                    ipPermission.IpRanges.forEach(ipRange => {
                        reqParams.cfn['SecurityGroupIngress'].push({
                            'CidrIp': ipRange.CidrIp,
                            'Description': ipRange.Description,
                            'FromPort': ipPermission.FromPort,
                            'IpProtocol': ipPermission.IpProtocol,
                            'ToPort': ipPermission.ToPort
                        });
                        reqParams.tf['ingress'].push({
                            'cidr_blocks': [ipRange.CidrIp],
                            'description': ipRange.Description,
                            'from_port': ipPermission.FromPort,
                            'protocol': ipPermission.IpProtocol,
                            'to_port': ipPermission.ToPort
                        });
                    });
                }
                if (ipPermission.Ipv6Ranges) {
                    ipPermission.Ipv6Ranges.forEach(ipv6Range => {
                        reqParams.cfn['SecurityGroupIngress'].push({
                            'CidrIpv6': ipv6Range.CidrIpv6,
                            'Description': ipv6Range.Description,
                            'FromPort': ipPermission.FromPort,
                            'IpProtocol': ipPermission.IpProtocol,
                            'ToPort': ipPermission.ToPort
                        });
                        reqParams.tf['ingress'].push({
                            'ipv6_cidr_blocks': [ipv6Range.CidrIpv6],
                            'description': ipv6Range.Description,
                            'from_port': ipPermission.FromPort,
                            'protocol': ipPermission.IpProtocol,
                            'to_port': ipPermission.ToPort
                        });
                    });
                }
                if (ipPermission.UserIdGroupPairs) {
                    ipPermission.UserIdGroupPairs.forEach(userIdGroupPair => {
                        reqParams.cfn['SecurityGroupIngress'].push({
                            'SourceSecurityGroupId': userIdGroupPair.GroupId,
                            'SourceSecurityGroupName': userIdGroupPair.GroupName,
                            'SourceSecurityGroupOwnerId': userIdGroupPair.UserId,
                            'Description': userIdGroupPair.Description,
                            'FromPort': ipPermission.FromPort,
                            'IpProtocol': ipPermission.IpProtocol,
                            'ToPort': ipPermission.ToPort
                        });
                        reqParams.tf['ingress'].push({
                            'security_groups': [userIdGroupPair.GroupId || userIdGroupPair.GroupName],
                            'description': userIdGroupPair.Description,
                            'from_port': ipPermission.FromPort,
                            'protocol': ipPermission.IpProtocol,
                            'to_port': ipPermission.ToPort
                        });
                    });
                }
            });
        }
        if (obj.data.IpPermissionsEgress) {
            reqParams.cfn['SecurityGroupEgress'] = [];
            reqParams.tf['egress'] = [];
            obj.data.IpPermissionsEgress.forEach(ipPermissionsEgress => {
                if (ipPermissionsEgress.IpRanges) {
                    ipPermissionsEgress.IpRanges.forEach(ipRange => {
                        reqParams.cfn['SecurityGroupEgress'].push({
                            'CidrIp': ipRange.CidrIp,
                            'Description': ipRange.Description,
                            'FromPort': ipPermissionsEgress.FromPort,
                            'IpProtocol': ipPermissionsEgress.IpProtocol,
                            'ToPort': ipPermissionsEgress.ToPort
                        });
                        reqParams.tf['egress'].push({
                            'cidr_blocks': [ipRange.CidrIp],
                            'description': ipRange.Description,
                            'from_port': ipPermissionsEgress.FromPort,
                            'protocol': ipPermissionsEgress.IpProtocol,
                            'to_port': ipPermissionsEgress.ToPort
                        });
                    });
                }
                if (ipPermissionsEgress.Ipv6Ranges) {
                    ipPermissionsEgress.Ipv6Ranges.forEach(ipv6Range => {
                        reqParams.cfn['SecurityGroupEgress'].push({
                            'CidrIpv6': ipv6Range.CidrIpv6,
                            'Description': ipv6Range.Description,
                            'FromPort': ipPermissionsEgress.FromPort,
                            'IpProtocol': ipPermissionsEgress.IpProtocol,
                            'ToPort': ipPermissionsEgress.ToPort
                        });
                        reqParams.tf['egress'].push({
                            'ipv6_cidr_blocks': [ipv6Range.CidrIpv6],
                            'description': ipv6Range.Description,
                            'from_port': ipPermissionsEgress.FromPort,
                            'protocol': ipPermissionsEgress.IpProtocol,
                            'to_port': ipPermissionsEgress.ToPort
                        });
                    });
                }
                if (ipPermissionsEgress.UserIdGroupPairs) {
                    ipPermissionsEgress.UserIdGroupPairs.forEach(userIdGroupPair => {
                        reqParams.cfn['SecurityGroupEgress'].push({
                            'DestinationSecurityGroupId': userIdGroupPair.GroupId,
                            'Description': ipv6Range.Description,
                            'FromPort': ipPermissionsEgress.FromPort,
                            'IpProtocol': ipPermissionsEgress.IpProtocol,
                            'ToPort': ipPermissionsEgress.ToPort
                        });
                        reqParams.tf['egress'].push({
                            'security_groups': [userIdGroupPair.GroupId],
                            'description': ipv6Range.Description,
                            'from_port': ipPermissionsEgress.FromPort,
                            'protocol': ipPermissionsEgress.IpProtocol,
                            'to_port': ipPermissionsEgress.ToPort
                        });
                    });
                }
                if (ipPermissionsEgress.PrefixListIds) {
                    ipPermissionsEgress.PrefixListIds.forEach(prefixListId => {
                        reqParams.cfn['SecurityGroupEgress'].push({
                            'DestinationPrefixListId': prefixListId.PrefixListId,
                            'Description': prefixListId.Description,
                            'FromPort': ipPermissionsEgress.FromPort,
                            'IpProtocol': ipPermissionsEgress.IpProtocol,
                            'ToPort': ipPermissionsEgress.ToPort
                        });
                        reqParams.tf['egress'].push({
                            'prefix_list_ids': [prefixListId.PrefixListId],
                            'description': prefixListId.Description,
                            'from_port': ipPermissionsEgress.FromPort,
                            'protocol': ipPermissionsEgress.IpProtocol,
                            'to_port': ipPermissionsEgress.ToPort
                        });
                    });
                }
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::SecurityGroup',
            'terraformType': 'aws_security_group',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.GroupId,
                'Terraform': {
                    'id': obj.data.GroupId
                },
                'Import': {
                    'GroupId': obj.data.GroupId
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
