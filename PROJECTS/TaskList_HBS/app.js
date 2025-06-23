const express = require('express');
const app = express();

const PORT = 8888

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))

//making a tasklist
let tasklist = [];

app.get('/',(req,res)=>{
    res.render('index',{
        tasklist
    });
});

app.post('/addtask',(req,res)=>{
    tasklist.push(req.body.task);
    res.redirect('/'); //redirecting to upper .get fun to get updated tasklist
})

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})