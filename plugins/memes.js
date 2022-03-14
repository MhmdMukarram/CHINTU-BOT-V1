/*
Copyright (C) 2021 KAVIYAAH   ,  Diana whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
kaviyaah - kavishka sandaruwan (v 1.0.0 avalable)
*/

const diana = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const memeMaker = require('meme-maker')
const fs = require('fs')
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('memes');

if (Config.WORKTYPE == 'private') {

    diana.addqueendiacmd({ queeendiacmd: 'meme ?(.*)', fromMe: true, desc: Lang.MEMES_DESC }, (async(message, match) => {

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.NEED_REPLY, MessageType.text);
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1];
            bottomText = split[0];
        } else {
            topText = match[1];
            bottomText = '';
        }

        var info = await message.reply(Lang.DOWNLOADING);

        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        memeMaker({
            image: location,
            outfile: 'diana-meme.png',
            topText: topText,
            bottomText: bottomText,
        }, async function(err) {
            if (err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('diana-meme.png'), MessageType.image, { filename: 'diana-meme.png', mimetype: Mimetype.png, caption: Config.AFN });
            await info.delete();
        });
    }));
} else if (Config.WORKTYPE == 'public') {

    diana.addqueendiacmd({ queeendiacmd: 'meme ?(.*)', fromMe: false, desc: Lang.MEMES_DESC }, (async(message, match) => {

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.NEED_REPLY, MessageType.text);
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1];
            bottomText = split[0];
        } else {
            topText = match[1];
            bottomText = '';
        }

        var info = await message.reply(Lang.DOWNLOADING);

        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        memeMaker({
            image: location,
            outfile: 'diana-meme.png',
            topText: topText,
            bottomText: bottomText,
        }, async function(err) {
            if (err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('diana-meme.png'), MessageType.image, { filename: 'diana-meme.png', mimetype: Mimetype.png, caption: Config.AFN });
            await info.delete();
        });
    }));
}