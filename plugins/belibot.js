let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Minggu* :      *RP 5k*
╠➥ *2 Minggu* :      *RP 8k*
╠➥ *3 Minggu* :   *RP 10k*
╠➥ *Sc Bot* :        *Bikin sendiri aj wkwk*
║
╠═〘 PEMBAYARAN 〙 ═
╠➥ Dana/Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©DityaBotz 2022
╠═ Scrip original by -
╠═〘 ${namabot} 〙 ═`.trim(), footer, 'Pulsa' m)
}

handler.command = /^sewa(bot)?$/i

module.exports = handler
