



module.exports.run = async (bot, message, args) => {
    
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send("YOU HAVE NO PERMISSIONS");

    var room = message.guild.channels.find(room => room.name === "log")

    
    if(!room){

    message.guild.createChannel('log', { type: 'text', parent: message.channel.parentID })
    .then(console.log)
    .catch(console.error);}
    else{
        message.reply("There is already a room log")
    }
    

};

module.exports.help = {
  name: "Logs",
  command: "logs",
  aliases: ["log"],
  helpInfo: ["It will create a room for the logs of the server, there the bot will post when a message is deleted in outher room"],
  usage:'["on working"]'
};
