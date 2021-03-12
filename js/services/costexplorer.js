/* ========================================================================== */
// Cost Explorer
/* ========================================================================== */

sections.push({
    'category': 'AWS Cost Management',
    'service': 'Cost Explorer',
    'resourcetypes': {
        'Cost Categories': {
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
                        field: 'ruleversion',
                        title: 'Rule Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Anomaly Monitors': {
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
                    }
                ]
            ]
        },
        'Anomaly Subscriptions': {
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
                        field: 'threshold',
                        title: 'Threshold',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'frequency',
                        title: 'Frequency',
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

async function updateDatatableAWSCostManagementCostExplorer() {
    blockUI('#section-awscostmanagement-costexplorer-costcategories-datatable');
    blockUI('#section-awscostmanagement-costexplorer-anomalymonitors-datatable');
    blockUI('#section-awscostmanagement-costexplorer-anomalysubscriptions-datatable');

    await sdkcall("CostExplorer", "listCostCategoryDefinitions", {
        // no params
    }, true).then(async (data) => {
        $('#section-awscostmanagement-costexplorer-costcategories-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.CostCategoryReferences.map(ccr => {
            return sdkcall("CostExplorer", "describeCostCategoryDefinition", {
                CostCategoryArn: ccr.CostCategoryArn
            }, true).then(async (data) => {
                $('#section-awscostmanagement-costexplorer-costcategories-datatable').deferredBootstrapTable('append', [{
                    f2id: data.CostCategory.CostCategoryArn,
                    f2type: 'costexplorer.costcategory',
                    f2data: data.CostCategory,
                    f2region: region,
                    name: data.CostCategory.Name,
                    ruleversion: data.CostCategory.RuleVersion
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("CostExplorer", "getAnomalyMonitors", {
        // no params
    }, true).then(async (data) => {
        $('#section-awscostmanagement-costexplorer-anomalymonitors-datatable').deferredBootstrapTable('removeAll');

        data.AnomalyMonitors.forEach(anomalymonitor => {
            $('#section-awscostmanagement-costexplorer-anomalymonitors-datatable').deferredBootstrapTable('append', [{
                f2id: anomalymonitor.MonitorArn,
                f2type: 'costexplorer.anomalymonitor',
                f2data: anomalymonitor,
                f2region: region,
                name: anomalymonitor.MonitorName,
                type: anomalymonitor.MonitorType
            }]);
        });
    }).catch(() => { });

    await sdkcall("CostExplorer", "getAnomalySubscriptions", {
        // no params
    }, true).then(async (data) => {
        $('#section-awscostmanagement-costexplorer-anomalysubscriptions-datatable').deferredBootstrapTable('removeAll');

        data.AnomalySubscriptions.forEach(anomalysubscription => {
            $('#section-awscostmanagement-costexplorer-anomalysubscriptions-datatable').deferredBootstrapTable('append', [{
                f2id: anomalysubscription.SubscriptionArn,
                f2type: 'costexplorer.anomalysubscription',
                f2data: anomalysubscription,
                f2region: region,
                name: anomalysubscription.SubscriptionName,
                threshold: anomalysubscription.Threshold,
                frequency: anomalysubscription.Frequency
            }]);
        });
    }).catch(() => { });

    unblockUI('#section-awscostmanagement-costexplorer-costcategories-datatable');
    unblockUI('#section-awscostmanagement-costexplorer-anomalymonitors-datatable');
    unblockUI('#section-awscostmanagement-costexplorer-anomalysubscriptions-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "costexplorer.costcategory") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Rules'] = obj.data.Rules;
        reqParams.cfn['RuleVersion'] = obj.data.RuleVersion;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('costexplorer', obj.id, 'AWS::CE::CostCategory'),
            'region': obj.region,
            'service': 'costexplorer',
            'type': 'AWS::CE::CostCategory',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.CostCategoryArn,
                'Import': {
                    'Arn': obj.data.CostCategoryArn
                }
            }
        });
    } else if (obj.type == "costexplorer.anomalymonitor") {
        reqParams.cfn['MonitorName'] = obj.data.MonitorName;
        reqParams.cfn['MonitorType'] = obj.data.MonitorType;
        reqParams.cfn['MonitorDimension'] = obj.data.MonitorDimension;
        reqParams.cfn['MonitorSpecification'] = JSON.stringify(obj.data.MonitorSpecification);

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('costexplorer', obj.id, 'AWS::CE::AnomalyMonitor'),
            'region': obj.region,
            'service': 'costexplorer',
            'type': 'AWS::CE::AnomalyMonitor',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.MonitorArn
            }
        });
    } else if (obj.type == "costexplorer.anomalysubscription") {
        reqParams.cfn['SubscriptionName'] = obj.data.SubscriptionName;
        reqParams.cfn['Threshold'] = obj.data.Threshold;
        reqParams.cfn['Frequency'] = obj.data.Frequency;
        reqParams.cfn['MonitorArnList'] = obj.data.MonitorArnList;
        reqParams.cfn['Subscribers'] = obj.data.Subscribers;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('costexplorer', obj.id, 'AWS::CE::AnomalySubscription'),
            'region': obj.region,
            'service': 'costexplorer',
            'type': 'AWS::CE::AnomalySubscription',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.SubscriptionArn
            }
        });
    } else {
        return false;
    }

    return true;
});
