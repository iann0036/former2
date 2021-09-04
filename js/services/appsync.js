/* ========================================================================== */
// AppSync
/* ========================================================================== */

sections.push({
    'category': 'Mobile',
    'service': 'AppSync',
    'resourcetypes': {
        'GraphQL APIs': {
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
                        field: 'authenticationtype',
                        title: 'Authentication Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'GraphQL Schemas': {
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
                        title: 'API ID',
                        field: 'apiid',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                [
                    // nothing
                ]
            ]
        },
        'Resolvers': {
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
                        field: 'kind',
                        title: 'Kind',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'typename',
                        title: 'Type Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'fieldname',
                        title: 'Field Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'datasourcename',
                        title: 'Data Source Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Data Sources': {
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
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Function Configurations': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'datasourcename',
                        title: 'Data Source Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'functionversion',
                        title: 'Function Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'API Keys': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'expiry',
                        title: 'Expiry',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'API Caches': {
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
                        title: 'API ID',
                        field: 'apiid',
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
                        field: 'ttl',
                        title: 'TTL',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'cachingbehaviour',
                        title: 'Caching Behaviour',
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

async function updateDatatableMobileAppSync() {
    blockUI('#section-mobile-appsync-graphqlapis-datatable');
    blockUI('#section-mobile-appsync-graphqlschemas-datatable'); // TODO
    blockUI('#section-mobile-appsync-resolvers-datatable');
    blockUI('#section-mobile-appsync-datasources-datatable');
    blockUI('#section-mobile-appsync-functionconfigurations-datatable');
    blockUI('#section-mobile-appsync-apikeys-datatable');
    blockUI('#section-mobile-appsync-apicaches-datatable');

    await sdkcall("AppSync", "listGraphqlApis", {
        // no params
    }, true).then(async (data) => {
        $('#section-mobile-appsync-graphqlapis-datatable').deferredBootstrapTable('removeAll');
        $('#section-mobile-appsync-graphqlschemas-datatable').deferredBootstrapTable('removeAll');
        $('#section-mobile-appsync-resolvers-datatable').deferredBootstrapTable('removeAll');
        $('#section-mobile-appsync-apikeys-datatable').deferredBootstrapTable('removeAll');
        $('#section-mobile-appsync-datasources-datatable').deferredBootstrapTable('removeAll');
        $('#section-mobile-appsync-functionconfigurations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.graphqlApis.map(graphqlApi => {
            return Promise.all([
                sdkcall("AppSync", "listTypes", {
                    apiId: graphqlApi.apiId,
                    format: 'JSON'
                }, true).then(async (data) => {
                    await Promise.all(data.types.map(type => {
                        return sdkcall("AppSync", "listResolvers", {
                            apiId: graphqlApi.apiId,
                            typeName: type.name
                        }, true).then((data) => {
                            data.resolvers.forEach(resolver => {
                                resolver['apiId'] = graphqlApi.apiId;
                                $('#section-mobile-appsync-resolvers-datatable').deferredBootstrapTable('append', [{
                                    f2id: resolver.resolverArn,
                                    f2type: 'appsync.resolver',
                                    f2data: resolver,
                                    f2region: region,
                                    arn: resolver.resolverArn,
                                    typename: resolver.typeName,
                                    fieldname: resolver.fieldName,
                                    datasourcename: resolver.dataSourceName,
                                    kind: resolver.kind
                                }]);
                            });
                        });
                    }));
                }),
                sdkcall("AppSync", "listDataSources", {
                    apiId: graphqlApi.apiId
                }, true).then(async (data) => {
                    await Promise.all(data.dataSources.map(dataSource => {
                        return sdkcall("AppSync", "getDataSource", {
                            apiId: graphqlApi.apiId,
                            name: dataSource.name
                        }, true).then((data) => {
                            data.dataSource['apiId'] = graphqlApi.apiId;
                            $('#section-mobile-appsync-datasources-datatable').deferredBootstrapTable('append', [{
                                f2id: data.dataSource.dataSourceArn,
                                f2type: 'appsync.datasource',
                                f2data: data.dataSource,
                                f2region: region,
                                name: data.dataSource.name,
                                description: data.dataSource.description,
                                type: data.dataSource.type
                            }]);
                        });
                    }));
                }),
                sdkcall("AppSync", "listFunctions", {
                    apiId: graphqlApi.apiId
                }, true).then(async (data) => {
                    await Promise.all(data.functions.map(appSyncFunction => {
                        return sdkcall("AppSync", "getFunction", {
                            apiId: graphqlApi.apiId,
                            functionId: appSyncFunction.functionId
                        }, true).then((data) => {
                            data.functionConfiguration['apiId'] = graphqlApi.apiId;
                            $('#section-mobile-appsync-functionconfigurations-datatable').deferredBootstrapTable('append', [{
                                f2id: data.functionConfiguration.functionArn,
                                f2type: 'appsync.functionconfiguration',
                                f2data: data.functionConfiguration,
                                f2region: region,
                                name: data.functionConfiguration.name,
                                id: data.functionConfiguration.functionId,
                                description: data.functionConfiguration.description,
                                datasourcename: data.functionConfiguration.dataSourceName,
                                functionversion: data.functionConfiguration.functionVersion
                            }]);
                        });
                    }));
                }),
                sdkcall("AppSync", "listApiKeys", {
                    apiId: graphqlApi.apiId
                }, true).then((data) => {
                    data.apiKeys.forEach(apiKey => {
                        apiKey['apiId'] = graphqlApi.apiId;
                        $('#section-mobile-appsync-apikeys-datatable').deferredBootstrapTable('append', [{
                            f2id: apiKey.id,
                            f2type: 'appsync.apikey',
                            f2data: apiKey,
                            f2region: region,
                            id: apiKey.id,
                            description: apiKey.description,
                            expiry: new Date(apiKey.expires * 1000).toString()
                        }]);
                    });
                }),
                sdkcall("AppSync", "getIntrospectionSchema", {
                    apiId: graphqlApi.apiId,
                    format: 'SDL'
                }, false).then((data) => {
                    data['apiId'] = graphqlApi.apiId;

                    $('#section-mobile-appsync-graphqlschemas-datatable').deferredBootstrapTable('append', [{
                        f2id: data.apiId + " Schema",
                        f2type: 'appsync.graphqlschema',
                        f2data: data,
                        f2region: region,
                        apiid: data.apiId
                    }]);
                }).catch(() => { }),
                sdkcall("AppSync", "getApiCache", {
                    apiId: graphqlApi.apiId
                }, false).then((data) => {
                    data.apiCache['apiId'] = graphqlApi.apiId;

                    $('#section-mobile-appsync-apicaches-datatable').deferredBootstrapTable('append', [{
                        f2id: data.apiCache.apiId + " Cache",
                        f2type: 'appsync.apicache',
                        f2data: data.apiCache,
                        f2region: region,
                        apiid: graphqlApi.apiId,
                        ttl: data.apiCache.ttl,
                        cachingbehaviour: data.apiCache.apiCachingBehavior
                    }]);
                }).catch(() => { }),
                sdkcall("AppSync", "getGraphqlApi", {
                    apiId: graphqlApi.apiId
                }, true).then(async (data) => {
                    data.graphqlApi['Tags'] = await getResourceTags(data.graphqlApi.arn);

                    $('#section-mobile-appsync-graphqlapis-datatable').deferredBootstrapTable('append', [{
                        f2id: data.graphqlApi.apiId,
                        f2type: 'appsync.graphqlapi',
                        f2data: data.graphqlApi,
                        f2region: region,
                        name: data.graphqlApi.name,
                        id: data.graphqlApi.apiId,
                        authenticationtype: data.graphqlApi.authenticationType
                    }]);
                })
            ]);
        }));

        unblockUI('#section-mobile-appsync-graphqlapis-datatable');
        unblockUI('#section-mobile-appsync-graphqlschemas-datatable');
        unblockUI('#section-mobile-appsync-resolvers-datatable');
        unblockUI('#section-mobile-appsync-apikeys-datatable');
        unblockUI('#section-mobile-appsync-datasources-datatable');
        unblockUI('#section-mobile-appsync-functionconfigurations-datatable');
        unblockUI('#section-mobile-appsync-apicaches-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "appsync.resolver") {
        reqParams.cfn['TypeName'] = obj.data.typeName;
        reqParams.tf['type'] = obj.data.typeName;
        reqParams.cfn['FieldName'] = obj.data.fieldName;
        reqParams.tf['field'] = obj.data.fieldName;
        reqParams.cfn['DataSourceName'] = obj.data.dataSourceName;
        reqParams.tf['data_source'] = obj.data.dataSourceName;
        reqParams.cfn['RequestMappingTemplate'] = obj.data.requestMappingTemplate;
        reqParams.tf['request_template'] = obj.data.requestMappingTemplate;
        reqParams.cfn['ResponseMappingTemplate'] = obj.data.responseMappingTemplate;
        reqParams.tf['response_template'] = obj.data.responseMappingTemplate;
        reqParams.cfn['Kind'] = obj.data.kind;
        if (obj.data.pipelineConfig) {
            reqParams.cfn['PipelineConfig'] = {
                'Functions': obj.data.pipelineConfig.functions
            };
        }
        reqParams.cfn['ApiId'] = obj.data.apiId;
        reqParams.tf['api_id'] = obj.data.apiId;
        if (obj.data.cachingConfig) {
            reqParams.cfn['CachingConfig'] = {
                'Ttl': obj.data.cachingConfig.ttl,
                'CachingKeys': obj.data.cachingConfig.cachingKeys
            };
        }
        if (obj.data.syncConfig) {
            var lambdaconflicthandlerconfig = null;
            if (obj.data.syncConfig.lambdaConflictHandlerConfig) {
                lambdaconflicthandlerconfig = {
                    'LambdaConflictHandlerArn': obj.data.syncConfig.lambdaConflictHandlerConfig.lambdaConflictHandlerArn
                };
            }
            reqParams.cfn['SyncConfig'] = {
                'ConflictDetection': obj.data.syncConfig.conflictDetection,
                'ConflictHandler': obj.data.syncConfig.conflictHandler,
                'LambdaConflictHandlerConfig': lambdaconflicthandlerconfig
            };
        }

        /*
        TODO:
        ResponseMappingTemplateS3Location: String
        RequestMappingTemplateS3Location: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appsync', obj.id, 'AWS::AppSync::Resolver'),
            'region': obj.region,
            'service': 'appsync',
            'type': 'AWS::AppSync::Resolver',
            'terraformType': 'aws_appsync_resolver',
            'options': reqParams
        });
    } else if (obj.type == "appsync.graphqlschema") {
        var definition = String.fromCharCode.apply(null, obj.data.schema.data);
        reqParams.cfn['Definition'] = definition;
        reqParams.tf['definition'] = definition;
        reqParams.cfn['ApiId'] = obj.data.apiId;
        reqParams.tf['api_id'] = obj.data.apiId;

        /*
        SKIPPED
        DefinitionS3Location
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appsync', obj.id, 'AWS::AppSync::GraphQLSchema'),
            'region': obj.region,
            'service': 'appsync',
            'type': 'AWS::AppSync::GraphQLSchema',
            'options': reqParams
        });
    } else if (obj.type == "appsync.datasource") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.tf['name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.tf['description'] = obj.data.description;
        reqParams.cfn['Type'] = obj.data.type;
        reqParams.tf['type'] = obj.data.type;
        reqParams.cfn['ServiceRoleArn'] = obj.data.serviceRoleArn;
        reqParams.tf['service_role_arn'] = obj.data.serviceRoleArn;
        if (obj.data.dynamodbConfig) {
            var deltasyncconfig = null;
            if (obj.data.dynamodbConfig.deltaSyncConfig) {
                deltasyncconfig = {
                    'BaseTableTTL': obj.data.dynamodbConfig.deltaSyncConfig.baseTableTTL,
                    'DeltaSyncTableName': obj.data.dynamodbConfig.deltaSyncConfig.deltaSyncTableName,
                    'DeltaSyncTableTTL': obj.data.dynamodbConfig.deltaSyncConfig.deltaSyncTableTTL
                };
            }
            reqParams.cfn['DynamoDBConfig'] = {
                'TableName': obj.data.dynamodbConfig.tableName,
                'AwsRegion': obj.data.dynamodbConfig.awsRegion,
                'UseCallerCredentials': obj.data.dynamodbConfig.useCallerCredentials,
                'Versioned': obj.data.dynamodbConfig.versioned,
                'DeltaSyncConfig': deltasyncconfig
            };
            reqParams.tf['dynamodb_config'] = {
                'table_name': obj.data.dynamodbConfig.tableName,
                'region': obj.data.dynamodbConfig.awsRegion,
                'use_caller_credentials': obj.data.dynamodbConfig.useCallerCredentials
            };
        }
        if (obj.data.lambdaConfig) {
            reqParams.cfn['LambdaConfig'] = {
                'LambdaFunctionArn': obj.data.lambdaConfig.lambdaFunctionArn
            };
            reqParams.tf['lambda_config'] = {
                'function_arn': obj.data.lambdaConfig.lambdaFunctionArn
            };
        }
        if (obj.data.elasticsearchConfig) {
            reqParams.cfn['ElasticsearchConfig'] = {
                'Endpoint': obj.data.elasticsearchConfig.endpoint,
                'AwsRegion': obj.data.elasticsearchConfig.awsRegion
            };
            reqParams.tf['elasticsearch_config'] = {
                'endpoint': obj.data.elasticsearchConfig.endpoint,
                'region': obj.data.elasticsearchConfig.awsRegion
            };
        }
        if (obj.data.httpConfig) {
            var authorizationConfig = null;
            if (obj.data.httpConfig.authorizationConfig) {
                var awsIamConfig = null;
                if (obj.data.httpConfig.authorizationConfig.awsIamConfig) {
                    awsIamConfig = {
                        'SigningRegion': obj.data.httpConfig.authorizationConfig.awsIamConfig.signingRegion,
                        'SigningServiceName': obj.data.httpConfig.authorizationConfig.awsIamConfig.signingServiceName
                    };
                }
                authorizationConfig = {
                    'AuthorizationType': obj.data.httpConfig.authorizationType,
                    'AwsIamConfig': awsIamConfig
                };
            }
            reqParams.cfn['HttpConfig'] = {
                'AuthorizationConfig': authorizationConfig,
                'Endpoint': obj.data.httpConfig.endpoint
            };
            reqParams.tf['http_config'] = {
                'endpoint': obj.data.httpConfig.endpoint
            };
        }
        if (obj.data.relationalDatabaseConfig) {
            var rdsHttpEndpointConfig = null;
            if (obj.data.relationalDatabaseConfig.rdsHttpEndpointConfig) {
                rdsHttpEndpointConfig = {
                    'AwsRegion': obj.data.relationalDatabaseConfig.rdsHttpEndpointConfig.awsRegion,
                    'DbClusterIdentifier': obj.data.relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier,
                    'DatabaseName': obj.data.relationalDatabaseConfig.rdsHttpEndpointConfig.databaseName,
                    'Schema': obj.data.relationalDatabaseConfig.rdsHttpEndpointConfig.schema,
                    'AwsSecretStoreArn': obj.data.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn
                };
            }
            reqParams.cfn['RelationalDatabaseConfig'] = {
                'RelationalDatabaseSourceType': obj.data.relationalDatabaseConfig.relationalDatabaseSourceType,
                'RdsHttpEndpointConfig': rdsHttpEndpointConfig
            };
        }
        reqParams.cfn['ApiId'] = obj.data.apiId;
        reqParams.tf['api_id'] = obj.data.apiId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appsync', obj.id, 'AWS::AppSync::DataSource'),
            'region': obj.region,
            'service': 'appsync',
            'type': 'AWS::AppSync::DataSource',
            'terraformType': 'aws_appsync_datasource',
            'options': reqParams
        });
    } else if (obj.type == "appsync.functionconfiguration") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['DataSourceName'] = obj.data.dataSourceName;
        reqParams.cfn['RequestMappingTemplate'] = obj.data.requestMappingTemplate;
        reqParams.cfn['ResponseMappingTemplate'] = obj.data.responseMappingTemplate;
        reqParams.cfn['FunctionVersion'] = obj.data.functionVersion;
        reqParams.cfn['ApiId'] = obj.data.apiId;

        /*
        TODO:
        RequestMappingTemplateS3Location: String
        ResponseMappingTemplateS3Location: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appsync', obj.id, 'AWS::AppSync::FunctionConfiguration'),
            'region': obj.region,
            'service': 'appsync',
            'type': 'AWS::AppSync::FunctionConfiguration',
            'options': reqParams
        });
    } else if (obj.type == "appsync.apikey") {
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.tf['description'] = obj.data.description;
        reqParams.cfn['Expires'] = obj.data.expires;
        reqParams.tf['expires'] = obj.data.expires;
        reqParams.cfn['ApiId'] = obj.data.apiId;
        reqParams.tf['api_id'] = obj.data.apiId;
        reqParams.cfn['ApiKeyId'] = obj.data.id;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appsync', obj.id, 'AWS::AppSync::ApiKey'),
            'region': obj.region,
            'service': 'appsync',
            'type': 'AWS::AppSync::ApiKey',
            'terraformType': 'aws_appsync_api_key',
            'options': reqParams
        });
    } else if (obj.type == "appsync.graphqlapi") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.tf['name'] = obj.data.name;
        reqParams.cfn['AuthenticationType'] = obj.data.authenticationType;
        reqParams.tf['authentication_type'] = obj.data.authenticationType;
        if (obj.data.logConfig) {
            reqParams.cfn['LogConfig'] = {
                'FieldLogLevel': obj.data.logConfig.fieldLogLevel,
                'CloudWatchLogsRoleArn': obj.data.logConfig.cloudWatchLogsRoleArn,
                'ExcludeVerboseContent': obj.data.logConfig.excludeVerboseContent
            };
            reqParams.tf['log_config'] = {
                'field_log_level': obj.data.logConfig.fieldLogLevel,
                'cloudwatch_logs_role_arn': obj.data.logConfig.cloudWatchLogsRoleArn
            };
        }
        if (obj.data.userPoolConfig) {
            reqParams.cfn['UserPoolConfig'] = {
                'AppIdClientRegex': obj.data.userPoolConfig.appIdClientRegex,
                'UserPoolId': obj.data.userPoolConfig.userPoolId,
                'AwsRegion': obj.data.userPoolConfig.awsRegion,
                'DefaultAction': obj.data.userPoolConfig.defaultAction
            };
            reqParams.tf['user_pool_config'] = {
                'app_id_client_regex': obj.data.userPoolConfig.appIdClientRegex,
                'user_pool_id': obj.data.userPoolConfig.userPoolId,
                'aws_region': obj.data.userPoolConfig.awsRegion,
                'default_action': obj.data.userPoolConfig.defaultAction
            };
        }
        if (obj.data.openIDConnectConfig) {
            reqParams.cfn['OpenIDConnectConfig'] = {
                'Issuer': obj.data.openIDConnectConfig.issuer,
                'ClientId': obj.data.openIDConnectConfig.clientId,
                'IatTTL': obj.data.openIDConnectConfig.iatTTL,
                'AuthTTL': obj.data.openIDConnectConfig.authTTL
            };
            reqParams.tf['openid_connect_config'] = {
                'issuer': obj.data.openIDConnectConfig.issuer,
                'client_id': obj.data.openIDConnectConfig.clientId,
                'iat_ttl': obj.data.openIDConnectConfig.iatTTL,
                'auth_ttl': obj.data.openIDConnectConfig.authTTL
            };
        }
        reqParams.cfn['XrayEnabled'] = obj.data.xrayEnabled;
        if (obj.data.lambdaAuthorizerConfig) {
            reqParams.cfn['LambdaAuthorizerConfig'] = {
                'AuthorizerResultTtlInSeconds': obj.data.lambdaAuthorizerConfig.authorizerResultTtlInSeconds,
                'AuthorizerUri': obj.data.lambdaAuthorizerConfig.authorizerUri,
                'IdentityValidationExpression': obj.data.lambdaAuthorizerConfig.identityValidationExpression
            };
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appsync', obj.id, 'AWS::AppSync::GraphQLApi'),
            'region': obj.region,
            'service': 'appsync',
            'type': 'AWS::AppSync::GraphQLApi',
            'terraformType': 'aws_appsync_graphql_api',
            'options': reqParams
        });
    } else if (obj.type == "appsync.apicache") {
        reqParams.cfn['ApiId'] = obj.data.apiId;
        reqParams.cfn['Ttl'] = obj.data.ttl;
        reqParams.cfn['ApiCachingBehavior'] = obj.data.apiCachingBehavior;
        reqParams.cfn['TransitEncryptionEnabled'] = obj.data.transitEncryptionEnabled;
        reqParams.cfn['AtRestEncryptionEnabled'] = obj.data.atRestEncryptionEnabled;
        reqParams.cfn['Type'] = obj.data.type;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appsync', obj.id, 'AWS::AppSync::ApiCache'),
            'region': obj.region,
            'service': 'appsync',
            'type': 'AWS::AppSync::ApiCache',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
