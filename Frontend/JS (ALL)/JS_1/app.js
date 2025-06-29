// // Arithmetic Operators
// let num1 = 8;
// let num2 = 3;

// let add = num1 + num2;        // 11
// let subtract = num1 - num2;   // 5
// let multiply = num1 * num2;   // 24
// let divide = num1 / num2;     // 2.666...
// let modulo = num1 % num2;     // 2
// let power = num1 ** num2;     // 512

// console.log("Add:", add);
// console.log("Subtract:", subtract);
// console.log("Multiply:", multiply);
// console.log("Divide:", divide);
// console.log("Modulo:", modulo);
// console.log("Power:", power);

// // Comparison Operators
// let p = 15;
// let q = '15';

// let equalValue = (p == q);         // true
// let strictEqual = (p === q);       // false
// let notEqual = (p != q);           // false
// let strictNotEqual = (p !== q);    // true
// let greater = (p > 10);            // true
// let lesser = (p < 20);             // true
// let greaterEqual = (p >= 15);      // true
// let lesserEqual = (p <= 14);       // false

// console.log("Equal:", equalValue);
// console.log("Strict Equal:", strictEqual);
// console.log("Not Equal:", notEqual);
// console.log("Strict Not Equal:", strictNotEqual);
// console.log("Greater than:", greater);
// console.log("Less than:", lesser);
// console.log("Greater or Equal:", greaterEqual);
// console.log("Less or Equal:", lesserEqual);

// // Logical Operators
// let loggedIn = true;
// let isAdmin = false;

// let canAccess = loggedIn && isAdmin;   // false
// let canView = loggedIn || isAdmin;     // true
// let isGuest = !loggedIn;               // false

// console.log("Can Access (AND):", canAccess);
// console.log("Can View (OR):", canView);
// console.log("Is Guest (NOT):", isGuest);

// // Assignment Operators
// let score = 50;

// score += 10; // 60
// score -= 5;  // 55
// score *= 2;  // 110
// score /= 5;  // 22
// score %= 6;  // 4
// score **= 2; // 16
// console.log("Final Score:", score);

// // Unary Operators
// let marks = 7;
// let bonus = 12;

// console.log(marks++);  // 7 → prints then increments to 8
// console.log(marks);    // 8 → updated value
// console.log(++bonus);  // 13 → increments then prints


// Decision Making and Loops in JavaScript 
// let a=10;
// let b=20;

// if(a<b){
//     console.log("a is less than b");
// }

// if(b>a){
//     console.log("b is greater than a");
// }

// const  num=99;

// if(num % 2 === 0){
//     console.log("Number is even");
// }else{
//     console.log("Number is odd");
// }


// const age=parseInt (prompt("Enter your age"));

// if(age<18){
//     alert("You are not allowed to enter");
// }
// else if(age>=18 && age<25){
//     alert("You are allowed to enter but cant drink");
// }
// else{
//     alert("You are allowed to enter and drink");
// }


//  for(let num=1;num<=10;num++){
//     console.log(num);
//  }

// for(let num=1;num<=10;num++){
//     if(num === 5){
//         // break;
//         continue; // Skip the rest of the loop when num is 5
//     }
//     console.log(num);
// }
// console.log("Loop ended");


// INFINITE LOOP
// for(let i=100;i>=-1;i++){
//     // console.log(i);
// }


// let i=1; //initialisation
// while(i<=10){
//     console.log(i);
//     i++;  //updation
// }


// for of statement creates a loop that iterates over iterable objects like arrays, strings, etc.
// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// for(let fruit of fruits){
//     console.log(fruit);
// }


// car object - js objects bydefault are not iterable
// const car = {
//     brand: "Toyota",
//     price: 30000,
//     isDiskBrake: true,
// };

// for(let i of car){
//     console.log(i);
// } //TypeError: car is not iterable


// to iterate over objects, we can use for in statement  
// const car = {
//         brand: "Toyota",
//         price: 30000,
//         isDiskBrake: true,
// };

// for(let i in car){
//     console.log(`${i}: ${car[i]}`); // i is the key, car[i] is the value
// }

// do while loop 
// let i = 10;
// do {
//     console.log(i);
//     i++;
// } while(i < 15);
// // The loop will execute at least once even if the condition is false


