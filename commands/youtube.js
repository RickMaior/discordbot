const ytdl = require("ytdl-core");
/*const queue = [];

queue.push({
  userID: message.author.id,
  title: something,
  url: something,
})

if(!queue.length) return;
const { userID, title, url } = queue.shift();
// play the song */

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
      console.log("stream: ")
      console.log(JSON.stringify(stream, null, 2));
      const dispatcher = connection.playStream(stream);
      console.log("dispatcher= " + dispatcher)

      dispatcher.on("end", () => voiceChannel.leave());
    });
  }
};

module.exports.help = {
  name: "Youtube",
  command: "youtube",
  aliases: ["yt"],
  helpInfo: ["1º join a voice chat\nIf the bot gets any error, take him out of the room and try again"]
};
