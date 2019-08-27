const fs = require("fs");

var readme = fs.readFile("./io/readme.md",'utf-8',function(err,data){
    console.log(data);
});

console.log("finished");