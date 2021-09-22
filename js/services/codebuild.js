/* ========================================================================== */
// CodeBuild
/* ========================================================================== */

sections.push({
    'category': 'Developer Tools',
    'service': 'CodeBuild',
    'resourcetypes': {
        'Projects': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'timeout',
                        title: 'Timeout',
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
        'Source Credentials': {
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
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'servertype',
                        title: 'Server Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'authtype',
                        title: 'Auth Type',
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
        },
        'Report Groups': {
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
                        field: 'type',
                        title: 'Type',
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
        }
    }
});

async function updateDatatableDeveloperToolsCodeBuild() {
    blockUI('#section-developertools-codebuild-projects-datatable');
    blockUI('#section-developertools-codebuild-sourcecredentials-datatable');
    blockUI('#section-developertools-codebuild-notificationrules-datatable');
    blockUI('#section-developertools-codebuild-reportgroups-datatable');

    await sdkcall("CodeBuild", "listProjects", {
        // no params
    }, true).then(async (data) => {
        $('#section-developertools-codebuild-projects-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.projects.map(project => {
            return sdkcall("CodeBuild", "batchGetProjects", {
                names: [project]
            }, true).then((data) => {
                $('#section-developertools-codebuild-projects-datatable').deferredBootstrapTable('append', [{
                    f2id: data.projects[0].arn,
                    f2type: 'codebuild.project',
                    f2data: data.projects[0],
                    f2region: region,
                    name: data.projects[0].name,
                    description: data.projects[0].description,
                    timeout: data.projects[0].timeoutInMinutes + " minutes",
                    creationtime: data.projects[0].created
                }]);
            });
        }));
    });

    await sdkcall("CodeBuild", "listSourceCredentials", {
        // no params
    }, true).then(async (data) => {
        $('#section-developertools-codebuild-sourcecredentials-datatable').deferredBootstrapTable('removeAll');

        data.sourceCredentialsInfos.forEach(sourcecredentials => {
            $('#section-developertools-codebuild-sourcecredentials-datatable').deferredBootstrapTable('append', [{
                f2id: sourcecredentials.arn,
                f2type: 'codebuild.sourcecredentials',
                f2data: sourcecredentials,
                f2region: region,
                arn: sourcecredentials.arn,
                servertype: sourcecredentials.serverType,
                authtype: sourcecredentials.authType
            }]);
        });
    });

    await sdkcall("CodeStarNotifications", "listNotificationRules", {
        // no params
    }, false).then(async (data) => {
        $('#section-developertools-codebuild-notificationrules-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.NotificationRules.map(notificationRule => {
            return sdkcall("CodeStarNotifications", "describeNotificationRule", {
                Arn: notificationRule.Arn
            }, false).then(async (data) => {
                if (data.Resource.split(":")[2] == "codebuild") {
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

    await sdkcall("CodeBuild", "listReportGroups", {
        // no params
    }, false).then(async (data) => {
        $('#section-developertools-codebuild-reportgroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.reportGroups.map(async (reportGroup) => {
            return sdkcall("CodeBuild", "batchGetReportGroups", {
                reportGroupArns: [reportGroup]
            }, true).then(async (data) => {
                data.reportGroups[0]['Tags'] = await getResourceTags(data.reportGroups[0].arn);

                $('#section-developertools-codebuild-reportgroups-datatable').deferredBootstrapTable('append', [{
                    f2id: data.reportGroups[0].arn,
                    f2type: 'codebuild.reportgroup',
                    f2data: data.reportGroups[0],
                    f2region: region,
                    name: data.reportGroups[0].name,
                    type: data.reportGroups[0].type,
                    creationtime: data.reportGroups[0].created
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-developertools-codebuild-projects-datatable');
    unblockUI('#section-developertools-codebuild-sourcecredentials-datatable');
    unblockUI('#section-developertools-codebuild-notificationrules-datatable');
    unblockUI('#section-developertools-codebuild-reportgroups-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "codebuild.project") {
        var gitSubmodulesConfig = null;
        if (obj.data.source.gitSubmodulesConfig) {
            gitSubmodulesConfig = {
                'FetchSubmodules': obj.data.source.gitSubmodulesConfig.fetchSubmodules
            };
        }
        var auth = null;
        if (obj.data.source.auth) {
            auth = {
                'Type': obj.data.source.auth.type,
                'Resource': obj.data.source.auth.resource
            };
        }
        var buildStatusConfig = null;
        if (obj.data.source.buildStatusConfig) {
            buildStatusConfig = {
                'Context': obj.data.source.buildStatusConfig.context,
                'TargetUrl': obj.data.source.buildStatusConfig.targetUrl
            };
        }

        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['Source'] = {
            'Auth': auth,
            'BuildSpec': obj.data.source.buildspec,
            'BuildStatusConfig': buildStatusConfig,
            'GitCloneDepth': obj.data.source.gitCloneDepth,
            'GitSubmodulesConfig': gitSubmodulesConfig,
            'InsecureSsl': obj.data.source.insecureSsl,
            'Location': obj.data.source.location,
            'ReportBuildStatus': obj.data.source.reportBuildStatus,
            'SourceIdentifier': obj.data.source.sourceIdentifier,
            'Type': obj.data.source.type
        };
        if (obj.data.secondarySources) {
            reqParams.cfn['SecondarySources'] = [];
            obj.data.secondarySources.forEach(secondarySource => {
                var gitSubmodulesConfig = null;
                if (secondarySource.gitSubmodulesConfig) {
                    gitSubmodulesConfig = {
                        'FetchSubmodules': secondarySource.gitSubmodulesConfig.fetchSubmodules
                    };
                }
                var auth = null;
                if (secondarySource.auth) {
                    auth = {
                        'Type': secondarySource.auth.type,
                        'Resource': secondarySource.auth.resource
                    };
                }
                reqParams.cfn['SecondarySources'].push({
                    'Auth': auth,
                    'BuildSpec': secondarySource.buildspec,
                    'GitCloneDepth': secondarySource.gitCloneDepth,
                    'GitSubmodulesConfig': gitSubmodulesConfig,
                    'InsecureSsl': secondarySource.insecureSsl,
                    'Location': secondarySource.location,
                    'ReportBuildStatus': secondarySource.reportBuildStatus,
                    'SourceIdentifier': secondarySource.sourceIdentifier,
                    'Type': secondarySource.type
                });
            });
        }
        reqParams.cfn['Artifacts'] = {
            'ArtifactIdentifier': obj.data.artifacts.artifactIdentifier,
            'EncryptionDisabled': obj.data.artifacts.encryptionDisabled,
            'Location': obj.data.artifacts.location,
            'Name': obj.data.artifacts.name,
            'NamespaceType': obj.data.artifacts.namespaceType,
            'OverrideArtifactName': obj.data.artifacts.overrideArtifactName,
            'Packaging': obj.data.artifacts.packaging,
            'Path': obj.data.artifacts.path,
            'Type': obj.data.artifacts.type
        };
        if (obj.data.secondaryArtifacts) {
            reqParams.cfn['SecondaryArtifacts'] = [];
            obj.data.secondaryArtifacts.forEach(secondaryArtifact => {
                reqParams.cfn['SecondaryArtifacts'].push({
                    'ArtifactIdentifier': secondaryArtifact.artifactIdentifier,
                    'EncryptionDisabled': secondaryArtifact.encryptionDisabled,
                    'Location': secondaryArtifact.location,
                    'Name': secondaryArtifact.name,
                    'NamespaceType': secondaryArtifact.namespaceType,
                    'OverrideArtifactName': secondaryArtifact.overrideArtifactName,
                    'Packaging': secondaryArtifact.packaging,
                    'Path': secondaryArtifact.path,
                    'Type': secondaryArtifact.type
                });
            });
        }
        if (obj.data.cache) {
            reqParams.cfn['Cache'] = {
                'Location': obj.data.cache.location,
                'Modes': obj.data.cache.modes,
                'Type': obj.data.cache.type
            };
        }
        var environmentVariables = null;
        if (obj.data.environment.environmentVariables) {
            environmentVariables = [];
            obj.data.environment.environmentVariables.forEach(environmentVariable => {
                environmentVariables.push({
                    'Name': environmentVariable.name,
                    'Type': environmentVariable.type,
                    'Value': environmentVariable.value
                });
            });
        }
        var registryCredential = null;
        if (obj.data.environment.registryCredential) {
            registryCredential = {
                'Credential': obj.data.environment.registryCredential.credential,
                'CredentialProvider': obj.data.environment.registryCredential.credentialProvider
            };
        }
        reqParams.cfn['Environment'] = {
            'Certificate': obj.data.environment.certificate,
            'ComputeType': obj.data.environment.computeType,
            'EnvironmentVariables': environmentVariables,
            'Image': obj.data.environment.image,
            'ImagePullCredentialsType': obj.data.environment.imagePullCredentialsType,
            'PrivilegedMode': obj.data.environment.privilegedMode,
            'RegistryCredential': registryCredential,
            'Type': obj.data.environment.type
        };
        reqParams.cfn['ServiceRole'] = obj.data.serviceRole;
        reqParams.cfn['TimeoutInMinutes'] = obj.data.timeoutInMinutes;
        reqParams.cfn['QueuedTimeoutInMinutes'] = obj.data.queuedTimeoutInMinutes;
        reqParams.cfn['EncryptionKey'] = obj.data.encryptionKey;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            obj.data.tags.forEach(tag => {
                reqParams.cfn['Tags'].push({
                    'Key': tag.key,
                    'Value': tag.value
                });
            });
        }
        if (obj.data.vpcConfig) {
            reqParams.cfn['VpcConfig'] = {
                'SecurityGroupIds': obj.data.securityGroupIds,
                'Subnets': obj.data.subnets,
                'VpcId': obj.data.vpcId
            };
        }
        if (obj.data.badge) {
            reqParams.cfn['BadgeEnabled'] = obj.data.badge.badgeEnabled;
        }
        if (obj.data.logsConfig) {
            reqParams.cfn['LogsConfig'] = {};
            if (obj.data.logsConfig.cloudWatchLogs) {
                reqParams.cfn.LogsConfig['CloudWatchLogs'] = {
                    'Status': obj.data.logsConfig.cloudWatchLogs.status,
                    'GroupName': obj.data.logsConfig.cloudWatchLogs.groupName,
                    'StreamName': obj.data.logsConfig.cloudWatchLogs.streamName
                };
            }
            if (obj.data.logsConfig.s3Logs) {
                reqParams.cfn.LogsConfig['S3Logs'] = {
                    'Status': obj.data.logsConfig.s3Logs.status,
                    'Location': obj.data.logsConfig.s3Logs.location,
                    'EncryptionDisabled': obj.data.logsConfig.s3Logs.encryptionDisabled
                };
            }
        }
        reqParams.cfn['ResourceAccessRole'] = obj.data.resourceAccessRole;
        reqParams.cfn['Visibility'] = obj.data.projectVisibility;

        /*
        TODO:
        Triggers: Triggers
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codebuild', obj.id, 'AWS::CodeBuild::Project'),
            'region': obj.region,
            'service': 'codebuild',
            'type': 'AWS::CodeBuild::Project',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.name,
                'GetAtt': {
                    'Arn': obj.data.arn
                }
            }
        });
    } else if (obj.type == "codebuild.sourcecredentials") {
        reqParams.cfn['AuthType'] = obj.data.authType;
        reqParams.cfn['ServerType'] = obj.data.serverType;
        if (obj.data.serverType == "GITHUB" || obj.data.serverType == "GITHUB_ENTERPRISE") {
            reqParams.cfn['Token'] = 'REPLACEME';
        }
        if (obj.data.serverType == "BITBUCKET") {
            reqParams.cfn['Username'] = 'REPLACEME';
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codebuild', obj.id, 'AWS::CodeBuild::SourceCredential'),
            'region': obj.region,
            'service': 'codebuild',
            'type': 'AWS::CodeBuild::SourceCredential',
            'options': reqParams
        });
    } else if (obj.type == "codestarnotifications.notificationrule") {
        reqParams.cfn['DetailType'] = obj.data.DetailType;
        if (obj.data.EventTypes) {
            reqParams.cfn['EventTypeIds'] = [];
            obj.data.EventTypes.forEach(eventType => {
                reqParams.cfn['EventTypeIds'].push(eventType.EventTypeId);
            });
        }
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Resource'] = obj.data.Resource;
        reqParams.cfn['Status'] = obj.data.Status;
        if (obj.data.Targets) {
            reqParams.cfn['Targets'] = [];
            obj.data.Targets.forEach(target => {
                reqParams.cfn['Targets'].push({
                    'TargetAddress': target.TargetAddress,
                    'TargetType': target.TargetType
                });
            });
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codestarnotifications', obj.id, 'AWS::CodeStarNotifications::NotificationRule'),
            'region': obj.region,
            'service': 'codestarnotifications',
            'type': 'AWS::CodeStarNotifications::NotificationRule',
            'options': reqParams
        });
    } else if (obj.type == "codebuild.reportgroup") {
        var s3destination = null;
        if (obj.data.exportConfig.s3Destination) {
            s3destination = {
                'Bucket': obj.data.exportConfig.s3Destination.bucket,
                'EncryptionDisabled': obj.data.exportConfig.s3Destination.encryptionDisabled,
                'EncryptionKey': obj.data.exportConfig.s3Destination.encryptionKey,
                'Packaging': obj.data.exportConfig.s3Destination.packaging,
                'Path': obj.data.exportConfig.s3Destination.path
            };
        }

        reqParams.cfn['ExportConfig'] = {
            'ExportConfigType': obj.data.exportConfig.exportConfigType,
            'S3Destination': s3destination
        };
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Type'] = obj.data.type;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codebuild', obj.id, 'AWS::CodeBuild::ReportGroup'),
            'region': obj.region,
            'service': 'codebuild',
            'type': 'AWS::CodeBuild::ReportGroup',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
