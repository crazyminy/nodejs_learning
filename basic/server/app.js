const router = require('./router')
const server = require("./server");

server.startServer(router.route);