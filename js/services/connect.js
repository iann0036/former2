/* ========================================================================== */
// Connect
/* ========================================================================== */

sections.push({
    'category': 'Business Applications',
    'service': 'Connect',
    'resourcetypes': {
        'Customer Profiles Domains': {
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
                        field: 'defaultexpirationdays',
                        title: 'Default Expiration Days',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Customer Profiles Object Types': {
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
                        field: 'domainname',
                        title: 'Domain Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
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
        'Customer Profiles Integrations': {
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
                        title: 'Object Type Name',
                        field: 'objecttypename',
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
                        field: 'domainname',
                        title: 'Domain Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'uri',
                        title: 'URI',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Quick Connects': {
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
                        field: 'instancearn',
                        title: 'Instance ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Hours Of Operation': {
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
                        field: 'instancearn',
                        title: 'Instance ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Users': {
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
                        title: 'Username',
                        field: 'username',
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
                        field: 'instancearn',
                        title: 'Instance ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'User Hierarchy Groups': {
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
                        field: 'instancearn',
                        title: 'Instance ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Wisdom Assistants': {
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
        'Wisdom Assistant Associations': {
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
                        title: 'Assistant ID',
                        field: 'assistantid',
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
                        field: 'associationtype',
                        title: 'Association Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Wisdom Knowledge Bases': {
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

async function updateDatatableBusinessApplicationsConnect() {
    blockUI('#section-businessapplications-connect-customerprofilesdomains-datatable');
    blockUI('#section-businessapplications-connect-customerprofilesobjecttypes-datatable');
    blockUI('#section-businessapplications-connect-customerprofilesintegrations-datatable');
    blockUI('#section-businessapplications-connect-quickconnects-datatable');
    blockUI('#section-businessapplications-connect-hoursofoperation-datatable');
    blockUI('#section-businessapplications-connect-users-datatable');
    blockUI('#section-businessapplications-connect-userhierarchygroups-datatable');
    blockUI('#section-businessapplications-connect-wisdomassistants-datatable');
    blockUI('#section-businessapplications-connect-wisdomassistantassociations-datatable');
    blockUI('#section-businessapplications-connect-wisdomknowledgebases-datatable');

    await sdkcall("CustomerProfiles", "listDomains", {
        // no params
    }, true).then(async (data) => {
        $('#section-businessapplications-connect-customerprofilesdomains-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-connect-customerprofilesobjecttypes-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-connect-customerprofilesintegrations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Items.map(async (item) => {
            await sdkcall("CustomerProfiles", "getDomain", {
                DomainName: item.DomainName
            }, true).then(async (data) => {
                $('#section-businessapplications-connect-customerprofilesdomains-datatable').deferredBootstrapTable('append', [{
                    f2id: data.DomainName,
                    f2type: 'connect.customerprofilesdomain',
                    f2data: data,
                    f2region: region,
                    name: data.DomainName,
                    defaultexpirationdays: data.DefaultExpirationDays
                }]);
            });

            await sdkcall("CustomerProfiles", "listProfileObjectTypes", {
                DomainName: item.DomainName
            }, true).then(async (data) => {
                await Promise.all(data.Items.map(item2 => {
                    return sdkcall("CustomerProfiles", "getProfileObjectType", {
                        DomainName: item.DomainName,
                        ObjectTypeName: item2.ObjectTypeName
                    }, true).then(async (data) => {
                        data['DomainName'] = item.DomainName;

                        $('#section-businessapplications-connect-customerprofilesobjecttypes-datatable').deferredBootstrapTable('append', [{
                            f2id: data.ObjectTypeName,
                            f2type: 'connect.customerprofilesobjecttype',
                            f2data: data,
                            f2region: region,
                            name: data.ObjectTypeName,
                            domainname: item.DomainName,
                            description: data.Description
                        }]);
                    });
                }));
            });

            return sdkcall("CustomerProfiles", "listIntegrations", {
                DomainName: item.DomainName
            }, true).then(async (data) => {
                data.Items.forEach(integration => {
                    $('#section-businessapplications-connect-customerprofilesintegrations-datatable').deferredBootstrapTable('append', [{
                        f2id: integration.DomainName + " " + integration.ObjectTypeName + " Integration " + integration.Uri,
                        f2type: 'connect.customerprofilesintegration',
                        f2data: integration,
                        f2region: region,
                        objecttypename: integration.ObjectTypeName,
                        domainname: integration.DomainName,
                        uri: integration.Uri
                    }]);
                });
            });
        }));
    });

    await sdkcall("Connect", "listInstances", {
        // no params
    }, false).then(async (data) => {
        await Promise.all(data.InstanceSummaryList.map(async (instance) => {
            return Promise.all([
                sdkcall("Connect", "listQuickConnects", {
                    InstanceId: instance.Id
                }, true).then(async (data) => {
                    $('#section-businessapplications-connect-quickconnects-datatable').deferredBootstrapTable('removeAll');
    
                    await Promise.all(data.QuickConnectSummaryList.map(quickconnect => {
                        return sdkcall("Connect", "describeQuickConnect", {
                            InstanceId: instance.Id,
                            QuickConnectId: quickconnect.Id
                        }, true).then(async (data) => {
                            data.QuickConnect['InstanceArn'] = instance.Arn;
    
                            $('#section-businessapplications-connect-quickconnects-datatable').deferredBootstrapTable('append', [{
                                f2id: data.QuickConnect.QuickConnectARN,
                                f2type: 'connect.quickconnect',
                                f2data: data.QuickConnect,
                                f2region: region,
                                name: data.QuickConnect.Name,
                                description: data.QuickConnect.Description,
                                instancearn: instance.Id
                            }]);
                        });
                    }));
                }).catch(() => { }),
                sdkcall("Connect", "listHoursOfOperations", {
                    InstanceId: instance.Id
                }, true).then(async (data) => {
                    $('#section-businessapplications-connect-hoursofoperation-datatable').deferredBootstrapTable('removeAll');
    
                    await Promise.all(data.HoursOfOperationSummaryList.map(hoursofoperation => {
                        return sdkcall("Connect", "describeHoursOfOperation", {
                            InstanceId: instance.Id,
                            HoursOfOperationId: hoursofoperation.Id
                        }, true).then(async (data) => {
                            data.HoursOfOperation['InstanceArn'] = instance.Arn;
    
                            $('#section-businessapplications-connect-hoursofoperation-datatable').deferredBootstrapTable('append', [{
                                f2id: data.HoursOfOperation.HoursOfOperationArn,
                                f2type: 'connect.hoursofoperation',
                                f2data: data.HoursOfOperation,
                                f2region: region,
                                name: data.HoursOfOperation.Name,
                                description: data.HoursOfOperation.Description,
                                instancearn: instance.Id
                            }]);
                        });
                    }));
                }).catch(() => { }),
                sdkcall("Connect", "listUsers", {
                    InstanceId: instance.Id
                }, true).then(async (data) => {
                    $('#section-businessapplications-connect-users-datatable').deferredBootstrapTable('removeAll');
    
                    await Promise.all(data.UserSummaryList.map(user => {
                        return sdkcall("Connect", "describeUser", {
                            InstanceId: instance.Id,
                            UserId: user.Id
                        }, true).then(async (data) => {
                            data.User['InstanceArn'] = instance.Arn;
    
                            $('#section-businessapplications-connect-users-datatable').deferredBootstrapTable('append', [{
                                f2id: data.User.Arn,
                                f2type: 'connect.user',
                                f2data: data.User,
                                f2region: region,
                                username: data.User.Username,
                                instancearn: instance.Id
                            }]);
                        });
                    }));
                }).catch(() => { }),
                sdkcall("Connect", "listUserHierarchyGroups", {
                    InstanceId: instance.Id
                }, true).then(async (data) => {
                    $('#section-businessapplications-connect-userhierarchygroups-datatable').deferredBootstrapTable('removeAll');
    
                    await Promise.all(data.UserHierarchyGroupSummaryList.map(userhierarchygroup => {
                        return sdkcall("Connect", "describeUserHierarchyGroup", {
                            InstanceId: instance.Id,
                            HierarchyGroupId: userhierarchygroup.Id
                        }, true).then(async (data) => {
                            data.User['InstanceArn'] = instance.Arn;
    
                            $('#section-businessapplications-connect-userhierarchygroups-datatable').deferredBootstrapTable('append', [{
                                f2id: data.HierarchyGroup.Arn,
                                f2type: 'connect.userhierarchygroup',
                                f2data: data.HierarchyGroup,
                                f2region: region,
                                name: data.HierarchyGroup.Name,
                                instancearn: instance.Id
                            }]);
                        });
                    }));
                }).catch(() => { })
            ]);
        }));
    }).catch(() => { });

    await sdkcall("Wisdom", "listAssistants", {
        // no params
    }, true).then(async (data) => {
        $('#section-businessapplications-connect-wisdomassistants-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-connect-wisdomassistantassociations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.assistantSummaries.map(async (assistant) => {
            await sdkcall("Wisdom", "getAssistant", {
                assistantId: assistant.assistantId
            }, true).then(async (data) => {
                $('#section-businessapplications-connect-wisdomassistants-datatable').deferredBootstrapTable('append', [{
                    f2id: data.assistantArn,
                    f2type: 'connect.wisdomassistant',
                    f2data: data,
                    f2region: region,
                    name: data.name,
                    description: data.description
                }]);
            });

            return sdkcall("Wisdom", "listAssistantAssociations", {
                assistantId: assistant.assistantId
            }, true).then(async (data) => {
                data.assistantAssociationSummaries.forEach(association => {
                    $('#section-businessapplications-connect-wisdomassistantassociations-datatable').deferredBootstrapTable('append', [{
                        f2id: association.assistantAssociationArn,
                        f2type: 'connect.wisdomassistantassociation',
                        f2data: association,
                        f2region: region,
                        assistantid: association.assistantId,
                        associationtype: association.associationType
                    }]);
                });
            });
        }));
    });

    await sdkcall("Wisdom", "listKnowledgeBases", {
        // no params
    }, true).then(async (data) => {
        $('#section-businessapplications-connect-wisdomknowledgebases-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.knowledgeBaseSummaries.map(async (knowledgeBase) => {
            return sdkcall("Wisdom", "getKnowledgeBase", {
                knowledgeBaseId: knowledgeBase.knowledgeBaseId
            }, true).then(async (data) => {
                $('#section-businessapplications-connect-wisdomknowledgebases-datatable').deferredBootstrapTable('append', [{
                    f2id: data.knowledgeBaseArn,
                    f2type: 'connect.wisdomknowledgebase',
                    f2data: data,
                    f2region: region,
                    name: data.name,
                    description: data.description
                }]);
            });
        }));
    });
    
    unblockUI('#section-businessapplications-connect-customerprofilesdomains-datatable');
    unblockUI('#section-businessapplications-connect-customerprofilesobjecttypes-datatable');
    unblockUI('#section-businessapplications-connect-customerprofilesintegrations-datatable');
    unblockUI('#section-businessapplications-connect-quickconnects-datatable');
    unblockUI('#section-businessapplications-connect-hoursofoperation-datatable');
    unblockUI('#section-businessapplications-connect-users-datatable');
    unblockUI('#section-businessapplications-connect-userhierarchygroups-datatable');
    unblockUI('#section-businessapplications-connect-wisdomassistants-datatable');
    unblockUI('#section-businessapplications-connect-wisdomassistantassociations-datatable');
    unblockUI('#section-businessapplications-connect-wisdomknowledgebases-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "connect.customerprofilesdomain") {
        reqParams.cfn['DomainName'] = obj.data.DomainName;
        reqParams.cfn['DefaultEncryptionKey'] = obj.data.DefaultEncryptionKey;
        reqParams.cfn['DefaultExpirationDays'] = obj.data.DefaultExpirationDays;
        reqParams.cfn['DeadLetterQueueUrl'] = obj.data.DeadLetterQueueUrl;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.Tags) {
                reqParams.cfn['Tags'].push({
                    'Key': k,
                    'Value': obj.data.Tags[k]
                });
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('connect', obj.id, 'AWS::CustomerProfiles::Domain'),
            'region': obj.region,
            'service': 'connect',
            'type': 'AWS::CustomerProfiles::Domain',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.DomainName
            }
        });
    } else if (obj.type == "connect.customerprofilesobjecttype") {
        reqParams.cfn['ObjectTypeName'] = obj.data.ObjectTypeName;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['TemplateId'] = obj.data.TemplateId;
        reqParams.cfn['ExpirationDays'] = obj.data.ExpirationDays;
        reqParams.cfn['EncryptionKey'] = obj.data.EncryptionKey;
        reqParams.cfn['DomainName'] = obj.data.DomainName;
        reqParams.cfn['AllowProfileCreation'] = obj.data.AllowProfileCreation;
        if (obj.data.Fields) {
            reqParams.cfn['Fields'] = [];
            Object.keys(obj.data.Fields).forEach(k => {
                reqParams.cfn['Fields'].push({
                    'Name': k,
                    'ObjectTypeField': obj.data.Fields[k]
                });
            });
        }
        if (obj.data.Keys) {
            reqParams.cfn['Keys'] = [];
            Object.keys(obj.data.Keys).forEach(k => {
                reqParams.cfn['Keys'].push({
                    'Name': k,
                    'ObjectTypeKeyList': obj.data.Keys[k]
                });
            });
        }
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.Tags) {
                reqParams.cfn['Tags'].push({
                    'Key': k,
                    'Value': obj.data.Tags[k]
                });
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('connect', obj.id, 'AWS::CustomerProfiles::ObjectType'),
            'region': obj.region,
            'service': 'connect',
            'type': 'AWS::CustomerProfiles::ObjectType',
            'options': reqParams
        });
    } else if (obj.type == "connect.customerprofilesintegration") {
        reqParams.cfn['ObjectTypeName'] = obj.data.ObjectTypeName;
        reqParams.cfn['DomainName'] = obj.data.DomainName;
        reqParams.cfn['Uri'] = obj.data.Uri;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.Tags) {
                reqParams.cfn['Tags'].push({
                    'Key': k,
                    'Value': obj.data.Tags[k]
                });
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('connect', obj.id, 'AWS::CustomerProfiles::Integration'),
            'region': obj.region,
            'service': 'connect',
            'type': 'AWS::CustomerProfiles::Integration',
            'options': reqParams
        });
    } else if (obj.type == "connect.quickconnect") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['InstanceArn'] = obj.data.InstanceArn;
        if (obj.data.QuickConnectConfig) {
            var userconfig = null;
            if (obj.data.QuickConnectConfig.UserConfig) {
                userconfig = {
                    'UserArn': obj.data.InstanceArn + '/agent/' + obj.data.QuickConnectConfig.UserConfig.UserId,
                    'ContactFlowArn': obj.data.InstanceArn + '/contact-flow/' + obj.data.QuickConnectConfig.UserConfig.ContactFlowId
                };
            }
            var queueconfig = null;
            if (obj.data.QuickConnectConfig.QueueConfig) {
                queueconfig = {
                    'QueueArn': obj.data.InstanceArn + '/queue/' + obj.data.QuickConnectConfig.QueueConfig.QueueId,
                    'ContactFlowArn': obj.data.InstanceArn + '/contact-flow/' + obj.data.QuickConnectConfig.QueueConfig.ContactFlowId
                };
            }

            reqParams.cfn['QuickConnectConfig'] = {
                'QuickConnectType': obj.data.QuickConnectConfig.QuickConnectType,
                'UserConfig': userconfig,
                'QueueConfig': queueconfig,
                'PhoneConfig': obj.data.QuickConnectConfig.PhoneConfig
            };
        }
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.Tags) {
                reqParams.cfn['Tags'].push({
                    'Key': k,
                    'Value': obj.data.Tags[k]
                });
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('connect', obj.id, 'AWS::Connect::QuickConnect'),
            'region': obj.region,
            'service': 'connect',
            'type': 'AWS::Connect::QuickConnect',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'GetAtt': {
                    'QuickConnectArn': obj.data.QuickConnectARN
                }
            }
        });
    } else if (obj.type == "connect.hoursofoperation") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['InstanceArn'] = obj.data.InstanceArn;
        reqParams.cfn['TimeZone'] = obj.data.TimeZone;
        reqParams.cfn['Config'] = obj.data.Config;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.Tags) {
                reqParams.cfn['Tags'].push({
                    'Key': k,
                    'Value': obj.data.Tags[k]
                });
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('connect', obj.id, 'AWS::Connect::HoursOfOperation'),
            'region': obj.region,
            'service': 'connect',
            'type': 'AWS::Connect::HoursOfOperation',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'GetAtt': {
                    'HoursOfOperationArn': obj.data.HoursOfOperationArn
                }
            }
        });
    } else if (obj.type == "connect.user") {
        reqParams.cfn['Username'] = obj.data.Username;
        reqParams.cfn['IdentityInfo'] = obj.data.IdentityInfo;
        reqParams.cfn['InstanceArn'] = obj.data.InstanceArn;
        reqParams.cfn['PhoneConfig'] = obj.data.PhoneConfig;
        reqParams.cfn['DirectoryUserId'] = obj.data.DirectoryUserId;
        reqParams.cfn['SecurityProfileArns'] = obj.data.SecurityProfileIds;
        reqParams.cfn['RoutingProfileArn'] = obj.data.RoutingProfileId;
        reqParams.cfn['HierarchyGroupArn'] = obj.data.HierarchyGroupId;
        reqParams.cfn['Password'] = "REPLACEME";
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.Tags) {
                reqParams.cfn['Tags'].push({
                    'Key': k,
                    'Value': obj.data.Tags[k]
                });
            }
        }
        
        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('connect', obj.id, 'AWS::Connect::User'),
            'region': obj.region,
            'service': 'connect',
            'type': 'AWS::Connect::User',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'UserArn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "connect.userhierarchygroup") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['InstanceArn'] = obj.data.InstanceArn;
        
        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('connect', obj.id, 'AWS::Connect::UserHierarchyGroup'),
            'region': obj.region,
            'service': 'connect',
            'type': 'AWS::Connect::UserHierarchyGroup',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'UserHierarchyGroupArn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "connect.wisdomassistant") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['Type'] = obj.data.type;
        if (obj.data.serverSideEncryptionConfiguration) {
            reqParams.cfn['ServerSideEncryptionConfiguration'] = {
                'KmsKeyId': obj.data.serverSideEncryptionConfiguration.kmsKeyId
            };
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.tags) {
                reqParams.cfn['Tags'].push({
                    'Key': k,
                    'Value': obj.data.tags[k]
                });
            }
        }
        
        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('wisdom', obj.id, 'AWS::Wisdom::Assistant'),
            'region': obj.region,
            'service': 'wisdom',
            'type': 'AWS::Wisdom::Assistant',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.assistantId,
                'GetAtt': {
                    'AssistantArn': obj.data.assistantArn
                }
            }
        });
    } else if (obj.type == "connect.wisdomassistantassociation") {
        reqParams.cfn['AssistantId'] = obj.data.assistantId;
        reqParams.cfn['AssociationType'] = obj.data.associationType;
        if (obj.data.associationData) {
            var knowledgebaseid = null;
            if (obj.data.knowledgeBaseAssociation) {
                knowledgebaseid = obj.data.knowledgeBaseAssociation.knowledgeBaseId;
            }
            reqParams.cfn['Association'] = {
                'KnowledgeBaseId': knowledgebaseid
            };
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.tags) {
                reqParams.cfn['Tags'].push({
                    'Key': k,
                    'Value': obj.data.tags[k]
                });
            }
        }
        
        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('wisdom', obj.id, 'AWS::Wisdom::AssistantAssociation'),
            'region': obj.region,
            'service': 'wisdom',
            'type': 'AWS::Wisdom::AssistantAssociation',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.assistantAssociationId,
                'GetAtt': {
                    'AssistantAssociationArn': obj.data.assistantAssociationArn
                }
            }
        });
    } else if (obj.type == "connect.wisdomknowledgebase") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['KnowledgeBaseType'] = obj.data.knowledgeBaseType;
        if (obj.data.renderingConfiguration) {
            reqParams.cfn['RenderingConfiguration'] = {
                'TemplateUri': obj.data.renderingConfiguration.templateUri
            };
        }
        if (obj.data.serverSideEncryptionConfiguration) {
            reqParams.cfn['ServerSideEncryptionConfiguration'] = {
                'KmsKeyId': obj.data.serverSideEncryptionConfiguration.kmsKeyId
            };
        }
        if (obj.data.sourceConfiguration) {
            var appintegrations = null;
            if (obj.data.sourceConfiguration.appIntegrations) {
                appintegrations = {
                    'AppIntegrationArn': obj.data.sourceConfiguration.appIntegrations.appIntegrationArn,
                    'ObjectFields': obj.data.sourceConfiguration.appIntegrations.objectFields
                };
            }
            reqParams.cfn['SourceConfiguration'] = {
                'AppIntegrations': appintegrations
            };
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.tags) {
                reqParams.cfn['Tags'].push({
                    'Key': k,
                    'Value': obj.data.tags[k]
                });
            }
        }
        
        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('wisdom', obj.id, 'AWS::Wisdom::KnowledgeBase'),
            'region': obj.region,
            'service': 'wisdom',
            'type': 'AWS::Wisdom::KnowledgeBase',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.knowledgeBaseId,
                'GetAtt': {
                    'KnowledgeBaseArn': obj.data.knowledgeBaseArn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
