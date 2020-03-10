

module.exports = async (bot, member) => {
  let guild = bot.guilds.cache.find(guild => guild.id === member.guild.id);
  let welcome = guild.channels.cache.find(channel => channel.name === "welcome");
  if (welcome) {
    welcome.send(`Welcome to our server ${member}`);
  }
};

module.exports.help = {
  name: "GuildMemberAdd",
  event: "guildMemberAdd"
};
