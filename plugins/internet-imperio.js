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
        text: `*Hey @${m.sender.split`@`[0]} espere un momento...`,
        contextInfo: { 
          mentionedJid: [m.sender],
        }
      }, { quoted: m })
  
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let menu = `  
*•/• Historia Imperio 3049•/•*

La Institución Educativa Nº 3049 “Imperio del Tahuantinsuyo”, fue creado el 25 de Abril de 1963 con R. M. Nº 1576, como la Primera Escuela Mixta de Tahuantinsuyo con el número 710.
Los pobladores de esta localidad hicieron las gestiones necesarias para contar con una escuela de Primaria en la zona porque tenían el deseo de que sus hijos estudiaran en Tahuantinsuyo contando tan solo con un local de esteras y así empezó a funcionar la tan ansiada escuelita.
En 1964, se produce un desdoblamiento del plantel una queda como Escuela de Mujeres con el Nº 710 que funcionaría en las mañanas y la otra como Escuela de Varones Nº 732 que funcionaría en la tarde.
Nuestro Centro Educativo fue durante mucho años sede del Núcleo Educativo Comunal que funcionaba como Centro Base (los famosos N.E.C.)
Tuvo su primera directora a la profesora Beatriz Minaya, quien con la colaboración de seis profesores puso en marcha la labor educativa, contando con la ayuda económica de los padres de familia de Tahuantinsuyo.
La población de Tahuantinsuyo fue creciendo paulatinamente, lo que generó el incremento de la demanda educativa en nuestro centro educativo lo que hizo posible la creación del Nivel Secundaria con la Resolución Directoral Zonal Nº 0246 del 17 de abril de 1979 siendo Director el profesor Hernán Valencia Vargas iniciándose con el 1º año, en 1980 se incrementa el 2º año con especialidades de contabilidad e industria del vestido así, también se prestaba servicios de odontología (curaciones y extracciones tanto para los alumnos como para la comunidad).
En el año 2000 a iniciativas del Director Alberto Terrones se da la ampliación del nivel inicial con Resolución Directoral de la Unidad de Servicios Educativos (U.S.E.) Nº 296 del 15 de febrero de ese mismo año.
De igual manera mediante R.D. Nº 884 del 14 de abril del 2000, se resuelve asignar a nuestra Institución Educativa, el nombre de “IMPERIO DEL TAHUANTINSUYO”, con reconocimiento de estar ubicado en la Urbanización de Tahuantinsuyo haciendo que todos los integrantes nos sentamos orgullosos de un nombre que referencia al gran Imperio Incaico reconocido mundialmente.
En la actualidad todos los integrantes de la IE están comprometidos a elevar el nivel de la educación, prestando un mejor servicio de calidad a todos los hijos de la comunidad.
A lo largo de existencia de esta Alma Mater cobijó a mucho Alumnos, Maestros y Directores presentando a continuación la relación.
 
 
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
conn.sendButton(m.chat, menu, wm, 'https://telegra.ph/file/a247fa451226f617743b3.jpg', [['Directores', `.directores`]], null, [['Facebook', `${yt}`]], m)

await m.react('✅')	
} catch (e) {
m.reply(e)
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
//console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['imperio', 'help', '?']
handler.tags = ['main']
handler.command = /^(imperio|3049\?)$/i
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
