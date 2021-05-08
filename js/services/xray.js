/* ========================================================================== */
// X-Ray
/* ========================================================================== */

sections.push({
    'category': 'Developer Tools',
    'service': 'X-Ray',
    'resourcetypes': {
        'Sampling Rules': {
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
                        field: 'priority',
                        title: 'Priority',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'servicename',
                        title: 'Service Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'resourcearn',
                        title: 'Resource ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'limit',
                        title: 'Limit',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Groups': {
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
                        field: 'filterexpression',
                        title: 'Filter Expression',
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

async function updateDatatableDeveloperToolsXRay() {
    blockUI('#section-developertools-xray-samplingrules-datatable');
    blockUI('#section-developertools-xray-groups-datatable');

    await sdkcall("XRay", "getSamplingRules", {
        // no params
    }, false).then(async (data) => {
        $('#section-developertools-xray-samplingrules-datatable').deferredBootstrapTable('removeAll');

        data.SamplingRuleRecords.forEach(samplingrule => {
            if (
                samplingrule.SamplingRule.RuleName != "Default" ||
                samplingrule.SamplingRule.ResourceARN != "*" ||
                samplingrule.SamplingRule.Priority != 10000 ||
                samplingrule.SamplingRule.FixedRate != 0.05 ||
                samplingrule.SamplingRule.ReservoirSize != 1 ||
                samplingrule.SamplingRule.ServiceName != "*" ||
                samplingrule.SamplingRule.ServiceType != "*" ||
                samplingrule.SamplingRule.Host != "*" ||
                samplingrule.SamplingRule.HTTPMethod != "*" ||
                samplingrule.SamplingRule.URLPath != "*"
            ) {
                $('#section-developertools-xray-samplingrules-datatable').deferredBootstrapTable('append', [{
                    f2id: samplingrule.SamplingRule.RuleARN,
                    f2type: 'xray.samplingrule',
                    f2data: samplingrule.SamplingRule,
                    f2region: region,
                    name: samplingrule.SamplingRule.RuleName,
                    priority: samplingrule.SamplingRule.Priority,
                    resourcearn: samplingrule.SamplingRule.ResourceARN,
                    servicename: samplingrule.SamplingRule.ServiceName,
                    limit: "Limit to " + samplingrule.SamplingRule.ReservoirSize + " r/sec, then " + samplingrule.SamplingRule.FixedRate + "% fixed rate"
                }]);
            }
        });
    }).catch(() => { });

    await sdkcall("XRay", "getGroups", {
        // no params
    }, false).then(async (data) => {
        $('#section-developertools-xray-groups-datatable').deferredBootstrapTable('removeAll');

        data.Groups.forEach(group => {
            $('#section-developertools-xray-groups-datatable').deferredBootstrapTable('append', [{
                f2id: group.GroupARN,
                f2type: 'xray.group',
                f2data: group,
                f2region: region,
                name: group.GroupName,
                filterexpression: group.FilterExpression
            }]);
        });
    }).catch(() => { });

    unblockUI('#section-developertools-xray-samplingrules-datatable');
    unblockUI('#section-developertools-xray-groups-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "xray.samplingrule") {
        reqParams.tf['rule_name'] = obj.data.RuleName;
        reqParams.tf['resource_arn'] = obj.data.ResourceARN;
        reqParams.tf['priority'] = obj.data.Priority;
        reqParams.tf['fixed_rate'] = obj.data.FixedRate;
        reqParams.tf['reservoir_size'] = obj.data.ReservoirSize;
        reqParams.tf['service_name'] = obj.data.ServiceName;
        reqParams.tf['service_type'] = obj.data.ServiceType;
        reqParams.tf['host'] = obj.data.Host;
        reqParams.tf['http_method'] = obj.data.HTTPMethod;
        reqParams.tf['url_path'] = obj.data.URLPath;
        reqParams.tf['version'] = obj.data.Version;
        if (Object.keys(obj.data.Attributes).length) {
            reqParams.tf['attributes'] = obj.data.Attributes;
        }

        reqParams.cfn['RuleName'] = obj.data.RuleName;
        reqParams.cfn['SamplingRule'] = {
            'ResourceARN': obj.data.ResourceARN,
            'Priority': obj.data.Priority,
            'FixedRate': obj.data.FixedRate,
            'ReservoirSize': obj.data.ReservoirSize,
            'ServiceName': obj.data.ServiceName,
            'ServiceType': obj.data.ServiceType,
            'Host': obj.data.Host,
            'HTTPMethod': obj.data.HTTPMethod,
            'URLPath': obj.data.URLPath,
            'Version': obj.data.Version,
            'Attributes': obj.data.Attributes
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('xray', obj.id, 'AWS::XRay::SamplingRule'),
            'region': obj.region,
            'service': 'xray',
            'type': 'AWS::XRay::SamplingRule',
            'terraformType': 'aws_xray_sampling_rule',
            'options': reqParams
        });
    } else if (obj.type == "xray.group") {
        reqParams.cfn['GroupName'] = obj.data.GroupName;
        reqParams.cfn['FilterExpression'] = obj.data.FilterExpression;
        reqParams.cfn['InsightsConfiguration'] = obj.data.InsightsConfiguration;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('xray', obj.id, 'AWS::XRay::Group'),
            'region': obj.region,
            'service': 'xray',
            'type': 'AWS::XRay::Group',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'GroupARN': obj.data.GroupARN
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
