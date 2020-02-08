/* ========================================================================== */
// Step Functions
/* ========================================================================== */

sections.push({
    'category': 'Application Integration',
    'service': 'Step Functions',
    'resourcetypes': {
        'State Machines': {
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
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Activities': {
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
                        field: 'activityarn',
                        title: 'Activity ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creaiontime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableApplicationIntegrationStepFunctions() {
    blockUI('#section-applicationintegration-stepfunctions-statemachines-datatable');
    blockUI('#section-applicationintegration-stepfunctions-activities-datatable');

    await sdkcall("StepFunctions", "listStateMachines", {
        // no params
    }, true).then(async (data) => {
        $('#section-applicationintegration-stepfunctions-statemachines-datatable').bootstrapTable('removeAll');

        await Promise.all(data.stateMachines.map(stateMachine => {
            return sdkcall("StepFunctions", "describeStateMachine", {
                stateMachineArn: stateMachine.stateMachineArn
            }, true).then((data) => {
                $('#section-applicationintegration-stepfunctions-statemachines-datatable').bootstrapTable('append', [{
                    f2id: data.stateMachineArn,
                    f2type: 'stepfunctions.statemachine',
                    f2data: data,
                    f2region: region,
                    name: data.name,
                    creationtime: data.creationDate
                }]);
            });
        }));

        unblockUI('#section-applicationintegration-stepfunctions-statemachines-datatable');
    });

    await sdkcall("StepFunctions", "listActivities", {
        // no params
    }, true).then(async (data) => {
        $('#section-applicationintegration-stepfunctions-statemachines-datatable').bootstrapTable('removeAll');

        if (data.activities) {
            await Promise.all(data.activities.map(activity => {
                return sdkcall("StepFunctions", "describeActivity", {
                    activityArn: activity.activityArn
                }, true).then((data) => {
                    $('#section-applicationintegration-stepfunctions-statemachines-datatable').bootstrapTable('append', [{
                        f2id: data.activityArn,
                        f2type: 'stepfunctions.activity',
                        f2data: data,
                        f2region: region,
                        name: data.name,
                        activityarn: data.activityArn,
                        creaiontime: data.creationDate
                    }]);
                });
            }));
        }

        unblockUI('#section-applicationintegration-stepfunctions-activities-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
