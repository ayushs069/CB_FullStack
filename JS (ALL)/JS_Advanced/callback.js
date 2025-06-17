// Callback Function - A function passed as an argument to another function


// 1. function cb(){
//     console.log("Inisde Callback function");
// }

// function fun(f){
//     console.log("Inside fun function");
//     f(); // Calling the callback function
// }

// fun(cb); // Passing the callback function (cb) as an argument

// Output: Inside fun function
//         Inisde Callback function


// 2. Or like this - putting whole function as an argument
// fun(function cb(){
//     console.log("Inside cb in arguement function");
// });


// 3. Or like this - using arrow function(anonymous function)
// fun(()=>{
//     console.log("Inside arrow cb function");
// });

// Output: Inside fun function
//         Inside arrow cb function 
// (same o/p for all the above cases)



// Explanation:
// f is a parameter of the function fun. 
// It expects a function to be passed as an argument when fun is called.

// When we write fun(() => { console.log("Inside arrow cb function"); });, we're passing an arrow function as the value of f.
// So f() works because:
// 1. f is assigned that arrow function.
// 2. f() calls the function we passed.



// Async Programming -

// JS is a single threaded language, meaning it can only do one thing at a time.
// It is also synchronous, meaning it wiil execute next command only after the previous one is completed.

// Browser has many web APIs like setTimeout, setInterval, fetch, etc.
// These APIs allow us to perform asynchronous operations.
// Asynchronous operations are those that can run in the background without blocking the main thread.
// Callback functions are often used to handle the result of asynchronous operations.

// function fun(){
//     for (let i = 1 ; i <= 10 ; i++){
//         console.log(i);
//     }
// }


// function cb(){
//     console.log("Hello from CB Function");
// }

// console.log("Start");   

// syntax of setTimeout()
// setTimeout(callback function, time in milliseconds)

// setTimeout(fun,5000); // This will call the fun function after 5 seconds

// const id = setInterval(cb,3000); // This will call the cb function every 3 seconds

// To stop the interval, we can use clearInterval(id) after some time
// setTimeout(() => {
//     clearInterval(id); // This will stop the interval after 10 seconds
// }, 10000);


// console.log("End");

// So we made ir run asynchronously using setTimeout and setInterval.





// Three calllback functions a b c one calling one another
function a(callA) {
    console.log("Function A");
    callA();
}
function b(callB) {
    console.log("Function B");
    callB();
}
function c() {
    console.log("Function C");
}   

// Calling the functions in sequence
a(()=>{
    b(()=>{
        c();
    })
});


// Output:
// Function A
// Function B
// Function C

// Explanation:
// 1. Function a is called first, it logs "Function A".
// 2. Then it calls the callback function, which is b.
// 3. Function b logs "Function B" and calls its callback, which is c.
// 4. Function c logs "Function C".
// This is an example of callback hell, where callbacks are nested within each other.