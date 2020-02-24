var RELATIONSHIP_TYPE_MAP = JSON.parse(`{
  "AWS::EC2::RouteTable": {
    "EntityType": "Container",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::VPC": {
          "PropertyName": "VpcId"
        }
      },
      "IsAssociatedWith": {
        "AWS::EC2::VPNGateway": {
          "Via": "AWS::EC2::VPNGatewayRoutePropagation"
        },
        "AWS::EC2::Subnet": {
          "Via": "AWS::EC2::SubnetRouteTableAssociation"
        }
      }
    }
  },
  "AWS::ServiceCatalog::PortfolioShare": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ACMPCA::CertificateAuthority": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AccessAnalyzer::Analyzer": {
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
  "AWS::WAFRegional::RateBasedRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::SMSChannel": {
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
  "AWS::Elasticsearch::Domain": {
    "EntityType": "Element",
    "Relationships": {}
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
  "AWS::WAFRegional::SqlInjectionMatchSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGatewayV2::Route": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::Workteam": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Kinesis::Stream": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RAM::ResourceShare": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AutoScaling::LaunchConfiguration": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::VPC": {
          "PropertyName": "ClassicLinkVPCId"
        }
      },
      "Uses": {
        "AWS::IAM::InstanceProfile": {
          "PropertyName": "IamInstanceProfile"
        }
      },
      "IsAssociatedWith": {
        "AWS::EC2::Instance": {
          "PropertyName": "InstanceId"
        },
        "AWS::EC2::KeyPair": {
          "PropertyName": "KeyName"
        },
        "AWS::EC2::SecurityGroup": [
          {
            "PropertyName": "ClassicLinkVPCSecurityGroups",
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
  "AWS::EC2::TransitGateway": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SQS::Queue": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::KMS::Key": {
          "PropertyName": "KmsMasterKeyId"
        }
      }
    }
  },
  "AWS::EC2::CapacityReservation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppSync::Resolver": {
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
      "IsContainedInside": {
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
  "AWS::ECS::Cluster": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::StepFunctions::Activity": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KinesisAnalytics::ApplicationOutput": {
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
  "AWS::IAM::ServiceLinkedRole": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalog::ResourceUpdateConstraint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::ConnectorDefinitionVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFront::StreamingDistribution": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppSync::GraphQLApi": {
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
  "AWS::GuardDuty::Filter": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::LakeFormation::Resource": {
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
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::Subnet": {
          "PropertyName": "SubnetId"
        }
      },
      "IsAssociatedWith": {
        "AWS::EFS::FileSystem": {
          "PropertyName": "FileSystemId"
        },
        "AWS::EC2::SecurityGroup": {
          "PropertyName": "SecurityGroups",
          "Arity": "Many"
        }
      }
    }
  },
  "AWS::Glue::DataCatalogEncryptionSettings": {
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
  "AWS::SageMaker::NotebookInstanceLifecycleConfig": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::Deployment": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::ApiGateway::RestApi": {
          "PropertyName": "RestApiId"
        }
      },
      "IsAssociatedWith": {
        "AWS::ApiGateway::Stage": {
          "PropertyName": "StageName"
        }
      }
    }
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
  "AWS::LakeFormation::Permissions": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KMS::Key": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Redshift::Cluster": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::Redshift::ClusterSubnetGroup": {
          "PropertyName": "ClusterSubnetGroupName"
        }
      },
      "IsAssociatedWith": {
        "AWS::Redshift::ClusterSecurityGroup": {
          "PropertyName": "ClusterSecurityGroups",
          "Arity": "Many"
        },
        "AWS::EC2::AvailabilityZone": {
          "PropertyName": "AvailabilityZone"
        },
        "AWS::IAM::Role": {
          "PropertyName": "IamRoles",
          "Arity": "Many"
        },
        "AWS::EC2::SecurityGroup": {
          "PropertyName": "VpcSecurityGroupIds",
          "Arity": "Many"
        },
        "AWS::KMS::Key": {
          "PropertyName": "KmsKeyId"
        },
        "AWS::Redshift::ClusterParameterGroup": {
          "PropertyName": "ClusterParameterGroupName"
        },
        "AWS::Redshift::Cluster": {
          "PropertyName": "SnapshotClusterIdentifier"
        }
      }
    }
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
  "AWS::AppMesh::Route": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EKS::Nodegroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lambda::EventSourceMapping": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::Kinesis::Stream": {
          "PropertyName": "EventSourceArn"
        },
        "AWS::Lambda::Function": {
          "PropertyName": "EventSourceArn"
        }
      },
      "IsAssociatedWith": {
        "AWS::Lambda::Function": {
          "PropertyName": "FunctionName"
        }
      }
    }
  },
  "AWS::AppConfig::Deployment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::Authorizer": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::ApiGateway::RestApi": {
          "PropertyName": "RestApiId"
        }
      },
      "Uses": {
        "AWS::IAM::Role": {
          "PropertyName": "AuthorizerCredentials"
        }
      }
    }
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
  "AWS::EC2::LocalGatewayRoute": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaConvert::Queue": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::DomainName": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::CertificateManager::Certificate": {
          "PropertyName": "CertificateArn"
        }
      }
    }
  },
  "AWS::WAFRegional::GeoMatchSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFv2::RegexPatternSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Batch::JobDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::VPCEndpointConnectionNotification": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GameLift::Fleet": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::GameLift::Build": {
          "PropertyName": "BuildId"
        }
      }
    }
  },
  "AWS::Lambda::LayerVersion": {
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
  "AWS::LakeFormation::DataLakeSettings": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::EventStream": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::PinpointEmail::ConfigurationSetEventDestination": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGatewayV2::Stage": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::Model": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::ApiGateway::RestApi": {
          "PropertyName": "RestApiId"
        }
      }
    }
  },
  "AWS::GuardDuty::ThreatIntelSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFRegional::RegexPatternSet": {
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
  "AWS::SES::ReceiptFilter": {
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
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::VPC": {
          "PropertyName": "ResourceId"
        },
        "AWS::Logs::LogGroup": {
          "PropertyName": "LogGroupName"
        },
        "AWS::EC2::Subnet": {
          "PropertyName": "ResourceId"
        }
      },
      "Uses": {
        "AWS::IAM::Role": {
          "PropertyName": "DeliverLogsPermissionArn"
        }
      },
      "IsAssociatedWith": {
        "AWS::EC2::NetworkInterface": {
          "PropertyName": "ResourceId"
        }
      }
    }
  },
  "AWS::SecretsManager::RotationSchedule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::ResourceDefinition": {
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
  "AWS::IAM::AccessKey": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GameLift::MatchmakingConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CodeBuild::SourceCredential": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AmazonMQ::ConfigurationAssociation": {
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
  "AWS::WAFv2::IPSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Budgets::Budget": {
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
  "AWS::ElasticLoadBalancingV2::Listener": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::ElasticLoadBalancingV2::LoadBalancer": {
          "PropertyName": "LoadBalancerArn"
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
  "AWS::Lambda::LayerVersionPermission": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::EndpointConfig": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::DeviceDefinition": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::StepFunctions::StateMachine": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::IAM::Role": {
          "PropertyName": "RoleARN"
        }
      }
    }
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
  "AWS::DAX::ParameterGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Config::ConfigurationAggregator": {
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
  "AWS::CloudTrail::Trail": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::SNS::Topic": {
          "PropertyName": "SnsTopicName"
        },
        "AWS::Logs::LogGroup": {
          "PropertyName": "CloudWatchLogsLogGroupArn"
        },
        "AWS::IAM::Role": {
          "PropertyName": "CloudWatchLogsRoleArn"
        }
      },
      "IsAssociatedWith": {
        "AWS::S3::Bucket": {
          "PropertyName": "S3BucketName"
        },
        "AWS::KMS::Key": {
          "PropertyName": "KMSKeyId"
        }
      }
    }
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
  "AWS::Neptune::DBClusterParameterGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElasticLoadBalancingV2::ListenerRule": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::ElasticLoadBalancingV2::Listener": {
          "PropertyName": "ListenerArn"
        }
      }
    }
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
  "AWS::IoT::TopicRule": {
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
  "AWS::DocDB::DBInstance": {
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
  "AWS::ServiceCatalog::CloudFormationProduct": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RoboMaker::SimulationApplication": {
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
  "AWS::EventSchemas::Discoverer": {
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
  "AWS::EC2::Subnet": {
    "EntityType": "Container",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::VPC": {
          "PropertyName": "VpcId"
        }
      },
      "IsAssociatedWith": {
        "AWS::EC2::RouteTable": {
          "Via": "AWS::EC2::SubnetRouteTableAssociation"
        },
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
  "AWS::ServiceCatalog::PortfolioProductAssociation": {
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
  "AWS::MediaConvert::JobTemplate": {
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
        }
      },
      "IsAssociatedWith": {
        "AWS::EC2::PlacementGroup": {
          "PropertyName": "PlacementGroupName"
        },
        "AWS::EC2::NetworkInterface": [
          {
            "PropertyName": "NetworkInterfaces",
            "Arity": "Many",
            "EmbeddedPropertyName": "NetworkInterfaceId"
          },
          {
            "Via": "AWS::EC2::NetworkInterfaceAttachment"
          }
        ],
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
  "AWS::EKS::Cluster": {
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
  "AWS::DocDB::DBCluster": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DAX::Cluster": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SSM::PatchBaseline": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GuardDuty::Member": {
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
  "AWS::SecretsManager::ResourcePolicy": {
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
  "AWS::Backup::BackupVault": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppConfig::ConfigurationProfile": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT1Click::Placement": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SSM::MaintenanceWindowTarget": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::DHCPOptions": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EC2::VPC": {
          "Via": "AWS::EC2::VPCDHCPOptionsAssociation"
        }
      }
    }
  },
  "AWS::ApiGateway::UsagePlan": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::ApiGateway::RestApi": {
          "PropertyName": "ApiStages",
          "Arity": "Many",
          "EmbeddedPropertyName": "ApiId"
        }
      },
      "IsAssociatedWith": {
        "AWS::ApiGateway::Stage": {
          "PropertyName": "ApiStages",
          "Arity": "Many",
          "EmbeddedPropertyName": "Stage"
        }
      }
    }
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
  "AWS::SES::ConfigurationSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudWatch::InsightRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ManagedBlockchain::Node": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTAnalytics::Datastore": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::Job": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::S3::Bucket": {
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
  "AWS::SageMaker::NotebookInstance": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFv2::WebACLAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::BaiduChannel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::BasePathMapping": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::ApiGateway::RestApi": {
          "PropertyName": "RestApiId"
        }
      },
      "IsAssociatedWith": {
        "AWS::ApiGateway::DomainName": {
          "PropertyName": "DomainName"
        },
        "AWS::ApiGateway::Stage": {
          "PropertyName": "Stage"
        }
      }
    }
  },
  "AWS::Cognito::UserPool": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::EgressOnlyInternetGateway": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::VPC": {
          "PropertyName": "VpcId"
        }
      }
    }
  },
  "AWS::DLM::LifecyclePolicy": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGatewayV2::Api": {
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
  "AWS::WAFRegional::IPSet": {
    "EntityType": "Element",
    "Relationships": {}
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
  "AWS::ServiceDiscovery::HttpNamespace": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SageMaker::CodeRepository": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::Stage": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::ApiGateway::RestApi": {
          "PropertyName": "RestApiId"
        }
      },
      "IsAssociatedWith": {
        "AWS::ApiGateway::ClientCertificate": {
          "PropertyName": "ClientCertificateId"
        },
        "AWS::ApiGateway::Deployment": {
          "PropertyName": "DeploymentId"
        }
      }
    }
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
  "AWS::IoTEvents::Input": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ECR::Repository": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::GatewayResponse": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::ApiGateway::RestApi": {
          "PropertyName": "RestApiId"
        }
      }
    }
  },
  "AWS::Glue::Database": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGatewayV2::RouteResponse": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::ClientCertificate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::LoggerDefinitionVersion": {
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
  "AWS::KMS::Alias": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::KMS::Key": {
          "PropertyName": "TargetKeyId"
        }
      }
    }
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
  "AWS::Pinpoint::GCMChannel": {
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
  "AWS::KinesisAnalyticsV2::Application": {
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
  "AWS::Greengrass::FunctionDefinitionVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AmazonMQ::Configuration": {
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
  "AWS::EC2::TransitGatewayRouteTable": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAF::XssMatchSet": {
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
  "AWS::RDS::DBClusterParameterGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Neptune::DBInstance": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::VPCEndpointService": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Kinesis::StreamConsumer": {
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
  "AWS::ServiceCatalog::StackSetConstraint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::Crawler": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::ClientVpnRoute": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::DocumentationVersion": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::ApiGateway::RestApi": {
          "PropertyName": "RestApiId"
        }
      }
    }
  },
  "AWS::SSM::MaintenanceWindowTask": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::MLTransform": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Transfer::Server": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::UsagePlanKey": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::ApiGateway::UsagePlan": {
          "PropertyName": "UsagePlanId"
        },
        "AWS::ApiGateway::ApiKey": {
          "PropertyName": "KeyId"
        }
      }
    }
  },
  "AWS::EMR::SecurityConfiguration": {
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
  "AWS::Glue::Classifier": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::RoboMaker::Fleet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AmazonMQ::Broker": {
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
  "AWS::AppSync::DataSource": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ECS::PrimaryTaskSet": {
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
  "AWS::Greengrass::Group": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::PinpointEmail::Identity": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::MediaLive::Input": {
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
    "Relationships": {
      "IsContainedInside": {
        "AWS::ApiGateway::RestApi": {
          "PropertyName": "RestApiId"
        }
      }
    }
  },
  "AWS::WAFRegional::SizeConstraintSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppMesh::VirtualService": {
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
  "AWS::EC2::GatewayRouteTableAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTThingsGraph::FlowTemplate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Logs::LogGroup": {
    "EntityType": "Container",
    "Relationships": {}
  },
  "AWS::CodePipeline::Webhook": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AutoScalingPlans::ScalingPlan": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppStream::ImageBuilder": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFRegional::XssMatchSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::NetworkAclEntry": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::NetworkAcl": {
          "PropertyName": "NetworkAclId"
        }
      }
    }
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
  "AWS::ElasticLoadBalancingV2::ListenerCertificate": {
    "EntityType": "Element",
    "Relationships": {}
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
  "AWS::Neptune::DBParameterGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::LaunchTemplate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::SmsTemplate": {
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
  "AWS::ServiceCatalog::TagOptionAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ACMPCA::Certificate": {
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
  "AWS::EC2::SpotFleet": {
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
  "AWS::DirectoryService::MicrosoftAD": {
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
  "AWS::ApiGatewayV2::DomainName": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::FunctionDefinition": {
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
  "AWS::EC2::NetworkInterfacePermission": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EC2::NetworkInterface": {
          "PropertyName": "NetworkInterfaceId"
        }
      }
    }
  },
  "AWS::EC2::TrafficMirrorFilter": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GameLift::Build": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Config::OrganizationConfigRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::QLDB::Ledger": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGatewayV2::Integration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudWatch::Alarm": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::Segment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Backup::BackupSelection": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::APNSSandboxChannel": {
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
  "AWS::MediaConvert::Preset": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CodeStarNotifications::NotificationRule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Inspector::ResourceGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoTAnalytics::Dataset": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DocDB::DBSubnetGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ServiceCatalog::PortfolioPrincipalAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GameLift::MatchmakingRuleSet": {
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
  "Alexa::ASK::Skill": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::ClientVpnEndpoint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ECS::Service": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::ECS::TaskDefinition": {
          "PropertyName": "TaskDefinition"
        },
        "AWS::ECS::Cluster": {
          "PropertyName": "Cluster"
        },
        "AWS::IAM::Role": {
          "PropertyName": "Role"
        },
        "AWS::ElasticLoadBalancingV2::TargetGroup": {
          "PropertyName": "LoadBalancers",
          "Arity": "Many",
          "EmbeddedPropertyName": "TargetGroupArn"
        },
        "AWS::ElasticLoadBalancing::LoadBalancer": {
          "PropertyName": "LoadBalancers",
          "Arity": "Many",
          "EmbeddedPropertyName": "LoadBalancerName"
        }
      }
    }
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
  "AWS::OpsWorksCM::Server": {
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
  "AWS::Batch::JobQueue": {
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
  "AWS::DMS::Certificate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::ApiKey": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::Table": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::SubnetRouteTableAssociation": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::EC2::RouteTable": {
          "PropertyName": "RouteTableId"
        },
        "AWS::EC2::Subnet": {
          "PropertyName": "SubnetId"
        }
      }
    }
  },
  "AWS::IAM::InstanceProfile": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::IAM::Role": {
          "PropertyName": "Roles",
          "Arity": "Many"
        }
      }
    }
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
  "AWS::Batch::ComputeEnvironment": {
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
      "IsAssociatedWith": {
        "AWS::EC2::VPNGateway": {
          "PropertyName": "GatewayId"
        },
        "AWS::EC2::VPCPeeringConnection": {
          "PropertyName": "VpcPeeringConnectionId"
        },
        "AWS::EC2::EgressOnlyInternetGateway": {
          "PropertyName": "EgressOnlyInternetGatewayId"
        },
        "AWS::EC2::NetworkInterface": {
          "PropertyName": "NetworkInterfaceId"
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
  "AWS::AppStream::DirectoryConfig": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::LocalGatewayRouteTableVPCAssociation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::GameLift::GameSessionQueue": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::Resource": {
    "EntityType": "Container",
    "Relationships": {
      "IsContainedInside": {
        "AWS::ApiGateway::Resource": {
          "PropertyName": "ParentId"
        },
        "AWS::ApiGateway::RestApi": {
          "PropertyName": "RestApiId"
        }
      }
    }
  },
  "AWS::SecurityHub::Hub": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::IoT1Click::Device": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::Connection": {
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
  "AWS::ElasticBeanstalk::Application": {
    "EntityType": "Container",
    "Relationships": {}
  },
  "AWS::SES::ReceiptRule": {
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
  "AWS::EC2::TransitGatewayRouteTablePropagation": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::WAFRegional::ByteMatchSet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::NetworkInterface": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::Subnet": {
          "PropertyName": "SubnetId"
        }
      },
      "IsAssociatedWith": {
        "AWS::EC2::Instance": {
          "Via": "AWS::EC2::NetworkInterfaceAttachment"
        },
        "AWS::EC2::SecurityGroup": {
          "PropertyName": "GroupSet",
          "Arity": "Many"
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
  "AWS::DAX::SubnetGroup": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::FSx::FileSystem": {
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
  "AWS::DataPipeline::Pipeline": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Route53Resolver::ResolverRule": {
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
  "AWS::GameLift::Script": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGateway::Account": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::IAM::Role": {
          "PropertyName": "CloudWatchRoleArn"
        }
      }
    }
  },
  "AWS::EC2::TrafficMirrorSession": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Amplify::Branch": {
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
    "Relationships": {
      "Uses": {
        "AWS::IAM::Role": {
          "PropertyName": "RoleARN"
        },
        "AWS::SQS::Queue": {
          "PropertyName": "NotificationTargetARN"
        }
      },
      "IsAssociatedWith": {
        "AWS::AutoScaling::AutoScalingGroup": {
          "PropertyName": "AutoScalingGroupName"
        },
        "AWS::SNS::Topic": {
          "PropertyName": "NotificationTargetARN"
        }
      }
    }
  },
  "AWS::MediaLive::InputSecurityGroup": {
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
  "AWS::AppSync::FunctionConfiguration": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ApiGatewayV2::Model": {
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
  "AWS::WAFRegional::Rule": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::PushTemplate": {
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
  "AWS::ApiGateway::RestApi": {
    "EntityType": "Container",
    "Relationships": {}
  },
  "AWS::Events::EventBus": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lambda::EventInvokeConfig": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::VPC": {
    "EntityType": "Container",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EC2::DHCPOptions": {
          "Via": "AWS::EC2::VPCDHCPOptionsAssociation"
        }
      }
    }
  },
  "AWS::KinesisAnalyticsV2::ApplicationOutput": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Config::OrganizationConformancePack": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::ElastiCache::ParameterGroup": {
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
  "AWS::EFS::FileSystem": {
    "EntityType": "Element",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::KMS::Key": {
          "PropertyName": "KmsKeyId"
        }
      }
    }
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
  "AWS::Cognito::UserPoolUICustomizationAttachment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::CoreDefinition": {
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
  "AWS::IoTAnalytics::Pipeline": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Lambda::Function": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::IAM::Role": {
          "PropertyName": "Role"
        }
      }
    }
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
  "AWS::EventSchemas::Schema": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::NetworkAcl": {
    "EntityType": "Container",
    "Relationships": {
      "IsContainedInside": {
        "AWS::EC2::VPC": {
          "PropertyName": "VpcId"
        }
      },
      "IsAssociatedWith": {
        "AWS::EC2::Subnet": {
          "Via": "AWS::EC2::SubnetNetworkAclAssociation"
        }
      }
    }
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
  "AWS::EC2::VPNGatewayRoutePropagation": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::EC2::VPNGateway": {
          "PropertyName": "VpnGatewayId"
        },
        "AWS::EC2::RouteTable": {
          "PropertyName": "RouteTableIds",
          "Arity": "Many"
        }
      }
    }
  },
  "AWS::EC2::ClientVpnTargetNetworkAssociation": {
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
  "AWS::ApiGatewayV2::Authorizer": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CloudFormation::WaitConditionHandle": {
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
  "AWS::Route53::RecordSetGroup": {
    "EntityType": "Element",
    "Relationships": {
      "IsContainedInside": {
        "AWS::Route53::HostedZone": {
          "PropertyName": "HostedZoneId"
        }
      }
    }
  },
  "AWS::KinesisFirehose::DeliveryStream": {
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
  "AWS::Greengrass::DeviceDefinitionVersion": {
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
  "AWS::Config::ConformancePack": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Amplify::Domain": {
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
  "AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource": {
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
  "AWS::Greengrass::ResourceDefinitionVersion": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DirectoryService::SimpleAD": {
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
  "AWS::SecretsManager::SecretTargetAttachment": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Pinpoint::EmailChannel": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::Host": {
    "EntityType": "Container",
    "Relationships": {
      "IsAssociatedWith": {
        "AWS::EC2::AvailabilityZone": {
          "PropertyName": "AvailabilityZone"
        }
      }
    }
  },
  "AWS::ECS::TaskDefinition": {
    "EntityType": "Element",
    "Relationships": {
      "Uses": {
        "AWS::IAM::Role": [
          {
            "PropertyName": "ExecutionRoleArn"
          },
          {
            "PropertyName": "TaskRoleArn"
          }
        ]
      }
    }
  },
  "AWS::ApiGatewayV2::IntegrationResponse": {
    "EntityType": "Element",
    "Relationships": {}
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
  "AWS::Cognito::UserPoolDomain": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::DocDB::DBClusterParameterGroup": {
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
  "AWS::MSK::Cluster": {
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
  "AWS::RoboMaker::Robot": {
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
  "AWS::Glue::Trigger": {
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
  "AWS::SSM::Parameter": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppMesh::Mesh": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Inspector::AssessmentTemplate": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::KinesisAnalytics::ApplicationReferenceDataSource": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::SSM::ResourceDataSync": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::AppConfig::Application": {
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
  "AWS::Pinpoint::App": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::EC2Fleet": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Greengrass::GroupVersion": {
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
  "AWS::SSM::Association": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::CodeStar::GitHubRepository": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Athena::NamedQuery": {
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
  "AWS::Route53Resolver::ResolverEndpoint": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::VPCDHCPOptionsAssociation": {
    "EntityType": "Link",
    "Relationships": {
      "References": {
        "AWS::EC2::VPC": {
          "PropertyName": "VpcId"
        },
        "AWS::EC2::DHCPOptions": {
          "PropertyName": "DhcpOptionsId"
        }
      }
    }
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
  "AWS::ServiceDiscovery::PublicDnsNamespace": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::EC2::TrafficMirrorTarget": {
    "EntityType": "Element",
    "Relationships": {}
  },
  "AWS::Glue::SecurityConfiguration": {
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
  "AWS::ApiGatewayV2::ApiMapping": {
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
  }
}`);