<<<<<<< HEAD
const settings = require("../bot/settings.json");
const Discord = require("discord.js");



=======
>>>>>>> ffa36aecbd890c7ac56ae5da3448d65291487060

module.exports.run = async (bot, message) => {
    message.channel.send("My ping is: "+ Math.round(bot.ping))

};

module.exports.help = {
  name: "Ping",
  command: "ping",
  aliases: ["pong"],
  helpInfo: ["Check the bot´s ping"]
};
