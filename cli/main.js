var AWS = require("aws-sdk");
const fs = require('fs');
const deepmerge = require('deepmerge');
const cliargs = require('commander');
const cliprogress = require('cli-progress');
const logplease = require('logplease');
const _colors = require('colors');

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

eval(require('fs').readFileSync(__dirname + '/../js/deepmerge.js', 'utf8'));
eval(require('fs').readFileSync(__dirname + '/../js/mappings.js', 'utf8'));
eval(require('fs').readFileSync(__dirname + '/../js/datatables.js', 'utf8'));

f2log = function(msg){};
f2trace = function(err){};

var completed_sections = [];

async function main(cliargs) {
    sections.forEach(section => {
        let dtname = 'updateDatatable' + nav(section.category) + nav(section.service);
        eval("(async () => { try { await " + dtname + "(); } finally { completed_sections.push('" + section + "'); } })()");
    });

    const b1 = new cliprogress.SingleBar({
        format: _colors.cyan('{bar}') + '  {percentage}% ({value}/{total} services completed)',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: true
    });
    
    b1.start(sections.length, 0);
    b1.update(20);

    while (completed_sections.length < sections.length) {
        await sleep(1000);
        b1.update(completed_sections.length);
    }

    b1.stop();

    if (cliargs.outputDebug) {
        fs.writeFile(cliargs.outputDebug, JSON.stringify(cli_resources, null, 4), (err) => {
            if (err) throw err;
        });
    }

    if (cliargs.outputCloudformation || cliargs.outputTerraform) {
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

        if (cliargs.outputCloudformation) {
            fs.writeFile(cliargs.outputCloudformation, mapped_outputs['cfn'], (err) => {
                if (err) throw err;
            });
        }

        if (cliargs.outputTerraform) {
            fs.writeFile(cliargs.outputTerraform, mapped_outputs['tf'], (err) => {
                if (err) throw err;
            });
        }
    }
}

cliargs
    .option('--output-cloudformation <filename>', 'filename for CloudFormation output')
    .option('--output-terraform <filename>', 'filename for Terraform output')
    .option('--output-debug <filename>', 'filename for debug output (full)');

cliargs.parse(process.argv);

main(cliargs);
