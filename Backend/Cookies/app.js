// Cookies are used to store user preferences and session data
// They are set with an expiration date and can be accessed by the server
// They are used for various purposes, including remembering your preferences, identifying you, monitoring website usage etc

// When client sends a 1st request to the server, the server will set a cookie with a unique identifier
// When the client sends subsequent requests, the server can read the cookie to identify the user
// The cookie can also be used to store user preferences, such as language or theme
// The cookie is sent with every request to the server, allowing the server to identify the user and their preferences

// hence it is a token of authentication

const express = require('express');
const app = express();
const PORT = 4444;
const cookie = require('cookie');

app.use(express.urlencoded({extended:true}));


// not letting user to access the profile page without logging in
app.get('/',(req,res)=>{
    const cookies = cookie.parse(req.headers.cookie || ''); // Parsing cookies from the request headers
    console.log(cookies.loggedIn);                          // Logging the 'loggedIn' cookie value to the console
    if(cookies.loggedIn) {
        return res.redirect('/profile');                    // If the 'loggedIn' cookie exists, redirect to the profile page                   
    }
    res.redirect('/login');                                 // If the 'loggedIn' cookie does not exist, redirect to the login page
})


// Setting a cookie when the user logs in for the first time
app.get('/login',(req,res)=>{
    res.setHeader('Set-Cookie', 
        cookie.serialize(
            'loggedIn', 
            Boolean(true),                                 // Cookie value, can be a string or boolean
            {
                // httpOnly: true,                         // Cookie is not accessible via JavaScript
                // maxAge: 10                                 // Cookie expires in 1 day
            }));
    res.send("Here is the login page");
});


// 
app.get('/profile',(req,res)=>{
    const cookies = cookie.parse(req.headers.cookie || '');           // Parsing cookies from the request headers
    if(cookies.loggedIn) {
        return res.send('Welcome to application');                   // If the 'loggedIn' cookie does not exist, redirect to the home page
    }
    res.redirect('/login');                                         // If the 'loggedIn' cookie exists, redirect to the profile page
})

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})

// To set the cookie we use .setHeader() method 
// To read the cookie we can use req.headers.cookie

