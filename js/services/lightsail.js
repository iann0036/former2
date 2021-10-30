/* ========================================================================== */
// Lightsail
/* ========================================================================== */

sections.push({
    'category': 'Compute',
    'service': 'Lightsail',
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
        },
        'Disks': {
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
                        field: 'size',
                        title: 'Size',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Databases': {
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
                        field: 'engine',
                        title: 'Engine',
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
    blockUI('#section-compute-lightsail-disks-datatable');
    blockUI('#section-compute-lightsail-databases-datatable');

    await sdkcall("Lightsail", "getInstances", {
        // no params
    }, false).then(async (data) => {
        $('#section-compute-lightsail-instances-datatable').deferredBootstrapTable('removeAll');

        data.instances.forEach(instance => {
            $('#section-compute-lightsail-instances-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-lightsail-domains-datatable').deferredBootstrapTable('removeAll');

        data.domains.forEach(domain => {
            $('#section-compute-lightsail-domains-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-lightsail-keypairs-datatable').deferredBootstrapTable('removeAll');

        data.keyPairs.forEach(keypair => {
            $('#section-compute-lightsail-keypairs-datatable').deferredBootstrapTable('append', [{
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
        $('#section-compute-lightsail-staticips-datatable').deferredBootstrapTable('removeAll');
        $('#section-compute-lightsail-staticipattachments-datatable').deferredBootstrapTable('removeAll');

        data.staticIps.forEach(staticip => {
            $('#section-compute-lightsail-staticips-datatable').deferredBootstrapTable('append', [{
                f2id: staticip.arn,
                f2type: 'lightsail.staticip',
                f2data: staticip,
                f2region: region,
                name: staticip.name,
                ipaddress: staticip.ipAddress
            }]);
            if (staticip.isAttached) {
                $('#section-compute-lightsail-staticipattachments-datatable').deferredBootstrapTable('append', [{
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

    await sdkcall("Lightsail", "getDisks", {
        // no params
    }, false).then(async (data) => {
        $('#section-compute-lightsail-disks-datatable').deferredBootstrapTable('removeAll');

        data.disks.forEach(disk => {
            $('#section-compute-lightsail-disks-datatable').deferredBootstrapTable('append', [{
                f2id: disk.arn,
                f2type: 'lightsail.disk',
                f2data: disk,
                f2region: region,
                name: disk.name,
                size: disk.sizeInGb + " GB"
            }]);
        });
    }).catch(() => { });

    await sdkcall("Lightsail", "getRelationalDatabases", {
        // no params
    }, false).then(async (data) => {
        $('#section-compute-lightsail-databases-datatable').deferredBootstrapTable('removeAll');

        data.relationalDatabases.forEach(database => {
            $('#section-compute-lightsail-databases-datatable').deferredBootstrapTable('append', [{
                f2id: database.arn,
                f2type: 'lightsail.database',
                f2data: database,
                f2region: region,
                name: database.name,
                engine: database.engine
            }]);
        });
    }).catch(() => { });

    unblockUI('#section-compute-lightsail-instances-datatable');
    unblockUI('#section-compute-lightsail-domains-datatable');
    unblockUI('#section-compute-lightsail-keypairs-datatable');
    unblockUI('#section-compute-lightsail-staticips-datatable');
    unblockUI('#section-compute-lightsail-staticipattachments-datatable');
    unblockUI('#section-compute-lightsail-disks-datatable');
    unblockUI('#section-compute-lightsail-databases-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "lightsail.instance") {
        reqParams.cfn['InstanceName'] = obj.data.name;
        reqParams.tf['name'] = obj.data.name;
        if (obj.data.location) {
            reqParams.cfn['AvailabilityZone'] = obj.data.location.availabilityZone;
            reqParams.tf['availability_zone'] = obj.data.location.availabilityZone;
        }
        reqParams.cfn['BlueprintId'] = obj.data.blueprintId;
        reqParams.tf['blueprint_id'] = obj.data.blueprintId;
        reqParams.cfn['BundleId'] = obj.data.bundleId;
        reqParams.tf['bundle_id'] = obj.data.bundleId;
        reqParams.tf['key_pair_name'] = obj.data.sshKeyName;
        if (obj.data.addOns) {
            reqParams.cfn['AddOns'] = [];
            obj.data.addOns.forEach(addon => {
                reqParams.cfn['AddOns'].push({
                    'AddOnType': 'AutoSnapshot',
                    'AutoSnapshotAddOnRequest': {
                        'SnapshotTimeOfDay': addon.snapshotTimeOfDay
                    }
                });
            });
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            reqParams.tf['tags'] = {};
            obj.data.tags.forEach(tag => {
                reqParams.cfn['Tags'].push({
                    'Key': tag['key'],
                    'Value': tag['value']
                });
                reqParams.tf['tags'][tag['key']] = tag['value'];
            });
        }

        /*
        TODO:
        user_data
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lightsail', obj.id, 'AWS::Lightsail::Instance'),
            'region': obj.region,
            'service': 'lightsail',
            'type': 'AWS::Lightsail::Instance',
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
        reqParams.cfn['StaticIpName'] = obj.data.name;
        reqParams.tf['name'] = obj.data.name;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lightsail', obj.id, 'AWS::Lightsail::StaticIp'),
            'region': obj.region,
            'service': 'lightsail',
            'type': 'AWS::Lightsail::StaticIp',
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
    } else if (obj.type == "lightsail.disk") {
        reqParams.cfn['DiskName'] = obj.data.name;
        if (obj.data.location) {
            reqParams.cfn['AvailabilityZone'] = obj.data.location.availabilityZone;
        }
        reqParams.cfn['SizeInGb'] = obj.data.sizeInGb;
        if (obj.data.addOns) {
            reqParams.cfn['AddOns'] = [];
            obj.data.addOns.forEach(addon => {
                reqParams.cfn['AddOns'].push({
                    'AddOnType': 'AutoSnapshot',
                    'AutoSnapshotAddOnRequest': {
                        'SnapshotTimeOfDay': addon.snapshotTimeOfDay
                    }
                });
            });
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            obj.data.tags.forEach(tag => {
                reqParams.cfn['Tags'].push({
                    'Key': tag['key'],
                    'Value': tag['value']
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lightsail', obj.id, 'AWS::Lightsail::Disk'),
            'region': obj.region,
            'service': 'lightsail',
            'type': 'AWS::Lightsail::Disk',
            'options': reqParams
        });
    } else if (obj.type == "lightsail.database") {
        reqParams.cfn['RelationalDatabaseName'] = obj.data.name;
        if (obj.data.location) {
            reqParams.cfn['AvailabilityZone'] = obj.data.location.availabilityZone;
        }
        reqParams.cfn['RelationalDatabaseBlueprintId'] = obj.data.relationalDatabaseBlueprintId;
        reqParams.cfn['RelationalDatabaseBundleId'] = obj.data.relationalDatabaseBundleId;
        reqParams.cfn['MasterDatabaseName'] = obj.data.masterDatabaseName;
        reqParams.cfn['BackupRetention'] = obj.data.backupRetentionEnabled;
        reqParams.cfn['MasterUsername'] = obj.data.masterUsername;
        reqParams.cfn['PreferredBackupWindow'] = obj.data.preferredBackupWindow;
        reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.preferredMaintenanceWindow;
        reqParams.cfn['PubliclyAccessible'] = obj.data.publiclyAccessible;
        reqParams.cfn['CaCertificateIdentifier'] = obj.data.caCertificateIdentifier;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            obj.data.tags.forEach(tag => {
                reqParams.cfn['Tags'].push({
                    'Key': tag['key'],
                    'Value': tag['value']
                });
            });
        }

        /*
        TODO:
        RelationalDatabaseParameters: 
            - RelationalDatabaseParameter
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lightsail', obj.id, 'AWS::Lightsail::Database'),
            'region': obj.region,
            'service': 'lightsail',
            'type': 'AWS::Lightsail::Database',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'DatabaseArn': obj.data.arn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
