/* ========================================================================== */
// Incident Manager
/* ========================================================================== */

sections.push({
    'category': 'Management &amp; Governance',
    'service': 'Incident Manager',
    'resourcetypes': {
        'Replication Sets': {
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
                        title: 'ARN',
                        field: 'arn',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                [
                    // none
                ]
            ]
        },
        'Response Plans': {
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
                        field: 'displayname',
                        title: 'Display Name',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Contacts': {
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
                        title: 'Alias',
                        field: 'alias',
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
                        field: 'displayname',
                        title: 'Display Name',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Contact Channels': {
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
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'contactarn',
                        title: 'Contact ARN',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableManagementAndGovernanceIncidentManager() {
    blockUI('#section-managementandgovernance-incidentmanager-replicationsets-datatable');
    blockUI('#section-managementandgovernance-incidentmanager-responseplans-datatable');
    blockUI('#section-managementandgovernance-incidentmanager-contacts-datatable');
    blockUI('#section-managementandgovernance-incidentmanager-contactchannels-datatable');

    await sdkcall("SSMIncidents", "listReplicationSets", {
        // no params
    }, false).then(async (data) => {
        $('#section-managementandgovernance-incidentmanager-replicationsets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.replicationSetArns.map(arn => {
            return sdkcall("SSMIncidents", "getReplicationSet", {
                arn: arn
            }, true).then((data) => {
                data.replicationSet['arn'] = arn;

                $('#section-managementandgovernance-incidentmanager-replicationsets-datatable').deferredBootstrapTable('append', [{
                    f2id: arn,
                    f2type: 'incidentmanager.replicationset',
                    f2data: data.replicationSet,
                    f2region: region,
                    arn: arn
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("SSMIncidents", "listResponsePlans", {
        // no params
    }, false).then(async (data) => {
        $('#section-managementandgovernance-incidentmanager-responseplans-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.responsePlanSummaries.map(responseplan => {
            return sdkcall("SSMIncidents", "getResponsePlan", {
                arn: responseplan.arn
            }, true).then((data) => {
                $('#section-managementandgovernance-incidentmanager-responseplans-datatable').deferredBootstrapTable('append', [{
                    f2id: data.arn,
                    f2type: 'incidentmanager.responseplan',
                    f2data: data,
                    f2region: region,
                    name: data.name,
                    displayname: data.displayName
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("SSMContacts", "listContacts", {
        // no params
    }, false).then(async (data) => {
        $('#section-managementandgovernance-incidentmanager-contacts-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-incidentmanager-contactchannels-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Contacts.map(async (contact) => {
            await sdkcall("SSMContacts", "getContact", {
                ContactId: contact.ContactArn
            }, true).then((data) => {
                $('#section-managementandgovernance-incidentmanager-contacts-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ContactArn,
                    f2type: 'incidentmanager.contact',
                    f2data: data,
                    f2region: region,
                    alias: data.Alias,
                    displayname: data.DisplayName
                }]);
            });

            return sdkcall("SSMContacts", "listContactChannels", {
                ContactId: contact.ContactArn
            }, false).then(async (data) => {
                await Promise.all(data.ContactChannels.map(async (contactchannel) => {
                    await sdkcall("SSMContacts", "getContactChannel", {
                        ContactChannelId: contactchannel.ContactChannelArn
                    }, true).then((data) => {
                        $('#section-managementandgovernance-incidentmanager-contactchannels-datatable').deferredBootstrapTable('append', [{
                            f2id: data.ContactChannelArn,
                            f2type: 'incidentmanager.contactchannel',
                            f2data: data,
                            f2region: region,
                            alias: data.Name,
                            displayname: data.Type,
                            contactarn: data.ContactArn
                        }]);
                    });
                }));
            }).catch(() => { });
        }));
    }).catch(() => { });

    unblockUI('#section-managementandgovernance-incidentmanager-replicationsets-datatable');
    unblockUI('#section-managementandgovernance-incidentmanager-responseplans-datatable');
    unblockUI('#section-managementandgovernance-incidentmanager-contacts-datatable');
    unblockUI('#section-managementandgovernance-incidentmanager-contactchannels-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "incidentmanager.replicationset") {
        reqParams.cfn['DeletionProtected'] = obj.data.deletionProtected;
        if (obj.data.regionMap) {
            reqParams.cfn['Regions'] = [];
            Object.keys(obj.data.regionMap).forEach(regionname => {
                reqParams.cfn['Regions'].push({
                    'RegionName': regionname,
                    'RegionConfiguration': {
                        'SseKmsKeyId': obj.data.regionMap[regionname].sseKmsKeyId
                    }
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('incidentmanager', obj.id, 'AWS::SSMIncidents::ReplicationSet'),
            'region': obj.region,
            'service': 'incidentmanager',
            'type': 'AWS::SSMIncidents::ReplicationSet',
            'options': reqParams
        });
    } else if (obj.type == "incidentmanager.responseplan") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['DisplayName'] = obj.data.displayName;
        if (obj.data.actions) {
            reqParams.cfn['Actions'] = [];
            obj.data.actions.forEach(action => {
                var ssmautomation = null;
                if (action.ssmAutomation) {
                    var parameters = null;
                    if (action.ssmAutomation.parameters) {
                        parameters = [];
                        Object.keys(action.ssmAutomation.parameters).forEach(parametername => {
                            parameters.push({
                                'Key': parametername,
                                'Values': action.ssmAutomation.parameters[parametername]
                            });
                        });
                    }
                    ssmautomation = {
                        'DocumentName': action.ssmAutomation.documentName,
                        'DocumentVersion': action.ssmAutomation.documentVersion,
                        'Parameters': parameters,
                        'RoleArn': action.ssmAutomation.roleArn,
                        'TargetAccount': action.ssmAutomation.targetAccount
                    };
                }
                reqParams.cfn['Actions'].push({
                    'SsmAutomation': ssmautomation
                });
            });
        }
        if (obj.data.chatChannel) {
            reqParams.cfn['ChatChannel'] = {
                'ChatbotSns': obj.data.chatChannel.chatbotSns
            }
        }
        reqParams.cfn['Engagements'] = obj.data.engagements;
        if (obj.data.incidentTemplate) {
            var notificationTargets = null;
            if (obj.data.incidentTemplate.notificationTargets) {
                notificationTargets = [];
                obj.data.incidentTemplate.notificationTargets.forEach(notificationTarget => {
                    notificationTargets.push({
                        'SnsTopicArn': notificationTarget.snsTopicArn
                    });
                });
            }
            reqParams.cfn['IncidentTemplate'] = {
                'DedupeString': obj.data.incidentTemplate.dedupeString,
                'Impact': obj.data.incidentTemplate.impact,
                'NotificationTargets': notificationTargets,
                'Summary': obj.data.incidentTemplate.summary,
                'Title': obj.data.incidentTemplate.title
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('incidentmanager', obj.id, 'AWS::SSMIncidents::ResponsePlan'),
            'region': obj.region,
            'service': 'incidentmanager',
            'type': 'AWS::SSMIncidents::ResponsePlan',
            'options': reqParams
        });
    } else if (obj.type == "incidentmanager.contact") {
        reqParams.cfn['Alias'] = obj.data.Alias;
        reqParams.cfn['DisplayName'] = obj.data.DisplayName;
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.cfn['Plan'] = obj.data.Plan;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('incidentmanager', obj.id, 'AWS::SSMContacts::Contact'),
            'region': obj.region,
            'service': 'incidentmanager',
            'type': 'AWS::SSMContacts::Contact',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ContactArn
            }
        });
    } else if (obj.type == "incidentmanager.contactchannel") {
        reqParams.cfn['ChannelAddress'] = obj.data.DeliveryAddress.SimpleAddress;
        reqParams.cfn['ChannelName'] = obj.data.Name;
        reqParams.cfn['ChannelType'] = obj.data.Type;
        reqParams.cfn['ContactId'] = obj.data.ContactId;
        reqParams.cfn['DeferActivation'] = (obj.data.ActivationStatus == "NOT_ACTIVATED");

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('incidentmanager', obj.id, 'AWS::SSMContacts::ContactChannel'),
            'region': obj.region,
            'service': 'incidentmanager',
            'type': 'AWS::SSMContacts::ContactChannel',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ContactChannelArn
            }
        });
    } else {
        return false;
    }

    return true;
});
