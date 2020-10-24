/* ========================================================================== */
// Lex
/* ========================================================================== */

sections.push({
    'category': 'Machine Learning',
    'service': 'Lex',
    'resourcetypes': {
        'Bots': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'locale',
                        title: 'Locale',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Intents': {
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
        'Slot Types': {
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

async function updateDatatableMachineLearningLex() {
    blockUI('#section-machinelearning-lex-bots-datatable');
    blockUI('#section-machinelearning-lex-intents-datatable');
    blockUI('#section-machinelearning-lex-slottypes-datatable');

    await sdkcall("LexModelBuildingService", "getBots", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-lex-bots-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.bots.map(async (bot) => {
            return sdkcall("LexModelBuildingService", "getBot", {
                name: bot.name,
                versionOrAlias: bot.version
            }, true).then((data) => {
                $('#section-machinelearning-lex-bots-datatable').deferredBootstrapTable('append', [{
                    f2id: data.name + " Lex Bot",
                    f2type: 'lex.bot',
                    f2data: data,
                    f2region: region,
                    name: data.name,
                    description: data.description,
                    locale: data.locale
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("LexModelBuildingService", "getIntents", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-lex-intents-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.intents.map(async (intent) => {
            return sdkcall("LexModelBuildingService", "getIntent", {
                name: intent.name,
                version: intent.version
            }, true).then((data) => {
                $('#section-machinelearning-lex-bots-datatable').deferredBootstrapTable('append', [{
                    f2id: data.name + " Lex Intent",
                    f2type: 'lex.intents',
                    f2data: data,
                    f2region: region,
                    name: data.name,
                    description: data.description
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("LexModelBuildingService", "getSlotTypes", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-lex-slottypes-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.slotTypes.map(async (slotType) => {
            return sdkcall("LexModelBuildingService", "getSlotType", {
                name: slotType.name,
                version: slotType.version
            }, true).then((data) => {
                $('#section-machinelearning-lex-bots-datatable').deferredBootstrapTable('append', [{
                    f2id: data.name + " Lex Slot Type",
                    f2type: 'lex.slottype',
                    f2data: data,
                    f2region: region,
                    name: data.name,
                    description: data.description
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-machinelearning-lex-bots-datatable');
    unblockUI('#section-machinelearning-lex-intents-datatable');
    unblockUI('#section-machinelearning-lex-slottypes-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "lex.bot") {
        reqParams.tf['name'] = obj.data.name;
        reqParams.tf['description'] = obj.data.description;
        reqParams.tf['locale'] = obj.data.locale;
        if (obj.data.intents) {
            reqParams.tf['intents'] = [];
            obj.data.intents.forEach(intent => {
                reqParams.tf['intents'].push({
                    'intent_name': intent.intentName,
                    'intent_version': intent.intentVersion
                });
            });
        }
        reqParams.tf['enable_model_improvements'] = obj.data.enableModelImprovements;
        reqParams.tf['nlu_intent_confidence_threshold'] = obj.data.nluIntentConfidenceThreshold;
        if (obj.data.clarificationPrompt) {
            var clarificationPromptMessages = [];
            obj.data.clarificationPrompt.messages.forEach(message => {
                clarificationPromptMessages.push({
                    'content': message.content,
                    'content_type': message.contentType,
                    'group_number': message.groupNumber
                });
            });
            reqParams.tf['clarification_prompt'] = {
                'message': clarificationPromptMessages,
                'max_attempts': obj.data.clarificationPrompt.maxAttempts,
                'response_card': obj.data.clarificationPrompt.responseCard
            };
        }
        if (obj.data.abortStatement) {
            var abortStatementMessages = [];
            obj.data.abortStatement.messages.forEach(message => {
                abortStatementMessages.push({
                    'content': message.content,
                    'content_type': message.contentType,
                    'group_number': message.groupNumber
                });
            });
            reqParams.tf['abort_statement'] = {
                'message': abortStatementMessages,
                'response_card': obj.data.abortStatement.responseCard
            };
        }
        reqParams.tf['idle_session_ttl_in_seconds'] = obj.data.idleSessionTTLInSeconds;
        reqParams.tf['voice_id'] = obj.data.voiceId;
        reqParams.tf['child_directed'] = obj.data.childDirected;
        reqParams.tf['detect_sentiment'] = obj.data.detectSentiment;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lex', obj.id, 'AWS::Lex::Bot'), // not real resource type
            'region': obj.region,
            'service': 'lex',
            'terraformType': 'aws_lex_bot',
            'options': reqParams
        });
    } else if (obj.type == "lex.intent") {
        reqParams.tf['name'] = obj.data.name;
        reqParams.tf['description'] = obj.data.description;
        if (obj.data.slots) {
            reqParams.tf['slot'] = [];
            obj.data.slots.forEach(slot => {
                var valueElicitationPrompt = null;
                if (slot.valueElicitationPrompt) {
                    var valueElicitationPromptMessages = [];
                    slot.valueElicitationPrompt.messages.forEach(message => {
                        valueElicitationPromptMessages.push({
                            'content': message.content,
                            'content_type': message.contentType,
                            'group_number': message.groupNumber
                        });
                    });
                    valueElicitationPrompt = {
                        'message': valueElicitationPromptMessages,
                        'response_card': slot.valueElicitationPrompt.responseCard
                    };
                }
                reqParams.tf['slot'].push({
                    'name': slot.name,
                    'description': slot.description,
                    'slot_constraint': slot.slotConstraint,
                    'slot_type': slot.slotType,
                    'slot_type_version': slot.slotTypeVersion,
                    'value_elicitation_prompt': valueElicitationPrompt,
                    'priority': slot.priority,
                    'sample_utterances': slot.sampleUtterances,
                    'response_card': slot.responseCard
                });
            });
        }
        reqParams.tf['sample_utterances'] = obj.data.sampleUtterances;
        if (obj.data.confirmationPrompt) {
            var confirmationPromptMessages = [];
            obj.data.confirmationPrompt.messages.forEach(message => {
                confirmationPromptMessages.push({
                    'content': message.content,
                    'content_type': message.contentType,
                    'group_number': message.groupNumber
                });
            });
            reqParams.tf['confirmation_prompt'] = {
                'message': confirmationPromptMessages,
                'max_attempts': obj.data.confirmationPrompt.maxAttempts,
                'response_card': obj.data.confirmationPrompt.responseCard
            };
        }
        if (obj.data.rejectionStatement) {
            var rejectionStatementMessages = [];
            obj.data.rejectionStatement.messages.forEach(message => {
                rejectionStatementMessages.push({
                    'content': message.content,
                    'content_type': message.contentType,
                    'group_number': message.groupNumber
                });
            });
            reqParams.tf['rejection_statement'] = {
                'message': rejectionStatementMessages,
                'response_card': obj.data.rejectionStatement.responseCard
            };
        }
        if (obj.data.followUpPrompt) {
            reqParams.tf['follow_up_prompt'] = {};
            if (obj.data.followUpPrompt.confirmationPrompt) {
                var confirmationPromptMessages = [];
                obj.data.followUpPrompt.confirmationPrompt.messages.forEach(message => {
                    confirmationPromptMessages.push({
                        'content': message.content,
                        'content_type': message.contentType,
                        'group_number': message.groupNumber
                    });
                });
                reqParams.tf['follow_up_prompt']['confirmation_prompt'] = {
                    'message': confirmationPromptMessages,
                    'max_attempts': obj.data.followUpPrompt.confirmationPrompt.maxAttempts,
                    'response_card': obj.data.followUpPrompt.confirmationPrompt.responseCard
                };
            }
            if (obj.data.followUpPrompt.rejectionStatement) {
                var rejectionStatementMessages = [];
                obj.data.followUpPrompt.rejectionStatement.messages.forEach(message => {
                    rejectionStatementMessages.push({
                        'content': message.content,
                        'content_type': message.contentType,
                        'group_number': message.groupNumber
                    });
                });
                reqParams.tf['follow_up_prompt']['rejection_statement'] = {
                    'message': rejectionStatementMessages,
                    'response_card': obj.data.followUpPrompt.rejectionStatement.responseCard
                };
            }
        }
        if (obj.data.conclusionStatement) {
            var conclusionStatementMessages = [];
            obj.data.conclusionStatement.messages.forEach(message => {
                conclusionStatementMessages.push({
                    'content': message.content,
                    'content_type': message.contentType,
                    'group_number': message.groupNumber
                });
            });
            reqParams.tf['rejection_statement'] = {
                'message': conclusionStatementMessages,
                'response_card': obj.data.conclusionStatement.responseCard
            };
        }
        if (obj.data.dialogCodeHook) {
            reqParams.tf['dialog_code_hook'] = {
                'uri': obj.data.dialogCodeHook.uri,
                'message_version': obj.data.dialogCodeHook.messageVersion
            };
        }
        if (obj.data.fulfillmentActivity) {
            var dialogCodeHook = null;
            if (obj.data.fulfillmentActivity.codeHook) {
                dialogCodeHook = {
                    'uri': obj.data.fulfillmentActivity.codeHook.uri,
                    'message_version': obj.data.fulfillmentActivity.codeHook.messageVersion
                };
            }
            reqParams.tf['fulfillment_activity'] = {
                'type': obj.data.fulfillmentActivity.type,
                'code_hook': dialogCodeHook
            };
        }
        reqParams.tf['parent_intent_signature'] = obj.data.parentIntentSignature;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lex', obj.id, 'AWS::Lex::Intent'), // not real resource type
            'region': obj.region,
            'service': 'lex',
            'terraformType': 'aws_lex_intent',
            'options': reqParams
        });
    } else if (obj.type == "lex.slottype") {
        reqParams.tf['name'] = obj.data.name;
        reqParams.tf['description'] = obj.data.description;
        reqParams.tf['enumeration_value'] = obj.data.enumerationValues;
        reqParams.tf['value_selection_strategy'] = obj.data.valueSelectionStrategy;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lex', obj.id, 'AWS::Lex::SlotType'), // not real resource type
            'region': obj.region,
            'service': 'lex',
            'terraformType': 'aws_lex_slot_type',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
