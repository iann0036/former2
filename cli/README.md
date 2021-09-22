# Former2 CLI

<span class="badge-npmversion"><a href="https://npmjs.org/package/former2" title="View this project on NPM"><img src="https://img.shields.io/npm/v/former2.svg" alt="NPM version" /></a></span>

The Former2 CLI allows you to use the [former2.com](https://former2.com) tool directly from your command line.

:exclamation: **CAUTION:** The Former2 CLI is experimental. Use at your own risk.

## Install

```
npm install -g former2
```

Or build the Docker image if Node.js is not installed in your environment:

```
docker build https://github.com/iann0036/former2.git#master:cli -t iann0036/former2:latest
```

## Usage

Former2 will load AWS credentials from your local credentials file, environment variables or [other available sources](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html) per default precedence. It is recommended that you provide only read access with these credentials and suggest you assign the [ReadOnlyAccess](https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/ReadOnlyAccess) policy.

### generate

The `generate` command will generate one or multiple outputs from all discovered resources and write them to the filename specified.

```
former2 generate \
  --output-cloudformation "cloudformation.yml" \
  --output-terraform "terraform.hcl" \
  --output-raw-data "debug.json" \
  --search-filter "myapp" \
  --exclude-services "CloudWatch,KMS" \
  --sort-output
```

When using Docker image:

```
docker run --rm -t -v `pwd`:/former2 -v ~/.aws:/root/.aws \
iann0036/former2:latest generate \
  --output-cloudformation "cloudformation.yml" \
  --output-terraform "terraform.hcl" \
  --search-filter "myapp" \
  --exclude-services "CloudWatch,KMS" \
  --sort-output
```

#### Options

At least one of the options starting with `--output` should be specified.

```
Options:
  --output-cloudformation <filename>     filename for CloudFormation output
  --output-terraform <filename>          filename for Terraform output
  --output-raw-data <filename>           filename for debug output (full)
  --output-logical-id-mapping <filename> filename for logical to physical id mapping
  --cfn-deletion-policy <Delete|Retain>  add DeletionPolicy in CloudFormation output
  --search-filter <value>                search filter for discovered resources (can be comma separated)
  --services <value>                     list of services to include (can be comma separated (default: ALL))
  --exclude-services <value>             list of services to exclude (can be comma separated)
  --sort-output                          sort resources by their ID before outputting
  --include-default-resources            include default resources such as default VPCs and their subnets
  --region <regionname>                  overrides the default AWS region to scan
  --profile <profilename>                uses the profile specified from the shared credentials file
  --proxy <protocol://host:port>         use proxy
  --debug                                log debugging messages
  -h, --help                             output usage information
```

#### Service Names

Below is a list of services for use with the `--services` and `--exclude-services` argument:

<details><summary>Expand</summary>

* 1Click
* APIGateway
* AmazonMQ
* Amplify
* Analytics
* AppConfig
* AppFlow
* AppMesh
* AppStream
* AppSync
* Athena
* AuditManager
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
* CodeArtifact
* CodeBuild
* CodeCommit
* CodeDeploy
* CodeGuru
* CodePipeline
* CodeStar
* Cognito
* Config
* Core
* CostExplorer
* DataBrew
* DataPipeline
* DataSync
* DatabaseMigrationService
* Detective
* DevOpsGuru
* DeviceFarm
* DirectConnect
* DirectoryService
* DocumentDB
* DynamoDB
* EC2
* EC2ImageBuilder
* ECR
* ECS
* EFS
* EKS
* EMR
* ElastiCache
* ElasticBeanstalk
* ElasticTranscoder
* Elasticsearch
* EventBridge
* Events
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
* InteractiveVideoService
* KMS
* Kendra
* Kinesis
* LakeFormation
* Lambda
* Lex
* LicenseManager
* Lightsail
* LookoutForVision
* MSK
* Macie
* ManagedApacheAirflow
* ManagedBlockchain
* MediaConnect
* MediaConvert
* MediaLive
* MediaPackage
* MediaStore
* Neptune
* OpsWorks
* Organizations
* Pinpoint
* QLDB
* QuickSight
* RDS
* Redshift
* ResourceAccessManager
* ResourceGroups
* RoboMaker
* Route53
* S3
* SES
* SNS
* SQS
* SWF
* SageMaker
* SecretsManager
* SecurityHub
* ServiceCatalog
* ServiceQuotas
* Signer
* SimpleDB
* SingleSignOn
* SiteWise
* StepFunctions
* StorageGateway
* SystemsManager
* ThingsGraph
* Timestream
* Transfer
* VPC
* WAFAndShield
* WorkLink
* WorkSpaces
* XRay
</details>

#### Filtering examples

Generate CloudFormation output for Lambda and IAM only.

```
former2 generate --services "Lambda,IAM" --output-cloudformation "cfn.yaml"
```

Generate CloudFormation output all services excluding CloudWatch and KMS.

```
former2 generate --output-cloudformation "cfn.yaml" --exclude-services "CloudWatch,KMS"
```

Generates Terraform output only for the resources that contain "myapp" in Names or Tags etc.
Filtering by whether the JSON responses of the AWS SDK calls contain a specified string.

```
former2 generate --output-terraform "tf.hcl" --search-filter "myapp"
```

## Security

Calls to the AWS service API endpoints are made directly with the JavaScript SDK. Recording data is kept entirely in memory or on local disk and is never sent over the internet or anywhere else. You should take care to remove any sensitive data (passwords etc.) when sharing your generated code/templates with others.
