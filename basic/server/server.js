const http = require("http");
const fs = require("fs");

function startServer(route){
    var onRequest = function(request,response){

        console.log(request.url);
        route(request.url);

        // console.log("receive request");
        // console.log(__dirname)
        // response.writeHead(200,{'Content-Type':'text/html'});
        // let myrfs = fs.createReadStream(__dirname+'/index.html',"utf-8");
        // myrfs.pipe(response);    
    }
    
    var server = http.createServer(onRequest);
    
    server.listen(3000,"127.0.0.1");
}

module.exports = {
    startServer:startServer
}