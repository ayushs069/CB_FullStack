let lib2 = require('./lib2');

let a = 10;

function add(a,b){
    return a+b;
}

// Things added to the lib1 file
// module.exports = {
//     add,
//     a,
//     lib2
// }


// (File dependency map) = A structure that shows which file (key) depends on or requires which modules (value).


// Circular Dependency
module.exports.lib2 = lib2;
module.exports.a = a;
module.exports.add = add; 