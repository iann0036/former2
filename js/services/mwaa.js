/* ========================================================================== */
// Managed Apache Airflow
/* ========================================================================== */

sections.push({
    'category': 'Application Integration',
    'service': 'Managed Apache Airflow',
    'resourcetypes': {
        'Environments': {
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
                        field: 'airflowversion',
                        title: 'Airflow Version',
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

async function updateDatatableApplicationIntegrationManagedApacheAirflow() {
    blockUI('#section-applicationintegration-managedapacheairflow-environments-datatable');

    await sdkcall("MWAA", "listEnvironments", {
        // no params
    }, false).then(async (data) => {
        $('#section-applicationintegration-managedapacheairflow-environments-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Environments.map(environment => {
            return sdkcall("MWAA", "getEnvironment", {
                Name: environment
            }, true).then(async (data) => {
                $('#section-applicationintegration-managedapacheairflow-environments-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Environment.Arn,
                    f2type: 'managedapacheairflow.environment',
                    f2data: data.Environment,
                    f2region: region,
                    name: data.Environment.Name,
                    airflowversion: data.Environment.AirflowVersion
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-applicationintegration-managedapacheairflow-environments-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "managedapacheairflow.environment") {
        reqParams.cfn['AirflowConfigurationOptions'] = obj.data.AirflowConfigurationOptions;
        reqParams.cfn['AirflowVersion'] = obj.data.AirflowVersion;
        reqParams.cfn['DagS3Path'] = obj.data.DagS3Path;
        reqParams.cfn['EnvironmentClass'] = obj.data.EnvironmentClass;
        reqParams.cfn['ExecutionRoleArn'] = obj.data.ExecutionRoleArn;
        reqParams.cfn['KmsKey'] = obj.data.KmsKey;
        reqParams.cfn['LoggingConfiguration'] = obj.data.LoggingConfiguration;
        reqParams.cfn['MaxWorkers'] = obj.data.MaxWorkers;
        reqParams.cfn['NetworkConfiguration'] = obj.data.NetworkConfiguration;
        reqParams.cfn['PluginsS3ObjectVersion'] = obj.data.PluginsS3ObjectVersion;
        reqParams.cfn['PluginsS3Path'] = obj.data.PluginsS3Path;
        reqParams.cfn['RequirementsS3ObjectVersion'] = obj.data.RequirementsS3ObjectVersion;
        reqParams.cfn['RequirementsS3Path'] = obj.data.RequirementsS3Path;
        reqParams.cfn['SourceBucketArn'] = obj.data.SourceBucketArn;
        reqParams.cfn['WebserverAccessMode'] = obj.data.WebserverAccessMode;
        reqParams.cfn['WeeklyMaintenanceWindowStart'] = obj.data.WeeklyMaintenanceWindowStart;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('managedapacheairflow', obj.id, 'AWS::MWAA::Environment'),
            'region': obj.region,
            'service': 'managedapacheairflow',
            'type': 'AWS::MWAA::Environment',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Name': obj.data.Name
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
