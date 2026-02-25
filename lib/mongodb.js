const mongoose = require('mongoose');
const config = require('../settings');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://i.ibb.co/d4JYdcGX/Golden-Queen-MD-VIMAMODS-30d6761c5d43402.jpg' },
{ key: 'FILENAME', value: 'ᴅᴜꜱʜᴀɴ x ᴍᴅ ᴡᴀ ʙᴏᴛ' },

{ key: 'CHANNEL_NAME', value: '@𝐓𝐢𝐭𝐚𝐧𝐗-𝐎𝐅𝐂☠️❗' },
{ key: 'NEWSLETTER_ID', value: '120363372114070566@newsletter' },
{ key: 'TITLE', value: '@𝐓𝐢𝐭𝐚𝐧𝐗-𝐎𝐅𝐂☠️❗' },
    { key: 'BODY', value: '@𝐓𝐢𝐭𝐚𝐧𝐗-𝐎𝐅𝐂☠️❗' },
    { key: 'WEBURL', value: 'https://whatsapp.com/channel/0029VayPhmQ8vd1YVJgeOh3i' },
{ key: 'BOT_IMG', value: 'https://files.catbox.moe/2ub8v5.jpg' },
    { key: 'ALIVE_MSG', value: 'Hello👋 , I am alive Now Dushan X Whatsapp user Bot' },
    { key: 'BOT_NUMBER', value: '94761346248' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'AUTO_REPLY', value: 'true' },
    { key: 'AUTO_STICKER', value: 'true' },
    { key: 'ANTI_BAD_WORD', value: 'true' },
    { key: 'ANTI_LINK_KIK', value: 'true' },
        { key: 'AUTO_REACT', value: 'false' },
    { key: 'ALWAYS_ONLINE', value: 'false' },
    { key: 'AUTO_RECORD', value: 'false' },
    { key: 'AUTO_TYPING', value: 'false' },
        { key: 'AUTO_REACT_STATUS', value: 'true' },
    { key: 'READ_MSG', value: 'false' }, 
    { key: 'RE', value: 'true' }, 




     
    
//{ key: 'HEROKU_API_KEY', value: 'HRKU-AAGaJpSlW6KD5YNHHdnP3gSlwHq6efTbW2mIdyLEki7g_____wYUVvCEpyFG' },
    
//{ key: 'HEROKU_EMAIL', value: 'seekerdeflktreding@gmail.com' },

    
 


    
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
