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
                        formatter: timeAgoFormatter,
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
        },
        'Versions': {
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
                        field: 'functionname',
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
                    }
                ]
            ]
        },
        'Permissions': {
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
                        field: 'functionname',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                [
                    // nothing
                ]
            ]
        },
        'Layer Versions': {
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
                        title: 'Layer ARN',
                        field: 'arn',
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Layer Version Permissions': {
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
                        title: 'Layer Version ARN',
                        field: 'layerversion',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                [
                    // nothing
                ]
            ]
        },
        'Event Source Mappings': {
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
                        title: 'UUID',
                        field: 'uuid',
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
                        field: 'functionarn',
                        title: 'Function ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'eventsourcearn',
                        title: 'Event Source ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'batchsize',
                        title: 'Batch Size',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Event Invoke Configs': {
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
                        title: 'Function',
                        field: 'function',
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
                        field: 'maximumretryattempts',
                        title: 'Maximum Retry Attempts',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'maximumage',
                        title: 'Maximum Age',
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

async function updateDatatableComputeLambda() {
    blockUI('#section-compute-lambda-functions-datatable');
    blockUI('#section-compute-lambda-aliases-datatable');
    blockUI('#section-compute-lambda-versions-datatable');
    blockUI('#section-compute-lambda-permissions-datatable');
    blockUI('#section-compute-lambda-layerversions-datatable');
    blockUI('#section-compute-lambda-layerversionpermissions-datatable');
    blockUI('#section-compute-lambda-eventsourcemappings-datatable');
    blockUI('#section-compute-lambda-eventinvokeconfigs-datatable');

    await sdkcall("Lambda", "listFunctions", {
        // no params
    }, true).then(async (data) => {
        $('#section-compute-lambda-functions-datatable').bootstrapTable('removeAll');
        $('#section-compute-lambda-aliases-datatable').bootstrapTable('removeAll');
        $('#section-compute-lambda-versions-datatable').bootstrapTable('removeAll');
        $('#section-compute-lambda-permissions-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Functions.map(async (lambdaFunction) => {
            return Promise.all([
                sdkcall("Lambda", "getFunction", {
                    FunctionName: lambdaFunction.FunctionArn
                }, true).then((data) => {
                    $('#section-compute-lambda-functions-datatable').bootstrapTable('append', [{
                        f2id: data.Configuration.FunctionArn,
                        f2type: 'lambda.function',
                        f2data: data,
                        f2region: region,
                        f2link: 'https://console.aws.amazon.com/lambda/home?region=' + region + '#functions/' + data.Configuration.FunctionName,
                        name: data.Configuration.FunctionName,
                        description: data.Configuration.Description,
                        lastmodified: data.Configuration.LastModified,
                        runtime: data.Configuration.Runtime,
                        codesize: data.Configuration.CodeSize
                    }]);
                }),
                sdkcall("Lambda", "getPolicy", {
                    FunctionName: lambdaFunction.FunctionArn
                }, false).then((data) => {
                    var policy = JSON.parse(data.Policy);

                    policy.Statement.forEach(statement => {
                        statement['FunctionName'] = lambdaFunction.FunctionArn;
                        $('#section-compute-lambda-permissions-datatable').bootstrapTable('append', [{
                            f2id: statement.FunctionName,
                            f2type: 'lambda.permission',
                            f2data: statement,
                            f2region: region,
                            functionname: statement.FunctionName
                        }]);
                    });
                }).catch(() => { }),
                sdkcall("Lambda", "listAliases", {
                    FunctionName: lambdaFunction.FunctionArn
                }, true).then(async (data) => {
                    await Promise.all(data.Aliases.map(async (alias) => {
                        await sdkcall("Lambda", "getProvisionedConcurrencyConfig", {
                            FunctionName: lambdaFunction.FunctionArn,
                            Qualifier: alias.Name
                        }, false).then((data) => {
                            alias["ProvisionedConcurrencyConfig"] = {
                                "ProvisionedConcurrentExecutions": data.AllocatedProvisionedConcurrentExecutions
                            };
                        }).catch(() => { });

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
                    }));
                }),
                sdkcall("Lambda", "listVersionsByFunction", {
                    FunctionName: lambdaFunction.FunctionArn
                }, true).then(async (data) => {
                    await Promise.all(data.Versions.map(async (version) => {
                        if (version.Version != "$LATEST") {
                            await sdkcall("Lambda", "getProvisionedConcurrencyConfig", {
                                FunctionName: lambdaFunction.FunctionArn,
                                Qualifier: version.Version
                            }, false).then((data) => {
                                version["ProvisionedConcurrencyConfig"] = {
                                    "ProvisionedConcurrentExecutions": data.AllocatedProvisionedConcurrentExecutions
                                };
                            }).catch(() => { });

                            $('#section-compute-lambda-versions-datatable').bootstrapTable('append', [{
                                f2id: version.FunctionArn + ":" + version.Version,
                                f2type: 'lambda.version',
                                f2data: version,
                                f2region: region,
                                version: version.Version,
                                functionname: version.FunctionName
                            }]);
                        }
                    }));
                }),
                sdkcall("Lambda", "listFunctionEventInvokeConfigs", {
                    FunctionName: lambdaFunction.FunctionArn
                }, false).then(async (data) => {
                    $('#section-compute-lambda-eventinvokeconfigs-datatable').bootstrapTable('removeAll');

                    var eventConfigIterator = 1;
                    data.FunctionEventInvokeConfigs.forEach(config => {
                        $('#section-compute-lambda-eventinvokeconfigs-datatable').bootstrapTable('append', [{
                            f2id: config.FunctionArn + " Event Config " + eventConfigIterator,
                            f2type: 'lambda.eventinvokeconfig',
                            f2data: config,
                            f2region: region,
                            function: config.FunctionArn,
                            maximumretryattempts: config.MaximumRetryAttempts,
                            maximumage: config.MaximumEventAgeInSeconds + " seconds"
                        }]);

                        eventConfigIterator += 1;
                    });
                }).catch(() => { })
            ]);
        }));

        unblockUI('#section-compute-lambda-functions-datatable');
        unblockUI('#section-compute-lambda-aliases-datatable');
        unblockUI('#section-compute-lambda-versions-datatable');
        unblockUI('#section-compute-lambda-permissions-datatable');
        unblockUI('#section-compute-lambda-eventinvokeconfigs-datatable');
    });

    await sdkcall("Lambda", "listLayers", {
        // no params
    }, true).then(async (data) => {
        $('#section-compute-lambda-layerversions-datatable').bootstrapTable('removeAll');
        $('#section-compute-lambda-layerversionpermissions-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Layers.map(layer => {
            return sdkcall("Lambda", "listLayerVersions", {
                LayerName: layer.LayerName
            }, true).then(async (data) => {
                await Promise.all(data.LayerVersions.map(layerVersion => {
                    return Promise.all([
                        sdkcall("Lambda", "getLayerVersion", {
                            LayerName: layer.LayerName,
                            VersionNumber: layerVersion.Version
                        }, true).then((data) => {
                            data['LayerName'] = layer.LayerName;
                            $('#section-compute-lambda-layerversions-datatable').bootstrapTable('append', [{
                                f2id: data.LayerVersionArn,
                                f2type: 'lambda.layerversion',
                                f2data: data,
                                f2region: region,
                                arn: data.LayerVersionArn,
                                description: data.Description,
                                version: data.Version
                            }]);
                        }),
                        sdkcall("Lambda", "getLayerVersionPolicy", {
                            LayerName: layer.LayerName,
                            VersionNumber: layerVersion.Version
                        }, false).then((data) => {
                            var policy = JSON.parse(data.Policy);

                            policy.Statement.forEach(statement => {
                                statement['LayerVersionArn'] = layerVersion.LayerVersionArn;
                                $('#section-compute-lambda-layerversionpermissions-datatable').bootstrapTable('append', [{
                                    f2id: statement.LayerVersionArn,
                                    f2type: 'lambda.layerversionpermission',
                                    f2data: statement,
                                    f2region: region,
                                    layerversion: statement.LayerVersionArn
                                }]);
                            });
                        }).catch(() => { })
                    ]);
                }));
            });
        }));

        unblockUI('#section-compute-lambda-layerversions-datatable');
        unblockUI('#section-compute-lambda-layerversionpermissions-datatable');
    });

    await sdkcall("Lambda", "listEventSourceMappings", {
        // no params
    }, true).then(async (data) => {
        $('#section-compute-lambda-eventsourcemappings-datatable').bootstrapTable('removeAll');

        await Promise.all(data.EventSourceMappings.map(eventSourceMapping => {
            return sdkcall("Lambda", "getEventSourceMapping", {
                UUID: eventSourceMapping.UUID
            }, true).then((data) => {
                $('#section-compute-lambda-eventsourcemappings-datatable').bootstrapTable('append', [{
                    f2id: data.UUID,
                    f2type: 'lambda.eventsourcemapping',
                    f2data: data,
                    f2region: region,
                    uuid: data.UUID,
                    functionarn: data.FunctionArn,
                    eventsourcearn: data.EventSourceArn,
                    batchsize: data.BatchSize
                }]);
            });
        }));

        unblockUI('#section-compute-lambda-eventsourcemappings-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "lambda.function") {
        reqParams.cfn['Description'] = obj.data.Configuration.Description;
        reqParams.tf['description'] = obj.data.Configuration.Description;
        if (obj.data.Configuration.Environment && obj.data.Configuration.Environment.Variables) {
            reqParams.cfn['Environment'] = {
                'Variables': obj.data.Configuration.Environment.Variables
            };
            reqParams.tf['environment'] = {
                'variables': obj.data.Configuration.Environment.Variables
            };
        }
        reqParams.cfn['FunctionName'] = obj.data.Configuration.FunctionName;
        reqParams.tf['function_name'] = obj.data.Configuration.FunctionName;
        reqParams.cfn['Handler'] = obj.data.Configuration.Handler;
        reqParams.tf['handler'] = obj.data.Configuration.Handler;

        if (obj.data.Code && obj.data.Code.RepositoryType == "S3") {
            var url = new URL(obj.data.Code.Location);

            reqParams.cfn['Code'] = {
                'S3Bucket': url.host.split(".")[0],
                'S3Key': url.pathname,
                'S3ObjectVersion': url.searchParams.get('versionId')
            };
            reqParams.tf['s3_bucket'] = url.host.split(".")[0];
            reqParams.tf['s3_key'] = url.pathname;
            reqParams.tf['s3_object_version'] = url.searchParams.get('versionId');
        }

        reqParams.cfn['KmsKeyArn'] = obj.data.Configuration.KMSKeyArn;
        reqParams.tf['kms_key_arn'] = obj.data.Configuration.KMSKeyArn;
        reqParams.cfn['MemorySize'] = obj.data.Configuration.MemorySize;
        reqParams.tf['memory_size'] = obj.data.Configuration.MemorySize;
        reqParams.cfn['ReservedConcurrentExecutions'] = obj.data.Configuration.ReservedConcurrentExecutions;
        reqParams.tf['reserved_concurrent_executions'] = obj.data.Configuration.ReservedConcurrentExecutions;
        reqParams.cfn['Role'] = obj.data.Configuration.Role;
        reqParams.tf['role'] = obj.data.Configuration.Role;
        reqParams.cfn['Runtime'] = obj.data.Configuration.Runtime;
        reqParams.tf['runtime'] = obj.data.Configuration.Runtime;
        reqParams.cfn['Timeout'] = obj.data.Configuration.Timeout;
        reqParams.tf['timeout'] = obj.data.Configuration.Timeout;
        if (obj.data.Configuration.TracingConfig) {
            reqParams.cfn['TracingConfig'] = obj.data.Configuration.TracingConfig;
            reqParams.tf['tracing_config'] = {
                'mode': obj.data.Configuration.TracingConfig.Mode
            };
        }

        if (obj.data.Configuration.VpcConfig && obj.data.Configuration.VpcConfig.SubnetIds && obj.data.Configuration.VpcConfig.SubnetIds.length > 0) {
            reqParams.cfn['VpcConfig'] = {
                'SubnetIds': obj.data.Configuration.VpcConfig.SubnetIds,
                'SecurityGroupIds': obj.data.Configuration.VpcConfig.SecurityGroupIds
            };
            reqParams.tf['vpc_config'] = {
                'subnet_ids': obj.data.Configuration.VpcConfig.SubnetIds,
                'security_group_ids': obj.data.Configuration.VpcConfig.SecurityGroupIds
            };
        }

        if (obj.data.Configuration.DeadLetterConfig) {
            reqParams.cfn['DeadLetterConfig'] = {
                'TargetArn': obj.data.Configuration.DeadLetterConfig.TargetArn
            };
            reqParams.tf['dead_letter_config'] = {
                'target_arn': obj.data.Configuration.DeadLetterConfig.TargetArn
            };
        }

        if (obj.data.Configuration.Layers) {
            reqParams.cfn['Layers'] = [];
            reqParams.tf['layers'] = [];
            obj.data.Configuration.Layers.forEach(layer => {
                reqParams.cfn['Layers'].push(layer.Arn);
                reqParams.tf['layers'].push(layer.Arn);
            });
        }

        /*
        TODO:
        Tags: 
            Resource Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lambda', obj.id),
            'region': obj.region,
            'service': 'lambda',
            'type': 'AWS::Lambda::Function',
            'terraformType': 'aws_lambda_function',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Configuration.FunctionName,
                'GetAtt': {
                    'Arn': obj.data.Configuration.FunctionArn
                },
                'Import': {
                    'FunctionName': obj.data.Configuration.FunctionName
                }
            }
        });
    } else if (obj.type == "lambda.alias") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        var split = obj.data.AliasArn.split(":");
        reqParams.cfn['FunctionName'] = split[split.length - 2];
        reqParams.tf['function_name'] = split[split.length - 2];
        reqParams.cfn['FunctionVersion'] = obj.data.FunctionVersion;
        reqParams.tf['function_version'] = obj.data.FunctionVersion;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        if (obj.data.RoutingConfig && obj.data.RoutingConfig.AdditionalVersionWeights) {
            reqParams.cfn['RoutingConfig'] = {
                'AdditionalVersionWeights': []
            };
            reqParams.tf['routing_config'] = {
                'additional_version_weights': {}
            };
            for (var func_version in obj.data.RoutingConfig.AdditionalVersionWeights) {
                reqParams.cfn['RoutingConfig']['AdditionalVersionWeights'].push({
                    FunctionVersion: func_version,
                    FunctionWeight: obj.data.RoutingConfig.AdditionalVersionWeights[func_version]
                });
                reqParams.tf['routing_config']['additional_version_weights'][func_version] = obj.data.RoutingConfig.AdditionalVersionWeights[func_version];
            }
        }
        reqParams.cfn['ProvisionedConcurrencyConfig'] = obj.data.ProvisionedConcurrencyConfig;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lambda', obj.id),
            'region': obj.region,
            'service': 'lambda',
            'type': 'AWS::Lambda::Alias',
            'terraformType': 'aws_lambda_alias',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.AliasArn,
                'Import': {
                    'AliasArn': obj.data.AliasArn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
