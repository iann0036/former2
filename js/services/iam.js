/* ========================================================================== */
// IAM
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity, &amp; Compliance',
    'service': 'IAM',
    'resourcetypes': {
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'path',
                        title: 'Path',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Groups': {
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
                        field: 'path',
                        title: 'Path',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Roles': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'path',
                        title: 'Path',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Service Linked Roles': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'path',
                        title: 'Path',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Managed Policies': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'path',
                        title: 'Path',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Policies': {
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
                        field: 'owner',
                        title: 'Owner',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Instance Profiles': {
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
                        field: 'path',
                        title: 'Path',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Access Keys': {
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
                        field: 'username',
                        title: 'User Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Access Analyzer': {
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
                    }
                ]
            ]
        },
        'Virtual MFA Devices': {
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
                        title: 'Serial Number',
                        field: 'serialnumber',
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
        'Server Certificates': {
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
                    }
                ],
                [
                    // none
                ]
            ]
        },
        'SAML Providers': {
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
                    }
                ],
                [
                    // none
                ]
            ]
        },
        'OIDC Providers': {
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
        }
    }
});

async function updateDatatableSecurityIdentityAndComplianceIAM() {
    blockUI('#section-securityidentityandcompliance-iam-users-datatable');
    blockUI('#section-securityidentityandcompliance-iam-groups-datatable');
    blockUI('#section-securityidentityandcompliance-iam-roles-datatable');
    blockUI('#section-securityidentityandcompliance-iam-servicelinkedroles-datatable');
    blockUI('#section-securityidentityandcompliance-iam-managedpolicies-datatable');
    blockUI('#section-securityidentityandcompliance-iam-instanceprofiles-datatable');
    blockUI('#section-securityidentityandcompliance-iam-accesskeys-datatable');
    blockUI('#section-securityidentityandcompliance-iam-policies-datatable');
    blockUI('#section-securityidentityandcompliance-iam-accessanalyzer-datatable');
    blockUI('#section-securityidentityandcompliance-iam-virtualmfadevices-datatable');
    blockUI('#section-securityidentityandcompliance-iam-servercertificates-datatable');
    blockUI('#section-securityidentityandcompliance-iam-samlproviders-datatable');
    blockUI('#section-securityidentityandcompliance-iam-oidcproviders-datatable');

    $('#section-securityidentityandcompliance-iam-policies-datatable').deferredBootstrapTable('removeAll');

    await sdkcall("IAM", "listPolicies", {
        Scope: 'Local'
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-iam-managedpolicies-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Policies.map(managedPolicy => {
            if (!managedPolicy.Arn.startsWith("arn:aws:iam::aws")) {
                return sdkcall("IAM", "getPolicy", {
                    PolicyArn: managedPolicy.Arn
                }, true).then(async (policydata) => {
                    await sdkcall("IAM", "getPolicyVersion", {
                        PolicyArn: managedPolicy.Arn,
                        VersionId: policydata.Policy.DefaultVersionId
                    }, true).then((data) => {
                        managedPolicy['PolicyDocument'] = data.PolicyVersion.Document;
                        $('#section-securityidentityandcompliance-iam-managedpolicies-datatable').deferredBootstrapTable('append', [{
                            f2id: managedPolicy.Arn,
                            f2type: 'iam.managedpolicy',
                            f2data: managedPolicy,
                            f2region: region,
                            f2link: 'https://console.aws.amazon.com/iam/home#/policies/' + managedPolicy.Arn,
                            name: managedPolicy.PolicyName,
                            id: managedPolicy.PolicyId,
                            path: managedPolicy.Path,
                            description: managedPolicy.Description
                        }]);
                    });
                });
            }
            return Promise.resolve();
        }));
    });

    await Promise.all([
        sdkcall("IAM", "listGroups", {
            // no params
        }, true).then(async (data) => {
            $('#section-securityidentityandcompliance-iam-groups-datatable').deferredBootstrapTable('removeAll');

            await Promise.all(data.Groups.map(async (group) => {
                await sdkcall("IAM", "listAttachedGroupPolicies", {
                    GroupName: group.GroupName
                }, true).then((attachedpolicies) => {
                    group['AttachedPolicies'] = attachedpolicies.AttachedPolicies;

                    $('#section-securityidentityandcompliance-iam-groups-datatable').deferredBootstrapTable('append', [{
                        f2id: group.Arn,
                        f2type: 'iam.group',
                        f2data: group,
                        f2region: region,
                        f2link: 'https://console.aws.amazon.com/iam/home?#/groups/' + group.GroupName,
                        name: group.GroupName,
                        id: group.GroupId,
                        path: group.Path
                    }]);
                });

                return sdkcall("IAM", "listGroupPolicies", {
                    GroupName: group.GroupName
                }, true).then(async (data) => {
                    await Promise.all(data.PolicyNames.map(policyname => {
                        return sdkcall("IAM", "getGroupPolicy", {
                            PolicyName: policyname,
                            GroupName: group.GroupName
                        }, true).then(async (policydata) => {
                            $('#section-securityidentityandcompliance-iam-policies-datatable').deferredBootstrapTable('append', [{
                                f2id: group.GroupName + " " + policyname + " Group Inline Policy",
                                f2type: 'iam.policy',
                                f2data: {
                                    'type': 'group',
                                    'groupname': group.GroupName,
                                    'policyname': policyname,
                                    'document': policydata.PolicyDocument
                                },
                                f2region: region,
                                name: policyname,
                                owner: group.GroupName,
                                type: "Group"
                            }]);
                        });
                    }));
                });
            }));

            await sdkcall("IAM", "listUsers", {
                // no params
            }, true).then(async (data) => {
                $('#section-securityidentityandcompliance-iam-users-datatable').deferredBootstrapTable('removeAll');
                $('#section-securityidentityandcompliance-iam-accesskeys-datatable').deferredBootstrapTable('removeAll');

                await Promise.all(data.Users.map(async (user) => {
                    await Promise.all([
                        sdkcall("IAM", "listAttachedUserPolicies", {
                            UserName: user.UserName
                        }, true).then((attachedpolicies) => {
                            user['AttachedPolicies'] = attachedpolicies.AttachedPolicies;
                        }),
                        sdkcall("IAM", "listGroupsForUser", {
                            UserName: user.UserName
                        }, true).then((groups) => {
                            user['Groups'] = groups.Groups.map(group => group.GroupName);
                        }),
                        sdkcall("IAM", "getUser", {
                            UserName: user.UserName
                        }, true).then((res) => {
                            user['PermissionsBoundary'] = res.User.PermissionsBoundary;
                            user['Tags'] = res.User.Tags;
                        })
                    ]);

                    $('#section-securityidentityandcompliance-iam-users-datatable').deferredBootstrapTable('append', [{
                        f2id: user.Arn,
                        f2type: 'iam.user',
                        f2data: user,
                        f2region: region,
                        f2link: 'https://console.aws.amazon.com/iam/home?#/users/' + user.UserName,
                        username: user.UserName,
                        path: user.Path,
                        id: user.UserId
                    }]);

                    await sdkcall("IAM", "listAccessKeys", {
                        UserName: user.UserName
                    }, true).then((data) => {
                        data.AccessKeyMetadata.forEach(accessKey => {
                            $('#section-securityidentityandcompliance-iam-accesskeys-datatable').deferredBootstrapTable('append', [{
                                f2id: accessKey.AccessKeyId,
                                f2type: 'iam.accesskey',
                                f2data: accessKey,
                                f2region: region,
                                id: accessKey.AccessKeyId,
                                username: accessKey.UserName
                            }]);
                        });
                    });
                    
                    return sdkcall("IAM", "listUserPolicies", {
                        UserName: user.UserName
                    }, true).then(async (data) => {
                        await Promise.all(data.PolicyNames.map(policyname => {
                            return sdkcall("IAM", "getUserPolicy", {
                                PolicyName: policyname,
                                UserName: user.UserName
                            }, true).then(async (policydata) => {
                                $('#section-securityidentityandcompliance-iam-policies-datatable').deferredBootstrapTable('append', [{
                                    f2id: user.UserName + " " + policyname + " User Inline Policy",
                                    f2type: 'iam.policy',
                                    f2data: {
                                        'type': 'user',
                                        'username': user.UserName,
                                        'policyname': policyname,
                                        'document': policydata.PolicyDocument
                                    },
                                    f2region: region,
                                    name: policyname,
                                    owner: user.UserName,
                                    type: "User"
                                }]);
                            });
                        }));
                    });
                }));
            });
        }),
        sdkcall("IAM", "listRoles", {
            // no params
        }, true).then(async (data) => {
            $('#section-securityidentityandcompliance-iam-roles-datatable').deferredBootstrapTable('removeAll');
            $('#section-securityidentityandcompliance-iam-servicelinkedroles-datatable').deferredBootstrapTable('removeAll');
            
            await Promise.all(data.Roles.map(async (role) => {
                await sdkcall("IAM", "getRole", {
                    RoleName: role.RoleName
                }, true).then((res) => {
                    role['PermissionsBoundary'] = res.Role.PermissionsBoundary;
                    role['Tags'] = res.Role.Tags;
                });

                if (role.Path.startsWith("/aws-service-role/")) {
                    if (
                        role.RoleName != "AWSServiceRoleForSupport" &&
                        role.RoleName != "AWSServiceRoleForTrustedAdvisor"
                    ) {
                        $('#section-securityidentityandcompliance-iam-servicelinkedroles-datatable').deferredBootstrapTable('append', [{
                            f2id: role.Arn,
                            f2type: 'iam.servicelinkedrole',
                            f2data: role,
                            f2region: region,
                            name: role.RoleName,
                            path: role.Path,
                            id: role.RoleId,
                            description: role.Description
                        }]);
                    }
                } else {
                    await sdkcall("IAM", "listAttachedRolePolicies", {
                        RoleName: role.RoleName
                    }, true).then((attachedpolicies) => {
                        role['AttachedPolicies'] = attachedpolicies.AttachedPolicies;

                        $('#section-securityidentityandcompliance-iam-roles-datatable').deferredBootstrapTable('append', [{
                            f2id: role.Arn,
                            f2type: 'iam.role',
                            f2data: role,
                            f2region: region,
                            f2link: 'https://console.aws.amazon.com/iam/home?#/roles/' + role.RoleName,
                            name: role.RoleName,
                            path: role.Path,
                            id: role.RoleId,
                            description: role.Description
                        }]);
                    });
                }

                return sdkcall("IAM", "listRolePolicies", {
                    RoleName: role.RoleName
                }, true).then(async (data) => {
                    await Promise.all(data.PolicyNames.map(policyname => {
                        return sdkcall("IAM", "getRolePolicy", {
                            PolicyName: policyname,
                            RoleName: role.RoleName
                        }, true).then(async (policydata) => {
                            $('#section-securityidentityandcompliance-iam-policies-datatable').deferredBootstrapTable('append', [{
                                f2id: role.RoleName + " " + policyname + " Role Inline Policy",
                                f2type: 'iam.policy',
                                f2data: {
                                    'type': 'role',
                                    'rolename': role.RoleName,
                                    'policyname': policyname,
                                    'document': policydata.PolicyDocument
                                },
                                f2region: region,
                                name: policyname,
                                owner: role.RoleName,
                                type: "Role"
                            }]);
                        });
                    }));
                });
            }));
        })
    ]);

    await sdkcall("IAM", "listInstanceProfiles", {
        // no params
    }, true).then((data) => {
        $('#section-securityidentityandcompliance-iam-instanceprofiles-datatable').deferredBootstrapTable('removeAll');

        data.InstanceProfiles.forEach(instanceProfile => {
            $('#section-securityidentityandcompliance-iam-instanceprofiles-datatable').deferredBootstrapTable('append', [{
                f2id: instanceProfile.Arn,
                f2type: 'iam.instanceprofile',
                f2data: instanceProfile,
                f2region: region,
                name: instanceProfile.InstanceProfileName,
                id: instanceProfile.InstanceProfileId,
                path: instanceProfile.Path
            }]);
        });
    });

    await sdkcall("AccessAnalyzer", "listAnalyzers", {
        type: 'ACCOUNT'
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-iam-accessanalyzer-datatable').deferredBootstrapTable('removeAll');

        data.analyzers.forEach(async (analyzer) => {
            await sdkcall("AccessAnalyzer", "getAnalyzer", {
                analyzerName: analyzer.name
            }, true).then(async (data) => {
                await sdkcall("AccessAnalyzer", "listArchiveRules", {
                    analyzerName: analyzer.name
                }, true).then(async (archiverulesdata) => {
                    if (archiverulesdata.archiveRules && Object.keys(archiverulesdata.archiveRules).length > 0) {
                        data.analyzer['archiveRules'] = archiverulesdata.archiveRules;
                    }
                });

                $('#section-securityidentityandcompliance-iam-accessanalyzer-datatable').deferredBootstrapTable('append', [{
                    f2id: data.analyzer.arn,
                    f2type: 'iam.accessanalyzer',
                    f2data: data.analyzer,
                    f2region: region,
                    name: data.analyzer.name,
                    type: data.analyzer.type
                }]);
            });
        });
    }).catch(() => { });

    await sdkcall("IAM", "listVirtualMFADevices", {
        // no params
    }, true).then((data) => {
        $('#section-securityidentityandcompliance-iam-virtualmfadevices-datatable').deferredBootstrapTable('removeAll');

        data.VirtualMFADevices.forEach(virtualMFADevice => {
            if (virtualMFADevice.User) {
                $('#section-securityidentityandcompliance-iam-virtualmfadevices-datatable').deferredBootstrapTable('append', [{
                    f2id: virtualMFADevice.Arn,
                    f2type: 'iam.virtualmfadevice',
                    f2data: virtualMFADevice,
                    f2region: region,
                    serialnumber: virtualMFADevice.SerialNumber
                }]);
            }
        });
    }).catch(() => { });

    await sdkcall("IAM", "listVirtualMFADevices", {
        // no params
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-iam-servercertificates-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ServerCertificateMetadataList.map(serverCertificate => {
            return sdkcall("IAM", "getServerCertificate", {
                ServerCertificateName: serverCertificate.ServerCertificateName
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-iam-servercertificates-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ServerCertificate.ServerCertificateMetadata.Arn,
                    f2type: 'iam.servercertificate',
                    f2data: data.ServerCertificate,
                    f2region: region,
                    name: data.ServerCertificate.ServerCertificateMetadata.ServerCertificateName
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("IAM", "listSAMLProviders", {
        // no params
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-iam-samlproviders-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.SAMLProviderList.map(SAMLProvider => {
            return sdkcall("IAM", "getSAMLProvider", {
                SAMLProviderArn: SAMLProvider.Arn
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-iam-samlproviders-datatable').deferredBootstrapTable('append', [{
                    f2id: SAMLProvider.Arn,
                    f2type: 'iam.samlprovider',
                    f2data: {
                        'Arn': SAMLProvider.Arn,
                        'Name': SAMLProvider.Arn.split("/").pop(),
                        'SamlMetadataDocument': data.SAMLMetadataDocument,
                        'Tags': data.Tags
                    },
                    f2region: region,
                    name: SAMLProvider.Arn.split("/").pop()
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("IAM", "listOpenIDConnectProviders", {
        // no params
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-iam-oidcproviders-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.OpenIDConnectProviderList.map(provider => {
            return sdkcall("IAM", "getOpenIDConnectProvider", {
                OpenIDConnectProviderArn: provider.Arn
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-iam-oidcproviders-datatable').deferredBootstrapTable('append', [{
                    f2id: provider.Arn,
                    f2type: 'iam.oidcprovider',
                    f2data: {
                        'Arn': provider.Arn,
                        'Url': data.Url,
                        'ClientIdList': data.ClientIDList,
                        'ThumbprintList': data.ThumbprintList,
                        'Tags': data.Tags
                    },
                    f2region: region,
                    arn: provider.Arn
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-securityidentityandcompliance-iam-instanceprofiles-datatable');
    unblockUI('#section-securityidentityandcompliance-iam-roles-datatable');
    unblockUI('#section-securityidentityandcompliance-iam-servicelinkedroles-datatable');
    unblockUI('#section-securityidentityandcompliance-iam-policies-datatable');
    unblockUI('#section-securityidentityandcompliance-iam-groups-datatable');
    unblockUI('#section-securityidentityandcompliance-iam-policies-datatable');
    unblockUI('#section-securityidentityandcompliance-iam-managedpolicies-datatable');
    unblockUI('#section-securityidentityandcompliance-iam-users-datatable');
    unblockUI('#section-securityidentityandcompliance-iam-accesskeys-datatable');
    unblockUI('#section-securityidentityandcompliance-iam-policies-datatable');
    unblockUI('#section-securityidentityandcompliance-iam-accessanalyzer-datatable');
    unblockUI('#section-securityidentityandcompliance-iam-virtualmfadevices-datatable');
    unblockUI('#section-securityidentityandcompliance-iam-servercertificates-datatable');
    unblockUI('#section-securityidentityandcompliance-iam-samlproviders-datatable');
    unblockUI('#section-securityidentityandcompliance-iam-oidcproviders-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "iam.user") {
        reqParams.cfn['Path'] = obj.data.Path;
        reqParams.tf['path'] = obj.data.Path;
        reqParams.cfn['UserName'] = obj.data.UserName;
        reqParams.tf['name'] = obj.data.UserName;
        reqParams.cfn['Groups'] = obj.data.Groups;
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }
        if (obj.data.PermissionsBoundary) {
            reqParams.cfn['PermissionsBoundary'] = obj.data.PermissionsBoundary.PermissionsBoundaryArn;
            reqParams.tf['permissions_boundary'] = obj.data.PermissionsBoundary.PermissionsBoundaryArn;
        }
        if (obj.data.AttachedPolicies && obj.data.AttachedPolicies.length) {
            reqParams.cfn['ManagedPolicyArns'] = [];
            obj.data.AttachedPolicies.forEach(attachedpolicy => {
                reqParams.cfn['ManagedPolicyArns'].push(attachedpolicy.PolicyArn);
            });
        }

        /*
        SKIPPED: Policies
        
        TODO:
        LoginProfile:
            LoginProfile Type
        Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iam', obj.id, 'AWS::IAM::User'),
            'region': obj.region,
            'service': 'iam',
            'type': 'AWS::IAM::User',
            'terraformType': 'aws_iam_user',
            'options': reqParams,
            'returnValues': {
                'Import': {
                    'UserName': obj.data.UserName
                }
            }
        });
    } else if (obj.type == "iam.group") {
        reqParams.cfn['Path'] = obj.data.Path;
        reqParams.tf['path'] = obj.data.Path;
        reqParams.cfn['GroupName'] = obj.data.GroupName;
        reqParams.tf['name'] = obj.data.GroupName;
        if (obj.data.AttachedPolicies && obj.data.AttachedPolicies.length) {
            reqParams.cfn['ManagedPolicyArns'] = [];
            obj.data.AttachedPolicies.forEach(attachedpolicy => {
                reqParams.cfn['ManagedPolicyArns'].push(attachedpolicy.PolicyArn);
            });
        }

        /*
        SKIPPED: Policies
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iam', obj.id, 'AWS::IAM::Group'),
            'region': obj.region,
            'service': 'iam',
            'type': 'AWS::IAM::Group',
            'terraformType': 'aws_iam_group',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.GroupName,
                'GetAtt': {
                    'Arn': obj.data.Arn
                },
                'Import': {
                    'GroupName': obj.data.GroupName
                }
            }
        });
    } else if (obj.type == "iam.role") {
        reqParams.cfn['Path'] = obj.data.Path;
        reqParams.tf['path'] = obj.data.Path;
        reqParams.cfn['RoleName'] = obj.data.RoleName;
        reqParams.tf['name'] = obj.data.RoleName;
        reqParams.cfn['AssumeRolePolicyDocument'] = unescape(obj.data.AssumeRolePolicyDocument);
        reqParams.tf['assume_role_policy'] = unescape(obj.data.AssumeRolePolicyDocument);
        reqParams.cfn['MaxSessionDuration'] = obj.data.MaxSessionDuration;
        reqParams.tf['max_session_duration'] = obj.data.MaxSessionDuration;
        if (obj.data.PermissionsBoundary) {
            reqParams.cfn['PermissionsBoundary'] = obj.data.PermissionsBoundary.PermissionsBoundaryArn;
            reqParams.tf['permissions_boundary'] = obj.data.PermissionsBoundary.PermissionsBoundaryArn;
        }
        if (obj.data.AttachedPolicies && obj.data.AttachedPolicies.length) {
            reqParams.cfn['ManagedPolicyArns'] = [];
            obj.data.AttachedPolicies.forEach(attachedpolicy => {
                reqParams.cfn['ManagedPolicyArns'].push(attachedpolicy.PolicyArn);
            });
        }
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }

        /*
        SKIPPED: Policies
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iam', obj.id, 'AWS::IAM::Role'),
            'region': obj.region,
            'service': 'iam',
            'type': 'AWS::IAM::Role',
            'terraformType': 'aws_iam_role',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.RoleName,
                'GetAtt': {
                    'Arn': obj.data.Arn,
                    'RoleId': obj.data.RoleId
                },
                'Terraform': {
                    'id': obj.data.Id,
                    'name': obj.data.RoleName,
                    'arn': obj.data.Arn
                },
                'Import': {
                    'RoleName': obj.data.RoleName
                }
            }
        });
    } else if (obj.type == "iam.managedpolicy") {
        reqParams.cfn['ManagedPolicyName'] = obj.data.PolicyName;
        reqParams.tf['name'] = obj.data.PolicyName;
        reqParams.cfn['Path'] = obj.data.Path;
        reqParams.tf['path'] = obj.data.Path;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['PolicyDocument'] = unescape(obj.data.PolicyDocument);
        reqParams.tf['policy'] = unescape(obj.data.PolicyDocument);

        /*
        SKIPPED: Groups
        SKIPPED: Roles
        SKIPPED: Users
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iam', obj.id, 'AWS::IAM::ManagedPolicy'),
            'region': obj.region,
            'service': 'iam',
            'type': 'AWS::IAM::ManagedPolicy',
            'terraformType': 'aws_iam_policy',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Arn,
                'Terraform': {
                    'id': obj.data.PolicyId,
                    'arn': obj.data.Arn,
                    'name': obj.data.PolicyName
                },
                'Import': {
                    'PolicyArn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "iam.instanceprofile") {
        reqParams.cfn['Path'] = obj.data.Path;
        reqParams.tf['path'] = obj.data.Path;
        reqParams.cfn['InstanceProfileName'] = obj.data.InstanceProfileName;
        reqParams.tf['name'] = obj.data.InstanceProfileName;
        if (obj.data.Roles) {
            reqParams.cfn['Roles'] = [];
            reqParams.tf['roles'] = [];
            obj.data.Roles.forEach(role => {
                reqParams.cfn['Roles'].push(role.Arn.split(":role/")[1]);
                reqParams.tf['roles'].push(role.Arn.split(":role/")[1]);
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iam', obj.id, 'AWS::IAM::InstanceProfile'),
            'region': obj.region,
            'service': 'iam',
            'type': 'AWS::IAM::InstanceProfile',
            'terraformType': 'aws_iam_instance_profile',
            'options': reqParams,
            'returnValues': {
                'Import': {
                    'InstanceProfileName': obj.data.InstanceProfileName
                }
            }
        });
    } else if (obj.type == "iam.accesskey") {
        reqParams.cfn['Status'] = obj.data.Status;
        reqParams.tf['status'] = obj.data.Status;
        reqParams.cfn['UserName'] = obj.data.UserName;
        reqParams.tf['user'] = obj.data.UserName;

        /*
        SKIPPED: Serial
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iam', obj.id, 'AWS::IAM::AccessKey'),
            'region': obj.region,
            'service': 'iam',
            'type': 'AWS::IAM::AccessKey',
            'terraformType': 'aws_iam_access_key',
            'options': reqParams
        });
    } else if (obj.type == "iam.policy") {
        var terraformType = null;

        reqParams.cfn['PolicyDocument'] = unescape(obj.data.document);
        reqParams.tf['policy'] = unescape(obj.data.document);
        if (obj.data.type == "user") {
            reqParams.cfn['Users'] = [obj.data.username];
            terraformType = "aws_iam_user_policy";
            reqParams.tf['user'] = obj.data.username;
        } else if (obj.data.type == "group") {
            reqParams.cfn['Groups'] = [obj.data.groupname];
            terraformType = "aws_iam_group_policy";
            reqParams.tf['group'] = obj.data.groupname;
        } else if (obj.data.type == "role") {
            reqParams.cfn['Roles'] = [obj.data.rolename];
            terraformType = "aws_iam_role_policy";
            reqParams.tf['role'] = obj.data.rolename;
        }
        reqParams.cfn['PolicyName'] = obj.data.policyname;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iam', obj.id, 'AWS::IAM::Policy'),
            'region': obj.region,
            'service': 'iam',
            'type': 'AWS::IAM::Policy',
            'terraformType': terraformType,
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.policyname
            }
        });
    } else if (obj.type == "iam.servicelinkedrole") {
        reqParams.cfn['AWSServiceName'] = obj.data.Path.split("/")[2];
        reqParams.tf['aws_service_name'] = obj.data.Path.split("/")[2];
        if (obj.data.RoleName.includes("_") && !obj.data.Path.endsWith(".application-autoscaling.amazonaws.com/") && !obj.data.Path.endsWith(".autoscaling-plans.amazonaws.com/")) {
            var suffixparts = obj.data.RoleName.split("_");
            suffixparts.shift();
            reqParams.cfn['CustomSuffix'] = suffixparts.join("_");
            reqParams.tf['custom_suffix'] = suffixparts.join("_");
        }
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iam', obj.id, 'AWS::IAM::ServiceLinkedRole'),
            'region': obj.region,
            'service': 'iam',
            'type': 'AWS::IAM::ServiceLinkedRole',
            'terraformType': 'aws_iam_service_linked_role',
            'options': reqParams
        });
    } else if (obj.type == "iam.accessanalyzer") {
        reqParams.cfn['AnalyzerName'] = obj.data.name;
        reqParams.cfn['Type'] = obj.data.type;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.tags[tagKey]
                });
            });
        }
        if (obj.data.archiveRules) {
            reqParams.cfn['ArchiveRules'] = [];
            obj.data.archiveRules.forEach(archiveRule => {
                var filters = [];
                Object.keys(archiveRule.filter).forEach(filterProp => {
                    filters.push({
                        'Contains': archiveRule.filter[filterProp].contains,
                        'Eq': archiveRule.filter[filterProp].eq,
                        'Exists': archiveRule.filter[filterProp].exists,
                        'Neq': archiveRule.filter[filterProp].neq,
                        'Property': filterProp
                    });
                });

                reqParams.cfn['ArchiveRules'].push({
                    'Filter': filters,
                    'RuleName': archiveRule.ruleName
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('accessanalyzer', obj.id, 'AWS::AccessAnalyzer::Analyzer'),
            'region': obj.region,
            'service': 'accessanalyzer',
            'type': 'AWS::AccessAnalyzer::Analyzer',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.arn,
                'Import': {
                    'Arn': obj.data.arn
                }
            }
        });
    } else if (obj.type == "iam.virtualmfadevice") {
        reqParams.cfn['SerialNumber'] = obj.data.SerialNumber;
        reqParams.cfn['Users'] = [obj.data.User.Arn];
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iam', obj.id, 'AWS::IAM::VirtualMFADevice'),
            'region': obj.region,
            'service': 'iam',
            'type': 'AWS::IAM::VirtualMFADevice',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.SerialNumber
            }
        });
    } else if (obj.type == "iam.servercertificate") {
        reqParams.cfn['CertificateBody'] = obj.data.CertificateBody;
        reqParams.cfn['CertificateChain'] = obj.data.CertificateChain;
        reqParams.cfn['Path'] = obj.data.ServerCertificateMetadata.Path;
        reqParams.cfn['PrivateKey'] = obj.data.ServerCertificateMetadata.PrivateKey;
        reqParams.cfn['ServerCertificateName'] = obj.data.ServerCertificateMetadata.ServerCertificateName;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iam', obj.id, 'AWS::IAM::ServerCertificate'),
            'region': obj.region,
            'service': 'iam',
            'type': 'AWS::IAM::ServerCertificate',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ServerCertificateMetadata.ServerCertificateName,
                'GetAtt': {
                    'Arn': obj.data.ServerCertificateMetadata.Arn
                }
            }
        });
    } else if (obj.type == "iam.samlprovider") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['SamlMetadataDocument'] = obj.data.SamlMetadataDocument;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iam', obj.id, 'AWS::IAM::SAMLProvider'),
            'region': obj.region,
            'service': 'iam',
            'type': 'AWS::IAM::SAMLProvider',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Arn
            }
        });
    } else if (obj.type == "iam.oidcprovider") {
        reqParams.cfn['Url'] = obj.data.Url;
        reqParams.cfn['ClientIdList'] = obj.data.ClientIdList;
        reqParams.cfn['ThumbprintList'] = obj.data.ThumbprintList;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iam', obj.id, 'AWS::IAM::OIDCProvider'),
            'region': obj.region,
            'service': 'iam',
            'type': 'AWS::IAM::OIDCProvider',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Arn
            }
        });
    } else {
        return false;
    }

    return true;
});
