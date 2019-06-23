const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  message.member.send("Did you missed me? \nDont worry, i dont run ");
  console.log("server -> " + message.guild);
 
};

module.exports.help = {
  name: "Hi",
  command: "hi",
  aliases: ["hello", "Hello"],
  helpInfo: ["I will say hi"]
};
