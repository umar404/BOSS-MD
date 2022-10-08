let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let info = `
╭━━━━「 *POLICY* 」
┊⫹⫺ *Economical:* _${sh}k/grup (1 Week)_
┊⫹⫺ *Normal:* _${sn}k/grup (1 month)_
┊⫹⫺ *Standar:* _${ss}k/grup (2 month)_
┊⫹⫺ *Pro:* _${sp}k/grup (4 month)_                                                      
┊⫹⫺ *Vip:* = _${sv}k/grup (12 month)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Economical:* _${ph}k (1 Week)_
┊⫹⫺ *Normal:* _${pn}k (1 month)_
┊⫹⫺ *Pro:* _${pp}k (4 month)_
┊⫹⫺ *Vip:* _${pv}k (8 moth)_                                               
┊⫹⫺ *Permanent:* = _${ppm}k (Unlimited)_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *EASYPAISA:* [${ppulsa}]
• *JAZZCASH:* [${pdana}]

–––––– *🥀 Policy* ––––––
🗣️: Bro, why is it so expensive?
💬: Want to haggle? yes, please chat with the owner Umar

🗣️: Is this a scam bro? 
💬: Dont, Owner 100% Keep the promise #UMAR REHAN!

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA✦-------`,
	rows: [
	    {title: "🔖 𝗘𝗖𝗢𝗡𝗢𝗠𝗜𝗖𝗔𝗟", rowId: '.order *Paket:* HEMAT • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sh + 'k (1 week)' },
	    {title: "🔖 𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sn + 'k (1 month)' },
	{title: "🔖 𝗦𝗧𝗔𝗡𝗗𝗔𝗥", rowId: '.order *Paket:* STANDAR • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + ss + 'k (2 month)' },
	{title: "🔖 𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sp + 'k (4 month)' },
	{title: "🔖 𝗩𝗜𝗣", rowId: '.order *Paket:* VIP • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sv + 'k (12 month)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 𝗘𝗖𝗢𝗡𝗢𝗠𝗜𝗖𝗔𝗟", rowId: '.order *Paket:* HEMAT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ph + 'k (1 week)' },
	    {title: "🌟 𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pn + 'k (1 month)' },
	{title: "🌟 𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pp + 'k (4 month)' },
	{title: "🌟 𝗩𝗜𝗣", rowId: '.order *Paket:* VIP • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pv + 'k (8 month)' },
	{title: "🌟 𝗣𝗘𝗥𝗠𝗔𝗡𝗘𝗡𝗧", rowId: '.order *Paket:* PERMANENT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Boss Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
