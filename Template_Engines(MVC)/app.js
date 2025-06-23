const express = require('express');
const app = express();
const path = require('path');

// setup the hbs engine 
// view-engine converts templates (like .hbs, .ejs) into real HTML shown to users in web apps.
app.set('view engine', 'hbs');

const PORT = 8888

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

// render data inhbs
app.get('/learnhbs',(req,res)=>{
    res.render('index.hbs',{
        title : 'Learn HBS'
    });
});

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})

// .hbs must be set up inside view dir otherwise do this for changing folder name
// app.set('views','newFolder');
