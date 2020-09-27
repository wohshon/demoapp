### sample rest api for testing 

- start service : `npm start`

#### Endpoints:

- http://<host>:<port>/ 
  
  returns a webpage

- `curl -X GET http://<host>:<port>/hello/world`

  echo message via GET, returning `{"msg":"hello, world"}`, set env parameter `GREET` to change greeting message.

- `curl -X POST -H 'Content-type: application/json' -d '{"msg": "world"}' http://<host>:<port>/hello`

  echo message via POST, returning `{"msg":"hello, world"}`, set env parameter `GREET` to change greeting message.


