// Class Syntax

// In JS , there are no classes like in other languages, but we can create classes using the `class` keyword.
// We use class syntax to make constructor functions and prototypes easier to work with.
// It makes easier to undersand and write code.

class Car{

    // constructor is the first function to be called
    // when an object is created from a class

    constructor(name,price,isDiskBrake){
        this.name = name;
        this.price = price;
        this.isDiskBrake = isDiskBrake;
    }

    // Normal method/function
    startCar(){
        console.log(`${this.name} Car started`);
    }


    // Getter method
    get getName(){
        return this.name;
    }
    // not called as getName(), but as getName. i.e not as method but as property


    // Setter method
    set setPrice(price){
        this.price = price;
    }
    // Similarly not called as setPrice(), but as setPrice = "price"
    ;


    // Static method
    static applyBrake(){
        console.log("Brakes applied on the car");
    }
    // Directlty called by class name.
    // i.e car.applyBrake()

}

const c1 = new Car("BMW", 500000, true);



// Inheritance - When a class inherits properties and methods from another class
class RacingCar extends Car{

    constructor(name, price, isDiskBrake, maxSpeed,color){
        super(name, price, isDiskBrake);     // super keyword calls the constructor of parent class
        this.maxSpeed = maxSpeed;
        this.color = color;
    }

    get getMaxSpeed(){
        return this.maxSpeed;
    }
    get getColor(){
        return this.color;
    }

}

const rc1 = new RacingCar("Ferrari", 1000000, true, 400, "Red");
