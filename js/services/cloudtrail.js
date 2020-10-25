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
    }, true).then(async (data) => {
        $('#section-managementandgovernance-cloudtrail-trails-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.trailList.map(async (trail) => {
            return sdkcall("CloudTrail", "getTrailStatus", {
                Name: trail.TrailARN
            }, true).then(async (trailstatus) => {
                trail['IsLogging'] = trailstatus.IsLogging;
                trail['Tags'] = await getResourceTags(trail.TrailARN);

                $('#section-managementandgovernance-cloudtrail-trails-datatable').deferredBootstrapTable('append', [{
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
        }));

        unblockUI('#section-managementandgovernance-cloudtrail-trails-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "cloudtrail.trail") {
        reqParams.cfn['TrailName'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['S3BucketName'] = obj.data.S3BucketName;
        reqParams.tf['s3_bucket_name'] = obj.data.S3BucketName;
        reqParams.cfn['S3KeyPrefix'] = obj.data.S3KeyPrefix;
        reqParams.tf['s3_key_prefix'] = obj.data.S3KeyPrefix;
        if (obj.data.SnsTopicARN) {
            reqParams.cfn['SnsTopicName'] = obj.data.SnsTopicARN.split(":").pop();
            reqParams.tf['sns_topic_name'] = obj.data.SnsTopicARN.split(":").pop();
        }
        reqParams.cfn['IncludeGlobalServiceEvents'] = obj.data.IncludeGlobalServiceEvents;
        reqParams.tf['include_global_service_events'] = obj.data.IncludeGlobalServiceEvents;
        reqParams.cfn['IsMultiRegionTrail'] = obj.data.IsMultiRegionTrail;
        reqParams.tf['is_multi_region_trail'] = obj.data.IsMultiRegionTrail;
        reqParams.cfn['EnableLogFileValidation'] = obj.data.LogFileValidationEnabled;
        reqParams.tf['enable_log_file_validation'] = obj.data.LogFileValidationEnabled;
        reqParams.cfn['CloudWatchLogsLogGroupArn'] = obj.data.CloudWatchLogsLogGroupArn;
        reqParams.tf['cloud_watch_logs_group_arn'] = obj.data.CloudWatchLogsLogGroupArn;
        reqParams.cfn['CloudWatchLogsRoleArn'] = obj.data.CloudWatchLogsRoleArn;
        reqParams.tf['cloud_watch_logs_role_arn'] = obj.data.CloudWatchLogsRoleArn;
        reqParams.cfn['KMSKeyId'] = obj.data.KmsKeyId;
        reqParams.tf['kms_key_id'] = obj.data.KmsKeyId;
        reqParams.cfn['IsLogging'] = obj.data.IsLogging;
        reqParams.tf['enable_logging'] = obj.data.IsLogging;
        reqParams.cfn['Tags'] = obj.data.Tags;
        
        /*
        TODO:
        EventSelectors:
            - EventSelector
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('cloudtrail', obj.id, 'AWS::CloudTrail::Trail'),
            'region': obj.region,
            'service': 'cloudtrail',
            'type': 'AWS::CloudTrail::Trail',
            'terraformType': 'aws_cloudtrail',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.Name,
                'GetAtt': {
                    'Arn': obj.data.TrailARN,
                    'SnsTopicArn': obj.data.SnsTopicARN
                },
                'Import': {
                    'TrailName': obj.data.Name
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
