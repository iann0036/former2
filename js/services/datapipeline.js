/* ========================================================================== */
// Data Pipeline
/* ========================================================================== */

sections.push({
    'category': 'Analytics',
    'service': 'Data Pipeline',
    'resourcetypes': {
        'Pipelines': {
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
                    }
                ]
            ]
        }
    }
});

async function updateDatatableAnalyticsDataPipeline() {
    blockUI('#section-analytics-datapipeline-pipelines-datatable');

    await sdkcall("DataPipeline", "listPipelines", {
        // no params
    }, true).then(async (data) => {
        $('#section-analytics-datapipeline-pipelines-datatable').bootstrapTable('removeAll');

        await Promise.all(data.pipelineIdList.map(pipeline => {
            return sdkcall("DataPipeline", "describePipelines", {
                pipelineIds: [pipeline.id]
            }, true).then((data) => {
                $('#section-analytics-datapipeline-pipelines-datatable').bootstrapTable('append', [{
                    f2id: data.pipelineDescriptionList[0].pipelineId,
                    f2type: 'datapipeline.pipeline',
                    f2data: data.pipelineDescriptionList[0],
                    f2region: region,
                    name: data.pipelineDescriptionList[0].name,
                    id: data.pipelineDescriptionList[0].pipelineId,
                    description: data.pipelineDescriptionList[0].description
                }]);
            });
        }));

        unblockUI('#section-analytics-datapipeline-pipelines-datatable');
    });
}
