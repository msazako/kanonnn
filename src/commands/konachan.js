"use strict"; // Required by Node for ES6

const Command    = require(__dirname + "/../commands.js").Command;
const ImageBoard = require(__dirname + "/../imageboard.js");

var chan = [
    "http://konachan.com/post/show/",
    "http://konachan.com/post.xml?tags=",
    "&limit=1&page=",
    5
];

// =================================================================================================
// KonaChan Command
// =================================================================================================

class KonaChan extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("KonaChan");
        this.aliases     = ["Kona"];
        this.description = "I'll find a random image from KonaChan. (Tags are optional.)";
        this.nsfw        = true;
        this.usage       = "<tag ...>";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {

        let params = this.getParams(message, config);
        let url = chan[1] + encodeURI(params.join("+"));

        ImageBoard.getPostCount(url, (error, count) => {

            if (count < 1) {

                return client.sendMessage(message, [
                    "I couldn't find any posts with the following tags:",
                    "```\n" + params.join(", ") + "\n```"
                ]);

            } else {

                ImageBoard.getRandomPost(url + chan[2], chan[3], count, (error, id, image) => {

                    if (id && image) {

                        return client.sendMessage(message, [
                            `Post: _${chan[0] + id}_`,
                            `Image: _ ${image} _`
                        ]);

                    }

                });

            }

        });

    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = KonaChan;
