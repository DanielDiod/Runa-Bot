import { createHash } from 'crypto'

var handler = async function (m, { conn, text, usedPrefix }) {

let sn = createHash('md5').update(m.sender).digest('hex')

conn.fakeReply(m.chat, sn, '0@s.whatsapp.net', '⬇️ *Su número de serie asignado es:* ⬇️', 'status@broadcast')

}
handler.help = ['myns']
handler.tags = ['rg']
handler.command = /^(myns|ceksn|ns)$/i

handler.register = true

export default handler