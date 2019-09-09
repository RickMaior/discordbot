const settings = require("../bot/settings.json");

const fs = require("fs");
const ms = require("ms");

module.exports = async (bot, messageReaction, user) => {
    console.log("message reactio: " + messageReaction.emoji);
     

};

module.exports.help = { // when the bot joins one server
  name: "messageReactionAdd",
  event: "messageReactionAdd"
};