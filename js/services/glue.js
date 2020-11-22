/* ========================================================================== */
// Glue
/* ========================================================================== */

sections.push({
    'category': 'Analytics',
    'service': 'Glue',
    'resourcetypes': {
        'Databases': {
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
                        field: 'locationuri',
                        title: 'Location URI',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Tables': {
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
                        field: 'databasename',
                        title: 'Database Name',
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
                        field: 'tabletype',
                        title: 'Table Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Partitions': {
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
                        title: 'Table Name',
                        field: 'tablename',
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
                        field: 'databasename',
                        title: 'Database Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'values',
                        title: 'Values',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Crawlers': {
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
                        field: 'databasename',
                        title: 'Database Name',
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
                        field: 'tableprefix',
                        title: 'Table Prefix',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'version',
                        title: 'Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Classifiers': {
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
                    },
                    {
                        field: 'version',
                        title: 'Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Jobs': {
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
                        field: 'workertype',
                        title: 'Worker Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Triggers': {
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
                        field: 'schedule',
                        title: 'Schedule',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Connections': {
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
        'ML Transforms': {
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
        'Dev Endpoints': {
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
                        field: 'subnetid',
                        title: 'Subnet ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'availabilityzone',
                        title: 'Availability Zone',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Workflows': {
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
        'Security Configuration': {
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
        'Data Catalog Encryption Settings': {
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
                        title: 'Catalog ID',
                        field: 'catalogid',
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
        'Registries': {
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
                        formatter: dateFormatter,
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Schema Versions': {
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
                        title: 'Schema ARN',
                        field: 'schemaarn',
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
                        field: 'versionnumber',
                        title: 'Version Number',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Schema Version Metadata': {
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
                        title: 'Schema Version ID',
                        field: 'schemaversionid',
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
                        field: 'key',
                        title: 'Key',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableAnalyticsGlue() {
    blockUI('#section-analytics-glue-databases-datatable');
    blockUI('#section-analytics-glue-tables-datatable');
    blockUI('#section-analytics-glue-partitions-datatable');
    blockUI('#section-analytics-glue-crawlers-datatable');
    blockUI('#section-analytics-glue-classifiers-datatable');
    blockUI('#section-analytics-glue-jobs-datatable');
    blockUI('#section-analytics-glue-triggers-datatable');
    blockUI('#section-analytics-glue-connections-datatable');
    blockUI('#section-analytics-glue-mltransforms-datatable');
    blockUI('#section-analytics-glue-devendpoints-datatable');
    blockUI('#section-analytics-glue-workflows-datatable');
    blockUI('#section-analytics-glue-securityconfigurations-datatable');
    blockUI('#section-analytics-glue-datacatalogencryptionsettings-datatable');
    blockUI('#section-analytics-glue-registries-datatable');
    blockUI('#section-analytics-glue-schemas-datatable');
    blockUI('#section-analytics-glue-schemaversions-datatable');
    blockUI('#section-analytics-glue-schemaversionmetadata-datatable');

    await sdkcall("Glue", "getDatabases", {
        // no params
    }, true).then(async (data) => {
        $('#section-analytics-glue-databases-datatable').deferredBootstrapTable('removeAll');
        $('#section-analytics-glue-tables-datatable').deferredBootstrapTable('removeAll');
        $('#section-analytics-glue-partitions-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DatabaseList.map(database => {
            $('#section-analytics-glue-databases-datatable').deferredBootstrapTable('append', [{
                f2id: database.Name,
                f2type: 'glue.database',
                f2data: database,
                f2region: region,
                name: database.Name,
                description: database.Description,
                locationuri: database.LocationUri
            }]);

            return sdkcall("Glue", "getTables", {
                DatabaseName: database.Name
            }, true).then(async (data) => {
                await Promise.all(data.TableList.map(table => {
                    $('#section-analytics-glue-tables-datatable').deferredBootstrapTable('append', [{
                        f2id: table.Name,
                        f2type: 'glue.table',
                        f2data: table,
                        f2region: region,
                        name: table.Name,
                        databasename: table.DatabaseName,
                        description: table.Description,
                        tabletype: table.TableType
                    }]);

                    return sdkcall("Glue", "getPartitions", {
                        DatabaseName: database.Name,
                        TableName: table.Name
                    }, true).then((data) => {
                        data.Partitions.forEach(partition => {
                            $('#section-analytics-glue-partitions-datatable').deferredBootstrapTable('append', [{
                                f2id: JSON.stringify(partition), // TODO: Better id?
                                f2type: 'glue.partition',
                                f2data: partition,
                                f2region: region,
                                tablename: partition.TableName,
                                databasename: partition.DatabaseName,
                                values: partition.Values.join(", ")
                            }]);
                        });
                    });
                }));
            });
        }));
    }).catch(() => { });

    await sdkcall("Glue", "getCrawlers", {
        // no params
    }, true).then((data) => {
        $('#section-analytics-glue-crawlers-datatable').deferredBootstrapTable('removeAll');

        data.Crawlers.forEach(crawler => {
            $('#section-analytics-glue-crawlers-datatable').deferredBootstrapTable('append', [{
                f2id: crawler.Name,
                f2type: 'glue.crawler',
                f2data: crawler,
                f2region: region,
                name: crawler.Name,
                databasename: crawler.DatabaseName,
                description: crawler.Description,
                tableprefix: crawler.TablePrefix,
                version: crawler.Version
            }]);
        });
    }).catch(() => { });

    await sdkcall("Glue", "getClassifiers", {
        // no params
    }, true).then((data) => {
        $('#section-analytics-glue-classifiers-datatable').deferredBootstrapTable('removeAll');

        data.Classifiers.forEach(classifier => {
            var name = null;
            var version = null;
            var type = null;
            if (classifier.GrokClassifier) {
                name = classifier.GrokClassifier.Name;
                version = classifier.GrokClassifier.Version;
                type = "Grok";
            }
            if (classifier.XMLClassifier) {
                name = classifier.XMLClassifier.Name;
                version = classifier.GrokClassifier.Version;
                type = "XML";
            }
            if (classifier.JsonClassifier) {
                name = classifier.JsonClassifier.Name;
                version = classifier.GrokClassifier.Version;
                type = "JSON";
            }
            if (classifier.CsvClassifier) {
                name = classifier.CsvClassifier.Name;
                version = classifier.CsvClassifier.Version;
                type = "CSV";
            }
            if (name) {
                $('#section-analytics-glue-classifiers-datatable').deferredBootstrapTable('append', [{
                    f2id: name,
                    f2type: 'glue.classifier',
                    f2data: classifier,
                    f2region: region,
                    name: name,
                    version: version,
                    type: type
                }]);
            }
        });
    }).catch(() => { });

    await sdkcall("Glue", "getJobs", {
        // no params
    }, true).then((data) => {
        $('#section-analytics-glue-jobs-datatable').deferredBootstrapTable('removeAll');

        data.Jobs.forEach(job => {
            $('#section-analytics-glue-jobs-datatable').deferredBootstrapTable('append', [{
                f2id: job.Name,
                f2type: 'glue.job',
                f2data: job,
                f2region: region,
                name: job.Name,
                description: job.Description,
                workertype: job.WorkerType
            }]);
        });
    }).catch(() => { });

    await sdkcall("Glue", "getTriggers", {
        // no params
    }, true).then((data) => {
        $('#section-analytics-glue-triggers-datatable').deferredBootstrapTable('removeAll');

        data.Triggers.forEach(trigger => {
            $('#section-analytics-glue-triggers-datatable').deferredBootstrapTable('append', [{
                f2id: trigger.Name,
                f2type: 'glue.trigger',
                f2data: trigger,
                f2region: region,
                name: trigger.Name,
                type: trigger.Type,
                description: trigger.Description,
                schedule: trigger.Schedule
            }]);
        });
    }).catch(() => { });

    await sdkcall("Glue", "getConnections", {
        // no params
    }, true).then((data) => {
        $('#section-analytics-glue-connections-datatable').deferredBootstrapTable('removeAll');

        data.ConnectionList.forEach(connection => {
            $('#section-analytics-glue-connections-datatable').deferredBootstrapTable('append', [{
                f2id: connection.Name,
                f2type: 'glue.connection',
                f2data: connection,
                f2region: region,
                name: connection.Name,
                description: connection.Description,
                type: connection.ConnectionType
            }]);
        });
    }).catch(() => { });

    await sdkcall("Glue", "getMLTransforms", {
        // no params
    }, true).then((data) => {
        $('#section-analytics-glue-mltransforms-datatable').deferredBootstrapTable('removeAll');

        data.Transforms.forEach(transform => {
            $('#section-analytics-glue-mltransforms-datatable').deferredBootstrapTable('append', [{
                f2id: transform.TransformId,
                f2type: 'glue.mltransform',
                f2data: transform,
                f2region: region,
                id: transform.TransformId,
                description: transform.Description,
                name: transform.Name,
                creationtime: transform.CreatedOn
            }]);
        });
    }).catch(() => { });

    await sdkcall("Glue", "getDevEndpoints", {
        // no params
    }, true).then((data) => {
        $('#section-analytics-glue-devendpoints-datatable').deferredBootstrapTable('removeAll');

        data.DevEndpoints.forEach(devEndpoint => {
            $('#section-analytics-glue-devendpoints-datatable').deferredBootstrapTable('append', [{
                f2id: devEndpoint.EndpointName,
                f2type: 'glue.devendpoint',
                f2data: devEndpoint,
                f2region: region,
                name: devEndpoint.EndpointName,
                subnetid: devEndpoint.SubnetId,
                availabilityzone: devEndpoint.AvailabilityZone
            }]);
        });
    }).catch(() => { });

    await sdkcall("Glue", "listWorkflows", {
        // no params
    }, true).then(async (data) => {
        $('#section-analytics-glue-workflows-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Workflows.map(workflow => {
            return sdkcall("Glue", "getWorkflow", {
                Name: workflow
            }, true).then((data) => {
                $('#section-analytics-glue-workflows-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Workflow.Name,
                    f2type: 'glue.workflow',
                    f2data: data.Workflow,
                    f2region: region,
                    name: data.Workflow.Name,
                    description: data.Workflow.Description,
                    creationtime: data.Workflow.CreatedOn
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("Glue", "getSecurityConfigurations", {
        // no params
    }, true).then((data) => {
        $('#section-analytics-glue-securityconfigurations-datatable').deferredBootstrapTable('removeAll');

        data.SecurityConfigurations.forEach(securityConfiguration => {
            $('#section-analytics-glue-securityconfigurations-datatable').deferredBootstrapTable('append', [{
                f2id: securityConfiguration.EndpointName,
                f2type: 'glue.securityconfiguration',
                f2data: securityConfiguration,
                f2region: region,
                name: securityConfiguration.Name,
                creationtime: devEndpoint.CreatedTimeStamp
            }]);
        });
    }).catch(() => { });

    await sdkcall("Glue", "getDataCatalogEncryptionSettings", {
        // no params
    }, true).then((data) => {
        $('#section-analytics-glue-datacatalogencryptionsettings-datatable').deferredBootstrapTable('removeAll');

        if (
            data.DataCatalogEncryptionSettings.EncryptionAtRest.CatalogEncryptionMode != "DISABLED" ||
            data.DataCatalogEncryptionSettings.ConnectionPasswordEncryption.ReturnConnectionPasswordEncrypted != false
        ) {
            $('#section-analytics-glue-datacatalogencryptionsettings-datatable').deferredBootstrapTable('append', [{
                f2id: 'GlueDataCatalogEncryptionSettingsCurrentAccount',
                f2type: 'glue.datacatalogencryptionsettings',
                f2data: data,
                f2region: region,
                catalogid: "(current account)"
            }]);
        }
    }).catch(() => { });

    await sdkcall("Glue", "listRegistries", {
        // no params
    }, false).then(async (data) => {
        $('#section-analytics-glue-registries-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Registries.map(registry => {
            return sdkcall("Glue", "getRegistry", {
                RegistryId: {
                    'RegistryName': registry.RegistryName
                }
            }, true).then((data) => {
                $('#section-analytics-glue-registries-datatable').deferredBootstrapTable('append', [{
                    f2id: data.RegistryArn,
                    f2type: 'glue.registry',
                    f2data: data,
                    f2region: region,
                    name: data.RegistryName,
                    description: data.Description
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("Glue", "listSchemas", {
        // no params
    }, false).then(async (data) => {
        $('#section-analytics-glue-schemas-datatable').deferredBootstrapTable('removeAll');
        $('#section-analytics-glue-schemaversions-datatable').deferredBootstrapTable('removeAll');
        $('#section-analytics-glue-schemaversionmetadata-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Schemas.map(async (schema) => {
            await sdkcall("Glue", "getSchema", {
                SchemaId: {
                    'SchemaArn': schema.SchemaArn
                }
            }, true).then(async (data) => {
                await sdkcall("Glue", "getSchemaVersion", {
                    SchemaId: {
                        'SchemaArn': schema.SchemaArn
                    }
                }, true).then(async (schemadata) => {
                    data['SchemaDefinition'] = schemadata.SchemaDefinition;
                });

                $('#section-analytics-glue-schemas-datatable').deferredBootstrapTable('append', [{
                    f2id: data.SchemaArn,
                    f2type: 'glue.schema',
                    f2data: data,
                    f2region: region,
                    name: data.SchemaName,
                    description: data.Description
                }]);
            });

            return sdkcall("Glue", "listSchemaVersions", {
                SchemaId: {
                    'SchemaArn': schema.SchemaArn
                }
            }, true).then(async (data) => {
                await Promise.all(data.Schemas.map(async (schemaversion) => {
                    await sdkcall("Glue", "getSchemaVersion", {
                        SchemaId: {
                            'SchemaArn': schemaversion.SchemaArn
                        },
                        SchemaVersionId: schemaversion.SchemaVersionId
                    }, true).then(async (data) => {
                        $('#section-analytics-glue-schemaversions-datatable').deferredBootstrapTable('append', [{
                            f2id: data.SchemaArn + " Version " + data.SchemaVersionId,
                            f2type: 'glue.schemaversion',
                            f2data: data,
                            f2region: region,
                            schemaarn: data.SchemaArn,
                            versionnumber: data.VersionNumber
                        }]);
                    });

                    return sdkcall("Glue", "querySchemaVersionMetadata", {
                        SchemaId: {
                            'SchemaArn': schemaversion.SchemaArn
                        },
                        SchemaVersionId: schemaversion.SchemaVersionId
                    }, true).then(async (data) => {
                        Object.keys(data.MetadataInfoMap).forEach(k => {
                            $('#section-analytics-glue-schemaversionmetadata-datatable').deferredBootstrapTable('append', [{
                                f2id: data.SchemaVersionId + " Metadata " + k,
                                f2type: 'glue.schemaversion',
                                f2data: {
                                    'Key': k,
                                    'Value': data.MetadataInfoMap[k].MetadataValue,
                                    'SchemaVersionId': data.SchemaVersionId
                                },
                                f2region: region,
                                schemaversionid: data.SchemaVersionId,
                                key: data.k
                            }]);
                        });
                    });
                }));
            });
        }));
    }).catch(() => { });

    unblockUI('#section-analytics-glue-databases-datatable');
    unblockUI('#section-analytics-glue-tables-datatable');
    unblockUI('#section-analytics-glue-partitions-datatable');
    unblockUI('#section-analytics-glue-crawlers-datatable');
    unblockUI('#section-analytics-glue-classifiers-datatable');
    unblockUI('#section-analytics-glue-jobs-datatable');
    unblockUI('#section-analytics-glue-triggers-datatable');
    unblockUI('#section-analytics-glue-connections-datatable');
    unblockUI('#section-analytics-glue-mltransforms-datatable');
    unblockUI('#section-analytics-glue-devendpoints-datatable');
    unblockUI('#section-analytics-glue-workflows-datatable');
    unblockUI('#section-analytics-glue-securityconfigurations-datatable');
    unblockUI('#section-analytics-glue-datacatalogencryptionsettings-datatable');
    unblockUI('#section-analytics-glue-registries-datatable');
    unblockUI('#section-analytics-glue-schemas-datatable');
    unblockUI('#section-analytics-glue-schemaversions-datatable');
    unblockUI('#section-analytics-glue-schemaversionmetadata-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "glue.database") {
        reqParams.cfn['DatabaseInput'] = {
            'Name': obj.data.Name,
            'Description': obj.data.Description,
            'LocationUri': obj.data.LocationUri,
            'Parameters': obj.data.Parameters
        };
        reqParams.cfn['CatalogId'] = "!Ref \"AWS::AccountId\"";

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('glue', obj.id, 'AWS::Glue::Database'),
            'region': obj.region,
            'service': 'glue',
            'type': 'AWS::Glue::Database',
            'options': reqParams
        });
    } else if (obj.type == "glue.table") {
        reqParams.cfn['DatabaseName'] = obj.data.DatabaseName;
        reqParams.cfn['CatalogId'] = "!Ref \"AWS::AccountId\"";
        reqParams.cfn['TableInput'] = {
            'Owner': obj.data.Owner,
            'ViewOriginalText': obj.data.ViewOriginalText,
            'Description': obj.data.Description,
            'TableType': obj.data.TableType,
            'Parameters': obj.data.Parameters,
            'ViewExpandedText': obj.data.ViewExpandedText,
            'StorageDescriptor': obj.data.StorageDescriptor,
            'PartitionKeys': obj.data.PartitionKeys,
            'Retention': obj.data.Retention,
            'Name': obj.data.Name
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('glue', obj.id, 'AWS::Glue::Table'),
            'region': obj.region,
            'service': 'glue',
            'type': 'AWS::Glue::Table',
            'options': reqParams
        });
    } else if (obj.type == "glue.partition") {
        reqParams.cfn['TableName'] = obj.data.TableName;
        reqParams.cfn['DatabaseName'] = obj.data.DatabaseName;
        reqParams.cfn['CatalogId'] = "!Ref \"AWS::AccountId\"";
        reqParams.cfn['PartitionInput'] = {
            'Parameters': obj.data.Parameters,
            'StorageDescriptor': obj.data.StorageDescriptor
        };

        /*
        TODO:
        PartitionInput:
            Values
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('glue', obj.id, 'AWS::Glue::Partition'),
            'region': obj.region,
            'service': 'glue',
            'type': 'AWS::Glue::Partition',
            'options': reqParams
        });
    } else if (obj.type == "glue.crawler") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Role'] = obj.data.Role;
        if (obj.data.Targets) {
            reqParams.cfn['Targets'] = {
                'S3Targets': obj.data.Targets.S3Targets,
                'JdbcTargets': obj.data.Targets.JdbcTargets,
                'DynamoDBTargets': obj.data.Targets.DynamoDBTargets,
                'CatalogTargets': obj.data.Targets.CatalogTargets
            };
        }
        reqParams.cfn['DatabaseName'] = obj.data.DatabaseName;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Classifiers'] = obj.data.Classifiers;
        reqParams.cfn['SchemaChangePolicy'] = obj.data.SchemaChangePolicy;
        reqParams.cfn['TablePrefix'] = obj.data.TablePrefix;
        if (obj.data.Schedule) {
            reqParams.cfn['Schedule'] = {
                'ScheduleExpression': obj.data.Schedule.ScheduleExpression
            };
        }
        reqParams.cfn['Configuration'] = obj.data.Configuration;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('glue', obj.id, 'AWS::Glue::Crawler'),
            'region': obj.region,
            'service': 'glue',
            'type': 'AWS::Glue::Crawler',
            'options': reqParams
        });
    } else if (obj.type == "glue.classifier") {
        if (obj.data.GrokClassifier) {
            reqParams.cfn['GrokClassifier'] = {
                'CustomPatterns': obj.data.GrokClassifier.CustomPatterns,
                'GrokPattern': obj.data.GrokClassifier.GrokPattern,
                'Classification': obj.data.GrokClassifier.Classification,
                'Name': obj.data.GrokClassifier.Name
            };
        }
        if (obj.data.XMLClassifier) {
            reqParams.cfn['XMLClassifier'] = {
                'RowTag': obj.data.XMLClassifier.RowTag,
                'Classification': obj.data.XMLClassifier.Classification,
                'Name': obj.data.XMLClassifier.Name
            };
        }
        if (obj.data.JsonClassifier) {
            reqParams.cfn['JsonClassifier'] = {
                'JsonPath': obj.data.JsonClassifier.JsonPath,
                'Name': obj.data.JsonClassifier.Name
            };
        }
        if (obj.data.CsvClassifier) {
            reqParams.cfn['CsvClassifier'] = {
                'Name': obj.data.CsvClassifier.Name,
                'AllowSingleColumn': obj.data.CsvClassifier.AllowSingleColumn,
                'ContainsHeader': obj.data.CsvClassifier.ContainsHeader,
                'Delimiter': obj.data.CsvClassifier.Delimiter,
                'DisableValueTrimming': obj.data.CsvClassifier.DisableValueTrimming,
                'Header': obj.data.CsvClassifier.Header,
                'QuoteSymbol': obj.data.CsvClassifier.QuoteSymbol
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('glue', obj.id, 'AWS::Glue::Classifier'),
            'region': obj.region,
            'service': 'glue',
            'type': 'AWS::Glue::Classifier',
            'options': reqParams
        });
    } else if (obj.type == "glue.job") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['LogUri'] = obj.data.LogUri;
        reqParams.cfn['Role'] = obj.data.Role;
        reqParams.cfn['ExecutionProperty'] = obj.data.ExecutionProperty;
        reqParams.cfn['Command'] = obj.data.Command;
        reqParams.cfn['DefaultArguments'] = obj.data.DefaultArguments;
        reqParams.cfn['Connections'] = obj.data.Connections;
        reqParams.cfn['MaxRetries'] = obj.data.MaxRetries;
        reqParams.cfn['AllocatedCapacity'] = obj.data.AllocatedCapacity;
        reqParams.cfn['Timeout'] = obj.data.Timeout;
        reqParams.cfn['NotificationProperty'] = obj.data.NotificationProperty;
        reqParams.cfn['GlueVersion'] = obj.data.GlueVersion;
        reqParams.cfn['MaxCapacity'] = obj.data.MaxCapacity;
        reqParams.cfn['NumberOfWorkers'] = obj.data.NumberOfWorkers;
        reqParams.cfn['WorkerType'] = obj.data.WorkerType;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('glue', obj.id, 'AWS::Glue::Job'),
            'region': obj.region,
            'service': 'glue',
            'type': 'AWS::Glue::Job',
            'options': reqParams
        });
    } else if (obj.type == "glue.trigger") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Schedule'] = obj.data.Schedule;
        reqParams.cfn['WorkflowName'] = obj.data.WorkflowName;
        reqParams.cfn['StartOnCreation'] = true;
        if (obj.data.actions) {
            reqParams.cfn['Actions'] = [];
            obj.data.actions.forEach(action => {
                reqParams.cfn['Actions'].push({
                    'JobName': action.JobName,
                    'Arguments': action.Arguments
                });
            });
        }
        if (obj.data.Predicate) {
            var conditions = null;
            if (obj.data.Predicate.Conditions) {
                conditions = [];
                obj.data.Predicate.Conditions.forEach(condition => {
                    if (condition.State == "SUCCEEDED") {
                        conditions.push({
                            'LogicalOperator': condition.LogicalOperator,
                            'JobName': condition.JobName,
                            'State': 'SUCCEEDED'
                            //'State': condition.State
                        });
                    }
                });
            }
            reqParams.cfn['Predicate'] = {
                'Logical': obj.data.Predicate.Logical,
                'Conditions': conditions
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('glue', obj.id, 'AWS::Glue::Trigger'),
            'region': obj.region,
            'service': 'glue',
            'type': 'AWS::Glue::Trigger',
            'options': reqParams
        });
    } else if (obj.type == "glue.connection") {
        reqParams.cfn['ConnectionInput'] = {
            'Description': obj.data.Description,
            'ConnectionType': obj.data.ConnectionType,
            'MatchCriteria': obj.data.MatchCriteria,
            'PhysicalConnectionRequirements': obj.data.PhysicalConnectionRequirements,
            'ConnectionProperties': obj.data.ConnectionProperties,
            'Name': obj.data.Name
        };
        reqParams.cfn['CatalogId'] = "!Ref \"AWS::AccountId\"";

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('glue', obj.id, 'AWS::Glue::Connection'),
            'region': obj.region,
            'service': 'glue',
            'type': 'AWS::Glue::Connection',
            'options': reqParams
        });
    } else if (obj.type == "glue.devendpoint") {
        reqParams.cfn['EndpointName'] = obj.data.EndpointName;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['SecurityGroupIds'] = obj.data.SecurityGroupIds;
        reqParams.cfn['SubnetId'] = obj.data.SubnetId;
        reqParams.cfn['NumberOfNodes'] = obj.data.NumberOfNodes;
        reqParams.cfn['ExtraPythonLibsS3Path'] = obj.data.ExtraPythonLibsS3Path;
        reqParams.cfn['ExtraJarsS3Path'] = obj.data.ExtraJarsS3Path;
        reqParams.cfn['PublicKey'] = obj.data.PublicKey;
        reqParams.cfn['PublicKeys'] = obj.data.PublicKeys;
        reqParams.cfn['WorkerType'] = obj.data.WorkerType;
        reqParams.cfn['NumberOfWorkers'] = obj.data.NumberOfWorkers;
        reqParams.cfn['GlueVersion'] = obj.data.GlueVersion;
        reqParams.cfn['Arguments'] = obj.data.Arguments;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('glue', obj.id, 'AWS::Glue::DevEndpoint'),
            'region': obj.region,
            'service': 'glue',
            'type': 'AWS::Glue::DevEndpoint',
            'options': reqParams
        });
    } else if (obj.type == "glue.securityconfiguration") {
        reqParams.cfn['Name'] = obj.data.Name;
        if (obj.data.EncryptionConfiguration) {
            reqParams.cfn['EncryptionConfiguration'] = {
                'CloudWatchEncryption': obj.data.CloudWatchEncryption,
                'JobBookmarksEncryption': obj.data.JobBookmarksEncryption,
                'S3Encryptions': obj.data.S3Encryption
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('glue', obj.id, 'AWS::Glue::SecurityConfiguration'),
            'region': obj.region,
            'service': 'glue',
            'type': 'AWS::Glue::SecurityConfiguration',
            'options': reqParams
        });
    } else if (obj.type == "glue.datacatalogencryptionsettings") {
        reqParams.cfn['CatalogId'] = "!Ref \"AWS::AccountId\"";
        if (obj.data.DataCatalogEncryptionSettings) {
            var connectionpasswordencryption = null;
            if (obj.data.DataCatalogEncryptionSettings.ConnectionPasswordEncryption) {
                connectionpasswordencryption = {
                    'ReturnConnectionPasswordEncrypted': obj.data.DataCatalogEncryptionSettings.ConnectionPasswordEncryption.ReturnConnectionPasswordEncrypted,
                    'KmsKeyId': obj.data.DataCatalogEncryptionSettings.ConnectionPasswordEncryption.AwsKmsKeyId
                };
            }
            reqParams.cfn['DataCatalogEncryptionSettings'] = {
                'EncryptionAtRest': obj.data.DataCatalogEncryptionSettings.EncryptionAtRest,
                'ConnectionPasswordEncryption': connectionpasswordencryption
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('glue', obj.id, 'AWS::Glue::DataCatalogEncryptionSettings'),
            'region': obj.region,
            'service': 'glue',
            'type': 'AWS::Glue::DataCatalogEncryptionSettings',
            'options': reqParams
        });
    } else if (obj.type == "glue.mltransform") {
        reqParams.cfn['Description'] = obj.data.Description;
        if (obj.data.InputRecordTables) {
            reqParams.cfn['InputRecordTables'] = {
                'GlueTables': obj.data.InputRecordTables
            };
        }
        reqParams.cfn['MaxCapacity'] = obj.data.MaxCapacity;
        reqParams.cfn['MaxRetries'] = obj.data.MaxRetries;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['NumberOfWorkers'] = obj.data.NumberOfWorkers;
        reqParams.cfn['Role'] = obj.data.Role;
        reqParams.cfn['Timeout'] = obj.data.Timeout;
        reqParams.cfn['TransformParameters'] = obj.data.Parameters;
        reqParams.cfn['WorkerType'] = obj.data.WorkerType;
        reqParams.cfn['GlueVersion'] = obj.data.GlueVersion;

        /*
        TODO:
        Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('glue', obj.id, 'AWS::Glue::MLTransform'),
            'region': obj.region,
            'service': 'glue',
            'type': 'AWS::Glue::MLTransform',
            'options': reqParams
        });
    } else if (obj.type == "glue.workflow") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['DefaultRunProperties'] = obj.data.DefaultRunProperties;

        /*
        TODO:
        Tags: Json
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('glue', obj.id, 'AWS::Glue::Workflow'),
            'region': obj.region,
            'service': 'glue',
            'type': 'AWS::Glue::Workflow',
            'options': reqParams
        });
    } else if (obj.type == "glue.registry") {
        reqParams.cfn['Name'] = obj.data.RegistryName;
        reqParams.cfn['Description'] = obj.data.Description;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('glue', obj.id, 'AWS::Glue::Registry'),
            'region': obj.region,
            'service': 'glue',
            'type': 'AWS::Glue::Registry',
            'options': reqParams
        });
    } else if (obj.type == "glue.schema") {
        reqParams.cfn['Name'] = obj.data.SchemaName;
        reqParams.cfn['Registry'] = {
            'Name': obj.data.RegistryName,
            'Arn': obj.data.RegistryArn
        };
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['DataFormat'] = obj.data.DataFormat;
        reqParams.cfn['Compatibility'] = obj.data.Compatibility;
        reqParams.cfn['SchemaDefinition'] = obj.data.SchemaDefinition;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('glue', obj.id, 'AWS::Glue::Schema'),
            'region': obj.region,
            'service': 'glue',
            'type': 'AWS::Glue::Schema',
            'options': reqParams
        });
    } else if (obj.type == "glue.schemaversion") {
        reqParams.cfn['Schema'] = {
            'SchemaArn': obj.data.SchemaArn
        };
        reqParams.cfn['SchemaDefinition'] = obj.data.SchemaDefinition;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('glue', obj.id, 'AWS::Glue::SchemaVersion'),
            'region': obj.region,
            'service': 'glue',
            'type': 'AWS::Glue::SchemaVersion',
            'options': reqParams
        });
    } else if (obj.type == "glue.schemaversionmetadata") {
        reqParams.cfn['Key'] = obj.data.Key;
        reqParams.cfn['Value'] = obj.data.Value;
        reqParams.cfn['SchemaVersionId'] = obj.data.SchemaVersionId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('glue', obj.id, 'AWS::Glue::SchemaVersionMetadata'),
            'region': obj.region,
            'service': 'glue',
            'type': 'AWS::Glue::SchemaVersionMetadata',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
