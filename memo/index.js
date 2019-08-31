const express = require("express");

var app = express();

app.get("/",function(request,response){
    response.sendFile(__dirname+"/index.html");
})

app.listen(3000);
console.log("application start on localhost:3000");