/* ========================================================================== */
// AppConfig
/* ========================================================================== */

sections.push({
    'category': 'Management &amp; Governance',
    'service': 'AppConfig',
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
                    }
                ]
            ]
        },
        'Configuration Profiles': {
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
                        field: 'applicationid',
                        title: 'Application ID',
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
                    }
                ]
            ]
        },
        'Environments': {
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
                        field: 'applicationid',
                        title: 'Application ID',
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
                    }
                ]
            ]
        },
        'Deployments': {
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
                        title: 'Deployment Number',
                        field: 'deploymentnumber',
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
                        field: 'applicationid',
                        title: 'Application ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'environmentid',
                        title: 'Environment ID',
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
                    }
                ]
            ]
        },
        'Deployment Strategies': {
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
                    }
                ]
            ]
        },
        'Hosted Configuration Versions': {
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
                        title: 'Version',
                        field: 'version',
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
                        field: 'applicationid',
                        title: 'Application ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'configuration Profile ID',
                        title: 'Configuration Profile ID',
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
                    }
                ]
            ]
        }
    }
});

async function updateDatatableManagementAndGovernanceAppConfig() {
    blockUI('#section-managementandgovernance-appconfig-applications-datatable');
    blockUI('#section-managementandgovernance-appconfig-configurationprofiles-datatable');
    blockUI('#section-managementandgovernance-appconfig-environments-datatable');
    blockUI('#section-managementandgovernance-appconfig-deployments-datatable');
    blockUI('#section-managementandgovernance-appconfig-deploymentstrategies-datatable');
    blockUI('#section-managementandgovernance-appconfig-hostedconfigurationversions-datatable');

    await sdkcall("AppConfig", "listApplications", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-appconfig-applications-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-appconfig-configurationprofiles-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-appconfig-environments-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Items.map(async (item) => {
            await sdkcall("AppConfig", "getApplication", {
                ApplicationId: item.Id
            }, true).then(async (data) => {
                $('#section-managementandgovernance-appconfig-applications-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Id,
                    f2type: 'appconfig.application',
                    f2data: data,
                    f2region: region,
                    id: data.Id,
                    name: data.Name,
                    description: data.Description
                }]);
            });

            await sdkcall("AppConfig", "listEnvironments", {
                ApplicationId: item.Id
            }, true).then(async (data) => {
                await Promise.all(data.Items.map(async (environmentitem) => {
                    await sdkcall("AppConfig", "getEnvironment", {
                        ApplicationId: item.Id,
                        EnvironmentId: environmentitem.Id
                    }, true).then(async (data) => {
                        $('#section-managementandgovernance-appconfig-environments-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Id,
                            f2type: 'appconfig.environment',
                            f2data: data,
                            f2region: region,
                            id: data.Id,
                            applicationid: data.ApplicationId,
                            name: data.Name,
                            description: data.Description
                        }]);
                    });

                    return sdkcall("AppConfig", "listDeployments", {
                        ApplicationId: item.Id,
                        EnvironmentId: environmentitem.Id
                    }, true).then(async (data) => {
                        await Promise.all(data.Items.map(deploymentitem => {
                            return sdkcall("AppConfig", "getDeployment", {
                                ApplicationId: item.Id,
                                EnvironmentId: environmentitem.Id,
                                DeploymentNumber: deploymentitem.DeploymentNumber
                            }, true).then(async (data) => {
                                $('#section-managementandgovernance-appconfig-configurationprofiles-datatable').deferredBootstrapTable('append', [{
                                    f2id: item.Id + " " + environmentitem.Id + " " + data.DeploymentNumber,
                                    f2type: 'appconfig.deployment',
                                    f2data: data,
                                    f2region: region,
                                    deploymentnumber: data.DeploymentNumber,
                                    applicationid: item.Id,
                                    environmentid: environmentitem.Id,
                                    name: data.Name,
                                    description: data.Description
                                }]);
                            });
                        }));
                    });
                }));
            });

            return sdkcall("AppConfig", "listConfigurationProfiles", {
                ApplicationId: item.Id
            }, true).then(async (data) => {
                await Promise.all(data.Items.map(async (configprofileitem) => {
                    await sdkcall("AppConfig", "listHostedConfigurationVersions", {
                        ApplicationId: item.Id,
                        ConfigurationProfileId: configprofileitem.Id
                    }, true).then(async (data) => {
                        await Promise.all(data.Items.map(hostedconfigversion => {
                            return sdkcall("AppConfig", "getHostedConfigurationVersion", {
                                ApplicationId: item.Id,
                                ConfigurationProfileId: configprofileitem.Id,
                                VersionNumber: hostedconfigversion.VersionNumber
                            }, true).then(async (data) => {
                                $('#section-managementandgovernance-appconfig-hostedconfigurationversions-datatable').deferredBootstrapTable('append', [{
                                    f2id: data.ApplicationId + " " + data.ConfigurationProfileId + " Version " + data.VersionNumber,
                                    f2type: 'appconfig.hostedconfigurationversion',
                                    f2data: data,
                                    f2region: region,
                                    applicationid: data.ApplicationId,
                                    configurationprofileid: data.ConfigurationProfileId,
                                    version: data.VersionNumber,
                                    description: data.Description
                                }]);
                            });
                        }));
                    });

                    return sdkcall("AppConfig", "getConfigurationProfile", {
                        ApplicationId: item.Id,
                        ConfigurationProfileId: configprofileitem.Id
                    }, true).then(async (data) => {
                        $('#section-managementandgovernance-appconfig-configurationprofiles-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Id,
                            f2type: 'appconfig.configurationprofile',
                            f2data: data,
                            f2region: region,
                            id: data.Id,
                            applicationid: data.ApplicationId,
                            name: data.Name,
                            description: data.Description
                        }]);
                    });
                }));
            });
        }));
    }).catch(() => { });

    await sdkcall("AppConfig", "listDeploymentStrategies", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-appconfig-deploymentstrategies-datatable').deferredBootstrapTable('removeAll');
        
        return Promise.all(data.Items.map(deploymentstrategyitem => {
            return sdkcall("AppConfig", "getDeploymentStrategy", {
                DeploymentStrategyId: deploymentstrategyitem.Id
            }, true).then(async (data) => {
                if (!data.Name.startsWith("AppConfig.")) {
                    $('#section-managementandgovernance-appconfig-deploymentstrategies-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Id,
                        f2type: 'appconfig.deploymentstrategy',
                        f2data: data,
                        f2region: region,
                        id: data.Id,
                        name: data.Name,
                        description: data.Description
                    }]);
                }
            });
        }));
    }).catch(() => { });

    unblockUI('#section-managementandgovernance-appconfig-applications-datatable');
    unblockUI('#section-managementandgovernance-appconfig-configurationprofiles-datatable');
    unblockUI('#section-managementandgovernance-appconfig-environments-datatable');
    unblockUI('#section-managementandgovernance-appconfig-deployments-datatable');
    unblockUI('#section-managementandgovernance-appconfig-deploymentstrategies-datatable');
    unblockUI('#section-managementandgovernance-appconfig-hostedconfigurationversions-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "appconfig.application") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Name'] = obj.data.Name;

        /*
        TODO:
        Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appconfig', obj.id, 'AWS::AppConfig::Application'),
            'region': obj.region,
            'service': 'appconfig',
            'type': 'AWS::AppConfig::Application',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Id
            }
        });
    } else if (obj.type == "appconfig.configurationprofile") {
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['LocationUri'] = obj.data.LocationUri;
        reqParams.cfn['RetrievalRoleArn'] = obj.data.RetrievalRoleArn;
        reqParams.cfn['Validators'] = obj.data.Validators;

        /*
        TODO:
        Tags: 
            - Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appconfig', obj.id, 'AWS::AppConfig::ConfigurationProfile'),
            'region': obj.region,
            'service': 'appconfig',
            'type': 'AWS::AppConfig::ConfigurationProfile',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Id
            }
        });
    } else if (obj.type == "appconfig.environment") {
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Monitors'] = obj.data.Monitors;

        /*
        TODO:
        Tags: 
            - Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appconfig', obj.id, 'AWS::AppConfig::Environment'),
            'region': obj.region,
            'service': 'appconfig',
            'type': 'AWS::AppConfig::Environment',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Id
            }
        });
    } else if (obj.type == "appconfig.deployment") {
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['EnvironmentId'] = obj.data.EnvironmentId;
        reqParams.cfn['DeploymentStrategyId'] = obj.data.DeploymentStrategyId;
        reqParams.cfn['ConfigurationProfileId'] = obj.data.ConfigurationProfileId;
        reqParams.cfn['ConfigurationVersion'] = obj.data.ConfigurationVersion;

        /*
        TODO:
        Tags: 
            - Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appconfig', obj.id, 'AWS::AppConfig::Deployment'),
            'region': obj.region,
            'service': 'appconfig',
            'type': 'AWS::AppConfig::Deployment',
            'options': reqParams
        });
    } else if (obj.type == "appconfig.deploymentstrategy") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['DeploymentDurationInMinutes'] = obj.data.DeploymentDurationInMinutes;
        reqParams.cfn['FinalBakeTimeInMinutes'] = obj.data.FinalBakeTimeInMinutes;
        reqParams.cfn['GrowthFactor'] = obj.data.GrowthFactor;
        reqParams.cfn['GrowthType'] = obj.data.GrowthType;
        reqParams.cfn['ReplicateTo'] = obj.data.ReplicateTo;

        /*
        TODO:
        Tags: 
            - Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appconfig', obj.id, 'AWS::AppConfig::DeploymentStrategy'),
            'region': obj.region,
            'service': 'appconfig',
            'type': 'AWS::AppConfig::DeploymentStrategy',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Id
            }
        });
    } else if (obj.type == "appconfig.hostedconfigurationversion") {
        reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
        reqParams.cfn['ConfigurationProfileId'] = obj.data.ConfigurationProfileId;
        reqParams.cfn['Content'] = obj.data.Content;
        reqParams.cfn['ContentType'] = obj.data.ContentType;
        reqParams.cfn['Description'] = obj.data.Description;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appconfig', obj.id, 'AWS::AppConfig::HostedConfigurationVersion'),
            'region': obj.region,
            'service': 'appconfig',
            'type': 'AWS::AppConfig::HostedConfigurationVersion',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.VersionNumber
            }
        });
    } else {
        return false;
    }

    return true;
});
