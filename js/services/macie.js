/* ========================================================================== */
// Macie
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity, &amp; Compliance',
    'service': 'Macie',
    'resourcetypes': {
        'Session': {
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
                        title: 'Service Role',
                        field: 'servicerole',
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
                        field: 'findingpublishingfrequency',
                        title: 'Finding Publishing Frequency',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Custom Data Identifiers': {
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
        'Findings Filters': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'action',
                        title: 'Action',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Member Account Associations': {
            'terraformonly': true,
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
                        title: 'Account ID',
                        field: 'accountid',
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
        'S3 Bucket Associations': {
            'terraformonly': true,
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
                        field: 'prefix',
                        title: 'Prefix',
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

async function updateDatatableSecurityIdentityAndComplianceMacie() {
    blockUI('#section-securityidentityandcompliance-macie-session-datatable');
    blockUI('#section-securityidentityandcompliance-macie-customdataidentifiers-datatable');
    blockUI('#section-securityidentityandcompliance-macie-findingsfilters-datatable');
    blockUI('#section-securityidentityandcompliance-macie-memberaccountassociations-datatable');
    blockUI('#section-securityidentityandcompliance-macie-s3bucketassociations-datatable');

    await sdkcall("Macie2", "getMacieSession", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-macie-session-datatable').deferredBootstrapTable('removeAll');

        $('#section-securityidentityandcompliance-macie-session-datatable').deferredBootstrapTable('append', [{
            f2id: 'Macie Session',
            f2type: 'macie.session',
            f2data: data,
            f2region: region,
            servicerole: data.serviceRole,
            findingpublishingfrequency: data.findingPublishingFrequency
        }]);
    }).catch(() => { });

    await sdkcall("Macie2", "listCustomDataIdentifiers", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-macie-customdataidentifiers-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.items.map(async (customDataIdentifer) => {
            await sdkcall("Macie2", "getCustomDataIdentifier", {
                id: customDataIdentifer.id
            }, false).then(async (data) => {
                $('#section-securityidentityandcompliance-macie-customdataidentifiers-datatable').deferredBootstrapTable('append', [{
                    f2id: data.arn,
                    f2type: 'macie.customdataidentifier',
                    f2data: data,
                    f2region: region,
                    id: data.id,
                    description: data.description,
                    name: data.name
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("Macie2", "listFindingsFilters", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-macie-findingsfilters-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.findingsFilterListItems.map(async (findingsFilter) => {
            await sdkcall("Macie2", "getFindingsFilter", {
                id: findingsFilter.id
            }, false).then(async (data) => {
                $('#section-securityidentityandcompliance-macie-findingsfilters-datatable').deferredBootstrapTable('append', [{
                    f2id: data.arn,
                    f2type: 'macie.findingsfilter',
                    f2data: data,
                    f2region: region,
                    id: data.id,
                    description: data.description,
                    name: data.name,
                    action: data.action
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("Macie", "listMemberAccounts", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-macie-memberaccountassociations-datatable').deferredBootstrapTable('removeAll');

        data.memberAccounts.forEach(memberAccount => {
            $('#section-securityidentityandcompliance-macie-memberaccountassociations-datatable').deferredBootstrapTable('append', [{
                f2id: memberAccount.accountId,
                f2type: 'macie.memberaccountassociation',
                f2data: memberAccount,
                f2region: region,
                accountid: memberAccount.accountId
            }]);
        });
    }).catch(() => { });

    await sdkcall("Macie", "listS3Resources", {
        // no params
    }, false).then(async (data) => {
        $('#section-securityidentityandcompliance-macie-s3bucketassociations-datatable').deferredBootstrapTable('removeAll');

        data.s3Resources.forEach(s3Resource => {
            $('#section-securityidentityandcompliance-macie-s3bucketassociations-datatable').deferredBootstrapTable('append', [{
                f2id: s3Resource.bucketName,
                f2type: 'macie.s3bucketassociation',
                f2data: s3Resource,
                f2region: region,
                bucketname: s3Resource.bucketName,
                prefix: s3Resource.prefix
            }]);
        });
    }).catch(() => { });

    unblockUI('#section-securityidentityandcompliance-macie-session-datatable');
    unblockUI('#section-securityidentityandcompliance-macie-customdataidentifiers-datatable');
    unblockUI('#section-securityidentityandcompliance-macie-findingsfilters-datatable');
    unblockUI('#section-securityidentityandcompliance-macie-memberaccountassociations-datatable');
    unblockUI('#section-securityidentityandcompliance-macie-s3bucketassociations-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "macie.memberaccountassociation") {
        reqParams.tf['member_account_id'] = obj.data.accountId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('macie', obj.id, 'AWS::Macie::MemberAccountAssociation'), // not real resource type
            'region': obj.region,
            'service': 'macie',
            'terraformType': 'aws_macie_member_account_association',
            'options': reqParams
        });
    } else if (obj.type == "macie.s3bucketassociation") {
        reqParams.tf['bucket_name'] = obj.data.bucketName;
        reqParams.tf['prefix'] = obj.data.prefix;
        reqParams.tf['classification_type'] = {
            'continuous': obj.data.classificationType.continuous,
            'one_time': obj.data.classificationType.oneTime
        };

        /*
        SKIPPED:
        member_account_id
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('macie', obj.id, 'AWS::Macie::S3BucketAssociation'), // not real resource type
            'region': obj.region,
            'service': 'macie',
            'terraformType': 'aws_macie_s3_bucket_association',
            'options': reqParams
        });
    } else if (obj.type == "macie.session") {
        reqParams.cfn['FindingPublishingFrequency'] = obj.data.findingPublishingFrequency;
        reqParams.cfn['Status'] = obj.data.status;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('macie', obj.id, 'AWS::Macie::Session'),
            'type': 'AWS::Macie::Session',
            'region': obj.region,
            'service': 'macie',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.id,
                'GetAtt': {
                    'ServiceRole': obj.data.serviceRole
                }
            }
        });
    } else if (obj.type == "macie.customdataidentifier") {
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Regex'] = obj.data.regex;
        reqParams.cfn['Keywords'] = obj.data.keywords;
        reqParams.cfn['IgnoreWords'] = obj.data.ignoreWords;
        reqParams.cfn['MaximumMatchDistance'] = obj.data.maximumMatchDistance;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('macie', obj.id, 'AWS::Macie::CustomDataIdentifier'),
            'type': 'AWS::Macie::CustomDataIdentifier',
            'region': obj.region,
            'service': 'macie',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.id,
                'GetAtt': {
                    'Arn': obj.data.arn
                }
            }
        });
    } else if (obj.type == "macie.findingsfilter") {
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Action'] = obj.data.action;
        if (obj.data.findingCriteria) {
            var criterion = null;
            if (obj.data.findingCriteria.criterion) {
                criterion = {
                    'Eq': obj.data.findingCriteria.criterion.eq,
                    'Gt': obj.data.findingCriteria.criterion.gt,
                    'Gte': obj.data.findingCriteria.criterion.gte,
                    'Lt': obj.data.findingCriteria.criterion.lt,
                    'Lte': obj.data.findingCriteria.criterion.lte,
                    'Neq': obj.data.findingCriteria.criterion.neq
                };
            }
            reqParams.cfn['FindingCriteria'] = {
                'Criterion': criterion
            };
        }
        reqParams.cfn['Position'] = obj.data.position;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('macie', obj.id, 'AWS::Macie::FindingsFilter'),
            'type': 'AWS::Macie::FindingsFilter',
            'region': obj.region,
            'service': 'macie',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.id,
                'GetAtt': {
                    'Arn': obj.data.arn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
