
const ServerInfo = require("../models/serverInfo.js");
const TempRoom = require("../models/tempRoom.js");
const mongoose = require("mongoose");

module.exports = async (bot, oldState, newState) => {

  // to do fix this command


  console.log("Event  voice update");
  //console.log(newState.channelID )
  let newVoiceRoom;
  const info = await ServerInfo.findOne({ server: newState.guild.id });
  if (!info) return console.log("server not saved")
  let especialRoom = info.voiceRoom; // just for now

  if (newState.channelID === especialRoom) {
    console.log("Entrou em room especial");

    console.log("name:")
    console.log(newState.member.user.username)
    newVoiceRoom = await newState.channel
      .clone({
        name: "__" + newState.member.user.username + "'s voice room",
        parent: newState.channel.parent.id,
        reason: "Clone for the infinite room"
      })
    



    let tempRoom = new TempRoom({
      _id: mongoose.Types.ObjectId(),
      server: newState.guild.id, //.id
      roomName: "__" + newState.member.user.username + "'s voice room",
      roomID: newVoiceRoom.id
    });

    tempRoom
      .save()
      .then(/*result => console.log(result)*/)
      .catch(err => console.log(err));

     await newState.setChannel(newVoiceRoom); // falta apagar o ficheiro depois de sair da voice room
  }

  // deleate room
  if (oldState) {
    if (oldState.channelID !== especialRoom && oldState.channel) {
      if (oldState.channel.members.size === 0) {
        console.log("oldState= " + oldState.channelID);

        if (
          await TempRoom.exists({
            server: oldState.guild.id,
            roomID: oldState.channelID
          })
        ) {
          oldState.channel.delete();
          TempRoom.deleteOne(
            {
              server: oldState.guild.id,
              roomID: oldState.channelID
            },
            function(err) {
              if (err) return handleError(err);
            }
          );
        }
      }
    }
  }

};

module.exports.help = {
  name: "VoiceStateUpdate",
  event: "voiceStateUpdate"
};
