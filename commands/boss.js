const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  //if (!message.member.roles.find(r => r.name === "BOSS")) return message.channel.send('YOU HAVE NO PERMISSIONS') // check for the role
  message
    .reply("YOU ARE THE BOSS.\nBut dont forget that <@265122531114090496> is the real boss!!")
    .then(message.react("😎")); /*  reage com o emote e messagem  com id*/
};

module.exports.help = {
  name: "Boss",
  command: "boss",
  aliases: [],
  helpInfo: ["No description yet"]
};
