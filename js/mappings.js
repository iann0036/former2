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
            if (subvalue !== undefined) {
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
            return "!Ref \"AWS::NoValue\"";
        }

        Object.keys(param).forEach(function (key) {
            var subvalue = processCfnParameter(param[key], spacing + 4, index);
            if (subvalue !== undefined) {
                paramitems.push(key + ": " + subvalue);
            }
        });

        if (paramitems.length < 1) {
            return "!Ref \"AWS::NoValue\"";
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
            if (item !== undefined) {
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
            if (item !== undefined) {
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
            if (item !== undefined) {
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
                if (item !== undefined) {
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
            if (item !== undefined) {
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
            if (item !== undefined) {
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
            if (item !== undefined) {
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
            if (item !== undefined) {
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
            if (item !== undefined) {
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
            if (item !== undefined) {
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
            if (item !== undefined) {
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
            if (options[option] !== undefined && options[option] !== null) {
                var optionvalue = processBoto3Parameter(options[option], 4);
                params += `
    ${option}=${optionvalue},`;
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
            if (options[option] !== undefined && options[option] !== null) {
                var optionvalue = processGoParameter(mappedservice, option, options[option], 8);
                params += `
        ${option}: ${optionvalue},`;
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
            if (options[option] !== undefined && options[option] !== null) {
                var optionvalue = processJsParameter(options[option], 4);
                params += `
    ${option}: ${optionvalue},`;
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
            if (options[option] !== undefined && options[option] !== null) {
                var optionvalue = processTroposphereParameter(options[option], 4, troposervice + "." + option, index);
                params += `,
    ${option}=${optionvalue}`;
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
            if (options[option] !== undefined && options[option] !== null) {
                var optionvalue = processCdktsParameter(options[option], 12, index);
                params += `
            ${lcfirststr(option)}: ${optionvalue},`;
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
                var optionvalue = processCfnParameter(options[option], 12, index);

                if (optionvalue !== undefined) {
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
            if (options[option] !== undefined && options[option] !== null) {
                if (Array.isArray(options[option]) && typeof options[option][0] === 'object') {
                    for (var i=0; i<options[option].length; i++) {
                        var optionvalue = processTfParameter(options[option][i], 4, index);
                        if (optionvalue[0] == '{') {
                            params += `
    ${option} ${optionvalue}
`;
                        } else {
                            params += `
    ${option} = ${optionvalue}`;
                        }

                    }
                } else {
                    var optionvalue = processTfParameter(options[option], 4, index);
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
            if (options[option] !== undefined) {
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
            'boto3': '# No resources created',
            'go': '// No resources created',
            'cfn': '# No resources created',
            'tf': '# No resources created',
            'cli': '# No resources created',
            'js': '// No resources created',
            'cdkts': '// No resources created',
            'iam': '// No resources created',
            'troposphere': '# No resources created'
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
        'cfn': `${!has_cfn ? '# No resources created' : `AWSTemplateFormatVersion: "2010-09-09"
Metadata:
    Generator: "former2"
Description: ""
Resources:
`}`,
        'tf': `${!has_tf ? '# No resources created' : `# https://www.terraform.io/downloads.html

provider "aws" {
    region = "${tracked_resources[0].region}"
}
`}`,
        'cli': `# pip install awscli --upgrade --user

`,
        'js': `// npm install aws-sdk

var AWS = require('aws-sdk');`,
        'cdkts': `${!has_cfn ? '// No resources created' : `// npm i -g aws-cdk

${services.cdkts.map(service => `import ${service} = require('@aws-cdk/aws-${service}');`).join(`
`)}
import cdk = require('@aws-cdk/cdk');

class MyStack extends cdk.Stack {
    constructor(parent: cdk.App, name: string, props?: cdk.StackProps) {
        super(parent, name, props);

`}`,
        'iam': null,
        'troposphere': `${!has_cfn ? '# No resources created' : `# pip install troposphere

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
            } else if (obj.type == "autoscaling.launchconfiguration") {
                reqParams.cfn['LaunchConfigurationName'] = obj.data.LaunchConfigurationName;
                reqParams.cfn['ImageId'] = obj.data.ImageId;
                reqParams.cfn['KeyName'] = obj.data.KeyName;
                reqParams.cfn['SecurityGroups'] = obj.data.SecurityGroups;
                reqParams.cfn['ClassicLinkVPCSecurityGroups'] = obj.data.ClassicLinkVPCSecurityGroups;
                reqParams.cfn['UserData'] = obj.data.UserData;
                reqParams.cfn['InstanceType'] = obj.data.InstanceType;
                reqParams.cfn['KernelId'] = obj.data.KernelId;
                reqParams.cfn['RamDiskId'] = obj.data.RamDiskId;
                reqParams.cfn['InstanceMonitoring'] = obj.data.InstanceMonitoring.Enabled;
                reqParams.cfn['EbsOptimized'] = obj.data.EbsOptimized;
                reqParams.cfn['IamInstanceProfile'] = obj.data.IamInstanceProfile;
                reqParams.cfn['PlacementTenancy'] = obj.data.PlacementTenancy;
                reqParams.cfn['SpotPrice'] = obj.data.SpotPrice;
                reqParams.cfn['ClassicLinkVPCId'] = obj.data.ClassicLinkVPCId;
                reqParams.cfn['BlockDeviceMappings'] = obj.data.BlockDeviceMappings;

                /*
                TODO:
                AssociatePublicIpAddress: Boolean
                InstanceId: String
                */

                tracked_resources.push({
                    'logicalId': getResourceName('autoscaling', obj.id),
                    'region': obj.region,
                    'service': 'autoscaling',
                    'type': 'AWS::AutoScaling::LaunchConfiguration',
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
                    'type': 'AWS::ElasticBeanstalk::ApplicationVersion',
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
                reqParams.cfn['PublicIpv4Pool'] = obj.data.PublicIpv4Pool;

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
                obj.data.Description.forEach(subnet => {
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
                obj.data.Description.forEach(subnet => {
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
                obj.data.Description.forEach(subnet => {
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
                    reqParams.cfn.DistributionConfig['Origins'].push({
                        'CustomOriginConfig': {
                            'HTTPPort': origin.CustomOriginConfig.HTTPPort,
                            'HTTPSPort': origin.CustomOriginConfig.HTTPSPort,
                            'OriginKeepaliveTimeout': origin.CustomOriginConfig.OriginKeepaliveTimeout,
                            'OriginProtocolPolicy': origin.CustomOriginConfig.OriginProtocolPolicy,
                            'OriginReadTimeout': origin.CustomOriginConfig.OriginReadTimeout,
                            'OriginSSLProtocols': origin.CustomOriginConfig.OriginSslProtocols.Items
                        },
                        'DomainName': origin.DomainName,
                        'Id': origin.Id,
                        'OriginCustomHeaders': origin.CustomHeaders.Items,
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
                reqParams.cfn.DistributionConfig['DefaultCacheBehavior'] = {
                    'AllowedMethods': obj.data.DefaultCacheBehavior.AllowedMethods.Items,
                    'CachedMethods': obj.data.DefaultCacheBehavior.AllowedMethods.CachedMethods.Items,
                    'Compress': obj.data.DefaultCacheBehavior.Compress,
                    'DefaultTTL': obj.data.DefaultCacheBehavior.DefaultTTL,
                    'FieldLevelEncryptionId': obj.data.DefaultCacheBehavior.FieldLevelEncryptionId,
                    'ForwardedValues': {
                        'Cookies': {
                            'Forward': obj.data.DefaultCacheBehavior.ForwardedValues.Cookies.Forward,
                            'WhitelistedNames': obj.data.DefaultCacheBehavior.ForwardedValues.Cookies.WhitelistedNames.Items
                        },
                        'Headers': obj.data.DefaultCacheBehavior.ForwardedValues.Headers.Items,
                        'QueryString': obj.data.DefaultCacheBehavior.ForwardedValues.QueryString,
                        'QueryStringCacheKeys': obj.data.DefaultCacheBehavior.ForwardedValues.QueryStringCacheKeys.Items
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
                        reqParams.cfn.DistributionConfig['CacheBehaviors'].push({
                            'AllowedMethods': cacheBehaviour.AllowedMethods.Items,
                            'CachedMethods': cacheBehaviour.AllowedMethods.CachedMethods.Items,
                            'Compress': cacheBehaviour.Compress,
                            'DefaultTTL': cacheBehaviour.DefaultTTL,
                            'FieldLevelEncryptionId': cacheBehaviour.FieldLevelEncryptionId,
                            'ForwardedValues': {
                                'Cookies': {
                                    'Forward': cacheBehaviour.ForwardedValues.Cookies.Forward,
                                    'WhitelistedNames': cacheBehaviour.ForwardedValues.Cookies.WhitelistedNames.Items
                                },
                                'Headers': cacheBehaviour.ForwardedValues.Headers.Items,
                                'QueryString': cacheBehaviour.ForwardedValues.QueryString,
                                'QueryStringCacheKeys': cacheBehaviour.ForwardedValues.QueryStringCacheKeys.Items
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
                reqParams.cfn['BillingMode'] = obj.data.BillingMode;
                reqParams.cfn['TableName'] = obj.data.TableName;
                reqParams.cfn['KeySchema'] = obj.data.KeySchema;
                reqParams.cfn['ProvisionedThroughput'] = {
                    'ReadCapacityUnits': obj.data.ProvisionedThroughput.ReadCapacityUnits,
                    'WriteCapacityUnits': obj.data.ProvisionedThroughput.WriteCapacityUnits
                };
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
                reqParams.cfn['SnsTopicName'] = obj.data.SnsTopicARN.split(":").pop();
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
                reqParams.cfn['UserData'] = obj.data.UserData;
                reqParams.cfn['InstanceType'] = obj.data.InstanceType;
                reqParams.cfn['KernelId'] = obj.data.KernelId;
                reqParams.cfn['RamDiskId'] = obj.data.RamdiskId;
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
                    'type': 'AWS::RDS::DBSecurityGroup',
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
