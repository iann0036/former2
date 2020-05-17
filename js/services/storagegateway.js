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
        $('#section-storage-storagegateway-gateways-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Gateways.map(gateways => {
            return sdkcall("StorageGateway", "describeGatewayInformation", {
                GatewayARN: gateway.GatewayARN
            }, true).then(async (data) => {
                $('#section-storage-storagegateway-gateways-datatable').deferredBootstrapTable('append', [{
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
    if (obj.type == "storagegateway.gateway") {
        reqParams.tf['gateway_name'] = obj.data.GatewayName;
        reqParams.tf['gateway_timezone'] = obj.data.GatewayTimezone;
        reqParams.tf['gateway_type'] = obj.data.GatewayType;
        reqParams.tf['activation_key'] = "REPLACEME";

        /*
        TODO:
        gateway_ip_address
        media_changer_type
        tape_drive_type
        smb_active_directory_settings
        smb_guest_password
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('storagegateway', obj.id, 'AWS::StorageGateway::Gateway'), // not real resource type
            'region': obj.region,
            'service': 'storagegateway',
            'terraformType': 'aws_storagegateway_gateway',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
