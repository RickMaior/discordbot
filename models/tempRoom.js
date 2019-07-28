const mongoose = require("mongoose");

const tempRoomSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  server: String,
  roomName: String,
  roomID: String
});

module.exports = mongoose.model("TempRoom", tempRoomSchema);
