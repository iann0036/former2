/* ========================================================================== */
// Mapping Helper Functions (from AWSConsoleRecorder)
/* ========================================================================== */

var outputs = [];
var tracked_resources = [];
var global_used_refs = [];

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

function getResourceName(service, requestId) {
    var i = 1; // on purpose, 2 means second usage
    var proposed = service.replace(/\-/g, "") + MD5(requestId).substring(0,7);

    while (global_used_refs.includes(proposed)) {
        proposed = service.replace(/\-/g, "") + MD5(requestId + i).substring(0,7);
        i += 1;
    }

    global_used_refs.push(proposed);

    return proposed;
}

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

        return `
` + ' '.repeat(spacing + 2) + "- " + paramitems.join(`
` + ' '.repeat(spacing + 2) + "- ")
    }
    if (typeof param == "object") {
        if (Object.keys(param).length === 0 && param.constructor === Object) {
            return "{}";
        }

        Object.keys(param).forEach(function (key) {
            var subvalue = processCfnParameter(param[key], spacing + 4, index);
            if (typeof subvalue !== "undefined") {
                paramitems.push(key + ": " + subvalue);
            }
        });

        if (paramitems.length < 1) {
            return "{}";
        }

        return `
` + ' '.repeat(spacing + 4) + paramitems.join(`
` + ' '.repeat(spacing + 4))
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
            if (typeof options[option] !== "undefined" && options[option] !== null) {
                var optionvalue = processCfnParameter(options[option], 12, index);

                if (typeof optionvalue !== "undefined") {
                    params += `
            ${option}: ${optionvalue}`;
                }
            }
        }
        params += `
`;
    }

    if (params.trim() == "") {
        output += `    ${logicalId}:${was_blocked ? ' # blocked' : ''}
        Type: "${type}"

`;
    } else {
        output += `    ${logicalId}:${was_blocked ? ' # blocked' : ''}
        Type: "${type}"
        Properties:${params}
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
    Generator: "former2"
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
        compiled['cdkts'] += `
    }
}

const app = new cdk.App();

new MyStack(app, 'my-stack-name', { env: { region: '${tracked_resources[0].region}' } });

app.run();
`;
        compiled['troposphere'] += `print(template.to_yaml())
`;
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
    outputs = [];
    tracked_resources = [];
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
                if (obj.data.Configuration.Environment && obj.data.Configuration.Environment.Variables) {
                    reqParams.cfn['Environment'] = {
                        'Variables': obj.data.Configuration.Environment.Variables
                    };
                }
                reqParams.cfn['FunctionName'] = obj.data.Configuration.FunctionName;
                reqParams.cfn['Handler'] = obj.data.Configuration.Handler;
                reqParams.cfn['KmsKeyArn'] = obj.data.Configuration.KMSKeyArn;
                reqParams.cfn['MemorySize'] = obj.data.Configuration.MemorySize;
                reqParams.cfn['ReservedConcurrentExecutions'] = obj.data.Configuration.ReservedConcurrentExecutions;
                reqParams.cfn['Role'] = obj.data.Configuration.Role;
                reqParams.cfn['Runtime'] = obj.data.Configuration.Runtime;
                reqParams.cfn['Timeout'] = obj.data.Configuration.Timeout;
                reqParams.cfn['TracingConfig'] = obj.data.Configuration.TracingConfig;

                if (obj.data.Configuration.VpcConfig && obj.data.Configuration.VpcConfig.SubnetIds && obj.data.Configuration.VpcConfig.SubnetIds.length > 0) {
                    reqParams.cfn['VpcConfig'] = {
                        'SubnetIds': obj.data.Configuration.VpcConfig.SubnetIds,
                        'SecurityGroupIds': obj.data.Configuration.VpcConfig.SecurityGroupIds
                    };
                }

                if (obj.data.Configuration.DeadLetterConfig) {
                    reqParams.cfn['DeadLetterConfig'] = {
                        'TargetArn': obj.data.Configuration.DeadLetterConfig.TargetArn
                    };
                }

                if (obj.data.Configuration.Layers) {
                    reqParams.cfn['Layers'] = [];
                    obj.data.Configuration.Layers.forEach(layer => {
                        reqParams.cfn['Layers'].push(layer.Arn);
                    });
                }
                
                /*
                TODO:
                Code:
                    Code
                Tags: 
                    Resource Tag
                */

                tracked_resources.push({
                    'logicalId': getResourceName('lambda', obj.id),
                    'region': obj.region,
                    'service': 'lambda',
                    'type': 'AWS::Lambda::Function',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.vpc") {
                reqParams.cfn['CidrBlock'] = obj.data.CidrBlock;
                reqParams.cfn['EnableDnsSupport'] = obj.data.EnableDnsSupport;
                reqParams.cfn['EnableDnsHostnames'] = obj.data.EnableDnsHostnames;
                reqParams.cfn['InstanceTenancy'] = obj.data.InstanceTenancy;
                reqParams.cfn['Tags'] = obj.data.Tags;

                var attrCidrBlockAssociations = [];
                obj.data.CidrBlockAssociationSet.forEach(cidrBlockAssociation => {
                    attrCidrBlockAssociations.push(cidrBlockAssociation.AssociationId);
                });

                var attrIpv6CidrBlockAssociations = [];
                obj.data.Ipv6CidrBlockAssociationSet.forEach(ipv6CidrBlockAssociation => {
                    attrIpv6CidrBlockAssociations.push(ipv6CidrBlockAssociation.Ipv6CidrBlock);
                });

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::VPC',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.VpcId,
                        'GetAtt': {
                            'CidrBlock': obj.data.CidrBlock,
                            'CidrBlockAssociations': attrCidrBlockAssociations,
                            'Ipv6CidrBlocks': attrIpv6CidrBlockAssociations
                        }
                    }
                });
            } else if (obj.type == "s3.bucket") {
                reqParams.cfn['BucketName'] = obj.data.Name;

                /*
                TODO:
                AccessControl: String
                AccelerateConfiguration:
                    AccelerateConfiguration
                AnalyticsConfigurations:
                    - AnalyticsConfiguration
                BucketEncryption: 
                    BucketEncryption
                BucketName: String
                CorsConfiguration:
                    CorsConfiguration
                InventoryConfigurations:
                    - InventoryConfiguration 
                LifecycleConfiguration:
                    LifecycleConfiguration
                LoggingConfiguration:
                    LoggingConfiguration
                MetricsConfigurations: 
                    - MetricsConfiguration
                NotificationConfiguration:
                    NotificationConfiguration
                PublicAccessBlockConfiguration: 
                    PublicAccessBlockConfiguration
                ReplicationConfiguration:
                    ReplicationConfiguration
                Tags:
                    - Resource Tag
                VersioningConfiguration:
                    VersioningConfiguration
                WebsiteConfiguration:
                    WebsiteConfiguration
                */

                tracked_resources.push({
                    'logicalId': getResourceName('s3', obj.id),
                    'region': obj.region,
                    'service': 's3',
                    'type': 'AWS::S3::Bucket',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.internetgateway") {
                reqParams.cfn['Tags'] = obj.data.Tags;

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::InternetGateway',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.dhcpoptions") {
                obj.data.DhcpConfigurations.forEach(dhcpConfiguration => {
                    if (dhcpConfiguration.Key == "domain-name") {
                        reqParams.cfn['DomainName'] = dhcpConfiguration.Values[0].Value;
                    } else if (dhcpConfiguration.Key == "domain-name-servers") {
                        reqParams.cfn['DomainNameServers'] = [];
                        if (dhcpConfiguration.Values[0].Value != "AmazonProvidedDNS") {
                            dhcpConfiguration.Values.forEach(dhcpConfigurationValue => {
                                reqParams.cfn['DomainNameServers'].push(dhcpConfigurationValue['Value']);
                            });
                        }
                    }
                });
                reqParams.cfn['Tags'] = obj.data.Tags;

                /*
                TODO:
                NetbiosNameServers:
                    - String
                NetbiosNodeType: Number
                NtpServers:
                    - String
                */

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::DHCPOptions',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.vpnconnection") {
                reqParams.cfn['Type'] = obj.data.Type;
                if (obj.data.Options) {
                    reqParams.cfn['StaticRoutesOnly'] = obj.data.Options.StaticRoutesOnly;
                }
                reqParams.cfn['CustomerGatewayId'] = obj.data.CustomerGatewayId;
                reqParams.cfn['VpnGatewayId'] = obj.data.VpnGatewayId;
                reqParams.cfn['Tags'] = obj.data.Tags;

                /*
                TODO:
                VpnTunnelOptionsSpecifications: 
                    - VpnTunnelOptionsSpecification
                */

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::VPNConnection',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.peeringconnection") {
                reqParams.cfn['Tags'] = obj.data.Tags;
                reqParams.cfn['PeerVpcId'] = obj.data.AccepterVpcInfo.VpcId;
                reqParams.cfn['PeerOwnerId'] = obj.data.AccepterVpcInfo.OwnerId;
                reqParams.cfn['PeerRegion'] = obj.data.AccepterVpcInfo.Region;
                reqParams.cfn['VpcId'] = obj.data.RequesterVpcInfo.VpcId;

                /*
                TODO:
                PeerRoleArn:  String
                */

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::VPCPeeringConnection',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.routetable") {
                reqParams.cfn['VpcId'] = obj.data.VpcId;
                reqParams.cfn['Tags'] = obj.data.Tags;

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::RouteTable',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.networkacl") {
                reqParams.cfn['VpcId'] = obj.data.VpcId;
                reqParams.cfn['Tags'] = obj.data.Tags;

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::NetworkAcl',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.vpngateway") {
                reqParams.cfn['AmazonSideAsn'] = obj.data.AmazonSideAsn;
                reqParams.cfn['Type'] = obj.data.Type;
                reqParams.cfn['Tags'] = obj.data.Tags;

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::VPNGateway',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.customergateway") {
                reqParams.cfn['BgpAsn'] = obj.data.BgpAsn;
                reqParams.cfn['IpAddress'] = obj.data.IpAddress;
                reqParams.cfn['Type'] = obj.data.Type;
                reqParams.cfn['Tags'] = obj.data.Tags;

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::CustomerGateway',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.subnet") {
                reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
                reqParams.cfn['CidrBlock'] = obj.data.CidrBlock;
                reqParams.cfn['VpcId'] = obj.data.VpcId;
                reqParams.cfn['MapPublicIpOnLaunch'] = obj.data.MapPublicIpOnLaunch;
                reqParams.cfn['AssignIpv6AddressOnCreation'] = obj.data.AssignIpv6AddressOnCreation;
                reqParams.cfn['BucketName'] = obj.data.Name;
                reqParams.cfn['BucketName'] = obj.data.Name;
                reqParams.cfn['BucketName'] = obj.data.Name;

                /* TODO:
                Ipv6CidrBlock: String
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::Subnet',
                    'options': reqParams
                });
            } else if (obj.type == "s3.bucketpolicy") {
                reqParams.cfn['Bucket'] = obj.data.Bucket;
                reqParams.cfn['PolicyDocument'] = JSON.parse(obj.data.Policy);

                tracked_resources.push({
                    'logicalId': getResourceName('s3', obj.id),
                    'region': obj.region,
                    'service': 's3',
                    'type': 'AWS::S3::BucketPolicy',
                    'options': reqParams
                });
            } else if (obj.type == "lambda.alias") {
                reqParams.cfn['Description'] = obj.data.Description;
                var split = obj.data.AliasArn.split(":");
                reqParams.cfn['FunctionName'] = split[split.length - 2];
                reqParams.cfn['FunctionVersion'] = obj.data.FunctionVersion;
                reqParams.cfn['Name'] = obj.data.Name;
                if (obj.data.RoutingConfig && obj.data.RoutingConfig.AdditionalVersionWeights) {
                    reqParams.cfn['RoutingConfig'] = {
                        'AdditionalVersionWeights': []
                    };
                    for (var func_version in obj.data.RoutingConfig.AdditionalVersionWeights) {
                        reqParams.cfn['RoutingConfig']['AdditionalVersionWeights'].push({
                            FunctionVersion: func_version,
                            FunctionWeight: obj.data.RoutingConfig.AdditionalVersionWeights[func_version]
                        });
                    }
                }

                tracked_resources.push({
                    'logicalId': getResourceName('lambda', obj.id),
                    'region': obj.region,
                    'service': 'lambda',
                    'type': 'AWS::Lambda::Alias',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.placementgroup") {
                reqParams.cfn['Strategy'] = obj.data.Strategy;

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::PlacementGroup',
                    'options': reqParams
                });
            } else if (obj.type == "route53.record") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Type'] = obj.data.Type;
                reqParams.cfn['SetIdentifier'] = obj.data.SetIdentifier;
                reqParams.cfn['Weight'] = obj.data.Weight;
                reqParams.cfn['Region'] = obj.data.Region;
                reqParams.cfn['Failover'] = obj.data.Failover;
                reqParams.cfn['MultiValueAnswer'] = obj.data.MultiValueAnswer;
                reqParams.cfn['TTL'] = obj.data.TTL;
                reqParams.cfn['HealthCheckId'] = obj.data.HealthCheckId;
                if (obj.data.ResourceRecords) {
                    reqParams.cfn['ResourceRecords'] = [];
                    obj.data.ResourceRecords.forEach(resourceRecord => {
                        reqParams.cfn['ResourceRecords'].push(resourceRecord['Value']);
                    });
                }
                reqParams.cfn['AliasTarget'] = obj.data.AliasTarget;
                reqParams.cfn['HostedZoneId'] = obj.data.HostedZoneId;
                reqParams.cfn['GeoLocation'] = obj.data.GeoLocation;

                /*
                TODO:
                Comment: String
                */

                tracked_resources.push({
                    'logicalId': getResourceName('route53', obj.id),
                    'region': obj.region,
                    'service': 'route53',
                    'type': 'AWS::Route53::RecordSet',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.Name
                    }
                });
            } else if (obj.type == "route53.hostedzone") {
                reqParams.cfn['Name'] = obj.data.Name;
                if (obj.data.Config && obj.data.Config.Comment) {
                    reqParams.cfn['HostedZoneConfig'] = {
                        'Comment': obj.data.Config.Comment
                    };
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
                    'logicalId': getResourceName('route53', obj.id),
                    'region': obj.region,
                    'service': 'route53',
                    'type': 'AWS::Route53::HostedZone',
                    'options': reqParams,
                    'returnValues': {
                        'Ref': obj.data.Id.split("/").pop()
                    }
                });
            } else if (obj.type == "elbv2.targetgroup") {
                reqParams.cfn['HealthCheckIntervalSeconds'] = obj.data.HealthCheckIntervalSeconds;
                reqParams.cfn['HealthCheckPath'] = obj.data.HealthCheckPath;
                reqParams.cfn['HealthCheckTimeoutSeconds'] = obj.data.HealthCheckTimeoutSeconds;
                reqParams.cfn['UnhealthyThresholdCount'] = obj.data.UnhealthyThresholdCount;
                reqParams.cfn['TargetType'] = obj.data.TargetType;
                reqParams.cfn['Matcher'] = obj.data.Matcher;
                reqParams.cfn['HealthyThresholdCount'] = obj.data.HealthyThresholdCount;
                reqParams.cfn['VpcId'] = obj.data.VpcId;
                reqParams.cfn['Name'] = obj.data.LoadBalancerName;

                /*
                TODO:
                HealthCheckPort: String
                HealthCheckProtocol: String
                Port: Integer
                Protocol: String
                Tags:
                    - Resource Tag
                TargetGroupAttributes:
                    - TargetGroupAttributes
                Targets:
                    - TargetDescription
                */

                tracked_resources.push({
                    'logicalId': getResourceName('elbv2', obj.id),
                    'region': obj.region,
                    'service': 'elbv2',
                    'type': 'AWS::ElasticLoadBalancingV2::TargetGroup',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.volume") {
                reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
                reqParams.cfn['Encrypted'] = obj.data.Encrypted;
                reqParams.cfn['Iops'] = obj.data.Iops;
                reqParams.cfn['Size'] = obj.data.Size;
                reqParams.cfn['VolumeType'] = obj.data.VolumeType;
                reqParams.cfn['SnapshotId'] = obj.data.SnapshotId;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                reqParams.cfn['Tags'] = obj.data.Tags;

                /*
                TODO:
                AutoEnableIO: Boolean
                */

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::Volume',
                    'options': reqParams
                });
            } else if (obj.type == "rds.instance") {
                reqParams.cfn['DBInstanceIdentifier'] = obj.data.DBInstanceIdentifier;
                reqParams.cfn['AllocatedStorage'] = obj.data.AllocatedStorage;
                reqParams.cfn['DBInstanceClass'] = obj.data.DBInstanceClass;
                reqParams.cfn['Engine'] = obj.data.Engine;
                reqParams.cfn['MasterUsername'] = obj.data.MasterUsername;
                reqParams.cfn['DBName'] = obj.data.DBName;
                reqParams.cfn['PreferredBackupWindow'] = obj.data.PreferredBackupWindow;
                reqParams.cfn['BackupRetentionPeriod'] = obj.data.BackupRetentionPeriod;
                reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                reqParams.cfn['MultiAZ'] = obj.data.MultiAZ;
                reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
                reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
                reqParams.cfn['LicenseModel'] = obj.data.LicenseModel;
                reqParams.cfn['Iops'] = obj.data.Iops;
                reqParams.cfn['CharacterSetName'] = obj.data.CharacterSetName;
                reqParams.cfn['PubliclyAccessible'] = obj.data.PubliclyAccessible;
                reqParams.cfn['StorageType'] = obj.data.StorageType;
                reqParams.cfn['Port'] = obj.data.Port;
                reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;
                reqParams.cfn['StorageEncrypted'] = obj.data.StorageEncrypted;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                reqParams.cfn['CopyTagsToSnapshot'] = obj.data.CopyTagsToSnapshot;
                reqParams.cfn['MonitoringInterval'] = obj.data.MonitoringInterval;
                reqParams.cfn['PromotionTier'] = obj.data.PromotionTier;
                reqParams.cfn['Timezone'] = obj.data.Timezone;
                reqParams.cfn['EnableIAMDatabaseAuthentication'] = obj.data.IAMDatabaseAuthenticationEnabled;
                reqParams.cfn['EnablePerformanceInsights'] = obj.data.PerformanceInsightsEnabled;
                reqParams.cfn['PerformanceInsightsKMSKeyId'] = obj.data.PerformanceInsightsKMSKeyId;
                reqParams.cfn['PerformanceInsightsRetentionPeriod'] = obj.data.PerformanceInsightsRetentionPeriod;
                reqParams.cfn['DeletionProtection'] = obj.data.DeletionProtection;
                reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroup.DBSubnetGroupName;
                reqParams.cfn['ProcessorFeatures'] = obj.data.ProcessorFeatures;
                if (obj.data.DBSecurityGroups) {
                    reqParams.cfn['DBSecurityGroups'] = [];
                    obj.data.DBSecurityGroups.forEach(dbSecurityGroup => {
                        reqParams.cfn['DBSecurityGroups'].push(dbSecurityGroup.DBSecurityGroupName);
                    });
                }
                if (obj.data.VpcSecurityGroups) {
                    reqParams.cfn['VPCSecurityGroups'] = [];
                    obj.data.VpcSecurityGroups.forEach(vpcSecurityGroup => {
                        reqParams.cfn['VPCSecurityGroups'].push(vpcSecurityGroup.VpcSecurityGroupId);
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
                    'logicalId': getResourceName('rds', obj.id),
                    'region': obj.region,
                    'service': 'rds',
                    'type': 'AWS::RDS::DBInstance',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.instance") {
                reqParams.cfn['ImageId'] = obj.data.ImageId;
                reqParams.cfn['InstanceType'] = obj.data.InstanceType;
                reqParams.cfn['KernelId'] = obj.data.KernelId;
                reqParams.cfn['KeyName'] = obj.data.KeyName;
                if (obj.data.Placement) {
                    reqParams.cfn['AvailabilityZone'] = obj.data.Placement.AvailabilityZone;
                    reqParams.cfn['Affinity'] = obj.data.Placement.Affinity;
                    reqParams.cfn['PlacementGroupName'] = obj.data.Placement.GroupName;
                    reqParams.cfn['Tenancy'] = obj.data.Placement.Tenancy;
                }
                reqParams.cfn['RamdiskId'] = obj.data.RamdiskId;
                reqParams.cfn['SubnetId'] = obj.data.SubnetId;
                reqParams.cfn['EbsOptimized'] = obj.data.EbsOptimized;
                if (obj.data.SecurityGroups) {
                    reqParams.cfn['SecurityGroups'] = [];
                    obj.data.SecurityGroups.forEach(securityGroup => {
                        reqParams.cfn['SecurityGroups'].push(securityGroup.GroupName);
                    });
                }
                reqParams.cfn['SourceDestCheck'] = obj.data.SourceDestCheck;
                reqParams.cfn['Tags'] = obj.data.Tags;

                /*
                TODO:
                BlockDeviceMappings: 
                    - EC2 Block Device Mapping
                CreditSpecification: CreditSpecification
                DisableApiTermination: Boolean
                ElasticGpuSpecifications: [ ElasticGpuSpecification, ... ]
                ElasticInferenceAccelerators: 
                    - ElasticInferenceAccelerator
                HostId: String
                IamInstanceProfile: String
                InstanceInitiatedShutdownBehavior: String
                Ipv6AddressCount: Integer
                Ipv6Addresses:
                    - IPv6 Address Type
                LaunchTemplate: LaunchTemplateSpecification
                LicenseSpecifications: 
                    - LicenseSpecification
                Monitoring: Boolean
                NetworkInterfaces: 
                    - EC2 Network Interface
                PrivateIpAddress: String
                SecurityGroupIds: 
                    - String
                SsmAssociations: 
                    - SSMAssociation
                UserData: String
                Volumes: 
                    - EC2 MountPoint
                AdditionalInfo: String
                */

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::Instance',
                    'options': reqParams
                });
            } else if (obj.type == "sns.topic") {
                reqParams.cfn['DisplayName'] = obj.data.Attributes.DisplayName;
                reqParams.cfn['TopicName'] = obj.data.Attributes.TopicArn.split(':').pop();

                /*
                TODO:
                KmsMasterKeyId: String
                Subscription:
                    - SNS Subscription
                */

                tracked_resources.push({
                    'logicalId': getResourceName('sns', obj.id),
                    'region': obj.region,
                    'service': 'sns',
                    'type': 'AWS::SNS::Topic',
                    'options': reqParams
                });
            } else if (obj.type == "sns.topicpolicy") {
                reqParams.cfn['PolicyDocument'] = obj.data.Policy;
                reqParams.cfn['Topics'] = [obj.data.Topic];

                tracked_resources.push({
                    'logicalId': getResourceName('sns', obj.id),
                    'region': obj.region,
                    'service': 'sns',
                    'type': 'AWS::SNS::TopicPolicy',
                    'options': reqParams
                });
            } else if (obj.type == "sqs.queue") {
                reqParams.cfn['ContentBasedDeduplication'] = obj.data.Attributes.ContentBasedDeduplication;
                reqParams.cfn['DelaySeconds'] = obj.data.Attributes.DelaySeconds;
                reqParams.cfn['FifoQueue'] = obj.data.Attributes.FifoQueue;
                reqParams.cfn['KmsMasterKeyId'] = obj.data.Attributes.KmsMasterKeyId;
                reqParams.cfn['KmsDataKeyReusePeriodSeconds'] = obj.data.Attributes.KmsDataKeyReusePeriodSeconds;
                reqParams.cfn['MaximumMessageSize'] = obj.data.Attributes.MaximumMessageSize;
                reqParams.cfn['MessageRetentionPeriod'] = obj.data.Attributes.MessageRetentionPeriod;
                reqParams.cfn['ReceiveMessageWaitTimeSeconds'] = obj.data.Attributes.ReceiveMessageWaitTimeSeconds;
                reqParams.cfn['VisibilityTimeout'] = obj.data.Attributes.VisibilityTimeout;
                reqParams.cfn['QueueName'] = obj.data.Attributes.QueueArn.split(":").pop();
                reqParams.cfn['RedrivePolicy'] = obj.data.Attributes.RedrivePolicy;

                /*
                TODO:
                Tags:
                    Resource Tag 
                */

                tracked_resources.push({
                    'logicalId': getResourceName('sqs', obj.id),
                    'region': obj.region,
                    'service': 'sqs',
                    'type': 'AWS::SQS::Queue',
                    'options': reqParams
                });
            } else if (obj.type == "sqs.queuepolicy") {
                reqParams.cfn['PolicyDocument'] = obj.data.Policy;
                reqParams.cfn['Queues'] = [obj.data.Queue];

                tracked_resources.push({
                    'logicalId': getResourceName('sqs', obj.id),
                    'region': obj.region,
                    'service': 'sqs',
                    'type': 'AWS::SQS::QueuePolicy',
                    'options': reqParams
                });
            } else if (obj.type == "elasticbeanstalk.application") {
                reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
                reqParams.cfn['Description'] = obj.data.Description;

                /*
                TODO:
                ResourceLifecycleConfig:
                    ApplicationResourceLifecycleConfig
                */

                tracked_resources.push({
                    'logicalId': getResourceName('elasticbeanstalk', obj.id),
                    'region': obj.region,
                    'service': 'elasticbeanstalk',
                    'type': 'AWS::ElasticBeanstalk::Application',
                    'options': reqParams
                });
            } else if (obj.type == "elasticbeanstalk.applicationversion") {
                reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['SourceBundle'] = obj.data.SourceBundle;

                tracked_resources.push({
                    'logicalId': getResourceName('elasticbeanstalk', obj.id),
                    'region': obj.region,
                    'service': 'elasticbeanstalk',
                    'type': 'AWS::ElasticBeanstalk::ApplicationVersion',
                    'options': reqParams
                });
            } else if (obj.type == "elasticbeanstalk.environment") {
                reqParams.cfn['EnvironmentName'] = obj.data.EnvironmentName;
                reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
                reqParams.cfn['VersionLabel'] = obj.data.VersionLabel;
                reqParams.cfn['SolutionStackName'] = obj.data.SolutionStackName;
                reqParams.cfn['PlatformArn'] = obj.data.PlatformArn;
                reqParams.cfn['TemplateName'] = obj.data.TemplateName;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['Tier'] = obj.data.Tier;
                reqParams.cfn['CNAMEPrefix'] = new URL(obj.data.CNAME).hostname.split(".")[0].split("-").splice(-1, 1).join("-");

                /*
                TODO:
                OptionSettings: 
                    - OptionSetting
                Tags:
                    - Resource Tag, ...
                */

                tracked_resources.push({
                    'logicalId': getResourceName('elasticbeanstalk', obj.id),
                    'region': obj.region,
                    'service': 'elasticbeanstalk',
                    'type': 'AWS::ElasticBeanstalk::Environment',
                    'options': reqParams
                });
            } else if (obj.type == "elasticbeanstalk.configurationtemplate") {
                reqParams.cfn['ApplicationName'] = obj.data.ApplicationName;
                reqParams.cfn['SolutionStackName'] = obj.data.SolutionStackName;
                reqParams.cfn['PlatformArn'] = obj.data.PlatformArn;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['EnvironmentId'] = obj.data.EnvironmentName;
                reqParams.cfn['OptionSettings'] = obj.data.OptionSettings;

                /*
                TODO:
                SourceConfiguration:
                    SourceConfiguration
                */

                tracked_resources.push({
                    'logicalId': getResourceName('elasticbeanstalk', obj.id),
                    'region': obj.region,
                    'service': 'elasticbeanstalk',
                    'type': 'AWS::ElasticBeanstalk::ConfigurationTemplate',
                    'options': reqParams
                });
            } else if (obj.type == "opsworks.stack") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['VpcId'] = obj.data.VpcId;
                reqParams.cfn['ServiceRoleArn'] = obj.data.ServiceRoleArn;
                reqParams.cfn['DefaultInstanceProfileArn'] = obj.data.DefaultInstanceProfileArn;
                reqParams.cfn['DefaultOs'] = obj.data.DefaultOs;
                reqParams.cfn['HostnameTheme'] = obj.data.HostnameTheme;
                reqParams.cfn['DefaultAvailabilityZone'] = obj.data.DefaultAvailabilityZone;
                reqParams.cfn['DefaultSubnetId'] = obj.data.DefaultSubnetId;
                reqParams.cfn['CustomJson'] = obj.data.CustomJson;
                reqParams.cfn['ConfigurationManager'] = obj.data.ConfigurationManager;
                reqParams.cfn['ChefConfiguration'] = obj.data.ChefConfiguration;
                reqParams.cfn['UseCustomCookbooks'] = obj.data.UseCustomCookbooks;
                reqParams.cfn['UseOpsworksSecurityGroups'] = obj.data.UseOpsworksSecurityGroups;
                reqParams.cfn['CustomCookbooksSource'] = obj.data.CustomCookbooksSource;
                reqParams.cfn['DefaultSshKeyName'] = obj.data.DefaultSshKeyName;
                reqParams.cfn['DefaultRootDeviceType'] = obj.data.DefaultRootDeviceType;
                reqParams.cfn['AgentVersion'] = obj.data.AgentVersion;
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
                    'logicalId': getResourceName('opsworks', obj.id),
                    'region': obj.region,
                    'service': 'opsworks',
                    'type': 'AWS::OpsWorks::Stack',
                    'options': reqParams
                });
            } else if (obj.type == "opsworks.app") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Shortname'] = obj.data.Shortname;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['DataSources'] = obj.data.DataSources;
                reqParams.cfn['Type'] = obj.data.Type;
                reqParams.cfn['StackId'] = obj.data.StackId;
                reqParams.cfn['AppSource'] = obj.data.AppSource;
                reqParams.cfn['Domains'] = obj.data.Domains;
                reqParams.cfn['EnableSsl'] = obj.data.EnableSsl;
                reqParams.cfn['SslConfiguration'] = obj.data.SslConfiguration;
                reqParams.cfn['Attributes'] = obj.data.Attributes;
                reqParams.cfn['Environment'] = obj.data.Environment;

                tracked_resources.push({
                    'logicalId': getResourceName('opsworks', obj.id),
                    'region': obj.region,
                    'service': 'opsworks',
                    'type': 'AWS::OpsWorks::App',
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
                    'logicalId': getResourceName('opsworks', obj.id),
                    'region': obj.region,
                    'service': 'opsworks',
                    'type': 'AWS::OpsWorks::ElasticLoadBalancerAttachment',
                    'options': reqParams
                });
            } else if (obj.type == "opsworks.instance") {
                reqParams.cfn['AgentVersion'] = obj.data.AgentVersion;
                reqParams.cfn['AmiId'] = obj.data.AmiId;
                reqParams.cfn['Architecture'] = obj.data.Architecture;
                reqParams.cfn['AutoScalingType'] = obj.data.AutoScalingType;
                reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
                reqParams.cfn['BlockDeviceMappings'] = obj.data.BlockDeviceMappings;
                reqParams.cfn['EbsOptimized'] = obj.data.EbsOptimized;
                if (obj.data.ElasticIp) {
                    reqParams.cfn['ElasticIps'] = [obj.data.ElasticIp];
                }
                reqParams.cfn['Hostname'] = obj.data.Hostname;
                reqParams.cfn['InstallUpdatesOnBoot'] = obj.data.InstallUpdatesOnBoot;
                reqParams.cfn['InstanceType'] = obj.data.InstanceType;
                reqParams.cfn['LayerIds'] = obj.data.LayerIds;
                reqParams.cfn['Os'] = obj.data.Os;
                reqParams.cfn['RootDeviceType'] = obj.data.RootDeviceType;
                reqParams.cfn['SshKeyName'] = obj.data.SshKeyName;
                reqParams.cfn['StackId'] = obj.data.StackId;
                reqParams.cfn['SubnetId'] = obj.data.SubnetId;
                reqParams.cfn['Tenancy'] = obj.data.Tenancy;
                reqParams.cfn['VirtualizationType'] = obj.data.VirtualizationType;

                /*
                TODO:
                TimeBasedAutoScaling:
                    TimeBasedAutoScaling
                Volumes: 
                - String
                */

                tracked_resources.push({
                    'logicalId': getResourceName('opsworks', obj.id),
                    'region': obj.region,
                    'service': 'opsworks',
                    'type': 'AWS::OpsWorks::Instance',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.elasticip") {
                reqParams.cfn['Domain'] = obj.data.Domain;
                reqParams.cfn['InstanceId'] = obj.data.InstanceId;
                reqParams.cfn['PublicIpv4Pool'] = (obj.data.PublicIpv4Pool != "amazon") ? obj.data.PublicIpv4Pool : null;

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::EIP',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.networkinterface") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['Ipv6Addresses'] = obj.data.Ipv6Addresses;
                reqParams.cfn['PrivateIpAddress'] = obj.data.PrivateIpAddress;
                if (obj.data.PrivateIpAddresses) {
                    reqParams.cfn['PrivateIpAddresses'] = [];
                    obj.data.PrivateIpAddresses.forEach(privateIpAddresses => {
                        reqParams.cfn['PrivateIpAddresses'].push({
                            'PrivateIpAddress': privateIpAddresses.PrivateIpAddress,
                            'Primary': privateIpAddresses.Primary
                        });
                    }); 
                }
                reqParams.cfn['SubnetId'] = obj.data.SubnetId;
                reqParams.cfn['SourceDestCheck'] = obj.data.SourceDestCheck;
                reqParams.cfn['Tags'] = obj.data.TagSet;
                if (obj.data.Groups) {
                    reqParams.cfn['GroupSet'] = [];
                    obj.data.Groups.forEach(group => {
                        reqParams.cfn['GroupSet'].push(group.GroupId);
                    }); 
                }

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::NetworkInterface',
                    'options': reqParams
                });
            } else if (obj.type == "redshift.cluster") {
                reqParams.cfn['ClusterIdentifier'] = obj.data.ClusterIdentifier;
                reqParams.cfn['NodeType'] = obj.data.NodeType;
                reqParams.cfn['MasterUsername'] = obj.data.MasterUsername;
                reqParams.cfn['DBName'] = obj.data.DBName;
                reqParams.cfn['Port'] = obj.data.Endpoint.Port;
                reqParams.cfn['AutomatedSnapshotRetentionPeriod'] = obj.data.AutomatedSnapshotRetentionPeriod;
                if (obj.data.ClusterSecurityGroups) {
                    reqParams.cfn['ClusterSecurityGroups'] = [];
                    obj.data.ClusterSecurityGroups.forEach(clusterSecurityGroup => {
                        reqParams.cfn['ClusterSecurityGroups'].push(clusterSecurityGroup['ClusterSecurityGroupName'])
                    });
                }
                if (obj.data.VpcSecurityGroups) {
                    reqParams.cfn['VpcSecurityGroupIds'] = [];
                    obj.data.VpcSecurityGroups.forEach(vpcSecurityGroup => {
                        reqParams.cfn['VpcSecurityGroupIds'].push(vpcSecurityGroup['VpcSecurityGroupId'])
                    });
                }
                reqParams.cfn['ClusterSubnetGroupName'] = obj.data.ClusterSubnetGroupName;
                reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                reqParams.cfn['ClusterVersion'] = obj.data.ClusterVersion;
                reqParams.cfn['AllowVersionUpgrade'] = obj.data.AllowVersionUpgrade;
                reqParams.cfn['NumberOfNodes'] = obj.data.NumberOfNodes;
                reqParams.cfn['PubliclyAccessible'] = obj.data.PubliclyAccessible;
                reqParams.cfn['Encrypted'] = obj.data.Encrypted;
                reqParams.cfn['HsmClientCertificateIdentifier'] = obj.data.HsmStatus.HsmClientCertificateIdentifier;
                reqParams.cfn['HsmConfigurationIdentifier'] = obj.data.HsmStatus.HsmConfigurationIdentifier;
                reqParams.cfn['ElasticIp'] = obj.data.ElasticIpStatus.ElasticIp;
                reqParams.cfn['Tags'] = obj.data.Tags;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                if (obj.data.IamRoles) {
                    reqParams.cfn['IamRoles'] = [];
                    obj.data.IamRoles.forEach(iamRole => {
                        reqParams.cfn['IamRoles'].push(iamRole['IamRoleArn'])
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
                    'logicalId': getResourceName('redshift', obj.id),
                    'region': obj.region,
                    'service': 'redshift',
                    'type': 'AWS::Redshift::Cluster',
                    'options': reqParams
                });
            } else if (obj.type == "redshift.subnetgroup") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['SubnetIds'] = [];
                obj.data.Subnets.forEach(subnet => {
                    reqParams.cfn['SubnetIds'].push(subnet.SubnetIdentifier);
                });
                reqParams.cfn['Tags'] = obj.data.Tags;

                tracked_resources.push({
                    'logicalId': getResourceName('redshift', obj.id),
                    'region': obj.region,
                    'service': 'redshift',
                    'type': 'AWS::Redshift::ClusterSubnetGroup',
                    'options': reqParams
                });
            } else if (obj.type == "redshift.parametergroup") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['ParameterGroupFamily'] = obj.data.ParameterGroupFamily;
                reqParams.cfn['Tags'] = obj.data.Tags;

                /*
                TODO:
                Parameters:
                - Parameter
                */

                tracked_resources.push({
                    'logicalId': getResourceName('redshift', obj.id),
                    'region': obj.region,
                    'service': 'redshift',
                    'type': 'AWS::Redshift::ClusterParameterGroup',
                    'options': reqParams
                });
            } else if (obj.type == "redshift.securitygroup") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['Tags'] = obj.data.Tags;

                tracked_resources.push({
                    'logicalId': getResourceName('redshift', obj.id),
                    'region': obj.region,
                    'service': 'redshift',
                    'type': 'AWS::Redshift::ClusterSecurityGroup',
                    'options': reqParams
                });
            } else if (obj.type == "rds.subnetgroup") {
                reqParams.cfn['DBSubnetGroupDescription'] = obj.data.DBSubnetGroupDescription;
                reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroupName;
                reqParams.cfn['SubnetIds'] = [];
                obj.data.Subnets.forEach(subnet => {
                    reqParams.cfn['SubnetIds'].push(subnet.SubnetIdentifier);
                });
                reqParams.cfn['Tags'] = obj.data.Tags;

                tracked_resources.push({
                    'logicalId': getResourceName('rds', obj.id),
                    'region': obj.region,
                    'service': 'rds',
                    'type': 'AWS::RDS::DBSubnetGroup',
                    'options': reqParams
                });
            } else if (obj.type == "rds.parametergroup") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['Family'] = obj.data.DBParameterGroupFamily;

                /*
                TODO:
                Parameters:
                - Parameter
                Tags:
                - Tag
                */

                tracked_resources.push({
                    'logicalId': getResourceName('rds', obj.id),
                    'region': obj.region,
                    'service': 'rds',
                    'type': 'AWS::RDS::DBParameterGroup',
                    'options': reqParams
                });
            } else if (obj.type == "rds.securitygroup") {
                reqParams.cfn['GroupDescription'] = obj.data.DBSecurityGroupDescription;
                reqParams.cfn['EC2VpcId'] = obj.data.VpcId;

                /*
                TODO:
                DBSecurityGroupIngress:
                    - RDS Security Group Rule
                Tags:
                    - Resource Tag 
                */

                tracked_resources.push({
                    'logicalId': getResourceName('rds', obj.id),
                    'region': obj.region,
                    'service': 'rds',
                    'type': 'AWS::RDS::DBSecurityGroup',
                    'options': reqParams
                });
            } else if (obj.type == "elasticache.subnetgroup") {
                reqParams.cfn['Description'] = obj.data.CacheSubnetGroupDescription;
                reqParams.cfn['CacheSubnetGroupName'] = obj.data.CacheSubnetGroupName;
                reqParams.cfn['SubnetIds'] = [];
                obj.data.Subnets.forEach(subnet => {
                    reqParams.cfn['SubnetIds'].push(subnet.SubnetIdentifier);
                });

                tracked_resources.push({
                    'logicalId': getResourceName('elasticache', obj.id),
                    'region': obj.region,
                    'service': 'elasticache',
                    'type': 'AWS::ElastiCache::SubnetGroup',
                    'options': reqParams
                });
            } else if (obj.type == "elasticache.parametergroup") {
                reqParams.cfn['CacheParameterGroupFamily'] = obj.data.CacheParameterGroupFamily;
                reqParams.cfn['Description'] = obj.data.Description;
                
                /*
                TODO:
                Properties
                */

                tracked_resources.push({
                    'logicalId': getResourceName('elasticache', obj.id),
                    'region': obj.region,
                    'service': 'elasticache',
                    'type': 'AWS::ElastiCache::ParameterGroup',
                    'options': reqParams
                });
            } else if (obj.type == "elasticache.securitygroup") {
                reqParams.cfn['Description'] = obj.data.Description;

                tracked_resources.push({
                    'logicalId': getResourceName('elasticache', obj.id),
                    'region': obj.region,
                    'service': 'elasticache',
                    'type': 'AWS::ElastiCache::SecurityGroup',
                    'options': reqParams
                });
            } else if (obj.type == "cloudfront.distribution") {
                reqParams.cfn['DistributionConfig'] = {};
                reqParams.cfn.DistributionConfig['Aliases'] = obj.data.Aliases.Items;
                reqParams.cfn.DistributionConfig['Origins'] = [];
                obj.data.Origins.Items.forEach(origin => {
                    var customOriginConfig = null;
                    var customHeaders = null;
                    if (origin.CustomOriginConfig) {
                        customOriginConfig = {
                            'HTTPPort': origin.CustomOriginConfig.HTTPPort,
                            'HTTPSPort': origin.CustomOriginConfig.HTTPSPort,
                            'OriginKeepaliveTimeout': origin.CustomOriginConfig.OriginKeepaliveTimeout,
                            'OriginProtocolPolicy': origin.CustomOriginConfig.OriginProtocolPolicy,
                            'OriginReadTimeout': origin.CustomOriginConfig.OriginReadTimeout,
                            'OriginSSLProtocols': origin.CustomOriginConfig.OriginSslProtocols.Items
                        };
                    }
                    if (origin.CustomHeaders) {
                        customHeaders = origin.CustomHeaders.Items;
                    }
                    reqParams.cfn.DistributionConfig['Origins'].push({
                        'CustomOriginConfig': customOriginConfig,
                        'DomainName': origin.DomainName,
                        'Id': origin.Id,
                        'OriginCustomHeaders': customHeaders,
                        'OriginPath': origin.OriginPath,
                        'S3OriginConfig': origin.S3OriginConfig
                    });
                });
                var defaultCacheLambdaFunctionAssociations = [];
                if (obj.data.DefaultCacheBehavior.LambdaFunctionAssociations.Items && obj.data.DefaultCacheBehavior.LambdaFunctionAssociations.Items.length) {
                    obj.data.DefaultCacheBehavior.LambdaFunctionAssociations.Items.forEach(lambdaFunctionAssociation => {
                        defaultCacheLambdaFunctionAssociations.push({
                            'EventType': lambdaFunctionAssociation.EventType,
                            'LambdaFunctionARN': lambdaFunctionAssociation.LambdaFunctionARN
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
                    'FieldLevelEncryptionId': obj.data.DefaultCacheBehavior.FieldLevelEncryptionId,
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
                if (obj.data.CacheBehaviors.Items && obj.data.CacheBehaviors.Items.length) {
                    reqParams.cfn.DistributionConfig['CacheBehaviors'] = [];
                    obj.data.CacheBehaviors.Items.forEach(cacheBehaviour => {
                        var cacheLambdaFunctionAssociations = [];
                        if (cacheBehaviour.LambdaFunctionAssociations.Items && cacheBehaviour.LambdaFunctionAssociations.Items.length) {
                            cacheBehaviour.LambdaFunctionAssociations.Items.forEach(lambdaFunctionAssociation => {
                                cacheLambdaFunctionAssociations.push({
                                    'EventType': lambdaFunctionAssociation.EventType,
                                    'LambdaFunctionARN': lambdaFunctionAssociation.LambdaFunctionARN
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
                            'FieldLevelEncryptionId': cacheBehaviour.FieldLevelEncryptionId,
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
                    });
                }
                reqParams.cfn.DistributionConfig['CustomErrorResponses'] = obj.data.CustomErrorResponses.Items;
                reqParams.cfn.DistributionConfig['Comment'] = obj.data.Comment;
                reqParams.cfn.DistributionConfig['PriceClass'] = obj.data.PriceClass;
                reqParams.cfn.DistributionConfig['Enabled'] = obj.data.Enabled;
                reqParams.cfn.DistributionConfig['ViewerCertificate'] = {
                    'AcmCertificateArn': obj.data.ViewerCertificate.ACMCertificateArn,
                    'CloudFrontDefaultCertificate': obj.data.ViewerCertificate.CloudFrontDefaultCertificate,
                    'IamCertificateId': obj.data.ViewerCertificate.IAMCertificateId,
                    'MinimumProtocolVersion': obj.data.ViewerCertificate.MinimumProtocolVersion,
                    'SslSupportMethod': obj.data.ViewerCertificate.SSLSupportMethod
                };
                reqParams.cfn.DistributionConfig['Restrictions'] = {
                    'GeoRestriction': {
                        'RestrictionType': obj.data.Restrictions.GeoRestriction.RestrictionType,
                        'Locations': obj.data.Restrictions.GeoRestriction.Items
                    }
                };
                reqParams.cfn.DistributionConfig['WebACLId'] = obj.data.WebACLId;
                reqParams.cfn.DistributionConfig['HttpVersion'] = obj.data.HttpVersion;
                reqParams.cfn.DistributionConfig['IPV6Enabled'] = obj.data.IsIPV6Enabled;

                /*
                TODO:
                DistributionConfig:
                    DefaultRootObject: String
                    Logging:
                    Logging
                    Origins:
                    - Origin
                Tags
                */

                tracked_resources.push({
                    'logicalId': getResourceName('cloudfront', obj.id),
                    'region': obj.region,
                    'service': 'cloudfront',
                    'type': 'AWS::CloudFront::Distribution',
                    'options': reqParams
                });
            } else if (obj.type == "kinesis.stream") {
                reqParams.cfn['Name'] = obj.data.StreamName;
                reqParams.cfn['RetentionPeriodHours'] = obj.data.RetentionPeriodHours;
                reqParams.cfn['StreamEncryption'] = {
                    'EncryptionType': obj.data.EncryptionType,
                    'KeyId': obj.data.KeyId
                };
                reqParams.cfn['ShardCount'] = obj.data.Shards.length;

                /*
                TODO:
                Tags:
                    - Resource Tag 
                */

                tracked_resources.push({
                    'logicalId': getResourceName('kinesis', obj.id),
                    'region': obj.region,
                    'service': 'kinesis',
                    'type': 'AWS::Kinesis::Stream',
                    'options': reqParams
                });
            } else if (obj.type == "elasticache.cluster") {
                reqParams.cfn['CacheNodeType'] = obj.data.CacheNodeType;
                reqParams.cfn['Engine'] = obj.data.Engine;
                reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
                reqParams.cfn['NumCacheNodes'] = obj.data.NumCacheNodes;
                reqParams.cfn['PreferredAvailabilityZone'] = obj.data.PreferredAvailabilityZone;
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                reqParams.cfn['NotificationTopicArn'] = obj.data.NotificationConfiguration.TopicArn;
                if (obj.data.CacheSecurityGroups) {
                    reqParams.cfn['CacheSecurityGroupNames'] = [];
                    obj.data.CacheSecurityGroups.forEach(securityGroup => {
                        reqParams.cfn['CacheSecurityGroupNames'].push(securityGroup.CacheSecurityGroupName)
                    });
                }
                reqParams.cfn['CacheParameterGroupName'] = obj.data.CacheParameterGroup.CacheParameterGroupName;
                reqParams.cfn['CacheSubnetGroupName'] = obj.data.CacheSubnetGroupName;
                reqParams.cfn['Port'] = obj.data.CacheNodes[0].Endpoint.Port;
                reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
                if (obj.data.SecurityGroups) {
                    reqParams.cfn['VpcSecurityGroupIds'] = [];
                    obj.data.SecurityGroups.forEach(securityGroup => {
                        reqParams.cfn['VpcSecurityGroupIds'].push(securityGroup.SecurityGroupId)
                    });
                }
                reqParams.cfn['SnapshotRetentionLimit'] = obj.data.SnapshotRetentionLimit;
                reqParams.cfn['SnapshotWindow'] = obj.data.SnapshotWindow;
                reqParams.cfn['ClusterName'] = obj.data.CacheClusterId;
                
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
                    'logicalId': getResourceName('elasticache', obj.id),
                    'region': obj.region,
                    'service': 'elasticache',
                    'type': 'AWS::ElastiCache::CacheCluster',
                    'options': reqParams
                });
            } else if (obj.type == "dynamodb.table") {
                reqParams.cfn['AttributeDefinitions'] = obj.data.AttributeDefinitions;
                reqParams.cfn['BillingMode'] = obj.data.BillingModeSummary.BillingMode;
                reqParams.cfn['TableName'] = obj.data.TableName;
                reqParams.cfn['KeySchema'] = obj.data.KeySchema;
                if (obj.data.ProvisionedThroughput && obj.data.ProvisionedThroughput.ReadCapacityUnits > 0) {
                    reqParams.cfn['ProvisionedThroughput'] = {
                        'ReadCapacityUnits': obj.data.ProvisionedThroughput.ReadCapacityUnits,
                        'WriteCapacityUnits': obj.data.ProvisionedThroughput.WriteCapacityUnits
                    };
                }
                if (obj.data.LocalSecondaryIndexes) {
                    reqParams.cfn['LocalSecondaryIndexes'] = [];
                    obj.data.LocalSecondaryIndexes.forEach(index => {
                        reqParams.cfn['LocalSecondaryIndexes'].push({
                            'IndexName': index.IndexName,
                            'KeySchema': index.KeySchema,
                            'Projection': index.Projection
                        });
                    });
                }
                if (obj.data.GlobalSecondaryIndexes) {
                    reqParams.cfn['GlobalSecondaryIndexes'] = [];
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
                    });
                }
                if (obj.data.StreamSpecification) {
                    reqParams.cfn['StreamSpecification'] = {
                        'StreamViewType': obj.data.StreamSpecification.StreamViewType
                    };
                }
                if (obj.data.SSEDescription) {
                    reqParams.cfn['SSESpecification'] = {
                        'SSEEnabled': (obj.data.SSEDescription.Status[0] == "E")
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
                    'logicalId': getResourceName('dynamodb', obj.id),
                    'region': obj.region,
                    'service': 'dynamodb',
                    'type': 'AWS::DynamoDB::Table',
                    'options': reqParams
                });
            } else if (obj.type == "cloudtrail.trail") {
                reqParams.cfn['TrailName'] = obj.data.Name;
                reqParams.cfn['S3BucketName'] = obj.data.S3BucketName;
                reqParams.cfn['S3KeyPrefix'] = obj.data.S3KeyPrefix;
                if (obj.data.SnsTopicARN) {
                    reqParams.cfn['SnsTopicName'] = obj.data.SnsTopicARN.split(":").pop();
                }
                reqParams.cfn['IncludeGlobalServiceEvents'] = obj.data.IncludeGlobalServiceEvents;
                reqParams.cfn['IsMultiRegionTrail'] = obj.data.IsMultiRegionTrail;
                reqParams.cfn['EnableLogFileValidation'] = obj.data.LogFileValidationEnabled;
                reqParams.cfn['CloudWatchLogsLogGroupArn'] = obj.data.CloudWatchLogsLogGroupArn;
                reqParams.cfn['CloudWatchLogsRoleArn'] = obj.data.CloudWatchLogsRoleArn;
                reqParams.cfn['KMSKeyId'] = obj.data.KmsKeyId;
                
                /*
                TODO:
                EventSelectors:
                    - EventSelector
                IsLogging: Boolean
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'logicalId': getResourceName('cloudtrail', obj.id),
                    'region': obj.region,
                    'service': 'cloudtrail',
                    'type': 'AWS::CloudTrail::Trail',
                    'options': reqParams
                });
            } else if (obj.type == "autoscaling.policy") {
                reqParams.cfn['AutoScalingGroupName'] = obj.data.AutoScalingGroupName;
                reqParams.cfn['PolicyType'] = obj.data.PolicyType;
                reqParams.cfn['AdjustmentType'] = obj.data.AdjustmentType;
                reqParams.cfn['MinAdjustmentMagnitude'] = obj.data.MinAdjustmentMagnitude;
                reqParams.cfn['ScalingAdjustment'] = obj.data.ScalingAdjustment;
                reqParams.cfn['Cooldown'] = obj.data.Cooldown;
                reqParams.cfn['StepAdjustments'] = obj.data.StepAdjustments;
                reqParams.cfn['MetricAggregationType'] = obj.data.MetricAggregationType;
                reqParams.cfn['EstimatedInstanceWarmup'] = obj.data.EstimatedInstanceWarmup;
                reqParams.cfn['TargetTrackingConfiguration'] = obj.data.TargetTrackingConfiguration;

                tracked_resources.push({
                    'logicalId': getResourceName('autoscaling', obj.id),
                    'region': obj.region,
                    'service': 'autoscaling',
                    'type': 'AWS::AutoScaling::ScalingPolicy',
                    'options': reqParams
                });
            } else if (obj.type == "autoscaling.scheduledaction") {
                reqParams.cfn['AutoScalingGroupName'] = obj.data.AutoScalingGroupName;
                reqParams.cfn['StartTime'] = obj.data.StartTime.toISOString();
                reqParams.cfn['EndTime'] = obj.data.EndTime.toISOString();
                reqParams.cfn['Recurrence'] = obj.data.Recurrence;
                reqParams.cfn['MaxSize'] = obj.data.MaxSize;
                reqParams.cfn['MinSize'] = obj.data.MinSize;
                reqParams.cfn['DesiredCapacity'] = obj.data.DesiredCapacity;

                tracked_resources.push({
                    'logicalId': getResourceName('autoscaling', obj.id),
                    'region': obj.region,
                    'service': 'autoscaling',
                    'type': 'AWS::AutoScaling::ScheduledAction',
                    'options': reqParams
                });
            } else if (obj.type == "autoscaling.autoscalinggroup") {
                reqParams.cfn['AutoScalingGroupName'] = obj.data.AutoScalingGroupName;
                reqParams.cfn['LaunchConfigurationName'] = obj.data.LaunchConfigurationName;
                reqParams.cfn['LaunchTemplate'] = obj.data.LaunchTemplate;
                reqParams.cfn['MixedInstancesPolicy'] = obj.data.MixedInstancesPolicy;
                reqParams.cfn['MinSize'] = obj.data.MinSize;
                reqParams.cfn['MaxSize'] = obj.data.MaxSize;
                reqParams.cfn['DesiredCapacity'] = obj.data.DesiredCapacity;
                reqParams.cfn['Cooldown'] = obj.data.DefaultCooldown;
                reqParams.cfn['AvailabilityZones'] = obj.data.AvailabilityZones;
                reqParams.cfn['LoadBalancerNames'] = obj.data.LoadBalancerNames;
                reqParams.cfn['TargetGroupARNs'] = obj.data.TargetGroupARNs;
                reqParams.cfn['HealthCheckType'] = obj.data.HealthCheckType;
                reqParams.cfn['HealthCheckGracePeriod'] = obj.data.HealthCheckGracePeriod;
                reqParams.cfn['PlacementGroup'] = obj.data.PlacementGroup;
                reqParams.cfn['VPCZoneIdentifier'] = obj.data.VPCZoneIdentifier.split(",");
                if (obj.data.EnabledMetrics) {
                    reqParams.cfn['MetricsCollection'] = {
                        'Granularity': obj.data.EnabledMetrics[0].Granularity,
                        'Metrics': []
                    };
                    obj.data.EnabledMetrics.forEach(metric => {
                        reqParams.cfn.MetricsCollection.Metrics.push(metric.Metric);
                    });
                }
                if (obj.data.Tags) {
                    reqParams.cfn['Tags'] = [];
                    obj.data.Tags.forEach(tag => {
                        reqParams.cfn['Tags'].push({
                            'Key': tag.Key,
                            'Value': tag.Value,
                            'PropagateAtLaunch': tag.PropagateAtLaunch
                        });
                    });
                }
                reqParams.cfn['TerminationPolicies'] = obj.data.TerminationPolicies;
                reqParams.cfn['ServiceLinkedRoleARN'] = obj.data.ServiceLinkedRoleARN;
                
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
                    'logicalId': getResourceName('autoscaling', obj.id),
                    'region': obj.region,
                    'service': 'autoscaling',
                    'type': 'AWS::AutoScaling::AutoScalingGroup',
                    'options': reqParams
                });
            } else if (obj.type == "autoscaling.launchconfiguration") {
                reqParams.cfn['LaunchConfigurationName'] = obj.data.LaunchConfigurationName;
                reqParams.cfn['ImageId'] = obj.data.ImageId;
                reqParams.cfn['KeyName'] = obj.data.KeyName;
                reqParams.cfn['SecurityGroups'] = obj.data.SecurityGroups;
                reqParams.cfn['ClassicLinkVPCId'] = obj.data.ClassicLinkVPCId;
                reqParams.cfn['ClassicLinkVPCSecurityGroups'] = obj.data.ClassicLinkVPCSecurityGroups;
                reqParams.cfn['UserData'] = (obj.data.UserData != "") ? obj.data.UserData : null;
                reqParams.cfn['InstanceType'] = obj.data.InstanceType;
                reqParams.cfn['KernelId'] = (obj.data.KernelId != "") ? obj.data.KernelId : null;
                reqParams.cfn['RamDiskId'] = (obj.data.RamdiskId != "") ? obj.data.RamdiskId : null;
                reqParams.cfn['BlockDeviceMappings'] = obj.data.BlockDeviceMappings;
                reqParams.cfn['InstanceMonitoring'] = obj.data.InstanceMonitoring.Enabled;
                reqParams.cfn['SpotPrice'] = obj.data.SpotPrice;
                reqParams.cfn['IamInstanceProfile'] = obj.data.IamInstanceProfile;
                reqParams.cfn['EbsOptimized'] = obj.data.EbsOptimized;
                reqParams.cfn['AssociatePublicIpAddress'] = obj.data.AssociatePublicIpAddress;
                reqParams.cfn['PlacementTenancy'] = obj.data.PlacementTenancy;
                
                /*
                TODO:
                InstanceId: String
                */

                tracked_resources.push({
                    'logicalId': getResourceName('autoscaling', obj.id),
                    'region': obj.region,
                    'service': 'autoscaling',
                    'type': 'AWS::AutoScaling::LaunchConfiguration',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.securitygroup") {
                reqParams.cfn['GroupDescription'] = obj.data.Description;
                reqParams.cfn['GroupName'] = obj.data.GroupName;
                reqParams.cfn['Tags'] = obj.data.Tags;
                reqParams.cfn['VpcId'] = obj.data.VpcId;
                
                /*
                TODO:
                SecurityGroupEgress:
                    - Security Group Rule // its in the request, check to see if use this with SecurityGroup*gress
                SecurityGroupIngress:
                    - Security Group Rule
                */

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::SecurityGroup',
                    'options': reqParams
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

                /*
                TODO:
                HealthCheckTags:
                    - HealthCheckTags 
                */

                tracked_resources.push({
                    'logicalId': getResourceName('route53', obj.id),
                    'region': obj.region,
                    'service': 'route53',
                    'type': 'AWS::Route53::HealthCheck',
                    'options': reqParams
                });
            } else if (obj.type == "elb.loadbalancer") {
                reqParams.cfn['LoadBalancerName'] = obj.data.LoadBalancerName;
                if (obj.data.ListenerDescriptions) {
                    reqParams.cfn['Listeners'] = [];
                    obj.data.ListenerDescriptions.forEach(listener => {
                        reqParams.cfn['Listeners'].push({
                            'InstancePort': listener.Listener.InstanceProtocol,
                            'InstanceProtocol': listener.Listener.InstancePort,
                            'LoadBalancerPort': listener.Listener.LoadBalancerPort,
                            'PolicyNames': listener.PolicyNames,
                            'Protocol': listener.Listener.Protocol,
                            'SSLCertificateId': listener.Listener.SSLCertificateId
                        });
                    });
                }
                reqParams.cfn['AppCookieStickinessPolicy'] = obj.data.Policies.AppCookieStickinessPolicies;
                reqParams.cfn['LBCookieStickinessPolicy'] = obj.data.Policies.LBCookieStickinessPolicies;
                reqParams.cfn['AvailabilityZones'] = obj.data.AvailabilityZones;
                reqParams.cfn['Subnets'] = obj.data.Subnets;
                if (obj.data.Instances) {
                    reqParams.cfn['Instances'] = [];
                    obj.data.Instances.forEach(instance => {
                        reqParams.cfn['Instances'].push(instance.InstanceId);
                    });
                }
                reqParams.cfn['HealthCheck'] = obj.data.HealthCheck;
                reqParams.cfn['SecurityGroups'] = obj.data.SecurityGroups;
                reqParams.cfn['Scheme'] = obj.data.Scheme;

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
                    'logicalId': getResourceName('elb', obj.id),
                    'region': obj.region,
                    'service': 'elb',
                    'type': 'AWS::ElasticLoadBalancing::LoadBalancer',
                    'options': reqParams
                });
            } else if (obj.type == "cloudwatch.alarm") {
                reqParams.cfn['AlarmName'] = obj.data.AlarmName;
                reqParams.cfn['AlarmDescription'] = obj.data.AlarmDescription;
                reqParams.cfn['ActionsEnabled'] = obj.data.ActionsEnabled;
                reqParams.cfn['OKActions'] = obj.data.OKActions;
                reqParams.cfn['AlarmActions'] = obj.data.AlarmActions;
                reqParams.cfn['InsufficientDataActions'] = obj.data.InsufficientDataActions;
                reqParams.cfn['MetricName'] = obj.data.MetricName;
                reqParams.cfn['Namespace'] = obj.data.Namespace;
                reqParams.cfn['Statistic'] = obj.data.Statistic;
                reqParams.cfn['ExtendedStatistic'] = obj.data.ExtendedStatistic;
                reqParams.cfn['Dimensions'] = obj.data.Dimensions;
                reqParams.cfn['Period'] = obj.data.Period;
                reqParams.cfn['Unit'] = obj.data.Unit;
                reqParams.cfn['EvaluationPeriods'] = obj.data.EvaluationPeriods;
                reqParams.cfn['DatapointsToAlarm'] = obj.data.DatapointsToAlarm;
                reqParams.cfn['Threshold'] = obj.data.Threshold;
                reqParams.cfn['ComparisonOperator'] = obj.data.ComparisonOperator;
                reqParams.cfn['TreatMissingData'] = obj.data.TreatMissingData;
                reqParams.cfn['EvaluateLowSampleCountPercentile'] = obj.data.EvaluateLowSampleCountPercentile;
                reqParams.cfn['Metrics'] = obj.data.Metrics;

                tracked_resources.push({
                    'logicalId': getResourceName('cloudwatch', obj.id),
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'type': 'AWS::CloudWatch::Alarm',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.launchtemplate") {
                reqParams.cfn['LaunchTemplateName'] = obj.data.LaunchTemplateName;
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

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::LaunchTemplate',
                    'options': reqParams
                });
            } else if (obj.type == "cloud9.environment") {
                if (obj.data.type == "ec2") {
                    reqParams.cfn['Name'] = obj.data.name;
                    reqParams.cfn['Description'] = obj.data.description;
                    reqParams.cfn['OwnerArn'] = obj.data.ownerArn;

                    /*
                    TODO:
                    Repositories: 
                        - Repository
                    AutomaticStopTimeMinutes: Integer
                    InstanceType: String
                    SubnetId: String
                    */

                    tracked_resources.push({
                        'logicalId': getResourceName('cloud9', obj.id),
                        'region': obj.region,
                        'service': 'cloud9',
                        'type': 'AWS::Cloud9::EnvironmentEC2',
                        'options': reqParams
                    });
                }
            } else if (obj.type == "apigateway.restapi") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.cfn['MinimumCompressionSize'] = obj.data.minimumCompressionSize;
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.cfn['ApiKeySourceType'] = obj.data.apiKeySource;
                reqParams.cfn['Policy'] = obj.data.policy;
                reqParams.cfn['BinaryMediaTypes'] = obj.data.binaryMediaTypes;
                if (obj.data.endpointConfiguration) {
                    reqParams.cfn['EndpointConfiguration'] = {
                        'Types': obj.data.endpointConfiguration.types
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
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::RestApi',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.stage") {
                reqParams.cfn['StageName'] = obj.data.stageName;
                reqParams.cfn['DeploymentId'] = obj.data.deploymentId;
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.cfn['CacheClusterEnabled'] = obj.data.cacheClusterEnabled;
                reqParams.cfn['CacheClusterSize'] = obj.data.cacheClusterSize;
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
                reqParams.cfn['DocumentationVersion'] = obj.data.documentationVersion;
                if (obj.data.accessLogSettings) {
                    reqParams.cfn['AccessLogSetting'] = {
                        'Format': obj.data.format,
                        'DestinationArn': obj.data.destinationArn
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
                if (obj.data.tags) {
                    reqParams.cfn['Tags'] = [];
                    Object.keys(obj.data.tags).forEach(tagKey => {
                        reqParams.cfn['Tags'].push({
                            'Key': tagKey,
                            'Value': obj.data.tags[tagKey]
                        });
                    });
                }
                reqParams.cfn['ClientCertificateId'] = obj.data.clientCertificateId;

                tracked_resources.push({
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::Stage',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.deployment") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.cfn['Description'] = obj.data.description;

                /*
                TODO:
                DeploymentCanarySettings: DeploymentCanarySettings
                StageDescription: StageDescription
                StageName: String
                */

                tracked_resources.push({
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::Deployment',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.resource") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.cfn['PathPart'] = obj.data.pathPart;
                reqParams.cfn['ParentId'] = obj.data.parentId;

                tracked_resources.push({
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::Resource',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.model") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.cfn['Schema'] = obj.data.schema;
                reqParams.cfn['ContentType'] = obj.data.contentType;

                tracked_resources.push({
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::Model',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.authorizer") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.cfn['Type'] = obj.data.type;
                reqParams.cfn['ProviderARNs'] = obj.data.providerARNs;
                reqParams.cfn['AuthType'] = obj.data.authType;
                reqParams.cfn['AuthorizerUri'] = obj.data.authorizerUri;
                reqParams.cfn['AuthorizerCredentials'] = obj.data.authorizerCredentials;
                reqParams.cfn['IdentitySource'] = obj.data.identitySource;
                reqParams.cfn['IdentityValidationExpression'] = obj.data.identityValidationExpression;
                reqParams.cfn['AuthorizerResultTtlInSeconds'] = obj.data.authorizerResultTtlInSeconds;

                tracked_resources.push({
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::Authorizer',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.method") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.cfn['ResourceId'] = obj.data.resourceId;
                reqParams.cfn['HttpMethod'] = obj.data.httpMethod;
                reqParams.cfn['AuthorizationType'] = obj.data.authorizationType;
                reqParams.cfn['AuthorizerId'] = obj.data.authorizerId;
                reqParams.cfn['ApiKeyRequired'] = obj.data.apiKeyRequired;
                reqParams.cfn['RequestValidatorId'] = obj.data.requestValidatorId;
                reqParams.cfn['OperationName'] = obj.data.operationName;
                reqParams.cfn['RequestParameters'] = obj.data.requestParameters;
                reqParams.cfn['RequestModels'] = obj.data.requestModels;
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
                            })
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
                        'RequestParameters': obj.data.requestParameters,
                        'RequestTemplates': obj.data.requestTemplates,
                        'TimeoutInMillis': obj.data.methodIntegration.timeoutInMillis,
                        'Type': obj.data.methodIntegration.type,
                        'Uri': obj.data.methodIntegration.uri
                    }                      
                }
                reqParams.cfn['AuthorizationScopes'] = obj.data.authorizationScopes;

                tracked_resources.push({
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::Method',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.gatewayresponse") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.cfn['ResponseType'] = obj.data.responseType;
                reqParams.cfn['StatusCode'] = obj.data.statusCode;
                reqParams.cfn['ResponseParameters'] = obj.data.responseParameters;
                reqParams.cfn['ResponseTemplates'] = obj.data.responseTemplates;

                tracked_resources.push({
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::GatewayResponse',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.documentationversion") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.cfn['DocumentationVersion'] = obj.data.version;

                tracked_resources.push({
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::DocumentationVersion',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.documentationpart") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                if (obj.data.location) {
                    reqParams.cfn['Location'] = {
                        'Method': obj.data.location.method,
                        'Name': obj.data.location.name,
                        'Path': obj.data.location.path,
                        'StatusCode': obj.data.location.statusCode,
                        'Type': obj.data.location.type
                    };
                }
                reqParams.cfn['Properties'] = obj.data.properties;

                tracked_resources.push({
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::DocumentationPart',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.requestvalidator") {
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.cfn['ValidateRequestBody'] = obj.data.validateRequestBody;
                reqParams.cfn['ValidateRequestParameters'] = obj.data.validateRequestParameters;

                tracked_resources.push({
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::RequestValidator',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.account") {
                reqParams.cfn['CloudWatchRoleArn'] = obj.data.cloudwatchRoleArn;

                tracked_resources.push({
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::Account',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.domainname") {
                reqParams.cfn['CertificateArn'] = obj.data.certificateArn;
                reqParams.cfn['DomainName'] = obj.data.domainName;
                if (obj.data.endpointConfiguration) {
                    reqParams.cfn['EndpointConfiguration'] = {
                        'Types': obj.data.endpointConfiguration.types
                    };
                }
                reqParams.cfn['RegionalCertificateArn'] = obj.data.regionalCertificateArn;

                tracked_resources.push({
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::DomainName',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.basepathmapping") {
                reqParams.cfn['BasePath'] = obj.data.basePath;
                reqParams.cfn['DomainName'] = obj.data.domainName;
                reqParams.cfn['RestApiId'] = obj.data.restApiId;
                reqParams.cfn['Stage'] = obj.data.stage;

                tracked_resources.push({
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::BasePathMapping',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.usageplankey") {
                reqParams.cfn['KeyId'] = obj.data.id;
                reqParams.cfn['KeyType'] = obj.data.type;
                reqParams.cfn['UsagePlanId'] = obj.data.value; // TODO: ???

                tracked_resources.push({
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::UsagePlanKey',
                    'options': reqParams
                });
            } else if (obj.type == "apigateway.vpclink") {
                reqParams.cfn['Description'] = obj.data.description;
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.cfn['TargetArns'] = obj.data.targetArns;

                tracked_resources.push({
                    'logicalId': getResourceName('apigateway', obj.id),
                    'region': obj.region,
                    'service': 'apigateway',
                    'type': 'AWS::ApiGateway::VpcLink',
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
                    'logicalId': getResourceName('apigatewayv2', obj.id),
                    'region': obj.region,
                    'service': 'apigatewayv2',
                    'type': 'AWS::ApiGatewayV2::Integration',
                    'options': reqParams
                });
            } else if (obj.type == "batch.computeenvironment") {
                reqParams.cfn['ComputeEnvironmentName'] = obj.data.computeEnvironmentName;
                reqParams.cfn['Type'] = obj.data.type;
                reqParams.cfn['State'] = obj.data.state;
                reqParams.cfn['ServiceRole'] = obj.data.serviceRole;
                if (obj.data.computeResources) {
                    reqParams.cfn['ComputeResources'] = [];

                    var launchTemplate = null;
                    if (computeResource.launchTemplate) {
                        launchTemplate = {
                            'LaunchTemplateId': computeResource.launchTemplate.launchTemplateId,
                            'LaunchTemplateName': computeResource.launchTemplate.launchTemplateName,
                            'Version': computeResource.launchTemplate.version
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
                            'LaunchTemplate': launchTemplate,
                            
                        });
                    });
                }

                tracked_resources.push({
                    'logicalId': getResourceName('batch', obj.id),
                    'region': obj.region,
                    'service': 'batch',
                    'type': 'AWS::Batch::ComputeEnvironment',
                    'options': reqParams
                });
            } else if (obj.type == "batch.jobqueue") {
                reqParams.cfn['ComputeEnvironmentOrder'] = [];
                obj.data.computeEnvironmentOrder.forEach(computeEnvironmentOrder => {
                    reqParams.cfn['ComputeEnvironmentOrder'].push({
                        'ComputeEnvironment': computeEnvironmentOrder.computeEnvironment,
                        'Order': computeEnvironmentOrder.order
                    });
                });
                reqParams.cfn['Priority'] = obj.data.priority;
                reqParams.cfn['State'] = obj.data.state;
                reqParams.cfn['JobQueueName'] = obj.data.jobQueueName;

                tracked_resources.push({
                    'logicalId': getResourceName('batch', obj.id),
                    'region': obj.region,
                    'service': 'batch',
                    'type': 'AWS::Batch::JobQueue',
                    'options': reqParams
                });
            } else if (obj.type == "batch.jobdefinition") {
                reqParams.cfn['JobDefinitionName'] = obj.data.jobDefinitionName;
                reqParams.cfn['Type'] = obj.data.type;
                reqParams.cfn['Parameters'] = obj.data.parameters;
                if (obj.data.retryStrategy) {
                    reqParams.cfn['RetryStrategy'] = {
                        'Attempts': obj.data.retryStrategy.attempts
                    };
                }
                if (obj.data.timeout) {
                    reqParams.cfn['Timeout'] = {
                        'AttemptDurationSeconds': obj.data.timeout.attemptDurationSeconds
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

                tracked_resources.push({
                    'logicalId': getResourceName('batch', obj.id),
                    'region': obj.region,
                    'service': 'batch',
                    'type': 'AWS::Batch::JobDefinition',
                    'options': reqParams
                });
            } else if (obj.type == "efs.filesystem") {
                reqParams.cfn['PerformanceMode'] = obj.data.PerformanceMode;
                reqParams.cfn['Encrypted'] = obj.data.Encrypted;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                reqParams.cfn['ThroughputMode'] = obj.data.ThroughputMode;
                reqParams.cfn['ProvisionedThroughputInMibps'] = obj.data.ProvisionedThroughputInMibps;
                reqParams.cfn['FileSystemTags'] = obj.data.Tags;

                tracked_resources.push({
                    'logicalId': getResourceName('efs', obj.id),
                    'region': obj.region,
                    'service': 'efs',
                    'type': 'AWS::EFS::FileSystem',
                    'options': reqParams
                });
            } else if (obj.type == "efs.mounttarget") {
                reqParams.cfn['FileSystemId'] = obj.data.FileSystemId;
                reqParams.cfn['IpAddress'] = obj.data.IpAddress;
                reqParams.cfn['SecurityGroups'] = obj.data.SecurityGroups;
                reqParams.cfn['SubnetId'] = obj.data.SubnetId;

                tracked_resources.push({
                    'logicalId': getResourceName('efs', obj.id),
                    'region': obj.region,
                    'service': 'efs',
                    'type': 'AWS::EFS::MountTarget',
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
                    'logicalId': getResourceName('fsx', obj.id),
                    'region': obj.region,
                    'service': 'fsx',
                    'type': 'AWS::FSx::FileSystem',
                    'options': reqParams
                });
            } else if (obj.type == "ram.resourceshare") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.cfn['AllowExternalPrincipals'] = obj.data.allowExternalPrincipals;
                if (obj.data.tags) {
                    reqParams.cfn['Tags'] = [];
                    obj.data.tags.forEach(tag => {
                        reqParams.cfn['Tags'].push({
                            'Key': tag.key,
                            'Value': tag.value
                        })
                    });
                }
                reqParams.cfn['Principals'] = obj.data.principals;
                reqParams.cfn['ResourceArns'] = obj.data.resourceArns;

                tracked_resources.push({
                    'logicalId': getResourceName('ram', obj.id),
                    'region': obj.region,
                    'service': 'ram',
                    'type': 'AWS::RAM::ResourceShare',
                    'options': reqParams
                });
            } else if (obj.type == "acm.certificate") {
                reqParams.cfn['DomainName'] = obj.data.DomainName;
                reqParams.cfn['SubjectAlternativeNames'] = obj.data.SubjectAlternativeNames;
                if (obj.data.DomainValidationOptions) {
                    reqParams.cfn['DomainValidationOptions'] = {
                        'DomainName': obj.data.DomainValidationOptions.DomainName,
                        'ValidationDomain': obj.data.DomainValidationOptions.ValidationDomain
                    };
                }

                /*
                TODO:
                Tags:
                    - Resource Tag
                ValidationMethod: String
                */

                tracked_resources.push({
                    'logicalId': getResourceName('acm', obj.id),
                    'region': obj.region,
                    'service': 'acm',
                    'type': 'AWS::CertificateManager::Certificate',
                    'options': reqParams
                });
            } else if (obj.type == "kms.key") {
                reqParams.cfn['Enabled'] = obj.data.Enabled;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['KeyUsage'] = obj.data.KeyUsage;
                reqParams.cfn['EnableKeyRotation'] = obj.data.KeyRotationEnabled;
                reqParams.cfn['KeyPolicy'] = obj.data.Policy;

                /*
                TODO:
                PendingWindowInDays: Integer
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'logicalId': getResourceName('kms', obj.id),
                    'region': obj.region,
                    'service': 'kms',
                    'type': 'AWS::KMS::Key',
                    'options': reqParams
                });
            } else if (obj.type == "kms.alias") {
                reqParams.cfn['AliasName'] = obj.data.AliasArn;
                reqParams.cfn['TargetKeyId'] = obj.data.TargetKeyId;

                tracked_resources.push({
                    'logicalId': getResourceName('kms', obj.id),
                    'region': obj.region,
                    'service': 'kms',
                    'type': 'AWS::KMS::Alias',
                    'options': reqParams
                });
            } else if (obj.type == "stepfunctions.statemachine") {
                reqParams.cfn['StateMachineName'] = obj.data.name;
                reqParams.cfn['DefinitionString'] = obj.data.definition;
                reqParams.cfn['RoleArn'] = obj.data.roleArn;

                /*
                TODO:
                Tags: 
                    - Resource Tag
                */

                tracked_resources.push({
                    'logicalId': getResourceName('stepfunctions', obj.id),
                    'region': obj.region,
                    'service': 'stepfunctions',
                    'type': 'AWS::StepFunctions::StateMachine',
                    'options': reqParams
                });
            } else if (obj.type == "stepfunctions.activity") {
                reqParams.cfn['Name'] = obj.data.name;

                /*
                TODO:
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'logicalId': getResourceName('stepfunctions', obj.id),
                    'region': obj.region,
                    'service': 'stepfunctions',
                    'type': 'AWS::StepFunctions::Activity',
                    'options': reqParams
                });
            } else if (obj.type == "athena.namedquery") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['Database'] = obj.data.Database;
                reqParams.cfn['QueryString'] = obj.data.QueryString;

                tracked_resources.push({
                    'logicalId': getResourceName('athena', obj.id),
                    'region': obj.region,
                    'service': 'athena',
                    'type': 'AWS::Athena::NamedQuery',
                    'options': reqParams
                });
            } else if (obj.type == "iot.thing") {
                reqParams.cfn['ThingName'] = obj.data.thingName;
                reqParams.cfn['AttributePayload'] = {
                    'Attributes': obj.data.attributes
                };

                tracked_resources.push({
                    'logicalId': getResourceName('iot', obj.id),
                    'region': obj.region,
                    'service': 'iot',
                    'type': 'AWS::IoT::Thing',
                    'options': reqParams
                });
            } else if (obj.type == "iot.thingprincipalattachment") {
                reqParams.cfn['ThingName'] = obj.data.thing.thingName;
                reqParams.cfn['Principal'] = obj.data.principal;

                tracked_resources.push({
                    'logicalId': getResourceName('iot', obj.id),
                    'region': obj.region,
                    'service': 'iot',
                    'type': 'AWS::IoT::ThingPrincipalAttachment',
                    'options': reqParams
                });
            } else if (obj.type == "iot.policy") {
                reqParams.cfn['PolicyName'] = obj.data.policyName;
                reqParams.cfn['PolicyDocument'] = obj.data.policyDocument;

                tracked_resources.push({
                    'logicalId': getResourceName('iot', obj.id),
                    'region': obj.region,
                    'service': 'iot',
                    'type': 'AWS::IoT::Policy',
                    'options': reqParams
                });
            } else if (obj.type == "iot.policyprincipalattachment") {
                reqParams.cfn['PolicyName'] = obj.data.policy.policyName;
                reqParams.cfn['Principal'] = obj.data.principal;

                tracked_resources.push({
                    'logicalId': getResourceName('iot', obj.id),
                    'region': obj.region,
                    'service': 'iot',
                    'type': 'AWS::IoT::PolicyPrincipalAttachment',
                    'options': reqParams
                });
            } else if (obj.type == "iot.certificate") {
                reqParams.cfn['Status'] = obj.data.status;

                /*
                TODO:
                CertificateSigningRequest
                */

                tracked_resources.push({
                    'logicalId': getResourceName('iot', obj.id),
                    'region': obj.region,
                    'service': 'iot',
                    'type': 'AWS::IoT::Certificate',
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
                    'logicalId': getResourceName('iot1click', obj.id),
                    'region': obj.region,
                    'service': 'iot1click',
                    'type': 'AWS::IoT1Click::Device',
                    'options': reqParams
                });
            } else if (obj.type == "codecommit.repository") {
                reqParams.cfn['RepositoryDescription'] = obj.data.repositoryDescription;
                reqParams.cfn['RepositoryName'] = obj.data.repositoryName;

                /*
                TODO:
                Triggers
                */

                tracked_resources.push({
                    'logicalId': getResourceName('codecommit', obj.id),
                    'region': obj.region,
                    'service': 'codecommit',
                    'type': 'AWS::CodeCommit::Repository',
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
                    'logicalId': getResourceName('codebuild', obj.id),
                    'region': obj.region,
                    'service': 'codebuild',
                    'type': 'AWS::CodeBuild::Project',
                    'options': reqParams
                });
            } else if (obj.type == "codedeploy.application") {
                reqParams.cfn['ApplicationName'] = obj.data.applicationName;
                reqParams.cfn['ComputePlatform'] = obj.data.computePlatform;

                tracked_resources.push({
                    'logicalId': getResourceName('codedeploy', obj.id),
                    'region': obj.region,
                    'service': 'codedeploy',
                    'type': 'AWS::CodeDeploy::Application',
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
                    'logicalId': getResourceName('codedeploy', obj.id),
                    'region': obj.region,
                    'service': 'codedeploy',
                    'type': 'AWS::CodeDeploy::DeploymentGroup',
                    'options': reqParams
                });
            } else if (obj.type == "codedeploy.deploymentconfig") {
                reqParams.cfn['DeploymentConfigName'] = obj.data.deploymentConfigName;
                reqParams.cfn['MinimumHealthyHosts'] = {
                    'Type': obj.data.minimumHealthyHosts.type,
                    'Value': obj.data.minimumHealthyHosts.value
                };

                tracked_resources.push({
                    'logicalId': getResourceName('codedeploy', obj.id),
                    'region': obj.region,
                    'service': 'codedeploy',
                    'type': 'AWS::CodeDeploy::DeploymentConfig',
                    'options': reqParams
                });
            } else if (obj.type == "neptune.cluster") {
                reqParams.cfn['AvailabilityZones'] = obj.data.AvailabilityZones;
                reqParams.cfn['BackupRetentionPeriod'] = obj.data.BackupRetentionPeriod;
                reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;
                reqParams.cfn['DBClusterParameterGroupName'] = obj.data.DBClusterParameterGroup;
                reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroup;
                reqParams.cfn['Port'] = obj.data.Port;
                reqParams.cfn['PreferredBackupWindow'] = obj.data.PreferredBackupWindow;
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                if (obj.data.VpcSecurityGroups) {
                    reqParams.cfn['VpcSecurityGroupIds'] = [];
                    obj.data.VpcSecurityGroups.forEach(vpcSecurityGroup => {
                        reqParams.cfn['VpcSecurityGroupIds'].push(vpcSecurityGroup.VpcSecurityGroupId)
                    });
                }
                reqParams.cfn['StorageEncrypted'] = obj.data.StorageEncrypted;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                reqParams.cfn['IamAuthEnabled'] = obj.data.IAMDatabaseAuthenticationEnabled;

                /*
                TODO:
                SnapshotIdentifier: String
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'logicalId': getResourceName('neptune', obj.id),
                    'region': obj.region,
                    'service': 'neptune',
                    'type': 'AWS::Neptune::DBCluster',
                    'options': reqParams
                });
            } else if (obj.type == "neptune.instance") {
                reqParams.cfn['DBInstanceIdentifier'] = obj.data.DBInstanceIdentifier;
                reqParams.cfn['DBInstanceClass'] = obj.data.DBInstanceClass;
                reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
                if (obj.data.DBSubnetGroup) {
                    reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroup.DBSubnetGroupName;
                }
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
                reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;

                /*
                TODO:
                AllowMajorVersionUpgrade: Boolean
                DBParameterGroupName: String
                DBSnapshotIdentifier: String
                Tags:
                    Resource Tag
                */

                tracked_resources.push({
                    'logicalId': getResourceName('neptune', obj.id),
                    'region': obj.region,
                    'service': 'neptune',
                    'type': 'AWS::Neptune::DBInstance',
                    'options': reqParams
                });
            } else if (obj.type == "neptune.clusterparametergroup") {
                reqParams.cfn['Name'] = obj.data.DBClusterParameterGroupName;
                reqParams.cfn['Family'] = obj.data.DBParameterGroupFamily;
                reqParams.cfn['Description'] = obj.data.Description;

                /*
                TODO:
                Parameters: DBParameters
                Tags:
                    Resource Tag
                */

                tracked_resources.push({
                    'logicalId': getResourceName('neptune', obj.id),
                    'region': obj.region,
                    'service': 'neptune',
                    'type': 'AWS::Neptune::DBClusterParameterGroup',
                    'options': reqParams
                });
            } else if (obj.type == "neptune.parametergroup") {
                reqParams.cfn['Name'] = obj.data.DBParameterGroupName;
                reqParams.cfn['Family'] = obj.data.DBParameterGroupFamily;
                reqParams.cfn['Description'] = obj.data.Description;

                /*
                TODO:
                Parameters: DBParameters
                Tags:
                    Resource Tag
                */

                tracked_resources.push({
                    'logicalId': getResourceName('neptune', obj.id),
                    'region': obj.region,
                    'service': 'neptune',
                    'type': 'AWS::Neptune::DBParameterGroup',
                    'options': reqParams
                });
            } else if (obj.type == "neptune.subnetgroup") {
                reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroupName;
                reqParams.cfn['DBSubnetGroupDescription'] = obj.data.DBSubnetGroupDescription;
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
                    'logicalId': getResourceName('neptune', obj.id),
                    'region': obj.region,
                    'service': 'neptune',
                    'type': 'AWS::Neptune::DBSubnetGroup',
                    'options': reqParams
                });
            } else if (obj.type == "documentdb.cluster") {
                reqParams.cfn['AvailabilityZones'] = obj.data.AvailabilityZones;
                reqParams.cfn['BackupRetentionPeriod'] = obj.data.BackupRetentionPeriod;
                reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;
                reqParams.cfn['DBClusterParameterGroupName'] = obj.data.DBClusterParameterGroup;
                reqParams.cfn['DBSubnetGroupName'] = obj.data.DBClusterParameterGroupName;
                reqParams.cfn['EngineVersion'] = obj.data.EngineVersion;
                reqParams.cfn['Port'] = obj.data.Port;
                reqParams.cfn['MasterUsername'] = obj.data.MasterUsername;
                reqParams.cfn['PreferredBackupWindow'] = obj.data.PreferredBackupWindow;
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                if (obj.data.VpcSecurityGroups) {
                    reqParams.cfn['VpcSecurityGroupIds'] = [];
                    obj.data.VpcSecurityGroups.forEach(vpcSecurityGroup => {
                        reqParams.cfn['VpcSecurityGroupIds'].push(vpcSecurityGroup['VpcSecurityGroupId']);
                    });
                }
                reqParams.cfn['StorageEncrypted'] = obj.data.StorageEncrypted;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;

                /*
                TODO:
                MasterUserPassword: String
                SnapshotIdentifier: String
                Tags: 
                    - Tag
                */

                tracked_resources.push({
                    'logicalId': getResourceName('docdb', obj.id),
                    'region': obj.region,
                    'service': 'docdb',
                    'type': 'AWS::DocDB::DBCluster',
                    'options': reqParams
                });
            } else if (obj.type == "documentdb.instance") {
                reqParams.cfn['DBInstanceIdentifier'] = obj.data.DBInstanceIdentifier;
                reqParams.cfn['DBInstanceClass'] = obj.data.DBInstanceClass;
                reqParams.cfn['AvailabilityZone'] = obj.data.AvailabilityZone;
                reqParams.cfn['PreferredMaintenanceWindow'] = obj.data.PreferredMaintenanceWindow;
                reqParams.cfn['AutoMinorVersionUpgrade'] = obj.data.AutoMinorVersionUpgrade;
                reqParams.cfn['DBClusterIdentifier'] = obj.data.DBClusterIdentifier;

                /*
                TODO:
                Tags:
                    - Tag
                */

                tracked_resources.push({
                    'logicalId': getResourceName('docdb', obj.id),
                    'region': obj.region,
                    'service': 'docdb',
                    'type': 'AWS::DocDB::DBInstance',
                    'options': reqParams
                });
            } else if (obj.type == "documentdb.clusterparametergroup") {
                reqParams.cfn['Name'] = obj.data.DBClusterParameterGroupName;
                reqParams.cfn['Family'] = obj.data.DBParameterGroupFamily;
                reqParams.cfn['Description'] = obj.data.Description;

                /*
                TODO:
                Parameters: Json
                Tags: 
                    - Tag
                */

                tracked_resources.push({
                    'logicalId': getResourceName('docdb', obj.id),
                    'region': obj.region,
                    'service': 'docdb',
                    'type': 'AWS::DocDB::DBClusterParameterGroup',
                    'options': reqParams
                });
            } else if (obj.type == "documentdb.subnetgroup") {
                reqParams.cfn['DBSubnetGroupName'] = obj.data.DBSubnetGroupName;
                reqParams.cfn['DBSubnetGroupDescription'] = obj.data.DBSubnetGroupDescription;
                if (obj.data.Subnets) {
                    reqParams.cfn['SubnetIds'] = [];
                    obj.data.Subnets.forEach(subnet => {
                        reqParams.cfn['SubnetIds'].push(subnet.SubnetIdentifier);
                    });
                }

                /*
                TODO:
                Tags: 
                    - Tag
                */

                tracked_resources.push({
                    'logicalId': getResourceName('docdb', obj.id),
                    'region': obj.region,
                    'service': 'docdb',
                    'type': 'AWS::DocDB::DBSubnetGroup',
                    'options': reqParams
                });
            } else if (obj.type == "robomaker.robot") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.cfn['GreengrassGroupId'] = obj.data.greengrassGroupId;
                reqParams.cfn['Architecture'] = obj.data.architecture;
                reqParams.cfn['Fleet'] = obj.data.fleetArn;
                reqParams.cfn['Tags'] = obj.data.tags;

                tracked_resources.push({
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
                    'logicalId': getResourceName('robomaker', obj.id),
                    'region': obj.region,
                    'service': 'robomaker',
                    'type': 'AWS::RoboMaker::Fleet',
                    'options': reqParams
                });
            } else if (obj.type == "robomaker.robotapplication") {
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
                    'logicalId': getResourceName('robomaker', obj.id),
                    'region': obj.region,
                    'service': 'robomaker',
                    'type': 'AWS::RoboMaker::RobotApplication',
                    'options': reqParams
                });
            } else if (obj.type == "robomaker.simulationapplication") {
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
                    'logicalId': getResourceName('robomaker', obj.id),
                    'region': obj.region,
                    'service': 'robomaker',
                    'type': 'AWS::RoboMaker::SimulationApplication',
                    'options': reqParams
                });
            } else if (obj.type == "gamelift.fleet") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['BuildId'] = obj.data.BuildId;
                reqParams.cfn['ServerLaunchPath'] = obj.data.ServerLaunchPath;
                reqParams.cfn['ServerLaunchParameters'] = obj.data.ServerLaunchParameters;
                reqParams.cfn['LogPaths'] = obj.data.LogPaths;
                reqParams.cfn['EC2InstanceType'] = obj.data.InstanceType;

                /*
                TODO:
                DesiredEC2Instances: Integer
                EC2InboundPermissions:
                    - EC2InboundPermission
                MaxSize: Integer
                MinSize: Integer
                */

                tracked_resources.push({
                    'logicalId': getResourceName('gamelift', obj.id),
                    'region': obj.region,
                    'service': 'gamelift',
                    'type': 'AWS::GameLift::Fleet',
                    'options': reqParams
                });
            } else if (obj.type == "gamelift.build") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Version'] = obj.data.Version;

                /*
                TODO:
                StorageLocation
                */

                tracked_resources.push({
                    'logicalId': getResourceName('gamelift', obj.id),
                    'region': obj.region,
                    'service': 'gamelift',
                    'type': 'AWS::GameLift::Build',
                    'options': reqParams
                });
            } else if (obj.type == "gamelift.alias") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['RoutingStrategy'] = obj.data.RoutingStrategy;

                tracked_resources.push({
                    'logicalId': getResourceName('gamelift', obj.id),
                    'region': obj.region,
                    'service': 'gamelift',
                    'type': 'AWS::GameLift::Alias',
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
                    'logicalId': getResourceName('amazonmq', obj.id),
                    'region': obj.region,
                    'service': 'amazonmq',
                    'type': 'AWS::AmazonMQ::ConfigurationAssociation',
                    'options': reqParams
                });
            } else if (obj.type == "config.rule") {
                reqParams.cfn['ConfigRuleName'] = obj.data.ConfigRuleName;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['Scope'] = obj.data.Scope;
                reqParams.cfn['Source'] = obj.data.Source;
                reqParams.cfn['InputParameters'] = obj.data.InputParameters;
                reqParams.cfn['MaximumExecutionFrequency'] = obj.data.MaximumExecutionFrequency;

                tracked_resources.push({
                    'logicalId': getResourceName('config', obj.id),
                    'region': obj.region,
                    'service': 'config',
                    'type': 'AWS::Config::ConfigRule',
                    'options': reqParams
                });
            } else if (obj.type == "config.configurationaggregator") {
                reqParams.cfn['ConfigurationAggregatorName'] = obj.data.ConfigurationAggregatorName;
                if (obj.data.AccountAggregationSources) {
                    reqParams.cfn['AccountAggregationSources'] = [];
                    obj.data.AccountAggregationSources.forEach(accountAggregationSource => {
                        reqParams.cfn['AccountAggregationSources'].push({
                            'AllAwsRegions': accountAggregationSource.AllAwsRegions,
                            'AwsRegions': accountAggregationSource.AwsRegions,
                            'AccountIds': accountAggregationSource.AccountIds
                        });
                    });
                }
                if (obj.data.OrganizationAggregationSource) {
                    reqParams.cfn['OrganizationAggregationSource'] = {
                        'AllAwsRegions': obj.data.OrganizationAggregationSource.AllAwsRegions,
                        'AwsRegions': obj.data.OrganizationAggregationSource.AwsRegions,
                        'RoleArn': obj.data.OrganizationAggregationSource.RoleArn
                    };
                }

                tracked_resources.push({
                    'logicalId': getResourceName('config', obj.id),
                    'region': obj.region,
                    'service': 'config',
                    'type': 'AWS::Config::ConfigurationAggregator',
                    'options': reqParams
                });
            } else if (obj.type == "config.configurationrecorder") {
                reqParams.cfn['Name'] = obj.data.name;
                if (obj.data.recordingGroup) {
                    reqParams.cfn['RecordingGroup'] = {
                        'AllSupported': obj.data.recordingGroup.allSupported,
                        'IncludeGlobalResourceTypes': obj.data.recordingGroup.includeGlobalResourceTypes,
                        'ResourceTypes': obj.data.recordingGroup.resourceTypes
                    };
                }
                reqParams.cfn['RoleARN'] = obj.data.roleARN;

                tracked_resources.push({
                    'logicalId': getResourceName('config', obj.id),
                    'region': obj.region,
                    'service': 'config',
                    'type': 'AWS::Config::ConfigurationRecorder',
                    'options': reqParams
                });
            } else if (obj.type == "config.aggregationauthorization") {
                reqParams.cfn['AuthorizedAccountId'] = obj.data.AuthorizedAccountId;
                reqParams.cfn['AuthorizedAwsRegion'] = obj.data.AuthorizedAwsRegion;

                tracked_resources.push({
                    'logicalId': getResourceName('config', obj.id),
                    'region': obj.region,
                    'service': 'config',
                    'type': 'AWS::Config::AggregationAuthorization',
                    'options': reqParams
                });
            } else if (obj.type == "config.deliverychannel") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.cfn['S3BucketName'] = obj.data.s3BucketName;
                reqParams.cfn['S3KeyPrefix'] = obj.data.s3KeyPrefix;
                reqParams.cfn['SnsTopicARN'] = obj.data.snsTopicARN;
                if (obj.data.configSnapshotDeliveryProperties) {
                    reqParams.cfn['ConfigSnapshotDeliveryProperties'] = {
                        'DeliveryFrequency': obj.data.configSnapshotDeliveryProperties.deliveryFrequency
                    };
                }

                tracked_resources.push({
                    'logicalId': getResourceName('config', obj.id),
                    'region': obj.region,
                    'service': 'config',
                    'type': 'AWS::Config::DeliveryChannel',
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

                /*
                TODO:
                NotificationsWithSubscribers
                */

                tracked_resources.push({
                    'logicalId': getResourceName('budgets', obj.id),
                    'region': obj.region,
                    'service': 'budgets',
                    'type': 'AWS::Budgets::Budget',
                    'options': reqParams
                });
            } else if (obj.type == "waf.webacl") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['MetricName'] = obj.data.MetricName;
                reqParams.cfn['DefaultAction'] = obj.data.DefaultAction;
                reqParams.cfn['Rules'] = [];
                obj.data.Rules.forEach(rule => {
                    reqParams.cfn['Rules'].push({
                        'Priority': rule.Priority,
                        'RuleId': rule.RuleId,
                        'Action': rule.Action
                    })
                });

                tracked_resources.push({
                    'logicalId': getResourceName('waf', obj.id),
                    'region': obj.region,
                    'service': 'waf',
                    'type': 'AWS::WAF::WebACL',
                    'options': reqParams
                });
            } else if (obj.type == "waf.rule") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['MetricName'] = obj.data.MetricName;
                reqParams.cfn['Predicates'] = obj.data.Predicates;

                tracked_resources.push({
                    'logicalId': getResourceName('waf', obj.id),
                    'region': obj.region,
                    'service': 'waf',
                    'type': 'AWS::WAF::Rule',
                    'options': reqParams
                });
            } else if (obj.type == "waf.xssmatchset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['XssMatchTuples'] = obj.data.XssMatchTuples;

                tracked_resources.push({
                    'logicalId': getResourceName('waf', obj.id),
                    'region': obj.region,
                    'service': 'waf',
                    'type': 'AWS::WAF::XssMatchSet',
                    'options': reqParams
                });
            } else if (obj.type == "waf.ipset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['IPSetDescriptors'] = obj.data.IPSetDescriptors;

                tracked_resources.push({
                    'logicalId': getResourceName('waf', obj.id),
                    'region': obj.region,
                    'service': 'waf',
                    'type': 'AWS::WAF::IPSet',
                    'options': reqParams
                });
            } else if (obj.type == "waf.sizeconstraintset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['SizeConstraints'] = obj.data.SizeConstraints;

                tracked_resources.push({
                    'logicalId': getResourceName('waf', obj.id),
                    'region': obj.region,
                    'service': 'waf',
                    'type': 'AWS::WAF::SizeConstraintSet',
                    'options': reqParams
                });
            } else if (obj.type == "waf.sqlinjectionmatchset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['SqlInjectionMatchTuples'] = obj.data.SqlInjectionMatchTuples;

                tracked_resources.push({
                    'logicalId': getResourceName('waf', obj.id),
                    'region': obj.region,
                    'service': 'waf',
                    'type': 'AWS::WAF::SqlInjectionMatchSet',
                    'options': reqParams
                });
            } else if (obj.type == "waf.bytematchset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['ByteMatchTuples'] = obj.data.ByteMatchTuples;

                /*
                SKIPPED:
                ByteMatchTuples:
                - TargetStringBase64
                */

                tracked_resources.push({
                    'logicalId': getResourceName('waf', obj.id),
                    'region': obj.region,
                    'service': 'waf',
                    'type': 'AWS::WAF::ByteMatchSet',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.webacl") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['MetricName'] = obj.data.MetricName;
                reqParams.cfn['DefaultAction'] = obj.data.DefaultAction;
                reqParams.cfn['Rules'] = [];
                obj.data.Rules.forEach(rule => {
                    reqParams.cfn['Rules'].push({
                        'Priority': rule.Priority,
                        'RuleId': rule.RuleId,
                        'Action': rule.Action
                    })
                });

                tracked_resources.push({
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::WebACL',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.rule") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['MetricName'] = obj.data.MetricName;
                reqParams.cfn['Predicates'] = obj.data.Predicates;

                tracked_resources.push({
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::Rule',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.xssmatchset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['XssMatchTuples'] = obj.data.XssMatchTuples;

                tracked_resources.push({
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::XssMatchSet',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.ipset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['IPSetDescriptors'] = obj.data.IPSetDescriptors;

                tracked_resources.push({
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::IPSet',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.sizeconstraintset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['SizeConstraints'] = obj.data.SizeConstraints;

                tracked_resources.push({
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::SizeConstraintSet',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.sqlinjectionmatchset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['SqlInjectionMatchTuples'] = obj.data.SqlInjectionMatchTuples;

                tracked_resources.push({
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::SqlInjectionMatchSet',
                    'options': reqParams
                });
            } else if (obj.type == "wafregional.bytematchset") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['ByteMatchTuples'] = obj.data.ByteMatchTuples;

                /*
                SKIPPED:
                ByteMatchTuples:
                - TargetStringBase64
                */

                tracked_resources.push({
                    'logicalId': getResourceName('wafregional', obj.id),
                    'region': obj.region,
                    'service': 'wafregional',
                    'type': 'AWS::WAFRegional::ByteMatchSet',
                    'options': reqParams
                });
            } else if (obj.type == "directoryservice.simplead") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['ShortName'] = obj.data.ShortName;
                reqParams.cfn['Size'] = obj.data.Size;
                if (obj.data.Alias && obj.data.Alias != obj.data.DirectoryId) {
                    reqParams.cfn['CreateAlias'] = true;
                }
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['EnableSso'] = obj.data.SsoEnabled;
                reqParams.cfn['VpcSettings'] = {
                    'VpcId': obj.data.VpcSettings.VpcId,
                    'SubnetIds': obj.data.VpcSettings.SubnetIds
                };

                /*
                TODO:
                Password: String
                */

                tracked_resources.push({
                    'logicalId': getResourceName('directoryservice', obj.id),
                    'region': obj.region,
                    'service': 'directoryservice',
                    'type': 'AWS::DirectoryService::SimpleAD',
                    'options': reqParams
                });
            } else if (obj.type == "directoryservice.microsoftad") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['ShortName'] = obj.data.ShortName;
                reqParams.cfn['Edition'] = obj.data.Edition;
                if (obj.data.Alias && obj.data.Alias != obj.data.DirectoryId) {
                    reqParams.cfn['CreateAlias'] = true;
                }
                reqParams.cfn['EnableSso'] = obj.data.SsoEnabled;
                reqParams.cfn['VpcSettings'] = {
                    'VpcId': obj.data.VpcSettings.VpcId,
                    'SubnetIds': obj.data.VpcSettings.SubnetIds
                };

                /*
                TODO:
                Password: String
                */

                tracked_resources.push({
                    'logicalId': getResourceName('directoryservice', obj.id),
                    'region': obj.region,
                    'service': 'directoryservice',
                    'type': 'AWS::DirectoryService::MicrosoftAD',
                    'options': reqParams
                });
            } else if (obj.type == "elasticsearch.domain") {
                reqParams.cfn['DomainName'] = obj.data.DomainName;
                reqParams.cfn['ElasticsearchVersion'] = obj.data.ElasticsearchVersion;
                if (obj.data.ElasticsearchClusterConfig) {
                    reqParams.cfn['ElasticsearchClusterConfig'] = {
                        'DedicatedMasterCount': obj.data.ElasticsearchClusterConfig.DedicatedMasterCount,
                        'DedicatedMasterEnabled': obj.data.ElasticsearchClusterConfig.DedicatedMasterEnabled,
                        'DedicatedMasterType': obj.data.ElasticsearchClusterConfig.DedicatedMasterType,
                        'InstanceCount': obj.data.ElasticsearchClusterConfig.InstanceCount,
                        'InstanceType': obj.data.ElasticsearchClusterConfig.InstanceType,
                        'ZoneAwarenessEnabled': obj.data.ElasticsearchClusterConfig.ZoneAwarenessEnabled
                    };
                }
                reqParams.cfn['AccessPolicies'] = obj.data.AccessPolicies;
                reqParams.cfn['SnapshotOptions'] = obj.data.SnapshotOptions;
                if (obj.data.VPCOptions) {
                    reqParams.cfn['VPCOptions'] = {
                        'SecurityGroupIds': obj.data.VPCOptions.SecurityGroupIds,
                        'SubnetIds': obj.data.VPCOptions.SubnetIds
                    };
                }
                reqParams.cfn['EncryptionAtRestOptions'] = obj.data.EncryptionAtRestOptions;
                reqParams.cfn['NodeToNodeEncryptionOptions'] = obj.data.NodeToNodeEncryptionOptions;
                reqParams.cfn['AdvancedOptions'] = obj.data.AdvancedOptions;
                reqParams.cfn['EBSOptions'] = obj.data.EBSOptions;

                /*
                TODO:
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'logicalId': getResourceName('elasticsearch', obj.id),
                    'region': obj.region,
                    'service': 'elasticsearch',
                    'type': 'AWS::Elasticsearch::Domain',
                    'options': reqParams
                });
            } else if (obj.type == "ssm.document") {
                reqParams.cfn['Content'] = obj.data.Content;
                reqParams.cfn['DocumentType'] = obj.data.DocumentType;
                reqParams.cfn['Tags'] = obj.data.Tags;

                tracked_resources.push({
                    'logicalId': getResourceName('ssm', obj.id),
                    'region': obj.region,
                    'service': 'ssm',
                    'type': 'AWS::SSM::Document',
                    'options': reqParams
                });
            } else if (obj.type == "ssm.parameter") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Type'] = obj.data.Type;
                reqParams.cfn['Value'] = obj.data.Value;

                /*
                SKIPPED:
                AllowedPattern
                Description
                */

                tracked_resources.push({
                    'logicalId': getResourceName('ssm', obj.id),
                    'region': obj.region,
                    'service': 'ssm',
                    'type': 'AWS::SSM::Parameter',
                    'options': reqParams
                });
            } else if (obj.type == "ssm.patchbaseline") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['OperatingSystem'] = obj.data.OperatingSystem;
                reqParams.cfn['GlobalFilters'] = obj.data.GlobalFilters;
                reqParams.cfn['ApprovalRules'] = obj.data.ApprovalRules;
                reqParams.cfn['ApprovedPatches'] = obj.data.ApprovedPatches;
                reqParams.cfn['ApprovedPatchesComplianceLevel'] = obj.data.ApprovedPatchesComplianceLevel;
                reqParams.cfn['ApprovedPatchesEnableNonSecurity'] = obj.data.ApprovedPatchesEnableNonSecurity;
                reqParams.cfn['RejectedPatches'] = obj.data.RejectedPatches;
                reqParams.cfn['RejectedPatchesAction'] = [obj.data.RejectedPatchesAction]; // TODO: WTF?
                reqParams.cfn['PatchGroups'] = obj.data.PatchGroups;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['Sources'] = obj.data.Sources;

                /*
                TODO:
                Tags:
                    - Resource Tag
                */

                tracked_resources.push({
                    'logicalId': getResourceName('ssm', obj.id),
                    'region': obj.region,
                    'service': 'ssm',
                    'type': 'AWS::SSM::PatchBaseline',
                    'options': reqParams
                });
            } else if (obj.type == "ssm.association") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['InstanceId'] = obj.data.InstanceId;
                reqParams.cfn['DocumentVersion'] = obj.data.DocumentVersion;
                reqParams.cfn['Parameters'] = obj.data.Parameters;
                reqParams.cfn['ScheduleExpression'] = obj.data.ScheduleExpression;
                if (obj.data.OutputLocation && obj.data.OutputLocation.S3Location) {
                    reqParams.cfn['OutputLocation'] = {
                        'S3Location': {
                            'OutputS3BucketName': obj.data.OutputLocation.S3Location.OutputS3BucketName,
                            'OutputS3KeyPrefix': obj.data.OutputLocation.S3Location.OutputS3KeyPrefix
                        }
                    };
                }
                reqParams.cfn['AssociationName'] = obj.data.AssociationName;
                reqParams.cfn['Targets'] = obj.data.Targets;

                tracked_resources.push({
                    'logicalId': getResourceName('ssm', obj.id),
                    'region': obj.region,
                    'service': 'ssm',
                    'type': 'AWS::SSM::Association',
                    'options': reqParams
                });
            } else if (obj.type == "ssm.maintenancewindow") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['StartDate'] = obj.data.StartDate;
                reqParams.cfn['EndDate'] = obj.data.EndDate;
                reqParams.cfn['Schedule'] = obj.data.Schedule;
                reqParams.cfn['ScheduleTimezone'] = obj.data.ScheduleTimezone;
                reqParams.cfn['Duration'] = obj.data.Duration;
                reqParams.cfn['Cutoff'] = obj.data.Cutoff;
                reqParams.cfn['AllowUnassociatedTargets'] = obj.data.AllowUnassociatedTargets;

                /*
                TODO:
                Tags:
                    - Resource Tag 
                */

                tracked_resources.push({
                    'logicalId': getResourceName('ssm', obj.id),
                    'region': obj.region,
                    'service': 'ssm',
                    'type': 'AWS::SSM::MaintenanceWindow',
                    'options': reqParams
                });
            } else if (obj.type == "ssm.maintenancewindowtarget") {
                reqParams.cfn['WindowId'] = obj.data.WindowId;
                reqParams.cfn['ResourceType'] = obj.data.ResourceType;
                reqParams.cfn['Targets'] = obj.data.Targets;
                reqParams.cfn['OwnerInformation'] = obj.data.OwnerInformation;
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;

                tracked_resources.push({
                    'logicalId': getResourceName('ssm', obj.id),
                    'region': obj.region,
                    'service': 'ssm',
                    'type': 'AWS::SSM::MaintenanceWindowTarget',
                    'options': reqParams
                });
            } else if (obj.type == "ssm.maintenancewindowtask") {
                reqParams.cfn['WindowId'] = obj.data.WindowId;
                reqParams.cfn['Targets'] = obj.data.Targets;
                reqParams.cfn['TaskArn'] = obj.data.TaskArn;
                reqParams.cfn['ServiceRoleArn'] = obj.data.ServiceRoleArn;
                reqParams.cfn['TaskType'] = obj.data.TaskType;
                reqParams.cfn['TaskParameters'] = obj.data.TaskParameters;
                reqParams.cfn['Priority'] = obj.data.Priority;
                reqParams.cfn['MaxConcurrency'] = obj.data.MaxConcurrency;
                reqParams.cfn['MaxErrors'] = obj.data.MaxErrors;
                if (obj.data.LoggingInfo) {
                    reqParams.cfn['LoggingInfo'] = {
                        'S3Bucket': obj.data.LoggingInfo.S3BucketName,
                        'Region': obj.data.LoggingInfo.S3Region,
                        'S3Prefix': obj.data.LoggingInfo.S3KeyPrefix
                    };
                }
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;
                if (obj.data.TaskInvocationParameters) {
                    reqParams.cfn['TaskInvocationParameters'] = {
                        'MaintenanceWindowRunCommandParameters': obj.data.TaskInvocationParameters.RunCommand,
                        'MaintenanceWindowAutomationParameters': obj.data.TaskInvocationParameters.Automation,
                        'MaintenanceWindowStepFunctionsParameters': obj.data.TaskInvocationParameters.StepFunctions,
                        'MaintenanceWindowLambdaParameters': obj.data.TaskInvocationParameters.Lambda
                    };
                }

                tracked_resources.push({
                    'logicalId': getResourceName('ssm', obj.id),
                    'region': obj.region,
                    'service': 'ssm',
                    'type': 'AWS::SSM::MaintenanceWindowTask',
                    'options': reqParams
                });
            } else if (obj.type == "ssm.resourcedatasync") {
                reqParams.cfn['SyncName'] = obj.data.SyncName;
                reqParams.cfn['BucketName'] = obj.data.S3Destination.BucketName;
                reqParams.cfn['BucketPrefix'] = obj.data.S3Destination.Prefix;
                reqParams.cfn['SyncFormat'] = obj.data.S3Destination.SyncFormat;
                reqParams.cfn['BucketRegion'] = obj.data.S3Destination.Region;
                reqParams.cfn['KMSKeyArn'] = obj.data.S3Destination.AWSKMSKeyARN;

                tracked_resources.push({
                    'logicalId': getResourceName('ssm', obj.id),
                    'region': obj.region,
                    'service': 'ssm',
                    'type': 'AWS::SSM::ResourceDataSync',
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
                    'logicalId': getResourceName('servicecatalog', obj.id),
                    'region': obj.region,
                    'service': 'servicecatalog',
                    'type': 'AWS::ServiceCatalog::LaunchTemplateConstraint',
                    'options': reqParams
                });
            } else if (obj.type == "servicecatalog.acceptedportfolioshare") {
                reqParams.cfn['PortfolioId'] = obj.data.portfolio.Id;

                /*
                TODO:
                AcceptLanguage: String
                */

                tracked_resources.push({
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
                    'logicalId': getResourceName('iotanalytics', obj.id),
                    'region': obj.region,
                    'service': 'iotanalytics',
                    'type': 'AWS::IoTAnalytics::Datastore',
                    'options': reqParams
                });
            } else if (obj.type == "servicediscovery.httpnamespace") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['Name'] = obj.data.Name;

                tracked_resources.push({
                    'logicalId': getResourceName('servicediscovery', obj.id),
                    'region': obj.region,
                    'service': 'servicediscovery',
                    'type': 'AWS::ServiceDiscovery::HttpNamespace',
                    'options': reqParams
                });
            } else if (obj.type == "servicediscovery.privatednsnamespace") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['Name'] = obj.data.Name;

                /*
                TODO:
                Vpc
                */

                tracked_resources.push({
                    'logicalId': getResourceName('servicediscovery', obj.id),
                    'region': obj.region,
                    'service': 'servicediscovery',
                    'type': 'AWS::ServiceDiscovery::PrivateDnsNamespace',
                    'options': reqParams
                });
            } else if (obj.type == "servicediscovery.publicdnsnamespace") {
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['Name'] = obj.data.Name;

                tracked_resources.push({
                    'logicalId': getResourceName('servicediscovery', obj.id),
                    'region': obj.region,
                    'service': 'servicediscovery',
                    'type': 'AWS::ServiceDiscovery::PublicDnsNamespace',
                    'options': reqParams
                });
            } else if (obj.type == "servicediscovery.service") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['NamespaceId'] = obj.data.NamespaceId;
                if (obj.data.DnsConfig) {
                    reqParams.cfn['DnsConfig'] = {
                        'DnsRecords': obj.data.DnsConfig.DnsRecords,
                        'NamespaceId': obj.data.DnsConfig.NamespaceId,
                        'RoutingPolicy': obj.data.DnsConfig.RoutingPolicy
                    };
                }
                reqParams.cfn['HealthCheckConfig'] = obj.data.HealthCheckConfig;
                reqParams.cfn['HealthCheckCustomConfig'] = obj.data.HealthCheckCustomConfig;

                tracked_resources.push({
                    'logicalId': getResourceName('servicediscovery', obj.id),
                    'region': obj.region,
                    'service': 'servicediscovery',
                    'type': 'AWS::ServiceDiscovery::Service',
                    'options': reqParams
                });
            } else if (obj.type == "servicediscovery.instance") {
                reqParams.cfn['InstanceId'] = obj.data.Id;
                reqParams.cfn['InstanceAttributes'] = obj.data.Attributes;
                reqParams.cfn['ServiceId'] = obj.data.ServiceId;

                tracked_resources.push({
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
                    'logicalId': getResourceName('emr', obj.id),
                    'region': obj.region,
                    'service': 'emr',
                    'type': 'AWS::EMR::SecurityConfiguration',
                    'options': reqParams
                });
            } else if (obj.type == "secretsmanager.secret") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['KmsKeyId'] = obj.data.KmsKeyId;
                reqParams.cfn['Tags'] = obj.data.Tags;
                reqParams.cfn['SecretString'] = obj.data.SecretString;

                /*
                SKIPPED:
                GenerateSecretString: 
                    GenerateSecretString
                */

                tracked_resources.push({
                    'logicalId': getResourceName('secretsmanager', obj.id),
                    'region': obj.region,
                    'service': 'secretsmanager',
                    'type': 'AWS::SecretsManager::Secret',
                    'options': reqParams
                });
            } else if (obj.type == "secretsmanager.rotationschedule") {
                reqParams.cfn['SecretId'] = obj.data.ARN;
                reqParams.cfn['RotationLambdaARN'] = obj.data.RotationLambdaARN;
                reqParams.cfn['RotationRules'] = obj.data.RotationRules;

                tracked_resources.push({
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
                    'logicalId': getResourceName('glue', obj.id),
                    'region': obj.region,
                    'service': 'glue',
                    'type': 'AWS::Glue::DevEndpoint',
                    'options': reqParams
                });
            } else if (obj.type == "cognito.identitypool") {
                reqParams.cfn['IdentityPoolName'] = obj.data.IdentityPoolName;
                reqParams.cfn['AllowUnauthenticatedIdentities'] = obj.data.AllowUnauthenticatedIdentities;
                reqParams.cfn['SupportedLoginProviders'] = obj.data.SupportedLoginProviders;
                reqParams.cfn['DeveloperProviderName'] = obj.data.DeveloperProviderName;
                reqParams.cfn['OpenIdConnectProviderARNs'] = obj.data.OpenIdConnectProviderARNs;
                reqParams.cfn['CognitoIdentityProviders'] = obj.data.CognitoIdentityProviders;
                reqParams.cfn['SamlProviderARNs'] = obj.data.SamlProviderARNs;

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
                    'logicalId': getResourceName('cognito', obj.id),
                    'region': obj.region,
                    'service': 'cognito',
                    'type': 'AWS::Cognito::IdentityPool',
                    'options': reqParams
                });
            } else if (obj.type == "cognito.identitypoolroleattachment") {
                reqParams.cfn['IdentityPoolId'] = obj.data.IdentityPoolId;
                reqParams.cfn['RoleMappings'] = obj.data;
                reqParams.cfn['Roles'] = obj.data.Roles;

                tracked_resources.push({
                    'logicalId': getResourceName('cognito', obj.id),
                    'region': obj.region,
                    'service': 'cognito',
                    'type': 'AWS::Cognito::IdentityPoolRoleAttachment',
                    'options': reqParams
                });
            } else if (obj.type == "cognito.userpool") {
                reqParams.cfn['UserPoolName'] = obj.data.Name;
                reqParams.cfn['Policies'] = obj.data.Policies;
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
                }
                reqParams.cfn['Schema'] = obj.data.SchemaAttributes;
                reqParams.cfn['AutoVerifiedAttributes'] = obj.data.AutoVerifiedAttributes;
                reqParams.cfn['AliasAttributes'] = obj.data.AliasAttributes;
                reqParams.cfn['UsernameAttributes'] = obj.data.UsernameAttributes;
                reqParams.cfn['SmsVerificationMessage'] = obj.data.SmsVerificationMessage;
                reqParams.cfn['EmailVerificationMessage'] = obj.data.EmailVerificationMessage;
                reqParams.cfn['EmailVerificationSubject'] = obj.data.EmailVerificationSubject;
                reqParams.cfn['SmsAuthenticationMessage'] = obj.data.SmsAuthenticationMessage;
                reqParams.cfn['MfaConfiguration'] = obj.data.MfaConfiguration;
                reqParams.cfn['DeviceConfiguration'] = obj.data.DeviceConfiguration;
                reqParams.cfn['EmailConfiguration'] = obj.data.EmailConfiguration;
                reqParams.cfn['SmsConfiguration'] = obj.data.SmsConfiguration;
                reqParams.cfn['AdminCreateUserConfig'] = obj.data.AdminCreateUserConfig;
                reqParams.cfn['UserPoolTags'] = obj.data.UserPoolTags;

                tracked_resources.push({
                    'logicalId': getResourceName('cognito', obj.id),
                    'region': obj.region,
                    'service': 'cognito',
                    'type': 'AWS::Cognito::UserPool',
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
                    'logicalId': getResourceName('cognito', obj.id),
                    'region': obj.region,
                    'service': 'cognito',
                    'type': 'AWS::Cognito::UserPoolUserToGroupAttachment',
                    'options': reqParams
                });
            } else if (obj.type == "cognito.userpoolclient") {
                reqParams.cfn['UserPoolId'] = obj.data.UserPoolId;
                reqParams.cfn['ClientName'] = obj.data.ClientName;
                reqParams.cfn['RefreshTokenValidity'] = obj.data.RefreshTokenValidity;
                reqParams.cfn['ReadAttributes'] = obj.data.ReadAttributes;
                reqParams.cfn['WriteAttributes'] = obj.data.WriteAttributes;
                reqParams.cfn['ExplicitAuthFlows'] = obj.data.ExplicitAuthFlows;
                if (obj.data.ClientSecret && obj.data.ClientSecret.length > 0) {
                    reqParams.cfn['GenerateSecret'] = true;
                }

                tracked_resources.push({
                    'logicalId': getResourceName('cognito', obj.id),
                    'region': obj.region,
                    'service': 'cognito',
                    'type': 'AWS::Cognito::UserPoolClient',
                    'options': reqParams
                });
            } else if (obj.type == "guardduty.member") {
                reqParams.cfn['DetectorId'] = obj.data.DetectorId;
                reqParams.cfn['Email'] = obj.data.Email;
                reqParams.cfn['MemberId'] = obj.data.AccountId;

                /*
                TODO:
                Status: String
                Message: String
                DisableEmailNotification: Boolean
                */

                tracked_resources.push({
                    'logicalId': getResourceName('guardduty', obj.id),
                    'region': obj.region,
                    'service': 'guardduty',
                    'type': 'AWS::GuardDuty::Member',
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
                    'logicalId': getResourceName('guardduty', obj.id),
                    'region': obj.region,
                    'service': 'guardduty',
                    'type': 'AWS::GuardDuty::Filter',
                    'options': reqParams
                });
            } else if (obj.type == "guardduty.ipset") {
                reqParams.cfn['Format'] = obj.data.Format;
                reqParams.cfn['Location'] = obj.data.Location;
                reqParams.cfn['Name'] = obj.data.Name;
                if (obj.data.Status == "ACTIVE") {
                    reqParams.cfn['Activate'] = true;
                } else {
                    reqParams.cfn['Activate'] = false;
                }
                reqParams.cfn['DetectorId'] = obj.data.DetectorId;

                tracked_resources.push({
                    'logicalId': getResourceName('guardduty', obj.id),
                    'region': obj.region,
                    'service': 'guardduty',
                    'type': 'AWS::GuardDuty::IPSet',
                    'options': reqParams
                });
            } else if (obj.type == "guardduty.threatintelset") {
                reqParams.cfn['Format'] = obj.data.Format;
                reqParams.cfn['Location'] = obj.data.Location;
                reqParams.cfn['Name'] = obj.data.Name;
                if (obj.data.Status == "ACTIVE") {
                    reqParams.cfn['Activate'] = true;
                } else {
                    reqParams.cfn['Activate'] = false;
                }
                reqParams.cfn['DetectorId'] = obj.data.DetectorId;

                tracked_resources.push({
                    'logicalId': getResourceName('guardduty', obj.id),
                    'region': obj.region,
                    'service': 'guardduty',
                    'type': 'AWS::GuardDuty::ThreatIntelSet',
                    'options': reqParams
                });
            } else if (obj.type == "guardduty.master") {
                reqParams.cfn['DetectorId'] = obj.data.DetectorId;
                reqParams.cfn['MasterId'] = obj.data.AccountId;
                reqParams.cfn['InvitationId'] = obj.data.InvitationId;

                tracked_resources.push({
                    'logicalId': getResourceName('guardduty', obj.id),
                    'region': obj.region,
                    'service': 'guardduty',
                    'type': 'AWS::GuardDuty::Master',
                    'options': reqParams
                });
            } else if (obj.type == "guardduty.detector") {
                if (obj.data.Status == "ENABLED") {
                    reqParams.cfn['Enable'] = true;
                } else {
                    reqParams.cfn['Enable'] = false;
                }
                reqParams.cfn['FindingPublishingFrequency'] = obj.data.FindingPublishingFrequency;

                tracked_resources.push({
                    'logicalId': getResourceName('guardduty', obj.id),
                    'region': obj.region,
                    'service': 'guardduty',
                    'type': 'AWS::GuardDuty::Detector',
                    'options': reqParams
                });
            } else if (obj.type == "appstream.stackfleetassociation") {
                reqParams.cfn['FleetName'] = obj.data.fleetname;
                reqParams.cfn['StackName'] = obj.data.stackname;

                tracked_resources.push({
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

                tracked_resources.push({
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
                */

                tracked_resources.push({
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
                reqParams.cfn[''] = obj.data;

                /*
                TODO:
                ImageName: String
                */

                tracked_resources.push({
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
                    'logicalId': getResourceName('appstream', obj.id),
                    'region': obj.region,
                    'service': 'appstream',
                    'type': 'AWS::AppStream::StackUserAssociation',
                    'options': reqParams
                });
            } else if (obj.type == "ses.eventdestination") {
                reqParams.cfn['ConfigurationSetName'] = obj.data.ConfigurationSetName;
                reqParams.cfn['EventDestination'] = {
                    'CloudWatchDestination': obj.data.CloudWatchDestination,
                    'Enabled': obj.data.Enabled,
                    'MatchingEventTypes': obj.data.MatchingEventTypes,
                    'Name': obj.data.Name,
                    'KinesisFirehoseDestination': obj.data.KinesisFirehoseDestination,
                };

                tracked_resources.push({
                    'logicalId': getResourceName('ses', obj.id),
                    'region': obj.region,
                    'service': 'ses',
                    'type': 'AWS::SES::ConfigurationSetEventDestination',
                    'options': reqParams
                });
            } else if (obj.type == "ses.configurationset") {
                reqParams.cfn['Name'] = obj.data.ConfigurationSet.Name;

                tracked_resources.push({
                    'logicalId': getResourceName('ses', obj.id),
                    'region': obj.region,
                    'service': 'ses',
                    'type': 'AWS::SES::ConfigurationSet',
                    'options': reqParams
                });
            } else if (obj.type == "ses.receiptfilter") {
                reqParams.cfn['Filter'] = obj.data;

                tracked_resources.push({
                    'logicalId': getResourceName('ses', obj.id),
                    'region': obj.region,
                    'service': 'ses',
                    'type': 'AWS::SES::ReceiptFilter',
                    'options': reqParams
                });
            } else if (obj.type == "ses.receiptrule") {
                reqParams.cfn['After'] = obj.data.After;
                reqParams.cfn['Rule'] = {
                    'ScanEnabled': obj.data.ScanEnabled,
                    'Recipients': obj.data.Recipients,
                    'Actions': obj.data.Actions,
                    'Enabled': obj.data.Enabled,
                    'Name': obj.data.Name,
                    'TlsPolicy': obj.data.TlsPolicy
                }
                reqParams.cfn['RuleSetName'] = obj.data.RuleSetName;

                tracked_resources.push({
                    'logicalId': getResourceName('ses', obj.id),
                    'region': obj.region,
                    'service': 'ses',
                    'type': 'AWS::SES::ReceiptRule',
                    'options': reqParams
                });
            } else if (obj.type == "ses.receiptruleset") {
                reqParams.cfn['RuleSetName'] = obj.data.Name;

                tracked_resources.push({
                    'logicalId': getResourceName('ses', obj.id),
                    'region': obj.region,
                    'service': 'ses',
                    'type': 'AWS::SES::ReceiptRuleSet',
                    'options': reqParams
                });
            } else if (obj.type == "ses.template") {
                reqParams.cfn['Template'] = obj.data.Template;

                tracked_resources.push({
                    'logicalId': getResourceName('ses', obj.id),
                    'region': obj.region,
                    'service': 'ses',
                    'type': 'AWS::SES::Template',
                    'options': reqParams
                });
            } else if (obj.type == "eks.cluster") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.cfn['RoleArn'] = obj.data.roleArn;
                reqParams.cfn['Version'] = obj.data.version;
                if (obj.data.resourcesVpcConfig) {
                    reqParams.cfn['ResourcesVpcConfig'] = {
                        'SecurityGroupIds': obj.data.resourcesVpcConfig.securityGroupIds,
                        'SubnetIds': obj.data.resourcesVpcConfig.subnetIds
                    };
                }

                tracked_resources.push({
                    'logicalId': getResourceName('eks', obj.id),
                    'region': obj.region,
                    'service': 'eks',
                    'type': 'AWS::EKS::Cluster',
                    'options': reqParams
                });
            } else if (obj.type == "iam.accesskey") {
                reqParams.cfn['Status'] = obj.data.Status;
                reqParams.cfn['UserName'] = obj.data.UserName;

                /*
                SKIPPED:
                Serial
                */

                tracked_resources.push({
                    'logicalId': getResourceName('iam', obj.id),
                    'region': obj.region,
                    'service': 'iam',
                    'type': 'AWS::IAM::AccessKey',
                    'options': reqParams
                });
            } else if (obj.type == "iam.policy") {
                reqParams.cfn['PolicyDocument'] = obj.data.document;
                if (obj.data.type == "user") {
                    reqParams.cfn['Users'] = [obj.data.username];
                } else if (obj.data.type == "group") {
                    reqParams.cfn['Groups'] = [obj.data.groupname];
                } else if (obj.data.type == "role") {
                    reqParams.cfn['Roles'] = [obj.data.rolename];
                }
                reqParams.cfn['PolicyName'] = obj.data.policy.PolicyName;

                tracked_resources.push({
                    'logicalId': getResourceName('iam', obj.id),
                    'region': obj.region,
                    'service': 'iam',
                    'type': 'AWS::IAM::Policy',
                    'options': reqParams
                });
            } else if (obj.type == "iam.user") {
                reqParams.cfn['Path'] = obj.data.Path;
                reqParams.cfn['UserName'] = obj.data.UserName;
                if (obj.data.PermissionsBoundary) {
                    reqParams.cfn['PermissionsBoundary'] = obj.data.PermissionsBoundary.PermissionsBoundaryArn;
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
                    'logicalId': getResourceName('iam', obj.id),
                    'region': obj.region,
                    'service': 'iam',
                    'type': 'AWS::IAM::User',
                    'options': reqParams
                });
            } else if (obj.type == "iam.group") {
                reqParams.cfn['Path'] = obj.data.Path;
                reqParams.cfn['GroupName'] = obj.data.GroupName;

                /*
                TODO:
                ManagedPolicyArns: [ String, ... ]
                Policies:
                    - Policies
                */

                tracked_resources.push({
                    'logicalId': getResourceName('iam', obj.id),
                    'region': obj.region,
                    'service': 'iam',
                    'type': 'AWS::IAM::Group',
                    'options': reqParams
                });
            } else if (obj.type == "iam.role") {
                reqParams.cfn['Path'] = obj.data.Path;
                reqParams.cfn['RoleName'] = obj.data.RoleName;
                reqParams.cfn['AssumeRolePolicyDocument'] = obj.data.AssumeRolePolicyDocument;
                reqParams.cfn['MaxSessionDuration'] = obj.data.MaxSessionDuration;
                if (obj.data.PermissionsBoundary) {
                    reqParams.cfn['PermissionsBoundary'] = obj.data.PermissionsBoundary.PermissionsBoundaryArn;
                }

                /*
                TODO:
                ManagedPolicyArns:
                    - String
                Policies:
                    - Policies
                */

                tracked_resources.push({
                    'logicalId': getResourceName('iam', obj.id),
                    'region': obj.region,
                    'service': 'iam',
                    'type': 'AWS::IAM::Role',
                    'options': reqParams
                });
            } else if (obj.type == "iam.managedpolicy") {
                reqParams.cfn['ManagedPolicyName'] = obj.data.PolicyName;
                reqParams.cfn['Path'] = obj.data.Path;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['PolicyDocument'] = obj.data.PolicyDocument;

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
                    'logicalId': getResourceName('iam', obj.id),
                    'region': obj.region,
                    'service': 'iam',
                    'type': 'AWS::IAM::ManagedPolicy',
                    'options': reqParams
                });
            } else if (obj.type == "iam.instanceprofile") {
                reqParams.cfn['Path'] = obj.data.Path;
                reqParams.cfn['InstanceProfileName'] = obj.data.InstanceProfileName;
                if (obj.data.Roles) {
                    reqParams.cfn['Roles'] = [];
                    obj.data.Roles.forEach(role => {
                        reqParams.cfn['Roles'].push(role.Arn);
                    });
                }

                tracked_resources.push({
                    'logicalId': getResourceName('iam', obj.id),
                    'region': obj.region,
                    'service': 'iam',
                    'type': 'AWS::IAM::InstanceProfile',
                    'options': reqParams
                });
            } else if (obj.type == "cloudwatch.rule") {
                reqParams.cfn['Name'] = obj.data.Name;
                reqParams.cfn['Description'] = obj.data.Description;
                reqParams.cfn['EventPattern'] = obj.data.EventPattern;
                reqParams.cfn['ScheduleExpression'] = obj.data.ScheduleExpression;
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
                    'logicalId': getResourceName('cloudwatch', obj.id),
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'type': 'AWS::Events::Rule',
                    'options': reqParams
                });
            } else if (obj.type == "cloudwatch.eventbuspolicy") {
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
                    'logicalId': getResourceName('cloudwatch', obj.id),
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'type': 'AWS::Events::EventBusPolicy',
                    'options': reqParams
                });
            } else if (obj.type == "cloudwatch.destination") {
                reqParams.cfn['DestinationName'] = obj.data.destinationName;
                reqParams.cfn['RoleArn'] = obj.data.roleArn;
                reqParams.cfn['TargetArn'] = obj.data.targetArn;
                reqParams.cfn['DestinationPolicy'] = obj.data.accessPolicy;

                tracked_resources.push({
                    'logicalId': getResourceName('cloudwatch', obj.id),
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'type': 'AWS::Logs::Destination',
                    'options': reqParams
                });
            } else if (obj.type == "cloudwatch.logstream") {
                reqParams.cfn['LogGroupName'] = obj.data.logGroupName;
                reqParams.cfn['LogStreamName'] = obj.data.logStreamName;

                tracked_resources.push({
                    'logicalId': getResourceName('cloudwatch', obj.id),
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'type': 'AWS::Logs::LogStream',
                    'options': reqParams
                });
            } else if (obj.type == "cloudwatch.subscriptionfilter") {
                reqParams.cfn['LogGroupName'] = obj.data.logGroupName;
                reqParams.cfn['FilterPattern'] = obj.data.filterPattern;
                reqParams.cfn['DestinationArn'] = obj.data.destinationArn;
                reqParams.cfn['RoleArn'] = obj.data.roleArn;

                tracked_resources.push({
                    'logicalId': getResourceName('cloudwatch', obj.id),
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'type': 'AWS::Logs::SubscriptionFilter',
                    'options': reqParams
                });
            } else if (obj.type == "cloudwatch.loggroup") {
                reqParams.cfn['LogGroupName'] = obj.data.logGroupName;
                reqParams.cfn['RetentionInDays'] = obj.data.retentionInDays;

                tracked_resources.push({
                    'logicalId': getResourceName('cloudwatch', obj.id),
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'type': 'AWS::Logs::LogGroup',
                    'options': reqParams
                });
            } else if (obj.type == "cloudwatch.metricfilter") {
                reqParams.cfn['FilterPattern'] = obj.data.filterPattern;
                reqParams.cfn['LogGroupName'] = obj.data.logGroupName;
                if (obj.data.metricTransformations) {
                    reqParams.cfn['MetricTransformations'] = [];
                    obj.data.metricTransformations.forEach(metricTransformation => {
                        reqParams.cfn['MetricTransformations'].push({
                            'MetricName': metricTransformation.metricName,
                            'MetricNamespace': metricTransformation.metricNamespace,
                            'MetricValue': metricTransformation.metricValue,
                            'DefaultValue': metricTransformation.defaultValue,
                        });
                    });
                }

                tracked_resources.push({
                    'logicalId': getResourceName('cloudwatch', obj.id),
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'type': 'AWS::Logs::MetricFilter',
                    'options': reqParams
                });
            } else if (obj.type == "cloudwatch.dashboard") {
                reqParams.cfn['DashboardName'] = obj.data.DashboardName;
                reqParams.cfn['DashboardBody'] = obj.data.DashboardBody;

                tracked_resources.push({
                    'logicalId': getResourceName('cloudwatch', obj.id),
                    'region': obj.region,
                    'service': 'cloudwatch',
                    'type': 'AWS::CloudWatch::Dashboard',
                    'options': reqParams
                });
            } else if (obj.type == "ecr.repository") {
                reqParams.cfn['RepositoryName'] = obj.data.repositoryName;
                reqParams.cfn['LifecyclePolicy'] = {
                    'LifecyclePolicyText': obj.data.lifecyclePolicyText,
                    'RegistryId': obj.data.registryId
                };
                reqParams.cfn['RepositoryPolicyText'] = obj.data.policy;

                tracked_resources.push({
                    'logicalId': getResourceName('ecr', obj.id),
                    'region': obj.region,
                    'service': 'ecr',
                    'type': 'AWS::ECR::Repository',
                    'options': reqParams
                });
            } else if (obj.type == "sns.subscription") {
                reqParams.cfn['TopicArn'] = obj.data.TopicArn;
                reqParams.cfn['DeliveryPolicy'] = obj.data.Attributes.DeliveryPolicy;
                reqParams.cfn['FilterPolicy'] = obj.data.Attributes.FilterPolicy;
                reqParams.cfn['Endpoint'] = obj.data.Endpoint;
                reqParams.cfn['Protocol'] = obj.data.Protocol;
                reqParams.cfn['RawMessageDelivery'] = obj.data.Attributes.RawMessageDelivery;
                reqParams.cfn['Region'] = obj.data.TopicArn.split(":")[3];

                tracked_resources.push({
                    'logicalId': getResourceName('sns', obj.id),
                    'region': obj.region,
                    'service': 'sns',
                    'type': 'AWS::SNS::Subscription',
                    'options': reqParams
                });
            } else if (obj.type == "greengrass.connectordefinition") {
                reqParams.cfn['Name'] = obj.data.Name;

                /*
                TODO:
                InitialVersion
                */

                tracked_resources.push({
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
                    'logicalId': getResourceName('greengrass', obj.id),
                    'region': obj.region,
                    'service': 'greengrass',
                    'type': 'AWS::Greengrass::SubscriptionDefinitionVersion',
                    'options': reqParams
                });
            } else if (obj.type == "codepipeline.pipeline") {
                reqParams.cfn['Name'] = obj.data.name;
                reqParams.cfn['RoleArn'] = obj.data.roleArn;
                if (obj.data.artifactStore) {
                    var encryptionKey = null;
                    if (obj.data.artifactStore.encryptionKey) {
                        encryptionKey = {
                            'Id': obj.data.artifactStore.encryptionKey.id,
                            'Type': obj.data.artifactStore.encryptionKey.type
                        };
                    }
                    reqParams.cfn['ArtifactStore'] = {
                        'EncryptionKey': encryptionKey,
                        'Location': obj.data.artifactStore.location,
                        'Type': obj.data.artifactStore.type
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
                        if (stage.actions) {
                            actions = [];
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
                                if (action.outputArtifacts) {
                                    outputArtifacts = [];
                                    outputArtifacts.push({
                                        'Name': action.actionTypeId.name
                                    });
                                }
                                var inputArtifacts = null;
                                if (action.inputArtifacts) {
                                    inputArtifacts = [];
                                    inputArtifacts.push({
                                        'Name': action.actionTypeId.name
                                    });
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
                            });
                        }
                        reqParams.cfn['Stages'].push({
                            'Actions': actions,
                            'Blockers': blockers,
                            'Name': stage.name
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
                    'logicalId': getResourceName('codepipeline', obj.id),
                    'region': obj.region,
                    'service': 'codepipeline',
                    'type': 'AWS::CodePipeline::Pipeline',
                    'options': reqParams
                });
            } else if (obj.type == "codepipeline.webhook") {
                var filters = null;
                if (obj.data.filters) {
                    filters = [];
                    obj.data.filters.forEach(filter => {
                        filters.push({
                            'JsonPath': filter.jsonPath,
                            'MatchEquals': filter.matchEquals
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
                reqParams.cfn['TargetPipeline'] = obj.data.definition.targetPipeline;
                reqParams.cfn['TargetAction'] = obj.data.definition.targetAction;
                reqParams.cfn['Filters'] = filters;
                reqParams.cfn['Authentication'] = obj.data.authentication;

                /*
                TODO:
                TargetPipelineVersion: Integer
                RegisterWithThirdParty: Boolean
                */

                tracked_resources.push({
                    'logicalId': getResourceName('codepipeline', obj.id),
                    'region': obj.region,
                    'service': 'codepipeline',
                    'type': 'AWS::CodePipeline::Webhook',
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
                    'logicalId': getResourceName('dms', obj.id),
                    'region': obj.region,
                    'service': 'dms',
                    'type': 'AWS::DMS::EventSubscription',
                    'options': reqParams
                });
            } else if (obj.type == "ec2.route") {
                reqParams.cfn['DestinationCidrBlock'] = obj.data.DestinationCidrBlock;
                reqParams.cfn['DestinationIpv6CidrBlock'] = obj.data.DestinationIpv6CidrBlock;
                reqParams.cfn['EgressOnlyInternetGatewayId'] = obj.data.EgressOnlyInternetGatewayId;
                reqParams.cfn['GatewayId'] = obj.data.GatewayId;
                reqParams.cfn['InstanceId'] = obj.data.InstanceId;
                reqParams.cfn['NatGatewayId'] = obj.data.NatGatewayId;
                reqParams.cfn['NetworkInterfaceId'] = obj.data.NetworkInterfaceId;
                reqParams.cfn['VpcPeeringConnectionId'] = obj.data.VpcPeeringConnectionId;
                reqParams.cfn['RouteTableId'] = obj.data.RouteTableId;

                tracked_resources.push({
                    'logicalId': getResourceName('ec2', obj.id),
                    'region': obj.region,
                    'service': 'ec2',
                    'type': 'AWS::EC2::Route',
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
                    'logicalId': getResourceName('workspaces', obj.id),
                    'region': obj.region,
                    'service': 'workspaces',
                    'type': 'AWS::WorkSpaces::Workspace',
                    'options': reqParams
                });
            } else if (obj.type == ".") {
                reqParams.cfn[''] = obj.data;

                /*
                TODO:

                */

                tracked_resources.push({
                    'logicalId': getResourceName('', obj.id),
                    'region': obj.region,
                    'service': '',
                    'type': '',
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

    return compileOutputs();
}
