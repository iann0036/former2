/* ========================================================================== */
// Migration Hub
/* ========================================================================== */

sections.push({
    'category': 'Migration &amp; Transfer',
    'service': 'Migration Hub',
    'resourcetypes': {
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
                    }
                ]
            ]
        },
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
                        field: 'environment',
                        title: 'Environment',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'environment',
                        title: 'Environment',
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
                    }
                ]
            ]
        },
        'Routes': {
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
                        field: 'environment',
                        title: 'Environment',
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
                    }
                ]
            ]
        }
    }
});

async function updateDatatableMigrationAndTransferMigrationHub() {
    blockUI('#section-migrationandtransfer-migrationhub-environments-datatable');
    blockUI('#section-migrationandtransfer-migrationhub-applications-datatable');
    blockUI('#section-migrationandtransfer-migrationhub-services-datatable');
    blockUI('#section-migrationandtransfer-migrationhub-routes-datatable');

    await sdkcall("MigrationHubRefactorSpaces", "listEnvironments", {
        // no params
    }, true).then(async (data) => {
        $('#section-migrationandtransfer-migrationhub-environments-datatable').deferredBootstrapTable('removeAll');
        $('#section-migrationandtransfer-migrationhub-applications-datatable').deferredBootstrapTable('removeAll');
        $('#section-migrationandtransfer-migrationhub-services-datatable').deferredBootstrapTable('removeAll');
        $('#section-migrationandtransfer-migrationhub-routes-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.EnvironmentSummaryList.map(async (environment) => {
            await sdkcall("MigrationHubRefactorSpaces", "getEnvironment", {
                EnvironmentIdentifier: environment.EnvironmentId
            }, true).then(async (data) => {
                $('#section-migrationandtransfer-migrationhub-environments-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'migrationhub.environment',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    description: data.Description
                }]);
            });

            return sdkcall("MigrationHubRefactorSpaces", "listApplications", {
                EnvironmentIdentifier: environment.EnvironmentId
            }, true).then(async (data) => {
                await Promise.all(data.ApplicationSummaryList.map(async (application) => {
                    await sdkcall("MigrationHubRefactorSpaces", "getApplication", {
                        EnvironmentIdentifier: environment.EnvironmentId,
                        ApplicationIdentifier: application.ApplicationId
                    }, true).then(async (data) => {
                        $('#section-migrationandtransfer-migrationhub-applications-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Arn,
                            f2type: 'migrationhub.application',
                            f2data: data,
                            f2region: region,
                            name: data.Name,
                            environment: data.EnvironmentId
                        }]);
                    });

                    await sdkcall("MigrationHubRefactorSpaces", "listRoutes", {
                        EnvironmentIdentifier: environment.EnvironmentId,
                        ApplicationIdentifier: application.ApplicationId
                    }, true).then(async (data) => {
                        await Promise.all(data.RouteSummaryList.map(async (route) => {
                            return sdkcall("MigrationHubRefactorSpaces", "getRoute", {
                                EnvironmentIdentifier: environment.EnvironmentId,
                                ApplicationIdentifier: application.ApplicationId,
                                RouteIdentifier: route.RouteId
                            }, true).then(async (data) => {
                                $('#section-migrationandtransfer-migrationhub-routes-datatable').deferredBootstrapTable('append', [{
                                    f2id: data.Arn,
                                    f2type: 'migrationhub.route',
                                    f2data: data,
                                    f2region: region,
                                    id: data.RouteId,
                                    environment: data.EnvironmentId,
                                    application: data.ApplicationId
                                }]);
                            });
                        }));
                    }).catch(() => { });

                    return sdkcall("MigrationHubRefactorSpaces", "listServices", {
                        EnvironmentIdentifier: environment.EnvironmentId,
                        ApplicationIdentifier: application.ApplicationId
                    }, true).then(async (data) => {
                        await Promise.all(data.ServiceSummaryList.map(async (service) => {
                            return sdkcall("MigrationHubRefactorSpaces", "getService", {
                                EnvironmentIdentifier: environment.EnvironmentId,
                                ApplicationIdentifier: application.ApplicationId,
                                ServiceIdentifier: service.ServiceId
                            }, true).then(async (data) => {
                                $('#section-migrationandtransfer-migrationhub-services-datatable').deferredBootstrapTable('append', [{
                                    f2id: data.Arn,
                                    f2type: 'migrationhub.service',
                                    f2data: data,
                                    f2region: region,
                                    name: data.Name,
                                    description: data.Description,
                                    environment: data.EnvironmentId,
                                    application: data.ApplicationId
                                }]);
                            });
                        }));
                    }).catch(() => { });
                }));
            }).catch(() => { });
        }));
    }).catch(() => { });

    unblockUI('#section-migrationandtransfer-migrationhub-environments-datatable');
    unblockUI('#section-migrationandtransfer-migrationhub-applications-datatable');
    unblockUI('#section-migrationandtransfer-migrationhub-services-datatable');
    unblockUI('#section-migrationandtransfer-migrationhub-routes-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "migrationhub.environment") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['NetworkFabricType'] = obj.data.NetworkFabricType;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.Tags).forEach(tagKey => {
                if (!tagKey.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': tagKey,
                        'Value': obj.data.Tags[tagKey]
                    });
                }
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('migrationhub', obj.id, 'AWS::RefactorSpaces::Environment'),
            'region': obj.region,
            'service': 'migrationhub',
            'type': 'AWS::RefactorSpaces::Environment',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.EnvironmentId,
                'GetAtt': {
                    'Arn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "migrationhub.application") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['EnvironmentIdentifier'] = obj.data.EnvironmentId;
        reqParams.cfn['ProxyType'] = obj.data.ProxyType;
        reqParams.cfn['VpcId'] = obj.data.VpcId;
        if (obj.data.ApiGatewayProxy) {
            reqParams.cfn['ApiGatewayProxy'] = {
                'EndpointType': obj.data.ApiGatewayProxy.EndpointType,
                'StageName': obj.data.ApiGatewayProxy.StageName
            };
        }
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.Tags).forEach(tagKey => {
                if (!tagKey.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': tagKey,
                        'Value': obj.data.Tags[tagKey]
                    });
                }
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('migrationhub', obj.id, 'AWS::RefactorSpaces::Application'),
            'region': obj.region,
            'service': 'migrationhub',
            'type': 'AWS::RefactorSpaces::Application',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'ApplicationIdentifier': obj.data.ApplicationId,
                    'Arn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "migrationhub.service") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['EnvironmentIdentifier'] = obj.data.EnvironmentId;
        reqParams.cfn['ApplicationIdentifier'] = obj.data.ApplicationId;
        reqParams.cfn['EndpointType'] = obj.data.EndpointType;
        reqParams.cfn['VpcId'] = obj.data.VpcId;
        reqParams.cfn['LambdaEndpoint'] = obj.data.LambdaEndpoint;
        reqParams.cfn['UrlEndpoint'] = obj.data.UrlEndpoint;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.Tags).forEach(tagKey => {
                if (!tagKey.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': tagKey,
                        'Value': obj.data.Tags[tagKey]
                    });
                }
            });
        }


        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('migrationhub', obj.id, 'AWS::RefactorSpaces::Service'),
            'region': obj.region,
            'service': 'migrationhub',
            'type': 'AWS::RefactorSpaces::Service',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'ServiceIdentifier': obj.data.ServiceId,
                    'Arn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "migrationhub.route") {
        reqParams.cfn['RouteType'] = obj.data.RouteType;
        reqParams.cfn['EnvironmentIdentifier'] = obj.data.EnvironmentId;
        reqParams.cfn['ApplicationIdentifier'] = obj.data.ApplicationId;
        reqParams.cfn['ServiceIdentifier'] = obj.data.ServiceId;
        reqParams.cfn['UriPathRoute'] = {
            'ActivationState': obj.data.State,
            'IncludeChildPaths': obj.data.IncludeChildPaths,
            'Methods': obj.data.Methods,
            'SourcePath': obj.data.SourcePath
        };
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.Tags).forEach(tagKey => {
                if (!tagKey.startsWith("aws:")) {
                    reqParams.cfn['Tags'].push({
                        'Key': tagKey,
                        'Value': obj.data.Tags[tagKey]
                    });
                }
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('migrationhub', obj.id, 'AWS::RefactorSpaces::Route'),
            'region': obj.region,
            'service': 'migrationhub',
            'type': 'AWS::RefactorSpaces::Route',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
