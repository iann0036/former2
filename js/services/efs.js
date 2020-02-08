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
        }
    }
});

async function updateDatatableStorageEFS() {
    blockUI('#section-storage-efs-filesystems-datatable');
    blockUI('#section-storage-efs-mounttargets-datatable');

    await sdkcall("EFS", "describeFileSystems", {
        // no params
    }, true).then(async (data) => {
        $('#section-storage-efs-filesystems-datatable').bootstrapTable('removeAll');

        await Promise.all(data.FileSystems.map(fileSystem => {
            $('#section-storage-efs-filesystems-datatable').bootstrapTable('append', [{
                f2id: fileSystem.FileSystemId,
                f2type: 'efs.filesystem',
                f2data: fileSystem,
                f2region: region,
                id: fileSystem.FileSystemId,
                creationtime: fileSystem.CreationTime,
                name: fileSystem.Name,
                size: fileSystem.SizeInBytes.Value
            }]);

            return sdkcall("EFS", "describeMountTargets", {
                FileSystemId: fileSystem.FileSystemId
            }, true).then(async (data) => {
                $('#section-storage-efs-mounttargets-datatable').bootstrapTable('removeAll');

                await Promise.all(data.MountTargets.map(mountTarget => {
                    return sdkcall("EC2", "describeNetworkInterfaces", {
                        NetworkInterfaceIds: [mountTarget.NetworkInterfaceId]
                    }, true).then((nicdata) => {
                        mountTarget['SecurityGroups'] = [];
                        nicdata.NetworkInterfaces[0].Groups.forEach(group => {
                            mountTarget['SecurityGroups'].push(group.GroupId);
                        });

                        $('#section-storage-efs-mounttargets-datatable').bootstrapTable('append', [{
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
            });
        }));

        unblockUI('#section-storage-efs-filesystems-datatable');
        unblockUI('#section-storage-efs-mounttargets-datatable');
    });
}
