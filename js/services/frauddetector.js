/* ========================================================================== */
// Fraud Detector
/* ========================================================================== */

sections.push({
    'category': 'Machine Learning',
    'service': 'Fraud Detector',
    'resourcetypes': {
        'Detectors': {
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
        'Entity Types': {
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
                    }
                ]
            ]
        },
        'Event Types': {
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
                    }
                ]
            ]
        },
        'Labels': {
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
                    }
                ]
            ]
        },
        'Outcomes': {
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
                    }
                ]
            ]
        },
        'Variables': {
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
                    }
                ]
            ]
        }
    }
});

async function updateDatatableMachineLearningFraudDetector() {
    blockUI('#section-machinelearning-frauddetector-detectors-datatable');
    blockUI('#section-machinelearning-frauddetector-entitytypes-datatable');
    blockUI('#section-machinelearning-frauddetector-eventtypes-datatable');
    blockUI('#section-machinelearning-frauddetector-labels-datatable');
    blockUI('#section-machinelearning-frauddetector-outcomes-datatable');
    blockUI('#section-machinelearning-frauddetector-variables-datatable');

    await sdkcall("FraudDetector", "getDetectors", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-frauddetector-detectors-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.detectors.map(async (detector) => {
            return sdkcall("FraudDetector", "describeDetector", {
                detectorId: detector.detectorId
            }, true).then(async (data) => {
                await Promise.all(data.detectorVersionSummaries.map(async (detectorVersionSummary) => {
                    return sdkcall("FraudDetector", "getDetectorVersion", {
                        detectorId: detector.detectorId,
                        detectorVersionId: detectorVersionSummary.detectorVersionId
                    }, true).then(async (data) => {
                        if (data.status != "INACTIVE") {
                            $('#section-machinelearning-frauddetector-detectors-datatable').deferredBootstrapTable('append', [{
                                f2id: data.detectorId + " " + data.detectorVersionId,
                                f2type: 'frauddetector.detector',
                                f2data: data,
                                f2region: region,
                                id: data.detectorId,
                                description: data.description
                            }]);
                        }
                    });
                }));
            });
        }));
    }).catch(() => { });

    await sdkcall("FraudDetector", "getEntityTypes", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-frauddetector-entitytypes-datatable').deferredBootstrapTable('removeAll');

        data.entityTypes.forEach(entityType => {
            $('#section-machinelearning-frauddetector-entitytypes-datatable').deferredBootstrapTable('append', [{
                f2id: entityType.arn,
                f2type: 'frauddetector.entitytype',
                f2data: entityType,
                f2region: region,
                name: entityType.name,
                description: entityType.description
            }]);
        });
    }).catch(() => { });

    await sdkcall("FraudDetector", "getEventTypes", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-frauddetector-eventtypes-datatable').deferredBootstrapTable('removeAll');

        data.eventTypes.forEach(eventType => {
            $('#section-machinelearning-frauddetector-eventtypes-datatable').deferredBootstrapTable('append', [{
                f2id: eventType.arn,
                f2type: 'frauddetector.eventtype',
                f2data: eventType,
                f2region: region,
                name: eventType.name,
                description: eventType.description
            }]);
        });
    }).catch(() => { });

    await sdkcall("FraudDetector", "getLabels", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-frauddetector-labels-datatable').deferredBootstrapTable('removeAll');

        data.labels.forEach(label => {
            $('#section-machinelearning-frauddetector-labels-datatable').deferredBootstrapTable('append', [{
                f2id: label.arn,
                f2type: 'frauddetector.label',
                f2data: label,
                f2region: region,
                name: label.name,
                description: label.description
            }]);
        });
    }).catch(() => { });

    await sdkcall("FraudDetector", "getOutcomes", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-frauddetector-outcomes-datatable').deferredBootstrapTable('removeAll');

        data.outcomes.forEach(outcome => {
            $('#section-machinelearning-frauddetector-outcomes-datatable').deferredBootstrapTable('append', [{
                f2id: outcome.arn,
                f2type: 'frauddetector.outcome',
                f2data: outcome,
                f2region: region,
                name: outcome.name,
                description: outcome.description
            }]);
        });
    }).catch(() => { });

    await sdkcall("FraudDetector", "getVariables", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-frauddetector-variables-datatable').deferredBootstrapTable('removeAll');

        data.variables.forEach(variable => {
            $('#section-machinelearning-frauddetector-variables-datatable').deferredBootstrapTable('append', [{
                f2id: variable.arn,
                f2type: 'frauddetector.variable',
                f2data: variable,
                f2region: region,
                name: variable.name,
                description: variable.description
            }]);
        });
    }).catch(() => { });

    unblockUI('#section-machinelearning-frauddetector-detectors-datatable');
    unblockUI('#section-machinelearning-frauddetector-entitytypes-datatable');
    unblockUI('#section-machinelearning-frauddetector-eventtypes-datatable');
    unblockUI('#section-machinelearning-frauddetector-labels-datatable');
    unblockUI('#section-machinelearning-frauddetector-outcomes-datatable');
    unblockUI('#section-machinelearning-frauddetector-variables-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "frauddetector.detector") {
        reqParams.cfn['DetectorId'] = obj.data.detectorId;
        reqParams.cfn['Description'] = obj.data.description
        reqParams.cfn['DetectorVersionStatus'] = obj.data.status;
        reqParams.cfn['RuleExecutionMode'] = obj.data.ruleExecutionMode;
        if (obj.data.rules) {
            reqParams.cfn['Rules'] = [];
            obj.data.rules.forEach(rule => {
                reqParams.cfn['Rules'].push({
                    'RuleId': rule.ruleId,
                    'RuleVersion': rule.ruleVersion
                });
            });
        }
        reqParams.cfn['DetectorVersionStatus'] = obj.data.status;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('frauddetector', obj.id, 'AWS::FraudDetector::Detector'),
            'region': obj.region,
            'service': 'frauddetector',
            'type': 'AWS::FraudDetector::Detector',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Arn': obj.data.arn
                }
            }
        });
    } else if (obj.type == "frauddetector.entitytype") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('frauddetector', obj.id, 'AWS::FraudDetector::EntityType'),
            'region': obj.region,
            'service': 'frauddetector',
            'type': 'AWS::FraudDetector::EntityType',
            'options': reqParams
        });
    } else if (obj.type == "frauddetector.eventtype") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['EventVariables'] = obj.data.EventVariables;
        reqParams.cfn['Labels'] = obj.data.Labels;
        reqParams.cfn['EntityTypes'] = obj.data.EntityTypes;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('frauddetector', obj.id, 'AWS::FraudDetector::EventType'),
            'region': obj.region,
            'service': 'frauddetector',
            'type': 'AWS::FraudDetector::EventType',
            'options': reqParams
        });
    } else if (obj.type == "frauddetector.label") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('frauddetector', obj.id, 'AWS::FraudDetector::Label'),
            'region': obj.region,
            'service': 'frauddetector',
            'type': 'AWS::FraudDetector::Label',
            'options': reqParams
        });
    } else if (obj.type == "frauddetector.outcome") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('frauddetector', obj.id, 'AWS::FraudDetector::Outcome'),
            'region': obj.region,
            'service': 'frauddetector',
            'type': 'AWS::FraudDetector::Outcome',
            'options': reqParams
        });
    } else if (obj.type == "frauddetector.variable") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['DataSource'] = obj.data.dataSource;
        reqParams.cfn['DataType'] = obj.data.dataType;
        reqParams.cfn['DefaultValue'] = obj.data.defaultValue;
        reqParams.cfn['VariableType'] = obj.data.variableType;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('frauddetector', obj.id, 'AWS::FraudDetector::Variable'),
            'region': obj.region,
            'service': 'frauddetector',
            'type': 'AWS::FraudDetector::Variable',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
