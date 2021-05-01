/* ========================================================================== */
// Nimble Studio
/* ========================================================================== */

sections.push({
    'category': 'Media Services',
    'service': 'Nimble Studio',
    'resourcetypes': {
        'Studios': {
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
                        title: 'Studio ID',
                        field: 'studioid',
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
                        field: 'studioname',
                        title: 'Studio Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'displayname',
                        title: 'Display Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Studio Components': {
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
                        field: 'studioid',
                        title: 'Studio ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
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
        'Streaming Images': {
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
                        field: 'studioid',
                        title: 'Studio ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
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
        'Launch Profiles': {
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
                        field: 'studioid',
                        title: 'Studio ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
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

async function updateDatatableMediaServicesNimbleStudio() {
    blockUI('#section-mediaservices-nimblestudio-studios-datatable');
    blockUI('#section-mediaservices-nimblestudio-studiocomponents-datatable');
    blockUI('#section-mediaservices-nimblestudio-streamingimages-datatable');
    blockUI('#section-mediaservices-nimblestudio-launchprofiles-datatable');

    await sdkcall("Nimble", "listStudios", {
        // no params
    }, true).then(async (data) => {
        $('#section-mediaservices-nimblestudio-studios-datatable').deferredBootstrapTable('removeAll');
        $('#section-mediaservices-nimblestudio-studiocomponents-datatable').deferredBootstrapTable('removeAll');
        $('#section-mediaservices-nimblestudio-streamingimages-datatable').deferredBootstrapTable('removeAll');
        $('#section-mediaservices-nimblestudio-launchprofiles-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.studios.map(async (studio) => {
            await sdkcall("Nimble", "getStudio", {
                studioId: studio.studioId
            }, true).then((data) => {
                $('#section-mediaservices-nimblestudio-studios-datatable').deferredBootstrapTable('append', [{
                    f2id: data.studio.arn,
                    f2type: 'nimblestudio.studio',
                    f2data: data.studio,
                    f2region: region,
                    displayname: data.studio.displayName,
                    studioname: data.studio.studioName,
                    studioid: data.studio.studioId
                }]);
            });

            await sdkcall("Nimble", "listStudioComponents", {
                studioId: studio.studioId
            }, true).then(async (data) => {
                $('#section-mediaservices-nimblestudio-studiocomponents-datatable').deferredBootstrapTable('removeAll');
        
                await Promise.all(data.studioComponents.map(async (studiocomponent) => {
                    return sdkcall("Nimble", "getStudioComponent", {
                        studioId: studio.studioId,
                        studioComponentId: studiocomponent.studioComponentId
                    }, true).then((data) => {
                        data.studioComponent['studioId'] = studio.studioId;

                        $('#section-mediaservices-nimblestudio-studiocomponents-datatable').deferredBootstrapTable('append', [{
                            f2id: data.studioComponent.arn,
                            f2type: 'nimblestudio.studiocomponent',
                            f2data: data.studioComponent,
                            f2region: region,
                            name: data.studioComponent.name,
                            description: data.studioComponent.description,
                            studioid: data.studioComponent.studioId
                        }]);
                    });
                }));
            }).catch(() => { });

            await sdkcall("Nimble", "listStreamingImages", {
                studioId: studio.studioId
            }, true).then(async (data) => {
                $('#section-mediaservices-nimblestudio-streamingimages-datatable').deferredBootstrapTable('removeAll');
        
                await Promise.all(data.streamingImages.map(async (streamingimage) => {
                    return sdkcall("Nimble", "getStreamingImage", {
                        studioId: studio.studioId,
                        streamingImageId: streamingimage.streamingImageId
                    }, true).then((data) => {
                        data.streamingImage['studioId'] = studio.studioId;

                        $('#section-mediaservices-nimblestudio-streamingimages-datatable').deferredBootstrapTable('append', [{
                            f2id: data.streamingImage.arn,
                            f2type: 'nimblestudio.streamingimage',
                            f2data: data.streamingImage,
                            f2region: region,
                            name: data.streamingImage.name,
                            description: data.streamingImage.description,
                            studioid: data.streamingImage.studioId
                        }]);
                    });
                }));
            }).catch(() => { });

            return sdkcall("Nimble", "listLaunchProfiles", {
                studioId: studio.studioId
            }, true).then(async (data) => {
                $('#section-mediaservices-nimblestudio-launchprofiles-datatable').deferredBootstrapTable('removeAll');
        
                await Promise.all(data.launchProfiles.map(async (launchprofile) => {
                    return sdkcall("Nimble", "getLaunchProfile", {
                        studioId: studio.studioId,
                        launchProfileId: launchprofile.launchProfileId
                    }, true).then((data) => {
                        data.launchProfile['studioId'] = studio.studioId;

                        $('#section-mediaservices-nimblestudio-launchprofiles-datatable').deferredBootstrapTable('append', [{
                            f2id: data.launchProfile.arn,
                            f2type: 'nimblestudio.launchprofile',
                            f2data: data.launchProfile,
                            f2region: region,
                            name: data.launchProfile.name,
                            description: data.launchProfile.description,
                            studioid: data.launchProfile.studioId
                        }]);
                    });
                }));
            }).catch(() => { });
        }));
    }).catch(() => { });

    unblockUI('#section-mediaservices-nimblestudio-studios-datatable');
    unblockUI('#section-mediaservices-nimblestudio-studiocomponents-datatable');
    unblockUI('#section-mediaservices-nimblestudio-streamingimages-datatable');
    unblockUI('#section-mediaservices-nimblestudio-launchprofiles-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "nimblestudio.studio") {
        reqParams.cfn['AdminRoleArn'] = obj.data.adminRoleArn;
        reqParams.cfn['DisplayName'] = obj.data.displayName;
        reqParams.cfn['StudioName'] = obj.data.studioName;
        if (obj.data.studioEncryptionConfiguration) {
            reqParams.cfn['StudioEncryptionConfiguration'] = {
                'KeyArn': obj.data.studioEncryptionConfiguration.keyArn,
                'KeyType': obj.data.studioEncryptionConfiguration.keyType
            };
        }
        reqParams.cfn['UserRoleArn'] = obj.data.userRoleArn;
        reqParams.cfn['Tags'] = obj.data.tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('nimblestudio', obj.id, 'AWS::NimbleStudio::Studio'),
            'region': obj.region,
            'service': 'nimblestudio',
            'type': 'AWS::NimbleStudio::Studio',
            'options': reqParams
        });
    } else if (obj.type == "nimblestudio.studiocomponent") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['StudioId'] = obj.data.studioId;
        if (obj.data.configuration) {
            var activedirectoryconfiguration = null;
            if (obj.data.configuration.activeDirectoryConfiguration) {
                var computerattributes = null;
                if (obj.data.configuration.activeDirectoryConfiguration.computerAttributes) {
                    computerattributes = [];
                    obj.data.configuration.activeDirectoryConfiguration.computerAttributes.forEach(computerattribute => {
                        computerattributes.push({
                            'Name': computerattribute.name,
                            'Value': computerattribute.value
                        });
                    });
                }
                activedirectoryconfiguration = {
                    'ComputerAttributes': computerattributes,
                    'DirectoryId': obj.data.configuration.activeDirectoryConfiguration.directoryId,
                    'OrganizationalUnitDistinguishedName': obj.data.configuration.activeDirectoryConfiguration.organizationalUnitDistinguishedName
                };
            }
            var computefarmconfiguration = null;
            if (obj.data.configuration.computeFarmConfiguration) {
                computefarmconfiguration = {
                    'ActiveDirectoryUser': obj.data.configuration.computeFarmConfiguration.activeDirectoryUser,
                    'Endpoint': obj.data.configuration.computeFarmConfiguration.endpoint
                };
            }
            var licenseserviceconfiguration = null;
            if (obj.data.configuration.licenseServiceConfiguration) {
                licenseserviceconfiguration = {
                    'Endpoint': obj.data.configuration.licenseServiceConfiguration.endpoint
                };
            }
            var sharedfilesystemconfiguration = null;
            if (obj.data.configuration.sharedFileSystemConfiguration) {
                sharedfilesystemconfiguration = {
                    'Endpoint': obj.data.configuration.sharedFileSystemConfiguration.endpoint,
                    'FileSystemId': obj.data.configuration.sharedFileSystemConfiguration.fileSystemId,
                    'LinuxMountPoint': obj.data.configuration.sharedFileSystemConfiguration.linuxMountPoint,
                    'ShareName': obj.data.configuration.sharedFileSystemConfiguration.shareName,
                    'WindowsMountDrive': obj.data.configuration.sharedFileSystemConfiguration.windowsMountDrive
                };
            }

            reqParams.cfn['Configuration'] = {
                'ActiveDirectoryConfiguration': activedirectoryconfiguration,
                'ComputeFarmConfiguration': computefarmconfiguration,
                'LicenseServiceConfiguration': licenseserviceconfiguration,
                'SharedFileSystemConfiguration': sharedfilesystemconfiguration
            };
        }
        reqParams.cfn['Ec2SecurityGroupIds'] = obj.data.ec2SecurityGroupIds;
        if (obj.data.initializationScripts) {
            reqParams.cfn['InitializationScripts'] = [];
            obj.data.initializationScripts.forEach(initializationscript => {
                reqParams.cfn['InitializationScripts'].push({
                    'LaunchProfileProtocolVersion': initializationscript.launchProfileProtocolVersion,
                    'Platform': initializationscript.platform,
                    'RunContext': initializationscript.runContext,
                    'Script': initializationscript.script
                });
            });
        }
        if (obj.data.scriptParameters) {
            reqParams.cfn['ScriptParameters'] = [];
            obj.data.scriptParameters.forEach(scriptparameter => {
                reqParams.cfn['ScriptParameters'].push({
                    'Key': scriptparameter.key,
                    'Value': scriptparameter.value
                });
            });
        }
        reqParams.cfn['Subtype'] = obj.data.subtype;
        reqParams.cfn['Tags'] = obj.data.tags;
        reqParams.cfn['Type'] = obj.data.type;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('nimblestudio', obj.id, 'AWS::NimbleStudio::StudioComponent'),
            'region': obj.region,
            'service': 'nimblestudio',
            'type': 'AWS::NimbleStudio::StudioComponent',
            'options': reqParams
        });
    } else if (obj.type == "nimblestudio.streamingimage") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['Ec2ImageId'] = obj.data.ec2ImageId;
        reqParams.cfn['StudioId'] = obj.data.studioId;
        reqParams.cfn['Tags'] = obj.data.tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('nimblestudio', obj.id, 'AWS::NimbleStudio::StreamingImage'),
            'region': obj.region,
            'service': 'nimblestudio',
            'type': 'AWS::NimbleStudio::StreamingImage',
            'options': reqParams
        });
    } else if (obj.type == "nimblestudio.launchprofile") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['Ec2SubnetIds'] = obj.data.ec2SubnetIds;
        reqParams.cfn['StudioId'] = obj.data.studioId;
        reqParams.cfn['LaunchProfileProtocolVersions'] = obj.data.launchProfileProtocolVersions;
        if (obj.data.streamConfiguration) {
            reqParams.cfn['StreamConfiguration'] = {
                'ClipboardMode': obj.data.streamConfiguration.clipboardMode,
                'Ec2InstanceTypes': obj.data.streamConfiguration.ec2InstanceTypes,
                'MaxSessionLengthInMinutes': obj.data.streamConfiguration.maxSessionLengthInMinutes,
                'StreamingImageIds': obj.data.streamConfiguration.streamingImageIds
            };
        }
        reqParams.cfn['StudioComponentIds'] = obj.data.studioComponentIds;
        reqParams.cfn['Tags'] = obj.data.tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('nimblestudio', obj.id, 'AWS::NimbleStudio::LaunchProfile'),
            'region': obj.region,
            'service': 'nimblestudio',
            'type': 'AWS::NimbleStudio::LaunchProfile',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
