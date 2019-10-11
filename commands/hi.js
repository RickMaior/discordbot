
const { getInfo } = require("ytdl-getinfo");

module.exports.run = async (bot, message, args) => {
  message.member.send("Did you missed me? \nDont worry, i dont run ");
  console.log("server -> " + message.guild);




  if (args[0]) {
    getInfo(args[0]).then(info => {
      // info.items[0] should contain the output of youtube-dl --dump-json
      console.log("title: " + info.items[0].title);
    });
  }
  message.reply("HEllo")
};

module.exports.help = {
  name: "Hi",
  command: "hi",
  aliases: ["hello", "Hello"],
  helpInfo: ["I will say hi"],
  usage:'["on working"]'
};
