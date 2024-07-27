const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250565832761";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_49_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDY0LFxuICAgICAgICA3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAwLFxuICAgICAgICA3NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDcyLFxuICAgICAgICA3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDg0LFxuICAgICAgICA2MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUzLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDkzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1OHlkMjhtczNUOUVUdEFzcmRxWGFaNHZCTElHUEtOK1FrQWVHYy9nOUFNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5elhOUldZTFNIS0VmOUFWV1NleUFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImUzNTI2ZjkwLWNmYzYtNGZlZS04Yjg2LWEyMjZjNDZhMjBhN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4LFxuICAgICAgMjE5LFxuICAgICAgMjI1LFxuICAgICAgMTYwLFxuICAgICAgMjIyLFxuICAgICAgMjMwLFxuICAgICAgNzYsXG4gICAgICAyMjcsXG4gICAgICA3MCxcbiAgICAgIDY4LFxuICAgICAgNzEsXG4gICAgICAyNDUsXG4gICAgICAxOTYsXG4gICAgICAxNDcsXG4gICAgICAyNDIsXG4gICAgICA1MixcbiAgICAgIDQsXG4gICAgICA4OSxcbiAgICAgIDcsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgsXG4gICAgICAxNTgsXG4gICAgICAyMixcbiAgICAgIDIwNSxcbiAgICAgIDU0LFxuICAgICAgMTQ3LFxuICAgICAgMTk4LFxuICAgICAgMTcsXG4gICAgICAyNDYsXG4gICAgICAxNTIsXG4gICAgICA5MCxcbiAgICAgIDIxNCxcbiAgICAgIDExLFxuICAgICAgOTEsXG4gICAgICAxNDMsXG4gICAgICAyNDIsXG4gICAgICAyMSxcbiAgICAgIDEzMSxcbiAgICAgIDIyNyxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pqTjJvSUVFSnpLbExVR0dBMGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNlE4M3c5dTZaNk5URzBmV1JSb3dsR2hOSjViSzJtYjQ1dEw2RVJZS1FpVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRYk9nWlNVQzd6UjZkY1lvaGh5eFpUQ2p3RkN1cXVWVWdQaUZEZ1hWbktHaTFEeVU1d2U0cXIrNll1NkxHb0xSY0JEdjN2cDFWM2o4T2Y2UkZlb1BEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzU3FFRnZnY1d2T0syM0o3L05DN1FDcjljVUJ5SDRYTDV2L0pkU0grbk9CQ2FjT2hYLzZHYnFDKzdYOXlRR3YrMThFeFByMUdRb3B2NExFK0E2MWZBUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTY1ODMyNzYxOjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDg4OTgwNTI4NzU2NTo2NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTY1ODMyNzYxOjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDk4OTc4XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "badbite",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "badbite",
  ownername:process.env.OWNER_NAME|| "yvannbad",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
