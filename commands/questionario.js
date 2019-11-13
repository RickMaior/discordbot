const Discord = require("discord.js");

module.exports.run = async (bot, message) => {

    await message.author.createDM()


    const filter = m => !m.author.bot

    await message.author.send("Send your answer").then(msg => msg.channel.awaitMessages(filter, { max: 1, time: 6* 1000, errors: ['time'] })
        .then(collected => message.author.send("Your answer is: \n" + collected.first().content) /*console.log(collected.first().content)*/)
        .catch(collected => message.author.send("You didnt send any message, please try again")/*console.log(`After a minute, only ${collected.size} 1 person send a message.`)*/)
    )





};

module.exports.help = {
    name: "Questionario",
    command: "questionario",
    aliases: ["question"],
    helpInfo: ["I will make some questions in your private message"],
    usage: '["on working"]'

};
