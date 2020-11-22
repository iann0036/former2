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
        $('#section-mobile-amplify-apps-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.apps.map(app => {
            return Promise.all([
                sdkcall("Amplify", "getApp", {
                    appId: app.appId
                }, true).then(async (data) => {
                    $('#section-mobile-amplify-apps-datatable').deferredBootstrapTable('append', [{
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

                            $('#section-mobile-amplify-branches-datatable').deferredBootstrapTable('append', [{
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

                            $('#section-mobile-amplify-domains-datatable').deferredBootstrapTable('append', [{
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
    if (obj.type == "amplify.app") {
        reqParams.cfn['Name'] = obj.data.name;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.tags) {
                reqParams.cfn['Tags'].push({
                    'Key': k,
                    'Value': obj.data.tags[k]
                });
            }
        }
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['Repository'] = obj.data.repository;
        reqParams.cfn['IAMServiceRole'] = obj.data.iamServiceRoleArn;
        if (obj.data.environmentVariables) {
            reqParams.cfn['EnvironmentVariables'] = [];
            for (var k in obj.data.environmentVariables) {
                reqParams.cfn['EnvironmentVariables'].push({
                    'Name': k,
                    'Value': obj.data.environmentVariables[k]
                });
            }
        }
        if (obj.data.basicAuthCredentials) {
            var creds = window.atob(obj.data.basicAuthCredentials.split(" ").pop()).split(":");

            reqParams.cfn['BasicAuthConfig'] = {
                'EnableBasicAuth': obj.data.enableBasicAuth,
                'Username': creds[0],
                'Password': creds[1]
            };
        }
        if (obj.data.customRules) {
            reqParams.cfn['CustomRules'] = [];
            obj.data.customRules.forEach(customrule => {
                reqParams.cfn['CustomRules'].push({
                    'Source': customrule.source,
                    'Target': customrule.target,
                    'Condition': customrule.condition,
                    'Status': customrule.status
                });
            });
        }
        if (obj.data.autoBranchCreationConfig || obj.data.autoBranchCreationPatterns || obj.data.enableAutoBranchCreation) {
            reqParams.cfn['AutoBranchCreationConfig'] = {
                'AutoBranchCreationPatterns': obj.data.autoBranchCreationPatterns,
                'BasicAuthConfig': obj.data.autoBranchCreationConfig.basicAuthCredentials,
                'BuildSpec': obj.data.autoBranchCreationConfig.buildSpec,
                'EnableAutoBranchCreation': obj.data.enableAutoBranchCreation,
                'EnableAutoBuild': obj.data.autoBranchCreationConfig.enableAutoBuild,
                'EnablePerformanceMode': obj.data.autoBranchCreationConfig.enablePerformanceMode,
                'EnablePullRequestPreview': obj.data.autoBranchCreationConfig.enablePullRequestPreview,
                'EnvironmentVariables': obj.data.autoBranchCreationConfig.environmentVariables,
                'PullRequestEnvironmentName': obj.data.autoBranchCreationConfig.pullRequestEnvironmentName,
                'Stage': obj.data.autoBranchCreationConfig.stage
            };
        }
        reqParams.cfn['BuildSpec'] = obj.data.buildSpec;
        reqParams.cfn['EnableBranchAutoDeletion'] = obj.data.enableBranchAutoDeletion;
        reqParams.cfn['AccessToken'] = "REPLACEME";
        reqParams.cfn['OauthToken'] = "REPLACEME";
        reqParams.cfn['CustomHeaders'] = obj.data.customHeaders;
        
        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('amplify', obj.id, 'AWS::Amplify::App'),
            'region': obj.region,
            'service': 'amplify',
            'type': 'AWS::Amplify::App',
            'options': reqParams
        });
    } else if (obj.type == "amplify.branch") {
        reqParams.cfn['BranchName'] = obj.data.branchName;
        reqParams.cfn['Description'] = obj.data.description;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            for (var k in obj.data.tags) {
                reqParams.cfn['Tags'].push({
                    'Key': k,
                    'Value': obj.data.tags[k]
                });
            }
        }
        reqParams.cfn['Stage'] = obj.data.stage;
        if (obj.data.environmentVariables) {
            reqParams.cfn['EnvironmentVariables'] = [];
            for (var k in obj.data.environmentVariables) {
                reqParams.cfn['EnvironmentVariables'].push({
                    'Name': k,
                    'Value': obj.data.environmentVariables[k]
                });
            }
        }
        if (obj.data.basicAuthCredentials) {
            var creds = window.atob(obj.data.basicAuthCredentials.split(" ").pop()).split(":");

            reqParams.cfn['BasicAuthConfig'] = {
                'EnableBasicAuth': obj.data.enableBasicAuth,
                'Username': creds[0],
                'Password': creds[1]
            };
        }
        reqParams.cfn['AppId'] = obj.data.appId;
        reqParams.cfn['BuildSpec'] = obj.data.buildSpec;
        reqParams.cfn['EnablePullRequestPreview'] = obj.data.enablePullRequestPreview;
        reqParams.cfn['PullRequestEnvironmentName'] = obj.data.pullRequestEnvironmentName;
        reqParams.cfn['EnableAutoBuild'] = obj.data.enableAutoBuild;
        reqParams.cfn['EnablePerformanceMode'] = obj.data.enablePerformanceMode;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('amplify', obj.id, 'AWS::Amplify::Branch'),
            'region': obj.region,
            'service': 'amplify',
            'type': 'AWS::Amplify::Branch',
            'options': reqParams
        });
    } else if (obj.type == "amplify.domain") {
        reqParams.cfn['AppId'] = obj.data.appId;
        reqParams.cfn['DomainName'] = obj.data.domainName;
        reqParams.cfn['SubDomainSettings'] = [];
        obj.data.subDomains.forEach(subdomain => {
            reqParams.cfn['SubDomainSettings'].push({
                'Prefix': subdomain.subDomainSetting.prefix,
                'BranchName': subdomain.subDomainSetting.branchName,
            });
        });
        reqParams.cfn['EnableAutoSubDomain'] = obj.data.enableAutoSubDomain;
        reqParams.cfn['AutoSubDomainCreationPatterns'] = obj.data.autoSubDomainCreationPatterns;
        reqParams.cfn['AutoSubDomainIAMRole'] = obj.data.autoSubDomainIAMRole;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('amplify', obj.id, 'AWS::Amplify::Domain'),
            'region': obj.region,
            'service': 'amplify',
            'type': 'AWS::Amplify::Domain',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
