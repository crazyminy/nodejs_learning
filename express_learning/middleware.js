const express = require("express");

var app = express();

app.use(function(req,res,next){
    
})

app.get("/",function(req,res,next){
    res.send("ok");
})

app.listen(3000);
console.log('listening on localhost:3000');