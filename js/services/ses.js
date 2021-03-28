/* ========================================================================== */
// SES
/* ========================================================================== */

sections.push({
    'category': 'Business Applications',
    'service': 'SES',
    'resourcetypes': {
        'Configuration Sets': {
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
                    }
                ],
                [
                    // nothing
                ]
            ]
        },
        'Event Destinations': {
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
                        field: 'matchingeventtypes',
                        title: 'Matching Event Types',
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
        },
        'Receipt Filters': {
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
                        field: 'ipfilterpolicy',
                        title: 'IP Filter Policy',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'ipfiltercidr',
                        title: 'IP Filter CIDR',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Receipt Rules': {
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
                        field: 'recipients',
                        title: 'Recipients',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'tlspolicy',
                        title: 'TLS Policy',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'scanenabled',
                        title: 'Spam/Virus Scan Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
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
        },
        'Receipt Rule Sets': {
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
        'Templates': {
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
        'Contact Lists': {
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
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableBusinessApplicationsSES() {
    if (["us-east-1", "us-west-2", "eu-west-1"].includes(region)) { // has to be whitelisted otherwise it hangs on the API call
        blockUI('#section-businessapplications-ses-receiptfilters-datatable');
        blockUI('#section-businessapplications-ses-receiptrules-datatable');
        blockUI('#section-businessapplications-ses-receiptrulesets-datatable');

        await sdkcall("SES", "listReceiptFilters", {
            // no params
        }, true).then((data) => {
            $('#section-businessapplications-ses-receiptfilters-datatable').deferredBootstrapTable('removeAll');

            data.Filters.forEach(filter => {
                $('#section-businessapplications-ses-receiptfilters-datatable').deferredBootstrapTable('append', [{
                    f2id: filter.Name,
                    f2type: 'ses.receiptfilter',
                    f2data: filter,
                    f2region: region,
                    name: filter.Name,
                    ipfilterpolicy: filter.IpFilter.Policy,
                    ipfiltercidr: filter.IpFilter.Cidr
                }]);
            });

            unblockUI('#section-businessapplications-ses-receiptfilters-datatable');
        });

        await sdkcall("SES", "listReceiptRuleSets", {
            // no params
        }, true).then(async (data) => {
            $('#section-businessapplications-ses-receiptrulesets-datatable').deferredBootstrapTable('removeAll');

            await Promise.all(data.RuleSets.map(ruleSet => {
                $('#section-businessapplications-ses-receiptrulesets-datatable').deferredBootstrapTable('append', [{
                    f2id: ruleSet.Name,
                    f2type: 'ses.receiptruleset',
                    f2data: ruleSet,
                    f2region: region,
                    name: ruleSet.Name,
                    creationtime: ruleSet.CreatedTimestamp
                }]);

                return sdkcall("SES", "describeReceiptRuleSet", {
                    RuleSetName: ruleSet.Name
                }, true).then((data) => {
                    var previousRuleName = null;
                    data.Rules.forEach(rule => {
                        rule['After'] = previousRuleName;
                        previousRuleName = rule.Name;
                        rule['RuleSetName'] = ruleSet.Name;
                        $('#section-businessapplications-ses-receiptrules-datatable').deferredBootstrapTable('append', [{
                            f2id: rule.Name,
                            f2type: 'ses.receiptrule',
                            f2data: rule,
                            f2region: region,
                            name: rule.Name,
                            enabled: rule.Enabled,
                            tlspolicy: rule.TlsPolicy,
                            recipients: rule.Recipients.join(", "),
                            scanenabled: rule.ScanEnabled
                        }]);
                    });
                });
            }));

            unblockUI('#section-businessapplications-ses-receiptrules-datatable');
            unblockUI('#section-businessapplications-ses-receiptrulesets-datatable');
        });
    }

    if ([
        "us-east-1",
        "us-east-2",
        "us-west-1",
        "us-west-2",
        "ap-south-1",
        "ap-southeast-1",
        "ap-southeast-2",
        "ap-northeast-1",
        "ap-northeast-2",
        "ca-central-1",
        "eu-central-1",
        "eu-west-1",
        "eu-west-2",
        "eu-west-3",
        "eu-north-1",
        "sa-east-1",
        "us-gov-west-1"
    ].includes(region)) { // has to be whitelisted otherwise it hangs on the API call

        blockUI('#section-businessapplications-ses-configurationsets-datatable');
        blockUI('#section-businessapplications-ses-eventdestinations-datatable');
        blockUI('#section-businessapplications-ses-templates-datatable');
        blockUI('#section-businessapplications-ses-contactlists-datatable');

        await sdkcall("SES", "listConfigurationSets", {
            // no params
        }, true).then(async (data) => {
            $('#section-businessapplications-ses-configurationsets-datatable').deferredBootstrapTable('removeAll');
            $('#section-businessapplications-ses-eventdestinations-datatable').deferredBootstrapTable('removeAll');

            await Promise.all(data.ConfigurationSets.map(configurationSet => {
                return sdkcall("SES", "describeConfigurationSet", {
                    ConfigurationSetName: configurationSet.Name
                }, true).then((data) => {
                    data.EventDestinations.forEach(eventDestination => {
                        eventDestination['ConfigurationSetName'] = configurationSet.Name;
                        $('#section-businessapplications-ses-eventdestinations-datatable').deferredBootstrapTable('append', [{
                            f2id: eventDestination.Name,
                            f2type: 'ses.eventdestination',
                            f2data: eventDestination,
                            f2region: region,
                            name: eventDestination.Name,
                            enabled: eventDestination.Enabled,
                            matchingeventtypes: eventDestination.MatchingEventTypes.join(", ")
                        }]);
                    });

                    $('#section-businessapplications-ses-configurationsets-datatable').deferredBootstrapTable('append', [{
                        f2id: data.ConfigurationSet.Name,
                        f2type: 'ses.configurationset',
                        f2data: data,
                        f2region: region,
                        name: data.ConfigurationSet.Name
                    }]);
                });
            }));

            unblockUI('#section-businessapplications-ses-configurationsets-datatable');
            unblockUI('#section-businessapplications-ses-eventdestinations-datatable');
        }).catch(() => { });

        await sdkcall("SES", "listTemplates", {
            // no params
        }, true).then(async (data) => {
            $('#section-businessapplications-ses-templates-datatable').deferredBootstrapTable('removeAll');

            await Promise.all(data.TemplatesMetadata.map(template => {
                return sdkcall("SES", "getTemplate", {
                    TemplateName: template.Name
                }, true).then((data) => {
                    $('#section-businessapplications-ses-templates-datatable').deferredBootstrapTable('append', [{
                        f2id: data.Template.TemplateName,
                        f2type: 'ses.template',
                        f2data: data,
                        f2region: region,
                        name: data.Template.TemplateName,
                        creationtime: data.Template.CreatedTimestamp
                    }]);
                });
            }));

            unblockUI('#section-businessapplications-ses-templates-datatable');
        }).catch(() => { });

        await sdkcall("SESV2", "listContactLists", {
            // no params
        }, true).then(async (data) => {
            $('#section-businessapplications-ses-contactlists-datatable').deferredBootstrapTable('removeAll');

            await Promise.all(data.ContactLists.map(contactlist => {
                return sdkcall("SESV2", "getContactList", {
                    ContactListName: contactlist.ContactListName
                }, true).then((data) => {
                    $('#section-businessapplications-ses-contactlists-datatable').deferredBootstrapTable('append', [{
                        f2id: data.ContactListName + " Contact List",
                        f2type: 'ses.contactlist',
                        f2data: data,
                        f2region: region,
                        name: data.ContactListName,
                        creationtime: data.Description
                    }]);
                });
            }));

            unblockUI('#section-businessapplications-ses-contactlists-datatable');
        }).catch(() => { });
    }
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "ses.eventdestination") {
        reqParams.cfn['ConfigurationSetName'] = obj.data.ConfigurationSetName;
        reqParams.tf['configuration_set_name'] = obj.data.ConfigurationSetName;
        reqParams.cfn['EventDestination'] = {
            'CloudWatchDestination': obj.data.CloudWatchDestination,
            'Enabled': obj.data.Enabled,
            'MatchingEventTypes': obj.data.MatchingEventTypes,
            'Name': obj.data.Name,
            'KinesisFirehoseDestination': obj.data.KinesisFirehoseDestination,
        };
        reqParams.tf['enabled'] = obj.data.Enabled;
        reqParams.tf['matching_types'] = obj.data.MatchingEventTypes;
        reqParams.tf['name'] = obj.data.Name;
        if (obj.data.CloudWatchDestination && obj.data.CloudWatchDestination.DimensionConfigurations) {
            reqParams.tf['cloudwatch_destination'] = [];
            obj.data.CloudWatchDestination.DimensionConfigurations.forEach(dimensionconfiguration => {
                reqParams.tf['cloudwatch_destination'].push({
                    'default_value': dimensionconfiguration.DefaultDimensionValue,
                    'dimension_name': dimensionconfiguration.DimensionName,
                    'value_source': dimensionconfiguration.DimensionValueSource
                });
            });
        }
        if (obj.data.KinesisFirehoseDestination) {
            reqParams.tf['kinesis_destination'] = {
                'stream_arn': obj.data.KinesisFirehoseDestination.DeliveryStreamARN,
                'role_arn': obj.data.KinesisFirehoseDestination.IAMRoleARN
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ses', obj.id, 'AWS::SES::ConfigurationSetEventDestination'),
            'region': obj.region,
            'service': 'ses',
            'type': 'AWS::SES::ConfigurationSetEventDestination',
            'terraformType': 'aws_ses_event_destination',
            'options': reqParams
        });
    } else if (obj.type == "ses.configurationset") {
        reqParams.cfn['Name'] = obj.data.ConfigurationSet.Name;
        reqParams.tf['name'] = obj.data.ConfigurationSet.Name;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ses', obj.id, 'AWS::SES::ConfigurationSet'),
            'region': obj.region,
            'service': 'ses',
            'type': 'AWS::SES::ConfigurationSet',
            'terraformType': 'aws_ses_configuration_set',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.ConfigurationSet.Name,
                'Import': {
                    'Name': obj.data.ConfigurationSet.Name
                }
            }
        });
    } else if (obj.type == "ses.receiptfilter") {
        reqParams.cfn['Filter'] = obj.data;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.tf['cidr'] = obj.data.IpFilter.Cidr;
        reqParams.tf['policy'] = obj.data.IpFilter.Policy;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ses', obj.id, 'AWS::SES::ReceiptFilter'),
            'region': obj.region,
            'service': 'ses',
            'type': 'AWS::SES::ReceiptFilter',
            'terraformType': 'aws_ses_receipt_filter',
            'options': reqParams
        });
    } else if (obj.type == "ses.receiptrule") {
        reqParams.cfn['After'] = obj.data.After;
        reqParams.tf['after'] = obj.data.After;
        reqParams.cfn['Rule'] = {
            'ScanEnabled': obj.data.ScanEnabled,
            'Recipients': obj.data.Recipients,
            'Actions': obj.data.Actions,
            'Enabled': obj.data.Enabled,
            'Name': obj.data.Name,
            'TlsPolicy': obj.data.TlsPolicy
        }
        reqParams.tf['scan_enabled'] = obj.data.ScanEnabled;
        reqParams.tf['recipients'] = obj.data.Recipients;
        if (obj.data.Actions) {
            var position = 1;
            obj.data.Actions.forEach(action => {
                if (action.AddHeaderAction) {
                    if (!reqParams.tf['add_header_action']) {
                        reqParams.tf['add_header_action'] = [];
                    }
                    reqParams.tf['add_header_action'].push({
                        'header_name': action.AddHeaderAction.HeaderName,
                        'header_value': action.AddHeaderAction.HeaderValue,
                        'position': position
                    });
                }
                if (action.BounceAction) {
                    if (!reqParams.tf['bounce_action']) {
                        reqParams.tf['bounce_action'] = [];
                    }
                    reqParams.tf['bounce_action'].push({
                        'message': action.BounceAction.Message,
                        'sender': action.BounceAction.Sender,
                        'smtp_reply_code': action.BounceAction.SmtpReplyCode,
                        'status_code': action.BounceAction.StatusCode,
                        'topic_arn': action.BounceAction.TopicArn,
                        'position': position
                    });
                }
                if (action.LambdaAction) {
                    if (!reqParams.tf['lambda_action']) {
                        reqParams.tf['lambda_action'] = [];
                    }
                    reqParams.tf['lambda_action'].push({
                        'function_arn': action.LambdaAction.FunctionArn,
                        'invocation_type': action.LambdaAction.InvocationType,
                        'topic_arn': action.LambdaAction.TopicArn,
                        'position': position
                    });
                }
                if (action.S3Action) {
                    if (!reqParams.tf['s3_action']) {
                        reqParams.tf['s3_action'] = [];
                    }
                    reqParams.tf['s3_action'].push({
                        'bucket_name': action.S3Action.BucketName,
                        'kms_key_arn': action.S3Action.KmsKeyArn,
                        'object_key_prefix': action.S3Action.ObjectKeyPrefix,
                        'topic_arn': action.S3Action.TopicArn,
                        'position': position
                    });
                }
                if (action.SNSAction) {
                    if (!reqParams.tf['sns_action']) {
                        reqParams.tf['sns_action'] = [];
                    }
                    reqParams.tf['sns_action'].push({
                        'topic_arn': action.SNSAction.TopicArn,
                        'position': position
                    });
                }
                if (action.StopAction) {
                    if (!reqParams.tf['stop_action']) {
                        reqParams.tf['stop_action'] = [];
                    }
                    reqParams.tf['stop_action'].push({
                        'scope': action.StopAction.Scope,
                        'topic_arn': action.StopAction.TopicArn,
                        'position': position
                    });
                }
                if (action.WorkmailAction) {
                    if (!reqParams.tf['workmail_action']) {
                        reqParams.tf['workmail_action'] = [];
                    }
                    reqParams.tf['workmail_action'].push({
                        'organization_arn': action.WorkmailAction.OrganizationArn,
                        'topic_arn': action.WorkmailAction.TopicArn,
                        'position': position
                    });
                }

                position += 1;
            });
        }
        reqParams.tf['enabled'] = obj.data.Enabled;
        reqParams.tf['name'] = obj.data.Name;
        reqParams.tf['tls_policy'] = obj.data.TlsPolicy;

        reqParams.cfn['RuleSetName'] = obj.data.RuleSetName;
        reqParams.tf['rule_set_name'] = obj.data.RuleSetName;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ses', obj.id, 'AWS::SES::ReceiptRule'),
            'region': obj.region,
            'service': 'ses',
            'type': 'AWS::SES::ReceiptRule',
            'terraformType': 'aws_ses_receipt_filter',
            'options': reqParams
        });
    } else if (obj.type == "ses.receiptruleset") {
        reqParams.cfn['RuleSetName'] = obj.data.Name;
        reqParams.tf['rule_set_name'] = obj.data.Name;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ses', obj.id, 'AWS::SES::ReceiptRuleSet'),
            'region': obj.region,
            'service': 'ses',
            'type': 'AWS::SES::ReceiptRuleSet',
            'terraformType': 'aws_ses_receipt_rule_set',
            'options': reqParams
        });
    } else if (obj.type == "ses.template") {
        reqParams.cfn['Template'] = obj.data.Template;
        reqParams.tf['html'] = obj.data.Template.HtmlPart;
        reqParams.tf['subject'] = obj.data.Template.SubjectPart;
        reqParams.tf['text'] = obj.data.Template.TextPart;
        reqParams.tf['name'] = obj.data.Template.TemplateName;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ses', obj.id, 'AWS::SES::Template'),
            'region': obj.region,
            'service': 'ses',
            'type': 'AWS::SES::Template',
            'terraformType': 'aws_ses_template',
            'options': reqParams
        });
    } else if (obj.type == "ses.contactlist") {
        reqParams.cfn['ContactListName'] = obj.data.ContactListName;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Topics'] = obj.data.Topics;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('ses', obj.id, 'AWS::SES::ContactList'),
            'region': obj.region,
            'service': 'ses',
            'type': 'AWS::SES::ContactList',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
