//CÓDIGO ADAPTADO POR https://github.com/GataNina-Li | @gata_dios & https://github.com/AzamiJs | @Azami

import fs from 'fs'
import { parsePhoneNumber } from 'libphonenumber-js'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import ct from 'countries-and-timezones'
import moment from 'moment-timezone'
import translate from '@vitalets/google-translate-api'
const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default

var handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {

try {

let user = conn.getName(m.sender)

let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}}
let links = linkSity.getRandom()

let fechaMoment, formatDate, nombreLugar, ciudad = null; const phoneNumber = '+' + m.sender; const parsedPhoneNumber = parsePhoneNumber(phoneNumber); const countryCode = parsedPhoneNumber.country; const countryData = ct.getCountry(countryCode); const timezones = countryData.timezones; const zonaHoraria = timezones.length > 0 ? timezones[0] : 'UTC'; moment.locale('es'); let lugarMoment = moment().tz(zonaHoraria); if (lugarMoment) { fechaMoment = lugarMoment.format('llll [(]a[)]'); formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1); nombreLugar = countryData.name; const partes = zonaHoraria.split('/'); ciudad = partes[partes.length - 1].replace(/_/g, ' '); } else { lugarMoment = moment().tz('America/Mexico_City'); fechaMoment = lugarMoment.format('llll [(]a[)]'); formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1); nombreLugar = 'America'; ciudad = 'Ciudad de México' }
  
//FAKES
let a = {'key': {'participants': '0@s.whatsapp.net', 'fromMe': false, 'id': '3B64558B07848BD81108C1D14712018E'}, 'message': {'locationMessage': {'name': `${user}`, 'jpegThumbnail': await (await fetch(pp)).buffer(), 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}
const ftrol = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 2023, status: 1, surface : 1, message: `${user}!`, orderTitle: `▮Menu ▸`, sellerJid: '0@s.whatsapp.net' }}}
const fload = { key : { message: `Runa-Bot-MD 🍟` + `\nGataNina-Li`, thumbnail: await (await fetch(pp)).buffer(), sellerJid: '0@s.whatsapp.net' }}

m.react('👋🏻')
  
let menu = `*🍟 Hola, ${user}*

*País*: ${nombreLugar} 
*Ciudad*: ${ciudad}

!allmenu
_(Para ver el menú completo)_`

await conn.reply(m.chat, menu, a, { contextInfo: { externalAdReply: {title: '👋 ¡Hola!', body: '', sourceUrl: ig, thumbnail: await (await fetch(pp)).buffer() }}})

} catch {
conn.reply(m.chat, `*❗️ Ocurrió un error*`, m, rcanal, )
console.log(e)
}}
handler.help = ['menu']
handler.tags = ['bot']
handler.command = /^(menu)$/i
handler.register = true

export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
