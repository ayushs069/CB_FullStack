let lib1 = require('./lib1');

let b = 20;

function sub(a,b){
    return a-b;
}


// Things added to the lib2 file
// module.exports = {
//     sub,
//     b,
//     lib1 
// }

// Circular Dependency
module.exports.lib1 = lib1;
module.exports.b = b;
module.exports.sub = sub;