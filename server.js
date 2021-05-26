var module = require('./dbmodule');
var url = require('url');
var querystring1 = require('querystring');
var http = require('http');


http.createServer(function(request, response) {
var data1 = '';
if (request.url === '/favicon.ico') {
response.writeHead(200, { 'Content-Type': 'image/x-icon' });
response.end();
} 
else
 {
request.on('data', function(chunk) {
            data1 += chunk;
        });

request.on('end', function() {
var name = querystring1.parse(data1)["fname"];
console.log(name);
var dept = querystring1.parse(data1)["emailAddr"];
console.log(dept);
if (request.url === '/login') 
{
  module.authenticateUser(name, dept,  response);
} 
else if (request.url === '/save') 
{
 module.saveUser(name, dept, response);
}
// else if (request.url === '/update') 
// {
//     module.update(name, dept, empid, response);
// }
else if (request.url === '/del') 
{
    module.del(name, response);
}
else {
console.log("invalid url");
}
            //console.log(name+" "+email);
            //module.authenticateUser(name,email,response); 
            //module.saveUser(name,email);
        });
    }
}).listen(3000);
console.log("Server started");


