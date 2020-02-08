/* ========================================================================== */
// Directory Service
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity &amp; Compliance',
    'service': 'Directory Service',
    'resourcetypes': {
        'Directories': {
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
                        field: 'type',
                        title: 'Type',
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
                        field: 'size',
                        title: 'Size',
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

async function updateDatatableSecurityIdentityAndComplianceDirectoryService() {
    blockUI('#section-securityidentityandcompliance-directoryservice-directories-datatable');

    await sdkcall("DirectoryService", "describeDirectories", {
        // no params
    }, true).then((data) => {
        $('#section-securityidentityandcompliance-directoryservice-directories-datatable').bootstrapTable('removeAll');

        data.DirectoryDescriptions.forEach(directory => {
            if (directory.Type == "SimpleAD") {
                $('#section-securityidentityandcompliance-directoryservice-directories-datatable').bootstrapTable('append', [{
                    f2id: directory.DirectoryId,
                    f2type: 'directoryservice.simplead',
                    f2data: directory,
                    f2region: region,
                    name: directory.Name,
                    type: "Simple AD",
                    id: directory.DirectoryId,
                    size: directory.Size,
                    description: directory.Description
                }]);
            } else if (directory.Type == "MicrosoftAD") {
                $('#section-securityidentityandcompliance-directoryservice-directories-datatable').bootstrapTable('append', [{
                    f2id: directory.DirectoryId,
                    f2type: 'directoryservice.microsoftad',
                    f2data: directory,
                    f2region: region,
                    name: directory.Name,
                    type: "Microsoft AD",
                    id: directory.DirectoryId,
                    size: directory.Size,
                    description: directory.Description
                }]);
            }
        });

        unblockUI('#section-securityidentityandcompliance-directoryservice-directories-datatable');
    });
}
