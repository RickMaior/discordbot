const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const { getInfo } = require("ytdl-getinfo");

module.exports.run = async (bot, message, args) => {
    message.reply("If you want to help me stay alive you can donate here:\n https://www.patreon.com/user?u=14145208")

};

module.exports.help = {
  name: "Donate",
  command: "donate",
  aliases: ["pay"],
  helpInfo: ["If you want to help me, you can go to this site."]
};