# Former2 CLI

<span class="badge-npmversion"><a href="https://npmjs.org/package/former2" title="View this project on NPM"><img src="https://img.shields.io/npm/v/former2.svg" alt="NPM version" /></a></span>

The Former2 CLI allows you to use the [former2.com](https://former2.com) tool directly from your command line.

:exclamation: **CAUTION:** The Former2 CLI is experimental. Use at your own risk.

## Install

```
npm install -g former2
```

## Usage

Former2 will load AWS credentials from your local credentials file, environment variables or [other available sources](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html) per default precedence. It is recommended that you provide only read access with these credentials and suggest you assign the [ReadOnlyAccess](https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/ReadOnlyAccess) policy.

### generate

The `generate` command will generate one or multiple outputs from all discovered resources and write them to the filename specified.

```
former2 generate \
  --output-cloudformation "cloudformation.yml" \
  --output-terraform "terraform.hcl" \
  --output-debug "debug.json" \
  --search-filter "myapp" \
  --exclude-services "CloudWatch,KMS" \
  --sort-outputs
```

#### Service Names

Below is a list of services for use with the `--exclude-services` argument:

<details><summary>Expand</summary>

* Amplify
* APIGateway
* AppConfig
* AppMesh
* AppStream
* AppSync
* Athena
* AutoScaling
* Backup
* Batch
* Budgets
* CertificateManager
* Cloud9
* CloudFront
* CloudHSM
* CloudMap
* CloudTrail
* CloudWatch
* CodeBuild
* CodeCommit
* CodeDeploy
* CodeGuru
* CodePipeline
* CodeStar
* Cognito
* Config
* CostExplorer
* DataPipeline
* DataSync
* Detective
* DeviceFarm
* DirectConnect
* DirectoryService
* DatabaseMigrationService
* DocumentDB
* DynamoDB
* EC2
* EC2ImageBuilder
* ECR
* ECS
* EFS
* EKS
* ElastiCache
* ElasticBeanstalk
* Elasticsearch
* ElasticTranscoder
* EMR
* EventBridge
* FSx
* GameLift
* Glacier
* GlobalAccelerator
* Glue
* Greengrass
* GroundStation
* GuardDuty
* IAM
* Inspector
* 1Click
* Analytics
* Core
* Events
* ThingsGraph
* Kinesis
* KMS
* LakeFormation
* Lambda
* LicenseManager
* Lightsail
* Macie
* ManagedBlockchain
* MediaConvert
* MediaLive
* MediaPackage
* MediaStore
* MSK
* Neptune
* OpsWorks
* Organizations
* Pinpoint
* QLDB
* QuickSight
* ResourceAccessManager
* RDS
* Redshift
* ResourceGroups
* RoboMaker
* Route53
* S3
* SageMaker
* SecretsManager
* SecurityHub
* ServiceCatalog
* ServiceQuotas
* SES
* SNS
* SQS
* StepFunctions
* StorageGateway
* SWF
* SystemsManager
* Transfer
* VPC
* WAFAndShield
* WorkLink
* WorkSpaces
* XRay
</details>

## Security

Calls to the AWS service API endpoints are made directly with the JavaScript SDK. Recording data is kept entirely in memory or on local disk and is never sent over the internet or anywhere else. You should take care to remove any sensitive data (passwords etc.) when sharing your generated code/templates with others.
