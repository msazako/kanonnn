"use strict"; // Required by Node for ES6

const Duration = require("humanize-duration");
const Request  = require("request");

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// Anime Command
// =================================================================================================

class Anime extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("Anime");
        this.description = "I'll search for an anime title via Hummingbird.";
        this.usage       = "<anime>";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {

        let params = this.getParams(message, config);

        if (params.length < 1)
            return client.sendMessage(message, "Please provide a title to look up.");

        let url = "http://hummingbird.me/api/v1/search/anime?query=" + params.join("%20");

        Request(url, function (error, response, body) {

            if (response.statusCode === 200) {

                body = JSON.parse(body);

                let title          = body[0].title;
                let link           = body[0].url;
                let episode_count  = body[0].episode_count  || 0;
                let episode_length = body[0].episode_length || 0;
                let status         = body[0].status;
                let synopsis       = body[0].synopsis;

                let count = `\n${body.length - 1}`;

                if (body[0].alternate_title && body[0].alternate_title.length != 0)
                    title = body[0].alternate_title;

                if (body.length === 20)
                    count += " (or more) other results not shown.";

                else if (body.length === 1)
                    count = "";

                else count += " other results found and not shown."

                return client.sendMessage(message, [
                    `**Title**: ${title}`,
                    `**Hummingbird Page**: _${link}_`,
                    `**Episode Count**: ${episode_count}`,
                    `**Episode Length**: ${Duration(episode_length * 60 * 1000)}`,
                    `**Airing Status**: ${status}`,
                    "```\n" + synopsis + "\n```" + count
                ]);

            }

        });

    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = Anime;
