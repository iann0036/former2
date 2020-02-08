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
