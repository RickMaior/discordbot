const settings = require("../bot/settings.json");

const fs = require("fs");
const ms = require("ms");

module.exports = async (bot, member) => {
  let guild = bot.guilds.find(guild => guild.id === member.guild.id);
  let welcome = guild.channels.find(channel => channel.name === "welcome");
  if (welcome) {
    welcome.send(`Welcome to our server ${member}`);
  }
};

module.exports.help = {
  name: "GuildMemberAdd",
  event: "guildMemberAdd"
};
