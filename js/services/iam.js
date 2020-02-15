/* ========================================================================== */
// IAM
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity &amp; Compliance',
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
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

    $('#section-securityidentityandcompliance-iam-policies-datatable').bootstrapTable('removeAll');

    await sdkcall("IAM", "listUsers", {
        // no params
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-iam-users-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-iam-accesskeys-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Users.map(user => {
            $('#section-securityidentityandcompliance-iam-users-datatable').bootstrapTable('append', [{
                f2id: user.Arn,
                f2type: 'iam.user',
                f2data: user,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/iam/home?#/users/' + user.UserName,
                username: user.UserName,
                path: user.Path,
                id: user.UserId
            }]);

            return Promise.all([
                sdkcall("IAM", "listAccessKeys", {
                    UserName: user.UserName
                }, true).then((data) => {
                    data.AccessKeyMetadata.forEach(accessKey => {
                        $('#section-securityidentityandcompliance-iam-accesskeys-datatable').bootstrapTable('append', [{
                            f2id: accessKey.AccessKeyId,
                            f2type: 'iam.accesskey',
                            f2data: accessKey,
                            f2region: region,
                            id: accessKey.AccessKeyId,
                            username: accessKey.UserName
                        }]);
                    });
                }),
                sdkcall("IAM", "listAttachedUserPolicies", {
                    UserName: user.UserName
                }, true).then(async (data) => {
                    await Promise.all(data.AttachedPolicies.map(policy => {
                        return sdkcall("IAM", "getPolicy", {
                            PolicyArn: policy.PolicyArn
                        }, true).then(async (policydata) => {
                            await sdkcall("IAM", "getPolicyVersion", {
                                PolicyArn: policy.PolicyArn,
                                VersionId: policydata.Policy.DefaultVersionId
                            }, true).then((data) => {
                                $('#section-securityidentityandcompliance-iam-policies-datatable').bootstrapTable('append', [{
                                    f2id: policy.PolicyArn,
                                    f2type: 'iam.policy',
                                    f2data: {
                                        'type': 'user',
                                        'username': user.UserName,
                                        'policy': policydata,
                                        'document': data.PolicyVersion.Document
                                    },
                                    f2region: region,
                                    name: policy.PolicyName,
                                    owner: user.UserName,
                                    type: "User",
                                    id: policy.PolicyId,
                                    path: policy.Path
                                }]);
                            });
                        });
                    }));
                })
            ]);
        }));
    });

    await sdkcall("IAM", "listGroups", {
        // no params
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-iam-groups-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Groups.map(group => {
            $('#section-securityidentityandcompliance-iam-groups-datatable').bootstrapTable('append', [{
                f2id: group.Arn,
                f2type: 'iam.group',
                f2data: group,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/iam/home?#/groups/' + group.GroupName,
                name: group.GroupName,
                id: group.GroupId,
                path: group.Path
            }]);

            return sdkcall("IAM", "listAttachedGroupPolicies", {
                GroupName: group.GroupName
            }, true).then(async (data) => {
                await Promise.all(data.AttachedPolicies.map(policy => {
                    return sdkcall("IAM", "getPolicy", {
                        PolicyArn: policy.PolicyArn
                    }, true).then(async (policydata) => {
                        await sdkcall("IAM", "getPolicyVersion", {
                            PolicyArn: policy.PolicyArn,
                            VersionId: policydata.Policy.DefaultVersionId
                        }, true).then((data) => {
                            $('#section-securityidentityandcompliance-iam-policies-datatable').bootstrapTable('append', [{
                                f2id: policy.PolicyArn,
                                f2type: 'iam.policy',
                                f2data: {
                                    'type': 'group',
                                    'groupname': group.GroupName,
                                    'policy': policydata,
                                    'document': data.PolicyVersion.Document
                                },
                                f2region: region,
                                name: policy.PolicyName,
                                owner: group.GroupName,
                                type: "Group",
                                id: policy.PolicyId,
                                path: policy.Path
                            }]);
                        });
                    });
                }));
            });
        }));
    });

    await sdkcall("IAM", "listRoles", {
        // no params
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-iam-roles-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-iam-servicelinkedroles-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Roles.map(role => {
            if (role.Path.startsWith("/aws-service-role/")) {
                $('#section-securityidentityandcompliance-iam-servicelinkedroles-datatable').bootstrapTable('append', [{
                    f2id: role.Arn,
                    f2type: 'iam.servicelinkedrole',
                    f2data: role,
                    f2region: region,
                    name: role.RoleName,
                    path: role.Path,
                    id: role.RoleId,
                    description: role.Description
                }]);
            } else {
                $('#section-securityidentityandcompliance-iam-roles-datatable').bootstrapTable('append', [{
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
            }

            return sdkcall("IAM", "listAttachedRolePolicies", {
                RoleName: role.RoleName
            }, true).then(async (data) => {
                await Promise.all(data.AttachedPolicies.map(policy => {
                    return sdkcall("IAM", "getPolicy", {
                        PolicyArn: policy.PolicyArn
                    }, true).then(async (policydata) => {
                        await sdkcall("IAM", "getPolicyVersion", {
                            PolicyArn: policy.PolicyArn,
                            VersionId: policydata.Policy.DefaultVersionId
                        }, true).then((data) => {
                            $('#section-securityidentityandcompliance-iam-policies-datatable').bootstrapTable('append', [{
                                f2id: policy.PolicyArn,
                                f2type: 'iam.policy',
                                f2data: {
                                    'type': 'role',
                                    'rolename': role.RoleName,
                                    'policy': policydata,
                                    'document': data.PolicyVersion.Document
                                },
                                f2region: region,
                                name: policy.PolicyName,
                                owner: role.RoleName,
                                type: "Role",
                                id: policy.PolicyId,
                                path: policy.Path
                            }]);
                        });
                    });
                }));
            });
        }));
    });

    await sdkcall("IAM", "listPolicies", {
        Scope: 'Local'
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-iam-managedpolicies-datatable').bootstrapTable('removeAll');

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
                        $('#section-securityidentityandcompliance-iam-managedpolicies-datatable').bootstrapTable('append', [{
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

    await sdkcall("IAM", "listInstanceProfiles", {
        // no params
    }, true).then((data) => {
        $('#section-securityidentityandcompliance-iam-instanceprofiles-datatable').bootstrapTable('removeAll');

        data.InstanceProfiles.forEach(instanceProfile => {
            $('#section-securityidentityandcompliance-iam-instanceprofiles-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-iam-accessanalyzer-datatable').bootstrapTable('removeAll');

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

                $('#section-securityidentityandcompliance-iam-accessanalyzer-datatable').bootstrapTable('append', [{
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
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "iam.user") {
        reqParams.cfn['Path'] = obj.data.Path;
        reqParams.tf['path'] = obj.data.Path;
        reqParams.cfn['UserName'] = obj.data.UserName;
        reqParams.tf['name'] = obj.data.UserName;
        if (obj.data.PermissionsBoundary) {
            reqParams.cfn['PermissionsBoundary'] = obj.data.PermissionsBoundary.PermissionsBoundaryArn;
            reqParams.tf['permissions_boundary'] = obj.data.PermissionsBoundary.PermissionsBoundaryArn;
        }

        /*
        TODO:
        Groups:
            - String
        LoginProfile:
            LoginProfile Type
        ManagedPolicyArns:
            - String
        Policies:
            - Policies
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

        /*
        TODO:
        ManagedPolicyArns: [ String, ... ]
        Policies:
            - Policies
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

        /*
        TODO:
        ManagedPolicyArns:
            - String
        Policies:
            - Policies
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
        TODO:
        Groups:
            - String
        Roles:
            - String
        Users:
            - String
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
                reqParams.cfn['Roles'].push(role.Arn);
                reqParams.tf['roles'].push(role.Arn);
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
        SKIPPED:
        Serial
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
        reqParams.cfn['PolicyName'] = obj.data.policy.PolicyName;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iam', obj.id, 'AWS::IAM::Policy'),
            'region': obj.region,
            'service': 'iam',
            'type': 'AWS::IAM::Policy',
            'terraformType': terraformType,
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.policy.PolicyName
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
                    'Filters': filters,
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
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
