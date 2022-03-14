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
let Language = require('../language');
let Lang = Language.getString('amazone');
const ll = "*Need some Word*"
const thumb = fs.readFileSync('./uploads/thumb/thumbdia.jpg')
const Ln = "*▷QUEEN DIANA මීම් ලැයිස්තුව ඔබට අවශ්‍ය ලෙස මීම්ස් සකසා ගැනීමට◁* "
const code = "*╔═════◉QUEEN DIANA◉═════╗*\n           QUEEN DIANA\n*❖═මීම් ලැයිස්තුව  Meme Pack═❖*\n\n*💠.yasai       ❴your text❵*\n*💠.uddika    ❴your text❵*\n*💠.aah          ❴your text❵*\n*💠.sir            ❴your text❵*\n*💠.my3         ❴your text❵*\n*💠.fuck         ❴your text❵*\n*💠.hii             ❴your text❵*\n*💠.asai          ❴your text❵*\n*💠.hapoi       ❴your text❵*\n*💠.anura       ❴your text❵*\n*💠.gemba       ❴your text❵*\n*💠.wow       ❴your text❵*\n*💠.hapo       ❴your text❵*\n*💠.babah       ❴your text❵*\n*💠.mcn       ❴your text❵*\n*💠.nah       ❴your text❵*\n*╚═══❖══▣══▣══❖═══╝*\n\n*"
let td = Config.WORKTYPE == 'public' ? false : true

diana.addqueendiacmd({ queeendiacmd: 'mmpack', fromMe: td, desc: 'Create meme', }, (async(message, match) => {

    await message.client.sendMessage(

        message.jid, code, MessageType.text);

}));

diana.addqueendiacmd({ queeendiacmd: 'my3 ?(.*)', fromMe: td, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/077e4178b917d2736dd5c.jpg/revision/latest/top-crop/width/1152/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'fuck ?(.*)', fromMe: td, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/9d4db91478cc90cbe814c.jpg/revision/latest/top-crop/width/720/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'hii ?(.*)', fromMe: td, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=hii&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f5277ae7383f852196e8c.jpg/revision/latest/top-crop/width/1152/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'sir ?(.*)', fromMe: td, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/9d4db91478cc90cbe814c.jpg/revision/latest/top-crop/width/1128/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'yasai ?(.*)', fromMe: td, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/1ec40b3da163e0a55da66.jpg/revision/latest/top-crop/width/1203/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'hapoi ?(.*)', fromMe: td, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/21b92760827dc33301a79.jpg/revision/latest/top-crop/width/916/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'uddika ?(.*)', fromMe: td, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=uddikaputo&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/80c57bf5ac6c0fd0a1ca9.jpg/revision/latest/top-crop/width/747/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'aah ?(.*)', fromMe: td, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c34d400e0a937ee12a3f7.jpg/revision/latest/top-crop/width/1035/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'asai ?(.*)', fromMe: td, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0bab6f4db17b4abca2677.jpg/revision/latest/top-crop/width/720/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'wow ?(.*)', fromMe: td, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/d28ea20562d45702cdbd7.jpg/revision/latest/top-crop/width/720/height/472?cb=20190205115000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'hapo ?(.*)', fromMe: td, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/1d28fcc77a853472f8b06.jpg/revision/latest/top-crop/width/1114/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'anura ?(.*)', fromMe: td, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/cc8233b5f0b895c0ced8e.jpg/revision/latest/top-crop/width/720/height/726?cb=20190205115000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'macn ?(.*)', fromMe: td, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/087cff81209de085b9a6b.jpg/revision/latest/top-crop/width/720/height/531?cb=20190205115000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'babah ?(.*)', fromMe: td, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/a38d9dc5184dc42f77287.jpg/revision/latest/top-crop/width/720/height/928?cb=20190205115000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'gemba ?(.*)', fromMe: td, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/5526d3223430db227a679.jpg/revision/latest/top-crop/width/512/height/512?cb=20190205115000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'nah ?(.*)', fromMe: td, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/aeb60ecbec9d1658eb9a1.jpg/revision/latest/top-crop/width/720/height/696?cb=20190205115000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));

diana.addqueendiacmd({ queeendiacmd: 'kaluhutta ?(.*)', fromMe: td, noinmenu: true }, (async(message, match) => {

    if (match[1] === '') return await message.sendMessage(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https:https://telegra.ph/file/48c4688caae9b9a157263.jpg/revision/latest/top-crop/width/300/height/235?cb=20190205115000`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.CAPTIONS })

}));