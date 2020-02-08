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
        $('#section-internetofthings-thingsgraph-flowtemplates-datatable').bootstrapTable('removeAll');

        await Promise.all(data.summaries.map(flowtemplate => {
            return sdkcall("IoTThingsGraph", "getFlowTemplate", {
                id: flowtemplate.id
            }, true).then(async (data) => {
                $('#section-internetofthings-thingsgraph-flowtemplates-datatable').bootstrapTable('append', [{
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
