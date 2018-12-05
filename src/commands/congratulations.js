"use strict"; // Required by Node for ES6

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// Congratulations Command
// =================================================================================================

class Congratulations extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("Congratulations");
        this.aliases     = ["Congrats", "GG", "Grats"];
        this.description = "Congratulate someone for whatever reason.";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {
        return client.sendMessage(message, "https://www.youtube.com/watch?v=oyFQVZ2h0V8");
    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = Congratulations;
