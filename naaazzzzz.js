/**
	* Di buat oleh Naaazzzzz
	* Contact Me on wa.me/6282139672290
	* © Slemek Community
**/
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, makeInMemoryStore, jidNormalizedUser, delay } = require('@whiskeysockets/baileys')
const pino = require('pino') 
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const path = require('path')
const moment = require('moment-timezone')
const cheerio = require('cheerio') 
const { jadibot } = require('./jadibot')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
module.exports = conn = async (conn, m, chatUpdate, store) => {
   try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        global.prefix = prefix
        const isCmd = body.startsWith(prefix)
        var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        var args = body.trim().split(/ +/).slice(1)
        args = args.concat(['','','','','',''])
        const pushname = m.pushName || "No Name"
        const botNumber = await conn.decodeJid(conn.user.id)
        const isCreator = (((global.db.data.settings[botNumber]?.type ?? false) == 'main') ? (((global.db.data.settings[botNumber]?.owner ?? []).includes(m.sender))):false) || (global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) 
const isOwner = isCreator || (botNumber == m.sender) || (((global.db.data.settings[botNumber]?.type ?? false) == 'main') ? false:((global.db.data.settings[botNumber]?.owner ?? []).includes(m.sender)));
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ").trim()
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime) 
        const uptime = await runtime(process.uptime())
         const isBanned = global.db.data.user[m.sender]?.banned ?? false
         
         
         
         
         
         // Group
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    
if(!isOwner) return
    const cmdEnable = ["autoreadsw","autoread"]
    const cmdMenu = ["enable","disable","jadibot","addowner","delowner","stopjadibot","listjadibot","getsw","listsw","getsesi","listowner","options"]
    const menuMenu = `╭─────✧ *Menu*
│
${cmdMenu.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
    
    switch(command) {
    	case '>': {
    	if(!text) return
    	let anu = await eval(text) 
    m.reply(util.format(anu)) 
    }
    break
    	case 'menu': {
    	if(!isOwner) return
    	conn.sendMessage(m.chat, {
text: menuMenu, 
contextInfo: {
externalAdReply: {  
title: '© Slemek Comunmity', 
body: '',
thumbnailUrl: 'https://telegra.ph/file/d204721fd024374a6cf42.jpg', 
sourceUrl: 'https://chat.whatsapp.com/Ftk1hl3l84EBSHI2mF7Dw3',
mediaType: 1,
renderLargerThumbnail: true
}}})
await sleep(500) 
conn.sendMessage(m.chat, { poll: { name: '© Slemek Community', values: cmdMenu, selectableCount: 1 }}) 
    }
    break
    case 'enable': {
    	if(!text) return conn.sendMessage(m.chat, { poll: { name: '© Slemek Community', values: cmdEnable.map(v => `enable ${v}`), selectableCount: 1 }})
    if(cmdEnable.includes(text.toLowerCase())) {
    	if(global.db.data.settings[botNumber][text]) return m.reply(`\`${text}\` sudah di nyalakan sebelumnya`) 
    	global.db.data.settings[botNumber][text] = true
    m.reply(mess.done) 
    }
    }
    break
    case 'disable': {
    	if(!text) return conn.sendMessage(m.chat, { poll: { name: '© Slemek Community', values: cmdEnable.map(v => `disable ${v}`), selectableCount: 1 }})
    if(cmdEnable.includes(text.toLowerCase())) {
    	if(!global.db.data.settings[botNumber][text]) return m.reply(`\`${text}\` sudah di matikan sebelumnya`) 
    	global.db.data.settings[botNumber][text] = false
    m.reply(mess.done) 
    }
    }
    break
    case 'jadibot': {
    	if(!isCreator) return m.reply(mess.owner) 
        	if(!text) return m.reply(`masukan nomor user yang ingin di tambahkan ke jadibot!`) 
    let user = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
    let users = user[0]
    const isJadibot = (global.db.data.settings[users]?.type ?? false) == 'jadibot'
    if (!isJadibot && (fs.existsSync('./src/jadibot/' + users))) {
    try {
  fs.rmdirSync('./src/jadibot/' + users,{ recursive: true });
    } catch (err) {
  console.error('Terjadi kesalahan saat menghapus direktori:',err);
    }
    }
        if(isJadibot) return m.reply(user+" sudah di tambahkan ke jadibot, silahkan untuk user yamg ingin berhenti jadibot atau owner yang ingin menghentikan user jadibot, silahkan ketik .stopjadibot <nomor>") 
            	let { key } = await conn.sendMessage(m.chat,{ text: mess.wait },{ quoted: m }) 
            	if (!isJadibot && (fs.existsSync('./src/jadibot/' + m.sender))) {
    try {
  fs.rmdirSync('./src/jadibot/' + m.sender,{ recursive: true });
    } catch (err) {
  console.error('Terjadi kesalahan saat menghapus direktori:',err);
    }
    }
jadibot(conn,users,m)
await sleep(10000)
let codes = await global.db.data.user[users].pairing
conn.sendMessage(m.chat, { text: codes }) 
await sleep(3000) 
delete global.db.data.user[users].pairing
    }
    break
    case 'stopjadibot': {
	if(!isOwner) return
if(!text) return m.reply(`masukan nomor user yang ingin dihapus dari jadibot!`) 
    let user = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
    let users = user[0]
    const isJadibot = (global.db.data.settings[users]?.type ?? false) == 'jadibot'
        if(!isJadibot) return m.reply(user+" belum di tambahkan ke jadibot, silahkan untuk user yamg ingin berhenti jadibot atau owner yang ingin menghentikan user jadibot, silahkan ketik .stopjadibot <nomor>")
	try {
  fs.rmdirSync('./src/jadibot/' + users, { recursive: true });
  m.reply(mess.done)
 await sleep(1000) 
 if(botNumber === users) {
 conn.logout() 
  delete global.db.data.settings[users]
  }
  } catch (err) {
  	console.log(`ERROR: terjadi kesalahan saat menghapus session ${users}`) 
  }
    }
	break
	case 'listjadibot': {
		if(!isCreator) return
let arrays = global.db.data.settings
let array = []
for(const key in arrays) {
	if(arrays[key].type == 'jadibot') array.push(key) 
	}
if(array.length > 0) {
    conn.sendMessage(m.chat, { text: `List jadibot: \n`+array.map(v => `*×* @${v.split("@")[0]}`).join("\n"), mentions: array}, { quoted: m })
    } else m.reply(`Belum ada yang terdaftar menjadi bot`) 
   }
   break
    	case 'addowner': {
    	if(!text) return m.reply(`masukan nomor user yang ingin di tambahkan ke owner!`) 
    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
    if(global.db.data.settings[botNumber].owner.includes(users)) return m.reply(user+" sudah menjadi owner") 
    global.db.data.settings[botNumber].owner.push(users[0]) 
    m.reply(mess.done) 
    }
    break
    case 'delowner': {
    	    	if(!text) return m.reply(`masukan nomor user yang ingin dihapus dari owner!`) 
    let user = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
    let users = user[0]
    if(!global.db.data.settings[botNumber].owner.includes(users)) return m.reply(user+" tidak di temukan") 
    let owner = global.db.data.settings[botNumber].owner.filter(item => item !== users)
    global.db.data.settings[botNumber].owner = owner
    m.reply(mess.done) 
    }
    break
    case 'listowner': {
    	let array = []
    array.push(...global.owner.map(v => v + '@s.whatsapp.net'), ...global.db.data.settings[botNumber].owner, botNumber) 
    conn.sendMessage(m.chat, { text: `List owner: \n`+array.map(v => `*×* @${v.split("@")[0]}`).join("\n"), mentions: array}, { quoted: m })
   }
   break
   case "getsw": case "sw": {
            if (!store.messages["status@broadcast"].array.length === 0) throw "Gaada 1 status pun"
            let contacts = Object.values(store.contacts)
            let [who, value] = m.text.split(/[,|\-+&]/)
            value = value?.replace(/\D+/g, "")

            let sender
            if ((m.mentions?.length ?? 0) !== 0) sender = m.mentions[0]
            else if (m.text) sender = contacts.find(v => [v.name, v.verifiedName, v.notify].some(name => name && name.toLowerCase().includes(who.toLowerCase())))?.id

            let stories = store.messages["status@broadcast"].array
            let story = stories.filter(v => v.key && v.key.participant === sender || v.participant === sender).filter(v => v.message && v.message.protocolMessage?.type !== 0)
            if (story.length === 0) throw "Gaada sw nya"
            if (value) {
               if (story.length < value) throw "Jumlahnya ga sampe segitu"
               await m.reply({ forward: story[value - 1], force: true })
            } else {
               for (let msg of story) {
                  await delay(1500)
                  await conn.sendMessage(m.chat, { forward: msg, force: true }, { quoted: m })
               }
            }
         }
            break
         case "listsw": {
            if ((!store.messages["status@broadcast"]?.array.length ?? 0) === 0) throw "Gaada 1 status pun"
            let stories = store.messages["status@broadcast"]?.array ?? []
            let story = stories.filter(v => v.message && v.message.protocolMessage?.type !== 0)
            if (story.length === 0) throw "Status gaada"
            const result = {}
            story.forEach(obj => {
               let participant = obj.key.participant || obj.participant
               participant = jidNormalizedUser(participant === "status_me" ? conn.user.id : participant)
               if (!result[participant]) {
                  result[participant] = []
               }
               result[participant].push(obj)
            })
            let type = (mType) => getContentType(mType) === "extendedTextMessage" ? "text" : getContentType(mType).replace("Message", "")
            let text = ""
            for (let id of Object.keys(result)) {
               if (!id) return
               text += `*- ${await conn.getName(id)}*\n`
               text += `${result[id].map((v, i) => `${i + 1}. ${type(v.message)}`).join("\n")}\n\n`
            }
            await conn.sendMessage(m.chat, { text: text.trim(), mentions: Object.keys(result) }, { quoted: m }) 
         }
            break
            case 'getsesi': case 'getsession': {
            	if(!isCreator) return
            let path;
            if((global.db.data.settings[botNumber]?.type ?? '') == 'main') path = './session'
            else path = './src/jadibot/'+botNumber
            let anu = await fs.readFileSync(path+'/creds.json') 
            conn.sendMessage(m.chat, { document: anu, fileName: 'creds.json', mimetype: 'text/javascript' }, { quoted: m }) 
            }
            break
            case 'options': {
            	let anu = global.db.data.settings[botNumber]
            	m.reply(`Status opsi kamu sekarang:\n*×* Auto read sw: \`${anu.autoreadsw ? 'menyala':'mati'}\`\n*×* Auto read: \`${anu.autoread ? 'menyala':'mati'}\``) 
            }
    }
         } catch (err) {
       console.log(err) 
    }
   }
   
         let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
