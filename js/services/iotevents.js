/* ========================================================================== */
// IoT Events
/* ========================================================================== */

sections.push({
    'category': 'Internet of Things',
    'service': 'Events',
    'resourcetypes': {
        'Detector Models': {
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
                    },
                    {
                        field: 'rolearn',
                        title: 'Role ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Inputs': {
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

async function updateDatatableInternetofThingsEvents() {
    blockUI('#section-internetofthings-events-detectormodels-datatable');
    blockUI('#section-internetofthings-events-inputs-datatable');

    await sdkcall("IoTEvents", "listDetectorModels", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-events-detectormodels-datatable').bootstrapTable('removeAll');

        await Promise.all(data.detectorModelSummaries.map(async (detectorModel) => {
            return sdkcall("IoTEvents", "describeDetectorModel", {
                detectorModelName: detectorModel.detectorModelName
            }, true).then(data => {
                $('#section-internetofthings-events-detectormodels-datatable').bootstrapTable('append', [{
                    f2id: data.detectorModel.detectorModelConfiguration.detectorModelArn,
                    f2type: 'iotevents.detectormodel',
                    f2data: data.detectorModel,
                    f2region: region,
                    name: data.detectorModel.detectorModelConfiguration.detectorModelName,
                    description: data.detectorModel.detectorModelConfiguration.detectorModelDescription,
                    rolearn: data.detectorModel.detectorModelConfiguration.roleArn
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("IoTEvents", "listInputs", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-events-inputs-datatable').bootstrapTable('removeAll');

        await Promise.all(data.inputSummaries.map(input => {
            return sdkcall("IoTEvents", "describeInput", {
                inputName: input.inputName
            }, true).then(data => {
                $('#section-internetofthings-events-inputs-datatable').bootstrapTable('append', [{
                    f2id: data.input.inputConfiguration.inputArn,
                    f2type: 'iotevents.input',
                    f2data: data.input,
                    f2region: region,
                    name: data.input.inputConfiguration.inputName,
                    description: data.input.inputConfiguration.inputDescription
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-internetofthings-events-detectormodels-datatable');
    unblockUI('#section-internetofthings-events-inputs-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
