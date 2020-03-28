const { messageAuthorCollect } = require("../utils/messageFunctions.js");
const webHookFn = require("../utils/webhookFunctions.js");
const emojiCharacters = require("../emojiCharacters");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {





    // if(!args[0])   { const messageSend = await messageAuthorCollect("What is the message you want to send",message)}

    const messageSend = await messageAuthorCollect("What is the message you want to send", message)
    if (!messageSend) return message.reply("Error getting the message")
    console.log(messageSend)

    // // // start



    const embed = new Discord.MessageEmbed()
        .setColor('DEFAULT')
        .setTitle('Sending webhook')
        .setDescription(`react with ${emojiCharacters[1]} if you want to just give the link, or with  ${emojiCharacters[2]} if you want to give the Id and the Token`)


    let msg = await message.author.send(embed)



    //confirmçao se envia menssagem ou nao


    msg.react(emojiCharacters[1]).then(() => msg.react(emojiCharacters[2]));

    const filter = (reaction, user) => {
        return [emojiCharacters[1], emojiCharacters[2]].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    let webHookData
    collected = await msg.awaitReactions(filter, { max: 1 })

    const reaction = collected.first();

    if (reaction.emoji.name === emojiCharacters[1]) {
        //message.author.send('you picked by link');
        webHookData = await webHookFn.webHookByURL(message)
        console.log(webHookData)

    } else {
        //message.author.send('You picked by token/id');
        webHookData = await webHookFn.webHookByIdToken(message)
        console.log(webHookData)
    }








    // // test webhook id:     674439506623070238
    // //              token:  OJisYdcfA65s_P-z1eNfQCUUs5BayJeSRxioef4keozULqMzLY4A13c_S-jHiO5uFJ-V

    // //can share  https://discordapp.com/api/webhooks/675509522193711104/EULdnScdEzzew5R0ybFjpKEemsCaIrO-A3_wsNG4E6RrSzRGYAIX3ecZ6a-i2eTNGPnK

    // // use an webhook by id and token
    bot.fetchWebhook(webHookData.id, webHookData.token)
        .then((webhook) => {
            webhook.send(messageSend);
            if (message.channel.type === "dm") { message.reply("WebHook sended") }
        })
        .catch((err) => {
            message.reply("there was an error getting your webhook, verify you got the right values.")
            console.log(err)
        })



    // // // get true and falase for every webhook on a room
    // // let fetchWebhooks = await message.channel.fetchWebhooks();
    // // console.log("fetched:")
    // // console.log(fetchWebhooks)
    // // console.log("fetchWebhooks.owner:")
    // // fetchWebhooks.map((singleHook)=>console.log(singleHook.owner.id ===  bot.user.id))


    // // // create a new webhook for the channel
    // //   let webhook = await  message.channel.createWebhook("test")
    // //   webhook.send(messageSend)

};

module.exports.help = {
    name: "WebHook",
    command: "webhook",
    aliases: ["web"],
    helpInfo: ["I will send an webhook"],
    usage: '["!webhook text"]'
};
