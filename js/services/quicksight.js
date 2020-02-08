/* ========================================================================== */
// QuickSight
/* ========================================================================== */

sections.push({
    'category': 'Analytics',
    'service': 'QuickSight',
    'resourcetypes': {
        'Groups': {
            'terraformonly': true,
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
                        title: 'Group Name',
                        field: 'groupname',
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

async function updateDatatableAnalyticsQuickSight() {
    blockUI('#section-analytics-quicksight-groups-datatable');

    await sdkcall("STS", "getCallerIdentity", {
        // no params
    }, true).then(async (data) => {
        var accountId = data.Account;

        await sdkcall("QuickSight", "listGroups", {
            Namespace: 'default',
            AwsAccountId: accountId
        }, false).then(async (data) => {
            $('#section-analytics-quicksight-groups-datatable').bootstrapTable('removeAll');

            data.GroupList.forEach(group => {
                $('#section-analytics-quicksight-groups-datatable').bootstrapTable('append', [{
                    f2id: group.Arn,
                    f2type: 'quicksight.group',
                    f2data: {
                        'GroupName': group.GroupName,
                        'Description': group.Description,
                        'AccountId': accountId,
                        'Namespace': 'default'
                    },
                    f2region: region,
                    groupname: group.GroupName,
                    description: group.Description
                }]);
            });
        }).catch(() => { });
    });

    unblockUI('#section-analytics-quicksight-groups-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
