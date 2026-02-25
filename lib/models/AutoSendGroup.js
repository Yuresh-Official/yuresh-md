const mongoose = require("mongoose");

const AutoSendGroupSchema = new mongoose.Schema({
  jid: { type: String, required: true, unique: true }
});

module.exports = mongoose.model("AutoSendGroup", AutoSendGroupSchema);
