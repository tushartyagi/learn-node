var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

console.log("here");
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello World' });
});

router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function(e, docs) {
    res.render('userlist', {
      "userlist" : docs
    });
  });
});


router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Add new user' });
});

router.post('/adduser', function(req, res) {

  var db = req.db;

  var username = req.body.username;
  var useremail = req.body.useremail;
  console.log(username, useremail);



  

  
  var collection = db.get('usercollection');
  collection.insert({
    "username" : username,
    "email" : useremail
  }, function (err, doc) {
    if (err) {
      res.send("there was error storing information in teh databaes");
    }
    else {
      res.location("userlist");
      res.redirect("/userlist");
    }
  });
});
	

module.exports = router;
