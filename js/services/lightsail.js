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
        },
        'Alarms': {
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
                        field: 'metricname',
                        title: 'Metric Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Buckets': {
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
                        field: 'bundleid',
                        title: 'Bundle ID',
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
                        field: 'ipaddresstype',
                        title: 'IP Address Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Load Balancer TLS Certificates': {
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
                        title: 'Load Balancer Name',
                        field: 'loadbalancername',
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
                        field: 'certificatename',
                        title: 'Certificate Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Certificates': {
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
                        field: 'domainname',
                        title: 'Domain Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Containers': {
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
                        field: 'url',
                        title: 'URL',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Distributions': {
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
                        field: 'domainname',
                        title: 'Domain Name',
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
    blockUI('#section-compute-lightsail-alarms-datatable');
    blockUI('#section-compute-lightsail-buckets-datatable');
    blockUI('#section-compute-lightsail-loadbalancers-datatable');
    blockUI('#section-compute-lightsail-loadbalancertlscertificates-datatable');
    blockUI('#section-compute-lightsail-certificates-datatable');
    blockUI('#section-compute-lightsail-containers-datatable');
    blockUI('#section-compute-lightsail-distributions-datatable');

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

    await sdkcall("Lightsail", "getAlarms", {
        // no params
    }, false).then(async (data) => {
        $('#section-compute-lightsail-alarms-datatable').deferredBootstrapTable('removeAll');

        data.alarms.forEach(alarm => {
            $('#section-compute-lightsail-alarms-datatable').deferredBootstrapTable('append', [{
                f2id: alarm.arn,
                f2type: 'lightsail.alarm',
                f2data: alarm,
                f2region: region,
                name: alarm.name,
                metricname: alarm.metricName
            }]);
        });
    }).catch(() => { });

    await sdkcall("Lightsail", "getBuckets", {
        // no params
    }, false).then(async (data) => {
        $('#section-compute-lightsail-buckets-datatable').deferredBootstrapTable('removeAll');

        data.buckets.forEach(bucket => {
            $('#section-compute-lightsail-buckets-datatable').deferredBootstrapTable('append', [{
                f2id: bucket.arn,
                f2type: 'lightsail.bucket',
                f2data: bucket,
                f2region: region,
                name: bucket.name,
                bundleid: bucket.bundleId
            }]);
        });
    }).catch(() => { });

    await sdkcall("Lightsail", "getLoadBalancers", {
        // no params
    }, false).then(async (data) => {
        $('#section-compute-lightsail-loadbalancers-datatable').deferredBootstrapTable('removeAll');
        $('#section-compute-lightsail-loadbalancertlscertificates-datatable').deferredBootstrapTable('removeAll');

        data.loadBalancers.forEach(async (loadbalancer) => {
            $('#section-compute-lightsail-loadbalancers-datatable').deferredBootstrapTable('append', [{
                f2id: loadbalancer.arn,
                f2type: 'lightsail.loadbalancer',
                f2data: loadbalancer,
                f2region: region,
                name: loadbalancer.name,
                ipaddresstype: loadbalancer.ipAddressType
            }]);

            await sdkcall("Lightsail", "getLoadBalancerTlsCertificates", {
                loadBalancerName: loadbalancer.name
            }, false).then(async (data) => {
                data.tlsCertificates.forEach(tlscertificate => {
                    $('#section-compute-lightsail-loadbalancertlscertificates-datatable').deferredBootstrapTable('append', [{
                        f2id: tlscertificate.arn,
                        f2type: 'lightsail.loadbalancertlscertificate',
                        f2data: tlscertificate,
                        f2region: region,
                        loadbalancername: tlscertificate.loadBalancerName,
                        certificatename: tlscertificate.name
                    }]);
                });
            }).catch(() => { });
        });
    }).catch(() => { });

    await sdkcall("Lightsail", "getCertificates", {
        // no params
    }, false).then(async (data) => {
        $('#section-compute-lightsail-certificates-datatable').deferredBootstrapTable('removeAll');

        data.certificates.forEach(certificate => {
            $('#section-compute-lightsail-certificates-datatable').deferredBootstrapTable('append', [{
                f2id: certificate.certificateArn,
                f2type: 'lightsail.certificate',
                f2data: certificate,
                f2region: region,
                name: certificate.certificateName,
                domainname: certificate.domainName
            }]);
        });
    }).catch(() => { });

    await sdkcall("Lightsail", "getContainerServices", {
        // no params
    }, false).then(async (data) => {
        $('#section-compute-lightsail-containers-datatable').deferredBootstrapTable('removeAll');

        data.containerServices.forEach(containerservice => {
            $('#section-compute-lightsail-containers-datatable').deferredBootstrapTable('append', [{
                f2id: containerservice.arn,
                f2type: 'lightsail.container',
                f2data: containerservice,
                f2region: region,
                servicename: containerservice.containerServiceName,
                url: containerservice.url
            }]);
        });
    }).catch(() => { });

    await sdkcall("Lightsail", "getDistributions", {
        // no params
    }, false).then(async (data) => {
        $('#section-compute-lightsail-distributions-datatable').deferredBootstrapTable('removeAll');

        data.distributions.forEach(distribution => {
            $('#section-compute-lightsail-distributions-datatable').deferredBootstrapTable('append', [{
                f2id: distribution.arn,
                f2type: 'lightsail.distribution',
                f2data: distribution,
                f2region: region,
                name: distribution.name,
                domainname: distribution.domainName
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
    unblockUI('#section-compute-lightsail-alarms-datatable');
    unblockUI('#section-compute-lightsail-buckets-datatable');
    unblockUI('#section-compute-lightsail-loadbalancers-datatable');
    unblockUI('#section-compute-lightsail-loadbalancertlscertificates-datatable');
    unblockUI('#section-compute-lightsail-certificates-datatable');
    unblockUI('#section-compute-lightsail-containers-datatable');
    unblockUI('#section-compute-lightsail-distributions-datatable');
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
            reqParams.tf['tags'] = new Set();
            obj.data.tags.forEach(tag => {
                if (!tag.key.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': tag['key'],
                        'Value': tag['value']
                    });
                    reqParams.tf['tags'][tag['key']] = tag['value'];
                }
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
                if (!tag.key.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': tag['key'],
                        'Value': tag['value']
                    });
                }
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
                if (!tag.key.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': tag['key'],
                        'Value': tag['value']
                    });
                }
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
    } else if (obj.type == "lightsail.alarm") {
        reqParams.cfn['AlarmName'] = obj.data.name;
        reqParams.cfn['MonitoredResourceName'] = obj.data.monitoredResourceInfo.name;
        reqParams.cfn['ComparisonOperator'] = obj.data.comparisonOperator;
        reqParams.cfn['EvaluationPeriods'] = obj.data.evaluationPeriods;
        reqParams.cfn['Threshold'] = obj.data.threshold;
        reqParams.cfn['DatapointsToAlarm'] = obj.data.datapointsToAlarm;
        reqParams.cfn['TreatMissingData'] = obj.data.treatMissingData;
        reqParams.cfn['MetricName'] = obj.data.metricName;
        reqParams.cfn['ContactProtocols'] = obj.data.contactProtocols;
        reqParams.cfn['NotificationEnabled'] = obj.data.notificationEnabled;
        reqParams.cfn['NotificationTriggers'] = obj.data.notificationTriggers;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lightsail', obj.id, 'AWS::Lightsail::Alarm'),
            'region': obj.region,
            'service': 'lightsail',
            'type': 'AWS::Lightsail::Alarm',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'AlarmArn': obj.data.arn
                }
            }
        });
    } else if (obj.type == "lightsail.bucket") {
        reqParams.cfn['BucketName'] = obj.data.name;
        reqParams.cfn['BundleId'] = obj.data.bundleId;
        if (obj.data.accessRules) {
            reqParams.cfn['AccessRules'] = {
                'GetObject': obj.data.accessRules.getObject,
                'AllowPublicOverrides': obj.data.accessRules.allowPublicOverrides
            };
        }
        reqParams.cfn['ObjectVersioning'] = (obj.data.objectVersioning == "Enabled");
        reqParams.cfn['ReadOnlyAccessAccounts'] = obj.data.readonlyAccessAccounts;
        if (obj.data.resourcesReceivingAccess) {
            reqParams.cfn['ResourcesReceivingAccess'] = [];
            obj.data.resourcesReceivingAccess.forEach(item => {
                reqParams.cfn['ResourcesReceivingAccess'].push(item.name);
            });
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            obj.data.tags.forEach(tag => {
                if (!tag.key.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': tag['key'],
                        'Value': tag['value']
                    });
                }
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lightsail', obj.id, 'AWS::Lightsail::Bucket'),
            'region': obj.region,
            'service': 'lightsail',
            'type': 'AWS::Lightsail::Bucket',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'BucketArn': obj.data.arn,
                    'Url': obj.data.url
                }
            }
        });
    } else if (obj.type == "lightsail.loadbalancer") {
        reqParams.cfn['LoadBalancerName'] = obj.data.name;
        reqParams.cfn['HealthCheckPath'] = obj.data.healthCheckPath;
        reqParams.cfn['InstancePort'] = obj.data.instancePort;
        reqParams.cfn['IpAddressType'] = obj.data.ipAddressType;
        if (obj.data.instanceHealthSummary) {
            reqParams.cfn['AttachedInstances'] = [];
            obj.data.instanceHealthSummary.forEach(instance => {
                reqParams.cfn['AttachedInstances'].push(instance.instanceName);
            });
        }
        if (obj.data.configurationOptions['SessionStickinessEnabled']) {
            reqParams.cfn['SessionStickinessEnabled'] = (obj.data.configurationOptions['SessionStickinessEnabled'].toLowerCase() == "true" || obj.data.configurationOptions['SessionStickinessEnabled'].toLowerCase() == "enabled");
        }
        if (obj.data.configurationOptions['SessionStickiness_LB_CookieDurationSeconds']) {
            reqParams.cfn['SessionStickinessLBCookieDurationSeconds'] = obj.data.configurationOptions['SessionStickiness_LB_CookieDurationSeconds'];
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            obj.data.tags.forEach(tag => {
                if (!tag.key.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': tag['key'],
                        'Value': tag['value']
                    });
                }
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lightsail', obj.id, 'AWS::Lightsail::LoadBalancer'),
            'region': obj.region,
            'service': 'lightsail',
            'type': 'AWS::Lightsail::LoadBalancer',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'LoadBalancerArn': obj.data.arn
                }
            }
        });
    } else if (obj.type == "lightsail.loadbalancertlscertificate") {
        reqParams.cfn['CertificateName'] = obj.data.name;
        reqParams.cfn['LoadBalancerName'] = obj.data.loadBalancerName;
        reqParams.cfn['IsAttached'] = obj.data.isAttached;
        reqParams.cfn['CertificateDomainName'] = obj.data.domainName;
        reqParams.cfn['CertificateAlternativeNames'] = obj.data.subjectAlternativeNames;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lightsail', obj.id, 'AWS::Lightsail::LoadBalancerTlsCertificate'),
            'region': obj.region,
            'service': 'lightsail',
            'type': 'AWS::Lightsail::LoadBalancerTlsCertificate',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'LoadBalancerTlsCertificateArn': obj.data.arn
                }
            }
        });
    } else if (obj.type == "lightsail.certificate") {
        reqParams.cfn['CertificateName'] = obj.data.certificateName;
        reqParams.cfn['DomainName'] = obj.data.domainName;
        reqParams.cfn['SubjectAlternativeNames'] = obj.data.certificateDetail.subjectAlternativeNames;
        if (obj.data.certificateDetail.tags) {
            reqParams.cfn['Tags'] = [];
            obj.data.certificateDetail.tags.forEach(tag => {
                if (!tag.key.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': tag['key'],
                        'Value': tag['value']
                    });
                }
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lightsail', obj.id, 'AWS::Lightsail::Certificate'),
            'region': obj.region,
            'service': 'lightsail',
            'type': 'AWS::Lightsail::Certificate',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'CertificateArn': obj.data.certificateArn
                }
            }
        });
    } else if (obj.type == "lightsail.container") {
        reqParams.cfn['ServiceName'] = obj.data.containerServiceName;
        reqParams.cfn['Power'] = obj.data.power;
        reqParams.cfn['Scale'] = obj.data.scale;
        reqParams.cfn['IsDisabled'] = (obj.data.state == "DISABLED");
        if (obj.data.publicDomainNames) {
            reqParams.cfn['PublicDomainNames'] = [];
            Object.keys(obj.data.publicDomainNames).forEach(k => {
                reqParams.cfn['PublicDomainNames'].push({
                    'CertificateName': k,
                    'DomainNames': obj.data.publicDomainNames[k]
                });
            });
        }
        if (obj.data.currentDeployment && obj.data.currentDeployment.containers) {
            reqParams.cfn['ContainerServiceDeployment'] = {
                'Containers': []
            };
            Object.keys(obj.data.currentDeployment.containers).forEach(k => {
                var environment = null;
                if (obj.data.currentDeployment.containers[k].environment) {
                    environment = [];
                    Object.keys(obj.data.currentDeployment.containers[k].environment).forEach(k => {
                        environment.push({
                            'Variable': k,
                            'Value': obj.data.currentDeployment.containers[k].environment[k]
                        });
                    });
                }
                var ports = null;
                if (obj.data.currentDeployment.containers[k].ports) {
                    ports = [];
                    Object.keys(obj.data.currentDeployment.containers[k].ports).forEach(k => {
                        ports.push({
                            'Port': k,
                            'Protocol': obj.data.currentDeployment.containers[k].ports[k]
                        });
                    });
                }
                reqParams.cfn['ContainerServiceDeployment']['Containers'].push({
                    'ContainerName': k,
                    'Image': obj.data.currentDeployment.containers[k].image,
                    'Command': obj.data.currentDeployment.containers[k].command,
                    'Environment': environment,
                    'Ports': ports
                });
            });
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            obj.data.tags.forEach(tag => {
                if (!tag.key.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': tag['key'],
                        'Value': tag['value']
                    });
                }
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lightsail', obj.id, 'AWS::Lightsail::Container'),
            'region': obj.region,
            'service': 'lightsail',
            'type': 'AWS::Lightsail::Container',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'ContainerArn': obj.data.arn,
                    'Url': obj.data.url
                }
            }
        });
    } else if (obj.type == "lightsail.distribution") {
        reqParams.cfn['DistributionName'] = obj.data.name;
        reqParams.cfn['IsEnabled'] = obj.data.isEnabled;
        reqParams.cfn['BundleId'] = obj.data.bundleId;
        reqParams.cfn['CertificateName'] = obj.data.certificateName;
        if (obj.data.origin) {
            reqParams.cfn['Origin'] = {
                'Name': obj.data.origin.name,
                'RegionName': obj.data.origin.regionName,
                'ProtocolPolicy': obj.data.origin.protocolPolicy
            };
        }
        if (obj.data.defaultCacheBehavior) {
            reqParams.cfn['DefaultCacheBehavior'] = {
                'Behavior': obj.data.defaultCacheBehavior.behavior
            };
        }
        if (obj.data.cacheBehaviorSettings) {
            var forwardedcookies = null;
            if (obj.data.cacheBehaviorSettings.forwardedCookies) {
                forwardedcookies = {
                    'Option': obj.data.cacheBehaviorSettings.forwardedCookies.option,
                    'CookiesAllowList': obj.data.cacheBehaviorSettings.forwardedCookies.cookiesAllowList
                };
            }
            var forwardedheaders = null;
            if (obj.data.cacheBehaviorSettings.forwardedHeaders) {
                forwardedheaders = {
                    'Option': obj.data.cacheBehaviorSettings.forwardedHeaders.option,
                    'HeadersAllowList': obj.data.cacheBehaviorSettings.forwardedHeaders.headersAllowList
                };
            }
            var forwardedquerystrings = null;
            if (obj.data.cacheBehaviorSettings.forwardedQueryStrings) {
                forwardedquerystrings = {
                    'Option': obj.data.cacheBehaviorSettings.forwardedQueryStrings.option,
                    'QueryStringsAllowList': obj.data.cacheBehaviorSettings.forwardedQueryStrings.queryStringsAllowList
                };
            }
            reqParams.cfn['CacheBehaviorSettings'] = {
                'DefaultTTL': obj.data.cacheBehaviorSettings.defaultTTL,
                'MinimumTTL': obj.data.cacheBehaviorSettings.minimumTTL,
                'MaximumTTL': obj.data.cacheBehaviorSettings.maximumTTL,
                'AllowedHTTPMethods': obj.data.cacheBehaviorSettings.allowedHTTPMethods,
                'CachedHTTPMethods': obj.data.cacheBehaviorSettings.cachedHTTPMethods,
                'ForwardedCookies': forwardedcookies,
                'ForwardedHeaders': forwardedheaders,
                'ForwardedQueryStrings': forwardedquerystrings
            };
        }
        if (obj.data.cacheBehaviors) {
            reqParams.cfn['CacheBehaviors'] = [];
            obj.data.cacheBehaviors.forEach(cachebehavior => {
                reqParams.cfn['CacheBehaviors'].push({
                    'Path': cachebehavior.path,
                    'Behavior': cachebehavior.behavior
                });
            });
        }
        reqParams.cfn['IpAddressType'] = obj.data.ipAddressType;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            obj.data.tags.forEach(tag => {
                if (!tag.key.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': tag['key'],
                        'Value': tag['value']
                    });
                }
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lightsail', obj.id, 'AWS::Lightsail::Distribution'),
            'region': obj.region,
            'service': 'lightsail',
            'type': 'AWS::Lightsail::Distribution',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'DistributionArn': obj.data.arn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
