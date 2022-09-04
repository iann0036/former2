/* ========================================================================== */
// Connect
/* ========================================================================== */

sections.push({
    'category': 'Business Applications',
    'service': 'Connect',
    'resourcetypes': {
        'Instances': {
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
                        title: 'ID',
                        field: 'id',
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
                        field: 'alias',
                        title: 'Alias',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
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
        },
        'Contact Flows': {
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
        'Contact Flow Modules': {
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
        'Event Integrations': {
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
        'Data Integrations': {
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
        'Phone Numbers': {
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
                        title: 'Phone Number',
                        field: 'phonenumber',
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
        'Voice ID Domains': {
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
        'Task Templates': {
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
    blockUI('#section-businessapplications-connect-instances-datatable');
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
    blockUI('#section-businessapplications-connect-contactflows-datatable');
    blockUI('#section-businessapplications-connect-contactflowmodules-datatable');
    blockUI('#section-businessapplications-connect-eventintegrations-datatable');
    blockUI('#section-businessapplications-connect-dataintegrations-datatable');
    blockUI('#section-businessapplications-connect-phonenumbers-datatable');
    blockUI('#section-businessapplications-connect-voiceiddomains-datatable');
    blockUI('#section-businessapplications-connect-tasktemplates-datatable');

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
    }).catch(() => { });

    await sdkcall("Connect", "listInstances", {
        // no params
    }, false).then(async (data) => {
        $('#section-businessapplications-connect-instances-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-connect-quickconnects-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-connect-hoursofoperation-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-connect-users-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-connect-userhierarchygroups-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-connect-contactflows-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-connect-contactflowmodules-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-connect-phonenumbers-datatable').deferredBootstrapTable('removeAll');
        $('#section-businessapplications-connect-tasktemplates-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.InstanceSummaryList.map(async (instance) => {
            return Promise.all([
                sdkcall("Connect", "describeInstance", {
                    InstanceId: instance.Id
                }, true).then(async (data) => {
                    return sdkcall("Connect", "listInstanceAttributes", {
                        InstanceId: instance.Id
                    }, true).then(async (attributesdata) => {
                        data.Instance['Attributes'] = attributesdata['Attributes'];

                        $('#section-businessapplications-connect-instances-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Instance.Arn,
                            f2type: 'connect.instance',
                            f2data: data.Instance,
                            f2region: region,
                            id: data.Instance.Id,
                            alias: data.Instance.InstanceAlias
                        }]);
                    }).catch(() => { });
                }).catch(() => { }),
                sdkcall("Connect", "listQuickConnects", {
                    InstanceId: instance.Id
                }, true).then(async (data) => {
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
                    await Promise.all(data.UserHierarchyGroupSummaryList.map(userhierarchygroup => {
                        return sdkcall("Connect", "describeUserHierarchyGroup", {
                            InstanceId: instance.Id,
                            HierarchyGroupId: userhierarchygroup.Id
                        }, true).then(async (data) => {
                            data.HierarchyGroup['InstanceArn'] = instance.Arn;
    
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
                }).catch(() => { }),
                sdkcall("Connect", "listContactFlows", {
                    InstanceId: instance.Id
                }, true).then(async (data) => {
                    await Promise.all(data.ContactFlowSummaryList.map(contactflow => {
                        return sdkcall("Connect", "describeContactFlow", {
                            InstanceId: instance.Id,
                            ContactFlowId: contactflow.Id
                        }, true).then(async (data) => {
                            data.ContactFlow['InstanceArn'] = instance.Arn;
    
                            $('#section-businessapplications-connect-contactflows-datatable').deferredBootstrapTable('append', [{
                                f2id: data.ContactFlow.Arn,
                                f2type: 'connect.contactflow',
                                f2data: data.ContactFlow,
                                f2region: region,
                                name: data.ContactFlow.Name,
                                description: data.ContactFlow.Description,
                                instancearn: instance.Id
                            }]);
                        });
                    }));
                }).catch(() => { }),
                sdkcall("Connect", "listContactFlowModules", {
                    InstanceId: instance.Id
                }, true).then(async (data) => {
                    await Promise.all(data.ContactFlowModulesSummaryList.map(contactflowmodule => {
                        return sdkcall("Connect", "describeContactFlowModule", {
                            InstanceId: instance.Id,
                            ContactFlowModuleId: contactflowmodule.Id
                        }, true).then(async (data) => {
                            data.ContactFlowModule['InstanceArn'] = instance.Arn;
    
                            $('#section-businessapplications-connect-contactflowmodules-datatable').deferredBootstrapTable('append', [{
                                f2id: data.ContactFlowModule.Arn,
                                f2type: 'connect.contactflowmodule',
                                f2data: data.ContactFlowModule,
                                f2region: region,
                                name: data.ContactFlowModule.Name,
                                description: data.ContactFlowModule.Description,
                                instancearn: instance.Id
                            }]);
                        });
                    }));
                }).catch(() => { }),
                sdkcall("Connect", "listPhoneNumbersV2", {
                    TargetArn: instance.Arn
                }, true).then(async (data) => {
                    await Promise.all(data.ListPhoneNumbersSummaryList.map(phonenumber => {
                        return sdkcall("Connect", "describePhoneNumber", {
                            PhoneNumberId: phonenumber.PhoneNumberId
                        }, true).then(async (data) => {
                            data.ClaimedPhoneNumberSummary['InstanceArn'] = instance.Arn;
    
                            $('#section-businessapplications-connect-phonenumbers-datatable').deferredBootstrapTable('append', [{
                                f2id: data.ClaimedPhoneNumberSummary.PhoneNumberArn,
                                f2type: 'connect.phonenumber',
                                f2data: data.ClaimedPhoneNumberSummary,
                                f2region: region,
                                phonenumber: data.ClaimedPhoneNumberSummary.PhoneNumber,
                                description: data.ClaimedPhoneNumberSummary.PhoneNumberDescription
                            }]);
                        });
                    }));
                }).catch(() => { }),
                sdkcall("Connect", "listTaskTemplates", {
                    InstanceId: instance.Id
                }, false).then(async (data) => {
                    await Promise.all(data.TaskTemplates.map(async (tasktemplate) => {
                        return sdkcall("Connect", "getTaskTemplate", {
                            InstanceId: instance.Id,
                            TaskTemplateId: tasktemplate.Id
                        }, true).then(async (data) => {
                            $('#section-businessapplications-connect-tasktemplates-datatable').deferredBootstrapTable('append', [{
                                f2id: data.Arn,
                                f2type: 'connect.tasktemplate',
                                f2data: data,
                                f2region: region,
                                name: data.Name,
                                description: data.Description
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
    }).catch(() => { });

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
    }).catch(() => { });

    await sdkcall("AppIntegrations", "listEventIntegrations", {
        // no params
    }, false).then(async (data) => {
        $('#section-businessapplications-connect-eventintegrations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.EventIntegrations.map(async (eventintegration) => {
            return sdkcall("AppIntegrations", "getEventIntegration", {
                Name: eventintegration.Name
            }, true).then(async (data) => {
                $('#section-businessapplications-connect-eventintegrations-datatable').deferredBootstrapTable('append', [{
                    f2id: data.EventIntegrationArn,
                    f2type: 'connect.eventintegration',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    description: data.Description
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("AppIntegrations", "listDataIntegrations", {
        // no params
    }, false).then(async (data) => {
        $('#section-businessapplications-connect-dataintegrations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DataIntegrations.map(async (dataintegration) => {
            return sdkcall("AppIntegrations", "getDataIntegration", {
                Identifier: dataintegration.Name
            }, true).then(async (data) => {
                $('#section-businessapplications-connect-dataintegrations-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'connect.dataintegration',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    description: data.Description
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("VoiceID", "listDomains", {
        // no params
    }, false).then(async (data) => {
        $('#section-businessapplications-connect-voiceiddomains-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DomainSummaries.map(async (domainsummary) => {
            return sdkcall("VoiceID", "describeDomain", {
                DomainId: domainsummary.DomainId
            }, true).then(async (data) => {
                $('#section-businessapplications-connect-voiceiddomains-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Domain.Arn,
                    f2type: 'connect.voiceiddomain',
                    f2data: data.Domain,
                    f2region: region,
                    name: data.Domain.Name,
                    description: data.Domain.Description
                }]);
            });
        }));
    }).catch(() => { });
    
    unblockUI('#section-businessapplications-connect-instances-datatable');
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
    unblockUI('#section-businessapplications-connect-contactflows-datatable');
    unblockUI('#section-businessapplications-connect-contactflowmodules-datatable');
    unblockUI('#section-businessapplications-connect-eventintegrations-datatable');
    unblockUI('#section-businessapplications-connect-dataintegrations-datatable');
    unblockUI('#section-businessapplications-connect-phonenumbers-datatable');
    unblockUI('#section-businessapplications-connect-voiceiddomains-datatable');
    unblockUI('#section-businessapplications-connect-tasktemplates-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "connect.instance") {
        reqParams.cfn['IdentityManagementType'] = obj.data.IdentityManagementType;
        reqParams.cfn['InstanceAlias'] = obj.data.InstanceAlias;
        reqParams.cfn['DirectoryId'] = "REPLACEME";
        if (obj.data.Attributes) {
            reqParams.cfn['Attributes'] = {};
            obj.data.Attributes.forEach(attribute => {
                try {
                    if (attribute.AttributeType == "AUTO_RESOLVE_BEST_VOICES") {
                        reqParams.cfn['Attributes']['AutoResolveBestVoices'] = JSON.parse(attribute.Value);
                    } else if (attribute.AttributeType == "CONTACTFLOW_LOGS") {
                        reqParams.cfn['Attributes']['ContactflowLogs'] = JSON.parse(attribute.Value);
                    } else if (attribute.AttributeType == "CONTACT_LENS") {
                        reqParams.cfn['Attributes']['ContactLens'] = JSON.parse(attribute.Value);
                    } else if (attribute.AttributeType == "EARLY_MEDIA") {
                        reqParams.cfn['Attributes']['EarlyMedia'] = JSON.parse(attribute.Value);
                    } else if (attribute.AttributeType == "INBOUND_CALLS") {
                        reqParams.cfn['Attributes']['InboundCalls'] = JSON.parse(attribute.Value);
                    } else if (attribute.AttributeType == "OUTBOUND_CALLS") {
                        reqParams.cfn['Attributes']['OutboundCalls'] = JSON.parse(attribute.Value);
                    } else if (attribute.AttributeType == "USE_CUSTOM_TTS_VOICES") {
                        reqParams.cfn['Attributes']['UseCustomTTSVoices'] = JSON.parse(attribute.Value);
                    }
                } catch (err) {}
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('connect', obj.id, 'AWS::Connect::Instance'),
            'region': obj.region,
            'service': 'connect',
            'type': 'AWS::Connect::Instance',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Id,
                'GetAtt': {
                    'Arn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "connect.customerprofilesdomain") {
        reqParams.cfn['DomainName'] = obj.data.DomainName;
        reqParams.cfn['DefaultEncryptionKey'] = obj.data.DefaultEncryptionKey;
        reqParams.cfn['DefaultExpirationDays'] = obj.data.DefaultExpirationDays;
        reqParams.cfn['DeadLetterQueueUrl'] = obj.data.DeadLetterQueueUrl;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.Tags) {
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.Tags[k]
                    });
                }
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
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.Tags[k]
                    });
                }
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
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.Tags[k]
                    });
                }
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
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.Tags[k]
                    });
                }
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
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.Tags[k]
                    });
                }
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
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.Tags[k]
                    });
                }
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
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.tags[k]
                    });
                }
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
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.tags[k]
                    });
                }
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
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.tags[k]
                    });
                }
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
    } else if (obj.type == "connect.contactflow") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['InstanceArn'] = obj.data.InstanceArn;
        reqParams.cfn['State'] = obj.data.State;
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.cfn['Content'] = JSON.stringify(JSON.parse(obj.data.Content), null, 2);
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.Tags) {
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.Tags[k]
                    });
                }
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('connect', obj.id, 'AWS::Connect::ContactFlow'),
            'region': obj.region,
            'service': 'connect',
            'type': 'AWS::Connect::ContactFlow',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'GetAtt': {
                    'ContactFlowArn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "connect.contactflowmodule") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['InstanceArn'] = obj.data.InstanceArn;
        reqParams.cfn['State'] = obj.data.State;
        reqParams.cfn['Content'] = JSON.stringify(JSON.parse(obj.data.Content), null, 2);
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.Tags) {
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.Tags[k]
                    });
                }
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('connect', obj.id, 'AWS::Connect::ContactFlowModule'),
            'region': obj.region,
            'service': 'connect',
            'type': 'AWS::Connect::ContactFlowModule',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'GetAtt': {
                    'ContactFlowModuleArn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "connect.eventintegration") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['EventBridgeBus'] = obj.data.EventBridgeBus;
        reqParams.cfn['EventFilter'] = obj.data.EventFilter;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.Tags) {
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.Tags[k]
                    });
                }
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('connect', obj.id, 'AWS::AppIntegrations::EventIntegration'),
            'region': obj.region,
            'service': 'connect',
            'type': 'AWS::AppIntegrations::EventIntegration',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'GetAtt': {
                    'EventIntegrationArn': obj.data.EventIntegrationArn
                }
            }
        });
    } else if (obj.type == "connect.dataintegration") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['KmsKey'] = obj.data.KmsKey;
        reqParams.cfn['SourceURI'] = obj.data.SourceURI;
        reqParams.cfn['ScheduleConfig'] = obj.data.ScheduleConfig;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.Tags) {
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.Tags[k]
                    });
                }
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('connect', obj.id, 'AWS::AppIntegrations::DataIntegration'),
            'region': obj.region,
            'service': 'connect',
            'type': 'AWS::AppIntegrations::DataIntegration',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'GetAtt': {
                    'DataIntegrationArn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "connect.phonenumber") {
        reqParams.cfn['CountryCode'] = obj.data.PhoneNumberCountryCode;
        reqParams.cfn['Type'] = obj.data.PhoneNumberType;
        reqParams.cfn['Description'] = obj.data.PhoneNumberDescription;
        reqParams.cfn['TargetArn'] = obj.data.TargetArn;
        reqParams.cfn['Prefix'] = obj.data.PhoneNumber.substr(4);
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.Tags) {
                if (!k.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': k,
                        'Value': obj.data.Tags[k]
                    });
                }
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('connect', obj.id, 'AWS::Connect::PhoneNumber'),
            'region': obj.region,
            'service': 'connect',
            'type': 'AWS::Connect::PhoneNumber',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.PhoneNumber,
                'GetAtt': {
                    'PhoneNumberArn': obj.data.PhoneNumberArn
                }
            }
        });
    } else if (obj.type == "connect.voiceiddomain") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['ServerSideEncryptionConfiguration'] = obj.data.ServerSideEncryptionConfiguration;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('connect', obj.id, 'AWS::VoiceID::Domain'),
            'region': obj.region,
            'service': 'connect',
            'type': 'AWS::VoiceID::Domain',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.DomainId
            }
        });
    } else if (obj.type == "connect.tasktemplate") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['ContactFlowArn'] = obj.data.Arn.split("/task-template/")[0] + "/contact-flow/" + obj.data.ContactFlowId;
        reqParams.cfn['Constraints'] = obj.data.Constraints;
        if (obj.data.Defaults) {
            reqParams.cfn['Defaults'] = obj.data.Defaults.DefaultFieldValues;
        }
        reqParams.cfn['Fields'] = obj.data.Fields;
        reqParams.cfn['InstanceArn'] = obj.data.Arn.split("/task-template/")[0];
        reqParams.cfn['Status'] = obj.data.Status;
        reqParams.cfn['Fields'] = obj.data.Fields;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.Tags).forEach(tagKey => {
                if (!tagKey.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': tagKey,
                        'Value': obj.data.Tags[tagKey]
                    });
                }
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('connect', obj.id, 'AWS::Connect::TaskTemplate'),
            'region': obj.region,
            'service': 'connect',
            'type': 'AWS::Connect::TaskTemplate',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
