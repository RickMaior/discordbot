const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");


module.exports.run = async (bot, message, args) => {


  
  let link = await bot
    .generateInvite(["ADMINISTRATOR"])
    .then(link => {
      console.log(`Generated bot invite link: ${link}`);
      message.reply(`Link to invite me: ${link}`);
    })
    .catch(console.error);

   

};

module.exports.help = {
  name: "Invite",
  command: "invite",
  aliases: ["link"],
  helpInfo: ["No description yet"]
};
