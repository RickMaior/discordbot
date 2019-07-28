const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`https://random.dog/woof.json`)

    let dogembed = new Discord.RichEmbed()
    .setURL(body.url)
    .setTitle("Dog 🐶")
    .setImage(body.url)
    .setColor(Math.floor(Math.random() * 16777215));

    message.channel.send(dogembed);
  
 
};

module.exports.help = {
  name: "Dog",
  command: "dog",
  aliases: ["doggy"],
  helpInfo: ["Dog image"]
};