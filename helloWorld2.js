var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type':'text/html'});
  response.end('<h1>Hello World!!!!!!!!</h1>');
}).listen(3000);

/* =
var sever = http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type':'text/html'});
  response.end('Hello World!');
})
server.listen(3000);
*/

// -> 클라이언트를 대기, (웹)서버를 대기중 -> localhost:3000 <=> 192.168.1.128:3000

// 코드를 수정하면 바로 클라이언트에 적용X
// -> ctrl + c 로 서버 재부팅

// localhost:3000 을 ip주소를 통해 호스팅하면 다른 사람들도 접근 가능
// ip : 216.58.197.227 -> 도메인 : https://www.google.co.kr



/*
모듈
종류 :      기본 모듈 -> node.js를 깔면 자동으로 깔리는 모듈
            확장 모듈 -> 제3자가 만든 것.
*/