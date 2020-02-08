/* ========================================================================== */
// Cognito
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity &amp; Compliance',
    'service': 'Cognito',
    'resourcetypes': {
        'Identity Pools': {
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'developerprovidername',
                        title: 'Developer Provider Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Identity Pool Role Attachments': {
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
                        title: 'Identity Pool ID',
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
                        field: 'roles',
                        title: 'Roles',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'User Pools': {
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'User Pool Clients': {
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'userpoolid',
                        title: 'User Pool ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'refreshtokenvalidity',
                        title: 'Refresh Token Validity',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'User Pool Users': {
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
                        field: 'userpoolid',
                        title: 'User Pool ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'User Pool Groups': {
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
                        field: 'userpoolid',
                        title: 'User Pool ID',
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
                    },
                    {
                        field: 'precedence',
                        title: 'Precedence',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'User Pool User To Group Attachments': {
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
                        title: 'User Name',
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
                        field: 'groupname',
                        title: 'Group Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'userpoolid',
                        title: 'User Pool ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'User Pool Domains': {
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
                        title: 'Domain',
                        field: 'domain',
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
                        field: 'userpoolid',
                        title: 'User Pool ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'User Pool Resource Servers': {
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
                        title: 'Identifier',
                        field: 'identifier',
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
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'userpoolid',
                        title: 'User Pool ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'User Pool Identity Providers': {
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
                        field: 'userpoolid',
                        title: 'User Pool ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'User Pool Risk Configuration Attachments': {
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
                        title: 'User Pool ID',
                        field: 'userpoolid',
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
                        field: 'clientid',
                        title: 'Client ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'User Pool UI Customization Attachments': {
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
                        title: 'User Pool ID',
                        field: 'userpoolid',
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
                        field: 'clientid',
                        title: 'Client ID',
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

async function updateDatatableSecurityIdentityAndComplianceCognito() {
    blockUI('#section-securityidentityandcompliance-cognito-identitypools-datatable');
    blockUI('#section-securityidentityandcompliance-cognito-identitypoolroleattachments-datatable');
    blockUI('#section-securityidentityandcompliance-cognito-userpools-datatable');
    blockUI('#section-securityidentityandcompliance-cognito-userpooldomains-datatable');
    blockUI('#section-securityidentityandcompliance-cognito-userpoolresourceservers-datatable');
    blockUI('#section-securityidentityandcompliance-cognito-userpoolidentityproviders-datatable');
    blockUI('#section-securityidentityandcompliance-cognito-userpoolriskconfigurationattachments-datatable');
    blockUI('#section-securityidentityandcompliance-cognito-userpooluicustomizationattachments-datatable');
    blockUI('#section-securityidentityandcompliance-cognito-userpoolclients-datatable');
    blockUI('#section-securityidentityandcompliance-cognito-userpoolusers-datatable');
    blockUI('#section-securityidentityandcompliance-cognito-userpoolgroups-datatable');
    blockUI('#section-securityidentityandcompliance-cognito-userpoolusertogroupattachments-datatable');

    await sdkcall("CognitoIdentity", "listIdentityPools", {
        MaxResults: 60 // WTF, required!
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-cognito-identitypools-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-identitypoolroleattachments-datatable').bootstrapTable('removeAll');

        await Promise.all(data.IdentityPools.map(identityPool => {
            return Promise.all([
                sdkcall("CognitoIdentity", "getIdentityPoolRoles", {
                    IdentityPoolId: identityPool.IdentityPoolId
                }, true).then((data) => {
                    let roles = null;
                    if (data.Roles) {
                        roles = Object.values(data.Roles).join(", ");
                    }

                    $('#section-securityidentityandcompliance-cognito-identitypoolroleattachments-datatable').bootstrapTable('append', [{
                        f2id: data.IdentityPoolId,
                        f2type: 'cognito.identitypoolroleattachment',
                        f2data: data,
                        f2region: region,
                        id: data.IdentityPoolId,
                        roles: roles
                    }]);
                }),
                sdkcall("CognitoIdentity", "describeIdentityPool", {
                    IdentityPoolId: identityPool.IdentityPoolId
                }, true).then((data) => {
                    $('#section-securityidentityandcompliance-cognito-identitypools-datatable').bootstrapTable('append', [{
                        f2id: data.IdentityPoolId,
                        f2type: 'cognito.identitypool',
                        f2data: data,
                        f2region: region,
                        name: data.IdentityPoolName,
                        id: data.IdentityPoolId,
                        developerprovidername: data.DeveloperProviderName
                    }]);
                })
            ]);
        }));

        unblockUI('#section-securityidentityandcompliance-cognito-identitypools-datatable');
        unblockUI('#section-securityidentityandcompliance-cognito-identitypoolroleattachments-datatable');
    });

    await sdkcall("CognitoIdentityServiceProvider", "listUserPools", {
        MaxResults: 60 // WTF? required!
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-cognito-userpools-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpooldomains-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpoolresourceservers-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpoolidentityproviders-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpoolriskconfigurationattachments-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpooluicustomizationattachments-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpoolclients-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpoolusers-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpoolgroups-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpoolusertogroupattachments-datatable').bootstrapTable('removeAll');

        await Promise.all(data.UserPools.map(userPool => {
            return Promise.all([
                userPool.Domain ? sdkcall("CognitoIdentityServiceProvider", "describeUserPoolDomain", {
                    Domain: userPool.Domain
                }, true).then(async (data) => {
                    $('#section-securityidentityandcompliance-cognito-userpooldomains-datatable').bootstrapTable('append', [{
                        f2id: data.DomainDescription.Domain,
                        f2type: 'cognito.userpooldomain',
                        f2data: data.DomainDescription,
                        f2region: region,
                        domain: data.DomainDescription.Domain,
                        userpoolid: data.DomainDescription.UserPoolId
                    }]);
                }) : Promise.resolve(),
                sdkcall("CognitoIdentityServiceProvider", "listResourceServers", {
                    UserPoolId: userPool.Id,
                    MaxResults: 50 // WTF? required!
                }, true).then(async (data) => {
                    await Promise.all(data.ResourceServers.map(resourceServer => {
                        return sdkcall("CognitoIdentityServiceProvider", "describeResourceServer", {
                            UserPoolId: resourceServer.UserPoolId,
                            Identifier: resourceServer.Identifier
                        }, true).then((data) => {
                            $('#section-securityidentityandcompliance-cognito-userpoolresourceservers-datatable').bootstrapTable('append', [{
                                f2id: data.ResourceServer.Identifier,
                                f2type: 'cognito.userpoolresourceserver',
                                f2data: data.ResourceServer,
                                f2region: region,
                                name: data.ResourceServer.Name,
                                userpoolid: data.ResourceServer.UserPoolId,
                                identifier: data.ResourceServer.Identifier
                            }]);
                        });
                    }));
                }),
                sdkcall("CognitoIdentityServiceProvider", "listIdentityProviders", {
                    UserPoolId: userPool.Id
                }, true).then(async (data) => {
                    await Promise.all(data.Providers.map(provider => {
                        return sdkcall("CognitoIdentityServiceProvider", "describeIdentityProvider", {
                            UserPoolId: userPool.Id,
                            ProviderName: provider.ProviderName
                        }, true).then((data) => {
                            $('#section-securityidentityandcompliance-cognito-userpoolidentityproviders-datatable').bootstrapTable('append', [{
                                f2id: data.IdentityProvider.ProviderName,
                                f2type: 'cognito.userpoolidentityprovider',
                                f2data: data.IdentityProvider,
                                f2region: region,
                                name: data.IdentityProvider.ProviderName,
                                userpoolid: data.IdentityProvider.UserPoolId,
                                type: data.IdentityProvider.ProviderType
                            }]);
                        });
                    }));
                }),
                sdkcall("CognitoIdentityServiceProvider", "describeRiskConfiguration", {
                    UserPoolId: userPool.Id
                }, false).then((data) => {
                    $('#section-securityidentityandcompliance-cognito-userpoolriskconfigurationattachments-datatable').bootstrapTable('append', [{
                        f2id: data.RiskConfiguration.UserPoolId + " " + data.RiskConfiguration.ClientId,
                        f2type: 'cognito.userpoolriskconfigurationattachment',
                        f2data: data.RiskConfiguration,
                        f2region: region,
                        userpoolid: data.RiskConfiguration.UserPoolId,
                        clientid: data.RiskConfiguration.ClientId
                    }]);
                }).catch(() => { }),
                sdkcall("CognitoIdentityServiceProvider", "getUICustomization", {
                    UserPoolId: userPool.Id
                }, false).then((data) => {
                    $('#section-securityidentityandcompliance-cognito-userpooluicustomizationattachments-datatable').bootstrapTable('append', [{
                        f2id: data.UICustomization.UserPoolId + " " + data.UICustomization.ClientId,
                        f2type: 'cognito.userpooluicustomizationattachment',
                        f2data: data.UICustomization,
                        f2region: region,
                        userpoolid: data.UICustomization.UserPoolId,
                        clientid: data.UICustomization.ClientId
                    }]);
                }).catch(() => { }),
                sdkcall("CognitoIdentityServiceProvider", "listUserPoolClients", {
                    UserPoolId: userPool.Id
                }, true).then(async (data) => {
                    await Promise.all(data.UserPoolClients.map(userPoolClient => {
                        return sdkcall("CognitoIdentityServiceProvider", "describeUserPoolClient", {
                            UserPoolId: userPool.Id,
                            ClientId: userPoolClient.ClientId
                        }, true).then((data) => {
                            $('#section-securityidentityandcompliance-cognito-userpoolclients-datatable').bootstrapTable('append', [{
                                f2id: data.UserPoolClient.ClientId,
                                f2type: 'cognito.userpoolclient',
                                f2data: data.UserPoolClient,
                                f2region: region,
                                name: data.UserPoolClient.ClientName,
                                userpoolid: data.UserPoolClient.UserPoolId,
                                id: data.UserPoolClient.ClientId,
                                refreshtokenvalidity: data.UserPoolClient.RefreshTokenValidity + " days"
                            }]);
                        });
                    }));
                }),
                sdkcall("CognitoIdentityServiceProvider", "listUsers", {
                    UserPoolId: userPool.Id
                }, true).then(async (data) => {
                    await Promise.all(data.Users.map(async (user) => {
                        await sdkcall("CognitoIdentityServiceProvider", "adminListGroupsForUser", {
                            UserPoolId: userPool.Id,
                            Username: user.Username
                        }, true).then((data) => {
                            data.Groups.forEach(group => {
                                $('#section-securityidentityandcompliance-cognito-userpoolusertogroupattachments-datatable').bootstrapTable('append', [{
                                    f2id: user.Username + group.GroupName,
                                    f2type: 'cognito.userpoolusertogroupattachment',
                                    f2data: {
                                        'user': user,
                                        'group': group,
                                        'userpoolid': userPool.Id
                                    },
                                    f2region: region,
                                    username: user.Username,
                                    groupname: group.GroupName,
                                    userpoolid: userPool.Id
                                }]);
                            });
                        });

                        return sdkcall("CognitoIdentityServiceProvider", "adminGetUser", {
                            UserPoolId: userPool.Id,
                            Username: user.Username
                        }, true).then((data) => {
                            data["UserPoolId"] = userPool.Id;

                            $('#section-securityidentityandcompliance-cognito-userpoolusers-datatable').bootstrapTable('append', [{
                                f2id: data.Username,
                                f2type: 'cognito.userpooluser',
                                f2data: data,
                                f2region: region,
                                name: data.Username,
                                userpoolid: userPool.Id
                            }]);
                        });
                    }));
                }),
                sdkcall("CognitoIdentityServiceProvider", "listGroups", {
                    UserPoolId: userPool.Id
                }, true).then(async (data) => {
                    await Promise.all(data.Groups.map(group => {
                        return sdkcall("CognitoIdentityServiceProvider", "getGroup", {
                            UserPoolId: userPool.Id,
                            GroupName: group.GroupName
                        }, true).then((data) => {
                            $('#section-securityidentityandcompliance-cognito-userpoolgroups-datatable').bootstrapTable('append', [{
                                f2id: data.Group.GroupName,
                                f2type: 'cognito.userpoolgroup',
                                f2data: data.Group,
                                f2region: region,
                                name: data.Group.GroupName,
                                userpoolid: data.Group.UserPoolId,
                                description: data.Group.Description,
                                precedence: data.Group.Precedence
                            }]);
                        });
                    }));
                }),
                sdkcall("CognitoIdentityServiceProvider", "describeUserPool", {
                    UserPoolId: userPool.Id
                }, true).then((data) => {
                    $('#section-securityidentityandcompliance-cognito-userpools-datatable').bootstrapTable('append', [{
                        f2id: data.UserPool.Arn,
                        f2type: 'cognito.userpool',
                        f2data: data.UserPool,
                        f2region: region,
                        name: data.UserPool.Name,
                        id: data.UserPool.Id
                    }]);
                })
            ]);
        }));

        unblockUI('#section-securityidentityandcompliance-cognito-userpools-datatable');
        unblockUI('#section-securityidentityandcompliance-cognito-userpooldomains-datatable');
        unblockUI('#section-securityidentityandcompliance-cognito-userpoolresourceservers-datatable');
        unblockUI('#section-securityidentityandcompliance-cognito-userpoolidentityproviders-datatable');
        unblockUI('#section-securityidentityandcompliance-cognito-userpoolriskconfigurationattachments-datatable');
        unblockUI('#section-securityidentityandcompliance-cognito-userpooluicustomizationattachments-datatable');
        unblockUI('#section-securityidentityandcompliance-cognito-userpoolclients-datatable');
        unblockUI('#section-securityidentityandcompliance-cognito-userpoolusers-datatable');
        unblockUI('#section-securityidentityandcompliance-cognito-userpoolgroups-datatable');
        unblockUI('#section-securityidentityandcompliance-cognito-userpoolusertogroupattachments-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
