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
        $('#section-migrationandtransfer-datasync-agents-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Agents.map(agent => {
            return sdkcall("DataSync", "describeAgent", {
                AgentArn: agent.AgentArn
            }, true).then((data) => {
                $('#section-migrationandtransfer-datasync-agents-datatable').bootstrapTable('append', [{
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
        $('#section-migrationandtransfer-datasync-tasks-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Tasks.map(task => {
            return sdkcall("DataSync", "describeTask", {
                TaskArn: task.TaskArn
            }, true).then((data) => {
                $('#section-migrationandtransfer-datasync-tasks-datatable').bootstrapTable('append', [{
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
        $('#section-migrationandtransfer-datasync-efslocations-datatable').bootstrapTable('removeAll');
        $('#section-migrationandtransfer-datasync-nfslocations-datatable').bootstrapTable('removeAll');
        $('#section-migrationandtransfer-datasync-s3locations-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Locations.map(location => {
            if (location.LocationUri.split(":")[0] == "EFS") {
                return sdkcall("DataSync", "describeLocationEfs", {
                    LocationArn: location.LocationArn
                }, true).then((data) => {
                    $('#section-migrationandtransfer-datasync-efslocations-datatable').bootstrapTable('append', [{
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
                    $('#section-migrationandtransfer-datasync-nfslocations-datatable').bootstrapTable('append', [{
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
                    $('#section-migrationandtransfer-datasync-s3locations-datatable').bootstrapTable('append', [{
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
