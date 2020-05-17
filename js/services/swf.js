/* ========================================================================== */
// SWF
/* ========================================================================== */

sections.push({
    'category': 'Application Integration',
    'service': 'SWF',
    'resourcetypes': {
        'Domains': {
            'terraformonly': true,
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

async function updateDatatableApplicationIntegrationSWF() {
    blockUI('#section-applicationintegration-swf-domains-datatable');

    await sdkcall("SWF", "listDomains", {
        registrationStatus: 'REGISTERED'
    }, true).then(async (data) => {
        $('#section-applicationintegration-swf-domains-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.domainInfos.map(domain => {
            return sdkcall("SWF", "describeDomain", {
                name: domain.name
            }, true).then(async (data) => {
                $('#section-applicationintegration-swf-domains-datatable').deferredBootstrapTable('append', [{
                    f2id: data.domainInfo.name,
                    f2type: 'swf.domain',
                    f2data: data,
                    f2region: region,
                    name: data.domainInfo.name,
                    description: data.domainInfo.description
                }]);
            });
        }));

        unblockUI('#section-applicationintegration-swf-domains-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "swf.domain") {
        reqParams.tf['name'] = obj.data.domainInfo.name;
        reqParams.tf['description'] = obj.data.domainInfo.description;
        if (obj.data.configuration) {
            reqParams.tf['workflow_execution_retention_period_in_days'] = obj.data.configuration.workflowExecutionRetentionPeriodInDays;
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('swf', obj.id, 'AWS::SWF::Domain'), // not real resource type
            'region': obj.region,
            'service': 'swf',
            'terraformType': 'aws_swf_domain',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
