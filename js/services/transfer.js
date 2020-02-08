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
    if (obj.type == "transfer.server") {
        reqParams.cfn['EndpointType'] = obj.data.EndpointType;
        reqParams.tf['endpoint_type'] = obj.data.EndpointType;
        reqParams.cfn['IdentityProviderType'] = obj.data.IdentityProviderType;
        reqParams.tf['identity_provider_type'] = obj.data.IdentityProviderType;
        reqParams.cfn['LoggingRole'] = obj.data.LoggingRole;
        reqParams.tf['logging_role'] = obj.data.LoggingRole;
        if (obj.data.EndpointDetails) {
            reqParams.cfn['EndpointDetails'] = {
                'VpcEndpointId': obj.data.EndpointDetails.VpcEndpointId
            };
            reqParams.tf['endpoint_details'] = {
                'vpc_endpoint_id': obj.data.EndpointDetails.VpcEndpointId
            };
        }
        if (obj.data.IdentityProviderDetails) {
            reqParams.cfn['IdentityProviderDetails'] = {
                'InvocationRole': obj.data.IdentityProviderDetails.InvocationRole,
                'Url': obj.data.IdentityProviderDetails.Url
            };
            reqParams.tf['invocation_role'] = obj.data.IdentityProviderDetails.InvocationRole;
            reqParams.tf['url'] = obj.data.IdentityProviderDetails.Url;
        }
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('transfer', obj.id),
            'region': obj.region,
            'service': 'transfer',
            'type': 'AWS::Transfer::Server',
            'terraformType': 'aws_transfer_server',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ServerId,
                'GetAtt': {
                    'Arn': obj.data.Arn,
                    'ServerId': obj.data.ServerId
                }
            }
        });
    } else if (obj.type == "transfer.user") {
        reqParams.cfn['ServerId'] = obj.data.ServerId;
        reqParams.tf['server_id'] = obj.data.ServerId;
        reqParams.cfn['HomeDirectory'] = obj.data.User.HomeDirectory;
        reqParams.tf['home_directory'] = obj.data.User.HomeDirectory;
        reqParams.cfn['Policy'] = obj.data.User.Policy;
        reqParams.tf['policy'] = obj.data.User.Policy;
        reqParams.cfn['Role'] = obj.data.User.Role;
        reqParams.tf['role'] = obj.data.User.Role;
        reqParams.cfn['UserName'] = obj.data.User.UserName;
        reqParams.tf['user_name'] = obj.data.User.UserName;
        if (obj.data.User.SshPublicKeys) {
            reqParams.cfn['SshPublicKeys'] = [];
            obj.data.User.SshPublicKeys.forEach(sshkey => {
                reqParams.cfn['SshPublicKeys'].push(sshkey.SshPublicKeyBody);
            });
        }

        reqParams.cfn['Tags'] = obj.data.User.Tags;
        if (obj.data.User.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.User.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('transfer', obj.id),
            'region': obj.region,
            'service': 'transfer',
            'type': 'AWS::Transfer::User',
            'terraformType': 'aws_transfer_user',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Arn,
                'GetAtt': {
                    'Arn': obj.data.Arn,
                    'ServerId': obj.data.ServerId
                }
            }
        });
    } else if (obj.type == "transfer.sshkey") {
        reqParams.tf['server_id'] = obj.data.ServerId;
        reqParams.tf['user_name'] = obj.data.UserName;
        reqParams.tf['body'] = obj.data.Body;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('transfer', obj.id),
            'region': obj.region,
            'service': 'transfer',
            'terraformType': 'aws_transfer_ssh_key',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
