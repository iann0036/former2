/* ========================================================================== */
// Organizations
/* ========================================================================== */

sections.push({
    'category': 'Management &amp; Governance',
    'service': 'Organizations',
    'resourcetypes': {
        'Organization': {
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
                        field: 'masteraccountemail',
                        title: 'Master Account Email',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Organizational Units': {
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
        'Accounts': {
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
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'email',
                        title: 'Email',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Policies': {
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
                        field: 'name',
                        title: 'Name',
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
        'Policy Attachments': {
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
                        field: 'name',
                        title: 'Name',
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
                    }
                ]
            ]
        }
    }
});

async function updateDatatableManagementAndGovernanceOrganizations() {
    blockUI('#section-managementandgovernance-organizations-organization-datatable');
    blockUI('#section-managementandgovernance-organizations-organizationalunits-datatable');
    blockUI('#section-managementandgovernance-organizations-accounts-datatable');
    blockUI('#section-managementandgovernance-organizations-policies-datatable');
    blockUI('#section-managementandgovernance-organizations-policyattachments-datatable');

    await sdkcall("Organizations", "describeOrganization", {
        // no params
    }, false).then(async (data) => {
        $('#section-managementandgovernance-organizations-organization-datatable').deferredBootstrapTable('removeAll');

        if (data.Organization) {
            await sdkcall("Organizations", "listAWSServiceAccessForOrganization", {
                // no params
            }, true).then(async (serviceaccess) => {
                data.Organization['EnabledServicePrincipals'] = serviceaccess.EnabledServicePrincipals;
            });

            $('#section-managementandgovernance-organizations-organization-datatable').deferredBootstrapTable('append', [{
                f2id: data.Organization.Arn,
                f2type: 'organizations.organization',
                f2data: data.Organization,
                f2region: region,
                id: data.Organization.Id,
                masteraccountemail: data.Organization.MasterAccountEmail
            }]);
        }
    }).catch(() => { });

    await sdkcall("STS", "getCallerIdentity", {
        // no params
    }, true).then(async (data) => {
        var accountId = data.Account;

        await sdkcall("Organizations", "listParents", {
            ChildId: accountId
        }, false).then(async (data) => {
            if (data.Parents.length == 1) {
                $('#section-managementandgovernance-organizations-organizationalunits-datatable').deferredBootstrapTable('removeAll');

                var parents = [data.Parents[0].Id];

                while (parents.length) {
                    var parentid = parents.pop();

                    await sdkcall("Organizations", "listOrganizationalUnitsForParent", {
                        ParentId: parentid
                    }, false).then(async (data) => {
                        data.OrganizationalUnits.forEach(ou => {
                            ou['ParentId'] = parentid;

                            $('#section-managementandgovernance-organizations-organizationalunits-datatable').deferredBootstrapTable('append', [{
                                f2id: ou.Arn,
                                f2type: 'organizations.organizationalunit',
                                f2data: ou,
                                f2region: region,
                                id: ou.Id,
                                name: ou.Name
                            }]);

                            parents.push(ou.Id);
                        });
                    });
                }
            }
        }).catch(() => { });
    });

    await sdkcall("Organizations", "listAccounts", {
        // no params
    }, false).then(async (data) => {
        $('#section-managementandgovernance-organizations-accounts-datatable').deferredBootstrapTable('removeAll');

        data.Accounts.forEach(account => {
            $('#section-managementandgovernance-organizations-accounts-datatable').deferredBootstrapTable('append', [{
                f2id: account.Arn,
                f2type: 'organizations.account',
                f2data: account,
                f2region: region,
                id: account.Id,
                name: account.Name,
                email: account.Email
            }]);
        });
    }).catch(() => { });

    await sdkcall("Organizations", "listPolicies", {
        Filter: "SERVICE_CONTROL_POLICY"
    }, false).then(async (data) => {
        $('#section-managementandgovernance-organizations-policies-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-organizations-policyattachments-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Policies.map(async (policy) => {
            await sdkcall("Organizations", "describePolicy", {
                PolicyId: policy.Id
            }, false).then(async (data) => {
                $('#section-managementandgovernance-organizations-policies-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Policy.PolicySummary.Arn,
                    f2type: 'organizations.policy',
                    f2data: data.Policy,
                    f2region: region,
                    id: data.Policy.PolicySummary.Id,
                    name: data.Policy.PolicySummary.Name,
                    description: data.Policy.PolicySummary.Description
                }]);

                await sdkcall("Organizations", "listTargetsForPolicy", {
                    PolicyId: policy.Id
                }, false).then(async (data) => {
                    data.Targets.forEach(target => {
                        target['PolicyId'] = policy.Id;

                        $('#section-managementandgovernance-organizations-policyattachments-datatable').deferredBootstrapTable('append', [{
                            f2id: target.Arn,
                            f2type: 'organizations.policyattachment',
                            f2data: target,
                            f2region: region,
                            id: target.TargetId,
                            name: target.Name,
                            type: target.Type
                        }]);
                    });
                });
            });
        }));
    }).catch(() => { });

    unblockUI('#section-managementandgovernance-organizations-organization-datatable');
    unblockUI('#section-managementandgovernance-organizations-organizationalunits-datatable');
    unblockUI('#section-managementandgovernance-organizations-accounts-datatable');
    unblockUI('#section-managementandgovernance-organizations-policies-datatable');
    unblockUI('#section-managementandgovernance-organizations-policyattachments-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "organizations.organization") {
        if (obj.data.EnabledServicePrincipals) {
            reqParams.tf['aws_service_access_principals'] = [];
            obj.data.EnabledServicePrincipals.forEach(principal => {
                reqParams.tf['aws_service_access_principals'].push(principal.ServicePrincipal);
            });
        }
        if (obj.data.AvailablePolicyTypes) {
            reqParams.tf['enabled_policy_types'] = [];
            obj.data.AvailablePolicyTypes.forEach(policytype => {
                if (policytype.Status == "ENABLED") {
                    reqParams.tf['enabled_policy_types'].push(policytype.Type);
                }
            });
        }
        reqParams.tf['feature_set'] = obj.data.FeatureSet;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('organizations', obj.id, 'AWS::Organizations::Organization'), // not real resource type
            'region': obj.region,
            'service': 'organizations',
            'terraformType': 'aws_organizations_organization',
            'options': reqParams
        });
    } else if (obj.type == "organizations.organizationalunit") {
        reqParams.tf['name'] = obj.data.Name;
        reqParams.tf['parent_id'] = obj.data.ParentId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('organizations', obj.id, 'AWS::Organizations::OrganizationalUnit'), // not real resource type
            'region': obj.region,
            'service': 'organizations',
            'terraformType': 'aws_organizations_organizational_unit',
            'options': reqParams
        });
    } else if (obj.type == "organizations.account") {
        reqParams.tf['name'] = obj.data.Name;
        reqParams.tf['email'] = obj.data.Email;

        /*
        TODO:
        iam_user_access_to_billing
        parent_id
        role_name
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('organizations', obj.id, 'AWS::Organizations::Account'), // not real resource type
            'region': obj.region,
            'service': 'organizations',
            'terraformType': 'aws_organizations_account',
            'options': reqParams
        });
    } else if (obj.type == "organizations.policy") {
        reqParams.tf['content'] = obj.data.Content;
        reqParams.tf['name'] = obj.data.PolicySummary.Name;
        reqParams.tf['description'] = obj.data.PolicySummary.Description;
        reqParams.tf['type'] = obj.data.PolicySummary.Type;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('organizations', obj.id, 'AWS::Organizations::Policy'), // not real resource type
            'region': obj.region,
            'service': 'organizations',
            'terraformType': 'aws_organizations_policy',
            'options': reqParams
        });
    } else if (obj.type == "organizations.policyattachment") {
        reqParams.tf['policy_id'] = obj.data.PolicyId;
        reqParams.tf['target_id'] = obj.data.TargetId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('organizations', obj.id, 'AWS::Organizations::PolicyAttachment'), // not real resource type
            'region': obj.region,
            'service': 'organizations',
            'terraformType': 'aws_organizations_policy_attachment',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
