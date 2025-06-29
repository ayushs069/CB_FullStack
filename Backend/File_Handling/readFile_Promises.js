// read file using Promises & async-await
// fsPromises.readFile( path, options )

const {readFile} = require("fs/promises");

// let file = readFile("hello.txt", "utf-8"); // Return a promise

// // either metion utf8 encoding or use data.toString();

// file.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log("Error", err);
// })

// async - await
async function readData(){
    let data = await readFile('hello.txt', 'utf-8');
    console.log(data);
}

readData();

console.log("File read asynchronously");