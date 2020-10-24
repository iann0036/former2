/* ========================================================================== */
// CodeArtifact
/* ========================================================================== */

sections.push({
    'category': 'Developer Tools',
    'service': 'CodeArtifact',
    'resourcetypes': {
        'Domains': {
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
        'Domain Permissions Policies': {
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
                        title: 'Domain',
                        field: 'domain',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                [
                    // no properties
                ]
            ]
        },
        'Repositories': {
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
                        field: 'domain',
                        title: 'Domain',
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
        }
    }
});

async function updateDatatableDeveloperToolsCodeArtifact() {
    blockUI('#section-developertools-codeartifact-domains-datatable');
    blockUI('#section-developertools-codeartifact-domainpermissionspolicies-datatable');
    blockUI('#section-developertools-codeartifact-repositories-datatable');

    await sdkcall("CodeArtifact", "listDomains", {
        // no params
    }, true).then(async (data) => {
        $('#section-developertools-codeartifact-domains-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.domains.map(async (domain) => {
            return sdkcall("CodeArtifact", "getDomainPermissionsPolicy", {
                domain: domain.name
            }, false).then(async (data) => {
                data.policy['domain'] = domain.name;

                await sdkcall("CodeArtifact", "describeDomain", {
                    domain: domain.name
                }, true).then((domaindata) => {
                    domaindata.domain['policy'] = data.policy;

                    $('#section-developertools-codeartifact-domains-datatable').deferredBootstrapTable('append', [{
                        f2id: domaindata.domain.arn,
                        f2type: 'codeartifact.domain',
                        f2data: domaindata.domain,
                        f2region: region,
                        name: domaindata.domain.name,
                        status: domaindata.domain.status
                    }]);
                });

                $('#section-developertools-codeartifact-domainpermissionspolicies-datatable').deferredBootstrapTable('append', [{
                    f2id: domain.name + " Domain Permissions Policy",
                    f2type: 'codeartifact.domainpermissionspolicy',
                    f2data: data.policy,
                    f2region: region,
                    domain: domain.name
                }]);
            }).catch(() => { });
        }));
    }).catch(() => { });

    await sdkcall("CodeArtifact", "listRepositories", {
        // no params
    }, true).then(async (data) => {
        $('#section-developertools-codeartifact-repositories-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.repositories.map(async (repository) => {
            return sdkcall("CodeArtifact", "describeRepository", {
                repository: repository.name,
                domain: repository.domainName
            }, true).then(async (data) => {
                await sdkcall("CodeArtifact", "getRepositoryPermissionsPolicy", {
                    repository: repository.name,
                    domain: repository.domainName
                }, false).then((permissionsdata) => {
                    if (permissionsdata.policy) {
                        data.repository['permissions'] = policy.document;
                    }
                }).catch(() => { });

                $('#section-developertools-codeartifact-repositories-datatable').deferredBootstrapTable('append', [{
                    f2id: data.repository.arn,
                    f2type: 'codeartifact.repository',
                    f2data: data.repository,
                    f2region: region,
                    name: data.repository.name,
                    domain: data.repository.domainName,
                    description: data.repository.description
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-developertools-codeartifact-domains-datatable');
    unblockUI('#section-developertools-codeartifact-domainpermissionspolicies-datatable');
    unblockUI('#section-developertools-codeartifact-repositories-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "codeartifact.domain") {
        reqParams.cfn['DomainName'] = obj.data.name;
        reqParams.tf['domain'] = obj.data.name;
        reqParams.cfn['EncryptionKey'] = obj.data.encryptionKey;
        reqParams.tf['encryption_key'] = obj.data.encryptionKey;
        if (obj.data.policy) {
            reqParams.cfn['PermissionsPolicyDocument'] = obj.data.policy.document;
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codeartifact', obj.id, 'AWS::CodeArtifact::Domain'),
            'region': obj.region,
            'service': 'codeartifact',
            'type': 'AWS::CodeArtifact::Domain',
            'terraformType': 'aws_codeartifact_domain',
            'options': reqParams
        });
    } else if (obj.type == "codeartifact.domainpermissionspolicy") {
        reqParams.tf['domain'] = obj.data.domain;
        reqParams.tf['policy_document'] = obj.data.document;
        reqParams.tf['policy_revision'] = obj.data.revision;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codeartifact', obj.id, 'AWS::CodeArtifact::DomainPermissionsPolicy'), // not real resource type
            'region': obj.region,
            'service': 'codeartifact',
            'terraformType': 'aws_codeartifact_domain_permissions_policy',
            'options': reqParams
        });
    } else if (obj.type == "codeartifact.repository") {
        reqParams.cfn['RepositoryName'] = obj.data.name;
        reqParams.tf['repository'] = obj.data.name;
        reqParams.cfn['DomainName'] = obj.data.domainName;
        reqParams.tf['domain'] = obj.data.domainName;
        reqParams.cfn['DomainOwner'] = obj.data.domainOwner;
        reqParams.tf['domain_owner'] = obj.data.domainOwner;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.tf['description'] = obj.data.description;
        if (obj.data.upstreams) {
            reqParams.cfn['Upstream'] = [];
            reqParams.tf['upstream'] = [];
            obj.data.upstreams.forEach(upstream => {
                reqParams.cfn['Upstream'].push(upstream.repositoryName);
                reqParams.tf['upstream'].push({
                    'repository_name': upstream.repositoryName
                });
            });
        }
        if (obj.data.externalConnections) {
            reqParams.cfn['ExternalConnections'] = [];
            obj.data.externalConnections.forEach(externalConnection => {
                reqParams.cfn['ExternalConnections'].push(externalConnection.externalConnectionName);
            });
        }
        reqParams.cfn['PermissionsPolicyDocument'] = obj.data.permissions;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codeartifact', obj.id, 'AWS::CodeArtifact::Repository'),
            'region': obj.region,
            'service': 'codeartifact',
            'type': 'AWS::CodeArtifact::Repository',
            'terraformType': 'aws_codeartifact_repository',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
