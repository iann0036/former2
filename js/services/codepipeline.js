/* ========================================================================== */
// CodePipeline
/* ========================================================================== */

sections.push({
    'category': 'Developer Tools',
    'service': 'CodePipeline',
    'resourcetypes': {
        'Pipelines': {
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
                        field: 'version',
                        title: 'Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Webhooks': {
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
                        field: 'targetpipeline',
                        title: 'Target Pipeline',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'targetaction',
                        title: 'Target Action',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'authentication',
                        title: 'Authentication',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Custom Action Types': {
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
                        title: 'Category',
                        field: 'category',
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
                        field: 'provider',
                        title: 'Provider',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'version',
                        title: 'Version',
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

async function updateDatatableDeveloperToolsCodePipeline() {
    blockUI('#section-developertools-codepipeline-pipelines-datatable');
    blockUI('#section-developertools-codepipeline-webhooks-datatable');
    blockUI('#section-developertools-codepipeline-customactiontypes-datatable');
    blockUI('#section-developertools-codepipeline-notificationrules-datatable');

    await sdkcall("CodePipeline", "listPipelines", {
        // no params
    }, true).then(async (data) => {
        $('#section-developertools-codepipeline-pipelines-datatable').bootstrapTable('removeAll');

        await Promise.all(data.pipelines.map(pipeline => {
            return sdkcall("CodePipeline", "getPipeline", {
                name: pipeline.name
            }, true).then((data) => {
                $('#section-developertools-codepipeline-pipelines-datatable').bootstrapTable('append', [{
                    f2id: data.pipeline.name,
                    f2type: 'codepipeline.pipeline',
                    f2data: data.pipeline,
                    f2region: region,
                    name: data.pipeline.name,
                    version: data.pipeline.version
                }]);
            });
        }));

        unblockUI('#section-developertools-codepipeline-pipelines-datatable');
    });

    await sdkcall("CodePipeline", "listWebhooks", {
        // no params
    }, true).then((data) => {
        $('#section-developertools-codepipeline-webhooks-datatable').bootstrapTable('removeAll');

        data.webhooks.forEach(webhook => {
            $('#section-developertools-codepipeline-webhooks-datatable').bootstrapTable('append', [{
                f2id: webhook.arn,
                f2type: 'codepipeline.webhook',
                f2data: webhook,
                f2region: region,
                name: webhook.definition.name,
                targetpipeline: webhook.definition.targetPipeline,
                targetaction: webhook.definition.targetAction,
                authentication: webhook.definition.authentication
            }]);
        });

        unblockUI('#section-developertools-codepipeline-webhooks-datatable');
    });

    await sdkcall("CodePipeline", "listActionTypes", {
        actionOwnerFilter: "Custom"
    }, true).then((data) => {
        $('#section-developertools-codepipeline-customactiontypes-datatable').bootstrapTable('removeAll');

        data.actionTypes.forEach(actionType => {
            $('#section-developertools-codepipeline-customactiontypes-datatable').bootstrapTable('append', [{
                f2id: MD5(JSON.stringify(actionType)),
                f2type: 'codepipeline.customactiontype',
                f2data: actionType,
                f2region: region,
                category: actionType.id.category,
                provider: actionType.id.provider,
                version: actionType.id.version
            }]);
        });

        unblockUI('#section-developertools-codepipeline-customactiontypes-datatable');
    });

    await sdkcall("CodeStarNotifications", "listNotificationRules", {
        // no params
    }, false).then(async (data) => {
        $('#section-developertools-codepipeline-notificationrules-datatable').bootstrapTable('removeAll');

        await Promise.all(data.NotificationRules.map(notificationRule => {
            return sdkcall("CodeStarNotifications", "describeNotificationRule", {
                Arn: notificationRule.Arn
            }, false).then(async (data) => {
                if (data.Resource.split(":")[2] == "codepipeline") {
                    $('#section-developertools-codepipeline-notificationrules-datatable').bootstrapTable('append', [{
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

    unblockUI('#section-developertools-codepipeline-notificationrules-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
