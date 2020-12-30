/* ========================================================================== */
// License Manager
/* ========================================================================== */

sections.push({
    'category': 'Management &amp; Governance',
    'service': 'License Manager',
    'resourcetypes': {
        'Licenses': {
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
                        field: 'productname',
                        title: 'Product Name',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'beneficiary',
                        title: 'Beneficiary',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Grants': {
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
                        field: 'grantee',
                        title: 'Grantee',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'License Configurations': {
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'consumption',
                        title: 'Consumption',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Associations': {
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
                        field: 'licenseconfiguration',
                        title: 'License Configuration',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'associationtime',
                        title: 'Association Time',
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

async function updateDatatableManagementAndGovernanceLicenseManager() {
    blockUI('#section-managementandgovernance-licensemanager-licenses-datatable');
    blockUI('#section-managementandgovernance-licensemanager-grants-datatable');
    blockUI('#section-managementandgovernance-licensemanager-licenseconfigurations-datatable');
    blockUI('#section-managementandgovernance-licensemanager-associations-datatable');

    await sdkcall("LicenseManager", "listLicenses", {
        // no params
    }, false).then(async (data) => {
        $('#section-managementandgovernance-licensemanager-licenses-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Licenses.map(license => {
            return sdkcall("LicenseManager", "getLicense", {
                LicenseArn: license.LicenseArn
            }, true).then((data) => {
                $('#section-managementandgovernance-licensemanager-licenses-datatable').deferredBootstrapTable('append', [{
                    f2id: data.License.LicenseArn,
                    f2type: 'licensemanager.license',
                    f2data: data.License,
                    f2region: region,
                    name: data.License.LicenseName,
                    productname: data.License.ProductName,
                    beneficiary: data.License.Beneficiary
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("LicenseManager", "listDistributedGrants", {
        // no params
    }, false).then(async (data) => {
        $('#section-managementandgovernance-licensemanager-grants-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Grants.map(grant => {
            return sdkcall("LicenseManager", "getGrant", {
                GrantArn: grant.GrantArn
            }, true).then((data) => {
                $('#section-managementandgovernance-licensemanager-grants-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Grant.GrantArn,
                    f2type: 'licensemanager.grant',
                    f2data: data.Grant,
                    f2region: region,
                    name: data.Grant.LicenseName,
                    grantee: data.Grant.GranteePrincipalArn
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("LicenseManager", "listLicenseConfigurations", {
        // no params
    }, false).then(async (data) => {
        $('#section-managementandgovernance-licensemanager-licenseconfigurations-datatable').deferredBootstrapTable('removeAll');
        $('#section-managementandgovernance-licensemanager-associations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.LicenseConfigurations.map(licenseconfiguration => {
            return sdkcall("LicenseManager", "getLicenseConfiguration", {
                LicenseConfigurationArn: licenseconfiguration.LicenseConfigurationArn
            }, true).then(async (data) => {
                $('#section-managementandgovernance-licensemanager-licenseconfigurations-datatable').deferredBootstrapTable('append', [{
                    f2id: data.LicenseConfigurationArn,
                    f2type: 'licensemanager.licenseconfiguration',
                    f2data: data,
                    f2region: region,
                    id: data.LicenseConfigurationId,
                    name: data.Name,
                    description: data.Description,
                    consumption: data.ConsumedLicenses + " / " + data.LicenseCount
                }]);

                await sdkcall("LicenseManager", "listAssociationsForLicenseConfiguration", {
                    LicenseConfigurationArn: licenseconfiguration.LicenseConfigurationArn
                }, true).then(async (data) => {
                    data.LicenseConfigurationAssociations.forEach(association => {
                        association['LicenseConfigurationArn'] = licenseconfiguration.LicenseConfigurationArn;

                        $('#section-managementandgovernance-licensemanager-associations-datatable').deferredBootstrapTable('append', [{
                            f2id: licenseconfiguration.LicenseConfigurationId + " " + association.ResourceArn,
                            f2type: 'licensemanager.association',
                            f2data: association,
                            f2region: region,
                            licenseconfiguration: licenseconfiguration.LicenseConfigurationId,
                            resourcearn: association.ResourceArn,
                            associationtime: association.AssociationTime
                        }]);
                    });
                });
            });
        }));

        unblockUI('#section-managementandgovernance-licensemanager-licenseconfigurations-datatable');
        unblockUI('#section-managementandgovernance-licensemanager-associations-datatable');
    }).catch(() => { });

    unblockUI('#section-managementandgovernance-licensemanager-licenses-datatable');
    unblockUI('#section-managementandgovernance-licensemanager-grants-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "licensemanager.licenseconfiguration") {
        reqParams.tf['name'] = obj.data.Name;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.tf['license_counting_type'] = obj.data.LicenseCountingType;
        reqParams.tf['license_rules'] = obj.data.LicenseRules;
        reqParams.tf['license_count'] = obj.data.LicenseCount;
        reqParams.tf['license_count_hard_limit'] = obj.data.LicenseCountHardLimit;
        if (obj.data.Tags) {
            reqParams.tf['tags'] = {};
            obj.data.Tags.forEach(tag => {
                reqParams.tf['tags'][tag['Key']] = tag['Value'];
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('licensemanager', obj.id, 'AWS::LicenseManager::LicenseConfiguration'), // not real resource type
            'region': obj.region,
            'service': 'licensemanager',
            'terraformType': 'aws_licensemanager_license_configuration',
            'options': reqParams
        });
    } else if (obj.type == "licensemanager.association") {
        reqParams.tf['license_configuration_arn'] = obj.data.LicenseConfigurationArn;
        reqParams.tf['resource_arn'] = obj.data.ResourceArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('licensemanager', obj.id, 'AWS::LicenseManager::Association'), // not real resource type
            'region': obj.region,
            'service': 'licensemanager',
            'terraformType': 'aws_licensemanager_association',
            'options': reqParams
        });
    } else if (obj.type == "licensemanager.license") {
        reqParams.cfn['LicenseName'] = obj.data.LicenseName;
        reqParams.cfn['ProductName'] = obj.data.ProductName;
        reqParams.cfn['ProductSKU'] = obj.data.ProductSKU;
        if (obj.data.Issuer) {
            reqParams.cfn['Issuer'] = {
                'Name': obj.data.Issuer.Name,
                'SignKey': obj.data.Issuer.SignKey
            };
        }
        reqParams.cfn['HomeRegion'] = obj.data.HomeRegion;
        reqParams.cfn['Validity'] = obj.data.Validity;
        reqParams.cfn['Beneficiary'] = obj.data.Beneficiary;
        reqParams.cfn['Entitlements'] = obj.data.Entitlements;
        reqParams.cfn['ConsumptionConfiguration'] = obj.data.ConsumptionConfiguration;
        reqParams.cfn['LicenseMetadata'] = obj.data.LicenseMetadata;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('licensemanager', obj.id, 'AWS::LicenseManager::License'),
            'region': obj.region,
            'service': 'licensemanager',
            'type': 'AWS::LicenseManager::License',
            'options': reqParams
        });
    } else if (obj.type == "licensemanager.grant") {
        reqParams.cfn['GrantName'] = obj.data.GrantName;
        reqParams.cfn['ParentArn'] = obj.data.ParentArn;
        reqParams.cfn['LicenseArn'] = obj.data.LicenseArn;
        reqParams.cfn['GranteePrincipalArn'] = obj.data.GranteePrincipalArn;
        reqParams.cfn['HomeRegion'] = obj.data.HomeRegion;
        reqParams.cfn['GrantedOperations'] = obj.data.GrantedOperations;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('licensemanager', obj.id, 'AWS::LicenseManager::Grant'),
            'region': obj.region,
            'service': 'licensemanager',
            'type': 'AWS::LicenseManager::Grant',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
