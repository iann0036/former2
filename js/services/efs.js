/* ========================================================================== */
// EFS
/* ========================================================================== */

sections.push({
    'category': 'Storage',
    'service': 'EFS',
    'resourcetypes': {
        'File Systems': {
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
                        title: 'Filesystem ID',
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
                        field: 'size',
                        title: 'Size',
                        sortable: true,
                        editable: true,
                        formatter: byteSizeFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
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
        'Mount Targets': {
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
                        title: 'Mount Target ID',
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
                        field: 'filesystemid',
                        title: 'File System ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'subnetid',
                        title: 'Subnet ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'ipaddress',
                        title: 'IP Address',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Access Points': {
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
                        title: 'Access Point ID',
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
                        field: 'filesystemid',
                        title: 'File System ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'name',
                        title: 'Name',
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

async function updateDatatableStorageEFS() {
    blockUI('#section-storage-efs-filesystems-datatable');
    blockUI('#section-storage-efs-mounttargets-datatable');
    blockUI('#section-storage-efs-accesspoints-datatable');

    await sdkcall("EFS", "describeFileSystems", {
        // no params
    }, true).then(async (data) => {
        $('#section-storage-efs-filesystems-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.FileSystems.map(async (fileSystem) => {
            await sdkcall("EFS", "describeFileSystemPolicy", {
                FileSystemId: fileSystem.FileSystemId
            }, false).then(async (policydata) => {
                fileSystem['BackupPolicy'] = policydata.BackupPolicy;
            }).catch(err => { });

            await sdkcall("EFS", "describeBackupPolicy", {
                FileSystemId: fileSystem.FileSystemId
            }, false).then(async (policydata) => {
                fileSystem['FileSystemPolicy'] = policydata.Policy;
            }).catch(err => { });

            $('#section-storage-efs-filesystems-datatable').deferredBootstrapTable('append', [{
                f2id: fileSystem.FileSystemId,
                f2type: 'efs.filesystem',
                f2data: fileSystem,
                f2region: region,
                id: fileSystem.FileSystemId,
                creationtime: fileSystem.CreationTime,
                name: fileSystem.Name,
                size: fileSystem.SizeInBytes.Value
            }]);

            return Promise.all([
                sdkcall("EFS", "describeMountTargets", {
                    FileSystemId: fileSystem.FileSystemId
                }, true).then(async (data) => {
                    $('#section-storage-efs-mounttargets-datatable').deferredBootstrapTable('removeAll');

                    await Promise.all(data.MountTargets.map(mountTarget => {
                        return sdkcall("EC2", "describeNetworkInterfaces", {
                            NetworkInterfaceIds: [mountTarget.NetworkInterfaceId]
                        }, true).then((nicdata) => {
                            mountTarget['SecurityGroups'] = [];
                            nicdata.NetworkInterfaces[0].Groups.forEach(group => {
                                mountTarget['SecurityGroups'].push(group.GroupId);
                            });

                            $('#section-storage-efs-mounttargets-datatable').deferredBootstrapTable('append', [{
                                f2id: mountTarget.MountTargetId,
                                f2type: 'efs.mounttarget',
                                f2data: mountTarget,
                                f2region: region,
                                id: mountTarget.MountTargetId,
                                filesystemid: mountTarget.FileSystemId,
                                subnetid: mountTarget.SubnetId,
                                ipaddress: mountTarget.IpAddress
                            }]);
                        });
                    }));
                }),
                sdkcall("EFS", "describeAccessPoints", {
                    FileSystemId: fileSystem.FileSystemId
                }, false).then((apdata) => {
                    apdata.AccessPoints.forEach(ap => {
                        $('#section-storage-efs-accesspoints-datatable').deferredBootstrapTable('append', [{
                            f2id: ap.AccessPointArn,
                            f2type: 'efs.accesspoint',
                            f2data: ap,
                            f2region: region,
                            id: ap.AccessPointId,
                            filesystemid: ap.FileSystemId,
                            name: ap.Name
                        }]);
                    });
                }).catch(() => { })
            ]);
        }));

        unblockUI('#section-storage-efs-filesystems-datatable');
        unblockUI('#section-storage-efs-mounttargets-datatable');
        unblockUI('#section-storage-efs-accesspoints-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "efs.filesystem") {
        reqParams.cfn['PerformanceMode'] = obj.data.PerformanceMode;
        reqParams.tf['performance_mode'] = obj.data.PerformanceMode;
        reqParams.cfn['Encrypted'] = obj.data.Encrypted;
        reqParams.tf['encrypted'] = obj.data.Encrypted;
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        reqParams.tf['kms_key_id'] = obj.data.KmsKeyId;
        reqParams.cfn['ThroughputMode'] = obj.data.ThroughputMode;
        reqParams.tf['throughput_mode'] = obj.data.ThroughputMode;
        reqParams.cfn['ProvisionedThroughputInMibps'] = obj.data.ProvisionedThroughputInMibps;
        reqParams.tf['provisioned_throughput_in_mibps'] = obj.data.ProvisionedThroughputInMibps;
        reqParams.cfn['FileSystemTags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }
        reqParams.cfn['FileSystemPolicy'] = obj.data.FileSystemPolicy;
        reqParams.cfn['BackupPolicy'] = obj.data.BackupPolicy;
        reqParams.cfn['AvailabilityZoneName'] = obj.data.AvailabilityZoneName;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('efs', obj.id, 'AWS::EFS::FileSystem'),
            'region': obj.region,
            'service': 'efs',
            'type': 'AWS::EFS::FileSystem',
            'terraformType': 'aws_efs_file_system',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.FileSystemId
            }
        });
    } else if (obj.type == "efs.mounttarget") {
        reqParams.cfn['FileSystemId'] = obj.data.FileSystemId;
        reqParams.tf['file_system_id'] = obj.data.FileSystemId;
        reqParams.cfn['IpAddress'] = obj.data.IpAddress;
        reqParams.tf['ip_address'] = obj.data.IpAddress;
        reqParams.cfn['SecurityGroups'] = obj.data.SecurityGroups;
        reqParams.tf['security_groups'] = obj.data.SecurityGroups;
        reqParams.cfn['SubnetId'] = obj.data.SubnetId;
        reqParams.tf['subnet_id'] = obj.data.SubnetId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('efs', obj.id, 'AWS::EFS::MountTarget'),
            'region': obj.region,
            'service': 'efs',
            'type': 'AWS::EFS::MountTarget',
            'terraformType': 'aws_efs_mount_target',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.MountTargetId,
                'GetAtt': {
                    'IpAddress': obj.data.IpAddress
                }
            }
        });
    } else if (obj.type == "efs.accesspoint") {
        reqParams.cfn['FileSystemId'] = obj.data.FileSystemId;
        reqParams.cfn['ClientToken'] = obj.data.ClientToken;
        reqParams.cfn['AccessPointTags'] = obj.data.Tags;
        reqParams.cfn['PosixUser'] = obj.data.PosixUser;
        reqParams.cfn['RootDirectory'] = obj.data.RootDirectory;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('efs', obj.id, 'AWS::EFS::AccessPoint'),
            'region': obj.region,
            'service': 'efs',
            'type': 'AWS::EFS::AccessPoint',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.AccessPoint,
                'GetAtt': {
                    'AccessPointId': obj.data.AccessPointId,
                    'Arn': obj.data.AccessPointArn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
