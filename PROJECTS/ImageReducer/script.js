const fs = require('fs');

// // 1. Read a file synchronously
// let file = fs.readFileSync('img.png'); // read synchronously

// // console.log(file); // Output: Raw data called buffer

// // 2. Convert file to string (base64 encoded)
// let newFile =file.toString('base64');  // name of encoding

// console.log(newFile);

// //3. Write the file
// fs.writeFileSync("img.txt",newFile);

//4. Restoring image back from text file 'img.png'
newFile = fs.readFileSync("img.txt",{encoding: 'utf-8'});

let buffer = Buffer.from(newFile, 'base64');
console.log(buffer); // Output: Buffer object

fs.writeFileSync("luffy.png",buffer);

//5. Reducing image size by JIMP
const Jimp = require('jimp');

Jimp.read('luffy.png',(err,image)=>{
    if (err) throw err;
    image
    //  .resize(256, 256)
     .quality(60)
     .write('small_luffy.png');
});
  
