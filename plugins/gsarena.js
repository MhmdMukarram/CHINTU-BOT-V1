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

    diana.addqueendiacmd({ queeendiacmd: 'device ?(.*)', fromMe: true, desc: Lang.DEVICE, noinmenu: true }, async(message, match) => {
        const url = `https://docs-jojo.herokuapp.com/api/gsm_arena?q=${match[1]}`;
        try {
            const response = await got(url);

            const json = JSON.parse(response.body);

            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 'NAME      : *' + json.title + '* \n' + 'DATE      :' + json.released + 'WEIGHT    :' + json.weight + '\n' + 'VERSION   :' + json.os_version + '\n' + 'ROM       :' + json.storage + '\n' + 'DISPLAY   :' + json.display_size + '\n' + 'RAM       :' + json.ram + '\n' + 'BATTERY   :' + json.battery + '\n' + 'MP        :' + json.camera_pixel + '\n' + 'VIDEO MP  :' + json.video_pixel, MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
        }
    });
} else if (Config.WORKTYPE == 'public') {

    diana.addqueendiacmd({ queeendiacmd: 'device ?(.*)', fromMe: false, desc: Lang.DEVICE, noinmenu: true }, async(message, match) => {
        const url = `https://docs-jojo.herokuapp.com/api/gsm_arena?q=${match[1]}`;
        try {
            const response = await got(url);

            const json = JSON.parse(response.body);

            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '``` NAME      : *' + json.title + '* \n' + 'DATE      :' + json.released + '\n' + 'WEIGHT    :' + json.weight + 'VERSION   :' + json.os_version + '\n' + 'ROM       :' + json.storage + '\n' + 'DISPLAY   :' + json.display_size + '\n' + 'RAM       :' + json.ram + '\n' + 'BATTERY   :' + json.battery + '\n' + 'MP        :' + json.camera_pixel + '\n' + 'VIDEO MP  :' + json.video_pixel + '```', MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
        }
    });
}