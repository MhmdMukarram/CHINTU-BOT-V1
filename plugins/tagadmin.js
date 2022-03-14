/*
Copyright (C) 2021 KAVIYAAH   ,  Diana whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
kaviyaah - kavishka sandaruwan (v 1.0.0 avalable)
*/

const diana = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('tagall');

if (Config.WORKTYPE == 'private') {
    diana.addqueendiacmd({ queeendiacmd: 'tagadmin$', fromMe: true, desc: Lang.TAGADMİN }, (async(message, match) => {
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async(uye) => {
            if (uye.isAdmin) {
                mesaj += '👮‍♂️@' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid, mesaj, MessageType.extendedText, { contextInfo: { mentionedJid: jids }, previewType: 0 })
    }));
} else if (Config.WORKTYPE == 'public') {
    diana.addqueendiacmd({ queeendiacmd: 'tagadmin$', fromMe: false, desc: Lang.TAGADMİN }, (async(message, match) => {
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async(uye) => {
            if (uye.isAdmin) {
                mesaj += '👮‍♂️@' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid, mesaj, MessageType.extendedText, { contextInfo: { mentionedJid: jids }, previewType: 0 })
    }));
}

diana.addqueendiacmd({ queeendiacmd: 'tagadmin$', fromMe: true, noinmenu: true }, (async(message, match) => {
    let grup = await message.client.groupMetadata(message.jid);
    var jids = [];
    mesaj = '';
    grup['participants'].map(async(uye) => {
        if (uye.isAdmin) {
            mesaj += '👮‍♂️@' + uye.id.split('@')[0] + '\n';
            jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
        }
    });
    await message.client.sendMessage(message.jid, mesaj, MessageType.extendedText, { sendEphemeral: 'chat', contextInfo: { mentionedJid: jids }, previewType: 0 })
}));