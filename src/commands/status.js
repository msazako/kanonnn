"use strict"; // Required by Node for ES6

const Duration = require("humanize-duration");

const Command = require(__dirname + "/../commands.js").Command;
const Version = require(__dirname + "/../version.js");

// =================================================================================================
// Status Command
// =================================================================================================

class Status extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("Status");
        this.description = "I'll tell you some useful stats about myself.";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {

        let servers = client.servers.length;
        servers += (client.servers.length != 1 ? " servers" : " server");

        let channels = client.channels.length;
        channels += (client.channels.length != 1 ? " channels" : " channel");

        let users = client.users.length;
        users += (client.users.length != 1 ? " users" : " user");

        Version.versionCheck((error, current, latest) => {

            return client.sendMessage(message, [
                "```",
                `Connection: ${servers}, ${channels}, and ${users}`,
                `Uptime: ${Duration(client.uptime)}`,
                `Version: ${current} (current), ${latest} (latest)`,
                "```"
            ]);

        });

    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = Status;
