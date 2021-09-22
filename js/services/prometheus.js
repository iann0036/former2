/* ========================================================================== */
// Prometheus
/* ========================================================================== */

sections.push({
    'category': 'Management &amp; Governance',
    'service': 'Prometheus',
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
                        title: 'Alias',
                        field: 'alias',
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
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableManagementAndGovernancePrometheus() {
    blockUI('#section-managementandgovernance-prometheus-workspaces-datatable');

    await sdkcall("Amp", "listWorkspaces", {
        // no params
    }, false).then(async (data) => {
        $('#section-managementandgovernance-prometheus-workspaces-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.workspaces.map(workspace => {
            return sdkcall("Amp", "describeWorkspace", {
                workspaceId: workspace.workspaceId
            }, true).then((data) => {
                $('#section-managementandgovernance-prometheus-workspaces-datatable').deferredBootstrapTable('append', [{
                    f2id: data.workspace.arn,
                    f2type: 'prometheus.workspace',
                    f2data: data.workspace,
                    f2region: region,
                    alias: data.workspace.alias,
                    id: data.workspace.ProductName
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-managementandgovernance-prometheus-workspaces-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "prometheus.workspace") {
        reqParams.cfn['Alias'] = obj.data.alias;
        reqParams.tf['alias'] = obj.data.alias;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('prometheus', obj.id, 'AWS::APS::Workspace'),
            'region': obj.region,
            'service': 'prometheus',
            'type': 'AWS::APS::Workspace',
            'terraformType': 'aws_prometheus_workspace',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
