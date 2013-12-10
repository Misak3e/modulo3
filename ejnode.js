var http=require('http');
var path = require("path");
var fs = require("fs");
var puerto=process.argv[2]?process.argv[2]:8080;
http.createServer(function (request, response) {
var buscar = path.basename(decodeURI(request.url));
var split_url=request.url.split("/");
switch (split_url[1]) {
case ("html"): f = "pag1.html"; break;
case ("js"): f = "pag2.html"; break;
case ("color"):  f = "pag3.html"; break;
default: f = "error";
};
if (f != "error") {
fs.readFile(f, function(err, data){
     if (err) {response.writeHead(500); response.end("Error del Servidor"); return;}
     response.writeHead(200, {"Content-Type":"text/html"});
     response.end(data);
});
}
else {
response.writeHead(404);
response.end("Pagina no encontrada");
}
}).listen(puerto);
