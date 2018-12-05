"use strict"; // Required by Node for ES6

const Request = require("request");

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// Quote Command
// =================================================================================================

class Quote extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("Quote");
        this.description = "I'll give you a random inspirational quote.";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {

        Request("https://inspiration.julxzs.website/api/quote", function (error, response, body) {

            if (response.statusCode == 200) {

                let quote = JSON.parse(body).quote;
                let quoteString = `"${quote.quote}" - ${quote.author} ${quote.date}`;

                return client.sendMessage(message, quoteString);

            }

        });

    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = Quote;
