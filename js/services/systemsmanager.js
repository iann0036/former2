/* ========================================================================== */
// Systems Manager
/* ========================================================================== */

sections.push({
    'category': 'Management &amp; Governance',
    'service': 'Systems Manager',
    'resourcetypes': {
        'Documents': {
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
                        field: 'versionname',
                        title: 'Version Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'platformtypes',
                        title: 'Platform Types',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'documentversion',
                        title: 'Document Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'documenttype',
                        title: 'Document Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Parameters': {
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
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'version',
                        title: 'Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Patch Baselines': {
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
                    },
                    {
                        field: 'operatingsystem',
                        title: 'Operating System',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'approvedpatchescompliancelevel',
                        title: 'Approved Patches Compliance Level',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Associations': {
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
                        title: 'Document Name',
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
                        field: 'associationid',
                        title: 'Association ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'instanceid',
                        title: 'Instance ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'associationname',
                        title: 'Association Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'associationversion',
                        title: 'Association Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Maintenance Windows': {
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
                        field: 'windowid',
                        title: 'Window ID',
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
                        field: 'schedule',
                        title: 'Schedule',
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
        'Maintenance Window Tasks': {
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
                        title: 'Window Task ID',
                        field: 'windowtaskid',
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
                        field: 'windowid',
                        title: 'Window ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'tasktype',
                        title: 'Task Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'taskarn',
                        title: 'Task ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Maintenance Window Targets': {
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
                        field: 'windowtargetid',
                        title: 'Window Target ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'windowid',
                        title: 'Window ID',
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
                    }
                ]
            ]
        },
        'Resource Data Syncs': {
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
                    }
                ],
                [
                    // nothing
                ]
            ]
        }
    }
});

async function updateDatatableManagementAndGovernanceSystemsManager() {
    blockUI('#section-managementandgovernance-systemsmanager-documents-datatable');
    blockUI('#section-managementandgovernance-systemsmanager-parameters-datatable');
    blockUI('#section-managementandgovernance-systemsmanager-patchbaselines-datatable');
    blockUI('#section-managementandgovernance-systemsmanager-associations-datatable');
    blockUI('#section-managementandgovernance-systemsmanager-maintenancewindows-datatable');
    blockUI('#section-managementandgovernance-systemsmanager-maintenancewindowtasks-datatable');
    blockUI('#section-managementandgovernance-systemsmanager-maintenancewindowtargets-datatable');
    blockUI('#section-managementandgovernance-systemsmanager-resourcedatasyncs-datatable');

    await sdkcall("SSM", "listDocuments", {
        DocumentFilterList: [{
            key: "Owner",
            value: "Self"
        }]
    }, true).then(async (data) => {
        $('#section-managementandgovernance-systemsmanager-documents-datatable').bootstrapTable('removeAll');

        await Promise.all(data.DocumentIdentifiers.map(document => {
            return sdkcall("SSM", "getDocument", {
                Name: document.Name,
                DocumentFormat: 'JSON'
            }, false).then((documentcontent) => {
                document['Content'] = documentcontent.Content;
                $('#section-managementandgovernance-systemsmanager-documents-datatable').bootstrapTable('append', [{
                    f2id: document.Name,
                    f2type: 'ssm.document',
                    f2data: document,
                    f2region: region,
                    name: document.Name,
                    versionname: document.VersionName,
                    platformtypes: document.PlatformTypes.join(", "),
                    documentversion: document.DocumentVersion,
                    documenttype: document.DocumentType
                }]);
            }).catch(() => { });
        }));

        unblockUI('#section-managementandgovernance-systemsmanager-documents-datatable');
    });

    await sdkcall("SSM", "describeParameters", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-systemsmanager-parameters-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Parameters.map(parameter => {
            return sdkcall("SSM", "getParameter", {
                Name: parameter.Name
            }, true).then((data) => {
                $('#section-managementandgovernance-systemsmanager-parameters-datatable').bootstrapTable('append', [{
                    f2id: data.Parameter.ARN,
                    f2type: 'ssm.parameter',
                    f2data: data.Parameter,
                    f2region: region,
                    name: data.Parameter.Name,
                    type: data.Parameter.Type,
                    version: data.Parameter.Version
                }]);
            });
        }));

        unblockUI('#section-managementandgovernance-systemsmanager-parameters-datatable');
    });

    await sdkcall("SSM", "describePatchBaselines", {
        Filters: [{
            Key: "OWNER",
            Values: ["Self"]
        }]
    }, true).then(async (data) => {
        $('#section-managementandgovernance-systemsmanager-patchbaselines-datatable').bootstrapTable('removeAll');

        await Promise.all(data.BaselineIdentities.map(baseline => {
            return sdkcall("SSM", "getPatchBaseline", {
                BaselineId: baseline.BaselineId
            }, true).then((data) => {
                $('#section-managementandgovernance-systemsmanager-patchbaselines-datatable').bootstrapTable('append', [{
                    f2id: data.BaselineId,
                    f2type: 'ssm.patchbaseline',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    id: data.BaselineId,
                    operatingsystem: data.OperatingSystem,
                    approvedpatchescompliancelevel: data.ApprovedPatchesComplianceLevel
                }]);
            });
        }));

        unblockUI('#section-managementandgovernance-systemsmanager-patchbaselines-datatable');
    });

    await sdkcall("SSM", "listAssociations", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-systemsmanager-associations-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Associations.map(association => {
            return sdkcall("SSM", "describeAssociation", {
                Name: association.Name,
                InstanceId: association.InstanceId,
                AssociationId: association.AssociationId,
                AssociationVersion: association.AssociationVersion
            }, true).then((data) => {
                $('#section-managementandgovernance-systemsmanager-associations-datatable').bootstrapTable('append', [{
                    f2id: data.AssociationDescription.Name,
                    f2type: 'ssm.association',
                    f2data: data.AssociationDescription,
                    f2region: region,
                    name: data.AssociationDescription.Name,
                    instanceid: data.AssociationDescription.InstanceId,
                    associationversion: data.AssociationDescription.AssociationVersion,
                    associationname: data.AssociationDescription.AssociationName,
                    associationid: data.AssociationDescription.AssociationId
                }]);
            });
        }));

        unblockUI('#section-managementandgovernance-systemsmanager-associations-datatable');
    });

    await sdkcall("SSM", "describeMaintenanceWindows", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-systemsmanager-maintenancewindows-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-systemsmanager-maintenancewindowtasks-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-systemsmanager-maintenancewindowtargets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.WindowIdentities.map(window => {
            return Promise.all([
                sdkcall("SSM", "describeMaintenanceWindowTasks", {
                    WindowId: window.WindowId
                }, true).then(async (data) => {
                    await Promise.all(data.Tasks.map(task => {
                        return sdkcall("SSM", "getMaintenanceWindowTask", {
                            WindowId: window.WindowId,
                            WindowTaskId: task.WindowTaskId
                        }, true).then((data) => {
                            $('#section-managementandgovernance-systemsmanager-maintenancewindowtasks-datatable').bootstrapTable('append', [{
                                f2id: data.WindowTaskId,
                                f2type: 'ssm.maintenancewindowtask',
                                f2data: data,
                                f2region: region,
                                windowtaskid: data.WindowTaskId,
                                windowid: data.WindowId,
                                taskarn: data.TaskArn,
                                tasktype: data.TaskType
                            }]);
                        });
                    }));
                }),
                sdkcall("SSM", "describeMaintenanceWindowTargets", {
                    WindowId: window.WindowId
                }, true).then((data) => {
                    data.Targets.forEach(target => {
                        $('#section-managementandgovernance-systemsmanager-maintenancewindowtargets-datatable').bootstrapTable('append', [{
                            f2id: target.Name,
                            f2type: 'ssm.maintenancewindowtarget',
                            f2data: target,
                            f2region: region,
                            name: target.Name,
                            windowid: target.WindowId,
                            windowtargetid: target.WindowTargetId,
                            description: target.Description
                        }]);
                    });
                }),
                sdkcall("SSM", "getMaintenanceWindow", {
                    WindowId: window.WindowId
                }, true).then((data) => {
                    $('#section-managementandgovernance-systemsmanager-maintenancewindows-datatable').bootstrapTable('append', [{
                        f2id: data.WindowId,
                        f2type: 'ssm.maintenancewindow',
                        f2data: data,
                        f2region: region,
                        name: data.Name,
                        windowid: data.WindowId,
                        description: data.Description,
                        schedule: data.Schedule,
                        enabled: data.Enabled
                    }]);
                })
            ]);
        }));

        unblockUI('#section-managementandgovernance-systemsmanager-maintenancewindows-datatable');
        unblockUI('#section-managementandgovernance-systemsmanager-maintenancewindowtasks-datatable');
        unblockUI('#section-managementandgovernance-systemsmanager-maintenancewindowtargets-datatable');
    });

    await sdkcall("SSM", "listResourceDataSync", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-systemsmanager-resourcedatasyncs-datatable').bootstrapTable('removeAll');

        data.ResourceDataSyncItems.forEach(dataSync => {
            $('#section-managementandgovernance-systemsmanager-resourcedatasyncs-datatable').bootstrapTable('append', [{
                f2id: dataSync.SyncName,
                f2type: 'ssm.resourcedatasync',
                f2data: dataSync,
                f2region: region,
                name: dataSync.SyncName
            }]);
        });

        unblockUI('#section-managementandgovernance-systemsmanager-resourcedatasyncs-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
