let handler = function (m) {
	this.sendContact(m.chat, '6285876902820', 'creator sc ini :)', m)
}

handler.customPrefix = ['creator fahrilbotz']  //jangan di ganti nanti eror udah masuk ke main.js
handler.command = new RegExp

module.exports = handler 