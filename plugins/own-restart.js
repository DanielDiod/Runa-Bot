import { spawn } from 'child_process'

var handler = async (m, { conn, isROwner, text }) => {

if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
if (conn.user.jid == conn.user.jid) {
await conn.reply(m.chat, '☁️ *Reiniciando*', m, fake, )
process.send('reset')
} else throw 'eh'

}
handler.help = ['restart']
handler.tags = ['own']
handler.command = ['restart','reiniciar'] 

handler.rowner = true

export default handler
