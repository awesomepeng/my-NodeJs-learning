/**
 * Created by ’≈≈Ù on 2016/9/22.
 */
var http = require("http");
var Person =require('./module4');
var Persons = Person.Person;
http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    if(request.url!=="/favicon.ico"){
        var person = new Persons('lisi',20);
        console.log(person.sayhello());
        response.write("hello,world");
        response.end();
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');
