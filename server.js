var http = require('http');
// console.log(http);
http.createServer(function  (req, res) {
    res.end("live serve");
}).listen(9000);  //localhost:9000;
