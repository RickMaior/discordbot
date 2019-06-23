const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  const attachment = new Discord.Attachment(
    "https://upload.wikimedia.org/wikipedia/pt/b/b0/025_Pikachu.png"
  );
  message.channel.send(message.author, attachment);
};

module.exports.help = {
  name: "Pika",
  command: "pika",
  aliases: [],
  helpInfo: ["No description yet"]
};
