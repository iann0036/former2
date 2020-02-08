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

    await sdkcall("Glue", "getDatabases", {
        // no params
    }, true).then(async (data) => {
        $('#section-analytics-glue-databases-datatable').bootstrapTable('removeAll');
        $('#section-analytics-glue-tables-datatable').bootstrapTable('removeAll');
        $('#section-analytics-glue-partitions-datatable').bootstrapTable('removeAll');

        await Promise.all(data.DatabaseList.map(database => {
            $('#section-analytics-glue-databases-datatable').bootstrapTable('append', [{
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
                    $('#section-analytics-glue-tables-datatable').bootstrapTable('append', [{
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
                            $('#section-analytics-glue-partitions-datatable').bootstrapTable('append', [{
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
        $('#section-analytics-glue-crawlers-datatable').bootstrapTable('removeAll');

        data.Crawlers.forEach(crawler => {
            $('#section-analytics-glue-crawlers-datatable').bootstrapTable('append', [{
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
        $('#section-analytics-glue-classifiers-datatable').bootstrapTable('removeAll');

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
            if (name) {
                $('#section-analytics-glue-classifiers-datatable').bootstrapTable('append', [{
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
        $('#section-analytics-glue-jobs-datatable').bootstrapTable('removeAll');

        data.Jobs.forEach(job => {
            $('#section-analytics-glue-jobs-datatable').bootstrapTable('append', [{
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
        $('#section-analytics-glue-triggers-datatable').bootstrapTable('removeAll');

        data.Triggers.forEach(trigger => {
            $('#section-analytics-glue-triggers-datatable').bootstrapTable('append', [{
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
        $('#section-analytics-glue-connections-datatable').bootstrapTable('removeAll');

        data.ConnectionList.forEach(connection => {
            $('#section-analytics-glue-connections-datatable').bootstrapTable('append', [{
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
        $('#section-analytics-glue-mltransforms-datatable').bootstrapTable('removeAll');

        data.Transforms.forEach(transform => {
            $('#section-analytics-glue-mltransforms-datatable').bootstrapTable('append', [{
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
        $('#section-analytics-glue-devendpoints-datatable').bootstrapTable('removeAll');

        data.DevEndpoints.forEach(devEndpoint => {
            $('#section-analytics-glue-devendpoints-datatable').bootstrapTable('append', [{
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
        $('#section-analytics-glue-workflows-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Workflows.map(workflow => {
            return sdkcall("Glue", "getWorkflow", {
                Name: workflow
            }, true).then((data) => {
                $('#section-analytics-glue-workflows-datatable').bootstrapTable('append', [{
                    f2id: data.Workflow.Name,
                    f2type: 'glue.workflow',
                    f2data: devEndpoint,
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
        $('#section-analytics-glue-securityconfigurations-datatable').bootstrapTable('removeAll');

        data.SecurityConfigurations.forEach(securityConfiguration => {
            $('#section-analytics-glue-securityconfigurations-datatable').bootstrapTable('append', [{
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
        $('#section-analytics-glue-datacatalogencryptionsettings-datatable').bootstrapTable('removeAll');

        $('#section-analytics-glue-datacatalogencryptionsettings-datatable').bootstrapTable('append', [{
            f2id: 'GlueDataCatalogEncryptionSettingsCurrentAccount',
            f2type: 'glue.datacatalogencryptionsettings',
            f2data: data,
            f2region: region,
            catalogid: "(current account)"
        }]);
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
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
