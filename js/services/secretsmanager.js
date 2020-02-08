/* ========================================================================== */
// Secrets Manager
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity &amp; Compliance',
    'service': 'Secrets Manager',
    'resourcetypes': {
        'Secrets': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'kmskeyid',
                        title: 'KMS Key ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Resource Policies': {
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
                    }
                ],
                [
                    // nothing
                ]
            ]
        },
        'Rotation Schedules': {
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
                        title: 'Secret ARN',
                        field: 'secretarn',
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
                        field: 'lambdaarn',
                        title: 'Lambda ARN',
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

async function updateDatatableSecurityIdentityAndComplianceSecretsManager() {
    blockUI('#section-securityidentityandcompliance-secretsmanager-secrets-datatable');
    blockUI('#section-securityidentityandcompliance-secretsmanager-resourcepolicies-datatable');
    blockUI('#section-securityidentityandcompliance-secretsmanager-rotationschedules-datatable');

    await sdkcall("SecretsManager", "listSecrets", {
        // no params
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-secretsmanager-secrets-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-secretsmanager-resourcepolicies-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-secretsmanager-rotationschedules-datatable').bootstrapTable('removeAll');

        if (data.SecretList) {
            await Promise.all(data.SecretList.map(secret => {
                return Promise.all([
                    sdkcall("SecretsManager", "getResourcePolicy", {
                        SecretId: secret.ARN
                    }, true).then((data) => {
                        $('#section-securityidentityandcompliance-secretsmanager-resourcepolicies-datatable').bootstrapTable('append', [{
                            f2id: data.ARN,
                            f2type: 'secretsmanager.resourcepolicy',
                            f2data: data,
                            f2region: region,
                            name: data.Name
                        }]);
                    }),
                    sdkcall("SecretsManager", "describeSecret", {
                        SecretId: secret.ARN
                    }, true).then(async (data) => {
                        await sdkcall("SecretsManager", "getSecretValue", {
                            SecretId: secret.ARN
                        }, true).then((secretvalue) => {
                            data['SecretString'] = secretvalue.SecretString;

                            $('#section-securityidentityandcompliance-secretsmanager-secrets-datatable').bootstrapTable('append', [{
                                f2id: data.ARN,
                                f2type: 'secretsmanager.secret',
                                f2data: data,
                                f2region: region,
                                name: data.Name,
                                description: data.Description,
                                kmskeyid: data.KmsKeyId
                            }]);
                        });

                        if (data.RotationEnabled) {
                            $('#section-securityidentityandcompliance-secretsmanager-rotationschedules-datatable').bootstrapTable('append', [{
                                f2id: data.ARN,
                                f2type: 'secretsmanager.rotationschedule',
                                f2data: data,
                                f2region: region,
                                secretarn: data.ARN,
                                lambdaarn: data.RotationLambdaARN
                            }]);
                        }
                    })
                ]);
            }));
        }

        unblockUI('#section-securityidentityandcompliance-secretsmanager-secrets-datatable');
        unblockUI('#section-securityidentityandcompliance-secretsmanager-resourcepolicies-datatable');
        unblockUI('#section-securityidentityandcompliance-secretsmanager-rotationschedules-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
