"use strict"; // Required by Node for ES6

const Duration = require("humanize-duration");

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// Ping Command
// =================================================================================================

class Ping extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("Ping");
        this.aliases     = ["Pong"];
        this.description = `I'll say "Pong!"`;
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {

        let cmd = message.content.substr(config.commands.prefix.length).split(" ")[0].toLowerCase();
        let response = (cmd === "pong" ? "Ping?" : "Pong!");

        return client.sendMessage(message, response, (error, nMessage) => {

            let diff = Duration(message.timestamp - nMessage.timestamp, { "units" : ["s", "ms"] });

            client.updateMessage(nMessage, `${nMessage.content} *(${diff})*`);

        });

    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = Ping;
