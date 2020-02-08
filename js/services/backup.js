/* ========================================================================== */
// Backup
/* ========================================================================== */

sections.push({
    'category': 'Storage',
    'service': 'Backup',
    'resourcetypes': {
        'Backup Vaults': {
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
                        field: 'numberofrecoverypoints',
                        title: 'Number of Recovery Points',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Backup Plans': {
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Backup Selections': {
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
                        field: 'id',
                        title: 'ID',
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

async function updateDatatableStorageBackup() {
    blockUI('#section-storage-backup-backupvaults-datatable');
    blockUI('#section-storage-backup-backupplans-datatable');
    blockUI('#section-storage-backup-backupselections-datatable');

    await sdkcall("Backup", "listBackupVaults", {
        // no params
    }, true).then(async (data) => {
        $('#section-storage-backup-backupvaults-datatable').bootstrapTable('removeAll');

        data.BackupVaultList.forEach(async (backupvault) => {
            await Promise.all([
                sdkcall("Backup", "getBackupVaultAccessPolicy", {
                    BackupVaultName: backupvault.BackupVaultName
                }, false).then(async (data) => {
                    backupvault['AccessPolicy'] = data.Policy;
                }).catch(() => { }),
                sdkcall("Backup", "getBackupVaultNotifications", {
                    BackupVaultName: backupvault.BackupVaultName
                }, false).then(async (data) => {
                    backupvault['Notifications'] = {
                        'SNSTopicArn': data.SNSTopicArn,
                        'BackupVaultEvents': data.BackupVaultEvents
                    };
                }).catch(() => { })
            ]);

            $('#section-storage-backup-backupvaults-datatable').bootstrapTable('append', [{
                f2id: backupvault.BackupVaultArn,
                f2type: 'backup.backupvault',
                f2data: backupvault,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/backup/home?region=' + region + '#backupvaults/details/' + backupvault.BackupVaultName,
                name: backupvault.BackupVaultName,
                numberofrecoverypoints: backupvault.NumberOfRecoveryPoints
            }]);
        });

        unblockUI('#section-storage-backup-backupvaults-datatable');
    });

    await sdkcall("Backup", "listBackupPlans", {
        // no params
    }, true).then(async (data) => {
        $('#section-storage-backup-backupplans-datatable').bootstrapTable('removeAll');
        $('#section-storage-backup-backupselections-datatable').bootstrapTable('removeAll');

        await Promise.all(data.BackupPlansList.map(async (backupplan) => {
            await sdkcall("Backup", "listBackupSelections", {
                BackupPlanId: backupplan.BackupPlanId
            }, true).then(async (data) => {

                await Promise.all(data.BackupSelectionsList.map(backupselection => {
                    return sdkcall("Backup", "getBackupSelection", {
                        BackupPlanId: backupplan.BackupPlanId,
                        SelectionId: backupselection.SelectionId
                    }, true).then(async (data) => {
                        $('#section-storage-backup-backupplans-datatable').bootstrapTable('append', [{
                            f2id: backupselection.SelectionId,
                            f2type: 'backup.backupselection',
                            f2data: data,
                            f2region: region,
                            id: backupselection.SelectionId,
                            name: backupselection.SelectionName
                        }]);
                    });
                }));
            });

            return sdkcall("Backup", "getBackupPlan", {
                BackupPlanId: backupplan.BackupPlanId
            }, true).then(async (data) => {
                $('#section-storage-backup-backupplans-datatable').bootstrapTable('append', [{
                    f2id: backupplan.BackupPlanArn,
                    f2type: 'backup.backupplan',
                    f2data: data,
                    f2region: region,
                    id: backupplan.BackupPlanId,
                    name: backupplan.BackupPlanName
                }]);
            });
        }));

        unblockUI('#section-storage-backup-backupplans-datatable');
        unblockUI('#section-storage-backup-backupselections-datatable');
    });
}
