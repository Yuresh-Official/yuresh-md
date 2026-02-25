const { cmd } = require('../command'); // Command handler
const { getEnv, setEnv } = require('../lib/database'); // MongoDB environment setting functions
const config = require('../settings'); // To get OWNER_JID or other configs
const OWNER_JID = config.OWNER_NUMBER || "94761346248"; // fallback owner number if needed


cmd({
  pattern: "private",
  alias: ["reacttoggle"],
  desc: "Enable or disable automatic message reactions.",
  category: "owner",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.private on` or `.cmdread off`\nThis command private.");
    }

    const current = await getEnv("MODE");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *private is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("MODE", target);
    return reply(`✅ *private  has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("MODE CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *MODE ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});


cmd({
  pattern: "public",
  alias: ["reacttoggle"],
  desc: "Enable or disable automatic message reactions.",
  category: "owner",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.public on` or `.public off`\nThis command autoreactstatus.");
    }

    const current = await getEnv("MODE");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *public  is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("MODE", target);
    return reply(`✅ *public  has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("MODE CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *MODECMD ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});

cmd({
  pattern: "onlygroup",
  alias: ["reacttoggle"],
  desc: "Enable or disable automatic message reactions.",
  category: "owner",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.onlygroup on` or `.onlygroup off`\nThis command onlygroup.");
    }

    const current = await getEnv("MODE");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *onlygroup is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("MODE", target);
    return reply(`✅ *onlygroup  has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("MODE CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *MODECMD ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});

cmd({
  pattern: "onlyinbox",
  alias: ["reacttoggle"],
  desc: "Enable or disable automatic message reactions.",
  category: "owner",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.onlyinbox on` or `.onlyinbox off`\nThis command onlyinbox.");
    }

    const current = await getEnv("MODE");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *onlyinbox is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("MODE", target);
    return reply(`✅ *onlyinbox  has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("MODE CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *MODECMD ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});


cmd({
  pattern: "cmdread",
  alias: ["reacttoggle"],
  desc: "Enable or disable automatic message reactions.",
  category: "owner",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.cmdread on` or `.cmdread off`\nThis command cmdread.");
    }

    const current = await getEnv("CMD_READ");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *Cmd Read is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("CMD_READ", target);
    return reply(`✅ *Cmd Read  has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("CMD_READ CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *CMD_READCMD ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});


cmd({
  pattern: "autoreactstatus",
  alias: ["reacttoggle"],
  desc: "Enable or disable automatic message reactions.",
  category: "owner",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.autoreactstatus on` or `.autoreactstatus off`\nThis command autoreactstatus.");
    }

    const current = await getEnv("AUTO_REACT_STATUS");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *Auto React status  is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("AUTO_REACT_STATUS", target);
    return reply(`✅ *Auto React status  has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("AUTO_REACT_STATUS CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *AUTO_REACT_STATUSCMD ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});
/*cmd({
  pattern: "autoreadstatus",
  alias: ["reacttoggle"],
  desc: "Titan X MD BOT.",
  category: "settings",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.autoreadstatus on` or `.autoreadstatus off`\nThis command autoreadstatus.");
    }

    const current = await getEnv("AUTO_READ_STATUS");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *Auto Read Status  is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("AUTO_READ_STATUS", target);
    return reply(`✅ *Auto Read Status   has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("AUTO_READ_STATUS CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *AUTO_READ_STATUSGCMD ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});
*/
cmd({
  pattern: "autovoice",
  alias: ["reacttoggle"],
  desc: "Titan X MD BOT.",
  category: "settings",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.autovoice on` or `.autovoice off`\nThis command autovoice.");
    }

    const current = await getEnv("AUTO_VOICE");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *Auto Voice is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("AUTO_VOICE", target);
    return reply(`✅ *Auto Voice  has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("AUTO_VOICE CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *AUTO_VOICECMD ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});



cmd({
  pattern: "anti",
  alias: ["reacttoggle"],
  desc: "Titan X MD BOT.",
  category: "settings",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.autovoice on` or `.autovoice off`\nThis command autovoice.");
    }

    const current = await getEnv("ANTI_BOT");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *Auto Voice is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("ANTI_BOT", target);
    return reply(`✅ *Auto Voice  has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("ANTI_BOT CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *AUTO_VOICECMD ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});



cmd({
  pattern: "autoreply",
  alias: ["reacttoggle"],
  desc: "Titan X MD BOT.",
  category: "settings",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.autoreply on` or `.autoreply off`\nThis command autoreply.");
    }

    const current = await getEnv("AUTO_REPLY");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *Auto Reply  is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("AUTO_REPLY", target);
    return reply(`✅ *Auto Reply   has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("AUTO_REPLY CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *AUTO_REPLYCMD ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});

cmd({
  pattern: "autosticker",
  alias: ["reacttoggle"],
  desc: "Titan X MD BOT.",
  category: "settings",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.autosticker on` or `.autosticker off`\nThis command autosticker.");
    }

    const current = await getEnv("AUTO_STICKER");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *Auto Sticker is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("AUTO_STICKER", target);
    return reply(`✅ *Auto Sticker  has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("AUTO_STICKER CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *AUTO_STICKERCMD ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});

cmd({
  pattern: "antibadword",
  alias: ["reacttoggle"],
  desc: "Titan X MD BOT.",
  category: "settings",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.antibadword on` or `.antibadword off`\nThis command antibadword.");
    }

    const current = await getEnv("ANTI_BAD_WORD");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *Anti Bad word is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("ANTI_BAD_WORD", target);
    return reply(`✅ *Anti Bad word  has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("ANTI_BAD_WORD CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *ANTI_BAD_WORDCMD ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});

cmd({
  pattern: "antilink",
  alias: ["reacttoggle"],
  desc: "Titan X MD BOT.",
  category: "settings",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.antilink on` or `.antilink off`\nThis command antilink.");
    }

    const current = await getEnv("ANTI_LINK_KICK");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *Anti Link is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("ANTI_LINK", target);
    return reply(`✅ *Anti Link  has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("ANTI_LINK_KICK CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *ANTI_LINKCMD ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});

cmd({
  pattern: "autoreact",
  alias: ["reacttoggle"],
  desc: "Titan X MD BOT.",
  category: "settings",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.autoreact on` or `.autoreact off`\nThis command autoreact.");
    }

    const current = await getEnv("AUTO_REACT");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *Auto React is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("AUTO_REACT", target);
    return reply(`✅ *Auto React  has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("AUTO_REACT CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *AUTO_REACTGCMD ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});

cmd({
  pattern: "alwaysonline",
  alias: ["reacttoggle"],
  desc: "Titan X MD BOT.",
  category: "settings",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.alwaysonline on` or `.alwaysonline off`\nThis command alwaysonline.");
    }

    const current = await getEnv("ALWAYS_ONLINE");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *Always Online  is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("ALWAYS_ONLINE", target);
    return reply(`✅ *Always online  has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("ALWAYS_ONLINE CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *ALWAYS_ONLINECMD ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});

cmd({
  pattern: "autorecord",
  alias: ["reacttoggle"],
  desc: "Titan X MD BOT.",
  category: "settings",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.autotyping on` or `.autorecord off`\nThis command autorecord.");
    }

    const current = await getEnv("AUTO_RECORD");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *Auto Record is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("AUTO_RECORD", target);
    return reply(`✅ *Auto Record  has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("AUTO_RECORD CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *AUTO_RECORDCMD ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});

cmd({
  pattern: "autotyping",
  alias: ["reacttoggle"],
  desc: "Titan X MD BOT.",
  category: "settings",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.autotyping on` or `.autotyping off`\nThis command auto typing.");
    }

    const current = await getEnv("AUTO_TYPING");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *Auto Typing is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("AUTO_TYPING", target);
    return reply(`✅ *Auto Typing  has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("AUTO_TYPING CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *AUTO_TYPINGCMD ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});

cmd({
  pattern: "readmsg",
  alias: ["reacttoggle"],
  desc: "Titan X MD BOT.",
  category: "settings",
  filename: __filename,
  use: "<on/off>",
}, 
async (client, message, msg, { reply, q, isOwner }) => {
  try {
    if (!isOwner) return reply("🚫 *This command is restricted to bot owners only.*");

    const input = q?.toLowerCase();
    if (!input || !["on", "off"].includes(input)) {
      return reply("⚙️ *Usage:* `.readmsg on` or `.readmsg off`\nThis command readmsg.");
    }

    const current = await getEnv("READ_MSG");
    const target = input === "on" ? "true" : "false";

    if (current === target) {
      return reply(`ℹ️ *Read Msg is already ${input === "on" ? "enabled ✅" : "disabled ❌"}.*`);
    }

    await setEnv("READ_MSG", target);
    return reply(`✅ *Read Msg  has been successfully ${input === "on" ? "enabled" : "disabled"}.*`);

  } catch (error) {
    console.error("READ_MSG CMD ERROR:", error);

    // Notify the owner via WhatsApp
    await client.sendMessage(OWNER_JID, {
      text: `🚨 *READ_MSGCMD ERROR*\n\n📄 *Error Message:* ${error.message || error}`
    });

    return reply("❌ *An unexpected error occurred. The owner has been notified.*");
  }
});
