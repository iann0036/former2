/* ========================================================================== */
// Macie
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity &amp; Compliance',
    'service': 'Macie',
    'resourcetypes': {
        'Member Account Associations': {
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
                        title: 'Account ID',
                        field: 'accountid',
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
        'S3 Bucket Associations': {
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
                        title: 'Bucket Name',
                        field: 'bucketname',
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
                        field: 'prefix',
                        title: 'Prefix',
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

async function updateDatatableSecurityIdentityAndComplianceMacie() {
    blockUI('#section-securityidentityandcompliance-macie-memberaccountassociations-datatable');
    blockUI('#section-securityidentityandcompliance-macie-s3bucketassociations-datatable');

    await sdkcall("Macie", "listMemberAccounts", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-macie-memberaccountassociations-datatable').bootstrapTable('removeAll');

        data.memberAccounts.forEach(memberAccount => {
            $('#section-securityidentityandcompliance-macie-memberaccountassociations-datatable').bootstrapTable('append', [{
                f2id: memberAccount.accountId,
                f2type: 'macie.memberaccountassociation',
                f2data: memberAccount,
                f2region: region,
                accountid: memberAccount.accountId
            }]);
        });
    }).catch(() => { });

    await sdkcall("Macie", "listS3Resources", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-macie-s3bucketassociations-datatable').bootstrapTable('removeAll');

        data.s3Resources.forEach(s3Resource => {
            $('#section-securityidentityandcompliance-macie-s3bucketassociations-datatable').bootstrapTable('append', [{
                f2id: s3Resource.bucketName,
                f2type: 'macie.s3bucketassociation',
                f2data: s3Resource,
                f2region: region,
                bucketname: s3Resource.bucketName,
                prefix: s3Resource.prefix
            }]);
        });
    }).catch(() => { });

    unblockUI('#section-securityidentityandcompliance-macie-memberaccountassociations-datatable');
    unblockUI('#section-securityidentityandcompliance-macie-s3bucketassociations-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
