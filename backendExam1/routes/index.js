var express = require('express');
var router = express.Router();
var GitHubApi = require("github");


function getTenants(callback){

var github = new GitHubApi({});
  github.users.getFollowingForUser({
      // optional
      // headers: {
      //     "cookie": "blahblah"
      // },
      username: "defunkt"
  }, function(err, res) {
      console.log(JSON.stringify(res));
  });
}

/* GET tenants */
router.get('/tenants', function(req, res) {
  getTenants((tenants) => {
    res.json(tenants);
  });
});

module.exports = router;
