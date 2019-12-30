const settings = require("../bot/settings.json");



module.exports = async (bot, message) => {
  let log = settings.logRoom; //room where all notifications will be



  var room = message.guild.channels.find(room => room.name === log);

  if (room) {
    if (message.channel.name != log) {
      room.send(`A message  was deleted in ${message.channel.name}`);
      console.log(`A message  was deleted in ${message.channel.name}`);
    }
  }
};

module.exports.help = {
  name: "MessageDelete",
  event: "messageDelete"
};
