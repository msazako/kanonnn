"use strict"; // Required by Node for ES6

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// Cake Command
// =================================================================================================

class Cake extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("Cake");
        this.description = "I'll give you delicious cake!";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {

        return; // the cake is a lie.

    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = Cake;
