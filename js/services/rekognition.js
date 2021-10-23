/* ========================================================================== */
// Rekognition
/* ========================================================================== */

sections.push({
    'category': 'Machine Learning',
    'service': 'Rekognition',
    'resourcetypes': {
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

async function updateDatatableMachineLearningRekognition() {
    blockUI('#section-machinelearning-rekognition-projects-datatable');

    await sdkcall("Rekognition", "describeProjects", {
        // no params
    }, true).then(async (data) => {
        $('#section-machinelearning-rekognition-projects-datatable').deferredBootstrapTable('removeAll');

        data.ProjectDescriptions.forEach(project => {
            $('#section-machinelearning-rekognition-projects-datatable').deferredBootstrapTable('append', [{
                f2id: project.ProjectArn,
                f2type: 'rekognition.project',
                f2data: project,
                f2region: region,
                name: project.ProjectArn.split("/")[1],
                creationtime: project.CreationTimestamp
            }]);
        });
        
    }).catch(() => { });

    unblockUI('#section-machinelearning-rekognition-projects-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "rekognition.project") {
        reqParams.cfn['ProjectName'] = obj.data.ProjectArn.split("/")[1];

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('rekognition', obj.id, 'AWS::Rekognition::Project'),
            'region': obj.region,
            'service': 'rekognition',
            'type': 'AWS::Rekognition::Project',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ProjectArn.split("/")[1],
                'GetAtt': {
                    'Arn': obj.data.ProjectArn
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
