/* ========================================================================== */
// FIS
/* ========================================================================== */

sections.push({
    'category': 'Developer Tools',
    'service': 'FIS',
    'resourcetypes': {
        'Experiment Templates': {
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
        }
    }
});

async function updateDatatableDeveloperToolsFIS() {
    blockUI('#section-developertools-fis-experimenttemplates-datatable');

    await sdkcall("Fis", "listExperimentTemplates", {
        // no params
    }, true).then(async (data) => {
        $('#section-developertools-fis-experimenttemplates-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.experimentTemplates.map(async (experimenttemplate) => {
            return sdkcall("Fis", "getExperimentTemplate", {
                id: experimenttemplate.id
            }, true).then(async (data) => {
                $('#section-developertools-fis-experimenttemplates-datatable').deferredBootstrapTable('append', [{
                    f2id: data.experimentTemplate.id,
                    f2type: 'fis.experimenttemplate',
                    f2data: data.experimentTemplate,
                    f2region: region,
                    id: data.experimentTemplate.id,
                    description: data.experimentTemplate.description
                }]);
            });
        }));
    });

    unblockUI('#section-developertools-fis-experimenttemplates-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "fis.experimenttemplate") {
        reqParams.cfn['description'] = obj.data.description;
        reqParams.cfn['targets'] = obj.data.targets;
        reqParams.cfn['actions'] = obj.data.actions;
        reqParams.cfn['stopConditions'] = obj.data.stopConditions;
        reqParams.cfn['roleArn'] = obj.data.roleArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('fis', obj.id, 'AWS::FIS::ExperimentTemplate'),
            'region': obj.region,
            'service': 'fis',
            'type': 'AWS::FIS::ExperimentTemplate',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.id
            }
        });
    } else {
        return false;
    }

    return true;
});
