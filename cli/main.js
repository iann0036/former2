#!/usr/bin/env node

var AWS = require("aws-sdk");
const fs = require('fs');
const util = require('util');
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var region = 'ap-southeast-2';
var stack_parameters = [];

eval(fs.readFileSync(__dirname + '/deepmerge.js', 'utf8'));
eval(fs.readFileSync(__dirname + '/mappings.js', 'utf8'));
eval(fs.readFileSync(__dirname + '/datatables.js', 'utf8'));

f2log = function(msg){};
f2trace = function(err){};

var completed_sections = [];

async function main(opts) {
    if (!opts.outputDebug && !opts.outputCloudformation && !opts.outputTerraform) {
        console.warn("You must specify an output type");
        return;
    }

    sections.forEach(async section => {
        let dtname = 'updateDatatable' + nav(section.category) + nav(section.service);
        let dtwork = eval(dtname);
        try {
            await dtwork();
        } catch(err) {
            awslog.warn(util.format("updateDatatable failed: %j", err));
        } finally {
            completed_sections.push(section);
        }
    });

    const b1 = new cliprogress.SingleBar({
        format: _colors.cyan('{bar}') + '  {percentage}% ({value}/{total} services completed)',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: false
    });
    
    b1.start(sections.length, 0);

    while (completed_sections.length < sections.length) {
        await sleep(1000);
        b1.update(completed_sections.length);
    }

    b1.stop();

    if (opts.sortOutput) {
        cli_resources = cli_resources.sort((a, b) => (a.f2id > b.f2id) ? 1 : -1);
    }

    if (opts.outputDebug) {
        fs.writeFile(opts.outputDebug, JSON.stringify(cli_resources, null, 4), (err) => {
            if (err) throw err;
        });
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
            fs.writeFile(opts.outputCloudformation, mapped_outputs['cfn'], (err) => {
                if (err) throw err;
            });
        }

        if (opts.outputTerraform) {
            fs.writeFile(opts.outputTerraform, mapped_outputs['tf'], (err) => {
                if (err) throw err;
            });
        }
    }
}

var validaction = false;
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
        validaction = true;
        main(opts);
    });

cliargs.parse(process.argv);
if (!validaction) {
    cliargs.help();
}
