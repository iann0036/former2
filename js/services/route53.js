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
            $('#section-networkingandcontentdelivery-route53-hostedzones-datatable').deferredBootstrapTable('append', [{
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
        }));

        unblockUI('#section-networkingandcontentdelivery-route53-hostedzones-datatable');
        unblockUI('#section-networkingandcontentdelivery-route53-records-datatable');
    });

    await sdkcall("Route53", "listHealthChecks", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-route53-healthchecks-datatable').bootstrapTable('removeAll');

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
        $('#section-networkingandcontentdelivery-route53-resolverendpoints-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ResolverEndpoints.map(resolverEndpoint => {
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
        $('#section-networkingandcontentdelivery-route53-resolverruleassociations-datatable').bootstrapTable('removeAll');

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
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        if (obj.data.Config && obj.data.Config.Comment) {
            reqParams.cfn['HostedZoneConfig'] = {
                'Comment': obj.data.Config.Comment
            };
            reqParams.tf['comment'] = obj.data.Config.Comment;
        }

        /*
        TODO:
        HostedZoneTags:
            - HostedZoneTags
        QueryLoggingConfig: 
            QueryLoggingConfig
        VPCs:
            - HostedZoneVPCs 
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
                'Ref': obj.data.Id.split("/").pop(),
                'Import': {
                    'HostedZoneId': obj.data.Id.split("/").pop()
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
    } else {
        return false;
    }

    return true;
});
