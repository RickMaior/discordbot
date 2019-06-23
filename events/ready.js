const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const activity = "Ping me";

module.exports = async (bot) => {


    bot.user.setActivity(activity);

    console.log("Bot is loading...\n");

     console.log("Bot Username: " + bot.user.tag);
     console.log("Bot ID: " + bot.user.id);
     console.log("Users: " + bot.users.size);
     console.log("Servers: " + bot.guilds.size);

    console.log("Bot has been successfully loaded.");

}

module.exports.help = {
    name: "Ready",
    event: "ready"
}