const settings = require("../bot/settings.json");

const fs = require("fs");
const ms = require("ms");

module.exports = async (bot ,guild )=> {
    console.log("I just disconnected from-> " + guild)    
};

module.exports.help = { // when the bot joins one server
  name: "GuildDelete",
  event: "guildDelete"
};