const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
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
  aliases: [NaN],
  helpInfo: ["👆 The name of the pokemon is on the command itself  👆"],
  usage:'["on working"]'
  
};
