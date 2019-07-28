const settings = require("../bot/settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const activity = "Ping me";
require("dotenv").config();

const mongoose = require("mongoose"); // necessario para ligar a mongoose

module.exports = async bot => {
  bot.user.setActivity(activity);

  bot.me = bot.users.get("265122531114090496"); // bot.me é meu id
  bot.queue = [];
  bot.game = false;

  console.log("\nQueue was created");
  console.log("Game lock was created");

  console.log("Database is loading...\n");

  // await mongoose.connect("mongodb://localhost/server", {
  //   useNewUrlParser: true
  // });
try{
    mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${
      process.env.DB_HOST
    }-ysqaz.mongodb.net/test?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true
    }
  )} catch(err)  {console.log(err)};


  await mongoose.connection
    .once("open", function() {
      console.log("Connection with database has been made");
    })
    .on("error", function(error) {
      console.log("Connection with database: " + error);
    });

  console.log("Bot is loading...\n");
  console.log("Bot Username: " + bot.user.tag);
  console.log("Bot ID: " + bot.user.id);
  console.log("Users: " + bot.users.size);
  console.log("Servers: " + bot.guilds.size);

  console.log("Bot has been successfully loaded.");
};

module.exports.help = {
  name: "Ready",
  event: "ready"
};
