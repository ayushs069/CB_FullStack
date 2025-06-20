// To create a basic web server with Node.js to deliver HTML pages.
const http = require('http');
const port = 8080;  // port number where our web server will listen for incoming requests from client.
const fs = require('fs');

// createServer() Initializes appplication to listen for incoming web requests from users(visible in terminal).

const server = http.createServer((req , res)=>{         // request respone cycle
    // console.log(req.url);
    res.writeHead(200,{                                // sending html css to client from server when port is 200
        'Content-Type':'text/html'
    });

    // Read a file directly -index.html 
    // fs.readFile('./index.html',(err,data)=>{
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     res.end(data);
    // })

    if(req.url == '/') file ="index.html"
    else if(req.url == '/profile') file ="profile.html"
    else file = "signin.html"

    fs.readFile(file,(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
            res.end(data);
        })



    // res.end('<h1 style = color:orange>Hello , user here is your requested data!</h1>');
});


// server.listen() – Launches the HTTP server and listens for incoming requests.

server.listen(port, (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("server started at ", port);
});


// res.send() ---- It tells the server that user is done sending data.
// Without it, the browser will keep waiting for more response data.


//