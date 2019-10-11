const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`https://aws.random.cat/meow`)

    let catembed = new Discord.RichEmbed()
    .setURL(body.file)
    .setTitle("Cat 🐱")
    .setImage(body.file)
    .setColor(Math.floor(Math.random() * 16777215));

    message.channel.send(catembed);
  
 
};

module.exports.help = {
  name: "Cat",
  command: "cat",
  aliases: ["catty"],
  helpInfo: ["NaN"],
  helpInfo: ["Cat image"],
  usage:'["on working"]'
};