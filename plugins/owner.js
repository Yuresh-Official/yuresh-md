 const {
  default: makeWASocket,
  downloadContentFromMessage
} = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');
const { cmd } = require('../command');

const commandvv = {
  pattern: 'vv',
  alias: ["viewonce", "decvv"],
  desc: 'Decrypt ViewOnce image/video/audio (Owner only)',
  category: "owner",
  use: ".vv (reply to ViewOnce msg)",
  filename: __filename
};

cmd(commandvv, async (client, message, args, {
  from: chatId,
  quoted: quotedMessage,
  isOwner,
  reply
}) => {
  try {
    // Owner only
    if (!isOwner) return reply("❌ *Only the bot owner can use this command.*");

    const msg = quotedMessage;

    if (!msg) return reply("⚠️ කරුණාකර *ViewOnce පණිවිඩයකට* reply කරන්න!");

    const messageOptions = { quoted: message };
    const decryptingMsg = await client.sendMessage(chatId, {
      text: "🔓 *Decrypting the ViewOnce Message...*"
    }, messageOptions);

    const caption = msg.imageMessage?.caption || msg.videoMessage?.caption || "> 🥷ᴘᴏᴡᴇʀᴅ ʙʏ Cyber Yakuza 💀";

    // Detect media type
    if (msg.imageMessage?.viewOnce) {
      const buffer = await msg.download();
      await client.sendMessage(chatId, {
        image: buffer,
        caption
      }, messageOptions);
    } else if (msg.videoMessage?.viewOnce) {
      const buffer = await msg.download();
      await client.sendMessage(chatId, {
        video: buffer,
        caption
      }, messageOptions);
    } else if (msg.audioMessage?.viewOnce) {
      const buffer = await msg.download();
      await client.sendMessage(chatId, {
        audio: buffer,
        mimetype: 'audio/mp4', // adjust if needed
        ptt: true
      }, messageOptions);
    } else {
      return reply("❌ මෙය *ViewOnce* පණිවිඩයක් නොවේ!");
    }

    // Delete decrypting message
    await client.sendMessage(chatId, {
      delete: decryptingMsg.key
    });

  } catch (err) {
    console.error("ViewOnce error:", err);
    reply("⚠️ පණිවිඩය decrypt කිරීමේදී දෝෂයක් ඇතිවිය:\n" + err.message);
  }
});
