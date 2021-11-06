/* ========================================================================== */
// CloudFront
/* ========================================================================== */

sections.push({
    'category': 'Networking &amp; Content Delivery',
    'service': 'CloudFront',
    'resourcetypes': {
        'Distributions': {
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
                        title: 'Domain Name',
                        field: 'domainname',
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'httpversion',
                        title: 'HTTP Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'comment',
                        title: 'Comment',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'priceclass',
                        title: 'Price Class',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Streaming Distributions': {
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
                        title: 'Domain Name',
                        field: 'domainname',
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'comment',
                        title: 'Comment',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'priceclass',
                        title: 'Price Class',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Origin Access Identities': {
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
                        field: 's3canonicaluserid',
                        title: 'S3 Canonical User ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'comment',
                        title: 'Comment',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Cache Policies': {
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
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'comment',
                        title: 'Comment',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'minttl',
                        title: 'Min TTL',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'maxttl',
                        title: 'Max TTL',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Origin Request Policies': {
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
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'comment',
                        title: 'Comment',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Realtime Log Configs': {
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
                        field: 'samplingrate',
                        title: 'Sampling Rate',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Key Groups': {
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
                        field: 'comment',
                        title: 'Comment',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Public Keys': {
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
                        field: 'comment',
                        title: 'Comment',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
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
                        field: 'stage',
                        title: 'Stage',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Response Headers Policies': {
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
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'comment',
                        title: 'Comment',
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

async function updateDatatableNetworkingAndContentDeliveryCloudFront() {
    blockUI('#section-networkingandcontentdelivery-cloudfront-distributions-datatable');
    blockUI('#section-networkingandcontentdelivery-cloudfront-streamingdistributions-datatable');
    blockUI('#section-networkingandcontentdelivery-cloudfront-originaccessidentities-datatable');
    blockUI('#section-networkingandcontentdelivery-cloudfront-cachepolicies-datatable');
    blockUI('#section-networkingandcontentdelivery-cloudfront-originrequestpolicies-datatable');
    blockUI('#section-networkingandcontentdelivery-cloudfront-realtimelogconfigs-datatable');
    blockUI('#section-networkingandcontentdelivery-cloudfront-keygroups-datatable');
    blockUI('#section-networkingandcontentdelivery-cloudfront-publickeys-datatable');
    blockUI('#section-networkingandcontentdelivery-cloudfront-functions-datatable');
    blockUI('#section-networkingandcontentdelivery-cloudfront-responseheaderspolicies-datatable');

    await sdkcall("CloudFront", "listCloudFrontOriginAccessIdentities", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-cloudfront-originaccessidentities-datatable').deferredBootstrapTable('removeAll');

        data.CloudFrontOriginAccessIdentityList.Items.forEach(oai => {
            $('#section-networkingandcontentdelivery-cloudfront-originaccessidentities-datatable').deferredBootstrapTable('append', [{
                f2id: oai.Id,
                f2type: 'cloudfront.originaccessidentity',
                f2data: oai,
                f2region: region,
                id: oai.Id,
                s3canonicaluserid: oai.S3CanonicalUserId,
                comment: oai.Comment
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-cloudfront-originaccessidentities-datatable');
    });

    await sdkcall("CloudFront", "listDistributions", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-cloudfront-distributions-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DistributionList.Items.map(async (distribution) => {
            return sdkcall("CloudFront", "getDistribution", {
                Id: distribution.Id
            }, true).then(async (data) => {
                distribution['DefaultRootObject'] = data.Distribution.DistributionConfig.DefaultRootObject;

                distribution['Tags'] = await getResourceTags(distribution.ARN);
                
                $('#section-networkingandcontentdelivery-cloudfront-distributions-datatable').deferredBootstrapTable('append', [{
                    f2id: distribution.ARN,
                    f2type: 'cloudfront.distribution',
                    f2data: distribution,
                    f2region: region,
                    domainname: distribution.DomainName,
                    id: distribution.Id,
                    httpversion: distribution.HttpVersion,
                    comment: distribution.Comment,
                    priceclass: distribution.PriceClass // TODO: Make readable
                }]);
            });
        }));

        unblockUI('#section-networkingandcontentdelivery-cloudfront-distributions-datatable');
    });

    await sdkcall("CloudFront", "listStreamingDistributions", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-cloudfront-streamingdistributions-datatable').deferredBootstrapTable('removeAll');

        data.StreamingDistributionList.Items.forEach(async (distribution) => {
            distribution['Tags'] = await getResourceTags(distribution.ARN);

            $('#section-networkingandcontentdelivery-cloudfront-streamingdistributions-datatable').deferredBootstrapTable('append', [{
                f2id: distribution.ARN,
                f2type: 'cloudfront.streamingdistribution',
                f2data: distribution,
                f2region: region,
                domainname: distribution.DomainName,
                id: distribution.Id,
                comment: distribution.Comment,
                priceclass: distribution.PriceClass // TODO: Make readable
            }]);
        });

        unblockUI('#section-networkingandcontentdelivery-cloudfront-streamingdistributions-datatable');
    });

    await sdkcall("CloudFront", "listCachePolicies", {
        Type: "custom"
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-cloudfront-cachepolicies-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.CachePolicyList.Items.map(cachePolicy => {
            return sdkcall("CloudFront", "getCachePolicy", {
                Id: cachePolicy.CachePolicy.Id
            }, true).then((data) => {
                $('#section-networkingandcontentdelivery-cloudfront-cachepolicies-datatable').deferredBootstrapTable('append', [{
                    f2id: data.CachePolicy.Id,
                    f2type: 'cloudfront.cachepolicy',
                    f2data: data.CachePolicy,
                    f2region: region,
                    name: data.CachePolicy.CachePolicyConfig.Name,
                    id: data.CachePolicy.Id,
                    comment: data.CachePolicy.CachePolicyConfig.Comment,
                    minttl: data.CachePolicy.CachePolicyConfig.MinTTL,
                    maxttl: data.CachePolicy.CachePolicyConfig.MaxTTL
                }]);
            });
        }));

        unblockUI('#section-networkingandcontentdelivery-cloudfront-cachepolicies-datatable');
    });

    await sdkcall("CloudFront", "listOriginRequestPolicies", {
        Type: "custom"
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-cloudfront-originrequestpolicies-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.OriginRequestPolicyList.Items.map(originRequestPolicy => {
            return sdkcall("CloudFront", "getOriginRequestPolicy", {
                Id: originRequestPolicy.OriginRequestPolicy.Id
            }, true).then((data) => {
                $('#section-networkingandcontentdelivery-cloudfront-originrequestpolicies-datatable').deferredBootstrapTable('append', [{
                    f2id: data.OriginRequestPolicy.Id,
                    f2type: 'cloudfront.originrequestpolicy',
                    f2data: data.OriginRequestPolicy,
                    f2region: region,
                    name: data.OriginRequestPolicy.OriginRequestPolicyConfig.Name,
                    id: data.OriginRequestPolicy.Id,
                    comment: data.OriginRequestPolicy.OriginRequestPolicyConfig.Comment
                }]);
            });
        }));

        unblockUI('#section-networkingandcontentdelivery-cloudfront-originrequestpolicies-datatable');
    });

    await sdkcall("CloudFront", "listRealtimeLogConfigs", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-cloudfront-realtimelogconfigs-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.RealtimeLogConfigs.Items.map(realtimeLogConfig => {
            return sdkcall("CloudFront", "getRealtimeLogConfig", {
                ARN: realtimeLogConfig.ARN
            }, true).then((data) => {
                $('#section-networkingandcontentdelivery-cloudfront-realtimelogconfigs-datatable').deferredBootstrapTable('append', [{
                    f2id: data.RealtimeLogConfig.ARN,
                    f2type: 'cloudfront.realtimelogconfig',
                    f2data: data.RealtimeLogConfig,
                    f2region: region,
                    name: data.RealtimeLogConfig.Name,
                    samplingrate: data.RealtimeLogConfig.SamplingRate
                }]);
            });
        }));

        unblockUI('#section-networkingandcontentdelivery-cloudfront-realtimelogconfigs-datatable');
    });

    await sdkcall("CloudFront", "listKeyGroups", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-cloudfront-keygroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.KeyGroupList.Items.map(keygroup => {
            return sdkcall("CloudFront", "getKeyGroup", {
                Id: keygroup.KeyGroup.Id
            }, true).then((data) => {
                $('#section-networkingandcontentdelivery-cloudfront-keygroups-datatable').deferredBootstrapTable('append', [{
                    f2id: data.KeyGroup.Id,
                    f2type: 'cloudfront.keygroup',
                    f2data: data.KeyGroup,
                    f2region: region,
                    name: data.KeyGroup.KeyGroupConfig.Name,
                    comment: data.KeyGroup.KeyGroupConfig.Comment
                }]);
            });
        }));
    });

    await sdkcall("CloudFront", "listPublicKeys", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-cloudfront-keygroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.PublicKeyList.Items.map(publickey => {
            return sdkcall("CloudFront", "getPublicKey", {
                Id: publickey.Id
            }, true).then((data) => {
                $('#section-networkingandcontentdelivery-cloudfront-keygroups-datatable').deferredBootstrapTable('append', [{
                    f2id: data.PublicKey.Id,
                    f2type: 'cloudfront.keygroup',
                    f2data: data.PublicKey,
                    f2region: region,
                    name: data.PublicKey.PublicKeyConfig.Name,
                    comment: data.PublicKey.PublicKeyConfig.Comment
                }]);
            });
        }));
    });

    await sdkcall("CloudFront", "listFunctions", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-cloudfront-functions-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.FunctionList.Items.map(async (func) => {
            return sdkcall("CloudFront", "describeFunction", {
                Name: func.Name
            }, true).then(async (data) => {
                await sdkcall("CloudFront", "getFunction", {
                    Name: func.Name
                }, true).then(codedata => {
                    data.FunctionSummary['FunctionCode'] = codedata.FunctionCode;
                });

                $('#section-networkingandcontentdelivery-cloudfront-functions-datatable').deferredBootstrapTable('append', [{
                    f2id: data.FunctionSummary.Id,
                    f2type: 'cloudfront.function',
                    f2data: data.FunctionSummary,
                    f2region: region,
                    name: data.FunctionSummary.Name,
                    stage: data.FunctionSummary.FunctionMetadata.Stage
                }]);
            });
        }));
    });

    await sdkcall("CloudFront", "listResponseHeadersPolicies", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-cloudfront-responseheaderspolicies-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ResponseHeadersPolicyList.Items.map(responseheaderpolicy => {
            if (responseheaderpolicy.Type == "custom") {
                return sdkcall("CloudFront", "getResponseHeadersPolicyConfig", {
                    Id: responseheaderpolicy.ResponseHeadersPolicy.Id
                }, true).then((data) => {
                    data.ResponseHeadersPolicyConfig['Id'] = responseheaderpolicy.ResponseHeadersPolicy.Id;

                    $('#section-networkingandcontentdelivery-cloudfront-responseheaderspolicies-datatable').deferredBootstrapTable('append', [{
                        f2id: data.ResponseHeadersPolicyConfig.Id,
                        f2type: 'cloudfront.responseheaderspolicy',
                        f2data: data.ResponseHeadersPolicyConfig,
                        f2region: region,
                        name: data.ResponseHeadersPolicyConfig.Name,
                        comment: data.ResponseHeadersPolicyConfig.Comment
                    }]);
                });
            } else {
                return Promise.resolve();
            }
        }));
    });

    unblockUI('#section-networkingandcontentdelivery-cloudfront-keygroups-datatable');
    unblockUI('#section-networkingandcontentdelivery-cloudfront-publickeys-datatable');
    unblockUI('#section-networkingandcontentdelivery-cloudfront-functions-datatable');
    unblockUI('#section-networkingandcontentdelivery-cloudfront-responseheaderspolicies-datatable');
}

service_mapping_functions.push(async function(reqParams, obj, tracked_resources){
    if (obj.type == "cloudfront.distribution") {
        reqParams.cfn['DistributionConfig'] = {};
        reqParams.cfn.DistributionConfig['Aliases'] = obj.data.Aliases.Items;
        reqParams.tf['aliases'] = obj.data.Aliases.Items;
        reqParams.cfn.DistributionConfig['Origins'] = [];
        reqParams.cfn.DistributionConfig['OriginGroups'] = obj.data.OriginGroups;
        reqParams.tf['origin'] = [];
        obj.data.Origins.Items.forEach(origin => {
            var customOriginConfig = null;
            var tfCustomOriginConfig = null;
            var customHeaders = null;
            var tfCustomHeaders = null;
            var tfS3OriginConfig = null;
            if (origin.S3OriginConfig) {
                tfS3OriginConfig = {
                    'origin_access_identity': origin.S3OriginConfig.OriginAccessIdentity
                };
            }
            if (origin.CustomOriginConfig) {
                customOriginConfig = {
                    'HTTPPort': origin.CustomOriginConfig.HTTPPort,
                    'HTTPSPort': origin.CustomOriginConfig.HTTPSPort,
                    'OriginKeepaliveTimeout': origin.CustomOriginConfig.OriginKeepaliveTimeout,
                    'OriginProtocolPolicy': origin.CustomOriginConfig.OriginProtocolPolicy,
                    'OriginReadTimeout': origin.CustomOriginConfig.OriginReadTimeout,
                    'OriginSSLProtocols': origin.CustomOriginConfig.OriginSslProtocols.Items
                };
                tfCustomOriginConfig = {
                    'http_port': origin.CustomOriginConfig.HTTPPort,
                    'https_port': origin.CustomOriginConfig.HTTPSPort,
                    'origin_keepalive_timeout': origin.CustomOriginConfig.OriginKeepaliveTimeout,
                    'origin_protocol_policy': origin.CustomOriginConfig.OriginProtocolPolicy,
                    'origin_read_timeout': origin.CustomOriginConfig.OriginReadTimeout,
                    'origin_ssl_protocols': origin.CustomOriginConfig.OriginSslProtocols.Items
                };
            }
            if (origin.CustomHeaders) {
                customHeaders = origin.CustomHeaders.Items;
                tfCustomHeaders = [];
                origin.CustomHeaders.Items.forEach(customheader => {
                    tfCustomHeaders.push({
                        'name': customheader.Name,
                        'value': customheader.Value
                    })
                });
            }
            reqParams.cfn.DistributionConfig['Origins'].push({
                'ConnectionAttempts': origin.ConnectionAttempts,
                'ConnectionTimeout': origin.ConnectionTimeout,
                'CustomOriginConfig': customOriginConfig,
                'DomainName': origin.DomainName,
                'Id': origin.Id,
                'OriginCustomHeaders': tfCustomHeaders,
                'OriginPath': origin.OriginPath,
                'S3OriginConfig': origin.S3OriginConfig
            });
            reqParams.tf['origin'].push({
                'custom_origin_config': tfCustomOriginConfig,
                'domain_name': origin.DomainName,
                'origin_id': origin.Id,
                'custom_header': customHeaders,
                'origin_path': origin.OriginPath,
                's3_origin_config': tfS3OriginConfig
            });
        });
        var defaultCacheLambdaFunctionAssociations = [];
        var tfDefaultCacheLambdaFunctionAssociations = [];
        if (obj.data.DefaultCacheBehavior.LambdaFunctionAssociations.Items && obj.data.DefaultCacheBehavior.LambdaFunctionAssociations.Items.length) {
            obj.data.DefaultCacheBehavior.LambdaFunctionAssociations.Items.forEach(lambdaFunctionAssociation => {
                defaultCacheLambdaFunctionAssociations.push({
                    'EventType': lambdaFunctionAssociation.EventType,
                    'LambdaFunctionARN': lambdaFunctionAssociation.LambdaFunctionARN
                });
                tfDefaultCacheLambdaFunctionAssociations.push({
                    'event_type': lambdaFunctionAssociation.EventType,
                    'lambda_arn': lambdaFunctionAssociation.LambdaFunctionARN
                });
            });
        }
        var cookiesWhitelistedNames = null;
        if (obj.data.DefaultCacheBehavior && obj.data.DefaultCacheBehavior.ForwardedValues && obj.data.DefaultCacheBehavior.ForwardedValues.Cookies && obj.data.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames) {
            cookiesWhitelistedNames = obj.data.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items;
        }
        var queryStringCacheKeys = null;
        if (obj.data.DefaultCacheBehavior && obj.data.DefaultCacheBehavior.ForwardedValues && obj.data.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys) {
            queryStringCacheKeys = obj.data.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items;
        }
        if (obj.data.DefaultCacheBehavior) {
            var forwardedValues = null;
            var tfforwardedValues = null;
            if (obj.data.DefaultCacheBehavior.ForwardedValues) {
                forwardedValues = {
                    'Cookies': {
                        'Forward': (obj.data.DefaultCacheBehavior.ForwardedValues && obj.data.DefaultCacheBehavior.ForwardedValues.Cookies ? obj.data.DefaultCacheBehavior.ForwardedValues.Cookies.Forward : null),
                        'WhitelistedNames': cookiesWhitelistedNames
                    },
                    'Headers': (obj.data.DefaultCacheBehavior.ForwardedValues && obj.data.DefaultCacheBehavior.ForwardedValues.Headers ? obj.data.DefaultCacheBehavior.ForwardedValues.Headers.Items : null),
                    'QueryString': (obj.data.DefaultCacheBehavior.ForwardedValues ? obj.data.DefaultCacheBehavior.ForwardedValues.QueryString : null),
                    'QueryStringCacheKeys': queryStringCacheKeys
                };
                tfforwardedValues = {
                    'cookies': {
                        'forward': (obj.data.DefaultCacheBehavior.ForwardedValues && obj.data.DefaultCacheBehavior.ForwardedValues.Cookies ? obj.data.DefaultCacheBehavior.ForwardedValues.Cookies.Forward : null),
                        'whitelisted_names': cookiesWhitelistedNames
                    },
                    'headers': (obj.data.DefaultCacheBehavior.ForwardedValues && obj.data.DefaultCacheBehavior.ForwardedValues.Headers ? obj.data.DefaultCacheBehavior.ForwardedValues.Headers.Items : null),
                    'query_string': (obj.data.DefaultCacheBehavior.ForwardedValues ? obj.data.DefaultCacheBehavior.ForwardedValues.QueryString : null),
                    'query_string_cache_keys': queryStringCacheKeys
                };
            }
            reqParams.cfn.DistributionConfig['DefaultCacheBehavior'] = {
                'AllowedMethods': (obj.data.DefaultCacheBehavior.AllowedMethods ? obj.data.DefaultCacheBehavior.AllowedMethods.Items : null),
                'CachedMethods': (obj.data.DefaultCacheBehavior.AllowedMethods && obj.data.DefaultCacheBehavior.AllowedMethods.CachedMethods ? obj.data.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items : null),
                'Compress': obj.data.DefaultCacheBehavior.Compress,
                'DefaultTTL': obj.data.DefaultCacheBehavior.DefaultTTL,
                'CachePolicyId': obj.data.DefaultCacheBehavior.CachePolicyId,
                'OriginRequestPolicyId': obj.data.DefaultCacheBehavior.OriginRequestPolicyId,
                'FieldLevelEncryptionId': (obj.data.DefaultCacheBehavior.FieldLevelEncryptionId == "" ? null : obj.data.DefaultCacheBehavior.FieldLevelEncryptionId),
                'ForwardedValues': forwardedValues,
                'LambdaFunctionAssociations': defaultCacheLambdaFunctionAssociations,
                'MaxTTL': obj.data.DefaultCacheBehavior.MaxTTL,
                'MinTTL': obj.data.DefaultCacheBehavior.MinTTL,
                'RealtimeLogConfigArn': obj.data.DefaultCacheBehavior.RealtimeLogConfigArn,
                'SmoothStreaming': obj.data.DefaultCacheBehavior.SmoothStreaming,
                'TargetOriginId': obj.data.DefaultCacheBehavior.TargetOriginId,
                'TrustedSigners': (obj.data.DefaultCacheBehavior.TrustedSigners ? obj.data.DefaultCacheBehavior.TrustedSigners.Items : null),
                'TrustedKeyGroups': (obj.data.DefaultCacheBehavior.TrustedKeyGroups ? obj.data.DefaultCacheBehavior.TrustedKeyGroups.Items : null),
                'ViewerProtocolPolicy': obj.data.DefaultCacheBehavior.ViewerProtocolPolicy
            };
            reqParams.tf['default_cache_behavior'] = {
                'allowed_methods': (obj.data.DefaultCacheBehavior.AllowedMethods ? obj.data.DefaultCacheBehavior.AllowedMethods.Items : null),
                'cached_methods': (obj.data.DefaultCacheBehavior.CachedMethods ? obj.data.DefaultCacheBehavior.CachedMethods.Items : null),
                'compress': obj.data.DefaultCacheBehavior.Compress,
                'default_ttl': obj.data.DefaultCacheBehavior.DefaultTTL,
                'field_level_encryption_id': (obj.data.DefaultCacheBehavior.FieldLevelEncryptionId == "" ? null : obj.data.DefaultCacheBehavior.FieldLevelEncryptionId),
                'forwarded_values': tfforwardedValues,
                'lambda_function_association': defaultCacheLambdaFunctionAssociations,
                'max_ttl': obj.data.DefaultCacheBehavior.MaxTTL,
                'min_ttl': obj.data.DefaultCacheBehavior.MinTTL,
                'smooth_streaming ': obj.data.DefaultCacheBehavior.SmoothStreaming,
                'target_origin_id': obj.data.DefaultCacheBehavior.TargetOriginId,
                'trusted_signers': obj.data.DefaultCacheBehavior.TrustedSigners.Items,
                'viewer_protocol_policy': obj.data.DefaultCacheBehavior.ViewerProtocolPolicy
            };
        }
        if (obj.data.CacheBehaviors.Items && obj.data.CacheBehaviors.Items.length) {
            reqParams.cfn.DistributionConfig['CacheBehaviors'] = [];
            reqParams.tf['ordered_cache_behavior'] = [];
            obj.data.CacheBehaviors.Items.forEach(cacheBehaviour => {
                var cacheLambdaFunctionAssociations = [];
                var tfCacheLambdaFunctionAssociations = [];
                if (cacheBehaviour.LambdaFunctionAssociations.Items && cacheBehaviour.LambdaFunctionAssociations.Items.length) {
                    cacheBehaviour.LambdaFunctionAssociations.Items.forEach(lambdaFunctionAssociation => {
                        cacheLambdaFunctionAssociations.push({
                            'EventType': lambdaFunctionAssociation.EventType,
                            'LambdaFunctionARN': lambdaFunctionAssociation.LambdaFunctionARN
                        });
                        tfCacheLambdaFunctionAssociations.push({
                            'event_type': lambdaFunctionAssociation.EventType,
                            'lambda_arn': lambdaFunctionAssociation.LambdaFunctionARN
                        });
                    });
                }
                var cookiesWhitelistedNames = null;
                if (cacheBehaviour.ForwardedValues && cacheBehaviour.ForwardedValues.Cookies && cacheBehaviour.ForwardedValues.Cookies.WhitelistedNames) {
                    cookiesWhitelistedNames = cacheBehaviour.ForwardedValues.Cookies.WhitelistedNames.Items;
                }
                var queryStringCacheKeys = null;
                if (cacheBehaviour.ForwardedValues && cacheBehaviour.ForwardedValues.QueryStringCacheKeys) {
                    queryStringCacheKeys = cacheBehaviour.ForwardedValues.QueryStringCacheKeys.Items;
                }
                var forwardedValues = null;
                var tfforwardedValues = null;
                if (cacheBehaviour.ForwardedValues) {
                    forwardedValues = {
                        'Cookies': {
                            'Forward': (cacheBehaviour.ForwardedValues && cacheBehaviour.ForwardedValues.Cookies ? cacheBehaviour.ForwardedValues.Cookies.Forward : null),
                            'WhitelistedNames': cookiesWhitelistedNames
                        },
                        'Headers': (cacheBehaviour.ForwardedValues && cacheBehaviour.ForwardedValues.Headers ? cacheBehaviour.ForwardedValues.Headers.Items : null),
                        'QueryString': (cacheBehaviour.ForwardedValues ? cacheBehaviour.ForwardedValues.QueryString : null),
                        'QueryStringCacheKeys': queryStringCacheKeys
                    };
                    tfforwardedValues = {
                        'cookies': {
                            'forward': (cacheBehaviour.ForwardedValues && cacheBehaviour.ForwardedValues.Cookies ? cacheBehaviour.ForwardedValues.Cookies.Forward : null),
                            'whitelisted_names': cookiesWhitelistedNames
                        },
                        'headers': (cacheBehaviour.ForwardedValues && cacheBehaviour.ForwardedValues.Headers ? cacheBehaviour.ForwardedValues.Headers.Items : null),
                        'query_string': (cacheBehaviour.ForwardedValues ? cacheBehaviour.ForwardedValues.QueryString : null),
                        'query_string_cache_keys': queryStringCacheKeys
                    };
                }
                reqParams.cfn.DistributionConfig['CacheBehaviors'].push({
                    'AllowedMethods': (cacheBehaviour.AllowedMethods ? cacheBehaviour.AllowedMethods.Items : null),
                    'CachedMethods': (cacheBehaviour.CachedMethods ? cacheBehaviour.CachedMethods.Items : null),
                    'Compress': cacheBehaviour.Compress,
                    'DefaultTTL': cacheBehaviour.DefaultTTL,
                    'CachePolicyId': cacheBehaviour.CachePolicyId,
                    'OriginRequestPolicyId': cacheBehaviour.OriginRequestPolicyId,
                    'FieldLevelEncryptionId': (cacheBehaviour.FieldLevelEncryptionId == "" ? null : cacheBehaviour.FieldLevelEncryptionId),
                    'ForwardedValues': forwardedValues,
                    'LambdaFunctionAssociations': cacheLambdaFunctionAssociations,
                    'MaxTTL': cacheBehaviour.MaxTTL,
                    'MinTTL': cacheBehaviour.MinTTL,
                    'PathPattern': cacheBehaviour.PathPattern,
                    'RealtimeLogConfigArn': cacheBehaviour.RealtimeLogConfigArn,
                    'SmoothStreaming': cacheBehaviour.SmoothStreaming,
                    'TargetOriginId': cacheBehaviour.TargetOriginId,
                    'TrustedSigners': (cacheBehaviour.TrustedSigners ? cacheBehaviour.TrustedSigners.Items : null),
                    'TrustedKeyGroups': (cacheBehaviour.TrustedKeyGroups ? cacheBehaviour.TrustedKeyGroups.Items : null),
                    'ViewerProtocolPolicy': cacheBehaviour.ViewerProtocolPolicy
                });
                reqParams.tf['ordered_cache_behavior'].push({
                    'allowed_methods': (cacheBehaviour.AllowedMethods ? cacheBehaviour.AllowedMethods.Items : null),
                    'cached_methods': (cacheBehaviour.CachedMethods ? cacheBehaviour.CachedMethods.Items : null),
                    'compress': cacheBehaviour.Compress,
                    'default_ttl': cacheBehaviour.DefaultTTL,
                    'field_level_encryption_id': (cacheBehaviour.FieldLevelEncryptionId == "" ? null : cacheBehaviour.FieldLevelEncryptionId),
                    'forwarded_values': tfforwardedValues,
                    'lambda_function_association': cacheLambdaFunctionAssociations,
                    'max_ttl': cacheBehaviour.MaxTTL,
                    'min_ttl': cacheBehaviour.MinTTL,
                    'path_pattern': cacheBehaviour.PathPattern,
                    'smooth_streaming': cacheBehaviour.SmoothStreaming,
                    'target_origin_id': cacheBehaviour.TargetOriginId,
                    'trusted_signers': cacheBehaviour.TrustedSigners.Items,
                    'viewer_protocol_policy': cacheBehaviour.ViewerProtocolPolicy
                });
            });
        }
        if (obj.data.CustomErrorResponses) {
            reqParams.cfn.DistributionConfig['CustomErrorResponses'] = [];
            reqParams.tf['custom_error_response'] = [];
            obj.data.CustomErrorResponses.Items.forEach(customerrorresponse => {
                if (customerrorresponse.ResponseCode != "" && customerrorresponse.ResponsePagePath != "") {
                    reqParams.cfn.DistributionConfig['CustomErrorResponses'].push(customerrorresponse);
                    reqParams.tf['custom_error_response'].push({
                        'error_caching_min_ttl': customerrorresponse.ErrorCachingMinTTL,
                        'error_code': customerrorresponse.ErrorCode,
                        'response_code': customerrorresponse.ResponseCode,
                        'response_page_path': customerrorresponse.ResponsePagePath
                    });
                }
            });
        }
        reqParams.cfn.DistributionConfig['Comment'] = obj.data.Comment;
        reqParams.tf['comment'] = obj.data.Comment;
        reqParams.cfn.DistributionConfig['PriceClass'] = obj.data.PriceClass;
        reqParams.tf['price_class'] = obj.data.PriceClass;
        reqParams.cfn.DistributionConfig['Enabled'] = obj.data.Enabled;
        reqParams.tf['enabled'] = obj.data.Enabled;
        if (obj.data.ViewerCertificate) {
            reqParams.cfn.DistributionConfig['ViewerCertificate'] = {
                'AcmCertificateArn': obj.data.ViewerCertificate.ACMCertificateArn,
                'CloudFrontDefaultCertificate': obj.data.ViewerCertificate.CloudFrontDefaultCertificate,
                'IamCertificateId': obj.data.ViewerCertificate.IAMCertificateId,
                'MinimumProtocolVersion': obj.data.ViewerCertificate.MinimumProtocolVersion,
                'SslSupportMethod': obj.data.ViewerCertificate.SSLSupportMethod
            };
            reqParams.tf['viewer_certificate'] = {
                'acm_certificate_arn': obj.data.ViewerCertificate.ACMCertificateArn,
                'cloudfront_default_certificate': obj.data.ViewerCertificate.CloudFrontDefaultCertificate,
                'iam_certificate_id': obj.data.ViewerCertificate.IAMCertificateId,
                'minimum_protocol_version': obj.data.ViewerCertificate.MinimumProtocolVersion,
                'ssl_support_method': obj.data.ViewerCertificate.SSLSupportMethod
            };
        }
        if (obj.data.Restrictions && obj.data.Restrictions.GeoRestriction) {
            reqParams.cfn.DistributionConfig['Restrictions'] = {
                'GeoRestriction': {
                    'RestrictionType': obj.data.Restrictions.GeoRestriction.RestrictionType,
                    'Locations': obj.data.Restrictions.GeoRestriction.Items
                }
            };
            reqParams.tf['restrictions'] = {
                'geo_restriction': {
                    'restriction_type': obj.data.Restrictions.GeoRestriction.RestrictionType,
                    'locations': obj.data.Restrictions.GeoRestriction.Items
                }
            };
        }
        if (obj.data.WebACLId && obj.data.WebACLId != "") {
            reqParams.cfn.DistributionConfig['WebACLId'] = obj.data.WebACLId;
            reqParams.tf['web_acl_id'] = obj.data.WebACLId;
        }
        if (obj.data.HttpVersion) {
            reqParams.cfn.DistributionConfig['HttpVersion'] = obj.data.HttpVersion.toLowerCase();
            reqParams.tf['http_version'] = obj.data.HttpVersion;
        }
        reqParams.cfn.DistributionConfig['DefaultRootObject'] = obj.data.DefaultRootObject;
        reqParams.cfn.DistributionConfig['IPV6Enabled'] = obj.data.IsIPV6Enabled;
        reqParams.tf['is_ipv6_enabled'] = obj.data.IsIPV6Enabled;
        reqParams.cfn['Tags'] = obj.data.Tags;

        /*
        TODO:
        DistributionConfig:
            Logging:
                Logging
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudfront', obj.id, 'AWS::CloudFront::Distribution'),
            'region': obj.region,
            'service': 'cloudfront',
            'type': 'AWS::CloudFront::Distribution',
            'terraformType': 'aws_cloudfront_distribution',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Id,
                'GetAtt': {
                    'DomainName': obj.data.DomainName
                }
            }
        });
    } else if (obj.type == "cloudfront.originaccessidentity") {
        if (obj.data.Comment) {
            reqParams.cfn['CloudFrontOriginAccessIdentityConfig'] = {
                'Comment': obj.data.Comment
            };
            reqParams.tf['comment'] = obj.data.Comment;
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudfront', obj.id, 'AWS::CloudFront::CloudFrontOriginAccessIdentity'),
            'region': obj.region,
            'service': 'cloudfront',
            'type': 'AWS::CloudFront::CloudFrontOriginAccessIdentity',
            'terraformType': 'aws_cloudfront_origin_access_identity',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Id,
                'GetAtt': {
                    'S3CanonicalUserId': obj.data.S3CanonicalUserId
                }
            }
        });
    } else if (obj.type == "cloudfront.streamingdistribution") {
        var aliases = null;
        if (obj.data.Aliases) {
            aliases = obj.data.Aliases.Items
        };
        var trustedSigners = null;
        if (obj.data.TrustedSigners) {
            trustedSigners = {
                'Enabled': obj.data.TrustedSigners.Enabled,
                'AwsAccountNumbers': obj.data.TrustedSigners.Items
            };
        }
        reqParams.cfn['StreamingDistributionConfig'] = {
            'Aliases': aliases,
            'Comment': obj.data.Comment,
            'Enabled': obj.data.Enabled,
            'PriceClass': obj.data.PriceClass,
            'S3Origin': obj.data.S3Origin,
            'TrustedSigners': trustedSigners
        };
        reqParams.cfn['Tags'] = obj.data.Tags;

        /*
        TODO:
        StreamingDistributionConfig:
            Logging
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudfront', obj.id, 'AWS::CloudFront::StreamingDistribution'),
            'region': obj.region,
            'service': 'cloudfront',
            'type': 'AWS::CloudFront::StreamingDistribution',
            'options': reqParams
        });
    } else if (obj.type == "cloudfront.cachepolicy") {
        var parametersInCacheKeyAndForwardedToOrigin = null;
        if (obj.data.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin) {
            var headersConfig = null;
            if (obj.data.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig) {
                var headers = null;
                if (obj.data.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers) {
                    headers = obj.data.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.Headers.Items;
                }
                headersConfig = {
                    'HeaderBehavior': obj.data.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.HeadersConfig.HeaderBehavior,
                    'Headers': headers
                };
            }
            var cookiesConfig = null;
            if (obj.data.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig) {
                var cookies = null;
                if (obj.data.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies) {
                    cookies = obj.data.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.Cookies.Items;
                }
                cookiesConfig = {
                    'CookieBehavior': obj.data.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.CookiesConfig.CookiesBehavior,
                    'Cookies': cookies
                };
            }
            var queryStringsConfig = null;
            if (obj.data.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig) {
                var queryStrings = null;
                if (obj.data.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings) {
                    queryStrings = obj.data.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStrings.Items;
                }
                queryStringsConfig = {
                    'QueryStringBehavior': obj.data.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.QueryStringsConfig.QueryStringsBehavior,
                    'QueryStrings': queryStrings
                };
            }
            parametersInCacheKeyAndForwardedToOrigin = {
                'EnableAcceptEncodingGzip': obj.data.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingGzip,
                'EnableAcceptEncodingBrotli': obj.data.CachePolicyConfig.ParametersInCacheKeyAndForwardedToOrigin.EnableAcceptEncodingBrotli,
                'CookiesConfig': cookiesConfig,
                'HeadersConfig': headersConfig,
                'QueryStringsConfig': queryStringsConfig
            };
        }
        reqParams.cfn['CachePolicyConfig'] = {
            'Name': obj.data.CachePolicyConfig.Name,
            'Comment': obj.data.CachePolicyConfig.Comment,
            'DefaultTTL': obj.data.CachePolicyConfig.DefaultTTL,
            'MaxTTL': obj.data.CachePolicyConfig.MaxTTL,
            'MinTTL': obj.data.CachePolicyConfig.MinTTL,
            'ParametersInCacheKeyAndForwardedToOrigin': parametersInCacheKeyAndForwardedToOrigin
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudfront', obj.id, 'AWS::CloudFront::CachePolicy'),
            'region': obj.region,
            'service': 'cloudfront',
            'type': 'AWS::CloudFront::CachePolicy',
            'options': reqParams
        });
    } else if (obj.type == "cloudfront.originrequestpolicy") {
        var headersConfig = null;
        if (obj.data.OriginRequestPolicyConfig.HeadersConfig) {
            var headers = null;
            if (obj.data.OriginRequestPolicyConfig.HeadersConfig.Headers) {
                headers = obj.data.OriginRequestPolicyConfig.HeadersConfig.Headers.Items;
            }
            headersConfig = {
                'HeaderBehavior': obj.data.OriginRequestPolicyConfig.HeadersConfig.HeaderBehavior,
                'Headers': headers
            };
        }
        var cookiesConfig = null;
        if (obj.data.OriginRequestPolicyConfig.CookiesConfig) {
            var cookies = null;
            if (obj.data.OriginRequestPolicyConfig.CookiesConfig.Cookies) {
                cookies = obj.data.OriginRequestPolicyConfig.CookiesConfig.Cookies.Items;
            }
            cookiesConfig = {
                'CookieBehavior': obj.data.OriginRequestPolicyConfig.CookiesConfig.CookiesBehavior,
                'Cookies': cookies
            };
        }
        var queryStringsConfig = null;
        if (obj.data.OriginRequestPolicyConfig.QueryStringsConfig) {
            var queryStrings = null;
            if (obj.data.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings) {
                queryStrings = obj.data.OriginRequestPolicyConfig.QueryStringsConfig.QueryStrings.Items;
            }
            queryStringsConfig = {
                'QueryStringBehavior': obj.data.OriginRequestPolicyConfig.QueryStringsConfig.QueryStringsBehavior,
                'QueryStrings': queryStrings
            };
        }
        reqParams.cfn['OriginRequestPolicyConfig'] = {
            'Name': obj.data.OriginRequestPolicyConfig.Name,
            'Comment': obj.data.OriginRequestPolicyConfig.Comment,
            'HeadersConfig': headersConfig,
            'CookiesConfig': cookiesConfig,
            'QueryStringsConfig': queryStringsConfig
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudfront', obj.id, 'AWS::CloudFront::OriginRequestPolicy'),
            'region': obj.region,
            'service': 'cloudfront',
            'type': 'AWS::CloudFront::OriginRequestPolicy',
            'options': reqParams
        });
    } else if (obj.type == "cloudfront.realtimelogconfig") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['SamplingRate'] = obj.data.SamplingRate;
        if (obj.data.EndPoints) {
            reqParams.cfn['EndPoints'] = [];
            obj.data.EndPoints.forEach(endpoint => {
                var kinesisStreamConfig = null;
                if (endpoint.KinesisStreamConfig) {
                    kinesisStreamConfig = {
                        'RoleArn': endpoint.KinesisStreamConfig.RoleARN,
                        'StreamArn': endpoint.KinesisStreamConfig.StreamARN
                    };
                }
                reqParams.cfn['EndPoints'].push({
                    'StreamType': endpoint.StreamType,
                    'KinesisStreamConfig': kinesisStreamConfig,
                });
            });
        }
        reqParams.cfn['Fields'] = obj.data.Fields;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudfront', obj.id, 'AWS::CloudFront::RealtimeLogConfig'),
            'region': obj.region,
            'service': 'cloudfront',
            'type': 'AWS::CloudFront::RealtimeLogConfig',
            'options': reqParams
        });
    } else if (obj.type == "cloudfront.keygroup") {
        reqParams.cfn['KeyGroupConfig'] = obj.data.KeyGroupConfig;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudfront', obj.id, 'AWS::CloudFront::KeyGroup'),
            'region': obj.region,
            'service': 'cloudfront',
            'type': 'AWS::CloudFront::KeyGroup',
            'options': reqParams
        });
    } else if (obj.type == "cloudfront.publickey") {
        reqParams.cfn['PublicKeyConfig'] = obj.data.PublicKeyConfig;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudfront', obj.id, 'AWS::CloudFront::PublicKey'),
            'region': obj.region,
            'service': 'cloudfront',
            'type': 'AWS::CloudFront::PublicKey',
            'options': reqParams
        });
    } else if (obj.type == "cloudfront.function") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['AutoPublish'] = (obj.data.FunctionMetadata.Stage == "LIVE");
        reqParams.cfn['FunctionCode'] = obj.data.FunctionCode;
        reqParams.cfn['FunctionConfig'] = obj.data.FunctionConfig;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudfront', obj.id, 'AWS::CloudFront::Function'),
            'region': obj.region,
            'service': 'cloudfront',
            'type': 'AWS::CloudFront::Function',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.FunctionMetadata.FunctionARN
            }
        });
    } else if (obj.type == "cloudfront.responseheaderspolicy") {
        var corsconfig = null;
        if (obj.data.CorsConfig) {
            var exposeheaders = null;
            if (obj.data.CorsConfig.AccessControlExposeHeaders) {
                exposeheaders = {
                    'Items': obj.data.CorsConfig.AccessControlExposeHeaders.Items
                };
            }
            corsconfig = {
                'AccessControlAllowCredentials': obj.data.CorsConfig.AccessControlAllowCredentials,
                'AccessControlAllowHeaders': {
                    'Items': obj.data.CorsConfig.AccessControlAllowHeaders.Items
                },
                'AccessControlAllowMethods': {
                    'Items': obj.data.CorsConfig.AccessControlAllowMethods.Items
                },
                'AccessControlAllowOrigins': {
                    'Items': obj.data.CorsConfig.AccessControlAllowOrigins.Items
                },
                'AccessControlExposeHeaders': exposeheaders,
                'AccessControlMaxAgeSec': obj.data.CorsConfig.AccessControlMaxAgeSec,
                'OriginOverride': obj.data.CorsConfig.OriginOverride
            };
        }
        var customheadersconfig = null;
        if (obj.data.CustomHeadersConfig) {
            customheadersconfig = {
                'Items': obj.data.CustomHeadersConfig.Items
            };
        }

        reqParams.cfn['ResponseHeadersPolicyConfig'] = {
            'Comment': obj.data.Comment,
            'CorsConfig': corsconfig,
            'CustomHeadersConfig': customheadersconfig,
            'Name': obj.data.Name,
            'SecurityHeadersConfig': obj.data.SecurityHeadersConfig
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudfront', obj.id, 'AWS::CloudFront::ResponseHeadersPolicy'),
            'region': obj.region,
            'service': 'cloudfront',
            'type': 'AWS::CloudFront::ResponseHeadersPolicy',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Id
            }
        });
    } else {
        return false;
    }

    return true;
});
