/* ========================================================================== */
// CodeStar
/* ========================================================================== */

sections.push({
    'category': 'Developer Tools',
    'service': 'CodeStar',
    'resourcetypes': {
        'GitHub Repositories': {
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
                        field: 'owner',
                        title: 'Owner',
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

async function updateDatatableDeveloperToolsCodeStar() {
    blockUI('#section-developertools-codestar-githubrepositories-datatable');

    await sdkcall("CodeStar", "listProjects", {
        // no params
    }, false).then(async (data) => {
        $('#section-developertools-codestar-githubrepositories-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.projects.map(async (project) => {
            return sdkcall("CodeStar", "listResources", {
                projectId: project.projectId
            }, false).then(async (data) => {
                await Promise.all(data.resources.map(async (resource) => {
                    if (resource.id.match(/^arn\:aws\:codepipeline\:[a-z0-9-]+\:[0-9]+\:[A-Za-z0-9.@\-_]+$/g)) {
                        return sdkcall("CodePipeline", "getPipeline", {
                            name: resource.id.split(":").pop()
                        }, false).then(async (data) => {
                            data.pipeline.stages.forEach(stage => {
                                stage.actions.forEach(action => {
                                    if (action.actionTypeId.provider == "GitHub") {
                                        $('#section-developertools-codestar-githubrepositories-datatable').deferredBootstrapTable('append', [{
                                            f2id: action.configuration.Repo,
                                            f2type: 'codestar.githubrepository',
                                            f2data: action.configuration,
                                            f2region: region,
                                            name: action.configuration.Repo,
                                            owner: action.configuration.Owner
                                        }]);
                                    }
                                });
                            });
                        });
                    }
                    return Promise.resolve();
                }));
            });
        }));

    }).catch(() => { });

    unblockUI('#section-developertools-codestar-githubrepositories-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "codestar.githubrepository") {
        reqParams.cfn['EnableIssues'] = true;
        reqParams.cfn['RepositoryAccessToken'] = 'REPLACEME';
        reqParams.cfn['RepositoryName'] = obj.data.Repo;
        reqParams.cfn['RepositoryOwner'] = obj.data.Owner;

        /*
        SKIPPED: Code
        
        TODO:
        IsPrivate
        RepositoryDescription
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codestar', obj.id, 'AWS::CodeStar::GitHubRepository'),
            'region': obj.region,
            'service': 'codestar',
            'type': 'AWS::CodeStar::GitHubRepository',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
