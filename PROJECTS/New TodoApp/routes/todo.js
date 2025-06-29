const path = require('path');
const express = require('express');
const router = express.Router();


const todocontroller = require('../controllers/todocontroller');  // importing the controller 


router.get('/gettodos',todocontroller.getGetTodos);

router.post('/addtodo',todocontroller.postAddTodos);

router.post('/deletetodo',todocontroller.postDeleteTodos);

router.get('/increasepriority',todocontroller.getIncreasePriority);

router.get('/decreasepriority',todocontroller.getDecreasePriority);


module.exports = router;