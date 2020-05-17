/* ========================================================================== */
// Security Hub
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity, &amp; Compliance',
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
        $('#section-securityidentityandcompliance-securityhub-hub-datatable').deferredBootstrapTable('removeAll');

        var tags = null;

        await sdkcall("SecurityHub", "listTagsForResource", {
            ResourceArn: data.HubArn
        }, false).then(tagdata => {
            if (Object.keys(tagdata.Tags).length !== 0) {
                tags = tagdata.Tags;
            }
        }).catch(() => { });

        $('#section-securityidentityandcompliance-securityhub-hub-datatable').deferredBootstrapTable('append', [{
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

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "securityhub.hub") {
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('securityhub', obj.id, 'AWS::SecurityHub::Hub'),
            'region': obj.region,
            'service': 'securityhub',
            'type': 'AWS::SecurityHub::Hub',
            'terraformType': 'aws_securityhub_account',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
