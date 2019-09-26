const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send("YOU HAVE NO PERMISSIONS");

  message.mentions.users.forEach(user => {
    message.mentions.users.first();

    if (!user) {
      message.reply("Pls tell me who you want to ban");
    } else {
      const member = message.guild.member(user);
      if (!member) {
        message.reply("That user isn't in this guild!");
      } else {
        
        

        // Pega quantas mensagens vai ser apagado
        let messageClean = 0;
        let banReason
        if (Number(args[1]) === 7 || Number(args[1]) === 1) {
          messageClean = args[1];
          banReason = args[2];
        } else {
          if (Number(args[2]) === 7 || Number(args[2]) === 1) {
            messageClean = args[2];
            banReason = args[1];
          }
        }

        if (Number(args[1]) === 7 || Number(args[1]) === 1) {
          messageClean = args[1];
        }
        if(!banReason){banReason = "The hammer striked you"}
        //console.log("messageClean= " + messageClean);
        // Fim de pegar mensagens apagadas

        member
          .ban({ days: messageClean, reason: banReason })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.reply("I was unable to ban the member");
            console.error(err);
          });
      }
    }
  });
};

module.exports.help = {
  name: "Ban",
  command: "ban",
  aliases: [NaN],
  helpInfo: [
    'Ban the player you pinged, if your reason have more than one word, put your reason inside " "'
  ],
  usage: "[@player] <number of messages to delete> <reason>"
};
