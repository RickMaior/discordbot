const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

const VoiceRoom = require("../models/tempRoom.js"); // escolher qual model usar
const mongoose = require("mongoose"); // necessario para ligar a mongoose

module.exports.run = async (bot, message, args) => {
  
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send("YOU HAVE NO PERMISSIONS");

    await message.guild.createChannel(
        "New especial channel",
        { type: "voice", parent: message.channel.parentID }
      );
};

module.exports.help = {
  name: "Voice",
  command: "voice",
  aliases: [NaN],
  helpInfo: [
    "Create a voice chat that when you enter it creates one automatic voice room for you"
  ]
};
