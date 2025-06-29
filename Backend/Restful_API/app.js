// Rest - Representational State Transfer 
// API = Application Programming Interface

// It is an architecture that is followed between client and server to communicate
// also called language of internet

// Methods of REST API
// We want to do CRUD operations between client and server
// C: POST Request      --- To create something
// R: GET Request       --- To read something
// U: PUT Request       --- To update something
// D: DELETE Request    --- To delete something

// Status codes :
// 200 Range Code: OK
// 400 Range Code: Hence error on client side
// 500 Range Code: Hence error on server side

const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

const methodOverride = require('method-override');


app.use(express.urlencoded({extended:true})); // To read the data submitted using post method (usually form data from html)
app.use(express.static(path.join(__dirname,'public'))); // To send static html file
app.use(methodOverride('_method')); 

let students = [
    {id: 1, name: 'pqr'},
    {id: 2, name: 'lmn'},
    {id: 3, name: 'xyz'}
]

//creating students by post request
app.post('/students',(req,res)=>{
    const {id,name} = req.body;

    students.push({id, name});
    res.status(200).send(students);
})

// reading students by get request
// ALL STUDENTS
app.get('/students',(req,res)=>{
    res.status(200).send(students);
})

//PARTICULAR STUDENT BY ID
app.get('/students/:id',(req,res)=>{
    const {id} = req.params;
    let s = students.filter(s=> s.id == id);

    if(s.length == 0) 
        res.status(400).send('Student not found');
    else 
        res.status(200).send(s);
})



// updating students name by put request
app.put('/students/:id',(req,res,next)=>{
    const {id} = req.params;
    const {name} = req.body;

    students = students.map((s)=>{
        if(s.id == id){
            return{id : s.id,name}
        }
        else{
            return s;
        }
    })

    res.status(200).send(students);
})

// deleting students name by put request
app.delete('/students/:id',(req,res,next)=>{
    const {id} = req.params;

    students = students.filter((s)=>{
        if(s.id == id){
            return false;
        }
        else{
            return true;
        }
    })

    res.status(200).send(students);
})


app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})