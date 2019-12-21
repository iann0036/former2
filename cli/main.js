#!/usr/bin/env node

var AWS = require("aws-sdk");
const fs = require('fs');
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

eval(require('fs').readFileSync(__dirname + '/deepmerge.js', 'utf8'));
eval(require('fs').readFileSync(__dirname + '/mappings.js', 'utf8'));
eval(require('fs').readFileSync(__dirname + '/datatables.js', 'utf8'));

f2log = function(msg){};
f2trace = function(err){};

var completed_sections = [];

async function main(opts) {
    if (!opts.outputDebug && !opts.outputCloudformation && !opts.outputTerraform) {
        console.warn("You must specify an output type");
        return;
    }

    sections.forEach(section => {
        let dtname = 'updateDatatable' + nav(section.category) + nav(section.service);
        eval("(async () => { try { await " + dtname + "(); } finally { completed_sections.push('" + section + "'); } })()");
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

    if (opts.outputDebug) {
        fs.writeFile(opts.outputDebug, JSON.stringify(cli_resources, null, 4), (err) => {
            if (err) throw err;
        });
    }

    if (opts.outputCloudformation || opts.outputTerraform) {
        var output_objects = [];

        for (var i=0; i<cli_resources.length; i++) {
            output_objects.push({
                'id': cli_resources[i].f2id,
                'type': cli_resources[i].f2type,
                'data': cli_resources[i].f2data,
                'region': cli_resources[i].f2region
            });
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
    .action(opts => {
        validaction = true;
        main(opts);
    });

cliargs.parse(process.argv);
if (!validaction) {
    cliargs.help();
}
