const express = require('express');
const router = express.Router(); 


const students = [
    'Travis',
    'Jane',
    'Chris'
];

router.get('/', (req, res,next) => {
    res.send(students);
})

router.post('/add', (req, res, next) => {
    const {name} = req.body;
    students.push(name);
    res.redirect('/students');
})

// Using router in main file
module.exports = router;