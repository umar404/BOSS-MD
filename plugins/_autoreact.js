let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['๐น','๐','๐','๐ณ','๐', '๐ฅต', '๐ฑ', '๐ฅ', '๐', '๐ค','๐ต๐ฐ','๐ฆ','๐คจ','๐ฅด','๐','๐ค','๐', '๐','๐'])}`,
            key: m.key,
          }})
  
  }
handler.customPrefix = /(bile?k|ban?h|cum?|knt?l|y?|mmk|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepe?k|owner)/i
handler.command = new RegExp

export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
