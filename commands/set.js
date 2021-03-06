
const ServerInfo = require("../models/serverInfo.js");
const mongoose = require("mongoose");
const { messageChannelCollect } = require("../utils/messageFunctions.js");


module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send("YOU HAVE NO PERMISSIONS");

  if (!args[0]) {
    message.reply("Please define what you want me to change?");
  } else {
    const info = await ServerInfo.findOne({ server: message.guild.id });
    switch (args[0]) {
      case "setup":
        if (!info) {
          setupPrefix = await messageChannelCollect("What is the new prefix?", message)
          setupVoiceRoom = await messageChannelCollect("What is the id of the channel for infinite voice", message)
          //when not saved and going to create a new one
          let serverInfo = new ServerInfo({
            _id: mongoose.Types.ObjectId(),
            prefix: setupPrefix,
            voiceRoom: setupVoiceRoom,
            server: message.guild.id
          });

          serverInfo
            .save()
            .then(result => console.log(result))
            .catch(err => console.log(err));

          message.reply("The new prefix is: " + setupPrefix + " and the voice room for infinite talking is : " + setupVoiceRoom)
        } else {
          message.reply("This server already has data saved")
        }

        break;

      case "voiceroom":
        if (!info) {
          message.reply("You dont have any info saved on this server,please go make the setup")
        } else {
          if (!args[1]) {
            message.reply(
              "The ID of the especial channel is:  ```" +
              info.voiceRoom+
              "``` \nIf you want to change it please tell me the new ID by doing again the command."
            );
          } else {
            let newVoiceRoom = args[1]
            function callback(err, numAffected) {
              //console.log(`${numAffected}  ficheiros foram modificados`);
            }

            let conditions = {
              server: message.guild.id
            }, // what you are cheking for
              update = { voiceRoom: newVoiceRoom }, // what you want to change
              options = { multi: true };

            ServerInfo.update(conditions, update, options, callback);

            message.reply("The especial voice room  was changed to " + newVoiceRoom);
          }
        }
        break;

      case "prefix":
        if (!args[1]) {
          message.reply(
            "My actual prefix on this server is:  ```" +
            message.guild.prefix +
            "``` \nIf you want to change it please tell me to what prefix you want it for."
          );
        } else {
          let newPrefix = args[1].trim();
          if (!info) {
            //when not saved and going to create a new one
            message.reply("You dont have any info saved on this server,please go make the setup")
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
  helpInfo: ["If you want to change something in your bot"],
  usage: '<prefix> <new prefix to change>'
};
