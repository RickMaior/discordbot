const mongoose = require("mongoose");

const infoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  userID: String,
  xp: Number,
  sendMessage: Boolean,
  favoriteColor: String,
  server: String,
  time: String
});

module.exports = mongoose.model("Info", infoSchema);
