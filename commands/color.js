

const Info = require("../models/info.js"); // escolher qual model usar
const mongoose = require("mongoose");

module.exports.run = async (bot, message, args) => {
  console.log("args[0]= " + args[0]);

  if (args[0]) {
    if (!args[1]) {
      if (
        await Info.exists({
          userID: message.author.id,
          server: message.guild.id
        })
      ) {
        let conditions = {
            server: message.guild.id,
            userID: message.author.id
          }, // what you are cheking for
          update = { favoriteColor: args[0] }, // what you want to change
          options = { multi: true };

        function callback(err, numAffected) {
          //console.log(`${numAffected}  ficheiros foram modificados`);
        }

        // console.log("info= "+ info)

        Info.update(conditions, update, options, callback);

        message.reply("Your favorite color was updated to " + args[0]);
      } else {
        let info = new Info({
          _id: mongoose.Types.ObjectId(),
          username: message.author.username,
          userID: message.author.id,
          favoriteColor: args[0] || "0",
          time: message.createdAt,
          server: message.guild.id //.id
        });

        info
          .save()
          .then(result => console.log(result))
          .catch(err => console.log(err));

        message.reply("Favorite color was saved");
      }
    }
  } else {
    if (
      await Info.exists({
        userID: message.author.id,
        server: message.guild.id
      })
    ) {
      await Info.findOne(
        {
          userID: message.author.id,
          server: message.guild.id
        },
        function(err, user) {
          if (err) {
            message.reply("Pls define first what is your favorite color");
            throw err;
          }

          //console.log("info.favoriteColor= " + user.favoriteColor);
          message.reply(`Your favorite color is ${user.favoriteColor}`);
        }
      );
    } else {
      message.reply("Please define your color first before cheking it");
    }
  }
};

module.exports.help = {
  name: "Color",
  command: "color",
  aliases: [ "cor"],
  helpInfo: [
    "You can tell us what is your favorite color, and see what color you did setup"
  ],
  usage:"[color you want to change] "
};
