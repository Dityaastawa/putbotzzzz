let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Source code')).buffer(), `
*────────「 SCRIPT 」 ────────*
Hai 👋
saya putbotz
Bot Ini Menggunakan Sc dari github
-
`.trim(), '© putbotz', 'Thanks', '.tqto')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
