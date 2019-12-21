# Former2 CLI

The Former2 CLI allows you to use the [former2.com](https://former2.com) tool directly from your command line.

:exclamation: **CAUTION:** The Former2 CLI is experimmental. Use at your own risk.

## Install

npm install -g former2

## Usage

Former2 will load AWS credentials from your local credentials file, environment variables or [other available sources](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html) per default precedence. It is recommended that you provide only read access with these credentials and suggest you assign the [ReadOnlyAccess](https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/ReadOnlyAccess) policy.

### generate

The `generate` command will generate one or multiple outputs from all discovered resources and write them to the filename specified.

```
former2 generate --output-cloudformation "cloudformation.yml" --output-terraform "terraform.hcl" --output-debug "debug.json"
```

## Security

Calls to the AWS service API endpoints are made directly with the JavaScript SDK. Recording data is kept entirely in memory or on local disk and is never sent over the internet or anywhere else. You should take care to remove any sensitive data (passwords etc.) when sharing your generated code/templates with others.
