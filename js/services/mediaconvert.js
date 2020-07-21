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
        $('#section-mediaservices-mediaconvert-queues-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Queues.map(queue => {
            if (queue.Type == "CUSTOM") {
                return sdkcall("MediaConvert", "getQueue", {
                    Name: queue.Name
                }, true).then(async (data) => {
                    $('#section-mediaservices-mediaconvert-queues-datatable').deferredBootstrapTable('append', [{
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
        $('#section-mediaservices-mediaconvert-presets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Presets.map(preset => {
            if (preset.Type == "CUSTOM") {
                return sdkcall("MediaConvert", "getPreset", {
                    Name: preset.Name
                }, true).then(async (data) => {
                    $('#section-mediaservices-mediaconvert-presets-datatable').deferredBootstrapTable('append', [{
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
        $('#section-mediaservices-mediaconvert-jobtemplates-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.JobTemplates.map(jobTemplate => {
            if (jobTemplate.Type == "CUSTOM") {
                return sdkcall("MediaConvert", "getJobTemplate", {
                    Name: jobTemplate.Name
                }, true).then(async (data) => {
                    $('#section-mediaservices-mediaconvert-jobtemplates-datatable').deferredBootstrapTable('append', [{
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

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "mediaconvert.queue") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['PricingPlan'] = obj.data.PricingPlan;
        reqParams.cfn['Status'] = obj.data.Status;

        /*
        TODO:
        Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('mediaconvert', obj.id, 'AWS::MediaConvert::Queue'),
            'region': obj.region,
            'service': 'mediaconvert',
            'type': 'AWS::MediaConvert::Queue',
            'options': reqParams
        });
    } else if (obj.type == "mediaconvert.preset") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Category'] = obj.data.Category;
        reqParams.cfn['SettingsJson'] = obj.data.Settings;

        /*
        TODO:
        Tags: Json
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('mediaconvert', obj.id, 'AWS::MediaConvert::Preset'),
            'region': obj.region,
            'service': 'mediaconvert',
            'type': 'AWS::MediaConvert::Preset',
            'options': reqParams
        });
    } else if (obj.type == "mediaconvert.jobtemplate") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Category'] = obj.data.Category;
        reqParams.cfn['AccelerationSettings'] = obj.data.AccelerationSettings;
        reqParams.cfn['Priority'] = obj.data.Priority;
        reqParams.cfn['Queue'] = obj.data.Queue;
        reqParams.cfn['SettingsJson'] = obj.data.Settings;
        reqParams.cfn['StatusUpdateInterval'] = obj.data.StatusUpdateInterval;

        /*
        TODO:
        Tags: Json
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('mediaconvert', obj.id, 'AWS::MediaConvert::JobTemplate'),
            'region': obj.region,
            'service': 'mediaconvert',
            'type': 'AWS::MediaConvert::JobTemplate',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
