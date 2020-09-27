var express = require('express');
var router = express.Router();
var ip = require("ip");

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index.html', { title: 'Hello World!', content: 'Containerized nodejs application', ipaddr: 'served from: '+ip.address() });
});

router.get('/hello/:msg', function(req, res, next) {
   console.log("GET Method");
   var result = {};
   result["msg"] = process.env.GREET || 'Hello '+ req.params.msg;
   res.send(result);
});

router.post('/hello', function(req, res, next) {
   console.log("POST Method");
   var result = {};
   result["msg"] = process.env.GREET || 'Hello '+ req.body.msg;
   res.send(result);
});
module.exports = router;
