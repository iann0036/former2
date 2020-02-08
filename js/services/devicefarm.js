/* ========================================================================== */
// Device Farm
/* ========================================================================== */

sections.push({
    'category': 'Mobile',
    'service': 'Device Farm',
    'resourcetypes': {
        'Projects': {
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

async function updateDatatableMobileDeviceFarm() {
    blockUI('#section-mobile-devicefarm-projects-datatable');

    await sdkcall("DeviceFarm", "listProjects", {
        // no params
    }, false).then(async (data) => {
        $('#section-mobile-devicefarm-projects-datatable').bootstrapTable('removeAll');

        await Promise.all(data.projects.map(project => {
            return sdkcall("DeviceFarm", "getProject", {
                arn: project.arn
            }, false).then((data) => {
                $('#section-mobile-devicefarm-projects-datatable').bootstrapTable('append', [{
                    f2id: data.project.arn,
                    f2type: 'devicefarm.project',
                    f2data: data.project,
                    f2region: region,
                    name: data.project.name,
                    creationtime: data.created
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-mobile-devicefarm-projects-datatable');
}
