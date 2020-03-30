
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    //tentar const member = message.mentions.members.first() || client.members.get(args[0]);
    await message.channel.startTyping();
    if (!args[0]) {
        var member = message.member
    } else {

        var member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    }
   
    if (!member){
        message.reply("Member was not found")
        return message.channel.stopTyping(true);
          
        }
    let string1 = "__**Name**__: " + member.user.username + "\n" + "__**ID**__: " + member.id + "\n" + "__**Creation of account**__: " + member.user.createdAt + "\n" + "__**Bot**__: " + member.user.bot
    let string2 = "__**Nickname**__: " + member.nickname + "\n" + "__**Joined at**__: " + member.joinedAt + "\n" + "__**Roles**__: " + member.roles.size + "\n" + "__**Status**__: " + member.presence.status

    let embed = new Discord.MessageEmbed()
        .setTitle("Info about " + member.user.username)
        .setColor(member.displayHexColor, true)
        .setThumbnail(member.user.displayAvatarURL())
        .addField("User info", string1)
        .addField("Server info", string2)



    message.channel.send(embed);

   // return await message.channel.stopTyping(true);
    

};

module.exports.help = {
    name: "Info",
    command: "info",
    aliases: ["userinfo"],
    helpInfo: ["shows person info"],
    usage: '["id of user"]'
};