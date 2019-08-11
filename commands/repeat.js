const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const { getInfo } = require("ytdl-getinfo");

module.exports.run = async (bot, message, args) => {
    setInterval(function(){ message.channel.send("Hello"); }, 3000);
};

module.exports.help = {
  name: "Repeat",
  command: "repeat",
  aliases: [],
  helpInfo: ["I will repeat"]
};
