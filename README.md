### sample rest api for testing 

- start service : `npm start`


For Testing of recaptcha v3 / enterprise

export GOOGLE_CLOUD_PROJECT=xxx
export SITE_KEY=xxx
export environmental credentials for your service account key

#### Endpoints:

The endpoints below still works but the main html page has been instrumented for testing or recaptcha

- http://<host>:<port>/ 
  
  returns a webpage

- `curl -X GET http://<host>:<port>/hello/world`

  echo message via GET, returning `{"msg":"hello, world"}`, set env parameter `GREET` to change greeting message.

- `curl -X POST -H 'Content-type: application/json' -d '{"msg": "world"}' http://<host>:<port>/hello`

  echo message via POST, returning `{"msg":"hello, world"}`, set env parameter `GREET` to change greeting message.


