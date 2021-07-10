/* ========================================================================== */
// SageMaker
/* ========================================================================== */

sections.push({
    'category': 'Machine Learning',
    'service': 'SageMaker',
    'resourcetypes': {
        'Models': {
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
        'Endpoints': {
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
                        field: 'endpointconfigname',
                        title: 'Endpoint Config Name',
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
        'Endpoint Configs': {
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
                        field: 'kmskeyid',
                        title: 'KMS Key ID',
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
        'Notebook Instances': {
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
                        field: 'url',
                        title: 'URL',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'instancetype',
                        title: 'Instance Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'subnetid',
                        title: 'Subnet ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'volumesize',
                        title: 'Volume Size',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Notebook Instance Lifecycle Configs': {
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
        'Application Auto Scaling Scalable Targets': {
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
                        title: 'Resource ID',
                        field: 'resourceid',
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
                        field: 'scalabledimension',
                        title: 'Scalable Dimension',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'mincapacity',
                        title: 'Min Capacity',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'maxcapacity',
                        title: 'Max Capacity',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Application Auto Scaling Scaling Policies': {
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
                        title: 'Resource ID',
                        field: 'resourceid',
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
                        field: 'policyname',
                        title: 'Policy Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'scalabledimension',
                        title: 'Scalable Dimension',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'policytype',
                        title: 'Policy Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Code Repositories': {
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
        'Work Teams': {
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
        'Monitoring Schedules': {
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
                        field: 'arn',
                        title: 'ARN',
                        sortable: true,
                        editable: true,
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
        'Pipelines': {
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
                        field: 'displayname',
                        title: 'Display Name',
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
        'Device Fleets': {
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
        'Devices': {
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
        'Model Package Groups': {
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
        'Data Quality Job Definitions': {
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
                        field: 'rolearn',
                        title: 'Role ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Model Bias Job Definitions': {
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
                        field: 'rolearn',
                        title: 'Role ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Model Explainability Job Definitions': {
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
                        field: 'rolearn',
                        title: 'Role ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Model Quality Job Definitions': {
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
                        field: 'rolearn',
                        title: 'Role ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
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
                        field: 'authmode',
                        title: 'Auth Mode',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'User Profiles': {
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
                        field: 'domainid',
                        title: 'Domain ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Apps': {
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
                        field: 'domainid',
                        title: 'Domain ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'userprofilename',
                        title: 'User Profile Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'App Image Configs': {
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
        'Images': {
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
                        field: 'displayname',
                        title: 'Display Name',
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
        'Image Versions': {
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
        'Feature Groups': {
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

async function updateDatatableMachineLearningSageMaker() {
    blockUI('#section-machinelearning-sagemaker-models-datatable');
    blockUI('#section-machinelearning-sagemaker-endpoints-datatable');
    blockUI('#section-machinelearning-sagemaker-endpointconfigs-datatable');
    blockUI('#section-machinelearning-sagemaker-notebookinstances-datatable');
    blockUI('#section-machinelearning-sagemaker-notebookinstancelifecycleconfigs-datatable');
    blockUI('#section-machinelearning-sagemaker-applicationautoscalingscalabletargets-datatable');
    blockUI('#section-machinelearning-sagemaker-applicationautoscalingscalingpolicies-datatable');
    blockUI('#section-machinelearning-sagemaker-coderepositories-datatable');
    blockUI('#section-machinelearning-sagemaker-workteams-datatable');
    blockUI('#section-machinelearning-sagemaker-monitoringschedules-datatable');
    blockUI('#section-machinelearning-sagemaker-projects-datatable');
    blockUI('#section-machinelearning-sagemaker-pipelines-datatable');
    blockUI('#section-machinelearning-sagemaker-devicefleets-datatable');
    blockUI('#section-machinelearning-sagemaker-devices-datatable');
    blockUI('#section-machinelearning-sagemaker-modelpackagegroups-datatable');
    blockUI('#section-machinelearning-sagemaker-dataqualityjobdefinitions-datatable');
    blockUI('#section-machinelearning-sagemaker-modelbiasjobdefinitions-datatable');
    blockUI('#section-machinelearning-sagemaker-modelexplainabilityjobdefinitions-datatable');
    blockUI('#section-machinelearning-sagemaker-modelqualityjobdefinitions-datatable');
    blockUI('#section-machinelearning-sagemaker-domains-datatable');
    blockUI('#section-machinelearning-sagemaker-userprofiles-datatable');
    blockUI('#section-machinelearning-sagemaker-apps-datatable');
    blockUI('#section-machinelearning-sagemaker-appimageconfigs-datatable');
    blockUI('#section-machinelearning-sagemaker-images-datatable');
    blockUI('#section-machinelearning-sagemaker-imageversions-datatable');
    blockUI('#section-machinelearning-sagemaker-featuregroups-datatable');

    await sdkcall("SageMaker", "listCodeRepositories", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-sagemaker-coderepositories-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.CodeRepositorySummaryList.map(coderepository => {
            return sdkcall("SageMaker", "describeCodeRepository", {
                CodeRepositoryName: coderepository.CodeRepositoryName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-coderepositories-datatable').deferredBootstrapTable('append', [{
                    f2id: data.CodeRepositoryName,
                    f2type: 'sagemaker.coderepository',
                    f2data: data,
                    f2region: region,
                    name: data.CodeRepositoryName,
                    creationtime: data.CreationTime
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-coderepositories-datatable');
    });

    await sdkcall("SageMaker", "listModels", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-sagemaker-models-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Models.map(model => {
            return sdkcall("SageMaker", "describeModel", {
                ModelName: model.ModelName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-models-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ModelName,
                    f2type: 'sagemaker.model',
                    f2data: data,
                    f2region: region,
                    name: data.ModelName,
                    creationtime: data.CreationTime
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-models-datatable');
    });

    await sdkcall("SageMaker", "listEndpoints", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-sagemaker-endpoints-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Endpoints.map(endpoint => {
            return sdkcall("SageMaker", "describeEndpoint", {
                EndpointName: endpoint.EndpointName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-endpoints-datatable').deferredBootstrapTable('append', [{
                    f2id: data.EndpointArn,
                    f2type: 'sagemaker.endpoint',
                    f2data: data,
                    f2region: region,
                    name: data.EndpointName,
                    endpointconfigname: data.EndpointConfigName,
                    creationtime: data.CreationTime
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-endpoints-datatable');
    });

    await sdkcall("SageMaker", "listEndpointConfigs", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-sagemaker-endpointconfigs-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.EndpointConfigs.map(endpointConfig => {
            return sdkcall("SageMaker", "describeEndpointConfig", {
                EndpointConfigName: endpointConfig.EndpointConfigName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-endpointconfigs-datatable').deferredBootstrapTable('append', [{
                    f2id: data.EndpointConfigArn,
                    f2type: 'sagemaker.endpointconfig',
                    f2data: data,
                    f2region: region,
                    name: data.EndpointConfigName,
                    kmskeyid: data.KmsKeyId,
                    creationtime: data.CreationTime
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-endpointconfigs-datatable');
    });

    await sdkcall("SageMaker", "listNotebookInstances", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-sagemaker-notebookinstances-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.NotebookInstances.map(notebookInstance => {
            return sdkcall("SageMaker", "describeNotebookInstance", {
                NotebookInstanceName: notebookInstance.NotebookInstanceName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-notebookinstances-datatable').deferredBootstrapTable('append', [{
                    f2id: data.NotebookInstanceArn,
                    f2type: 'sagemaker.notebookinstance',
                    f2data: data,
                    f2region: region,
                    name: data.NotebookInstanceName,
                    url: data.Url,
                    instancetype: data.InstanceType,
                    subnetid: data.SubnetId,
                    volumesize: data.VolumeSizeInGB + " GB"
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-notebookinstances-datatable');
    });

    await sdkcall("SageMaker", "listNotebookInstanceLifecycleConfigs", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-sagemaker-notebookinstancelifecycleconfigs-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.NotebookInstanceLifecycleConfigs.map(notebookInstanceLifecycleConfig => {
            return sdkcall("SageMaker", "describeNotebookInstanceLifecycleConfig", {
                NotebookInstanceLifecycleConfigName: notebookInstanceLifecycleConfig.NotebookInstanceLifecycleConfigName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-notebookinstancelifecycleconfigs-datatable').deferredBootstrapTable('append', [{
                    f2id: data.NotebookInstanceLifecycleConfigArn,
                    f2type: 'sagemaker.notebookinstancelifecycleconfig',
                    f2data: data,
                    f2region: region,
                    name: data.NotebookInstanceLifecycleConfigName,
                    creationtime: data.CreationTime
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-notebookinstancelifecycleconfigs-datatable');
    });

    await sdkcall("ApplicationAutoScaling", "describeScalableTargets", {
        ServiceNamespace: "ecs"
    }, true).then(async (data) => {
        $('#section-machinelearning-sagemaker-applicationautoscalingscalabletargets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ScalableTargets.map(target => {
            return sdkcall("ApplicationAutoScaling", "describeScheduledActions", {
                ServiceNamespace: "ecs",
                ResourceId: target.ResourceId,
                ScalableDimension: target.ScalableDimension
            }, true).then((actions) => {
                target['ScheduledActions'] = actions.ScheduledActions;

                $('#section-machinelearning-sagemaker-applicationautoscalingscalabletargets-datatable').deferredBootstrapTable('append', [{
                    f2id: target.ResourceId,
                    f2type: 'applicationautoscaling.scalabletarget',
                    f2data: target,
                    f2region: region,
                    resourceid: target.ResourceId,
                    scalabledimension: target.ScalableDimension,
                    mincapacity: target.MinCapacity,
                    maxcapacity: target.MaxCapacity
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-applicationautoscalingscalabletargets-datatable');
    });

    await sdkcall("ApplicationAutoScaling", "describeScalingPolicies", {
        ServiceNamespace: "ecs"
    }, true).then(async (data) => {
        $('#section-machinelearning-sagemaker-applicationautoscalingscalingpolicies-datatable').deferredBootstrapTable('removeAll');

        if (data.ScalableTargets) {
            data.ScalableTargets.forEach(target => {
                $('#section-machinelearning-sagemaker-applicationautoscalingscalingpolicies-datatable').deferredBootstrapTable('append', [{
                    f2id: target.PolicyARN,
                    f2type: 'applicationautoscaling.scalingpolicy',
                    f2data: target,
                    f2region: region,
                    resourceid: target.ResourceId,
                    scalabledimension: target.ScalableDimension,
                    policyname: target.PolicyName,
                    policytype: target.PolicyType
                }]);
            });
        }

        unblockUI('#section-machinelearning-sagemaker-applicationautoscalingscalingpolicies-datatable');
    });

    await sdkcall("SageMaker", "listWorkteams", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-workteams-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Workteams.map(workteam => {
            return sdkcall("SageMaker", "describeWorkteam", {
                WorkteamName: workteam.WorkteamName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-workteams-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Workteam.WorkteamArn,
                    f2type: 'sagemaker.workteam',
                    f2data: data,
                    f2region: region,
                    name: data.Workteam.WorkteamName,
                    description: data.Workteam.Description,
                    creationtime: data.Workteam.CreateDate
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-workteams-datatable');
    }).catch(() => { });

    await sdkcall("SageMaker", "listMonitoringSchedules", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-monitoringschedules-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.MonitoringScheduleSummaries.map(async (monitoringSchedule) => {
            return sdkcall("SageMaker", "describeMonitoringSchedule", {
                MonitoringScheduleName: monitoringSchedule.MonitoringScheduleName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-monitoringschedules-datatable').deferredBootstrapTable('append', [{
                    f2id: data.MonitoringScheduleArn,
                    f2type: 'sagemaker.monitoringschedule',
                    f2data: data,
                    f2region: region,
                    name: data.MonitoringScheduleName,
                    arn: data.MonitoringScheduleArn
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-monitoringschedules-datatable');
    }).catch(() => { });

    await sdkcall("SageMaker", "listProjects", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-projects-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ProjectSummaryList.map(async (project) => {
            return sdkcall("SageMaker", "describeProject", {
                ProjectName: project.ProjectName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-projects-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ProjectArn,
                    f2type: 'sagemaker.project',
                    f2data: data,
                    f2region: region,
                    name: data.ProjectName,
                    description: data.ProjectDescription
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-projects-datatable');
    }).catch(() => { });

    await sdkcall("SageMaker", "listPipelines", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-pipelines-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.PipelineSummaries.map(async (pipeline) => {
            return sdkcall("SageMaker", "describePipeline", {
                PipelineName: pipeline.PipelineName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-pipelines-datatable').deferredBootstrapTable('append', [{
                    f2id: data.PipelineArn,
                    f2type: 'sagemaker.pipeline',
                    f2data: data,
                    f2region: region,
                    name: data.PipelineName,
                    displayname: data.PipelineDisplayName,
                    description: data.PipelineDescription
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-pipelines-datatable');
    }).catch(() => { });

    await sdkcall("SageMaker", "listDeviceFleets", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-devicefleets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DeviceFleetSummaries.map(async (devicefleet) => {
            return sdkcall("SageMaker", "describeDeviceFleet", {
                DeviceFleetName: devicefleet.DeviceFleetName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-devicefleets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.DeviceFleetArn,
                    f2type: 'sagemaker.devicefleet',
                    f2data: data,
                    f2region: region,
                    name: data.DeviceFleetName,
                    description: data.Description
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-devicefleets-datatable');
    }).catch(() => { });

    await sdkcall("SageMaker", "listDevices", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-devices-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DeviceSummaries.map(async (device) => {
            return sdkcall("SageMaker", "describeDevice", {
                DeviceName: device.DeviceName,
                DeviceFleetName: device.DeviceFleetName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-devices-datatable').deferredBootstrapTable('append', [{
                    f2id: data.DeviceArn,
                    f2type: 'sagemaker.device',
                    f2data: data,
                    f2region: region,
                    name: data.DeviceName,
                    description: data.Description
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-devices-datatable');
    }).catch(() => { });

    await sdkcall("SageMaker", "listModelPackageGroups", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-modelpackagegroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ModelPackageGroupSummaryList.map(async (modelpackagegroup) => {
            return sdkcall("SageMaker", "describeModelPackageGroup", {
                ModelPackageGroupName: modelpackagegroup.ModelPackageGroupName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-modelpackagegroups-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ModelPackageGroupArn,
                    f2type: 'sagemaker.modelpackagegroup',
                    f2data: data,
                    f2region: region,
                    name: data.ModelPackageGroupName,
                    description: data.ModelPackageGroupDescription
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-modelpackagegroups-datatable');
    }).catch(() => { });

    await sdkcall("SageMaker", "listDataQualityJobDefinitions", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-dataqualityjobdefinitions-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.JobDefinitionSummaries.map(async (jobdefinition) => {
            return sdkcall("SageMaker", "describeDataQualityJobDefinition", {
                JobDefinitionName: jobdefinition.MonitoringJobDefinitionName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-dataqualityjobdefinitions-datatable').deferredBootstrapTable('append', [{
                    f2id: data.JobDefinitionArn,
                    f2type: 'sagemaker.dataqualityjobdefinition',
                    f2data: data,
                    f2region: region,
                    name: data.JobDefinitionName,
                    rolearn: data.RoleArn
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-dataqualityjobdefinitions-datatable');
    }).catch(() => { });

    await sdkcall("SageMaker", "listModelBiasJobDefinitions", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-modelbiasjobdefinitions-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.JobDefinitionSummaries.map(async (jobdefinition) => {
            return sdkcall("SageMaker", "describeModelBiasJobDefinition", {
                JobDefinitionName: jobdefinition.MonitoringJobDefinitionName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-modelbiasjobdefinitions-datatable').deferredBootstrapTable('append', [{
                    f2id: data.JobDefinitionArn,
                    f2type: 'sagemaker.modelbiasjobdefinition',
                    f2data: data,
                    f2region: region,
                    name: data.JobDefinitionName,
                    rolearn: data.RoleArn
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-modelbiasjobdefinitions-datatable');
    }).catch(() => { });

    await sdkcall("SageMaker", "listModelExplainabilityJobDefinitions", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-modelexplainabilityjobdefinitions-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.JobDefinitionSummaries.map(async (jobdefinition) => {
            return sdkcall("SageMaker", "describeModelExplainabilityJobDefinition", {
                JobDefinitionName: jobdefinition.MonitoringJobDefinitionName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-modelexplainabilityjobdefinitions-datatable').deferredBootstrapTable('append', [{
                    f2id: data.JobDefinitionArn,
                    f2type: 'sagemaker.modelexplainabilityjobdefinition',
                    f2data: data,
                    f2region: region,
                    name: data.JobDefinitionName,
                    rolearn: data.RoleArn
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-modelexplainabilityjobdefinitions-datatable');
    }).catch(() => { });

    await sdkcall("SageMaker", "listModelQualityJobDefinitions", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-modelqualityjobdefinitions-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.JobDefinitionSummaries.map(async (jobdefinition) => {
            return sdkcall("SageMaker", "describeModelQualityJobDefinition", {
                JobDefinitionName: jobdefinition.MonitoringJobDefinitionName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-modelqualityjobdefinitions-datatable').deferredBootstrapTable('append', [{
                    f2id: data.JobDefinitionArn,
                    f2type: 'sagemaker.modelqualityjobdefinition',
                    f2data: data,
                    f2region: region,
                    name: data.JobDefinitionName,
                    rolearn: data.RoleArn
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-modelqualityjobdefinitions-datatable');
    }).catch(() => { });

    await sdkcall("SageMaker", "listDomains", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-domains-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Domains.map(async (domain) => {
            return sdkcall("SageMaker", "describeDomain", {
                DomainId: domain.DomainId
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-domains-datatable').deferredBootstrapTable('append', [{
                    f2id: data.DomainArn,
                    f2type: 'sagemaker.domain',
                    f2data: data,
                    f2region: region,
                    name: data.DomainName,
                    authmode: data.AuthMode
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-domains-datatable');
    }).catch(() => { });

    await sdkcall("SageMaker", "listUserProfiles", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-userprofiles-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.UserProfiles.map(async (userProfile) => {
            return sdkcall("SageMaker", "describeUserProfile", {
                DomainId: userProfile.DomainId,
                UserProfileName: userProfile.UserProfileName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-userprofiles-datatable').deferredBootstrapTable('append', [{
                    f2id: data.UserProfileArn,
                    f2type: 'sagemaker.userprofile',
                    f2data: data,
                    f2region: region,
                    name: data.UserProfileName,
                    domainid: data.DomainId
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-userprofiles-datatable');
    }).catch(() => { });

    await sdkcall("SageMaker", "listApps", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-apps-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Apps.map(async (app) => {
            return sdkcall("SageMaker", "describeApp", {
                DomainId: app.DomainId,
                AppName: app.AppName,
                AppType: app.AppType,
                UserProfileName: app.UserProfileName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-apps-datatable').deferredBootstrapTable('append', [{
                    f2id: data.AppArn,
                    f2type: 'sagemaker.app',
                    f2data: data,
                    f2region: region,
                    name: data.AppName,
                    domainid: data.DomainId,
                    type: data.AppType,
                    userprofilename: data.UserProfileName
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-apps-datatable');
    }).catch(() => { });

    await sdkcall("SageMaker", "listAppImageConfigs", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-appimageconfigs-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.AppImageConfigs.map(async (appImageConfig) => {
            return sdkcall("SageMaker", "describeAppImageConfig", {
                AppImageConfigName: appImageConfig.AppImageConfigName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-appimageconfigs-datatable').deferredBootstrapTable('append', [{
                    f2id: data.AppImageConfigArn,
                    f2type: 'sagemaker.appimageconfig',
                    f2data: data,
                    f2region: region,
                    name: data.AppImageConfigName
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-appimageconfigs-datatable');
    }).catch(() => { });

    await sdkcall("SageMaker", "listImages", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-images-datatable').deferredBootstrapTable('removeAll');
        $('#section-machinelearning-sagemaker-imageversions-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Images.map(async (image) => {
            await sdkcall("SageMaker", "describeImage", {
                ImageName: image.ImageName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-images-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ImageArn,
                    f2type: 'sagemaker.image',
                    f2data: data,
                    f2region: region,
                    name: data.ImageName,
                    description: data.Description,
                    displayname: data.DisplayName
                }]);
            });

            return sdkcall("SageMaker", "listImageVersions", {
                ImageName: image.ImageName
            }, false).then(async (data) => {
                await Promise.all(data.ImageVersions.map(async (imageversion) => {
                    return sdkcall("SageMaker", "describeImageVersion", {
                        ImageName: image.ImageName,
                        Version: imageversion.Version
                    }, true).then((data) => {
                        data['ImageName'] = image.ImageName;

                        $('#section-machinelearning-sagemaker-imageversions-datatable').deferredBootstrapTable('append', [{
                            f2id: data.ImageVersionArn,
                            f2type: 'sagemaker.imageversion',
                            f2data: data,
                            f2region: region,
                            name: image.ImageName,
                            version: data.Version
                        }]);
                    });
                }));
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-images-datatable');
        unblockUI('#section-machinelearning-sagemaker-imageversions-datatable');
    }).catch(() => { });

    await sdkcall("SageMaker", "listFeatureGroups", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-sagemaker-featuregroups-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.FeatureGroupSummaries.map(async (featuregroup) => {
            return sdkcall("SageMaker", "describeFeatureGroup", {
                FeatureGroupName: featuregroup.FeatureGroupName
            }, true).then((data) => {
                $('#section-machinelearning-sagemaker-featuregroups-datatable').deferredBootstrapTable('append', [{
                    f2id: data.FeatureGroupArn,
                    f2type: 'sagemaker.featuregroup',
                    f2data: data,
                    f2region: region,
                    name: data.FeatureGroupName,
                    description: data.Description
                }]);
            });
        }));

        unblockUI('#section-machinelearning-sagemaker-featuregroups-datatable');
    }).catch(() => { });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "sagemaker.model") {
        reqParams.cfn['ModelName'] = obj.data.ModelName;
        reqParams.tf['name'] = obj.data.ModelName;
        if (obj.data.PrimaryContainer) {
            reqParams.cfn['PrimaryContainer'] = {
                'ContainerHostname': obj.data.PrimaryContainer.ContainerHostname,
                'Environment': obj.data.PrimaryContainer.Environment,
                'ModelDataUrl': obj.data.PrimaryContainer.ModelDataUrl,
                'MultiModelConfig': obj.data.PrimaryContainer.MultiModelConfig,
                'Image': obj.data.PrimaryContainer.Image
            };
            reqParams.tf['primary_container'] = {
                'container_hostname': obj.data.PrimaryContainer.ContainerHostname,
                'environment': obj.data.PrimaryContainer.Environment,
                'model_data_url': obj.data.PrimaryContainer.ModelDataUrl,
                'image': obj.data.PrimaryContainer.Image
            };
        }
        if (obj.data.Containers) {
            reqParams.cfn['Containers'] = [];
            reqParams.tf['container'] = [];
            obj.data.Containers.forEach(container => {
                reqParams.cfn['Containers'] = {
                    'ContainerHostname': container.ContainerHostname,
                    'Environment': container.Environment,
                    'ModelDataUrl': container.ModelDataUrl,
                    'MultiModelConfig': container.MultiModelConfig,
                    'Image': container.Image
                };
                reqParams.tf['container'] = {
                    'container_hostname': container.ContainerHostname,
                    'environment': container.Environment,
                    'model_data_url': container.ModelDataUrl,
                    'image': container.Image
                };
            });
        }
        reqParams.cfn['ExecutionRoleArn'] = obj.data.ExecutionRoleArn;
        reqParams.tf['execution_role_arn'] = obj.data.ExecutionRoleArn;
        reqParams.cfn['VpcConfig'] = obj.data.VpcConfig;
        reqParams.tf['vpc_config'] = obj.data.VpcConfig;

        /*
        TODO:
        Tags: 
            - Tag 
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::Model'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::Model',
            'terraformType': 'aws_sagemaker_model',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.endpoint") {
        reqParams.cfn['EndpointName'] = obj.data.EndpointName;
        reqParams.tf['name'] = obj.data.EndpointName;
        reqParams.cfn['EndpointConfigName'] = obj.data.EndpointConfigName;
        reqParams.tf['endpoint_config_name'] = obj.data.EndpointConfigName;

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::Endpoint'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::Endpoint',
            'terraformType': 'aws_sagemaker_endpoint',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.endpointconfig") {
        reqParams.cfn['EndpointConfigName'] = obj.data.EndpointConfigName;
        reqParams.tf['name'] = obj.data.EndpointConfigName;
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        reqParams.tf['kms_key_arn'] = obj.data.KmsKeyId;
        if (obj.data.ProductionVariants) {
            reqParams.cfn['ProductionVariants'] = [];
            reqParams.tf['production_variants'] = [];
            obj.data.ProductionVariants.forEach(productionVariant => {
                reqParams.cfn['ProductionVariants'].push({
                    'VariantName': productionVariant.VariantName,
                    'ModelName': productionVariant.ModelName,
                    'InitialInstanceCount': productionVariant.InitialInstanceCount,
                    'InstanceType': productionVariant.InstanceType,
                    'InitialVariantWeight': productionVariant.InitialVariantWeight
                });
                reqParams.tf['production_variants'].push({
                    'variant_name': productionVariant.VariantName,
                    'model_name': productionVariant.ModelName,
                    'initial_instance_count': productionVariant.InitialInstanceCount,
                    'instance_type': productionVariant.InstanceType,
                    'initial_variant_weight': productionVariant.InitialVariantWeight
                });
            });
        }
        reqParams.cfn['DataCaptureConfig'] = obj.data.DataCaptureConfig;

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::EndpointConfig'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::EndpointConfig',
            'terraformType': 'aws_sagemaker_endpoint_configuration',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.notebookinstance") {
        reqParams.cfn['NotebookInstanceName'] = obj.data.NotebookInstanceName;
        reqParams.tf['name'] = obj.data.NotebookInstanceName;
        reqParams.cfn['InstanceType'] = obj.data.InstanceType;
        reqParams.tf['instance_type'] = obj.data.InstanceType;
        reqParams.cfn['SubnetId'] = obj.data.SubnetId;
        reqParams.tf['subnet_id'] = obj.data.SubnetId;
        reqParams.cfn['SecurityGroupIds'] = obj.data.SecurityGroups;
        reqParams.tf['security_groups'] = obj.data.SecurityGroups;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.tf['role_arn'] = obj.data.RoleArn;
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        reqParams.tf['kms_key_id'] = obj.data.KmsKeyId;
        reqParams.cfn['LifecycleConfigName'] = obj.data.NotebookInstanceLifecycleConfigName;
        reqParams.tf['lifecycle_config_name'] = obj.data.NotebookInstanceLifecycleConfigName;
        reqParams.cfn['DirectInternetAccess'] = obj.data.DirectInternetAccess;
        reqParams.tf['direct_internet_access'] = obj.data.DirectInternetAccess;
        reqParams.cfn['VolumeSizeInGB'] = obj.data.VolumeSizeInGB;
        reqParams.tf['volume_size'] = obj.data.VolumeSizeInGB;
        reqParams.cfn['RootAccess'] = obj.data.RootAccess;
        reqParams.tf['root_access'] = obj.data.RootAccess;

        /*
        TODO:
        Tags: 
            - Tag 
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::NotebookInstance'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::NotebookInstance',
            'terraformType': 'aws_sagemaker_notebook_instance',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.notebookinstancelifecycleconfig") {
        reqParams.cfn['NotebookInstanceLifecycleConfigName'] = obj.data.NotebookInstanceLifecycleConfigName;
        reqParams.tf['name'] = obj.data.NotebookInstanceLifecycleConfigName;
        reqParams.cfn['OnCreate'] = obj.data.OnCreate;
        reqParams.tf['on_create'] = obj.data.OnCreate;
        reqParams.cfn['OnStart'] = obj.data.OnStart;
        reqParams.tf['on_start'] = obj.data.OnStart;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::NotebookInstanceLifecycleConfig'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::NotebookInstanceLifecycleConfig',
            'terraformType': 'aws_sagemaker_notebook_instance_lifecycle_configuration',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.coderepository") {
        reqParams.cfn['CodeRepositoryName'] = obj.data.CodeRepositoryName;
        reqParams.cfn['GitConfig'] = {
            'RepositoryUrl': obj.data.GitConfig.RepositoryUrl,
            'Branch': obj.data.GitConfig.Branch,
            'SecretArn': obj.data.GitConfig.SecretArn
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::CodeRepository'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::CodeRepository',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.workteam") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['WorkteamName'] = obj.data.WorkteamName;
        if (obj.data.MemberDefinitions) {
            reqParams.cfn['MemberDefinitions'] = [];
            obj.data.MemberDefinitions.forEach(memberdefinition => {
                reqParams.cfn['MemberDefinitions'].push({
                    'CognitoMemberDefinition': {
                        'CognitoClientId': memberdefinition.CognitoMemberDefinition.ClientId,
                        'CognitoUserGroup': memberdefinition.CognitoMemberDefinition.UserGroup,
                        'CognitoUserPool': memberdefinition.CognitoMemberDefinition.UserPool
                    }
                });
            });
        }
        reqParams.cfn['NotificationConfiguration'] = obj.data.NotificationConfiguration;

        /*
        TODO
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::Workteam'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::Workteam',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.monitoringschedule") {
        reqParams.cfn['MonitoringScheduleName'] = obj.data.MonitoringScheduleName;
        reqParams.cfn['MonitoringScheduleConfig'] = obj.data.MonitoringScheduleConfig;

        /*
        TODO
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::MonitoringSchedule'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::MonitoringSchedule',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.project") {
        reqParams.cfn['ProjectName'] = obj.data.ProjectName;
        reqParams.cfn['ProjectDescription'] = obj.data.ProjectDescription;
        reqParams.cfn['ServiceCatalogProvisioningDetails'] = obj.data.ServiceCatalogProvisioningDetails;

        /*
        TODO
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::Project'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::Project',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'ProjectArn': obj.data.ProjectArn,
                    'ProjectId': obj.data.ProjectId
                }
            }
        });
    } else if (obj.type == "sagemaker.pipeline") {
        reqParams.cfn['PipelineName'] = obj.data.PipelineName;
        reqParams.cfn['PipelineDisplayName'] = obj.data.PipelineDisplayName;
        reqParams.cfn['PipelineDescription'] = obj.data.PipelineDescription;
        reqParams.cfn['PipelineDefinition'] = obj.data.PipelineDefinition;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;

        /*
        TODO
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::Pipeline'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::Pipeline',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.PipelineName
            }
        });
    } else if (obj.type == "sagemaker.devicefleet") {
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['OutputConfig'] = obj.data.OutputConfig;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['DeviceFleetName'] = obj.data.DeviceFleetName;

        /*
        TODO
        Tags: 
            Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::DeviceFleet'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::DeviceFleet',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.DeviceFleetName
            }
        });
    } else if (obj.type == "sagemaker.device") {
        reqParams.cfn['Device'] = {
            'Description': obj.data.Description,
            'DeviceName': obj.data.DeviceName,
            'IotThingName': obj.data.IotThingName
        };
        reqParams.cfn['DeviceFleetName'] = obj.data.DeviceFleetName;

        /*
        TODO
        Tags: 
            Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::Device'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::Device',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.DeviceName
            }
        });
    } else if (obj.type == "sagemaker.modelpackagegroup") {
        reqParams.cfn['ModelPackageGroupName'] = obj.data.ModelPackageGroupName;
        reqParams.cfn['ModelPackageGroupDescription'] = obj.data.ModelPackageGroupDescription;

        /*
        TODO
        ModelPackageGroupPolicy: 
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::ModelPackageGroup'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::ModelPackageGroup',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.dataqualityjobdefinition") {
        reqParams.cfn['JobDefinitionName'] = obj.data.JobDefinitionName;
        reqParams.cfn['DataQualityBaselineConfig'] = obj.data.DataQualityBaselineConfig;
        reqParams.cfn['DataQualityAppSpecification'] = obj.data.DataQualityAppSpecification;
        if (obj.data.DataQualityJobInput && obj.data.DataQualityJobInput.Environment) {
            reqParams.cfn['DataQualityJobInput'] = {
                'EndpointInput': {
                    'EndpointName': obj.data.DataQualityJobInput.EndpointInput.EndpointName,
                    'LocalPath': obj.data.DataQualityJobInput.EndpointInput.LocalPath,
                    'S3InputMode': obj.data.DataQualityJobInput.EndpointInput.S3InputMode,
                    'S3DataDistributionType': obj.data.DataQualityJobInput.EndpointInput.S3DataDistributionType
                }
            };
        }
        reqParams.cfn['DataQualityJobOutputConfig'] = obj.data.DataQualityJobOutputConfig;
        reqParams.cfn['JobResources'] = obj.data.JobResources;
        reqParams.cfn['NetworkConfig'] = obj.data.NetworkConfig;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['StoppingCondition'] = obj.data.StoppingCondition;

        /*
        TODO
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::DataQualityJobDefinition'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::DataQualityJobDefinition',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.modelbiasjobdefinition") {
        reqParams.cfn['JobDefinitionName'] = obj.data.JobDefinitionName;
        reqParams.cfn['ModelBiasBaselineConfig'] = obj.data.ModelBiasBaselineConfig;
        reqParams.cfn['ModelBiasAppSpecification'] = obj.data.ModelBiasAppSpecification;
        reqParams.cfn['ModelBiasJobInput'] = obj.data.ModelBiasJobInput;
        reqParams.cfn['ModelBiasJobOutputConfig'] = obj.data.ModelBiasJobOutputConfig;
        reqParams.cfn['JobResources'] = obj.data.JobResources;
        reqParams.cfn['NetworkConfig'] = obj.data.NetworkConfig;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['StoppingCondition'] = obj.data.StoppingCondition;

        /*
        TODO
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::ModelBiasJobDefinition'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::ModelBiasJobDefinition',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.modelexplainabilityjobdefinition") {
        reqParams.cfn['JobDefinitionName'] = obj.data.JobDefinitionName;
        reqParams.cfn['ModelExplainabilityBaselineConfig'] = obj.data.ModelExplainabilityBaselineConfig;
        reqParams.cfn['ModelExplainabilityAppSpecification'] = obj.data.ModelExplainabilityAppSpecification;
        if (obj.data.ModelExplainabilityJobInput && obj.data.ModelExplainabilityJobInput.Environment) {
            reqParams.cfn['ModelExplainabilityJobInput'] = {
                'EndpointInput': {
                    'EndpointName': obj.data.ModelExplainabilityJobInput.EndpointInput.EndpointName,
                    'LocalPath': obj.data.ModelExplainabilityJobInput.EndpointInput.LocalPath,
                    'S3InputMode': obj.data.ModelExplainabilityJobInput.EndpointInput.S3InputMode,
                    'S3DataDistributionType': obj.data.ModelExplainabilityJobInput.EndpointInput.S3DataDistributionType,
                    'FeaturesAttribute': obj.data.ModelExplainabilityJobInput.EndpointInput.FeaturesAttribute,
                    'InferenceAttribute': obj.data.ModelExplainabilityJobInput.EndpointInput.InferenceAttribute,
                    'ProbabilityAttribute': obj.data.ModelExplainabilityJobInput.EndpointInput.ProbabilityAttribute
                }
            };
        }
        reqParams.cfn['ModelExplainabilityJobOutputConfig'] = obj.data.ModelExplainabilityJobOutputConfig;
        reqParams.cfn['JobResources'] = obj.data.JobResources;
        reqParams.cfn['NetworkConfig'] = obj.data.NetworkConfig;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['StoppingCondition'] = obj.data.StoppingCondition;

        /*
        TODO
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::ModelExplainabilityJobDefinition'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::ModelExplainabilityJobDefinition',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.modelqualityjobdefinition") {
        reqParams.cfn['JobDefinitionName'] = obj.data.JobDefinitionName;
        reqParams.cfn['ModelQualityBaselineConfig'] = obj.data.ModelQualityBaselineConfig;
        reqParams.cfn['ModelQualityAppSpecification'] = obj.data.ModelQualityAppSpecification;
        if (obj.data.ModelQualityJobInput && obj.data.ModelQualityJobInput.Environment) {
            reqParams.cfn['ModelExplainabilityJobInput'] = {
                'EndpointInput': {
                    'EndpointName': obj.data.ModelQualityJobInput.EndpointInput.EndpointName,
                    'LocalPath': obj.data.ModelQualityJobInput.EndpointInput.LocalPath,
                    'S3InputMode': obj.data.ModelQualityJobInput.EndpointInput.S3InputMode,
                    'S3DataDistributionType': obj.data.ModelQualityJobInput.EndpointInput.S3DataDistributionType,
                    'InferenceAttribute': obj.data.ModelQualityJobInput.EndpointInput.InferenceAttribute,
                    'ProbabilityAttribute': obj.data.ModelQualityJobInput.EndpointInput.ProbabilityAttribute,
                    'ProbabilityThresholdAttribute': obj.data.ModelQualityJobInput.EndpointInput.ProbabilityThresholdAttribute,
                    'StartTimeOffset': obj.data.ModelQualityJobInput.EndpointInput.StartTimeOffset,
                    'EndTimeOffset': obj.data.ModelQualityJobInput.EndpointInput.EndTimeOffset
                },
                'GroundTruthS3Input': obj.data.ModelQualityJobInput.GroundTruthS3Input
            };
        }
        reqParams.cfn['ModelQualityJobOutputConfig'] = obj.data.ModelQualityJobOutputConfig;
        reqParams.cfn['JobResources'] = obj.data.JobResources;
        reqParams.cfn['NetworkConfig'] = obj.data.NetworkConfig;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['StoppingCondition'] = obj.data.StoppingCondition;

        /*
        TODO
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::ModelQualityJobDefinition'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::ModelQualityJobDefinition',
            'options': reqParams
        });
    } else if (obj.type == "sagemaker.domain") {
        reqParams.cfn['DomainName'] = obj.data.DomainName;
        reqParams.cfn['AuthMode'] = obj.data.AuthMode;
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        reqParams.cfn['VpcId'] = obj.data.VpcId;
        reqParams.cfn['AppNetworkAccessType'] = obj.data.AppNetworkAccessType;
        reqParams.cfn['SubnetIds'] = obj.data.SubnetIds;
        reqParams.cfn['DefaultUserSettings'] = obj.data.DefaultUserSettings;

        /*
        TODO
            Tags: 
                - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::Domain'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::Domain',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.DomainId,
                'GetAtt': {
                    'DomainArn': obj.data.DomainArn,
                    'HomeEfsFileSystemId': obj.data.HomeEfsFileSystemId,
                    'SingleSignOnManagedApplicationInstanceId': obj.data.SingleSignOnManagedApplicationInstanceId,
                    'Url': obj.data.Url
                },
                'Import': {
                    'DomainId': obj.data.DomainId
                }
            }
        });
    } else if (obj.type == "sagemaker.userprofile") {
        reqParams.cfn['UserProfileName'] = obj.data.UserProfileName;
        reqParams.cfn['DomainId'] = obj.data.DomainId;
        reqParams.cfn['SingleSignOnUserIdentifier'] = obj.data.SingleSignOnUserIdentifier;
        reqParams.cfn['SingleSignOnUserValue'] = obj.data.SingleSignOnUserValue;
        reqParams.cfn['UserSettings'] = obj.data.UserSettings;

        /*
        TODO
            Tags: 
                - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::UserProfile'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::UserProfile',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.UserProfileName,
                'GetAtt': {
                    'UserProfileArn': obj.data.UserProfileArn
                },
                'Import': {
                    'UserProfileName': obj.data.UserProfileName,
                    'DomainId': obj.data.DomainId
                }
            }
        });
    } else if (obj.type == "sagemaker.app") {
        reqParams.cfn['AppName'] = obj.data.AppName;
        reqParams.cfn['DomainId'] = obj.data.DomainId;
        reqParams.cfn['AppType'] = obj.data.AppType;
        reqParams.cfn['UserProfileName'] = obj.data.UserProfileName;
        reqParams.cfn['ResourceSpec'] = obj.data.ResourceSpec;

        /*
        TODO
            Tags: 
                - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::App'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::App',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'AppArn': obj.data.AppArn
                },
                'Import': {
                    'AppName': obj.data.AppName,
                    'AppType': obj.data.AppType,
                    'DomainId': obj.data.DomainId,
                    'UserProfileName': obj.data.UserProfileName,
                }
            }
        });
    } else if (obj.type == "sagemaker.appimageconfig") {
        reqParams.cfn['AppImageConfigName'] = obj.data.AppImageConfigName;
        reqParams.cfn['KernelGatewayImageConfig'] = obj.data.KernelGatewayImageConfig;

        /*
        TODO
            Tags: 
                - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::AppImageConfig'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::AppImageConfig',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.AppImageConfigName,
                'GetAtt': {
                    'AppImageConfigArn': obj.data.AppImageConfigArn
                },
                'Import': {
                    'AppImageConfigName': obj.data.AppImageConfigName
                }
            }
        });
    } else if (obj.type == "sagemaker.image") {
        reqParams.cfn['ImageName'] = obj.data.ImageName;
        reqParams.cfn['ImageDisplayName'] = obj.data.DisplayName;
        reqParams.cfn['ImageDescription'] = obj.data.Description;
        reqParams.cfn['ImageRoleArn'] = obj.data.RoleArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::Image'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::Image',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ImageArn
            }
        });
    } else if (obj.type == "sagemaker.imageversion") {
        reqParams.cfn['ImageName'] = obj.data.ImageName;
        reqParams.cfn['BaseImage'] = obj.data.BaseImage;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::ImageVersion'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::ImageVersion',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ImageVersionArn,
                'GetAtt': {
                    'ContainerImage': obj.data.ContainerImage,
                    'ImageArn': obj.data.ImageArn,
                    'Version': obj.data.Version
                }
            }
        });
    } else if (obj.type == "sagemaker.featuregroup") {
        reqParams.cfn['FeatureGroupName'] = obj.data.FeatureGroupName;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['RecordIdentifierFeatureName'] = obj.data.RecordIdentifierFeatureName;
        reqParams.cfn['EventTimeFeatureName'] = obj.data.EventTimeFeatureName;
        reqParams.cfn['FeatureDefinitions'] = obj.data.FeatureDefinitions;
        reqParams.cfn['OnlineStoreConfig'] = obj.data.OnlineStoreConfig;
        reqParams.cfn['OfflineStoreConfig'] = obj.data.OfflineStoreConfig;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('sagemaker', obj.id, 'AWS::SageMaker::FeatureGroup'),
            'region': obj.region,
            'service': 'sagemaker',
            'type': 'AWS::SageMaker::FeatureGroup',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.FeatureGroupName
            }
        });
    } else {
        return false;
    }

    return true;
});
