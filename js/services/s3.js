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
    });

    unblockUI('#section-storage-s3-accesspoints-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "s3.bucket") {
        reqParams.cfn['BucketName'] = obj.data.Name;
        reqParams.tf['bucket'] = obj.data.Name;
        if (obj.data.AccelerateConfiguration && obj.data.AccelerateConfiguration.Status) {
            reqParams.cfn['AccelerateConfiguration'] = {
                'AccelerationStatus': obj.data.AccelerateConfiguration.Status
            };
        }
        if (obj.data.Encryption && obj.data.Encryption.ServerSideEncryptionConfiguration && obj.data.Encryption.ServerSideEncryptionConfiguration.Rules) {
            var rules = [];
            obj.data.Encryption.ServerSideEncryptionConfiguration.Rules.forEach(rule => {
                rules.push({
                    'ServerSideEncryptionByDefault': rule.ApplyServerSideEncryptionByDefault
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
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
