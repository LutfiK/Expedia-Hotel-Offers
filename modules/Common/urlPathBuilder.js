
var exports = module.exports = {};
const queryString = require('querystring');

exports.generatePath = function (basePath, filter) {
    var path = basePath + queryString.stringify(filter);
    console.log('Path: ' + path);
    return path;
};

