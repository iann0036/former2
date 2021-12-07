/* ========================================================================== */
// Resilience Hub
/* ========================================================================== */

sections.push({
    'category': 'Management &amp; Governance',
    'service': 'Resilience Hub',
    'resourcetypes': {
        'Apps': {
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
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Resiliency Policies': {
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
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableManagementAndGovernanceResilienceHub() {
    blockUI('#section-managementandgovernance-resiliencehub-apps-datatable');
    blockUI('#section-managementandgovernance-resiliencehub-resiliencypolicies-datatable');

    await sdkcall("Resiliencehub", "listApps", {
        // no params
    }, false).then(async (data) => {
        $('#section-managementandgovernance-resiliencehub-apps-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.appSummaries.map(async (app) => {
            await sdkcall("Resiliencehub", "listAppVersions", {
                appArn: app.appArn
            }, true).then(async (appversiondata) => {
                var appversion = appversiondata.appVersions.pop()['appVersion'];
                
                await sdkcall("Resiliencehub", "describeAppVersionTemplate", {
                    appArn: app.appArn,
                    appVersion: appversion.appVersion
                }, false).then(async (versiontemplatedata) => {
                    data.app['appTemplateBody'] = versiontemplatedata.appTemplateBody;
                });

                await sdkcall("Resiliencehub", "listAppVersionResourceMappings", {
                    appArn: app.appArn,
                    appVersion: appversion.appVersion
                }, false).then(async (appversionresourcemappingdata) => {
                    data.app['resourceMappings'] = appversionresourcemappingdata.resourceMappings;
                });
            });

            return sdkcall("Resiliencehub", "describeApp", {
                appArn: app.appArn
            }, true).then((data) => {
                $('#section-managementandgovernance-resiliencehub-apps-datatable').deferredBootstrapTable('append', [{
                    f2id: data.app.appArn,
                    f2type: 'resiliencehub.app',
                    f2data: data.app,
                    f2region: region,
                    name: data.app.name,
                    description: data.app.description
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("Resiliencehub", "listResiliencyPolicies", {
        // no params
    }, false).then(async (data) => {
        $('#section-managementandgovernance-resiliencehub-resiliencypolicies-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.resiliencyPolicies.map(resiliencyPolicy => {
            return sdkcall("Resiliencehub", "describeResiliencyPolicy", {
                policyArn: resiliencyPolicy.policyArn
            }, true).then((data) => {
                $('#section-managementandgovernance-resiliencehub-resiliencypolicies-datatable').deferredBootstrapTable('append', [{
                    f2id: data.policy.policyArn,
                    f2type: 'resiliencehub.resiliencypolicy',
                    f2data: data.policy,
                    f2region: region,
                    name: data.policy.policyName,
                    description: data.policy.policyDescription
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-managementandgovernance-resiliencehub-apps-datatable');
    unblockUI('#section-managementandgovernance-resiliencehub-resiliencypolicies-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "resiliencehub.app") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['ResiliencyPolicyArn'] = obj.data.policyArn;
        reqParams.cfn['AppTemplateBody'] = obj.data.appTemplateBody;
        if (obj.data.resourceMappings) {
            reqParams.cfn['ResourceMappings'] = [];
            obj.data.resourceMappings.forEach(resourceMapping => {
                var physicalResourceId = null;
                if (resourceMapping.physicalResourceId) {
                    physicalResourceId = {
                        'AwsAccountId': resourceMapping.physicalResourceId.awsAccountId,
                        'AwsRegion': resourceMapping.physicalResourceId.awsRegion,
                        'Identifier': resourceMapping.physicalResourceId.identifier,
                        'Type': resourceMapping.physicalResourceId.type
                    };
                }

                reqParams.cfn['ResourceMappings'].push({
                    'LogicalStackName': resourceMapping.logicalStackName,
                    'MappingType': resourceMapping.mappingType,
                    'PhysicalResourceId': physicalResourceId,
                    'ResourceName': resourceMapping.resourceName
                });
            });
        }
        reqParams.cfn['Tags'] = obj.data.tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('resiliencehub', obj.id, 'AWS::ResilienceHub::App'),
            'region': obj.region,
            'service': 'resiliencehub',
            'type': 'AWS::ResilienceHub::App',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ContactChannelArn
            }
        });
    } else if (obj.type == "resiliencehub.resiliencypolicy") {
        reqParams.cfn['PolicyName'] = obj.data.policyName;
        reqParams.cfn['PolicyDescription'] = obj.data.policyDescription;
        reqParams.cfn['DataLocationConstraint'] = obj.data.dataLocationConstraint;
        reqParams.cfn['Policy'] = obj.data.policy;
        reqParams.cfn['Tier'] = obj.data.tier;
        reqParams.cfn['Tags'] = obj.data.tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('resiliencehub', obj.id, 'AWS::ResilienceHub::ResiliencyPolicy'),
            'region': obj.region,
            'service': 'resiliencehub',
            'type': 'AWS::ResilienceHub::ResiliencyPolicy',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ContactChannelArn
            }
        });
    } else {
        return false;
    }

    return true;
});
