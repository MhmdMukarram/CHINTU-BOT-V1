/* Copyright (C) 2020 Yusuf Usta.
PINKY V2
*/

// Komutları burada tutacağız.
var config = require('./config');
var Commands = [];

function addqueendiacmd(info, func) {
    // Basit bir fonksiyon, komut eklemek için.
    var types = ['photo', 'image', 'text', 'message'];

    var infos = {
        fromMe: info['fromMe'] === undefined ? true : info['fromMe'], // Or Sudo
        grponly: info['grponly'] === undefined ? false : info['grponly'],
        onlyPinned: info['onlyPinned'] === undefined ? false : info['onlyPinned'],
        inboxonly: info['inboxonly'] === undefined ? false : info['inboxonly'],
        deldiacmd: info['deldiacmd'] === undefined ? true : info['deldiacmd'],
        desc: info['desc'] === undefined ? '' : info['desc'],
        usage: info['usage'] === undefined ? '' : info['usage'],
        noinmenu: info['noinmenu'] === undefined ? false : info['noinmenu'],
        warn: info['warn'] === undefined ? '' : info['warn'],
        function: func
    };

    if (info['on'] === undefined && info['queeendiacmd'] === undefined) {
        infos.on = 'message';
        infos.fromMe = false;
    } else if (info['on'] !== undefined && types.includes(info['on'])) {
        infos.on = info['on'];

        if (info['queeendiacmd'] !== undefined) {
            infos.queeendiacmd = new RegExp((info['handler'] === undefined || info['handler'] === true ? config.HANDLERS : '') + info.queeendiacmd, (info['flags'] !== undefined ? info['flags'] : ''));
        }
    } else {
        infos.queeendiacmd = new RegExp((info['handler'] === undefined || info['handler'] === true ? config.HANDLERS : '') + info.queeendiacmd, (info['flags'] !== undefined ? info['flags'] : ''));
    }

    Commands.push(infos);
    return infos;
}

module.exports = {
    addqueendiacmd: addqueendiacmd,
    commands: Commands
}