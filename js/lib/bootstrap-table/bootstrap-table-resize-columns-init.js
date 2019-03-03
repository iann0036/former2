$(document).ready(function() {
    var $table = $('#table');
    var data = [];

    for (var i = 1; i <= 40; i++) {
        data.push({
            "id": i,
            "name": "Status " + i,
            "price": "$" + Math.ceil(Math.random() * 100)
        });
    }

    $table.bootstrapTable({
        iconsPrefix: 'font-icon',
        icons: {
            paginationSwitchDown:'font-icon-arrow-square-down',
            paginationSwitchUp: 'font-icon-arrow-square-down up',
            refresh: 'font-icon-refresh',
            toggle: 'font-icon-list-square',
            columns: 'font-icon-list-rotate',
            export: 'font-icon-download',
            detailOpen: 'font-icon-plus',
            detailClose: 'font-icon-minus-1'
        },
        paginationPreText: '<i class="font-icon font-icon-arrow-left"></i>',
        paginationNextText: '<i class="font-icon font-icon-arrow-right"></i>',
        data: data
    });
});
