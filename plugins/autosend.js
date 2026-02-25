 const { cmd } = require('../command');
const AutoSendGroup = require("../lib/models/AutoSendGroup");


//const AutoSendGroup = require("../models/AutoSendGroup");

//const AutoSendGroup = require("../lib/models/AutoSendGroup");

cmd({
    pattern: "autolist",
    fromMe: true, // only for bot owner
    desc: "Show active autosend groups",
    type: "auto",
    async handler(m) {
        try {
            const groups = await AutoSendGroup.find({});
            if (groups.length === 0) {
                return await m.reply("❌ No autosend groups found.");
            }

            let msg = "📋 *AutoSend Active Groups:*\n\n";
            msg += groups.map((g, i) => `${i + 1}. ${g.jid}`).join("\n");

            await m.reply(msg);
        } catch (err) {
            console.error("Error fetching AutoSend list:", err.message);
            await m.reply("⚠️ Error fetching list.");
        }
    },
});

cmd({
  pattern: "autosend",
  desc: "Enable/Disable Auto TikTok Sender",
  category: "group",
  use: "<group_jid> on/off",
  filename: __filename
},
async (conn, m, msg, { args, isOwner, isGroup, groupMetadata }) => {
    const [jidArg, status] = args;
    const targetJid = jidArg?.endsWith("@g.us") ? jidArg : m.chat;

    if (!status || !["on", "off"].includes(status))
        return msg.reply("🧾 Use: .autosend [group_jid] on/off");

    let isAdmin = false;
    if (isGroup) {
        const admins = groupMetadata.participants.filter(p => p.admin);
        isAdmin = admins.some(p => p.id === m.sender);
    }

    if (!isOwner && !isAdmin)
        return msg.reply("❌ Only group admins or bot owner can use this.");

    if (status === "on") {
        await AutoSendGroup.updateOne({ jid: targetJid }, { jid: targetJid }, { upsert: true });
        return msg.reply(`✅ Auto TikTok enabled for ${targetJid}`);
    } else {
        await AutoSendGroup.deleteOne({ jid: targetJid });
        return msg.reply(`❌ Auto TikTok disabled for ${targetJid}`);
    }
});
