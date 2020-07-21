/* ========================================================================== */
// DataSync
/* ========================================================================== */

sections.push({
    'category': 'Migration &amp; Transfer',
    'service': 'DataSync',
    'resourcetypes': {
        'Agents': {
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

        await Promise.all(data.Locations.map(location => {
            if (location.LocationUri.split(":")[0] == "EFS") {
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
            } else if (location.LocationUri.split(":")[0] == "NFS") {
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
            } else if (location.LocationUri.split(":")[0] == "S3") {
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
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "datasync.agent") {
        reqParams.tf['name'] = obj.data.Name;
        reqParams.tf['activation_key'] = "REPLACEME";
        reqParams.tf['ip_address'] = "REPLACEME";

        /*
        TODO:
        tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('datasync', obj.id, 'AWS::DataSync::Agent'), // not real resource type
            'region': obj.region,
            'service': 'datasync',
            'terraformType': 'aws_datasync_agent',
            'options': reqParams
        });
    } else if (obj.type == "datasync.task") {
        reqParams.tf['name'] = obj.data.Name;
        reqParams.tf['source_location_arn'] = obj.data.SourceLocationArn;
        reqParams.tf['destination_location_arn'] = obj.data.DestinationLocationArn;
        reqParams.tf['cloudwatch_log_group_arn'] = obj.data.CloudWatchLogGroupArn;
        if (obj.data.Options) {
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

        /*
        TODO:
        tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('datasync', obj.id, 'AWS::DataSync::Task'), // not real resource type
            'region': obj.region,
            'service': 'datasync',
            'terraformType': 'aws_datasync_task',
            'options': reqParams
        });
    } else if (obj.type == "datasync.locationefs") {
        reqParams.tf['ec2_config'] = {
            'security_group_arns': obj.data.Ec2Config.SecurityGroupArns,
            'subnet_arn': obj.data.Ec2Config.SubnetArn
        };
        reqParams.tf['efs_file_system_arn'] = obj.data.LocationArn;
        reqParams.tf['subdirectory'] = obj.data.LocationUri;

        /*
        TODO:
        tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('datasync', obj.id, 'AWS::DataSync::LocationEFS'), // not real resource type
            'region': obj.region,
            'service': 'datasync',
            'terraformType': 'aws_datasync_location_efs',
            'options': reqParams
        });
    } else if (obj.type == "datasync.locationnfs") {
        reqParams.tf['on_prem_config'] = {
            'agent_arns': obj.data.OnPremConfig.AgentArns
        };
        reqParams.tf['server_hostname'] = obj.data.LocationArn;
        reqParams.tf['subdirectory'] = obj.data.LocationUri;

        /*
        TODO:
        tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('datasync', obj.id, 'AWS::DataSync::LocationNFS'), // not real resource type
            'region': obj.region,
            'service': 'datasync',
            'terraformType': 'aws_datasync_location_nfs',
            'options': reqParams
        });
    } else if (obj.type == "datasync.locations3") {
        reqParams.tf['s3_config'] = {
            'bucket_access_role_arn': obj.data.S3Config.BucketAccessRoleArn
        };
        reqParams.tf['s3_bucket_arn'] = obj.data.LocationArn;
        reqParams.tf['subdirectory'] = obj.data.LocationUri;

        /*
        TODO:
        tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('datasync', obj.id, 'AWS::DataSync::LocationS3'), // not real resource type
            'region': obj.region,
            'service': 'datasync',
            'terraformType': 'aws_datasync_location_s3',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
