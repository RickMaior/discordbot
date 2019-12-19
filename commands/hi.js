

module.exports.run = async (bot, message, args) => {
  message.member.send("Did you missed me? \nDont worry, i dont run ");
  console.log("server -> " + message.guild);
  message.reply("HEllo")
};

module.exports.help = {
  name: "Hi",
  command: "hi",
  aliases: ["hello", "Hello"],
  helpInfo: ["I will say hi"],
  usage:'["on working"]'
};
