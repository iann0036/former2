/* ========================================================================== */
// MediaPackage
/* ========================================================================== */

sections.push({
    'category': 'Media Services',
    'service': 'MediaPackage',
    'resourcetypes': {
        'Channels': {
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

async function updateDatatableMediaServicesMediaPackage() {
    blockUI('#section-mediaservices-mediapackage-channels-datatable');

    await sdkcall("MediaPackage", "listChannels", {
        // no params
    }, true).then(async (data) => {
        $('#section-mediaservices-mediapackage-channels-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Channels.map(channel => {
            return sdkcall("MediaPackage", "describeChannel", {
                Id: channel.Id
            }, true).then((data) => {
                $('#section-mediaservices-mediapackage-channels-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'mediapackage.channel',
                    f2data: data,
                    f2region: region,
                    id: data.Id,
                    description: data.Description
                }]);
            });
        }));

        unblockUI('#section-mediaservices-mediapackage-channels-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "mediapackage.channel") {
        reqParams.tf['channel_id'] = obj.data.Id;
        reqParams.tf['description'] = obj.data.Description;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('mediapackage', obj.id, 'AWS::MediaPackage::Channel'), // not real resource type
            'region': obj.region,
            'service': 'mediapackage',
            'terraformType': 'aws_media_package_channel',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
