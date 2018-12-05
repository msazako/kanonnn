"use strict"; // Required by Node for ES6

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// Echo Command
// =================================================================================================

class Echo extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("Echo");
        this.aliases     = ["Forward", "Say"];
        this.description = "I'll repeat what you said.";
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

        return client.sendMessage(message, flat);

    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = Echo;
