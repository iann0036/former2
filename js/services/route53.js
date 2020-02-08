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

    await sdkcall("Route53", "listHostedZones", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-route53-hostedzones-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-route53-records-datatable').bootstrapTable('removeAll');

        await Promise.all(data.HostedZones.map(hostedZone => {
            $('#section-networkingandcontentdelivery-route53-hostedzones-datatable').bootstrapTable('append', [{
                f2id: hostedZone.Id.split("/").pop(),
                f2type: 'route53.hostedzone',
                f2data: hostedZone,
                f2region: region,
                hostedzoneid: hostedZone.Id.split("/").pop(),
                domainname: hostedZone.Name,
                recordscount: hostedZone.ResourceRecordSetCount
            }]);

            return sdkcall("Route53", "listResourceRecordSets", {
                HostedZoneId: hostedZone.Id.split("/").pop()
            }, true).then((data) => {
                data.ResourceRecordSets.forEach(resourceRecordSet => {
                    resourceRecordSet['HostedZoneId'] = hostedZone.Id.split("/").pop();

                    $('#section-networkingandcontentdelivery-route53-records-datatable').bootstrapTable('append', [{
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
        }));

        unblockUI('#section-networkingandcontentdelivery-route53-hostedzones-datatable');
        unblockUI('#section-networkingandcontentdelivery-route53-records-datatable');
    });

    await sdkcall("Route53", "listHealthChecks", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-route53-healthchecks-datatable').bootstrapTable('removeAll');

        data.HealthChecks.forEach(healthCheck => {
            $('#section-networkingandcontentdelivery-route53-healthchecks-datatable').bootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-route53-resolverendpoints-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ResolverEndpoints.map(resolverEndpoint => {
            return sdkcall("Route53Resolver", "getResolverEndpoint", {
                ResolverEndpointId: resolverEndpoint.Id
            }, true).then((data) => {
                $('#section-networkingandcontentdelivery-route53-resolverendpoints-datatable').bootstrapTable('append', [{
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
            });
        }));

        unblockUI('#section-networkingandcontentdelivery-route53-resolverendpoints-datatable');
    });

    await sdkcall("Route53Resolver", "listResolverRules", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-route53-resolverrules-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ResolverRules.map(resolverRule => {
            return sdkcall("Route53Resolver", "getResolverRule", {
                ResolverRuleId: resolverRule.Id
            }, true).then((data) => {
                if (!data.ResolverRule.Arn.includes("::autodefined-rule/")) {
                    $('#section-networkingandcontentdelivery-route53-resolverrules-datatable').bootstrapTable('append', [{
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
        $('#section-networkingandcontentdelivery-route53-resolverruleassociations-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ResolverRuleAssociations.map(resolverRuleAssociation => {
            return sdkcall("Route53Resolver", "getResolverRuleAssociation", {
                ResolverRuleAssociationId: resolverRuleAssociation.Id
            }, true).then((data) => {
                if (data.ResolverRuleAssociation.ResolverRuleId != "rslvr-autodefined-rr-internet-resolver") {
                    $('#section-networkingandcontentdelivery-route53-resolverruleassociations-datatable').bootstrapTable('append', [{
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
}
