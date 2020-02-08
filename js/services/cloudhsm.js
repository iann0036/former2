/* ========================================================================== */
// CloudHSM
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity &amp; Compliance',
    'service': 'CloudHSM',
    'resourcetypes': {
        'Clusters': {
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
                        field: 'type',
                        title: 'Type',
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
                    },
                    {
                        field: 'vpcid',
                        title: 'VPC ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'HSMs': {
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
                        field: 'clusterid',
                        title: 'Cluster ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'ip',
                        title: 'IP Address',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'availabilityzone',
                        title: 'Availability Zone',
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

async function updateDatatableSecurityIdentityAndComplianceCloudHSM() {
    blockUI('#section-securityidentityandcompliance-cloudhsm-clusters-datatable');
    blockUI('#section-securityidentityandcompliance-cloudhsm-hsms-datatable');

    await sdkcall("CloudHSMV2", "describeClusters", {
        // no params
    }, true).then(async (data) => {
        $('#section-securityidentityandcompliance-cloudhsm-clusters-datatable').bootstrapTable('removeAll');
        $('#section-securityidentityandcompliance-cloudhsm-hsms-datatable').bootstrapTable('removeAll');

        data.Clusters.forEach(cluster => {
            $('#section-securityidentityandcompliance-cloudhsm-clusters-datatable').bootstrapTable('append', [{
                f2id: cluster.ClusterId,
                f2type: 'cloudhsm.cluster',
                f2data: cluster,
                f2region: region,
                id: cluster.ClusterId,
                type: cluster.HsmType,
                creationtime: cluster.CreateTimestamp,
                vpcid: cluster.VpcId
            }]);

            if (cluster.Hsms) {
                cluster.Hsms.forEach(hsm => {
                    $('#section-securityidentityandcompliance-cloudhsm-hsms-datatable').bootstrapTable('append', [{
                        f2id: hsm.HsmId,
                        f2type: 'cloudhsm.hsm',
                        f2data: hsm,
                        f2region: region,
                        id: hsm.HsmId,
                        clusterid: hsm.ClusterId,
                        availabilityzone: hsm.AvailabilityZone,
                        ip: hsm.EniIp
                    }]);
                });
            }
        });

        unblockUI('#section-securityidentityandcompliance-cloudhsm-clusters-datatable');
        unblockUI('#section-securityidentityandcompliance-cloudhsm-hsms-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
