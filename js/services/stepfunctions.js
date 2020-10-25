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
        $('#section-applicationintegration-stepfunctions-statemachines-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.stateMachines.map(async (stateMachine) => {
            return sdkcall("StepFunctions", "describeStateMachine", {
                stateMachineArn: stateMachine.stateMachineArn
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.stateMachineArn);

                $('#section-applicationintegration-stepfunctions-statemachines-datatable').deferredBootstrapTable('append', [{
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
        $('#section-applicationintegration-stepfunctions-activities-datatable').deferredBootstrapTable('removeAll');

        if (data.activities) {
            await Promise.all(data.activities.map(async (activity) => {
                return sdkcall("StepFunctions", "describeActivity", {
                    activityArn: activity.activityArn
                }, true).then(async (data) => {
                    data['Tags'] = await getResourceTags(data.activityArn);

                    $('#section-applicationintegration-stepfunctions-activities-datatable').deferredBootstrapTable('append', [{
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
    if (obj.type == "stepfunctions.statemachine") {
        reqParams.cfn['StateMachineName'] = obj.data.name;
        reqParams.tf['name'] = obj.data.name;
        reqParams.cfn['DefinitionString'] = obj.data.definition;
        reqParams.tf['definition'] = obj.data.definition;
        reqParams.cfn['RoleArn'] = obj.data.roleArn;
        reqParams.tf['role_arn'] = obj.data.roleArn;
        reqParams.cfn['StateMachineType'] = obj.data.type;
        if (obj.data.loggingConfiguration) {
            var destinations = null;
            
            if (obj.data.loggingConfiguration.destinations) {
                destinations = [];
                obj.data.loggingConfiguration.destinations.forEach(destination => {
                    if (destination.cloudWatchLogsLogGroup) {
                        destinations.push({
                            'CloudWatchLogsLogGroup': {
                                'LogGroupArn': destination.cloudWatchLogsLogGroup.logGroupArn
                            }
                        })
                    }
                });
            }

            reqParams.cfn['LoggingConfiguration'] = {
                'Destinations': destinations,
                'IncludeExecutionData': obj.data.loggingConfiguration.includeExecutionData,
                'Level': obj.data.loggingConfiguration.level
            };
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        /*
        SKIPPED: DefinitionS3Location
        SKIPPED: DefinitionSubstitutions
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('stepfunctions', obj.id, 'AWS::StepFunctions::StateMachine'),
            'region': obj.region,
            'service': 'stepfunctions',
            'type': 'AWS::StepFunctions::StateMachine',
            'terraformType': 'aws_sfn_state_machine',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.stateMachineArn,
                'GetAtt': {
                    'Name': obj.data.name
                }
            }
        });
    } else if (obj.type == "stepfunctions.activity") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.tf['name'] = obj.data.name;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('stepfunctions', obj.id, 'AWS::StepFunctions::Activity'),
            'region': obj.region,
            'service': 'stepfunctions',
            'type': 'AWS::StepFunctions::Activity',
            'terraformType': 'aws_sfn_activity',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.activityArn,
                'GetAtt': {
                    'Name': obj.data.name
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
