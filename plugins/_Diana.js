/*
Copyright (C) 2021 KAVIYAAH   ,  Diana whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
kaviyaah - kavishka sandaruwan (v 1.0.0 avalable)
*/

const diana = require('../events');
const Config = require('../config');
const { MessageType } = require('@adiwajshing/baileys');
const fs = require("fs")

const Language = require('../language');
const Lang = Language.getString('_QUEEN_DIANA');
const dianav = fs.readFileSync('./uploads/voicenew/dianamenu.mp3')
const diacode = "    👸𝚀𝚄𝙴𝙴𝙽 𝙳𝙸𝙰𝙽𝙰👸 "
const qdiacode = ("    ╔═════🌐═════╗ \n" + Config.BOTPLK + "\n  ᑌ𝘚ᗴᖇ ᗷ𝘖丅 \n╚═══❖ 🛑🛑  ❖═══╝ ")
let WORKN = Config.WORKTYPE == 'public' ? false : true
let WORKM = Config.WORKTYPE == 'public' ? true : true

diana.addqueendiacmd({ queeendiacmd: Config.PANEL_COMMAND + '(.*)', fromMe: WORKN, noinmenu: true }, (async(message, match) => {

    var CMD_HELP = '';
    if (match[1] === '') {
        diana.commands.map(
            async(command) => {
                if (command.noinmenu || command.queeendiacmd === undefined) return;
                try {
                    var match = command.queeendiacmd.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                    var mmatch = command.queeendiacmd.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                } catch {
                    var match = [command.queeendiacmd];
                }

                var HANDLER = '';

                if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                    HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                } else {
                    HANDLER = '.';
                }
                if (command.desc == '' && !command.usage == '' && command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*❄ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                }
                if (!command.desc == '' && command.usage == '' && command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                }
                if (command.desc == '' && command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                }
                if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*❄ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                if (command.desc == '' && command.usage == '' && command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n\n'
                }
                if (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
            }
        );
        await message.client.sendMessage(message.jid, dianav, MessageType.audio, { mimetype: 'audio/mp4', ptt: true }, { quoted: message.data })
        await message.client.sendMessage(
            message.jid, qdiacode + '\n\n' + CMD_HELP, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": diacode, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./uploads/image/logo.jpg') } } } });
    } else {
        var CMD_HELP = '';
        diana.commands.map(
            async(command) => {
                if (command.noinmenu || command.queeendiacmd === undefined) return;
                try {
                    var cmatch = command.queeendiacmd.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                    var cmmatch = command.queeendiacmd.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                } catch {
                    var cmatch = [command.queeendiacmd];
                }
                if (cmmatch.endsWith(' ')) {
                    var cmmatch = command.queeendiacmd.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                }
                if (cmmatch == match[1]) {
                    var HANDLER = '';

                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*❄ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*❄ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                }
            }
        );
        if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
        await message.client.sendMessage(
            message.jid, qdiacode + '\n\n' + CMD_HELP, MessageType.text, { quoted: message.data }
        );
    }
}));


diana.addqueendiacmd({ queeendiacmd: 'menu ?(.*)', fromMe: WORKN, noinmenu: true }, (async(message, match) => {

    var CMD_HELP = '';
    if (match[1] === '') {
        diana.commands.map(
            async(command) => {
                if (command.noinmenu || command.queeendiacmd === undefined) return;
                try {
                    var match = command.queeendiacmd.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                    var mmatch = command.queeendiacmd.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                } catch {
                    var match = [command.queeendiacmd];
                }

                var HANDLER = '';

                if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                    HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                } else {
                    HANDLER = '.';
                }
                if (command.desc == '' && !command.usage == '' && command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*❄ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                }
                if (!command.desc == '' && command.usage == '' && command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                }
                if (command.desc == '' && command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                }
                if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*❄ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                if (command.desc == '' && command.usage == '' && command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n\n'
                }
                if (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
            }
        );
        await message.client.sendMessage(message.jid, dianav, MessageType.audio, { mimetype: 'audio/mp4', ptt: true }, { quoted: message.data })
        await message.client.sendMessage(
            message.jid, qdiacode + '\n\n' + CMD_HELP, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": diacode, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./uploads/image/logo.jpg') } } } });
    } else {
        var CMD_HELP = '';
        diana.commands.map(
            async(command) => {
                if (command.noinmenu || command.queeendiacmd === undefined) return;
                try {
                    var cmatch = command.queeendiacmd.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                    var cmmatch = command.queeendiacmd.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                } catch {
                    var cmatch = [command.queeendiacmd];
                }
                if (cmmatch.endsWith(' ')) {
                    var cmmatch = command.queeendiacmd.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                }
                if (cmmatch == match[1]) {
                    var HANDLER = '';

                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*❄ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*❄ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                }
            }
        );
        if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
        await message.client.sendMessage(
            message.jid, qdiacode + '\n\n' + CMD_HELP, MessageType.text, { quoted: message.data }
        );
    }
}));
diana.addqueendiacmd({ queeendiacmd: Config.PANEL_COMMAND + '(.*)', fromMe: WORKM, noinmenu: true }, (async(message, match) => {

    var CMD_HELP = '';
    if (match[1] === '') {
        diana.commands.map(
            async(command) => {
                if (command.noinmenu || command.queeendiacmd === undefined) return;
                try {
                    var match = command.queeendiacmd.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                    var mmatch = command.queeendiacmd.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                } catch {
                    var match = [command.queeendiacmd];
                }

                var HANDLER = '';

                if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                    HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                } else {
                    HANDLER = '.';
                }
                if (command.desc == '' && !command.usage == '' && command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*❄ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                }
                if (!command.desc == '' && command.usage == '' && command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                }
                if (command.desc == '' && command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                }
                if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*❄ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                if (command.desc == '' && command.usage == '' && command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n\n'
                }
                if (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
            }
        );
        await message.client.sendMessage(message.jid, dianav, MessageType.audio, { mimetype: 'audio/mp4', ptt: true }, { quoted: message.data })
        await message.client.sendMessage(
            message.jid, qdiacode + '\n\n' + CMD_HELP, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": diacode, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./uploads/image/logo.jpg') } } } });
    } else {
        var CMD_HELP = '';
        diana.commands.map(
            async(command) => {
                if (command.noinmenu || command.queeendiacmd === undefined) return;
                try {
                    var cmatch = command.queeendiacmd.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                    var cmmatch = command.queeendiacmd.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                } catch {
                    var cmatch = [command.queeendiacmd];
                }
                if (cmmatch.endsWith(' ')) {
                    var cmmatch = command.queeendiacmd.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                }
                if (cmmatch == match[1]) {
                    var HANDLER = '';

                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*❄ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*❄ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                }
            }
        );
        if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
        await message.client.sendMessage(
            message.jid, qdiacode + '\n\n' + CMD_HELP, MessageType.text, { quoted: message.data }
        );
    }
}));


diana.addqueendiacmd({ queeendiacmd: 'menu ?(.*)', fromMe: WORKM, noinmenu: true }, (async(message, match) => {

    var CMD_HELP = '';
    if (match[1] === '') {
        diana.commands.map(
            async(command) => {
                if (command.noinmenu || command.queeendiacmd === undefined) return;
                try {
                    var match = command.queeendiacmd.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                    var mmatch = command.queeendiacmd.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                } catch {
                    var match = [command.queeendiacmd];
                }

                var HANDLER = '';

                if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                    HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                } else {
                    HANDLER = '.';
                }
                if (command.desc == '' && !command.usage == '' && command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*❄ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                }
                if (!command.desc == '' && command.usage == '' && command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                }
                if (command.desc == '' && command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                }
                if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*❄ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                if (command.desc == '' && command.usage == '' && command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n\n'
                }
                if (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
            }
        );
        await message.client.sendMessage(message.jid, dianav, MessageType.audio, { mimetype: 'audio/mp4', ptt: true }, { quoted: message.data })
        await message.client.sendMessage(
            message.jid, qdiacode + '\n\n' + CMD_HELP, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": diacode, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./uploads/image/logo.jpg') } } } });
    } else {
        var CMD_HELP = '';
        diana.commands.map(
            async(command) => {
                if (command.noinmenu || command.queeendiacmd === undefined) return;
                try {
                    var cmatch = command.queeendiacmd.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                    var cmmatch = command.queeendiacmd.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                } catch {
                    var cmatch = [command.queeendiacmd];
                }
                if (cmmatch.endsWith(' ')) {
                    var cmmatch = command.queeendiacmd.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                }
                if (cmmatch == match[1]) {
                    var HANDLER = '';

                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*❄ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*❄ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*👸 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.queeendiacmd) + '```\n' + '*👩‍🦰 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                }
            }
        );
        if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
        await message.client.sendMessage(
            message.jid, qdiacode + '\n\n' + CMD_HELP, MessageType.text, { quoted: message.data }
        );
    }
}));