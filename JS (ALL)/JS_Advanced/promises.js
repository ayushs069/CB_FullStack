// Promises 

// It is a way to handle asynchronous operations in JavaScript.
// A Promise represents a value that may be available now, or in the future, or never.
// A Promise is like a guarantee in JS that says:
// It will give a result later — either success or failure.
// A Promise is a placeholder for a value that is not available yet, but will be in the future.

// STATES OF A PROMISE:
// 1. Pending: When we create a promise, it is in the pending state.
// 2. Resolved (Fulfilled): The promise completed successfully, it gets resolved.
// 3. Rejected: The promise failed, it gets rejected.
// 4. Settled: The promise is either resolved or rejected, it is no longer pending, we say it is settled.

// Created using the Promise constructor
// Arguements in Promise constructor are resolve and reject functions.
//if the operation is successful, we call resolve(value)
//if the operation fails, we call reject(error)


// let watchingMovies = true;

// Creating Promise p
// let p = new Promise(function(resolve,reject){
//     if (!watchingMovies){
//         return reject("No need of Popcorns!");
//     } else{
//         resolve("Popcorns are ready!");
//     }
// });

// To call the promise, we use .then() method. Used to define resolve and reject functions.
// p.then(
//     //This function will run on success - it is where resolve is defined
//     function(msg){
//         console.log("Success : " ,msg);
//     },

//     //This function will run on failure - it is where reject is defined
//     function(err){
//         console.log("Failure : " ,err);
//     }
// )
//Output: Success :  Popcorns are ready! // as watchingMovies is true




// .catch() // is used to handle the rejection of a promise.
// let watchingMovies = false;

// Creating Promise p
// let p = new Promise(function(resolve, reject) {
//     if (!watchingMovies) {
//         return reject("No need of Popcorns!");
//     } else {
//         resolve("Popcorns are ready!");
//     }
// });
   
// p.then(
//     // This function will run on success 
//     function(msg) {
//         console.log("Success : ", msg);
//     }
// )   

// .catch(
//     // This function will run on failure 
//     function(err) {
//         console.log("Failure : ", err);
//     }
// )   
// Output: Failure :  No need of Popcorns! // as watchingMovies is false
// Similar to .then() but only handles the rejection case.





// Add Delay to the Promise
// let watchingMovies = true;


// Creating a delay function
// function delay(){
//     let currentTime = new Date().getTime(); // current time in milliseconds from 1 Jan 1970
//     console.log(currentTime);
//     while(currentTime + 3000 > new Date().getTime()) {
//         // It blocks the execution of the code for 3 seconds
//         // It tells that while the current time is less than 3 seconds from now, keep running the loop
//     }
// }

// // Promise p
// let p = new Promise(function(resolve,reject){
//     delay();
//     if (!watchingMovies){
//         return reject("No need of Popcorns!");
//     } else{
//         resolve("Popcorns are ready!");
//     }
// });

// // .them() called
// p.then(
//     // resolve
//     function(msg){
//         console.log("Success : " ,msg);
//     },

//     //reject
//     function(err){
//         console.log("Failure : " ,err);
//     }
// )
// Output: Success :  Popcorns are ready! 
// as watchingMovies is true and delay of 3 seconds is added before the promise is resolved




// PROMISES AS FUNCTIONS
// function willYouMarryMe(fightsCount) {
//     // This function returns a promise
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if (fightsCount > 10) {
//                 return reject("Too many fights, I can't marry you! ");
//             } else {
//                 resolve("Yes, I will marry you haappily! ");
//             }
//         },3000);
//     })
// }

// Calling the function willYouMarryMe - it returns a promise
// willYouMarryMe(100)

// resolve and reject r defined here & called on upper promise
// .then(
//     (msg)=>{
//         console.log( msg);
//     },
//     (err)=>{
//         console.log(err);
//     }
// )

// Output after 3 seconds: Yes, I will marry you!



// WHY We USE PROMISES?
// 1. They make the code cleaner and easier to read.
// 2. They help to avoid callback hell.
// 3. They provide a way to handle errors in asynchronous code.


// Work : to download a file

function downlaod(url){
    console.log("Download stared");
    return new Promise((resolve, reject) => {

        let downloadedFile = url.split("/").pop(); // splitting the url from "/" and popping the last element to get file name

        setTimeout(()=>{
            console.log("Download completed"); 
            resolve(downloadedFile); // resolving the promise
        },2000);
    })
}


function compress(downloadedFile){

}

function upload(compressedFile){

}

downlaod("https://codingblocks.com/myfile.mp4") // giving promise

.then(
    // if download is successful - promise resolved
    (downloadedFile)=>{
        console.log(downloadedFile); // logging the downloaded file name
})

// if download fails - promise rejected
.catch((err)=>{
    console.log(err);
})

// Avoiding the us eof 2 methods in .then() by using .catch() for error handling


// Promises are used over callbacks to avoid callback hell 
// Callback hell is a situation where we have multiple nested callbacks, making the code difficult to read and maintain.

// Promises helps to synchronize the asynchronous code and make it more readable.
// Here , downloading,then compressing and then uploading the file is done in a sequential manner using promises as they r asynchronous in nature.

// We dont want that while compression and upload, the download is blocking the main thread of JS.
// So promises help to avoid that by allowing the code to run asynchronously.