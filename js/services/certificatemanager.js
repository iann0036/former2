/* ========================================================================== */
// Certificate Manager
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity, &amp; Compliance',
    'service': 'Certificate Manager',
    'resourcetypes': {
        'Certificates': {
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
                        field: 'arn',
                        title: 'ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'subject',
                        title: 'Subject',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'PCA Certificate Authorities': {
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
                        title: 'ARN',
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
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'PCA Certificate Authority Activations': {
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
                        title: 'ARN',
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
                        field: 'status',
                        title: 'Status',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Account': {
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
                        title: 'Days Before Expiry',
                        field: 'daysbeforeexpiry',
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
        'PCA Permissions': {
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
                        title: 'Principal',
                        field: 'principal',
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
                        field: 'certificateauthority',
                        title: 'Certificate Authority',
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

async function updateDatatableSecurityIdentityAndComplianceCertificateManager() {
    blockUI('#section-securityidentityandcompliance-certificatemanager-certificates-datatable');
    blockUI('#section-securityidentityandcompliance-certificatemanager-pcacertificateauthorities-datatable');
    blockUI('#section-securityidentityandcompliance-certificatemanager-pcacertificateauthorityactivations-datatable');
    blockUI('#section-securityidentityandcompliance-certificatemanager-account-datatable');
    blockUI('#section-securityidentityandcompliance-certificatemanager-pcapermissions-datatable');

    await sdkcall("ACM", "listCertificates", {
        // no params
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-certificatemanager-certificates-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.CertificateSummaryList.map(async (certificate) => {
            return sdkcall("ACM", "describeCertificate", {
                CertificateArn: certificate.CertificateArn
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.Certificate.CertificateArn);

                $('#section-securityidentityandcompliance-certificatemanager-certificates-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Certificate.CertificateArn,
                    f2type: 'acm.certificate',
                    f2data: data.Certificate,
                    f2region: region,
                    domainname: data.Certificate.DomainName,
                    arn: data.Certificate.CertificateArn,
                    subject: data.Certificate.Subject,
                    type: data.Certificate.Type
                }]);
            });
        }));

        unblockUI('#section-securityidentityandcompliance-certificatemanager-certificates-datatable');
    });

    await sdkcall("ACMPCA", "listCertificateAuthorities", {
        // no params
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-certificatemanager-pcacertificateauthorities-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-certificatemanager-pcacertificateauthorityactivations-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-certificatemanager-pcapermissions-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.CertificateAuthorities.map(async (certificateAuthority) => {
            await sdkcall("ACMPCA", "describeCertificateAuthority", {
                CertificateAuthorityArn: certificateAuthority.Arn
            }, true).then(async (data) => {
                $('#section-securityidentityandcompliance-certificatemanager-pcacertificateauthorities-datatable').deferredBootstrapTable('append', [{
                    f2id: data.CertificateAuthority.Arn,
                    f2type: 'acm.pcacertificateauthority',
                    f2data: data.CertificateAuthority,
                    f2region: region,
                    arn: data.CertificateAuthority.Arn,
                    creationtime: data.CertificateAuthority.CreatedAt,
                    type: data.CertificateAuthority.Type
                }]);

                if (data.CertificateAuthority.Type == "ACTIVE" || data.CertificateAuthority.Type == "DISABLED") {
                    await sdkcall("ACMPCA", "getCertificateAuthorityCertificate", {
                        CertificateAuthorityArn: certificateAuthority.Arn
                    }, true).then(async (certdata) => {
                        $('#section-securityidentityandcompliance-certificatemanager-pcacertificateauthorityactivations-datatable').deferredBootstrapTable('append', [{
                            f2id: data.CertificateAuthority.Arn + " Activation",
                            f2type: 'acm.pcacertificateauthorityactivation',
                            f2data: {
                                'Status': data.CertificateAuthority.Status,
                                'Certificate': certdata.Certificate,
                                'CertificateChain': certdata.CertificateChain,
                                'CertificateAuthorityArn': data.CertificateAuthority.Arn
                            },
                            f2region: region,
                            arn: data.CertificateAuthority.Arn,
                            status: data.CertificateAuthority.Status
                        }]);
                    });
                }
            });

            return sdkcall("ACMPCA", "listPermissions", {
                CertificateAuthorityArn: certificateAuthority.Arn
            }, true).then(async (data) => {
                for (var permission of data.Permissions) {
                    $('#section-securityidentityandcompliance-certificatemanager-pcapermissions-datatable').deferredBootstrapTable('append', [{
                        f2id: permission.CertificateAuthorityArn + " Permission " + String(permission.CreatedAt),
                        f2type: 'acm.pcapermission',
                        f2data: permission,
                        f2region: region,
                        principal: permission.Principal,
                        certificateauthority: permission.CertificateAuthorityArn
                    }]);
                }
            });
        }));

        unblockUI('#section-securityidentityandcompliance-certificatemanager-pcacertificateauthorities-datatable');
        unblockUI('#section-securityidentityandcompliance-certificatemanager-pcacertificateauthorityactivations-datatable');
        unblockUI('#section-securityidentityandcompliance-certificatemanager-pcapermissions-datatable');
    });

    await sdkcall("ACM", "getAccountConfiguration", {
        // no params
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-certificatemanager-account-datatable').deferredBootstrapTable('removeAll');

        if (data && data.ExpiryEvents && data.ExpiryEvents.DaysBeforeExpiry && data.ExpiryEvents.DaysBeforeExpiry != 45) {
            $('#section-securityidentityandcompliance-certificatemanager-account-datatable').deferredBootstrapTable('append', [{
                f2id: "ACM Account",
                f2type: 'acm.account',
                f2data: data,
                f2region: region,
                daysbeforeexpiry: data.ExpiryEvents.DaysBeforeExpiry
            }]);
        }

        unblockUI('#section-securityidentityandcompliance-certificatemanager-account-datatable');
    }).catch(() => { });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "acm.certificate") {
        reqParams.cfn['DomainName'] = obj.data.DomainName;
        reqParams.tf['domain_name'] = obj.data.DomainName;
        reqParams.cfn['SubjectAlternativeNames'] = obj.data.SubjectAlternativeNames;
        reqParams.tf['subject_alternative_names'] = obj.data.SubjectAlternativeNames;
        if (obj.data.DomainValidationOptions) {
            reqParams.cfn['DomainValidationOptions'] = [];
            obj.data.DomainValidationOptions.forEach(domainValidation => {
                reqParams.cfn['DomainValidationOptions'].push({
                    'DomainName': domainValidation.DomainName,
                    'ValidationDomain': domainValidation.ValidationDomain
                });
            });
            reqParams.tf['validation_method'] = "DNS";
        }
        reqParams.cfn['CertificateAuthorityArn'] = obj.data.CertificateAuthorityArn;
        if (obj.data.Options) {
            reqParams.cfn['CertificateTransparencyLoggingPreference'] = obj.data.Options.CertificateTransparencyLoggingPreference;
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        /*
        TODO:
        ValidationMethod: String
        (recheck per Release History)
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('acm', obj.id, 'AWS::CertificateManager::Certificate'),
            'region': obj.region,
            'service': 'acm',
            'type': 'AWS::CertificateManager::Certificate',
            'terraformType': 'aws_acm_certificate',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.CertificateArn
            }
        });
    } else if (obj.type == "acm.pcacertificateauthority") {
        reqParams.cfn['KeyAlgorithm'] = obj.data.CertificateAuthorityConfiguration.KeyAlgorithm;
        reqParams.cfn['RevocationConfiguration'] = obj.data.RevocationConfiguration;
        reqParams.cfn['SigningAlgorithm'] = obj.data.CertificateAuthorityConfiguration.SigningAlgorithm;
        reqParams.cfn['Subject'] = obj.data.CertificateAuthorityConfiguration.Subject;
        reqParams.cfn['Tags'] = obj.data.Tags;
        reqParams.cfn['Type'] = obj.data.Type;
        
        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('acm', obj.id, 'AWS::ACMPCA::CertificateAuthority'),
            'region': obj.region,
            'service': 'acm',
            'type': 'AWS::ACMPCA::CertificateAuthority',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Arn,
                'GetAtt': {
                    'Arn': obj.data.Arn
                    //'CertificateSigningRequest': 
                },
                'Import': {
                    'Arn': obj.data.Arn
                }
            }
        });
    } else if (obj.type == "acm.pcacertificateauthorityactivation") {
        reqParams.cfn['Certificate'] = obj.data.Certificate;
        reqParams.cfn['CertificateAuthorityArn'] = obj.data.CertificateAuthorityArn;
        reqParams.cfn['CertificateChain'] = obj.data.CertificateChain;
        reqParams.cfn['Status'] = obj.data.Status;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('acm', obj.id, 'AWS::ACMPCA::CertificateAuthorityActivation'),
            'region': obj.region,
            'service': 'acm',
            'type': 'AWS::ACMPCA::CertificateAuthorityActivation',
            'options': reqParams,
            'returnValues': {
                'Import': {
                    'CertificateAuthorityArn': obj.data.CertificateAuthorityArn
                }
            }
        });
    } else if (obj.type == "acm.account") {
        reqParams.cfn['ExpiryEventsConfiguration'] = obj.data.ExpiryEvents;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('acm', obj.id, 'AWS::CertificateManager::Account'),
            'region': obj.region,
            'service': 'acm',
            'type': 'AWS::CertificateManager::Account',
            'options': reqParams
        });
    } else if (obj.type == "acm.pcapermission") {
        reqParams.cfn['CertificateAuthorityArn'] = obj.data.CertificateAuthorityArn;
        reqParams.cfn['Principal'] = obj.data.Principal;
        reqParams.cfn['SourceAccount'] = obj.data.SourceAccount;
        reqParams.cfn['Actions'] = obj.data.Actions;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('acm', obj.id, 'AWS::ACMPCA::Permission'),
            'region': obj.region,
            'service': 'acm',
            'type': 'AWS::ACMPCA::Permission',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
