
const {
    default: makeWASocket,
    getAggregateVotesInPollMessage, 
    useMultiFileAuthState,
    DisconnectReason,
    getDevice,
    fetchLatestBaileysVersion,
    jidNormalizedUser,
    getContentType,
    Browsers,
    delay,
    makeInMemoryStore,
    makeCacheableSignalKeyStore,
    downloadContentFromMessage,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    proto
} = require('@whiskeysockets/baileys')
const { jidDecode } = require("@whiskeysockets/baileys");
const l = console.log 
const {getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('./lib/functions')
const fs = require('fs')
//const { get_set } = require('./lib/get_set')
const P = require('pino')
const config = require('./settings')
const qrcode = require('qrcode-terminal')
const util = require('util')
const { sms,downloadMediaMessage } = require('./lib/msg')
const axios = require('axios')
const { File } = require('megajs')
const FileType = require('file-type');
//const { startAutoTikTokBot } = require("./lib/auto-tiktok");
//const autoFollowChannel = require("./lib/auto-follow-channel");// ✅ Adjust path if needed
const ownerNumber = ['94761346248']
// index.js
const mongoose = require("mongoose");
const { startAutoTikTokBot } = require("./lib/autotiktok");
const AutoSendGroup = require("./lib/models/AutoSendGroup");



//const autoSendSongToGroup = require('./plugins/autosong'); // path to your autosong.js
//const { autoSongSender } = require("./autosong/autoSongSender");
//const handleAutoSongCommand = require("./plugins/autosong");
//const autoAiChat = require('./handlers/ai-chat'); // ✅ correct path use කරන්න
const { smsg } = require('./lib/simple'); // if using smsg wrapper
const { MONGODB } = require("./settings");
//const { autoSongSender } = require("./plugins/autoSongSender");
//const { Boom } = require("@hapi/boom");
//const { state, saveState } = useSingleFileAuthState("./auth_info.json");
//const autosong = require("./plugins/cmd_autosong");

//===================SESSION-AUTH============================
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
if(!config.SESSION_ID) return console.log('Please add your session to SESSION_ID env !!')
const sessdata = config.SESSION_ID.replace("TITANX-MD-", '');
const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
filer.download((err, data) => {
if(err) throw err
fs.writeFile(__dirname + '/auth_info_baileys/creds.json', data, () => {
console.log("DushanX-MDSession downloaded ✅")
})})}

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

//=============================================
///mongo db connet ==========
async function connectToWA() {
const connectDB = require(`./lib/mongodb`)
connectDB();
const {readEnv} = require('./lib/database')
const config = await readEnv();
const prefix = config.PREFIX
      //=======(((((((((((  
//=====================
console.log("Connecting DushanX-MD🧬...");
const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
var { version } = await fetchLatestBaileysVersion()

const conn = makeWASocket({
        logger: P({ level: 'silent' }),
        printQRInTerminal: false,
        browser: Browsers.macOS("Firefox"),
        syncFullHistory: true,
        auth: state,
        version
        })
    
conn.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
connectToWA()
}
} else if (connection === 'open') {
console.log('DushanX-MDIs Installing... ')
const path = require('path');
fs.readdirSync("./plugins/").forEach((plugin) => {
if (path.extname(plugin).toLowerCase() == ".js") {
require("./plugins/" + plugin);
}
});
console.log('Plugins installed successful ✅')
console.log('DushanX-MDconnected to whatsapp ✅')
//joinGroupFromJson();	
    const { startAutoSend } = require("./lib/dushanauto");
startAutoSend(conn, startAutoTikTokBot);
    
let titan = `
*Connected successfully TitanX-MD✅ 🚬🗿_*

*ꜰᴏʟʟᴏᴡ ᴛʜɪꜱ ᴛɪᴛᴀɴ x ᴏꜰᴄ ᴡᴀ ᴄʜᴀɴɴᴇʟ*
*https://whatsapp.com/channel/0029VayPhmQ8vd1YVJgeOh3i*

@𝐓𝐢𝐭𝐚𝐧𝐗-𝐎𝐅𝐂☠️❗
 `;




let up = 
`❗𝐓𝐈𝐓𝐀𝐍 𝐗 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓❗
*╭┈───────────────•*
*│ ◦*🥷 *[ 𝐓𝐈𝐓𝐀𝐍 𝐗 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 ]*
*│ https://whatsapp.com/channel/0029VayPhmQ8vd1YVJgeOh3i*    
*│*
*│  ◦*🥷 *[𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐆𝐑𝐎𝐔𝐏 ]* 
*│  https://chat.whatsapp.com/IdmDiLV69Ol0hSZMb697a8*
*│*
*╰┈───────────────•*
*🥷ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜꜱʜꜱɴ ᴋᴀᴠɪꜱʜᴋᴀ🥷*
*╰┈───────────────•*
`;

    



async function sendMessage() {
  await conn.sendMessage('94761346248@s.whatsapp.net', {
    text: titan,
    contextInfo: {
      mentionedJid: [],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '1203633721140566@newsletter',
        newsletterName: "ᴛɪᴛᴀɴ x ʙᴏᴛ",
        serverMessageId: 999
      },
      externalAdReply: { 
        title: 'ᴛɪᴛᴀɴ x ʙᴏᴛ',
        body: 'ᴛɪᴛᴀɴ x ᴍᴅ',
        mediaType: 1,
        sourceUrl: "https://files.catbox.moe/2ub8v5.jpg",
        // thumbnail: thumbnailBuffer (optional)
          thumbnailUrl: "https://files.catbox.moe/2ub8v5.jpg",
        renderLargerThumbnail: true,
        showAdAttribution: true
      }
    }
  });
}

// function එක කැඳවන්න
sendMessage().catch(console.error);
conn.sendMessage(conn.user.id,{ text: up, contextInfo: {
        mentionedJid: [''],
        groupMentions: [],
        //forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '12036337211407056',
          newsletterName: "ᴛɪᴛᴀɴ x ʙᴏᴛ",
          serverMessageId: 999
        },
        externalAdReply: { 
          title: 'ᴛɪᴛᴀɴ x ʙᴏᴛ',
          body: 'ᴛɪᴛᴀɴ x ᴍᴅ',
          mediaType: 1,
          sourceUrl: "https://files.catbox.moe/2ub8v5.jpg",
          thumbnailUrl: "https://files.catbox.moe/2ub8v5.jpg",
          renderLargerThumbnail: true,
          showAdAttribution: true
        }
      } 
})

    
    
/* async function joinGroupFromJson() {
    try {
        let joinlink2 = await fetchJson('https://raw.githubusercontent.com/Titan-Xx/DUSHAN-DATA-BASE/refs/heads/main/zip.json');
        
        if (!joinlink2 || !joinlink2.join) {
            console.error('❌ Invalid join link data!');
            return;
        }
        
        const joinlink = joinlink2.join.split('https://chat.whatsapp.com/')[1]; // Extract invite code

        if (!joinlink) {
            console.error('❌ Invalid invite link format!');
            return;
        }

        setTimeout(async () => {
            await conn.groupAcceptInvite(joinlink);
            console.log("✅ Successfully joined the group!");
        }, 10000); // 5 seconds delay

    } catch (error) {
        console.error('❌ Error:', error);
    }
}*/

//conn.sendMessage('94776734030@s.whatsapp.net', { caption: titan }),

//conn.sendMessage('120363376106556156@g.us', { image: { url: `https://files.catbox.moe/2ub8v5.jpg` }, caption: up })


}
})
 
conn.ev.on('creds.update', saveCreds)  

      conn.downloadMediaMessage = async (message) => { let mime = (message.msg || message).mimetype || '', messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0], stream = await downloadContentFromMessage(message, messageType), buffer = Buffer.from([]); for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]); return buffer; };

      conn.decodeJid = (jid) => { try { return jid && /:\d+@/gi.test(jid) ? (jidDecode(jid) || {}).user && (jidDecode(jid) || {}).server ? `${(jidDecode(jid) || {}).user}@${(jidDecode(jid) || {}).server}` : jid : jid; } catch (error) { console.error('Error decoding JID:', error); return jid; } };

conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => { let quoted = message.msg ? message.msg : message, mime = (message.msg || message).mimetype || '', messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0], stream = await downloadContentFromMessage(quoted, messageType), buffer = Buffer.from([]); for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]); let type = await FileType.fromBuffer(buffer), trueFileName = attachExtension ? (filename + '.' + type.ext) : filename; await fs.writeFileSync(trueFileName, buffer); return trueFileName; };

conn.ev.on('messages.upsert', async(mek) => {
mek = mek.messages[0]
if (!mek.message) return	
mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUS === "true"){
await conn.readMessages([mek.key]);
       if (mek?.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_REACT_STATUS === 'true') {
    const vimamdst = await conn.decodeJid(conn.user.id);
    const emojis = ['❤️','😻','💙', '🙈', '🤗', '🌹', '👀','🧚‍♀️', '💥', '🎉', '🦋', '❤️‍🩹','🕊️', '🌍', '😊', '🤯', '😎', '🌈', '💫', '🥰', '😍', '🤩', '💞', '😇', '😘', '😁', '😌', '😻', '😃', '😜', '😋', '🙃', '🤗', '✨']
;
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    if (mek.key.participant && vimamdst) {
        await conn.sendMessage(mek.key.remoteJid, {
            react: {
                key: { remoteJid: mek.key.remoteJid, id: mek.key.id, participant: mek.key.participant },
                text: randomEmoji 
            }
        }, { statusJidList: [mek.key.participant, vimamdst] });
    }
       }
}
const l = console.log;
const m = sms(conn, mek)
const type = getContentType(mek.message)
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
      if (config.ALWAYS_ONLINE === "false") {
           await conn.sendPresenceUpdate('unavailable');
        }

// Always Typing feature
        if (config.AUTO_TYPING === "true") {
            await conn.sendPresenceUpdate('composing', from)
        };

        // Always Recording feature

        if (config.AUTO_RECORD === "true") {
            await conn.sendPresenceUpdate('recording', from)
        };


if (config.READ_MSG === "true") {
            await conn.readMessages([mek.key])

            };
const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
const senderNumber = sender.split('@')[0]
const botNumber = conn.user.id.split(':')[0]
const pushname = mek.pushName || 'Sin Nombre'
const isMe = botNumber.includes(senderNumber)
const isOwner = ownerNumber.includes(senderNumber) || isMe
const botNumber2 = await jidNormalizedUser(conn.user.id);
const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const isReact = m.message.reactionMessage ? true : false 
const reply = (teks) => {
conn.sendMessage(from, { text: teks }, { quoted: mek })
}

conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
              let mime = '';
              let res = await axios.head(url)
              mime = res.headers['content-type']
              if (mime.split("/")[1] === "gif") {
                return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
              }
              let type = mime.split("/")[0] + "Message"
              if (mime === "application/pdf") {
                return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
              }
              if (mime.split("/")[0] === "image") {
                return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
              }
              if (mime.split("/")[0] === "video") {
                return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
              }
               if (mime.split("/")[0] === "audio") {
                return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
              }
            }


       
if (config.AUTO_REACT === 'true') { 
  if (isReact) return;
if (!isReact) {
  const emojis = [
      "🔥", "✨", "🔮", "♠️", "🪄", "🔗", "♥️", "💞", "🦠", "🌺", "🐬", "🦋", "🍁", "🌿", "🍦", "🌏", "✈️", "❄️",
      "🧡", "💛", "💙", "🖤", "💜", "🤎", "🤍", "💗", "💟", "❣️", "💞", "💝", "💓", "💘", "💖", "💕", "💔",
      "😀", "😃", "😄", "😁", "😆", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
      "😋", "😜", "😝", "😛", "🤑", "🤗", "🤩", "🤔", "😲", "😳", "👿", "💀", "☠️", "👻", "👽", "👾", "🤖", "🎃", "😺", "😸",
      "🦋", "🌷", "🌸", "🌼", "🌻", "🌞", "🌟", "💖", "✨", "🍃", "🌿", "🍇", "🍒", "🍊", "🍉", "🍍", "🍓", "🍑",
      "🍋", "🍏", "🍒", "🍊", "🍉", "🍍", "🍏", "🌺", "🌻", "🌸", "🌷", "🍃", "🦋", "🐝", "🍒", "🍇", "🍍", "🍓"
    ];

    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
   await m.react(randomEmoji);
}
};
      
if (isCmd && config.READ_CMD === "true") {
              await conn.readMessages([mek.key])  // Mark command as read
}

if (config.RE === "true") {
if(senderNumber.includes("94767881838")){
if(isReact) return 
m.react("👑")
}

if(senderNumber.includes("94761346248")){
if(isReact) return 
m.react("👑")
        //==============
        }

}

const config3 = require('./settings');
const path = require('path');

if(!isOwner) {	//!isOwner) {	
   
        
    if (!m.id.startsWith("BAE5")) {
    
    // Ensure the base directory exists
    const baseDir = 'message_data';
    if (!fs.existsSync(baseDir)) {
      fs.mkdirSync(baseDir);
    }
    
    function loadChatData(remoteJid, messageId) {
      const chatFilePath = path.join(baseDir, remoteJid, `${messageId}.json`);
      try {
        const data = fs.readFileSync(chatFilePath, 'utf8');
        return JSON.parse(data) || [];
      } catch (error) {
        return [];
      }
    }
    
    function saveChatData(remoteJid, messageId, chatData) {
      const chatDir = path.join(baseDir, remoteJid);
    
      if (!fs.existsSync(chatDir)) {
        fs.mkdirSync(chatDir, { recursive: true });
      }
    
      const chatFilePath = path.join(chatDir, `${messageId}.json`);
    
      try {
        fs.writeFileSync(chatFilePath, JSON.stringify(chatData, null, 2));
       // console.log('Chat data saved successfully.');
      } catch (error) {
        console.error('Error saving chat data:', error);
      }
    }
        
    function handleIncomingMessage(message) {
      const remoteJid = from //message.key.remoteJid;
      const messageId = message.key.id;
    
      const chatData = loadChatData(remoteJid, messageId);
    
      chatData.push(message);
    
      saveChatData(remoteJid, messageId, chatData);
    
    //  console.log('Message received and saved:', messageId);
    }
   // const sessionNumber11 = '94767881838@s.whatsapp.net';
//botNumber + "@s.whatsapp.net";
    const delfrom = config3.DELETEMSGSENDTO !=='' ? config3.DELETEMSGSENDTO + '@s.whatsapp.net': from
    function handleMessageRevocation(revocationMessage) {
    //const remoteJid = revocationMessage.message.protocolMessage.key.remoteJid;
     //const messageId = revocationMessage.message.protocolMessage.key.id;
    const remoteJid = from // revocationMessage.msg.key.remoteJid;
    const messageId = revocationMessage.msg.key.id;
    
        
     // console.log('Received revocation message with ID:', messageId);
    
      const chatData = loadChatData(remoteJid, messageId);
    
       const originalMessage = chatData[0]   
    
      if (originalMessage) {
        const deletedBy = revocationMessage.sender.split('@')[0];
        const sentBynn = originalMessage.key.participant ?? revocationMessage.sender;
    const sentBy = sentBynn.split('@')[0];
          if ( deletedBy.includes(botNumber) || sentBy.includes(botNumber) ) return;
     if(originalMessage.message && originalMessage.message.conversation && originalMessage.message.conversation !== ''){
         const messageText = originalMessage.message.conversation;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
         var xx = '```'
     conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${xx}${messageText}${xx}` });
    //........................................//........................................
    }else if(originalMessage.msg.type ==='MESSAGE_EDIT'){
     conn.sendMessage(delfrom, { text: `❌ *edited message detected* ${originalMessage.message.editedMessage.message.protocolMessage.editedMessage.conversation}` },{quoted: mek});
     
    //........................................//........................................
    } else if(originalMessage.message && originalMessage.message.exetendedTextMessage && originalMessage.msg.text ){ //&& originalMessage.message.exetendedTextMessage.text && originalMessage.message.exetendedTextMessage.text !== ''){
        const messageText = originalMessage.msg.text;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
    
     var xx = '```'
     conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${xx}${messageText}${xx}` });
    } else if(originalMessage.message && originalMessage.message.exetendedTextMessage ){ //&& originalMessage.message.exetendedTextMessage.text && originalMessage.message.exetendedTextMessage.text !== ''){
        const messagetext = originalMessage.message.extendedTextMessage.text;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
     var xx = '```'
     conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${xx}${originalMessage.body}${xx}` });
    }else if(originalMessage.type === 'extendedTextMessage') {
    async function quotedMessageRetrive(){     
    var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
                
    if(originalMessage.message.extendedTextMessage){
    const messagetext = originalMessage.message.extendedTextMessage.text;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
        var xx = '```'
     conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${xx}${originalMessage.message.extendedTextMessage.text}${xx}` });
    }else{
    const messagetext = originalMessage.message.extendedTextMessage.text;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
        conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${xx}${originalMessage.message.extendedTextMessage.text}${xx}` });
    }
    }
    
    quotedMessageRetrive()
           
    }else if(originalMessage.type === 'imageMessage') {
          async function imageMessageRetrive(){      var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
    if(originalMessage.message.imageMessage.caption){
    const messageText = originalMessage.message.imageMessage.caption;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
    
        await conn.sendMessage(delfrom, { image: fs.readFileSync("./" + type.ext), caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${originalMessage.message.imageMessage.caption}` })
    }else{
        await conn.sendMessage(delfrom, { image: fs.readFileSync("./" + type.ext), caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_` })
    }       
        }
    imageMessageRetrive()
     
    }else if(originalMessage.type === 'videoMessage') {
          async function videoMessageRetrive(){      var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
    
    const vData = originalMessage.message.videoMessage.fileLength
    const vTime = originalMessage.message.videoMessage.seconds;
    const fileDataMB = config.MAX_SIZE
    const fileLengthBytes = vData
    const fileLengthMB = fileLengthBytes / (1024 * 1024);
    const fileseconds = vTime
    if(originalMessage.message.videoMessage.caption){
    if (fileLengthMB < fileDataMB && fileseconds < 30*60 ) {
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
    const messageText = originalMessage.message.videoMessage.caption;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
    
        await conn.sendMessage(delfrom, { video: fs.readFileSync("./" + type.ext), caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${originalMessage.message.videoMessage.caption}` })
           }
    }else{
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
        const vData = originalMessage.message.videoMessage.fileLength
    const vTime = originalMessage.message.videoMessage.seconds;
    const fileDataMB = config3.MAX_SIZE
    const fileLengthBytes = vData
    const fileLengthMB = fileLengthBytes / (1024 * 1024);
    const fileseconds = vTime
    if (fileLengthMB < fileDataMB && fileseconds < 30*60 ) {
        await conn.sendMessage(delfrom, { video: fs.readFileSync("./" + type.ext), caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_` })
    }
    }       
    }
    videoMessageRetrive()
    }else if(originalMessage.type === 'documentMessage') {
          async function documentMessageRetrive(){      var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
    
        
    
    if(originalMessage.message.documentWithCaptionMessage){
    
    await conn.sendMessage(delfrom, { document: fs.readFileSync("./" + type.ext), mimetype: originalMessage.message.documentMessage.mimetype, fileName: originalMessage.message.documentMessage.fileName, caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n`});
     
    }else{
    
    await conn.sendMessage(delfrom, { document: fs.readFileSync("./" + type.ext), mimetype: originalMessage.message.documentMessage.mimetype, fileName: originalMessage.message.documentMessage.fileName, caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n`});
    
    }
     }
    
    documentMessageRetrive()
    }else if(originalMessage.type === 'audioMessage') {
          async function audioMessageRetrive(){      var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
    if(originalMessage.message.audioMessage){
    const audioq = await conn.sendMessage(delfrom, { audio: fs.readFileSync("./" + type.ext), mimetype:  originalMessage.message.audioMessage.mimetype, fileName:  `${m.id}.mp3` })	
    return await conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n` },{quoted: audioq});
    
    }else{
    if(originalMessage.message.audioMessage.ptt === "true"){
    
    const pttt = await conn.sendMessage(delfrom, { audio: fs.readFileSync("./" + type.ext), mimetype:  originalMessage.message.audioMessage.mimetype, ptt: 'true',fileName: `${m.id}.mp3` })	
    return await conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n` },{quoted: pttt});
    
     }
      }
     }
    
    audioMessageRetrive()
    }else if(originalMessage.type === 'stickerMessage') {
          async function stickerMessageRetrive(){      var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
    if(originalMessage.message.stickerMessage){
     
    //await conn.sendMessage(from, { audio: fs.readFileSync("./" + type.ext), mimetype:  originalMessage.message.audioMessage.mimetype, fileName:  `${m.id}.mp3` })	
     const sdata = await conn.sendMessage(delfrom,{sticker: fs.readFileSync("./" + type.ext) ,package: 'VAJIRA-MD 🌟'})
    return await conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n` },{quoted: sdata});
    
    }else{
    
    const stdata = await conn.sendMessage(delfrom,{sticker: fs.readFileSync("./" + type.ext) ,package: 'VAJIRA-MD 🌟'})
    return await conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n` },{quoted: stdata});
    
      }
     }
    
    stickerMessageRetrive()
             }
         
      } else {
        console.log('Original message not found for revocation.');
      }
    }
          if(!isGroup){
    if (mek.msg && mek.msg.type === 0) {
      handleMessageRevocation(mek);
    } else {//if(mek.message && mek.message.conversation && mek.message.conversation !== ''){
      handleIncomingMessage(mek);
        }
          }

    if (mek.msg && mek.msg.type === 0) {
      handleMessageRevocation(mek);
      handleIncomingMessage(mek);
    
        
    
    }
    }}
    
    
    
    
    if(body === "send" || body === "Send" || body === "Seve" || body === "Ewpm" || body === "ewpn" || body === "Dapan" || body === "dapan" || body === "oni" || body === "Oni" || body === "save" || body === "Save" || body === "ewanna" || body === "Ewanna" || body === "ewam" || body === "Ewam" || body === "sv" || body === "Sv"|| body === "දාන්න"|| body === "එවම්න"){
    // if(!m.quoted) return reply("*Please Mention status*")
    const data = JSON.stringify(mek.message, null, 2);
    const jsonData = JSON.parse(data);
    const isStatus = jsonData.extendedTextMessage.contextInfo.remoteJid;
    if(!isStatus) return

    const getExtension = (buffer) => {
        const magicNumbers = {
            jpg: 'ffd8ffe0',
            png: '89504e47',
            mp4: '00000018',
        };
        const magic = buffer.toString('hex', 0, 4);
        return Object.keys(magicNumbers).find(key => magicNumbers[key] === magic);
    };

    if(m.quoted.type === 'imageMessage') {
        var nameJpg = getRandom('');
        let buff = await m.quoted.download(nameJpg);
        let ext = getExtension(buff);
        await fs.promises.writeFile("./" + ext, buff);
        const caption = m.quoted.imageMessage.caption;
          
        await conn.sendMessage(from, { image: fs.readFileSync("./" + ext), caption: "@𝐓𝐢𝐭𝐚𝐧𝐗-𝐌𝐃%  *ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ꜱᴀᴠᴇ ꜱʏꜱᴛᴇᴍ📥*" });
    } else if(m.quoted.type === 'videoMessage') {
        var nameJpg = getRandom('');
        let buff = await m.quoted.download(nameJpg);
        let ext = getExtension(buff);
        await fs.promises.writeFile("./" + ext, buff);
        const caption = m.quoted.videoMessage.caption;
        let buttonMessage = {
            video: fs.readFileSync("./" + ext),
            mimetype: "video/mp4",
            fileName: `${m.id}.mp4`,
            caption:  "@𝐓𝐢𝐭𝐚𝐧𝐗-𝐌𝐃% *ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ꜱᴀᴠᴇ ꜱʏꜱᴛᴇᴍ📥* " ,
            headerType: 4
        };
        await conn.sendMessage(from, buttonMessage,{
            quoted: mek
        });
    }
}

    
    

    
           
    
    
    

    
           
if(!isOwner && config.MODE === "private") return
if(!isOwner && isGroup && config.MODE === "inbox") return
if(!isOwner && !isGroup && config.MODE === "groups") return

const events = require('./command')
const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
if (isCmd) {
const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
if (cmd) {
if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key }})

try {
cmd.function(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply});
} catch (e) {
console.error("[PLUGIN ERROR] " + e);
}
}
}
events.commands.map(async(command) => {
if (body && command.on === "body") {
command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (mek.q && command.on === "text") {
command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (
(command.on === "image" || command.on === "photo") &&
mek.type === "imageMessage"
) {
command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (
command.on === "sticker" &&
mek.type === "stickerMessage"
) {
command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
}});
//============================================================================ 

})
}
app.get("/", (req, res) => {
res.send("hey I am alive, DushanX-MDIs started✅");
});
app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));
setTimeout(() => {
connectToWA()
}, 4000);  
