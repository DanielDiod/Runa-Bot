
/*import yts from 'yt-search';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    if (!text) throw `Ejemplo de uso *${usedPrefix + command}* Lil Peep hate my life`;
    m.react('📀');
    
    let result = await yts(text);
    let ytres = result.videos;
    

    let listSections = [];
    for (let index in ytres) {
        let v = ytres[index];
        listSections.push({
            title: `${index}┃ ${v.title}`,
            rows: [
                {
                    header: '🎶 MP3',
                    title: "",
                    description: `▢ ⌚ *Duración:* ${v.timestamp}\n▢ 👀 *Vistas:* ${v.views}\n▢ 📌 *Titulo* : ${v.title}\n▢ 📆 *Fecha:* ${v.ago}\n`, 
                    id: `${usedPrefix}yta ${v.url}`
                },
                {
                    header: "🎥 MP4",
                    title: "" ,
                    description: `▢ ⌚ *Duración:* ${v.timestamp}\n▢ 👀 *Vistas:* ${v.views}\n▢ 📌 *Titulo* : ${v.title}\n▢ 📆 *Fecha:* ${v.ago}\n`, 
                    id: `${usedPrefix}ytv ${v.url}`
                }
            ]
        });
    }

    await conn.sendList(m.chat, '  * YOYTUBE - DL*', `\n 🍟 Resultados de:\n *${text}*`, `Click Aqui`, ytres[0].image, listSections, m);
};

handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'Play', 'playlist', 'playlista'] 
handler.disabled = false

export default handler*/

import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'

const handler = async (m, { conn, text, args }) => {
if (!text) {
return m.reply('*Ingrese el título de un vídeo junto al tipo de media que desea recibir*\n\nPor ejemplo: `!play audio Those Eyes`\n\n> Tipos de media: `audio`, `video`, `mp3doc`, `mp4doc`')
}

const parts = text.split(' ')
const selection = parts.shift().toLowerCase()
const query = parts.join(' ')

try {
if (query.length === 0) {
return m.reply('Parece faltar el título del vídeo')
}
m.reply(wait)
var search = await yts(query)
var videos = search.videos

if (videos.length === 0) {
return m.reply('No se encontraron videos para el término de búsqueda proporcionado.')
}
const video = videos[0]
const url = video.url
let dl_url, mimeType, videoUrl

switch (selection) {
case 'audio': {
let c = '360' + 'p'
const audiodl = await youtubedl(url).catch(async _ => await youtubedlv2(url));
const audioUrl = await audiodl.video[c].download()
const ytMsg = `\`YouTube - ${query}\`\n\nTítulo: *${video.title}*\nVistas: *${video.views}*\nDuración: *${video.timestamp}*\nEnlace: ${url}\nDescripción: ${video.description}\n\n> Enviando ${selection}`
await conn.sendMessage(m.chat, { image: { url: `${video.thumbnail}` }, caption: ytMsg }, { quoted: m })
await conn.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mpeg' }, { quoted: m })
}
break
case 'video': {
const videodl = await youtubedl(url).catch(async _ => await youtubedlv2(url));
const videoUrl = await videodl.video['360p'].download()
const ytMsg = `\`YouTube - ${query}\`\n\nTítulo: *${video.title}*\nVistas: *${video.views}*\nDuración: *${video.timestamp}*\nEnlace: ${url}\nDescripción: ${video.description}\n\n> Enviando ${selection}`
await conn.sendMessage(m.chat, { image: { url: `${video.thumbnail}` }, caption: ytMsg }, { quoted: m })
await conn.sendMessage(m.chat, { video: { url: videoUrl }, caption: '`Video de YouTube`' }, { quoted: m })
}
break
case 'mp3doc': {
const mp3dl = await youtubedl(url).catch(async _ => await youtubedlv2(url));
const mp3Url = await mp3dl.video['360p'].download()
const ytMsg = `\`YouTube - ${query}\`\n\nTítulo: *${video.title}*\nVistas: *${video.views}*\nDuración: *${video.timestamp}*\nEnlace: ${url}\nDescripción: ${video.description}\n\n> Enviando ${selection}`
await conn.sendMessage(m.chat, { image: { url: `${video.thumbnail}` }, caption: ytMsg }, { quoted: m })
await conn.sendMessage(m.chat, {document: {url: mp3Url}, mimetype: 'audio/mpeg', fileName: `${query}.mp3`}, {quoted: m})
}
break
case 'mp4doc': {
const mp4dl = await youtubedl(url).catch(async _ => await youtubedlv2(url));
const mp4Url = await mp4dl.video['360p'].download()
const ytMsg = `\`YouTube - ${query}\`\n\nTítulo: *${video.title}*\nVistas: *${video.views}*\nDuración: *${video.timestamp}*\nEnlace: ${url}\nDescripción: ${video.description}\n\n> Enviando ${selection}`
await conn.sendMessage(m.chat, { image: { url: `${video.thumbnail}` }, caption: ytMsg }, { quoted: m })
await conn.sendMessage(m.chat, {document: {url: mp4Url}, mimetype: 'video/mp4', fileName: `${query}.mp4`}, {quoted: m})
}
break
default:
return m.reply('Tipo de media no válido. Por favor, usa `audio`, `video`, `mp3doc` o `mp4doc`.')
}

} catch (e) {
m.reply('Ocurrió un error al procesar su solicitud. ' + e)
console.error(e)
}
}

handler.help = ['play']
handler.tags = ['downloader']
handler.command = /^(play)$/i

export default handler
