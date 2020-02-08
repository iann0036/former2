/* ========================================================================== */
// CodeDeploy
/* ========================================================================== */

sections.push({
    'category': 'Developer Tools',
    'service': 'CodeDeploy',
    'resourcetypes': {
        'Applications': {
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
                    },
                    {
                        field: 'computeplatform',
                        title: 'Compute Platform',
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
        'Deployment Configurations': {
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
                    },
                    {
                        field: 'computeplatform',
                        title: 'Compute Platform',
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
        'Deployment Groups': {
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
                    },
                    {
                        field: 'application',
                        title: 'Application',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'deploymentgroup',
                        title: 'Deployment Group',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'deploymentconfig',
                        title: 'Deployment Config',
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

async function updateDatatableDeveloperToolsCodeDeploy() {
    blockUI('#section-developertools-codedeploy-applications-datatable');
    blockUI('#section-developertools-codedeploy-deploymentconfigurations-datatable');
    blockUI('#section-developertools-codedeploy-deploymentgroups-datatable');

    await sdkcall("CodeDeploy", "listApplications", {
        // no params
    }, true).then(async (data) => {
        $('#section-developertools-codedeploy-applications-datatable').bootstrapTable('removeAll');

        await Promise.all(data.applications.map(application => {
            return Promise.all([
                sdkcall("CodeDeploy", "listDeploymentGroups", {
                    applicationName: application
                }, true).then((data) => {
                    $('#section-developertools-codedeploy-deploymentgroups-datatable').bootstrapTable('removeAll');

                    data.deploymentGroups.forEach(deploymentGroup => {
                        sdkcall("CodeDeploy", "getDeploymentGroup", {
                            applicationName: application,
                            deploymentGroupName: deploymentGroup
                        }, true).then((data) => {
                            $('#section-developertools-codedeploy-deploymentgroups-datatable').bootstrapTable('append', [{
                                f2id: data.deploymentGroupInfo.deploymentGroupId,
                                f2type: 'codedeploy.deploymentgroup',
                                f2data: data.deploymentGroupInfo,
                                f2region: region,
                                name: data.deploymentGroupInfo.deploymentGroupName,
                                id: data.deploymentGroupInfo.deploymentGroupId,
                                application: application,
                                deploymentgroup: deploymentGroup,
                                deploymentconfig: data.deploymentGroupInfo.deploymentConfigName
                            }]);
                        });
                    });
                }),
                sdkcall("CodeDeploy", "getApplication", {
                    applicationName: application
                }, true).then((data) => {
                    $('#section-developertools-codedeploy-applications-datatable').bootstrapTable('append', [{
                        f2id: data.application.applicationId,
                        f2type: 'codedeploy.application',
                        f2data: data.application,
                        f2region: region,
                        id: data.application.applicationId,
                        name: data.application.applicationName,
                        computeplatform: data.application.computePlatform,
                        creationtime: data.application.createTime
                    }]);
                })
            ]);
        }));

        unblockUI('#section-developertools-codedeploy-applications-datatable');
        unblockUI('#section-developertools-codedeploy-deploymentgroups-datatable');
    });

    await sdkcall("CodeDeploy", "listDeploymentConfigs", {
        // no params
    }, true).then(async (data) => {
        $('#section-developertools-codedeploy-deploymentconfigurations-datatable').bootstrapTable('removeAll');

        await Promise.all(data.deploymentConfigsList.map(deploymentConfiguration => {
            return sdkcall("CodeDeploy", "getDeploymentConfig", {
                deploymentConfigName: deploymentConfiguration
            }, true).then((data) => {
                if (!data.deploymentConfigInfo.deploymentConfigName.startsWith("CodeDeployDefault.")) {
                    $('#section-developertools-codedeploy-deploymentconfigurations-datatable').bootstrapTable('append', [{
                        f2id: data.deploymentConfigInfo.deploymentConfigId,
                        f2type: 'codedeploy.deploymentconfiguration',
                        f2data: data.deploymentConfigInfo,
                        f2region: region,
                        id: data.deploymentConfigInfo.deploymentConfigId,
                        name: data.deploymentConfigInfo.deploymentConfigName,
                        computeplatform: data.deploymentConfigInfo.computePlatform,
                        creationtime: data.deploymentConfigInfo.createTime
                    }]);
                }
            });
        }));

        unblockUI('#section-developertools-codedeploy-deploymentconfigurations-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
