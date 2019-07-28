const settings = require("../bot/settings.json");

const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  message.react("😉"); /* react with an emoji to your message */
  message
    .reply("i am online, did you missed me?")
    .then(msg => msg.delete(10000)); /* mensagem com mençao  e que se apaga*/

    let a = "20"
    let b = "10"
    let c = a + b
    console.log("O resultado é : "+ c)
};

module.exports.help = {
  name: "Test",
  command: "test",
  aliases: ["test1", "test2"],
  helpInfo: ["A command that lets you check if the bot is online"]
};
