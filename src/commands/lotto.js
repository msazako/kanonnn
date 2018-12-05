"use strict"; // Required by Node for ES6

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// Lotto Command
// =================================================================================================

class Lotto extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("Lotto");
        this.aliases     = ["LuckyNumbers"];
        this.description = "I'll give you a set of 6 lucky numbers!";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {

        let lotto = [];

        while (lotto.length < 6) {

            let number = ~~((Math.random() * 59) + 1);
            if (lotto.indexOf(number) === -1) lotto.push(number);

        }

        return client.sendMessage(message, `Your Lucky Numbers Are: **${lotto.join("**, **")}**`);

    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = Lotto;
