const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

const { getInfo } = require("ytdl-getinfo");

const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAJ86tujARTeKe6dFPeQ4BT6_APvqn6_b8");

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
  
  // const { voiceChannel } = message.member;
  // if (!args[0]) {
  //   if (bot.queue.length !== 0) {
  //     message.channel.send("There is queue");
  //   } else {
  //     message.channel.send("There is no queue");
  //   }
  //   console.log("pls give me something");
  // } else {
  //   switch (args[0]) {
  //     case "next":
  //       let value = bot.queue.shift();
  //       if (value) {
  //         message.channel.send(
  //           `Playing now: **${value.title}** submited by <@${value.userID}>`
  //         );
  //       } else {
  //         message.channel.send("No musics on queue");
  //         if(bot.queue.length === 0){voiceChannel.leave()}
  //       }
  //       break;
  //     case "delete":
  //       bot.queue = [];
  //       message.reply("The queue was deleted");
  //       break;
  //     case "add":
  //       //  if(bot.queue.length === 0){
  //       //   if (!voiceChannel) {
  //       //     return message.reply("please join a voice channel first!");
  //       //   }else{voiceChannel.join()}
  //       // }
  //       let info = await getInfo(args.slice(1).join(" "));
  //       console.log("info.items= " + info.items);
  //       console.log("O 2  titulo é: " + info.items[1].title);
  //       //for( let i=0 ;i < 5 ;i++ ){
  //        //await  console.log("Os 5 primeiros titulos sao: " + info.items[i].title )
  //       //}
  //       await bot.queue.push({
  //         userID: message.author.id,
  //         title: info.items[0].title,
  //         yturl: info.items[0].webpage_url,
  //         url: info.items[0].url
  //         //discordMusic: something
  //       });
  //       await message.channel.send(
  //         `The music **${info.items[0].title}** was added by __<@${
  //           message.author.id
  //         }>__ and have the link ${info.items[0].webpage_url} with url ${
  //           info.items[0].url
  //         }`
  //       );
  //       break;
  //     case "play":
  //       break;
  //     default:
  //       message.channel.send("Please use a valid command");
  //   }
  // }
};

module.exports.help = {
  name: "YoutubeLink",
  command: "youtubelink",
  aliases: ["ytlink", "yt2"],
  helpInfo: ["just cheking youtube links"]
};
