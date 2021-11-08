/* ========================================================================== */
// Device Farm
/* ========================================================================== */

sections.push({
    'category': 'Mobile',
    'service': 'Device Farm',
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
        'Device Pools': {
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
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Instance Profiles': {
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
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Network Profiles': {
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
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Test Grid Projects': {
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
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'VPC Endpoint Configurations': {
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
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'servicename',
                        title: 'Service Name',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableMobileDeviceFarm() {
    blockUI('#section-mobile-devicefarm-projects-datatable');
    blockUI('#section-mobile-devicefarm-devicepools-datatable');
    blockUI('#section-mobile-devicefarm-instanceprofiles-datatable');
    blockUI('#section-mobile-devicefarm-networkprofiles-datatable');
    blockUI('#section-mobile-devicefarm-testgridprojects-datatable');
    blockUI('#section-mobile-devicefarm-vpcendpointconfigurations-datatable');

    await sdkcall("DeviceFarm", "listProjects", {
        // no params
    }, false).then(async (data) => {
        $('#section-mobile-devicefarm-projects-datatable').deferredBootstrapTable('removeAll');
        $('#section-mobile-devicefarm-devicepools-datatable').deferredBootstrapTable('removeAll');
        $('#section-mobile-devicefarm-networkprofiles-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.projects.map(async (project) => {
            await sdkcall("DeviceFarm", "getProject", {
                arn: project.arn
            }, false).then((data) => {
                $('#section-mobile-devicefarm-projects-datatable').deferredBootstrapTable('append', [{
                    f2id: data.project.arn,
                    f2type: 'devicefarm.project',
                    f2data: data.project,
                    f2region: region,
                    name: data.project.name,
                    creationtime: data.created
                }]);
            });

            await sdkcall("DeviceFarm", "listDevicePools", {
                arn: project.arn,
                Type: "PRIVATE"
            }, false).then(async (data) => {
                await Promise.all(data.devicePools.map(async (devicePool) => {
                    await sdkcall("DeviceFarm", "getDevicePool", {
                        arn: devicePool.arn
                    }, false).then((data) => {
                        data.devicePool['projectArn'] = project.arn;

                        $('#section-mobile-devicefarm-devicepools-datatable').deferredBootstrapTable('append', [{
                            f2id: data.devicePool.arn,
                            f2type: 'devicefarm.devicepool',
                            f2data: data.devicePool,
                            f2region: region,
                            name: data.devicePool.name,
                            description: data.devicePool.description
                        }]);
                    });
                }));
            }).catch(() => { });

            return sdkcall("DeviceFarm", "listNetworkProfiles", {
                arn: project.arn,
                type: "PRIVATE"
            }, false).then(async (data) => {
                await Promise.all(data.networkProfiles.map(networkProfile => {
                    return sdkcall("DeviceFarm", "getDevicePool", {
                        arn: networkProfile.arn
                    }, false).then((data) => {
                        data.networkProfile['projectArn'] = project.arn;

                        $('#section-mobile-devicefarm-networkprofiles-datatable').deferredBootstrapTable('append', [{
                            f2id: data.networkProfile.arn,
                            f2type: 'devicefarm.networkprofile',
                            f2data: data.networkProfile,
                            f2region: region,
                            name: data.networkProfile.name,
                            description: data.networkProfile.description
                        }]);
                    });
                }));
            }).catch(() => { });
        }));
    }).catch(() => { });

    await sdkcall("DeviceFarm", "listInstanceProfiles", {
        // no params
    }, false).then(async (data) => {
        $('#section-mobile-devicefarm-instanceprofiles-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.instanceProfiles.map(instanceProfile => {
            return sdkcall("DeviceFarm", "getDevicePool", {
                arn: instanceProfile.arn
            }, false).then((data) => {
                $('#section-mobile-devicefarm-instanceprofiles-datatable').deferredBootstrapTable('append', [{
                    f2id: data.instanceProfile.arn,
                    f2type: 'devicefarm.instanceprofile',
                    f2data: data.instanceProfile,
                    f2region: region,
                    name: data.instanceProfile.name,
                    description: data.instanceProfile.description
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("DeviceFarm", "listTestGridProjects", {
        // no params
    }, false).then(async (data) => {
        $('#section-mobile-devicefarm-testgridprojects-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.testGridProjects.map(testGridProject => {
            return sdkcall("DeviceFarm", "getTestGridProject", {
                projectArn: testGridProject.arn
            }, false).then((data) => {
                $('#section-mobile-devicefarm-testgridprojects-datatable').deferredBootstrapTable('append', [{
                    f2id: data.instanceProfile.arn,
                    f2type: 'devicefarm.testgridproject',
                    f2data: data.instanceProfile,
                    f2region: region,
                    name: data.instanceProfile.name,
                    description: data.instanceProfile.description
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("DeviceFarm", "listVPCEConfigurations", {
        // no params
    }, false).then(async (data) => {
        $('#section-mobile-devicefarm-vpcendpointconfigurations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.vpceConfigurations.map(vpceConfiguration => {
            return sdkcall("DeviceFarm", "getVPCEConfiguration", {
                arn: vpceConfiguration.arn
            }, false).then((data) => {
                $('#section-mobile-devicefarm-vpcendpointconfigurations-datatable').deferredBootstrapTable('append', [{
                    f2id: data.vpceConfiguration.arn,
                    f2type: 'devicefarm.vpcendpointconfiguration',
                    f2data: data.vpceConfiguration,
                    f2region: region,
                    name: data.vpceConfiguration.vpceConfigurationName,
                    description: data.vpceConfiguration.vpceConfigurationDescription,
                    servicename: data.vpceConfiguration.vpceServiceName
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-mobile-devicefarm-projects-datatable');
    unblockUI('#section-mobile-devicefarm-devicepools-datatable');
    unblockUI('#section-mobile-devicefarm-instanceprofiles-datatable');
    unblockUI('#section-mobile-devicefarm-networkprofiles-datatable');
    unblockUI('#section-mobile-devicefarm-testgridprojects-datatable');
    unblockUI('#section-mobile-devicefarm-vpcendpointconfigurations-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "devicefarm.project") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.tf['name'] = obj.data.name;
        reqParams.cfn['DefaultJobTimeoutMinutes'] = obj.data.defaultJobTimeoutMinutes;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('devicefarm', obj.id, 'AWS::DeviceFarm::Project'),
            'region': obj.region,
            'service': 'devicefarm',
            'type': 'AWS::DeviceFarm::Project',
            'terraformType': 'aws_devicefarm_project',
            'options': reqParams
        });
    } else if (obj.type == "devicefarm.devicepool") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['ProjectArn'] = obj.data.projectArn;
        reqParams.cfn['MaxDevices'] = obj.data.maxDevices;
        if (obj.data.rules) {
            reqParams.cfn['Rules'] = [];
            obj.data.rules.forEach(rule => {
                reqParams.cfn['Rules'].push({
                    'Attribute': rule.attribute,
                    'Operator': rule.operator,
                    'Value': rule.value
                });
            });
        }

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('devicefarm', obj.id, 'AWS::DeviceFarm::DevicePool'),
            'region': obj.region,
            'service': 'devicefarm',
            'type': 'AWS::DeviceFarm::DevicePool',
            'options': reqParams
        });
    } else if (obj.type == "devicefarm.instanceprofile") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['PackageCleanup'] = obj.data.packageCleanup;
        reqParams.cfn['ExcludeAppPackagesFromCleanup'] = obj.data.excludeAppPackagesFromCleanup;
        reqParams.cfn['RebootAfterUse'] = obj.data.rebootAfterUse;

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('devicefarm', obj.id, 'AWS::DeviceFarm::InstanceProfile'),
            'region': obj.region,
            'service': 'devicefarm',
            'type': 'AWS::DeviceFarm::InstanceProfile',
            'options': reqParams
        });
    } else if (obj.type == "devicefarm.networkprofile") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['ProjectArn'] = obj.data.projectArn;
        reqParams.cfn['UplinkBandwidthBits'] = obj.data.uplinkBandwidthBits;
        reqParams.cfn['DownlinkBandwidthBits'] = obj.data.downlinkBandwidthBits;
        reqParams.cfn['UplinkDelayMs'] = obj.data.uplinkDelayMs;
        reqParams.cfn['DownlinkDelayMs'] = obj.data.downlinkDelayMs;
        reqParams.cfn['UplinkJitterMs'] = obj.data.uplinkJitterMs;
        reqParams.cfn['DownlinkJitterMs'] = obj.data.downlinkJitterMs;
        reqParams.cfn['UplinkLossPercent'] = obj.data.uplinkLossPercent;
        reqParams.cfn['DownlinkLossPercent'] = obj.data.downlinkLossPercent;

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('devicefarm', obj.id, 'AWS::DeviceFarm::NetworkProfile'),
            'region': obj.region,
            'service': 'devicefarm',
            'type': 'AWS::DeviceFarm::NetworkProfile',
            'options': reqParams
        });
    } else if (obj.type == "devicefarm.testgridproject") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        if (obj.data.vpcConfig) {
            reqParams.cfn['VpcConfig'] = {
                'SecurityGroupIds': obj.data.vpcConfig.securityGroupIds,
                'SubnetIds': obj.data.vpcConfig.subnetIds,
                'VpcId': obj.data.vpcConfig.vpcId
            };
        }

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('devicefarm', obj.id, 'AWS::DeviceFarm::TestGridProject'),
            'region': obj.region,
            'service': 'devicefarm',
            'type': 'AWS::DeviceFarm::TestGridProject',
            'options': reqParams
        });
    } else if (obj.type == "devicefarm.vpcendpointconfiguration") {
        reqParams.cfn['VpceConfigurationName'] = obj.data.vpceConfigurationName;
        reqParams.cfn['VpceConfigurationDescription'] = obj.data.vpceConfigurationDescription;
        reqParams.cfn['VpceServiceName'] = obj.data.vpceServiceName;
        reqParams.cfn['ServiceDnsName'] = obj.data.serviceDnsName;

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('devicefarm', obj.id, 'AWS::DeviceFarm::VPCEConfiguration'),
            'region': obj.region,
            'service': 'devicefarm',
            'type': 'AWS::DeviceFarm::VPCEConfiguration',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
