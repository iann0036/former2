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
        }
    }
});

async function updateDatatableAnalyticsAthena() {
    blockUI('#section-analytics-athena-namedqueries-datatable');

    await sdkcall("Athena", "listNamedQueries", {
        // no params
    }, true).then(async (data) => {
        $('#section-analytics-athena-namedqueries-datatable').bootstrapTable('removeAll');

        await Promise.all(data.NamedQueryIds.map(namedQuery => {
            return sdkcall("Athena", "getNamedQuery", {
                NamedQueryId: namedQuery
            }, true).then((data) => {
                $('#section-analytics-athena-namedqueries-datatable').bootstrapTable('append', [{
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
    });
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
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
