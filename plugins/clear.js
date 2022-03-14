/*
Copyright (C) 2021 KAVIYAAH   ,  Diana whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
kaviyaah - kavishka sandaruwan (v 1.0.0 avalable)
*/

const { MessageType, GroupSettingChange, ChatModification, WAConnectionTest } = require('@adiwajshing/baileys');
const diana = require('../events');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('admin');
const mut = Language.getString('mute');
const END = "clear all messages"

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true;
        else;
        return false;
    });
    return sonuc.includes(true);
}

diana.addqueendiacmd({ queeendiacmd: 'clear', fromMe: true, desc: END, noinmenu: true }, (async(message, match) => {

    await message.sendMessage('```cleaning chat...```');
    await message.client.modifyChat(message.jid, ChatModification.delete);
    await message.sendMessage('```🏳 Chat cleared 🏳```');
}));

diana.addqueendiacmd({ queeendiacmd: 'del', fromMe: true, deldiacmd: true, noinmenu: true }, async(message) => {
    await message.client.deleteMessage(message.jid, { id: message.reply_message.id, remoteJid: message.jid, fromMe: true })

});