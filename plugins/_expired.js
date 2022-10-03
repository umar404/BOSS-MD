export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, 'Bye Lols The Bot Will Be Left, You Want More Bots To Contact My Onwer Umar wa.me/923165123719!!')
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}