/* ========================================================================== */
// IoT Device Management
/* ========================================================================== */

sections.push({
    'category': 'Internet of Things',
    'service': 'Device Management',
    'resourcetypes': {
        'Fleet Hub Applications': {
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

async function updateDatatableInternetofThingsDeviceManagement() {
    blockUI('#section-internetofthings-devicemanagement-fleethubapplications-datatable');

    await sdkcall("IoTFleetHub", "listApplications", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-devicemanagement-fleethubapplications-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.applicationSummaries.map(async (app) => {
            return sdkcall("IoTFleetHub", "describeApplication", {
                applicationId: app.applicationId
            }, true).then(async (data) => {
                $('#section-internetofthings-devicemanagement-fleethubapplications-datatable').deferredBootstrapTable('append', [{
                    f2id: data.applicationArn,
                    f2type: 'iotdevicemanagement.fleethubapplication',
                    f2data: data,
                    f2region: region,
                    name: data.applicationName,
                    description: data.applicationDescription
                }]);
            });
        }));
    }).catch(err => { });

    unblockUI('#section-internetofthings-devicemanagement-fleethubapplications-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "iotdevicemanagement.fleethubapplication") {
        reqParams.cfn['ApplicationName'] = obj.data.applicationName;
        reqParams.cfn['ApplicationDescription'] = obj.data.applicationDescription;
        reqParams.cfn['RoleArn'] = obj.data.roleArn;
        if (obj.data.tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoTFleetHub::Application'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoTFleetHub::Application',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
