/* ========================================================================== */
// App Runner
/* ========================================================================== */

sections.push({
    'category': 'Compute',
    'service': 'App Runner',
    'resourcetypes': {
        'Services': {
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
                        field: 'url',
                        title: 'URL',
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

async function updateDatatableComputeAppRunner() {
    blockUI('#section-compute-apprunner-services-datatable');

    await sdkcall("AppRunner", "listServices", {
        // no params
    }, true).then(async (data) => {
        $('#section-compute-apprunner-services-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ServiceSummaryList.map(async (service) => {
            return sdkcall("AppRunner", "describeService", {
                ServiceArn: service.ServiceArn
            }, true).then(async (data) => {
                $('#section-compute-apprunner-services-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Service.ServiceArn,
                    f2type: 'apprunner.service',
                    f2data: data.Service,
                    f2region: region,
                    name: data.Service.ServiceName,
                    id: data.Service.ServiceId,
                    url: data.Service.ServiceUrl
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-compute-apprunner-services-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "apprunner.service") {
        reqParams.cfn['ServiceName'] = obj.data.ServiceName;
        reqParams.cfn['AutoScalingConfigurationArn'] = obj.data.AutoScalingConfigurationSummary.AutoScalingConfigurationArn;
        if (obj.data.SourceConfiguration) {
            var coderepository = null;
            if (obj.data.SourceConfiguration.CodeRepository) {
                var codeconfiguration = null;
                if (obj.data.SourceConfiguration.CodeRepository.CodeConfiguration) {
                    var codeconfigurationvalues = null;
                    if (obj.data.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues) {
                        var runtimeenvironmentvariables = null;
                        if (obj.data.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables) {
                            runtimeenvironmentvariables = [];
                            Object.keys(obj.data.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables).forEach(runtimeenvironmentvariablename => {
                                runtimeenvironmentvariables.push({
                                    'Name': runtimeenvironmentvariablename,
                                    'Value': obj.data.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables[runtimeenvironmentvariablename]
                                })
                            });
                        }
                        codeconfigurationvalues = {
                            'Runtime': obj.data.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime,
                            'BuildCommand': obj.data.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand,
                            'StartCommand': obj.data.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand,
                            'Port': obj.data.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port,
                            'RuntimeEnvironmentVariables': runtimeenvironmentvariables
                        };
                    }
                    codeconfiguration = {
                        'ConfigurationSource': obj.data.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource,
                        'CodeConfigurationValues': codeconfigurationvalues
                    };
                }
                coderepository = {
                    'RepositoryUrl': obj.data.SourceConfiguration.CodeRepository.RepositoryUrl,
                    'SourceCodeVersion': obj.data.SourceConfiguration.CodeRepository.SourceCodeVersion,
                    'CodeConfiguration': codeconfiguration
                };
            }
            var imagerepository = null;
            if (obj.data.SourceConfiguration.ImageRepository) {
                var imageconfiguration = null;
                if (obj.data.SourceConfiguration.ImageRepository.ImageConfiguration) {
                    var runtimeenvironmentvariables = null;
                    if (obj.data.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables) {
                        runtimeenvironmentvariables = [];
                        Object.keys(obj.data.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables).forEach(runtimeenvironmentvariablename => {
                            runtimeenvironmentvariables.push({
                                'Name': runtimeenvironmentvariablename,
                                'Value': obj.data.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables[runtimeenvironmentvariablename]
                            })
                        });
                    }
                    imageconfiguration = {
                        'Port': obj.data.SourceConfiguration.ImageRepository.ImageConfiguration.Port,
                        'StartCommand': obj.data.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand,
                        'RuntimeEnvironmentVariables': runtimeenvironmentvariables
                    };
                }
                imagerepository = {
                    'ImageIdentifier': obj.data.SourceConfiguration.ImageRepository.ImageIdentifier,
                    'ImageConfiguration': imageconfiguration,
                    'ImageRepositoryType': obj.data.SourceConfiguration.ImageRepository.ImageRepositoryType
                }
            }
            reqParams.cfn['SourceConfiguration'] = {
                'CodeRepository': coderepository,
                'ImageRepository': imagerepository,
                'AutoDeploymentsEnabled': obj.data.SourceConfiguration.AutoDeploymentsEnabled,
                'AuthenticationConfiguration': obj.data.SourceConfiguration.AuthenticationConfiguration
            };
        }
        reqParams.cfn['InstanceConfiguration'] = obj.data.InstanceConfiguration;
        reqParams.cfn['EncryptionConfiguration'] = obj.data.EncryptionConfiguration;
        reqParams.cfn['HealthCheckConfiguration'] = obj.data.HealthCheckConfiguration;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('apprunner', obj.id, 'AWS::AppRunner::Service'),
            'region': obj.region,
            'service': 'apprunner',
            'type': 'AWS::AppRunner::Service',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ServiceName,
                'GetAtt': {
                    'ServiceUrl': obj.data.ServiceUrl,
                    'ServiceId': obj.data.ServiceId,
                    'ServiceArn': obj.data.ServiceArn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
