const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `βΉπ₯ βπ‘οΈ DRAGONX π‘οΈβ  *πππΈ π»π°π½πΊπ° π±π΄ππ π.π° π±πΎπ* π₯βΉ 

π *Owner & Founder - Janith sadanuwan*

π *Language - NODE JS*

   π±SPECIAL THANKSπ±

πHIRUSHA RUKSHAN
β’BOT BASE OWNER


   π°*κ°α΄Κ 24/7 Κα΄Κα΄ α΄κ±Ι’ α΄α΄*π°`})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `βΉπ₯ βπ‘οΈ DRAGONX π‘οΈβ  *πππΈ π»π°π½πΊπ° π±π΄ππ π.π° π±πΎπ* π₯βΉ 
π *Owner & Founder - Janith sadanuwan*

π *Language - NODE JS*
        
     π±SPECIAL THANKSπ±
        
 πHIRUSHA RUKSHAN
β’BOT BASE OWNER
        
        
    π°*κ°α΄Κ 24/7 Κα΄Κα΄ α΄κ±Ι’ α΄α΄*π°`})
        


    }));
  
  Trex.addrex({pattern: 'bot', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `βΉπ₯ βπ‘οΈ DRAGONX π‘οΈβ  *πππΈ π»π°π½πΊπ° π±π΄ππ π.π° π±πΎπ* π₯βΉ 

π    *Owner & Founder - Janith sadanuwan*

π    *Language - NODE JS*

    π±SPECIAL THANKSπ±

π HIRUSHA RUKSHAN
β’ BOT BASE OWNER


    π°*κ°α΄Κ 24/7 Κα΄Κα΄ α΄κ±Ι’ α΄α΄*π° `  ,quoted: message.data})

    }));
}
