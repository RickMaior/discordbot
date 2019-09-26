
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
 
    const embed = new Discord.RichEmbed()
    .setTitle("Jobs i can do for you:")
    .addField("job1:",`[click here](https://www.fiverr.com/share/4pdBR)`)
    .addField("job2:",`[click here](https://www.fiverr.com/share/lyNZy)`)
    .addField("job3:",`[click here](https://www.fiverr.com/s2/62ef469eb2)`)

    .setColor("RANDOM")
    .setFooter("All this jobs are on fiverr")
    message.channel.send(embed)
};

module.exports.help = {
  name: "Job",
  command: "job",
  aliases: ["trabalho","jobs"],
  helpInfo: ["Some offers i have"]
};
