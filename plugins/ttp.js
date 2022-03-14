/*
Copyright (C) 2021 KAVIYAAH   ,  Diana whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
kaviyaah - kavishka sandaruwan (v 1.0.0 avalable)
*/

const diana = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');

const thumb = fs.readFileSync('./uploads/thumb/thumbdia.jpg')
if (Config.WORKTYPE == 'private') {
    diana.addqueendiacmd({ queeendiacmd: 'ttp ?(.*)', fromMe: true, desc: Lang.TTP_DESC }, (async(message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
    }));
    diana.addqueendiacmd({ queeendiacmd: 'attp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async(message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
} else if (Config.WORKTYPE == 'public') {
    diana.addqueendiacmd({ queeendiacmd: 'ttp ?(.*)', fromMe: false, desc: Lang.TTP_DESC }, (async(message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
    }));
    diana.addqueendiacmd({ queeendiacmd: 'attp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async(message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
}