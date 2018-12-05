# Neko.js
[![Version](https://img.shields.io/badge/version-0.9.0--beta-brightgreen.svg?style=flat-square)]()
[![Status](https://img.shields.io/badge/status-rewrite-yellow.svg?style=flat-square)]()
[![Node](https://img.shields.io/badge/node-5.0.0-green.svg?style=flat-square)](https://nodejs.org/)
[![NPM](https://img.shields.io/badge/npm-3.3.6-green.svg?style=flat-square)](https://www.npmjs.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://mit-license.org/)
[![Tested](https://img.shields.io/badge/tested-Ubuntu_14.04.3_LTS-lightgrey.svg?style=flat-square)]()

A [Node.js](https://nodejs.org/) bot/boilerplate for [Discord](https://discordapp.com/) built with [discord.js](https://github.com/hydrabolt/discord.js) (Originally a port of [Nekobot](https://github.com/Kusoneko/Nekobot) by [Kusoneko](https://github.com/Kusoneko))

### Installation
[Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) are both required to use Neko.js (Installing Node.js will install both.)

Installing Neko.js is simple. Open terminal/cmd in the downloaded directory and run `npm install` to install.

### Usage
Using Neko.js is just as simple as installing. Open terminal/cmd in the downloaded directory and run `node neko.js` to start.

### Configuration
You'll need to create a file named `config.json` in the downloaded directory before Neko.js will work. It should look like:
```json
{
    "token" : "application.bot.token",
    "email" : "bot@email.com",
    "password" : "password",
    "game" : "custom game name",
    "commands" : {
        "prefix" : "!"
    }
}
```
(`token` is optional and used by BOT accounts instead of `email` and `password`. For more information on tokens, [click here](https://discordapp.com/developers/docs/topics/oauth2))

### I don't want "X" command!
The Neko.js command system is 100% modular and commands are 100% optional. To disable a command, simply delete the similarly named `.js` file in the `/src/commands` directory. That's it! A better method for disabling commands and features (using the config file instead of deleting them) will be coming sometime in the future, after all the currently planned commands and features have been fully implemented.

### What's with the Vagrantfile?
Neko.js comes with a [Vagrant](https://www.vagrantup.com/) managed Virtual Machine (powered by [ScotchBox](https://github.com/scotch-io/scotch-box)) for those who wish to use Neko.js without the hassle of installing [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) locally, or want to run Neko.js in the same envioriment we've developed it for!

The `provisioner.sh` script automatically takes care of creating and initializing the VM. Once booted up and SSH'd in you can use the simple `sudo start neko`, `sudo stop neko`, and `sudo restart neko` commands to start, stop, and restart the Neko.js service respectively.

For more information on how to use [Vagrant](https://www.vagrantup.com/), check out the official [Vagrant Documentation](https://docs.vagrantup.com/v2/getting-started/) pages.

### Want to add features or help contribute?
We'll gladly let you do our work for us! If you have skills in javascript and want to add your own features or bugfixes to Neko.js you may absolutely feel free to send us a pull request. And if you don't have the skills to add the features yourself, don't worry; You can just leave us a request by submitting a new [Github Issue](https://github.com/TehSeph/Neko.js/issues) and tagging it with the `suggestion` tag. :)
