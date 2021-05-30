/* ========================================================================== */
// Cost & Usage Reports
/* ========================================================================== */

sections.push({
    'category': 'Other',
    'service': 'Cost &amp; Usage Reports',
    'resourcetypes': {
        'Report Definitions': {
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
                        field: 'timeunit',
                        title: 'Time Unit',
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
                    },
                    {
                        field: 'compression',
                        title: 'Compression',
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

async function updateDatatableOtherCostAndUsageReports() {
    blockUI('#section-other-costandusagereports-reportdefinitions-datatable');

    $('#section-other-costandusagereports-reportdefinitions-datatable').deferredBootstrapTable('removeAll');

    await sdkcall("CUR", "describeReportDefinitions", {
        // no params
    }, false).then(async (data) => {
        $('#section-other-costandusagereports-reportdefinitions-datatable').deferredBootstrapTable('removeAll');

        data['ReportDefinitions'].forEach(report => {
            $('#section-other-costandusagereports-reportdefinitions-datatable').deferredBootstrapTable('append', [{
                f2id: report.ReportName,
                f2type: 'costandusagereports.reportdefinition',
                f2data: report,
                f2region: region,
                name: report.ReportName,
                timeunit: report.TimeUnit,
                format: report.Format,
                compression: report.Compression
            }]);
        });
    }).catch(() => { });

    unblockUI('#section-other-costandusagereports-reportdefinitions-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "costandusagereports.reportdefinition") {
        reqParams.cfn['ReportName'] = obj.data.ReportName;
        reqParams.cfn['TimeUnit'] = obj.data.TimeUnit;
        reqParams.cfn['Format'] = obj.data.Format;
        reqParams.cfn['Compression'] = obj.data.Compression;
        reqParams.cfn['AdditionalSchemaElements'] = obj.data.AdditionalSchemaElements;
        reqParams.cfn['S3Bucket'] = obj.data.S3Bucket;
        reqParams.cfn['S3Prefix'] = obj.data.S3Prefix;
        reqParams.cfn['S3Region'] = obj.data.S3Region;
        reqParams.cfn['AdditionalArtifacts'] = obj.data.AdditionalArtifacts;
        reqParams.cfn['RefreshClosedReports'] = obj.data.RefreshClosedReports;
        reqParams.cfn['ReportVersioning'] = obj.data.ReportVersioning;
        reqParams.cfn['BillingViewArn'] = obj.data.BillingViewArn;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('costandusagereports', obj.id, 'AWS::CUR::ReportDefinition'),
            'region': obj.region,
            'service': 'costandusagereports',
            'type': 'AWS::CUR::ReportDefinition',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ReportName
            }
        });
    } else {
        return false;
    }

    return true;
});
