// Server side

const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

const { mongoConnect } = require('./database/database');  // importing the mongoConnect function from database.js

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))  // this middleware sends static files from the public folder
app.use(express.json());  // if not used this middleware then axios request won't be read

const requestHandler = require('./routes/todo');  // importing the routes from todo.js

app.use('/',requestHandler);


mongoConnect()
    .then(()=>{
        console.log('Connected to the server successfully');
        app.listen(PORT,()=>{
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err=>{
        console.log('Can not connect to our APP, since db in not wokring');
    })



