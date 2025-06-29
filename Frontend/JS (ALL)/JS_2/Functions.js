//FUNCTIONS

//function declaration
// function say(){
//     console.log("Hello from say function!");
//  }

// say(); // Calling the function

 
// function add(a, b) { // and b are parameters
//     let result = a + b;
//     // console.log("The sum is:", result); 
//     return result; 
// }
// const result = add(5, 10); // a and b are arguments
// console.log("The sum is:", result); 


// var a=100;
// function fun(){
//     console.log(a);
//     console.log("Hello from fun function!");
// }
// fun(); // Calling the function


// Hoisting in JavaScript (var)
// console.log(a);
// var a=100;

// fun();
// function fun() {
//     console.log("Hello from fun function!");
// }

// O/P:
// undefined
// Hello from fun function!



// Hoisting of (let & const)
// console.log(a); //ReferenceError: Cannot access 'a' before initialization
// let a=300;

// fun();

// function fun() {
//     console.log(a);  
//     console.log("Inside fun function!");
// }




// console.log(b);

// var b=200;

// var square = function(n) {
//     console.log(n*n);
// }

// square(4);

// O/P:
// // undefined
// // 16 



// Function expressions & Arrrow functions are hoisted differently & can't be called before they are defined

// console.log(b);
// var b=200;
// square(4);
// var square = function(n) {
//     console.log(n*n);
// }

// O/P:
// TypeError: square is not a function.


// Function Declaration vs Function Expression
// hiHoisted(); 
// function hiHoisted(){
//     console.log(" Inside Hoisted Function");
// }
// O/P:
// Inside Hoisted Function



// function sum(x,y,z){
//     return x + y + z;
// }
// // console.log(sum(1,2,3)); // 6

// console.log(sum(1,2)); // NaN (Not a Number) because z is undefined


// Default arguments in functions (give def arg in the end always, otw NaN will be returned)
// function sum(x,y,z=5){
//     return x + y + z;
// }
// console.log(sum(1,2)); // 8 (1 + 2 + 5)

// console.log(sum(1,2,3)); // 6 (1 + 2 + 3) 


// Different ways of writing functions

// 1. Normal function
// function fun(x, y) {
//     return x + y;
// }   


// 2. Function stored inside a variable (Function Expression) 
// const square = function squareOfNum(n){
//     return n * n;
// }
// console.log(square(5)); // 25

// CONSOLE O/P for writing square:
// square
// ƒ squareOfNum(n){
//     return n * n;
// }


// 3. Arrow function
// const cube = (n) => {
//     return n * n * n;
// }   
// console.log(cube(3)); // 27
// => is the arrow function syntax

// For single variable like n ,we can also write it like this
// const cube = n => n*n*n; //Implicit return of arrow function
// console.log(cube(3)); // 27


// Higher Order Functions (HOF) - Functions that take other functions as arguments or return another functions
// 1. Example 1 - returning a function from another function
// function fun(){    
//     function innerFun() {
//         console.log("Hello from inner fun");
//     }
//     return innerFun; // Returning the inner function
// }

// const f = fun(); // Calling the outer function returns the inner function
// console.log(f);
// f();  // Hello from inner fun

// First - class functions are functions that can be passed as arguments,
// returned from other functions, and assigned to variables.Example is f here.
      

// 2. Example 2 - passed as an argument to another function
// function multiplyByTwo(n) {
//     return n * 2;
// }

// function a(b){
//     const result = b(6); 
//     return result;
// }

// const answer = a(multiplyByTwo);
// console.log(answer); // 12 (6 * 2)


// Scope - visibility of variables and functions in different phases of a code

// Var. declared with var are functional-scoped, so they are accessed within the function they are declared into.
// Var. declared with let and const are block-scoped, so they are accessed only within the block they are declared into.

// 1. Global Scope - Anything declared outside any function or block.
// var a=100;
// function b() {
//     console.log(a);   
// }
// console.log(a); // 100 (Global Scope)
// b(); // 100 (Global Scope)


// Lexical Environment = Local Memory + Lexical Environment of its parent 
// It shows hierarchy or order.


// 2. Function Scope - Anything declared inside a function is only accessible within that function.
// function checkScope() {
//     if (10>5) {
//       let score = 100;
//     }
//     console.log(score); // ReferenceError: score is not defined
// }
// checkScope(); // Error because score is not accessible outside the if block
  