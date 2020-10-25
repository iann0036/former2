/* ========================================================================== */
// CodeCommit
/* ========================================================================== */

sections.push({
    'category': 'Developer Tools',
    'service': 'CodeCommit',
    'resourcetypes': {
        'Repositories': {
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
        'Notification Rules': {
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
                        field: 'resource',
                        title: 'Resource',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'detailtype',
                        title: 'Detail Type',
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

async function updateDatatableDeveloperToolsCodeCommit() {
    blockUI('#section-developertools-codecommit-repositories-datatable');
    blockUI('#section-developertools-codecommit-notificationrules-datatable');

    await sdkcall("CodeCommit", "listRepositories", {
        // no params
    }, true).then(async (data) => {
        $('#section-developertools-codecommit-repositories-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.repositories.map(async (repository) => {
            return sdkcall("CodeCommit", "getRepository", {
                repositoryName: repository.repositoryName
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.repositoryMetadata.Arn);

                $('#section-developertools-codecommit-repositories-datatable').deferredBootstrapTable('append', [{
                    f2id: data.repositoryMetadata.repositoryId,
                    f2type: 'codecommit.repository',
                    f2data: data.repositoryMetadata,
                    f2region: region,
                    name: data.repositoryMetadata.repositoryName,
                    id: data.repositoryMetadata.repositoryId
                }]);
            });
        }));
    });

    await sdkcall("CodeStarNotifications", "listNotificationRules", {
        // no params
    }, false).then(async (data) => {
        $('#section-developertools-codebuild-notificationrules-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.NotificationRules.map(notificationRule => {
            return sdkcall("CodeStarNotifications", "describeNotificationRule", {
                Arn: notificationRule.Arn
            }, false).then(async (data) => {
                if (data.Resource.split(":")[2] == "codecommit") {
                    $('#section-developertools-codebuild-notificationrules-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Arn,
                        f2type: 'codestarnotifications.notificationrule',
                        f2data: data,
                        f2region: region,
                        name: data.Name,
                        resource: data.Resource,
                        detailtype: data.DetailType
                    }]);
                }
            });
        }));
    }).catch(() => { });

    unblockUI('#section-developertools-codecommit-repositories-datatable');
    unblockUI('#section-developertools-codecommit-notificationrules-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "codecommit.repository") {
        reqParams.cfn['RepositoryDescription'] = obj.data.repositoryDescription;
        reqParams.tf['description'] = obj.data.repositoryDescription;
        reqParams.cfn['RepositoryName'] = obj.data.repositoryName;
        reqParams.tf['repository_name'] = obj.data.repositoryName;
        reqParams.cfn['Tags'] = obj.data.Tags;

        /*
        TODO:
        Triggers
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codecommit', obj.id, 'AWS::CodeCommit::Repository'),
            'region': obj.region,
            'service': 'codecommit',
            'type': 'AWS::CodeCommit::Repository',
            'terraformType': 'aws_codecommit_repository',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.repositoryId,
                'GetAtt': {
                    'Arn': obj.data.Arn,
                    'CloneUrlHttp': obj.data.cloneUrlHttp,
                    'CloneUrlSsh': obj.data.cloneUrlSsh,
                    'Name': obj.data.repositoryName
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
