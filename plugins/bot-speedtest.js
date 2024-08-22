import cp from 'child_process'
import {promisify} from 'util'

const exec = promisify(cp.exec).bind(cp)

var handler = async (m) => {

conn.reply(m.chat, '☁️ Espere un momento soy lent..', m)

let o
  
try {

o = await exec('python3 speed.py --secure --share');
} catch (e) {
o = e
} finally {
let {stdout, stderr} = o


if (stdout.trim()) conn.reply(m.chat, stdout, m)
if (stderr.trim()) conn.reply(m.chat, stderr, m)
}

}
handler.help = ['speedtest']
handler.tags = ['bot']
handler.command = /^(speedtest?|test?speed)$/i

handler.register = true

export default handler
