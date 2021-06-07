/* ========================================================================== */
// Cognito
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity, &amp; Compliance',
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
        $('#section-securityidentityandcompliance-cognito-identitypools-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-identitypoolroleattachments-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.IdentityPools.map(identityPool => {
            return Promise.all([
                sdkcall("CognitoIdentity", "getIdentityPoolRoles", {
                    IdentityPoolId: identityPool.IdentityPoolId
                }, true).then((data) => {
                    let roles = null;
                    if (data.Roles) {
                        roles = Object.values(data.Roles).join(", ");
                    }

                    $('#section-securityidentityandcompliance-cognito-identitypoolroleattachments-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-securityidentityandcompliance-cognito-identitypools-datatable').deferredBootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-cognito-userpools-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpooldomains-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpoolresourceservers-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpoolidentityproviders-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpoolriskconfigurationattachments-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpooluicustomizationattachments-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpoolclients-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpoolusers-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpoolgroups-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cognito-userpoolusertogroupattachments-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.UserPools.map(userPool => {
            return Promise.all([
                sdkcall("CognitoIdentityServiceProvider", "listResourceServers", {
                    UserPoolId: userPool.Id,
                    MaxResults: 50 // WTF? required!
                }, true).then(async (data) => {
                    await Promise.all(data.ResourceServers.map(resourceServer => {
                        return sdkcall("CognitoIdentityServiceProvider", "describeResourceServer", {
                            UserPoolId: resourceServer.UserPoolId,
                            Identifier: resourceServer.Identifier
                        }, true).then((data) => {
                            $('#section-securityidentityandcompliance-cognito-userpoolresourceservers-datatable').deferredBootstrapTable('append', [{
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
                            $('#section-securityidentityandcompliance-cognito-userpoolidentityproviders-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-securityidentityandcompliance-cognito-userpoolriskconfigurationattachments-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-securityidentityandcompliance-cognito-userpooluicustomizationattachments-datatable').deferredBootstrapTable('append', [{
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
                            $('#section-securityidentityandcompliance-cognito-userpoolclients-datatable').deferredBootstrapTable('append', [{
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
                                $('#section-securityidentityandcompliance-cognito-userpoolusertogroupattachments-datatable').deferredBootstrapTable('append', [{
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

                            $('#section-securityidentityandcompliance-cognito-userpoolusers-datatable').deferredBootstrapTable('append', [{
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
                            $('#section-securityidentityandcompliance-cognito-userpoolgroups-datatable').deferredBootstrapTable('append', [{
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
                }, true).then(async (data) => {
                    $('#section-securityidentityandcompliance-cognito-userpools-datatable').deferredBootstrapTable('append', [{
                        f2id: data.UserPool.Arn,
                        f2type: 'cognito.userpool',
                        f2data: data.UserPool,
                        f2region: region,
                        name: data.UserPool.Name,
                        id: data.UserPool.Id
                    }]);

                    await sdkcall("CognitoIdentityServiceProvider", "describeUserPoolDomain", {
                        Domain: data.UserPool.CustomDomain || data.UserPool.Domain
                    }, false).then(async (domaindata) => {
                        $('#section-securityidentityandcompliance-cognito-userpooldomains-datatable').deferredBootstrapTable('append', [{
                            f2id: domaindata.DomainDescription.Domain + " UserPoolDomain",
                            f2type: 'cognito.userpooldomain',
                            f2data: domaindata.DomainDescription,
                            f2region: region,
                            domain: domaindata.DomainDescription.Domain,
                            userpoolid: domaindata.DomainDescription.UserPoolId
                        }]);
                    }).catch(() => { });
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
    if (obj.type == "cognito.identitypool") {
        reqParams.cfn['IdentityPoolName'] = obj.data.IdentityPoolName;
        reqParams.tf['identity_pool_name'] = obj.data.IdentityPoolName;
        reqParams.cfn['AllowUnauthenticatedIdentities'] = obj.data.AllowUnauthenticatedIdentities;
        reqParams.tf['allow_unauthenticated_identities'] = obj.data.AllowUnauthenticatedIdentities;
        reqParams.cfn['SupportedLoginProviders'] = obj.data.SupportedLoginProviders;
        reqParams.tf['supported_login_providers'] = obj.data.SupportedLoginProviders;
        reqParams.cfn['DeveloperProviderName'] = obj.data.DeveloperProviderName;
        reqParams.tf['developer_provider_name'] = obj.data.DeveloperProviderName;
        reqParams.cfn['OpenIdConnectProviderARNs'] = obj.data.OpenIdConnectProviderARNs;
        reqParams.tf['openid_connect_provider_arns'] = obj.data.OpenIdConnectProviderARNs;
        reqParams.cfn['CognitoIdentityProviders'] = obj.data.CognitoIdentityProviders;
        if (obj.data.CognitoIdentityProviders) {
            reqParams.tf['cognito_identity_providers'] = [];
            obj.data.CognitoIdentityProviders.forEach(cognitoidentityprovider => {
                reqParams.tf['cognito_identity_providers'].push({
                    'client_id': cognitoidentityprovider.ClientId,
                    'provider_name': cognitoidentityprovider.ProviderName,
                    'server_side_token_check': cognitoidentityprovider.ServerSideTokenCheck
                });
            });
        }
        reqParams.cfn['SamlProviderARNs'] = obj.data.SamlProviderARNs;
        reqParams.tf['saml_provider_arns'] = obj.data.SamlProviderARNs;

        /*
        TODO:
        CognitoStreams: 
            - CognitoStreams
        PushSync: 
            - PushSync
        CognitoEvents: 
            String: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cognito', obj.id, 'AWS::Cognito::IdentityPool'),
            'region': obj.region,
            'service': 'cognito',
            'type': 'AWS::Cognito::IdentityPool',
            'terraformType': 'aws_cognito_identity_pool',
            'options': reqParams
        });
    } else if (obj.type == "cognito.identitypoolroleattachment") {
        reqParams.cfn['IdentityPoolId'] = obj.data.IdentityPoolId;
        reqParams.tf['identity_pool_id'] = obj.data.IdentityPoolId;
        reqParams.cfn['RoleMappings'] = obj.data.RoleMappings;
        if (obj.data.RoleMappings) {
            reqParams.tf['role_mapping'] = [];
            Object.keys(obj.data.RoleMappings).forEach(rolemapping => {
                var mappingrules = null;
                if (obj.data.RoleMappings[rolemapping].RulesConfiguration && obj.data.RoleMappings[rolemapping].RulesConfiguration.Rules) {
                    mappingrules = [];
                    obj.data.RoleMappings[rolemapping].RulesConfiguration.Rules.forEach(mappingrule => {
                        mappingrules.push({
                            'claim': mappingrule.Claim,
                            'match_type': mappingrule.MatchType,
                            'role_arn': mappingrule.RoleARN,
                            'value': mappingrule.Value
                        });
                    });
                }
                reqParams.tf['role_mapping'].push({
                    'identity_provider': rolemapping,
                    'ambiguous_role_resolution': obj.data.RoleMappings[rolemapping].AmbiguousRoleResolution,
                    'type': obj.data.RoleMappings[rolemapping].Type,
                    'mapping_rule': mappingrules
                });
            });
        }
        reqParams.cfn['Roles'] = obj.data.Roles;
        reqParams.tf['roles'] = obj.data.Roles;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cognito', obj.id, 'AWS::Cognito::IdentityPoolRoleAttachment'),
            'region': obj.region,
            'service': 'cognito',
            'type': 'AWS::Cognito::IdentityPoolRoleAttachment',
            'terraformType': 'aws_cognito_identity_pool_roles_attachment',
            'options': reqParams
        });
    } else if (obj.type == "cognito.userpool") {
        reqParams.cfn['UserPoolName'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['Policies'] = obj.data.Policies;
        var temporary_password_validity = false;
        if (obj.data.Policies && obj.data.Policies.PasswordPolicy) {
            if (obj.data.Policies.PasswordPolicy.TemporaryPasswordValidityDays) {
                temporary_password_validity = true;
            }
            reqParams.tf['password_policy'] = {
                'minimum_length': obj.data.Policies.PasswordPolicy.MinimumLength,
                'require_lowercase': obj.data.Policies.PasswordPolicy.RequireLowercase,
                'require_numbers': obj.data.Policies.PasswordPolicy.RequireNumbers,
                'require_symbols': obj.data.Policies.PasswordPolicy.RequireSymbols,
                'require_uppercase': obj.data.Policies.PasswordPolicy.RequireUppercase
            };
        }
        if (obj.data.LambdaConfig) {
            reqParams.cfn['LambdaConfig'] = {
                'CreateAuthChallenge': obj.data.LambdaConfig.CreateAuthChallenge,
                'CustomMessage': obj.data.LambdaConfig.CustomMessage,
                'DefineAuthChallenge': obj.data.LambdaConfig.DefineAuthChallenge,
                'PostAuthentication': obj.data.LambdaConfig.PostAuthentication,
                'PostConfirmation': obj.data.LambdaConfig.PostConfirmation,
                'PreAuthentication': obj.data.LambdaConfig.PreAuthentication,
                'PreSignUp': obj.data.LambdaConfig.PreSignUp,
                'VerifyAuthChallengeResponse': obj.data.LambdaConfig.VerifyAuthChallengeResponse
            };
            reqParams.tf['lambda_config'] = {
                'create_auth_challenge': obj.data.LambdaConfig.CreateAuthChallenge,
                'custom_message': obj.data.LambdaConfig.CustomMessage,
                'define_auth_challenge': obj.data.LambdaConfig.DefineAuthChallenge,
                'post_authentication': obj.data.LambdaConfig.PostAuthentication,
                'post_confirmation': obj.data.LambdaConfig.PostConfirmation,
                'pre_authentication': obj.data.LambdaConfig.PreAuthentication,
                'pre_sign_up': obj.data.LambdaConfig.PreSignUp,
                'verify_auth_challenge_response': obj.data.LambdaConfig.VerifyAuthChallengeResponse
            };
        }
        reqParams.cfn['Schema'] = obj.data.SchemaAttributes;
        if (obj.data.SchemaAttributes) {
            reqParams.tf['schema'] = [];
            obj.data.SchemaAttributes.forEach(schemaattribute => {
                var numberattributeconstraints = null;
                if (schemaattribute.NumberAttributeConstraints) {
                    numberattributeconstraints = {
                        'max_value': schemaattribute.NumberAttributeConstraints.MaxValue,
                        'min_value': schemaattribute.NumberAttributeConstraints.MinValue
                    };
                }
                var stringattributeconstraints = null;
                if (schemaattribute.StringAttributeConstraints) {
                    stringattributeconstraints = {
                        'max_length': schemaattribute.StringAttributeConstraints.MaxLength,
                        'min_length': schemaattribute.StringAttributeConstraints.MinLength
                    };
                }
                reqParams.tf['schema'].push({
                    'attribute_data_type': schemaattribute.AttributeDataType,
                    'developer_only_attribute': schemaattribute.DeveloperOnlyAttribute,
                    'mutable': schemaattribute.Mutable,
                    'name': schemaattribute.Name,
                    'number_attribute_constraints': numberattributeconstraints,
                    'string_attribute_constraints': stringattributeconstraints,
                    'required': schemaattribute.Required
                });
            });
        }
        reqParams.cfn['AutoVerifiedAttributes'] = obj.data.AutoVerifiedAttributes;
        reqParams.tf['auto_verified_attributes'] = obj.data.AutoVerifiedAttributes;
        reqParams.cfn['AliasAttributes'] = obj.data.AliasAttributes;
        reqParams.tf['alias_attributes'] = obj.data.AliasAttributes;
        reqParams.cfn['UsernameAttributes'] = obj.data.UsernameAttributes;
        reqParams.tf['username_attributes'] = obj.data.UsernameAttributes;
        reqParams.cfn['SmsVerificationMessage'] = obj.data.SmsVerificationMessage;
        reqParams.tf['sms_verification_message'] = obj.data.SmsVerificationMessage;
        reqParams.cfn['EmailVerificationMessage'] = obj.data.EmailVerificationMessage;
        reqParams.tf['email_verification_message'] = obj.data.EmailVerificationMessage;
        reqParams.cfn['EmailVerificationSubject'] = obj.data.EmailVerificationSubject;
        reqParams.tf['email_verification_subject'] = obj.data.EmailVerificationSubject;
        reqParams.cfn['SmsAuthenticationMessage'] = obj.data.SmsAuthenticationMessage;
        reqParams.tf['sms_authentication_message'] = obj.data.SmsAuthenticationMessage;
        reqParams.cfn['MfaConfiguration'] = obj.data.MfaConfiguration;
        reqParams.tf['mfa_configuration'] = obj.data.MfaConfiguration;
        reqParams.cfn['DeviceConfiguration'] = obj.data.DeviceConfiguration;
        if (obj.data.DeviceConfiguration) {
            reqParams.tf['device_configuration'] = {
                'challenge_required_on_new_device': obj.data.DeviceConfiguration.ChallengeRequiredOnNewDevice,
                'device_only_remembered_on_user_prompt': obj.data.DeviceConfiguration.DeviceOnlyRememberedOnUserPrompt
            };
        }
        reqParams.cfn['EmailConfiguration'] = obj.data.EmailConfiguration;
        if (obj.data.EmailConfiguration) {
            reqParams.tf['email_configuration'] = {
                'reply_to_email_address': obj.data.EmailConfiguration.ReplyToEmailAddress,
                'source_arn': obj.data.EmailConfiguration.SourceArn
            };
        }
        reqParams.cfn['SmsConfiguration'] = obj.data.SmsConfiguration;
        if (obj.data.SmsConfiguration) {
            reqParams.tf['sms_configuration'] = {
                'external_id': obj.data.SmsConfiguration.ExternalId,
                'sns_caller_arn': obj.data.SmsConfiguration.SnsCallerArn
            };
        }
        if (obj.data.AdminCreateUserConfig) {
            reqParams.cfn['AdminCreateUserConfig'] = {
                'AllowAdminCreateUserOnly': obj.data.AdminCreateUserConfig.AllowAdminCreateUserOnly,
                'InviteMessageTemplate': obj.data.AdminCreateUserConfig.InviteMessageTemplate
            };
            if (!temporary_password_validity) {
                reqParams.cfn['AdminCreateUserConfig']['UnusedAccountValidityDays'] = obj.data.AdminCreateUserConfig.UnusedAccountValidityDays;
            }
        }
        if (obj.data.AdminCreateUserConfig) {
            var invitemessagetemplate = null;
            if (obj.data.AdminCreateUserConfig.InviteMessageTemplate) {
                invitemessagetemplate = {
                    'email_message': obj.data.AdminCreateUserConfig.InviteMessageTemplate.EmailMessage,
                    'email_subject': obj.data.AdminCreateUserConfig.InviteMessageTemplate.EmailSubject,
                    'sms_message': obj.data.AdminCreateUserConfig.InviteMessageTemplate.SMSMessage
                };
            }
            reqParams.tf['admin_create_user_config'] = {
                'allow_admin_create_user_only': obj.data.AdminCreateUserConfig.AllowAdminCreateUserOnly,
                'invite_message_template': invitemessagetemplate,
                'unused_account_validity_days': obj.data.AdminCreateUserConfig.UnusedAccountValidityDays
            };
        }
        reqParams.cfn['UserPoolTags'] = obj.data.UserPoolTags;
        if (obj.data.UserPoolTags) {
            reqParams.tf['tags'] = {};
            Object.keys(obj.data.UserPoolTags).forEach(tag => {
                reqParams.tf['tags'][tag] = obj.data.UserPoolTags[tag];
            });
        }
        reqParams.cfn['AccountRecoverySetting'] = obj.data.AccountRecoverySetting;
        reqParams.cfn['UsernameConfiguration'] = obj.data.UsernameConfiguration;
        reqParams.cfn['UserPoolAddOns'] = obj.data.UserPoolAddOns;
        reqParams.cfn['VerificationMessageTemplate'] = obj.data.VerificationMessageTemplate;

        /*
        TODO:
        EnabledMfas
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cognito', obj.id, 'AWS::Cognito::UserPool'),
            'region': obj.region,
            'service': 'cognito',
            'type': 'AWS::Cognito::UserPool',
            'terraformType': 'aws_cognito_user_pool',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Id,
                'GetAtt': {
                    'Arn': obj.data.Arn
                },
                'Terraform': {
                    'id': obj.data.Id,
                    'arn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "cognito.userpooluser") {
        reqParams.cfn['Username'] = obj.data.Username;
        reqParams.cfn['UserPoolId'] = obj.data.UserPoolId;
        reqParams.cfn['UserAttributes'] = obj.data.UserAttributes;

        /*
        TODO:
        ClientMetadata: Json
        DesiredDeliveryMediums: 
            - String
        ForceAliasCreation: Boolean
        MessageAction: String
        ValidationData: 
            - AttributeType
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cognito', obj.id, 'AWS::Cognito::UserPoolUser'),
            'region': obj.region,
            'service': 'cognito',
            'type': 'AWS::Cognito::UserPoolUser',
            'options': reqParams
        });
    } else if (obj.type == "cognito.userpoolgroup") {
        reqParams.cfn['GroupName'] = obj.data.GroupName;
        reqParams.cfn['UserPoolId'] = obj.data.UserPoolId;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Precedence'] = obj.data.Precedence;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cognito', obj.id, 'AWS::Cognito::UserPoolGroup'),
            'region': obj.region,
            'service': 'cognito',
            'type': 'AWS::Cognito::UserPoolGroup',
            'options': reqParams
        });
    } else if (obj.type == "cognito.userpoolusertogroupattachment") {
        reqParams.cfn['GroupName'] = obj.data.group.GroupName;
        reqParams.cfn['Username'] = obj.data.user.Username;
        reqParams.cfn['UserPoolId'] = obj.data.userpoolid;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cognito', obj.id, 'AWS::Cognito::UserPoolUserToGroupAttachment'),
            'region': obj.region,
            'service': 'cognito',
            'type': 'AWS::Cognito::UserPoolUserToGroupAttachment',
            'options': reqParams
        });
    } else if (obj.type == "cognito.userpoolclient") {
        reqParams.cfn['UserPoolId'] = obj.data.UserPoolId;
        reqParams.tf['user_pool_id'] = obj.data.UserPoolId;
        reqParams.cfn['ClientName'] = obj.data.ClientName;
        reqParams.tf['name'] = obj.data.ClientName;
        reqParams.cfn['RefreshTokenValidity'] = obj.data.RefreshTokenValidity;
        reqParams.tf['refresh_token_validity'] = obj.data.RefreshTokenValidity;
        reqParams.cfn['ReadAttributes'] = obj.data.ReadAttributes;
        reqParams.tf['read_attributes'] = obj.data.ReadAttributes;
        reqParams.cfn['WriteAttributes'] = obj.data.WriteAttributes;
        reqParams.tf['write_attributes'] = obj.data.WriteAttributes;
        reqParams.cfn['ExplicitAuthFlows'] = obj.data.ExplicitAuthFlows;
        reqParams.tf['explicit_auth_flows'] = obj.data.ExplicitAuthFlows;
        if (obj.data.ClientSecret && obj.data.ClientSecret.length > 0) {
            reqParams.cfn['GenerateSecret'] = true;
            reqParams.tf['generate_secret'] = true;
        }
        reqParams.cfn['PreventUserExistenceErrors'] = obj.data.PreventUserExistenceErrors;
        reqParams.cfn['AnalyticsConfiguration'] = obj.data.AnalyticsConfiguration;
        reqParams.cfn['SupportedIdentityProviders'] = obj.data.SupportedIdentityProviders;
        reqParams.cfn['CallbackURLs'] = obj.data.CallbackURLs;
        reqParams.cfn['LogoutURLs'] = obj.data.LogoutURLs;
        reqParams.cfn['DefaultRedirectURI'] = obj.data.DefaultRedirectURI;
        reqParams.cfn['AllowedOAuthFlows'] = obj.data.AllowedOAuthFlows;
        reqParams.cfn['AllowedOAuthScopes'] = obj.data.AllowedOAuthScopes;
        reqParams.cfn['AllowedOAuthFlowsUserPoolClient'] = obj.data.AllowedOAuthFlowsUserPoolClient;
        reqParams.cfn['AnalyticsConfiguration'] = obj.data.AnalyticsConfiguration;
        if (obj.data.ClientSecret) {
            reqParams.cfn['GenerateSecret'] = true;
        }
        reqParams.cfn['IdTokenValidity'] = obj.data.IdTokenValidity;
        reqParams.cfn['AccessTokenValidity'] = obj.data.AccessTokenValidity;
        reqParams.cfn['TokenValidityUnits'] = obj.data.TokenValidityUnits;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cognito', obj.id, 'AWS::Cognito::UserPoolClient'),
            'region': obj.region,
            'service': 'cognito',
            'type': 'AWS::Cognito::UserPoolClient',
            'terraformType': 'aws_cognito_user_pool_client',
            'options': reqParams
        });
    } else if (obj.type == "cognito.userpooldomain") {
        reqParams.cfn['Domain'] = obj.data.Domain;
        if (obj.data.CustomDomainConfig && obj.data.CustomDomainConfig.CertificateArn) {
            reqParams.cfn['CustomDomainConfig'] = obj.data.CustomDomainConfig;
        }
        reqParams.cfn['UserPoolId'] = obj.data.UserPoolId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cognito', obj.id, 'AWS::Cognito::UserPoolDomain'),
            'region': obj.region,
            'service': 'cognito',
            'type': 'AWS::Cognito::UserPoolDomain',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Domain
            }
        });
    } else if (obj.type == "cognito.userpoolresourceserver") {
        reqParams.cfn['Identifier'] = obj.data.Identifier;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['UserPoolId'] = obj.data.UserPoolId;
        reqParams.cfn['Scopes'] = obj.data.Scopes;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cognito', obj.id, 'AWS::Cognito::UserPoolResourceServer'),
            'region': obj.region,
            'service': 'cognito',
            'type': 'AWS::Cognito::UserPoolResourceServer',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Identifier
            }
        });
    } else if (obj.type == "cognito.userpoolidentityprovider") {
        reqParams.cfn['AttributeMapping'] = obj.data.AttributeMapping;
        reqParams.cfn['IdpIdentifiers'] = obj.data.IdpIdentifiers;
        reqParams.cfn['ProviderDetails'] = obj.data.ProviderDetails;
        reqParams.cfn['ProviderName'] = obj.data.ProviderName;
        reqParams.cfn['ProviderType'] = obj.data.ProviderType;
        reqParams.cfn['UserPoolId'] = obj.data.UserPoolId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cognito', obj.id, 'AWS::Cognito::UserPoolIdentityProvider'),
            'region': obj.region,
            'service': 'cognito',
            'type': 'AWS::Cognito::UserPoolIdentityProvider',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ProviderName
            }
        });
    } else if (obj.type == "cognito.userpoolriskconfigurationattachment") {
        reqParams.cfn['AccountTakeoverRiskConfiguration'] = obj.data.AccountTakeoverRiskConfiguration;
        reqParams.cfn['ClientId'] = obj.data.ClientId;
        reqParams.cfn['CompromisedCredentialsRiskConfiguration'] = obj.data.CompromisedCredentialsRiskConfiguration;
        reqParams.cfn['RiskExceptionConfiguration'] = obj.data.RiskExceptionConfiguration;
        reqParams.cfn['UserPoolId'] = obj.data.UserPoolId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cognito', obj.id, 'AWS::Cognito::UserPoolRiskConfigurationAttachment'),
            'region': obj.region,
            'service': 'cognito',
            'type': 'AWS::Cognito::UserPoolRiskConfigurationAttachment',
            'options': reqParams
        });
    } else if (obj.type == "cognito.userpooluicustomizationattachment") {
        reqParams.cfn['ClientId'] = obj.data.ClientId;
        reqParams.cfn['UserPoolId'] = obj.data.UserPoolId;
        reqParams.cfn['CSS'] = obj.data.CSS;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cognito', obj.id, 'AWS::Cognito::UserPoolUICustomizationAttachment'),
            'region': obj.region,
            'service': 'cognito',
            'type': 'AWS::Cognito::UserPoolUICustomizationAttachment',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
