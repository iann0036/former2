# Former2

[![CloudFormation](https://img.shields.io/badge/CloudFormation-100%25-orange.svg)](RESOURCE_COVERAGE.md#cloudformation-resource-coverage) [![Terraform](https://img.shields.io/badge/Terraform-55%25-blue.svg)](RESOURCE_COVERAGE.md#terraform-coverage)

> Generate CloudFormation / Terraform / Troposphere templates from your existing AWS resources


![Screenshot](img/screen1.png)

![Screenshot](img/screen2.png)

## Overview

Former2 allows you to generate Infrastructure-as-Code outputs from your existing resources within your AWS account. By making the relevant calls using the AWS JavaScript SDK, Former2 will scan across your infrastructure and present you with the list of resources for you to choose which to generate outputs for.

## Installation

Though [some AWS services](https://github.com/aws/aws-sdk-js/blob/master/SERVICES.md) do not require it, you will need to install the Former2 Helper browser extension in order to have support for all AWS services. The extension exists to bypass a lack of CORS on some services, such as S3 and IAM.

[Install Former2 Helper for Google Chrome](https://chrome.google.com/webstore/detail/former2-helper/fhejmeojlbhfhjndnkkleooeejklmigi)

[Install Former2 Helper for Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/former2-helper/)

Alternatively, you can [download and install](https://github.com/iann0036/former2-helper) the extension yourself.

## Usage

Visit [former2.com](https://former2.com/) to start.

You will need an [IAM key pair](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) to authenticate your requests. If you are not planning on importing resources directly, it is recommended that you provide only read access with these credentials and suggest you assign the [ReadOnlyAccess](https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/ReadOnlyAccess) policy. If you intend to use the Import feature, you should grant appropriate permissions to create the stack.

Once authenticated you can navigate via the dashboard or sidebar to specific services, select the resources to add to your outputs and finally click the "Generate" button at the top of the screen.

The following outputs are currently supported:

* CloudFormation
* Terraform
* Troposphere
* TypeScript CDK (Cfn Primitives)

### Parameters

Parameters can be used to make the resultant template configurable. When setting parameters with default values Former2 will replace all locations in the template with a !Ref or !Sub to replace these values parameters when the template is executed.

For example if you create a parameter:
Client = SF_
and you have a Lambda Function called SF_Get_Details, Former2 will replace the SF_ in the function name 
FunctionName: !Sub "${Client}Get_Details"

When the template is executed, the user will be able to enter their own value for Client and the stack will name the lambda with the new value. e.g. NY_Get_Details

### Former2 CLI

A command-line version of Former2 with limited functionality is available for installation. For more information, see the [CLI instructions](cli/README.md).

## Security

Calls to the AWS service API endpoints are made either directly with the JavaScript SDK or via the browser extension (which also hits endpoints directly). Recording data is kept entirely in memory or on local disk and is never sent over the internet or anywhere else. You should take care to remove any sensitive data (passwords etc.) when sharing your generated code/templates with others.

If you prefer not to use a publicly hosted site to use Former2, you can [host your own version](DOCKERFILE) by running a HTTP server from the root of the repository. Extension support will also be available if you host on 127.0.0.1 or localhost, otherwise you can modify the extension as needed.

## FAQ

**Does this replace Console Recorder?**

[Console Recorder](https://github.com/iann0036/AWSConsoleRecorder) still fills a certain gap and has features this tool does not support (such as Get/List outputs). I'll be maintaining both for as long as I can.

**I found an issue / I'm missing an output / Something's wrong. Can you help?**

If you find a bug or want to raise a feature request, please do so via [the issues page](https://github.com/iann0036/former2/issues).
