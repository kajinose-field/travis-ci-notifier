var Travis = require('travis-ci');
var travis = new Travis({
    version: '2.0.0'
});

/*  if you use authentication of Travis CI.
     you can get travis access token by github authentication

travis.auth.github.post({
    github_token: "API_TOKEN"
}, function (err, res) {
    // res => {
    //     access_token: XXXXXXX
    // }
    travis.authenticate({
        access_token: res.access_token
    }, function (err) {
         // we've authenticated!
    });
});*/

//  userのリポジトリの取得
travis.repos('ItinoseSan').get(function (err, res) {
   // getJSONArray(res);
});

function getJSONArray(res){
    var array = res.repos;
    get_build_state(array)
}
travis.repos('ItinoseSan', 'check-hub').get(function (err, res) {
    console.log(res.repo.slug);
});
function get_build_state(array){
    console.log("Travis-CI build check result\n")
    array.forEach(function(element) {
        repoName = element.slug;
        build_status = element.last_build_state;
        if(build_status == "passed"){
            console.log("Succeed to build of "+repoName);
        }else if(build_status == "failed"){
            console.log("Failed to build of "+repoName+" plz check your ci dashboard");
        }else {
            console.log("Build status of "+repoName+" is unknown now.")
        }
    });
}
