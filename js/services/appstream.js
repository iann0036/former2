/* ========================================================================== */
// AppStream
/* ========================================================================== */

sections.push({
    'category': 'End User Computing',
    'service': 'AppStream',
    'resourcetypes': {
        'Fleets': {
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
                        field: 'fleettype',
                        title: 'Fleet Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Users': {
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
                        title: 'User Name',
                        field: 'username',
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
                        field: 'firstname',
                        title: 'First Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'lastname',
                        title: 'Last Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Stacks': {
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
        'Stack User Associations': {
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
                        title: 'Stack Name',
                        field: 'stackname',
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
                        field: 'username',
                        title: 'User Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Stack Fleet Associations': {
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
                        title: 'Stack Name',
                        field: 'stackname',
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
                        field: 'fleetname',
                        title: 'Fleet Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Image Builders': {
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
                    },
                    {
                        field: 'imagearn',
                        title: 'Image ARN',
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
                    }
                ]
            ]
        },
        'Directory Configs': {
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
                        field: 'oudistinguishednames',
                        title: 'OU Distinguished Names',
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
        'App Blocks': {
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
        'Application Fleet Associations': {
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
                        title: 'Application',
                        field: 'application',
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
                        field: 'fleet',
                        title: 'Fleet',
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

async function updateDatatableEndUserComputingAppStream() {
    blockUI('#section-endusercomputing-appstream-fleets-datatable');
    blockUI('#section-endusercomputing-appstream-users-datatable');
    blockUI('#section-endusercomputing-appstream-stacks-datatable');
    blockUI('#section-endusercomputing-appstream-stackuserassociations-datatable');
    blockUI('#section-endusercomputing-appstream-stackfleetassociations-datatable');
    blockUI('#section-endusercomputing-appstream-imagebuilders-datatable');
    blockUI('#section-endusercomputing-appstream-directoryconfigs-datatable');
    blockUI('#section-endusercomputing-appstream-applicationautoscalingscalabletargets-datatable');
    blockUI('#section-endusercomputing-appstream-applicationautoscalingscalingpolicies-datatable');
    blockUI('#section-endusercomputing-appstream-applications-datatable');
    blockUI('#section-endusercomputing-appstream-appblocks-datatable');
    blockUI('#section-endusercomputing-appstream-applicationfleetassociations-datatable');

    await sdkcall("AppStream", "describeFleets", {
        // no params
    }, true).then(async (data) => {
        $('#section-endusercomputing-appstream-fleets-datatable').deferredBootstrapTable('removeAll');
        $('#section-endusercomputing-appstream-stackfleetassociations-datatable').deferredBootstrapTable('removeAll');
        $('#section-endusercomputing-appstream-applicationfleetassociations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Fleets.map(async (fleet) => {
            $('#section-endusercomputing-appstream-fleets-datatable').deferredBootstrapTable('append', [{
                f2id: fleet.Arn,
                f2type: 'appstream.fleet',
                f2data: fleet,
                f2region: region,
                name: fleet.Name,
                displayname: fleet.DisplayName,
                description: fleet.Description,
                instancetype: fleet.InstanceType,
                fleettype: fleet.FleetType
            }]);

            await sdkcall("AppStream", "describeApplicationFleetAssociations", {
                FleetName: fleet.Name
            }, true).then((data) => {
                data.ApplicationFleetAssociations.forEach(association => {
                    $('#section-endusercomputing-appstream-applicationfleetassociations-datatable').deferredBootstrapTable('append', [{
                        f2id: association.FleetName + " " + association.ApplicationArn + " Application Fleet Association",
                        f2type: 'appstream.applicationfleetassociation',
                        f2data: {
                            'FleetName': association.FleetName,
                            'ApplicationArn': association.ApplicationArn
                        },
                        f2region: region,
                        fleet: fleet.FleetName,
                        application: association.ApplicationArn
                    }]);
                });
            });

            return sdkcall("AppStream", "listAssociatedStacks", {
                FleetName: fleet.Name
            }, true).then((data) => {
                data.Names.forEach(stackName => {
                    $('#section-endusercomputing-appstream-stackfleetassociations-datatable').deferredBootstrapTable('append', [{
                        f2id: fleet.Name + " " + stackName + " Stack Fleet Association",
                        f2type: 'appstream.stackfleetassociation',
                        f2data: {
                            'fleetname': fleet.Name,
                            'stackname': stackName
                        },
                        f2region: region,
                        fleetname: fleet.Name,
                        stackname: stackName
                    }]);
                });
            });
        }));

        unblockUI('#section-endusercomputing-appstream-fleets-datatable');
        unblockUI('#section-endusercomputing-appstream-stackuserassociations-datatable');
    });

    await sdkcall("AppStream", "describeUsers", {
        AuthenticationType: 'USERPOOL'
    }, true).then((data) => {
        $('#section-endusercomputing-appstream-users-datatable').deferredBootstrapTable('removeAll');

        data.Users.forEach(user => {
            $('#section-endusercomputing-appstream-users-datatable').deferredBootstrapTable('append', [{
                f2id: user.Arn,
                f2type: 'appstream.user',
                f2data: user,
                f2region: region,
                username: user.UserName,
                enabled: user.Enabled,
                firstname: user.FirstName,
                lastname: user.LastName
            }]);
        });

        unblockUI('#section-endusercomputing-appstream-users-datatable');
    });

    await sdkcall("AppStream", "describeStacks", {
        // no params
    }, true).then((data) => {
        $('#section-endusercomputing-appstream-stacks-datatable').deferredBootstrapTable('removeAll');
        $('#section-endusercomputing-appstream-stackuserassociations-datatable').deferredBootstrapTable('removeAll');

        data.Stacks.forEach(async (stack) => {
            $('#section-endusercomputing-appstream-stacks-datatable').deferredBootstrapTable('append', [{
                f2id: stack.Arn,
                f2type: 'appstream.stack',
                f2data: stack,
                f2region: region,
                f2link: 'https://console.aws.amazon.com/appstream2/home?region=' + region + '#/stacks?selected=' + stack.Name,
                name: stack.Name,
                displayname: stack.DisplayName,
                description: stack.Description
            }]);

            await sdkcall("AppStream", "describeUserStackAssociations", {
                StackName: stack.Name
            }, true).then((data) => {
                data.UserStackAssociations.forEach(userStackAssociation => {
                    $('#section-endusercomputing-appstream-stackuserassociations-datatable').deferredBootstrapTable('append', [{
                        f2id: userStackAssociation.StackName + userStackAssociation.UserName,
                        f2type: 'appstream.stackuserassociation',
                        f2data: userStackAssociation,
                        f2region: region,
                        stackname: userStackAssociation.StackName,
                        username: userStackAssociation.UserName
                    }]);
                });
            });
        });

        unblockUI('#section-endusercomputing-appstream-stacks-datatable');
        unblockUI('#section-endusercomputing-appstream-stackuserassociations-datatable');
    });

    await sdkcall("AppStream", "describeImageBuilders", {
        // no params
    }, true).then((data) => {
        $('#section-endusercomputing-appstream-imagebuilders-datatable').deferredBootstrapTable('removeAll');

        data.ImageBuilders.forEach(imageBuilder => {
            $('#section-endusercomputing-appstream-imagebuilders-datatable').deferredBootstrapTable('append', [{
                f2id: imageBuilder.Arn,
                f2type: 'appstream.imagebuilder',
                f2data: imageBuilder,
                f2region: region,
                name: imageBuilder.Name,
                displayname: imageBuilder.DisplayName,
                description: imageBuilder.Description,
                imagearn: imageBuilder.ImageArn,
                instancetype: imageBuilder.InstanceType
            }]);
        });

        unblockUI('#section-endusercomputing-appstream-imagebuilders-datatable');
    });

    await sdkcall("AppStream", "describeDirectoryConfigs", {
        // no params
    }, true).then((data) => {
        $('#section-endusercomputing-appstream-directoryconfigs-datatable').deferredBootstrapTable('removeAll');

        data.DirectoryConfigs.forEach(directoryConfig => {
            $('#section-endusercomputing-appstream-directoryconfigs-datatable').deferredBootstrapTable('append', [{
                f2id: directoryConfig.DirectoryName,
                f2type: 'appstream.directoryconfig',
                f2data: directoryConfig,
                f2region: region,
                name: directoryConfig.DirectoryName,
                oudistinguishednames: directoryConfig.OrganizationalUnitDistinguishedNames.join(", "),
                creationtime: directoryConfig.CreatedTime
            }]);
        });

        unblockUI('#section-endusercomputing-appstream-directoryconfigs-datatable');
    });

    await sdkcall("ApplicationAutoScaling", "describeScalableTargets", {
        ServiceNamespace: "appstream"
    }, true).then(async (data) => {
        $('#section-endusercomputing-appstream-applicationautoscalingscalabletargets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ScalableTargets.map(target => {
            return sdkcall("ApplicationAutoScaling", "describeScheduledActions", {
                ServiceNamespace: "appstream",
                ResourceId: target.ResourceId,
                ScalableDimension: target.ScalableDimension
            }, true).then((actions) => {
                target['ScheduledActions'] = actions.ScheduledActions;

                $('#section-endusercomputing-appstream-applicationautoscalingscalabletargets-datatable').deferredBootstrapTable('append', [{
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

        unblockUI('#section-endusercomputing-appstream-applicationautoscalingscalabletargets-datatable');
    });

    await sdkcall("ApplicationAutoScaling", "describeScalingPolicies", {
        ServiceNamespace: "appstream"
    }, true).then(async (data) => {
        $('#section-endusercomputing-appstream-applicationautoscalingscalingpolicies-datatable').deferredBootstrapTable('removeAll');

        if (data.ScalableTargets) {
            data.ScalableTargets.forEach(target => {
                $('#section-endusercomputing-appstream-applicationautoscalingscalingpolicies-datatable').deferredBootstrapTable('append', [{
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

        unblockUI('#section-endusercomputing-appstream-applicationautoscalingscalingpolicies-datatable');
    });

    await sdkcall("AppStream", "describeApplications", {
        // no params
    }, true).then(async (data) => {
        $('#section-endusercomputing-appstream-applications-datatable').deferredBootstrapTable('removeAll');

        data.Applications.forEach(application => {
            $('#section-endusercomputing-appstream-applications-datatable').deferredBootstrapTable('append', [{
                f2id: application.Arn,
                f2type: 'appstream.application',
                f2data: application,
                f2region: region,
                name: application.Name,
                displayname: application.DisplayName,
                description: application.Description
            }]);
        });

        unblockUI('#section-endusercomputing-appstream-applications-datatable');
    });

    await sdkcall("AppStream", "describeAppBlocks", {
        // no params
    }, true).then(async (data) => {
        $('#section-endusercomputing-appstream-appblocks-datatable').deferredBootstrapTable('removeAll');

        data.AppBlocks.forEach(appblock => {
            $('#section-endusercomputing-appstream-appblocks-datatable').deferredBootstrapTable('append', [{
                f2id: appblock.Arn,
                f2type: 'appstream.appblock',
                f2data: appblock,
                f2region: region,
                name: appblock.Name,
                displayname: appblock.DisplayName,
                description: appblock.Description
            }]);
        });

        unblockUI('#section-endusercomputing-appstream-appblocks-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "appstream.stackfleetassociation") {
        reqParams.cfn['FleetName'] = obj.data.fleetname;
        reqParams.cfn['StackName'] = obj.data.stackname;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appstream', obj.id, 'AWS::AppStream::StackFleetAssociation'),
            'region': obj.region,
            'service': 'appstream',
            'type': 'AWS::AppStream::StackFleetAssociation',
            'options': reqParams
        });
    } else if (obj.type == "appstream.fleet") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['DisplayName'] = obj.data.DisplayName;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['ImageName'] = obj.data.ImageName;
        reqParams.cfn['ImageArn'] = obj.data.ImageArn;
        reqParams.cfn['InstanceType'] = obj.data.InstanceType;
        reqParams.cfn['FleetType'] = obj.data.FleetType;
        reqParams.cfn['MaxUserDurationInSeconds'] = obj.data.MaxUserDurationInSeconds;
        reqParams.cfn['DisconnectTimeoutInSeconds'] = obj.data.DisconnectTimeoutInSeconds;
        reqParams.cfn['VpcConfig'] = obj.data.VpcConfig;
        reqParams.cfn['EnableDefaultInternetAccess'] = obj.data.EnableDefaultInternetAccess;
        reqParams.cfn['DomainJoinInfo'] = obj.data.DomainJoinInfo;
        if (obj.data.ComputeCapacityStatus) {
            reqParams.cfn['ComputeCapacity'] = obj.data.ComputeCapacityStatus.Desired;
        }
        reqParams.cfn['IdleDisconnectTimeoutInSeconds'] = obj.data.IdleDisconnectTimeoutInSeconds;
        reqParams.cfn['IamRoleArn'] = obj.data.IamRoleArn;
        reqParams.cfn['StreamView'] = obj.data.StreamView;

        /*
        TODO:
        Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appstream', obj.id, 'AWS::AppStream::Fleet'),
            'region': obj.region,
            'service': 'appstream',
            'type': 'AWS::AppStream::Fleet',
            'options': reqParams
        });
    } else if (obj.type == "appstream.user") {
        reqParams.cfn['UserName'] = obj.data.UserName;
        reqParams.cfn['FirstName'] = obj.data.FirstName;
        reqParams.cfn['LastName'] = obj.data.LastName;
        reqParams.cfn['AuthenticationType'] = obj.data.AuthenticationType;

        /*
        TODO:
        MessageAction: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appstream', obj.id, 'AWS::AppStream::User'),
            'region': obj.region,
            'service': 'appstream',
            'type': 'AWS::AppStream::User',
            'options': reqParams
        });
    } else if (obj.type == "appstream.stack") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['DisplayName'] = obj.data.DisplayName;
        reqParams.cfn['StorageConnectors'] = obj.data.StorageConnectors;
        reqParams.cfn['RedirectURL'] = obj.data.RedirectURL;
        reqParams.cfn['FeedbackURL'] = obj.data.FeedbackURL;
        reqParams.cfn['UserSettings'] = obj.data.UserSettings;
        if (obj.data.ApplicationSettings) {
            reqParams.cfn['ApplicationSettings'] = {
                'Enabled': obj.data.ApplicationSettings.Enabled,
                'SettingsGroup': obj.data.ApplicationSettings.SettingsGroup
            };
        }
        reqParams.cfn['AccessEndpoints'] = obj.data.AccessEndpoints;

        /*
        TODO:
        AttributesToDelete: 
            - String
        DeleteStorageConnectors: Boolean
        Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appstream', obj.id, 'AWS::AppStream::Stack'),
            'region': obj.region,
            'service': 'appstream',
            'type': 'AWS::AppStream::Stack',
            'options': reqParams
        });
    } else if (obj.type == "appstream.imagebuilder") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['DisplayName'] = obj.data.DisplayName;
        reqParams.cfn['ImageArn'] = obj.data.ImageArn;
        reqParams.cfn['VpcConfig'] = obj.data.VpcConfig;
        reqParams.cfn['InstanceType'] = obj.data.InstanceType;
        reqParams.cfn['EnableDefaultInternetAccess'] = obj.data.EnableDefaultInternetAccess;
        reqParams.cfn['DomainJoinInfo'] = obj.data.DomainJoinInfo;
        reqParams.cfn['AppstreamAgentVersion'] = obj.data.AppstreamAgentVersion;
        reqParams.cfn['AccessEndpoints'] = obj.data.AccessEndpoints;
        reqParams.cfn['ImageName'] = obj.data.ImageArn.split("/").pop();
        reqParams.cfn['IamRoleArn'] = obj.data.IamRoleArn;

        /*
        TODO:
        Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appstream', obj.id, 'AWS::AppStream::ImageBuilder'),
            'region': obj.region,
            'service': 'appstream',
            'type': 'AWS::AppStream::ImageBuilder',
            'options': reqParams
        });
    } else if (obj.type == "appstream.directoryconfig") {
        reqParams.cfn['DirectoryName'] = obj.data.DirectoryName;
        reqParams.cfn['ServiceAccountCredentials'] = obj.data.ServiceAccountCredentials;
        reqParams.cfn['OrganizationalUnitDistinguishedNames'] = obj.data.OrganizationalUnitDistinguishedNames;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appstream', obj.id, 'AWS::AppStream::DirectoryConfig'),
            'region': obj.region,
            'service': 'appstream',
            'type': 'AWS::AppStream::DirectoryConfig',
            'options': reqParams
        });
    } else if (obj.type == "appstream.stackuserassociation") {
        reqParams.cfn['StackName'] = obj.data.StackName;
        reqParams.cfn['UserName'] = obj.data.UserName;
        reqParams.cfn['AuthenticationType'] = obj.data.AuthenticationType;
        reqParams.cfn['SendEmailNotification'] = obj.data.SendEmailNotification;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appstream', obj.id, 'AWS::AppStream::StackUserAssociation'),
            'region': obj.region,
            'service': 'appstream',
            'type': 'AWS::AppStream::StackUserAssociation',
            'options': reqParams
        });
    } else if (obj.type == "appstream.application") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['DisplayName'] = obj.data.DisplayName;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['LaunchPath'] = obj.data.LaunchPath;
        reqParams.cfn['LaunchParameters'] = obj.data.LaunchParameters;
        reqParams.cfn['WorkingDirectory'] = obj.data.WorkingDirectory;
        reqParams.cfn['AppBlockArn'] = obj.data.AppBlockArn;
        reqParams.cfn['IconS3Location'] = obj.data.IconS3Location;
        reqParams.cfn['Platforms'] = obj.data.Platforms;
        reqParams.cfn['InstanceFamilies'] = obj.data.InstanceFamilies;

        /*
        TODO:
        AttributesToDelete: 
            - String
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appstream', obj.id, 'AWS::AppStream::Application'),
            'region': obj.region,
            'service': 'appstream',
            'type': 'AWS::AppStream::Application',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Arn
            }
        });
    } else if (obj.type == "appstream.application") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['DisplayName'] = obj.data.DisplayName;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['SourceS3Location'] = obj.data.SourceS3Location;
        reqParams.cfn['SetupScriptDetails'] = obj.data.SetupScriptDetails;

        /*
        TODO:
        Tags: 
            - Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appstream', obj.id, 'AWS::AppStream::Application'),
            'region': obj.region,
            'service': 'appstream',
            'type': 'AWS::AppStream::Application',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Arn
            }
        });
    } else if (obj.type == "appstream.applicationfleetassociation") {
        reqParams.cfn['ApplicationArn'] = obj.data.ApplicationArn;
        reqParams.cfn['FleetName'] = obj.data.FleetName;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('appstream', obj.id, 'AWS::AppStream::ApplicationFleetAssociation'),
            'region': obj.region,
            'service': 'appstream',
            'type': 'AWS::AppStream::ApplicationFleetAssociation',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
