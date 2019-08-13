const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

let queue = [];
/*



if(!queue.length) return;
const { userID, title, url } = queue.shift();
// play the song*/

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    message.channel.send("The current queue is: " + queue);
  } else {
    switch (args[0]) {
      case "view":
        message.channel.send(`the queue have `)
        break;
      case "pick":
        let value = queue.shift();
        message.channel.send("The next on queue is: " + value);
        break;

      case "next":
        message.channel.send("The next on queue is: " + queue[0].args0+ " ,submited by <@" + queue[0].userID+ ">");
        break;

      case "delete":
        queue = [];
        message.channel.send("The queue was deleted");
        break;

      default:
        queue.push({
          userID: message.author.id,
          args0: args[0],
          args1: args[1]
        });

        message.channel.send("Added to queue " + args[0] +" and: "+ args[1]);
        break;
    }
  }
  console.log("queue= " + queue);
};

module.exports.help = {
  name: "Queue",
  command: "queue",
  aliases: [],
  helpInfo: ["Test of queue"]
};