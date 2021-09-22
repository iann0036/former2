/* ========================================================================== */
// QLDB
/* ========================================================================== */

sections.push({
    'category': 'Database',
    'service': 'QLDB',
    'resourcetypes': {
        'Ledgers': {
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
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationdate',
                        title: 'Creation Date',
                        sortable: true,
                        editable: true,
                        formatter: timeAgoFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Streams': {
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
                        field: 'streamname',
                        title: 'Stream Name',
                        sortable: true,
                        editable: true,
                        formatter: timeAgoFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'ledgername',
                        title: 'Ledger Name',
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

async function updateDatatableDatabaseQLDB() {
    blockUI('#section-database-qldb-ledgers-datatable');
    blockUI('#section-database-qldb-streams-datatable');

    await sdkcall("QLDB", "listLedgers", {
        // no params
    }, false).then(async (data) => {
        $('#section-database-qldb-ledgers-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.Ledgers.map(async (ledger) => {
            await sdkcall("QLDB", "describeLedger", {
                Name: ledger.Name
            }, false).then(async (data) => {
                data['Tags'] = await getResourceTags(data.Arn);

                $('#section-database-qldb-ledgers-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'qldb.ledger',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    creationdate: data.CreationDateTime
                }]);
            });

            return sdkcall("QLDB", "listJournalKinesisStreamsForLedger", {
                LedgerName: ledger.Name
            }, false).then(async (data) => {
                $('#section-database-qldb-streams-datatable').deferredBootstrapTable('removeAll');
        
                await Promise.all(data.Streams.map(async (stream) => {
                    return sdkcall("QLDB", "describeLedger", {
                        LedgerName: ledger.Name,
                        StreamId: stream.StreamId
                    }, false).then(async (data) => {
                        data.Stream['Tags'] = await getResourceTags(data.Stream.Arn);

                        $('#section-database-qldb-streams-datatable').deferredBootstrapTable('append', [{
                            f2id: data.Stream.Arn,
                            f2type: 'qldb.stream',
                            f2data: data.Stream,
                            f2region: region,
                            id: data.Stream.StreamId,
                            streamname: data.Stream.StreamName,
                            ledgername: data.Stream.LedgerName
                        }]);
                    });
                }));
        
            }).catch(() => { });
        }));
    }).catch(() => { });

    unblockUI('#section-database-qldb-ledgers-datatable');
    unblockUI('#section-database-qldb-streams-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "qldb.ledger") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['DeletionProtection'] = obj.data.DeletionProtection;
        reqParams.cfn['PermissionsMode'] = 'ALLOW_ALL';
        if (obj.data.EncryptionDescription) {
            reqParams.cfn['KmsKey'] = obj.data.EncryptionDescription.KmsKeyArn;
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('qldb', obj.id, 'AWS::QLDB::Ledger'),
            'region': obj.region,
            'service': 'qldb',
            'type': 'AWS::QLDB::Ledger',
            'options': reqParams
        });
    } else if (obj.type == "qldb.stream") {
        reqParams.cfn['LedgerName'] = obj.data.LedgerName;
        reqParams.cfn['InclusiveStartTime'] = obj.data.InclusiveStartTime;
        reqParams.cfn['ExclusiveEndTime'] = obj.data.ExclusiveEndTime;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['StreamName'] = obj.data.StreamName;
        reqParams.cfn['KinesisConfiguration'] = obj.data.KinesisConfiguration;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('qldb', obj.id, 'AWS::QLDB::Stream'),
            'region': obj.region,
            'service': 'qldb',
            'type': 'AWS::QLDB::Stream',
            'options': reqParams,
            'returnValues': {
                'GetAtt': {
                    'Id': obj.data.StreamId,
                    'Arn': obj.data.Arn
                },
                'Import': {
                    'LedgerName': obj.data.LedgerName,
                    'Id': obj.data.StreamId
                }
            }
        });
    } else {
        return false;
    }

    return true;
});
