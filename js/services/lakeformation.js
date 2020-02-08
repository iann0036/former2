/* ========================================================================== */
// Lake Formation
/* ========================================================================== */

sections.push({
    'category': 'Analytics',
    'service': 'Lake Formation',
    'resourcetypes': {
        'Resources': {
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
                        title: 'Resource ARN',
                        field: 'resourcearn',
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
                        field: 'rolearn',
                        title: 'Role ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Permissions': {
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
                        title: 'Principal',
                        field: 'principal',
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
                        field: 'resource',
                        title: 'Resource',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'permissions',
                        title: 'Permissions',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Data Lake Settings': {
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
                        title: 'Admins',
                        field: 'admins',
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

async function updateDatatableAnalyticsLakeFormation() {
    blockUI('#section-analytics-lakeformation-resources-datatable');
    blockUI('#section-analytics-lakeformation-permissions-datatable');
    blockUI('#section-analytics-lakeformation-datalakesettings-datatable');

    await sdkcall("LakeFormation", "listResources", {
        // no params
    }, false).then(async (data) => {
        $('#section-analytics-lakeformation-resources-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ResourceInfoList.map(async (resource) => {
            return sdkcall("LakeFormation", "describeResource", {
                ResourceArn: resource.ResourceArn
            }, false).then(async (data) => {
                $('#section-analytics-lakeformation-resources-datatable').bootstrapTable('append', [{
                    f2id: data.ResourceInfo.ResourceArn,
                    f2type: 'lakeformation.resource',
                    f2data: data.ResourceInfo,
                    f2region: region,
                    resourcearn: data.ResourceInfo.ResourceArn,
                    rolearn: data.ResourceInfo.RoleArn
                }]);
            });
        }));

    }).catch(() => { });

    await sdkcall("LakeFormation", "listPermissions", {
        // no params
    }, false).then(async (data) => {
        $('#section-analytics-lakeformation-permissions-datatable').bootstrapTable('removeAll');

        data.PrincipalResourcePermissions.forEach(permission => {
            $('#section-analytics-lakeformation-permissions-datatable').bootstrapTable('append', [{
                f2id: permission.Principal.DataLakePrincipalIdentifier + " " + JSON.stringify(permission.Resource),
                f2type: 'lakeformation.permission',
                f2data: permission,
                f2region: region,
                principal: permission.Principal.DataLakePrincipalIdentifier,
                resource: JSON.stringify(permission.Resource),
                permissions: permission.Permissions
            }]);
        });

    }).catch(() => { });

    await sdkcall("LakeFormation", "getDataLakeSettings", {
        // no params
    }, false).then(async (data) => {
        $('#section-analytics-lakeformation-datalakesettings-datatable').bootstrapTable('removeAll');

        var datalakeadmins = [];
        if (data.DataLakeSettings.DataLakeAdmins) {
            data.DataLakeSettings.DataLakeAdmins.forEach(admin => {
                datalakeadmins.push(admin.DataLakePrincipalIdentifier);
            });
        }

        $('#section-analytics-lakeformation-datalakesettings-datatable').bootstrapTable('append', [{
            f2id: "LakeFormationDataLakeSettings",
            f2type: 'lakeformation.datalakesettings',
            f2data: data.DataLakeSettings,
            f2region: region,
            admins: datalakeadmins.join(",")
        }]);

    }).catch(() => { });

    unblockUI('#section-analytics-lakeformation-resources-datatable');
    unblockUI('#section-analytics-lakeformation-permissions-datatable');
    unblockUI('#section-analytics-lakeformation-datalakesettings-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
