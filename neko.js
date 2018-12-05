"use strict"; // Required by Node for ES6

const Discord = require("discord.js");

const commands = require(__dirname + "/src/commands.js");
const version  = require(__dirname + "/src/version.js");

var client = new Discord.Client({ "maxCachedMessages" : 200, "revive" : true });

// =================================================================================================
// Initialization
// =================================================================================================

client.once("ready", () => { client.setPlayingGame(config.game || `Neko.js ${version.current}`) });

// =================================================================================================
// Command Reciever
// =================================================================================================

client.on("message", message => {

    if (message.author.equals(client.user)) return; // prevent bot from gaining sentience

    // -- Command Parsers --------------------------------------------------------------------------
    //let command = admin.parse(client, message, config);
    let command = commands.parse(client, message, config);
    //command = music.parse(client, message, config);
    if (command) command.execute(client, message, config);

});

// -- Program Entry Point (Login) ------------------------------------------------------------------
client.login(process.env.B0T_T0KEN);
