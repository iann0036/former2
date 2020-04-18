import boto3
import pprint
import json
import re

cfnclient = boto3.client('cloudformation')

cfn_types = []
with open("util/cfnspec.json", "r") as f:
    cfn_spec = json.loads(f.read())['ResourceTypes']

for cfntype, _ in cfn_spec.items():
    cfn_types.append(cfntype)

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
            print(cfntype)
            print(results[0])
        else:
            #print(cfntype)
            #print("Not importable")
            pass