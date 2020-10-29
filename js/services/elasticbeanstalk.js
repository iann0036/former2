/* ========================================================================== */
// Elastic Beanstalk
/* ========================================================================== */

sections.push({
    'category': 'Compute',
    'service': 'Elastic Beanstalk',
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'datecreated',
                        title: 'Date Created',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Application Versions': {
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
                        field: 'applicationname',
                        title: 'Application Name',
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
                    },
                    {
                        field: 'datecreated',
                        title: 'Date Created',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
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
                        field: 'applicationname',
                        title: 'Application Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'templatename',
                        title: 'Template Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'platformarn',
                        title: 'Platform ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Configuration Templates': {
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
                        field: 'platformarn',
                        title: 'Platform ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'environmentname',
                        title: 'Environment Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'datecreated',
                        title: 'Date Created',
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

async function updateDatatableComputeElasticBeanstalk() {
    blockUI('#section-compute-elasticbeanstalk-applications-datatable');
    blockUI('#section-compute-elasticbeanstalk-applicationversions-datatable');
    blockUI('#section-compute-elasticbeanstalk-environments-datatable');
    blockUI('#section-compute-elasticbeanstalk-configurationtemplates-datatable');

    await sdkcall("ElasticBeanstalk", "describeApplications", {
        // no params
    }, true).then(async (data) => {
        $('#section-compute-elasticbeanstalk-applications-datatable').deferredBootstrapTable('removeAll');
        $('#section-compute-elasticbeanstalk-configurationtemplates-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Applications.map(async (application) => {
            $('#section-compute-elasticbeanstalk-applications-datatable').deferredBootstrapTable('append', [{
                f2id: application.ApplicationName,
                f2type: 'elasticbeanstalk.application',
                f2data: application,
                f2region: region,
                name: application.ApplicationName,
                description: application.Description,
                datecreated: application.DateCreated
            }]);

            return sdkcall("ElasticBeanstalk", "describeEnvironments", {
                ApplicationName: application.ApplicationName
            }, true).then(async (data) => {
                await Promise.all(data.Environments.map(async (environment) => {
                    return sdkcall("ElasticBeanstalk", "describeConfigurationSettings", {
                        ApplicationName: application.ApplicationName,
                        EnvironmentName: environment.EnvironmentName
                    }, false).then((data) => {
                        data.ConfigurationSettings.forEach(configurationTemplate => {
                            $('#section-compute-elasticbeanstalk-configurationtemplates-datatable').deferredBootstrapTable('append', [{
                                f2id: application.ApplicationName + configurationTemplate.TemplateName,
                                f2type: 'elasticbeanstalk.configurationtemplate',
                                f2data: configurationTemplate,
                                f2region: region,
                                name: configurationTemplate.TemplateName,
                                description: configurationTemplate.Description,
                                platformarn: configurationTemplate.PlatformArn,
                                environmentname: configurationTemplate.EnvironmentName,
                                datecreated: configurationTemplate.DateCreated
                            }]);
                        });
                    }).catch(() => { });
                }));
            }).catch(() => { });
        }));

        unblockUI('#section-compute-elasticbeanstalk-applications-datatable');
        unblockUI('#section-compute-elasticbeanstalk-configurationtemplates-datatable');
    });

    await sdkcall("ElasticBeanstalk", "describeApplicationVersions", {
        // no params
    }, true).then((data) => {
        $('#section-compute-elasticbeanstalk-applicationversions-datatable').deferredBootstrapTable('removeAll');

        data.ApplicationVersions.forEach(applicationVersion => {
            $('#section-compute-elasticbeanstalk-applicationversions-datatable').deferredBootstrapTable('append', [{
                f2id: applicationVersion.ApplicationName + applicationVersion.VersionLabel,
                f2type: 'elasticbeanstalk.applicationversion',
                f2data: applicationVersion,
                f2region: region,
                name: applicationVersion.VersionLabel,
                applicationname: applicationVersion.ApplicationName,
                description: applicationVersion.Description,
                datecreated: applicationVersion.DateCreated
            }]);
        });

        unblockUI('#section-compute-elasticbeanstalk-applicationversions-datatable');
    });

    await sdkcall("ElasticBeanstalk", "describeEnvironments", {
        // no params
    }, true).then(async (data) => {
        $('#section-compute-elasticbeanstalk-environments-datatable').deferredBootstrapTable('removeAll');

        data.Environments.forEach(async (environment) => {
            environment['Tags'] = await getResourceTags(environment.EnvironmentArn);

            $('#section-compute-elasticbeanstalk-environments-datatable').deferredBootstrapTable('append', [{
                f2id: environment.EnvironmentId,
                f2type: 'elasticbeanstalk.environment',
                f2data: environment,
                f2region: region,
                name: environment.EnvironmentName,
                applicationname: environment.ApplicationName,
                platformarn: environment.PlatformArn,
                templatename: environment.TemplateName,
                description: environment.Description
            }]);
        });

        unblockUI('#section-compute-elasticbeanstalk-environments-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "elasticbeanstalk.application") {
        reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
        reqParams.tf['name'] = obj.data.ApplicationName;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;

        /*
        TODO:
        ResourceLifecycleConfig:
            ApplicationResourceLifecycleConfig
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elasticbeanstalk', obj.id, 'AWS::ElasticBeanstalk::Application'),
            'region': obj.region,
            'service': 'elasticbeanstalk',
            'type': 'AWS::ElasticBeanstalk::Application',
            'terraformType': 'aws_elastic_beanstalk_application',
            'options': reqParams
        });
    } else if (obj.type == "elasticbeanstalk.applicationversion") {
        reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
        reqParams.tf['name'] = obj.data.ApplicationName;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['SourceBundle'] = obj.data.SourceBundle;
        if (obj.data.SourceBundle) {
            reqParams.tf['bucket'] = obj.data.SourceBundle.S3Bucket;
            reqParams.tf['key'] = obj.data.SourceBundle.S3Key;
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elasticbeanstalk', obj.id, 'AWS::ElasticBeanstalk::ApplicationVersion'),
            'region': obj.region,
            'service': 'elasticbeanstalk',
            'type': 'AWS::ElasticBeanstalk::ApplicationVersion',
            'terraformType': 'aws_elastic_beanstalk_application_version',
            'options': reqParams
        });
    } else if (obj.type == "elasticbeanstalk.environment") {
        reqParams.cfn['EnvironmentName'] = obj.data.EnvironmentName;
        reqParams.tf['name'] = obj.data.EnvironmentName;
        reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
        reqParams.tf['application'] = obj.data.ApplicationName;
        reqParams.cfn['VersionLabel'] = obj.data.VersionLabel;
        reqParams.tf['version_label'] = obj.data.VersionLabel;
        reqParams.cfn['SolutionStackName'] = obj.data.SolutionStackName;
        reqParams.tf['solution_stack_name'] = obj.data.SolutionStackName;
        reqParams.cfn['PlatformArn'] = obj.data.PlatformArn;
        reqParams.tf['platform_arn'] = obj.data.PlatformArn;
        reqParams.cfn['TemplateName'] = obj.data.TemplateName;
        reqParams.tf['template_name'] = obj.data.TemplateName;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['Tier'] = obj.data.Tier;
        reqParams.tf['tier'] = obj.data.Tier;

        try {
            // obj.data.CNAME is in the following format: my-awsome-app.ap-northeast-1.elasticbeanstalk.com
            reqParams.cfn['CNAMEPrefix'] = obj.data.CNAME.split(".")[0];
            reqParams.tf['cname_prefix'] = obj.data.CNAME.split(".")[0];
        } catch (err) {
            f2log("Could not determine CNAME prefix for Elastic Beanstalk");
        }

        reqParams.cfn['Tags'] = obj.data.Tags;

        /*
        TODO:
        OptionSettings: 
            - OptionSetting
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elasticbeanstalk', obj.id, 'AWS::ElasticBeanstalk::Environment'),
            'region': obj.region,
            'service': 'elasticbeanstalk',
            'type': 'AWS::ElasticBeanstalk::Environment',
            'terraformType': 'aws_elastic_beanstalk_environment',
            'options': reqParams
        });
    } else if (obj.type == "elasticbeanstalk.configurationtemplate") {
        reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
        reqParams.tf['application'] = obj.data.ApplicationName;
        reqParams.cfn['SolutionStackName'] = obj.data.SolutionStackName;
        reqParams.tf['solution_stack_name'] = obj.data.SolutionStackName;
        reqParams.cfn['PlatformArn'] = obj.data.PlatformArn;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['EnvironmentId'] = obj.data.EnvironmentName;
        reqParams.tf['environment_id'] = obj.data.EnvironmentName;
        reqParams.cfn['OptionSettings'] = obj.data.OptionSettings;
        if (obj.data.OptionSettings) {
            reqParams.tf['setting'] = [];
            obj.data.OptionSettings.forEach(setting => {
                reqParams.tf['setting'].push({
                    'namespace': setting.Namespace,
                    'name': setting.OptionName,
                    'resource': setting.ResourceName,
                    'value': setting.Value
                });
            });
        }

        /*
        TODO:
        SourceConfiguration:
            SourceConfiguration
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elasticbeanstalk', obj.id, 'AWS::ElasticBeanstalk::ConfigurationTemplate'),
            'region': obj.region,
            'service': 'elasticbeanstalk',
            'type': 'AWS::ElasticBeanstalk::ConfigurationTemplate',
            'terraformType': 'aws_elastic_beanstalk_configuration_template',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
