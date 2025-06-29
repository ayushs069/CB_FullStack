console.log("Hello To The App");

// Sum  of 2 No.
// let a =10;
// let b=20;
// console.log(a+b);

// console.log(process);
// console.log(global.process);

console.log(process.argv); // Command line arguments


let a = parseInt(process.argv[2])
let b = parseInt(process.argv[3])

console.log("after adding",a+b);
