var express = require('express');
var router = express.Router();
var ip = require("ip");

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index.html', { title: 'Hello World!', content: 'Containerized nodejs application', ipaddr: 'served from: '+ip.address() });
});

router.get('/hello/:msg', function(req, res, next) {
   var result = {};
   result["msg"] = req.params.msg;
   res.send(result);
});

module.exports = router;
