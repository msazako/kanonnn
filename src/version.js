"use strict"; // Required by Node for ES6

const Request = require("request");
const SemVer  = require("semver");

var githubURL = "https://raw.githubusercontent.com/TehSeph/Neko.js/master/package.json";

exports.current = SemVer.valid(require("../package.json").version);

exports.versionCheck = function(callback) {

    Request(githubURL, (error, response, body) => {

        let latest = "UNKNOWN";

        if (response.statusCode === 200)
            latest = SemVer.valid(JSON.parse(body).version);

        return callback(error, exports.current, latest);

    });

}
