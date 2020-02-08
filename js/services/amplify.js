/* ========================================================================== */
// Amplify
/* ========================================================================== */

sections.push({
    'category': 'Mobile',
    'service': 'Amplify',
    'resourcetypes': {
        'Apps': {
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
                    },
                    {
                        field: 'platform',
                        title: 'Platform',
                        sortable: true,
                        editable: true,
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
        },
        'Branches': {
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
                        field: 'appid',
                        title: 'App ID',
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
                        field: 'stage',
                        title: 'Stage',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Domains': {
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
                        title: 'Domain Name',
                        field: 'domainname',
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
                        field: 'appid',
                        title: 'App ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'dnsverificationrecord',
                        title: 'DNS Verification Record',
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

async function updateDatatableMobileAmplify() {
    blockUI('#section-mobile-amplify-apps-datatable');
    blockUI('#section-mobile-amplify-branches-datatable');
    blockUI('#section-mobile-amplify-domains-datatable');

    await sdkcall("Amplify", "listApps", {
        // no params
    }, false).then(async (data) => {
        $('#section-mobile-amplify-apps-datatable').bootstrapTable('removeAll');

        await Promise.all(data.apps.map(app => {
            return Promise.all([
                sdkcall("Amplify", "getApp", {
                    appId: app.appId
                }, true).then(async (data) => {
                    $('#section-mobile-amplify-apps-datatable').bootstrapTable('append', [{
                        f2id: data.app.appArn,
                        f2type: 'amplify.app',
                        f2data: data.app,
                        f2region: region,
                        id: data.app.appId,
                        name: data.app.name,
                        description: data.app.description,
                        platform: data.app.platform,
                        creationtime: data.app.createTime
                    }]);
                }),
                sdkcall("Amplify", "listBranches", {
                    appId: app.appId
                }, true).then(async (data) => {
                    await Promise.all(data.branches.map(branch => {
                        return sdkcall("Amplify", "getBranch", {
                            appId: app.appId,
                            branchName: branch.branchName
                        }, true).then(async (data) => {
                            data.branch['appId'] = app.appId;

                            $('#section-mobile-amplify-branches-datatable').bootstrapTable('append', [{
                                f2id: data.branch.appArn,
                                f2type: 'amplify.branch',
                                f2data: data.branch,
                                f2region: region,
                                appid: app.appId,
                                name: data.branch.branchName,
                                description: data.branch.description,
                                stage: data.branch.stage
                            }]);
                        });
                    }));
                }),
                sdkcall("Amplify", "listDomainAssociations", {
                    appId: app.appId
                }, true).then(async (data) => {
                    await Promise.all(data.domainAssociations.map(domain => {
                        return sdkcall("Amplify", "getDomainAssociation", {
                            appId: app.appId,
                            domainName: domain.domainName
                        }, true).then(async (data) => {
                            data.domainAssociation['appId'] = app.appId;
                            data.domainAssociation['domainName'] = domain.domainName;

                            $('#section-mobile-amplify-domains-datatable').bootstrapTable('append', [{
                                f2id: data.domainAssociation.domainAssociationArn,
                                f2type: 'amplify.domain',
                                f2data: data.domainAssociation,
                                f2region: region,
                                appid: app.appId,
                                domainname: data.domainAssociation.domainName,
                                dnsverificationrecord: data.domainAssociation.certificateVerificationDNSRecord
                            }]);
                        });
                    }));
                })
            ]);
        }));
    }).catch(() => { });

    unblockUI('#section-mobile-amplify-apps-datatable');
    unblockUI('#section-mobile-amplify-branches-datatable');
    unblockUI('#section-mobile-amplify-domains-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
