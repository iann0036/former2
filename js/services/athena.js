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
        }
    }
});

async function updateDatatableAnalyticsAthena() {
    blockUI('#section-analytics-athena-namedqueries-datatable');
    blockUI('#section-analytics-athena-workgroups-datatable');

    await sdkcall("Athena", "listNamedQueries", {
        // no params
    }, true).then(async (data) => {
        $('#section-analytics-athena-namedqueries-datatable').bootstrapTable('removeAll');

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
        $('#section-analytics-athena-workgroups-datatable').bootstrapTable('removeAll');

        await Promise.all(data.WorkGroups.map(workgroup => {
            return sdkcall("Athena", "getWorkGroup", {
                WorkGroup: workgroup.Name
            }, true).then((data) => {
                $('#section-analytics-athena-workgroups-datatable').deferredBootstrapTable('append', [{
                    f2id: data.WorkGroup.Name + " Workgroup",
                    f2type: 'athena.workgroup',
                    f2data: data.WorkGroup,
                    f2region: region,
                    name: data.WorkGroup.Name,
                    description: data.WorkGroup.Description
                }]);
            });
        }));

        unblockUI('#section-analytics-athena-workgroups-datatable');
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
            'options': reqParams
        });
    } else if (obj.type == "athena.workgroup") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['State'] = obj.data.State;
        if (obj.data.Configuration) {
            reqParams.cfn['WorkGroupConfiguration'] = {
                'BytesScannedCutoffPerQuery': obj.data.Configuration.ResultConfiguration.BytesScannedCutoffPerQuery,
                'EnforceWorkGroupConfiguration': obj.data.Configuration.ResultConfiguration.EnforceWorkGroupConfiguration,
                'PublishCloudWatchMetricsEnabled': obj.data.Configuration.ResultConfiguration.PublishCloudWatchMetricsEnabled,
                'RequesterPaysEnabled': obj.data.Configuration.ResultConfiguration.RequesterPaysEnabled,
                'ResultConfiguration': obj.data.Configuration.ResultConfiguration.ResultConfiguration
            };
        }

        /*
        TODO:
        RecursiveDeleteOption: Boolean
        Tags: 
            Tags
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
                'Ref': obj.data.Name
            }
        });
    } else {
        return false;
    }

    return true;
});
