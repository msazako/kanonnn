"use strict"; // Required by Node for ES6

const Request   = require("request");
const XmlParser = require("xml2js");

// =================================================================================================
// Post Count
// =================================================================================================

exports.getPostCount = function(url, callback) {

    Request(url, (error, response, body) => {

        if (response.statusCode == 200) {

            XmlParser.parseString(body, (error, result) => {

                if (result) return callback(null, result.posts.$.count);

            });

        }

    });

}

// =================================================================================================
// Random Post
// =================================================================================================

exports.getRandomPost = function(url, md5index, count, callback) {

    let random = ~~((Math.random() * (count - 1)) + 1);

    Request(url + random, (error, response, body) => {

        if (response.statusCode == 200) {

            XmlParser.parseString(body, (error, result) => {

                if (result) {

                    let id = result.posts.post[0].$.id;

                    let file_url  = result.posts.post[0].$.file_url;
                    file_url = file_url.split(".");

                    let extension = "." + file_url.pop();

                    file_url = file_url.join(".").split("/").slice(0, md5index);
                    file_url = file_url.join("/") + extension;

                    return callback(null, id, file_url);

                }

            });

        }

    });

}
