let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Bulan* :      *Rm 20*
╠➥ *Permanen* : *Rm 30*
╠➥ *Premium* :   *Rm 15*
╠➥ *Sc Bot* :        *Bikin sendiri aj wkwk*
║
╠═〘 PEMBAYARAN 〙 ═
╠➥ Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©Putbotz 2022
╠═ Scrip original by Putbotz
╠═〘 ${namabot} 〙 ═`.trim(), footer, 'Pulsa' m)
}

handler.command = /^sewa(bot)?$/i

module.exports = handler
