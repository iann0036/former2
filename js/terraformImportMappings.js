/* ========================================================================== */
// Terraform Import Mappings
// Maps CloudFormation resource types to Terraform import identifier patterns
// Each resource type needs to know which property(ies) from the resource data
// should be used as the identifier for the Terraform import command
/* ========================================================================== */

const TERRAFORM_IMPORT_MAPPINGS = {
    // EC2
    'AWS::EC2::Instance': {
        'terraformType': 'aws_instance',
        'identifierPath': ['InstanceId', 'id']  // Use instance ID
    },
    'AWS::EC2::SecurityGroup': {
        'terraformType': 'aws_security_group',
        'identifierPath': ['GroupId', 'groupId', 'id']  // Try GroupId first, fall back to id
    },
    'AWS::EC2::Volume': {
        'terraformType': 'aws_ebs_volume',
        'identifierPath': ['VolumeId', 'volumeId', 'id']
    },
    'AWS::EC2::VolumeAttachment': {
        'terraformType': 'aws_volume_attachment',
        'identifierPath': ['VolumeId', 'volumeId']  // volume_id:instance_id:device
    },
    'AWS::EC2::VPC': {
        'terraformType': 'aws_vpc',
        'identifierPath': ['VpcId', 'vpcId', 'id']
    },
    'AWS::EC2::Subnet': {
        'terraformType': 'aws_subnet',
        'identifierPath': ['SubnetId', 'subnetId', 'id']
    },
    'AWS::EC2::NetworkInterface': {
        'terraformType': 'aws_network_interface',
        'identifierPath': ['NetworkInterfaceId', 'networkInterfaceId', 'id']
    },
    'AWS::EC2::NetworkInterfaceAttachment': {
        'terraformType': 'aws_network_interface_attachment',
        'identifierPath': ['AttachmentId', 'attachmentId', 'id']
    },
    'AWS::EC2::InternetGateway': {
        'terraformType': 'aws_internet_gateway',
        'identifierPath': ['InternetGatewayId', 'internetGatewayId', 'id']
    },
    'AWS::EC2::InternetGatewayAttachment': {
        'terraformType': 'aws_internet_gateway_attachment',
        'identifierPath': ['InternetGatewayId', 'internetGatewayId']  // igw_id:vpc_id
    },
    'AWS::EC2::RouteTable': {
        'terraformType': 'aws_route_table',
        'identifierPath': ['RouteTableId', 'routeTableId', 'id']
    },
    'AWS::EC2::Route': {
        'terraformType': 'aws_route',
        'identifierPath': ['RouteTableId', 'routeTableId']  // Complex: rtb_id_destination
    },
    'AWS::EC2::SubnetRouteTableAssociation': {
        'terraformType': 'aws_route_table_association',
        'identifierPath': ['SubnetId', 'subnetId']  // association ID format
    },
    'AWS::EC2::FlowLog': {
        'terraformType': 'aws_flow_log',
        'identifierPath': ['FlowLogId', 'flowLogId', 'id']
    },
    'AWS::EC2::PlacementGroup': {
        'terraformType': 'aws_placement_group',
        'identifierPath': ['GroupName', 'groupName', 'name']
    },
    
    // RDS
    'AWS::RDS::DBInstance': {
        'terraformType': 'aws_db_instance',
        'identifierPath': ['DBInstanceIdentifier', 'dBInstanceIdentifier', 'identifier']
    },
    'AWS::RDS::DBCluster': {
        'terraformType': 'aws_rds_cluster',
        'identifierPath': ['DBClusterIdentifier', 'dBClusterIdentifier', 'identifier']
    },
    'AWS::RDS::DBClusterParameterGroup': {
        'terraformType': 'aws_rds_cluster_parameter_group',
        'identifierPath': ['DBClusterParameterGroupName', 'dBClusterParameterGroupName', 'name']
    },
    'AWS::RDS::DBParameterGroup': {
        'terraformType': 'aws_db_parameter_group',
        'identifierPath': ['DBParameterGroupName', 'dBParameterGroupName', 'name']
    },
    'AWS::RDS::DBSecurityGroup': {
        'terraformType': 'aws_db_security_group',
        'identifierPath': ['DBSecurityGroupName', 'dBSecurityGroupName', 'name']
    },
    'AWS::RDS::DBSubnetGroup': {
        'terraformType': 'aws_db_subnet_group',
        'identifierPath': ['DBSubnetGroupName', 'dBSubnetGroupName', 'name']
    },
    'AWS::RDS::EventSubscription': {
        'terraformType': 'aws_db_event_subscription',
        'identifierPath': ['CustSubscriptionId', 'custSubscriptionId', 'id']
    },
    
    // S3
    'AWS::S3::Bucket': {
        'terraformType': 'aws_s3_bucket',
        'identifierPath': ['BucketName', 'Bucket', 'Name', 'bucketName', 'bucket', 'name']
    },
    'AWS::S3::BucketPolicy': {
        'terraformType': 'aws_s3_bucket_policy',
        'identifierPath': ['Bucket', 'BucketName', 'Name', 'bucket', 'bucketName', 'name']  // bucket name as identifier
    },
    
    // Lambda
    'AWS::Lambda::Function': {
        'terraformType': 'aws_lambda_function',
        'identifierPath': ['FunctionName', 'functionName', 'name']
    },
    'AWS::Lambda::LayerVersion': {
        'terraformType': 'aws_lambda_layer_version',
        'identifierPath': ['LayerVersionArn', 'layerVersionArn', 'arn']
    },
    'AWS::Lambda::Permission': {
        'terraformType': 'aws_lambda_permission',
        'identifierPath': ['FunctionName', 'functionName']  // name_statementId
    },
    'AWS::Lambda::EventSourceMapping': {
        'terraformType': 'aws_lambda_event_source_mapping',
        'identifierPath': ['EventSourceMappingArn', 'eventSourceMappingArn', 'UUID', 'uuid']
    },
    
    // DynamoDB
    'AWS::DynamoDB::Table': {
        'terraformType': 'aws_dynamodb_table',
        'identifierPath': ['TableName', 'tableName', 'name']
    },
    
    // API Gateway
    'AWS::ApiGateway::RestApi': {
        'terraformType': 'aws_api_gateway_rest_api',
        'identifierPath': ['RestApiId', 'restApiId', 'id']
    },
    'AWS::ApiGateway::Stage': {
        'terraformType': 'aws_api_gateway_stage',
        'identifierPath': ['RestApiId', 'restApiId']  // api_id/stage_name
    },
    'AWS::ApiGateway::Deployment': {
        'terraformType': 'aws_api_gateway_deployment',
        'identifierPath': ['DeploymentId', 'deploymentId', 'id']
    },
    'AWS::ApiGateway::Resource': {
        'terraformType': 'aws_api_gateway_resource',
        'identifierPath': ['ResourceId', 'resourceId', 'id']
    },
    'AWS::ApiGateway::Method': {
        'terraformType': 'aws_api_gateway_method',
        'identifierPath': ['RestApiId', 'restApiId']  // Complex identifier
    },
    'AWS::ApiGateway::Model': {
        'terraformType': 'aws_api_gateway_model',
        'identifierPath': ['RestApiId', 'restApiId']  // Complex identifier
    },
    'AWS::ApiGateway::Authorizer': {
        'terraformType': 'aws_api_gateway_authorizer',
        'identifierPath': ['AuthorizerId', 'restrictedId', 'id']
    },
    'AWS::ApiGateway::RequestValidator': {
        'terraformType': 'aws_api_gateway_request_validator',
        'identifierPath': ['RequestValidatorId', 'requestValidatorId', 'id']
    },
    'AWS::ApiGateway::BasePathMapping': {
        'terraformType': 'aws_api_gateway_base_path_mapping',
        'identifierPath': ['DomainName', 'domainName']  // domain_name/base_path
    },
    'AWS::ApiGateway::UsagePlan': {
        'terraformType': 'aws_api_gateway_usage_plan',
        'identifierPath': ['Id', 'id']
    },
    'AWS::ApiGateway::ApiKey': {
        'terraformType': 'aws_api_gateway_api_key',
        'identifierPath': ['Id', 'APIKeyId', 'id']
    },
    'AWS::ApiGateway::ClientCertificate': {
        'terraformType': 'aws_api_gateway_client_certificate',
        'identifierPath': ['ClientCertificateId', 'clientCertificateId', 'id']
    },
    'AWS::ApiGateway::VpcLink': {
        'terraformType': 'aws_api_gateway_vpc_link',
        'identifierPath': ['VpcLinkId', 'vpcLinkId', 'id']
    },
    'AWS::ApiGateway::Account': {
        'terraformType': 'aws_api_gateway_account',
        'identifierPath': ['AccountId', 'accountId', 'id']
    },
    'AWS::ApiGateway::DomainName': {
        'terraformType': 'aws_api_gateway_domain_name',
        'identifierPath': ['DomainName', 'domainName', 'name']
    },
    
    // CloudFront
    'AWS::CloudFront::Distribution': {
        'terraformType': 'aws_cloudfront_distribution',
        'identifierPath': ['DistributionId', 'distributionId', 'id']
    },
    'AWS::CloudFront::OriginAccessIdentity': {
        'terraformType': 'aws_cloudfront_origin_access_identity',
        'identifierPath': ['Id', 'id']
    },
    
    // IAM
    'AWS::IAM::Role': {
        'terraformType': 'aws_iam_role',
        'identifierPath': ['RoleName', 'roleName', 'name']
    },
    'AWS::IAM::Policy': {
        'terraformType': 'aws_iam_policy',
        'identifierPath': ['PolicyName', 'policyName', 'name']
    },
    'AWS::IAM::RolePolicyAttachment': {
        'terraformType': 'aws_iam_role_policy_attachment',
        'identifierPath': ['RoleName', 'roleName']  // role_name/policy_arn
    },
    'AWS::IAM::User': {
        'terraformType': 'aws_iam_user',
        'identifierPath': ['UserName', 'userName', 'name']
    },
    'AWS::IAM::Group': {
        'terraformType': 'aws_iam_group',
        'identifierPath': ['GroupName', 'groupName', 'name']
    },
    'AWS::IAM::InstanceProfile': {
        'terraformType': 'aws_iam_instance_profile',
        'identifierPath': ['InstanceProfileName', 'instanceProfileName', 'name']
    },
    
    // CloudWatch
    'AWS::CloudWatch::Alarm': {
        'terraformType': 'aws_cloudwatch_metric_alarm',
        'identifierPath': ['AlarmName', 'alarmName', 'name']
    },
    'AWS::Logs::LogGroup': {
        'terraformType': 'aws_cloudwatch_log_group',
        'identifierPath': ['LogGroupName', 'logGroupName', 'name']
    },
    'AWS::Logs::LogStream': {
        'terraformType': 'aws_cloudwatch_log_stream',
        'identifierPath': ['LogGroupName', 'logGroupName']  // log_group_name:log_stream_name
    },
    
    // SNS
    'AWS::SNS::Topic': {
        'terraformType': 'aws_sns_topic',
        'identifierPath': ['TopicArn', 'topicArn', 'arn']
    },
    'AWS::SNS::Subscription': {
        'terraformType': 'aws_sns_topic_subscription',
        'identifierPath': ['SubscriptionArn', 'subscriptionArn', 'arn']
    },
    
    // SQS
    'AWS::SQS::Queue': {
        'terraformType': 'aws_sqs_queue',
        'identifierPath': ['QueueUrl', 'queueUrl', 'url']
    },
    
    // Kinesis
    'AWS::Kinesis::Stream': {
        'terraformType': 'aws_kinesis_stream',
        'identifierPath': ['StreamName', 'streamName', 'name']
    },
    
    // ElastiCache
    'AWS::ElastiCache::CacheCluster': {
        'terraformType': 'aws_elasticache_cluster',
        'identifierPath': ['CacheClusterId', 'cacheClusterId', 'id']
    },
    'AWS::ElastiCache::ParameterGroup': {
        'terraformType': 'aws_elasticache_parameter_group',
        'identifierPath': ['ParameterGroupName', 'parameterGroupName', 'name']
    },
    'AWS::ElastiCache::ReplicationGroup': {
        'terraformType': 'aws_elasticache_replication_group',
        'identifierPath': ['ReplicationGroupId', 'replicationGroupId', 'id']
    },
    'AWS::ElastiCache::SubnetGroup': {
        'terraformType': 'aws_elasticache_subnet_group',
        'identifierPath': ['CacheSubnetGroupName', 'cacheSubnetGroupName', 'name']
    },
    'AWS::ElastiCache::SecurityGroup': {
        'terraformType': 'aws_elasticache_security_group',
        'identifierPath': ['GroupName', 'groupName', 'name']
    },
    
    // ECS
    'AWS::ECS::Cluster': {
        'terraformType': 'aws_ecs_cluster',
        'identifierPath': ['ClusterName', 'clusterName', 'name']
    },
    'AWS::ECS::Service': {
        'terraformType': 'aws_ecs_service',
        'identifierPath': ['ServiceName', 'serviceName']  // cluster_name/service_name
    },
    'AWS::ECS::TaskDefinition': {
        'terraformType': 'aws_ecs_task_definition',
        'identifierPath': ['Family', 'family', 'TaskDefinitionArn', 'taskDefinitionArn', 'arn']
    },
    
    // AutoScaling
    'AWS::AutoScaling::LaunchConfiguration': {
        'terraformType': 'aws_launch_configuration',
        'identifierPath': ['LaunchConfigurationName', 'launchConfigurationName', 'name']
    },
    'AWS::AutoScaling::AutoScalingGroup': {
        'terraformType': 'aws_autoscaling_group',
        'identifierPath': ['AutoScalingGroupName', 'autoScalingGroupName', 'name']
    },
    'AWS::AutoScaling::ScalingPolicy': {
        'terraformType': 'aws_autoscaling_policy',
        'identifierPath': ['PolicyARN', 'policyARN', 'arn']
    },
    'AWS::AutoScaling::LifecycleHook': {
        'terraformType': 'aws_autoscaling_lifecycle_hook',
        'identifierPath': ['AutoScalingGroupName', 'autoScalingGroupName']  // asg_name:hook_name
    },
    'AWS::AutoScaling::ScheduledAction': {
        'terraformType': 'aws_autoscaling_schedule',
        'identifierPath': ['ScheduledActionName', 'scheduledActionName', 'name']
    },
    
    // Elastic Load Balancing
    'AWS::ElasticLoadBalancing::LoadBalancer': {
        'terraformType': 'aws_elb',
        'identifierPath': ['LoadBalancerName', 'loadBalancerName', 'name']
    },
    'AWS::ElasticLoadBalancingV2::LoadBalancer': {
        'terraformType': 'aws_lb',
        'identifierPath': ['LoadBalancerArn', 'loadBalancerArn', 'arn']
    },
    'AWS::ElasticLoadBalancingV2::TargetGroup': {
        'terraformType': 'aws_lb_target_group',
        'identifierPath': ['TargetGroupArn', 'targetGroupArn', 'arn']
    },
    'AWS::ElasticLoadBalancingV2::Listener': {
        'terraformType': 'aws_lb_listener',
        'identifierPath': ['ListenerArn', 'listenerArn', 'arn']
    },
    'AWS::ElasticLoadBalancingV2::ListenerRule': {
        'terraformType': 'aws_lb_listener_rule',
        'identifierPath': ['RuleArn', 'ruleArn', 'arn']
    },
    
    // CodeDeploy
    'AWS::CodeDeploy::Application': {
        'terraformType': 'aws_codedeploy_app',
        'identifierPath': ['ApplicationName', 'applicationName', 'name']
    },
    'AWS::CodeDeploy::DeploymentGroup': {
        'terraformType': 'aws_codedeploy_deployment_group',
        'identifierPath': ['DeploymentGroupName', 'deploymentGroupName', 'name']
    },
    
    // CodeBuild
    'AWS::CodeBuild::Project': {
        'terraformType': 'aws_codebuild_project',
        'identifierPath': ['Name', 'name']
    },
    
    // CodePipeline
    'AWS::CodePipeline::Pipeline': {
        'terraformType': 'aws_codepipeline',
        'identifierPath': ['Name', 'name']
    },
    
    // Secrets Manager
    'AWS::SecretsManager::Secret': {
        'terraformType': 'aws_secretsmanager_secret',
        'identifierPath': ['ARN', 'Id', 'arn', 'id']
    },
    
    // Systems Manager Parameter
    'AWS::SSM::Parameter': {
        'terraformType': 'aws_ssm_parameter',
        'identifierPath': ['Name', 'name']
    },
    
    // KMS
    'AWS::KMS::Key': {
        'terraformType': 'aws_kms_key',
        'identifierPath': ['KeyId', 'keyId', 'id']
    },
    'AWS::KMS::Alias': {
        'terraformType': 'aws_kms_alias',
        'identifierPath': ['AliasName', 'aliasName', 'name']
    },
    
    // ACM
    'AWS::CertificateManager::Certificate': {
        'terraformType': 'aws_acm_certificate',
        'identifierPath': ['CertificateArn', 'certificateArn', 'arn']
    },
    
    // Route 53
    'AWS::Route53::HostedZone': {
        'terraformType': 'aws_route53_zone',
        'identifierPath': ['HostedZone', 'HostedZoneId', 'hostedZoneId', 'id']
    },
    'AWS::Route53::RecordSet': {
        'terraformType': 'aws_route53_record',
        'identifierPath': ['HostedZoneId', 'hostedZoneId']  // zone_id_name_type
    },
    
    // CloudFormation
    'AWS::CloudFormation::Stack': {
        'terraformType': 'aws_cloudformation_stack',
        'identifierPath': ['StackName', 'stackName', 'name']
    },
    
    // EventBridge
    'AWS::Events::Rule': {
        'terraformType': 'aws_cloudwatch_event_rule',
        'identifierPath': ['Name', 'name']
    },
    'AWS::Events::EventBus': {
        'terraformType': 'aws_cloudwatch_event_bus',
        'identifierPath': ['Name', 'name']
    },
    'AWS::Events::Target': {
        'terraformType': 'aws_cloudwatch_event_target',
        'identifierPath': ['Rule', 'rule']  // rule_name:target_id
    },
    
    // Default fallback
    'default': {
        'terraformType': null,
        'identifierPath': ['Id', 'ID', 'id', 'ARN', 'Arn', 'arn']
    }
};

/**
 * Get the terraform import identifier for a resource
 * @param {string} cfnType - CloudFormation resource type (e.g., 'AWS::S3::Bucket')
 * @param {object} resourceData - The resource data object containing properties
 * @param {object} trackedResource - The tracked resource object with mapped data
 * @returns {string|null} - The identifier to use in the import command, or null if unable to determine
 */
function getTerraformImportIdentifier(cfnType, resourceData, trackedResource) {
    const mapping = TERRAFORM_IMPORT_MAPPINGS[cfnType] || TERRAFORM_IMPORT_MAPPINGS['default'];
    
    if (!mapping || !mapping.identifierPath) {
        return null;
    }
    
    // Try each path in order
    for (const path of mapping.identifierPath) {
        // Check in resourceData with exact match first
        if (resourceData && resourceData[path]) {
            const value = resourceData[path];
            if (value && typeof value === 'object') {
                // If it's an object, try to get a useful identifier from it
                if (value.id) return String(value.id);
                if (value.Id) return String(value.Id);
                if (value.arn) return String(value.arn);
                if (value.Arn) return String(value.Arn);
            } else if (value) {
                return String(value);
            }
        }
        
        // Check in resourceData with case-insensitive match
        if (resourceData) {
            const caseInsensitiveKey = Object.keys(resourceData).find(
                key => key.toLowerCase() === path.toLowerCase()
            );
            if (caseInsensitiveKey) {
                const value = resourceData[caseInsensitiveKey];
                if (value && typeof value === 'object') {
                    // If it's an object, try to get a useful identifier from it
                    if (value.id) return String(value.id);
                    if (value.Id) return String(value.Id);
                    if (value.arn) return String(value.arn);
                    if (value.Arn) return String(value.Arn);
                } else if (value) {
                    return String(value);
                }
            }
        }
        
        // Check in trackedResource options.cfn with exact match
        if (trackedResource && trackedResource.options && trackedResource.options.cfn && trackedResource.options.cfn[path]) {
            const value = trackedResource.options.cfn[path];
            if (value) return String(value);
        }
        
        // Check in trackedResource options.cfn with case-insensitive match
        if (trackedResource && trackedResource.options && trackedResource.options.cfn) {
            const caseInsensitiveKey = Object.keys(trackedResource.options.cfn).find(
                key => key.toLowerCase() === path.toLowerCase()
            );
            if (caseInsensitiveKey) {
                const value = trackedResource.options.cfn[caseInsensitiveKey];
                if (value) return String(value);
            }
        }
        
        // Check in trackedResource obj.data with exact match
        if (trackedResource && trackedResource.obj && trackedResource.obj.data && trackedResource.obj.data[path]) {
            const value = trackedResource.obj.data[path];
            if (value) return String(value);
        }
        
        // Check in trackedResource obj.data with case-insensitive match
        if (trackedResource && trackedResource.obj && trackedResource.obj.data) {
            const caseInsensitiveKey = Object.keys(trackedResource.obj.data).find(
                key => key.toLowerCase() === path.toLowerCase()
            );
            if (caseInsensitiveKey) {
                const value = trackedResource.obj.data[caseInsensitiveKey];
                if (value) return String(value);
            }
        }
    }
    
    // Final fallback: try to find any 'id' or 'Id' property
    if (resourceData) {
        const idKey = Object.keys(resourceData).find(key => key.toLowerCase() === 'id');
        if (idKey && resourceData[idKey]) return String(resourceData[idKey]);
    }
    
    if (trackedResource && trackedResource.options && trackedResource.options.cfn) {
        const idKey = Object.keys(trackedResource.options.cfn).find(key => key.toLowerCase() === 'id');
        if (idKey && trackedResource.options.cfn[idKey]) return String(trackedResource.options.cfn[idKey]);
    }
    
    if (trackedResource && trackedResource.obj && trackedResource.obj.data) {
        const idKey = Object.keys(trackedResource.obj.data).find(key => key.toLowerCase() === 'id');
        if (idKey && trackedResource.obj.data[idKey]) return String(trackedResource.obj.data[idKey]);
    }
    
    return null;
}

/**
 * Generate terraform import blocks for given resources
 * @param {array} trackedResources - Array of tracked resources with mapping data
 * @returns {string} - Formatted terraform import blocks
 */
function generateTerraformImports(trackedResources) {
    if (!trackedResources || trackedResources.length === 0) {
        return '# No resources available for import\n';
    }
    
    let output = '# Terraform Import Blocks\n';
    output += '# Generated by Former2\n';
    output += '# Add these import blocks to your Terraform configuration file\n';
    output += '# Then run: terraform apply -generate-config-out=imported.tf\n\n';
    
    trackedResources.forEach((resource, index) => {
        if (!resource.terraformType) {
            return; // Skip resources without terraform type
        }
        
        const mapping = TERRAFORM_IMPORT_MAPPINGS[resource.type];
        if (!mapping) {
            return; // Skip unmapped resource types
        }
        
        const identifier = getTerraformImportIdentifier(resource.type, resource.obj.data, resource);
        
        if (!identifier) {
            // Collect all available properties for debugging
            let allProps = {};
            
            if (resource.obj && resource.obj.data) {
                allProps.data = Object.keys(resource.obj.data);
            }
            
            if (resource.options && resource.options.cfn) {
                allProps.cfn = Object.keys(resource.options.cfn);
            }
            
            // Log to console for debugging
            console.log(`Unable to find identifier for ${resource.type}:`, {
                resourceType: resource.type,
                terraformType: resource.terraformType,
                logicalId: resource.logicalId,
                availableProperties: allProps,
                expectedPaths: mapping.identifierPath,
                resource: resource
            });
            
            let cfnKeys = resource.options && resource.options.cfn ? Object.keys(resource.options.cfn).join(', ') : 'none';
            let dataKeys = resource.obj && resource.obj.data ? Object.keys(resource.obj.data).join(', ') : 'none';
            
            output += `# WARNING: Unable to determine identifier for ${resource.terraformType}.${resource.logicalId}\n`;
            output += `# Expected: ${mapping.identifierPath.join(', ')}\n`;
            output += `# CFN has: ${cfnKeys}\n`;
            output += `# Data has: ${dataKeys}\n`;
            output += `import {\n`;
            output += `  to = ${resource.terraformType}.${resource.logicalId}\n`;
            output += `  id = "<resource-id>"\n`;
            output += `}\n\n`;
            return;
        }
        
        // Format the import block
        output += `import {\n`;
        output += `  to = ${resource.terraformType}.${resource.logicalId}\n`;
        output += `  id = "${identifier}"\n`;
        output += `}\n\n`;
    });
    
    output += '# Note: Some resources may require composite identifiers (e.g., "resource1_id:resource2_id")\n';
    output += '# Verify the identifiers are correct before applying.\n';
    output += '# Reference: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/guide-importing\n';
    
    return output;
}
