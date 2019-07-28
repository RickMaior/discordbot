const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const Attachment = require('discord.js').Attachment;
const fs = require("fs");
const ms = require("ms");
const { getInfo } = require("ytdl-getinfo");

module.exports.run = async (bot, message, args) => {
  // let music = await message.channel.send("(￣▽￣)/♫•*¨*•.¸¸♪");

  // if(music){
  // while (1 === 1) {
    await music.edit(" (￣▽￣)/♪♫•*¨*•.¸¸ ");

    await music.edit(" (￣▽￣)/¸♪♫•*¨*•.¸ ");

    await music.edit(" (￣▽￣)/¸¸♪♫•*¨*•. ");

    await music.edit(" (￣▽￣)/.¸¸♪♫•*¨*• ");

    await music.edit(" (￣▽￣)/•.¸¸♪♫•*¨* ");

    await music.edit(" (￣▽￣)/*•.¸¸♪♫•*¨ ");

    await music.edit(" (￣▽￣)/¨*•.¸¸♪♫•* " );

    await music.edit(" (￣▽￣)/*¨*•.¸¸♪♫• ");

    await music.edit(" (￣▽￣)/♫•*¨*•.¸¸♪ ");
    
  // }}

  await message.channel.send({ files: [new Attachment('./images/image1.PNG', 'image1.PNG')] }); // enviar giff/imagem
  await message.channel.send({ files: [new Attachment('./images/200.webp', '200.webp')] }); // nao envia giff

 


 };

module.exports.help = {
  name: "Hi2",
  command: "hi2",
  aliases: ["hello2", "Hello2", "win"],
  helpInfo: ["I will say hi"]
};
