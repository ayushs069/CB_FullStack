// reading file using fs module CB API
// fs.readFile(path, options, callback)

const {readFile} = require("fs");

readFile(
    "hello.txt",
    {
        encoding: "utf8"
    },
    (err,data)=>{
        if(err) return console.log("Error ", err);
        console.log(data);
    }

)