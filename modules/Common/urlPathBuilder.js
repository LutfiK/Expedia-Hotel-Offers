
var exports = module.exports = {};
const queryString = require('querystring');

exports.generatePath = function (basePath, filter) {
    var path = basePath + queryString.stringify(filter);
    return path;
};

