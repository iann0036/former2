$(document).ready(function() {
    var $table = $('#table');

    $(function () {
        buildTable($table, 30, 30);

        $('#fixedNumber').change(function () {
            buildTable($table, 30, 30);
        });
    });

    function buildTable($el, cells, rows) {
        var i, j, row,
            columns = [],
            data = [];

        for (i = 1; i <= cells; i++) {
            columns.push({
                field: 'field' + i,
                title: 'Cell' + i,
                sortable: true
            });
        }

        for (i = 1; i <= rows; i++) {
            row = {};
            for (j = 1; j <= cells; j++) {
                row['field' + j] = 'Row-' + i + '-' + j;
            }
            data.push(row);
        }

        $el.bootstrapTable('destroy').bootstrapTable({
            iconsPrefix: 'font-icon',
            icons: {
                columns: 'font-icon-list-rotate'
            },
            columns: columns,
            data: data,
            search: true,
            toolbar: '#toolbar',
            fixedColumns: true,
            fixedNumber: + $('#fixedNumber').val()
        });
    }
});

