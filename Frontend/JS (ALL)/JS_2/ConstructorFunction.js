// Constructor Function - Used to create objects.
// new keyword is used to create an instance of the constructor function.
function Person(name, age) {
    this.name = name; 
    this.age = age;  
    // this.sayName = function() {
    //     console.log(this.name);
    // } 
}

// Using prototype to add methods to the constructor function so that memory is optimized .
// This way, all instances share the same method instead of each instance having its own copy.
// Like p1 and p2 will share the same sayName method from the prototype.

Person.prototype.sayName = function() {
    console.log(this.name);
}

// Creating instances of Person
const p1 = new Person("John", 30);
const p2 = new Person("Jane", 25);

//Before method is added to the prototype
// console.log(p1); //Person {name: 'John', age: 30, sayName: ƒ}
// console.log(p2); //Person {name: 'Jane', age: 25, sayName: ƒ}
// It has extra sayName method in each instance increasing memory usage.

//After method is added to the prototype
console.log(p1); // Person { name: 'John', age: 30 }
console.log(p2); // Person { name: 'Jane', age: 25 }
// Now both instances share the same sayName method from the prototype.