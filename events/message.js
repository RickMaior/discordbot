const settings = require("../bot/settings.json");


var stringArgv = require("string-argv"); // one possible way of doing the check for "  "
const serverInfo = require("../models/serverInfo.js");

module.exports = async (bot, message) => {
  if (message.author.bot) return;
  if (message.channel.id === "610989584389636118") {
    message.react('✅').then(message.react('❌'))
  }
  if (message.channel.type === "dm") {
    //message.reply("Now you make me happy 😃 ");
    console.log("The user sent a PM-> " + message.author.tag);

  } else {
    // // Begin of xp  arranjar
    console.log("tem mebro? " + message.guild.membersOn.has(message.author.id));
    message.guild.membersOn.add(message.author.id);



    // const info = await InfoModel.findOne({ server: message.guild.id, userID: message.author.id });
    // if (info) {
    //   console.log("member have stuff saved")
    //   // if (isNaN(info.xp)) {
    //   //   info.xp = 1;
    //   // } else {
    //   //   info.xp++
    //   // }

    //   info.sendMessage = true;
    //   info
    //     .save()
    //     .then(/*result => console.log(result)*/)
    //     .catch(err => console.log(err));
    // } else {
    //   console.log("member not saved")
    //   let info = new InfoModel({
    //     _id: mongoose.Types.ObjectId(),
    //     username: message.author.username,
    //     userID: message.author.id,
    //     favoriteColor: "0",
    //     time: message.createdAt,
    //     server: message.guild.id,
    //     sendMessage: true,
    //     xp: 1
    //   })

    //   info
    //     .save()
    //     .then(/*result => console.log(result)*/)
    //     .catch(err => console.log(err));
    // }





    // // End of xp

    // get prefix
    let prePrefix = settings.prefix;
    const guild = await serverInfo.findOne({ server: message.guild.id });
    if (guild && guild.prefix) {
      prePrefix = guild.prefix;
    }
    let prefix = prePrefix.trim();
    message.guild.prefix = prefix;




    // const prefix = bot.prefixes.get(message.guild.id);



    if (message.content === "^") {
      message.channel.send("^^");
    }



    if (message.isMentioned(bot.user.id)) {
      message.reply(`If you need help just do __**${prefix}help**__`);
    }

    //begin of cheking commands
    var messageArray = stringArgv.default(message.content);
    let cmd = messageArray[0];
    if (cmd === undefined) {
      return;
    }
    let command = cmd.toLowerCase();

    let args = messageArray.slice(1);


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
  }
};

module.exports.help = {
  name: "Message",
  event: "message"
};
