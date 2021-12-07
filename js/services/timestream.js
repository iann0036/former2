/* ========================================================================== */
// Timestream
/* ========================================================================== */

sections.push({
    'category': 'Database',
    'service': 'Timestream',
    'resourcetypes': {
        'Databases': {
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
                        field: 'tablecount',
                        title: 'Table Count',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Tables': {
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
                        field: 'databasename',
                        title: 'Database Name',
                        sortable: true,
                        editable: true,
                        formatter: timeAgoFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Scheduled Queries': {
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
                        field: 'querystring',
                        title: 'Query String',
                        sortable: true,
                        editable: true,
                        formatter: timeAgoFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableDatabaseTimestream() {
    blockUI('#section-database-timestream-databases-datatable');
    blockUI('#section-database-timestream-tables-datatable');
    blockUI('#section-database-timestream-scheduledqueries-datatable');

    await sdkcall("TimestreamWrite", "listDatabases", {
        // no params
    }, false).then(async (data) => {
        $('#section-database-timestream-databases-datatable').deferredBootstrapTable('removeAll');
        $('#section-database-timestream-tables-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Databases.map(async (database) => {
            await sdkcall("TimestreamWrite", "describeDatabase", {
                DatabaseName: database.DatabaseName
            }, false).then(async (data) => {
                $('#section-database-timestream-databases-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Database.Arn,
                    f2type: 'timestream.database',
                    f2data: data.Database,
                    f2region: region,
                    name: data.Database.DatabaseName,
                    tablecount: data.Database.TableCount
                }]);
            });

            return sdkcall("TimestreamWrite", "listTables", {
                DatabaseName: database.DatabaseName
            }, false).then(async (data) => {
                $('#section-database-timestream-tables-datatable').deferredBootstrapTable('removeAll');
        
                await Promise.all(data.Tables.map(async (table) => {
                    return sdkcall("TimestreamWrite", "describeTable", {
                        TableName: table.TableName,
                        DatabaseName: table.DatabaseName
                    }, false).then(async (data) => {
                        $('#section-database-timestream-tables-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Table.Arn,
                            f2type: 'timestream.table',
                            f2data: data.Table,
                            f2region: region,
                            name: data.Table.TableName,
                            databasename: data.Table.DatabaseName
                        }]);
                    });
                }));
        
            }).catch(() => { });
        }));
    }).catch(() => { });

    await sdkcall("TimestreamQuery", "listScheduledQueries", {
        // no params
    }, false).then(async (data) => {
        $('#section-database-timestream-scheduledqueries-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ScheduledQueries.map(async (scheduledquery) => {
            return sdkcall("TimestreamQuery", "describeScheduledQuery", {
                ScheduledQueryArn: scheduledquery.Arn
            }, false).then(async (data) => {
                $('#section-database-timestream-scheduledqueries-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ScheduledQuery.Arn,
                    f2type: 'timestream.scheduledquery',
                    f2data: data.ScheduledQuery,
                    f2region: region,
                    name: data.ScheduledQuery.DatabaseName,
                    querystring: data.ScheduledQuery.QueryString
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-database-timestream-databases-datatable');
    unblockUI('#section-database-timestream-tables-datatable');
    unblockUI('#section-database-timestream-scheduledqueries-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "timestream.database") {
        reqParams.cfn['DatabaseName'] = obj.data.DatabaseName;
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('timestream', obj.id, 'AWS::Timestream::Database'),
            'region': obj.region,
            'service': 'timestream',
            'type': 'AWS::Timestream::Database',
            'options': reqParams
        });
    } else if (obj.type == "timestream.table") {
        reqParams.cfn['DatabaseName'] = obj.data.DatabaseName;
        reqParams.cfn['TableName'] = obj.data.TableName;
        reqParams.cfn['RetentionProperties'] = obj.data.RetentionProperties;

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('timestream', obj.id, 'AWS::Timestream::Table'),
            'region': obj.region,
            'service': 'timestream',
            'type': 'AWS::Timestream::Table',
            'options': reqParams
        });
    } else if (obj.type == "timestream.scheduledquery") {
        reqParams.cfn['ScheduledQueryName'] = obj.data.Name;
        reqParams.cfn['QueryString'] = obj.data.QueryString;
        reqParams.cfn['ScheduleConfiguration'] = obj.data.ScheduleConfiguration;
        reqParams.cfn['NotificationConfiguration'] = obj.data.NotificationConfiguration;
        reqParams.cfn['TargetConfiguration'] = obj.data.TargetConfiguration;
        reqParams.cfn['ScheduledQueryExecutionRoleArn'] = obj.data.ScheduledQueryExecutionRoleArn;
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        reqParams.cfn['ErrorReportConfiguration'] = obj.data.ErrorReportConfiguration;

        /*
        TODO:
        ClientToken: String wtf?
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('timestream', obj.id, 'AWS::Timestream::ScheduledQuery'),
            'region': obj.region,
            'service': 'timestream',
            'type': 'AWS::Timestream::ScheduledQuery',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Arn
            }
        });
    } else {
        return false;
    }

    return true;
});
