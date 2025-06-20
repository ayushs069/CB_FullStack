const express = require('express');
const app = express();
const path = require('path');

const PORT = 8888;


// To read that message from post method
app.use(express.urlencoded({extended: true}));


app.listen(PORT,(err)=>{
    console.log(`Server started at http://localhost:${PORT}`);
})


// .get() is used to create a URL path that runs when someone opens a page in the browser.
// app.get('/',(req,res)=>{
//     // console.log(__dirname);
//     res.send("<h1>HELLO CLIENT<h1></h1>");  // Send back a simple HTML response to browser from server
// })


// SENDING repsonse/data from client to server with the help of URL
// 1.Send by uisng params
// app.get('/greet/:name',(req,res)=>{
//     console.log(req);
//     res.send(`HELLO!!! ${req.params.name}`);
// })

// http://localhost:8888/greet/Beluga


// 2. Send by using query parameters
// app.get('/greet',(req,res)=>{
//         console.log(req);
//         res.send(`HELLO!!! Good ${req.query.x} ${req.query.name}`);
// })

// http://localhost:8888/greet?name=Beluga&x=Weekend


// The browser asks for the file.
// The server sends it using res.sendFile().
// app.get('/file',(req,res)=>{
//     res.sendFile(__dirname +'/index.html')
// })

// http://localhost:8888/file



// Chnages in html & css r done automatically .
// But in case of Js,if we add a js file in script tag(html) we need to send the updated file to the client by this,
app.get('/server.js',(req,res)=>{
    res.send(`console.log("Here is the requested server.js file ")`)
})



// Path Module to upper one /file
// In __dirname, confusion can occur if we need to add '/' or not
// BY path.join(a,b) - 2 parameters taken & it joins them. returns a/b (done in node terminal)
// res.sendFile(path.join(__dirname , 'index.html'))

// app.get('/file',(req,res)=>{
//     res.sendFile(path.join(__dirname ,'/index.html'))
// })


 
// To render html css etc make a static folder and place them there 
app.use('/file',express.static(path.join(__dirname,'static')));

// http://localhost:8888/file
// No need to start server again after changes in static folder.



// Sending data from client to server by FORMS
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/greet',(req,res)=>{
    res.send(`HELLO JI GOODMORNING, ${req.query.name}`);
})

// By default request methood in forms in get which shares data in the url itself making it unsafe
// So we use post method method & define app.post ()
app.post('/greet',(req,res)=>{
    // res.send(`HELLO JI GOODnight, ${req.query.name}`);
    // we get data in the body of the request
    res.send(`HELLO JI GOODnight, ${req.body.name}`);

})

// data not sent to url

// get read data from url while post from body.