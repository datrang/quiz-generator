var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/', function(req, res, next) {
  let category = req.query.category;
  let body = {category};

  fetch('http://localhost:3001/', {
      method: 'post',
      body:    JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json())
  .then(json => res.send(json));
});

router.post('/', function(req, res, next){
  let category  = req.body.category;
  let answers   = req.body.answers;
  let correct   = 0;
  let incorrect = 0;
  let body = {category};
  fetch('http://localhost:3001/', {
      method: 'post',
      body:    JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
  })
  .then(res  => res.json())
  .then(json => {
    for(let i = 0; i < json.questions.length; i++){
      if(json.questions[i].answer == answers[i]){
        correct++;
      }else{
        incorrect++;
      }
    }
    res.json({"correct": correct,
              "incorrect": incorrect});
  });
});

module.exports = router;
