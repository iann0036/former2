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
        $('#section-robotics-robomaker-fleets-datatable').bootstrapTable('removeAll');

        await Promise.all(data.fleetDetails.map(fleet => {
            return sdkcall("RoboMaker", "describeFleet", {
                fleet: fleet.arn
            }, true).then((data) => {
                $('#section-robotics-robomaker-fleets-datatable').bootstrapTable('append', [{
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
        $('#section-robotics-robomaker-robots-datatable').bootstrapTable('removeAll');

        await Promise.all(data.robots.map(robot => {
            return sdkcall("RoboMaker", "describeRobot", {
                robot: robot.arn
            }, true).then((data) => {
                $('#section-robotics-robomaker-robots-datatable').bootstrapTable('append', [{
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
        $('#section-robotics-robomaker-robotapplications-datatable').bootstrapTable('removeAll');

        await Promise.all(data.robotApplicationSummaries.map(robotApplication => {
            return sdkcall("RoboMaker", "describeRobotApplication", {
                application: robotApplication.arn,
                applicationVersion: robotApplication.version
            }, true).then((data) => {
                $('#section-robotics-robomaker-robotapplications-datatable').bootstrapTable('append', [{
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
        $('#section-robotics-robomaker-simulationapplications-datatable').bootstrapTable('removeAll');

        await Promise.all(data.simulationApplicationSummaries.map(simulationApplication => {
            return sdkcall("RoboMaker", "describeSimulationApplication", {
                application: simulationApplication.arn,
                applicationVersion: simulationApplication.version
            }, true).then((data) => {
                $('#section-robotics-robomaker-simulationapplications-datatable').bootstrapTable('append', [{
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
