/* ========================================================================== */
// FSx
/* ========================================================================== */

sections.push({
    'category': 'Storage',
    'service': 'FSx',
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
                        title: 'File System ID',
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
                        field: 'dnsname',
                        title: 'DNS Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'filesystemtype',
                        title: 'File System Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'storagecapacity',
                        title: 'Storage Capacity',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'vpcid',
                        title: 'VPC ID',
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

async function updateDatatableStorageFSx() {
    blockUI('#section-storage-fsx-filesystems-datatable');

    await sdkcall("FSx", "describeFileSystems", {
        // no params
    }, true).then((data) => {
        $('#section-storage-fsx-filesystems-datatable').bootstrapTable('removeAll');

        data.FileSystems.forEach(fileSystem => {
            $('#section-storage-fsx-filesystems-datatable').bootstrapTable('append', [{
                f2id: fileSystem.ResourceARN,
                f2type: 'fsx.filesystem',
                f2data: fileSystem,
                f2region: region,
                id: fileSystem.FileSystemId,
                dnsname: fileSystem.DNSName,
                storagecapacity: fileSystem.StorageCapacity + " GB",
                vpcid: fileSystem.VpcId,
                filesystemtype: fileSystem.FileSystemType
            }]);
        });
    }).catch(() => { });

    unblockUI('#section-storage-fsx-filesystems-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
