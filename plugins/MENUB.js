 
/* Copyright (C) 2022 ๐กแชแ๐ฐ๐ถ๐๐ ำผ ๐กีกษฆ๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฌ๐๐ซ ๐๐จ๐ญ
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Dษพฮฑษ ฯษณx Dาฝส Tาฝฮฑษฑ ๐ฑ๐ฐ 
*/

const Trex = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const hrs = new Date().getHours({ timeZone: Config.TIME })
const os = require('os');
const Language = require('../language');
const Lang = Language.getString('_trex');

if (Config.WORKTYPE == 'public') {

Trex.addrex({on: 'text', fromMe: false,  deleteCommand: false}, (async (message, match) => {    
  
  let menu = new RegExp('MENU')
  
  if (menu.test(message.message)) {
    
    var time = new Date().toLocaleString('HI', { timeZone: Config.TIME }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ษขแดแดแด แดแดสษดษชษดษข โ*'
if (hrs >= 12 && hrs <= 17) wish = '*ษขแดแดแด แดาแดแดสษดแดแดษด ๐*'
if (hrs >= 17 && hrs <= 19) wish = '*ษขแดแดแด แดแด แดษดษชษดษข ๐ฅ*'
if (hrs >= 19 && hrs <= 24) wish = '*ษขแดแดแด ษดษชษขสแด ๐*'
    
    const rows = [
        {title: 'โ๐ก๏ธ ALL MENU ๐ก๏ธโ ', description: `โทโทโทโทโทโท\n\n\n
 โญโโโโโโโโโโโโโโโโ
 โ โ๐ก๏ธ Dragon X ๐ก๏ธโ 
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ Hello โท Dear
 โ
 โ I Wish `+ wish + `
 โ 
 โTimeโ` + time + `
 โ
 โ   My Bot Work as
 โ๐ฐ `+Config.WORKTYPE+` ๐ฐ
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ       ๐ฐ  BOT  ๐ฐ 
 โ        โโโโโโโโโโ
 โ
 โโท .Menu
 โโท .alive
 โโท .admin [ for owner ]
 โโท .version
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ    ๐ฐ  Sticker ๐ฐ 
 โ
 โโท .attp { text }
 โโท .sticker
 โโท .sticvid
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ     ๐ฐ Uploder ๐ฐ
 โ
 โโท .uploadp [ reply a photo ]
 โโท .uploadv [ reply a video ]
 โ
 โUpload Your photo or video
 โto Telegraph & Give you link
 โ 
 โwarn : you can upload less than 
 โ       5mb source
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ ๐ฐ Text To Img ๐ฐ 
 โ
 โโท .attppack
 โโท .ffpack
 โโท .ttp { text }
 โโท .dttp { text }
 โโท .trumpsay { text }
 โโท .changesay { text }
 โโท .animesay { text }
 โโท .meme { text }
 โโท .carbon { text }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ  ๐ฐ Downloader ๐ฐ
 โ
 โโท .video { vid link }
 โโท .down { status down }
 โโท .song { song name }
 โโท .fsong { song name }
 โโท .play { song name }
 โโท .img { name }
 โโท .fb { link }
 โโท .tiktok { link }
 โโท .insta { link }
 โโท .spotify { link }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ     ๐ฐ Groups ๐ฐ 
 โ
 โโท .grp
 โโท .rules
 โโท .info
 โโท .tagadmin
 โโท .report
 โโท .gname {change group n}
 โโท .dis on { disapearing }
 โโท .dis off { for owner }
 โโท .warn1 [ for owner ]
 โโท .warn2 [ for owner ]
 โโท .warn3 [ for owner ]
 โโท .warn4 [ for owner ]
 โโท .tagall  [ for owner ]
 โโท .ban [ for owner ]
 โโท .add [ for owner ]
 โโท .promote [ for owner ]
 โโท .demote [ for owner ]
 โโท .invite [ for owner ]
 โโท .kickme [ for owner ]
 โ
 โ    use .admin Cmd for
 โ      other commands
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ ๐ฐ Software Store ๐ฐ
 โ
 โโท .Softstore
 โ 
 โ   By Janith sadanuwan      
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ  ๐ฐ For owner ๐ฐ
 โ
 โโท .name { change name }
 โโท .pp { cha profilr pic}
 โโท .bio { change bio }
 โ
 โ  Now you can change 
 โ    your whatsapp 
 โ name,profile pic,bio
 โ      easy with
 โ      Dragon X BOT
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ   ๐ฐ Search ๐ฐ 
 โ
 โโท .yt { text }
 โโท .spoti { text }
 โโท .tk { name }
 โโท .wiki { text }
 โโท .movie { mov name }
 โโท .github { name }
 โโท .weather { city }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ๐ฐ Media Editor๐ฐ
 โ
 โโท .xmedia
 โโท .tblend
 โโท .ocr
 โโท .mp3 { vid to aud }
 โโท .photo { stic to 4to }
 โโท .ffmpeg { fade in:0:30 }
 โโท .removebg
 โโท .spdf
 โโท .unaudio { mp3 to file }
 โโท .unvoice { mp3 to voice }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ    ๐ฐ Random ๐ฐ
 โ
 โโท .quote
 โโท .anime
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ       ๐ฐ Fun ๐ฐ 
 โ
 โโท .gm
 โโท .agm
 โโท .gn
 โโท .agn
 โโท .tts { text }
 โโท .ping [ for owner ]
 โโท .antispam { text }
 โ
 โฐโโโโโโโโโโโโโโโโ
 
 โญโโโโโโโโโโโโโโโโ
 โ      ๐ฐ Other ๐ฐ 
 โ
 โโท .ss { link }
 โโท .afk { bot is online }
 โโท .short { link }
 โโท .wame { get user link }
 โโท .currency
 โโท .trt { en si }
 โโท .notes
 โโท .save
 โโท .deleteNotes
 โโท .covid
 โฐโโโโโโโโโโโโโโโโ
 
          ๐ฐ POWERD BY ๐ฐ
          โ๐ก๏ธ Dragon X ๐ก๏ธโ 
     ๐ฐ       Janith        ๐ฐ
` , rowId:"rowid1"},
        {title: 'โ๐ก๏ธ ADVANCE MENU ๐ก๏ธโ ', description:`โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโโโ
         โ๐ก๏ธ Dragon X ๐ก๏ธโ  
โโโโโโโโโโโโโโโโโโโโโโโโโ
๐ฐ Command: ยฐ.xmediaยฐ
โข Description: ยฐA plugin that have 25 media tools.ยฐ
๐ฐ Command: ยฐ.adminยฐ
โข Description: ยฐTo get the admin command listยฐ
๐ฐ Command: ยฐ.menuยฐ
โข Description:ยฐall commandsยฐ
๐ฐ Command: ยฐ.lovepackยฐ
โข Description: ยฐSend Love message to gf/bf.ยฐ
๐ฐ Command; ยฐ.grpยฐ
โข Description: ยฐSend Groups listยฐ
๐ฐ Command: ยฐ.warn1,.warn2,.warn3,.warn4
โข Description: ยฐSend Group Warm msg. Admin only Commandยฐ
๐ฐ Command: ยฐ.rulesยฐ
*โข Description: * ยฐSend Group Rulesยฐ
๐ฐ Command: ยฐ.switchยฐ
โข Description: ยฐTurn on/off chat bot.
โจ๏ธ Example: To turn on AI chat, .switch CHAT_BOT:true
To turn on AI chat, .switch CHAT_BOT:false
(This is a only admin command)ยฐ
๐ฐ Command: ยฐ.animeยฐ
โข Description: ยฐSend Different type ANIME images . เทเทเทเทเถฏเทเถเทเถป เถเถฑเทเถธเท เถดเทเถฑเทเถญเทเถป เถเถถ เทเทเถญ เถเทเถบเท..ยฐ
๐ฐ Command: ยฐ.antispamยฐ
โข Description: ยฐThis command for any emergency situation about any kind of WhatsApp SPAM in Groupยฐ
๐ฐ Command: ยฐ.mp3ยฐ
โข Description: ยฐConvert mp4 into mp3.ยฐ
๐ฐ Command: ยฐ.photoยฐ
โข Description: ยฐ๐ฐโข Convert sticker into an image.ยฐ
๐ฐ Command: ยฐ.ffmpegยฐ
โข Description: ยฐApply ffmpeg filter to a video
โจ๏ธ Example: .ffmpeg fade=in:0:30ยฐ
๐ฐ Command: ยฐ.gnยฐ
โข Description: ยฐSend Gn wish with image.ยฐ
๐ฐ Command: ยฐ.gmยฐ
โข Description: ยฐSend Gm wish with image.ยฐ
๐ฐ Command: ยฐ.infoยฐ
โข Description: ยฐShow chat detailsยฐ
๐ฐ Command: ยฐ.covidยฐ
โข Description: ยฐCheck information about Covid-19 of countries.
Example : .covid Sri Lankaยฐ
๐ฐ Command: ยฐ.memeยฐ
โข Description: ยฐThe photos you replied to are memes.ยฐ
๐ฐ Command: ยฐ.movieยฐ
โข Description: ยฐMovies เทเถฝ เทเทเทเทเถญเถป เถฝเถถเทเถฏเทเถธ.ยฐ
๐ฐ Command: ยฐ.notesยฐ
โข Description: ยฐShow your notes.ยฐ
๐ฐ Command: ยฐ.saveยฐ
โข Description: ยฐReply .save to a message or type .save <your_note>ยฐ
๐ฐ Command: ยฐ.deleteNotesยฐ
โข Description: ยฐClear your all notes.ยฐ
๐ฐ Command: ยฐ.ocrยฐ
โข Description: ยฐScan your picture into text.ยฐ
๐ฐ Command: ยฐ.removebgยฐ
โข Description: ยฐRemoving background of image.ยฐ
๐ฐ Command: ยฐ.reportยฐ
โข Description: ยฐReport someone in the group to admins.ยฐ
๐ฐ Command: ยฐ.fsongยฐ
โข Description: ยฐUploading file type songs.ยฐ
๐ฐ Command: ยฐ.songยฐ
โข Description: ยฐUploading mp3 type songs.ยฐ
๐ฐ Command: ยฐ.videoยฐ
โข Description: ยฐDownloading videos from YouTubeยฐ
๐ฐ Command: ยฐ.instaยฐ
โข Description: ยฐ๐ฐโข โ๐ก๏ธ Dragon X ๐ก๏ธโ   Download instagram videos.ยฐ
๐ฐ Command: ยฐ.fbยฐ
โข Description: ยฐ๐ฐโข โ๐ก๏ธ Dragon X ๐ก๏ธโ   Download Facebook videos.ยฐ
๐ฐ Command: ยฐ.trtยฐ
โข Description: ยฐIt translates with Google Translator. You must mention any message.ยฐ
โจ๏ธ Example: ยฐ.trt en si (From English to Sinhala)ยฐ
๐ฐ Command: ยฐ.spdfยฐ
โข Description: ยฐConverts a Site into PDFยฐ
๐ฐ Command: ยฐ.quoteยฐ
โข Description: ยฐIt Sends Random Quoteยฐ
๐ฐ Command: ยฐ.currencyยฐ
โข Description: ยฐTo convert currencies.ยฐ
๐ฐ Command: ยฐ.ttsยฐ
โข Description: ยฐIt translates words into voice messages.ยฐ
๐ฐ Command: ยฐ.ytยฐ
โข Description: ยฐSearchng videos on YouTube.ยฐ
๐ฐ Command: ยฐ.wikiยฐ
โข Description: ยฐSearch Wikipedia.ยฐ
๐ฐ Command: ยฐ.imgยฐ
โข Description: ยฐDownloading google images.ยฐ
๐ฐ Command: ยฐ.wameยฐ
โข Description: ยฐGet a link to the user chat.ยฐ
๐ฐ Command: ยฐ.githubยฐ
โข Description: ยฐStalk github profiles of given username.
โจ๏ธ Example: .github Janithsadanuwanยฐ
๐ฐ Command: ยฐ.tkยฐ
โข Description: ยฐStalk tiktok profile to a given username.
โจ๏ธ Example: .tK Janithยฐ
๐ฐ Command: ยฐ.ssยฐ
โข Description: ยฐTake screenshot of given linksยฐ
๐ฐ Command: ยฐ.modยฐ
โข Description: ยฐSearch modded apk in Moddroid site.ยฐ
๐ฐ Command: ยฐ.spotiยฐ
โข Description: ยฐSearch songs from spotify.ยฐ
๐ฐ Command: ยฐ.animesayยฐ
โข Description: ยฐ๐ฐโข Write text on anime girl s paperยฐ
๐ฐ Command: ยฐ.changesayยฐ
โข Description: ยฐWeite chaged my mind themed memesยฐ
๐ฐ Command: ยฐ.trumpsayยฐ
โข Description: ยฐ๐ฐโข Write text on Trump Twitterยฐ
๐ฐ Command: ยฐ.spotifyยฐ
โข Description: ยฐDownload spotify songs.ยฐ
๐ฐ Command: ยฐ.stickerยฐ
โข Description: ยฐMake stickers to your images. Reply to an image.ยฐ
๐ฐ Command: ยฐ.sticvidยฐ
โข Description: ยฐ๐ฐโข Converts animated stickers to video.ยฐ
๐ฐ Command: ยฐ.aliveยฐ
โข Description: ยฐCheck bot online or notยฐ
๐ฐ Command: ยฐ.versionยฐ
โข Description: ยฐCheck version of bot.ยฐ
๐ฐ Command: ยฐ.tagadminยฐ
โข Description: ยฐTag all group admins.ยฐ
๐ฐ Command: ยฐ.tblendยฐ
โข Description: ยฐApplies the selected TBlend effect to videos.ยฐ
๐ฐ Command: ยฐ.carbonยฐ
โข Description: ยฐConvert text into Carbon effectยฐ
๐ฐ Command: ยฐ.tgmยฐ
โข Description: ยฐit sends good morning text messageยฐ
๐ฐ Command: ยฐ.tgnยฐ
โข Description: ยฐit sends good night text messageยฐ
๐ฐ Command: ยฐ.ttpยฐ
โข Description: ยฐMake text imageยฐ
๐ฐ Command: ยฐ.attpยฐ
โข Description: ยฐMake animated text stickers in Rainbow themeยฐ
๐ฐ Command: ยฐ.unaudioยฐ
โข Description: ยฐConverts sound recording to an audio File.ยฐ
๐ฐ Command: ยฐ.unvoiceยฐ
โข Description: ยฐConvert mp3 into a WA voice messageยฐ
๐ฐ Command: ยฐ.vid2ยฐ
โข Description: ยฐYoutube Video Downloader V2 . เถบเท เถงเทเถบเทเถถเท เทเทเถฉเทเถบเท เถฉเทเทเถฑเทเถฝเทเถฉเท เถเทเถปเทเถธเถง เถฏเทเทเถฑ เถธเถ... .ยฐ
๐ฐ Command: ยฐ.weatherยฐ
โข Description: ยฐCheck weather.ยฐ
๐ฐ Command: ยฐ.speedtestยฐ
โข Description: ยฐCheck download and upload speedยฐ
๐ฐ Command: ยฐ.pingยฐ
โข Description: ยฐYour ping.ยฐ
๐ฐ Command: ยฐ.shortยฐ
โข Description: ยฐShorten link.ยฐ
`, rowId:"rowid3"},
        {title: 'โ๐ก๏ธ Love Pack ๐ก๏ธโ ', description: `โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโโโ
                 โ๐ก๏ธ Dragon X ๐ก๏ธโ 
โโโโโโโโโโโโโโโโโโโโโโโโโ
                  โฅ LOVE PACK โฅ
                  
โฅ Command : .love you
โข Description :  Send I love you message with Image..
โฅ Command : .miss you
โข Description :  Send i miss you message with image..
โฅ Command : .love you somuch
โข Description :  Send I love you so much message with image..
โฅ Command : .hate you
โข Description :  Send i hate you message ๐ช..
โฅ Command : .cry
โข Description :  Send I m cry message..
โฅ Command : .alone
โข Description :  Send i am alone message..
โฅ Command : .single
โข Description : Send i am single message..
โฅ Command : .need gf
โข Description :  Send I need Girl friend message..
โฅ Command : need bf
โข Description :  Send i need Boy friend message..
      โโโ๐ก๏ธ Dragon X ๐ก๏ธโ โโ
       โ ENJOY WITH US โ
โโโโโโโโโโโโโโโโโโโโโโโ
`, rowId:"rowid4"},
        {title: 'โ๐ก๏ธ FF PACK ๐ก๏ธโ ', description:`โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโ
โ         โ๐ก๏ธ Dragon X ๐ก๏ธโ   
โ         โ๐ฐโFF PACKโ๐ฐโ
โ
โ โโข ๐ฐ.ff9       โดyour textโต
โsend fiee fire logo
โ โโข ๐ฐ.ff10      โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff11      โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff12      โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff13      โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff14      โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff15      โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff16      โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff17      โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff18       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff19       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff20       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff21       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff22       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff23       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff24       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff25       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff26       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff27       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff28       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff29       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff30       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff31       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff32       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff33       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff34       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff35       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff36       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff37       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff38       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff39       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff40       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff40       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff41       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff42       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff43       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff44       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff45       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff46       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff47       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff48       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff49       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff50       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff51       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff52       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff53       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff54       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff55       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff56       โดyour textโต
โsend free fire logo
โ
โ
โโทCreator: HIRUSHA
โ
โ   โ๐ก๏ธ Dragon X ๐ก๏ธโ  
โโโโโโโโโโโโโโโโโโโโโโโ
`, rowId:"rowid5"},
        {title: 'โ๐ก๏ธ Software Store ๐ก๏ธโ ', description: `โทโทโทโทโทโท\n\n\n
โญโโโโโโโโโโโโโโโ
โ  ๐ฐ SOFTWARE STORE BY Janith sadanuwan ๐ฐ
โ
โ  โAdobe Editing Softwares type =.adobe
โ  โWondershare Softwares type =.ws
โ  โOperating System type =.os 
โ  โAntivirus Softwares type =.vs
โ  โOffice Softwares type =.office   
โ  โAndroid Emulator Form Pc =.em
โ
โ         ๐ฐPOWERD BY๐ฐ
โ        โ๐ก๏ธ Dragon X ๐ก๏ธโ 
โฐโโโโโโโโโโโโโโ
`, rowId:"rowid6"},
        {title: 'โ๐ก๏ธ Apk Store ๐ก๏ธโ ', description: `โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโ
โ         โ๐ก๏ธ Dragon X ๐ก๏ธโ    
โ        โ๐ฐโAPK STOREโ๐ฐโ
โ
โ    Coming Soon
โ
โ โ๐ก๏ธ Dragon X ๐ก๏ธโ    
โโโโโโโโโโโโโโโโโโโโโโโ
`, rowId:"rowid20"},
        {title: 'โ๐ก๏ธ DOWNLOADER ๐ก๏ธโ ', description: `โทโทโทโทโทโท\n\n\n
 โญโโโโโโโโโโโโโโโโ
 โ   ๐ฐ  Downloader ๐ฐ
 โ
 โโท .video { vid link }
 โโท .down { status down }
 โโท .song { song name }
 โโท .fsong { song name }
 โโท .play { song name }
 โโท .img { name }
 โโท .fb { link }
 โโท .tiktok { link }
 โโท .insta { link }
 โโท .spotify { link }
 โ
 โฐโโโโโโโโโโโโโโโโ
`, rowId:"rowid9"},
        {title: 'โ๐ก๏ธABOUT Dragon X BOT ๐ก๏ธโ ', description:`โทโทโทโทโทโท\n\n\n
๐ฐ Developer : Janith
๐ฐ Bot             : โ๐ก๏ธ Dragon X ๐ก๏ธโ  WhatsApp User Bot v1.0.0
๐ฐ Language : Sinhala & English
๐ฐ Develop language : Node js
๐ฐ Developer no : http://wa.me/+94788175828
`, rowId:"rowid2"}
       ]
       
       const sections = [{title: "โ๐ก๏ธ Dragon X ๐ก๏ธโ  CMD ๐ฐ PANEL. ๐", rows: rows}]
       
       const button = {
        buttonText: 'Click Meโท',
        description: "โ๐ก๏ธ Dragon X ๐ก๏ธโ  CMD ๐ฐ PANEL. ๐",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }
  
  }))
  
  }
else if (Config.WORKTYPE == 'private') {
  
  Trex.addrex({on: 'text', fromMe: true,  deleteCommand: false}, (async (message, match) => {    
  
  let menu = new RegExp('MENU')
  
  if (menu.test(message.message)) {
    
    var time = new Date().toLocaleString('HI', { timeZone: Config.TIME }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ษขแดแดแด แดแดสษดษชษดษข โ*'
if (hrs >= 12 && hrs <= 17) wish = '*ษขแดแดแด แดาแดแดสษดแดแดษด ๐*'
if (hrs >= 17 && hrs <= 19) wish = '*ษขแดแดแด แดแด แดษดษชษดษข ๐ฅ*'
if (hrs >= 19 && hrs <= 24) wish = '*ษขแดแดแด ษดษชษขสแด ๐*'
    
    const rows = [
        {title: 'โ๐ก๏ธ ALL MENU ๐ก๏ธโ  ', description: `โทโทโทโทโทโท\n\n\n
โญโโโโโโโโโโโโโโโโ
 โ โ๐ก๏ธ Dragon X ๐ก๏ธโ 
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ Hello โท Dear
 โ
 โ I Wish `+ wish + `
 โ 
 โTimeโ` + time + `
 โ
 โ   My Bot Work as
 โ๐ฐ `+Config.WORKTYPE+` ๐ฐ
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ       ๐ฐ  BOT  ๐ฐ 
 โ        โโโโโโโโโโ
 โ
 โโท .menu
 โโท .alive
 โโท .admin [ for owner ]
 โโท .version
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ    ๐ฐ  Sticker ๐ฐ 
 โ
 โโท .attp { text }
 โโท .sticker
 โโท .sticvid
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ     ๐ฐ Uploder ๐ฐ
 โ
 โโท .uploadp [ reply a photo ]
 โโท .uploadv [ reply a video ]
 โ
 โUpload Your photo or video
 โto Telegraph & Give you link
 โ 
 โwarn : you can upload less than 
 โ       5mb source
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ ๐ฐ Text To Img ๐ฐ 
 โ
 โโท .attppack
 โโท .ffpack
 โโท .ttp { text }
 โโท .dttp { text }
 โโท .trumpsay { text }
 โโท .changesay { text }
 โโท .animesay { text }
 โโท .meme { text }
 โโท .carbon { text }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ  ๐ฐ Downloader ๐ฐ
 โ
 โโท .video { vid link }
 โโท .mp4 { vid name }
 โโท .down { status down }
 โโท .song { song name }
 โโท .fsong { song name }
 โโท .play { song name }
 โโท .img { name }
 โโท .fb { link }
 โโท .tiktok { link }
 โโท .insta { link }
 โโท .spotify { link }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ     ๐ฐ Groups ๐ฐ 
 โ
 โโท .grp
 โโท .rules
 โโท .info
 โโท .tagadmin
 โโท .report
 โโท .gname {change group n}
 โโท .dis on { disapearing }
 โโท .dis off { for owner }
 โโท .warn1 [ for owner ]
 โโท .warn2 [ for owner ]
 โโท .warn3 [ for owner ]
 โโท .warn4 [ for owner ]
 โโท .tagall  [ for owner ]
 โโท .ban [ for owner ]
 โโท .add [ for owner ]
 โโท .promote [ for owner ]
 โโท .demote [ for owner ]
 โโท .invite [ for owner ]
 โโท .kickme [ for owner ]
 โ
 โ    use .admin Cmd for
 โ      other commands
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ ๐ฐ Software Store ๐ฐ
 โ
 โโท .Softstore
 โ 
 โ   By Janith sadanuwan      
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ  ๐ฐ For owner ๐ฐ
 โ
 โโท .name { change name }
 โโท .pp { cha profilr pic}
 โโท .bio { change bio }
 โ
 โ  Now you can change 
 โ    your whatsapp 
 โ name,profile pic,bio
 โ      easy with
 โ      Dragon X BOT
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ   ๐ฐ Search ๐ฐ 
 โ
 โโท .yt { text }
 โโท .spoti { text }
 โโท .tk { name }
 โโท .wiki { text }
 โโท .movie { mov name }
 โโท .github { name }
 โโท .weather { city }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ๐ฐ Media Editor๐ฐ
 โ
 โโท .xmedia
 โโท .tblend
 โโท .ocr
 โโท .mp3 { vid to aud }
 โโท .photo { stic to 4to }
 โโท .ffmpeg { fade in:0:30 }
 โโท .removebg
 โโท .spdf
 โโท .unaudio { mp3 to file }
 โโท .unvoice { mp3 to voice }
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ    ๐ฐ Random ๐ฐ
 โ
 โโท .quote
 โโท .anime
 โ
 โฐโโโโโโโโโโโโโโโโ
 โญโโโโโโโโโโโโโโโโ
 โ       ๐ฐ Fun ๐ฐ 
 โ
 โโท .gm
 โโท .agm
 โโท .gn
 โโท .agn
 โโท .tts { text }
 โโท .ping [ for owner ]
 โโท .antispam { text }
 โ
 โฐโโโโโโโโโโโโโโโโ
 
 โญโโโโโโโโโโโโโโโโ
 โ      ๐ฐ Other ๐ฐ 
 โ
 โโท .ss { link }
 โโท .afk { bot is online }
 โโท .short { link }
 โโท .wame { get user link }
 โโท .currency
 โโท .trt { en si }
 โโท .notes
 โโท .save
 โโท .deleteNotes
 โโท .covid
 โฐโโโโโโโโโโโโโโโโ
 
          ๐ฐ POWERD BY ๐ฐ
          โ๐ก๏ธ Dragon X ๐ก๏ธโ 
     ๐ฐ       Janith        ๐ฐ
` , rowId:"rowid1"},
        {title: 'โ๐ก๏ธ ADVANCE MENU ๐ก๏ธโ ', description:`โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโโโ
         โ๐ก๏ธ Dragon X ๐ก๏ธโ  
โโโโโโโโโโโโโโโโโโโโโโโโโ
๐ฐ Command: ยฐ.xmediaยฐ
โข Description: ยฐA plugin that have 25 media tools.ยฐ
๐ฐ Command: ยฐ.adminยฐ
โข Description: ยฐTo get the admin command listยฐ
๐ฐ Command: ยฐ.menuยฐ
โข Description:ยฐall commandsยฐ
๐ฐ Command: ยฐ.lovepackยฐ
โข Description: ยฐSend Love message to gf/bf.ยฐ
๐ฐ Command; ยฐ.grpยฐ
โข Description: ยฐSend Groups listยฐ
๐ฐ Command: ยฐ.warn1,.warn2,.warn3,.warn4
โข Description: ยฐSend Group Warm msg. Admin only Commandยฐ
๐ฐ Command: ยฐ.rulesยฐ
*โข Description: * ยฐSend Group Rulesยฐ
๐ฐ Command: ยฐ.switchยฐ
โข Description: ยฐTurn on/off chat bot.
โจ๏ธ Example: To turn on AI chat, .switch CHAT_BOT:true
To turn on AI chat, .switch CHAT_BOT:false
(This is a only admin command)ยฐ
๐ฐ Command: ยฐ.animeยฐ
โข Description: ยฐSend Different type ANIME images . เทเทเทเทเถฏเทเถเทเถป เถเถฑเทเถธเท เถดเทเถฑเทเถญเทเถป เถเถถ เทเทเถญ เถเทเถบเท..ยฐ
๐ฐ Command: ยฐ.antispamยฐ
โข Description: ยฐThis command for any emergency situation about any kind of WhatsApp SPAM in Groupยฐ
๐ฐ Command: ยฐ.mp3ยฐ
โข Description: ยฐConvert mp4 into mp3.ยฐ
๐ฐ Command: ยฐ.photoยฐ
โข Description: ยฐ๐ฐโข Convert sticker into an image.ยฐ
๐ฐ Command: ยฐ.ffmpegยฐ
โข Description: ยฐApply ffmpeg filter to a video
โจ๏ธ Example: .ffmpeg fade=in:0:30ยฐ
๐ฐ Command: ยฐ.gnยฐ
โข Description: ยฐSend Gn wish with image.ยฐ
๐ฐ Command: ยฐ.gmยฐ
โข Description: ยฐSend Gm wish with image.ยฐ
๐ฐ Command: ยฐ.infoยฐ
โข Description: ยฐShow chat detailsยฐ
๐ฐ Command: ยฐ.covidยฐ
โข Description: ยฐCheck information about Covid-19 of countries.
Example : .covid Sri Lankaยฐ
๐ฐ Command: ยฐ.memeยฐ
โข Description: ยฐThe photos you replied to are memes.ยฐ
๐ฐ Command: ยฐ.movieยฐ
โข Description: ยฐMovies เทเถฝ เทเทเทเทเถญเถป เถฝเถถเทเถฏเทเถธ.ยฐ
๐ฐ Command: ยฐ.notesยฐ
โข Description: ยฐShow your notes.ยฐ
๐ฐ Command: ยฐ.saveยฐ
โข Description: ยฐReply .save to a message or type .save <your_note>ยฐ
๐ฐ Command: ยฐ.deleteNotesยฐ
โข Description: ยฐClear your all notes.ยฐ
๐ฐ Command: ยฐ.ocrยฐ
โข Description: ยฐScan your picture into text.ยฐ
๐ฐ Command: ยฐ.removebgยฐ
โข Description: ยฐRemoving background of image.ยฐ
๐ฐ Command: ยฐ.reportยฐ
โข Description: ยฐReport someone in the group to admins.ยฐ
๐ฐ Command: ยฐ.fsongยฐ
โข Description: ยฐUploading file type songs.ยฐ
๐ฐ Command: ยฐ.songยฐ
โข Description: ยฐUploading mp3 type songs.ยฐ
๐ฐ Command: ยฐ.videoยฐ
โข Description: ยฐDownloading videos from YouTubeยฐ
๐ฐ Command: ยฐ.instaยฐ
โข Description: ยฐ๐ฐโข โ๐ก๏ธ Dragon X ๐ก๏ธโ   Download instagram videos.ยฐ
๐ฐ Command: ยฐ.fbยฐ
โข Description: ยฐ๐ฐโข โ๐ก๏ธ Dragon X ๐ก๏ธโ   Download Facebook videos.ยฐ
๐ฐ Command: ยฐ.trtยฐ
โข Description: ยฐIt translates with Google Translator. You must mention any message.ยฐ
โจ๏ธ Example: ยฐ.trt en si (From English to Sinhala)ยฐ
๐ฐ Command: ยฐ.spdfยฐ
โข Description: ยฐConverts a Site into PDFยฐ
๐ฐ Command: ยฐ.quoteยฐ
โข Description: ยฐIt Sends Random Quoteยฐ
๐ฐ Command: ยฐ.currencyยฐ
โข Description: ยฐTo convert currencies.ยฐ
๐ฐ Command: ยฐ.ttsยฐ
โข Description: ยฐIt translates words into voice messages.ยฐ
๐ฐ Command: ยฐ.ytยฐ
โข Description: ยฐSearchng videos on YouTube.ยฐ
๐ฐ Command: ยฐ.wikiยฐ
โข Description: ยฐSearch Wikipedia.ยฐ
๐ฐ Command: ยฐ.imgยฐ
โข Description: ยฐDownloading google images.ยฐ
๐ฐ Command: ยฐ.wameยฐ
โข Description: ยฐGet a link to the user chat.ยฐ
๐ฐ Command: ยฐ.githubยฐ
โข Description: ยฐStalk github profiles of given username.
โจ๏ธ Example: .github Janithsadanuwanยฐ
๐ฐ Command: ยฐ.tkยฐ
โข Description: ยฐStalk tiktok profile to a given username.
โจ๏ธ Example: .tK Janithยฐ
๐ฐ Command: ยฐ.ssยฐ
โข Description: ยฐTake screenshot of given linksยฐ
๐ฐ Command: ยฐ.modยฐ
โข Description: ยฐSearch modded apk in Moddroid site.ยฐ
๐ฐ Command: ยฐ.spotiยฐ
โข Description: ยฐSearch songs from spotify.ยฐ
๐ฐ Command: ยฐ.animesayยฐ
โข Description: ยฐ๐ฐโข Write text on anime girl s paperยฐ
๐ฐ Command: ยฐ.changesayยฐ
โข Description: ยฐWeite chaged my mind themed memesยฐ
๐ฐ Command: ยฐ.trumpsayยฐ
โข Description: ยฐ๐ฐโข Write text on Trump Twitterยฐ
๐ฐ Command: ยฐ.spotifyยฐ
โข Description: ยฐDownload spotify songs.ยฐ
๐ฐ Command: ยฐ.stickerยฐ
โข Description: ยฐMake stickers to your images. Reply to an image.ยฐ
๐ฐ Command: ยฐ.sticvidยฐ
โข Description: ยฐ๐ฐโข Converts animated stickers to video.ยฐ
๐ฐ Command: ยฐ.aliveยฐ
โข Description: ยฐCheck bot online or notยฐ
๐ฐ Command: ยฐ.versionยฐ
โข Description: ยฐCheck version of bot.ยฐ
๐ฐ Command: ยฐ.tagadminยฐ
โข Description: ยฐTag all group admins.ยฐ
๐ฐ Command: ยฐ.tblendยฐ
โข Description: ยฐApplies the selected TBlend effect to videos.ยฐ
๐ฐ Command: ยฐ.carbonยฐ
โข Description: ยฐConvert text into Carbon effectยฐ
๐ฐ Command: ยฐ.tgmยฐ
โข Description: ยฐit sends good morning text messageยฐ
๐ฐ Command: ยฐ.tgnยฐ
โข Description: ยฐit sends good night text messageยฐ
๐ฐ Command: ยฐ.ttpยฐ
โข Description: ยฐMake text imageยฐ
๐ฐ Command: ยฐ.attpยฐ
โข Description: ยฐMake animated text stickers in Rainbow themeยฐ
๐ฐ Command: ยฐ.unaudioยฐ
โข Description: ยฐConverts sound recording to an audio File.ยฐ
๐ฐ Command: ยฐ.unvoiceยฐ
โข Description: ยฐConvert mp3 into a WA voice messageยฐ
๐ฐ Command: ยฐ.vid2ยฐ
โข Description: ยฐYoutube Video Downloader V2 . เถบเท เถงเทเถบเทเถถเท เทเทเถฉเทเถบเท เถฉเทเทเถฑเทเถฝเทเถฉเท เถเทเถปเทเถธเถง เถฏเทเทเถฑ เถธเถ... .ยฐ
๐ฐ Command: ยฐ.weatherยฐ
โข Description: ยฐCheck weather.ยฐ
๐ฐ Command: ยฐ.speedtestยฐ
โข Description: ยฐCheck download and upload speedยฐ
๐ฐ Command: ยฐ.pingยฐ
โข Description: ยฐYour ping.ยฐ
๐ฐ Command: ยฐ.shortยฐ
โข Description: ยฐShorten link.ยฐ
`, rowId:"rowid3"},
        {title: 'โ๐ก๏ธ Love Pack ๐ก๏ธโ ', description: `โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโโโ
                 โ๐ก๏ธ Dragon X ๐ก๏ธโ 
โโโโโโโโโโโโโโโโโโโโโโโโโ
                  โฅ LOVE PACK โฅ
                  
โฅ Command : .love you
โข Description :  Send I love you message with Image..
โฅ Command : .miss you
โข Description :  Send i miss you message with image..
โฅ Command : .love you somuch
โข Description :  Send I love you so much message with image..
โฅ Command : .hate you
โข Description :  Send i hate you message ๐ช..
โฅ Command : .cry
โข Description :  Send I m cry message..
โฅ Command : .alone
โข Description :  Send i am alone message..
โฅ Command : .single
โข Description : Send i am single message..
โฅ Command : .need gf
โข Description :  Send I need Girl friend message..
โฅ Command : need bf
โข Description :  Send i need Boy friend message..
      โโโ๐ก๏ธ Dragon X ๐ก๏ธโ โโ
       โ ENJOY WITH US โ
โโโโโโโโโโโโโโโโโโโโโโโ
`, rowId:"rowid4"},
        {title: 'โ๐ก๏ธ FF PACK ๐ก๏ธโ ', description:`โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโ
โ         โ๐ก๏ธ Dragon X ๐ก๏ธโ   
โ         โ๐ฐโFF PACKโ๐ฐโ
โ
โ โโข ๐ฐ.ff9       โดyour textโต
โsend fiee fire logo
โ โโข ๐ฐ.ff10      โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff11      โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff12      โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff13      โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff14      โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff15      โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff16      โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff17      โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff18       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff19       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff20       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff21       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff22       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff23       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff24       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff25       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff26       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff27       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff28       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff29       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff30       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff31       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff32       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff33       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff34       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff35       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff36       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff37       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff38       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff39       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff40       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff40       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff41       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff42       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff43       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff44       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff45       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff46       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff47       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff48       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff49       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff50       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff51       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff52       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff53       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff54       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff55       โดyour textโต
โsend free fire logo
โ โโข ๐ฐ.ff56       โดyour textโต
โsend free fire logo
โ
โ
โโทCreator: HIRUSHA
โ
โ   โ๐ก๏ธ Dragon X ๐ก๏ธโ  
โโโโโโโโโโโโโโโโโโโโโโโ
`, rowId:"rowid5"},
        {title: 'โ๐ก๏ธ Software Store ๐ก๏ธโ ', description: `โทโทโทโทโทโท\n\n\n
โญโโโโโโโโโโโโโโโ
โ  ๐ฐ SOFTWARE STORE BY Janith sadanuwan ๐ฐ
โ
โ  โAdobe Editing Softwares type =.adobe
โ  โWondershare Softwares type =.ws
โ  โOperating System type =.os 
โ  โAntivirus Softwares type =.vs
โ  โOffice Softwares type =.office   
โ  โAndroid Emulator Form Pc =.em
โ
โ         ๐ฐPOWERD BY๐ฐ
โ        โ๐ก๏ธ Dragon X ๐ก๏ธโ 
โฐโโโโโโโโโโโโโโ
`, rowId:"rowid6"},
        {title: 'โ๐ก๏ธ Apk Store ๐ก๏ธโ ', description: `โทโทโทโทโทโท\n\n\n
โโโโโโโโโโโโโโโโโโโโโโโ
โ         โ๐ก๏ธ Dragon X ๐ก๏ธโ    
โ        โ๐ฐโAPK STOREโ๐ฐโ
โ
โ    Coming Soon
โ
โ โ๐ก๏ธ Dragon X ๐ก๏ธโ    
โโโโโโโโโโโโโโโโโโโโโโโ

`, rowId:"rowid20"},
        {title: 'โ๐ก๏ธ DOWNLOADER ๐ก๏ธโ ', description: `โทโทโทโทโทโท\n\n\n
 โญโโโโโโโโโโโโโโโโ
 โ   ๐ฐ  Downloader ๐ฐ
 โ
 โโท .video { vid link }
 โโท .down { status down }
 โโท .song { song name }
 โโท .fsong { song name }
 โโท .play { song name }
 โโท .img { name }
 โโท .fb { link }
 โโท .tiktok { link }
 โโท .insta { link }
 โโท .spotify { link }
 โ
 โฐโโโโโโโโโโโโโโโโ
`, rowId:"rowid9"},
        {title: 'โ๐ก๏ธABOUT Dragon X BOT ๐ก๏ธโ ', description:`โทโทโทโทโทโท\n\n\n
๐ฐ Developer : Janith
๐ฐ Bot             : โ๐ก๏ธ Dragon X ๐ก๏ธโ  WhatsApp User Bot v1.0.0
๐ฐ Language : Sinhala & English
๐ฐ Develop language : Node js
๐ฐ Developer no : http://wa.me/+94788175828
`, rowId:"rowid2"}
       ]
       
       const sections = [{title: "โ๐ก๏ธ Dragon X ๐ก๏ธโ  CMD ๐ฐ PANEL. ๐", rows: rows}]
       
       const button = {
        buttonText: 'Click Meโท',
        description: "โ๐ก๏ธ Dragon X ๐ก๏ธโ  CMD ๐ฐ PANEL. ๐",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }
  
  }))
  
  }
