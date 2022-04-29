const http = require('http');
const fs = require('fs');//꼭 넣어야함//

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('test.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});//html을 넣어야 읽고, 작성할 수 있음
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 