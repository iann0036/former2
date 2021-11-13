/* ========================================================================== */
// Route 53
/* ========================================================================== */

sections.push({
    'category': 'Networking &amp; Content Delivery',
    'service': 'Route 53',
    'resourcetypes': {
        'Hosted Zones': {
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
                        title: 'Hosted Zone ID',
                        field: 'hostedzoneid',
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
                    },
                    {
                        field: 'recordscount',
                        title: 'Records Count',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Records': {
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
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'ttl',
                        title: 'TTL',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Health Checks': {
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
                        field: 'target',
                        title: 'Target',
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
        'Resolver Endpoints': {
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
                        field: 'name',
                        title: 'Name',
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
                        field: 'ipaddresscount',
                        title: 'IP Address Count',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'hostvpcid',
                        title: 'VPC ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Resolver Rules': {
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
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'domainname',
                        title: 'Domain Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'resolverendpointid',
                        title: 'Resolver Endpoint ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Resolver Rule Associations': {
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
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'resolverruleid',
                        title: 'Resolver Rule ID',
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
        'Resolver Query Logging Configs': {
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
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Resolver Query Logging Config Associations': {
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
                        field: 'resourceid',
                        title: 'Resource ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'resolverquerylogconfigid',
                        title: 'Resolver Query Log Config ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Key Signing Keys': {
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
                        field: 'hostedzoneid',
                        title: 'Hosted Zone ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'DNSSEC': {
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
                        title: 'Hosted Zone ID',
                        field: 'hostedzoneid',
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
        'Resolver DNSSEC Config': {
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
                    }
                ],
                [
                    // nothing
                ]
            ]
        },
        'Resolver Config': {
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
                        field: 'autodefinedreverse',
                        title: 'Autodefined Reverse DNS Lookup',
                        sortable: true,
                        editable: true,
                        footerFormatter: tickFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Resolver Firewall Domain Lists': {
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
        'Resolver Firewall Rule Groups': {
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
        'Resolver Firewall Rule Group Associations': {
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
        'Recovery Control Clusters': {
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
        'Recovery Control Control Panels': {
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
                    // nothing
                ]
            ]
        },
        'Recovery Control Routing Controls': {
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
                    // nothing
                ]
            ]
        },
        'Recovery Control Safety Rules': {
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
                    // nothing
                ]
            ]
        },
        'Recovery Readiness Recovery Groups': {
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
                    // nothing
                ]
            ]
        },
        'Recovery Readiness Cells': {
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
                    // nothing
                ]
            ]
        },
        'Recovery Readiness Resource Sets': {
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
                    // nothing
                ]
            ]
        },
        'Recovery Readiness Checks': {
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
                    // nothing
                ]
            ]
        }
    }
});

async function updateDatatableNetworkingAndContentDeliveryRoute53() {
    blockUI('#section-networkingandcontentdelivery-route53-hostedzones-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-records-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-healthchecks-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-resolverendpoints-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-resolverrules-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-resolverruleassociations-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-resolverqueryloggingconfigs-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-resolverqueryloggingconfigassociations-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-keysigningkeys-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-dnssec-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-resolverdnssecconfig-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-resolverconfig-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-resolverfirewalldomainlists-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-resolverfirewallrulegroups-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-resolverfirewallrulegroupassociations-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-recoverycontrolclusters-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-recoverycontrolcontrolpanels-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-recoverycontrolroutingcontrols-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-recoverycontrolsafetyrules-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-recoveryreadinessrecoverygroups-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-recoveryreadinesscells-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-recoveryreadinessresourcesets-datatable');
    blockUI('#section-networkingandcontentdelivery-route53-recoveryreadinesschecks-datatable');

    await sdkcall("Route53", "listHostedZones", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-route53-hostedzones-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-route53-records-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-route53-dnssec-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-route53-keysigningkeys-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.HostedZones.map(async (hostedZone) => {
            await sdkcall("Route53", "getHostedZone", {
                Id: hostedZone.Id.split("/").pop()
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags("arn:aws:route53:::hostedzone/" + hostedZone.Id.split("/").pop());

                $('#section-networkingandcontentdelivery-route53-hostedzones-datatable').deferredBootstrapTable('append', [{
                    f2id: hostedZone.Id.split("/").pop(),
                    f2type: 'route53.hostedzone',
                    f2data: data,
                    f2region: region,
                    hostedzoneid: hostedZone.Id.split("/").pop(),
                    domainname: data.HostedZone.Name,
                    recordscount: data.HostedZone.ResourceRecordSetCount
                }]);
            });

            await sdkcall("Route53", "listResourceRecordSets", {
                HostedZoneId: hostedZone.Id.split("/").pop()
            }, true).then((data) => {
                data.ResourceRecordSets.forEach(resourceRecordSet => {
                    resourceRecordSet['HostedZoneId'] = hostedZone.Id.split("/").pop();

                    $('#section-networkingandcontentdelivery-route53-records-datatable').deferredBootstrapTable('append', [{
                        f2id: resourceRecordSet.Name + " " + resourceRecordSet.Type,
                        f2type: 'route53.record',
                        f2data: resourceRecordSet,
                        f2region: region,
                        name: resourceRecordSet.Name,
                        type: resourceRecordSet.Type,
                        ttl: resourceRecordSet.TTL
                    }]);
                });
            });

            return sdkcall("Route53", "getDNSSEC", {
                HostedZoneId: hostedZone.Id.split("/").pop()
            }, false).then(async (data) => {
                data['HostedZoneId'] = hostedZone.Id.split("/").pop();

                if (data.Status && data.Status.ServeSignature == "SIGNING") {
                    $('#section-networkingandcontentdelivery-route53-dnssec-datatable').deferredBootstrapTable('append', [{
                        f2id: hostedZone.Id.split("/").pop() + " DNSSEC",
                        f2type: 'route53.dnssec',
                        f2data: data,
                        f2region: region,
                        hostedzoneid: hostedZone.Id.split("/").pop()
                    }]);
                }

                if (data.KeySigningKeys) {
                    data.KeySigningKeys.forEach(keysigningkey => {
                        keysigningkey['HostedZoneId'] = hostedZone.Id.split("/").pop();

                        $('#section-networkingandcontentdelivery-route53-keysigningkeys-datatable').deferredBootstrapTable('append', [{
                            f2id: hostedZone.Id.split("/").pop() + " Key Signing Key " + keysigningkey.Name,
                            f2type: 'route53.keysigningkey',
                            f2data: keysigningkey,
                            f2region: region,
                            name: keysigningkey.Name,
                            hostedzoneid: hostedZone.Id.split("/").pop()
                        }]);
                    });
                }
            }).catch(() => { });
        }));

        unblockUI('#section-networkingandcontentdelivery-route53-hostedzones-datatable');
        unblockUI('#section-networkingandcontentdelivery-route53-records-datatable');
        unblockUI('#section-networkingandcontentdelivery-route53-dnssec-datatable');
        unblockUI('#section-networkingandcontentdelivery-route53-keysigningkeys-datatable');
    });

    await sdkcall("Route53", "listHealthChecks", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-route53-healthchecks-datatable').deferredBootstrapTable('removeAll');

        data.HealthChecks.forEach(healthCheck => {
            $('#section-networkingandcontentdelivery-route53-healthchecks-datatable').deferredBootstrapTable('append', [{
                f2id: healthCheck.Id,
                f2type: 'route53.healthcheck',
                f2data: healthCheck,
                f2region: region,
                id: healthCheck.Id,
                target: healthCheck.HealthCheckConfig.IPAddress || healthCheck.HealthCheckConfig.FullyQualifiedDomainName,
                port: healthCheck.HealthCheckConfig.Port,
                type: healthCheck.HealthCheckConfig.Type
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-route53-healthchecks-datatable');
    });

    await sdkcall("Route53Resolver", "listResolverEndpoints", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-route53-resolverendpoints-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-route53-resolverdnssecconfig-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-route53-resolverconfig-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ResolverEndpoints.map(async (resolverEndpoint) => {
            return sdkcall("Route53Resolver", "getResolverEndpoint", {
                ResolverEndpointId: resolverEndpoint.Id
            }, true).then(async (data) => {
                await sdkcall("Route53Resolver", "listResolverEndpointIpAddresses", {
                    ResolverEndpointId: resolverEndpoint.Id
                }, true).then(async (ipaddressdata) => {
                    data.ResolverEndpoint['IpAddresses'] = ipaddressdata.IpAddresses;
                }).catch(() => { });

                $('#section-networkingandcontentdelivery-route53-resolverendpoints-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ResolverEndpoint.Arn,
                    f2type: 'route53.resolverendpoint',
                    f2data: data.ResolverEndpoint,
                    f2region: region,
                    id: data.ResolverEndpoint.Id,
                    name: data.ResolverEndpoint.Name,
                    direction: data.ResolverEndpoint.Direction,
                    ipaddresscount: data.ResolverEndpoint.IpAddressCount,
                    hostvpcid: data.ResolverEndpoint.HostVPCId
                }]);

                await sdkcall("Route53Resolver", "getResolverDnssecConfig", {
                    ResourceId: data.ResolverEndpoint.HostVPCId
                }, true).then((data) => {
                    if (data.ResolverDNSSECConfig && data.ResolverDNSSECConfig.ValidationStatus == "ENABLED") {
                        $('#section-networkingandcontentdelivery-route53-resolverdnssecconfig-datatable').deferredBootstrapTable('append', [{
                            f2id: data.ResolverDNSSECConfig.Id,
                            f2type: 'route53.resolverdnssecconfig',
                            f2data: data.ResolverDNSSECConfig,
                            f2region: region,
                            resourceid: data.ResolverDNSSECConfig.ResourceId
                        }]);
                    }
                });

                await sdkcall("Route53Resolver", "getResolverConfig", {
                    ResourceId: data.ResolverEndpoint.HostVPCId
                }, true).then((data) => {
                    $('#section-networkingandcontentdelivery-route53-resolverconfig-datatable').deferredBootstrapTable('append', [{
                        f2id: data.ResolverConfig.Id,
                        f2type: 'route53.resolverconfig',
                        f2data: data.ResolverConfig,
                        f2region: region,
                        resourceid: data.ResolverConfig.ResourceId,
                        autodefinedreverse: (data.ResolverConfig.AutodefinedReverse == "ENABLED")
                    }]);
                });
            });
        }));

        unblockUI('#section-networkingandcontentdelivery-route53-resolverendpoints-datatable');
        unblockUI('#section-networkingandcontentdelivery-route53-resolverdnssecconfig-datatable');
        unblockUI('#section-networkingandcontentdelivery-route53-resolverconfig-datatable');
    });

    await sdkcall("Route53Resolver", "listResolverRules", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-route53-resolverrules-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ResolverRules.map(resolverRule => {
            return sdkcall("Route53Resolver", "getResolverRule", {
                ResolverRuleId: resolverRule.Id
            }, true).then((data) => {
                if (!data.ResolverRule.Arn.includes("::autodefined-rule/")) {
                    $('#section-networkingandcontentdelivery-route53-resolverrules-datatable').deferredBootstrapTable('append', [{
                        f2id: data.ResolverRule.Arn,
                        f2type: 'route53.resolverrule',
                        f2data: data.ResolverRule,
                        f2region: region,
                        id: data.ResolverRule.Id,
                        domainname: data.ResolverRule.DomainName,
                        name: data.ResolverRule.Name,
                        resolverendpointid: data.ResolverRule.ResolverEndpointId
                    }]);
                }
            });
        }));

        unblockUI('#section-networkingandcontentdelivery-route53-resolverrules-datatable');
    });

    await sdkcall("Route53Resolver", "listResolverRuleAssociations", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-route53-resolverruleassociations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ResolverRuleAssociations.map(resolverRuleAssociation => {
            return sdkcall("Route53Resolver", "getResolverRuleAssociation", {
                ResolverRuleAssociationId: resolverRuleAssociation.Id
            }, true).then((data) => {
                if (data.ResolverRuleAssociation.ResolverRuleId != "rslvr-autodefined-rr-internet-resolver") {
                    $('#section-networkingandcontentdelivery-route53-resolverruleassociations-datatable').deferredBootstrapTable('append', [{
                        f2id: data.ResolverRuleAssociation.Id,
                        f2type: 'route53.resolverruleassociation',
                        f2data: data.ResolverRuleAssociation,
                        f2region: region,
                        id: data.ResolverRuleAssociation.Id,
                        resolverruleid: data.ResolverRuleAssociation.ResolverRuleId,
                        name: data.ResolverRuleAssociation.Name,
                        vpcid: data.ResolverRuleAssociation.VPCId
                    }]);
                }
            });
        }));

        unblockUI('#section-networkingandcontentdelivery-route53-resolverruleassociations-datatable');
    });

    await sdkcall("Route53Resolver", "listResolverQueryLogConfigs", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-route53-resolverqueryloggingconfigs-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ResolverQueryLogConfigs.map(async (resolverQueryLogConfig) => {
            return sdkcall("Route53Resolver", "getResolverQueryLogConfig", {
                ResolverQueryLogConfigId: resolverQueryLogConfig.Id
            }, true).then(async (data) => {
                $('#section-networkingandcontentdelivery-route53-resolverqueryloggingconfigs-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ResolverQueryLogConfig.Id,
                    f2type: 'route53.resolverqueryloggingconfig',
                    f2data: data.ResolverQueryLogConfig,
                    f2region: region,
                    id: data.ResolverQueryLogConfig.Id,
                    name: data.ResolverQueryLogConfig.Name
                }]);
            });
        }));

        unblockUI('#section-networkingandcontentdelivery-route53-resolverqueryloggingconfigs-datatable');
    }).catch(() => { });

    await sdkcall("Route53Resolver", "listResolverQueryLogConfigAssociations", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-route53-resolverqueryloggingconfigassociations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ResolverQueryLogConfigAssociations.map(async (resolverQueryLogConfigAssociation) => {
            return sdkcall("Route53Resolver", "getResolverQueryLogConfigAssociation", {
                ResolverQueryLogConfigAssociationId: resolverQueryLogConfigAssociation.Id
            }, true).then(async (data) => {
                $('#section-networkingandcontentdelivery-route53-resolverqueryloggingconfigassociations-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ResolverQueryLogConfigAssociation.Id,
                    f2type: 'route53.resolverqueryloggingconfigassociation',
                    f2data: data.ResolverQueryLogConfigAssociation,
                    f2region: region,
                    id: data.ResolverQueryLogConfigAssociation.Id,
                    resolverquerylogconfigid: data.ResolverQueryLogConfigAssociation.ResolverQueryLogConfigId,
                    resourceid: data.ResolverQueryLogConfigAssociation.ResourceId
                }]);
            });
        }));

        unblockUI('#section-networkingandcontentdelivery-route53-resolverqueryloggingconfigassociations-datatable');
    }).catch(() => { });

    await sdkcall("Route53Resolver", "listFirewallDomainLists", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-route53-resolverfirewalldomainlists-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.FirewallDomainLists.map(async (firewalldomainlist) => {
            return sdkcall("Route53Resolver", "getFirewallDomainList", {
                FirewallDomainListId: firewalldomainlist.Id
            }, true).then(async (data) => {
                await sdkcall("Route53Resolver", "listFirewallDomains", {
                    FirewallDomainListId: firewalldomainlist.Id
                }, true).then(async (domainsdata) => {
                    data.FirewallDomainList['Domains'] = domainsdata.Domains;
                });

                $('#section-networkingandcontentdelivery-route53-resolverfirewalldomainlists-datatable').deferredBootstrapTable('append', [{
                    f2id: data.FirewallDomainList.Id,
                    f2type: 'route53.resolverfirewalldomainlist',
                    f2data: data.FirewallDomainList,
                    f2region: region,
                    name: data.FirewallDomainList.Name
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("Route53Resolver", "listFirewallRuleGroups", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-route53-resolverfirewallrulegroups-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-route53-resolverfirewallrulegroupassociations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.FirewallRuleGroups.map(async (firewallrulegroup) => {
            await sdkcall("Route53Resolver", "getFirewallRuleGroup", {
                FirewallRuleGroupId: firewallrulegroup.Id
            }, true).then(async (data) => {
                await sdkcall("Route53Resolver", "listFirewallRules", {
                    FirewallRuleGroupId: firewallrulegroup.Id
                }, true).then(async (rulesdata) => {
                    data.FirewallRuleGroup['FirewallRules'] = rulesdata.FirewallRules;
                });

                $('#section-networkingandcontentdelivery-route53-resolverfirewallrulegroups-datatable').deferredBootstrapTable('append', [{
                    f2id: data.FirewallRuleGroup.Id,
                    f2type: 'route53.resolverfirewallrulegroup',
                    f2data: data.FirewallRuleGroup,
                    f2region: region,
                    name: data.FirewallRuleGroup.Name
                }]);
            });

            return sdkcall("Route53Resolver", "listFirewallRuleGroupAssociations", {
                FirewallRuleGroupId: firewallrulegroup.Id
            }, true).then(async (data) => {
                await Promise.all(data.FirewallRuleGroupAssociations.map(async (firewallrulegroupassociation) => {
                    return sdkcall("Route53Resolver", "getFirewallRuleGroupAssociation", {
                        FirewallRuleGroupAssociationId: firewallrulegroupassociation.Id
                    }, true).then(async (data) => {
                        $('#section-networkingandcontentdelivery-route53-resolverfirewallrulegroupassociations-datatable').deferredBootstrapTable('append', [{
                            f2id: data.FirewallRuleGroupAssociation.Id,
                            f2type: 'route53.resolverfirewallrulegroupassociation',
                            f2data: data.FirewallRuleGroupAssociation,
                            f2region: region,
                            name: data.FirewallRuleGroupAssociation.Name
                        }]);
                    });
                }));
            }).catch(() => { });
        }));
    }).catch(() => { });

    await sdkcall("Route53RecoveryControlConfig", "listClusters", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-route53-recoverycontrolclusters-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-route53-recoverycontrolcontrolpanels-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-route53-recoverycontrolroutingcontrols-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-route53-recoverycontrolsafetyrules-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Clusters.map(async (cluster) => {
            await sdkcall("Route53RecoveryControlConfig", "describeCluster", {
                ClusterArn: cluster.ClusterArn
            }, true).then(async (data) => {
                $('#section-networkingandcontentdelivery-route53-recoverycontrolclusters-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Cluster.ClusterArn,
                    f2type: 'route53.recoverycontrolcluster',
                    f2data: data.Cluster,
                    f2region: region,
                    name: data.Cluster.Name
                }]);
            });

            return sdkcall("Route53RecoveryControlConfig", "listControlPanels", {
                ClusterArn: cluster.ClusterArn
            }, true).then(async (data) => {
                await Promise.all(data.ControlPanels.map(async (controlpanel) => {
                    await sdkcall("Route53RecoveryControlConfig", "describeControlPanel", {
                        ControlPanelArn: controlpanel.ControlPanelArn
                    }, true).then(async (data) => {
                        $('#section-networkingandcontentdelivery-route53-recoverycontrolcontrolpanels-datatable').deferredBootstrapTable('append', [{
                            f2id: data.ControlPanel.ControlPanelArn,
                            f2type: 'route53.recoverycontrolcontrolpanel',
                            f2data: data.ControlPanel,
                            f2region: region,
                            name: data.ControlPanel.Name
                        }]);
                    });

                    await sdkcall("Route53RecoveryControlConfig", "listRoutingControls", {
                        ControlPanelArn: controlpanel.ControlPanelArn
                    }, true).then(async (data) => {
                        await Promise.all(data.RoutingControls.map(async (routingcontrol) => {
                            return sdkcall("Route53RecoveryControlConfig", "describeRoutingControl", {
                                RoutingControlArn: routingcontrol.RoutingControlArn
                            }, true).then(async (data) => {
                                $('#section-networkingandcontentdelivery-route53-recoverycontrolroutingcontrols-datatable').deferredBootstrapTable('append', [{
                                    f2id: data.RoutingControl.ControlPanelArn,
                                    f2type: 'route53.recoverycontrolroutingcontrol',
                                    f2data: data.RoutingControl,
                                    f2region: region,
                                    name: data.RoutingControl.Name
                                }]);
                            });
                        }));
                    }).catch(() => { });

                    return sdkcall("Route53RecoveryControlConfig", "listSafetyRules", {
                        ControlPanelArn: controlpanel.ControlPanelArn
                    }, true).then(async (data) => {
                        await Promise.all(data.SafetyRules.map(async (safetyrule) => {
                            return sdkcall("Route53RecoveryControlConfig", "describeSafetyRule", {
                                SafetyRuleArn: safetyrule.SafetyRuleArn
                            }, true).then(async (data) => {
                                $('#section-networkingandcontentdelivery-route53-recoverycontrolroutingcontrols-datatable').deferredBootstrapTable('append', [{
                                    f2id: (data.AssertionRule ? data.AssertionRule.SafetyRuleArn : data.GatingRule.SafetyRuleArn),
                                    f2type: 'route53.recoverycontrolroutingcontrol',
                                    f2data: data.RoutingControl,
                                    f2region: region,
                                    name: (data.AssertionRule ? data.AssertionRule.Name : data.GatingRule.Name)
                                }]);
                            });
                        }));
                    }).catch(() => { });
                }));
            }).catch(() => { });
        }));
    }).catch(() => { });

    await sdkcall("Route53RecoveryReadiness", "listRecoveryGroups", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-route53-recoveryreadinessrecoverygroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.RecoveryGroups.map(async (recoverygroup) => {
            return sdkcall("Route53RecoveryReadiness", "getRecoveryGroup", {
                RecoveryGroupName: recoverygroup.RecoveryGroupName
            }, true).then(async (data) => {
                $('#section-networkingandcontentdelivery-route53-recoveryreadinessrecoverygroups-datatable').deferredBootstrapTable('append', [{
                    f2id: data.RecoveryGroupArn,
                    f2type: 'route53.recoveryreadinessrecoverygroup',
                    f2data: data,
                    f2region: region,
                    name: data.RecoveryGroupName
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("Route53RecoveryReadiness", "listCells", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-route53-recoveryreadinesscells-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Cells.map(async (cell) => {
            return sdkcall("Route53RecoveryReadiness", "getCell", {
                CellName: cell.CellName
            }, true).then(async (data) => {
                $('#section-networkingandcontentdelivery-route53-recoveryreadinesscells-datatable').deferredBootstrapTable('append', [{
                    f2id: data.CellArn,
                    f2type: 'route53.recoveryreadinesscell',
                    f2data: data,
                    f2region: region,
                    name: data.CellName
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("Route53RecoveryReadiness", "listResourceSets", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-route53-recoveryreadinessresourcesets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ResourceSets.map(async (resourceset) => {
            return sdkcall("Route53RecoveryReadiness", "getResourceSet", {
                ResourceSetName: resourceset.ResourceSetName
            }, true).then(async (data) => {
                $('#section-networkingandcontentdelivery-route53-recoveryreadinessresourcesets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ResourceSetArn,
                    f2type: 'route53.recoveryreadinessresourceset',
                    f2data: data,
                    f2region: region,
                    name: data.ResourceSetName
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("Route53RecoveryReadiness", "listReadinessChecks", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-route53-recoveryreadinesschecks-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ReadinessChecks.map(async (readinesscheck) => {
            return sdkcall("Route53RecoveryReadiness", "getReadinessCheck", {
                ReadinessCheckName: readinesscheck.ReadinessCheckName
            }, true).then(async (data) => {
                $('#section-networkingandcontentdelivery-route53-recoveryreadinesschecks-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ReadinessCheckArn,
                    f2type: 'route53.recoveryreadinesscheck',
                    f2data: data,
                    f2region: region,
                    name: data.ReadinessCheckName
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-networkingandcontentdelivery-route53-resolverfirewalldomainlists-datatable');
    unblockUI('#section-networkingandcontentdelivery-route53-resolverfirewallrulegroups-datatable');
    unblockUI('#section-networkingandcontentdelivery-route53-resolverfirewallrulegroupassociations-datatable');
    unblockUI('#section-networkingandcontentdelivery-route53-recoverycontrolclusters-datatable');
    unblockUI('#section-networkingandcontentdelivery-route53-recoverycontrolcontrolpanels-datatable');
    unblockUI('#section-networkingandcontentdelivery-route53-recoverycontrolroutingcontrols-datatable');
    unblockUI('#section-networkingandcontentdelivery-route53-recoverycontrolsafetyrules-datatable');
    unblockUI('#section-networkingandcontentdelivery-route53-recoveryreadinessrecoverygroups-datatable');
    unblockUI('#section-networkingandcontentdelivery-route53-recoveryreadinesscells-datatable');
    unblockUI('#section-networkingandcontentdelivery-route53-recoveryreadinessresourcesets-datatable');
    unblockUI('#section-networkingandcontentdelivery-route53-recoveryreadinesschecks-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "route53.record") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.tf['type'] = obj.data.Type;
        reqParams.cfn['SetIdentifier'] = obj.data.SetIdentifier;
        reqParams.tf['set_identifier'] = obj.data.SetIdentifier;
        reqParams.cfn['Weight'] = obj.data.Weight;
        if (obj.data.Weight) {
            reqParams.tf['weighted_routing_policy'] = {
                'weight': obj.data.Weight
            };
        }
        reqParams.cfn['Region'] = obj.data.Region;
        if (obj.data.Region) {
            reqParams.tf['latency_routing_policy'] = {
                'region': obj.data.Region
            };
        }
        reqParams.cfn['Failover'] = obj.data.Failover;
        if (obj.data.Failover) {
            reqParams.tf['failover_routing_policy'] = {
                'type': obj.data.Failover
            };
        }
        reqParams.cfn['MultiValueAnswer'] = obj.data.MultiValueAnswer;
        reqParams.tf['multivalue_answer_routing_policy'] = obj.data.MultiValueAnswer;
        reqParams.cfn['TTL'] = obj.data.TTL;
        reqParams.tf['ttl'] = obj.data.TTL;
        reqParams.cfn['HealthCheckId'] = obj.data.HealthCheckId;
        reqParams.tf['health_check_id'] = obj.data.HealthCheckId;
        if (obj.data.ResourceRecords) {
            reqParams.cfn['ResourceRecords'] = [];
            reqParams.tf['records'] = [];
            obj.data.ResourceRecords.forEach(resourceRecord => {
                reqParams.cfn['ResourceRecords'].push(resourceRecord['Value']);
                reqParams.tf['records'].push(resourceRecord['Value']);
            });
        }
        reqParams.cfn['AliasTarget'] = obj.data.AliasTarget;
        if (obj.data.AliasTarget) {
            reqParams.tf['alias'] = {
                'name': obj.data.AliasTarget.DNSName,
                'zone_id': obj.data.AliasTarget.HostedZoneId,
                'evaluate_target_health': obj.data.AliasTarget.EvaluateTargetHealth
            };
        }
        reqParams.cfn['HostedZoneId'] = obj.data.HostedZoneId;
        reqParams.tf['zone_id'] = obj.data.HostedZoneId;
        reqParams.cfn['GeoLocation'] = obj.data.GeoLocation;
        if (obj.data.GeoLocation) {
            reqParams.tf['geolocation_routing_policy'] = {
                'continent': obj.data.GeoLocation.ContinentCode,
                'country': obj.data.GeoLocation.CountryCode,
                'subdivision': obj.data.GeoLocation.SubdivisionCode
            };
        }

        /*
        TODO:
        Comment: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53::RecordSet'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53::RecordSet',
            'terraformType': 'aws_route53_record',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name
            }
        });
    } else if (obj.type == "route53.hostedzone") {
        reqParams.cfn['Name'] = obj.data.HostedZone.Name;
        reqParams.tf['name'] = obj.data.HostedZone.Name;
        if (obj.data.Config && obj.data.HostedZone.Config.Comment) {
            reqParams.cfn['HostedZoneConfig'] = {
                'Comment': obj.data.HostedZone.Config.Comment
            };
            reqParams.tf['comment'] = obj.data.HostedZone.Config.Comment;
        }
        reqParams.cfn['VPCs'] = obj.data.VPCs;
        reqParams.cfn['HostedZoneTags'] = obj.data.Tags;

        /*
        TODO:
        QueryLoggingConfig: 
            QueryLoggingConfig
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53::HostedZone'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53::HostedZone',
            'terraformType': 'aws_route53_zone',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.HostedZone.Id.split("/").pop(),
                'Import': {
                    'HostedZoneId': obj.data.HostedZone.Id.split("/").pop()
                }
                /*
                TODO:
                NameServers
                */
            }
        });
    } else if (obj.type == "route53.healthcheck") {
        reqParams.cfn['HealthCheckConfig'] = {
            'AlarmIdentifier': obj.data.HealthCheckConfig.AlarmIdentifier,
            'ChildHealthChecks': obj.data.HealthCheckConfig.ChildHealthChecks,
            'EnableSNI': obj.data.HealthCheckConfig.EnableSNI,
            'FailureThreshold': obj.data.HealthCheckConfig.FailureThreshold,
            'FullyQualifiedDomainName': obj.data.HealthCheckConfig.FullyQualifiedDomainName,
            'HealthThreshold': obj.data.HealthCheckConfig.HealthThreshold,
            'InsufficientDataHealthStatus': obj.data.HealthCheckConfig.InsufficientDataHealthStatus,
            'Inverted': obj.data.HealthCheckConfig.Inverted,
            'IPAddress': obj.data.HealthCheckConfig.IPAddress,
            'MeasureLatency': obj.data.HealthCheckConfig.MeasureLatency,
            'Port': obj.data.HealthCheckConfig.Port,
            'Regions': obj.data.HealthCheckConfig.Regions,
            'RequestInterval': obj.data.HealthCheckConfig.RequestInterval,
            'ResourcePath': obj.data.HealthCheckConfig.ResourcePath,
            'SearchString': obj.data.HealthCheckConfig.SearchString,
            'Type': obj.data.HealthCheckConfig.Type
        };
        reqParams.tf['cloudwatch_alarm_name'] = obj.data.HealthCheckConfig.AlarmIdentifier;
        reqParams.tf['child_healthchecks'] = obj.data.HealthCheckConfig.ChildHealthChecks;
        reqParams.tf['enable_sni'] = obj.data.HealthCheckConfig.EnableSNI;
        reqParams.tf['failure_threshold'] = obj.data.HealthCheckConfig.FailureThreshold;
        reqParams.tf['fqdn'] = obj.data.HealthCheckConfig.FullyQualifiedDomainName;
        reqParams.tf['child_health_threshold'] = obj.data.HealthCheckConfig.HealthThreshold;
        reqParams.tf['insufficient_data_health_status'] = obj.data.HealthCheckConfig.InsufficientDataHealthStatus;
        reqParams.tf['invert_healthcheck'] = obj.data.HealthCheckConfig.Inverted;
        reqParams.tf['ip_address'] = obj.data.HealthCheckConfig.IPAddress;
        reqParams.tf['measure_latency'] = obj.data.HealthCheckConfig.MeasureLatency;
        reqParams.tf['port'] = obj.data.HealthCheckConfig.Port;
        reqParams.tf['regions'] = obj.data.HealthCheckConfig.Regions;
        reqParams.tf['request_interval'] = obj.data.HealthCheckConfig.RequestInterval;
        reqParams.tf['resource_path'] = obj.data.HealthCheckConfig.ResourcePath;
        reqParams.tf['search_string'] = obj.data.HealthCheckConfig.SearchString;
        reqParams.tf['type'] = obj.data.HealthCheckConfig.Type;

        /*
        TODO:
        HealthCheckTags:
            - HealthCheckTags 
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53::HealthCheck'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53::HealthCheck',
            'terraformType': 'aws_route53_health_check',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Id
            }
        });
    } else if (obj.type == "route53.resolverendpoint") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['SecurityGroupIds'] = obj.data.SecurityGroupIds;
        reqParams.tf['security_group_ids'] = obj.data.SecurityGroupIds;
        reqParams.cfn['Direction'] = obj.data.Direction;
        reqParams.tf['direction'] = obj.data.Direction;
        if (obj.data.IpAddresses) {
            reqParams.cfn['IpAddresses'] = [];
            obj.data.IpAddresses.forEach(ipaddress => {
                reqParams.cfn['IpAddresses'].push({
                    'Ip': ipaddress.Ip,
                    'SubnetId': ipaddress.SubnetId
                });
            });
        }

        /*
        TODO:
        Tags: 
            - Resource Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53Resolver::ResolverEndpoint'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53Resolver::ResolverEndpoint',
            'terraformType': 'aws_route53_resolver_endpoint',
            'options': reqParams
        });
    } else if (obj.type == "route53.resolverrule") {
        reqParams.cfn['DomainName'] = obj.data.DomainName;
        reqParams.tf['domain_name'] = obj.data.DomainName;
        reqParams.cfn['RuleType'] = obj.data.RuleType;
        reqParams.tf['rule_type'] = obj.data.RuleType;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['TargetIps'] = obj.data.TargetIps;
        if (obj.data.TargetIps) {
            reqParams.tf['target_ip'] = [];
            obj.data.TargetIps.forEach(targetip => {
                reqParams.tf['target_ip'].push({
                    'ip': targetip.Ip,
                    'port': targetip.Port
                });
            });
        }
        reqParams.cfn['ResolverEndpointId'] = obj.data.ResolverEndpointId;
        reqParams.tf['resolver_endpoint_id'] = obj.data.ResolverEndpointId;

        /*
        TODO:
        Tags: 
            - Resource Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53Resolver::ResolverRule'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53Resolver::ResolverRule',
            'terraformType': 'aws_route53_resolver_rule',
            'options': reqParams
        });
    } else if (obj.type == "route53.resolverruleassociation") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['ResolverRuleId'] = obj.data.ResolverRuleId;
        reqParams.tf['resolver_rule_id'] = obj.data.ResolverRuleId;
        reqParams.cfn['VPCId'] = obj.data.VPCId;
        reqParams.tf['vpc_id'] = obj.data.VPCId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53Resolver::ResolverRuleAssociation'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53Resolver::ResolverRuleAssociation',
            'terraformType': 'aws_route53_resolver_rule_association',
            'options': reqParams
        });
    } else if (obj.type == "route53.resolverqueryloggingconfig") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['DestinationArn'] = obj.data.DestinationArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53Resolver::ResolverQueryLoggingConfig'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53Resolver::ResolverQueryLoggingConfig',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Id,
                'GetAtt': {
                    'Arn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "route53.resolverqueryloggingconfigassociation") {
        reqParams.cfn['ResolverQueryLogConfigId'] = obj.data.ResolverQueryLogConfigId;
        reqParams.cfn['ResourceId'] = obj.data.ResourceId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Id
            }
        });
    } else if (obj.type == "route53.dnssec") {
        reqParams.cfn['HostedZoneId'] = obj.data.HostedZoneId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53::DNSSEC'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53::DNSSEC',
            'options': reqParams
        });
    } else if (obj.type == "route53.keysigningkey") {
        reqParams.cfn['HostedZoneId'] = obj.data.HostedZoneId;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['KeyManagementServiceArn'] = obj.data.KmsArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53::KeySigningKey'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53::KeySigningKey',
            'options': reqParams
        });
    } else if (obj.type == "route53.resolverdnssecconfig") {
        reqParams.cfn['ResourceId'] = obj.data.ResourceId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53Resolver::ResolverDNSSECConfig'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53Resolver::ResolverDNSSECConfig',
            'options': reqParams
        });
    } else if (obj.type == "route53.resolverconfig") {
        reqParams.cfn['ResourceId'] = obj.data.ResourceId;
        if (obj.data.AutodefinedReverse == "DISABLED") {
            reqParams.cfn['AutodefinedReverseFlag'] = "DISABLE";
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53Resolver::ResolverConfig'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53Resolver::ResolverConfig',
            'options': reqParams
        });
    } else if (obj.type == "route53.resolverfirewalldomainlist") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Domains'] = obj.data.Domains;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53Resolver::FirewallDomainList'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53Resolver::FirewallDomainList',
            'options': reqParams
        });
    } else if (obj.type == "route53.resolverfirewallrulegroup") {
        reqParams.cfn['Name'] = obj.data.Name;
        if (obj.data.FirewallRules) {
            reqParams.cfn['FirewallRules'] = [];
            obj.data.FirewallRules.forEach(rule => {
                reqParams.cfn['FirewallRules'].push({
                    'Action': rule.Action,
                    'BlockOverrideDnsType': rule.BlockOverrideDnsType,
                    'BlockOverrideDomain': rule.BlockOverrideDomain,
                    'BlockOverrideTtl': rule.BlockOverrideTtl,
                    'BlockResponse': rule.BlockResponse,
                    'FirewallDomainListId': rule.FirewallDomainListId,
                    'Priority': rule.Priority
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53Resolver::FirewallRuleGroup'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53Resolver::FirewallRuleGroup',
            'options': reqParams
        });
    } else if (obj.type == "route53.resolverfirewallrulegroupassociation") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Priority'] = obj.data.Priority;
        reqParams.cfn['MutationProtection'] = obj.data.MutationProtection;
        reqParams.cfn['FirewallRuleGroupId'] = obj.data.FirewallRuleGroupId;
        reqParams.cfn['VpcId'] = obj.data.VpcId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53Resolver::FirewallRuleGroupAssociation'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53Resolver::FirewallRuleGroupAssociation',
            'options': reqParams
        });
    } else if (obj.type == "route53.recoverycontrolcluster") {
        reqParams.cfn['Name'] = obj.data.Name;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53RecoveryControl::Cluster'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53RecoveryControl::Cluster',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ClusterArn
            }
        });
    } else if (obj.type == "route53.recoverycontrolcontrolpanel") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['ClusterArn'] = obj.data.ClusterArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53RecoveryControl::ControlPanel'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53RecoveryControl::ControlPanel',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ControlPanelArn
            }
        });
    } else if (obj.type == "route53.recoverycontrolroutingcontrol") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['ClusterArn'] = obj.data.ClusterArn;
        reqParams.cfn['ControlPanelArn'] = obj.data.ControlPanelArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53RecoveryControl::RoutingControl'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53RecoveryControl::RoutingControl',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.RoutingControlArn
            }
        });
    } else if (obj.type == "route53.recoverycontrolsafetyrule") {
        if (obj.data.AssertionRule) {
            reqParams.cfn['Name'] = obj.data.AssertionRule.Name;
            reqParams.cfn['ControlPanelArn'] = obj.data.AssertionRule.ControlPanelArn;
            reqParams.cfn['RuleConfig'] = obj.data.AssertionRule.RuleConfig;
            reqParams.cfn['AssertionRule'] = {
                'AssertedControls': obj.data.AssertionRule.AssertedControls,
                'WaitPeriodMs': obj.data.AssertionRule.WaitPeriodMs
            };
        } else {
            reqParams.cfn['Name'] = obj.data.GatingRule.Name;
            reqParams.cfn['ControlPanelArn'] = obj.data.GatingRule.ControlPanelArn;
            reqParams.cfn['RuleConfig'] = obj.data.GatingRule.RuleConfig;
            reqParams.cfn['GatingRule'] = {
                'GatingControls': obj.data.GatingRule.GatingControls,
                'TargetControls': obj.data.GatingRule.TargetControls,
                'WaitPeriodMs': obj.data.GatingRule.WaitPeriodMs
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53RecoveryControl::SafetyRule'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53RecoveryControl::SafetyRule',
            'options': reqParams,
            'returnValues': {
                'Ref': (obj.data.AssertionRule ? obj.data.AssertionRule.SafetyRuleArn : obj.data.GatingRule.SafetyRuleArn)
            }
        });
    } else if (obj.type == "route53.recoveryreadinessrecoverygroup") {
        reqParams.cfn['RecoveryGroupName'] = obj.data.RecoveryGroupName;
        reqParams.cfn['Cells'] = obj.data.Cells;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.Tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.Tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53RecoveryReadiness::RecoveryGroup'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53RecoveryReadiness::RecoveryGroup',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.RecoveryGroupName,
                'GetAtt': {
                    'Arn': obj.data.RecoveryGroupArn
                }
            }
        });
    } else if (obj.type == "route53.recoveryreadinesscell") {
        reqParams.cfn['CellName'] = obj.data.CellName;
        reqParams.cfn['Cells'] = obj.data.Cells;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.Tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.Tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53RecoveryReadiness::Cell'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53RecoveryReadiness::Cell',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.CellName,
                'GetAtt': {
                    'Arn': obj.data.CellArn
                }
            }
        });
    } else if (obj.type == "route53.recoveryreadinessresourceset") {
        reqParams.cfn['ResourceSetName'] = obj.data.ResourceSetName;
        reqParams.cfn['ResourceSetType'] = obj.data.ResourceSetType;
        reqParams.cfn['Resources'] = obj.data.Resources;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.Tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.Tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53RecoveryReadiness::ResourceSet'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53RecoveryReadiness::ResourceSet',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ResourceSetName,
                'GetAtt': {
                    'Arn': obj.data.ResourceSetArn
                }
            }
        });
    } else if (obj.type == "route53.recoveryreadinesscheck") {
        reqParams.cfn['ReadinessCheckName'] = obj.data.ReadinessCheckName;
        reqParams.cfn['ResourceSetName'] = obj.data.ResourceSet;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.Tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.Tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('route53', obj.id, 'AWS::Route53RecoveryReadiness::ReadinessCheck'),
            'region': obj.region,
            'service': 'route53',
            'type': 'AWS::Route53RecoveryReadiness::ReadinessCheck',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ReadinessCheckName,
                'GetAtt': {
                    'Arn': obj.data.ReadinessCheckArn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
