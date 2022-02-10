let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ 3 Minggu
├ 2 Minggu
├ 1 Minggu
├ 3 hari
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Pulsa/Dana : 085792429140
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '3 Minggu', description: "Rp10k\nSewa bot selama 3 minggu.", rowId:".masuk"},
        {title: '2 Minggu', description: "Rp8k\nSewa bot selama 2 minggu.", rowId:".masuk"},
        {title: '1 Minggu', description: "Rp5k\nSewa bot selama 1 minggu.", rowId:".masuk"},
        {title: '3 hari', description: "Rm5.\nSewa bot selama 3 hari.", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//Haruno Bot
