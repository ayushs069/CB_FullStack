const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if(!req.user) return res.redirect('/login'); 

    console.log(req.user);
    res.render('profile',{
        username: req.user.username
    });
})

module.exports = router; 