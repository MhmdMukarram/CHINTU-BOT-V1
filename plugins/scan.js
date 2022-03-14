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
    diana.addqueendiacmd({ queeendiacmd: 'scan ?(.*)', fromMe: true, desc: Lang.SCAN }, (async(message, match) => {

        if (match[1] == '') return await message.client.sendMessage(message.jid, Lang.NO, MessageType.text);

        var exists = await message.client.isOnWhatsApp(match[1])
        if (exists) {
            await message.client.sendMessage(message.jid, '```' + match[1] + '``` \n' + Lang.SUC + '\n' + exists.jid, MessageType.text);
        } else {
            await message.client.sendMessage(message.jid, '```' + match[1] + '``` \n' + Lang.UNSUC, MessageType.text);
        }
    }));
} else if (Config.WORKTYPE == 'public') {
    diana.addqueendiacmd({ queeendiacmd: 'scan ?(.*)', fromMe: false, desc: Lang.SCAN }, (async(message, match) => {

        if (match[1] == '') return await message.client.sendMessage(message.jid, Lang.NO, MessageType.text);

        var exists = await message.client.isOnWhatsApp(match[1])
        if (exists) {
            await message.client.sendMessage(message.jid, '```' + match[1] + '``` \n' + Lang.SUC + '\n' + exists.jid, MessageType.text);
        } else {
            await message.client.sendMessage(message.jid, '```' + match[1] + '``` \n' + Lang.UNSUC, MessageType.text);
        }
    }));
}