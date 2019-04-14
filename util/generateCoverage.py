import os
import json
import pprint
import math
import re

services = None
cfn_spec = None

tf_resources = []
cfn_types = []
cfn_occurances = []
tf_occurances = []

with open("util/cfnspec.json", "r") as f:
    cfn_spec = json.loads(f.read())['ResourceTypes']

with open("util/tf_resources.txt", "r") as f:
    lines = f.read().splitlines()
    for line in lines:
        tf_resources.append(line)

for cfntype, _ in cfn_spec.items():
    cfn_types.append(cfntype)

cfn_types.append("AWS::Lambda::LayerVersionPermission")
cfn_types.append("AWS::EC2::VPCEndpointService")
cfn_types.append("AWS::Lambda::LayerVersion")
cfn_types = set(cfn_types)

with open("js/mappings.js", "r") as f:
    text = f.read()
    lines = text.splitlines()
    cfn_occurances += re.compile('(AWS\:\:[a-zA-Z0-9]+\:\:[a-zA-Z0-9]+)').findall(text)
    tf_occurances += re.compile('terraformType\'\:\ \'(aws(?:\_[a-zA-Z0-9]+)+)\'').findall(text)

total_services = 0
total_operations = 0
total_unique_occurances = 0
with open("RESOURCE_COVERAGE.md", "w") as f:
    f.write("## CloudFormation Resource Coverage\n\n")
    f.write("**%s/%s (%s%%)** Resources Covered\n" % (
        len(set(cfn_occurances)),
        len(cfn_types),
        int(math.floor(len(set(cfn_occurances)) * 100 / len(cfn_types)))
    ))

    f.write("\n| Type | Coverage |\n")
    f.write("| --- | --- |\n")

    for cfntype in sorted(cfn_types):
        f.write("| *%s* | %s |\n" % (cfntype, ":thumbsup:" if cfn_occurances.count(cfntype) > 0 else ""))

    f.write("\n## Terraform Coverage\n\n")
    f.write("**%s/%s (%s%%)** Resources Covered\n" % (
        len(set(tf_occurances)),
        len(tf_resources),
        int(math.floor(len(set(tf_occurances)) * 100 / len(tf_resources)))
    ))
    
    f.write("\n| Type | Coverage |\n")
    f.write("| --- | --- |\n")

    for tf_resource in sorted(tf_resources):
        f.write("| *%s* | %s |\n" % (tf_resource, ":thumbsup:" if tf_occurances.count(tf_resource) > 0 else ""))
