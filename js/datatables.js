var sections = [];

/* ========================================================================== */
// Formatters
/* ========================================================================== */

function textFormatter(data) {
    return data;
}

function primaryFieldFormatter(data, row) {
    if (row.f2link) {
        return "<a href=\"" + row.f2link + "\" target=\"_blank\">" + data + "</a>";
    }

    return data;
}

function dateFormatter(data) {
    if (data) {
        if (typeof data == "string") {
            parseddate = Date.parse(data);
            if (isNaN(parseddate)) {
                return data;
            }
            data = new Date(parseddate);
        }
        if (!data instanceof Date) {
            return data;
        }

        var seconds = Math.floor((new Date() - data) / 1000);
        var interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes ago";
        }
        if (seconds > 0) {
            return Math.floor(seconds) + " seconds ago";
        }
        return "In the future";
    }

    return data;
}

function tickFormatter(data) {
    if (data) {
        return `<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>`
    }

    return "";
}

function primaryTextFormatter(data, row) {
    var exists = false;
    output_objects.forEach(output_object => { // check if already added
        if (output_object.id == row.f2id && output_object.region == row.f2region && output_object.type == row.f2type) {
            exists = true;
        }
    });

    if (exists) {
        return data + "&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-sm btn-default-outline\">Added <i class=\"fa fa-times\"></i></button>";
    }

    return data;
}

function detailFormatter(row, data) {
    var ret = recursivePrettyPrintMap(data['f2data'], 0)

    if (ret && ret.length > 6) {
        ret = ret.substring(6);
    }

    return `<div class="f2detailformatter">${ret}</div>`;
}

function recursivePrettyPrintMap(param, spacing) {
    var paramitems = [];

    if (param === undefined || param === null || (Array.isArray(param) && param.length == 0))
        return undefined;
    if (typeof param == "boolean") {
        if (param)
            return 'true';
        return 'false';
    }
    if (typeof param == "number") {
        return param;
    }
    if (typeof param == "string") {
        if (param.startsWith("!Ref ") || param.startsWith("!GetAtt ")) {
            return undefined;
        }

        return param.replace(/\</g, "&lt;"); // TODO: Better sanitization here
    }
    if (Array.isArray(param)) {
        if (param.length == 0) {
            return '[]';
        }

        param.forEach(paramitem => {
            paramitems.push(recursivePrettyPrintMap(paramitem, spacing + 4));
        });

        return `<br />
` + '&nbsp;'.repeat(spacing + 4) + "<b>-</b> " + paramitems.join(`<br />
` + '&nbsp;'.repeat(spacing + 4) + "<b>-</b> ");
    }
    if (typeof param == "object") {
        if (Object.keys(param).length === 0 && param.constructor === Object) {
            return "&lt;empty object&gt;";
        }

        Object.keys(param).forEach(function (key) {
            var subvalue = recursivePrettyPrintMap(param[key], spacing + 4);

            if (subvalue !== undefined) {
                paramitems.push(`<b>${key}:</b> ${subvalue}`);
            }
        });

        return `<br />
` + '&nbsp;'.repeat(spacing + 4) + paramitems.join(`<br />
` + '&nbsp;'.repeat(spacing + 4));
    }

    return undefined;
}

function byteSizeFormatter(data) {
    var bytes = parseInt(data);

    if (bytes < 1024) {
        return bytes + " bytes";
    } else if (bytes < 1024 * 1024) {
        return (bytes / 1024).toFixed(1) + " kB";
    } else if (bytes < 1024 * 1024 * 1024) {
        return (bytes / 1024 / 1024).toFixed(1) + " MB";
    }

    return data;
}

function timeAgoFormatter(data) {
    const NOW = new Date();
    const times = [["second", 1], ["minute", 60], ["hour", 3600], ["day", 86400], ["week", 604800], ["month", 2592000], ["year", 31536000], ["", Infinity]]

    var date = Date.parse(data);

    var diff = Math.round((NOW - date) / 1000)
    for (var t = 0; t < times.length; t++) {
        if (diff < times[t][1]) {
            if (t == 0) {
                return "Just now"
            } else {
                diff = Math.round(diff / times[t - 1][1])
                return diff + " " + times[t - 1][0] + (diff == 1 ? " ago" : "s ago")
            }
        }
    }
}

function lambdaRuntimeFormatter(data) {
    var runtimeMappings = {
        'nodejs14.x': 'Node.js 14',
        'nodejs12.x': 'Node.js 12',
        'nodejs10.x': 'Node.js 10',
        'nodejs8.10': 'Node.js 8.10',
        'nodejs6.10': 'Node.js 6.10',
        'python3.6': 'Python 3.6',
        'python3.7': 'Python 3.7',
        'python3.8': 'Python 3.8',
        'python2.7': 'Python 2.7',
        'ruby2.5': 'Ruby 2.5',
        'java8': 'Java 8',
        'go1.x': 'Go 1.x',
        'dotnetcore2.1': '.NET Core 2.1',
        'dotnetcore2.0': '.NET Core 2.0',
        'dotnetcore1.0': '.NET Core 1.0',
        'provided': 'Custom Runtime'
    }

    if (runtimeMappings[data]) {
        return runtimeMappings[data];
    }

    return data;
}

/* ========================================================================== */
// SDK Helpers
/* ========================================================================== */

function sdkcallwaiter(svc, method, params1, params2) {
    return new Promise(function (resolve, reject) {
        var service = new _AWS[svc]({ region: region });

        service[method].call(service, params1, params2, async function (err, data) {
            resolve();
        });
    });
}

function sdkcall(svc, method, params, alert_on_errors, backoff) {
    return new Promise(function (resolve, reject) {
        var service = new AWS[svc]({ region: region, customUserAgent: 'former2/latest' });
        if (svc == "GlobalAccelerator") {
            service = new AWS[svc]({ region: 'us-west-2', customUserAgent: 'former2/latest' });
        } else if (svc == "CostExplorer") {
            service = new AWS[svc]({ region: 'us-east-1', customUserAgent: 'former2/latest' });
        }

        service[method].call(service, params, async function (err, data) {
            if (err) {
                if (err.code == "TooManyRequestsException" || err.message == "Too Many Requests" || err.code == "ThrottlingException" || err.message == "Rate exceeded" || err.code == "TimeoutError" || err.code == "RequestLimitExceeded") {
                    if (backoff) {
                        f2log("Too many requests for " + svc + "." + method + ", sleeping for " + backoff + "ms");
                        await new Promise(resolve => setTimeout(resolve, backoff));
                        backoff *= 2;
                        if (backoff > 120000) {
                            reject(data);
                        }
                    } else {
                        f2log("Too many requests for " + svc + "." + method + ", sleeping for 500ms");
                        await new Promise(resolve => setTimeout(resolve, 500));
                        backoff = 500 + Math.floor(Math.random() * 500);
                    }
                    sdkcall(svc, method, params, alert_on_errors, backoff).then(newdata => {
                        resolve(newdata);
                    }, data => {
                        reject(data);
                    });
                } else {
                    if (err.code == "NetworkingError") {
                        f2log("Skipping " + svc + "." + method + " NetworkingError");
                    } else if (err.code == "AccessDeniedException") {
                        f2log("Skipping " + svc + "." + method + " AccessDeniedException");
                    } else if (err.code == "UnknownError" && svc == "MediaStore") {
                        f2log("Skipping " + svc + "." + method + " UnknownError");
                    } else if (err.code == "ForbiddenException" && svc == "RoboMaker") {
                        f2log("Skipping " + svc + "." + method + " ForbiddenException");
                    } else if (err.code == "AccessDeniedException" && svc == "FSx") {
                        f2log("Skipping " + svc + "." + method + " AccessDeniedException");
                    } else if (alert_on_errors) {
                        f2log("Error calling " + svc + "." + method + ". " + (err.message || JSON.stringify(err)));
                        f2trace(err);
                        
                        if (err.message) {
                            $.notify({
                                icon: 'font-icon font-icon-warning',
                                title: '<strong>Error calling ' + svc + '.' + method + '</strong>',
                                message: err.message
                            }, {
                                type: 'danger'
                            });
                        } else if (err.retryDelay) {
                            $.notify({
                                icon: 'font-icon font-icon-warning',
                                title: '<strong>Error calling ' + svc + '.' + method + '</strong>',
                                message: 'Credentials may not be correctly configured'
                            }, {
                                type: 'danger'
                            });
                        } else {
                            $.notify({
                                icon: 'font-icon font-icon-warning',
                                title: '<strong>Error calling ' + svc + '.' + method + '</strong>',
                                message: JSON.stringify(err)
                            }, {
                                type: 'danger'
                            });
                        }
                    }

                    reject(data);
                }
            } else {
                if (!data || Object.keys(data).length === 0) {
                    reject(data);
                    return;
                }
                
                // https://github.com/iann0036/aws-pagination-rules
                if (svc == "CloudWatchLogs" && method == "describeLogStreams") {
                    resolve(data);
                } else if (data.NextToken) {
                    params['NextToken'] = data.NextToken;
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (data.nextToken) {
                    params['nextToken'] = data.nextToken;
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (data.NextMarker) {
                    if (["WAF", "WAFRegional", "WAFV2"].includes(svc)) {
                        params['NextMarker'] = data.NextMarker;
                    } else {
                        params['Marker'] = data.NextMarker;
                    }
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (data.NextPageMarker) { // Route53Domains
                    params['Marker'] = data.NextPageMarker;
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (data.Marker && ![
                    "WAF",
                    "WAFRegional",
                    "WAFV2",
                    "Route53",
                    "EFS",
                    "ELB",
                    "ELBv2",
                    "KMS",
                    "Lambda"
                ].includes(svc)) {
                    if (svc == "Glacier") {
                        params['marker'] = data.Marker;
                    } else {
                        params['Marker'] = data.Marker;
                    }

                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (data.NextPageToken) {
                    if (svc == "CostExplorer") {
                        params['NextPageToken'] = data.NextPageToken;
                    } else {
                        params['PageToken'] = data.NextPageToken;
                    }
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (data.NextContinuationToken) { // S3
                    params['ContinuationToken'] = data.NextContinuationToken;
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (data.PaginationToken) { // ResourceGroupsTaggingAPI
                    params['PaginationToken'] = data.PaginationToken;
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (data.nextMarker) { // Iot
                    params['marker'] = data.nextMarker;
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (data.nextPageToken) {
                    if (svc == "SWF") {
                        params['nextPageToken'] = data.nextPageToken;
                    } else {
                        params['pageToken'] = data.nextPageToken; // Lightsail
                    }
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (data.marker) { // DataPipeline
                    params['marker'] = data.marker;
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (data.position && svc == "APIGateway") {
                    params['position'] = data.position;
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (svc == "CloudFront" && typeof data == "object" && Object.keys(data).length && data[Object.keys(data)[0]] && data[Object.keys(data)[0]]['NextMarker']) {
                    params['Marker'] = data[Object.keys(data)[0]]['NextMarker'];
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (svc == "Pinpoint" && typeof data == "object" && Object.keys(data).length && data[Object.keys(data)[0]] && data[Object.keys(data)[0]]['NextToken']) {
                    params['Token'] = data[Object.keys(data)[0]]['NextToken'];
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (svc == "DynamoDB" && method == "listGlobalTables" && data.LastEvaluatedGlobalTableName) {
                    params['ExclusiveStartGlobalTableName'] = data.LastEvaluatedTableName;
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (svc == "DynamoDB" && method == "listTables" && data.LastEvaluatedTableName) {
                    params['ExclusiveStartTableName'] = data.LastEvaluatedTableName;
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (svc == "DynamoDBStreams" && method == "listStreams" && data.LastEvaluatedStreamArn) {
                    params['ExclusiveStartTableName'] = data.LastEvaluatedStreamArn;
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (svc == "Firehose" && method == "listDeliveryStreams" && data.DeliveryStreamNames && data.DeliveryStreamNames.length) {
                    params['ExclusiveStartDeliveryStreamName'] = data.DeliveryStreamNames[data.DeliveryStreamNames.length - 1];
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (svc == "Kinesis" && method == "listStreams" && data.StreamNames && data.StreamNames.length) {
                    params['ExclusiveStartStreamName'] = data.StreamNames[data.StreamNames.length - 1];
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else if (svc == "KinesisAnalytics" && method == "listApplications" && data.ApplicationSummaries && data.ApplicationSummaries.length) {
                    params['ExclusiveStartApplicationName'] = data.ApplicationSummaries[data.ApplicationSummaries.length - 1].ApplicationName;
                    sdkcall(svc, method, params, alert_on_errors).then(newdata => {
                        var mergeddata = deepmerge.all([data, newdata]);

                        resolve(mergeddata);
                    }, data => {
                        reject(data);
                    });
                } else {
                    resolve(data);
                }
            }
        });
    });
}

// Service-specific mappings are now defined in services/
