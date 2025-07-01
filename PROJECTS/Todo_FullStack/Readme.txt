------------- IMPORTANT --- FLOW --------------------

1.client sends a request from index.html , which goes to script.js , 

2.script.js sends a request to the server, which is handled by the routes in todo.js,

3.then the request is handled by the controller in todocontroller.js,

4.and finally the model in todo.js is responsible for the db operations.

5.The response is sent back to the client and rendered in the index.html file.
