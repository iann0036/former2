/* ========================================================================== */
// Detective
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity, &amp; Compliance',
    'service': 'Detective',
    'resourcetypes': {
        'Graph': {
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
                    // nothing
                ]
            ]
        },
        'Member Invitations': {
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
                        title: 'Member ID',
                        field: 'memberid',
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
                        field: 'grapharn',
                        title: 'Graph ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'memberemailaddress',
                        title: 'Member Email Address',
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

async function updateDatatableSecurityIdentityAndComplianceDetective() {
    blockUI('#section-securityidentityandcompliance-detective-graph-datatable');
    blockUI('#section-securityidentityandcompliance-detective-memberinvitations-datatable');

    await sdkcall("Detective", "listGraphs", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-detective-graph-datatable').deferredBootstrapTable('removeAll');

        if (data.GraphList && data.GraphList.length) {
            $('#section-securityidentityandcompliance-detective-graph-datatable').deferredBootstrapTable('append', [{
                f2id: data.GraphList[0].Arn,
                f2type: 'detective.graph',
                f2data: {
                    'Arn': data.GraphList[0].Arn
                },
                f2region: region,
                arn: data.GraphList[0].Arn
            }]);
        }
    }).catch(() => { });

    await sdkcall("Detective", "listInvitations", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-detective-memberinvitations-datatable').deferredBootstrapTable('removeAll');

        data.Invitations.forEach(invitation => {
            if (invitation.EmailAddress) { // master is null
                $('#section-securityidentityandcompliance-detective-memberinvitations-datatable').deferredBootstrapTable('append', [{
                    f2id: invitation.GraphArn + " invitation to " + invitation.MasterId,
                    f2type: 'detective.memberinvitation',
                    f2data: invitation,
                    f2region: region,
                    grapharn: invitation.GraphArn,
                    memberid: invitation.AccountId,
                    memberemailaddress: invitation.EmailAddress
                }]);
            }
        });
    }).catch(() => { });

    unblockUI('#section-securityidentityandcompliance-detective-graph-datatable');
    unblockUI('#section-securityidentityandcompliance-detective-memberinvitations-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "detective.graph") {
        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('detective', obj.id, 'AWS::Detective::Graph'),
            'region': obj.region,
            'service': 'detective',
            'type': 'AWS::Detective::Graph',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Arn,
                'Import': {
                    'Arn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "detective.memberinvitation") {
        reqParams.cfn['GraphArn'] = obj.data.GraphArn;
        reqParams.cfn['MemberEmailAddress'] = obj.data.EmailAddress || "REPLACEME";
        reqParams.cfn['MemberId'] = obj.data.AccountId;

        /*
        SKIPPED: Message
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('detective', obj.id, 'AWS::Detective::MemberInvitation'),
            'region': obj.region,
            'service': 'detective',
            'type': 'AWS::Detective::MemberInvitation',
            'options': reqParams,
            'returnValues': {
                'Import': {
                    'GraphArn': obj.data.GraphArn,
                    'MemberId': obj.data.MemberId
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
