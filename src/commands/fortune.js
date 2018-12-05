"use strict"; // Required by Node for ES6

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// Fortune Command
// =================================================================================================

class Fortune extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("Fortune");
        this.description = "Wise words, from wise neko.";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {
        let rand = ~~(Math.random() * quotes.length);
        return client.sendMessage(message, "*" + quotes[rand] + "*");
    }

}

// -------------------------------------------------------------------------------------------------
// Based on Confucious quotes... but anything funny is fine too.
// -------------------------------------------------------------------------------------------------
var quotes = [

    "Don't sleep for too long, or you'll miss naptime!",
    "Before crying over spilt milk, remember it can still be delicious without a bowl.",
    "A bird in the paw is worth nom nom nom...",
    "Let no surface, no matter how high or cluttered, go unexplored.",
    "Neko never catches the laser if neko never tries.",
    "Our greatest glory is not in never falling, but in making sure master doesn't find the mess.",
    "A mouse shared halves the food but doubles the happiness.",
    "There exists nary a toy as pertinent as the box from whence that toy came.",
    "Neko will never be fed if neko does not meow all day!",
    "Ignore physics, and physics will ignore you.",
    "Never bite the hand that feeds you!",
    "Before finding the red dot, you must first find yourself.",
    "Some see the glass half emtpy. Some see the glass half full. Neko sees the glass and knocks it over.",
    "Make purrs not war.",
    "Give a neko fish and you feed them for a day; Teach a neko to fish and... mmmm fish.",
    "Wheresoever you go, go with all of master's things.",
    "Live your dreams every day! Why do you think neko naps so much?",
    "The hardest thing of all is to find a black cat in a dark room, especially if there is no cat.",
    "Meow meow meow meow, meow meow. Meow meow meow."

];

// -- Export Command -------------------------------------------------------------------------------
module.exports = Fortune;
