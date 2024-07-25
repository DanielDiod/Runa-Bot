import fetch from "node-fetch"
import yts from "yt-search"

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `🚩 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, !${command} Distancia - Kimberly Contreraxx`,  m, rcanal, )
try {
await m.react(rwait)
let yt_play = await search(args.join(" "))
let img = await (await fetch(`${yt_play[0].image}`)).buffer()

let txt = `*乂  Y O U T U B E  -  P L A Y  乂*\n\n`
       txt += `✩ *𝐓𝐢𝐭𝐮𝐥𝐨:*\n${yt_play[0].title}\n\n`
       txt += `✩ *𝐃𝐮𝐫𝐚𝐜𝐢𝐨𝐧:*\n${secondString(yt_play[0].duration.seconds)}\n\n`
       txt += `✩ *𝐏𝐮𝐛𝐥𝐢𝐜𝐚𝐝𝐨 𝐄𝐧:*\n${yt_play[0].ago}\n\n`
       txt += `✩ *𝐄𝐧𝐥𝐚𝐜𝐞:*\n${'https://youtu.be/' + yt_play[0].videoId}\n\n`
       txt += `✨️ *Nota:* Para descargar responde a este mensaje con *1* o *2*.\n\n`
       txt += `*1:* Video\n*2:* Audio`

/* let txt = `・₊✧★。..・✫・🎸🎧°⋆♡₊˚ 🔮
> 🌩 τιτυℓο:
> • ${yt_play[0].title}
> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪───ׅ──ׅ─ׅ─ׅ┈ ─๋︩︪─◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸
> 🌦 ρυϐℓιϲα∂ο єи: 
> • ${yt_play[0].ago}
> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎─ׅ─ׅ┈ ─๋︩︪───ׅ──ׅ─ׅ─ׅ┈ ─๋︩︪─⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸
> 🍭 єиℓαϲє:
> • ${yt_play[0].url}
> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪───ׅ──ׅ─ׅ─ׅ┈ ─๋︩︪─⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸
> 🍒 αմԵօɾ:
> • ${yt_play[0].author.name}
> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪──ׅ──ׅ──ׅ─ׅ┈ ─๋︩︪─◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸
> 🧃 cαɳαℓ:
> • ${yt_play[0].author.url}
> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪───ׅ──ׅ─ׅ─ׅ┈ ─๋︩︪─◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸
> 🍇 ժմɾαcíօ́ղ:
> • ${secondString(yt_play[0].duration.seconds)}
・₊✧。..・★🎸🎧°⋆♡₊˚ 🔮

> Para descargar responde a este mensaje con *1* o *2*.` */
await conn.sendMessage(m.chat, {
text: txt,
contextInfo: { 
forwardingScore: 9999, 
isForwarded: true, 
externalAdReply: {
title: `${yt_play[0].title}`,
body: '🌟 Runa-Bot By: Daniel',
thumbnailUrl: img,
thumbnail: img,
sourceUrl: `${yt_play[0].url}`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
await m.react(done)
} catch {
await m.reply(`Ocurrió un pequeño error.`)}}

handler.help = ['play *<búsqueda>*', 'play2 *<busqueda>*']
handler.tags = ['descargas', 'youtube']
handler.command = ['play', 'play2']
export default handler

async function search(query, options = {}) {
let search = await yts.search({ query, hl: "es", gl: "ES", ...options });
return search.videos;
}

function MilesNumber(number) {
let exp = /(\d)(?=(\d{3})+(?!\d))/g;
let rep = "$1.";
let arr = number.toString().split(".");
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join(".") : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? ":" : ":") : "";
var hDisplay = h > 0 ? h + (h == 1 ? ":" : ":") : "";
var mDisplay = m > 0 ? m + (m == 1 ? ":" : ":") : "";
var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

/*import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
import fetch from 'node-fetch' 

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let lister = [
        "mp3",
        "mp4", 
        "mp3doc",
        "mp4doc"
    ]
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
   // if (!lister.includes(feature)) return conn.reply(m.chat, `*🚩 Ingresa el formato en que deseas descargar más el titulo de un video o musica de YouTube.*\n\nEjemplo : ${usedPrefix + command} *mp3* SUICIDAL-IDOL - ecstacy\n\nFormatos disponibles :\n${usedPrefix + command} *mp3*\n${usedPrefix + command} *mp3doc*\n${usedPrefix + command} *mp4*\n${usedPrefix + command} *mp4doc*`,  m, fake,)
	  if (command == "play" || command == 'play2') {
            if (!text) return conn.reply(m.chat, `*🚩 Ingresa el titulo de un video o musica de YouTube.*`,  m, rcanal,)
    await m.react('🕓')
    var res = await yts(text)
    var vid = res.videos[0]
    var q = '128kbps'
const texto1 = `乂  Y O U T U B E   M U S I C\n
	✩ *Título ∙* ${vid.title}\n
        ✩ *Duración ∙* ${vid.timestamp}\n
        ✩ *Visitas ∙* ${vid.views}\n
        ✩ *Autor ∙* ${vid.author.name}\n
        ✩ *Publicado ∙* ${vid.ago}\n
        ✩ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`.trim()
		
await conn.sendButton(m.chat, texto1, wm, res.videos[0].thumbnail, [
	['Audio 📀', `${usedPrefix}mp3 ${text}`],
	['Video 🎥', `${usedPrefix}mp4 ${text}`]
  ], null, [['Mas Resultados', `${usedPrefix}yts ${text}`]], m)
	  }
  
            if (command == "mp3") {
	 if (!text) return conn.reply(m.chat, `*🚩 Ingresa el titulo de un video o musica de YouTube.*`, m, fake,)
		
       try {
    const res = await yts(text)
    const vid = res.videos[0]
    const q = '128kbps'
       let yt = await fg.yta(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
       
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp3(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*\n\n` + error, m, fake,).then(_ => m.react('✖️'))
        console.error(error)
    }}
    }
        
        if (command == "mp4") {
            if (!text) return conn.reply(m.chat, `*🚩 Ingresa el titulo de un video o musica de YouTube.*`, m, fake,)
    await m.react('🕓')
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '360p'
	const texto1 = `Y O U T U B E 乂 M U S I C\n
	✩ *Título ∙* ${vid.title}\n
        ✩ *Duración ∙* ${vid.timestamp}\n
        ✩ *Visitas ∙* ${vid.views}\n
        ✩ *Autor ∙* ${vid.author.name}\n
        ✩ *Publicado ∙* ${vid.ago}\n
        ✩ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`
	/*
await conn.sendButton(m.chat, wm, texto1, res.videos[0].thumbnail, [
	['Creador', `${usedPrefix}creador`],
	['Menu', `${usedPrefix}menu`]
  ], null, [['Canal', `${md}`]], m)
       */
       try {
       let yt = await fg.ytv(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`,  m, fake,).then(_ => m.react('✖️'))
       
       await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`, m)
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp4(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, fake,).then(_ => m.react('✖️'))
       
       await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`, m)
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*`, m).then(_ => m.react('✖️'))
        console.error(error)
    }}}
    
    if (command == "mp3doc") {
            if (!inputs) return conn.reply(m.chat, `*🚩 Ingresa el titulo de un video o musica de YouTube.*`,  m, fake,)
    await m.react('🕓')
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '128kbps'
	const texto1 = `Y O U T U B E 乂 D O C\n
       ✩ *Título ∙* ${vid.title}\n
       ✩ *Duración ∙* ${vid.timestamp}\n
       ✩ *Visitas ∙* ${vid.views}\n
       ✩ *Autor ∙* ${vid.author.name}\n
       ✩ *Publicado ∙* ${vid.ago}\n
       ✩ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`
	   /* 
await conn.sendButton(m.chat, wm, texto1, res.videos[0].thumbnail, [
	['Creador', `${usedPrefix}creador`],
	['Menu', `${usedPrefix}menu`]
  ], null, [['Canal', `${md}`]], m)
	    */
       try {
       let yt = await fg.yta(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`,  m, fake,).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp3(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`,  m, fake,).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*`,  m, fake,).then(_ => m.react('✖️'))
        console.error(error)
    }}}
    
    if (command == "mp4doc") {
            if (!inputs) return conn.reply(m.chat, `*🚩 Ingresa el titulo de un video o musica de YouTube.*`, m)
    await m.react('🕓')
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '360p'
	const texto1 = `Y O U T U B E 乂 M U S I C\n
	✩ *Título ∙* ${vid.title}\n
        ✩ *Duración ∙* ${vid.timestamp}\n
        ✩ *Visitas ∙* ${vid.views}\n
        ✩ *Autor ∙* ${vid.author.name}\n
        ✩ *Publicado ∙* ${vid.ago}\n
        ✩ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n`
	    /*
await conn.sendButton(m.chat, wm, texto1, res.videos[0].thumbnail, [
	['Creador', `${usedPrefix}creador`],
	['Menu', `${usedPrefix}menu`]
  ], null, [['Canal', `${md}`]], m)
  */
       
       try {
       let yt = await fg.ytv(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 300
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`,  m, fake,).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━●────── ${vid.timestamp}`, mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`, quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp4(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 300
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`,  m, fake,).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━●────── ${vid.timestamp}`, mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`, quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*\n\n` + error, m).then(_ => m.react('✖️'))
        console.error(error)
}}}
}
handler.help = ["play"].map(v => v + " <formato> <búsqueda>")
handler.tags = ["downloader"]
handler.command = ['play', 'play2', 'mp3', 'mp4', 'mp3doc', 'mp4doc']
handler.register = true 
handler.star = 2
export default handler*/
