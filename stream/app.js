const fs = require("fs");


const myReadStream = fs.createReadStream(__dirname + "/tonight.mp3");
const myWriteStream = fs.createWriteStream(__dirname + "/newTonight.mp3");

myReadStream.on("data",function(chunk){
    console.log("new chunk received");
    console.log(chunk);
    myWriteStream.write(chunk);
});

myReadStream.on("end",function(){
    console.log("end");
})