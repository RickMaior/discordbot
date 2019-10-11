

module.exports.run = async (bot, message, args) => {
  //if (!message.member.roles.find(r => r.name === "BOSS")) return message.channel.send('YOU HAVE NO PERMISSIONS') // check for the role

  if(message.author.id != "265122531114090496" ){
  message
    .reply("YOU ARE THE BOSS.\nBut dont forget that <@265122531114090496> is the real boss!!")
    .then(message.react("😎")); /*  reage com o emote e messagem  com id*/
  }else{
    message.reply("You are the boss")
    .then(message.react("😎"));

  }
};

module.exports.help = {
  name: "Boss",
  command: "boss",
  aliases: [NaN],
  helpInfo: ["NaN"],
  helpInfo: ["Just tells who is the boss"],
  usage:'["on working"]'
};
