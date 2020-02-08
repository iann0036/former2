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
        }
    }
});

async function updateDatatableAWSCostManagementBudgets() {
    blockUI('#section-awscostmanagement-budgets-budgets-datatable');

    await sdkcall("STS", "getCallerIdentity", {
        // no params
    }, true).then(async (data) => {
        var accountId = data.Account;

        await sdkcall("Budgets", "describeBudgets", {
            AccountId: accountId
        }, true).then(async (data) => {
            $('#section-awscostmanagement-budgets-budgets-datatable').bootstrapTable('removeAll');

            if (data.Budgets) {
                await Promise.all(data.Budgets.map(budget => {
                    return sdkcall("Budgets", "describeNotificationsForBudget", {
                        AccountId: accountId,
                        BudgetName: budget.BudgetName
                    }, true).then(async (data) => {
                        // TODO: map data

                        $('#section-awscostmanagement-budgets-budgets-datatable').bootstrapTable('append', [{
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
                }));
            }

            unblockUI('#section-awscostmanagement-budgets-budgets-datatable');
        });
    });
}
