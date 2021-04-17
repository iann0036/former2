/* ========================================================================== */
// Interactive Video Service
/* ========================================================================== */

sections.push({
    'category': 'Media Services',
    'service': 'Interactive Video Service',
    'resourcetypes': {
        'Channels': {
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
                        field: 'playbackurl',
                        title: 'Playback URL',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Stream Keys': {
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
                        title: 'Value',
                        field: 'value',
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
                        field: 'channelarn',
                        title: 'Channel ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Playback Key Pairs': {
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
                        field: 'fingerprint',
                        title: 'Fingerprint',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Recording Configurations': {
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
                        field: 'bucketname',
                        title: 'Bucket Name',
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

async function updateDatatableMediaServicesInteractiveVideoService() {
    blockUI('#section-mediaservices-interactivevideoservice-channels-datatable');
    blockUI('#section-mediaservices-interactivevideoservice-streamkeys-datatable');
    blockUI('#section-mediaservices-interactivevideoservice-playbackkeypairs-datatable');
    blockUI('#section-mediaservices-interactivevideoservice-recordingconfigurations-datatable');

    await sdkcall("IVS", "listChannels", {
        // no params
    }, true).then(async (data) => {
        $('#section-mediaservices-interactivevideoservice-channels-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.channels.map(async (channel) => {
            await sdkcall("IVS", "getChannel", {
                arn: channel.arn
            }, true).then((data) => {
                $('#section-mediaservices-interactivevideoservice-channels-datatable').deferredBootstrapTable('append', [{
                    f2id: data.channel.arn,
                    f2type: 'interactivevideoservice.channel',
                    f2data: data.channel,
                    f2region: region,
                    name: data.channel.name,
                    playbackurl: data.channel.playbackUrl
                }]);
            });

            return sdkcall("IVS", "listStreamKeys", {
                channelArn: channel.arn
            }, true).then(async (data) => {
                $('#section-mediaservices-interactivevideoservice-streamkeys-datatable').deferredBootstrapTable('removeAll');
        
                await Promise.all(data.streamKeys.map(async (streamkey) => {
                    return sdkcall("IVS", "getStreamKey", {
                        arn: streamkey.arn
                    }, true).then((data) => {
                        $('#section-mediaservices-interactivevideoservice-streamkeys-datatable').deferredBootstrapTable('append', [{
                            f2id: data.streamKey.arn,
                            f2type: 'interactivevideoservice.streamkey',
                            f2data: data.streamKey,
                            f2region: region,
                            value: data.streamKey.value,
                            channelarn: data.streamKey.channelArn
                        }]);
                    });
                }));
            });
        }));
    }).catch(() => { });

    await sdkcall("IVS", "listPlaybackKeyPairs", {
        // no params
    }, true).then(async (data) => {
        $('#section-mediaservices-interactivevideoservice-playbackkeypairs-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.keyPairs.map(async (keypair) => {
            return sdkcall("IVS", "getPlaybackKeyPair", {
                arn: keypair.arn
            }, true).then((data) => {
                $('#section-mediaservices-interactivevideoservice-playbackkeypairs-datatable').deferredBootstrapTable('append', [{
                    f2id: data.keyPair.arn,
                    f2type: 'interactivevideoservice.playbackkeypair',
                    f2data: data.keyPair,
                    f2region: region,
                    name: data.keyPair.name,
                    fingerprint: data.keyPair.fingerprint
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("IVS", "listRecordingConfigurations", {
        // no params
    }, true).then(async (data) => {
        $('#section-mediaservices-interactivevideoservice-recordingconfigurations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.recordingConfigurations.map(async (recordingConfiguration) => {
            return sdkcall("IVS", "getRecordingConfiguration", {
                arn: recordingConfiguration.arn
            }, true).then((data) => {
                $('#section-mediaservices-interactivevideoservice-recordingconfigurations-datatable').deferredBootstrapTable('append', [{
                    f2id: data.recordingConfiguration.arn,
                    f2type: 'interactivevideoservice.recordingconfiguration',
                    f2data: data.recordingConfiguration,
                    f2region: region,
                    name: data.recordingConfiguration.name,
                    bucketname: (data.recordingConfiguration.destinationConfiguration.s3 ? data.recordingConfiguration.destinationConfiguration.s3.bucketName : null)
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-mediaservices-interactivevideoservice-channels-datatable');
    unblockUI('#section-mediaservices-interactivevideoservice-streamkeys-datatable');
    unblockUI('#section-mediaservices-interactivevideoservice-playbackkeypairs-datatable');
    unblockUI('#section-mediaservices-interactivevideoservice-recordingconfigurations-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "interactivevideoservice.channel") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['LatencyMode'] = obj.data.latencyMode;
        reqParams.cfn['Type'] = obj.data.type;
        reqParams.cfn['Authorized'] = obj.data.authorized;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('interactivevideoservice', obj.id, 'AWS::IVS::Channel'),
            'region': obj.region,
            'service': 'interactivevideoservice',
            'type': 'AWS::IVS::Channel',
            'options': reqParams
        });
    } else if (obj.type == "interactivevideoservice.streamkey") {
        reqParams.cfn['ChannelArn'] = obj.data.channelArn;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('interactivevideoservice', obj.id, 'AWS::IVS::StreamKey'),
            'region': obj.region,
            'service': 'interactivevideoservice',
            'type': 'AWS::IVS::StreamKey',
            'options': reqParams
        });
    } else if (obj.type == "interactivevideoservice.playbackkeypair") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['PublicKeyMaterial'] = "REPLACEME";
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('interactivevideoservice', obj.id, 'AWS::IVS::PlaybackKeyPair'),
            'region': obj.region,
            'service': 'interactivevideoservice',
            'type': 'AWS::IVS::PlaybackKeyPair',
            'options': reqParams
        });
    } else if (obj.type == "interactivevideoservice.recordingconfiguration") {
        reqParams.cfn['Name'] = obj.data.name;
        if (obj.data.destinationConfiguration.s3) {
            reqParams.cfn['DestinationConfiguration'] = {
                "S3": {
                    "BucketName": obj.data.destinationConfiguration.s3.bucketName
                }
            };
        }
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('interactivevideoservice', obj.id, 'AWS::IVS::RecordingConfiguration'),
            'region': obj.region,
            'service': 'interactivevideoservice',
            'type': 'AWS::IVS::RecordingConfiguration',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
