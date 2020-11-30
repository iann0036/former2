/* ========================================================================== */
// Signer
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity, &amp; Compliance',
    'service': 'Signer',
    'resourcetypes': {
        'Signing Profiles': {
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
                        field: 'platformid',
                        title: 'Platform ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Profile Permissions': {
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
                        title: 'Profile Name',
                        field: 'profilename',
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
                        field: 'profileversion',
                        title: 'Profile Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'statementid',
                        title: 'Statement ID',
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

async function updateDatatableSecurityIdentityAndComplianceSigner() {
    blockUI('#section-securityidentityandcompliance-signer-signingprofiles-datatable');
    blockUI('#section-securityidentityandcompliance-signer-profilepermissions-datatable');

    await sdkcall("Signer", "listSigningProfiles", {
        // no params
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-signer-signingprofiles-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-signer-profilepermissions-datatable').deferredBootstrapTable('removeAll');

        data.profiles.forEach(async (profile) => {
            $('#section-securityidentityandcompliance-signer-signingprofiles-datatable').deferredBootstrapTable('append', [{
                f2id: profile.profileVersionArn,
                f2type: 'signer.signingprofile',
                f2data: profile,
                f2region: region,
                name: profile.profileName,
                platformid: profile.platformId
            }]);

            await sdkcall("Signer", "listProfilePermissions", {
                profileName: profile.profileName
            }, true).then(async (data) => {
                data.permissions.forEach(permission => {
                    permission['profileName'] = profile.profileName;

                    $('#section-securityidentityandcompliance-signer-profilepermissions-datatable').deferredBootstrapTable('append', [{
                        f2id: profile.profileName + " " + permission.profileVersion + " " + permission.statementId,
                        f2type: 'signer.profilepermission',
                        f2data: permission,
                        f2region: region,
                        profilename: permission.profileName,
                        profileversion: permission.profileVersion,
                        statementid: permission.statementId
                    }]);
                });
            }).catch(() => { });
        });
    }).catch(() => { });

    unblockUI('#section-securityidentityandcompliance-signer-signingprofiles-datatable');
    unblockUI('#section-securityidentityandcompliance-signer-profilepermissions-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "signer.signingprofile") {
        reqParams.cfn['PlatformId'] = obj.data.platformId;
        if (obj.data.signatureValidityPeriod) {
            reqParams.cfn['SignatureValidityPeriod'] = {
                'Type': obj.data.signatureValidityPeriod.type,
                'Value': obj.data.signatureValidityPeriod.value
            };
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('signer', obj.id, 'AWS::Signer::SigningProfile'),
            'region': obj.region,
            'service': 'signer',
            'type': 'AWS::Signer::SigningProfile',
            'options': reqParams
        });
    } else if (obj.type == "signer.profilepermission") {
        reqParams.cfn['Action'] = obj.data.action;
        reqParams.cfn['Principal'] = obj.data.principal;
        reqParams.cfn['ProfileName'] = obj.data.profileName;
        reqParams.cfn['ProfileVersion'] = obj.data.profileVersion;
        reqParams.cfn['StatementId'] = obj.data.statementId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('signer', obj.id, 'AWS::Signer::ProfilePermission'),
            'region': obj.region,
            'service': 'signer',
            'type': 'AWS::Signer::ProfilePermission',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
