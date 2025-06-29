// Arrays - Data Structure (linear), which is ordered collection of data.
// Arrays are used to store multiple values in a single variable.

// let nums= [1, 2, 3, 4, 5]; 
// console.log(nums);
// console.log(nums.length); // Length of the array    
// console.log(nums[0]); // Accessing first element of the array
// console.log(nums[3]); // Accessing fourth element of the array


// const fruits=['apple', 'banana', 'orange', 'grape', 'kiwi'];
// console.log(fruits[2]); 
// console.log(fruits[100]);// Undefined


// Arrays are Heterogeneous - They can store different data types in a single array.
// const randomArray = [1,6.44, 'apple', true, null,undefined, { name: 'John' }, [1, 2, 3],NaN];
// console.log(randomArray);


// Arrays r Refernce Types 
// const color = ['red', 'green', 'blue'];
// const colorCopy = color;
// console.log(color);
// console.log(colorCopy);
// //Same output in both cases

// colorCopy.push(1,2,3);
// console.log(colorCopy);
// console.log(color);

// // Both arrays are affected because they point to the same reference in memory.
// console.log(color === colorCopy); // true


// Array methods

// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
// const fruits = ['apple', 'banana', 'orange'];
// fruits.push('grape', 'kiwi');
// console.log(fruits); 

// // 2. pop() - Removes the last element from an array and returns that element.
// console.log(fruits.pop()); // 'kiwi' 

// // 3. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
// console.log(fruits.unshift('mango', 'pineapple'));
// console.log(fruits); // ['mango', 'pineapple', 'apple', 'banana', 'orange', 'grape']

// // 4. shift() - Removes the first element from an array and returns that element.
// console.log(fruits.shift()); // 'mango'
// console.log(fruits); // ['pineapple', 'apple', 'banana', 'orange', 'grape']

// 5. slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// Its a non-destructive method, meaning it does not modify the original array.
//SYNTAX -
// 1. array.slice()
// 2. array.slice(start)
// 3. array.slice(start, end)
// const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// console.log(colors.slice(1,3)); // ['green', 'blue']
// console.log(colors.slice(2)); // ['blue', 'yellow', 'purple']
// console.log(colors.slice()); // ['red', 'green', 'blue', 'yellow', 'purple'] - whole copy of the array


// 6. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Its a destructive method, meaning it modifies the original array.
// SYNTAX -
//aaray.splice(start, deleteCount, item1, item2, itemN)
// const colors = ['red', 'green', 'orange', 'purple']; 

// console.log(colors.splice(1, 2, 'black', 'white','magenta')); // ['green', 'orange'] - removed elements
// console.log(colors); // ['red', 'black', 'white', 'magenta', 'purple'] - modified original array


// 7. join() - Joins all elements of an array into a string and returns the string.
// const arr=[1, 2, 3, 4, 5];
// console.log(arr.join('*')); // '1*2*3*4*5' - joins elements with '*'
// default separator is comma ','


// 8. concat() - Merges two or more arrays and returns them into a new array.
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// console.log(arr1.concat(arr2)); 
// console.log(arr2.concat(arr1)); 


// 9. includes() - Determines whether an array includes a certain value among its value & returning true or false .
// const arrNum = [1, 2, 3, 4, 5];
// console.log(arrNum.includes(3)); // true
// console.log(arrNum.includes(6)); // false


// 10. indexOf() - Returns 1st index at which a given element is found in array, or -1 if not present.
// const arrNum = [1, 2, 3, 4, 5, 3];
// console.log(arrNum.indexOf(3)); // 2 => first occurrence of 3
// console.log(arrNum.indexOf(6)); // -1 => 6 is not present in the array
// console.log(arrNum.lastIndexOf(3)); // 5 => last occurrence of 3


// 11. reverse() - Reverses the elements of an array & returns reversed array.
// Destructive method, modifies the original array.
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse()); // [5, 4, 3, 2, 1]


// Nested Arrays 
// const arr = [ ['X', 'O', 'X'],[ 'O', 'X', 'O'],['X', 'O', 'X'] ];
// console.log(arr); 
// console.log(arr[0]); // ['X', 'O', 'X'] - first row
// console.log(arr[0][0]); // 'X' - first element of first row


// More Array Methods - map(), filter(), reduce(), sort().

// a. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.
// It is a Higher Order Function (HOF) - takes a function as an argument.
// returns a new array, does not modify the original array.

// const nums = [1, 2, 3, 4, 5];

// const square = n => n*n;
// const squaredNums = nums.map(square);
// console.log(squaredNums); // [1, 4, 9, 16, 25] - new array with squared values


// const sqrRoot = n => Math.sqrt(n);
// const sqrtNums = nums.map(sqrRoot);
// console.log(sqrtNums); // [1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979] - new array with square roots


// b. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
// const isOdd = n => {
//     if ( n % 2 !== 0) {
//         return true;
//     }
//     return false;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const oddNums = arr.filter(isOdd);
// console.log(oddNums); // [1, 3, 5, 7, 9] - new array with odd numbers

// const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// const checkFruitLen = fruit => {
//     if (fruit.length > 5) {
//         return true; 
//     }
//     return false;
// }

// const LongFruits = fruits.filter(checkFruitLen);
// console.log(LongFruits); // ['banana', 'orange'] - new array with fruits having length greater than 5


// c. reduce() - Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// const ar= [1, 2, 3, 4, 5];
// const sum = (prev, curr) => prev + curr; // Reducer function to sum the elements

// const sumArr = ar.reduce(sum);
// console.log(sumArr); // 15 - single output value (sum of all elements)

// const sumArr2 = ar.reduce(sum,5); // 5 is the initial value
// console.log(sumArr2); // 20 - single output value (sum of all elements + initial value 5)


// d. sort() - Sorts the elements of an array in place and returns the sorted array.
// Default sort is in ascending order, but it sorts elements as strings by default - hence may not work good for numbers properly.
// Destructive method, modifies the original array.

// const arr = [5, 2, 8, 1, 4, 12];
// arr.sort();
// console.log(arr); // [1, 12, 2, 4, 5, 8] - sorted as strings

// To sort numbers correctly, we need to provide a compare function.
// const ar = [5, 2, 8, 1, 4, 12];
// ar.sort( (a, b) => a - b ); // Ascending order
// console.log(ar); // [1, 2, 4, 5, 8, 12] - sorted correctly in ascending order

// The compare function (a, b) => a - b works like this:
// If the result is negative, a comes before b.
// If the result is positive, b comes before a.
// If it's 0, the order stays the same.


// ar.sort( (a, b) => b - a ); // Descending order
// console.log(ar); // [12, 8, 5, 4, 2, 1] - sorted correctly in descending order
