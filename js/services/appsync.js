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
        $('#section-mobile-appsync-graphqlapis-datatable').bootstrapTable('removeAll');
        $('#section-mobile-appsync-graphqlschemas-datatable').bootstrapTable('removeAll');
        $('#section-mobile-appsync-resolvers-datatable').bootstrapTable('removeAll');
        $('#section-mobile-appsync-apikeys-datatable').bootstrapTable('removeAll');
        $('#section-mobile-appsync-datasources-datatable').bootstrapTable('removeAll');
        $('#section-mobile-appsync-functionconfigurations-datatable').bootstrapTable('removeAll');

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
                                $('#section-mobile-appsync-resolvers-datatable').bootstrapTable('append', [{
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
                            data['apiId'] = graphqlApi.apiId;
                            $('#section-mobile-appsync-datasources-datatable').bootstrapTable('append', [{
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
                            data['apiId'] = graphqlApi.apiId;
                            $('#section-mobile-appsync-functionconfigurations-datatable').bootstrapTable('append', [{
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
                        $('#section-mobile-appsync-apikeys-datatable').bootstrapTable('append', [{
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

                    $('#section-mobile-appsync-graphqlschemas-datatable').bootstrapTable('append', [{
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

                    $('#section-mobile-appsync-apicaches-datatable').bootstrapTable('append', [{
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
                }, true).then((data) => {
                    $('#section-mobile-appsync-graphqlapis-datatable').bootstrapTable('append', [{
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
