/* ========================================================================== */
// Lambda
/* ========================================================================== */

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
            /*
            data = {
                Functions: [
                ], 
                NextMarker: ""
            }
            */
            
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

function updateDatatableStorageS3() {
    var region = 'us-east-1';

    var svc_s3 = new AWS.S3({apiVersion: '2015-03-31', region: region});

    svc_s3.listBuckets({
        //MaxItems: 100
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
            $('#section-storage-s3-buckets-datatable').bootstrapTable('removeAll');

            data.Buckets.forEach(bucket => {
                $('#section-storage-s3-buckets-datatable').bootstrapTable('append', [{
                    f2id: bucket.Name,
                    f2type: 's3.bucket',
                    f2data: bucket,
                    f2region: region,
                    name: bucket.Name,
                    creationdate: bucket.CreationDate
                }]);
            });
        }
    });
}