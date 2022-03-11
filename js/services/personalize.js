/* ========================================================================== */
// Personalize
/* ========================================================================== */

sections.push({
    'category': 'Machine Learning',
    'service': 'Personalize',
    'resourcetypes': {
        'Datasets': {
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
        'Dataset Groups': {
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
                    }
                ]
            ]
        },
        'Schemas': {
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
                    }
                ]
            ]
        },
        'Solutions': {
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
                        field: 'datasetgroup',
                        title: 'Dataset Group',
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

async function updateDatatableMachineLearningPersonalize() {
    blockUI('#section-machinelearning-personalize-datasets-datatable');
    blockUI('#section-machinelearning-personalize-datasetgroups-datatable');
    blockUI('#section-machinelearning-personalize-schemas-datatable');
    blockUI('#section-machinelearning-personalize-solutions-datatable');

    await sdkcall("Personalize", "listDatasets", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-personalize-datasets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.datasets.map(async (dataset) => {
            return sdkcall("Personalize", "describeDataset", {
                datasetArn: dataset.datasetArn
            }, false).then(async (data) => {
                $('#section-machinelearning-personalize-datasets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.dataset.datasetArn,
                    f2type: 'personalize.dataset',
                    f2data: data.dataset,
                    f2region: region,
                    name: data.dataset.name,
                    type: data.dataset.datasetType
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("Personalize", "listDatasetGroups", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-personalize-datasetgroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.datasetGroups.map(async (datasetgroup) => {
            return sdkcall("Personalize", "describeDatasetGroup", {
                datasetGroupArn: datasetgroup.datasetGroupArn
            }, false).then(async (data) => {
                $('#section-machinelearning-personalize-datasetgroups-datatable').deferredBootstrapTable('append', [{
                    f2id: data.datasetGroup.datasetGroupArn,
                    f2type: 'personalize.datasetgroup',
                    f2data: data,
                    f2region: region,
                    name: data.datasetGroup.name,
                    domain: data.datasetGroup.domain
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("Personalize", "listSchemas", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-personalize-schemas-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.schemas.map(async (schema) => {
            return sdkcall("Personalize", "describeSchema", {
                schemaArn: schema.schemaArn
            }, false).then(async (data) => {
                $('#section-machinelearning-personalize-schemas-datatable').deferredBootstrapTable('append', [{
                    f2id: data.schema.schemaArn,
                    f2type: 'personalize.schema',
                    f2data: data,
                    f2region: region,
                    name: data.schema.name,
                    domain: data.schema.domain
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("Personalize", "listSolutions", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-personalize-solutions-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.solutions.map(async (solution) => {
            return sdkcall("Personalize", "describeSolution", {
                solutionArn: solution.solutionArn
            }, false).then(async (data) => {
                $('#section-machinelearning-personalize-solutions-datatable').deferredBootstrapTable('append', [{
                    f2id: data.solution.solutionArn,
                    f2type: 'personalize.solution',
                    f2data: data,
                    f2region: region,
                    name: data.solution.name,
                    datasetgroup: data.solution.datasetGroupArn
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-machinelearning-personalize-datasets-datatable');
    unblockUI('#section-machinelearning-personalize-datasetgroups-datatable');
    unblockUI('#section-machinelearning-personalize-schemas-datatable');
    unblockUI('#section-machinelearning-personalize-solutions-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "personalize.dataset") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['DatasetGroupArn'] = obj.data.datasetGroupArn;
        reqParams.cfn['DatasetType'] = obj.data.datasetType;
        reqParams.cfn['SchemaArn'] = obj.data.schemaArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('personalize', obj.id, 'AWS::Personalize::Dataset'),
            'region': obj.region,
            'service': 'personalize',
            'type': 'AWS::Personalize::Dataset',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.name,
                'GetAtt': {
                    'DatasetArn': obj.data.datasetArn
                }
            }
        });
    } else if (obj.type == "personalize.datasetgroup") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Domain'] = obj.data.domain;
        reqParams.cfn['RoleArn'] = obj.data.roleArn;
        reqParams.cfn['KmsKeyArn'] = obj.data.kmsKeyArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('personalize', obj.id, 'AWS::Forecast::DatasetGroup'),
            'region': obj.region,
            'service': 'personalize',
            'type': 'AWS::Forecast::DatasetGroup',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.name,
                'GetAtt': {
                    'DatasetGroupArn': obj.data.datasetGroupArn
                }
            }
        });
    } else if (obj.type == "personalize.schema") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Domain'] = obj.data.domain;
        reqParams.cfn['Schema'] = obj.data.schema;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('personalize', obj.id, 'AWS::Personalize::Schema'),
            'region': obj.region,
            'service': 'personalize',
            'type': 'AWS::Personalize::Schema',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.name,
                'GetAtt': {
                    'SchemaArn': obj.data.schemaArn
                }
            }
        });
    } else if (obj.type == "personalize.solution") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['PerformHPO'] = obj.data.performHPO;
        reqParams.cfn['PerformAutoML'] = obj.data.performAutoML;
        reqParams.cfn['RecipeArn'] = obj.data.recipeArn;
        reqParams.cfn['DatasetGroupArn'] = obj.data.datasetGroupArn;
        reqParams.cfn['EventType'] = obj.data.eventType;
        if (obj.data.solutionConfig) {
            reqParams.cfn['SolutionConfig'] = {
                'AlgorithmHyperParameters': obj.data.solutionConfig.algorithmHyperParameters,
                'AutoMLConfig': obj.data.solutionConfig.autoMLConfig,
                'EventValueThreshold': obj.data.solutionConfig.eventValueThreshold,
                'FeatureTransformationParameters': obj.data.solutionConfig.featureTransformationParameters,
                'HpoConfig': obj.data.solutionConfig.hpoConfig
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('personalize', obj.id, 'AWS::Personalize::Solution'),
            'region': obj.region,
            'service': 'personalize',
            'type': 'AWS::Personalize::Solution',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.name,
                'GetAtt': {
                    'SolutionArn': obj.data.solutionArn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
