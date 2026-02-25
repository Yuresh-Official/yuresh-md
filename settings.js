const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "RGNK~a15jDqou",

  
MONGODB: process.env.MONGODB || "mongodb+srv://Cyberflash46:Cyberflash2003@cluster0.0kdn2.mongodb.net/",
OWNER_NUM: process.env.OWNER_NUM || "94761346248",
  MAX_SIZE: 500,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO

  
};





