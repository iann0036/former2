/* ========================================================================== */
// CloudTrail
/* ========================================================================== */

sections.push({
    'category': 'Management &amp; Governance',
    'service': 'CloudTrail',
    'resourcetypes': {
        'Trails': {
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
                        field: 'homeregion',
                        title: 'Home Region',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'multiregion',
                        title: 'Multi Region',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'organization',
                        title: 'Organization',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'bucketname',
                        title: 'Bucket Name',
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

async function updateDatatableManagementAndGovernanceCloudTrail() {
    blockUI('#section-managementandgovernance-cloudtrail-trails-datatable');

    await sdkcall("CloudTrail", "describeTrails", {
        // no params
    }, true).then((data) => {
        $('#section-managementandgovernance-cloudtrail-trails-datatable').bootstrapTable('removeAll');

        data.trailList.forEach(trail => {
            $('#section-managementandgovernance-cloudtrail-trails-datatable').bootstrapTable('append', [{
                f2id: trail.TrailARN,
                f2type: 'cloudtrail.trail',
                f2data: trail,
                f2region: region,
                name: trail.Name,
                multiregion: trail.IsMultiRegionTrail,
                organization: trail.IsOrganizationTrail,
                homeregion: trail.HomeRegion,
                bucketname: trail.S3BucketName
            }]);
        });

        unblockUI('#section-managementandgovernance-cloudtrail-trails-datatable');
    });
}
