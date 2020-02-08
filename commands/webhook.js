const {messageCollect} = require("../utils/messageFunctions.js");
const webHookFn = require("../utils/webhookFunctions.js");

module.exports.run = async (bot, message, args) => {
    message.reply("Command under work")

    if(!args[0]) return message.reply("what is the message");

   

    // const webHookData = await webHookFn.webHookByURL(message)
    // console.log(webHookData)
  

    const webHookData = await webHookFn.webHookByIdToken(message)
    console.log(webHookData)


    // test webhook id:     674439506623070238
    //              token:  OJisYdcfA65s_P-z1eNfQCUUs5BayJeSRxioef4keozULqMzLY4A13c_S-jHiO5uFJ-V

    //can share  https://discordapp.com/api/webhooks/675509522193711104/EULdnScdEzzew5R0ybFjpKEemsCaIrO-A3_wsNG4E6RrSzRGYAIX3ecZ6a-i2eTNGPnK

    // // use an webhook by id and token
    // let webhook = await bot.fetchWebhook(id,token)
    // webhook.send(args[0]);


    // // get true and falase for every webhook on a room
    // let fetchWebhooks = await message.channel.fetchWebhooks();
    // console.log("fetched:")
    // console.log(fetchWebhooks)
    // console.log("fetchWebhooks.owner:")
    // fetchWebhooks.map((singleHook)=>console.log(singleHook.owner.id ===  bot.user.id))


    // // create a new webhook for the channel
    //   let webhook = await  message.channel.createWebhook("test")
    //   webhook.send(args[0])

};

module.exports.help = {
    name: "WebHook",
    command: "webhook",
    aliases: ["web"],
    helpInfo: ["I will send an webhook"],
    usage: '["!webhook text"]'
};
