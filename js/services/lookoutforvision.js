/* ========================================================================== */
// Lookout For Vision
/* ========================================================================== */

sections.push({
    'category': 'Machine Learning',
    'service': 'Lookout For Vision',
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
                        field: 'arn',
                        title: 'ARN',
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

async function updateDatatableMachineLearningLookoutForVision() {
    blockUI('#section-machinelearning-lookoutforvision-projects-datatable');

    await sdkcall("LookoutVision", "listProjects", {
        // no params
    }, false).then(async (data) => {
        $('#section-machinelearning-lookoutforvision-projects-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Projects.map(project => {
            return sdkcall("LookoutVision", "describeProject", {
                ProjectName: project.ProjectName
            }, true).then(async (data) => {
                $('#section-machinelearning-lookoutforvision-projects-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ProjectDescription.ProjectArn,
                    f2type: 'lookoutforvision.project',
                    f2data: data.ProjectDescription,
                    f2region: region,
                    name: data.ProjectDescription.ProjectName,
                    arn: data.ProjectDescription.ProjectArn
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-machinelearning-lookoutforvision-projects-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "lookoutforvision.project") {
        reqParams.cfn['ProjectName'] = obj.data.ProjectName;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('lookoutforvision', obj.id, 'AWS::LookoutVision::Project'),
            'region': obj.region,
            'service': 'lookoutforvision',
            'type': 'AWS::LookoutVision::Project',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Arn': obj.data.ProjectArn,
                    'ProjectName': obj.data.ProjectName
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
