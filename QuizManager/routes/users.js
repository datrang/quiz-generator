var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  username = req.query.username;
  password = req.query.password

  console.log(username);
  console.log(password)

  try{
    user = require('../users/' + username);
    if(user.username == username && user.password == password){
      res.json({'verified': true})
    }else{
      res.json({'verified': false})
    }
  }catch(error){
    res.json({'verified': false})
  }
});

module.exports = router;
