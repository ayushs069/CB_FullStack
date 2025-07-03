const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const hbs = require('hbs');
const PORT = 4444;

app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs')
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(path.join(__dirname,'views','partials'));

const routeHandler = require('./routes/blogsRoute');
app.use('/',routeHandler);

mongoose.connect('mongodb+srv://ayushsingh:<db_PWD>@ayushsingh.oqzzvso.mongodb.net/myBlogs?retryWrites=true&w=majority&appName=AyushSingh')
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch(err=>{
        console.log("mongoose couldnt connect",err);
    })
