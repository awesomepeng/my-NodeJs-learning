/**
 * Created by ’≈≈Ù on 2016/9/21.
 */
var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=="/favicon.ico"){
        response.write("hello,world");
        console.log("hello,world");
        var add = require("./module");
        add.add(1,2);
        response.end('');
    }
}).listen(8888);
