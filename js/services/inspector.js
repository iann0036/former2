/* ========================================================================== */
// Inspector
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity &amp; Compliance',
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
        $('#section-securityidentityandcompliance-inspector-assessmenttargets-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-inspector-resourcegroups-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-inspector-assessmenttemplates-datatable').bootstrapTable('removeAll');

        await Promise.all(data.assessmentTargetArns.map(assessmentTargetArn => {
            return Promise.all([
                sdkcall("Inspector", "describeAssessmentTargets", {
                    assessmentTargetArns: [assessmentTargetArn]
                }, true).then(async (data) => {
                    $('#section-securityidentityandcompliance-inspector-assessmenttargets-datatable').bootstrapTable('append', [{
                        f2id: data.assessmentTargets[0].arn,
                        f2type: 'inspector.assessmenttarget',
                        f2data: data.assessmentTargets[0],
                        f2region: region,
                        name: data.assessmentTargets[0].name,
                        resourcegrouparn: data.assessmentTargets[0].resourceGroupArn
                    }]);

                    await sdkcall("Inspector", "describeResourceGroups", {
                        resourceGroupArns: [data.assessmentTargets[0].resourceGroupArn]
                    }, true).then((data) => {
                        $('#section-securityidentityandcompliance-inspector-resourcegroups-datatable').bootstrapTable('append', [{
                            f2id: data.resourceGroups[0].arn,
                            f2type: 'inspector.resourcegroup',
                            f2data: data.resourceGroups[0],
                            f2region: region,
                            arn: data.resourceGroups[0].arn
                        }]);
                    });
                }),
                sdkcall("Inspector", "listAssessmentTemplates", {
                    assessmentTargetArns: [assessmentTargetArn]
                }, true).then(async (data) => {
                    await Promise.all(data.assessmentTemplateArns.map(assessmentTemplateArn => {
                        return sdkcall("Inspector", "describeAssessmentTemplates", {
                            assessmentTemplateArns: [assessmentTemplateArn]
                        }, true).then((data) => {
                            $('#section-securityidentityandcompliance-inspector-assessmenttemplates-datatable').bootstrapTable('append', [{
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
