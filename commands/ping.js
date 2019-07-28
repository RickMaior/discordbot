const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const { getInfo } = require('ytdl-getinfo')

module.exports.run = async (bot, message, args) => {
    message.channel.send("My ping is: "+ Math.round(bot.ping))

};

module.exports.help = {
  name: "Ping",
  command: "ping",
  aliases: ["pong"],
  helpInfo: ["Check the bot´s ping"]
};
