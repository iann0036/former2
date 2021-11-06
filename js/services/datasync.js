/* ========================================================================== */
// DataSync
/* ========================================================================== */

sections.push({
    'category': 'Migration &amp; Transfer',
    'service': 'DataSync',
    'resourcetypes': {
        'Agents': {
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
                        field: 'status',
                        title: 'Status',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'endpointtype',
                        title: 'Endpoint Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Tasks': {
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
                        field: 'status',
                        title: 'Status',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'destinationlocationarn',
                        title: 'Destination Location ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'EFS Locations': {
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
                        title: 'URI',
                        field: 'uri',
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
        'NFS Locations': {
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
                        title: 'URI',
                        field: 'uri',
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
        'S3 Locations': {
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
                        title: 'URI',
                        field: 'uri',
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
        'FSx Windows Locations': {
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
                        title: 'URI',
                        field: 'uri',
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
        'SMB Locations': {
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
                        title: 'URI',
                        field: 'uri',
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
        'Object Storage Locations': {
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
                        title: 'URI',
                        field: 'uri',
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
        'HDFS Locations': {
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
                        title: 'URI',
                        field: 'uri',
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
        }
    }
});

async function updateDatatableMigrationAndTransferDataSync() {
    blockUI('#section-migrationandtransfer-datasync-agents-datatable');
    blockUI('#section-migrationandtransfer-datasync-tasks-datatable');
    blockUI('#section-migrationandtransfer-datasync-efslocations-datatable');
    blockUI('#section-migrationandtransfer-datasync-nfslocations-datatable');
    blockUI('#section-migrationandtransfer-datasync-s3locations-datatable');
    blockUI('#section-migrationandtransfer-datasync-fsxwindowslocations-datatable');
    blockUI('#section-migrationandtransfer-datasync-smblocations-datatable');
    blockUI('#section-migrationandtransfer-datasync-objectstoragelocations-datatable');
    blockUI('#section-migrationandtransfer-datasync-hdfslocations-datatable');

    await sdkcall("DataSync", "listAgents", {
        // no params
    }, true).then(async (data) => {
        $('#section-migrationandtransfer-datasync-agents-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Agents.map(agent => {
            return sdkcall("DataSync", "describeAgent", {
                AgentArn: agent.AgentArn
            }, true).then((data) => {
                $('#section-migrationandtransfer-datasync-agents-datatable').deferredBootstrapTable('append', [{
                    f2id: data.AgentArn,
                    f2type: 'datasync.agent',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    status: data.Status,
                    endpointtype: data.EndpointType
                }]);
            });
        }));
    });

    await sdkcall("DataSync", "listTasks", {
        // no params
    }, true).then(async (data) => {
        $('#section-migrationandtransfer-datasync-tasks-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Tasks.map(task => {
            return sdkcall("DataSync", "describeTask", {
                TaskArn: task.TaskArn
            }, true).then((data) => {
                $('#section-migrationandtransfer-datasync-tasks-datatable').deferredBootstrapTable('append', [{
                    f2id: data.TaskArn,
                    f2type: 'datasync.task',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    status: data.Status,
                    destinationlocationarn: data.DestinationLocationArn
                }]);
            });
        }));
    });

    await sdkcall("DataSync", "listLocations", {
        // no params
    }, true).then(async (data) => {
        $('#section-migrationandtransfer-datasync-efslocations-datatable').deferredBootstrapTable('removeAll');
        $('#section-migrationandtransfer-datasync-nfslocations-datatable').deferredBootstrapTable('removeAll');
        $('#section-migrationandtransfer-datasync-s3locations-datatable').deferredBootstrapTable('removeAll');
        $('#section-migrationandtransfer-datasync-fsxwindowslocations-datatable').deferredBootstrapTable('removeAll');
        $('#section-migrationandtransfer-datasync-smblocations-datatable').deferredBootstrapTable('removeAll');
        $('#section-migrationandtransfer-datasync-objectstoragelocations-datatable').deferredBootstrapTable('removeAll');
        $('#section-migrationandtransfer-datasync-hdfslocations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Locations.map(location => {
            if (!location.LocationUri) {
                return Promise.resolve();
            }
            if (location.LocationUri.split(":")[0].toUpperCase() == "EFS") {
                return sdkcall("DataSync", "describeLocationEfs", {
                    LocationArn: location.LocationArn
                }, true).then((data) => {
                    $('#section-migrationandtransfer-datasync-efslocations-datatable').deferredBootstrapTable('append', [{
                        f2id: data.LocationArn,
                        f2type: 'datasync.locationefs',
                        f2data: data,
                        f2region: region,
                        uri: data.LocationUri,
                        creationtime: data.CreationTime
                    }]);
                });
            } else if (location.LocationUri.split(":")[0].toUpperCase() == "NFS") {
                return sdkcall("DataSync", "describeLocationNfs", {
                    LocationArn: location.LocationArn
                }, true).then((data) => {
                    $('#section-migrationandtransfer-datasync-nfslocations-datatable').deferredBootstrapTable('append', [{
                        f2id: data.LocationArn,
                        f2type: 'datasync.locationnfs',
                        f2data: data,
                        f2region: region,
                        uri: data.LocationUri,
                        creationtime: data.CreationTime
                    }]);
                });
            } else if (location.LocationUri.split(":")[0].toUpperCase() == "S3") {
                return sdkcall("DataSync", "describeLocationS3", {
                    LocationArn: location.LocationArn
                }, true).then((data) => {
                    $('#section-migrationandtransfer-datasync-s3locations-datatable').deferredBootstrapTable('append', [{
                        f2id: data.LocationArn,
                        f2type: 'datasync.locations3',
                        f2data: data,
                        f2region: region,
                        uri: data.LocationUri,
                        creationtime: data.CreationTime
                    }]);
                });
            } else if (location.LocationUri.split(":")[0].toUpperCase() == "FSXW") {
                return sdkcall("DataSync", "describeLocationFsxWindows", {
                    LocationArn: location.LocationArn
                }, true).then((data) => {
                    $('#section-migrationandtransfer-datasync-fsxwindowslocations-datatable').deferredBootstrapTable('append', [{
                        f2id: data.LocationArn,
                        f2type: 'datasync.locationfsxwindows',
                        f2data: data,
                        f2region: region,
                        uri: data.LocationUri,
                        creationtime: data.CreationTime
                    }]);
                });
            } else if (location.LocationUri.split(":")[0].toUpperCase() == "SMB") {
                return sdkcall("DataSync", "describeLocationSmb", {
                    LocationArn: location.LocationArn
                }, true).then((data) => {
                    $('#section-migrationandtransfer-datasync-smblocations-datatable').deferredBootstrapTable('append', [{
                        f2id: data.LocationArn,
                        f2type: 'datasync.locationsmb',
                        f2data: data,
                        f2region: region,
                        uri: data.LocationUri,
                        creationtime: data.CreationTime
                    }]);
                });
            } else if (location.LocationUri.split(":")[0].toUpperCase() == "HTTP" || location.LocationUri.split(":")[0].toUpperCase() == "HTTPS") {
                return sdkcall("DataSync", "describeLocationObjectStorage", {
                    LocationArn: location.LocationArn
                }, true).then((data) => {
                    $('#section-migrationandtransfer-datasync-objectstoragelocations-datatable').deferredBootstrapTable('append', [{
                        f2id: data.LocationArn,
                        f2type: 'datasync.locationobjectstorage',
                        f2data: data,
                        f2region: region,
                        uri: data.LocationUri,
                        creationtime: data.CreationTime
                    }]);
                });
            } else if (location.LocationUri.split(":")[0].toUpperCase() == "HDFS") {
                return sdkcall("DataSync", "describeLocationHdfs", {
                    LocationArn: location.LocationArn
                }, true).then((data) => {
                    $('#section-migrationandtransfer-datasync-hdfslocations-datatable').deferredBootstrapTable('append', [{
                        f2id: data.LocationArn,
                        f2type: 'datasync.locationhdfs',
                        f2data: data,
                        f2region: region,
                        uri: data.LocationUri,
                        creationtime: data.CreationTime
                    }]);
                });
            } else {
                return Promise.resolve();
            }
        }));
    });

    unblockUI('#section-migrationandtransfer-datasync-agents-datatable');
    unblockUI('#section-migrationandtransfer-datasync-tasks-datatable');
    unblockUI('#section-migrationandtransfer-datasync-efslocations-datatable');
    unblockUI('#section-migrationandtransfer-datasync-nfslocations-datatable');
    unblockUI('#section-migrationandtransfer-datasync-s3locations-datatable');
    unblockUI('#section-migrationandtransfer-datasync-fsxwindowslocations-datatable');
    unblockUI('#section-migrationandtransfer-datasync-smblocations-datatable');
    unblockUI('#section-migrationandtransfer-datasync-objectstoragelocations-datatable');
    unblockUI('#section-migrationandtransfer-datasync-hdfslocations-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "datasync.agent") {
        reqParams.cfn['name'] = obj.data.Name;
        reqParams.tf['AgentName'] = obj.data.Name;
        reqParams.cfn['ActivationKey'] = "REPLACEME";
        reqParams.tf['activation_key'] = "REPLACEME";
        reqParams.tf['ip_address'] = "REPLACEME";
        if (obj.data.PrivateLinkConfig) {
            reqParams.cfn['SecurityGroupArns'] = obj.data.PrivateLinkConfig.SecurityGroupArns;
            reqParams.cfn['SubnetArns'] = obj.data.PrivateLinkConfig.SubnetArns;
            reqParams.cfn['VpcEndpointId'] = obj.data.PrivateLinkConfig.VpcEndpointId;
        }

        /*
        TODO:
        Tags: 
            - Tag

        tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('datasync', obj.id, 'AWS::DataSync::Agent'),
            'region': obj.region,
            'service': 'datasync',
            'type': 'AWS::DataSync::Agent',
            'terraformType': 'aws_datasync_agent',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.AgentArn
            }
        });
    } else if (obj.type == "datasync.task") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['SourceLocationArn'] = obj.data.SourceLocationArn;
        reqParams.tf['source_location_arn'] = obj.data.SourceLocationArn;
        reqParams.cfn['DestinationLocationArn'] = obj.data.DestinationLocationArn;
        reqParams.tf['destination_location_arn'] = obj.data.DestinationLocationArn;
        reqParams.cfn['CloudWatchLogGroupArn'] = obj.data.CloudWatchLogGroupArn;
        reqParams.tf['cloudwatch_log_group_arn'] = obj.data.CloudWatchLogGroupArn;
        if (obj.data.Options) {
            reqParams.cfn['Options'] = {
                'Atime': obj.data.Options.Atime,
                'BytesPerSecond': obj.data.Options.BytesPerSecond,
                'Gid': obj.data.Options.Gid,
                'LogLevel': obj.data.Options.LogLevel,
                'Mtime': obj.data.Options.Mtime,
                'OverwriteMode': obj.data.Options.OverwriteMode,
                'PosixPermissions': obj.data.Options.PosixPermissions,
                'PreserveDeletedFiles': obj.data.Options.PreserveDeletedFiles,
                'PreserveDevices': obj.data.Options.PreserveDevices,
                'TaskQueueing': obj.data.Options.TaskQueueing,
                'TransferMode': obj.data.Options.TransferMode,
                'Uid': obj.data.Options.Uid,
                'VerifyMode': obj.data.Options.VerifyMode
            };
            reqParams.tf['options'] = {
                'atime': obj.data.Options.Atime,
                'bytes_per_second': obj.data.Options.BytesPerSecond,
                'gid': obj.data.Options.Gid,
                'mtime': obj.data.Options.Mtime,
                'posix_permissions': obj.data.Options.PosixPermissions,
                'preserve_deleted_files': obj.data.Options.PreserveDeletedFiles,
                'preserve_devices': obj.data.Options.PreserveDevices,
                'uid': obj.data.Options.Uid,
                'verify_mode': obj.data.Options.VerifyMode
            };
        }
        reqParams.cfn['Excludes'] = obj.data.Excludes;
        reqParams.cfn['Includes'] = obj.data.Includes;
        reqParams.cfn['Schedule'] = obj.data.Schedule;

        /*
        TODO:
        Tags: 
            - Tag

        tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('datasync', obj.id, 'AWS::DataSync::Task'),
            'region': obj.region,
            'service': 'datasync',
            'type': 'AWS::DataSync::Task',
            'terraformType': 'aws_datasync_task',
            'options': reqParams
        });
    } else if (obj.type == "datasync.locationefs") {
        if (obj.data.Ec2Config) {
            reqParams.cfn['Ec2Config'] = {
                'SecurityGroupArns': obj.data.Ec2Config.SecurityGroupArns,
                'SubnetArn': obj.data.Ec2Config.SubnetArn
            };
            reqParams.tf['ec2_config'] = {
                'security_group_arns': obj.data.Ec2Config.SecurityGroupArns,
                'subnet_arn': obj.data.Ec2Config.SubnetArn
            };
        }
        reqParams.cfn['EfsFilesystemArn'] = obj.data.LocationArn;
        reqParams.tf['efs_file_system_arn'] = obj.data.LocationArn;
        if (obj.data.LocationUri) {
            var uri = new URL(obj.data.LocationUri);
            reqParams.cfn['Subdirectory'] = uri.pathname;
            reqParams.tf['subdirectory'] = obj.data.LocationUri;
        }

        /*
        TODO:
        Tags
        tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('datasync', obj.id, 'AWS::DataSync::LocationEFS'),
            'region': obj.region,
            'service': 'datasync',
            'type': 'AWS::DataSync::LocationEFS',
            'terraformType': 'aws_datasync_location_efs',
            'options': reqParams
        });
    } else if (obj.type == "datasync.locationnfs") {
        if (obj.data.OnPremConfig) {
            reqParams.cfn['OnPremConfig'] = {
                'AgentArns': obj.data.OnPremConfig.AgentArns
            };
            reqParams.tf['on_prem_config'] = {
                'agent_arns': obj.data.OnPremConfig.AgentArns
            };
        }
        reqParams.cfn['MountOptions'] = obj.data.MountOptions;
        if (obj.data.LocationUri) {
            var uri = new URL(obj.data.LocationUri);
            reqParams.cfn['ServerHostname'] = uri.hostname;
            reqParams.tf['server_hostname'] = uri.hostname;
            reqParams.cfn['Subdirectory'] = uri.pathname;
            reqParams.tf['subdirectory'] = obj.data.LocationUri;
        }

        /*
        TODO:
        Tags
        tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('datasync', obj.id, 'AWS::DataSync::LocationNFS'),
            'region': obj.region,
            'service': 'datasync',
            'type': 'AWS::DataSync::LocationNFS',
            'terraformType': 'aws_datasync_location_nfs',
            'options': reqParams
        });
    } else if (obj.type == "datasync.locations3") {
        if (obj.data.S3Config) {
            reqParams.cfn['S3Config'] = {
                'BucketAccessRoleArn': obj.data.S3Config.BucketAccessRoleArn
            };
            reqParams.tf['s3_config'] = {
                'bucket_access_role_arn': obj.data.S3Config.BucketAccessRoleArn
            };
        }
        reqParams.cfn['S3StorageClass'] = obj.data.S3StorageClass;
        reqParams.cfn['S3BucketArn'] = obj.data.LocationArn;
        reqParams.tf['s3_bucket_arn'] = obj.data.LocationArn;
        if (obj.data.LocationUri) {
            var uri = new URL(obj.data.LocationUri);
            reqParams.cfn['Subdirectory'] = uri.pathname;
            reqParams.tf['subdirectory'] = obj.data.LocationUri;
        }

        /*
        TODO:
        Tags
        tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('datasync', obj.id, 'AWS::DataSync::LocationS3'),
            'region': obj.region,
            'service': 'datasync',
            'type': 'AWS::DataSync::LocationS3',
            'terraformType': 'aws_datasync_location_s3',
            'options': reqParams
        });
    } else if (obj.type == "datasync.locationfsxwindows") {
        reqParams.cfn['FsxFilesystemArn'] = obj.data.LocationArn;
        if (obj.data.LocationUri) {
            var uri = new URL(obj.data.LocationUri);
            reqParams.cfn['Subdirectory'] = uri.pathname;
        }
        reqParams.cfn['SecurityGroupArns'] = obj.data.SecurityGroupArns;
        reqParams.cfn['User'] = obj.data.User;
        reqParams.cfn['Domain'] = obj.data.Domain;
        reqParams.cfn['Password'] = "REPLACEME";

        /*
        TODO:
        Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('datasync', obj.id, 'AWS::DataSync::LocationFSxWindows'),
            'region': obj.region,
            'service': 'datasync',
            'type': 'AWS::DataSync::LocationFSxWindows',
            'options': reqParams
        });
    } else if (obj.type == "datasync.locationsmb") {
        if (obj.data.LocationUri) {
            var uri = new URL(obj.data.LocationUri);
            reqParams.cfn['ServerHostname'] = uri.hostname;
            reqParams.cfn['Subdirectory'] = uri.pathname;
        }
        reqParams.cfn['AgentArns'] = obj.data.AgentArns;
        reqParams.cfn['User'] = obj.data.User;
        reqParams.cfn['Domain'] = obj.data.Domain;
        reqParams.cfn['Password'] = "REPLACEME";
        reqParams.cfn['MountOptions'] = obj.data.MountOptions;

        /*
        TODO:
        Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('datasync', obj.id, 'AWS::DataSync::LocationSMB'),
            'region': obj.region,
            'service': 'datasync',
            'type': 'AWS::DataSync::LocationSMB',
            'options': reqParams
        });
    } else if (obj.type == "datasync.locationobjectstorage") {
        if (obj.data.LocationUri) {
            var uri = new URL(obj.data.LocationUri);
            reqParams.cfn['ServerHostname'] = uri.hostname;
            reqParams.cfn['Subdirectory'] = uri.pathname;
        }
        reqParams.cfn['AgentArns'] = obj.data.AgentArns;
        if (obj.data.AccessKey) {
            reqParams.cfn['AccessKey'] = obj.data.AccessKey;
            reqParams.cfn['SecretKey'] = "REPLACEME";
        }
        reqParams.cfn['BucketName'] = "REPLACEME";
        reqParams.cfn['ServerPort'] = obj.data.ServerPort;
        reqParams.cfn['ServerProtocol'] = obj.data.ServerProtocol;
        

        /*
        TODO:
        Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('datasync', obj.id, 'AWS::DataSync::LocationObjectStorage'),
            'region': obj.region,
            'service': 'datasync',
            'type': 'AWS::DataSync::LocationObjectStorage',
            'options': reqParams
        });
    } else if (obj.type == "datasync.locationhdfs") {
        if (obj.data.LocationUri) {
            var uri = new URL(obj.data.LocationUri);
            reqParams.cfn['Subdirectory'] = uri.pathname;
        }
        reqParams.cfn['AgentArns'] = obj.data.AgentArns;
        reqParams.cfn['NameNodes'] = obj.data.NameNodes;
        reqParams.cfn['BlockSize'] = obj.data.BlockSize;
        reqParams.cfn['ReplicationFactor'] = obj.data.ReplicationFactor;
        reqParams.cfn['KmsKeyProviderUri'] = obj.data.KmsKeyProviderUri;
        reqParams.cfn['QopConfiguration'] = obj.data.QopConfiguration;
        reqParams.cfn['AuthType'] = obj.data.AuthenticationType;
        reqParams.cfn['SimpleUser'] = obj.data.SimpleUser;
        reqParams.cfn['KerberosPrincipal'] = obj.data.KerberosPrincipal;
        if (obj.data.AuthenticationType == "KERBEROS") {
            reqParams.cfn['KerberosKeytab'] = "REPLACEME";
            reqParams.cfn['KerberosKrb5Conf'] = "REPLACEME";
        }

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('datasync', obj.id, 'AWS::DataSync::LocationHDFS'),
            'region': obj.region,
            'service': 'datasync',
            'type': 'AWS::DataSync::LocationHDFS',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
