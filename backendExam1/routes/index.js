var express = require('express');
var router = express.Router();
var GitHubApi = require("github");



/* GET tenants */
router.get('/getfollowers/:username', function(req, res) {
  var github = new GitHubApi({});
  github.users.getFollowingForUser(
    {username: req.params.username},
    function(err, data){res.json(data);
    });
  });

  module.exports = router;
