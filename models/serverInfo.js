const mongoose = require("mongoose");

const serverInfoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  prefix: String,
  voiceRoom: String,
  server: String
});

module.exports = mongoose.model("ServerInfo", serverInfoSchema);