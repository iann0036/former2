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
        $('#section-managementandgovernance-systemsmanager-documents-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DocumentIdentifiers.map(document => {
            return sdkcall("SSM", "getDocument", {
                Name: document.Name,
                DocumentFormat: 'JSON'
            }, false).then((documentcontent) => {
                document['Content'] = documentcontent.Content;
                $('#section-managementandgovernance-systemsmanager-documents-datatable').deferredBootstrapTable('append', [{
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
        $('#section-managementandgovernance-systemsmanager-parameters-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Parameters.map(parameter => {
            return sdkcall("SSM", "getParameter", {
                Name: parameter.Name
            }, true).then((data) => {
                data.Parameter['Description'] = parameter.Description;
                data.Parameter['AllowedPattern'] = parameter.AllowedPattern;
                data.Parameter['Tier'] = parameter.Tier;
                data.Parameter['Policies'] = parameter.Policies;

                $('#section-managementandgovernance-systemsmanager-parameters-datatable').deferredBootstrapTable('append', [{
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
        $('#section-managementandgovernance-systemsmanager-patchbaselines-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.BaselineIdentities.map(baseline => {
            return sdkcall("SSM", "getPatchBaseline", {
                BaselineId: baseline.BaselineId
            }, true).then((data) => {
                $('#section-managementandgovernance-systemsmanager-patchbaselines-datatable').deferredBootstrapTable('append', [{
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
        $('#section-managementandgovernance-systemsmanager-associations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Associations.map(association => {
            if (association.AssociationId) {
                return sdkcall("SSM", "describeAssociation", {
                    AssociationId: association.AssociationId,
                    AssociationVersion: association.AssociationVersion
                }, true).then((data) => {
                    $('#section-managementandgovernance-systemsmanager-associations-datatable').deferredBootstrapTable('append', [{
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
            } else {
                return sdkcall("SSM", "describeAssociation", {
                    Name: association.Name,
                    AssociationVersion: association.AssociationVersion
                }, true).then((data) => {
                    $('#section-managementandgovernance-systemsmanager-associations-datatable').deferredBootstrapTable('append', [{
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
            }
        }));

        unblockUI('#section-managementandgovernance-systemsmanager-associations-datatable');
    });

    await sdkcall("SSM", "describeMaintenanceWindows", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-systemsmanager-maintenancewindows-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-systemsmanager-maintenancewindowtasks-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-systemsmanager-maintenancewindowtargets-datatable').deferredBootstrapTable('removeAll');

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
                            $('#section-managementandgovernance-systemsmanager-maintenancewindowtasks-datatable').deferredBootstrapTable('append', [{
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
                        $('#section-managementandgovernance-systemsmanager-maintenancewindowtargets-datatable').deferredBootstrapTable('append', [{
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
                    $('#section-managementandgovernance-systemsmanager-maintenancewindows-datatable').deferredBootstrapTable('append', [{
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
        $('#section-managementandgovernance-systemsmanager-resourcedatasyncs-datatable').deferredBootstrapTable('removeAll');

        data.ResourceDataSyncItems.forEach(dataSync => {
            $('#section-managementandgovernance-systemsmanager-resourcedatasyncs-datatable').deferredBootstrapTable('append', [{
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
    if (obj.type == "ssm.document") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['Content'] = obj.data.Content;
        reqParams.tf['content'] = obj.data.Content;
        reqParams.cfn['DocumentType'] = obj.data.DocumentType;
        reqParams.tf['document_type'] = obj.data.DocumentType;
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ssm', obj.id, 'AWS::SSM::Document'),
            'region': obj.region,
            'service': 'ssm',
            'type': 'AWS::SSM::Document',
            'terraformType': 'aws_ssm_document',
            'options': reqParams
        });
    } else if (obj.type == "ssm.parameter") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.tf['type'] = obj.data.Type;
        reqParams.cfn['Value'] = obj.data.Value || "REPLACEME";
        reqParams.tf['value'] = obj.data.Value || "REPLACEME";
        reqParams.cfn['DataType'] = obj.data.DataType;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['AllowedPattern'] = obj.data.AllowedPattern;
        reqParams.cfn['Tier'] = obj.data.Tier;
        if (obj.data.Policies) {
            reqParams.cfn['Policies'] = [];
            obj.data.Policies.forEach(policy => {
                reqParams.cfn['Policies'].push(policy.PolicyText);
            });
        }

        /*
        TODO:
        Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ssm', obj.id, 'AWS::SSM::Parameter'),
            'region': obj.region,
            'service': 'ssm',
            'type': 'AWS::SSM::Parameter',
            'terraformType': 'aws_ssm_parameter',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'GetAtt': {
                    //'Type': obj.data.Type,
                    'Value': obj.data.Value
                }
            }
        });
    } else if (obj.type == "ssm.patchbaseline") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['OperatingSystem'] = obj.data.OperatingSystem;
        reqParams.tf['OperatingSystem'] = obj.data.OperatingSystem;
        reqParams.cfn['GlobalFilters'] = obj.data.GlobalFilters;
        if (obj.data.GlobalFilters && obj.data.GlobalFilters.PatchFilters) {
            reqParams.tf['global_filter'] = [];
            obj.data.GlobalFilters.PatchFilters.forEach(globalfilter => {
                reqParams.tf['global_filter'].push({
                    'key': globalfilter.Key,
                    'values': globalfilter.Values
                });
            });
        }
        reqParams.tf['approval_rule'] = obj.data.ApprovalRules;
        if (obj.data.ApprovalRules && obj.data.ApprovalRules.PatchRules) {
            reqParams.tf['approval_rule'] = [];
            obj.data.ApprovalRules.PatchRules.forEach(approvalrule => {
                var patchfiltergroup = null;
                if (approvalrule.PatchFilterGroup && approvalrule.PatchFilterGroup.PatchFilters) {
                    patchfiltergroup = [];
                    approvalrule.PatchFilterGroup.PatchFilters.forEach(patchfilter => {
                        patchfiltergroup.push({
                            'key': patchfilter.Key,
                            'values': patchfilter.Values
                        });
                    });
                }
                reqParams.tf['approval_rule'].push({
                    'patch_filter': patchfiltergroup,
                    'approve_after_days': approvalrule.ApproveAfterDays,
                    'compliance_level': approvalrule.ComplianceLevel,
                    'enable_non_security': approvalrule.EnableNonSecurity
                });
            });
        }
        reqParams.cfn['ApprovedPatches'] = obj.data.ApprovedPatches;
        reqParams.tf['approved_patches'] = obj.data.ApprovedPatches;
        reqParams.cfn['ApprovedPatchesComplianceLevel'] = obj.data.ApprovedPatchesComplianceLevel;
        reqParams.tf['approved_patches_compliance_level'] = obj.data.ApprovedPatchesComplianceLevel;
        reqParams.cfn['ApprovedPatchesEnableNonSecurity'] = obj.data.ApprovedPatchesEnableNonSecurity;
        reqParams.cfn['RejectedPatches'] = obj.data.RejectedPatches;
        reqParams.tf['rejected_patches'] = obj.data.RejectedPatches;
        reqParams.cfn['RejectedPatchesAction'] = obj.data.RejectedPatchesAction;
        reqParams.cfn['PatchGroups'] = obj.data.PatchGroups;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['Sources'] = obj.data.Sources;

        /*
        TODO:
        Tags:
            - Resource Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ssm', obj.id, 'AWS::SSM::PatchBaseline'),
            'region': obj.region,
            'service': 'ssm',
            'type': 'AWS::SSM::PatchBaseline',
            'terraformType': 'aws_ssm_patch_baseline',
            'options': reqParams
        });
    } else if (obj.type == "ssm.association") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['DocumentVersion'] = obj.data.DocumentVersion;
        reqParams.tf['document_version'] = obj.data.DocumentVersion;
        reqParams.cfn['Parameters'] = obj.data.Parameters;
        reqParams.tf['parameters'] = obj.data.Parameters;
        reqParams.cfn['ScheduleExpression'] = obj.data.ScheduleExpression;
        reqParams.tf['schedule_expression'] = obj.data.ScheduleExpression;
        if (obj.data.OutputLocation && obj.data.OutputLocation.S3Location) {
            reqParams.cfn['OutputLocation'] = {
                'S3Location': {
                    'OutputS3BucketName': obj.data.OutputLocation.S3Location.OutputS3BucketName,
                    'OutputS3KeyPrefix': obj.data.OutputLocation.S3Location.OutputS3KeyPrefix
                }
            };
            reqParams.tf['output_location'] = {
                's3_bucket_name': obj.data.OutputLocation.S3Location.OutputS3BucketName,
                's3_key_prefix': obj.data.OutputLocation.S3Location.OutputS3KeyPrefix
            };
        }
        reqParams.cfn['AssociationName'] = obj.data.AssociationName;
        reqParams.tf['association_name'] = obj.data.AssociationName;
        reqParams.cfn['Targets'] = obj.data.Targets;
        if (obj.data.Targets) {
            reqParams.tf['targets'] = [];
            obj.data.Targets.forEach(target => {
                reqParams.tf['targets'].push({
                    'key': target.Key,
                    'values': target.Values
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ssm', obj.id, 'AWS::SSM::Association'),
            'region': obj.region,
            'service': 'ssm',
            'type': 'AWS::SSM::Association',
            'terraformType': 'aws_ssm_association',
            'options': reqParams
        });
    } else if (obj.type == "ssm.maintenancewindow") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['StartDate'] = obj.data.StartDate;
        reqParams.tf['start_date'] = obj.data.StartDate;
        reqParams.cfn['EndDate'] = obj.data.EndDate;
        reqParams.tf['end_date'] = obj.data.EndDate;
        reqParams.cfn['Schedule'] = obj.data.Schedule;
        reqParams.tf['schedule'] = obj.data.Schedule;
        reqParams.cfn['ScheduleTimezone'] = obj.data.ScheduleTimezone;
        reqParams.tf['schedule_timezone'] = obj.data.ScheduleTimezone;
        reqParams.cfn['Duration'] = obj.data.Duration;
        reqParams.tf['duration'] = obj.data.Duration;
        reqParams.cfn['Cutoff'] = obj.data.Cutoff;
        reqParams.tf['cutoff'] = obj.data.Cutoff;
        reqParams.cfn['AllowUnassociatedTargets'] = obj.data.AllowUnassociatedTargets;
        reqParams.tf['allow_unassociated_targets'] = obj.data.AllowUnassociatedTargets;

        /*
        TODO:
        Tags:
            - Resource Tag 
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ssm', obj.id, 'AWS::SSM::MaintenanceWindow'),
            'region': obj.region,
            'service': 'ssm',
            'type': 'AWS::SSM::MaintenanceWindow',
            'terraformType': 'aws_ssm_maintenance_window',
            'options': reqParams
        });
    } else if (obj.type == "ssm.maintenancewindowtarget") {
        reqParams.cfn['WindowId'] = obj.data.WindowId;
        reqParams.tf['window_id'] = obj.data.WindowId;
        reqParams.cfn['ResourceType'] = obj.data.ResourceType;
        reqParams.tf['resource_type'] = obj.data.ResourceType;
        reqParams.cfn['Targets'] = obj.data.Targets;
        if (obj.data.Targets) {
            reqParams.tf['targets'] = [];
            obj.data.Targets.forEach(target => {
                reqParams.tf['targets'].push({
                    'key': target.Key,
                    'values': target.Values
                });
            });
        }
        reqParams.cfn['OwnerInformation'] = obj.data.OwnerInformation;
        reqParams.tf['owner_information'] = obj.data.OwnerInformation;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ssm', obj.id, 'AWS::SSM::MaintenanceWindowTarget'),
            'region': obj.region,
            'service': 'ssm',
            'type': 'AWS::SSM::MaintenanceWindowTarget',
            'terraformType': 'aws_ssm_maintenance_window_target',
            'options': reqParams
        });
    } else if (obj.type == "ssm.maintenancewindowtask") {
        reqParams.cfn['WindowId'] = obj.data.WindowId;
        reqParams.tf['window_id'] = obj.data.WindowId;
        reqParams.cfn['Targets'] = obj.data.Targets;
        if (obj.data.Targets) {
            reqParams.tf['targets'] = [];
            obj.data.Targets.forEach(target => {
                reqParams.tf['targets'].push({
                    'key': target.Key,
                    'values': target.Values
                });
            });
        }
        reqParams.cfn['TaskArn'] = obj.data.TaskArn;
        reqParams.tf['task_arn'] = obj.data.TaskArn;
        reqParams.cfn['ServiceRoleArn'] = obj.data.ServiceRoleArn;
        reqParams.tf['service_role_arn'] = obj.data.ServiceRoleArn;
        reqParams.cfn['TaskType'] = obj.data.TaskType;
        reqParams.tf['task_type'] = obj.data.TaskType;
        reqParams.cfn['TaskParameters'] = obj.data.TaskParameters;
        if (obj.data.TaskParameters) {
            reqParams.tf['task_parameters'] = [];
            Object.keys(obj.data.TaskParameters).forEach(target => {
                reqParams.tf['task_parameters'].push({
                    'name': target,
                    'values': obj.data.TaskParameters[target].Values
                });
            });
        }
        reqParams.cfn['Priority'] = obj.data.Priority;
        reqParams.tf['priority'] = obj.data.Priority;
        reqParams.cfn['MaxConcurrency'] = obj.data.MaxConcurrency;
        reqParams.tf['max_concurrency'] = obj.data.MaxConcurrency;
        reqParams.cfn['MaxErrors'] = obj.data.MaxErrors;
        reqParams.tf['max_errors'] = obj.data.MaxErrors;
        if (obj.data.LoggingInfo) {
            reqParams.cfn['LoggingInfo'] = {
                'S3Bucket': obj.data.LoggingInfo.S3BucketName,
                'Region': obj.data.LoggingInfo.S3Region,
                'S3Prefix': obj.data.LoggingInfo.S3KeyPrefix
            };
            reqParams.tf['logging_info'] = {
                's3_bucket_name': obj.data.LoggingInfo.S3BucketName,
                's3_region': obj.data.LoggingInfo.S3Region,
                's3_bucket_prefix': obj.data.LoggingInfo.S3KeyPrefix
            };
        }
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        if (obj.data.TaskInvocationParameters) {
            reqParams.cfn['TaskInvocationParameters'] = {
                'MaintenanceWindowRunCommandParameters': obj.data.TaskInvocationParameters.RunCommand,
                'MaintenanceWindowAutomationParameters': obj.data.TaskInvocationParameters.Automation,
                'MaintenanceWindowStepFunctionsParameters': obj.data.TaskInvocationParameters.StepFunctions,
                'MaintenanceWindowLambdaParameters': obj.data.TaskInvocationParameters.Lambda
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ssm', obj.id, 'AWS::SSM::MaintenanceWindowTask'),
            'region': obj.region,
            'service': 'ssm',
            'type': 'AWS::SSM::MaintenanceWindowTask',
            'terraformType': 'aws_ssm_maintenance_window_task',
            'options': reqParams
        });
    } else if (obj.type == "ssm.resourcedatasync") {
        reqParams.cfn['SyncName'] = obj.data.SyncName;
        reqParams.tf['name'] = obj.data.SyncName;
        reqParams.tf['s3_destination'] = {
            'bucket_name': obj.data.S3Destination.BucketName,
            'prefix': obj.data.S3Destination.Prefix,
            'sync_format': obj.data.S3Destination.SyncFormat,
            'region': obj.data.S3Destination.Region,
            'kms_key_arn': obj.data.S3Destination.AWSKMSKeyARN,
        };
        reqParams.cfn['BucketName'] = obj.data.S3Destination.BucketName;
        reqParams.cfn['BucketPrefix'] = obj.data.S3Destination.Prefix;
        reqParams.cfn['SyncFormat'] = obj.data.S3Destination.SyncFormat;
        reqParams.cfn['BucketRegion'] = obj.data.S3Destination.Region;
        reqParams.cfn['KMSKeyArn'] = obj.data.S3Destination.AWSKMSKeyARN;
        reqParams.cfn['SyncType'] = obj.data.S3Destination.SyncType;
        if (obj.data.S3Destination.SyncSource) {
            var awsorganizationssource = null;
            if (obj.data.S3Destination.SyncSource.AwsOrganizationsSource) {
                awsorganizationssource = {
                    'OrganizationSourceType': obj.data.S3Destination.SyncSource.AwsOrganizationsSource.OrganizationSourceType,
                    'OrganizationalUnits': obj.data.S3Destination.SyncSource.AwsOrganizationsSource.OrganizationalUnits.map(ou => ou.OrganizationalUnitId)
                };
            }
            reqParams.cfn['SyncSource'] = {
                'AwsOrganizationsSource': awsorganizationssource,
                'IncludeFutureRegions': obj.data.S3Destination.SyncSource.IncludeFutureRegions,
                'SourceRegions': obj.data.S3Destination.SyncSource.SourceRegions,
                'SourceType': obj.data.S3Destination.SyncSource.SourceType
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ssm', obj.id, 'AWS::SSM::ResourceDataSync'),
            'region': obj.region,
            'service': 'ssm',
            'type': 'AWS::SSM::ResourceDataSync',
            'terraformType': 'aws_ssm_resource_data_sync',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
