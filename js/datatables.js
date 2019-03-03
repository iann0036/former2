var sections = [];

/* ========================================================================== */
// Formatters
/* ========================================================================== */

function textFormatter(data) {
    return data;
}

function byteSizeFormatter(data) {
    var bytes = parseInt(data);

    if (bytes < 1024) {
        return bytes + " bytes";
    } else if (bytes < 1024*1024) {
        return (bytes/1024).toFixed(1) + " kB";
    } else if (bytes < 1024*1024*1024) {
        return (bytes/1024/1024).toFixed(1) + " MB";
    }

    return data;
}

function timeFormatter(data) {
    const NOW = new Date();
    const times = [["second", 1], ["minute", 60], ["hour", 3600], ["day", 86400], ["week", 604800], ["month", 2592000], ["year", 31536000], ["", Infinity]]

    var date = Date.parse(data);

    var diff = Math.round((NOW - date) / 1000)
    for (var t = 0; t < times.length; t++) {
        if (diff < times[t][1]) {
            if (t == 0) {
                return "Just now"
            } else {
                diff = Math.round(diff / times[t - 1][1])
                return diff + " " + times[t - 1][0] + (diff == 1?" ago":"s ago")
            }
        }
    }
}

function lambdaRuntimeFormatter(data) {
    var runtimeMappings = {
        'nodejs8.10': 'Node.js 8.10',
        'nodejs6.10': 'Node.js 6.10',
        'python3.6': 'Python 3.6',
        'python3.7': 'Python 3.7',
        'python2.7': 'Python 2.7',
        'ruby2.5': 'Ruby 2.5',
        'java8': 'Java 8',
        'go1.x': 'Go 1.x',
        'dotnetcore2.1': '.NET Core 2.1',
        'dotnetcore2.0': '.NET Core 2.0',
        'dotnetcore1.0': '.NET Core 1.0'
    }

    if (runtimeMappings[data]) {
        return runtimeMappings[data];
    }

    return data;
}

/* ========================================================================== */
// SDK Helpers
/* ========================================================================== */

function sdkcall(method, params, alert_on_errors) {
    return new Promise(function(resolve, reject) {
        method.call(null, params, function(err, data) {
            if (err) {
                if (alert_on_errors) {
                    console.log(err, err.stack);
                    $.notify({
                        icon: 'font-icon font-icon-warning',
                        title: '<strong>Error</strong>',
                        message: err
                    },{
                        type: 'danger'
                    });
                    reject(data);
                } else {
                    resolve();
                }
            } else {
                resolve(data);
            }
        });
    });
}

/* ========================================================================== */
// Lambda
/* ========================================================================== */

sections.push({
    'category': 'Compute',
    'service': 'Lambda',
    'resourcetypes': {
        'Functions': {
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
                        title: 'Function Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'runtime',
                        title: 'Runtime',
                        sortable: true,
                        align: 'center',
                        formatter: lambdaRuntimeFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        field: 'codesize',
                        title: 'Code Size',
                        sortable: true,
                        align: 'center',
                        formatter: byteSizeFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        field: 'lastmodified',
                        title: 'Last Modified',
                        sortable: true,
                        align: 'center',
                        formatter: timeFormatter,
                        footerFormatter: textFormatter
                    }
                ]
            ]
        },
        'Aliases': {
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
                        title: 'Alias Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
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
                        field: 'functionname',
                        title: 'Function Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'functionversion',
                        title: 'Function Version',
                        sortable: true,
                        align: 'center',
                        footerFormatter: textFormatter
                    },
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        align: 'center',
                        footerFormatter: textFormatter
                    }
                ]
            ]
        }
    }
});

function updateDatatableComputeLambda() {
    var region = 'ap-southeast-2';

    var svc_lambda = new AWS.Lambda({apiVersion: '2015-03-31', region: region});

    blockUI('#section-compute-lambda-functions-datatable');
    blockUI('#section-compute-lambda-aliases-datatable');

    svc_lambda.listFunctions({
        MaxItems: 100
    }, function(err, data) {
        if (err) {
            console.log(err, err.stack);
            $.notify({
                icon: 'font-icon font-icon-warning',
                title: '<strong>Error</strong>',
                message: err
            },{
                type: 'danger'
            });
        } else {
            $('#section-compute-lambda-functions-datatable').bootstrapTable('removeAll');
            $('#section-compute-lambda-aliases-datatable').bootstrapTable('removeAll');

            data.Functions.forEach(lambdaFunction => {
                svc_lambda.getFunction({
                    FunctionName: lambdaFunction.FunctionArn
                }, function(err, data) {
                    if (err) {
                        console.log(err, err.stack);
                        $.notify({
                            icon: 'font-icon font-icon-warning',
                            title: '<strong>Error</strong>',
                            message: err
                        },{
                            type: 'danger'
                        });
                    } else {
                        $('#section-compute-lambda-functions-datatable').bootstrapTable('append', [{
                            f2id: data.Configuration.FunctionArn,
                            f2type: 'lambda.function',
                            f2data: data,
                            f2region: region,
                            name: data.Configuration.FunctionName,
                            description: data.Configuration.Description,
                            lastmodified: data.Configuration.LastModified,
                            runtime: data.Configuration.Runtime,
                            codesize: data.Configuration.CodeSize
                        }]);
                    }
                });

                svc_lambda.listAliases({
                    FunctionName: lambdaFunction.FunctionArn
                }, function(err, data) {
                    if (err) {
                        console.log(err, err.stack);
                        $.notify({
                            icon: 'font-icon font-icon-warning',
                            title: '<strong>Error</strong>',
                            message: err
                        },{
                            type: 'danger'
                        });
                    } else {
                        data.Aliases.forEach(alias => {
                            $('#section-compute-lambda-aliases-datatable').bootstrapTable('append', [{
                                f2id: alias.AliasArn,
                                f2type: 'lambda.alias',
                                f2data: alias,
                                f2region: region,
                                name: alias.Name,
                                functionname: lambdaFunction.FunctionName,
                                functionversion: alias.FunctionVersion,
                                description: data.Description
                            }]);
                        });
                    }
                });
            });
        }
    });

    setTimeout(() => {
        unblockUI('#section-compute-lambda-functions-datatable');
        unblockUI('#section-compute-lambda-aliases-datatable');
    }, 1000);
}

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
                        //formatter: statusFormatter,
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
        }
    }
});

function updateDatatableStorageS3() {
    var region = 'us-east-1';

    var svc_s3 = new AWS.S3({apiVersion: '2015-03-31', region: region});

    blockUI('#section-storage-s3-buckets-datatable');
    blockUI('#section-storage-s3-bucketpolicies-datatable');

    sdkcall(svc_s3.listBuckets, {
        // no params
    }, true).then((data) => {
        $('#section-storage-s3-buckets-datatable').bootstrapTable('removeAll');
        $('#section-storage-s3-bucketpolicies-datatable').bootstrapTable('removeAll');

        data.Buckets.forEach(bucket => {
            $('#section-storage-s3-buckets-datatable').bootstrapTable('append', [{
                f2id: bucket.Name,
                f2type: 's3.bucket',
                f2data: bucket,
                f2region: region,
                name: bucket.Name,
                creationdate: bucket.CreationDate
            }]);

            svc_s3.getBucketPolicy({
                Bucket: bucket.Name
            }, function(err, data) {
                if (!err) {
                    data['Bucket'] = bucket.Name;
                    $('#section-storage-s3-bucketpolicies-datatable').bootstrapTable('append', [{
                        f2id: bucket.Name + "_Policy",
                        f2type: 's3.bucketpolicy',
                        f2data: data,
                        f2region: region,
                        bucketname: bucket.Name,
                        policy: data.Policy,
                        policylength: data.Policy.length
                    }]);
                }
            });
        });

        unblockUI('#section-storage-s3-buckets-datatable');
        unblockUI('#section-storage-s3-bucketpolicies-datatable');
    });
}