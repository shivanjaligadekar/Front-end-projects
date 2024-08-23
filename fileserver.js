var fs = require('fs');
var http = require('http');
http.createServer(function(req, res) {
    fs.readFile("demo.html","utf8",function(err,data) {
        if(!err) {
            res.end(data);
        }
    })

}).listen(9000);