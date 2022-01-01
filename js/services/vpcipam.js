/* ========================================================================== */
// VPC IPAM
/* ========================================================================== */

sections.push({
    'category': 'Networking &amp; Content Delivery',
    'service': 'VPC IPAM',
    'resourcetypes': {
        'IPAMs': {
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
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'IPAM Pools': {
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
        'IPAM Scopes': {
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
        'IPAM Allocations': {
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
                        field: 'poolid',
                        title: 'Pool ID',
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
                        field: 'cidr',
                        title: 'CIDR',
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

async function updateDatatableNetworkingAndContentDeliveryVPCIPAM() {
    blockUI('#section-networkingandcontentdelivery-vpcipam-ipams-datatable');
    blockUI('#section-networkingandcontentdelivery-vpcipam-ipampools-datatable');
    blockUI('#section-networkingandcontentdelivery-vpcipam-ipamscopes-datatable');
    blockUI('#section-networkingandcontentdelivery-vpcipam-ipamallocations-datatable');

    await sdkcall("EC2", "describeIpams", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpcipam-ipams-datatable').deferredBootstrapTable('removeAll');

        data.Ipams.forEach(ipam => {
            $('#section-networkingandcontentdelivery-vpcipam-ipams-datatable').deferredBootstrapTable('append', [{
                f2id: ipam.IpamArn,
                f2type: 'vpcipam.ipam',
                f2data: ipam,
                f2region: region,
                id: ipam.IpamId,
                description: ipam.Description
            }]);
        });
    }).catch(() => { });

    await sdkcall("EC2", "describeIpamPools", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpcipam-ipampools-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-vpcipam-ipamallocations-datatable').deferredBootstrapTable('removeAll');

        data.IpamPools.forEach(async (ipampool) => {
            $('#section-networkingandcontentdelivery-vpcipam-ipampools-datatable').deferredBootstrapTable('append', [{
                f2id: ipampool.IpamPoolArn,
                f2type: 'vpcipam.ipampool',
                f2data: ipampool,
                f2region: region,
                id: ipampool.IpamPoolId,
                description: ipampool.Description
            }]);

            await sdkcall("EC2", "getIpamPoolAllocations", {
                IpamPoolId: ipampool.IpamPoolId
            }, false).then(async (data) => {
                data.IpamPoolAllocations.forEach(ipampoolallocation => {
                    $('#section-networkingandcontentdelivery-vpcipam-ipamallocations-datatable').deferredBootstrapTable('append', [{
                        f2id: ipampoolallocation.IpamPoolAllocationId,
                        f2type: 'vpcipam.ipamallocation',
                        f2data: ipampoolallocation,
                        f2region: region,
                        id: ipampoolallocation.IpamPoolAllocationId,
                        description: ipampoolallocation.Description,
                        poolid: ipampoolallocation.ResourceId,
                        cidr: ipampoolallocation.Cidr
                    }]);
                });
            }).catch(() => { });
        });
    }).catch(() => { });

    await sdkcall("EC2", "describeIpamScopes", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-vpcipam-ipamscopes-datatable').deferredBootstrapTable('removeAll');

        data.IpamScopes.forEach(ipamscope => {
            $('#section-networkingandcontentdelivery-vpcipam-ipamscopes-datatable').deferredBootstrapTable('append', [{
                f2id: ipamscope.IpamScopeArn,
                f2type: 'vpcipam.ipamscope',
                f2data: ipamscope,
                f2region: region,
                id: ipamscope.IpamScopeId,
                description: ipamscope.Description
            }]);
        });
    }).catch(() => { });

    unblockUI('#section-networkingandcontentdelivery-vpcipam-ipams-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpcipam-ipampools-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpcipam-ipamscopes-datatable');
    unblockUI('#section-networkingandcontentdelivery-vpcipam-ipamallocations-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "vpcipam.ipam") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['OperatingRegions'] = obj.data.OperatingRegions;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('vpcipam', obj.id, 'AWS::EC2::IPAM'),
            'region': obj.region,
            'service': 'vpcipam',
            'type': 'AWS::EC2::IPAM',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.IpamId,
                'GetAtt': {
                    'Arn': obj.data.IpamArn
                }
            }
        });
    } else if (obj.type == "vpcipam.ipampool") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['SourceIpamPoolId'] = obj.data.SourceIpamPoolId;
        if (obj.data.IpamScopeArn) {
            reqParams.cfn['IpamScopeId'] = obj.data.IpamScopeArn.split("/")[1];
        }
        reqParams.cfn['Locale'] = obj.data.Locale;
        reqParams.cfn['AutoImport'] = obj.data.AutoImport;
        reqParams.cfn['PubliclyAdvertisable'] = obj.data.PubliclyAdvertisable;
        reqParams.cfn['AddressFamily'] = obj.data.AddressFamily;
        reqParams.cfn['AllocationMinNetmaskLength'] = obj.data.AllocationMinNetmaskLength;
        reqParams.cfn['AllocationMaxNetmaskLength'] = obj.data.AllocationMaxNetmaskLength;
        reqParams.cfn['AllocationDefaultNetmaskLength'] = obj.data.AllocationDefaultNetmaskLength;
        reqParams.cfn['AllocationResourceTags'] = obj.data.AllocationResourceTags;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('vpcipam', obj.id, 'AWS::EC2::IPAMPool'),
            'region': obj.region,
            'service': 'vpcipam',
            'type': 'AWS::EC2::IPAMPool',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.IpamPoolId,
                'GetAtt': {
                    'Arn': obj.data.IpamPoolArn
                }
            }
        });
    } else if (obj.type == "vpcipam.ipamscope") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['IpamId'] = obj.data.IpamArn.split("/")[1];
        reqParams.cfn['IpamScopeType'] = obj.data.IpamScopeType;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('vpcipam', obj.id, 'AWS::EC2::IPAMScope'),
            'region': obj.region,
            'service': 'vpcipam',
            'type': 'AWS::EC2::IPAMScope',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.IpamScopeId,
                'GetAtt': {
                    'Arn': obj.data.IpamScopeArn
                }
            }
        });
    } else if (obj.type == "vpcipam.ipamallocation") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Cidr'] = obj.data.Cidr;
        reqParams.cfn['IpamPoolId'] = obj.data.ResourceId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('vpcipam', obj.id, 'AWS::EC2::IPAMAllocation'),
            'region': obj.region,
            'service': 'vpcipam',
            'type': 'AWS::EC2::IPAMAllocation',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
