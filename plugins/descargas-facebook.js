import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {

if (!args[0]) {
return m.reply('Ingrese un enlace de un *reel* de *Facebook*\n\n`Ejemplo`: .fb https://www.facebook.com/share/r/GB9op9yMyNUmFVH2/?mibextid=V2iOCx')
}

if (!args[0].includes('facebook')) {
return m.reply('Enlace no válido. Compruebe el enlace')
}

try {
const data = await fetch(`https://lolhuman.xyz/api/facebook?apikey=GataDiosV2&url=${args[0]}`)
let video = await data.json()
let buff = await video.result[0]

const caption = `listo 🍟`

await conn.sendMessage(m.chat, { video: { url: buff }, mimetype: 'video/mp4', fileName: `video.mp4`, caption: caption, mentions: [m.sender], }, { quoted: m })

} catch (e) {
m.reply('Ha ocurrido un error al descargar su video: ' + e)
}
}

handler.help = ['facebook *<link>*'];
handler.tags = ['dl'];
handler.command = ['fb', 'facebook', 'FB', 'FACEBOOK'];
export default handler;
