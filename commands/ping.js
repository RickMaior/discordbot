

module.exports.run = async (bot, message) => {
    message.channel.send("My ping is: "+ Math.round(bot.ping))

};

module.exports.help = {
  name: "Ping",
  command: "ping",
  aliases: ["pong"],
  helpInfo: ["Check the bot´s ping"]
};
