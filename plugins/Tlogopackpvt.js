/*JG
*/


const Trex = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command ð"

if (Config.WORKTYPE == 'private') {
   
   
   Trex.addrex({ pattern: 'tlpack', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var ttinullimage = await axios.get(`https://telegra.ph/file/35883180004518cb15fe9.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `âââââââââââââââââââââââ
ââ ð*Dragon x LOGO PACK 1*ð â
â ââââââââââââââââââââââ
â
â   `+Config.CAPTION+`
â
â ââ¢ ðCmd: *.wel*
â âââ¢ ð Dec: *Send welcome logo*
â ââ¢ ð Ex: *.welDragon X/Janith*
â
â ââ¢ ð Cmd: *.bye*
â âââ¢ ð Dec: *Send bye logo*
â ââ¢ ðEx: *.byeDragon X/Janith*
â
â ââ¢ ðCmd: *.marvel*
â âââ¢ ð Dec: *Send marve logo*
â ââ¢ ð Ex: *.marvelDragon X/Janith*
â
â ââ¢ ðCmd: *.2marvel*
â âââ¢ ð Dec: *Send marvel logo*
â ââ¢ ðEx: *.2marvelDragon X/Janith*
â
â ââ¢ ðCmd: *.wolf*
â âââ¢ ð Dec: *Send wolf logo*
â ââ¢ ðEx: *.wolfDragon X/Janith*
â
â ââ¢ ðCmd: *.lava*
â âââ¢ ð Dec: *Send lava logo*
â ââ¢ ðEx: *.lavaDragon X*
â
â ââ¢ ðCmd: *.xmas*
â âââ¢ ð Dec: *Send xmas logo*
â ââ¢ ðEx: *.xmasDragon X*
â
â ââ¢ ðCmd: *.round*
â âââ¢ð Dec: *Send round logo*
â ââ¢ ð Ex: *.round { image url }*
â
â ââ¢ ðCmd: .*.quot*
â âââ¢ ð  Dec: *Send quote logo*
â ââ¢ ð Ex: *.quotDragon X*
â
â ââ¢ ðCmd: *.harta*
â âââ¢ ð Dec: *Send harta logo*
â ââ¢ ðEx: *.hartaDragon X
â
â ââ¢ ðCmd: *.1917*
â âââ¢ ð Dec: *Send 1917 logo*
â ââ¢ ðEx: *.1917Dragon X
â
â ââ¢ ðCmd: *.minion*
â âââ¢ ð Dec: *Send minion logo*
â ââ¢ ðEx: *.minionDragon X
â
â ââ¢ ðCmd: *.holo*
â âââ¢ ð  Dec: *Send holo logo*
â ââ¢ ð Ex: *.holoDragon X*
â
â ââ¢ ðCmd: *.metalp*
â âââ¢ ð  Dec: *Send metalp logo*
â ââ¢ ð Ex: *.metalpDragon X*
â
â ââ¢ ðCmd: *.avengers*
â âââ¢ ð  Dec: *Send avengers logo*
â ââ¢ ð Ex: *.avengersDragon X*
â
â ââ¢ ðCmd: *.halloween*
â âââ¢ ð  Dec: *Send halloween logo*
â ââ¢ ð Ex: *.halloweenDragon X
â
â ââ¢ ðCmd: *.horror*
â âââ¢ ð  Dec: *Send horror logo*
â ââ¢ ð Ex: *.horrorDragon X*
â
â ââ¢ ðCmd: *.glossyc*
â âââ¢ ð  Dec: *Send glossy logo*
â ââ¢ ð Ex: *.glossycDragon X*
â
â ââ¢ ðCmd: *.deluxe*
â âââ¢ ð  Dec: *Send deluxe logo*
â ââ¢ ð Ex: *.deluxeDragon X*
â
â ââ¢ ðCmd: *.glossyb*
â âââ¢ ð  Dec: *Send glossy logo*
â ââ¢ ð Ex: *.glossybDragon X*
â
â ââ¢ ðCmd: *.joker*
â âââ¢ ð  Dec: *Send joker logo*
â ââ¢ ð Ex: *.jokerDragon X*
â
â      ââðDragon X BOT ðââ
â        â ENJOY WITH US â
âââââââââââââââââââââââ`,quoted: message.data})

    }));

   Trex.addrex({pattern: 'wel ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://leyscoders-api.herokuapp.com/api/welcome?name=${topText}&group=${bottomText}&profile=https://telegra.ph/file/35883180004518cb15fe9.jpg&apikey=dappakntlll`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ±  ',quoted: message.data})
   
   }));
   
   Trex.addrex({pattern: 'bye ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://leyscoders-api.herokuapp.com/api/leave?name=${topText}&group=${bottomText}&profile=https://telegra.ph/file/35883180004518cb15fe9.jpg&apikey=dappakntlll`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ±  ',quoted: message.data})
   
   }));
   
   Trex.addrex({pattern: 'marvel ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/marvel-studios?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ±  ',quoted: message.data})
   
   }));
   
   Trex.addrex({pattern: '2marvel ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/marvel-studios2?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ±  ',quoted: message.data})
   
   }));
   
   Trex.addrex({pattern: 'wolf ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/wolf?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ±  ',quoted: message.data})
   
   }));
   
   
     Trex.addrex({ pattern: 'harta ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'quot ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'round ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/img/circle?url=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'lava ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/lava?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: '1917 ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/1917-style?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'minion ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/minion-text?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'holo ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/holographic-3d?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'metalp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/metal-purple?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'avengers ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/avengers-logo?text=T-Rex&text2=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'halloween ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/halloween?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ± ',quoted: message.data})

    }));
   
   Trex.addrex({ pattern: 'horror ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/blood?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ± ',quoted: message.data})
    }));
      
     Trex.addrex({ pattern: 'xmas ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/xmas?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ± ',quoted: message.data})

    }));
      
      Trex.addrex({ pattern: 'glossyc ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glossy-carbon?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ± ',quoted: message.data})

    }));
      Trex.addrex({ pattern: 'deluxe ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/deluxe-gold?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ± ',quoted: message.data})

    }));
      
      Trex.addrex({ pattern: 'glossyb ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glossy-blue?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ± ',quoted: message.data})

    }));
      
      
      Trex.addrex({ pattern: 'joker ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/joker?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   â°ðð± áªáð°ð¶ðð Ó¼ BOT  ð±ðâ± ' ,quoted: message.data})

    }));
      
      
      
      
   
}
