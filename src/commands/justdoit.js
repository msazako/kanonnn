"use strict"; // Required by Node for ES6

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// JustDoIt Command
// =================================================================================================

class JustDoIt extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("JustDoIt");
        this.aliases     = ["DoIt", "Shia"];
        this.description = "DON'T LET YOUR DREAMS JUST BE DREAMS!";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {
        return client.sendFile(message, __dirname + "/../images/shia.jpg", "shia.jpg");
    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = JustDoIt;
