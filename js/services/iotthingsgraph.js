/* ========================================================================== */
// IoT Things Graph
/* ========================================================================== */

sections.push({
    'category': 'Internet of Things',
    'service': 'Things Graph',
    'resourcetypes': {
        'Flow Templates': {
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
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableInternetofThingsThingsGraph() {
    blockUI('#section-internetofthings-thingsgraph-flowtemplates-datatable');

    await sdkcall("IoTThingsGraph", "searchFlowTemplates", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-thingsgraph-flowtemplates-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.summaries.map(flowtemplate => {
            return sdkcall("IoTThingsGraph", "getFlowTemplate", {
                id: flowtemplate.id
            }, true).then(async (data) => {
                $('#section-internetofthings-thingsgraph-flowtemplates-datatable').deferredBootstrapTable('append', [{
                    f2id: data.description.summary.arn,
                    f2type: 'iotthingsgraph.flowtemplate',
                    f2data: data.description,
                    f2region: region,
                    id: data.description.summary.id,
                    creationtime: data.description.summary.createdAt
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-internetofthings-thingsgraph-flowtemplates-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "iotthingsgraph.flowtemplate") {
        if (obj.data.definition) {
            reqParams.cfn['CompatibleNamespaceVersion'] = obj.data.validatedNamespaceVersion;
            reqParams.cfn['Definition'] = {
                'Language': obj.data.definition.language,
                'Text': obj.data.definition.text
            };

            tracked_resources.push({
                'obj': obj,
                'logicalId': getResourceName('iotthingsgraph', obj.id, 'AWS::IoTThingsGraph::FlowTemplate'),
                'region': obj.region,
                'service': 'iotthingsgraph',
                'type': 'AWS::IoTThingsGraph::FlowTemplate',
                'options': reqParams
            });
        }
    } else {
        return false;
    }

    return true;
});
