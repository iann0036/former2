/* ========================================================================== */
// Service Quotas
/* ========================================================================== */

sections.push({
    'category': 'Other',
    'service': 'Service Quotas',
    'resourcetypes': {
        'Service Quotas': {
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
                        title: 'Service Name',
                        field: 'servicename',
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
                        field: 'quotaname',
                        title: 'Quota Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'value',
                        title: 'Value',
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

async function updateDatatableOtherServiceQuotas() {
    blockUI('#section-other-servicequotas-servicequotas-datatable');

    await sdkcall("ServiceQuotas", "listRequestedServiceQuotaChangeHistory", {
        // no params
    }, true).then(async (data) => {
        $('#section-other-servicequotas-servicequotas-datatable').bootstrapTable('removeAll');

        data.RequestedQuotas.forEach(quota => {
            var value = quota.DesiredValue;

            if (quota.Unit && quota.Unit != "None") {
                value = value + " " + quota.Unit;
            }

            $('#section-other-servicequotas-servicequotas-datatable').bootstrapTable('append', [{
                f2id: quota.Id,
                f2type: 'servicequotas.servicequota',
                f2data: quota,
                f2region: region,
                id: quota.Id,
                servicename: quota.ServiceName,
                quotaname: quota.QuotaName,
                value: value
            }]);
        });
    }).catch(() => { });

    unblockUI('#section-other-servicequotas-servicequotas-datatable');
}
