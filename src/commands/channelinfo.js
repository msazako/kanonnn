"use strict"; // Required by Node for ES6

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// ChannelInfo Command
// =================================================================================================

class ChannelInfo extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("ChannelInfo");
        this.aliases     = ["Channel", "Location", "Where", "WhereAmI"];
        this.description = "I'll tell you about the channel you're using this command in.";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {

        let channel = message.channel;
        let server  = message.channel.server;
        let owner   = message.channel.server.owner;

        if (channel.isPrivate)
            return client.sendMessage(message, "You're in a private message with me, baka!");

        return client.sendMessage(message, [
            "```",
            `Channel: #${channel.name} (id: ${channel.id})`,
            `Server: ${server.name} (id: ${server.id}) (region: ${server.region})`,
            `Owner: ${owner.username} (id: ${owner.id})`,
            `Topic: ${(channel.topic ? channel.topic : "There is no channel topic set.")}`,
            "```"
        ]);

    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = ChannelInfo;
