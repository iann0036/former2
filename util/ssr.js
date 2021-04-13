const express = require('express')
const request = require('request')
const AWS = require('aws-sdk')

let app = express()
app.get('/', (req, res) => { 
    res.send(JSON.stringify(res))
})
app.listen(3001);
