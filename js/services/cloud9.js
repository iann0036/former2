/* ========================================================================== */
// Cloud9
/* ========================================================================== */

sections.push({
    'category': 'Developer Tools',
    'service': 'Cloud9',
    'resourcetypes': {
        'Environments': {
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
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

async function updateDatatableDeveloperToolsCloud9() {
    blockUI('#section-developertools-cloud9-environments-datatable');

    await sdkcall("Cloud9", "listEnvironments", {
        // no params
    }, true).then(async (data) => {
        $('#section-developertools-cloud9-environments-datatable').bootstrapTable('removeAll');

        await Promise.all(data.environmentIds.map(environmentId => {
            return sdkcall("Cloud9", "describeEnvironments", {
                environmentIds: [environmentId]
            }, true).then((data) => {
                data.environments.forEach(environment => {
                    $('#section-developertools-cloud9-environments-datatable').bootstrapTable('append', [{
                        f2id: environment.arn,
                        f2type: 'cloud9.environment',
                        f2data: environment,
                        f2region: region,
                        f2link: 'https://console.aws.amazon.com/cloud9/home/environments/' + environment.id,
                        name: environment.name,
                        id: environment.id,
                        description: environment.description
                    }]);
                });
            });
        }));
    }).catch(() => { });

    unblockUI('#section-developertools-cloud9-environments-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
