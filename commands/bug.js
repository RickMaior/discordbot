const Discord = require("discord.js");
const room = "634793628124053545"

const {messageCollect} = require("../utils/messageFuctions.js")

module.exports.run = async (bot, message, args) => {

    let messageSend = true;

   await  message.author.send("text").then(msg => msg.delete()).catch(() => {
       message.reply("cant send a dm")
       messageSend = false;
    })
 if (!messageSend) return
    // function messageCollect(messageSend , message) {
    //     const filter = m => !m.author.bot && m.attachments.size == 0;

    //     return message.author.send(messageSend).then(msg => msg.channel.awaitMessages(filter, { max: 1, time: 60 * 1000, errors: ['time'] })
    //         .then(collected => {
    //             return collected.first().content
    //             //message.author.send("Your answer is: \n" + collected.first().content)

    //         })
    //         .catch(() => message.author.send("You didnt send any message,your report was canceled, please try again"))
    //     )

    // }

    




    problem = await messageCollect("What is your problem?", message)
    times = await messageCollect("How many times it appen?", message)

    const embed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('Bug report')
        .addField("Report was sent by: ", `<@${message.author.id}>`, false)
        .addField('What is your problem?', problem, false)
        .addField('How many times it appen?', times, false)
        .setTimestamp()

    await message.author.send(embed)
    let preview = await message.author.send("Do you like the report?")


    //confirmçao se envia menssagem ou nao


    preview.react('✅').then(() => preview.react('❌'));

    const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    preview.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();

            if (reaction.emoji.name === '✅') {
                bot.channels.get(room).send(embed);
                message.author.send('Your bug report was sent');
            } else {
                message.author.send('Your bug report was canceled!');
            }
        })
        .catch(collected => {
            message.author.send('You didnt reacted, your bug report was canceled');
        });



};

module.exports.help = {
    name: "Bug",
    command: "bug",
    aliases: ["erro", "error"],
    helpInfo: ["I will make some questions about the problem"],
    usage: '["on working"]'

};
