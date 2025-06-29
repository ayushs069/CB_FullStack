// Server side

const path = require('path');
const express = require('express');
const { request } = require('http');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))  // this middleware sends static files from the public folder
app.use(express.json());  // if not used this middleware then axios request won't be read

const requestHandler = require('./routes/todo');  // importing the routes from todo.js
app.use('/',requestHandler);

// whenever a request is made to the server, it will first go to the app.js and then in routes folder and then to the todo.js file
// then it will go to the todocontroller file in controller folder and then to the needed function
// then it will return the response to the todocontroller.js file and then to the todo.js file and at last to the client side

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})