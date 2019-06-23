const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    const embed = new Discord.RichEmbed()
      .setTitle("Help")
      //.addField("ola", "just one message", true)
      .addField("test", "Check if i am online", true)
      .addField("clear", "I will clear as many messages as you want")
      .addField("BOSS", "Only if you are boss", true)
      .addField("pika", "How cute", true)
      .addField("8ball", "Ask a quesntion and i will answer it", true)
      .addField("hi", "Just one pm message", true)
      .addField(
        "game",
        "If you are feeling bored you can play the game of 31",
        false
      )
      .addField("logs", "Create a room for logs of the server", true)
      .addField("youtube", "Make the bot musics of the yt", true)
      .setColor(Math.floor(Math.random() * 16777217));
    message.member.send(embed);
    message.reply("You got an email 😃");
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

        //console.log("props.help.command=" + props.help.command);
        //console.log("props.help.aliases= " + props.help.aliases);
        //console.log("args[0]= " + args[0]);
        //console.log("props.helpInfo= " + props.helpInfo);

        if (
          (props.help.command === args[0] ||
          props.help.aliases.includes(args[0]) )&& props.helpInfo != undefined
        ) {
          console.log("help= " + props.help.helpInfo);
          message.reply(props.help.helpInfo);

          messageSended = true;
          return;
        }
      });

      if (!messageSended) {
        console.log("Not found help available");
        message.reply("Command not available for help");
      }
    });

    // leggacy mode
    /*
    switch (args[0]) {
      case "logs":
        message.reply(
          "It will create a room for the logs of the server, there the bot will post when a message is deleted in outher room"
        );
        break;

      case "clear":
        message.reply("It will clear as many messages as you request");
        break;

      case "test":
        message.reply("I will say hello");
        break;

      case "pika":
        const embed2 = new Discord.RichEmbed()
          .setTitle("WHO IS THIS POKEMON?")
          .setColor(0xfef65b)
          .setImage(
            "https://upload.wikimedia.org/wikipedia/pt/b/b0/025_Pikachu.png"
          );
        message.channel.send(embed2);
        break;

      case "8ball":
        message.reply("Just ask a question");
        break;

      /*case "hi":
            message.reply("I will pm you");
            break;

      case "game":
        message.reply(
          "The rules are simple, the 1º getting to 31 or highter wins, each player can pick 1,2 or 3"
        );
        break;

      case "youtube":
        message.reply(
          "1º join a voice chat\nIf the bot gets any error, take him out of the room and try again"
        );
        break;

      default:
        message.reply("invalid input");
        break;
    }*/
  }
};

module.exports.help = {
  name: "Help",
  command: "help",
  aliases: [],
  helpInfo: ["No description yet"]
};
