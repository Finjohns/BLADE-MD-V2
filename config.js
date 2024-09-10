//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxdavid126@gmail.com";
global.location = "lakota, asia";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/bladeh3x/BLADE-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/g9W1JPQ.jpeg";
global.devs = "https://t.me/alex";
global.sudo = process.env.SUDO || "254769365617";
global.owner = process.env.OWNER_NUMBER || "254769365617";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/g9W1JPQ.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU5QdnNnaXpDWEdRbmdZYnRvU1dUOEM3NkcwTThBQTRLeS85dWVJdkpsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0lrS2RQajRzaVBnTFhsYjN2cGZPT3R5SUtxS0F5QVBWREJsYm1yd1UwVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlT0w3YjRTS1VjUkRKcVJJWlY0TWxQMnM5M2JCUE8rK1pTbmg1ZWpZRUg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2OUV3RmpGR0E0SFBKb0JJNVhTUTBMWUJmRlhkSDJBL2FGaGFaWkF2akhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNFbVpQL2JSdXlOTHdZU1FrS09VQzJXMU5HNnVmM0dvRlMyUmQ0OXZ3V009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJUTlNnWGs5RFhOZGtNRHo2dEJvYkxRMGNnemJMRCtmN0dZUmU2ajFJRFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUJPMGFqbnhXN2NnL3RsMStZeThnZFFxM3FDVkVRSVIxTjNCUGQ5Uk8zdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2R4OFBRYzh0djhDWDc3aHNaM2ZqQWtRNzZ6WUJXd01jL0pSaHM5dDl6TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhzV0U1ekpmQkFrRWRWeE0rWDF5eTAzWFl6dzJxQ1hIVWZadDNGbXJ6dzRhek9qYWxVdE51ZW9oNVBFUTAvSTZmZUNMdGpOQkM1Zm91MEh0WXI4a0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiJwcUhKT0kyOEJSSzhxMnZtMHcxUElVWEQ2YXB0dTRpVnJnUmxzTzRzenV3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQOEM1Qkl3c1R5YXlFQnZkNzNaOWZ3IiwicGhvbmVJZCI6Ijg1YzVmNWYxLTYyMDktNDVlYy05YzlmLWE2OTI4OWZkZDJkZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDMmZtT2RFV0Fsc09MN1J6ZWs4RStXRURzaTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLy9sL0ZJRFRidUNLbkVZaUI5aCs5cGM2Mm1zPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1UMUc3MlZaIiwibWUiOnsiaWQiOiIyNTQ3NjkzNjU2MTc6NjJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pMdGdQY0RFSWJvZ0xjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVvRUhSZm1PYUl6Vm9ZdXM3dGQ0UTQ5NWRmV2ZNeHVpN3FrMnFKR3IwbUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6InlubVMvVEEranFuR1hvV2h0dWhvRFNYRzV6Wkw4RktVaGtwUHN0QS9uQy83ZitBQ2VIVnA5SWdqRjloWXg3Tk5Kc0JwcTVkenJyRERsSEJvdFQ3YUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5dUkxWWlhVFJpM1VUYkNJK2lLcWZXMEJhYVhqaklIOEdaWWlFbndCeWU0K1dWVldwRk5XQnZZanlYUkV5dVlocThCQ3pqK2h6SnA4MldEV1Y1TDlCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc2OTM2NTYxNzo2MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWS0JCMFg1am1pTTFhR0xyTzdYZUVPUGVYWDFuek1ib3U2cE5xaVJxOUppIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1OTY5NDI4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpPciJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BLADE-MD™`",
  author: process.env.PACK_AUTHER || "BLADE-MD-V2",
  packname: process.env.PACK_NAME || "JINWIIL",
  botname: process.env.BOT_NAME || "BLADE-MD-V2",
  ownername: process.env.OWNER_NAME || "Jinwiil",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BLADE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
