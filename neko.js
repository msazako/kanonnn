const Discord = require('discord.js');
const client = new Discord.Client();
const commands = require(__dirname + "/src/commands.js");

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
if (message.author.equals(client.user)) return; // prevent bot from gaining sentience

    // -- Command Parsers --------------------------------------------------------------------------
    //let command = admin.parse(client, message, config);
    let command = commands.parse(client, message, config);
    //command = music.parse(client, message, config);
    if (command) command.execute(client, message, config);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
