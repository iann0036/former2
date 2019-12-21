# Former2 CLI

The Former2 CLI allows you to use the [former2.com](https://former2.com) tool directly from your command line.

:exclamation: **CAUTION:** The Former2 CLI is experimmental. Use at your own risk.

## Install

npm install former2

## Usage

### generate

The `generate` command will generate one or multiple outputs from all discovered resources and write them to the filename specified.

```
former2 generate --output-cloudformation "cloudformation.yml" --output-terraform "terraform.hcl" --output-debug "debug.json"
```

## Security

Calls to the AWS service API endpoints are made directly with the JavaScript SDK. Recording data is kept entirely in memory or on local disk and is never sent over the internet or anywhere else. You should take care to remove any sensitive data (passwords etc.) when sharing your generated code/templates with others.
