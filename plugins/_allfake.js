import fetch from 'node-fetch'

export async function before(m, { conn }) {
let img = await (await fetch(`https://tinyurl.com/2c5hk765`)).buffer()
 global.rcanal = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363206717994793@newsletter",
      serverMessageId: 100,
      newsletterName: 'Runa-Bot',
    },
	    externalAdReply: {
				    showAdAttribution: true,
					title: packname,
					body: 'Hola',
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: 'https://qu.ax/fUDA.jpg',
		           sourceUrl: channel,
		           mediaType: 1,
                   renderLargerThumbnail: false
	    },
    },
  }

 global.adReply = {
	    contextInfo: { 
             forwardingScore: 9999, 
                 isForwarded: false, 
                    externalAdReply: {
				    showAdAttribution: true,
					title: packname,
					body: des,
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: img,
                    thumbnail: img,
		           sourceUrl: channel,
		           mediaType: 1,
                   renderLargerThumbnail: true
				}
			}
		}
}
