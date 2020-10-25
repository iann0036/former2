/* ========================================================================== */
// Database Migration Service
/* ========================================================================== */

sections.push({
    'category': 'Migration &amp; Transfer',
    'service': 'Database Migration Service',
    'resourcetypes': {
        'Endpoints': {
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
                        field: 'enginename',
                        title: 'Engine Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'servername',
                        title: 'Server Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'databasename',
                        title: 'Database Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'endpointtype',
                        title: 'Endpoint Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Replication Instances': {
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
                        field: 'instanceclass',
                        title: 'Instance Class',
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
                    },
                    {
                        field: 'allocatedstorage',
                        title: 'Allocated Storage',
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
        'Replication Tasks': {
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
                        field: 'sourceendpointarn',
                        title: 'Source Endpoint ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'targetendpointarn',
                        title: 'Target Endpoint ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'replicationinstancearn',
                        title: 'Replication Instance ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'migrationtype',
                        title: 'Migration Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Replication Subnet Groups': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
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
        'Certificates': {
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
                        field: 'validfrom',
                        title: 'Valid From',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'validto',
                        title: 'Valid To',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'keylength',
                        title: 'Key Length',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'signingalgorithm',
                        title: 'Signing Algorithm',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Event Subscriptions': {
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
                        field: 'sourcetype',
                        title: 'Source Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'snstopicarn',
                        title: 'SNS Topic ARN',
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

async function updateDatatableMigrationAndTransferDatabaseMigrationService() {
    blockUI('#section-migrationandtransfer-databasemigrationservice-endpoints-datatable');
    blockUI('#section-migrationandtransfer-databasemigrationservice-replicationinstances-datatable');
    blockUI('#section-migrationandtransfer-databasemigrationservice-replicationtasks-datatable');
    blockUI('#section-migrationandtransfer-databasemigrationservice-replicationsubnetgroups-datatable');
    blockUI('#section-migrationandtransfer-databasemigrationservice-certificates-datatable');
    blockUI('#section-migrationandtransfer-databasemigrationservice-eventsubscriptions-datatable');

    await sdkcall("DMS", "describeEndpoints", {
        // no params
    }, true).then((data) => {
        $('#section-migrationandtransfer-databasemigrationservice-endpoints-datatable').deferredBootstrapTable('removeAll');

        data.Endpoints.forEach(endpoint => {
            $('#section-migrationandtransfer-databasemigrationservice-endpoints-datatable').deferredBootstrapTable('append', [{
                f2id: endpoint.EndpointIdentifier,
                f2type: 'dms.endpoint',
                f2data: endpoint,
                f2region: region,
                id: endpoint.EndpointIdentifier,
                endpointtype: endpoint.EndpointType,
                enginename: endpoint.EngineDisplayName,
                databasename: endpoint.DatabaseName,
                servername: endpoint.ServerName
            }]);
        });

        unblockUI('#section-migrationandtransfer-databasemigrationservice-endpoints-datatable');
    });

    await sdkcall("DMS", "describeReplicationInstances", {
        // no params
    }, true).then((data) => {
        $('#section-migrationandtransfer-databasemigrationservice-replicationinstances-datatable').deferredBootstrapTable('removeAll');

        data.ReplicationInstances.forEach(replicationInstance => {
            $('#section-migrationandtransfer-databasemigrationservice-replicationinstances-datatable').deferredBootstrapTable('append', [{
                f2id: replicationInstance.ReplicationInstanceIdentifier,
                f2type: 'dms.replicationinstance',
                f2data: replicationInstance,
                f2region: region,
                id: replicationInstance.ReplicationInstanceIdentifier,
                instanceclass: replicationInstance.ReplicationInstanceClass,
                allocatedstorage: replicationInstance.AllocatedStorage + " GB",
                creationtime: replicationInstance.InstanceCreateTime,
                availabilityzone: replicationInstance.AvailabilityZone
            }]);
        });

        unblockUI('#section-migrationandtransfer-databasemigrationservice-replicationinstances-datatable');
    });

    await sdkcall("DMS", "describeReplicationTasks", {
        // no params
    }, true).then((data) => {
        $('#section-migrationandtransfer-databasemigrationservice-replicationtasks-datatable').deferredBootstrapTable('removeAll');

        data.ReplicationTasks.forEach(replicationTask => {
            $('#section-migrationandtransfer-databasemigrationservice-replicationtasks-datatable').deferredBootstrapTable('append', [{
                f2id: replicationTask.ReplicationTaskIdentifier,
                f2type: 'dms.replicationtask',
                f2data: replicationTask,
                f2region: region,
                id: replicationTask.ReplicationTaskIdentifier,
                sourceendpointarn: replicationTask.SourceEndpointArn,
                targetendpointarn: replicationTask.TargetEndpointArn,
                replicationinstancearn: replicationTask.ReplicationInstanceArn,
                migrationtype: replicationTask.MigrationType
            }]);
        });

        unblockUI('#section-migrationandtransfer-databasemigrationservice-replicationtasks-datatable');
    });

    await sdkcall("DMS", "describeReplicationSubnetGroups", {
        // no params
    }, true).then((data) => {
        $('#section-migrationandtransfer-databasemigrationservice-replicationsubnetgroups-datatable').deferredBootstrapTable('removeAll');

        data.ReplicationSubnetGroups.forEach(replicationSubnetGroup => {
            $('#section-migrationandtransfer-databasemigrationservice-replicationsubnetgroups-datatable').deferredBootstrapTable('append', [{
                f2id: replicationSubnetGroup.ReplicationSubnetGroupIdentifier,
                f2type: 'dms.replicationsubnetgroup',
                f2data: replicationSubnetGroup,
                f2region: region,
                id: replicationSubnetGroup.ReplicationSubnetGroupIdentifier,
                description: replicationSubnetGroup.ReplicationSubnetGroupDescription,
                vpcid: replicationSubnetGroup.VpcId
            }]);
        });

        unblockUI('#section-migrationandtransfer-databasemigrationservice-replicationsubnetgroups-datatable');
    });

    await sdkcall("DMS", "describeCertificates", {
        // no params
    }, true).then((data) => {
        $('#section-migrationandtransfer-databasemigrationservice-certificates-datatable').deferredBootstrapTable('removeAll');

        data.Certificates.forEach(certificate => {
            $('#section-migrationandtransfer-databasemigrationservice-certificates-datatable').deferredBootstrapTable('append', [{
                f2id: certificate.CertificateIdentifier,
                f2type: 'dms.certificate',
                f2data: certificate,
                f2region: region,
                id: certificate.CertificateIdentifier,
                validfrom: certificate.ValidFromDate.toString(),
                validto: certificate.ValidToDate.toString(),
                keylength: certificate.KeyLength,
                signingalgorithm: certificate.SigningAlgorithm
            }]);
        });

        unblockUI('#section-migrationandtransfer-databasemigrationservice-certificates-datatable');
    });

    await sdkcall("DMS", "describeEventSubscriptions", {
        // no params
    }, true).then((data) => {
        $('#section-migrationandtransfer-databasemigrationservice-eventsubscriptions-datatable').deferredBootstrapTable('removeAll');

        data.EventSubscriptionsList.forEach(eventSubscriptions => {
            $('#section-migrationandtransfer-databasemigrationservice-eventsubscriptions-datatable').deferredBootstrapTable('append', [{
                f2id: eventSubscriptions.CustSubscriptionId,
                f2type: 'dms.eventsubscription',
                f2data: eventSubscriptions,
                f2region: region,
                id: eventSubscriptions.CustSubscriptionId,
                snstopicarn: eventSubscriptions.SnsTopicArn,
                sourcetype: eventSubscriptions.SourceType,
                enabled: eventSubscriptions.Enabled
            }]);
        });

        unblockUI('#section-migrationandtransfer-databasemigrationservice-eventsubscriptions-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "dms.endpoint") {
        reqParams.cfn['EndpointIdentifier'] = obj.data.EndpointIdentifier;
        reqParams.cfn['EndpointType'] = obj.data.EndpointType;
        reqParams.cfn['EngineName'] = obj.data.EngineName;
        reqParams.cfn['Username'] = obj.data.Username;
        reqParams.cfn['Password'] = "REPLACEME";
        reqParams.cfn['ServerName'] = obj.data.ServerName;
        reqParams.cfn['Port'] = obj.data.Port;
        reqParams.cfn['DatabaseName'] = obj.data.DatabaseName;
        reqParams.cfn['ExtraConnectionAttributes'] = obj.data.ExtraConnectionAttributes;
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        reqParams.cfn['CertificateArn'] = obj.data.CertificateArn;
        reqParams.cfn['SslMode'] = obj.data.SslMode;
        reqParams.cfn['DynamoDbSettings'] = obj.data.DynamoDbSettings;
        if (obj.data.S3Settings) {
            reqParams.cfn['S3Settings'] = {
                'BucketFolder': obj.data.S3Settings.BucketFolder,
                'BucketName': obj.data.S3Settings.BucketName,
                'CompressionType': obj.data.S3Settings.CompressionType,
                'CsvDelimiter': obj.data.S3Settings.CsvDelimiter,
                'CsvRowDelimiter': obj.data.S3Settings.CsvRowDelimiter,
                'ExternalTableDefinition': obj.data.S3Settings.ExternalTableDefinition,
                'ServiceAccessRoleArn': obj.data.S3Settings.ServiceAccessRoleArn
            };
        }
        reqParams.cfn['MongoDbSettings'] = obj.data.MongoDbSettings;
        if (obj.data.KinesisSettings) {
            reqParams.cfn['KinesisSettings'] = {
                'StreamArn': obj.data.KinesisSettings.StreamArn,
                'MessageFormat': obj.data.KinesisSettings.MessageFormat,
                'ServiceAccessRoleArn': obj.data.KinesisSettings.ServiceAccessRoleArn
            }
        }
        reqParams.cfn['KafkaSettings'] = obj.data.KafkaSettings;
        reqParams.cfn['NeptuneSettings'] = obj.data.NeptuneSettings;

        /*
        TODO:
        Tags:
            - Resource Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('dms', obj.id, 'AWS::DMS::Endpoint'),
            'region': obj.region,
            'service': 'dms',
            'type': 'AWS::DMS::Endpoint',
            'options': reqParams
        });
    } else if (obj.type == "dms.replicationinstance") {
        reqParams.cfn['ReplicationInstanceIdentifier'] = obj.data.ReplicationInstanceIdentifier;
        reqParams.cfn['ReplicationInstanceClass'] = obj.data.ReplicationInstanceClass;
        reqParams.cfn['AllocatedStorage'] = obj.data.AllocatedStorage;
        if (obj.data.VpcSecurityGroups) {
            reqParams.cfn['VpcSecurityGroupIds'] = [];
            obj.data.VpcSecurityGroups.forEach(vpcSecurityGroup => {
                reqParams.cfn['VpcSecurityGroupIds'].push(vpcSecurityGroup.VpcSecurityGroupId);
            });
        }
        reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
        if (obj.data.ReplicationSubnetGroup) {
            reqParams.cfn['ReplicationSubnetGroupIdentifier'] = obj.data.ReplicationSubnetGroup.ReplicationSubnetGroupIdentifier;
        }
        reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
        reqParams.cfn['MultiAZ'] = obj.data.MultiAZ;
        reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
        reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
        reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
        reqParams.cfn['PubliclyAccessible'] = obj.data.PubliclyAccessible;

        /*
        TODO:
        Tags: 
            - Resource Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('dms', obj.id, 'AWS::DMS::ReplicationInstance'),
            'region': obj.region,
            'service': 'dms',
            'type': 'AWS::DMS::ReplicationInstance',
            'options': reqParams
        });
    } else if (obj.type == "dms.replicationtask") {
        reqParams.cfn['ReplicationTaskIdentifier'] = obj.data.ReplicationTaskIdentifier;
        reqParams.cfn['SourceEndpointArn'] = obj.data.SourceEndpointArn;
        reqParams.cfn['TargetEndpointArn'] = obj.data.TargetEndpointArn;
        reqParams.cfn['ReplicationInstanceArn'] = obj.data.ReplicationInstanceArn;
        reqParams.cfn['MigrationType'] = obj.data.MigrationType;
        reqParams.cfn['TableMappings'] = obj.data.TableMappings;
        reqParams.cfn['ReplicationTaskSettings'] = obj.data.ReplicationTaskSettings;
        reqParams.cfn['CdcStartTime'] = obj.data.ReplicationTaskStartDate;
        reqParams.cfn['CdcStartPosition'] = obj.data.CdcStartPosition;
        reqParams.cfn['CdcStopPosition'] = obj.data.CdcStopPosition;
        reqParams.cfn['TaskData'] = obj.data.TaskData;

        /*
        TODO:
        Tags: 
            - Resource Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('dms', obj.id, 'AWS::DMS::ReplicationTask'),
            'region': obj.region,
            'service': 'dms',
            'type': 'AWS::DMS::ReplicationTask',
            'options': reqParams
        });
    } else if (obj.type == "dms.replicationsubnetgroup") {
        reqParams.cfn['ReplicationSubnetGroupIdentifier'] = obj.data.ReplicationSubnetGroupIdentifier;
        reqParams.cfn['ReplicationSubnetGroupDescription'] = obj.data.ReplicationSubnetGroupDescription;
        if (obj.data.Subnets) {
            reqParams.cfn['SubnetIds'] = [];
            obj.data.Subnets.forEach(subnet => {
                reqParams.cfn['SubnetIds'].push(subnet.SubnetIdentifier);
            });
        }

        /*
        TODO:
        Tags:
            - Resource Tag 
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('dms', obj.id, 'AWS::DMS::ReplicationSubnetGroup'),
            'region': obj.region,
            'service': 'dms',
            'type': 'AWS::DMS::ReplicationSubnetGroup',
            'options': reqParams
        });
    } else if (obj.type == "dms.certificate") {
        reqParams.cfn['CertificateIdentifier'] = obj.data.CertificateIdentifier;
        reqParams.cfn['CertificatePem'] = obj.data.CertificatePem;
        reqParams.cfn['CertificateWallet'] = obj.data.CertificateWallet;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('dms', obj.id, 'AWS::DMS::Certificate'),
            'region': obj.region,
            'service': 'dms',
            'type': 'AWS::DMS::Certificate',
            'options': reqParams
        });
    } else if (obj.type == "dms.eventsubscription") {
        reqParams.cfn['SnsTopicArn'] = obj.data.SnsTopicArn;
        reqParams.cfn['SourceType'] = obj.data.SourceType;
        reqParams.cfn['SourceIds'] = obj.data.SourceIdsList;
        reqParams.cfn['EventCategories'] = obj.data.EventCategoriesList;
        reqParams.cfn['Enabled'] = obj.data.Enabled;

        /*
        TODO:
        SubscriptionName: String
        Tags: 
            - Resource Tag
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('dms', obj.id, 'AWS::DMS::EventSubscription'),
            'region': obj.region,
            'service': 'dms',
            'type': 'AWS::DMS::EventSubscription',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
