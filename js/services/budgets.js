/* ========================================================================== */
// Budgets
/* ========================================================================== */

sections.push({
    'category': 'AWS Cost Management',
    'service': 'Budgets',
    'resourcetypes': {
        'Budgets': {
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
                        field: 'amount',
                        title: 'Amount',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'unit',
                        title: 'Unit',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'timeunit',
                        title: 'Time Unit',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Budget Actions': {
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
                        title: 'Budget Name',
                        field: 'budgetname',
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
                        field: 'actiontype',
                        title: 'Action Type',
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

async function updateDatatableAWSCostManagementBudgets() {
    blockUI('#section-awscostmanagement-budgets-budgets-datatable');
    blockUI('#section-awscostmanagement-budgets-budgetactions-datatable');

    await sdkcall("STS", "getCallerIdentity", {
        // no params
    }, true).then(async (data) => {
        var accountId = data.Account;

        await sdkcall("Budgets", "describeBudgets", {
            AccountId: accountId
        }, true).then(async (data) => {
            $('#section-awscostmanagement-budgets-budgets-datatable').deferredBootstrapTable('removeAll');

            if (data.Budgets) {
                await Promise.all(data.Budgets.map(async (budget) => {
                    await sdkcall("Budgets", "describeNotificationsForBudget", {
                        AccountId: accountId,
                        BudgetName: budget.BudgetName
                    }, true).then(async (data) => {
                        $('#section-awscostmanagement-budgets-budgets-datatable').deferredBootstrapTable('append', [{
                            f2id: budget.BudgetName,
                            f2type: 'budgets.budget',
                            f2data: budget,
                            f2region: region,
                            f2link: 'https://console.aws.amazon.com/billing/home#/budgets/details?name=' + budget.BudgetName,
                            name: budget.BudgetName,
                            type: budget.BudgetType,
                            timeunit: budget.TimeUnit,
                            amount: budget.BudgetLimit ? budget.BudgetLimit.Amount : 'N/A',
                            unit: budget.BudgetLimit ? budget.BudgetLimit.Unit : 'N/A'
                        }]);
                    });

                    return sdkcall("Budgets", "describeBudgetActionsForBudget", {
                        AccountId: accountId,
                        BudgetName: budget.BudgetName
                    }, true).then(async (data) => {
                        data.Actions.forEach(action => {
                            $('#section-awscostmanagement-budgets-budgetactions-datatable').deferredBootstrapTable('append', [{
                                f2id: action.ActionId,
                                f2type: 'budgets.budgetaction',
                                f2data: action,
                                f2region: region,
                                budgetname: action.BudgetName,
                                actiontype: action.ActionType
                            }]);
                        });
                    });
                }));
            }
        });
    });

    unblockUI('#section-awscostmanagement-budgets-budgets-datatable');
    unblockUI('#section-awscostmanagement-budgets-budgetactions-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "budgets.budget") {
        reqParams.cfn['Budget'] = {
            'BudgetLimit': obj.data.BudgetLimit,
            'TimePeriod': obj.data.TimePeriod,
            'TimeUnit': obj.data.TimeUnit,
            'CostFilters': obj.data.CostFilters,
            'BudgetName': obj.data.BudgetName,
            'CostTypes': obj.data.CostTypes,
            'BudgetType': obj.data.BudgetType,
            'PlannedBudgetLimits': obj.data.PlannedBudgetLimits
        };
        if (obj.data.BudgetLimit) {
            reqParams.tf['limit_amount'] = obj.data.BudgetLimit.Amount;
            reqParams.tf['limit_unit'] = obj.data.BudgetLimit.Unit;
        }
        if (obj.data.TimePeriod && obj.data.TimePeriod.Start && obj.data.TimePeriod.Start.length) {
            reqParams.tf['time_period_end'] = obj.data.TimePeriod.End;
            reqParams.tf['time_period_start'] = obj.data.TimePeriod.Start;
        }
        reqParams.tf['time_unit'] = obj.data.TimeUnit;
        reqParams.tf['cost_filters'] = obj.data.CostFilters;
        reqParams.tf['name'] = obj.data.BudgetName;
        if (obj.data.CostTypes) {
            reqParams.tf['cost_types'] = {
                'include_support': obj.data.CostTypes.IncludeSupport,
                'include_other_subscription': obj.data.CostTypes.IncludeOtherSubscription,
                'include_tax': obj.data.CostTypes.IncludeTax,
                'include_subscription': obj.data.CostTypes.IncludeSubscription,
                'use_blended': obj.data.CostTypes.UseBlended,
                'include_upfront': obj.data.CostTypes.IncludeUpfront,
                'include_discount': obj.data.CostTypes.IncludeDiscount,
                'include_credit': obj.data.CostTypes.IncludeCredit,
                'include_recurring': obj.data.CostTypes.IncludeRecurring,
                'use_amortized': obj.data.CostTypes.UseAmortized,
                'include_refund': obj.data.CostTypes.IncludeRefund
            }
        }
        reqParams.tf['budget_type'] = obj.data.BudgetType;

        /*
        TODO:
        NotificationsWithSubscribers
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('budgets', obj.id, 'AWS::Budgets::Budget'),
            'region': obj.region,
            'service': 'budgets',
            'type': 'AWS::Budgets::Budget',
            'terraformType': 'aws_budgets_budget',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.BudgetName
            }
        });
    } else if (obj.type == "budgets.budgetaction") {
        reqParams.cfn['BudgetName'] = obj.data.BudgetName;
        reqParams.cfn['NotificationType'] = obj.data.NotificationType;
        reqParams.cfn['ActionType'] = obj.data.ActionType;
        reqParams.cfn['ActionThreshold'] = {
            'Type': obj.data.ActionThreshold.ActionThresholdType,
            'Value': obj.data.ActionThreshold.ActionThresholdValue
        };
        var ssmactiondefinition = null;
        if (obj.data.Definition.SsmActionDefinition) {
            ssmactiondefinition = {
                'Subtype': obj.data.Definition.SsmActionDefinition.ActionSubType,
                'Region': obj.data.Definition.SsmActionDefinition.Region,
                'InstanceIds': obj.data.Definition.SsmActionDefinition.InstanceIds
            };
        }
        reqParams.cfn['Definition'] = {
            'IamActionDefinition': obj.data.Definition.IamActionDefinition,
            'ScpActionDefinition': obj.data.Definition.ScpActionDefinition,
            'SsmActionDefinition': ssmactiondefinition
        };
        reqParams.cfn['ExecutionRoleArn'] = obj.data.ExecutionRoleArn;
        reqParams.cfn['ApprovalModel'] = obj.data.ApprovalModel;
        var subscribers = null;
        if (obj.data.Subscribers) {
            subscribers = [];
            obj.data.Subscribers.forEach(subscriber => {
                subscribers.push({
                    'Type': subscriber.SubscriptionType,
                    'Address': subscriber.Address
                });
            });
        }
        reqParams.cfn['Subscribers'] = obj.data.Subscribers;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('budgets', obj.id, 'AWS::Budgets::BudgetsAction'),
            'region': obj.region,
            'service': 'budgets',
            'type': 'AWS::Budgets::BudgetsAction',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
