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
        $('#section-mediaservices-elastictranscoder-pipelines-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Pipelines.map(pipeline => {
            return sdkcall("ElasticTranscoder", "readPipeline", {
                Id: pipeline.Id
            }, true).then((data) => {
                $('#section-mediaservices-elastictranscoder-pipelines-datatable').deferredBootstrapTable('append', [{
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

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "elastictranscoder.pipeline") {
        reqParams.tf['input_bucket'] = obj.data.InputBucket;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.tf['role'] = obj.data.Role;
        reqParams.tf['output_bucket'] = obj.data.OutputBucket;
        reqParams.tf['aws_kms_key_arn'] = obj.data.AwsKmsKeyArn;
        if (obj.data.ContentConfig) {
            reqParams.tf['content_config'] = {
                'bucket': obj.data.ContentConfig.Bucket,
                'storage_class': obj.data.ContentConfig.StorageClass
            };
            if (obj.data.ContentConfig.Permissions) {
                reqParams.tf['content_config_permissions'] = [];
                obj.data.ContentConfig.Permissions.forEach(permission => {
                    reqParams.tf['content_config_permissions'].push({
                        'grantee_type': permission.GranteeType,
                        'grantee': permission.Grantee,
                        'access': permission.Access
                    });
                });
            }
        }
        if (obj.data.Notifications) {
            reqParams.tf['notifications'] = {
                'completed': obj.data.Notifications.Completed,
                'error': obj.data.Notifications.Error,
                'progressing': obj.data.Notifications.Progressing,
                'warning': obj.data.Notifications.Warning
            };
        }
        if (obj.data.ThumbnailConfig) {
            reqParams.tf['thumbnail_config'] = {
                'bucket': obj.data.ThumbnailConfig.Bucket,
                'storage_class': obj.data.ThumbnailConfig.StorageClass
            };
            if (obj.data.ThumbnailConfig.Permissions) {
                reqParams.tf['thumbnail_config_permissions'] = [];
                obj.data.ThumbnailConfig.Permissions.forEach(permission => {
                    reqParams.tf['thumbnail_config_permissions'].push({
                        'grantee_type': permission.GranteeType,
                        'grantee': permission.Grantee,
                        'access': permission.Access
                    });
                });
            }
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('elastictranscoder', obj.id, 'AWS::ElasticTranscoder::Pipeline'), // not real resource type
            'region': obj.region,
            'service': 'elastictranscoder',
            'terraformType': 'aws_elastictranscoder_pipeline',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
