import yts from 'yt-search'

const handler = async(m, { conn, text }) => {
    if (!text) return m.reply("Faded")
    await yts(text).then(async (data) => {
        let txt = `*\`•/• YouTube - Search •/•\`*\n\n🚩 *Resultados De:* ${text}\n🚩 *Resultados encontrados:* ${data.all.length}`
        let buttons = [{
            name: "single_select",
            buttonParamsJson: JSON.stringify({ 
                title: "Seleccionar",
                sections: [{
                    title: "Y O U T U B E - S E A R C H",
                    rows: data.all.map(i => ({
                        header: "MP3 🎵",
                        title: i.title,
                        id: `.ytmp3 ${i.url}`
                    }))
                }]
            })
        }]
        let msgii = generateWAMessageFromContent(m.chat, { 
            viewOnceMessage: { 
                message: { 
                    messageContextInfo: { 
                        deviceListMetadata: {}, 
                        deviceListMetadataVersion: 2
                    }, 
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: { 
                            mentionedJid: [m.sender] 
                        }, 
                        body: proto.Message.InteractiveMessage.Body.create({ 
                            text: txt
                        }), 
                        footer: proto.Message.InteractiveMessage.Footer.create({ 
                            text: null
                        }), 
                        header: proto.Message.InteractiveMessage.Header.create({ 
                            hasMediaAttachment: true, ...(await prepareWAMessageMedia({ 
                                image: await fetch(``), 
                                gifPlayback: true 
                            }, { upload: sts.waUploadToServer })) 
                        }), 
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                            buttons: buttons
                        }) 
                    }) 
                }
            }
        }, {userJid: m.sender, quoted: m})
        await conn.relayMessage(msgii.key.remoteJid, msgii.message, { 
            messageId: msgii.key.id 
        })
    }).catch(() => {})
}
handler.command = ['yts']

export default handler
