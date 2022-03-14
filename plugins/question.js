/*
Copyright (C) 2021 KAVIYAAH   ,  Diana whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
kaviyaah - kavishka sandaruwan (v 1.0.0 avalable)
*/


const diana = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');


// පින්වන්තියේ මාගේ මාගේ ප්‍රේම කතාවේ...🌼
//ඇයිදෝ...මට පෑවෙ මල්මදහාසේ...🌟

const brainly = "Finds the answer."
const usage = ".brainly <Question>"

const butuh = "```Enter the Question!```"

if (Config.WORKTYPE == 'public') {
    diana.addqueendiacmd({ queeendiacmd: 'ask ?(.*)', fromMe: false, noinmenu: true }, async(message, match) => {

        const Soal = match[1]

        if (match[1] === '') return await message.client.sendMessage(message.jid, butuh, MessageType.text);

        await axios
            .get(`https://api.xteam.xyz/brainly?APIKEY=10c4105200edc0f0&soal=${Soal}`)
            .then(async(response) => {
                const {
                    soal,
                    jawaban,
                } = response.data

                const msg = `*Soal:* ${soal}
*Jawaban Brainly:* ${jawaban.replace(/1Question/g, '*(1) Question*').replace(/2Question/g, '*(2) Question*').replace(/3Question/g, '*(3) Question*').replace(/Answer/g, '*Answer*').replace(/Brainly Found/g, '')}`
                await message.client.sendMessage(message.jid, msg, MessageType.text)
            })
    }, )
}

diana.addqueendiacmd({ queeendiacmd: 'ask ?(.*)', fromMe: true, desc: "aks questions from bot" }, async(message, match) => {

    const Soal = match[1]

    if (match[1] === '') return await message.client.sendMessage(message.jid, butuh, MessageType.text);

    await axios
        .get(`https://api.xteam.xyz/brainly?APIKEY=10c4105200edc0f0&soal=${Soal}`)
        .then(async(response) => {
            const {
                soal,
                jawaban,
            } = response.data

            const msg = `*Soal:* ${soal}
*Jawaban Brainly:* ${jawaban.replace(/1Question/g, '*(1) Question*').replace(/2Question/g, '*(2) Question*').replace(/3Question/g, '*(3) Question*').replace(/Answer/g, '*Answer*').replace(/Brainly Found/g, '')}`
            await message.client.sendMessage(message.jid, msg, MessageType.text)
        })
}, )