const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const ytdl = require("ytdl-core");

module.exports.run = async (bot, message, args) => {
  const { voiceChannel } = message.member;
  let link = args[0];

  if (!voiceChannel) {
    return message.reply("please join a voice channel first!");
  }

  if (!args[0]) {
    message.reply("Give me the link of what you want me to play");
  } else {
    voiceChannel.join().then(connection => {
      const stream = ytdl(link, { filter: "audioonly" });
      const dispatcher = connection.playStream(stream);

      dispatcher.on("end", () => voiceChannel.leave());
    });
  }
};

module.exports.help = {
  name: "Youtube",
  command: "youtube",
  aliases: ["yt"],
  helpInfo: ["No description yet"]
};
