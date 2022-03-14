/*
Copyright (C) 2021 KAVIYAAH   ,  Diana whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
kaviyaah - kavishka sandaruwan (v 1.0.0 avalable)
*/
const diana = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');

if (Config.WORKTYPE == 'private') {

    diana.addqueendiacmd({ queeendiacmd: 'compliment ?(.*)', fromMe: true, desc: Lang.CM_DESC }, async(message, match) => {
        if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
        const url = `https://complimentr.com/api`;
        try {
            const response = await got(url);
            const json = JSON.parse(response.body);
            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n\n *compliment : 🤗 ' + Lang.CM + '* ```' + json.compliment + '```\n\n', MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
        }
    });
} else if (Config.WORKTYPE == 'public') {

    diana.addqueendiacmd({ queeendiacmd: 'compliment ?(.*)', fromMe: false, desc: Lang.CM_DESC }, async(message, match) => {
        if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
        const url = `https://complimentr.com/api`;
        try {
            const response = await got(url);
            const json = JSON.parse(response.body);
            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n\n *compliment : 🤗 ' + Lang.CM + '* ```' + json.compliment + '```\n\n', MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
        }
    });
}