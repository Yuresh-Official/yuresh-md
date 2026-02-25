 const { getContentType, downloadContentFromMessage, jidDecode } = require("@whiskeysockets/baileys");

/**
 * Simplify incoming Baileys message object
 * @param {import("@whiskeysockets/baileys").WASocket} conn
 * @param {import("@whiskeysockets/baileys").proto.WebMessageInfo} m
 */
function smsg(conn, m) {
    if (!m) return m;

    m.chat = m.key.remoteJid;
    m.fromMe = m.key.fromMe;
    m.sender = m.fromMe ? (conn.user?.id || "") : (m.key.participant || m.chat);
    m.isGroup = m.chat.endsWith("@g.us");

    m.mtype = getContentType(m.message) || "text";
    m.msg = m.message?.[m.mtype];

    m.body =
        m.message?.conversation ||
        m.msg?.text ||
        m.msg?.caption ||
        m.msg?.contentText ||
        m.msg?.selectedDisplayText ||
        m.msg?.title ||
        "";

    m.isCmd = /^[:/!.#]/.test(m.body);
    m.command = m.isCmd ? m.body.trim().split(/\s+/)[0].substring(1).toLowerCase() : "";

    m.args = m.body.trim().split(/\s+/).slice(1);
    m.q = m.args.join(" ");

    return m;
}

module.exports = { smsg };
