/* ========================================================================== */
// Rekognition
/* ========================================================================== */

sections.push({
    'category': 'Machine Learning',
    'service': 'Rekognition',
    'resourcetypes': {
        'Projects': {
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
        },
        'Collections': {
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
                        field: 'facemodelversion',
                        title: 'Face Model Version',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Stream Processors': {
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
                    }
                ],
                [
                    // nothing
                ]
            ]
        }
    }
});

async function updateDatatableMachineLearningRekognition() {
    blockUI('#section-machinelearning-rekognition-projects-datatable');
    blockUI('#section-machinelearning-rekognition-collections-datatable');
    blockUI('#section-machinelearning-rekognition-streamprocessors-datatable');

    await sdkcall("Rekognition", "describeProjects", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-rekognition-projects-datatable').deferredBootstrapTable('removeAll');

        data.ProjectDescriptions.forEach(project => {
            $('#section-machinelearning-rekognition-projects-datatable').deferredBootstrapTable('append', [{
                f2id: project.ProjectArn,
                f2type: 'rekognition.project',
                f2data: project,
                f2region: region,
                name: project.ProjectArn.split("/")[1],
                creationtime: project.CreationTimestamp
            }]);
        });
        
    }).catch(() => { });

    await sdkcall("Rekognition", "listCollections", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-rekognition-collections-datatable').deferredBootstrapTable('removeAll');

        for (var i=0; i<data.CollectionIds.length; i++) {
            $('#section-machinelearning-rekognition-collections-datatable').deferredBootstrapTable('append', [{
                f2id: data.CollectionIds[i] + " Collection",
                f2type: 'rekognition.collection',
                f2data: {
                    'CollectionId': data.CollectionIds[i]
                },
                f2region: region,
                id: data.CollectionIds[i],
                facemodelversion: data.FaceModelVersions[i]
            }]);
        }
        
    }).catch(() => { });

    await sdkcall("Rekognition", "listStreamProcessors", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-rekognition-streamprocessors-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.StreamProcessors.map(streamprocessor => {
            return sdkcall("Rekognition", "describeStreamProcessor", {
                Name: streamprocessor.Name
            }, true).then(async (data) => {
                $('#section-machinelearning-rekognition-streamprocessors-datatable').deferredBootstrapTable('append', [{
                    f2id: data.StreamProcessorArn,
                    f2type: 'rekognition.streamprocessor',
                    f2data: data,
                    f2region: region,
                    name: data.Name
                }]);
            });
        }));
        
    }).catch(() => { });

    unblockUI('#section-machinelearning-rekognition-projects-datatable');
    unblockUI('#section-machinelearning-rekognition-collections-datatable');
    unblockUI('#section-machinelearning-rekognition-streamprocessors-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "rekognition.project") {
        reqParams.cfn['ProjectName'] = obj.data.ProjectArn.split("/")[1];

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('rekognition', obj.id, 'AWS::Rekognition::Project'),
            'region': obj.region,
            'service': 'rekognition',
            'type': 'AWS::Rekognition::Project',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ProjectArn.split("/")[1],
                'GetAtt': {
                    'Arn': obj.data.ProjectArn
                }
            }
        });
    } else if (obj.type == "rekognition.collection") {
        reqParams.cfn['CollectionId'] = obj.data.CollectionId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('rekognition', obj.id, 'AWS::Rekognition::Collection'),
            'region': obj.region,
            'service': 'rekognition',
            'type': 'AWS::Rekognition::Collection',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.CollectionId
            }
        });
    } else if (obj.type == "rekognition.streamprocessor") {
        reqParams.cfn['Name'] = obj.data.Name;
        if (obj.data.Input && obj.data.Input.KinesisVideoStream) {
            reqParams.cfn['KinesisVideoStream'] = obj.data.Input.KinesisVideoStream;
        }
        if (obj.data.Output && obj.data.Output.KinesisDataStream) {
            reqParams.cfn['KinesisDataStream'] = obj.data.Output.KinesisDataStream;
        }
        if (obj.data.Output && obj.data.Output.S3Destination) {
            reqParams.cfn['S3Destination'] = {
                'BucketName': obj.data.Output.S3Destination.Bucket,
                'ObjectKeyPrefix': obj.data.Output.S3Destination.KeyPrefix
            };
        }
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        if (obj.data.Settings && obj.data.Settings.FaceSearch) {
            reqParams.cfn['FaceSearchSettings'] = obj.data.Settings.FaceSearch;
        }
        if (obj.data.Settings && obj.data.Settings.ConnectedHome) {
            reqParams.cfn['ConnectedHomeSettings'] = obj.data.Settings.ConnectedHome;
        }
        if (obj.data.NotificationChannel) {
            reqParams.cfn['NotificationChannel'] = {
                'Arn': obj.data.NotificationChannel.SNSTopicArn
            };
        }
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        if (obj.data.RegionsOfInterest) {
            reqParams.cfn['PolygonRegionsOfInterest'] = [];
            reqParams.cfn['BoundingBoxRegionsOfInterest'] = [];
            obj.data.RegionsOfInterest.forEach(regionofinterest => {
                if (regionofinterest.Polygon) {
                    reqParams.cfn['PolygonRegionsOfInterest'].push(regionofinterest.Polygon);
                }
                if (regionofinterest.BoundingBox) {
                    reqParams.cfn['BoundingBoxRegionsOfInterest'].push(regionofinterest.BoundingBox);
                }
            });
            reqParams.cfn['PolygonRegionsOfInterest'] = obj.data.RegionsOfInterest;
            reqParams.cfn['BoundingBoxRegionsOfInterest'] = obj.data.RegionsOfInterest;
        }
        reqParams.cfn['DataSharingPreference'] = obj.data.DataSharingPreference;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('rekognition', obj.id, 'AWS::Rekognition::StreamProcessor'),
            'region': obj.region,
            'service': 'rekognition',
            'type': 'AWS::Rekognition::StreamProcessor',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'GetAtt': {
                    'Arn': obj.data.StreamProcessorArn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
