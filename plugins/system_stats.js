

const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'alive', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'š¤ I AM FINE š'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: 'š„ŗ I  AM SAD š„'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/35883180004518cb15fe9.jpg',
    contentText: "ā„ļøš« HOW ARE YOU šā„ļø",
    footerText: 'BY āš”ļø Dragon x š”ļøā  ā·',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "š±š° Hay All I'm Alive now š±š°\n\nš§æ My name : āš”ļø Dragon x š”ļøā \n\n\n ā. Developer:Janith Sadanuwan \n ā. Github - https://tinyurl.com/ycq7ra4x \n ā. Youtube - https://tinyurl.com/yalqofqs \n ā. Owner -https://tinyurl.com/y7evah34  \n ā. Our Web - https://tinyurl.com/y7ul7kt4 \n\n ā. All Cammands -Type .menu\n\n\nThank You For Using āš”ļø *Dragon x* š”ļøā "})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'š¤ I AM FINE š'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: 'š„ŗ I  AM SAD š„'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/35883180004518cb15fe9.jpg',
    contentText: "ā„ļøš« HOW ARE YOU šā„ļø",
    footerText: 'BY āš”ļø Dragon x š”ļøā  ā·',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*āš”ļø Dragon x š”ļøā *' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'version', fromMe: true,  deleteCommand: false,  desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*āš”ļø Dragon x š”ļøā *\n\n` + 
                '```Installed version :```\n' +
                ' V 1.0.0 Public'+
                `\n\nš Check github for bot: https://github.com/Janithsadanuwan/Dragonx-Whatsapp-Bot`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'š I AM FINE š'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: 'š„ŗ I  AM SAD š„'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "ā„ļøš« HOW ARE YOU šā„ļø",
    footerText: 'BY āš”ļø Dragon x š”ļøā  ā·',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "š±š° Hay All I'm Alive now š±š°\n\nš§æ My name : āš”ļø Dragon x š”ļøā \n\n\n ā. Developer:Janith Sadanuwan \n ā. Github - https://tinyurl.com/ycq7ra4x \n ā. Youtube - https://tinyurl.com/yalqofqs \n ā. Owner -https://tinyurl.com/y7evah34  \n ā. Our Web - https://tinyurl.com/y7ul7kt4 \n\n ā. All Cammands -Type .menu\n\n\nThank You For Using āš”ļø *Dragon x* š”ļøā "})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'š¤ I AM FINE š'}, type: 1},//jakakkak
  {buttonId: 'MEN', buttonText: {displayText: 'š„ŗ I  AM SAD š„'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/35883180004518cb15fe9.jpg',
    contentText: "ā„ļøš« HOW ARE YOU šā„ļø",
    footerText: 'BY āš”ļø Dragon x š”ļøā  ā·',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*āš”ļø Dragon x š”ļøā *' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'version', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*āš”ļø Dragon x š”ļøā *\n\n` + 
                '```Installed version :```\n' +
                ' V 1.0.0 - Public'+
                `\n\nš Check github for bot:  https://github.com/Janithsadanuwan/Dragonx-Whatsapp-Bot`
           , MessageType.text);
            
        }));
}