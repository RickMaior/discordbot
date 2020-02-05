


module.exports.run = async (bot, message, args) => {
    message.reply("Command under work")

    // // use an webhook by id and token
    // let webhook = await bot.fetchWebhook("id","token")
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
