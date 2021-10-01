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
        },
        'Rule Groups Namespaces': {
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
                        field: 'workspace',
                        title: 'Workspace',
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
    blockUI('#section-managementandgovernance-prometheus-rulegroupsnamespaces-datatable');

    await sdkcall("Amp", "listWorkspaces", {
        // no params
    }, false).then(async (data) => {
        $('#section-managementandgovernance-prometheus-workspaces-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-prometheus-rulegroupsnamespaces-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.workspaces.map(async (workspace) => {
            await sdkcall("Amp", "describeWorkspace", {
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

            return sdkcall("Amp", "listRuleGroupsNamespaces", {
                workspaceId: workspace.workspaceId
            }, false).then(async (data) => {
                $('#section-managementandgovernance-prometheus-rulegroupsnamespaces-datatable').deferredBootstrapTable('removeAll');
        
                await Promise.all(data.ruleGroupsNamespaces.map(ruleGroupNamespace => {
                    return sdkcall("Amp", "describeRuleGroupsNamespace", {
                        workspaceId: workspace.workspaceId,
                        name: ruleGroupNamespace.name
                    }, true).then((data) => {
                        data.ruleGroupsNamespace['workspace'] = workspace.arn;

                        $('#section-managementandgovernance-prometheus-rulegroupsnamespaces-datatable').deferredBootstrapTable('append', [{
                            f2id: data.ruleGroupsNamespace.arn,
                            f2type: 'prometheus.rulegroupsnamespace',
                            f2data: data.ruleGroupsNamespace,
                            f2region: region,
                            name: data.ruleGroupsNamespace.name,
                            workspace: workspace.workspaceId
                        }]);
                    });
                }));
            }).catch(() => { });
        }));
    }).catch(() => { });

    unblockUI('#section-managementandgovernance-prometheus-workspaces-datatable');
    unblockUI('#section-managementandgovernance-prometheus-rulegroupsnamespaces-datatable');
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
    } else if (obj.type == "prometheus.rulegroupsnamespace") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Workspace'] = obj.data.workspace;
        reqParams.cfn['Data'] = obj.data.data;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('prometheus', obj.id, 'AWS::APS::RuleGroupsNamespace'),
            'region': obj.region,
            'service': 'prometheus',
            'type': 'AWS::APS::RuleGroupsNamespace',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
