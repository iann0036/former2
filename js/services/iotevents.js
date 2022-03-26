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
        },
        'Alarm Models': {
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
    blockUI('#section-internetofthings-events-alarmmodels-datatable');

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

    await sdkcall("IoTEvents", "listAlarmModels", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-events-alarmmodels-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.alarmModelSummaries.map(alarmmodel => {
            return sdkcall("IoTEvents", "describeAlarmModel", {
                alarmModelName: alarmmodel.alarmModelName
            }, true).then(data => {
                $('#section-internetofthings-events-alarmmodels-datatable').deferredBootstrapTable('append', [{
                    f2id: data.alarmModelArn,
                    f2type: 'iotevents.alarmmodel',
                    f2data: data,
                    f2region: region,
                    name: data.alarmModelName,
                    description: data.alarmModelDescription
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-internetofthings-events-detectormodels-datatable');
    unblockUI('#section-internetofthings-events-inputs-datatable');
    unblockUI('#section-internetofthings-events-alarmmodels-datatable');
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
    } else if (obj.type == "iotevents.alarmmodel") {
        reqParams.cfn['AlarmModelName'] = obj.data.alarmModelName;
        reqParams.cfn['AlarmModelDescription'] = obj.data.alarmModelDescription;
        reqParams.cfn['RoleArn'] = obj.data.roleArn;
        reqParams.cfn['Key'] = obj.data.key;
        reqParams.cfn['Severity'] = obj.data.severity;
        if (obj.data.alarmRule) {
            var simplerule = null;
            if (obj.data.alarmRule.simpleRule) {
                simplerule = {
                    'ComparisonOperator': obj.data.alarmRule.simpleRule.comparisonOperator,
                    'InputProperty': obj.data.alarmRule.simpleRule.inputProperty,
                    'Threshold': obj.data.alarmRule.simpleRule.threshold
                };
            }
            reqParams.cfn['AlarmRule'] = {
                'SimpleRule': simplerule
            }
        }
        if (obj.data.alarmEventActions) {
            var alarmactions = null;
            if (obj.data.alarmEventActions.alarmActions) {
                alarmactions = [];
                obj.data.alarmEventActions.alarmActions.forEach(alarmaction => {
                    var dynamodb = null;
                    if (alarmaction.dynamoDB) {
                        var payload = null;
                        if (alarmaction.dynamoDB.payload) {
                            payload = {
                                'ContentExpression': alarmaction.dynamoDB.payload.contentExpression,
                                'Type': alarmaction.dynamoDB.payload.type
                            };
                        }
                        dynamodb = {
                            'HashKeyField': alarmaction.dynamoDB.hashKeyField,
                            'HashKeyType': alarmaction.dynamoDB.hashKeyType,
                            'HashKeyValue': alarmaction.dynamoDB.hashKeyValue,
                            'Operation': alarmaction.dynamoDB.operation,
                            'Payload': payload,
                            'PayloadField': alarmaction.dynamoDB.payloadField,
                            'RangeKeyField': alarmaction.dynamoDB.rangeKeyField,
                            'RangeKeyType': alarmaction.dynamoDB.rangeKeyType,
                            'RangeKeyValue': alarmaction.dynamoDB.rangeKeyValue,
                            'TableName': alarmaction.dynamoDB.tableName
                        };
                    }
                    var dynamodbv2 = null;
                    if (alarmaction.dynamoDBv2) {
                        var payload = null;
                        if (alarmaction.dynamoDBv2.payload) {
                            payload = {
                                'ContentExpression': alarmaction.dynamoDBv2.payload.contentExpression,
                                'Type': alarmaction.dynamoDBv2.payload.type
                            };
                        }
                        dynamodbv2 = {
                            'Payload': payload,
                            'TableName': alarmaction.dynamoDBv2.tableName
                        };
                    }
                    var firehose = null;
                    if (alarmaction.firehose) {
                        var payload = null;
                        if (alarmaction.firehose.payload) {
                            payload = {
                                'ContentExpression': alarmaction.firehose.payload.contentExpression,
                                'Type': alarmaction.firehose.payload.type
                            };
                        }
                        firehose = {
                            'Payload': payload,
                            'DeliveryStreamName': alarmaction.firehose.deliveryStreamName,
                            'Separator': alarmaction.firehose.separator
                        };
                    }
                    var iotevents = null;
                    if (alarmaction.iotEvents) {
                        var payload = null;
                        if (alarmaction.iotEvents.payload) {
                            payload = {
                                'ContentExpression': alarmaction.iotEvents.payload.contentExpression,
                                'Type': alarmaction.iotEvents.payload.type
                            };
                        }
                        iotevents = {
                            'Payload': payload,
                            'InputName': alarmaction.iotEvents.inputName
                        };
                    }
                    var iotsitewise = null;
                    if (alarmaction.iotEvents) {
                        var propertyvalue = null;
                        if (alarmaction.iotSiteWise.propertyValue) {
                            var value = null;
                            if (alarmaction.iotSiteWise.propertyValue.value) {
                                value = {
                                    'StringValue': alarmaction.iotSiteWise.propertyValue.value.stringValue,
                                    'IntegerValue': alarmaction.iotSiteWise.propertyValue.value.integerValue,
                                    'DoubleValue': alarmaction.iotSiteWise.propertyValue.value.doubleValue,
                                    'BooleanValue': alarmaction.iotSiteWise.propertyValue.value.booleanValue
                                };
                            }
                            var timestamp = null;
                            if (alarmaction.iotSiteWise.propertyValue.timestamp) {
                                timestamp = {
                                    'TimeInSeconds': alarmaction.iotSiteWise.propertyValue.timestamp.timeInSeconds,
                                    'OffsetInNanos': alarmaction.iotSiteWise.propertyValue.timestamp.offsetInNanos
                                };
                            }
                            propertyvalue = {
                                'Value': value,
                                'Timestamp': timestamp,
                                'Quality': alarmaction.iotSiteWise.propertyValue.quality
                            };
                        }
                        iotsitewise = {
                            'EntryId': alarmaction.iotSiteWise.entryId,
                            'AssetId': alarmaction.iotSiteWise.assetId,
                            'PropertyId': alarmaction.iotSiteWise.propertyId,
                            'PropertyAlias': alarmaction.iotSiteWise.propertyAlias,
                            'PropertyValue': propertyvalue
                        };
                    }
                    var iottopicpublish = null;
                    if (alarmaction.iotTopicPublish) {
                        var payload = null;
                        if (alarmaction.iotTopicPublish.payload) {
                            payload = {
                                'ContentExpression': alarmaction.iotTopicPublish.payload.contentExpression,
                                'Type': alarmaction.iotTopicPublish.payload.type
                            };
                        }
                        iottopicpublish = {
                            'Payload': payload,
                            'MqttTopic': alarmaction.iotTopicPublish.mqttTopic
                        };
                    }
                    var lambda = null;
                    if (alarmaction.lambda) {
                        var payload = null;
                        if (alarmaction.lambda.payload) {
                            payload = {
                                'ContentExpression': alarmaction.lambda.payload.contentExpression,
                                'Type': alarmaction.lambda.payload.type
                            };
                        }
                        lambda = {
                            'Payload': payload,
                            'FunctionArn': alarmaction.lambda.functionArn
                        };
                    }
                    var sns = null;
                    if (alarmaction.sns) {
                        var payload = null;
                        if (alarmaction.sns.payload) {
                            payload = {
                                'ContentExpression': alarmaction.sns.payload.contentExpression,
                                'Type': alarmaction.sns.payload.type
                            };
                        }
                        sns = {
                            'Payload': payload,
                            'TargetArn': alarmaction.sns.targetArn
                        };
                    }
                    var sqs = null;
                    if (alarmaction.sqs) {
                        var payload = null;
                        if (alarmaction.sqs.payload) {
                            payload = {
                                'ContentExpression': alarmaction.sqs.payload.contentExpression,
                                'Type': alarmaction.sqs.payload.type
                            };
                        }
                        sqs = {
                            'Payload': payload,
                            'UseBase64': alarmaction.sqs.useBase64,
                            'QueueUrl': alarmaction.sqs.queueUrl
                        };
                    }
                    alarmactions.push({
                        'DynamoDB': dynamodb,
                        'DynamoDBv2': dynamodbv2,
                        'Firehose': firehose,
                        'IotEvents': iotevents,
                        'IotSiteWise': iotsitewise,
                        'IotTopicPublish': iottopicpublish,
                        'Lambda': lambda,
                        'Sns': sns,
                        'Sqs': sqs
                    });
                });
            }
            reqParams.cfn['AlarmEventActions'] = {
                'AlarmActions': alarmactions
            }
        }
        if (obj.data.alarmCapabilities) {
            var acknowledgeflow = null;
            if (obj.data.alarmCapabilities.acknowledgeFlow) {
                acknowledgeflow = {
                    'Enabled': obj.data.alarmCapabilities.acknowledgeFlow.enabled
                };
            }
            var initializationconfiguration = null;
            if (obj.data.alarmCapabilities.initializationConfiguration) {
                initializationconfiguration = {
                    'DisabledOnInitialization': obj.data.alarmCapabilities.initializationConfiguration.disabledOnInitialization
                };
            }
            reqParams.cfn['AlarmCapabilities'] = {
                'AcknowledgeFlow': acknowledgeflow,
                'InitializationConfiguration': initializationconfiguration
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iotevents', obj.id, 'AWS::IoTEvents::AlarmModel'),
            'region': obj.region,
            'service': 'iotevents',
            'type': 'AWS::IoTEvents::AlarmModel',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
