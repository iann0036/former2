/* ========================================================================== */
// Kendra
/* ========================================================================== */

sections.push({
    'category': 'Machine Learning',
    'service': 'Kendra',
    'resourcetypes': {
        'Indices': {
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'edition',
                        title: 'Edition',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Data Sources': {
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
                        field: 'indexid',
                        title: 'Index ID',
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
        'Faqs': {
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
                        field: 'indexid',
                        title: 'Index ID',
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

async function updateDatatableMachineLearningKendra() {
    blockUI('#section-machinelearning-kendra-indices-datatable');
    blockUI('#section-machinelearning-kendra-datasources-datatable');
    blockUI('#section-machinelearning-kendra-faqs-datatable');

    await sdkcall("Kendra", "listIndices", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-kendra-indices-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.IndexConfigurationSummaryItems.map(async (index) => {
            return Promise.all([
                sdkcall("Kendra", "describeIndex", {
                    Id: index.Id
                }, true).then(async (data) => {
                    data['Tags'] = await getResourceTags("arn:aws:kendra:region:account:index/" + data.Id);

                    $('#section-machinelearning-kendra-indices-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Id,
                        f2type: 'kendra.index',
                        f2data: data,
                        f2region: region,
                        name: data.Name,
                        id: data.Id,
                        edition: data.Edition
                    }]);
                }),
                sdkcall("Kendra", "listDataSources", {
                    // no params
                }, true).then(async (data) => {
                    $('#section-machinelearning-kendra-datasources-datatable').deferredBootstrapTable('removeAll');
            
                    await Promise.all(data.SummaryItems.map(async (datasource) => {
                        return sdkcall("Kendra", "describeDataSource", {
                            Id: datasource.Id,
                            IndexId: index.Id
                        }, true).then(async (data) => {
                            data['Tags'] = await getResourceTags("arn:aws:kendra:region:account:data-source/" + data.IndexId + "/faq/" + data.Id);

                            $('#section-machinelearning-kendra-datasources-datatable').deferredBootstrapTable('append', [{
                                f2id: data.Id,
                                f2type: 'kendra.datasource',
                                f2data: data,
                                f2region: region,
                                name: data.Name,
                                indexid: data.IndexId,
                                type: data.Type,
                                description: data.Description
                            }]);
                        });
                    }))
                }).catch(() => { }),
                sdkcall("Kendra", "listFaqs", {
                    // no params
                }, true).then(async (data) => {
                    $('#section-machinelearning-kendra-faqs-datatable').deferredBootstrapTable('removeAll');
            
                    await Promise.all(data.FaqSummaryItems.map(async (faq) => {
                        return sdkcall("Kendra", "describeFaq", {
                            Id: faq.Id,
                            IndexId: index.Id
                        }, true).then(async (data) => {
                            data['Tags'] = await getResourceTags("arn:aws:kendra:region:account:index/" + data.IndexId + "/faq/" + data.Id);

                            $('#section-machinelearning-kendra-faqs-datatable').deferredBootstrapTable('append', [{
                                f2id: data.Id,
                                f2type: 'kendra.faq',
                                f2data: data,
                                f2region: region,
                                name: data.Name,
                                indexid: data.IndexId,
                                description: data.Description
                            }]);
                        });
                    }))
                }).catch(() => { })
            ]);
        }));
    }).catch(() => { });

    unblockUI('#section-machinelearning-kendra-indices-datatable');
    unblockUI('#section-machinelearning-kendra-datasources-datatable');
    unblockUI('#section-machinelearning-kendra-faqs-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "kendra.index") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Edition'] = obj.data.Edition;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['ServerSideEncryptionConfiguration'] = obj.data.ServerSideEncryptionConfiguration;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['CapacityUnits'] = obj.data.CapacityUnits;
        if (obj.data.DocumentMetadataConfigurations) {
            reqParams.cfn['DocumentMetadataConfigurations'] = [];
            obj.data.DocumentMetadataConfigurations.forEach(documentMetadataConfigurations => {
                var relevance = null;
                if (documentMetadataConfigurations.Relevance) {
                    var valueImportanceMap = [];
                    for (var k in documentMetadataConfigurations.Relevance.ValueImportanceMap) {
                        valueImportanceMap.push({
                            'Key': k,
                            'Value': documentMetadataConfigurations.Relevance.ValueImportanceMap[k]
                        });
                    }
                    relevance = {
                        'Freshness': documentMetadataConfigurations.Relevance.Freshness,
                        'Importance': documentMetadataConfigurations.Relevance.Importance,
                        'Duration': documentMetadataConfigurations.Relevance.Duration,
                        'RankOrder': documentMetadataConfigurations.Relevance.RankOrder,
                        'ValueImportanceMap': valueImportanceMap
                    };
                }
                reqParams.cfn['DocumentMetadataConfigurations'].push({
                    'Name': documentMetadataConfigurations.Name,
                    'Type': documentMetadataConfigurations.Type,
                    'Search': documentMetadataConfigurations.Search,
                    'Relevance': relevance,
                });
            });
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('kendra', obj.id, 'AWS::Kendra::Index'),
            'region': obj.region,
            'service': 'kendra',
            'type': 'AWS::Kendra::Index',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Id': obj.data.Id
                }
            }
        });
    } else if (obj.type == "kendra.datasource") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.cfn['IndexId'] = obj.data.IndexId;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Schedule'] = obj.data.Schedule;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['DataSourceConfiguration'] = obj.data.DataSourceConfiguration;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('kendra', obj.id, 'AWS::Kendra::DataSource'),
            'region': obj.region,
            'service': 'kendra',
            'type': 'AWS::Kendra::DataSource',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Id': obj.data.Id
                }
            }
        });
    } else if (obj.type == "kendra.faq") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['IndexId'] = obj.data.IndexId;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['S3Path'] = obj.data.S3Path;
        reqParams.cfn['FileFormat'] = obj.data.FileFormat;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('kendra', obj.id, 'AWS::Kendra::Faq'),
            'region': obj.region,
            'service': 'kendra',
            'type': 'AWS::Kendra::Faq',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Id': obj.data.Id
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
