// router is used to segregate the routes & keep code cleaner
// express.Router() returns a new router instance
// Router can do get & post req but not the router.listen() method like app.listen() 


// To create routers we do app.use in main file and router.get() in separate file


const express = require('express');
const router = express.Router(); 


const teachers = [
    'Kartik',
    'Mosin',
    'Monu',
    'Varun'
];

router.get('/', (req, res,next) => {
    res.send(teachers);
})

router.post('/add', (req, res, next) => {
    const {name} = req.body;
    teachers.push(name);
    res.redirect('/teachers');
})



// Using router in main file
module.exports = router;