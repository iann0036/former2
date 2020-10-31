/* ========================================================================== */
// Global Accelerator
/* ========================================================================== */

sections.push({
    'category': 'Networking &amp; Content Delivery',
    'service': 'Global Accelerator',
    'resourcetypes': {
        'Accelerators': {
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
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
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
        'Listeners': {
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
                        title: 'Listener ARN',
                        field: 'listenerarn',
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
                        field: 'acceleratorarn',
                        title: 'Accelerator ARN',
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
        'Endpoint Groups': {
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
                        title: 'Endpoint Group ARN',
                        field: 'endpointgrouparn',
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
                        field: 'endpointgroupregion',
                        title: 'Region',
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

async function updateDatatableNetworkingAndContentDeliveryGlobalAccelerator() {
    blockUI('#section-networkingandcontentdelivery-globalaccelerator-accelerators-datatable');
    blockUI('#section-networkingandcontentdelivery-globalaccelerator-listeners-datatable');
    blockUI('#section-networkingandcontentdelivery-globalaccelerator-endpointgroups-datatable');

    await sdkcall("GlobalAccelerator", "listAccelerators", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-globalaccelerator-accelerators-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-globalaccelerator-listeners-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-globalaccelerator-endpointgroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Accelerators.map(async (accelerator) => {
            return sdkcall("GlobalAccelerator", "describeAccelerator", {
                AcceleratorArn: accelerator.AcceleratorArn
            }, true).then(async (data) => {
                await sdkcall("GlobalAccelerator", "describeAcceleratorAttributes", {
                    AcceleratorArn: accelerator.AcceleratorArn
                }, true).then(async (attributedata) => {
                    data.Accelerator['Attributes'] = attributedata.AcceleratorAttributes;
                });

                data.Accelerator['Tags'] = await getResourceTags(data.Accelerator.AcceleratorArn);

                $('#section-networkingandcontentdelivery-globalaccelerator-accelerators-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Accelerator.AcceleratorArn,
                    f2type: 'globalaccelerator.accelerator',
                    f2data: data.Accelerator,
                    f2region: region,
                    name: data.Accelerator.Name,
                    enabled: data.Accelerator.Enabled,
                    creationtime: data.Accelerator.CreatedTime
                }]);

                await sdkcall("GlobalAccelerator", "listListeners", {
                    AcceleratorArn: accelerator.AcceleratorArn
                }, true).then(async (data) => {
                    await Promise.all(data.Listeners.map(async (listener) => {
                        listener['AcceleratorArn'] = accelerator.AcceleratorArn;

                        $('#section-networkingandcontentdelivery-globalaccelerator-listeners-datatable').deferredBootstrapTable('append', [{
                            f2id: listener.ListenerArn,
                            f2type: 'globalaccelerator.listener',
                            f2data: listener,
                            f2region: region,
                            acceleratorarn: accelerator.AcceleratorArn,
                            listenerarn: listener.ListenerArn,
                            protocol: listener.Protocol
                        }]);

                        return sdkcall("GlobalAccelerator", "listEndpointGroups", {
                            ListenerArn: listener.ListenerArn
                        }, true).then(async (data) => {
                            await Promise.all(data.EndpointGroups.map(async (endpointgroup) => {
                                return sdkcall("GlobalAccelerator", "describeEndpointGroup", {
                                    EndpointGroupArn: endpointgroup.EndpointGroupArn
                                }, true).then(async (data) => {
                                    data['ListenerArn'] = listener.ListenerArn;

                                    $('#section-networkingandcontentdelivery-globalaccelerator-endpointgroups-datatable').deferredBootstrapTable('append', [{
                                        f2id: data.EndpointGroup.EndpointGroupArn,
                                        f2type: 'globalaccelerator.endpointgroup',
                                        f2data: data.EndpointGroup,
                                        f2region: region,
                                        endpointgroupregionarn: data.EndpointGroup.EndpointGroupArn,
                                        endpointgroupregion: data.EndpointGroup.EndpointGroupRegion
                                    }]);
                                });
                            }));
                        });
                    }));
                });
            });
        }));
    }).catch(() => { });

    unblockUI('#section-networkingandcontentdelivery-globalaccelerator-accelerators-datatable');
    unblockUI('#section-networkingandcontentdelivery-globalaccelerator-listeners-datatable');
    unblockUI('#section-networkingandcontentdelivery-globalaccelerator-endpointgroups-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "globalaccelerator.accelerator") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['IpAddressType'] = obj.data.IpAddressType;
        reqParams.tf['ip_address_type'] = obj.data.IpAddressType;
        reqParams.cfn['Enabled'] = obj.data.Enabled;
        reqParams.tf['enabled'] = obj.data.Enabled;
        if (obj.data.Attributes) {
            reqParams.tf['attributes'] = {
                'flow_logs_enabled': obj.data.Attributes.FlowLogsEnabled,
                'flow_logs_s3_bucket': obj.data.Attributes.FlowLogsS3Bucket,
                'flow_logs_s3_prefix': obj.data.Attributes.FlowLogsS3Prefix
            };
        }
        if (obj.data.IpSets) {
            reqParams.cfn['IpAddresses'] = [];
            obj.data.IpSets.forEach(ipset => {
                reqParams.cfn['IpAddresses'] = reqParams.cfn['IpAddresses'].concat(ipset.IpAddresses);
            });
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('globalaccelerator', obj.id, 'AWS::GlobalAccelerator::Accelerator'),
            'region': obj.region,
            'service': 'globalaccelerator',
            'type': 'AWS::GlobalAccelerator::Accelerator',
            'terraformType': 'aws_globalaccelerator_accelerator',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.AcceleratorArn,
                'GetAtt': {
                    'DnsName': obj.data.DnsName
                }
            }
        });
    } else if (obj.type == "globalaccelerator.listener") {
        reqParams.cfn['AcceleratorArn'] = obj.data.AcceleratorArn;
        reqParams.tf['accelerator_arn'] = obj.data.AcceleratorArn;
        reqParams.cfn['ClientAffinity'] = obj.data.ClientAffinity;
        reqParams.tf['client_affinity'] = obj.data.ClientAffinity;
        reqParams.cfn['Protocol'] = obj.data.Protocol;
        reqParams.tf['protocol'] = obj.data.Protocol;
        if (obj.data.PortRanges) {
            reqParams.cfn['PortRanges'] = obj.data.PortRanges;
            reqParams.tf['port_range'] = [];
            obj.data.PortRanges.forEach(portrange => {
                reqParams.tf['port_range'].append({
                    'from_port': portrange.FromPort,
                    'to_port': portrange.ToPort
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('globalaccelerator', obj.id, 'AWS::GlobalAccelerator::Listener'),
            'region': obj.region,
            'service': 'globalaccelerator',
            'type': 'AWS::GlobalAccelerator::Listener',
            'terraformType': 'aws_globalaccelerator_listener',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ListenerArn
            }
        });
    } else if (obj.type == "globalaccelerator.endpointgroup") {
        reqParams.cfn['EndpointGroupRegion'] = obj.data.EndpointGroupRegion;
        reqParams.cfn['TrafficDialPercentage'] = obj.data.TrafficDialPercentage;
        reqParams.cfn['HealthCheckPort'] = obj.data.HealthCheckPort;
        reqParams.cfn['HealthCheckProtocol'] = obj.data.HealthCheckProtocol;
        reqParams.cfn['HealthCheckPath'] = obj.data.HealthCheckPath;
        reqParams.cfn['HealthCheckIntervalSeconds'] = obj.data.HealthCheckIntervalSeconds;
        reqParams.cfn['ThresholdCount'] = obj.data.ThresholdCount;
        reqParams.cfn['ListenerArn'] = obj.data.ListenerArn;
        if (obj.data.EndpointDescriptions) {
            reqParams.cfn['EndpointConfigurations'] = [];
            obj.data.EndpointDescriptions.forEach(endpointdescription => {
                reqParams.cfn['EndpointConfigurations'].push({
                    'ClientIPPreservationEnabled': endpointdescription.ClientIPPreservationEnabled,
                    'EndpointId': endpointdescription.EndpointId,
                    'Weight': endpointdescription.Weight
                });
            });
        }
        reqParams.cfn['PortOverrides'] = obj.data.PortOverrides;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('globalaccelerator', obj.id, 'AWS::GlobalAccelerator::EndpointGroup'),
            'region': obj.region,
            'service': 'globalaccelerator',
            'type': 'AWS::GlobalAccelerator::EndpointGroup',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.EndpointGroupArn
            }
        });
    } else {
        return false;
    }

    return true;
});
