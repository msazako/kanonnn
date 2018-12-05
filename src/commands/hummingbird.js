"use strict"; // Required by Node for ES6

const Duration = require("humanize-duration");
const Request  = require("request");

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// Hummingbird Command
// =================================================================================================

class Hummingbird extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("Hummingbird");
        this.aliases     = ["HB", "HBInfo"];
        this.description = "I'll tell you about the Hummingbird account of the provided username.";
        this.usage       = "<username>";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {

        let params = this.getParams(message, config);

        if (params.length < 1)
            return client.sendMessage(message, "Please provide a username to look up.");

        let url = "http://hummingbird.me/api/v1/users/" + params[0];

        Request(url, function (error, response, body) {

            if (response.statusCode === 200) {

                body = JSON.parse(body);

                let username    = body.name;
                let avatar      = body.avatar;
                let waifuPrefix = body.waifu_or_husbando;
                let waifu       = body.waifu;
                let bio         = body.bio;
                let location    = body.location;
                let website     = body.website;
                let animeTime   = body.life_spent_on_anime;

                return client.sendMessage(message, [
                    `**Hummingbird Page**: _http://hummingbird.me/users/${username}_`,
                    `**Avatar**:_ ${avatar} _`,
                    `**${waifuPrefix}**: ${waifu}`,
                    `**Bio**: ${bio}`,
                    `**Location**: ${location}`,
                    `**Website**: _${website}_`,
                    `**Life Wasted on Anime**: ${Duration(animeTime * 60 * 1000)}`
                ]);

            }

        });

    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = Hummingbird;
