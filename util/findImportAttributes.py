import boto3
import pprint
import json
import re
import sys

cfnclient = boto3.client('cloudformation', region_name = "us-east-1")

cfn_types = [
    'AWS::ApiGatewayV2::VpcLink',
    'AWS::ImageBuilder::ImagePipeline',
    'AWS::ImageBuilder::ImageRecipe',
    'AWS::ImageBuilder::Component',
    'AWS::ImageBuilder::DistributionConfiguration',
    'AWS::ImageBuilder::InfrastructureConfiguration',
    'AWS::GroundStation::MissionProfile',
    'AWS::GroundStation::Config',
    'AWS::GroundStation::DataflowEndpointGroup'
]
with open("util/cfnspec.json", "r") as f:
    cfn_spec = json.loads(f.read())['ResourceTypes']

for cfntype, _ in cfn_spec.items():
    cfn_types.append(cfntype)

cfn_types = list(set(cfn_types)) # dedup
cfn_types.sort()

jsonobj = {}

if len(sys.argv) == 2:
    cfn_types = [
        sys.argv[1]
    ]

for cfntype in cfn_types:
    try:
        cfnclient.create_change_set(
            StackName='importstack',
            TemplateBody='''
        Resources:
            x:
                Type: {}
        '''.format(cfntype),
            ChangeSetName='importchangeset',
            ChangeSetType='IMPORT',
            ResourcesToImport=[
                {
                    'ResourceType': cfntype,
                    'LogicalResourceId': 'x',
                    'ResourceIdentifier': {
                        'x': 'x'
                    }
                },
            ]
        )
    except Exception as e:
        p = re.compile('Expected \[([a-zA-Z0-9]+)(?:, )?([a-zA-Z0-9]+)?(?:, )?([a-zA-Z0-9]+)?(?:, )?([a-zA-Z0-9]+)?\]')
        results = p.findall(str(e))
        if len(results) > 0:
            print(cfntype, results[0])
            importprops = list(results[0])
            while importprops[-1] == "":
                importprops.pop()

            jsonobj[cfntype] = {
                'importProperties': importprops
            }
        else:
            #print(cfntype)
            #print("Not importable")
            pass

print("")
print(json.dumps(jsonobj, indent=4, sort_keys=True))
