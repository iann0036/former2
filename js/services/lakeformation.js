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
        },
        'Data Cells Filters': {
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
                        field: 'tablename',
                        title: 'Table Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'databasename',
                        title: 'Database Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Tags': {
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
                        title: 'Tag Key',
                        field: 'tagkey',
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
        },
        'Tag Associations': {
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
    blockUI('#section-analytics-lakeformation-datacellsfilters-datatable');
    blockUI('#section-analytics-lakeformation-tags-datatable');
    blockUI('#section-analytics-lakeformation-tagassocations-datatable');

    await sdkcall("LakeFormation", "listResources", {
        // no params
    }, false).then(async (data) => {
        $('#section-analytics-lakeformation-resources-datatable').deferredBootstrapTable('removeAll');
        $('#section-analytics-lakeformation-tagassocations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ResourceInfoList.map(async (resource) => {
            await sdkcall("LakeFormation", "describeResource", {
                ResourceArn: resource.ResourceArn
            }, false).then(async (data) => {
                $('#section-analytics-lakeformation-resources-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ResourceInfo.ResourceArn,
                    f2type: 'lakeformation.resource',
                    f2data: data.ResourceInfo,
                    f2region: region,
                    resourcearn: data.ResourceInfo.ResourceArn,
                    rolearn: data.ResourceInfo.RoleArn
                }]);
            });

            var resource = {};

            // TODO

            return sdkcall("LakeFormation", "getResourceLFTags", {
                Resource: resource
            }, false).then(async (data) => {
                $('#section-analytics-lakeformation-tagassocations-datatable').deferredBootstrapTable('append', [{
                    f2id: resource.ResourceArn + " Tag Association",
                    f2type: 'lakeformation.tagassocation',
                    f2data: data,
                    f2region: region,
                    id: resource.ResourceArn + " Tag Associations"
                }]);
            }).catch(() => { });
        }));

    }).catch(() => { });

    await sdkcall("LakeFormation", "listPermissions", {
        // no params
    }, false).then(async (data) => {
        $('#section-analytics-lakeformation-permissions-datatable').deferredBootstrapTable('removeAll');

        data.PrincipalResourcePermissions.forEach(permission => {
            $('#section-analytics-lakeformation-permissions-datatable').deferredBootstrapTable('append', [{
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
        $('#section-analytics-lakeformation-datalakesettings-datatable').deferredBootstrapTable('removeAll');

        var datalakeadmins = [];
        if (data.DataLakeSettings.DataLakeAdmins) {
            data.DataLakeSettings.DataLakeAdmins.forEach(admin => {
                datalakeadmins.push(admin.DataLakePrincipalIdentifier);
            });
        }

        if (data.DataLakeSettings.DataLakeAdmins.length) {
            $('#section-analytics-lakeformation-datalakesettings-datatable').deferredBootstrapTable('append', [{
                f2id: "LakeFormationDataLakeSettings",
                f2type: 'lakeformation.datalakesettings',
                f2data: data.DataLakeSettings,
                f2region: region,
                admins: datalakeadmins.join(",")
            }]);
        }
    }).catch(() => { });

    await sdkcall("LakeFormation", "listDataCellsFilter", {
        // no params
    }, false).then(async (data) => {
        $('#section-analytics-lakeformation-datacellsfilters-datatable').deferredBootstrapTable('removeAll');

        data.DataCellsFilters.forEach(datacellsfilter => {
            $('#section-analytics-lakeformation-datacellsfilters-datatable').deferredBootstrapTable('append', [{
                f2id: datacellsfilter.TableCatalogId + " " + datacellsfilter.DatabaseName + " " + datacellsfilter.TableName + " " + datacellsfilter.Name,
                f2type: 'lakeformation.datacellsfilter',
                f2data: datacellsfilter,
                f2region: region,
                name: datacellsfilter.Name,
                tablename: datacellsfilter.TableName,
                databasename: datacellsfilter.DatabaseName
            }]);
        });

    }).catch(() => { });

    await sdkcall("LakeFormation", "listLFTags", {
        // no params
    }, false).then(async (data) => {
        $('#section-analytics-lakeformation-tags-datatable').deferredBootstrapTable('removeAll');

        data.LFTags.forEach(tag => {
            $('#section-analytics-lakeformation-tags-datatable').deferredBootstrapTable('append', [{
                f2id: tag.CatalogId + " " + tag.TagKey,
                f2type: 'lakeformation.tag',
                f2data: datacellsfilter,
                f2region: region,
                tagkey: datacellsfilter.TagKey
            }]);
        });

    }).catch(() => { });

    unblockUI('#section-analytics-lakeformation-resources-datatable');
    unblockUI('#section-analytics-lakeformation-permissions-datatable');
    unblockUI('#section-analytics-lakeformation-datalakesettings-datatable');
    unblockUI('#section-analytics-lakeformation-datacellsfilters-datatable');
    unblockUI('#section-analytics-lakeformation-tags-datatable');
    unblockUI('#section-analytics-lakeformation-tagassocations-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "lakeformation.resource") {
        reqParams.cfn['ResourceArn'] = obj.data.ResourceArn;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;

        /*
        TODO:
        UseServiceLinkedRole
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lakeformation', obj.id, 'AWS::LakeFormation::Resource'),
            'region': obj.region,
            'service': 'lakeformation',
            'type': 'AWS::LakeFormation::Resource',
            'options': reqParams
        });
    } else if (obj.type == "lakeformation.permission") {
        if (obj.data.Resource && (obj.data.Resource.Database || obj.data.Resource.Table)) {
            reqParams.cfn['DataLakePrincipal'] = obj.data.Principal;
            reqParams.cfn['Permissions'] = obj.data.Permissions;
            reqParams.cfn['PermissionsWithGrantOption'] = obj.data.PermissionsWithGrantOption;
            if (obj.data.Resource.Database) {
                reqParams.cfn['Resource'] = {
                    'DatabaseResource': obj.data.Resource.Database
                };
            } else if (obj.data.Resource.Table) {
                reqParams.cfn['Resource'] = {
                    'TableResource': obj.data.Resource.Table
                };
            } else if (obj.data.Resource.DataLocation && obj.data.Resource.DataLocation.ResourceArn) {
                reqParams.cfn['Resource'] = {
                    'DataLocationResource': {
                        'S3Resource': obj.data.Resource.DataLocation.ResourceArn
                    }
                };
            } else if (obj.data.Resource.TableWithColumnsResource) {
                reqParams.cfn['Resource'] = {
                    'TableWithColumnsResource': obj.data.Resource.TableWithColumnsResource
                };
            }

            tracked_resources.push({
                'obj': obj,
                'logicalId': getResourceName('lakeformation', obj.id, 'AWS::LakeFormation::Permissions'),
                'region': obj.region,
                'service': 'lakeformation',
                'type': 'AWS::LakeFormation::Permissions',
                'options': reqParams
            });
        }
    } else if (obj.type == "lakeformation.datalakesettings") {
        reqParams.cfn['Admins'] = obj.data.DataLakeAdmins;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lakeformation', obj.id, 'AWS::LakeFormation::DataLakeSettings'),
            'region': obj.region,
            'service': 'lakeformation',
            'type': 'AWS::LakeFormation::DataLakeSettings',
            'options': reqParams
        });
    } else if (obj.type == "lakeformation.datacellsfilter") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['DatabaseName'] = obj.data.DatabaseName;
        reqParams.cfn['TableName'] = obj.data.TableName;
        reqParams.cfn['TableCatalogId'] = obj.data.TableCatalogId;
        reqParams.cfn['RowFilter'] = obj.data.RowFilter;
        reqParams.cfn['ColumnNames'] = obj.data.ColumnNames;
        reqParams.cfn['ColumnWildcard'] = obj.data.ColumnWildcard;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lakeformation', obj.id, 'AWS::LakeFormation::DataCellsFilter'),
            'region': obj.region,
            'service': 'lakeformation',
            'type': 'AWS::LakeFormation::DataCellsFilter',
            'options': reqParams
        });
    } else if (obj.type == "lakeformation.tag") {
        reqParams.cfn['CatalogId'] = obj.data.CatalogId;
        reqParams.cfn['TagKey'] = obj.data.TagKey;
        reqParams.cfn['TagValues'] = obj.data.TagValues;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lakeformation', obj.id, 'AWS::LakeFormation::Tag'),
            'region': obj.region,
            'service': 'lakeformation',
            'type': 'AWS::LakeFormation::Tag',
            'options': reqParams
        });
    } else if (obj.type == "lakeformation.tagassociation") {
        reqParams.cfn['LFTags'] = obj.data.LFTags;
        reqParams.cfn['Resource'] = obj.data.Resource;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lakeformation', obj.id, 'AWS::LakeFormation::TagAssociation'),
            'region': obj.region,
            'service': 'lakeformation',
            'type': 'AWS::LakeFormation::TagAssociation',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
