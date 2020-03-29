const Discord = require("discord.js");
const axios = require("axios");

module.exports.run = async (bot, message, args) => {
  let response = await axios.get(`https://aws.random.cat/meow`);

  let catembed = new Discord.MessageEmbed()
    .setURL(response.data.file)
    .setTitle("Cat 🐱")
    .setImage(response.data.file)
    .setColor(Math.floor(Math.random() * 16777215));

  message.channel.send(catembed);
};

module.exports.help = {
  name: "Cat",
  command: "cat",
  aliases: ["catty"],
  helpInfo: ["Cat image"],
  usage: '["on working"]'
};
