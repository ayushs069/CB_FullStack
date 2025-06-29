// fsPromises.writeFile(file , data , options) 

const{writeFile} = require('fs/promises');

let data = " I am writing using Async Await";

// let write = writeFile(
//     "world.txt",
//     data,
//     {
//         encoding: 'utf8',
//         flag: 'a'
//     }

// )

// write.then(()=>{
//     console.log("File written to disk successfully");
// }).catch((err)=>{
//     console.log("Error ",err.message);
// })

// console.log("running At Thee Last")

// async - await => to synchronise the asynchronised task

async function writeData(data){
    await writeFile(
        "world.txt",
        data,
        {
            encoding: 'utf8',
            flag: 'a'
        }
    )
    console.log("I am inevitable - lord thanos")
}

writeData(data);

console.log("running At Thee Last");
