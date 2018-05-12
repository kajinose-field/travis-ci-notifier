//  localhost urlは自作APIのモノ
const exec = require('child_process').exec;
function curlTest(){
    exec('curl localhost:3000/api/v1/sun/specify.json?id=5', (err, stdout, stderr) => {
        if (err) { console.log(err); }
        console.log(stdout);
    });
}
// GitHubAPI Test(authenticated user)
var url = ' https://api.github.com/user/repos'
var command = 'curl -u '
const name = process.env.NAME
const token = process.env.TOKEN

var request_command = command + name+':'+token + url

console.log(request_command)