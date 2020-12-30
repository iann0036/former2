/* ========================================================================== */
// SimpleDB
/* ========================================================================== */

sections.push({
    'category': 'Other',
    'service': 'SimpleDB',
    'resourcetypes': {
        'Domains': {
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
                        title: 'Domain Name',
                        field: 'domainname',
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
                        field: 'itemcount',
                        title: 'Item Count',
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

async function updateDatatableOtherSimpleDB() {
    blockUI('#section-other-simpledb-domains-datatable');

    await sdkcall("SimpleDB", "listDomains", {
        // no params
    }, false).then(async (data) => {
        $('#section-other-simpledb-domains-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DomainNames.map(domainname => {
            return sdkcall("SimpleDB", "domainMetadata", {
                DomainName: domainname
            }, true).then((data) => {
                data['DomainName'] = domainname;

                $('#section-other-simpledb-domains-datatable').deferredBootstrapTable('append', [{
                    f2id: "SDB " + data.DomainName,
                    f2type: 'simpledb.domain',
                    f2data: data,
                    f2region: region,
                    domainname: domainname,
                    itemcount: data.ItemCount
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-other-simpledb-domains-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "simpledb.domain") {
        reqParams.cfn['Description'] = "REPLACEME";

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('simpledb', obj.id, 'AWS::SDB::Domain'),
            'region': obj.region,
            'service': 'simpledb',
            'type': 'AWS::SDB::Domain',
            'options': reqParams,
            'returnValue': {
                'Ref': obj.data.DomainName
            }
        });
    } else {
        return false;
    }

    return true;
});
