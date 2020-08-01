/* ========================================================================== */
// Ground Station
/* ========================================================================== */

sections.push({
    'category': 'Satellite',
    'service': 'Ground Station',
    'resourcetypes': {
        'Mission Profiles': {
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
                        field: 'trackingconfigarn',
                        title: 'Tracking Config ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'minimumviablecontactduration',
                        title: 'Minimum Viable Contact Duration',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Configs': {
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
                        field: 'configtype',
                        title: 'Config Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Dataflow Endpoint Groups': {
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
                    }
                ],
                [
                    // no properties
                ]
            ]
        }
    }
});

async function updateDatatableSatelliteGroundStation() {
    blockUI('#section-satellite-groundstation-missionprofiles-datatable');
    blockUI('#section-satellite-groundstation-configs-datatable');
    blockUI('#section-satellite-groundstation-dataflowendpointgroups-datatable');

    await sdkcall("GroundStation", "listMissionProfiles", {
        // no params
    }, true).then(async (data) => {
        $('#section-satellite-groundstation-missionprofiles-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.missionProfileList.map(missionProfile => {
            return sdkcall("GroundStation", "getMissionProfile", {
                missionProfileId: missionProfile.missionProfileId
            }, true).then(async (data) => {
                $('#section-satellite-groundstation-missionprofiles-datatable').deferredBootstrapTable('append', [{
                    f2id: data.missionProfileArn,
                    f2type: 'groundstation.missionprofile',
                    f2data: data,
                    f2region: region,
                    name: data.name,
                    trackingconfigarn: data.trackingConfigArn,
                    minimumviablecontactduration: data.minimumViableContactDurationSeconds + " seconds"
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("GroundStation", "listConfigs", {
        // no params
    }, true).then(async (data) => {
        $('#section-satellite-groundstation-configs-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.configList.map(config => {
            return sdkcall("GroundStation", "getConfig", {
                configId: config.configId,
                configType: config.configType
            }, true).then(async (data) => {
                $('#section-satellite-groundstation-configs-datatable').deferredBootstrapTable('append', [{
                    f2id: data.configArn,
                    f2type: 'groundstation.config',
                    f2data: data,
                    f2region: region,
                    name: data.name,
                    configtype: data.configType
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("GroundStation", "listDataflowEndpointGroups", {
        // no params
    }, true).then(async (data) => {
        $('#section-satellite-groundstation-dataflowendpointgroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.dataflowEndpointGroupList.map(dataflowEndpointGroup => {
            return sdkcall("GroundStation", "getDataflowEndpointGroup", {
                dataflowEndpointGroupId: dataflowEndpointGroup.dataflowEndpointGroupId
            }, true).then(async (data) => {
                $('#section-satellite-groundstation-dataflowendpointgroups-datatable').deferredBootstrapTable('append', [{
                    f2id: data.dataflowEndpointGroupArn,
                    f2type: 'groundstation.dataflowendpointgroup',
                    f2data: data,
                    f2region: region,
                    id: data.dataflowEndpointGroupId
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-satellite-groundstation-missionprofiles-datatable');
    unblockUI('#section-satellite-groundstation-configs-datatable');
    unblockUI('#section-satellite-groundstation-dataflowendpointgroups-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "groundstation.missionprofile") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['ContactPrePassDurationSeconds'] = obj.data.contactPrePassDurationSeconds;
        reqParams.cfn['ContactPostPassDurationSeconds'] = obj.data.contactPostPassDurationSeconds;
        reqParams.cfn['MinimumViableContactDurationSeconds'] = obj.data.minimumViableContactDurationSeconds;
        reqParams.cfn['TrackingConfigArn'] = obj.data.trackingConfigArn;
        if (obj.data.dataflowEdges) {
            reqParams.cfn['DataflowEdges'] = [];
            obj.data.dataflowEdges.forEach(dataflowEdge => {
                reqParams.cfn['DataflowEdges'].push({
                    'Source': dataflowEdge[0],
                    'Destination': dataflowEdge[1]
                })
            });
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
            'logicalId': getResourceName('groundstation', obj.id, 'AWS::GroundStation::MissionProfile'),
            'region': obj.region,
            'service': 'groundstation',
            'type': 'AWS::GroundStation::MissionProfile',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.missionProfileArn,
                'GetAtt': {
                    'Arn': obj.data.missionProfileArn,
                    'Id': obj.data.missionProfileId
                }
            }
        });
    } else if (obj.type == "groundstation.config") {
        reqParams.cfn['Name'] = obj.data.name;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.tags[tagKey]
                });
            });
        }
        if (obj.data.configData) {
            var antennaDownlinkConfig = null;
            if (obj.data.configData.antennaDownlinkConfig) {
                antennaDownlinkConfig = {
                    'SpectrumConfig': {
                        'Bandwidth': {
                            'Units': obj.data.configData.antennaDownlinkConfig.spectrumConfig.bandwidth.units,
                            'Value': obj.data.configData.antennaDownlinkConfig.spectrumConfig.bandwidth.value
                        },
                        'CenterFrequency': {
                            'Units': obj.data.configData.antennaDownlinkConfig.spectrumConfig.centerFrequency.units,
                            'Value': obj.data.configData.antennaDownlinkConfig.spectrumConfig.centerFrequency.value
                        },
                        'Polarization': obj.data.configData.antennaDownlinkConfig.spectrumConfig.polarization
                    }
                };
            }
            var antennaDownlinkDemodDecodeConfig = null;
            if (obj.data.configData.antennaDownlinkDemodDecodeConfig) {
                antennaDownlinkDemodDecodeConfig = {
                    'DecodeConfig': {
                        'UnvalidatedJSON': obj.data.configData.antennaDownlinkDemodDecodeConfig.decodeConfig.unvalidatedJSON
                    },
                    'DemodulationConfig': {
                        'UnvalidatedJSON': obj.data.configData.antennaDownlinkDemodDecodeConfig.demodulationConfig.unvalidatedJSON
                    },
                    'SpectrumConfig': {
                        'Bandwidth': {
                            'Units': obj.data.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.bandwidth.units,
                            'Value': obj.data.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.bandwidth.value
                        },
                        'CenterFrequency': {
                            'Units': obj.data.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.centerFrequency.units,
                            'Value': obj.data.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.centerFrequency.value
                        },
                        'Polarization': obj.data.configData.antennaDownlinkDemodDecodeConfig.spectrumConfig.polarization
                    }
                };
            }
            var antennaUplinkConfig = null;
            if (obj.data.configData.antennaUplinkConfig) {
                antennaUplinkConfig = {
                    'TargetEirp': {
                        'Units': obj.data.configData.antennaUplinkConfig.targetEirp.units,
                        'Value': obj.data.configData.antennaUplinkConfig.targetEirp.value
                    },
                    'SpectrumConfig': {
                        'CenterFrequency': {
                            'Units': obj.data.configData.antennaUplinkConfig.spectrumConfig.centerFrequency.units,
                            'Value': obj.data.configData.antennaUplinkConfig.spectrumConfig.centerFrequency.value
                        },
                        'Polarization': obj.data.configData.antennaUplinkConfig.spectrumConfig.polarization
                    }
                };
            }
            var dataflowEndpointConfig = null;
            if (obj.data.dataflowEndpointConfig) {
                dataflowEndpointConfig = {
                    'DataflowEndpointName': obj.data.dataflowEndpointConfig.dataflowEndpointName,
                    'DataflowEndpointRegion': obj.data.dataflowEndpointConfig.dataflowEndpointRegion
                };
            }
            var trackingConfig = null;
            if (obj.data.trackingConfig) {
                trackingConfig = {
                    'AutoTrack': obj.data.trackingConfig.autotrack
                };
            }
            var uplinkEchoConfig = null;
            if (obj.data.uplinkEchoConfig) {
                uplinkEchoConfig = {
                    'AntennaUplinkConfigArn': obj.data.uplinkEchoConfig.antennaUplinkConfigArn,
                    'Enabled': obj.data.uplinkEchoConfig.enabled
                };
            }

            reqParams.cfn['ConfigData'] = {
                'AntennaDownlinkConfig': antennaDownlinkConfig,
                'AntennaDownlinkDemodDecodeConfig': antennaDownlinkDemodDecodeConfig,
                'AntennaUplinkConfig': antennaUplinkConfig,
                'DataflowEndpointConfig': dataflowEndpointConfig,
                'TrackingConfig': trackingConfig,
                'UplinkEchoConfig': uplinkEchoConfig
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('groundstation', obj.id, 'AWS::GroundStation::Config'),
            'region': obj.region,
            'service': 'groundstation',
            'type': 'AWS::GroundStation::Config',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.configArn,
                'GetAtt': {
                    'Arn': obj.data.configArn,
                    'Id': obj.data.configId
                }
            }
        });
    } else if (obj.type == "groundstation.dataflowendpointgroup") {
        if (obj.data.endpointsDetails) {
            reqParams.cfn['EndpointDetailsList'] = [];
            obj.data.endpointsDetails.forEach(endpointsDetail => {
                var dataflowendpoint = null;
                if (endpointsDetail.endpoint) {
                    dataflowendpoint = {
                        'Name': endpointsDetail.endpoint.name,
                        'Mtu': endpointsDetail.endpoint.mtu
                    };
                    if (endpointsDetail.endpoint.address) {
                        dataflowendpoint['Address'] = {
                            'Name': endpointsDetail.endpoint.address.name,
                            'Port': endpointsDetail.endpoint.address.port
                        };
                    }
                }
                var securitydetails = null;
                if (endpointsDetail.securityDetails) {
                    securitydetails = {
                        'RoleArn': endpointsDetail.securityDetails.roleArn,
                        'SecurityGroupIds': endpointsDetail.securityDetails.securityGroupIds,
                        'SubnetIds': endpointsDetail.securityDetails.subnetIds
                    };
                }
                reqParams.cfn['EndpointDetailsList'].push({
                    'DataflowEndpoint': dataflowendpoint,
                    'SecurityDetails': securitydetails
                });
            });
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
            'logicalId': getResourceName('groundstation', obj.id, 'AWS::GroundStation::DataflowEndpointGroup'),
            'region': obj.region,
            'service': 'groundstation',
            'type': 'AWS::GroundStation::DataflowEndpointGroup',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.dataflowEndpointGroupArn,
                'GetAtt': {
                    'Arn': obj.data.dataflowEndpointGroupArn,
                    'Id': obj.data.dataflowEndpointGroupId
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
