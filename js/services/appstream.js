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

    await sdkcall("AppStream", "describeFleets", {
        // no params
    }, true).then(async (data) => {
        $('#section-endusercomputing-appstream-fleets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Fleets.map(fleet => {
            $('#section-endusercomputing-appstream-fleets-datatable').bootstrapTable('append', [{
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

            return sdkcall("AppStream", "listAssociatedStacks", {
                FleetName: fleet.Name
            }, true).then((data) => {
                data.Names.forEach(stackName => {
                    $('#section-endusercomputing-appstream-stackfleetassociations-datatable').bootstrapTable('append', [{
                        f2id: fleet.Name + stackName,
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
        $('#section-endusercomputing-appstream-users-datatable').bootstrapTable('removeAll');

        data.Users.forEach(user => {
            $('#section-endusercomputing-appstream-users-datatable').bootstrapTable('append', [{
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
        $('#section-endusercomputing-appstream-stacks-datatable').bootstrapTable('removeAll');
        $('#section-endusercomputing-appstream-stackuserassociations-datatable').bootstrapTable('removeAll');

        data.Stacks.forEach(async (stack) => {
            $('#section-endusercomputing-appstream-stacks-datatable').bootstrapTable('append', [{
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
                    $('#section-endusercomputing-appstream-stackuserassociations-datatable').bootstrapTable('append', [{
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
        $('#section-endusercomputing-appstream-imagebuilders-datatable').bootstrapTable('removeAll');

        data.ImageBuilders.forEach(imageBuilder => {
            $('#section-endusercomputing-appstream-imagebuilders-datatable').bootstrapTable('append', [{
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
        $('#section-endusercomputing-appstream-directoryconfigs-datatable').bootstrapTable('removeAll');

        data.DirectoryConfigs.forEach(directoryConfig => {
            $('#section-endusercomputing-appstream-directoryconfigs-datatable').bootstrapTable('append', [{
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
        $('#section-endusercomputing-appstream-applicationautoscalingscalabletargets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.ScalableTargets.map(target => {
            return sdkcall("ApplicationAutoScaling", "describeScheduledActions", {
                ServiceNamespace: "appstream",
                ResourceId: target.ResourceId,
                ScalableDimension: target.ScalableDimension
            }, true).then((actions) => {
                target['ScheduledActions'] = actions.ScheduledActions;

                $('#section-endusercomputing-appstream-applicationautoscalingscalabletargets-datatable').bootstrapTable('append', [{
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
        $('#section-endusercomputing-appstream-applicationautoscalingscalingpolicies-datatable').bootstrapTable('removeAll');

        if (data.ScalableTargets) {
            data.ScalableTargets.forEach(target => {
                $('#section-endusercomputing-appstream-applicationautoscalingscalingpolicies-datatable').bootstrapTable('append', [{
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
}
