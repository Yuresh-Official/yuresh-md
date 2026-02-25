const {updateEnv , readEnv} = require('../lib/database');
const EnvVar = require('../lib/mongodbenv');
const axios = require('axios');
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const config = require("../settings");
const DushanXmenu = 'https://files.catbox.moe/2ub8v5.jpg';
const DushanX = 'https://files.catbox.moe/2ub8v5.jpg';
const ooo = "```"



cmd({
  pattern: "alive",
  desc: "To Check the bot online or no.",
  react: "💌",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from, quoted, body, isCmd, command, args, q, isGroup,
  sender, senderNumber, botNumber2, botNumber, pushname,
  isMe, isOwner, groupMetadata, groupName, participants,
  groupAdmins, isBotAdmins, isAdmins, reply
}) => {
  try {
    const uptime = runtime(process.uptime());
    const start = Date.now();
    const ping = Date.now() - start;

    const aliveMessage = `[ *STATUS ONLINE* ] ─── ❖ *TitanX-MD* ❖ ───
──────────────────
✰ *UPTIME..................:* *${uptime}*
✰ *BUILD_VERSION..:* *v8.0.3*  
✰ *MODE.....................:* *PUBLIC*  
✰ *SERVER..................:* *${os.hostname()}*
✰ *PING........................:* *${ping}ms*
✰ *MEMORY...............:* *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB*
──────────────────
${config.ALIVE_MSG || ""}
──────────────────
> *ADMIN: DushanX & MaduwaX*
> *LINK : wa.me/94761346248*
> *REPO : github.com/*
──────────────────
*>>> SYSTEM STABLE <<<*
──────────────────
✰ *01.* *COMMAND MENU*

✰ *02.* *TITAN X SPEED*
──────────────────
> ᴘᴏᴡᴇʀᴅ ʙʏ ᴛɪᴛᴀɴ x ᴛᴇᴀᴍ ᴏꜰᴄ    
──────────────────`;

    const sentMsg = await conn.sendMessage(from, {
      image: { url: DushanXmenu },
      caption: aliveMessage,
      contextInfo: {
        mentionedJid: [],
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363372114070566@newsletter',
          newsletterName: "@𝐓𝐢𝐭𝐚𝐧𝐗-𝐌𝐃 𝐎𝐅𝐂☠️❗",
          serverMessageId: 999
        }
      }
    }, { quoted: mek });

    // ✅ Ensure message ID exists
    if (!sentMsg?.key?.id) return await reply("❌ Could not fetch message ID.");

    const targetMsgId = sentMsg.key.id;

    const cmdMap = {
      '1': '.menu',
      '2': '.ping',
    };

    // 🔁 Listen for reply on this message
    const onReply = async (msgUpdate) => {
      const msg = msgUpdate.messages?.[0];
      if (!msg?.message?.extendedTextMessage) return;

      const context = msg.message.extendedTextMessage.contextInfo;
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

    conn.ev.on('messages.upsert', onReply);

  } catch (err) {
    console.error(err);
    await reply("❗ Unexpected error: " + err.message);
  }
});
cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "📜",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
fun: '',
other: '',
system: '',
bug: '',
fun: '',
tool: '',
ai: ''
};
for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*├─* ${commands[i].pattern}\n`;
 }
}




let menumsg =  `┏━❮ 🥷 *ᴛɪᴛᴀɴ x ᴏꜰᴄ* 🥷 ❯━
┃⛤┃🤖 *ʙᴏᴛ ɴᴀᴍᴇ :ᴛɪᴛᴀɴ x ᴍᴅ*
┃⛤┃👨‍💻 *ᴏᴡɴᴇʀ: ᴅᴜꜱʜᴀɴ ᴋᴀᴠɪꜱʜᴋꜱ*
┃⛤┃📆 *ʀᴜɴᴛɪᴍᴇ :* {hours}h {minutes}m {seconds}s
┃⛤┃📈 *ʀᴀᴍ ᴜsᴀɢᴇ:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB*
┃⛤┗━━━━━━━━━━━━━━𖣔𖣔
╰──────────────┈⊷
┏━❮⛤ *ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ* ⛤❯━
┃✰╭─────────────·
┃✰┃➣➊ || *ᴅᴏᴡɴʟᴏʀᴅ ᴍᴇɴᴜ*
┃✰┃➣➋ || *ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ*
┃✰┃➣➌ || *ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ*
┃✰┃➣➍ || *ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
┃✰┃➣➎ || *ᴛᴏᴏʟꜱ*
┃✰┃➣➏ || *ᴀɪ ᴍᴇɴᴜ*
┃✰┃➣➐ || *ᴡᴀ ᴄʀᴀꜱʜ ʙᴜɢ ᴍᴇɴᴜ*
┃✰┃➣➑ || *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
┃✰┃➣➒ || *ꜱʏꜱᴛᴇᴍ ᴄᴍᴅ*
┃✰┃➣➓ || *ɴᴇᴡꜱ ᴍᴇɴᴜ*
┃✰┃➣➊➊ || *ꜰᴜɴ ᴍᴇɴᴜ*
┃✰└───────────┈⊷
┗━━━━━━━━━━━━━━𖣔𖣔
*┌───────────────┐*
*│*   *✰ᴛɪᴛᴀɴ x ᴍᴅ ᴏꜰᴄ ᴛᴇᴀᴍ✰*   
*└───────────────┘*`;
let downloadmenu = `*•——[* *ᴅᴏᴡɴʟᴏʀᴅ ᴍᴇɴᴜ* *]——•*
*│*
${menu.download}*│*
*•—————————————•*
> ᴘᴏᴡᴇʀᴅ ʙʏ ᴛɪᴛᴀɴ x ᴏꜰᴄ ᴛᴇᴀᴍ`


 let groupmenu = `*•——[* *ɢʀᴏᴜᴘ ᴍᴇɴᴜ* *]——•*
*│*
${menu.group}*│*
*•—————————————•*
> ᴘᴏᴡᴇʀᴅ ʙʏ ᴛɪᴛᴀɴ x ᴏꜰᴄ ᴛᴇᴀᴍ`


let convertmenu = `*•——[* *ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ* *]——•*
*│*
${menu.convert}*│*
*•—————————————•*
> ᴘᴏᴡᴇʀᴅ ʙʏ ᴛɪᴛᴀɴ x ᴏꜰᴄ ᴛᴇᴀᴍ`



let searchmenu = `*•——[* *ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ* *]——•*
*│*
${menu.search}*│*
*•—————————————•*
> ᴘᴏᴡᴇʀᴅ ʙʏ ᴛɪᴛᴀɴ x ᴏꜰᴄ ᴛᴇᴀᴍ`
 let ownermenu = `*•——[* *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* *]——•*
*│*
${menu.owner}*│*
*•—————————————•*
> ᴘᴏᴡᴇʀᴅ ʙʏ ᴛɪᴛᴀɴ x ᴏꜰᴄ ᴛᴇᴀᴍ`

let systemmenu = `*•——[* *ꜱʏꜱᴛᴇᴍ ᴍᴇɴᴜ* *]——•*
*│*
${menu.system}*│*
*•—————————————•*
> ᴘᴏᴡᴇʀᴅ ʙʏ ᴛɪᴛᴀɴ x ᴏꜰᴄ ᴛᴇᴀᴍ`

let bugmenu = `*•——[* *ᴡᴀ ᴄʀᴀꜱʜ ʙᴜɢ ᴍᴇɴᴜ* *]——•*
*│*
${menu.bug}*│*
*•—————————————•*
> ᴘᴏᴡᴇʀᴅ ʙʏ ᴛɪᴛᴀɴ x ᴏꜰᴄ ᴛᴇᴀᴍ`
let funmenu= `*•——[* *ꜰᴜɴ ᴍᴇɴᴜ* *]——•*
*│*
${menu.fun}*│*
*•—————————————•*
> ᴘᴏᴡᴇʀᴅ ʙʏ ᴛɪᴛᴀɴ x ᴏꜰᴄ ᴛᴇᴀᴍ`
    
let newsmenu= `*•——[* *ɴᴇᴡꜱ ᴍᴇɴᴜ* *]——•*
*│*
${menu.news}*│*
*•—————————————•*
> ᴘᴏᴡᴇʀᴅ ʙʏ ᴛɪᴛᴀɴ x ᴏꜰᴄ ᴛᴇᴀᴍ`

let aimenu=`*•——[* *ᴀɪ ᴍᴇɴᴜ* *]——•*
*│*
${menu.ai}*│*
*•—————————————•*
> ᴘᴏᴡᴇʀᴅ ʙʏ ᴛɪᴛᴀɴ x ᴏꜰᴄ ᴛᴇᴀᴍ`

let toolmenu=`*•——[* *ᴛᴏᴏʟꜱ* *]——•*
*│*
${menu.tool}*│*
*•—————————————•*
> ᴘᴏᴡᴇʀᴅ ʙʏ ᴛɪᴛᴀɴ x ᴏꜰᴄ ᴛᴇᴀᴍ`

 const sentMsg = await conn.sendMessage(from, {	

	     image: { url: DushanXmenu },
  caption: menumsg,
  contextInfo: {
    mentionedJid: [], // Leave empty array or set actual JIDs
    groupMentions: [], // This is optional and often ignored
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363372114070566@newsletter',  // Newsletter JID (Must be valid format)
      newsletterName: "@𝐓𝐢𝐭𝐚𝐧𝐗-𝐌𝐃 𝐎𝐅𝐂☠️❗",                  // Appears like "channel name"
      serverMessageId: 999                              // Random or incremented integer
    }
  }
}, { quoted: mek });

// Send the initial message and store the message ID
//const sentMsg = await conn.sendMessage(from, {image: {url: config.MENU_IMG },caption: menumsg },{quoted: mek})
const messageID = sentMsg.key.id; // Save the message ID for later reference



// Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '🥷', key: mek.key } });


        if (messageType === '1') {
            // Handle option 1 (Audio File
const sentMsg = await conn.sendMessage(from, {	

	     image: { url: DushanX },
  caption: downloadmenu,
  contextInfo: {
    mentionedJid: [], // Leave empty array or set actual JIDs
    groupMentions: [], // This is optional and often ignored
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363372114070566@newsletter',  // Newsletter JID (Must be valid format)
      newsletterName: "@𝐓𝐢𝐭𝐚𝐧𝐗-𝐌𝐃 𝐎𝐅𝐂☠️❗",                  // Appears like "channel name"
      serverMessageId: 999                              // Random or incremented integer
                
        }
    }
});
            }
            }
})

// Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '🥷', key: mek.key } });


        if (messageType === '2') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {	

	     image: { url: DushanX },
  caption: searchmenu,
  contextInfo: {
    mentionedJid: [], // Leave empty array or set actual JIDs
    groupMentions: [], // This is optional and often ignored
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363372114070566@newsletter',  // Newsletter JID (Must be valid format)
      newsletterName: "@𝐓𝐢𝐭𝐚𝐧𝐗-𝐌𝐃 𝐎𝐅𝐂☠️❗",                  // Appears like "channel name"
      serverMessageId: 999                              // Random or incremented integer
              //  renderLargerThumbnail: true
        }
    }
});
            }
            }
})

// Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '🥷', key: mek.key } });


        if (messageType === '3') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {	

	     image: { url: DushanX },
  caption: convertmenu,
  contextInfo: {
    mentionedJid: [], // Leave empty array or set actual JIDs
    groupMentions: [], // This is optional and often ignored
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363372114070566@newsletter',  // Newsletter JID (Must be valid format)
      newsletterName: "@𝐓𝐢𝐭𝐚𝐧𝐗-𝐌𝐃 𝐎𝐅𝐂☠️❗",                  // Appears like "channel name"
      serverMessageId: 999                              // Random or incremented integer
              //  renderLargerThumbnail: true
        }
    }
});
            }
            }
})

// Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '🥷', key: mek.key } });


        if (messageType === '4') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {	

	     image: { url: DushanX },
  caption: ownermenu,
  contextInfo: {
    mentionedJid: [], // Leave empty array or set actual JIDs
    groupMentions: [], // This is optional and often ignored
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363372114070566@newsletter',  // Newsletter JID (Must be valid format)
      newsletterName: "@𝐓𝐢𝐭𝐚𝐧𝐗-𝐌𝐃 𝐎𝐅𝐂☠️❗",                  // Appears like "channel name"
      serverMessageId: 999                              // Random or incremented integer
           // renderLargerThumbnail: true
        }
    }
});
            }
            }
})

 // Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '🥷', key: mek.key } });


        if (messageType === '5') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {	

	     image: { url: DushanX },
  caption: toolmenu,
  contextInfo: {
    mentionedJid: [], // Leave empty array or set actual JIDs
    groupMentions: [], // This is optional and often ignored
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363372114070566@newsletter',  // Newsletter JID (Must be valid format)
      newsletterName: "@𝐓𝐢𝐭𝐚𝐧𝐗-𝐌𝐃 𝐎𝐅𝐂☠️❗",                  // Appears like "channel name"
      serverMessageId: 999                              // Random or incremented integer
              //  renderLargerThumbnail: true
        }
    }
});
            }
            }
})

 // Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '🥷', key: mek.key } });


        if (messageType === '6') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {	

	     image: { url: DushanX },
  caption: aimenu,
  contextInfo: {
    mentionedJid: [], // Leave empty array or set actual JIDs
    groupMentions: [], // This is optional and often ignored
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363372114070566@newsletter',  // Newsletter JID (Must be valid format)
      newsletterName: "@𝐓𝐢𝐭𝐚𝐧𝐗-𝐌𝐃 𝐎𝐅𝐂☠️❗",                  // Appears like "channel name"
      serverMessageId: 999                              // Random or incremented integer
              // renderLargerThumbnail: true
        }
    }
});
            }
            }
})
 // Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '🥷', key: mek.key } });


        if (messageType === '7') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {	

	     image: { url: DushanX },
  caption: bugmenu,
  contextInfo: {
    mentionedJid: [], // Leave empty array or set actual JIDs
    groupMentions: [], // This is optional and often ignored
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363372114070566@newsletter',  // Newsletter JID (Must be valid format)
      newsletterName: "@𝐓𝐢𝐭𝐚𝐧𝐗-𝐌𝐃 𝐎𝐅𝐂☠️❗",                  // Appears like "channel name"
      serverMessageId: 999                              // Random or incremented integer
           // renderLargerThumbnail: true
        }
    }
});
            }
            }
})

conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '🥷', key: mek.key } });


        if (messageType === '8') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {	

	     image: { url: DushanX },
  caption: groupmenu,
  contextInfo: {
    mentionedJid: [], // Leave empty array or set actual JIDs
    groupMentions: [], // This is optional and often ignored
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363372114070566@newsletter',  // Newsletter JID (Must be valid format)
      newsletterName: "@𝐓𝐢𝐭𝐚𝐧𝐗-𝐌𝐃 𝐎𝐅𝐂☠️❗",                  // Appears like "channel name"
      serverMessageId: 999                              // Random or incremented integer
           // renderLargerThumbnail: true
        }
    }
});
            }
            }
})

conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '🥷', key: mek.key } });


        if (messageType === '9') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {	

	     image: { url: DushanX },
  caption: systemmenu,
  contextInfo: {
    mentionedJid: [], // Leave empty array or set actual JIDs
    groupMentions: [], // This is optional and often ignored
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363372114070566@newsletter',  // Newsletter JID (Must be valid format)
      newsletterName: "@𝐓𝐢𝐭𝐚𝐧𝐗-𝐌𝐃 𝐎𝐅𝐂☠️❗",                  // Appears like "channel name"
      serverMessageId: 999                              // Random or incremented integer
               // renderLargerThumbnail: true
        }
    }
});
            }
            }
})

         conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '🥷', key: mek.key } });


        if (messageType === '10') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {	

	     image: { url: DushanX },
  caption: newsmenu,
  contextInfo: {
    mentionedJid: [], // Leave empty array or set actual JIDs
    groupMentions: [], // This is optional and often ignored
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363372114070566@newsletter',  // Newsletter JID (Must be valid format)
      newsletterName: "@𝐓𝐢𝐭𝐚𝐧𝐗-𝐌𝐃 𝐎𝐅𝐂☠️❗",                  // Appears like "channel name"
      serverMessageId: 999                              // Random or incremented integer
            //renderLargerThumbnail: true
        }
    }
});
            }
            }
})


         conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '🥷', key: mek.key } });


        if (messageType === '11') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {	

	     image: { url: DushanX },
  caption: funmenu,
  contextInfo: {
    mentionedJid: [], // Leave empty array or set actual JIDs
    groupMentions: [], // This is optional and often ignored
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363372114070566@newsletter',  // Newsletter JID (Must be valid format)
      newsletterName: "@𝐓𝐢𝐭𝐚𝐧𝐗-𝐌𝐃 𝐎𝐅𝐂☠️❗",                  // Appears like "channel name"
      serverMessageId: 999                              // Random or incremented integer
               // renderLargerThumbnail: true
        }
    }
});
            }
            }
})

} catch (e) {
console.log(e);
reply(`${e}`);
}
});


