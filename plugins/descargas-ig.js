/*import fetch from 'node-fetch'
import axios from 'axios'

var handler = async (m, {conn, text, command, usedPrefix }) => {
 
if (!text) {
return m.reply('Falta enlace')//conn.reply(m.chat, `☁️ Ingrese un enlace de instagram\n\nEjemplo >${usedPrefix + command} https://www.instagram.com/reel/CuqAzGRAbZa/?igshid=MzRlODBiNWFlZA==`, m)
}
 
conn.reply(m.chat, `🍟 Espere un momento soy lenta...`, m)

if (!text.includes('instagram')) {
return m.reply('Enlace no válido. Compruebe el enlace')
}

try {
const data = await fetch(`https://lolhuman.xyz/api/instagram?apikey=GataDiosV2&url=${text}`)
let video = await data.json()
let buff = await video.result[0]

const caption = `Instagram 🍃`

await conn.sendMessage(m.chat, { video: { url: buff }, mimetype: 'video/mp4', fileName: `video.mp4`, caption: caption, mentions: [m.sender], }, { quoted: m })

} catch (e) {
m.reply('Ha ocurrido un error al descargar su solicitud: ' + e)
}
 
}
handler.help = ['ig']
handler.tags = ['descargas']
handler.command = /^(instagramdl|instagram|igdl|ig|instagramdl2|instagram2|igdl2|ig2|instagramdl3|instagram3|igdl3|ig3)$/i

handler.register = true
handler.limit = true

export default handler*/

const handler = async(m, { text }) => {
if (!text) {
return m.reply('.ig https://www.instagram.com/reel/C--LbImuITr/?igsh=bTA2M25saHk3cHM1')
}
}
handler.command = ['ig']

export default handler
