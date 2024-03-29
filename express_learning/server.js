const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require('multer');
const upload = multer({dest:'uploads/'});


var app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.get("/",function(requset,response){
    // var responseJson = {
    //     name:"fzj",
    //     age:23,
    //     homeTown:"wuxi"
    // }
    // response.json(responseJson);
    //response.redirect("https://www.baidu.com")

    let params = (requset.query);
    response.send(params);
}); 

app.get("/fileUpload",function(request,response){
    console.log(__dirname);
    let page = fs.readFileSync("./index.html",{encoding:"utf-8"});
    response.send(page);
})

app.post("/upload",upload.single('logo'),function(request,response){
    response.send({retCode:0});
})


app.post("/",function(req,res){
    let params = req.body;
    res.json(params);
})

app.get("/profile/:id",function(request,response){
    response.send(`you request to see a profile page ${ request.params.id }`);
})

app.get("/ab+cd",function(req,res){
    res.send("abc");
})

app.listen(3000);

console.log('listening to port: 127.0.0.1:3000');
