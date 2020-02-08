/* ========================================================================== */
// Security Hub
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity &amp; Compliance',
    'service': 'Security Hub',
    'resourcetypes': {
        'Hub': {
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
        }
    }
});

async function updateDatatableSecurityIdentityAndComplianceSecurityHub() {
    blockUI('#section-securityidentityandcompliance-securityhub-hub-datatable');

    await sdkcall("SecurityHub", "describeHub", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-securityhub-hub-datatable').bootstrapTable('removeAll');

        var tags = null;

        await sdkcall("SecurityHub", "listTagsForResource", {
            ResourceArn: data.HubArn
        }, false).then(tagdata => {
            if (Object.keys(tagdata.Tags).length !== 0) {
                tags = tagdata.Tags;
            }
        }).catch(() => { });

        $('#section-securityidentityandcompliance-securityhub-hub-datatable').bootstrapTable('append', [{
            f2id: data.HubArn,
            f2type: 'securityhub.hub',
            f2data: {
                'Tags': tags
            },
            f2region: region,
            f2link: 'https://console.aws.amazon.com/securityhub/home',
            arn: data.HubArn
        }]);
    }).catch(() => { });

    unblockUI('#section-securityidentityandcompliance-securityhub-hub-datatable');
}
