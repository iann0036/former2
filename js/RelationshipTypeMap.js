var RELATIONSHIP_TYPE_MAP = {
  "AWS::XRay::Group": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SES::ContactList": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalog::PortfolioShare": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ACMPCA::CertificateAuthority": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAF::IPSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IAM::Group": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::IAM::ManagedPolicy": {
          "PropertyName": "ManagedPolicyArns",
          "Arity": "Many"
        },
        "AWS::IAM::Policy": {
          "PropertyName": "Policies",
          "Arity": "Many",
          "EmbeddedPropertyName": "PolicyName"
        }
      }
    }
  },
  "AWS::Backup::BackupPlan": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppIntegrations::EventIntegration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Rekognition::Collection": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::S3::MultiRegionAccessPoint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53Resolver::ResolverQueryLoggingConfig": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::VPCPeeringConnection": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::EC2::VPC": [
          {
            "PropertyName": "PeerVpcId",
            "Endpoint": "Target"
          },
          {
            "PropertyName": "VpcId",
            "Endpoint": "Source"
          }
        ],
        "AWS::IAM::Role": {
          "PropertyName": "PeerRoleArn"
        }
      }
    }
  },
  "AWS::FraudDetector::EntityType": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Elasticsearch::Domain": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTSiteWise::AssetModel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::LookoutMetrics::Alert": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFRegional::SqlInjectionMatchSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Kinesis::Stream": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Redshift::EndpointAccess": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RAM::ResourceShare": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::ImageVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppRunner::VpcConnector": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::CapacityReservation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppSync::Resolver": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DataSync::LocationNFS": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RefactorSpaces::Environment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::VoiceChannel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::VPCEndpointServicePermissions": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53::RecordSet": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::Route53::HostedZone": {
          "PropertyName": "HostedZoneId"
        }
      },
      "IsAssociatedWith": {
        "AWS::Route53::HealthCheck": {
          "PropertyName": "HealthCheckId"
        }
      }
    }
  },
  "AWS::WAF::SizeConstraintSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ManagedBlockchain::Member": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Timestream::ScheduledQuery": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ECS::Cluster": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Events::Endpoint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::FeatureGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NetworkManager::Link": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KinesisAnalytics::ApplicationOutput": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFormation::StackSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Cognito::UserPoolRiskConfigurationAttachment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppStream::Stack": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppSync::GraphQLSchema": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::TransitGatewayRouteTableAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::ConnectorDefinitionVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalog::ResourceUpdateConstraint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppSync::GraphQLApi": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFront::StreamingDistribution": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::DataQualityJobDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Cognito::UserPoolIdentityProvider": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ACMPCA::CertificateAuthorityActivation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFv2::LoggingConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::LakeFormation::Resource": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SNS::Topic": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalog::TagOption": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::QuickSight::Dashboard": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Redshift::Cluster": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Redshift::ScheduledAction": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::MonitoringSchedule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::IPAM": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppMesh::Route": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EKS::Nodegroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CE::CostCategory": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::EIP": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EC2::NetworkInterface": {
          "Via": "AWS::EC2::EIPAssociation"
        },
        "AWS::EC2::Instance": [
          {
            "PropertyName": "InstanceId"
          },
          {
            "Via": "AWS::EC2::EIPAssociation"
          }
        ]
      }
    }
  },
  "AWS::IoT1Click::Project": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT::CustomMetric": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaConvert::Queue": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::DomainName": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFv2::RegexPatternSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Backup::Framework": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lambda::LayerVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NetworkManager::CustomerGatewayAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::DocumentationPart": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::ApiGateway::RestApi": {
          "PropertyName": "RestApiId"
        }
      }
    }
  },
  "AWS::CloudFront::CachePolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RDS::DBSubnetGroup": {
    "EntityType": "Container",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::Subnet": {
          "PropertyName": "SubnetIds",
          "Arity": "Many"
        }
      }
    }
  },
  "AWS::LakeFormation::DataLakeSettings": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MemoryDB::ParameterGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTFleetHub::Application": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::EventStream": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MWAA::Environment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::PinpointEmail::ConfigurationSetEventDestination": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFRegional::RegexPatternSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GuardDuty::ThreatIntelSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Logs::MetricFilter": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::Logs::LogGroup": {
          "PropertyName": "LogGroupName"
        }
      }
    }
  },
  "AWS::Lightsail::Database": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lightsail::Certificate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Macie::Session": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SecretsManager::RotationSchedule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Cognito::IdentityPool": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElasticLoadBalancingV2::LoadBalancer": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::Subnet": [
          {
            "PropertyName": "SubnetMappings",
            "Arity": "Many",
            "EmbeddedPropertyName": "SubnetId"
          },
          {
            "PropertyName": "Subnets",
            "Arity": "Many"
          }
        ]
      },
      "IsAssociatedWith": {
        "AWS::EC2::EIP": {
          "PropertyName": "SubnetMappings",
          "Arity": "Many",
          "EmbeddedPropertyName": "AllocationId"
        },
        "AWS::EC2::SecurityGroup": {
          "PropertyName": "SecurityGroups",
          "Arity": "Many"
        }
      }
    }
  },
  "AWS::Route53::DNSSEC": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CodeBuild::SourceCredential": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DMS::ReplicationSubnetGroup": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::Subnet": {
          "PropertyName": "SubnetIds",
          "Arity": "Many"
        }
      }
    }
  },
  "AWS::SES::ConfigurationSetEventDestination": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::ModelPackageGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFv2::IPSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53Resolver::FirewallRuleGroupAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lambda::Alias": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::Lambda::Function": {
          "PropertyName": "FunctionName"
        },
        "AWS::Lambda::Version": {
          "PropertyName": "FunctionVersion"
        }
      }
    }
  },
  "AWS::EC2::SecurityGroupEgress": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::EC2::SecurityGroup": [
          {
            "PropertyName": "DestinationSecurityGroupId",
            "Endpoint": "Target"
          },
          {
            "PropertyName": "GroupId",
            "Endpoint": "Source"
          }
        ]
      }
    }
  },
  "AWS::Connect::QuickConnect": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lambda::LayerVersionPermission": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::StepFunctions::StateMachine": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT::MitigationAction": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CodeDeploy::DeploymentConfig": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DMS::EventSubscription": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::SNS::Topic": {
          "PropertyName": "SnsTopicARN"
        }
      }
    }
  },
  "AWS::EC2::TransitGatewayAttachment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CustomerProfiles::Integration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::FraudDetector::Outcome": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Location::Tracker": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DAX::ParameterGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT::SecurityProfile": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::S3::StorageLens": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SES::Template": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFront::Distribution": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Redshift::ClusterParameterGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::BillingConductor::PricingPlan": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElastiCache::UserGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EMR::InstanceGroupConfig": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EMR::Cluster": {
          "PropertyName": "VpcId"
        }
      }
    }
  },
  "AWS::ElasticLoadBalancingV2::ListenerRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CodePipeline::Pipeline": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::IAM::Role": {
          "PropertyName": "RoleArn"
        }
      }
    }
  },
  "AWS::MediaConnect::FlowEntitlement": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lightsail::LoadBalancer": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT::TopicRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFRegional::WebACLAssociation": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::WAFRegional::WebACL": {
          "PropertyName": "WebACLId"
        }
      }
    }
  },
  "AWS::SSMContacts::Contact": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalog::CloudFormationProduct": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GreengrassV2::ComponentVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTAnalytics::Channel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Amplify::App": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NetworkManager::ConnectAttachment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudWatch::AnomalyDetector": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Cloud9::EnvironmentEC2": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::Subnet": {
          "PropertyName": "SubnetId"
        }
      }
    }
  },
  "AWS::CloudFormation::HookTypeConfig": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Location::GeofenceCollection": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::ModelBiasJobDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lex::Bot": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppSync::ApiKey": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53::HostedZone": {
    "EntityType": "Container",
    "Relationships": {}
  },
  "AWS::Pinpoint::EmailTemplate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalog::PortfolioProductAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::TransitGatewayMulticastDomainAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTWireless::ServiceProfile": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaConvert::JobTemplate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EKS::Cluster": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Connect::HoursOfOperation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DocDB::DBCluster": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudWatch::CompositeAlarm": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DAX::Cluster": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RDS::GlobalCluster": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SSM::PatchBaseline": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DataSync::LocationHDFS": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT::DomainConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::BillingConductor::CustomLineItem": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RefactorSpaces::Service": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GuardDuty::Member": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lightsail::Distribution": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceDiscovery::Service": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalog::AcceptedPortfolioShare": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTWireless::WirelessDevice": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RoboMaker::SimulationApplicationVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AutoScaling::ScalingPolicy": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::AutoScaling::AutoScalingGroup": {
          "PropertyName": "AutoScalingGroupName"
        }
      }
    }
  },
  "AWS::Backup::BackupVault": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT1Click::Placement": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT::AccountAuditConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::DHCPOptions": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::UsagePlan": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SSMIncidents::ReplicationSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IAM::User": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::IAM::ManagedPolicy": {
          "PropertyName": "ManagedPolicyArns",
          "Arity": "Many"
        },
        "AWS::IAM::Policy": {
          "PropertyName": "Policies",
          "Arity": "Many",
          "EmbeddedPropertyName": "PolicyName"
        },
        "AWS::IAM::Group": {
          "PropertyName": "Groups",
          "Arity": "Many"
        }
      }
    }
  },
  "AWS::SES::ConfigurationSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KMS::ReplicaKey": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Location::TrackerConsumer": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudWatch::InsightRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Detective::MemberInvitation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTAnalytics::Datastore": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::S3::Bucket": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::ModelQualityJobDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Synthetics::Canary": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DataBrew::Recipe": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::NotebookInstance": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::BaiduChannel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFv2::WebACLAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Cognito::UserPool": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::EgressOnlyInternetGateway": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Events::ApiDestination": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGatewayV2::Api": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::NetworkInterfaceAttachment": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::EC2::NetworkInterface": {
          "PropertyName": "NetworkInterfaceId"
        },
        "AWS::EC2::Instance": {
          "PropertyName": "InstanceId"
        }
      }
    }
  },
  "AWS::RoboMaker::RobotApplication": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::CustomerGateway": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EC2::VPNGateway": {
          "Via": "AWS::EC2::VPNConnection"
        },
        "AWS::EC2::EIP": {
          "PropertyName": "IpAddress"
        }
      }
    }
  },
  "AWS::IoTSiteWise::Asset": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFormation::ResourceDefaultVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ECR::Repository": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::GatewayResponse": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGatewayV2::RouteResponse": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::LoggerDefinitionVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KMS::Alias": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Redshift::ClusterSubnetGroup": {
    "EntityType": "Container",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::Subnet": {
          "PropertyName": "SubnetIds",
          "Arity": "Many"
        }
      }
    }
  },
  "AWS::Pinpoint::GCMChannel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT::Authorizer": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IAM::VirtualMFADevice": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::DevEndpoint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CodeBuild::ReportGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::OpsWorks::UserProfile": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::IAM::User": {
          "PropertyName": "IamUserArn"
        }
      }
    }
  },
  "AWS::FraudDetector::Detector": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Neptune::DBSubnetGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppStream::User": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::PinpointEmail::DedicatedIpPool": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KinesisAnalyticsV2::Application": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53RecoveryReadiness::ReadinessCheck": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaTailor::PlaybackConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::FunctionDefinitionVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Logs::Destination": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::IAM::Role": {
          "PropertyName": "RoleArn"
        },
        "AWS::Kinesis::Stream": {
          "PropertyName": "TargetArn"
        }
      }
    }
  },
  "AWS::Redshift::ClusterSecurityGroup": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EC2::SecurityGroup": {
          "Via": "AWS::Redshift::ClusterSecurityGroupIngress"
        }
      }
    }
  },
  "AWS::Lambda::Url": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAF::XssMatchSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ResilienceHub::App": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Transfer::Workflow": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaPackage::Channel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53RecoveryControl::SafetyRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::HealthLake::FHIRDatastore": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Neptune::DBInstance": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::SchemaVersionMetadata": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Kinesis::StreamConsumer": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NetworkFirewall::FirewallPolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GuardDuty::Master": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::S3::BucketPolicy": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::S3::Bucket": {
          "PropertyName": "Bucket"
        }
      }
    }
  },
  "AWS::CloudFormation::CustomResource": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::ClientVpnRoute": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::IPAMScope": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalog::ServiceAction": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SSM::MaintenanceWindowTask": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::MLTransform": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Kendra::DataSource": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Panorama::Package": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::UsagePlanKey": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EMR::SecurityConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CodeGuruReviewer::RepositoryAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Cognito::UserPoolUserToGroupAttachment": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::Cognito::UserPoolGroup": {
          "PropertyName": "GroupName"
        },
        "AWS::Cognito::UserPoolUser": {
          "PropertyName": "Username"
        }
      }
    }
  },
  "AWS::Pinpoint::APNSChannel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTSiteWise::Dashboard": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RoboMaker::Fleet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElasticBeanstalk::ConfigurationTemplate": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::ElasticBeanstalk::Application": {
          "PropertyName": "ApplicationName"
        }
      },
      "IsAssociatedWith": {
        "AWS::ElasticBeanstalk::Environment": {
          "PropertyName": "EnvironmentId"
        }
      }
    }
  },
  "AWS::PinpointEmail::Identity": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WorkSpaces::ConnectionAlias": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Events::Rule": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::Kinesis::Stream": {
          "PropertyName": "Targets",
          "Arity": "Many",
          "EmbeddedPropertyName": "Arn"
        },
        "AWS::Lambda::Function": {
          "PropertyName": "Targets",
          "Arity": "Many",
          "EmbeddedPropertyName": "Arn"
        }
      }
    }
  },
  "AWS::IoTCoreDeviceAdvisor::SuiteDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SSMContacts::ContactChannel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ImageBuilder::Component": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CodePipeline::CustomActionType": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppMesh::VirtualNode": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppMesh::VirtualRouter": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DataSync::Agent": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::ConnectorDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::PlacementGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::RequestValidator": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFRegional::SizeConstraintSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Connect::PhoneNumber": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RDS::DBSecurityGroupIngress": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::RDS::DBSecurityGroup": {
          "PropertyName": "DBSecurityGroupName",
          "Endpoint": "Source"
        },
        "AWS::EC2::SecurityGroup": {
          "PropertyName": "EC2SecurityGroupName",
          "Endpoint": "Target"
        }
      }
    }
  },
  "AWS::Timestream::Database": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTThingsGraph::FlowTemplate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CodePipeline::Webhook": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Logs::LogGroup": {
    "EntityType": "Container",
    "Relationships": {}
  },
  "AWS::SSMIncidents::ResponsePlan": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DataSync::LocationEFS": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AutoScalingPlans::ScalingPlan": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53RecoveryReadiness::RecoveryGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFRegional::XssMatchSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::InternetGateway": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EC2::VPC": {
          "Via": "AWS::EC2::VPCGatewayAttachment"
        }
      }
    }
  },
  "AWS::IAM::Role": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::IAM::ManagedPolicy": {
          "PropertyName": "ManagedPolicyArns",
          "Arity": "Many"
        },
        "AWS::IAM::Policy": {
          "PropertyName": "Policies",
          "Arity": "Many",
          "EmbeddedPropertyName": "PolicyName"
        }
      }
    }
  },
  "AWS::Macie::FindingsFilter": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::InAppTemplate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::LaunchTemplate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Events::Archive": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT::Dimension": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::OpsWorks::Volume": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::OpsWorks::Stack": {
          "PropertyName": "StackId"
        }
      },
      "IsAssociatedWith": {
        "AWS::EC2::Volume": {
          "PropertyName": "Ec2VolumeId"
        }
      }
    }
  },
  "AWS::ACMPCA::Certificate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::AppImageConfig": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalog::LaunchTemplateConstraint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EMR::Cluster": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::IAM::Role": [
          {
            "PropertyName": "AutoScalingRole"
          },
          {
            "PropertyName": "ServiceRole"
          }
        ]
      }
    }
  },
  "AWS::SageMaker::Pipeline": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SSO::Assignment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GameLift::Alias": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::GameLift::Fleet": {
          "PropertyName": "FleetId"
        }
      }
    }
  },
  "AWS::EC2::VPNConnectionRoute": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EC2::VPNConnection": {
          "PropertyName": "VpnConnectionId"
        }
      }
    }
  },
  "AWS::APS::Workspace": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAF::Rule": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::WAF::SqlInjectionMatchSet": {
          "PropertyName": "Predicates",
          "Arity": "Many",
          "EmbeddedPropertyName": "DataId"
        },
        "AWS::WAF::SizeConstraintSet": {
          "PropertyName": "Predicates",
          "Arity": "Many",
          "EmbeddedPropertyName": "DataId"
        },
        "AWS::WAF::IPSet": {
          "PropertyName": "Predicates",
          "Arity": "Many",
          "EmbeddedPropertyName": "DataId"
        },
        "AWS::WAF::XssMatchSet": {
          "PropertyName": "Predicates",
          "Arity": "Many",
          "EmbeddedPropertyName": "DataId"
        },
        "AWS::WAF::ByteMatchSet": {
          "PropertyName": "Predicates",
          "Arity": "Many",
          "EmbeddedPropertyName": "DataId"
        }
      }
    }
  },
  "AWS::DirectoryService::MicrosoftAD": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGatewayV2::DomainName": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::FunctionDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::NetworkInterfacePermission": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::EC2::NetworkInterface": {
          "PropertyName": "NetworkInterfaceId"
        }
      }
    }
  },
  "AWS::Config::DeliveryChannel": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::SNS::Topic": {
          "PropertyName": "SnsTopicARN"
        },
        "AWS::S3::Bucket": {
          "PropertyName": "S3BucketName"
        }
      }
    }
  },
  "AWS::GameLift::Build": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Personalize::Solution": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Config::OrganizationConfigRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ECR::ReplicationConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::LicenseManager::License": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGatewayV2::Integration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Location::RouteCalculator": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lex::BotAlias": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTSiteWise::Portal": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Kendra::Index": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IAM::SAMLProvider": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Inspector::ResourceGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NetworkFirewall::Firewall": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EMRContainers::VirtualCluster": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::FinSpace::Environment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RUM::AppMonitor": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DocDB::DBSubnetGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ImageBuilder::ImagePipeline": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53RecoveryReadiness::Cell": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::TransitGatewayMulticastGroupMember": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RDS::DBCluster": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::RDS::DBSubnetGroup": {
          "PropertyName": "DBSubnetGroupName"
        }
      },
      "Uses": {
        "AWS::IAM::Role": {
          "PropertyName": "AssociatedRoles",
          "Arity": "Many",
          "EmbeddedPropertyName": "RoleArn"
        }
      },
      "IsAssociatedWith": {
        "AWS::EC2::AvailabilityZone": {
          "PropertyName": "AvailabilityZones",
          "Arity": "Many"
        },
        "AWS::RDS::DBClusterParameterGroup": {
          "PropertyName": "DBClusterParameterGroupName"
        },
        "AWS::EC2::SecurityGroup": {
          "PropertyName": "VpcSecurityGroupIds",
          "Arity": "Many"
        },
        "AWS::KMS::Key": {
          "PropertyName": "KmsKeyId"
        }
      }
    }
  },
  "AWS::EC2::ClientVpnEndpoint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ECS::Service": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53RecoveryControl::Cluster": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::OpsWorksCM::Server": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppSync::DomainNameApiAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Batch::JobQueue": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT::Thing": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::IoT::Certificate": {
          "Via": "AWS::IoT::ThingPrincipalAttachment"
        }
      }
    }
  },
  "AWS::Logs::ResourcePolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DMS::Certificate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::ApiKey": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Timestream::Table": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::LocalGatewayRouteTableVPCAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTWireless::DeviceProfile": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::Resource": {
    "EntityType": "Container",
    "Relationships": {}
  },
  "AWS::Glue::Connection": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFormation::TypeActivation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KinesisVideo::Stream": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CustomerProfiles::ObjectType": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::S3Outposts::Endpoint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::FraudDetector::Label": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFv2::WebACL": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElastiCache::SubnetGroup": {
    "EntityType": "Container",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::Subnet": {
          "PropertyName": "SubnetIds",
          "Arity": "Many"
        }
      }
    }
  },
  "AWS::IoTTwinMaker::Workspace": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Detective::Graph": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::NetworkInterface": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EC2::Instance": {
          "Via": "AWS::EC2::NetworkInterfaceAttachment"
        }
      }
    }
  },
  "AWS::ApiGatewayV2::Deployment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppConfig::Environment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::FSx::FileSystem": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTSiteWise::AccessPolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DataPipeline::Pipeline": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::TransitGatewayMulticastGroupSource": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NetworkManager::LinkAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::FSx::Volume": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::Campaign": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::ClientVpnAuthorizationRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MemoryDB::ACL": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::APS::RuleGroupsNamespace": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Personalize::Schema": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GameLift::Script": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::Account": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::LoggerDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalog::CloudFormationProvisionedProduct": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFormation::PublicTypeVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaLive::InputSecurityGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::NatGateway": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::Subnet": {
          "PropertyName": "SubnetId"
        }
      },
      "Uses": {
        "AWS::EC2::EIP": {
          "PropertyName": "AllocationId"
        }
      }
    }
  },
  "AWS::CodeArtifact::Domain": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT::FleetMetric": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElastiCache::ReplicationGroup": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::ElastiCache::SubnetGroup": {
          "PropertyName": "CacheSubnetGroupName"
        }
      },
      "IsAssociatedWith": {
        "AWS::SNS::Topic": {
          "PropertyName": "NotificationTopicArn"
        },
        "AWS::EC2::SecurityGroup": {
          "PropertyName": "SecurityGroupIds",
          "Arity": "Many"
        },
        "AWS::ElastiCache::ParameterGroup": {
          "PropertyName": "CacheParameterGroupName"
        }
      }
    }
  },
  "AWS::Cognito::UserPoolUser": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::Cognito::UserPool": {
          "PropertyName": "UserPoolId"
        }
      }
    }
  },
  "AWS::ApiGatewayV2::Model": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppSync::FunctionConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFormation::HookVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EKS::FargateProfile": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::LookoutMetrics::AnomalyDetector": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFormation::ResourceVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Personalize::DatasetGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lightsail::Bucket": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Wisdom::KnowledgeBase": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::TrafficMirrorFilterRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppConfig::DeploymentStrategy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lambda::EventInvokeConfig": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::PrefixList": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CodeGuruProfiler::ProfilingGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Athena::DataCatalog": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NetworkFirewall::LoggingConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElastiCache::ParameterGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IVS::Channel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SQS::QueuePolicy": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::SQS::Queue": {
          "PropertyName": "Queues",
          "Arity": "Many"
        }
      }
    }
  },
  "AWS::WAF::SqlInjectionMatchSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CodeCommit::Repository": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SecretsManager::Secret": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::APNSVoipSandboxChannel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalog::Portfolio": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MSK::BatchScramSecret": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Cognito::UserPoolUICustomizationAttachment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::CoreDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EMR::StudioSessionMapping": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaStore::Container": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Logs::LogStream": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::Logs::LogGroup": {
          "PropertyName": "LogGroupName"
        }
      }
    }
  },
  "AWS::Athena::WorkGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RoboMaker::RobotApplicationVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RDS::EventSubscription": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::RDS::DBInstance": {
          "PropertyName": "SourceIds",
          "Arity": "Many"
        }
      }
    }
  },
  "AWS::ElasticBeanstalk::Environment": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::ElasticBeanstalk::Application": {
          "PropertyName": "ApplicationName"
        }
      },
      "IsAssociatedWith": {
        "AWS::ElasticBeanstalk::ConfigurationTemplate": {
          "PropertyName": "TemplateName"
        }
      }
    }
  },
  "AWS::IoTWireless::MulticastGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lambda::Function": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::LookoutVision::Project": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53RecoveryControl::RoutingControl": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EventSchemas::Schema": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTSiteWise::Project": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Config::ConfigRule": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::Lambda::Function": {
          "PropertyName": "SourceIdentifier"
        }
      }
    }
  },
  "AWS::Glue::Partition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAF::WebACL": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::WAF::Rule": {
          "PropertyName": "Rules",
          "Arity": "Many",
          "EmbeddedPropertyName": "RuleId"
        }
      }
    }
  },
  "AWS::AppSync::ApiCache": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Neptune::DBCluster": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GameLift::GameServerGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElastiCache::GlobalReplicationGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SSM::MaintenanceWindow": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFormation::Macro": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::Logs::LogGroup": {
          "PropertyName": "LogGroupName"
        }
      },
      "Uses": {
        "AWS::IAM::Role": {
          "PropertyName": "LogRoleARN"
        }
      }
    }
  },
  "AWS::EC2::TransitGatewayMulticastDomain": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53::RecordSetGroup": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::Route53::HostedZone": {
          "PropertyName": "HostedZoneId"
        }
      }
    }
  },
  "AWS::CloudFront::Function": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KinesisFirehose::DeliveryStream": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IVS::PlaybackKeyPair": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::DeviceDefinitionVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApplicationAutoScaling::ScalableTarget": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::IAM::Role": {
          "PropertyName": "RoleARN"
        }
      }
    }
  },
  "AWS::Amplify::Domain": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ECS::ClusterCapacityProviderAssociations": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Connect::ContactFlow": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ECR::RegistryPolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::Method": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::ApiGateway::Resource": {
          "PropertyName": "ResourceId"
        },
        "AWS::ApiGateway::RestApi": {
          "PropertyName": "RestApiId"
        }
      },
      "IsAssociatedWith": {
        "AWS::ApiGateway::Authorizer": {
          "PropertyName": "AuthorizerId"
        },
        "AWS::ApiGateway::Model": {
          "PropertyName": "RequestModels",
          "Arity": "Many"
        }
      }
    }
  },
  "AWS::DMS::Endpoint": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::DMS::Certificate": {
          "PropertyName": "CertificateArn"
        },
        "AWS::KMS::Key": {
          "PropertyName": "KmsKeyId"
        }
      }
    }
  },
  "AWS::NetworkManager::ConnectPeer": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalog::LaunchNotificationConstraint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SES::ReceiptRuleSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::APNSVoipChannel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppStream::StackUserAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::EmailChannel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::NetworkInsightsAnalysis": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ECS::TaskDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CE::AnomalyMonitor": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGatewayV2::IntegrationResponse": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Forecast::DatasetGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IAM::ServerCertificate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::NetworkInsightsAccessScope": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElastiCache::CacheCluster": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::ElastiCache::SubnetGroup": {
          "PropertyName": "CacheSubnetGroupName"
        }
      },
      "IsAssociatedWith": {
        "AWS::SNS::Topic": {
          "PropertyName": "NotificationTopicArn"
        },
        "AWS::ElastiCache::SecurityGroup": {
          "PropertyName": "CacheSecurityGroupNames",
          "Arity": "Many"
        },
        "AWS::EC2::AvailabilityZone": [
          {
            "PropertyName": "PreferredAvailabilityZone"
          },
          {
            "PropertyName": "PreferredAvailabilityZones",
            "Arity": "Many"
          }
        ],
        "AWS::EC2::SecurityGroup": {
          "PropertyName": "VpcSecurityGroupIds",
          "Arity": "Many"
        },
        "AWS::ElastiCache::ParameterGroup": {
          "PropertyName": "CacheParameterGroupName"
        }
      }
    }
  },
  "AWS::IoT::ThingPrincipalAttachment": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::IoT::Certificate": {
          "PropertyName": "Principal"
        },
        "AWS::IoT::Thing": {
          "PropertyName": "ThingName"
        }
      }
    }
  },
  "AWS::CloudFormation::ModuleDefaultVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MSK::Cluster": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElasticLoadBalancingV2::TargetGroup": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::VPC": {
          "PropertyName": "VpcId"
        }
      }
    }
  },
  "AWS::ImageBuilder::ContainerRecipe": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RoboMaker::Robot": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::Trigger": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SSM::Parameter": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Inspector::AssessmentTemplate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppMesh::Mesh": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SSM::ResourceDataSync": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KinesisAnalytics::Application": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DynamoDB::Table": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::DynamoDB::Table": {
          "PropertyName": "TableName"
        }
      }
    }
  },
  "AWS::EC2::EC2Fleet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lambda::Permission": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::Lambda::Function": {
          "PropertyName": "FunctionName"
        }
      }
    }
  },
  "AWS::CertificateManager::Account": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ImageBuilder::ImageRecipe": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CodeStar::GitHubRepository": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Chatbot::SlackChannelConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppStream::AppBlock": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IVS::RecordingConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AutoScaling::AutoScalingGroup": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::Subnet": {
          "PropertyName": "VPCZoneIdentifier",
          "Arity": "Many"
        }
      },
      "Uses": {
        "AWS::IAM::Role": {
          "PropertyName": "LifecycleHookSpecificationList",
          "Arity": "Many",
          "EmbeddedPropertyName": "RoleARN"
        },
        "AWS::SQS::Queue": {
          "PropertyName": "LifecycleHookSpecificationList",
          "Arity": "Many",
          "EmbeddedPropertyName": "NotificationTargetARN"
        }
      },
      "IsAssociatedWith": {
        "AWS::SNS::Topic": [
          {
            "PropertyName": "LifecycleHookSpecificationList",
            "Arity": "Many",
            "EmbeddedPropertyName": "NotificationTargetARN"
          },
          {
            "PropertyName": "NotificationConfigurations",
            "Arity": "Many",
            "EmbeddedPropertyName": "TopicARN"
          }
        ],
        "AWS::EC2::Instance": {
          "PropertyName": "InstanceId"
        },
        "AWS::AutoScaling::LaunchConfiguration": {
          "PropertyName": "LaunchConfigurationName"
        },
        "AWS::ElasticLoadBalancingV2::TargetGroup": {
          "PropertyName": "TargetGroupARNs",
          "Arity": "Many"
        },
        "AWS::ElasticLoadBalancing::LoadBalancer": {
          "PropertyName": "LoadBalancerNames",
          "Arity": "Many"
        }
      }
    }
  },
  "AWS::FraudDetector::Variable": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::QuickSight::Theme": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::VPCDHCPOptionsAssociation": {
    "EntityType": "Link",
    "Relationships": {}
  },
  "AWS::Cassandra::Keyspace": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SSO::InstanceAccessControlAttributeConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DMS::ReplicationTask": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::DMS::ReplicationInstance": {
          "PropertyName": "ReplicationInstanceArn"
        }
      }
    }
  },
  "AWS::EC2::EnclaveCertificateIamRoleAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceDiscovery::PublicDnsNamespace": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTTwinMaker::Scene": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::TransitGatewayConnect": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::TrafficMirrorTarget": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Config::StoredQuery": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaPackage::PackagingConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DMS::ReplicationInstance": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EC2::SecurityGroup": {
          "PropertyName": "VpcSecurityGroupIds",
          "Arity": "Many"
        },
        "AWS::KMS::Key": {
          "PropertyName": "KmsKeyId"
        }
      }
    }
  },
  "AWS::Glue::SecurityConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AutoScaling::ScheduledAction": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::AutoScaling::AutoScalingGroup": {
          "PropertyName": "AutoScalingGroupName"
        }
      }
    }
  },
  "AWS::EC2::RouteTable": {
    "EntityType": "Container",
    "Relationships": {}
  },
  "AWS::BillingConductor::BillingGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GlobalAccelerator::Accelerator": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppStream::ApplicationFleetAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AccessAnalyzer::Analyzer": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lightsail::Instance": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFRegional::RateBasedRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MemoryDB::User": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::SMSChannel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EMR::InstanceFleetConfig": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EMR::Cluster": {
          "PropertyName": "ClusterId"
        }
      }
    }
  },
  "AWS::WorkSpaces::Workspace": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::DirectoryService::SimpleAD": {
          "PropertyName": "DirectoryId"
        },
        "AWS::DirectoryService::MicrosoftAD": {
          "PropertyName": "DirectoryId"
        },
        "AWS::KMS::Key": {
          "PropertyName": "VolumeEncryptionKey"
        }
      }
    }
  },
  "AWS::ApiGatewayV2::Route": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaPackage::Asset": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::Workteam": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AutoScaling::LaunchConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::TransitGateway": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SQS::Queue": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::LookoutEquipment::InferenceScheduler": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::CapacityReservationFleet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudWatch::Dashboard": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IAM::Policy": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::IAM::User": {
          "PropertyName": "Users",
          "Arity": "Many"
        },
        "AWS::IAM::Group": {
          "PropertyName": "Groups",
          "Arity": "Many"
        },
        "AWS::IAM::Role": {
          "PropertyName": "Roles",
          "Arity": "Many"
        }
      }
    }
  },
  "AWS::ServiceCatalog::ServiceActionAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::StepFunctions::Activity": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFront::KeyGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CodeStarConnections::Connection": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTTwinMaker::ComponentType": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Connect::UserHierarchyGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::SchemaVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::Volume": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EC2::AvailabilityZone": {
          "PropertyName": "AvailabilityZone"
        },
        "AWS::EC2::Instance": {
          "Via": "AWS::EC2::VolumeAttachment"
        },
        "AWS::KMS::Key": {
          "PropertyName": "KmsKeyId"
        }
      }
    }
  },
  "AWS::GroundStation::Config": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IAM::ServiceLinkedRole": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GuardDuty::Filter": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Budgets::BudgetsAction": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::S3::AccessPoint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SNS::Subscription": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::Lambda::Function": {
          "PropertyName": "Endpoint"
        },
        "AWS::KinesisFirehose::DeliveryStream": {
          "PropertyName": "Endpoint"
        },
        "AWS::SQS::Queue": {
          "PropertyName": "Endpoint"
        }
      },
      "IsAssociatedWith": {
        "AWS::SNS::Topic": {
          "PropertyName": "TopicArn"
        }
      }
    }
  },
  "AWS::EFS::MountTarget": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::DataCatalogEncryptionSettings": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::NotebookInstanceLifecycleConfig": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaConnect::FlowSource": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Cognito::UserPoolGroup": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::Cognito::UserPool": {
          "PropertyName": "UserPoolId"
        }
      }
    }
  },
  "AWS::ApiGateway::Deployment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::LakeFormation::Permissions": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KMS::Key": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CustomerProfiles::Domain": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApplicationInsights::Application": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NimbleStudio::StreamingImage": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::OpsWorks::App": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::OpsWorks::Stack": {
          "PropertyName": "StackId"
        }
      }
    }
  },
  "AWS::Lambda::EventSourceMapping": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppConfig::Deployment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGatewayV2::ApiGatewayManagedOverrides": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::Authorizer": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::LocalGatewayRoute": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::QLDB::Stream": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFRegional::GeoMatchSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Batch::JobDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Evidently::Launch": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::TransitGatewayVpcAttachment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DataBrew::Dataset": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::VPCEndpointConnectionNotification": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GameLift::Fleet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElastiCache::User": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppMesh::GatewayRoute": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::UserProfile": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NetworkManager::SiteToSiteVpnAttachment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::IPAMAllocation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElasticLoadBalancing::LoadBalancer": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::Subnet": {
          "PropertyName": "Subnets",
          "Arity": "Many"
        }
      },
      "IsAssociatedWith": {
        "AWS::EC2::Instance": {
          "PropertyName": "Instances",
          "Arity": "Many"
        },
        "AWS::EC2::SecurityGroup": {
          "PropertyName": "SecurityGroups",
          "Arity": "Many"
        },
        "AWS::OpsWorks::Layer": {
          "Via": "AWS::OpsWorks::ElasticLoadBalancerAttachment"
        }
      }
    }
  },
  "AWS::AppStream::ApplicationEntitlementAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT::JobTemplate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Evidently::Experiment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CodeArtifact::Repository": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGatewayV2::Stage": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::Model": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Forecast::Dataset": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DataSync::LocationFSxLustre": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::ModelExplainabilityJobDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaPackage::PackagingGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SES::ReceiptFilter": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GroundStation::DataflowEndpointGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Config::RemediationConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::Workflow": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::FlowLog": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::ResourceDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lex::ResourcePolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IAM::AccessKey": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GameLift::MatchmakingConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AmazonMQ::ConfigurationAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppIntegrations::DataIntegration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ECS::CapacityProvider": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppStream::Application": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CodeBuild::Project": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::IAM::Role": {
          "PropertyName": "ServiceRole"
        }
      }
    }
  },
  "AWS::BillingConductor::PricingRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Budgets::Budget": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::S3ObjectLambda::AccessPoint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NetworkFirewall::RuleGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SNS::TopicPolicy": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::SNS::Topic": {
          "PropertyName": "Topics",
          "Arity": "Many"
        }
      }
    }
  },
  "AWS::ElasticLoadBalancingV2::Listener": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::EndpointConfig": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Events::Connection": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::DeviceDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MemoryDB::SubnetGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DataSync::LocationFSxWindows": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53RecoveryControl::ControlPanel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaConnect::FlowVpcInterface": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Config::ConfigurationAggregator": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DataSync::LocationS3": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Location::Map": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudTrail::Trail": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Rekognition::Project": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Neptune::DBClusterParameterGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DataBrew::Ruleset": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DocDB::DBInstance": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::OpsWorks::ElasticLoadBalancerAttachment": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::ElasticLoadBalancing::LoadBalancer": {
          "PropertyName": "ElasticLoadBalancerName"
        },
        "AWS::OpsWorks::Layer": {
          "PropertyName": "LayerId"
        }
      }
    }
  },
  "AWS::ServiceCatalogAppRegistry::Application": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT::RoleAlias": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Backup::ReportPlan": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AmplifyUIBuilder::Component": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RoboMaker::SimulationApplication": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Batch::SchedulingPolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EventSchemas::Discoverer": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFRegional::WebACL": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFront::CloudFrontOriginAccessIdentity": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::Endpoint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppSync::DomainName": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::Subnet": {
    "EntityType": "Container",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EC2::NetworkAcl": {
          "Via": "AWS::EC2::SubnetNetworkAclAssociation"
        }
      }
    }
  },
  "AWS::CodeDeploy::Application": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceDiscovery::Instance": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::ServiceDiscovery::Service": {
          "PropertyName": "ServiceId"
        }
      }
    }
  },
  "AWS::AppConfig::HostedConfigurationVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::CarrierGateway": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::Instance": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::Host": {
          "PropertyName": "HostId"
        },
        "AWS::EC2::Subnet": [
          {
            "PropertyName": "NetworkInterfaces",
            "Arity": "Many",
            "EmbeddedPropertyName": "SubnetId"
          },
          {
            "PropertyName": "SubnetId"
          }
        ]
      },
      "Uses": {
        "AWS::IAM::InstanceProfile": {
          "PropertyName": "IamInstanceProfile"
        },
        "AWS::EC2::NetworkInterface": {
          "PropertyName": "NetworkInterfaces",
          "Arity": "Many",
          "EmbeddedPropertyName": "NetworkInterfaceId"
        }
      },
      "IsAssociatedWith": {
        "AWS::EC2::PlacementGroup": {
          "PropertyName": "PlacementGroupName"
        },
        "AWS::EC2::Volume": [
          {
            "PropertyName": "Volumes",
            "Arity": "Many",
            "EmbeddedPropertyName": "VolumeId"
          },
          {
            "Via": "AWS::EC2::VolumeAttachment"
          }
        ],
        "AWS::EC2::NetworkInterface": {
          "Via": "AWS::EC2::NetworkInterfaceAttachment"
        },
        "AWS::EC2::AvailabilityZone": {
          "PropertyName": "AvailabilityZone"
        },
        "AWS::EC2::SecurityGroup": [
          {
            "PropertyName": "SecurityGroupIds",
            "Arity": "Many"
          },
          {
            "PropertyName": "SecurityGroups",
            "Arity": "Many"
          }
        ],
        "AWS::EC2::Image": {
          "PropertyName": "ImageId"
        }
      }
    }
  },
  "AWS::Events::EventBusPolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFormation::Stack": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAF::ByteMatchSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Config::AggregationAuthorization": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::FIS::ExperimentTemplate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppMesh::VirtualGateway": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTTwinMaker::Entity": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SecretsManager::ResourcePolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DevOpsGuru::NotificationChannel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AuditManager::Assessment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EMR::Step": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EMR::Cluster": {
          "PropertyName": "VpcId"
        }
      },
      "IsAssociatedWith": {
        "AWS::EMR::Cluster": {
          "PropertyName": "JobFlowId"
        }
      }
    }
  },
  "AWS::Config::ConfigurationRecorder": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::IAM::Role": {
          "PropertyName": "RoleARN"
        }
      }
    }
  },
  "AWS::SageMaker::ModelPackage": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppConfig::ConfigurationProfile": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::IPAMPool": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SSM::MaintenanceWindowTarget": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KinesisVideo::SignalingChannel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Cognito::UserPoolResourceServer": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::OpsWorks::Instance": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::OpsWorks::Stack": {
          "PropertyName": "StackId"
        },
        "AWS::EC2::Subnet": {
          "PropertyName": "SubnetId"
        }
      },
      "IsAssociatedWith": {
        "AWS::OpsWorks::Volume": {
          "PropertyName": "Volumes",
          "Arity": "Many"
        },
        "AWS::EC2::EIP": {
          "PropertyName": "ElasticIps",
          "Arity": "Many"
        },
        "AWS::OpsWorks::Layer": {
          "PropertyName": "LayerIds",
          "Arity": "Many"
        }
      }
    }
  },
  "AWS::Redshift::EventSubscription": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ManagedBlockchain::Node": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Personalize::Dataset": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::Job": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lambda::Version": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::Lambda::Function": {
          "PropertyName": "FunctionName"
        }
      }
    }
  },
  "AWS::ApiGateway::BasePathMapping": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DataSync::Task": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EMR::Studio": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DataSync::LocationObjectStorage": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DataBrew::Project": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IVS::StreamKey": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DLM::LifecyclePolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lightsail::Alarm": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFRegional::IPSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RDS::DBInstance": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::RDS::DBSubnetGroup": {
          "PropertyName": "DBSubnetGroupName"
        }
      },
      "Uses": {
        "AWS::IAM::Role": {
          "PropertyName": "AssociatedRoles",
          "Arity": "Many",
          "EmbeddedPropertyName": "RoleArn"
        }
      },
      "IsAssociatedWith": {
        "AWS::RDS::DBInstance": {
          "PropertyName": "SourceDBInstanceIdentifier"
        },
        "AWS::RDS::DBCluster": [
          {
            "PropertyName": "DBClusterIdentifier"
          },
          {
            "PropertyName": "DBSnapshotIdentifier"
          }
        ],
        "AWS::RDS::DBSecurityGroup": {
          "PropertyName": "DBSecurityGroups",
          "Arity": "Many"
        },
        "AWS::EC2::AvailabilityZone": {
          "PropertyName": "AvailabilityZone"
        },
        "AWS::RDS::OptionGroup": {
          "PropertyName": "OptionGroupName"
        },
        "AWS::IAM::Role": {
          "PropertyName": "DomainIAMRoleName"
        },
        "AWS::DirectoryService::MicrosoftAD": {
          "PropertyName": "Domain"
        },
        "AWS::EC2::SecurityGroup": {
          "PropertyName": "VPCSecurityGroups",
          "Arity": "Many"
        },
        "AWS::RDS::DBParameterGroup": {
          "PropertyName": "DBParameterGroupName"
        },
        "AWS::KMS::Key": [
          {
            "PropertyName": "KmsKeyId"
          },
          {
            "PropertyName": "PerformanceInsightsKMSKeyId"
          }
        ]
      }
    }
  },
  "AWS::ServiceDiscovery::HttpNamespace": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::Stage": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::CodeRepository": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SDB::Domain": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Cognito::UserPoolClient": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::Cognito::UserPool": {
          "PropertyName": "UserPoolId"
        }
      }
    }
  },
  "AWS::FraudDetector::EventType": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTEvents::Input": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::NetworkInsightsPath": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::Database": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::ClientCertificate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RefactorSpaces::Route": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IAM::OIDCProvider": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Evidently::Project": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Wisdom::AssistantAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lambda::CodeSigningConfig": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RDS::DBSecurityGroup": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::VPC": [
          {
            "PropertyName": "DBSecurityGroupIngress",
            "Arity": "Many",
            "EmbeddedPropertyName": "EC2SecurityGroupId"
          },
          {
            "PropertyName": "EC2VpcId"
          }
        ]
      },
      "IsAssociatedWith": {
        "AWS::EC2::SecurityGroup": [
          {
            "PropertyName": "DBSecurityGroupIngress",
            "Arity": "Many",
            "EmbeddedPropertyName": "EC2SecurityGroupName"
          },
          {
            "PropertyName": "DBSecurityGroupIngress",
            "Arity": "Many",
            "EmbeddedPropertyName": "EC2SecurityGroupId"
          },
          {
            "Via": "AWS::RDS::DBSecurityGroupIngress"
          }
        ]
      }
    }
  },
  "AWS::QuickSight::Analysis": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::EIPAssociation": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::EC2::EIP": [
          {
            "PropertyName": "AllocationId"
          },
          {
            "PropertyName": "EIP"
          }
        ],
        "AWS::EC2::NetworkInterface": {
          "PropertyName": "NetworkInterfaceId"
        },
        "AWS::EC2::Instance": {
          "PropertyName": "InstanceId"
        }
      }
    }
  },
  "AWS::Lightsail::LoadBalancerTlsCertificate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::VPNGateway": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EC2::VPC": {
          "Via": "AWS::EC2::VPCGatewayAttachment"
        },
        "AWS::EC2::CustomerGateway": {
          "Via": "AWS::EC2::VPNConnection"
        },
        "AWS::EC2::RouteTable": {
          "Via": "AWS::EC2::VPNGatewayRoutePropagation"
        }
      }
    }
  },
  "AWS::FSx::StorageVirtualMachine": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTWireless::WirelessGateway": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Wisdom::Assistant": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GuardDuty::Detector": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceDiscovery::PrivateDnsNamespace": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EC2::Vpc": {
          "PropertyName": "Vpc"
        }
      }
    }
  },
  "AWS::S3Outposts::AccessPoint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaPackage::OriginEndpoint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::VPNConnection": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::EC2::VPNGateway": {
          "PropertyName": "VpnGatewayId"
        },
        "AWS::EC2::CustomerGateway": {
          "PropertyName": "CustomerGatewayId"
        }
      }
    }
  },
  "AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GlobalAccelerator::Listener": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppStream::Fleet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Logs::SubscriptionFilter": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::Logs::LogGroup": {
          "PropertyName": "LogGroupName"
        }
      },
      "Uses": {
        "AWS::IAM::Role": {
          "PropertyName": "RoleArn"
        },
        "AWS::Kinesis::Stream": {
          "PropertyName": "DestinationArn"
        },
        "AWS::Lambda::Function": {
          "PropertyName": "DestinationArn"
        },
        "AWS::KinesisFirehose::DeliveryStream": {
          "PropertyName": "DestinationArn"
        }
      }
    }
  },
  "AWS::FMS::NotificationChannel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalogAppRegistry::ResourceAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EventSchemas::RegistryPolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AmazonMQ::Configuration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::TransitGatewayRouteTable": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFront::RealtimeLogConfig": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Evidently::Feature": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53::HealthCheck": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaLive::Channel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::S3Outposts::Bucket": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NetworkManager::Device": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RDS::DBClusterParameterGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::VPCEndpointService": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MemoryDB::Cluster": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalog::StackSetConstraint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::Crawler": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaConnect::FlowOutput": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::DocumentationVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::NetworkInsightsAccessScopeAnalysis": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Transfer::Server": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53Resolver::ResolverConfig": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NimbleStudio::LaunchProfile": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::Classifier": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AmazonMQ::Broker": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTEvents::AlarmModel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lightsail::Disk": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalogAppRegistry::AttributeGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppSync::DataSource": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ECS::PrimaryTaskSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::Group": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Cognito::IdentityPoolRoleAttachment": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::Cognito::IdentityPool": {
          "PropertyName": "IdentityPoolId"
        }
      }
    }
  },
  "AWS::DataSync::LocationFSxOpenZFS": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lightsail::Container": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaLive::Input": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53::KeySigningKey": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53Resolver::ResolverDNSSECConfig": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppMesh::VirtualService": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::GatewayRouteTableAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Kendra::Faq": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppStream::ImageBuilder": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ImageBuilder::InfrastructureConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudWatch::MetricStream": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::NetworkAclEntry": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElasticLoadBalancingV2::ListenerCertificate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Neptune::DBParameterGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lightsail::StaticIp": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EKS::Addon": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppRunner::ObservabilityConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::SmsTemplate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalog::TagOptionAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::QuickSight::Template": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGatewayV2::VpcLink": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::Schema": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::QuickSight::DataSource": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::SpotFleet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::S3ObjectLambda::AccessPointPolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SSM::Document": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::Model": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::TrafficMirrorFilter": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Connect::User": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::QLDB::Ledger": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudWatch::Alarm": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Backup::BackupSelection": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::Segment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::APNSSandboxChannel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53Resolver::FirewallDomainList": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::ADMChannel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CertificateManager::Certificate": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::ApiGateway::DomainName": {
          "PropertyName": "DomainValidationOptions",
          "Arity": "Many",
          "EmbeddedPropertyName": "DomainName"
        }
      }
    }
  },
  "AWS::Greengrass::SubscriptionDefinitionVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::CoreDefinitionVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ECR::PublicRepository": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaConvert::Preset": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::LicenseManager::Grant": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CodeStarNotifications::NotificationRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTAnalytics::Dataset": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::XRay::SamplingRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT::ProvisioningTemplate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalog::PortfolioPrincipalAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ACMPCA::Permission": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NetworkManager::VpcAttachment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GameLift::MatchmakingRuleSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DataBrew::Job": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTWireless::FuotaTask": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::SecurityGroupIngress": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::EC2::SecurityGroup": [
          {
            "PropertyName": "SourceSecurityGroupId",
            "Endpoint": "Target"
          },
          {
            "PropertyName": "GroupId",
            "Endpoint": "Source"
          }
        ]
      }
    }
  },
  "AWS::PinpointEmail::ConfigurationSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "Alexa::ASK::Skill": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::ApplicationSettings": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IAM::UserToGroupAddition": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::IAM::User": {
          "PropertyName": "Users",
          "Arity": "Many"
        },
        "AWS::IAM::Group": {
          "PropertyName": "GroupName"
        }
      }
    }
  },
  "AWS::GroundStation::MissionProfile": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::OpsWorks::Layer": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::OpsWorks::Stack": {
          "PropertyName": "StackId"
        }
      },
      "Uses": {
        "AWS::IAM::InstanceProfile": {
          "PropertyName": "CustomInstanceProfileArn"
        }
      },
      "IsAssociatedWith": {
        "AWS::EC2::SecurityGroup": {
          "PropertyName": "CustomSecurityGroupIds",
          "Arity": "Many"
        },
        "AWS::ElasticLoadBalancing::LoadBalancer": {
          "Via": "AWS::OpsWorks::ElasticLoadBalancerAttachment"
        }
      }
    }
  },
  "AWS::IoTWireless::Destination": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::SubnetRouteTableAssociation": {
    "EntityType": "Link",
    "Relationships": {}
  },
  "AWS::Glue::Table": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElastiCache::SecurityGroup": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EC2::SecurityGroup": {
          "Via": "AWS::ElastiCache::SecurityGroupIngress"
        }
      }
    }
  },
  "AWS::IAM::InstanceProfile": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT::Policy": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::IoT::Certificate": {
          "Via": "AWS::IoT::PolicyPrincipalAttachment"
        }
      }
    }
  },
  "AWS::CodeDeploy::DeploymentGroup": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::IAM::Role": {
          "PropertyName": "ServiceRoleArn"
        }
      },
      "IsAssociatedWith": {
        "AWS::CodeDeploy::DeploymentConfig": {
          "PropertyName": "DeploymentConfigName"
        },
        "AWS::AutoScaling::AutoScalingGroup": {
          "PropertyName": "AutoScalingGroups",
          "Arity": "Many"
        },
        "AWS::CodeDeploy::Application": {
          "PropertyName": "ApplicationName"
        }
      }
    }
  },
  "AWS::MediaConnect::Flow": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Batch::ComputeEnvironment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Athena::PreparedStatement": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppFlow::Flow": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::Route": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::RouteTable": {
          "PropertyName": "RouteTableId"
        }
      },
      "Uses": {
        "AWS::EC2::EgressOnlyInternetGateway": {
          "PropertyName": "EgressOnlyInternetGatewayId"
        },
        "AWS::EC2::NetworkInterface": {
          "PropertyName": "NetworkInterfaceId"
        }
      },
      "IsAssociatedWith": {
        "AWS::EC2::VPNGateway": {
          "PropertyName": "GatewayId"
        },
        "AWS::EC2::VPCPeeringConnection": {
          "PropertyName": "VpcPeeringConnectionId"
        },
        "AWS::EC2::InternetGateway": {
          "PropertyName": "GatewayId"
        },
        "AWS::EC2::Instance": {
          "PropertyName": "InstanceId"
        },
        "AWS::EC2::NatGateway": {
          "PropertyName": "NatGatewayId"
        }
      }
    }
  },
  "AWS::NimbleStudio::StudioComponent": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppStream::DirectoryConfig": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GameLift::GameSessionQueue": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GlobalAccelerator::EndpointGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::DeviceFleet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SecurityHub::Hub": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT1Click::Device": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Macie::CustomDataIdentifier": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ECS::TaskSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFv2::RuleGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RefactorSpaces::Application": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFormation::Publisher": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lex::BotVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElasticBeanstalk::Application": {
    "EntityType": "Container",
    "Relationships": {}
  },
  "AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SES::ReceiptRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NimbleStudio::Studio": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppFlow::ConnectorProfile": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::TransitGatewayRouteTablePropagation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::App": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFRegional::ByteMatchSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::Domain": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DAX::SubnetGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::OpsWorks::Stack": {
    "EntityType": "Container",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::VPC": {
          "PropertyName": "VpcId"
        },
        "AWS::OpsWorks::Stack": {
          "PropertyName": "SourceStackId"
        }
      },
      "Uses": {
        "AWS::IAM::InstanceProfile": {
          "PropertyName": "DefaultInstanceProfileArn"
        },
        "AWS::ECS::Cluster": {
          "PropertyName": "EcsClusterArn"
        },
        "AWS::IAM::Role": {
          "PropertyName": "ServiceRoleArn"
        }
      }
    }
  },
  "AWS::Panorama::PackageVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53Resolver::ResolverRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::SubnetNetworkAclAssociation": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::EC2::NetworkAcl": {
          "PropertyName": "NetworkAclId"
        },
        "AWS::EC2::Subnet": {
          "PropertyName": "SubnetId"
        }
      }
    }
  },
  "AWS::CUR::ReportDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::Project": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::TrafficMirrorSession": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Amplify::Branch": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NetworkManager::CoreNetwork": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalog::LaunchRoleConstraint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::SubnetCidrBlock": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::Subnet": {
          "PropertyName": "SubnetId"
        }
      }
    }
  },
  "AWS::AutoScaling::LifecycleHook": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Redshift::ClusterSecurityGroupIngress": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::Redshift::ClusterSecurityGroup": {
          "PropertyName": "ClusterSecurityGroupName"
        },
        "AWS::EC2::SecurityGroup": {
          "PropertyName": "EC2SecurityGroupName"
        }
      }
    }
  },
  "AWS::RDS::OptionGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElastiCache::SecurityGroupIngress": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::ElastiCache::SecurityGroup": {
          "PropertyName": "CacheSecurityGroupName",
          "Endpoint": "Source"
        },
        "AWS::EC2::SecurityGroup": {
          "PropertyName": "EC2SecurityGroupName",
          "Endpoint": "Target"
        }
      }
    }
  },
  "AWS::AppStream::Entitlement": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFront::ResponseHeadersPolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT::ResourceSpecificLogging": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTSiteWise::Gateway": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Signer::SigningProfile": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFormation::WaitCondition": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::CloudFormation::WaitConditionHandle": {
          "PropertyName": "Handle"
        }
      }
    }
  },
  "AWS::EC2::KeyPair": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ResilienceHub::ResiliencyPolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::SecurityGroup": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::VPC": {
          "PropertyName": "VpcId"
        }
      },
      "IsAssociatedWith": {
        "AWS::Redshift::ClusterSecurityGroup": {
          "Via": "AWS::Redshift::ClusterSecurityGroupIngress"
        },
        "AWS::RDS::DBSecurityGroup": {
          "Via": "AWS::RDS::DBSecurityGroupIngress"
        },
        "AWS::EC2::SecurityGroup": [
          {
            "Via": "AWS::EC2::SecurityGroupEgress"
          },
          {
            "Via": "AWS::EC2::SecurityGroupIngress"
          }
        ]
      }
    }
  },
  "AWS::CloudFront::OriginRequestPolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFRegional::Rule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SSO::PermissionSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::InspectorV2::Filter": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::PushTemplate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ECR::PullThroughCacheRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::RestApi": {
    "EntityType": "Container",
    "Relationships": {}
  },
  "AWS::CloudFront::PublicKey": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Events::EventBus": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DataBrew::Schedule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::VPC": {
    "EntityType": "Container",
    "Relationships": {}
  },
  "AWS::Route53RecoveryReadiness::ResourceSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Config::OrganizationConformancePack": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KinesisAnalyticsV2::ApplicationOutput": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NetworkManager::GlobalNetwork": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NetworkManager::TransitGatewayRegistration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EFS::FileSystem": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApplicationAutoScaling::ScalingPolicy": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::ApplicationAutoScaling::ScalableTarget": {
          "PropertyName": "ScalingTargetId"
        }
      }
    }
  },
  "AWS::IoT::ScheduledAudit": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RDS::DBParameterGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppStream::StackFleetAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53Resolver::FirewallRuleGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ResourceGroups::Group": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTAnalytics::Pipeline": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::TransitGatewayRoute": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::FMS::Policy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Transfer::User": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::NetworkAcl": {
    "EntityType": "Container",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EC2::Subnet": {
          "Via": "AWS::EC2::SubnetNetworkAclAssociation"
        }
      }
    }
  },
  "AWS::ImageBuilder::DistributionConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RDS::DBProxy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::QuickSight::DataSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::VPNGatewayRoutePropagation": {
    "EntityType": "Link",
    "Relationships": {}
  },
  "AWS::EC2::ClientVpnTargetNetworkAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::VoiceID::Domain": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGatewayV2::Authorizer": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Panorama::ApplicationInstance": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFormation::WaitConditionHandle": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTWireless::PartnerAccount": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AutoScaling::WarmPool": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::Image": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Rekognition::StreamProcessor": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::FSx::Snapshot": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::S3Outposts::BucketPolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IAM::ManagedPolicy": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::IAM::User": {
          "PropertyName": "Users",
          "Arity": "Many"
        },
        "AWS::IAM::Group": {
          "PropertyName": "Groups",
          "Arity": "Many"
        },
        "AWS::IAM::Role": {
          "PropertyName": "Roles",
          "Arity": "Many"
        }
      }
    }
  },
  "AWS::CloudFormation::HookDefaultVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MSK::Configuration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT::PolicyPrincipalAttachment": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::IoT::Certificate": {
          "PropertyName": "Principal"
        },
        "AWS::IoT::Policy": {
          "PropertyName": "PolicyName"
        }
      }
    }
  },
  "AWS::Glue::Registry": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Connect::ContactFlowModule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Config::ConformancePack": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DevOpsGuru::ResourceCollection": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KafkaConnect::Connector": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53Resolver::ResolverRuleAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::SubscriptionDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::VpcLink": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTEvents::DetectorModel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::TransitGatewayPeeringAttachment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::S3::MultiRegionAccessPointPolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SecretsManager::SecretTargetAttachment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::VolumeAttachment": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::EC2::Volume": {
          "PropertyName": "VolumeId"
        },
        "AWS::EC2::Instance": {
          "PropertyName": "InstanceId"
        }
      }
    }
  },
  "AWS::DirectoryService::SimpleAD": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::ResourceDefinitionVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::Host": {
    "EntityType": "Container",
    "Relationships": {}
  },
  "AWS::IoT::Logging": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::NetworkManager::Site": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::Device": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Cognito::UserPoolDomain": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DocDB::DBClusterParameterGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Signer::ProfilePermission": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElasticBeanstalk::ApplicationVersion": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::ElasticBeanstalk::Application": {
          "PropertyName": "ApplicationName"
        }
      }
    }
  },
  "AWS::Redshift::EndpointAuthorization": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::VPCEndpoint": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::VPC": {
          "PropertyName": "VpcId"
        },
        "AWS::EC2::RouteTable": {
          "PropertyName": "RouteTableIds",
          "Arity": "Many"
        }
      }
    }
  },
  "AWS::IoT::TopicRuleDestination": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTWireless::TaskDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::VPCGatewayAttachment": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::EC2::VPNGateway": {
          "PropertyName": "VpnGatewayId",
          "Endpoint": "Source"
        },
        "AWS::EC2::VPC": {
          "PropertyName": "VpcId",
          "Endpoint": "Target"
        },
        "AWS::EC2::InternetGateway": {
          "PropertyName": "InternetGatewayId",
          "Endpoint": "Source"
        }
      }
    }
  },
  "AWS::DataSync::LocationSMB": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EFS::AccessPoint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::VPCCidrBlock": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::VPC": {
          "PropertyName": "VpcId"
        }
      }
    }
  },
  "AWS::RDS::DBProxyTargetGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KinesisAnalytics::ApplicationReferenceDataSource": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppConfig::Application": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::App": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Cassandra::Table": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppRunner::Service": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EKS::IdentityProviderConfig": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::GroupVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Logs::QueryDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT::Certificate": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::IoT::Policy": {
          "Via": "AWS::IoT::PolicyPrincipalAttachment"
        },
        "AWS::IoT::Thing": {
          "Via": "AWS::IoT::ThingPrincipalAttachment"
        }
      }
    }
  },
  "AWS::GuardDuty::IPSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DynamoDB::GlobalTable": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SSM::Association": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Athena::NamedQuery": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFormation::ModuleVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AmplifyUIBuilder::Theme": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Inspector::AssessmentTarget": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EventSchemas::Registry": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53Resolver::ResolverEndpoint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ImageBuilder::Image": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CE::AnomalySubscription": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RDS::DBProxyEndpoint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::OpenSearchService::Domain": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Location::PlaceIndex": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGatewayV2::ApiMapping": {
    "EntityType": "Element",
    "Relationships": {}
  }
};

/* Overrides */
RELATIONSHIP_TYPE_MAP_OVERRIDES = {
  "AWS::Lambda::Function": {
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::Subnet": [
          {
            "PropertyName": "VpcConfig",
            "Arity": "Many",
            "EmbeddedPropertyName": "SubnetIds"
          }
        ]
      }
    }
  },
  "AWS::EC2::SecurityGroup": {
    "Relationships": {
      "References": {
        "AWS::EC2::SecurityGroup": [
          {
            "PropertyName": "SecurityGroupIngress",
            "Arity": "Many",
            "EmbeddedPropertyName": "SourceSecurityGroupId"
          }, {
            "PropertyName": "SecurityGroupEgress",
            "Arity": "Many",
            "EmbeddedPropertyName": "DestinationSecurityGroupId"
          }
        ]
      }
    }
  }
}

// Merge
RELATIONSHIP_TYPE_MAP = deepmerge.all([RELATIONSHIP_TYPE_MAP, RELATIONSHIP_TYPE_MAP_OVERRIDES]);
