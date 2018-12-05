"use strict"; // Required by Node for ES6

const Command = require(__dirname + "/../commands.js").Command;

// =================================================================================================
// 8ball Command
// =================================================================================================

class EightBall extends Command {

    // -- Constructor ------------------------------------------------------------------------------
    constructor() {
        super("8Ball");
        this.description = "The magic eightball can answer any question!";
    }

    // -- Command Logic ----------------------------------------------------------------------------
    execute(client, message, config) {
        let rand = ~~(Math.random() * replies.length);
        return client.sendMessage(message, "*" + replies[rand] + "*");
    }

}

// -------------------------------------------------------------------------------------------------
// Based on common "Magic 8Ball" phrases
// https://en.wikipedia.org/wiki/Magic_8-Ball#Possible_answers
// -------------------------------------------------------------------------------------------------
var replies = [

    // -- Positive --
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",

    // -- Uncertian --
    "Reply hazy try again...",
    "Ask again later...",
    "Better not tell you now...",
    "Cannot predict now...",
    "Concentrate and ask again...",

    // -- Negative --
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",

    // -- Custom --
    // (pls keep 2:1:1 ratio of P:U:N)
    "Nyas.",
    "Why not?",
    "zzzzz...",
    "No."
];

// -- Export Command -------------------------------------------------------------------------------
module.exports = EightBall;
