"use strict"; // Required by Node for ES6

const RequireDirectory = require('require-directory');

// =================================================================================================
// Command Base Class
// =================================================================================================

exports.Command = class Command {

    constructor(name) {

        if (!name) throw new Error("Commands must have a name!");
        this.name = name;

        this.aliases = [];
        this.description = "Command not configured properly.";
        this.nsfw = false;
        this.usage = "";

    }

    execute(client, message, config) {
        return client.sendMessage(message, "Command not configured properly.");
    }

    getParams(message, config) {
        message.content = message.content.substr(config.commands.prefix.length);
        return message.content.split(" ").slice(1);
    }

}

// object containing all available commands (leave after "Command" since all commands extend it)
exports.commands = RequireDirectory(module, __dirname + "/commands", { visit: v => new v() });

// =================================================================================================
// Command Parser
// =================================================================================================

exports.parse = function(client, message, config) {

    if (message.content.indexOf(config.commands.prefix) === 0) {

        let cmd = message.content.substr(config.commands.prefix.length).split(" ")[0].toLowerCase();

        for (let i in exports.commands) {

            let command = exports.commands[i];

            if (command.name.toLowerCase() === cmd) return command;
            if (command.aliases.toString().toLowerCase().indexOf(cmd) !== -1) return command;

        }

    }

    return false;

}
