const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const ServerInfo = require("../models/serverInfo.js");
const mongoose = require("mongoose");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send("YOU HAVE NO PERMISSIONS");

  if (!args[0]) {
    message.reply("Please define what you want me to change?");
  } else {
    switch (args[0]) {
      case "prefix":
        if (!args[1]) {
          message.reply(
            "My actual prefix on this server is:  ```" +
              message.guild.prefix +
              "``` \nIf you want to change it please tell me to what prefix you want it for."
          );
        } else {
          let newPrefix = args[1];
          const info = await ServerInfo.findOne({ server: message.guild.id });

          if (!info) {
            //when not saved and going to create a new one
            let serverInfo = new ServerInfo({
              _id: mongoose.Types.ObjectId(),
              prefix: newPrefix,
              server: message.guild.id
            });

            serverInfo
              .save()
              .then(result => console.log(result))
              .catch(err => console.log(err));

            message.reply("Prefix was saved to " + newPrefix);
          } else {
            // when it is saved and want to change

            function callback(err, numAffected) {
              //console.log(`${numAffected}  ficheiros foram modificados`);
            }

            let conditions = {
                server: message.guild.id
              }, // what you are cheking for
              update = { prefix: newPrefix }, // what you want to change
              options = { multi: true };

            ServerInfo.update(conditions, update, options, callback);

            message.reply("The prefix was changed to " + newPrefix);
          }
         
        }
        break;

      default:
        message.reply("I am not able to change that");
    }
  }
};

module.exports.help = {
  name: "Set",
  command: "set",
  aliases: ["change"],
  helpInfo: ["If you want to change something in your bot"]
};
