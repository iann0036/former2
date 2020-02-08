/* ========================================================================== */
// MediaConvert
/* ========================================================================== */

sections.push({
    'category': 'Media Services',
    'service': 'MediaConvert',
    'resourcetypes': {
        'Queues': {
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
                    },
                    {
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'pricingplan',
                        title: 'Pricing Plan',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Presets': {
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
        },
        'Job Templates': {
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
                    },
                    {
                        field: 'queue',
                        title: 'Queue',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'category',
                        title: 'Category',
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

async function updateDatatableMediaServicesMediaConvert() {
    blockUI('#section-mediaservices-mediaconvert-queues-datatable');
    blockUI('#section-mediaservices-mediaconvert-presets-datatable');
    blockUI('#section-mediaservices-mediaconvert-jobtemplates-datatable');

    await sdkcall("MediaConvert", "listQueues", {
        // no params
    }, false).then(async (data) => {
        $('#section-mediaservices-mediaconvert-queues-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Queues.map(queue => {
            if (queue.Type == "CUSTOM") {
                return sdkcall("MediaConvert", "getQueue", {
                    Name: queue.Name
                }, true).then(async (data) => {
                    $('#section-mediaservices-mediaconvert-queues-datatable').bootstrapTable('append', [{
                        f2id: data.Queue.Arn,
                        f2type: 'mediaconvert.queue',
                        f2data: data.Queue,
                        f2region: region,
                        name: data.Queue.Name,
                        description: data.Queue.Description,
                        pricingplan: data.Queue.PricingPlan
                    }]);
                });
            } else {
                return Promise.resolve();
            }
        }));
    }).catch(() => { });

    await sdkcall("MediaConvert", "listPresets", {
        // no params
    }, false).then(async (data) => {
        $('#section-mediaservices-mediaconvert-presets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Presets.map(preset => {
            if (preset.Type == "CUSTOM") {
                return sdkcall("MediaConvert", "getPreset", {
                    Name: preset.Name
                }, true).then(async (data) => {
                    $('#section-mediaservices-mediaconvert-presets-datatable').bootstrapTable('append', [{
                        f2id: data.Preset.Arn,
                        f2type: 'mediaconvert.preset',
                        f2data: data.Preset,
                        f2region: region,
                        name: data.Preset.Name,
                        description: data.Queue.Description
                    }]);
                });
            } else {
                return Promise.resolve();
            }
        }));
    }).catch(() => { });

    await sdkcall("MediaConvert", "listJobTemplates", {
        // no params
    }, false).then(async (data) => {
        $('#section-mediaservices-mediaconvert-jobtemplates-datatable').bootstrapTable('removeAll');

        await Promise.all(data.JobTemplates.map(jobTemplate => {
            if (jobTemplate.Type == "CUSTOM") {
                return sdkcall("MediaConvert", "getJobTemplate", {
                    Name: jobTemplate.Name
                }, true).then(async (data) => {
                    $('#section-mediaservices-mediaconvert-jobtemplates-datatable').bootstrapTable('append', [{
                        f2id: data.JobTemplate.Arn,
                        f2type: 'mediaconvert.jobtemplate',
                        f2data: data.JobTemplate,
                        f2region: region,
                        name: data.JobTemplate.Name,
                        description: data.JobTemplate.Description,
                        queue: data.JobTemplate.Queue,
                        category: data.JobTemplate.Category
                    }]);
                });
            } else {
                return Promise.resolve();
            }
        }));
    }).catch(() => { });

    unblockUI('#section-mediaservices-mediaconvert-queues-datatable');
    unblockUI('#section-mediaservices-mediaconvert-presets-datatable');
    unblockUI('#section-mediaservices-mediaconvert-jobtemplates-datatable');
}
