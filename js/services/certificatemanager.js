/* ========================================================================== */
// Certificate Manager
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity &amp; Compliance',
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
        }
    }
});

async function updateDatatableSecurityIdentityAndComplianceCertificateManager() {
    blockUI('#section-securityidentityandcompliance-certificatemanager-certificates-datatable');
    blockUI('#section-securityidentityandcompliance-certificatemanager-pcacertificateauthorities-datatable');
    blockUI('#section-securityidentityandcompliance-certificatemanager-pcacertificateauthorityactivations-datatable');

    await sdkcall("ACM", "listCertificates", {
        // no params
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-certificatemanager-certificates-datatable').bootstrapTable('removeAll');

        await Promise.all(data.CertificateSummaryList.map(certificate => {
            return sdkcall("ACM", "describeCertificate", {
                CertificateArn: certificate.CertificateArn
            }, true).then((data) => {
                $('#section-securityidentityandcompliance-certificatemanager-certificates-datatable').bootstrapTable('append', [{
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
        $('#section-securityidentityandcompliance-certificatemanager-pcacertificateauthorities-datatable').bootstrapTable('removeAll');

        await Promise.all(data.CertificateAuthorities.map(certificateAuthority => {
            return sdkcall("ACMPCA", "describeCertificateAuthority", {
                CertificateAuthorityArn: certificateAuthority.Arn
            }, true).then(async (data) => {
                $('#section-securityidentityandcompliance-certificatemanager-pcacertificateauthorities-datatable').bootstrapTable('append', [{
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
                        $('#section-securityidentityandcompliance-certificatemanager-pcacertificateauthorityactivations-datatable').bootstrapTable('append', [{
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
        }));

        unblockUI('#section-securityidentityandcompliance-certificatemanager-pcacertificateauthorities-datatable');
        unblockUI('#section-securityidentityandcompliance-certificatemanager-pcacertificateauthorityactivations-datatable');
    });
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
                    'DomainName': obj.data.DomainValidationOptions.DomainName,
                    'ValidationDomain': obj.data.DomainValidationOptions.ValidationDomain
                });
            });
            reqParams.tf['validation_method'] = "DNS";
        }

        /*
        TODO:
        Tags:
            - Resource Tag
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
            'options': reqParams
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
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
