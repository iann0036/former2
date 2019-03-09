var extension_available = false;
var region = 'us-east-1';

$(document).ready(function(){
    /* ========================================================================== */
    // Section Templating
    /* ========================================================================== */

    function navlower(str) {
        return str.toLowerCase().replace(/\s/g, "").replace(/\,/g, "").replace(/\-/g, "").replace(/\&amp\;/g, "and");
    }

    sections.forEach(section => {
        var html = `
            <div id="section-${navlower(section.category)}-${navlower(section.service)}" class="former2-section" data-section-breadcrumb1-title="${section.category}" data-section-breadcrumb1-link="#section-${navlower(section.category)}-${navlower(section.service)}" data-section-title="${section.service}" style="display: none;">
            <section class="tabs-section">
                <div class="tabs-section-nav tabs-section-nav-inline">
                    <ul class="nav" role="tablist">
                    ${Object.keys(section.resourcetypes).map((resourcetype, i) => `
                        <li class="nav-item">
                            <a class="nav-link${i==0 ? " active" : ""}" href="#section-${navlower(section.category)}-${navlower(section.service)}-tab-${i}" role="tab" data-toggle="tab">
                                ${resourcetype}
                            </a>
                        </li>
                    `).join('\n')}
                    </ul>
                </div>

                <div class="tab-content">
                ${Object.keys(section.resourcetypes).map((resourcetype, i) => `
                    <div role="tabpanel" class="tab-pane fade${i==0 ? " in active show" : ""}" id="section-${navlower(section.category)}-${navlower(section.service)}-tab-${i}">
                        <div id="section-${navlower(section.category)}-${navlower(section.service)}-${navlower(resourcetype)}-toolbar" class="f2toolbar">
                            <button class="additems btn btn-primary" data-datatable="section-${navlower(section.category)}-${navlower(section.service)}-${navlower(resourcetype)}-datatable" disabled>
                                <i class="font-icon font-icon-plus"></i> Add Selected
                            </button>
                        </div>
                        <div class="table-responsive">
                            <table id="section-${navlower(section.category)}-${navlower(section.service)}-${navlower(resourcetype)}-datatable"
                                class="table table-striped f2datatable"
                                data-toolbar="#section-${navlower(section.category)}-${navlower(section.service)}-${navlower(resourcetype)}-toolbar"
                                data-search="true"
                                data-show-refresh="true"
                                data-show-toggle="true"
                                data-show-columns="true"
                                data-show-export="true"
                                data-detail-view="true"
                                data-detail-formatter="detailFormatter"
                                data-minimum-count-columns="2"
                                data-show-pagination-switch="true"
                                data-pagination="true"
                                data-id-field="id"
                                data-page-list="[10, 25, 50, 100, ALL]"
                                data-show-footer="false"
                                data-response-handler="responseHandler">
                            </table>
                        </div>
                    </div>
                `).join('\n')}
                </div>
            </section>
            </div>
        `;
        $('#templated-section-container').append(html);
    });

    /* ========================================================================== */
    // DataTable Pre-Config
    /* ========================================================================== */

    var output_objects = [];

    window.operateEvents = {
        'click .like': function (e, value, row, index) {
            alert('You click like action, row: ' + JSON.stringify(row));
        }
    };

    function addAllTableRowsToTemplate(selector) {
        var ids = $.map($(selector).bootstrapTable('getData'), function (row) {
            output_objects.push({
                'id': row.f2id,
                'type': row.f2type,
                'data': row.f2data,
                'region': row.f2region
            });

            return row.f2id;
        });

        $('#generate-outputs').text("Generate (" + output_objects.length + ")");
        $('#generate-outputs').removeAttr('disabled');

        return ids;
    }

    function addSelectedRowsToTemplate(selector) {
        var ids = $.map($(selector).bootstrapTable('getSelections'), function (row) {
            output_objects.push({
                'id': row.f2id,
                'type': row.f2type,
                'data': row.f2data,
                'region': row.f2region
            });

            return row.f2id;
        });

        $('#generate-outputs').text("Generate (" + output_objects.length + ")");
        $('#generate-outputs').removeAttr('disabled');

        return ids;
    }

    function initDatatableWithColumns(selector, columndata) {
        $(selector).bootstrapTable({
            iconsPrefix: 'font-icon',
            icons: {
                paginationSwitchDown:'font-icon-arrow-square-down',
                paginationSwitchUp: 'font-icon-arrow-square-down up',
                refresh: 'font-icon-refresh',
                toggleOn: 'font-icon-list-square',
                toggleOff: 'font-icon-list-square',
                columns: 'font-icon-list-rotate',
                export: 'font-icon-download',
                detailOpen: 'font-icon-plus',
                detailClose: 'font-icon-minus-1'
            },
            paginationPreText: '<i class="font-icon font-icon-arrow-left"></i>',
            paginationNextText: '<i class="font-icon font-icon-arrow-right"></i>',
            columns: columndata
        });
    }

    /* ========================================================================== */
    // DataTable Initializations
    /* ========================================================================== */

    sections.forEach(section => {
        Object.keys(section.resourcetypes).forEach(resourcetype => {
            var selector = "#section-" + navlower(section.category) + "-" + navlower(section.service) + "-" + navlower(resourcetype) + "-datatable";

            initDatatableWithColumns(selector, section.resourcetypes[resourcetype].columns);
        });
    });

    /* ========================================================================== */
    // DataTable Post-Config
    /* ========================================================================== */

    $('.f2datatable').on('check.bs.table uncheck.bs.table ' +
        'check-all.bs.table uncheck-all.bs.table', function () {
            $('.additems').each(function(index) {
                $(this).prop('disabled', !$("#" + $(this).attr('data-datatable')).bootstrapTable('getSelections').length);
            });
    });

    $('.additems').click(function () {
        var ids = addSelectedRowsToTemplate("#" + $(this).attr('data-datatable'));
        
        $(this).prop('disabled', true);
    });

    $('.f2toolbar').find('select').change(function () { // unused
        $(this).bootstrapTable('refreshOptions', {
            exportDataType: $(this).val()
        });
    });

    /* ========================================================================== */
    // Credentials
    /* ========================================================================== */

    $('#credentials-accesskey').on('change', () => {
        window.localStorage.setItem('credentials-accesskey', $('#credentials-accesskey').val().trim());
    });
    $('#credentials-secretkey').on('change', () => {
        window.localStorage.setItem('credentials-secretkey', $('#credentials-secretkey').val().trim());
    });
    $('#credentials-sessiontoken').on('change', () => {
        window.localStorage.setItem('credentials-sessiontoken', $('#credentials-sessiontoken').val().trim());
    });

    var accesskey = window.localStorage.getItem('credentials-accesskey');
    if (accesskey) {
        $('#credentials-accesskey').val(accesskey);
    }
    var secretkey = window.localStorage.getItem('credentials-secretkey');
    if (secretkey) {
        $('#credentials-secretkey').val(secretkey);
    }
    var sessiontoken = window.localStorage.getItem('credentials-sessiontoken');
    if (sessiontoken) {
        $('#credentials-sessiontoken').val(sessiontoken);
    }

    /* ========================================================================== */
    // Navigation
    /* ========================================================================== */

    function doNavigation() {
        if ($(location.hash).length) {
            $('.former2-section').attr('style', 'display: none;');
            $(location.hash).attr('style', 'display: block;');

            $('#header-title').html(
                $(location.hash).attr('data-section-title')
            );
            $('#header-breadcrumb1').text(
                $(location.hash).attr('data-section-breadcrumb1-title')
            );
            $('#header-breadcrumb1').attr(
                'href',
                $(location.hash).attr('data-section-breadcrumb1-link')
            );
            $('#header-breadcrumb2').text(
                $(location.hash).attr('data-section-title')
            );

            window.scrollTo({ top: 0 });
        } else if (location.hash != "") {
            $.notify({
                icon: 'font-icon font-icon-warning',
                title: '<strong>Not Yet Implemented</strong>',
                message: 'This action is not available at this time.'
            },{
                type: 'warning'
            });
        } else {
            $('.former2-section').attr('style', 'display: none;');
            $('#section-setup-introduction').attr('style', 'display: block;');

            $('#header-title').html(
                $('#section-setup-introduction').attr('data-section-title')
            );
            $('#header-breadcrumb1').text(
                $('#section-setup-introduction').attr('data-section-breadcrumb1-title')
            );
            $('#header-breadcrumb1').attr(
                'href',
                $('#section-setup-introduction').attr('data-section-breadcrumb1-link')
            );
            $('#header-breadcrumb2').text(
                $('#section-setup-introduction').attr('data-section-title')
            );

            window.scrollTo({ top: 0 });
        }
    }

    window.addEventListener("hashchange", () => {
       doNavigation();
    }, false);

    doNavigation();
    $('#header-breadcrumb').attr('style', '');

    /* ========================================================================== */
    // Outputs
    /* ========================================================================== */

    $("#generate-outputs").on('click', () => {
        regenerateOutputs().then(() => {
            window.location.href = "#section-outputs-cloudformation";
        });
    });

    function regenerateOutputs() {
        return new Promise(function(resolve, reject) {
            var mapped_outputs = performF2Mappings(output_objects);

            cfn_editor.getDoc().setValue(mapped_outputs['cfn']);
            setTimeout(function(){
                cfn_editor.refresh();
            }, 1);

            troposphere_editor.getDoc().setValue(mapped_outputs['troposphere']);
            setTimeout(function(){
                troposphere_editor.refresh();
            }, 1);

            cdkts_editor.getDoc().setValue(mapped_outputs['cdkts']);
            setTimeout(function(){
                cdkts_editor.refresh();
            }, 1);

            raw_editor.getDoc().setValue(JSON.stringify(output_objects, null, 4));
            setTimeout(function(){
                raw_editor.refresh();
            }, 1);

            resolve();
        });
    }

    /* ========================================================================== */
    // Region Selector
    /* ========================================================================== */

    var region_map = {
        "us-east-1": "US East (N. Virginia)",
        "us-east-2": "US East (Ohio)",
        "us-west-1": "US West (N. California)",
        "us-west-2": "US West (Oregon)",
        "ap-south-1": "Asia Pacific (Mumbai)",
        "ap-northeast-2": "Asia Pacific (Seoul)",
        "ap-southeast-1": "Asia Pacific (Singapore)",
        "ap-southeast-2": "Asia Pacific (Sydney)",
        "ap-northeast-1": "Asia Pacific (Tokyo)",
        "ca-central-1": "Canada (Central)",
        "eu-central-1": "EU (Frankfurt)",
        "eu-west-1": "EU (Ireland)",
        "eu-west-2": "EU (London)",
        "eu-west-3": "EU (Paris)",
        "eu-north-1": "EU (Stockholm)",
        "sa-east-1": "South America (S&#227;o Paulo)"
    };

    $('.region-item').on('click', el => {
        region = $(el.target).attr('data-region');

        $('#selected-region').html(region_map[region]);
        $('.region-item').removeAttr('style');
        $('.region-item[data-region=\'' + region + '\']').attr('style', 'font-weight: bold;')

        window.localStorage.setItem('region', region);
    });
    
    var storedregion = window.localStorage.getItem('region');
    if (storedregion) {
        region = storedregion;
    } else {
        region = 'us-east-1';
    }
    $('#selected-region').html(region_map[region]);
    $('.region-item[data-region=\'' + region + '\']').attr('style', 'font-weight: bold;')

    /* ========================================================================== */
    // CodeMirror Init
    /* ========================================================================== */

    cfn_editor = CodeMirror.fromTextArea(document.getElementById('cfn'), {
        lineNumbers: true,
        lineWrapping: true,
        mode: "yaml",
        theme: "material",
        indentUnit: 4,
        height: "auto",
        viewportMargin: Infinity,
        scrollbarStyle: "null"
    });
    cfn_editor.getDoc().setValue("# No resources created");
    setTimeout(function(){
        cfn_editor.refresh();
    }, 1);

    troposphere_editor = CodeMirror.fromTextArea(document.getElementById('troposphere'), {
        lineNumbers: true,
        lineWrapping: true,
        mode: "python",
        theme: "material",
        indentUnit: 4,
        height: "auto",
        viewportMargin: Infinity,
        scrollbarStyle: "null"
    });
    troposphere_editor.getDoc().setValue("# No resources created");
    setTimeout(function(){
        troposphere_editor.refresh();
    }, 1);

    cdkts_editor = CodeMirror.fromTextArea(document.getElementById('cdkts'), {
        lineNumbers: true,
        lineWrapping: true,
        mode: "javascript",
        theme: "material",
        indentUnit: 4,
        height: "auto",
        viewportMargin: Infinity,
        scrollbarStyle: "null"
    });
    cdkts_editor.getDoc().setValue("// No resources created");
    setTimeout(function(){
        cdkts_editor.refresh();
    }, 1);

    raw_editor = CodeMirror.fromTextArea(document.getElementById('raw'), {
        lineNumbers: true,
        lineWrapping: true,
        mode: "javascript",
        theme: "material",
        indentUnit: 4,
        height: "auto",
        viewportMargin: Infinity,
        scrollbarStyle: "null"
    });
    raw_editor.getDoc().setValue("// No resources created");
    setTimeout(function(){
        raw_editor.refresh();
    }, 1);

    /* ========================================================================== */
    // AWS SDK Proxy for Extension (must be before Account Scan)
    /* ========================================================================== */

    var HELPER_EXTENSION_ID = "fhejmeojlbhfhjndnkkleooeejklmigi";

    class AWSConfigClass {
        static update(obj) {
            chrome.runtime.sendMessage(
                HELPER_EXTENSION_ID,
                {
                    action: 'configUpdate',
                    obj: obj
                }
            );
        }
    }

    class AWSCredentialsClass {
        constructor(...args) {
            this.credentials = args;

            return args;
        }
    }

    if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage(
            HELPER_EXTENSION_ID,
            {
                action: 'ping'
            },
            function(response) {
                if (response) {
                    extension_available = true;

                    AWS = new Proxy({}, {
                        get: function(obj, prop) {
                            if (prop == "config") {
                                return AWSConfigClass;
                            } else if (prop == "Credentials") {
                                return AWSCredentialsClass;
                            }
                            
                            return function (service_params) {
                                return new Proxy({
                                    'name': prop,
                                    'properties': service_params
                                }, {
                                    get: function(service, service_action) {
                                        return (params, callback) => {
                                            chrome.runtime.sendMessage(
                                                HELPER_EXTENSION_ID,
                                                {
                                                    action: 'serviceAction',
                                                    args: this.serviceArgs,
                                                    service: service,
                                                    service_action: service_action,
                                                    params: params
                                                },
                                                function(response) {
                                                    if (!response.success) {
                                                        callback(response.error, response.data);
                                                    } else {
                                                        callback(null, response.data);
                                                    }
                                                }
                                            );
                                        }
                                    }
                                });
                            };
                        }
                    });
                }

                postExtensionPing();
            }
        );
    } else {
        postExtensionPing();
    }

    function postExtensionPing() {
        /* ========================================================================== */
        // AWS Base Config (must be before Account Scan and after SDK Proxy)
        /* ========================================================================== */

        AWS.config.update({
            credentials: new AWS.Credentials(
                window.localStorage.getItem('credentials-accesskey'),
                window.localStorage.getItem('credentials-secretkey'),
                window.localStorage.getItem('credentials-sessiontoken')
            ),
            region: 'us-east-1'
        });

        /* ========================================================================== */
        // Account Scan
        /* ========================================================================== */

        $('#scan-account').on('click', () => {
            updateDatatableComputeEC2();
            updateDatatableComputeECR();
            updateDatatableComputeECS();
            updateDatatableComputeEKS();
            updateDatatableComputeLambda();
            updateDatatableComputeElasticBeanstalk();
            updateDatatableStorageS3();
            updateDatatableDatabaseRDS();
            updateDatatableDatabaseDynamoDB();
            updateDatatableDatabaseElastiCache();
            updateDatatableDatabaseRedshift();
            updateDatatableNetworkingAndContentDeliveryVPC();
            updateDatatableNetworkingAndContentDeliveryCloudFront();
            updateDatatableNetworkingAndContentDeliveryRoute53();
            updateDatatableManagementAndGovernanceCloudWatch();
            updateDatatableManagementAndGovernanceCloudTrail();
            updateDatatableManagementAndGovernanceOpsWorks();
            updateDatatableAnalyticsKinesis();
            updateDatatableApplicationIntegrationSNS();
            updateDatatableApplicationIntegrationSQS();
        });

        $('#add-all-resources').on('click', () => {
            $('.f2datatable').each(function() {
                addAllTableRowsToTemplate("#" + this.id);
            });
        });

        $('#section-compute-ec2-instances-datatable').on('refresh.bs.table', updateDatatableComputeEC2);
        $('#section-compute-ec2-hosts-datatable').on('refresh.bs.table', updateDatatableComputeEC2);
        $('#section-compute-ec2-loadbalancers-datatable').on('refresh.bs.table', updateDatatableComputeEC2);
        $('#section-compute-ec2-autoscalinggroups-datatable').on('refresh.bs.table', updateDatatableComputeEC2);
        $('#section-compute-ec2-autoscalingpolicies-datatable').on('refresh.bs.table', updateDatatableComputeEC2);
        $('#section-compute-ec2-autoscalingscheduledactions-datatable').on('refresh.bs.table', updateDatatableComputeEC2);
        $('#section-compute-ec2-securitygroups-datatable').on('refresh.bs.table', updateDatatableComputeEC2);
        $('#section-compute-ec2-launchconfigurations-datatable').on('refresh.bs.table', updateDatatableComputeEC2);
        $('#section-compute-ec2-launchtemplates-datatable').on('refresh.bs.table', updateDatatableComputeEC2);
        $('#section-compute-ec2-targetgroups-datatable').on('refresh.bs.table', updateDatatableComputeEC2);
        $('#section-compute-ec2-volumes-datatable').on('refresh.bs.table', updateDatatableComputeEC2);
        $('#section-compute-ec2-networkinterfaces-datatable').on('refresh.bs.table', updateDatatableComputeEC2);
        $('#section-compute-ec2-spotrequests-datatable').on('refresh.bs.table', updateDatatableComputeEC2);
        $('#section-compute-ec2-placementgroups-datatable').on('refresh.bs.table', updateDatatableComputeEC2);

        $('#section-compute-ecr-repositories-datatable').on('refresh.bs.table', updateDatatableComputeECR);

        $('#section-compute-ecs-clusters-datatable').on('refresh.bs.table', updateDatatableComputeECS);
        $('#section-compute-ecs-services-datatable').on('refresh.bs.table', updateDatatableComputeECS);
        $('#section-compute-ecs-taskdefinitions-datatable').on('refresh.bs.table', updateDatatableComputeECS);

        $('#section-compute-eks-clusters-datatable').on('refresh.bs.table', updateDatatableComputeEKS);
        
        $('#section-compute-lambda-functions-datatable').on('refresh.bs.table', updateDatatableComputeLambda);
        $('#section-compute-lambda-aliases-datatable').on('refresh.bs.table', updateDatatableComputeLambda);
        
        $('#section-compute-elasticbeanstalk-applications-datatable').on('refresh.bs.table', updateDatatableComputeElasticBeanstalk);
        $('#section-compute-elasticbeanstalk-applicationversions-datatable').on('refresh.bs.table', updateDatatableComputeElasticBeanstalk);
        $('#section-compute-elasticbeanstalk-environments-datatable').on('refresh.bs.table', updateDatatableComputeElasticBeanstalk);
        $('#section-compute-elasticbeanstalk-configurationtemplates-datatable').on('refresh.bs.table', updateDatatableComputeElasticBeanstalk);

        $('#section-storage-s3-buckets-datatable').on('refresh.bs.table', updateDatatableStorageS3);
        $('#section-storage-s3-bucketpolicies-datatable').on('refresh.bs.table', updateDatatableStorageS3);

        $('#section-databases-rds-instances-datatable').on('refresh.bs.table', updateDatatableDatabaseRDS);
        $('#section-databases-rds-subnetgroups-datatable').on('refresh.bs.table', updateDatatableDatabaseRDS);
        $('#section-databases-rds-parametergroups-datatable').on('refresh.bs.table', updateDatatableDatabaseRDS);
        $('#section-databases-rds-securitygroups-datatable').on('refresh.bs.table', updateDatatableDatabaseRDS);

        $('#section-databases-dynamodb-tables-datatable').on('refresh.bs.table', updateDatatableDatabaseDynamoDB);

        $('#section-databases-elasticache-clusters-datatable').on('refresh.bs.table', updateDatatableDatabaseElastiCache);
        $('#section-databases-elasticache-subnetgroups-datatable').on('refresh.bs.table', updateDatatableDatabaseElastiCache);
        $('#section-databases-elasticache-parametergroups-datatable').on('refresh.bs.table', updateDatatableDatabaseElastiCache);
        $('#section-databases-elasticache-securitygroups-datatable').on('refresh.bs.table', updateDatatableDatabaseElastiCache);

        $('#section-databases-redshift-clusters-datatable').on('refresh.bs.table', updateDatatableDatabaseRedshift);
        $('#section-databases-redshift-subnetgroups-datatable').on('refresh.bs.table', updateDatatableDatabaseRedshift);
        $('#section-databases-redshift-parametergroups-datatable').on('refresh.bs.table', updateDatatableDatabaseRedshift);
        $('#section-databases-redshift-securitygroups-datatable').on('refresh.bs.table', updateDatatableDatabaseRedshift);

        $('#section-networkingandcontentdelivery-vpc-vpcs-datatable').on('refresh.bs.table', updateDatatableNetworkingAndContentDeliveryVPC);
        $('#section-networkingandcontentdelivery-vpc-subnets-datatable').on('refresh.bs.table', updateDatatableNetworkingAndContentDeliveryVPC);
        $('#section-networkingandcontentdelivery-vpc-internetgateways-datatable').on('refresh.bs.table', updateDatatableNetworkingAndContentDeliveryVPC);
        $('#section-networkingandcontentdelivery-vpc-customergateways-datatable').on('refresh.bs.table', updateDatatableNetworkingAndContentDeliveryVPC);
        $('#section-networkingandcontentdelivery-vpc-virtualprivategateways-datatable').on('refresh.bs.table', updateDatatableNetworkingAndContentDeliveryVPC);
        $('#section-networkingandcontentdelivery-vpc-elasticips-datatable').on('refresh.bs.table', updateDatatableNetworkingAndContentDeliveryVPC);
        $('#section-networkingandcontentdelivery-vpc-dhcpoptions-datatable').on('refresh.bs.table', updateDatatableNetworkingAndContentDeliveryVPC);
        $('#section-networkingandcontentdelivery-vpc-vpnconnections-datatable').on('refresh.bs.table', updateDatatableNetworkingAndContentDeliveryVPC);
        $('#section-networkingandcontentdelivery-vpc-peeringconnections-datatable').on('refresh.bs.table', updateDatatableNetworkingAndContentDeliveryVPC);
        $('#section-networkingandcontentdelivery-vpc-networkacls-datatable').on('refresh.bs.table', updateDatatableNetworkingAndContentDeliveryVPC);
        $('#section-networkingandcontentdelivery-vpc-routetables-datatable').on('refresh.bs.table', updateDatatableNetworkingAndContentDeliveryVPC);

        $('#section-networkingandcontentdelivery-cloudfront-distributions-datatable').on('refresh.bs.table', updateDatatableNetworkingAndContentDeliveryCloudFront);

        $('#section-networkingandcontentdelivery-route53-hostedzones-datatable').on('refresh.bs.table', updateDatatableNetworkingAndContentDeliveryRoute53);
        $('#section-networkingandcontentdelivery-route53-records-datatable').on('refresh.bs.table', updateDatatableNetworkingAndContentDeliveryRoute53);
        $('#section-networkingandcontentdelivery-route53-healthchecks-datatable').on('refresh.bs.table', updateDatatableNetworkingAndContentDeliveryRoute53);

        $('#section-managementandgovernance-cloudwatch-alarms-datatable').on('refresh.bs.table', updateDatatableManagementAndGovernanceCloudWatch);

        $('#section-managementandgovernance-cloudtrail-trails-datatable').on('refresh.bs.table', updateDatatableManagementAndGovernanceCloudTrail);

        $('#section-managementandgovernance-opsworks-stacks-datatable').on('refresh.bs.table', updateDatatableManagementAndGovernanceOpsWorks);
        $('#section-managementandgovernance-opsworks-apps-datatable').on('refresh.bs.table', updateDatatableManagementAndGovernanceOpsWorks);
        $('#section-managementandgovernance-opsworks-layers-datatable').on('refresh.bs.table', updateDatatableManagementAndGovernanceOpsWorks);
        $('#section-managementandgovernance-opsworks-elbattachments-datatable').on('refresh.bs.table', updateDatatableManagementAndGovernanceOpsWorks);
        $('#section-managementandgovernance-opsworks-instances-datatable').on('refresh.bs.table', updateDatatableManagementAndGovernanceOpsWorks);

        $('#section-analytics-kinesis-streams-datatable').on('refresh.bs.table', updateDatatableAnalyticsKinesis);

        $('#section-applicationintegration-sns-topics-datatable').on('refresh.bs.table', updateDatatableApplicationIntegrationSNS);
        $('#section-applicationintegration-sns-topicpolicies-datatable').on('refresh.bs.table', updateDatatableApplicationIntegrationSNS);
        
        $('#section-applicationintegration-sqs-queues-datatable').on('refresh.bs.table', updateDatatableApplicationIntegrationSQS);
        $('#section-applicationintegration-sqs-queuepolicies-datatable').on('refresh.bs.table', updateDatatableApplicationIntegrationSQS);
    }

}); // <-- End of documentReady

/* ========================================================================== */
// BlockUI
/* ========================================================================== */

function blockUI(selector) {
    $(selector).block({
        message: '<div class="blockui-default-message"><i class="fa fa-circle-o-notch fa-spin"></i><h6>Loading...</h6></div>',
        overlayCSS:  {
            background: 'rgba(142, 159, 167, 0.8)',
            opacity: 1,
            cursor: 'wait'
        },
        css: {
            width: '50%'
        },
        blockMsgClass: 'block-msg-default'
    });
}

function unblockUI(selector) {
    $(selector).unblock();
}

/* ========================================================================== */