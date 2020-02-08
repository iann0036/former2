/* ========================================================================== */
// ECR
/* ========================================================================== */

sections.push({
    'category': 'Compute',
    'service': 'ECR',
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
                        field: 'uri',
                        title: 'Repository URI',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'createdat',
                        title: 'Created At',
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

async function updateDatatableComputeECR() {
    blockUI('#section-compute-ecr-repositories-datatable');

    await sdkcall("ECR", "describeRepositories", {
        // no params
    }, true).then(async (data) => {
        $('#section-compute-ecr-repositories-datatable').bootstrapTable('removeAll');

        await Promise.all(data.repositories.map(async (repository) => {
            await sdkcall("ECR", "getLifecyclePolicy", {
                repositoryName: repository.repositoryName
            }, false).then(async (data) => {
                repository['lifecyclePolicyText'] = data.lifecyclePolicyText;
                repository['registryId'] = data.registryId;
                await sdkcall("ECR", "getRepositoryPolicy", {
                    repositoryName: repository.repositoryName
                }, true).then((data) => {
                    repository['policy'] = data.policyText;

                }).catch(() => { });
            }).catch(() => { });

            $('#section-compute-ecr-repositories-datatable').bootstrapTable('append', [{
                f2id: repository.repositoryArn,
                f2type: 'ecr.repository',
                f2data: repository,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/ecr/repositories/' + repository.repositoryName + '/',
                name: repository.repositoryName,
                uri: repository.repositoryUri,
                createdat: repository.createdAt
            }]);
        }));

        unblockUI('#section-compute-ecr-repositories-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
