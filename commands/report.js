
const Report = require("../models/report.js"); // escolher qual model usar
const mongoose = require("mongoose"); // necessario para ligar a mongoose

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if (!rUser) return message.reply("Can´t find that member.");
  let rreason = args.slice(1).join(" ");
  if (!rreason) return message.reply("please supply a reason.");

  const report = new Report({
    // informaçao que vai ser gravada, e tem que ter schema correspondente em models
    _id: mongoose.Types.ObjectId(),
    username: rUser.user.username,
    userID: rUser.id,
    reason: rreason,
    rUsername: message.author.username,
    rID: message.author.id,
    server: message.guild.id,
    time: message.createdAt
  });

  report
    .save()
    .then(result => {
      message.reply("Report has been saved");
      console.log(result);
    })
    .catch(err => {
      message.reply("There was an error saving the report");
      console.log(err);
    });
};

module.exports.help = {
  name: "Report",
  command: "report",
  aliases: [NaN],
  helpInfo: ["You can report someone by mention him and telling the reason"],
  usage:"<@user> <reason>"
};
