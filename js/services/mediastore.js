/* ========================================================================== */
// MediaStore
/* ========================================================================== */

sections.push({
    'category': 'Media Services',
    'service': 'MediaStore',
    'resourcetypes': {
        'Containers': {
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
                        field: 'endpoint',
                        title: 'Endpoint',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Container Policies': {
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
                        field: 'policy',
                        title: 'Policy',
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

async function updateDatatableMediaServicesMediaStore() {
    blockUI('#section-mediaservices-mediastore-containers-datatable');
    blockUI('#section-mediaservices-mediastore-containerpolicies-datatable');

    await sdkcall("MediaStore", "listContainers", {
        // no params
    }, true).then(async (data) => {
        $('#section-mediaservices-mediastore-containers-datatable').bootstrapTable('removeAll');
        $('#section-mediaservices-mediastore-containerpolicies-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Containers.map(container => {
            return Promise.all([
                sdkcall("MediaStore", "describeContainer", {
                    ContainerName: container.Name
                }, true).then(async (containerdata) => {
                    await Promise.all([
                        sdkcall("MediaStore", "getCorsPolicy", {
                            ContainerName: container.Name
                        }, false).then((data) => {
                            containerdata['CorsPolicy'] = data.CorsPolicy;
                        }).catch(() => { }),
                        sdkcall("MediaStore", "getLifecyclePolicy", {
                            ContainerName: container.Name
                        }, false).then((data) => {
                            containerdata['LifecyclePolicy'] = data.LifecyclePolicy;
                        }).catch(() => { }),
                        sdkcall("MediaStore", "getContainerPolicy", {
                            ContainerName: container.Name
                        }, false).then((data) => {
                            containerdata['Policy'] = data.Policy;
                        }).catch(() => { })
                    ]);

                    $('#section-mediaservices-mediastore-containers-datatable').bootstrapTable('append', [{
                        f2id: containerdata.Container.ARN,
                        f2type: 'mediastore.container',
                        f2data: containerdata,
                        f2region: region,
                        name: containerdata.Container.Name,
                        endpoint: containerdata.Container.Endpoint
                    }]);

                    if (containerdata.Policy) {
                        $('#section-mediaservices-mediastore-containerpolicies-datatable').bootstrapTable('append', [{
                            f2id: container.Name + " Policy",
                            f2type: 'mediastore.containerpolicy',
                            f2data: {
                                'Policy': containerdata.Policy,
                                'ContainerName': container.Name
                            },
                            f2region: region,
                            name: container.Name,
                            policy: containerdata.Policy
                        }]);
                    }
                })
                // additional removed
            ]);
        }));

        unblockUI('#section-mediaservices-mediastore-containers-datatable');
        unblockUI('#section-mediaservices-mediastore-containerpolicies-datatable');
    });
}
