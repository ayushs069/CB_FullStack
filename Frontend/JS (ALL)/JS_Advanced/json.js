// JSON - JavaScript Object Notation
// It is a format by which we can exchange data over the internet between a server and a client.
// JSON is a string representation of a JavaScript object.

// let obj={
//     a:"Hello",
//     b:true,
//     c:1011123,
//     d:[1,2,3,4,5],
//     e:{
//         "dance": "Bharatnatyam"
//     }
// }

// Converting JavaScript object to JSON string
// console.log(JSON.stringify(obj));

// Converting JSON string to JavaScript object
// let jsonOBJ = JSON.stringify(obj);

// console.log(JSON.parse(jsonOBJ));

// Example of JSON 
let jsonEx ={
    "name": "John",
    "age": 30,
    "city": "New York",
    "isStudent": false,
    "courses": ["Math", "Science", "History"],
    "address": {
        "street": "123 Main St",
        "zipCode": "10001"
    }
}
// Alaways use double quotes for keys and string values in JSON
// Except for boolean and number values, which can be without quotes
// undefined and functions cannot be represented in JSON
// arrays are represented using square brackets [], and they can hold multiple values.
// and JSON can be nested 
// the order of keys is not guaranteed in JSON , key-values pairs r unordered.

console.log(jsonEx);

// Converting JSON string to JavaScript object
let jsonExString = JSON.stringify(jsonEx);
console.log(jsonExString);




// nested JSON example
let nestedJson = {
    "name": "Alice",
    "details": {
        "age": 25,
        "address": {
            "city": "Wonderland",
            "zipCode": "12345"
        }
    },
    "hobbies": ["reading", "adventure"]
};  
console.log(nestedJson);
// Here, we have a nested JSON object where "details" contains another object with "address" as a nested object.



// NOt A JSON example
let notJson = {
    name: "Alice",
    age: 25,

    address: {
        city: "Wonderland",
        zipCode: "12345"
    },
    // keys without quotes are not valid in JSON
    hobbies: ["reading", "adventure"],
    favColor: undefined,           // undefined is not allowed in JSON
    greet: function() {            // functions are not allowed in JSON
        console.log("Hello!");
    }
};
// console.log(notJson);
