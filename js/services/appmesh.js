/* ========================================================================== */
// App Mesh
/* ========================================================================== */

sections.push({
    'category': 'Networking &amp; Content Delivery',
    'service': 'App Mesh',
    'resourcetypes': {
        'Meshes': {
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
                        field: 'uid',
                        title: 'UID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'version',
                        title: 'Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Routes': {
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
                        field: 'meshname',
                        title: 'Mesh Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'virtualroutername',
                        title: 'Virtual Router Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'uid',
                        title: 'UID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'version',
                        title: 'Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Virtual Nodes': {
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
                        field: 'meshname',
                        title: 'Mesh Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'uid',
                        title: 'UID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'version',
                        title: 'Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Virtual Routers': {
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
                        field: 'meshname',
                        title: 'Mesh Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'uid',
                        title: 'UID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'version',
                        title: 'Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Virtual Services': {
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
                        field: 'meshname',
                        title: 'Mesh Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'uid',
                        title: 'UID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'version',
                        title: 'Version',
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

async function updateDatatableNetworkingAndContentDeliveryAppMesh() {
    blockUI('#section-networkingandcontentdelivery-appmesh-meshes-datatable');
    blockUI('#section-networkingandcontentdelivery-appmesh-routes-datatable');
    blockUI('#section-networkingandcontentdelivery-appmesh-virtualnodes-datatable');
    blockUI('#section-networkingandcontentdelivery-appmesh-virtualrouters-datatable');
    blockUI('#section-networkingandcontentdelivery-appmesh-virtualservices-datatable');

    await sdkcall("AppMesh", "listMeshes", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-appmesh-meshes-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-appmesh-routes-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-appmesh-virtualnodes-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-appmesh-virtualrouters-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-appmesh-virtualservices-datatable').bootstrapTable('removeAll');

        await Promise.all(data.meshes.map(mesh => {
            return Promise.all([
                sdkcall("AppMesh", "describeMesh", {
                    meshName: mesh.meshName
                }, true).then((data) => {
                    $('#section-networkingandcontentdelivery-appmesh-meshes-datatable').bootstrapTable('append', [{
                        f2id: data.mesh.meshName,
                        f2type: 'appmesh.mesh',
                        f2data: data.mesh,
                        f2region: region,
                        name: data.mesh.meshName,
                        uid: data.mesh.metadata.uid,
                        version: data.mesh.metadata.version
                    }]);
                }),
                sdkcall("AppMesh", "listVirtualRouters", {
                    meshName: mesh.meshName
                }, true).then(async (data) => {
                    await Promise.all(data.virtualRouters.map(virtualrouter => {
                        return Promise.all([
                            sdkcall("AppMesh", "describeVirtualRouter", {
                                meshName: mesh.meshName,
                                virtualRouterName: virtualrouter.virtualRouterName
                            }, true).then((data) => {
                                $('#section-networkingandcontentdelivery-appmesh-virtualrouters-datatable').bootstrapTable('append', [{
                                    f2id: data.virtualRouter.virtualRouterName,
                                    f2type: 'appmesh.virtualrouter',
                                    f2data: data.virtualRouter,
                                    f2region: region,
                                    name: data.virtualRouter.virtualRouterName,
                                    meshname: data.virtualRouter.meshName,
                                    uid: data.virtualRouter.metadata.uid,
                                    version: data.virtualRouter.metadata.version
                                }]);
                            }),
                            sdkcall("AppMesh", "listRoutes", {
                                meshName: mesh.meshName,
                                virtualRouterName: virtualrouter.virtualRouterName
                            }, true).then(async (data) => {
                                await Promise.all(data.routes.map(route => {
                                    return sdkcall("AppMesh", "describeRoute", {
                                        meshName: mesh.meshName,
                                        virtualRouterName: virtualrouter.virtualRouterName,
                                        routeName: route.routeName
                                    }, true).then((data) => {
                                        $('#section-networkingandcontentdelivery-appmesh-routes-datatable').bootstrapTable('append', [{
                                            f2id: data.route.virtualRouterName,
                                            f2type: 'appmesh.route',
                                            f2data: data.route,
                                            f2region: region,
                                            name: data.route.routeName,
                                            virtualroutername: data.route.virtualRouterName,
                                            meshname: data.route.meshName,
                                            uid: data.route.metadata.uid,
                                            version: data.route.metadata.version
                                        }]);
                                    });
                                }));
                            })
                        ]);
                    }));
                }),
                sdkcall("AppMesh", "listVirtualServices", {
                    meshName: mesh.meshName
                }, true).then(async (data) => {
                    await Promise.all(data.virtualServices.map(virtualservice => {
                        return sdkcall("AppMesh", "describeVirtualService", {
                            meshName: mesh.meshName,
                            virtualService: virtualservice.virtualServiceName
                        }, true).then((data) => {
                            $('#section-networkingandcontentdelivery-appmesh-virtualservices-datatable').bootstrapTable('append', [{
                                f2id: data.virtualService.virtualServiceName,
                                f2type: 'appmesh.virtualservice',
                                f2data: data.virtualService,
                                f2region: region,
                                name: data.virtualService.virtualServiceName,
                                meshname: data.virtualService.meshName,
                                uid: data.virtualService.metadata.uid,
                                version: data.virtualService.metadata.version
                            }]);
                        });
                    }));
                }),
                sdkcall("AppMesh", "listVirtualNodes", {
                    meshName: mesh.meshName
                }, true).then(async (data) => {
                    await Promise.all(data.virtualNodes.map(virtualnode => {
                        return sdkcall("AppMesh", "describeVirtualService", {
                            meshName: mesh.meshName,
                            virtualNode: virtualnode.virtualNodeName
                        }, true).then((data) => {
                            $('#section-networkingandcontentdelivery-appmesh-virtualnodes-datatable').bootstrapTable('append', [{
                                f2id: data.virtualNode.virtualNodeName,
                                f2type: 'appmesh.virtualnode',
                                f2data: data.virtualNode,
                                f2region: region,
                                name: data.virtualNode.virtualNodeName,
                                meshname: data.virtualNode.meshName,
                                uid: data.virtualNode.metadata.uid,
                                version: data.virtualNode.metadata.version
                            }]);
                        });
                    }));
                })
            ]);
        }));
    });

    unblockUI('#section-networkingandcontentdelivery-appmesh-meshes-datatable');
    unblockUI('#section-networkingandcontentdelivery-appmesh-routes-datatable');
    unblockUI('#section-networkingandcontentdelivery-appmesh-virtualnodes-datatable');
    unblockUI('#section-networkingandcontentdelivery-appmesh-virtualrouters-datatable');
    unblockUI('#section-networkingandcontentdelivery-appmesh-virtualservices-datatable');
}
