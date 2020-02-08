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
    
    } else {
        return false;
    }

    return true;
});
