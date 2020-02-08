/* ========================================================================== */
// License Manager
/* ========================================================================== */

sections.push({
    'category': 'Management &amp; Governance',
    'service': 'License Manager',
    'resourcetypes': {
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
    blockUI('#section-managementandgovernance-licensemanager-licenseconfigurations-datatable');
    blockUI('#section-managementandgovernance-licensemanager-associations-datatable');

    await sdkcall("LicenseManager", "listLicenseConfigurations", {
        // no params
    }, false).then(async (data) => {
        $('#section-managementandgovernance-licensemanager-licenseconfigurations-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-licensemanager-associations-datatable').bootstrapTable('removeAll');

        await Promise.all(data.LicenseConfigurations.map(licenseconfiguration => {
            return sdkcall("LicenseManager", "getLicenseConfiguration", {
                LicenseConfigurationArn: licenseconfiguration.LicenseConfigurationArn
            }, true).then(async (data) => {
                $('#section-managementandgovernance-licensemanager-licenseconfigurations-datatable').bootstrapTable('append', [{
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

                        $('#section-managementandgovernance-licensemanager-associations-datatable').bootstrapTable('append', [{
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
}
