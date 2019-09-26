const Discord = require("discord.js");

const { getInfo } = require("ytdl-getinfo");

const YouTube = require("simple-youtube-api");

//arr.length === 0 -> para ver se ta vazio

module.exports.run = async (bot, message, args) => {
  // youtube
  //   .searchVideos("Centuries", 5)
  //   .then(results => {
  //     console.log(`The result's title is: ${results[0].title}`);
  //     console.log(`The result's url is: ${results[0].url}`);
  //   })
  //   .catch(console.log);
  //   let video = await youtube.searchVideos("Centuries", 8)
  //   console.log(`The video's title is: ${video[0].title}`);
  //     console.log(`The video's url is: ${video[0].url}`);

  // // ^ procura e em baixo comando anterior

  let queue = bot.queue
  const { voiceChannel } = message.member;
  if (!args[0]) {
    if (queue.length !== 0) {
      message.channel.send("There is queue");
    } else {
      message.channel.send("There is no queue");
    }
    console.log("pls give me something");
  } else {
    switch (args[0]) {
      case "next":
        let value = queue.shift();
        if (value) {
          message.channel.send(
            `Playing now: **${value.title}** submited by <@${value.userID}>`
          );
        } else {
          message.channel.send("No musics on queue");
          if (queue.length === 0) {
            voiceChannel.leave();
          }
        }
        break;
      case "delete":
        queue = [];
        message.reply("The queue was deleted");
        break;
      case "add":
        //  if(queue.length === 0){
        //   if (!voiceChannel) {
        //     return message.reply("please join a voice channel first!");
        //   }else{voiceChannel.join()}
        // }
        let info = await getInfo(args.slice(1).join(" "));


        //console.log("O 2  titulo é: " + info.items[0].title);
        await queue.push({
          userID: message.author.id,
          title: info.items[0].title,
          yturl: info.items[0].webpage_url,
          url: info.items[0].url
          //discordMusic: something
        });

        const embed = new Discord.RichEmbed()
          .setTitle("Youtube")
          .setImage(info.items[0].thumbnail)
          .addField("The music", `[info.items[0].title](https://google.com)`)
          .addField(" has been added by ", "<@" + message.author.id + ">")

        await message.channel.send(embed)
        console.log(info.items[0].url)

        // await message.channel.send(
        //   `The music **${info.items[0].title}** was added by __<@${
        //     message.author.id
        //   }>__ and have the link ${info.items[0].webpage_url}`
        // );

        break;
      case "play":
        break;
      default:
        message.channel.send("Please use a valid command");
    }
  }
};

module.exports.help = {
  name: "YoutubeLink",
  command: "youtubelink",
  aliases: ["ytlink", "yt2"],
  helpInfo: ["just cheking youtube links"]
};
