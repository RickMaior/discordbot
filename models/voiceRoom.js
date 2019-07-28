const mongoose = require("mongoose");

const voiceRoomSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  server: String,
  roomName: String,
  roomID: String
});

module.exports = mongoose.model("VoiceRoom", voiceRoomSchema);
