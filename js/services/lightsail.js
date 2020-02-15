/* ========================================================================== */
// Lightsail
/* ========================================================================== */

sections.push({
    'category': 'Compute',
    'service': 'Lightsail',
    'resourcetypes': {
        'Instances': {
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
                        field: 'blueprint',
                        title: 'Blueprint',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'publicipaddress',
                        title: 'Public IP Address',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Domains': {
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
                    }
                ],
                [
                    // nothing
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
        'Static IPs': {
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
                        field: 'ipaddress',
                        title: 'IP Address',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Static IP Attachments': {
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
                        title: 'Static IP Name',
                        field: 'staticipname',
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
                        field: 'instancename',
                        title: 'Instance Name',
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

async function updateDatatableComputeLightsail() {
    blockUI('#section-compute-lightsail-instances-datatable');
    blockUI('#section-compute-lightsail-domains-datatable');
    blockUI('#section-compute-lightsail-keypairs-datatable');
    blockUI('#section-compute-lightsail-staticips-datatable');
    blockUI('#section-compute-lightsail-staticipattachments-datatable');

    await sdkcall("Lightsail", "getInstances", {
        // no params
    }, false).then(async (data) => {
        $('#section-compute-lightsail-instances-datatable').bootstrapTable('removeAll');

        data.instances.forEach(instance => {
            $('#section-compute-lightsail-instances-datatable').bootstrapTable('append', [{
                f2id: instance.arn,
                f2type: 'lightsail.instance',
                f2data: instance,
                f2region: region,
                name: instance.name,
                blueprint: instance.blueprintName,
                publicipaddress: instance.publicIpAddress
            }]);
        });
    }).catch(() => { });

    await sdkcall("Lightsail", "getDomains", {
        // no params
    }, false).then(async (data) => {
        $('#section-compute-lightsail-domains-datatable').bootstrapTable('removeAll');

        data.domains.forEach(domain => {
            $('#section-compute-lightsail-domains-datatable').bootstrapTable('append', [{
                f2id: domain.arn,
                f2type: 'lightsail.domain',
                f2data: instance,
                f2region: region,
                domainname: domain.name
            }]);
        });
    }).catch(() => { });

    await sdkcall("Lightsail", "getKeyPairs", {
        // no params
    }, false).then(async (data) => {
        $('#section-compute-lightsail-keypairs-datatable').bootstrapTable('removeAll');

        data.keyPairs.forEach(keypair => {
            $('#section-compute-lightsail-keypairs-datatable').bootstrapTable('append', [{
                f2id: keypair.arn,
                f2type: 'lightsail.keypair',
                f2data: keypair,
                f2region: region,
                name: keypair.name,
                fingerprint: keypair.fingerprint
            }]);
        });
    }).catch(() => { });

    await sdkcall("Lightsail", "getStaticIps", {
        // no params
    }, false).then(async (data) => {
        $('#section-compute-lightsail-staticips-datatable').bootstrapTable('removeAll');
        $('#section-compute-lightsail-staticipattachments-datatable').bootstrapTable('removeAll');

        data.staticIps.forEach(staticip => {
            $('#section-compute-lightsail-staticips-datatable').bootstrapTable('append', [{
                f2id: staticip.arn,
                f2type: 'lightsail.staticip',
                f2data: staticip,
                f2region: region,
                name: staticip.name,
                ipaddress: staticip.ipAddress
            }]);
            if (staticip.isAttached) {
                $('#section-compute-lightsail-staticipattachments-datatable').bootstrapTable('append', [{
                    f2id: staticip.arn,
                    f2type: 'lightsail.staticipattachment',
                    f2data: staticip,
                    f2region: region,
                    staticipname: staticip.name,
                    instancename: staticip.attachedTo
                }]);
            }
        });
    }).catch(() => { });

    unblockUI('#section-compute-lightsail-instances-datatable');
    unblockUI('#section-compute-lightsail-domains-datatable');
    unblockUI('#section-compute-lightsail-keypairs-datatable');
    unblockUI('#section-compute-lightsail-staticips-datatable');
    unblockUI('#section-compute-lightsail-staticipattachments-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "lightsail.instance") {
        reqParams.tf['name'] = obj.data.name;
        if (obj.data.location) {
            reqParams.tf['availability_zone'] = obj.data.location.availabilityZone;
        }
        reqParams.tf['blueprint_id'] = obj.data.blueprintId;
        reqParams.tf['bundle_id'] = obj.data.bundleId;
        reqParams.tf['key_pair_name'] = obj.data.sshKeyName;
        if (obj.data.tags) {
            reqParams.tf['tags'] = {};
            obj.data.tags.forEach(tag => {
                reqParams.tf['tags'][tag['key']] = tag['value'];
            });
        }

        /*
        TODO:
        user_data
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lightsail', obj.id, 'AWS::Lightsail::Instance'), // not real resource type
            'region': obj.region,
            'service': 'lightsail',
            'terraformType': 'aws_lightsail_instance',
            'options': reqParams
        });
    } else if (obj.type == "lightsail.domain") {
        reqParams.tf['domain_name'] = obj.data.name;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lightsail', obj.id, 'AWS::Lightsail::Domain'), // not real resource type
            'region': obj.region,
            'service': 'lightsail',
            'terraformType': 'aws_lightsail_domain',
            'options': reqParams
        });
    } else if (obj.type == "lightsail.keypair") {
        reqParams.tf['name'] = obj.data.name;
        reqParams.tf['public_key'] = 'REPLACEME';

        /*
        SKIPPED:
        pgp_key
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lightsail', obj.id, 'AWS::Lightsail::KeyPair'), // not real resource type
            'region': obj.region,
            'service': 'lightsail',
            'terraformType': 'aws_lightsail_key_pair',
            'options': reqParams
        });
    } else if (obj.type == "lightsail.staticip") {
        reqParams.tf['name'] = obj.data.name;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lightsail', obj.id, 'AWS::Lightsail::StaticIp'), // not real resource type
            'region': obj.region,
            'service': 'lightsail',
            'terraformType': 'aws_lightsail_static_ip',
            'options': reqParams
        });
    } else if (obj.type == "lightsail.staticipattachment") {
        reqParams.tf['static_ip_name'] = obj.data.name;
        reqParams.tf['instance_name'] = obj.data.attachedTo;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lightsail', obj.id, 'AWS::Lightsail::StaticIpAttachment'), // not real resource type
            'region': obj.region,
            'service': 'lightsail',
            'terraformType': 'aws_lightsail_static_ip_attachment',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
