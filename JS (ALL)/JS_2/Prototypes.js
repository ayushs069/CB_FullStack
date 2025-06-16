//Prototypes & Protoypal inheritance 
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     isAdult: true
// }

// const p1 = Object.create(person);
// person acts as a prototype for p1
// const p2 = Object.create(p1);
// p1 acts as a prototype for p2

// console.log(person);
// console.log(p1); // {}
// console.log(p2); // {}

// console.log(p2.firstName); // John
// console.log(p1.lastName); // Doe

// p1 is an object that inherits from person but is empty , but it can access all properties from person.
// But it does not show them in its own properties when we console p1 directly.
// p2 is an object that inherits from p1, which in turn inherits from person.

//__proto__ is a property that points/refernces to the prototype of an object(parent of the object).
// console.log(p2.__proto__ === p1); // true
// console.log(p1.__proto__ === person); // true

// console.log(p2.__proto__); // {} - address from where it inherits properties
// console.log(p1.__proto__); // { firstName: 'John', lastName: 'Doe', age: 30, isAdult: true }

// For person now -
// console.log(person.__proto__); // {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// console.log(person.__proto__ === Object.prototype); // true
// Object.prototype is the top-level prototype in JS. All objects inherit from it in JS.

// console.log(Object.prototype.__proto__); // null - as it is the top-level prototype, it does not have a parent prototype.
// It is the end of the prototype chain.

 

// p1.name= 'Jane'; // Adding a new property to p1
// console.log(p1); // { name: 'Jane' }

// console.log(p2.name); // Jane - p2 can access the name property from p1 after searching in its local properties and then in the prototype chain.

