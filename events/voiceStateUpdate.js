

const TempRoom = require("../models/tempRoom.js");
const mongoose = require("mongoose");

module.exports = async (bot, oldMember, newMember) => {

  // to do fix this command

  
  console.log("A user join/leave a voice channel");
  //console.log(newMember.voiceChannelID )
  let newVoiceRoom;
  let especialRoom = "593592505287835648"; // just for now

  if (newMember.voiceChannelID === especialRoom) {
    console.log("Entrou em room especial");
    newVoiceRoom = await newMember.voiceChannel
      .clone(
        "__" + newMember.user.username + "'s voice room",
        true,
        false,
        "Needed a clone"
      )
      .then(clone => clone.setParent(newMember.voiceChannel.parent.id));

    // console.log("NewvoiceRoom= "+newVoiceRoom)
    //clone => {
    // console.log(
    //   /*Cloned ${channel.name}*/ `to make a channel called ` /*${clone.name}*/
    //  );
    //clone.setParent(newMember.voiceChannel.parentID);
    //}

    let tempRoom = new TempRoom({
      _id: mongoose.Types.ObjectId(),
      server: newMember.guild.id, //.id
      roomName: "__" + newMember.user.username + "'s voice room",
      roomID: newVoiceRoom.id
    });

    tempRoom
      .save()
      .then(/*result => console.log(result)*/)
      .catch(err => console.log(err));

    await newMember.setVoiceChannel(newVoiceRoom); // falta apagar o ficheiro depois de sair da voice room
  }
  if (oldMember) {
    if (oldMember.voiceChannelID !== especialRoom && oldMember.voiceChannel) {
      if (oldMember.voiceChannel.members.size === 0) {
        console.log("oldMember= " + oldMember.voiceChannelID);

        if (
          await TempRoom.exists({
            server: oldMember.guild.id,
            roomID: oldMember.voiceChannelID
          })
        ) {
          oldMember.voiceChannel.delete();
          TempRoom.deleteOne(
            {
              server: oldMember.guild.id,
              roomID: oldMember.voiceChannelID
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
