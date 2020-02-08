/* ========================================================================== */
// Transfer
/* ========================================================================== */

sections.push({
    'category': 'Migration &amp; Transfer',
    'service': 'Transfer',
    'resourcetypes': {
        'Servers': {
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
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'state',
                        title: 'State',
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
                    },
                    {
                        field: 'usercount',
                        title: 'User Count',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Users': {
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
                        title: 'User Name',
                        field: 'username',
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
                        field: 'serverid',
                        title: 'Server ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'homedirectory',
                        title: 'Home Directory',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'role',
                        title: 'Role',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'SSH Keys': {
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
                        title: 'Key ID',
                        field: 'keyid',
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
                        field: 'serverid',
                        title: 'Server ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'username',
                        title: 'User Name',
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

async function updateDatatableMigrationAndTransferTransfer() {
    blockUI('#section-migrationandtransfer-transfer-servers-datatable');
    blockUI('#section-migrationandtransfer-transfer-users-datatable');
    blockUI('#section-migrationandtransfer-transfer-sshkeys-datatable');

    await sdkcall("Transfer", "listServers", {
        // no params
    }, true).then(async (data) => {
        $('#section-migrationandtransfer-transfer-servers-datatable').bootstrapTable('removeAll');
        $('#section-migrationandtransfer-transfer-users-datatable').bootstrapTable('removeAll');
        $('#section-migrationandtransfer-transfer-sshkeys-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Servers.map(async (server) => {
            await sdkcall("Transfer", "listUsers", {
                ServerId: server.ServerId
            }, true).then(async (data) => {
                await Promise.all(data.Users.map(user => {
                    return sdkcall("Transfer", "describeUser", {
                        ServerId: server.ServerId,
                        UserName: user.UserName
                    }, true).then(async (data) => {
                        $('#section-migrationandtransfer-transfer-users-datatable').bootstrapTable('append', [{
                            f2id: data.User.Arn,
                            f2type: 'transfer.user',
                            f2data: data,
                            f2region: region,
                            username: data.User.UserName,
                            serverid: server.ServerId,
                            homedirectory: data.User.HomeDirectory,
                            role: data.User.Role
                        }]);

                        if (data.User.SshPublicKeys) {
                            data.User.SshPublicKeys.forEach(sshkey => {
                                $('#section-migrationandtransfer-transfer-users-datatable').bootstrapTable('append', [{
                                    f2id: sshkey.SshPublicKeyId,
                                    f2type: 'transfer.sshkey',
                                    f2data: {
                                        'ServerId': server.ServerId,
                                        'UserName': data.User.UserName,
                                        'Body': sshkey.SshPublicKeyBody
                                    },
                                    f2region: region,
                                    keyid: sshkey.SshPublicKeyId,
                                    serverid: server.ServerId,
                                    username: data.User.UserName
                                }]);
                            });
                        }
                    });
                }));
            });

            return sdkcall("Transfer", "describeServer", {
                ServerId: server.ServerId
            }, true).then(async (data) => {
                $('#section-migrationandtransfer-transfer-servers-datatable').bootstrapTable('append', [{
                    f2id: data.Server.Arn,
                    f2type: 'transfer.server',
                    f2data: data.Server,
                    f2region: region,
                    id: data.Server.ServerId,
                    state: data.Server.State,
                    usercount: data.Server.UserCount,
                    endpointtype: data.Server.EndpointType
                }]);
            });
        }));

        unblockUI('#section-migrationandtransfer-transfer-servers-datatable');
        unblockUI('#section-migrationandtransfer-transfer-users-datatable');
        unblockUI('#section-migrationandtransfer-transfer-sshkeys-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
