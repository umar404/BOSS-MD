let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
โฆ @${nomorown.split`@`[0]} โฆ
------- ${nameown} -------

๐ฎ *Note:*
โข Owner accept save contact
โข The owner has the right to block for no reason 
โข Speak politely & don't spam
โข Owner only responds related to BOT
โข Phone Number`

//------------ BIO
let ppown = 'https://i.imgur.com/cG37u1e.jpeg'
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *๐ Name* : Umar Rehman
${htjava} *โ๏ธ Ranked * : Single ๐น
${htjava} *โ๏ธ Gender* : Boy
${htjava} *๐ Religion* : Islam
${htjava} *โฐ Date Of birth* : 05 January 2006
${htjava} *๐จ Age* : 16
${htjava} *๐งฎ City * : RAWALPINDI
${htjava} *๐งฉ Hobby* : Playing Free Fire, Chatting, Music, Recode script bot
${htjava} *๐ฌ Nature* : Idiot, Tidak Ramah, Bilek, Prik, Nolep
${htjava} *๐บ๏ธ Stay* : Pak, Rwp, Islamabad
${htjava} *โค๏ธ Love* : Cat 
${htjava} *๐ Hate * : Girls, ๐คฃ 

${htjava} *๐ท ษชษดsแดแดษขสแดแด* : ${sig}
${htjava} *๐ซโ าแดแดแดสแดแดแด* : Umar Rehman
${htjava} *๐ ษขษชแดสแดส:* ${sgh}
โขยทโโโโโโโโโโโโโโโโโโโโโโโโโโยทโข
`
  let teks = 'Chose Below Sir/Br0 ๐น! o(ใ๏ผพโฝ๏ผพใ)o'
const sections = [
   {
	title: `${htjava} OWNER โโโโโโโโโยทโข`,
	rows: [
	    {title: "๐ฑ โข Number", rowId: ".owner nomor"},
	{title: "๐จ โข Biodata", rowId: ".owner bio"},
	{title: "๐ โข Script", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME โโโโโโโยทโข`,
	rows: [
	    {title: "๐น โข Donasi", rowId: ".owner nomor"},
	{title: "๐ โข Sewa", rowId: ".sewa"},
	{title: "๐ โข Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "๐ท Instagram", nomorown, '๐น Nomor', [[null, null], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`โฎโฐ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
