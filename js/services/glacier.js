/* ========================================================================== */
// Glacier
/* ========================================================================== */

sections.push({
    'category': 'Storage',
    'service': 'Glacier',
    'resourcetypes': {
        'Vaults': {
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
                        field: 'numberofarchives',
                        title: 'Number of Archives',
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
                    }
                ]
            ]
        },
        'Vault Locks': {
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
                        title: 'Vault Name',
                        field: 'vaultname',
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

async function updateDatatableStorageGlacier() {
    blockUI('#section-storage-glacier-vaults-datatable');
    blockUI('#section-storage-glacier-vaultlocks-datatable');

    await sdkcall("Glacier", "listVaults", {
        // no params
    }, true).then(async (data) => {
        $('#section-storage-glacier-vaults-datatable').bootstrapTable('removeAll');
        $('#section-storage-glacier-vaultlocks-datatable').bootstrapTable('removeAll');

        await Promise.all(data.VaultList.map(vault => {
            return Promise.all([
                sdkcall("Glacier", "getVaultAccessPolicy", {
                    vaultName: vault.VaultName
                }, true).then(async (data) => {
                    vault['AccessPolicy'] = data.policy.Policy;

                    await sdkcall("Glacier", "getVaultNotifications", {
                        vaultName: vault.VaultName
                    }, true).then((data) => {
                        vault['NotificationConfig'] = data.vaultNotificationConfig;

                        $('#section-storage-glacier-vaults-datatable').bootstrapTable('append', [{
                            f2id: vault.VaultARN,
                            f2type: 'glacier.vault',
                            f2data: vault,
                            f2region: region,
                            name: vault.VaultName,
                            numberofarchives: vault.NumberOfArchives,
                            size: vault.SizeInBytes
                        }]);
                    });
                }),
                sdkcall("Glacier", "getVaultLock", {
                    VaultName: vault.VaultName
                }, false).then((data) => {
                    data['VaultName'] = vault.VaultName;
                    $('#section-storage-glacier-vaultlocks-datatable').bootstrapTable('append', [{
                        f2id: vault.VaultName + " VaultLock",
                        f2type: 'glacier.vaultlock',
                        f2data: data,
                        f2region: region,
                        vaultname: vault.VaultName,
                        creationtime: data.CreationDate
                    }]);
                }).catch(() => { })
            ]);
        }));

        unblockUI('#section-storage-glacier-vaults-datatable');
        unblockUI('#section-storage-glacier-vaultlocks-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
