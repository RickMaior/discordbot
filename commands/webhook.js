const { messageCollect } = require("../utils/messageFunctions.js");
const webHookFn = require("../utils/webhookFunctions.js");

module.exports.run = async (bot, message, args) => {

    



    // if(!args[0])   { const messageSend = await messageCollect("What is the message you want to send",message)}

    const messageSend = await messageCollect("What is the message you want to send", message)
    if (!messageSend) return message.reply("Error getting the message")
    console.log(messageSend)


    // const webHookData = await webHookFn.webHookByURL(message)
    // console.log(webHookData)


    const webHookData = await webHookFn.webHookByIdToken(message)
    console.log(webHookData)


    // test webhook id:     674439506623070238
    //              token:  OJisYdcfA65s_P-z1eNfQCUUs5BayJeSRxioef4keozULqMzLY4A13c_S-jHiO5uFJ-V

    //can share  https://discordapp.com/api/webhooks/675509522193711104/EULdnScdEzzew5R0ybFjpKEemsCaIrO-A3_wsNG4E6RrSzRGYAIX3ecZ6a-i2eTNGPnK

    // use an webhook by id and token
    let webhook = await bot.fetchWebhook(webHookData.id, webHookData.token)
        .then((webhook) => { 
            webhook.send(messageSend);
            if (message.channel.type === "dm") { message.reply("WebHook sended") }
         })
        .catch((err) => {
            message.reply("there was an error getting your webhook, verify you got the right values.")
            console.log(err)
        })



    // // get true and falase for every webhook on a room
    // let fetchWebhooks = await message.channel.fetchWebhooks();
    // console.log("fetched:")
    // console.log(fetchWebhooks)
    // console.log("fetchWebhooks.owner:")
    // fetchWebhooks.map((singleHook)=>console.log(singleHook.owner.id ===  bot.user.id))


    // // create a new webhook for the channel
    //   let webhook = await  message.channel.createWebhook("test")
    //   webhook.send(messageSend)

};

module.exports.help = {
    name: "WebHook",
    command: "webhook",
    aliases: ["web"],
    helpInfo: ["I will send an webhook"],
    usage: '["!webhook text"]'
};
