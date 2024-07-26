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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_09_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDczLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDUzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxODAsXG4gICAgICAgIDU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyLFxuICAgICAgICA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NixcbiAgICAgICAgMTA0LFxuICAgICAgICA2MixcbiAgICAgICAgMTk5LFxuICAgICAgICA2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDMsXG4gICAgICAgIDMzLFxuICAgICAgICA0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MixcbiAgICAgICAgMTMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDMzLFxuICAgICAgICA5NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5LFxuICAgICAgICA5MCxcbiAgICAgICAgODEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI5LFxuICAgICAgICA2NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3dWs0cy80OU5DL2V4Z0w5aE5RTVJ1RWxHbVJJemhiemI3dFBWRzlWY05rPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmeldxY0tiU1FtdXhqMWJWdy1vV0tRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk0OTJjMWE5LWIyN2YtNGYwOC1hOWQzLTAyYzAwYjM0NzNkMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICAxOTgsXG4gICAgICAxNzgsXG4gICAgICA1MSxcbiAgICAgIDE0NixcbiAgICAgIDE1OCxcbiAgICAgIDIwNSxcbiAgICAgIDUxLFxuICAgICAgMTgwLFxuICAgICAgMTM4LFxuICAgICAgMjAxLFxuICAgICAgMTUyLFxuICAgICAgMjU1LFxuICAgICAgMzUsXG4gICAgICAxMjMsXG4gICAgICA2OSxcbiAgICAgIDE1LFxuICAgICAgMjEyLFxuICAgICAgNTYsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE2LFxuICAgICAgMTc3LFxuICAgICAgNTMsXG4gICAgICAxMjUsXG4gICAgICAxODIsXG4gICAgICA2LFxuICAgICAgODMsXG4gICAgICA3OSxcbiAgICAgIDEyMSxcbiAgICAgIDEzMyxcbiAgICAgIDIyMCxcbiAgICAgIDEwMyxcbiAgICAgIDc2LFxuICAgICAgNzgsXG4gICAgICA2LFxuICAgICAgMTA1LFxuICAgICAgMTAzLFxuICAgICAgMTIzLFxuICAgICAgMTMzLFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5BRVlQN0I1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU2NTgzMjc2MTo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ4ODk4MDUyODc1NjU6NDZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3VTNXRvR0VJRDRqclVHR0E4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJKyt2OVUzL3Y1OVViYXR5dVVBZjRHKzlzeFM5a29tVmQzc0llVTZqRFZnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRCSVRLakd0QllRSWtDVTUreVZmTFRTRXA3RGg3THhIbjRLSHZHQ1c1L2pieDRHYkFLWXlnS2hCZjh1aU0zSUlFUk1jc3J6VEN6ZWtvUUY1OGFoZ0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpqS0o4NGZGYm9QakpUQkhTN21tZnZUNXNFTnRsdHFBTTRRSlNLeERYSXJUSEFHNktBMlhORVNpK3U3Yjl0NEhPVFlaQWJMeUVhWHo0SkdpMUJjVGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTY1ODMyNzYxOjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjAwNjUzNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUl3bVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXdtLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRkFvVjhxZUlNSktFbGxKR21GVTh5VWorSUR4YldFd0NCd2FEOW1GY1BIWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODAxMDI5OTk0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
