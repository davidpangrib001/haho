//Ini untuk setting Bot
//Untuk gambar background menu ada - di plugins menu
//untuk lainya saran jangan di ubah bre nanti eror

//Global Owner//
global.owner = ['6283171710709']  // isi jika perlu
global.mods = ['6283171710709']   // isi jika perlu
global.prems = ['6283171710709']  // isi jika perlu

//Nomor Owner & payment//
global.nameowner = 'Davitt' // isi nama kalian bebas
global.numberowner = '6283171710709' // isi ini untuk mengendalikan bot
global.dana = '082128475388' // isi dengan nomor dana yg kamu punya 
global.pulsa = '083171710709' // isi dengan nomor pulsa hp kalian
global.gopay = '0'

//Nama Bot & Grouplink//
global.namebot = 'Onee-MD'
global.gc = 'https://chat.whatsapp.com/D6BZVRSymWaFU28t2lxaO0'
global.web = 'https://wf.onee-dev.biz.id' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.instagram = 'https://instagram.com/davidpangrib001'

//Tampilan wm Bot dan pesan bot//
global.lolkey = '85faf717d0545d14074659ad' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = '⫹⫺ Onee-MD'
global.watermark = wm
global.wm2 = '⫹⫺ Onee-MD'
global.wm3 = '⫹⫺ Onee-MD'
global.wm4 = '⫹⫺ Onee-MD'
global.fla = 'https://api.tiodevhost.my.id/api/photooxy/harry-potter?text='
global.wait = '_Mohon Tunggu Sebentar . . ._'
global.eror = '_Error_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = '⫹⫺'
global.author = ''

//Apikey Setting//
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'http://api.tiodevhost.my.id', 
  rey: 'https://sekha.me'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://pencarikode.xyz': 'pais', 
  'https://zekais.com': 'apikeymu',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
}

//Setting Rpg//
global.multiplier = 45 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//Jangan merubah bagian ini! //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
