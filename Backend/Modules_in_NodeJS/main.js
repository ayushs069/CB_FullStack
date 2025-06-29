//Modules in Node JS
// console.log(add(13,40)) // error because add() is not present in this file


const lib = require('./lib')

//1. By global space (bad)
// console.log(add(10,20));


//2 . By modules exporting (good)

// console.log(lib.addition(10,20))
// console.log(lib.subtraction(10,20))


let lib1 = require('./lib1');
let lib2 = require('./lib2');

// 1st Time
// console.log(lib1);
// {
//     add: [Function: add],
//     a: 10,
//     lib2: { sub: [Function: sub], b: 20, lib1: {} }
//  }

// console.log(lib2); 
// { sub: [Function: sub], b: 20, lib1: {} }


//2nd Time
console.log(lib1);
/* <ref *1> {
  lib2: { lib1: [Circular *1], b: 20, sub: [Function: sub] },
  a: 10,
  add: [Function: add]
} */

console.log(lib2);
/* <ref *1> {
    lib1: { lib2: [Circular *1], a: 10, add: [Function: add] },
    b: 20,
    sub: [Function: sub]
  } */