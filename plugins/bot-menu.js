import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {	
let vn = './media/menu.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
  let pp = './Menu2.jpg'
//let pp = gataVidMenu.getRandom()
await conn.sendMessage(m.chat, {
        text: `*Hey @${m.sender.split`@`[0]} cargando el menu..`,
        contextInfo: { 
          mentionedJid: [m.sender],
        }
      }, { quoted: m })
  
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let menu = `⌜ *${wm}* ⌟  

 ╭━〔  𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 ⛅  〕⬣
*┃➤ 👤 Creador : Daniel 🇦🇱* 
*┃➤ 🌐 Pais : Perú 🇵🇪*
*┃➤ ⌛ Tiempo activo : #uptime*
 ╰━━━━━━━━━━━━⬣
 
🏳️ By Daniel`.trim()
//conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
let img = await (await fetch(`https://telegra.ph/file/940ac494d7ca5ca132fea.jpg`)).buffer()  
await conn.sendMessage(m.chat, {
text: menu,
contextInfo: { 
mentionedJid: [m.sender],
forwardingScore: 9, 
externalAdReply: {
title: 'Runs Bot\nWʜᴀᴛꜱᴀᴘᴘ Bᴏᴛ - Mᴜʟᴛɪ Dᴇᴠɪᴄᴇ',
//body: 'Wʜᴀᴛꜱᴀᴘᴘ Bᴏᴛ - Mᴜʟᴛɪ Dᴇᴠɪᴄᴇ',
thumbnail: img,
sourceUrl: 'https://chat.whatsapp.com/Kw0ow5PyFN62GBs8rJT5Kv',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
await m.react('✅')	
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(allmenu|allmenu\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
