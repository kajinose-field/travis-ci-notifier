const deviceName = process.env.DEVICE_NAME
const ip = process.env.DEVICE_IP
const lang = process.env.LANG

const notifier = require('google-home-notifier');
notifier.device(deviceName) 
notifier.ip(ip)
notifier.language(lang);

function speakHome(text){
    notifier.notify(text, function(res) {
        console.log(res)
     })
}

speakHome('こんにちは');
