/* ========================================================================== */
// RoboMaker
/* ========================================================================== */

sections.push({
    'category': 'Robotics',
    'service': 'RoboMaker',
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
        'Robots': {
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
                        field: 'fleetarn',
                        title: 'Fleet ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'architecture',
                        title: 'Architecture',
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
        'Robot Applications': {
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
                    },
                    {
                        field: 'revisionid',
                        title: 'Revision ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Simulation Applications': {
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
                    },
                    {
                        field: 'revisionid',
                        title: 'Revision ID',
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

async function updateDatatableRoboticsRoboMaker() {
    blockUI('#section-robotics-robomaker-fleets-datatable');
    blockUI('#section-robotics-robomaker-robots-datatable');
    blockUI('#section-robotics-robomaker-robotapplications-datatable');
    blockUI('#section-robotics-robomaker-simulationapplications-datatable');

    await sdkcall("RoboMaker", "listFleets", {
        // no params
    }, true).then(async (data) => {
        $('#section-robotics-robomaker-fleets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.fleetDetails.map(fleet => {
            return sdkcall("RoboMaker", "describeFleet", {
                fleet: fleet.arn
            }, true).then((data) => {
                $('#section-robotics-robomaker-fleets-datatable').deferredBootstrapTable('append', [{
                    f2id: data.arn,
                    f2type: 'robomaker.fleet',
                    f2data: data,
                    f2region: region,
                    name: data.name,
                    creationtime: data.createdAt
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-robotics-robomaker-fleets-datatable');

    await sdkcall("RoboMaker", "listRobots", {
        // no params
    }, true).then(async (data) => {
        $('#section-robotics-robomaker-robots-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.robots.map(robot => {
            return sdkcall("RoboMaker", "describeRobot", {
                robot: robot.arn
            }, true).then((data) => {
                $('#section-robotics-robomaker-robots-datatable').deferredBootstrapTable('append', [{
                    f2id: data.arn,
                    f2type: 'robomaker.robot',
                    f2data: data,
                    f2region: region,
                    name: data.name,
                    fleetarn: data.fleetArn,
                    architecture: data.architecture,
                    creationtime: data.createdAt
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-robotics-robomaker-robots-datatable');

    await sdkcall("RoboMaker", "listRobotApplications", {
        versionQualifier: "ALL"
    }, true).then(async (data) => {
        $('#section-robotics-robomaker-robotapplications-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.robotApplicationSummaries.map(robotApplication => {
            return sdkcall("RoboMaker", "describeRobotApplication", {
                application: robotApplication.arn,
                applicationVersion: robotApplication.version
            }, true).then((data) => {
                $('#section-robotics-robomaker-robotapplications-datatable').deferredBootstrapTable('append', [{
                    f2id: data.arn + data.revisionId,
                    f2type: 'robomaker.robotapplication',
                    f2data: data,
                    f2region: region,
                    name: data.name,
                    version: data.version,
                    revisionid: data.revisionId
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-robotics-robomaker-robotapplications-datatable');

    await sdkcall("RoboMaker", "listSimulationApplications", {
        versionQualifier: "ALL"
    }, true).then(async (data) => {
        $('#section-robotics-robomaker-simulationapplications-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.simulationApplicationSummaries.map(simulationApplication => {
            return sdkcall("RoboMaker", "describeSimulationApplication", {
                application: simulationApplication.arn,
                applicationVersion: simulationApplication.version
            }, true).then((data) => {
                $('#section-robotics-robomaker-simulationapplications-datatable').deferredBootstrapTable('append', [{
                    f2id: data.arn + data.revisionId,
                    f2type: 'robomaker.simulationapplication',
                    f2data: data,
                    f2region: region,
                    name: data.name,
                    version: data.version,
                    revisionid: data.revisionId
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-robotics-robomaker-simulationapplications-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "robomaker.robot") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['GreengrassGroupId'] = obj.data.greengrassGroupId;
        reqParams.cfn['Architecture'] = obj.data.architecture;
        reqParams.cfn['Fleet'] = obj.data.fleetArn;
        reqParams.cfn['Tags'] = obj.data.tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('robomaker', obj.id, 'AWS::RoboMaker::Robot'),
            'region': obj.region,
            'service': 'robomaker',
            'type': 'AWS::RoboMaker::Robot',
            'options': reqParams
        });
    } else if (obj.type == "robomaker.fleet") {
        reqParams.cfn['Name'] = obj.data.name;
        reqParams.cfn['Tags'] = obj.data.tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('robomaker', obj.id, 'AWS::RoboMaker::Fleet'),
            'region': obj.region,
            'service': 'robomaker',
            'type': 'AWS::RoboMaker::Fleet',
            'options': reqParams
        });
    } else if (obj.type == "robomaker.robotapplication") {
        if (obj.data.version == "$LATEST") {
            reqParams.cfn['CurrentRevisionId'] = obj.data.revisionId;
            reqParams.cfn['Name'] = obj.data.name;
            if (obj.data.robotSoftwareSuite) {
                reqParams.cfn['RobotSoftwareSuite'] = {
                    'Name': obj.data.robotSoftwareSuite.name,
                    'Version': obj.data.robotSoftwareSuite.version
                };
            }
            if (obj.data.sources) {
                reqParams.cfn['Sources'] = [];
                obj.data.sources.forEach(source => {
                    reqParams.cfn['Sources'].push({
                        'Architecture': source.architecture,
                        'S3Bucket': source.s3Bucket,
                        'S3Key': source.s3Key
                    });
                });
            }
            reqParams.cfn['Tags'] = obj.data.tags;

            tracked_resources.push({
                'obj': obj,
                'logicalId': getResourceName('robomaker', obj.id, 'AWS::RoboMaker::RobotApplication'),
                'region': obj.region,
                'service': 'robomaker',
                'type': 'AWS::RoboMaker::RobotApplication',
                'options': reqParams
            });
        } else {
            reqParams.cfn['Application'] = obj.data.arn;
            reqParams.cfn['CurrentRevisionId'] = obj.data.revisionId;

            tracked_resources.push({
                'obj': obj,
                'logicalId': getResourceName('robomaker', obj.id, 'AWS::RoboMaker::RobotApplicationVersion'),
                'region': obj.region,
                'service': 'robomaker',
                'type': 'AWS::RoboMaker::RobotApplicationVersion',
                'options': reqParams
            });
        }
    } else if (obj.type == "robomaker.simulationapplication") {
        if (obj.data.version == "$LATEST") {
            reqParams.cfn['Name'] = obj.data.name;
            if (obj.data.robotSoftwareSuite) {
                reqParams.cfn['RobotSoftwareSuite'] = {
                    'Name': obj.data.robotSoftwareSuite.name,
                    'Version': obj.data.robotSoftwareSuite.version
                };
            }
            if (obj.data.simulationSoftwareSuite) {
                reqParams.cfn['SimulationSoftwareSuite'] = {
                    'Name': obj.data.simulationSoftwareSuite.name,
                    'Version': obj.data.simulationSoftwareSuite.version
                };
            }
            if (obj.data.renderingEngine) {
                reqParams.cfn['RenderingEngine'] = {
                    'Name': obj.data.renderingEngine.name,
                    'Version': obj.data.renderingEngine.version
                };
            }
            if (obj.data.sources) {
                reqParams.cfn['Sources'] = [];
                obj.data.sources.forEach(source => {
                    reqParams.cfn['Sources'].push({
                        'Architecture': source.architecture,
                        'S3Bucket': source.s3Bucket,
                        'S3Key': source.s3Key
                    });
                });
            }
            reqParams.cfn['CurrentRevisionId'] = obj.data.revisionId;
            reqParams.cfn['Tags'] = obj.data.tags;

            tracked_resources.push({
                'obj': obj,
                'logicalId': getResourceName('robomaker', obj.id, 'AWS::RoboMaker::SimulationApplication'),
                'region': obj.region,
                'service': 'robomaker',
                'type': 'AWS::RoboMaker::SimulationApplication',
                'options': reqParams
            });
        } else {
            reqParams.cfn['Application'] = obj.data.arn;
            reqParams.cfn['CurrentRevisionId'] = obj.data.revisionId;

            tracked_resources.push({
                'obj': obj,
                'logicalId': getResourceName('robomaker', obj.id, 'AWS::RoboMaker::SimulationApplicationVersion'),
                'region': obj.region,
                'service': 'robomaker',
                'type': 'AWS::RoboMaker::SimulationApplicationVersion',
                'options': reqParams
            });
        }
    } else {
        return false;
    }

    return true;
});
