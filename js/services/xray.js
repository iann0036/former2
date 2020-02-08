/* ========================================================================== */
// X-Ray
/* ========================================================================== */

sections.push({
    'category': 'Developer Tools',
    'service': 'X-Ray',
    'resourcetypes': {
        'Sampling Rules': {
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
        }
    }
});

async function updateDatatableDeveloperToolsXRay() {
    blockUI('#section-developertools-xray-samplingrules-datatable');

    await sdkcall("XRay", "getSamplingRules", {
        // no params
    }, false).then(async (data) => {
        $('#section-developertools-xray-samplingrules-datatable').bootstrapTable('removeAll');

        data.SamplingRuleRecords.forEach(samplingrule => {
            $('#section-developertools-xray-samplingrules-datatable').bootstrapTable('append', [{
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
        });
    }).catch(() => { });

    unblockUI('#section-developertools-xray-samplingrules-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
