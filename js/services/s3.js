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
        }
    }
});

async function updateDatatableStorageS3() {
    blockUI('#section-storage-s3-buckets-datatable');
    blockUI('#section-storage-s3-bucketpolicies-datatable');
    blockUI('#section-storage-s3-accesspoints-datatable');

    await sdkcall("S3", "listBuckets", {
        // no params
    }, true).then(async (data) => {
        $('#section-storage-s3-buckets-datatable').bootstrapTable('removeAll');
        $('#section-storage-s3-bucketpolicies-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Buckets.map(bucket => {
            return Promise.all([
                sdkcall("S3", "getBucketAccelerateConfiguration", {
                    Bucket: bucket.Name
                }, false).then((data) => {
                    bucket['AccelerateConfiguration'] = data;
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
                }).catch(() => { })
            ]).then(async () => {
                $('#section-storage-s3-buckets-datatable').bootstrapTable('append', [{
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
                    $('#section-storage-s3-bucketpolicies-datatable').bootstrapTable('append', [{
                        f2id: bucket.Name,
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
        var accountId = data.Account;

        await sdkcall("S3Control", "listAccessPoints", {
            AccountId: accountId
        }, false).then(async (data) => {
            await Promise.all(data.AccessPointList.map(accessPoint => {
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

                    $('#section-storage-s3-accesspoints-datatable').bootstrapTable('append', [{
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
    });

    unblockUI('#section-storage-s3-accesspoints-datatable');
}
