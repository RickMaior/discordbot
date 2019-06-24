const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

const Report = require("../models/report.js"); // escolher qual model usar
const mongoose = require("mongoose"); // necessario para ligar a mongoose



module.exports.run = async (bot, message, args) => {
  mongoose.connect("mongodb://localhost/reports"); // need for upload for database

  let rUser = message.mentions.members.first();
  if(!rUser) return message.reply("Can´t find that member.");
  let rreason = args.slice(1).join(" ");
  if(!rreason) return message.reply("please supply a reason.");
 

    const report = new Report({ // informaçao que vai ser gravada, e tem que ter schema correspondente em models
        _id: mongoose.Types.ObjectId(),
        username: rUser.user.username,
        userID: rUser.id,
        reason: rreason,
        /*rUsername: message.author.username,
        rID: message.author.id,
        time: message.createdAT*/
    });

    report.save()
    .then(resutl => console.log(result))
    .catch(err => console.log(err));

    message.reply("Report has been saved");

};

module.exports.help = {
  name: "Report",
  command: "report",
  aliases: [],
  helpInfo: ["You can report someone by mention him and telling the reason"]
};