// PassportJS - It is a middleware for Node.js that simplifies the process of handling authentication in web applications.
// It provides a consistent API for various authentication strategies, such as local username/password, OAuth, OpenID, and more. 

// It helps us to login via various methods
// login locally - username and password
// login via Google, Facebook, Twitter, Facebook, etc.

require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const port = process.env.PORT || 4444;
const flash = require('connect-flash');
const myPassport = require('./auth/passport'); 

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(flash());

const mongoUrl = process.env.DB_PATH;
const sessionSecret = process.env.SECRET_KEY;

app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl})
}));

const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const profileRoute = require('./routes/profile');


// Initialize Passport and use it as middleware
app.use(myPassport.initialize());
app.use(myPassport.session());


app.get('/',(req,res)=>{
    res.redirect('/login')
})
app.use('/signup', signupRoute);
app.use('/login', loginRoute);
app.use('/profile', profileRoute);
// Logout route to handle user logout
app.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        res.redirect('/');
    });
});

mongoose.connect(mongoUrl)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });