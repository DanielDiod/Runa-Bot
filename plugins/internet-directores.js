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

let menu = `  
*•/• Directores Imperio 3049•/•*

DIRECTORES
Minaya Beatriz Antes de 1963
Valencia Vargas, Hernán 1963-1986
Aliaga Burgos, Wenner 1987-1992
Paucar Jiménez, Marcelo 1992-1993
Avellaneda Janampa, Margarita 1994
Baldeón Rojas, Raúl 1995
Florián López, Williams 1996
Gómez Briceño, Carlos 1996
Retamozo Calderón, Nelly 1997
Terrones Gutiérrez, Alberto 1999
Naraza Sifuentes, Sofía 2001
Retamozo Calderón, Nelly 2002
Cristóbal Pando, Eusebio 2003
Machuca Becerra, Gladys 2004
Enríquez Matos, Jesús 2005-2006
Suárez Alvarado, Mario 2006
Alvarado Vicuña, Gilmer Tony 2007-2010
Huaylinos Gonzales Victoria 2024

SUBDIRECTORES
Collas Milla, Adrián 2002-2010
Luisa Espinoza Garay 2002-2005
Zaida García Costilla 2006
Villanueva Fuentes Rivera, Carmen 2007-2008
Matos Tello, Fortunato 2009
Bardales Noriega, Alberto 2010-2011
Gomez Narvaez Jaime 2024
Machuca Borja Osma Renzo 2024

En la actualidad, somos una Institución sólida con 2 Subdirectores, 2 oficinistas, 7 personal de servicio, 40 profesores de aula, 3 profesores de Educación Física, 3 profesores de Inglés y más de 1000 alumnos y una APAFA identificada con su escuela que unidos por una sola causa: el de brindar un servicio de calidad a nuestra niñez hacen que nuestra Institución sobresalga en el campo académico, deportivo, cívico y cultural. En estos últimos años nuestra Institución viene siendo conocido por organizar Concursos de Danzas Internas, Olimpiadas Deportivas Internas, Olimpiadas de Matemática auspiciado por la corporación PAMER, tenemos implementada el aula de innovación “Huascarán”, se cuenta con alianzas estratégicas para desarrollar diversos proyectos educativos. Además, contamos con frases de nuestros antepasados:
AMA LLULLA, AMA QUELLA Y AMA SUA Que significa: NO SEAS MENTIROSO, NO SEAS OCIOSO Y NO SEAS LADRÓN.
 
🔰 By Emerson x Aixa`.trim()
//conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
let img = await (await fetch(`https://telegra.ph/file/a247fa451226f617743b3.jpg`)).buffer()  
/*await conn.sendMessage(m.chat, {
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
}}}, { quoted: m})*/
conn.sendButton(m.chat, menu, wm, 'https://telegra.ph/file/a247fa451226f617743b3.jpg', [['Owner', `.owner`]], null, [['Canal', `${channel}`]], m)

await m.react('✅')	
} catch (e) {
m.reply(e)
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
//console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['imperio', 'help', '?']
handler.tags = ['main']
handler.command = /^(directores|directores3049\?)$/i
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
