

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.channel.send("YOU HAVE NO PERMISSIONS");
    
  message.mentions.users.forEach(user => {
    message.mentions.users.first();

    if (!user) {
      message.reply("Pls tell me who you want to kick");
    } else {
      const member = message.guild.member(user);
      if (!member) {
        message.reply("That user isn't in this guild!");
      } else {
        
        let kickReason = "You were kicked from the server by the bot";
        if(args.slice(1).join(" "))kickReason = args.slice(1).join(" ");

        member
          .kick(kickReason)
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            message.reply("I was unable to kick the member");
            console.error(err);
          });
      }
    }
  });
};

module.exports.help = {
  name: "Kick",
  command: "kick",
  aliases: [NaN],
  helpInfo: ["kick the players you pinged"],
  usage: "<@user>"
};
