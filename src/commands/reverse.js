"use strict"; // Required by Node for ES6

const esrever = require("esrever"); // non-breaking unicode reverse!

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// Reverse Command
// =================================================================================================

class Reverse extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("Reverse");
        this.aliases     = ["Backward", "Flip"];
        this.description = "I'll repeat what you said, in reverse!";
        this.usage       = "<text ...>";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {

        let uRegEx = /<@(\d{17})>/g;
        let cRegEx = /<#(\d{17})>/g;

        let params = this.getParams(message, config);
        if (params.length < 1) return; // no blank messages pls

        let flat = params.join(" ");
        flat = flat.replace(uRegEx, (match, id) => { return client.users.get("id", id).username; });
        flat = flat.replace(cRegEx, (match, id) => { return client.channels.get("id", id).name; });

        return client.sendMessage(message, esrever.reverse(flat));
    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = Reverse;
