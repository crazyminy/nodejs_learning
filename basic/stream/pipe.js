const fs = require("fs");

const myrs = fs.createReadStream(__dirname+'/tonight.mp3');
const myws = fs.createWriteStream(__dirname+"/new.mp3");

myrs.pipe(myws);