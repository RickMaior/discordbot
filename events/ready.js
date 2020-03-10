
const activity = process.env.ACTIVITY;

require("dotenv").config();

const mongoose = require("mongoose"); // necessario para ligar a mongoose

module.exports = async bot => {
  bot.user.setActivity(activity);

  bot.me = bot.users.cache.get("265122531114090496"); // bot.me é meu id

  bot.queue = [];
  console.log("\nQueue was created");

  // stuff from each server


  // // hope this comment doesnt break anithing
  // //  todo check this comment
  // bot.guilds.map((guild) =>{
  //   guild.variable = [];
  //   guild.membersOn = new Set ;
  //   // arr of membersON   let arr = [ . . . set];
    
  // })
 

  bot.game = false;
  console.log("Game lock was created");

  console.log("Database is loading...\n");

  try {
    mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${
        process.env.DB_HOST
      }-ysqaz.mongodb.net/test?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true
      }
    );
  } catch (err) {
    console.log(err);
  }

  await mongoose.connection
    .once("open", function() {
      console.log("Connection with database has been made");
    })
    .on("error", function(error) {
      console.log("Connection with database: " + error);
    });

  // try {
  //   const guildData = await serverInfo.find(); // just get every guild setting in  one single db call
  //   console.log("Db finish load");
  //   bot.guilds.forEach(guild => {
  //     if (guildData.find(g => g.server === guild.id)) {
  //       //found a guild setting
  //       console.log("Guild saved");
  //     } else {
  //       bot.info.prefix = settings.prefix;
  //       console.log("Guild not saved");
  //     }
  //   });
  //   console.log("Prefix all setup");
  // } catch (err) {
  //   console.log(err);
  // }


  // bot.prefixes = new Map(); // fazer isto mas no evento message
  

  // bot.guilds.forEach(async botGuild => {
  //   let prefix = settings.prefix;
  //   const guild = await serverInfo.findOne({ server: botGuild.id });
  //   if (guild && guild.prefix) {
  //     prefix = guild.prefix;
  //   }
  //   bot.prefixes.set(botGuild.id, prefix);
  //   console.log("bot.prefixes = " + prefix);
  // });

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
