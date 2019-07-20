/* ========================================================================== */
// Mapping Helper Functions (from AWSConsoleRecorder)
/* ========================================================================== */

var outputs = [];
var tracked_resources = [];
var global_used_refs = [];
var cfnspacing = "    ";

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
    e = function(a) {
        a = a.replace(/\r\n/g, "\n");
        for (var b = "", d = 0; d < a.length; d++) {
            var c = a.charCodeAt(d);
            128 > c ? b += String.fromCharCode(c) : (127 < c && 2048 > c ? b += String.fromCharCode(c >> 6 | 192) : (b += String.fromCharCode(c >> 12 | 224), b += String.fromCharCode(c >> 6 & 63 | 128)), b += String.fromCharCode(c & 63 | 128))
        }
        return b
    }(e);
    f = function(b) {
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
        var mappedservice = mapServiceJs(service).toLowerCase().replace(/\-/g,'');
        declared_services['go'].push(service);
        return `
    ${service}svc := ${mappedservice}.New(session.New(&aws.Config{Region: aws.String("${region}")}))

`;
    }
    return '';
}

function processTfParameter(param, spacing, index) {
    var paramitems = [];

    if (param === undefined || param === null || (Array.isArray(param) && param.length == 0))
        return undefined;
    if (typeof param == "boolean") {
        if (param)
            return 'true';
        return 'false';
    }
    if (typeof param == "number") {
        for (var i=0; i<index; i++) { // correlate
            if (tracked_resources[i].returnValues && tracked_resources[i].returnValues.Terraform) {
                for (var attr_name in tracked_resources[i].returnValues.Terraform) {
                    if (tracked_resources[i].returnValues.Terraform[attr_name] == param) {
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

        for (var i=0; i<index; i++) { // correlate
            if (tracked_resources[i].returnValues && tracked_resources[i].returnValues.Terraform) {
                for (var attr_name in tracked_resources[i].returnValues.Terraform) {
                    if (tracked_resources[i].returnValues.Terraform[attr_name] == param) {
                        return "\"${" + tracked_resources[i].terraformType + "." + tracked_resources[i].logicalId + "." + attr_name + "}\""
                    }
                }
            }
        }

        var string_return = param;

        if (string_return.includes("\n")) {
            string_return = "<<EOF\n" + string_return + "\nEOF";
            return string_return;
        }
        
        string_return = param.replace(/\"/g,`\\"`);

        return `"${string_return}"`;
    }
    if (Array.isArray(param)) {
        if (param.length == 0) {
            return '[]';
        }

        param.forEach(paramitem => {
            paramitems.push(processTfParameter(paramitem, spacing + 4, index));
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
            var subvalue = processTfParameter(param[key], spacing + 4, index);
            if (typeof subvalue !== "undefined") {
                if (subvalue[0] == '{') {
                    paramitems.push(key + " " + subvalue);
                } else {
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

function processCfnParameter(param, spacing, index) {
    var paramitems = [];

    if (param === undefined || param === null || (Array.isArray(param) && param.length == 0))
        return undefined;
    if (typeof param == "boolean") {
        if (param)
            return 'true';
        return 'false';
    }
    if (typeof param == "number") {
        for (var i=0; i<index; i++) { // correlate
            if (tracked_resources[i].returnValues) {
                if (tracked_resources[i].returnValues.Ref == param) {
                    return "!Ref " + tracked_resources[i].logicalId;
                }
                if (tracked_resources[i].returnValues.GetAtt) {
                    for (var attr_name in tracked_resources[i].returnValues.GetAtt) {
                        if (tracked_resources[i].returnValues.GetAtt[attr_name] === param) {
                            return "!GetAtt " + tracked_resources[i].logicalId + "." + attr_name;
                        }
                    }
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
        for (var i=0; i<index; i++) { // correlate
            if (tracked_resources[i].returnValues && param != "") {
                if (
                    tracked_resources[i].returnValues.Ref == param &&
                    tracked_resources[i].returnValues.Ref != "" &&
                    tracked_resources[i].returnValues.Ref != []
                ) {
                    return "!Ref " + tracked_resources[i].logicalId;
                }
                if (tracked_resources[i].returnValues.GetAtt) {
                    for (var attr_name in tracked_resources[i].returnValues.GetAtt) {
                        if (
                            tracked_resources[i].returnValues.GetAtt[attr_name] === param &&
                            tracked_resources[i].returnValues.GetAtt[attr_name] != "" &&
                            tracked_resources[i].returnValues.GetAtt[attr_name] != []
                        ) {
                            return "!GetAtt " + tracked_resources[i].logicalId + "." + attr_name;
                        }
                    }
                }
                if (
                    param.includes(tracked_resources[i].returnValues.Ref) &&
                    tracked_resources[i].returnValues.Ref != "" &&
                    tracked_resources[i].returnValues.Ref != []
                ) {
                    for (var j=0; j<10; j++) { // replace many
                        pre_return_str = "!Sub ";
                        param = param.replace(tracked_resources[i].returnValues.Ref, "${" + tracked_resources[i].logicalId + "}");
                    }
                }
                if (tracked_resources[i].returnValues.GetAtt) {
                    for (var attr_name in tracked_resources[i].returnValues.GetAtt) {
                        if (
                            param.includes(tracked_resources[i].returnValues.GetAtt[attr_name]) &&
                            tracked_resources[i].returnValues.GetAtt[attr_name] != "" &&
                            tracked_resources[i].returnValues.GetAtt[attr_name] != []
                        ) {
                            for (var j=0; j<10; j++) { // replace many
                                pre_return_str = "!Sub ";
                                param = param.replace(tracked_resources[i].returnValues.GetAtt[attr_name], "${" + tracked_resources[i].logicalId + "." + attr_name + "}");
                            }
                        }
                    }
                }
            }
        }
        
        var string_return = param;

        if (string_return.includes("\n")) {
            string_return = "|\n" + ' '.repeat(spacing + 4) + string_return.replace(/\n/g, `\n` + ' '.repeat(spacing + 4));
            return pre_return_str + string_return;
        }
        
        string_return = param.replace(/\"/g,`\\"`);

        return pre_return_str + `"${string_return}"`;
    }
    if (Array.isArray(param)) {
        if (param.length == 0) {
            return '[]';
        }

        param.forEach(paramitem => {
            paramitems.push(processCfnParameter(paramitem, spacing, index));
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
            var subvalue = processCfnParameter(param[key], spacing + cfnspacing.length, index);
            if (typeof subvalue !== "undefined") {
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

function processCdktsParameter(param, spacing, index) {
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
        if (param.startsWith("!Ref ") || param.startsWith("!GetAtt ")) {
            return undefined; // TODO: Fix this
        }

        for (var i=0; i<index; i++) { // correlate
            if (tracked_resources[i].returnValues && param != "") {
                if (tracked_resources[i].returnValues.Ref == param) {
                    return tracked_resources[i].logicalId + ".ref";
                }
                if (tracked_resources[i].returnValues.GetAtt) {
                    for (var attr_name in tracked_resources[i].returnValues.GetAtt) {
                        if (tracked_resources[i].returnValues.GetAtt[attr_name] === param) {
                            return tracked_resources[i].logicalId + ".getAtt('" + attr_name + "')"
                        }
                    }
                }
            }
        }

        var string_return = param;

        if (string_return.includes("\n")) {
            string_return = "`" + string_return + "`";
            return string_return;
        }
        
        string_return = param.replace(/\"/g,`\\"`);

        return `"${string_return}"`;
    }
    if (Array.isArray(param)) {
        if (param.length == 0) {
            return '[]';
        }

        param.forEach(paramitem => {
            var item = processCdktsParameter(paramitem, spacing + 4, index);
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
            var item = processCdktsParameter(param[key], spacing + 4, index);
            if (typeof item !== "undefined") {
                paramitems.push(lcfirststr(key) + ": " + item);
            }
        });

        return `{
` + ' '.repeat(spacing + 4) + paramitems.join(`,
` + ' '.repeat(spacing + 4)) + `
` + ' '.repeat(spacing) + '}';
    }
    
    return undefined;
}

function processTroposphereParameter(param, spacing, keyname, index) {
    var paramitems = [];

    if (param === undefined || param === null || (Array.isArray(param) && param.length == 0))
        return undefined;
    if (typeof param == "boolean") {
        if (param)
            return `True`;
        return `False`;
    }
    if (typeof param == "number") {
        for (var i=0; i<index; i++) { // correlate
            if (tracked_resources[i].returnValues && param != "") {
                if (tracked_resources[i].returnValues.Ref == param) {
                    return "Ref(" + tracked_resources[i].logicalId + ")";
                }
                if (tracked_resources[i].returnValues.GetAtt) {
                    for (var attr_name in tracked_resources[i].returnValues.GetAtt) {
                        if (tracked_resources[i].returnValues.GetAtt[attr_name] === param) {
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

        for (var i=0; i<index; i++) { // correlate
            if (tracked_resources[i].returnValues && param != "") {
                if (tracked_resources[i].returnValues.Ref == param) {
                    return "Ref(" + tracked_resources[i].logicalId + ")";
                }
                if (tracked_resources[i].returnValues.GetAtt) {
                    for (var attr_name in tracked_resources[i].returnValues.GetAtt) {
                        if (tracked_resources[i].returnValues.GetAtt[attr_name] === param) {
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
        
        string_return = param.replace(/'/g,`\\'`);

        return `'${string_return}'`;
    }
    if (Array.isArray(param)) {
        if (param.length == 0) {
            return '[]';
        }

        param.forEach(paramitem => {
            var item = processTroposphereParameter(paramitem, spacing + 4, keyname, index);
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
            var item = processTroposphereParameter(param[key], spacing + 4, keyname + "." + key, index);
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
            for (var j=0; j<obj[key].listValues.length; j++) {
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
            for (var j=0; j<obj[key].numberSetValues.length; j++) {
                ret[obj[key].name].push(Number(obj[key].numberSetValues[j]));
            }
        } else if (obj[key].type == "StringSet") {
            ret[obj[key].name] = [];
            for (var j=0; j<obj[key].stringSetValues.length; j++) {
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

    console.log("Unknown Troposphere mapping: " + keyname);

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
        
        string_return = param.replace(/\"/g,`\\"`);

        return `"${string_return}"`;
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
        
        string_return = param.replace(/'/g,`\\'`);

        return `'${string_return}'`;
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
        str = str.substring(0,str.length-3) + "y";
    } else if (str.endsWith("ses")) {
        str = str.substring(0,str.length-2);
    } else if (str.endsWith("s") && !str.endsWith("ss")) {
        str = str.substring(0,str.length-1);
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
        
        string_return = param.replace(/\"/g,`\\"`);

        return `aws.String("${string_return}")`;
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
    var mappedservice = mapServiceJs(service).toLowerCase().replace(/\-/g,'');

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

function getResourceName(service, requestId) {
    if (!requestId) {
        console.trace("No request ID found for " + service);
    }

    var i = 1; // on purpose, 2 means second usage
    var proposed = service.replace(/\-/g, "") + MD5(requestId).substring(0,7);

    while (global_used_refs.includes(proposed)) {
        proposed = service.replace(/\-/g, "") + MD5(requestId + i).substring(0,7);
        i += 1;
    }

    global_used_refs.push(proposed);

    return proposed;
}

function lcfirststr(str) {
    if (str.toUpperCase() == str) {
        return str.toLowerCase();
    }

    var ret = str.charAt(0).toLowerCase();

    if (str.length > 1 && str[1].toUpperCase() == str[1]) {
        var i = 1;
        while (str.length > i && str[i].toUpperCase() == str[i]) {
            ret += str[i].toLowerCase();
            i++;
        }
        ret = ret.substring(0, ret.length-1) + ret.charAt(ret.length-1).toUpperCase() + str.substring(ret.length);
    } else {
        ret += str.substring(1);
    }

    return ret;
}

function outputMapTroposphere(index, service, type, options, region, was_blocked, logicalId) {
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
                var optionvalue = processTroposphereParameter(options[option], 4, troposervice + "." + option, index);
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

function outputMapCdkts(index, service, type, options, region, was_blocked, logicalId) {
    var output = '';
    var params = '';

    if (Object.keys(options).length) {
        for (option in options) {
            if (typeof options[option] !== "undefined" && options[option] !== null) {
                var optionvalue = processCdktsParameter(options[option], 12, index);
                if (typeof optionvalue !== "undefined") {
                    params += `
            ${lcfirststr(option)}: ${optionvalue},`;
                }
            }
        }
        params = "{" + params.substring(0, params.length - 1) + `
        }`; // remove last comma
    }

    cdkservice = type.split("::")[1].toLowerCase();
    cdktype = type.split("::")[2];

    output += `        const ${logicalId} = new ${cdkservice}.Cfn${cdktype}(this, '${logicalId}', ${params});${was_blocked ? ' // blocked' : ''}

`;

    return output;
}

function outputMapIam(compiled_iam_outputs) {
    var output = `{
    "Version": "2012-10-17",
    "Statement": [
`;

    for (var i=0; i<compiled_iam_outputs.length; i++) {
        if (compiled_iam_outputs[i].mapped) {
            compiled_iam_outputs[i].action = [...new Set(compiled_iam_outputs[i].action)]; // dedup
            if (compiled_iam_outputs[i].action.length == 1) {
                compiled_iam_outputs[i].action = compiled_iam_outputs[i].action[0];
            }
            compiled_iam_outputs[i].resource = [...new Set(compiled_iam_outputs[i].resource)]; // dedup
            if (compiled_iam_outputs[i].resource.length == 1) {
                compiled_iam_outputs[i].resource = compiled_iam_outputs[i].resource[0];
            }

            var sid = "mapped" + MD5(Math.random().toString()).substring(0,7);

            output += `        {
            "Sid": "${sid}",
            "Action": ${JSON.stringify(compiled_iam_outputs[i].action).replace(/\,/g,",\n                ").replace(/\[/g,"[\n                ").replace(/\]/g,"\n            ]")},
            "Resource": ${JSON.stringify(compiled_iam_outputs[i].resource).replace(/\,/g,",\n                ").replace(/\[/g,"[\n                ").replace(/\]/g,"\n            ]")},
            "Effect": ${JSON.stringify(compiled_iam_outputs[i].effect)}
        },
`;
        }
    }

    for (var i=0; i<compiled_iam_outputs.length; i++) {
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
            "Action": ${JSON.stringify(compiled_iam_outputs[i].action).replace(/\,/g,",\n                ").replace(/\[/g,"[\n                ").replace(/\]/g,"\n            ]")},
            "Resource": ${JSON.stringify(compiled_iam_outputs[i].resource).replace(/\,/g,",\n                ").replace(/\[/g,"[\n                ").replace(/\]/g,"\n            ]")},
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
        for (var i=0; i<compiled_iam_outputs.length; i++) {
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
            for (var i=0; i<options.secondary.length; i++) {
                compiled_iam_outputs = compileMapIam(compiled_iam_outputs, service, method, options.secondary[i], region, was_blocked);
            }
        } else {
            compiled_iam_outputs = compileMapIam(compiled_iam_outputs, service, method, options.secondary, region, was_blocked);
        }
    }

    return compiled_iam_outputs;
}

function outputMapCfn(index, service, type, options, region, was_blocked, logicalId) {
    var output = '';
    var params = '';

    if (Object.keys(options).length) {
        for (option in options) {
            if (options[option] !== undefined && options[option] !== null) {
                var optionvalue = processCfnParameter(options[option], (cfnspacing.length * 3), index);

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
        output += `${cfnspacing}${logicalId}:${was_blocked ? ' # blocked' : ''}
${cfnspacing}${cfnspacing}Type: "${type}"

`;
    } else {
        output += `${cfnspacing}${logicalId}:${was_blocked ? ' # blocked' : ''}
${cfnspacing}${cfnspacing}Type: "${type}"
${cfnspacing}${cfnspacing}Properties:${params}
`;
    }

    return output;
}

function outputMapTf(index, service, type, options, region, was_blocked, logicalId) {
    var output = '';
    var params = '';

    if (Object.keys(options).length) {
        for (option in options) {
            if (typeof options[option] !== "undefined" && options[option] !== null) {
                if (Array.isArray(options[option]) && typeof options[option][0] === 'object') {
                    for (var i=0; i<options[option].length; i++) {
                        var optionvalue = processTfParameter(options[option][i], 4, index);
                        if (typeof optionvalue !== "undefined") {
                            if (optionvalue[0] == '{') {
                                params += `
    ${option} ${optionvalue}
`;
                            } else {
                                params += `
    ${option} = ${optionvalue}`;
                            }
                        }

                    }
                } else {
                    var optionvalue = processTfParameter(options[option], 4, index);
                    if (typeof optionvalue !== "undefined") {
                        if (optionvalue[0] == '{') {
                            params += `
    ${option} ${optionvalue}
`;
                        } else {
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
                        if (navigator.appVersion.indexOf("Win")!=-1) {
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

function compileOutputs() {
    /*if (!outputs.length) {
        return {
            'boto3': '# No resources generated',
            'go': '// No resources generated',
            'cfn': '# No resources generated',
            'tf': '# No resources generated',
            'cli': '# No resources generated',
            'js': '// No resources generated',
            'cdkts': '// No resources generated',
            'iam': '// No resources generated',
            'troposphere': '# No resources generated'
        };
    }*/

    var services = {
        'go': [],
        'cdkts': [],
        'troposphere': []
    };
    for (var i=0; i<outputs.length; i++) {
        if (!services['go'].includes(outputs[i].service)) {
            services['go'].push(outputs[i].service);
        }
    }
    for (var i=0; i<tracked_resources.length; i++) {
        if (tracked_resources[i].type && !services['cdkts'].includes(tracked_resources[i].type.split("::")[1].toLowerCase())) {
            var troposervice = tracked_resources[i].type.split("::")[1].toLowerCase();

            if (troposervice == "kinesisanalytics") {
                troposervice = "analytics";
            } else if (troposervice == "lambda") {
                troposervice = "awslambda";
            } else if (troposervice == "kinesisfirehose") {
                troposervice = "firehose";
            }

            services['cdkts'].push(tracked_resources[i].type.split("::")[1].toLowerCase());
            services['troposphere'].push(troposervice);
        }
    }

    var has_cfn = false;
    var has_tf = false;
    for (var i=0; i<tracked_resources.length; i++) {
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
        'boto3': `# pip install boto3

import boto3
`,
        'go': `// go get -u github.com/aws/aws-sdk-go/...

package main

import (
    "github.com/aws/aws-sdk-go/aws"
    "github.com/aws/aws-sdk-go/aws/session"
${services.go.map(service => `    "github.com/aws/aws-sdk-go/service/${mapServiceJs(service).toLowerCase().replace(/\-/g,'')}"`).join(`
`)}
)

func main() {
`,
        'cfn': `${!has_cfn ? '# No resources generated' : `AWSTemplateFormatVersion: "2010-09-09"
Metadata:
${cfnspacing}Generator: "former2"
Description: ""
Resources:
`}`,
        'tf': `${!has_tf ? '# No resources generated' : `# https://www.terraform.io/downloads.html

provider "aws" {
    region = "${tracked_resources[0].region}"
}
`}`,
        'cli': `# pip install awscli --upgrade --user

`,
        'js': `// npm install aws-sdk

var AWS = require('aws-sdk');`,
        'cdkts': `${!has_cfn ? '// No resources generated' : `// npm i -g aws-cdk

${services.cdkts.map(service => `import ${service} = require('@aws-cdk/aws-${service}');`).join(`
`)}
import cdk = require('@aws-cdk/cdk');

class MyStack extends cdk.Stack {
    constructor(parent: cdk.App, name: string, props?: cdk.StackProps) {
        super(parent, name, props);

`}`,
        'iam': null,
        'troposphere': `${!has_cfn ? '# No resources generated' : `# pip install troposphere

from troposphere import ${services.troposphere.map(service => `${service}`).join(', ')}
from troposphere import Ref, GetAtt, Template

template = Template()

template.add_version("2010-09-09")

`}`
    }

    declared_services = {
        'boto3': [],
        'go': [],
        'js': []
    }
    go_first_output = true;

    var compiled_iam_outputs = [];
    for (var i=0; i<outputs.length; i++) {
        if (outputs[i].options.boto3) {
            compiled['boto3'] += outputMapBoto3(outputs[i].service, outputs[i].method.boto3, outputs[i].options.boto3, outputs[i].region, outputs[i].was_blocked);
            compiled['go'] += outputMapGo(outputs[i].service, outputs[i].method.api, outputs[i].options.boto3, outputs[i].region, outputs[i].was_blocked);
            compiled['js'] += outputMapJs(outputs[i].service, lowerFirstChar(outputs[i].method.api), outputs[i].options.boto3, outputs[i].region, outputs[i].was_blocked);
        }
        if (outputs[i].options.cli) {
            compiled['cli'] += outputMapCli(outputs[i].service, outputs[i].method.cli, outputs[i].options.cli, outputs[i].region, outputs[i].was_blocked);
        }
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

    for (var i=0; i<tracked_resources.length; i++) {
        if (tracked_resources[i].type) {
            compiled['cfn'] += outputMapCfn(i, tracked_resources[i].service, tracked_resources[i].type, tracked_resources[i].options.cfn, tracked_resources[i].region, tracked_resources[i].was_blocked, tracked_resources[i].logicalId);
            compiled['cdkts'] += outputMapCdkts(i, tracked_resources[i].service, tracked_resources[i].type, tracked_resources[i].options.cfn, tracked_resources[i].region, tracked_resources[i].was_blocked, tracked_resources[i].logicalId);
            compiled['troposphere'] += outputMapTroposphere(i, tracked_resources[i].service, tracked_resources[i].type, tracked_resources[i].options.cfn, tracked_resources[i].region, tracked_resources[i].was_blocked, tracked_resources[i].logicalId);
        }
        if (tracked_resources[i].terraformType) {
            compiled['tf'] += outputMapTf(i, tracked_resources[i].service, tracked_resources[i].terraformType, tracked_resources[i].options.tf, tracked_resources[i].region, tracked_resources[i].was_blocked, tracked_resources[i].logicalId);
        }
    }
    for (var i=0; i<tracked_resources.length; i++) {
        if (tracked_resources[i].type) {
            compiled['cdkts'] = compiled['cdkts'].substring(0, compiled['cdkts'].length-1); // trim a newline
            compiled['cdkts'] += `
        new cdk.Output(this, '${tracked_resources[i].logicalId}Ref', { value: ${tracked_resources[i].logicalId}.ref, disableExport: true });`;
        }
    }

    if (tracked_resources.length) {
        if (compiled['cdkts'] != "// No resources generated") {
            compiled['cdkts'] += `
    }
}

const app = new cdk.App();

new MyStack(app, 'my-stack-name', { env: { region: '${tracked_resources[0].region}' } });

app.run();
`;
        }
        if (compiled['troposphere'] != "# No resources generated") {
            compiled['troposphere'] += `print(template.to_yaml())
`;
        }
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
    return str.substring(0,1).toLowerCase() + str.substring(1);
}

function convertApiToCli(str) {
    var i = 1;
    var character = '';
    var next_char = '';
    var prev_char = '';
    var outputstr = str.substring(0,1).toLowerCase();
    
    while (i <= str.length) {
        character = str.charAt(i);
        next_char = str.charAt(i+1);
        prev_char = str.charAt(i-1);
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
    global_used_refs = [];

    objects.forEach(obj => {
        try {
            var reqParams = {
                'boto3': {},
                'go': {},
                'cfn': {},
                'cli': {},
                'tf': {},
                'iam': {}
            };
            
            if (obj.type == "lambda.function") {
                reqParams.cfn['Description'] = obj.data.Configuration.Description;
                reqParams.tf['description'] = obj.data.Configuration.Description;
                if (obj.data.Configuration.Environment && obj.data.Configuration.Environment.Variables) {
                    reqParams.cfn['Environment'] = {
                        'Variables': obj.data.Configuration.Environment.Variables
                    };
                    reqParams.tf['environment'] = {
                        'variables': obj.data.Configuration.Environment.Variables
                    };
                }
                reqParams.cfn['FunctionName'] = obj.data.Configuration.FunctionName;
                reqParams.tf['function_name'] = obj.data.Configuration.FunctionName;
                reqParams.cfn['Handler'] = obj.data.Configuration.Handler;
                reqParams.tf['handler'] = obj.data.Configuration.Handler;

                if (obj.data.Code && obj.data.Code.RepositoryType == "S3") {
                    var url = new URL(obj.data.Code.Location);

                    reqParams.cfn['Code'] = {
                        'S3Bucket': url.host.split(".")[0],
                        'S3Key': url.pathname,
                        'S3ObjectVersion': url.searchParams.get('versionId')
                    };
                    reqParams.tf['s3_bucket'] = url.host.split(".")[0];
                    reqParams.tf['s3_key'] = url.pathname;
                    reqParams.tf['s3_object_version'] = url.searchParams.get('versionId');
                }
                
                reqParams.cfn['KmsKeyArn'] = obj.data.Configuration.KMSKeyArn;
                reqParams.tf['kms_key_arn'] = obj.data.Configuration.KMSKeyArn;
                reqParams.cfn['MemorySize'] = obj.data.Configuration.MemorySize;
                reqParams.tf['memory_size'] = obj.data.Configuration.MemorySize;
                reqParams.cfn['ReservedConcurrentExecutions'] = obj.data.Configuration.ReservedConcurrentExecutions;
                reqParams.tf['reserved_concurrent_executions'] = obj.data.Configuration.ReservedConcurrentExecutions;
                reqParams.cfn['Role'] = obj.data.Configuration.Role;
                reqParams.tf['role'] = obj.data.Configuration.Role;
                reqParams.cfn['Runtime'] = obj.data.Configuration.Runtime;
                reqParams.tf['runtime'] = obj.data.Configuration.Runtime;
                reqParams.cfn['Timeout'] = obj.data.Configuration.Timeout;
                reqParams.tf['timeout'] = obj.data.Configuration.Timeout;
                if (obj.data.Configuration.TracingConfig) {
                    reqParams.cfn['TracingConfig'] = obj.data.Configuration.TracingConfig;
                    reqParams.tf['tracing_config'] = {
                        'mode': obj.data.Configuration.TracingConfig.Mode
                    };
                }

                if (obj.data.Configuration.VpcConfig && obj.data.Configuration.VpcConfig.SubnetIds && obj.data.Configuration.VpcConfig.SubnetIds.length > 0) {
                    reqParams.cfn['VpcConfig'] = {
                        'SubnetIds': obj.data.Configuration.VpcConfig.SubnetIds,
                        'SecurityGroupIds': obj.data.Configuration.VpcConfig.SecurityGroupIds
                    };
                    reqParams.tf['vpc_config'] = {
                        'subnet_ids': obj.data.Configuration.VpcConfig.SubnetIds,
                        'security_group_ids': obj.data.Configuration.VpcConfig.SecurityGroupIds
                    };
                }

                if (obj.data.Configuration.DeadLetterConfig) {
                    reqParams.cfn['DeadLetterConfig'] = {
                        'TargetArn': obj.data.Configuration.DeadLetterConfig.TargetArn
                    };
                    reqParams.tf['dead_letter_config'] = {
                        'target_arn': obj.data.Configuration.DeadLetterConfig.TargetArn
                    };
                }

                if (obj.data.Configuration.Layers) {
                    reqParams.cfn['Layers'] = [];
                    reqParams.tf['layers'] = [];
                    obj.data.Configuration.Layers.forEach(layer => {
                        reqParams.cfn['Layers'].push(layer.Arn);
                        reqParams.tf['layers'].push(layer.Arn);
                    });
                }
                
                /*
                TODO:
                Tags: 
                    Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('lambda', obj.id),
                    'region': obj.region,
                    'service': 'lambda',
                    'type': 'AWS::Lambda::Function',
                    'terraformType': 'aws_lambda_function',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.Configuration.FunctionName,
                        'GetAtt': {
                            'Arn': obj.data.Configuration.FunctionArn
                        }
                    }
                });
            } else if (obj.type == "ec2.vpc") {
                reqParams.cfn['CidrBlock'] = obj.data.CidrBlock;
                reqParams.tf['cidr_block'] = obj.data.CidrBlock;
                reqParams.cfn['EnableDnsSupport'] = obj.data.EnableDnsSupport;
                reqParams.tf['enable_dns_support'] = obj.data.EnableDnsSupport;
                reqParams.cfn['EnableDnsHostnames'] = obj.data.EnableDnsHostnames;
                reqParams.tf['enable_dns_hostnames'] = obj.data.EnableDnsHostnames;
                reqParams.cfn['InstanceTenancy'] = obj.data.InstanceTenancy;
                reqParams.tf['instance_tenancy'] = obj.data.InstanceTenancy;
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }

                var attrCidrBlockAssociations = null;
                var attrIpv6CidrBlockAssociations = null;
                /*
                var attrCidrBlockAssociations = [];
                obj.data.CidrBlockAssociationSet.forEach(cidrBlockAssociation => {
                    if (obj.data.CidrBlock != cidrBlockAssociation.CidrBlock) {
                        attrCidrBlockAssociations.push(cidrBlockAssociation.AssociationId);
                    }
                });

                var attrIpv6CidrBlockAssociations = [];
                obj.data.Ipv6CidrBlockAssociationSet.forEach(ipv6CidrBlockAssociation => {
                    attrIpv6CidrBlockAssociations.push(ipv6CidrBlockAssociation.Ipv6CidrBlock);
                });
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::VPC',
                    'terraformType': 'aws_vpc',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.VpcId,
                        'GetAtt': {
                            'CidrBlock': obj.data.CidrBlock,
                            'CidrBlockAssociations': attrCidrBlockAssociations,
                            'Ipv6CidrBlocks': attrIpv6CidrBlockAssociations
                            /*
                            TODO:
                            DefaultNetworkAcl
                            DefaultSecurityGroup
                            */
                        },
                        'Terraform': {
                            'id': obj.data.VpcId,
                            'cidr_block': obj.data.CidrBlock
                        }
                    }
                });
            } else if (obj.type == "ec2.vpccidrblock") {
                reqParams.cfn['CidrBlock'] = obj.data.CidrBlock;
                reqParams.tf['cidr_block'] = obj.data.CidrBlock;
                reqParams.cfn['VpcId'] = obj.data.VpcId;
                reqParams.tf['vpc_id'] = obj.data.VpcId;

                /*
                TODO:
                AmazonProvidedIpv6CidrBlock: Boolean
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::VPCCidrBlock',
                    'terraformType': 'aws_vpc_ipv4_cidr_block_association',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.dhcpoptionsassociation") {
                reqParams.cfn['DhcpOptionsId'] = obj.data.DhcpOptionsId;
                reqParams.tf['dhcp_options_id'] = obj.data.DhcpOptionsId;
                reqParams.cfn['VpcId'] = obj.data.VpcId;
                reqParams.tf['vpc_id'] = obj.data.VpcId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::VPCDHCPOptionsAssociation',
                    'terraformType': 'aws_vpc_dhcp_options_association',
                    'options': reqParams
                });
            } else if (obj.type == "s3.bucket") {
                reqParams.cfn['BucketName'] = obj.data.Name;
                reqParams.tf['bucket'] = obj.data.Name;
                if (obj.data.AccelerateConfiguration && obj.data.AccelerateConfiguration.Status) {
                    reqParams.cfn['AccelerateConfiguration'] = {
                        'AccelerationStatus': obj.data.AccelerateConfiguration.Status
                    };
                }
                if (obj.data.Encryption && obj.data.Encryption.ServerSideEncryptionConfiguration) {
                    reqParams.cfn['BucketEncryption'] = {
                        'ServerSideEncryptionConfiguration': obj.data.Encryption.ServerSideEncryptionConfiguration.Rules
                    };
                }
                if (obj.data.Lifecycle && obj.data.Lifecycle.Rules) {
                    var lifecyclerules = [];

                    obj.data.Lifecycle.Rules.forEach(rule => {
                        var lifecyclerule = {
                            'AbortIncompleteMultipartUpload': rule.AbortIncompleteMultipartUpload,
                            'Id': rule.ID,
                            'Prefix': rule.Prefix,
                            'Status': rule.Status
                        };

                        if (rule.Expiration) {
                            if (rule.Expiration.Date) {
                                lifecyclerule['ExpirationDate'] = rule.Expiration.Date.toISOString();
                            }
                            lifecyclerule['ExpirationInDays'] = rule.Expiration.Days;
                        }

                        if (rule.NoncurrentVersionExpiration) {
                            lifecyclerule['NoncurrentVersionExpirationInDays'] = rule.NoncurrentVersionExpiration.NoncurrentDays;
                        }

                        if (rule.NoncurrentVersionTransitions) {
                            lifecyclerule['NoncurrentVersionTransitions'] = [];
                            rule.NoncurrentVersionTransitions.forEach(transition => {
                                lifecyclerule['NoncurrentVersionTransitions'].push({
                                    'TransitionInDays': transition.NoncurrentDays,
                                    'StorageClass': transition.StorageClass
                                });
                            });
                        }

                        if (rule.Filter && rule.Filter.Tag) {
                            lifecyclerule['TagFilters'] = [rule.Filter.Tag];
                            if (rule.Filter.And && rule.Filter.And.Tags) {
                                lifecyclerule['TagFilters'] = lifecyclerule['TagFilters'].concat(rule.Filter.And.Tags);
                            }
                        }

                        if (rule.Transitions) {
                            lifecyclerule['Transitions'] = [];
                            rule.Transitions.forEach(transition => {
                                var transitiondate = null;
                                if (transition.Date) {
                                    transitiondate = transition.Date.toISOString();
                                }
                                lifecyclerule['Transitions'].push({
                                    'TransitionInDays': transition.Days,
                                    'TransitionDate': transitiondate,
                                    'StorageClass': transition.StorageClass
                                });
                            });
                        }
                        
                        lifecyclerules.push(lifecyclerule);
                    });

                    reqParams.cfn['LifecycleConfiguration'] = {
                        'Rules': lifecyclerules
                    };
                }
                if (obj.data.Cors && obj.data.Cors.CORSRules) {
                    var corsrules = [];
                    obj.data.Cors.CORSRules.forEach(corsrule => {
                        corsrules.push({
                            'AllowedHeaders': corsrule.AllowedHeaders,
                            'AllowedMethods': corsrule.AllowedMethods,
                            'AllowedOrigins': corsrule.AllowedOrigins,
                            'ExposedHeaders': corsrule.ExposedHeaders,
                            'MaxAgeSeconds': corsrule.MaxAge
                        });
                    });
                    reqParams.cfn['CorsConfiguration'] = {
                        'CorsRules': corsrules
                    };
                }
                if (obj.data.Logging && obj.data.Logging.LoggingEnabled) {
                    reqParams.cfn['LoggingConfiguration'] = {
                        'DestinationBucketName': obj.data.Logging.LoggingEnabled.TargetBucket,
                        'LogFilePrefix': obj.data.Logging.LoggingEnabled.TargetPrefix
                    };
                }
                if (obj.data.NotificationConfiguration && (obj.data.NotificationConfiguration.TopicConfigurations || obj.data.NotificationConfiguration.QueueConfigurations || obj.data.NotificationConfiguration.LambdaFunctionConfigurations)) {
                    var topicconfigurations = null;
                    var queueconfigurations = null;
                    var lambdafunctionconfigurations = null;
                    if (obj.data.NotificationConfiguration.TopicConfigurations) {
                        topicconfigurations = [];
                        obj.data.NotificationConfiguration.TopicConfigurations.forEach(configuration => {
                            var filter = null;
                            if (configuration.Filter && configuration.Filter.Key && configuration.Filter.Key.FilterRules) {
                                filter = {
                                    'S3Key': {
                                        'Rules': configuration.Filter.Key.FilterRules
                                    }
                                };
                            }
                            configuration.Events.forEach(event => {
                                topicconfigurations.push({
                                    'Event': event,
                                    'Filter': filter,
                                    'Topic': configuration.TopicArn
                                });
                            });
                        });
                    }
                    if (obj.data.NotificationConfiguration.QueueConfigurations) {
                        queueconfigurations = [];
                        obj.data.NotificationConfiguration.QueueConfigurations.forEach(configuration => {
                            var filter = null;
                            if (configuration.Filter && configuration.Filter.Key && configuration.Filter.Key.FilterRules) {
                                filter = {
                                    'S3Key': {
                                        'Rules': configuration.Filter.Key.FilterRules
                                    }
                                };
                            }
                            configuration.Events.forEach(event => {
                                queueconfigurations.push({
                                    'Event': event,
                                    'Filter': filter,
                                    'Queue': configuration.QueueArn
                                });
                            });
                        });
                    }
                    if (obj.data.NotificationConfiguration.LambdaFunctionConfigurations) {
                        lambdafunctionconfigurations = [];
                        obj.data.NotificationConfiguration.LambdaFunctionConfigurations.forEach(configuration => {
                            var filter = null;
                            if (configuration.Filter && configuration.Filter.Key && configuration.Filter.Key.FilterRules) {
                                filter = {
                                    'S3Key': {
                                        'Rules': configuration.Filter.Key.FilterRules
                                    }
                                };
                            }
                            configuration.Events.forEach(event => {
                                lambdafunctionconfigurations.push({
                                    'Event': event,
                                    'Filter': filter,
                                    'Function': configuration.LambdaFunctionArn
                                });
                            });
                        });
                    }
                    
                    if (topicconfigurations.length || queueconfigurations.length || lambdafunctionconfigurations.length) {
                        reqParams.cfn['NotificationConfiguration'] = {
                            'TopicConfigurations': topicconfigurations,
                            'QueueConfigurations': queueconfigurations,
                            'LambdaConfigurations': lambdafunctionconfigurations
                        };
                    }
                }
                if (obj.data.Replication && obj.data.Replication.ReplicationConfiguration) {
                    var rules = [];
                    obj.data.Replication.ReplicationConfiguration.Rules.forEach(rule => {
                        rules.push({
                            'Id': rule.ID,
                            'Prefix': rule.Prefix,
                            'Status': rule.Status,
                            'Destination': rule.Destination,
                            'SourceSelectionCriteria': rule.SourceSelectionCriteria
                        });
                    });
                    reqParams.cfn['ReplicationConfiguration'] = {
                        'Role': obj.data.Replication.ReplicationConfiguration.Role,
                        'Rules': rules
                    };
                }
                if (obj.data.Versioning && obj.data.Versioning.Status) {
                    reqParams.cfn['VersioningConfiguration'] = {
                        'Status': obj.data.Versioning.Status
                    };
                }
                if (obj.data.Website && obj.data.Website.IndexDocument) {
                    var errordocument = null;
                    var routingrules = null;
                    
                    if (obj.data.Website.ErrorDocument) {
                        errordocument = obj.data.Website.ErrorDocument.Key;
                    }
                    if (obj.data.Website.RoutingRules) {
                        routingrules = [];
                        obj.data.Website.RoutingRules.forEach(routingrule => {
                            routingrules.push({
                                'RedirectRule': routingrule.Redirect,
                                'RoutingRuleCondition': routingrule.Condition
                            });
                        });
                    }

                    reqParams.cfn['WebsiteConfiguration'] = {
                        'IndexDocument': obj.data.Website.IndexDocument.Suffix,
                        'RedirectAllRequestsTo': obj.data.Website.RedirectAllRequestsTo,
                        'ErrorDocument': errordocument,
                        'RoutingRules': routingrules
                    };
                }
                if (obj.data.AnalyticsConfigurations && obj.data.AnalyticsConfigurations.AnalyticsConfigurationList) {
                    reqParams.cfn['AnalyticsConfigurations'] = [];
                    obj.data.AnalyticsConfigurations.AnalyticsConfigurationList.forEach(config => {
                        var prefix = null;
                        var tagfilters = null;
                        var storageclassanalysis = null;
                        if (config.Filter) {
                            if (config.Filter.Tag) {
                                tagfilters = [config.Filter.Tag];
                                if (config.Filter.And && config.Filter.And.Tags) {
                                    tagfilters = tagfilters.concat(config.Filter.And.Tags);
                                }
                            }
                            prefix = config.Filter.Prefix;
                        }
                        if (config.StorageClassAnalysis.DataExport) {
                            storageclassanalysis = {
                                'DataExport': {
                                    'OutputSchemaVersion': config.StorageClassAnalysis.DataExport.OutputSchemaVersion,
                                    'Destination': {
                                        'BucketAccountId': config.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.BucketAccountId,
                                        'BucketArn': config.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Bucket,
                                        'Format': config.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Format,
                                        'Prefix': config.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Prefix
                                    }
                                }
                            };
                        }
                        reqParams.cfn['AnalyticsConfigurations'].push({
                            'Id': config.Id,
                            'Prefix': prefix,
                            'TagFilters': tagfilters,
                            'StorageClassAnalysis': storageclassanalysis
                        });
                    });
                }
                if (obj.data.InventoryConfigurations && obj.data.InventoryConfigurations.InventoryConfigurationList) {
                    reqParams.cfn['InventoryConfigurations'] = [];
                    obj.data.InventoryConfigurations.InventoryConfigurationList.forEach(config => {
                        var prefix = null;
                        if (config.Filter) {
                            prefix = config.Filter.Prefix;
                        }

                        reqParams.cfn['InventoryConfigurations'].push({
                            'Destination': {
                                'BucketAccountId': config.Destination.S3BucketDestination.AccountId,
                                'BucketArn': config.Destination.S3BucketDestination.Bucket,
                                'Format': config.Destination.S3BucketDestination.Format,
                                'Prefix': config.Destination.S3BucketDestination.Prefix
                            },
                            'Enabled': config.IsEnabled,
                            'Id': config.Id,
                            'IncludedObjectVersions': config.IncludedObjectVersions,
                            'OptionalFields': config.OptionalFields,
                            'Prefix': prefix,
                            'ScheduleFrequency': config.Schedule.Frequency
                        });
                    });
                }
                if (obj.data.MetricsConfigurations && obj.data.MetricsConfigurations.MetricsConfigurationList) {
                    reqParams.cfn['MetricsConfigurations'] = [];
                    obj.data.MetricsConfigurations.MetricsConfigurationList.forEach(config => {
                        var prefix = null;
                        var tagfilters = null;
                        if (config.Filter) {
                            if (config.Filter.Tag) {
                                tagfilters = [config.Filter.Tag];
                                if (config.Filter.And && config.Filter.And.Tags) {
                                    tagfilters = tagfilters.concat(config.Filter.And.Tags);
                                }
                            }
                            prefix = config.Filter.Prefix;
                        }
                        reqParams.cfn['MetricsConfigurations'].push({
                            'Id': config.Id,
                            'Prefix': prefix,
                            'TagFilters': tagfilters
                        });
                    });
                }

                /*
                TODO:
                AccessControl: String
                PublicAccessBlockConfiguration: 
                    PublicAccessBlockConfiguration
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('s3', obj.id),
                    'region': obj.region,
                    'service': 's3',
                    'type': 'AWS::S3::Bucket',
                    'terraformType': 'aws_s3_bucket',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.Name
                    }
                });
            } else if (obj.type == "ec2.egressonlyinternetgateway") {
                if (obj.data.Attachments) {
                    reqParams.cfn['VpcId'] = obj.data.Attachments[0].VpcId;
                    reqParams.tf['vpc_id'] = obj.data.Attachments[0].VpcId;
                }

                // TODO: Check for multiple

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::EgressOnlyInternetGateway',
                    'terraformType': 'aws_egress_only_internet_gateway',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.EgressOnlyInternetGatewayId
                    }
                });
            } else if (obj.type == "ec2.internetgateway") {
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }
                if (obj.data.Attachments) {
                    reqParams.tf['vpc_id'] = obj.data.Attachments[0].VpcId;
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::InternetGateway',
                    'terraformType': 'aws_internet_gateway',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.InternetGatewayId
                    }
                });
            } else if (obj.type == "ec2.gatewayattachment") {
                if (obj.data.InternetGatewayId) {
                    reqParams.cfn['InternetGatewayId'] = obj.data.InternetGatewayId;
                    reqParams.cfn['VpcId'] = obj.data.VpcId;

                    tracked_resources.push({
                    'obj': obj,
                        'logicalId': getResourceName('ec2', obj.id),
                        'region': obj.region,
                        'service': 'ec2',
                        'type': 'AWS::EC2::VPCGatewayAttachment',
                        'options': reqParams
                    });
                } else {
                    reqParams.cfn['VpnGatewayId'] = obj.data.VpnGatewayId;
                    reqParams.tf['vpn_gateway_id'] = obj.data.VpnGatewayId;
                    reqParams.cfn['VpcId'] = obj.data.VpcId;
                    reqParams.tf['vpc_id'] = obj.data.VpcId;

                    tracked_resources.push({
                    'obj': obj,
                        'logicalId': getResourceName('ec2', obj.id),
                        'region': obj.region,
                        'service': 'ec2',
                        'type': 'AWS::EC2::VPCGatewayAttachment',
                        'terraformType': 'aws_vpn_gateway_attachment',
                        'options': reqParams
                    });
                }
            } else if (obj.type == "ec2.dhcpoptions") {
                obj.data.DhcpConfigurations.forEach(dhcpConfiguration => {
                    if (dhcpConfiguration.Key == "domain-name") {
                        reqParams.cfn['DomainName'] = dhcpConfiguration.Values[0].Value;
                        reqParams.tf['domain_name'] = dhcpConfiguration.Values[0].Value;
                    } else if (dhcpConfiguration.Key == "domain-name-servers") {
                        reqParams.cfn['DomainNameServers'] = [];
                        reqParams.tf['domain_name_servers'] = [];
                        if (dhcpConfiguration.Values[0].Value != "AmazonProvidedDNS") {
                            dhcpConfiguration.Values.forEach(dhcpConfigurationValue => {
                                reqParams.cfn['DomainNameServers'].push(dhcpConfigurationValue['Value']);
                                reqParams.tf['domain_name_servers'].push(dhcpConfigurationValue['Value']);
                            });
                        }
                    }
                });
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }

                /*
                TODO:
                NetbiosNameServers:
                    - String
                NetbiosNodeType: Number
                NtpServers:
                    - String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::DHCPOptions',
                    'terraformType': 'aws_vpc_dhcp_options',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.DhcpOptionsId
                    }
                });
            } else if (obj.type == "ec2.vpnconnection") {
                reqParams.cfn['Type'] = obj.data.Type;
                reqParams.tf['type'] = obj.data.Type;
                if (obj.data.Options) {
                    reqParams.cfn['StaticRoutesOnly'] = obj.data.Options.StaticRoutesOnly;
                    reqParams.tf['static_routes_only'] = obj.data.Options.StaticRoutesOnly;
                }
                reqParams.cfn['CustomerGatewayId'] = obj.data.CustomerGatewayId;
                reqParams.tf['customer_gateway_id'] = obj.data.CustomerGatewayId;
                reqParams.cfn['VpnGatewayId'] = obj.data.VpnGatewayId;
                reqParams.tf['vpn_gateway_id'] = obj.data.VpnGatewayId;
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }

                /*
                TODO:
                VpnTunnelOptionsSpecifications: 
                    - VpnTunnelOptionsSpecification
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::VPNConnection',
                    'terraformType': 'aws_vpn_connection',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.VpnConnectionId
                    }
                });
            } else if (obj.type == "ec2.vpnconnectionroute") {
                reqParams.cfn['VpnConnectionId'] = obj.data.VpnConnectionId;
                reqParams.tf['vpn_connection_id'] = obj.data.VpnConnectionId;
                reqParams.cfn['DestinationCidrBlock'] = obj.data.DestinationCidrBlock;
                reqParams.tf['destination_cidr_block'] = obj.data.DestinationCidrBlock;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::VPNConnectionRoute',
                    'terraformType': 'aws_vpn_connection_route',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.virtualprivategatewayroutepropagation") {
                reqParams.cfn['VpnGatewayId'] = obj.data.VpnGatewayId;
                reqParams.tf['vpn_gateway_id'] = obj.data.VpnGatewayId;
                reqParams.cfn['RouteTableIds'] = [obj.data.RouteTableId];
                reqParams.tf['route_table_id'] = obj.data.RouteTableId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::VPNGatewayRoutePropagation',
                    'terraformType': 'aws_vpn_gateway_route_propagation',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.peeringconnection") {
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }
                reqParams.cfn['PeerVpcId'] = obj.data.AccepterVpcInfo.VpcId;
                reqParams.tf['peer_vpc_id'] = obj.data.AccepterVpcInfo.VpcId;
                reqParams.cfn['PeerOwnerId'] = obj.data.AccepterVpcInfo.OwnerId;
                reqParams.tf['peer_owner_id'] = obj.data.AccepterVpcInfo.OwnerId;
                reqParams.cfn['PeerRegion'] = obj.data.AccepterVpcInfo.Region;
                reqParams.tf['peer_region'] = obj.data.AccepterVpcInfo.Region;
                reqParams.cfn['VpcId'] = obj.data.RequesterVpcInfo.VpcId;
                reqParams.tf['vpc_id'] = obj.data.RequesterVpcInfo.VpcId;

                /*
                TODO:
                PeerRoleArn:  String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::VPCPeeringConnection',
                    'terraformType': 'aws_vpc_peering_connection',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.routetable") {
                reqParams.cfn['VpcId'] = obj.data.VpcId;
                reqParams.tf['vpc_id'] = obj.data.VpcId;
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::RouteTable',
                    'terraformType': 'aws_route_table',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.RouteTableId
                    }
                });
            } else if (obj.type == "ec2.networkacl") {
                reqParams.cfn['VpcId'] = obj.data.VpcId;
                reqParams.tf['vpc_id'] = obj.data.VpcId;
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::NetworkAcl',
                    'terraformType': 'aws_network_acl',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.NetworkAclId
                    }
                });
            } else if (obj.type == "ec2.networkaclentry") {
                reqParams.cfn['CidrBlock'] = obj.data.CidrBlock;
                reqParams.tf['cidr_block'] = obj.data.CidrBlock;
                reqParams.cfn['Egress'] = obj.data.Egress;
                reqParams.tf['egress'] = obj.data.Egress;
                reqParams.cfn['Icmp'] = obj.data.IcmpTypeCode;
                reqParams.tf['icmp_type'] = obj.data.IcmpTypeCode;
                reqParams.tf['icmp_code'] = obj.data.IcmpTypeCode;
                reqParams.cfn['Ipv6CidrBlock'] = obj.data.Ipv6CidrBlock;
                reqParams.tf['ipv6_cidr_block'] = obj.data.Ipv6CidrBlock;
                reqParams.cfn['NetworkAclId'] = obj.data.NetworkAclId;
                reqParams.tf['network_acl_id'] = obj.data.NetworkAclId;
                reqParams.cfn['PortRange'] = obj.data.PortRange;
                if (obj.data.PortRange) {
                    reqParams.tf['from_port'] = obj.data.PortRange.FromPort;
                    reqParams.tf['to_port'] = obj.data.PortRange.ToPort;
                }
                reqParams.cfn['Protocol'] = obj.data.Protocol;
                reqParams.tf['protocol'] = obj.data.Protocol;
                reqParams.cfn['RuleAction'] = obj.data.RuleAction;
                reqParams.tf['rule_action'] = obj.data.RuleAction;
                reqParams.cfn['RuleNumber'] = obj.data.RuleNumber;
                reqParams.tf['rule_number'] = obj.data.RuleNumber;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::NetworkAclEntry',
                    'terraformType': 'aws_network_acl_rule',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.vpngateway") {
                reqParams.cfn['AmazonSideAsn'] = obj.data.AmazonSideAsn;
                reqParams.tf['amazon_side_asn'] = obj.data.AmazonSideAsn;
                reqParams.cfn['Type'] = obj.data.Type;
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }
                if (obj.data.VpcAttachments) {
                    reqParams.tf['vpc_id'] = obj.data.VpcAttachments[0].VpcId
                }
                reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::VPNGateway',
                    'terraformType': 'aws_vpn_gateway',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.VpnGatewayId
                    }
                });
            } else if (obj.type == "ec2.customergateway") {
                reqParams.cfn['BgpAsn'] = obj.data.BgpAsn;
                reqParams.tf['bgp_asn'] = obj.data.BgpAsn;
                reqParams.cfn['IpAddress'] = obj.data.IpAddress;
                reqParams.tf['ip_address'] = obj.data.IpAddress;
                reqParams.cfn['Type'] = obj.data.Type;
                reqParams.tf['type'] = obj.data.Type;
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::CustomerGateway',
                    'terraformType': 'aws_customer_gateway',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.CustomerGatewayId
                    }
                });
            } else if (obj.type == "ec2.subnet") {
                reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
                reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;
                reqParams.cfn['CidrBlock'] = obj.data.CidrBlock;
                reqParams.tf['cidr_block'] = obj.data.CidrBlock;
                reqParams.cfn['VpcId'] = obj.data.VpcId;
                reqParams.tf['vpc_id'] = obj.data.VpcId;
                reqParams.cfn['MapPublicIpOnLaunch'] = obj.data.MapPublicIpOnLaunch;
                reqParams.tf['map_public_ip_on_launch'] = obj.data.MapPublicIpOnLaunch;
                reqParams.cfn['AssignIpv6AddressOnCreation'] = obj.data.AssignIpv6AddressOnCreation;
                reqParams.tf['assign_ipv6_address_on_creation'] = obj.data.AssignIpv6AddressOnCreation;

                /* TODO:
                Ipv6CidrBlock: String
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::Subnet',
                    'terraformType': 'aws_subnet',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.SubnetId,
                        'GetAtt': {
                            'AvailabilityZone': obj.data.AvailabilityZone,
                            'VpcId': obj.data.VpcId
                        }
                    }
                });
            } else if (obj.type == "s3.bucketpolicy") {
                reqParams.cfn['Bucket'] = obj.data.Bucket;
                reqParams.tf['bucket'] = obj.data.Bucket;
                reqParams.cfn['PolicyDocument'] = JSON.parse(obj.data.Policy);
                reqParams.tf['policy'] = obj.data.Policy;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('s3', obj.id),
                    'region': obj.region,
                    'service': 's3',
                    'type': 'AWS::S3::BucketPolicy',
                    'terraformType': 'aws_s3_bucket_policy',
                    'options': reqParams
                });
            } else if (obj.type == "lambda.alias") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                var split = obj.data.AliasArn.split(":");
                reqParams.cfn['FunctionName'] = split[split.length - 2];
                reqParams.tf['function_name'] = split[split.length - 2];
                reqParams.cfn['FunctionVersion'] = obj.data.FunctionVersion;
                reqParams.tf['function_version'] = obj.data.FunctionVersion;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                if (obj.data.RoutingConfig && obj.data.RoutingConfig.AdditionalVersionWeights) {
                    reqParams.cfn['RoutingConfig'] = {
                        'AdditionalVersionWeights': []
                    };
                    reqParams.tf['routing_config'] = {
                        'additional_version_weights': {}
                    };
                    for (var func_version in obj.data.RoutingConfig.AdditionalVersionWeights) {
                        reqParams.cfn['RoutingConfig']['AdditionalVersionWeights'].push({
                            FunctionVersion: func_version,
                            FunctionWeight: obj.data.RoutingConfig.AdditionalVersionWeights[func_version]
                        });
                        reqParams.tf['routing_config']['additional_version_weights'][func_version] = obj.data.RoutingConfig.AdditionalVersionWeights[func_version];
                    }
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('lambda', obj.id),
                    'region': obj.region,
                    'service': 'lambda',
                    'type': 'AWS::Lambda::Alias',
                    'terraformType': 'aws_lambda_alias',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.AliasArn
                    }
                });
            } else if (obj.type == "ec2.placementgroup") {
                reqParams.cfn['Strategy'] = obj.data.Strategy;
                reqParams.tf['strategy'] = obj.data.Strategy;
                reqParams.tf['name'] = obj.data.GroupName;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::PlacementGroup',
                    'terraformType': 'aws_placement_group',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.GroupName
                    }
                });
            } else if (obj.type == "route53.record") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['Type'] = obj.data.Type;
                reqParams.tf['type'] = obj.data.Type;
                reqParams.cfn['SetIdentifier'] = obj.data.SetIdentifier;
                reqParams.tf['set_identifier'] = obj.data.SetIdentifier;
                reqParams.cfn['Weight'] = obj.data.Weight;
                if (obj.data.Weight) {
                    reqParams.tf['weighted_routing_policy'] = {
                        'weight': obj.data.Weight
                    };
                }
                reqParams.cfn['Region'] = obj.data.Region;
                if (obj.data.Region) {
                    reqParams.tf['latency_routing_policy'] = {
                        'region': obj.data.Region
                    };
                }
                reqParams.cfn['Failover'] = obj.data.Failover;
                if (obj.data.Failover) {
                    reqParams.tf['failover_routing_policy'] = {
                        'type': obj.data.Failover
                    };
                }
                reqParams.cfn['MultiValueAnswer'] = obj.data.MultiValueAnswer;
                reqParams.tf['multivalue_answer_routing_policy'] = obj.data.MultiValueAnswer;
                reqParams.cfn['TTL'] = obj.data.TTL;
                reqParams.tf['ttl'] = obj.data.TTL;
                reqParams.cfn['HealthCheckId'] = obj.data.HealthCheckId;
                reqParams.tf['health_check_id'] = obj.data.HealthCheckId;
                if (obj.data.ResourceRecords) {
                    reqParams.cfn['ResourceRecords'] = [];
                    reqParams.tf['records'] = [];
                    obj.data.ResourceRecords.forEach(resourceRecord => {
                        reqParams.cfn['ResourceRecords'].push(resourceRecord['Value']);
                        reqParams.tf['records'].push(resourceRecord['Value']);
                    });
                }
                reqParams.cfn['AliasTarget'] = obj.data.AliasTarget;
                if (obj.data.AliasTarget) {
                    reqParams.tf['alias'] = {
                        'name': obj.data.AliasTarget.DNSName,
                        'zone_id': obj.data.AliasTarget.HostedZoneId,
                        'evaluate_target_health': obj.data.AliasTarget.EvaluateTargetHealth
                    };
                }
                reqParams.cfn['HostedZoneId'] = obj.data.HostedZoneId;
                reqParams.tf['zone_id'] = obj.data.HostedZoneId;
                reqParams.cfn['GeoLocation'] = obj.data.GeoLocation;
                if (obj.data.GeoLocation) {
                    reqParams.tf['geolocation_routing_policy'] = {
                        'continent': obj.data.GeoLocation.ContinentCode,
                        'country': obj.data.GeoLocation.CountryCode,
                        'subdivision': obj.data.GeoLocation.SubdivisionCode
                    };
                }

                /*
                TODO:
                Comment: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('route53', obj.id),
                    'region': obj.region,
                    'service': 'route53',
                    'type': 'AWS::Route53::RecordSet',
                    'terraformType': 'aws_route53_record',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.Name
                    }
                });
            } else if (obj.type == "route53.hostedzone") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                if (obj.data.Config && obj.data.Config.Comment) {
                    reqParams.cfn['HostedZoneConfig'] = {
                        'Comment': obj.data.Config.Comment
                    };
                    reqParams.tf['comment'] = obj.data.Config.Comment;
                }

                /*
                TODO:
                HostedZoneTags:
                    - HostedZoneTags
                QueryLoggingConfig: 
                    QueryLoggingConfig
                VPCs:
                    - HostedZoneVPCs 
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('route53', obj.id),
                    'region': obj.region,
                    'service': 'route53',
                    'type': 'AWS::Route53::HostedZone',
                    'terraformType': 'aws_route53_zone',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.Id.split("/").pop()
                        /*
                        TODO:
                        NameServers
                        */
                    }
                });
            } else if (obj.type == "elbv2.targetgroup") {
                var matcherHttpCode = null;
                if (obj.data.Matcher) {
                    matcherHttpCode = obj.data.Matcher.HttpCode;
                }
                reqParams.tf['health_check'] = {
                    'interval': obj.data.HealthCheckIntervalSeconds,
                    'path': obj.data.HealthCheckPath,
                    'port': obj.data.HealthCheckPort,
                    'protocol': obj.data.HealthCheckProtocol,
                    'timeout': obj.data.HealthCheckTimeoutSeconds,
                    'unhealthy_threshold': obj.data.UnhealthyThresholdCount,
                    'healthy_threshold': obj.data.HealthyThresholdCount,
                    'matcher': matcherHttpCode
                };
                reqParams.cfn['HealthCheckIntervalSeconds'] = obj.data.HealthCheckIntervalSeconds;
                reqParams.cfn['HealthCheckPath'] = obj.data.HealthCheckPath;
                reqParams.cfn['Port'] = obj.data.Port;
                reqParams.tf['port'] = obj.data.Port;
                reqParams.cfn['Protocol'] = obj.data.Protocol;
                reqParams.tf['protocol'] = obj.data.Protocol;
                reqParams.cfn['HealthCheckPort'] = obj.data.HealthCheckPort;
                reqParams.cfn['HealthCheckProtocol'] = obj.data.HealthCheckProtocol;
                reqParams.cfn['HealthCheckTimeoutSeconds'] = obj.data.HealthCheckTimeoutSeconds;
                reqParams.cfn['UnhealthyThresholdCount'] = obj.data.UnhealthyThresholdCount;
                reqParams.cfn['TargetType'] = obj.data.TargetType;
                reqParams.tf['target_type'] = obj.data.TargetType;
                reqParams.cfn['Matcher'] = obj.data.Matcher;
                reqParams.cfn['HealthyThresholdCount'] = obj.data.HealthyThresholdCount;
                reqParams.cfn['VpcId'] = obj.data.VpcId;
                reqParams.tf['vpc_id'] = obj.data.VpcId;
                reqParams.cfn['Name'] = obj.data.LoadBalancerName;
                reqParams.tf['name'] = obj.data.LoadBalancerName;

                /*
                TODO:
                Tags:
                    - Resource Tag
                TargetGroupAttributes:
                    - TargetGroupAttributes
                Targets:
                    - TargetDescription
                HealthCheckEnabled
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('elbv2', obj.id),
                    'region': obj.region,
                    'service': 'elbv2',
                    'type': 'AWS::ElasticLoadBalancingV2::TargetGroup',
                    'terraformType': 'aws_lb_target_group',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.TargetGroupArn,
                        'GetAtt': {
                            'TargetGroupName': obj.data.TargetGroupName
                        }
                    }
                });
            } else if (obj.type == "ec2.volume") {
                reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
                reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;
                reqParams.cfn['Encrypted'] = obj.data.Encrypted;
                reqParams.tf['encrypted'] = obj.data.Encrypted;
                reqParams.cfn['Iops'] = (obj.data.VolumeType == "io1") ? obj.data.Iops : null;
                reqParams.tf['iops'] = (obj.data.VolumeType == "io1") ? obj.data.Iops : null;
                reqParams.cfn['Size'] = obj.data.Size;
                reqParams.tf['size'] = obj.data.Size;
                reqParams.cfn['VolumeType'] = obj.data.VolumeType;
                reqParams.tf['type'] = obj.data.VolumeType;
                reqParams.cfn['SnapshotId'] = (obj.data.SnapshotId == "") ? null : obj.data.SnapshotId;
                reqParams.tf['snapshot_id'] = (obj.data.SnapshotId == "") ? null : obj.data.SnapshotId;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                reqParams.tf['kms_key_id'] = obj.data.KmsKeyId;
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }

                /*
                TODO:
                AutoEnableIO: Boolean
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::Volume',
                    'terraformType': 'aws_ebs_volume',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.VolumeId
                    }
                });
            } else if (obj.type == "ec2.volumeattachment") {
                reqParams.cfn['VolumeId'] = obj.data.VolumeId;
                reqParams.tf['volume_id'] = obj.data.VolumeId;
                reqParams.cfn['InstanceId'] = obj.data.InstanceId;
                reqParams.tf['instance_id'] = obj.data.InstanceId;
                reqParams.cfn['Device'] = obj.data.Device;
                reqParams.tf['device_name'] = obj.data.Device;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::VolumeAttachment',
                    'terraformType': 'aws_volume_attachment',
                    'options': reqParams
                });
            } else if (obj.type == "rds.cluster") {
                reqParams.cfn['AvailabilityZones'] = obj.data.AvailabilityZones;
                reqParams.tf['availability_zones'] = obj.data.AvailabilityZones;
                reqParams.cfn['BackupRetentionPeriod'] = obj.data.BackupRetentionPeriod;
                reqParams.tf['backup_retention_period'] = obj.data.BackupRetentionPeriod;
                reqParams.cfn['DatabaseName'] = obj.data.DatabaseName;
                reqParams.tf['database_name'] = obj.data.DatabaseName;
                reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;
                reqParams.tf['cluster_identifier'] = obj.data.DBClusterIdentifier;
                reqParams.cfn['DBClusterParameterGroup'] = obj.data.DBClusterParameterGroup;
                reqParams.tf['db_cluster_parameter_group_name'] = obj.data.DBClusterParameterGroup;
                reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroup;
                reqParams.tf['db_subnet_group_name'] = obj.data.DBSubnetGroup;
                reqParams.cfn['Engine'] = obj.data.Engine;
                reqParams.tf['engine'] = obj.data.Engine;
                reqParams.cfn['Port'] = obj.data.Port;
                reqParams.tf['port'] = obj.data.Port;
                reqParams.cfn['MasterUsername'] = obj.data.MasterUsername;
                reqParams.tf['master_username'] = obj.data.MasterUsername;
                reqParams.cfn['MasterUserPassword'] = "REPLACEME"; // TODO: Fix
                reqParams.tf['master_password'] = "REPLACEME";
                reqParams.cfn['PreferredBackupWindow'] = obj.data.PreferredBackupWindow;
                reqParams.tf['preferred_backup_window'] = obj.data.PreferredBackupWindow;
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                reqParams.tf['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                reqParams.cfn['ReplicationSourceIdentifier'] = obj.data.ReplicationSourceIdentifier;
                reqParams.tf['replication_source_identifier'] = obj.data.ReplicationSourceIdentifier;
                if (obj.data.VpcSecurityGroups) {
                    reqParams.cfn['VpcSecurityGroupIds'] = [];
                    reqParams.tf['vpc_security_group_ids'] = [];
                    obj.data.VpcSecurityGroups.forEach(vpcSecurityGroup => {
                        reqParams.cfn['VpcSecurityGroupIds'].push(vpcSecurityGroup.VpcSecurityGroupId);
                        reqParams.tf['vpc_security_group_ids'].push(vpcSecurityGroup.VpcSecurityGroupId);
                    });
                }
                reqParams.cfn['StorageEncrypted'] = obj.data.StorageEncrypted;
                reqParams.tf['storage_encrypted'] = obj.data.StorageEncrypted;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                reqParams.tf['kms_key_id'] = obj.data.KmsKeyId;
                reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
                reqParams.tf['engine_version'] = obj.data.EngineVersion;
                reqParams.cfn['EnableIAMDatabaseAuthentication'] = obj.data.IAMDatabaseAuthenticationEnabled;
                reqParams.tf['iam_database_authentication_enabled'] = obj.data.IAMDatabaseAuthenticationEnabled;
                reqParams.cfn['BacktrackWindow'] = obj.data.BacktrackWindow;
                reqParams.tf['backtrack_window'] = obj.data.BacktrackWindow;
                reqParams.cfn['EnableCloudwatchLogsExports'] = obj.data.EnabledCloudwatchLogsExports; // TODO: WTF? Lol.
                reqParams.tf['enabled_cloudwatch_logs_exports'] = obj.data.EnabledCloudwatchLogsExports;
                reqParams.cfn['EngineMode'] = obj.data.EngineMode;
                reqParams.tf['engine_mode'] = obj.data.EngineMode;
                reqParams.cfn['ScalingConfiguration'] = obj.data.ScalingConfigurationInfo;
                if (obj.data.ScalingConfigurationInfo) {
                    reqParams.tf['scaling_configuration'] = {
                        'min_capacity': obj.data.ScalingConfigurationInfo.MinCapacity,
                        'max_capacity': obj.data.ScalingConfigurationInfo.MaxCapacity,
                        'auto_pause': obj.data.ScalingConfigurationInfo.AutoPause,
                        'seconds_until_auto_pause': obj.data.ScalingConfigurationInfo.SecondsUntilAutoPause
                    };
                }
                reqParams.cfn['DeletionProtection'] = obj.data.DeletionProtection;
                reqParams.tf['deletion_protection'] = obj.data.DeletionProtection;

                /*
                TODO:
                SourceRegion: String
                SnapshotIdentifier: String
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('rds', obj.id),
                    'region': obj.region,
                    'service': 'rds',
                    'type': 'AWS::RDS::DBCluster',
                    'terraformType': 'aws_rds_cluster',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.DBClusterIdentifier,
                        'GetAtt': {
                            'Endpoint.Address': obj.data.Endpoint,
                            'Endpoint.Port': obj.data.Port,
                            'ReadEndpoint.Address': obj.data.ReaderEndpoint
                        }
                    }
                });
            } else if (obj.type == "rds.instance") {
                reqParams.cfn['DBInstanceIdentifier'] = obj.data.DBInstanceIdentifier;
                reqParams.tf['identifier'] = obj.data.DBInstanceIdentifier;
                reqParams.cfn['AllocatedStorage'] = obj.data.AllocatedStorage;
                reqParams.tf['allocated_storage'] = obj.data.AllocatedStorage;
                reqParams.cfn['DBInstanceClass'] = obj.data.DBInstanceClass;
                reqParams.tf['instance_class'] = obj.data.DBInstanceClass;
                reqParams.cfn['Engine'] = obj.data.Engine;
                reqParams.tf['engine'] = obj.data.Engine;
                reqParams.cfn['MasterUsername'] = obj.data.MasterUsername;
                reqParams.tf['username'] = obj.data.MasterUsername;
                reqParams.cfn['MasterUserPassword'] = 'REPLACEME';
                reqParams.tf['password'] = 'REPLACEME';
                reqParams.cfn['DBName'] = obj.data.DBName;
                reqParams.tf['name'] = obj.data.DBName;
                reqParams.cfn['PreferredBackupWindow'] = obj.data.PreferredBackupWindow;
                reqParams.tf['backup_window'] = obj.data.PreferredBackupWindow;
                reqParams.cfn['BackupRetentionPeriod'] = obj.data.BackupRetentionPeriod;
                reqParams.tf['backup_retention_period'] = obj.data.BackupRetentionPeriod;
                reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
                reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                reqParams.tf['maintenance_window'] = obj.data.PreferredMaintenanceWindow;
                reqParams.cfn['MultiAZ'] = obj.data.MultiAZ;
                reqParams.tf['multi_az'] = obj.data.MultiAZ;
                reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
                reqParams.tf['engine_version'] = obj.data.EngineVersion;
                reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
                reqParams.tf['auto_minor_version_upgrade'] = obj.data.AutoMinorVersionUpgrade;
                reqParams.cfn['LicenseModel'] = obj.data.LicenseModel;
                reqParams.tf['license_model'] = obj.data.LicenseModel;
                reqParams.cfn['Iops'] = obj.data.Iops;
                reqParams.tf['iops'] = obj.data.Iops;
                reqParams.cfn['CharacterSetName'] = obj.data.CharacterSetName;
                reqParams.tf['character_set_name'] = obj.data.CharacterSetName;
                reqParams.cfn['PubliclyAccessible'] = obj.data.PubliclyAccessible;
                reqParams.tf['publicly_accessible'] = obj.data.PubliclyAccessible;
                reqParams.cfn['StorageType'] = obj.data.StorageType;
                reqParams.tf['storage_type'] = obj.data.StorageType;
                reqParams.cfn['Port'] = obj.data.Endpoint.Port;
                reqParams.tf['port'] = obj.data.Endpoint.Port;
                reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;
                reqParams.tf['cluster_identifier'] = obj.data.DBClusterIdentifier;
                reqParams.cfn['StorageEncrypted'] = obj.data.StorageEncrypted;
                reqParams.tf['storage_encrypted'] = obj.data.StorageEncrypted;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                reqParams.tf['kms_key_id'] = obj.data.KmsKeyId;
                reqParams.cfn['CopyTagsToSnapshot'] = obj.data.CopyTagsToSnapshot;
                reqParams.tf['copy_tags_to_snapshot'] = obj.data.CopyTagsToSnapshot;
                reqParams.cfn['MonitoringInterval'] = obj.data.MonitoringInterval;
                reqParams.tf['monitoring_interval'] = obj.data.MonitoringInterval;
                reqParams.cfn['PromotionTier'] = obj.data.PromotionTier;
                reqParams.cfn['Timezone'] = obj.data.Timezone;
                reqParams.tf['timezone'] = obj.data.Timezone;
                reqParams.cfn['EnableIAMDatabaseAuthentication'] = obj.data.IAMDatabaseAuthenticationEnabled;
                reqParams.tf['iam_database_authentication_enabled'] = obj.data.IAMDatabaseAuthenticationEnabled;
                reqParams.cfn['EnablePerformanceInsights'] = obj.data.PerformanceInsightsEnabled;
                reqParams.cfn['PerformanceInsightsKMSKeyId'] = obj.data.PerformanceInsightsKMSKeyId;
                reqParams.cfn['PerformanceInsightsRetentionPeriod'] = obj.data.PerformanceInsightsRetentionPeriod;
                reqParams.cfn['DeletionProtection'] = obj.data.DeletionProtection;
                reqParams.tf['deletion_protection'] = obj.data.DeletionProtection;
                reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroup.DBSubnetGroupName;
                reqParams.tf['db_subnet_group_name'] = obj.data.DBSubnetGroup.DBSubnetGroupName;
                reqParams.cfn['ProcessorFeatures'] = obj.data.ProcessorFeatures;
                if (obj.data.DBSecurityGroups) {
                    reqParams.cfn['DBSecurityGroups'] = [];
                    reqParams.tf['security_group_names'] = [];
                    obj.data.DBSecurityGroups.forEach(dbSecurityGroup => {
                        reqParams.cfn['DBSecurityGroups'].push(dbSecurityGroup.DBSecurityGroupName);
                        reqParams.tf['security_group_names'].push(dbSecurityGroup.DBSecurityGroupName);
                    });
                }
                if (obj.data.VpcSecurityGroups) {
                    reqParams.cfn['VPCSecurityGroups'] = [];
                    reqParams.tf['vpc_security_group_ids'] = [];
                    obj.data.VpcSecurityGroups.forEach(vpcSecurityGroup => {
                        reqParams.cfn['VPCSecurityGroups'].push(vpcSecurityGroup.VpcSecurityGroupId);
                        reqParams.tf['vpc_security_group_ids'].push(vpcSecurityGroup.VpcSecurityGroupId);
                    });
                }

                /*
                TODO:
                AllowMajorVersionUpgrade: Boolean
                DBParameterGroupName: String
                DBSnapshotIdentifier: String
                DeleteAutomatedBackups: Boolean
                Domain: String
                DomainIAMRoleName: String
                EnableCloudwatchLogsExports:
                    - String
                MasterUserPassword: String
                MonitoringRoleArn: String
                OptionGroupName: String
                SourceDBInstanceIdentifier: String
                SourceRegion: String
                Tags:
                    - Resource Tag
                UseDefaultProcessorFeatures: Boolean
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('rds', obj.id),
                    'region': obj.region,
                    'service': 'rds',
                    'type': 'AWS::RDS::DBInstance',
                    'terraformType': (obj.data.DBClusterIdentifier && obj.data.DBClusterIdentifier != "") ? 'aws_db_instance' : 'aws_rds_cluster_instance',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.DBInstanceIdentifier,
                        'GetAtt': {
                            'Endpoint.Address': obj.data.Endpoint.Address,
                            'Endpoint.Port': obj.data.Endpoint.Port
                        }
                    }
                });
            } else if (obj.type == "rds.eventsubscription") {
                reqParams.cfn['SourceType'] = obj.data.SourceType;
                reqParams.tf['source_type'] = obj.data.SourceType;
                reqParams.cfn['SnsTopicArn'] = obj.data.SnsTopicArn;
                reqParams.tf['sns_topic'] = obj.data.SnsTopicArn;
                reqParams.cfn['SourceIds'] = obj.data.SourceIdsList;
                reqParams.tf['source_ids'] = obj.data.SourceIdsList;
                reqParams.cfn['EventCategories'] = obj.data.EventCategoriesList;
                reqParams.tf['event_categories'] = obj.data.EventCategoriesList;
                reqParams.cfn['Enabled'] = obj.data.Enabled;
                reqParams.tf['enabled'] = obj.data.Enabled;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('rds', obj.id),
                    'region': obj.region,
                    'service': 'rds',
                    'type': 'AWS::RDS::EventSubscription',
                    'terraformType': 'aws_db_event_subscription',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.instance") {
                reqParams.cfn['ImageId'] = obj.data.ImageId;
                reqParams.tf['ami'] = obj.data.ImageId;
                reqParams.cfn['InstanceType'] = obj.data.InstanceType;
                reqParams.tf['instance_type'] = obj.data.InstanceType;
                reqParams.cfn['KernelId'] = obj.data.KernelId;
                reqParams.cfn['KeyName'] = obj.data.KeyName;
                reqParams.tf['key_name'] = obj.data.KeyName;
                if (obj.data.Placement) {
                    reqParams.cfn['AvailabilityZone'] = obj.data.Placement.AvailabilityZone;
                    reqParams.tf['availability_zone'] = obj.data.Placement.AvailabilityZone;
                    reqParams.cfn['Affinity'] = obj.data.Placement.Affinity;
                    reqParams.cfn['PlacementGroupName'] = (obj.data.Placement.GroupName == "" ? null : obj.data.Placement.GroupName);
                    reqParams.tf['placement_group'] = (obj.data.Placement.GroupName == "" ? null : obj.data.Placement.GroupName);
                    reqParams.cfn['Tenancy'] = obj.data.Placement.Tenancy;
                    reqParams.tf['tenancy'] = obj.data.Placement.Tenancy;
                    reqParams.cfn['HostId'] = obj.data.Placement.HostId;
                }
                reqParams.cfn['RamdiskId'] = obj.data.RamdiskId;
                reqParams.cfn['SubnetId'] = obj.data.SubnetId;
                reqParams.tf['subnet_id'] = obj.data.SubnetId;
                reqParams.cfn['EbsOptimized'] = obj.data.EbsOptimized;
                reqParams.tf['ebs_optimized'] = obj.data.EbsOptimized;
                if (obj.data.NetworkInterfaces) {
                    reqParams.cfn['SecurityGroupIds'] = [];
                    reqParams.tf['vpc_security_group_ids'] = [];
                    obj.data.NetworkInterfaces.forEach(networkInterface => {
                        if (networkInterface.Groups) {
                            networkInterface.Groups.forEach(securityGroup => {
                                reqParams.cfn['SecurityGroupIds'].push(securityGroup.GroupId);
                                reqParams.tf['vpc_security_group_ids'].push(securityGroup.GroupId);
                            });
                        }
                    });
                }
                reqParams.cfn['SourceDestCheck'] = obj.data.SourceDestCheck;
                reqParams.tf['source_dest_check'] = obj.data.SourceDestCheck;
                if (obj.data.BlockDeviceMappings) {
                    reqParams.cfn['BlockDeviceMappings'] = [];
                    reqParams.tf['ebs_block_device'] = [];
                    obj.data.BlockDeviceMappings.forEach(blockDeviceMapping => {
                        var ebs = null;
                        if (blockDeviceMapping.Ebs && blockDeviceMapping.Ebs.VolumeId) {
                            ebs = {
                                'Encrypted': blockDeviceMapping.Ebs.Encrypted,
                                'VolumeSize': blockDeviceMapping.Ebs.Size,
                                'SnapshotId': blockDeviceMapping.Ebs.SnapshotId,
                                'Iops': (blockDeviceMapping.Ebs.VolumeType == "io1") ? blockDeviceMapping.Ebs.Iops : null,
                                'VolumeType': blockDeviceMapping.Ebs.VolumeType,
                                'DeleteOnTermination': blockDeviceMapping.Ebs.DeleteOnTermination
                            };
                            if (blockDeviceMapping.DeviceName != "/dev/sda1" && blockDeviceMapping.DeviceName != "/dev/xvda") {
                                reqParams.tf['ebs_block_device'].push({
                                    'device_name': blockDeviceMapping.DeviceName,
                                    'encrypted': blockDeviceMapping.Ebs.Encrypted,
                                    'volume_size': blockDeviceMapping.Ebs.Size,
                                    'snapshot_id': blockDeviceMapping.Ebs.SnapshotId,
                                    'iops': (blockDeviceMapping.Ebs.VolumeType == "io1") ? blockDeviceMapping.Ebs.Iops : null,
                                    'volume_type': blockDeviceMapping.Ebs.VolumeType,
                                    'delete_on_termination': blockDeviceMapping.Ebs.DeleteOnTermination
                                });
                            } else {
                                reqParams.tf['root_block_device'] = {
                                    'volume_size': blockDeviceMapping.Ebs.Size,
                                    'iops': (blockDeviceMapping.Ebs.VolumeType == "io1") ? blockDeviceMapping.Ebs.Iops : null,
                                    'volume_type': blockDeviceMapping.Ebs.VolumeType,
                                    'delete_on_termination': blockDeviceMapping.Ebs.DeleteOnTermination
                                };
                            }
                        }
                        reqParams.cfn['BlockDeviceMappings'].push({
                            'DeviceName': blockDeviceMapping.DeviceName,
                            'Ebs': ebs
                        });
                    });
                }
                reqParams.cfn['UserData'] = obj.data.UserData;
                reqParams.tf['user_data'] = obj.data.UserData;
                if (obj.data.IamInstanceProfile) {
                    reqParams.cfn['IamInstanceProfile'] = obj.data.IamInstanceProfile.Arn.split("/").pop();
                    reqParams.tf['iam_instance_profile'] = obj.data.IamInstanceProfile.Arn.split("/").pop();
                }
                if (obj.data.Monitoring && obj.data.Monitoring.State == "enabled") {
                    reqParams.cfn['Monitoring'] = true;
                    reqParams.tf['monitoring'] = true;
                }
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }
                

                /*
                TODO:
                CreditSpecification: CreditSpecification
                DisableApiTermination: Boolean
                ElasticGpuSpecifications: [ ElasticGpuSpecification, ... ]
                ElasticInferenceAccelerators: 
                    - ElasticInferenceAccelerator
                InstanceInitiatedShutdownBehavior: String
                Ipv6AddressCount: Integer
                Ipv6Addresses:
                    - IPv6 Address Type
                LaunchTemplate: LaunchTemplateSpecification
                LicenseSpecifications: 
                    - LicenseSpecification
                NetworkInterfaces: 
                    - EC2 Network Interface
                PrivateIpAddress: String
                SecurityGroups: 
                    - String
                SsmAssociations: 
                    - SSMAssociation
                Volumes: 
                    - EC2 MountPoint
                AdditionalInfo: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::Instance',
                    'terraformType': 'aws_instance',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.InstanceId,
                        'GetAtt': {
                            'AvailabilityZone': obj.data.Placement.AvailabilityZone,
                            'PrivateDnsName': obj.data.PrivateDnsName,
                            'PublicDnsName': obj.data.PublicDnsName,
                            'PrivateIp': obj.data.PrivateIpAddress,
                            'PublicIp': obj.data.PublicIpAddress
                        }
                    }
                });
            } else if (obj.type == "sns.topic") {
                reqParams.cfn['DisplayName'] = obj.data.Attributes.DisplayName;
                reqParams.tf['display_name'] = obj.data.Attributes.DisplayName;
                reqParams.cfn['TopicName'] = obj.data.Attributes.TopicArn.split(':').pop();
                reqParams.tf['name'] = obj.data.Attributes.TopicArn.split(':').pop();

                /*
                TODO:
                KmsMasterKeyId: String
                Subscription:
                    - SNS Subscription
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('sns', obj.id),
                    'region': obj.region,
                    'service': 'sns',
                    'type': 'AWS::SNS::Topic',
                    'terraformType': 'aws_sns_topic',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.TopicArn,
                        'GetAtt': {
                            'TopicName': obj.data.Attributes.TopicArn.split(':').pop()
                        }
                    }
                });
            } else if (obj.type == "sns.topicpolicy") {
                reqParams.cfn['PolicyDocument'] = obj.data.Policy;
                reqParams.tf['policy'] = obj.data.Policy;
                reqParams.cfn['Topics'] = [obj.data.Topic];
                reqParams.tf['arn'] = obj.data.Topic;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('sns', obj.id),
                    'region': obj.region,
                    'service': 'sns',
                    'type': 'AWS::SNS::TopicPolicy',
                    'terraformType': 'aws_sns_topic_policy',
                    'options': reqParams
                });
            } else if (obj.type == "sqs.queue") {
                reqParams.cfn['ContentBasedDeduplication'] = obj.data.Attributes.ContentBasedDeduplication;
                reqParams.tf['content_based_deduplication'] = obj.data.Attributes.ContentBasedDeduplication;
                reqParams.cfn['DelaySeconds'] = obj.data.Attributes.DelaySeconds;
                reqParams.tf['delay_seconds'] = obj.data.Attributes.DelaySeconds;
                reqParams.cfn['FifoQueue'] = obj.data.Attributes.FifoQueue;
                reqParams.tf['fifo_queue'] = obj.data.Attributes.FifoQueue;
                reqParams.cfn['KmsMasterKeyId'] = obj.data.Attributes.KmsMasterKeyId;
                reqParams.tf['kms_master_key_id'] = obj.data.Attributes.KmsMasterKeyId;
                reqParams.cfn['KmsDataKeyReusePeriodSeconds'] = obj.data.Attributes.KmsDataKeyReusePeriodSeconds;
                reqParams.tf['kms_data_key_reuse_period_seconds'] = obj.data.Attributes.KmsDataKeyReusePeriodSeconds;
                reqParams.cfn['MaximumMessageSize'] = obj.data.Attributes.MaximumMessageSize;
                reqParams.tf['max_message_size'] = obj.data.Attributes.MaximumMessageSize;
                reqParams.cfn['MessageRetentionPeriod'] = obj.data.Attributes.MessageRetentionPeriod;
                reqParams.tf['message_retention_seconds'] = obj.data.Attributes.MessageRetentionPeriod;
                reqParams.cfn['ReceiveMessageWaitTimeSeconds'] = obj.data.Attributes.ReceiveMessageWaitTimeSeconds;
                reqParams.tf['receive_wait_time_seconds'] = obj.data.Attributes.ReceiveMessageWaitTimeSeconds;
                reqParams.cfn['VisibilityTimeout'] = obj.data.Attributes.VisibilityTimeout;
                reqParams.tf['visibility_timeout_seconds'] = obj.data.Attributes.VisibilityTimeout;
                reqParams.cfn['QueueName'] = obj.data.Attributes.QueueArn.split(":").pop();
                reqParams.tf['name'] = obj.data.Attributes.QueueArn.split(":").pop();
                reqParams.cfn['RedrivePolicy'] = obj.data.Attributes.RedrivePolicy;
                reqParams.tf['redrive_policy'] = obj.data.Attributes.RedrivePolicy;

                /*
                TODO:
                Tags:
                    Resource Tag 
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('sqs', obj.id),
                    'region': obj.region,
                    'service': 'sqs',
                    'type': 'AWS::SQS::Queue',
                    'terraformType': 'aws_sqs_queue',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.Attributes.QueueArn,
                        'GetAtt': {
                            'QueueName': obj.data.Attributes.QueueArn.split(":").pop()
                        }
                    }
                });
            } else if (obj.type == "sqs.queuepolicy") {
                reqParams.cfn['PolicyDocument'] = obj.data.Policy;
                reqParams.tf['policy'] = obj.data.Policy;
                reqParams.cfn['Queues'] = [obj.data.Queue];
                reqParams.tf['queue_url'] = obj.data.Queue;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('sqs', obj.id),
                    'region': obj.region,
                    'service': 'sqs',
                    'type': 'AWS::SQS::QueuePolicy',
                    'terraformType': 'aws_sqs_queue_policy',
                    'options': reqParams
                });
            } else if (obj.type == "elasticbeanstalk.application") {
                reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
                reqParams.tf['name'] = obj.data.ApplicationName;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;

                /*
                TODO:
                ResourceLifecycleConfig:
                    ApplicationResourceLifecycleConfig
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('elasticbeanstalk', obj.id),
                    'region': obj.region,
                    'service': 'elasticbeanstalk',
                    'type': 'AWS::ElasticBeanstalk::Application',
                    'terraformType': 'aws_elastic_beanstalk_application',
                    'options': reqParams
                });
            } else if (obj.type == "elasticbeanstalk.applicationversion") {
                reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
                reqParams.tf['name'] = obj.data.ApplicationName;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['SourceBundle'] = obj.data.SourceBundle;
                if (obj.data.SourceBundle) {
                    reqParams.tf['bucket'] = obj.data.SourceBundle.S3Bucket;
                    reqParams.tf['key'] = obj.data.SourceBundle.S3Key;
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('elasticbeanstalk', obj.id),
                    'region': obj.region,
                    'service': 'elasticbeanstalk',
                    'type': 'AWS::ElasticBeanstalk::ApplicationVersion',
                    'terraformType': 'aws_elastic_beanstalk_application_version',
                    'options': reqParams
                });
            } else if (obj.type == "elasticbeanstalk.environment") {
                reqParams.cfn['EnvironmentName'] = obj.data.EnvironmentName;
                reqParams.tf['name'] = obj.data.EnvironmentName;
                reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
                reqParams.tf['application'] = obj.data.ApplicationName;
                reqParams.cfn['VersionLabel'] = obj.data.VersionLabel;
                reqParams.tf['version_label'] = obj.data.VersionLabel;
                reqParams.cfn['SolutionStackName'] = obj.data.SolutionStackName;
                reqParams.tf['solution_stack_name'] = obj.data.SolutionStackName;
                reqParams.cfn['PlatformArn'] = obj.data.PlatformArn;
                reqParams.tf['platform_arn'] = obj.data.PlatformArn;
                reqParams.cfn['TemplateName'] = obj.data.TemplateName;
                reqParams.tf['template_name'] = obj.data.TemplateName;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['Tier'] = obj.data.Tier;
                reqParams.tf['tier'] = obj.data.Tier;
                reqParams.cfn['CNAMEPrefix'] = new URL(obj.data.CNAME).hostname.split(".")[0].split("-").splice(-1, 1).join("-");
                reqParams.tf['cname_prefix'] = new URL(obj.data.CNAME).hostname.split(".")[0].split("-").splice(-1, 1).join("-");

                /*
                TODO:
                OptionSettings: 
                    - OptionSetting
                Tags:
                    - Resource Tag, ...
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('elasticbeanstalk', obj.id),
                    'region': obj.region,
                    'service': 'elasticbeanstalk',
                    'type': 'AWS::ElasticBeanstalk::Environment',
                    'terraformType': 'aws_elastic_beanstalk_environment',
                    'options': reqParams
                });
            } else if (obj.type == "elasticbeanstalk.configurationtemplate") {
                reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
                reqParams.tf['application'] = obj.data.ApplicationName;
                reqParams.cfn['SolutionStackName'] = obj.data.SolutionStackName;
                reqParams.tf['solution_stack_name'] = obj.data.SolutionStackName;
                reqParams.cfn['PlatformArn'] = obj.data.PlatformArn;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['EnvironmentId'] = obj.data.EnvironmentName;
                reqParams.tf['environment_id'] = obj.data.EnvironmentName;
                reqParams.cfn['OptionSettings'] = obj.data.OptionSettings;
                if (obj.data.OptionSettings) {
                    reqParams.tf['setting'] = [];
                    obj.data.OptionSettings.forEach(setting => {
                        reqParams.tf['setting'].push({
                            'namespace': setting.Namespace,
                            'name': setting.OptionName,
                            'resource': setting.ResourceName,
                            'value': setting.Value
                        });
                    });
                }

                /*
                TODO:
                SourceConfiguration:
                    SourceConfiguration
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('elasticbeanstalk', obj.id),
                    'region': obj.region,
                    'service': 'elasticbeanstalk',
                    'type': 'AWS::ElasticBeanstalk::ConfigurationTemplate',
                    'terraformType': 'aws_elastic_beanstalk_configuration_template',
                    'options': reqParams
                });
            } else if (obj.type == "opsworks.stack") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.tf['region'] = obj.data.Region;
                reqParams.cfn['VpcId'] = obj.data.VpcId;
                reqParams.tf['vpc_id'] = obj.data.VpcId;
                reqParams.cfn['ServiceRoleArn'] = obj.data.ServiceRoleArn;
                reqParams.tf['service_role_arn'] = obj.data.ServiceRoleArn;
                reqParams.cfn['DefaultInstanceProfileArn'] = obj.data.DefaultInstanceProfileArn;
                reqParams.tf['default_instance_profile_arn'] = obj.data.DefaultInstanceProfileArn;
                reqParams.cfn['DefaultOs'] = obj.data.DefaultOs;
                reqParams.tf['default_os'] = obj.data.DefaultOs;
                reqParams.cfn['HostnameTheme'] = obj.data.HostnameTheme;
                reqParams.tf['hostname_theme'] = obj.data.HostnameTheme;
                reqParams.cfn['DefaultAvailabilityZone'] = obj.data.DefaultAvailabilityZone;
                reqParams.tf['default_availability_zone'] = obj.data.DefaultAvailabilityZone;
                reqParams.cfn['DefaultSubnetId'] = obj.data.DefaultSubnetId;
                reqParams.tf['default_subnet_id'] = obj.data.DefaultSubnetId;
                reqParams.cfn['CustomJson'] = obj.data.CustomJson;
                reqParams.tf['custom_json'] = obj.data.CustomJson;
                reqParams.cfn['ConfigurationManager'] = obj.data.ConfigurationManager;
                if (obj.data.ConfigurationManager) {
                    reqParams.tf['configuration_manager_name'] = obj.data.ConfigurationManager.Name;
                    reqParams.tf['configuration_manager_version'] = obj.data.ConfigurationManager.Version;
                }
                reqParams.cfn['ChefConfiguration'] = obj.data.ChefConfiguration;
                if (obj.data.ChefConfiguration) {
                    reqParams.tf['berkshelf_version'] = obj.data.ChefConfiguration.BerkshelfVersion;
                    reqParams.tf['manage_berkshelf'] = obj.data.ChefConfiguration.ManageBerkshelf;
                }
                reqParams.cfn['UseCustomCookbooks'] = obj.data.UseCustomCookbooks;
                reqParams.tf['use_custom_cookbooks'] = obj.data.UseCustomCookbooks;
                reqParams.cfn['UseOpsworksSecurityGroups'] = obj.data.UseOpsworksSecurityGroups;
                reqParams.tf['use_opsworks_security_groups'] = obj.data.UseOpsworksSecurityGroups;
                reqParams.cfn['CustomCookbooksSource'] = obj.data.CustomCookbooksSource;
                if (obj.data.CustomCookbooksSource) {
                    reqParams.tf['custom_cookbooks_source'] = {
                        'type': obj.data.CustomCookbooksSource.Type,
                        'url': obj.data.CustomCookbooksSource.Url,
                        'username': obj.data.CustomCookbooksSource.Username,
                        'password': obj.data.CustomCookbooksSource.Password,
                        'ssh_key': obj.data.CustomCookbooksSource.SshKey,
                        'revision': obj.data.CustomCookbooksSource.Revision
                    };
                }
                reqParams.cfn['DefaultSshKeyName'] = obj.data.DefaultSshKeyName;
                reqParams.tf['default_ssh_key_name'] = obj.data.DefaultSshKeyName;
                reqParams.cfn['DefaultRootDeviceType'] = obj.data.DefaultRootDeviceType;
                reqParams.tf['default_root_device_type'] = obj.data.DefaultRootDeviceType;
                reqParams.cfn['AgentVersion'] = obj.data.AgentVersion;
                reqParams.tf['agent_version'] = obj.data.AgentVersion;
                reqParams.cfn['Attributes'] = obj.data.Attributes;

                /*
                TODO:
                CloneAppIds: 
                - String
                ClonePermissions: Boolean
                EcsClusterArn: String
                ElasticIps: 
                - ElasticIp
                RdsDbInstances: 
                - RdsDbInstance
                SourceStackId: String
                Tags: 
                - Tags
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('opsworks', obj.id),
                    'region': obj.region,
                    'service': 'opsworks',
                    'type': 'AWS::OpsWorks::Stack',
                    'terraformType': 'aws_opsworks_stack',
                    'options': reqParams
                });
            } else if (obj.type == "opsworks.app") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['Shortname'] = obj.data.Shortname;
                reqParams.tf['short_name'] = obj.data.Shortname;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['DataSources'] = obj.data.DataSources;
                if (obj.data.DataSources) { // TODO: more than one?
                    reqParams.tf['data_source_type'] = obj.data.DataSources[0].Type;
                    reqParams.tf['data_source_arn'] = obj.data.DataSources[0].Arn;
                    reqParams.tf['data_source_database_name'] = obj.data.DataSources[0].DatabaseName;
                }
                reqParams.cfn['Type'] = obj.data.Type;
                reqParams.tf['type'] = obj.data.Type;
                reqParams.cfn['StackId'] = obj.data.StackId;
                reqParams.tf['stack_id'] = obj.data.StackId;
                reqParams.cfn['AppSource'] = obj.data.AppSource;
                if (obj.data.AppSource) {
                    reqParams.tf['app_source'] = {
                        'type': obj.data.AppSource.Type,
                        'url': obj.data.AppSource.Url,
                        'username': obj.data.AppSource.Username,
                        'password': obj.data.AppSource.Password,
                        'ssh_key': obj.data.AppSource.SshKey,
                        'revision': obj.data.AppSource.Revision
                    };
                }
                reqParams.cfn['Domains'] = obj.data.Domains;
                reqParams.tf['domains'] = obj.data.Domains;
                reqParams.cfn['EnableSsl'] = obj.data.EnableSsl;
                reqParams.tf['enable_ssl'] = obj.data.EnableSsl;
                reqParams.cfn['SslConfiguration'] = obj.data.SslConfiguration;
                if (obj.data.SslConfiguration) {
                    reqParams.tf['ssl_configuration'] = {
                        'private_key': obj.data.SslConfiguration.PrivateKey,
                        'certificate': obj.data.SslConfiguration.Certificate,
                        'chain': obj.data.SslConfiguration.Chain
                    };
                }
                reqParams.cfn['Attributes'] = obj.data.Attributes;
                reqParams.cfn['Environment'] = obj.data.Environment;
                if (obj.data.Environment) {
                    reqParams.tf['environment'] = [];
                    obj.data.Environment.forEach(environment => {
                        reqParams.tf['environment'].push({
                            'key': environment.Key,
                            'value': environment.Value,
                            'secure': environment.Secure
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('opsworks', obj.id),
                    'region': obj.region,
                    'service': 'opsworks',
                    'type': 'AWS::OpsWorks::App',
                    'terraformType': 'aws_opsworks_application',
                    'options': reqParams
                });
            } else if (obj.type == "opsworks.layer") {
                reqParams.cfn['StackId'] = obj.data.StackId;
                reqParams.cfn['Type'] = obj.data.Type;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Shortname'] = obj.data.Shortname;
                reqParams.cfn['Attributes'] = obj.data.Attributes;
                reqParams.cfn['CustomInstanceProfileArn'] = obj.data.CustomInstanceProfileArn;
                reqParams.cfn['CustomJson'] = obj.data.CustomJson;
                reqParams.cfn['CustomSecurityGroupIds'] = obj.data.CustomSecurityGroupIds;
                reqParams.cfn['Packages'] = obj.data.Packages;
                reqParams.cfn['VolumeConfigurations'] = obj.data.VolumeConfigurations;
                reqParams.cfn['EnableAutoHealing'] = obj.data.EnableAutoHealing;
                reqParams.cfn['AutoAssignElasticIps'] = obj.data.AutoAssignElasticIps;
                reqParams.cfn['AutoAssignPublicIps'] = obj.data.AutoAssignPublicIps;
                reqParams.cfn['CustomRecipes'] = obj.data.CustomRecipes;
                reqParams.cfn['InstallUpdatesOnBoot'] = obj.data.InstallUpdatesOnBoot;
                if (obj.data.LifecycleEventConfiguration && obj.data.LifecycleEventConfiguration.Shutdown) {
                    reqParams.cfn['LifecycleEventConfiguration'] = {
                        'ShutdownEventConfiguration': obj.data.LifecycleEventConfiguration.Shutdown
                    };
                }

                /*
                TODO:
                LifecycleEventConfiguration:
                    LifeCycleEventConfiguration
                LoadBasedAutoScaling:
                    LoadBasedAutoScaling
                Tags: 
                - Tags 
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('opsworks', obj.id),
                    'region': obj.region,
                    'service': 'opsworks',
                    'type': 'AWS::OpsWorks::Layer',
                    'options': reqParams
                });
            } else if (obj.type == "opsworks.elbattachment") {
                reqParams.cfn['ElasticLoadBalancerName'] = obj.data.ElasticLoadBalancerName;
                reqParams.cfn['LayerId'] = obj.data.LayerId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('opsworks', obj.id),
                    'region': obj.region,
                    'service': 'opsworks',
                    'type': 'AWS::OpsWorks::ElasticLoadBalancerAttachment',
                    'options': reqParams
                });
            } else if (obj.type == "opsworks.instance") {
                reqParams.cfn['AgentVersion'] = obj.data.AgentVersion;
                reqParams.tf['agent_version'] = obj.data.AgentVersion;
                reqParams.cfn['AmiId'] = obj.data.AmiId;
                reqParams.tf['ami_id'] = obj.data.AmiId;
                reqParams.cfn['Architecture'] = obj.data.Architecture;
                reqParams.tf['architecture'] = obj.data.Architecture;
                reqParams.cfn['AutoScalingType'] = obj.data.AutoScalingType;
                reqParams.tf['auto_scaling_type'] = obj.data.AutoScalingType;
                reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
                reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;
                reqParams.cfn['BlockDeviceMappings'] = obj.data.BlockDeviceMappings;
                //reqParams.tf[''] = obj.data.BlockDeviceMappings; TODO
                reqParams.cfn['EbsOptimized'] = obj.data.EbsOptimized;
                reqParams.tf['ebs_optimized'] = obj.data.EbsOptimized;
                if (obj.data.ElasticIp) {
                    reqParams.cfn['ElasticIps'] = [obj.data.ElasticIp];
                    reqParams.tf['ElasticIps'] = [obj.data.ElasticIp];
                }
                reqParams.cfn['Hostname'] = obj.data.Hostname;
                reqParams.tf['hostname'] = obj.data.Hostname;
                reqParams.cfn['InstallUpdatesOnBoot'] = obj.data.InstallUpdatesOnBoot;
                reqParams.tf['install_updates_on_boot'] = obj.data.InstallUpdatesOnBoot;
                reqParams.cfn['InstanceType'] = obj.data.InstanceType;
                reqParams.tf['instance_type'] = obj.data.InstanceType;
                reqParams.cfn['LayerIds'] = obj.data.LayerIds;
                reqParams.tf['layer_ids'] = obj.data.LayerIds;
                reqParams.cfn['Os'] = obj.data.Os;
                reqParams.tf['os'] = obj.data.Os;
                reqParams.cfn['RootDeviceType'] = obj.data.RootDeviceType;
                reqParams.tf['root_device_type'] = obj.data.RootDeviceType;
                reqParams.cfn['SshKeyName'] = obj.data.SshKeyName;
                reqParams.tf['ssh_key_name'] = obj.data.SshKeyName;
                reqParams.cfn['StackId'] = obj.data.StackId;
                reqParams.tf['stack_id'] = obj.data.StackId;
                reqParams.cfn['SubnetId'] = obj.data.SubnetId;
                reqParams.tf['subnet_id'] = obj.data.SubnetId;
                reqParams.cfn['Tenancy'] = obj.data.Tenancy;
                reqParams.tf['tenancy'] = obj.data.Tenancy;
                reqParams.cfn['VirtualizationType'] = obj.data.VirtualizationType;
                reqParams.tf['virtualization_type'] = obj.data.VirtualizationType;

                /*
                TODO:
                TimeBasedAutoScaling:
                    TimeBasedAutoScaling
                Volumes: 
                - String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('opsworks', obj.id),
                    'region': obj.region,
                    'service': 'opsworks',
                    'type': 'AWS::OpsWorks::Instance',
                    'terraformType': 'aws_opsworks_instance',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.elasticip") {
                reqParams.cfn['Domain'] = obj.data.Domain;
                reqParams.tf['vpc'] = (obj.data.Domain == "vpc");
                reqParams.cfn['InstanceId'] = obj.data.InstanceId;
                reqParams.tf['instance'] = obj.data.InstanceId;
                reqParams.cfn['PublicIpv4Pool'] = (obj.data.PublicIpv4Pool != "amazon") ? obj.data.PublicIpv4Pool : null;
                reqParams.tf['public_ipv4_pool'] = (obj.data.PublicIpv4Pool != "amazon") ? obj.data.PublicIpv4Pool : null;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::EIP',
                    'terraformType': 'aws_eip',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.PublicIp,
                        'GetAtt': {
                            'AllocationId': obj.data.AllocationId
                        }
                    }
                });
            } else if (obj.type == "ec2.elasticipassociation") {
                reqParams.cfn['AllocationId'] = obj.data.AllocationId;
                reqParams.tf['allocation_id'] = obj.data.AllocationId;
                reqParams.cfn['InstanceId'] = obj.data.InstanceId;
                reqParams.tf['instance_id'] = obj.data.InstanceId;
                reqParams.cfn['NetworkInterfaceId'] = obj.data.NetworkInterfaceId;
                reqParams.tf['network_interface_id'] = obj.data.NetworkInterfaceId;
                reqParams.cfn['PrivateIpAddress'] = obj.data.PrivateIpAddress;
                reqParams.tf['private_ip_address'] = obj.data.PrivateIpAddress;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::EIPAssociation',
                    'terraformType': 'aws_eip_association',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.networkinterface") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['Ipv6Addresses'] = obj.data.Ipv6Addresses;
                reqParams.cfn['PrivateIpAddress'] = obj.data.PrivateIpAddress;
                reqParams.tf['private_ips'] = [obj.data.PrivateIpAddress];
                if (obj.data.PrivateIpAddresses) {
                    reqParams.cfn['PrivateIpAddresses'] = [];
                    reqParams.tf['private_ips'] = [];
                    obj.data.PrivateIpAddresses.forEach(privateIpAddresses => {
                        reqParams.cfn['PrivateIpAddresses'].push({
                            'PrivateIpAddress': privateIpAddresses.PrivateIpAddress,
                            'Primary': privateIpAddresses.Primary
                        });
                        reqParams.tf['private_ips'].push(privateIpAddresses.PrivateIpAddress);
                    }); 
                }
                reqParams.cfn['SubnetId'] = obj.data.SubnetId;
                reqParams.tf['subnet_id'] = obj.data.SubnetId;
                reqParams.cfn['SourceDestCheck'] = obj.data.SourceDestCheck;
                reqParams.tf['source_dest_check'] = obj.data.SourceDestCheck;
                reqParams.cfn['Tags'] = obj.data.TagSet;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }
                if (obj.data.Groups) {
                    reqParams.cfn['GroupSet'] = [];
                    reqParams.tf['security_groups'] = [];
                    obj.data.Groups.forEach(group => {
                        reqParams.cfn['GroupSet'].push(group.GroupId);
                        reqParams.tf['security_groups'].push(group.GroupId);
                    }); 
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::NetworkInterface',
                    'terraformType': 'aws_network_interface',
                    'options': reqParams
                });
            } else if (obj.type == "redshift.cluster") {
                reqParams.cfn['ClusterIdentifier'] = obj.data.ClusterIdentifier;
                reqParams.tf['cluster_identifier'] = obj.data.ClusterIdentifier;
                reqParams.cfn['NodeType'] = obj.data.NodeType;
                reqParams.tf['node_type'] = obj.data.NodeType;
                reqParams.cfn['MasterUsername'] = obj.data.MasterUsername;
                reqParams.tf['master_username'] = obj.data.MasterUsername;
                reqParams.cfn['MasterUserPassword'] = 'REPLACEME';
                reqParams.tf['master_password'] = 'REPLACEME';
                reqParams.cfn['DBName'] = obj.data.DBName;
                reqParams.tf['database_name'] = obj.data.DBName;
                reqParams.cfn['Port'] = obj.data.Endpoint.Port;
                reqParams.tf['port'] = obj.data.Endpoint.Port;
                reqParams.cfn['AutomatedSnapshotRetentionPeriod'] = obj.data.AutomatedSnapshotRetentionPeriod;
                reqParams.tf['automated_snapshot_retention_period'] = obj.data.AutomatedSnapshotRetentionPeriod;
                if (obj.data.ClusterSecurityGroups) {
                    reqParams.cfn['ClusterSecurityGroups'] = [];
                    reqParams.tf['cluster_security_groups'] = [];
                    obj.data.ClusterSecurityGroups.forEach(clusterSecurityGroup => {
                        reqParams.cfn['ClusterSecurityGroups'].push(clusterSecurityGroup['ClusterSecurityGroupName']);
                        reqParams.tf['cluster_security_groups'].push(clusterSecurityGroup['ClusterSecurityGroupName']);
                    });
                }
                if (obj.data.VpcSecurityGroups) {
                    reqParams.cfn['VpcSecurityGroupIds'] = [];
                    reqParams.tf['vpc_security_group_ids'] = [];
                    obj.data.VpcSecurityGroups.forEach(vpcSecurityGroup => {
                        reqParams.cfn['VpcSecurityGroupIds'].push(vpcSecurityGroup['VpcSecurityGroupId']);
                        reqParams.tf['vpc_security_group_ids'].push(vpcSecurityGroup['VpcSecurityGroupId']);
                    });
                }
                reqParams.cfn['ClusterSubnetGroupName'] = obj.data.ClusterSubnetGroupName;
                reqParams.tf['cluster_subnet_group_name'] = obj.data.ClusterSubnetGroupName;
                reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
                reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                reqParams.tf['preferred_maintenance_window'] = obj.data.PreferredMaintenanceWindow;
                reqParams.cfn['ClusterVersion'] = obj.data.ClusterVersion;
                reqParams.tf['cluster_version'] = obj.data.ClusterVersion;
                reqParams.cfn['AllowVersionUpgrade'] = obj.data.AllowVersionUpgrade;
                reqParams.tf['allow_version_upgrade'] = obj.data.AllowVersionUpgrade;
                reqParams.cfn['NumberOfNodes'] = obj.data.NumberOfNodes;
                reqParams.tf['number_of_nodes'] = obj.data.NumberOfNodes;
                reqParams.tf['cluster_type'] = obj.data.NumberOfNodes > 1 ? 'multi-node' : 'single-node';
                reqParams.cfn['PubliclyAccessible'] = obj.data.PubliclyAccessible;
                reqParams.tf['publicly_accessible'] = obj.data.PubliclyAccessible;
                reqParams.cfn['Encrypted'] = obj.data.Encrypted;
                reqParams.tf['encrypted'] = obj.data.Encrypted;
                if (obj.data.HsmStatus) {
                    reqParams.cfn['HsmClientCertificateIdentifier'] = obj.data.HsmStatus.HsmClientCertificateIdentifier;
                    reqParams.cfn['HsmConfigurationIdentifier'] = obj.data.HsmStatus.HsmConfigurationIdentifier;
                }
                reqParams.cfn['ElasticIp'] = obj.data.ElasticIpStatus.ElasticIp;
                reqParams.tf['elastic_ip'] = obj.data.ElasticIpStatus.ElasticIp;
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                reqParams.tf['kms_key_id'] = obj.data.KmsKeyId;
                if (obj.data.IamRoles) {
                    reqParams.cfn['IamRoles'] = [];
                    reqParams.tf['iam_roles'] = [];
                    obj.data.IamRoles.forEach(iamRole => {
                        reqParams.cfn['IamRoles'].push(iamRole['IamRoleArn']);
                        reqParams.tf['iam_roles'].push(iamRole['IamRoleArn']);
                    });
                }

                /*
                TODO:
                ClusterParameterGroupName: String
                ClusterType: String
                LoggingProperties: 
                    LoggingProperties
                MasterUserPassword: String
                OwnerAccount: String
                SnapshotClusterIdentifier: String
                SnapshotIdentifier: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('redshift', obj.id),
                    'region': obj.region,
                    'service': 'redshift',
                    'type': 'AWS::Redshift::Cluster',
                    'terraformType': 'aws_redshift_cluster',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.ClusterIdentifier,
                        'GetAtt': {
                            'Endpoint.Address': obj.data.Endpoint.Address,
                            'Endpoint.Port': obj.data.Endpoint.Port
                        }
                    }
                });
            } else if (obj.type == "redshift.subnetgroup") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['SubnetIds'] = [];
                reqParams.tf['subnet_ids'] = [];
                obj.data.Subnets.forEach(subnet => {
                    reqParams.cfn['SubnetIds'].push(subnet.SubnetIdentifier);
                    reqParams.tf['subnet_ids'].push(subnet.SubnetIdentifier);
                });
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('redshift', obj.id),
                    'region': obj.region,
                    'service': 'redshift',
                    'type': 'AWS::Redshift::ClusterSubnetGroup',
                    'terraformType': 'aws_redshift_subnet_group',
                    'options': reqParams
                });
            } else if (obj.type == "redshift.parametergroup") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['ParameterGroupFamily'] = obj.data.ParameterGroupFamily;
                reqParams.tf['family'] = obj.data.ParameterGroupFamily;
                reqParams.cfn['Tags'] = obj.data.Tags;

                /*
                TODO:
                Parameters:
                - Parameter
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('redshift', obj.id),
                    'region': obj.region,
                    'service': 'redshift',
                    'type': 'AWS::Redshift::ClusterParameterGroup',
                    'terraformType': 'aws_redshift_parameter_group',
                    'options': reqParams
                });
            } else if (obj.type == "redshift.securitygroup") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['Tags'] = obj.data.Tags;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('redshift', obj.id),
                    'region': obj.region,
                    'service': 'redshift',
                    'type': 'AWS::Redshift::ClusterSecurityGroup',
                    'terraformType': 'aws_redshift_security_group',
                    'options': reqParams
                });
            } else if (obj.type == "rds.subnetgroup") {
                reqParams.cfn['DBSubnetGroupDescription'] = obj.data.DBSubnetGroupDescription;
                reqParams.tf['description'] = obj.data.DBSubnetGroupDescription;
                reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroupName;
                reqParams.tf['name'] = obj.data.DBSubnetGroupName;
                reqParams.cfn['SubnetIds'] = [];
                reqParams.tf['subnet_ids'] = [];
                obj.data.Subnets.forEach(subnet => {
                    reqParams.cfn['SubnetIds'].push(subnet.SubnetIdentifier);
                    reqParams.tf['subnet_ids'].push(subnet.SubnetIdentifier);
                });
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('rds', obj.id),
                    'region': obj.region,
                    'service': 'rds',
                    'type': 'AWS::RDS::DBSubnetGroup',
                    'terraformType': 'aws_db_subnet_group',
                    'options': reqParams
                });
            } else if (obj.type == "rds.clusterparametergroup") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['Family'] = obj.data.DBParameterGroupFamily;
                reqParams.tf['family'] = obj.data.DBParameterGroupFamily;

                /*
                TODO:
                Parameters:
                - Parameter
                Tags:
                - Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('rds', obj.id),
                    'region': obj.region,
                    'service': 'rds',
                    'type': 'AWS::RDS::DBClusterParameterGroup',
                    'terraformType': 'aws_rds_cluster_parameter_group',
                    'options': reqParams
                });
            } else if (obj.type == "rds.parametergroup") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['Family'] = obj.data.DBParameterGroupFamily;
                reqParams.tf['family'] = obj.data.DBParameterGroupFamily;

                /*
                TODO:
                Parameters:
                - Parameter
                Tags:
                - Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('rds', obj.id),
                    'region': obj.region,
                    'service': 'rds',
                    'type': 'AWS::RDS::DBParameterGroup',
                    'terraformType': 'aws_db_parameter_group',
                    'options': reqParams
                });
            } else if (obj.type == "rds.optiongroup") {
                reqParams.cfn['EngineName'] = obj.data.EngineName;
                reqParams.tf['engine_name'] = obj.data.EngineName;
                reqParams.cfn['MajorEngineVersion'] = obj.data.MajorEngineVersion;
                reqParams.tf['major_engine_version'] = obj.data.MajorEngineVersion;
                reqParams.cfn['OptionGroupDescription'] = obj.data.OptionGroupDescription;
                reqParams.tf['option_group_description'] = obj.data.OptionGroupDescription;
                if (obj.data.Options) {
                    reqParams.cfn['OptionConfigurations'] = [];
                    reqParams.tf['option'] = [];
                    obj.data.Options.forEach(option => {
                        var optionSettings = null;
                        var tfOptionSettings = null;
                        if (option.OptionSettings) {
                            optionSettings = [];
                            tfOptionSettings = {};
                            option.OptionSettings.forEach(optionSetting => {
                                optionSettings.push({
                                    'Name': optionSetting.Name,
                                    'Value': optionSetting.Value
                                });
                                tfOptionSettings.push({
                                    'name': optionSetting.Name,
                                    'value': optionSetting.Value
                                });
                            });
                        }
                        var dbSecurityGroupMemberships = null;
                        if (option.DBSecurityGroupMemberships) {
                            dbSecurityGroupMemberships = [];
                            option.DBSecurityGroupMemberships.forEach(dbSecurityGroupMembership => {
                                dbSecurityGroupMemberships.push(dbSecurityGroupMembership.DBSecurityGroupName);
                            });
                        }
                        var vpcSecurityGroupMemberships = null;
                        if (option.VpcSecurityGroupMemberships) {
                            vpcSecurityGroupMemberships = [];
                            option.VpcSecurityGroupMemberships.forEach(vpcSecurityGroupMembership => {
                                vpcSecurityGroupMemberships.push(vpcSecurityGroupMembership.VpcSecurityGroupId);
                            });
                        }
                        reqParams.cfn['OptionConfigurations'].push({
                            'DBSecurityGroupMemberships': dbSecurityGroupMemberships,
                            'OptionName': option.OptionName,
                            'OptionSettings': optionSettings,
                            'OptionVersion': option.OptionVersion,
                            'Port': option.Port,
                            'VpcSecurityGroupMemberships': vpcSecurityGroupMemberships
                        });
                        reqParams.tf['option'].push({
                            'db_security_group_memberships': dbSecurityGroupMemberships,
                            'option_name': option.OptionName,
                            'option_settings': optionSettings,
                            'version': option.OptionVersion,
                            'port': option.Port,
                            'vpc_security_group_memberships': vpcSecurityGroupMemberships
                        });
                    });
                }

                /*
                TODO:
                Tags:
                    - Resource Tag 
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('rds', obj.id),
                    'region': obj.region,
                    'service': 'rds',
                    'type': 'AWS::RDS::OptionGroup',
                    'terraformType': 'aws_db_option_group',
                    'options': reqParams
                });
            } else if (obj.type == "rds.securitygroup") {
                reqParams.cfn['GroupDescription'] = obj.data.DBSecurityGroupDescription;
                reqParams.tf['description'] = obj.data.DBSecurityGroupDescription;
                reqParams.cfn['EC2VpcId'] = obj.data.VpcId;

                /*
                TODO:
                DBSecurityGroupIngress:
                    - RDS Security Group Rule
                Tags:
                    - Resource Tag 
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('rds', obj.id),
                    'region': obj.region,
                    'service': 'rds',
                    'type': 'AWS::RDS::DBSecurityGroup',
                    'terraformType': 'aws_db_security_group',
                    'options': reqParams
                });
            } else if (obj.type == "elasticache.subnetgroup") {
                reqParams.cfn['Description'] = obj.data.CacheSubnetGroupDescription;
                reqParams.tf['description'] = obj.data.CacheSubnetGroupDescription;
                reqParams.cfn['name'] = obj.data.CacheSubnetGroupName;
                reqParams.tf['CacheSubnetGroupName'] = obj.data.CacheSubnetGroupName;
                reqParams.cfn['SubnetIds'] = [];
                reqParams.tf['subnet_ids'] = [];
                obj.data.Subnets.forEach(subnet => {
                    reqParams.cfn['SubnetIds'].push(subnet.SubnetIdentifier);
                    reqParams.tf['subnet_ids'].push(subnet.SubnetIdentifier);
                });

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('elasticache', obj.id),
                    'region': obj.region,
                    'service': 'elasticache',
                    'type': 'AWS::ElastiCache::SubnetGroup',
                    'terraformType': 'aws_elasticache_subnet_group',
                    'options': reqParams
                });
            } else if (obj.type == "elasticache.parametergroup") {
                reqParams.cfn['CacheParameterGroupFamily'] = obj.data.CacheParameterGroupFamily;
                reqParams.tf['family'] = obj.data.CacheParameterGroupFamily;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                
                /*
                TODO:
                Properties
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('elasticache', obj.id),
                    'region': obj.region,
                    'service': 'elasticache',
                    'type': 'AWS::ElastiCache::ParameterGroup',
                    'terraformType': 'aws_elasticache_parameter_group',
                    'options': reqParams
                });
            } else if (obj.type == "elasticache.securitygroup") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['name'] = obj.data.CacheSecurityGroupName;
                reqParams.tf['description'] = obj.data.Description;
                if (obj.data.EC2SecurityGroups) {
                    reqParams.tf['security_group_names'] = [];
                    obj.data.EC2SecurityGroups.forEach(securitygroup => {
                        reqParams.tf['security_group_names'].push(securitygroup.EC2SecurityGroupName);
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('elasticache', obj.id),
                    'region': obj.region,
                    'service': 'elasticache',
                    'type': 'AWS::ElastiCache::SecurityGroup',
                    'terraformType': 'aws_elasticache_security_group',
                    'options': reqParams
                });
            } else if (obj.type == "cloudfront.distribution") {
                reqParams.cfn['DistributionConfig'] = {};
                reqParams.cfn.DistributionConfig['Aliases'] = obj.data.Aliases.Items;
                reqParams.tf['aliases'] = obj.data.Aliases.Items;
                reqParams.cfn.DistributionConfig['Origins'] = [];
                reqParams.tf['origin'] = [];
                obj.data.Origins.Items.forEach(origin => {
                    var customOriginConfig = null;
                    var tfCustomOriginConfig = null;
                    var customHeaders = null;
                    var tfCustomHeaders = null;
                    var tfS3OriginConfig = null;
                    if (origin.S3OriginConfig) {
                        tfS3OriginConfig = {
                            'origin_access_identity': origin.S3OriginConfig.OriginAccessIdentity
                        };
                    }
                    if (origin.CustomOriginConfig) {
                        customOriginConfig = {
                            'HTTPPort': origin.CustomOriginConfig.HTTPPort,
                            'HTTPSPort': origin.CustomOriginConfig.HTTPSPort,
                            'OriginKeepaliveTimeout': origin.CustomOriginConfig.OriginKeepaliveTimeout,
                            'OriginProtocolPolicy': origin.CustomOriginConfig.OriginProtocolPolicy,
                            'OriginReadTimeout': origin.CustomOriginConfig.OriginReadTimeout,
                            'OriginSSLProtocols': origin.CustomOriginConfig.OriginSslProtocols.Items
                        };
                        tfCustomOriginConfig = {
                            'http_port': origin.CustomOriginConfig.HTTPPort,
                            'https_port': origin.CustomOriginConfig.HTTPSPort,
                            'origin_keepalive_timeout': origin.CustomOriginConfig.OriginKeepaliveTimeout,
                            'origin_protocol_policy': origin.CustomOriginConfig.OriginProtocolPolicy,
                            'origin_read_timeout': origin.CustomOriginConfig.OriginReadTimeout,
                            'origin_ssl_protocols': origin.CustomOriginConfig.OriginSslProtocols.Items
                        };
                    }
                    if (origin.CustomHeaders) {
                        customHeaders = origin.CustomHeaders.Items;
                        tfCustomHeaders = [];
                        origin.CustomHeaders.Items.forEach(customheader => {
                            tfCustomHeaders.push({
                                'name': customheader.Name,
                                'value': customheader.Value
                            })
                        });
                    }
                    reqParams.cfn.DistributionConfig['Origins'].push({
                        'CustomOriginConfig': customOriginConfig,
                        'DomainName': origin.DomainName,
                        'Id': origin.Id,
                        'OriginCustomHeaders': tfCustomHeaders,
                        'OriginPath': origin.OriginPath,
                        'S3OriginConfig': origin.S3OriginConfig
                    });
                    reqParams.tf['origin'].push({
                        'custom_origin_config': customOriginConfig,
                        'domain_name': origin.DomainName,
                        'origin_id': origin.Id,
                        'custom_header': customHeaders,
                        'origin_path': origin.OriginPath,
                        's3_origin_config': tfS3OriginConfig
                    });
                });
                var defaultCacheLambdaFunctionAssociations = [];
                var tfDefaultCacheLambdaFunctionAssociations = [];
                if (obj.data.DefaultCacheBehavior.LambdaFunctionAssociations.Items && obj.data.DefaultCacheBehavior.LambdaFunctionAssociations.Items.length) {
                    obj.data.DefaultCacheBehavior.LambdaFunctionAssociations.Items.forEach(lambdaFunctionAssociation => {
                        defaultCacheLambdaFunctionAssociations.push({
                            'EventType': lambdaFunctionAssociation.EventType,
                            'LambdaFunctionARN': lambdaFunctionAssociation.LambdaFunctionARN
                        });
                        tfDefaultCacheLambdaFunctionAssociations.push({
                            'event_type': lambdaFunctionAssociation.EventType,
                            'lambda_arn': lambdaFunctionAssociation.LambdaFunctionARN
                        });
                    });
                }
                var cookiesWhitelistedNames = null;
                if (obj.data.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames) {
                    cookiesWhitelistedNames = obj.data.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items;
                }
                var queryStringCacheKeys = null;
                if (obj.data.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys) {
                    queryStringCacheKeys = obj.data.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items;
                }
                reqParams.cfn.DistributionConfig['DefaultCacheBehavior'] = {
                    'AllowedMethods': obj.data.DefaultCacheBehavior.AllowedMethods.Items,
                    'CachedMethods': obj.data.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items,
                    'Compress': obj.data.DefaultCacheBehavior.Compress,
                    'DefaultTTL': obj.data.DefaultCacheBehavior.DefaultTTL,
                    'FieldLevelEncryptionId': (obj.data.DefaultCacheBehavior.FieldLevelEncryptionId == "" ? null : obj.data.DefaultCacheBehavior.FieldLevelEncryptionId),
                    'ForwardedValues': {
                        'Cookies': {
                            'Forward': obj.data.DefaultCacheBehavior.ForwardedValues.Cookies.Forward,
                            'WhitelistedNames': cookiesWhitelistedNames
                        },
                        'Headers': obj.data.DefaultCacheBehavior.ForwardedValues.Headers.Items,
                        'QueryString': obj.data.DefaultCacheBehavior.ForwardedValues.QueryString,
                        'QueryStringCacheKeys': queryStringCacheKeys
                    },
                    'LambdaFunctionAssociations': defaultCacheLambdaFunctionAssociations,
                    'MaxTTL': obj.data.DefaultCacheBehavior.MaxTTL,
                    'MinTTL': obj.data.DefaultCacheBehavior.MinTTL,
                    'SmoothStreaming': obj.data.DefaultCacheBehavior.SmoothStreaming,
                    'TargetOriginId': obj.data.DefaultCacheBehavior.TargetOriginId,
                    'TrustedSigners': obj.data.DefaultCacheBehavior.TrustedSigners.Items,
                    'ViewerProtocolPolicy': obj.data.DefaultCacheBehavior.ViewerProtocolPolicy
                };
                reqParams.tf['default_cache_behavior'] = {
                    'allowed_methods': obj.data.DefaultCacheBehavior.AllowedMethods.Items,
                    'cached_methods': obj.data.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items,
                    'compress': obj.data.DefaultCacheBehavior.Compress,
                    'default_ttl': obj.data.DefaultCacheBehavior.DefaultTTL,
                    'field_level_encryption_id': (obj.data.DefaultCacheBehavior.FieldLevelEncryptionId == "" ? null : obj.data.DefaultCacheBehavior.FieldLevelEncryptionId),
                    'forwarded_values': {
                        'cookies': {
                            'forward': obj.data.DefaultCacheBehavior.ForwardedValues.Cookies.Forward,
                            'whitelisted_names': cookiesWhitelistedNames
                        },
                        'headers': obj.data.DefaultCacheBehavior.ForwardedValues.Headers.Items,
                        'query_string': obj.data.DefaultCacheBehavior.ForwardedValues.QueryString,
                        'query_string_cache_keys': queryStringCacheKeys
                    },
                    'lambda_function_association': defaultCacheLambdaFunctionAssociations,
                    'max_ttl': obj.data.DefaultCacheBehavior.MaxTTL,
                    'min_ttl': obj.data.DefaultCacheBehavior.MinTTL,
                    'smooth_streaming ': obj.data.DefaultCacheBehavior.SmoothStreaming,
                    'target_origin_id': obj.data.DefaultCacheBehavior.TargetOriginId,
                    'trusted_signers': obj.data.DefaultCacheBehavior.TrustedSigners.Items,
                    'viewer_protocol_policy': obj.data.DefaultCacheBehavior.ViewerProtocolPolicy
                };
                if (obj.data.CacheBehaviors.Items && obj.data.CacheBehaviors.Items.length) {
                    reqParams.cfn.DistributionConfig['CacheBehaviors'] = [];
                    reqParams.tf['ordered_cache_behavior'] = [];
                    obj.data.CacheBehaviors.Items.forEach(cacheBehaviour => {
                        var cacheLambdaFunctionAssociations = [];
                        var tfCacheLambdaFunctionAssociations = [];
                        if (cacheBehaviour.LambdaFunctionAssociations.Items && cacheBehaviour.LambdaFunctionAssociations.Items.length) {
                            cacheBehaviour.LambdaFunctionAssociations.Items.forEach(lambdaFunctionAssociation => {
                                cacheLambdaFunctionAssociations.push({
                                    'EventType': lambdaFunctionAssociation.EventType,
                                    'LambdaFunctionARN': lambdaFunctionAssociation.LambdaFunctionARN
                                });
                                tfCacheLambdaFunctionAssociations.push({
                                    'event_type': lambdaFunctionAssociation.EventType,
                                    'lambda_arn': lambdaFunctionAssociation.LambdaFunctionARN
                                });
                            });
                        }
                        var cookiesWhitelistedNames = null;
                        if (cacheBehaviour.ForwardedValues.Cookies.WhitelistedNames) {
                            cookiesWhitelistedNames = cacheBehaviour.ForwardedValues.Cookies.WhitelistedNames.Items;
                        }
                        var queryStringCacheKeys = null;
                        if (cacheBehaviour.ForwardedValues.QueryStringCacheKeys) {
                            queryStringCacheKeys = cacheBehaviour.ForwardedValues.QueryStringCacheKeys.Items;
                        }
                        reqParams.cfn.DistributionConfig['CacheBehaviors'].push({
                            'AllowedMethods': cacheBehaviour.AllowedMethods.Items,
                            'CachedMethods': cacheBehaviour.AllowedMethods.CachedMethods.Items,
                            'Compress': cacheBehaviour.Compress,
                            'DefaultTTL': cacheBehaviour.DefaultTTL,
                            'FieldLevelEncryptionId': (cacheBehaviour.FieldLevelEncryptionId == "" ? null : cacheBehaviour.FieldLevelEncryptionId),
                            'ForwardedValues': {
                                'Cookies': {
                                    'Forward': cacheBehaviour.ForwardedValues.Cookies.Forward,
                                    'WhitelistedNames': cookiesWhitelistedNames
                                },
                                'Headers': cacheBehaviour.ForwardedValues.Headers.Items,
                                'QueryString': cacheBehaviour.ForwardedValues.QueryString,
                                'QueryStringCacheKeys': queryStringCacheKeys
                            },
                            'LambdaFunctionAssociations': cacheLambdaFunctionAssociations,
                            'MaxTTL': cacheBehaviour.MaxTTL,
                            'MinTTL': cacheBehaviour.MinTTL,
                            'PathPattern': cacheBehaviour.PathPattern,
                            'SmoothStreaming': cacheBehaviour.SmoothStreaming,
                            'TargetOriginId': cacheBehaviour.TargetOriginId,
                            'TrustedSigners': cacheBehaviour.TrustedSigners.Items,
                            'ViewerProtocolPolicy': cacheBehaviour.ViewerProtocolPolicy
                        });
                        reqParams.tf['ordered_cache_behavior'].push({
                            'allowed_methods': cacheBehaviour.AllowedMethods.Items,
                            'cached_methods': cacheBehaviour.AllowedMethods.CachedMethods.Items,
                            'compress': cacheBehaviour.Compress,
                            'default_ttl': cacheBehaviour.DefaultTTL,
                            'field_level_encryption_id': cacheBehaviour.FieldLevelEncryptionId,
                            'forwarded_values': {
                                'cookies': {
                                    'forward': cacheBehaviour.ForwardedValues.Cookies.Forward,
                                    'whitelisted_names': cookiesWhitelistedNames
                                },
                                'headers': cacheBehaviour.ForwardedValues.Headers.Items,
                                'query_string': cacheBehaviour.ForwardedValues.QueryString,
                                'query_string_cache_keys': queryStringCacheKeys
                            },
                            'lambda_function_association': cacheLambdaFunctionAssociations,
                            'max_ttl': cacheBehaviour.MaxTTL,
                            'min_ttl': cacheBehaviour.MinTTL,
                            'path_pattern': cacheBehaviour.PathPattern,
                            'smooth_streaming': cacheBehaviour.SmoothStreaming,
                            'target_origin_id': cacheBehaviour.TargetOriginId,
                            'trusted_signers': cacheBehaviour.TrustedSigners.Items,
                            'viewer_protocol_policy': cacheBehaviour.ViewerProtocolPolicy
                        });
                    });
                }
                if (obj.data.CustomErrorResponses) {
                    reqParams.cfn.DistributionConfig['CustomErrorResponses'] = obj.data.CustomErrorResponses.Items;
                    reqParams.tf['custom_error_response'] = []; 
                    obj.data.CustomErrorResponses.Items.forEach(customerrorresponse => {
                        reqParams.tf['custom_error_response'].push({
                            'error_caching_min_ttl': customerrorresponse.ErrorCachingMinTTL,
                            'error_code': customerrorresponse.ErrorCode,
                            'response_code': customerrorresponse.ResponseCode,
                            'response_page_path': customerrorresponse.ResponsePagePath
                        });
                    });
                }
                reqParams.cfn.DistributionConfig['Comment'] = obj.data.Comment;
                reqParams.tf['comment'] = obj.data.Comment;
                reqParams.cfn.DistributionConfig['PriceClass'] = obj.data.PriceClass;
                reqParams.tf['price_class'] = obj.data.PriceClass;
                reqParams.cfn.DistributionConfig['Enabled'] = obj.data.Enabled;
                reqParams.tf['enabled'] = obj.data.Enabled;
                if (obj.data.ViewerCertificate) {
                    reqParams.cfn.DistributionConfig['ViewerCertificate'] = {
                        'AcmCertificateArn': obj.data.ViewerCertificate.ACMCertificateArn,
                        'CloudFrontDefaultCertificate': obj.data.ViewerCertificate.CloudFrontDefaultCertificate,
                        'IamCertificateId': obj.data.ViewerCertificate.IAMCertificateId,
                        'MinimumProtocolVersion': obj.data.ViewerCertificate.MinimumProtocolVersion,
                        'SslSupportMethod': obj.data.ViewerCertificate.SSLSupportMethod
                    };
                    reqParams.tf['viewer_certificate'] = {
                        'acm_certificate_arn': obj.data.ViewerCertificate.ACMCertificateArn,
                        'cloudfront_default_certificate': obj.data.ViewerCertificate.CloudFrontDefaultCertificate,
                        'iam_certificate_id': obj.data.ViewerCertificate.IAMCertificateId,
                        'minimum_protocol_version': obj.data.ViewerCertificate.MinimumProtocolVersion,
                        'ssl_support_method': obj.data.ViewerCertificate.SSLSupportMethod
                    };
                }
                if (obj.data.Restrictions && obj.data.Restrictions.GeoRestriction) {
                    reqParams.cfn.DistributionConfig['Restrictions'] = {
                        'GeoRestriction': {
                            'RestrictionType': obj.data.Restrictions.GeoRestriction.RestrictionType,
                            'Locations': obj.data.Restrictions.GeoRestriction.Items
                        }
                    };
                    reqParams.tf['restrictions'] = {
                        'geo_restriction': {
                            'restriction_type': obj.data.Restrictions.GeoRestriction.RestrictionType,
                            'locations': obj.data.Restrictions.GeoRestriction.Items
                        }
                    };
                }
                if (obj.data.WebACLId && obj.data.WebACLId != "") {
                    reqParams.cfn.DistributionConfig['WebACLId'] = obj.data.WebACLId;
                    reqParams.tf['web_acl_id'] = obj.data.WebACLId;
                }
                reqParams.cfn.DistributionConfig['HttpVersion'] = obj.data.HttpVersion;
                reqParams.tf['http_version'] = obj.data.HttpVersion;
                reqParams.cfn.DistributionConfig['IPV6Enabled'] = obj.data.IsIPV6Enabled;
                reqParams.tf['is_ipv6_enabled'] = obj.data.IsIPV6Enabled;

                /*
                TODO:
                DistributionConfig:
                    DefaultRootObject: String
                    Logging:
                        Logging
                Tags
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cloudfront', obj.id),
                    'region': obj.region,
                    'service': 'cloudfront',
                    'type': 'AWS::CloudFront::Distribution',
                    'terraformType': 'aws_cloudfront_distribution',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.Id,
                        'GetAtt': {
                            'DomainName': obj.data.DomainName
                        }
                    }
                });
            } else if (obj.type == "kinesis.stream") {
                reqParams.cfn['Name'] = obj.data.StreamName;
                reqParams.tf['name'] = obj.data.StreamName;
                reqParams.cfn['RetentionPeriodHours'] = obj.data.RetentionPeriodHours;
                reqParams.tf['retention_period'] = obj.data.RetentionPeriodHours;
                reqParams.cfn['StreamEncryption'] = {
                    'EncryptionType': obj.data.EncryptionType,
                    'KeyId': obj.data.KeyId
                };
                reqParams.tf['encryption_type'] = obj.data.EncryptionType;
                reqParams.tf['kms_key_id'] = obj.data.KeyId;
                reqParams.cfn['ShardCount'] = obj.data.Shards.length;
                reqParams.tf['shard_count'] = obj.data.Shards.length;

                /*
                TODO:
                Tags:
                    - Resource Tag 
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('kinesis', obj.id),
                    'region': obj.region,
                    'service': 'kinesis',
                    'type': 'AWS::Kinesis::Stream',
                    'terraformType': 'aws_kinesis_stream',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.StreamName,
                        'GetAtt': {
                            'Arn': obj.data.StreamARN
                        }
                    }
                });
            } else if (obj.type == "elasticache.cluster") {
                reqParams.cfn['CacheNodeType'] = obj.data.CacheNodeType;
                reqParams.tf['node_type'] = obj.data.CacheNodeType;
                reqParams.cfn['Engine'] = obj.data.Engine;
                reqParams.tf['engine'] = obj.data.Engine;
                reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
                reqParams.tf['engine_version'] = obj.data.EngineVersion;
                reqParams.cfn['NumCacheNodes'] = obj.data.NumCacheNodes;
                reqParams.tf['num_cache_nodes'] = obj.data.NumCacheNodes;
                reqParams.cfn['PreferredAvailabilityZone'] = obj.data.PreferredAvailabilityZone;
                reqParams.tf['availability_zone'] = obj.data.PreferredAvailabilityZone;
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                reqParams.tf['maintenance_window'] = obj.data.PreferredMaintenanceWindow;
                reqParams.cfn['NotificationTopicArn'] = obj.data.NotificationConfiguration.TopicArn;
                reqParams.tf['notification_topic_arn'] = obj.data.NotificationConfiguration.TopicArn;
                if (obj.data.CacheSecurityGroups) {
                    reqParams.cfn['CacheSecurityGroupNames'] = [];
                    reqParams.tf['security_group_names'] = [];
                    obj.data.CacheSecurityGroups.forEach(securityGroup => {
                        reqParams.cfn['CacheSecurityGroupNames'].push(securityGroup.CacheSecurityGroupName);
                        reqParams.tf['security_group_names'].push(securityGroup.CacheSecurityGroupName);
                    });
                }
                reqParams.cfn['CacheParameterGroupName'] = obj.data.CacheParameterGroup.CacheParameterGroupName;
                reqParams.tf['parameter_group_name'] = obj.data.CacheParameterGroup.CacheParameterGroupName;
                reqParams.cfn['CacheSubnetGroupName'] = obj.data.CacheSubnetGroupName;
                reqParams.tf['subnet_group_name'] = obj.data.CacheSubnetGroupName;
                reqParams.cfn['Port'] = obj.data.CacheNodes[0].Endpoint.Port;
                reqParams.tf['port'] = obj.data.CacheNodes[0].Endpoint.Port;
                reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
                if (obj.data.SecurityGroups) {
                    reqParams.cfn['VpcSecurityGroupIds'] = [];
                    reqParams.tf['security_group_ids'] = [];
                    obj.data.SecurityGroups.forEach(securityGroup => {
                        reqParams.cfn['VpcSecurityGroupIds'].push(securityGroup.SecurityGroupId);
                        reqParams.tf['security_group_ids'].push(securityGroup.SecurityGroupId);
                    });
                }
                reqParams.cfn['SnapshotRetentionLimit'] = obj.data.SnapshotRetentionLimit;
                reqParams.tf['snapshot_retention_limit'] = obj.data.SnapshotRetentionLimit;
                reqParams.cfn['SnapshotWindow'] = obj.data.SnapshotWindow;
                reqParams.tf['snapshot_window'] = obj.data.SnapshotWindow;
                reqParams.cfn['ClusterName'] = obj.data.CacheClusterId;
                reqParams.tf['cluster_id'] = obj.data.CacheClusterId;
                
                /*
                TODO:
                AZMode: String
                PreferredAvailabilityZones:
                    - String
                SnapshotArns:
                    - String
                SnapshotName: String
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('elasticache', obj.id),
                    'region': obj.region,
                    'service': 'elasticache',
                    'type': 'AWS::ElastiCache::CacheCluster',
                    'terraformType': 'aws_elasticache_cluster',
                    'options': reqParams
                });
            } else if (obj.type == "dynamodb.table") {
                reqParams.cfn['AttributeDefinitions'] = obj.data.AttributeDefinitions;
                if (obj.data.AttributeDefinitions) {
                    reqParams.tf['attribute'] = [];
                    obj.data.AttributeDefinitions.forEach(attributedefinition => {
                        reqParams.tf['attribute'].push({
                            'name': attributedefinition.AttributeName,
                            'type': attributedefinition.AttributeType
                        });
                    });
                }
                if (obj.data.BillingModeSummary) {
                    reqParams.cfn['BillingMode'] = obj.data.BillingModeSummary.BillingMode;
                    reqParams.tf['billing_mode'] = obj.data.BillingModeSummary.BillingMode;
                }
                reqParams.cfn['TableName'] = obj.data.TableName;
                reqParams.tf['name'] = obj.data.TableName;
                reqParams.cfn['KeySchema'] = obj.data.KeySchema;
                if (obj.data.KeySchema) {
                    obj.data.KeySchema.forEach(keyschema => {
                        if (keyschema.KeyType == "HASH") {
                            reqParams.tf['hash_key'] = keyschema.AttributeName;
                        } else if (keyschema.KeyType == "RANGE") {
                            reqParams.tf['range_key'] = keyschema.AttributeName;
                        }
                    });
                }
                if (obj.data.ProvisionedThroughput && obj.data.ProvisionedThroughput.ReadCapacityUnits > 0) {
                    reqParams.cfn['ProvisionedThroughput'] = {
                        'ReadCapacityUnits': obj.data.ProvisionedThroughput.ReadCapacityUnits,
                        'WriteCapacityUnits': obj.data.ProvisionedThroughput.WriteCapacityUnits
                    };
                    reqParams.tf['read_capacity'] = obj.data.ProvisionedThroughput.ReadCapacityUnits;
                    reqParams.tf['write_capacity'] = obj.data.ProvisionedThroughput.WriteCapacityUnits;
                }
                if (obj.data.LocalSecondaryIndexes) {
                    reqParams.cfn['LocalSecondaryIndexes'] = [];
                    reqParams.tf['local_secondary_index'] = [];
                    obj.data.LocalSecondaryIndexes.forEach(index => {
                        reqParams.cfn['LocalSecondaryIndexes'].push({
                            'IndexName': index.IndexName,
                            'KeySchema': index.KeySchema,
                            'Projection': index.Projection
                        });
                        var rangekey = null;
                        index.KeySchema.forEach(keyschema => {
                            if (keyschema.KeyType == "RANGE") {
                                rangekey = keyschema.AttributeName;
                            }
                        });
                        reqParams.tf['local_secondary_index'].push({
                            'name': index.IndexName,
                            'range_key': rangekey,
                            'projection_type': index.Projection.ProjectionType,
                            'non_key_attributes': index.Projection.NonKeyAttributes
                        });
                    });
                }
                if (obj.data.GlobalSecondaryIndexes) {
                    reqParams.cfn['GlobalSecondaryIndexes'] = [];
                    reqParams.tf['global_secondary_index'] = [];
                    obj.data.GlobalSecondaryIndexes.forEach(index => {
                        reqParams.cfn['GlobalSecondaryIndexes'].push({
                            'IndexName': index.IndexName,
                            'KeySchema': index.KeySchema,
                            'Projection': index.Projection,
                            'ProvisionedThroughput': {
                                'ReadCapacityUnits': index.ProvisionedThroughput.ReadCapacityUnits,
                                'WriteCapacityUnits': index.ProvisionedThroughput.WriteCapacityUnits
                            }
                        });
                        var hashkey = null;
                        var rangekey = null;
                        index.KeySchema.forEach(keyschema => {
                            if (keyschema.KeyType == "HASH") {
                                hashkey = keyschema.AttributeName;
                            } else if (keyschema.KeyType == "RANGE") {
                                rangekey = keyschema.AttributeName;
                            }
                        });
                        reqParams.tf['global_secondary_index'].push({
                            'name': index.IndexName,
                            'hash_key': hashkey,
                            'range_key': rangekey,
                            'projection_type': index.Projection.ProjectionType,
                            'non_key_attributes': index.Projection.NonKeyAttributes,
                            'read_capacity': index.ProvisionedThroughput.ReadCapacityUnits,
                            'write_capacity': index.ProvisionedThroughput.WriteCapacityUnits
                        });
                    });
                }
                if (obj.data.StreamSpecification) {
                    reqParams.cfn['StreamSpecification'] = {
                        'StreamViewType': obj.data.StreamSpecification.StreamViewType
                    };
                    reqParams.tf['stream_enabled'] = true;
                    reqParams.tf['stream_view_type'] = obj.data.StreamSpecification.StreamViewType;
                }
                if (obj.data.SSEDescription) {
                    reqParams.cfn['SSESpecification'] = {
                        'SSEEnabled': (obj.data.SSEDescription.Status[0] == "E")
                    };
                    reqParams.tf['server_side_encryption'] = {
                        'enabled': (obj.data.SSEDescription.Status[0] == "E")
                    };
                }

                /*
                TODO:
                PointInTimeRecoverySpecification: 
                    PointInTimeRecoverySpecification
                Tags: 
                    - Resource Tag
                TimeToLiveSpecification: 
                    TimeToLiveSpecification
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('dynamodb', obj.id),
                    'region': obj.region,
                    'service': 'dynamodb',
                    'type': 'AWS::DynamoDB::Table',
                    'terraformType': 'aws_dynamodb_table',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.TableName,
                        'GetAtt': {
                            'Arn': obj.data.TableArn,
                            'StreamArn': obj.data.LatestStreamArn
                        }
                    }
                });
            } else if (obj.type == "cloudtrail.trail") {
                reqParams.cfn['TrailName'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['S3BucketName'] = obj.data.S3BucketName;
                reqParams.tf['s3_bucket_name'] = obj.data.S3BucketName;
                reqParams.cfn['S3KeyPrefix'] = obj.data.S3KeyPrefix;
                reqParams.tf['s3_key_prefix'] = obj.data.S3KeyPrefix;
                if (obj.data.SnsTopicARN) {
                    reqParams.cfn['SnsTopicName'] = obj.data.SnsTopicARN.split(":").pop();
                    reqParams.tf['sns_topic_name'] = obj.data.SnsTopicARN.split(":").pop();
                }
                reqParams.cfn['IncludeGlobalServiceEvents'] = obj.data.IncludeGlobalServiceEvents;
                reqParams.tf['include_global_service_events'] = obj.data.IncludeGlobalServiceEvents;
                reqParams.cfn['IsMultiRegionTrail'] = obj.data.IsMultiRegionTrail;
                reqParams.tf['is_multi_region_trail'] = obj.data.IsMultiRegionTrail;
                reqParams.cfn['EnableLogFileValidation'] = obj.data.LogFileValidationEnabled;
                reqParams.tf['enable_log_file_validation'] = obj.data.LogFileValidationEnabled;
                reqParams.cfn['CloudWatchLogsLogGroupArn'] = obj.data.CloudWatchLogsLogGroupArn;
                reqParams.tf['cloud_watch_logs_group_arn'] = obj.data.CloudWatchLogsLogGroupArn;
                reqParams.cfn['CloudWatchLogsRoleArn'] = obj.data.CloudWatchLogsRoleArn;
                reqParams.tf['cloud_watch_logs_role_arn'] = obj.data.CloudWatchLogsRoleArn;
                reqParams.cfn['KMSKeyId'] = obj.data.KmsKeyId;
                reqParams.tf['kms_key_id'] = obj.data.KmsKeyId;
                
                /*
                TODO:
                EventSelectors:
                    - EventSelector
                IsLogging: Boolean
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cloudtrail', obj.id),
                    'region': obj.region,
                    'service': 'cloudtrail',
                    'type': 'AWS::CloudTrail::Trail',
                    'terraformType': 'aws_cloudtrail',
                    'options': reqParams
                });
            } else if (obj.type == "autoscaling.policy") {
                reqParams.cfn['AutoScalingGroupName'] = obj.data.AutoScalingGroupName;
                reqParams.tf['autoscaling_group_name'] = obj.data.AutoScalingGroupName;
                reqParams.cfn['PolicyType'] = obj.data.PolicyType;
                reqParams.tf['policy_type'] = obj.data.PolicyType;
                reqParams.cfn['AdjustmentType'] = obj.data.AdjustmentType;
                reqParams.tf['adjustment_type'] = obj.data.AdjustmentType;
                reqParams.cfn['MinAdjustmentMagnitude'] = obj.data.MinAdjustmentMagnitude;
                reqParams.tf['MinAdjustmentMagnitude'] = obj.data.MinAdjustmentMagnitude;
                reqParams.cfn['ScalingAdjustment'] = obj.data.ScalingAdjustment;
                reqParams.tf['scaling_adjustment'] = obj.data.ScalingAdjustment;
                reqParams.cfn['Cooldown'] = obj.data.Cooldown;
                reqParams.tf['cooldown'] = obj.data.Cooldown;
                reqParams.cfn['StepAdjustments'] = obj.data.StepAdjustments;
                if (obj.data.StepAdjustments) {
                    reqParams.tf['step_adjustments'] = [];
                    obj.data.StepAdjustments.forEach(stepadjustment => {
                        reqParams.tf['step_adjustments'].push({
                            'metric_interval_lower_bound': stepadjustment.MetricIntervalLowerBound,
                            'metric_interval_upper_bound': stepadjustment.MetricIntervalUpperBound,
                            'scaling_adjustment': stepadjustment.ScalingAdjustment
                        });
                    });
                }
                reqParams.cfn['MetricAggregationType'] = obj.data.MetricAggregationType;
                reqParams.tf['metric_aggregation_type'] = obj.data.MetricAggregationType;
                reqParams.cfn['EstimatedInstanceWarmup'] = obj.data.EstimatedInstanceWarmup;
                reqParams.tf['estimated_instance_warmup'] = obj.data.EstimatedInstanceWarmup;
                reqParams.cfn['TargetTrackingConfiguration'] = obj.data.TargetTrackingConfiguration;
                if (obj.data.TargetTrackingConfiguration) {
                    var customizedmetricspecification = null;
                    if (obj.data.TargetTrackingConfiguration.CustomizedMetricSpecification) {
                        var dimensions = null;
                        if (obj.data.TargetTrackingConfiguration.CustomizedMetricSpecification.Dimensions) {
                            dimensions = [];
                            obj.data.TargetTrackingConfiguration.CustomizedMetricSpecification.Dimensions.forEach(dimension => {
                                dimensions.push({
                                    'name': dimension.Name,
                                    'value': dimension.Value
                                });
                            });
                        }
                        customizedmetricspecification = {
                            'metric_dimension': dimensions,
                            'metric_name': obj.data.TargetTrackingConfiguration.CustomizedMetricSpecification.MetricName,
                            'namespace': obj.data.TargetTrackingConfiguration.CustomizedMetricSpecification.Namespace,
                            'statistic': obj.data.TargetTrackingConfiguration.CustomizedMetricSpecification.Statistic,
                            'unit': obj.data.TargetTrackingConfiguration.CustomizedMetricSpecification.Unit
                        };
                    }
                    var predefinedmetricspecification = null;
                    if (obj.data.TargetTrackingConfiguration.PredefinedMetricSpecification) {
                        predefinedmetricspecification = {
                            'predefined_metric_type': obj.data.TargetTrackingConfiguration.PredefinedMetricSpecification.PredefinedMetricType,
                            'resource_label': obj.data.TargetTrackingConfiguration.PredefinedMetricSpecification.ResourceLabel
                        };
                    }
                    reqParams.tf['target_tracking_configuration'] = {
                        'customized_metric_specification': customizedmetricspecification,
                        'disable_scale_in': obj.data.TargetTrackingConfiguration.DisableScaleIn,
                        'predefined_metric_specification': predefinedmetricspecification,
                        'target_value': obj.data.TargetTrackingConfiguration.TargetValue
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('autoscaling', obj.id),
                    'region': obj.region,
                    'service': 'autoscaling',
                    'type': 'AWS::AutoScaling::ScalingPolicy',
                    'terraformType': 'aws_autoscaling_policy',
                    'options': reqParams
                });
            } else if (obj.type == "autoscaling.scheduledaction") {
                reqParams.cfn['AutoScalingGroupName'] = obj.data.AutoScalingGroupName;
                reqParams.tf['autoscaling_group_name'] = obj.data.AutoScalingGroupName;
                reqParams.cfn['StartTime'] = obj.data.StartTime.toISOString();
                reqParams.tf['start_time'] = obj.data.StartTime.toISOString();
                reqParams.cfn['EndTime'] = obj.data.EndTime.toISOString();
                reqParams.tf['end_time'] = obj.data.EndTime.toISOString();
                reqParams.cfn['Recurrence'] = obj.data.Recurrence;
                reqParams.tf['recurrence'] = obj.data.Recurrence;
                reqParams.cfn['MaxSize'] = obj.data.MaxSize;
                reqParams.tf['max_size'] = obj.data.MaxSize;
                reqParams.cfn['MinSize'] = obj.data.MinSize;
                reqParams.tf['min_size'] = obj.data.MinSize;
                reqParams.cfn['DesiredCapacity'] = obj.data.DesiredCapacity;
                reqParams.tf['desired_capacity'] = obj.data.DesiredCapacity;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('autoscaling', obj.id),
                    'region': obj.region,
                    'service': 'autoscaling',
                    'type': 'AWS::AutoScaling::ScheduledAction',
                    'terraformType': 'aws_autoscaling_schedule',
                    'options': reqParams
                });
            } else if (obj.type == "autoscaling.autoscalinggroup") {
                reqParams.cfn['AutoScalingGroupName'] = obj.data.AutoScalingGroupName;
                reqParams.tf['name'] = obj.data.AutoScalingGroupName;
                reqParams.cfn['LaunchConfigurationName'] = obj.data.LaunchConfigurationName;
                reqParams.tf['launch_configuration'] = obj.data.LaunchConfigurationName;
                reqParams.cfn['LaunchTemplate'] = obj.data.LaunchTemplate;
                if (obj.data.LaunchTemplate) {
                    reqParams.tf['launch_template'] = {
                        'id': obj.data.LaunchTemplate.LaunchTemplateId,
                        'name': obj.data.LaunchTemplate.LaunchTemplateName,
                        'version': obj.data.LaunchTemplate.Version
                    };
                }
                reqParams.cfn['MixedInstancesPolicy'] = obj.data.MixedInstancesPolicy;
                if (obj.data.MixedInstancesPolicy) {
                    var instancesdistribution = null;
                    if (obj.data.MixedInstancesPolicy.InstancesDistribution) {
                        instancesdistribution = {
                            'on_demand_allocation_strategy': obj.data.MixedInstancesPolicy.InstancesDistribution.OnDemandAllocationStrategy,
                            'on_demand_base_capacity': obj.data.MixedInstancesPolicy.InstancesDistribution.OnDemandBaseCapacity,
                            'on_demand_percentage_above_base_capacity': obj.data.MixedInstancesPolicy.InstancesDistribution.OnDemandPercentageAboveBaseCapacity,
                            'spot_allocation_strategy': obj.data.MixedInstancesPolicy.InstancesDistribution.SpotAllocationStrategy,
                            'spot_instance_pools': obj.data.MixedInstancesPolicy.InstancesDistribution.SpotInstancePools,
                            'spot_max_price': obj.data.MixedInstancesPolicy.InstancesDistribution.SpotMaxPrice
                        };
                    }
                    var override = [];
                    obj.data.MixedInstancesPolicy.LaunchTemplate.Overrides.forEach(launchtemplateoverride => {
                        override.push({
                            'instance_type': launchtemplateoverride.InstanceType
                        });
                    });
                    reqParams.tf['mixed_instances_policy'] = {
                        'instances_distribution': instancesdistribution,
                        'launch_template': {
                            'launch_template_specification': {
                                'launch_template_id': obj.data.MixedInstancesPolicy.LaunchTemplate.LaunchTemplateSpecification.LaunchTemplateId,
                                'launch_template_name': obj.data.MixedInstancesPolicy.LaunchTemplate.LaunchTemplateSpecification.LaunchTemplateName,
                                'version': obj.data.MixedInstancesPolicy.LaunchTemplate.LaunchTemplateSpecification.Version
                            },
                            'override': override
                        }
                    };
                }
                reqParams.cfn['MinSize'] = obj.data.MinSize;
                reqParams.tf['min_size'] = obj.data.MinSize;
                reqParams.cfn['MaxSize'] = obj.data.MaxSize;
                reqParams.tf['max_size'] = obj.data.MaxSize;
                reqParams.cfn['DesiredCapacity'] = obj.data.DesiredCapacity;
                reqParams.tf['desired_capacity'] = obj.data.DesiredCapacity;
                reqParams.cfn['Cooldown'] = obj.data.DefaultCooldown;
                reqParams.tf['default_cooldown'] = obj.data.DefaultCooldown;
                reqParams.cfn['AvailabilityZones'] = obj.data.AvailabilityZones;
                reqParams.tf['availability_zones'] = obj.data.AvailabilityZones;
                reqParams.cfn['LoadBalancerNames'] = obj.data.LoadBalancerNames;
                reqParams.tf['load_balancers'] = obj.data.LoadBalancerNames;
                reqParams.cfn['TargetGroupARNs'] = obj.data.TargetGroupARNs;
                reqParams.tf['target_group_arns'] = obj.data.TargetGroupARNs;
                reqParams.cfn['HealthCheckType'] = obj.data.HealthCheckType;
                reqParams.tf['health_check_type'] = obj.data.HealthCheckType;
                reqParams.cfn['HealthCheckGracePeriod'] = obj.data.HealthCheckGracePeriod;
                reqParams.tf['health_check_grace_period'] = obj.data.HealthCheckGracePeriod;
                reqParams.cfn['PlacementGroup'] = obj.data.PlacementGroup;
                reqParams.tf['placement_group'] = obj.data.PlacementGroup;
                reqParams.cfn['VPCZoneIdentifier'] = obj.data.VPCZoneIdentifier.split(",");
                reqParams.tf['vpc_zone_identifier'] = obj.data.VPCZoneIdentifier.split(",");
                reqParams.cfn['TerminationPolicies'] = obj.data.TerminationPolicies;
                reqParams.tf['termination_policies'] = obj.data.TerminationPolicies;
                reqParams.cfn['ServiceLinkedRoleARN'] = obj.data.ServiceLinkedRoleARN;
                reqParams.tf['service_linked_role_arn'] = obj.data.ServiceLinkedRoleARN;
                if (obj.data.EnabledMetrics && obj.data.EnabledMetrics[0] && obj.data.EnabledMetrics[0].Granularity) {
                    reqParams.tf['metrics_granularity'] = obj.data.EnabledMetrics[0].Granularity;
                    reqParams.tf['enabled_metrics'] = [];
                    reqParams.cfn['MetricsCollection'] = {
                        'Granularity': obj.data.EnabledMetrics[0].Granularity,
                        'Metrics': []
                    };
                    obj.data.EnabledMetrics.forEach(metric => {
                        reqParams.cfn.MetricsCollection.Metrics.push(metric.Metric);
                        reqParams.tf['enabled_metrics'].push(metric.Metric);
                    });
                }
                if (obj.data.Tags) {
                    reqParams.cfn['Tags'] = [];
                    reqParams.tf['tag'] = [];
                    obj.data.Tags.forEach(tag => {
                        reqParams.cfn['Tags'].push({
                            'Key': tag.Key,
                            'Value': tag.Value,
                            'PropagateAtLaunch': tag.PropagateAtLaunch
                        });
                        reqParams.tf['tag'].push({
                            'key': tag.Key,
                            'value': tag.Value,
                            'propagate_at_launch': tag.PropagateAtLaunch
                        });
                    });
                }
                
                /*
                TODO:
                HealthCheckGracePeriod: Integer
                InstanceId: String
                LifecycleHookSpecificationList: 
                    - LifecycleHookSpecification
                NotificationConfigurations:
                    - NotificationConfiguration
                */
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('autoscaling', obj.id),
                    'region': obj.region,
                    'service': 'autoscaling',
                    'type': 'AWS::AutoScaling::AutoScalingGroup',
                    'terraformType': 'aws_autoscaling_group',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.AutoScalingGroupName
                    }
                });
            } else if (obj.type == "autoscaling.launchconfiguration") {
                reqParams.cfn['LaunchConfigurationName'] = obj.data.LaunchConfigurationName;
                reqParams.tf['name'] = obj.data.LaunchConfigurationName;
                reqParams.cfn['ImageId'] = obj.data.ImageId;
                reqParams.tf['image_id'] = obj.data.ImageId;
                reqParams.cfn['KeyName'] = obj.data.KeyName;
                reqParams.tf['key_name'] = obj.data.KeyName;
                reqParams.cfn['SecurityGroups'] = obj.data.SecurityGroups;
                reqParams.tf['security_groups'] = obj.data.SecurityGroups;
                reqParams.cfn['ClassicLinkVPCId'] = obj.data.ClassicLinkVPCId;
                reqParams.tf['vpc_classic_link_id'] = obj.data.ClassicLinkVPCId;
                reqParams.cfn['ClassicLinkVPCSecurityGroups'] = obj.data.ClassicLinkVPCSecurityGroups;
                reqParams.tf['vpc_classic_link_security_groups'] = obj.data.ClassicLinkVPCSecurityGroups;
                reqParams.cfn['UserData'] = (obj.data.UserData != "") ? obj.data.UserData : null;
                reqParams.tf['user_data'] = (obj.data.UserData != "") ? obj.data.UserData : null;
                reqParams.cfn['InstanceType'] = obj.data.InstanceType;
                reqParams.tf['instance_type'] = obj.data.InstanceType;
                reqParams.cfn['KernelId'] = (obj.data.KernelId != "") ? obj.data.KernelId : null;
                reqParams.cfn['RamDiskId'] = (obj.data.RamdiskId != "") ? obj.data.RamdiskId : null;
                reqParams.cfn['BlockDeviceMappings'] = obj.data.BlockDeviceMappings;
                //reqParams.tf['BlockDeviceMappings'] = obj.data.BlockDeviceMappings; TODO
                if (obj.data.InstanceMonitoring) {
                    reqParams.cfn['InstanceMonitoring'] = obj.data.InstanceMonitoring.Enabled;
                    reqParams.tf['enable_monitoring'] = obj.data.InstanceMonitoring.Enabled;
                }
                reqParams.cfn['SpotPrice'] = obj.data.SpotPrice;
                reqParams.tf['spot_price'] = obj.data.SpotPrice;
                reqParams.cfn['IamInstanceProfile'] = obj.data.IamInstanceProfile;
                reqParams.tf['iam_instance_profile'] = obj.data.IamInstanceProfile;
                reqParams.cfn['EbsOptimized'] = obj.data.EbsOptimized;
                reqParams.tf['ebs_optimized'] = obj.data.EbsOptimized;
                reqParams.cfn['AssociatePublicIpAddress'] = obj.data.AssociatePublicIpAddress;
                reqParams.tf['associate_public_ip_address'] = obj.data.AssociatePublicIpAddress;
                reqParams.cfn['PlacementTenancy'] = obj.data.PlacementTenancy;
                reqParams.tf['placement_tenancy'] = obj.data.PlacementTenancy;
                
                /*
                TODO:
                InstanceId: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('autoscaling', obj.id),
                    'region': obj.region,
                    'service': 'autoscaling',
                    'type': 'AWS::AutoScaling::LaunchConfiguration',
                    'terraformType': 'aws_launch_configuration',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.securitygroup") {
                reqParams.cfn['GroupDescription'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['GroupName'] = obj.data.GroupName;
                reqParams.tf['name'] = obj.data.GroupName;
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }
                reqParams.cfn['VpcId'] = obj.data.VpcId;
                reqParams.tf['vpc_id'] = obj.data.VpcId;
                if (obj.data.IpPermissions) {
                    reqParams.cfn['SecurityGroupIngress'] = [];
                    reqParams.tf['ingress'] = [];
                    obj.data.IpPermissions.forEach(ipPermission => {
                        if (ipPermission.IpRanges) {
                            ipPermission.IpRanges.forEach(ipRange => {
                                reqParams.cfn['SecurityGroupIngress'].push({
                                    'CidrIp': ipRange.CidrIp,
                                    'Description': ipRange.Description,
                                    'FromPort': ipPermission.FromPort,
                                    'IpProtocol': ipPermission.IpProtocol,
                                    'ToPort': ipPermission.ToPort
                                });
                                reqParams.tf['ingress'].push({
                                    'cidr_blocks': [ipRange.CidrIp],
                                    'description': ipRange.Description,
                                    'from_port': ipPermission.FromPort,
                                    'protocol': ipPermission.IpProtocol,
                                    'to_port': ipPermission.ToPort
                                });
                            });
                        }
                        if (ipPermission.Ipv6Ranges) {
                            ipPermission.Ipv6Ranges.forEach(ipv6Range => {
                                reqParams.cfn['SecurityGroupIngress'].push({
                                    'CidrIpv6': ipv6Range.CidrIpv6,
                                    'Description': ipv6Range.Description,
                                    'FromPort': ipPermission.FromPort,
                                    'IpProtocol': ipPermission.IpProtocol,
                                    'ToPort': ipPermission.ToPort
                                });
                                reqParams.tf['ingress'].push({
                                    'ipv6_cidr_blocks': [ipv6Range.CidrIpv6],
                                    'description': ipv6Range.Description,
                                    'from_port': ipPermission.FromPort,
                                    'protocol': ipPermission.IpProtocol,
                                    'to_port': ipPermission.ToPort
                                });
                            });
                        }
                        if (ipPermission.UserIdGroupPairs) {
                            ipPermission.UserIdGroupPairs.forEach(userIdGroupPair => {
                                reqParams.cfn['SecurityGroupIngress'].push({
                                    'SourceSecurityGroupId': userIdGroupPair.GroupId,
                                    'SourceSecurityGroupName': userIdGroupPair.GroupName,
                                    'SourceSecurityGroupOwnerId': userIdGroupPair.UserId,
                                    'Description': userIdGroupPair.Description,
                                    'FromPort': ipPermission.FromPort,
                                    'IpProtocol': ipPermission.IpProtocol,
                                    'ToPort': ipPermission.ToPort
                                });
                                reqParams.tf['ingress'].push({
                                    'security_groups': [userIdGroupPair.GroupId || userIdGroupPair.GroupName],
                                    'description': userIdGroupPair.Description,
                                    'from_port': ipPermission.FromPort,
                                    'protocol': ipPermission.IpProtocol,
                                    'to_port': ipPermission.ToPort
                                });
                            });
                        }
                    });
                }
                if (obj.data.IpPermissionsEgress) {
                    reqParams.cfn['SecurityGroupEgress'] = [];
                    reqParams.tf['egress'] = [];
                    obj.data.IpPermissionsEgress.forEach(ipPermissionsEgress => {
                        if (ipPermissionsEgress.IpRanges) {
                            ipPermissionsEgress.IpRanges.forEach(ipRange => {
                                reqParams.cfn['SecurityGroupEgress'].push({
                                    'CidrIp': ipRange.CidrIp,
                                    'Description': ipRange.Description,
                                    'FromPort': ipPermissionsEgress.FromPort,
                                    'IpProtocol': ipPermissionsEgress.IpProtocol,
                                    'ToPort': ipPermissionsEgress.ToPort
                                });
                                reqParams.tf['egress'].push({
                                    'cidr_blocks': [ipRange.CidrIp],
                                    'description': ipRange.Description,
                                    'from_port': ipPermissionsEgress.FromPort,
                                    'protocol': ipPermissionsEgress.IpProtocol,
                                    'to_port': ipPermissionsEgress.ToPort
                                });
                            });
                        }
                        if (ipPermissionsEgress.Ipv6Ranges) {
                            ipPermissionsEgress.Ipv6Ranges.forEach(ipv6Range => {
                                reqParams.cfn['SecurityGroupEgress'].push({
                                    'CidrIpv6': ipv6Range.CidrIpv6,
                                    'Description': ipv6Range.Description,
                                    'FromPort': ipPermissionsEgress.FromPort,
                                    'IpProtocol': ipPermissionsEgress.IpProtocol,
                                    'ToPort': ipPermissionsEgress.ToPort
                                });
                                reqParams.tf['egress'].push({
                                    'ipv6_cidr_blocks': [ipv6Range.CidrIpv6],
                                    'description': ipv6Range.Description,
                                    'from_port': ipPermissionsEgress.FromPort,
                                    'protocol': ipPermissionsEgress.IpProtocol,
                                    'to_port': ipPermissionsEgress.ToPort
                                });
                            });
                        }
                        if (ipPermissionsEgress.UserIdGroupPairs) {
                            ipPermissionsEgress.UserIdGroupPairs.forEach(userIdGroupPair => {
                                reqParams.cfn['SecurityGroupEgress'].push({
                                    'DestinationSecurityGroupId': userIdGroupPair.GroupId,
                                    'Description': ipv6Range.Description,
                                    'FromPort': ipPermissionsEgress.FromPort,
                                    'IpProtocol': ipPermissionsEgress.IpProtocol,
                                    'ToPort': ipPermissionsEgress.ToPort
                                });
                                reqParams.tf['egress'].push({
                                    'security_groups': [userIdGroupPair.GroupId],
                                    'description': ipv6Range.Description,
                                    'from_port': ipPermissionsEgress.FromPort,
                                    'protocol': ipPermissionsEgress.IpProtocol,
                                    'to_port': ipPermissionsEgress.ToPort
                                });
                            });
                        }
                        if (ipPermissionsEgress.PrefixListIds) {
                            ipPermissionsEgress.PrefixListIds.forEach(prefixListId => {
                                reqParams.cfn['SecurityGroupEgress'].push({
                                    'DestinationPrefixListId': prefixListId.PrefixListId,
                                    'Description': prefixListId.Description,
                                    'FromPort': ipPermissionsEgress.FromPort,
                                    'IpProtocol': ipPermissionsEgress.IpProtocol,
                                    'ToPort': ipPermissionsEgress.ToPort
                                });
                                reqParams.tf['egress'].push({
                                    'prefix_list_ids': [prefixListId.PrefixListId],
                                    'description': prefixListId.Description,
                                    'from_port': ipPermissionsEgress.FromPort,
                                    'protocol': ipPermissionsEgress.IpProtocol,
                                    'to_port': ipPermissionsEgress.ToPort
                                });
                            });
                        }
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::SecurityGroup',
                    'terraformType': 'aws_security_group',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.GroupId,
                        'Terraform': {
                            'id': obj.data.GroupId
                        }
                    }
                });
            } else if (obj.type == "route53.healthcheck") {
                reqParams.cfn['HealthCheckConfig'] = {
                    'AlarmIdentifier': obj.data.HealthCheckConfig.AlarmIdentifier,
                    'ChildHealthChecks': obj.data.HealthCheckConfig.ChildHealthChecks,
                    'EnableSNI': obj.data.HealthCheckConfig.EnableSNI,
                    'FailureThreshold': obj.data.HealthCheckConfig.FailureThreshold,
                    'FullyQualifiedDomainName': obj.data.HealthCheckConfig.FullyQualifiedDomainName,
                    'HealthThreshold': obj.data.HealthCheckConfig.HealthThreshold,
                    'InsufficientDataHealthStatus': obj.data.HealthCheckConfig.InsufficientDataHealthStatus,
                    'Inverted': obj.data.HealthCheckConfig.Inverted,
                    'IPAddress': obj.data.HealthCheckConfig.IPAddress,
                    'MeasureLatency': obj.data.HealthCheckConfig.MeasureLatency,
                    'Port': obj.data.HealthCheckConfig.Port,
                    'Regions': obj.data.HealthCheckConfig.Regions,
                    'RequestInterval': obj.data.HealthCheckConfig.RequestInterval,
                    'ResourcePath': obj.data.HealthCheckConfig.ResourcePath,
                    'SearchString': obj.data.HealthCheckConfig.SearchString,
                    'Type': obj.data.HealthCheckConfig.Type
                };
                reqParams.tf['cloudwatch_alarm_name'] = obj.data.HealthCheckConfig.AlarmIdentifier;
                reqParams.tf['child_healthchecks'] = obj.data.HealthCheckConfig.ChildHealthChecks;
                reqParams.tf['enable_sni'] = obj.data.HealthCheckConfig.EnableSNI;
                reqParams.tf['failure_threshold'] = obj.data.HealthCheckConfig.FailureThreshold;
                reqParams.tf['fqdn'] = obj.data.HealthCheckConfig.FullyQualifiedDomainName;
                reqParams.tf['child_health_threshold'] = obj.data.HealthCheckConfig.HealthThreshold;
                reqParams.tf['insufficient_data_health_status'] = obj.data.HealthCheckConfig.InsufficientDataHealthStatus;
                reqParams.tf['invert_healthcheck'] = obj.data.HealthCheckConfig.Inverted;
                reqParams.tf['ip_address'] = obj.data.HealthCheckConfig.IPAddress;
                reqParams.tf['measure_latency'] = obj.data.HealthCheckConfig.MeasureLatency;
                reqParams.tf['port'] = obj.data.HealthCheckConfig.Port;
                reqParams.tf['regions'] = obj.data.HealthCheckConfig.Regions;
                reqParams.tf['request_interval'] = obj.data.HealthCheckConfig.RequestInterval;
                reqParams.tf['resource_path'] = obj.data.HealthCheckConfig.ResourcePath;
                reqParams.tf['search_string'] = obj.data.HealthCheckConfig.SearchString;
                reqParams.tf['type'] = obj.data.HealthCheckConfig.Type;

                /*
                TODO:
                HealthCheckTags:
                    - HealthCheckTags 
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('route53', obj.id),
                    'region': obj.region,
                    'service': 'route53',
                    'type': 'AWS::Route53::HealthCheck',
                    'terraformType': 'aws_route53_health_check',
                    'options': reqParams
                });
            } else if (obj.type == "elb.loadbalancer") {
                reqParams.cfn['LoadBalancerName'] = obj.data.LoadBalancerName;
                reqParams.tf['name'] = obj.data.LoadBalancerName;
                if (obj.data.ListenerDescriptions) {
                    reqParams.cfn['Listeners'] = [];
                    reqParams.tf['listener'] = [];
                    obj.data.ListenerDescriptions.forEach(listener => {
                        reqParams.cfn['Listeners'].push({
                            'InstancePort': listener.Listener.InstanceProtocol,
                            'InstanceProtocol': listener.Listener.InstancePort,
                            'LoadBalancerPort': listener.Listener.LoadBalancerPort,
                            'PolicyNames': listener.PolicyNames,
                            'Protocol': listener.Listener.Protocol,
                            'SSLCertificateId': listener.Listener.SSLCertificateId
                        });
                        reqParams.tf['listener'].push({
                            'instance_port': listener.Listener.InstanceProtocol,
                            'instance_protocol': listener.Listener.InstancePort,
                            'lb_port': listener.Listener.LoadBalancerPort,
                            'lb_protocol': listener.Listener.Protocol,
                            'ssl_certificate_id': listener.Listener.SSLCertificateId
                        });
                    });
                }
                reqParams.cfn['AppCookieStickinessPolicy'] = obj.data.Policies.AppCookieStickinessPolicies;
                reqParams.cfn['LBCookieStickinessPolicy'] = obj.data.Policies.LBCookieStickinessPolicies;
                reqParams.cfn['AvailabilityZones'] = obj.data.AvailabilityZones;
                reqParams.tf['availability_zones'] = obj.data.AvailabilityZones;
                reqParams.cfn['Subnets'] = obj.data.Subnets;
                reqParams.tf['subnets'] = obj.data.Subnets;
                if (obj.data.Instances) {
                    reqParams.cfn['Instances'] = [];
                    reqParams.tf['instances'] = [];
                    obj.data.Instances.forEach(instance => {
                        reqParams.cfn['Instances'].push(instance.InstanceId);
                        reqParams.tf['instances'].push(instance.InstanceId);
                    });
                }
                reqParams.cfn['HealthCheck'] = obj.data.HealthCheck;
                if (obj.data.HealthCheck) {
                    reqParams.tf['health_check'] = {
                        'healthy_threshold': obj.data.HealthCheck.HealthyThreshold,
                        'interval': obj.data.HealthCheck.Interval,
                        'target': obj.data.HealthCheck.Target,
                        'timeout': obj.data.HealthCheck.Timeout,
                        'unhealthy_threshold': obj.data.HealthCheck.UnhealthyThreshold
                    };
                }
                reqParams.cfn['SecurityGroups'] = obj.data.SecurityGroups;
                reqParams.tf['security_groups'] = obj.data.SecurityGroups;
                reqParams.cfn['Scheme'] = obj.data.Scheme;
                reqParams.tf['internal'] = (obj.data.Scheme == "internal");

                /*
                TODO:
                AccessLoggingPolicy:
                    AccessLoggingPolicy
                ConnectionDrainingPolicy:
                    ConnectionDrainingPolicy
                ConnectionSettings:
                    ConnectionSettings
                CrossZone: Boolean
                Policies:
                    - ElasticLoadBalancing Policy
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('elb', obj.id),
                    'region': obj.region,
                    'service': 'elb',
                    'type': 'AWS::ElasticLoadBalancing::LoadBalancer',
                    'terraformType': 'aws_elb',
                    'options': reqParams
                });
            } else if (obj.type == "cloudwatch.alarm") {
                reqParams.cfn['AlarmName'] = obj.data.AlarmName;
                reqParams.tf['alarm_name'] = obj.data.AlarmName;
                reqParams.cfn['AlarmDescription'] = obj.data.AlarmDescription;
                reqParams.tf['alarm_description'] = obj.data.AlarmDescription;
                reqParams.cfn['ActionsEnabled'] = obj.data.ActionsEnabled;
                reqParams.tf['actions_enabled'] = obj.data.ActionsEnabled;
                reqParams.cfn['OKActions'] = obj.data.OKActions;
                reqParams.tf['ok_actions'] = obj.data.OKActions;
                reqParams.cfn['AlarmActions'] = obj.data.AlarmActions;
                reqParams.tf['alarm_actions'] = obj.data.AlarmActions;
                reqParams.cfn['InsufficientDataActions'] = obj.data.InsufficientDataActions;
                reqParams.tf['insufficient_data_actions'] = obj.data.InsufficientDataActions;
                reqParams.cfn['MetricName'] = obj.data.MetricName;
                reqParams.tf['metric_name'] = obj.data.MetricName;
                reqParams.cfn['Namespace'] = obj.data.Namespace;
                reqParams.tf['namespace'] = obj.data.Namespace;
                reqParams.cfn['Statistic'] = obj.data.Statistic;
                reqParams.tf['statistic'] = obj.data.Statistic;
                reqParams.cfn['ExtendedStatistic'] = obj.data.ExtendedStatistic;
                reqParams.tf['extended_statistic'] = obj.data.ExtendedStatistic;
                reqParams.cfn['Dimensions'] = obj.data.Dimensions;
                if (obj.data.Dimensions) {
                    reqParams.tf['dimensions'] = {};
                    obj.data.Dimensions.forEach(dimension => {
                        reqParams.tf['dimensions'][dimension.Name] = dimension.Value;
                    });
                }
                reqParams.cfn['Period'] = obj.data.Period;
                reqParams.tf['period'] = obj.data.Period;
                reqParams.cfn['Unit'] = obj.data.Unit;
                reqParams.tf['unit'] = obj.data.Unit;
                reqParams.cfn['EvaluationPeriods'] = obj.data.EvaluationPeriods;
                reqParams.tf['evaluation_periods'] = obj.data.EvaluationPeriods;
                reqParams.cfn['DatapointsToAlarm'] = obj.data.DatapointsToAlarm;
                reqParams.tf['datapoints_to_alarm'] = obj.data.DatapointsToAlarm;
                reqParams.cfn['Threshold'] = obj.data.Threshold;
                reqParams.tf['threshold'] = obj.data.Threshold;
                reqParams.cfn['ComparisonOperator'] = obj.data.ComparisonOperator;
                reqParams.tf['comparison_operator'] = obj.data.ComparisonOperator;
                reqParams.cfn['TreatMissingData'] = obj.data.TreatMissingData;
                reqParams.tf['treat_missing_data'] = obj.data.TreatMissingData;
                reqParams.cfn['EvaluateLowSampleCountPercentile'] = obj.data.EvaluateLowSampleCountPercentile;
                reqParams.tf['evaluate_low_sample_count_percentiles'] = obj.data.EvaluateLowSampleCountPercentile;
                reqParams.cfn['Metrics'] = obj.data.Metrics;
                if (obj.data.Metrics) {
                    reqParams.tf['metric_query'] = [];
                    obj.data.Metrics.forEach(metric => {
                        metricstat = null;
                        if (metric.MetricStat) {
                            metricstat = {
                                'metric_name': metric.MetricStat.Metric.MetricName,
                                'namespace': metric.MetricStat.Metric.Namespace,
                                'dimensions': metric.MetricStat.Metric.Dimensions,
                                'period': metric.MetricStat.Period,
                                'stat': metric.MetricStat.Stat,
                                'unit': metric.MetricStat.Unit
                            };
                        }
                        reqParams.tf['metric_query'].push({
                            'expression': metric.Expression,
                            'id': metric.Id,
                            'label': metric.Label,
                            'metric': metric.MetricStat,
                            'return_data': metric.ReturnData
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cloudwatch', obj.id),
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'type': 'AWS::CloudWatch::Alarm',
                    'terraformType': 'aws_cloudwatch_metric_alarm',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.launchtemplate") {
                reqParams.cfn['LaunchTemplateName'] = obj.data.LaunchTemplateName;
                reqParams.tf['name'] = obj.data.LaunchTemplateName;
                reqParams.cfn['LaunchTemplateData'] = {
                    'SecurityGroups': obj.data.LaunchTemplateData.SecurityGroups,
                    'TagSpecifications': obj.data.LaunchTemplateData.TagSpecifications,
                    'UserData': obj.data.LaunchTemplateData.UserData,
                    'InstanceInitiatedShutdownBehavior': obj.data.LaunchTemplateData.InstanceInitiatedShutdownBehavior,
                    'BlockDeviceMappings': obj.data.LaunchTemplateData.BlockDeviceMappings,
                    'IamInstanceProfile': obj.data.LaunchTemplateData.IamInstanceProfile,
                    'KernelId': obj.data.LaunchTemplateData.KernelId,
                    'SecurityGroupIds': obj.data.LaunchTemplateData.SecurityGroupIds,
                    'EbsOptimized': obj.data.LaunchTemplateData.EbsOptimized,
                    'KeyName': obj.data.LaunchTemplateData.KeyName,
                    'DisableApiTermination': obj.data.LaunchTemplateData.DisableApiTermination,
                    'ElasticGpuSpecifications': obj.data.LaunchTemplateData.ElasticGpuSpecifications,
                    'Placement': obj.data.LaunchTemplateData.Placement,
                    'InstanceMarketOptions': obj.data.LaunchTemplateData.InstanceMarketOptions,
                    'NetworkInterfaces': obj.data.LaunchTemplateData.NetworkInterfaces,
                    'ImageId': obj.data.LaunchTemplateData.ImageId,
                    'InstanceType': obj.data.LaunchTemplateData.InstanceType,
                    'RamDiskId': obj.data.LaunchTemplateData.RamDiskId,
                    'Monitoring': obj.data.LaunchTemplateData.Monitoring,
                    'CreditSpecification': obj.data.LaunchTemplateData.CreditSpecification
                };
                reqParams.tf['security_group_names'] = obj.data.LaunchTemplateData.SecurityGroups;
                if (obj.data.LaunchTemplateData.TagSpecifications) {
                    reqParams.tf['tag_specifications'] = [];
                    obj.data.LaunchTemplateData.TagSpecifications.forEach(tagspecification => {
                        var tags = {};
                        tagspecification.Tags.forEach(tag => {
                            tags[tag.Key] = tag.Value;
                        });
                        reqParams.tf['tag_specifications'].push({
                            'resource_type': tagspecification.ResourceType,
                            'tags': tags
                        });
                    });
                }
                reqParams.tf['user_data'] = obj.data.LaunchTemplateData.UserData;
                reqParams.tf['instance_initiated_shutdown_behavior'] = obj.data.LaunchTemplateData.InstanceInitiatedShutdownBehavior;
                //reqParams.tf['block_device_mappings'] = obj.data.LaunchTemplateData.BlockDeviceMappings; TODO
                if (obj.data.LaunchTemplateData.IamInstanceProfile) {
                    reqParams.tf['iam_instance_profile'] = {
                        'arn': obj.data.LaunchTemplateData.IamInstanceProfile.Arn,
                        'name': obj.data.LaunchTemplateData.IamInstanceProfile.Name
                    };
                }
                reqParams.tf['kernel_id'] = obj.data.LaunchTemplateData.KernelId;
                reqParams.tf['vpc_security_group_ids'] = obj.data.LaunchTemplateData.SecurityGroupIds;
                reqParams.tf['ebs_optimized'] = obj.data.LaunchTemplateData.EbsOptimized;
                reqParams.tf['key_name'] = obj.data.LaunchTemplateData.KeyName;
                reqParams.tf['disable_api_termination'] = obj.data.LaunchTemplateData.DisableApiTermination;
                if (obj.data.LaunchTemplateData.ElasticGpuSpecifications) {
                    reqParams.tf['elastic_gpu_specifications'] = [];
                    obj.data.LaunchTemplateData.ElasticGpuSpecifications.forEach(elasticgpuspecification => {
                        reqParams.tf['elastic_gpu_specifications'].push({
                            'type': elasticgpuspecification.Type
                        });
                    });
                }
                if (obj.data.LaunchTemplateData.Placement) {
                    reqParams.tf['placement'] = {
                        'affinity': obj.data.LaunchTemplateData.Placement.Affinity,
                        'availability_zone': obj.data.LaunchTemplateData.Placement.AvailabilityZone,
                        'group_name': obj.data.LaunchTemplateData.Placement.GroupName,
                        'host_id': obj.data.LaunchTemplateData.Placement.HostId,
                        'tenancy': obj.data.LaunchTemplateData.Placement.Tenancy
                    };
                }
                if (obj.data.LaunchTemplateData.InstanceMarketOptions) {
                    var spotoptions = null;
                    if (obj.data.LaunchTemplateData.InstanceMarketOptions.SpotOptions) {
                        spotoptions = {
                            'block_duration_minutes': obj.data.LaunchTemplateData.InstanceMarketOptions.SpotOptions.BlockDurationMinutes,
                            'instance_interruption_behavior': obj.data.LaunchTemplateData.InstanceMarketOptions.SpotOptions.InstanceInterruptionBehavior,
                            'max_price': obj.data.LaunchTemplateData.InstanceMarketOptions.SpotOptions.MaxPrice,
                            'spot_instance_type': obj.data.LaunchTemplateData.InstanceMarketOptions.SpotOptions.SpotInstanceType,
                            'valid_until': obj.data.LaunchTemplateData.InstanceMarketOptions.SpotOptions.ValidUntil // TODO: Parse Date
                        };
                    }
                    reqParams.tf['instance_market_options'] = {
                        'market_type': obj.data.LaunchTemplateData.InstanceMarketOptions.MarketType,
                        'spot_options': spotoptions
                    };
                }
                if (obj.data.LaunchTemplateData.NetworkInterfaces) {
                    reqParams.tf['network_interfaces'] = [];
                    obj.data.LaunchTemplateData.NetworkInterfaces.forEach(networkinterface => {
                        reqParams.tf['network_interfaces'].push({
                            'associate_public_ip_address': networkinterface.AssociatePublicIpAddress,
                            'delete_on_termination': networkinterface.DeleteOnTermination,
                            'description': networkinterface.Description,
                            'device_index': networkinterface.DeviceIndex,
                            'ipv6_addresses': networkinterface.Ipv6Addresses ? networkinterface.Ipv6Addresses.map(ipv6address => {return ipv6address.Ipv6Address}) : null,
                            'ipv6_address_count': networkinterface.Ipv6AddressCount,
                            'network_interface_id': networkinterface.NetworkInterfaceId,
                            'private_ip_address': networkinterface.PrivateIpAddress,
                            'ipv4_address_count': networkinterface.SecondaryPrivateIpAddressCount,
                            'ipv4_addresses': networkinterface.PrivateIpAddresses,
                            'security_groups': networkinterface.Groups,
                            'subnet_id': networkinterface.SubnetId
                        });
                    });
                }
                reqParams.tf['image_id'] = obj.data.LaunchTemplateData.ImageId;
                reqParams.tf['instance_type'] = obj.data.LaunchTemplateData.InstanceType;
                reqParams.tf['ram_disk_id'] = obj.data.LaunchTemplateData.RamDiskId;
                if (obj.data.LaunchTemplateData.Monitoring) {
                    reqParams.tf['monitoring'] = {
                        'enabled': obj.data.LaunchTemplateData.Monitoring.Enabled
                    };
                }
                if (obj.data.LaunchTemplateData.CreditSpecification) {
                    reqParams.tf['credit_specification'] = {
                        '': obj.data.LaunchTemplateData.CreditSpecification.CpuCredits
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::LaunchTemplate',
                    'terraformType': 'aws_launch_template',
                    'options': reqParams
                });
            } else if (obj.type == "cloud9.environment") {
                if (obj.data.type == "ec2") {
                    reqParams.cfn['Name'] = obj.data.name;
                    reqParams.tf['name'] = obj.data.name;
                    reqParams.cfn['Description'] = obj.data.description;
                    reqParams.tf['description'] = obj.data.description;
                    reqParams.cfn['OwnerArn'] = obj.data.ownerArn;
                    reqParams.tf['owner_arn'] = obj.data.ownerArn;

                    /*
                    TODO:
                    Repositories: 
                        - Repository
                    AutomaticStopTimeMinutes: Integer
                    InstanceType: String
                    SubnetId: String
                    */

                    tracked_resources.push({
                    'obj': obj,
                        'logicalId': getResourceName('cloud9', obj.id),
                        'region': obj.region,
                        'service': 'cloud9',
                        'type': 'AWS::Cloud9::EnvironmentEC2',
                        'terraformType': 'aws_cloud9_environment_ec2',
                        'options': reqParams
                    });
                }
            } else if (obj.type == "apigateway.restapi") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.tf['name'] = obj.data.name;
                reqParams.cfn['MinimumCompressionSize'] = obj.data.minimumCompressionSize;
                reqParams.tf['minimum_compression_size'] = obj.data.minimumCompressionSize;
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.tf['description'] = obj.data.description;
                reqParams.cfn['ApiKeySourceType'] = obj.data.apiKeySource;
                reqParams.tf['api_key_source'] = obj.data.apiKeySource;
                reqParams.cfn['Policy'] = obj.data.policy;
                reqParams.tf['policy'] = obj.data.policy;
                reqParams.cfn['BinaryMediaTypes'] = obj.data.binaryMediaTypes;
                reqParams.tf['binary_media_types'] = obj.data.binaryMediaTypes;
                if (obj.data.endpointConfiguration) {
                    reqParams.cfn['EndpointConfiguration'] = {
                        'Types': obj.data.endpointConfiguration.types
                    };
                    reqParams.tf['endpoint_configuration'] = {
                        'types': obj.data.endpointConfiguration.types
                    };
                }

                /*
                TODO:
                Body: JSON object
                BodyS3Location:
                    S3Location
                CloneFrom: String
                FailOnWarnings: Boolean
                Parameters:
                    String: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::RestApi',
                    'terraformType': 'aws_api_gateway_rest_api',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.id
                    }
                });
            } else if (obj.type == "apigateway.stage") {
                reqParams.cfn['StageName'] = obj.data.stageName;
                reqParams.tf['stage_name'] = obj.data.stageName;
                reqParams.cfn['DeploymentId'] = obj.data.deploymentId;
                reqParams.tf['deployment_id'] = obj.data.deploymentId;
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.tf['rest_api_id'] = obj.data.restApiId;
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.tf['description'] = obj.data.description;
                reqParams.cfn['CacheClusterEnabled'] = obj.data.cacheClusterEnabled;
                reqParams.tf['cache_cluster_enabled'] = obj.data.cacheClusterEnabled;
                reqParams.cfn['CacheClusterSize'] = obj.data.cacheClusterSize;
                reqParams.tf['cache_cluster_size'] = obj.data.cacheClusterSize;
                if (obj.data.methodSettings) {
                    reqParams.cfn['MethodSettings'] = [];
                    Object.keys(obj.data.methodSettings).forEach(fullpath => {
                        var methodSetting = obj.data.methodSettings[fullpath];
                        var httpMethod = fullpath.split("/").pop();
                        var resourcePath = fullpath.split("/").slice(0, -1).join("/");

                        reqParams.cfn['MethodSettings'].push({
                            'CacheDataEncrypted': methodSetting.cacheDataEncrypted,
                            'CacheTtlInSeconds': methodSetting.cacheTtlInSeconds,
                            'CachingEnabled': methodSetting.cachingEnabled,
                            'DataTraceEnabled': methodSetting.dataTraceEnabled,
                            'HttpMethod': httpMethod,
                            'LoggingLevel': methodSetting.loggingLevel,
                            'MetricsEnabled': methodSetting.metricsEnabled,
                            'ResourcePath': resourcePath,
                            'ThrottlingBurstLimit': methodSetting.throttlingBurstLimit,
                            'ThrottlingRateLimit': methodSetting.throttlingRateLimit
                        });
                    });
                }
                reqParams.cfn['Variables'] = obj.data.variables;
                reqParams.tf['variables'] = obj.data.variables;
                reqParams.cfn['DocumentationVersion'] = obj.data.documentationVersion;
                reqParams.tf['documentation_version'] = obj.data.documentationVersion;
                if (obj.data.accessLogSettings) {
                    reqParams.cfn['AccessLogSetting'] = {
                        'Format': obj.data.format,
                        'DestinationArn': obj.data.destinationArn
                    };
                    reqParams.tf['access_log_settings'] = {
                        'format': obj.data.format,
                        'destination_arn': obj.data.destinationArn
                    };
                }
                if (obj.data.canarySettings) {
                    reqParams.cfn['CanarySetting'] = {
                        'DeploymentId': obj.data.canarySettings.deploymentId,
                        'PercentTraffic': obj.data.canarySettings.percentTraffic,
                        'StageVariableOverrides': obj.data.canarySettings.stageVariableOverrides,
                        'UseStageCache': obj.data.canarySettings.useStageCache
                    };
                }
                reqParams.cfn['TracingEnabled'] = obj.data.tracingEnabled;
                reqParams.tf['xray_tracing_enabled'] = obj.data.tracingEnabled;
                if (obj.data.tags) {
                    reqParams.cfn['Tags'] = [];
                    reqParams.tf['Tags'] = {};
                    Object.keys(obj.data.tags).forEach(tagKey => {
                        reqParams.cfn['Tags'].push({
                            'Key': tagKey,
                            'Value': obj.data.tags[tagKey]
                        });
                    });
                }
                reqParams.cfn['ClientCertificateId'] = obj.data.clientCertificateId;
                reqParams.tf['client_certificate_id'] = obj.data.clientCertificateId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::Stage',
                    'terraformType': 'aws_api_gateway_stage',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.deployment") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.tf['rest_api_id'] = obj.data.restApiId;
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.tf['description'] = obj.data.description;

                /*
                TODO:
                DeploymentCanarySettings: DeploymentCanarySettings
                StageDescription: StageDescription
                StageName: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::Deployment',
                    'terraformType': 'aws_api_gateway_deployment',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.resource") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.tf['rest_api_id'] = obj.data.restApiId;
                reqParams.cfn['PathPart'] = obj.data.pathPart;
                reqParams.tf['path_part'] = obj.data.pathPart;
                reqParams.cfn['ParentId'] = obj.data.parentId;
                reqParams.tf['parent_id'] = obj.data.parentId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::Resource',
                    'terraformType': 'aws_api_gateway_resource',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.id
                    }
                });
            } else if (obj.type == "apigateway.model") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.tf['rest_api_id'] = obj.data.restApiId;
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.tf['name'] = obj.data.name;
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.tf['description'] = obj.data.description;
                reqParams.cfn['Schema'] = obj.data.schema;
                reqParams.tf['schema'] = obj.data.schema;
                reqParams.cfn['ContentType'] = obj.data.contentType;
                reqParams.tf['content_type'] = obj.data.contentType;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::Model',
                    'terraformType': 'aws_api_gateway_model',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.authorizer") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.tf['rest_api_id'] = obj.data.restApiId;
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.tf['name'] = obj.data.name;
                reqParams.cfn['Type'] = obj.data.type;
                reqParams.tf['type'] = obj.data.type;
                reqParams.cfn['ProviderARNs'] = obj.data.providerARNs;
                reqParams.tf['provider_arns'] = obj.data.providerARNs;
                reqParams.cfn['AuthType'] = obj.data.authType;
                reqParams.tf['AuthType'] = obj.data.authType;
                reqParams.cfn['AuthorizerUri'] = obj.data.authorizerUri;
                reqParams.tf['authorizer_uri'] = obj.data.authorizerUri;
                reqParams.cfn['AuthorizerCredentials'] = obj.data.authorizerCredentials;
                reqParams.tf['authorizer_credentials'] = obj.data.authorizerCredentials;
                reqParams.cfn['IdentitySource'] = obj.data.identitySource;
                reqParams.tf['identity_source'] = obj.data.identitySource;
                reqParams.cfn['IdentityValidationExpression'] = obj.data.identityValidationExpression;
                reqParams.tf['identity_validation_expression'] = obj.data.identityValidationExpression;
                reqParams.cfn['AuthorizerResultTtlInSeconds'] = obj.data.authorizerResultTtlInSeconds;
                reqParams.tf['authorizer_result_ttl_in_seconds'] = obj.data.authorizerResultTtlInSeconds;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::Authorizer',
                    'terraformType': 'aws_api_gateway_authorizer',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.method") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.tf['rest_api_id'] = obj.data.restApiId;
                reqParams.cfn['ResourceId'] = obj.data.resourceId;
                reqParams.tf['resource_id'] = obj.data.resourceId;
                reqParams.cfn['HttpMethod'] = obj.data.httpMethod;
                reqParams.tf['http_method'] = obj.data.httpMethod;
                reqParams.cfn['AuthorizationType'] = obj.data.authorizationType;
                reqParams.tf['authorization'] = obj.data.authorizationType;
                reqParams.cfn['AuthorizerId'] = obj.data.authorizerId;
                reqParams.tf['authorizer_id'] = obj.data.authorizerId;
                reqParams.cfn['ApiKeyRequired'] = obj.data.apiKeyRequired;
                reqParams.tf['api_key_required'] = obj.data.apiKeyRequired;
                reqParams.cfn['RequestValidatorId'] = obj.data.requestValidatorId;
                reqParams.tf['request_validator_id'] = obj.data.requestValidatorId;
                reqParams.cfn['OperationName'] = obj.data.operationName;
                reqParams.cfn['RequestParameters'] = obj.data.requestParameters;
                reqParams.tf['request_parameters'] = obj.data.requestParameters;
                reqParams.cfn['RequestModels'] = obj.data.requestModels;
                reqParams.tf['request_models'] = obj.data.requestModels;
                if (obj.data.methodResponses) {
                    reqParams.cfn['MethodResponses'] = [];
                    Object.values(obj.data.methodResponses).forEach(methodResponse => {
                        reqParams.cfn['MethodResponses'].push({
                            'ResponseModels': methodResponse.responseModels,
                            'ResponseParameters': methodResponse.responseParameters,
                            'StatusCode': methodResponse.statusCode
                        });
                    });
                }
                if (obj.data.methodIntegration) {
                    var integrationResponses = null;
                    if (obj.data.methodIntegration.integrationResponses) {
                        integrationResponses = [];
                        Object.values(obj.data.methodIntegration.integrationResponses).forEach(integrationResponse => {
                            integrationResponses.push({
                                'ContentHandling': integrationResponse.contentHandling,
                                'ResponseParameters': integrationResponse.responseParameters,
                                'ResponseTemplates': integrationResponse.responseTemplates,
                                'SelectionPattern': integrationResponse.selectionPattern,
                                'StatusCode': integrationResponse.statusCode
                            });
                        });
                    }
                    reqParams.cfn['Integration'] = {
                        'CacheKeyParameters': obj.data.methodIntegration.cacheKeyParameters,
                        'CacheNamespace': obj.data.methodIntegration.cacheNamespace,
                        'ConnectionId': obj.data.methodIntegration.connectionId,
                        'ConnectionType': obj.data.methodIntegration.connectionType,
                        'ContentHandling': obj.data.methodIntegration.contentHandling,
                        'Credentials': obj.data.methodIntegration.credentials,
                        'IntegrationHttpMethod': obj.data.methodIntegration.httpMethod,
                        'IntegrationResponses': integrationResponses,
                        'PassthroughBehavior': obj.data.methodIntegration.passthroughBehavior,
                        'RequestParameters': obj.data.methodIntegration.requestParameters,
                        'RequestTemplates': obj.data.methodIntegration.requestTemplates,
                        'TimeoutInMillis': obj.data.methodIntegration.timeoutInMillis,
                        'Type': obj.data.methodIntegration.type,
                        'Uri': obj.data.methodIntegration.uri
                    }                
                }
                reqParams.cfn['AuthorizationScopes'] = obj.data.authorizationScopes;
                reqParams.tf['authorization_scopes'] = obj.data.authorizationScopes;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::Method',
                    'terraformType': 'aws_api_gateway_method',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.gatewayresponse") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.tf['rest_api_id'] = obj.data.restApiId;
                reqParams.cfn['ResponseType'] = obj.data.responseType;
                reqParams.tf['response_type'] = obj.data.responseType;
                reqParams.cfn['StatusCode'] = obj.data.statusCode;
                reqParams.tf['status_code'] = obj.data.statusCode;
                reqParams.cfn['ResponseParameters'] = obj.data.responseParameters;
                reqParams.tf['response_parameters'] = obj.data.responseParameters;
                reqParams.cfn['ResponseTemplates'] = obj.data.responseTemplates;
                reqParams.tf['response_templates'] = obj.data.responseTemplates;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::GatewayResponse',
                    'terraformType': 'aws_api_gateway_gateway_response',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.documentationversion") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.tf['rest_api_id'] = obj.data.restApiId;
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.tf['description'] = obj.data.description;
                reqParams.cfn['DocumentationVersion'] = obj.data.version;
                reqParams.tf['version'] = obj.data.version;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::DocumentationVersion',
                    'terraformType': 'aws_api_gateway_documentation_version',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.documentationpart") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.tf['rest_api_id'] = obj.data.restApiId;
                if (obj.data.location) {
                    reqParams.cfn['Location'] = {
                        'method': obj.data.location.method,
                        'name': obj.data.location.name,
                        'path': obj.data.location.path,
                        'status_code': obj.data.location.statusCode,
                        'type': obj.data.location.type
                    };
                    reqParams.tf['location'] = {
                        'Method': obj.data.location.method,
                        'Name': obj.data.location.name,
                        'Path': obj.data.location.path,
                        'StatusCode': obj.data.location.statusCode,
                        'Type': obj.data.location.type
                    };
                }
                reqParams.cfn['Properties'] = obj.data.properties;
                reqParams.tf['properties'] = obj.data.properties;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::DocumentationPart',
                    'terraformType': 'aws_api_gateway_documentation_part',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.requestvalidator") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.tf['rest_api_id'] = obj.data.restApiId;
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.tf['name'] = obj.data.name;
                reqParams.cfn['ValidateRequestBody'] = obj.data.validateRequestBody;
                reqParams.tf['validate_request_body'] = obj.data.validateRequestBody;
                reqParams.cfn['ValidateRequestParameters'] = obj.data.validateRequestParameters;
                reqParams.tf['validate_request_parameters'] = obj.data.validateRequestParameters;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::RequestValidator',
                    'terraformType': 'aws_api_gateway_request_validator',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.account") {
                reqParams.cfn['CloudWatchRoleArn'] = obj.data.cloudwatchRoleArn;
                reqParams.tf['cloudwatch_role_arn'] = obj.data.cloudwatchRoleArn;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::Account',
                    'terraformType': 'aws_api_gateway_account',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.apikey") {
                reqParams.cfn['CustomerId'] = obj.data.customerId;
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.cfn['Enabled'] = obj.data.enabled;
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.cfn['Value'] = obj.data.value;

                /*
                TODO:
                GenerateDistinctId: Boolean
                StageKeys:
                - StageKey
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::ApiKey',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.clientcertificate") {
                reqParams.cfn['Description'] = obj.data.description;
               
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::ClientCertificate',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.domainname") {
                reqParams.cfn['CertificateArn'] = obj.data.certificateArn;
                reqParams.tf['certificate_arn'] = obj.data.certificateArn;
                reqParams.cfn['DomainName'] = obj.data.domainName;
                reqParams.tf['domain_name'] = obj.data.domainName;
                if (obj.data.endpointConfiguration) {
                    reqParams.cfn['EndpointConfiguration'] = {
                        'Types': obj.data.endpointConfiguration.types
                    };
                    reqParams.tf['endpoint_configuration'] = {
                        'types': obj.data.endpointConfiguration.types
                    };
                }
                reqParams.cfn['RegionalCertificateArn'] = obj.data.regionalCertificateArn;
                reqParams.tf['regional_certificate_arn'] = obj.data.regionalCertificateArn;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::DomainName',
                    'terraformType': 'aws_api_gateway_domain_name',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.basepathmapping") {
                reqParams.cfn['BasePath'] = obj.data.basePath;
                reqParams.tf['base_path'] = obj.data.basePath;
                reqParams.cfn['DomainName'] = obj.data.domainName;
                reqParams.tf['domain_name'] = obj.data.domainName;
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.tf['api_id'] = obj.data.restApiId;
                reqParams.cfn['Stage'] = obj.data.stage;
                reqParams.tf['stage_name'] = obj.data.stage;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::BasePathMapping',
                    'terraformType': 'aws_api_gateway_base_path_mapping',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.usageplan") {
                reqParams.cfn['UsagePlanName'] = obj.data.name;
                reqParams.cfn['Description'] = obj.data.description;
                if (obj.data.apiStages) {
                    reqParams.cfn['ApiStages'] = [];
                    obj.data.apiStages.forEach(apistage => {
                        var throttle = null;

                        if (apistage.throttle) {
                            throttle = {};
                            Object.keys(apistage.throttle).forEach(key => {
                                throttle[key] = {
                                    'BurstLimit': apistage.throttle[key].burstLimit,
                                    'RateLimit': apistage.throttle[key].rateLimit
                                };
                            });
                        }

                        reqParams.cfn['ApiStages'].push({
                            'ApiId': apistage.apiId,
                            'Stage': apistage.stage,
                            'Throttle': throttle
                        });
                    });
                }
                if (obj.data.throttle) {
                    reqParams.cfn['Throttle'] = {
                        'BurstLimit': obj.data.throttle.burstLimit,
                        'RateLimit': obj.data.throttle.rateLimit
                    };
                }
                if (obj.data.quota) {
                    reqParams.cfn['Quota'] = {
                        'Limit': obj.data.quota.limit,
                        'Offset': obj.data.quota.offset,
                        'Period': obj.data.quota.period
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::UsagePlan',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.usageplankey") {
                reqParams.cfn['KeyId'] = obj.data.id;
                reqParams.tf['key_id'] = obj.data.id;
                reqParams.cfn['KeyType'] = obj.data.type;
                reqParams.tf['key_type'] = obj.data.type;
                reqParams.cfn['UsagePlanId'] = obj.data.value; // TODO: ???
                reqParams.tf['usage_plan_id'] = obj.data.value;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::UsagePlanKey',
                    'terraformType': 'aws_api_gateway_usage_plan_key',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.vpclink") {
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.tf['description'] = obj.data.description;
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.tf['name'] = obj.data.name;
                reqParams.cfn['TargetArns'] = obj.data.targetArns;
                reqParams.tf['target_arns'] = obj.data.targetArns;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::VpcLink',
                    'terraformType': 'aws_api_gateway_vpc_link',
                    'options': reqParams
                });
            } else if (obj.type == "apigatewayv2.api") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.cfn['ApiKeySelectionExpression'] = obj.data.ApiKeySelectionExpression;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['DisableSchemaValidation'] = obj.data.DisableSchemaValidation;
                reqParams.cfn['ProtocolType'] = obj.data.ProtocolType;
                reqParams.cfn['RouteSelectionExpression'] = obj.data.RouteSelectionExpression;
                reqParams.cfn['Version'] = obj.data.Version;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigatewayv2', obj.id),
                    'region': obj.region,
                    'service': 'apigatewayv2',
                    'type': 'AWS::ApiGatewayV2::Api',
                    'options': reqParams
                });
            } else if (obj.type == "apigatewayv2.stage") {
                reqParams.cfn['StageName'] = obj.data.StageName;
                reqParams.cfn['StageVariables'] = obj.data.StageVariables;
                reqParams.cfn['ApiId'] = obj.data.ApiId;
                reqParams.cfn['ClientCertificateId'] = obj.data.ClientCertificateId;
                reqParams.cfn['DeploymentId'] = obj.data.DeploymentId;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['RouteSettings'] = obj.data.RouteSettings;
                reqParams.cfn['DefaultRouteSettings'] = obj.data.DefaultRouteSettings;
                reqParams.cfn['AccessLogSettings'] = obj.data.AccessLogSettings;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigatewayv2', obj.id),
                    'region': obj.region,
                    'service': 'apigatewayv2',
                    'type': 'AWS::ApiGatewayV2::Stage',
                    'options': reqParams
                });
            } else if (obj.type == "apigatewayv2.deployment") {
                reqParams.cfn['ApiId'] = obj.data.ApiId;
                reqParams.cfn['Description'] = obj.data.Description;

                /*
                TODO:
                StageName: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigatewayv2', obj.id),
                    'region': obj.region,
                    'service': 'apigatewayv2',
                    'type': 'AWS::ApiGatewayV2::Deployment',
                    'options': reqParams
                });
            } else if (obj.type == "apigatewayv2.model") {
                reqParams.cfn['ApiId'] = obj.data.ApiId;
                reqParams.cfn['ContentType'] = obj.data.ContentType;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Schema'] = obj.data.Schema;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigatewayv2', obj.id),
                    'region': obj.region,
                    'service': 'apigatewayv2',
                    'type': 'AWS::ApiGatewayV2::Model',
                    'options': reqParams
                });
            } else if (obj.type == "apigatewayv2.authorizer") {
                reqParams.cfn['ApiId'] = obj.data.ApiId;
                reqParams.cfn['AuthorizerCredentialsArn'] = obj.data.AuthorizerCredentialsArn;
                reqParams.cfn['AuthorizerResultTtlInSeconds'] = obj.data.AuthorizerResultTtlInSeconds;
                reqParams.cfn['AuthorizerType'] = obj.data.AuthorizerType;
                reqParams.cfn['AuthorizerUri'] = obj.data.AuthorizerUri;
                reqParams.cfn['IdentitySource'] = obj.data.IdentitySource;
                reqParams.cfn['IdentityValidationExpression'] = obj.data.IdentityValidationExpression;
                reqParams.cfn['Name'] = obj.data.Name;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigatewayv2', obj.id),
                    'region': obj.region,
                    'service': 'apigatewayv2',
                    'type': 'AWS::ApiGatewayV2::Authorizer',
                    'options': reqParams
                });
            } else if (obj.type == "apigatewayv2.routeresponse") {
                reqParams.cfn['ApiId'] = obj.data.ApiId;
                reqParams.cfn['ModelSelectionExpression'] = obj.data.ModelSelectionExpression;
                reqParams.cfn['ResponseModels'] = obj.data.ResponseModels;
                reqParams.cfn['ResponseParameters'] = obj.data.ResponseParameters;
                reqParams.cfn['RouteResponseKey'] = obj.data.RouteResponseKey;
                reqParams.cfn['RouteId'] = obj.data.RouteId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigatewayv2', obj.id),
                    'region': obj.region,
                    'service': 'apigatewayv2',
                    'type': 'AWS::ApiGatewayV2::RouteResponse',
                    'options': reqParams
                });
            } else if (obj.type == "apigatewayv2.route") {
                reqParams.cfn['ApiId'] = obj.data.ApiId;
                reqParams.cfn['ApiKeyRequired'] = obj.data.ApiKeyRequired;
                reqParams.cfn['AuthorizationScopes'] = obj.data.AuthorizationScopes;
                reqParams.cfn['AuthorizationType'] = obj.data.AuthorizationType;
                reqParams.cfn['AuthorizerId'] = obj.data.AuthorizerId;
                reqParams.cfn['ModelSelectionExpression'] = obj.data.ModelSelectionExpression;
                reqParams.cfn['OperationName'] = obj.data.OperationName;
                reqParams.cfn['RequestModels'] = obj.data.RequestModels;
                reqParams.cfn['RequestParameters'] = obj.data.RequestParameters;
                reqParams.cfn['RouteKey'] = obj.data.RouteKey;
                reqParams.cfn['RouteResponseSelectionExpression'] = obj.data.RouteResponseSelectionExpression;
                reqParams.cfn['Target'] = obj.data.Target;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigatewayv2', obj.id),
                    'region': obj.region,
                    'service': 'apigatewayv2',
                    'type': 'AWS::ApiGatewayV2::Route',
                    'options': reqParams
                });
            } else if (obj.type == "apigatewayv2.integrationresponse") {
                reqParams.cfn['ApiId'] = obj.data.ApiId;
                reqParams.cfn['IntegrationId'] = obj.data.IntegrationId;
                reqParams.cfn['ContentHandlingStrategy'] = obj.data.ContentHandlingStrategy;
                reqParams.cfn['IntegrationResponseKey'] = obj.data.IntegrationResponseKey;
                reqParams.cfn['ResponseParameters'] = obj.data.ResponseParameters;
                reqParams.cfn['ResponseTemplates'] = obj.data.ResponseTemplates;
                reqParams.cfn['TemplateSelectionExpression'] = obj.data.TemplateSelectionExpression;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigatewayv2', obj.id),
                    'region': obj.region,
                    'service': 'apigatewayv2',
                    'type': 'AWS::ApiGatewayV2::IntegrationResponse',
                    'options': reqParams
                });
            } else if (obj.type == "apigatewayv2.integration") {
                reqParams.cfn['ApiId'] = obj.data.ApiId;
                reqParams.cfn['ConnectionType'] = obj.data.ConnectionType;
                reqParams.cfn['ContentHandlingStrategy'] = obj.data.ContentHandlingStrategy;
                reqParams.cfn['CredentialsArn'] = obj.data.CredentialsArn;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['IntegrationMethod'] = obj.data.IntegrationMethod;
                reqParams.cfn['IntegrationType'] = obj.data.IntegrationType;
                reqParams.cfn['IntegrationUri'] = obj.data.IntegrationUri;
                reqParams.cfn['PassthroughBehavior'] = obj.data.PassthroughBehavior;
                reqParams.cfn['RequestParameters'] = obj.data.RequestParameters;
                reqParams.cfn['RequestTemplates'] = obj.data.RequestTemplates;
                reqParams.cfn['TemplateSelectionExpression'] = obj.data.TemplateSelectionExpression;
                reqParams.cfn['TimeoutInMillis'] = obj.data.TimeoutInMillis;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigatewayv2', obj.id),
                    'region': obj.region,
                    'service': 'apigatewayv2',
                    'type': 'AWS::ApiGatewayV2::Integration',
                    'options': reqParams
                });
            } else if (obj.type == "batch.computeenvironment") {
                reqParams.cfn['ComputeEnvironmentName'] = obj.data.computeEnvironmentName;
                reqParams.tf['compute_environment_name'] = obj.data.computeEnvironmentName;
                reqParams.cfn['Type'] = obj.data.type;
                reqParams.tf['type'] = obj.data.type;
                reqParams.cfn['State'] = obj.data.state;
                reqParams.tf['state'] = obj.data.state;
                reqParams.cfn['ServiceRole'] = obj.data.serviceRole;
                reqParams.tf['service_role'] = obj.data.serviceRole;
                if (obj.data.computeResources) {
                    reqParams.cfn['ComputeResources'] = [];
                    reqParams.tf['compute_resources'] = [];

                    var launchTemplate = null;
                    var tfLaunchTemplate = null;
                    if (computeResource.launchTemplate) {
                        launchTemplate = {
                            'LaunchTemplateId': computeResource.launchTemplate.launchTemplateId,
                            'LaunchTemplateName': computeResource.launchTemplate.launchTemplateName,
                            'Version': computeResource.launchTemplate.version
                        };
                        tfLaunchTemplate = {
                            'launch_template_id': computeResource.launchTemplate.launchTemplateId,
                            'launch_template_name': computeResource.launchTemplate.launchTemplateName,
                            'version': computeResource.launchTemplate.version
                        };
                    }

                    obj.data.computeResources.forEach(computeResource => {
                        reqParams.cfn['ComputeResources'].push({
                            'Type': computeResource.type,
                            'MinvCpus': computeResource.minvCpus,
                            'MaxvCpus': computeResource.maxvCpus,
                            'DesiredvCpus': computeResource.desiredvCpus,
                            'InstanceTypes': computeResource.instanceTypes,
                            'ImageId': computeResource.imageId,
                            'Subnets': computeResource.subnets,
                            'SecurityGroupIds': computeResource.securityGroupIds,
                            'Ec2KeyPair': computeResource.ec2KeyPair,
                            'InstanceRole': computeResource.instanceRole,
                            'Tags': computeResource.tags,
                            'PlacementGroup': computeResource.placementGroup,
                            'BidPercentage': computeResource.bidPercentage,
                            'SpotIamFleetRole': computeResource.spotIamFleetRole,
                            'LaunchTemplate': launchTemplate
                        });
                        reqParams.tf['compute_resources'].push({
                            'type': computeResource.type,
                            'min_vcpus': computeResource.minvCpus,
                            'max_vcpus': computeResource.maxvCpus,
                            'desired_vcpus': computeResource.desiredvCpus,
                            'instance_type': computeResource.instanceTypes,
                            'image_id': computeResource.imageId,
                            'subnets': computeResource.subnets,
                            'security_group_ids': computeResource.securityGroupIds,
                            'ec2_key_pair': computeResource.ec2KeyPair,
                            'instance_role': computeResource.instanceRole,
                            'tags': computeResource.tags,
                            'bid_percentage': computeResource.bidPercentage,
                            'spot_iam_fleet_role': computeResource.spotIamFleetRole,
                            'launch_template': launchTemplate
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('batch', obj.id),
                    'region': obj.region,
                    'service': 'batch',
                    'type': 'AWS::Batch::ComputeEnvironment',
                    'terraformType': 'aws_batch_compute_environment',
                    'options': reqParams
                });
            } else if (obj.type == "batch.jobqueue") {
                reqParams.cfn['ComputeEnvironmentOrder'] = [];
                reqParams.tf['compute_environments'] = [];
                obj.data.computeEnvironmentOrder.forEach(computeEnvironmentOrder => {
                    reqParams.cfn['ComputeEnvironmentOrder'].push({
                        'ComputeEnvironment': computeEnvironmentOrder.computeEnvironment,
                        'Order': computeEnvironmentOrder.order
                    });
                    reqParams.tf['compute_environments'].push(computeEnvironmentOrder.computeEnvironment);
                });
                reqParams.cfn['Priority'] = obj.data.priority;
                reqParams.tf['priority'] = obj.data.priority;
                reqParams.cfn['State'] = obj.data.state;
                reqParams.tf['state'] = obj.data.state;
                reqParams.cfn['JobQueueName'] = obj.data.jobQueueName;
                reqParams.tf['name'] = obj.data.jobQueueName;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('batch', obj.id),
                    'region': obj.region,
                    'service': 'batch',
                    'type': 'AWS::Batch::JobQueue',
                    'terraformType': 'aws_batch_job_queue',
                    'options': reqParams
                });
            } else if (obj.type == "batch.jobdefinition") {
                reqParams.cfn['JobDefinitionName'] = obj.data.jobDefinitionName;
                reqParams.tf['name'] = obj.data.jobDefinitionName;
                reqParams.cfn['Type'] = obj.data.type;
                reqParams.tf['type'] = obj.data.type;
                reqParams.cfn['Parameters'] = obj.data.parameters;
                reqParams.tf['parameters'] = obj.data.parameters;
                if (obj.data.retryStrategy) {
                    reqParams.cfn['RetryStrategy'] = {
                        'Attempts': obj.data.retryStrategy.attempts
                    };
                    reqParams.tf['retry_strategy'] = {
                        'attempts': obj.data.retryStrategy.attempts
                    };
                }
                if (obj.data.timeout) {
                    reqParams.cfn['Timeout'] = {
                        'AttemptDurationSeconds': obj.data.timeout.attemptDurationSeconds
                    };
                    reqParams.tf['timeout'] = {
                        'attempt_duration_seconds': obj.data.timeout.attemptDurationSeconds
                    };
                }
                if (obj.data.containerProperties) {
                    var volumes = null;
                    if (obj.data.containerProperties.volumes) {
                        volumes = [];
                        obj.data.containerProperties.volumes.forEach(volume => {
                            var host = null;
                            if (volume.host) {
                                host = {
                                    'SourcePath': volume.host.sourcePath
                                };
                            }
                            volumes.push({
                                'Host': host,
                                'Name': volume.name
                            });
                        });
                    }

                    var environment = null;
                    if (obj.data.containerProperties.environment) {
                        environment = [];
                        obj.data.containerProperties.environment.forEach(environmentItem => {
                            environment.push({
                                'Name': environmentItem.name,
                                'Value': environmentItem.value
                            });
                        });
                    }

                    var mountPoints = null;
                    if (obj.data.containerProperties.mountPoints) {
                        mountPoints = [];
                        obj.data.containerProperties.mountPoints.forEach(mountPoint => {
                            mountPoints.push({
                                'ReadOnly': mountPoint.readOnly,
                                'SourceVolume': mountPoint.sourceVolume,
                                'ContainerPath': mountPoint.containerPath
                            });
                        });
                    }

                    var ulimits = null;
                    if (obj.data.containerProperties.ulimits) {
                        ulimits = [];
                        obj.data.containerProperties.ulimits.forEach(ulimit => {
                            ulimit.push({
                                'SoftLimit': ulimit.softLimit,
                                'HardLimit': ulimit.hardLimit,
                                'Name': ulimit.name
                            });
                        });
                    }

                    reqParams.cfn['ContainerProperties'] = {
                        'MountPoints': mountPoints,
                        'User': obj.data.containerProperties.user,
                        'Volumes': volumes,
                        'Command': obj.data.containerProperties.command,
                        'Memory': obj.data.containerProperties.memory,
                        'Privileged': obj.data.containerProperties.privileged,
                        'Environment': environment,
                        'JobRoleArn': obj.data.containerProperties.jobRoleArn,
                        'ReadonlyRootFilesystem': obj.data.containerProperties.readonlyRootFilesystem,
                        'Ulimits': ulimits,
                        'Vcpus': obj.data.containerProperties.vcpus,
                        'Image': obj.data.containerProperties.image
                    };
                    reqParams.tf['container_properties'] = obj.data.containerProperties;
                }
                if (obj.data.nodeProperties) {
                    var nodeRangeProperties = [];
                    obj.data.nodeProperties.nodeRangeProperties.forEach(nodeRangeProperty => {
                        var container = null;
                        if (nodeRangeProperty.container) {
                            var volumes = null;
                            if (nodeRangeProperty.container.volumes) {
                                volumes = [];
                                nodeRangeProperty.container.volumes.forEach(volume => {
                                    var host = null;
                                    if (volume.host) {
                                        host = {
                                            'SourcePath': volume.host.sourcePath
                                        };
                                    }
                                    volumes.push({
                                        'Host': host,
                                        'Name': volume.name
                                    });
                                });
                            }

                            var environment = null;
                            if (nodeRangeProperty.container.environment) {
                                environment = [];
                                nodeRangeProperty.container.environment.forEach(environmentItem => {
                                    environment.push({
                                        'Name': environmentItem.name,
                                        'Value': environmentItem.value
                                    });
                                });
                            }

                            var mountPoints = null;
                            if (nodeRangeProperty.container.mountPoints) {
                                mountPoints = [];
                                nodeRangeProperty.container.mountPoints.forEach(mountPoint => {
                                    mountPoints.push({
                                        'ReadOnly': mountPoint.readOnly,
                                        'SourceVolume': mountPoint.sourceVolume,
                                        'ContainerPath': mountPoint.containerPath
                                    });
                                });
                            }

                            var ulimits = null;
                            if (nodeRangeProperty.container.ulimits) {
                                ulimits = [];
                                nodeRangeProperty.container.ulimits.forEach(ulimit => {
                                    ulimit.push({
                                        'SoftLimit': ulimit.softLimit,
                                        'HardLimit': ulimit.hardLimit,
                                        'Name': ulimit.name
                                    });
                                });
                            }

                            container = {
                                'MountPoints': mountPoints,
                                'User': nodeRangeProperty.container.user,
                                'Volumes': volumes,
                                'Command': nodeRangeProperty.container.command,
                                'Memory': nodeRangeProperty.container.memory,
                                'Privileged': nodeRangeProperty.container.privileged,
                                'Environment': environment,
                                'JobRoleArn': nodeRangeProperty.container.jobRoleArn,
                                'ReadonlyRootFilesystem': nodeRangeProperty.container.readonlyRootFilesystem,
                                'Ulimits': ulimits,
                                'Vcpus': nodeRangeProperty.container.vcpus,
                                'Image': nodeRangeProperty.container.image
                            };
                        }
                        nodeRangeProperties.push({
                            'Container': container,
                            'TargetNodes': nodeRangeProperty.targetNodes
                        });
                    });
                    reqParams.cfn['NodeProperties'] = {
                        'MainNode': obj.data.nodeProperties.mainNode,
                        'NumNodes': obj.data.nodeProperties.numNodes,
                        'NodeRangeProperties': nodeRangeProperties
                    };
                }

                /*
                TODO:
                ResourceRequirement
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('batch', obj.id),
                    'region': obj.region,
                    'service': 'batch',
                    'type': 'AWS::Batch::JobDefinition',
                    'terraformType': 'aws_batch_job_definition',
                    'options': reqParams
                });
            } else if (obj.type == "efs.filesystem") {
                reqParams.cfn['PerformanceMode'] = obj.data.PerformanceMode;
                reqParams.tf['performance_mode'] = obj.data.PerformanceMode;
                reqParams.cfn['Encrypted'] = obj.data.Encrypted;
                reqParams.tf['encrypted'] = obj.data.Encrypted;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                reqParams.tf['kms_key_id'] = obj.data.KmsKeyId;
                reqParams.cfn['ThroughputMode'] = obj.data.ThroughputMode;
                reqParams.tf['throughput_mode'] = obj.data.ThroughputMode;
                reqParams.cfn['ProvisionedThroughputInMibps'] = obj.data.ProvisionedThroughputInMibps;
                reqParams.tf['provisioned_throughput_in_mibps'] = obj.data.ProvisionedThroughputInMibps;
                reqParams.cfn['FileSystemTags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('efs', obj.id),
                    'region': obj.region,
                    'service': 'efs',
                    'type': 'AWS::EFS::FileSystem',
                    'terraformType': 'aws_efs_file_system',
                    'options': reqParams
                });
            } else if (obj.type == "efs.mounttarget") {
                reqParams.cfn['FileSystemId'] = obj.data.FileSystemId;
                reqParams.tf['file_system_id'] = obj.data.FileSystemId;
                reqParams.cfn['IpAddress'] = obj.data.IpAddress;
                reqParams.tf['ip_address'] = obj.data.IpAddress;
                reqParams.cfn['SecurityGroups'] = obj.data.SecurityGroups;
                reqParams.tf['security_groups'] = obj.data.SecurityGroups;
                reqParams.cfn['SubnetId'] = obj.data.SubnetId;
                reqParams.tf['subnet_id'] = obj.data.SubnetId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('efs', obj.id),
                    'region': obj.region,
                    'service': 'efs',
                    'type': 'AWS::EFS::MountTarget',
                    'terraformType': 'aws_efs_mount_target',
                    'options': reqParams
                });
            } else if (obj.type == "fsx.filesystem") {
                reqParams.cfn['FileSystemType'] = obj.data.FileSystemType;
                reqParams.cfn['StorageCapacity'] = obj.data.StorageCapacity;
                reqParams.cfn['SubnetIds'] = obj.data.SubnetIds;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.WindowsConfiguration) {
                    reqParams.cfn['WindowsConfiguration'] = {
                        'ActiveDirectoryId': obj.data.WindowsConfiguration.ActiveDirectoryId,
                        'AutomaticBackupRetentionDays': obj.data.WindowsConfiguration.AutomaticBackupRetentionDays,
                        'CopyTagsToBackups': obj.data.WindowsConfiguration.CopyTagsToBackups,
                        'DailyAutomaticBackupStartTime': obj.data.WindowsConfiguration.DailyAutomaticBackupStartTime,
                        'ThroughputCapacity': obj.data.WindowsConfiguration.ThroughputCapacity,
                        'WeeklyMaintenanceStartTime': obj.data.WindowsConfiguration.WeeklyMaintenanceStartTime
                    };
                }
                if (obj.data.LustreConfiguration) {
                    reqParams.cfn['LustreConfiguration'] = {
                        'ExportPath': obj.data.LustreConfiguration.DataRepositoryConfiguration.ExportPath,
                        'ImportedFileChunkSize': obj.data.LustreConfiguration.DataRepositoryConfiguration.ImportedFileChunkSize,
                        'ImportPath': obj.data.LustreConfiguration.DataRepositoryConfiguration.ImportPath,
                        'WeeklyMaintenanceStartTime': obj.data.LustreConfiguration.WeeklyMaintenanceStartTime
                    };
                }

                /*
                TODO:
                BackupId: String
                SecurityGroupIds: 
                    - String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('fsx', obj.id),
                    'region': obj.region,
                    'service': 'fsx',
                    'type': 'AWS::FSx::FileSystem',
                    'options': reqParams
                });
            } else if (obj.type == "ram.resourceshare") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.tf['name'] = obj.data.name;
                reqParams.cfn['AllowExternalPrincipals'] = obj.data.allowExternalPrincipals;
                reqParams.tf['allow_external_principals'] = obj.data.allowExternalPrincipals;
                if (obj.data.tags) {
                    reqParams.cfn['Tags'] = [];
                    reqParams.tf['tags'] = {};
                    obj.data.tags.forEach(tag => {
                        reqParams.cfn['Tags'].push({
                            'Key': tag.key,
                            'Value': tag.value
                        });
                        reqParams.tf['tags'][tag.key] = tag.value;
                    });
                }
                reqParams.cfn['Principals'] = obj.data.principals;
                reqParams.cfn['ResourceArns'] = obj.data.resourceArns;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ram', obj.id),
                    'region': obj.region,
                    'service': 'ram',
                    'type': 'AWS::RAM::ResourceShare',
                    'terraformType': 'aws_ram_resource_share',
                    'options': reqParams
                });
            } else if (obj.type == "acm.certificate") {
                reqParams.cfn['DomainName'] = obj.data.DomainName;
                reqParams.tf['domain_name'] = obj.data.DomainName;
                reqParams.cfn['SubjectAlternativeNames'] = obj.data.SubjectAlternativeNames;
                reqParams.tf['subject_alternative_names'] = obj.data.SubjectAlternativeNames;
                if (obj.data.DomainValidationOptions) {
                    reqParams.cfn['DomainValidationOptions'] = {
                        'DomainName': obj.data.DomainValidationOptions.DomainName,
                        'ValidationDomain': obj.data.DomainValidationOptions.ValidationDomain
                    };
                    reqParams.tf['validation_method'] = "DNS";
                }

                /*
                TODO:
                Tags:
                    - Resource Tag
                ValidationMethod: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('acm', obj.id),
                    'region': obj.region,
                    'service': 'acm',
                    'type': 'AWS::CertificateManager::Certificate',
                    'terraformType': 'aws_acm_certificate',
                    'options': reqParams
                });
            } else if (obj.type == "kms.key") {
                reqParams.cfn['Enabled'] = obj.data.Enabled;
                reqParams.tf['is_enabled'] = obj.data.Enabled;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['KeyUsage'] = obj.data.KeyUsage;
                reqParams.tf['key_usage'] = obj.data.KeyUsage;
                reqParams.cfn['EnableKeyRotation'] = obj.data.KeyRotationEnabled;
                reqParams.tf['enable_key_rotation'] = obj.data.KeyRotationEnabled;
                reqParams.cfn['KeyPolicy'] = obj.data.Policy;
                reqParams.tf['policy'] = obj.data.Policy;

                /*
                TODO:
                PendingWindowInDays: Integer
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('kms', obj.id),
                    'region': obj.region,
                    'service': 'kms',
                    'type': 'AWS::KMS::Key',
                    'terraformType': 'aws_kms_key',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.KeyId,
                        'GetAtt': {
                            'Arn': obj.data.Arn
                        }
                    }
                });
            } else if (obj.type == "kms.alias") {
                reqParams.cfn['AliasName'] = obj.data.AliasArn;
                reqParams.tf['name'] = obj.data.AliasArn;
                reqParams.cfn['TargetKeyId'] = obj.data.TargetKeyId;
                reqParams.tf['target_key_id'] = obj.data.TargetKeyId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('kms', obj.id),
                    'region': obj.region,
                    'service': 'kms',
                    'type': 'AWS::KMS::Alias',
                    'terraformType': 'aws_kms_alias',
                    'options': reqParams
                });
            } else if (obj.type == "stepfunctions.statemachine") {
                reqParams.cfn['StateMachineName'] = obj.data.name;
                reqParams.tf['name'] = obj.data.name;
                reqParams.cfn['DefinitionString'] = obj.data.definition;
                reqParams.tf['definition'] = obj.data.definition;
                reqParams.cfn['RoleArn'] = obj.data.roleArn;
                reqParams.tf['role_arn'] = obj.data.roleArn;

                /*
                TODO:
                Tags: 
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('stepfunctions', obj.id),
                    'region': obj.region,
                    'service': 'stepfunctions',
                    'type': 'AWS::StepFunctions::StateMachine',
                    'terraformType': 'sfn_state_machine',
                    'options': reqParams
                });
            } else if (obj.type == "stepfunctions.activity") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.tf['name'] = obj.data.name;

                /*
                TODO:
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('stepfunctions', obj.id),
                    'region': obj.region,
                    'service': 'stepfunctions',
                    'type': 'AWS::StepFunctions::Activity',
                    'terraformType': 'sfn_activity',
                    'options': reqParams
                });
            } else if (obj.type == "athena.namedquery") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['description'] = obj.data.Description;
                reqParams.cfn['Database'] = obj.data.Database;
                reqParams.cfn['database'] = obj.data.Database;
                reqParams.cfn['QueryString'] = obj.data.QueryString;
                reqParams.cfn['query'] = obj.data.QueryString;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('athena', obj.id),
                    'region': obj.region,
                    'service': 'athena',
                    'type': 'AWS::Athena::NamedQuery',
                    'terraformType': 'aws_athena_named_query',
                    'options': reqParams
                });
            } else if (obj.type == "iot.thing") {
                reqParams.cfn['ThingName'] = obj.data.thingName;
                reqParams.tf['name'] = obj.data.thingName;
                reqParams.cfn['AttributePayload'] = {
                    'Attributes': obj.data.attributes
                };
                reqParams.tf['attributes'] = obj.data.attributes;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iot', obj.id),
                    'region': obj.region,
                    'service': 'iot',
                    'type': 'AWS::IoT::Thing',
                    'terraformType': 'aws_iot_thing',
                    'options': reqParams
                });
            } else if (obj.type == "iot.thingprincipalattachment") {
                reqParams.cfn['ThingName'] = obj.data.thing.thingName;
                reqParams.tf['thing'] = obj.data.thing.thingName;
                reqParams.cfn['Principal'] = obj.data.principal;
                reqParams.tf['principal'] = obj.data.principal;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iot', obj.id),
                    'region': obj.region,
                    'service': 'iot',
                    'type': 'AWS::IoT::ThingPrincipalAttachment',
                    'terraformType': 'aws_iot_thing_principal_attachment',
                    'options': reqParams
                });
            } else if (obj.type == "iot.policy") {
                reqParams.cfn['PolicyName'] = obj.data.policyName;
                reqParams.tf['name'] = obj.data.policyName;
                reqParams.cfn['PolicyDocument'] = obj.data.policyDocument;
                reqParams.tf['policy'] = obj.data.policyDocument;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iot', obj.id),
                    'region': obj.region,
                    'service': 'iot',
                    'type': 'AWS::IoT::Policy',
                    'terraformType': 'aws_iot_policy',
                    'options': reqParams
                });
            } else if (obj.type == "iot.policyprincipalattachment") {
                reqParams.cfn['PolicyName'] = obj.data.policy.policyName;
                reqParams.cfn['policy'] = obj.data.policy.policyName;
                reqParams.cfn['Principal'] = obj.data.principal;
                reqParams.cfn['target'] = obj.data.principal;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iot', obj.id),
                    'region': obj.region,
                    'service': 'iot',
                    'type': 'AWS::IoT::PolicyPrincipalAttachment',
                    'terraformType': 'aws_iot_policy_attachment',
                    'options': reqParams
                });
            } else if (obj.type == "iot.certificate") {
                reqParams.cfn['Status'] = obj.data.status;
                reqParams.cfn['active'] = (obj.data.status.toLowerCase() == "active");

                /*
                TODO:
                CertificateSigningRequest
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iot', obj.id),
                    'region': obj.region,
                    'service': 'iot',
                    'type': 'AWS::IoT::Certificate',
                    'terraformType': 'aws_iot_certificate',
                    'options': reqParams
                });
            } else if (obj.type == "iot.topicrule") {
                var actions = null;
                var errorAction = null;

                if (obj.rule.actions) {
                    actions = [];
                    obj.rule.actions.forEach(action => {
                        var actionitem = {};

                        if (action.dynamoDB) {
                            actionitem['DynamoDB'] = {
                                'HashKeyField': action.dynamoDB.hashKeyField,
                                'HashKeyType': action.dynamoDB.hashKeyType,
                                'HashKeyValue': action.dynamoDB.hashKeyValue,
                                'PayloadField': action.dynamoDB.payloadField,
                                'RangeKeyField': action.dynamoDB.rangeKeyField,
                                'RangeKeyType': action.dynamoDB.rangeKeyType,
                                'RangeKeyValue': action.dynamoDB.rangeKeyValue,
                                'RoleArn': action.dynamoDB.roleArn,
                                'TableName': action.dynamoDB.tableName
                            };
                        }
                        if (action.dynamoDBv2) {
                            actionitem['DynamoDBv2'] = {
                                'PutItem': {
                                    'TableName': action.dynamoDBv2.putItem.tableName
                                },
                                'RoleArn': action.dynamoDBv2.roleArn
                            };
                        }
                        if (action.lambda) {
                            actionitem['Lambda'] = {
                                'FunctionArn': action.lambda.functionArn
                            };
                        }
                        if (action.sns) {
                            actionitem['Sns'] = {
                                'MessageFormat': action.sns.messageFormat,
                                'RoleArn': action.sns.roleArn,
                                'TargetArn': action.sns.targetArn
                            };
                        }
                        if (action.sqs) {
                            actionitem['Sqs'] = {
                                'QueueUrl': action.sqs.queueUrl,
                                'RoleArn': action.sqs.roleArn,
                                'UseBase64': action.sqs.useBase64
                            };
                        }
                        if (action.kinesis) {
                            actionitem['Kinesis'] = {
                                'PartitionKey': action.kinesis.partitionKey,
                                'RoleArn': action.kinesis.roleArn,
                                'StreamName': action.kinesis.streamName
                            };
                        }
                        if (action.republish) {
                            actionitem['Republish'] = {
                                'RoleArn': action.republish.roleArn,
                                'Topic': action.republish.topic
                            };
                        }
                        if (action.s3) {
                            actionitem['S3'] = {
                                'BucketName': action.s3.bucketName,
                                'Key': action.s3.key,
                                'RoleArn': action.s3.roleArn
                            };
                        }
                        if (action.firehose) {
                            actionitem['Firehose'] = {
                                'DeliveryStreamName': action.firehose.deliveryStreamName,
                                'RoleArn': action.firehose.roleArn,
                                'Separator': action.firehose.separator
                            };
                        }
                        if (action.cloudwatchMetric) {
                            actionitem['CloudwatchMetric'] = {
                                'MetricName': action.cloudwatchMetric.metricName,
                                'MetricNamespace': action.cloudwatchMetric.metricNamespace,
                                'MetricTimestamp': action.cloudwatchMetric.metricTimestamp,
                                'MetricUnit': action.cloudwatchMetric.metricUnit,
                                'MetricValue': action.cloudwatchMetric.metricValue,
                                'RoleArn': action.cloudwatchMetric.roleArn
                            };
                        }
                        if (action.cloudwatchAlarm) {
                            actionitem['CloudwatchAlarm'] = {
                                'AlarmName': action.cloudwatchAlarm.alarmName,
                                'RoleArn': action.cloudwatchAlarm.roleArn,
                                'StateReason': action.cloudwatchAlarm.stateReason,
                                'StateValue': action.cloudwatchAlarm.stateValue
                            };
                        }
                        if (action.elasticsearch) {
                            actionitem['Elasticsearch'] = {
                                'Endpoint': action.elasticsearch.endpoint,
                                'Id': action.elasticsearch.id,
                                'Index': action.elasticsearch.index,
                                'RoleArn': action.elasticsearch.roleArn,
                                'Type': action.elasticsearch.type
                            };
                        }
                        if (action.iotAnalytics) {
                            actionitem['IotAnalytics'] = {
                                'ChannelName': action.iotAnalytics.channelName,
                                'RoleArn': action.iotAnalytics.roleArn
                            };
                        }
                        if (action.stepFunctions) {
                            actionitem['StepFunctions'] = {
                                'ExecutionNamePrefix': action.stepFunctions.executionNamePrefix,
                                'RoleArn': action.stepFunctions.roleArn,
                                'StateMachineName': action.stepFunctions.stateMachineName
                            };
                        }
                        
                        actions.push(actionitem);
                    });
                }

                if (obj.data.rule.errorAction) {
                    errorAction = {};
                    if (obj.data.rule.errorAction.dynamoDB) {
                        errorAction['DynamoDB'] = {
                            'HashKeyField': obj.data.rule.errorAction.dynamoDB.hashKeyField,
                            'HashKeyType': obj.data.rule.errorAction.dynamoDB.hashKeyType,
                            'HashKeyValue': obj.data.rule.errorAction.dynamoDB.hashKeyValue,
                            'PayloadField': obj.data.rule.errorAction.dynamoDB.payloadField,
                            'RangeKeyField': obj.data.rule.errorAction.dynamoDB.rangeKeyField,
                            'RangeKeyType': obj.data.rule.errorAction.dynamoDB.rangeKeyType,
                            'RangeKeyValue': obj.data.rule.errorAction.dynamoDB.rangeKeyValue,
                            'RoleArn': obj.data.rule.errorAction.dynamoDB.roleArn,
                            'TableName': obj.data.rule.errorAction.dynamoDB.tableName
                        };
                    }
                    if (obj.data.rule.errorAction.dynamoDBv2) {
                        errorAction['DynamoDBv2'] = {
                            'PutItem': {
                                'TableName': obj.data.rule.errorAction.dynamoDBv2.putItem.tableName
                            },
                            'RoleArn': obj.data.rule.errorAction.dynamoDBv2.roleArn
                        };
                    }
                    if (obj.data.rule.errorAction.lambda) {
                        errorAction['Lambda'] = {
                            'FunctionArn': obj.data.rule.errorAction.lambda.functionArn
                        };
                    }
                    if (obj.data.rule.errorAction.sns) {
                        errorAction['Sns'] = {
                            'MessageFormat': obj.data.rule.errorAction.sns.messageFormat,
                            'RoleArn': obj.data.rule.errorAction.sns.roleArn,
                            'TargetArn': obj.data.rule.errorAction.sns.targetArn
                        };
                    }
                    if (obj.data.rule.errorAction.sqs) {
                        errorAction['Sqs'] = {
                            'QueueUrl': obj.data.rule.errorAction.sqs.queueUrl,
                            'RoleArn': obj.data.rule.errorAction.sqs.roleArn,
                            'UseBase64': obj.data.rule.errorAction.sqs.useBase64
                        };
                    }
                    if (obj.data.rule.errorAction.kinesis) {
                        errorAction['Kinesis'] = {
                            'PartitionKey': obj.data.rule.errorAction.kinesis.partitionKey,
                            'RoleArn': obj.data.rule.errorAction.kinesis.roleArn,
                            'StreamName': obj.data.rule.errorAction.kinesis.streamName
                        };
                    }
                    if (obj.data.rule.errorAction.republish) {
                        errorAction['Republish'] = {
                            'RoleArn': obj.data.rule.errorAction.republish.roleArn,
                            'Topic': obj.data.rule.errorAction.republish.topic
                        };
                    }
                    if (obj.data.rule.errorAction.s3) {
                        errorAction['S3'] = {
                            'BucketName': obj.data.rule.errorAction.s3.bucketName,
                            'Key': obj.data.rule.errorAction.s3.key,
                            'RoleArn': obj.data.rule.errorAction.s3.roleArn
                        };
                    }
                    if (obj.data.rule.errorAction.firehose) {
                        errorAction['Firehose'] = {
                            'DeliveryStreamName': obj.data.rule.errorAction.firehose.deliveryStreamName,
                            'RoleArn': obj.data.rule.errorAction.firehose.roleArn,
                            'Separator': obj.data.rule.errorAction.firehose.separator
                        };
                    }
                    if (obj.data.rule.errorAction.cloudwatchMetric) {
                        errorAction['CloudwatchMetric'] = {
                            'MetricName': obj.data.rule.errorAction.cloudwatchMetric.metricName,
                            'MetricNamespace': obj.data.rule.errorAction.cloudwatchMetric.metricNamespace,
                            'MetricTimestamp': obj.data.rule.errorAction.cloudwatchMetric.metricTimestamp,
                            'MetricUnit': obj.data.rule.errorAction.cloudwatchMetric.metricUnit,
                            'MetricValue': obj.data.rule.errorAction.cloudwatchMetric.metricValue,
                            'RoleArn': obj.data.rule.errorAction.cloudwatchMetric.roleArn
                        };
                    }
                    if (obj.data.rule.errorAction.cloudwatchAlarm) {
                        errorAction['CloudwatchAlarm'] = {
                            'AlarmName': obj.data.rule.errorAction.cloudwatchAlarm.alarmName,
                            'RoleArn': obj.data.rule.errorAction.cloudwatchAlarm.roleArn,
                            'StateReason': obj.data.rule.errorAction.cloudwatchAlarm.stateReason,
                            'StateValue': obj.data.rule.errorAction.cloudwatchAlarm.stateValue
                        };
                    }
                    if (obj.data.rule.errorAction.elasticsearch) {
                        errorAction['Elasticsearch'] = {
                            'Endpoint': obj.data.rule.errorAction.elasticsearch.endpoint,
                            'Id': obj.data.rule.errorAction.elasticsearch.id,
                            'Index': obj.data.rule.errorAction.elasticsearch.index,
                            'RoleArn': obj.data.rule.errorAction.elasticsearch.roleArn,
                            'Type': obj.data.rule.errorAction.elasticsearch.type
                        };
                    }
                    if (obj.data.rule.errorAction.iotAnalytics) {
                        errorAction['IotAnalytics'] = {
                            'ChannelName': obj.data.rule.errorAction.iotAnalytics.channelName,
                            'RoleArn': obj.data.rule.errorAction.iotAnalytics.roleArn
                        };
                    }
                    if (obj.data.rule.errorAction.stepFunctions) {
                        errorAction['StepFunctions'] = {
                            'ExecutionNamePrefix': obj.data.rule.errorAction.stepFunctions.executionNamePrefix,
                            'RoleArn': obj.data.rule.errorAction.stepFunctions.roleArn,
                            'StateMachineName': obj.data.rule.errorAction.stepFunctions.stateMachineName
                        };
                    }
                }

                reqParams.cfn['RuleName'] = obj.data.rule.ruleName;
                reqParams.cfn['TopicRulePayload'] = {
                    'Actions': actions,
                    'AwsIotSqlVersion': obj.data.rule.awsIotSqlVersion,
                    'Description': obj.data.rule.description,
                    'ErrorAction': errorAction,
                    'RuleDisabled': obj.data.rule.ruleDisabled,
                    'Sql': obj.data.rule.sql
                };

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iot', obj.id),
                    'region': obj.region,
                    'service': 'iot',
                    'type': 'AWS::IoT::TopicRule',
                    'options': reqParams
                });
            } else if (obj.type == "iot1click.project") {
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.cfn['PlacementTemplate'] = {
                    'DefaultAttributes': obj.data.placementTemplate.defaultAttributes,
                    'DeviceTemplates': obj.data.placementTemplate.deviceTemplates
                };
                reqParams.cfn['ProjectName'] = obj.data.projectName;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iot1click', obj.id),
                    'region': obj.region,
                    'service': 'iot1click',
                    'type': 'AWS::IoT1Click::Project',
                    'options': reqParams
                });
            } else if (obj.type == "iot1click.placement") {
                reqParams.cfn['Attributes'] = obj.data.attributes;
                reqParams.cfn['PlacementName'] = obj.data.placementName;
                reqParams.cfn['ProjectName'] = obj.data.projectName;

                /*
                TODO:
                AssociatedDevices
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iot1click', obj.id),
                    'region': obj.region,
                    'service': 'iot1click',
                    'type': 'AWS::IoT1Click::Placement',
                    'options': reqParams
                });
            } else if (obj.type == "iot1click.device") {
                reqParams.cfn['DeviceId'] = obj.data.DeviceId;
                reqParams.cfn['Enabled'] = obj.data.Enabled;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iot1click', obj.id),
                    'region': obj.region,
                    'service': 'iot1click',
                    'type': 'AWS::IoT1Click::Device',
                    'options': reqParams
                });
            } else if (obj.type == "codecommit.repository") {
                reqParams.cfn['RepositoryDescription'] = obj.data.repositoryDescription;
                reqParams.tf['description'] = obj.data.repositoryDescription;
                reqParams.cfn['RepositoryName'] = obj.data.repositoryName;
                reqParams.tf['repository_name'] = obj.data.repositoryName;

                /*
                TODO:
                Triggers
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('codecommit', obj.id),
                    'region': obj.region,
                    'service': 'codecommit',
                    'type': 'AWS::CodeCommit::Repository',
                    'terraformType': 'aws_codecommit_repository',
                    'options': reqParams
                });
            } else if (obj.type == "codebuild.project") {
                var gitSubmodulesConfig = null;
                if (obj.data.source.gitSubmodulesConfig) {
                    gitSubmodulesConfig = {
                        'FetchSubmodules': obj.data.source.gitSubmodulesConfig.fetchSubmodules
                    };
                }
                var auth = null;
                if (obj.data.source.auth) {
                    auth = {
                        'Type': obj.data.source.auth.type,
                        'Resource': obj.data.source.auth.resource
                    };
                }
                
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.cfn['Source'] = {
                    'Auth': auth,
                    'BuildSpec': obj.data.source.buildspec,
                    'GitCloneDepth': obj.data.source.gitCloneDepth,
                    'GitSubmodulesConfig': gitSubmodulesConfig,
                    'InsecureSsl': obj.data.source.insecureSsl,
                    'Location': obj.data.source.location,
                    'ReportBuildStatus': obj.data.source.reportBuildStatus,
                    'SourceIdentifier': obj.data.source.sourceIdentifier,
                    'Type': obj.data.source.type
                };
                if (obj.data.secondarySources) {
                    reqParams.cfn['SecondarySources'] = [];
                    obj.data.secondarySources.forEach(secondarySource => {
                        var gitSubmodulesConfig = null;
                        if (secondarySource.gitSubmodulesConfig) {
                            gitSubmodulesConfig = {
                                'FetchSubmodules': secondarySource.gitSubmodulesConfig.fetchSubmodules
                            };
                        }
                        var auth = null;
                        if (secondarySource.auth) {
                            auth = {
                                'Type': secondarySource.auth.type,
                                'Resource': secondarySource.auth.resource
                            };
                        }
                        reqParams.cfn['SecondarySources'].push({
                            'Auth': auth,
                            'BuildSpec': secondarySource.buildspec,
                            'GitCloneDepth': secondarySource.gitCloneDepth,
                            'GitSubmodulesConfig': gitSubmodulesConfig,
                            'InsecureSsl': secondarySource.insecureSsl,
                            'Location': secondarySource.location,
                            'ReportBuildStatus': secondarySource.reportBuildStatus,
                            'SourceIdentifier': secondarySource.sourceIdentifier,
                            'Type': secondarySource.type
                        });
                    });
                }
                reqParams.cfn['Artifacts'] = {
                    'ArtifactIdentifier': obj.data.artifacts.artifactIdentifier,
                    'EncryptionDisabled': obj.data.artifacts.encryptionDisabled,
                    'Location': obj.data.artifacts.location,
                    'Name': obj.data.artifacts.name,
                    'NamespaceType': obj.data.artifacts.namespaceType,
                    'OverrideArtifactName': obj.data.artifacts.overrideArtifactName,
                    'Packaging': obj.data.artifacts.packaging,
                    'Path': obj.data.artifacts.path,
                    'Type': obj.data.artifacts.type
                };
                if (obj.data.secondaryArtifacts) {
                    reqParams.cfn['SecondaryArtifacts'] = [];
                    obj.data.secondaryArtifacts.forEach(secondaryArtifact => {
                        reqParams.cfn['SecondaryArtifacts'].push({
                            'ArtifactIdentifier': secondaryArtifact.artifactIdentifier,
                            'EncryptionDisabled': secondaryArtifact.encryptionDisabled,
                            'Location': secondaryArtifact.location,
                            'Name': secondaryArtifact.name,
                            'NamespaceType': secondaryArtifact.namespaceType,
                            'OverrideArtifactName': secondaryArtifact.overrideArtifactName,
                            'Packaging': secondaryArtifact.packaging,
                            'Path': secondaryArtifact.path,
                            'Type': secondaryArtifact.type
                        });
                    });
                }
                if (obj.data.cache) {
                    reqParams.cfn['Cache'] = {
                        'Location': obj.data.cache.location,
                        'Modes': obj.data.cache.modes,
                        'Type': obj.data.cache.type
                    };
                }
                var environmentVariables = null;
                if (obj.data.environment.environmentVariables) {
                    environmentVariables = [];
                    obj.data.environment.environmentVariables.forEach(environmentVariable => {
                        environmentVariables.push({
                            'Name': environmentVariable.name,
                            'Type': environmentVariable.type,
                            'Value': environmentVariable.value
                        });
                    });
                }
                var registryCredential = null;
                if (obj.data.environment.registryCredential) {
                    registryCredential = {
                        'Credential': obj.data.environment.registryCredential.credential,
                        'CredentialProvider': obj.data.environment.registryCredential.credentialProvider
                    };
                }
                reqParams.cfn['Environment'] = {
                    'Certificate': obj.data.environment.certificate,
                    'ComputeType': obj.data.environment.computeType,
                    'EnvironmentVariables': environmentVariables,
                    'Image': obj.data.environment.image,
                    'ImagePullCredentialsType': obj.data.environment.imagePullCredentialsType,
                    'PrivilegedMode': obj.data.environment.privilegedMode,
                    'RegistryCredential': registryCredential,
                    'Type': obj.data.environment.type
                };
                reqParams.cfn['ServiceRole'] = obj.data.serviceRole;
                reqParams.cfn['TimeoutInMinutes'] = obj.data.timeoutInMinutes;
                reqParams.cfn['QueuedTimeoutInMinutes'] = obj.data.queuedTimeoutInMinutes;
                reqParams.cfn['EncryptionKey'] = obj.data.encryptionKey;
                if (obj.data.tags) {
                    reqParams.cfn['Tags'] = [];
                    obj.data.tags.forEach(tag => {
                        reqParams.cfn['Tags'].push({
                            'Key': tag.key,
                            'Value': tag.value
                        });
                    });
                }
                if (obj.data.vpcConfig) {
                    reqParams.cfn['VpcConfig'] = {
                        'SecurityGroupIds': obj.data.securityGroupIds,
                        'Subnets': obj.data.subnets,
                        'VpcId': obj.data.vpcId
                    };
                }
                if (obj.data.badge) {
                    reqParams.cfn['BadgeEnabled'] = obj.data.badge.badgeEnabled;
                }
                if (obj.data.logsConfig) {
                    reqParams.cfn['LogsConfig'] = {};
                    if (obj.data.logsConfig.cloudWatchLogs) {
                        reqParams.cfn.LogsConfig['CloudWatchLogs'] = {
                            'Status': obj.data.logsConfig.cloudWatchLogs.status,
                            'GroupName': obj.data.logsConfig.cloudWatchLogs.groupName,
                            'StreamName': obj.data.logsConfig.cloudWatchLogs.streamName
                        };
                    }
                    if (obj.data.logsConfig.s3Logs) {
                        reqParams.cfn.LogsConfig['S3Logs'] = {
                            'Status': obj.data.logsConfig.s3Logs.status,
                            'Location': obj.data.logsConfig.s3Logs.location,
                            'EncryptionDisabled': obj.data.logsConfig.s3Logs.encryptionDisabled
                        };
                    }
                }

                /*
                TODO:
                Triggers: Triggers
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('codebuild', obj.id),
                    'region': obj.region,
                    'service': 'codebuild',
                    'type': 'AWS::CodeBuild::Project',
                    'options': reqParams
                });
            } else if (obj.type == "codedeploy.application") {
                reqParams.cfn['ApplicationName'] = obj.data.applicationName;
                reqParams.tf['name'] = obj.data.applicationName;
                reqParams.cfn['ComputePlatform'] = obj.data.computePlatform;
                reqParams.tf['compute_platform'] = obj.data.computePlatform;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('codedeploy', obj.id),
                    'region': obj.region,
                    'service': 'codedeploy',
                    'type': 'AWS::CodeDeploy::Application',
                    'terraformType': 'aws_codedeploy_app',
                    'options': reqParams
                });
            } else if (obj.type == "codedeploy.deploymentgroup") {
                reqParams.cfn['ApplicationName'] = obj.data.applicationName;
                reqParams.cfn['DeploymentGroupName'] = obj.data.deploymentGroupName;
                reqParams.cfn['DeploymentConfigName'] = obj.data.deploymentConfigName;
                reqParams.cfn['ServiceRoleArn'] = obj.data.serviceRoleArn;
                if (obj.data.ec2TagFilters) {
                    reqParams.cfn['Ec2TagFilters'] = [];
                    obj.data.ec2TagFilters.forEach(ec2TagFilter => {
                        reqParams.cfn['Ec2TagFilters'].push(ec2TagFilter);
                    });
                }
                if (obj.data.onPremisesInstanceTagFilters) {
                    reqParams.cfn['OnPremisesInstanceTagFilters'] = [];
                    obj.data.onPremisesInstanceTagFilters.forEach(onPremisesInstanceTagFilter => {
                        reqParams.cfn['OnPremisesInstanceTagFilters'].push(onPremisesInstanceTagFilter);
                    });
                }
                if (obj.data.autoScalingGroups) {
                    reqParams.cfn['AutoScalingGroups'] = [];
                    obj.data.autoScalingGroups.forEach(autoScalingGroup => {
                        reqParams.cfn['AutoScalingGroups'].push(autoScalingGroup.name);
                    });
                }
                if (obj.data.triggerConfigurations) {
                    reqParams.cfn['TriggerConfigurations'] = [];
                    obj.data.triggerConfigurations.forEach(triggerConfiguration => {
                        reqParams.cfn['TriggerConfigurations'].push({
                            'TriggerEvents': triggerConfiguration.triggerEvents,
                            'TriggerName': triggerConfiguration.triggerName,
                            'TriggerTargetArn': triggerConfiguration.triggerTargetArn
                        });
                    });
                }
                if (obj.data.alarmConfiguration) {
                    var alarms = null;
                    if (obj.data.alarmConfiguration.alarms) {
                        alarms = [];
                        obj.data.alarmConfiguration.alarms.forEach(alarm => {
                            alarms.push({
                                'Name': alarm.name
                            });
                        });
                    }
                    reqParams.cfn['AlarmConfiguration'] = {
                        'Alarms': alarms,
                        'Enabled': obj.data.alarmConfiguration.enabled,
                        'IgnorePollAlarmFailure': obj.data.alarmConfiguration.ignorePollAlarmFailure
                    };
                }
                if (obj.data.autoRollbackConfiguration) {
                    reqParams.cfn['AutoRollbackConfiguration'] = {
                        'Enabled': obj.data.autoRollbackConfiguration.enabled,
                        'Events': obj.data.autoRollbackConfiguration.events
                    };
                }
                if (obj.data.deploymentStyle) {
                    reqParams.cfn['DeploymentStyle'] = {
                        'DeploymentType': obj.data.deploymentStyle.deploymentType,
                        'DeploymentOption': obj.data.deploymentStyle.deploymentOption
                    };
                }
                if (obj.data.loadBalancerInfo) {
                    reqParams.cfn['LoadBalancerInfo'] = {};
                    if (obj.data.loadBalancerInfo.elbInfoList) {
                        reqParams.cfn.LoadBalancerInfo['ElbInfoList'] = [];
                        obj.data.loadBalancerInfo.elbInfoList.forEach(elbInfo => {
                            reqParams.cfn.LoadBalancerInfo['ElbInfoList'].push({
                                'Name': elbInfo.name
                            });
                        });
                    }
                    if (obj.data.loadBalancerInfo.targetGroupInfoList) {
                        reqParams.cfn.LoadBalancerInfo['TargetGroupInfoList'] = [];
                        obj.data.loadBalancerInfo.targetGroupInfoList.forEach(targetGroupInfo => {
                            reqParams.cfn.LoadBalancerInfo['TargetGroupInfoList'].push({
                                'Name': targetGroupInfo.name
                            });
                        });
                    }
                }
                if (obj.data.ec2TagSet) { // TODO: Check this
                    reqParams.cfn['Ec2TagSet'] = {};
                    if (obj.data.ec2TagSet.Ec2TagSetList) {
                        reqParams.cfn.Ec2TagSet['Ec2TagSetList'] = [];
                        obj.data.ec2TagSet.Ec2TagSetList.forEach(ec2TagSet => {
                            reqParams.cfn.Ec2TagSet.Ec2TagSetList.push({
                                'Ec2TagGroup': [ec2TagSet]
                            });
                        });
                    }
                }
                if (obj.data.onPremisesTagSet) { // TODO: Check this
                    reqParams.cfn['OnPremisesTagSet'] = {};
                    if (obj.data.onPremisesTagSet.OnPremisesTagSetList) {
                        reqParams.cfn.OnPremisesTagSet['OnPremisesTagSetList'] = [];
                        obj.data.onPremisesTagSet.OnPremisesTagSetList.forEach(onPremisesTagSet => {
                            reqParams.cfn.OnPremisesTagSet.OnPremisesTagSetList.push({
                                'OnPremisesTagGroup': [onPremisesTagSet]
                            });
                        });
                    }
                }

                /*
                TODO:
                Deployment:
                    Deployment
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('codedeploy', obj.id),
                    'region': obj.region,
                    'service': 'codedeploy',
                    'type': 'AWS::CodeDeploy::DeploymentGroup',
                    'options': reqParams
                });
            } else if (obj.type == "codedeploy.deploymentconfiguration") {
                reqParams.cfn['DeploymentConfigName'] = obj.data.deploymentConfigName;
                reqParams.tf['deployment_config_name'] = obj.data.deploymentConfigName;
                if (obj.data.minimumHealthyHosts) {
                    reqParams.cfn['MinimumHealthyHosts'] = {
                        'Type': obj.data.minimumHealthyHosts.type,
                        'Value': obj.data.minimumHealthyHosts.value
                    };
                    reqParams.tf['minimum_healthy_hosts'] = {
                        'type': obj.data.minimumHealthyHosts.type,
                        'value': obj.data.minimumHealthyHosts.value
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('codedeploy', obj.id),
                    'region': obj.region,
                    'service': 'codedeploy',
                    'type': 'AWS::CodeDeploy::DeploymentConfig',
                    'terraformType': 'aws_codedeploy_deployment_config',
                    'options': reqParams
                });
            } else if (obj.type == "neptune.cluster") {
                reqParams.cfn['AvailabilityZones'] = obj.data.AvailabilityZones;
                reqParams.tf['availability_zones'] = obj.data.AvailabilityZones;
                reqParams.cfn['BackupRetentionPeriod'] = obj.data.BackupRetentionPeriod;
                reqParams.tf['backup_retention_period'] = obj.data.BackupRetentionPeriod;
                reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;
                reqParams.tf['cluster_identifier'] = obj.data.DBClusterIdentifier;
                reqParams.cfn['DBClusterParameterGroupName'] = obj.data.DBClusterParameterGroup;
                reqParams.tf['neptune_cluster_parameter_group_name'] = obj.data.DBClusterParameterGroup;
                reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroup;
                reqParams.tf['neptune_subnet_group_name'] = obj.data.DBSubnetGroup;
                reqParams.cfn['Port'] = obj.data.Port;
                reqParams.tf['port'] = obj.data.Port;
                reqParams.cfn['PreferredBackupWindow'] = obj.data.PreferredBackupWindow;
                reqParams.tf['preferred_backup_window'] = obj.data.PreferredBackupWindow;
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                reqParams.tf['preferred_maintenance_window'] = obj.data.PreferredMaintenanceWindow;
                if (obj.data.VpcSecurityGroups) {
                    reqParams.cfn['VpcSecurityGroupIds'] = [];
                    reqParams.tf['vpc_security_group_ids'] = [];
                    obj.data.VpcSecurityGroups.forEach(vpcSecurityGroup => {
                        reqParams.cfn['VpcSecurityGroupIds'].push(vpcSecurityGroup.VpcSecurityGroupId);
                        reqParams.tf['vpc_security_group_ids'].push(vpcSecurityGroup.VpcSecurityGroupId);
                    });
                }
                reqParams.cfn['StorageEncrypted'] = obj.data.StorageEncrypted;
                reqParams.tf['storage_encrypted'] = obj.data.StorageEncrypted;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                reqParams.tf['kms_key_arn'] = obj.data.KmsKeyId;
                reqParams.cfn['IamAuthEnabled'] = obj.data.IAMDatabaseAuthenticationEnabled;
                reqParams.tf['iam_database_authentication_enabled'] = obj.data.IAMDatabaseAuthenticationEnabled;

                /*
                TODO:
                SnapshotIdentifier: String
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('neptune', obj.id),
                    'region': obj.region,
                    'service': 'neptune',
                    'type': 'AWS::Neptune::DBCluster',
                    'terraformType': 'aws_neptune_cluster',
                    'options': reqParams
                });
            } else if (obj.type == "neptune.instance") {
                reqParams.cfn['DBInstanceIdentifier'] = obj.data.DBInstanceIdentifier;
                reqParams.tf['identifier'] = obj.data.DBInstanceIdentifier;
                reqParams.cfn['DBInstanceClass'] = obj.data.DBInstanceClass;
                reqParams.tf['instance_class'] = obj.data.DBInstanceClass;
                reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
                reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;
                if (obj.data.DBSubnetGroup) {
                    reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroup.DBSubnetGroupName;
                    reqParams.tf['neptune_subnet_group_name'] = obj.data.DBSubnetGroup.DBSubnetGroupName;
                }
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                reqParams.tf['preferred_maintenance_window'] = obj.data.PreferredMaintenanceWindow;
                reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
                reqParams.tf['auto_minor_version_upgrade'] = obj.data.AutoMinorVersionUpgrade;
                reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;
                reqParams.tf['cluster_identifier'] = obj.data.DBClusterIdentifier;

                /*
                TODO:
                AllowMajorVersionUpgrade: Boolean
                DBParameterGroupName: String
                DBSnapshotIdentifier: String
                Tags:
                    Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('neptune', obj.id),
                    'region': obj.region,
                    'service': 'neptune',
                    'type': 'AWS::Neptune::DBInstance',
                    'terraformType': 'aws_neptune_cluster_instance',
                    'options': reqParams
                });
            } else if (obj.type == "neptune.clusterparametergroup") {
                reqParams.cfn['Name'] = obj.data.DBClusterParameterGroupName;
                reqParams.tf['name'] = obj.data.DBClusterParameterGroupName;
                reqParams.cfn['Family'] = obj.data.DBParameterGroupFamily;
                reqParams.tf['family'] = obj.data.DBParameterGroupFamily;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;

                /*
                TODO:
                Parameters: DBParameters
                Tags:
                    Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('neptune', obj.id),
                    'region': obj.region,
                    'service': 'neptune',
                    'type': 'AWS::Neptune::DBClusterParameterGroup',
                    'terraformType': 'aws_neptune_cluster_parameter_group',
                    'options': reqParams
                });
            } else if (obj.type == "neptune.parametergroup") {
                reqParams.cfn['Name'] = obj.data.DBParameterGroupName;
                reqParams.tf['name'] = obj.data.DBParameterGroupName;
                reqParams.cfn['Family'] = obj.data.DBParameterGroupFamily;
                reqParams.tf['family'] = obj.data.DBParameterGroupFamily;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;

                /*
                TODO:
                Parameters: DBParameters
                Tags:
                    Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('neptune', obj.id),
                    'region': obj.region,
                    'service': 'neptune',
                    'type': 'AWS::Neptune::DBParameterGroup',
                    'terraformType': 'aws_neptune_parameter_group',
                    'options': reqParams
                });
            } else if (obj.type == "neptune.subnetgroup") {
                reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroupName;
                reqParams.tf['name'] = obj.data.DBSubnetGroupName;
                reqParams.cfn['DBSubnetGroupDescription'] = obj.data.DBSubnetGroupDescription;
                reqParams.tf['description'] = obj.data.DBSubnetGroupDescription;
                if (obj.data.Subnets) {
                    reqParams.cfn['SubnetIds'] = [];
                    reqParams.tf['subnet_ids'] = [];
                    obj.data.Subnets.forEach(subnet => {
                        reqParams.cfn['SubnetIds'].push(subnet.SubnetIdentifier);
                        reqParams.tf['subnet_ids'].push(subnet.SubnetIdentifier);
                    });
                }

                /*
                TODO:
                Tags:
                    - Resource Tag 
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('neptune', obj.id),
                    'region': obj.region,
                    'service': 'neptune',
                    'type': 'AWS::Neptune::DBSubnetGroup',
                    'terraformType': 'aws_neptune_subnet_group',
                    'options': reqParams
                });
            } else if (obj.type == "documentdb.cluster") {
                reqParams.cfn['AvailabilityZones'] = obj.data.AvailabilityZones;
                reqParams.tf['availability_zones'] = obj.data.AvailabilityZones;
                reqParams.cfn['BackupRetentionPeriod'] = obj.data.BackupRetentionPeriod;
                reqParams.tf['backup_retention_period'] = obj.data.BackupRetentionPeriod;
                reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;
                reqParams.tf['cluster_identifier'] = obj.data.DBClusterIdentifier;
                reqParams.cfn['DBClusterParameterGroupName'] = obj.data.DBClusterParameterGroup;
                reqParams.tf['db_cluster_parameter_group_name'] = obj.data.DBClusterParameterGroup;
                reqParams.cfn['DBSubnetGroupName'] = obj.data.DBClusterParameterGroupName;
                reqParams.tf['db_subnet_group_name'] = obj.data.DBClusterParameterGroupName;
                reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
                reqParams.tf['engine_version'] = obj.data.EngineVersion;
                reqParams.cfn['Port'] = obj.data.Port;
                reqParams.tf['port'] = obj.data.Port;
                reqParams.cfn['MasterUsername'] = obj.data.MasterUsername;
                reqParams.tf['master_username'] = obj.data.MasterUsername;
                reqParams.cfn['PreferredBackupWindow'] = obj.data.PreferredBackupWindow;
                reqParams.tf['preferred_backup_window'] = obj.data.PreferredBackupWindow;
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                reqParams.tf['preferred_maintenance_window'] = obj.data.PreferredMaintenanceWindow;
                if (obj.data.VpcSecurityGroups) {
                    reqParams.cfn['VpcSecurityGroupIds'] = [];
                    reqParams.tf['vpc_security_group_ids'] = [];
                    obj.data.VpcSecurityGroups.forEach(vpcSecurityGroup => {
                        reqParams.cfn['VpcSecurityGroupIds'].push(vpcSecurityGroup['VpcSecurityGroupId']);
                        reqParams.tf['vpc_security_group_ids'].push(vpcSecurityGroup['VpcSecurityGroupId']);
                    });
                }
                reqParams.cfn['StorageEncrypted'] = obj.data.StorageEncrypted;
                reqParams.tf['storage_encrypted'] = obj.data.StorageEncrypted;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                reqParams.tf['kms_key_id'] = obj.data.KmsKeyId;

                /*
                TODO:
                MasterUserPassword: String
                SnapshotIdentifier: String
                Tags: 
                    - Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('docdb', obj.id),
                    'region': obj.region,
                    'service': 'docdb',
                    'type': 'AWS::DocDB::DBCluster',
                    'terraformType': 'aws_docdb_cluster',
                    'options': reqParams
                });
            } else if (obj.type == "documentdb.instance") {
                reqParams.cfn['DBInstanceIdentifier'] = obj.data.DBInstanceIdentifier;
                reqParams.tf['identifier'] = obj.data.DBInstanceIdentifier;
                reqParams.cfn['DBInstanceClass'] = obj.data.DBInstanceClass;
                reqParams.tf['instance_class'] = obj.data.DBInstanceClass;
                reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
                reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                reqParams.tf['preferred_maintenance_window'] = obj.data.PreferredMaintenanceWindow;
                reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
                reqParams.tf['auto_minor_version_upgrade'] = obj.data.AutoMinorVersionUpgrade;
                reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;
                reqParams.tf['cluster_identifier'] = obj.data.DBClusterIdentifier;

                /*
                TODO:
                Tags:
                    - Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('docdb', obj.id),
                    'region': obj.region,
                    'service': 'docdb',
                    'type': 'AWS::DocDB::DBInstance',
                    'terraformType': 'aws_docdb_cluster_instance',
                    'options': reqParams
                });
            } else if (obj.type == "documentdb.clusterparametergroup") {
                reqParams.cfn['Name'] = obj.data.DBClusterParameterGroupName;
                reqParams.tf['name'] = obj.data.DBClusterParameterGroupName;
                reqParams.cfn['Family'] = obj.data.DBParameterGroupFamily;
                reqParams.tf['family'] = obj.data.DBParameterGroupFamily;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;

                /*
                TODO:
                Parameters: Json
                Tags: 
                    - Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('docdb', obj.id),
                    'region': obj.region,
                    'service': 'docdb',
                    'type': 'AWS::DocDB::DBClusterParameterGroup',
                    'terraformType': 'aws_docdb_cluster_parameter_group',
                    'options': reqParams
                });
            } else if (obj.type == "documentdb.subnetgroup") {
                reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroupName;
                reqParams.tf['name'] = obj.data.DBSubnetGroupName;
                reqParams.cfn['DBSubnetGroupDescription'] = obj.data.DBSubnetGroupDescription;
                reqParams.tf['description'] = obj.data.DBSubnetGroupDescription;
                if (obj.data.Subnets) {
                    reqParams.cfn['SubnetIds'] = [];
                    reqParams.tf['subnet_ids'] = [];
                    obj.data.Subnets.forEach(subnet => {
                        reqParams.cfn['SubnetIds'].push(subnet.SubnetIdentifier);
                        reqParams.tf['subnet_ids'].push(subnet.SubnetIdentifier);
                    });
                }

                /*
                TODO:
                Tags: 
                    - Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('docdb', obj.id),
                    'region': obj.region,
                    'service': 'docdb',
                    'type': 'AWS::DocDB::DBSubnetGroup',
                    'terraformType': 'aws_docdb_subnet_group',
                    'options': reqParams
                });
            } else if (obj.type == "robomaker.robot") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.cfn['GreengrassGroupId'] = obj.data.greengrassGroupId;
                reqParams.cfn['Architecture'] = obj.data.architecture;
                reqParams.cfn['Fleet'] = obj.data.fleetArn;
                reqParams.cfn['Tags'] = obj.data.tags;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('robomaker', obj.id),
                    'region': obj.region,
                    'service': 'robomaker',
                    'type': 'AWS::RoboMaker::Robot',
                    'options': reqParams
                });
            } else if (obj.type == "robomaker.fleet") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.cfn['Tags'] = obj.data.tags;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('robomaker', obj.id),
                    'region': obj.region,
                    'service': 'robomaker',
                    'type': 'AWS::RoboMaker::Fleet',
                    'options': reqParams
                });
            } else if (obj.type == "robomaker.robotapplication") {
                if (obj.data.version == "$LATEST") {
                    reqParams.cfn['CurrentRevisionId'] = obj.data.revisionId;
                    reqParams.cfn['Name'] = obj.data.name;
                    if (obj.data.robotSoftwareSuite) {
                        reqParams.cfn['RobotSoftwareSuite'] = {
                            'Name': obj.data.robotSoftwareSuite.name,
                            'Version': obj.data.robotSoftwareSuite.version
                        };
                    }
                    if (obj.data.sources) {
                        reqParams.cfn['Sources'] = [];
                        obj.data.sources.forEach(source => {
                            reqParams.cfn['Sources'].push({
                                'Architecture': source.architecture,
                                'S3Bucket': source.s3Bucket,
                                'S3Key': source.s3Key
                            });
                        });
                    }
                    reqParams.cfn['Tags'] = obj.data.tags;

                    tracked_resources.push({
                        'obj': obj,
                        'logicalId': getResourceName('robomaker', obj.id),
                        'region': obj.region,
                        'service': 'robomaker',
                        'type': 'AWS::RoboMaker::RobotApplication',
                        'options': reqParams
                    });
                } else {
                    reqParams.cfn['Application'] = obj.data.arn;
                    reqParams.cfn['CurrentRevisionId'] = obj.data.revisionId;

                    tracked_resources.push({
                        'obj': obj,
                        'logicalId': getResourceName('robomaker', obj.id),
                        'region': obj.region,
                        'service': 'robomaker',
                        'type': 'AWS::RoboMaker::RobotApplicationVersion',
                        'options': reqParams
                    });
                }
            } else if (obj.type == "robomaker.simulationapplication") {
                if (obj.data.version == "$LATEST") {
                    reqParams.cfn['Name'] = obj.data.name;
                    if (obj.data.robotSoftwareSuite) {
                        reqParams.cfn['RobotSoftwareSuite'] = {
                            'Name': obj.data.robotSoftwareSuite.name,
                            'Version': obj.data.robotSoftwareSuite.version
                        };
                    }
                    if (obj.data.simulationSoftwareSuite) {
                        reqParams.cfn['SimulationSoftwareSuite'] = {
                            'Name': obj.data.simulationSoftwareSuite.name,
                            'Version': obj.data.simulationSoftwareSuite.version
                        };
                    }
                    if (obj.data.renderingEngine) {
                        reqParams.cfn['RenderingEngine'] = {
                            'Name': obj.data.renderingEngine.name,
                            'Version': obj.data.renderingEngine.version
                        };
                    }
                    if (obj.data.sources) {
                        reqParams.cfn['Sources'] = [];
                        obj.data.sources.forEach(source => {
                            reqParams.cfn['Sources'].push({
                                'Architecture': source.architecture,
                                'S3Bucket': source.s3Bucket,
                                'S3Key': source.s3Key
                            });
                        });
                    }
                    reqParams.cfn['CurrentRevisionId'] = obj.data.revisionId;
                    reqParams.cfn['Tags'] = obj.data.tags;

                    tracked_resources.push({
                        'obj': obj,
                        'logicalId': getResourceName('robomaker', obj.id),
                        'region': obj.region,
                        'service': 'robomaker',
                        'type': 'AWS::RoboMaker::SimulationApplication',
                        'options': reqParams
                    });
                } else {
                    reqParams.cfn['Application'] = obj.data.arn;
                    reqParams.cfn['CurrentRevisionId'] = obj.data.revisionId;

                    tracked_resources.push({
                        'obj': obj,
                        'logicalId': getResourceName('robomaker', obj.id),
                        'region': obj.region,
                        'service': 'robomaker',
                        'type': 'AWS::RoboMaker::SimulationApplicationVersion',
                        'options': reqParams
                    });
                }
            } else if (obj.type == "gamelift.fleet") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['BuildId'] = obj.data.BuildId;
                reqParams.tf['build_id'] = obj.data.BuildId;
                reqParams.cfn['ServerLaunchPath'] = obj.data.ServerLaunchPath;
                reqParams.cfn['ServerLaunchParameters'] = obj.data.ServerLaunchParameters;
                reqParams.cfn['LogPaths'] = obj.data.LogPaths;
                reqParams.cfn['EC2InstanceType'] = obj.data.InstanceType;
                reqParams.tf['ec2_instance_type'] = obj.data.InstanceType;

                /*
                TODO:
                DesiredEC2Instances: Integer
                EC2InboundPermissions:
                    - EC2InboundPermission
                MaxSize: Integer
                MinSize: Integer
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('gamelift', obj.id),
                    'region': obj.region,
                    'service': 'gamelift',
                    'type': 'AWS::GameLift::Fleet',
                    'terraformType': 'aws_gamelift_fleet',
                    'options': reqParams
                });
            } else if (obj.type == "gamelift.build") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['Version'] = obj.data.Version;
                reqParams.tf['version'] = obj.data.Version;

                /*
                TODO:
                StorageLocation
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('gamelift', obj.id),
                    'region': obj.region,
                    'service': 'gamelift',
                    'type': 'AWS::GameLift::Build',
                    'terraformType': 'aws_gamelift_build',
                    'options': reqParams
                });
            } else if (obj.type == "gamelift.alias") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['RoutingStrategy'] = obj.data.RoutingStrategy;
                reqParams.tf['routing_strategy'] = {
                    'message': obj.data.RoutingStrategy.Message,
                    'type': obj.data.RoutingStrategy.Type
                };

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('gamelift', obj.id),
                    'region': obj.region,
                    'service': 'gamelift',
                    'type': 'AWS::GameLift::Alias',
                    'terraformType': 'aws_gamelift_alias',
                    'options': reqParams
                });
            } else if (obj.type == "amazonmq.broker") {
                reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
                reqParams.cfn['BrokerName'] = obj.data.BrokerName;
                reqParams.cfn['DeploymentMode'] = obj.data.DeploymentMode;
                reqParams.cfn['EngineType'] = obj.data.EngineType;
                reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
                reqParams.cfn['HostInstanceType'] = obj.data.HostInstanceType;
                reqParams.cfn['PubliclyAccessible'] = obj.data.PubliclyAccessible;
                if (obj.data.Configurations && obj.data.Configurations.Current) {
                    reqParams.cfn['Configuration'] = {
                        'Id': obj.data.Configurations.Current.Id,
                        'Revision': obj.data.Configurations.Current.Revision
                    };
                }
                reqParams.cfn['MaintenanceWindowStartTime'] = obj.data.MaintenanceWindowStartTime;
                if (obj.data.Logs) {
                    reqParams.cfn['Logs'] = {
                        'Audit': obj.data.Logs.Audit,
                        'General': obj.data.Logs.General
                    };
                }
                reqParams.cfn['SecurityGroups'] = obj.data.SecurityGroups;
                reqParams.cfn['SubnetIds'] = obj.data.SubnetIds;
                if (obj.data.Tags) {
                    reqParams.cfn['Tags'] = [];
                    Object.keys(obj.data.Tags).forEach(tagKey => {
                        reqParams.cfn['Tags'].push({
                            'Key': tagKey,
                            'Value': obj.data.Tags[tagKey]
                        });
                    });
                }
                if (obj.data.Users) {
                    reqParams.cfn['Users'] = [];
                    obj.data.Users.forEach(user => {
                        reqParams.cfn['Users'].push({
                            'Username': user.Username
                        });
                    });
                }

                /*
                TODO:
                Users: 
                    - User
                        Password
                        Groups
                        ConsoleAccess
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('amazonmq', obj.id),
                    'region': obj.region,
                    'service': 'amazonmq',
                    'type': 'AWS::AmazonMQ::Broker',
                    'options': reqParams
                });
            } else if (obj.type == "amazonmq.configuration") {
                reqParams.cfn['Data'] = obj.data.Data;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['EngineType'] = obj.data.EngineType;
                reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
                reqParams.cfn['Name'] = obj.data.Name;
                if (obj.data.Tags) {
                    reqParams.cfn['Tags'] = [];
                    Object.keys(obj.data.Tags).forEach(tagKey => {
                        reqParams.cfn['Tags'].push({
                            'Key': tagKey,
                            'Value': obj.data.Tags[tagKey]
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('amazonmq', obj.id),
                    'region': obj.region,
                    'service': 'amazonmq',
                    'type': 'AWS::AmazonMQ::Configuration',
                    'options': reqParams
                });
            } else if (obj.type == "amazonmq.configurationassociation") {
                reqParams.cfn['Broker'] = obj.data.Broker;
                reqParams.cfn['Configuration'] = {
                    'Id': obj.data.Configuration.Id,
                    'Revision': obj.data.Configuration.Revision
                };

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('amazonmq', obj.id),
                    'region': obj.region,
                    'service': 'amazonmq',
                    'type': 'AWS::AmazonMQ::ConfigurationAssociation',
                    'options': reqParams
                });
            } else if (obj.type == "config.configrule") {
                reqParams.cfn['ConfigRuleName'] = obj.data.ConfigRuleName;
                reqParams.tf['name'] = obj.data.ConfigRuleName;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['Scope'] = obj.data.Scope;
                if (obj.data.Scope) {
                    reqParams.tf['scope'] = {
                        'compliance_resource_id': obj.data.Scope.ComplianceResourceId,
                        'compliance_resource_types': obj.data.Scope.ComplianceResourceTypes,
                        'tag_key': obj.data.Scope.TagKey,
                        'tag_value': obj.data.Scope.TagValue
                    };
                }
                reqParams.cfn['Source'] = obj.data.Source;
                if (obj.data.Source) {
                    var sourcedetail = null;
                    if (obj.data.Source.SourceDetails) {
                        sourcedetail = {
                            'event_source': obj.data.Source.SourceDetails.EventSource,
                            'maximum_execution_frequency': obj.data.Source.SourceDetails.MaximumExecutionFrequency,
                            'message_type': obj.data.Source.SourceDetails.MessageType
                        };
                    }
                    reqParams.tf['source'] = {
                        'owner': obj.data.Source.Owner,
                        'source_identifier': obj.data.Source.SourceIdentifier,
                        'source_detail': sourcedetail
                    };
                }
                reqParams.cfn['InputParameters'] = obj.data.InputParameters;
                reqParams.tf['input_parameters'] = obj.data.InputParameters;
                reqParams.cfn['MaximumExecutionFrequency'] = obj.data.MaximumExecutionFrequency;
                reqParams.tf['maximum_execution_frequency'] = obj.data.MaximumExecutionFrequency;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('config', obj.id),
                    'region': obj.region,
                    'service': 'config',
                    'type': 'AWS::Config::ConfigRule',
                    'terraformType': 'aws_config_config_rule',
                    'options': reqParams
                });
            } else if (obj.type == "config.configurationaggregator") {
                reqParams.cfn['ConfigurationAggregatorName'] = obj.data.ConfigurationAggregatorName;
                reqParams.tf['name'] = obj.data.ConfigurationAggregatorName;
                if (obj.data.AccountAggregationSources) {
                    reqParams.cfn['AccountAggregationSources'] = [];
                    reqParams.tf['account_aggregation_source'] = [];
                    obj.data.AccountAggregationSources.forEach(accountAggregationSource => {
                        reqParams.cfn['AccountAggregationSources'].push({
                            'AllAwsRegions': accountAggregationSource.AllAwsRegions,
                            'AwsRegions': accountAggregationSource.AwsRegions,
                            'AccountIds': accountAggregationSource.AccountIds
                        });
                        reqParams.tf['account_aggregation_source'].push({
                            'all_regions': accountAggregationSource.AllAwsRegions,
                            'regions': accountAggregationSource.AwsRegions,
                            'account_ids': accountAggregationSource.AccountIds
                        });
                    });
                }
                if (obj.data.OrganizationAggregationSource) {
                    reqParams.cfn['OrganizationAggregationSource'] = {
                        'AllAwsRegions': obj.data.OrganizationAggregationSource.AllAwsRegions,
                        'AwsRegions': obj.data.OrganizationAggregationSource.AwsRegions,
                        'RoleArn': obj.data.OrganizationAggregationSource.RoleArn
                    };
                    reqParams.tf['organization_aggregation_source'] = {
                        'all_regions': obj.data.OrganizationAggregationSource.AllAwsRegions,
                        'regions': obj.data.OrganizationAggregationSource.AwsRegions,
                        'role_arn': obj.data.OrganizationAggregationSource.RoleArn
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('config', obj.id),
                    'region': obj.region,
                    'service': 'config',
                    'type': 'AWS::Config::ConfigurationAggregator',
                    'terraformType': 'aws_config_configuration_aggregator',
                    'options': reqParams
                });
            } else if (obj.type == "config.configurationrecorder") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.tf['name'] = obj.data.name;
                if (obj.data.recordingGroup) {
                    reqParams.cfn['RecordingGroup'] = {
                        'AllSupported': obj.data.recordingGroup.allSupported,
                        'IncludeGlobalResourceTypes': obj.data.recordingGroup.includeGlobalResourceTypes,
                        'ResourceTypes': obj.data.recordingGroup.resourceTypes
                    };
                    reqParams.tf['recording_group'] = {
                        'all_supported': obj.data.recordingGroup.allSupported,
                        'include_global_resource_types': obj.data.recordingGroup.includeGlobalResourceTypes,
                        'resource_types': obj.data.recordingGroup.resourceTypes
                    };
                }
                reqParams.cfn['RoleARN'] = obj.data.roleARN;
                reqParams.tf['role_arn'] = obj.data.roleARN;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('config', obj.id),
                    'region': obj.region,
                    'service': 'config',
                    'type': 'AWS::Config::ConfigurationRecorder',
                    'terraformType': 'aws_config_configuration_recorder',
                    'options': reqParams
                });
            } else if (obj.type == "config.aggregationauthorization") {
                reqParams.cfn['AuthorizedAccountId'] = obj.data.AuthorizedAccountId;
                reqParams.tf['account_id'] = obj.data.AuthorizedAccountId;
                reqParams.cfn['AuthorizedAwsRegion'] = obj.data.AuthorizedAwsRegion;
                reqParams.tf['region'] = obj.data.AuthorizedAwsRegion;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('config', obj.id),
                    'region': obj.region,
                    'service': 'config',
                    'type': 'AWS::Config::AggregationAuthorization',
                    'terraformType': 'aws_config_aggregate_authorization',
                    'options': reqParams
                });
            } else if (obj.type == "config.deliverychannel") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.tf['name'] = obj.data.name;
                reqParams.cfn['S3BucketName'] = obj.data.s3BucketName;
                reqParams.tf['s3_bucket_name'] = obj.data.s3BucketName;
                reqParams.cfn['S3KeyPrefix'] = obj.data.s3KeyPrefix;
                reqParams.tf['s3_key_prefix'] = obj.data.s3KeyPrefix;
                reqParams.cfn['SnsTopicARN'] = obj.data.snsTopicARN;
                reqParams.tf['sns_topic_arn'] = obj.data.snsTopicARN;
                if (obj.data.configSnapshotDeliveryProperties) {
                    reqParams.cfn['ConfigSnapshotDeliveryProperties'] = {
                        'DeliveryFrequency': obj.data.configSnapshotDeliveryProperties.deliveryFrequency
                    };
                    reqParams.tf['snapshot_delivery_properties'] = {
                        'delivery_frequency': obj.data.configSnapshotDeliveryProperties.deliveryFrequency
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('config', obj.id),
                    'region': obj.region,
                    'service': 'config',
                    'type': 'AWS::Config::DeliveryChannel',
                    'terraformType': 'aws_config_delivery_channel',
                    'options': reqParams
                });
            } else if (obj.type == "budgets.budget") {
                reqParams.cfn['Budget'] = {
                    'BudgetLimit': obj.data.BudgetLimit,
                    'TimePeriod': obj.data.TimePeriod,
                    'TimeUnit': obj.data.TimeUnit,
                    'CostFilters': obj.data.CostFilters,
                    'BudgetName': obj.data.BudgetName,
                    'CostTypes': obj.data.CostTypes,
                    'BudgetType': obj.data.BudgetType
                };
                if (obj.data.BudgetLimit) {
                    reqParams.tf['limit_amount'] = obj.data.BudgetLimit.Amount;
                    reqParams.tf['limit_unit'] = obj.data.BudgetLimit.Unit;
                }
                if (obj.data.TimePeriod) {
                    reqParams.tf['time_period_end'] = obj.data.TimePeriod.End;
                    reqParams.tf['time_period_start'] = obj.data.TimePeriod.Start;
                }
                reqParams.tf['time_unit'] = obj.data.TimeUnit;
                reqParams.tf['cost_filters'] = obj.data.CostFilters;
                reqParams.tf['name'] = obj.data.BudgetName;
                if (obj.data.CostTypes) {
                    reqParams.tf['cost_types'] = {
                        'include_support': obj.data.CostTypes.IncludeSupport,
                        'include_other_subscription': obj.data.CostTypes.IncludeOtherSubscription,
                        'include_tax': obj.data.CostTypes.IncludeTax,
                        'include_subscription': obj.data.CostTypes.IncludeSubscription,
                        'use_blended': obj.data.CostTypes.UseBlended,
                        'include_upfront': obj.data.CostTypes.IncludeUpfront,
                        'include_discount': obj.data.CostTypes.IncludeDiscount,
                        'include_credit': obj.data.CostTypes.IncludeCredit,
                        'include_recurring': obj.data.CostTypes.IncludeRecurring,
                        'use_amortized': obj.data.CostTypes.UseAmortized,
                        'include_refund': obj.data.CostTypes.IncludeRefund
                    }
                }
                reqParams.tf['budget_type'] = obj.data.BudgetType;

                /*
                TODO:
                NotificationsWithSubscribers
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('budgets', obj.id),
                    'region': obj.region,
                    'service': 'budgets',
                    'type': 'AWS::Budgets::Budget',
                    'terraformType': 'aws_budgets_budget',
                    'options': reqParams
                });
            } else if (obj.type == "waf.webacl") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['MetricName'] = obj.data.MetricName;
                reqParams.tf['metric_name'] = obj.data.MetricName;
                reqParams.cfn['DefaultAction'] = obj.data.DefaultAction;
                if (obj.data.DefaultAction) {
                    reqParams.tf['default_action'] = {
                        'type': obj.data.DefaultAction.Type
                    };
                }
                if (obj.data.Rules) {
                    reqParams.cfn['Rules'] = [];
                    reqParams.tf['rules'] = [];
                    obj.data.Rules.forEach(rule => {
                        var tfaction = null;
                        if (rule.Action) {
                            tfaction = {
                                'type': rule.Action.Type
                            };
                        }
                        reqParams.cfn['Rules'].push({
                            'Priority': rule.Priority,
                            'RuleId': rule.RuleId,
                            'Action': rule.Action
                        });
                        reqParams.tf['rules'].push({
                            'priority': rule.Priority,
                            'rule_id': rule.RuleId,
                            'action': tfaction
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('waf', obj.id),
                    'region': obj.region,
                    'service': 'waf',
                    'type': 'AWS::WAF::WebACL',
                    'terraformType': 'aws_waf_web_acl',
                    'options': reqParams
                });
            } else if (obj.type == "waf.rule") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['MetricName'] = obj.data.MetricName;
                reqParams.tf['metric_name'] = obj.data.MetricName;
                reqParams.cfn['Predicates'] = obj.data.Predicates;
                if (obj.data.Predicates) {
                    reqParams.tf['predicates'] = [];
                    obj.data.Predicates.forEach(predicate => {
                        reqParams.tf['predicates'].push({
                            'data_id': predicate.DataId,
                            'negated': predicate.Negated,
                            'type': predicate.Type
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('waf', obj.id),
                    'region': obj.region,
                    'service': 'waf',
                    'type': 'AWS::WAF::Rule',
                    'terraformType': 'aws_waf_rule',
                    'options': reqParams
                });
            } else if (obj.type == "waf.xssmatchset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['XssMatchTuples'] = obj.data.XssMatchTuples;
                if (obj.data.XssMatchTuples) {
                    reqParams.tf['xss_match_tuples'] = [];
                    obj.data.XssMatchTuples.forEach(xssmatchtuple => {
                        reqParams.tf['xss_match_tuples'].push({
                            'field_to_match': {
                                'data': xssmatchtuple.FieldToMatch.Data,
                                'type': xssmatchtuple.FieldToMatch.Type
                            },
                            'text_transformation': xssmatchtuple.TextTransformation
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('waf', obj.id),
                    'region': obj.region,
                    'service': 'waf',
                    'type': 'AWS::WAF::XssMatchSet',
                    'terraformType': 'aws_waf_xss_match_set',
                    'options': reqParams
                });
            } else if (obj.type == "waf.ipset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['IPSetDescriptors'] = obj.data.IPSetDescriptors;
                if (obj.data.IPSetDescriptors) {
                    reqParams.tf['ip_set_descriptors'] = [];
                    obj.data.IPSetDescriptors.forEach(ipsetdescriptor => {
                        reqParams.tf['ip_set_descriptors'].push({
                            'type': ipsetdescriptor.Type,
                            'value': ipsetdescriptor.Value
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('waf', obj.id),
                    'region': obj.region,
                    'service': 'waf',
                    'type': 'AWS::WAF::IPSet',
                    'terraformType': 'aws_waf_ipset',
                    'options': reqParams
                });
            } else if (obj.type == "waf.sizeconstraintset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['name'] = obj.data.Name;
                reqParams.cfn['size_constraints'] = obj.data.SizeConstraints;
                if (obj.data.SizeConstraints) {
                    reqParams.cfn['size_constraints'] = [];
                    obj.data.SizeConstraints.forEach(sizeconstraints => {
                        reqParams.cfn['size_constraints'].push({
                            'text_transformation': sizeconstraints.TextTransformation,
                            'comparison_operator': sizeconstraints.ComparisonOperator,
                            'size': sizeconstraints.Size,
                            'field_to_match': {
                                'data': sizeconstraints.FieldToMatch.Data,
                                'type': sizeconstraints.FieldToMatch.Type
                            }
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('waf', obj.id),
                    'region': obj.region,
                    'service': 'waf',
                    'type': 'AWS::WAF::SizeConstraintSet',
                    'terraformType': 'aws_waf_size_constraint_set',
                    'options': reqParams
                });
            } else if (obj.type == "waf.sqlinjectionmatchset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['SqlInjectionMatchTuples'] = obj.data.SqlInjectionMatchTuples;
                if (obj.data.SqlInjectionMatchTuples) {
                    reqParams.tf['sql_injection_match_tuples'] = [];
                    obj.data.SqlInjectionMatchTuples.forEach(sqlinjectionmatchtuples => {
                        reqParams.tf['sql_injection_match_tuples'] = {
                            'text_transformation': sqlinjectionmatchtuples.TextTransformation,
                            'field_to_match': {
                                'data': sqlinjectionmatchtuples.FieldToMatch.Data,
                                'type': sqlinjectionmatchtuples.FieldToMatch.Type,
                            }
                        }
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('waf', obj.id),
                    'region': obj.region,
                    'service': 'waf',
                    'type': 'AWS::WAF::SqlInjectionMatchSet',
                    'terraformType': 'aws_waf_sql_injection_match_set',
                    'options': reqParams
                });
            } else if (obj.type == "waf.bytematchset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['ByteMatchTuples'] = obj.data.ByteMatchTuples;
                if (obj.data.ByteMatchTuples) {
                    reqParams.tf['byte_match_tuples'] = [];
                    obj.data.ByteMatchTuples.forEach(bytematchtuples => {
                        reqParams.tf['byte_match_tuples'].push({
                            'text_transformation': bytematchtuples.TextTransformation,
                            'target_string': bytematchtuples.TargetString,
                            'positional_constraint': bytematchtuples.PositionalConstraint,
                            'field_to_match': {
                                'type': bytematchtuples.FieldToMatch.Type,
                                'data': bytematchtuples.FieldToMatch.Data
                            }
                        });
                    });
                }

                /*
                SKIPPED:
                ByteMatchTuples:
                - TargetStringBase64
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('waf', obj.id),
                    'region': obj.region,
                    'service': 'waf',
                    'type': 'AWS::WAF::ByteMatchSet',
                    'terraformType': 'aws_waf_sql_injection_match_set',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.webacl") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['MetricName'] = obj.data.MetricName;
                reqParams.tf['metric_name'] = obj.data.MetricName;
                reqParams.cfn['DefaultAction'] = obj.data.DefaultAction;
                if (obj.data.DefaultAction) {
                    reqParams.tf['default_action'] = {
                        'type': obj.data.DefaultAction.Type
                    };
                }
                if (obj.data.Rules) {
                    reqParams.cfn['Rules'] = [];
                    reqParams.tf['rules'] = [];
                    obj.data.Rules.forEach(rule => {
                        var tfaction = null;
                        if (rule.Action) {
                            tfaction = {
                                'type': rule.Action.Type
                            };
                        }
                        reqParams.cfn['Rules'].push({
                            'Priority': rule.Priority,
                            'RuleId': rule.RuleId,
                            'Action': rule.Action
                        });
                        reqParams.tf['rules'].push({
                            'priority': rule.Priority,
                            'rule_id': rule.RuleId,
                            'action': tfaction
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::WebACL',
                    'terraformType': 'aws_wafregional_web_acl',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.webaclassociation") {
                reqParams.cfn['ResourceArn'] = obj.data.ResourceArn;
                reqParams.tf['resource_arn'] = obj.data.ResourceArn;
                reqParams.cfn['WebACLId'] = obj.data.WebACLId;
                reqParams.tf['web_acl_id'] = obj.data.WebACLId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::WebACLAssociation',
                    'terraformType': 'aws_wafregional_web_acl_association',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.rule") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['MetricName'] = obj.data.MetricName;
                reqParams.tf['metric_name'] = obj.data.MetricName;
                reqParams.cfn['Predicates'] = obj.data.Predicates;
                if (obj.data.Predicates) {
                    reqParams.tf['predicates'] = [];
                    obj.data.Predicates.forEach(predicate => {
                        reqParams.tf['predicates'].push({
                            'data_id': predicate.DataId,
                            'negated': predicate.Negated,
                            'type': predicate.Type
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::Rule',
                    'terraformType': 'aws_wafregional_rule',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.xssmatchset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['XssMatchTuples'] = obj.data.XssMatchTuples;
                if (obj.data.XssMatchTuples) {
                    reqParams.tf['xss_match_tuples'] = [];
                    obj.data.XssMatchTuples.forEach(xssmatchtuple => {
                        reqParams.tf['xss_match_tuples'].push({
                            'field_to_match': {
                                'data': xssmatchtuple.FieldToMatch.Data,
                                'type': xssmatchtuple.FieldToMatch.Type
                            },
                            'text_transformation': xssmatchtuple.TextTransformation
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::XssMatchSet',
                    'terraformType': 'aws_wafregional_xss_match_set',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.ipset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['IPSetDescriptors'] = obj.data.IPSetDescriptors;
                if (obj.data.IPSetDescriptors) {
                    reqParams.tf['ip_set_descriptors'] = [];
                    obj.data.IPSetDescriptors.forEach(ipsetdescriptor => {
                        reqParams.tf['ip_set_descriptors'].push({
                            'type': ipsetdescriptor.Type,
                            'value': ipsetdescriptor.Value
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::IPSet',
                    'terraformType': 'aws_wafregional_ipset',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.sizeconstraintset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['name'] = obj.data.Name;
                reqParams.cfn['size_constraints'] = obj.data.SizeConstraints;
                if (obj.data.SizeConstraints) {
                    reqParams.cfn['size_constraints'] = [];
                    obj.data.SizeConstraints.forEach(sizeconstraints => {
                        reqParams.cfn['size_constraints'].push({
                            'text_transformation': sizeconstraints.TextTransformation,
                            'comparison_operator': sizeconstraints.ComparisonOperator,
                            'size': sizeconstraints.Size,
                            'field_to_match': {
                                'data': sizeconstraints.FieldToMatch.Data,
                                'type': sizeconstraints.FieldToMatch.Type
                            }
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::SizeConstraintSet',
                    'terraformType': 'aws_wafregional_size_constraint_set',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.sqlinjectionmatchset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['SqlInjectionMatchTuples'] = obj.data.SqlInjectionMatchTuples;
                if (obj.data.SqlInjectionMatchTuples) {
                    reqParams.tf['sql_injection_match_tuples'] = [];
                    obj.data.SqlInjectionMatchTuples.forEach(sqlinjectionmatchtuples => {
                        reqParams.tf['sql_injection_match_tuples'] = {
                            'text_transformation': sqlinjectionmatchtuples.TextTransformation,
                            'field_to_match': {
                                'data': sqlinjectionmatchtuples.FieldToMatch.Data,
                                'type': sqlinjectionmatchtuples.FieldToMatch.Type,
                            }
                        }
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::SqlInjectionMatchSet',
                    'terraformType': 'aws_wafregional_sql_injection_match_set',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.bytematchset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['ByteMatchTuples'] = obj.data.ByteMatchTuples;
                if (obj.data.ByteMatchTuples) {
                    reqParams.tf['byte_match_tuples'] = [];
                    obj.data.ByteMatchTuples.forEach(bytematchtuples => {
                        reqParams.tf['byte_match_tuples'].push({
                            'text_transformation': bytematchtuples.TextTransformation,
                            'target_string': bytematchtuples.TargetString,
                            'positional_constraint': bytematchtuples.PositionalConstraint,
                            'field_to_match': {
                                'type': bytematchtuples.FieldToMatch.Type,
                                'data': bytematchtuples.FieldToMatch.Data
                            }
                        });
                    });
                }

                /*
                SKIPPED:
                ByteMatchTuples:
                - TargetStringBase64
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::ByteMatchSet',
                    'terraformType': 'aws_wafregional_byte_match_set',
                    'options': reqParams
                });
            } else if (obj.type == "directoryservice.simplead") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['ShortName'] = obj.data.ShortName;
                reqParams.tf['short_name'] = obj.data.ShortName;
                reqParams.cfn['Size'] = obj.data.Size;
                reqParams.tf['size'] = obj.data.Size;
                if (obj.data.Alias && obj.data.Alias != obj.data.DirectoryId) {
                    reqParams.cfn['CreateAlias'] = true;
                    reqParams.tf['alias'] = obj.data.Alias;
                }
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['EnableSso'] = obj.data.SsoEnabled;
                reqParams.tf['enable_sso'] = obj.data.SsoEnabled;
                if (obj.data.VpcSettings) {
                    reqParams.cfn['VpcSettings'] = {
                        'VpcId': obj.data.VpcSettings.VpcId,
                        'SubnetIds': obj.data.VpcSettings.SubnetIds
                    };
                    reqParams.tf['vpc_settings'] = {
                        'vpc_id': obj.data.VpcSettings.VpcId,
                        'subnet_ids': obj.data.VpcSettings.SubnetIds
                    };
                }

                /*
                TODO:
                Password: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('directoryservice', obj.id),
                    'region': obj.region,
                    'service': 'directoryservice',
                    'type': 'AWS::DirectoryService::SimpleAD',
                    'terraformType': 'aws_directory_service_directory',
                    'options': reqParams
                });
            } else if (obj.type == "directoryservice.microsoftad") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['ShortName'] = obj.data.ShortName;
                reqParams.tf['short_name'] = obj.data.ShortName;
                reqParams.cfn['Edition'] = obj.data.Edition;
                reqParams.tf['edition'] = obj.data.Edition;
                if (obj.data.Alias && obj.data.Alias != obj.data.DirectoryId) {
                    reqParams.cfn['CreateAlias'] = true;
                    reqParams.tf['alias'] = obj.data.Alias;
                }
                reqParams.cfn['EnableSso'] = obj.data.SsoEnabled;
                reqParams.tf['enable_sso'] = obj.data.SsoEnabled;
                if (obj.data.VpcSettings) {
                    reqParams.cfn['VpcSettings'] = {
                        'VpcId': obj.data.VpcSettings.VpcId,
                        'SubnetIds': obj.data.VpcSettings.SubnetIds
                    };
                    reqParams.tf['vpc_settings'] = {
                        'vpc_id': obj.data.VpcSettings.VpcId,
                        'subnet_ids': obj.data.VpcSettings.SubnetIds
                    };
                }

                /*
                TODO:
                Password: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('directoryservice', obj.id),
                    'region': obj.region,
                    'service': 'directoryservice',
                    'type': 'AWS::DirectoryService::MicrosoftAD',
                    'terraformType': 'aws_directory_service_directory',
                    'options': reqParams
                });
            } else if (obj.type == "elasticsearch.domain") {
                reqParams.cfn['DomainName'] = obj.data.DomainName;
                reqParams.tf['domain_name'] = obj.data.DomainName;
                reqParams.cfn['ElasticsearchVersion'] = obj.data.ElasticsearchVersion;
                reqParams.tf['elasticsearch_version'] = obj.data.ElasticsearchVersion;
                if (obj.data.ElasticsearchClusterConfig) {
                    reqParams.cfn['ElasticsearchClusterConfig'] = {
                        'DedicatedMasterCount': obj.data.ElasticsearchClusterConfig.DedicatedMasterCount,
                        'DedicatedMasterEnabled': obj.data.ElasticsearchClusterConfig.DedicatedMasterEnabled,
                        'DedicatedMasterType': obj.data.ElasticsearchClusterConfig.DedicatedMasterType,
                        'InstanceCount': obj.data.ElasticsearchClusterConfig.InstanceCount,
                        'InstanceType': obj.data.ElasticsearchClusterConfig.InstanceType,
                        'ZoneAwarenessEnabled': obj.data.ElasticsearchClusterConfig.ZoneAwarenessEnabled
                    };
                    reqParams.tf['cluster_config'] = {
                        'dedicated_master_count': obj.data.ElasticsearchClusterConfig.DedicatedMasterCount,
                        'dedicated_master_enabled': obj.data.ElasticsearchClusterConfig.DedicatedMasterEnabled,
                        'dedicated_master_type': obj.data.ElasticsearchClusterConfig.DedicatedMasterType,
                        'nstance_count': obj.data.ElasticsearchClusterConfig.InstanceCount,
                        'instance_type': obj.data.ElasticsearchClusterConfig.InstanceType,
                        'zone_awareness_enabled': obj.data.ElasticsearchClusterConfig.ZoneAwarenessEnabled
                    };
                }
                reqParams.cfn['AccessPolicies'] = obj.data.AccessPolicies;
                reqParams.tf['access_policies '] = obj.data.AccessPolicies;
                reqParams.cfn['SnapshotOptions'] = obj.data.SnapshotOptions;
                if (obj.data.SnapshotOptions) {
                    reqParams.cfn['snapshot_options'] = {
                        'automated_snapshot_start_hour': obj.data.SnapshotOptions.AutomatedSnapshotStartHour
                    };
                }
                if (obj.data.VPCOptions) {
                    reqParams.cfn['VPCOptions'] = {
                        'SecurityGroupIds': obj.data.VPCOptions.SecurityGroupIds,
                        'SubnetIds': obj.data.VPCOptions.SubnetIds
                    };
                    reqParams.tf['vpc_options'] = {
                        'security_group_ids': obj.data.VPCOptions.SecurityGroupIds,
                        'subnet_ids': obj.data.VPCOptions.SubnetIds
                    };
                }
                reqParams.cfn['EncryptionAtRestOptions'] = obj.data.EncryptionAtRestOptions;
                if (obj.data.EncryptionAtRestOptions) {
                    reqParams.tf['encrypt_at_rest'] = {
                        'enabled': obj.data.EncryptionAtRestOptions.Enabled,
                        'kms_key_id': obj.data.EncryptionAtRestOptions.KmsKeyId
                    };
                }
                reqParams.cfn['NodeToNodeEncryptionOptions'] = obj.data.NodeToNodeEncryptionOptions;
                if (obj.data.NodeToNodeEncryptionOptions) {
                    reqParams.tf['node_to_node_encryption'] = {
                        'enabled': obj.data.NodeToNodeEncryptionOptions.Enabled
                    };
                }
                reqParams.cfn['AdvancedOptions'] = obj.data.AdvancedOptions;
                reqParams.tf['advanced_options'] = obj.data.AdvancedOptions;
                reqParams.cfn['EBSOptions'] = obj.data.EBSOptions;
                if (obj.data.EBSOptions) {
                    reqParams.tf['ebs_options'] = {
                        'ebs_enabled': obj.data.EBSOptions.EBSEnabled,
                        'volume_type': obj.data.EBSOptions.VolumeType,
                        'volume_size': obj.data.EBSOptions.VolumeSize,
                        'iops': obj.data.EBSOptions.Iops
                    };
                }

                /*
                TODO:
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('elasticsearch', obj.id),
                    'region': obj.region,
                    'service': 'elasticsearch',
                    'type': 'AWS::Elasticsearch::Domain',
                    'terraformType': 'aws_elasticsearch_domain',
                    'options': reqParams
                });
            } else if (obj.type == "ssm.document") {
                reqParams.cfn['Content'] = obj.data.Content;
                reqParams.tf['content'] = obj.data.Content;
                reqParams.cfn['DocumentType'] = obj.data.DocumentType;
                reqParams.tf['document_type'] = obj.data.DocumentType;
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ssm', obj.id),
                    'region': obj.region,
                    'service': 'ssm',
                    'type': 'AWS::SSM::Document',
                    'terraformType': 'aws_ssm_document',
                    'options': reqParams
                });
            } else if (obj.type == "ssm.parameter") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['Type'] = obj.data.Type;
                reqParams.tf['type'] = obj.data.Type;
                reqParams.cfn['Value'] = obj.data.Value;
                reqParams.tf['value'] = obj.data.Value;

                /*
                SKIPPED:
                AllowedPattern
                Description
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ssm', obj.id),
                    'region': obj.region,
                    'service': 'ssm',
                    'type': 'AWS::SSM::Parameter',
                    'terraformType': 'aws_ssm_parameter',
                    'options': reqParams
                });
            } else if (obj.type == "ssm.patchbaseline") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['OperatingSystem'] = obj.data.OperatingSystem;
                reqParams.tf['OperatingSystem'] = obj.data.OperatingSystem;
                reqParams.cfn['GlobalFilters'] = obj.data.GlobalFilters;
                if (obj.data.GlobalFilters && obj.data.GlobalFilters.PatchFilters) {
                    reqParams.tf['global_filter'] = [];
                    obj.data.GlobalFilters.PatchFilters.forEach(globalfilter => {
                        reqParams.tf['global_filter'].push({
                            'key': globalfilter.Key,
                            'values': globalfilter.Values
                        });
                    });
                }
                reqParams.cfn['approval_rule'] = obj.data.ApprovalRules;
                if (obj.data.ApprovalRules && obj.data.ApprovalRules.PatchRules) {
                    reqParams.tf['approval_rule'] = [];
                    obj.data.ApprovalRules.PatchRules.forEach(approvalrule => {
                        var patchfiltergroup = null;
                        if (approvalrule.PatchFilterGroup && approvalrule.PatchFilterGroup.PatchFilters) {
                            patchfiltergroup = [];
                            approvalrule.PatchFilterGroup.PatchFilters.forEach(patchfilter => {
                                patchfiltergroup.push({
                                    'key': patchfilter.Key,
                                    'values': patchfilter.Values
                                });
                            });
                        }
                        reqParams.tf['approval_rule'].push({
                            'patch_filter': patchfiltergroup,
                            'approve_after_days': approvalrule.ApproveAfterDays,
                            'compliance_level': approvalrule.ComplianceLevel,
                            'enable_non_security': approvalrule.EnableNonSecurity
                        });
                    });
                }
                reqParams.cfn['ApprovedPatches'] = obj.data.ApprovedPatches;
                reqParams.tf['approved_patches'] = obj.data.ApprovedPatches;
                reqParams.cfn['ApprovedPatchesComplianceLevel'] = obj.data.ApprovedPatchesComplianceLevel;
                reqParams.tf['approved_patches_compliance_level'] = obj.data.ApprovedPatchesComplianceLevel;
                reqParams.cfn['ApprovedPatchesEnableNonSecurity'] = obj.data.ApprovedPatchesEnableNonSecurity;
                reqParams.cfn['RejectedPatches'] = obj.data.RejectedPatches;
                reqParams.tf['rejected_patches'] = obj.data.RejectedPatches;
                reqParams.cfn['RejectedPatchesAction'] = [obj.data.RejectedPatchesAction]; // TODO: WTF?
                reqParams.cfn['PatchGroups'] = obj.data.PatchGroups;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['Sources'] = obj.data.Sources;

                /*
                TODO:
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ssm', obj.id),
                    'region': obj.region,
                    'service': 'ssm',
                    'type': 'AWS::SSM::PatchBaseline',
                    'terraformType': 'aws_ssm_patch_baseline',
                    'options': reqParams
                });
            } else if (obj.type == "ssm.association") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['InstanceId'] = obj.data.InstanceId;
                reqParams.tf['instance_id'] = obj.data.InstanceId;
                reqParams.cfn['DocumentVersion'] = obj.data.DocumentVersion;
                reqParams.tf['document_version'] = obj.data.DocumentVersion;
                reqParams.cfn['Parameters'] = obj.data.Parameters;
                reqParams.tf['parameters'] = obj.data.Parameters;
                reqParams.cfn['ScheduleExpression'] = obj.data.ScheduleExpression;
                reqParams.tf['schedule_expression'] = obj.data.ScheduleExpression;
                if (obj.data.OutputLocation && obj.data.OutputLocation.S3Location) {
                    reqParams.cfn['OutputLocation'] = {
                        'S3Location': {
                            'OutputS3BucketName': obj.data.OutputLocation.S3Location.OutputS3BucketName,
                            'OutputS3KeyPrefix': obj.data.OutputLocation.S3Location.OutputS3KeyPrefix
                        }
                    };
                    reqParams.tf['output_location'] = {
                        's3_bucket_name': obj.data.OutputLocation.S3Location.OutputS3BucketName,
                        's3_key_prefix': obj.data.OutputLocation.S3Location.OutputS3KeyPrefix
                    };
                }
                reqParams.cfn['AssociationName'] = obj.data.AssociationName;
                reqParams.tf['association_name'] = obj.data.AssociationName;
                reqParams.cfn['Targets'] = obj.data.Targets;
                if (obj.data.Targets) {
                    reqParams.tf['targets'] = [];
                    obj.data.Targets.forEach(target => {
                        reqParams.tf['targets'].push({
                            'key': target.Key,
                            'values': target.Values
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ssm', obj.id),
                    'region': obj.region,
                    'service': 'ssm',
                    'type': 'AWS::SSM::Association',
                    'terraformType': 'aws_ssm_association',
                    'options': reqParams
                });
            } else if (obj.type == "ssm.maintenancewindow") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['StartDate'] = obj.data.StartDate;
                reqParams.tf['start_date'] = obj.data.StartDate;
                reqParams.cfn['EndDate'] = obj.data.EndDate;
                reqParams.tf['end_date'] = obj.data.EndDate;
                reqParams.cfn['Schedule'] = obj.data.Schedule;
                reqParams.tf['schedule'] = obj.data.Schedule;
                reqParams.cfn['ScheduleTimezone'] = obj.data.ScheduleTimezone;
                reqParams.tf['schedule_timezone'] = obj.data.ScheduleTimezone;
                reqParams.cfn['Duration'] = obj.data.Duration;
                reqParams.tf['duration'] = obj.data.Duration;
                reqParams.cfn['Cutoff'] = obj.data.Cutoff;
                reqParams.tf['cutoff'] = obj.data.Cutoff;
                reqParams.cfn['AllowUnassociatedTargets'] = obj.data.AllowUnassociatedTargets;
                reqParams.tf['allow_unassociated_targets'] = obj.data.AllowUnassociatedTargets;

                /*
                TODO:
                Tags:
                    - Resource Tag 
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ssm', obj.id),
                    'region': obj.region,
                    'service': 'ssm',
                    'type': 'AWS::SSM::MaintenanceWindow',
                    'terraformType': 'aws_ssm_maintenance_window',
                    'options': reqParams
                });
            } else if (obj.type == "ssm.maintenancewindowtarget") {
                reqParams.cfn['WindowId'] = obj.data.WindowId;
                reqParams.tf['window_id'] = obj.data.WindowId;
                reqParams.cfn['ResourceType'] = obj.data.ResourceType;
                reqParams.tf['resource_type'] = obj.data.ResourceType;
                reqParams.cfn['Targets'] = obj.data.Targets;
                if (obj.data.Targets) {
                    reqParams.tf['targets'] = [];
                    obj.data.Targets.forEach(target => {
                        reqParams.tf['targets'].push({
                            'key': target.Key,
                            'values': target.Values
                        });
                    });
                }
                reqParams.cfn['OwnerInformation'] = obj.data.OwnerInformation;
                reqParams.tf['owner_information'] = obj.data.OwnerInformation;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ssm', obj.id),
                    'region': obj.region,
                    'service': 'ssm',
                    'type': 'AWS::SSM::MaintenanceWindowTarget',
                    'terraformType': 'aws_ssm_maintenance_window_target',
                    'options': reqParams
                });
            } else if (obj.type == "ssm.maintenancewindowtask") {
                reqParams.cfn['WindowId'] = obj.data.WindowId;
                reqParams.tf['window_id'] = obj.data.WindowId;
                reqParams.cfn['Targets'] = obj.data.Targets;
                if (obj.data.Targets) {
                    reqParams.tf['targets'] = [];
                    obj.data.Targets.forEach(target => {
                        reqParams.tf['targets'].push({
                            'key': target.Key,
                            'values': target.Values
                        });
                    });
                }
                reqParams.cfn['TaskArn'] = obj.data.TaskArn;
                reqParams.tf['task_arn'] = obj.data.TaskArn;
                reqParams.cfn['ServiceRoleArn'] = obj.data.ServiceRoleArn;
                reqParams.tf['service_role_arn'] = obj.data.ServiceRoleArn;
                reqParams.cfn['TaskType'] = obj.data.TaskType;
                reqParams.tf['task_type'] = obj.data.TaskType;
                reqParams.cfn['TaskParameters'] = obj.data.TaskParameters;
                if (obj.data.TaskParameters) {
                    reqParams.tf['task_parameters'] = [];
                    Object.keys(obj.data.TaskParameters).forEach(target => {
                        reqParams.tf['task_parameters'].push({
                            'name': target,
                            'values': obj.data.TaskParameters[target].Values
                        });
                    });
                }
                reqParams.cfn['Priority'] = obj.data.Priority;
                reqParams.tf['priority'] = obj.data.Priority;
                reqParams.cfn['MaxConcurrency'] = obj.data.MaxConcurrency;
                reqParams.tf['max_concurrency'] = obj.data.MaxConcurrency;
                reqParams.cfn['MaxErrors'] = obj.data.MaxErrors;
                reqParams.tf['max_errors'] = obj.data.MaxErrors;
                if (obj.data.LoggingInfo) {
                    reqParams.cfn['LoggingInfo'] = {
                        'S3Bucket': obj.data.LoggingInfo.S3BucketName,
                        'Region': obj.data.LoggingInfo.S3Region,
                        'S3Prefix': obj.data.LoggingInfo.S3KeyPrefix
                    };
                    reqParams.tf['logging_info'] = {
                        's3_bucket_name': obj.data.LoggingInfo.S3BucketName,
                        's3_region': obj.data.LoggingInfo.S3Region,
                        's3_bucket_prefix': obj.data.LoggingInfo.S3KeyPrefix
                    };
                }
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                if (obj.data.TaskInvocationParameters) {
                    reqParams.cfn['TaskInvocationParameters'] = {
                        'MaintenanceWindowRunCommandParameters': obj.data.TaskInvocationParameters.RunCommand,
                        'MaintenanceWindowAutomationParameters': obj.data.TaskInvocationParameters.Automation,
                        'MaintenanceWindowStepFunctionsParameters': obj.data.TaskInvocationParameters.StepFunctions,
                        'MaintenanceWindowLambdaParameters': obj.data.TaskInvocationParameters.Lambda
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ssm', obj.id),
                    'region': obj.region,
                    'service': 'ssm',
                    'type': 'AWS::SSM::MaintenanceWindowTask',
                    'terraformType': 'aws_ssm_maintenance_window_task',
                    'options': reqParams
                });
            } else if (obj.type == "ssm.resourcedatasync") {
                reqParams.cfn['SyncName'] = obj.data.SyncName;
                reqParams.tf['name'] = obj.data.SyncName;
                reqParams.tf['s3_destination'] = {
                    'bucket_name': obj.data.S3Destination.BucketName,
                    'prefix': obj.data.S3Destination.Prefix,
                    'sync_format': obj.data.S3Destination.SyncFormat,
                    'region': obj.data.S3Destination.Region,
                    'kms_key_arn': obj.data.S3Destination.AWSKMSKeyARN,
                };
                reqParams.cfn['BucketName'] = obj.data.S3Destination.BucketName;
                reqParams.cfn['BucketPrefix'] = obj.data.S3Destination.Prefix;
                reqParams.cfn['SyncFormat'] = obj.data.S3Destination.SyncFormat;
                reqParams.cfn['BucketRegion'] = obj.data.S3Destination.Region;
                reqParams.cfn['KMSKeyArn'] = obj.data.S3Destination.AWSKMSKeyARN;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ssm', obj.id),
                    'region': obj.region,
                    'service': 'ssm',
                    'type': 'AWS::SSM::ResourceDataSync',
                    'terraformType': 'aws_ssm_resource_data_sync',
                    'options': reqParams
                });
            } else if (obj.type == "servicecatalog.cloudformationproduct") {
                reqParams.cfn['Name'] = obj.data.ProductViewDetail.ProductViewSummary.Name;
                reqParams.cfn['Owner'] = obj.data.ProductViewDetail.ProductViewSummary.Owner;
                reqParams.cfn['SupportDescription'] = obj.data.ProductViewDetail.ProductViewSummary.SupportDescription;
                reqParams.cfn['Description'] = obj.data.ProductViewDetail.ProductViewSummary.ShortDescription;
                reqParams.cfn['Distributor'] = obj.data.ProductViewDetail.ProductViewSummary.Distributor;
                reqParams.cfn['SupportEmail'] = obj.data.ProductViewDetail.ProductViewSummary.SupportEmail;
                reqParams.cfn['SupportUrl'] = obj.data.ProductViewDetail.ProductViewSummary.SupportUrl;
                reqParams.cfn['AcceptLanguage'] = 'en'; // TODO: Check for others
                reqParams.cfn['Tags'] = obj.data.Tags;

                /*
                TODO:
                ProvisioningArtifactParameters: 
                    - ProvisioningArtifactProperties
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicecatalog', obj.id),
                    'region': obj.region,
                    'service': 'servicecatalog',
                    'type': 'AWS::ServiceCatalog::CloudFormationProduct',
                    'options': reqParams
                });
            } else if (obj.type == "servicecatalog.portfolio") {
                reqParams.cfn['ProviderName'] = obj.data.PortfolioDetail.ProviderName;
                reqParams.cfn['Description'] = obj.data.PortfolioDetail.Description;
                reqParams.cfn['DisplayName'] = obj.data.PortfolioDetail.DisplayName;
                reqParams.cfn['ProviderName'] = obj.data.PortfolioDetail.ProviderName;
                reqParams.cfn['Tags'] = obj.data.Tags;

                /*
                TODO:
                AcceptLanguage: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicecatalog', obj.id),
                    'region': obj.region,
                    'service': 'servicecatalog',
                    'type': 'AWS::ServiceCatalog::Portfolio',
                    'options': reqParams
                });
            } else if (obj.type == "servicecatalog.portfolioprincipalassociation") {
                reqParams.cfn['PrincipalARN'] = obj.data.principal.PrincipalARN;
                reqParams.cfn['PrincipalType'] = obj.data.principal.PrincipalType;
                reqParams.cfn['PortfolioId'] = obj.data.portfolio.Id;

                /*
                TODO:
                AcceptLanguage: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicecatalog', obj.id),
                    'region': obj.region,
                    'service': 'servicecatalog',
                    'type': 'AWS::ServiceCatalog::PortfolioPrincipalAssociation',
                    'options': reqParams
                });
            } else if (obj.type == "servicecatalog.launchnotificationconstraint") {
                reqParams.cfn['Description'] = obj.data.ConstraintDetail.Description;
                reqParams.cfn['PortfolioId'] = obj.data.PortfolioId;
                reqParams.cfn['ProductId'] = obj.data.ProductId;

                /*
                TODO:
                NotificationArns: 
                    - String
                AcceptLanguage: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicecatalog', obj.id),
                    'region': obj.region,
                    'service': 'servicecatalog',
                    'type': 'AWS::ServiceCatalog::LaunchNotificationConstraint',
                    'options': reqParams
                });
            } else if (obj.type == "servicecatalog.launchroleconstraint") {
                reqParams.cfn['Description'] = obj.data.ConstraintDetail.Description;
                reqParams.cfn['PortfolioId'] = obj.data.PortfolioId;
                reqParams.cfn['ProductId'] = obj.data.ProductId;

                /*
                TODO:
                AcceptLanguage: String
                RoleArn: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicecatalog', obj.id),
                    'region': obj.region,
                    'service': 'servicecatalog',
                    'type': 'AWS::ServiceCatalog::LaunchRoleConstraint',
                    'options': reqParams
                });
            } else if (obj.type == "servicecatalog.launchtemplateconstraint") {
                reqParams.cfn['Description'] = obj.data.ConstraintDetail.Description;
                reqParams.cfn['PortfolioId'] = obj.data.PortfolioId;
                reqParams.cfn['ProductId'] = obj.data.ProductId;

                /*
                TODO:
                AcceptLanguage: String
                Rules: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicecatalog', obj.id),
                    'region': obj.region,
                    'service': 'servicecatalog',
                    'type': 'AWS::ServiceCatalog::LaunchTemplateConstraint',
                    'options': reqParams
                });
            } else if (obj.type == "servicecatalog.stacksetconstraint") {
                reqParams.cfn['Description'] = obj.data.ConstraintDetail.Description;
                reqParams.cfn['PortfolioId'] = obj.data.PortfolioId;
                reqParams.cfn['ProductId'] = obj.data.ProductId;

                /*
                TODO:
                AcceptLanguage: String
                AccountList: 
                    - String
                AdminRole: String
                ExecutionRole: String
                RegionList: 
                    - String
                StackInstanceControl: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicecatalog', obj.id),
                    'region': obj.region,
                    'service': 'servicecatalog',
                    'type': 'AWS::ServiceCatalog::StackSetConstraint',
                    'options': reqParams
                });
            } else if (obj.type == "servicecatalog.acceptedportfolioshare") {
                reqParams.cfn['PortfolioId'] = obj.data.portfolio.Id;

                /*
                TODO:
                AcceptLanguage: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicecatalog', obj.id),
                    'region': obj.region,
                    'service': 'servicecatalog',
                    'type': 'AWS::ServiceCatalog::AcceptedPortfolioShare',
                    'options': reqParams
                });
            } else if (obj.type == "servicecatalog.portfolioproductassociation") {
                reqParams.cfn['PortfolioId'] = obj.data.portfolio.Id;
                reqParams.cfn['ProductId'] = obj.data.product.Id;
                reqParams.cfn[''] = obj.data;

                /*
                TODO:
                SourcePortfolioId: String
                AcceptLanguage: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicecatalog', obj.id),
                    'region': obj.region,
                    'service': 'servicecatalog',
                    'type': 'AWS::ServiceCatalog::PortfolioProductAssociation',
                    'options': reqParams
                });
            } else if (obj.type == "servicecatalog.cloudformationprovisionedproduct") {
                reqParams.cfn['ProvisionedProductName'] = obj.data.ProvisionedProductDetail.Name;
                reqParams.cfn['ProductId'] = obj.data.ProvisionedProductDetail.ProductId;
                reqParams.cfn['ProvisioningArtifactId'] = obj.data.ProvisionedProductDetail.ProvisioningArtifactId;
                reqParams.cfn['ProductName'] = obj.data.Product.Name;

                /*
                TODO:
                PathId: String
                ProvisioningParameters: 
                    - ProvisioningParameter
                ProvisioningArtifactName: String
                NotificationArns: 
                    - String
                AcceptLanguage: String
                Tags: 
                    - Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicecatalog', obj.id),
                    'region': obj.region,
                    'service': 'servicecatalog',
                    'type': 'AWS::ServiceCatalog::CloudFormationProvisionedProduct',
                    'options': reqParams
                });
            } else if (obj.type == "servicecatalog.tagoption") {
                reqParams.cfn['Key'] = obj.data.Key;
                reqParams.cfn['Value'] = obj.data.Value;
                reqParams.cfn['Active'] = obj.data.Active;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicecatalog', obj.id),
                    'region': obj.region,
                    'service': 'servicecatalog',
                    'type': 'AWS::ServiceCatalog::TagOption',
                    'options': reqParams
                });
            } else if (obj.type == "servicecatalog.tagoptionassociation") {
                reqParams.cfn['TagOptionId'] = obj.data.tagoption.Id;
                reqParams.cfn['ResourceId'] = obj.data.resource.Id;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicecatalog', obj.id),
                    'region': obj.region,
                    'service': 'servicecatalog',
                    'type': 'AWS::ServiceCatalog::TagOptionAssociation',
                    'options': reqParams
                });
            } else if (obj.type == "iotanalytics.channel") {
                reqParams.cfn['ChannelName'] = obj.data.name;
                if (obj.data.retentionPeriod) {
                    reqParams.cfn['RetentionPeriod'] = {
                        'Unlimited': obj.data.retentionPeriod.unlimited,
                        'NumberOfDays': obj.data.retentionPeriod.numberOfDays
                    };
                }

                /*
                TODO:
                Tags: 
                    - Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iotanalytics', obj.id),
                    'region': obj.region,
                    'service': 'iotanalytics',
                    'type': 'AWS::IoTAnalytics::Channel',
                    'options': reqParams
                });
            } else if (obj.type == "iotanalytics.pipeline") {
                reqParams.cfn['PipelineName'] = obj.data.name;
                if (obj.data.activities) {
                    reqParams.cfn['PipelineActivities'] = [];
                    obj.data.activities.forEach(activity => {
                        var pipelineActivity = {};

                        if (activity.channel) {
                            pipelineActivity['Channel'] = {
                                'Name': activity.channel.name,
                                'ChannelName': activity.channel.channelName,
                                'Next': activity.channel.next
                            };
                        }
                        if (activity.lambda) {
                            pipelineActivity['Lambda'] = {
                                'Name': activity.lambda.name,
                                'LambdaName': activity.lambda.lambdaName,
                                'BatchSize': activity.lambda.batchSize,
                                'Next': activity.lambda.next
                            };
                        }
                        if (activity.datastore) {
                            pipelineActivity['Datastore'] = {
                                'Name': activity.datastore.name,
                                'DatastoreName': activity.datastore.datastoreName
                            };
                        }
                        if (activity.addAttributes) {
                            pipelineActivity['AddAttributes'] = {
                                'Name': activity.addAttributes.name,
                                'Attributes': activity.addAttributes.attributes,
                                'Next': activity.addAttributes.next
                            };
                        }
                        if (activity.removeAttributes) {
                            pipelineActivity['RemoveAttributes'] = {
                                'Name': activity.removeAttributes.name,
                                'Attributes': activity.removeAttributes.attributes,
                                'Next': activity.removeAttributes.next
                            };
                        }
                        if (activity.selectAttributes) {
                            pipelineActivity['SelectAttributes'] = {
                                'Name': activity.selectAttributes.name,
                                'Attributes': activity.selectAttributes.attributes,
                                'Next': activity.selectAttributes.next
                            };
                        }
                        if (activity.filter) {
                            pipelineActivity['Filter'] = {
                                'Name': activity.filter.name,
                                'Filter': activity.filter.filter,
                                'Next': activity.filter.next
                            };
                        }
                        if (activity.math) {
                            pipelineActivity['Math'] = {
                                'Name': activity.math.name,
                                'Attribute': activity.math.attribute,
                                'Math': activity.math.math,
                                'Next': activity.math.next
                            };
                        }
                        if (activity.deviceRegistryEnrich) {
                            pipelineActivity['DeviceRegistryEnrich'] = {
                                'Name': activity.deviceRegistryEnrich.name,
                                'Attribute': activity.deviceRegistryEnrich.attribute,
                                'ThingName': activity.deviceRegistryEnrich.thingName,
                                'RoleArn': activity.deviceRegistryEnrich.roleArn,
                                'Next': activity.deviceRegistryEnrich.next
                            };
                        }
                        if (activity.deviceShadowEnrich) {
                            pipelineActivity['DeviceShadowEnrich'] = {
                                'Name': activity.deviceShadowEnrich.name,
                                'Attribute': activity.deviceShadowEnrich.attribute,
                                'ThingName': activity.deviceShadowEnrich.thingName,
                                'RoleArn': activity.deviceShadowEnrich.roleArn,
                                'Next': activity.deviceShadowEnrich.next
                            };
                        }

                        reqParams.cfn['PipelineActivities'].push(pipelineActivity);
                    });
                }

                /*
                TODO:
                Tags: 
                    - Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iotanalytics', obj.id),
                    'region': obj.region,
                    'service': 'iotanalytics',
                    'type': 'AWS::IoTAnalytics::Pipeline',
                    'options': reqParams
                });
            } else if (obj.type == "iotanalytics.dataset") {
                reqParams.cfn['DatasetName'] = obj.data.name;
                reqParams.cfn['Actions'] = [];
                obj.data.actions.forEach(action => {
                    var action_obj = {
                        'ActionName': action.actionName
                    };

                    if (action.queryAction) {
                        var filters = null;
                        if (action.queryAction.filters) {
                            filters = [];
                            action.queryAction.filters.forEach(filter => {
                                var filter = {};
                                if (filter.deltaTime) {
                                    filter['DeltaTime'] = {
                                        'TimeExpression': filter.deltaTime.timeExpression,
                                        'OffsetSeconds': filter.deltaTime.offsetSeconds
                                    };
                                }
                                filters.push(filter);
                            });
                        }
                        action_obj['QueryAction'] = {
                            'Filters': filters,
                            'SqlQuery': action.queryAction.sqlQuery
                        }
                    }

                    if (action.containerAction) {
                        var variables = null;
                        if (action.containerAction.variables) {
                            variables = [];
                            action.containerAction.variables.forEach(variable => {
                                var datasetContentVersionValue = null;
                                if (variable.datasetContentVersionValue) {
                                    datasetContentVersionValue = {
                                        'DatasetName': variable.datasetContentVersionValue.datasetName
                                    };
                                }
                                var outputFileUriValue = null;
                                if (variable.outputFileUriValue) {
                                    outputFileUriValue = {
                                        'FileName': variable.outputFileUriValue.fileName
                                    };
                                }
                                variables.push({
                                    'DatasetContentVersionValue': datasetContentVersionValue,
                                    'DoubleValue': variable.doubleValue,
                                    'OutputFileUriValue': outputFileUriValue,
                                    'StringValue': variable.stringValue,
                                    'VariableName': variable.name
                                });
                            });
                        }
                        action_obj['ContainerAction'] = {
                            'ExecutionRoleArn': action.containerAction.executionRoleArn,
                            'Image': action.containerAction.image,
                            'ResourceConfiguration': {
                                'ComputeType': action.containerAction.resourceConfiguration.computeType,
                                'VolumeSizeInGB': action.containerAction.resourceConfiguration.volumeSizeInGB
                            },
                            'Variables': variables
                        }
                    }

                    reqParams.cfn['Actions'].push(action_obj);
                });
                if (obj.data.triggers) {
                    reqParams.cfn['Triggers'] = [];
                    obj.data.triggers.forEach(trigger => {
                        var schedule = null;
                        if (trigger.schedule) {
                            schedule = {
                                'ScheduleExpression': trigger.schedule.expression
                            };
                        }
                        var dataset = null;
                        if (trigger.dataset) {
                            dataset = {
                                'DatasetName': trigger.dataset.name
                            };
                        }
                        reqParams.cfn['Triggers'].push({
                            'Schedule': schedule,
                            'TriggeringDataset': dataset
                        });
                    });
                }
                if (obj.data.retentionPeriod) {
                    reqParams.cfn['RetentionPeriod'] = {
                        'Unlimited': obj.data.retentionPeriod.unlimited,
                        'NumberOfDays': obj.data.retentionPeriod.numberOfDays
                    };
                }

                /*
                TODO:
                Tags: 
                    - Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iotanalytics', obj.id),
                    'region': obj.region,
                    'service': 'iotanalytics',
                    'type': 'AWS::IoTAnalytics::Dataset',
                    'options': reqParams
                });
            } else if (obj.type == "iotanalytics.datastore") {
                reqParams.cfn['DatastoreName'] = obj.data.name;
                if (obj.data.retentionPeriod) {
                    reqParams.cfn['RetentionPeriod'] = {
                        'Unlimited': obj.data.retentionPeriod.unlimited,
                        'NumberOfDays': obj.data.retentionPeriod.numberOfDays
                    };
                }

                /*
                TODO:
                Tags: 
                    - Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iotanalytics', obj.id),
                    'region': obj.region,
                    'service': 'iotanalytics',
                    'type': 'AWS::IoTAnalytics::Datastore',
                    'options': reqParams
                });
            } else if (obj.type == "servicediscovery.httpnamespace") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicediscovery', obj.id),
                    'region': obj.region,
                    'service': 'servicediscovery',
                    'type': 'AWS::ServiceDiscovery::HttpNamespace',
                    'terraformType': 'aws_service_discovery_http_namespace',
                    'options': reqParams
                });
            } else if (obj.type == "servicediscovery.privatednsnamespace") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;

                /*
                TODO:
                Vpc
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicediscovery', obj.id),
                    'region': obj.region,
                    'service': 'servicediscovery',
                    'type': 'AWS::ServiceDiscovery::PrivateDnsNamespace',
                    'terraformType': 'aws_service_discovery_private_dns_namespace',
                    'options': reqParams
                });
            } else if (obj.type == "servicediscovery.publicdnsnamespace") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicediscovery', obj.id),
                    'region': obj.region,
                    'service': 'servicediscovery',
                    'type': 'AWS::ServiceDiscovery::PublicDnsNamespace',
                    'terraformType': 'aws_service_discovery_public_dns_namespace',
                    'options': reqParams
                });
            } else if (obj.type == "servicediscovery.service") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['NamespaceId'] = obj.data.NamespaceId;
                if (obj.data.DnsConfig) {
                    var tfdnsrecords = [];
                    obj.data.DnsConfig.DnsRecords.forEach(dnsrecord => {
                        tfdnsrecords.push({
                            'ttl': dnsrecord.TTL,
                            'type': dnsrecord.Type
                        });
                    });
                    reqParams.cfn['DnsConfig'] = {
                        'DnsRecords': obj.data.DnsConfig.DnsRecords,
                        'NamespaceId': obj.data.DnsConfig.NamespaceId,
                        'RoutingPolicy': obj.data.DnsConfig.RoutingPolicy
                    };
                    reqParams.tf['dns_config'] = {
                        'dns_records': tfdnsrecords,
                        'namespace_id': obj.data.DnsConfig.NamespaceId,
                        'routing_policy': obj.data.DnsConfig.RoutingPolicy
                    };
                }
                reqParams.cfn['HealthCheckConfig'] = obj.data.HealthCheckConfig;
                if (obj.data.HealthCheckConfig) {
                    reqParams.tf['health_check_config'] = {
                        'failure_threshold': obj.data.HealthCheckConfig.FailureThreshold,
                        'resource_path': obj.data.HealthCheckConfig.ResourcePath,
                        'type': obj.data.HealthCheckConfig.Type
                    };
                }
                reqParams.cfn['HealthCheckCustomConfig'] = obj.data.HealthCheckCustomConfig;
                if (obj.data.HealthCheckCustomConfig) {
                    reqParams.tf['health_check_custom_config'] = {
                        'failure_threshold': obj.data.HealthCheckCustomConfig.FailureThreshold
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicediscovery', obj.id),
                    'region': obj.region,
                    'service': 'servicediscovery',
                    'type': 'AWS::ServiceDiscovery::Service',
                    'terraformType': 'aws_service_discovery_service',
                    'options': reqParams
                });
            } else if (obj.type == "servicediscovery.instance") {
                reqParams.cfn['InstanceId'] = obj.data.Id;
                reqParams.cfn['InstanceAttributes'] = obj.data.Attributes;
                reqParams.cfn['ServiceId'] = obj.data.ServiceId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicediscovery', obj.id),
                    'region': obj.region,
                    'service': 'servicediscovery',
                    'type': 'AWS::ServiceDiscovery::Instance',
                    'options': reqParams
                });
            } else if (obj.type == "sagemaker.model") {
                reqParams.cfn['ModelName'] = obj.data.ModelName;
                if (obj.data.PrimaryContainer) {
                    reqParams.cfn['PrimaryContainer'] = {
                        'ContainerHostname': obj.data.PrimaryContainer.ContainerHostname,
                        'Environment': obj.data.PrimaryContainer.Environment,
                        'ModelDataUrl': obj.data.PrimaryContainer.ModelDataUrl,
                        'Image': obj.data.PrimaryContainer.Image
                    };
                }
                if (obj.data.Containers) {
                    reqParams.cfn['Containers'] = [];
                    obj.data.Containers.forEach(container => {
                        reqParams.cfn['Containers'] = {
                            'ContainerHostname': container.ContainerHostname,
                            'Environment': container.Environment,
                            'ModelDataUrl': container.ModelDataUrl,
                            'Image': container.Image
                        };
                    });
                }
                reqParams.cfn['ExecutionRoleArn'] = obj.data.ExecutionRoleArn;
                reqParams.cfn['VpcConfig'] = obj.data.VpcConfig;

                /*
                TODO:
                Tags: 
                    - Tag 
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('sagemaker', obj.id),
                    'region': obj.region,
                    'service': 'sagemaker',
                    'type': 'AWS::SageMaker::Model',
                    'options': reqParams
                });
            } else if (obj.type == "sagemaker.endpoint") {
                reqParams.cfn['EndpointName'] = obj.data.EndpointName;
                reqParams.cfn['EndpointConfigName'] = obj.data.EndpointConfigName;

                /*
                TODO:
                Tags: 
                    - Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('sagemaker', obj.id),
                    'region': obj.region,
                    'service': 'sagemaker',
                    'type': 'AWS::SageMaker::Endpoint',
                    'options': reqParams
                });
            } else if (obj.type == "sagemaker.endpointconfig") {
                reqParams.cfn['EndpointConfigName'] = obj.data.EndpointConfigName;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                if (obj.data.ProductionVariants) {
                    reqParams.cfn['ProductionVariants'] = [];
                    obj.data.ProductionVariants.forEach(productionVariant => {
                        reqParams.cfn['ProductionVariants'].push({
                            'VariantName': productionVariant.VariantName,
                            'ModelName': productionVariant.ModelName,
                            'InitialInstanceCount': productionVariant.InitialInstanceCount,
                            'InstanceType': productionVariant.InstanceType,
                            'InitialVariantWeight': productionVariant.InitialVariantWeight
                        });
                    });
                }

                /*
                TODO:
                Tags: 
                    - Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('sagemaker', obj.id),
                    'region': obj.region,
                    'service': 'sagemaker',
                    'type': 'AWS::SageMaker::EndpointConfig',
                    'options': reqParams
                });
            } else if (obj.type == "sagemaker.notebookinstance") {
                reqParams.cfn['NotebookInstanceName'] = obj.data.NotebookInstanceName;
                reqParams.cfn['InstanceType'] = obj.data.InstanceType;
                reqParams.cfn['SubnetId'] = obj.data.SubnetId;
                reqParams.cfn['SecurityGroupIds'] = obj.data.SecurityGroups;
                reqParams.cfn['RoleArn'] = obj.data.RoleArn;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                reqParams.cfn['LifecycleConfigName'] = obj.data.NotebookInstanceLifecycleConfigName;
                reqParams.cfn['DirectInternetAccess'] = obj.data.DirectInternetAccess;
                reqParams.cfn['VolumeSizeInGB'] = obj.data.VolumeSizeInGB;
                reqParams.cfn['RootAccess'] = obj.data.RootAccess;

                /*
                TODO:
                Tags: 
                    - Tag 
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('sagemaker', obj.id),
                    'region': obj.region,
                    'service': 'sagemaker',
                    'type': 'AWS::SageMaker::NotebookInstance',
                    'options': reqParams
                });
            } else if (obj.type == "sagemaker.notebookinstancelifecycleconfig") {
                reqParams.cfn['NotebookInstanceLifecycleConfigName'] = obj.data.NotebookInstanceLifecycleConfigName;
                reqParams.cfn['OnCreate'] = obj.data.OnCreate;
                reqParams.cfn['OnStart'] = obj.data.OnStart;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('sagemaker', obj.id),
                    'region': obj.region,
                    'service': 'sagemaker',
                    'type': 'AWS::SageMaker::NotebookInstanceLifecycleConfig',
                    'options': reqParams
                });
            } else if (obj.type == "emr.cluster") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['LogUri'] = obj.data.LogUri;
                reqParams.cfn['ReleaseLabel'] = obj.data.ReleaseLabel;
                reqParams.cfn['VisibleToAllUsers'] = obj.data.VisibleToAllUsers;
                reqParams.cfn['Applications'] = obj.data.Applications;
                reqParams.cfn['Tags'] = obj.data.Tags;
                reqParams.cfn['ServiceRole'] = obj.data.ServiceRole;
                if (obj.data.Configurations) {
                    reqParams.cfn['Configurations'] = [];
                    obj.data.Configurations.forEach(configuration => {
                        reqParams.cfn['Configurations'].push({
                            'Classification': configuration.Classification,
                            'ConfigurationProperties': configuration.Properties
                        });
                    });
                }
                reqParams.cfn['SecurityConfiguration'] = obj.data.SecurityConfiguration;
                reqParams.cfn['AutoScalingRole'] = obj.data.AutoScalingRole;
                reqParams.cfn['ScaleDownBehavior'] = obj.data.ScaleDownBehavior;
                reqParams.cfn['CustomAmiId'] = obj.data.CustomAmiId;
                reqParams.cfn['EbsRootVolumeSize'] = obj.data.EbsRootVolumeSize;
                reqParams.cfn['KerberosAttributes'] = obj.data.KerberosAttributes;

                /*
                TODO:
                AdditionalInfo: JSON object
                BootstrapActions:
                    - Bootstrap Actions   
                Instances:
                    JobFlowInstancesConfig
                JobFlowRole: String
                Steps:
                    - StepConfig
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('emr', obj.id),
                    'region': obj.region,
                    'service': 'emr',
                    'type': 'AWS::EMR::Cluster',
                    'options': reqParams
                });
            } else if (obj.type == "emr.step") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['ActionOnFailure'] = obj.data.ActionOnFailure;
                reqParams.cfn['JobFlowId'] = obj.data.ClusterId;
                if (obj.data.Config) {
                    reqParams.cfn['HadoopJarStep'] = {
                        'Jar': obj.data.Config.Jar,
                        'StepProperties': obj.data.Config.Properties,
                        'MainClass': obj.data.Config.MainClass,
                        'Args': obj.data.Config.Args
                    }
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('emr', obj.id),
                    'region': obj.region,
                    'service': 'emr',
                    'type': 'AWS::EMR::Step',
                    'options': reqParams
                });
            } else if (obj.type == "emr.instancefleetconfig") {
                reqParams.cfn['ClusterId'] = obj.data.ClusterId;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['InstanceFleetType'] = obj.data.InstanceFleetType;
                reqParams.cfn['TargetOnDemandCapacity'] = obj.data.TargetOnDemandCapacity;
                reqParams.cfn['TargetSpotCapacity'] = obj.data.TargetSpotCapacity;
                if (obj.data.InstanceTypeSpecifications) {
                    reqParams.cfn['InstanceTypeConfigs'] = [];
                    obj.data.InstanceTypeSpecifications.forEach(instanceTypeSpecification => {
                        var configurations = null;
                        var ebsConfiguration = null;
                        if (obj.data.InstanceTypeSpecifications.Configurations) {
                            configurations = [];
                            obj.data.InstanceTypeSpecifications.Configurations.forEach(configuration => {
                                configurations.push({
                                    'Classification': configuration.Classification,
                                    'ConfigurationProperties': configuration.Properties
                                });
                            });
                        }
                        if (obj.data.InstanceTypeSpecifications.EbsBlockDevices) {
                            var ebsBlockDeviceConfigs = [];
                            obj.data.InstanceTypeSpecifications.EbsBlockDevices.forEach(ebsBlockDevice => {
                                ebsBlockDeviceConfigs.push({
                                    'VolumeSpecification': ebsBlockDevice.VolumeSpecification
                                });
                            });
                            ebsConfiguration = {
                                'EbsBlockDeviceConfigs': ebsBlockDeviceConfigs,
                                'EbsOptimized': obj.data.InstanceTypeSpecifications.EbsOptimized
                            };
                        }
                        reqParams.cfn['InstanceTypeConfigs'].push({
                            'BidPrice': obj.data.InstanceTypeSpecifications.BidPrice,
                            'BidPriceAsPercentageOfOnDemandPrice': obj.data.InstanceTypeSpecifications.BidPriceAsPercentageOfOnDemandPrice,
                            'Configurations': configurations,
                            'EbsConfiguration': ebsConfiguration,
                            'InstanceType': obj.data.InstanceTypeSpecifications.InstanceType,
                            'WeightedCapacity': obj.data.InstanceTypeSpecifications.WeightedCapacity
                        });
                    });
                }
                reqParams.cfn['LaunchSpecifications'] = obj.data.LaunchSpecifications;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('emr', obj.id),
                    'region': obj.region,
                    'service': 'emr',
                    'type': 'AWS::EMR::InstanceFleetConfig',
                    'options': reqParams
                });
            } else if (obj.type == "emr.instancegroupconfig") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['JobFlowId'] = obj.data.ClusterId;
                reqParams.cfn['Market'] = obj.data.Market;
                reqParams.cfn['BidPrice'] = obj.data.BidPrice;
                reqParams.cfn['InstanceType'] = obj.data.InstanceType;
                reqParams.cfn['InstanceCount'] = obj.data.RequestedInstanceCount;
                if (obj.data.Configurations) {
                    reqParams.cfn['Configurations'] = [];
                    obj.data.Configurations.forEach(configuration => {
                        reqParams.cfn['Configurations'].push({
                            'Classification': configuration.Classification,
                            'ConfigurationProperties': configuration.Properties
                        });
                    });
                }
                reqParams.cfn['EbsConfiguration'] = null;
                if (obj.data.EbsBlockDevices) {
                    var ebsBlockDeviceConfigs = [];
                    obj.data.EbsBlockDevices.forEach(ebsBlockDevice => {
                        ebsBlockDeviceConfigs.push({
                            'VolumeSpecification': ebsBlockDevice.VolumeSpecification
                        });
                    });
                    reqParams.cfn['EbsConfiguration'] = {
                        'EbsBlockDeviceConfigs': ebsBlockDeviceConfigs,
                        'EbsOptimized': obj.data.EbsOptimized
                    };
                }
                if (obj.data.AutoScalingPolicy) {
                    reqParams.cfn['AutoScalingPolicy'] = {
                        'Constraints': obj.data.AutoScalingPolicy.Constraints,
                        'Rules': obj.data.AutoScalingPolicy.Rules
                    };
                }

                /*
                TODO:
                InstanceRole: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('emr', obj.id),
                    'region': obj.region,
                    'service': 'emr',
                    'type': 'AWS::EMR::InstanceGroupConfig',
                    'options': reqParams
                });
            } else if (obj.type == "emr.securityconfiguration") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['SecurityConfiguration'] = obj.data.SecurityConfiguration;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('emr', obj.id),
                    'region': obj.region,
                    'service': 'emr',
                    'type': 'AWS::EMR::SecurityConfiguration',
                    'options': reqParams
                });
            } else if (obj.type == "secretsmanager.secret") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                reqParams.tf['kms_key_id'] = obj.data.KmsKeyId;
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }
                reqParams.cfn['SecretString'] = obj.data.SecretString;

                /*
                SKIPPED:
                GenerateSecretString: 
                    GenerateSecretString
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('secretsmanager', obj.id),
                    'region': obj.region,
                    'service': 'secretsmanager',
                    'type': 'AWS::SecretsManager::Secret',
                    'terraformType': 'aws_secretsmanager_secret',
                    'options': reqParams
                });

                reqParams = {
                    'boto3': {},
                    'go': {},
                    'cfn': {},
                    'cli': {},
                    'tf': {},
                    'iam': {}
                };

                reqParams.tf['secret_id'] = obj.data.ARN
                reqParams.tf['secret_string'] = obj.data.SecretString;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('secretsmanager', obj.id),
                    'region': obj.region,
                    'service': 'secretsmanager',
                    'terraformType': 'aws_secretsmanager_secret_version',
                    'options': reqParams
                });
            } else if (obj.type == "secretsmanager.rotationschedule") {
                reqParams.cfn['SecretId'] = obj.data.ARN;
                reqParams.cfn['RotationLambdaARN'] = obj.data.RotationLambdaARN;
                reqParams.cfn['RotationRules'] = obj.data.RotationRules;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('secretsmanager', obj.id),
                    'region': obj.region,
                    'service': 'secretsmanager',
                    'type': 'AWS::SecretsManager::RotationSchedule',
                    'options': reqParams
                });
            } else if (obj.type == "secretsmanager.resourcepolicy") {
                reqParams.cfn['SecretId'] = obj.data.ARN;
                reqParams.cfn['ResourcePolicy'] = obj.data.ResourcePolicy;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('secretsmanager', obj.id),
                    'region': obj.region,
                    'service': 'secretsmanager',
                    'type': 'AWS::SecretsManager::ResourcePolicy',
                    'options': reqParams
                });
            } else if (obj.type == "glue.database") {
                reqParams.cfn['DatabaseInput'] = {
                    'Name': obj.data.Name,
                    'Description': obj.data.Description,
                    'LocationUri': obj.data.LocationUri,
                    'Parameters': obj.data.Parameters
                };
                reqParams.cfn['CatalogId'] = "!Ref \"AWS::AccountId\"";

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('glue', obj.id),
                    'region': obj.region,
                    'service': 'glue',
                    'type': 'AWS::Glue::Database',
                    'options': reqParams
                });
            } else if (obj.type == "glue.table") {
                reqParams.cfn['DatabaseName'] = obj.data.DatabaseName;
                reqParams.cfn['CatalogId'] = "!Ref \"AWS::AccountId\"";
                reqParams.cfn['TableInput'] = {
                    'Owner': obj.data.Owner,
                    'ViewOriginalText': obj.data.ViewOriginalText,
                    'Description': obj.data.Description,
                    'TableType': obj.data.TableType,
                    'Parameters': obj.data.Parameters,
                    'ViewExpandedText': obj.data.ViewExpandedText,
                    'StorageDescriptor': obj.data.StorageDescriptor,
                    'PartitionKeys': obj.data.PartitionKeys,
                    'Retention': obj.data.Retention,
                    'Name': obj.data.Name
                };

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('glue', obj.id),
                    'region': obj.region,
                    'service': 'glue',
                    'type': 'AWS::Glue::Table',
                    'options': reqParams
                });
            } else if (obj.type == "glue.partition") {
                reqParams.cfn['TableName'] = obj.data.TableName;
                reqParams.cfn['DatabaseName'] = obj.data.DatabaseName;
                reqParams.cfn['CatalogId'] = "!Ref \"AWS::AccountId\"";
                reqParams.cfn['PartitionInput'] = {
                    'Parameters': obj.data.Parameters,
                    'StorageDescriptor': obj.data.StorageDescriptor
                };

                /*
                TODO:
                PartitionInput:
                    Values
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('glue', obj.id),
                    'region': obj.region,
                    'service': 'glue',
                    'type': 'AWS::Glue::Partition',
                    'options': reqParams
                });
            } else if (obj.type == "glue.crawler") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Role'] = obj.data.Role;
                if (obj.data.Targets) {
                    reqParams.cfn['Targets'] = {
                        'S3Targets': obj.data.Targets.S3Targets,
                        'JdbcTargets': obj.data.Targets.JdbcTargets
                    };
                }
                reqParams.cfn['DatabaseName'] = obj.data.DatabaseName;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['Classifiers'] = obj.data.Classifiers;
                reqParams.cfn['SchemaChangePolicy'] = obj.data.SchemaChangePolicy;
                reqParams.cfn['TablePrefix'] = obj.data.TablePrefix;
                if (obj.data.Schedule) {
                    reqParams.cfn['Schedule'] = {
                        'ScheduleExpression': obj.data.Schedule.ScheduleExpression
                    };
                }
                reqParams.cfn['Configuration'] = obj.data.Configuration;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('glue', obj.id),
                    'region': obj.region,
                    'service': 'glue',
                    'type': 'AWS::Glue::Crawler',
                    'options': reqParams
                });
            } else if (obj.type == "glue.classifier") {
                if (obj.data.GrokClassifier) {
                    reqParams.cfn['GrokClassifier'] = {
                        'CustomPatterns': obj.data.GrokClassifier.CustomPatterns,
                        'GrokPattern': obj.data.GrokClassifier.GrokPattern,
                        'Classification': obj.data.GrokClassifier.Classification,
                        'Name': obj.data.GrokClassifier.Name
                    };
                }
                if (obj.data.XMLClassifier) {
                    reqParams.cfn['XMLClassifier'] = {
                        'RowTag': obj.data.XMLClassifier.RowTag,
                        'Classification': obj.data.XMLClassifier.Classification,
                        'Name': obj.data.XMLClassifier.Name
                    };
                }
                if (obj.data.JsonClassifier) {
                    reqParams.cfn['JsonClassifier'] = {
                        'JsonPath': obj.data.JsonClassifier.JsonPath,
                        'Name': obj.data.JsonClassifier.Name
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('glue', obj.id),
                    'region': obj.region,
                    'service': 'glue',
                    'type': 'AWS::Glue::Classifier',
                    'options': reqParams
                });
            } else if (obj.type == "glue.job") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['LogUri'] = obj.data.LogUri;
                reqParams.cfn['Role'] = obj.data.Role;
                reqParams.cfn['ExecutionProperty'] = obj.data.ExecutionProperty;
                reqParams.cfn['Command'] = obj.data.Command;
                reqParams.cfn['DefaultArguments'] = obj.data.DefaultArguments;
                reqParams.cfn['Connections'] = obj.data.Connections;
                reqParams.cfn['MaxRetries'] = obj.data.MaxRetries;
                reqParams.cfn['AllocatedCapacity'] = obj.data.AllocatedCapacity;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('glue', obj.id),
                    'region': obj.region,
                    'service': 'glue',
                    'type': 'AWS::Glue::Job',
                    'options': reqParams
                });
            } else if (obj.type == "glue.trigger") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Type'] = obj.data.Type;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['Schedule'] = obj.data.Schedule;
                if (obj.data.actions) {
                    reqParams.cfn['Actions'] = [];
                    obj.data.actions.forEach(action => {
                        reqParams.cfn['Actions'].push({
                            'JobName': action.JobName,
                            'Arguments': action.Arguments
                        });
                    });
                }
                if (obj.data.Predicate) {
                    var conditions = null;
                    if (obj.data.Predicate.Conditions) {
                        conditions = [];
                        obj.data.Predicate.Conditions.forEach(condition => {
                            if (condition.State == "SUCCEEDED") {
                                conditions.push({
                                    'LogicalOperator': condition.LogicalOperator,
                                    'JobName': condition.JobName,
                                    'State': 'SUCCEEDED'
                                    //'State': condition.State
                                });
                            }
                        });
                    }
                    reqParams.cfn['Predicate'] = {
                        'Logical': obj.data.Predicate.Logical,
                        'Conditions': conditions
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('glue', obj.id),
                    'region': obj.region,
                    'service': 'glue',
                    'type': 'AWS::Glue::Trigger',
                    'options': reqParams
                });
            } else if (obj.type == "glue.connection") {
                reqParams.cfn['ConnectionInput'] = {
                    'Description': obj.data.Description,
                    'ConnectionType': obj.data.ConnectionType,
                    'MatchCriteria': obj.data.MatchCriteria,
                    'PhysicalConnectionRequirements': obj.data.PhysicalConnectionRequirements,
                    'ConnectionProperties': obj.data.ConnectionProperties,
                    'Name': obj.data.Name
                };
                reqParams.cfn['CatalogId'] = "!Ref \"AWS::AccountId\"";

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('glue', obj.id),
                    'region': obj.region,
                    'service': 'glue',
                    'type': 'AWS::Glue::Connection',
                    'options': reqParams
                });
            } else if (obj.type == "glue.devendpoint") {
                reqParams.cfn['EndpointName'] = obj.data.EndpointName;
                reqParams.cfn['RoleArn'] = obj.data.RoleArn;
                reqParams.cfn['SecurityGroupIds'] = obj.data.SecurityGroupIds;
                reqParams.cfn['SubnetId'] = obj.data.SubnetId;
                reqParams.cfn['NumberOfNodes'] = obj.data.NumberOfNodes;
                reqParams.cfn['ExtraPythonLibsS3Path'] = obj.data.ExtraPythonLibsS3Path;
                reqParams.cfn['ExtraJarsS3Path'] = obj.data.ExtraJarsS3Path;
                reqParams.cfn['PublicKey'] = obj.data.PublicKey;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('glue', obj.id),
                    'region': obj.region,
                    'service': 'glue',
                    'type': 'AWS::Glue::DevEndpoint',
                    'options': reqParams
                });
            } else if (obj.type == "cognito.identitypool") {
                reqParams.cfn['IdentityPoolName'] = obj.data.IdentityPoolName;
                reqParams.tf['identity_pool_name'] = obj.data.IdentityPoolName;
                reqParams.cfn['AllowUnauthenticatedIdentities'] = obj.data.AllowUnauthenticatedIdentities;
                reqParams.tf['allow_unauthenticated_identities'] = obj.data.AllowUnauthenticatedIdentities;
                reqParams.cfn['SupportedLoginProviders'] = obj.data.SupportedLoginProviders;
                reqParams.tf['supported_login_providers'] = obj.data.SupportedLoginProviders;
                reqParams.cfn['DeveloperProviderName'] = obj.data.DeveloperProviderName;
                reqParams.tf['developer_provider_name'] = obj.data.DeveloperProviderName;
                reqParams.cfn['OpenIdConnectProviderARNs'] = obj.data.OpenIdConnectProviderARNs;
                reqParams.tf['openid_connect_provider_arns'] = obj.data.OpenIdConnectProviderARNs;
                reqParams.cfn['CognitoIdentityProviders'] = obj.data.CognitoIdentityProviders;
                if (obj.data.CognitoIdentityProviders) {
                    reqParams.tf['cognito_identity_providers'] = [];
                    obj.data.CognitoIdentityProviders.forEach(cognitoidentityprovider => {
                        reqParams.tf['cognito_identity_providers'].push({
                            'client_id': cognitoidentityprovider.ClientId,
                            'provider_name': cognitoidentityprovider.ProviderName,
                            'server_side_token_check': cognitoidentityprovider.ServerSideTokenCheck
                        });
                    });
                }
                reqParams.cfn['SamlProviderARNs'] = obj.data.SamlProviderARNs;
                reqParams.tf['saml_provider_arns'] = obj.data.SamlProviderARNs;

                /*
                TODO:
                CognitoStreams: 
                    - CognitoStreams
                PushSync: 
                    - PushSync
                CognitoEvents: 
                    String: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cognito', obj.id),
                    'region': obj.region,
                    'service': 'cognito',
                    'type': 'AWS::Cognito::IdentityPool',
                    'terraformType': 'aws_cognito_identity_pool',
                    'options': reqParams
                });
            } else if (obj.type == "cognito.identitypoolroleattachment") {
                reqParams.cfn['IdentityPoolId'] = obj.data.IdentityPoolId;
                reqParams.tf['identity_pool_id'] = obj.data.IdentityPoolId;
                reqParams.cfn['RoleMappings'] = obj.data.RoleMappings;
                if (obj.data.RoleMappings) {
                    reqParams.tf['role_mapping'] = [];
                    Object.keys(obj.data.RoleMappings).forEach(rolemapping => {
                        var mappingrules = null;
                        if (obj.data.RoleMappings[rolemapping].RulesConfiguration && obj.data.RoleMappings[rolemapping].RulesConfiguration.Rules) {
                            mappingrules = [];
                            obj.data.RoleMappings[rolemapping].RulesConfiguration.Rules.forEach(mappingrule => {
                                mappingrules.push({
                                    'claim': mappingrule.Claim,
                                    'match_type': mappingrule.MatchType,
                                    'role_arn': mappingrule.RoleARN,
                                    'value': mappingrule.Value
                                });
                            });
                        }
                        reqParams.tf['role_mapping'].push({
                            'identity_provider': rolemapping,
                            'ambiguous_role_resolution': obj.data.RoleMappings[rolemapping].AmbiguousRoleResolution,
                            'type': obj.data.RoleMappings[rolemapping].Type,
                            'mapping_rule': mappingrules
                        });
                    });
                }
                reqParams.cfn['Roles'] = obj.data.Roles;
                reqParams.tf['roles'] = obj.data.Roles;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cognito', obj.id),
                    'region': obj.region,
                    'service': 'cognito',
                    'type': 'AWS::Cognito::IdentityPoolRoleAttachment',
                    'terraformType': 'aws_cognito_identity_pool_roles_attachment',
                    'options': reqParams
                });
            } else if (obj.type == "cognito.userpool") {
                reqParams.cfn['UserPoolName'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['Policies'] = obj.data.Policies;
                if (obj.data.Policies && obj.data.Policies.PasswordPolicy) {
                    reqParams.tf['password_policy'] = {
                        'minimum_length': obj.data.Policies.PasswordPolicy.MinimumLength,
                        'require_lowercase': obj.data.Policies.PasswordPolicy.RequireLowercase,
                        'require_numbers': obj.data.Policies.PasswordPolicy.RequireNumbers,
                        'require_symbols': obj.data.Policies.PasswordPolicy.RequireSymbols,
                        'require_uppercase': obj.data.Policies.PasswordPolicy.RequireUppercase
                    };
                }
                if (obj.data.LambdaConfig) {
                    reqParams.cfn['LambdaConfig'] = {
                        'CreateAuthChallenge': obj.data.LambdaConfig.CreateAuthChallenge,
                        'CustomMessage': obj.data.LambdaConfig.CustomMessage,
                        'DefineAuthChallenge': obj.data.LambdaConfig.DefineAuthChallenge,
                        'PostAuthentication': obj.data.LambdaConfig.PostAuthentication,
                        'PostConfirmation': obj.data.LambdaConfig.PostConfirmation,
                        'PreAuthentication': obj.data.LambdaConfig.PreAuthentication,
                        'PreSignUp': obj.data.LambdaConfig.PreSignUp,
                        'VerifyAuthChallengeResponse': obj.data.LambdaConfig.VerifyAuthChallengeResponse
                    };
                    reqParams.tf['lambda_config'] = {
                        'create_auth_challenge': obj.data.LambdaConfig.CreateAuthChallenge,
                        'custom_message': obj.data.LambdaConfig.CustomMessage,
                        'define_auth_challenge': obj.data.LambdaConfig.DefineAuthChallenge,
                        'post_authentication': obj.data.LambdaConfig.PostAuthentication,
                        'post_confirmation': obj.data.LambdaConfig.PostConfirmation,
                        'pre_authentication': obj.data.LambdaConfig.PreAuthentication,
                        'pre_sign_up': obj.data.LambdaConfig.PreSignUp,
                        'verify_auth_challenge_response': obj.data.LambdaConfig.VerifyAuthChallengeResponse
                    };
                }
                reqParams.cfn['Schema'] = obj.data.SchemaAttributes;
                if (obj.data.SchemaAttributes) {
                    reqParams.tf['schema'] = [];
                    obj.data.SchemaAttributes.forEach(schemaattribute => {
                        var numberattributeconstraints = null;
                        if (schemaattribute.NumberAttributeConstraints) {
                            numberattributeconstraints = {
                                'max_value': schemaattribute.NumberAttributeConstraints.MaxValue,
                                'min_value': schemaattribute.NumberAttributeConstraints.MinValue
                            };
                        }
                        var stringattributeconstraints = null;
                        if (schemaattribute.StringAttributeConstraints) {
                            stringattributeconstraints = {
                                'max_length': schemaattribute.StringAttributeConstraints.MaxLength,
                                'min_length': schemaattribute.StringAttributeConstraints.MinLength
                            };
                        }
                        reqParams.tf['schema'].push({
                            'attribute_data_type': schemaattribute.AttributeDataType,
                            'developer_only_attribute': schemaattribute.DeveloperOnlyAttribute,
                            'mutable': schemaattribute.Mutable,
                            'name': schemaattribute.Name,
                            'number_attribute_constraints': numberattributeconstraints,
                            'string_attribute_constraints': stringattributeconstraints,
                            'required': schemaattribute.Required
                        });
                    });
                }
                reqParams.cfn['AutoVerifiedAttributes'] = obj.data.AutoVerifiedAttributes;
                reqParams.tf['auto_verified_attributes'] = obj.data.AutoVerifiedAttributes;
                reqParams.cfn['AliasAttributes'] = obj.data.AliasAttributes;
                reqParams.tf['alias_attributes'] = obj.data.AliasAttributes;
                reqParams.cfn['UsernameAttributes'] = obj.data.UsernameAttributes;
                reqParams.tf['username_attributes'] = obj.data.UsernameAttributes;
                reqParams.cfn['SmsVerificationMessage'] = obj.data.SmsVerificationMessage;
                reqParams.tf['sms_verification_message'] = obj.data.SmsVerificationMessage;
                reqParams.cfn['EmailVerificationMessage'] = obj.data.EmailVerificationMessage;
                reqParams.tf['email_verification_message'] = obj.data.EmailVerificationMessage;
                reqParams.cfn['EmailVerificationSubject'] = obj.data.EmailVerificationSubject;
                reqParams.tf['email_verification_subject'] = obj.data.EmailVerificationSubject;
                reqParams.cfn['SmsAuthenticationMessage'] = obj.data.SmsAuthenticationMessage;
                reqParams.tf['sms_authentication_message'] = obj.data.SmsAuthenticationMessage;
                reqParams.cfn['MfaConfiguration'] = obj.data.MfaConfiguration;
                reqParams.tf['mfa_configuration'] = obj.data.MfaConfiguration;
                reqParams.cfn['DeviceConfiguration'] = obj.data.DeviceConfiguration;
                if (obj.data.DeviceConfiguration) {
                    reqParams.tf['device_configuration'] = {
                        'challenge_required_on_new_device': obj.data.DeviceConfiguration.ChallengeRequiredOnNewDevice,
                        'device_only_remembered_on_user_prompt': obj.data.DeviceConfiguration.DeviceOnlyRememberedOnUserPrompt
                    };
                }
                reqParams.cfn['EmailConfiguration'] = obj.data.EmailConfiguration;
                if (obj.data.EmailConfiguration) {
                    reqParams.tf['email_configuration'] = {
                        'reply_to_email_address': obj.data.EmailConfiguration.ReplyToEmailAddress,
                        'source_arn': obj.data.EmailConfiguration.SourceArn
                    };
                }
                reqParams.cfn['SmsConfiguration'] = obj.data.SmsConfiguration;
                if (obj.data.SmsConfiguration) {
                    reqParams.tf['sms_configuration'] = {
                        'external_id': obj.data.SmsConfiguration.ExternalId,
                        'sns_caller_arn': obj.data.SmsConfiguration.SnsCallerArn
                    };
                }
                reqParams.cfn['AdminCreateUserConfig'] = obj.data.AdminCreateUserConfig;
                if (obj.data.AdminCreateUserConfig) {
                    var invitemessagetemplate = null;
                    if (obj.data.AdminCreateUserConfig.InviteMessageTemplate) {
                        invitemessagetemplate = {
                            'email_message': obj.data.AdminCreateUserConfig.InviteMessageTemplate.EmailMessage,
                            'email_subject': obj.data.AdminCreateUserConfig.InviteMessageTemplate.EmailSubject,
                            'sms_message': obj.data.AdminCreateUserConfig.InviteMessageTemplate.SMSMessage
                        };
                    }
                    reqParams.tf['admin_create_user_config'] = {
                        'allow_admin_create_user_only': obj.data.AdminCreateUserConfig.AllowAdminCreateUserOnly,
                        'invite_message_template': invitemessagetemplate,
                        'unused_account_validity_days': obj.data.AdminCreateUserConfig.UnusedAccountValidityDays
                    };
                }
                reqParams.cfn['UserPoolTags'] = obj.data.UserPoolTags;
                if (obj.data.UserPoolTags) {
                    reqParams.tf['tags'] = {};
                    Object.keys(obj.data.UserPoolTags).forEach(tag => {
                        reqParams.tf['tags'][tag] = obj.data.UserPoolTags[tag];
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cognito', obj.id),
                    'region': obj.region,
                    'service': 'cognito',
                    'type': 'AWS::Cognito::UserPool',
                    'terraformType': 'aws_cognito_user_pool',
                    'options': reqParams
                });
            } else if (obj.type == "cognito.userpooluser") {
                reqParams.cfn['Username'] = obj.data.Username;

                /*
                TODO:
                DesiredDeliveryMediums: 
                    - String
                ForceAliasCreation: Boolean
                UserAttributes: 
                    - AttributeType
                MessageAction: String
                UserPoolId: String
                ValidationData: 
                    - AttributeType
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cognito', obj.id),
                    'region': obj.region,
                    'service': 'cognito',
                    'type': 'AWS::Cognito::UserPoolUser',
                    'options': reqParams
                });
            } else if (obj.type == "cognito.userpoolgroup") {
                reqParams.cfn['GroupName'] = obj.data.GroupName;
                reqParams.cfn['UserPoolId'] = obj.data.UserPoolId;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['Precedence'] = obj.data.Precedence;
                reqParams.cfn['RoleArn'] = obj.data.RoleArn;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cognito', obj.id),
                    'region': obj.region,
                    'service': 'cognito',
                    'type': 'AWS::Cognito::UserPoolGroup',
                    'options': reqParams
                });
            } else if (obj.type == "cognito.userpoolusertogroupattachment") {
                reqParams.cfn['GroupName'] = obj.data.group.GroupName;
                reqParams.cfn['Username'] = obj.data.user.Username;
                reqParams.cfn['UserPoolId'] = obj.data.userpoolid;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cognito', obj.id),
                    'region': obj.region,
                    'service': 'cognito',
                    'type': 'AWS::Cognito::UserPoolUserToGroupAttachment',
                    'options': reqParams
                });
            } else if (obj.type == "cognito.userpoolclient") {
                reqParams.cfn['UserPoolId'] = obj.data.UserPoolId;
                reqParams.tf['user_pool_id'] = obj.data.UserPoolId;
                reqParams.cfn['ClientName'] = obj.data.ClientName;
                reqParams.tf['name'] = obj.data.ClientName;
                reqParams.cfn['RefreshTokenValidity'] = obj.data.RefreshTokenValidity;
                reqParams.tf['refresh_token_validity'] = obj.data.RefreshTokenValidity;
                reqParams.cfn['ReadAttributes'] = obj.data.ReadAttributes;
                reqParams.tf['read_attributes'] = obj.data.ReadAttributes;
                reqParams.cfn['WriteAttributes'] = obj.data.WriteAttributes;
                reqParams.tf['write_attributes'] = obj.data.WriteAttributes;
                reqParams.cfn['ExplicitAuthFlows'] = obj.data.ExplicitAuthFlows;
                reqParams.tf['explicit_auth_flows'] = obj.data.ExplicitAuthFlows;
                if (obj.data.ClientSecret && obj.data.ClientSecret.length > 0) {
                    reqParams.cfn['GenerateSecret'] = true;
                    reqParams.tf['generate_secret'] = true;
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cognito', obj.id),
                    'region': obj.region,
                    'service': 'cognito',
                    'type': 'AWS::Cognito::UserPoolClient',
                    'terraformType': 'aws_cognito_user_pool_client',
                    'options': reqParams
                });
            } else if (obj.type == "guardduty.member") {
                reqParams.cfn['DetectorId'] = obj.data.DetectorId;
                reqParams.tf['detector_id'] = obj.data.DetectorId;
                reqParams.cfn['Email'] = obj.data.Email;
                reqParams.tf['email'] = obj.data.Email;
                reqParams.cfn['MemberId'] = obj.data.AccountId;
                reqParams.tf['account_id'] = obj.data.AccountId;

                /*
                TODO:
                Status: String
                Message: String
                DisableEmailNotification: Boolean
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('guardduty', obj.id),
                    'region': obj.region,
                    'service': 'guardduty',
                    'type': 'AWS::GuardDuty::Member',
                    'terraformType': 'aws_guardduty_member',
                    'options': reqParams
                });
            } else if (obj.type == "guardduty.filter") {
                reqParams.cfn['Action'] = obj.data.Action;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Rank'] = obj.data.Rank;
                reqParams.cfn['DetectorId'] = obj.data.DetectorId;
                reqParams.cfn['FindingCriteria'] = obj.data.FindingCriteria;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('guardduty', obj.id),
                    'region': obj.region,
                    'service': 'guardduty',
                    'type': 'AWS::GuardDuty::Filter',
                    'options': reqParams
                });
            } else if (obj.type == "guardduty.ipset") {
                reqParams.cfn['Format'] = obj.data.Format;
                reqParams.tf['format'] = obj.data.Format;
                reqParams.cfn['Location'] = obj.data.Location;
                reqParams.tf['location'] = obj.data.Location;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                if (obj.data.Status == "ACTIVE") {
                    reqParams.cfn['Activate'] = true;
                    reqParams.tf['activate'] = true;
                } else {
                    reqParams.cfn['Activate'] = false;
                    reqParams.tf['activate'] = false;
                }
                reqParams.cfn['DetectorId'] = obj.data.DetectorId;
                reqParams.tf['detector_id'] = obj.data.DetectorId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('guardduty', obj.id),
                    'region': obj.region,
                    'service': 'guardduty',
                    'type': 'AWS::GuardDuty::IPSet',
                    'terraformType': 'aws_guardduty_ipset',
                    'options': reqParams
                });
            } else if (obj.type == "guardduty.threatintelset") {
                reqParams.cfn['Format'] = obj.data.Format;
                reqParams.tf['format'] = obj.data.Format;
                reqParams.cfn['Location'] = obj.data.Location;
                reqParams.tf['location'] = obj.data.Location;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                if (obj.data.Status == "ACTIVE") {
                    reqParams.cfn['Activate'] = true;
                    reqParams.tf['activate'] = true;
                } else {
                    reqParams.cfn['Activate'] = false;
                    reqParams.tf['activate'] = false;
                }
                reqParams.cfn['DetectorId'] = obj.data.DetectorId;
                reqParams.tf['detector_id'] = obj.data.DetectorId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('guardduty', obj.id),
                    'region': obj.region,
                    'service': 'guardduty',
                    'type': 'AWS::GuardDuty::ThreatIntelSet',
                    'terraformType': 'aws_guardduty_threatintelset',
                    'options': reqParams
                });
            } else if (obj.type == "guardduty.master") {
                reqParams.cfn['DetectorId'] = obj.data.DetectorId;
                reqParams.cfn['MasterId'] = obj.data.AccountId;
                reqParams.cfn['InvitationId'] = obj.data.InvitationId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('guardduty', obj.id),
                    'region': obj.region,
                    'service': 'guardduty',
                    'type': 'AWS::GuardDuty::Master',
                    'options': reqParams
                });
            } else if (obj.type == "guardduty.detector") {
                if (obj.data.Status == "ENABLED") {
                    reqParams.cfn['Enable'] = true;
                    reqParams.tf['enable'] = true;
                } else {
                    reqParams.cfn['Enable'] = false;
                    reqParams.tf['enable'] = false;
                }
                reqParams.cfn['FindingPublishingFrequency'] = obj.data.FindingPublishingFrequency;
                reqParams.tf['finding_publishing_frequency'] = obj.data.FindingPublishingFrequency;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('guardduty', obj.id),
                    'region': obj.region,
                    'service': 'guardduty',
                    'type': 'AWS::GuardDuty::Detector',
                    'terraformType': 'aws_guardduty_detector',
                    'options': reqParams
                });
            } else if (obj.type == "appstream.stackfleetassociation") {
                reqParams.cfn['FleetName'] = obj.data.fleetname;
                reqParams.cfn['StackName'] = obj.data.stackname;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appstream', obj.id),
                    'region': obj.region,
                    'service': 'appstream',
                    'type': 'AWS::AppStream::StackFleetAssociation',
                    'options': reqParams
                });
            } else if (obj.type == "appstream.fleet") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['DisplayName'] = obj.data.DisplayName;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['ImageName'] = obj.data.ImageName;
                reqParams.cfn['ImageArn'] = obj.data.ImageArn;
                reqParams.cfn['InstanceType'] = obj.data.InstanceType;
                reqParams.cfn['FleetType'] = obj.data.FleetType;
                reqParams.cfn['MaxUserDurationInSeconds'] = obj.data.MaxUserDurationInSeconds;
                reqParams.cfn['DisconnectTimeoutInSeconds'] = obj.data.DisconnectTimeoutInSeconds;
                reqParams.cfn['VpcConfig'] = obj.data.VpcConfig;
                reqParams.cfn['EnableDefaultInternetAccess'] = obj.data.EnableDefaultInternetAccess;
                reqParams.cfn['DomainJoinInfo'] = obj.data.DomainJoinInfo;
                if (obj.data.ComputeCapacityStatus) {
                    reqParams.cfn['ComputeCapacity'] = obj.data.ComputeCapacityStatus.Desired;
                }

                /*
                TODO:
                Tags
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appstream', obj.id),
                    'region': obj.region,
                    'service': 'appstream',
                    'type': 'AWS::AppStream::Fleet',
                    'options': reqParams
                });
            } else if (obj.type == "appstream.user") {
                reqParams.cfn['UserName'] = obj.data.UserName;
                reqParams.cfn['FirstName'] = obj.data.FirstName;
                reqParams.cfn['LastName'] = obj.data.LastName;
                reqParams.cfn['AuthenticationType'] = obj.data.AuthenticationType;

                /*
                TODO:
                MessageAction: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appstream', obj.id),
                    'region': obj.region,
                    'service': 'appstream',
                    'type': 'AWS::AppStream::User',
                    'options': reqParams
                });
            } else if (obj.type == "appstream.stack") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['DisplayName'] = obj.data.DisplayName;
                reqParams.cfn['StorageConnectors'] = obj.data.StorageConnectors;
                reqParams.cfn['RedirectURL'] = obj.data.RedirectURL;
                reqParams.cfn['FeedbackURL'] = obj.data.FeedbackURL;
                reqParams.cfn['UserSettings'] = obj.data.UserSettings;
                if (obj.data.ApplicationSettings) {
                    reqParams.cfn['ApplicationSettings'] = {
                        'Enabled': obj.data.ApplicationSettings.Enabled,
                        'SettingsGroup': obj.data.ApplicationSettings.SettingsGroup
                    };
                }

                /*
                TODO:
                AttributesToDelete: 
                    - String
                DeleteStorageConnectors: Boolean
                Tags
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appstream', obj.id),
                    'region': obj.region,
                    'service': 'appstream',
                    'type': 'AWS::AppStream::Stack',
                    'options': reqParams
                });
            } else if (obj.type == "appstream.imagebuilder") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['DisplayName'] = obj.data.DisplayName;
                reqParams.cfn['ImageArn'] = obj.data.ImageArn;
                reqParams.cfn['VpcConfig'] = obj.data.VpcConfig;
                reqParams.cfn['InstanceType'] = obj.data.InstanceType;
                reqParams.cfn['EnableDefaultInternetAccess'] = obj.data.EnableDefaultInternetAccess;
                reqParams.cfn['DomainJoinInfo'] = obj.data.DomainJoinInfo;
                reqParams.cfn['AppstreamAgentVersion'] = obj.data.AppstreamAgentVersion;

                /*
                TODO:
                ImageName: String
                Tags
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appstream', obj.id),
                    'region': obj.region,
                    'service': 'appstream',
                    'type': 'AWS::AppStream::ImageBuilder',
                    'options': reqParams
                });
            } else if (obj.type == "appstream.directoryconfig") {
                reqParams.cfn['DirectoryName'] = obj.data.DirectoryName;
                reqParams.cfn['ServiceAccountCredentials'] = obj.data.ServiceAccountCredentials;
                reqParams.cfn['OrganizationalUnitDistinguishedNames'] = obj.data.OrganizationalUnitDistinguishedNames;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appstream', obj.id),
                    'region': obj.region,
                    'service': 'appstream',
                    'type': 'AWS::AppStream::DirectoryConfig',
                    'options': reqParams
                });
            } else if (obj.type == "appstream.stackuserassociation") {
                reqParams.cfn['StackName'] = obj.data.StackName;
                reqParams.cfn['UserName'] = obj.data.UserName;
                reqParams.cfn['AuthenticationType'] = obj.data.AuthenticationType;
                reqParams.cfn['SendEmailNotification'] = obj.data.SendEmailNotification;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appstream', obj.id),
                    'region': obj.region,
                    'service': 'appstream',
                    'type': 'AWS::AppStream::StackUserAssociation',
                    'options': reqParams
                });
            } else if (obj.type == "ses.eventdestination") {
                reqParams.cfn['ConfigurationSetName'] = obj.data.ConfigurationSetName;
                reqParams.tf['configuration_set_name'] = obj.data.ConfigurationSetName;
                reqParams.cfn['EventDestination'] = {
                    'CloudWatchDestination': obj.data.CloudWatchDestination,
                    'Enabled': obj.data.Enabled,
                    'MatchingEventTypes': obj.data.MatchingEventTypes,
                    'Name': obj.data.Name,
                    'KinesisFirehoseDestination': obj.data.KinesisFirehoseDestination,
                };
                reqParams.tf['enabled'] = obj.data.Enabled;
                reqParams.tf['matching_types'] = obj.data.MatchingEventTypes;
                reqParams.tf['name'] = obj.data.Name;
                if (obj.data.CloudWatchDestination && obj.data.CloudWatchDestination.DimensionConfigurations) {
                    reqParams.tf['cloudwatch_destination'] = [];
                    obj.data.CloudWatchDestination.DimensionConfigurations.forEach(dimensionconfiguration => {
                        reqParams.tf['cloudwatch_destination'].push({
                            'default_value': dimensionconfiguration.DefaultDimensionValue,
                            'dimension_name': dimensionconfiguration.DimensionName,
                            'value_source': dimensionconfiguration.DimensionValueSource
                        });
                    });
                }
                if (obj.data.KinesisFirehoseDestination) {
                    reqParams.tf['kinesis_destination'] = {
                        'stream_arn': obj.data.KinesisFirehoseDestination.DeliveryStreamARN,
                        'role_arn': obj.data.KinesisFirehoseDestination.IAMRoleARN
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ses', obj.id),
                    'region': obj.region,
                    'service': 'ses',
                    'type': 'AWS::SES::ConfigurationSetEventDestination',
                    'terraformType': 'aws_ses_event_destination',
                    'options': reqParams
                });
            } else if (obj.type == "ses.configurationset") {
                reqParams.cfn['Name'] = obj.data.ConfigurationSet.Name;
                reqParams.tf['name'] = obj.data.ConfigurationSet.Name;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ses', obj.id),
                    'region': obj.region,
                    'service': 'ses',
                    'type': 'AWS::SES::ConfigurationSet',
                    'terraformType': 'aws_ses_configuration_set',
                    'options': reqParams
                });
            } else if (obj.type == "ses.receiptfilter") {
                reqParams.cfn['Filter'] = obj.data;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.tf['cidr'] = obj.data.IpFilter.Cidr;
                reqParams.tf['policy'] = obj.data.IpFilter.Policy;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ses', obj.id),
                    'region': obj.region,
                    'service': 'ses',
                    'type': 'AWS::SES::ReceiptFilter',
                    'terraformType': 'aws_ses_receipt_filter',
                    'options': reqParams
                });
            } else if (obj.type == "ses.receiptrule") {
                reqParams.cfn['After'] = obj.data.After;
                reqParams.tf['after'] = obj.data.After;
                reqParams.cfn['Rule'] = {
                    'ScanEnabled': obj.data.ScanEnabled,
                    'Recipients': obj.data.Recipients,
                    'Actions': obj.data.Actions,
                    'Enabled': obj.data.Enabled,
                    'Name': obj.data.Name,
                    'TlsPolicy': obj.data.TlsPolicy
                }
                reqParams.tf['scan_enabled'] = obj.data.ScanEnabled;
                reqParams.tf['recipients'] = obj.data.Recipients;
                if (obj.data.Actions) {
                    var position = 1;
                    obj.data.Actions.forEach(action => {
                        if (action.AddHeaderAction) {
                            if (!reqParams.tf['add_header_action']) {
                                reqParams.tf['add_header_action'] = [];
                            }
                            reqParams.tf['add_header_action'].push({
                                'header_name': action.AddHeaderAction.HeaderName,
                                'header_value': action.AddHeaderAction.HeaderValue,
                                'position': position
                            });
                        }
                        if (action.BounceAction) {
                            if (!reqParams.tf['bounce_action']) {
                                reqParams.tf['bounce_action'] = [];
                            }
                            reqParams.tf['bounce_action'].push({
                                'message': action.BounceAction.Message,
                                'sender': action.BounceAction.Sender,
                                'smtp_reply_code': action.BounceAction.SmtpReplyCode,
                                'status_code': action.BounceAction.StatusCode,
                                'topic_arn': action.BounceAction.TopicArn,
                                'position': position
                            });
                        }
                        if (action.LambdaAction) {
                            if (!reqParams.tf['lambda_action']) {
                                reqParams.tf['lambda_action'] = [];
                            }
                            reqParams.tf['lambda_action'].push({
                                'function_arn': action.LambdaAction.FunctionArn,
                                'invocation_type': action.LambdaAction.InvocationType,
                                'topic_arn': action.LambdaAction.TopicArn,
                                'position': position
                            });
                        }
                        if (action.S3Action) {
                            if (!reqParams.tf['s3_action']) {
                                reqParams.tf['s3_action'] = [];
                            }
                            reqParams.tf['s3_action'].push({
                                'bucket_name': action.S3Action.BucketName,
                                'kms_key_arn': action.S3Action.KmsKeyArn,
                                'object_key_prefix': action.S3Action.ObjectKeyPrefix,
                                'topic_arn': action.S3Action.TopicArn,
                                'position': position
                            });
                        }
                        if (action.SNSAction) {
                            if (!reqParams.tf['sns_action']) {
                                reqParams.tf['sns_action'] = [];
                            }
                            reqParams.tf['sns_action'].push({
                                'topic_arn': action.SNSAction.TopicArn,
                                'position': position
                            });
                        }
                        if (action.StopAction) {
                            if (!reqParams.tf['stop_action']) {
                                reqParams.tf['stop_action'] = [];
                            }
                            reqParams.tf['stop_action'].push({
                                'scope': action.StopAction.Scope,
                                'topic_arn': action.StopAction.TopicArn,
                                'position': position
                            });
                        }
                        if (action.WorkmailAction) {
                            if (!reqParams.tf['workmail_action']) {
                                reqParams.tf['workmail_action'] = [];
                            }
                            reqParams.tf['workmail_action'].push({
                                'organization_arn': action.WorkmailAction.OrganizationArn,
                                'topic_arn': action.WorkmailAction.TopicArn,
                                'position': position
                            });
                        }

                        position += 1;
                    });
                }
                reqParams.tf['enabled'] = obj.data.Enabled;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.tf['tls_policy'] = obj.data.TlsPolicy;

                reqParams.cfn['RuleSetName'] = obj.data.RuleSetName;
                reqParams.tf['rule_set_name'] = obj.data.RuleSetName;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ses', obj.id),
                    'region': obj.region,
                    'service': 'ses',
                    'type': 'AWS::SES::ReceiptRule',
                    'terraformType': 'aws_ses_receipt_filter',
                    'options': reqParams
                });
            } else if (obj.type == "ses.receiptruleset") {
                reqParams.cfn['RuleSetName'] = obj.data.Name;
                reqParams.tf['rule_set_name'] = obj.data.Name;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ses', obj.id),
                    'region': obj.region,
                    'service': 'ses',
                    'type': 'AWS::SES::ReceiptRuleSet',
                    'terraformType': 'aws_ses_receipt_rule_set',
                    'options': reqParams
                });
            } else if (obj.type == "ses.template") {
                reqParams.cfn['Template'] = obj.data.Template;
                reqParams.tf['html'] = obj.data.Template.HtmlPart;
                reqParams.tf['subject'] = obj.data.Template.SubjectPart;
                reqParams.tf['text'] = obj.data.Template.TextPart;
                reqParams.tf['name'] = obj.data.Template.TemplateName;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ses', obj.id),
                    'region': obj.region,
                    'service': 'ses',
                    'type': 'AWS::SES::Template',
                    'terraformType': 'aws_ses_template',
                    'options': reqParams
                });
            } else if (obj.type == "eks.cluster") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.tf['name'] = obj.data.name;
                reqParams.cfn['RoleArn'] = obj.data.roleArn;
                reqParams.tf['role_arn'] = obj.data.roleArn;
                reqParams.cfn['Version'] = obj.data.version;
                reqParams.tf['version'] = obj.data.version;
                if (obj.data.resourcesVpcConfig) {
                    reqParams.cfn['ResourcesVpcConfig'] = {
                        'SecurityGroupIds': obj.data.resourcesVpcConfig.securityGroupIds,
                        'SubnetIds': obj.data.resourcesVpcConfig.subnetIds
                    };
                    reqParams.tf['vpc_config'] = {
                        'security_group_ids': obj.data.resourcesVpcConfig.securityGroupIds,
                        'subnet_ids': obj.data.resourcesVpcConfig.subnetIds
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('eks', obj.id),
                    'region': obj.region,
                    'service': 'eks',
                    'type': 'AWS::EKS::Cluster',
                    'terraformType': 'aws_eks_cluster',
                    'options': reqParams
                });
            } else if (obj.type == "iam.accesskey") {
                reqParams.cfn['Status'] = obj.data.Status;
                reqParams.tf['status'] = obj.data.Status;
                reqParams.cfn['UserName'] = obj.data.UserName;
                reqParams.tf['user'] = obj.data.UserName;

                /*
                SKIPPED:
                Serial
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iam', obj.id),
                    'region': obj.region,
                    'service': 'iam',
                    'type': 'AWS::IAM::AccessKey',
                    'terraformType': 'aws_iam_access_key',
                    'options': reqParams
                });
            } else if (obj.type == "iam.policy") {
                var terraformType = null;

                reqParams.cfn['PolicyDocument'] = unescape(obj.data.document);
                reqParams.tf['policy'] = unescape(obj.data.document);
                if (obj.data.type == "user") {
                    reqParams.cfn['Users'] = [obj.data.username];
                    terraformType = "aws_iam_user_policy";
                    reqParams.tf['user'] = obj.data.username;
                } else if (obj.data.type == "group") {
                    reqParams.cfn['Groups'] = [obj.data.groupname];
                    terraformType = "aws_iam_group_policy";
                    reqParams.tf['group'] = obj.data.groupname;
                } else if (obj.data.type == "role") {
                    reqParams.cfn['Roles'] = [obj.data.rolename];
                    terraformType = "aws_iam_role_policy";
                    reqParams.tf['role'] = obj.data.rolename;
                }
                reqParams.cfn['PolicyName'] = obj.data.policy.PolicyName;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iam', obj.id),
                    'region': obj.region,
                    'service': 'iam',
                    'type': 'AWS::IAM::Policy',
                    'terraformType': terraformType,
                    'options': reqParams
                });
            } else if (obj.type == "iam.user") {
                reqParams.cfn['Path'] = obj.data.Path;
                reqParams.tf['path'] = obj.data.Path;
                reqParams.cfn['UserName'] = obj.data.UserName;
                reqParams.tf['name'] = obj.data.UserName;
                if (obj.data.PermissionsBoundary) {
                    reqParams.cfn['PermissionsBoundary'] = obj.data.PermissionsBoundary.PermissionsBoundaryArn;
                    reqParams.tf['permissions_boundary'] = obj.data.PermissionsBoundary.PermissionsBoundaryArn;
                }

                /*
                TODO:
                Groups:
                    - String
                LoginProfile:
                    LoginProfile Type
                ManagedPolicyArns:
                    - String
                Policies:
                    - Policies
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iam', obj.id),
                    'region': obj.region,
                    'service': 'iam',
                    'type': 'AWS::IAM::User',
                    'terraformType': 'aws_iam_user',
                    'options': reqParams
                });
            } else if (obj.type == "iam.group") {
                reqParams.cfn['Path'] = obj.data.Path;
                reqParams.tf['path'] = obj.data.Path;
                reqParams.cfn['GroupName'] = obj.data.GroupName;
                reqParams.tf['name'] = obj.data.GroupName;

                /*
                TODO:
                ManagedPolicyArns: [ String, ... ]
                Policies:
                    - Policies
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iam', obj.id),
                    'region': obj.region,
                    'service': 'iam',
                    'type': 'AWS::IAM::Group',
                    'terraformType': 'aws_iam_group',
                    'options': reqParams
                });
            } else if (obj.type == "iam.role") {
                reqParams.cfn['Path'] = obj.data.Path;
                reqParams.tf['path'] = obj.data.Path;
                reqParams.cfn['RoleName'] = obj.data.RoleName;
                reqParams.tf['name'] = obj.data.RoleName;
                reqParams.cfn['AssumeRolePolicyDocument'] = unescape(obj.data.AssumeRolePolicyDocument);
                reqParams.tf['assume_role_policy'] = unescape(obj.data.AssumeRolePolicyDocument);
                reqParams.cfn['MaxSessionDuration'] = obj.data.MaxSessionDuration;
                reqParams.tf['max_session_duration'] = obj.data.MaxSessionDuration;
                if (obj.data.PermissionsBoundary) {
                    reqParams.cfn['PermissionsBoundary'] = obj.data.PermissionsBoundary.PermissionsBoundaryArn;
                    reqParams.tf['permissions_boundary'] = obj.data.PermissionsBoundary.PermissionsBoundaryArn;
                }

                /*
                TODO:
                ManagedPolicyArns:
                    - String
                Policies:
                    - Policies
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iam', obj.id),
                    'region': obj.region,
                    'service': 'iam',
                    'type': 'AWS::IAM::Role',
                    'terraformType': 'aws_iam_role',
                    'options': reqParams
                });
            } else if (obj.type == "iam.managedpolicy") {
                reqParams.cfn['ManagedPolicyName'] = obj.data.PolicyName;
                reqParams.tf['name'] = obj.data.PolicyName;
                reqParams.cfn['Path'] = obj.data.Path;
                reqParams.tf['path'] = obj.data.Path;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['PolicyDocument'] = unescape(obj.data.PolicyDocument);
                reqParams.tf['policy'] = unescape(obj.data.PolicyDocument);

                /*
                TODO:
                Groups:
                    - String
                Roles:
                    - String
                Users:
                    - String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iam', obj.id),
                    'region': obj.region,
                    'service': 'iam',
                    'type': 'AWS::IAM::ManagedPolicy',
                    'terraformType': 'aws_iam_policy',
                    'options': reqParams
                });
            } else if (obj.type == "iam.instanceprofile") {
                reqParams.cfn['Path'] = obj.data.Path;
                reqParams.tf['path'] = obj.data.Path;
                reqParams.cfn['InstanceProfileName'] = obj.data.InstanceProfileName;
                reqParams.tf['name'] = obj.data.InstanceProfileName;
                if (obj.data.Roles) {
                    reqParams.cfn['Roles'] = [];
                    reqParams.tf['roles'] = [];
                    obj.data.Roles.forEach(role => {
                        reqParams.cfn['Roles'].push(role.Arn);
                        reqParams.tf['roles'].push(role.Arn);
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iam', obj.id),
                    'region': obj.region,
                    'service': 'iam',
                    'type': 'AWS::IAM::InstanceProfile',
                    'terraformType': 'aws_iam_instance_profile',
                    'options': reqParams
                });
            } else if (obj.type == "eventbridge.rule") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['EventPattern'] = obj.data.EventPattern;
                reqParams.tf['event_pattern'] = obj.data.EventPattern;
                reqParams.cfn['ScheduleExpression'] = obj.data.ScheduleExpression;
                reqParams.tf['schedule_expression'] = obj.data.ScheduleExpression;
                reqParams.cfn['State'] = obj.data.State;
                if (obj.data.Targets) {
                    reqParams.cfn['Targets'] = [];
                    obj.data.Targets.forEach(target => {
                        var ecsParameters = null;
                        if (target.EcsParameters) {
                            ecsParameters = {
                                'TaskDefinitionArn': target.EcsParameters.TaskDefinitionArn,
                                'TaskCount': target.EcsParameters.TaskCount
                            };
                        }
                        reqParams.cfn['Targets'].push({
                            'Arn': target.Arn,
                            'EcsParameters': ecsParameters,
                            'Id': target.Id,
                            'Input': target.Input,
                            'InputPath': target.InputPath,
                            'InputTransformer': target.InputTransformer,
                            'KinesisParameters': target.KinesisParameters,
                            'RoleArn': target.RoleArn,
                            'RunCommandParameters': target.RunCommandParameters,
                            'SqsParameters': target.SqsParameters
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('events', obj.id),
                    'region': obj.region,
                    'service': 'events',
                    'type': 'AWS::Events::Rule',
                    'terraformType': 'aws_cloudwatch_event_rule',
                    'options': reqParams
                });

                if (obj.data.Targets) {
                    obj.data.Targets.forEach(target => {
                        reqParams = {
                            'boto3': {},
                            'go': {},
                            'cfn': {},
                            'cli': {},
                            'tf': {},
                            'iam': {}
                        };

                        reqParams.tf['rule'] = obj.data.Name;
                        reqParams.tf['target_id'] = obj.data.Id;
                        reqParams.tf['arn'] = obj.data.Arn;
                        reqParams.tf['input'] = obj.data.Input;
                        reqParams.tf['input_path'] = obj.data.InputPath;
                        reqParams.tf['role_arn'] = obj.data.RoleArn;
                        if (target.InputTransformer) {
                            reqParams.tf['input_transformer'] = {
                                'input_paths': obj.data.InputTransformer.InputPathsMap,
                                'input_template': obj.data.InputTransformer.InputTemplate
                            };
                        }
                        if (target.EcsParameters) {
                            var networkconfiguration = null;
                            if (target.EcsParameters.NetworkConfiguration && target.EcsParameters.NetworkConfiguration.awsvpcConfiguration) {
                                networkconfiguration = {
                                    'subnets': target.EcsParameters.NetworkConfiguration.awsvpcConfiguration.Subnets,
                                    'security_groups': target.EcsParameters.NetworkConfiguration.awsvpcConfiguration.SecurityGroups,
                                    'assign_public_ip': target.EcsParameters.NetworkConfiguration.awsvpcConfiguration.AssignPublicIp
                                };
                            }
                            reqParams.tf['ecs_target'] = {
                                'task_definition_arn': target.EcsParameters.TaskDefinitionArn,
                                'task_count': target.EcsParameters.TaskCount,
                                'network_configuration': networkconfiguration,
                                'platform_version': target.EcsParameters.PlatformVersion,
                                'task_count': target.EcsParameters.Group
                            };
                        }
                        if (target.KinesisParameters) {
                            reqParams.tf['kinesis_target'] = {
                                'partition_key_path': target.KinesisParameters.PartitionKeyPath
                            };
                        }
                        if (target.RunCommandParameters) {
                            reqParams.tf['run_command_targets'] = [];
                            target.RunCommandParameters.RunCommandTargets.forEach(runcommandtarget => {
                                reqParams.tf['run_command_targets'].push({
                                    'key': runcommandtarget.Key,
                                    'values': runcommandtarget.Values
                                });
                            });
                        }
                        if (target.EcsParameters) {
                            reqParams.tf['ecs_target'] = {
                                'task_definition_arn': target.EcsParameters.TaskDefinitionArn,
                                'task_count': target.EcsParameters.TaskCount
                            };
                        }
                        if (target.BatchParameters) {
                            var arraysize = null;
                            if (target.BatchParameters.ArrayProperties) {
                                arraysize = target.BatchParameters.ArrayProperties.Size;
                            }
                            var attempts = null;
                            if (target.BatchParameters.RetryStrategy) {
                                attempts = target.BatchParameters.RetryStrategy.Attempts;
                            }
                            reqParams.tf['batch_target'] = {
                                'job_definition': target.BatchParameters.JobDefinition,
                                'job_name': target.BatchParameters.JobName,
                                'array_size': arraysize,
                                'job_attempts': attempts
                            };
                        }
                        if (target.SqsParameters) {
                            reqParams.tf['sqs_target'] = {
                                'message_group_id': target.SqsParameters.MessageGroupId
                            };
                        }

                        tracked_resources.push({
                    'obj': obj,
                            'logicalId': getResourceName('cloudwatch', obj.id),
                            'region': obj.region,
                            'service': 'cloudwatch',
                            'terraformType': 'aws_cloudwatch_event_target',
                            'options': reqParams
                        });
                    });
                }
            } else if (obj.type == "eventbridge.eventbuspolicy") {
                reqParams.cfn['Action'] = obj.data.Action;
                if (obj.data.Condition && obj.data.Condition.StringEquals && obj.data.Condition.StringEquals['aws:PrincipalOrgID']) {
                    reqParams.cfn['Condition'] = {
                        'Key': 'aws:PrincipalOrgID',
                        'Type': 'StringEquals',
                        'Value': obj.data.Condition.StringEquals['aws:PrincipalOrgID']
                    };
                }
                reqParams.cfn['Principal'] = "*";
                if (obj.data.Principal && obj.data.Principal.AWS) {
                    reqParams.cfn['Principal'] = obj.data.Principal.AWS;
                }
                reqParams.cfn['StatementId'] = obj.data.Sid;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('eventbridge', obj.id),
                    'region': obj.region,
                    'service': 'eventbridge',
                    'type': 'AWS::Events::EventBusPolicy',
                    'options': reqParams
                });
            } else if (obj.type == "cloudwatch.destination") {
                reqParams.cfn['DestinationName'] = obj.data.destinationName;
                reqParams.tf['name'] = obj.data.destinationName;
                reqParams.cfn['RoleArn'] = obj.data.roleArn;
                reqParams.tf['role_arn'] = obj.data.roleArn;
                reqParams.cfn['TargetArn'] = obj.data.targetArn;
                reqParams.tf['target_arn'] = obj.data.targetArn;
                reqParams.cfn['DestinationPolicy'] = obj.data.accessPolicy;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cloudwatch', obj.id),
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'type': 'AWS::Logs::Destination',
                    'terraformType': 'aws_cloudwatch_log_destination',
                    'options': reqParams
                });
            } else if (obj.type == "cloudwatch.logstream") {
                reqParams.cfn['LogGroupName'] = obj.data.logGroupName;
                reqParams.tf['log_group_name'] = obj.data.logGroupName;
                reqParams.cfn['LogStreamName'] = obj.data.logStreamName;
                reqParams.tf['name'] = obj.data.logStreamName;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cloudwatch', obj.id),
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'type': 'AWS::Logs::LogStream',
                    'terraformType': 'aws_cloudwatch_log_stream',
                    'options': reqParams
                });
            } else if (obj.type == "cloudwatch.subscriptionfilter") {
                reqParams.cfn['LogGroupName'] = obj.data.logGroupName;
                reqParams.tf['log_group_name'] = obj.data.logGroupName;
                reqParams.cfn['FilterPattern'] = obj.data.filterPattern;
                reqParams.tf['filter_pattern'] = obj.data.filterPattern;
                reqParams.cfn['DestinationArn'] = obj.data.destinationArn;
                reqParams.tf['destination_arn'] = obj.data.destinationArn;
                reqParams.cfn['RoleArn'] = obj.data.roleArn;
                reqParams.tf['role_arn'] = obj.data.roleArn;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cloudwatch', obj.id),
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'type': 'AWS::Logs::SubscriptionFilter',
                    'terraformType': 'aws_cloudwatch_log_subscription_filter',
                    'options': reqParams
                });
            } else if (obj.type == "cloudwatch.loggroup") {
                reqParams.cfn['LogGroupName'] = obj.data.logGroupName;
                reqParams.tf['name'] = obj.data.logGroupName;
                reqParams.cfn['RetentionInDays'] = obj.data.retentionInDays;
                reqParams.tf['retention_in_days'] = obj.data.retentionInDays;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cloudwatch', obj.id),
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'type': 'AWS::Logs::LogGroup',
                    'terraformType': 'aws_cloudwatch_log_group',
                    'options': reqParams
                });
            } else if (obj.type == "cloudwatch.metricfilter") {
                reqParams.cfn['FilterPattern'] = obj.data.filterPattern;
                reqParams.tf['pattern'] = obj.data.filterPattern;
                reqParams.cfn['LogGroupName'] = obj.data.logGroupName;
                reqParams.tf['log_group_name'] = obj.data.logGroupName;
                if (obj.data.metricTransformations) {
                    reqParams.cfn['MetricTransformations'] = [];
                    reqParams.tf['metric_transformation'] = [];
                    obj.data.metricTransformations.forEach(metricTransformation => {
                        reqParams.cfn['MetricTransformations'].push({
                            'MetricName': metricTransformation.metricName,
                            'MetricNamespace': metricTransformation.metricNamespace,
                            'MetricValue': metricTransformation.metricValue,
                            'DefaultValue': metricTransformation.defaultValue,
                        });
                        reqParams.tf['metric_transformation'].push({
                            'name': metricTransformation.metricName,
                            'namespace': metricTransformation.metricNamespace,
                            'value': metricTransformation.metricValue,
                            'default_value': metricTransformation.defaultValue,
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cloudwatch', obj.id),
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'type': 'AWS::Logs::MetricFilter',
                    'terraformType': 'aws_cloudwatch_log_metric_filter',
                    'options': reqParams
                });
            } else if (obj.type == "cloudwatch.dashboard") {
                reqParams.cfn['DashboardName'] = obj.data.DashboardName;
                reqParams.tf['dashboard_name'] = obj.data.DashboardName;
                reqParams.cfn['DashboardBody'] = obj.data.DashboardBody;
                reqParams.tf['dashboard_body'] = obj.data.DashboardBody;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cloudwatch', obj.id),
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'type': 'AWS::CloudWatch::Dashboard',
                    'terraformType': 'aws_cloudwatch_dashboard',
                    'options': reqParams
                });
            } else if (obj.type == "ecr.repository") {
                reqParams.cfn['RepositoryName'] = obj.data.repositoryName;
                reqParams.cfn['name'] = obj.data.repositoryName;
                reqParams.cfn['LifecyclePolicy'] = {
                    'LifecyclePolicyText': obj.data.lifecyclePolicyText,
                    'RegistryId': obj.data.registryId
                };
                reqParams.cfn['RepositoryPolicyText'] = obj.data.policy;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ecr', obj.id),
                    'region': obj.region,
                    'service': 'ecr',
                    'type': 'AWS::ECR::Repository',
                    'terraformType': 'aws_ecr_repository',
                    'options': reqParams
                });

                if (obj.data.policy) {
                    reqParams = {
                        'boto3': {},
                        'go': {},
                        'cfn': {},
                        'cli': {},
                        'tf': {},
                        'iam': {}
                    };

                    reqParams.tf['repository'] = obj.data.repositoryName;
                    reqParams.tf['policy'] = obj.data.policy;

                    tracked_resources.push({
                    'obj': obj,
                        'logicalId': getResourceName('ecr', obj.id),
                        'region': obj.region,
                        'service': 'ecr',
                        'terraformType': 'aws_ecr_repository_policy',
                        'options': reqParams
                    });
                }

                if (obj.data.lifecyclePolicyText) {
                    reqParams = {
                        'boto3': {},
                        'go': {},
                        'cfn': {},
                        'cli': {},
                        'tf': {},
                        'iam': {}
                    };

                    reqParams.tf['repository'] = obj.data.repositoryName;
                    reqParams.tf['policy'] = obj.data.lifecyclePolicyText;

                    tracked_resources.push({
                    'obj': obj,
                        'logicalId': getResourceName('ecr', obj.id),
                        'region': obj.region,
                        'service': 'ecr',
                        'terraformType': 'aws_ecr_lifecycle_policy',
                        'options': reqParams
                    });
                }
            } else if (obj.type == "sns.subscription") {
                reqParams.cfn['TopicArn'] = obj.data.TopicArn;
                reqParams.tf['topic_arn'] = obj.data.TopicArn;
                reqParams.cfn['DeliveryPolicy'] = obj.data.Attributes.DeliveryPolicy;
                reqParams.tf['delivery_policy'] = obj.data.Attributes.DeliveryPolicy;
                reqParams.cfn['FilterPolicy'] = obj.data.Attributes.FilterPolicy;
                reqParams.tf['filter_policy'] = obj.data.Attributes.FilterPolicy;
                reqParams.cfn['Endpoint'] = obj.data.Endpoint;
                reqParams.tf['endpoint'] = obj.data.Endpoint;
                reqParams.cfn['Protocol'] = obj.data.Protocol;
                reqParams.tf['protocol'] = obj.data.Protocol;
                reqParams.cfn['RawMessageDelivery'] = obj.data.Attributes.RawMessageDelivery;
                reqParams.tf['raw_message_delivery'] = obj.data.Attributes.RawMessageDelivery;
                reqParams.cfn['Region'] = obj.data.TopicArn.split(":")[3];

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('sns', obj.id),
                    'region': obj.region,
                    'service': 'sns',
                    'type': 'AWS::SNS::Subscription',
                    'terraformType': 'aws_sns_topic_subscription',
                    'options': reqParams
                });
            } else if (obj.type == "greengrass.connectordefinition") {
                reqParams.cfn['Name'] = obj.data.Name;

                /*
                TODO:
                InitialVersion
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('greengrass', obj.id),
                    'region': obj.region,
                    'service': 'greengrass',
                    'type': 'AWS::Greengrass::ConnectorDefinition',
                    'options': reqParams
                });
            } else if (obj.type == "greengrass.connectordefinitionversion") {
                reqParams.cfn['ConnectorDefinitionId'] = obj.data.ConnectorDefinitionId;
                reqParams.cfn['Connectors'] = obj.data.Definition.Connectors;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('greengrass', obj.id),
                    'region': obj.region,
                    'service': 'greengrass',
                    'type': 'AWS::Greengrass::ConnectorDefinitionVersion',
                    'options': reqParams
                });
            } else if (obj.type == "greengrass.coredefinition") {
                reqParams.cfn['Name'] = obj.data.Name;

                /*
                TODO:
                InitialVersion
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('greengrass', obj.id),
                    'region': obj.region,
                    'service': 'greengrass',
                    'type': 'AWS::Greengrass::CoreDefinition',
                    'options': reqParams
                });
            } else if (obj.type == "greengrass.coredefinitionversion") {
                reqParams.cfn['CoreDefinitionId'] = obj.data.CoreDefinitionId;
                reqParams.cfn['Cores'] = obj.data.Definition.Cores;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('greengrass', obj.id),
                    'region': obj.region,
                    'service': 'greengrass',
                    'type': 'AWS::Greengrass::CoreDefinitionVersion',
                    'options': reqParams
                });
            } else if (obj.type == "greengrass.devicedefinition") {
                reqParams.cfn['Name'] = obj.data.Name;

                /*
                TODO:
                InitialVersion
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('greengrass', obj.id),
                    'region': obj.region,
                    'service': 'greengrass',
                    'type': 'AWS::Greengrass::DeviceDefinition',
                    'options': reqParams
                });
            } else if (obj.type == "greengrass.devicedefinitionversion") {
                reqParams.cfn['DeviceDefinitionId'] = obj.data.DeviceDefinitionId;
                reqParams.cfn['Devices'] = obj.data.Definition.Devices;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('greengrass', obj.id),
                    'region': obj.region,
                    'service': 'greengrass',
                    'type': 'AWS::Greengrass::DeviceDefinitionVersion',
                    'options': reqParams
                });
            } else if (obj.type == "greengrass.functiondefinition") {
                reqParams.cfn['Name'] = obj.data.Name;

                /*
                TODO:
                InitialVersion
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('greengrass', obj.id),
                    'region': obj.region,
                    'service': 'greengrass',
                    'type': 'AWS::Greengrass::FunctionDefinition',
                    'options': reqParams
                });
            } else if (obj.type == "greengrass.functiondefinitionversion") {
                reqParams.cfn['DefaultConfig'] = obj.data.DefaultConfig;
                reqParams.cfn['FunctionDefinitionId'] = obj.data.FunctionDefinitionId;
                reqParams.cfn['Functions'] = obj.data.Definition.Functions;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('greengrass', obj.id),
                    'region': obj.region,
                    'service': 'greengrass',
                    'type': 'AWS::Greengrass::FunctionDefinitionVersion',
                    'options': reqParams
                });
            } else if (obj.type == "greengrass.group") {
                reqParams.cfn['Name'] = obj.data.Name;

                /*
                TODO:
                RoleArn
                InitialVersion
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('greengrass', obj.id),
                    'region': obj.region,
                    'service': 'greengrass',
                    'type': 'AWS::Greengrass::Group',
                    'options': reqParams
                });
            } else if (obj.type == "greengrass.groupversion") {
                reqParams.cfn['GroupId'] = obj.data.Id;
                reqParams.cfn['LoggerDefinitionVersionArn'] = obj.data.Definition.LoggerDefinitionVersionArn;
                reqParams.cfn['DeviceDefinitionVersionArn'] = obj.data.Definition.DeviceDefinitionVersionArn;
                reqParams.cfn['FunctionDefinitionVersionArn'] = obj.data.Definition.FunctionDefinitionVersionArn;
                reqParams.cfn['CoreDefinitionVersionArn'] = obj.data.Definition.CoreDefinitionVersionArn;
                reqParams.cfn['ResourceDefinitionVersionArn'] = obj.data.Definition.ResourceDefinitionVersionArn;
                reqParams.cfn['ConnectorDefinitionVersionArn'] = obj.data.Definition.ConnectorDefinitionVersionArn;
                reqParams.cfn['SubscriptionDefinitionVersionArn'] = obj.data.Definition.SubscriptionDefinitionVersionArn;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('greengrass', obj.id),
                    'region': obj.region,
                    'service': 'greengrass',
                    'type': 'AWS::Greengrass::GroupVersion',
                    'options': reqParams
                });
            } else if (obj.type == "greengrass.loggerdefinition") {
                reqParams.cfn['Name'] = obj.data.Name;

                /*
                TODO:
                InitialVersion
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('greengrass', obj.id),
                    'region': obj.region,
                    'service': 'greengrass',
                    'type': 'AWS::Greengrass::LoggerDefinition',
                    'options': reqParams
                });
            } else if (obj.type == "greengrass.loggerdefinitionversion") {
                reqParams.cfn['LoggerDefinitionId'] = obj.data.LoggerDefinitionId;
                reqParams.cfn['Loggers'] = obj.data.Definition.Loggers;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('greengrass', obj.id),
                    'region': obj.region,
                    'service': 'greengrass',
                    'type': 'AWS::Greengrass::LoggerDefinitionVersion',
                    'options': reqParams
                });
            } else if (obj.type == "greengrass.resourcedefinition") {
                reqParams.cfn['Name'] = obj.data.Name;

                /*
                TODO:
                InitialVersion
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('greengrass', obj.id),
                    'region': obj.region,
                    'service': 'greengrass',
                    'type': 'AWS::Greengrass::ResourceDefinition',
                    'options': reqParams
                });
            } else if (obj.type == "greengrass.resourcedefinitionversion") {
                reqParams.cfn['ResourceDefinitionId'] = obj.data.ResourceDefinitionId;
                reqParams.cfn['Resources'] = obj.data.Definition.Resources;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('greengrass', obj.id),
                    'region': obj.region,
                    'service': 'greengrass',
                    'type': 'AWS::Greengrass::ResourceDefinitionVersion',
                    'options': reqParams
                });
            } else if (obj.type == "greengrass.subscriptiondefinition") {
                reqParams.cfn['Name'] = obj.data.Name;

                /*
                TODO:
                InitialVersion
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('greengrass', obj.id),
                    'region': obj.region,
                    'service': 'greengrass',
                    'type': 'AWS::Greengrass::SubscriptionDefinition',
                    'options': reqParams
                });
            } else if (obj.type == "greengrass.subscriptiondefinitionversion") {
                reqParams.cfn['SubscriptionDefinitionId'] = obj.data.SubscriptionDefinitionId;
                reqParams.cfn['Subscriptions'] = obj.data.Definition.Subscriptions;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('greengrass', obj.id),
                    'region': obj.region,
                    'service': 'greengrass',
                    'type': 'AWS::Greengrass::SubscriptionDefinitionVersion',
                    'options': reqParams
                });
            } else if (obj.type == "codepipeline.pipeline") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.tf['name'] = obj.data.name;
                reqParams.cfn['RoleArn'] = obj.data.roleArn;
                reqParams.tf['role_arn'] = obj.data.roleArn;
                if (obj.data.artifactStore) {
                    var encryptionKey = null;
                    var tfEncryptionKey = null;
                    if (obj.data.artifactStore.encryptionKey) {
                        encryptionKey = {
                            'Id': obj.data.artifactStore.encryptionKey.id,
                            'Type': obj.data.artifactStore.encryptionKey.type
                        };
                        tfEncryptionKey = {
                            'id': obj.data.artifactStore.encryptionKey.id,
                            'type': obj.data.artifactStore.encryptionKey.type
                        };
                    }
                    reqParams.cfn['ArtifactStore'] = {
                        'EncryptionKey': encryptionKey,
                        'Location': obj.data.artifactStore.location,
                        'Type': obj.data.artifactStore.type
                    };
                    reqParams.tf['artifact_store'] = {
                        'encryption_key': tfEncryptionKey,
                        'location': obj.data.artifactStore.location,
                        'type': obj.data.artifactStore.type
                    };
                }
                if (obj.data.artifactStores) {
                    reqParams.cfn['ArtifactStores'] = [];
                    array.forEach(element => {
                        var encryptionKey = null;
                        if (element.encryptionKey) {
                            encryptionKey = {
                                'Id': element.encryptionKey.id,
                                'Type': element.encryptionKey.type
                            };
                        }
                        reqParams.cfn['ArtifactStores'].push({
                            'ArtifactStore': {
                                'EncryptionKey': encryptionKey,
                                'Location': element.location,
                                'Type': element.type
                            },
                            'Region': region // May not be accurate
                        });
                    });
                }
                if (obj.data.stages) {
                    reqParams.cfn['Stages'] = [];
                    reqParams.tf['stages'] = [];
                    obj.data.stages.forEach(stage => {
                        var blockers = null;
                        if (stage.blockers) {
                            blockers = [];
                            stage.blockers.forEach(blocker => {
                                blockets.push({
                                    'Name': blocker.name,
                                    'Type': blocker.type
                                });
                            });
                        }
                        var actions = null;
                        var tfActions = null;
                        if (stage.actions) {
                            actions = [];
                            tfActions = [];
                            stage.actions.forEach(action => {
                                var actionTypeId = null;
                                if (action.actionTypeId) {
                                    actionTypeId = {
                                        'Category': action.actionTypeId.category,
                                        'Owner': action.actionTypeId.owner,
                                        'Provider': action.actionTypeId.provider,
                                        'Version': action.actionTypeId.version
                                    };
                                }
                                var outputArtifacts = null;
                                var tfOutputArtifacts = null;
                                if (action.outputArtifacts) {
                                    outputArtifacts = [];
                                    tfOutputArtifacts = [];
                                    outputArtifacts.push({
                                        'Name': action.actionTypeId.name
                                    });
                                    tfOutputArtifacts.push(action.actionTypeId.name);
                                }
                                var inputArtifacts = null;
                                var tfInputArtifacts = null;
                                if (action.inputArtifacts) {
                                    inputArtifacts = [];
                                    tfInputArtifacts = [];
                                    inputArtifacts.push({
                                        'Name': action.actionTypeId.name
                                    });
                                    tfInputArtifacts.push(action.actionTypeId.name);
                                }
                                actions.push({
                                    'ActionTypeId': actionTypeId,
                                    'Configuration': action.configuration,
                                    'InputArtifacts': inputArtifacts,
                                    'Name': action.name,
                                    'OutputArtifacts': outputArtifacts,
                                    'Region': action.region,
                                    'RoleArn': action.roleArn,
                                    'RunOrder': action.runOrder
                                });
                                tfActions.push({
                                    'category': action.actionTypeId.category,
                                    'owner': action.actionTypeId.owner,
                                    'configuration': action.configuration,
                                    'input_artifacts': tfInputArtifacts,
                                    'name': action.name,
                                    'provider': action.actionTypeId.provider,
                                    'version': action.actionTypeId.version,
                                    'output_artifacts': tfOutputArtifacts,
                                    'role_arn': action.roleArn,
                                    'run_order': action.runOrder
                                });
                            });
                        }
                        reqParams.cfn['Stages'].push({
                            'Actions': actions,
                            'Blockers': blockers,
                            'Name': stage.name
                        });
                        reqParams.tf['stages'].push({
                            'action': tfActions,
                            'name': stage.name
                        });
                    });
                }

                /*
                TODO:
                ArtifactStores:
                    - Region
                DisableInboundStageTransitions:
                    - DisableInboundStageTransitions
                RestartExecutionOnUpdate: Boolean
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('codepipeline', obj.id),
                    'region': obj.region,
                    'service': 'codepipeline',
                    'type': 'AWS::CodePipeline::Pipeline',
                    'terraformType': 'aws_codepipeline',
                    'options': reqParams
                });
            } else if (obj.type == "codepipeline.webhook") {
                var filters = null;
                var tfFilters = null;
                if (obj.data.filters) {
                    filters = [];
                    tfFilters = [];
                    obj.data.filters.forEach(filter => {
                        filters.push({
                            'JsonPath': filter.jsonPath,
                            'MatchEquals': filter.matchEquals
                        });
                        tfFilters.push({
                            'json_path': filter.jsonPath,
                            'match_equals': filter.matchEquals
                        });
                    });
                }
                var authenticationConfiguration = null;
                if (obj.data.authenticationConfiguration) {
                    authenticationConfiguration = {
                        'AllowedIPRange': obj.data.authenticationConfiguration.AllowedIPRange,
                        'SecretToken': obj.data.authenticationConfiguration.SecretToken
                    };
                }
                reqParams.cfn['Name'] = obj.data.definition.name;
                reqParams.tf['name'] = obj.data.definition.name;
                reqParams.cfn['TargetPipeline'] = obj.data.definition.targetPipeline;
                reqParams.tf['target_pipeline'] = obj.data.definition.targetPipeline;
                reqParams.cfn['TargetAction'] = obj.data.definition.targetAction;
                reqParams.tf['target_action'] = obj.data.definition.targetAction;
                reqParams.cfn['Filters'] = filters;
                reqParams.tf['filter'] = tfFilters;
                reqParams.cfn['Authentication'] = obj.data.definition.authentication;
                reqParams.tf['authentication'] = obj.data.definition.authentication;
                reqParams.cfn['AuthenticationConfiguration'] = obj.data.definition.authenticationConfiguration;
                reqParams.tf['authentication_configuration'] = {
                    'allowed_ip_range': obj.data.definition.authenticationConfiguration.AllowedIPRange,
                    'secret_token': obj.data.definition.authenticationConfiguration.SecretToken
                };

                /*
                TODO:
                TargetPipelineVersion: Integer
                RegisterWithThirdParty: Boolean
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('codepipeline', obj.id),
                    'region': obj.region,
                    'service': 'codepipeline',
                    'type': 'AWS::CodePipeline::Webhook',
                    'terraformType': 'aws_codepipeline_webhook',
                    'options': reqParams
                });
            } else if (obj.type == "codepipeline.customactiontype") {
                reqParams.cfn['Category'] = obj.data.id.category;
                reqParams.cfn['Provider'] = obj.data.id.provider;
                reqParams.cfn['Version'] = obj.data.id.version;
                if (obj.data.settings) {
                    reqParams.cfn['Settings'] = {
                        'EntityUrlTemplate': obj.data.settings.entityUrlTemplate,
                        'ExecutionUrlTemplate': obj.data.settings.executionUrlTemplate,
                        'RevisionUrlTemplate': obj.data.settings.revisionUrlTemplate,
                        'ThirdPartyConfigurationUrl': obj.data.settings.thirdPartyConfigurationUrl
                    };
                }
                if (obj.data.actionConfigurationProperties) {
                    reqParams.cfn['ConfigurationProperties'] = [];
                    obj.data.actionConfigurationProperties.forEach(actionConfigurationProperty => {
                        reqParams.cfn['ConfigurationProperties'].push({
                            'Description': actionConfigurationProperty.description,
                            'Key': actionConfigurationProperty.key,
                            'Name': actionConfigurationProperty.name,
                            'Queryable': actionConfigurationProperty.queryable,
                            'Required': actionConfigurationProperty.required,
                            'Secret': actionConfigurationProperty.secret,
                            'Type': actionConfigurationProperty.type
                        });
                    });
                }
                if (obj.data.inputArtifactDetails) {
                    reqParams.cfn['InputArtifactDetails'] = {
                        'MinimumCount': obj.data.inputArtifactDetails.minimumCount,
                        'MaximumCount': obj.data.inputArtifactDetails.maximumCount
                    };
                }
                if (obj.data.outputArtifactDetails) {
                    reqParams.cfn['OutputArtifactDetails'] = {
                        'MinimumCount': obj.data.outputArtifactDetails.minimumCount,
                        'MaximumCount': obj.data.outputArtifactDetails.maximumCount
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('codepipeline', obj.id),
                    'region': obj.region,
                    'service': 'codepipeline',
                    'type': 'AWS::CodePipeline::CustomActionType',
                    'options': reqParams
                });
            } else if (obj.type == "inspector.resourcegroup") {
                if (obj.data.tags) {
                    reqParams.cfn['ResourceGroupTags'] = [];
                    obj.data.tags.forEach(tag => {
                        reqParams.cfn['ResourceGroupTags'].push({
                            'Key': tag.key,
                            'Value': tag.value
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('inspector', obj.id),
                    'region': obj.region,
                    'service': 'inspector',
                    'type': 'AWS::Inspector::ResourceGroup',
                    'options': reqParams
                });
            } else if (obj.type == "inspector.assessmenttarget") {
                reqParams.cfn['AssessmentTargetName'] = obj.data.name;
                reqParams.cfn['ResourceGroupArn'] = obj.data.resourceGroupArn;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('inspector', obj.id),
                    'region': obj.region,
                    'service': 'inspector',
                    'type': 'AWS::Inspector::AssessmentTarget',
                    'options': reqParams
                });
            } else if (obj.type == "inspector.assessmenttemplate") {
                reqParams.cfn['AssessmentTemplateName'] = obj.data.name;
                reqParams.cfn['AssessmentTargetArn'] = obj.data.assessmentTargetArn;
                reqParams.cfn['DurationInSeconds'] = obj.data.durationInSeconds;
                reqParams.cfn['RulesPackageArns'] = obj.data.rulesPackageArns;
                if (obj.data.userAttributesForFindings) {
                    reqParams.cfn['UserAttributesForFindings'] = [];
                    obj.data.userAttributesForFindings.forEach(userAttributesForFindings => {
                        reqParams.cfn['UserAttributesForFindings'].push({
                            'Key': userAttributesForFindings.key,
                            'Value': userAttributesForFindings.value
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('inspector', obj.id),
                    'region': obj.region,
                    'service': 'inspector',
                    'type': 'AWS::Inspector::AssessmentTemplate',
                    'options': reqParams
                });
            } else if (obj.type == "dms.endpoint") {
                reqParams.cfn['EndpointIdentifier'] = obj.data.EndpointIdentifier;
                reqParams.cfn['EndpointType'] = obj.data.EndpointType;
                reqParams.cfn['EngineName'] = obj.data.EngineName;
                reqParams.cfn['Username'] = obj.data.Username;
                reqParams.cfn['ServerName'] = obj.data.ServerName;
                reqParams.cfn['Port'] = obj.data.Port;
                reqParams.cfn['DatabaseName'] = obj.data.DatabaseName;
                reqParams.cfn['ExtraConnectionAttributes'] = obj.data.ExtraConnectionAttributes;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                reqParams.cfn['CertificateArn'] = obj.data.CertificateArn;
                reqParams.cfn['SslMode'] = obj.data.SslMode;
                reqParams.cfn['DynamoDbSettings'] = obj.data.DynamoDbSettings;
                if (obj.data.S3Settings) {
                    reqParams.cfn['S3Settings'] = {
                        'BucketFolder': obj.data.S3Settings.BucketFolder,
                        'BucketName': obj.data.S3Settings.BucketName,
                        'CompressionType': obj.data.S3Settings.CompressionType,
                        'CsvDelimiter': obj.data.S3Settings.CsvDelimiter,
                        'CsvRowDelimiter': obj.data.S3Settings.CsvRowDelimiter,
                        'ExternalTableDefinition': obj.data.S3Settings.ExternalTableDefinition,
                        'ServiceAccessRoleArn': obj.data.S3Settings.ServiceAccessRoleArn
                    };
                }
                reqParams.cfn['MongoDbSettings'] = obj.data.MongoDbSettings;

                /*
                TODO:
                Password: String
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('dms', obj.id),
                    'region': obj.region,
                    'service': 'dms',
                    'type': 'AWS::DMS::Endpoint',
                    'options': reqParams
                });
            } else if (obj.type == "dms.replicationinstance") {
                reqParams.cfn['ReplicationInstanceIdentifier'] = obj.data.ReplicationInstanceIdentifier;
                reqParams.cfn['ReplicationInstanceClass'] = obj.data.ReplicationInstanceClass;
                reqParams.cfn['AllocatedStorage'] = obj.data.AllocatedStorage;
                if (obj.data.VpcSecurityGroups) {
                    reqParams.cfn['VpcSecurityGroupIds'] = [];
                    obj.data.VpcSecurityGroups.forEach(vpcSecurityGroup => {
                        reqParams.cfn['VpcSecurityGroupIds'].push(vpcSecurityGroup.VpcSecurityGroupId);
                    });
                }
                reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
                if (obj.data.ReplicationSubnetGroup) {
                    reqParams.cfn['ReplicationSubnetGroupIdentifier'] = obj.data.ReplicationSubnetGroup.ReplicationSubnetGroupIdentifier;
                }
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                reqParams.cfn['MultiAZ'] = obj.data.MultiAZ;
                reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
                reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                reqParams.cfn['PubliclyAccessible'] = obj.data.PubliclyAccessible;

                /*
                TODO:
                Tags: 
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('dms', obj.id),
                    'region': obj.region,
                    'service': 'dms',
                    'type': 'AWS::DMS::ReplicationInstance',
                    'options': reqParams
                });
            } else if (obj.type == "dms.replicationtask") {
                reqParams.cfn['ReplicationTaskIdentifier'] = obj.data.ReplicationTaskIdentifier;
                reqParams.cfn['SourceEndpointArn'] = obj.data.SourceEndpointArn;
                reqParams.cfn['TargetEndpointArn'] = obj.data.TargetEndpointArn;
                reqParams.cfn['ReplicationInstanceArn'] = obj.data.ReplicationInstanceArn;
                reqParams.cfn['MigrationType'] = obj.data.MigrationType;
                reqParams.cfn['TableMappings'] = obj.data.TableMappings;
                reqParams.cfn['ReplicationTaskSettings'] = obj.data.ReplicationTaskSettings;
                reqParams.cfn['CdcStartTime'] = obj.data.CdcStartPosition;

                /*
                TODO:
                Tags: 
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('dms', obj.id),
                    'region': obj.region,
                    'service': 'dms',
                    'type': 'AWS::DMS::ReplicationTask',
                    'options': reqParams
                });
            } else if (obj.type == "dms.replicationsubnetgroup") {
                reqParams.cfn['ReplicationSubnetGroupIdentifier'] = obj.data.ReplicationSubnetGroupIdentifier;
                reqParams.cfn['ReplicationSubnetGroupDescription'] = obj.data.ReplicationSubnetGroupDescription;
                if (obj.data.Subnets) {
                    reqParams.cfn['SubnetIds'] = [];
                    obj.data.Subnets.forEach(subnet => {
                        reqParams.cfn['SubnetIds'].push(subnet.SubnetIdentifier);
                    });
                }

                /*
                TODO:
                Tags:
                    - Resource Tag 
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('dms', obj.id),
                    'region': obj.region,
                    'service': 'dms',
                    'type': 'AWS::DMS::ReplicationSubnetGroup',
                    'options': reqParams
                });
            } else if (obj.type == "dms.certificate") {
                reqParams.cfn['CertificateIdentifier'] = obj.data.CertificateIdentifier;
                reqParams.cfn['CertificatePem'] = obj.data.CertificatePem;
                reqParams.cfn['CertificateWallet'] = obj.data.CertificateWallet;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('dms', obj.id),
                    'region': obj.region,
                    'service': 'dms',
                    'type': 'AWS::DMS::Certificate',
                    'options': reqParams
                });
            } else if (obj.type == "dms.eventsubscription") {
                reqParams.cfn['SnsTopicArn'] = obj.data.SnsTopicArn;
                reqParams.cfn['SourceType'] = obj.data.SourceType;
                reqParams.cfn['SourceIds'] = obj.data.SourceIdsList;
                reqParams.cfn['EventCategories'] = obj.data.EventCategoriesList;
                reqParams.cfn['Enabled'] = obj.data.Enabled;

                /*
                TODO:
                SubscriptionName: String
                Tags: 
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('dms', obj.id),
                    'region': obj.region,
                    'service': 'dms',
                    'type': 'AWS::DMS::EventSubscription',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.route") {
                reqParams.cfn['DestinationCidrBlock'] = obj.data.DestinationCidrBlock;
                reqParams.tf['destination_cidr_block'] = obj.data.DestinationCidrBlock;
                reqParams.cfn['DestinationIpv6CidrBlock'] = obj.data.DestinationIpv6CidrBlock;
                reqParams.tf['destination_ipv6_cidr_block'] = obj.data.DestinationIpv6CidrBlock;
                reqParams.cfn['EgressOnlyInternetGatewayId'] = obj.data.EgressOnlyInternetGatewayId;
                reqParams.tf['egress_only_gateway_id'] = obj.data.EgressOnlyInternetGatewayId;
                reqParams.cfn['GatewayId'] = obj.data.GatewayId;
                reqParams.tf['gateway_id'] = obj.data.GatewayId;
                reqParams.cfn['InstanceId'] = obj.data.InstanceId;
                reqParams.tf['instance_id'] = obj.data.InstanceId;
                reqParams.cfn['NatGatewayId'] = obj.data.NatGatewayId;
                reqParams.tf['nat_gateway_id'] = obj.data.NatGatewayId;
                reqParams.cfn['NetworkInterfaceId'] = obj.data.NetworkInterfaceId;
                reqParams.tf['network_interface_id'] = obj.data.NetworkInterfaceId;
                reqParams.cfn['VpcPeeringConnectionId'] = obj.data.VpcPeeringConnectionId;
                reqParams.tf['vpc_peering_connection_id'] = obj.data.VpcPeeringConnectionId;
                reqParams.cfn['RouteTableId'] = obj.data.RouteTableId;
                reqParams.tf['route_table_id'] = obj.data.RouteTableId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::Route',
                    'terraformType': 'aws_route',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.transitgateway") {
                reqParams.cfn['Description'] = obj.data.Description;
                if (obj.data.Options) {
                    reqParams.cfn['AmazonSideAsn'] = obj.data.Options.AmazonSideAsn;
                    reqParams.cfn['AutoAcceptSharedAttachments'] = obj.data.Options.AutoAcceptSharedAttachments;
                    reqParams.cfn['DefaultRouteTableAssociation'] = obj.data.Options.DefaultRouteTableAssociation;
                    reqParams.cfn['DefaultRouteTablePropagation'] = obj.data.Options.DefaultRouteTablePropagation;
                    reqParams.cfn['DnsSupport'] = obj.data.Options.DnsSupport;
                    reqParams.cfn['VpnEcmpSupport'] = obj.data.Options.VpnEcmpSupport;
                }
                reqParams.cfn['Tags'] = obj.data.Tags;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::TransitGateway',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.transitgatewayroute") {
                reqParams.cfn['DestinationCidrBlock'] = obj.data.DestinationCidrBlock;
                reqParams.cfn['TransitGatewayRouteTableId'] = obj.data.TransitGatewayRouteTableId;
                if (obj.data.State == "blackhole") {
                    reqParams.cfn['Blackhole'] = true;
                }
                if (obj.data.TransitGatewayAttachments && obj.data.TransitGatewayAttachments.length == 1) {
                    reqParams.cfn['TransitGatewayAttachmentId'] = obj.data.TransitGatewayAttachments[0].TransitGatewayAttachmentId;
                }

                /*
                TODO:
                TransitGatewayAttachmentId: String // multiple?
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::TransitGatewayRoute',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.transitgatewayroutetableassociation") {
                reqParams.cfn['TransitGatewayAttachmentId'] = obj.data.TransitGatewayAttachmentId;
                reqParams.cfn['TransitGatewayRouteTableId'] = obj.data.TransitGatewayRouteTableId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::TransitGatewayRouteTableAssociation',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.transitgatewayroutetablepropogation") {
                reqParams.cfn['TransitGatewayAttachmentId'] = obj.data.TransitGatewayAttachmentId;
                reqParams.cfn['TransitGatewayRouteTableId'] = obj.data.TransitGatewayRouteTableId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::TransitGatewayRouteTablePropagation',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.transitgatewayroutetable") {
                reqParams.cfn['TransitGatewayId'] = obj.data.TransitGatewayId;
                reqParams.cfn['Tags'] = obj.data.Tags;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::TransitGatewayRouteTable',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.transitgatewayattachment") {
                reqParams.cfn['TransitGatewayId'] = obj.data.TransitGatewayId;
                reqParams.cfn['Tags'] = obj.data.Tags;
                reqParams.cfn['VpcId'] = obj.data.VpcId;
                reqParams.cfn['SubnetIds'] = obj.data.SubnetIds;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::TransitGatewayAttachment',
                    'options': reqParams
                });
            } else if (obj.type == "workspaces.workspace") {
                reqParams.cfn['DirectoryId'] = obj.data.DirectoryId;
                reqParams.cfn['UserName'] = obj.data.UserName;
                reqParams.cfn['BundleId'] = obj.data.BundleId;
                reqParams.cfn['VolumeEncryptionKey'] = obj.data.VolumeEncryptionKey;
                reqParams.cfn['UserVolumeEncryptionEnabled'] = obj.data.UserVolumeEncryptionEnabled;
                reqParams.cfn['RootVolumeEncryptionEnabled'] = obj.data.RootVolumeEncryptionEnabled;
                reqParams.cfn['WorkspaceProperties'] = obj.data.WorkspaceProperties;

                /*
                TODO:
                Tags:
                    - Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('workspaces', obj.id),
                    'region': obj.region,
                    'service': 'workspaces',
                    'type': 'AWS::WorkSpaces::Workspace',
                    'options': reqParams
                });
            } else if (obj.type == "appsync.resolver") {
                reqParams.cfn['TypeName'] = obj.data.typeName;
                reqParams.tf['type'] = obj.data.typeName;
                reqParams.cfn['FieldName'] = obj.data.fieldName;
                reqParams.tf['field'] = obj.data.fieldName;
                reqParams.cfn['DataSourceName'] = obj.data.dataSourceName;
                reqParams.tf['data_source'] = obj.data.dataSourceName;
                reqParams.cfn['RequestMappingTemplate'] = obj.data.requestMappingTemplate;
                reqParams.tf['request_template'] = obj.data.requestMappingTemplate;
                reqParams.cfn['ResponseMappingTemplate'] = obj.data.responseMappingTemplate;
                reqParams.tf['response_template'] = obj.data.responseMappingTemplate;
                reqParams.cfn['Kind'] = obj.data.kind;
                if (obj.data.pipelineConfig) {
                    reqParams.cfn['PipelineConfig'] = {
                        'Functions': obj.data.pipelineConfig.functions
                    };
                }
                reqParams.cfn['ApiId'] = obj.data.apiId;
                reqParams.tf['api_id'] = obj.data.apiId;

                /*
                TODO:
                ResponseMappingTemplateS3Location: String
                RequestMappingTemplateS3Location: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appsync', obj.id),
                    'region': obj.region,
                    'service': 'appsync',
                    'type': 'AWS::AppSync::Resolver',
                    'terraformType': 'aws_appsync_resolver',
                    'options': reqParams
                });
            } else if (obj.type == "appsync.graphqlschema") {
                var definition = String.fromCharCode.apply(null, obj.data.schema.data);
                reqParams.cfn['Definition'] = definition;
                reqParams.tf['definition'] = definition;
                reqParams.cfn['ApiId'] = obj.data.apiId;
                reqParams.tf['api_id'] = obj.data.apiId;

                /*
                SKIPPED
                DefinitionS3Location
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appsync', obj.id),
                    'region': obj.region,
                    'service': 'appsync',
                    'type': 'AWS::AppSync::GraphQLSchema',
                    'options': reqParams
                });
            } else if (obj.type == "appsync.datasource") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.tf['name'] = obj.data.name;
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.tf['description'] = obj.data.description;
                reqParams.cfn['Type'] = obj.data.type;
                reqParams.tf['type'] = obj.data.type;
                reqParams.cfn['ServiceRoleArn'] = obj.data.serviceRoleArn;
                reqParams.tf['service_role_arn'] = obj.data.serviceRoleArn;
                if (obj.data.dynamodbConfig) {
                    reqParams.cfn['DynamoDBConfig'] = {
                        'TableName': obj.data.dynamodbConfig.tableName,
                        'AwsRegion': obj.data.dynamodbConfig.awsRegion,
                        'UseCallerCredentials': obj.data.dynamodbConfig.useCallerCredentials
                    };
                    reqParams.tf['dynamodb_config'] = {
                        'table_name': obj.data.dynamodbConfig.tableName,
                        'region': obj.data.dynamodbConfig.awsRegion,
                        'use_caller_credentials': obj.data.dynamodbConfig.useCallerCredentials
                    };
                }
                if (obj.data.lambdaConfig) {
                    reqParams.cfn['LambdaConfig'] = {
                        'LambdaFunctionArn': obj.data.lambdaConfig.lambdaFunctionArn
                    };
                    reqParams.tf['lambda_config'] = {
                        'function_arn': obj.data.lambdaConfig.lambdaFunctionArn
                    };
                }
                if (obj.data.elasticsearchConfig) {
                    reqParams.cfn['ElasticsearchConfig'] = {
                        'Endpoint': obj.data.elasticsearchConfig.endpoint,
                        'AwsRegion': obj.data.elasticsearchConfig.awsRegion
                    };
                    reqParams.tf['elasticsearch_config'] = {
                        'endpoint': obj.data.elasticsearchConfig.endpoint,
                        'region': obj.data.elasticsearchConfig.awsRegion
                    };
                }
                if (obj.data.httpConfig) {
                    var authorizationConfig = null;
                    if (obj.data.httpConfig.authorizationConfig) {
                        var awsIamConfig = null;
                        if (obj.data.httpConfig.authorizationConfig.awsIamConfig) {
                            awsIamConfig = {
                                'SigningRegion': obj.data.httpConfig.authorizationConfig.awsIamConfig.signingRegion,
                                'SigningServiceName': obj.data.httpConfig.authorizationConfig.awsIamConfig.signingServiceName
                            };
                        }
                        authorizationConfig = {
                            'AuthorizationType': obj.data.httpConfig.authorizationType,
                            'AwsIamConfig': awsIamConfig
                        };
                    }
                    reqParams.cfn['HttpConfig'] = {
                        'AuthorizationConfig': authorizationConfig,
                        'Endpoint': obj.data.httpConfig.endpoint
                    };
                    reqParams.tf['http_config'] = {
                        'endpoint': obj.data.httpConfig.endpoint
                    };
                }
                if (obj.data.relationalDatabaseConfig) {
                    var rdsHttpEndpointConfig = null;
                    if (obj.data.relationalDatabaseConfig.rdsHttpEndpointConfig) {
                        rdsHttpEndpointConfig = {
                            'AwsRegion': obj.data.relationalDatabaseConfig.rdsHttpEndpointConfig.awsRegion,
                            'DbClusterIdentifier': obj.data.relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier,
                            'DatabaseName': obj.data.relationalDatabaseConfig.rdsHttpEndpointConfig.databaseName,
                            'Schema': obj.data.relationalDatabaseConfig.rdsHttpEndpointConfig.schema,
                            'AwsSecretStoreArn': obj.data.relationalDatabaseConfig.rdsHttpEndpointConfig.awsSecretStoreArn
                        };
                    }
                    reqParams.cfn['RelationalDatabaseConfig'] = {
                        'RelationalDatabaseSourceType': obj.data.relationalDatabaseConfig.relationalDatabaseSourceType,
                        'RdsHttpEndpointConfig': rdsHttpEndpointConfig
                    };
                }
                reqParams.cfn['ApiId'] = obj.data.apiId;
                reqParams.tf['api_id'] = obj.data.apiId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appsync', obj.id),
                    'region': obj.region,
                    'service': 'appsync',
                    'type': 'AWS::AppSync::DataSource',
                    'terraformType': 'aws_appsync_datasource',
                    'options': reqParams
                });
            } else if (obj.type == "appsync.functionconfiguration") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.cfn['DataSourceName'] = obj.data.dataSourceName;
                reqParams.cfn['RequestMappingTemplate'] = obj.data.requestMappingTemplate;
                reqParams.cfn['ResponseMappingTemplate'] = obj.data.responseMappingTemplate;
                reqParams.cfn['FunctionVersion'] = obj.data.functionVersion;
                reqParams.cfn['ApiId'] = obj.data.apiId;

                /*
                TODO:
                RequestMappingTemplateS3Location: String
                ResponseMappingTemplateS3Location: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appsync', obj.id),
                    'region': obj.region,
                    'service': 'appsync',
                    'type': 'AWS::AppSync::FunctionConfiguration',
                    'options': reqParams
                });
            } else if (obj.type == "appsync.apikey") {
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.tf['description'] = obj.data.description;
                reqParams.cfn['Expires'] = obj.data.expires;
                reqParams.tf['expires'] = obj.data.expires;
                reqParams.cfn['ApiId'] = obj.data.apiId;
                reqParams.tf['api_id'] = obj.data.apiId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appsync', obj.id),
                    'region': obj.region,
                    'service': 'appsync',
                    'type': 'AWS::AppSync::ApiKey',
                    'terraformType': 'aws_appsync_api_key',
                    'options': reqParams
                });
            } else if (obj.type == "appsync.graphqlapi") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.tf['name'] = obj.data.name;
                reqParams.cfn['AuthenticationType'] = obj.data.authenticationType;
                reqParams.tf['authentication_type'] = obj.data.authenticationType;
                if (obj.data.logConfig) {
                    reqParams.cfn['LogConfig'] = {
                        'FieldLogLevel': obj.data.logConfig.fieldLogLevel,
                        'CloudWatchLogsRoleArn': obj.data.logConfig.cloudWatchLogsRoleArn
                    };
                    reqParams.tf['log_config'] = {
                        'field_log_level': obj.data.logConfig.fieldLogLevel,
                        'cloudwatch_logs_role_arn': obj.data.logConfig.cloudWatchLogsRoleArn
                    };
                }
                if (obj.data.userPoolConfig) {
                    reqParams.cfn['UserPoolConfig'] = {
                        'AppIdClientRegex': obj.data.userPoolConfig.appIdClientRegex,
                        'UserPoolId': obj.data.userPoolConfig.userPoolId,
                        'AwsRegion': obj.data.userPoolConfig.awsRegion,
                        'DefaultAction': obj.data.userPoolConfig.defaultAction
                    };
                    reqParams.tf['user_pool_config'] = {
                        'app_id_client_regex': obj.data.userPoolConfig.appIdClientRegex,
                        'user_pool_id': obj.data.userPoolConfig.userPoolId,
                        'aws_region': obj.data.userPoolConfig.awsRegion,
                        'default_action': obj.data.userPoolConfig.defaultAction
                    };
                }
                if (obj.data.openIDConnectConfig) {
                    reqParams.cfn['OpenIDConnectConfig'] = {
                        'Issuer': obj.data.openIDConnectConfig.issuer,
                        'ClientId': obj.data.openIDConnectConfig.clientId,
                        'IatTTL': obj.data.openIDConnectConfig.iatTTL,
                        'AuthTTL': obj.data.openIDConnectConfig.authTTL
                    };
                    reqParams.tf['openid_connect_config'] = {
                        'issuer': obj.data.openIDConnectConfig.issuer,
                        'client_id': obj.data.openIDConnectConfig.clientId,
                        'iat_ttl': obj.data.openIDConnectConfig.iatTTL,
                        'auth_ttl': obj.data.openIDConnectConfig.authTTL
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appsync', obj.id),
                    'region': obj.region,
                    'service': 'appsync',
                    'type': 'AWS::AppSync::GraphQLApi',
                    'terraformType': 'aws_appsync_graphql_api',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.host") {
                reqParams.cfn['AutoPlacement'] = obj.data.AutoPlacement;
                reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
                if (obj.data.HostProperties) {
                    reqParams.cfn['InstanceType'] = obj.data.HostProperties.InstanceType;
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::Host',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.vpcendpoint") {
                reqParams.cfn['VpcEndpointType'] = obj.data.VpcEndpointType;
                reqParams.tf['vpc_endpoint_type'] = obj.data.VpcEndpointType;
                reqParams.cfn['VpcId'] = obj.data.VpcId;
                reqParams.tf['vpc_id'] = obj.data.VpcId;
                reqParams.cfn['ServiceName'] = obj.data.ServiceName;
                reqParams.tf['service_name'] = obj.data.ServiceName;
                reqParams.cfn['PolicyDocument'] = obj.data.PolicyDocument;
                reqParams.tf['policy'] = obj.data.PolicyDocument;
                reqParams.cfn['RouteTableIds'] = obj.data.RouteTableIds;
                reqParams.tf['route_table_ids'] = obj.data.RouteTableIds;
                reqParams.cfn['SubnetIds'] = obj.data.SubnetIds;
                reqParams.tf['subnet_ids'] = obj.data.SubnetIds;
                reqParams.cfn['PrivateDnsEnabled'] = obj.data.PrivateDnsEnabled;
                reqParams.tf['private_dns_enabled'] = obj.data.PrivateDnsEnabled;
                if (obj.data.Groups) {
                    reqParams.cfn['SecurityGroupIds'] = [];
                    reqParams.tf['security_group_ids'] = [];
                    obj.data.Groups.forEach(group => {
                        reqParams.cfn['SecurityGroupIds'].push(group.GroupId);
                        reqParams.tf['security_group_ids'].push(group.GroupId);
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::VPCEndpoint',
                    'terraformType': 'aws_vpc_endpoint',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.vpcendpointconnectionnotification") {
                reqParams.cfn['ServiceId'] = obj.data.ServiceId;
                reqParams.cfn['VPCEndpointId'] = obj.data.VpcEndpointId;
                reqParams.cfn['ConnectionNotificationArn'] = obj.data.ConnectionNotificationArn;
                reqParams.cfn['ConnectionEvents'] = obj.data.ConnectionEvents;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::VPCEndpointConnectionNotification',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.vpcendpointservicepermission") {
                reqParams.cfn['AllowedPrincipals'] = [];
                obj.data.AllowedPrincipals.forEach(allowedPrincipal => {
                    reqParams.cfn['AllowedPrincipals'].push(allowedPrincipal.Principal);
                });
                reqParams.cfn['ServiceId'] = obj.data.ServiceId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::VPCEndpointServicePermissions',
                    'options': reqParams
                });

                obj.data.AllowedPrincipals.forEach(allowedPrincipal => {
                    reqParams = {
                        'boto3': {},
                        'go': {},
                        'cfn': {},
                        'cli': {},
                        'tf': {},
                        'iam': {}
                    };

                    reqParams.tf['vpc_endpoint_service_id'] = obj.data.ServiceId;
                    reqParams.tf['principal_arn'] = allowedPrincipal.Principal;

                    tracked_resources.push({
                    'obj': obj,
                        'logicalId': getResourceName('ec2', obj.id),
                        'region': obj.region,
                        'service': 'ec2',
                        'terraformType': 'aws_vpc_endpoint_service_allowed_principal',
                        'options': reqParams
                    });
                });
            } else if (obj.type == "ec2.vpcendpointservice") {
                if (obj.data.ServiceType.ServiceType == "Interface") {
                    reqParams.cfn['NetworkLoadBalancerArns'] = [obj.data.ServiceName];
                    reqParams.tf['network_load_balancer_arns'] = [obj.data.ServiceName];
                    reqParams.cfn['AcceptanceRequired'] = obj.data.AcceptanceRequired;
                    reqParams.tf['acceptance_required'] = obj.data.AcceptanceRequired;

                    tracked_resources.push({
                        'obj': obj,
                        'logicalId': getResourceName('ec2', obj.id),
                        'region': obj.region,
                        'service': 'ec2',
                        'type': 'AWS::EC2::VPCEndpointService',
                        'terraformType': 'aws_vpc_endpoint_service',
                        'options': reqParams
                    });
                }
            } else if (obj.type == "ec2.natgateway") {
                reqParams.cfn['SubnetId'] = obj.data.SubnetId;
                reqParams.tf['subnet_id'] = obj.data.SubnetId;
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }
                if (obj.data.NatGatewayAddresses && obj.data.NatGatewayAddresses.length == 1) {
                    reqParams.cfn['AllocationId'] = obj.data.NatGatewayAddresses[0].AllocationId;
                    reqParams.tf['allocation_id'] = obj.data.NatGatewayAddresses[0].AllocationId;
                }

                /*
                TODO:
                AllocationId // multiple
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::NatGateway',
                    'terraformType': 'aws_nat_gateway',
                    'options': reqParams
                });
            } else if (obj.type == "ecs.cluster") {
                reqParams.cfn['ClusterName'] = obj.data.clusterName;
                reqParams.tf['name'] = obj.data.clusterName;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ecs', obj.id),
                    'region': obj.region,
                    'service': 'ecs',
                    'type': 'AWS::ECS::Cluster',
                    'terraformType': 'aws_ecs_cluster',
                    'options': reqParams
                });
            } else if (obj.type == "ecs.service") {
                reqParams.cfn['ServiceName'] = obj.data.serviceName;
                reqParams.tf['name'] = obj.data.serviceName;
                reqParams.cfn['Cluster'] = obj.data.clusterArn;
                reqParams.tf['cluster'] = obj.data.clusterArn;
                if (obj.data.loadBalancers) {
                    reqParams.cfn['LoadBalancers'] = [];
                    reqParams.tf['load_balancer'] = [];
                    obj.data.loadBalancers.forEach(loadBalancer => {
                        reqParams.cfn['LoadBalancers'].push({
                            'TargetGroupArn': loadBalancer.targetGroupArn,
                            'LoadBalancerName': loadBalancer.loadBalancerName,
                            'ContainerName': loadBalancer.containerName,
                            'ContainerPort': loadBalancer.containerPort
                        });
                        reqParams.tf['load_balancer'].push({
                            'target_group_arn': loadBalancer.targetGroupArn,
                            'elb_name': loadBalancer.loadBalancerName,
                            'container_name': loadBalancer.containerName,
                            'container_port': loadBalancer.containerPort
                        });
                    });
                }
                if (obj.data.serviceRegistries) {
                    reqParams.cfn['ServiceRegistries'] = [];
                    reqParams.tf['service_registries'] = [];
                    obj.data.serviceRegistries.forEach(serviceRegistry => {
                        reqParams.cfn['ServiceRegistries'].push({
                            'RegistryArn': serviceRegistry.registryArn,
                            'Port': serviceRegistry.port,
                            'ContainerName': serviceRegistry.containerName,
                            'ContainerPort': serviceRegistry.containerPort
                        });
                        reqParams.tf['service_registries'].push({
                            'registry_arn': serviceRegistry.registryArn,
                            'port': serviceRegistry.port,
                            'container_name': serviceRegistry.containerName,
                            'container_port': serviceRegistry.containerPort
                        });
                    });
                }
                reqParams.cfn['DesiredCount'] = obj.data.desiredCount;
                reqParams.tf['desired_count'] = obj.data.desiredCount;
                reqParams.cfn['LaunchType'] = obj.data.launchType;
                reqParams.tf['launch_type'] = obj.data.launchType;
                reqParams.cfn['PlatformVersion'] = obj.data.platformVersion;
                reqParams.tf['platform_version'] = obj.data.platformVersion;
                reqParams.cfn['TaskDefinition'] = obj.data.taskDefinition;
                reqParams.tf['task_definition'] = obj.data.taskDefinition;
                if (obj.data.deploymentConfiguration) {
                    reqParams.cfn['DeploymentConfiguration'] = {
                        'MaximumPercent': obj.data.deploymentConfiguration.maximumPercent,
                        'MinimumHealthyPercent': obj.data.deploymentConfiguration.minimumHealthyPercent
                    };
                    reqParams.tf['deployment_maximum_percent'] = obj.data.deploymentConfiguration.maximumPercent;
                    reqParams.tf['deployment_minimum_healthy_percent'] = obj.data.deploymentConfiguration.minimumHealthyPercent;
                }
                reqParams.cfn['Role'] = obj.data.roleArn;
                reqParams.tf['iam_role'] = obj.data.roleArn;
                if (obj.data.placementConstraints) {
                    reqParams.cfn['PlacementConstraints'] = [];
                    reqParams.tf['placement_constraints'] = [];
                    obj.data.placementConstraints.forEach(placementConstraint => {
                        reqParams.cfn['PlacementConstraints'].push({
                            'Type': placementConstraint.type,
                            'Expression': placementConstraint.expression
                        });
                        reqParams.tf['placement_constraints'].push({
                            'type': placementConstraint.type,
                            'expression': placementConstraint.expression
                        });
                    });
                }
                if (obj.data.placementStrategy) {
                    reqParams.cfn['PlacementStrategies'] = [];
                    reqParams.tf['ordered_placement_strategy'] = [];
                    obj.data.placementStrategy.forEach(placementStrategy => {
                        reqParams.cfn['PlacementStrategies'].push({
                            'Type': placementStrategy.type,
                            'Field': placementStrategy.field
                        });
                        reqParams.tf['ordered_placement_strategy'].push({
                            'type': placementStrategy.type,
                            'field': placementStrategy.field
                        });
                    });
                }
                if (obj.data.networkConfiguration && obj.data.networkConfiguration.awsvpcConfiguration) {
                    reqParams.cfn['NetworkConfiguration'] = {
                        'AwsvpcConfiguration': {
                            'AssignPublicIp': obj.data.networkConfiguration.awsvpcConfiguration.assignPublicIp,
                            'SecurityGroups': obj.data.networkConfiguration.awsvpcConfiguration.securityGroups,
                            'Subnets': obj.data.networkConfiguration.awsvpcConfiguration.subnets
                        }
                    };
                    reqParams.tf['network_configuration'] = {
                        'assign_public_ip': obj.data.networkConfiguration.awsvpcConfiguration.assignPublicIp,
                        'security_groups': obj.data.networkConfiguration.awsvpcConfiguration.securityGroups,
                        'subnets': obj.data.networkConfiguration.awsvpcConfiguration.subnets
                    };
                }
                reqParams.cfn['HealthCheckGracePeriodSeconds'] = obj.data.healthCheckGracePeriodSeconds;
                reqParams.tf['health_check_grace_period_seconds'] = obj.data.healthCheckGracePeriodSeconds;
                reqParams.cfn['SchedulingStrategy'] = obj.data.schedulingStrategy;
                reqParams.tf['scheduling_strategy'] = obj.data.schedulingStrategy;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ecs', obj.id),
                    'region': obj.region,
                    'service': 'ecs',
                    'type': 'AWS::ECS::Service',
                    'terraformType': 'aws_ecs_service',
                    'options': reqParams
                });
            } else if (obj.type == "ecs.taskdefinition") {
                if (obj.data.containerDefinitions) {
                    reqParams.cfn['ContainerDefinitions'] = [];
                    obj.data.containerDefinitions.forEach(containerDefinition => {
                        var repositoryCredentials = null;
                        if (containerDefinition.repositoryCredentials) {
                            repositoryCredentials = {
                                'CredentialsParameter': containerDefinition.repositoryCredentials.credentialsParameter
                            };
                        }
                        var portMappings = null;
                        if (containerDefinition.portMappings) {
                            portMappings = [];
                            containerDefinition.portMappings.forEach(portmapping => {
                                portMappings.push({
                                    'ContainerPort': portmapping.containerPort,
                                    'HostPort': portmapping.hostPort,
                                    'Protocol': portmapping.protocol
                                });
                            });
                        }
                        var environment = null;
                        if (containerDefinition.environment) {
                            environment = [];
                            containerDefinition.environment.forEach(env => {
                                environment.push({
                                    'Name': env.name,
                                    'Value': env.value
                                });
                            });
                        }
                        var mountPoints = null;
                        if (containerDefinition.mountPoints) {
                            mountPoints = [];
                            containerDefinition.mountPoints.forEach(mountpoint => {
                                mountPoints.push({
                                    'SourceVolume': mountpoint.sourceVolume,
                                    'ContainerPath': mountpoint.containerPath,
                                    'ReadOnly': mountpoint.readOnly
                                });
                            });
                        }
                        var volumesFrom = null;
                        if (containerDefinition.volumesFrom) {
                            volumesFrom = [];
                            containerDefinition.volumesFrom.forEach(vf => {
                                volumesFrom.push({
                                    'SourceContainer': vf.sourceContainer,
                                    'ReadOnly': vf.readOnly
                                });
                            });
                        }
                        var linuxParameters = null;
                        if (containerDefinition.linuxParameters) {
                            var capabilities = null;
                            if (containerDefinition.linuxParameters.capabilities) {
                                capabilities = {
                                    'Add': containerDefinition.linuxParameters.capabilities.add,
                                    'Drop': containerDefinition.linuxParameters.capabilities.drop
                                };
                            }
                            var devices = null;
                            if (containerDefinition.linuxParameters.devices) {
                                devices = [];
                                containerDefinition.linuxParameters.devices.forEach(device => {
                                    devices.push({
                                        'HostPath': device.hostPath,
                                        'ContainerPath': device.containerPath,
                                        'Permissions': device.permissions
                                    });
                                });
                            }
                            var tmpfs = null;
                            if (containerDefinition.linuxParameters.tmpfs) {
                                tmpfs = [];
                                containerDefinition.linuxParameters.tmpfs.forEach(fs => {
                                    tmpfs.push({
                                        'ContainerPath': fs.containerPath,
                                        'Size': fs.size,
                                        'MountOptions': fs.mountOptions
                                    });
                                });
                            }
                            linuxParameters = {
                                'Capabilities': capabilities,
                                'Devices': devices,
                                'InitProcessEnabled': containerDefinition.linuxParameters.initProcessEnabled,
                                'SharedMemorySize': containerDefinition.linuxParameters.sharedMemorySize,
                                'Tmpfs': tmpfs
                            }
                        }
                        var secrets = null;
                        if (obj.data.secrets) {
                            secrets = [];
                            obj.data.secrets.forEach(secret => {
                                secrets.push({
                                    'Name': secret.name,
                                    'ValueFrom': secret.valueFrom
                                });
                            });
                        }
                        var dependsOn = null;
                        if (obj.data.dependsOn) {
                            dependsOn = [];
                            obj.data.dependsOn.forEach(depends => {
                                dependsOn.push({
                                    'ContainerName': depends.containerName,
                                    'Condition': depends.condition
                                });
                            });
                        }
                        var extraHosts = null;
                        if (obj.data.extraHosts) {
                            extraHosts = [];
                            obj.data.extraHosts.forEach(extrahost => {
                                extraHosts.push({
                                    'Hostname': extrahost.hostname,
                                    'IpAddress': extrahost.ipAddress
                                });
                            });
                        }
                        var ulimits = null;
                        if (obj.data.ulimits) {
                            ulimits = [];
                            obj.data.ulimits.forEach(ulimit => {
                                ulimits.push({
                                    'Name': ulimit.name,
                                    'SoftLimit': ulimit.softLimit,
                                    'HardLimit': ulimit.hardLimit
                                });
                            });
                        }
                        var logConfiguration = null;
                        if (obj.data.logConfiguration) {
                            logConfiguration = {
                                'LogDriver': obj.data.logConfiguration.logDriver,
                                'Options': obj.data.logConfiguration.options
                            };
                        }
                        var healthCheck = null;
                        if (obj.data.healthCheck) {
                            healthCheck = {
                                'Command': obj.data.healthCheck.command,
                                'Interval': obj.data.healthCheck.interval,
                                'Timeout': obj.data.healthCheck.timeout,
                                'Retries': obj.data.healthCheck.retries,
                                'StartPeriod': obj.data.healthCheck.startPeriod
                            };
                        }
                        reqParams.cfn['ContainerDefinitions'].push({
                            'Command': containerDefinition.command,
                            'Cpu': (containerDefinition.cpu == 0) ? null : containerDefinition.cpu,
                            'DisableNetworking': containerDefinition.disableNetworking,
                            'DnsSearchDomains': containerDefinition.dnsSearchDomains,
                            'DnsServers': containerDefinition.dnsServers,
                            'DockerLabels': containerDefinition.dockerLabels,
                            'DockerSecurityOptions': containerDefinition.dockerSecurityOptions,
                            'EntryPoint': containerDefinition.entryPoint,
                            'Environment': environment,
                            'Essential': containerDefinition.essential,
                            'ExtraHosts': extraHosts,
                            'HealthCheck': healthCheck,
                            'Hostname': containerDefinition.hostname,
                            'Image': containerDefinition.image,
                            'Links': containerDefinition.links,
                            'LinuxParameters': linuxParameters,
                            'LogConfiguration': logConfiguration,
                            'Memory': containerDefinition.memory,
                            'MemoryReservation': containerDefinition.memoryReservation,
                            'MountPoints': mountPoints,
                            'Name': containerDefinition.name,
                            'PortMappings': portMappings,
                            'Privileged': containerDefinition.privileged,
                            'ReadonlyRootFilesystem': containerDefinition.readonlyRootFilesystem,
                            'RepositoryCredentials': repositoryCredentials,      
                            'Ulimits': ulimits,
                            'User': containerDefinition.user,
                            'VolumesFrom': volumesFrom,
                            'WorkingDirectory': containerDefinition.workingDirectory
                        });
                    });
                }
                reqParams.cfn['Family'] = obj.data.family;
                reqParams.cfn['TaskRoleArn'] = obj.data.taskRoleArn;
                reqParams.cfn['ExecutionRoleArn'] = obj.data.executionRoleArn;
                reqParams.cfn['NetworkMode'] = obj.data.networkMode;
                if (obj.data.volumes) {
                    reqParams.cfn['Volumes'] = [];
                    obj.data.volumes.forEach(volume => {
                        var host = null;
                        if (volume.host) {
                            host = {
                                'SourcePath': volume.host.sourcePath
                            };
                        }
                        var dockerVolumeConfiguration = null;
                        if (volume.dockerVolumeConfiguration) {
                            dockerVolumeConfiguration = {
                                'Scope': volume.dockerVolumeConfiguration.scope,
                                'Autoprovision': volume.dockerVolumeConfiguration.autoprovision,
                                'Driver': volume.dockerVolumeConfiguration.driver,
                                'DriverOpts': volume.dockerVolumeConfiguration.driverOpts,
                                'Labels': volume.dockerVolumeConfiguration.labels
                            };
                        }
                        reqParams.cfn['Volumes'].push({
                            'Name': volume.name,
                            'Host': host,
                            'DockerVolumeConfiguration': dockerVolumeConfiguration
                        });
                    });
                }
                reqParams.cfn['RequiresCompatibilities'] = obj.data.requiresCompatibilities;
                reqParams.cfn['Cpu'] = obj.data.cpu;
                reqParams.cfn['Memory'] = obj.data.memory;
                if (obj.data.placementConstraints) {
                    reqParams.cfn['PlacementConstraints'] = [];
                    obj.data.placementConstraints.forEach(placementConstraint => {
                        reqParams.cfn['PlacementConstraints'].push({
                            'Type': placementConstraint.type,
                            'Expression': placementConstraint.expression
                        });
                    });
                }

                /*
                TODO:
                ProxyConfiguration
                ContainerDefinition:
                    DependsOn
                    StartTimeout
                    StopTimeout
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ecs', obj.id),
                    'region': obj.region,
                    'service': 'ecs',
                    'type': 'AWS::ECS::TaskDefinition',
                    'options': reqParams
                });
            } else if (obj.type == "route53.resolverendpoint") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['SecurityGroupIds'] = obj.data.SecurityGroupIds;
                reqParams.tf['security_group_ids'] = obj.data.SecurityGroupIds;
                reqParams.cfn['Direction'] = obj.data.Direction;
                reqParams.tf['direction'] = obj.data.Direction;

                /*
                TODO:
                IpAddresses: 
                    - IpAddressRequest
                Tags: 
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('route53', obj.id),
                    'region': obj.region,
                    'service': 'route53',
                    'type': 'AWS::Route53Resolver::ResolverEndpoint',
                    'terraformType': 'aws_route53_resolver_endpoint',
                    'options': reqParams
                });
            } else if (obj.type == "route53.resolverrule") {
                reqParams.cfn['DomainName'] = obj.data.DomainName;
                reqParams.tf['domain_name'] = obj.data.DomainName;
                reqParams.cfn['RuleType'] = obj.data.RuleType;
                reqParams.tf['rule_type'] = obj.data.RuleType;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['TargetIps'] = obj.data.TargetIps;
                if (obj.data.TargetIps) {
                    reqParams.tf['target_ip'] = [];
                    obj.data.TargetIps.forEach(targetip => {
                        reqParams.tf['target_ip'].push({
                            'ip': targetip.Ip,
                            'port': targetip.Port
                        });
                    });
                }
                reqParams.cfn['ResolverEndpointId'] = obj.data.ResolverEndpointId;
                reqParams.tf['resolver_endpoint_id'] = obj.data.ResolverEndpointId;

                /*
                TODO:
                Tags: 
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('route53', obj.id),
                    'region': obj.region,
                    'service': 'route53',
                    'type': 'AWS::Route53Resolver::ResolverRule',
                    'terraformType': 'aws_route53_resolver_rule',
                    'options': reqParams
                });
            } else if (obj.type == "route53.resolverruleassociation") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['ResolverRuleId'] = obj.data.ResolverRuleId;
                reqParams.tf['resolver_rule_id'] = obj.data.ResolverRuleId;
                reqParams.cfn['VPCId'] = obj.data.VPCId;
                reqParams.tf['vpc_id'] = obj.data.VPCId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('route53', obj.id),
                    'region': obj.region,
                    'service': 'route53',
                    'type': 'AWS::Route53Resolver::ResolverRuleAssociation',
                    'terraformType': 'aws_route53_resolver_rule_association',
                    'options': reqParams
                });
            } else if (obj.type == "datapipeline.pipeline") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.cfn['Description'] = obj.data.description;
                if (obj.data.tags) {
                    reqParams.cfn['PipelineTags'] = [];
                    obj.data.tags.forEach(tag => {
                        reqParams.cfn['PipelineTags'].push({
                            'Key': tag.key,
                            'Value': tag.value
                        });
                    });
                }

                /*
                TODO:
                Activate: Boolean
                ParameterObjects:
                    - Parameter object
                ParameterValues:
                    - Parameter value
                PipelineObjects:
                    - Pipeline object
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('datapipeline', obj.id),
                    'region': obj.region,
                    'service': 'datapipeline',
                    'type': 'AWS::DataPipeline::Pipeline',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.networkinterfacepermission") {
                reqParams.cfn['AwsAccountId'] = obj.data.AwsAccountId;
                reqParams.cfn['NetworkInterfaceId'] = obj.data.NetworkInterfaceId;
                reqParams.cfn['Permission'] = obj.data.Permission;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::NetworkInterfacePermission',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.flowlog") {
                reqParams.cfn['DeliverLogsPermissionArn'] = obj.data.DeliverLogsPermissionArn;
                reqParams.tf['iam_role_arn'] = obj.data.DeliverLogsPermissionArn;
                reqParams.cfn['LogGroupName'] = obj.data.LogGroupName;
                reqParams.cfn['ResourceId'] = obj.data.ResourceId;
                reqParams.cfn['TrafficType'] = obj.data.TrafficType;
                reqParams.tf['traffic_type'] = obj.data.TrafficType;
                reqParams.cfn['LogDestinationType'] = obj.data.LogDestinationType;
                reqParams.tf['log_destination_type'] = obj.data.LogDestinationType;
                reqParams.cfn['LogDestination'] = obj.data.LogDestination;
                reqParams.tf['log_destination'] = obj.data.LogDestination;
                if (obj.data.ResourceId.startsWith("vpc-")) {
                    reqParams.cfn['ResourceType'] = "VPC";
                    reqParams.tf['vpc_id'] = obj.data.ResourceId;
                } else if (obj.data.ResourceId.startsWith("subnet-")) {
                    reqParams.cfn['ResourceType'] = "Subnet";
                    reqParams.tf['subnet_id'] = obj.data.ResourceId;
                } else if (obj.data.ResourceId.startsWith("eni-")) {
                    reqParams.cfn['ResourceType'] = "NetworkInterface";
                    reqParams.tf['eni_id'] = obj.data.ResourceId;
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::FlowLog',
                    'terraformType': 'aws_flow_log',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.spotrequest") {
                var launchSpecifications = null;
                if (obj.data.LaunchSpecifications) {
                    launchSpecifications = [];
                    obj.data.LaunchSpecifications.forEach(launchSpecification => {
                        var securityGroups = null;
                        if (launchSpecification.SecurityGroups) {
                            securityGroups = [];
                            launchSpecification.SecurityGroups.forEach(securityGroup => {
                                securityGroups.push({
                                    'GroupId': securityGroup.GroupId
                                });
                            });
                        }
                        var iamInstanceProfile = null;
                        if (launchSpecification.IamInstanceProfile) {
                            iamInstanceProfile = {
                                'Arn': launchSpecification.IamInstanceProfile.Arn
                            };
                        }
                        launchSpecifications.push({
                            'SecurityGroups': securityGroups,
                            'BlockDeviceMappings': launchSpecification.BlockDeviceMappings,
                            'EbsOptimized': launchSpecification.EbsOptimized,
                            'IamInstanceProfile': iamInstanceProfile,
                            'ImageId': launchSpecification.ImageId,
                            'InstanceType': launchSpecification.InstanceType,
                            'KernelId': launchSpecification.KernelId,
                            'KeyName': launchSpecification.KeyName,
                            'Monitoring': launchSpecification.Monitoring,
                            'NetworkInterfaces': launchSpecification.NetworkInterfaces,
                            'Placement': launchSpecification.Placement,
                            'RamdiskId': launchSpecification.RamdiskId,
                            'SpotPrice': launchSpecification.SpotPrice,
                            'SubnetId': launchSpecification.SubnetId,
                            'TagSpecifications': launchSpecification.TagSpecifications,
                            'UserData': launchSpecification.UserData,
                            'WeightedCapacity': launchSpecification.WeightedCapacity
                        });
                    });
                }
                var launchTemplateConfigs = null;
                if (obj.data.LaunchTemplateConfigs) {
                    launchTemplateConfigs = [];
                    obj.data.LaunchTemplateConfigs.forEach(launchTemplateConfig => {
                        var overrides = null;
                        if (launchTemplateConfig.Overrides) {
                            overrides = [];
                            launchTemplateConfig.Overrides.forEach(override => {
                                overrides.push({
                                    'AvailabilityZone': override.AvailabilityZone,
                                    'InstanceType': override.InstanceType,
                                    'SpotPrice': override.SpotPrice,
                                    'SubnetId': override.SubnetId,
                                    'WeightedCapacity': override.WeightedCapacity
                                });
                            });
                        }
                        launchTemplateConfigs.push({
                            'LaunchTemplateSpecification': launchTemplateConfig.LaunchTemplateSpecification,
                            'Overrides': overrides
                        });
                    });
                }
                reqParams.cfn['SpotFleetRequestConfigData'] = {
                    'AllocationStrategy': obj.data.SpotFleetRequestConfig.AllocationStrategy,
                    'ExcessCapacityTerminationPolicy': obj.data.SpotFleetRequestConfig.ExcessCapacityTerminationPolicy,
                    'IamFleetRole': obj.data.SpotFleetRequestConfig.IamFleetRole,
                    'InstanceInterruptionBehavior': obj.data.SpotFleetRequestConfig.InstanceInterruptionBehavior,
                    'LaunchSpecifications': launchSpecifications,
                    'LaunchTemplateConfigs': launchTemplateConfigs,
                    'LoadBalancersConfig': obj.data.SpotFleetRequestConfig.LoadBalancersConfig,
                    'ReplaceUnhealthyInstances': obj.data.SpotFleetRequestConfig.ReplaceUnhealthyInstances,
                    'SpotPrice': obj.data.SpotFleetRequestConfig.SpotPrice,
                    'TargetCapacity': obj.data.SpotFleetRequestConfig.TargetCapacity,
                    'TerminateInstancesWithExpiration': obj.data.SpotFleetRequestConfig.TerminateInstancesWithExpiration,
                    'Type': obj.data.SpotFleetRequestConfig.Type,
                    'ValidFrom': obj.data.SpotFleetRequestConfig.ValidFrom, // TODO: Check date handling
                    'ValidUntil': obj.data.SpotFleetRequestConfig.ValidUntil // TODO: Check date handling
                };

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::SpotFleet',
                    'options': reqParams
                });
            } else if (obj.type == "kinesis.streamconsumer") {
                reqParams.cfn['ConsumerName'] = obj.data.ConsumerName;
                reqParams.cfn['StreamARN'] = obj.data.StreamARN;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('kinesis', obj.id),
                    'region': obj.region,
                    'service': 'kinesis',
                    'type': 'AWS::Kinesis::StreamConsumer',
                    'options': reqParams
                });
            } else if (obj.type == "kinesis.analyticsapplication") {
                reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
                reqParams.cfn['ApplicationDescription'] = obj.data.ApplicationDescription;
                reqParams.cfn['ApplicationCode'] = obj.data.ApplicationCode;
                if (obj.data.InputDescriptions) {
                    reqParams.cfn['Inputs'] = [];
                    obj.data.InputDescriptions.forEach(input => {
                        var inputProcessingConfiguration = null;
                        if (input.InputProcessingConfigurationDescription && input.InputProcessingConfigurationDescription.InputLambdaProcessorDescription) {
                            inputProcessingConfiguration = {
                                'InputLambdaProcessor': {
                                    'ResourceARN': input.InputProcessingConfigurationDescription.InputLambdaProcessorDescription.ResourceARN,
                                    'RoleARN': input.InputProcessingConfigurationDescription.InputLambdaProcessorDescription.RoleARN
                                }
                            };
                        }
                        reqParams.cfn['Inputs'].push({
                            'NamePrefix': input.NamePrefix,
                            'InputParallelism': input.InputParallelism,
                            'InputSchema': input.InputSchema,
                            'KinesisFirehoseInput': input.KinesisFirehoseInputDescription,
                            'KinesisStreamsInput': input.KinesisStreamsInputDescription,
                            'InputProcessingConfiguration': inputProcessingConfiguration
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('kinesis', obj.id),
                    'region': obj.region,
                    'service': 'kinesis',
                    'type': 'AWS::KinesisAnalytics::Application',
                    'options': reqParams
                });
            } else if (obj.type == "kinesis.analyticsapplicationoutput") {
                reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
                reqParams.cfn['Output'] = {
                    'Name': obj.data.Name,
                    'KinesisStreamsOutput': obj.data.KinesisStreamsOutputDescription,
                    'KinesisFirehoseOutput': obj.data.KinesisFirehoseOutputDescription,
                    'LambdaOutput': obj.data.LambdaOutputDescription,
                    'DestinationSchema': obj.data.DestinationSchema
                };

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('kinesis', obj.id),
                    'region': obj.region,
                    'service': 'kinesis',
                    'type': 'AWS::KinesisAnalytics::ApplicationOutput',
                    'options': reqParams
                });
            } else if (obj.type == "kinesis.analyticsapplicationreferencedatasource") {
                reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
                reqParams.cfn['ReferenceDataSource'] = {
                    'TableName': obj.data.TableName,
                    'S3ReferenceDataSource': obj.data.S3ReferenceDataSourceDescription,
                    'ReferenceSchema': obj.data.ReferenceSchema
                };

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('kinesis', obj.id),
                    'region': obj.region,
                    'service': 'kinesis',
                    'type': 'AWS::KinesisAnalytics::ApplicationReferenceDataSource',
                    'options': reqParams
                });
            } else if (obj.type == "kinesis.analyticsv2application") {
                reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
                reqParams.cfn['ApplicationDescription'] = obj.data.ApplicationDescription;
                reqParams.cfn['ServiceExecutionRole'] = obj.data.ServiceExecutionRole;
                reqParams.cfn['RuntimeEnvironment'] = obj.data.RuntimeEnvironment;
                if (obj.data.ApplicationConfigurationDescription) {
                    var sqlApplicationConfiguration = null;
                    if (obj.data.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription && obj.data.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions) {
                        var inputs = [];
                        obj.data.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions.forEach(input => {
                            var inputProcessingConfiguration = null;
                            if (input.InputProcessingConfigurationDescription && input.InputProcessingConfigurationDescription.InputLambdaProcessorDescription) {
                                inputProcessingConfiguration = {
                                    'InputLambdaProcessor': {
                                        'ResourceARN': input.InputProcessingConfigurationDescription.InputLambdaProcessorDescription.ResourceARN
                                    }
                                };
                            }
                            var kinesisStreamsInput = null;
                            if (input.KinesisStreamsInputDescription) {
                                kinesisStreamsInput = {
                                    'ResourceARN': input.KinesisStreamsInputDescription.ResourceARN
                                };
                            }
                            var kinesisFirehoseInput = null;
                            if (input.KinesisFirehoseInputDescription) {
                                kinesisFirehoseInput = {
                                    'ResourceARN': input.KinesisFirehoseInputDescription.ResourceARN
                                };
                            }
                            inputs.push({
                                'NamePrefix': input.NamePrefix,
                                'InputSchema': input.InputSchema,
                                'KinesisStreamsInput': kinesisStreamsInput,
                                'KinesisFirehoseInput': kinesisFirehoseInput,
                                'InputProcessingConfiguration': inputProcessingConfiguration,
                                'InputParallelism': input.InputParallelism
                            });
                        });
                        sqlApplicationConfiguration = {
                            'Inputs': inputs
                        };
                    }
                    var applicationCodeConfiguration = null;
                    if (obj.data.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription) {
                        var codeContent = null;
                        if (obj.data.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription) {
                            /*
                            SKIPPED:
                            ZipFileContent
                            */
                            codeContent = {
                                'TextContent': obj.data.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.TextContent,
                                'S3ContentLocation': obj.data.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription
                            };
                        }
                        applicationCodeConfiguration = {
                            'CodeContentType': obj.data.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType,
                            'CodeContent': codeContent
                        };
                    }
                    var flinkApplicationConfiguration = null;
                    if (obj.data.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription) {
                        var parallelismConfiguration = null;
                        if (obj.data.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription) {
                            parallelismConfiguration = {
                                'ConfigurationType': obj.data.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ConfigurationType,
                                'ParallelismPerKPU': obj.data.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ParallelismPerKPU,
                                'AutoScalingEnabled': obj.data.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled,
                                'Parallelism': obj.data.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.Parallelism
                            };
                        }
                        flinkApplicationConfiguration = {
                            'CheckpointConfiguration': obj.data.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription,
                            'ParallelismConfiguration': parallelismConfiguration,
                            'MonitoringConfiguration': obj.data.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription
                        };
                    }
                    var environmentProperties = null;
                    if (obj.data.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions && obj.data.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions) {
                        environmentProperties = {
                            'PropertyGroups': []
                        };
                        obj.data.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions.forEach(propertyGroup => {
                            environmentProperties.PropertyGroups.push({
                                'PropertyMap': propertyGroup.PropertyMap,
                                'PropertyGroupId': propertyGroup.PropertyGroupId
                            });
                        });
                    }
                    reqParams.cfn['ApplicationConfiguration'] = {
                        'ApplicationCodeConfiguration': applicationCodeConfiguration,
                        'EnvironmentProperties': environmentProperties,
                        'FlinkApplicationConfiguration': flinkApplicationConfiguration,
                        'SqlApplicationConfiguration': sqlApplicationConfiguration,
                        'ApplicationSnapshotConfiguration': obj.data.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('kinesis', obj.id),
                    'region': obj.region,
                    'service': 'kinesis',
                    'type': 'AWS::KinesisAnalyticsV2::Application',
                    'options': reqParams
                });
            } else if (obj.type == "kinesis.analyticsv2applicationoutput") {
                reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
                reqParams.cfn['Output'] = {
                    'Name': obj.data.Name,
                    'KinesisStreamsOutput': obj.data.KinesisStreamsOutputDescription,
                    'KinesisFirehoseOutput': obj.data.KinesisFirehoseOutputDescription,
                    'LambdaOutput': obj.data.LambdaOutputDescription,
                    'DestinationSchema': obj.data.DestinationSchema
                };

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('kinesis', obj.id),
                    'region': obj.region,
                    'service': 'kinesis',
                    'type': 'AWS::KinesisAnalyticsV2::ApplicationOutput',
                    'options': reqParams
                });
            } else if (obj.type == "kinesis.analyticsv2applicationreferencedatasource") {
                reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
                reqParams.cfn['ReferenceDataSource'] = {
                    'TableName': obj.data.TableName,
                    'S3ReferenceDataSource': obj.data.S3ReferenceDataSourceDescription,
                    'ReferenceSchema': obj.data.ReferenceSchema
                };

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('kinesis', obj.id),
                    'region': obj.region,
                    'service': 'kinesis',
                    'type': 'AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource',
                    'options': reqParams
                });
            } else if (obj.type == "kinesis.analyticsv2applicationcloudwatchloggingoption") {
                reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
                reqParams.cfn['CloudWatchLoggingOption'] = {
                    'LogStreamARN': obj.data.LogStreamARN
                };

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('kinesis', obj.id),
                    'region': obj.region,
                    'service': 'kinesis',
                    'type': 'AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption',
                    'options': reqParams
                });
            } else if (obj.type == "kinesis.firehosedeliverystream") {
                reqParams.cfn['DeliveryStreamName'] = obj.data.DeliveryStreamName;
                reqParams.cfn['DeliveryStreamType'] = obj.data.DeliveryStreamType;
                if (obj.data.Source && obj.data.Source.KinesisStreamSourceDescription) {
                    reqParams.cfn['KinesisStreamSourceConfiguration'] = {
                        'KinesisStreamARN': obj.data.Source.KinesisStreamSourceDescription.KinesisStreamARN,
                        'RoleARN': obj.data.Source.KinesisStreamSourceDescription.RoleARN
                    };
                }
                obj.data.Destinations.forEach(destination => {
                    if (destination.S3DestinationDescription) {
                        reqParams.cfn['S3DestinationConfiguration'] = {
                            'BucketARN': destination.S3DestinationDescription.BucketARN,
                            'BufferingHints': destination.S3DestinationDescription.BufferingHints,
                            'CloudWatchLoggingOptions': destination.S3DestinationDescription.CloudWatchLoggingOptions,
                            'CompressionFormat': destination.S3DestinationDescription.CompressionFormat,
                            'EncryptionConfiguration': destination.S3DestinationDescription.EncryptionConfiguration,
                            'Prefix': destination.S3DestinationDescription.Prefix,
                            'RoleARN': destination.S3DestinationDescription.RoleARN
                        };
                    }
                    if (destination.ExtendedS3DestinationDescription) {
                        reqParams.cfn['ExtendedS3DestinationConfiguration'] = {
                            'BucketARN': destination.ExtendedS3DestinationDescription.BucketARN,
                            'BufferingHints': destination.ExtendedS3DestinationDescription.BufferingHints,
                            'CloudWatchLoggingOptions': destination.ExtendedS3DestinationDescription.CloudWatchLoggingOptions,
                            'CompressionFormat': destination.ExtendedS3DestinationDescription.CompressionFormat,
                            'EncryptionConfiguration': destination.ExtendedS3DestinationDescription.EncryptionConfiguration,
                            'Prefix': destination.ExtendedS3DestinationDescription.Prefix,
                            'RoleARN': destination.ExtendedS3DestinationDescription.RoleARN,
                            'ProcessingConfiguration': destination.ExtendedS3DestinationDescription.ProcessingConfiguration,
                            'S3BackupConfiguration': destination.ExtendedS3DestinationDescription.S3BackupConfiguration,
                            'S3BackupMode': destination.ExtendedS3DestinationDescription.S3BackupMode
                        };
                    }
                    if (destination.RedshiftDestinationDescription) {
                        var s3Configuration = null;
                        if (destination.RedshiftDestinationDescription.S3DestinationDescription) {
                            s3Configuration = {
                                'BucketARN': destination.RedshiftDestinationDescription.S3DestinationDescription.BucketARN,
                                'BufferingHints': destination.RedshiftDestinationDescription.S3DestinationDescription.BufferingHints,
                                'CloudWatchLoggingOptions': destination.RedshiftDestinationDescription.S3DestinationDescription.CloudWatchLoggingOptions,
                                'CompressionFormat': destination.RedshiftDestinationDescription.S3DestinationDescription.CompressionFormat,
                                'EncryptionConfiguration': destination.RedshiftDestinationDescription.S3DestinationDescription.EncryptionConfiguration,
                                'Prefix': destination.RedshiftDestinationDescription.S3DestinationDescription.Prefix,
                                'RoleARN': destination.RedshiftDestinationDescription.S3DestinationDescription.RoleARN
                            };
                        }
                        reqParams.cfn['RedshiftDestinationConfiguration'] = {
                            'CloudWatchLoggingOptions': destination.RedshiftDestinationDescription.CloudWatchLoggingOptions,
                            'ClusterJDBCURL': destination.RedshiftDestinationDescription.ClusterJDBCURL,
                            'CopyCommand': destination.RedshiftDestinationDescription.CopyCommand,
                            'Password': destination.RedshiftDestinationDescription.Password,
                            'ProcessingConfiguration': destination.RedshiftDestinationDescription.ProcessingConfiguration,
                            'RoleARN': destination.RedshiftDestinationDescription.RoleARN,
                            'S3Configuration': s3Configuration,
                            'Username': destination.RedshiftDestinationDescription.Username
                        };
                    }
                    if (destination.ElasticsearchDestinationDescription) {
                        var s3Configuration = null;
                        if (destination.ElasticsearchDestinationDescription.S3DestinationDescription) {
                            s3Configuration = {
                                'BucketARN': destination.ElasticsearchDestinationDescription.S3DestinationDescription.BucketARN,
                                'BufferingHints': destination.ElasticsearchDestinationDescription.S3DestinationDescription.BufferingHints,
                                'CloudWatchLoggingOptions': destination.ElasticsearchDestinationDescription.S3DestinationDescription.CloudWatchLoggingOptions,
                                'CompressionFormat': destination.ElasticsearchDestinationDescription.S3DestinationDescription.CompressionFormat,
                                'EncryptionConfiguration': destination.ElasticsearchDestinationDescription.S3DestinationDescription.EncryptionConfiguration,
                                'Prefix': destination.ElasticsearchDestinationDescription.S3DestinationDescription.Prefix,
                                'RoleARN': destination.ElasticsearchDestinationDescription.S3DestinationDescription.RoleARN
                            };
                        }
                        reqParams.cfn['ElasticsearchDestinationConfiguration'] = {
                            'BufferingHints': destination.ElasticsearchDestinationDescription.BufferingHints,
                            'CloudWatchLoggingOptions': destination.ElasticsearchDestinationDescription.CloudWatchLoggingOptions,
                            'DomainARN': destination.ElasticsearchDestinationDescription.DomainARN,
                            'IndexName': destination.ElasticsearchDestinationDescription.IndexName,
                            'IndexRotationPeriod': destination.ElasticsearchDestinationDescription.IndexRotationPeriod,
                            'ProcessingConfiguration': destination.ElasticsearchDestinationDescription.ProcessingConfiguration,
                            'RetryOptions': destination.ElasticsearchDestinationDescription.RetryOptions,
                            'RoleARN': destination.ElasticsearchDestinationDescription.RoleARN,
                            'S3BackupMode': destination.ElasticsearchDestinationDescription.S3BackupMode,
                            'S3Configuration': s3Configuration,
                            'TypeName': destination.ElasticsearchDestinationDescription.TypeName
                        };
                    }
                    if (destination.ElasticsearchDestinationDescription) {
                        var s3Configuration = null;
                        if (destination.SplunkDestinationDescription.S3DestinationDescription) {
                            s3Configuration = {
                                'BucketARN': destination.SplunkDestinationDescription.S3DestinationDescription.BucketARN,
                                'BufferingHints': destination.SplunkDestinationDescription.S3DestinationDescription.BufferingHints,
                                'CloudWatchLoggingOptions': destination.SplunkDestinationDescription.S3DestinationDescription.CloudWatchLoggingOptions,
                                'CompressionFormat': destination.SplunkDestinationDescription.S3DestinationDescription.CompressionFormat,
                                'EncryptionConfiguration': destination.SplunkDestinationDescription.S3DestinationDescription.EncryptionConfiguration,
                                'Prefix': destination.SplunkDestinationDescription.S3DestinationDescription.Prefix,
                                'RoleARN': destination.SplunkDestinationDescription.S3DestinationDescription.RoleARN
                            };
                        }
                        reqParams.cfn['SplunkDestinationConfiguration'] = {
                            'CloudWatchLoggingOptions': destination.SplunkDestinationDescription.CloudWatchLoggingOptions,
                            'HECAcknowledgmentTimeoutInSeconds': destination.SplunkDestinationDescription.HECAcknowledgmentTimeoutInSeconds,
                            'HECEndpoint': destination.SplunkDestinationDescription.HECEndpoint,
                            'HECEndpointType': destination.SplunkDestinationDescription.HECEndpointType,
                            'HECToken': destination.SplunkDestinationDescription.HECToken,
                            'ProcessingConfiguration': destination.SplunkDestinationDescription.ProcessingConfiguration,
                            'RetryOptions': destination.SplunkDestinationDescription.RetryOptions,
                            'S3BackupMode': destination.SplunkDestinationDescription.S3BackupMode,
                            'S3Configuration': s3Configuration
                        };
                    }
                });

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('kinesis', obj.id),
                    'region': obj.region,
                    'service': 'kinesis',
                    'type': 'AWS::KinesisFirehose::DeliveryStream',
                    'options': reqParams
                });
            } else if (obj.type == "cloudfront.originaccessidentity") {
                if (obj.data.Comment) {
                    reqParams.cfn['CloudFrontOriginAccessIdentityConfig'] = {
                        'Comment': obj.data.Comment
                    };
                    reqParams.tf['comment'] = obj.data.Comment;
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cloudfront', obj.id),
                    'region': obj.region,
                    'service': 'cloudfront',
                    'type': 'AWS::CloudFront::CloudFrontOriginAccessIdentity',
                    'terraformType': 'aws_cloudfront_origin_access_identity',
                    'options': reqParams
                });
            } else if (obj.type == "cloudfront.streamingdistribution") {
                var aliases = null;
                if (obj.data.Aliases) {
                    aliases = obj.data.Aliases.Items
                };
                var trustedSigners = null;
                if (obj.data.TrustedSigners) {
                    trustedSigners = {
                        'Enabled': obj.data.TrustedSigners.Enabled,
                        'AwsAccountNumbers': obj.data.TrustedSigners.Items
                    };
                }
                reqParams.cfn['StreamingDistributionConfig'] = {
                    'Aliases': aliases,
                    'Comment': obj.data.Comment,
                    'Enabled': obj.data.Enabled,
                    'PriceClass': obj.data.PriceClass,
                    'S3Origin': obj.data.S3Origin,
                    'TrustedSigners': trustedSigners
                };

                /*
                TODO:
                StreamingDistributionConfig:
                    Logging
                Tags: 
                    - Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cloudfront', obj.id),
                    'region': obj.region,
                    'service': 'cloudfront',
                    'type': 'AWS::CloudFront::StreamingDistribution',
                    'options': reqParams
                });
            } else if (obj.type == "elbv2.loadbalancer") {
                reqParams.cfn['Name'] = obj.data.LoadBalancerName;
                reqParams.tf['name'] = obj.data.LoadBalancerName;
                reqParams.cfn['Scheme'] = obj.data.Scheme;
                reqParams.tf['internal'] = (obj.data.Scheme == "internal");
                reqParams.cfn['Type'] = obj.data.Type;
                reqParams.tf['load_balancer_type'] = obj.data.Type;
                if (obj.data.AvailabilityZones) {
                    reqParams.cfn['Subnets'] = [];
                    reqParams.tf['subnets'] = [];
                    reqParams.cfn['SubnetMappings'] = [];
                    reqParams.tf['subnet_mapping'] = [];
                    obj.data.AvailabilityZones.forEach(availabilityZone => {
                        reqParams.cfn['Subnets'].push(availabilityZone.SubnetId);
                        reqParams.tf['subnets'].push(availabilityZone.SubnetId);
                        if (obj.data.LoadBalancerAddresses) {
                            obj.data.LoadBalancerAddresses.forEach(loadBalancerAddress => {
                                if (loadBalancerAddress.AllocationId) {
                                    reqParams.cfn['SubnetMappings'].push({
                                        'SubnetId': availabilityZone.SubnetId,
                                        'AllocationId': loadBalancerAddress.AllocationId
                                    });
                                    reqParams.tf['subnet_mapping'].push({
                                        'subnet_id': availabilityZone.SubnetId,
                                        'allocation_id': loadBalancerAddress.AllocationId
                                    });
                                }
                            });
                        }
                    });
                }
                reqParams.cfn['SecurityGroups'] = obj.data.SecurityGroups;
                reqParams.tf['security_groups'] = obj.data.SecurityGroups;
                reqParams.cfn['IpAddressType'] = obj.data.IpAddressType;
                reqParams.tf['ip_address_type'] = obj.data.IpAddressType;
                reqParams.cfn['LoadBalancerAttributes'] = obj.data.Attributes;
                if (obj.data.Attributes) {
                    reqParams.tf['access_logs'] = null;
                    obj.data.Attributes.forEach(attribute => {
                        if (attribute.Key == "access_logs.s3.enabled") {
                            if (!reqParams.tf['access_logs']) {
                                reqParams.tf['access_logs'] = {};
                            }
                            reqParams.tf['access_logs']['enabled'] = attribute.Value;
                        } else if (attribute.Key == "access_logs.s3.bucket") {
                            if (!reqParams.tf['access_logs']) {
                                reqParams.tf['access_logs'] = {};
                            }
                            reqParams.tf['access_logs']['bucket'] = attribute.Value;
                        } else if (attribute.Key == "access_logs.s3.prefix") {
                            if (!reqParams.tf['access_logs']) {
                                reqParams.tf['access_logs'] = {};
                            }
                            reqParams.tf['access_logs']['prefix'] = attribute.Value;
                        } else if (attribute.Key == "deletion_protection.enabled") {
                            reqParams.tf['enable_deletion_protection'] = attribute.Value;
                        } else if (attribute.Key == "idle_timeout.timeout_seconds") {
                            reqParams.tf['idle_timeout'] = attribute.Value;
                        } else if (attribute.Key == "routing.http2.enabled") {
                            reqParams.tf['enable_http2'] = attribute.Value;
                        } else if (attribute.Key == "load_balancing.cross_zone.enabled") {
                            reqParams.tf['enable_cross_zone_load_balancing'] = attribute.Value;
                        }
                    });
                }

                /*
                TODO:
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('elbv2', obj.id),
                    'region': obj.region,
                    'service': 'elbv2',
                    'type': 'AWS::ElasticLoadBalancingV2::LoadBalancer',
                    'terraformType': 'aws_lb',
                    'options': reqParams
                });
            } else if (obj.type == "elbv2.loadbalancerlistenercertificate") {
                if (obj.data.Certificates) {
                    reqParams.cfn['Certificates'] = [];
                    obj.data.Certificates.forEach(certificate => {
                        reqParams.cfn['Certificates'].push({
                            'CertificateArn': certificate.CertificateArn
                        });
                    });
                    reqParams.cfn['ListenerArn'] = obj.data.ListenerArn;

                    tracked_resources.push({
                    'obj': obj,
                        'logicalId': getResourceName('elbv2', obj.id),
                        'region': obj.region,
                        'service': 'elbv2',
                        'type': 'AWS::ElasticLoadBalancingV2::ListenerCertificate',
                        'options': reqParams
                    });

                    obj.data.Certificates.forEach(certificate => {
                        reqParams = {
                            'boto3': {},
                            'go': {},
                            'cfn': {},
                            'cli': {},
                            'tf': {},
                            'iam': {}
                        };

                        reqParams.tf['listener_arn'] = obj.data.ListenerArn;
                        reqParams.tf['certificate_arn'] = certificate.CertificateArn;

                        tracked_resources.push({
                    'obj': obj,
                            'logicalId': getResourceName('elbv2', obj.id),
                            'region': obj.region,
                            'service': 'elbv2',
                            'terraformType': 'aws_lb_listener_certificate',
                            'options': reqParams
                        });
                    });
                }
            } else if (obj.type == "elbv2.loadbalancerlistener") {
                reqParams.cfn['LoadBalancerArn'] = obj.data.LoadBalancerArn;
                reqParams.tf['load_balancer_arn'] = obj.data.LoadBalancerArn;
                reqParams.cfn['Port'] = obj.data.Port;
                reqParams.tf['port'] = obj.data.Port;
                reqParams.cfn['Protocol'] = obj.data.Protocol;
                reqParams.tf['protocol'] = obj.data.Protocol;
                reqParams.cfn['SslPolicy'] = obj.data.SslPolicy;
                reqParams.tf['ssl_policy'] = obj.data.SslPolicy;
                if (obj.data.Certificates) {
                    reqParams.cfn['Certificates'] = [];
                    obj.data.Certificates.forEach(certificate => {
                        reqParams.cfn['Certificates'].push({
                            'CertificateArn': certificate.CertificateArn
                        });
                        reqParams.tf['certificate_arn'] = certificate.CertificateArn; // TODO: more than one?
                    });
                }
                if (obj.data.DefaultActions) {
                    reqParams.cfn['DefaultActions'] = [];
                    reqParams.tf['default_action'] = [];
                    obj.data.DefaultActions.forEach(defaultAction => {
                        reqParams.cfn['DefaultActions'].push({
                            'AuthenticateCognitoConfig': defaultAction.AuthenticateCognitoConfig,
                            'AuthenticateOidcConfig': defaultAction.AuthenticateOidcConfig,
                            'FixedResponseConfig': defaultAction.FixedResponseConfig,
                            'Order': defaultAction.Order,
                            'RedirectConfig': defaultAction.RedirectConfig,
                            'TargetGroupArn': defaultAction.TargetGroupArn,
                            'Type': defaultAction.Type
                        });

                        var authenticateoidc = null;
                        if (defaultAction.AuthenticateOidcConfig) {
                            var extraparams = null;
                            if (defaultAction.AuthenticateOidcConfig.AuthenticationRequestExtraParams) {
                                extraparams = [];
                                Object.keys(defaultAction.AuthenticateOidcConfig.AuthenticationRequestExtraParams).forEach(paramkey => {
                                    extraparams.push({
                                        'key': paramkey,
                                        'value': defaultAction.AuthenticateOidcConfig.AuthenticationRequestExtraParams[paramkey]
                                    });
                                });
                            }
                            authenticateoidc = {
                                'authentication_request_extra_params': extraparams,
                                'authorization_endpoint': defaultAction.AuthenticateOidcConfig.AuthorizationEndpoint,
                                'client_id': defaultAction.AuthenticateOidcConfig.ClientId,
                                'client_secret': defaultAction.AuthenticateOidcConfig.ClientSecret,
                                'issuer': defaultAction.AuthenticateOidcConfig.Issuer,
                                'on_unauthenticated_request': defaultAction.AuthenticateOidcConfig.OnUnauthenticatedRequest,
                                'scope': defaultAction.AuthenticateOidcConfig.Scope,
                                'session_cookie_name': defaultAction.AuthenticateOidcConfig.SessionCookieName,
                                'session_timeout': defaultAction.AuthenticateOidcConfig.SessionTimeout,
                                'token_endpoint': defaultAction.AuthenticateOidcConfig.TokenEndpoint,
                                'user_info_endpoint': defaultAction.AuthenticateOidcConfig.UserInfoEndpoint
                            };
                        }
                        var authenticatecognito = null;
                        if (defaultAction.AuthenticateCognitoConfig) {
                            var extraparams = null;
                            if (defaultAction.AuthenticateCognitoConfig.AuthenticationRequestExtraParams) {
                                extraparams = [];
                                Object.keys(defaultAction.AuthenticateCognitoConfig.AuthenticationRequestExtraParams).forEach(paramkey => {
                                    extraparams.push({
                                        'key': paramkey,
                                        'value': defaultAction.AuthenticateCognitoConfig.AuthenticationRequestExtraParams[paramkey]
                                    });
                                });
                            }
                            authenticatecognito = {
                                'authentication_request_extra_params': extraparams,
                                'on_unauthenticated_request': defaultAction.AuthenticateCognitoConfig.OnUnauthenticatedRequest,
                                'scope': defaultAction.AuthenticateCognitoConfig.Scope,
                                'session_cookie_name': defaultAction.AuthenticateCognitoConfig.SessionCookieName,
                                'session_timeout': defaultAction.AuthenticateCognitoConfig.SessionTimeout,
                                'user_pool_arn': defaultAction.AuthenticateCognitoConfig.UserPoolArn,
                                'user_pool_client_id': defaultAction.AuthenticateCognitoConfig.UserPoolClientId,
                                'user_pool_domain': defaultAction.AuthenticateCognitoConfig.UserPoolDomain
                            };
                        }
                        var fixedresponse = null;
                        if (defaultAction.FixedResponseConfig) {
                            fixedresponse = {
                                'content_type': defaultAction.FixedResponseConfig.ContentType,
                                'message_body': defaultAction.FixedResponseConfig.MessageBody,
                                'status_code': defaultAction.FixedResponseConfig.StatusCode
                            };
                        }
                        var redirect = null;
                        if (defaultAction.RedirectConfig) {
                            redirect = {
                                'host': defaultAction.RedirectConfig.Host,
                                'path': defaultAction.RedirectConfig.Path,
                                'port': defaultAction.RedirectConfig.Port,
                                'protocol': defaultAction.RedirectConfig.Protocol,
                                'query': defaultAction.RedirectConfig.Query,
                                'status_code': defaultAction.RedirectConfig.StatusCode
                            };
                        }

                        reqParams.tf['default_action'].push({
                            'authenticate_cognito': authenticatecognito,
                            'authenticate_oidc': authenticateoidc,
                            'fixed_response': fixedresponse,
                            'redirect': redirect,
                            'target_group_arn': defaultAction.TargetGroupArn,
                            'type': defaultAction.Type
                        });
                    });
                }

                /*
                TODO:
                Certificates: // use seperate entity?
                    - Certificate
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('elbv2', obj.id),
                    'region': obj.region,
                    'service': 'elbv2',
                    'type': 'AWS::ElasticLoadBalancingV2::Listener',
                    'terraformType': 'aws_lb_listener',
                    'options': reqParams
                });
            } else if (obj.type == "elbv2.loadbalancerlistenerrule") {
                reqParams.cfn['Priority'] = obj.data.Priority;
                reqParams.tf['priority'] = obj.data.Priority;
                reqParams.cfn['ListenerArn'] = obj.data.ListenerArn;
                reqParams.tf['listener_arn'] = obj.data.ListenerArn;
                if (obj.data.Conditions) {
                    reqParams.cfn['Conditions'] = [];
                    reqParams.tf['condition'] = [];
                    obj.data.Conditions.forEach(condition => {
                        reqParams.cfn['Conditions'].push({
                            'Field': condition.Field,
                            'Values': condition.Values
                        });
                        reqParams.tf['condition'].push({
                            'field': condition.Field,
                            'values': condition.Values
                        });
                    });
                }
                reqParams.cfn['Actions'] = obj.data.Actions;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('elbv2', obj.id),
                    'region': obj.region,
                    'service': 'elbv2',
                    'type': 'AWS::ElasticLoadBalancingV2::ListenerRule',
                    'terraformType': 'aws_lb_listener_rule',
                    'options': reqParams
                });
            } else if (obj.type == "lambda.version") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['FunctionName'] = obj.data.FunctionName;

                /*
                TODO:
                CodeSha256 : String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('lambda', obj.id),
                    'region': obj.region,
                    'service': 'lambda',
                    'type': 'AWS::Lambda::Version',
                    'options': reqParams
                });
            } else if (obj.type == "lambda.layerversion") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['CompatibleRuntimes'] = obj.data.CompatibleRuntimes;
                reqParams.tf['compatible_runtimes'] = obj.data.CompatibleRuntimes;
                reqParams.cfn['LicenseInfo'] = obj.data.LicenseInfo;
                reqParams.tf['license_info'] = obj.data.LicenseInfo;
                reqParams.cfn['LayerName'] = obj.data.LayerName;
                reqParams.tf['layer_name'] = obj.data.LayerName;

                /*
                TODO:
                Content: 
                    Content
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('lambda', obj.id),
                    'region': obj.region,
                    'service': 'lambda',
                    'type': 'AWS::Lambda::LayerVersion',
                    'terraformType': 'aws_lambda_layer_version',
                    'options': reqParams
                });
            } else if (obj.type == "lambda.layerversionpermission") {
                reqParams.cfn['Action'] = obj.data.Action;
                reqParams.cfn['Principal'] = obj.data.Principal;
                reqParams.cfn['LayerVersionArn'] = obj.data.LayerVersionArn;
                if (obj.data.Condition && obj.data.Condition.StringEquals && obj.data.Condition.StringEquals['aws:PrincipalOrgID']) {
                    reqParams.cfn['OrganizationId'] = obj.data.Condition.StringEquals['aws:PrincipalOrgID'];
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('lambda', obj.id),
                    'region': obj.region,
                    'service': 'lambda',
                    'type': 'AWS::Lambda::LayerVersionPermission',
                    'options': reqParams
                });
            } else if (obj.type == "lambda.permission") {
                reqParams.cfn['Action'] = obj.data.Action;
                reqParams.tf['action'] = obj.data.Action;
                reqParams.cfn['FunctionName'] = obj.data.FunctionName;
                reqParams.tf['function_name'] = obj.data.FunctionName;
                reqParams.cfn['Principal'] = obj.data.Principal.Service || obj.data.Principal.AWS || obj.data.Principal;
                reqParams.tf['principal'] = obj.data.Principal.Service || obj.data.Principal.AWS || obj.data.Principal;
                if (obj.data.Condition && obj.data.Condition.ArnLike && obj.data.Condition.ArnLike['AWS:SourceArn']) {
                    reqParams.cfn['SourceArn'] = obj.data.Condition.ArnLike['AWS:SourceArn'];
                    reqParams.tf['source_arn'] = obj.data.Condition.ArnLike['AWS:SourceArn'];
                }

                /*
                TODO:
                EventSourceToken: String
                SourceAccount: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('lambda', obj.id),
                    'region': obj.region,
                    'service': 'lambda',
                    'type': 'AWS::Lambda::Permission',
                    'terraformType': 'aws_lambda_permission',
                    'options': reqParams
                });
            } else if (obj.type == "lambda.eventsourcemapping") {
                reqParams.cfn['BatchSize'] = obj.data.BatchSize;
                reqParams.tf['batch_size'] = obj.data.BatchSize;
                reqParams.cfn['EventSourceArn'] = obj.data.EventSourceArn;
                reqParams.tf['event_source_arn'] = obj.data.EventSourceArn;
                reqParams.cfn['FunctionName'] = obj.data.FunctionArn;
                reqParams.tf['function_name'] = obj.data.FunctionArn;
                reqParams.cfn['Enabled'] = (obj.data.State == "Enabled");
                reqParams.tf['enabled'] = (obj.data.State == "Enabled");

                /*
                TODO:
                StartingPosition: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('lambda', obj.id),
                    'region': obj.region,
                    'service': 'lambda',
                    'type': 'AWS::Lambda::EventSourceMapping',
                    'terraformType': 'aws_lambda_event_source_mapping',
                    'options': reqParams
                });
            } else if (obj.type == "dynamodb.acceleratorcluster") {
                reqParams.cfn['ClusterName'] = obj.data.ClusterName;
                reqParams.tf['cluster_name'] = obj.data.ClusterName;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['NodeType'] = obj.data.NodeType;
                reqParams.tf['node_type'] = obj.data.NodeType;
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                reqParams.tf['maintenance_window'] = obj.data.PreferredMaintenanceWindow;
                if (obj.data.NotificationConfiguration) {
                    reqParams.cfn['NotificationTopicARN'] = obj.data.NotificationConfiguration.TopicArn;
                    reqParams.tf['notification_topic_arn'] = obj.data.NotificationConfiguration.TopicArn;
                }
                reqParams.cfn['SubnetGroupName'] = obj.data.SubnetGroup;
                reqParams.tf['subnet_group_name'] = obj.data.SubnetGroup;
                if (obj.data.SecurityGroups) {
                    reqParams.cfn['SecurityGroupIds'] = [];
                    reqParams.tf['security_group_ids'] = [];
                    obj.data.SecurityGroups.forEach(securityGroup => {
                        reqParams.cfn['SecurityGroupIds'].push(securityGroup.SecurityGroupIdentifier);
                        reqParams.tf['security_group_ids'].push(securityGroup.SecurityGroupIdentifier);
                    });
                }
                reqParams.cfn['IAMRoleARN'] = obj.data.IamRoleArn;
                reqParams.tf['iam_role_arn'] = obj.data.IamRoleArn;
                if (obj.data.ParameterGroup) {
                    reqParams.cfn['ParameterGroupName'] = obj.data.ParameterGroup.ParameterGroupName;
                    reqParams.tf['parameter_group_name'] = obj.data.ParameterGroup.ParameterGroupName;
                }
                if (obj.data.SSEDescription) {
                    reqParams.cfn['SSESpecification'] = {
                        'SSEEnabled': (obj.data.SSEDescription.Status == "ENABLED")
                    };
                    reqParams.tf['server_side_encryption'] = {
                        'enabled': (obj.data.SSEDescription.Status == "ENABLED")
                    };
                }
                if (obj.data.Nodes) {
                    reqParams.cfn['AvailabilityZones'] = [];
                    reqParams.tf['availability_zones '] = [];
                    obj.data.Nodes.forEach(node => {
                        if (!reqParams.cfn['AvailabilityZones'].includes(node.AvailabilityZone)) {
                            reqParams.cfn['AvailabilityZones'].push(node.AvailabilityZone);
                            reqParams.tf['availability_zones '].push(node.AvailabilityZone);
                        }
                    });
                }

                /*
                TODO:
                ReplicationFactor: Integer
                Tags: { String:String, ... }
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('dynamodb', obj.id),
                    'region': obj.region,
                    'service': 'dynamodb',
                    'type': 'AWS::DAX::Cluster',
                    'terraformType': 'aws_dax_cluster',
                    'options': reqParams
                });
            } else if (obj.type == "dynamodb.acceleratorparametergroup") {
                reqParams.cfn['ParameterGroupName'] = obj.data.ParameterGroupName;
                reqParams.tf['name'] = obj.data.ParameterGroupName;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                if (obj.data.Parameters) {
                    reqParams.cfn['ParameterNameValues'] = {};
                    reqParams.tf['parameters'] = [];
                    obj.data.Parameters.forEach(parameter => {
                        reqParams.cfn['ParameterNameValues'][parameter.ParameterName] = parameter.ParameterValue;
                        reqParams.tf['parameters'].push({
                            'name': parameter.ParameterName,
                            'value': parameter.ParameterValue
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('dynamodb', obj.id),
                    'region': obj.region,
                    'service': 'dynamodb',
                    'type': 'AWS::DAX::ParameterGroup',
                    'terraformType': 'aws_dax_parameter_group',
                    'options': reqParams
                });
            } else if (obj.type == "dynamodb.acceleratorsubnetgroup") {
                reqParams.cfn['SubnetGroupName'] = obj.data.SubnetGroupName;
                reqParams.tf['name'] = obj.data.SubnetGroupName;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                if (obj.data.Subnets) {
                    reqParams.cfn['SubnetIds'] = [];
                    reqParams.tf['subnet_ids'] = [];
                    obj.data.Subnets.forEach(subnet => {
                        reqParams.cfn['SubnetIds'].push(subnet.SubnetIdentifier);
                        reqParams.tf['subnet_ids'].push(subnet.SubnetIdentifier);
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('dynamodb', obj.id),
                    'region': obj.region,
                    'service': 'dynamodb',
                    'type': 'AWS::DAX::SubnetGroup',
                    'terraformType': 'aws_dax_subnet_group',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.subnetnetworkaclassociation") {
                reqParams.cfn['SubnetId'] = obj.data.SubnetId;
                reqParams.cfn['NetworkAclId'] = obj.data.NetworkAclId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::SubnetNetworkAclAssociation',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.subnetroutetableassociation") {
                reqParams.cfn['RouteTableId'] = obj.data.RouteTableId;
                reqParams.tf['route_table_id'] = obj.data.RouteTableId;
                reqParams.cfn['SubnetId'] = obj.data.SubnetId;
                reqParams.tf['subnet_id'] = obj.data.SubnetId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::SubnetRouteTableAssociation',
                    'terraformType': 'aws_route_table_association',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.subnetipv6cidrblock") {
                reqParams.cfn['Ipv6CidrBlock'] = obj.data.Ipv6CidrBlock;
                reqParams.cfn['SubnetId'] = obj.data.SubnetId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::SubnetCidrBlock',
                    'options': reqParams
                });
            } else if (obj.type == "opsworks.volume") {
                reqParams.cfn['Ec2VolumeId'] = obj.data.Ec2VolumeId;
                reqParams.cfn['MountPoint'] = obj.data.MountPoint;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['StackId'] = obj.data.StackId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('opsworks', obj.id),
                    'region': obj.region,
                    'service': 'opsworks',
                    'type': 'AWS::OpsWorks::Volume',
                    'options': reqParams
                });
            } else if (obj.type == "opsworks.userprofile") {
                reqParams.cfn['AllowSelfManagement'] = obj.data.AllowSelfManagement;
                reqParams.tf['allow_self_management'] = obj.data.AllowSelfManagement;
                reqParams.cfn['IamUserArn'] = obj.data.IamUserArn;
                reqParams.tf['user_arn'] = obj.data.IamUserArn;
                reqParams.cfn['SshPublicKey'] = obj.data.SshPublicKey;
                reqParams.tf['ssh_public_key'] = obj.data.SshPublicKey;
                reqParams.cfn['SshUsername'] = obj.data.SshUsername;
                reqParams.tf['ssh_username'] = obj.data.SshUsername;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('opsworks', obj.id),
                    'region': obj.region,
                    'service': 'opsworks',
                    'type': 'AWS::OpsWorks::UserProfile',
                    'terraformType': 'aws_opsworks_user_profile',
                    'options': reqParams
                });
            } else if (obj.type == "opsworks.configurationmanagementserver") {
                reqParams.cfn['AssociatePublicIpAddress'] = obj.data.AssociatePublicIpAddress;
                reqParams.cfn['BackupRetentionCount'] = obj.data.BackupRetentionCount;
                reqParams.cfn['ServerName'] = obj.data.ServerName;
                reqParams.cfn['DisableAutomatedBackup'] = obj.data.DisableAutomatedBackup;
                reqParams.cfn['Engine'] = obj.data.Engine;
                reqParams.cfn['EngineModel'] = obj.data.EngineModel;
                reqParams.cfn['EngineAttributes'] = obj.data.EngineAttributes;
                reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
                reqParams.cfn['InstanceProfileArn'] = obj.data.InstanceProfileArn;
                reqParams.cfn['InstanceType'] = obj.data.InstanceType;
                reqParams.cfn['KeyPair'] = obj.data.KeyPair;
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                reqParams.cfn['PreferredBackupWindow'] = obj.data.PreferredBackupWindow;
                reqParams.cfn['SecurityGroupIds'] = obj.data.SecurityGroupIds;
                reqParams.cfn['ServiceRoleArn'] = obj.data.ServiceRoleArn;
                reqParams.cfn['SubnetIds'] = obj.data.SubnetIds;

                /*
                TODO:
                BackupId: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('opsworks', obj.id),
                    'region': obj.region,
                    'service': 'opsworks',
                    'type': 'AWS::OpsWorksCM::Server',
                    'options': reqParams
                });
            } else if (obj.type == "autoscaling.scalingplan") {
                reqParams.cfn['ApplicationSource'] = obj.data.ApplicationSource;
                reqParams.cfn['ScalingInstructions'] = [];
                obj.data.ScalingInstructions.forEach(scalingInstruction => {
                    reqParams.cfn['ScalingInstructions'].push({
                        'ServiceNamespace': scalingInstruction.ServiceNamespace,
                        'ResourceId': scalingInstruction.ResourceId,
                        'ScalableDimension': scalingInstruction.ScalableDimension,
                        'MinCapacity': scalingInstruction.MinCapacity,
                        'MaxCapacity': scalingInstruction.MaxCapacity,
                        'TargetTrackingConfigurations': scalingInstruction.TargetTrackingConfigurations,
                        'PredefinedLoadMetricSpecification': scalingInstruction.PredefinedLoadMetricSpecification,
                        'CustomizedLoadMetricSpecification': scalingInstruction.CustomizedLoadMetricSpecification,
                        'ScheduledActionBufferTime': scalingInstruction.ScheduledActionBufferTime,
                        'PredictiveScalingMaxCapacityBehavior': scalingInstruction.PredictiveScalingMaxCapacityBehavior,
                        'PredictiveScalingMaxCapacityBuffer': scalingInstruction.PredictiveScalingMaxCapacityBuffer,
                        'PredictiveScalingMode': scalingInstruction.PredictiveScalingMode,
                        'ScalingPolicyUpdateBehavior': scalingInstruction.ScalingPolicyUpdateBehavior,
                        'DisableDynamicScaling': scalingInstruction.DisableDynamicScaling
                    });
                });

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('autoscaling', obj.id),
                    'region': obj.region,
                    'service': 'autoscaling',
                    'type': 'AWS::AutoScalingPlans::ScalingPlan',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.snapshotlifecyclepolicy") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.cfn['ExecutionRoleArn'] = obj.data.ExecutionRoleArn;
                reqParams.tf['execution_role_arn'] = obj.data.ExecutionRoleArn;
                reqParams.cfn['State'] = obj.data.State;
                reqParams.tf['state'] = obj.data.State;
                reqParams.cfn['PolicyDetails'] = obj.data.PolicyDetails;
                if (obj.data.PolicyDetails) {
                    var targettags = null;
                    if (obj.data.PolicyDetails.TargetTags) {
                        targettags = {};
                        obj.data.PolicyDetails.TargetTags.forEach(targettag => {
                            targettags[targettag.Key] = targettag.Value;
                        });
                    }
                    var schedules = null;
                    if (obj.data.PolicyDetails.Schedules) {
                        schedules = [];
                        obj.data.PolicyDetails.Schedules.forEach(schedule => {
                            var createrule = null;
                            if (schedule.CreateRule) {
                                createrule = {
                                    'interval': schedule.CreateRule.Interval,
                                    'interval_unit': schedule.CreateRule.IntervalUnit,
                                    'times': schedule.CreateRule.Times
                                };
                            }
                            var retainrule = null;
                            if (schedule.RetainRule) {
                                retainrule = {
                                    'count': schedule.RetainRule.Count
                                };
                            }
                            var tagstoadd = null;
                            if (schedule.TagsToAdd) {
                                tagstoadd = {};
                                schedule.TagsToAdd.forEach(tagtoadd => {
                                    tagstoadd[tagtoadd.Key] = tagtoadd.Value;
                                });
                            }
                            schedules.push({
                                'copy_tags': schedule.CopyTags,
                                'create_rule': createrule,
                                'name': schedule.Name,
                                'retain_rule': retainrule,
                                'tags_to_add': tagstoadd
                            });
                        });
                    }
                    reqParams.tf['policy_details'] = {
                        'resource_types': obj.data.PolicyDetails.ResourceTypes,
                        'schedule': schedules,
                        'target_tags': targettags
                    };
                }
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::DLM::LifecyclePolicy',
                    'terraformType': 'aws_dlm_lifecycle_policy',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.networkinterfaceattachment") {
                reqParams.cfn['NetworkInterfaceId'] = obj.data.NetworkInterfaceId;
                reqParams.tf['network_interface_id'] = obj.data.NetworkInterfaceId;
                reqParams.cfn['DeviceIndex'] = obj.data.DeviceIndex;
                reqParams.tf['device_index'] = obj.data.DeviceIndex;
                reqParams.cfn['InstanceId'] = obj.data.InstanceId;
                reqParams.tf['instance_id'] = obj.data.InstanceId;
                reqParams.cfn['DeleteOnTermination'] = obj.data.DeleteOnTermination;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::NetworkInterfaceAttachment',
                    'terraformType': 'aws_network_interface_attachment',
                    'options': reqParams
                });
            } else if (obj.type == "autoscaling.lifecyclehook") {
                reqParams.cfn['LifecycleHookName'] = obj.data.LifecycleHookName;
                reqParams.tf['name'] = obj.data.LifecycleHookName;
                reqParams.cfn['AutoScalingGroupName'] = obj.data.AutoScalingGroupName;
                reqParams.tf['autoscaling_group_name'] = obj.data.AutoScalingGroupName;
                reqParams.cfn['NotificationTargetARN'] = obj.data.NotificationTargetARN;
                reqParams.tf['notification_target_arn'] = obj.data.NotificationTargetARN;
                reqParams.cfn['NotificationMetadata'] = obj.data.NotificationMetadata;
                reqParams.tf['notification_metadata'] = obj.data.NotificationMetadata;
                reqParams.cfn['RoleARN'] = obj.data.RoleARN;
                reqParams.tf['role_arn'] = obj.data.RoleARN;
                reqParams.cfn['HeartbeatTimeout'] = obj.data.HeartbeatTimeout;
                reqParams.tf['heartbeat_timeout'] = obj.data.HeartbeatTimeout;
                reqParams.cfn['DefaultResult'] = obj.data.DefaultResult;
                reqParams.tf['default_result'] = obj.data.DefaultResult;
                reqParams.cfn['LifecycleTransition'] = obj.data.LifecycleTransition;
                reqParams.tf['lifecycle_transition'] = obj.data.LifecycleTransition;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('autoscaling', obj.id),
                    'region': obj.region,
                    'service': 'autoscaling',
                    'type': 'AWS::AutoScaling::LifecycleHook',
                    'terraformType': 'aws_autoscaling_lifecycle_hook',
                    'options': reqParams
                });
            } else if (obj.type == "elasticache.replicationgroup") {
                reqParams.cfn['ReplicationGroupId'] = obj.data.ReplicationGroupId;
                reqParams.tf['replication_group_id'] = obj.data.ReplicationGroupId;
                reqParams.cfn['ReplicationGroupDescription'] = obj.data.Description;
                reqParams.tf['replication_group_description'] = obj.data.Description;
                if (obj.data.NodeGroups) {
                    reqParams.cfn['NumNodeGroups'] = obj.data.NodeGroups.length;
                    reqParams.tf['cluster_mode'] = {
                        'num_node_groups': obj.data.NodeGroups.length
                    };
                }
                reqParams.cfn['SnapshottingClusterId'] = obj.data.SnapshottingClusterId;
                reqParams.tf['snapshot_arns'] = [obj.data.SnapshottingClusterId];
                reqParams.cfn['AutomaticFailoverEnabled'] = (obj.data.AutomaticFailover == "enabled");
                reqParams.tf['automatic_failover_enabled'] = (obj.data.AutomaticFailover == "enabled");
                if (obj.data.ConfigurationEndpoint) {
                    reqParams.cfn['Port'] = obj.data.ConfigurationEndpoint.Port;
                    reqParams.tf['port'] = obj.data.ConfigurationEndpoint.Port;
                }
                reqParams.cfn['SnapshotRetentionLimit'] = obj.data.SnapshotRetentionLimit;
                reqParams.tf['snapshot_retention_limit'] = obj.data.SnapshotRetentionLimit;
                reqParams.cfn['SnapshotWindow'] = obj.data.SnapshotWindow;
                reqParams.tf['snapshot_window'] = obj.data.SnapshotWindow;
                reqParams.cfn['CacheNodeType'] = obj.data.CacheNodeType;
                reqParams.tf['node_type'] = obj.data.CacheNodeType;
                reqParams.cfn['TransitEncryptionEnabled'] = obj.data.TransitEncryptionEnabled;
                reqParams.tf['transit_encryption_enabled'] = obj.data.TransitEncryptionEnabled;
                reqParams.cfn['AtRestEncryptionEnabled'] = obj.data.AtRestEncryptionEnabled;
                reqParams.tf['at_rest_encryption_enabled'] = obj.data.AtRestEncryptionEnabled;

                /*
                TODO:
                AuthToken: String
                AutoMinorVersionUpgrade: Boolean
                CacheParameterGroupName: String
                CacheSecurityGroupNames:
                    - String
                CacheSubnetGroupName: String
                Engine: String
                EngineVersion: String
                NodeGroupConfiguration:
                    - NodeGroupConfiguration
                NotificationTopicArn: String
                NumCacheClusters: Integer
                PreferredCacheClusterAZs:
                    - String
                PreferredMaintenanceWindow: String
                PrimaryClusterId: String
                ReplicasPerNodeGroup: Integer
                SecurityGroupIds:
                    - String
                SnapshotArns:
                    - String
                SnapshotName: String
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('elasticache', obj.id),
                    'region': obj.region,
                    'service': 'elasticache',
                    'type': 'AWS::ElastiCache::ReplicationGroup',
                    'terraformType': 'aws_elasticache_replication_group',
                    'options': reqParams
                });
            } else if (obj.type == "appsync.mesh") {
                reqParams.cfn['MeshName'] = obj.data.meshName;
                reqParams.cfn['Spec'] = {
                    'EgressFilter': {
                        'Type': obj.data.spec.egressFilter.type
                    }
                };

                /*
                TODO:
                Tags : 
                - TagRef
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appsync', obj.id),
                    'region': obj.region,
                    'service': 'appsync',
                    'type': 'AWS::AppMesh::Mesh',
                    'options': reqParams
                });
            } else if (obj.type == "appmesh.virtualrouter") {
                reqParams.cfn['MeshName'] = obj.data.meshName;
                reqParams.cfn['VirtualRouterName'] = obj.data.virtualRouterName;
                var listeners = [];
                obj.data.spec.listeners.forEach(listener => {
                    listener.push({
                        'PortMapping': {
                            'Port': listener.portMapping.port,
                            'Protocol': listener.portMapping.protocol
                        }
                    });
                });
                reqParams.cfn['Spec'] = {
                    'Listeners': listeners
                };

                /*
                TODO:
                Tags : 
                    - TagRef
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appmesh', obj.id),
                    'region': obj.region,
                    'service': 'appmesh',
                    'type': 'AWS::AppMesh::VirtualRouter',
                    'options': reqParams
                });
            } else if (obj.type == "appmesh.route") {
                reqParams.cfn['MeshName'] = obj.data.meshName;
                reqParams.cfn['RouteName'] = obj.data.routeName;
                reqParams.cfn['VirtualRouterName'] = obj.data.virtualRouterName;
                var httpRouteWeightedTargets = [];
                obj.data.spec.httpRoute.action.weightedTargets.forEach(weightedTarget => {
                    httpRouteWeightedTargets.push({
                        'VirtualNode': weightedTarget.virtualNode,
                        'Weight': weightedTarget.weight
                    });
                });
                var tcpRouteWeightedTargets = [];
                obj.data.spec.tcpRoute.action.weightedTargets.forEach(weightedTarget => {
                    tcpRouteWeightedTargets.push({
                        'VirtualNode': weightedTarget.virtualNode,
                        'Weight': weightedTarget.weight
                    });
                });
                reqParams.cfn['Spec'] = {
                    'HttpRoute': {
                        'Action': {
                            'WeightedTargets': httpRouteWeightedTargets
                        },
                        'Match': {
                            'Prefix': obj.data.spec.httpRoute.match.prefix
                        }
                    },
                    'TcpRoute': {
                        'Action': {
                            'WeightedTargets': tcpRouteWeightedTargets
                        }
                    }
                };

                /*
                TODO:
                Tags : 
                    - TagRef
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appmesh', obj.id),
                    'region': obj.region,
                    'service': 'appmesh',
                    'type': 'AWS::AppMesh::Route',
                    'options': reqParams
                });
            } else if (obj.type == "appmesh.virtualservice") {
                reqParams.cfn['MeshName'] = obj.data.meshName;
                reqParams.cfn['VirtualServiceName'] = obj.data.virtualServiceName;
                reqParams.cfn['Spec'] = {
                    'Provider': {
                        'VirtualNode': {
                            'VirtualNodeName': obj.data.spec.virtualNode.virtualNodeName
                        },
                        'VirtualRouter': {
                            'VirtualRouterName': obj.data.spec.virtualRouter.virtualRouterName
                        }
                    }
                };

                /*
                TODO:
                Tags : 
                    - TagRef
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appmesh', obj.id),
                    'region': obj.region,
                    'service': 'appmesh',
                    'type': 'AWS::AppMesh::VirtualService',
                    'options': reqParams
                });
            } else if (obj.type == "appmesh.virtualnode") {
                reqParams.cfn['MeshName'] = obj.data.meshName;
                reqParams.cfn['VirtualNodeName'] = obj.data.VirtualNodeName;
                var backends = [];
                obj.data.spec.backends.forEach(backend => {
                    backends.push({
                        'VirtualService': {
                            'VirtualServiceName': backend.virtualService.virtualServiceName
                        }
                    });
                });
                var listeners = [];
                obj.data.spec.listeners.forEach(listener => {
                    listeners.push({
                        'HealthCheck': {
                            'HealthyThreshold': listener.healthCheck.healthyThreshold,
                            'IntervalMillis': listener.healthCheck.intervalMillis,
                            'Path': listener.healthCheck.path,
                            'Port': listener.healthCheck.port,
                            'Protocol': listener.healthCheck.protocol,
                            'TimeoutMillis': listener.healthCheck.timeoutMillis,
                            'UnhealthyThreshold': listener.healthCheck.unhealthyThreshold
                        },
                        'PortMapping': {
                            'Port': listener.portMapping.port,
                            'Protocol': listener.portMapping.protocol
                        }
                    });
                });
                reqParams.cfn['Spec'] = {
                    'Backends': backends,
                    'Listeners': listeners,
                    'Logging': {
                        'AccessLog': {
                            'File': {
                                'Path': obj.data.spec.logging.accessLog.file.path
                            }
                        }
                    },
                    'ServiceDiscovery': {
                        'DNS': {
                            'Hostname': obj.data.spec.serviceDiscovery.dns.hostname
                        }
                    }
                };

                /*
                TODO:
                Tags : 
                    - TagRef
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('appmesh', obj.id),
                    'region': obj.region,
                    'service': 'appmesh',
                    'type': 'AWS::AppMesh::VirtualNode',
                    'options': reqParams
                });
            } else if (obj.type == "elastictranscoder.pipeline") {
                reqParams.tf['input_bucket'] = obj.data.InputBucket;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.tf['role'] = obj.data.Role;
                reqParams.tf['output_bucket'] = obj.data.OutputBucket;
                reqParams.tf['aws_kms_key_arn'] = obj.data.AwsKmsKeyArn;
                if (obj.data.ContentConfig) {
                    reqParams.tf['content_config'] = {
                        'bucket': obj.data.ContentConfig.Bucket,
                        'storage_class': obj.data.ContentConfig.StorageClass
                    };
                    if (obj.data.ContentConfig.Permissions) {
                        reqParams.tf['content_config_permissions'] = [];
                        obj.data.ContentConfig.Permissions.forEach(permission => {
                            reqParams.tf['content_config_permissions'].push({
                                'grantee_type': permission.GranteeType,
                                'grantee': permission.Grantee,
                                'access': permission.Access
                            });
                        });
                    }
                }
                if (obj.data.Notifications) {
                    reqParams.tf['notifications'] = {
                        'completed': obj.data.Notifications.Completed,
                        'error': obj.data.Notifications.Error,
                        'progressing': obj.data.Notifications.Progressing,
                        'warning': obj.data.Notifications.Warning
                    };
                }
                if (obj.data.ThumbnailConfig) {
                    reqParams.tf['thumbnail_config'] = {
                        'bucket': obj.data.ThumbnailConfig.Bucket,
                        'storage_class': obj.data.ThumbnailConfig.StorageClass
                    };
                    if (obj.data.ThumbnailConfig.Permissions) {
                        reqParams.tf['thumbnail_config_permissions'] = [];
                        obj.data.ThumbnailConfig.Permissions.forEach(permission => {
                            reqParams.tf['thumbnail_config_permissions'].push({
                                'grantee_type': permission.GranteeType,
                                'grantee': permission.Grantee,
                                'access': permission.Access
                            });
                        });
                    }
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('elastictranscoder', obj.id),
                    'region': obj.region,
                    'service': 'elastictranscoder',
                    'terraformType': 'aws_elastictranscoder_pipeline',
                    'options': reqParams
                });
            } else if (obj.type == "mediapackage.channel") {
                reqParams.tf['channel_id'] = obj.data.Id;
                reqParams.tf['description'] = obj.data.Description;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('mediapackage', obj.id),
                    'region': obj.region,
                    'service': 'mediapackage',
                    'terraformType': 'aws_media_package_channel',
                    'options': reqParams
                });
            } else if (obj.type == "mediastore.container") {
                reqParams.cfn['ContainerName'] = obj.data.Container.Name;
                reqParams.tf['name'] = obj.data.Container.Name;
                reqParams.cfn['AccessLoggingEnabled'] = obj.data.Container.AccessLoggingEnabled;
                reqParams.cfn['CorsPolicy'] = obj.data.CorsPolicy;
                reqParams.cfn['LifecyclePolicy'] = obj.data.LifecyclePolicy;
                reqParams.cfn['Policy'] = obj.data.Policy;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('mediastore', obj.id),
                    'region': obj.region,
                    'service': 'mediastore',
                    'type': 'AWS::MediaStore::Container',
                    'terraformType': 'aws_media_store_container',
                    'options': reqParams
                });
            } else if (obj.type == "mediastore.containerpolicy") {
                reqParams.tf['container_name'] = obj.data.ContainerName;
                reqParams.tf['policy'] = obj.data.Policy;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('mediastore', obj.id),
                    'region': obj.region,
                    'service': 'mediastore',
                    'terraformType': 'aws_media_store_container_policy',
                    'options': reqParams
                });
            } else if (obj.type == "glacier.vault") {
                reqParams.tf['name'] = obj.data.VaultName;
                reqParams.tf['access_policy'] = obj.data.AccessPolicy;
                if (obj.data.NotificationConfig) {
                    reqParams.tf['notification'] = {
                        'events': obj.data.NotificationConfig.Events,
                        'sns_topic': obj.data.NotificationConfig.SNSTopic
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('glacier', obj.id),
                    'region': obj.region,
                    'service': 'glacier',
                    'terraformType': 'aws_glacier_vault',
                    'options': reqParams
                });
            } else if (obj.type == "glacier.vaultlock") {
                var completelock = false;
                if (obj.data.State == "Locked") {
                    completelock = true;
                }
                reqParams.tf['vault_name'] = obj.data.VaultName;
                reqParams.tf['complete_lock'] = completelock;
                reqParams.tf['policy'] = obj.data.Policy;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('glacier', obj.id),
                    'region': obj.region,
                    'service': 'glacier',
                    'terraformType': 'aws_glacier_vault_lock',
                    'options': reqParams
                });
            } else if (obj.type == "devicefarm.project") {
                reqParams.tf['name'] = obj.data.name;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('devicefarm', obj.id),
                    'region': obj.region,
                    'service': 'devicefarm',
                    'terraformType': 'aws_devicefarm_project',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.capacityreservation") {
                reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
                reqParams.cfn['InstanceType'] = obj.data.InstanceType;
                reqParams.cfn['InstancePlatform'] = obj.data.InstancePlatform;
                reqParams.cfn['Tenancy'] = obj.data.Tenancy;
                reqParams.cfn['InstanceCount'] = obj.data.TotalInstanceCount;
                reqParams.cfn['EphemeralStorage'] = obj.data.EphemeralStorage;
                reqParams.cfn['EbsOptimized'] = obj.data.EbsOptimized;
                reqParams.cfn['EndDateType'] = obj.data.EndDateType;
                if (obj.data.EndDateType == "limited" && obj.data.EndDate) {
                    var enddate = new Date(obj.data.EndDate);
                    reqParams.cfn['EndDate'] = enddate.getMonth() + "/" + enddate.getDate() + "/" + enddate.getFullYear() + ", " + enddate.getHours() + ":" + enddate.getMinutes() + ":" + enddate.getSeconds(); // 5/31/2019, 13:30:55
                }
                reqParams.cfn['InstanceMatchCriteria'] = obj.data.InstanceMatchCriteria;
                if (obj.data.Tags) {
                    reqParams.cfn['TagSpecifications'] = [{
                        'ResourceType': 'capacity-reservation',
                        'Tags': obj.data.Tags
                    }];
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::CapacityReservation',
                    'options': reqParams
                });
            } else if (obj.type == "cloudhsm.cluster") {
                reqParams.tf['source_backup_identifier'] = obj.data.SourceBackupId;
                reqParams.tf['hsm_type'] = obj.data.HsmType;
                reqParams.tf['subnet_ids'] = Object.values(obj.data.SubnetMapping);

                /*
                TODO:
                tags
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cloudhsm', obj.id),
                    'region': obj.region,
                    'service': 'cloudhsm',
                    'terraformType': 'aws_cloudhsm_v2_cluster',
                    'options': reqParams
                });
            } else if (obj.type == "cloudhsm.hsm") {
                reqParams.tf['cluster_id'] = obj.data.ClusterId;
                reqParams.tf['subnet_id'] = obj.data.SubnetId;
                reqParams.tf['availability_zone'] = obj.data.AvailabilityZone;
                reqParams.tf['ip_address'] = obj.data.EniIp;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cloudhsm', obj.id),
                    'region': obj.region,
                    'service': 'cloudhsm',
                    'terraformType': 'aws_cloudhsm_v2_hsm',
                    'options': reqParams
                });
            } else if (obj.type == "apigatewayv2.domainname") {
                reqParams.cfn['DomainName'] = obj.data.DomainName;
                if (obj.data.DomainNameConfigurations) {
                    reqParams.cfn['DomainNameConfigurations'] = [];
                    obj.data.DomainNameConfigurations.forEach(domainnameconfiguration => {
                        reqParams.cfn['DomainNameConfigurations'].push({
                            'CertificateArn': domainnameconfiguration.CertificateArn,
                            'CertificateName': domainnameconfiguration.CertificateName,
                            'EndpointType': domainnameconfiguration.EndpointType
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigatewayv2', obj.id),
                    'region': obj.region,
                    'service': 'apigatewayv2',
                    'type': 'AWS::ApiGatewayV2::DomainName',
                    'options': reqParams
                });
            } else if (obj.type == "apigatewayv2.apimapping") {
                reqParams.cfn['ApiId'] = obj.data.ApiId;
                reqParams.cfn['DomainName'] = obj.data.DomainName;
                reqParams.cfn['Stage'] = obj.data.Stage;
                reqParams.cfn['ApiMappingKey'] = obj.data.ApiMappingKey;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('apigatewayv2', obj.id),
                    'region': obj.region,
                    'service': 'apigatewayv2',
                    'type': 'AWS::ApiGatewayV2::ApiMapping',
                    'options': reqParams
                });
            } else if (obj.type == "iam.servicelinkedrole") {
                reqParams.cfn['AWSServiceName'] = obj.data.Path.split("/")[2];
                reqParams.tf['aws_service_name'] = obj.data.Path.split("/")[2];
                if (obj.data.RoleName.includes("_") && !obj.data.Path.endsWith(".application-autoscaling.amazonaws.com/") && !obj.data.Path.endsWith(".autoscaling-plans.amazonaws.com/")) {
                    var suffixparts = obj.data.RoleName.split("_");
                    suffixparts.shift();
                    reqParams.cfn['CustomSuffix'] = suffixparts.join("_");
                    reqParams.tf['custom_suffix'] = suffixparts.join("_");
                }
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.tf['description'] = obj.data.Description;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iam', obj.id),
                    'region': obj.region,
                    'service': 'iam',
                    'type': 'AWS::IAM::ServiceLinkedRole',
                    'terraformType': 'aws_iam_service_linked_role',
                    'options': reqParams
                });
            } else if (obj.type == "directconnect.connection") {
                reqParams.tf['name'] = obj.data.connectionName;
                reqParams.tf['bandwidth'] = obj.data.bandwidth;
                reqParams.tf['location'] = obj.data.location;
                
                /*
                TODO:
                tags
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('directconnect', obj.id),
                    'region': obj.region,
                    'service': 'directconnect',
                    'terraformType': 'aws_dx_connection',
                    'options': reqParams
                });
            } else if (obj.type == "directconnect.connectionassociation") {
                reqParams.tf['connection_id'] = obj.data.connectionId;
                reqParams.tf['lag_id'] = obj.data.lagId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('directconnect', obj.id),
                    'region': obj.region,
                    'service': 'directconnect',
                    'terraformType': 'aws_dx_connection_association',
                    'options': reqParams
                });
            } else if (obj.type == "directconnect.publicvirtualinterface") {
                reqParams.tf['address_family'] = obj.data.addressFamily;
                reqParams.tf['bgp_asn'] = obj.data.asn;
                reqParams.tf['connection_id'] = obj.data.connectionId;
                reqParams.tf['name'] = obj.data.virtualInterfaceName;
                reqParams.tf['vlan'] = obj.data.vlan;
                reqParams.tf['amazon_address'] = obj.data.amazonAddress;
                reqParams.tf['bgp_auth_key'] = obj.data.authKey;
                reqParams.tf['customer_address'] = obj.data.customerAddress;
                if (obj.data.routeFilterPrefixes) {
                    reqParams.tf['route_filter_prefixes'] = [];
                    obj.data.routeFilterPrefixes.forEach(prefix => {
                        reqParams.tf['route_filter_prefixes'].push(prefix.cidr);
                    });
                }
                
                /*
                TODO:
                tags
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('directconnect', obj.id),
                    'region': obj.region,
                    'service': 'directconnect',
                    'terraformType': 'aws_dx_public_virtual_interface',
                    'options': reqParams
                });
            } else if (obj.type == "directconnect.privatevirtualinterface") {
                reqParams.tf['address_family'] = obj.data.addressFamily;
                reqParams.tf['bgp_asn'] = obj.data.asn;
                reqParams.tf['connection_id'] = obj.data.connectionId;
                reqParams.tf['name'] = obj.data.virtualInterfaceName;
                reqParams.tf['vlan'] = obj.data.vlan;
                reqParams.tf['amazon_address'] = obj.data.amazonAddress;
                reqParams.tf['bgp_auth_key'] = obj.data.authKey;
                reqParams.tf['customer_address'] = obj.data.customerAddress;
                reqParams.tf['mtu'] = obj.data.mtu;
                reqParams.tf['dx_gateway_id'] = obj.data.directConnectGatewayId;
                reqParams.tf['vpn_gateway_id'] = obj.data.virtualGatewayId;
                
                /*
                TODO:
                tags
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('directconnect', obj.id),
                    'region': obj.region,
                    'service': 'directconnect',
                    'terraformType': 'aws_dx_private_virtual_interface',
                    'options': reqParams
                });
            } else if (obj.type == "directconnect.hostedpublicvirtualinterface") {
                reqParams.tf['address_family'] = obj.data.addressFamily;
                reqParams.tf['bgp_asn'] = obj.data.asn;
                reqParams.tf['connection_id'] = obj.data.connectionId;
                reqParams.tf['name'] = obj.data.virtualInterfaceName;
                reqParams.tf['vlan'] = obj.data.vlan;
                reqParams.tf['amazon_address'] = obj.data.amazonAddress;
                reqParams.tf['bgp_auth_key'] = obj.data.authKey;
                reqParams.tf['customer_address'] = obj.data.customerAddress;
                if (obj.data.routeFilterPrefixes) {
                    reqParams.tf['route_filter_prefixes'] = [];
                    obj.data.routeFilterPrefixes.forEach(prefix => {
                        reqParams.tf['route_filter_prefixes'].push(prefix.cidr);
                    });
                }
                reqParams.tf['owner_account_id'] = obj.data.ownerAccount;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('directconnect', obj.id),
                    'region': obj.region,
                    'service': 'directconnect',
                    'terraformType': 'aws_dx_hosted_public_virtual_interface',
                    'options': reqParams
                });
            } else if (obj.type == "directconnect.hostedprivatevirtualinterface") {
                reqParams.tf['address_family'] = obj.data.addressFamily;
                reqParams.tf['bgp_asn'] = obj.data.asn;
                reqParams.tf['connection_id'] = obj.data.connectionId;
                reqParams.tf['name'] = obj.data.virtualInterfaceName;
                reqParams.tf['vlan'] = obj.data.vlan;
                reqParams.tf['amazon_address'] = obj.data.amazonAddress;
                reqParams.tf['bgp_auth_key'] = obj.data.authKey;
                reqParams.tf['customer_address'] = obj.data.customerAddress;
                reqParams.tf['mtu'] = obj.data.mtu;
                reqParams.tf['owner_account_id'] = obj.data.ownerAccount;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('directconnect', obj.id),
                    'region': obj.region,
                    'service': 'directconnect',
                    'terraformType': 'aws_dx_hosted_private_virtual_interface',
                    'options': reqParams
                });
            } else if (obj.type == "directconnect.bgppeer") {
                reqParams.tf['address_family'] = obj.data.addressFamily;
                reqParams.tf['bgp_asn'] = obj.data.asn;
                reqParams.tf['virtual_interface_id'] = obj.data.virtualInterfaceId;
                reqParams.tf['amazon_address'] = obj.data.amazonAddress;
                reqParams.tf['bgp_auth_key'] = obj.data.authKey;
                reqParams.tf['customer_address'] = obj.data.customerAddress;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('directconnect', obj.id),
                    'region': obj.region,
                    'service': 'directconnect',
                    'terraformType': 'aws_dx_bgp_peer',
                    'options': reqParams
                });
            } else if (obj.type == "directconnect.lag") {
                reqParams.tf['name'] = obj.data.lagName;
                reqParams.tf['connections_bandwidth'] = obj.data.connectionsBandwidth;
                reqParams.tf['location'] = obj.data.location;
                
                /*
                TODO:
                force_destroy
                tags
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('directconnect', obj.id),
                    'region': obj.region,
                    'service': 'directconnect',
                    'terraformType': 'aws_dx_lag',
                    'options': reqParams
                });
            } else if (obj.type == "directconnect.gateway") {
                reqParams.tf['name'] = obj.data.directConnectGatewayName;
                reqParams.tf['amazon_side_asn'] = obj.data.amazonSideAsn;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('directconnect', obj.id),
                    'region': obj.region,
                    'service': 'directconnect',
                    'terraformType': 'aws_dx_gateway',
                    'options': reqParams
                });
            } else if (obj.type == "directconnect.gatewayassociation") {
                if (obj.data.associatedGateway.type == "virtualPrivateGateway") {
                    reqParams.tf['dx_gateway_id'] = obj.data.directConnectGatewayId;
                    reqParams.tf['vpn_gateway_id'] = obj.data.virtualGatewayId;
                    if (obj.data.allowedPrefixesToDirectConnectGateway) {
                        reqParams.tf['allowed_prefixes'] = [];
                        obj.data.allowedPrefixesToDirectConnectGateway.forEach(prefix => {
                            reqParams.tf['allowed_prefixes'].push(prefix.cidr);
                        });
                    }

                    tracked_resources.push({
                        'obj': obj,
                        'logicalId': getResourceName('directconnect', obj.id),
                        'region': obj.region,
                        'service': 'directconnect',
                        'terraformType': 'aws_dx_gateway_association',
                        'options': reqParams
                    });
                }
            } else if (obj.type == "directconnect.gatewayassociationproposal") {
                if (obj.data.associatedGateway.type == "virtualPrivateGateway") {
                    reqParams.tf['dx_gateway_id'] = obj.data.directConnectGatewayId;
                    reqParams.tf['vpn_gateway_id'] = obj.data.associatedGateway.id;
                    if (obj.data.requestedAllowedPrefixesToDirectConnectGateway) {
                        reqParams.tf['allowed_prefixes'] = [];
                        obj.data.requestedAllowedPrefixesToDirectConnectGateway.forEach(prefix => {
                            reqParams.tf['allowed_prefixes'].push(prefix.cidr);
                        });
                    }
                    reqParams.tf['dx_gateway_owner_account_id'] = obj.data.associatedGateway.ownerAccount;

                    tracked_resources.push({
                        'obj': obj,
                        'logicalId': getResourceName('directconnect', obj.id),
                        'region': obj.region,
                        'service': 'directconnect',
                        'terraformType': 'aws_dx_gateway_association_proposal',
                        'options': reqParams
                    });
                }
            } else if (obj.type == "swf.domain") {
                reqParams.tf['name'] = obj.data.domainInfo.name;
                reqParams.tf['description'] = obj.data.domainInfo.description;
                if (obj.data.configuration) {
                    reqParams.tf['workflow_execution_retention_period_in_days'] = obj.data.configuration.workflowExecutionRetentionPeriodInDays;
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('swf', obj.id),
                    'region': obj.region,
                    'service': 'swf',
                    'terraformType': 'aws_swf_domain',
                    'options': reqParams
                });
            } else if (obj.type == "glue.securityconfiguration") {
                reqParams.cfn['Name'] = obj.data.Name;
                if (obj.data.EncryptionConfiguration) {
                    reqParams.cfn['EncryptionConfiguration'] = {
                        'CloudWatchEncryption': obj.data.CloudWatchEncryption,
                        'JobBookmarksEncryption': obj.data.JobBookmarksEncryption,
                        'S3Encryptions': obj.data.S3Encryption
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('glue', obj.id),
                    'region': obj.region,
                    'service': 'glue',
                    'type': 'AWS::Glue::SecurityConfiguration',
                    'options': reqParams
                });
            } else if (obj.type == "glue.datacatalogencryptionsettings") {
                reqParams.cfn['CatalogId'] = "!Ref \"AWS::AccountId\"";
                if (obj.data.DataCatalogEncryptionSettings) {
                    var connectionpasswordencryption = null;
                    if (obj.data.DataCatalogEncryptionSettings.ConnectionPasswordEncryption) {
                        connectionpasswordencryption = {
                            'ReturnConnectionPasswordEncrypted': obj.data.DataCatalogEncryptionSettings.ConnectionPasswordEncryption.ReturnConnectionPasswordEncrypted,
                            'KmsKeyId': obj.data.DataCatalogEncryptionSettings.ConnectionPasswordEncryption.AwsKmsKeyId
                        };
                    }
                    reqParams.cfn['DataCatalogEncryptionSettings'] = {
                        'EncryptionAtRest': obj.data.DataCatalogEncryptionSettings.EncryptionAtRest,
                        'ConnectionPasswordEncryption': connectionpasswordencryption
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('glue', obj.id),
                    'region': obj.region,
                    'service': 'glue',
                    'type': 'AWS::Glue::DataCatalogEncryptionSettings',
                    'options': reqParams
                });
            } else if (obj.type == "backup.backupvault") {
                reqParams.cfn['BackupVaultName'] = obj.data.BackupVaultName;
                reqParams.tf['name'] = obj.data.BackupVaultName;
                reqParams.cfn['EncryptionKeyArn'] = obj.data.EncryptionKeyArn;
                reqParams.tf['kms_key_arn'] = obj.data.EncryptionKeyArn;
                reqParams.cfn['AccessPolicy'] = obj.data.AccessPolicy;
                reqParams.cfn['Notifications'] = obj.data.Notifications;

                /*
                TODO:
                BackupVaultTags: Json

                tags
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('backup', obj.id),
                    'region': obj.region,
                    'service': 'backup',
                    'type': 'AWS::Backup::BackupVault',
                    'terraformType': 'aws_backup_vault',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.BackupVaultName,
                        'GetAtt': {
                            'BackupVaultName': obj.data.BackupVaultName,
                            'BackupVaultArn': obj.data.BackupVaultArn
                        }
                    }
                });
            } else if (obj.type == "backup.backupplan") {
                var rules = [];
                var tfRules = [];

                if (obj.data.BackupPlan.Rules) {
                    obj.data.BackupPlan.Rules.forEach(rule => {
                        rules.push({
                            'CompletionWindowMinutes': rule.CompletionWindowMinutes,
                            'Lifecycle': rule.Lifecycle,
                            'RecoveryPointTags': rule.RecoveryPointTags,
                            'RuleName': rule.RuleName,
                            'ScheduleExpression': rule.ScheduleExpression,
                            'StartWindowMinutes': rule.StartWindowMinutes,
                            'TargetBackupVault': rule.TargetBackupVaultName,
                        });
                        var tfLifecycle = null;
                        if (rule.Lifecycle) {
                            tfLifecycle = {
                                'cold_storage_after': rule.Lifecycle.MoveToColdStorageAfterDays,
                                'delete_after': rule.Lifecycle.DeleteAfterDays
                            };
                        }
                        tfRules.push({
                            'completion_window': rule.CompletionWindowMinutes,
                            'lifecycle': tfLifecycle,
                            'recovery_point_tags': rule.RecoveryPointTags,
                            'rule_name': rule.RuleName,
                            'schedule': rule.ScheduleExpression,
                            'start_window': rule.StartWindowMinutes,
                            'target_vault_name': rule.TargetBackupVaultName,
                        });
                    });
                }

                reqParams.cfn['BackupPlan'] = {
                    'BackupPlanName': obj.data.BackupPlan.BackupPlanName,
                    'BackupPlanRule': rules
                };

                reqParams.tf['name'] = obj.data.BackupPlan.BackupPlanName;
                reqParams.tf['rule'] = tfRules;
                
                /*
                TODO:
                BackupPlanTags: Json

                tags
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('backup', obj.id),
                    'region': obj.region,
                    'service': 'backup',
                    'type': 'AWS::Backup::BackupPlan',
                    'terraformType': 'aws_backup_plan',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.BackupPlanId,
                        'GetAtt': {
                            'BackupPlanId': obj.data.BackupPlanId,
                            'BackupPlanArn': obj.data.BackupPlanArn,
                            'VersionId': obj.data.VersionId
                        }
                    }
                });
            } else if (obj.type == "backup.backupselection") {
                reqParams.cfn['BackupPlanId'] = obj.data.BackupPlanId;
                reqParams.cfn['BackupSelection'] = obj.data.BackupSelection;

                reqParams.tf['plan_id'] = obj.data.BackupPlanId;
                reqParams.tf['name'] = obj.data.BackupSelection.SelectionName;
                reqParams.tf['resources'] = obj.data.BackupSelection.Resources;
                reqParams.tf['iam_role_arn'] = obj.data.BackupSelection.IamRoleArn;
                if (obj.data.BackupSelection.ListOfTags) {
                    reqParams.tf['selection_tag'] = [];
                    obj.data.BackupSelection.ListOfTags.forEach(tag => {
                        reqParams.tf['selection_tag'].push({
                            'type': tag.ConditionType,
                            'key': tag.ConditionKey,
                            'value': tag.ConditionValue
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('backup', obj.id),
                    'region': obj.region,
                    'service': 'backup',
                    'type': 'AWS::Backup::BackupSelection',
                    'terraformType': 'aws_backup_selection',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.SelectionId,
                        'GetAtt': {
                            'BackupPlanId': obj.data.BackupPlanId,
                            'SelectionId': obj.data.SelectionId
                        }
                    }
                });
            } else if (obj.type == "transfer.server") {
                reqParams.cfn['EndpointType'] = obj.data.EndpointType;
                reqParams.tf['endpoint_type'] = obj.data.EndpointType;
                reqParams.cfn['IdentityProviderType'] = obj.data.IdentityProviderType;
                reqParams.tf['identity_provider_type'] = obj.data.IdentityProviderType;
                reqParams.cfn['LoggingRole'] = obj.data.LoggingRole;
                reqParams.tf['logging_role'] = obj.data.LoggingRole;
                if (obj.data.EndpointDetails) {
                    reqParams.cfn['EndpointDetails'] = {
                        'VpcEndpointId': obj.data.EndpointDetails.VpcEndpointId
                    };
                    reqParams.tf['endpoint_details'] = {
                        'vpc_endpoint_id': obj.data.EndpointDetails.VpcEndpointId
                    };
                }
                if (obj.data.IdentityProviderDetails) {
                    reqParams.cfn['IdentityProviderDetails'] = {
                        'InvocationRole': obj.data.IdentityProviderDetails.InvocationRole,
                        'Url': obj.data.IdentityProviderDetails.Url
                    };
                    reqParams.tf['invocation_role'] = obj.data.IdentityProviderDetails.InvocationRole;
                    reqParams.tf['url'] = obj.data.IdentityProviderDetails.Url;
                }
                reqParams.cfn['Tags'] = obj.data.Tags;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('transfer', obj.id),
                    'region': obj.region,
                    'service': 'transfer',
                    'type': 'AWS::Transfer::Server',
                    'terraformType': 'aws_transfer_server',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.ServerId,
                        'GetAtt': {
                            'Arn': obj.data.Arn,
                            'ServerId': obj.data.ServerId
                        }
                    }
                });
            } else if (obj.type == "transfer.user") {
                reqParams.cfn['ServerId'] = obj.data.ServerId;
                reqParams.tf['server_id'] = obj.data.ServerId;
                reqParams.cfn['HomeDirectory'] = obj.data.User.HomeDirectory;
                reqParams.tf['home_directory'] = obj.data.User.HomeDirectory;
                reqParams.cfn['Policy'] = obj.data.User.Policy;
                reqParams.tf['policy'] = obj.data.User.Policy;
                reqParams.cfn['Role'] = obj.data.User.Role;
                reqParams.tf['role'] = obj.data.User.Role;
                reqParams.cfn['UserName'] = obj.data.User.UserName;
                reqParams.tf['user_name'] = obj.data.User.UserName;
                if (obj.data.User.SshPublicKeys) {
                    reqParams.cfn['SshPublicKeys'] = [];
                    obj.data.User.SshPublicKeys.forEach(sshkey => {
                        reqParams.cfn['SshPublicKeys'].push(sshkey.SshPublicKeyBody);
                    });
                }

                reqParams.cfn['Tags'] = obj.data.User.Tags;
                if (obj.data.User.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.User.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('transfer', obj.id),
                    'region': obj.region,
                    'service': 'transfer',
                    'type': 'AWS::Transfer::User',
                    'terraformType': 'aws_transfer_user',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.Arn,
                        'GetAtt': {
                            'Arn': obj.data.Arn,
                            'ServerId': obj.data.ServerId
                        }
                    }
                });
            } else if (obj.type == "transfer.sshkey") {
                reqParams.tf['server_id'] = obj.data.ServerId;
                reqParams.tf['user_name'] = obj.data.UserName;
                reqParams.tf['body'] = obj.data.Body;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('transfer', obj.id),
                    'region': obj.region,
                    'service': 'transfer',
                    'terraformType': 'aws_transfer_ssh_key',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.geomatchset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['GeoMatchConstraints'] = obj.data.GeoMatchConstraints;
                if (obj.data.GeoMatchConstraints) {
                    reqParams.tf['geo_match_constraint'] = [];
                    obj.data.GeoMatchConstraints.forEach(geomatchconstraint => {
                        reqParams.tf['geo_match_constraint'].push({
                            'type': geomatchconstraint.Type,
                            'value': geomatchconstraint.Value
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::GeoMatchSet',
                    'terraformType': 'aws_wafregional_geo_match_set',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.regexpatternset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['RegexPatternStrings'] = obj.data.RegexPatternStrings;
                reqParams.tf['regex_pattern_strings'] = obj.data.RegexPatternStrings;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::RegexPatternSet',
                    'terraformType': 'aws_wafregional_regex_pattern_set',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.ratebasedrule") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.tf['name'] = obj.data.Name;
                reqParams.cfn['MetricName'] = obj.data.MetricName;
                reqParams.tf['metric_name'] = obj.data.MetricName;
                reqParams.cfn['RateKey'] = obj.data.RateKey;
                reqParams.tf['rate_key'] = obj.data.RateKey;
                reqParams.cfn['RateLimit'] = obj.data.RateLimit;
                reqParams.tf['rate_limit'] = obj.data.RateLimit;
                reqParams.cfn['MatchPredicates'] = [];
                reqParams.tf['predicate'] = [];
                obj.data.MatchPredicates.forEach(matchpredicate => {
                    reqParams.cfn['MatchPredicates'].push({
                        'Negated': matchpredicate.Negated,
                        'Type': matchpredicate.Type,
                        'DataId': matchpredicate.DataId
                    });
                    reqParams.tf['predicate'].push({
                        'negated': matchpredicate.Negated,
                        'type': matchpredicate.Type,
                        'data_id': matchpredicate.DataId
                    });
                });

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::RateBasedRule',
                    'terraformType': 'aws_wafregional_rate_based_rule',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.emailconfigurationset") {
                reqParams.cfn['Name'] = obj.data.ConfigurationSetName;
                if (obj.data.TrackingOptions) {
                    reqParams.cfn['TrackingOptions'] = {
                        'CustomRedirectDomain': obj.data.TrackingOptions.CustomRedirectDomain
                    };
                }
                if (obj.data.DeliveryOptions) {
                    reqParams.cfn['DeliveryOptions'] = {
                        'SendingPoolName': obj.data.DeliveryOptions.SendingPoolName
                    };
                }
                if (obj.data.ReputationOptions) {
                    reqParams.cfn['ReputationOptions'] = {
                        'ReputationMetricsEnabled': obj.data.ReputationOptions.ReputationMetricsEnabled
                    };
                }
                if (obj.data.SendingOptions) {
                    reqParams.cfn['SendingOptions'] = {
                        'SendingEnabled': obj.data.SendingOptions.SendingEnabled
                    };
                }

                /*
                TODO:
                Tags: 
                    - Tags
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::PinpointEmail::ConfigurationSet',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.emailconfigurationseteventdestination") {
                reqParams.cfn['ConfigurationSetName'] = obj.data.ConfigurationSetName;
                reqParams.cfn['EventDestinationName'] = obj.data.Name;
                if (obj.data.MatchingEventTypes && obj.data.MatchingEventTypes.length > 0) {
                    var cloudwatchdestination = null;
                    if (obj.data.CloudWatchDestination) {
                        var dimensionconfigurations = [];
                        obj.data.CloudWatchDestination.DimensionConfigurations.forEach(dimensionconfiguration => {
                            dimensionconfigurations.push({
                                'DimensionName': dimensionconfiguration.DimensionName,
                                'DimensionValueSource': dimensionconfiguration.DimensionValueSource,
                                'DefaultDimensionValue': dimensionconfiguration.DefaultDimensionValue
                            });
                        });
                        cloudwatchdestination = {
                            'DimensionConfigurations': dimensionconfigurations
                        };
                    }
                    var kinesisfirehosedestination = null;
                    if (obj.data.KinesisFirehoseDestination) {
                        kinesisfirehosedestination = {
                            'IamRoleArn': obj.data.KinesisFirehoseDestination.IamRoleArn,
                            'DeliveryStreamArn': obj.data.KinesisFirehoseDestination.DeliveryStreamArn
                        };
                    }
                    var pinpointdestination = null;
                    if (obj.data.PinpointDestination) {
                        pinpointdestination = {
                            'ApplicationArn': obj.data.PinpointDestination.ApplicationArn
                        };
                    }
                    var snsdestination = null;
                    if (obj.data.SnsDestination) {
                        snsdestination = {
                            'TopicArn': obj.data.SnsDestination.TopicArn
                        };
                    }
                    reqParams.cfn['EventDestination'] = {
                        'CloudWatchDestination': cloudwatchdestination,
                        'Enabled': obj.data.Enabled,
                        'KinesisFirehoseDestination': kinesisfirehosedestination,
                        'MatchingEventTypes': obj.data.MatchingEventTypes,
                        'PinpointDestination': pinpointdestination,
                        'SnsDestination': snsdestination
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::PinpointEmail::ConfigurationSetEventDestination',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.emaildedicatedippool") {
                reqParams.cfn['PoolName'] = obj.data.PoolName;

                /*
                TODO:
                Tags: 
                    - Tags
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::PinpointEmail::DedicatedIpPool',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.emailidentity") {
                reqParams.cfn['Name'] = obj.data.Name;
                if (obj.data.DkimAttributes) {
                    reqParams.cfn['DkimSigningEnabled'] = obj.data.DkimAttributes.SigningEnabled;
                }
                reqParams.cfn['FeedbackForwardingEnabled'] = obj.data.FeedbackForwardingStatus;
                if (obj.data.MailFromAttributes) {
                    reqParams.cfn['MailFromAttributes'] = {
                        'BehaviorOnMxFailure': obj.data.MailFromAttributes.BehaviorOnMxFailure,
                        'MailFromDomain': obj.data.MailFromAttributes.MailFromDomain
                    };
                }

                /*
                TODO:
                Tags: 
                    - Tags
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::PinpointEmail::Identity',
                    'options': reqParams
                });
            } else if (obj.type == "licensemanager.licenseconfiguration") {
                reqParams.tf['name'] = obj.data.Name;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.tf['license_counting_type'] = obj.data.LicenseCountingType;
                reqParams.tf['license_rules'] = obj.data.LicenseRules;
                reqParams.tf['license_count'] = obj.data.LicenseCount;
                reqParams.tf['license_count_hard_limit'] = obj.data.LicenseCountHardLimit;
                if (obj.data.Tags) {
                    reqParams.tf['tags'] = {};
                    obj.data.Tags.forEach(tag => {
                        reqParams.tf['tags'][tag['Key']] = tag['Value'];
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('licensemanager', obj.id),
                    'region': obj.region,
                    'service': 'licensemanager',
                    'terraformType': 'aws_licensemanager_license_configuration',
                    'options': reqParams
                });
            } else if (obj.type == "licensemanager.association") {
                reqParams.tf['license_configuration_arn'] = obj.data.LicenseConfigurationArn;
                reqParams.tf['resource_arn'] = obj.data.ResourceArn;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('licensemanager', obj.id),
                    'region': obj.region,
                    'service': 'licensemanager',
                    'terraformType': 'aws_licensemanager_association',
                    'options': reqParams
                });
            } else if (obj.type == "globalaccelerator.accelerator") {
                reqParams.tf['name'] = obj.data.Name;
                reqParams.tf['ip_address_type'] = obj.data.IpAddressType;
                reqParams.tf['enabled'] = obj.data.Enabled;
                if (obj.data.Attributes) {
                    reqParams.tf['attributes'] = {
                        'flow_logs_enabled': obj.data.Attributes.FlowLogsEnabled,
                        'flow_logs_s3_bucket': obj.data.Attributes.FlowLogsS3Bucket,
                        'flow_logs_s3_prefix': obj.data.Attributes.FlowLogsS3Prefix
                    };
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('globalaccelerator', obj.id),
                    'region': obj.region,
                    'service': 'globalaccelerator',
                    'terraformType': 'aws_globalaccelerator_accelerator',
                    'options': reqParams
                });
            } else if (obj.type == "globalaccelerator.listener") {
                reqParams.tf['accelerator_arn'] = obj.data.AcceleratorArn;
                reqParams.tf['client_affinity'] = obj.data.ClientAffinity;
                reqParams.tf['protocol'] = obj.data.Protocol;
                if (obj.data.PortRanges) {
                    reqParams.tf['port_range'] = [];
                    obj.data.PortRanges.forEach(portrange => {
                        reqParams.tf['port_range'].append({
                            'from_port': portrange.FromPort,
                            'to_port': portrange.ToPort
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('globalaccelerator', obj.id),
                    'region': obj.region,
                    'service': 'globalaccelerator',
                    'terraformType': 'aws_globalaccelerator_listener',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.fleet") {
                reqParams.cfn['ExcessCapacityTerminationPolicy'] = obj.data.ExcessCapacityTerminationPolicy;
                reqParams.cfn['ReplaceUnhealthyInstances'] = obj.data.ReplaceUnhealthyInstances;
                reqParams.cfn['TerminateInstancesWithExpiration'] = obj.data.TerminateInstancesWithExpiration;
                reqParams.cfn['Type'] = obj.data.Type;
                reqParams.cfn['ValidFrom'] = obj.data.ValidFrom;
                reqParams.cfn['ValidUntil'] = obj.data.ValidUntil;
                if (obj.data.LaunchTemplateConfigs) {
                    reqParams.cfn['LaunchTemplateConfigs'] = [];
                    obj.data.LaunchTemplateConfigs.forEach(launchtemplateconfig => {
                        var launchtemplatespecification = null;
                        if (launchtemplateconfig.LaunchTemplateSpecification) {
                            launchtemplatespecification = {
                                'LaunchTemplateId': launchtemplateconfig.LaunchTemplateSpecification.LaunchTemplateId,
                                'LaunchTemplateName': launchtemplateconfig.LaunchTemplateSpecification.LaunchTemplateName,
                                'Version': launchtemplateconfig.LaunchTemplateSpecification.Version
                            };
                        }
                        var overrides = null;
                        if (launchtemplateconfig.Overrides) {
                            overrides = [];
                            launchtemplateconfig.Overrides.forEach(override => {
                                overrides.push({
                                    'AvailabilityZone': override.AvailabilityZone,
                                    'InstanceType': override.InstanceType,
                                    'MaxPrice': override.MaxPrice,
                                    'Priority': override.Priority,
                                    'SubnetId': override.SubnetId,
                                    'WeightedCapacity': override.WeightedCapacity
                                });
                            });
                        }
                        reqParams.cfn['LaunchTemplateConfigs'].push({
                            'LaunchTemplateSpecification': launchtemplatespecification,
                            'Overrides': overrides
                        });
                    });
                }
                if (obj.data.TargetCapacitySpecification) {
                    reqParams.cfn['TargetCapacitySpecification'] = {
                        'DefaultTargetCapacityType': obj.data.TargetCapacitySpecification.DefaultTargetCapacityType,
                        'OnDemandTargetCapacity': obj.data.TargetCapacitySpecification.OnDemandTargetCapacity,
                        'SpotTargetCapacity': obj.data.TargetCapacitySpecification.SpotTargetCapacity,
                        'TotalTargetCapacity': obj.data.TargetCapacitySpecification.TotalTargetCapacity
                    };
                }
                if (obj.data.SpotOptions) {
                    reqParams.cfn['SpotOptions'] = {
                        'AllocationStrategy': obj.data.SpotOptions.AllocationStrategy,
                        'InstanceInterruptionBehavior': obj.data.SpotOptions.InstanceInterruptionBehavior,
                        'InstancePoolsToUseCount': obj.data.SpotOptions.InstancePoolsToUseCount
                    };
                }
                if (obj.data.OnDemandOptions) {
                    reqParams.cfn['OnDemandOptions'] = {
                        'AllocationStrategy': obj.data.OnDemandOptions.AllocationStrategy
                    };
                }
                if (obj.data.Tags) {
                    reqParams.cfn['TagSpecifications'] = [{
                        'ResourceType': 'fleet',
                        'Tags': obj.data.Tags
                    }];
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::EC2Fleet',
                    'options': reqParams
                });
            } else if (obj.type == "applicationautoscaling.scalabletarget") {
                reqParams.cfn['MaxCapacity'] = obj.data.MaxCapacity;
                reqParams.cfn['MinCapacity'] = obj.data.MinCapacity;
                reqParams.cfn['ResourceId'] = obj.data.ResourceId;
                reqParams.cfn['RoleARN'] = obj.data.RoleARN;
                reqParams.cfn['ScalableDimension'] = obj.data.ScalableDimension;
                reqParams.cfn['ServiceNamespace'] = obj.data.ServiceNamespace;
                if (obj.data.ScheduledActions) {
                    reqParams.cfn['ScheduledActions'] = [];
                    obj.data.ScheduledActions.forEach(scheduledaction => {
                        var scalabletargetaction = null;
                        if (scheduledaction.ScalableTargetAction) {
                            scalabletargetaction = {
                                'MinCapacity': scheduledaction.ScalableTargetAction.MinCapacity,
                                'MaxCapacity': scheduledaction.ScalableTargetAction.MaxCapacity
                            };
                        }
                        reqParams.cfn['ScheduledActions'].push({
                            'StartTime': scheduledaction.StartTime,
                            'EndTime': scheduledaction.EndTime,
                            'Schedule': scheduledaction.Schedule,
                            'ScheduledActionName': scheduledaction.ScheduledActionName,
                            'ScalableTargetAction': scalabletargetaction,
                        });
                    });
                }

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('applicationautoscaling', obj.id),
                    'region': obj.region,
                    'service': 'applicationautoscaling',
                    'type': 'AWS::ApplicationAutoScaling::ScalableTarget',
                    'options': reqParams
                });
            } else if (obj.type == "applicationautoscaling.scalingpolicy") {
                reqParams.cfn['PolicyName'] = obj.data.PolicyName;
                reqParams.cfn['PolicyType'] = obj.data.PolicyType;
                reqParams.cfn['ResourceId'] = obj.data.ResourceId;
                reqParams.cfn['ScalableDimension'] = obj.data.ScalableDimension;
                reqParams.cfn['ServiceNamespace'] = obj.data.ServiceNamespace;
                if (obj.data.StepScalingPolicyConfiguration) {
                    var stepadjustments = null;
                    if (obj.data.StepScalingPolicyConfiguration.StepAdjustments) {
                        stepadjustments = {
                            'MetricIntervalLowerBound': obj.data.StepScalingPolicyConfiguration.StepAdjustments.MetricIntervalLowerBound,
                            'MetricIntervalUpperBound': obj.data.StepScalingPolicyConfiguration.StepAdjustments.MetricIntervalUpperBound,
                            'ScalingAdjustment': obj.data.StepScalingPolicyConfiguration.StepAdjustments.ScalingAdjustment
                        };
                    }
                    reqParams.cfn['StepScalingPolicyConfiguration'] = {
                        'AdjustmentType': obj.data.StepScalingPolicyConfiguration.AdjustmentType,
                        'Cooldown': obj.data.StepScalingPolicyConfiguration.Cooldown,
                        'MetricAggregationType': obj.data.StepScalingPolicyConfiguration.MetricAggregationType,
                        'MinAdjustmentMagnitude': obj.data.StepScalingPolicyConfiguration.MinAdjustmentMagnitude,
                        'StepAdjustments': stepadjustments
                    };
                }
                if (obj.data.TargetTrackingScalingPolicyConfiguration) {
                    var predefinedmetricspecification = null;
                    if (obj.data.TargetTrackingScalingPolicyConfiguration.PredefinedMetricSpecification) {
                        predefinedmetricspecification = {
                            'PredefinedMetricType': obj.data.TargetTrackingScalingPolicyConfiguration.PredefinedMetricSpecification.PredefinedMetricType,
                            'ResourceLabel': obj.data.TargetTrackingScalingPolicyConfiguration.PredefinedMetricSpecification.ResourceLabel
                        };
                    }
                    var customizedmetricspecification = null;
                    if (obj.data.TargetTrackingScalingPolicyConfiguration.CustomizedMetricSpecification) {
                        var dimensions = null;
                        if (obj.data.TargetTrackingScalingPolicyConfiguration.CustomizedMetricSpecification.Dimensions) {
                            dimensions = [];
                            obj.data.TargetTrackingScalingPolicyConfiguration.CustomizedMetricSpecification.Dimensions.forEach(dimension => {
                                dimensions.push({
                                    'Name': dimension.Name,
                                    'Value': dimension.Value
                                });
                            });
                        }
                        customizedmetricspecification = {
                            'MetricName': obj.data.TargetTrackingScalingPolicyConfiguration.CustomizedMetricSpecification.MetricName,
                            'Namespace': obj.data.TargetTrackingScalingPolicyConfiguration.CustomizedMetricSpecification.Namespace,
                            'Dimensions': dimensions,
                            'Statistic': obj.data.TargetTrackingScalingPolicyConfiguration.CustomizedMetricSpecification.Statistic,
                            'Unit': obj.data.TargetTrackingScalingPolicyConfiguration.CustomizedMetricSpecification.Unit
                        };
                    }
                    reqParams.cfn['TargetTrackingScalingPolicyConfiguration'] = {
                        'CustomizedMetricSpecification': customizedmetricspecification,
                        'DisableScaleIn': obj.data.TargetTrackingScalingPolicyConfiguration.DisableScaleIn,
                        'PredefinedMetricSpecification': predefinedmetricspecification,
                        'ScaleInCooldown': obj.data.TargetTrackingScalingPolicyConfiguration.ScaleInCooldown,
                        'ScaleOutCooldown': obj.data.TargetTrackingScalingPolicyConfiguration.ScaleOutCooldown,
                        'TargetValue': obj.data.TargetTrackingScalingPolicyConfiguration.TargetValue
                    };
                }

                /*
                SKIPPED:
                ScalingTargetId
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('applicationautoscaling', obj.id),
                    'region': obj.region,
                    'service': 'applicationautoscaling',
                    'type': 'AWS::ApplicationAutoScaling::ScalingPolicy',
                    'options': reqParams
                });
            } else if (obj.type == "sagemaker.coderepository") {
                reqParams.cfn['CodeRepositoryName'] = obj.data.CodeRepositoryName;
                reqParams.cfn['Definition'] = {
                    'RepositoryUrl': obj.data.GitConfig.RepositoryUrl,
                    'Branch': obj.data.GitConfig.Branch,
                    'SecretArn': obj.data.GitConfig.SecretArn
                };

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('sagemaker', obj.id),
                    'region': obj.region,
                    'service': 'sagemaker',
                    'type': 'AWS::SageMaker::CodeRepository',
                    'options': reqParams
                });
            } else if (obj.type == "iotthingsgraph.flowtemplate") {
                if (obj.data.definition) {
                    reqParams.cfn['CompatibleNamespaceVersion'] = obj.data.validatedNamespaceVersion;
                    reqParams.cfn['Definition'] = {
                        'Language': obj.data.definition.language,
                        'Text': obj.data.definition.text
                    };

                    tracked_resources.push({
                        'obj': obj,
                        'logicalId': getResourceName('iotthingsgraph', obj.id),
                        'region': obj.region,
                        'service': 'iotthingsgraph',
                        'type': 'AWS::IoTThingsGraph::FlowTemplate',
                        'options': reqParams
                    });
                }
            } else if (obj.type == "pinpoint.app") {
                reqParams.cfn['Name'] = obj.data.Name;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::Pinpoint::App',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.admchannel") {
                reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
                reqParams.cfn['Enabled'] = obj.data.Enabled;

                /*
                TODO:
                ClientId
                ClientSecret
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::Pinpoint::ADMChannel',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.apnschannel") {
                reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
                reqParams.cfn['Enabled'] = obj.data.Enabled;
                reqParams.cfn['DefaultAuthenticationMethod'] = obj.data.DefaultAuthenticationMethod;

                /*
                TODO:
                BundleId: String
                Certificate: String
                PrivateKey: String
                TeamId: String
                TokenKey: String
                TokenKeyId: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::Pinpoint::APNSChannel',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.apnssandboxchannel") {
                reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
                reqParams.cfn['Enabled'] = obj.data.Enabled;
                reqParams.cfn['DefaultAuthenticationMethod'] = obj.data.DefaultAuthenticationMethod;

                /*
                TODO:
                BundleId: String
                Certificate: String
                PrivateKey: String
                TeamId: String
                TokenKey: String
                TokenKeyId: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::Pinpoint::APNSSandboxChannel',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.apnsvoipchannel") {
                reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
                reqParams.cfn['Enabled'] = obj.data.Enabled;
                reqParams.cfn['DefaultAuthenticationMethod'] = obj.data.DefaultAuthenticationMethod;

                /*
                TODO:
                BundleId: String
                Certificate: String
                PrivateKey: String
                TeamId: String
                TokenKey: String
                TokenKeyId: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::Pinpoint::APNSVoipChannel',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.apnsvoipsandboxchannel") {
                reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
                reqParams.cfn['Enabled'] = obj.data.Enabled;
                reqParams.cfn['DefaultAuthenticationMethod'] = obj.data.DefaultAuthenticationMethod;

                /*
                TODO:
                BundleId: String
                Certificate: String
                PrivateKey: String
                TeamId: String
                TokenKey: String
                TokenKeyId: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::Pinpoint::APNSVoipSandboxChannel',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.baiduchannel") {
                reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
                reqParams.cfn['Enabled'] = obj.data.Enabled;

                /*
                TODO:
                ApiKey: String
                SecretKey: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::Pinpoint::BaiduChannel',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.emailchannel") {
                reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
                reqParams.cfn['Enabled'] = obj.data.Enabled;
                reqParams.cfn['FromAddress'] = obj.data.FromAddress;
                reqParams.cfn['Identity'] = obj.data.Identity;
                reqParams.cfn['RoleArn'] = obj.data.RoleArn;
                reqParams.cfn['ConfigurationSet'] = obj.data.ConfigurationSet;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::Pinpoint::EmailChannel',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.gcmchannel") {
                reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
                reqParams.cfn['Enabled'] = obj.data.Enabled;

                /*
                TODO:
                ApiKey: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::Pinpoint::GCMChannel',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.smschannel") {
                reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
                reqParams.cfn['Enabled'] = obj.data.Enabled;
                reqParams.cfn['SenderId'] = obj.data.SenderId;
                reqParams.cfn['ShortCode'] = obj.data.ShortCode;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::Pinpoint::SMSChannel',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.voicechannel") {
                reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
                reqParams.cfn['Enabled'] = obj.data.Enabled;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::Pinpoint::VoiceChannel',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.eventstream") {
                reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
                reqParams.cfn['DestinationStreamArn'] = obj.data.DestinationStreamArn;
                reqParams.cfn['RoleArn'] = obj.data.RoleArn;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::Pinpoint::EventStream',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.applicationsettings") {
                reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
                if (obj.data.CampaignHook) {
                    reqParams.cfn['CampaignHook'] = {
                        'LambdaFunctionName': obj.data.CampaignHook.LambdaFunctionName,
                        'Mode': obj.data.CampaignHook.Mode,
                        'WebUrl': obj.data.CampaignHook.WebUrl
                    };
                }
                if (obj.data.Limits) {
                    reqParams.cfn['Limits'] = {
                        'Daily': obj.data.Limits.Daily,
                        'MaximumDuration': obj.data.Limits.MaximumDuration,
                        'MessagesPerSecond': obj.data.Limits.MessagesPerSecond,
                        'Total': obj.data.Limits.Total
                    };
                }
                if (obj.data.QuietTime) {
                    reqParams.cfn['QuietTime'] = {
                        'Start': obj.data.QuietTime.Start,
                        'End': obj.data.QuietTime.End
                    };
                }
                
                /*
                TODO:
                CloudWatchMetricsEnabled: Boolean
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::Pinpoint::ApplicationSettings',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.campaign") {
                if (obj.data.AdditionalTreatments) {
                    reqParams.cfn['AdditionalTreatments'] = [];
                    obj.data.AdditionalTreatments.forEach(additionaltreatment => {
                        reqParams.cfn['AdditionalTreatments'].push({
                            'MessageConfiguration': additionaltreatment.MessageConfiguration,
                            'Schedule': additionaltreatment.Schedule,
                            'TreatmentDescription': additionaltreatment.TreatmentDescription,
                            'TreatmentName': additionaltreatment.TreatmentName,
                            'SizePercent': additionaltreatment.SizePercent
                        });
                    });
                }
                reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['HoldoutPercent'] = obj.data.HoldoutPercent;
                reqParams.cfn['MessageConfiguration'] = obj.data.MessageConfiguration;
                reqParams.cfn['Schedule'] = obj.data.Schedule;
                reqParams.cfn['TreatmentDescription'] = obj.data.TreatmentDescription;
                reqParams.cfn['TreatmentName'] = obj.data.TreatmentName;
                reqParams.cfn['CampaignHook'] = obj.data.Hook;
                reqParams.cfn['IsPaused'] = obj.data.IsPaused;
                reqParams.cfn['Limits'] = obj.data.Limits;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['SegmentId'] = obj.data.SegmentId;
                reqParams.cfn['SegmentVersion'] = obj.data.SegmentVersion;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::Pinpoint::Campaign',
                    'options': reqParams
                });
            } else if (obj.type == "pinpoint.segment") {
                reqParams.cfn['ApplicationId'] = obj.data.ApplicationId;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Dimensions'] = obj.data.Dimensions;
                reqParams.cfn['SegmentGroups'] = obj.data.SegmentGroups;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('pinpoint', obj.id),
                    'region': obj.region,
                    'service': 'pinpoint',
                    'type': 'AWS::Pinpoint::Segment',
                    'options': reqParams
                });
            } else if (obj.type == "organizations.organization") {
                if (obj.data.EnabledServicePrincipals) {
                    reqParams.tf['aws_service_access_principals'] = [];
                    obj.data.EnabledServicePrincipals.forEach(principal => {
                        reqParams.tf['aws_service_access_principals'].push(principal.ServicePrincipal);
                    });
                }
                if (obj.data.AvailablePolicyTypes) {
                    reqParams.tf['enabled_policy_types'] = [];
                    obj.data.AvailablePolicyTypes.forEach(policytype => {
                        if (policytype.Status == "ENABLED") {
                            reqParams.tf['enabled_policy_types'].push(policytype.Type);
                        }
                    });
                }
                reqParams.tf['feature_set'] = obj.data.FeatureSet;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('organizations', obj.id),
                    'region': obj.region,
                    'service': 'organizations',
                    'terraformType': 'aws_organizations_organization',
                    'options': reqParams
                });
            } else if (obj.type == "organizations.organizationalunit") {
                reqParams.tf['name'] = obj.data.Name;
                reqParams.tf['parent_id'] = obj.data.ParentId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('organizations', obj.id),
                    'region': obj.region,
                    'service': 'organizations',
                    'terraformType': 'aws_organizations_organizational_unit',
                    'options': reqParams
                });
            } else if (obj.type == "organizations.account") {
                reqParams.tf['name'] = obj.data.Name;
                reqParams.tf['email'] = obj.data.Email;

                /*
                TODO:
                iam_user_access_to_billing
                parent_id
                role_name
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('organizations', obj.id),
                    'region': obj.region,
                    'service': 'organizations',
                    'terraformType': 'aws_organizations_account',
                    'options': reqParams
                });
            } else if (obj.type == "organizations.policy") {
                reqParams.tf['content'] = obj.data.Content;
                reqParams.tf['name'] = obj.data.PolicySummary.Name;
                reqParams.tf['description'] = obj.data.PolicySummary.Description;
                reqParams.tf['type'] = obj.data.PolicySummary.Type;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('organizations', obj.id),
                    'region': obj.region,
                    'service': 'organizations',
                    'terraformType': 'aws_organizations_policy',
                    'options': reqParams
                });
            } else if (obj.type == "organizations.policyattachment") {
                reqParams.tf['policy_id'] = obj.data.PolicyId;
                reqParams.tf['target_id'] = obj.data.TargetId;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('organizations', obj.id),
                    'region': obj.region,
                    'service': 'organizations',
                    'terraformType': 'aws_organizations_policy_attachment',
                    'options': reqParams
                });
            } else if (obj.type == "amplify.app") {
                reqParams.cfn['Name'] = obj.data.name;
                if (obj.data.tags) {
                    reqParams.cfn['Tags'] = [];
                    for (var k in obj.data.tags) {
                        reqParams.cfn['Tags'].push({
                            'Key': k,
                            'Value': obj.data.tags[k]
                        });
                    }
                }
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.cfn['Repository'] = obj.data.repository;
                reqParams.cfn['IAMServiceRole'] = obj.data.iamServiceRoleArn;
                if (obj.data.environmentVariables) {
                    reqParams.cfn['EnvironmentVariables'] = [];
                    for (var k in obj.data.environmentVariables) {
                        reqParams.cfn['EnvironmentVariables'].push({
                            'Name': k,
                            'Value': obj.data.environmentVariables[k]
                        });
                    }
                }
                if (obj.data.basicAuthCredentials) {
                    var creds = window.atob(obj.data.basicAuthCredentials.split(" ").pop()).split(":");

                    reqParams.cfn['BasicAuthConfig'] = {
                        'EnableBasicAuth': obj.data.enableBasicAuth,
                        'Username': creds[0],
                        'Password': creds[1]
                    };
                }
                if (obj.data.customRules) {
                    reqParams.cfn['CustomRules'] = [];
                    obj.data.customRules.forEach(customrule => {
                        reqParams.cfn['CustomRules'].push({
                            'Source': customrule.source,
                            'Target': customrule.target,
                            'Condition': customrule.condition,
                            'Status': customrule.status
                        });
                    });
                }
                reqParams.cfn['BuildSpec'] = obj.data.buildSpec;

                /*
                TODO:
                AccessToken: String
                OauthToken: String
                */

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('amplify', obj.id),
                    'region': obj.region,
                    'service': 'amplify',
                    'type': 'AWS::Amplify::App',
                    'options': reqParams
                });
            } else if (obj.type == "amplify.branch") {
                reqParams.cfn['BranchName'] = obj.data.branchName;
                reqParams.cfn['Description'] = obj.data.description;
                if (obj.data.tags) {
                    reqParams.cfn['Tags'] = [];
                    for (var k in obj.data.tags) {
                        reqParams.cfn['Tags'].push({
                            'Key': k,
                            'Value': obj.data.tags[k]
                        });
                    }
                }
                reqParams.cfn['Stage'] = obj.data.stage;
                if (obj.data.environmentVariables) {
                    reqParams.cfn['EnvironmentVariables'] = [];
                    for (var k in obj.data.environmentVariables) {
                        reqParams.cfn['EnvironmentVariables'].push({
                            'Name': k,
                            'Value': obj.data.environmentVariables[k]
                        });
                    }
                }
                if (obj.data.basicAuthCredentials) {
                    var creds = window.atob(obj.data.basicAuthCredentials.split(" ").pop()).split(":");

                    reqParams.cfn['BasicAuthConfig'] = {
                        'EnableBasicAuth': obj.data.enableBasicAuth,
                        'Username': creds[0],
                        'Password': creds[1]
                    };
                }
                reqParams.cfn['AppId'] = obj.data.appId;
                reqParams.cfn['BuildSpec'] = obj.data.buildSpec;

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('amplify', obj.id),
                    'region': obj.region,
                    'service': 'amplify',
                    'type': 'AWS::Amplify::Branch',
                    'options': reqParams
                });
            } else if (obj.type == "amplify.domain") {
                reqParams.cfn['AppId'] = obj.data.appId;
                reqParams.cfn['DomainName'] = obj.data.domainName;
                reqParams.cfn['SubDomainSettings'] = [];
                obj.data.subDomains.forEach(subdomain => {
                    reqParams.cfn['SubDomainSettings'].push({
                        'Prefix': subdomain.subDomainSetting.prefix,
                        'BranchName': subdomain.subDomainSetting.branchName,
                    });
                });

                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('amplify', obj.id),
                    'region': obj.region,
                    'service': 'amplify',
                    'type': 'AWS::Amplify::Domain',
                    'options': reqParams
                });
            } else if (obj.type == "msk.cluster") {
                reqParams.cfn['ClusterName'] = obj.data.ClusterName;
                reqParams.cfn['NumberOfBrokerNodes'] = obj.data.NumberOfBrokerNodes;
                reqParams.cfn['Tags'] = obj.data.Tags;
                reqParams.cfn['EnhancedMonitoring'] = obj.data.EnhancedMonitoring;
                reqParams.cfn['EncryptionInfo'] = obj.data.EncryptionInfo;
                if (obj.data.CurrentBrokerSoftwareInfo) {
                    reqParams.cfn['KafkaVersion'] = obj.data.CurrentBrokerSoftwareInfo.KafkaVersion;
                    reqParams.cfn['ConfigurationInfo'] = {
                        'Arn': obj.data.CurrentBrokerSoftwareInfo.ConfigurationArn,
                        'Revision': obj.data.CurrentBrokerSoftwareInfo.ConfigurationRevision
                    };
                }
                reqParams.cfn['ClientAuthentication'] = obj.data.ClientAuthentication;
                if (obj.data.BrokerNodeGroupInfo) {
                    var storageinfo = null;
                    if (obj.data.BrokerNodeGroupInfo.StorageInfo) {
                        storageinfo = {
                            'EBSStorageInfo': obj.data.BrokerNodeGroupInfo.StorageInfo.EbsStorageInfo
                        };
                    }
                    reqParams.cfn['BrokerNodeGroupInfo'] = {
                        'BrokerAZDistribution': obj.data.BrokerNodeGroupInfo.BrokerAZDistribution,
                        'ClientSubnets': obj.data.BrokerNodeGroupInfo.ClientSubnets,
                        'InstanceType': obj.data.BrokerNodeGroupInfo.InstanceType,
                        'SecurityGroups': obj.data.BrokerNodeGroupInfo.SecurityGroups,
                        'StorageInfo': storageinfo,
                    };
                }
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('msk', obj.id),
                    'region': obj.region,
                    'service': 'msk',
                    'type': 'AWS::MSK::Cluster',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.clientvpnendpoint") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['ClientCidrBlock'] = obj.data.ClientCidrBlock;
                reqParams.cfn['DnsServers'] = obj.data.DnsServers;
                reqParams.cfn['TransportProtocol'] = obj.data.TransportProtocol;
                reqParams.cfn['ServerCertificateArn'] = obj.data.ServerCertificateArn;
                if (obj.data.AuthenticationOptions) {
                    reqParams.cfn['AuthenticationOptions'] = [];
                    obj.data.AuthenticationOptions.forEach(authenticationoptions => {
                        var mutualauthentication = null;
                        if (authenticationoptions.MutualAuthentication) {
                            mutualauthentication = {
                                'ClientRootCertificateChainArn': authenticationoptions.MutualAuthentication.ClientRootCertificateChain
                            }
                        }
                        reqParams.cfn['AuthenticationOptions'].push({
                            'Type': authenticationoptions.Type,
                            'ActiveDirectory': authenticationoptions.ActiveDirectory,
                            'MutualAuthentication': mutualauthentication,
                        });
                    });
                }
                reqParams.cfn['ConnectionLogOptions'] = obj.data.ConnectionLogOptions;
                if (obj.data.Tags) {
                    reqParams.cfn['TagSpecifications'] = [{
                        'ResourceType': 'client-vpn-endpoint',
                        'Tags': obj.data.Tags
                    }];
                }
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::ClientVpnEndpoint',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.clientvpnroute") {
                reqParams.cfn['ClientVpnEndpointId'] = obj.data.ClientVpnEndpointId;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['DestinationCidrBlock'] = obj.data.DestinationCidr;
                reqParams.cfn['TargetVpcSubnetId'] = obj.data.TargetSubnet;
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::ClientVpnRoute',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.clientvpntargetnetworkassociation") {
                reqParams.cfn['ClientVpnEndpointId'] = obj.data.ClientVpnEndpointId;
                reqParams.cfn['SubnetId'] = obj.data.TargetNetworkId;
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::ClientVpnTargetNetworkAssociation',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.clientvpnauthorizationrule") {
                reqParams.cfn['ClientVpnEndpointId'] = obj.data.ClientVpnEndpointId;
                reqParams.cfn['AccessGroupId'] = obj.data.AccessGroupId;
                reqParams.cfn['AuthorizeAllGroups'] = obj.data.AuthorizeAllGroups;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['TargetNetworkCidr'] = obj.data.TargetNetworkCidr;
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::ClientVpnAuthorizationRule',
                    'options': reqParams
                });
            } else if (obj.type == "config.remediationconfiguration") {
                reqParams.cfn['ConfigRuleName'] = obj.data.ConfigRuleName;
                reqParams.cfn['Parameters'] = obj.data.Parameters;
                reqParams.cfn['ResourceType'] = obj.data.ResourceType;
                reqParams.cfn['TargetId'] = obj.data.TargetId;
                reqParams.cfn['TargetType'] = obj.data.TargetType;
                reqParams.cfn['TargetVersion'] = obj.data.TargetVersion;
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('config', obj.id),
                    'region': obj.region,
                    'service': 'config',
                    'type': 'AWS::Config::RemediationConfiguration',
                    'options': reqParams
                });
            } else if (obj.type == "macie.memberaccountassociation") {
                reqParams.tf['member_account_id'] = obj.data.accountId;
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('macie', obj.id),
                    'region': obj.region,
                    'service': 'macie',
                    'terraformType': 'aws_macie_member_account_association',
                    'options': reqParams
                });
            } else if (obj.type == "macie.s3bucketassociation") {
                reqParams.tf['bucket_name'] = obj.data.bucketName;
                reqParams.tf['prefix'] = obj.data.prefix;
                reqParams.tf['classification_type'] = {
                    'continuous': obj.data.classificationType.continuous,
                    'one_time': obj.data.classificationType.oneTime
                };

                /*
                SKIPPED:
                member_account_id
                */
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('macie', obj.id),
                    'region': obj.region,
                    'service': 'macie',
                    'terraformType': 'aws_macie_s3_bucket_association',
                    'options': reqParams
                });
            } else if (obj.type == "securityhub.hub") {
                reqParams.cfn['Tags'] = obj.data.Tags;
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('securityhub', obj.id),
                    'region': obj.region,
                    'service': 'securityhub',
                    'type': 'AWS::SecurityHub::Hub',
                    'terraformType': 'aws_securityhub_account',
                    'options': reqParams
                });
            } else if (obj.type == "medialive.inputsecuritygroup") {
                reqParams.cfn['WhitelistRules'] = obj.data.WhitelistRules;
                reqParams.cfn['Tags'] = obj.data.Tags;
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('medialive', obj.id),
                    'region': obj.region,
                    'service': 'medialive',
                    'type': 'AWS::MediaLive::InputSecurityGroup',
                    'options': reqParams
                });
            } else if (obj.type == "medialive.channel") {
                reqParams.cfn['ChannelClass'] = obj.data.ChannelClass;
                reqParams.cfn['Destinations'] = obj.data.Destinations;
                reqParams.cfn['EncoderSettings'] = obj.data.EncoderSettings;
                reqParams.cfn['InputAttachments'] = obj.data.InputAttachments;
                reqParams.cfn['InputSpecification'] = obj.data.InputSpecification;
                reqParams.cfn['LogLevel'] = obj.data.LogLevel;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['RoleArn'] = obj.data.RoleArn;
                reqParams.cfn['Tags'] = obj.data.Tags;
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('medialive', obj.id),
                    'region': obj.region,
                    'service': 'medialive',
                    'type': 'AWS::MediaLive::Channel',
                    'options': reqParams
                });
            } else if (obj.type == "medialive.input") {
                reqParams.cfn['MediaConnectFlows'] = obj.data.MediaConnectFlows;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['RoleArn'] = obj.data.RoleArn;
                reqParams.cfn['Tags'] = obj.data.Tags;
                reqParams.cfn['Type'] = obj.data.Type;
                reqParams.cfn['Sources'] = obj.data.Sources;
                reqParams.cfn['InputSecurityGroups'] = obj.data.SecurityGroups;

                /*
                TODO:
                Destinations: 
                    - InputDestinationRequest
                Vpc: 
                    InputVpcRequest
                */
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('medialive', obj.id),
                    'region': obj.region,
                    'service': 'medialive',
                    'type': 'AWS::MediaLive::Input',
                    'options': reqParams
                });
            } else if (obj.type == "worklink.fleet") {
                reqParams.tf['name'] = obj.data.FleetName;
                reqParams.tf['display_name'] = obj.data.DisplayName;
                reqParams.tf['optimize_for_end_user_location '] = obj.data.OptimizeForEndUserLocation;

                /*
                TODO:
                network
                identity_provider
                device_ca_certificate
                audit_stream_arn
                */
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('worklink', obj.id),
                    'region': obj.region,
                    'service': 'worklink',
                    'terraformType': 'aws_worklink_fleet',
                    'options': reqParams
                });
            } else if (obj.type == "worklink.websitecertificateauthority") {
                reqParams.tf['fleet_arn'] = obj.data.FleetArn;
                reqParams.tf['certificate'] = obj.data.Certificate;
                reqParams.tf['display_name '] = obj.data.DisplayName;
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('worklink', obj.id),
                    'region': obj.region,
                    'service': 'worklink',
                    'terraformType': 'aws_worklink_website_certificate_authority_association',
                    'options': reqParams
                });
            } else if (obj.type == "cloudwatch.anomalydetector") {
                reqParams.cfn['MetricName'] = obj.data.MetricName;
                reqParams.cfn['Namespace'] = obj.data.Namespace;
                reqParams.cfn['Stat'] = obj.data.Stat;
                if (obj.data.Configuration) {
                    reqParams.cfn['Configuration'] = {
                        'ExcludedTimeRanges': obj.data.Configuration.ExcludedTimeRanges,
                        'MetricTimeZone': obj.data.Configuration.MetricTimezone
                    };
                }
                reqParams.cfn['Dimensions'] = obj.data.Dimensions;
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('cloudwatch', obj.id),
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'type': 'AWS::CloudWatch::AnomalyDetector',
                    'options': reqParams
                });
            } else if (obj.type == "iotevents.detectormodel") {
                var states = [];
                data.detectorModelDefinition.states.forEach(state => {
                    var onenter = null;
                    var onexit = null;
                    var oninput = null;
                    if (state.onInput) {
                        var events = null;
                        var transitionevents = null;
                        if (state.onInput.events) {
                            events = [];
                            state.onInput.events.forEach(event => {
                                var actions = null;
                                if (event.actions) {
                                    actions = [];
                                    event.actions.forEach(action => {
                                        var cleartimer = null;
                                        var firehose = null;
                                        var iotevents = null;
                                        var iottopicpublish = null;
                                        var lambda = null;
                                        var resettimer = null;
                                        var settimer = null;
                                        var setvariable = null;
                                        var sns = null;
                                        var sqs = null;

                                        if (action.setVariable) {
                                            setvariable = {
                                                'VariableName': action.setVariable.variableName,
                                                'Value': action.setVariable.value
                                            };
                                        }
                                        if (action.sns) {
                                            sns = {
                                                'TargetArn': action.sns.targetArn
                                            };
                                        }
                                        if (action.iotTopicPublish) {
                                            iottopicpublish = {
                                                'MqttTopic': action.iotTopicPublish.mqttTopic
                                            };
                                        }
                                        if (action.setTimer) {
                                            settimer = {
                                                'TimerName': action.setTimer.timerName,
                                                'Seconds': action.setTimer.seconds
                                            };
                                        }
                                        if (action.clearTimer) {
                                            cleartimer = {
                                                'TimerName': action.clearTimer.timerName
                                            };
                                        }
                                        if (action.resetTimer) {
                                            resettimer = {
                                                'TimerName': action.resetTimer.timerName
                                            };
                                        }
                                        if (action.lambda) {
                                            lambda = {
                                                'FunctionArn': action.lambda.functionArn
                                            };
                                        }
                                        if (action.iotEvents) {
                                            iotevents = {
                                                'InputName': action.iotEvents.inputName
                                            };
                                        }
                                        if (action.sqs) {
                                            sqs = {
                                                'QueueUrl': action.sqs.queueUrl,
                                                'UseBase64': action.sqs.useBase64
                                            };
                                        }
                                        if (action.firehose) {
                                            firehose = {
                                                'DeliveryStreamName': action.firehose.deliveryStreamName,
                                                'Separator': action.firehose.separator
                                            };
                                        }

                                        actions.push({
                                            'ClearTimer': cleartimer,
                                            'Firehose': firehose,
                                            'IotEvents': iotevents,
                                            'IotTopicPublish': iottopicpublish,
                                            'Lambda': lambda,
                                            'ResetTimer': resettimer,
                                            'SetTimer': settimer,
                                            'SetVariable': setvariable,
                                            'Sns': sns,
                                            'Sqs': sqs
                                        });
                                    });
                                }
                                events.push({
                                    'Actions': actions,
                                    'Condition': event.condition,
                                    'EventName': event.eventName
                                });
                            });
                        }
                        if (state.onInput.transitionEvents) {
                            transitionevents = [];
                            state.onInput.transitionEvents.forEach(event => {
                                var actions = null;
                                if (event.actions) {
                                    actions = [];
                                    event.actions.forEach(action => {
                                        var cleartimer = null;
                                        var firehose = null;
                                        var iotevents = null;
                                        var iottopicpublish = null;
                                        var lambda = null;
                                        var resettimer = null;
                                        var settimer = null;
                                        var setvariable = null;
                                        var sns = null;
                                        var sqs = null;

                                        if (action.setVariable) {
                                            setvariable = {
                                                'VariableName': action.setVariable.variableName,
                                                'Value': action.setVariable.value
                                            };
                                        }
                                        if (action.sns) {
                                            sns = {
                                                'TargetArn': action.sns.targetArn
                                            };
                                        }
                                        if (action.iotTopicPublish) {
                                            iottopicpublish = {
                                                'MqttTopic': action.iotTopicPublish.mqttTopic
                                            };
                                        }
                                        if (action.setTimer) {
                                            settimer = {
                                                'TimerName': action.setTimer.timerName,
                                                'Seconds': action.setTimer.seconds
                                            };
                                        }
                                        if (action.clearTimer) {
                                            cleartimer = {
                                                'TimerName': action.clearTimer.timerName
                                            };
                                        }
                                        if (action.resetTimer) {
                                            resettimer = {
                                                'TimerName': action.resetTimer.timerName
                                            };
                                        }
                                        if (action.lambda) {
                                            lambda = {
                                                'FunctionArn': action.lambda.functionArn
                                            };
                                        }
                                        if (action.iotEvents) {
                                            iotevents = {
                                                'InputName': action.iotEvents.inputName
                                            };
                                        }
                                        if (action.sqs) {
                                            sqs = {
                                                'QueueUrl': action.sqs.queueUrl,
                                                'UseBase64': action.sqs.useBase64
                                            };
                                        }
                                        if (action.firehose) {
                                            firehose = {
                                                'DeliveryStreamName': action.firehose.deliveryStreamName,
                                                'Separator': action.firehose.separator
                                            };
                                        }

                                        actions.push({
                                            'ClearTimer': cleartimer,
                                            'Firehose': firehose,
                                            'IotEvents': iotevents,
                                            'IotTopicPublish': iottopicpublish,
                                            'Lambda': lambda,
                                            'ResetTimer': resettimer,
                                            'SetTimer': settimer,
                                            'SetVariable': setvariable,
                                            'Sns': sns,
                                            'Sqs': sqs
                                        });
                                    });
                                }
                                transitionevents.push({
                                    'Actions': actions,
                                    'Condition': event.condition,
                                    'EventName': event.eventName,
                                    'NextState': nextState
                                });
                            });
                        }
                        oninput = {
                            'Events': events,
                            'TransitionEvents': transitionevents
                        };
                    }
                    if (state.onEnter) {
                        var events = null;
                        if (state.onEnter.events) {
                            events = [];
                            state.onEnter.events.forEach(event => {
                                var actions = null;
                                if (event.actions) {
                                    actions = [];
                                    event.actions.forEach(action => {
                                        var cleartimer = null;
                                        var firehose = null;
                                        var iotevents = null;
                                        var iottopicpublish = null;
                                        var lambda = null;
                                        var resettimer = null;
                                        var settimer = null;
                                        var setvariable = null;
                                        var sns = null;
                                        var sqs = null;

                                        if (action.setVariable) {
                                            setvariable = {
                                                'VariableName': action.setVariable.variableName,
                                                'Value': action.setVariable.value
                                            };
                                        }
                                        if (action.sns) {
                                            sns = {
                                                'TargetArn': action.sns.targetArn
                                            };
                                        }
                                        if (action.iotTopicPublish) {
                                            iottopicpublish = {
                                                'MqttTopic': action.iotTopicPublish.mqttTopic
                                            };
                                        }
                                        if (action.setTimer) {
                                            settimer = {
                                                'TimerName': action.setTimer.timerName,
                                                'Seconds': action.setTimer.seconds
                                            };
                                        }
                                        if (action.clearTimer) {
                                            cleartimer = {
                                                'TimerName': action.clearTimer.timerName
                                            };
                                        }
                                        if (action.resetTimer) {
                                            resettimer = {
                                                'TimerName': action.resetTimer.timerName
                                            };
                                        }
                                        if (action.lambda) {
                                            lambda = {
                                                'FunctionArn': action.lambda.functionArn
                                            };
                                        }
                                        if (action.iotEvents) {
                                            iotevents = {
                                                'InputName': action.iotEvents.inputName
                                            };
                                        }
                                        if (action.sqs) {
                                            sqs = {
                                                'QueueUrl': action.sqs.queueUrl,
                                                'UseBase64': action.sqs.useBase64
                                            };
                                        }
                                        if (action.firehose) {
                                            firehose = {
                                                'DeliveryStreamName': action.firehose.deliveryStreamName,
                                                'Separator': action.firehose.separator
                                            };
                                        }

                                        actions.push({
                                            'ClearTimer': cleartimer,
                                            'Firehose': firehose,
                                            'IotEvents': iotevents,
                                            'IotTopicPublish': iottopicpublish,
                                            'Lambda': lambda,
                                            'ResetTimer': resettimer,
                                            'SetTimer': settimer,
                                            'SetVariable': setvariable,
                                            'Sns': sns,
                                            'Sqs': sqs
                                        });
                                    });
                                }
                                events.push({
                                    'Actions': actions,
                                    'Condition': event.condition,
                                    'EventName': event.eventName
                                });
                            });
                        }
                        onenter = {
                            'Events': events
                        };
                    }
                    if (state.onExit) {
                        var events = null;
                        if (state.onExit.events) {
                            events = [];
                            state.onExit.events.forEach(event => {
                                var actions = null;
                                if (event.actions) {
                                    actions = [];
                                    event.actions.forEach(action => {
                                        var cleartimer = null;
                                        var firehose = null;
                                        var iotevents = null;
                                        var iottopicpublish = null;
                                        var lambda = null;
                                        var resettimer = null;
                                        var settimer = null;
                                        var setvariable = null;
                                        var sns = null;
                                        var sqs = null;

                                        if (action.setVariable) {
                                            setvariable = {
                                                'VariableName': action.setVariable.variableName,
                                                'Value': action.setVariable.value
                                            };
                                        }
                                        if (action.sns) {
                                            sns = {
                                                'TargetArn': action.sns.targetArn
                                            };
                                        }
                                        if (action.iotTopicPublish) {
                                            iottopicpublish = {
                                                'MqttTopic': action.iotTopicPublish.mqttTopic
                                            };
                                        }
                                        if (action.setTimer) {
                                            settimer = {
                                                'TimerName': action.setTimer.timerName,
                                                'Seconds': action.setTimer.seconds
                                            };
                                        }
                                        if (action.clearTimer) {
                                            cleartimer = {
                                                'TimerName': action.clearTimer.timerName
                                            };
                                        }
                                        if (action.resetTimer) {
                                            resettimer = {
                                                'TimerName': action.resetTimer.timerName
                                            };
                                        }
                                        if (action.lambda) {
                                            lambda = {
                                                'FunctionArn': action.lambda.functionArn
                                            };
                                        }
                                        if (action.iotEvents) {
                                            iotevents = {
                                                'InputName': action.iotEvents.inputName
                                            };
                                        }
                                        if (action.sqs) {
                                            sqs = {
                                                'QueueUrl': action.sqs.queueUrl,
                                                'UseBase64': action.sqs.useBase64
                                            };
                                        }
                                        if (action.firehose) {
                                            firehose = {
                                                'DeliveryStreamName': action.firehose.deliveryStreamName,
                                                'Separator': action.firehose.separator
                                            };
                                        }

                                        actions.push({
                                            'ClearTimer': cleartimer,
                                            'Firehose': firehose,
                                            'IotEvents': iotevents,
                                            'IotTopicPublish': iottopicpublish,
                                            'Lambda': lambda,
                                            'ResetTimer': resettimer,
                                            'SetTimer': settimer,
                                            'SetVariable': setvariable,
                                            'Sns': sns,
                                            'Sqs': sqs
                                        });
                                    });
                                }
                                events.push({
                                    'Actions': actions,
                                    'Condition': event.condition,
                                    'EventName': event.eventName
                                });
                            });
                        }
                        onexit = {
                            'Events': events
                        };
                    }
                    states.push({
                        'OnEnter': onenter,
                        'OnExit': onexit,
                        'OnInput': oninput,
                        'StateName': state.stateName
                    });
                });
                reqParams.cfn['DetectorModelDefinition'] = {
                    'InitialStateName': obj.data.detectorModelDefinition.initialStateName,
                    'States': states
                };
                reqParams.cfn['DetectorModelDescription'] = obj.data.detectorModelConfiguration.detectorModelDescription;
                reqParams.cfn['DetectorModelName'] = obj.data.detectorModelConfiguration.detectorModelName;
                reqParams.cfn['Key'] = obj.data.detectorModelConfiguration.key;
                reqParams.cfn['RoleArn'] = obj.data.detectorModelConfiguration.roleArn;

                /*
                TODO:
                Tags
                */
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iotevents', obj.id),
                    'region': obj.region,
                    'service': 'iotevents',
                    'type': 'AWS::IoTEvents::DetectorModel',
                    'options': reqParams
                });
            } else if (obj.type == "iotevents.input") {
                if (obj.data.inputDefinition) {
                    var attributes = [];
                    obj.data.inputDefinition.attributes.forEach(attribute => {
                        attributes.push({
                            'JsonPath': attribute.jsonPath
                        });
                    });
                    reqParams.cfn['InputDefinition'] = {
                        'Attributes': attributes
                    };
                }
                reqParams.cfn['InputDescription'] = obj.data.inputConfiguration.inputDescription;
                reqParams.cfn['InputName'] = obj.data.inputConfiguration.inputName;

                /*
                TODO:
                Tags
                */
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('iotevents', obj.id),
                    'region': obj.region,
                    'service': 'iotevents',
                    'type': 'AWS::IoTEvents::Input',
                    'options': reqParams
                });
            } else if (obj.type == "servicequotas.servicequota") {
                reqParams.tf['quota_code'] = obj.data.QuotaCode;
                reqParams.tf['service_code'] = obj.data.ServiceCode;
                reqParams.tf['value'] = obj.data.DesiredValue;
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('servicequotas', obj.id),
                    'region': obj.region,
                    'service': 'servicequotas',
                    'terraformType': 'aws_servicequotas_service_quota',
                    'options': reqParams
                });
            } else if (obj.type == "quicksight.group") {
                reqParams.tf['group_name'] = obj.data.GroupName;
                reqParams.tf['aws_account_id'] = obj.data.AccountId;
                reqParams.tf['description'] = obj.data.Description;
                reqParams.tf['namespace'] = obj.data.Namespace;
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('quicksight', obj.id),
                    'region': obj.region,
                    'service': 'quicksight',
                    'terraformType': 'aws_quicksight_group',
                    'options': reqParams
                });
            } else if (obj.type == "xray.samplingrule") {
                reqParams.tf['rule_name'] = obj.data.RuleName;
                reqParams.tf['resource_arn'] = obj.data.ResourceARN;
                reqParams.tf['priority'] = obj.data.Priority;
                reqParams.tf['fixed_rate'] = obj.data.FixedRate;
                reqParams.tf['reservoir_size'] = obj.data.ReservoirSize;
                reqParams.tf['service_name'] = obj.data.ServiceName;
                reqParams.tf['service_type'] = obj.data.ServiceType;
                reqParams.tf['host'] = obj.data.Host;
                reqParams.tf['http_method'] = obj.data.HTTPMethod;
                reqParams.tf['url_path'] = obj.data.URLPath;
                reqParams.tf['version'] = obj.data.Version;
                if (Object.keys(obj.data.Attributes).length) {
                    reqParams.tf['attributes'] = obj.data.Attributes;
                }
                
                tracked_resources.push({
                    'obj': obj,
                    'logicalId': getResourceName('xray', obj.id),
                    'region': obj.region,
                    'service': 'xray',
                    'terraformType': 'aws_xray_sampling_rule',
                    'options': reqParams
                });
            } else {
                $.notify({
                    icon: 'font-icon font-icon-warning',
                    title: '<strong>No Mapping Available</strong>',
                    message: 'There is currently no mappings available for the <b>' + obj.type + '</b> type.'
                },{
                    type: 'warning'
                });
                console.log(JSON.stringify(obj));
            }
        } catch(err) {
            $.notify({
                icon: 'font-icon font-icon-danger',
                title: '<strong>Error</strong>',
                message: err.toString()
            },{
                type: 'danger'
            });
            console.trace(err);
        }
    });

    return tracked_resources;
}
