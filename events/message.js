const settings = require("../bot/settings.json");

const fs = require("fs");
const ms = require("ms");
var stringArgv = require("string-argv"); // one possible way of doing the check for "  "
const serverInfo = require("../models/serverInfo.js");

module.exports = async (bot, message) => {
  if (message.author.bot) return;

  let prefix = settings.prefix;
  const guild = await serverInfo.findOne({ server: message.guild.id });
  if (guild && guild.prefix) {
    prefix = guild.prefix;
  }
  message.guild.prefix = prefix;
 
  console.log("bot.prefixes = " + prefix);

 // const prefix = bot.prefixes.get(message.guild.id);
  console.log("prefix in message =" + prefix);
  var messageArray = stringArgv.default(message.content);
  let cmd = messageArray[0];
  if (cmd === undefined) {
    return;
  }
  let command = cmd.toLowerCase();

  let args = messageArray.slice(1);

  if (message.content === "^") {
    message.channel.send("^^");
  }

  if (message.channel.type === "dm") {
    message.reply("Now you make me happy 😃 ");
    console.log("The user sent a PM-> " + message.author.tag);
    return;
  }

  if (message.isMentioned(bot.user.id)) {
    message.reply(`If you need help just do __**${prefix}help**__`);
    return;
  }

  let commandFile;
  if (command.startsWith(prefix)) {
    if (bot.commands.has(command.slice(prefix.length))) {
      commandFile = bot.commands.get(command.slice(prefix.length));
      console.log(
        `player-> ${message.author.tag} used ${command} command in the server ${
          message.guild
        } on #${message.channel.name} channel.`
      );

      commandFile.run(bot, message, args);
    } else if (bot.aliases.has(command.slice(prefix.length))) {
      commandFile = bot.commands.get(
        bot.aliases.get(command.slice(prefix.length))
      );
      console.log(
        `bot-> ${message.author.tag} used ${command} command in in the server ${
          message.guild
        } on #${message.channel.name} channel.`
      );

      commandFile.run(bot, message, args);
    }
  }
};

module.exports.help = {
  name: "Message",
  event: "message"
};
