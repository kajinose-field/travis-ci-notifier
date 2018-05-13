const deviceName = process.env.DEVICE_NAME
const ip = process.env.DEVICE_IP
const lang = process.env.DEVICE_LANG
const githubName = process.env.GITHUB_NAME
const syncRepository = process.env.SYNC_REPO_NAME
const oneSecond = 1000
const minute = oneSecond *60

// google home notifier setup
const notifier = require('google-home-notifier')
notifier.device(deviceName) 
notifier.ip(ip)
notifier.language(lang)

function speakHome(text){
    notifier.notify(text, function(res) {
        console.log(res)
    })
}

const Travis = require('travis-ci')
const travis = new Travis({
    version: '2.0.0'
})

//  ３０分おきに実行する. 非同期処理はミリ秒
setInterval(function(){
    travis.repos(githubName, syncRepository).get(function (err, res) {
        build_status = res.repo.last_build_state
        build_duration = res.repo.last_build_duration
        tellBuildStatus(build_status,syncRepository,build_duration)
    })
},minute * 30)

function tellBuildStatus(status,name,duration){
    if(status == 'passed'){
        speakHome('あなたのリポジトリ、'+name+' のビルドは成功しています。ビルド実行時間は'+duration+'です。')
    }else if(status == 'failed'){
        speakHome('あなたのリポジトリ、'+name+' のビルドは失敗しています。'+
        'ビルド実行時間は'+duration+'です。詳しくはログをウェブ上で確認してください。')
    }else{
        speakHome('あなたのリポジトリ、'+name+'のビルド状態を確認できませんでした。'+
        'TravisCI上でリポジトリを同期してるか、もしくはymlファイルが存在するか確認してください')
    }
}
