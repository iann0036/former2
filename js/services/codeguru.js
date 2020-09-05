/* ========================================================================== */
// CodeGuru
/* ========================================================================== */

sections.push({
    'category': 'Machine Learning',
    'service': 'CodeGuru',
    'resourcetypes': {
        'Profiling Groups': {
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
        'Repository Associations': {
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
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'type',
                        title: 'Type',
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

async function updateDatatableMachineLearningCodeGuru() {
    blockUI('#section-machinelearning-codeguru-profilinggroups-datatable');
    blockUI('#section-machinelearning-codeguru-repositoryassociations-datatable');

    await sdkcall("CodeGuruProfiler", "listProfilingGroups", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-codeguru-profilinggroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.profilingGroups.map(async (group) => {
            await sdkcall("CodeGuruProfiler", "getNotificationConfiguration", {
                profilingGroupName: group.name
            }, true).then(async (data) => {
                group['notificationConfiguration'] = data.notificationConfiguration;
            }).catch(() => { });

            $('#section-machinelearning-codeguru-profilinggroups-datatable').deferredBootstrapTable('append', [{
                f2id: group.arn,
                f2type: 'codeguru.profilinggroup',
                f2data: group,
                f2region: region,
                name: group.name,
                creationtime: group.createdAt
            }]);

            return Promise.resolve();
        }));
    }).catch(() => { });

    await sdkcall("CodeGuruReviewer", "listRepositoryAssociations", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-codeguru-repositoryassociations-datatable').deferredBootstrapTable('removeAll');

        data.RepositoryAssociationSummaries.forEach(repositoryAssociation => {
            $('#section-machinelearning-codeguru-repositoryassociations-datatable').deferredBootstrapTable('append', [{
                f2id: repositoryAssociation.AssociationArn,
                f2type: 'codeguru.repositoryassociation',
                f2data: repositoryAssociation,
                f2region: region,
                name: repositoryAssociation.Name,
                owner: repositoryAssociation.Owner,
                type: repositoryAssociation.ProviderType
            }]);
        });
        
    }).catch(() => { });

    unblockUI('#section-machinelearning-codeguru-profilinggroups-datatable');
    unblockUI('#section-machinelearning-codeguru-repositoryassociations-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "codeguru.profilinggroup") {
        reqParams.cfn['ProfilingGroupName'] = obj.data.name;
        reqParams.cfn['ComputePlatform'] = obj.data.computePlatform;
        if (obj.data.notificationConfiguration) {
            var channels = [];
            obj.data.notificationConfiguration.channels.forEach(channel => {
                channels.push({
                    'channelId': channel.id,
                    'channelUri': channel.uri
                });
            });
            reqParams.cfn['AnomalyDetectionNotificationConfiguration'] = channels;
        }
        
        /*
        TODO:
        AgentPermissions
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codeguru', obj.id, 'AWS::CodeGuruProfiler::ProfilingGroup'),
            'region': obj.region,
            'service': 'codeguru',
            'type': 'AWS::CodeGuruProfiler::ProfilingGroup',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.name,
                'GetAtt': {
                    'Arn': obj.data.arn
                },
                'Import': {
                    'ProfilingGroupName': obj.data.name
                }
            }
        });
    } else if (obj.type == "codeguru.repositoryassociation") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Owner'] = obj.data.Owner;
        reqParams.cfn['Type'] = obj.data.ProviderType;
        reqParams.cfn['ConnectionArn'] = obj.data.ConnectionArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codeguru', obj.id, 'AWS::CodeGuruReviewer::RepositoryAssociation'),
            'region': obj.region,
            'service': 'codeguru',
            'type': 'AWS::CodeGuruReviewer::RepositoryAssociation',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.AssociationArn
            }
        });
    } else {
        return false;
    }

    return true;
});
