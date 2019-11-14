const Discord = require("discord.js");
const room = "634793628124053545"

module.exports.run = async (bot, message) => {


    function messageCollect(messageSend) {
        const filter = m => !m.author.bot

         return message.author.send(messageSend).then(msg => msg.channel.awaitMessages(filter, { max: 1, time: 60 * 1000, errors: ['time'] })
            .then(collected => {
                return collected.first().content
                //message.author.send("Your answer is: \n" + collected.first().content)

            })
            .catch(collected => message.author.send("You didnt send any message,your report was canceled, please try again"))
        )

    }

    await message.author.createDM()


 


   problem = await  messageCollect("What is your problem")
   times = await messageCollect("How many times it appen?")

    await message.author.send("Resume:\nProblem: " + problem + "\nTimes: " + times)
    bot.channels.get(room).send("The user <@"+ message.author.id +"> sent a bug report:\nProblem: " + problem + "\nTimes: " + times)



};

module.exports.help = {
    name: "Bug",
    command: "bug",
    aliases: ["erro", "error"],
    helpInfo: ["I will make some questions about the problem"],
    usage: '["on working"]'

};
