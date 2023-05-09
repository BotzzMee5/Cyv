const fetch = require('node-fetch')

let handler = async function (m, {conn, text}) {
  let usernam = ["lampu_slebew"]
  let ftroli = {
    key: {
      remoteJid: 'status@broadcast',
      participant: '0@s.whatsapp.net'
    },
    message: {
      orderMessage: {
        itemCount: 2023,
        status: 404,
        surface: 404,
        message: `𝙹𝙰𝙽𝙶𝙰𝙽 𝚂𝙿𝙰𝙼(•ˋ _ ˊ•)`,
        orderTitle: '',
        thumbnail: await (await fetch('https://telegra.ph/file/5f028205d010a090a21fb.jpg')).buffer(),
        sellerJid: '0@s.whatsapp.net'
      }
    }
  }
  let username = usernam[Math.floor(Math.random() * usernam.length)]
  let f = await fetch(`https://web.api-kyouka.my.id/api/other/tiktok/stalk?user=${username}&apikey=z2CBMCaKT2`)
  let x = await f.json()
  let kann = x.ttlu.result.videos
  let hasil = kann[Math.floor(Math.random() * kann.length)]
  let tet = `*Post : ${hasil.video.post}\n${hasil.video.likes} Like\n${hasil.video.comments} Komen\n${hasil.video.share} Di Bagikan\nDeskripsi Video : ${hasil.video.description}\nUsername : ${hasil.author.username}\n${x.ttlu.result.followers} Followers\n${x.ttlu.result.following} Following\n Deskripsi Profile: ${x.ttlu.result.description}`

  conn.sendButton(m.chat, tet, wm, hasil.video.url, [['Next', '.ttfyp'],['NO WM', `.tiktok ${hasil.video.url2}`]], m, {quoted: m})
}

handler.command = ['ofyp']
handler.help = ['ofyp']
handler.tags = ['owner']

handler.rowner = true
handler.prem = false

module.exports = handler