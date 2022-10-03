let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donate Me • Umar 」
│ • *Easy Paisa:* [${global.ppulsa}]
❏────

┌─「 Donate Me • Umar 」
│ • *JazzCash:* [${global.pdana}]
❏────
`

const templateButtons = [
    {index: 1, urlButton: {displayText: '✨ YouTube', url: psaweria}},
    {index: 2, urlButton: {displayText: '📷 Instagram', url: sig}},
    {index: 3, urlButton: {displayText: '🌎 Official Group', url: sgc}},
    {index: 4, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donate'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['Donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
