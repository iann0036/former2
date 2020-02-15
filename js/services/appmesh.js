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
        reqParams.cfn['VirtualNodeName'] = obj.data.VirtualNodeName;
        var backends = [];
        obj.data.spec.backends.forEach(backend => {
            backends.push({
                'VirtualService': {
                    'VirtualServiceName': backend.virtualService.virtualServiceName
                }
            });
        });
        var listeners = [];
        obj.data.spec.listeners.forEach(listener => {
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
                }
            });
        });
        reqParams.cfn['Spec'] = {
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
    } else {
        return false;
    }

    return true;
});
