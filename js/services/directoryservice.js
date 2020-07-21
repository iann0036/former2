/* ========================================================================== */
// Directory Service
/* ========================================================================== */

sections.push({
    'category': 'Security, Identity, &amp; Compliance',
    'service': 'Directory Service',
    'resourcetypes': {
        'Directories': {
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
                        field: 'type',
                        title: 'Type',
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
                        field: 'size',
                        title: 'Size',
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

async function updateDatatableSecurityIdentityAndComplianceDirectoryService() {
    blockUI('#section-securityidentityandcompliance-directoryservice-directories-datatable');

    await sdkcall("DirectoryService", "describeDirectories", {
        // no params
    }, true).then((data) => {
        $('#section-securityidentityandcompliance-directoryservice-directories-datatable').deferredBootstrapTable('removeAll');

        data.DirectoryDescriptions.forEach(directory => {
            if (directory.Type == "SimpleAD") {
                $('#section-securityidentityandcompliance-directoryservice-directories-datatable').deferredBootstrapTable('append', [{
                    f2id: directory.DirectoryId,
                    f2type: 'directoryservice.simplead',
                    f2data: directory,
                    f2region: region,
                    name: directory.Name,
                    type: "Simple AD",
                    id: directory.DirectoryId,
                    size: directory.Size,
                    description: directory.Description
                }]);
            } else if (directory.Type == "MicrosoftAD") {
                $('#section-securityidentityandcompliance-directoryservice-directories-datatable').deferredBootstrapTable('append', [{
                    f2id: directory.DirectoryId,
                    f2type: 'directoryservice.microsoftad',
                    f2data: directory,
                    f2region: region,
                    name: directory.Name,
                    type: "Microsoft AD",
                    id: directory.DirectoryId,
                    size: directory.Size,
                    description: directory.Description
                }]);
            }
        });

        unblockUI('#section-securityidentityandcompliance-directoryservice-directories-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "directoryservice.simplead") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['ShortName'] = obj.data.ShortName;
        reqParams.tf['short_name'] = obj.data.ShortName;
        reqParams.cfn['Password'] = 'REPLACEME';
        reqParams.tf['password'] = 'REPLACEME';
        reqParams.cfn['Size'] = obj.data.Size;
        reqParams.tf['size'] = obj.data.Size;
        if (obj.data.Alias && obj.data.Alias != obj.data.DirectoryId) {
            reqParams.cfn['CreateAlias'] = true;
            reqParams.tf['alias'] = obj.data.Alias;
        }
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.tf['description'] = obj.data.Description;
        reqParams.cfn['EnableSso'] = obj.data.SsoEnabled;
        reqParams.tf['enable_sso'] = obj.data.SsoEnabled;
        if (obj.data.VpcSettings) {
            reqParams.cfn['VpcSettings'] = {
                'VpcId': obj.data.VpcSettings.VpcId,
                'SubnetIds': obj.data.VpcSettings.SubnetIds
            };
            reqParams.tf['vpc_settings'] = {
                'vpc_id': obj.data.VpcSettings.VpcId,
                'subnet_ids': obj.data.VpcSettings.SubnetIds
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('directoryservice', obj.id, 'AWS::DirectoryService::SimpleAD'),
            'region': obj.region,
            'service': 'directoryservice',
            'type': 'AWS::DirectoryService::SimpleAD',
            'terraformType': 'aws_directory_service_directory',
            'options': reqParams
        });
    } else if (obj.type == "directoryservice.microsoftad") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.cfn['ShortName'] = obj.data.ShortName;
        reqParams.tf['short_name'] = obj.data.ShortName;
        reqParams.cfn['Edition'] = obj.data.Edition;
        reqParams.tf['edition'] = obj.data.Edition;
        reqParams.cfn['Password'] = 'REPLACEME';
        reqParams.tf['password'] = 'REPLACEME';
        if (obj.data.Alias && obj.data.Alias != obj.data.DirectoryId) {
            reqParams.cfn['CreateAlias'] = true;
            reqParams.tf['alias'] = obj.data.Alias;
        }
        reqParams.cfn['EnableSso'] = obj.data.SsoEnabled;
        reqParams.tf['enable_sso'] = obj.data.SsoEnabled;
        if (obj.data.VpcSettings) {
            reqParams.cfn['VpcSettings'] = {
                'VpcId': obj.data.VpcSettings.VpcId,
                'SubnetIds': obj.data.VpcSettings.SubnetIds
            };
            reqParams.tf['vpc_settings'] = {
                'vpc_id': obj.data.VpcSettings.VpcId,
                'subnet_ids': obj.data.VpcSettings.SubnetIds
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('directoryservice', obj.id, 'AWS::DirectoryService::MicrosoftAD'),
            'region': obj.region,
            'service': 'directoryservice',
            'type': 'AWS::DirectoryService::MicrosoftAD',
            'terraformType': 'aws_directory_service_directory',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
