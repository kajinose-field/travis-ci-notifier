# Travis-CI-Notifier-Nodejs
Notify build status of travis-ci in googlehome
# Set up
install dependencies
```
npm install
or
npm install google-home-notifier
npm install travis-ci
```
fix google-home-notifier easy to use. 

src path is ```node_modules/google-home-notifier/google-home-notifier.js```

```javascript
// rewrite device set up content
var device = function(name) {
    device = name;
    return this;
};
// add this 
var language = function(lang){
  language = lang;
  return this;
}
// rewrite device ip set up content
var ip = function(ip) {
  deviceAddress = ip;
  return this;
}
// add export
exports.language = language;
```
finally export the enviroment variable
```sh
export DEVICE_NAME=your google home device name
export DEVICE_IP=your google home device ip
export DEVICE_LANG=ja // ja only now sry;)
export GITHUB_NAME=your github login id 
export SYNC_REPO_NAME=your github repository name that syncing on travis-ci
```
# Run app
```
node index.js
```
# LICENCE
MIT
