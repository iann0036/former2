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
                        field: 'xstate',
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
                        field: 'xstate',
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
        },
        'Enclave Certificate IAM Role Associations': {
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
                        title: 'Certificate ARN',
                        field: 'certificatearn',
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
                        field: 'rolearn',
                        title: 'Role ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Warm Pools': {
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
                        title: 'Auto Scaling Group Name',
                        field: 'autoscalinggroupname',
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
                        field: 'minsize',
                        title: 'Min Size',
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
    blockUI('#section-compute-ec2-enclavecertificateiamroleassociations-datatable');
    blockUI('#section-compute-ec2-warmpools-datatable');

    await sdkcall("EC2", "describeInstances", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-instances-datatable').deferredBootstrapTable('removeAll');

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

                $('#section-compute-ec2-instances-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-ec2-hosts-datatable').deferredBootstrapTable('removeAll');

        data.Hosts.forEach(host => {
            $('#section-compute-ec2-hosts-datatable').deferredBootstrapTable('append', [{
                f2id: host.HostId,
                f2type: 'ec2.host',
                f2data: host,
                f2region: region,
                hostid: host.HostId,
                availabilityzone: host.AvailabilityZone,
                xstate: host.State
            }]);
        });

        unblockUI('#section-compute-ec2-hosts-datatable');
    });

    await sdkcall("EC2", "describeCapacityReservations", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-capacityreservations-datatable').deferredBootstrapTable('removeAll');

        data.CapacityReservations.forEach(capacityreservation => {
            $('#section-compute-ec2-capacityreservations-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-ec2-fleets-datatable').deferredBootstrapTable('removeAll');

        data.Fleets.forEach(fleet => {
            $('#section-compute-ec2-fleets-datatable').deferredBootstrapTable('append', [{
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
    }, true).then(async (data) => {
        $('#section-compute-ec2-loadbalancers-datatable').deferredBootstrapTable('removeAll');

        data.LoadBalancerDescriptions.forEach(async (loadBalancer) => {
            loadBalancer['Tags'] = await getResourceTags("arn:aws:elasticloadbalancing:region:account:loadbalancer/" + loadBalancer.LoadBalancerName);

            $('#section-compute-ec2-loadbalancers-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-ec2-v2loadbalancers-datatable').deferredBootstrapTable('removeAll');
        $('#section-compute-ec2-v2loadbalancerlisteners-datatable').deferredBootstrapTable('removeAll');
        $('#section-compute-ec2-v2loadbalancerlistenercertificates-datatable').deferredBootstrapTable('removeAll');
        $('#section-compute-ec2-v2loadbalancerlistenerrules-datatable').deferredBootstrapTable('removeAll');

        data.LoadBalancers.forEach(async (loadBalancer) => {
            await sdkcall("ELBv2", "describeLoadBalancerAttributes", {
                LoadBalancerArn: loadBalancer.LoadBalancerArn
            }, true).then((data) => {
                loadBalancer['Attributes'] = data.Attributes;
                $('#section-compute-ec2-v2loadbalancers-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-compute-ec2-v2loadbalancerlisteners-datatable').deferredBootstrapTable('append', [{
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
                            data.Certificates = data.Certificates || [];
                            data.Certificates.forEach(certificate => {
                                certificate['ListenerArn'] = listener.ListenerArn;
                                $('#section-compute-ec2-v2loadbalancerlistenercertificates-datatable').deferredBootstrapTable('append', [{
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
                                $('#section-compute-ec2-v2loadbalancerlistenerrules-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-ec2-autoscalinggroups-datatable').deferredBootstrapTable('removeAll');
        $('#section-compute-ec2-autoscalinglifecyclehooks-datatable').deferredBootstrapTable('removeAll');
        $('#section-compute-ec2-warmpools-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.AutoScalingGroups.map(async (autoScalingGroup) => {
            $('#section-compute-ec2-autoscalinggroups-datatable').deferredBootstrapTable('append', [{
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

            await sdkcall("AutoScaling", "describeLifecycleHooks", {
                AutoScalingGroupName: autoScalingGroup.AutoScalingGroupName
            }, true).then((data) => {
                data.LifecycleHooks.forEach(lifecycleHook => {
                    $('#section-compute-ec2-autoscalinglifecyclehooks-datatable').deferredBootstrapTable('append', [{
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

            return sdkcall("AutoScaling", "describeWarmPool", {
                AutoScalingGroupName: autoScalingGroup.AutoScalingGroupName
            }, true).then(async (data) => {
                data.WarmPoolConfiguration['AutoScalingGroupName'] = autoScalingGroup.AutoScalingGroupName

                $('#section-compute-ec2-warmpools-datatable').deferredBootstrapTable('append', [{
                    f2id: autoScalingGroup.AutoScalingGroupName + " Warm Pool",
                    f2type: 'ec2.warmpool',
                    f2data: data.WarmPoolConfiguration,
                    f2region: region,
                    autoscalinggroupname: autoScalingGroup.AutoScalingGroupName,
                    minsize: data.WarmPoolConfiguration.MinSize
                }]);
            }).catch(() => { });
        }));

        unblockUI('#section-compute-ec2-autoscalinggroups-datatable');
        unblockUI('#section-compute-ec2-autoscalinglifecyclehooks-datatable');
        unblockUI('#section-compute-ec2-warmpools-datatable');
    });

    await sdkcall("AutoScaling", "describeLaunchConfigurations", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-launchconfigurations-datatable').deferredBootstrapTable('removeAll');

        data.LaunchConfigurations.forEach(launchConfiguration => {
            $('#section-compute-ec2-launchconfigurations-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-ec2-launchtemplates-datatable').deferredBootstrapTable('removeAll');

        if (data.LaunchTemplates) {
            await Promise.all(data.LaunchTemplates.map(launchTemplate => {
                return sdkcall("EC2", "describeLaunchTemplateVersions", {
                    LaunchTemplateId: launchTemplate.LaunchTemplateId,
                    Versions: [launchTemplate.LatestVersionNumber.toString()]
                }, true).then((data) => {
                    launchTemplate = data.LaunchTemplateVersions[0];
                    $('#section-compute-ec2-launchtemplates-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-ec2-v2targetgroups-datatable').deferredBootstrapTable('removeAll');

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

                $('#section-compute-ec2-v2targetgroups-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-ec2-volumes-datatable').deferredBootstrapTable('removeAll');
        $('#section-compute-ec2-volumeattachments-datatable').deferredBootstrapTable('removeAll');

        data.Volumes.forEach(volume => {
            $('#section-compute-ec2-volumes-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-compute-ec2-volumeattachments-datatable').deferredBootstrapTable('append', [{
                        f2id: attachment.VolumeId + " " + attachment.InstanceId,
                        f2type: 'ec2.volumeattachment',
                        f2data: attachment,
                        f2region: region,
                        volumeid: attachment.VolumeId,
                        device: attachment.Device,
                        instanceid: attachment.InstanceId,
                        xstate: attachment.State
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
        $('#section-compute-ec2-networkinterfaces-datatable').deferredBootstrapTable('removeAll');
        $('#section-compute-ec2-networkinterfaceattachments-datatable').deferredBootstrapTable('removeAll');

        data.NetworkInterfaces.forEach(networkInterface => {
            $('#section-compute-ec2-networkinterfaces-datatable').deferredBootstrapTable('append', [{
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

            if (networkInterface.Attachment && networkInterface.Attachment.InstanceId) {
                networkInterface.Attachment['NetworkInterfaceId'] = networkInterface.NetworkInterfaceId;
                $('#section-compute-ec2-networkinterfaceattachments-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-ec2-networkinterfacepermissions-datatable').deferredBootstrapTable('removeAll');

        data.NetworkInterfacePermissions.forEach(networkInterfacePermission => {
            $('#section-compute-ec2-networkinterfacepermissions-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-ec2-spotrequests-datatable').deferredBootstrapTable('removeAll');

        data.SpotFleetRequestConfigs.forEach(spotFleetRequestConfig => {
            $('#section-compute-ec2-spotrequests-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-ec2-placementgroups-datatable').deferredBootstrapTable('removeAll');

        data.PlacementGroups.forEach(placementGroup => {
            $('#section-compute-ec2-placementgroups-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-ec2-autoscalingpolicies-datatable').deferredBootstrapTable('removeAll');

        data.ScalingPolicies.forEach(scalingPolicy => {
            $('#section-compute-ec2-autoscalingpolicies-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-ec2-autoscalingscheduledactions-datatable').deferredBootstrapTable('removeAll');

        data.ScheduledUpdateGroupActions.forEach(scheduledAction => {
            $('#section-compute-ec2-autoscalingscheduledactions-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-ec2-securitygroups-datatable').deferredBootstrapTable('removeAll');

        data.SecurityGroups.forEach(securityGroup => {
            if (
                securityGroup.Description != "default VPC security group" ||
                securityGroup.GroupName != "default" ||
                include_default_resources
            ) {
                $('#section-compute-ec2-securitygroups-datatable').deferredBootstrapTable('append', [{
                    f2id: securityGroup.GroupId,
                    f2type: 'ec2.securitygroup',
                    f2data: securityGroup,
                    f2region: region,
                    f2link: 'https://console.aws.amazon.com/ec2/home?region=' + region + '#SecurityGroups:search=' + securityGroup.GroupId,
                    id: securityGroup.GroupId,
                    description: securityGroup.Description,
                    vpcid: securityGroup.VpcId
                }]);
            }
        });

        unblockUI('#section-compute-ec2-securitygroups-datatable');
    });

    await sdkcall("EC2", "describeFlowLogs", {
        // no params
    }, true).then((data) => {
        $('#section-compute-ec2-flowlogs-datatable').deferredBootstrapTable('removeAll');

        if (data.FlowLogs) {
            data.FlowLogs.forEach(flowLog => {
                $('#section-compute-ec2-flowlogs-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-ec2-snapshotlifecyclepolicies-datatable').deferredBootstrapTable('removeAll');

        if (data.Policies) {
            await Promise.all(data.Policies.map(policy => {
                return sdkcall("DLM", "getLifecyclePolicy", {
                    PolicyId: policy.PolicyId
                }, true).then((data) => {
                    $('#section-compute-ec2-snapshotlifecyclepolicies-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Policy.PolicyId,
                        f2type: 'ec2.snapshotlifecyclepolicy',
                        f2data: data.Policy,
                        f2region: region,
                        f2link: 'https://console.aws.amazon.com/ec2/v2/home?region=' + region + '#Lifecycle:search=' + data.Policy.PolicyId + ';sort=PolicyId',
                        id: data.Policy.PolicyId,
                        description: data.Policy.Description,
                        datecreated: data.Policy.DateCreated
                    }]);
                });
            }));
        }

        unblockUI('#section-compute-ec2-snapshotlifecyclepolicies-datatable');
    });

    await sdkcall("ApplicationAutoScaling", "describeScalableTargets", {
        ServiceNamespace: "ec2"
    }, true).then(async (data) => {
        $('#section-compute-ec2-applicationautoscalingscalabletargets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ScalableTargets.map(target => {
            return sdkcall("ApplicationAutoScaling", "describeScheduledActions", {
                ServiceNamespace: "ec2",
                ResourceId: target.ResourceId,
                ScalableDimension: target.ScalableDimension
            }, true).then((actions) => {
                target['ScheduledActions'] = actions.ScheduledActions;

                $('#section-compute-ec2-applicationautoscalingscalabletargets-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-ec2-applicationautoscalingscalingpolicies-datatable').deferredBootstrapTable('removeAll');

        if (data.ScalableTargets) {
            data.ScalableTargets.forEach(target => {
                $('#section-compute-ec2-applicationautoscalingscalingpolicies-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-ec2-keypairs-datatable').deferredBootstrapTable('removeAll');

        if (data.KeyPairs) {
            data.KeyPairs.forEach(keypair => {
                $('#section-compute-ec2-keypairs-datatable').deferredBootstrapTable('append', [{
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

    await sdkcall("ACM", "listCertificates", {
        // no params
    }, true).then(async (data) => {
        $('#section-compute-ec2-enclavecertificateiamroleassociations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.CertificateSummaryList.map(async (cert) => {
            return sdkcall("EC2", "getAssociatedEnclaveCertificateIamRoles", {
                CertificateArn: cert.CertificateArn
            }, true).then(async (data) => {
                data.AssociatedRoles.forEach(associatedrole => {
                    $('#section-compute-ec2-enclavecertificateiamroleassociations-datatable').deferredBootstrapTable('append', [{
                        f2id: associatedrole.cert + " " + associatedrole.AssociatedRoleArn + " Enclave Association",
                        f2type: 'ec2.enclavecertificateiamroleassociation',
                        f2data: {
                            'CertificateArn': associatedrole.cert,
                            'RoleArn': associatedrole.AssociatedRoleArn
                        },
                        f2region: region,
                        certificatearn: associatedrole.cert,
                        rolearn: associatedrole.AssociatedRoleArn
                    }]);
                });
            });
        }));

        unblockUI('#section-compute-ec2-enclavecertificateiamroleassociations-datatable');
    }).catch(() => { });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "ec2.instance") {
        reqParams.cfn['ImageId'] = obj.data.ImageId;
        reqParams.tf['ami'] = obj.data.ImageId;
        reqParams.cfn['InstanceType'] = obj.data.InstanceType;
        reqParams.tf['instance_type'] = obj.data.InstanceType;
        reqParams.cfn['KernelId'] = obj.data.KernelId;
        reqParams.cfn['KeyName'] = obj.data.KeyName;
        reqParams.tf['key_name'] = obj.data.KeyName;
        if (obj.data.Placement) {
            reqParams.cfn['AvailabilityZone'] = obj.data.Placement.AvailabilityZone;
            reqParams.tf['availability_zone'] = obj.data.Placement.AvailabilityZone;
            reqParams.cfn['Affinity'] = obj.data.Placement.Affinity;
            reqParams.cfn['PlacementGroupName'] = (obj.data.Placement.GroupName == "" ? null : obj.data.Placement.GroupName);
            reqParams.tf['placement_group'] = (obj.data.Placement.GroupName == "" ? null : obj.data.Placement.GroupName);
            reqParams.cfn['Tenancy'] = obj.data.Placement.Tenancy;
            reqParams.tf['tenancy'] = obj.data.Placement.Tenancy;
            reqParams.cfn['HostId'] = obj.data.Placement.HostId;
            reqParams.cfn['HostResourceGroupArn'] = obj.data.Placement.HostResourceGroupArn;
        }
        reqParams.cfn['RamdiskId'] = obj.data.RamdiskId;
        reqParams.cfn['SubnetId'] = obj.data.SubnetId;
        reqParams.tf['subnet_id'] = obj.data.SubnetId;
        reqParams.cfn['EbsOptimized'] = obj.data.EbsOptimized;
        reqParams.tf['ebs_optimized'] = obj.data.EbsOptimized;
        if (obj.data.NetworkInterfaces) {
            reqParams.cfn['SecurityGroupIds'] = [];
            reqParams.tf['vpc_security_group_ids'] = [];
            obj.data.NetworkInterfaces.forEach(networkInterface => {
                if (networkInterface.Groups) {
                    networkInterface.Groups.forEach(securityGroup => {
                        reqParams.cfn['SecurityGroupIds'].push(securityGroup.GroupId);
                        reqParams.tf['vpc_security_group_ids'].push(securityGroup.GroupId);
                    });
                }
            });
        }
        reqParams.cfn['SourceDestCheck'] = obj.data.SourceDestCheck;
        reqParams.tf['source_dest_check'] = obj.data.SourceDestCheck;
        if (obj.data.BlockDeviceMappings) {
            reqParams.cfn['BlockDeviceMappings'] = [];
            reqParams.tf['ebs_block_device'] = [];
            obj.data.BlockDeviceMappings.forEach(blockDeviceMapping => {
                var ebs = null;
                if (blockDeviceMapping.Ebs && blockDeviceMapping.Ebs.VolumeId) {
                    ebs = {
                        'Encrypted': blockDeviceMapping.Ebs.Encrypted,
                        'VolumeSize': blockDeviceMapping.Ebs.Size,
                        'SnapshotId': blockDeviceMapping.Ebs.SnapshotId,
                        'Iops': (blockDeviceMapping.Ebs.VolumeType == "io1") ? blockDeviceMapping.Ebs.Iops : null,
                        'VolumeType': blockDeviceMapping.Ebs.VolumeType,
                        'DeleteOnTermination': blockDeviceMapping.Ebs.DeleteOnTermination
                    };
                    if (blockDeviceMapping.DeviceName != "/dev/sda1" && blockDeviceMapping.DeviceName != "/dev/xvda") {
                        reqParams.tf['ebs_block_device'].push({
                            'device_name': blockDeviceMapping.DeviceName,
                            'encrypted': blockDeviceMapping.Ebs.Encrypted,
                            'volume_size': blockDeviceMapping.Ebs.Size,
                            'snapshot_id': blockDeviceMapping.Ebs.SnapshotId,
                            'iops': (blockDeviceMapping.Ebs.VolumeType == "io1") ? blockDeviceMapping.Ebs.Iops : null,
                            'volume_type': blockDeviceMapping.Ebs.VolumeType,
                            'delete_on_termination': blockDeviceMapping.Ebs.DeleteOnTermination
                        });
                    } else {
                        reqParams.tf['root_block_device'] = {
                            'volume_size': blockDeviceMapping.Ebs.Size,
                            'iops': (blockDeviceMapping.Ebs.VolumeType == "io1") ? blockDeviceMapping.Ebs.Iops : null,
                            'volume_type': blockDeviceMapping.Ebs.VolumeType,
                            'delete_on_termination': blockDeviceMapping.Ebs.DeleteOnTermination
                        };
                    }
                }
                reqParams.cfn['BlockDeviceMappings'].push({
                    'DeviceName': blockDeviceMapping.DeviceName,
                    'Ebs': ebs
                });
            });
        }
        reqParams.cfn['UserData'] = obj.data.UserData;
        reqParams.tf['user_data'] = obj.data.UserData;
        if (obj.data.IamInstanceProfile) {
            reqParams.cfn['IamInstanceProfile'] = obj.data.IamInstanceProfile.Arn.split("/").pop();
            reqParams.tf['iam_instance_profile'] = obj.data.IamInstanceProfile.Arn.split("/").pop();
        }
        if (obj.data.Monitoring && obj.data.Monitoring.State == "enabled") {
            reqParams.cfn['Monitoring'] = true;
            reqParams.tf['monitoring'] = true;
        }
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }
        if (obj.data.ElasticGpus) {
            reqParams.cfn['ElasticGpuSpecifications'] = [];
            obj.data.ElasticGpus.forEach(elasticGpu => {
                reqParams.cfn['ElasticGpuSpecifications'].push({
                    'Type': elasticGpu.ElasticGpuType
                });
            });
        }
        reqParams.cfn['HibernationOptions'] = obj.data.HibernationOptions;
        if (!['t2', 'm4'].includes(obj.data.InstanceType.split(".")[0])) {
            reqParams.cfn['CpuOptions'] = obj.data.CpuOptions;
        }
        reqParams.cfn['EnclaveOptions'] = obj.data.EnclaveOptions;

        /*
        TODO:
        BlockDeviceMappings:
            Ebs:
                KmsKeyId
        CreditSpecification: CreditSpecification
        DisableApiTermination: Boolean
        ElasticInferenceAccelerators: 
            - ElasticInferenceAccelerator
        InstanceInitiatedShutdownBehavior: String
        Ipv6AddressCount: Integer
        Ipv6Addresses:
            - IPv6 Address Type
        LaunchTemplate: LaunchTemplateSpecification
        LicenseSpecifications: 
            - LicenseSpecification
        NetworkInterfaces: 
            - EC2 Network Interface
        PrivateIpAddress: String
        SecurityGroups: 
            - String
        SsmAssociations: 
            - SSMAssociation
        Volumes: 
            - EC2 MountPoint
        AdditionalInfo: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::Instance'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::Instance',
            'terraformType': 'aws_instance',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.InstanceId,
                'GetAtt': {
                    'AvailabilityZone': obj.data.Placement.AvailabilityZone,
                    'PrivateDnsName': obj.data.PrivateDnsName,
                    'PublicDnsName': obj.data.PublicDnsName,
                    'PrivateIp': obj.data.PrivateIpAddress,
                    'PublicIp': obj.data.PublicIpAddress
                },
                'Import': {
                    'InstanceId': obj.data.InstanceId
                }
            }
        });
    } else if (obj.type == "ec2.placementgroup") {
        reqParams.cfn['Strategy'] = obj.data.Strategy;
        reqParams.tf['strategy'] = obj.data.Strategy;
        reqParams.tf['name'] = obj.data.GroupName;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::PlacementGroup'),
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
            'logicalId': getResourceName('elbv2', obj.id, 'AWS::ElasticLoadBalancingV2::TargetGroup'),
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
        reqParams.cfn['MultiAttachEnabled'] = obj.data.MultiAttachEnabled;
        reqParams.cfn['OutpostArn'] = obj.data.OutpostArn;

        /*
        TODO:
        AutoEnableIO: Boolean
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::Volume'),
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
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::VolumeAttachment'),
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
                            'Description': userIdGroupPair.Description,
                            'FromPort': ipPermissionsEgress.FromPort,
                            'IpProtocol': ipPermissionsEgress.IpProtocol,
                            'ToPort': ipPermissionsEgress.ToPort
                        });
                        reqParams.tf['egress'].push({
                            'security_groups': [userIdGroupPair.GroupId],
                            'description': userIdGroupPair.Description,
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
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::SecurityGroup'),
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
    } else if (obj.type == "elb.loadbalancer") {
        reqParams.cfn['LoadBalancerName'] = obj.data.LoadBalancerName;
        reqParams.tf['name'] = obj.data.LoadBalancerName;
        if (obj.data.ListenerDescriptions) {
            reqParams.cfn['Listeners'] = [];
            reqParams.tf['listener'] = [];
            obj.data.ListenerDescriptions.forEach(listener => {
                reqParams.cfn['Listeners'].push({
                    'InstancePort': listener.Listener.InstancePort,
                    'InstanceProtocol': listener.Listener.InstanceProtocol,
                    'LoadBalancerPort': listener.Listener.LoadBalancerPort,
                    'PolicyNames': listener.PolicyNames,
                    'Protocol': listener.Listener.Protocol,
                    'SSLCertificateId': listener.Listener.SSLCertificateId
                });
                reqParams.tf['listener'].push({
                    'instance_port': listener.Listener.InstancePort,
                    'instance_protocol': listener.Listener.InstanceProtocol,
                    'lb_port': listener.Listener.LoadBalancerPort,
                    'lb_protocol': listener.Listener.Protocol,
                    'ssl_certificate_id': listener.Listener.SSLCertificateId
                });
            });
        }
        reqParams.cfn['AppCookieStickinessPolicy'] = obj.data.Policies.AppCookieStickinessPolicies;
        reqParams.cfn['LBCookieStickinessPolicy'] = obj.data.Policies.LBCookieStickinessPolicies;
        // Omitted
        //reqParams.cfn['AvailabilityZones'] = obj.data.AvailabilityZones;
        //reqParams.tf['availability_zones'] = obj.data.AvailabilityZones;
        reqParams.cfn['Subnets'] = obj.data.Subnets;
        reqParams.tf['subnets'] = obj.data.Subnets;
        if (obj.data.Instances) {
            reqParams.cfn['Instances'] = [];
            reqParams.tf['instances'] = [];
            obj.data.Instances.forEach(instance => {
                reqParams.cfn['Instances'].push(instance.InstanceId);
                reqParams.tf['instances'].push(instance.InstanceId);
            });
        }
        reqParams.cfn['HealthCheck'] = obj.data.HealthCheck;
        if (obj.data.HealthCheck) {
            reqParams.tf['health_check'] = {
                'healthy_threshold': obj.data.HealthCheck.HealthyThreshold,
                'interval': obj.data.HealthCheck.Interval,
                'target': obj.data.HealthCheck.Target,
                'timeout': obj.data.HealthCheck.Timeout,
                'unhealthy_threshold': obj.data.HealthCheck.UnhealthyThreshold
            };
        }
        reqParams.cfn['SecurityGroups'] = obj.data.SecurityGroups;
        reqParams.tf['security_groups'] = obj.data.SecurityGroups;
        reqParams.cfn['Scheme'] = obj.data.Scheme;
        reqParams.tf['internal'] = (obj.data.Scheme == "internal");
        reqParams.cfn['Tags'] = obj.data.Tags;

        /*
        TODO:
        AccessLoggingPolicy:
            AccessLoggingPolicy
        ConnectionDrainingPolicy:
            ConnectionDrainingPolicy
        ConnectionSettings:
            ConnectionSettings
        CrossZone: Boolean
        Policies:
            - ElasticLoadBalancing Policy
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elb', obj.id, 'AWS::ElasticLoadBalancing::LoadBalancer'),
            'region': obj.region,
            'service': 'elb',
            'type': 'AWS::ElasticLoadBalancing::LoadBalancer',
            'terraformType': 'aws_elb',
            'options': reqParams,
            'returnValues': {
                'Import': {
                    'LoadBalancerName': obj.data.LoadBalancerName
                }
            }
        });
    } else if (obj.type == "ec2.launchtemplate") {
        reqParams.cfn['LaunchTemplateName'] = obj.data.LaunchTemplateName;
        reqParams.tf['name'] = obj.data.LaunchTemplateName;

        var metadataoptions = null;
        if (obj.data.LaunchTemplateData.MetadataOptions) {
            metadataoptions = {
                'HttpEndpoint': obj.data.LaunchTemplateData.MetadataOptions.HttpEndpoint,
                'HttpPutResponseHopLimit': obj.data.LaunchTemplateData.MetadataOptions.HttpPutResponseHopLimit,
                'HttpTokens': obj.data.LaunchTemplateData.MetadataOptions.HttpTokens
            };
        }

        reqParams.cfn['LaunchTemplateData'] = {
            'SecurityGroups': obj.data.LaunchTemplateData.SecurityGroups,
            'TagSpecifications': obj.data.LaunchTemplateData.TagSpecifications,
            'UserData': obj.data.LaunchTemplateData.UserData,
            'InstanceInitiatedShutdownBehavior': obj.data.LaunchTemplateData.InstanceInitiatedShutdownBehavior,
            'BlockDeviceMappings': obj.data.LaunchTemplateData.BlockDeviceMappings,
            'IamInstanceProfile': obj.data.LaunchTemplateData.IamInstanceProfile,
            'KernelId': obj.data.LaunchTemplateData.KernelId,
            'SecurityGroupIds': obj.data.LaunchTemplateData.SecurityGroupIds,
            'EbsOptimized': obj.data.LaunchTemplateData.EbsOptimized,
            'KeyName': obj.data.LaunchTemplateData.KeyName,
            'DisableApiTermination': obj.data.LaunchTemplateData.DisableApiTermination,
            'ElasticGpuSpecifications': obj.data.LaunchTemplateData.ElasticGpuSpecifications,
            'ElasticInferenceAccelerators': obj.data.LaunchTemplateData.ElasticInferenceAccelerators,
            'Placement': obj.data.LaunchTemplateData.Placement,
            'InstanceMarketOptions': obj.data.LaunchTemplateData.InstanceMarketOptions,
            'NetworkInterfaces': obj.data.LaunchTemplateData.NetworkInterfaces,
            'ImageId': obj.data.LaunchTemplateData.ImageId,
            'InstanceType': obj.data.LaunchTemplateData.InstanceType,
            'RamDiskId': obj.data.LaunchTemplateData.RamDiskId,
            'Monitoring': obj.data.LaunchTemplateData.Monitoring,
            'CreditSpecification': obj.data.LaunchTemplateData.CreditSpecification,
            'MetadataOptions': metadataoptions,
            'EnclaveOptions': obj.data.LaunchTemplateData.EnclaveOptions
        };
        reqParams.tf['security_group_names'] = obj.data.LaunchTemplateData.SecurityGroups;
        if (obj.data.LaunchTemplateData.TagSpecifications) {
            reqParams.tf['tag_specifications'] = [];
            obj.data.LaunchTemplateData.TagSpecifications.forEach(tagspecification => {
                var tags = {};
                tagspecification.Tags.forEach(tag => {
                    tags[tag.Key] = tag.Value;
                });
                reqParams.tf['tag_specifications'].push({
                    'resource_type': tagspecification.ResourceType,
                    'tags': tags
                });
            });
        }
        reqParams.tf['user_data'] = obj.data.LaunchTemplateData.UserData;
        reqParams.tf['instance_initiated_shutdown_behavior'] = obj.data.LaunchTemplateData.InstanceInitiatedShutdownBehavior;
        //reqParams.tf['block_device_mappings'] = obj.data.LaunchTemplateData.BlockDeviceMappings; TODO
        if (obj.data.LaunchTemplateData.IamInstanceProfile) {
            reqParams.tf['iam_instance_profile'] = {
                'arn': obj.data.LaunchTemplateData.IamInstanceProfile.Arn,
                'name': obj.data.LaunchTemplateData.IamInstanceProfile.Name
            };
        }
        reqParams.tf['kernel_id'] = obj.data.LaunchTemplateData.KernelId;
        reqParams.tf['vpc_security_group_ids'] = obj.data.LaunchTemplateData.SecurityGroupIds;
        reqParams.tf['ebs_optimized'] = obj.data.LaunchTemplateData.EbsOptimized;
        reqParams.tf['key_name'] = obj.data.LaunchTemplateData.KeyName;
        reqParams.tf['disable_api_termination'] = obj.data.LaunchTemplateData.DisableApiTermination;
        if (obj.data.LaunchTemplateData.ElasticGpuSpecifications) {
            reqParams.tf['elastic_gpu_specifications'] = [];
            obj.data.LaunchTemplateData.ElasticGpuSpecifications.forEach(elasticgpuspecification => {
                reqParams.tf['elastic_gpu_specifications'].push({
                    'type': elasticgpuspecification.Type
                });
            });
        }
        if (obj.data.LaunchTemplateData.Placement) {
            reqParams.tf['placement'] = {
                'affinity': obj.data.LaunchTemplateData.Placement.Affinity,
                'availability_zone': obj.data.LaunchTemplateData.Placement.AvailabilityZone,
                'group_name': obj.data.LaunchTemplateData.Placement.GroupName,
                'host_id': obj.data.LaunchTemplateData.Placement.HostId,
                'tenancy': obj.data.LaunchTemplateData.Placement.Tenancy
            };
        }
        if (obj.data.LaunchTemplateData.InstanceMarketOptions) {
            var spotoptions = null;
            if (obj.data.LaunchTemplateData.InstanceMarketOptions.SpotOptions) {
                spotoptions = {
                    'block_duration_minutes': obj.data.LaunchTemplateData.InstanceMarketOptions.SpotOptions.BlockDurationMinutes,
                    'instance_interruption_behavior': obj.data.LaunchTemplateData.InstanceMarketOptions.SpotOptions.InstanceInterruptionBehavior,
                    'max_price': obj.data.LaunchTemplateData.InstanceMarketOptions.SpotOptions.MaxPrice,
                    'spot_instance_type': obj.data.LaunchTemplateData.InstanceMarketOptions.SpotOptions.SpotInstanceType,
                    'valid_until': obj.data.LaunchTemplateData.InstanceMarketOptions.SpotOptions.ValidUntil // TODO: Parse Date
                };
            }
            reqParams.tf['instance_market_options'] = {
                'market_type': obj.data.LaunchTemplateData.InstanceMarketOptions.MarketType,
                'spot_options': spotoptions
            };
        }
        if (obj.data.LaunchTemplateData.NetworkInterfaces) {
            reqParams.tf['network_interfaces'] = [];
            obj.data.LaunchTemplateData.NetworkInterfaces.forEach(networkinterface => {
                reqParams.tf['network_interfaces'].push({
                    'associate_public_ip_address': networkinterface.AssociatePublicIpAddress,
                    'delete_on_termination': networkinterface.DeleteOnTermination,
                    'description': networkinterface.Description,
                    'device_index': networkinterface.DeviceIndex,
                    'ipv6_addresses': networkinterface.Ipv6Addresses ? networkinterface.Ipv6Addresses.map(ipv6address => { return ipv6address.Ipv6Address }) : null,
                    'ipv6_address_count': networkinterface.Ipv6AddressCount,
                    'network_interface_id': networkinterface.NetworkInterfaceId,
                    'private_ip_address': networkinterface.PrivateIpAddress,
                    'ipv4_address_count': networkinterface.SecondaryPrivateIpAddressCount,
                    'ipv4_addresses': networkinterface.PrivateIpAddresses,
                    'security_groups': networkinterface.Groups,
                    'subnet_id': networkinterface.SubnetId
                });
            });
        }
        reqParams.tf['image_id'] = obj.data.LaunchTemplateData.ImageId;
        reqParams.tf['instance_type'] = obj.data.LaunchTemplateData.InstanceType;
        reqParams.tf['ram_disk_id'] = obj.data.LaunchTemplateData.RamDiskId;
        if (obj.data.LaunchTemplateData.Monitoring) {
            reqParams.tf['monitoring'] = {
                'enabled': obj.data.LaunchTemplateData.Monitoring.Enabled
            };
        }
        if (obj.data.LaunchTemplateData.CreditSpecification) {
            reqParams.tf['credit_specification'] = {
                '': obj.data.LaunchTemplateData.CreditSpecification.CpuCredits
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::LaunchTemplate'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::LaunchTemplate',
            'terraformType': 'aws_launch_template',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.LaunchTemplateId
            }
        });
    } else if (obj.type == "ec2.host") {
        reqParams.cfn['AutoPlacement'] = obj.data.AutoPlacement;
        reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
        if (obj.data.HostProperties) {
            reqParams.cfn['InstanceType'] = obj.data.HostProperties.InstanceType;
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::Host'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::Host',
            'options': reqParams
        });
    } else if (obj.type == "ec2.spotrequest") {
        var launchSpecifications = null;
        if (obj.data.LaunchSpecifications) {
            launchSpecifications = [];
            obj.data.LaunchSpecifications.forEach(launchSpecification => {
                var securityGroups = null;
                if (launchSpecification.SecurityGroups) {
                    securityGroups = [];
                    launchSpecification.SecurityGroups.forEach(securityGroup => {
                        securityGroups.push({
                            'GroupId': securityGroup.GroupId
                        });
                    });
                }
                var iamInstanceProfile = null;
                if (launchSpecification.IamInstanceProfile) {
                    iamInstanceProfile = {
                        'Arn': launchSpecification.IamInstanceProfile.Arn
                    };
                }
                launchSpecifications.push({
                    'SecurityGroups': securityGroups,
                    'BlockDeviceMappings': launchSpecification.BlockDeviceMappings,
                    'EbsOptimized': launchSpecification.EbsOptimized,
                    'IamInstanceProfile': iamInstanceProfile,
                    'ImageId': launchSpecification.ImageId,
                    'InstanceType': launchSpecification.InstanceType,
                    'KernelId': launchSpecification.KernelId,
                    'KeyName': launchSpecification.KeyName,
                    'Monitoring': launchSpecification.Monitoring,
                    'NetworkInterfaces': launchSpecification.NetworkInterfaces,
                    'Placement': launchSpecification.Placement,
                    'RamdiskId': launchSpecification.RamdiskId,
                    'SpotPrice': launchSpecification.SpotPrice,
                    'SubnetId': launchSpecification.SubnetId,
                    'TagSpecifications': launchSpecification.TagSpecifications,
                    'UserData': launchSpecification.UserData,
                    'WeightedCapacity': launchSpecification.WeightedCapacity
                });
            });
        }
        var launchTemplateConfigs = null;
        if (obj.data.LaunchTemplateConfigs) {
            launchTemplateConfigs = [];
            obj.data.LaunchTemplateConfigs.forEach(launchTemplateConfig => {
                var overrides = null;
                if (launchTemplateConfig.Overrides) {
                    overrides = [];
                    launchTemplateConfig.Overrides.forEach(override => {
                        overrides.push({
                            'AvailabilityZone': override.AvailabilityZone,
                            'InstanceType': override.InstanceType,
                            'SpotPrice': override.SpotPrice,
                            'SubnetId': override.SubnetId,
                            'WeightedCapacity': override.WeightedCapacity
                        });
                    });
                }
                launchTemplateConfigs.push({
                    'LaunchTemplateSpecification': launchTemplateConfig.LaunchTemplateSpecification,
                    'Overrides': overrides
                });
            });
        }
        reqParams.cfn['SpotFleetRequestConfigData'] = {
            'AllocationStrategy': obj.data.SpotFleetRequestConfig.AllocationStrategy,
            'ExcessCapacityTerminationPolicy': obj.data.SpotFleetRequestConfig.ExcessCapacityTerminationPolicy,
            'IamFleetRole': obj.data.SpotFleetRequestConfig.IamFleetRole,
            'InstanceInterruptionBehavior': obj.data.SpotFleetRequestConfig.InstanceInterruptionBehavior,
            'LaunchSpecifications': launchSpecifications,
            'LaunchTemplateConfigs': launchTemplateConfigs,
            'LoadBalancersConfig': obj.data.SpotFleetRequestConfig.LoadBalancersConfig,
            'ReplaceUnhealthyInstances': obj.data.SpotFleetRequestConfig.ReplaceUnhealthyInstances,
            'SpotPrice': obj.data.SpotFleetRequestConfig.SpotPrice,
            'TargetCapacity': obj.data.SpotFleetRequestConfig.TargetCapacity,
            'TerminateInstancesWithExpiration': obj.data.SpotFleetRequestConfig.TerminateInstancesWithExpiration,
            'Type': obj.data.SpotFleetRequestConfig.Type,
            'ValidFrom': obj.data.SpotFleetRequestConfig.ValidFrom, // TODO: Check date handling
            'ValidUntil': obj.data.SpotFleetRequestConfig.ValidUntil // TODO: Check date handling
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::SpotFleet'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::SpotFleet',
            'options': reqParams
        });
    } else if (obj.type == "elbv2.loadbalancer") {
        reqParams.cfn['Name'] = obj.data.LoadBalancerName;
        reqParams.tf['name'] = obj.data.LoadBalancerName;
        reqParams.cfn['Scheme'] = obj.data.Scheme;
        reqParams.tf['internal'] = (obj.data.Scheme == "internal");
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.tf['load_balancer_type'] = obj.data.Type;
        if (obj.data.AvailabilityZones) {
            reqParams.cfn['Subnets'] = [];
            reqParams.tf['subnets'] = [];
            reqParams.cfn['SubnetMappings'] = [];
            reqParams.tf['subnet_mapping'] = [];
            obj.data.AvailabilityZones.forEach(availabilityZone => {
                reqParams.cfn['Subnets'].push(availabilityZone.SubnetId);
                reqParams.tf['subnets'].push(availabilityZone.SubnetId);
                if (obj.data.LoadBalancerAddresses) {
                    obj.data.LoadBalancerAddresses.forEach(loadBalancerAddress => {
                        if (loadBalancerAddress.AllocationId) {
                            reqParams.cfn['SubnetMappings'].push({
                                'SubnetId': availabilityZone.SubnetId,
                                'AllocationId': loadBalancerAddress.AllocationId,
                                'PrivateIPv4Address': loadBalancerAddress.PrivateIPv4Address
                            });
                            reqParams.tf['subnet_mapping'].push({
                                'subnet_id': availabilityZone.SubnetId,
                                'allocation_id': loadBalancerAddress.AllocationId
                            });
                        }
                    });
                }
            });
        }
        reqParams.cfn['SecurityGroups'] = obj.data.SecurityGroups;
        reqParams.tf['security_groups'] = obj.data.SecurityGroups;
        reqParams.cfn['IpAddressType'] = obj.data.IpAddressType;
        reqParams.tf['ip_address_type'] = obj.data.IpAddressType;
        if (obj.data.Attributes) {
            reqParams.cfn['LoadBalancerAttributes'] = [];
            reqParams.tf['access_logs'] = null;
            obj.data.Attributes.forEach(attribute => {
                if (attribute.Value != "") {
                    reqParams.cfn['LoadBalancerAttributes'].push(attribute);
                }

                if (attribute.Key == "access_logs.s3.enabled") {
                    if (!reqParams.tf['access_logs']) {
                        reqParams.tf['access_logs'] = {};
                    }
                    reqParams.tf['access_logs']['enabled'] = (attribute.Value == "true");
                } else if (attribute.Key == "access_logs.s3.bucket") {
                    if (!reqParams.tf['access_logs']) {
                        reqParams.tf['access_logs'] = {};
                    }
                    reqParams.tf['access_logs']['bucket'] = attribute.Value;
                } else if (attribute.Key == "access_logs.s3.prefix") {
                    if (!reqParams.tf['access_logs']) {
                        reqParams.tf['access_logs'] = {};
                    }
                    reqParams.tf['access_logs']['prefix'] = attribute.Value;
                } else if (attribute.Key == "deletion_protection.enabled") {
                    reqParams.tf['enable_deletion_protection'] = attribute.Value;
                } else if (attribute.Key == "idle_timeout.timeout_seconds") {
                    reqParams.tf['idle_timeout'] = attribute.Value;
                } else if (attribute.Key == "routing.http2.enabled") {
                    reqParams.tf['enable_http2'] = attribute.Value;
                } else if (attribute.Key == "load_balancing.cross_zone.enabled") {
                    reqParams.tf['enable_cross_zone_load_balancing'] = attribute.Value;
                }
            });
        }
        reqParams.cfn['AlpnPolicy'] = obj.data.AlpnPolicy;

        /*
        TODO:
        Tags:
            - Resource Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elbv2', obj.id, 'AWS::ElasticLoadBalancingV2::LoadBalancer'),
            'region': obj.region,
            'service': 'elbv2',
            'type': 'AWS::ElasticLoadBalancingV2::LoadBalancer',
            'terraformType': 'aws_lb',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.LoadBalancerArn,
                'GetAtt': {
                    'CanonicalHostedZoneID': obj.data.CanonicalHostedZoneId,
                    'DNSName': obj.data.DNSName,
                    //'LoadBalancerFullName': obj.data.,
                    'LoadBalancerName': obj.data.LoadBalancerName,
                    'SecurityGroups': obj.data.SecurityGroups
                },
                'Import': {
                    'LoadBalancerArn': obj.data.LoadBalancerArn
                }
            }
        });
    } else if (obj.type == "elbv2.loadbalancerlistenercertificate") {
        if (obj.data.Certificates) {
            reqParams.cfn['Certificates'] = [];
            obj.data.Certificates.forEach(certificate => {
                reqParams.cfn['Certificates'].push({
                    'CertificateArn': certificate.CertificateArn
                });
            });
            reqParams.cfn['ListenerArn'] = obj.data.ListenerArn;

            tracked_resources.push({
                'obj': obj,
                'logicalId': getResourceName('elbv2', obj.id, 'AWS::ElasticLoadBalancingV2::ListenerCertificate'),
                'region': obj.region,
                'service': 'elbv2',
                'type': 'AWS::ElasticLoadBalancingV2::ListenerCertificate',
                'options': reqParams
            });

            obj.data.Certificates.forEach(certificate => {
                reqParams = {
                    'boto3': {},
                    'go': {},
                    'cfn': {},
                    'cli': {},
                    'tf': {},
                    'iam': {}
                };

                reqParams.tf['listener_arn'] = obj.data.ListenerArn;
                reqParams.tf['certificate_arn'] = certificate.CertificateArn;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('elbv2', obj.id, 'AWS::ElasticLoadBalancerV2::ListenerCertificate'), // not real resource type
                    'region': obj.region,
                    'service': 'elbv2',
                    'terraformType': 'aws_lb_listener_certificate',
                    'options': reqParams
                });
            });
        }
    } else if (obj.type == "elbv2.loadbalancerlistener") {
        reqParams.cfn['LoadBalancerArn'] = obj.data.LoadBalancerArn;
        reqParams.tf['load_balancer_arn'] = obj.data.LoadBalancerArn;
        reqParams.cfn['Port'] = obj.data.Port;
        reqParams.tf['port'] = obj.data.Port;
        reqParams.cfn['Protocol'] = obj.data.Protocol;
        reqParams.tf['protocol'] = obj.data.Protocol;
        reqParams.cfn['SslPolicy'] = obj.data.SslPolicy;
        reqParams.tf['ssl_policy'] = obj.data.SslPolicy;
        if (obj.data.Certificates) {
            reqParams.cfn['Certificates'] = [];
            obj.data.Certificates.forEach(certificate => {
                reqParams.cfn['Certificates'].push({
                    'CertificateArn': certificate.CertificateArn
                });
                reqParams.tf['certificate_arn'] = certificate.CertificateArn; // TODO: more than one?
            });
        }
        if (obj.data.DefaultActions) {
            reqParams.cfn['DefaultActions'] = [];
            reqParams.tf['default_action'] = [];
            obj.data.DefaultActions.forEach(defaultAction => {
                reqParams.cfn['DefaultActions'].push({
                    'AuthenticateCognitoConfig': defaultAction.AuthenticateCognitoConfig,
                    'AuthenticateOidcConfig': defaultAction.AuthenticateOidcConfig,
                    'FixedResponseConfig': defaultAction.FixedResponseConfig,
                    'Order': defaultAction.Order,
                    'RedirectConfig': defaultAction.RedirectConfig,
                    'TargetGroupArn': defaultAction.TargetGroupArn,
                    'Type': defaultAction.Type
                });

                var authenticateoidc = null;
                if (defaultAction.AuthenticateOidcConfig) {
                    var extraparams = null;
                    if (defaultAction.AuthenticateOidcConfig.AuthenticationRequestExtraParams) {
                        extraparams = [];
                        Object.keys(defaultAction.AuthenticateOidcConfig.AuthenticationRequestExtraParams).forEach(paramkey => {
                            extraparams.push({
                                'key': paramkey,
                                'value': defaultAction.AuthenticateOidcConfig.AuthenticationRequestExtraParams[paramkey]
                            });
                        });
                    }
                    authenticateoidc = {
                        'authentication_request_extra_params': extraparams,
                        'authorization_endpoint': defaultAction.AuthenticateOidcConfig.AuthorizationEndpoint,
                        'client_id': defaultAction.AuthenticateOidcConfig.ClientId,
                        'client_secret': defaultAction.AuthenticateOidcConfig.ClientSecret,
                        'issuer': defaultAction.AuthenticateOidcConfig.Issuer,
                        'on_unauthenticated_request': defaultAction.AuthenticateOidcConfig.OnUnauthenticatedRequest,
                        'scope': defaultAction.AuthenticateOidcConfig.Scope,
                        'session_cookie_name': defaultAction.AuthenticateOidcConfig.SessionCookieName,
                        'session_timeout': defaultAction.AuthenticateOidcConfig.SessionTimeout,
                        'token_endpoint': defaultAction.AuthenticateOidcConfig.TokenEndpoint,
                        'user_info_endpoint': defaultAction.AuthenticateOidcConfig.UserInfoEndpoint
                    };
                }
                var authenticatecognito = null;
                if (defaultAction.AuthenticateCognitoConfig) {
                    var extraparams = null;
                    if (defaultAction.AuthenticateCognitoConfig.AuthenticationRequestExtraParams) {
                        extraparams = [];
                        Object.keys(defaultAction.AuthenticateCognitoConfig.AuthenticationRequestExtraParams).forEach(paramkey => {
                            extraparams.push({
                                'key': paramkey,
                                'value': defaultAction.AuthenticateCognitoConfig.AuthenticationRequestExtraParams[paramkey]
                            });
                        });
                    }
                    authenticatecognito = {
                        'authentication_request_extra_params': extraparams,
                        'on_unauthenticated_request': defaultAction.AuthenticateCognitoConfig.OnUnauthenticatedRequest,
                        'scope': defaultAction.AuthenticateCognitoConfig.Scope,
                        'session_cookie_name': defaultAction.AuthenticateCognitoConfig.SessionCookieName,
                        'session_timeout': defaultAction.AuthenticateCognitoConfig.SessionTimeout,
                        'user_pool_arn': defaultAction.AuthenticateCognitoConfig.UserPoolArn,
                        'user_pool_client_id': defaultAction.AuthenticateCognitoConfig.UserPoolClientId,
                        'user_pool_domain': defaultAction.AuthenticateCognitoConfig.UserPoolDomain
                    };
                }
                var fixedresponse = null;
                if (defaultAction.FixedResponseConfig) {
                    fixedresponse = {
                        'content_type': defaultAction.FixedResponseConfig.ContentType,
                        'message_body': defaultAction.FixedResponseConfig.MessageBody,
                        'status_code': defaultAction.FixedResponseConfig.StatusCode
                    };
                }
                var redirect = null;
                if (defaultAction.RedirectConfig) {
                    redirect = {
                        'host': defaultAction.RedirectConfig.Host,
                        'path': defaultAction.RedirectConfig.Path,
                        'port': defaultAction.RedirectConfig.Port,
                        'protocol': defaultAction.RedirectConfig.Protocol,
                        'query': defaultAction.RedirectConfig.Query,
                        'status_code': defaultAction.RedirectConfig.StatusCode
                    };
                }

                reqParams.tf['default_action'].push({
                    'authenticate_cognito': authenticatecognito,
                    'authenticate_oidc': authenticateoidc,
                    'fixed_response': fixedresponse,
                    'redirect': redirect,
                    'target_group_arn': defaultAction.TargetGroupArn,
                    'type': defaultAction.Type
                });
            });
        }

        /*
        TODO:
        Certificates: // use seperate entity?
            - Certificate
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elbv2', obj.id, 'AWS::ElasticLoadBalancingV2::Listener'),
            'region': obj.region,
            'service': 'elbv2',
            'type': 'AWS::ElasticLoadBalancingV2::Listener',
            'terraformType': 'aws_lb_listener',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ListenerArn,
                'Import': {
                    'ListenerArn': obj.data.ListenerArn
                }
            }
        });
    } else if (obj.type == "elbv2.loadbalancerlistenerrule") {
        if (obj.data.Priority != "default") {
            reqParams.cfn['Priority'] = obj.data.Priority;
            reqParams.tf['priority'] = obj.data.Priority;
            reqParams.cfn['ListenerArn'] = obj.data.ListenerArn;
            reqParams.tf['listener_arn'] = obj.data.ListenerArn;
            if (obj.data.Conditions) {
                reqParams.cfn['Conditions'] = [];
                reqParams.tf['condition'] = [];
                obj.data.Conditions.forEach(condition => {
                    reqParams.cfn['Conditions'].push({
                        'Field': condition.Field,
                        'Values': condition.Values
                    });
                    reqParams.tf['condition'].push({
                        'field': condition.Field,
                        'values': condition.Values
                    });
                });
            }
            reqParams.cfn['Actions'] = obj.data.Actions;

            tracked_resources.push({
                'obj': obj,
                'logicalId': getResourceName('elbv2', obj.id, 'AWS::ElasticLoadBalancingV2::ListenerRule'),
                'region': obj.region,
                'service': 'elbv2',
                'type': 'AWS::ElasticLoadBalancingV2::ListenerRule',
                'terraformType': 'aws_lb_listener_rule',
                'options': reqParams,
                'returnValues': {
                    'Ref': obj.data.RuleArn,
                    'Import': {
                        'RuleArn': obj.data.RuleArn
                    }
                }
            });
        }
    } else if (obj.type == "ec2.snapshotlifecyclepolicy") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['ExecutionRoleArn'] = obj.data.ExecutionRoleArn;
        reqParams.tf['execution_role_arn'] = obj.data.ExecutionRoleArn;
        reqParams.cfn['State'] = obj.data.State;
        reqParams.tf['state'] = obj.data.State;
        reqParams.cfn['PolicyDetails'] = obj.data.PolicyDetails;
        if (obj.data.PolicyDetails) {
            var targettags = null;
            if (obj.data.PolicyDetails.TargetTags) {
                targettags = {};
                obj.data.PolicyDetails.TargetTags.forEach(targettag => {
                    targettags[targettag.Key] = targettag.Value;
                });
            }
            var schedules = null;
            if (obj.data.PolicyDetails.Schedules) {
                schedules = [];
                obj.data.PolicyDetails.Schedules.forEach(schedule => {
                    var createrule = null;
                    if (schedule.CreateRule) {
                        createrule = {
                            'interval': schedule.CreateRule.Interval,
                            'interval_unit': schedule.CreateRule.IntervalUnit,
                            'times': schedule.CreateRule.Times
                        };
                    }
                    var retainrule = null;
                    if (schedule.RetainRule) {
                        retainrule = {
                            'count': schedule.RetainRule.Count
                        };
                    }
                    var tagstoadd = null;
                    if (schedule.TagsToAdd) {
                        tagstoadd = {};
                        schedule.TagsToAdd.forEach(tagtoadd => {
                            tagstoadd[tagtoadd.Key] = tagtoadd.Value;
                        });
                    }
                    schedules.push({
                        'copy_tags': schedule.CopyTags,
                        'create_rule': createrule,
                        'name': schedule.Name,
                        'retain_rule': retainrule,
                        'tags_to_add': tagstoadd
                    });
                });
            }
            reqParams.tf['policy_details'] = {
                'resource_types': obj.data.PolicyDetails.ResourceTypes,
                'schedule': schedules,
                'target_tags': targettags
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::DLM::LifecyclePolicy'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::DLM::LifecyclePolicy',
            'terraformType': 'aws_dlm_lifecycle_policy',
            'options': reqParams
        });
    } else if (obj.type == "ec2.capacityreservation") {
        reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
        reqParams.cfn['InstanceType'] = obj.data.InstanceType;
        reqParams.cfn['InstancePlatform'] = obj.data.InstancePlatform;
        reqParams.cfn['Tenancy'] = obj.data.Tenancy;
        reqParams.cfn['InstanceCount'] = obj.data.TotalInstanceCount;
        reqParams.cfn['EphemeralStorage'] = obj.data.EphemeralStorage;
        reqParams.cfn['EbsOptimized'] = obj.data.EbsOptimized;
        reqParams.cfn['EndDateType'] = obj.data.EndDateType;
        if (obj.data.EndDateType == "limited" && obj.data.EndDate) {
            var enddate = new Date(obj.data.EndDate);
            reqParams.cfn['EndDate'] = enddate.getMonth() + "/" + enddate.getDate() + "/" + enddate.getFullYear() + ", " + enddate.getHours() + ":" + enddate.getMinutes() + ":" + enddate.getSeconds(); // 5/31/2019, 13:30:55
        }
        reqParams.cfn['InstanceMatchCriteria'] = obj.data.InstanceMatchCriteria;
        if (obj.data.Tags) {
            reqParams.cfn['TagSpecifications'] = [{
                'ResourceType': 'capacity-reservation',
                'Tags': obj.data.Tags
            }];
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::CapacityReservation'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::CapacityReservation',
            'options': reqParams
        });
    } else if (obj.type == "ec2.fleet") {
        reqParams.cfn['ExcessCapacityTerminationPolicy'] = obj.data.ExcessCapacityTerminationPolicy;
        reqParams.cfn['ReplaceUnhealthyInstances'] = obj.data.ReplaceUnhealthyInstances;
        reqParams.cfn['TerminateInstancesWithExpiration'] = obj.data.TerminateInstancesWithExpiration;
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.cfn['ValidFrom'] = obj.data.ValidFrom;
        reqParams.cfn['ValidUntil'] = obj.data.ValidUntil;
        if (obj.data.LaunchTemplateConfigs) {
            reqParams.cfn['LaunchTemplateConfigs'] = [];
            obj.data.LaunchTemplateConfigs.forEach(launchtemplateconfig => {
                var launchtemplatespecification = null;
                if (launchtemplateconfig.LaunchTemplateSpecification) {
                    launchtemplatespecification = {
                        'LaunchTemplateId': launchtemplateconfig.LaunchTemplateSpecification.LaunchTemplateId,
                        'LaunchTemplateName': launchtemplateconfig.LaunchTemplateSpecification.LaunchTemplateName,
                        'Version': launchtemplateconfig.LaunchTemplateSpecification.Version
                    };
                }
                var overrides = null;
                if (launchtemplateconfig.Overrides) {
                    overrides = [];
                    launchtemplateconfig.Overrides.forEach(override => {
                        overrides.push({
                            'AvailabilityZone': override.AvailabilityZone,
                            'InstanceType': override.InstanceType,
                            'MaxPrice': override.MaxPrice,
                            'Priority': override.Priority,
                            'SubnetId': override.SubnetId,
                            'WeightedCapacity': override.WeightedCapacity
                        });
                    });
                }
                reqParams.cfn['LaunchTemplateConfigs'].push({
                    'LaunchTemplateSpecification': launchtemplatespecification,
                    'Overrides': overrides
                });
            });
        }
        if (obj.data.TargetCapacitySpecification) {
            reqParams.cfn['TargetCapacitySpecification'] = {
                'DefaultTargetCapacityType': obj.data.TargetCapacitySpecification.DefaultTargetCapacityType,
                'OnDemandTargetCapacity': obj.data.TargetCapacitySpecification.OnDemandTargetCapacity,
                'SpotTargetCapacity': obj.data.TargetCapacitySpecification.SpotTargetCapacity,
                'TotalTargetCapacity': obj.data.TargetCapacitySpecification.TotalTargetCapacity
            };
        }
        if (obj.data.SpotOptions) {
            reqParams.cfn['SpotOptions'] = {
                'AllocationStrategy': obj.data.SpotOptions.AllocationStrategy,
                'InstanceInterruptionBehavior': obj.data.SpotOptions.InstanceInterruptionBehavior,
                'InstancePoolsToUseCount': obj.data.SpotOptions.InstancePoolsToUseCount
            };
        }
        if (obj.data.OnDemandOptions) {
            reqParams.cfn['OnDemandOptions'] = {
                'AllocationStrategy': obj.data.OnDemandOptions.AllocationStrategy
            };
        }
        if (obj.data.Tags) {
            reqParams.cfn['TagSpecifications'] = [{
                'ResourceType': 'fleet',
                'Tags': obj.data.Tags
            }];
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::EC2Fleet'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::EC2Fleet',
            'options': reqParams
        });
    } else if (obj.type == "applicationautoscaling.scalabletarget") {
        reqParams.cfn['MaxCapacity'] = obj.data.MaxCapacity;
        reqParams.cfn['MinCapacity'] = obj.data.MinCapacity;
        reqParams.cfn['ResourceId'] = obj.data.ResourceId;
        reqParams.cfn['RoleARN'] = obj.data.RoleARN;
        reqParams.cfn['ScalableDimension'] = obj.data.ScalableDimension;
        reqParams.cfn['ServiceNamespace'] = obj.data.ServiceNamespace;
        if (obj.data.ScheduledActions) {
            reqParams.cfn['ScheduledActions'] = [];
            obj.data.ScheduledActions.forEach(scheduledaction => {
                var scalabletargetaction = null;
                if (scheduledaction.ScalableTargetAction) {
                    scalabletargetaction = {
                        'MinCapacity': scheduledaction.ScalableTargetAction.MinCapacity,
                        'MaxCapacity': scheduledaction.ScalableTargetAction.MaxCapacity
                    };
                }
                reqParams.cfn['ScheduledActions'].push({
                    'StartTime': scheduledaction.StartTime,
                    'EndTime': scheduledaction.EndTime,
                    'Schedule': scheduledaction.Schedule,
                    'ScheduledActionName': scheduledaction.ScheduledActionName,
                    'ScalableTargetAction': scalabletargetaction,
                });
            });
        }
        reqParams.cfn['SuspendedState'] = obj.data.SuspendedState;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('applicationautoscaling', obj.id, 'AWS::ApplicationAutoScaling::ScalableTarget'),
            'region': obj.region,
            'service': 'applicationautoscaling',
            'type': 'AWS::ApplicationAutoScaling::ScalableTarget',
            'options': reqParams
        });
    } else if (obj.type == "applicationautoscaling.scalingpolicy") {
        reqParams.cfn['PolicyName'] = obj.data.PolicyName;
        reqParams.cfn['PolicyType'] = obj.data.PolicyType;
        reqParams.cfn['ResourceId'] = obj.data.ResourceId;
        reqParams.cfn['ScalableDimension'] = obj.data.ScalableDimension;
        reqParams.cfn['ServiceNamespace'] = obj.data.ServiceNamespace;
        if (obj.data.StepScalingPolicyConfiguration) {
            var stepadjustments = null;
            if (obj.data.StepScalingPolicyConfiguration.StepAdjustments) {
                stepadjustments = {
                    'MetricIntervalLowerBound': obj.data.StepScalingPolicyConfiguration.StepAdjustments.MetricIntervalLowerBound,
                    'MetricIntervalUpperBound': obj.data.StepScalingPolicyConfiguration.StepAdjustments.MetricIntervalUpperBound,
                    'ScalingAdjustment': obj.data.StepScalingPolicyConfiguration.StepAdjustments.ScalingAdjustment
                };
            }
            reqParams.cfn['StepScalingPolicyConfiguration'] = {
                'AdjustmentType': obj.data.StepScalingPolicyConfiguration.AdjustmentType,
                'Cooldown': obj.data.StepScalingPolicyConfiguration.Cooldown,
                'MetricAggregationType': obj.data.StepScalingPolicyConfiguration.MetricAggregationType,
                'MinAdjustmentMagnitude': obj.data.StepScalingPolicyConfiguration.MinAdjustmentMagnitude,
                'StepAdjustments': stepadjustments
            };
        }
        if (obj.data.TargetTrackingScalingPolicyConfiguration) {
            var predefinedmetricspecification = null;
            if (obj.data.TargetTrackingScalingPolicyConfiguration.PredefinedMetricSpecification) {
                predefinedmetricspecification = {
                    'PredefinedMetricType': obj.data.TargetTrackingScalingPolicyConfiguration.PredefinedMetricSpecification.PredefinedMetricType,
                    'ResourceLabel': obj.data.TargetTrackingScalingPolicyConfiguration.PredefinedMetricSpecification.ResourceLabel
                };
            }
            var customizedmetricspecification = null;
            if (obj.data.TargetTrackingScalingPolicyConfiguration.CustomizedMetricSpecification) {
                var dimensions = null;
                if (obj.data.TargetTrackingScalingPolicyConfiguration.CustomizedMetricSpecification.Dimensions) {
                    dimensions = [];
                    obj.data.TargetTrackingScalingPolicyConfiguration.CustomizedMetricSpecification.Dimensions.forEach(dimension => {
                        dimensions.push({
                            'Name': dimension.Name,
                            'Value': dimension.Value
                        });
                    });
                }
                customizedmetricspecification = {
                    'MetricName': obj.data.TargetTrackingScalingPolicyConfiguration.CustomizedMetricSpecification.MetricName,
                    'Namespace': obj.data.TargetTrackingScalingPolicyConfiguration.CustomizedMetricSpecification.Namespace,
                    'Dimensions': dimensions,
                    'Statistic': obj.data.TargetTrackingScalingPolicyConfiguration.CustomizedMetricSpecification.Statistic,
                    'Unit': obj.data.TargetTrackingScalingPolicyConfiguration.CustomizedMetricSpecification.Unit
                };
            }
            reqParams.cfn['TargetTrackingScalingPolicyConfiguration'] = {
                'CustomizedMetricSpecification': customizedmetricspecification,
                'DisableScaleIn': obj.data.TargetTrackingScalingPolicyConfiguration.DisableScaleIn,
                'PredefinedMetricSpecification': predefinedmetricspecification,
                'ScaleInCooldown': obj.data.TargetTrackingScalingPolicyConfiguration.ScaleInCooldown,
                'ScaleOutCooldown': obj.data.TargetTrackingScalingPolicyConfiguration.ScaleOutCooldown,
                'TargetValue': obj.data.TargetTrackingScalingPolicyConfiguration.TargetValue
            };
        }

        /*
        TODO:
        ScalingTargetId
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('applicationautoscaling', obj.id, 'AWS::ApplicationAutoScaling::ScalingPolicy'),
            'region': obj.region,
            'service': 'applicationautoscaling',
            'type': 'AWS::ApplicationAutoScaling::ScalingPolicy',
            'options': reqParams
        });
    } else if (obj.type == "ec2.keypair") {
        reqParams.tf['public_key'] = 'REPLACEME';
        reqParams.tf['key_name'] = obj.data.KeyName;

        /*
        SKIPPED:
        key_name_prefix
        public_key
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::KeyPair'), // not real resource type
            'region': obj.region,
            'service': 'ec2',
            'terraformType': 'aws_key_pair',
            'options': reqParams
        });
    } else if (obj.type == "ec2.flowlog") {
        reqParams.cfn['DeliverLogsPermissionArn'] = obj.data.DeliverLogsPermissionArn;
        reqParams.tf['iam_role_arn'] = obj.data.DeliverLogsPermissionArn;
        reqParams.cfn['LogGroupName'] = obj.data.LogGroupName;
        reqParams.cfn['ResourceId'] = obj.data.ResourceId;
        reqParams.cfn['TrafficType'] = obj.data.TrafficType;
        reqParams.tf['traffic_type'] = obj.data.TrafficType;
        reqParams.cfn['LogDestinationType'] = obj.data.LogDestinationType;
        reqParams.tf['log_destination_type'] = obj.data.LogDestinationType;
        reqParams.cfn['LogDestination'] = obj.data.LogDestination;
        reqParams.tf['log_destination'] = obj.data.LogDestination;
        if (obj.data.ResourceId.startsWith("vpc-")) {
            reqParams.cfn['ResourceType'] = "VPC";
            reqParams.tf['vpc_id'] = obj.data.ResourceId;
        } else if (obj.data.ResourceId.startsWith("subnet-")) {
            reqParams.cfn['ResourceType'] = "Subnet";
            reqParams.tf['subnet_id'] = obj.data.ResourceId;
        } else if (obj.data.ResourceId.startsWith("eni-")) {
            reqParams.cfn['ResourceType'] = "NetworkInterface";
            reqParams.tf['eni_id'] = obj.data.ResourceId;
        }
        reqParams.cfn['LogFormat'] = obj.data.LogFormat;
        reqParams.cfn['MaxAggregationInterval'] = obj.data.MaxAggregationInterval;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::FlowLog'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::FlowLog',
            'terraformType': 'aws_flow_log',
            'options': reqParams
        });
    } else if (obj.type == "ec2.enclavecertificateiamroleassociation") {
        reqParams.cfn['CertificateArn'] = obj.data.CertificateArn;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ec2', obj.id, 'AWS::EC2::EnclaveCertificateIamRoleAssociation'),
            'region': obj.region,
            'service': 'ec2',
            'type': 'AWS::EC2::EnclaveCertificateIamRoleAssociation',
            'options': reqParams
        });
    } else if (obj.type == "ec2.warmpool") {
        reqParams.cfn['AutoScalingGroupName'] = obj.data.AutoScalingGroupName;
        reqParams.cfn['MaxGroupPreparedCapacity'] = obj.data.MaxGroupPreparedCapacity;
        reqParams.cfn['MinSize'] = obj.data.MinSize;
        reqParams.cfn['PoolState'] = obj.data.PoolState;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('autoscaling', obj.id, 'AWS::AutoScaling::WarmPool'),
            'region': obj.region,
            'service': 'autoscaling',
            'type': 'AWS::AutoScaling::WarmPool',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
