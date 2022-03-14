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
const NEED = "*🍭YOU MUST TYPE SOME WORDS*"
const desc = "Text to image Pack";
let tn = Config.WORKTYPE == 'public' ? false : true
const thumb = fs.readFileSync('./uploads/thumb/thumbdia.jpg')
diana.addqueendiacmd({ queeendiacmd: 'zombie3d ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/zombie3d?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));

diana.addqueendiacmd({ queeendiacmd: 'metal ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/metal?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));
diana.addqueendiacmd({ queeendiacmd: 'cloud ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/cloud?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));

diana.addqueendiacmd({ queeendiacmd: 'graffiticolor ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/graffiticolor?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));

diana.addqueendiacmd({ queeendiacmd: 'nneon ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/neon?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));

diana.addqueendiacmd({ queeendiacmd: 'snake ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/snake?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));

diana.addqueendiacmd({ queeendiacmd: 'lightgalaxy ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/lightgalaxy?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));
diana.addqueendiacmd({ queeendiacmd: 'graffiti5 ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/graffiti5?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));

diana.addqueendiacmd({ queeendiacmd: 'hotmetalic ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/hotmetalic?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));

diana.addqueendiacmd({ queeendiacmd: 'thunder ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/thunder?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));

diana.addqueendiacmd({ queeendiacmd: 'graffiti3 ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/graffiti3?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));

diana.addqueendiacmd({ queeendiacmd: 'neon2 ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/neon2?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));
diana.addqueendiacmd({ queeendiacmd: 'brokenglass ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/brokenglass?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));

diana.addqueendiacmd({ queeendiacmd: 'neondevil ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/neondevil?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));

diana.addqueendiacmd({ queeendiacmd: 'juventus ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/juventus?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));
diana.addqueendiacmd({ queeendiacmd: 'realisticvintage ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/realisticvintage?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));
diana.addqueendiacmd({ queeendiacmd: 'multicolor3d ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/multicolor3d?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));
diana.addqueendiacmd({ queeendiacmd: '3dwood ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/3dwood?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));
diana.addqueendiacmd({ queeendiacmd: 'paulscholes ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/paulscholes?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));
diana.addqueendiacmd({ queeendiacmd: 'artpapercut ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/artpapercut?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));
diana.addqueendiacmd({ queeendiacmd: '2galaxy ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/galaxy?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));
diana.addqueendiacmd({ queeendiacmd: 'galaxybat ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/galaxybat?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));
diana.addqueendiacmd({ queeendiacmd: 'cake ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/cake?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));
diana.addqueendiacmd({ queeendiacmd: 'writingchalk ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/writingchalk?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));
diana.addqueendiacmd({ queeendiacmd: 'birthdaycake ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/birthdaycake?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));
diana.addqueendiacmd({ queeendiacmd: 'barlog ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/blackpinkneon?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));
diana.addqueendiacmd({ queeendiacmd: 'bearlogo ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/bearlogo?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));
diana.addqueendiacmd({ queeendiacmd: 'fi ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));
diana.addqueendiacmd({ queeendiacmd: 'if ?(.*)', fromMe: tn, noinmenu: true }, (async(message, match) => {
    if (match[1] === '') return await message.sendMessage(NEED);
    var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })
}));