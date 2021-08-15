/* ========================================================================== */
// Athena
/* ========================================================================== */

sections.push({
    'category': 'Analytics',
    'service': 'Athena',
    'resourcetypes': {
        'Named Queries': {
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
                        field: 'database',
                        title: 'Database',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'workgroup',
                        title: 'Workgroup',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Workgroups': {
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
        'Data Catalogs': {
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
        'Prepared Statements': {
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
                        field: 'workgroup',
                        title: 'Workgroup',
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

async function updateDatatableAnalyticsAthena() {
    blockUI('#section-analytics-athena-namedqueries-datatable');
    blockUI('#section-analytics-athena-workgroups-datatable');
    blockUI('#section-analytics-athena-datacatalogs-datatable');
    blockUI('#section-analytics-athena-preparedstatements-datatable');

    await sdkcall("Athena", "listNamedQueries", {
        // no params
    }, true).then(async (data) => {
        $('#section-analytics-athena-namedqueries-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.NamedQueryIds.map(namedQuery => {
            return sdkcall("Athena", "getNamedQuery", {
                NamedQueryId: namedQuery
            }, true).then((data) => {
                $('#section-analytics-athena-namedqueries-datatable').deferredBootstrapTable('append', [{
                    f2id: data.NamedQuery.NamedQueryId,
                    f2type: 'athena.namedquery',
                    f2data: data.NamedQuery,
                    f2region: region,
                    name: data.NamedQuery.Name,
                    description: data.NamedQuery.Description,
                    database: data.NamedQuery.Database,
                    id: data.NamedQuery.NamedQueryId,
                    workgroup: data.NamedQuery.WorkGroup
                }]);
            });
        }));

        unblockUI('#section-analytics-athena-namedqueries-datatable');
    }).catch(() => { });

    await sdkcall("Athena", "listWorkGroups", {
        // no params
    }, true).then(async (data) => {
        $('#section-analytics-athena-workgroups-datatable').deferredBootstrapTable('removeAll');
        $('#section-analytics-athena-preparedstatements-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.WorkGroups.map(async (workgroup) => {
            await sdkcall("Athena", "getWorkGroup", {
                WorkGroup: workgroup.Name
            }, true).then(async (data) => {
                if (
                    data.WorkGroup.Name != "primary"
                ) {
                    data.WorkGroup['Tags'] = await getResourceTags("arn:aws:athena:region:account:workgroup/" + data.WorkGroup.Name);

                    $('#section-analytics-athena-workgroups-datatable').deferredBootstrapTable('append', [{
                        f2id: data.WorkGroup.Name + " Workgroup",
                        f2type: 'athena.workgroup',
                        f2data: data.WorkGroup,
                        f2region: region,
                        name: data.WorkGroup.Name,
                        description: data.WorkGroup.Description
                    }]);
                }
            });

            return sdkcall("Athena", "listPreparedStatements", {
                WorkGroup: workgroup.Name
            }, true).then(async (data) => {
                await Promise.all(data.PreparedStatements.map(async (preparedstatement) => {
                    return sdkcall("Athena", "getPreparedStatement", {
                        WorkGroup: workgroup.Name,
                        StatementName: preparedstatement.StatementName
                    }, false).then(async (data) => {
                        $('#section-analytics-athena-preparedstatements-datatable').deferredBootstrapTable('append', [{
                            f2id: data.PreparedStatement.StatementName + " Prepared Statement",
                            f2type: 'athena.preparedstatement',
                            f2data: data.PreparedStatement,
                            f2region: region,
                            name: data.PreparedStatement.StatementName,
                            workgroup: data.PreparedStatement.WorkGroupName,
                            description: data.PreparedStatement.Description
                        }]);
                    }).catch(() => { });
                }));
            }).catch(() => { });
        }));

        unblockUI('#section-analytics-athena-workgroups-datatable');
        unblockUI('#section-analytics-athena-preparedstatements-datatable');
    }).catch(() => { });

    await sdkcall("Athena", "listDataCatalogs", {
        // no params
    }, true).then(async (data) => {
        $('#section-analytics-athena-datacatalogs-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DataCatalogsSummary.map(async (datacatalog) => {
            return sdkcall("Athena", "getDataCatalog", {
                Name: datacatalog.CatalogName
            }, false).then(async (data) => {
                data.DataCatalog['Tags'] = await getResourceTags("arn:aws:athena:region:account:datacatalog/" + data.DataCatalog.Name);

                $('#section-analytics-athena-datacatalogs-datatable').deferredBootstrapTable('append', [{
                    f2id: data.DataCatalog.Name + " Data Catalog",
                    f2type: 'athena.datacatalog',
                    f2data: data.DataCatalog,
                    f2region: region,
                    name: data.DataCatalog.Name,
                    description: data.DataCatalog.Description,
                    type: data.DataCatalog.Type
                }]);
            }).catch(() => { });
        }));

        unblockUI('#section-analytics-athena-datacatalogs-datatable');
    }).catch(() => { });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "athena.namedquery") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['Database'] = obj.data.Database;
        reqParams.tf['database'] = obj.data.Database;
        reqParams.cfn['QueryString'] = obj.data.QueryString;
        reqParams.tf['query'] = obj.data.QueryString;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('athena', obj.id, 'AWS::Athena::NamedQuery'),
            'region': obj.region,
            'service': 'athena',
            'type': 'AWS::Athena::NamedQuery',
            'terraformType': 'aws_athena_named_query',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'Import': {
                    'NamedQueryId': obj.data.NamedQueryId
                }
            }
        });
    } else if (obj.type == "athena.workgroup") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['State'] = obj.data.State;
        if (obj.data.Configuration) {
            reqParams.cfn['WorkGroupConfiguration'] = {
                'BytesScannedCutoffPerQuery': obj.data.Configuration.BytesScannedCutoffPerQuery,
                'EnforceWorkGroupConfiguration': obj.data.Configuration.EnforceWorkGroupConfiguration,
                'PublishCloudWatchMetricsEnabled': obj.data.Configuration.PublishCloudWatchMetricsEnabled,
                'RequesterPaysEnabled': obj.data.Configuration.RequesterPaysEnabled,
                'ResultConfiguration': obj.data.Configuration.ResultConfiguration
            };
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        /*
        TODO:
        RecursiveDeleteOption: Boolean
        WorkGroupConfigurationUpdates: 
            WorkGroupConfigurationUpdates
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('athena', obj.id, 'AWS::Athena::WorkGroup'),
            'region': obj.region,
            'service': 'athena',
            'type': 'AWS::Athena::WorkGroup',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'Import': {
                    'Name': obj.data.Name
                }
            }
        });
    } else if (obj.type == "athena.datacatalog") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.cfn['Parameters'] = obj.data.Parameters;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('athena', obj.id, 'AWS::Athena::DataCatalog'),
            'region': obj.region,
            'service': 'athena',
            'type': 'AWS::Athena::DataCatalog',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'Import': {
                    'Name': obj.data.Name
                }
            }
        });
    } else if (obj.type == "athena.preparedstatement") {
        reqParams.cfn['StatementName'] = obj.data.StatementName;
        reqParams.cfn['WorkGroup'] = obj.data.WorkGroupName;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['QueryStatement'] = obj.data.QueryStatement;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('athena', obj.id, 'AWS::Athena::PreparedStatement'),
            'region': obj.region,
            'service': 'athena',
            'type': 'AWS::Athena::PreparedStatement',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.StatementName
            }
        });
    } else {
        return false;
    }

    return true;
});
