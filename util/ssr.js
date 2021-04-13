const express = require('express')
const request = require('request')
const AWS = require('aws-sdk')

let app = express()
app.use(express.json())

app.post('/', (req, res) => {
    if (req.body.action == "ping") { 
        res.send(JSON.stringify({
            'success': true,
            'data': {}
        }));
    } else if (req.body.action == "configUpdate") {
        delete req.body.obj.credentials;

        AWS.config.update(req.body.obj);

        res.send(JSON.stringify({
            'success': true,
            'data': {}
        }));
    } else if (req.body.action == "serviceAction") {
        try {
            var svc = new AWS[req.body.service.name](req.body.service.properties);

            svc[req.body.service_action](req.body.params, function(err, data) {
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
                'error': `The call to the SDK failed (${req.body.service.name}.${req.body.service_action}).`,
                'data': null
            }));
        }
    } else {
        console.log("Got unknown request");
        console.dir(req.body);
    }
})
app.listen(3001);
