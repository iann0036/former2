/* ========================================================================== */
// GuardDuty
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity, &amp; Compliance',
    'service': 'GuardDuty',
    'resourcetypes': {
        'Master': {
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
                        title: 'Account ID',
                        field: 'accountid',
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
                        field: 'detectorid',
                        title: 'Detector ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Detectors': {
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
                        field: 'findingpublishingfrequency',
                        title: 'Finding Publishing Frequency',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Members': {
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
                        title: 'Account ID',
                        field: 'accountid',
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
                        field: 'detectorid',
                        title: 'Detector ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'email',
                        title: 'Email',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'masterid',
                        title: 'Master ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'relationshipstatus',
                        title: 'Relationship Status',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Filters': {
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
                        field: 'detectorid',
                        title: 'Detector ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'action',
                        title: 'Action',
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
                        field: 'rank',
                        title: 'Rank',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'IP Sets': {
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
                        field: 'detectorid',
                        title: 'Detector ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'format',
                        title: 'Format',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Threat Intel Sets': {
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
                        field: 'detectorid',
                        title: 'Detector ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'format',
                        title: 'Format',
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

async function updateDatatableSecurityIdentityAndComplianceGuardDuty() {
    blockUI('#section-securityidentityandcompliance-guardduty-master-datatable');
    blockUI('#section-securityidentityandcompliance-guardduty-detectors-datatable');
    blockUI('#section-securityidentityandcompliance-guardduty-members-datatable');
    blockUI('#section-securityidentityandcompliance-guardduty-filters-datatable');
    blockUI('#section-securityidentityandcompliance-guardduty-ipsets-datatable');
    blockUI('#section-securityidentityandcompliance-guardduty-threatintelsets-datatable');

    await sdkcall("GuardDuty", "listDetectors", {
        // no params
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-guardduty-detectors-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-guardduty-members-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-guardduty-filters-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-guardduty-ipsets-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-guardduty-threatintelsets-datatable').deferredBootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-guardduty-master-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DetectorIds.map(detectorId => {
            return Promise.all([
                sdkcall("GuardDuty", "listMembers", {
                    DetectorId: detectorId
                }, true).then((data) => {
                    data.Members.forEach(member => {
                        $('#section-securityidentityandcompliance-guardduty-members-datatable').deferredBootstrapTable('append', [{
                            f2id: member.AccountId,
                            f2type: 'guardduty.member',
                            f2data: member,
                            f2region: region,
                            accountid: member.AccountId,
                            detectorid: member.DetectorId,
                            email: member.Email,
                            masterid: member.MasterId,
                            relationshipstatus: member.RelationshipStatus
                        }]);
                    });
                }),
                sdkcall("GuardDuty", "listFilters", {
                    DetectorId: detectorId
                }, true).then(async (data) => {
                    await Promise.all(data.FilterNames.map(filterName => {
                        return sdkcall("GuardDuty", "getFilter", {
                            DetectorId: detectorId,
                            FilterName: filterName
                        }, true).then((data) => {
                            data['DetectorId'] = detectorId;
                            $('#section-securityidentityandcompliance-guardduty-filters-datatable').deferredBootstrapTable('append', [{
                                f2id: data.Name,
                                f2type: 'guardduty.filter',
                                f2data: data,
                                f2region: region,
                                name: data.Name,
                                action: data.Action,
                                description: data.Description,
                                rank: data.Rank,
                                detectorid: detectorId
                            }]);
                        });
                    }));
                }),
                sdkcall("GuardDuty", "listIPSets", {
                    DetectorId: detectorId
                }, true).then(async (data) => {
                    await Promise.all(data.IpSetIds.map(ipSetId => {
                        return sdkcall("GuardDuty", "getIPSet", {
                            DetectorId: detectorId,
                            IpSetId: ipSetId
                        }, true).then((data) => {
                            data['DetectorId'] = detectorId;
                            $('#section-securityidentityandcompliance-guardduty-ipsets-datatable').deferredBootstrapTable('append', [{
                                f2id: data.Name,
                                f2type: 'guardduty.ipset',
                                f2data: data,
                                f2region: region,
                                name: data.Name,
                                format: data.Format,
                                id: data.ipSetId,
                                detectorid: detectorId
                            }]);
                        });
                    }));
                }),
                sdkcall("GuardDuty", "listThreatIntelSets", {
                    DetectorId: detectorId
                }, true).then(async (data) => {
                    await Promise.all(data.ThreatIntelSetIds.map(threatIntelSetId => {
                        return sdkcall("GuardDuty", "getThreatIntelSet", {
                            DetectorId: detectorId,
                            ThreatIntelSetId: threatIntelSetId
                        }, true).then((data) => {
                            data['DetectorId'] = detectorId;
                            $('#section-securityidentityandcompliance-guardduty-ipsets-datatable').deferredBootstrapTable('append', [{
                                f2id: data.Name,
                                f2type: 'guardduty.threatintelset',
                                f2data: data,
                                f2region: region,
                                name: data.Name,
                                format: data.Format,
                                id: threatIntelSetId,
                                detectorid: detectorId
                            }]);
                        });
                    }));
                }),
                sdkcall("GuardDuty", "getMasterAccount", {
                    DetectorId: detectorId
                }, true).then((data) => {
                    if (data.Master) {
                        data.Master['DetectorId'] = detectorId;
                        $('#section-securityidentityandcompliance-guardduty-master-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Master.AccountId,
                            f2type: 'guardduty.master',
                            f2data: data,
                            f2region: region,
                            accountid: data.Master.AccountId,
                            detectorid: detectorId
                        }]);
                    }
                }),
                sdkcall("GuardDuty", "getDetector", {
                    DetectorId: detectorId
                }, true).then((data) => {
                    $('#section-securityidentityandcompliance-guardduty-detectors-datatable').deferredBootstrapTable('append', [{
                        f2id: detectorId,
                        f2type: 'guardduty.detector',
                        f2data: data,
                        f2region: region,
                        id: detectorId,
                        findingpublishingfrequency: data.FindingPublishingFrequency
                    }]);
                })
            ]);
        }));

        unblockUI('#section-securityidentityandcompliance-guardduty-detectors-datatable');
        unblockUI('#section-securityidentityandcompliance-guardduty-members-datatable');
        unblockUI('#section-securityidentityandcompliance-guardduty-filters-datatable');
        unblockUI('#section-securityidentityandcompliance-guardduty-ipsets-datatable');
        unblockUI('#section-securityidentityandcompliance-guardduty-threatintelsets-datatable');
        unblockUI('#section-securityidentityandcompliance-guardduty-master-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "guardduty.member") {
        reqParams.cfn['DetectorId'] = obj.data.DetectorId;
        reqParams.tf['detector_id'] = obj.data.DetectorId;
        reqParams.cfn['Email'] = obj.data.Email;
        reqParams.tf['email'] = obj.data.Email;
        reqParams.cfn['MemberId'] = obj.data.AccountId;
        reqParams.tf['account_id'] = obj.data.AccountId;

        /*
        SKIPPED: Message
        SKIPPED: DisableEmailNotification
        
        TODO:
        Status: String
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('guardduty', obj.id, 'AWS::GuardDuty::Member'),
            'region': obj.region,
            'service': 'guardduty',
            'type': 'AWS::GuardDuty::Member',
            'terraformType': 'aws_guardduty_member',
            'options': reqParams
        });
    } else if (obj.type == "guardduty.filter") {
        reqParams.cfn['Action'] = obj.data.Action;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Rank'] = obj.data.Rank;
        reqParams.cfn['DetectorId'] = obj.data.DetectorId;
        reqParams.cfn['FindingCriteria'] = obj.data.FindingCriteria;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('guardduty', obj.id, 'AWS::GuardDuty::Filter'),
            'region': obj.region,
            'service': 'guardduty',
            'type': 'AWS::GuardDuty::Filter',
            'options': reqParams
        });
    } else if (obj.type == "guardduty.ipset") {
        reqParams.cfn['Format'] = obj.data.Format;
        reqParams.tf['format'] = obj.data.Format;
        reqParams.cfn['Location'] = obj.data.Location;
        reqParams.tf['location'] = obj.data.Location;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        if (obj.data.Status == "ACTIVE") {
            reqParams.cfn['Activate'] = true;
            reqParams.tf['activate'] = true;
        } else {
            reqParams.cfn['Activate'] = false;
            reqParams.tf['activate'] = false;
        }
        reqParams.cfn['DetectorId'] = obj.data.DetectorId;
        reqParams.tf['detector_id'] = obj.data.DetectorId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('guardduty', obj.id, 'AWS::GuardDuty::IPSet'),
            'region': obj.region,
            'service': 'guardduty',
            'type': 'AWS::GuardDuty::IPSet',
            'terraformType': 'aws_guardduty_ipset',
            'options': reqParams
        });
    } else if (obj.type == "guardduty.threatintelset") {
        reqParams.cfn['Format'] = obj.data.Format;
        reqParams.tf['format'] = obj.data.Format;
        reqParams.cfn['Location'] = obj.data.Location;
        reqParams.tf['location'] = obj.data.Location;
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        if (obj.data.Status == "ACTIVE") {
            reqParams.cfn['Activate'] = true;
            reqParams.tf['activate'] = true;
        } else {
            reqParams.cfn['Activate'] = false;
            reqParams.tf['activate'] = false;
        }
        reqParams.cfn['DetectorId'] = obj.data.DetectorId;
        reqParams.tf['detector_id'] = obj.data.DetectorId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('guardduty', obj.id, 'AWS::GuardDuty::ThreatIntelSet'),
            'region': obj.region,
            'service': 'guardduty',
            'type': 'AWS::GuardDuty::ThreatIntelSet',
            'terraformType': 'aws_guardduty_threatintelset',
            'options': reqParams
        });
    } else if (obj.type == "guardduty.master") {
        reqParams.cfn['DetectorId'] = obj.data.DetectorId;
        reqParams.cfn['MasterId'] = obj.data.AccountId;
        reqParams.cfn['InvitationId'] = obj.data.InvitationId;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('guardduty', obj.id, 'AWS::GuardDuty::Master'),
            'region': obj.region,
            'service': 'guardduty',
            'type': 'AWS::GuardDuty::Master',
            'options': reqParams
        });
    } else if (obj.type == "guardduty.detector") {
        if (obj.data.Status == "ENABLED") {
            reqParams.cfn['Enable'] = true;
            reqParams.tf['enable'] = true;
        } else {
            reqParams.cfn['Enable'] = false;
            reqParams.tf['enable'] = false;
        }
        reqParams.cfn['FindingPublishingFrequency'] = obj.data.FindingPublishingFrequency;
        reqParams.tf['finding_publishing_frequency'] = obj.data.FindingPublishingFrequency;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('guardduty', obj.id, 'AWS::GuardDuty::Detector'),
            'region': obj.region,
            'service': 'guardduty',
            'type': 'AWS::GuardDuty::Detector',
            'terraformType': 'aws_guardduty_detector',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
