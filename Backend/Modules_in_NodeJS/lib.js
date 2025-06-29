function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

// 1st. Not recommended as it pollutes the global space
// global.add = function add(a,b){
//     return a+b;
// }

// 2nd. This is recommended way to export functions  
// console.log(module.exports)  empty object

module.exports.addition = add
module.exports.subtraction = sub