/* ========================================================================== */
// Elastic Transcoder
/* ========================================================================== */

sections.push({
    'category': 'Media Services',
    'service': 'Elastic Transcoder',
    'resourcetypes': {
        'Pipelines': {
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
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'inputbucket',
                        title: 'Input Bucket',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'outputbucket',
                        title: 'Output Bucket',
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

async function updateDatatableMediaServicesElasticTranscoder() {
    blockUI('#section-mediaservices-elastictranscoder-pipelines-datatable');

    await sdkcall("ElasticTranscoder", "listPipelines", {
        // no params
    }, true).then(async (data) => {
        $('#section-mediaservices-elastictranscoder-pipelines-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Pipelines.map(pipeline => {
            return sdkcall("ElasticTranscoder", "readPipeline", {
                Id: pipeline.Id
            }, true).then((data) => {
                $('#section-mediaservices-elastictranscoder-pipelines-datatable').bootstrapTable('append', [{
                    f2id: data.Pipeline.Arn,
                    f2type: 'elastictranscoder.pipeline',
                    f2data: data.Pipeline,
                    f2region: region,
                    id: data.Pipeline.Id,
                    name: data.Pipeline.Name,
                    inputbucket: data.Pipeline.InputBucket,
                    outputbucket: data.Pipeline.OutputBucket
                }]);
            });
        }));

        unblockUI('#section-mediaservices-elastictranscoder-pipelines-datatable');
    });
}
