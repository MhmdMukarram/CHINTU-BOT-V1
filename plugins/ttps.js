/*
Copyright (C) 2021 KAVIYAAH   ,  Diana whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
kaviyaah - kavishka sandaruwan (v 1.0.0 avalable)
*/

const diana = require('../events');
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
let am = Config.WORKTYPE == 'public' ? false : true
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ වචනයක් ඇතුළත් කළ යුතුය*"
const thumb = fs.readFileSync('./uploads/thumb/thumbdia.jpg')
diana.addqueendiacmd({ queeendiacmd: 'll ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
    }

    var webimage = await axios.get(`https://api.zeks.xyz/api/gtext?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'tred ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`http://zekais-api.herokuapp.com/text2png?text==${match[1]}&color=red&apikey=DoH8MCdm`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'tblue ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`http://zekais-api.herokuapp.com/text2png?text=${match[1]}&color=blue&apikey=DoH8MCdm`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'tgreen ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`http://zekais-api.herokuapp.com/text2png?text=${match[1]}&color=green&apikey=DoH8MCdm`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'tblack ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`http://zekais-api.herokuapp.com/text2png?text=${match[1]}&color=black&apikey=DoH8MCdm`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'tyellow ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`http://zekais-api.herokuapp.com/text2png?text=${match[1]}&color=yellow&apikey=DoH8MCdm`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'tpink ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`http://zekais-api.herokuapp.com/text2png?text=${match[1]}&color=pink&apikey=DoH8MCdm`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'tpurple ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`http://zekais-api.herokuapp.com/text2png?text=${match[1]}&color=purple&apikey=DoH8MCdm`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'torange ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`http://zekais-api.herokuapp.com/text2png?text=${match[1]}&color=original&apikey=DoH8MCdm`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'tbrown ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`http://zekais-api.herokuapp.com/text2png?text=${match[1]}&color=brown&apikey=DoH8MCdm`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'terin ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`http://zekais-api.herokuapp.com/text2png?text=${match[1]}&color=erin&apikey=DoH8MCdm`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));