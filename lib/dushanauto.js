 const AutoSendGroup = require("../lib/models/AutoSendGroup");

async function startAutoSend(conn, startAutoTikTokBot) {
    try {
        const groups = await AutoSendGroup.find({});
        const groupJids = Array.isArray(groups) ? groups.map(g => g.jid) : [];
        if (groupJids.length > 0) {
            console.log("📂 AutoSend Active Groups:", groupJids);
            startAutoTikTokBot(conn, groupJids);
        }
    } catch (err) {
        console.error("❌ Error in startAutoSend:", err);
    }
}

module.exports = { startAutoSend };
