import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm.. Where Is The Text?\n\npenggunaan:\n${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} plugins/melcanz.js`
    if (!m.quoted.text) throw `balas pesan nya!`
    let path = `${text}`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`Saved In${path}`)
}
handler.help = ['sf'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^sf$/i

handler.rowner = true
export default handler
