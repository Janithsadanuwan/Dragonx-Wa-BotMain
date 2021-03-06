const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'grp', fromMe: true,  deleteCommand: true }, (async (message, match) => {
            
            var image = await axios.get ('', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      šā GROUP LIST āš\n\nš²ļø  GROUP  š²ļø \n\n š± ' + Config.GROUPN1 + ' š±\n\n\n       āš”ļø DRAGONX š”ļøā '})

    }));
  
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'grp', fromMe: true,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      šā GROUP LIST āš\n\nš²ļø  GROUP  š²ļø \n\n š± ' + Config.GROUPN1 + ' š±\n\n\n       āš”ļø DRAGONX š”ļøā '})

    }));
  
  Trex.addrex({pattern: 'grp', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      šā GROUP LIST āš\n\nš²ļø  GROUP  š²ļø \n\n š± ' + Config.GROUPN1 + ' š±\n\n\n       āš”ļø DRAGONX š”ļøā    ' ,quoted: message.data})

    }));
 
}
