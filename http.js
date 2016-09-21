/**
 * Created by 张鹏 on 2016/9/21.
 */
//创建服务器
var http = require("http");
http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    if(request.url!=="/favicon.ico"){
        console.log("hello,world");
        response.write("hello,world");
        response.end();
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');








