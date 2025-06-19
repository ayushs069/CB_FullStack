//fs.writeFile() is a built-in Node.js function used to create a new file or overwrite an existing file with the given content.

// Syntax - fs.writeFile(path, data, callback)

// const fs = require('fs');
// fs.writeFile


// BY CLLBACK API
const {writeFile} = require('fs'); // destructuring syntax


let data =" New data again !@@@";

writeFile(
    'hello.txt',
    data,
    {                                                   // options
        encoding: 'utf8',
        flag: 'a' // 'w' for writing, 'a' for appending
    },
    (err)=>{
        if(err) return console.log("Error writing file", err);

        console.log("File written to disk successfully");
    }
)