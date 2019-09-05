const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  let prefix = settings.prefix;
  let total = 0;
  let commandList = [];
  if (!args[0]) {
    // const embed = new Discord.RichEmbed()
    //   .setTitle("Commands available:")
    //   .addField("test", "Check if i am online", true)
    //   .addField("clear", "I will clear as many messages as you want")
    //   .addField("BOSS", "Only if you are boss", true)
    //   .addField("pika", "How cute", true)
    //   .addField("8ball", "Ask a question and i will answer it", true)
    //   .addField("hi", "Just one pm message", true)
    //   .addField("ping", "check the ping of the bot", true)
    //   .addField(
    //     "game",
    //     "If you are feeling bored you can play the game of 31",
    //     false
    //   )
    //   .addField("logs", "Create a room for logs of the server", true)
    //   .addField("youtube", "Make the bot musics of the yt", true)
    //   .addField("report"," Just send a report to someone")
    //   .addField("Kick","I will kick someone ass")
    //   .addField("invite", "I will give you my invite link")
    //   .addField("color",`[Pick your favorite color](https://google.com)`)
    //  // .setDescription(`Google: [clique aqui](https://google.com)`) 

    //   .setFooter(`\nIf you need any help do ${prefix}help <command>`)
    //   .setColor("RANDOM");
    // message.member.send(embed);
    // message.reply("You got an email 😃");

    message.reply("Please tell me which page you want me to show")
  } else {
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
        commandList.push(props.help.command)



        console.log("props.help.command=" + props.help.command);
        //console.log("props.help.aliases= " + props.help.aliases);
        //console.log("args[0]= " + args[0]);
        //console.log("props.helpInfo= " + props.helpInfo);
        //console.log("props.help.helpInfo= "+ props.help.helpInfo);





        if (
          props.help.command === args[0] ||
          props.help.aliases.includes(args[0])
        ) {
          if (props.help.helpInfo === undefined) {
            console.log("help= " + props.help.helpInfo);
            message.reply("No description available");
          } else {
            console.log("help= " + props.help.helpInfo);
            message.reply(props.help.helpInfo);
          }
          messageSended = true;
        }

      });


      if (!messageSended && isNaN(Number(args[0]))) {
        console.log("Not found help available");
        message.reply("From " + total + " commands i have, this one was not found");
      } else {
        let max= Math.ceil(total / 5);

        if (Number(args[0]) <= 0 || Number(args[0]) > (max)) {
          message.reply("Please put a valid number, between 1 and " + max);
        } else {
          let commandShow = commandList.slice(args[0] * 5 - 5, args[0] * 5);
          console.log(commandShow)

          // creation of embed
          const embed = new Discord.RichEmbed()
            .setTitle("Commands available:")
            .setFooter(`Page${args[0]}/${max}`)
            .setColor("RANDOM");
          //message.reply("List of all commands: " + commandList);

          // upgrade to embed
          let testArray = ["1", "2", "3"]
          commandShow.forEach((commandName) => {
            embed.addField(commandName, "command description")
          });
          message.channel.send(embed);

        }
      }

    });

  }
};

module.exports.help = {
  name: "Help",
  command: "help",
  aliases: [],
  helpInfo: ["Why you would do this command?"]
};
