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
        $('#section-storage-fsx-filesystems-datatable').deferredBootstrapTable('removeAll');

        data.FileSystems.forEach(fileSystem => {
            $('#section-storage-fsx-filesystems-datatable').deferredBootstrapTable('append', [{
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
    if (obj.type == "fsx.filesystem") {
        reqParams.cfn['FileSystemType'] = obj.data.FileSystemType;
        reqParams.cfn['StorageCapacity'] = obj.data.StorageCapacity;
        reqParams.cfn['SubnetIds'] = obj.data.SubnetIds;
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.WindowsConfiguration) {
            var adconfig = obj.data.WindowsConfiguration.SelfManagedActiveDirectoryConfiguration;
            adconfig['Password'] = "REPLACEME";
            var aliases = null;
            if (obj.data.WindowsConfiguration.Aliases) {
                aliases = [];
                obj.data.WindowsConfiguration.Aliases.forEach(alias => {
                    aliases.push(alias.Name);
                });
            }
            reqParams.cfn['WindowsConfiguration'] = {
                'ActiveDirectoryId': obj.data.WindowsConfiguration.ActiveDirectoryId,
                'AutomaticBackupRetentionDays': obj.data.WindowsConfiguration.AutomaticBackupRetentionDays,
                'CopyTagsToBackups': obj.data.WindowsConfiguration.CopyTagsToBackups,
                'DailyAutomaticBackupStartTime': obj.data.WindowsConfiguration.DailyAutomaticBackupStartTime,
                'ThroughputCapacity': obj.data.WindowsConfiguration.ThroughputCapacity,
                'WeeklyMaintenanceStartTime': obj.data.WindowsConfiguration.WeeklyMaintenanceStartTime,
                'DeploymentType': obj.data.WindowsConfiguration.DeploymentType,
                'PreferredSubnetId': obj.data.WindowsConfiguration.PreferredSubnetId,
                'SelfManagedActiveDirectoryConfiguration': adconfig,
                'Aliases': aliases
            };
        }
        if (obj.data.LustreConfiguration) {
            reqParams.cfn['LustreConfiguration'] = {
                'AutoImportPolicyType': obj.data.LustreConfiguration.DataRepositoryConfiguration.AutoImportPolicy,
                'ExportPath': obj.data.LustreConfiguration.DataRepositoryConfiguration.ExportPath,
                'ImportedFileChunkSize': obj.data.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize,
                'ImportPath': obj.data.LustreConfiguration.DataRepositoryConfiguration.ImportPath,
                'WeeklyMaintenanceStartTime': obj.data.LustreConfiguration.WeeklyMaintenanceStartTime,
                'DeploymentType': obj.data.LustreConfiguration.DeploymentType,
                'PerUnitStorageThroughput': obj.data.LustreConfiguration.PerUnitStorageThroughput,
                'DailyAutomaticBackupStartTime': obj.data.LustreConfiguration.DailyAutomaticBackupStartTime,
                'CopyTagsToBackups': obj.data.LustreConfiguration.CopyTagsToBackups,
                'DriveCacheType': obj.data.LustreConfiguration.DriveCacheType,
                'AutomaticBackupRetentionDays': obj.data.LustreConfiguration.AutomaticBackupRetentionDays
            };
        }
        reqParams.cfn['StorageType'] = obj.data.StorageType;

        /*
        TODO:
        BackupId: String
        SecurityGroupIds: 
            - String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('fsx', obj.id, 'AWS::FSx::FileSystem'),
            'region': obj.region,
            'service': 'fsx',
            'type': 'AWS::FSx::FileSystem',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.FileSystemId
            }
        });
    } else {
        return false;
    }

    return true;
});
