/* ========================================================================== */
// KMS
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity &amp; Compliance',
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
        }
    }
});

async function updateDatatableSecurityIdentityAndComplianceKMS() {
    blockUI('#section-securityidentityandcompliance-kms-keys-datatable');
    blockUI('#section-securityidentityandcompliance-kms-aliases-datatable');

    await sdkcall("KMS", "listKeys", {
        // no params
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-kms-keys-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Keys.map(key => {
            return sdkcall("KMS", "describeKey", {
                KeyId: key.KeyId
            }, true).then(async (keydata) => {
                if (keydata.KeyMetadata.KeyManager == "CUSTOMER") {
                    await sdkcall("KMS", "getKeyPolicy", {
                        KeyId: key.KeyId,
                        PolicyName: "default"
                    }, true).then(async (data) => {
                        keydata['Policy'] = data.Policy;

                        await sdkcall("KMS", "getKeyRotationStatus", {
                            KeyId: key.KeyId
                        }, true).then((data) => {
                            keydata['KeyRotationEnabled'] = data.KeyRotationEnabled;
                        });

                        $('#section-securityidentityandcompliance-kms-keys-datatable').bootstrapTable('append', [{
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
                    });
                }
            });
        }));

        unblockUI('#section-securityidentityandcompliance-kms-keys-datatable');
    });

    await sdkcall("KMS", "listAliases", {
        // no params
    }, true).then((data) => {
        $('#section-securityidentityandcompliance-kms-aliases-datatable').bootstrapTable('removeAll');

        data.Aliases.forEach(alias => {
            if (!alias.AliasName.startsWith("alias/aws/")) {
                $('#section-securityidentityandcompliance-kms-aliases-datatable').bootstrapTable('append', [{
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
