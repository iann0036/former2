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
        $('#section-developertools-codebuild-projects-datatable').bootstrapTable('removeAll');

        await Promise.all(data.projects.map(project => {
            return sdkcall("CodeBuild", "batchGetProjects", {
                names: [project]
            }, true).then((data) => {
                $('#section-developertools-codebuild-projects-datatable').bootstrapTable('append', [{
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
        $('#section-developertools-codebuild-sourcecredentials-datatable').bootstrapTable('removeAll');

        data.sourceCredentialsInfos.forEach(sourcecredentials => {
            $('#section-developertools-codebuild-sourcecredentials-datatable').bootstrapTable('append', [{
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
        $('#section-developertools-codebuild-notificationrules-datatable').bootstrapTable('removeAll');

        await Promise.all(data.NotificationRules.map(notificationRule => {
            return sdkcall("CodeStarNotifications", "describeNotificationRule", {
                Arn: notificationRule.Arn
            }, false).then(async (data) => {
                if (data.Resource.split(":")[2] == "codebuild") {
                    $('#section-developertools-codebuild-notificationrules-datatable').bootstrapTable('append', [{
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
        $('#section-developertools-codebuild-reportgroups-datatable').bootstrapTable('removeAll');

        await Promise.all(data.reportGroups.map(reportGroup => {
            return sdkcall("CodeBuild", "batchGetReportGroups", {
                reportGroupArns: [reportGroup]
            }, true).then((data) => {
                $('#section-developertools-codebuild-reportgroups-datatable').bootstrapTable('append', [{
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
