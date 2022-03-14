/*
Copyright (C) 2021 KAVIYAAH   ,  Diana whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
kaviyaah - kavishka sandaruwan (v 1.0.0 avalable)
*/

const diana = require('../events');
const { WAConnection, MessageOptions, MessageType, Mimetype, Presence } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const thumb = fs.readFileSync('./uploads/thumb/thumbdia.jpg')
if (Config.WORKTYPE == 'private') {

    diana.addqueendiacmd({ queeendiacmd: 'moretxt', fromMe: true, desc: 'more txtit commands' }, (async(message, match) => {

        await message.sendMessage('\n\n\n📱command : .break\n💎desc : change your text to wall breaking image.\n\n📱command : .phub\n💎desc : change your text into pornhub logo.\n🏷️example : .phuh BOT/X.\n\n📱command : .blood\n💎desc : change your text frozen blood on a glass\n\n📱command : .1917\n💎desc : change your text to a 1917 model image\n\n📱command : .maskman\n💎desc : change your text to mask man bg\n🏷️example : .avengers its/BOT X.\n\n📱command : .boxed\n💎desc : change your text to 3d boxed design\n\n📱command : .window\n💎desc : write your text on a foggy window \n\n📱command : .skywal\n💎desc : random sky wallpaper with given text\n\n📱command : .holo\n💎desc : change your text to holo design\n\n📱command : .drop\n💎desc : change your text into rain water drop.n\n📱command : .flame\n💎desc : text with fire effect.\n\n📱command : .vtext\n💎desc : text to video.\n\n📱command : .ptext\n💎desc : text to video.\n\n📱command : .colortext\n💎desc : text to colorfull video\n\n📱command : .cloud\n💎desc : text on cloud\n\n📱command : .2ninja\n💎desc : random ninja logo with given name.');

    }));

    diana.addqueendiacmd({ queeendiacmd: 'break ?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'phub ?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
        }

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/ph?text=${topText}&text2=${bottomText}&APIKEY=65654c74a7169de8`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'blood ?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=65654c74a7169de8`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: '1917 ?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=c809c9b2f07400c2`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'maskman?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/anonymhacker?apikey=990580a2e31add15990665b0&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));


    diana.addqueendiacmd({ queeendiacmd: 'boxed ?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=Ekqqy3DmxtTHPAuA7inIHpxjFIC&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'ffire ?(.*)', fromMe: true, noinmenu: false, desc: 'add your text to random freefire logo' }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=Ekqqy3DmxtTHPAuA7inIHpxjFIC&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'window ?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`http://lolhuman.herokuapp.com/api/ephoto1/wetglass?apikey=5a6dac45b721fc4298b40b81&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'skywal ?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD);

        var webimage = await axios.get(`http://docs-jojo.herokuapp.com/api/galaxywp?text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'holo ?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=c809c9b2f07400c2`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: '2ninja ?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'drop ?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));
    diana.addqueendiacmd({ queeendiacmd: 'cloud ?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/cloudtext?text=${match[1]}&APIKEY=90308f042eac38b7`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'emo ?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text);

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        var uri = encodeURI(match[1]);

        var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&emoji=' + uri, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'flame ?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/photooxy/flaming?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'vtext ?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'ptext ?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'colortext ?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, thumbnail: thumb, caption: Config.AFN })

    }));
} else if (Config.WORKTYPE == 'public') {

    diana.addqueendiacmd({ queeendiacmd: 'moretxt', fromMe: false, desc: 'more txtit commands' }, (async(message, match) => {

        await message.sendMessage('\n\n\n📱command : .break\n💎desc : change your text to wall breaking image.\n\n📱command : .phub\n💎desc : change your text into pornhub logo.\n🏷️example : .phuh BOT/X.\n\n📱command : .blood\n💎desc : change your text frozen blood on a glass\n\n📱command : .1917\n💎desc : change your text to a 1917 model image\n\n📱command : .avengers\n💎desc : change your text to avangers logo\n🏷️example : .avengers its/BOT X.\n\n📱command : .boxed\n💎desc : change your text to 3d boxed design\n\n📱command : .window\n💎desc : write your text on a foggy window \n\n📱command : .skywal\n💎desc : random sky wallpaper with given text\n\n📱command : .holo\n💎desc : change your text to holo design\n\n📱command : .drop\n💎desc : change your text into rain water drop.n\n📱command : .flame\n💎desc : text with fire effect.\n\n📱command : .vtext\n💎desc : text to video.\n\n📱command : .ptext\n💎desc : text to video.\n\n📱command : .colortext\n💎desc : text to colorfull video\n\n📱command : .cloud\n💎desc : text on cloud\n\n📱command : .2ninja\n💎desc : random ninja logo with given name.');

    }));

    diana.addqueendiacmd({ queeendiacmd: 'break ?(.*)', fromMe: false, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'phub ?(.*)', fromMe: false, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
        }

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/ph?text=${topText}&text2=${bottomText}&APIKEY=65654c74a7169de8`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'blood ?(.*)', fromMe: false, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=65654c74a7169de8`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: '1917 ?(.*)', fromMe: false, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=c809c9b2f07400c2`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'maskman?(.*)', fromMe: true, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/anonymhacker?apikey=990580a2e31add15990665b0&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));


    diana.addqueendiacmd({ queeendiacmd: 'boxed ?(.*)', fromMe: false, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=Ekqqy3DmxtTHPAuA7inIHpxjFIC&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'ffire ?(.*)', fromMe: false, noinmenu: false, desc: 'add your text to random freefire logo' }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=Ekqqy3DmxtTHPAuA7inIHpxjFIC&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'window ?(.*)', fromMe: false, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`http://lolhuman.herokuapp.com/api/ephoto1/wetglass?apikey=5a6dac45b721fc4298b40b81&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'skywal ?(.*)', fromMe: false, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD);

        var webimage = await axios.get(`http://docs-jojo.herokuapp.com/api/galaxywp?text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'holo ?(.*)', fromMe: false, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=c809c9b2f07400c2`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: '2ninja ?(.*)', fromMe: false, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'drop ?(.*)', fromMe: false, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));
    diana.addqueendiacmd({ queeendiacmd: 'cloud ?(.*)', fromMe: false, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/cloudtext?text=${match[1]}&APIKEY=90308f042eac38b7`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'emo ?(.*)', fromMe: false, desc: 'emogi to png' }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text);

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        var uri = encodeURI(match[1]);

        var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&emoji=' + uri, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'flame ?(.*)', fromMe: false, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/photooxy/flaming?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'vtext ?(.*)', fromMe: false, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'ptext ?(.*)', fromMe: false, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, thumbnail: thumb, caption: Config.AFN })

    }));

    diana.addqueendiacmd({ queeendiacmd: 'colortext ?(.*)', fromMe: false, noinmenu: true }, (async(message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, thumbnail: thumb, caption: Config.AFN })

    }));
}