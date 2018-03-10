
var exports = module.exports = {};
const https = require("https");
const queryString = require('querystring');


exports.getJSON = function (url, path, cb) {
    console.log('Searching offers..');
    var buffer = '';
    var result;

    var options = {
        host: url,
        path: path,
        method: 'GET'
    };


    https.request(options, function (res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            buffer += chunk;
        });

        res.on('end', function () {
            var result = JSON.parse(buffer);
            cb(null, result);
        });

        res.on('error', cb);

    })
        .on('error', cb)
        .end();
};

