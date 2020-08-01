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
        },
        'Virtual Gateways': {
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
                        field: 'owner',
                        title: 'Owner',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Gateway Routes': {
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
                        field: 'virtualgatewayname',
                        title: 'Virtual Gateway Name',
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
                        field: 'owner',
                        title: 'Owner',
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
    blockUI('#section-networkingandcontentdelivery-appmesh-virtualgateways-datatable');
    blockUI('#section-networkingandcontentdelivery-appmesh-gatewayroutes-datatable');

    await sdkcall("AppMesh", "listMeshes", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-appmesh-meshes-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-appmesh-routes-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-appmesh-virtualnodes-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-appmesh-virtualrouters-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-appmesh-virtualservices-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-appmesh-virtualgateways-datatable').deferredBootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-appmesh-gatewayroutes-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.meshes.map(mesh => {
            return Promise.all([
                sdkcall("AppMesh", "describeMesh", {
                    meshName: mesh.meshName
                }, true).then((data) => {
                    $('#section-networkingandcontentdelivery-appmesh-meshes-datatable').deferredBootstrapTable('append', [{
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
                                $('#section-networkingandcontentdelivery-appmesh-virtualrouters-datatable').deferredBootstrapTable('append', [{
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
                                        $('#section-networkingandcontentdelivery-appmesh-routes-datatable').deferredBootstrapTable('append', [{
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
                            $('#section-networkingandcontentdelivery-appmesh-virtualservices-datatable').deferredBootstrapTable('append', [{
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
                        return sdkcall("AppMesh", "describeVirtualNode", {
                            meshName: mesh.meshName,
                            virtualNode: virtualnode.virtualNodeName
                        }, true).then((data) => {
                            $('#section-networkingandcontentdelivery-appmesh-virtualnodes-datatable').deferredBootstrapTable('append', [{
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
                }),
                sdkcall("AppMesh", "listVirtualGateways", {
                    meshName: mesh.meshName
                }, true).then(async (data) => {
                    await Promise.all(data.virtualGateways.map(async (virtualgateway) => {
                        await sdkcall("AppMesh", "describeVirtualService", {
                            meshName: mesh.meshName,
                            virtualGatewayName: virtualgateway.virtualGatewayName
                        }, true).then((data) => {
                            $('#section-networkingandcontentdelivery-appmesh-virtualgateways-datatable').deferredBootstrapTable('append', [{
                                f2id: data.virtualGateway.metadata.arn,
                                f2type: 'appmesh.virtualgateway',
                                f2data: data.virtualGateway,
                                f2region: region,
                                name: data.virtualGateway.virtualGatewayName,
                                meshname: data.virtualGateway.meshName,
                                uid: data.virtualGateway.metadata.uid,
                                owner: data.virtualGateway.metadata.meshOwner
                            }]);
                        });

                        return sdkcall("AppMesh", "listGatewayRoutes", {
                            meshName: mesh.meshName,
                            virtualGatewayName: virtualgateway.virtualGatewayName
                        }, true).then(async (data) => {
                            await Promise.all(data.gatewayRoutes.map(async (gatewayroute) => {
                                await sdkcall("AppMesh", "describeGatewayRoute", {
                                    meshName: mesh.meshName,
                                    virtualGatewayName: virtualgateway.virtualGatewayName,
                                    gatewayRouteName: gatewayroute.gatewayRouteName
                                }, true).then((data) => {
                                    $('#section-networkingandcontentdelivery-appmesh-gatewayroutes-datatable').deferredBootstrapTable('append', [{
                                        f2id: data.gatewayRoute.metadata.arn,
                                        f2type: 'appmesh.gatewayroute',
                                        f2data: data.gatewayRoute,
                                        f2region: region,
                                        name: data.gatewayRoute.gatewayRouteName,
                                        virtualgatewayname: data.gatewayRoute.virtualGatewayName,
                                        meshname: data.gatewayRoute.meshName,
                                        uid: data.gatewayRoute.metadata.uid,
                                        owner: data.gatewayRoute.metadata.resourceOwner
                                    }]);
                                }).catch(() => { });
                            }));
                        }).catch(() => { });
                    }));
                }).catch(() => { })
            ]);
        }));
    });

    unblockUI('#section-networkingandcontentdelivery-appmesh-meshes-datatable');
    unblockUI('#section-networkingandcontentdelivery-appmesh-routes-datatable');
    unblockUI('#section-networkingandcontentdelivery-appmesh-virtualnodes-datatable');
    unblockUI('#section-networkingandcontentdelivery-appmesh-virtualrouters-datatable');
    unblockUI('#section-networkingandcontentdelivery-appmesh-virtualservices-datatable');
    unblockUI('#section-networkingandcontentdelivery-appmesh-virtualgateways-datatable');
    unblockUI('#section-networkingandcontentdelivery-appmesh-gatewayroutes-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "appmesh.mesh") {
        reqParams.cfn['MeshName'] = obj.data.meshName;
        reqParams.cfn['Spec'] = {
            'EgressFilter': {
                'Type': obj.data.spec.egressFilter.type
            }
        };

        /*
        TODO:
        Tags : 
        - TagRef
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appmesh', obj.id, 'AWS::AppMesh::Mesh'),
            'region': obj.region,
            'service': 'appmesh',
            'type': 'AWS::AppMesh::Mesh',
            'options': reqParams
        });
    } else if (obj.type == "appmesh.virtualrouter") {
        reqParams.cfn['MeshName'] = obj.data.meshName;
        if (obj.data.metadata) {
            reqParams.cfn['MeshOwner'] = obj.data.metadata.meshOwner;
        }
        reqParams.cfn['VirtualRouterName'] = obj.data.virtualRouterName;
        var listeners = [];
        obj.data.spec.listeners.forEach(listener => {
            listener.push({
                'PortMapping': {
                    'Port': listener.portMapping.port,
                    'Protocol': listener.portMapping.protocol
                }
            });
        });
        reqParams.cfn['Spec'] = {
            'Listeners': listeners
        };

        /*
        TODO:
        Tags : 
            - TagRef
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appmesh', obj.id, 'AWS::AppMesh::VirtualRouter'),
            'region': obj.region,
            'service': 'appmesh',
            'type': 'AWS::AppMesh::VirtualRouter',
            'options': reqParams
        });
    } else if (obj.type == "appmesh.route") {
        reqParams.cfn['MeshName'] = obj.data.meshName;
        if (obj.data.metadata) {
            reqParams.cfn['MeshOwner'] = obj.data.metadata.meshOwner;
        }
        reqParams.cfn['RouteName'] = obj.data.routeName;
        reqParams.cfn['VirtualRouterName'] = obj.data.virtualRouterName;
        var httpRoute = null;
        if (obj.data.spec.httpRoute) {
            var httpRouteWeightedTargets = [];
            obj.data.spec.httpRoute.action.weightedTargets.forEach(weightedTarget => {
                httpRouteWeightedTargets.push({
                    'VirtualNode': weightedTarget.virtualNode,
                    'Weight': weightedTarget.weight
                });
            });
            var httpRouteMatchHeaders = null;
            if (obj.data.spec.httpRoute.match.headers) {
                httpRouteMatchHeaders = [];
                obj.data.spec.httpRoute.match.headers.forEach(header => {
                    var match = null;
                    if (header.match) {
                        var range = null;
                        if (header.match.range) {
                            range = {
                                'Start': header.match.range.start,
                                'End': header.match.range.end
                            };
                        }
                        match = {
                            'Exact': header.match.exact,
                            'Prefix': header.match.prefix,
                            'Range': range,
                            'Regex': header.match.regex,
                            'Suffix': header.match.suffix
                        };
                    }
                    httpRouteMatchHeaders.push({
                        'Name': header.name,
                        'Invert': header.invert,
                        'Match': match
                    });
                });
            }
            var httpRetryPolicy = null;
            if (obj.data.spec.httpRoute.retryPolicy) {
                httpRetryPolicy = {
                    'HttpRetryEvents': obj.data.spec.httpRoute.retryPolicy.httpRetryEvents,
                    'MaxRetries': obj.data.spec.httpRoute.retryPolicy.maxRetries,
                    'TcpRetryEvents': obj.data.spec.httpRoute.retryPolicy.tcpRetryEvents,
                    'PerRetryTimeout': {
                        'Unit': obj.data.spec.httpRoute.retryPolicy.perRetryTimeout.unit,
                        'Value': obj.data.spec.httpRoute.retryPolicy.perRetryTimeout.value
                    }
                };
            }
            httpRoute = {
                'Action': {
                    'WeightedTargets': httpRouteWeightedTargets
                },
                'Match': {
                    'Method': obj.data.spec.httpRoute.match.method,
                    'Prefix': obj.data.spec.httpRoute.match.prefix,
                    'Scheme': obj.data.spec.httpRoute.match.scheme,
                    'Headers': httpRouteMatchHeaders
                },
                'RetryPolicy': httpRetryPolicy
            };
        }
        var http2Route = null;
        if (obj.data.spec.http2Route) {
            var http2RouteWeightedTargets = [];
            obj.data.spec.http2Route.action.weightedTargets.forEach(weightedTarget => {
                http2RouteWeightedTargets.push({
                    'VirtualNode': weightedTarget.virtualNode,
                    'Weight': weightedTarget.weight
                });
            });
            var http2RouteMatchHeaders = null;
            if (obj.data.spec.http2Route.match.headers) {
                http2RouteMatchHeaders = [];
                obj.data.spec.http2Route.match.headers.forEach(header => {
                    var match = null;
                    if (header.match) {
                        var range = null;
                        if (header.match.range) {
                            range = {
                                'Start': header.match.range.start,
                                'End': header.match.range.end
                            };
                        }
                        match = {
                            'Exact': header.match.exact,
                            'Prefix': header.match.prefix,
                            'Range': range,
                            'Regex': header.match.regex,
                            'Suffix': header.match.suffix
                        };
                    }
                    http2RouteMatchHeaders.push({
                        'Name': header.name,
                        'Invert': header.invert,
                        'Match': match
                    });
                });
            }
            var http2RetryPolicy = null;
            if (obj.data.spec.http2Route.retryPolicy) {
                http2RetryPolicy = {
                    'HttpRetryEvents': obj.data.spec.http2Route.retryPolicy.httpRetryEvents,
                    'MaxRetries': obj.data.spec.http2Route.retryPolicy.maxRetries,
                    'TcpRetryEvents': obj.data.spec.http2Route.retryPolicy.tcpRetryEvents,
                    'PerRetryTimeout': {
                        'Unit': obj.data.spec.http2Route.retryPolicy.perRetryTimeout.unit,
                        'Value': obj.data.spec.http2Route.retryPolicy.perRetryTimeout.value
                    }
                };
            }
            http2Route = {
                'Action': {
                    'WeightedTargets': http2RouteWeightedTargets
                },
                'Match': {
                    'Method': obj.data.spec.http2Route.match.method,
                    'Prefix': obj.data.spec.http2Route.match.prefix,
                    'Scheme': obj.data.spec.http2Route.match.scheme,
                    'Headers': http2RouteMatchHeaders
                },
                'RetryPolicy': http2RetryPolicy
            };
        }
        var tcpRoute = null;
        if (obj.data.spec.tcpRoute) {
            var tcpRouteWeightedTargets = [];
            obj.data.spec.tcpRoute.action.weightedTargets.forEach(weightedTarget => {
                tcpRouteWeightedTargets.push({
                    'VirtualNode': weightedTarget.virtualNode,
                    'Weight': weightedTarget.weight
                });
            });
            tcpRoute = {
                'Action': {
                    'WeightedTargets': tcpRouteWeightedTargets
                }
            };
        }
        var grpcRoute = null;
        if (obj.data.spec.grpcRoute) {
            var grpcRouteWeightedTargets = [];
            obj.data.spec.grpcRoute.action.weightedTargets.forEach(weightedTarget => {
                grpcRouteWeightedTargets.push({
                    'VirtualNode': weightedTarget.virtualNode,
                    'Weight': weightedTarget.weight
                });
            });
            var grpcRouteMatchMetadata = null;
            if (obj.data.spec.grpcRoute.match.metadata) {
                grpcRouteMatchMetadata = [];
                obj.data.spec.grpcRoute.match.metadata.forEach(metadata => {
                    var match = null;
                    if (metadata.match) {
                        var range = null;
                        if (metadata.match.range) {
                            range = {
                                'Start': metadata.match.range.start,
                                'End': metadata.match.range.end
                            };
                        }
                        match = {
                            'Exact': metadata.match.exact,
                            'Prefix': metadata.match.prefix,
                            'Range': range,
                            'Regex': metadata.match.regex,
                            'Suffix': metadata.match.suffix
                        };
                    }
                    grpcRouteMatchMetadata.push({
                        'Name': metadata.name,
                        'Invert': metadata.invert,
                        'Match': match
                    });
                });
            }
            var grpcRetryPolicy = null;
            if (obj.data.spec.grpcRoute.retryPolicy) {
                grpcRetryPolicy = {
                    'GrpcRetryEvents': obj.data.spec.grpcRoute.retryPolicy.grpcRetryEvents,
                    'HttpRetryEvents': obj.data.spec.grpcRoute.retryPolicy.httpRetryEvents,
                    'MaxRetries': obj.data.spec.grpcRoute.retryPolicy.maxRetries,
                    'TcpRetryEvents': obj.data.spec.grpcRoute.retryPolicy.tcpRetryEvents,
                    'PerRetryTimeout': {
                        'Unit': obj.data.spec.grpcRoute.retryPolicy.perRetryTimeout.unit,
                        'Value': obj.data.spec.grpcRoute.retryPolicy.perRetryTimeout.value
                    }
                };
            }
            grpcRoute = {
                'Action': {
                    'WeightedTargets': tcpRouteWeightedTargets
                },
                'Match': {
                    'Metadata': grpcRouteMatchMetadata,
                    'MethodName': obj.data.spec.grpcRoute.match.methodName,
                    'ServiceName': obj.data.spec.grpcRoute.match.serviceName
                },
                'RetryPolicy': grpcRetryPolicy
            };
        }
        reqParams.cfn['Spec'] = {
            'HttpRoute': httpRoute,
            'Http2Route': http2Route,
            'TcpRoute': tcpRoute,
            'GrpcRoute': grpcRoute,
            'Priority': obj.data.spec.priority
        };

        /*
        TODO:
        Tags : 
            - TagRef
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appmesh', obj.id, 'AWS::AppMesh::Route'),
            'region': obj.region,
            'service': 'appmesh',
            'type': 'AWS::AppMesh::Route',
            'options': reqParams
        });
    } else if (obj.type == "appmesh.virtualservice") {
        reqParams.cfn['MeshName'] = obj.data.meshName;
        if (obj.data.metadata) {
            reqParams.cfn['MeshOwner'] = obj.data.metadata.meshOwner;
        }
        reqParams.cfn['VirtualServiceName'] = obj.data.virtualServiceName;
        reqParams.cfn['Spec'] = {
            'Provider': {
                'VirtualNode': {
                    'VirtualNodeName': obj.data.spec.virtualNode.virtualNodeName
                },
                'VirtualRouter': {
                    'VirtualRouterName': obj.data.spec.virtualRouter.virtualRouterName
                }
            }
        };

        /*
        TODO:
        Tags : 
            - TagRef
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appmesh', obj.id, 'AWS::AppMesh::VirtualService'),
            'region': obj.region,
            'service': 'appmesh',
            'type': 'AWS::AppMesh::VirtualService',
            'options': reqParams
        });
    } else if (obj.type == "appmesh.virtualnode") {
        reqParams.cfn['MeshName'] = obj.data.meshName;
        if (obj.data.metadata) {
            reqParams.cfn['MeshOwner'] = obj.data.metadata.meshOwner;
        }
        reqParams.cfn['VirtualNodeName'] = obj.data.VirtualNodeName;
        var backends = [];
        obj.data.spec.backends.forEach(backend => {
            var clientPolicy = null;
            if (backend.virtualService.clientPolicy) {
                var tls = null;
                if (backend.virtualService.clientPolicy.tls) {
                    var validation = null;
                    if (backend.virtualService.clientPolicy.tls.validation) {
                        var trust = null;
                        if (backend.virtualService.clientPolicy.tls.validation.trust) {
                            var acm = null;
                            if (backend.virtualService.clientPolicy.tls.validation.trust.acm) {
                                acm = {
                                    'CertificateAuthorityArns': backend.virtualService.clientPolicy.tls.validation.trust.acm.certificateAuthorityArns
                                };
                            }
                            var file = null;
                            if (backend.virtualService.clientPolicy.tls.validation.trust.file) {
                                file = {
                                    'CertificateChain': backend.virtualService.clientPolicy.tls.validation.trust.file.certificateChain
                                };
                            }
                            trust = {
                                'ACM': acm,
                                'File': file
                            };
                        }
                        validation = {
                            'Trust': trust
                        };
                    }
                    tls = {
                        'Enforce': backend.virtualService.clientPolicy.tls.enforce,
                        'Ports': backend.virtualService.clientPolicy.tls.ports,
                        'Validation': validation
                    };
                }
                clientPolicy = {
                    'TLS': tls
                };
            }
            backends.push({
                'VirtualService': {
                    'ClientPolicy': clientPolicy,
                    'VirtualServiceName': backend.virtualService.virtualServiceName
                }
            });
        });
        var listeners = [];
        obj.data.spec.listeners.forEach(listener => {
            var tls = null;
            if (listener.tls) {
                var certificate = null;
                if (listener.tls.certificate) {
                    var acm = null;
                    if (listener.tls.certificate.acm) {
                        acm = {
                            'CertificateArn': listener.tls.certificate.acm.certificateArn
                        };
                    }
                    var file = null;
                    if (listener.tls.certificate.file) {
                        file = {
                            'CertificateChain': listener.tls.certificate.file.certificateChain,
                            'PrivateKey': listener.tls.certificate.file.privateKey
                        };
                    }
                    certificate = {
                        'ACM': acm,
                        'File': file
                    };
                }
                tls = {
                    'Certificate': certificate,
                    'Mode': listener.tls.mode
                };
            }
            listeners.push({
                'HealthCheck': {
                    'HealthyThreshold': listener.healthCheck.healthyThreshold,
                    'IntervalMillis': listener.healthCheck.intervalMillis,
                    'Path': listener.healthCheck.path,
                    'Port': listener.healthCheck.port,
                    'Protocol': listener.healthCheck.protocol,
                    'TimeoutMillis': listener.healthCheck.timeoutMillis,
                    'UnhealthyThreshold': listener.healthCheck.unhealthyThreshold
                },
                'PortMapping': {
                    'Port': listener.portMapping.port,
                    'Protocol': listener.portMapping.protocol
                },
                'TLS': tls
            });
        });
        var backendDefaults = null;
        if (obj.data.spec.backendDefaults) {
            var clientPolicy = null;
            if (obj.data.spec.backendDefaults.clientPolicy) {
                var tls = null;
                if (obj.data.spec.backendDefaults.clientPolicy.tls) {
                    var validation = null;
                    if (obj.data.spec.backendDefaults.clientPolicy.tls.validation) {
                        var trust = null;
                        if (obj.data.spec.backendDefaults.clientPolicy.tls.validation.trust) {
                            var acm = null;
                            if (obj.data.spec.backendDefaults.clientPolicy.tls.validation.trust.acm) {
                                acm = {
                                    'CertificateAuthorityArns': obj.data.spec.backendDefaults.clientPolicy.tls.validation.trust.acm.certificateAuthorityArns
                                };
                            }
                            var file = null;
                            if (obj.data.spec.backendDefaults.clientPolicy.tls.validation.trust.file) {
                                file = {
                                    'CertificateChain': obj.data.spec.backendDefaults.clientPolicy.tls.validation.trust.file.certificateChain
                                };
                            }
                            trust = {
                                'ACM': acm,
                                'File': file
                            };
                        }
                        validation = {
                            'Trust': trust
                        };
                    }
                    tls = {
                        'Enforce': obj.data.spec.backendDefaults.clientPolicy.tls.enforce,
                        'Ports': obj.data.spec.backendDefaults.clientPolicy.tls.ports,
                        'Validation': validation
                    };
                }
                clientPolicy = {
                    'TLS': tls
                };
            }
            backendDefaults = {
                'ClientPolicy': clientPolicy
            };
        }
        reqParams.cfn['Spec'] = {
            'BackendDefaults': backendDefaults,
            'Backends': backends,
            'Listeners': listeners,
            'Logging': {
                'AccessLog': {
                    'File': {
                        'Path': obj.data.spec.logging.accessLog.file.path
                    }
                }
            },
            'ServiceDiscovery': {
                'DNS': {
                    'Hostname': obj.data.spec.serviceDiscovery.dns.hostname
                }
            }
        };

        /*
        TODO:
        Tags : 
            - TagRef
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appmesh', obj.id, 'AWS::AppMesh::VirtualNode'),
            'region': obj.region,
            'service': 'appmesh',
            'type': 'AWS::AppMesh::VirtualNode',
            'options': reqParams
        });
    } else if (obj.type == "appmesh.virtualgateway") {
        reqParams.cfn['MeshName'] = obj.data.meshName;
        if (obj.data.metadata) {
            reqParams.cfn['MeshOwner'] = obj.data.metadata.meshOwner;
        }
        reqParams.cfn['VirtualGatewayName'] = obj.data.virtualGatewayName;
        var listeners = [];
        obj.data.spec.listeners.forEach(listener => {
            var tls = null;
            if (listener.tls) {
                var certificate = null;
                if (listener.tls.certificate) {
                    var acm = null;
                    if (listener.tls.certificate.acm) {
                        acm = {
                            'CertificateArn': listener.tls.certificate.acm.certificateArn
                        };
                    }
                    var file = null;
                    if (listener.tls.certificate.file) {
                        file = {
                            'CertificateChain': listener.tls.certificate.file.certificateChain,
                            'PrivateKey': listener.tls.certificate.file.privateKey
                        };
                    }
                    certificate = {
                        'ACM': acm,
                        'File': file
                    };
                }
                tls = {
                    'Certificate': certificate,
                    'Mode': listener.tls.mode
                };
            }
            listeners.push({
                'HealthCheck': {
                    'HealthyThreshold': listener.healthCheck.healthyThreshold,
                    'IntervalMillis': listener.healthCheck.intervalMillis,
                    'Path': listener.healthCheck.path,
                    'Port': listener.healthCheck.port,
                    'Protocol': listener.healthCheck.protocol,
                    'TimeoutMillis': listener.healthCheck.timeoutMillis,
                    'UnhealthyThreshold': listener.healthCheck.unhealthyThreshold
                },
                'PortMapping': {
                    'Port': listener.portMapping.port,
                    'Protocol': listener.portMapping.protocol
                },
                'TLS': tls
            });
        });
        var backendDefaults = null;
        if (obj.data.spec.backendDefaults) {
            var clientPolicy = null;
            if (obj.data.spec.backendDefaults.clientPolicy) {
                var tls = null;
                if (obj.data.spec.backendDefaults.clientPolicy.tls) {
                    var validation = null;
                    if (obj.data.spec.backendDefaults.clientPolicy.tls.validation) {
                        var trust = null;
                        if (obj.data.spec.backendDefaults.clientPolicy.tls.validation.trust) {
                            var acm = null;
                            if (obj.data.spec.backendDefaults.clientPolicy.tls.validation.trust.acm) {
                                acm = {
                                    'CertificateAuthorityArns': obj.data.spec.backendDefaults.clientPolicy.tls.validation.trust.acm.certificateAuthorityArns
                                };
                            }
                            var file = null;
                            if (obj.data.spec.backendDefaults.clientPolicy.tls.validation.trust.file) {
                                file = {
                                    'CertificateChain': obj.data.spec.backendDefaults.clientPolicy.tls.validation.trust.file.certificateChain
                                };
                            }
                            trust = {
                                'ACM': acm,
                                'File': file
                            };
                        }
                        validation = {
                            'Trust': trust
                        };
                    }
                    tls = {
                        'Enforce': obj.data.spec.backendDefaults.clientPolicy.tls.enforce,
                        'Ports': obj.data.spec.backendDefaults.clientPolicy.tls.ports,
                        'Validation': validation
                    };
                }
                clientPolicy = {
                    'TLS': tls
                };
            }
            backendDefaults = {
                'ClientPolicy': clientPolicy
            };
        }
        reqParams.cfn['Spec'] = {
            'BackendDefaults': backendDefaults,
            'Listeners': listeners,
            'Logging': {
                'AccessLog': {
                    'File': {
                        'Path': obj.data.spec.logging.accessLog.file.path
                    }
                }
            }
        };

        /*
        TODO:
        Tags : 
            - TagRef
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appmesh', obj.id, 'AWS::AppMesh::VirtualGateway'),
            'region': obj.region,
            'service': 'appmesh',
            'type': 'AWS::AppMesh::VirtualGateway',
            'options': reqParams
        });
    } else if (obj.type == "appmesh.gatewayroute") {
        reqParams.cfn['MeshName'] = obj.data.meshName;
        if (obj.data.metadata) {
            reqParams.cfn['MeshOwner'] = obj.data.metadata.meshOwner;
        }
        reqParams.cfn['VirtualGatewayName'] = obj.data.virtualGatewayName;
        reqParams.cfn['GatewayRouteName'] = obj.data.gatewayRouteName;
        var httpRoute = null;
        if (obj.data.spec.httpRoute) {
            var httpRouteWeightedTargets = [];
            obj.data.spec.httpRoute.action.weightedTargets.forEach(weightedTarget => {
                httpRouteWeightedTargets.push({
                    'VirtualNode': weightedTarget.virtualNode,
                    'Weight': weightedTarget.weight
                });
            });
            var httpRouteMatchHeaders = null;
            if (obj.data.spec.httpRoute.match.headers) {
                httpRouteMatchHeaders = [];
                obj.data.spec.httpRoute.match.headers.forEach(header => {
                    var match = null;
                    if (header.match) {
                        var range = null;
                        if (header.match.range) {
                            range = {
                                'Start': header.match.range.start,
                                'End': header.match.range.end
                            };
                        }
                        match = {
                            'Exact': header.match.exact,
                            'Prefix': header.match.prefix,
                            'Range': range,
                            'Regex': header.match.regex,
                            'Suffix': header.match.suffix
                        };
                    }
                    httpRouteMatchHeaders.push({
                        'Name': header.name,
                        'Invert': header.invert,
                        'Match': match
                    });
                });
            }
            var httpRetryPolicy = null;
            if (obj.data.spec.httpRoute.retryPolicy) {
                httpRetryPolicy = {
                    'HttpRetryEvents': obj.data.spec.httpRoute.retryPolicy.httpRetryEvents,
                    'MaxRetries': obj.data.spec.httpRoute.retryPolicy.maxRetries,
                    'TcpRetryEvents': obj.data.spec.httpRoute.retryPolicy.tcpRetryEvents,
                    'PerRetryTimeout': {
                        'Unit': obj.data.spec.httpRoute.retryPolicy.perRetryTimeout.unit,
                        'Value': obj.data.spec.httpRoute.retryPolicy.perRetryTimeout.value
                    }
                };
            }
            httpRoute = {
                'Action': {
                    'WeightedTargets': httpRouteWeightedTargets
                },
                'Match': {
                    'Method': obj.data.spec.httpRoute.match.method,
                    'Prefix': obj.data.spec.httpRoute.match.prefix,
                    'Scheme': obj.data.spec.httpRoute.match.scheme,
                    'Headers': httpRouteMatchHeaders
                },
                'RetryPolicy': httpRetryPolicy
            };
        }
        var http2Route = null;
        if (obj.data.spec.http2Route) {
            var http2RouteWeightedTargets = [];
            obj.data.spec.http2Route.action.weightedTargets.forEach(weightedTarget => {
                http2RouteWeightedTargets.push({
                    'VirtualNode': weightedTarget.virtualNode,
                    'Weight': weightedTarget.weight
                });
            });
            var http2RouteMatchHeaders = null;
            if (obj.data.spec.http2Route.match.headers) {
                http2RouteMatchHeaders = [];
                obj.data.spec.http2Route.match.headers.forEach(header => {
                    var match = null;
                    if (header.match) {
                        var range = null;
                        if (header.match.range) {
                            range = {
                                'Start': header.match.range.start,
                                'End': header.match.range.end
                            };
                        }
                        match = {
                            'Exact': header.match.exact,
                            'Prefix': header.match.prefix,
                            'Range': range,
                            'Regex': header.match.regex,
                            'Suffix': header.match.suffix
                        };
                    }
                    http2RouteMatchHeaders.push({
                        'Name': header.name,
                        'Invert': header.invert,
                        'Match': match
                    });
                });
            }
            var http2RetryPolicy = null;
            if (obj.data.spec.http2Route.retryPolicy) {
                http2RetryPolicy = {
                    'HttpRetryEvents': obj.data.spec.http2Route.retryPolicy.httpRetryEvents,
                    'MaxRetries': obj.data.spec.http2Route.retryPolicy.maxRetries,
                    'TcpRetryEvents': obj.data.spec.http2Route.retryPolicy.tcpRetryEvents,
                    'PerRetryTimeout': {
                        'Unit': obj.data.spec.http2Route.retryPolicy.perRetryTimeout.unit,
                        'Value': obj.data.spec.http2Route.retryPolicy.perRetryTimeout.value
                    }
                };
            }
            http2Route = {
                'Action': {
                    'WeightedTargets': http2RouteWeightedTargets
                },
                'Match': {
                    'Method': obj.data.spec.http2Route.match.method,
                    'Prefix': obj.data.spec.http2Route.match.prefix,
                    'Scheme': obj.data.spec.http2Route.match.scheme,
                    'Headers': http2RouteMatchHeaders
                },
                'RetryPolicy': http2RetryPolicy
            };
        }
        var grpcRoute = null;
        if (obj.data.spec.grpcRoute) {
            var grpcRouteWeightedTargets = [];
            obj.data.spec.grpcRoute.action.weightedTargets.forEach(weightedTarget => {
                grpcRouteWeightedTargets.push({
                    'VirtualNode': weightedTarget.virtualNode,
                    'Weight': weightedTarget.weight
                });
            });
            var grpcRouteMatchMetadata = null;
            if (obj.data.spec.grpcRoute.match.metadata) {
                grpcRouteMatchMetadata = [];
                obj.data.spec.grpcRoute.match.metadata.forEach(metadata => {
                    var match = null;
                    if (metadata.match) {
                        var range = null;
                        if (metadata.match.range) {
                            range = {
                                'Start': metadata.match.range.start,
                                'End': metadata.match.range.end
                            };
                        }
                        match = {
                            'Exact': metadata.match.exact,
                            'Prefix': metadata.match.prefix,
                            'Range': range,
                            'Regex': metadata.match.regex,
                            'Suffix': metadata.match.suffix
                        };
                    }
                    grpcRouteMatchMetadata.push({
                        'Name': metadata.name,
                        'Invert': metadata.invert,
                        'Match': match
                    });
                });
            }
            var grpcRetryPolicy = null;
            if (obj.data.spec.grpcRoute.retryPolicy) {
                grpcRetryPolicy = {
                    'GrpcRetryEvents': obj.data.spec.grpcRoute.retryPolicy.grpcRetryEvents,
                    'HttpRetryEvents': obj.data.spec.grpcRoute.retryPolicy.httpRetryEvents,
                    'MaxRetries': obj.data.spec.grpcRoute.retryPolicy.maxRetries,
                    'TcpRetryEvents': obj.data.spec.grpcRoute.retryPolicy.tcpRetryEvents,
                    'PerRetryTimeout': {
                        'Unit': obj.data.spec.grpcRoute.retryPolicy.perRetryTimeout.unit,
                        'Value': obj.data.spec.grpcRoute.retryPolicy.perRetryTimeout.value
                    }
                };
            }
            grpcRoute = {
                'Action': {
                    'WeightedTargets': tcpRouteWeightedTargets
                },
                'Match': {
                    'Metadata': grpcRouteMatchMetadata,
                    'MethodName': obj.data.spec.grpcRoute.match.methodName,
                    'ServiceName': obj.data.spec.grpcRoute.match.serviceName
                },
                'RetryPolicy': grpcRetryPolicy
            };
        }
        reqParams.cfn['Spec'] = {
            'HttpRoute': httpRoute,
            'Http2Route': http2Route,
            'GrpcRoute': grpcRoute
        };

        /*
        TODO:
        Tags : 
            - TagRef
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appmesh', obj.id, 'AWS::AppMesh::GatewayRoute'),
            'region': obj.region,
            'service': 'appmesh',
            'type': 'AWS::AppMesh::GatewayRoute',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
