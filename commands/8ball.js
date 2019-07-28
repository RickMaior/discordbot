const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    message.reply("Pls do a question");
    
  }else{

  let randomNumber = Math.floor(Math.random() * 8);

  let eightBall = "";

  switch (randomNumber) {
    case 0:
      eightBall = "It is certain";
      break;
    case 1:
      eightBall = "It is decidedly so";
      break;
    case 2:
      eightBall = "Reply hazy try again";
      break;
    case 3:
      eightBall = "Cannot predict now";
      break;
    case 4:
      eightBall = "Do not count on it";
      break;
    case 5:
      eightBall = "My sources say no";
      break;
    case 6:
      eightBall = "Outlook not soo good";
      break;
    case 7:
      eightBall = "Signs point to yes";
      break;
  }
  message.reply(eightBall);
}

};
 

module.exports.help = {
  name: "8ball",
  command: "8ball",
  aliases: [],
  helpInfo: ["Just ask a question and i will predict your future"]
};
