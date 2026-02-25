 
const mongoose = require("mongoose");

const SentVideoSchema = new mongoose.Schema({
    groupJid: { type: String, required: true },
    videoUrl: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("SentVideo", SentVideoSchema);
