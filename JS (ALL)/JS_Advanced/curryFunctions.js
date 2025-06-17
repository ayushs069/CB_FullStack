//Curry Functions
// Functions that takes arguements one by one instead of all inputs at once

// basic func
// function sum(a,b,c){
//     return a + b + c;
// }
// console.log(sum(1,2,3)); 

// Curry function - used when you want to pass arguments one by one
function sum(a){
    if (!a) return 0;  // If no argument is passed, return 0
    
    let ans = a;

    function smallerSum(b){
        if(!b) return ans;        // If no argument is passed, return the accumulated sum
        ans += b;                // Add the new argument to the accumulated sum
        return smallerSum;      // Return the function itself for further calls
    }

    return smallerSum;
}

console.log(sum()) // 0
console.log(sum(10)()) // 10
console.log(sum(10)(20)()) // 30
console.log(sum(10)(20)(30)()) // 60
console.log(sum(10)(20)(30)(40)()) // 100

// () at last is used to return the final value of 2nd and 3rd last function