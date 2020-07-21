/* ========================================================================== */
// WorkLink
/* ========================================================================== */

sections.push({
    'category': 'End User Computing',
    'service': 'WorkLink',
    'resourcetypes': {
        'Fleets': {
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
                        field: 'displayname',
                        title: 'Display Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'companycode',
                        title: 'Company Code',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Website Certificate Authority Associations': {
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
                    },
                    {
                        field: 'eventpattern',
                        title: 'Event Pattern',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'scheduleexpression',
                        title: 'Schedule Expression',
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
        }
    }
});

async function updateDatatableEndUserComputingWorkLink() {
    blockUI('#section-endusercomputing-worklink-fleets-datatable');
    blockUI('#section-endusercomputing-worklink-websitecertificateauthorityassociations-datatable');

    await sdkcall("WorkLink", "listFleets", {
        // no params
    }, true).then(async (data) => {
        $('#section-endusercomputing-worklink-fleets-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.FleetSummaryList.map(fleet => {
            return sdkcall("WorkLink", "describeFleetMetadata", {
                FleetArn: fleet.FleetArn
            }, true).then(async (data) => {
                $('#section-endusercomputing-worklink-fleets-datatable').deferredBootstrapTable('append', [{
                    f2id: fleet.FleetArn,
                    f2type: 'worklink.fleet',
                    f2data: data,
                    f2region: region,
                    name: data.FleetName,
                    displayname: data.DisplayName,
                    companycode: data.CompanyCode
                }]);

                await sdkcall("WorkLink", "listWebsiteCertificateAuthorities", {
                    FleetArn: fleet.FleetArn
                }, true).then(async (data) => {
                    $('#section-endusercomputing-worklink-websitecertificateauthorityassociations-datatable').deferredBootstrapTable('removeAll');

                    await Promise.all(data.WebsiteCertificateAuthorities.map(websiteca => {
                        return sdkcall("WorkLink", "describeWebsiteCertificateAuthority", {
                            FleetArn: fleet.FleetArn,
                            WebsiteCaId: websiteca.WebsiteCaId
                        }, true).then(async (data) => {
                            $('#section-endusercomputing-worklink-websitecertificateauthorityassociations-datatable').deferredBootstrapTable('append', [{
                                f2id: fleet.FleetArn,
                                f2type: 'worklink.websitecertificateauthority',
                                f2data: {
                                    'Certificate': data.Certificate,
                                    'DisplayName': data.DisplayName,
                                    'FleetArn': fleet.FleetArn
                                },
                                f2region: region,
                                displayname: data.DisplayName,
                                fleetarn: fleet.FleetArn
                            }]);
                        });
                    }));
                });
            });
        }));
    }).catch(() => { });

    unblockUI('#section-endusercomputing-worklink-fleets-datatable');
    unblockUI('#section-endusercomputing-worklink-websitecertificateauthorityassociations-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "worklink.fleet") {
        reqParams.tf['name'] = obj.data.FleetName;
        reqParams.tf['display_name'] = obj.data.DisplayName;
        reqParams.tf['optimize_for_end_user_location '] = obj.data.OptimizeForEndUserLocation;

        /*
        TODO:
        network
        identity_provider
        device_ca_certificate
        audit_stream_arn
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('worklink', obj.id, 'AWS::WorkLink::Fleet'), // not real resource type
            'region': obj.region,
            'service': 'worklink',
            'terraformType': 'aws_worklink_fleet',
            'options': reqParams
        });
    } else if (obj.type == "worklink.websitecertificateauthority") {
        reqParams.tf['fleet_arn'] = obj.data.FleetArn;
        reqParams.tf['certificate'] = obj.data.Certificate;
        reqParams.tf['display_name '] = obj.data.DisplayName;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('worklink', obj.id, 'AWS::WorkLink::WebsiteCertificateAuthorityAssociation'), // not real resource type
            'region': obj.region,
            'service': 'worklink',
            'terraformType': 'aws_worklink_website_certificate_authority_association',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
