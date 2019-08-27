var fs = require("fs");

var readme = fs.readFileSync("./io/readme.md","utf-8");

console.log(readme);

fs.writeFileSync("./io/writeme.md",readme);
