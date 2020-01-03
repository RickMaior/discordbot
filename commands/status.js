const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let online = message.guild.members.filter(s => s.presence.status == "online").size
    let offline = message.guild.members.filter(s => s.presence.status == "offline").size
    let dnd = message.guild.members.filter(s => s.presence.status == "dnd").size
    let idle = message.guild.members.filter(s => s.presence.status == "idle").size

    message.channel.send("There is " + online +" people online, " + offline + " people offline, " + dnd +" dont disturb people and " + idle + " idle people");

// :b_online: = "online"
// :b_offline: = "offline"
// :b_dnd: = "dnd"
// :b_idle: = "idle"



};

module.exports.help = {
  name: "Status",
  command: "status",
  aliases: [],
  helpInfo: ["Status of the server"],
  usage:'["on working"]'
};
