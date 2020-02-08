/* ========================================================================== */
// GuardDuty
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity &amp; Compliance',
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
        $('#section-securityidentityandcompliance-guardduty-detectors-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-guardduty-members-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-guardduty-filters-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-guardduty-ipsets-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-guardduty-threatintelsets-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-guardduty-master-datatable').bootstrapTable('removeAll');

        await Promise.all(data.DetectorIds.map(detectorId => {
            return Promise.all([
                sdkcall("GuardDuty", "listMembers", {
                    DetectorId: detectorId
                }, true).then((data) => {
                    data.Members.forEach(member => {
                        $('#section-securityidentityandcompliance-guardduty-members-datatable').bootstrapTable('append', [{
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
                            $('#section-securityidentityandcompliance-guardduty-filters-datatable').bootstrapTable('append', [{
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
                            $('#section-securityidentityandcompliance-guardduty-ipsets-datatable').bootstrapTable('append', [{
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
                            $('#section-securityidentityandcompliance-guardduty-ipsets-datatable').bootstrapTable('append', [{
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
                        $('#section-securityidentityandcompliance-guardduty-master-datatable').bootstrapTable('append', [{
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
                    $('#section-securityidentityandcompliance-guardduty-detectors-datatable').bootstrapTable('append', [{
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
    
    } else {
        return false;
    }

    return true;
});
