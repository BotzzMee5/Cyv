import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `[❗] contoh .ai apa itu bokep`
try {
await conn.sendPresenceUpdate('composing', m.chat)
let data = await fetch(`https://api.itsrose.my.id/chatGPT/free?prompt=${text}`)
let hasil = await data.json()
m.reply(`${hasil.message}`.trim())
} catch {
throw `*[❗] Erorr*`
}}
handler.command = ['openai', 'chatgpt', 'ai', 'robot']
export default handler

//By Zuka