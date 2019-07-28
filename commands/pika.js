const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  const embed2 = new Discord.RichEmbed()
          .setTitle("WHO IS THIS POKEMON?")
          .setColor(0xfef65b)
          .setImage(
            "https://upload.wikimedia.org/wikipedia/pt/b/b0/025_Pikachu.png"
          );
        message.channel.send(embed2);
    

  
};

module.exports.help = {
  name: "Pika",
  command: "pika",
  aliases: [],
  helpInfo: ["👆 The name of the pokemon is on the command itself  👆"]
  
};
