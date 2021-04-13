const express = require('express')
const request = require('request')
const AWS = require('aws-sdk')

let app = express()
app.use(express.json())

app.post('/', (req, res) => {
    if (request.action == "configUpdate") {
        AWS.config.update(request.obj);

        res.send(JSON.stringify({
            'success': true,
            'data': {}
        }));
    } else if (request.action == "serviceAction") {
        try {
            var svc = new AWS[request.service.name](request.service.properties);

            svc[request.service_action](request.params, function(err, data) {
                if (err) {
                    res.send(JSON.stringify({
                        'success': false,
                        'error': err,
                        'data': data
                    }));
                } else {
                    res.send(JSON.stringify({
                        'success': true,
                        'data': data
                    }));
                }
            });
        } catch(err) {
            res.send(JSON.stringify({
                'success': false,
                'error': `The call to the SDK failed (${request.service.name}.${request.service_action}).`,
                'data': null
            }));
        }
    } else {
        console.log("Got unknown request");
        console.dir(request);
    }
})
app.listen(3001);
