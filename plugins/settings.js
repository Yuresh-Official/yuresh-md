 const { cmd } = require('../command');
const config = require('../settings');

cmd({
    pattern: "settings",
    alias: ["setting", "s"],
    desc: "Display & control bot settings.",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, isOwner, reply, pushname }) => {
    try {
        // ✅ Custom owner check using JID
        const ownerJids = ['94761346248@s.whatsapp.net'];
        const senderJid = mek?.key?.participant || mek?.key?.remoteJid;

        if (!isOwner && !ownerJids.includes(senderJid)) {
            return await reply("🚫 *Access Denied!*\n\n🔒 This command is restricted to *Bot Owner* only.");
        }

        const se = `┏━❮ 🥷 𝐓𝐈𝐓𝐀𝐍 𝐗 𝐌𝐃 𝐎𝐅𝐂 🥷 ❯━
┃⛤┃• *BOT NAME*:@𝐓𝐢𝐭𝐚𝐧𝐗-𝐎𝐅𝐂☠️❗
┃⛤┃• •OWNERS* : DUSHAN X MADUWA
┃⛤┗━━━━━━━━━━━━━━𖣔𖣔
┃⛤└───────────┈⊷
┃⛤┃ *❮⛤𝐖𝐎𝐑𝐊 𝐌𝐎𝐃𝐄 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒⛤❯*
┃⛤╭─────────────·
┃⛤┃1.1 || *To Put Bot Private* 
┃⛤┃1.2 || *To Put Bot Public*
┃⛤┃1.3 || *To Put Bot Inbox* 
┃⛤┃1.4 || *To Put Bot Group*
┃⛤└───────────┈·
┃⛤┃ *❮⛤𝐀𝐔𝐓𝐎 𝐕𝐎𝐈𝐂𝐄 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒⛤❯*
┃⛤╭─────────────·
┃⛤┃2.1 || *To Enable Auto Voice* 
┃⛤┃2.2 || *To Disable Auto Voice Off* 
┃⛤└───────────┈⊷
┃⛤┃ *❮⛤𝐀𝐔𝐓𝐎 𝐑𝐄𝐏𝐋𝐘 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒⛤❯*
┃⛤╭─────────────·
┃⛤┃3.1 || *To Enable Auto reply On* 
┃⛤┃3.2 || *To Disable Auto reply Off*
┃⛤└───────────┈⊷
┃⛤┃ *❮⛤𝐀𝐔𝐓𝐎 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒⛤❯*
┃⛤╭─────────────·
┃⛤┃4.1 || *To Enable Auto Sticker On* 
┃⛤┃4.2 || *To Disable Auto Sticker Off* 
┃⛤└───────────┈⊷
┃⛤┃ *❮⛤𝐀𝐔𝐓𝐎 𝐑𝐄𝐀𝐃 𝐒𝐓𝐀𝐓𝐔𝐒⛤❯*
┃⛤╭─────────────·
┃⛤┃5.1 || *To Enable Auto Status On* 
┃⛤┃5.2 || *To Disable Auto Status Off* 
┃⛤└───────────┈⊷
┃⛤┃ *❮⛤𝐀𝐔𝐓𝐎 𝐓𝐘𝐏𝐈𝐍𝐆 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒⛤❯*
┃⛤╭─────────────·
┃⛤┃6.1 || *To Enable Auto Typing On* 
┃⛤┃6.2 || *To Disable Auto Typing Off* 
┃⛤└───────────┈⊷
┃⛤┃;*❮⛤𝐀𝐔𝐓𝐎 𝐑𝐄𝐂𝐎𝐑𝐃𝐈𝐍𝐆⛤❯*   
┃⛤╭─────────────·
┃⛤┃7.1 || *To Enable Auto Record On*
┃⛤┃7.2 || *To Disable Auto Record Off*
└───────────┈⊷
┃⛤┃ *❮⛤𝐀𝐔𝐓𝐎 𝐑𝐄𝐀𝐃 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒⛤❯*   
┃⛤╭─────────────·
┃⛤┃8.1 || *To Enable Auto Read On*
┃⛤┃8.2 || *To Disable Auto Read Off*
┃⛤└───────────┈⊷
┃⛤┃ *❮⛤𝐀𝐔𝐓𝐎 𝐑𝐄𝐀𝐂𝐓 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒⛤❯*   
┃⛤╭─────────────·
┃⛤┃9.1 || *To Enable Auto React On* 
┃⛤┃9.2 || *To Disable Auto React Off* 
┃⛤└───────────┈⊷
┃⛤┃ *❮⛤𝐀𝐔𝐓𝐎 𝐀𝐋𝐖𝐀𝐘𝐒 𝐎𝐍𝐋𝐈𝐍𝐄⛤❯*   
┃⛤╭─────────────·
┃⛤┃10.1 || *To Enable Always Online On* 
┃⛤┃10.2 || *To Disable Always Online Off*
┃⛤└───────────┈⊷
┃⛤┃ *❮⛤𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒⛤❯*   
┃⛤╭─────────────·
┃⛤┃11.1 || *To Enable AntiLink On* 
┃⛤┃11.2 || *To Disable AntiLink Off*
┃⛤└───────────┈⊷
┃⛤┃ *❮⛤𝐀𝐍𝐓𝐈 𝐁𝐀𝐃 𝐖𝐎𝐑𝐃⛤❯*   
┃⛤╭─────────────·
┃⛤┃12.1 || *To Enable AntiBad On* 
┃⛤┃12.2 || *To Disable AntiBad Off*
┃⛤└───────────┈⊷
┃⛤┃ *❮⛤𝐂𝐌𝐃 𝐑𝐄𝐀𝐃 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒⛤❯*   
┃⛤╭─────────────·
┃⛤┃•13.1 || *To Enable CmdRead On* 
┃⛤┃•13.2 || *To Disable CmdRead Off*
┃⛤┃ *❮⛤𝐀𝐔𝐓𝐎 𝐑𝐄𝐀𝐂𝐓 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒⛤❯*   
┃⛤╭─────────────·
┃⛤┃•14.1 || *To Enable Auto react On* 
┃⛤┃•14.2 || *To Disable Auto react Off*
┃⛤└───────────┈⊷
┗━━━━━━━━━━━━━━𖣔𖣔

 *@𝐓𝐢𝐭𝐚𝐧𝐗-𝐎𝐅𝐂☠️❗*`;

        const settingsMsg = await conn.sendMessage(from, {
  image: { url: 'https://files.catbox.moe/2ub8v5.jpg' },
  caption: se,
  contextInfo: {
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363372114070566@newsletter',
      newsletterName: "ᴛɪᴛᴀɴ x ʙᴏᴛ",
      serverMessageId: 999
    },
    externalAdReply: {
      title: 'ᴛɪᴛᴀɴ x ʙᴏᴛ',
      body: 'ᴛɪᴛᴀɴ x ᴍᴅ',
      mediaType: 1,
      sourceUrl: "https://youtube.com/@seekerdef?si=vcT-6he5DMvXSrR8",
      thumbnailUrl: "https://files.catbox.moe/2ub8v5.jpg",
      renderLargerThumbnail: false,
      showAdAttribution: true
    }
  }
}, { quoted: mek });

        const targetMsgId = settingsMsg.key.id;

        const cmdMap = {
            '1.1': '.private on',
            '1.2': '.public on',
            '1.3': '.group on',
            '1.4': '.inbox on',
            
            '2.1': '.autovoice on',
            '2.2': '.autovoice off',
            
            '3.1': '.autoreply on',
            '3.2': '.autoreply off',
            
            '4.1': '.autosticker on',
            '4.2': '.autosticker off',
            
            '5.1': '.autoreadstatus on',
            '5.2': '.autoreadstatus off',
            
            '6.1': '.autotyping on',
            '6.2': '.autotyping off',
            
            '7.1': '.autorecord on',
            '7.2': '.autorecord off',
            
            '8.1': '.readmsg on',
            '8.2': '.readmsg off',
            
            '9.1': '.autoreactstatus on',
            '9.2': '.autoreactstatus off',
            
            '10.1': '.alwaysonline off',
            '10.2': '.alwaysonline on',
            
            '11.1': '.antilink on',
            '11.2': '.antilink off',
            
            '12.1': '.antibadword on',
            '12.2': '.antibadword off',
            
            '13.1': '.cmdread on',
            '13.2': '.cmdread off',

         '14.1': '.autoreact on',
            '14.2': '.autoreact off',
            

        };

        // 🔁 Persistent reply handler
        const onReply = async (msgUpdate) => {
            const msg = msgUpdate.messages?.[0];
            if (!msg?.message?.extendedTextMessage) return;

            const context = msg.message.extendedTextMessage?.contextInfo;
            const repliedTo = context?.stanzaId;
            const isReply = repliedTo === targetMsgId;

            if (!isReply || msg.key.remoteJid !== from) return;

            const selected = msg.message.extendedTextMessage.text.trim();
            const commandToRun = cmdMap[selected];

            if (commandToRun) {
                const fakeMessage = {
                    key: {
                        fromMe: true,
                        remoteJid: from,
                        id: conn.generateMessageTag(),
                    },
                    message: {
                        conversation: commandToRun,
                    },
                    pushName: pushname || 'BOT'
                };

                await conn.ev.emit('messages.upsert', {
                    messages: [fakeMessage],
                    type: 'notify'
                });
            } else {
                await conn.sendMessage(from, { text: "❌ Invalid option." }, { quoted: msg });
            }
        };

        conn.ev.on('messages.upsert', onReply); // 🧠 Register listener

    } catch (err) {
        console.error(err);
        await reply("❗ Unexpected error: " + err.message);
    }
});
