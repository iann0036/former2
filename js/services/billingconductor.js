/* ========================================================================== */
// Billing Conductor
/* ========================================================================== */

sections.push({
    'category': 'AWS Cost Management',
    'service': 'Billing Conductor',
    'resourcetypes': {
        'Billing Groups': {
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
        'Custom Line Items': {
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
        'Pricing Plans': {
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
        'Pricing Rules': {
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
        }
    }
});

async function updateDatatableAWSCostManagementBillingConductor() {
    blockUI('#section-awscostmanagement-billingconductor-billinggroups-datatable');
    blockUI('#section-awscostmanagement-billingconductor-customlineitems-datatable');
    blockUI('#section-awscostmanagement-billingconductor-pricingplans-datatable');
    blockUI('#section-awscostmanagement-billingconductor-pricingrules-datatable');

    await sdkcall("Billingconductor", "listBillingGroups", {
        // no params
    }, true).then(async (data) => {
        $('#section-awscostmanagement-billingconductor-billinggroups-datatable').deferredBootstrapTable('removeAll');

        data.BillingGroups.forEach(billinggroup => {
            $('#section-awscostmanagement-billingconductor-billinggroups-datatable').deferredBootstrapTable('append', [{
                f2id: billinggroup.Arn,
                f2type: 'billingconductor.billinggroup',
                f2data: billinggroup,
                f2region: region,
                name: billinggroup.Name,
                description: billinggroup.Description
            }]);
        });
    }).catch(() => { });

    await sdkcall("Billingconductor", "listCustomLineItems", {
        // no params
    }, true).then(async (data) => {
        $('#section-awscostmanagement-billingconductor-customlineitems-datatable').deferredBootstrapTable('removeAll');

        data.CustomLineItems.forEach(customlineitem => {
            $('#section-awscostmanagement-billingconductor-customlineitems-datatable').deferredBootstrapTable('append', [{
                f2id: customlineitem.Arn,
                f2type: 'billingconductor.customlineitem',
                f2data: customlineitem,
                f2region: region,
                name: customlineitem.Name,
                description: customlineitem.Description
            }]);
        });
    }).catch(() => { });

    await sdkcall("Billingconductor", "listPricingPlans", {
        // no params
    }, true).then(async (data) => {
        $('#section-awscostmanagement-billingconductor-pricingplans-datatable').deferredBootstrapTable('removeAll');

        data.PricingPlans.forEach(async (pricingplan) => {
            await sdkcall("Billingconductor", "listPricingRulesAssociatedToPricingPlan", {
                PricingPlanArn: pricingplan.Arn
            }, true).then(async (associations) => {
                pricingplan['PricingRuleArns'] = associations.PricingRuleArns;
            });

            $('#section-awscostmanagement-billingconductor-pricingplans-datatable').deferredBootstrapTable('append', [{
                f2id: pricingplan.Arn,
                f2type: 'billingconductor.pricingplan',
                f2data: pricingplan,
                f2region: region,
                name: pricingplan.Name,
                description: pricingplan.Description
            }]);
        });
    }).catch(() => { });

    await sdkcall("Billingconductor", "listPricingRules", {
        // no params
    }, true).then(async (data) => {
        $('#section-awscostmanagement-billingconductor-pricingrules-datatable').deferredBootstrapTable('removeAll');

        data.PricingRules.forEach(pricingrule => {
            $('#section-awscostmanagement-billingconductor-pricingrules-datatable').deferredBootstrapTable('append', [{
                f2id: pricingrule.Arn,
                f2type: 'billingconductor.pricingrule',
                f2data: pricingrule,
                f2region: region,
                name: pricingrule.Name,
                description: pricingrule.Description
            }]);
        });
    }).catch(() => { });

    unblockUI('#section-awscostmanagement-billingconductor-billinggroups-datatable');
    unblockUI('#section-awscostmanagement-billingconductor-customlineitems-datatable');
    unblockUI('#section-awscostmanagement-billingconductor-pricingplans-datatable');
    unblockUI('#section-awscostmanagement-billingconductor-pricingrules-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "billingconductor.billinggroup") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['PrimaryAccountId'] = obj.data.PrimaryAccountId;
        reqParams.cfn['ComputationPreference'] = obj.data.ComputationPreference;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('billingconductor', obj.id, 'AWS::BillingConductor::BillingGroup'),
            'region': obj.region,
            'service': 'billingconductor',
            'type': 'AWS::BillingConductor::BillingGroup',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Arn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "billingconductor.customlineitem") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['BillingGroupArn'] = obj.data.BillingGroupArn;
        reqParams.cfn['CustomLineItemChargeDetails'] = obj.data.ChargeDetails;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('billingconductor', obj.id, 'AWS::BillingConductor::CustomLineItem'),
            'region': obj.region,
            'service': 'billingconductor',
            'type': 'AWS::BillingConductor::CustomLineItem',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Arn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "billingconductor.pricingplan") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['PricingRuleArns'] = obj.data.PricingRuleArns;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('billingconductor', obj.id, 'AWS::BillingConductor::PricingPlan'),
            'region': obj.region,
            'service': 'billingconductor',
            'type': 'AWS::BillingConductor::PricingPlan',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Arn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "billingconductor.pricingrule") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.cfn['Service'] = obj.data.Service;
        reqParams.cfn['Scope'] = obj.data.Scope;
        reqParams.cfn['ModifierPercentage'] = obj.data.ModifierPercentage;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('billingconductor', obj.id, 'AWS::BillingConductor::PricingRule'),
            'region': obj.region,
            'service': 'billingconductor',
            'type': 'AWS::BillingConductor::PricingRule',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Arn': obj.data.Arn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
