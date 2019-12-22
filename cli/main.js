#!/usr/bin/env node

var AWS = require("aws-sdk");
const fs = require('fs');
const util = require('util');
const path = require('path');
const process = require('process');
const deepmerge = require('deepmerge');
const cliargs = require('commander');
const cliprogress = require('cli-progress');
const logplease = require('logplease');
const _colors = require('colors');
const pjson = require('./package.json');

logplease.setLogLevel('NONE');
const awslog = logplease.create('AWS');
AWS.config.logger = awslog;

var cli_resources = [];

function blockUI() { }
function unblockUI() { }
function nav(str) {
    return str.replace(/\s/g, "").replace(/\,/g, "").replace(/\-/g, "").replace(/\&amp\;/g, "And");
}

function $(selector) { return new $obj(selector) }
$obj = function (selector) { };
$obj.prototype.bootstrapTable = function (action, data) {
    if (action == "append") {
        cli_resources = [...cli_resources, ...data];
    }
}
$.notify = function () { }

var region = process.env.AWS_DEFAULT_REGION || process.env.AWS_REGION || 'us-east-1';
var stack_parameters = [];
eval(fs.readFileSync(path.join(__dirname, 'deepmerge.js'), 'utf8'));
eval(fs.readFileSync(path.join(__dirname, 'mappings.js'), 'utf8'));
eval(fs.readFileSync(path.join(__dirname, 'datatables.js'), 'utf8'));

f2log = function(msg){};
f2trace = function(err){};

async function main(opts) {
    if (!opts.outputDebug && !opts.outputCloudformation && !opts.outputTerraform) {
        throw new Error('You must specify an output type');
    }

    const b1 = new cliprogress.SingleBar({
        format: _colors.cyan('{bar}') + '  {percentage}% ({value}/{total} services completed)',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: false
    });

    b1.start(sections.length, 0);

    await Promise.all(
        sections
        .map(section => {
            let dtname = 'updateDatatable' + nav(section.category) + nav(section.service);
            return eval(dtname);
        })
        .map(work => {
            return new Promise(async resolve => {
                try {
                    await work();
                } catch(err) {
                    awslog.warn(util.format("updateDatatable failed: %j", err));
                } finally {
                    b1.increment();
                    resolve();
                }
            });
        })
    );

    b1.stop();

    if (opts.sortOutput) {
        cli_resources = cli_resources.sort((a, b) => (a.f2id > b.f2id) ? 1 : -1);
    }

    if (opts.outputDebug) {
        fs.writeFile(opts.outputDebug, JSON.stringify(cli_resources, null, 4));
    }

    if (opts.outputCloudformation || opts.outputTerraform) {
        var output_objects = [];

        for (var i=0; i<cli_resources.length; i++) {
            if (opts.resourceFilter) {
                if (JSON.stringify(cli_resources[i]).includes(opts.resourceFilter)) {
                    output_objects.push({
                        'id': cli_resources[i].f2id,
                        'type': cli_resources[i].f2type,
                        'data': cli_resources[i].f2data,
                        'region': cli_resources[i].f2region
                    });
                }
            } else {
                output_objects.push({
                    'id': cli_resources[i].f2id,
                    'type': cli_resources[i].f2type,
                    'data': cli_resources[i].f2data,
                    'region': cli_resources[i].f2region
                });
            }
        }

        var tracked_resources = performF2Mappings(output_objects);
        var mapped_outputs = compileOutputs(tracked_resources, null);

        if (opts.outputCloudformation) {
            fs.writeFileSync(opts.outputCloudformation, mapped_outputs['cfn']);
        }

        if (opts.outputTerraform) {
            fs.writeFileSync(opts.outputTerraform, mapped_outputs['tf']);
        }
    }
}

let validation = false;
cliargs
    .version(pjson.version)
    .command('generate')
    .description('generates outputs and writes them to the specified file')
    .option('--output-cloudformation <filename>', 'filename for CloudFormation output')
    .option('--output-terraform <filename>', 'filename for Terraform output')
    .option('--output-debug <filename>', 'filename for debug output (full)')
    .option('--resource-filter <value>', 'search filter for discovered resources')
    .option('--sort-output', 'sort resources by their ID before outputting')
    .action(opts => {
        validation = true;
        main(opts);
    });

cliargs.parse(process.argv);
if (!validation) {
    cliargs.help();
}
