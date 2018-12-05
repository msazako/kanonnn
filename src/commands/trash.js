"use strict"; // Required by Node for ES6

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// Trash Command
// =================================================================================================

class Trash extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("Trash");
        this.aliases     = ["Onodera", "WorstGirl"];
        this.description = "I'll upload an image of 'worst girl'. (WARNING: May cause nausea!)";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {
        return client.sendFile(message, __dirname + "/../images/trash.png", "trash.png");
    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = Trash;
