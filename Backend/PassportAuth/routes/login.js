const path = require('path');
const express = require('express');
const router = express.Router();
const myPassport = require('../auth/passport'); 

const loginController = require('../controller/login');

router.get('/',loginController.getLogin); 


router.post('/',
    myPassport.authenticate('local', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/profile');
    }
);



// Facebook Authentication Routes
router.get('/facebook',
    myPassport.authenticate('facebook')
)

router.get('/auth/facebook/callback',
    myPassport.authenticate('facebook', { failureRedirect: '/login' }),
    (req,res)=>{
        res.redirect('/profile');
    }
);


// Google Authentication Routes
router.get('/google',
    myPassport.authenticate('google', {scope: ['profile']})
)

router.get('/auth/google/callback',
    myPassport.authenticate('google', { failureRedirect: '/login' }),
    (req,res)=>{
        res.redirect('/profile');
    }
);

module.exports=router;