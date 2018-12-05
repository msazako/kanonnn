"use strict"; // Required by Node for ES6

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// Random Command
// =================================================================================================

class Random extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("Random");
        this.aliases     = ["Rand", "Range"];
        this.description = "I'll give you a random number between *min* and *max*."
                         + " Both parameters are optional."
                         + " If only one number is given, it is the *max*. (defaults: 0-100)";
        this.usage       = "<min> <max>";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {

        let params = this.getParams(message, config);

        for (let param of params) {

            if (isNaN(param))
                return client.sendMessage(message, `"${param}" is not a number!`);

            if (parseInt(param) < 0)
                return client.sendMessage(message, "Parameters must be 0 or more.");

        }

        // no params: [100, 0]... single param: [max, 0]... else [min, max]
        let range = [ parseInt(params[0] || 100), parseInt(params[1] || 0) ];

        // sorts result of ^ into "lowest to highest" for [min, max]
        range.sort((a, b) => { return a - b; });

        if (range[0] === range[1])
            return client.sendMessage(message, `You're joking right? It's ${range[0]}.`);

        let rand = ~~(Math.random() * ((range[1] - range[0]) + 1) + range[0]);

        return client.sendMessage(message, `Your Number Is: **${rand}**`);

    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = Random;
