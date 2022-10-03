export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        conn.sendButtonDoc(m.chat,`
  Kamu berhenti AFK${user.afkReason ? ' After' + user.afkReason : ''}
  Selama ${(new Date - user.afk).toTimeString()}
  `,wm,'Hi Lol','Ya',m,fakeig)
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        conn.sendButtonDoc(m.chat,`
  Jangan tag dia!
  Dia sedang AFK ${reason ? 'With Reason' + reason : 'no reason'}
  Selama ${(new Date - afkTime).toTimeString()}
  `,wm,'Sorry Sister 😹','Ya',m,fakeig)
    }
    return true
}
