var express     = require('express');
var router      = express.Router();

router.post('/', function(req, res, next){
    let category = req.body.category;
    var test = require("../quiz/"+ category)
    res.json(test);
});

module.exports = router;
