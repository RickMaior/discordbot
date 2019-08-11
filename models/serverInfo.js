const mongoose = require("mongoose");

const serverInfoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  prefix: String,
  server: String
});

module.exports = mongoose.model("ServerInfo", serverInfoSchema);