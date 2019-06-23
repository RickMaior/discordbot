const settings = require("../bot/settings.json");

const fs = require("fs");
const ms = require("ms");



module.exports.run = async (bot, message, args) => {

    message.react("😉"); /* react with an emoji to your message */
    message.reply("i am online, did you missed me?")
              .then(msg =>
                msg.delete(10000)
              ); /* mensagem com mençao  e que se apaga*/
   

}

module.exports.help = {
    name: "Test",
    command: "test",
    aliases: ['test1', 'test2'],
    helpInfo: ["No description yet"]
}