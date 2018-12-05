"use strict"; // Required by Node for ES6

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// TableFlip Command
// =================================================================================================

class TableFlip extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("TableFlip");
        this.aliases     = ["FlipTable", "FuckThat", "FuckThis", "Table"];
        this.description = "ffffffffffffuuuuuuuuuuuu...";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {
        return client.sendFile(message, __dirname + "/../images/tableflip.gif", "tableflip.gif");
    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = TableFlip;
