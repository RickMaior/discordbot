
const Discord = require("discord.js");
const axios = require("axios");

module.exports.run = async (bot, message, args) => {

    let response = await axios
    .get(`https://random.dog/woof.json`)
    

    let dogembed = new Discord.RichEmbed()
    .setURL(response.data.url)
    .setTitle("Dog 🐶")
    .setImage(response.data.url)
    .setColor(Math.floor(Math.random() * 16777215));

    message.channel.send(dogembed);
  
 
};

module.exports.help = {
  name: "Dog",
  command: "dog",
  aliases: ["doggy"],
  helpInfo: ["Dog image"],
  usage:'["on working"]'
};