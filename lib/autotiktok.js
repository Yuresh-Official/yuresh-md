 
const axios = require("axios");
const SentVideo = require("./models/SentVideo");

const QUERIES = [
   "dushan_xo", "motivation", "sinhala boot status", "sigma sinhala status",
   "sri lanka status video", "romantic sinhala tiktok", "sad sinhala song",
   "funny sinhala video", "trending sinhala tiktok", "sinhala love video",
   "emotional sinhala", "whatsapp sinhala status", "sinhala viral video",
   "sinhala quotes tiktok", "sinhala attitude tiktok"
];

function removeHashtags(text) {
    return text.replace(/#[\w\u0D80-\u0DFF]+/g, "").trim();
}

function formatCaption(desc) {
    const cleaned = removeHashtags(desc || "No Description");
    return `*📝 ${cleaned}*\n@𝗧𝗶𝘁𝗮𝗻𝗫 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗲 𝗦𝘁𝗮𝘁𝘂𝘀 𝗛𝘂𝗯 💗🫀\n\n> ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴜꜱʜᴀɴ ᴋᴀᴠɪꜱʜᴋᴀ`;
}

async function tiktokSearch(query) {
    try {
        const response = await axios.post("https://tikwm.com/api/feed/search", new URLSearchParams({
            keywords: query,
            count: '20',
            cursor: '0',
            HD: '1'
        }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: "current_language=en",
                "User-Agent": "Mozilla/5.0"
            }
        });

        const videos = response.data?.data?.videos || [];
        return {
            status: videos.length > 0,
            result: videos.map(v => ({
                description: v.title || "No title",
                videoUrl: v.play || null
            })).filter(v => v.videoUrl)
        };
    } catch (err) {
        console.error("TikTok API Error:", err.message);
        return { status: false, result: [] };
    }
}

async function startAutoTikTokBot(conn, groupJids) {
    console.log(`[✅ AUTO-TIKTOK] Started for ${groupJids.length} groups`);

    setInterval(async () => {
        for (const groupJid of groupJids) {
            const query = QUERIES[Math.floor(Math.random() * QUERIES.length)];
            const result = await tiktokSearch(query);

            if (!result.status || result.result.length === 0) {
                console.log(`[⚠️ ${groupJid}] No videos for "${query}".`);
                continue;
            }

            let sent = 0;
            for (const video of result.result) {
                if (sent >= 3) break;

                const alreadySent = await SentVideo.findOne({ groupJid, videoUrl: video.videoUrl });
                if (alreadySent) continue;

                try {
                    const buffer = await axios.get(video.videoUrl, { responseType: "arraybuffer" }).then(res => res.data);
                    await conn.sendMessage(groupJid, {
                        video: buffer,
                        mimetype: "video/mp4",
                        fileName: `tiktok_${Date.now()}.mp4`,
                        caption: formatCaption(video.description)
                    });

                    await SentVideo.create({ groupJid, videoUrl: video.videoUrl });
                    console.log(`[🎬 Sent to ${groupJid}]`);
                    sent++;
                } catch (err) {
                    console.error(`[❌ Error sending to ${groupJid}]`, err.message);
                }
            }

            if (sent === 0) {
                console.log(`[♻️ ${groupJid}] No new videos to send.`);
            }
        }
    }, 30 * 60 * 1000);
}

module.exports = { startAutoTikTokBot };
