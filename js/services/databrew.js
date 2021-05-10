/* ========================================================================== */
// DataBrew
/* ========================================================================== */

sections.push({
    'category': 'Analytics',
    'service': 'DataBrew',
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
                        field: 'xsource',
                        title: 'Source',
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
        'Projects': {
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
                        field: 'dataset',
                        title: 'Dataset',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'recipe',
                        title: 'Recipe',
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
        'Recipes': {
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
                        field: 'projectname',
                        title: 'Project Name',
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
                        field: 'version',
                        title: 'Version',
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
                        field: 'projectname',
                        title: 'Project Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'datasetname',
                        title: 'Dataset Name',
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
        'Schedules': {
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
                        field: 'cronexpression',
                        title: 'Cron Expression',
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
        }
    }
});

async function updateDatatableAnalyticsDataBrew() {
    blockUI('#section-analytics-databrew-datasets-datatable');
    blockUI('#section-analytics-databrew-projects-datatable');
    blockUI('#section-analytics-databrew-recipes-datatable');
    blockUI('#section-analytics-databrew-jobs-datatable');
    blockUI('#section-analytics-databrew-schedules-datatable');

    await sdkcall("DataBrew", "listDatasets", {
        // no params
    }, false).then(async (data) => {
        $('#section-analytics-databrew-datasets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Datasets.map(dataset => {
            return sdkcall("DataBrew", "describeDataset", {
                Name: dataset.Name
            }, true).then(async (data) => {
                $('#section-analytics-databrew-datasets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ResourceArn,
                    f2type: 'databrew.dataset',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    xsource: data.Source,
                    creationtime: data.CreateDate
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("DataBrew", "listProjects", {
        // no params
    }, false).then(async (data) => {
        $('#section-analytics-databrew-projects-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Projects.map(project => {
            return sdkcall("DataBrew", "describeProject", {
                Name: project.Name
            }, true).then(async (data) => {
                $('#section-analytics-databrew-projects-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ResourceArn,
                    f2type: 'databrew.project',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    dataset: data.DatasetName,
                    recipe: data.RecipeName,
                    creationtime: data.CreateDate
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("DataBrew", "listRecipes", {
        // no params
    }, false).then(async (data) => {
        $('#section-analytics-databrew-recipes-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Recipes.map(recipe => {
            return sdkcall("DataBrew", "describeRecipe", {
                Name: recipe.Name
            }, true).then(async (data) => {
                $('#section-analytics-databrew-recipes-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ResourceArn,
                    f2type: 'databrew.recipe',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    projectname: data.ProjectName,
                    description: data.Description,
                    version: data.RecipeVersion,
                    creationtime: data.CreateDate
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("DataBrew", "listJobs", {
        // no params
    }, false).then(async (data) => {
        $('#section-analytics-databrew-jobs-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Jobs.map(job => {
            return sdkcall("DataBrew", "describeJob", {
                Name: job.Name
            }, true).then(async (data) => {
                $('#section-analytics-databrew-jobs-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ResourceArn,
                    f2type: 'databrew.job',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    projectname: data.ProjectName,
                    datasetname: data.DatasetName,
                    type: data.Type,
                    creationtime: data.CreateDate
                }]);
            });
        }));
    }).catch(() => { });

    await sdkcall("DataBrew", "listSchedules", {
        // no params
    }, false).then(async (data) => {
        $('#section-analytics-databrew-schedules-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Schedules.map(schedule => {
            return sdkcall("DataBrew", "describeSchedule", {
                Name: schedule.Name
            }, true).then(async (data) => {
                $('#section-analytics-databrew-schedules-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ResourceArn,
                    f2type: 'databrew.schedule',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    cronexpression: data.CronExpression,
                    creationtime: data.CreateDate
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-analytics-databrew-datasets-datatable');
    unblockUI('#section-analytics-databrew-projects-datatable');
    unblockUI('#section-analytics-databrew-recipes-datatable');
    unblockUI('#section-analytics-databrew-jobs-datatable');
    unblockUI('#section-analytics-databrew-schedules-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "databrew.dataset") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Input'] = obj.data.Input;
        reqParams.cfn['FormatOptions'] = obj.data.FormatOptions;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.Tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.Tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('databrew', obj.id, 'AWS::DataBrew::Dataset'),
            'region': obj.region,
            'service': 'databrew',
            'type': 'AWS::DataBrew::Dataset',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name
            }
        });
    } else if (obj.type == "databrew.project") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['DatasetName'] = obj.data.DatasetName;
        reqParams.cfn['RecipeName'] = obj.data.RecipeName;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['Sample'] = obj.data.Sample;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.Tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.Tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('databrew', obj.id, 'AWS::DataBrew::Project'),
            'region': obj.region,
            'service': 'databrew',
            'type': 'AWS::DataBrew::Project',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name
            }
        });
    } else if (obj.type == "databrew.recipe") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['ProjectName'] = obj.data.ProjectName;
        reqParams.cfn['Version'] = obj.data.RecipeVersion;
        reqParams.cfn['Steps'] = obj.data.Steps;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.Tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.Tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('databrew', obj.id, 'AWS::DataBrew::Recipe'),
            'region': obj.region,
            'service': 'databrew',
            'type': 'AWS::DataBrew::Recipe',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name
            }
        });
    } else if (obj.type == "databrew.job") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['ProjectName'] = obj.data.ProjectName;
        reqParams.cfn['DatasetName'] = obj.data.DatasetName;
        reqParams.cfn['EncryptionKeyArn'] = obj.data.EncryptionKeyArn;
        reqParams.cfn['EncryptionMode'] = obj.data.EncryptionMode;
        reqParams.cfn['Type'] = obj.data.Type;
        reqParams.cfn['LogSubscription'] = obj.data.LogSubscription;
        reqParams.cfn['MaxCapacity'] = obj.data.MaxCapacity;
        reqParams.cfn['MaxRetries'] = obj.data.MaxRetries;
        reqParams.cfn['Timeout'] = obj.data.Timeout;
        reqParams.cfn['Recipe'] = obj.data.RecipeReference;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['Outputs'] = obj.data.Outputs;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.Tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.Tags[tagKey]
                });
            });
        }

        /*
        TODO
        OutputLocation: Json
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('databrew', obj.id, 'AWS::DataBrew::Job'),
            'region': obj.region,
            'service': 'databrew',
            'type': 'AWS::DataBrew::Job',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name
            }
        });
    } else if (obj.type == "databrew.schedule") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['JobNames'] = obj.data.JobNames;
        reqParams.cfn['CronExpression'] = obj.data.CronExpression;
        if (obj.data.Tags) {
            reqParams.cfn['Tags'] = [];
            Object.keys(obj.data.Tags).forEach(tagKey => {
                reqParams.cfn['Tags'].push({
                    'Key': tagKey,
                    'Value': obj.data.Tags[tagKey]
                });
            });
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('databrew', obj.id, 'AWS::DataBrew::Schedule'),
            'region': obj.region,
            'service': 'databrew',
            'type': 'AWS::DataBrew::Schedule',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name
            }
        });
    } else {
        return false;
    }

    return true;
});
