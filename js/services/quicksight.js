/* ========================================================================== */
// QuickSight
/* ========================================================================== */

sections.push({
    'category': 'Analytics',
    'service': 'QuickSight',
    'resourcetypes': {
        'Analyses': {
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
        'Dashboards': {
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
        'Templates': {
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
        'Themes': {
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
        'Groups': {
            'terraformonly': true,
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
                        title: 'Group Name',
                        field: 'groupname',
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
                    }
                ]
            ]
        }
    }
});

async function updateDatatableAnalyticsQuickSight() {
    blockUI('#section-analytics-quicksight-groups-datatable');
    blockUI('#section-analytics-quicksight-analyses-datatable');
    blockUI('#section-analytics-quicksight-dashboards-datatable');
    blockUI('#section-analytics-quicksight-templates-datatable');
    blockUI('#section-analytics-quicksight-themes-datatable');

    await sdkcall("STS", "getCallerIdentity", {
        // no params
    }, true).then(async (data) => {
        var accountId = data.Account;

        await sdkcall("QuickSight", "listGroups", {
            Namespace: 'default',
            AwsAccountId: accountId
        }, false).then(async (data) => {
            $('#section-analytics-quicksight-groups-datatable').deferredBootstrapTable('removeAll');

            data.GroupList.forEach(group => {
                group['AccountId'] = accountId;

                $('#section-analytics-quicksight-groups-datatable').deferredBootstrapTable('append', [{
                    f2id: group.Arn,
                    f2type: 'quicksight.group',
                    f2data: group,
                    f2region: region,
                    groupname: group.GroupName,
                    description: group.Description
                }]);
            });
        }).catch(() => { });

        await sdkcall("QuickSight", "listAnalyses", {
            AwsAccountId: accountId
        }, false).then(async (data) => {
            $('#section-analytics-quicksight-analyses-datatable').deferredBootstrapTable('removeAll');

            await Promise.all(data.AnalysisSummaryList.map(analysis => {
                return sdkcall("QuickSight", "describeAnalysis", {
                    AnalysisId: analysis.AnalysisId,
                    AwsAccountId: accountId
                }, false).then(async (data) => {
                    data.Analysis['AccountId'] = accountId;

                    $('#section-analytics-quicksight-analyses-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Analysis.Arn,
                        f2type: 'quicksight.analysis',
                        f2data: data.Analysis,
                        f2region: region,
                        name: data.Analysis.Name,
                        id: data.Analysis.AnalysisId
                    }]);
                });
            }));
        }).catch(() => { });

        await sdkcall("QuickSight", "listDashboards", {
            AwsAccountId: accountId
        }, false).then(async (data) => {
            $('#section-analytics-quicksight-dashboards-datatable').deferredBootstrapTable('removeAll');

            await Promise.all(data.DashboardSummaryList.map(dashboard => {
                return sdkcall("QuickSight", "describeDashboard", {
                    DashboardId: dashboard.DashboardId,
                    AwsAccountId: accountId
                }, false).then(async (data) => {
                    data.Dashboard['AccountId'] = accountId;

                    $('#section-analytics-quicksight-dashboards-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Dashboard.Arn,
                        f2type: 'quicksight.dashboard',
                        f2data: data.Dashboard,
                        f2region: region,
                        name: data.Dashboard.Name,
                        id: data.Dashboard.DashboardId
                    }]);
                });
            }));
        }).catch(() => { });

        await sdkcall("QuickSight", "listTemplates", {
            AwsAccountId: accountId
        }, false).then(async (data) => {
            $('#section-analytics-quicksight-templates-datatable').deferredBootstrapTable('removeAll');

            await Promise.all(data.TemplateSummaryList.map(template => {
                return sdkcall("QuickSight", "describeTemplate", {
                    TemplateId: template.TemplateId,
                    AwsAccountId: accountId
                }, false).then(async (data) => {
                    data.Template['AccountId'] = accountId;

                    $('#section-analytics-quicksight-templates-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Template.Arn,
                        f2type: 'quicksight.template',
                        f2data: data.Template,
                        f2region: region,
                        name: data.Template.Name,
                        id: data.Template.TemplateId
                    }]);
                });
            }));
        }).catch(() => { });

        await sdkcall("QuickSight", "listThemes", {
            AwsAccountId: accountId
        }, false).then(async (data) => {
            $('#section-analytics-quicksight-themes-datatable').deferredBootstrapTable('removeAll');

            await Promise.all(data.ThemeSummaryList.map(theme => {
                return sdkcall("QuickSight", "describeTheme", {
                    ThemeId: theme.ThemeId,
                    AwsAccountId: accountId
                }, false).then(async (data) => {
                    data.Theme['AccountId'] = accountId;

                    $('#section-analytics-quicksight-themes-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Theme.Arn,
                        f2type: 'quicksight.theme',
                        f2data: data.Theme,
                        f2region: region,
                        name: data.Theme.Name,
                        id: data.Theme.ThemeId
                    }]);
                });
            }));
        }).catch(() => { });
    });

    unblockUI('#section-analytics-quicksight-groups-datatable');
    unblockUI('#section-analytics-quicksight-analyses-datatable');
    unblockUI('#section-analytics-quicksight-dashboards-datatable');
    unblockUI('#section-analytics-quicksight-templates-datatable');
    unblockUI('#section-analytics-quicksight-themes-datatable');

}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "quicksight.group") {
        reqParams.tf['group_name'] = obj.data.GroupName;
        reqParams.tf['aws_account_id'] = obj.data.AccountId;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.tf['namespace'] = "default";

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('quicksight', obj.id, 'AWS::QuickSight::Group'), // not real resource type
            'region': obj.region,
            'service': 'quicksight',
            'terraformType': 'aws_quicksight_group',
            'options': reqParams
        });
    } else if (obj.type == "quicksight.analysis") {
        reqParams.cfn['AnalysisId'] = obj.data.AnalysisId;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['AwsAccountId'] = obj.data.AccountId;
        reqParams.cfn['ThemeArn'] = obj.data.ThemeArn;

        /*
        Parameters: 
            Parameters
        Permissions: 
            - ResourcePermission
        SourceEntity: 
            AnalysisSourceEntity
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('quicksight', obj.id, 'AWS::QuickSight::Analysis'),
            'region': obj.region,
            'service': 'quicksight',
            'type': 'AWS::QuickSight::Analysis',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Arn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "quicksight.dashboard") {
        reqParams.cfn['DashboardId'] = obj.data.DashboardId;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['AwsAccountId'] = obj.data.AccountId;
        if (obj.data.Version) {
            reqParams.cfn['VersionDescription'] = obj.data.Version.Description;
            reqParams.cfn['ThemeArn'] = obj.data.Version.ThemeArn;
        }

        /*
        DashboardPublishOptions: 
            DashboardPublishOptions
        Parameters: 
            Parameters
        Permissions: 
            - ResourcePermission
        SourceEntity: 
            DashboardSourceEntity
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('quicksight', obj.id, 'AWS::QuickSight::Dashboard'),
            'region': obj.region,
            'service': 'quicksight',
            'type': 'AWS::QuickSight::Dashboard',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Arn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "quicksight.template") {
        reqParams.cfn['TemplateId'] = obj.data.TemplateId;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['AwsAccountId'] = obj.data.AccountId;
        if (obj.data.Version) {
            reqParams.cfn['VersionDescription'] = obj.data.Version.Description;
        }

        /*
        Permissions: 
            - ResourcePermission
        SourceEntity: 
            TemplateSourceEntity
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('quicksight', obj.id, 'AWS::QuickSight::Template'),
            'region': obj.region,
            'service': 'quicksight',
            'type': 'AWS::QuickSight::Template',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Arn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "quicksight.theme") {
        reqParams.cfn['ThemeId'] = obj.data.ThemeId;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['AwsAccountId'] = obj.data.AccountId;
        if (obj.data.Version) {
            reqParams.cfn['BaseThemeId'] = obj.data.Version.BaseThemeId;
            reqParams.cfn['VersionDescription'] = obj.data.Version.Description;
            reqParams.cfn['Configuration'] = obj.data.Version.Configuration;
        }

        /*
        Permissions: 
            - ResourcePermission
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('quicksight', obj.id, 'AWS::QuickSight::Theme'),
            'region': obj.region,
            'service': 'quicksight',
            'type': 'AWS::QuickSight::Theme',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Arn': obj.data.Arn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
