/* ========================================================================== */
// WorkSpaces
/* ========================================================================== */

sections.push({
    'category': 'End User Computing',
    'service': 'WorkSpaces',
    'resourcetypes': {
        'Workspaces': {
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
                        field: 'directoryid',
                        title: 'Directory ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'username',
                        title: 'Username',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'ipaddress',
                        title: 'IP Address',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'subnetid',
                        title: 'Subnet ID',
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

async function updateDatatableEndUserComputingWorkSpaces() {
    blockUI('#section-endusercomputing-workspaces-workspaces-datatable');

    await sdkcall("WorkSpaces", "describeWorkspaces", {
        // no params
    }, true).then((data) => {
        $('#section-endusercomputing-workspaces-workspaces-datatable').bootstrapTable('removeAll');

        data.Workspaces.forEach(workspace => {
            $('#section-endusercomputing-workspaces-workspaces-datatable').bootstrapTable('append', [{
                f2id: workspace.WorkspaceId,
                f2type: 'workspaces.workspace',
                f2data: workspace,
                f2region: region,
                id: workspace.WorkspaceId,
                directoryid: workspace.DirectoryId,
                username: workspace.UserName,
                ipaddress: workspace.IpAddress,
                subnetid: workspace.SubnetId
            }]);
        });

        unblockUI('#section-endusercomputing-workspaces-workspaces-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
