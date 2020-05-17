/* ========================================================================== */
// CodeDeploy
/* ========================================================================== */

sections.push({
    'category': 'Developer Tools',
    'service': 'CodeDeploy',
    'resourcetypes': {
        'Applications': {
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'computeplatform',
                        title: 'Compute Platform',
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
        'Deployment Configurations': {
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'computeplatform',
                        title: 'Compute Platform',
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
        'Deployment Groups': {
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
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'application',
                        title: 'Application',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'deploymentgroup',
                        title: 'Deployment Group',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'deploymentconfig',
                        title: 'Deployment Config',
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

async function updateDatatableDeveloperToolsCodeDeploy() {
    blockUI('#section-developertools-codedeploy-applications-datatable');
    blockUI('#section-developertools-codedeploy-deploymentconfigurations-datatable');
    blockUI('#section-developertools-codedeploy-deploymentgroups-datatable');

    await sdkcall("CodeDeploy", "listApplications", {
        // no params
    }, true).then(async (data) => {
        $('#section-developertools-codedeploy-applications-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.applications.map(application => {
            return Promise.all([
                sdkcall("CodeDeploy", "listDeploymentGroups", {
                    applicationName: application
                }, true).then((data) => {
                    $('#section-developertools-codedeploy-deploymentgroups-datatable').deferredBootstrapTable('removeAll');

                    data.deploymentGroups.forEach(deploymentGroup => {
                        sdkcall("CodeDeploy", "getDeploymentGroup", {
                            applicationName: application,
                            deploymentGroupName: deploymentGroup
                        }, true).then((data) => {
                            $('#section-developertools-codedeploy-deploymentgroups-datatable').deferredBootstrapTable('append', [{
                                f2id: data.deploymentGroupInfo.deploymentGroupId,
                                f2type: 'codedeploy.deploymentgroup',
                                f2data: data.deploymentGroupInfo,
                                f2region: region,
                                name: data.deploymentGroupInfo.deploymentGroupName,
                                id: data.deploymentGroupInfo.deploymentGroupId,
                                application: application,
                                deploymentgroup: deploymentGroup,
                                deploymentconfig: data.deploymentGroupInfo.deploymentConfigName
                            }]);
                        });
                    });
                }),
                sdkcall("CodeDeploy", "getApplication", {
                    applicationName: application
                }, true).then((data) => {
                    $('#section-developertools-codedeploy-applications-datatable').deferredBootstrapTable('append', [{
                        f2id: data.application.applicationId,
                        f2type: 'codedeploy.application',
                        f2data: data.application,
                        f2region: region,
                        id: data.application.applicationId,
                        name: data.application.applicationName,
                        computeplatform: data.application.computePlatform,
                        creationtime: data.application.createTime
                    }]);
                })
            ]);
        }));

        unblockUI('#section-developertools-codedeploy-applications-datatable');
        unblockUI('#section-developertools-codedeploy-deploymentgroups-datatable');
    });

    await sdkcall("CodeDeploy", "listDeploymentConfigs", {
        // no params
    }, true).then(async (data) => {
        $('#section-developertools-codedeploy-deploymentconfigurations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.deploymentConfigsList.map(deploymentConfiguration => {
            return sdkcall("CodeDeploy", "getDeploymentConfig", {
                deploymentConfigName: deploymentConfiguration
            }, true).then((data) => {
                if (!data.deploymentConfigInfo.deploymentConfigName.startsWith("CodeDeployDefault.")) {
                    $('#section-developertools-codedeploy-deploymentconfigurations-datatable').deferredBootstrapTable('append', [{
                        f2id: data.deploymentConfigInfo.deploymentConfigId,
                        f2type: 'codedeploy.deploymentconfiguration',
                        f2data: data.deploymentConfigInfo,
                        f2region: region,
                        id: data.deploymentConfigInfo.deploymentConfigId,
                        name: data.deploymentConfigInfo.deploymentConfigName,
                        computeplatform: data.deploymentConfigInfo.computePlatform,
                        creationtime: data.deploymentConfigInfo.createTime
                    }]);
                }
            });
        }));

        unblockUI('#section-developertools-codedeploy-deploymentconfigurations-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "codedeploy.application") {
        reqParams.cfn['ApplicationName'] = obj.data.applicationName;
        reqParams.tf['name'] = obj.data.applicationName;
        reqParams.cfn['ComputePlatform'] = obj.data.computePlatform;
        reqParams.tf['compute_platform'] = obj.data.computePlatform;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codedeploy', obj.id, 'AWS::CodeDeploy::Application'),
            'region': obj.region,
            'service': 'codedeploy',
            'type': 'AWS::CodeDeploy::Application',
            'terraformType': 'aws_codedeploy_app',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.applicationName
            }
        });
    } else if (obj.type == "codedeploy.deploymentgroup") {
        reqParams.cfn['ApplicationName'] = obj.data.applicationName;
        reqParams.cfn['DeploymentGroupName'] = obj.data.deploymentGroupName;
        reqParams.cfn['DeploymentConfigName'] = obj.data.deploymentConfigName;
        reqParams.cfn['ServiceRoleArn'] = obj.data.serviceRoleArn;
        if (obj.data.ec2TagFilters) {
            reqParams.cfn['Ec2TagFilters'] = [];
            obj.data.ec2TagFilters.forEach(ec2TagFilter => {
                reqParams.cfn['Ec2TagFilters'].push(ec2TagFilter);
            });
        }
        if (obj.data.onPremisesInstanceTagFilters) {
            reqParams.cfn['OnPremisesInstanceTagFilters'] = [];
            obj.data.onPremisesInstanceTagFilters.forEach(onPremisesInstanceTagFilter => {
                reqParams.cfn['OnPremisesInstanceTagFilters'].push(onPremisesInstanceTagFilter);
            });
        }
        if (obj.data.autoScalingGroups) {
            reqParams.cfn['AutoScalingGroups'] = [];
            obj.data.autoScalingGroups.forEach(autoScalingGroup => {
                reqParams.cfn['AutoScalingGroups'].push(autoScalingGroup.name);
            });
        }
        if (obj.data.triggerConfigurations) {
            reqParams.cfn['TriggerConfigurations'] = [];
            obj.data.triggerConfigurations.forEach(triggerConfiguration => {
                reqParams.cfn['TriggerConfigurations'].push({
                    'TriggerEvents': triggerConfiguration.triggerEvents,
                    'TriggerName': triggerConfiguration.triggerName,
                    'TriggerTargetArn': triggerConfiguration.triggerTargetArn
                });
            });
        }
        if (obj.data.alarmConfiguration) {
            var alarms = null;
            if (obj.data.alarmConfiguration.alarms) {
                alarms = [];
                obj.data.alarmConfiguration.alarms.forEach(alarm => {
                    alarms.push({
                        'Name': alarm.name
                    });
                });
            }
            reqParams.cfn['AlarmConfiguration'] = {
                'Alarms': alarms,
                'Enabled': obj.data.alarmConfiguration.enabled,
                'IgnorePollAlarmFailure': obj.data.alarmConfiguration.ignorePollAlarmFailure
            };
        }
        if (obj.data.autoRollbackConfiguration) {
            reqParams.cfn['AutoRollbackConfiguration'] = {
                'Enabled': obj.data.autoRollbackConfiguration.enabled,
                'Events': obj.data.autoRollbackConfiguration.events
            };
        }
        if (obj.data.deploymentStyle) {
            reqParams.cfn['DeploymentStyle'] = {
                'DeploymentType': obj.data.deploymentStyle.deploymentType,
                'DeploymentOption': obj.data.deploymentStyle.deploymentOption
            };
        }
        if (obj.data.loadBalancerInfo) {
            reqParams.cfn['LoadBalancerInfo'] = {};
            if (obj.data.loadBalancerInfo.elbInfoList) {
                reqParams.cfn.LoadBalancerInfo['ElbInfoList'] = [];
                obj.data.loadBalancerInfo.elbInfoList.forEach(elbInfo => {
                    reqParams.cfn.LoadBalancerInfo['ElbInfoList'].push({
                        'Name': elbInfo.name
                    });
                });
            }
            if (obj.data.loadBalancerInfo.targetGroupInfoList) {
                reqParams.cfn.LoadBalancerInfo['TargetGroupInfoList'] = [];
                obj.data.loadBalancerInfo.targetGroupInfoList.forEach(targetGroupInfo => {
                    reqParams.cfn.LoadBalancerInfo['TargetGroupInfoList'].push({
                        'Name': targetGroupInfo.name
                    });
                });
            }
        }
        if (obj.data.ec2TagSet) { // TODO: Check this
            reqParams.cfn['Ec2TagSet'] = {};
            if (obj.data.ec2TagSet.Ec2TagSetList) {
                reqParams.cfn.Ec2TagSet['Ec2TagSetList'] = [];
                obj.data.ec2TagSet.Ec2TagSetList.forEach(ec2TagSet => {
                    reqParams.cfn.Ec2TagSet.Ec2TagSetList.push({
                        'Ec2TagGroup': [ec2TagSet]
                    });
                });
            }
        }
        if (obj.data.onPremisesTagSet) { // TODO: Check this
            reqParams.cfn['OnPremisesTagSet'] = {};
            if (obj.data.onPremisesTagSet.OnPremisesTagSetList) {
                reqParams.cfn.OnPremisesTagSet['OnPremisesTagSetList'] = [];
                obj.data.onPremisesTagSet.OnPremisesTagSetList.forEach(onPremisesTagSet => {
                    reqParams.cfn.OnPremisesTagSet.OnPremisesTagSetList.push({
                        'OnPremisesTagGroup': [onPremisesTagSet]
                    });
                });
            }
        }

        /*
        TODO:
        Deployment:
            Deployment
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codedeploy', obj.id, 'AWS::CodeDeploy::DeploymentGroup'),
            'region': obj.region,
            'service': 'codedeploy',
            'type': 'AWS::CodeDeploy::DeploymentGroup',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.deploymentGroupName
            }
        });
    } else if (obj.type == "codedeploy.deploymentconfiguration") {
        reqParams.cfn['DeploymentConfigName'] = obj.data.deploymentConfigName;
        reqParams.tf['deployment_config_name'] = obj.data.deploymentConfigName;
        if (obj.data.minimumHealthyHosts) {
            reqParams.cfn['MinimumHealthyHosts'] = {
                'Type': obj.data.minimumHealthyHosts.type,
                'Value': obj.data.minimumHealthyHosts.value
            };
            reqParams.tf['minimum_healthy_hosts'] = {
                'type': obj.data.minimumHealthyHosts.type,
                'value': obj.data.minimumHealthyHosts.value
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('codedeploy', obj.id, 'AWS::CodeDeploy::DeploymentConfig'),
            'region': obj.region,
            'service': 'codedeploy',
            'type': 'AWS::CodeDeploy::DeploymentConfig',
            'terraformType': 'aws_codedeploy_deployment_config',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.deploymentConfigName
            }
        });
    } else {
        return false;
    }

    return true;
});
