

module.exports.run = async (bot, message) => {

  let link = await bot
    .generateInvite(["ADMINISTRATOR"])
    .then(link => {
      console.log(`Generated bot invite link: ${link}`);
      message.reply(`Link to invite me: ${link}`);
    })
    .catch(console.error);

  

   

};

module.exports.help = {
  name: "Invite",
  command: "invite",
  aliases: ["link"],
  helpInfo: ["No description yet"],
  usage:'["on working"]'
};
