// this keyword - refers to the current object


// 1. Implicit binding - when a method is called on an object
// this refers to the object that the method is called on.

// const obj ={
//     name: 'Alice',
//     age : 30,
//     sayName: function() {
//         console.log(this); // logs the current object(obj)
//     },

//     favColor:{
//         color : 'blue',
//         sayColor: function() {  
//             console.log(this); // logs the favColor object
//         }
//     }
// };

// console.log(obj.sayName); // [Function: sayName]
// console.log(obj.sayName()); // { name: 'Alice', age: 30, sayName: [Function: sayName] }
// here this refers to the whole obj (object) , the object that the method is called on 

// console.log(obj); // { name: 'Alice', age: 30, sayName: [Function: sayName], favColor: { color: 'blue', sayColor: [Function] } }
// console.log(obj.favColor); // { color: 'blue', sayColor: [Function] }
// console.log(obj.favColor.sayColor()); // { color: 'blue', sayColor: [Function] } 



// 2. Explicit binding - using call, apply, or bind to set the value of this explicitly

// function fun(name,age) {
//     console.log(name);
//     console.log(age);
//     console.log(this); // logs the window object --- Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// }


// We want this keyword in function to point to this a object

// const a= {
//     m:"hello",
//     n: 10
// }

// fun('John', 25);

// Using call to set the value of this explicitly to object a
// fun.call(a, 'John', 25); // John 25 { m: 'hello', n: 10 }
// OR
// Bind Method - also does the same thing as call but returns a new function
// const f = fun.bind(a);

// f('John', 25); // John 25 { m: 'hello', n: 10 }



// 3. new keyword binding - when a function is called with the new keyword, this refers to the newly created object.
// const Person = function(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this); // logs the new object created
// }
// const p1 = new Person('Alice', 30); // Person { name: 'Alice', age: 30 }
// here this refers to the new object created by the Person constructor function p1

// const p2 = new Person('Bob', 25); // Person { name: 'Bob', age: 25 }
// here this refers to the new object created by the Person constructor function p2



// 4. default keyword binding - when a function is called without any context, this refers to the global object (window in browsers)
// window is the default binding 
// if all the 3 bindings are not used then this refers to the global object(i.e window)

// function defaultBinding() {
//     console.log(this); // logs the window object in browsers
// }
// defaultBinding(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

