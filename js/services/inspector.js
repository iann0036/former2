/* ========================================================================== */
// Inspector
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity, &amp; Compliance',
    'service': 'Inspector',
    'resourcetypes': {
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
    blockUI('#section-securityidentityandcompliance-inspector-assessmenttargets-datatable');
    blockUI('#section-securityidentityandcompliance-inspector-resourcegroups-datatable');
    blockUI('#section-securityidentityandcompliance-inspector-assessmenttemplates-datatable');

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

        unblockUI('#section-securityidentityandcompliance-inspector-assessmenttargets-datatable');
        unblockUI('#section-securityidentityandcompliance-inspector-resourcegroups-datatable');
        unblockUI('#section-securityidentityandcompliance-inspector-assessmenttemplates-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "inspector.resourcegroup") {
        if (obj.data.tags) {
            reqParams.cfn['ResourceGroupTags'] = [];
            obj.data.tags.forEach(tag => {
                reqParams.cfn['ResourceGroupTags'].push({
                    'Key': tag.key,
                    'Value': tag.value
                });
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
    } else {
        return false;
    }

    return true;
});
