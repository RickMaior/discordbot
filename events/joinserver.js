

module.exports = async (bot, guild) => {
     
    let welcome = guild.channels.find(channel => channel.name === "welcome");
    let general = guild.channels.find(channel => channel.name === ("general" || "geral"));
    console.log("I just connected to-> " + guild)   
    
    if (welcome) {
      welcome.send("Hi everione, now you can relax, i am here");
    }else{
        messsage.defaultChannel.send("Hi everione, now you can relax, i am here here");   
    }
};

module.exports.help = { // when the bot joins one server
  name: "Join Server",
  event: "guildCreate"
};