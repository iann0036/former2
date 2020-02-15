/* ========================================================================== */
// Global Accelerator
/* ========================================================================== */

sections.push({
    'category': 'Networking &amp; Content Delivery',
    'service': 'Global Accelerator',
    'resourcetypes': {
        'Accelerators': {
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
        }
    }
});

async function updateDatatableNetworkingAndContentDeliveryGlobalAccelerator() {
    blockUI('#section-networkingandcontentdelivery-globalaccelerator-accelerators-datatable');
    blockUI('#section-networkingandcontentdelivery-globalaccelerator-listeners-datatable');

    await sdkcall("GlobalAccelerator", "listAccelerators", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-globalaccelerator-accelerators-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-globalaccelerator-listeners-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Accelerators.map(accelerator => {
            return sdkcall("GlobalAccelerator", "describeAccelerator", {
                AcceleratorArn: accelerator.AcceleratorArn
            }, true).then(async (data) => {
                await sdkcall("GlobalAccelerator", "describeAcceleratorAttributes", {
                    AcceleratorArn: accelerator.AcceleratorArn
                }, true).then(async (attributedata) => {
                    data.Accelerator['Attributes'] = attributedata.AcceleratorAttributes;
                });

                $('#section-networkingandcontentdelivery-globalaccelerator-accelerators-datatable').bootstrapTable('append', [{
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
                    data.Listeners.forEach(listener => {
                        listener['AcceleratorArn'] = accelerator.AcceleratorArn;

                        $('#section-networkingandcontentdelivery-globalaccelerator-listeners-datatable').bootstrapTable('append', [{
                            f2id: listener.ListenerArn,
                            f2type: 'globalaccelerator.listener',
                            f2data: listener,
                            f2region: region,
                            acceleratorarn: accelerator.AcceleratorArn,
                            listenerarn: listener.ListenerArn,
                            protocol: listener.Protocol
                        }]);
                    });
                });
            });
        }));
    }).catch(() => { });

    unblockUI('#section-networkingandcontentdelivery-globalaccelerator-accelerators-datatable');
    unblockUI('#section-networkingandcontentdelivery-globalaccelerator-listeners-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "globalaccelerator.accelerator") {
        reqParams.tf['name'] = obj.data.Name;
        reqParams.tf['ip_address_type'] = obj.data.IpAddressType;
        reqParams.tf['enabled'] = obj.data.Enabled;
        if (obj.data.Attributes) {
            reqParams.tf['attributes'] = {
                'flow_logs_enabled': obj.data.Attributes.FlowLogsEnabled,
                'flow_logs_s3_bucket': obj.data.Attributes.FlowLogsS3Bucket,
                'flow_logs_s3_prefix': obj.data.Attributes.FlowLogsS3Prefix
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('globalaccelerator', obj.id, 'AWS::GlobalAccelerator::Accelerator'), // not real resource type
            'region': obj.region,
            'service': 'globalaccelerator',
            'terraformType': 'aws_globalaccelerator_accelerator',
            'options': reqParams
        });
    } else if (obj.type == "globalaccelerator.listener") {
        reqParams.tf['accelerator_arn'] = obj.data.AcceleratorArn;
        reqParams.tf['client_affinity'] = obj.data.ClientAffinity;
        reqParams.tf['protocol'] = obj.data.Protocol;
        if (obj.data.PortRanges) {
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
            'logicalId': getResourceName('globalaccelerator', obj.id, 'AWS::GlobalAccelerator::Listener'), // not real resource type
            'region': obj.region,
            'service': 'globalaccelerator',
            'terraformType': 'aws_globalaccelerator_listener',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
