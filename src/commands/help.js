"use strict"; // Required by Node for ES6

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// Help Command
// =================================================================================================

class Help extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("Help");
        this.aliases     = ["Command", "Commands"];
        this.description = "I'll give help for any commands. (Leave empty for a list of commands.)";
        this.usage       = "<command ...>";
    }

    // -- Command Parser ---------------------------------------------------------------------------
    getCommand(param, commands) {

        param = param.toLowerCase();

        for (let i in commands) {

            let command = commands[i];

            if (command.name.toLowerCase() === param) return command;
            if (command.aliases.toString().toLowerCase().indexOf(param) !== -1) return command;

        }

        return false;

    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {

        let commands = require(__dirname + "/../commands.js").commands;
        let params = this.getParams(message, config);

        if (params.length) {

            let help = [];
            let notfound = false;

            params.forEach(param => {

                let command = this.getCommand(param, commands);

                if (!command) {
                    notfound = true;
                }

                else {

                    let aliases = command.aliases.join(", ");
                    let cmd = config.commands.prefix + command.name.toLowerCase();

                    help = help.concat([
                        `**${command.name + (aliases ? " (" + aliases + ")" : "")} Command:**`,
                        "```",
                        `Usage: ${cmd} ${command.usage}`,
                        command.description,
                        "```"
                    ]);

                }

            });

            if (notfound) {
                help.push("Some of the requested commands could not be found.");
            }

            return client.sendMessage(message, help);

        }

        else {

            if (!message.channel.isPrivate)
                client.reply(message, "I've sent you a private message with a list of commands.");

            return client.sendMessage(message.author, [
                "**Available Commands:**",
                "```",
                Object.keys(commands).join(", "),
                "```",
                "Type **" + config.commands.prefix + "help command** for more detailed information."
            ]);

        }

    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = Help;
