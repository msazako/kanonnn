"use strict"; // Required by Node for ES6

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// Avatar Command
// =================================================================================================

class Avatar extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("Avatar");
        this.description = "I'll link to each mentioned user's avatar.";
        this.usage       = "<mention ...>";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {

        if (message.channel.isPrivate)
            return client.sendMessage(message, "I can't do that in a PM! (I'm sorry ;w;\\)");

        if (message.mentions.length < 1)
            return client.sendMessage(message, "Please mention at least one user!");

        let avatars = message.mentions.map(user => {

            if (user.avatarURL) return `${user.username}'s avatar is: ${user.avatarURL}`;
            else return `${user.username} has no avatar set.`;

        });

        client.sendMessage(message, avatars);

    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = Avatar;
