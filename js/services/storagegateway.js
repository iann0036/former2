/* ========================================================================== */
// Storage Gateway
/* ========================================================================== */

sections.push({
    'category': 'Storage',
    'service': 'Storage Gateway',
    'resourcetypes': {
        'Gateways': {
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
                        field: 'type',
                        title: 'Type',
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

async function updateDatatableStorageStorageGateway() {
    blockUI('#section-storage-storagegateway-gateways-datatable');

    await sdkcall("StorageGateway", "listGateways", {
        // no params
    }, true).then(async (data) => {
        $('#section-storage-storagegateway-gateways-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Gateways.map(gateways => {
            return sdkcall("StorageGateway", "describeGatewayInformation", {
                GatewayARN: gateway.GatewayARN
            }, true).then(async (data) => {
                $('#section-storage-storagegateway-gateways-datatable').bootstrapTable('append', [{
                    f2id: data.GatewayARN,
                    f2type: 'storagegateway.gateway',
                    f2data: data,
                    f2region: region,
                    id: data.GatewayId,
                    name: data.GatewayName,
                    type: data.GatewayType
                }]);
            });
        }));
    });

    unblockUI('#section-storage-storagegateway-gateways-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
