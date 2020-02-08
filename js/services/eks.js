/* ========================================================================== */
// EKS
/* ========================================================================== */

sections.push({
    'category': 'Compute',
    'service': 'EKS',
    'resourcetypes': {
        'Clusters': {
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
                        field: 'k8sversion',
                        title: 'Kubernetes Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'platformversion',
                        title: 'Platform Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
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
        'Node Groups': {
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
                        field: 'version',
                        title: 'Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'releaseversion',
                        title: 'Release Version',
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

async function updateDatatableComputeEKS() {
    blockUI('#section-compute-eks-clusters-datatable');
    blockUI('#section-compute-eks-nodegroups-datatable');

    await sdkcall("EKS", "listClusters", {
        // no params
    }, true).then(async (data) => {
        $('#section-compute-eks-clusters-datatable').bootstrapTable('removeAll');

        await Promise.all(data.clusters.map(async (cluster) => {
            return Promise.all([
                sdkcall("EKS", "describeCluster", {
                    name: cluster
                }, true).then((data) => {
                    $('#section-compute-eks-clusters-datatable').bootstrapTable('append', [{
                        f2id: data.cluster.arn,
                        f2type: 'eks.cluster',
                        f2data: data.cluster,
                        f2region: region,
                        name: data.cluster.name,
                        k8sversion: data.cluster.version,
                        platformversion: data.cluster.platformVersion,
                        endpoint: data.cluster.endpoint
                    }]);
                }),
                sdkcall("EKS", "listNodegroups", {
                    clusterName: cluster
                }, true).then(async (data) => {
                    await Promise.all(data.nodegroups.map(async (nodegroup) => {
                        return sdkcall("EKS", "describeNodegroup", {
                            clusterName: cluster,
                            nodegroupName: nodegroup
                        }, true).then((data) => {
                            $('#section-compute-eks-nodegroups-datatable').bootstrapTable('append', [{
                                f2id: data.nodegroup.nodegroupArn,
                                f2type: 'eks.nodegroup',
                                f2data: data.nodegroup,
                                f2region: region,
                                name: data.nodegroup.nodegroupName,
                                version: data.nodegroup.version,
                                releaseversion: data.nodegroup.releaseVersion
                            }]);
                        });
                    }));
                })
            ]);
        }));

        unblockUI('#section-compute-eks-clusters-datatable');
        unblockUI('#section-compute-eks-nodegroups-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
