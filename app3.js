
const http = require('http');

const fs = require('fs');
//파일 시스템 연결할 준비(서버위에 써야함)
const server = http.createServer();
//웹 서버 제작


const port = 8080;
//포트 번호는 원하는 번호로 지정하면됨 

server.listen(port, function (){
    console.log('웹서버가 시작되었습니다.')
});
server.on('connection', function(){
    console.log('사용자가 접속했습니다.')
});
server.on('request',function(req, res){
    console.log('클라이언트 요청이 들어왔습니다.')
    var imgfile = 'performance.png';
    fs.readFile(imgfile, function(err, data){
        res.writeHead(200, {"Content-Type" : "image/png"});
        res.write(data);
        res.end();
    });


});

server.on('close',function(){
    console.log('서버가 종료되었습니다');
})