const notifier = require('google-home-notifier');
notifier.device('device name') 
notifier.ip('your google home ip')
notifier.language('ja');

function speakHome(text){
    googlehome.notify(text, function(res) {
        console.log(res)
     })
}

speakHome('こんにちは');
