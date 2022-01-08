/* ========================================================================== */
// Inspector
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity, &amp; Compliance',
    'service': 'Inspector',
    'resourcetypes': {
        'V2 Filters': {
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
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Assessment Targets': {
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
                        field: 'resourcegrouparn',
                        title: 'Resource Group ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Assessment Templates': {
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
                        field: 'assessmenttargetarn',
                        title: 'Assessment Target ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'duration',
                        title: 'Duration',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Resource Groups': {
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
        }
    }
});

async function updateDatatableSecurityIdentityAndComplianceInspector() {
    blockUI('#section-securityidentityandcompliance-inspector-v2filters-datatable');
    blockUI('#section-securityidentityandcompliance-inspector-assessmenttargets-datatable');
    blockUI('#section-securityidentityandcompliance-inspector-resourcegroups-datatable');
    blockUI('#section-securityidentityandcompliance-inspector-assessmenttemplates-datatable');

    await sdkcall("Inspector2", "listFilters", {
        // no params
    }, true).then(async (data) => {
        data.filters.forEach(filter => {
            $('#section-securityidentityandcompliance-inspector-v2filters-datatable').deferredBootstrapTable('append', [{
                f2id: filter.arn,
                f2type: 'inspector.v2filter',
                f2data: filter,
                f2region: region,
                name: filter.name,
                description: filter.description
            }]);
        });
    }).catch(() => { });

    await sdkcall("Inspector", "listAssessmentTargets", {
        // no params
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-inspector-assessmenttargets-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-inspector-resourcegroups-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-inspector-assessmenttemplates-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.assessmentTargetArns.map(assessmentTargetArn => {
            return Promise.all([
                sdkcall("Inspector", "describeAssessmentTargets", {
                    assessmentTargetArns: [assessmentTargetArn]
                }, true).then(async (data) => {
                    $('#section-securityidentityandcompliance-inspector-assessmenttargets-datatable').deferredBootstrapTable('append', [{
                        f2id: data.assessmentTargets[0].arn,
                        f2type: 'inspector.assessmenttarget',
                        f2data: data.assessmentTargets[0],
                        f2region: region,
                        name: data.assessmentTargets[0].name,
                        resourcegrouparn: data.assessmentTargets[0].resourceGroupArn
                    }]);

                    if (data.assessmentTargets[0].resourceGroupArn) {
                        await sdkcall("Inspector", "describeResourceGroups", {
                            resourceGroupArns: [data.assessmentTargets[0].resourceGroupArn]
                        }, true).then((data) => {
                            $('#section-securityidentityandcompliance-inspector-resourcegroups-datatable').deferredBootstrapTable('append', [{
                                f2id: data.resourceGroups[0].arn,
                                f2type: 'inspector.resourcegroup',
                                f2data: data.resourceGroups[0],
                                f2region: region,
                                arn: data.resourceGroups[0].arn
                            }]);
                        });
                    }
                }),
                sdkcall("Inspector", "listAssessmentTemplates", {
                    assessmentTargetArns: [assessmentTargetArn]
                }, true).then(async (data) => {
                    await Promise.all(data.assessmentTemplateArns.map(assessmentTemplateArn => {
                        return sdkcall("Inspector", "describeAssessmentTemplates", {
                            assessmentTemplateArns: [assessmentTemplateArn]
                        }, true).then((data) => {
                            $('#section-securityidentityandcompliance-inspector-assessmenttemplates-datatable').deferredBootstrapTable('append', [{
                                f2id: data.assessmentTemplates[0].arn,
                                f2type: 'inspector.assessmenttemplate',
                                f2data: data.assessmentTemplates[0],
                                f2region: region,
                                name: data.assessmentTemplates[0].name,
                                assessmenttargetarn: data.assessmentTemplates[0].assessmentTargetArn,
                                duration: data.assessmentTemplates[0].durationInSeconds + " seconds"
                            }]);
                        });
                    }));
                })
            ]);
        }));
    }).catch(() => { });

    unblockUI('#section-securityidentityandcompliance-inspector-v2filters-datatable');
    unblockUI('#section-securityidentityandcompliance-inspector-assessmenttargets-datatable');
    unblockUI('#section-securityidentityandcompliance-inspector-resourcegroups-datatable');
    unblockUI('#section-securityidentityandcompliance-inspector-assessmenttemplates-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "inspector.resourcegroup") {
        if (obj.data.tags) {
            reqParams.cfn['ResourceGroupTags'] = [];
            obj.data.tags.forEach(tag => {
                if (!tag.key.startsWith("aws:")) {
                    reqParams.cfn['ResourceGroupTags'].push({
                        'Key': tag.key,
                        'Value': tag.value
                    });
                }
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('inspector', obj.id, 'AWS::Inspector::ResourceGroup'),
            'region': obj.region,
            'service': 'inspector',
            'type': 'AWS::Inspector::ResourceGroup',
            'options': reqParams
        });
    } else if (obj.type == "inspector.assessmenttarget") {
        reqParams.cfn['AssessmentTargetName'] = obj.data.name;
        reqParams.cfn['ResourceGroupArn'] = obj.data.resourceGroupArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('inspector', obj.id, 'AWS::Inspector::AssessmentTarget'),
            'region': obj.region,
            'service': 'inspector',
            'type': 'AWS::Inspector::AssessmentTarget',
            'options': reqParams
        });
    } else if (obj.type == "inspector.assessmenttemplate") {
        reqParams.cfn['AssessmentTemplateName'] = obj.data.name;
        reqParams.cfn['AssessmentTargetArn'] = obj.data.assessmentTargetArn;
        reqParams.cfn['DurationInSeconds'] = obj.data.durationInSeconds;
        reqParams.cfn['RulesPackageArns'] = obj.data.rulesPackageArns;
        if (obj.data.userAttributesForFindings) {
            reqParams.cfn['UserAttributesForFindings'] = [];
            obj.data.userAttributesForFindings.forEach(userAttributesForFindings => {
                reqParams.cfn['UserAttributesForFindings'].push({
                    'Key': userAttributesForFindings.key,
                    'Value': userAttributesForFindings.value
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('inspector', obj.id, 'AWS::Inspector::AssessmentTemplate'),
            'region': obj.region,
            'service': 'inspector',
            'type': 'AWS::Inspector::AssessmentTemplate',
            'options': reqParams
        });
    } else if (obj.type == "inspector.v2filter") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['FilterAction'] = obj.data.action;
        if (obj.data.criteria) {
            var awsaccountid = null;
            if (obj.data.criteria.awsAccountId) {
                awsaccountid = [];
                obj.data.criteria.awsAccountId.forEach(item => {
                    awsaccountid.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var componentid = null;
            if (obj.data.criteria.componentId) {
                componentid = [];
                obj.data.criteria.componentId.forEach(item => {
                    componentid.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var componenttype = null;
            if (obj.data.criteria.componentType) {
                componenttype = [];
                obj.data.criteria.componentType.forEach(item => {
                    componenttype.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var ec2instanceimageid = null;
            if (obj.data.criteria.ec2InstanceImageId) {
                ec2instanceimageid = [];
                obj.data.criteria.ec2InstanceImageId.forEach(item => {
                    ec2instanceimageid.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var ec2instancesubnetid = null;
            if (obj.data.criteria.ec2InstanceSubnetId) {
                ec2instancesubnetid = [];
                obj.data.criteria.ec2InstanceSubnetId.forEach(item => {
                    ec2instancesubnetid.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var ec2instancevpcid = null;
            if (obj.data.criteria.ec2InstanceVpcId) {
                ec2instancevpcid = [];
                obj.data.criteria.ec2InstanceVpcId.forEach(item => {
                    ec2instancevpcid.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var ecrimagearchitecture = null;
            if (obj.data.criteria.ecrImageArchitecture) {
                ecrimagearchitecture = [];
                obj.data.criteria.ecrImageArchitecture.forEach(item => {
                    ecrimagearchitecture.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var ecrimagehash = null;
            if (obj.data.criteria.ecrImageHash) {
                ecrimagehash = [];
                obj.data.criteria.ecrImageHash.forEach(item => {
                    ecrimagehash.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var ecrimagepushedat = null;
            if (obj.data.criteria.ecrImagePushedAt) {
                ecrimagepushedat = [];
                obj.data.criteria.ecrImagePushedAt.forEach(item => {
                    ecrimagepushedat.push({
                        'StartInclusive': item.startInclusive,
                        'EndInclusive': item.endInclusive
                    });
                });
            }
            var ecrimageregistry = null;
            if (obj.data.criteria.ecrImageRegistry) {
                ecrimageregistry = [];
                obj.data.criteria.ecrImageRegistry.forEach(item => {
                    ecrimageregistry.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var ecrimagerepositoryname = null;
            if (obj.data.criteria.ecrImageRepositoryName) {
                ecrimagerepositoryname = [];
                obj.data.criteria.ecrImageRepositoryName.forEach(item => {
                    ecrimagerepositoryname.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var ecrimagetags = null;
            if (obj.data.criteria.ecrImageTags) {
                ecrimagetags = [];
                obj.data.criteria.ecrImageTags.forEach(item => {
                    ecrimagetags.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var findingarn = null;
            if (obj.data.criteria.findingArn) {
                findingarn = [];
                obj.data.criteria.findingArn.forEach(item => {
                    findingarn.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var findingstatus = null;
            if (obj.data.criteria.findingStatus) {
                findingstatus = [];
                obj.data.criteria.findingStatus.forEach(item => {
                    findingstatus.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var findingtype = null;
            if (obj.data.criteria.findingType) {
                findingtype = [];
                obj.data.criteria.findingType.forEach(item => {
                    findingtype.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var firstobservedat = null;
            if (obj.data.criteria.firstObservedAt) {
                firstobservedat = [];
                obj.data.criteria.firstObservedAt.forEach(item => {
                    firstobservedat.push({
                        'StartInclusive': item.startInclusive,
                        'EndInclusive': item.endInclusive
                    });
                });
            }
            var inspectorscore = null;
            if (obj.data.criteria.inspectorScore) {
                inspectorscore = [];
                obj.data.criteria.inspectorScore.forEach(item => {
                    inspectorscore.push({
                        'LowerInclusive': item.lowerInclusive,
                        'UpperInclusive': item.upperInclusive
                    });
                });
            }
            var lastobservedat = null;
            if (obj.data.criteria.lastObservedAt) {
                lastobservedat = [];
                obj.data.criteria.lastObservedAt.forEach(item => {
                    lastobservedat.push({
                        'StartInclusive': item.startInclusive,
                        'EndInclusive': item.endInclusive
                    });
                });
            }
            var networkprotocol = null;
            if (obj.data.criteria.networkProtocol) {
                networkprotocol = [];
                obj.data.criteria.networkProtocol.forEach(item => {
                    networkprotocol.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var portrange = null;
            if (obj.data.criteria.portRange) {
                portrange = [];
                obj.data.criteria.portRange.forEach(item => {
                    portrange.push({
                        'BeginInclusive': item.beginInclusive,
                        'EndInclusive': item.endInclusive
                    });
                });
            }
            var relatedvulnerabilities = null;
            if (obj.data.criteria.relatedVulnerabilities) {
                relatedvulnerabilities = [];
                obj.data.criteria.relatedVulnerabilities.forEach(item => {
                    relatedvulnerabilities.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var resourceid = null;
            if (obj.data.criteria.resourceId) {
                resourceid = [];
                obj.data.criteria.resourceId.forEach(item => {
                    resourceid.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var resourcetags = null;
            if (obj.data.criteria.resourceTags) {
                resourcetags = [];
                obj.data.criteria.resourceTags.forEach(item => {
                    resourcetags.push({
                        'Comparison': item.comparison,
                        'Key': item.key,
                        'Value': item.value
                    });
                });
            }
            var resourcetype = null;
            if (obj.data.criteria.resourceType) {
                resourcetype = [];
                obj.data.criteria.resourceType.forEach(item => {
                    resourcetype.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var severity = null;
            if (obj.data.criteria.severity) {
                severity = [];
                obj.data.criteria.severity.forEach(item => {
                    severity.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var title = null;
            if (obj.data.criteria.title) {
                title = [];
                obj.data.criteria.title.forEach(item => {
                    title.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var updatedat = null;
            if (obj.data.criteria.updatedAt) {
                updatedat = [];
                obj.data.criteria.updatedAt.forEach(item => {
                    updatedat.push({
                        'StartInclusive': item.startInclusive,
                        'EndInclusive': item.endInclusive
                    });
                });
            }
            var vendorseverity = null;
            if (obj.data.criteria.vendorSeverity) {
                vendorseverity = [];
                obj.data.criteria.vendorSeverity.forEach(item => {
                    vendorseverity.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var vulnerabilityid = null;
            if (obj.data.criteria.vulnerabilityId) {
                vulnerabilityid = [];
                obj.data.criteria.vulnerabilityId.forEach(item => {
                    vulnerabilityid.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var vulnerabilitysource = null;
            if (obj.data.criteria.vulnerabilitySource) {
                vulnerabilitysource = [];
                obj.data.criteria.vulnerabilitySource.forEach(item => {
                    vulnerabilitysource.push({
                        'Comparison': item.comparison,
                        'Value': item.value
                    });
                });
            }
            var vulnerablepackages = null;
            if (obj.data.criteria.vulnerablePackages) {
                vulnerablepackages = [];
                obj.data.criteria.vulnerablePackages.forEach(item => {
                    var architecture = null;
                    if (item.architecture) {
                        architecture = {
                            'Comparison': item.architecture.comparison,
                            'Value': item.architecture.value
                        }
                    }
                    var epoch = null;
                    if (item.epoch) {
                        epoch = {
                            'LowerInclusive': item.epoch.lowerInclusive,
                            'UpperInclusive': item.epoch.upperInclusive
                        }
                    }
                    var name = null;
                    if (item.name) {
                        name = {
                            'Comparison': item.name.comparison,
                            'Value': item.name.value
                        }
                    }
                    var release = null;
                    if (item.release) {
                        release = {
                            'Comparison': item.release.comparison,
                            'Value': item.release.value
                        }
                    }
                    var sourcelayerhash = null;
                    if (item.sourceLayerHash) {
                        sourcelayerhash = {
                            'Comparison': item.sourceLayerHash.comparison,
                            'Value': item.sourceLayerHash.value
                        }
                    }
                    var version = null;
                    if (item.version) {
                        version = {
                            'Comparison': item.version.comparison,
                            'Value': item.version.value
                        }
                    }
                    vulnerablepackages.push({
                        'Architecture': architecture,
                        'Epoch': epoch,
                        'Name': name,
                        'Release': release,
                        'SourceLayerHash': sourcelayerhash,
                        'Version': version
                    });
                });
            }
            reqParams.cfn['FilterCriteria'] = {
                'AwsAccountId': awsaccountid,
                'ComponentId': componentid,
                'ComponentType': componenttype,
                'Ec2InstanceImageId': ec2instanceimageid,
                'Ec2InstanceSubnetId': ec2instancesubnetid,
                'Ec2InstanceVpcId': ec2instancevpcid,
                'EcrImageArchitecture': ecrimagearchitecture,
                'EcrImageHash': ecrimagehash,
                'EcrImagePushedAt': ecrimagepushedat,
                'EcrImageRegistry': ecrimageregistry,
                'EcrImageRepositoryName': ecrimagerepositoryname,
                'EcrImageTags': ecrimagetags,
                'FindingArn': findingarn,
                'FindingStatus': findingstatus,
                'FindingType': findingtype,
                'FirstObservedAt': firstobservedat,
                'InspectorScore': inspectorscore,
                'LastObservedAt': lastobservedat,
                'NetworkProtocol': networkprotocol,
                'PortRange': portrange,
                'RelatedVulnerabilities': relatedvulnerabilities,
                'ResourceId': resourceid,
                'ResourceTags': resourcetags,
                'ResourceType': resourcetype,
                'Severity': severity,
                'Title': title,
                'UpdatedAt': updatedat,
                'VendorSeverity': vendorseverity,
                'VulnerabilityId': vulnerabilityid,
                'VulnerabilitySource': vulnerabilitysource,
                'VulnerablePackages': vulnerablepackages
            };                
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('inspector', obj.id, 'AWS::InspectorV2::Filter'),
            'region': obj.region,
            'service': 'inspector',
            'type': 'AWS::InspectorV2::Filter',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.arn
            }
        });
    } else {
        return false;
    }

    return true;
});
