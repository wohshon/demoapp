var express = require('express');
var router = express.Router();
var ip = require("ip");

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index.html', { title: 'Homepage', content: 'reCaptcha v3 testing', ipaddr: 'served from: '+ip.address(), subContent: " There is a homepage action generated onload." });
});

router.get('/goto',function(req,res){
    console.log(req.query.page);
    let page = req.query.page;
   res.render(page, { title: 'page:'+page, content: 'reCaptcha v3 testing', ipaddr: 'served from: '+ip.address()});
});

router.post("/login", function(req, res){
    console.log("==========login "+req.body.inputEmail);
    res.render("page1.html", { title: 'Welcome, '+req.body.inputEmail, content: 'login success', ipaddr: 'served from: '+ip.address()});

    //res.status(200).send("login ok");

});

//recaptcha api
const project_id =  process.env.GOOGLE_CLOUD_PROJECT || "no project id"
const siteKey = process.env.SITE_KEY || " no site key "
let assessmentResponse;

router.post('/sendToken', async function(req, res, next){
    console.log("backend - send token "+req.body.token);
    let token = req.body.token;
    let score = await send(token);
    res.status(200).send(score);
});

async function send(token) {
     const {
    RecaptchaEnterpriseServiceClient,
  } = require('@google-cloud/recaptcha-enterprise');
  const client = new RecaptchaEnterpriseServiceClient();
   // format the path to the project (it should be prefaced with projects/).
  const formattedParent = client.projectPath(project_id);
  // assessment should contain event with RESPONSE_TOKEN and RECAPTCHA_SITE_KEY:
  const assessment = {
         event: {
            token: token,
            siteKey: siteKey
        }
  };

  const request = {
    parent: formattedParent,
    assessment: assessment,
  };

    assessmentResponse = await client.createAssessment(request);
    let score = await analyseAssessment();
    return score;
}

async function analyseAssessment() {
    resp = (assessmentResponse[0]);
    console.log(resp)
    let score = {score: resp.riskAnalysis.score, action: resp.tokenProperties.action };
    console.log(score);
    return score;
}
module.exports = router;
