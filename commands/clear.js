const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("YOU HAVE NO PERMISSIONS");

  if (!args[0]) return message.reply("Pls define how many you want");
  if (args[0] > 0 && args[0] < 100) {
    /* var clear = parseInt(args[1], 10);
               clear = clear +1;
               message.channel.bulkDelete(clear);*/
    message.channel.bulkDelete(parseInt(args[0], 10) + 1);
  } else {
    message.reply("Put a valid number");
  }
};

module.exports.help = {
  name: "Clear",
  command: "clear",
  aliases: ["clean","rewind"],
  helpInfo: ["No description yet"]
};
