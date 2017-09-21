var express = require('express');
var router = express.Router();
var GitHubApi = require("github");


function getTenants(callback){

  var github = new GitHubApi({});
  github.users.getFollowingForUser({
    username: "defunkt"
  }, function(err, res) {
    callback(res);
    console.log(JSON.stringify(res));
  });
}

/* GET tenants */
router.get('/getfollowers/', function(req, res) {
  getTenants((tenants) => {
    res.json(tenants);
  });
});

module.exports = router;
