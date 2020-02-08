/* ========================================================================== */
// QLDB
/* ========================================================================== */

sections.push({
    'category': 'Database',
    'service': 'QLDB',
    'resourcetypes': {
        'Ledgers': {
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
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationdate',
                        title: 'Creation Date',
                        sortable: true,
                        editable: true,
                        formatter: timeAgoFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableDatabaseQLDB() {
    blockUI('#section-database-qldb-ledgers-datatable');

    await sdkcall("QLDB", "listLedgers", {
        // no params
    }, false).then(async (data) => {
        $('#section-database-qldb-ledgers-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Ledgers.map(async (ledger) => {
            return sdkcall("QLDB", "describeLedger", {
                Name: ledger.Name
            }, false).then(async (data) => {
                $('#section-database-qldb-ledgers-datatable').bootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'qldb.ledger',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    creationdate: data.CreationDateTime
                }]);
            });
        }));

    }).catch(() => { });

    unblockUI('#section-database-qldb-ledgers-datatable');
}
