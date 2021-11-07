/* ========================================================================== */
// S3
/* ========================================================================== */

sections.push({
    'category': 'Storage',
    'service': 'S3',
    'resourcetypes': {
        'Buckets': {
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
                        title: 'Bucket Name',
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
                        field: 'creationdate',
                        title: 'Creation Date',
                        sortable: true,
                        editable: true,
                        formatter: timeAgoFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Bucket Policies': {
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
                        title: 'Bucket Name',
                        field: 'bucketname',
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
                        field: 'policylength',
                        title: 'Policy Length',
                        sortable: true,
                        editable: true,
                        formatter: byteSizeFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Access Points': {
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
                        field: 'bucketname',
                        title: 'Bucket Name',
                        sortable: true,
                        editable: true,
                        formatter: byteSizeFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Storage Lenses': {
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
                        field: 'isenabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: byteSizeFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Outpost Buckets': {
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
                        field: 'outpostid',
                        title: 'Outpost ID',
                        sortable: true,
                        editable: true,
                        formatter: byteSizeFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Outpost Bucket Policies': {
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
                    }
                ],
                [
                    // none
                ]
            ]
        },
        'Outpost Access Points': {
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
                        field: 'bucketname',
                        title: 'Bucket Name',
                        sortable: true,
                        editable: true,
                        formatter: byteSizeFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Outpost Endpoints': {
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
                        field: 'outpostid',
                        title: 'Outpost ID',
                        sortable: true,
                        editable: true,
                        formatter: byteSizeFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Object Lambda Access Points': {
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
                    }
                ],
                [
                    // none
                ]
            ]
        },
        'Object Lambda Access Point Policies': {
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
                        title: 'Access Point',
                        field: 'accesspoint',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                [
                    // none
                ]
            ]
        },
        'Multi-Region Access Points': {
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
                        field: 'alias',
                        title: 'Alias',
                        sortable: true,
                        editable: true,
                        formatter: byteSizeFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Multi-Region Access Point Policies': {
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
                    }
                ],
                [
                    // none
                ]
            ]
        }
    }
});

async function updateDatatableStorageS3() {
    blockUI('#section-storage-s3-buckets-datatable');
    blockUI('#section-storage-s3-bucketpolicies-datatable');
    blockUI('#section-storage-s3-accesspoints-datatable');
    blockUI('#section-storage-s3-storagelenses-datatable');
    blockUI('#section-storage-s3-outpostbuckets-datatable');
    blockUI('#section-storage-s3-outpostbucketpolicies-datatable');
    blockUI('#section-storage-s3-outpostaccesspoints-datatable');
    blockUI('#section-storage-s3-outpostendpoints-datatable');
    blockUI('#section-storage-s3-objectlambdaaccesspoints-datatable');
    blockUI('#section-storage-s3-objectlambdaaccesspointpolicies-datatable');
    blockUI('#section-storage-s3-multiregionaccesspoints-datatable');
    blockUI('#section-storage-s3-multiregionaccesspointpolicies-datatable');

    await sdkcall("S3", "listBuckets", {
        // no params
    }, true).then(async (data) => {
        $('#section-storage-s3-buckets-datatable').deferredBootstrapTable('removeAll');
        $('#section-storage-s3-bucketpolicies-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Buckets.map(bucket => {
            return Promise.all([
                sdkcall("S3", "getBucketAccelerateConfiguration", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    bucket['AccelerateConfiguration'] = data;
                }).catch(() => { }),
                sdkcall("S3", "getBucketTagging", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    bucket['Tags'] = data.TagSet;
                }).catch(() => { }),
                sdkcall("S3", "getBucketEncryption", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    bucket['Encryption'] = data;
                }).catch(() => { }),
                sdkcall("S3", "getBucketCors", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    bucket['Cors'] = data;
                }).catch(() => { }),
                sdkcall("S3", "getBucketLifecycle", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    bucket['Lifecycle'] = data;
                }).catch(() => { }),
                sdkcall("S3", "getBucketLogging", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    bucket['Logging'] = data;
                }).catch(() => { }),
                sdkcall("S3", "getBucketNotificationConfiguration", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    bucket['NotificationConfiguration'] = data;
                }).catch(() => { }),
                sdkcall("S3", "getBucketReplication", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    bucket['Replication'] = data;
                }).catch(() => { }),
                sdkcall("S3", "getBucketVersioning", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    bucket['Versioning'] = data;
                }).catch(() => { }),
                sdkcall("S3", "getBucketWebsite", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    bucket['Website'] = data;
                }).catch(() => { }),
                sdkcall("S3", "listBucketAnalyticsConfigurations", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    bucket['AnalyticsConfigurations'] = data;
                }).catch(() => { }),
                sdkcall("S3", "listBucketInventoryConfigurations", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    bucket['InventoryConfigurations'] = data;
                }).catch(() => { }),
                sdkcall("S3", "listBucketMetricsConfigurations", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    bucket['MetricsConfigurations'] = data;
                }).catch(() => { }),
                sdkcall("S3", "getObjectLockConfiguration", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    bucket['ObjectLockConfiguration'] = data.ObjectLockConfiguration;
                }).catch(() => { }),
                sdkcall("S3", "listBucketIntelligentTieringConfigurations", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    bucket['IntelligentTieringConfiguration'] = data.IntelligentTieringConfigurationList;
                }).catch(() => { }),
                sdkcall("S3", "getBucketOwnershipControls", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    bucket['OwnershipControls'] = data.OwnershipControls;
                }).catch(() => { })
            ]).then(async () => {
                $('#section-storage-s3-buckets-datatable').deferredBootstrapTable('append', [{
                    f2id: bucket.Name,
                    f2type: 's3.bucket',
                    f2data: bucket,
                    f2region: region,
                    f2link: 'https://console.aws.amazon.com/s3/home?region=' + region + '&bucket=' + bucket.Name,
                    name: bucket.Name,
                    creationdate: bucket.CreationDate
                }]);

                await sdkcall("S3", "getBucketPolicy", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    data['Bucket'] = bucket.Name;
                    $('#section-storage-s3-bucketpolicies-datatable').deferredBootstrapTable('append', [{
                        f2id: bucket.Name + " BucketPolicy",
                        f2type: 's3.bucketpolicy',
                        f2data: data,
                        f2region: region,
                        bucketname: bucket.Name,
                        policy: data.Policy,
                        policylength: data.Policy.length
                    }]);
                }).catch(() => { });
            });
        }));

        unblockUI('#section-storage-s3-buckets-datatable');
        unblockUI('#section-storage-s3-bucketpolicies-datatable');
    });

    await sdkcall("STS", "getCallerIdentity", {
        // no params
    }, true).then(async (data) => {
        $('#section-storage-s3-accesspoints-datatable').deferredBootstrapTable('removeAll');
        $('#section-storage-s3-storagelenses-datatable').deferredBootstrapTable('removeAll');
        $('#section-storage-s3-outpostbuckets-datatable').deferredBootstrapTable('removeAll');
        $('#section-storage-s3-outpostbucketpolicies-datatable').deferredBootstrapTable('removeAll');
        $('#section-storage-s3-outpostaccesspoints-datatable').deferredBootstrapTable('removeAll');
        $('#section-storage-s3-outpostendpoints-datatable').deferredBootstrapTable('removeAll');
        $('#section-storage-s3-multiregionaccesspoints-datatable').deferredBootstrapTable('removeAll');
        $('#section-storage-s3-multiregionaccesspointpolicies-datatable').deferredBootstrapTable('removeAll');

        var accountId = data.Account;

        await sdkcall("S3Control", "listAccessPoints", {
            AccountId: accountId
        }, false).then(async (data) => {
            await Promise.all(data.AccessPointList.map(async (accessPoint) => {
                return sdkcall("S3Control", "getAccessPoint", {
                    AccountId: accountId,
                    Name: accessPoint.Name
                }, false).then(async (data) => {
                    await sdkcall("S3Control", "getAccessPointPolicy", {
                        AccountId: accountId,
                        Name: accessPoint.Name
                    }, false).then(async (policydata) => {
                        data['Policy'] = policydata.Policy;
                    });

                    data['AccountId'] = accountId;

                    $('#section-storage-s3-accesspoints-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Name,
                        f2type: 's3.accesspoint',
                        f2data: data,
                        f2region: region,
                        name: data.Name,
                        bucketname: data.Bucket
                    }]);
                });
            }));
        }).catch(() => { });

        await sdkcall("S3Control", "listMultiRegionAccessPoints", {
            AccountId: accountId
        }, false).then(async (data) => {
            await Promise.all(data.AccessPoints.map(async (accessPoint) => {
                return sdkcall("S3Control", "getMultiRegionAccessPoint", {
                    AccountId: accountId,
                    Name: accessPoint.Name
                }, false).then(async (data) => {
                    data.AccessPoint['AccountId'] = accountId;

                    $('#section-storage-s3-multiregionaccesspoints-datatable').deferredBootstrapTable('append', [{
                        f2id: data.AccessPoint.Name + " MRAP",
                        f2type: 's3.multiregionaccesspoint',
                        f2data: data.AccessPoint,
                        f2region: region,
                        name: data.AccessPoint.Name,
                        alias: data.AccessPoint.Alias
                    }]);

                    await sdkcall("S3Control", "getMultiRegionAccessPointPolicy", {
                        AccountId: accountId,
                        Name: accessPoint.Name
                    }, false).then(async (policydata) => {
                        data.AccessPoint['Policy'] = policydata.Policy;

                        $('#section-storage-s3-multiregionaccesspointpolicies-datatable').deferredBootstrapTable('append', [{
                            f2id: data.AccessPoint.Name + " MRAP Policy",
                            f2type: 's3.multiregionaccesspointpolicy',
                            f2data: data.AccessPoint,
                            f2region: region,
                            name: data.AccessPoint.Name
                        }]);
                    });
                });
            }));
        }).catch(() => { });

        await sdkcall("S3Control", "listStorageLensConfigurations", {
            AccountId: accountId
        }, true).then(async (data) => {
            $('#section-storage-s3-storagelenses-datatable').deferredBootstrapTable('removeAll');
    
            await Promise.all(data.StorageLensConfigurationList.map(config => {
                return sdkcall("S3Control", "getStorageLensConfiguration", {
                    ConfigId: config.Id,
                    AccountId: accountId
                }, true).then((data) => {
                    $('#section-storage-s3-storagelenses-datatable').deferredBootstrapTable('append', [{
                        f2id: data.StorageLensConfiguration.StorageLensArn,
                        f2type: 's3.storagelens',
                        f2data: data,
                        f2region: region,
                        id: data.StorageLensConfiguration.TemplateName,
                        isenabled: data.StorageLensConfiguration.IsEnabled
                    }]);
                });
            }));
        }).catch(() => { });

        await sdkcall("S3Control", "listRegionalBuckets", {
            AccountId: accountId
        }, false).then(async (data) => {
            $('#section-storage-s3-outpostbuckets-datatable').deferredBootstrapTable('removeAll');
            $('#section-storage-s3-outpostbucketpolicies-datatable').deferredBootstrapTable('removeAll');
    
            await Promise.all(data.RegionalBucketList.map(async (bucket) => {
                await sdkcall("S3Control", "getBucket", {
                    Bucket: bucket.Bucket,
                    AccountId: accountId
                }, true).then(async (data) => {
                    data['OutpostId'] = bucket.OutpostId;

                    await sdkcall("S3Control", "getBucketLifecycleConfiguration", {
                        Bucket: bucket.Bucket,
                        AccountId: accountId
                    }, true).then((lifecycledata) => {
                        data['LifecycleConfiguration'] = lifecycledata;
                    });

                    $('#section-storage-s3-outpostbuckets-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Bucket,
                        f2type: 's3.outpostbucket',
                        f2data: data,
                        f2region: region,
                        name: data.Bucket,
                        outpostid: bucket.OutpostId
                    }]);
                });

                return sdkcall("S3Control", "getBucketPolicy", {
                    Bucket: bucket.Bucket,
                    AccountId: accountId
                }, true).then((data) => {
                    data['Bucket'] = bucket.Bucket;

                    $('#section-storage-s3-outpostbucketpolicies-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Bucket + " Policy",
                        f2type: 's3.outpostbucketpolicy',
                        f2data: data,
                        f2region: region,
                        name: data.Bucket
                    }]);
                });
            }));
        }).catch(() => { });

        await sdkcall("S3Control", "listAccessPoints", {
            AccountId: accountId
        }, false).then(async (data) => {
            $('#section-storage-s3-outpostaccesspoints-datatable').deferredBootstrapTable('removeAll');
    
            await Promise.all(data.AccessPointList.map(async (accesspoint) => {
                return sdkcall("S3Control", "getAccessPoint", {
                    Name: accesspoint.Name,
                    AccountId: accountId
                }, true).then(async (data) => {
                    await sdkcall("S3Control", "getAccessPointPolicy", {
                        Name: accesspoint.Name,
                        AccountId: accountId
                    }, false).then((policydata) => {
                        data['Policy'] = policydata.Policy;
                    }).catch(() => { });

                    data['AccessPointArn'] = accesspoint.AccessPointArn;

                    $('#section-storage-s3-outpostaccesspoints-datatable').deferredBootstrapTable('append', [{
                        f2id: accesspoint.AccessPointArn,
                        f2type: 's3.outpostaccesspoint',
                        f2data: data,
                        f2region: region,
                        name: data.Name,
                        bucketname: data.Bucket
                    }]);
                });
            }));
        }).catch(() => { });

        await sdkcall("S3Control", "listAccessPointsForObjectLambda", {
            AccountId: accountId
        }, true).then(async (data) => {
            $('#section-storage-s3-objectlambdaaccesspoints-datatable').deferredBootstrapTable('removeAll');
            $('#section-storage-s3-objectlambdaaccesspointpolicies-datatable').deferredBootstrapTable('removeAll');
    
            await Promise.all(data.ObjectLambdaAccessPointList.map(async (accesspoint) => {
                await sdkcall("S3Control", "getAccessPointConfigurationForObjectLambda", {
                    Name: accesspoint.Name,
                    AccountId: accountId
                }, true).then((data) => {
                    data['Name'] = accesspoint.Name;
                    data['Arn'] = accesspoint.ObjectLambdaAccessPointArn;

                    $('#section-storage-s3-objectlambdaaccesspoints-datatable').deferredBootstrapTable('append', [{
                        f2id: accesspoint.ObjectLambdaAccessPointArn,
                        f2type: 's3.objectlambdaaccesspoint',
                        f2data: data,
                        f2region: region,
                        name: accesspoint.Name
                    }]);
                });

                return sdkcall("S3Control", "getAccessPointPolicyForObjectLambda", {
                    Name: accesspoint.Name,
                    AccountId: accountId
                }, true).then((data) => {
                    data['ObjectLambdaAccessPoint'] = accesspoint.Name;

                    $('#section-storage-s3-objectlambdaaccesspointpolicies-datatable').deferredBootstrapTable('append', [{
                        f2id: accesspoint.ObjectLambdaAccessPointArn + " Policy",
                        f2type: 's3.objectlambdaaccesspointpolicy',
                        f2data: data,
                        f2region: region,
                        accesspoint: accesspoint.Name
                    }]);
                });
            }));
        }).catch(() => { });
    });

    await sdkcall("S3Outposts", "listEndpoints", {
        // no params
    }, false).then(async (data) => {
        $('#section-storage-s3-outpostendpoints-datatable').deferredBootstrapTable('removeAll');

        data.Endpoints.forEach(async (endpoint) => {
            var endpointid = endpoint.EndpointArn.split("/").pop();

            if (endpoint.NetworkInterfaces && endpoint.NetworkInterfaces[0] && endpoint.NetworkInterfaces[0].NetworkInterfaceId) {
                await sdkcall("EC2", "describeNetworkInterfaces", {
                    NetworkInterfaceIds: [endpoint.NetworkInterfaces[0].NetworkInterfaceId]
                }, true).then(async (nicdata) => {
                    if (nicdata.NetworkInterfaces && nicdata.NetworkInterfaces[0] && nicdata.NetworkInterfaces[0].Groups && nicdata.NetworkInterfaces[0].Groups[0]) {
                        endpoint['SecurityGroupId'] = nicdata.NetworkInterfaces[0].Groups[0].GroupId;
                        endpoint['SubnetId'] = nicdata.NetworkInterfaces[0].SubnetId;

                        $('#section-storage-s3-outpostendpoints-datatable').deferredBootstrapTable('append', [{
                            f2id: endpoint.EndpointArn,
                            f2type: 's3.outpostendpoint',
                            f2data: endpoint,
                            f2region: region,
                            id: endpointid,
                            outpostid: data.OutpostsId
                        }]);
                    }
                });
            }
        });
    }).catch(() => { });

    unblockUI('#section-storage-s3-accesspoints-datatable');
    unblockUI('#section-storage-s3-storagelenses-datatable');
    unblockUI('#section-storage-s3-outpostbuckets-datatable');
    unblockUI('#section-storage-s3-outpostbucketpolicies-datatable');
    unblockUI('#section-storage-s3-outpostaccesspoints-datatable');
    unblockUI('#section-storage-s3-outpostendpoints-datatable');
    unblockUI('#section-storage-s3-objectlambdaaccesspoints-datatable');
    unblockUI('#section-storage-s3-objectlambdaaccesspointpolicies-datatable');
    unblockUI('#section-storage-s3-multiregionaccesspoints-datatable');
    unblockUI('#section-storage-s3-multiregionaccesspointpolicies-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "s3.bucket") {
        reqParams.cfn['BucketName'] = obj.data.Name;
        reqParams.tf['bucket'] = obj.data.Name;
        reqParams.cfn['Tags'] = obj.data.Tags;
        if (obj.data.AccelerateConfiguration && obj.data.AccelerateConfiguration.Status) {
            reqParams.cfn['AccelerateConfiguration'] = {
                'AccelerationStatus': obj.data.AccelerateConfiguration.Status
            };
        }
        if (obj.data.Encryption && obj.data.Encryption.ServerSideEncryptionConfiguration && obj.data.Encryption.ServerSideEncryptionConfiguration.Rules) {
            var rules = [];
            obj.data.Encryption.ServerSideEncryptionConfiguration.Rules.forEach(rule => {
                rules.push({
                    'ServerSideEncryptionByDefault': rule.ApplyServerSideEncryptionByDefault,
                    'BucketKeyEnabled': rule.BucketKeyEnabled
                });
            });
            reqParams.cfn['BucketEncryption'] = {
                'ServerSideEncryptionConfiguration': rules
            };
        }
        if (obj.data.Lifecycle && obj.data.Lifecycle.Rules) {
            var lifecyclerules = [];

            obj.data.Lifecycle.Rules.forEach(rule => {
                var lifecyclerule = {
                    'AbortIncompleteMultipartUpload': rule.AbortIncompleteMultipartUpload,
                    'Id': rule.ID,
                    'Prefix': rule.Prefix,
                    'Status': rule.Status
                };

                if (rule.Expiration) {
                    if (rule.Expiration.Date) {
                        lifecyclerule['ExpirationDate'] = rule.Expiration.Date.toISOString();
                    }
                    lifecyclerule['ExpirationInDays'] = rule.Expiration.Days;
                }

                if (rule.NoncurrentVersionExpiration) {
                    lifecyclerule['NoncurrentVersionExpirationInDays'] = rule.NoncurrentVersionExpiration.NoncurrentDays;
                }

                if (rule.NoncurrentVersionTransitions) {
                    lifecyclerule['NoncurrentVersionTransitions'] = [];
                    rule.NoncurrentVersionTransitions.forEach(transition => {
                        lifecyclerule['NoncurrentVersionTransitions'].push({
                            'TransitionInDays': transition.NoncurrentDays,
                            'StorageClass': transition.StorageClass
                        });
                    });
                }

                if (rule.Filter && rule.Filter.Tag) {
                    lifecyclerule['TagFilters'] = [rule.Filter.Tag];
                    if (rule.Filter.And && rule.Filter.And.Tags) {
                        lifecyclerule['TagFilters'] = lifecyclerule['TagFilters'].concat(rule.Filter.And.Tags);
                    }
                }

                if (rule.Transitions) {
                    lifecyclerule['Transitions'] = [];
                    rule.Transitions.forEach(transition => {
                        var transitiondate = null;
                        if (transition.Date) {
                            transitiondate = transition.Date.toISOString();
                        }
                        lifecyclerule['Transitions'].push({
                            'TransitionInDays': transition.Days,
                            'TransitionDate': transitiondate,
                            'StorageClass': transition.StorageClass
                        });
                    });
                }

                lifecyclerules.push(lifecyclerule);
            });

            reqParams.cfn['LifecycleConfiguration'] = {
                'Rules': lifecyclerules
            };
        }
        if (obj.data.Cors && obj.data.Cors.CORSRules) {
            var corsrules = [];
            obj.data.Cors.CORSRules.forEach(corsrule => {
                corsrules.push({
                    'AllowedHeaders': corsrule.AllowedHeaders,
                    'AllowedMethods': corsrule.AllowedMethods,
                    'AllowedOrigins': corsrule.AllowedOrigins,
                    'ExposedHeaders': corsrule.ExposedHeaders,
                    'MaxAgeSeconds': corsrule.MaxAge
                });
            });
            reqParams.cfn['CorsConfiguration'] = {
                'CorsRules': corsrules
            };
        }
        if (obj.data.Logging && obj.data.Logging.LoggingEnabled) {
            reqParams.cfn['LoggingConfiguration'] = {
                'DestinationBucketName': obj.data.Logging.LoggingEnabled.TargetBucket,
                'LogFilePrefix': obj.data.Logging.LoggingEnabled.TargetPrefix
            };
        }
        if (obj.data.NotificationConfiguration && (obj.data.NotificationConfiguration.TopicConfigurations || obj.data.NotificationConfiguration.QueueConfigurations || obj.data.NotificationConfiguration.LambdaFunctionConfigurations)) {
            var topicconfigurations = null;
            var queueconfigurations = null;
            var lambdafunctionconfigurations = null;
            if (obj.data.NotificationConfiguration.TopicConfigurations) {
                topicconfigurations = [];
                obj.data.NotificationConfiguration.TopicConfigurations.forEach(configuration => {
                    var filter = null;
                    if (configuration.Filter && configuration.Filter.Key && configuration.Filter.Key.FilterRules) {
                        filter = {
                            'S3Key': {
                                'Rules': configuration.Filter.Key.FilterRules
                            }
                        };
                    }
                    configuration.Events.forEach(event => {
                        topicconfigurations.push({
                            'Event': event,
                            'Filter': filter,
                            'Topic': configuration.TopicArn
                        });
                    });
                });
            }
            if (obj.data.NotificationConfiguration.QueueConfigurations) {
                queueconfigurations = [];
                obj.data.NotificationConfiguration.QueueConfigurations.forEach(configuration => {
                    var filter = null;
                    if (configuration.Filter && configuration.Filter.Key && configuration.Filter.Key.FilterRules) {
                        filter = {
                            'S3Key': {
                                'Rules': configuration.Filter.Key.FilterRules
                            }
                        };
                    }
                    configuration.Events.forEach(event => {
                        queueconfigurations.push({
                            'Event': event,
                            'Filter': filter,
                            'Queue': configuration.QueueArn
                        });
                    });
                });
            }
            if (obj.data.NotificationConfiguration.LambdaFunctionConfigurations) {
                lambdafunctionconfigurations = [];
                obj.data.NotificationConfiguration.LambdaFunctionConfigurations.forEach(configuration => {
                    var filter = null;
                    if (configuration.Filter && configuration.Filter.Key && configuration.Filter.Key.FilterRules) {
                        filter = {
                            'S3Key': {
                                'Rules': configuration.Filter.Key.FilterRules
                            }
                        };
                    }
                    configuration.Events.forEach(event => {
                        lambdafunctionconfigurations.push({
                            'Event': event,
                            'Filter': filter,
                            'Function': configuration.LambdaFunctionArn
                        });
                    });
                });
            }

            if (topicconfigurations.length || queueconfigurations.length || lambdafunctionconfigurations.length) {
                reqParams.cfn['NotificationConfiguration'] = {
                    'TopicConfigurations': topicconfigurations,
                    'QueueConfigurations': queueconfigurations,
                    'LambdaConfigurations': lambdafunctionconfigurations
                };
            }
        }
        if (obj.data.Replication && obj.data.Replication.ReplicationConfiguration) {
            var rules = [];
            obj.data.Replication.ReplicationConfiguration.Rules.forEach(rule => {
                rules.push({
                    'Id': rule.ID,
                    'Prefix': rule.Prefix,
                    'Status': rule.Status,
                    'Destination': rule.Destination,
                    'SourceSelectionCriteria': rule.SourceSelectionCriteria
                });
            });
            reqParams.cfn['ReplicationConfiguration'] = {
                'Role': obj.data.Replication.ReplicationConfiguration.Role,
                'Rules': rules
            };
        }
        if (obj.data.Versioning && obj.data.Versioning.Status) {
            reqParams.cfn['VersioningConfiguration'] = {
                'Status': obj.data.Versioning.Status
            };
        }
        if (obj.data.Website && obj.data.Website.IndexDocument) {
            var errordocument = null;
            var routingrules = null;

            if (obj.data.Website.ErrorDocument) {
                errordocument = obj.data.Website.ErrorDocument.Key;
            }
            if (obj.data.Website.RoutingRules) {
                routingrules = [];
                obj.data.Website.RoutingRules.forEach(routingrule => {
                    routingrules.push({
                        'RedirectRule': routingrule.Redirect,
                        'RoutingRuleCondition': routingrule.Condition
                    });
                });
            }

            reqParams.cfn['WebsiteConfiguration'] = {
                'IndexDocument': obj.data.Website.IndexDocument.Suffix,
                'RedirectAllRequestsTo': obj.data.Website.RedirectAllRequestsTo,
                'ErrorDocument': errordocument,
                'RoutingRules': routingrules
            };
        }
        if (obj.data.AnalyticsConfigurations && obj.data.AnalyticsConfigurations.AnalyticsConfigurationList) {
            reqParams.cfn['AnalyticsConfigurations'] = [];
            obj.data.AnalyticsConfigurations.AnalyticsConfigurationList.forEach(config => {
                var prefix = null;
                var tagfilters = null;
                var storageclassanalysis = null;
                if (config.Filter) {
                    if (config.Filter.Tag) {
                        tagfilters = [config.Filter.Tag];
                        if (config.Filter.And && config.Filter.And.Tags) {
                            tagfilters = tagfilters.concat(config.Filter.And.Tags);
                        }
                    }
                    prefix = config.Filter.Prefix;
                }
                if (config.StorageClassAnalysis.DataExport) {
                    storageclassanalysis = {
                        'DataExport': {
                            'OutputSchemaVersion': config.StorageClassAnalysis.DataExport.OutputSchemaVersion,
                            'Destination': {
                                'BucketAccountId': config.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.BucketAccountId,
                                'BucketArn': config.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Bucket,
                                'Format': config.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Format,
                                'Prefix': config.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Prefix
                            }
                        }
                    };
                }
                reqParams.cfn['AnalyticsConfigurations'].push({
                    'Id': config.Id,
                    'Prefix': prefix,
                    'TagFilters': tagfilters,
                    'StorageClassAnalysis': storageclassanalysis
                });
            });
        }
        if (obj.data.InventoryConfigurations && obj.data.InventoryConfigurations.InventoryConfigurationList) {
            reqParams.cfn['InventoryConfigurations'] = [];
            obj.data.InventoryConfigurations.InventoryConfigurationList.forEach(config => {
                var prefix = null;
                if (config.Filter) {
                    prefix = config.Filter.Prefix;
                }

                reqParams.cfn['InventoryConfigurations'].push({
                    'Destination': {
                        'BucketAccountId': config.Destination.S3BucketDestination.AccountId,
                        'BucketArn': config.Destination.S3BucketDestination.Bucket,
                        'Format': config.Destination.S3BucketDestination.Format,
                        'Prefix': config.Destination.S3BucketDestination.Prefix
                    },
                    'Enabled': config.IsEnabled,
                    'Id': config.Id,
                    'IncludedObjectVersions': config.IncludedObjectVersions,
                    'OptionalFields': config.OptionalFields,
                    'Prefix': prefix,
                    'ScheduleFrequency': config.Schedule.Frequency
                });
            });
        }
        if (obj.data.MetricsConfigurations && obj.data.MetricsConfigurations.MetricsConfigurationList) {
            reqParams.cfn['MetricsConfigurations'] = [];
            obj.data.MetricsConfigurations.MetricsConfigurationList.forEach(config => {
                var prefix = null;
                var tagfilters = null;
                if (config.Filter) {
                    if (config.Filter.Tag) {
                        tagfilters = [config.Filter.Tag];
                        if (config.Filter.And && config.Filter.And.Tags) {
                            tagfilters = tagfilters.concat(config.Filter.And.Tags);
                        }
                    }
                    prefix = config.Filter.Prefix;
                }
                reqParams.cfn['MetricsConfigurations'].push({
                    'Id': config.Id,
                    'Prefix': prefix,
                    'TagFilters': tagfilters
                });
            });
        }
        reqParams.cfn['ObjectLockConfiguration'] = obj.data.ObjectLockConfiguration;
        reqParams.cfn['OwnershipControls'] = obj.data.OwnershipControls;
        if (obj.data.IntelligentTieringConfiguration) {
            reqParams.cfn['OwnershipControls'] = [];
            obj.data.IntelligentTieringConfiguration.forEach(itconfig => {
                reqParams.cfn['OwnershipControls'].push({
                    'Id': itconfig.Id,
                    'Prefix': itconfig.Filter.Prefix,
                    'Status': itconfig.Status,
                    'TagFilters': itconfig.Filter.Tag,
                    'Tierings': itconfig.Tierings
                });
            });
        }

        /*
        TODO:
        AccessControl: String
        PublicAccessBlockConfiguration: 
            PublicAccessBlockConfiguration
        Tags:
            - Resource Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('s3', obj.id, 'AWS::S3::Bucket'),
            'region': obj.region,
            'service': 's3',
            'type': 'AWS::S3::Bucket',
            'terraformType': 'aws_s3_bucket',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'Import': {
                    'BucketName': obj.data.Name
                }
            }
        });
    } else if (obj.type == "s3.bucketpolicy") {
        reqParams.cfn['Bucket'] = obj.data.Bucket;
        reqParams.tf['bucket'] = obj.data.Bucket;
        reqParams.cfn['PolicyDocument'] = JSON.parse(obj.data.Policy);
        reqParams.tf['policy'] = obj.data.Policy;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('s3', obj.id, 'AWS::S3::BucketPolicy'),
            'region': obj.region,
            'service': 's3',
            'type': 'AWS::S3::BucketPolicy',
            'terraformType': 'aws_s3_bucket_policy',
            'options': reqParams
        });
    } else if (obj.type == "s3.accesspoint") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Bucket'] = obj.data.Bucket;
        reqParams.cfn['Policy'] = obj.data.Policy;
        reqParams.cfn['AccountId'] = obj.data.AccountId;
        reqParams.cfn['VpcConfiguration'] = obj.data.VpcConfiguration;
        reqParams.cfn['PublicAccessBlockConfiguration'] = obj.data.PublicAccessBlockConfiguration;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('s3', obj.id, 'AWS::S3::AccessPoint'),
            'region': obj.region,
            'service': 's3',
            'type': 'AWS::S3::AccessPoint',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'Import': {
                    'Name': obj.data.Name
                }
            }
        });
    } else if (obj.type == "s3.storagelens") {
        var dataexport = null;
        if (obj.data.StorageLensConfiguration.DataExport && obj.data.StorageLensConfiguration.DataExport.S3BucketDestination) {
            dataexport = {
                'S3BucketDestination': {
                    'AccountId': obj.data.StorageLensConfiguration.DataExport.S3BucketDestination.AccountId,
                    'Encryption': obj.data.StorageLensConfiguration.DataExport.S3BucketDestination.Encryption,
                    'Format': obj.data.StorageLensConfiguration.DataExport.S3BucketDestination.Format,
                    'OutputSchemaVersion': obj.data.StorageLensConfiguration.DataExport.S3BucketDestination.OutputSchemaVersion,
                    'Prefix': obj.data.StorageLensConfiguration.DataExport.S3BucketDestination.Prefix
                }
            };
        }
        reqParams.cfn['StorageLensConfiguration'] = {
            'AccountLevel': obj.data.StorageLensConfiguration.AccountLevel,
            'DataExport': dataexport,
            'Id': obj.data.StorageLensConfiguration.Id,
            'Exclude': obj.data.StorageLensConfiguration.Exclude,
            'Include': obj.data.StorageLensConfiguration.Include,
            'IsEnabled': obj.data.StorageLensConfiguration.IsEnabled
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('s3', obj.id, 'AWS::S3::StorageLens'),
            'region': obj.region,
            'service': 's3',
            'type': 'AWS::S3::StorageLens',
            'options': reqParams
        });
    } else if (obj.type == "s3.outpostbucket") {
        reqParams.cfn['BucketName'] = obj.data.Bucket;
        reqParams.cfn['OutpostId'] = obj.data.OutpostId;
        reqParams.cfn['LifecycleConfiguration'] = obj.data.LifecycleConfiguration;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('s3', obj.id, 'AWS::S3Outposts::Bucket'),
            'region': obj.region,
            'service': 's3',
            'type': 'AWS::S3Outposts::Bucket',
            'options': reqParams
        });
    } else if (obj.type == "s3.outpostbucketpolicy") {
        reqParams.cfn['Bucket'] = obj.data.Bucket;
        reqParams.cfn['PolicyDocument'] = JSON.parse(obj.data.Policy);

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('s3', obj.id, 'AWS::S3Outposts::BucketPolicy'),
            'region': obj.region,
            'service': 's3',
            'type': 'AWS::S3Outposts::BucketPolicy',
            'options': reqParams
        });
    } else if (obj.type == "s3.outpostaccesspoint") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Bucket'] = obj.data.Bucket;
        if (obj.data.Policy) {
            reqParams.cfn['Policy'] = JSON.parse(obj.data.Policy);
        }
        reqParams.cfn['VpcConfiguration'] = obj.data.VpcConfiguration;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('s3', obj.id, 'AWS::S3Outposts::AccessPoint'),
            'region': obj.region,
            'service': 's3',
            'type': 'AWS::S3Outposts::AccessPoint',
            'options': reqParams
        });
    } else if (obj.type == "s3.outpostendpoint") {
        reqParams.cfn['OutpostId'] = obj.data.OutpostsId;
        reqParams.cfn['SecurityGroupId'] = obj.data.SecurityGroupId;
        reqParams.cfn['SubnetId'] = obj.data.SubnetId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('s3', obj.id, 'AWS::S3Outposts::Endpoint'),
            'region': obj.region,
            'service': 's3',
            'type': 'AWS::S3Outposts::Endpoint',
            'options': reqParams
        });
    } else if (obj.type == "s3.objectlambdaaccesspoint") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['ObjectLambdaConfiguration'] = obj.data.Configuration;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('s3', obj.id, 'AWS::S3ObjectLambda::AccessPoint'),
            'region': obj.region,
            'service': 's3',
            'type': 'AWS::S3ObjectLambda::AccessPoint',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Arn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "s3.objectlambdaaccesspointpolicy") {
        reqParams.cfn['ObjectLambdaAccessPoint'] = obj.data.ObjectLambdaAccessPoint;
        reqParams.cfn['PolicyDocument'] = obj.data.Policy;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('s3', obj.id, 'AWS::S3ObjectLambda::AccessPointPolicy'),
            'region': obj.region,
            'service': 's3',
            'type': 'AWS::S3ObjectLambda::AccessPointPolicy',
            'options': reqParams
        });
    } else if (obj.type == "s3.multiregionaccesspoint") {
        reqParams.cfn['Name'] = obj.data.Name;
        if (obj.data.Regions) {
            reqParams.cfn['Regions'] = [];
            obj.data.Regions.forEach(region => {
                reqParams.cfn['Regions'].push({
                    'Bucket': region.Bucket
                });
            });
        }
        reqParams.cfn['PublicAccessBlockConfiguration'] = obj.data.PublicAccessBlockConfiguration;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('s3', obj.id, 'AWS::S3::MultiRegionAccessPoint'),
            'region': obj.region,
            'service': 's3',
            'type': 'AWS::S3::MultiRegionAccessPoint',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'GetAtt': {
                    'Alias': obj.data.Alias
                }
            }
        });
    } else if (obj.type == "s3.multiregionaccesspointpolicy") {
        reqParams.cfn['MrapName'] = obj.data.Name;
        reqParams.cfn['Policy'] = obj.data.Policy.Established.Policy;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('s3', obj.id, 'AWS::S3::MultiRegionAccessPointPolicy'),
            'region': obj.region,
            'service': 's3',
            'type': 'AWS::S3::MultiRegionAccessPointPolicy',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
