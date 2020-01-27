
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    //tentar const member = message.mentions.members.first() || client.members.get(args[0]);

    if (!args[0]) {
        var member = message.member
    } else {
        var member = message.mentions.members.first()
    }
    if (!member) return message.reply("Member was not found")
    let string1 = "__**Name**__: " + member.user.username + "\n" + "__**ID**__: " + member.id + "\n" + "__**Creation of account**__: " + member.user.createdAt + "\n" + "__**Bot**__: " + member.user.bot
    let string2 = "__**Nickname**__: " + member.nickname + "\n" + "__**Joined at**__: " + member.joinedAt + "\n" + "__**Roles**__: " + member.roles.size + "\n" + "__**Status**__: " + member.presence.status

    let embed = new Discord.RichEmbed()
        .setTitle("Info about " + member.user.username)
        .setColor(member.displayHexColor, true)
        .setThumbnail(member.user.avatarURL)
        .addField("User info", string1)
        .addField("Server info", string2)



    message.channel.send(embed);


};

module.exports.help = {
    name: "Info",
    command: "info",
    aliases: ["userinfo"],
    helpInfo: ["shows person info"],
    usage: '["id of user"]'
};