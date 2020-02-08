/* ========================================================================== */
// SWF
/* ========================================================================== */

sections.push({
    'category': 'Application Integration',
    'service': 'SWF',
    'resourcetypes': {
        'Domains': {
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
                        field: 'description',
                        title: 'Description',
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

async function updateDatatableApplicationIntegrationSWF() {
    blockUI('#section-applicationintegration-swf-domains-datatable');

    await sdkcall("SWF", "listDomains", {
        registrationStatus: 'REGISTERED'
    }, true).then(async (data) => {
        $('#section-applicationintegration-swf-domains-datatable').bootstrapTable('removeAll');

        await Promise.all(data.domainInfos.map(domain => {
            return sdkcall("SWF", "describeDomain", {
                name: domain.name
            }, true).then(async (data) => {
                $('#section-applicationintegration-swf-domains-datatable').bootstrapTable('append', [{
                    f2id: data.domainInfo.name,
                    f2type: 'swf.domain',
                    f2data: data,
                    f2region: region,
                    name: data.domainInfo.name,
                    description: data.domainInfo.description
                }]);
            });
        }));

        unblockUI('#section-applicationintegration-swf-domains-datatable');
    });
}
