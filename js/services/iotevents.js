/* ========================================================================== */
// IoT Events
/* ========================================================================== */

sections.push({
    'category': 'Internet of Things',
    'service': 'Events',
    'resourcetypes': {
        'Detector Models': {
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
                    },
                    {
                        field: 'rolearn',
                        title: 'Role ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Inputs': {
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

async function updateDatatableInternetofThingsEvents() {
    blockUI('#section-internetofthings-events-detectormodels-datatable');
    blockUI('#section-internetofthings-events-inputs-datatable');

    await sdkcall("IoTEvents", "listDetectorModels", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-events-detectormodels-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.detectorModelSummaries.map(async (detectorModel) => {
            return sdkcall("IoTEvents", "describeDetectorModel", {
                detectorModelName: detectorModel.detectorModelName
            }, true).then(data => {
                $('#section-internetofthings-events-detectormodels-datatable').deferredBootstrapTable('append', [{
                    f2id: data.detectorModel.detectorModelConfiguration.detectorModelArn,
                    f2type: 'iotevents.detectormodel',
                    f2data: data.detectorModel,
                    f2region: region,
                    name: data.detectorModel.detectorModelConfiguration.detectorModelName,
                    description: data.detectorModel.detectorModelConfiguration.detectorModelDescription,
                    rolearn: data.detectorModel.detectorModelConfiguration.roleArn
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("IoTEvents", "listInputs", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-events-inputs-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.inputSummaries.map(input => {
            return sdkcall("IoTEvents", "describeInput", {
                inputName: input.inputName
            }, true).then(data => {
                $('#section-internetofthings-events-inputs-datatable').deferredBootstrapTable('append', [{
                    f2id: data.input.inputConfiguration.inputArn,
                    f2type: 'iotevents.input',
                    f2data: data.input,
                    f2region: region,
                    name: data.input.inputConfiguration.inputName,
                    description: data.input.inputConfiguration.inputDescription
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-internetofthings-events-detectormodels-datatable');
    unblockUI('#section-internetofthings-events-inputs-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "iotevents.detectormodel") {
        var states = [];
        data.detectorModelDefinition.states.forEach(state => {
            var onenter = null;
            var onexit = null;
            var oninput = null;
            if (state.onInput) {
                var events = null;
                var transitionevents = null;
                if (state.onInput.events) {
                    events = [];
                    state.onInput.events.forEach(event => {
                        var actions = null;
                        if (event.actions) {
                            actions = [];
                            event.actions.forEach(action => {
                                var cleartimer = null;
                                var firehose = null;
                                var iotevents = null;
                                var iottopicpublish = null;
                                var lambda = null;
                                var resettimer = null;
                                var settimer = null;
                                var setvariable = null;
                                var sns = null;
                                var sqs = null;

                                if (action.setVariable) {
                                    setvariable = {
                                        'VariableName': action.setVariable.variableName,
                                        'Value': action.setVariable.value
                                    };
                                }
                                if (action.sns) {
                                    sns = {
                                        'TargetArn': action.sns.targetArn
                                    };
                                }
                                if (action.iotTopicPublish) {
                                    iottopicpublish = {
                                        'MqttTopic': action.iotTopicPublish.mqttTopic
                                    };
                                }
                                if (action.setTimer) {
                                    settimer = {
                                        'TimerName': action.setTimer.timerName,
                                        'Seconds': action.setTimer.seconds
                                    };
                                }
                                if (action.clearTimer) {
                                    cleartimer = {
                                        'TimerName': action.clearTimer.timerName
                                    };
                                }
                                if (action.resetTimer) {
                                    resettimer = {
                                        'TimerName': action.resetTimer.timerName
                                    };
                                }
                                if (action.lambda) {
                                    lambda = {
                                        'FunctionArn': action.lambda.functionArn
                                    };
                                }
                                if (action.iotEvents) {
                                    iotevents = {
                                        'InputName': action.iotEvents.inputName
                                    };
                                }
                                if (action.sqs) {
                                    sqs = {
                                        'QueueUrl': action.sqs.queueUrl,
                                        'UseBase64': action.sqs.useBase64
                                    };
                                }
                                if (action.firehose) {
                                    firehose = {
                                        'DeliveryStreamName': action.firehose.deliveryStreamName,
                                        'Separator': action.firehose.separator
                                    };
                                }

                                actions.push({
                                    'ClearTimer': cleartimer,
                                    'Firehose': firehose,
                                    'IotEvents': iotevents,
                                    'IotTopicPublish': iottopicpublish,
                                    'Lambda': lambda,
                                    'ResetTimer': resettimer,
                                    'SetTimer': settimer,
                                    'SetVariable': setvariable,
                                    'Sns': sns,
                                    'Sqs': sqs
                                });
                            });
                        }
                        events.push({
                            'Actions': actions,
                            'Condition': event.condition,
                            'EventName': event.eventName
                        });
                    });
                }
                if (state.onInput.transitionEvents) {
                    transitionevents = [];
                    state.onInput.transitionEvents.forEach(event => {
                        var actions = null;
                        if (event.actions) {
                            actions = [];
                            event.actions.forEach(action => {
                                var cleartimer = null;
                                var firehose = null;
                                var iotevents = null;
                                var iottopicpublish = null;
                                var lambda = null;
                                var resettimer = null;
                                var settimer = null;
                                var setvariable = null;
                                var sns = null;
                                var sqs = null;

                                if (action.setVariable) {
                                    setvariable = {
                                        'VariableName': action.setVariable.variableName,
                                        'Value': action.setVariable.value
                                    };
                                }
                                if (action.sns) {
                                    sns = {
                                        'TargetArn': action.sns.targetArn
                                    };
                                }
                                if (action.iotTopicPublish) {
                                    iottopicpublish = {
                                        'MqttTopic': action.iotTopicPublish.mqttTopic
                                    };
                                }
                                if (action.setTimer) {
                                    settimer = {
                                        'TimerName': action.setTimer.timerName,
                                        'Seconds': action.setTimer.seconds
                                    };
                                }
                                if (action.clearTimer) {
                                    cleartimer = {
                                        'TimerName': action.clearTimer.timerName
                                    };
                                }
                                if (action.resetTimer) {
                                    resettimer = {
                                        'TimerName': action.resetTimer.timerName
                                    };
                                }
                                if (action.lambda) {
                                    lambda = {
                                        'FunctionArn': action.lambda.functionArn
                                    };
                                }
                                if (action.iotEvents) {
                                    iotevents = {
                                        'InputName': action.iotEvents.inputName
                                    };
                                }
                                if (action.sqs) {
                                    sqs = {
                                        'QueueUrl': action.sqs.queueUrl,
                                        'UseBase64': action.sqs.useBase64
                                    };
                                }
                                if (action.firehose) {
                                    firehose = {
                                        'DeliveryStreamName': action.firehose.deliveryStreamName,
                                        'Separator': action.firehose.separator
                                    };
                                }

                                actions.push({
                                    'ClearTimer': cleartimer,
                                    'Firehose': firehose,
                                    'IotEvents': iotevents,
                                    'IotTopicPublish': iottopicpublish,
                                    'Lambda': lambda,
                                    'ResetTimer': resettimer,
                                    'SetTimer': settimer,
                                    'SetVariable': setvariable,
                                    'Sns': sns,
                                    'Sqs': sqs
                                });
                            });
                        }
                        transitionevents.push({
                            'Actions': actions,
                            'Condition': event.condition,
                            'EventName': event.eventName,
                            'NextState': nextState
                        });
                    });
                }
                oninput = {
                    'Events': events,
                    'TransitionEvents': transitionevents
                };
            }
            if (state.onEnter) {
                var events = null;
                if (state.onEnter.events) {
                    events = [];
                    state.onEnter.events.forEach(event => {
                        var actions = null;
                        if (event.actions) {
                            actions = [];
                            event.actions.forEach(action => {
                                var cleartimer = null;
                                var firehose = null;
                                var iotevents = null;
                                var iottopicpublish = null;
                                var lambda = null;
                                var resettimer = null;
                                var settimer = null;
                                var setvariable = null;
                                var sns = null;
                                var sqs = null;

                                if (action.setVariable) {
                                    setvariable = {
                                        'VariableName': action.setVariable.variableName,
                                        'Value': action.setVariable.value
                                    };
                                }
                                if (action.sns) {
                                    sns = {
                                        'TargetArn': action.sns.targetArn
                                    };
                                }
                                if (action.iotTopicPublish) {
                                    iottopicpublish = {
                                        'MqttTopic': action.iotTopicPublish.mqttTopic
                                    };
                                }
                                if (action.setTimer) {
                                    settimer = {
                                        'TimerName': action.setTimer.timerName,
                                        'Seconds': action.setTimer.seconds
                                    };
                                }
                                if (action.clearTimer) {
                                    cleartimer = {
                                        'TimerName': action.clearTimer.timerName
                                    };
                                }
                                if (action.resetTimer) {
                                    resettimer = {
                                        'TimerName': action.resetTimer.timerName
                                    };
                                }
                                if (action.lambda) {
                                    lambda = {
                                        'FunctionArn': action.lambda.functionArn
                                    };
                                }
                                if (action.iotEvents) {
                                    iotevents = {
                                        'InputName': action.iotEvents.inputName
                                    };
                                }
                                if (action.sqs) {
                                    sqs = {
                                        'QueueUrl': action.sqs.queueUrl,
                                        'UseBase64': action.sqs.useBase64
                                    };
                                }
                                if (action.firehose) {
                                    firehose = {
                                        'DeliveryStreamName': action.firehose.deliveryStreamName,
                                        'Separator': action.firehose.separator
                                    };
                                }

                                actions.push({
                                    'ClearTimer': cleartimer,
                                    'Firehose': firehose,
                                    'IotEvents': iotevents,
                                    'IotTopicPublish': iottopicpublish,
                                    'Lambda': lambda,
                                    'ResetTimer': resettimer,
                                    'SetTimer': settimer,
                                    'SetVariable': setvariable,
                                    'Sns': sns,
                                    'Sqs': sqs
                                });
                            });
                        }
                        events.push({
                            'Actions': actions,
                            'Condition': event.condition,
                            'EventName': event.eventName
                        });
                    });
                }
                onenter = {
                    'Events': events
                };
            }
            if (state.onExit) {
                var events = null;
                if (state.onExit.events) {
                    events = [];
                    state.onExit.events.forEach(event => {
                        var actions = null;
                        if (event.actions) {
                            actions = [];
                            event.actions.forEach(action => {
                                var cleartimer = null;
                                var firehose = null;
                                var iotevents = null;
                                var iottopicpublish = null;
                                var lambda = null;
                                var resettimer = null;
                                var settimer = null;
                                var setvariable = null;
                                var sns = null;
                                var sqs = null;

                                if (action.setVariable) {
                                    setvariable = {
                                        'VariableName': action.setVariable.variableName,
                                        'Value': action.setVariable.value
                                    };
                                }
                                if (action.sns) {
                                    sns = {
                                        'TargetArn': action.sns.targetArn
                                    };
                                }
                                if (action.iotTopicPublish) {
                                    iottopicpublish = {
                                        'MqttTopic': action.iotTopicPublish.mqttTopic
                                    };
                                }
                                if (action.setTimer) {
                                    settimer = {
                                        'TimerName': action.setTimer.timerName,
                                        'Seconds': action.setTimer.seconds
                                    };
                                }
                                if (action.clearTimer) {
                                    cleartimer = {
                                        'TimerName': action.clearTimer.timerName
                                    };
                                }
                                if (action.resetTimer) {
                                    resettimer = {
                                        'TimerName': action.resetTimer.timerName
                                    };
                                }
                                if (action.lambda) {
                                    lambda = {
                                        'FunctionArn': action.lambda.functionArn
                                    };
                                }
                                if (action.iotEvents) {
                                    iotevents = {
                                        'InputName': action.iotEvents.inputName
                                    };
                                }
                                if (action.sqs) {
                                    sqs = {
                                        'QueueUrl': action.sqs.queueUrl,
                                        'UseBase64': action.sqs.useBase64
                                    };
                                }
                                if (action.firehose) {
                                    firehose = {
                                        'DeliveryStreamName': action.firehose.deliveryStreamName,
                                        'Separator': action.firehose.separator
                                    };
                                }

                                actions.push({
                                    'ClearTimer': cleartimer,
                                    'Firehose': firehose,
                                    'IotEvents': iotevents,
                                    'IotTopicPublish': iottopicpublish,
                                    'Lambda': lambda,
                                    'ResetTimer': resettimer,
                                    'SetTimer': settimer,
                                    'SetVariable': setvariable,
                                    'Sns': sns,
                                    'Sqs': sqs
                                });
                            });
                        }
                        events.push({
                            'Actions': actions,
                            'Condition': event.condition,
                            'EventName': event.eventName
                        });
                    });
                }
                onexit = {
                    'Events': events
                };
            }
            states.push({
                'OnEnter': onenter,
                'OnExit': onexit,
                'OnInput': oninput,
                'StateName': state.stateName
            });
        });
        reqParams.cfn['DetectorModelDefinition'] = {
            'InitialStateName': obj.data.detectorModelDefinition.initialStateName,
            'States': states
        };
        reqParams.cfn['DetectorModelDescription'] = obj.data.detectorModelConfiguration.detectorModelDescription;
        reqParams.cfn['DetectorModelName'] = obj.data.detectorModelConfiguration.detectorModelName;
        reqParams.cfn['Key'] = obj.data.detectorModelConfiguration.key;
        reqParams.cfn['RoleArn'] = obj.data.detectorModelConfiguration.roleArn;

        /*
        TODO:
        Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iotevents', obj.id, 'AWS::IoTEvents::DetectorModel'),
            'region': obj.region,
            'service': 'iotevents',
            'type': 'AWS::IoTEvents::DetectorModel',
            'options': reqParams
        });
    } else if (obj.type == "iotevents.input") {
        if (obj.data.inputDefinition) {
            var attributes = [];
            obj.data.inputDefinition.attributes.forEach(attribute => {
                attributes.push({
                    'JsonPath': attribute.jsonPath
                });
            });
            reqParams.cfn['InputDefinition'] = {
                'Attributes': attributes
            };
        }
        reqParams.cfn['InputDescription'] = obj.data.inputConfiguration.inputDescription;
        reqParams.cfn['InputName'] = obj.data.inputConfiguration.inputName;

        /*
        TODO:
        Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iotevents', obj.id, 'AWS::IoTEvents::Input'),
            'region': obj.region,
            'service': 'iotevents',
            'type': 'AWS::IoTEvents::Input',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
