const Discord = require("discord.js");
const client = new Discord.Client();
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

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
