const settings = require("../bot/settings.json");

const fs = require("fs");
const ms = require("ms");
var stringArgv = require("string-argv"); // one possible way of doing the check for "  "

// > a = /"(.*?)"/g;
/*> [b] = '!ok "1 2 3"" 4'.match(a)
[ '"1 2 3"' ]
> [b] = '!ok "1 2 3" "4 5 6" 4'.match(a)
[ '"1 2 3"', '"4 5 6"' ]  */
module.exports = async (bot, message) => {
  if (message.author.bot) return;

  // legacy mode of getting commands
  //let messageArray = message.content.split(" ");
  //let cmd = messageArray[0];
  //let command = cmd.toLowerCase();
  //let args = messageArray.slice(1);

  //console.log("args= "+ args + "\nargs2= " + args2)
  //let args2 = []
  //let i2 = 0
  //console.log("args= "+ args)
  //for (var i = 0, len = args.length; i < len; i++) {

  // console.log(`args[${i}]= ` +args[i]);
  // if(args[i]=== " " ) {continue;
  //  }else{
  //    if(args[i].startsWith('"') ){i2 = args2[i2].concat(args[i]) //}
  //  }

  //}

  // for (var i = 0, len = args2.length; i < len; i++) { // just for debug
  //console.log(`args2[${i}]= ` +args2[i]);
  //}

  let prefix = settings.prefix;
  var messageArray = stringArgv.default(message.content);
  let cmd = messageArray[0];
  let command = cmd.toLowerCase();
  let args = messageArray.slice(1);

  if (message.channel.type === "dm") {
    message.reply("Now you make me happy 😃 ");
    console.log("The user sent a PM-> " + message.author.tag);
    return;
  }

  if (message.isMentioned("585515672826675200")) {
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
