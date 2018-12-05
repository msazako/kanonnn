"use strict"; // Required by Node for ES6

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// ItsATrap Command
// =================================================================================================

class ItsATrap extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("ItsATrap");
        this.aliases     = ["Trap"];
        this.description = "Tell someone when they're making a mistake.";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {
        return client.sendMessage(message, "https://www.youtube.com/watch?v=4F4qzPbcFiA");
    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = ItsATrap;
