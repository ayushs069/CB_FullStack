//Middlewares in Node.js are functions that run in between when a user sends a request and the server sends a response.

const express = require('express');
const app = express();


// function m1(req,res,next){
//     console.log('Running m1');
    

//     // errors in middleware :
//     // whenever sending a response, we should never return multiple responses.
//     if(req.query.q==1){
//             return res.send('Hello world');
//         }


//     next(); 
//     // passes control to the next middleware in chain of middleware.
//     // Otw, the req would be stuck here, and no response would have been sent.
// }


// function m2(req,res,next){
//     console.log('Running m2');
//     next();
// }


// function m3(req,res,next){
//     console.log('Running m3');
//     next();
// }

// // Global middlewares running for every request/route either wrong or correct
// app.use(m1);
// app.use(m2);
// app.use(m3);

// app.get('/',(req,res)=>{
//     res.send('Learning middlewares');
// })





// 3rd part - flow of execution
function m11(req,res,next){
    console.log('Pre running m11');
    next();
    console.log('Post running m11');
}

function m12(req,res,next){
    console.log('Pre running m12');
    next();
    console.log('Post running m12');
}

function m13(req,res,next){
    console.log('Pre running m13');
    next();
    console.log('Post running m13');
}

app.use(m11);
app.use(m12);
app.use(m13);
// if not using app.use() again ,irectly pass them in route handler function

app.get('/',m11,m12,m13, (req,res)=>{
    console.log('Pre sending response')
    res.send('Learning middlewares');
    console.log('Post sending response')
})

// O/P- 
// Pre running m11
// Pre running m12
// Pre running m13
// Pre sending response
// Post sending response
// Post running m13
// Post running m12
// Post running m11


app.listen(8080,()=>{
    console.log('Server at http://localhost:8080')
})
