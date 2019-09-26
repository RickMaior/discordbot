const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  let prefix = settings.prefix;
  let total = 0;
  let commandList = [];



  // codigo para ler comandos
  fs.readdir("./commands/", (err, files) => {
    if (err) {
      console.error("An error has occured while loading commands: ");
      console.error(err);
    }

    let jsFile = files.filter(file => file.split(".").pop() == "js");
    let messageSended = false;


    jsFile.forEach((file, i) => {
      let props = require(`./${file}`);
      bot.commands.set(props.help.command, props);

      props.help.aliases.forEach(alias => {
        bot.aliases.set(alias, props.help.command);
      });
      total++;
      commandList.push({
        "name": props.help.name,
        "info": props.help.helpInfo,
        "aliases": props.help.aliases,
        "usage": props.help.usage
      })



      //console.log("props.help.command=" + props.help.command);
      //console.log("props.help.aliases= " + props.help.aliases);
      //console.log("args[0]= " + args[0]);
      //console.log("props.helpInfo= " + props.helpInfo);
      //console.log("props.help.helpInfo= "+ props.help.helpInfo);






      // description of command

      if (
        props.help.command === args[0] ||
        props.help.aliases.includes(args[0])
      ) {
        const embed2 = new Discord.RichEmbed()
          .setTitle(props.help.command)
          .addField("Info", props.help.helpInfo)
          .addField("Aliases", props.help.aliases)
          .addField("Usage", message.guild.prefix+props.help.command+" "+props.help.usage)
          .setFooter(`< > for required field and [ ]  for optional field and ( ) for comments , / is for an option`)
          .setColor("RANDOM");
        message.channel.send(embed2);
        messageSended = true;
      }

    });


    // pag de help

    if (!messageSended) {
      if (isNaN(Number(args[0])) && args[0]) {
        console.log("Not found help available");
        message.reply("From " + total + " commands i have, this one was not found");
      } else {
        let max = Math.ceil(total / 5);



        if (Number(args[0]) <= 0 || Number(args[0]) > (max)) {
          message.reply("Please put a valid number, between 1 and " + max);
        } else {
          let page = args[0] || 1;
          let commandShow = commandList.slice(page * 5 - 5, page * 5);
          console.log(commandShow)

          // creation of embed
          const embed = new Discord.RichEmbed()
            .setTitle("Commands available:")
            .setFooter(`Page${page}/${max}`)
            .setColor("RANDOM");
          //message.reply("List of all commands: " + commandList);

          // upgrade to embed
          let testArray = ["1", "2", "3"]
          // for better embed, have only one field for all commands
          let embedMessage = "";
          commandShow.forEach((commandName) => {
            embedMessage = embedMessage + `__**${commandName.name}**__\n`
          });
          embed.setDescription(embedMessage);
          message.channel.send(embed);

        }
      } // fim de help pag
    }

  });


};

module.exports.help = {
  name: "Help",
  command: "help",
  aliases: [NaN],
  helpInfo: ["Use this command to see all available commands or see a description of each command"],
  usage: ["[page]","[command]"]
};
