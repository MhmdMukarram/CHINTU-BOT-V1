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
diana.addqueendiacmd({ queeendiacmd: 'glitch ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
    }

    var webimage = await axios.get(`https://api.zeks.xyz/api/gtext?apikey=Fjz8Dci6f9pPm8UM6dTCpEZL9nV&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'freefire ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikeyFjz8Dci6f9pPm8UM6dTCpEZL9nV=&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'cfire ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=Fjz8Dci6f9pPm8UM6dTCpEZL9nV&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'light ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=Fjz8Dci6f9pPm8UM6dTCpEZL9nV&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'cslogo ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=Fjz8Dci6f9pPm8UM6dTCpEZL9nV&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 's3d ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'nlogo ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://dynamic.brandcrowd.com/asset/logo/7f0254b2-49ae-4819-9107-47728665a65f/logo?v=4&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'blackpink ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'neonlight ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'pornhub ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
    }

    var webimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=Fjz8Dci6f9pPm8UM6dTCpEZL9nV&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: '3dtext ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'nfire ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'ninjalogo ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'nglow ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=Fjz8Dci6f9pPm8UM6dTCpEZL9nV&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'nleaves ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=Fjz8Dci6f9pPm8UM6dTCpEZL9nV&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'nsky ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=Fjz8Dci6f9pPm8UM6dTCpEZL9nV&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'buttonyt ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=Fjz8Dci6f9pPm8UM6dTCpEZL9nV&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'bcwall ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=Fjz8Dci6f9pPm8UM6dTCpEZL9nV&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'vtext ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'ptext ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'colortext ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, thumbnail: thumb, caption: Config.AFN })

}));

diana.addqueendiacmd({ queeendiacmd: 'emoji ?(.*)', fromMe: am, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var uri = encodeURI(match[1])

    var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=Fjz8Dci6f9pPm8UM6dTCpEZL9nV&emoji=' + uri, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

}));