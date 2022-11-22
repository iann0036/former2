import os
import json
import pprint
import math
import re
import collections

services = None
cfn_spec = None

tf_resources = []
cfn_types = []
cfn_occurances = []
tf_occurances = []
cfn_exceptions = {
    'AWS::CloudFormation::CustomResource': 'N/A',
    'AWS::CloudFormation::Macro': 'N/A',
    'AWS::CloudFormation::Stack': 'N/A',
    'AWS::CloudFormation::WaitCondition': 'N/A',
    'AWS::CloudFormation::WaitConditionHandle': 'N/A',
    'AWS::EC2::SecurityGroupEgress': 'N/A',
    'AWS::EC2::SecurityGroupIngress': 'N/A',
    'AWS::RDS::DBSecurityGroupIngress': 'N/A',
    'AWS::ElastiCache::SecurityGroupIngress': 'N/A',
    'AWS::Redshift::ClusterSecurityGroupIngress': 'N/A',
    'AWS::Route53::RecordSetGroup': 'N/A',
    'AWS::IAM::UserToGroupAddition': 'N/A',
    'Alexa::ASK::Skill': 'N/A',
    'AWS::ServiceCatalog::PortfolioShare': 'N/A',
    'AWS::SecretsManager::SecretTargetAttachment': 'N/A',
    'AWS::ServiceCatalog::ResourceUpdateConstraint': 'N/A',
    'AWS::ACMPCA::Certificate': 'N/A',
    'AWS::Chatbot::SlackChannelConfiguration': 'N/A',
    'AWS::ApiGatewayV2::ApiGatewayManagedOverrides': 'N/A',
    'AWS::Cassandra::Keyspace': 'N/A',
    'AWS::Cassandra::Table': 'N/A',
    'AWS::CloudFormation::StackSet': 'N/A',
    'AWS::MediaPackage::Asset': 'N/A',
    'AWS::MediaPackage::PackagingConfiguration': 'N/A',
    'AWS::MediaPackage::PackagingGroup': 'N/A',
    'AWS::CloudFormation::ModuleDefaultVersion': 'N/A',
    'AWS::CloudFormation::ModuleVersion': 'N/A',
    'AWS::ECS::ClusterCapacityProviderAssociations': 'N/A',
    'AWS::CloudFormation::ResourceDefaultVersion': 'N/A',
    'AWS::CloudFormation::ResourceVersion': 'N/A',
    'AWS::CloudFormation::TypeActivation': 'N/A',
    'AWS::CloudFormation::Publisher': 'N/A',
    'AWS::CloudFormation::PublicTypeVersion': 'N/A',
    'AWS::Elasticsearch::Domain': 'N/A',
    'AWS::EC2::TransitGatewayVpcAttachment': 'N/A (duplicate of AWS::EC2::TransitGatewayAttachment)',
    'AWS::CloudFormation::HookDefaultVersion': 'N/A',
    'AWS::CloudFormation::HookTypeConfig': 'N/A',
    'AWS::CloudFormation::HookVersion': 'N/A',
    'AWS::Route53::CidrCollection': 'N/A'
}
tf_exceptions = {
    'aws_cloudformation_stack': 'N/A',
    'aws_cloudformation_stack_set': 'N/A',
    'aws_cloudformation_stack_set_instance': 'N/A',
    'aws_dx_hosted_public_virtual_interface_accepter': 'N/A',
    'aws_dx_hosted_private_virtual_interface_accepter': 'N/A',
    'aws_simpledb_domain': 'N/A'
}

with open("util/cfnspec.json", "r") as f:
    cfn_spec = json.loads(f.read())['ResourceTypes']

with open("util/tf_resources.txt", "r") as f:
    lines = f.read().splitlines()
    for line in lines:
        if line != "":
            tf_resources.append(line)

for servicefilename in os.listdir("js/services"):
    with open("js/services/" + servicefilename, "r") as f:
        text = f.read()
        lines = text.splitlines()
        for line in lines:
            if 'not real resource type' not in line:
                cfn_occurances += re.compile(r'(AWS\:\:[a-zA-Z0-9]+\:\:[a-zA-Z0-9]+)').findall(line)
        tf_occurances += re.compile(r'terraformType\'\:\ \'(aws(?:\_[a-zA-Z0-9]+)+)\'').findall(text)

for cfntype, _ in cfn_spec.items():
    cfn_types.append(cfntype)

for cfn_occurance in cfn_occurances:
    if cfn_occurance not in cfn_types:
        print("Resource not in spec: " + cfn_occurance)
        cfn_types.append(cfn_occurance)

cfn_types = set(cfn_types)

## Property Coverage
def getProps(resourcetype, propdef, depth):
    if depth > 10:
        return {}

    ret = {}
    if 'Properties' in propdef:
        for k, v in propdef['Properties'].items():
            ret[k] = {}
            if 'Type' in v:
                if v['Type'] == 'Map':
                    if 'ItemType' in v:
                        ret[k] = getProps(resourcetype, loaded_spec['PropertyTypes'][resourcetype + "." + v['ItemType']], depth+1)
                elif v['Type'] == 'List':
                    if 'ItemType' in v and v['ItemType'] != 'Json':
                        if v['ItemType'] == 'Tag':
                            ret[k] = getProps(resourcetype, loaded_spec['PropertyTypes'][v['ItemType']], depth+1)
                        else:
                            ret[k] = getProps(resourcetype, loaded_spec['PropertyTypes'][resourcetype + "." + v['ItemType']], depth+1)
                elif v['Type'] != "String" and v['Type'] != "Json":
                    if v['Type'] == 'Tag':
                        ret[k] = getProps(resourcetype, loaded_spec['PropertyTypes'][v['Type']], depth+1)
                    else:
                        ret[k] = getProps(resourcetype, loaded_spec['PropertyTypes'][resourcetype + "." + v['Type']], depth+1)
    elif 'Type' in propdef and propdef['Type'] == 'List' and 'ItemType' in propdef:
        if 'ItemType' in propdef and propdef['ItemType'] != 'Json':
            if propdef['ItemType'] == 'Tag':
                ret = getProps(resourcetype, loaded_spec['PropertyTypes'][propdef['ItemType']], depth+1)
            else:
                ret = getProps(resourcetype, loaded_spec['PropertyTypes'][resourcetype + "." + propdef['ItemType']], depth+1)
    elif 'PrimitiveType' not in propdef and ''.join(propdef.keys()) != "Documentation":
        pass
        print("Skipped propdef")
        print(resourcetype)
        print(propdef)
    return ret

spec = {}
with open("util/cfnspec.json", "r") as f:
    loaded_spec = json.loads(f.read())

    for k, v in loaded_spec['ResourceTypes'].items():
        if k not in cfn_exceptions.keys():
            try:
                spec[k] = getProps(k, v, 0)
            except Exception as e:
                print(e)

# Find occurences
def find_occs(resourcetype, prop, indent, subprops):
    ret = ""
    break_loop = False
    process_subs = True
    for servicefilename in os.listdir("js/services"):
        if not break_loop:
            with open("js/services/" + servicefilename, "r") as f:
                text = f.read()
                endpos = text.find("'" + resourcetype + "'")
                if endpos > -1:
                    startpos = text.rfind("if (obj.type ==", 0, endpos)
                    if "\'" + prop + "\'" in text[startpos:endpos]:
                        ret += (' '*indent) + prop + ": [X]\n"
                    elif "SKIPPED: " + prop in text[startpos:endpos]:
                        ret += (' '*indent) + prop + ": [~]\n"
                        process_subs = False
                    else:
                        ret += (' '*indent) + prop + ": [ ]\n"
                        process_subs = False
                    break_loop = True
    if process_subs:
        subpropret = ''
        for k, v in subprops.items():
            subpropret += find_occs(resourcetype, k, indent + 4, v)
        if "[X]" in subpropret:
            ret += subpropret
        else:
            ret += subpropret.replace("[ ]", "[X]")
    return ret

for resourcetype, props in spec.items():
    txt = ''
    for prop in props.keys():
        txt += find_occs(resourcetype, prop, 0, props[prop])
    spec[resourcetype] = txt

####

total_services = 0
total_operations = 0
total_unique_occurances = 0
with open("RESOURCE_COVERAGE.md", "w") as f:
    f.write("_This page is auto-generated by `util/generateCoverage.py`_\n\n")
    f.write("## CloudFormation Resource Coverage\n\n")
    f.write("**%s/%s (%s%%)** Resources Covered\n" % (
        len(set(cfn_occurances)) + len(cfn_exceptions),
        len(cfn_types),
        int(math.floor((len(set(cfn_occurances)) + len(cfn_exceptions)) * 100 / len(cfn_types)))
    ))

    f.write("\n| Type | Coverage |\n")
    f.write("| --- | --- |\n")

    for cfntype in sorted(cfn_types):
        coverage = ""
        if cfn_occurances.count(cfntype) > 0:
            coverage = ":thumbsup:"
        if cfntype in cfn_exceptions:
            coverage = cfn_exceptions[cfntype]
        f.write("| *%s* | %s |\n" % (cfntype, coverage))

    f.write("\n## Terraform Coverage\n\n")
    f.write("**%s/%s (%s%%)** Resources Covered\n" % (
        len(set(tf_occurances)) + len(tf_exceptions),
        len(tf_resources),
        int(math.floor((len(set(tf_occurances)) + len(tf_exceptions)) * 100 / len(tf_resources)))
    ))
    
    f.write("\n| Type | Coverage |\n")
    f.write("| --- | --- |\n")

    for tf_resource in sorted(tf_resources):
        coverage = ""
        if tf_occurances.count(tf_resource) > 0:
            coverage = ":thumbsup:"
        if tf_resource in tf_exceptions:
            coverage = tf_exceptions[tf_resource]
        f.write("| *%s* | %s |\n" % (tf_resource, coverage))

    f.write("\n## CloudFormation Property Coverage [BETA]\n\n")

    ospec = collections.OrderedDict(sorted(spec.items()))
    for k, v in ospec.items():
        f.write("#### %s\n\n```\n%s```\n\n" % (k, v))
