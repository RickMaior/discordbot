const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");


module.exports.run = async (bot, message, args) => {
    
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send("YOU HAVE NO PERMISSIONS");

    var room = message.guild.channels.find(room => room.name === "log")

    
    if(!room){

    message.guild.createChannel('log', { type: 'text' })
    .then(console.log)
    .catch(console.error);}
    else{
        message.reply("There is already a room log")
    }
    

};

module.exports.help = {
  name: "Logs",
  command: "logs",
  aliases: ["log"],
  helpInfo: ["No description yet"]
};
