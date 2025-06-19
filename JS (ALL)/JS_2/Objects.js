// Objects - Data structure which is a collection of key-value pairs.
// Data is not ordered.
// key: value => its a property of the object
// const person = {
//     name: "John",
//     age : 30,
//     isAdult: true,
//     favColor: ["red", "blue", "green"]
// }

// console.log(person);

// Accessing properties of an object (use dot operator)
// console.log(person.name); // John
// console.log(person.age); // 30  
// console.log(person.isAdult); // true

//by subscript operator
// console.log(person["name"]); // John
// console.log(person["fav"+"Color"]); // ["red", "blue", "green"]
// We can do operations with this subscript operator.

// Adding new properties
// person.email = "johndear69@gmailcom";

// Modifying existing properties    
// person.age = 42;

// Deleting properties
// delete person.isAdult;

// console.log(person);

// Iterating over an object
// for (let key in person) {
//     console.log(key, ":", person[key]);
// }

//OR

// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }

// Check if a property exists
// console.log("name" in person); // true
// console.log("isAdult" in person); // false