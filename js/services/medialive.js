/* ========================================================================== */
// MediaLive
/* ========================================================================== */

sections.push({
    'category': 'Media Services',
    'service': 'MediaLive',
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
                        field: 'channelclass',
                        title: 'Channel Class',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Inputs': {
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
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'inputclass',
                        title: 'Input Class',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Input Security Groups': {
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
                        field: 'inputs',
                        title: 'Inputs',
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

async function updateDatatableMediaServicesMediaLive() {
    blockUI('#section-mediaservices-medialive-channels-datatable');
    blockUI('#section-mediaservices-medialive-inputs-datatable');
    blockUI('#section-mediaservices-medialive-inputsecuritygroups-datatable');

    await sdkcall("MediaLive", "listChannels", {
        // no params
    }, false).then(async (data) => {
        $('#section-mediaservices-medialive-channels-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Channels.map(channel => {
            return sdkcall("MediaLive", "describeChannel", {
                ChannelId: channel.Id
            }, true).then(async (data) => {
                $('#section-mediaservices-medialive-channels-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'medialive.channel',
                    f2data: data,
                    f2region: region,
                    id: data.Id,
                    channelclass: data.ChannelClass,
                    name: data.Name
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("MediaLive", "listInputs", {
        // no params
    }, false).then(async (data) => {
        $('#section-mediaservices-medialive-inputs-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Inputs.map(input => {
            return sdkcall("MediaLive", "describeInput", {
                InputId: input.Id
            }, true).then(async (data) => {
                $('#section-mediaservices-medialive-inputs-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'medialive.input',
                    f2data: data,
                    f2region: region,
                    id: data.Id,
                    inputclass: data.InputClass,
                    type: data.Type,
                    name: data.Name
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("MediaLive", "listInputSecurityGroups", {
        // no params
    }, false).then(async (data) => {
        $('#section-mediaservices-medialive-inputsecuritygroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.InputSecurityGroups.map(inputsecuritygroup => {
            return sdkcall("MediaLive", "describeInputSecurityGroup", {
                InputSecurityGroupId: inputsecuritygroup.Id
            }, true).then(async (data) => {
                var inputs = "";

                if (data.Inputs) {
                    inputs = data.Inputs.join(", ");
                }

                $('#section-mediaservices-medialive-inputsecuritygroups-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'medialive.inputsecuritygroup',
                    f2data: data,
                    f2region: region,
                    id: data.Id,
                    inputs: inputs
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-mediaservices-medialive-channels-datatable');
    unblockUI('#section-mediaservices-medialive-inputs-datatable');
    unblockUI('#section-mediaservices-medialive-inputsecuritygroups-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "medialive.inputsecuritygroup") {
        reqParams.cfn['WhitelistRules'] = obj.data.WhitelistRules;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('medialive', obj.id, 'AWS::MediaLive::InputSecurityGroup'),
            'region': obj.region,
            'service': 'medialive',
            'type': 'AWS::MediaLive::InputSecurityGroup',
            'options': reqParams
        });
    } else if (obj.type == "medialive.channel") {
        reqParams.cfn['ChannelClass'] = obj.data.ChannelClass;
        reqParams.cfn['Destinations'] = obj.data.Destinations;
        reqParams.cfn['EncoderSettings'] = obj.data.EncoderSettings;
        reqParams.cfn['InputAttachments'] = obj.data.InputAttachments;
        reqParams.cfn['InputSpecification'] = obj.data.InputSpecification;
        reqParams.cfn['LogLevel'] = obj.data.LogLevel;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('medialive', obj.id, 'AWS::MediaLive::Channel'),
            'region': obj.region,
            'service': 'medialive',
            'type': 'AWS::MediaLive::Channel',
            'options': reqParams
        });
    } else if (obj.type == "medialive.input") {
        reqParams.cfn['MediaConnectFlows'] = obj.data.MediaConnectFlows;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['Tags'] = obj.data.Tags;
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.cfn['Sources'] = obj.data.Sources;
        reqParams.cfn['InputSecurityGroups'] = obj.data.SecurityGroups;

        /*
        TODO:
        Destinations: 
            - InputDestinationRequest
        Vpc: 
            InputVpcRequest
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('medialive', obj.id, 'AWS::MediaLive::Input'),
            'region': obj.region,
            'service': 'medialive',
            'type': 'AWS::MediaLive::Input',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
