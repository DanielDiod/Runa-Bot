var handler = async (m, { conn }) => {

let totalf = Object.values(global.plugins).filter( (v) => v.help && v.tags ).length

conn.reply(m.chat, `☁️ Total de Funciones: ${totalf}`, m)

}
handler.help = ['totalf']
handler.tags = ['database']
handler.command = ['totalfunciones']

handler.register = true

export default handler 
