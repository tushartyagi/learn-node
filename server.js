var http = require ("http");

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("Hello");
}).listen(8080, "0.0.0.0");

