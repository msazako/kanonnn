"use strict"; // Required by Node for ES6

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// DontBully Command
// =================================================================================================

class DontBully extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("DontBully");
        this.aliases     = ["Bulli", "Bully", "DunBulli"];
        this.description = "DON'T BULLY!";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {
        return client.sendFile(message, __dirname + "/../images/bulli.jpg", "bulli.jpg");
    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = DontBully;
