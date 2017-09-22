var express = require('express');
var router = express.Router();
var GitHubApi = require("github");
var mongodb =require('mongodb');

//hosteado en mi servidor propio, el demonio de mongo
var url ="mongodb://165.227.187.208:4536/followers";


// GET JSON de followers
router.get('/getfollowers/:username', function(req, res) {
  var github = new GitHubApi({});
  github.users.getFollowingForUser(
    {username: req.params.username},
    function(err, data){res.json(data);
    });
  });

  //funcion en variable auxiliar al post
  var insertOrg = function(db, callback) {
    db.collection('restaurants').insertOne( {

    }, function(err, result) {
      assert.equal(err, null);
      console.log("Ahora hay otra organizacion en la bd");
      callback();
    });
  };

  // POST de las organizaciones de los perfiles buscados
  //postea a la collection orgs
  router.post('/orgs', function(req, res) {
    var db=req.params.db
    mongodb.connect(url, function(err, db) {
      assert.equal(null, err);
      insertDocument(db, function() {
        db.close();
      });
    });
  });

  module.exports = router;
