"use strict"; // Required by Node for ES6

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// Dice Command
// =================================================================================================

class Dice extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("Dice");
        this.aliases     = ["Roll"];
        this.description = "I'll roll a few sided dice for a given number of times."
                         + " All parameters are optional and dropped from the end first."
                         + " (defaults: 1 *dice*, 6 *sides*, 1 *times*)";
        this.usage       = "<dice> <sides> <times>";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {

        let cmd = message.content.substr(config.commands.prefix.length).split(" ")[0].toLowerCase();
        let rickURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        let params = this.getParams(message, config);

        for (let param of params) {

            if (param.toLowerCase() === "rick" && cmd === "roll")
                return client.sendMessage(message, `${rickURL} ( ͡° ͜ʖ ͡°) dank memes`);

            if (isNaN(param))
                return client.sendMessage(message, `"${param}" is not a number!`);

            if (parseInt(param) < 1)
                return client.sendMessage(message, "Parameters must be greater than 0.");

        }

        let roll  = 1;
        let dice  = parseInt(params[0]) || 1;
        let sides = parseInt(params[1]) || 6;
        let times = parseInt(params[2]) || 1;

        for (let i = times; i > 0; i--) {
            for (let j = dice; j > 0; j--) {
                roll += ~~(Math.random() * sides);
            }
        }

        return client.sendMessage(message, [
            `*Rolls ${dice} different ${sides}-sided dice ${times} times...*`,
            `Result: **${roll}**`
        ]);

    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = Dice;
