/* ========================================================================== */
// Resource Access Manager
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity, &amp; Compliance',
    'service': 'Resource Access Manager',
    'resourcetypes': {
        'Resource Shares': {
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
                        field: 'accountid',
                        title: 'Account ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'allowexternapprincipals',
                        title: 'Allow External Principals',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableSecurityIdentityAndComplianceResourceAccessManager() {
    blockUI('#section-securityidentityandcompliance-resourceaccessmanager-resourceshares-datatable');

    await sdkcall("RAM", "getResourceShares", {
        resourceOwner: 'SELF'
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-resourceaccessmanager-resourceshares-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.resourceShares.map(resourceShare => {
            resourceShare['principals'] = [];
            resourceShare['resourceArns'] = [];

            return sdkcall("RAM", "listPrincipals", {
                resourceOwner: 'SELF',
                resourceShareArns: [resourceShare.resourceShareArn]
            }, true).then(async (data) => {
                data.principals.forEach(principal => {
                    resourceShare['principals'].push(principal.id);
                });

                await sdkcall("RAM", "listResources", {
                    resourceOwner: 'SELF',
                    resourceShareArns: [resourceShare.resourceShareArn]
                }, true).then((data) => {
                    data.resources.forEach(resource => {
                        resourceShare['resourceArns'].push(resource.arn);
                    });

                    $('#section-securityidentityandcompliance-resourceaccessmanager-resourceshares-datatable').deferredBootstrapTable('append', [{
                        f2id: resourceShare.resourceShareArn,
                        f2type: 'ram.resourceshare',
                        f2data: resourceShare,
                        f2region: region,
                        name: resourceShare.name,
                        accountid: resourceShare.owningAccountId,
                        allowexternapprincipals: resourceShare.allowExternalPrincipals,
                        creationtime: resourceShare.creationTime
                    }]);
                });
            });
        }));

        unblockUI('#section-securityidentityandcompliance-resourceaccessmanager-resourceshares-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "ram.resourceshare") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.tf['name'] = obj.data.name;
        reqParams.cfn['AllowExternalPrincipals'] = obj.data.allowExternalPrincipals;
        reqParams.tf['allow_external_principals'] = obj.data.allowExternalPrincipals;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            reqParams.tf['tags'] = {};
            obj.data.tags.forEach(tag => {
                reqParams.cfn['Tags'].push({
                    'Key': tag.key,
                    'Value': tag.value
                });
                reqParams.tf['tags'][tag.key] = tag.value;
            });
        }
        reqParams.cfn['Principals'] = obj.data.principals;
        reqParams.cfn['ResourceArns'] = obj.data.resourceArns;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ram', obj.id, 'AWS::RAM::ResourceShare'),
            'region': obj.region,
            'service': 'ram',
            'type': 'AWS::RAM::ResourceShare',
            'terraformType': 'aws_ram_resource_share',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.name,
                'GetAtt': {
                    'Arn': obj.data.resourceShareArn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
