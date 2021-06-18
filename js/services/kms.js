/* ========================================================================== */
// KMS
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity, &amp; Compliance',
    'service': 'KMS',
    'resourcetypes': {
        'Keys': {
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
                        field: 'accountid',
                        title: 'Account ID',
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
                    },
                    {
                        field: 'origin',
                        title: 'Origin',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Aliases': {
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
                        field: 'key',
                        title: 'Key',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Replica Keys': {
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
                        title: 'Key',
                        field: 'key',
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

async function updateDatatableSecurityIdentityAndComplianceKMS() {
    blockUI('#section-securityidentityandcompliance-kms-keys-datatable');
    blockUI('#section-securityidentityandcompliance-kms-aliases-datatable');
    blockUI('#section-securityidentityandcompliance-kms-replicakeys-datatable');

    await sdkcall("KMS", "listKeys", {
        // no params
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-kms-keys-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-kms-replicakeys-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Keys.map(key => {
            return sdkcall("KMS", "describeKey", {
                KeyId: key.KeyId
            }, true).then(async (keydata) => {
                if (keydata.KeyMetadata.KeyManager == "CUSTOMER") {
                    await sdkcall("KMS", "getKeyPolicy", {
                        KeyId: key.KeyId,
                        PolicyName: "default"
                    }, true).then(async (data) => {
                        keydata.KeyMetadata['Policy'] = data.Policy;

                        await sdkcall("KMS", "getKeyRotationStatus", {
                            KeyId: key.KeyId
                        }, false).then((data) => {
                            keydata['KeyRotationEnabled'] = data.KeyRotationEnabled;
                        }).catch(() => { });

                        keydata.KeyMetadata['Tags'] = await getResourceTags(keydata.KeyMetadata.Arn);

                        if (keydata.KeyMetadata.MultiRegion && keydata.KeyMetadata.MultiRegionConfiguration.MultiRegionKeyType == "REPLICA") {
                            $('#section-securityidentityandcompliance-kms-replicakeys-datatable').deferredBootstrapTable('append', [{
                                f2id: keydata.KeyMetadata.Arn,
                                f2type: 'kms.replicakey',
                                f2data: keydata.KeyMetadata,
                                f2region: region,
                                f2link: 'https://console.aws.amazon.com/kms/home#/kms/keys/' + keydata.KeyMetadata.KeyId,
                                key: keydata.KeyMetadata.KeyId,
                                description: keydata.KeyMetadata.Description
                            }]);
                        } else {
                            $('#section-securityidentityandcompliance-kms-keys-datatable').deferredBootstrapTable('append', [{
                                f2id: keydata.KeyMetadata.Arn,
                                f2type: 'kms.key',
                                f2data: keydata.KeyMetadata,
                                f2region: region,
                                f2link: 'https://console.aws.amazon.com/kms/home#/kms/keys/' + keydata.KeyMetadata.KeyId,
                                id: keydata.KeyMetadata.KeyId,
                                accountid: keydata.KeyMetadata.AWSAccountId,
                                enabled: keydata.KeyMetadata.Enabled,
                                description: keydata.KeyMetadata.Description,
                                origin: keydata.KeyMetadata.Origin
                            }]);
                        }
                    });
                }
            });
        }));

        unblockUI('#section-securityidentityandcompliance-kms-keys-datatable');
        unblockUI('#section-securityidentityandcompliance-kms-replicakeys-datatable');
    });

    await sdkcall("KMS", "listAliases", {
        // no params
    }, true).then((data) => {
        $('#section-securityidentityandcompliance-kms-aliases-datatable').deferredBootstrapTable('removeAll');

        data.Aliases.forEach(alias => {
            if (!alias.AliasName.startsWith("alias/aws/")) {
                $('#section-securityidentityandcompliance-kms-aliases-datatable').deferredBootstrapTable('append', [{
                    f2id: alias.AliasArn,
                    f2type: 'kms.alias',
                    f2data: alias,
                    f2region: region,
                    name: alias.AliasName,
                    key: alias.TargetKeyId
                }]);
            }
        });

        unblockUI('#section-securityidentityandcompliance-kms-aliases-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "kms.key") {
        reqParams.cfn['Enabled'] = obj.data.Enabled;
        reqParams.tf['is_enabled'] = obj.data.Enabled;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['KeyUsage'] = obj.data.KeyUsage;
        reqParams.tf['key_usage'] = obj.data.KeyUsage;
        reqParams.cfn['EnableKeyRotation'] = obj.data.KeyRotationEnabled;
        reqParams.tf['enable_key_rotation'] = obj.data.KeyRotationEnabled;
        reqParams.cfn['KeyPolicy'] = obj.data.Policy;
        reqParams.tf['policy'] = obj.data.Policy;
        reqParams.cfn['KeySpec'] = obj.data.KeySpec;
        reqParams.cfn['Tags'] = obj.data.Tags;
        reqParams.cfn['MultiRegion'] = obj.data.MultiRegion;

        /*
        TODO:
        PendingWindowInDays: Integer
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('kms', obj.id, 'AWS::KMS::Key'),
            'region': obj.region,
            'service': 'kms',
            'type': 'AWS::KMS::Key',
            'terraformType': 'aws_kms_key',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.KeyId,
                'GetAtt': {
                    'Arn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "kms.alias") {
        reqParams.cfn['AliasName'] = obj.data.AliasName;
        reqParams.tf['name'] = obj.data.AliasName;
        reqParams.cfn['TargetKeyId'] = obj.data.TargetKeyId;
        reqParams.tf['target_key_id'] = obj.data.TargetKeyId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('kms', obj.id, 'AWS::KMS::Alias'),
            'region': obj.region,
            'service': 'kms',
            'type': 'AWS::KMS::Alias',
            'terraformType': 'aws_kms_alias',
            'options': reqParams
        });
    } else if (obj.type == "kms.replicakey") {
        reqParams.cfn['Enabled'] = obj.data.Enabled;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['KeyPolicy'] = obj.data.Policy;
        reqParams.cfn['PendingWindowInDays'] = obj.data.PendingDeletionWindowInDays;
        reqParams.cfn['PrimaryKeyArn'] = obj.data.MultiRegionConfiguration.PrimaryKey.Arn;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('kms', obj.id, 'AWS::KMS::ReplicaKey'),
            'region': obj.region,
            'service': 'kms',
            'type': 'AWS::KMS::ReplicaKey',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.KeyId,
                'GetAtt': {
                    'Arn': obj.data.Arn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
