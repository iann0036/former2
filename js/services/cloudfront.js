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
        }
    }
});

async function updateDatatableNetworkingAndContentDeliveryCloudFront() {
    blockUI('#section-networkingandcontentdelivery-cloudfront-distributions-datatable');
    blockUI('#section-networkingandcontentdelivery-cloudfront-streamingdistributions-datatable');
    blockUI('#section-networkingandcontentdelivery-cloudfront-originaccessidentities-datatable');

    await sdkcall("CloudFront", "listDistributions", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-cloudfront-distributions-datatable').bootstrapTable('removeAll');

        data.DistributionList.Items.forEach(distribution => {
            $('#section-networkingandcontentdelivery-cloudfront-distributions-datatable').bootstrapTable('append', [{
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

        unblockUI('#section-networkingandcontentdelivery-cloudfront-distributions-datatable');
    });

    await sdkcall("CloudFront", "listStreamingDistributions", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-cloudfront-streamingdistributions-datatable').bootstrapTable('removeAll');

        data.StreamingDistributionList.Items.forEach(distribution => {
            $('#section-networkingandcontentdelivery-cloudfront-streamingdistributions-datatable').bootstrapTable('append', [{
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

    await sdkcall("CloudFront", "listCloudFrontOriginAccessIdentities", {
        // no params
    }, true).then((data) => {
        $('#section-networkingandcontentdelivery-cloudfront-originaccessidentities-datatable').bootstrapTable('removeAll');

        data.CloudFrontOriginAccessIdentityList.Items.forEach(oai => {
            $('#section-networkingandcontentdelivery-cloudfront-originaccessidentities-datatable').bootstrapTable('append', [{
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
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "cloudfront.distribution") {
        reqParams.cfn['DistributionConfig'] = {};
        reqParams.cfn.DistributionConfig['Aliases'] = obj.data.Aliases.Items;
        reqParams.tf['aliases'] = obj.data.Aliases.Items;
        reqParams.cfn.DistributionConfig['Origins'] = [];
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
                'CustomOriginConfig': customOriginConfig,
                'DomainName': origin.DomainName,
                'Id': origin.Id,
                'OriginCustomHeaders': tfCustomHeaders,
                'OriginPath': origin.OriginPath,
                'S3OriginConfig': origin.S3OriginConfig
            });
            reqParams.tf['origin'].push({
                'custom_origin_config': customOriginConfig,
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
        if (obj.data.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames) {
            cookiesWhitelistedNames = obj.data.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items;
        }
        var queryStringCacheKeys = null;
        if (obj.data.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys) {
            queryStringCacheKeys = obj.data.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items;
        }
        reqParams.cfn.DistributionConfig['DefaultCacheBehavior'] = {
            'AllowedMethods': obj.data.DefaultCacheBehavior.AllowedMethods.Items,
            'CachedMethods': obj.data.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items,
            'Compress': obj.data.DefaultCacheBehavior.Compress,
            'DefaultTTL': obj.data.DefaultCacheBehavior.DefaultTTL,
            'FieldLevelEncryptionId': (obj.data.DefaultCacheBehavior.FieldLevelEncryptionId == "" ? null : obj.data.DefaultCacheBehavior.FieldLevelEncryptionId),
            'ForwardedValues': {
                'Cookies': {
                    'Forward': obj.data.DefaultCacheBehavior.ForwardedValues.Cookies.Forward,
                    'WhitelistedNames': cookiesWhitelistedNames
                },
                'Headers': obj.data.DefaultCacheBehavior.ForwardedValues.Headers.Items,
                'QueryString': obj.data.DefaultCacheBehavior.ForwardedValues.QueryString,
                'QueryStringCacheKeys': queryStringCacheKeys
            },
            'LambdaFunctionAssociations': defaultCacheLambdaFunctionAssociations,
            'MaxTTL': obj.data.DefaultCacheBehavior.MaxTTL,
            'MinTTL': obj.data.DefaultCacheBehavior.MinTTL,
            'SmoothStreaming': obj.data.DefaultCacheBehavior.SmoothStreaming,
            'TargetOriginId': obj.data.DefaultCacheBehavior.TargetOriginId,
            'TrustedSigners': obj.data.DefaultCacheBehavior.TrustedSigners.Items,
            'ViewerProtocolPolicy': obj.data.DefaultCacheBehavior.ViewerProtocolPolicy
        };
        reqParams.tf['default_cache_behavior'] = {
            'allowed_methods': obj.data.DefaultCacheBehavior.AllowedMethods.Items,
            'cached_methods': obj.data.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items,
            'compress': obj.data.DefaultCacheBehavior.Compress,
            'default_ttl': obj.data.DefaultCacheBehavior.DefaultTTL,
            'field_level_encryption_id': (obj.data.DefaultCacheBehavior.FieldLevelEncryptionId == "" ? null : obj.data.DefaultCacheBehavior.FieldLevelEncryptionId),
            'forwarded_values': {
                'cookies': {
                    'forward': obj.data.DefaultCacheBehavior.ForwardedValues.Cookies.Forward,
                    'whitelisted_names': cookiesWhitelistedNames
                },
                'headers': obj.data.DefaultCacheBehavior.ForwardedValues.Headers.Items,
                'query_string': obj.data.DefaultCacheBehavior.ForwardedValues.QueryString,
                'query_string_cache_keys': queryStringCacheKeys
            },
            'lambda_function_association': defaultCacheLambdaFunctionAssociations,
            'max_ttl': obj.data.DefaultCacheBehavior.MaxTTL,
            'min_ttl': obj.data.DefaultCacheBehavior.MinTTL,
            'smooth_streaming ': obj.data.DefaultCacheBehavior.SmoothStreaming,
            'target_origin_id': obj.data.DefaultCacheBehavior.TargetOriginId,
            'trusted_signers': obj.data.DefaultCacheBehavior.TrustedSigners.Items,
            'viewer_protocol_policy': obj.data.DefaultCacheBehavior.ViewerProtocolPolicy
        };
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
                if (cacheBehaviour.ForwardedValues.Cookies.WhitelistedNames) {
                    cookiesWhitelistedNames = cacheBehaviour.ForwardedValues.Cookies.WhitelistedNames.Items;
                }
                var queryStringCacheKeys = null;
                if (cacheBehaviour.ForwardedValues.QueryStringCacheKeys) {
                    queryStringCacheKeys = cacheBehaviour.ForwardedValues.QueryStringCacheKeys.Items;
                }
                reqParams.cfn.DistributionConfig['CacheBehaviors'].push({
                    'AllowedMethods': cacheBehaviour.AllowedMethods.Items,
                    'CachedMethods': cacheBehaviour.AllowedMethods.CachedMethods.Items,
                    'Compress': cacheBehaviour.Compress,
                    'DefaultTTL': cacheBehaviour.DefaultTTL,
                    'FieldLevelEncryptionId': (cacheBehaviour.FieldLevelEncryptionId == "" ? null : cacheBehaviour.FieldLevelEncryptionId),
                    'ForwardedValues': {
                        'Cookies': {
                            'Forward': cacheBehaviour.ForwardedValues.Cookies.Forward,
                            'WhitelistedNames': cookiesWhitelistedNames
                        },
                        'Headers': cacheBehaviour.ForwardedValues.Headers.Items,
                        'QueryString': cacheBehaviour.ForwardedValues.QueryString,
                        'QueryStringCacheKeys': queryStringCacheKeys
                    },
                    'LambdaFunctionAssociations': cacheLambdaFunctionAssociations,
                    'MaxTTL': cacheBehaviour.MaxTTL,
                    'MinTTL': cacheBehaviour.MinTTL,
                    'PathPattern': cacheBehaviour.PathPattern,
                    'SmoothStreaming': cacheBehaviour.SmoothStreaming,
                    'TargetOriginId': cacheBehaviour.TargetOriginId,
                    'TrustedSigners': cacheBehaviour.TrustedSigners.Items,
                    'ViewerProtocolPolicy': cacheBehaviour.ViewerProtocolPolicy
                });
                reqParams.tf['ordered_cache_behavior'].push({
                    'allowed_methods': cacheBehaviour.AllowedMethods.Items,
                    'cached_methods': cacheBehaviour.AllowedMethods.CachedMethods.Items,
                    'compress': cacheBehaviour.Compress,
                    'default_ttl': cacheBehaviour.DefaultTTL,
                    'field_level_encryption_id': cacheBehaviour.FieldLevelEncryptionId,
                    'forwarded_values': {
                        'cookies': {
                            'forward': cacheBehaviour.ForwardedValues.Cookies.Forward,
                            'whitelisted_names': cookiesWhitelistedNames
                        },
                        'headers': cacheBehaviour.ForwardedValues.Headers.Items,
                        'query_string': cacheBehaviour.ForwardedValues.QueryString,
                        'query_string_cache_keys': queryStringCacheKeys
                    },
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
        reqParams.cfn.DistributionConfig['HttpVersion'] = obj.data.HttpVersion.toLowerCase();
        reqParams.tf['http_version'] = obj.data.HttpVersion;
        reqParams.cfn.DistributionConfig['IPV6Enabled'] = obj.data.IsIPV6Enabled;
        reqParams.tf['is_ipv6_enabled'] = obj.data.IsIPV6Enabled;

        /*
        TODO:
        DistributionConfig:
            DefaultRootObject: String
            Logging:
                Logging
        Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudfront', obj.id),
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
    } else {
        return false;
    }

    return true;
});
