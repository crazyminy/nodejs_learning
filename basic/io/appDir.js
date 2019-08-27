const fs = require("fs");

fs.unlink("./io/writeme.md",function(){
    console.log("delete succ");
})