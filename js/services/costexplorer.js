/* ========================================================================== */
// Cost Explorer
/* ========================================================================== */

sections.push({
    'category': 'AWS Cost Management',
    'service': 'Cost Explorer',
    'resourcetypes': {
        'Cost Categories': {
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
                        field: 'ruleversion',
                        title: 'Rule Version',
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

async function updateDatatableAWSCostManagementCostExplorer() {
    blockUI('#section-awscostmanagement-costexplorer-costcategories-datatable');

    await sdkcall("CostExplorer", "listCostCategoryDefinitions", {
        // no params
    }, true).then(async (data) => {
        $('#section-awscostmanagement-costexplorer-costcategories-datatable').bootstrapTable('removeAll');

        await Promise.all(data.CostCategoryReferences.map(ccr => {
            return sdkcall("CostExplorer", "describeCostCategoryDefinition", {
                CostCategoryArn: ccr.CostCategoryArn
            }, true).then(async (data) => {
                $('#section-awscostmanagement-costexplorer-costcategories-datatable').deferredBootstrapTable('append', [{
                    f2id: data.CostCategory.CostCategoryArn,
                    f2type: 'costexplorer.costcategory',
                    f2data: data.CostCategory,
                    f2region: region,
                    name: data.CostCategory.Name,
                    ruleversion: data.CostCategory.RuleVersion
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-awscostmanagement-costexplorer-costcategories-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "costexplorer.costcategory") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Rules'] = obj.data.Rules;
        reqParams.cfn['RuleVersion'] = obj.data.RuleVersion;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('costexplorer', obj.id, 'AWS::CE::CostCategory'),
            'region': obj.region,
            'service': 'costexplorer',
            'type': 'AWS::CE::CostCategory',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.CostCategoryArn
            }
        });
    } else {
        return false;
    }

    return true;
});
