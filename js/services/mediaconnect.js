/* ========================================================================== */
// MediaConnect
/* ========================================================================== */

sections.push({
    'category': 'Media Services',
    'service': 'MediaConnect',
    'resourcetypes': {
        'Flows': {
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
        'Flow Sources': {
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
                        field: 'flowarn',
                        title: 'Flow ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Flow Outputs': {
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
                        field: 'flowarn',
                        title: 'Flow ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Flow Entitlements': {
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
                        field: 'flowarn',
                        title: 'Flow ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Flow VPC Interfaces': {
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
                        field: 'flowarn',
                        title: 'Flow ARN',
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

async function updateDatatableMediaServicesMediaConnect() {
    blockUI('#section-mediaservices-mediaconnect-flows-datatable');
    blockUI('#section-mediaservices-mediaconnect-flowsources-datatable');
    blockUI('#section-mediaservices-mediaconnect-flowoutputs-datatable');
    blockUI('#section-mediaservices-mediaconnect-flowentitlements-datatable');
    blockUI('#section-mediaservices-mediaconnect-flowvpcinterfaces-datatable');

    await sdkcall("MediaConnect", "listFlows", {
        // no params
    }, false).then(async (data) => {
        $('#section-mediaservices-mediaconnect-flows-datatable').deferredBootstrapTable('removeAll');
        $('#section-mediaservices-mediaconnect-flowsources-datatable').deferredBootstrapTable('removeAll');
        $('#section-mediaservices-mediaconnect-flowoutputs-datatable').deferredBootstrapTable('removeAll');
        $('#section-mediaservices-mediaconnect-flowentitlements-datatable').deferredBootstrapTable('removeAll');
        $('#section-mediaservices-mediaconnect-flowvpcinterfaces-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Flows.map(flow => {
            return sdkcall("MediaConnect", "describeFlow", {
                FlowArn: flow.FlowArn
            }, true).then((data) => {
                if (data.Flow) {
                    $('#section-mediaservices-mediaconnect-flows-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Flow.FlowArn,
                        f2type: 'mediaconnect.flow',
                        f2data: data.Flow,
                        f2region: region,
                        name: data.Flow.Name,
                        description: data.Flow.Description
                    }]);

                    data.Flow.Sources.forEach(source => {
                        source['FlowArn'] = data.Flow.FlowArn;
                        
                        $('#section-mediaservices-mediaconnect-flowsources-datatable').deferredBootstrapTable('append', [{
                            f2id: source.SourceArn,
                            f2type: 'mediaconnect.flowsource',
                            f2data: source,
                            f2region: region,
                            name: source.Name,
                            description: source.Description,
                            flowarn: data.Flow.FlowArn
                        }]);
                    });

                    data.Flow.Outputs.forEach(output => {
                        output['FlowArn'] = data.Flow.FlowArn;
                        
                        $('#section-mediaservices-mediaconnect-flowoutputs-datatable').deferredBootstrapTable('append', [{
                            f2id: output.SourceArn,
                            f2type: 'mediaconnect.flowoutput',
                            f2data: output,
                            f2region: region,
                            name: output.Name,
                            description: output.Description,
                            flowarn: data.Flow.FlowArn
                        }]);
                    });

                    data.Flow.Entitlements.forEach(entitlement => {
                        entitlement['FlowArn'] = data.Flow.FlowArn;
                        
                        $('#section-mediaservices-mediaconnect-flowentitlements-datatable').deferredBootstrapTable('append', [{
                            f2id: entitlement.SourceArn,
                            f2type: 'mediaconnect.flowentitlement',
                            f2data: entitlement,
                            f2region: region,
                            name: entitlement.Name,
                            description: entitlement.Description,
                            flowarn: data.Flow.FlowArn
                        }]);
                    });

                    data.Flow.VpcInterfaces.forEach(vpcinterface => {
                        vpcinterface['FlowArn'] = data.Flow.FlowArn;
                        
                        $('#section-mediaservices-mediaconnect-flowvpcinterfaces-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Flow.FlowArn + " VPC Interface " + vpcinterface.Name,
                            f2type: 'mediaconnect.flowvpcinterface',
                            f2data: vpcinterface,
                            f2region: region,
                            name: vpcinterface.Name,
                            flowarn: data.Flow.FlowArn
                        }]);
                    });
                }
            });
        }));
    }).catch(() => { });

    unblockUI('#section-mediaservices-mediaconnect-flows-datatable');
    unblockUI('#section-mediaservices-mediaconnect-flowsources-datatable');
    unblockUI('#section-mediaservices-mediaconnect-flowoutputs-datatable');
    unblockUI('#section-mediaservices-mediaconnect-flowentitlements-datatable');
    unblockUI('#section-mediaservices-mediaconnect-flowvpcinterfaces-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "mediaconnect.flow") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Source'] = {
            'Decryption': obj.data.Source.Decryption,
            'Description': obj.data.Source.Description,
            'EntitlementArn': obj.data.Source.EntitlementArn,
            'IngestIp': obj.data.Source.IngestIp,
            'IngestPort': obj.data.Source.IngestPort,
            'Name': obj.data.Source.Name,
            'MaxBitrate': obj.data.Source.Transport.MaxBitrate,
            'MaxLatency': obj.data.Source.Transport.MaxLatency,
            'Protocol': obj.data.Source.Transport.Protocol,
            'StreamId': obj.data.Source.Transport.StreamId,
            'VpcInterfaceName': obj.data.Source.VpcInterfaceName,
            'WhitelistCidr': obj.data.Source.WhitelistCidr,
            'SourceArn': obj.data.Source.SourceArn
        };
        reqParams.cfn['SourceFailoverConfig'] = obj.data.SourceFailoverConfig;
        reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('mediaconnect', obj.id, 'AWS::MediaConnect::Flow'),
            'region': obj.region,
            'service': 'mediaconnect',
            'type': 'AWS::MediaConnect::Flow',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.FlowArn
            }
        });
    } else if (obj.type == "mediaconnect.flowsource") {
        reqParams.cfn['FlowArn'] = obj.data.FlowArn;
        reqParams.cfn['Decryption'] = obj.data.Decryption;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['EntitlementArn'] = obj.data.EntitlementArn;
        reqParams.cfn['IngestPort'] = obj.data.IngestPort;
        reqParams.cfn['MaxBitrate'] = obj.data.Transport.MaxBitrate;
        reqParams.cfn['MaxLatency'] = obj.data.Transport.MaxLatency;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Protocol'] = obj.data.Transport.Protocol;
        reqParams.cfn['StreamId'] = obj.data.Transport.StreamId;
        reqParams.cfn['VpcInterfaceName'] = obj.data.VpcInterfaceName;
        reqParams.cfn['WhitelistCidr'] = obj.data.WhitelistCidr;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('mediaconnect', obj.id, 'AWS::MediaConnect::FlowSource'),
            'region': obj.region,
            'service': 'mediaconnect',
            'type': 'AWS::MediaConnect::FlowSource',
            'options': reqParams
        });
    } else if (obj.type == "mediaconnect.flowoutput") {
        reqParams.cfn['FlowArn'] = obj.data.FlowArn;
        reqParams.cfn['CidrAllowList'] = obj.data.Transport.CidrAllowList;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Destination'] = obj.data.Destination;
        reqParams.cfn['Encryption'] = {
            'Algorithm': obj.data.Encryption.Algorithm,
            'KeyType': obj.data.Encryption.KeyType,
            'RoleArn': obj.data.Encryption.RoleArn,
            'SecretArn': obj.data.Encryption.SecretArn
        };
        reqParams.cfn['MaxLatency'] = obj.data.Transport.MaxLatency;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Port'] = obj.data.Port;
        reqParams.cfn['Protocol'] = obj.data.Transport.Protocol;
        reqParams.cfn['RemoteId'] = obj.data.Transport.RemoteId;
        reqParams.cfn['SmoothingLatency'] = obj.data.Transport.SmoothingLatency;
        reqParams.cfn['StreamId'] = obj.data.Transport.StreamId;
        reqParams.cfn['VpcInterfaceAttachment'] = obj.data.VpcInterfaceAttachment;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('mediaconnect', obj.id, 'AWS::MediaConnect::FlowOutput'),
            'region': obj.region,
            'service': 'mediaconnect',
            'type': 'AWS::MediaConnect::FlowOutput',
            'options': reqParams
        });
    } else if (obj.type == "mediaconnect.flowentitlement") {
        reqParams.cfn['FlowArn'] = obj.data.FlowArn;
        reqParams.cfn['DataTransferSubscriberFeePercent'] = obj.data.DataTransferSubscriberFeePercent;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Encryption'] = obj.data.Encryption;
        reqParams.cfn['EntitlementStatus'] = obj.data.EntitlementStatus;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Subscribers'] = obj.data.Subscribers;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('mediaconnect', obj.id, 'AWS::MediaConnect::FlowEntitlement'),
            'region': obj.region,
            'service': 'mediaconnect',
            'type': 'AWS::MediaConnect::FlowEntitlement',
            'options': reqParams
        });
    } else if (obj.type == "mediaconnect.flowvpcinterface") {
        reqParams.cfn['FlowArn'] = obj.data.FlowArn;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['SecurityGroupIds'] = obj.data.SecurityGroupIds;
        reqParams.cfn['SubnetId'] = obj.data.SubnetId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('mediaconnect', obj.id, 'AWS::MediaConnect::FlowVpcInterface'),
            'region': obj.region,
            'service': 'mediaconnect',
            'type': 'AWS::MediaConnect::FlowVpcInterface',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
