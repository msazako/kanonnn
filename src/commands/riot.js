"use strict"; // Required by Node for ES6

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// Riot Command
// =================================================================================================

class Riot extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("Riot");
        this.description = "We should start a riot! D:";
        this.usage       = "<count> <cause ...>";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {

        let params = this.getParams(message, config);

        if (params.length && isNaN(params[0]))
            return client.sendMessage(message, `"${params[0]}" is not a number!`);

        if (params.length < 2)
            return client.sendMessage(message, "We can't riot over nothing!");

        if (parseInt(params[0]) < 1 || parseInt(params[0]) > 20)
            return client.sendMessage(message, "Riots must be between 1 and 20 messages long.");

        let count = parseInt(params[0]);
        let cause = params.slice(1).join(" ").toUpperCase();

        while (count > 1) {

            setTimeout(function() {

                client.sendMessage(message, `ヽ༼ຈل͜ຈ༽ﾉ ${cause} or RIOT ヽ༼ຈل͜ຈ༽ﾉ`);

            }, count * 1000); // >= 1000 "might" avoid rate-limits

            count--;

        }

        return client.sendMessage(message, `ヽ༼ຈل͜ຈ༽ﾉ ${cause} or RIOT ヽ༼ຈل͜ຈ༽ﾉ`);

    }

}

// -- Export Command -------------------------------------------------------------------------------
module.exports = Riot;
