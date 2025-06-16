// PRIMITIVE DATA TYPES

// 1. Number
let score = 45;
let bonus = 55;
let total = score + bonus;

// 2. String
let city = "Mumbai";
let country = "India";

// 3. Boolean
let isOnline = false;

// 4. Undefined
let emptySlot;

// 5. Null
let notAssigned = null;

// 6. Symbol
let uniqueId = Symbol("id");

// 7. BigInt
let hugeNumber = 98765432109876543210987654321n;

// Checking types
console.log(typeof total);       // "number"
console.log(typeof country);     // "string"
console.log(typeof hugeNumber); // "bigint"

// SCOPE - var(functional), let & const (block-level)

// VAR EXAMPLE
var mode = "light";
var mode = "dark"; // Redeclared
{
    var mode = "night";
    console.log("Inside block (var):", mode);
}
console.log("Outside block (var):", mode);

// LET EXAMPLE
let count = 1;
// let count = 2;  // Error if uncommented
{
    let count = 10;
    console.log("Inside block (let):", count);
}
console.log("Outside block (let):", count);

// CONST EXAMPLE
const PI = 3.1415;
{
    // const PI = 3.14;  // Error if uncommented
    console.log("Inside block (const):", PI);
}

// STRINGS

let user = "Ayush";
let sayHi = `Hi, ${user}!`;
console.log(sayHi);

let title = "Mr.";
let sentence = `Welcome ${title}${user}, glad to meet you.`;
console.log(sentence);

let longText = `This message
is spread
across multiple lines.`;
console.log(longText);

// STRING METHODS

let message = "  JavaScript is Fun!  ";
console.log(message.toLowerCase());
console.log(message.toUpperCase());
console.log(message.trim());
console.log(message.includes("Fun"));
console.log(message.indexOf("Script"));
console.log(message.replace("Fun", "Powerful"));
console.log(message.replaceAll("a", "*"));

// Destructive methods
let code = "FrontEnd Developer";
console.log(code.substring(8));      // Starts from index 8
console.log(code.substring(0, 5));   // First 5 characters

// NUMBERS

let val1 = 5;
let val2 = 0.75;
let val3 = -15;
let val4 = 0;
let val5 = Infinity;
let val6 = NaN;
let val7 = 2e5;

console.log(Number.isInteger(val1));
console.log(Number.isFinite(val2));
console.log(Number.isNaN(val6));
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// Conversion
let textNum = "456.78";
let asNumber = Number(textNum);
let asFloat = parseFloat(textNum);
let asInt = parseInt(textNum);

console.log(asNumber);
console.log(asFloat);
console.log(asInt);

// RANDOM NUMBERS
console.log(Math.random());
console.log(Math.floor(Math.random() * 50));     // 0 to 49
console.log(Math.floor(Math.random() * 10 + 5)); // 5 to 14
