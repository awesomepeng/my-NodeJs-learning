/**
 * Created by ’≈≈Ù on 2016/9/21.
 */
var http = require("http");
var Operation = require("./module2");
http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type": "text/html"});
    if(request.url!=="/favicon.ico"){
        response.write("hello,world");
        console.log(Operation.add(1,2));
        console.log(Operation.subtraction(3,4));
        response.end();
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');

