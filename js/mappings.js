// Logging functions
var f2log = function (msg) { console.log(msg); }
var f2trace = function (msg) { console.trace(msg); }

/* ========================================================================== */
// Mapping Helper Functions
/* ========================================================================== */

var outputs = [];
var tracked_resources = [];
var global_used_refs = {};
var cfnspacing = "    ";
var logicalidstrategy = "longtypeprefixoptionalindexsuffix";
var service_mapping_functions = [];
var tracked_relationships = {};
var include_default_resources = false;

function getLogicalToPhysicalIdMap() {
    return global_used_refs
}

function MD5(e) {
    function h(a, b) {
        var c, d, e, f, g;
        e = a & 2147483648;
        f = b & 2147483648;
        c = a & 1073741824;
        d = b & 1073741824;
        g = (a & 1073741823) + (b & 1073741823);
        return c & d ? g ^ 2147483648 ^ e ^ f : c | d ? g & 1073741824 ? g ^ 3221225472 ^ e ^ f : g ^ 1073741824 ^ e ^ f : g ^ e ^ f
    }

    function k(a, b, c, d, e, f, g) {
        a = h(a, h(h(b & c | ~b & d, e), g));
        return h(a << f | a >>> 32 - f, b)
    }

    function l(a, b, c, d, e, f, g) {
        a = h(a, h(h(b & d | c & ~d, e), g));
        return h(a << f | a >>> 32 - f, b)
    }

    function m(a, b, d, c, e, f, g) {
        a = h(a, h(h(b ^ d ^ c, e), g));
        return h(a << f | a >>> 32 - f, b)
    }

    function n(a, b, d, c, e, f, g) {
        a = h(a, h(h(d ^ (b | ~c), e), g));
        return h(a << f | a >>> 32 - f, b)
    }

    function p(a) {
        var b = "",
            d = "",
            c;
        for (c = 0; 3 >= c; c++) d = a >>> 8 * c & 255, d = "0" + d.toString(16), b += d.substr(d.length - 2, 2);
        return b
    }
    var f = [],
        q, r, s, t, a, b, c, d;
    e = function (a) {
        a = a.replace(/\r\n/g, "\n");
        for (var b = "", d = 0; d < a.length; d++) {
            var c = a.charCodeAt(d);
            128 > c ? b += String.fromCharCode(c) : (127 < c && 2048 > c ? b += String.fromCharCode(c >> 6 | 192) : (b += String.fromCharCode(c >> 12 | 224), b += String.fromCharCode(c >> 6 & 63 | 128)), b += String.fromCharCode(c & 63 | 128))
        }
        return b
    }(e);
    f = function (b) {
        var a, c = b.length;
        a = c + 8;
        for (var d = 16 * ((a - a % 64) / 64 + 1), e = Array(d - 1), f = 0, g = 0; g < c;) a = (g - g % 4) / 4, f = g % 4 * 8, e[a] |= b.charCodeAt(g) << f, g++;
        a = (g - g % 4) / 4;
        e[a] |= 128 << g % 4 * 8;
        e[d - 2] = c << 3;
        e[d - 1] = c >>> 29;
        return e
    }(e);
    a = 1732584193;
    b = 4023233417;
    c = 2562383102;
    d = 271733878;
    for (e = 0; e < f.length; e += 16) q = a, r = b, s = c, t = d, a = k(a, b, c, d, f[e + 0], 7, 3614090360), d = k(d, a, b, c, f[e + 1], 12, 3905402710), c = k(c, d, a, b, f[e + 2], 17, 606105819), b = k(b, c, d, a, f[e + 3], 22, 3250441966), a = k(a, b, c, d, f[e + 4], 7, 4118548399), d = k(d, a, b, c, f[e + 5], 12, 1200080426), c = k(c, d, a, b, f[e + 6], 17, 2821735955), b = k(b, c, d, a, f[e + 7], 22, 4249261313), a = k(a, b, c, d, f[e + 8], 7, 1770035416), d = k(d, a, b, c, f[e + 9], 12, 2336552879), c = k(c, d, a, b, f[e + 10], 17, 4294925233), b = k(b, c, d, a, f[e + 11], 22, 2304563134), a = k(a, b, c, d, f[e + 12], 7, 1804603682), d = k(d, a, b, c, f[e + 13], 12, 4254626195), c = k(c, d, a, b, f[e + 14], 17, 2792965006), b = k(b, c, d, a, f[e + 15], 22, 1236535329), a = l(a, b, c, d, f[e + 1], 5, 4129170786), d = l(d, a, b, c, f[e + 6], 9, 3225465664), c = l(c, d, a, b, f[e + 11], 14, 643717713), b = l(b, c, d, a, f[e + 0], 20, 3921069994), a = l(a, b, c, d, f[e + 5], 5, 3593408605), d = l(d, a, b, c, f[e + 10], 9, 38016083), c = l(c, d, a, b, f[e + 15], 14, 3634488961), b = l(b, c, d, a, f[e + 4], 20, 3889429448), a = l(a, b, c, d, f[e + 9], 5, 568446438), d = l(d, a, b, c, f[e + 14], 9, 3275163606), c = l(c, d, a, b, f[e + 3], 14, 4107603335), b = l(b, c, d, a, f[e + 8], 20, 1163531501), a = l(a, b, c, d, f[e + 13], 5, 2850285829), d = l(d, a, b, c, f[e + 2], 9, 4243563512), c = l(c, d, a, b, f[e + 7], 14, 1735328473), b = l(b, c, d, a, f[e + 12], 20, 2368359562), a = m(a, b, c, d, f[e + 5], 4, 4294588738), d = m(d, a, b, c, f[e + 8], 11, 2272392833), c = m(c, d, a, b, f[e + 11], 16, 1839030562), b = m(b, c, d, a, f[e + 14], 23, 4259657740), a = m(a, b, c, d, f[e + 1], 4, 2763975236), d = m(d, a, b, c, f[e + 4], 11, 1272893353), c = m(c, d, a, b, f[e + 7], 16, 4139469664), b = m(b, c, d, a, f[e + 10], 23, 3200236656), a = m(a, b, c, d, f[e + 13], 4, 681279174), d = m(d, a, b, c, f[e + 0], 11, 3936430074), c = m(c, d, a, b, f[e + 3], 16, 3572445317), b = m(b, c, d, a, f[e + 6], 23, 76029189), a = m(a, b, c, d, f[e + 9], 4, 3654602809), d = m(d, a, b, c, f[e + 12], 11, 3873151461), c = m(c, d, a, b, f[e + 15], 16, 530742520), b = m(b, c, d, a, f[e + 2], 23, 3299628645), a = n(a, b, c, d, f[e + 0], 6, 4096336452), d = n(d, a, b, c, f[e + 7], 10, 1126891415), c = n(c, d, a, b, f[e + 14], 15, 2878612391), b = n(b, c, d, a, f[e + 5], 21, 4237533241), a = n(a, b, c, d, f[e + 12], 6, 1700485571), d = n(d, a, b, c, f[e + 3], 10, 2399980690), c = n(c, d, a, b, f[e + 10], 15, 4293915773), b = n(b, c, d, a, f[e + 1], 21, 2240044497), a = n(a, b, c, d, f[e + 8], 6, 1873313359), d = n(d, a, b, c, f[e + 15], 10, 4264355552), c = n(c, d, a, b, f[e + 6], 15, 2734768916), b = n(b, c, d, a, f[e + 13], 21, 1309151649), a = n(a, b, c, d, f[e + 4], 6, 4149444226), d = n(d, a, b, c, f[e + 11], 10, 3174756917), c = n(c, d, a, b, f[e + 2], 15, 718787259), b = n(b, c, d, a, f[e + 9], 21, 3951481745), a = h(a, q), b = h(b, r), c = h(c, s), d = h(d, t);
    return (p(a) + p(b) + p(c) + p(d)).toLowerCase()
};

function ensureInitDeclaredJs(service, region) {
    if (!declared_services['js'].includes(service)) {
        var mappedservice = mapServiceJs(service);
        declared_services['js'].push(service);
        return `

var ${service} = new AWS.${mappedservice}({region: '${region}'});
`;
    }
    return '';
}

function ensureInitDeclaredBoto3(service, region) {
    if (!declared_services['boto3'].includes(service)) {
        declared_services['boto3'].push(service);
        return `
${service}_client = boto3.client('${service}', region_name='${region}')

`;
    }
    return '';
}

function ensureInitDeclaredGo(service, region) {
    if (!declared_services['go'].includes(service)) {
        var mappedservice = mapServiceJs(service).toLowerCase().replace(/\-/g, '');
        declared_services['go'].push(service);
        return `
    ${service}svc := ${mappedservice}.New(session.New(&aws.Config{Region: aws.String("${region}")}))

`;
    }
    return '';
}

function processTfParameter(param, spacing, keyname, index, tracked_resources) {
    var paramitems = [];

    if (param === undefined || param === null || (Array.isArray(param) && param.length == 0))
        return undefined;
    if (typeof param == "boolean") {
        if (param)
            return 'true';
        return 'false';
    }
    if (typeof param == "number") {
        for (var i = 0; i < tracked_resources.length; i++) { // correlate
            if (tracked_resources[i].returnValues && tracked_resources[i].returnValues.Terraform) {
                for (var attr_name in tracked_resources[i].returnValues.Terraform) {
                    if (tracked_resources[i].returnValues.Terraform[attr_name] == param) {
                        if (circularReferenceFound(i, index, 'tf')) {
                            continue;
                        }
                        tracked_relationships['tf'].push({
                            'sourceIndex': index,
                            'destinationIndex': i,
                            'parameter': param
                        });
                        return "\"${" + tracked_resources[i].terraformType + "." + tracked_resources[i].logicalId + "." + attr_name + "}\""
                    }
                }
            }
        }

        return param;
    }
    if (typeof param == "string") {
        if (param.startsWith("!Ref ") || param.startsWith("!GetAtt ")) {
            return undefined;
        }

        for (var i = 0; i < tracked_resources.length; i++) { // correlate
            if (tracked_resources[i].returnValues && tracked_resources[i].returnValues.Terraform) {
                for (var attr_name in tracked_resources[i].returnValues.Terraform) {
                    if (tracked_resources[i].returnValues.Terraform[attr_name] == param) {
                        if (circularReferenceFound(i, index, 'tf')) {
                            continue;
                        }
                        tracked_relationships['tf'].push({
                            'sourceIndex': index,
                            'destinationIndex': i,
                            'parameter': param
                        });
                        return "\"${" + tracked_resources[i].terraformType + "." + tracked_resources[i].logicalId + "." + attr_name + "}\""
                    }
                }
            }
        }

        var string_return = param;

        string_return = string_return.replace(/\$\{/g, `$$$$\{`); // no questions

        if (string_return.includes("\n")) {
            string_return = "<<EOF\n" + string_return + "\nEOF";
            return string_return;
        }

        return doubleQuotedString(string_return);
    }
    if (param instanceof Set) {
        if (param.size == 0) {
            return '';
        }

        for (let paramitem of param) {
            console.log(paramitem);
            paramitems.push(processTfParameter(paramitem, spacing, keyname, index, tracked_resources));
        };

        return `
` + ' '.repeat(spacing) + keyname + " " + paramitems.join(`
` + ' '.repeat(spacing) + keyname + " ") + `
` + ' '.repeat(spacing);
    }
    if (param instanceof Map) {
        if (param.size == 0) {
            return "{}";
        }

        Array.from(param.keys()).forEach(function (key) {
            var subvalue = processTfParameter(param.get(key), spacing + 4, key, index, tracked_resources);
            if (typeof subvalue !== "undefined") {
                if (param.get(key) instanceof Set) {
                    paramitems.push(subvalue);
                } else if (subvalue[0] == '{') {
                    paramitems.push(key + " " + subvalue);
                } else {
                    if (key.match(/^[0-9]+$/g)) {
                        key = "\"" + key + "\"";
                    }
                    paramitems.push(key + " = " + subvalue);
                }
            }
        });

        return `{
` + ' '.repeat(spacing + 4) + paramitems.join(`
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + `}`;
    }
    if (Array.isArray(param)) {
        if (param.length == 0) {
            return '[]';
        }

        param.forEach(paramitem => {
            paramitems.push(processTfParameter(paramitem, spacing + 4, keyname, index, tracked_resources));
        });

        return `[
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + `]`;
    }
    if (typeof param == "object") {
        if (Object.keys(param).length === 0 && param.constructor === Object) {
            return "{}";
        }

        Object.keys(param).forEach(function (key) {
            var subvalue = processTfParameter(param[key], spacing + 4, key, index, tracked_resources);
            if (typeof subvalue !== "undefined") {
                if (param[key] instanceof Set) {
                    paramitems.push(subvalue);
                } else if (subvalue[0] == '{') {
                    paramitems.push(key + " " + subvalue);
                } else {
                    if (key.match(/^[0-9]+$/g)) {
                        key = "\"" + key + "\"";
                    }
                    paramitems.push(key + " = " + subvalue);
                }
            }
        });

        return `{
` + ' '.repeat(spacing + 4) + paramitems.join(`
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + `}`;
    }

    return undefined;
}

function processPulumiParameter(param, spacing, index, tracked_resources) {
    var paramitems = [];

    if (param === undefined || param === null || (Array.isArray(param) && param.length == 0))
        return undefined;
    if (typeof param == "boolean") {
        if (param)
            return 'true';
        return 'false';
    }
    if (typeof param == "number") {
        for (var i = 0; i < tracked_resources.length; i++) { // correlate
            if (tracked_resources[i].returnValues && tracked_resources[i].returnValues.Terraform) {
                for (var attr_name in tracked_resources[i].returnValues.Terraform) {
                    if (tracked_resources[i].returnValues.Terraform[attr_name] == param) {
                        if (circularReferenceFound(i, index, 'pulumi')) {
                            continue;
                        }
                        return tracked_resources[i].logicalId.toLowerCase() + "." + attr_name;
                    }
                }
            }
        }

        return param;
    }
    if (typeof param == "string") {
        if (param.startsWith("!Ref ") || param.startsWith("!GetAtt ")) {
            return undefined;
        }

        for (var i = 0; i < tracked_resources.length; i++) { // correlate
            if (tracked_resources[i].returnValues && tracked_resources[i].returnValues.Terraform) {
                for (var attr_name in tracked_resources[i].returnValues.Terraform) {
                    if (tracked_resources[i].returnValues.Terraform[attr_name] == param) {
                        if (circularReferenceFound(i, index, 'pulumi')) {
                            continue;
                        }
                        return tracked_resources[i].logicalId.toLowerCase() + "." + attr_name;
                    }
                }
            }
        }

        var string_return = param;

        if (string_return.includes("\n")) {
            string_return = "\`\n" + string_return + "\n\`";
            return string_return;
        }

        return doubleQuotedString(string_return);
    }
    if (param instanceof Set) {
        param = Array.from(param);
    }
    if (Array.isArray(param)) {
        if (param.length == 0) {
            return '[]';
        }

        param.forEach(paramitem => {
            paramitems.push(processPulumiParameter(paramitem, spacing + 4, index, tracked_resources));
        });

        return `[
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + `]`;
    }
    if (typeof param == "object") {
        if (Object.keys(param).length === 0 && param.constructor === Object) {
            return "{}";
        }

        Object.keys(param).forEach(function (key) {
            var subvalue = processPulumiParameter(param[key], spacing + 4, index, tracked_resources);
            if (typeof subvalue !== "undefined") {
                if (subvalue[0] == '{') {
                    paramitems.push(tfToPulumiProp(key) + ": " + subvalue);
                } else {
                    if (key.match(/^[0-9]+$/g)) {
                        key = "\"" + key + "\"";
                    }

                    try {
                        paramitems.push(tfToPulumiProp(key) + ": " + subvalue);
                    } catch(err) {
                        $.notify({
                            icon: 'font-icon font-icon-danger',
                            title: '<strong>Key Parsing Error</strong>',
                            message: JSON.stringify(param) + " " + err.toString()
                        }, {
                            type: 'danger'
                        });
                        f2log(JSON.stringify(param));
                        f2trace(err);
                    }
                }
            }
        });

        return `{
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + `}`;
    }

    return undefined;
}

function processCdktfParameter(param, spacing, index, tracked_resources) {
    var paramitems = [];

    if (param === undefined || param === null || (Array.isArray(param) && param.length == 0))
        return undefined;
    if (typeof param == "boolean") {
        if (param)
            return 'true';
        return 'false';
    }
    if (typeof param == "number") {
        for (var i = 0; i < tracked_resources.length; i++) { // correlate
            if (tracked_resources[i].returnValues && tracked_resources[i].returnValues.Terraform) {
                for (var attr_name in tracked_resources[i].returnValues.Terraform) {
                    if (tracked_resources[i].returnValues.Terraform[attr_name] == param) {
                        if (circularReferenceFound(i, index, 'cdktf')) {
                            continue;
                        }
                        return tracked_resources[i].logicalId.toLowerCase() + "." + attr_name;
                    }
                }
            }
        }

        return param;
    }
    if (typeof param == "string") {
        if (param.startsWith("!Ref ") || param.startsWith("!GetAtt ")) {
            return undefined;
        }

        for (var i = 0; i < tracked_resources.length; i++) { // correlate
            if (tracked_resources[i].returnValues && tracked_resources[i].returnValues.Terraform) {
                for (var attr_name in tracked_resources[i].returnValues.Terraform) {
                    if (tracked_resources[i].returnValues.Terraform[attr_name] == param) {
                        if (circularReferenceFound(i, index, 'cdktf')) {
                            continue;
                        }
                        return tracked_resources[i].logicalId.toLowerCase() + "." + attr_name;
                    }
                }
            }
        }

        var string_return = param;

        if (string_return.includes("\n")) {
            string_return = "\`\n" + string_return + "\n\`";
            return string_return;
        }

        return doubleQuotedString(string_return);
    }
    if (param instanceof Set) {
        param = Array.from(param);
    }
    if (Array.isArray(param)) {
        if (param.length == 0) {
            return '[]';
        }

        param.forEach(paramitem => {
            paramitems.push(processCdktfParameter(paramitem, spacing + 4, index, tracked_resources));
        });

        return `[
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + `]`;
    }
    if (typeof param == "object") {
        if (Object.keys(param).length === 0 && param.constructor === Object) {
            return "{}";
        }

        Object.keys(param).forEach(function (key) {
            var subvalue = processCdktfParameter(param[key], spacing + 4, index, tracked_resources);
            if (typeof subvalue !== "undefined") {
                if (subvalue[0] == '{') {
                    paramitems.push(tfToCdktfProp(key) + ": " + subvalue);
                } else {
                    if (key.match(/^[0-9]+$/g)) {
                        key = "\"" + key + "\"";
                    }
                    paramitems.push(tfToCdktfProp(key) + ": " + subvalue);
                }
            }
        });

        return `[{
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + `}]`;
    }

    return undefined;
}

function circularReferenceFind(checkindex, references, outputtype) {
    references.push(checkindex);

    tracked_relationships[outputtype].forEach(tracked_relationship => {
        if (
            tracked_relationship.sourceIndex == checkindex &&
            tracked_relationship.destinationIndex != checkindex && // shouldn't happen? just checking..
            !references.includes(tracked_relationship.destinationIndex)
        ) {
            references = circularReferenceFind(tracked_relationship.destinationIndex, references, outputtype);
        }
    });

    return references;
}

function circularReferenceFound(checkindex, baseindex, outputtype) {
    if (checkindex == baseindex) {
        return true;
    }

    if (tracked_resources.length > 500) { // circuit breaker
        return false;
    }

    var mapped_output_type = 'cfn';
    if (['tf', 'pulumi', 'cdktf'].includes(outputtype)) {
        mapped_output_type = 'tf';
    }

    if (circularReferenceFind(checkindex, [], mapped_output_type).includes(baseindex)) {
        return true;
    }

    return false;
}

function processCfnParameter(param, spacing, index, tracked_resources) {
    var paramitems = [];

    if (param === undefined || param === null || (Array.isArray(param) && param.length == 0))
        return undefined;
    if (typeof param == "boolean") {
        if (param)
            return 'true';
        return 'false';
    }
    if (typeof param == "number") {
        for (var i = 0; i < tracked_resources.length; i++) { // correlate
            if (tracked_resources[i].returnValues) {
                if (tracked_resources[i].returnValues.Ref == param) {
                    if (circularReferenceFound(i, index, 'cfn')) {
                        continue;
                    }
                    tracked_relationships['cfn'].push({
                        'sourceIndex': index,
                        'destinationIndex': i,
                        'parameter': param
                    });
                    return "!Ref " + tracked_resources[i].logicalId;
                }
                if (tracked_resources[i].returnValues.GetAtt) {
                    for (var attr_name in tracked_resources[i].returnValues.GetAtt) {
                        if (tracked_resources[i].returnValues.GetAtt[attr_name] === param) {
                            if (circularReferenceFound(i, index, 'cfn')) {
                                continue;
                            }
                            tracked_relationships['cfn'].push({
                                'sourceIndex': index,
                                'destinationIndex': i,
                                'parameter': param
                            });
                            return "!GetAtt " + tracked_resources[i].logicalId + "." + attr_name;
                        }
                    }
                }
            }
        }
        for (var sp_index in stack_parameters) {
            var stack_parameter = stack_parameters[sp_index];
            if (stack_parameter.default_value && stack_parameter.default_value != "" && stack_parameter.default_value.match(/^[0-9]+$/g)) {
                if (parseInt(stack_parameter.default_value) == param) {
                    return "!Ref " + stack_parameter.name;
                }
            }
        }

        return param;
    }
    if (typeof param == "string") {
        if (param.startsWith("!Ref ") || param.startsWith("!GetAtt ")) {
            return `${param}`;
        }

        var pre_return_str = "";
        for (var i = 0; i < tracked_resources.length; i++) { // correlate
            if (tracked_resources[i].returnValues && param != "") {
                if (
                    tracked_resources[i].returnValues.Ref == param &&
                    tracked_resources[i].returnValues.Ref != "" &&
                    tracked_resources[i].returnValues.Ref != []
                ) {
                    if (circularReferenceFound(i, index, 'cfn')) {
                        continue;
                    }
                    tracked_relationships['cfn'].push({
                        'sourceIndex': index,
                        'destinationIndex': i,
                        'parameter': param
                    });
                    return "!Ref " + tracked_resources[i].logicalId;
                }
                if (tracked_resources[i].returnValues.GetAtt) {
                    for (var attr_name in tracked_resources[i].returnValues.GetAtt) {
                        if (
                            tracked_resources[i].returnValues.GetAtt[attr_name] === param &&
                            tracked_resources[i].returnValues.GetAtt[attr_name] != "" &&
                            tracked_resources[i].returnValues.GetAtt[attr_name] != []
                        ) {
                            if (circularReferenceFound(i, index, 'cfn')) {
                                continue;
                            }
                            tracked_relationships['cfn'].push({
                                'sourceIndex': index,
                                'destinationIndex': i,
                                'parameter': param
                            });
                            return "!GetAtt " + tracked_resources[i].logicalId + "." + attr_name;
                        }
                    }
                }
                if (
                    param.includes(tracked_resources[i].returnValues.Ref) &&
                    tracked_resources[i].returnValues.Ref != "" &&
                    tracked_resources[i].returnValues.Ref != []
                ) {
                    if (circularReferenceFound(i, index, 'cfn')) {
                        continue;
                    }
                    tracked_relationships['cfn'].push({
                        'sourceIndex': index,
                        'destinationIndex': i,
                        'parameter': param
                    });
                    for (var j = 0; j < 10; j++) { // replace many
                        pre_return_str = "!Sub ";
                        var replacement_proposed = param.replace(tracked_resources[i].returnValues.Ref, "${" + tracked_resources[i].logicalId + "}");
                        if (replacement_proposed.match(/\${[^}]*\${/g)) {
                            break
                        }
                        param = replacement_proposed;
                    }
                }
                if (tracked_resources[i].returnValues.GetAtt) {
                    for (var attr_name in tracked_resources[i].returnValues.GetAtt) {
                        if (
                            param.includes(tracked_resources[i].returnValues.GetAtt[attr_name]) &&
                            tracked_resources[i].returnValues.GetAtt[attr_name] != "" &&
                            tracked_resources[i].returnValues.GetAtt[attr_name] != []
                        ) {
                            if (circularReferenceFound(i, index, 'cfn')) {
                                continue;
                            }
                            tracked_relationships['cfn'].push({
                                'sourceIndex': index,
                                'destinationIndex': i,
                                'parameter': param
                            });
                            for (var j = 0; j < 10; j++) { // replace many
                                pre_return_str = "!Sub ";
                                var replacement_proposed = param.replace(tracked_resources[i].returnValues.GetAtt[attr_name], "${" + tracked_resources[i].logicalId + "." + attr_name + "}");
                                if (replacement_proposed.match(/\${[^}]*\${/g)) {
                                    break
                                }
                                param = replacement_proposed;
                            }
                        }
                    }
                }
            }
        }
        for (var sp_index in stack_parameters) {
            var stack_parameter = stack_parameters[sp_index];
            if (stack_parameter.default_value && stack_parameter.default_value != "") {
                if (stack_parameter.default_value.toString() == param) {
                    return "!Ref " + stack_parameter.name;
                } else if (
                    param.includes(stack_parameter.default_value.toString())
                ) {
                    for (var j = 0; j < 10; j++) { // replace many
                        pre_return_str = "!Sub ";
                        var replacement_proposed = param.replace(stack_parameter.default_value.toString(), "${" + stack_parameter.name + "}");
                        if (replacement_proposed.match(/\${[^}]*\${/g)) {
                            break
                        }
                        param = replacement_proposed;
                    }
                }
            }
        }

        var string_return = param;

        if (string_return.includes("\n")) {
            string_return = "|\n" + ' '.repeat(spacing + 4) + string_return.replace(/\n/g, `\n` + ' '.repeat(spacing + 4));
            return pre_return_str + string_return;
        }

        return pre_return_str + doubleQuotedString(string_return);
    }
    if (param instanceof Set) {
        param = Array.from(param);
    }
    if (Array.isArray(param)) {
        if (param.length == 0) {
            return '[]';
        }

        param.forEach(paramitem => {
            paramitems.push(processCfnParameter(paramitem, spacing, index, tracked_resources));
        });

        if (cfnspacing.length == 4) {
            return `
` + ' '.repeat(spacing + 2) + "- " + paramitems.join(`
` + ' '.repeat(spacing + 2) + "- ");
        }

        return `
` + ' '.repeat(spacing) + "- " + paramitems.join(`
` + ' '.repeat(spacing) + "- ");
    }
    if (typeof param == "object") {
        if (Object.keys(param).length === 0 && param.constructor === Object) {
            return "{}";
        }

        Object.keys(param).forEach(function (key) {
            var subvalue = processCfnParameter(param[key], spacing + cfnspacing.length, index, tracked_resources);
            if (typeof subvalue !== "undefined") {
                if (!key.match(/^[a-zA-Z0-9-_]+$/g)) {
                    key = `"${key.replace(/"/g, "\\\"")}"`;
                }
                paramitems.push(key + ": " + subvalue);
            }
        });

        if (paramitems.length < 1) {
            return "{}";
        }

        return `
` + ' '.repeat(spacing + cfnspacing.length) + paramitems.join(`
` + ' '.repeat(spacing + cfnspacing.length));
    }

    return undefined;
}

function processCdkParameter(param, spacing, index, tracked_resources) {
    var paramitems = [];

    if (param === undefined || param === null || (Array.isArray(param) && param.length == 0))
        return undefined;
    if (typeof param == "boolean") {
        if (iaclangselect == "python") {
            if (param)
                return "True";
            return "False";
        }
        if (param)
            return "true";
        return "false";
    }
    if (typeof param == "number")
        return param;
    if (typeof param == "string") {
        if (param.startsWith("!Ref ") || param.startsWith("!GetAtt ")) {
            return undefined; // TODO: Fix this
        }

        for (var i = 0; i < tracked_resources.length; i++) { // correlate
            if (tracked_resources[i].returnValues && param != "") {
                if (tracked_resources[i].returnValues.Ref == param) {
                    if (circularReferenceFound(i, index, 'cdk')) {
                        continue;
                    }
                    if (iaclangselect == "python") {
                        return tracked_resources[i].logicalId.toLowerCase() + ".ref";
                    } else if (iaclangselect == "java") {
                        return lcfirststr(tracked_resources[i].logicalId) + ".getRef()";
                    } else if (iaclangselect == "dotnet") {
                        return tracked_resources[i].logicalId.toLowerCase() + ".Ref";
                    }
                    return tracked_resources[i].logicalId + ".ref";
                }
                if (tracked_resources[i].returnValues.GetAtt) {
                    for (var attr_name in tracked_resources[i].returnValues.GetAtt) {
                        if (tracked_resources[i].returnValues.GetAtt[attr_name] === param) {
                            if (circularReferenceFound(i, index, 'cdk')) {
                                continue;
                            }
                            if (iaclangselect == "python") {
                                return tracked_resources[i].logicalId.toLowerCase() + ".attr_" + pythonAttr(attr_name);
                            } else if (iaclangselect == "java") {
                                return lcfirststr(tracked_resources[i].logicalId) + ".getAtt(\"" + attr_name + "\")";
                            } else if (iaclangselect == "dotnet") {
                                return tracked_resources[i].logicalId.toLowerCase() + ".GetAtt(\"" + attr_name + "\")";
                            }
                            return tracked_resources[i].logicalId + ".attr" + attr_name;
                        }
                    }
                }
            }
        }

        var string_return = param;

        if (string_return.includes("\n")) {
            if (iaclangselect == "python") {
                string_return = "'''\n" + string_return + "\n'''";
            } else {
                string_return = "\`\n" + string_return + "\n\`";
            }
            return string_return;
        }

        return doubleQuotedString(string_return);
    }
    if (param instanceof Set) {
        param = Array.from(param);
    }
    if (Array.isArray(param)) {
        if (param.length == 0) {
            if (iaclangselect == "java") {
                return 'Arrays.asList()';
            } else if (iaclangselect == "dotnet") {
                return 'new List<Dictionary<string, object>>{}'
            }
            return '[]';
        }

        param.forEach(paramitem => {
            var item = processCdkParameter(paramitem, spacing + 4, index, tracked_resources);
            if (typeof item !== "undefined") {
                paramitems.push(item);
            }
        });

        if (iaclangselect == "java") {
            return `
` + ' '.repeat(spacing) + `Arrays.asList(
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + `)
` + ' '.repeat(spacing - 4);
        } else if (iaclangselect == "dotnet") {
            return `new List<object>
` + ' '.repeat(spacing) + `{
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + `}`;
        }

        return `[
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + ']';
    }
    if (typeof param == "object") {
        Object.keys(param).forEach(function (key) {
            var item = processCdkParameter(param[key], spacing + 4, index, tracked_resources);
            if (iaclangselect == "java") {
                item = processCdkParameter(param[key], spacing + 8, index, tracked_resources);
            }
            if (typeof item !== "undefined") {
                if (iaclangselect == "python") {
                    paramitems.push("\"" + pythonAttr(key) + "\": " + item);
                } else if (iaclangselect == "java") {
                    paramitems.push("put(\"" + key + "\"," + item + ");");
                } else if (iaclangselect == "dotnet") {
                    paramitems.push("[\"" + key + "\"] = " + item);
                } else {
                    paramitems.push(lcfirststr(key) + ": " + item);
                }
            }
        });

        if (iaclangselect == "java") {
            return `
` + ' '.repeat(spacing) + `new HashMap<String, Object>() {{
` + ' '.repeat(spacing + 4) + paramitems.join(`
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + `}}
` + ' '.repeat(spacing - 4);
        } else if (iaclangselect == "dotnet") {
            return `new Dictionary<string, object>
` + ' '.repeat(spacing) + `{
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + `}`;
        }

        return `{
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + '}';
    }

    return undefined;
}

function processCdkv2Parameter(param, spacing, index, tracked_resources) {
    var paramitems = [];

    if (param === undefined || param === null || (Array.isArray(param) && param.length == 0))
        return undefined;
    if (typeof param == "boolean") {
        if (iaclangselect == "python") {
            if (param)
                return "True";
            return "False";
        }
        if (param)
            return "true";
        return "false";
    }
    if (typeof param == "number")
        return param;
    if (typeof param == "string") {
        if (param.startsWith("!Ref ") || param.startsWith("!GetAtt ")) {
            return undefined; // TODO: Fix this
        }

        for (var i = 0; i < tracked_resources.length; i++) { // correlate
            if (tracked_resources[i].returnValues && param != "") {
                if (tracked_resources[i].returnValues.Ref == param) {
                    if (circularReferenceFound(i, index, 'cdkv2')) {
                        continue;
                    }
                    if (iaclangselect == "python") {
                        return tracked_resources[i].logicalId.toLowerCase() + ".ref";
                    } else if (iaclangselect == "java") {
                        return lcfirststr(tracked_resources[i].logicalId) + ".getRef()";
                    } else if (iaclangselect == "dotnet") {
                        return tracked_resources[i].logicalId.toLowerCase() + ".Ref";
                    }
                    return tracked_resources[i].logicalId + ".ref";
                }
                if (tracked_resources[i].returnValues.GetAtt) {
                    for (var attr_name in tracked_resources[i].returnValues.GetAtt) {
                        if (tracked_resources[i].returnValues.GetAtt[attr_name] === param) {
                            if (circularReferenceFound(i, index, 'cdkv2')) {
                                continue;
                            }
                            if (iaclangselect == "python") {
                                return tracked_resources[i].logicalId.toLowerCase() + ".attr_" + pythonAttr(attr_name);
                            } else if (iaclangselect == "java") {
                                return lcfirststr(tracked_resources[i].logicalId) + ".getAtt(\"" + attr_name + "\")";
                            } else if (iaclangselect == "dotnet") {
                                return tracked_resources[i].logicalId.toLowerCase() + ".GetAtt(\"" + attr_name + "\")";
                            }
                            return tracked_resources[i].logicalId + ".attr" + attr_name;
                        }
                    }
                }
            }
        }

        var string_return = param;

        if (string_return.includes("\n")) {
            if (iaclangselect == "python") {
                string_return = "'''\n" + string_return + "\n'''";
            } else {
                string_return = "\`\n" + string_return + "\n\`";
            }
            return string_return;
        }

        return doubleQuotedString(string_return);
    }
    if (param instanceof Set) {
        param = Array.from(param);
    }
    if (Array.isArray(param)) {
        if (param.length == 0) {
            if (iaclangselect == "java") {
                return 'Arrays.asList()';
            } else if (iaclangselect == "dotnet") {
                return 'new List<Dictionary<string, object>>{}'
            }
            return '[]';
        }

        param.forEach(paramitem => {
            var item = processCdkv2Parameter(paramitem, spacing + 4, index, tracked_resources);
            if (typeof item !== "undefined") {
                paramitems.push(item);
            }
        });

        if (iaclangselect == "java") {
            return `
` + ' '.repeat(spacing) + `Arrays.asList(
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + `)
` + ' '.repeat(spacing - 4);
        } else if (iaclangselect == "dotnet") {
            return `new List<object>
` + ' '.repeat(spacing) + `{
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + `}`;
        }

        return `[
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + ']';
    }
    if (typeof param == "object") {
        Object.keys(param).forEach(function (key) {
            var item = processCdkv2Parameter(param[key], spacing + 4, index, tracked_resources);
            if (iaclangselect == "java") {
                item = processCdkv2Parameter(param[key], spacing + 8, index, tracked_resources);
            }
            if (typeof item !== "undefined") {
                if (iaclangselect == "python") {
                    paramitems.push("\"" + pythonAttr(key) + "\": " + item);
                } else if (iaclangselect == "java") {
                    paramitems.push("put(\"" + key + "\"," + item + ");");
                } else if (iaclangselect == "dotnet") {
                    paramitems.push("[\"" + key + "\"] = " + item);
                } else {
                    paramitems.push(lcfirststr(key) + ": " + item);
                }
            }
        });

        if (iaclangselect == "java") {
            return `
` + ' '.repeat(spacing) + `new HashMap<String, Object>() {{
` + ' '.repeat(spacing + 4) + paramitems.join(`
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + `}}
` + ' '.repeat(spacing - 4);
        } else if (iaclangselect == "dotnet") {
            return `new Dictionary<string, object>
` + ' '.repeat(spacing) + `{
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + `}`;
        }

        return `{
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + '}';
    }

    return undefined;
}

function processTroposphereParameter(param, spacing, keyname, index, tracked_resources) {
    var paramitems = [];

    if (param === undefined || param === null || (Array.isArray(param) && param.length == 0))
        return undefined;
    if (typeof param == "boolean") {
        if (param)
            return `True`;
        return `False`;
    }
    if (typeof param == "number") {
        for (var i = 0; i < tracked_resources.length; i++) { // correlate
            if (tracked_resources[i].returnValues && param != "") {
                if (tracked_resources[i].returnValues.Ref == param) {
                    if (circularReferenceFound(i, index, 'troposphere')) {
                        continue;
                    }
                    return "Ref(" + tracked_resources[i].logicalId + ")";
                }
                if (tracked_resources[i].returnValues.GetAtt) {
                    for (var attr_name in tracked_resources[i].returnValues.GetAtt) {
                        if (tracked_resources[i].returnValues.GetAtt[attr_name] === param) {
                            if (circularReferenceFound(i, index, 'troposphere')) {
                                continue;
                            }
                            return "GetAtt(" + tracked_resources[i].logicalId + ", '" + attr_name + "')";
                        }
                    }
                }
            }
        }

        return param;
    }
    if (typeof param == "string") {
        if (param.startsWith("!Ref ")) {
            return `Ref(${param.substring(5)})`;
        }
        if (param.startsWith("!GetAtt ")) {
            return undefined;
        }

        for (var i = 0; i < tracked_resources.length; i++) { // correlate
            if (tracked_resources[i].returnValues && param != "") {
                if (tracked_resources[i].returnValues.Ref == param) {
                    if (circularReferenceFound(i, index, 'troposphere')) {
                        continue;
                    }
                    return "Ref(" + tracked_resources[i].logicalId + ")";
                }
                if (tracked_resources[i].returnValues.GetAtt) {
                    for (var attr_name in tracked_resources[i].returnValues.GetAtt) {
                        if (tracked_resources[i].returnValues.GetAtt[attr_name] === param) {
                            if (circularReferenceFound(i, index, 'troposphere')) {
                                continue;
                            }
                            return "GetAtt(" + tracked_resources[i].logicalId + ", '" + attr_name + "')";
                        }
                    }
                }
            }
        }

        var string_return = param;

        if (string_return.includes("\n")) {
            string_return = "\"\"\"" + ' '.repeat(spacing + 4) + string_return.replace(/\n/g, `\n` + ' '.repeat(spacing + 4)) + "\n\"\"\"";
            return string_return;
        }

        return doubleQuotedString(string_return);
    }
    if (param instanceof Set) {
        param = Array.from(param);
    }
    if (Array.isArray(param)) {
        if (param.length == 0) {
            return '[]';
        }

        param.forEach(paramitem => {
            var item = processTroposphereParameter(paramitem, spacing + 4, keyname, index, tracked_resources);
            if (typeof item !== "undefined") {
                paramitems.push(item);
            }
        });

        return `[
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + ']';
    }
    if (typeof param == "object") {
        var propertyname = getTropospherePropertyName(keyname);

        if (!propertyname) {
            Object.keys(param).forEach(function (key) {
                var item = processBoto3Parameter(param[key], spacing + 4); // intentional, to do raw array stuff
                if (typeof item !== "undefined") {
                    paramitems.push("\"" + key + "\": " + item);
                }
            });

            return `{
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + '}';
        }

        Object.keys(param).forEach(function (key) {
            var item = processTroposphereParameter(param[key], spacing + 4, keyname + "." + key, index, tracked_resources);
            if (typeof item !== "undefined") {
                paramitems.push(key + "=" + item);
            }
        });

        return `${propertyname}(
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + ')';
    }

    return undefined;
}

function parseDynamoItem(obj) {
    var ret = {};

    for (var key in obj) {
        if (obj[key].type == "String") {
            ret[obj[key].name] = obj[key].stringValue;
        } else if (obj[key].type == "Map") {
            ret[obj[key].name] = parseDynamoItem(obj[key].mapValues);
        } else if (obj[key].type == "Binary") {
            ret[obj[key].name] = obj[key].binaryValue;
        } else if (obj[key].type == "BinarySet") {
            ret[obj[key].name] = obj[key].binarySetValues;
        } else if (obj[key].type == "Boolean") {
            ret[obj[key].name] = obj[key].booleanValue;
        } else if (obj[key].type == "List") {
            ret[obj[key].name] = [];
            for (var j = 0; j < obj[key].listValues.length; j++) {
                ret[obj[key].name].push(parseDynamoItem(obj[key].listValues[j]));
            }
        } else if (obj[key].type == "Map") {
            ret[obj[key].name] = parseDynamoItem(obj[key].mapValues);
        } else if (obj[key].type == "Null") {
            ret[obj[key].name] = null;
        } else if (obj[key].type == "Number") {
            ret[obj[key].name] = Number(obj[key].numberValue);
        } else if (obj[key].type == "NumberSet") {
            ret[obj[key].name] = [];
            for (var j = 0; j < obj[key].numberSetValues.length; j++) {
                ret[obj[key].name].push(Number(obj[key].numberSetValues[j]));
            }
        } else if (obj[key].type == "StringSet") {
            ret[obj[key].name] = [];
            for (var j = 0; j < obj[key].stringSetValues.length; j++) {
                ret[obj[key].name].push(obj[key].stringSetValues[j]);
            }
        }
    }

    return ret;
}

function getTropospherePropertyName(keyname) {
    auto_generated_property_mapping = {
        "BaseRecordSet.AliasTarget": "AliasTarget",
        "BaseRecordSet.GeoLocation": "GeoLocation",
        "CreationPolicy.AutoScalingCreationPolicy": "AutoScalingCreationPolicy",
        "CreationPolicy.ResourceSignal": "ResourceSignal",
        "InitFile.context": "InitFileContext",
        "LambdaConfigurations.Filter.S3Key.Rules": "Rules",
        "RoleMapping.RulesConfiguration": "RulesConfiguration",
        "RoleMapping.RulesConfiguration.Rules": "MappingRule",
        "UpdatePolicy.AutoScalingReplacingUpdate": "AutoScalingReplacingUpdate",
        "UpdatePolicy.AutoScalingRollingUpdate": "AutoScalingRollingUpdate",
        "UpdatePolicy.AutoScalingScheduledAction": "AutoScalingScheduledAction",
        "UpdatePolicy.CodeDeployLambdaAliasUpdate": "CodeDeployLambdaAliasUpdate",
        "amazonmq.Configuration": "ConfigurationId",
        "amazonmq.Logs": "LogsConfiguration",
        "amazonmq.MaintenanceWindowStartTime": "MaintenanceWindow",
        "amazonmq.Users": "User",
        "analytics.Inputs": "Input",
        "analytics.Inputs.InputParallelism": "InputParallelism",
        "analytics.Inputs.InputProcessingConfiguration": "InputProcessingConfiguration",
        "analytics.Inputs.InputProcessingConfiguration.InputLambdaProcessor": "InputLambdaProcessor",
        "analytics.Inputs.InputSchema": "InputSchema",
        "analytics.Inputs.InputSchema.RecordColumns": "RecordColumn",
        "analytics.Inputs.InputSchema.RecordFormat": "RecordFormat",
        "analytics.Inputs.InputSchema.RecordFormat.MappingParameters": "JSONMappingParameters",
        "analytics.Inputs.KinesisFirehoseInput": "KinesisFirehoseInput",
        "analytics.Inputs.KinesisStreamsInput": "KinesisStreamsInput",
        "analytics.Output": "Output",
        "analytics.Output.DestinationSchema": "DestinationSchema",
        "analytics.Output.KinesisFirehoseOutput": "KinesisFirehoseOutput",
        "analytics.Output.KinesisStreamsOutput": "KinesisStreamsOutput",
        "analytics.Output.LambdaOutput": "LambdaOutput",
        "analytics.ReferenceDataSource": "ReferenceDataSource",
        "analytics.ReferenceDataSource.ReferenceSchema": "ReferenceSchema",
        "analytics.ReferenceDataSource.ReferenceSchema.RecordColumns": "RecordColumn",
        "analytics.ReferenceDataSource.ReferenceSchema.RecordFormat": "MappingParameters",
        "analytics.ReferenceDataSource.S3ReferenceDataSource": "S3ReferenceDataSource",
        "apigateway.AccesLogSetting": "AccessLogSetting",
        "apigateway.ApiStages": "ApiStage",
        "apigateway.ApiStages.Throttle": "ThrottleSettings",
        "apigateway.BodyS3Location": "S3Location",
        "apigateway.CanarySetting": "CanarySetting",
        "apigateway.DeploymentCanarySettings": "DeploymentCanarySettings",
        "apigateway.EndpointConfiguration": "EndpointConfiguration",
        "apigateway.Integration": "Integration",
        "apigateway.Integration.IntegrationResponses": "IntegrationResponse",
        "apigateway.Location": "Location",
        "apigateway.MethodResponses": "MethodResponse",
        "apigateway.MethodSettings": "MethodSetting",
        "apigateway.Quota": "QuotaSettings",
        "apigateway.StageDescription": "StageDescription",
        "apigateway.StageDescription.AccessLogSetting": "AccessLogSetting",
        "apigateway.StageDescription.CanarySetting": "DeploymentCanarySettings",
        "apigateway.StageDescription.MethodSettings": "MethodSetting",
        "apigateway.StageKeys": "StageKey",
        "apigateway.Throttle": "ThrottleSettings",
        "applicationautoscaling.ScheduledActions": "ScheduledAction",
        "applicationautoscaling.ScheduledActions.ScalableTargetAction": "ScalableTargetAction",
        "applicationautoscaling.StepScalingPolicyConfiguration": "StepScalingPolicyConfiguration",
        "applicationautoscaling.StepScalingPolicyConfiguration.StepAdjustments": "StepAdjustment",
        "applicationautoscaling.TargetTrackingScalingPolicyConfiguration": "TargetTrackingScalingPolicyConfiguration",
        "applicationautoscaling.TargetTrackingScalingPolicyConfiguration.CustomizedMetricSpecification": "MetricDimension",
        "applicationautoscaling.TargetTrackingScalingPolicyConfiguration.PredefinedMetricSpecification": "PredefinedMetricSpecification",
        "appsync.DynamoDBConfig": "DynamoDBConfig",
        "appsync.ElasticsearchConfig": "ElasticsearchConfig",
        "appsync.HttpConfig": "HttpConfig",
        "appsync.LambdaConfig": "LambdaConfig",
        "appsync.LogConfig": "LogConfig",
        "appsync.OpenIDConnectConfig": "OpenIDConnectConfig",
        "appsync.UserPoolConfig": "UserPoolConfig",
        "autoscaling.BlockDeviceMappings": "BlockDeviceMapping",
        "autoscaling.BlockDeviceMappings.Ebs": "EBSBlockDevice",
        "autoscaling.LaunchTemplate": "LaunchTemplateSpecification",
        "autoscaling.LifecycleHookSpecificationList": "LifecycleHookSpecification",
        "autoscaling.Metadata": "Metadata",
        "autoscaling.MetricsCollection": "MetricsCollection",
        "autoscaling.NotificationConfigurations": "NotificationConfigurations",
        "autoscaling.StepAdjustments": "StepAdjustments",
        "autoscaling.TargetTrackingConfiguration": "TargetTrackingConfiguration",
        "autoscaling.TargetTrackingConfiguration.CustomizedMetricSpecification": "MetricDimension",
        "autoscaling.TargetTrackingConfiguration.PredefinedMetricSpecification": "PredefinedMetricSpecification",
        "awslambda.Code": "Code",
        "awslambda.DeadLetterConfig": "DeadLetterConfig",
        "awslambda.Environment": "Environment",
        "awslambda.RoutingConfig": "AliasRoutingConfiguration",
        "awslambda.RoutingConfig.AdditionalVersionWeights": "VersionWeight",
        "awslambda.TracingConfig": "TracingConfig",
        "awslambda.VpcConfig": "VPCConfig",
        "batch.ComputeEnvironmentOrder": "ComputeEnvironmentOrder",
        "batch.ComputeResources": "ComputeResources",
        "batch.ContainerProperties": "ContainerProperties",
        "batch.ContainerProperties.Environment": "Environment",
        "batch.ContainerProperties.MountPoints": "MountPoints",
        "batch.ContainerProperties.Ulimits": "Ulimit",
        "batch.ContainerProperties.Volumes": "Volumes",
        "batch.ContainerProperties.Volumes.Host": "VolumesHost",
        "batch.RetryStrategy": "RetryStrategy",
        "batch.Timeout": "Timeout",
        "budgets.Budget": "BudgetData",
        "budgets.Budget.BudgetLimit": "Spend",
        "budgets.Budget.CostTypes": "CostTypes",
        "budgets.Budget.TimePeriod": "TimePeriod",
        "budgets.NotificationsWithSubscribers": "NotificationWithSubscribers",
        "budgets.NotificationsWithSubscribers.Notification": "Notification",
        "budgets.NotificationsWithSubscribers.Subscribers": "Subscriber",
        "certificatemanager.DomainValidationOptions": "DomainValidationOption",
        "cloud9.Repositories": "Repository",
        "cloudfront.CloudFrontOriginAccessIdentityConfig": "CloudFrontOriginAccessIdentityConfig",
        "cloudfront.DistributionConfig": "DistributionConfig",
        "cloudfront.DistributionConfig.CacheBehaviors": "Cookies",
        "cloudfront.DistributionConfig.CustomErrorResponses": "CustomErrorResponse",
        "cloudfront.DistributionConfig.DefaultCacheBehavior": "LambdaFunctionAssociation",
        "cloudfront.DistributionConfig.Logging": "Logging",
        "cloudfront.DistributionConfig.Restrictions": "Restrictions",
        "cloudfront.DistributionConfig.Restrictions.GeoRestriction": "GeoRestriction",
        "cloudfront.DistributionConfig.ViewerCertificate": "ViewerCertificate",
        "cloudfront.Origins": "Origin",
        "cloudfront.Origins.CustomOriginConfig": "CustomOrigin",
        "cloudfront.Origins.OriginCustomHeaders": "OriginCustomHeader",
        "cloudfront.Origins.S3OriginConfig": "S3Origin",
        "cloudfront.StreamingDistributionConfig": "StreamingDistributionConfig",
        "cloudfront.StreamingDistributionConfig.Logging": "Logging",
        "cloudfront.StreamingDistributionConfig.S3Origin": "S3Origin",
        "cloudfront.StreamingDistributionConfig.TrustedSigners": "TrustedSigners",
        "cloudtrail.EventSelectors": "EventSelector",
        "cloudtrail.EventSelectors.DataResources": "DataResource",
        "cloudwatch.Dimensions": "MetricDimension",
        "codebuild.Artifacts": "Artifacts",
        "codebuild.Cache": "ProjectCache",
        "codebuild.Environment": "Environment",
        "codebuild.LogsConfig": "LogsConfig",
        "codebuild.LogsConfig.CloudWatchLogs": "CloudWatchLogs",
        "codebuild.LogsConfig.S3Logs": "S3Logs",
        "codebuild.SecondaryArtifacts": "Artifacts",
        "codebuild.SecondarySources": "Source",
        "codebuild.SecondarySources.Auth": "SourceAuth",
        "codebuild.Source": "Source",
        "codebuild.Triggers": "ProjectTriggers",
        "codebuild.VpcConfig": "VpcConfig",
        "codecommit.Triggers": "Trigger",
        "codedeploy.AlarmConfiguration": "AlarmConfiguration",
        "codedeploy.AlarmConfiguration.Alarms": "Alarm",
        "codedeploy.AutoRollbackConfiguration": "AutoRollbackConfiguration",
        "codedeploy.Deployment": "Deployment",
        "codedeploy.Deployment.Revision": "Revision",
        "codedeploy.Deployment.Revision.GitHubLocation": "GitHubLocation",
        "codedeploy.Deployment.Revision.S3Location": "S3Location",
        "codedeploy.DeploymentStyle": "DeploymentStyle",
        "codedeploy.Ec2TagFilters": "Ec2TagFilters",
        "codedeploy.Ec2TagSet": "Ec2TagSet",
        "codedeploy.Ec2TagSet.Ec2TagSet": "Ec2TagSetList",
        "codedeploy.Ec2TagSet.Ec2TagSet.Ec2TagSetList": "Ec2TagSetListObject",
        "codedeploy.Ec2TagSet.Ec2TagSet.Ec2TagSetList.Ec2TagGroup": "Ec2TagFilters",
        "codedeploy.LoadBalancerInfo": "LoadBalancerInfo",
        "codedeploy.LoadBalancerInfo.ElbInfoList": "ElbInfoList",
        "codedeploy.LoadBalancerInfo.TargetGroupInfoList": "TargetGroupInfoList",
        "codedeploy.MinimumHealthyHosts": "MinimumHealthyHosts",
        "codedeploy.OnPremisesInstanceTagFilters": "OnPremisesInstanceTagFilters",
        "codedeploy.OnPremisesInstanceTagSet": "OnPremisesTagSet",
        "codedeploy.OnPremisesInstanceTagSet.OnPremisesTagSetList": "OnPremisesTagSetList",
        "codedeploy.OnPremisesInstanceTagSet.OnPremisesTagSetList.OnPremisesTagSetList": "OnPremisesTagSetObject",
        "codedeploy.OnPremisesInstanceTagSet.OnPremisesTagSetList.OnPremisesTagSetList.OnPremisesTagGroup": "TagFilters",
        "codedeploy.TriggerConfigurations": "TriggerConfig",
        "codepipeline.ArtifactStore": "ArtifactStore",
        "codepipeline.ArtifactStore.EncryptionKey": "EncryptionKey",
        "codepipeline.AuthenticationConfiguration": "WebhookAuthConfiguration",
        "codepipeline.ConfigurationProperties": "ConfigurationProperties",
        "codepipeline.DisableInboundStageTransitions": "DisableInboundStageTransitions",
        "codepipeline.Filters": "WebhookFilterRule",
        "codepipeline.InputArtifactDetails": "ArtifactDetails",
        "codepipeline.OutputArtifactDetails": "ArtifactDetails",
        "codepipeline.Settings": "Settings",
        "codepipeline.Stages": "Stages",
        "codepipeline.Stages.Actions": "OutputArtifacts",
        "codepipeline.Stages.Blockers": "Blockers",
        "cognito.AdminCreateUserConfig": "AdminCreateUserConfig",
        "cognito.AdminCreateUserConfig.InviteMessageTemplate": "InviteMessageTemplate",
        "cognito.CognitoIdentityProviders": "CognitoIdentityProvider",
        "cognito.CognitoStreams": "CognitoStreams",
        "cognito.DeviceConfiguration": "DeviceConfiguration",
        "cognito.EmailConfiguration": "EmailConfiguration",
        "cognito.LambdaConfig": "LambdaConfig",
        "cognito.Policies": "Policies",
        "cognito.Policies.PasswordPolicy": "PasswordPolicy",
        "cognito.PushSync": "PushSync",
        "cognito.Schema": "SchemaAttribute",
        "cognito.Schema.NumberAttributeConstraints": "NumberAttributeConstraints",
        "cognito.Schema.StringAttributeConstraints": "StringAttributeConstraints",
        "cognito.SmsConfiguration": "SmsConfiguration",
        "cognito.UserAttributes": "AttributeType",
        "cognito.ValidationData": "AttributeType",
        "config.AccountAggregationSources": "AccountAggregationSources",
        "config.ConfigSnapshotDeliveryProperties": "ConfigSnapshotDeliveryProperties",
        "config.OrganizationAggregationSource": "OrganizationAggregationSource",
        "config.RecordingGroup": "RecordingGroup",
        "config.Scope": "Scope",
        "config.Source": "Source",
        "config.Source.SourceDetails": "SourceDetails",
        "datapipeline.ParameterObjects": "ParameterObject",
        "datapipeline.ParameterObjects.Attributes": "ParameterObjectAttribute",
        "datapipeline.ParameterValues": "ParameterValue",
        "datapipeline.PipelineObjects": "PipelineObject",
        "datapipeline.PipelineObjects.Fields": "ObjectField",
        "datapipeline.PipelineTags": "PipelineTag",
        "dax.SSESpecification": "SSESpecification",
        "directoryservice.VpcSettings": "VpcSettings",
        "dms.DynamoDbSettings": "DynamoDBSettings",
        "dms.MongoDbSettings": "MongoDbSettings",
        "dms.S3Settings": "S3Settings",
        "dynamodb.AttributeDefinitions": "AttributeDefinition",
        "dynamodb.GlobalSecondaryIndexes": "GlobalSecondaryIndex",
        "dynamodb.GlobalSecondaryIndexes.KeySchema": "KeySchema",
        "dynamodb.GlobalSecondaryIndexes.Projection": "Projection",
        "dynamodb.GlobalSecondaryIndexes.ProvisionedThroughput": "ProvisionedThroughput",
        "dynamodb.KeySchema": "KeySchema",
        "dynamodb.LocalSecondaryIndexes": "LocalSecondaryIndex",
        "dynamodb.LocalSecondaryIndexes.KeySchema": "KeySchema",
        "dynamodb.LocalSecondaryIndexes.Projection": "Projection",
        "dynamodb.PointInTimeRecoverySpecification": "PointInTimeRecoverySpecification",
        "dynamodb.ProvisionedThroughput": "ProvisionedThroughput",
        "dynamodb.SSESpecification": "SSESpecification",
        "dynamodb.StreamSpecification": "StreamSpecification",
        "dynamodb.TimeToLiveSpecification": "TimeToLiveSpecification",
        "ec2.BlockDeviceMappings": "BlockDeviceMapping",
        "ec2.BlockDeviceMappings.Ebs": "EBSBlockDevice",
        "ec2.CreditSpecification": "CreditSpecification",
        "ec2.ElasticGpuSpecifications": "ElasticGpuSpecification",
        "ec2.Icmp": "ICMP",
        "ec2.Ipv6Addresses": "Ipv6Addresses",
        "ec2.LaunchTemplate": "LaunchTemplateSpecification",
        "ec2.LaunchTemplateData": "LaunchTemplateData",
        "ec2.LaunchTemplateData.BlockDeviceMappings": "BlockDeviceMapping",
        "ec2.LaunchTemplateData.CreditSpecification": "LaunchTemplateCreditSpecification",
        "ec2.LaunchTemplateData.ElasticGpuSpecifications": "ElasticGpuSpecification",
        "ec2.LaunchTemplateData.IamInstanceProfile": "IamInstanceProfile",
        "ec2.LaunchTemplateData.InstanceMarketOptions": "SpotOptions",
        "ec2.LaunchTemplateData.Monitoring": "Monitoring",
        "ec2.LaunchTemplateData.NetworkInterfaces": "NetworkInterfaces",
        "ec2.LaunchTemplateData.Placement": "Placement",
        "ec2.LaunchTemplateData.TagSpecifications": "TagSpecifications",
        "ec2.NetworkInterfaces": "NetworkInterfaceProperty",
        "ec2.NetworkInterfaces.Ipv6Addresses": "Ipv6Addresses",
        "ec2.NetworkInterfaces.PrivateIpAddresses": "PrivateIpAddressSpecification",
        "ec2.PortRange": "PortRange",
        "ec2.PrivateIpAddresses": "PrivateIpAddressSpecification",
        "ec2.SecurityGroupEgress": "SecurityGroupRule",
        "ec2.SecurityGroupIngress": "SecurityGroupRule",
        "ec2.SpotFleetRequestConfigData": "SpotFleetRequestConfigData",
        "ec2.SpotFleetRequestConfigData.LaunchSpecifications": "PrivateIpAddressSpecification",
        "ec2.SpotFleetRequestConfigData.LaunchTemplateConfigs": "LaunchTemplateOverrides",
        "ec2.SpotFleetRequestConfigData.LoadBalancersConfig": "TargetGroup",
        "ec2.SsmAssociations": "SsmAssociations",
        "ec2.SsmAssociations.AssociationParameters": "AssociationParameters",
        "ec2.Volumes": "MountPoint",
        "ec2.VpnTunnelOptionsSpecifications": "VpnTunnelOptionsSpecification",
        "ecr.LifecyclePolicy": "LifecyclePolicy",
        "ecs.ContainerDefinitions": "ContainerDefinition",
        "ecs.ContainerDefinitions.Environment": "Environment",
        "ecs.ContainerDefinitions.ExtraHosts": "HostEntry",
        "ecs.ContainerDefinitions.HealthCheck": "HealthCheck",
        "ecs.ContainerDefinitions.LinuxParameters": "LinuxParameters",
        "ecs.ContainerDefinitions.LinuxParameters.Capabilities": "KernelCapabilities",
        "ecs.ContainerDefinitions.LinuxParameters.Devices": "Device",
        "ecs.ContainerDefinitions.LogConfiguration": "LogConfiguration",
        "ecs.ContainerDefinitions.MountPoints": "MountPoint",
        "ecs.ContainerDefinitions.PortMappings": "PortMapping",
        "ecs.ContainerDefinitions.RepositoryCredentials": "RepositoryCredentials",
        "ecs.ContainerDefinitions.Ulimits": "Ulimit",
        "ecs.ContainerDefinitions.VolumesFrom": "VolumesFrom",
        "ecs.DeploymentConfiguration": "DeploymentConfiguration",
        "ecs.LoadBalancers": "LoadBalancer",
        "ecs.NetworkConfiguration": "NetworkConfiguration",
        "ecs.NetworkConfiguration.AwsvpcConfiguration": "AwsvpcConfiguration",
        "ecs.PlacementConstraints": "PlacementConstraint",
        "ecs.PlacementStrategies": "PlacementStrategy",
        "ecs.ServiceRegistries": "ServiceRegistry",
        "ecs.Volumes": "Volume",
        "ecs.Volumes.DockerVolumeConfiguration": "DockerVolumeConfiguration",
        "ecs.Volumes.Host": "Host",
        "eks.ResourcesVpcConfig": "ResourcesVpcConfig",
        "elasticache.NodeGroupConfiguration": "NodeGroupConfiguration",
        "elasticbeanstalk.OptionSettings": "OptionSettings",
        "elasticbeanstalk.ResourceLifecycleConfig": "ApplicationResourceLifecycleConfig",
        "elasticbeanstalk.ResourceLifecycleConfig.VersionLifecycleConfig": "ApplicationVersionLifecycleConfig",
        "elasticbeanstalk.ResourceLifecycleConfig.VersionLifecycleConfig.MaxAgeRule": "MaxAgeRule",
        "elasticbeanstalk.ResourceLifecycleConfig.VersionLifecycleConfig.MaxCountRule": "MaxCountRule",
        "elasticbeanstalk.SourceBundle": "SourceBundle",
        "elasticbeanstalk.SourceConfiguration": "SourceConfiguration",
        "elasticbeanstalk.Tier": "Tier",
        "elasticloadbalancing.AccessLoggingPolicy": "AccessLoggingPolicy",
        "elasticloadbalancing.AppCookieStickinessPolicy": "AppCookieStickinessPolicy",
        "elasticloadbalancing.ConnectionDrainingPolicy": "ConnectionDrainingPolicy",
        "elasticloadbalancing.ConnectionSettings": "ConnectionSettings",
        "elasticloadbalancing.HealthCheck": "HealthCheck",
        "elasticloadbalancing.LBCookieStickinessPolicy": "LBCookieStickinessPolicy",
        "elasticloadbalancing.Listeners": "Listener",
        "elasticloadbalancing.Policies": "Policy",
        "elasticloadbalancingv2.Actions": "Action",
        "elasticloadbalancingv2.Certificates": "Certificate",
        "elasticloadbalancingv2.Conditions": "Condition",
        "elasticloadbalancingv2.DefaultActions": "Action",
        "elasticloadbalancingv2.LoadBalancerAttributes": "LoadBalancerAttributes",
        "elasticloadbalancingv2.Matcher": "Matcher",
        "elasticloadbalancingv2.SubnetMappings": "SubnetMapping",
        "elasticloadbalancingv2.TargetGroupAttributes": "TargetGroupAttribute",
        "elasticloadbalancingv2.Targets": "TargetDescription",
        "elasticsearch.EBSOptions": "EBSOptions",
        "elasticsearch.ElasticsearchClusterConfig": "ElasticsearchClusterConfig",
        "elasticsearch.EncryptionAtRestOptions": "EncryptionAtRestOptions",
        "elasticsearch.SnapshotOptions": "SnapshotOptions",
        "elasticsearch.VPCOptions": "VPCOptions",
        "emr.Applications": "Application",
        "emr.AutoScalingPolicy": "AutoScalingPolicy",
        "emr.AutoScalingPolicy.Constraints": "ScalingConstraints",
        "emr.AutoScalingPolicy.Rules": "ScalingRule",
        "emr.AutoScalingPolicy.Rules.Action": "SimpleScalingPolicyConfiguration",
        "emr.AutoScalingPolicy.Rules.Trigger": "ScalingTrigger",
        "emr.AutoScalingPolicy.Rules.Trigger.CloudWatchAlarmDefinition": "KeyValue",
        "emr.BootstrapActions": "BootstrapActionConfig",
        "emr.BootstrapActions.ScriptBootstrapAction": "ScriptBootstrapActionConfig",
        "emr.Configurations": "Configuration",
        "emr.Configurations.Configurations": "Configuration",
        "emr.EbsConfiguration": "EbsConfiguration",
        "emr.EbsConfiguration.EbsBlockDeviceConfigs": "VolumeSpecification",
        "emr.HadoopJarStep": "HadoopJarStepConfig",
        "emr.HadoopJarStep.StepProperties": "KeyValue",
        "emr.InstanceTypeConfigs": "InstanceTypeConfig",
        "emr.InstanceTypeConfigs.Configurations": "Configuration",
        "emr.InstanceTypeConfigs.EbsConfiguration": "EbsConfiguration",
        "emr.Instances": "JobFlowInstancesConfig",
        "emr.Instances.CoreInstanceFleet": "InstanceFleetProvisioningSpecifications",
        "emr.Instances.CoreInstanceGroup": "EbsConfiguration",
        "emr.Instances.MasterInstanceFleet": "InstanceFleetConfigProperty",
        "emr.Instances.MasterInstanceGroup": "InstanceGroupConfigProperty",
        "emr.Instances.Placement": "PlacementType",
        "emr.KerberosAttributes": "KerberosAttributes",
        "emr.LaunchSpecifications": "InstanceFleetProvisioningSpecifications",
        "emr.LaunchSpecifications.SpotSpecification": "SpotProvisioningSpecification",
        "events.Targets": "Target",
        "events.Targets.EcsParameters": "EcsParameters",
        "events.Targets.InputTransformer": "InputTransformer",
        "events.Targets.KinesisParameters": "KinesisParameters",
        "events.Targets.RunCommandParameters": "RunCommandTarget",
        "firehose.ElasticsearchDestinationConfiguration": "ElasticsearchDestinationConfiguration",
        "firehose.ElasticsearchDestinationConfiguration.BufferingHints": "BufferingHints",
        "firehose.ElasticsearchDestinationConfiguration.CloudWatchLoggingOptions": "CloudWatchLoggingOptions",
        "firehose.ElasticsearchDestinationConfiguration.ProcessingConfiguration": "ProcessingConfiguration",
        "firehose.ElasticsearchDestinationConfiguration.RetryOptions": "RetryOptions",
        "firehose.ElasticsearchDestinationConfiguration.S3Configuration": "S3Configuration",
        "firehose.ElasticsearchDestinationConfiguration.S3Configuration.BufferingHints": "BufferingHints",
        "firehose.ElasticsearchDestinationConfiguration.S3Configuration.CloudWatchLoggingOptions": "CloudWatchLoggingOptions",
        "firehose.ElasticsearchDestinationConfiguration.S3Configuration.EncryptionConfiguration": "EncryptionConfiguration",
        "firehose.ExtendedS3DestinationConfiguration": "ExtendedS3DestinationConfiguration",
        "firehose.ExtendedS3DestinationConfiguration.BufferingHints": "BufferingHints",
        "firehose.ExtendedS3DestinationConfiguration.CloudWatchLoggingOptions": "CloudWatchLoggingOptions",
        "firehose.ExtendedS3DestinationConfiguration.EncryptionConfiguration": "KMSEncryptionConfig",
        "firehose.ExtendedS3DestinationConfiguration.ProcessingConfiguration": "ProcessingConfiguration",
        "firehose.ExtendedS3DestinationConfiguration.S3BackupConfiguration": "S3DestinationConfiguration",
        "firehose.KinesisStreamSourceConfiguration": "KinesisStreamSourceConfiguration",
        "firehose.RedshiftDestinationConfiguration": "RedshiftDestinationConfiguration",
        "firehose.RedshiftDestinationConfiguration.CloudWatchLoggingOptions": "CloudWatchLoggingOptions",
        "firehose.RedshiftDestinationConfiguration.CopyCommand": "CopyCommand",
        "firehose.RedshiftDestinationConfiguration.ProcessingConfiguration": "ProcessorParameter",
        "firehose.RedshiftDestinationConfiguration.S3Configuration": "S3Configuration",
        "firehose.S3DestinationConfiguration": "S3DestinationConfiguration",
        "firehose.S3DestinationConfiguration.BufferingHints": "BufferingHints",
        "firehose.S3DestinationConfiguration.CloudWatchLoggingOptions": "CloudWatchLoggingOptions",
        "firehose.S3DestinationConfiguration.EncryptionConfiguration": "EncryptionConfiguration",
        "firehose.SplunkDestinationConfiguration": "SplunkDestinationConfiguration",
        "firehose.SplunkDestinationConfiguration.CloudWatchLoggingOptions": "CloudWatchLoggingOptions",
        "firehose.SplunkDestinationConfiguration.ProcessingConfiguration": "ProcessingConfiguration",
        "firehose.SplunkDestinationConfiguration.RetryOptions": "SplunkRetryOptions",
        "firehose.SplunkDestinationConfiguration.S3Configuration": "S3DestinationConfiguration",
        "glue.Actions": "Action",
        "glue.Command": "JobCommand",
        "glue.ConnectionInput": "ConnectionInput",
        "glue.ConnectionInput.PhysicalConnectionRequirements": "PhysicalConnectionRequirements",
        "glue.Connections": "ConnectionsList",
        "glue.DatabaseInput": "DatabaseInput",
        "glue.ExecutionProperty": "ExecutionProperty",
        "glue.GrokClassifier": "GrokClassifier",
        "glue.JsonClassifier": "JsonClassifier",
        "glue.PartitionInput": "PartitionInput",
        "glue.PartitionInput.StorageDescriptor": "StorageDescriptor",
        "glue.Predicate": "Predicate",
        "glue.Predicate.Conditions": "Condition",
        "glue.Schedule": "Schedule",
        "glue.SchemaChangePolicy": "SchemaChangePolicy",
        "glue.TableInput": "TableInput",
        "glue.TableInput.PartitionKeys": "Column",
        "glue.TableInput.StorageDescriptor": "Order",
        "glue.Targets": "Targets",
        "glue.Targets.JdbcTargets": "JdbcTarget",
        "glue.Targets.S3Targets": "S3Target",
        "glue.XMLClassifier": "XMLClassifier",
        "guardduty.FindingCriteria": "FindingCriteria",
        "guardduty.FindingCriteria.ItemType": "Condition",
        "iam.LoginProfile": "LoginProfile",
        "iam.Policies": "Policy",
        "iot.TopicRulePayload": "TopicRulePayload",
        "iot.TopicRulePayload.Actions": "PutItemInput",
        "kinesis.StreamEncryption": "StreamEncryption",
        "logs.MetricTransformations": "MetricTransformation",
        "opsworks.AppSource": "Source",
        "opsworks.BlockDeviceMappings": "BlockDeviceMapping",
        "opsworks.BlockDeviceMappings.Ebs": "EbsBlockDevice",
        "opsworks.ChefConfiguration": "ChefConfiguration",
        "opsworks.ConfigurationManager": "StackConfigurationManager",
        "opsworks.CustomCookbooksSource": "Source",
        "opsworks.CustomRecipes": "Recipes",
        "opsworks.DataSources": "DataSource",
        "opsworks.ElasticIps": "ElasticIp",
        "opsworks.Environment": "Environment",
        "opsworks.LifecycleEventConfiguration": "LifeCycleConfiguration",
        "opsworks.LifecycleEventConfiguration.ShutdownEventConfiguration": "ShutdownEventConfiguration",
        "opsworks.LoadBasedAutoScaling": "LoadBasedAutoScaling",
        "opsworks.LoadBasedAutoScaling.DownScaling": "AutoScalingThresholds",
        "opsworks.LoadBasedAutoScaling.UpScaling": "AutoScalingThresholds",
        "opsworks.RdsDbInstances": "RdsDbInstance",
        "opsworks.SslConfiguration": "SslConfiguration",
        "opsworks.TimeBasedAutoScaling": "TimeBasedAutoScaling",
        "opsworks.VolumeConfigurations": "VolumeConfiguration",
        "rds.DBSecurityGroupIngress": "RDSSecurityGroup",
        "rds.OptionConfigurations": "OptionConfiguration",
        "rds.OptionConfigurations.OptionSettings": "OptionSetting",
        "rds.ScalingConfiguration": "ScalingConfiguration",
        "redshift.LoggingProperties": "LoggingProperties",
        "redshift.Parameters": "AmazonRedshiftParameter",
        "route53.AliasTarget": "AliasTarget",
        "route53.GeoLocation": "GeoLocation",
        "route53.HealthCheckConfig": "HealthCheckConfiguration",
        "route53.HealthCheckConfig.AlarmIdentifier": "AlarmIdentifier",
        "route53.HostedZoneConfig": "HostedZoneConfiguration",
        "route53.QueryLoggingConfig": "QueryLoggingConfig",
        "route53.RecordSets": "RecordSet",
        "route53.RecordSets.AliasTarget": "AliasTarget",
        "route53.RecordSets.GeoLocation": "GeoLocation",
        "route53.VPCs": "HostedZoneVPCs",
        "s3.AccelerateConfiguration": "AccelerateConfiguration",
        "s3.AnalyticsConfigurations": "AnalyticsConfiguration",
        "s3.AnalyticsConfigurations.StorageClassAnalysis": "StorageClassAnalysis",
        "s3.AnalyticsConfigurations.StorageClassAnalysis.DataExport": "Destination",
        "s3.AnalyticsConfigurations.TagFilters": "TagFilter",
        "s3.BucketEncryption": "BucketEncryption",
        "s3.BucketEncryption.ServerSideEncryptionConfiguration": "ServerSideEncryptionRule",
        "s3.BucketEncryption.ServerSideEncryptionConfiguration.ServerSideEncryptionByDefault": "ServerSideEncryptionByDefault",
        "s3.CorsConfiguration": "CorsConfiguration",
        "s3.CorsConfiguration.CorsRules": "CorsRules",
        "s3.InventoryConfigurations": "InventoryConfiguration",
        "s3.InventoryConfigurations.Destination": "Destination",
        "s3.LifecycleConfiguration": "LifecycleConfiguration",
        "s3.LifecycleConfiguration.Rules": "LifecycleRule",
        "s3.LifecycleConfiguration.Rules.AbortIncompleteMultipartUpload": "AbortIncompleteMultipartUpload",
        "s3.LifecycleConfiguration.Rules.NoncurrentVersionTransition": "NoncurrentVersionTransition",
        "s3.LifecycleConfiguration.Rules.NoncurrentVersionTransitions": "NoncurrentVersionTransition",
        "s3.LifecycleConfiguration.Rules.TagFilters": "TagFilter",
        "s3.LifecycleConfiguration.Rules.Transition": "LifecycleRuleTransition",
        "s3.LifecycleConfiguration.Rules.Transitions": "LifecycleRuleTransition",
        "s3.LoggingConfiguration": "LoggingConfiguration",
        "s3.MetricsConfigurations": "MetricsConfiguration",
        "s3.MetricsConfigurations.TagFilters": "TagFilter",
        "s3.NotificationConfiguration": "NotificationConfiguration",
        "s3.NotificationConfiguration.LambdaConfigurations": "Filter",
        "s3.NotificationConfiguration.LambdaConfigurations.Filter": "S3Key",
        "s3.NotificationConfiguration.QueueConfigurations": "QueueConfigurations",
        "s3.NotificationConfiguration.QueueConfigurations.Filter": "Filter",
        "s3.NotificationConfiguration.TopicConfigurations": "TopicConfigurations",
        "s3.NotificationConfiguration.TopicConfigurations.Filter": "Filter",
        "s3.ReplicationConfiguration": "ReplicationConfiguration",
        "s3.ReplicationConfiguration.Rules": "ReplicationConfigurationRules",
        "s3.ReplicationConfiguration.Rules.Destination": "ReplicationConfigurationRulesDestination",
        "s3.ReplicationConfiguration.Rules.Destination.AccessControlTranslation": "AccessControlTranslation",
        "s3.ReplicationConfiguration.Rules.Destination.EncryptionConfiguration": "EncryptionConfiguration",
        "s3.ReplicationConfiguration.Rules.SourceSelectionCriteria": "SourceSelectionCriteria",
        "s3.ReplicationConfiguration.Rules.SourceSelectionCriteria.SseKmsEncryptedObjects": "SseKmsEncryptedObjects",
        "s3.VersioningConfiguration": "VersioningConfiguration",
        "s3.WebsiteConfiguration": "WebsiteConfiguration",
        "s3.WebsiteConfiguration.RedirectAllRequestsTo": "RedirectAllRequestsTo",
        "s3.WebsiteConfiguration.RoutingRules": "RoutingRuleCondition",
        "sagemaker.OnCreate": "NotebookInstanceLifecycleConfig",
        "sagemaker.OnStart": "NotebookInstanceLifecycleConfig",
        "sagemaker.PrimaryContainer": "ContainerDefinition",
        "sagemaker.ProductionVariants": "ProductionVariant",
        "serverless.DeadLetterQueue": "DeadLetterQueue",
        "serverless.PrimaryKey": "PrimaryKey",
        "servicecatalog.ProvisioningArtifactParameters": "ProvisioningArtifactProperties",
        "servicecatalog.ProvisioningParameters": "ProvisioningParameter",
        "servicediscovery.DnsConfig": "DnsConfig",
        "servicediscovery.DnsConfig.DnsRecords": "DnsRecord",
        "servicediscovery.HealthCheckConfig": "HealthCheckConfig",
        "servicediscovery.HealthCheckCustomConfig": "HealthCheckCustomConfig",
        "ses.EventDestination": "EventDestination",
        "ses.EventDestination.CloudWatchDestination": "DimensionConfiguration",
        "ses.EventDestination.KinesisFirehoseDestination": "KinesisFirehoseDestination",
        "ses.Filter": "Filter",
        "ses.Filter.IpFilter": "IpFilter",
        "ses.Rule": "Rule",
        "ses.Rule.Actions": "WorkmailAction",
        "ses.Template": "EmailTemplate",
        "sns.Subscription": "Subscription",
        "sqs.RedrivePolicy": "RedrivePolicy",
        "ssm.ApprovalRules": "RuleGroup",
        "ssm.ApprovalRules.PatchRules": "PatchFilterGroup",
        "ssm.GlobalFilters": "PatchFilterGroup",
        "ssm.GlobalFilters.PatchFilters": "PatchFilter",
        "ssm.LoggingInfo": "LoggingInfo",
        "ssm.OutputLocation": "InstanceAssociationOutputLocation",
        "ssm.OutputLocation.S3Location": "S3OutputLocation",
        "ssm.Targets": "Targets",
        "ssm.TaskInvocationParameters": "TaskInvocationParameters",
        "ssm.TaskInvocationParameters.MaintenanceWindowAutomationParameters": "MaintenanceWindowAutomationParameters",
        "ssm.TaskInvocationParameters.MaintenanceWindowLambdaParameters": "MaintenanceWindowLambdaParameters",
        "ssm.TaskInvocationParameters.MaintenanceWindowRunCommandParameters": "NotificationConfig",
        "ssm.TaskInvocationParameters.MaintenanceWindowStepFunctionsParameters": "MaintenanceWindowStepFunctionsParameters",
        "waf.ByteMatchTuples": "ByteMatchTuples",
        "waf.ByteMatchTuples.FieldToMatch": "FieldToMatch",
        "waf.DefaultAction": "Action",
        "waf.IPSetDescriptors": "IPSetDescriptors",
        "waf.Predicates": "Predicates",
        "waf.Rules": "Rules",
        "waf.Rules.Action": "Action",
        "waf.SizeConstraints": "SizeConstraint",
        "waf.SizeConstraints.FieldToMatch": "FieldToMatch",
        "waf.SqlInjectionMatchTuples": "SqlInjectionMatchTuples",
        "waf.SqlInjectionMatchTuples.FieldToMatch": "FieldToMatch",
        "waf.XssMatchTuples": "XssMatchTuple",
        "waf.XssMatchTuples.FieldToMatch": "FieldToMatch",
        "wafregional.ByteMatchTuples": "ByteMatchTuples",
        "wafregional.ByteMatchTuples.FieldToMatch": "FieldToMatch",
        "wafregional.DefaultAction": "Action",
        "wafregional.IPSetDescriptors": "IPSetDescriptors",
        "wafregional.Predicates": "Predicates",
        "wafregional.Rules": "Rules",
        "wafregional.Rules.Action": "Action",
        "wafregional.SizeConstraints": "SizeConstraint",
        "wafregional.SizeConstraints.FieldToMatch": "FieldToMatch",
        "wafregional.SqlInjectionMatchTuples": "SqlInjectionMatchTuples",
        "wafregional.SqlInjectionMatchTuples.FieldToMatch": "FieldToMatch",
        "wafregional.XssMatchTuples": "XssMatchTuple",
        "wafregional.XssMatchTuples.FieldToMatch": "FieldToMatch"
    };

    if (keyname in auto_generated_property_mapping) {
        return keyname.split(".")[0] + "." + auto_generated_property_mapping[keyname];
    } else {
        var partial = keyname.split(".");
        while (partial.length > 1) {
            partial.splice(0, 1);
            if (partial.join(".") in auto_generated_property_mapping) {
                return keyname.split(".")[0] + "." + auto_generated_property_mapping[partial.join(".")]
            }
        }
    }

    return null;
}

function processJsParameter(param, spacing) {
    var paramitems = [];

    if (param === undefined || param === null || (Array.isArray(param) && param.length == 0))
        return undefined;
    if (typeof param == "boolean") {
        if (param)
            return "true";
        return "false";
    }
    if (typeof param == "number")
        return param;
    if (typeof param == "string") {
        var string_return = param;

        if (string_return.includes("\n")) {
            string_return = "`" + string_return + "`";
            return string_return;
        }

        return doubleQuotedString(string_return);
    }
    if (param instanceof Set) {
        param = Array.from(param);
    }
    if (Array.isArray(param)) {
        if (param.length == 0) {
            return '[]';
        }

        param.forEach(paramitem => {
            var item = processJsParameter(paramitem, spacing + 4);
            if (typeof item !== "undefined") {
                paramitems.push(item);
            }
        });

        return `[
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + ']';
    }
    if (typeof param == "object") {
        Object.keys(param).forEach(function (key) {
            var item = processJsParameter(param[key], spacing + 4);
            if (typeof item !== "undefined") {
                paramitems.push(key + ": " + processJsParameter(param[key], spacing + 4));
            }
        });

        return `{
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + '}';
    }

    return undefined;
}

function processBoto3Parameter(param, spacing) {
    var paramitems = [];

    if (param === undefined || param === null || (Array.isArray(param) && param.length == 0))
        return undefined;
    if (typeof param == "boolean") {
        if (param)
            return "True";
        return "False";
    }
    if (typeof param == "number")
        return param;
    if (typeof param == "string") {
        var string_return = param;

        if (string_return.includes("\n")) {
            string_return = "\"\"\"" + string_return.replace(/\n/g, `\n` + ' '.repeat(spacing + 4)) + "\n\"\"\"";
            return string_return;
        }

        return doubleQuotedString(string_return);
    }
    if (param instanceof Set) {
        param = Array.from(param);
    }
    if (Array.isArray(param)) {
        if (param.length == 0) {
            return '[]';
        }

        param.forEach(paramitem => {
            var item = processBoto3Parameter(paramitem, spacing + 4);
            if (typeof item !== "undefined") {
                paramitems.push(item);
            }
        });

        return `[
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + ']';
    }
    if (typeof param == "object") {
        Object.keys(param).forEach(function (key) {
            var item = processBoto3Parameter(param[key], spacing + 4);
            if (typeof item !== "undefined") {
                paramitems.push("'" + key + "': " + processBoto3Parameter(param[key], spacing + 4));
            }
        });

        return `{
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + '}';
    }

    return undefined;
}

function deplural(str) {
    if (typeof str != "string") {
        return str;
    }

    if (str.endsWith("ies")) { // TODO: Fix very primitive checks
        str = str.substring(0, str.length - 3) + "y";
    } else if (str.endsWith("ses")) {
        str = str.substring(0, str.length - 2);
    } else if (str.endsWith("s") && !str.endsWith("ss")) {
        str = str.substring(0, str.length - 1);
    }

    return str;
}

function processGoParameter(service, paramkey, param, spacing) {
    var paramitems = [];

    paramkey = deplural(paramkey);

    if (param === undefined || param === null || (Array.isArray(param) && param.length == 0))
        return undefined;
    if (typeof param == "boolean") {
        if (param)
            return "aws.Bool(true)";
        return "aws.Bool(false)";
    }
    if (typeof param == "number")
        return `aws.Int64(${param})`;
    if (typeof param == "string") {
        var string_return = param;

        if (string_return.includes("\n")) {
            string_return = "aws.String(`" + string_return + "`)";
            return string_return;
        }

        return `aws.String(${doubleQuotedString(string_return)})`;
    }
    if (param instanceof Set) {
        param = Array.from(param);
    }
    if (Array.isArray(param)) {
        if (param.length == 0) {
            return `[]*${service}.${paramkey}{}`;
        }

        param.forEach(paramitem => {
            var item = processGoParameter(service, paramkey, paramitem, spacing + 4);
            if (typeof item !== "undefined") {
                paramitems.push(item);
            }
        });

        if (paramitems.length == 0) {
            return `[]*${service}.${paramkey}{}`;
        }

        slicetype = `*${service}.${paramkey}`;
        if (paramitems[0].startsWith("aws.String(")) {
            slicetype = "*string";
        } else if (paramitems[0].startsWith("aws.Bool(")) {
            slicetype = "*bool";
        } else if (paramitems[0].startsWith("aws.Int64(")) {
            slicetype = "*int64";
        }

        return `[]${slicetype}{
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `,
` + ' '.repeat(spacing) + '}';
    }
    if (typeof param == "object") {
        Object.keys(param).forEach(function (key) {
            var item = processGoParameter(service, key, param[key], spacing + 4);
            if (typeof item !== "undefined") {
                paramitems.push(key + ": " + processGoParameter(service, key, param[key], spacing + 4));
            }
        });

        return `&${service}.${paramkey}{
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `,
` + ' '.repeat(spacing) + '}';
    }

    return undefined;
}

function outputMapBoto3(service, method, options, region, was_blocked) {
    var output = ensureInitDeclaredBoto3(service, region);
    var params = '';

    if (Object.keys(options).length) {
        for (option in options) {
            if (typeof options[option] !== "undefined" && options[option] !== null) {
                var optionvalue = processBoto3Parameter(options[option], 4);
                if (typeof optionvalue !== "undefined") {
                    params += `
    ${option}=${optionvalue},`;
                }
            }
        }
        params = params.substring(0, params.length - 1) + `
`; // remove last comma
    }

    output += `response = ${service}_client.${method}(${params})${was_blocked ? ' # blocked' : ''}
`

    return output;
}

function outputMapGo(service, method, options, region, was_blocked) {
    var output = ensureInitDeclaredGo(service, region);
    var params = '';
    var mappedservice = mapServiceJs(service).toLowerCase().replace(/\-/g, '');

    if (Object.keys(options).length) {
        for (option in options) {
            if (typeof options[option] !== "undefined" && options[option] !== null) {
                var optionvalue = processGoParameter(mappedservice, option, options[option], 8);
                if (typeof optionvalue !== "undefined") {
                    params += `
        ${option}: ${optionvalue},`;
                }
            }
        }
        params += `
    `;
    }

    output += `    _, err ${go_first_output ? ':' : ''}= ${service}svc.${method}(&${mappedservice}.${method}Input{${params}})${was_blocked ? ' // blocked' : ''}
`

    go_first_output = false;

    return output;
}

function outputMapJs(service, method, options, region, was_blocked) {
    var output = ensureInitDeclaredJs(service, region);
    var params = '';

    if (Object.keys(options).length) {
        for (option in options) {
            if (typeof options[option] !== "undefined" && options[option] !== null) {
                var optionvalue = processJsParameter(options[option], 4);
                if (typeof optionvalue !== "undefined") {
                    params += `
    ${option}: ${optionvalue},`;
                }
            }
        }
        params = "{" + params.substring(0, params.length - 1) + `
}`; // remove last comma
    }



    output += `
${service}.${method}(${params});${was_blocked ? ' // blocked' : ''}`;

    return output;
}

function getResourceName(service, requestId, cfntype) {
    if (!requestId) {
        f2trace("No request ID found for " + service);
        requestId = "";
    }

    var i = 2; // on purpose, 2 means second usage
    var proposed = "";

    if (logicalidstrategy == "shorttypeprefixhashsuffix") {
        shorttype = cfntype.split("::").pop();

        proposed = shorttype + MD5(requestId).substring(0, 7);

        while (proposed in global_used_refs && check_objects.length == 0) {
            proposed = shorttype + MD5(requestId + i).substring(0, 7);
            i += 1;
        }
    } else if (logicalidstrategy == "longtypeprefixhashsuffix") {
        longtype = cfntype.split("::")[1] + cfntype.split("::").pop();

        proposed = longtype + MD5(requestId).substring(0, 7);

        while (proposed in global_used_refs && check_objects.length == 0) {
            proposed = longtype + MD5(requestId + i).substring(0, 7);
            i += 1;
        }
    } else if (logicalidstrategy == "shorttypeprefixoptionalindexsuffix") {
        shorttype = cfntype.split("::").pop();

        proposed = shorttype;

        while (proposed in global_used_refs && check_objects.length == 0) {
            proposed = shorttype + i;
            i += 1;
        }
    } else if (logicalidstrategy == "longtypeprefixoptionalindexsuffix" || !logicalidstrategy) {
        longtype = cfntype.split("::")[1] + cfntype.split("::").pop();

        proposed = longtype;

        while (proposed in global_used_refs && check_objects.length == 0) {
            proposed = longtype + i;
            i += 1;
        }
    } else if (logicalidstrategy == "serviceprefixhashsuffix") {
        proposed = service.replace(/\-/g, "") + MD5(requestId).substring(0, 7);

        while (proposed in global_used_refs && check_objects.length == 0) {
            proposed = service.replace(/\-/g, "") + MD5(requestId + i).substring(0, 7);
            i += 1;
        }
    }

    global_used_refs[proposed] = requestId

    return proposed;
}

function lcfirststr(str) {
    if (str.toUpperCase() == str) {
        return str.toLowerCase();
    }

    var ret = ""

    var lastWasLower = true;
    while (str.length > 0) {
        if (str[0].match(/[A-Z0-9]/g)) {
            if (lastWasLower) {
                ret += str[0];
                lastWasLower = false;
            } else {
                if (str.length > 1 && !str[1].match(/[A-Z0-9]/g)) {
                    ret += str[0];
                } else {
                    ret += str[0].toLowerCase();
                }
            }
        } else {
            ret += str[0];
            lastWasLower = true;
        }
        str = str.substr(1);
    }

    if (ret.length < 3) {
        return ret.toLowerCase();
    }
    
    ret = ret[0].toLowerCase() + ret.substr(1, ret.length - 2) + ret[ret.length - 1].toLowerCase();

    return ret;
}

function tfToPulumiProp(str) {
    if (str == "") {
        return str;
    }

    var split = str.split("_");
    var ret = split.map(x => x[0].toUpperCase() + x.substr(1)).join('');
    ret = ret[0].toLowerCase() + ret.substr(1);

    return ret;
}


function tfToCdktfProp(str) {
    if (str == "") {
        return str;
    }
    
    var split = str.split("_");
    var ret = split.map(x => x[0] ? x[0].toUpperCase() : '' + x.substr(1)).join('');
    ret = ret[0].toLowerCase() + ret.substr(1);

    return ret;
}

function pythonAttr(str) {
    if (str.length < 2) {
        return str;
    }

    var ret = str.charAt(0).toLowerCase();
    str = str.substr(1);

    while (str.length > 0) {
        var char = str.charAt(0);

        if (char.match(/[A-Z]/g)) {
            ret += "_";
        }
        ret += char.toLowerCase();

        str = str.substr(1);
    }

    return ret;
}

function outputMapTroposphere(index, service, type, options, region, was_blocked, logicalId, tracked_resources) {
    var output = '';
    var params = '';

    troposervice = type.split("::")[1].toLowerCase();

    if (troposervice == "kinesisanalytics") {
        troposervice = "analytics";
    } else if (troposervice == "lambda") {
        troposervice = "awslambda";
    } else if (troposervice == "kinesisfirehose") {
        troposervice = "firehose";
    }

    tropotype = type.split("::")[2];

    if (troposervice == "elasticsearch" && tropotype == "Domain") {
        tropotype = "ElasticsearchDomain";
    } else if (troposervice == "iam" && tropotype == "Policy") {
        tropotype = "PolicyType";
    } else if (troposervice == "route53" && tropotype == "RecordSet") {
        tropotype = "RecordSetType";
    } else if (troposervice == "sns" && tropotype == "Subscription") {
        tropotype = "SubscriptionResource";
    }

    if (Object.keys(options).length) {
        for (option in options) {
            if (typeof options[option] !== "undefined" && options[option] !== null) {
                var optionvalue = processTroposphereParameter(options[option], 4, troposervice + "." + option, index, tracked_resources);
                if (typeof optionvalue !== "undefined") {
                    params += `,
    ${option}=${optionvalue}`;
                }
            }
        }
    }

    output += `${logicalId} = template.add_resource(${troposervice}.${tropotype}(
    '${logicalId}'${params}
))${was_blocked ? ' # blocked' : ''}

`;

    return output;
}

function outputMapCdk(index, service, type, options, region, was_blocked, logicalId, tracked_resources) {
    var output = '';
    var params = '';

    if (Object.keys(options).length) {
        for (option in options) {
            if (typeof options[option] !== "undefined" && options[option] !== null) {
                var initialSpacing = 12;
                if (iaclangselect == "java" || iaclangselect == "dotnet") {
                    initialSpacing = 20;
                }
                var optionvalue = processCdkParameter(options[option], initialSpacing, index, tracked_resources);
                
                if (typeof optionvalue !== "undefined") {
                    if (iaclangselect == "python") {
                        params += `
            ${pythonAttr(option)}=${optionvalue},`;
                    } else if (iaclangselect == "java") {
                        params += `
                put("${option}", ${optionvalue});`;
                    } else if (iaclangselect == "dotnet") {
                        params += `
                ["${option}"] = ${optionvalue},`;
                    } else {
                        params += `
            ${lcfirststr(option)}: ${optionvalue},`;
                    }
                }
            }
        }
    }

    cdkservice = type.split("::")[1].toLowerCase();
    if (cdkservice == "lambda" && iaclangselect == "python") {
        cdkservice = "_lambda";
    }
    cdktype = type.split("::")[2];

    if (iaclangselect == "typescript") {
        params = "{" + params.substring(0, params.length - 1) + `
        }`; // remove last comma

        output += `        const ${logicalId} = new ${cdkservice}.Cfn${cdktype}(this, '${logicalId}', ${params});

`;
    } else if (iaclangselect == "python") {
        params = params.substring(0, params.length - 1); // remove last comma
        output += `        ${logicalId.toLowerCase()} = ${cdkservice}.Cfn${cdktype}(
            self,
            "${logicalId}",${params}
        )

`;
    } else if (iaclangselect == "java") {
        output += `        CfnResource ${lcfirststr(logicalId)} = CfnResource.Builder.create(this, "${logicalId}")
            .type("${type}")
            .properties(new HashMap<String, Object>() {{
                ${params}
            }})
            .build();

`;
    } else if (iaclangselect == "dotnet") {
        params = params.substring(0, params.length - 1); // remove last comma
        output += `            var ${logicalId.toLowerCase()} = new CfnResource(this, "${logicalId}", new CfnResourceProps
            {
                Type = "${type}",
                Properties = new Dictionary<string, object>
                {${params}
                }
            });

`;
    }

    return output;
}

function outputMapCdkv2(index, service, type, options, region, was_blocked, logicalId, tracked_resources) {
    var output = '';
    var params = '';

    if (Object.keys(options).length) {
        for (option in options) {
            if (typeof options[option] !== "undefined" && options[option] !== null) {
                var initialSpacing = 12;
                if (iaclangselect == "java" || iaclangselect == "dotnet") {
                    initialSpacing = 20;
                }
                var optionvalue = processCdkv2Parameter(options[option], initialSpacing, index, tracked_resources);
                
                if (typeof optionvalue !== "undefined") {
                    if (iaclangselect == "python") {
                        params += `
            ${pythonAttr(option)}=${optionvalue},`;
                    } else if (iaclangselect == "java") {
                        params += `
                put("${option}", ${optionvalue});`;
                    } else if (iaclangselect == "dotnet") {
                        params += `
                ["${option}"] = ${optionvalue},`;
                    } else {
                        params += `
            ${lcfirststr(option)}: ${optionvalue},`;
                    }
                }
            }
        }
    }

    cdkservice = type.split("::")[1].toLowerCase();
    if (cdkservice == "lambda" && iaclangselect == "python") {
        cdkservice = "_lambda";
    }
    cdktype = type.split("::")[2];

    if (iaclangselect == "typescript") {
        params = "{" + params.substring(0, params.length - 1) + `
        }`; // remove last comma

        output += `        const ${logicalId} = new ${cdkservice}.Cfn${cdktype}(this, '${logicalId}', ${params});

`;
    } else if (iaclangselect == "python") {
        params = params.substring(0, params.length - 1); // remove last comma
        output += `        ${logicalId.toLowerCase()} = ${cdkservice}.Cfn${cdktype}(
            self,
            "${logicalId}",${params}
        )

`;
    } else if (iaclangselect == "java") {
        output += `        CfnResource ${lcfirststr(logicalId)} = CfnResource.Builder.create(this, "${logicalId}")
            .type("${type}")
            .properties(new HashMap<String, Object>() {{
                ${params}
            }})
            .build();

`;
    } else if (iaclangselect == "dotnet") {
        params = params.substring(0, params.length - 1); // remove last comma
        output += `            var ${logicalId.toLowerCase()} = new CfnResource(this, "${logicalId}", new CfnResourceProps
            {
                Type = "${type}",
                Properties = new Dictionary<string, object>
                {${params}
                }
            });

`;
    }

    return output;
}

function outputMapIam(compiled_iam_outputs) {
    var output = `{
    "Version": "2012-10-17",
    "Statement": [
`;

    for (var i = 0; i < compiled_iam_outputs.length; i++) {
        if (compiled_iam_outputs[i].mapped) {
            compiled_iam_outputs[i].action = [...new Set(compiled_iam_outputs[i].action)]; // dedup
            if (compiled_iam_outputs[i].action.length == 1) {
                compiled_iam_outputs[i].action = compiled_iam_outputs[i].action[0];
            }
            compiled_iam_outputs[i].resource = [...new Set(compiled_iam_outputs[i].resource)]; // dedup
            if (compiled_iam_outputs[i].resource.length == 1) {
                compiled_iam_outputs[i].resource = compiled_iam_outputs[i].resource[0];
            }

            var sid = "mapped" + MD5(Math.random().toString()).substring(0, 7);

            output += `        {
            "Sid": "${sid}",
            "Action": ${JSON.stringify(compiled_iam_outputs[i].action).replace(/\,/g, ",\n                ").replace(/\[/g, "[\n                ").replace(/\]/g, "\n            ]")},
            "Resource": ${JSON.stringify(compiled_iam_outputs[i].resource).replace(/\,/g, ",\n                ").replace(/\[/g, "[\n                ").replace(/\]/g, "\n            ]")},
            "Effect": ${JSON.stringify(compiled_iam_outputs[i].effect)}
        },
`;
        }
    }

    for (var i = 0; i < compiled_iam_outputs.length; i++) {
        if (!compiled_iam_outputs[i].mapped) {
            compiled_iam_outputs[i].action = [...new Set(compiled_iam_outputs[i].action)]; // dedup
            if (compiled_iam_outputs[i].action.length == 1) {
                compiled_iam_outputs[i].action = compiled_iam_outputs[i].action[0];
            }
            compiled_iam_outputs[i].resource = [...new Set(compiled_iam_outputs[i].resource)]; // dedup
            if (compiled_iam_outputs[i].resource.length == 1) {
                compiled_iam_outputs[i].resource = compiled_iam_outputs[i].resource[0];
            }

            var sid = "unmappedactions";

            output += `        {
            "Sid": "${sid}",
            "Action": ${JSON.stringify(compiled_iam_outputs[i].action).replace(/\,/g, ",\n                ").replace(/\[/g, "[\n                ").replace(/\]/g, "\n            ]")},
            "Resource": ${JSON.stringify(compiled_iam_outputs[i].resource).replace(/\,/g, ",\n                ").replace(/\[/g, "[\n                ").replace(/\]/g, "\n            ]")},
            "Effect": ${JSON.stringify(compiled_iam_outputs[i].effect)}
        },
`;
        }
    }

    output = output.substring(0, output.length - 2); // strip last comma

    output += `
    ]
}
`;

    return output;
}

function compileMapIam(compiled_iam_outputs, service, method, options, region, was_blocked) {
    var action = [
        service + ":" + method
    ];

    if (options.Action) {
        action = options.Action;
    }

    if (options.Resource) {
        compiled_iam_outputs.push({
            'mapped': true,
            'action': action,
            'resource': options.Resource,
            'effect': 'Allow'
        });
    } else {
        for (var i = 0; i < compiled_iam_outputs.length; i++) {
            if (compiled_iam_outputs[i].mapped == false) {
                compiled_iam_outputs[i].action.push(service + ":" + method);

                return compiled_iam_outputs;
            }
        }
        compiled_iam_outputs.push({
            'mapped': false,
            'action': action,
            'resource': [
                '*'
            ],
            'effect': 'Allow'
        });
    }

    if (options.secondary) { // can be single object or array of objects
        if (Array.isArray(options.secondary)) {
            for (var i = 0; i < options.secondary.length; i++) {
                compiled_iam_outputs = compileMapIam(compiled_iam_outputs, service, method, options.secondary[i], region, was_blocked);
            }
        } else {
            compiled_iam_outputs = compileMapIam(compiled_iam_outputs, service, method, options.secondary, region, was_blocked);
        }
    }

    return compiled_iam_outputs;
}

function outputMapCfn(index, service, type, options, region, was_blocked, logicalId, cfn_deletion_policy, tracked_resources) {
    var output = '';
    var params = '';

    if (Object.keys(options).length) {
        for (option in options) {
            if (options[option] !== undefined && options[option] !== null) {
                var optionvalue = processCfnParameter(options[option], (cfnspacing.length * 3), index, tracked_resources);
                
                if (!option.match(/^[a-zA-Z0-9-_]+$/g)) {
                    option = `"${option.replace(/"/g, "\\\"")}"`;
                }

                if (optionvalue !== undefined) {
                    params += `
${cfnspacing}${cfnspacing}${cfnspacing}${option}: ${optionvalue}`;
                }
            }
        }
        params += `
`;
    }

    if (params.trim() == "") {
        output += `${cfnspacing}${logicalId}:${was_blocked ? ' # blocked' : ''}${cfn_deletion_policy ? `
${cfnspacing}${cfnspacing}DeletionPolicy: "${cfn_deletion_policy}"` : ''}
${cfnspacing}${cfnspacing}Type: "${type}"

`;
    } else {
        output += `${cfnspacing}${logicalId}:${was_blocked ? ' # blocked' : ''}${cfn_deletion_policy ? `
${cfnspacing}${cfnspacing}DeletionPolicy: "${cfn_deletion_policy}"` : ''}
${cfnspacing}${cfnspacing}Type: "${type}"
${cfnspacing}${cfnspacing}Properties:${params}
`;
    }

    return output;
}

function outputMapTf(index, service, type, options, region, was_blocked, logicalId, tracked_resources) {
    var output = '';
    var params = '';

    if (Object.keys(options).length) {
        for (option in options) {
            if (typeof options[option] !== "undefined" && options[option] !== null) {
                if (Array.isArray(options[option]) && typeof options[option][0] === 'object') {
                    for (var i = 0; i < options[option].length; i++) {
                        var optionvalue = processTfParameter(options[option][i], 4, option, index, tracked_resources);
                        if (typeof optionvalue !== "undefined") {
                            if (optionvalue[0] == '{') {
                                params += `
    ${option} ${optionvalue}`;
                            } else {
                                if (option.match(/^[0-9]+$/g)) {
                                    option = "\"" + option + "\"";
                                }
                                params += `
    ${option} = ${optionvalue}`;
                            }
                        }

                    }
                } else {
                    var optionvalue = processTfParameter(options[option], 4, option, index, tracked_resources);
                    if (typeof optionvalue !== "undefined") {
                        if (options[option].constructor === Set || options[option].constructor === Map) {
                            params += `
    ${option} = ${optionvalue}`;
                        } else if (optionvalue[0] == '{') {
                            params += `
    ${option} ${optionvalue}`;
                        } else {
                            if (option.match(/^[0-9]+$/g)) {
                                option = "\"" + option + "\"";
                            }
                            params += `
    ${option} = ${optionvalue}`;
                        }
                    }
                }
            }
        }
        params += `
`;
    }

    output += `
resource "${type}" "${logicalId}" {${params}}
`;

    return output;
}

function outputMapPulumi(index, service, type, options, region, was_blocked, logicalId, tracked_resources) {
    var output = '';
    var params = '';

    // tf -> pulumi
    logicalId = logicalId.toLowerCase();
    var pulumiConversionTable = {
        'aws_api_gateway_': 'aws_apigateway_',
        'aws_cloudhsm_v2_': 'aws_cloudhsmv2_',
        'aws_launch_configuration': 'aws_ec2_launch_configuration',
        'aws_service_discovery_': 'aws_servicediscovery_',
        'aws_dx_': 'aws_directconnect_',
        'aws_directory_service_': 'aws_directoryservice_',
        'aws_instance': 'aws_ec2_instance',
        'aws_placement_group': 'aws_ec2_placement_group',
        'aws_volume_attachment': 'aws_ec2_volume_attachment',
        'aws_security_group': 'aws_ec2_security_group',
        'aws_elb': 'aws_elb_loadbalancer',
        'aws_launch_template': 'aws_ec2_launch_template',
        'aws_lb': 'aws_lb_loadbalancer',
        'aws_key_pair': 'aws_ec2_key_pair',
        'aws_elastic_beanstalk_': 'aws_elasticbeanstalk_',
        'aws_media_package_': 'aws_mediapackage_',
        'aws_media_store_': 'aws_mediastore_',
        'aws_db_': 'aws_rds_',
        'aws_ec2_transit_gateway_': 'aws_ec2transitgateway_',
        'aws_ec2_transit_gateway': 'aws_ec2transitgateway_transit_gateway',
        'aws_vpc_': 'aws_ec2_vpc_',
        'aws_vpc': 'aws_ec2_vpc',
        'aws_egress_only_internet_gateway': 'aws_ec2_egress_only_internet_gateway',
        'aws_internet_gateway': 'aws_ec2_internet_gateway',
        'aws_vpn_': 'aws_ec2_vpn_',
        'aws_route_table_': 'aws_ec2_route_table_',
        'aws_route_table': 'aws_ec2_route_table',
        'aws_network_': 'aws_ec2_network_',
        'aws_customer_gateway': 'aws_ec2_customer_gateway',
        'aws_subnet': 'aws_ec2_subnet',
        'aws_eip_': 'aws_ec2_eip_',
        'aws_eip': 'aws_ec2_eip',
        'aws_route': 'aws_ec2_route',
        'aws_nat_gateway': 'aws_ec2_nat_gateway',
        'aws_flow_log': 'aws_ec2_flow_log'
    };
    for (var k in pulumiConversionTable) {
        if (type == k) {
            type = pulumiConversionTable[k];
        } else if (k.endsWith("_") && type.startsWith(k)) {
            type = type.replace(k, pulumiConversionTable[k]);
        }
    }
    var typesplit = type.split("_");
    type = typesplit.shift() + "." + typesplit.shift() + "." + typesplit.map(x => x[0].toUpperCase() + x.substr(1)).join('');

    if (Object.keys(options).length) {
        for (option in options) {
            if (typeof options[option] !== "undefined" && options[option] !== null) {
                if (Array.isArray(options[option]) && typeof options[option][0] === 'object') {
                    for (var i = 0; i < options[option].length; i++) {
                        var optionvalue = processPulumiParameter(options[option][i], 4, index, tracked_resources);
                        if (typeof optionvalue !== "undefined") {
                            if (optionvalue[0] == '{') {
                                params += `
    ${tfToPulumiProp(option)}: ${optionvalue},`;
                            } else {
                                if (option.match(/^[0-9]+$/g)) {
                                    option = "\"" + option + "\"";
                                }
                                params += `
    ${tfToPulumiProp(option)}: ${optionvalue},`;
                            }
                        }

                    }
                } else {
                    var optionvalue = processPulumiParameter(options[option], 4, index, tracked_resources);
                    if (typeof optionvalue !== "undefined") {
                        if (optionvalue[0] == '{') {
                            params += `
    ${tfToPulumiProp(option)}: ${optionvalue},`;
                        } else {
                            if (option.match(/^[0-9]+$/g)) {
                                option = "\"" + option + "\"";
                            }
                            params += `
    ${tfToPulumiProp(option)}: ${optionvalue},`;
                        }
                    }
                }
            }
        }
        params = params.substring(0, params.length - 1) + `
`; // remove last comma
    }

    output += `
const ${logicalId} = new ${type}("${logicalId}", {${params}});
`;

    return output;
}

function outputMapCdktf(index, service, type, options, region, was_blocked, logicalId, tracked_resources) {
    var output = '';
    var params = '';

    var typesplit = type.split("_");
    typesplit.shift(); // throw away "aws_"
    type = typesplit.map(x => x[0].toUpperCase() + x.substr(1)).join('');

    if (Object.keys(options).length) {
        for (option in options) {
            if (typeof options[option] !== "undefined" && options[option] !== null) {
                var initialSpacing = 12;
                var optionvalue = processCdktfParameter(options[option], initialSpacing, index, tracked_resources);
                
                if (typeof optionvalue !== "undefined") {
                    if (iaclangselect == "typescript") {
                        params += `
            ${tfToCdktfProp(option)}: ${optionvalue},`;
                    }
                }
            }
        }
    }

    cdktype = type;

    if (iaclangselect == "typescript") {
        params = "{" + params.substring(0, params.length - 1) + `
        }`; // remove last comma

        output += `        const ${logicalId.toLowerCase()} = new ${cdktype}(this, '${logicalId}', ${params});

`;
    }

    return output;
}

function outputMapCli(service, method, options, region, was_blocked) {
    var params = '';

    if (Object.keys(options).length) {
        if ('_' in options) {
            options['_'].forEach(arg => {
                params += ` ${arg}`
            });
            delete options['_'];
        }
        if ('_cli_service' in options) {
            service = options['_cli_service'];
            delete options['_cli_service'];
        }
        for (option in options) {
            if (typeof options[option] !== "undefined") {
                if (options[option] === null) {
                    params += ` ${option}`
                } else if (typeof options[option] == "boolean") {
                    if (options[option])
                        params += ` ${option}`
                    else
                        params += ` --no-${option.substr(2)}`
                } else {
                    var optionvalue = JSON.stringify(options[option]);
                    if (typeof options[option] == "object") {
                        if (navigator.appVersion.indexOf("Win") != -1) {
                            optionvalue = "\"" + optionvalue.replace(/\"/g, "\\\"") + "\"";
                        } else {
                            optionvalue = "'" + optionvalue + "'";
                        }
                    }
                    params += ` ${option} ${optionvalue}`
                }
            }
        }
    }

    output = `aws ${service} ${method}${params} --region ${region}${was_blocked ? ' # blocked' : ''}
`;

    return output;
}

async function generateDiagram() {
    if (window && window.localStorage.getItem('uselocalstackendpoint') == "true") {
        clearDiagram();
        return;
    }

    if (tracked_resources.length < 1) {
        clearDiagram();
        return;
    }

    var message = JSON.stringify({
        action: 'spinner',
        message: 'Generating...',
        show: true,
        enabled: true
    });

    var iframe = document.getElementById('diagramframe');  
    iframe.contentWindow.postMessage(message, '*');

    var DRAWIO_MAPPINGS = {
        'athena.namedquery': {
            'friendlyname': 'Athena Named Query',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.athena;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'athena.workgroup': {
            'friendlyname': 'Athena Workgroup',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.athena;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'elasticsearch.domain': {
            'friendlyname': 'Elasticsearch Domain',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elasticsearch_service;',
            'isregional': true,
            'namekey': [
                'DomainName'
            ]
        },
        'emr.cluster': {
            'friendlyname': 'EMR Cluster',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.emr;',
            'isregional': true
        },
        'kinesis.stream': {
            'friendlyname': 'Kinesis Stream',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.kinesis_data_streams;',
            'isregional': true,
            'namekey': [
                'StreamName'
            ]
        },
        'kinesis.analyticsapplication': {
            'friendlyname': 'Analytics Application',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.kinesis_data_analytics;',
            'isregional': true
        },
        'kinesis.analyticsv2application': {
            'friendlyname': 'Analytics Application',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.kinesis_data_analytics;',
            'isregional': true
        },
        'kinesis.firehosedeliverystream': {
            'friendlyname': 'Firehose Delivery Stream',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.kinesis_data_firehose;',
            'isregional': true
        },
        'quicksight.group': {
            'friendlyname': 'QuickSight Group',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.quicksight;',
            'isregional': true
        },
        'redshift.cluster': {
            'friendlyname': 'Redshift Cluster',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.redshift;',
            'isregional': true,
            'namekey': [
                'ClusterIdentifier'
            ]
        },
        'datapipeline.pipeline': {
            'friendlyname': 'Data Pipeline',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.data_pipeline;',
            'isregional': true
        },
        'msk.cluster': {
            'friendlyname': 'Kafka Cluster',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.managed_streaming_for_kafka;',
            'isregional': true
        },
        'glue.database': {
            'friendlyname': 'Glue Database',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.glue;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'glue.table': {
            'friendlyname': 'Glue Table',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.glue;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'glue.job': {
            'friendlyname': 'Glue Job',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.glue;',
            'isregional': true
        },
        'lakeformation.resource': {
            'friendlyname': 'Lake Formation Resource',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.lake_formation;',
            'isregional': true
        },
        'amazonmq.broker': {
            'friendlyname': 'MQ Broker',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.mq;',
            'isregional': true
        },
        'sns.topic': {
            'friendlyname': 'SNS Topic',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.sns;',
            'isregional': true,
            'namekey': [
                'Attributes',
                'TopicArn'
            ]
        },
        'sqs.queue': {
            'friendlyname': 'SQS Queue',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.sqs;',
            'isregional': true,
            'namekey': [
                'Attributes',
                'QueueArn'
            ]
        },
        'appsync.graphqlapi': {
            'friendlyname': 'AppSync GraphQL API',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.appsync;',
            'isregional': true,
            'namekey': [
                'name'
            ]
        },
        'eventbridge.rule': {
            'friendlyname': 'Event Rule',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.eventbridge;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'eventbridge.eventbus': {
            'friendlyname': 'Event Bus',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.eventbridge;',
            'isregional': true
        },
        'eventbridge.schemaregistry': {
            'friendlyname': 'Schema Registry',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.eventbridge;',
            'isregional': true
        },
        'stepfunctions.statemachine': {
            'friendlyname': 'State Machine',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.step_functions;',
            'isregional': true,
            'namekey': [
                'name'
            ]
        },
        'budgets.budget': {
            'friendlyname': 'Budget',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#60A337;gradientDirection=north;fillColor=#277116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.budgets;',
            'isregional': true
        },
        'costexplorer.costcategory': {
            'friendlyname': 'Cost Category',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#60A337;gradientDirection=north;fillColor=#277116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cost_explorer;',
            'isregional': true
        },
        'managedblockchain.member': {
            'friendlyname': 'Managed Blockchain Member',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.managed_blockchain;',
            'isregional': true
        },
        'ec2.instance': {
            'friendlyname': 'EC2 Instance',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.ec2;',
            'isregional': true,
            'namekey': [
                'InstanceId'
            ]
        },
        'ec2.host': {
            'friendlyname': 'EC2 Host',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.ec2;',
            'isregional': true,
            'namekey': [
                'HostId'
            ]
        },
        'ec2.fleet': {
            'friendlyname': 'EC2 Fleet',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.ec2;',
            'isregional': true
        },
        'autoscaling.autoscalinggroup': {
            'friendlyname': 'Auto Scaling Group',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.auto_scaling2;',
            'isregional': true,
            'namekey': [
                'AutoScalingGroupName'
            ]
        },
        'ecr.repository': {
            'friendlyname': 'ECR Repository',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.ecr;',
            'isregional': true,
            'namekey': [
                'repositoryName'
            ]
        },
        'ecs.cluster': {
            'friendlyname': 'ECS Cluster',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.ecs;',
            'isregional': true,
            'namekey': [
                'clusterName'
            ]
        },
        'ecs.service': {
            'friendlyname': 'ECS Service',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.ecs;',
            'isregional': true,
            'namekey': [
                'serviceName'
            ]
        },
        'eks.cluster': {
            'friendlyname': 'EKS Cluster',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.eks;',
            'isregional': true,
            'namekey': [
                'name'
            ]
        },
        'lightsail.instance': {
            'friendlyname': 'Lightsail Instance',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.lightsail;',
            'isregional': true
        },
        'batch.computeenvironment': {
            'friendlyname': 'Batch Compute Environment',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.batch;',
            'isregional': true
        },
        'elasticbeanstalk.application': {
            'friendlyname': 'Elastic Beanstalk App',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elastic_beanstalk;',
            'isregional': true,
            'namekey': [
                'ApplicationName'
            ]
        },
        'ec2imagebuilder.imagepipeline': {
            'friendlyname': 'Image Builder Pipeline',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.ec2_image_builder;',
            'isregional': true
        },
        'lambda.function': {
            'friendlyname': 'Lambda Function',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.lambda;',
            'isregional': true,
            'namekey': [
                'Configuration',
                'FunctionName'
            ],
            'subnetkey': [
                'Configuration',
                'VpcConfig',
                'SubnetIds'
            ],
            'securitygroupkey': [
                'Configuration',
                'VpcConfig',
                'SecurityGroupIds'
            ],
            'vpckey': [
                'Configuration',
                'VpcConfig',
                'VpcId'
            ]
        },
        'elb.loadbalancer': {
            'friendlyname': 'Load Balancer',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elastic_load_balancing;',
            'isregional': true,
            'namekey': [
                'LoadBalancerName'
            ]
        },
        'elbv2.loadbalancer': {
            'friendlyname': 'V2 Load Balancer',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elastic_load_balancing;',
            'isregional': true,
            'namekey': [
                'LoadBalancerName'
            ]
        },
        'pinpoint.app': {
            'friendlyname': 'Pinpoint App',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.pinpoint;',
            'isregional': true
        },
        'ses.receiptruleset': {
            'friendlyname': 'Receipt Rule Set',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.simple_email_service;',
            'isregional': true
        },
        'rds.cluster': {
            'friendlyname': 'RDS Cluster',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.aurora;',
            'isregional': true,
            'namekey': [
                'DBClusterIdentifier'
            ]
        },
        'rds.instance': {
            'friendlyname': 'RDS Instance',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.database;',
            'isregional': true,
            'namekey': [
                'DBInstanceIdentifier'
            ]
        },
        'documentdb.cluster': {
            'friendlyname': 'DocDB Cluster',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.documentdb_with_mongodb_compatibility;',
            'isregional': true
        },
        'documentdb.instance': {
            'friendlyname': 'DocDB Instance',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.documentdb_with_mongodb_compatibility;',
            'isregional': true
        },
        'dynamodb.table': {
            'friendlyname': 'DynamoDB Table',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.dynamodb;',
            'isregional': true,
            'namekey': [
                'TableName'
            ]
        },
        'elasticache.cluster': {
            'friendlyname': 'ElastiCache Cluster',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elasticache;',
            'isregional': true,
            'namekey': [
                'CacheClusterId'
            ]
        },
        'neptune.cluster': {
            'friendlyname': 'Neptune Cluster',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.neptune;',
            'isregional': true
        },
        'neptune.instance': {
            'friendlyname': 'Neptune Instance',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.neptune;',
            'isregional': true
        },
        'qldb.ledger': {
            'friendlyname': 'QLDB Ledger',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.quantum_ledger_database;',
            'isregional': true
        },
        'dms.replicationinstance': {
            'friendlyname': 'DMS Replicaton Instance',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4AB29A;gradientDirection=north;fillColor=#116D5B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.database_migration_service;',
            'isregional': true
        },
        'cloud9.environment': {
            'friendlyname': 'Cloud9 Environment',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloud9;',
            'isregional': true,
            'namekey': [
                'name'
            ]
        },
        'codebuild.project': {
            'friendlyname': 'CodeBuild Project',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.codebuild;',
            'isregional': true,
            'namekey': [
                'name'
            ]
        },
        'codecommit.repository': {
            'friendlyname': 'CodeCommit Repo',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.codecommit;',
            'isregional': true,
            'namekey': [
                'repositoryName'
            ]
        },
        'codedeploy.application': {
            'friendlyname': 'CodeDeploy App',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.codedeploy;',
            'isregional': true,
            'namekey': [
                'applicationName'
            ]
        },
        'codepipeline.pipeline': {
            'friendlyname': 'CodePipeline Pipeline',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.codepipeline;',
            'isregional': true,
            'namekey': [
                'name'
            ]
        },
        'codestar.githubrepository': {
            'friendlyname': 'CodeStar GitHub Repo',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.codestar;',
            'isregional': true
        },
        'appstream.fleet': {
            'friendlyname': 'Appstream Fleet',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4AB29A;gradientDirection=north;fillColor=#116D5B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.appstream_20;',
            'isregional': true
        },
        'workspaces.workspace': {
            'friendlyname': 'Workspace',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4AB29A;gradientDirection=north;fillColor=#116D5B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.workspaces;',
            'isregional': true
        },
        'worklink.fleet': {
            'friendlyname': 'WorkLink Fleet',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4AB29A;gradientDirection=north;fillColor=#116D5B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.worklink;',
            'isregional': true
        },
        'gamelift.fleet': {
            'friendlyname': 'GameLift Fleet',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.gamelift;',
            'isregional': true
        },
        'iot1click.project': {
            'friendlyname': 'IoT 1-Click Project',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#60A337;gradientDirection=north;fillColor=#277116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.iot_1click;',
            'isregional': true
        },
        'iot.thing': {
            'friendlyname': 'IoT Thing',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#60A337;gradientDirection=north;fillColor=#277116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.iot_core;',
            'isregional': true,
            'namekey': [
                'thingName'
            ]
        },
        'iotevents.detectormodel': {
            'friendlyname': 'Detector Model',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#60A337;gradientDirection=north;fillColor=#277116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.iot_events;',
            'isregional': true
        },
        'greengrass.group': {
            'friendlyname': 'Greengrass Group',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#60A337;gradientDirection=north;fillColor=#277116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.greengrass;',
            'isregional': true
        },
        'iotthingsgraph.flowtemplate': {
            'friendlyname': 'Flow Template',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#60A337;gradientDirection=north;fillColor=#277116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.iot_things_graph;',
            'isregional': true
        },
        'sagemaker.model': {
            'friendlyname': 'SageMaker Model',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4AB29A;gradientDirection=north;fillColor=#116D5B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.sagemaker;',
            'isregional': true
        },
        'sagemaker.endpoint': {
            'friendlyname': 'SageMaker Endpoint',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4AB29A;gradientDirection=north;fillColor=#116D5B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.sagemaker;',
            'isregional': true
        },
        'cloudwatch.alarm': {
            'friendlyname': 'Alarm',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloudwatch;',
            'isregional': true,
            'namekey': [
                'AlarmName'
            ]
        },
        'cloudwatch.compositealarm': {
            'friendlyname': 'Alarm',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloudwatch;',
            'isregional': true
        },
        'cloudwatch.dashboard': {
            'friendlyname': 'Dashboard',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloudwatch;',
            'isregional': true
        },
        'cloudwatch.loggroup': {
            'friendlyname': 'Log Group',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloudwatch;',
            'isregional': true,
            'namekey': [
                'logGroupName'
            ]
        },
        'cloudwatch.anomalydetector': {
            'friendlyname': 'Anomaly Detector',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloudwatch;',
            'isregional': true
        },
        'cloudwatch.canary': {
            'friendlyname': 'CloudWatch Canary',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloudwatch;',
            'isregional': true
        },
        'cloudtrail.trail': {
            'friendlyname': 'CloudTrail Trail',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloudtrail;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'codeguru.profilinggroup': {
            'friendlyname': 'CodeGuru Profiling Group',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.codeguru;',
            'isregional': true
        },
        'config.configrule': {
            'friendlyname': 'Config Rule',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.config;',
            'isregional': true
        },
        'config.organizationconfigrule': {
            'friendlyname': 'Config Rule',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.config;',
            'isregional': true
        },
        //////
        'config.conformancepack': {
            'friendlyname': 'Config Conformance Pack',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.config;',
            'isregional': true,
            'namekey': [
                'ConformancePackName'
            ]
        },
        'config.organizationconformancepack': {
            'friendlyname': 'Config Conformance Pack',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.config;',
            'isregional': true,
            'namekey': [
                'OrganizationConformancePackName'
            ]
        },
        'licensemanager.licenseconfiguration': {
            'friendlyname': 'License Configuration',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.license_manager;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'opsworks.stack': {
            'friendlyname': 'OpsWorks Stack',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.opsworks;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'opsworks.app': {
            'friendlyname': 'OpsWorks App',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.opsworks;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'organizations.organization': {
            'friendlyname': 'Organization',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.organizations;',
            'isregional': false,
            'namekey': [
                'Id'
            ]
        },
        'organizations.organizationalunit': {
            'friendlyname': 'Organizational Unit',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.organizations;',
            'isregional': false,
            'namekey': [
                'Name'
            ]
        },
        'servicecatalog.portfolio': {
            'friendlyname': 'Service Catalog Portfolio',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.service_catalog;',
            'isregional': true,
            'namekey': [
                'PortfolioDetail',
                'DisplayName'
            ]
        },
        'servicecatalog.cloudformationproduct': {
            'friendlyname': 'Service Catalog Product',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.service_catalog;',
            'isregional': true,
            'namekey': [
                'ProductViewDetail',
                'ProductViewSummary',
                'Name'
            ]
        },
        'ssm.document': {
            'friendlyname': 'Document',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.systems_manager;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'ssm.parameter': {
            'friendlyname': 'Parameter',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.systems_manager;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'ssm.patchbaseline': {
            'friendlyname': 'Patch Baseline',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.systems_manager;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'elastictranscoder.pipeline': {
            'friendlyname': 'Elastic Transcoder Pipeline',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elastic_transcoder;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'mediaconvert.queue': {
            'friendlyname': 'MediaConvert Queue',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elemental_mediaconvert;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'medialive.channel': {
            'friendlyname': 'MediaLive Channel',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elemental_medialive;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'mediapackage.channel': {
            'friendlyname': 'MediaPackage Channel',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elemental_mediapackage;',
            'isregional': true,
            'namekey': [
                'Id'
            ]
        },
        'mediastore.container': {
            'friendlyname': 'MediaStore Container',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elemental_mediastore;',
            'isregional': true,
            'namekey': [
                'Container',
                'Name'
            ]
        },
        'datasync.agent': {
            'friendlyname': 'DataSync Agent',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4AB29A;gradientDirection=north;fillColor=#116D5B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.datasync;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'datasync.task': {
            'friendlyname': 'DataSync Task',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4AB29A;gradientDirection=north;fillColor=#116D5B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.datasync;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'transfer.server': {
            'friendlyname': 'Transfer Server',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4AB29A;gradientDirection=north;fillColor=#116D5B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.transfer_for_sftp;',
            'isregional': true,
            'namekey': [
                'ServerId'
            ]
        },
        'apigateway.restapi': {
            'friendlyname': 'API Gateway',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.api_gateway;',
            'isregional': true,
            'namekey': [
                'name'
            ]
        },
        'apigatewayv2.api': {
            'friendlyname': 'API Gateway',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.api_gateway;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'amplify.app': {
            'friendlyname': 'Amplify App',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.amplify;',
            'isregional': true,
            'namekey': [
                'name'
            ]
        },
        'appsync.graphqlschema': {
            'friendlyname': 'AppSync GraphQL Schema',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.appsync;',
            'isregional': true,
            'namekey': [
                'apiId'
            ]
        },
        'devicefarm.project': {
            'friendlyname': 'Device Farm Project',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.device_farm;',
            'isregional': true,
            'namekey': [
                'name'
            ]
        },
        'cloudfront.distribution': {
            'friendlyname': 'CloudFront Distribution',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloudfront;',
            'isregional': false,
            'namekey': [
                'DomainName'
            ]
        },
        'cloudfront.streamingdistribution': {
            'friendlyname': 'CloudFront RTMP Distribution',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloudfront;',
            'isregional': false,
            'namekey': [
                'DomainName'
            ]
        },
        'route53.hostedzone': {
            'friendlyname': 'Route53 Hosted Zone',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.route_53;',
            'isregional': false,
            'namekey': [
                'Name'
            ]
        },
        'route53.healthcheck': {
            'friendlyname': 'Route53 Health Check',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.route_53;',
            'isregional': false,
            'namekey': [
                'Id'
            ]
        },
        'route53.resolverendpoint': {
            'friendlyname': 'Route53 Resolver Endpoint',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.route_53;',
            'isregional': false,
            'namekey': [
                'Name'
            ]
        },
        'ec2.vpcendpoint': {
            'friendlyname': 'VPC Endpoint',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.vpc_privatelink;',
            'isregional': true,
            'namekey': [
                'VpcEndpointId'
            ]
        },
        'ec2.vpcendpointservice': {
            'friendlyname': 'VPC Endpoint Service',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.vpc_privatelink;',
            'isregional': true,
            'namekey': [
                'ServiceName'
            ]
        },
        'appmesh.mesh': {
            'friendlyname': 'AppMesh Mesh',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.app_mesh;',
            'isregional': true,
            'namekey': [
                'meshName'
            ]
        },
        'ec2.clientvpnendpoint': {
            'friendlyname': 'Client VPN Endpoint',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.client_vpn;',
            'isregional': true,
            'namekey': [
                'ClientVpnEndpointId'
            ]
        },
        'ec2.vpnconnection': {
            'friendlyname': 'Site-to-Site VPN Connection',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.site_to_site_vpn;',
            'isregional': true,
            'namekey': [
                'VpnConnectionId'
            ]
        },
        'servicediscovery.service': {
            'friendlyname': 'Cloud Map Service',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloud_map;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'directconnect.connection': {
            'friendlyname': 'Direct Connect Connection',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.direct_connect;',
            'isregional': true,
            'namekey': [
                'connectionName'
            ]
        },
        'globalaccelerator.accelerator': {
            'friendlyname': 'Global Accelerator',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.global_accelerator;',
            'isregional': false,
            'namekey': [
                'Name'
            ]
        },
        'ec2.transitgateway': {
            'friendlyname': 'Transit Gateway',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.transit_gateway;',
            'isregional': true,
            'namekey': [
                'TransitGatewayId'
            ]
        },
        'robomaker.fleet': {
            'friendlyname': 'RoboMaker Fleet',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#FE5151;gradientDirection=north;fillColor=#BE0917;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.robomaker;',
            'isregional': true,
            'namekey': [
                'name'
            ]
        },
        'groundstation.missionprofile': {
            'friendlyname': 'Mission Profile',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#517DFD;gradientDirection=north;fillColor=#2F29AF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.ground_station;',
            'isregional': true,
            'namekey': [
                'name'
            ]
        },
        'cognito.identitypool': {
            'friendlyname': 'Identity Pool',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cognito;',
            'isregional': true,
            'namekey': [
                'IdentityPoolName'
            ]
        },
        'cognito.userpool': {
            'friendlyname': 'User Pool',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cognito;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'cognito.userpoolclient': {
            'friendlyname': 'User Pool Client',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cognito;',
            'isregional': true,
            'namekey': [
                'ClientName'
            ]
        },
        'detective.graph': {
            'friendlyname': 'Detective Graph',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.detective;',
            'isregional': true
        },
        'guardduty.master': {
            'friendlyname': 'GuardDuty Master',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.guardduty;',
            'isregional': true
        },
        'guardduty.detector': {
            'friendlyname': 'GuardDuty Detector',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.guardduty;',
            'isregional': true
        },
        'inspector.resourcegroup': {
            'friendlyname': 'Inspector Resource Group',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.inspector;',
            'isregional': true
        },
        'macie.s3bucketassociation': {
            'friendlyname': 'Macie S3 Association',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.macie;',
            'isregional': true
        },
        'acm.certificate': {
            'friendlyname': 'Certificate',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.certificate_manager_3;',
            'isregional': true,
            'namekey': [
                'DomainName'
            ]
        },
        'acm.pcacertificateauthority': {
            'friendlyname': 'Private Certificate Authority',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.certificate_manager_3;',
            'isregional': true
        },
        'cloudhsm.cluster': {
            'friendlyname': 'CloudHSM Cluster',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloudhsm;',
            'isregional': true,
            'namekey': [
                'ClusterId'
            ]
        },
        'cloudhsm.hsm': {
            'friendlyname': 'CloudHSM HSM',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloudhsm;',
            'isregional': true,
            'namekey': [
                'HsmId'
            ]
        },
        'directoryservice.simplead': {
            'friendlyname': 'Simple AD',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.directory_service;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'directoryservice.microsoftad': {
            'friendlyname': 'Microsoft AD',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.directory_service;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'fms.policy': {
            'friendlyname': 'Firewall Manager Policy',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.firewall_manager;',
            'isregional': true,
            'namekey': [
                'PolicyName'
            ]
        },
        'iam.accessanalyzer': {
            'friendlyname': 'Access Analyzer',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.identity_and_access_management;',
            'isregional': true
        },
        'kms.key': {
            'friendlyname': 'KMS Key',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.key_management_service;',
            'isregional': true,
            'namekey': [
                'KeyId'
            ]
        },
        'ram.resourceshare': {
            'friendlyname': 'Resource Share',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.resource_access_manager;',
            'isregional': true,
            'namekey': [
                'name'
            ]
        },
        'secretsmanager.secret': {
            'friendlyname': 'Secret',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.secrets_manager;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'securityhub.hub': {
            'friendlyname': 'Security Hub',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.security_hub;',
            'isregional': true
        },
        'waf.v2webacl': {
            'friendlyname': 'WAF ACL',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.waf;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'waf.webacl': {
            'friendlyname': 'WAF ACL',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.waf;',
            'isregional': false,
            'namekey': [
                'Name'
            ]
        },
        'wafregional.webacl': {
            'friendlyname': 'WAF ACL',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.waf;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'ec2.volume': {
            'friendlyname': 'EBS Volume',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#60A337;gradientDirection=north;fillColor=#277116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elastic_block_store;',
            'isregional': true,
            'namekey': [
                'VolumeId'
            ]
        },
        'efs.filesystem': {
            'friendlyname': 'EFS Filesystem',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#60A337;gradientDirection=north;fillColor=#277116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elastic_file_system;',
            'isregional': true,
            'namekey': [
                'FileSystemId'
            ]
        },
        'fsx.filesystem': {
            'friendlyname': 'FSX Filesystem',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#60A337;gradientDirection=north;fillColor=#277116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.fsx;',
            'isregional': true,
            'namekey': [
                'FileSystemId'
            ]
        },
        'glacier.vault': {
            'friendlyname': 'Glacier Vault',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#60A337;gradientDirection=north;fillColor=#277116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.glacier;',
            'isregional': true,
            'namekey': [
                'VaultName'
            ]
        },
        's3.bucket': {
            'friendlyname': 'S3 Bucket',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#60A337;gradientDirection=north;fillColor=#277116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.s3;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        },
        'backup.backupvault': {
            'friendlyname': 'Backup Vault',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#60A337;gradientDirection=north;fillColor=#277116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.backup;',
            'isregional': true,
            'namekey': [
                'BackupVaultName'
            ]
        },
        'storagegateway.gateway': {
            'friendlyname': 'Storage Gateway',
            'style': 'outlineConnect=0;fontColor=#232F3E;gradientColor=#60A337;gradientDirection=north;fillColor=#277116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.storage_gateway;',
            'isregional': true,
            'namekey': [
                'GatewayName'
            ]
        },
        'default': {
            'friendlyname': '',
            'style': 'outlineConnect=0;gradientDirection=north;outlineConnect=0;fontColor=#232F3E;gradientColor=#505863;fillColor=#1E262E;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.general;',
            'isregional': true,
            'namekey': [
                'Name'
            ]
        }
    };

    // TODO: VPC, IAM* 

    async function getNetworkingInfo() {
        if ($('#section-networkingandcontentdelivery-vpc-subnets-datatable').deferredBootstrapTable('getData', {
            'useCurrentPage': true
        }).length == 0) {
            await updateDatatableNetworkingAndContentDeliveryVPC();
        }

        return {
            'subnets': $('#section-networkingandcontentdelivery-vpc-subnets-datatable').deferredBootstrapTable('getData', {
                'unfiltered': true
            })
        };
    }

    var networking_info = await getNetworkingInfo();
    var caller_id = await sdkcall("STS", "getCallerIdentity", {
        // no params
    }, true);

    var xml = '';
    var minX = 160;
    var minY = 160;
    var maxX = 160;
    var maxY = 160;
    var placedItems = {};

    var cleaned_relationships = tracked_relationships['cfn'];

    /*
    // indirect links
    for (var i=0; i<tracked_resources.length; i++) { // for each resource
        if (!DRAWIO_MAPPINGS[tracked_resources[i].obj.type]) { // that isn't mapped
            for (var j=0; j<cleaned_relationships.length; j++) {
                if (cleaned_relationships[j].sourceIndex == i) { // where a link comes from the unmapped resource
                    for (var k=0; k<cleaned_relationships.length; k++) {
                        if (cleaned_relationships[k].destinationIndex == j) { // find links to the unmapped resource
                            cleaned_relationships[k].destinationIndex = cleaned_relationships[j].destinationIndex; // and direct it to the unmapped resource's destination
                        }
                    }

                    //cleaned_relationships.splice(j, 1); // finally, remove the unmapped resource
                    //j -= 1;
                }
            }
        }
    }
    */

    for (var i=0; i<cleaned_relationships.length; i++) { // deduplicate
        for (var j=i+1; j<cleaned_relationships.length; j++) {
            if (
                cleaned_relationships[i].sourceIndex == cleaned_relationships[j].sourceIndex &&
                cleaned_relationships[i].destinationIndex == cleaned_relationships[j].destinationIndex
            ) {
                cleaned_relationships.splice(j, 1);
                j -= 1;
            }
        }
    }

    for (var i=0; i<tracked_resources.length; i++) {
        var subnetid = null;
        var securitygroupid = null;
        var vpcid = null;
        var group_properties = {
            'name': null
        };

        if (["cloudwatch.loggroup"].includes(tracked_resources[i].obj.type)) { // resources that are almost meaningless by themselves
            var found_relationship = false;
            cleaned_relationships.forEach(tracked_relationship => {
                if (tracked_relationship.sourceIndex == i || tracked_relationship.destinationIndex == i) {
                    found_relationship = true;
                }
            });
            if (!found_relationship) {
                continue;
            }
        }

        var style = DRAWIO_MAPPINGS['default']['style'];

        /*
        // All unmapped resources
        if (!DRAWIO_MAPPINGS[tracked_resources[i].obj.type]) {
            DRAWIO_MAPPINGS['default']['friendlyname'] = tracked_resources[i].obj.type;
            tracked_resources[i].obj.type = 'default';
        }
        */

        if (DRAWIO_MAPPINGS[tracked_resources[i].obj.type]) {
            style = DRAWIO_MAPPINGS[tracked_resources[i].obj.type]['style'];

            ['vpc', 'subnet', 'securitygroup', 'name'].forEach(grouptype => {
                if (DRAWIO_MAPPINGS[tracked_resources[i].obj.type][grouptype + 'key']) {
                    var running_path = tracked_resources[i].obj.data;
    
                    DRAWIO_MAPPINGS[tracked_resources[i].obj.type][grouptype + 'key'].forEach(keypart => {
                        if (running_path) {
                            if (running_path[keypart]) {
                                running_path = running_path[keypart];
                            } else {
                                running_path = null;
                            }
                        }
                    });

                    if (grouptype == 'name' && ['sqs.queue', 'sns.topic'].includes(tracked_resources[i].obj.type)) {
                        running_path = running_path.split(":").pop();
                    }

                    if (typeof running_path == "string" && running_path != "") {
                        group_properties[grouptype] = running_path;
                    } else if (Array.isArray(running_path) && running_path.length == 1) {
                        group_properties[grouptype] = running_path[0];
                    }
                }
            });

            // name by tag overrides specified name
            if (tracked_resources[i].obj.data['Tags'] && Array.isArray(tracked_resources[i].obj.data['Tags'])) {
                tracked_resources[i].obj.data['Tags'].forEach(tag => {
                    if (tag['Key'].toLowerCase() == "name") {
                        group_properties['name'] = tag['Value'];
                    }
                });
            } else if (tracked_resources[i].obj.data['Tags'] && tracked_resources[i].obj.data['Tags']['Name']) {
                group_properties['name'] = tracked_resources[i].obj.data['Tags']['Name'];
            }
        } else {
            continue; // might be a user option in the future
        }

        var x = maxX + 40;
        var y = 120;

        cleaned_relationships.forEach(tracked_relationship => {
            if (tracked_relationship.sourceIndex == i && placedItems[tracked_relationship.destinationIndex]) {
                y = 120;
                x = placedItems[tracked_relationship.destinationIndex].x;

                var foundConflict = true;
                while (foundConflict) {
                    y += 160;
                    foundConflict = false;
                    Object.values(placedItems).forEach(placedItem => {
                        if (placedItem.x == x && placedItem.y == y) {
                            foundConflict = true;
                        }
                    });
                }
            }
        });
        
        /*if (group_properties['subnet']) {
            xml = `
        <mxCell id="former2subnet-${i}" value="${group_properties['subnet']}" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_security_group;grStroke=0;strokeColor=#147EBA;fillColor=#E6F2F8;verticalAlign=top;align=left;spacingLeft=30;fontColor=#147EBA;dashed=0;" parent="1" vertex="1">
            <mxGeometry x="${x+80}" y="${y+80}" width="160" height="160" as="geometry" />
        </mxCell>` + xml;

            networking_info['subnets'].forEach(subnet => {
                if (subnet.f2id == group_properties['subnet']) {
                    xml = `
        <mxCell id="former2az-${i}" value="${subnet.availabilityzone}" style="fillColor=none;strokeColor=#147EBA;dashed=1;verticalAlign=top;fontStyle=0;fontColor=#147EBA;" parent="1" vertex="1">
            <mxGeometry x="${x+40}" y="${y}" width="240" height="320" as="geometry" />
        </mxCell>` + xml;
                    xml = `
        <mxCell id="former2vpc-${i}" value="${subnet.vpcid}" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_vpc;strokeColor=#248814;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#AAB7B8;dashed=0;" parent="1" vertex="1">
            <mxGeometry x="${x}" y="${y+40}" width="320" height="240" as="geometry" />
        </mxCell>` + xml;

                    x += 120;
                    y += 120;

                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);
                    maxX = Math.max(maxX, x + 320);
                    maxY = Math.max(maxY, y + 320);
                }
            });
        }*/

        var multilinename = false;
        if (!group_properties['name']) {
            group_properties['name'] = DRAWIO_MAPPINGS[tracked_resources[i].obj.type].friendlyname;
        } else {
            if (group_properties['name'].length > 19) {
                group_properties['name'] = group_properties['name'].substr(0, 16) + "...";
            }
            group_properties['name'] = DRAWIO_MAPPINGS[tracked_resources[i].obj.type].friendlyname + "&lt;br&gt;(" + group_properties['name'] + ")";
            multilinename = true;
        }

        placedItems[i] = {
            'itemIndex': i,
            'itemDetail': tracked_resources[i],
            'x': x,
            'y': y,
            'multilinename': multilinename
        };
        xml += `
        <mxCell id="former2-${i}" value="${group_properties['name']}" style="${style}" parent="1" vertex="1">
            <mxGeometry x="${x}" y="${y}" width="78" height="78" as="geometry" />
        </mxCell>`;

        maxX = Math.max(maxX, x + 80);
        maxY = Math.max(maxY, y + 80);
    };

    if (maxX == 160 && maxY == 160) { // check for original values
        clearDiagram();
        return;
    }

    // TODO: inherited links via non-displayed nodes [ ]

    for (var i=0; i<cleaned_relationships.length; i++) {
        var sourcePlacement = false;
        var destinationPlacement = false;
        Object.values(placedItems).forEach(placedItem => {
            if (placedItem.itemIndex == cleaned_relationships[i].sourceIndex) {
                sourcePlacement = placedItem;
            }
            if (placedItem.itemIndex == cleaned_relationships[i].destinationIndex) {
                destinationPlacement = placedItem;
            }
        });
        if (sourcePlacement && destinationPlacement) {
            if (sourcePlacement.y - destinationPlacement.y > 160 && sourcePlacement.x == destinationPlacement.x) { // destination significantly above
                xml += `
        <mxCell id="former2rel-${i}" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;jumpStyle=arc;" parent="1" source="former2-${tracked_relationships['cfn'][i].sourceIndex}" target="former2-${tracked_relationships['cfn'][i].destinationIndex}" edge="1">
            <mxGeometry relative="1" as="geometry">
                <Array as="points">
                    <mxPoint x="${sourcePlacement.x - 20}" y="${sourcePlacement.y + 20}" />
                    <mxPoint x="${destinationPlacement.x - 20}" y="${destinationPlacement.y + 60}" />
                </Array>
            </mxGeometry>
        </mxCell>`;
            } else if (sourcePlacement.y - destinationPlacement.y == 160 && sourcePlacement.x == destinationPlacement.x) { // destination directly above
                xml += `
        <mxCell id="former2rel-${i}" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;jumpStyle=arc;targetPerimeterSpacing=${(destinationPlacement.multilinename ? 32 : 22)};" parent="1" source="former2-${tracked_relationships['cfn'][i].sourceIndex}" target="former2-${tracked_relationships['cfn'][i].destinationIndex}" edge="1">
            <mxGeometry relative="1" as="geometry" />
        </mxCell>`;
            } else if (destinationPlacement.y - sourcePlacement.y == 160 && sourcePlacement.x == destinationPlacement.x) { // destination directly below
                xml += `
        <mxCell id="former2rel-${i}" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;jumpStyle=arc;sourcePerimeterSpacing=${(sourcePlacement.multilinename ? 32 : 22)};" parent="1" source="former2-${tracked_relationships['cfn'][i].sourceIndex}" target="former2-${tracked_relationships['cfn'][i].destinationIndex}" edge="1">
            <mxGeometry relative="1" as="geometry" />
        </mxCell>`;
            } else { // somewhere else
                xml += `
        <mxCell id="former2rel-${i}" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;jumpStyle=arc;" parent="1" source="former2-${tracked_relationships['cfn'][i].sourceIndex}" target="former2-${tracked_relationships['cfn'][i].destinationIndex}" edge="1">
            <mxGeometry relative="1" as="geometry">
                <Array as="points">
                    <mxPoint x="${sourcePlacement.x + 100}" y="${sourcePlacement.y + 20}" />
                    <mxPoint x="${sourcePlacement.x + 100}" y="${destinationPlacement.y - 20}" />
                </Array>
            </mxGeometry>
        </mxCell>`;
            }
        }
    };

    xml = `<?xml version="1.0" encoding="UTF-8"?>
<mxfile modified="${new Date().toISOString()}" agent="Former2/1.0" etag="rS7_16A_GMVNg1aOA2n0" version="13.1.9">
    <diagram id="diagram1" name="AWS Infrastructure">
    <mxGraphModel dx="0" dy="0" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="${(maxX + 300)}" pageHeight="${(maxY + 300)}" math="0" shadow="0">
        <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="former2base-1" value="Account ${caller_id.Account}" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_aws_cloud_alt;strokeColor=#232F3E;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#232F3E;dashed=0;" parent="1" vertex="1">
            <mxGeometry x="${(minX-40)}" y="${(minY-120)}" width="${(maxX-minX+120)}" height="${(maxY-minY+240)}" as="geometry" />
        </mxCell>
        <mxCell id="former2base-2" value="${tracked_resources[0].region}" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_region;strokeColor=#147EBA;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#147EBA;dashed=0;" parent="1" vertex="1">
            <mxGeometry x="${(minX)}" y="${(minY-80)}" width="${(maxX-minX+40)}" height="${(maxY-minY+160)}" as="geometry" />
        </mxCell>` + xml + `
        </root>
    </mxGraphModel>
    </diagram>
</mxfile>`;

    var message = JSON.stringify({
        action: 'load',
        xml: xml
    });

    var iframe = document.getElementById('diagramframe');  
    iframe.contentWindow.postMessage(message, '*');    
}

function f2debug(arg) {
    // for overridding only
}

function clearDiagram() {
    var xml = `<?xml version="1.0" encoding="UTF-8"?>
<mxfile modified="${new Date().toISOString()}" agent="Former2/1.0" etag="rS7_16A_GMVNg1aOA2n0" version="13.1.9">
    <diagram id="diagram1" name="AWS Infrastructure">
    <mxGraphModel dx="0" dy="0" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1000" pageHeight="1000" math="0" shadow="0">
        <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        </root>
    </mxGraphModel>
    </diagram>
</mxfile>`;

    var iframe = document.getElementById('diagramframe');
    var message = JSON.stringify({
        action: 'load',
        xml: xml
    });
    iframe.contentWindow.postMessage(message, '*');    
}

function compileOutputs(tracked_resources, cfn_deletion_policy) {
    var services = {
        'go': [],
        'cdk': [],
        'cdkv2': [],
        'cdktf': [],
        'troposphere': []
    };
    tracked_relationships = {
        'cfn': [],
        'tf': []
    };
    for (var i = 0; i < outputs.length; i++) {
        if (!services['go'].includes(outputs[i].service)) {
            services['go'].push(outputs[i].service);
        }
    }
    for (var i = 0; i < tracked_resources.length; i++) {
        if (tracked_resources[i].type && !services['cdk'].includes(tracked_resources[i].type.split("::")[1].toLowerCase())) {
            var troposervice = tracked_resources[i].type.split("::")[1].toLowerCase();

            if (troposervice == "kinesisanalytics") {
                troposervice = "analytics";
            } else if (troposervice == "lambda") {
                troposervice = "awslambda";
            } else if (troposervice == "kinesisfirehose") {
                troposervice = "firehose";
            }

            services['cdk'].push(tracked_resources[i].type.split("::")[1].toLowerCase());
            services['cdkv2'].push(tracked_resources[i].type.split("::")[1].toLowerCase());
            services['troposphere'].push(troposervice);
        }
        if (tracked_resources[i].terraformType) {
            var typesplit = tracked_resources[i].terraformType.split("_");
            typesplit.shift(); // throw away "aws_"
            services['cdktf'].push(typesplit.map(x => x[0].toUpperCase() + x.substr(1)).join(''));
        }
    }
    services['go'] = [...new Set(services['go'])]; // dedup
    services['cdk'] = [...new Set(services['cdk'])]; // dedup
    services['cdkv2'] = [...new Set(services['cdkv2'])]; // dedup
    services['cdktf'] = [...new Set(services['cdktf'])]; // dedup
    services['troposphere'] = [...new Set(services['troposphere'])]; // dedup

    var has_cfn = false;
    var has_tf = false;
    for (var i = 0; i < tracked_resources.length; i++) {
        if (tracked_resources[i].type) {
            has_cfn = true;
        }
        if (tracked_resources[i].terraformType) {
            has_tf = true;
        }
    }

    var region = 'us-east-1';
    if (outputs[0]) {
        region = outputs[0].region;
    } else if (tracked_resources[0]) {
        region = tracked_resources[0].region;
    }

    compiled = {
        'boto3': null,
        'go': null,

        'cfn': `${!has_cfn ? '# No resources generated' : `AWSTemplateFormatVersion: "2010-09-09"
Metadata:
${cfnspacing}Generator: "former2"
Description: ""
`}`,

        'tf': `${!has_tf ? '# No resources generated' : `terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
            version = "~> 3.0"
        }
    }
}

provider "aws" {
    region = "${tracked_resources[0].region}"
}
`}`,
        'pulumi': `${(iaclangselect == "typescript") ? `${!has_tf ? '// No resources generated' : `import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
`}` : '// Selected programming language not supported for this output'}`,
        'cdktf': `${(iaclangselect == "typescript") ? `${!has_tf ? '// No resources generated' : `import { Construct } from 'constructs';
import { App, TerraformStack, TerraformOutput } from 'cdktf';
import { ${services.cdktf.map(service => `${service}`).join(', ')}, AwsProvider } from './.gen/providers/aws';

class MyStack extends TerraformStack {
    constructor(scope: Construct, name: string) {
        super(scope, name);

        new AwsProvider(this, 'aws', {
          region: '${region}'
        });

`}` : '// Selected programming language not supported for this output'}`,

        'cli': null,
        'js': null,

        'cdk': `${(iaclangselect == "typescript") ? `${!has_cfn ? '// No resources generated' : `import * as cdk from '@aws-cdk/core';
${services.cdk.map(service => `import * as ${service} from '@aws-cdk/aws-${service}';`).join(`
`)}

export class MyStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

`}` : `${(iaclangselect == "python") ? `${!has_cfn ? '# No resources generated' : `from aws_cdk import (
${services.cdk.map(service => `    aws_${service} as ${(service == "lambda") ? "_lambda" : service},`).join(`
`)}
    core as cdk
)

class MyStack(cdk.Stack):
    def __init__(self, scope: cdk.Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

`}` : `${(iaclangselect == "java") ? `${!has_cfn ? '// No resources generated' : `package com.myorg;

import software.amazon.awscdk.core.Construct;
import software.amazon.awscdk.core.Stack;
import software.amazon.awscdk.core.StackProps;
import software.amazon.awscdk.core.CfnResource;

import java.util.Arrays;
import java.util.HashMap;

public class MyStack extends Stack {
    public MyStack(final Construct scope, final String id) {
        this(scope, id, null);
    }

    public MyStack(final Construct scope, final String id, final StackProps props) {
        super(scope, id, props);
        
`}` : `${(iaclangselect == "dotnet") ? `${!has_cfn ? '// No resources generated' : `using Amazon.CDK;
using System.Collections.Generic;

namespace My
{
    public class MyStack : Stack
    {
        public MyStack(Construct scope, string id, IStackProps props = null) : base(scope, id, props)
        {
`}` : '// Selected programming language not supported for this output'}`}`}`}`,

        'cdkv2': `${(iaclangselect == "typescript") ? `${!has_cfn ? '// No resources generated' : `import * as cdk from 'aws-cdk-lib';
${services.cdkv2.map(service => `import * as ${service} from 'aws-cdk-lib/aws-${service}';`).join(`
`)}

export class MyStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

`}` : `${(iaclangselect == "python") ? `${!has_cfn ? '# No resources generated' : `from aws_cdk import (
${services.cdkv2.map(service => `    aws_${service} as ${(service == "lambda") ? "_lambda" : service},`).join(`
`)}
    core as cdk
)

class MyStack(cdk.Stack):
    def __init__(self, scope: cdk.Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

`}` : `${(iaclangselect == "java") ? `${!has_cfn ? '// No resources generated' : `package com.myorg;

import software.amazon.awscdk.core.Construct;
import software.amazon.awscdk.core.Stack;
import software.amazon.awscdk.core.StackProps;
import software.amazon.awscdk.core.CfnResource;

import java.util.Arrays;
import java.util.HashMap;

public class MyStack extends Stack {
    public MyStack(final Construct scope, final String id) {
        this(scope, id, null);
    }

    public MyStack(final Construct scope, final String id, final StackProps props) {
        super(scope, id, props);
        
`}` : `${(iaclangselect == "dotnet") ? `${!has_cfn ? '// No resources generated' : `using Amazon.CDK;
using System.Collections.Generic;

namespace My
{
    public class MyStack : Stack
    {
        public MyStack(Construct scope, string id, IStackProps props = null) : base(scope, id, props)
        {
`}` : '// Selected programming language not supported for this output'}`}`}`}`,

        'iam': null,

        'troposphere': `${!has_cfn ? '# No resources generated' : `from troposphere import ${services.troposphere.map(service => `${service}`).join(', ')}
from troposphere import Ref, GetAtt, Template

template = Template()

template.add_version("2010-09-09")

`}`
    }

    if (has_cfn) {
        if (stack_parameters.length > 2) {
            compiled['cfn'] += `Parameters:
`;
            stack_parameters.forEach(stack_parameter => {
                if (!stack_parameter.name.startsWith("AWS::")) {
                    compiled['cfn'] += `${cfnspacing}${stack_parameter.name}:
${cfnspacing}${cfnspacing}Type: "${stack_parameter.type}"
${(stack_parameter.description && stack_parameter.description != "") ? `${cfnspacing}${cfnspacing}Description: "${stack_parameter.description.toString()}"
` : ''}${(stack_parameter.default_value && stack_parameter.default_value != "") ? `${cfnspacing}${cfnspacing}Default: "${stack_parameter.default_value.toString()}"
` : ''}${(stack_parameter.constraint_description && stack_parameter.constraint_description != "") ? `${cfnspacing}${cfnspacing}ConstraintDescription: "${stack_parameter.constraint_description.toString()}"
` : ''}${(stack_parameter.allowed_pattern && stack_parameter.allowed_pattern != "") ? `${cfnspacing}${cfnspacing}AllowedPattern: "${stack_parameter.allowed_pattern.toString()}"
` : ''}${(stack_parameter.minimum_length && stack_parameter.minimum_length != "") ? `${cfnspacing}${cfnspacing}MinimumLength: ${stack_parameter.minimum_length.toString()}
` : ''}${(stack_parameter.maximum_length && stack_parameter.maximum_length != "") ? `${cfnspacing}${cfnspacing}MaximumLength: ${stack_parameter.maximum_length.toString()}
` : ''}${(stack_parameter.minimum_value && stack_parameter.minimum_value != "") ? `${cfnspacing}${cfnspacing}MinimumValue: ${stack_parameter.minimum_value.toString()}
` : ''}${(stack_parameter.maximum_value && stack_parameter.maximum_value != "") ? `${cfnspacing}${cfnspacing}MaximumValue: ${stack_parameter.maximum_value.toString()}
` : ''}${(stack_parameter.allowed_values && stack_parameter.allowed_values != "") ? `${cfnspacing}${cfnspacing}AllowedValues:
${cfnspacing}${cfnspacing}  - "${stack_parameter.allowed_values.join(`"
${cfnspacing}${cfnspacing}  - "`)}"
` : ''}${(stack_parameter.no_echo) ? `${cfnspacing}${cfnspacing}NoEcho: true
` : ''}
`;
                }
            });
        }
        compiled['cfn'] += `Resources:
`;
    }

    declared_services = {
        'boto3': [],
        'go': [],
        'js': []
    }
    go_first_output = true;

    var compiled_iam_outputs = [];
    for (var i = 0; i < outputs.length; i++) {
        if (outputs[i].method.api) {
            compiled_iam_outputs = compileMapIam(compiled_iam_outputs, outputs[i].service, outputs[i].method.api, outputs[i].options.iam, outputs[i].region, outputs[i].was_blocked);
        }
    }
    compiled['iam'] = outputMapIam(compiled_iam_outputs);
    compiled['js'] += `\n`;
    compiled['go'] += `
    if err != nil {
        panic(err);
    }
}
`;

    for (var i = 0; i < tracked_resources.length; i++) {
        if (tracked_resources[i].type) {
            f2debug(tracked_resources[i].type);
            compiled['cfn'] += outputMapCfn(i, tracked_resources[i].service, tracked_resources[i].type, tracked_resources[i].options.cfn, tracked_resources[i].region, tracked_resources[i].was_blocked, tracked_resources[i].logicalId, cfn_deletion_policy, tracked_resources);
            if (['typescript', 'python', 'java', 'dotnet'].includes(iaclangselect)) {
                compiled['cdk'] += outputMapCdk(i, tracked_resources[i].service, tracked_resources[i].type, tracked_resources[i].options.cfn, tracked_resources[i].region, tracked_resources[i].was_blocked, tracked_resources[i].logicalId, tracked_resources);
                compiled['cdkv2'] += outputMapCdkv2(i, tracked_resources[i].service, tracked_resources[i].type, tracked_resources[i].options.cfn, tracked_resources[i].region, tracked_resources[i].was_blocked, tracked_resources[i].logicalId, tracked_resources);
            }
            compiled['troposphere'] += outputMapTroposphere(i, tracked_resources[i].service, tracked_resources[i].type, tracked_resources[i].options.cfn, tracked_resources[i].region, tracked_resources[i].was_blocked, tracked_resources[i].logicalId, tracked_resources);
        }
        if (tracked_resources[i].terraformType) {
            f2debug(tracked_resources[i].terraformType);
            compiled['tf'] += outputMapTf(i, tracked_resources[i].service, tracked_resources[i].terraformType, tracked_resources[i].options.tf, tracked_resources[i].region, tracked_resources[i].was_blocked, tracked_resources[i].logicalId, tracked_resources);
            if (['typescript'].includes(iaclangselect)) {
                compiled['pulumi'] += outputMapPulumi(i, tracked_resources[i].service, tracked_resources[i].terraformType, tracked_resources[i].options.tf, tracked_resources[i].region, tracked_resources[i].was_blocked, tracked_resources[i].logicalId, tracked_resources);
                compiled['cdktf'] += outputMapCdktf(i, tracked_resources[i].service, tracked_resources[i].terraformType, tracked_resources[i].options.tf, tracked_resources[i].region, tracked_resources[i].was_blocked, tracked_resources[i].logicalId, tracked_resources);
            }
        }
    }
    if (tracked_resources.length && compiled['cdk'].split('\n').length > 1) {
        compiled['cdk'] = compiled['cdk'].substring(0, compiled['cdk'].length - 1); // trim a newline
        compiled['cdkv2'] = compiled['cdkv2'].substring(0, compiled['cdkv2'].length - 1); // trim a newline
    }

    if (tracked_resources.length) {
        if (compiled['cdk'].split('\n').length > 1) {
            if (iaclangselect == "typescript") {
                compiled['cdk'] += `
    }
}

const app = new cdk.App();
new MyStack(app, 'my-stack-name', { env: { region: '${tracked_resources[0].region}' } });
app.synth();
`;
               compiled['cdkv2'] += `
    }
}

const app = new cdk.App();
new MyStack(app, 'my-stack-name', { env: { region: '${tracked_resources[0].region}' } });
app.synth();
`;
            } else if (iaclangselect == "python") {
                compiled['cdk'] += `

app = cdk.App()
MyStack(app, "my-stack-name", env={'region': '${tracked_resources[0].region}'})
app.synth()
`;
                compiled['cdkv2'] += `

app = cdk.App()
MyStack(app, "my-stack-name", env={'region': '${tracked_resources[0].region}'})
app.synth()
`;
            } else if (iaclangselect == "java") {
                compiled['cdk'] += `    }
}        
`;
                compiled['cdkv2'] += `    }
}        
`;
            } else if (iaclangselect == "dotnet") {
                compiled['cdk'] += `
        }
    }
}
`;
                compiled['cdkv2'] += `
        }
    }
}
`;
            }
        }
        if (compiled['troposphere'].split('\n').length > 1) {
            compiled['troposphere'] += `print(template.to_yaml())
`;
        }
        if (compiled['cdktf'].split('\n').length > 1) {
            if (iaclangselect == "typescript") {
                for (var i = 0; i < tracked_resources.length; i++) {
                    if (tracked_resources[i].terraformType) {
                        if (['typescript'].includes(iaclangselect)) {
                            compiled['cdktf'] += `        new TerraformOutput(this, '${tracked_resources[i].logicalId.toLowerCase()}', {
            value: ${tracked_resources[i].logicalId.toLowerCase()}
        });

`;
                        }
                    }
                }

                compiled['cdktf'] += `  }
}

const app = new App();
new MyStack(app, 'my-stack');
app.synth();
`;
            }
        }
    }

    if (!CLI) {
        generateDiagram();
    }

    return compiled;
}

function mapServiceJs(service) {
    var service_mapping = {
        "acm": "ACM",
        "acm-pca": "ACMPCA",
        "apigateway": "APIGateway",
        "alexaforbusiness": "AlexaForBusiness",
        "appstream": "AppStream",
        "appsync": "AppSync",
        "application-autoscaling": "ApplicationAutoScaling",
        "athena": "Athena",
        "autoscaling": "AutoScaling",
        "autoscaling-plans": "AutoScalingPlans",
        "batch": "Batch",
        "budgets": "Budgets",
        "cur": "CUR",
        "cloud9": "Cloud9",
        "clouddirectory": "CloudDirectory",
        "cloudformation": "CloudFormation",
        "cloudfront": "CloudFront",
        "cloudhsm": "CloudHSM",
        "cloudhsmv2": "CloudHSMV2",
        "cloudsearch": "CloudSearch",
        "cloudsearchdomain": "CloudSearchDomain",
        "cloudtrail": "CloudTrail",
        "cloudwatch": "CloudWatch",
        "cloudwatchevents": "CloudWatchEvents",
        "cloudwatchlogs": "CloudWatchLogs",
        "codebuild": "CodeBuild",
        "codecommit": "CodeCommit",
        "codedeploy": "CodeDeploy",
        "codepipeline": "CodePipeline",
        "codestar": "CodeStar",
        "cognito-identity": "CognitoIdentity",
        "cognito-idp": "CognitoIdentityServiceProvider",
        "cognito-sync": "CognitoSync",
        "comprehend": "Comprehend",
        "config": "ConfigService",
        "connect": "Connect",
        "costexplorer": "CostExplorer",
        "dax": "DAX",
        "dlm": "DLM",
        "dms": "DMS",
        "datapipeline": "DataPipeline",
        "devicefarm": "DeviceFarm",
        "directconnect": "DirectConnect",
        "ds": "DirectoryService",
        "discovery": "Discovery",
        "dynamodb": "DynamoDB",
        "dynamodbstreams": "DynamoDBStreams",
        "ec2": "EC2",
        "ecr": "ECR",
        "ecs": "ECS",
        "efs": "EFS",
        "eks": "EKS",
        "elb": "ELB",
        "elbv2": "ELBv2",
        "emr": "EMR",
        "es": "ES",
        "elasticache": "ElastiCache",
        "elasticbeanstalk": "ElasticBeanstalk",
        "elastictranscoder": "ElasticTranscoder",
        "fms": "FMS",
        "firehose": "Firehose",
        "gamelift": "GameLift",
        "glacier": "Glacier",
        "glue": "Glue",
        "greengrass": "Greengrass",
        "guardduty": "GuardDuty",
        "health": "Health",
        "iam": "IAM",
        "importexport": "ImportExport",
        "inspector": "Inspector",
        "iot1click-devices": "IoT1ClickDevicesService",
        "iot1click-projects": "IoT1ClickProjects",
        "iotanalytics": "IoTAnalytics",
        "iot-jobs-data": "IoTJobsDataPlane",
        "iot": "Iot",
        "iot-data": "IotData",
        "kms": "KMS",
        "kinesis": "Kinesis",
        "kinesisanalytics": "KinesisAnalytics",
        "kinesisvideo": "KinesisVideo",
        "kinesis-video-archived-media": "KinesisVideoArchivedMedia",
        "kinesis-video-media": "KinesisVideoMedia",
        "lambda": "Lambda",
        "lex-models": "LexModelBuildingService",
        "lex-runtime": "LexRuntime",
        "lightsail": "Lightsail",
        "mq": "MQ",
        "mturk": "MTurk",
        "machinelearning": "MachineLearning",
        "macie": "Macie",
        "marketplacecommerceanalytics": "MarketplaceCommerceAnalytics",
        "marketplace-entitlement": "MarketplaceEntitlementService",
        "meteringmarketplace": "MarketplaceMetering",
        "mediaconvert": "MediaConvert",
        "medialive": "MediaLive",
        "mediapackage": "MediaPackage",
        "mediastore": "MediaStore",
        "mediastore-data": "MediaStoreData",
        "mediatailor": "MediaTailor",
        "metadataservice": "MetadataService",
        "mgh": "MigrationHub",
        "mobile": "Mobile",
        "mobileanalytics": "MobileAnalytics",
        "neptune": "Neptune",
        "opsworks": "OpsWorks",
        "opsworkscm": "OpsWorksCM",
        "organizations": "Organizations",
        "pi": "PI",
        "pinpoint": "Pinpoint",
        "polly": "Polly",
        "pricing": "Pricing",
        "rds": "RDS",
        "redshift": "Redshift",
        "rekognition": "Rekognition",
        "resource-groups": "ResourceGroups",
        "resourcegroupstaggingapi": "ResourceGroupsTaggingAPI",
        "route53": "Route53",
        "route53domains": "Route53Domains",
        "route53resolver": "Route53Resolver",
        "s3": "S3",
        "ses": "SES",
        "sms": "SMS",
        "sns": "SNS",
        "sqs": "SQS",
        "ssm": "SSM",
        "sts": "STS",
        "swf": "SWF",
        "sagemaker": "SageMaker",
        "sagemaker-runtime": "SageMakerRuntime",
        "secretsmanager": "SecretsManager",
        "serverlessrepo": "ServerlessApplicationRepository",
        "servicecatalog": "ServiceCatalog",
        "servicediscovery": "ServiceDiscovery",
        "shield": "Shield",
        "simpledb": "SimpleDB",
        "snowball": "Snowball",
        "stepfunctions": "StepFunctions",
        "storagegateway": "StorageGateway",
        "support": "Support",
        "temporarycredentials": "TemporaryCredentials",
        "transcribeservice": "TranscribeService",
        "translate": "Translate",
        "waf": "WAF",
        "waf-regional": "WAFRegional",
        "workdocs": "WorkDocs",
        "workmail": "WorkMail",
        "workspaces": "WorkSpaces",
        "xray": "XRay"
    };

    return service_mapping[service] || "";
}

function lowerFirstChar(str) {
    return str.substring(0, 1).toLowerCase() + str.substring(1);
}

function convertApiToCli(str) {
    var i = 1;
    var character = '';
    var next_char = '';
    var prev_char = '';
    var outputstr = str.substring(0, 1).toLowerCase();

    while (i <= str.length) {
        character = str.charAt(i);
        next_char = str.charAt(i + 1);
        prev_char = str.charAt(i - 1);
        if (character == character.toUpperCase() && character != "" && (next_char != next_char.toUpperCase() || prev_char != prev_char.toUpperCase())) {
            outputstr += "-";
        }
        outputstr += character.toLowerCase();
        i++;
    }

    return outputstr;
}

function recursiveParamsFromXml(node) {
    var ret = {};

    for (var child in node.children) {
        if (node.children[child].tagName) {
            if (node.children[child].children && node.children[child].children.length > 0) {
                ret[node.children[child].tagName] = recursiveParamsFromXml(node.children[child]);
            } else {
                ret[node.children[child].tagName] = node.children[child].textContent;
            }
        }
    }

    return ret;
}

function addToParamsFromXml(params, xml) {
    var xmlobj = new DOMParser().parseFromString(xml, "text/xml");
    var root = xmlobj.firstChild;
    var tagname = root.tagName;
    var value = recursiveParamsFromXml(xmlobj);

    params.boto3[tagname] = value[tagname];
    params.cli['--' + convertApiToCli(tagname)] = JSON.stringify(value[tagname]);

    return params;
}

/* ========================================================================== */
// Mappings
/* ========================================================================== */

function performF2Mappings(objects) {
    var tracked_resources = [];
    global_used_refs = {};

    objects.forEach(obj => {
        try {
            var reqParams = {
                'boto3': {},
                'go': {},
                'cfn': {},
                'cli': {},
                'tf': {},
                'pulumi': {},
                'cdktf': {},
                'iam': {}
            };

            var service_mapping_success = false;
            service_mapping_functions.forEach(service_mapping_function => {
                try {
                    if (service_mapping_function(reqParams, obj, tracked_resources)) {
                        service_mapping_success = true;
                    }
                } catch (err) {
                    $.notify({
                        icon: 'font-icon font-icon-danger',
                        title: '<strong>Error</strong>',
                        message: err.toString()
                    }, {
                        type: 'danger'
                    });
                    f2trace(err);
                }
            });

            if (!service_mapping_success) {
                $.notify({
                    icon: 'font-icon font-icon-warning',
                    title: '<strong>No Mapping Available</strong>',
                    message: 'There is currently no mappings available for the <b>' + obj.type + '</b> type.'
                }, {
                    type: 'warning'
                });
                f2log(JSON.stringify(obj));
            }
        } catch (err) {
            $.notify({
                icon: 'font-icon font-icon-danger',
                title: '<strong>Error</strong>',
                message: err.toString()
            }, {
                type: 'danger'
            });
            f2trace(err);
        }
    });

    return tracked_resources;
}

/**
 * Takes a string and returns a properly escaped yaml string.
 *
 * <p><p>
 *     This code is copied from <a href="https://github.com/eemeli/yaml">https://github.com/eemeli/yaml</a>
 *     and was originally developed by Eemeli Aro under the following copyright:
 * <p><p><p>
 *
 * Copyright Eemeli Aro <eemeli@gmail.com>
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose
 * with or without fee is hereby granted, provided that the above copyright notice
 * and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
 * OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
 * TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
 * THIS SOFTWARE.
 *
 * <p><p>
 * @see <a href="https://github.com/eemeli/yaml/blob/master/LICENSE">https://github.com/eemeli/yaml/blob/master/LICENSE</a>
 * @param value
 * @returns {string|string}
 */
function doubleQuotedString(value) {
    const json = JSON.stringify(value)

    let str = ''
    let start = 0
    for (let i = 0, ch = json[i]; ch; ch = json[++i]) {
        if (ch === ' ' && json[i + 1] === '\\' && json[i + 2] === 'n') {
            // space before newline needs to be escaped to not be folded
            str += json.slice(start, i) + '\\ '
            i += 1
            start = i
            ch = '\\'
        }
        if (ch === '\\')
            switch (json[i + 1]) {
                case 'u':
                {
                    str += json.slice(start, i)
                    const code = json.substr(i + 2, 4)
                    switch (code) {
                        case '0000':
                            str += '\\0'
                            break
                        case '0007':
                            str += '\\a'
                            break
                        case '000b':
                            str += '\\v'
                            break
                        case '001b':
                            str += '\\e'
                            break
                        case '0085':
                            str += '\\N'
                            break
                        case '00a0':
                            str += '\\_'
                            break
                        case '2028':
                            str += '\\L'
                            break
                        case '2029':
                            str += '\\P'
                            break
                        default:
                            if (code.substr(0, 2) === '00') str += '\\x' + code.substr(2)
                            else str += json.substr(i, 6)
                    }
                    i += 5
                    start = i + 1
                }
                    break
                case 'n':
                    if (
                        json[i + 2] === '"'
                    ) {
                        i += 1
                    } else {
                        // folding will eat first newline
                        str += json.slice(start, i) + '\n\n'
                        while (
                            json[i + 2] === '\\' &&
                            json[i + 3] === 'n' &&
                            json[i + 4] !== '"'
                            ) {
                            str += '\n'
                            i += 2
                        }
                        str += indent
                        // space after newline needs to be escaped to not be folded
                        if (json[i + 2] === ' ') str += '\\'
                        i += 1
                        start = i + 1
                    }
                    break
                default:
                    i += 1
            }
    }
    str = start ? str + json.slice(start) : json
    return str
}
